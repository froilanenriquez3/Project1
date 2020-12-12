<?php
    require_once '../php_libraries/bd.php';
    

    $delete_promo = isset($_POST['deletepromo']);
    $add_promo = isset($_POST['addpromo']);
    $mod_promo = isset($_POST['modifypromo']);

    if($delete_promo){
        deletePromo($_POST['promoid']);
        header("Location: ../php_views/administration.php#promossection");
    
    }
    
    if($mod_promo){
        $target_dir = "../media/img/";
        $target_file = $target_dir . basename($_FILES["modImage"]["name"]);
        $uploadOk = 1;
        $imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));

        // Check if image file is a actual image or fake image
        if (isset($_POST["addpromo"])) {
            $check = getimagesize($_FILES["modImage"]["tmp_name"]);
            if ($check !== false) {
                echo "File is an image - " . $check["mime"] . ".";
                $uploadOk = 1;
            } else {
                echo "File is not an image.";
                $uploadOk = 0;
            }
        }

        // Check if $uploadOk is set to 0 by an error
        if ($uploadOk == 0) {
            echo "Sorry, your file was not uploaded.";
        // if everything is ok, try to upload file
        } else {
            if (move_uploaded_file($_FILES["modImage"]["tmp_name"], $target_file)) {
            /* echo "The file ". htmlspecialchars( basename( $_FILES["image"]["name"])). " has been uploaded."; */
            } else {
            echo "Sorry, there was an error uploading your photo.";
            }
        }


        modifyPromo($_POST['promoname'], $_POST['promodesc'], $_POST['promocost'],$_POST['storeid'],$_POST['promoid'],$_FILES["modImage"]["name"]);
        header("Location: ../php_views/administration.php#promossection");
        
    }

    if($add_promo){
        $target_dir = "../media/img/";
        $target_file = $target_dir . basename($_FILES["image"]["name"]);
        $uploadOk = 1;
        $imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));

        // Check if image file is a actual image or fake image
        if (isset($_POST["addpromo"])) {
            $check = getimagesize($_FILES["image"]["tmp_name"]);
            if ($check !== false) {
                echo "File is an image - " . $check["mime"] . ".";
                $uploadOk = 1;
            } else {
                echo "File is not an image.";
                $uploadOk = 0;
            }
        }

        // Check if $uploadOk is set to 0 by an error
        if ($uploadOk == 0) {
            echo "Sorry, your file was not uploaded.";
        // if everything is ok, try to upload file
        } else {
            if (move_uploaded_file($_FILES["image"]["tmp_name"], $target_file)) {
            /* echo "The file ". htmlspecialchars( basename( $_FILES["image"]["name"])). " has been uploaded."; */
            } else {
            echo "Sorry, there was an error uploading your photo.";
            }
        }
    
        


        insertPromo($_POST['promoname'], $_POST['promodesc'], $_POST['promocost'], $_POST['storeid'], $_FILES["image"]['name']);
        header("Location: ../php_views/administration.php#promossection");
      
        
    }

    $_SESSION['url'] = '../php_controllers/promo_controller.php';
    exit();

    
?>