<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\ApiController;
use App\Http\Controllers\UserController;        
use App\Http\Controllers\JwtAuthController;
use App\Http\Controllers\Virtual_numberController;
use App\Http\Controllers\SendSmsController;
use App\Http\Controllers\PhonebookController;
use App\Http\Controllers\ResetPwdReqController;
use App\Http\Controllers\VoiceController;
use App\Http\Controllers\Reseller;
use App\Http\Controllers\MissedCall;
use App\Http\Controllers\Mailer;
use App\Http\Controllers\Rcs;



/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/

Route::get('/getLabelData/{domain}', [Reseller::class, 'getLabelData']); 

Route::post('/signup', [JwtAuthController::class, 'register']);
Route::post('/signin', [JwtAuthController::class, 'login']);



//--------------     Reset Password Controller     --------------//

Route::post('/reset-password', [ResetPwdReqController::class, 'resetPassword']);
Route::post('/verify-password', [ResetPwdReqController::class, 'verifyPassword']);
Route::post('/new-password', [ResetPwdReqController::class, 'newPassword']);
Route::post('/save_alert', [Reseller::class, 'save_alert']); 
Route::get('/get_alert/{user_id}', [Reseller::class, 'get_alert']); 


//--------------     ApiController Controller     --------------//

Route::post('/send', [ApiController::class, 'send']); 
Route::post('/fetch_balance', [ApiController::class, 'fetch_balance']); 
Route::post('/fetch_report', [ApiController::class, 'fetch_report']); 

