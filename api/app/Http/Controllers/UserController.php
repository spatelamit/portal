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


class UserController extends Controller
{
   
    public function __construct() {
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }

//--------------    Profile     --------------//
    
    public function passwordupdate(Request $request)
    {
        $validated = Validator::make($request->all(), [ 
            'password' => 'required|min:6'
        ]);

        if(!$validated->fails())
        {
            if($request->password_confirmation==$request->password)
            {

                User::where('id', Auth::id())->update(array('password'=>bcrypt($request->password)));

                return response()->json([
                    'message' => 'Password Updated'],
                     200);
            }
            else
            {
                return response()->json([
                'error'=> 'New Password does not match with Confirm Password'],
                Response::HTTP_NOT_FOUND);
            }
        }
        return response()->json([
            'Message' => $validated->errors(),
            'Status' => 'Failed',
        ], 403);    
    }

    public function profileupdate(Request $request)
    {   
        User::where('id', Auth::id())->update(array(
            'name' => $request->name,
            'address' => $request->address,
            'company_name' => $request->company_name,
            'contact_number' => $request->contact_number,
            'email' => $request->email,
            'gst' => $request->gst,
            'aadhar' => $request->aadhar,
            'pan' => $request->pan,
        ));  

        return response()->json([
            'Message' => 'Profile Update Successfully',
            'Status' => '200',
        ], 200); 
    } 

    public function import(Request $request)
    {
        Excel::import(new Sms_Model, $request->file('file')->store('files'));
        return redirect()->back()->with('success','Data Imported Successfully');
    }

   


//----------------------------    SenderID      ----------------------------//


    public function apply_senderId(Request $request)
    {
        $validated = Validator::make($request->all(), [ 
            'senderid' => 'required|min:6|max:6',
            'senderid_description' => 'required',
            'senderid_peid' => 'required',
        ]);

        $dt = Carbon::now()->toDateTimeString();
        if(!$validated->fails())
        {
            senderId::insert([
                "user_id" => Auth::id(),
                "sender" => $request->senderid,
                'pe_id' => $request->senderid_peid,
                "description" => $request->senderid_description,
                'submited_at'=>$dt,
            ]);

            return response()->json([
                'message' => 'Sender ID save  Successfully',
                'status' => '200',
            ], 200); 
        }
        return response()->json([
            'message' => $validated->errors(),
            'status' => '403',
        ], 403);
    }

    public function get_senderId()
    {
        $data = senderId::where('user_id', Auth::id())->get();
        
        return $data;
    }

    public function edit_senderId($id, Request $request)
    {

        $validated = Validator::make($request->all(), [ 
            'senderid' => 'required|min:6',
            'senderid_description' => 'required',
            'senderid_peid' => 'required|min:19|max:19',
        ]);

        $dt = Carbon::now()->toDateTimeString();
        if(!$validated->fails())
        {
            senderId::where('id', $id)->where('user_id', Auth::id())->update(array(
                'sender' => $request->senderid,
                'pe_id' => $request->senderid_peid,
                'description' => $request->senderid_description,
            ));

            return response()->json([
                'message' => 'Sender ID Updated  Successfully',
                'status' => '200',
            ], 200); 
        }
        return response()->json([
            'message' => $validated->errors(),
            'status' => '403',
        ], 403);
    }

    public function delete_senderId($id)
    {
        senderId::where('id', $id)->where('user_id', Auth::id())->delete();
        DB::statement('ALTER TABLE sender_ids AUTO_INCREMENT = 1');
    }


//----------------------------    Template ID      ----------------------------//


    public function apply_temps(Request $request)
    {
        $validated = Validator::make($request->all(), [ 
            'content' => 'required',
            'template_id' => 'required|numeric|unique:templates|min:19',
        ]);

        if(!$validated->fails())
        {
            $dt = Carbon::now()->toDateTimeString();

            template::insert([
                "user_id" => Auth::id(),
                "template_id" => $request->template_id,
                "content" => $request->content,
                "submited_at" => $dt,
            ]);

            return response()->json([
                'message' => 'Template save  Successfully',
                'status' => '200',
            ], 200); 
        }
        return response()->json([
            'message' => $validated->errors(),
            'status' => '403',
        ], 403);
    }

    public function templateImport(Request $request)
    {
        $dt = Carbon::now()->toDateTimeString();


        foreach ($request[1] as $value){
            $value['template_id'] = str_replace("'","",$value['template_id']);

            template::insert([
                "user_id" => Auth::id(),
                "template_id" => $value['template_id'],
                "content" => $value['content'],
                "submited_at" => $dt
            ]);    
        }



        return response()->json([
            'message' => 'Template Imported',
            'status' => '200',
        ], 200);
    }

    public function get_temps()
    {
        $data = template::where('user_id', Auth::id())->get();

        return $data;
    }

