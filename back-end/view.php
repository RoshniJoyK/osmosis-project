<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>view</title>
    <style>
  table{border-style:solid;
border-width:2px;
border-color:black;
color:black;text-align:center;margin-top:50px;
font-size:20px;}

  </style>

</head>
<body >


    
<table border='1' >
    <tr>
        <th> ID</th>
        <th> Asset Title</th>
        <th> File Type </th>
        <th> Date</th>
</tr>


<?php
include "config.php";

$result=$mysql->query("SELECT * FROM assets");

while($rows=$result->fetch_assoc())
{   
    ?>
    <tr>
        <td><?php echo $rows['id'];?></td>
        <td><?php echo $rows['asset_title'];?></td>
        <td><?php echo $rows['file_type'];?></td>
        <td><?php echo $rows['date'];?></td>
    </tr>
<?php
}
?>
</table>

</body>
</html> 