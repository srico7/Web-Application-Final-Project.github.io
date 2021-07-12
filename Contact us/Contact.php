<html>
<body>
<?php

    $name = $_REQUEST['username'];

    $visitor_email = $_REQUEST['email'];

    $message = $_REQUEST['message'];

    echo "User Name: $name <br>";

    echo "user Email: $visitor_email <br>";

    echo "User Message: $message <br>";

    $con=mysqli_connect("localhost","root","");

    mysqli_select_db($con,"contact_db"); 

    $sql = "INSERT INTO info_contact(name,email,message) 

    VALUES('$name','$visitor_email','$message')";

    

    if($con){

        echo "Conecction Succesful!";

    }    

    mysqli_query($con,$sql);

    $referer = $_SERVER['HTTP_REFERER'];

    header("Location: $referer");

?>    
</body> 
</html>