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
use App\Models\Voice_model;
use App\Models\voice_sent;
use App\Models\voice_campaign;
use App\Models\senderId;
use App\Models\template;
use App\Models\phonebook;
use App\Models\voice_template;

class VoiceController extends Controller
{
    public function sendVoice(Request $request)
    {   

        $validated = Validator::make($request->all(), [ 
            'campaign_name' => 'required',
            'sender' => 'required',
            // 'message_length' => 'required|numeric',
            // 'message' => 'required|mimes:mp3,mp4,mpga,wav|max:2048',
            'route' => 'required',  
        ]);

        if($validated->fails())
        {
            return response()->json([
                'message' => $validated->errors(),
                'status' => 'Failed',
            ], 403);   
        }
        else
        {
            $voice_model=new Voice_model;
            $user_id=Auth::id();      
            return $voice_model->sent_voice($request, $user_id);
        }
    }
    

    public function resendVoice(Request $request)
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

                $receivers = voice_sent::where('campaign_id', $request->campaign_id)->get('receivers');
            
            }elseif ($request->status == "8") {

                $receivers = voice_sent::where(['campaign_id'=> $request->campaign_id, 'dlr_mask'=>'8'])->get('receivers');

            }elseif ($request->status == "2") {

                $receivers = voice_sent::where(['campaign_id'=> $request->campaign_id, 'dlr_mask'=>'2'])->get('receivers');


            }elseif ($request->status == "1") {

                $receivers = voice_sent::where(['campaign_id'=> $request->campaign_id, 'dlr_mask'=>'1'])->get('receivers');

            }elseif ($request->status == "923") {

                $receivers = voice_sent::where(['campaign_id'=> $request->campaign_id, 'dlr_mask'=>'923'])->get('receivers');

            }elseif ($request->status == "5") {

                $receivers = voice_sent::where(['campaign_id'=> $request->campaign_id, 'dlr_mask'=>'5'])->get('receivers');

            }elseif ($request->status == "6") {

                $receivers = voice_sent::where(['campaign_id'=> $request->campaign_id, 'dlr_mask'=>'6'])->get('receivers');

            }

            $campaign_data = DB::table('voice_campaigns')->select('campaign_name', 'draft_id','route','sender')->where('campaign_id', $request->campaign_id)->where('user_id', Auth::id())->get();


            foreach ($receivers as $value) {
                $num[] = $value['receivers'];
            }
            $message = DB::table('voice_campaigns')->select('message')->where('campaign_id', $request->campaign_id)->where('user_id', Auth::id())->get();


            $request = [
                'campaign_name' => $campaign_data[0]->campaign_name,
                'route' => $campaign_data[0]->route,
                'draft_id' => $campaign_data[0]->draft_id,
                'sender' => $campaign_data[0]->sender,
                'receivers' =>  implode(',', $num),
            ];

            $request =  json_decode(json_encode($request));

                
            $voice_model=new Voice_model;
            $user_id=Auth::id();      
            return $voice_model->sent_voice($request, $user_id);
        } 

    }




    // ------------------------ Report --------------------- //



    public function voiceReport()
    {
        $data=DB::table('voice_campaigns')->select('campaign_id','sender','campaign_name','route','message','total_messages','schedule_date','credit','submit_date')->where('user_id', Auth::id())->limit(2000)->orderBy('id','desc')->get();

        return response()->json([
                'message' => "Voice Report Data",
                'status' => '200',
                'data' => $data
            ], 200);
    }

    public function voiceReportExport(Request $request)
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

            $query =  DB::table('voice_sents')->select(
                'voice_sents.campaign_id',
                'voice_campaigns.campaign_name',
                'voice_sents.sender',
                'voice_sents.message',
                'voice_sents.receivers',
                'voice_sents.dlr_mask',
                'voice_sents.done_date',
                'voice_sents.submit_date',
                'voice_campaigns.credit',
                
                // 'sent_sms.message_type',
                // 'sms_campaign.route',
                // 'sms_campaign.schedule_date',
                // 'sms_campaign.schedule_status',
                // 'sms_campaign.template_id',
                // 'sms_campaign.total_messages',
                // 'sent_sms.description',
                
            )->join('voice_campaigns', 'voice_campaigns.campaign_id', '=', 'voice_sents.campaign_id');


            if(isset($request->receivers)){
                $query = $query->where('receivers', $request->receivers);

            }

            if(isset($request->route)){
                $query = $query->where('voice_campaigns.route', $request->route);
            }

            if(isset($request->sender)){
                $query = $query->where('voice_campaigns.sender', $request->sender);
            }

            if(isset($request->campaign_id)){
                $query = $query->where('voice_campaigns.campaign_id', $request->campaign_id);
            }

            if(isset($request->campaign_name)){
                $query = $query->where('voice_campaigns.campaign_name', $request->campaign_name);
            }

            if(isset($request->type)){
                $query = $query->where('voice_campaigns.schedule_status', (int)$request->type);
            }

            if(isset($request->size)){

                if($request->size === 'less10'){
                    $query = $query->where('voice_campaigns.total_messages', '<', '10');

                }elseif ($request->size === 'greater10'){
                    $query = $query->where('voice_campaigns.total_messages', '>', '10');

                }elseif ($request->size === 'greater1000'){
                    $query = $query->where('voice_campaigns.total_messages', '>', '1000');

                }elseif ($request->size === 'greater10000'){
                    $query = $query->where('voice_campaigns.total_messages', '>', '10000');

                }elseif ($request->size === 'greater100000'){
                    $query = $query->where('voice_campaigns.total_messages', '>', '100000');

                }
            }

        
            $query = $query->whereBetween('voice_campaigns.submit_date', [$from, $to])->where('voice_campaigns.user_id', Auth::id());
            
            $count = $query->count();

            if ($count > 50000) {
                $a = vsprintf(str_replace(array('?'), array('\'%s\''), $query->toSql()), $query->getBindings());
                
                DB::table('report_request')->insert([
                        "user_id" => Auth::id(),
                        "service_name" => 'voice',
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
                'message' => 'Voice Report Exported',
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

    
    public function voiceFilterReport(Request $request)
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
            if(isset($request->receivers)){
                $query =  DB::table('voice_sents')->select(
                    'voice_sents.campaign_id',
                    'voice_campaigns.campaign_name',
                    'voice_campaigns.credit',
                    'voice_sents.message',
                    // 'voice_sents.message_type',
                    'voice_campaigns.route',
                    'voice_campaigns.schedule_date',
                    'voice_campaigns.schedule_status',
                    'voice_sents.sender',
                    'voice_sents.submit_date',
                    'voice_campaigns.total_messages',

                    'voice_sents.dlr_mask',
                    'voice_sents.receivers',
                    'voice_sents.description',
                    'voice_sents.done_date'
                )->join('voice_campaigns', 'voice_campaigns.campaign_id', '=', 'voice_sents.campaign_id');
                $query = $query->where('receivers', $request->receivers);

            }
            else{
                $query =  DB::table('voice_campaigns')->select('campaign_id','campaign_name','credit','message','message_type','route','schedule_date','schedule_status','sender','submit_date','total_messages','done_date');
            }


            if(isset($request->route)){
                $query->where('voice_campaigns.route', $request->route);
            }

            if(isset($request->sender)){
                $query->where('voice_campaigns.sender', $request->sender);
            }

            if(isset($request->campaign_id)){
                $query->where('voice_campaigns.campaign_id', $request->campaign_id);
            }

            if(isset($request->campaign_name)){
                $query->where('voice_campaigns.campaign_name', $request->campaign_name);
            }

            if(isset($request->type)){
                $query->where('voice_campaigns.schedule_status', (int)$request->type);
            }

            if(isset($request->size)){

                if($request->size === 'less10'){

                    $query->where('voice_campaigns.total_messages', '<', '10');
                }elseif ($request->size === 'greater10'){

                    $query->where('voice_campaigns.total_messages', '>', '10');
                }elseif ($request->size === 'greater1000'){

                    $query->where('voice_campaigns.total_messages', '>', '1000');
                }elseif ($request->size === 'greater10000'){

                    $query->where('voice_campaigns.total_messages', '>', '10000');
                }elseif ($request->size === 'greater100000'){

                    $query->where('voice_campaigns.total_messages', '>', '100000');
                }
            }

        
            $query->whereBetween('voice_campaigns.submit_date', [$from, $to]);
            // return $query->getBindings();
            
            $campaigns = $query->where('voice_campaigns.user_id', Auth::id())->limit(2000)->orderBy('id','desc')->get();

            if (empty($campaigns)) {
                // code...
                return response()->json([
                    'message' => 'No data is there',
                    'status' => 202,
                ], 200);
            }
            return response()->json([
                'message' => 'Voice Report Exported',
                'status' => 201,
                'data' => $campaigns,
            ], 200); 
        }else{
            return response()->json([
                'message' => $validated->errors(),
                'status' => '403',
            ], 403);  
        } 
    }
    


    // ------------------------ Logs --------------------- //



    public function voiceLogs($campaign_id)
    {
        $count = DB::table('voice_sents')->select('*')->where('campaign_id', $campaign_id)->count();

        $data = DB::table('voice_sents')->select('campaign_id','receivers','dlr_mask','submit_date')->where('campaign_id', $campaign_id)->limit(2000)->orderBy('voice_id','desc')->get();

        // $a = array($data, $count);
        if (empty($data)) {
            // code...
            return response()->json([
                'message' => 'No data is there',
                'status' => 202,
            ], 200);
        }
        return response()->json([
            'message' => 'Voice Logs',
            'status' => 201,
            'data' => $data,
        ], 200);
    }

    public function voiceLogsExport(Request $request)
    {

        $data = array();
        $query =  DB::table('voice_sents')->select('campaign_id','sender','dlr_mask as route','receivers','message','dlr_mask','submit_date','done_date')->where('campaign_id', $request->campaign_id);;
     
        if(isset($request->dlr_mask)){
            $query->where('dlr_mask', $request->dlr_mask);
        }
        if(isset($request->receivers)){
            $query->where('receivers', $request->receivers);
        }

        $count = $query->count();

        if ($count > 10000) {
            $a = vsprintf(str_replace(array('?'), array('\'%s\''), $query->toSql()), $query->getBindings());
            
            DB::table('report_request')->insert([
                    "user_id" => Auth::id(),
                    "service_name" => 'sms',
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
            'message' => 'Voice Logs Exported',
            'status' => 201,
            'data' => $data,
        ], 200); 
    }

    public function voiceLogsFilter(Request $request)
    {

        $logs = array();
        $query =  DB::table('voice_sents')->select('campaign_id','sender','dlr_mask as route','receivers','message','dlr_mask','submit_date','done_date')->where('campaign_id', $request->campaign_id);;
     
        if(isset($request->dlr_mask)){
            $query->where('dlr_mask', $request->dlr_mask);
        }
        if(isset($request->receivers)){
            $query->where('receivers', $request->receivers);
        }
        // return $query->toSql();
        $logs = $query->limit(2000)->get();
        // return $logs; 
        if (empty($logs)) {
            // code...
            return response()->json([
                'message' => 'No data is there',
                'status' => 202,
            ], 200);
        }
        return response()->json([
            'message' => 'Voice Logs filter',
            'status' => 201,
            'data' => $logs,
        ], 200); 

    }

    public function voiceStatistics($campaign_id)
    {
        $submit = array();
        $fail = array();
        $delivered = array();
        $sent = array();
        if (isset($campaign_id)) {

            $data = DB::table('voice_campaigns')->select(
                'campaign_id',
                'campaign_name',
                'total_messages',
                'sender',
                'route',
                'credit',
                // 'campaign_cost',
                'message_type',
                'submit_date',
                'done_date'
            )->where('campaign_id', $campaign_id)->where('user_id' ,Auth::id())->first();

            // return $data;

            // $data = array(
            //     'campaign_id' => $data[0]->campaign_id,
            //     'campaign_name' => $data[0]->campaign_name,
            //     'total_messages' => $data[0]->total_messages,
            //     'sender' => $data[0]->sender,
            //     'route' => $data[0]->route,
            //     // 'campaign_cost' => $data[0]->campaign_cost,
            //     'message_type' => $data[0]->message_type,
            //     'credit' => $data[0]->credit,
            //     'submit_date' => $data[0]->submit_date,
            //     'done_date' => $data[0]->done_date,
            // );
            $graph_data = DB::table('voice_sents')->select('dlr_mask')->where('campaign_id', $campaign_id)->where('user_id' ,Auth::id())->get();

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

    // ------------------------ Save Draft --------------------- //

    public function save_draft(Request $request)
    {
        $validated = Validator::make($request->all(), [ 
            'title' => 'required',
            'voice_draft' => 'required|mimes:mp3,mp4,mpga,wav|max:2048',
        ]);

        $campaigns  =array();
        $dt = Carbon::now()->toDateTimeString();
        if(!$validated->fails())
        {
            $voice_file_name = uniqid().$request->file('voice_draft')->getClientOriginalName();
            $voice_file_path = $request->file('voice_draft')->storeAs('voice', $voice_file_name, 'public');

            voice_template::insert([
                "user_id" => Auth::id(),
                "title" => $request->title,
                'duration' => $request->duration,
                "voice_file" => $voice_file_path,
                'submited_at'=>$dt,
            ]);

            return response()->json([
                'message' => "Save Voice in Draft",
                'status' => '200',
            ], 200); 

        }else{
            return response()->json([
                'message' => $validated->errors(),
                'status' => '403',
            ], 403);  
        } 
    }
    public function get_draft()
    {
        $data=voice_template::where('user_id', Auth::id())->get();
        return $data;
        // return response()->json([
        //         'message' => "Save Voice in Draft",
        //         'status' => '200',
        //         'data' => $data,
        //     ], 200); 
    }
    public function edit_draft(Request $request)
    {
        $validated = Validator::make($request->all(), [ 
            'title' => 'required',
            'voice_draft' => 'required'//|mimes:mp3,mp4,mpga,wav|max:2048',
            // 'draft_id' => 'required',
        ]);


        $dt = Carbon::now()->toDateTimeString();
        if(!$validated->fails())

        {
            $voice_file_name = uniqid().$request->file('voice_draft')->getClientOriginalName();
            $voice_file_path = $request->file('voice_draft')->storeAs('voice', $voice_file_name, 'public');

            voice_template::where('draft_id', $draft_id)->where('user_id', Auth::id())->update(array(
                'title' => $request->title,
                'duration' => $request->duration,
                'voice_file' => $voice_file_path,
            ));

            return response()->json([
                'message' => 'Voice Draft Updated  Successfully',
                'status' => '200',
            ], 200); 
        }
        return response()->json([
            'message' => $validated->errors(),
            'status' => '403',
        ], 403);
    }
    public function delete_draft($draft_id)
    {
        voice_template::where('draft_id', $draft_id)->where('user_id', Auth::id())->delete();
        DB::statement('ALTER TABLE voice_templates AUTO_INCREMENT = 1');
    }




    

}
