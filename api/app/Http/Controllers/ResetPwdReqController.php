<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;

use Carbon\Carbon;
use App\Models\User;
use App\Mail\SendMail;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Symfony\Component\HttpFoundation\Response;

class ResetPwdReqController extends Controller
{
    public function resetPassword(Request $request)
    {
        if($this->validateUsername($request->username))
        {
            
            $number=DB::table('users')->where('username', ($request->username))->value('contact_number');
            $otp=rand(1000,9999);   
            $number = trim($number," ");

            $authKey = "f4b82730710ac438ea9cd09236c9e54d";
                
            $mobileNumber = $number;

            $senderId = "SRTSIN";
      
            $message = "verification code: ".$otp."\nRequest From IP: 192.168.0.112\nNumber: ".$number."\nSR Technology Services Pvt. Ltd..";

            $route = "B";

            $Template_ID="1107161518772416122";

            $postData = array(
                'authkey' => $authKey,
                'mobiles' => $mobileNumber,
                'message' => $message,
                'sender' => $senderId,
                'route' => $route,
                'Template_ID' => $Template_ID
            );

            $url = "https://sms.bulksmsserviceproviders.com/api/send_http.php";
            $ch = curl_init();
            curl_setopt_array($ch, array(
                CURLOPT_URL => $url,
                CURLOPT_RETURNTRANSFER => true,
                CURLOPT_POST => true,
                CURLOPT_POSTFIELDS => $postData
                
            ));
            curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
            curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
            $output = curl_exec($ch);
           
            if (curl_errno($ch)) {
                echo 'error:' . curl_error($ch);
            }
            curl_close($ch);
            $res=response()->json([
                'success'=> 'Sms Sent',
                'username' => $request->username,
                'number' => $number,
                'otp' => $otp],
                Response::HTTP_OK);
            session()->put('a', $request->username);

            DB::table('users')->where('contact_number', $number)->limit(1)->update(array('otp_user' => $otp));  

            return $res;
        }
        else
        {
            return response()->json([
            'error'=> 'username doesnot exist'],
            Response::HTTP_NOT_FOUND);
        }
    }

    public function validateUsername($username)
    {
        return !!User::where('username', $username)->first();
    }

    public function verifyPassword(Request $request)
    {
        
        $dbOtp=DB::table('users')->select('otp_user')->where('username', $request->username)->get(); 
         
        if($request->otpenter==$dbOtp)
        {
            print_r('hello');
        }
    }

    public function newPassword(Request $request)
    {

        if($request->password==$request->password_confirmation)
        {
            
            DB::table('users')->where('username', $request->username)->limit(1)->update(array('password' => bcrypt($request->password)));  
            return response()->json([
            'success'=> 'Password Update'],
            Response::HTTP_OK);
        }
        else
        {
            return response()->json([
            'error'=> 'New Password does not match with Confirm Password'],
            Response::HTTP_NOT_FOUND);
        }
        

    }


   
}
