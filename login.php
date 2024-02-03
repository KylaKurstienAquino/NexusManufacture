<?php
include 'database.php';
header('Content-Type: text/plain');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve user input from the form
    $userEnteredEmail = $_POST["email"];
    $userEnteredPassword = $_POST["password"];

    // Retrieve user information from the database using prepared statement
    $stmt = $conn->prepare("SELECT id, password FROM users WHERE email = ?");
    $stmt->bind_param("s", $userEnteredEmail);

    if ($stmt->execute()) {
        $result = $stmt->get_result();

        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();

            // Verify the password using password_verify
            if ($userEnteredPassword === $row["password"]) {
                // Password is correct, log the login information
                $userId = $row["id"];
                $conn->query("INSERT INTO login_info (user_id) VALUES ('$userId')");

                // Return success response
                echo "Login successful";
            } else {
                // Password is incorrect
                echo "Invalid email or password";
            }
        } else {
            // User with the given email does not exist
            echo "Invalid email or password";
        }
    } else {
        // Handle statement execution error
        echo "Error executing the query";
    }

    // Close the prepared statement
    $stmt->close();
} else {
    // Handle invalid request method
    echo "Invalid request method";
}

// Close the database connection
$conn->close();
?>
