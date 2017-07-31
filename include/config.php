<?php
$servername = "mysql.hostinger.kr";
$username = "u933624459_peace";
$password = "alsdud1218!";
$dbname = "u933624459_peace";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>



