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
use App\Models\rcs_campaign;
use App\Models\rcstemplate;
use App\Models\rcssetting;

class Rcs extends Controller
{

	public function rcssetting(Request $request)
	{
		$validated = Validator::make($request->all(), [ 
            'agentname' => 'required',
            'keypath' => 'required|mimes:json',
            'logo' => 'required|image|mimes:jpg,png,jpeg,gif,svg|max:2048',
            'description' => 'required',

        ]);

        if(!$validated->fails())
        {
			$rcssetting=new rcssetting;
            return $rcssetting->rcs_setting($request);
            
        }
        return response()->json([
            'Message' => $validated->errors(),
            'Status' => 'Failed',
        ], 403);  
	}
	   
	public function get_rcssetting()
    {
        $data = rcssetting::where('user_id', Auth::id())->get();
        
        return $data;
    }

    public function edit_rcssetting(Request $request)
    {

        $validated = Validator::make($request->all(), [ 
            'agentname' => 'required',
            'keypath' => 'required',
            'logo' => 'required',
            'description' => 'required',
            'id' => 'required',
        ]);

        $dt = Carbon::now()->toDateTimeString();
        if(!$validated->fails())
        {

			$logo_file_name = uniqid().$request->file('logo')->getClientOriginalName();
	        $logo_file_path = $request->file('logo')->storeAs('uploads/rcs_logo', $logo_file_name, 'public');

	        $keypath_name = $request->file('keypath')->getClientOriginalName();
	        $keypath = $request->file('keypath')->storeAs('uploads/rcs_keypath', $keypath_name, 'public');

            rcssetting::where('id', $request->id)->where('user_id', Auth::id())->update(array(
                'agentname' => $request->agentname,
                'keypath' => $keypath_name,
                'logo' => $logo_file_path,
                'description' => $request->description,

            ));

            return response()->json([
                'message' => 'Rcs Setting Updated  Successfully',
                'status' => '200',
            ], 200); 
        }
        return response()->json([
            'message' => $validated->errors(),
            'status' => '403',
        ], 403);
    }

    public function delete_rcssetting($id)
    {
        rcssetting::where('id', $id)->where('user_id', Auth::id())->delete();
        DB::statement('ALTER TABLE rcssettings AUTO_INCREMENT = 1');

        return response()->json([
                'message' => 'Rcs Setting Deleted  Successfully',
                'status' => '200',
            ], 200); 
    }



    public function create_template(Request $request){
    	
    	$validated = Validator::make($request->all(), [
            'mediatype' => 'required',
            'template_name' => 'required',
            'card_type' => 'required',
            'content'=> 'required'        
        ]);

        if(!$validated->fails())
        {
			$rcstemplate=new rcstemplate;
            return $rcstemplate->rcs_template($request);
            
        }
        return response()->json([
            'Message' => $validated->errors(),
            'Status' => 'Failed',
        ], 403);
    }

    public function get_template(Request $request){
        $data = rcstemplate::where('user_id', Auth::id())->get();
        return $data;
    }

    public function send_rcs(Request $request){
        $validated = Validator::make($request->all(), [
            'agentname' => 'required',
            'campaign_name' => 'required',
            'template_id'=> 'required'        
        ]);

        if(!$validated->fails())
        {
			$rcs_campaign=new rcs_campaign;
			$user_id =Auth::id();
            return $rcs_campaign->sent_rcs($request,$user_id);

            
        }
        return response()->json([
            'Message' => $validated->errors(),
            'Status' => 'Failed',
        ], 403);
    }


    //------------------- RCS  Report ------------------//

    public function rcs_report()
    {
        $data=DB::table('rcs_campaigns')->select('*')->where('user_id', Auth::id())->limit(2000)->orderBy('id','desc')->get();

        
        // return $data;

        if (empty($data)) {
            return response()->json([
                'message' => 'No data is there',
                'status' => 202,
            ], 200);
        }
        return response()->json([
            'message' => 'Rcs Report',
            'status' => 201,
            'data' => $data,
        ], 200);
    }

    public function rcsReportExport(Request $request)
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

            $query =  DB::table('rcs_sms')->select(
                'rcs_sms.campaign_id',
                'rcs_sms.agent_id',
                'rcs_sms.message',
                'rcs_sms.receivers',
                'rcs_sms.submit_date',
                'rcs_campaigns.campaign_name',
                
            )->join('rcs_campaigns', 'rcs_campaigns.campaign_id', '=', 'rcs_sms.campaign_id');


            if(isset($request->receivers)){
                $query = $query->where('receivers', $request->receivers);

            }

            if(isset($request->agent_id)){
                $query = $query->where('agent_id', $request->agent_id);
            }

            if(isset($request->campaign_id)){
                $query = $query->where('campaign_id', $request->campaign_id);
            }

            if(isset($request->campaign_name)){
                $query = $query->where('rcs_campaigns.campaign_name', $request->campaign_name);
            }