    public function edit_temps($id, Request $request)
    {   
        
        $validated = Validator::make($request->all(), [ 
            'content' => 'required',
            'template_id' => 'required',
        ]);

        if(!$validated->fails())
        {
            $dt = Carbon::now()->toDateTimeString();

            template::where('id', $id)->where('user_id', Auth::id())->update(array(
                'template_id' => $request->template_id,
                'content' => $request->content,
            ));

            return response()->json([
                'message' => 'Template save  Successfully',
                'status' => '200',
            ], 200); 
        }
        return response()->json([
            'message' => $validated->errors(),
            'status' => '403',
        ], 403);        
    }

    public function delete_temps($id)
    {
        template::where('id', $id)->where('user_id', Auth::id())->delete();
        DB::statement('ALTER TABLE templates AUTO_INCREMENT = 1');
    }



//----------------------------    Delivery Report      ----------------------------//


    public function report()
    {
        $data=DB::table('sms_campaign')->select('campaign_id','template_id','sender','campaign_name','route','message','status','total_messages','schedule_status','message_type','schedule_date','credit','submit_date')->where('user_id', Auth::id())->limit(2000)->orderBy('submit_date','desc')->get();
        if (empty($data)) {
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
    }

    public function reportExport(Request $request)
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

            $query =  DB::table('sent_sms')->select(
                'sent_sms.campaign_id',
                'sms_campaign.campaign_name',
                'sent_sms.sender',
                'sent_sms.message',
                'sent_sms.receivers',
                'sent_sms.dlr_mask',
                'sent_sms.done_date',
                'sent_sms.submit_date',
                'sms_campaign.credit',
                
                // 'sent_sms.message_type',
                // 'sms_campaign.route',
                // 'sms_campaign.schedule_date',
                // 'sms_campaign.schedule_status',
                // 'sms_campaign.template_id',
                // 'sms_campaign.total_messages',
                // 'sent_sms.description',
                
            )->join('sms_campaign', 'sms_campaign.campaign_id', '=', 'sent_sms.campaign_id');


            if(isset($request->receivers)){
                $query = $query->where('receivers', $request->receivers);

            }

            if(isset($request->route)){
                $query = $query->where('sms_campaign.route', $request->route);
            }

            if(isset($request->sender)){
                $query = $query->where('sms_campaign.sender', $request->sender);
            }

            if(isset($request->campaign_id)){
                $query = $query->where('sms_campaign.campaign_id', $request->campaign_id);
            }

            if(isset($request->campaign_name)){
                $query = $query->where('sms_campaign.campaign_name', $request->campaign_name);
            }

            if(isset($request->type)){
                $query = $query->where('sms_campaign.schedule_status', (int)$request->type);
            }

            if(isset($request->size)){

                if($request->size === 'less10'){
                    $query = $query->where('sms_campaign.total_messages', '<', '10');

                }elseif ($request->size === 'greater10'){
                    $query = $query->where('sms_campaign.total_messages', '>', '10');

                }elseif ($request->size === 'greater1000'){
                    $query = $query->where('sms_campaign.total_messages', '>', '1000');

                }elseif ($request->size === 'greater10000'){
                    $query = $query->where('sms_campaign.total_messages', '>', '10000');

                }elseif ($request->size === 'greater100000'){
                    $query = $query->where('sms_campaign.total_messages', '>', '100000');

                }
            }

        
            $query = $query->whereBetween('sms_campaign.submit_date', [$from, $to])->where('sms_campaign.user_id', Auth::id());
            
            $count = $query->count();

            if ($count > 50000) {
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
            return response()->json([
                'message' => 'Report Exported',
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

    
    public function filterReport(Request $request)
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
            // return $request->date;
            if(isset($request->receivers)){
                // $query =  DB::table('sent_sms')->select('campaign_id','sender', 'sender as campaign_name' ,'message','dlr_mask', 'dlr_mask as route','receivers', 'description','submit_date', 'done_date');
                // $query = $query->where('receivers', $request->receivers);
                $query =  DB::table('sent_sms')->select(
                    'sent_sms.campaign_id',
                    'sms_campaign.campaign_name',
                    'sms_campaign.credit',
                    'sent_sms.message',
                    'sent_sms.message_type',
                    'sms_campaign.route',
                    'sms_campaign.schedule_date',
                    'sms_campaign.schedule_status',
                    'sent_sms.sender',
                    'sent_sms.submit_date',
                    'sms_campaign.template_id',
                    'sms_campaign.total_messages',

                    'sent_sms.dlr_mask',
                    'sent_sms.receivers',
                    'sent_sms.description',
                    'sent_sms.done_date'
                )->join('sms_campaign', 'sms_campaign.campaign_id', '=', 'sent_sms.campaign_id');
                $query = $query->where('receivers', $request->receivers);

            }
            else{
                $query =  DB::table('sms_campaign')->select('campaign_id','campaign_name','credit','message','message_type','route','schedule_date','schedule_status','sender','submit_date','template_id','total_messages','done_date');
            }

            if(isset($request->route)){
                $query->where('sms_campaign.route', $request->route);
            }

            if(isset($request->sender)){
                $query->where('sms_campaign.sender', $request->sender);
            }

            if(isset($request->campaign_id)){
                $query->where('sms_campaign.campaign_id', $request->campaign_id);
            }

            if(isset($request->campaign_name)){
                $query->where('sms_campaign.campaign_name', $request->campaign_name);
            }

            if(isset($request->type)){
                $query->where('sms_campaign.schedule_status', (int)$request->type);
            }

            if(isset($request->size)){

                if($request->size === 'less10'){

                    $query->where('sms_campaign.total_messages', '<', '10');
                }elseif ($request->size === 'greater10'){

                    $query->where('sms_campaign.total_messages', '>', '10');
                }elseif ($request->size === 'greater1000'){

                    $query->where('sms_campaign.total_messages', '>', '1000');
                }elseif ($request->size === 'greater10000'){

                    $query->where('sms_campaign.total_messages', '>', '10000');
                }elseif ($request->size === 'greater100000'){

                    $query->where('sms_campaign.total_messages', '>', '100000');
                }
            }

        
            $query->whereBetween('sms_campaign.submit_date', [$from, $to]);
            
            $campaigns = $query->where('sms_campaign.user_id', Auth::id())->limit(2000)->orderBy('campaign_id','desc')->get();
            // return DB::getQueryLog();
            if (empty($campaigns)) {
                // code...
                return response()->json([
                    'message' => 'No data is there',
                    'status' => 202,
                ], 200);
            }
            return response()->json([
                'message' => 'SMS Report Exported',
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
    

    public function logs($campaign_id)
    {
        $count = DB::table('sent_sms')->select('*')->where('campaign_id', $campaign_id)->count();

        $data = DB::table('sent_sms')->select('campaign_id','receivers','dlr_mask','submit_date')->where('campaign_id', $campaign_id)->limit(2000)->orderBy('submit_date','desc')->get();

        // $a = array($data, $count);
        if (empty($data)) {
            // code...
            return response()->json([
                'message' => 'No data is there',
                'status' => 202,
            ], 200);
        }
        return response()->json([
            'message' => 'SMS Logs',
            'status' => 201,
            'data' => $data,
        ], 200);
    }

    public function logsExport(Request $request)
    {

        $data = array();
        $query =  DB::table('sent_sms')->select('campaign_id','sender','dlr_mask as route','receivers','message','dlr_mask','submit_date','done_date')->where('campaign_id', $request->campaign_id);;
     
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
            'message' => 'Sms Logs Export',
            'status' => 201,
            'data' => $data,
        ], 200);
    }

    public function logsFilter(Request $request)
    {

        $logs = array();
        $query =  DB::table('sent_sms')->select('campaign_id','sender','dlr_mask as route','receivers','message','dlr_mask','submit_date','done_date')->where('campaign_id', $request->campaign_id);;
     
        if(isset($request->dlr_mask)){
            $query->where('dlr_mask', $request->dlr_mask);
        }
        if(isset($request->receivers)){
            $query->where('receivers', $request->receivers);
        }
        // return $query->toSql();
        $logs = $query->limit(2000)->get();
        // return $logs; 
        if (empty($data)) {
            // code...
            return response()->json([
                'message' => 'No data is there',
                'status' => 202,
            ], 200);
        }
        return response()->json([
            'message' => 'SMS Logs Filter',
            'status' => 201,
            'data' => $data,
        ], 200);

    }

    public function campaignFull($campaign_id)
    {   
        $submit = array();
        $fail = array();
        $delivered = array();
        $sent = array();
        if (isset($campaign_id)) {

            $data = DB::table('sms_campaign')->select(
                'campaign_id',
                'campaign_name',
                'total_messages',
                // 'service_type',
                'sender',
                'route',
                'credit',
                'campaign_cost',
                'message_type',
                'submit_date',
                'done_date'
            )->where('campaign_id', $campaign_id)->where('user_id' ,Auth::id())->get();

            $data = array(
                'campaign_id' => $data[0]->campaign_id,
                'campaign_name' => $data[0]->campaign_name,
                'total_messages' => $data[0]->total_messages,
                // 'service_type' => $data[0]->service_type,s
                'sender' => $data[0]->sender,
                'route' => $data[0]->route,
                'campaign_cost' => $data[0]->campaign_cost,
                'message_type' => $data[0]->message_type,
                'credit' => $data[0]->credit,
                'submit_date' => $data[0]->submit_date,
                'done_date' => $data[0]->done_date,
            );
            $graph_data = DB::table('sent_sms')->select('dlr_mask')->where('campaign_id', $campaign_id)->where('user_id' ,Auth::id())->get();

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

    public function exportReport(Request $request)
    {

        $a=DB::table('contact_detail')->select('*')->where('group_id', $request->group_id)->where('user_id' , Auth::id())->get();
        return Excel::download($a, 'users.xlsx');
    }

}