<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;


use Illuminate\Support\Facades\Auth;
use App\Models\rcstemplate;
use App\Models\rcssetting;
use App\Models\rcs_campaign;
use App\Models\Sms_Model;
use Carbon\Carbon;




class rcs_campaign extends Model
{
    use HasFactory;

    public function sent_rcs($request,$user_id)
    {
    	$sms_model=new Sms_Model;
        $rcs_campaign=new rcs_campaign;

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
        $new_array = $sms_model->numberValidation($result_array, $user_id);

        // Balance Deductation
        $Credit=1;

        $total_balance = User::select('rcs_balance')->where('id', $user_id)->first();
        $rcs_balance = $total_balance->rcs_balance;
        $totla_deducted = $Credit * sizeof($new_array);

        $template= rcstemplate::where('user_id', Auth::id())->where('id', $request->template_id)->first();
        // return $template;
        if ($rcs_balance >= $totla_deducted)
        {
            $campaign_id = md5(uniqid());
            $dt = Carbon::now()->toDateTimeString();
            $a = array(
                "campaign_id" => $campaign_id,
                "user_id" => $user_id,
                'campaign_name' => $request->campaign_name,
                "total_messages" => sizeof($new_array),
                "template_id" => $request->template_id,
                "submit_date" => $dt,
            );

            $send_rcs=DB::table('rcs_campaigns')->insert($a);

            if($send_rcs){
                if (sizeof($new_array)){
                    foreach ($new_array as $mobile){
                        DB::table('rcs_sent')->insert(
                            array(
                                "campaign_id" => $campaign_id,
                                "user_id" => $user_id,
                                "agent_id" => $request->agent_id,
                                "receivers" => $mobile,
                                "message" => $template->content,
                                "submit_date" => $dt
                            )
                        );  
                    }

                    if ($rcs_balance >= $totla_deducted) {
                        $remain_balance = $rcs_balance - $totla_deducted;
                        User::where('id', $user_id)->limit(1)->update(array('rcs_balance' => $remain_balance)); 
                    }else{
                        return "Insufficient Balance";
                        die;
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
}