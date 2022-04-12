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
use App\Models\phonebook_contact;
use App\Models\Whitelabel;


// Auth::id() can give user id from JWT Token

class Reseller extends Controller
{


   // public function __construct() {

         // $this->user_id = auth()->payload()->get('sub');
   // }


    // auth()->payload()->get('sub');



    public function getusers()
    {

        $users = User::where('parent_id', Auth::id())->get();
        return response()->json($users, 200);

    }
    
    public function getuser($reseller_user_id) {
        $users = User::where('id', $reseller_user_id)->where('parent_id', Auth::id())->get();
        return response()->json($users, 200);

    }

    public function fundtransfer(Request $request)
    {
       // return $request->txn_route;
        $new_balance = $request->txn_sms;

        $route = $request->txn_route;
        if ($route == 'PR') {
            $column = "pr_sms_balance";
        }elseif ($route == 'TR') {
            $column = "tr_sms_balance";
        }elseif ($route == 'LC') {
            $column = "long_code_balance";
        }elseif ($route == 'SC') {
            $column = "short_code_balance";
        }elseif ($route == 'VP') {
            $column = "pr_voice_balance";
        }elseif ($route == 'VT') {
            $column = "tr_voice_balance";
        }


        // ***************Update Parent balance***************
        $detail = DB::table('users')->select(''.$column.'')
                                    ->where('id', $request->txn_user_from)
                                    ->get();

        foreach ($detail as $key) {
            $old_balance = $key->$column;

            if ($request->txn_type== 'Add') {
                $remain_balance = $old_balance - $new_balance;
                if($remain_balance < 0){
                    return response()->json([
                        'message' => 'Insufficient Funds',
                        'status' => 'Failed',
                    ], 200);
                }            
            }elseif($request->txn_type == 'Reduce'){
                $remain_balance = $old_balance + $new_balance;
            }
        }
        
        $data = array(''.$column.'' => $remain_balance );
 


        $que = User::where("id", $request->txn_user_from)->update($data);

        // ***************Update Child balance***************


        $detail1=User::where('id', $request->txn_user_to)->get();

        foreach ($detail1 as $key1) {
            $old_balance1 = $key1->$column;

            if ($request->txn_type == 'Add') {
                $remain_balance1 = $old_balance1 + $new_balance;            
            }elseif($request->txn_type == 'Reduce'){
                $remain_balance1 = $old_balance1 - $new_balance;
                if($remain_balance1 < 0){
                    return response()->json([
                        'message' => 'Insufficient Funds',
                        'status' => 'Failed',
                    ], 200);
                } 
            }
        }
        
        $data = array(''.$column.'' => $remain_balance1 );

        $que1 = User::where("id", $request->txn_user_to)->update($data);

        // ***************Making Logs*************** 
        $que3 = DB::table('transaction_logs')->insert(
                [
                    "txn_amount" => $request->txn_amount,
                    "txn_description" => $request->txn_description,
                    "txn_price" => $request->txn_price,
                    "txn_route" => $request->txn_route,
                    "txn_sms" => $request->txn_sms,
                    "txn_type" => $request->txn_type,
                    "txn_user_from" => $request->txn_user_from,
                    "txn_user_to" => $request->txn_user_to
                ]
            );      


        if ($que && $que1 && $que3) {
            return response()->json([
                'message' => 'Fund Trasfered Successfully',
                'status' => 'Success',
            ], 200);
        }
        
       
    }

    public function transactionlog($reseller_user_id){

        $query = DB::select("SELECT users.name, transaction_logs.* FROM `transaction_logs` JOIN `users` ON users.id = transaction_logs.txn_user_from WHERE txn_user_to = ".$reseller_user_id." ");

        return response()->json($query, 200);
    }

    public function dlrSummary($reseller_user_id)
    {   
        $query =  DB::table('usersdailycount')->select('*')->where('user_id', $reseller_user_id)->where('parent_id', Auth::id())->get();
        return response()->json($query, 200);

    }
    public function changeDemoAcc(Request $request)
    {

        User::where("id", $request->id)->update(array('check_demo_user' => $request->check_demo_user));
  
        return response()->json([
                'message' => 'Updated Successfully',
                'status' => $request->check_demo_user,
            ], 201);
    }

