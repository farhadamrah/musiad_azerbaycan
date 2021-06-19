<?php include 'config.php'; ?>
<?php 

if(isset($_REQUEST['type'])){
    $type=$_REQUEST['type'];

    if($type==1){
        $fullname = htmlspecialchars(trim($_POST['fullname']));
        $birth = htmlspecialchars(trim($_POST['birth']));
        $gender = htmlspecialchars(trim($_POST['gender']));
        $email = htmlspecialchars(trim($_POST['email']));
        $phone = htmlspecialchars(trim($_POST['phone']));
        $companyName = htmlspecialchars(trim($_POST['companyName']));
        $companySector = htmlspecialchars(trim($_POST['companySector']));
        $referance1 = htmlspecialchars(trim($_POST['referance1']));
        $address = htmlspecialchars(trim($_POST['address']));
        $uploads = "assets/img/MUSIAD-Aze/membership-form/";
        $token=rand();
        if (!empty($_FILES["fileToUpload"]["name"])) {
            $name_old = basename($_FILES["fileToUpload"]["name"]);
            $fileType = strtolower(pathinfo($name_old, PATHINFO_EXTENSION));
            $filename = $uploads . $token . "-" . $name_old;
            copy($_FILES["fileToUpload"]["tmp_name"], $filename);
            move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $filename);
            $fileToUpload = $uploads . $token . "-" . $name_old;
        }
        $sql=mysqli_query($db,'INSERT INTO `member_form`(`fullname`, `birth`, `gender`, `email`, `phone`, `companyName`, `companySector`, `referance1`, `address`, `img`) VALUES 
        ("'.$fullname.'","'.$birth.'","'.$gender.'","'.$email.'","'.$phone.'","'.$companyName.'","'.$companySector.'","'.$referance1.'","'.$address.'","'.$fileToUpload.'") ');
        if($sql){
            header('location: /musiad/musiad_aze/index.php');
        }
    }
    else if($type==2){
        $fullname = htmlspecialchars(trim($_POST['fullname']));
        $email = htmlspecialchars(trim($_POST['email']));
        $phone = htmlspecialchars(trim($_POST['phone']));
        $content = htmlspecialchars(trim($_POST['content']));
       
        $sql=mysqli_query($db,'INSERT INTO `offer`(`fullname`,  `email`, `phone`,content) VALUES 
        ("'.$fullname.'","'.$email.'","'.$phone.'","'.$content.'") ');
        if($sql){
            header('location: /musiad/musiad_aze/layihe-teklifi.php');
        }
    }
}



?>