<?php
   define('DB_SERVER', 'localhost');
   define('DB_USERNAME', 'root');
   define('DB_PASSWORD', '');
   define('DB_DATABASE', 'mydb');
   $db = mysqli_connect(DB_SERVER,DB_USERNAME,DB_PASSWORD,DB_DATABASE);
/*
DB_SERVER = address of the MySQL server
DB_USERNAME = username used to connect to the database
DB_PASSWORD = password for the database user
DB_DATABASE = the name of the database to connect to
*/

?>