    public function setExpiry(Request $request)
    {
        $date= date('Y-m-d' ,strtotime($request->date));
        // (date("Y-m-d",$t))
        // return strtotime($request->date);
        User::where("id", $request->id)->update(array('expiry' => $date));
  
        return response()->json([
                'message' => 'Updated Successfully',
                'status' => 200,
            ], 200);
    }
    
    public function save_alert(Request $request)
    {
        DB::table('low_balance_alert')->insert(
                [
                    "user_id" => $request->user_id,
                    "type" => $request->type,
                    "value" => $request->value,
                ]);
        return response()->json('Alert Added Successfully', 200);

    }

    public function get_alert($user_id)
    {
        $query=DB::table('low_balance_alert')->select('*')->where('user_id', $user_id)->get();

        return response()->json($query, 200);
    }

    //-------------------------- white Label -----------------------------//

    public function view($domain){
        if (isset($domain)) {
            $data= Whitelabel::where('domain', $domain)->get();
            return response()->json([
                'message' => 'Company Detail',
                'status' => 200,
                'data' => $data,
            ], 200);
        }else{
            return response()->json([
                'message' => 'Invalid Domain',
                'status' => 401,
            ], 401);
        }
    }
    public function getLabel()
    {
        if (Auth::id()) {
            $data= Whitelabel::where('user_id', Auth::id())->get();
            return response()->json([
                'message' => 'Company Name Added',
                'status' => 200,
                'data' => $data,
            ], 200);
        }else{
            return response()->json([
                'message' => 'Invalid User Id',
                'status' => 204,
            ], 204);
        }
    }

    public function getSingleLabel($label_id)
    {


        if (isset($label_id)) {
            $data= Whitelabel::where('id', $label_id)->where('user_id', Auth::id())->get();
            return response()->json([
                'message' => 'Company Detail',
                'status' => 200,
                'data' => $data,
            ], 200);
        }else{
            return response()->json([
                'message' => 'Invalid User Id',
                'status' => 204,
            ], 204);
        }
    }

    public function getLabelData($domain)
    {
        $a = DB::table('whitelabels')->select('domain')->where('domain', $domain)->get();
        if (isset($a)) {
            $data= Whitelabel::where('domain', $domain)->get();
            return response()->json([
                'message' => 'Whitelabele Details',
                'status' => 200,
                'data' => $data,
            ], 200);
        }else{
            return response()->json([
                'message' => 'Invalid Domain',
                'status' => 204,
            ], 204);
        }
    }

    
    public function deletLabel($label_id)
    {
        if (isset($label_id)) {
            Whitelabel::where('id', $label_id)->delete();
            DB::statement('ALTER TABLE whitelabels AUTO_INCREMENT = 1');
            return response()->json([
                'message' => 'label deleted',
                'status' => 200,
            ], 200);
        }else{
            return response()->json([
                'message' => 'Invalid',
                'status' => 204,
            ], 204);
        }

        
    }
    public function addDomain(Request $request)
    {
        $validated = Validator::make($request->all(), [ 
            'company_name' => 'required',
            'domain' => 'required',
        ]);

        if(!$validated->fails())
        {
            Whitelabel::insert(["user_id" => Auth::id(),"company_name" => $request->company_name,"domain" => $request->domain,]);
            $last_id = DB::getPdo()->lastInsertId();
            return response()->json([
                'message' => 'Company Name Added',
                'status' => 200,
                'id' => $last_id,
            ], 200); 
        }
        else
        {
            return response()->json([
                'message' => $validated->errors(),
                'status' => 'Failed',
            ], 403); 
        }
    }

    

