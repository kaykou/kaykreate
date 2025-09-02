<?php
$nom=$_POST['nom'];
$prenom=$_POST['prenom'];
$mail=$_POST['mail'];
$subject=$_POST['sub'];
$message=$_POST['mess'];
$conn = new mysqli("localhost", "root", "", "kaykouta");
$req="INSERT INTO `tabkiko` values ('$nom','$prenom','$mail','$subject','$message')";
mysqli_query($conn,$req);
if (mysqli_query($conn, $req)) {
echo "<br>Données insérées avec succès !";} 
else {
echo "<br>Erreur: " . mysqli_error($conn);}
?>