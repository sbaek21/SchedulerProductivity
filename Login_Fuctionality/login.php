<?php
   require_once ("config.php");
   session_start();
   if (isset($_SESSION["login_user"])) {
      header("Location: welcome.php");
   }
   $error='';
   //checks if the form has been subitted via a POST request
   if($_SERVER["REQUEST_METHOD"] == "POST") {
   
      // username and password sent from form 
      $myusername = mysqli_real_escape_string($db,$_POST['username']);
      $mypassword = mysqli_real_escape_string($db,$_POST['password']); 

      //constructs a SQL query to select a user from the admin table with matching username and passcode
      $sql = "SELECT * FROM users WHERE username = ?";
      $stmt = mysqli_prepare($db, $sql);
      mysqli_stmt_bind_param($stmt, "s", $myusername);
      mysqli_stmt_execute($stmt);
      $result = mysqli_stmt_get_result($stmt);
      
      if($result){
         $user = mysqli_fetch_array($result, MYSQLI_ASSOC);
         if($user){
            if (password_verify($mypassword, $user["password"])) {
               session_start();
               $_SESSION["login_user"] = $myusername;
               header("location: welcome.php");
            } else{
               $error = "Your password is incorrect";
            }
         }else {
            $error = "Your Login Name or Password is invalid";
         }
      } else {
         die("Database query failed: " . mysqli_error($db));
      }
   }
?>


<html>
<head>
   <title>Login Page</title>
   <style type = "text/css">
      body {
         font-family:Arial, Helvetica, sans-serif;
         font-size:14px;
      }
      label {
         font-weight:bold;
         width:100px;
         font-size:14px;
      }
      .box {
         border:#666666 solid 1px;
      }
   </style>
</head>
<body bgcolor = "#FFFFFF">
   <div align = "center">
      <div style = "width:600px; border: solid 2px #333333; " align = "left">
         <div style = "background-color:#333333; color:#FFFFFF; padding:5px;"><b>Login</b></div>
         <div style = "margin:90px">
            <form action = "" method = "post">
               <label>UserName  :</label><input type = "text" name = "username" class = "box"/><br /><br />
               <label>Password  :</label><input type = "password" name = "password" class = "box" /><br/><br />
               <input type = "submit" value = " Submit "/><br />
            </form>
            <div style = "font-size:20px; color:#cc0000; margin-top:10px"><?php echo $error; ?></div>
         </div>
         <div><p>Not registered yet <a href="registration.php">Register Here</a></p></div>
      </div>
   </div>
</body>
</html>