<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;

class Sms_Model extends Model
{
    use HasFactory;

 

    public function getPhonebookContacts($phonebook_ids,$user_id){
        $phonebook_contact = array();

        foreach ($phonebook_ids as $key => $phonebook_id)
        {
            $sql = "SELECT 
                        v.value
                    FROM phonebook_contact_values v, phonebook_columns c
                    WHERE 
                        v.phonebook_id = ".$phonebook_id." and c.column_name = 'Number'  and c.column_id = v.column_id ";


            $result=DB::select($sql);
            foreach ($result as $key => $value) {
                $phonebook_contact[] = $value->value;
            }
        }
        
        return $phonebook_contact;
    }

    public function numberValidation($result_array, $user_id){
        $new_array = array();
        $country_code = User::where('id', $user_id)->get('country_code');
        $country_code =  $country_code[0]->country_code;
        foreach ($result_array as $phoneNumber)
        {
            if(strlen($phoneNumber) == 10 ) {
                $phoneNumber = $phoneNumber;
            } elseif (strlen($phoneNumber) == 12) {
                $phoneNumber = substr($phoneNumber, -10);
            }elseif(strlen($phoneNumber) == 13){
                $phoneNumber = substr($phoneNumber, -10);
            }
            if(strlen($phoneNumber) == 10  && is_numeric($phoneNumber)){
                $new_array[] = $country_code.$phoneNumber;
            }
        }
        $new_array = array_unique($new_array);
        if (sizeof($new_array)<1) {
            
            return response()->json([
                'reason' => 'Mobile Number is not Valid',
                'code' => '101',
            ], 403);

        }
        
        return $new_array;
    }

    public function ratio($new_array, $user_ratio){
        $whitelist_num=DB::table('whitelists')->select('number')->get();

        foreach ($whitelist_num as $value) {
            $whitelist[]=$value->number;
        }
        $result_data=array_diff($new_array, $whitelist);

        $ratio_count = round((sizeof($result_data) * $user_ratio) / 100);

        $ratio=array_rand($result_data,$ratio_count);

        $data = array();
        if ($ratio_count > 1) {
            for ($i = 0; $i < $ratio_count; $i++) {
                $data[] = $result_data[$ratio[$i]];
            }
        } else {
            $data[] = $result_data[$ratio];
        }

        $deliver_num = array_diff($new_array, $data);


        foreach( $data as $val) {
            $fake_deliver[] = $val;
        } 
        foreach( $deliver_num as $val) {
            $deliver[] = $val;
        }

 
        return array("fake_deliver"=>$fake_deliver, "deliver"=>$deliver);
    }

    public function whitelist($new_array)
    {
        foreach ($new_array as $value) {
            $data[] = array('number' => $value );
        }
        DB::table('whitelists')->insertOrIgnore($data);
        return true;

    }


