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

$sql = "SELECT car_dimensionWeight1, car_dimensionWeight2, car_engine1, car_engine2	, car_engine3, car_engine4, car_engine5, car_engine6,
car_transmission1, car_exterior1, car_exterior2, car_chassis1, car_chassis2, car_chassis3, car_interior1, car_interior2,
car_interior3, car_interior4, car_performance1, car_performance2, car_safetyfeatures1, car_others1, car_others2 FROM car_tbl";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Initialize an empty array to store the data
    $data = array();
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }$jsonData = json_encode($data);
} else {  echo "No data found";
}

?>