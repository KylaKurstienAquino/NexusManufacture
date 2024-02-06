<?php

$user = 'root';
$password = '';
$database = 'nexusitems';
$servername='localhost:3306';
$conn = mysqli_connect($servername, $user, $password, $database);

if(!$conn)
{
die("Connection Failed: " .mysqli_error()); //check connection
}

$query1 = "SELECT * FROM battery_tbl";
$result1 = mysqli_query($conn, $query1);

$query2 = "SELECT * FROM calibrator_tbl";
$result2 = mysqli_query($conn, $query2);

$query3 = "SELECT * FROM cleaningtool_tbl";
$result3 = mysqli_query($conn, $query3);

$query4 = "SELECT * FROM clutch_tbl";
$result4 = mysqli_query($conn, $query4);

$query5 = "SELECT * FROM doors_tbl";
$result5 = mysqli_query($conn, $query5);

$query6 = "SELECT * FROM duskblanket_tbl";
$result6 = mysqli_query($conn, $query6);

$query7 = "SELECT * FROM engines_tbl";
$result7 = mysqli_query($conn, $query7);

$query8 = "SELECT * FROM freezer_tbl";
$result8 = mysqli_query($conn, $query8);

$query9 = "SELECT * FROM headlight_tbl";
$result9 = mysqli_query($conn, $query9);

$query10 = "SELECT * FROM mirror_tbl";
$result10 = mysqli_query($conn, $query10);

$query11 = "SELECT * FROM piston_tbl";
$result11 = mysqli_query($conn, $query11);

$query12 = "SELECT * FROM radiator_tbl";
$result12 = mysqli_query($conn, $query12);

$result = $mysqli->query($sql);
$mysqli->close();

?>

