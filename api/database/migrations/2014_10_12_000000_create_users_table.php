<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();

            $table->integer('admin_id')->nullable();
            $table->integer('ref_user_id')->nullable();
            $table->integer('most_parent_id')->nullable();

            $table->string('name');
            $table->string('email');
            $table->string('password');

            $table->rememberToken()->nullable();
            $table->timestamps();
            $table->timestamp('email_verified_at')->nullable();

            $table->string('contact_number')->nullable();
            $table->string('date_of_birth')->nullable();
            $table->string('address')->nullable();
            $table->string('city')->nullable();
            $table->string('country')->nullable();

            $table->integer('zipcode')->nullable();

            $table->string('company_name')->nullable();
            $table->string('username')->nullable();
            $table->string('auth_key')->nullable();
            $table->string('utype')->nullable();

            $table->integer('pr_sms_balance')->nullable();
            $table->integer('mail_balance')->nullable();
            $table->integer('tr_sms_balance')->nullable();
            $table->integer('rcs_balance')->nullable();
            $table->integer('pro_user_group_id')->nullable();
            $table->integer('tr_user_group_id')->nullable();
            $table->integer('number_allowed')->nullable();
            $table->integer('p_sender_id_option')->nullable();

            $table->string('p_sender_id_type')->nullable();

            $table->integer('p_sender_id_length')->nullable();
            $table->integer('dnd_check')->nullable();
            $table->integer('t_sender_id_option')->nullable();

            $table->string('sender_id_type')->nullable();

            $table->integer('sender_id_length')->nullable();
            $table->integer('keyword_option')->nullable();

            $table->string('expiry_date')->nullable();
            $table->string('creation_date')->nullable();
            $table->string('last_login_date')->nullable();
            $table->string('default_route')->nullable();
            $table->string('default_sender_id')->nullable();
            $table->string('industry')->nullable();
            $table->string('default_timezone')->nullable();

            $table->integer('check_signature')->nullable();

            $table->string('signature')->nullable();

            $table->integer('user_ratio')->nullable();
            $table->integer('user_fake_ratio')->nullable();
            $table->integer('user_fail_ratio')->nullable();
            $table->integer('pr_user_ratio')->nullable();
            $table->integer('pr_user_fake_ratio')->nullable();
            $table->integer('pr_user_fail_ratio')->nullable();
            $table->integer('user_settings')->nullable();
            $table->integer('terms_conditions')->nullable();
            $table->integer('demo_balance')->nullable();
            $table->integer('expiry_days')->nullable();

            $table->string('signup_sender')->nullable();
            $table->string('signup_message')->nullable();
            $table->string('signup_subject')->nullable();
            $table->string('signup_body')->nullable();
            $table->string('demo_sender')->nullable();
            $table->string('demo_message')->nullable();
            $table->string('user_ip_address')->nullable();

            $table->integer('check_demo_user')->nullable();
            $table->integer('check_verification')->nullable();

            $table->string('push_dlr_url')->nullable();
            $table->string('low_balance_alert')->nullable();

            $table->integer('low_balance_pr')->nullable();
            $table->integer('low_balance_tr')->nullable();
            $table->integer('signup_notification')->nullable();
            $table->integer('long_code_balance')->nullable();
            $table->integer('short_code_balance')->nullable();
            $table->integer('pr_voice_balance')->nullable();
            $table->integer('tr_voice_balance')->nullable();
            $table->integer('missed_call_balance')->nullable();

            $table->string('default_voice_route')->nullable();

            $table->integer('vtr_fake_ratio')->nullable();
            $table->integer('vtr_fail_ratio')->nullable();
            $table->integer('vpr_fake_ratio')->nullable();
            $table->integer('vpr_fail_ratio')->nullable();
            $table->integer('check_black_keyword')->nullable();

            $table->string('theme_color')->nullable();

            $table->integer('user_status')->nullable();
            $table->integer('country_status')->nullable();

            $table->string('user_alert')->nullable();
            $table->string('tr_ratio_discription')->nullable();
            $table->string('pr_ratio_discription')->nullable();

            $table->integer('account_manager')->nullable();
            $table->integer('spacial_reseller_status')->nullable();
            $table->integer('special_pr_balance')->nullable();
            $table->integer('special_tr_balance')->nullable();

            $table->string('feedback')->nullable();
            $table->string('lead_by')->nullable();
            $table->string('fix_sender_id')->nullable();

            $table->integer('spacial_fake_pr_ratio')->nullable();
            $table->integer('spacial_deliver_pr_ratio')->nullable();
            $table->integer('spacial_fake_tr_ratio')->nullable();
            $table->integer('spacial_deliver_tr_ratio')->nullable();
            $table->integer('prtodnd_route')->nullable();
            $table->integer('stock_route')->nullable();
            $table->integer('prtodnd_balance')->nullable();
            $table->integer('stock_balance')->nullable();
            $table->integer('prtodnd_credits')->nullable();
            $table->integer('stock_credits')->nullable();
            $table->integer('tr_fake_sent')->nullable();
            $table->integer('pr_fake_sent')->nullable();
            $table->integer('stock_dnd_check')->nullable();
            $table->integer('premium_dnd_check')->nullable();
            $table->integer('manager_alert')->nullable();
            $table->integer('check_tracker')->nullable();

            $table->string('tracker_link')->nullable();
            $table->string('pricing_approval')->nullable();
            $table->string('open_account_setting')->nullable();

            $table->integer('admin_tr_approv')->nullable();

            $table->string('admin_discription_tr')->nullable();

            $table->integer('admin_pr_approv')->nullable();

            $table->string('admin_discription_pr')->nullable();
            $table->string('link_value')->nullable();
            $table->string('gst_no')->nullable();
            $table->string('state')->nullable();

            $table->integer('integerernational_route')->nullable();
            $table->integer('integerernational_pr_route')->nullable();
            $table->integer('integerernational_balance')->nullable();
            $table->integer('integerer_pr_balance')->nullable();
            $table->integer('encription')->nullable();
            $table->integer('otp_user')->nullable();

            $table->string('voice_tr_route')->nullable();
            $table->string('voice_pr_route')->nullable();
            $table->string('low_balance_status')->nullable();

            $table->integer('validate_date')->nullable();

            $table->string('leadFrom')->nullable();

            $table->integer('Approve_senderid')->nullable();

            $table->string('country_code')->nullable();

            $table->integer('wallet_amount')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
