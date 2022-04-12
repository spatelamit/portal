<?php

namespace App\Http\Controllers;

ini_set('max_execution_time', '3600');
ini_set('memory_limit', '107374182400');

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
use App\Models\Sms_Model;
use App\Models\missed_call_number;
use App\Models\missed_call_setting;

use App\Models\Missed_call_enquiry;
// use LDAP\Result;

class MissedCall extends Controller
{
    public function missed_call_save(Request $request){

        $validated = Validator::make($request->all(), [
            // 'keywords' => 'required',
            'number' => 'required',
            // 'status' => 'required',
            // 'description' => 'required',

        ]);
        if($validated->fails()){
            return response()->json([
                'Message' => $validated->errors(),
                'Status' => 'Failed',
            ], 403);
        }else{

            $insert = missed_call_setting::inset(array(
                'missed_call_number' => $request->number,
                'missed_call_id' => $request->number,
                'webhook_url' => $request->webhook_url,
                'sms_response' => json_encode($request->sms_response),
                'email_response' => json_encode($request->email_response),
            ));
            
            if ($insert) {
                return response()->json([
                    'message' => 'data inserted',
                ]);
            }
        }
    }

    public function get_missedCall_list(){
        DB::enableQueryLog();

        $data = missed_call_setting::where('user_id', Auth::id())->get();
        return response()->json([
            'message' => 'Column details',
            'status' => '200',
            'data' => $data,
        ], 200);
    }

    public function get_missedCall_number(){
        DB::enableQueryLog();

        $data = missed_call_number::where('user_id', Auth::id())->where('status', 1)->get();
        return response()->json([
            'message' => 'Column details',
            'status' => '200',
            'data' => $data,
        ], 200);
    }

    public function insert_missed_call(Request $request){
        $validated = Validator::make($request->all(), [
            'status' => 'required',
            'number' => 'required',
        ]);
        if($validated->fails()){
            return response()->json([
                'Message' => $validated->errors(),
                'Status' => 'Failed',
            ], 403);
        }else{
            // return $request;
            DB::enableQueryLog();
            $insert = missed_call_setting::insert(array(
                'missed_call_number' => $request->number,
                'user_id' => Auth::id(),
                'missed_call_id' => $request->missed_call_id,
                'webhook_url' => $request->webhook_url,
                'sms_response' => json_encode($request->sms_response),
                'email_response' => json_encode($request->email_response),
            ));
            // return DB::getQueryLog();


            
            if ($insert) {
                return response()->json([
                    'message' => 'data inserted',
                ]);
            }
        }
    }

    public function edit_missed_call(Request $request){
        $validated = Validator::make($request->all(), [
            'id' => 'required',
        ]);
        if($validated->fails()){
            return response()->json([
                'Message' => $validated->errors(),
                'Status' => 'Failed',
            ], 403);
        }else{
            // return $request;
            DB::enableQueryLog();
            $insert = DB::table('missed_call_settings')->where('id', $request->id)->where('user_id', Auth::id())->update(array(
                'missed_call_number' => $request->number,
                'user_id' => Auth::id(),
                'missed_call_id' => $request->missed_call_id,
                'webhook_url' => $request->webhook_url,
                'sms_response' => json_encode($request->sms_response),
                'email_response' => json_encode($request->email_response),
            ));
            // return $insert->toSql();
            // return DB::getQueryLog();


            
            if ($insert) {
                return response()->json([
                    'message' => 'data inserted',
                ]);
            }
        }
    }

    public function delete_missed_call($id){
        missed_call_setting::where('id', $id)->where('user_id', Auth::id())->delete();
        DB::statement('ALTER TABLE missed_call_settings AUTO_INCREMENT = 1');

        return response()->json([
            'message' => 'Data Deleted',
        ]);
    }


    public function missed_call_report()
    {
        DB::enableQueryLog();

        $data = Missed_call_enquiry::where('user_id', Auth::id())->where('active', 1)->orderBy('id','desc')->get();
        // return DB::getQueryLog();
        return response()->json([
            'message' => 'Column details',
            'status' => '200',
            'data' => $data,
        ], 200);
    }




    public function filter_missed_call(Request $request)
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

            $query =  DB::table('missed_call_enquiries')->select("*");


            if(isset($request->number)){
                $query = $query->where('missed_call_number', $request->number);
            }

            if(isset($request->sender)){
                $query = $query->where('caller', $request->sender);
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


    public function missedcall_endpoint(Request $req)
    {
       
       // {"phonecode":"917773003003","msisdn":"918989898483","start_time":"2022-04-02 12:24:02"}6247f35b16c33\n

     // return file_get_contents('php://input');
       //return $_REQUEST;
        //$req->phonecode.$req->msisdn.$req->start_time;
        // return "ok";

        // $fp = fopen('/home/bulk24sms.in/public_html/laravel-angular/backend/data.txt', 'a');
      
        // fwrite($fp, $data."fg \n");
        // fclose($fp);

       // print_r($_REQUEST);
        //print_r(file_get_contents('php://input'));


        // return "ok";
        // return $req;
        // return $_REQUEST;
        // return  file_get_contents('php://input');
        // die;

        // $fp = fopen('/home/bulk24sms.in/public_html/laravel-angular/backend/data.txt', 'a');
      
        // fwrite($fp, json_encode($request->all())."\n");
        // fclose($fp);
        // return true;
        // // return $request->phonecode;

         $data = missed_call_setting::where('missed_call_number', $req->phonecode)->first();
        
                
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

        $a = [
            "user_id" => $user_id,
            "caller" => $req->msisdn,
            "missed_call_number" => $req->phonecode,
            "active" =>$active
        ];
        Missed_call_enquiry::insert($a);

        if(isset($sms_response['sender']) && $active==1){
            $req = [
                'campaign_name' => "Virtual Number Sms",
                'message' => $sms_response['message'],
                'message_type' => 1,
                'route' => "TR",
                'sender' => $sms_response['sender'],
                'template_id' => $sms_response['template_id'],
                'receivers' =>  $req->msisdn,
            ];
            $req =  json_decode(json_encode($req));
            $sms_model=new Sms_Model;
            return $sms_model->sent_sms($req, $user_id);
        }


        if(isset($webhook) && $webhook != "" && $active==1){
            $res = ['msisdn' => $req->msisdn,'time' => $req->start_time,'phonecode' => $req->phonecode];
            $res =  json_encode($res);
            $ch = curl_init();
            curl_setopt_array($ch, array(CURLOPT_URL => $webhook,CURLOPT_RETURNTRANSFER => true, CURLOPT_POST => true, CURLOPT_POSTFIELDS => $res));
            curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
            curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
            echo curl_exec($ch);
            curl_close($ch);
        }  
        return "Success". $req->msisdn;

    }

}
