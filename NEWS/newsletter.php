<html>
<body>
<?php


    $email = $_REQUEST['email'];


    echo "user Email: $email <br>";


    $con=mysqli_connect("localhost","root","");

    mysqli_select_db($con,"newsletter"); 

    $sql = "INSERT INTO subscribe(email) 

    VALUES('$email')";

    

    if($con){

        echo "Conecction Succesful!";

    }    

    mysqli_query($con,$sql);
    $referer = $_SERVER['HTTP_REFERER'];

    header("Location: $referer");

?>    
</body> 
</html>