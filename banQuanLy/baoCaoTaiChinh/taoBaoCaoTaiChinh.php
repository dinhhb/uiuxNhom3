<!DOCTYPE html>
<html lang="en">

<head>
    <title>BQL-Tạo báo cáo
    </title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui">
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="description" content="Free Datta Able Admin Template come up with latest Bootstrap 4 framework with basic components, form elements and lots of pre-made layout options" />
    <meta name="keywords" content="admin templates, bootstrap admin templates, bootstrap 4, dashboard, dashboard templets, sass admin templets, html admin templates, responsive, bootstrap admin templates free download,premium bootstrap admin templates, datta able, datta able bootstrap admin template, free admin theme, free dashboard template" />
    <meta name="author" content="CodedThemes" />
    <link rel="import" href="header.html">
    <!-- Favicon icon -->
    <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-zkRf1z1uPbXpFZV4KTMEH7PVB7ZlDdjw0EhMf7ueExUqMW+0vWuAHR4/j5qoHw1NvMyO4tDw9HZmpyKiCyr/D3A==" crossorigin="anonymous" /> -->
    <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-zkRf1z1uPbXpFZV4KTMEH7PVB7ZlDdjw0EhMf7ueExUqMW+0vWuAHR4/j5qoHw1NvMyO4tDw9HZmpyKiCyr/D3A==" crossorigin="anonymous" /> -->
    <link rel="icon" href="../../assets/images/favicon.ico" type="image/x-icon">
    <!-- fontawesome icon -->
    <link rel="stylesheet" href="../../assets/fonts/fontawesome/css/fontawesome-all.min.css">
    <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> -->
    <!-- animation css -->
    <link rel="stylesheet" href="../../assets/plugins/animation/css/animate.min.css">
    <!-- vendor css -->
    <link rel="stylesheet" href="../../assets/css/style.css">
    <script src="https://cdn.tiny.cloud/1/no-api-key/tinymce/6/tinymce.min.js" referrerpolicy="origin"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.4.0/jspdf.umd.min.js"></script>

</head>

