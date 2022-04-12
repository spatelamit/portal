<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;


use App\Models\User;

class Mail_model extends Model
{
   use HasFactory;

	public function getPhonebookEmail($phonebook_ids,$user_id){
	  	$phonebook_contact = array();

	  	foreach ($phonebook_ids as $key => $phonebook_id)
	  	{
	      $sql = "SELECT 
	                  v.value
	              	FROM phonebook_contact_values v, phonebook_columns c
	              	WHERE 
	                  v.phonebook_id = ".$phonebook_id." and c.column_name = 'Email'  and c.column_id = v.column_id ";

	      $result=DB::select($sql);
	      foreach ($result as $key => $value) {
	         $phonebook_contact[] = $value->value;
	      }
	  	}
	  
	  	return $phonebook_contact;
	}

	public function campaign($request, $result_array, $campaign_id){
 		
 		$a=array(
			"user_id" => Auth::id(),
			"sender_email" => $request->sender,
			"sender_source" => $request->sender_name,
			"subject" =>$request->subject,
			"email_content" =>$request->body,
			"campaign_id"=>$campaign_id,
			"total_messages"=>sizeof($result_array)
		);

    	if(isset($request->scheduleTime)){
        	$a = array_merge($a, array("schedule_date"=>$request->scheduleTime, "schedule_status"=>1));
     	}

     	$send_email=DB::table('email_campaign')->insert($a);

     	return "true";

	}

   public function sent_mail($request,$user_id)
   {
   		$mail_model = new Mail_model; 
		$Credit=1;
		$user_details= User::where('id', $user_id)->first();


		$result_array = explode(',', $request->recipient);
		if ($request->recipient == "" || is_null($request->recipient)) {
			$result_array = array();
		}

		if(isset($request->phonebook_id)){
        	$phonebook_data = $mail_model->getPhonebookEmail($request->phonebook_id, $user_id);
         	$result_array  = array_merge($result_array, $phonebook_data);
		}
		if(isset($request->csv_email)){
		   $result_array = array_merge($result_array, $request->csv_email);
		}

		$mail_balance = $user_details->mail_balance;

		if ($mail_balance >= sizeof($result_array)) {
			$campaign_id=md5(uniqid());

        	$send_email = $mail_model->campaign($request, $result_array, $campaign_id);

		 	if($send_email){
         		foreach ($result_array as $mail){
	         		DB::table('email_inbox')->insert(
	                 	array(
	                     	// "dlr_mask" => $request->route,
	                     	// "email_id" => md5(uniqid()),
	                     	// "sender_email" => $request->sender_email,
	                     	// "sender_source" => $request->sender_source,
	                     	// "email_content" => $request->email_content,
	                     	// "campaign_name" =>$request->campaign_name,
	                     	// "total_messages" => $request->total_messages,
	                     	// "mail_type" => $request->mail_type,
							"msgbody" =>$request->body,
							"email" => $mail,
							"user_id" => $user_id,
							"subject" => $request->subject,
							"campaign_id"=>$campaign_id,
	                 	)
	         		);      
        		}
         	}


			if ($mail_balance >= $Credit * sizeof($result_array)) {
	            $remain_balance = $mail_balance - $Credit * sizeof($result_array);
	            User::where('id', $user_id)->limit(1)->update(array('mail_balance' => $remain_balance)); 
	        }
         	return response()->json([
	         	'Campaign Id' => $campaign_id,
	         	'Status' => 'Success',
	      	], 200); 
       		
    	}else{
         	return response()->json([
				'Message' => 'Insufficient Balance!',
				'Status' => 'Failed',
         	], 403);
     	}   
   	}
}