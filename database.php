<?php
$host = 'localhost';
$username = 'root';
$password = '';
$database = 'user_authentication';

// Create a new MySQLi object
$conn = new mysqli($host, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Further execution can continue here if the connection is successful
?>