<body>
    <!-- [ Pre-loader ] start -->
    <div class="loader-bg">
        <div class="loader-track">
            <div class="loader-fill"></div>
        </div>
    </div>
    <!-- [ Pre-loader ] End -->

    <!-- Header -->
    <?php include '../common/header.php'; ?>
    <!-- End-header -->
    <?php include '../common/sidebar.php'; ?>
    <!-- [ menu ] start -->

    <!-- End menu -->
    <!-- Phần của mọi người -->
    <div class="pcoded-wrapper" style="width:1520px;">
        <div class="information" style="margin-top:100px;margin-left:350px;margin-right:30px;">
            <div class="pcoded-inner-content">
                <div class="main-body">
                    <div class="page-wrapper">
                        <div class="row">
                            <div class="col-xl-12">
                                <div class="card" style="border-radius: 15px;">
                                    <div class="card-block">
                                        <div style="text-align: center; font-weight: bold; padding-bottom: 20px;">
                                            <p style="font-style: normal;font-weight: 600;font-size: 36px;line-height: 21px;letter-spacing: 0.1px;color: #000000;">
                                                Tạo báo cáo tài chính</p>
                                        </div>
                                        <div class="toolbar-container d-flex justify-content-between" style="display: flex; align-items: center; justify-content: start; gap: 20px;">
                                            <div class="btn-group dropdown custom-dropdown">
                                                <button class="btn btn-third dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" id="loaiBaoCaoButton" aria-expanded="false">Bảng cân đối kế toán
                                                </button>
                                                <div class="dropdown-menu dropdown-style" aria-labelledby="loaiBaoCaoDropdownButton" id="loaiBaoCaoDropdown">
                                                </div>
                                            </div>
                                            <button type="button" class="btn btn-primary1 btn-group">Xem báo cáo đã gửi
                                            </button>
                                            <button id="baoCaoSubmit" type="submit" class="btn btn-primary btn-group">Gửi báo cáo
                                            </button>
                                        </div>

                                    </div>
                                    <form id="baoCao" method="post" style="min-height: 60vh;">
                                        <textarea id="mytextarea" style="height: 60vh;">Hello, World!</textarea>
                                    </form>
                                    <script>
                                        tinymce.init({
                                            selector: '#mytextarea',
                                            setup: function(editor) {
                                                editor.on('init', function() {
                                                    editor.setContent('<?php echo include("bangCanDoiKeToan.php"); ?>');
                                                });
                                            }
                                        });
                                    </script>
                                    <div class="align-left" style="padding-top: 10px;">
                                        <a href="Xemthongke.html"><button type="button" class="btn custom-btn d-inline-block ml-4 mb-3" style="padding: 10px 30px; background: #6c757d; color: white;">Quay
                                                lại</button></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <nav aria-label="Page navigation example">
                            <ul class="pagination pagination-custom" id="pagination-wrapper">

                            </ul>
                        </nav>
                        <!-- <div class="align-left">
                                <a href="Xemthongke.html"><button type="button"
                                        class="btn custom-btn d-inline-block ml-4 mb-3"
                                        style="padding: 10px 30px; background: #9BBEC8; color: white;">Quay
                                        lại</button></a>
                            </div> -->
                    </div>

                </div>

            </div>

        </div>

    </div>
    </div>
    </div>
    </div>

    <!-- Required Js -->
    <script src="../../assets/js/vendor-all.min.js"></script>
    <script src="../../assets/plugins/bootstrap/js/bootstrap.min.js"></script>
    <!-- Phần này bắt buộc -->
    <style>
        body {
            margin: 0;
            /* Loại bỏ margin mặc định của body */
        }

        .header {
            background-color: #FFFFFF;
            display: flex;
            position: fixed;
            /* Đặt vị trí của header là cố định */
            width: 100%;
            /* Chiều rộng 100% của header */
            height: 80px;
            z-index: 1000;
            /* Đảm bảo header nằm trên cùng */
        }

        .header img {
            margin-left: 20px;
            margin-top: 10px;
            width: 50px;
            height: 56px;
        }

        .avatar {
            position: absolute;
            top: 5px;
            right: 200px;
            border-radius: 50%;
            overflow: hidden;
        }

        .user-info {
            position: absolute;
            top: 20px;
            right: 90px;
        }

        .user-info p {
            
            font-style: normal;
            font-weight: 600;
            font-size: 20px;
            color: #000000;
            margin: 0;
        }

        .user-info p.subtitle {
            
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            letter-spacing: 0.15px;
            color: rgba(142, 142, 142, 0.87);
            margin: 0;
        }

        /* Kích thước và độ cao của phần content để tránh che khuất nội dung khi header fixed */
        .content {
            margin-top: 74px;
        }

        .menu-options {
            /* Dashboard */
            height: 18px;
            padding-left: 0px;
            padding-top: 50px;

            
            font-style: normal;
            font-weight: 600;
            font-size: 14px;
            line-height: 21px;
            letter-spacing: 0.1px;

            color: #000000;



        }

        .menu-options-logout {
            height: 18px;
            padding-left: 0px;
            padding-top: 50px;

            
            font-style: normal;
            font-weight: 600;
            font-size: 14px;
            line-height: 21px;
            letter-spacing: 0.1px;
            color: red;
        }

        .menu-item {
            padding-top: 12px;

        }
    </style>
    <style>
        .custom-dropdown .btn {
            background-color: #FFFFFF;
            /* White background */
            border: 1px solid #D0D5DD;
            /* Border color */
            border-radius: 0.5rem;
            
            font-style: normal;
            /* width: 150px; */
            color: #667085
                /* Rounded corners */
        }

        /* Optional: if you want to style the dropdown menu */
        .custom-dropdown .dropdown-menu {
            border-color: #D0D5DD;
            border-radius: 0.5rem;
            
            font-style: normal;
            /* Rounded corners for the dropdown menu */
        }

        .custom-search-input {
            border: 1px solid #D0D5DD;
            /* Border color */
            border-radius: 0.5rem;
            /* Rounded corners for the dropdown menu */
            background-color: #FFFFFF;
        }

        .custom-search-input .form-control {
            border: none;
            box-shadow: none;
            /* Remove default box-shadow */
            background-color: #FFFFFF;
        }

        .btn-third {
            display: flex;
            justify-content: center;
            align-items: center;
        }


        .custom-search-input .input-group-text {
            background: transparent;
            border: none;
        }

        .custom-btn {
            background-color: #DDF2FD;
            /* Light blue background */
            color: #427D9D;
            /* Dark blue text color */
            border: none;
            /* Optional: removes the default border */
            padding: 5px 10px;
            /* Optional: for padding inside the button */
            border-radius: 0.8rem;
            /* Optional: if you want rounded corners */
            cursor: pointer;
            /* Changes the cursor to a pointer on hover */
        }

        .custom-btn:focus {
            outline: none;
        }

        .pagination-custom {
            justify-content: center;
            /* Center the pagination */
        }

        .pagination-custom .page-item.active .page-link {
            background-color: #DDF2FD;
            /* Light blue background for active page */
            border-color: #DDF2FD;
            color: #427D9D;
            /* Dark blue text color for active page */
        }

        .pagination-custom .page-link {
            color: #427D9D;
            /* Dark blue text color for pages */
        }

        .pagination-custom .page-item:not(.active) .page-link:hover {
            background-color: #DDF2FD;
            /* Light blue background for hover */
        }

        .pagination-custom .page-item:first-child .page-link {
            border-top-left-radius: .25rem;
            border-bottom-left-radius: .25rem;
        }


        .pagination-custom .page-item:last-child .page-link {
            border-top-right-radius: .25rem;
            border-bottom-right-radius: .25rem;
        }

        .form-check-label-tttv {
            
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 21px;
            /* identical to box height, or 150% */
            letter-spacing: 0.1px;
            color: #000000;

        }
    </style>
    <!-- tạo active cho menu -->
    <style>
        .menu-item.active {
            background-color: #E8EDF0;
            margin-left: 15px;
            margin-right: 15px;
            border-radius: 5px;
        }

        .menu-item.active a {
            color: #164863;
            /* Màu xanh cho icon và chữ khi active */
        }
    </style>

    <script>
        document.getElementById('baoCaoSubmit').addEventListener('click', function(event) {
            // Ngăn form thực hiện hành động mặc định
            event.preventDefault();
            $('#confirmationModal').modal('show');
        });

        document.addEventListener('DOMContentLoaded', function() {
            var loaiBaoCaoButton = document.getElementById('loaiBaoCaoButton');

            // Tạo dropdown chọn tháng
            var loaiBaoCaos = ["Báo cáo kết quả hoạt động kinh doanh", "Báo cáo lưu chuyển tiền tệ", "Thuyết minh báo cáo tài chính"];
            var loaiBaoCaoOptions = '';
            // var loaiBaoCaoOptions = '<a class="dropdown-item" href="#" data-value="">Tất cả tháng </a>';
            loaiBaoCaos.forEach(function(loaiBaoCao, index) {
                loaiBaoCaoOptions += '<a class="dropdown-item" href="#" data-value="' + (index + 1) + '">' + loaiBaoCao + '</a>';
            });
            var loaiBaoCaoDropdown = document.getElementById('loaiBaoCaoDropdown');
            loaiBaoCaoDropdown.innerHTML = loaiBaoCaoOptions;
        });

        function submitForm() {
            console.log("abc");            // Lấy nội dung báo cáo
            var reportContent = tinymce.get('mytextarea').getContent();

            // Chuyển đổi nội dung sang PDF (giả sử sử dụng jsPDF)
            var doc = new jsPDF();
            doc.text(reportContent, 10, 10);
            var pdf = doc.output('blob');

            // Gửi PDF tới server sử dụng AJAX
            var formData = new FormData();
            formData.append('pdf', pdf, 'report.pdf');

            fetch('savePDF.php', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    console.log(data.message);
                })
                .catch(error => {
                    console.error(error);
                });
        }
    </script>

    <style>
        body {
            margin: 0;
            /* Loại bỏ margin mặc định của body */
        }

        .btn-primary {
            color: #fff;
            background-color: #427D9D;
            border-color: #164863;
        }

        .btn-primary1 {
            color: #fff;
            background-color: #9BBEC8;
            border-color: #9BBEC8;
        }

        .header {
            background-color: #FFFFFF;
            display: flex;
            position: fixed;
            /* Đặt vị trí của header là cố định */
            width: 100%;
            /* Chiều rộng 100% của header */
            height: 80px;
            z-index: 1000;
            /* Đảm bảo header nằm trên cùng */
        }

        .header img {
            margin-left: 20px;
            margin-top: 10px;
            width: 50px;
            height: 56px;
        }

        .avatar {
            position: absolute;
            top: 5px;
            right: 200px;
            border-radius: 50%;
            overflow: hidden;
        }

        .user-info {
            position: absolute;
            top: 20px;
            right: 90px;
        }

        .user-info p {
            
            font-style: normal;
            font-weight: 600;
            font-size: 20px;
            color: #000000;
            margin: 0;
        }

        .user-info p.subtitle {
            
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            letter-spacing: 0.15px;
            color: rgba(142, 142, 142, 0.87);
            margin: 0;
        }

        /* Kích thước và độ cao của phần content để tránh che khuất nội dung khi header fixed */
        .content {
            margin-top: 74px;
        }

        .menu-options {
            /* Dashboard */
            height: 18px;
            padding-left: 0px;
            padding-top: 50px;

            
            font-style: normal;
            font-weight: 600;
            font-size: 14px;
            line-height: 21px;
            letter-spacing: 0.1px;

            color: #000000;


        }

        .menu-options-logout {
            height: 18px;
            padding-left: 0px;
            padding-top: 50px;

            
            font-style: normal;
            font-weight: 600;
            font-size: 14px;
            line-height: 21px;
            letter-spacing: 0.1px;
            color: red;
        }

        .menu-item {
            padding-top: 12px;

        }

        .custom-dropdown .btn {
            background-color: #FFFFFF;
            /* White background */
            border: 1px solid #D0D5DD;
            /* Border color */
            border-radius: 0.5rem;
            /* Rounded corners */
        }

        /* Optional: if you want to style the dropdown menu */
        .custom-dropdown .dropdown-menu {
            border-color: #D0D5DD;
            border-radius: 0.5rem;
            /* Rounded corners for the dropdown menu */
        }

        .custom-search-input {
            border: 1px solid #D0D5DD;
            /* Border color */
            border-radius: 0.5rem;
            /* Rounded corners for the dropdown menu */
            background-color: #FFFFFF;
        }

        .custom-search-input .form-control {
            border: none;
            box-shadow: none;
            /* Remove default box-shadow */
            background-color: #FFFFFF;
        }

        .custom-search-input .input-group-text {
            background: transparent;
            border: none;
        }

        .custom-btn {
            background-color: #DDF2FD;
            /* Light blue background */
            color: #427D9D;
            /* Dark blue text color */
            border: none;
            /* Optional: removes the default border */
            padding: 5px 10px;
            /* Optional: for padding inside the button */
            border-radius: 0.8rem;
            /* Optional: if you want rounded corners */
            cursor: pointer;
            /* Changes the cursor to a pointer on hover */
        }

        .custom-btn:focus {
            outline: none;
        }

        .pagination-custom {
            justify-content: center;
            /* Center the pagination */
        }

        .pagination-custom .page-item.active .page-link {
            background-color: #DDF2FD;
            /* Light blue background for active page */
            border-color: #DDF2FD;
            color: #427D9D;
            /* Dark blue text color for active page */
        }

        .pagination-custom .page-link {
            color: #427D9D;
            /* Dark blue text color for pages */
        }

        .pagination-custom .page-item:not(.active) .page-link:hover {
            background-color: #DDF2FD;
            /* Light blue background for hover */
        }

        .pagination-custom .page-item:first-child .page-link {
            border-top-left-radius: .25rem;
            border-bottom-left-radius: .25rem;
        }

        .pagination-custom .page-item:last-child .page-link {
            border-top-right-radius: .25rem;
            border-bottom-right-radius: .25rem;
        }

        /* Tạo kiểu cho dropdown menu */
        .dropdown-style {
            max-height: 150px;
            /* Chiều cao tối đa cho phép scroll */
            overflow-y: auto;
            /* Cho phép scroll nếu nội dung vượt quá chiều cao tối đa */
        }
    </style>

    <!-- Success Modal -->
    <?php
    $modalContent = 'Báo cáo đã được gửi thành công';
    include '../../common/modal/successModal.php';
    ?>


    <!-- Modal -->
    <?php
    $modalContent = 'Bạn có chắc chắn muốn gửi báo cáo này không?';
    include '../../common/modal/confirmationModal.php';
    ?>

</body>



</html>