<?php

namespace App\Http\Controllers;
ini_set('max_execution_time', '3600');
ini_set('memory_limit', '107374182400');



use Validator; 
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use App\Http\Requests\RequestHelper;
use Illuminate\Support\Facades\Session;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Contracts\Encryption\DecryptException;
use Spatie\QueryBuilder\QueryBuilder;


use App\Models\User;
use App\Models\Sms_Model;
use App\Models\sent_sms;
use App\Models\sms_campaign;
use App\Models\senderId;
use App\Models\template;
use App\Models\phonebook;


class SendSmsController extends Controller
{
    public function sendSms(Request $request)
    {   
        $validated = Validator::make($request->all(), [ 
            'sender' => 'required|min:6',
            'template_id' => 'required|numeric|min:19',
            'message' => 'required',
            // 'message_type' => 'required',
            'route' => 'required',
            'campaign_name' => 'required',
        ]);

        if($validated->fails())
        {
            return response()->json([
                'Message' => $validated->errors(),
                'Status' => 'Failed',
            ], 403);   
        }
        else
        {
            $sms_model=new Sms_Model;
            $user_id=Auth::id();
            if ($request->is_custom==1) {
                return $sms_model->sent_custom_sms($request, $user_id);
            }
            
            
            return $sms_model->sent_sms($request, $user_id);
        }
    }

    public function sendCustomSms(Request $request)
    {   

        $validated = Validator::make($request->all(), [ 
            'sender' => 'required|min:6',
            'template_id' => 'required|numeric|min:19',
            'message' => 'required',
            'message_type' => 'required',
            'route' => 'required',
            'campaign_name' => 'required',
        ]);

        if($validated->fails())
        {
            return response()->json([
                'Message' => $validated->errors(),
                'Status' => 'Failed',
            ], 403);   
        }
        else
        {
            $sms_model=new Sms_Model;
            $user_id=Auth::id();
            
            return $sms_model->sent_custom_sms($request, $user_id);
        }
    }
   
    public function resendSms(Request $request)
    {
       
        $validated = Validator::make($request->all(), [ 
            'campaign_id' => 'required',
            'status' => 'required',
        ]);
        
        if($validated->fails())
        {
            return response()->json([
                'Message' => $validated->errors(),
                'Status' => 'Failed',
            ], 403);   
        }
        else
        { 
            DB::enableQueryLog();
            if($request->status == "all"){

                $receivers = sent_sms::where('campaign_id', $request->campaign_id)->get('receivers');
            
            }elseif ($request->status == "8") {

                $receivers = sent_sms::where(['campaign_id'=> $request->campaign_id, 'dlr_mask'=>'8'])->get('receivers');

            }elseif ($request->status == "2") {

                $receivers = sent_sms::where(['campaign_id'=> $request->campaign_id, 'dlr_mask'=>'2'])->get('receivers');


            }elseif ($request->status == "1") {

                $receivers = sent_sms::where(['campaign_id'=> $request->campaign_id, 'dlr_mask'=>'1'])->get('receivers');

            }elseif ($request->status == "923") {

                $receivers = sent_sms::where(['campaign_id'=> $request->campaign_id, 'dlr_mask'=>'923'])->get('receivers');

            }elseif ($request->status == "5") {

                $receivers = sent_sms::where(['campaign_id'=> $request->campaign_id, 'dlr_mask'=>'5'])->get('receivers');

            }elseif ($request->status == "6") {

                $receivers = sent_sms::where(['campaign_id'=> $request->campaign_id, 'dlr_mask'=>'6'])->get('receivers');

            }

            $campaign_data = DB::table('sms_campaign')->select('user_id','campaign_name',  'message', 'message_type', 'route', 'sender', 'template_id', 'flash_message')->where('campaign_id', $request->campaign_id)->where('user_id', Auth::id())->get();


            foreach ($receivers as $value) {
                $num[] = $value['receivers'];
            }


            $request = [
                    'campaign_name' => $campaign_data[0]->campaign_name,
                    'message' => $campaign_data[0]->message,
                    'message_type' => $campaign_data[0]->message_type,
                    'route' => $campaign_data[0]->route,
                    'sender' => $campaign_data[0]->sender,
                    'template_id' => $campaign_data[0]->template_id,
                    'flash_message' => $campaign_data[0]->flash_message,
                    'receivers' =>  implode(',', $num),
                ];

            $request =  json_decode(json_encode($request));
            $sms_model=new Sms_Model;
            $user_id=Auth::id();
                
            return $sms_model->sent_sms($request, $user_id);
        } 

    }
    public function sms()
    {   

        $sender = senderId::where('user_id', Auth::id())->where('status', 'approved')->get('sender');

        $template_id = template::select('content', 'template_id')->where('user_id', Auth::id())->where('status', 'approved')->get();

        $data = phonebook::where('user_id', Auth::id())->get();
      
        return response()->json([
            'sender' => $sender,
            'template_id' => $template_id,
            'data' => $data
        ], 200);

    }

    public function phonebook_conctact($group_id)
    {
        $data = DB::table('contact_detail')->select('contact_number')->where('group_id', $group_id)->get();
        return $data;
    }

}