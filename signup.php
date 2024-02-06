<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
include 'database.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve user input from the form
    $signupUsername = $_POST["signupUsername"];
    $signupEmail = $_POST["signupEmail"];
    $userEnteredPassword = $_POST["signupPassword"];

    // Check if email is already taken
    $checkEmailQuery = $conn->prepare("SELECT * FROM users WHERE email = ?");
    $checkEmailQuery->bind_param("s", $signupEmail);
    $checkEmailQuery->execute();
    $result = $checkEmailQuery->get_result();

    if ($result->num_rows > 0) {
        // Email is already taken
        echo "email_taken";
    } else {
        // Continue with registration
        if ($signupEmail !== '') {
            // If email is not blank, proceed
            $insertUserQuery = $conn->prepare("INSERT INTO users (username, email, password) VALUES (?, ?, ?)");
            $insertUserQuery->bind_param("sss", $signupUsername, $signupEmail, $userEnteredPassword);

            if ($insertUserQuery->execute()) {
                // Registration successful
                echo "success";
            } else {
                // Registration failed
                echo "Error in registration process: " . $conn->error;
            }

            // Close the prepared statement for user registration
            $insertUserQuery->close();
        } else {
            // Email cannot be blank
            echo "email_blank";
        }
    }

    // Close the prepared statement for email check
    $checkEmailQuery->close();
} else {
    // Handle invalid request method
    echo "Invalid request method";
}

// Close the database connection
$conn->close();
?>
