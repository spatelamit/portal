<?php

namespace App\Http\Controllers;
ini_set('max_execution_time', '3600');
ini_set('memory_limit', '107374182400');

use Validator; 
use App\Models\User;
use App\Models\Sms_Model;
use App\Models\Mail_model;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Requests\RequestHelper;
use Illuminate\Support\Facades\Session;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Contracts\Encryption\DecryptException;
use Carbon\Carbon;
use Spatie\QueryBuilder\QueryBuilder;

use App\Models\sent_sms;
use App\Models\sms_campaign;


class ApiController extends Controller
{
    public function send(Request $requset)
    {
        $validated = Validator::make($requset->all(), [ 
            // 'sender' => 'required',
            'service_type' => 'required',
            // 'template_id' => 'required|numeric|min:19',
            // 'receivers' => 'required|min:10|max:12',
            // 'message' => 'required',
            // 'route' => 'required',
            // 'campaign_name' => 'required',
            'auth_key' => 'required',
        ]);


        if(!$validated->fails()){

            if($requset->service_type=='sms'){

                $sms_model=new Sms_Model;

                $user_id = User::select('id')->where('auth_key', $requset->auth_key)->get();
    
                $response= $sms_model->sent_sms($requset,$user_id);
              
                return $response;
            }elseif($requset->service_type=='voice'){

                $voice_model=new Voice_Model;

                $user_id = User::select('id')->where('auth_key', $requset->auth_key)->get();
    
                $response= $voice_model->sent_voice($request, $user_id);
              
                return $response;
            }elseif($requset->service_type=='email'){

                $mail_model=new Mail_model;

                $user_id = User::select('id')->where('auth_key', $requset->auth_key)->get();
    
                $response= $mail_model->sent_mail($request, $user_id);
              
                return $response;
            }
            
        }
        else
        {
            return response()->json([
                'Message' => $validated->messages()->toJson(),
                'Status' => 'Failed',
            ], 403); 
        }
        
    }

    public function fetch_balance(Request $requset)
    {
        $validated = Validator::make($requset->all(), [ 
            'service_type' => 'required',
            'auth_key' => 'required',
        ]);

        if(!$validated->fails())
        {
            $service = explode(',', $requset->service_type);
            $service = array_unique($service);
            foreach ($service as $value) {
                if($value=='sms'){
                    $c[] = 'pr_sms_balance';
                    $c[] = 'tr_sms_balance';   
                }

                if($value=='voice'){
                    $c[] = 'pr_voice_balance';
                    $c[] = 'tr_voice_balance';  
                }

                if($value=='email'){
                    $c[] = 'mail_balance';   
                }

                if($value=='rcs'){
                    $c[] = 'rcs_balance';
                }
            }

            $balance = User::where('auth_key', $requset->auth_key)->get($c);
            $balance = $balance[0];
            

            $a = array();
            if(isset($balance['pr_sms_balance'])) {
                $a = array_merge($a,['Promotional Sms' => $balance['pr_sms_balance']]);   
            }

            if (isset($balance['tr_sms_balance'])) {
                $a = array_merge($a,['Transactional Sms' => $balance['tr_sms_balance']]);   
            }

            if(isset($balance['pr_voice_balance'])) {
                $a = array_merge($a,['Promotional Voice' => $balance['pr_voice_balance']]);   
            }

            if (isset($balance['tr_voice_balance'])) {
                $a = array_merge($a,['Transactional Voice' => $balance['tr_voice_balance']]);   
            }

            if(isset($balance['mail_balance'])) {
                $a = array_merge($a,['Mailer' => $balance['mail_balance']]);   
            }

            if(isset($balance['rcs_balance'])) {
                $a = array_merge($a,['RCS' => $balance['rcs_balance']]);
            }

            return response()->json($a);
        }
        else
        {
            return response()->json([
                'Message' => $validated->messages()->toJson(),
                'Status' => 'Failed',
            ], 403); 
        }
        
    }

    

    public function fetch_report(Request $requset)
    {
        $validated = Validator::make($requset->all(), [ 
            'service_type' => 'required',
            'auth_key' => 'required',
        ]);

        if(!$validated->fails())
        {
            if($requset->service_type=='sms')
            {    

                $report = DB::table('sms_campaign')->select('campaign_id','mobile_numbers','sender_id', 'total_credits', 'message', 'status', 'numbers')->where('campaign_id', $requset->campaign_id)->get();
            }

            // if($requset->service_type=='voice')
            // {
            //     $balance = User::where('auth_key', $requset->auth_key)->get(['pr_voice_balance','tr_voice_balance']);  
            //     $promotional = $balance[0]['pr_voice_balance']; 
            //     $transactional  = $balance[0]['tr_voice_balance']; 
            //     $balance = ['Promotional' => $promotional, 'Transactional'=> $transactional];   

            // }

            // if($requset->service_type=='email')
            // {
            //     $balance = User::where('auth_key', $requset->auth_key)->get('mail_balance');
            //     $balance = $balance[0]['mail_balance']; 
            //     $balance = ['Mailer' => $balance];   
            // }

            // if($requset->service_type=='rcs')
            // {
            //     $balance = User::where('auth_key', $requset->auth_key)->get('rcs_balance');   
            //     $balance = $balance[0]['rcs_balance']; 
            //     $balance = ['RCS' => $balance];
            // }

            return response()->json($report[0]);
        }
        else
        {
            return response()->json([
                'Message' => $validated->messages()->toJson(),
                'Status' => 'Failed',
            ], 403); 
        }
        
    }
}