Route::group([
    'middleware' => 'auth:api'
], function ($router) {

//--------------     JWT Auth Controller     --------------//
    Route::get('/user', [JwtAuthController::class, 'users']);
    Route::post('/signout', [JwtAuthController::class, 'signout']);
    Route::post('/adduser', [JwtAuthController::class, 'register']);

//--------------     **********     --------------//

//----------------------------     PhonebookController    -----------------------------//

    Route::post('/phonebookSave', [PhonebookController::class, 'phonebookSave']);
    Route::post('/phonebookimport', [PhonebookController::class, 'phonebookimport']);

    Route::get('/phonebookDel/{phonebook_id}', [PhonebookController::class, 'phonebookDel']);
    Route::get('/phonebookView/{phonebook_id}', [PhonebookController::class, 'phonebookView']);
    Route::get('/phonebookName/{phonebook_id}', [PhonebookController::class, 'phonebookName']);

    Route::post('/phonebookColumn', [PhonebookController::class, 'phonebookColumn']);
    Route::post('/phonebookColumnEdit', [PhonebookController::class, 'phonebookColumnEdit']);
    
    Route::get('/phonebookColumnDel/{column_id}', [PhonebookController::class, 'phonebookColumnDel']);
    Route::get('/getColumn', [PhonebookController::class, 'getColumn']);

    Route::post('/phonebookValue', [PhonebookController::class, 'phonebookValue']);
    Route::post('/contactEdit', [PhonebookController::class, 'contactEdit']);  
    

    Route::get('/contactList/{phonebook_id}', [PhonebookController::class, 'contactList']);
    Route::get('/contactdel/{contact_id}', [PhonebookController::class, 'contactDel']);
    Route::get('/contactEditDetail/{contact_id}', [PhonebookController::class, 'contactEditDetail']);  

//--------------     **********     --------------//


//--------------     User Controller     --------------//

    Route::post('/password-update', [UserController::class, 'passwordupdate']);
    Route::post('/profile-update', [UserController::class, 'profileupdate']);
    Route::post('/apply_temps', [UserController::class, 'apply_temps']);
    Route::post('/templateImport', [UserController::class, 'templateImport']);
    Route::post('/apply_senderId', [UserController::class, 'apply_senderId']);

    Route::get('/get_senderId', [UserController::class, 'get_senderId']);
    Route::get('/delete_senderId/{id}', [UserController::class, 'delete_senderId']);
    Route::get('/get_temps', [UserController::class, 'get_temps']);
    Route::get('/delete_temps/{id}', [UserController::class, 'delete_temps']);

    Route::put('/edit_temps/{id}', [UserController::class, 'edit_temps']);
    Route::put('/edit_senderId/{id}', [UserController::class, 'edit_senderId']);

//--------------     **********     --------------//
    

//--------------    Delivery Report      --------------//

    Route::get('/logs/{campaign_id}', [UserController::class, 'logs']);
    Route::post('/logsExport',[UserController::class,'logsExport']);
    Route::get('/campaignFull/{campaign_id}', [UserController::class, 'campaignFull']);

    // Route::post('/exportReport',[UserController::class,'exportReport']);
    Route::get('/report', [UserController::class, 'report']);  
    Route::post('/logsFilter',[UserController::class,'logsFilter']);
    Route::post('/reportExport',[UserController::class,'reportExport']);
    Route::post('/filterReport', [UserController::class, 'filterReport']);
//--------------     Send Sms Controller     --------------//
    
    Route::post('/send-sms', [SendSmsController::class, 'sendSms']);
    Route::post('/sendCustomSms', [SendSmsController::class, 'sendCustomSms']);
    Route::post('/resendSms', [SendSmsController::class, 'resendSms']);

    Route::get('/sms', [SendSmsController::class, 'sms']);
    Route::get('/phonebook_conctact/{group_id}', [SendSmsController::class, 'phonebook_conctact']);

//--------------     Reseller User management  --------------//
 
    Route::get('/getusers', [Reseller::class, 'getusers']);
    Route::get('/getuser/{reseller_user_id}', [Reseller::class, 'getuser']);
    Route::get('/transactionlog/{reseller_user_id}', [Reseller::class, 'transactionlog']); 
    Route::get('/dlrSummary/{reseller_user_id}', [Reseller::class, 'dlrSummary']); 

    Route::post('/fundtransfer', [Reseller::class, 'fundtransfer']);
    Route::post('/changeDemoAcc', [Reseller::class, 'changeDemoAcc']); 
    Route::post('/setExpiry', [Reseller::class, 'setExpiry']);

    ####----------  White Label  ----------####
    Route::get('/getLabel', [Reseller::class, 'getLabel']);
    Route::get('/getLabelData', [Reseller::class, 'getLabelData']);
    Route::get('/getSingleLabel/{label_id}', [Reseller::class, 'getSingleLabel']);
    Route::get('/deletLabel/{label_id}', [Reseller::class, 'deletLabel']);

    Route::post('/addDomain', [Reseller::class, 'addDomain']); 
    Route::post('/addHeader', [Reseller::class, 'addHeader']); 
    Route::post('/addFooter', [Reseller::class, 'addFooter']);
    Route::post('/addSocial_link', [Reseller::class, 'addSocial_link']);
    Route::post('/addAbout', [Reseller::class, 'addAbout']);
    Route::post('/addService', [Reseller::class, 'addService']);
    Route::post('/addSEO', [Reseller::class, 'addSEO']);
    // Route::post('/addOther', [Reseller::class, 'addOther']);

    //--------------     Voice Controller     --------------//
    
    Route::post('/sendVoice', [VoiceController::class, 'sendVoice']);
    Route::post('/resendVoice', [VoiceController::class, 'resendVoice']);
    
    Route::post('/save_draft', [VoiceController::class, 'save_draft']);
    Route::get('/get_draft', [VoiceController::class, 'get_draft']);
    Route::post('/edit_draft', [VoiceController::class, 'edit_draft']);
    Route::get('/delete_draft/{id}', [VoiceController::class, 'delete_draft']);

    Route::get('/voiceReport', [VoiceController::class, 'voiceReport']);  
    Route::post('/voiceReportExport',[VoiceController::class,'voiceReportExport']);
    Route::post('/voiceFilterReport', [VoiceController::class, 'voiceFilterReport']);

    Route::get('/voiceLogs/{campaign_id}', [VoiceController::class, 'voiceLogs']);
    Route::post('/voiceLogsExport',[VoiceController::class,'voiceLogsExport']);
    Route::post('/voiceLogsFilter',[VoiceController::class,'voiceLogsFilter']);

    Route::get('/voiceStatistics/{campaign_id}', [VoiceController::class, 'voiceStatistics']);


    //--------------     LongCode Controller     --------------//

    Route::post('/virtual_number', [Virtual_numberController::class, 'virtual_number']);

    Route::post('/virtual_assigned', [Virtual_numberController::class, 'virtual_assigned']);

    Route::get('/get_virtual_number', [Virtual_numberController::class, 'get_virtual_number']);

    Route::post('/insert_keyword', [Virtual_numberController::class, 'insert_keyword']);

    Route::get('/get_keyword', [Virtual_numberController::class, 'get_keyword']);

    Route::post('/edit_keyword', [Virtual_numberController::class, 'edit_keyword']); 

    Route::get('/delete_keyword/{id}', [Virtual_numberController::class, 'delete_keyword']);

    Route::get('/virtual_report', [Virtual_numberController::class, 'virtual_report']);

    Route::get('/smsVirtualNumber', [Virtual_numberController::class, 'smsVirtualNumber']);

    Route::post('filter_enquires', [Virtual_numberController::class, 'filter_enquires']);

    //--------------     MissedCall Controller     --------------//

    Route::post('/missed_call_save', [MissedCall::class, 'missed_call_save']);


    Route::post('/insert_missed_call', [MissedCall::class, 'insert_missed_call']);
    Route::post('/edit_missed_call', [MissedCall::class, 'edit_missed_call']); 
    Route::post('/filter_missed_call', [MissedCall::class, 'filter_missed_call']); 
    Route::get('/get_missedCall_number', [MissedCall::class, 'get_missedCall_number']);
    Route::get('/get_missedCall_list', [MissedCall::class, 'get_missedCall_list']);
    Route::get('/delete_missed_call/{id}', [MissedCall::class, 'delete_missed_call']);
    Route::get('/missed_call_report', [MissedCall::class, 'missed_call_report']);


    //--------------     Mailer Controller     --------------//
    
    Route::post('/send_mail', [Mailer::class, 'send_mail']);
    Route::post('/resendMail', [Mailer::class, 'resendMail']);
    Route::get('/verifyMailStatus', [Mailer::class, 'verifyMailStatus']);
    Route::post('/verifyMail', [Mailer::class, 'verifyMail']);


    Route::get('/mail_report', [Mailer::class, 'mail_report']);
    Route::post('/mailreportExport', [Mailer::class, 'mailreportExport']);
    Route::post('/mailfilterReport', [Mailer::class, 'mailfilterReport']);

    Route::get('/mail_logs/{campaign_id}', [Mailer::class, 'mail_logs']);
    Route::post('/maillogsExport', [Mailer::class, 'maillogsExport']);
    Route::post('/maillogsFilter', [Mailer::class, 'maillogsFilter']);

    Route::get('/deleteMail/{$id}', [Mailer::class, 'deleteMail']);

    Route::get('/getVerifiedMail', [Mailer::class, 'getVerifiedMail']);

    Route::get('/mailStatistics/{campaign_id}', [Mailer::class, 'mailStatistics']);






    //----------------- Rcs Controller -----------------//

    Route::post('/rcssetting', [Rcs::class, 'rcssetting']);
    Route::get('/get_rcssetting', [Rcs::class, 'get_rcssetting']);
    Route::post('/edit_rcssetting', [Rcs::class, 'edit_rcssetting']);
    Route::get('/delete_rcssetting/{id}', [Rcs::class, 'delete_rcssetting']);

    Route::post('/create_template', [Rcs::class, 'create_template']);
    Route::get('/get_template', [Rcs::class, 'get_template']);

    Route::post('/send_rcs', [Rcs::class, 'send_rcs']);
    
    Route::get('/rcs_report', [Rcs::class, 'rcs_report']);
    Route::post('/rcsReportExport', [Rcs::class, 'rcsReportExport']);
    Route::post('/rcsFilterReport', [Rcs::class, 'rcsFilterReport']);


    Route::get('/rcsLogs/{campaign_id}', [Rcs::class, 'rcsLogs']);
    Route::post('/rcsLogsExport', [Rcs::class, 'rcsLogsExport']);
    Route::post('/rcsLogsFilter', [Rcs::class, 'rcsLogsFilter']);

    
});
Route::post('/virtual_endpoint', [Virtual_numberController::class, 'virtual_endpoint']);
Route::post('/missedcall_endpoint', [MissedCall::class, 'missedcall_endpoint']);