<?php
function spamcheck($field)
  {
  //filter_var() sanitizes the e-mail
  //address using FILTER_SANITIZE_EMAIL
  $field=filter_var($field, FILTER_SANITIZE_EMAIL);

  //filter_var() validates the e-mail
  //address using FILTER_VALIDATE_EMAIL
  if(filter_var($field, FILTER_VALIDATE_EMAIL))
    {
    return TRUE;
    }
  else
    {
    return FALSE;
    }
  }

if (isset($_POST['email']))
  {//if "email" is filled out, proceed

  //check if the email address is invalid
  $mailcheck = spamcheck($_REQUEST['email']);
  if ($mailcheck==FALSE)
    {
   header( 'Location: http://www.emmafordycemacrae.com/contact_us_fail.html' ) ;
    }
  else
    {//send email
    $email = $_REQUEST['email'] ;
    $message = $_REQUEST['message'] ;
	$name = $_REQUEST['name'] ;
	$from= 'webmaster@emmafordycemacrae.com';
    mail("info@emmafordycemacrae.com, padlew318@gmail.com", "Subject: Enquiry from website", "Name : " . $name . PHP_EOL . "Email Address : " . $email . PHP_EOL . "Message : " . $message);
   header( 'Location: http://www.emmafordycemacrae.com/contact_us_success.html' ) ;
    }
  }
else
  {//if "email" is not filled out, display the form
header( 'Location: http://www.emmafordycemacrae.com/contact_us.html' ) ;
  }
?>
				
				
				
