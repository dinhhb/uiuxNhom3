<!DOCTYPE html>
<html lang="en">

<head>
    <title>Thống kê cư dân
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
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-zkRf1z1uPbXpFZV4KTMEH7PVB7ZlDdjw0EhMf7ueExUqMW+0vWuAHR4/j5qoHw1NvMyO4tDw9HZmpyKiCyr/D3A==" crossorigin="anonymous" />
    <link rel="icon" href="../../assets/images/favicon.ico" type="image/x-icon">
    <!-- fontawesome icon -->
    <link rel="stylesheet" href="../../assets/fonts/fontawesome/css/fontawesome-all.min.css">
    <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> -->
    <!-- animation css -->
    <link rel="stylesheet" href="../../assets/plugins/animation/css/animate.min.css">
    <!-- vendor css -->
    <link rel="stylesheet" href="../../assets/css/style.css">
    <script src="https://cdn.tiny.cloud/1/no-api-key/tinymce/6/tinymce.min.js" referrerpolicy="origin"></script>

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

<!-- [ menu ] start -->
<?php include '../common/sidebar.php'; ?>

    <div class="pcoded-wrapper" style="width:1520px;">
        <div class="information" style="margin-top:100px;margin-left:350px;margin-right:30px;">
            <div class="pcoded-inner-content">
                <div class="main-body" >
                    <div class="page-wrapper">
                        <div class="row">
                            <div class="col-xl-12">
                                <div class="card" style="border-radius: 15px;">
                                    <div class="card-block">
                                    <div style="text-align: center; font-weight: bold; padding-bottom: 20px;">
                                             <h3>Thống kê cư dân </h3>
                                        </div>
                                        <div class="mt-3 justify-content-between" >
                                            <br class="d-flex justify-content-between" style="display: flex; align-items: center; justify-content: start; gap: 20px;" action="dangKiTamVang.html">
                                                <div class="mb-3" style="display: flex; align-items: center; justify-content: start; gap: 20px;">
    <label for="apartmentChoice" class="form-label">Chọn chung cư</label>
    <div class="form-check">
        <input class="form-check-input" type="radio" name="apartmentOptions" id="apartmentOption1" value="all" checked>
        <label class="form-check-label" for="apartmentOption1">Cả 2 chung cư</label>
    </div>
    <div class="form-check">
        <input class="form-check-input" type="radio" name="apartmentOptions" id="apartmentOption2" value="S1">
        <label class="form-check-label" for="apartmentOption2">S1</label>
    </div>
    <div class="form-check">
        <input class="form-check-input" type="radio" name="apartmentOptions" id="apartmentOption3" value="S2">
        <label class="form-check-label" for="apartmentOption3">S2</label>
    </div>
</div>

<div class="toolbar-container d-flex" style="display: flex; align-items: center; justify-content: start; gap: 20px;">
    <div class="form-check" style="margin-left:20px;">
        <input class="form-check-input" type="radio" name="tamtruOptions" value="" checked>
        <label class="form-check-label-tttv" for="tamvangOption">Tất cả</label>
    </div>    
<div class="form-check" style="margin-left:30px;">
        <input class="form-check-input" type="radio" name="tamtruOptions" value="tamtru">
        <label class="form-check-label-tttv" for="tamtruOption">Tạm trú</label>
    </div>
    <div class="form-check" style="margin-left:20px;">
        <input class="form-check-input" type="radio" name="tamtruOptions" value="tamvang">
        <label class="form-check-label-tttv" for="tamvangOption">Tạm vắng</label>
    </div>

    <div class="search-container" style="display: flex; align-items: center; padding-left: 400px;">
        <div class="input-group custom-search-input">
            <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1"><i class="fa fa-search"></i></span>
            </div>
            <input type="text" id="searchInput" class="form-control" placeholder="Tìm kiếm..." aria-label="Search" aria-describedby="basic-addon1">
        </div>
    </div>
</div>

<div class="table-responsive" style="margin-top:20px;">
    <table class="table table-hover">
        <thead>
        <tr>
            <th>STT</th>
            <th>Số căn hộ</th>
            <th>Chung cư</th>
            <th>Tên cư dân</th>
            <th>Ngày sinh</th>
            <th>CCCD</th>
            <th>Giới tính</th>
            <th>Số điện thoại</th>
            <th>Tình trạng</th>
        </tr>
        </thead>
        <tbody id="table-body" class="table-body">
        <!-- Dữ liệu sẽ được hiển thị ở đây -->
        </tbody>
    </table>
