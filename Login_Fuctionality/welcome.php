<?php
   session_start();

   if(!isset($_SESSION['login_user'])){
      header("location: login.php");
      die();
   }
   $login_session = $_SESSION['login_user'];
?>
<html>
<head>
   <title>Welcome </title>
</head>
<body>
   <h1>Welcome <?php echo $login_session; ?></h1> 
   <h2><a href = "logout.php">Sign Out</a></h2>
</body>
</html>