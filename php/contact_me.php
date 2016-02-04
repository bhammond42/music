<?php
$file = "comments.txt";

if(isset($_POST['dname'])){
	$name = $_POST['dname'];
} else {
	echo('Error with Name!'); return;
}

if(isset($_POST['demail'])){
	$email = $_POST['demail'];
} else {
	echo('Error with Email!'); return;
}

if(isset($_POST['dmessage'])){
	$comment = $_POST['dmessage'];
} else {
	echo('Error with Comment!'); return;
}

$data = "$name - $email - $comment\n";
file_put_contents($file, $data . PHP_EOL, FILE_APPEND);

$headers = 'From: music@bhdeveloper.com';
mail('foodman911@hotmail.com', 'Music Page Contact Form', $data, $headers);

//maybe do a str_replace(array(','), '', $comment);

echo "<br><!DOCTYPE html>
<html>
<head>
<link href=\"../css/style.css\" rel=\"stylesheet\" type=\"text/css\">
<link href=\"../css/bootstrap.min.css\" rel=\"stylesheet\">
</head>
<body>
<br>Thank you for your submittal. I will review your e-mail and contact you within 24-48 hours.<br>
<a class=\"btn btn-theme-color\" onclick=\"goBack()\">Go Back</a>

<script>
function goBack() {
    window.history.back()
}
</script>

</body>
</html>"
//"javascript:history.go(-1)";
//print "<p>Name: $name <br> Email: $email <br> Comment: $comment </p>";
?>