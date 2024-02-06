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

$query1 = "SELECT battery_id, battery_name, battery_price FROM battery_tbl";
$result1 = mysqli_query($conn, $query1);

$query2 = "SELECT calibrator_id, calibrator_name, calibrator_price FROM calibrator_tbl";
$result2 = mysqli_query($conn, $query2);

$query3 = "SELECT cleaningtool_id, cleaningtool_name, cleaningtool_price FROM cleaningtool_tbl";
$result3 = mysqli_query($conn, $query3);

$query4 = "SELECT clutch_id, clutch_name, clutch_price FROM clutch_tbl";
$result4 = mysqli_query($conn, $query4);

$query5 = "SELECT doors_id, doors_name, doors_price FROM doors_tbl";
$result5 = mysqli_query($conn, $query5);

$query6 = "SELECT duskblanket_id, duskblanket_name, duskblanket_price FROM duskblanket_tbl";
$result6 = mysqli_query($conn, $query6);

$query7 = "SELECT engines_id, engines_name, engines_price FROM engines_tbl";
$result7 = mysqli_query($conn, $query7);

$query8 = "SELECT freezer_id, freezer_name, freezer_price FROM freezer_tbl";
$result8 = mysqli_query($conn, $query8);

$query9 = "SELECT headlight_id, headlight_name, headlight_price FROM headlight_tbl";
$result9 = mysqli_query($conn, $query9);

$query10 = "SELECT mirror_id, mirror_name, mirror_price FROM mirror_tbl";
$result10 = mysqli_query($conn, $query10);

$query11 = "SELECT piston_id, piston_name, piston_price FROM piston_tbl";
$result11 = mysqli_query($conn, $query11);

$query12 = "SELECT radiator_id, radiator_name, radiator_price FROM radiator_tbl";
$result12 = mysqli_query($conn, $query12);

/*  
$allresult = $result1, $result2, $result3, $result4, $result5, $result6, $result7, $result8, $result9, $result10, $result11, $result12;
*/

?>

