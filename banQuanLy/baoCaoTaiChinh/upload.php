<?php
if (isset($_FILES['uploadedFile']) && $_FILES['uploadedFile']['error'] === UPLOAD_ERR_OK) {
    // Lấy thông tin file
    $fileTmpPath = $_FILES['uploadedFile']['tmp_name'];
    $fileName = $_FILES['uploadedFile']['name'];
    $fileNameCmps = explode(".", $fileName);
    $fileExtension = strtolower(end($fileNameCmps));

    // Xác định thư mục lưu file
    $uploadFileDir = './baoCao/';
    $dest_path = $uploadFileDir . $fileName;

    // Di chuyển file tạm vào thư mục lưu trữ
    if (move_uploaded_file($fileTmpPath, $dest_path)) {
        echo 'File is successfully uploaded.';
    } else {
        echo 'There was some error moving the file to upload directory.';
    }
}
