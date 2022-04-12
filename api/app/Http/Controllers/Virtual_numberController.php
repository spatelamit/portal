<?php

namespace App\Http\Controllers;

ini_set('max_execution_time', '3600');
ini_set('memory_limit', '107374182400');

// use Validator;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use App\Http\Requests\RequestHelper;
use Illuminate\Support\Facades\Session;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Contracts\Encryption\DecryptException;
use Spatie\QueryBuilder\QueryBuilder;
use Illuminate\Support\Facades\Validator;


use App\Models\User;
use App\Models\Virtual_assigned;
use App\Models\Virtual_number_keywords;
use App\Models\Virtual_numbers;
use App\Models\Virtual_enquires;
use Illuminate\Auth\Events\Validated;
use App\Models\Sms_Model;
use App\Models\sent_sms;
use App\Models\sms_campaign;
use App\Models\senderId;
use App\Models\template;
use App\Models\phonebook;

class Virtual_numberController extends Controller
{
    public function virtual_number(Request $request){

        $validated = Validator::make($request->all(), [
            'description' => 'required',
            'number' => 'required',
            'type' => 'required',
            'status' => 'required'
        ]);
        // return $request;
        if ($validated->fails()) {
            return response()->json([
                'Message' => $validated->errors(),
                'Status' => 'Failed',
            ], 403);
        } else {
            // return $request;
            $virtual_number = new Virtual_numbers();

            $virtual_number->description = $request->description;
            $virtual_number->number = $request->number;
            $virtual_number->type = $request->type;
            $virtual_number->status = $request->status;

            $virtual_number->save();
            if ($virtual_number) {
                return response()->json([
                    'message' => 'data inserted',
                ]);
            }
        }
    }

    // ----------- virtual_assigned-------//

    public function virtual_assigned(Request $request)
    {
        // return 'xyz';
        $validated = validator::make($request->all(), [
            'user_id' => 'required',
            'virtual_id' => 'required'
        ]);

        if ($validated->fails()) {
            return response()->json([
                'Message' => $validated->errors(),
                'Status' => 'Failed',
            ], 403);
        } else {
            $virtual_assigned = new Virtual_assigned();
            // Virtual_assigned::whereIn('user_id',Virtual_numbers::where('id',Auth::id())->pluck('id')->toArray());


            $virtual_assigned->user_id = $request->user_id;
            $virtual_assigned->virtual_id = $request->virtual_id;

            $virtual_assigned->save();
            if ($virtual_assigned) {
                return response()->json([
                    'message' => 'data inserted',
                ]);
            }
        }
    }

    //------------------virtual_assign_get_number--------- //

    public function get_virtual_number()
    {

        DB::enableQueryLog();
        $user_id = Auth::id();
        if ($user_id) {
            $data = DB::table('virtual_numbers')
                ->select('virtual_numbers.number', 'virtual_numbers.type', 'virtual_numbers.virtual_id')
                ->join('virtual_assigneds', 'virtual_assigneds.virtual_id', '=', 'virtual_numbers.virtual_id')
                ->where('virtual_numbers.status', 1)
                ->where('virtual_assigneds.status', 1)
                ->where('user_id', $user_id)
                ->get();
            return response()->json([
                'message' => 'Valid User',
                'status' => 200,
                'data' => $data,
            ], 200);
        } else {
            return response()->json([
                'message' => 'Invalid User Id',
                'status' => 204,
            ], 204);
        }
    }

    //-----------store_keyword----------//

    public function insert_keyword(Request $request)
    {

        $validated = Validator::make($request->all(), [
            'keywords' => 'required',
            'number' => 'required',
            'status' => 'required',
            'description' => 'required',
            
            // 'title' => 'required',
            // 'webhook_url' => 'required',
            // 'sms_response' => 'required',
            // 'email_response' => 'required'
        ]);
        if($validated->fails()){
            return response()->json([
                'Message' => $validated->errors(),
                'Status' => 'Failed',
            ], 403);
        }else{

            $virtual_number_keywords = new Virtual_number_keywords();

            $virtual_number_keywords->keywords = $request->keywords;
            $virtual_number_keywords->virtual_id = $request->number;
            $virtual_number_keywords->title = $request->title;
            $virtual_number_keywords->description = $request->description;
            $virtual_number_keywords->status = $request->status;
            $virtual_number_keywords->user_id = Auth::id();
            $virtual_number_keywords->webhook_url = $request->webhook_url;
            $virtual_number_keywords->sms_response = json_encode($request->sms_response);
            $virtual_number_keywords->email_response = json_encode($request->email_response);

            $virtual_number_keywords->save();
            if ($virtual_number_keywords) {
                return response()->json([
                    'message' => 'data inserted',
                ]);
            }
        }
    }

    public function get_keyword()
    {
        DB::enableQueryLog();

        $data = DB::table('virtual_number_keywords')
                    ->select('virtual_number_keywords.*', 'virtual_numbers.type', 'virtual_numbers.number')
                    ->join('virtual_numbers', 'virtual_numbers.virtual_id', '=', 'virtual_number_keywords.virtual_id')
                    ->where('user_id', Auth::id())
                    ->get();
       // return DB::getQueryLog();
        return response()->json([
            'message' => 'Column details',
            'status' => '200',
            'data' => $data,
        ], 200);
    }

