<?
require("class.phpmailer.php");


	//form validation vars
	$formok = true;
	$errors = array();
	
	//sumbission data
	$ipaddress = $_SERVER['REMOTE_ADDR'];
	$date = date('d/m/Y');
	$time = date('H:i:s');
	
	//form data
	$name = $_POST['name'];	
	$email = $_POST['mail'];
	$subject = $_POST['subject'];
	$message = $_POST['message'];


$mail = new PHPMailer();

$mail->IsSMTP();                                 		 // send via SMTP
//$mail->Host     = "smtp.office365.com"; 				 // SMTP server
//$mail->SMTPAuth = true;    								 // turn on SMTP authentication
//$mail->Username = "REPLACE_WITH_YOUR_VALUE"; 		 // SMTP username
//$mail->Password = "REPLACE_WITH_YOUR_VALUE";				// SMTP password

// Test server config.
$mail->Host     = "smtp.googlemail.com"; 		// SMTP server - options: smtp.easily.co.uk; smtp.office365.com; smtp.googlemail.com
$mail->SMTPAuth = true;    				// turn on SMTP authentication
$mail->Username = "REPLACE_WITH_YOUR_VALUE"; 		// SMTP username
$mail->Password = "REPLACE_WITH_YOUR_VALUE";				// SMTP password N.B. xxxxx is a password placeholder

$mail->From     = "user@example.invalid";		 // SMTP username
//$mail->AddAddress("REPLACE_WITH_YOUR_VALUE");		 // Your Address
$mail->AddAddress("user@example.invalid");		 // Your Address N.B. For testing - All d-marketing emails "user@example.invalid" go to Andrew Gerrard
$mail->Subject  =  "New Enquiry from Website Contact Form !";
$mail->IsHTML(true);  
$mail->CharSet = 'UTF-8';
$mail->Body     =  "<p>You have recieved a new message from the enquiries form on your website.</p>
					  <p><strong>Name: </strong> {$name} </p>
					  <p><strong>Email Address: </strong> {$email} </p>
					  <p><strong>Subject: </strong> {$subject} </p>
					  <p><strong>Message: </strong> {$message} </p>
					  <p>This message was sent from the IP Address: {$ipaddress} on {$date} at {$time}</p>";

if(!$mail->Send())
{
   echo "Mail Not Sent <p>";
   echo "Mailer Error: " . $mail->ErrorInfo;
   exit;
}

echo "Mail Sent";


?>
