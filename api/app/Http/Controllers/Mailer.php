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
use App\Models\Mail_model;


class Mailer extends Controller
{
    public function verifyMailStatus()
    {
    	$data=DB::table('email_verify')->select('*')->where('user_id', Auth::id())->get();
        
        return $data;

	}

    public function deleteMail($id)
    {
        
        DB::table('email_verify')->where('verify_id', $id)->where('user_id', Auth::id())->delete();
        // return $a;
        DB::statement('ALTER TABLE email_verify AUTO_INCREMENT = 1');

        return response()->json([
            'message' => 'Your E-Mail Deleted Successfully',
            'status' => 200,
        ], 200);
			

    }
	public function getVerifiedMail()
	{
		$data=DB::table('email_verify')->select('*')->where('user_id', Auth::id())->where('status',1)->get();
        
        return $data;

	}


	public function verifyMail(Request $request)
	{
		$validated = Validator::make($request->all(), [ 
            'email' => 'required'
        ]);

        if(!$validated->fails())
        {
        	DB::table('email_verify')->insert([
                "user_id" => Auth::id(),
                "verify_email" => $request->email,
            ]); 


            return response()->json([
                'message' => 'Your Request is submitted',
                'status' => 200,
            ], 200);
			
        }
        return response()->json([
            'Message' => $validated->errors(),
            'Status' => 'Failed',
        ], 403);   

	}
    public function send_mail(Request $request)
    {
        $validated = Validator::make($request->all(), [ 
            'sender' => 'required',
            'sender_name' => 'required',
            'subject' => 'required',
            'body' => 'required'

        ]);

        if(!$validated->fails())
        {
			$mail_model=new Mail_model;
            $user_id=Auth::id();

            return $mail_model->sent_mail($request, $user_id);
            
        }
        return response()->json([
            'Message' => $validated->errors(),
            'Status' => 'Failed',
        ], 403);   
    }

