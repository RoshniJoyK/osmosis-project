<?php
$mysql= new mysqli("localhost","admin","admin","project");
if ($mysql)
{
    echo "Database connected";
}
else 
{
    die(mysqli_error($mysql));
}
 ?>