    public function addHeader(Request $request)
    {
        $validated = Validator::make($request->all(), [ 
            'logo_file' => 'image|mimes:jpg,png,jpeg,gif,svg|max:2048',
            'icon_file' => 'image|mimes:jpg,png,jpeg,gif,svg|max:2048',
            'banner_file' => 'image|mimes:jpg,png,jpeg,gif,svg|max:2048',
        ]);

        if(!$validated->fails())
        {
           
            ###--- Logo ---###
            $logo_file_name = uniqid().$request->file('logo_file')->getClientOriginalName();
            $logo_file_path = $request->file('logo_file')->storeAs('uploads/logo', $logo_file_name, 'public');


            ###--- Icon ---###
            $icon_file_name = uniqid().$request->file('icon_file')->getClientOriginalName();
            $icon_file_path = $request->file('icon_file')->storeAs('uploads/icon', $icon_file_name, 'public');
            

            ###--- Banner ---###
            $banner_file_name = uniqid().time().$request->file('banner_file')->getClientOriginalName();
            $banner_file_path = $request->file('banner_file')->storeAs('uploads/banner', $banner_file_name, 'public');
            

            Whitelabel::where('id', $request->id)->where('user_id', Auth::id())->update([
                'logo' => $logo_file_path,
                'icon' => $icon_file_path,
                'banner_image' =>  $banner_file_path,
                'banner_text' => $request->banner_text,
            ]);

            return response()->json([
                'message' => 'Header Updated',
                'status' => 200,
            ], 200); 
        }
         else
         {
             return response()->json([
                 'Message' => $validated->errors(),
                 'Status' => 'Failed',
             ], 403); 
        }  
    }
    public function addFooter(Request $request)
    {
        $validated = Validator::make($request->all(), [ 
            'id' => 'required',
        ]);

        if(!$validated->fails())
        {
            Whitelabel::where('id', $request->id)->where('user_id', Auth::id())->update([
                'address' => $request->address,
                'email' => $request->email,
                'contact_number' => $request->contact_number,
                'city' => $request->city,
                'country' => $request->country,
                'zip' => $request->zip,
            ]);

            return response()->json([
                'message' => 'Footer Updated',
                'status' => 200,
            ], 200);  
        }
        else
        {
            return response()->json([
                'message' => $validated->errors(),
                'status' => 'Failed',
            ], 403); 
        }  
    }
    public function addSocial_link(Request $request)
    {
        $validated = Validator::make($request->all(), [ 
            'id' => 'required',
        ]);

        if(!$validated->fails())
        {
            Whitelabel::where('id', $request->id)->where('user_id', Auth::id())->update(['social_links' => $request->social_link]);
    
            return response()->json([
                'message' => 'Social links Updated',
                'status' => 200,
            ], 200);  
        }
        else
        {
            return response()->json([
                'message' => $validated->errors(),
                'Status' => 'Failed',
            ], 403); 
        }  
    }
    public function addSEO(Request $request)
    {
        $validated = Validator::make($request->all(), [ 
            'id' => 'required',
        ]);

        if(!$validated->fails())
        {
            Whitelabel::where('id', $request->id)->where('user_id', Auth::id())->update([
                'google_analytic_id' => $request->google_analytic_id,
                'meta_title' => $request->meta_title,
                'meta_desc' => $request->meta_desc,
                'meta_keywords' => $request->meta_keywords,
            ]);
    
            return response()->json([
                'message' => 'SEO Updated',
                'status' => 200,
            ], 200);  
        }
        else
        {
            return response()->json([
                'Message' => $validated->errors(),
                'Status' => 'Failed',
            ], 403); 
        }  
    }
    public function addAbout(Request $request)
    {  
        //$about_image_path = "/home/mahesh/public_html/backend/storage/app/public/". $about_image_path;

        $validated = Validator::make($request->all(),[ 
            'about_image' => 'required',
        ]);

        if(!$validated->fails())
        {
            $about_image_name = uniqid().time().$request->file('about_image')->getClientOriginalName();
            $about_image_path = $request->file('about_image')->storeAs('uploads/about', $about_image_name, 'public');

            Whitelabel::where('id', $request->id)->where('user_id', Auth::id())->update([
                'about_image' => $about_image_path,
                'about_desc' => $request->about_desc,
            ]);
    
            return response()->json([
                'message' => 'About Us Updated',
                'status' => 200,
            ], 200);  
        }
        else
        {
            return response()->json([
                'Message' => $validated->errors(),
               'Status' => 'Failed',
            ], 403); 
        }  
    }
    public function addService(Request $request)
    {
        $validated = Validator::make($request->all(), [ 
            'id' => 'required',
        ]);

        if(!$validated->fails())
        {
            Whitelabel::where('id', $request->id)->where('user_id', Auth::id())->update(['service1' => $request->service1, 'service2' => $request->service2, 'service3' => $request->service3]);
    
            return response()->json([
                'message' => 'Services Added',
                'status' => 200,
            ], 200);  
        }
        else
        {
            return response()->json([
                'message' => $validated->errors(),
                'status' => 'Failed',
            ], 403); 
        }  
    }
}  