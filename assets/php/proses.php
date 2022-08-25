<?php
$koneksi = mysqli_connect("localhost", "root", "", "registrasi");

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$submit = $_POST['submit'];

$query = "INSERT INTO registrasi VALUES('$name','$email','$phone','$submit')";

mysqli_query($koneksi, $query);

if (isset($_POST["submit"])){
    header('Location: read.php');
    exit;
  }

?>