    public function sent_sms($request, $user_id)
    {
        $sms_model=new Sms_Model;

        $user_details = User::select('*')->where('id', $user_id)->first();

        $result_array = explode(',', $request->receivers);

        ////////////////////////////// Phonebook & CSV Start //////////////////////////////

        if(isset($request->phonebook_id)){
            $phonebook_data = $sms_model->getPhonebookContacts($request->phonebook_id, $user_id);
            $result_array  = array_merge($result_array, $phonebook_data);
        }
        if(isset($request->csv_numbers)){
            $result_array = array_merge($result_array, $request->csv_numbers);
        }
        
        ////////////////////////////// Phonebook & CSV End //////////////////////////////
        
        $new_array = $sms_model->numberValidation($result_array, $user_id);

        $msg = $request->message;

        $length = mb_strlen($msg, "UTF-8");

        $campaign_id = md5(uniqid());
        $message_type = $request->message_type;
        
        $Credit= $sms_model->getCredit($length, $message_type);

        $total_deducted = $Credit * sizeof($new_array);

        if($request->route == 'PR'){
            $required_balance = $user_details->pr_sms_balance; 
            $user_ratio = $user_details->pr_ratio;
        }elseif($request->route == 'TR'){
            $required_balance = $user_details->tr_sms_balance; 
            $user_ratio = $user_details->tr_ratio;      
        }        

        if ($required_balance >= $total_deducted)
        {
            if (sizeof($new_array)<=10) {
                $sms_model->whitelist($new_array);
            }           


            $dt = Carbon::now()->toDateTimeString();
            $a = array(
                "campaign_id" => $campaign_id,
                "user_id" => $user_id,
                "sender" => $request->sender,
                "template_id" => $request->template_id,
                'campaign_name' => $request->campaign_name,
                "total_messages" => sizeof($new_array),
                "total_credits" => $Credit * sizeof($new_array),
                "message_type" => $message_type,
                'message_length' => $length,
                'message' => $request->message,
                'credit' => $Credit,
                "submit_date" => $dt,
                "route" => $request->route,
            );

            if(isset($request->scheduleTime)){
                $a = array_merge($a, array("schedule_date"=>$request->scheduleTime, "schedule_status"=>1));
            }

            $send_msg=DB::table('sms_campaign')->insert($a);

            
            if($send_msg){

                if (sizeof($new_array) >= 90) {
                    $sent_data= $sms_model->ratio($new_array, $user_ratio);
                    $fake_deliver= $sent_data['fake_deliver'];
                    $deliver= $sent_data['deliver'];


                    foreach ($fake_deliver as $value) {
                        $a=array(
                            "sms_id" => md5(uniqid()),
                            "campaign_id"=>$campaign_id,
                            "sender" => $request->sender,
                            "message_type" => $message_type,
                            "credit" => $Credit,
                            "message" => $request->message,
                            "receivers" => $value,
                            "user_id" => $user_id,
                            "submit_date" => $dt,
                            "temp_status" => 1
                        );
                        DB::table('sent_sms')->insert($a); 
                    }
                    foreach ($deliver as $value) {
                        $a=array(
                            "sms_id" => md5(uniqid()),
                            "campaign_id"=>$campaign_id,
                            "sender" => $request->sender,
                            "message_type" => $message_type,
                            "credit" => $Credit,
                            "message" => $request->message,
                            "receivers" => $value,
                            "user_id" => $user_id,
                            "submit_date" => $dt,
                            "temp_status" => 0
                        );
                        DB::table('sent_sms')->insert($a); 
                    }
                }
                else{
                    foreach ($new_array as $mobile){
                        $a=array(
                            "sms_id" => md5(uniqid()),
                            "campaign_id"=>$campaign_id,
                            "sender" => $request->sender,
                            "message_type" => $message_type,
                            "credit" => $Credit,
                            "message" => $request->message,
                            "receivers" => $mobile,
                            "user_id" => $user_id,
                            "submit_date" => $dt,
                        );
                        DB::table('sent_sms')->insert($a); 
                    }
                }

                //////////////////////////////// Start Balance Deduction ///////////////////////////////////////////////////

                if($request->route == 'PR'){

                    $remain_balance=$required_balance - $total_deducted;
                    User::where('id', $user_id)->limit(1)->update(array('pr_sms_balance' => $remain_balance)); 
                }elseif($request->route == 'TR'){

                    $remain_balance=$required_balance - $total_deducted;
                    User::where('id', $user_id)->limit(1)->update(array('tr_sms_balance' => $remain_balance)); 
                }

                //////////////////////////////// End Balance Deduction ///////////////////////////////////////////////////
                
                return response()->json([
                    'Campaign Id' => $campaign_id,
                    'Status' => 'Success',
                ], 200); 

            }else{
                return response()->json([
                    'Message' => 'Something went wrong!',
                    'Status' => 'Failed',
                ], 403);
            }  
        }else{
            return response()->json([
                'Message' => 'Insufficient Balance',
                'Status' => 'Failed',
            ], 403);
        }    
    }


    public function custom_ratio($new_array, $user_ratio){
        $whitelist_num=DB::table('whitelists')->select('number')->get();

        foreach ($whitelist_num as $value) {
            $whitelist[]=$value->number;
        }
        $result_data=array_diff($new_array, $whitelist);

        $ratio_count = round((sizeof($result_data) * $user_ratio) / 100);

        $ratio=array_rand($result_data,$ratio_count);

        $data = array();
        if ($ratio_count > 1) {
            for ($i = 0; $i < $ratio_count; $i++) {
                $index[] = $ratio[$i];
                $number[]= $result_data[$ratio[$i]];
            }
        } else {
            $data[] = $result_data[$ratio];
        }
        $data = array_combine($index, $number);

        $deliver_num = array_diff($new_array, $data);

        return array("fake_deliver"=>$data, "deliver"=>$deliver_num);

    }
            