            if(isset($request->size)){

                if($request->size === 'less10'){
                    $query = $query->where('rcs_campaigns.total_messages', '<', '10');

                }elseif ($request->size === 'greater10'){
                    $query = $query->where('rcs_campaigns.total_messages', '>', '10');

                }elseif ($request->size === 'greater1000'){
                    $query = $query->where('rcs_campaigns.total_messages', '>', '1000');

                }elseif ($request->size === 'greater10000'){
                    $query = $query->where('rcs_campaigns.total_messages', '>', '10000');

                }elseif ($request->size === 'greater100000'){
                    $query = $query->where('rcs_campaigns.total_messages', '>', '100000');

                }
            }

        
            $query = $query->whereBetween('rcs_campaigns.submit_date', [$from, $to])->where('rcs_campaigns.user_id', Auth::id());
            
            $count = $query->count();

            if ($count > 50000) {
                $a = vsprintf(str_replace(array('?'), array('\'%s\''), $query->toSql()), $query->getBindings());
                
                DB::table('report_request')->insert([
                        "user_id" => Auth::id(),
                        "service_name" => 'rcs',
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
                return response()->json([
                    'message' => 'No data is there',
                    'status' => 202,
                ], 200);
            }
            return response()->json([
                'message' => 'RCS Report Exported',
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


    public function rcsFilterReport(Request $request)
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
                $query =  DB::table('rcs_sent')->select(
                    'rcs_campaigns.*',
                    'rcs_sent.message',
                    'rcs_sent.receivers',
                )->join('rcs_campaigns', 'rcs_campaigns.campaign_id', '=', 'rcs_sent.campaign_id');
                $query = $query->where('receivers', $request->receivers);

            }
            else{
                $query =  DB::table('rcs_campaigns')->select('*');
            }


            if(isset($request->agent_id)){
                $query->where('rcs_campaigns.agent_id', $request->agent_id);
            }

            if(isset($request->campaign_id)){
                $query->where('rcs_campaigns.campaign_id', $request->campaign_id);
            }

            if(isset($request->campaign_name)){
                $query->where('rcs_campaigns.campaign_name', $request->campaign_name);
            }


            if(isset($request->size)){

                if($request->size === 'less10'){

                    $query->where('rcs_campaigns.total_messages', '<', '10');
                }elseif ($request->size === 'greater10'){

                    $query->where('rcs_campaigns.total_messages', '>', '10');
                }elseif ($request->size === 'greater1000'){

                    $query->where('rcs_campaigns.total_messages', '>', '1000');
                }elseif ($request->size === 'greater10000'){

                    $query->where('rcs_campaigns.total_messages', '>', '10000');
                }elseif ($request->size === 'greater100000'){

                    $query->where('rcs_campaigns.total_messages', '>', '100000');
                }
            }

        
            $query->whereBetween('rcs_campaigns.submit_date', [$from, $to]);
            // return $query->getBindings();
            
            $campaigns = $query->where('rcs_campaigns.user_id', Auth::id())->limit(2000)->orderBy('id','desc')->get();

            if (empty($campaigns)) {
                // code...
                return response()->json([
                    'message' => 'No data is there',
                    'status' => 202,
                ], 200);
            }
            return response()->json([
                'message' => 'RCS filter Report',
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

    //------------------- RCS  Logs ------------------//


    public function rcsLogs($campaign_id)
    {
        // $count = DB::table('rcs_sent')->select('*')->where('campaign_id', $campaign_id)->count();

        $data = DB::table('rcsLogs')->select('campaign_id','receivers','message','agent_id','submit_date','done_date','status')->where('campaign_id', $campaign_id)->limit(2000)->orderBy('sms_id','desc')->get();

        if (empty($data)) {
            return response()->json([
                'message' => 'No data is there',
                'status' => 202,
            ], 200);
        }
        return response()->json([
            'message' => 'Rcs Logs',
            'status' => 201,
            'data' => $data,
        ], 200);
    }

    public function rcsLogsExport(Request $request)
    {

        $data = array();
        $query =  DB::table('sent_sms')->select('campaign_id','agent_id','status','receivers','message','submit_date','done_date')->where('campaign_id', $request->campaign_id);;
     
        if(isset($request->status)){
            $query->where('status', $request->status);
        }
        if(isset($request->receivers)){
            $query->where('receivers', $request->receivers);
        }

        $count = $query->count();

        if ($count > 10000) {
            $a = vsprintf(str_replace(array('?'), array('\'%s\''), $query->toSql()), $query->getBindings());
            
            DB::table('report_request')->insert([
                    "user_id" => Auth::id(),
                    "service_name" => 'RCS',
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
            'message' => 'RCS Logs Export',
            'status' => 201,
            'data' => $data,
        ], 200);
    }


    public function rcsLogsFilter(Request $request)
    {

        $logs = array();
        $query =  DB::table('rcs_sent')->select('campaign_id','agent_id','status','receivers','message','submit_date','done_date')->where('campaign_id', $request->campaign_id);;
     
        if(isset($request->status)){
            $query->where('status', $request->status);
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
            'message' => 'RCS Logs filter',
            'status' => 201,
            'data' => $logs,
        ], 200); 

    }

    
}