    public function resendMail(Request $request)
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
                $recipient = DB::table('email_inbox')->select('email')->where('campaign_id', $request->campaign_id);
            }elseif ($request->status == "8") {
                $recipient = DB::table('email_inbox')->select('email')->where('campaign_id', $request->campaign_id)->where('dlr_mask',"8");
            }elseif ($request->status == "923") {
                $recipient = DB::table('email_inbox')->select('email')->where('campaign_id', $request->campaign_id)->where('dlr_mask',"923");
            }elseif ($request->status == "1") {
                $recipient = DB::table('email_inbox')->select('email')->where('campaign_id', $request->campaign_id)->where('dlr_mask',"1");
            }elseif ($request->status == "2") {
                $recipient = DB::table('email_inbox')->select('email')->where('campaign_id', $request->campaign_id)->where('dlr_mask',"2");
            }elseif ($request->status == "5") {
                $recipient = DB::table('email_inbox')->select('email')->where('campaign_id', $request->campaign_id)->where('dlr_mask',"5");
            }elseif ($request->status == "6") {
                $recipient = DB::table('email_inbox')->select('email')->where('campaign_id', $request->campaign_id)->where('dlr_mask',"6");
            }
            $recipient = $recipient->get();
            $count = $recipient->count();
            if ($count==0) {
                return response()->json([
                    'Message' => 'No Email is there',
                    'Status' => 'Failed',
                ], 403);
            }


            $campaign_data = DB::table('email_campaign')->select('sender_source', 'sender_email', 'subject', 'email_content', 'submit_date', 'schedule_time')->where('campaign_id', $request->campaign_id)->where('user_id', Auth::id())->get();


            foreach ($recipient as $value) {
                $num[] = $value->email;
            }


            $request = [
                    'sender_name' => $campaign_data[0]->sender_source,
                    'sender' => $campaign_data[0]->sender_email,
                    'subject' => $campaign_data[0]->subject,
                    'body' => $campaign_data[0]->email_content,
                    'submit_date' => $campaign_data[0]->submit_date,
                    'schedule_time' => $campaign_data[0]->schedule_time,
                    'recipient' =>  implode(',', $num),
                    // 'schedule_time' => $campaign_data[0]->schedule_time,
                ];

            $request =  json_decode(json_encode($request));
            $mail_model=new Mail_model;
            $user_id=Auth::id();
                
            return $mail_model->sent_mail($request, $user_id);
        } 
    }

    public function mail_report()
    {
        $data=DB::table('email_campaign')->select('campaign_id','sender_email','sender_source','subject','email_content','total_messages','submit_date')->where('user_id', Auth::id())->limit(2000)->orderBy('submit_date','desc')->get();
        
        return $data;
    }

    public function mailreportExport(Request $request)
    {
        $validated = Validator::make($request->all(), [ 
            'date' => 'required',
        ]);

        $campaigns  =array();

        if(!$validated->fails())
        {
            DB::enableQueryLog();
            $from  = date('Y-m-d' ,strtotime($request->date[0])).' 00:00:00';
            $to  = date('Y-m-d' ,strtotime($request->date[1])).' 23:59:59';

            // if(isset($request->recipient)){
            //     $query =  DB::table('email_inbox')->select(
            //         'email_campaign.campaign_id',
            //         'email_campaign.sender_email',
            //         'email_campaign.sender_source',
            //         'email_inbox.subject',
            //         'email_campaign.email_content',

            //         'email_campaign.total_messages',

            //         'email_inbox.msgbody',
            //         'email_inbox.email',
            //         'email_campaign.submit_date',
            //         'email_campaign.done_date',
                    
            //         // 'email_campaign.attachment'
            //     )->join('email_campaign', 'email_campaign.campaign_id', '=', 'email_inbox.campaign_id');
            //     $query = $query->where('email_inbox.email', $request->recipient);

            // }
            // else{
            //     $query =  DB::table('email_campaign')->select('campaign_id','subject','email_content','schedule','schedule_time','sender_source','sender_email','submit_date','total_messages');
            // }


            $query =  DB::table('email_inbox')->select(
                'email_campaign.campaign_id',
                'email_campaign.sender_email',
                'email_campaign.sender_source',
                'email_inbox.subject',
                'email_campaign.email_content',

                'email_campaign.total_messages',

                'email_inbox.msgbody',
                'email_inbox.email',
                'email_campaign.submit_date',
                'email_campaign.done_date',
                
                // 'email_campaign.attachment'
            )->join('email_campaign', 'email_campaign.campaign_id', '=', 'email_inbox.campaign_id');

            if (isset($request->recipient)) {
                // code...
                $query = $query->where('email_inbox.email', $request->recipient);

            }
                
            if(isset($request->subject)){
                $query = $query->where('email_inbox.subject', $request->subject);
            }

            if(isset($request->sender_source)){
                $query = $query->where('email_campaign.sender_source', $request->sender_source);
            }
            if(isset($request->sender_email)){
                $query = $query->where('email_campaign.sender_email', $request->sender_email);
            }
            if(isset($request->campaign_id)){
                $query = $query->where('email_campaign.campaign_id', $request->campaign_id);
            }
            if(isset($request->campaign_name)){
                $query = $query->where('email_campaign.campaign_name', $request->campaign_name);
            }
            if(isset($request->size)){

                if($request->size === 'less10'){
                    $query = $query->where('email_campaign.total_messages', '<', '10');

                }elseif ($request->size === 'greater10'){
                    $query = $query->where('email_campaign.total_messages', '>', '10');

                }elseif ($request->size === 'greater1000'){
                    $query = $query->where('email_campaign.total_messages', '>', '1000');

                }elseif ($request->size === 'greater10000'){
                    $query = $query->where('email_campaign.total_messages', '>', '10000');

                }elseif ($request->size === 'greater100000'){
                    $query = $query->where('email_campaign.total_messages', '>', '100000');

                }
            }

        
            $query = $query->whereBetween('email_campaign.submit_date', [$from, $to])->where('email_campaign.user_id', Auth::id());
            //return $query->toSql();
            
            $count = $query->count();

            if ($count > 50000) {
                $a = vsprintf(str_replace(array('?'), array('\'%s\''), $query->toSql()), $query->getBindings());
                
                DB::table('report_request')->insert([
                        "user_id" => Auth::id(),
                        "service_name" => 'mail',
                        "size" => $count,
                        "query" => $a,
                    ]); 

                return response()->json([
                    'message' => 'Your Request is submitted',
                    'status' => 201,
                ], 200);
            }
            $data = $query->get();
            if ($count == 0) {
                return response()->json([
                    'message' => 'No data is there',
                    'status' => 202,
                ], 200);
            }
            return response()->json([
                'message' => 'Mail logs Exported',
                'status' => 201,
                'data' => $data,
            ], 200);
        }else{
            return response()->json([
                'message' => $validated->errors(),
                'status' => '403',
            ], 403);  
        }
    }

    
    public function mailfilterReport(Request $request)
    {
        $validated = Validator::make($request->all(), [ 
            'date' => 'required',
        ]);

        DB::enableQueryLog();
        $campaigns  =array();

        if(!$validated->fails())
        {
            $from  = date('Y-m-d' ,strtotime($request->date[0])).' 00:00:00';
            $to  = date('Y-m-d' ,strtotime($request->date[1])).' 23:59:59';


            if(isset($request->recipient)){
                $query =  DB::table('email_inbox')->select(
                    'email_campaign.campaign_id',
                    'email_campaign.sender_email',
                    'email_campaign.sender_source',
                    'email_inbox.subject',
                    'email_campaign.email_content',

                    'email_campaign.total_messages',

                    'email_inbox.msgbody',
                    'email_inbox.email',
                    'email_campaign.submit_date',
                    'email_campaign.done_date',
                    
                    // 'email_campaign.attachment'
                )->join('email_campaign', 'email_campaign.campaign_id', '=', 'email_inbox.campaign_id');
                $query = $query->where('email_inbox.email', $request->recipient);

            }
            else{
                $query =  DB::table('email_campaign')->select('campaign_id','subject','email_content','schedule','schedule_time','sender_source','sender_email','submit_date','total_messages');
            }


            if(isset($request->subject)){
                $query->where('email_campaign.subject', $request->subject);
            }

            if(isset($request->campaign_id)){
                $query->where('email_campaign.campaign_id', $request->campaign_id);
            }

            if(isset($request->campaign_name)){
                $query->where('email_campaign.campaign_name', $request->campaign_name);
            }

            if(isset($request->sender_email)){
                $query->where('email_campaign.sender_email',$request->sender_email);
            }

            if(isset($request->size)){
                if($request->size === 'less10'){
                    $query->where('email_campaign.total_messages', '<', '10');
                }elseif ($request->size === 'greater10'){
                    $query->where('email_campaign.total_messages', '>', '10');
                }elseif ($request->size === 'greater1000'){
                    $query->where('email_campaign.total_messages', '>', '1000');
                }elseif ($request->size === 'greater10000'){
                    $query->where('email_campaign.total_messages', '>', '10000');
                }elseif ($request->size === 'greater100000'){
                    $query->where('email_campaign.total_messages', '>', '100000');
                }
            }
            $query->whereBetween('email_campaign.submit_date', [$from, $to]);
            
            $campaigns = $query->where('email_campaign.user_id', Auth::id())->limit(2000)->orderBy('campaign_id','desc');
            $count = $campaigns->count();
            $campaigns = $campaigns->get();


            if ($count == 0) {
                return response()->json([
                    'message' => 'No data is there',
                    'status' => 202,
                    // 'data' => $campaigns,
                ], 200);
            }
            // }else{
                return response()->json([
                    'message' => 'Email Filter Report with recipients',
                    'status' => 201,
                    'data' => $campaigns,
                ], 200);
            // }
            
        }else{
            return response()->json([
                'message' => $validated->errors(),
                'status' => '403',
            ], 403);  
        } 
    }
    

    public function mail_logs($campaign_id)
    {
        $count = DB::table('email_inbox')->select('*')->where('campaign_id', $campaign_id)->count();

        $data = DB::table('email_inbox')->select('campaign_id','subject','email','submit_date','done_date','dlr_mask')->where('campaign_id', $campaign_id)->limit(2000)->orderBy('submit_date','desc')->get();
        return response()->json([
            'message' => 'Mail Logs',
            'status' => 200,
            'data' => $data,
        ], 200);
    }


    public function maillogsExport(Request $request)
    {

        $data = array();
        $query =  DB::table('email_inbox')->select('campaign_id','subject','email','submit_date','done_date','dlr_mask')->where('campaign_id', $request->campaign_id);;
     
        if(isset($request->email)){
            $query->where('email', $request->email);
        }

        if(isset($request->dlr_mask)){
            $query->where('dlr_mask', $request->dlr_mask);
        }
        $a = vsprintf(str_replace(array('?'), array('\'%s\''), $query->toSql()), $query->getBindings());
        return $a;

        $count = $query->count();

        if ($count > 10000) {
            $a = vsprintf(str_replace(array('?'), array('\'%s\''), $query->toSql()), $query->getBindings());
            
            DB::table('report_request')->insert([
                "user_id" => Auth::id(),
                "service_name" => 'mail',
                "size" => $count,
                "query" => $a,
            ]); 

            return response()->json([
                'message' => 'Your Request is submitted',
                'status' => 202,
            ], 200);
        }
        $data = $query->get();
        if (empty($data)) {
            // code...
            return response()->json([
                'message' => 'No data is there',
                'status' => 202,
            ], 200);
        }
        return response()->json([
            'message' => 'Email Report Exported',
            'status' => 201,
            'data' => $data,
        ], 200);
    }

    public function maillogsFilter(Request $request)
    {
        $logs = array();
        $query =  DB::table('email_inbox')->select('campaign_id','subject','email','submit_date','done_date','status')->where('campaign_id', $request->campaign_id);;
     
        if(isset($request->email)){
            $query->where('email', $request->email);
        }

        if(isset($request->dlr_mask)){
            $query->where('status', $request->dlr_mask);
        }

        
        $logs = $query->limit(2000)->get();

        if (empty($logs)) {
            // code...
            return response()->json([
                'message' => 'No data is there',
                'status' => 202,
            ], 200);
        }
        return response()->json([
            'message' => 'Email Report Exported',
            'status' => 201,
            'data' => $logs,
        ], 200);
    }

    public function mailStatistics($campaign_id)
    {
        $submit = array();
        $fail = array();
        $delivered = array();
        $sent = array();
        if (isset($campaign_id)) {
            $data = DB::table('email_campaign')->select(
                'campaign_id',
                'campaign_name',
                'total_messages',
                'sender_source',
                'sender_email',
                // 'route',
                // 'credit',
                'subject',
                // 'message_type',
                'submit_date',
                'done_date'
            )->where('campaign_id', $campaign_id)->where('user_id' ,Auth::id())->first();
            // return $data;

            // $data = array(
            //     'campaign_id' => $data[0]->campaign_id,
            //     'campaign_name' => $data[0]->campaign_name,
            //     'total_messages' => $data[0]->total_messages,
            //     // 'service_type' => $data[0]->service_type,s
            //     'sender' => $data[0]->sender,
            //     'route' => $data[0]->route,
            //     'campaign_cost' => $data[0]->campaign_cost,
            //     'message_type' => $data[0]->message_type,
            //     'credit' => $data[0]->credit,
            //     'submit_date' => $data[0]->submit_date,
            //     'done_date' => $data[0]->done_date,
            // );
            $graph_data = DB::table('email_inbox')->select('dlr_mask')->where('campaign_id', $campaign_id)->where('user_id' ,Auth::id())->get();

            foreach ($graph_data as $val) {
                $new[]= $val->dlr_mask;
            }
            foreach ($new as $value) {
                if ($value == '923') {
                    $submit[] = "923";
                }elseif ($value == '2') {
                    $fail[] = "2";
                }elseif ($value == '1') {
                    $delivered[] = "1";
                }elseif ($value == '8') {
                    $sent[] = "8";
                }
            }

            $graph = array(
                "submit" => sizeof($submit),
                "fail" => sizeof($fail),
                "delivered" => sizeof($delivered),
                "sent" => sizeof($sent),
            );

            $data = array($data, $graph);

            return response()->json([
                'message' => 'Campaign Detail',
                'status' => 200,
                'data' => $data,
            ], 200);
        }else{
            return response()->json([
                'message' => 'Invalid campaign',
                'status' => 204,
            ], 204);
        }
    }


}