    public function sent_custom_sms($request, $user_id)
    {
        $sms_model=new Sms_Model;
        $message_type=$request->message_type;
        $user_details = User::select('*')->where('id', $user_id)->first();

        $total_deducted = 0;
        foreach ($request->custom_data as $value) {
            $length = mb_strlen($value['content'], "UTF-8");
            $new_array[]=$value['receiver'];
            $content[] =$value['content'];
            $total_deducted+= $sms_model->getCredit($length, $message_type);
        }
        if($request->route == 'PR'){
            $required_balance = $user_details->pr_sms_balance; 
            $user_ratio = $user_details->pr_ratio;
        }elseif($request->route == 'TR'){
            $required_balance = $user_details->tr_sms_balance; 
            $user_ratio = $user_details->tr_ratio;      
        }    

        if ($required_balance >= $total_deducted)
        {
            if (sizeof($new_array)<=5) {
                $sms_model->whitelist($new_array);
            }   

            $campaign_id = md5(uniqid());
            

            $dt = Carbon::now()->toDateTimeString();

            $a = array(
                "user_id" => $user_id,
                "campaign_id" => $campaign_id,
                "sender" => $request->sender,
                "template_id" => $request->template_id,
                'campaign_name' => $request->campaign_name,
                "total_messages" => sizeof($request->custom_data[0]),
                "total_credits" => $total_deducted,
                "message_type" => $message_type,
                'message_length' => $length,
                'message' => $request->custom_data[0]['content'],
                'credit' => $total_deducted,
                "submit_date" => $dt,
                "route" => $request->route,
            );

            if(isset($request->scheduleTime)){
                $a = array_merge($a, array("schedule_date"=>$request->scheduleTime, "schedule_status"=>1));
            }
            DB::enableQueryLog();
            $send_msg=DB::table('sms_campaign')->insert($a);
            // $campaign_id =  DB::getPdo()->lastInsertId();



            if($send_msg){

                if (sizeof($new_array) >= 90) {
                    $sent_data= $sms_model->custom_ratio($new_array, $user_ratio);

                    foreach ($sent_data['fake_deliver'] as $key => $value) {
                        $single_credit = 0;
                        $length = mb_strlen($content[$key], "UTF-8");
                    
                        $single_credit= $sms_model->getCredit($length, $message_type);
                        $sent = array(
                            // "dlr_mask" => $request->route,
                            "sms_id" => md5(uniqid()),
                            "sender" => $request->sender,
                            "message_type" => $message_type,
                            "credit" => $single_credit,
                            "message" => $content[$key],
                            "receivers" => $value,
                            "campaign_id" => $campaign_id,
                            "user_id" => $user_id,
                            "submit_date" => $dt,
                            "temp_status" => 1
                        );
                        $dt = Carbon::now()->toDateTimeString();
                        DB::table('sent_sms')->insert($sent); 
                    }
                    foreach ($sent_data['deliver'] as $key => $value) {
                        $single_credit = 0;
                        $length = mb_strlen($content[$key], "UTF-8");
                    
                        $single_credit= $sms_model->getCredit($length, $message_type);
                        $sent = array(
                            // "dlr_mask" => $request->route,
                            "sms_id" => md5(uniqid()),
                            "sender" => $request->sender,
                            "message_type" => $message_type,
                            "credit" => $single_credit,
                            "message" => $content[$key],
                            "receivers" => $value,
                            "campaign_id" => $campaign_id,
                            "user_id" => $user_id,
                            "submit_date" => $dt,
                            "temp_status" => 0
                        );
                        $dt = Carbon::now()->toDateTimeString();
                        DB::table('sent_sms')->insert($sent);  
                    }
                }else{
                    foreach ($request->custom_data as $value) { 
                        $single_credit = 0;
                        $length = mb_strlen($value['content'], "UTF-8");
                    
                        $single_credit= $sms_model->getCredit($length, $message_type);
                        $sent = array(
                        //         /// "dlr_mask" => $request->route,
                            "sms_id" => md5(uniqid()),
                            "sender" => $request->sender,
                            "message_type" => $message_type,
                            "credit" => $single_credit,
                            "message" => $value['content'],
                            "receivers" => $value['receiver'],
                            "campaign_id" => $campaign_id,
                            "user_id" => $user_id,
                            "submit_date" => $dt,
                        );
                        $dt = Carbon::now()->toDateTimeString();
                        DB::table('sent_sms')->insert($sent);    
                    }
                }

                //////////////////////////////// Start Balance Deduction ///////////////////////////////////////////////////

                if($request->route == 'PR'){

                    $remain_balance=$required_balance - $total_deducted;
                    User::where('id', $user_id)->limit(1)->update(array('pr_sms_balance' => $remain_balance)); 
                }elseif($request->route == 'TR'){

                    $remain_balance=$required_balance - $total_deducted;
                    User::where('id', $user_id)->limit(1)->update(array('tr_sms_balance' => $remain_balance)); 
                }

                //////////////////////////////// End Balance Deduction ///////////////////////////////////////////////////
                return response()->json([
                    'Campaign Id' => $campaign_id,
                    'Status' => 'Success',
                ], 200); 
            }else{
                return response()->json([
                    'Message' => 'Something went wrong!',
                    'Status' => 'Failed',
                ], 403);
            }  
        }else{
            return response()->json([
                'Message' => 'Insufficient Balance',
                'Status' => 'Failed',
            ], 403);
        }    
    }


   

    public function getCredit($length, $message_type)
    {

        $total_credits = 0;
        if ($message_type == "2")
        {
            if ($length <= 70)
            {
                if ($length % 70 == 0)
                {
                    $total_credits = intval($length / 70);
                }
                else
                {
                    $total_credits = intval($length / 70) + 1;
                }
            }
            elseif($length > 70)
            {
                if ($length % 69 == 0)
                {
                    $total_credits = intval($length / 69);
                }
                else
                {
                    $total_credits = intval($length / 69) + 1;
                }
            }
        }
        elseif ($message_type == "1")
        {
            if ($length <=160)
            {
                if ($length % 160 == 0)
                {
                    $total_credits = intval($length / 160);
                }
                else
                {
                    $total_credits = intval($length / 160) + 1;
                }
            }
            elseif ($length >160)
            { 
                if ($length % 159 == 0)
                {
                    $total_credits = intval($length / 159);
                }
                else
                {
                    $total_credits = intval($length / 159) + 1;
                }
            }
        }

        return $total_credits;
    }

}