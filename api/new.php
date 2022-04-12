 <?php
$servername = "35.154.53.81";
$username = "mahesh_user";
$password = "SDFJSL!@#$%21";
$dbname = "mahesh_db";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

$sql = "INSERT INTO `sms_campaign` (`id`, `campaign_id`, `user_group_id`, `campaign_uid`, `campaign_name`, `admin_id`, `user_id`, `message_category`, `total_messages`, `total_credits`, `total_deducted`, `actual_message`, `campaign_status`, `condition_status`, `sender_status`, `keyword_status`, `number_db_status`, `unique_numbers`, `exceed_numbers`, `sender_id`, `submit_date`, `schedule_date`, `request_by`, `message_type`, `flash_message`, `message`, `message_length`, `route`, `pe_id`, `black_listed`, `schedule_process`, `dlr_push_status`, `schedule_status`, `schedule_action`, `whole_process`, `total_time`, `caller_id`, `start_date_time`, `end_date_time`, `service_type`, `is_xml`, `processed_by`, `numbers`, `resend_ugroup_id`, `resend_admin_id`, `is_custom`, `reseller_key_balance_status`, `pricing_error`, `language_status`, `voice_route_id`, `campaign_cost`, `message_encryption`, `play_stop_status`, `template_id`, `credit`) VALUES (NULL, '846414011020944944', NULL, NULL, NULL, NULL, '2', '1', '1', '1', NULL, '0', '1', NULL, NULL, NULL, NULL, NULL, NULL, 'SRTSRT', '2022-01-31 17:57:51.866700', NULL, NULL, '1', '0', 'gfvyyh', '6', 'C', '1234567890123456789', '0|0', '0', '1', '1', '1', NULL, NULL, NULL, NULL, NULL, 'SMS', '0', '1', '1', NULL, NULL, '0', NULL, NULL, NULL, NULL, NULL, '0', '0', '1234567890123456789', '1')";
for ($x = 0; $x <= 1000; $x++)
{
  if (mysqli_query($conn, $sql)) {
    echo "New record created successfully";
  } else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
  }
} 


mysqli_close($conn);

?> 