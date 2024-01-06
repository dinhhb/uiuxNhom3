<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_FILES['pdf'])) {
        $pdf = $_FILES['pdf'];

        // Lưu PDF vào thư mục
        $targetDir = "../baoCao";
        $targetFile = $targetDir . basename($pdf['name']);

        if (move_uploaded_file($pdf['tmp_name'], $targetFile)) {
            echo json_encode(['message' => 'Báo cáo đã được lưu thành công']);
        } else {
            echo json_encode(['message' => 'Đã xảy ra lỗi khi lưu báo cáo']);
        }
    }
}
