<?php 
$host="localhost"; // Host name 
$username="web81-web-ps1"; // Mysql username 
$password="Tankman33"; // Mysql password 
$db_name="web81-web-ps1"; // Database name 

// Connect to server and select databse.
mysql_connect("$host", "$username", "$password")or die("cannot connect"); 
mysql_select_db("$db_name")or die("cannot select DB"); 
?>