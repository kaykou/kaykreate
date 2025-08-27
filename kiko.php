<?php
$nom=$_POST['nom'];
$mail=$_POST['mail'];
$subject=$_POST['sub'];
$message=$_POST['mess'];

// Connect to kaykouta database
$conn = new mysqli("localhost", "root", "", "kaykouta");

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Insert into tabkiko table (nom, mail, suj, mes columns)
$req="INSERT INTO `tabkiko` (nom, mail, suj, mes) VALUES ('$nom','$mail','$subject','$message')";

if (mysqli_query($conn, $req)) {
    echo "<script>alert('Message sent successfully!'); window.location.href='index.html';</script>";
} else {
    echo "<script>alert('Error: " . mysqli_error($conn) . "'); window.location.href='index.html';</script>";
}

$conn->close();
?>