</div>
                                     <nav aria-label="Page navigation example">
                                            <ul class="pagination pagination-custom" id="pagination-wrapper">

                                            </ul>
                                        </nav>
                                    <div class="align-left">
                                        <a href="Xemthongke.php"><button type="button" class="btn custom-btn d-inline-block ml-4 mb-3" style="padding: 10px 30px; background: #9BBEC8; color: white;">Quay lại</button></a>
                                    </div>
                            </div>
                            
                            </div>
                            
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </div>
    </div>

<!-- Required Js -->
<script src="assets/js/vendor-all.min.js"></script>
 <script src="cudan.js"></script>
  <!-- <script src="page.js"></script> -->
  <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
<script src="assets/plugins/bootstrap/js/bootstrap.min.js"></script>
    <!-- Phần này bắt buộc -->
    <style>
    body {
        margin: 0; /* Loại bỏ margin mặc định của body */
    }

    .header {
        background-color: #FFFFFF;
        display: flex;
        position: fixed; /* Đặt vị trí của header là cố định */
        width: 100%; /* Chiều rộng 100% của header */
        height: 80px;
        z-index: 1000; /* Đảm bảo header nằm trên cùng */
    }

    .header img {
        margin-left: 20px;
        margin-top:10px;
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
    .menu-options{
        /* Dashboard */
        height: 18px;
        padding-left: 0px;
        padding-top:50px;

        
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 21px;
        letter-spacing: 0.1px;

        color: #000000;



    }
    .menu-options-logout{
        height: 18px;
        padding-left: 0px;
        padding-top:50px;

        
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 21px;
        letter-spacing: 0.1px;
        color: red;
    }
    .menu-item{
        padding-top:12px;

    }
</style>
<style>
        .custom-dropdown .btn {
            background-color: #FFFFFF; /* White background */
            border: 1px solid #D0D5DD; /* Border color */
            border-radius: 0.5rem;
            
            font-style: normal;
            width:150px;
            color:#667085 /* Rounded corners */
        }

        /* Optional: if you want to style the dropdown menu */
        .custom-dropdown .dropdown-menu {
            border-color: #D0D5DD;
            border-radius: 0.5rem;
            
            font-style: normal;/* Rounded corners for the dropdown menu */
        }

        .custom-search-input {
            border: 1px solid #D0D5DD; /* Border color */
            border-radius: 0.5rem; /* Rounded corners for the dropdown menu */
            background-color: #FFFFFF;
        }
        .custom-search-input .form-control {
            border: none;
            box-shadow: none; /* Remove default box-shadow */
            background-color: #FFFFFF;
        }
        .custom-search-input .input-group-text {
            background: transparent;
            border: none;
        }
        .custom-btn {
            background-color: #DDF2FD; /* Light blue background */
            color: #427D9D; /* Dark blue text color */
            border: none; /* Optional: removes the default border */
            padding: 5px 10px; /* Optional: for padding inside the button */
            border-radius: 0.8rem; /* Optional: if you want rounded corners */
            cursor: pointer; /* Changes the cursor to a pointer on hover */
        }
        .custom-btn:focus {
            outline: none;
        }

        .pagination-custom {
            justify-content: center; /* Center the pagination */
        }

        .pagination-custom .page-item.active .page-link {
            background-color: #DDF2FD; /* Light blue background for active page */
            border-color: #DDF2FD;
            color: #427D9D; /* Dark blue text color for active page */
        }

        .pagination-custom .page-link {
            color: #427D9D; /* Dark blue text color for pages */
        }

        .pagination-custom .page-item:not(.active) .page-link:hover {
            background-color: #DDF2FD; /* Light blue background for hover */
        }

        .pagination-custom .page-item:first-child .page-link {
            border-top-left-radius: .25rem;
            border-bottom-left-radius: .25rem;
        }

        .pagination-custom .page-item:last-child .page-link {
            border-top-right-radius: .25rem;
            border-bottom-right-radius: .25rem;
        }
        .form-check-label-tttv{
            
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
        margin-left:15px;
        margin-right:15px; 
        border-radius: 5px;
    }

    .menu-item.active a {
        color: #164863; /* Màu xanh cho icon và chữ khi active */
    }
</style>
</body>

</html>