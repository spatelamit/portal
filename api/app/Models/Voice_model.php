<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;
use wapmorgan\Mp3Info\Mp3Info;
use App\Models\save_voice_draft;


class Voice_model extends Model
{
    use HasFactory;
    public function sent_voice($request, $user_id){
        $sms_model=new Sms_Model;
        $voice_model=new Voice_model;

        $result_array = explode(',', $request->receivers);
        #Phonebook Start

        if(isset($request->phonebook_id)){
            $phonebook_data = $sms_model->getPhonebookContacts($request->phonebook_id, $user_id);
            $result_array  = array_merge($result_array, $phonebook_data);
        }
        if(isset($request->csv_numbers)){
            $result_array = array_merge($result_array, $request->csv_numbers);
        }
 
        #Phonebook END

        $voice= voice_template::where('user_id', Auth::id())->where('draft_id', $request->draft_id)->first();

        $new_array = $sms_model->numberValidation($result_array, $user_id);
        $length=$voice->duration;
        $Credit= $voice_model->getCredit($length);


        // Balance Deductation
        $total_balance = User::select('*')->where('id', $user_id)->get();

        foreach ($total_balance as $key) {
            $pr_voice_balance =  $key->pr_voice_balance;
            $tr_voice_balance =  $key->tr_voice_balance;
        }

        $totla_deducted = $Credit * sizeof($new_array);

        if (($pr_voice_balance >= $totla_deducted) ||  ($tr_voice_balance >= $totla_deducted))
        {
            

            $campaign_id = md5(uniqid());



            $dt = Carbon::now()->toDateTimeString();
            $a = array(
                "campaign_id" => $campaign_id,
                "user_id" => $user_id,
                'campaign_name' => $request->campaign_name,
                "total_messages" => sizeof($new_array),
                "draft_id" => $request->draft_id,
                "total_credits" => $Credit * sizeof($new_array),
                "sender" => $request->sender,
                'message' => "http://".$request->getHttpHost().'/'.$voice->voice_file,
                'message_length' => $length,
                'credit' => $Credit,
                "submit_date" => $dt,
                "route" => $request->route,
            );

            if(isset($request->scheduleTime)){
                $a = array_merge($a, array("schedule_date"=>$request->scheduleTime, "schedule_status"=>1));
            }

            $send_voice=DB::table('voice_campaigns')->insert($a);

            if($send_voice){
                if (sizeof($new_array)){
                    foreach ($new_array as $mobile){
                        DB::table('voice_sents')->insert(
                            array(
                                // "route" => $request->route,
                                "sender" => $request->sender,
                                "credit" => $Credit,
                                "message" => $request->message,
                                "receivers" => $mobile,
                                "campaign_id" => $campaign_id,
                                "user_id" => $user_id,
                                "submit_date" => $dt,
                            )
                        );  
                    }

                    if($request->route == 'PR'){
                        if ($pr_voice_balance >= $Credit * sizeof($new_array)) {
                            $remain_balance = $pr_voice_balance - $Credit * sizeof($new_array);
                            User::where('id', $user_id)->limit(1)->update(array('pr_voice_balance' => $remain_balance)); 
                        }else{
                            return "Insufficient Balance";
                            die;
                        }
                    }elseif($request->route == 'TR'){
                        if ($tr_voice_balance >= $Credit * sizeof($new_array)) {
                            $remain_balance = $tr_voice_balance - $Credit * sizeof($new_array);
                            User::where('id', $user_id)->limit(1)->update(array('tr_voice_balance' => $remain_balance)); 
                        }else{
                            return "Insufficient Balance";
                            die;
                        }   
                    }
                }
                return response()->json([
                    'Campaign Id' => $campaign_id,
                    'Status' => '200',
                ], 200); 

            }else{
                return response()->json([
                    'Message' => 'Something went wrong!',
                    'Status' => 'Failed',
                ], 403);
            }  
        }else{
            return response()->json([
                'Message' => 'Insufficient Balance"',
                'Status' => 'Failed',
            ], 403);
        }  
            
    }


    public function getCredit($length)
    {

        $total_credits = 0;

        if ($length <= 30)
        {

            if ($length % 30 == 0)
            {
                $total_credits = intval($length / 30);
            }
            else
            {
                $total_credits = intval($length / 30) + 1;
            }
        }
        elseif($length > 30) 
        {
            if ($length % 29.9 == 0)
            {
                $total_credits = intval($length /29.9);
            }
            else
            {
                $total_credits = intval($length / 29.9) + 1;
            }
        }
        

        return $total_credits;
    }
}