    public function edit_keyword(Request $request)
    {
        $validated = Validator::make($request->all(), [ 
            'id' => 'required',
        ]);
        if(!$validated->fails()){
            virtual_number_keywords::where('id', $request->id)->where('user_id', Auth::id())->update(array(
                'keywords' => $request->keywords,
                'title' => $request->title,
                'description' => $request->description,
                'virtual_id' => $request->number,
                'status' => $request->status,
                'webhook_url' => $request->webhook_url,
                'sms_response' => json_encode($request->sms_response),
                'email_response' => json_encode($request->email_response),
            ));
            return response()->json([
                'message' => 'Keywords Updated  Successfully',
                'status' => '200',
            ], 200); 
        }
        return response()->json([
            'message' => $validated->errors(),
            'status' => '403',
        ], 403);
    }
    public function delete_keyword($id)
    {
        virtual_number_keywords::where('id', $id)->where('user_id', Auth::id())->delete();
        DB::statement('ALTER TABLE virtual_number_keywords AUTO_INCREMENT = 1');
    }

    
    public function smsVirtualNumber(){
        $sender = senderId::where('user_id', Auth::id())->get('sender');
        foreach ($sender as $value) {
            $data[] = $value->sender;
        }
        return $data;
    }



    public function virtual_endpoint(Request $request)
    {

        DB::enableQueryLog();
        $message = urldecode($_REQUEST['message']);
        $keyword= explode(" ",$message);
        $keyword = $keyword[0];
        
         $data = DB::table('virtual_number_keywords')
                ->select('virtual_number_keywords.*', 'virtual_assigneds.status')
                ->join('virtual_assigneds', 'virtual_assigneds.virtual_id', '=', 'virtual_number_keywords.virtual_id')
                ->where('virtual_number_keywords.keywords', $keyword)
                ->first();
        
                
                if($data==""){
                    $user_id = 0;
                    $status = 0;
                    $sms_response = 0; 
                    $webhook = 0;

                }else{
                    $user_id=$data->user_id;
                    $status=$data->status;
                    $sms_response = json_decode($data->sms_response, true);
                    $webhook = $data->webhook_url;
                }

                $active = 1;
                if($status!=1){
                    $active = 0;
                }

        $msg = str_replace($keyword." ", "", $message);
        $a = [
            "user_id" => $user_id,
            "sender" => $_REQUEST['from'],
            "circle" => $_REQUEST['circle'],
            "content" => $msg,
            "keyword" => $keyword,
            "virtual_number" => $_REQUEST['did'],
            "active" =>$active
        ];
        Virtual_enquires::insert($a);
    
         // $fp = fopen('/home/bulk24sms.in/public_html/laravel-angular/backend/data.txt', 'a');
        // fwrite($fp, json_encode($data)."\n");
        // fwrite($fp, $msg."\n");

        // fclose($fp);

        // $b = ;
        
        // return ;

        if(isset($sms_response['sender']) && $active==1){
            $req = [
                'campaign_name' => "Virtual Number Sms",
                'message' => $sms_response['message'],
                'message_type' => 1,
                'route' => "TR",
                'sender' => $sms_response['sender'],
                'template_id' => $sms_response['template_id'],
                'receivers' =>  $_REQUEST['from'],
            ];
            $req =  json_decode(json_encode($req));
            $sms_model=new Sms_Model;
            return $sms_model->sent_sms($req, $user_id);
        }


        if(isset($webhook) && $webhook != "" && $active==1){
            $res = ['number' => $_REQUEST['from'],'time' => $_REQUEST['receive_time'],'content' => $_REQUEST['message']];
            $res =  json_encode($res);
            $ch = curl_init();
            curl_setopt_array($ch, array(CURLOPT_URL => $webhook,CURLOPT_RETURNTRANSFER => true, CURLOPT_POST => true, CURLOPT_POSTFIELDS => $res));
            curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
            curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
            echo curl_exec($ch);
            curl_close($ch);
        }  

        // return true;


    }
    public function virtual_report()
    {
        DB::enableQueryLog();

        $data = Virtual_enquires::where('user_id', Auth::id())->where('active', 1)->orderBy('id','desc')->get();
        // return DB::getQueryLog();
        return response()->json([
            'message' => 'Column details',
            'status' => '200',
            'data' => $data,
        ], 200);
    }




    public function filter_enquires(Request $request)
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

            $query =  DB::table('virtual_enquires')->select("*");


            if(isset($request->sender)){
                $query = $query->where('sender', $request->sender);
            }

            if(isset($request->keyword)){
                $query = $query->where('keyword', $request->keyword);
            }

            if(isset($request->virtual_number)){
                $query = $query->where('virtual_number', $request->virtual_number);
            }

            $query = $query->where('active', 1);
            $query = $query->whereBetween('created_at', [$from, $to])->where('user_id', Auth::id());
            
            $data = $query->orderBy('id','desc')->get();
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
} 
