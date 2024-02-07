<?php
// Database connection parameters
$servername = "localhost";
$username = "your_username";
$password = "your_password";
$database = "your_database";

try {
    // Create a new PDO instance
    $pdo = new PDO("mysql:host=$servername;dbname=$database", $username, $password);
    // Set PDO error mode to exception
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Fetch data from the database
    $stmt = $pdo->query("SELECT * FROM battery_tbl");
    $batteryData = $stmt->fetchAll(PDO::FETCH_ASSOC);

    $stmt = $pdo->query("SELECT * FROM calibrator_tbl");
    $calibratorData = $stmt->fetchAll(PDO::FETCH_ASSOC);

    $stmt = $pdo->query("SELECT * FROM cars_tbl");
    $carsData = $stmt->fetchAll(PDO::FETCH_ASSOC);

    $stmt = $pdo->query("SELECT * FROM cleaningtool_tbl");
    $cleaningtoolData = $stmt->fetchAll(PDO::FETCH_ASSOC);

    $stmt = $pdo->query("SELECT * FROM clutch_tbl");
    $clutchData = $stmt->fetchAll(PDO::FETCH_ASSOC);

    $stmt = $pdo->query("SELECT * FROM doors_tbl");
    $doorsData = $stmt->fetchAll(PDO::FETCH_ASSOC);

    $stmt = $pdo->query("SELECT * FROM duskblanket_tbl");
    $duskblanketData = $stmt->fetchAll(PDO::FETCH_ASSOC);

    $stmt = $pdo->query("SELECT * FROM engines_tbl");
    $enginesData = $stmt->fetchAll(PDO::FETCH_ASSOC);

    $stmt = $pdo->query("SELECT * FROM freezer_tbl");
    $freezerData = $stmt->fetchAll(PDO::FETCH_ASSOC);

    $stmt = $pdo->query("SELECT * FROM headlight_tbl");
    $headlightData = $stmt->fetchAll(PDO::FETCH_ASSOC);

    $stmt = $pdo->query("SELECT * FROM mirror_tbl");
    $mirrorData = $stmt->fetchAll(PDO::FETCH_ASSOC);

    $stmt = $pdo->query("SELECT * FROM piston_tbl");
    $pistonData = $stmt->fetchAll(PDO::FETCH_ASSOC);

    $stmt = $pdo->query("SELECT * FROM price_tbl");
    $priceData = $stmt->fetchAll(PDO::FETCH_ASSOC);

    $stmt = $pdo->query("SELECT * FROM radiator_tbl");
    $radiatorData = $stmt->fetchAll(PDO::FETCH_ASSOC);

    $stmt = $pdo->query("SELECT * FROM scooter_tbl");
    $scooterData = $stmt->fetchAll(PDO::FETCH_ASSOC);

    $stmt = $pdo->query("SELECT * FROM trucks_tbl");
    $trucksData = $stmt->fetchAll(PDO::FETCH_ASSOC);

    

    // Combine data from all tables into one array
    $allData = array(
        'battery' => $batteryData,
        'calibrator' => $calibratorData,
        'cars' => $carsData,
        'cleaningtool' => $cleaningtoolData,
        'clutch' => $clutchData,
        'doors' => $doorsData,
        'duskblanket' => $duskblanketData,
        'engines' => $enginesData,
        'freezer' => $freezerData,
        'headlight' => $headlightData,
        'mirror' => $mirrorData,
        'piston' => $pistonData,
        'price' => $priceData,
        'radiator' => $radiatorData,
        'scooter' => $scooterData,
        'trucks' => $trucksData,
        
    );

    echo json_encode($allData);
} catch(PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}

// Function to add an item to the cart
function addToCart($itemId, $itemName, $itemPrice) {
    // Here you can add logic to insert the item into the cart table in your database
    // You will receive $itemId, $itemName, and $itemPrice from the client-side JavaScript
    // You can perform an SQL INSERT operation to add the item to the cart table
    // For demonstration purposes, let's assume we just return the added item details
    return array(
        'id' => $itemId,
        'name' => $itemName,
        'price' => $itemPrice
    );
}

// Check if addToCart POST request is received
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['addToCart'])) {
    // Get item details from the POST request
    $itemId = $_POST['itemId'];
    $itemName = $_POST['itemName'];
    $itemPrice = $_POST['itemPrice'];

    // Call the addToCart function to add the item to the cart
    $addedItem = addToCart($itemId, $itemName, $itemPrice);

    // Return the added item details as JSON response
    echo json_encode($addedItem);
    exit(); // Terminate the script after sending the response
}

// Fetch data from the database (existing code)
// ...
?>

