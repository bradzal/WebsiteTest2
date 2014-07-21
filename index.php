
$name=$_POST['name'];
$email=$_POST['email'];
$phone=$_POST['phone'];
$subject=$_POST['subject'];
$inquiry=$_POST['inquiry'];
 
$to = "bzalischuk@provautomation.com";
$from = "ProV Inquiry";

$body = "From: $name\n E-mail: $email\n Message:\n $inquiry";
 
 <?php
 if ($_POST['send']) {
	if (mail ($to, $subject, $body $from)) {
		echo '<p>Your message has been sent!</p>';
	} else {
		echo '<p>Something went wrong, go back and try again!</p>';
	}
 }
 ?>
 

 
 


