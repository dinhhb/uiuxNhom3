<!DOCTYPE html>
<html lang="en">

<head>
    <title>Khai báo tạm trú
    </title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui">
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <!-- <meta name="description"
          content="Free Datta Able Admin Template come up with latest Bootstrap 4 framework with basic components, form elements and lots of pre-made layout options" />
    <meta name="keywords"
          content="admin templates, bootstrap admin templates, bootstrap 4, dashboard, dashboard templets, sass admin templets, html admin templates, responsive, bootstrap admin templates free download,premium bootstrap admin templates, datta able, datta able bootstrap admin template, free admin theme, free dashboard template" /> -->
    <meta name="author" content="CodedThemes"/>
    <link rel="import" href="header.html">
    <!-- Favicon icon -->
    <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-zkRf1z1uPbXpFZV4KTMEH7PVB7ZlDdjw0EhMf7ueExUqMW+0vWuAHR4/j5qoHw1NvMyO4tDw9HZmpyKiCyr/D3A==" crossorigin="anonymous" /> -->
<!--    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"-->
<!--          integrity="sha512-zkRf1z1uPbXpFZV4KTMEH7PVB7ZlDdjw0EhMf7ueExUqMW+0vWuAHR4/j5qoHw1NvMyO4tDw9HZmpyKiCyr/D3A=="-->
<!--          crossorigin="anonymous"/>-->
    <link rel="icon" href="../../assets/images/favicon.ico" type="image/x-icon">
    <!-- fontawesome icon -->
    <link rel="stylesheet" href="../../assets/fonts/fontawesome/css/fontawesome-all.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <!-- animation css -->
    <link rel="stylesheet" href="../../assets/plugins/animation/css/animate.min.css">
    <!-- vendor css -->
    <link rel="stylesheet" href="../../assets/css/style.css">
    <link rel="stylesheet" href="../../assets/css/new.css">


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
<!-- End menu -->

<!-- Phần của mọi người -->
<div class="pcoded-wrapper" style="width:1520px;">
    <div class="information" style="margin-top:100px;margin-left:350px;margin-right:30px;">
        <div class="pcoded-inner-content">
            <!-- [ breadcrumb ] start -->
            <!-- [ breadcrumb ] end -->
            <div class="main-body">
                <div class="page-wrapper">
                    <!-- [ Main Content ] start -->
                    <div class="row">
                        <!-- [ Hover-table ] start -->
                        <div class="col-xl-12">
                            <div class="card ">
                                <div class="card-block">

                                    <h3 style="text-align: center    ;font-weight: bold;">Khai báo tạm trú </h3>
                                    <form id="registrationForm">
                                        <div class="form-row">
                                            <div class="form-group col-md-6">
                                                <label for="fullName">Họ và tên *</label>
                                                <input type="text" class="form-control" id="fullName"
                                                       placeholder="Nhập họ và tên" required>
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label for="dob">Ngày sinh</label>
                                                <input type="date" class="form-control" id="dob">
                                            </div>
                                        </div>

                                        <div class="form-row">
                                            <div class="form-group col-md-6">
                                                <label for="cccd">CCCD *</label>
                                                <input type="text" class="form-control" id="cccd"
                                                       placeholder="Nhập căn cước công dân" required>
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label for="genderSelect">Giới tính</label>
                                                <select id="genderSelect" class="form-control">
                                                    <option selected>Chọn...</option>
                                                    <option value="male">Nam</option>
                                                    <option value="female">Nữ</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div class="form-row">
                                            <div class="form-group col-md-6">
                                                <label for="diaChiThuongTru">Địa chỉ thường trú</label>
                                                <input type="text" class="form-control" id="diaChiThuongTru"
                                                       placeholder="Nhập địa chỉ thường trú">
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label for="diaChiTamTru">Địa chỉ tạm trú</label>
                                                <input type="text" class="form-control" id="diaChiTamTru"
                                                       placeholder="Nhập địa chỉ nơi đến">
                                            </div>
                                        </div>

                                        <div class="form-row">
                                            <div class="form-group col-md-6">
                                                <label for="soDienThoai">Số điện thoại</label>
                                                <input type="tel" class="form-control" id="soDienThoai"
                                                       placeholder="Nhập số điện thoại">
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label for="ngheNghiep">Nghề nghiệp</label>
                                                <input type="text" class="form-control" id="ngheNghiep"
                                                       placeholder="Nhập nghề nghiệp">
                                            </div>
                                        </div>

                                        <div class="form-row">
                                            <div class="form-group col-md-6">
                                                <label for="ngayBatDau">Ngày bắt đầu</label>
                                                <input type="date" class="form-control" id="ngayBatDau">
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label for="ngayKetThuc">Ngày kết thúc</label>
                                                <input type="date" class="form-control" id="ngayKetThuc">
                                            </div>
                                        </div>

                                        <div class="form-row">
                                            <div class="form-group col-md-6">
                                                <label for="ChungCu">Chung cư</label>
                                                <select id="ChungCu" class="form-control">
                                                    <option selected>Chọn chung cư</option>
                                                    <option value="s1">S1</option>
                                                    <option value="s2">S2</option>
                                                </select>
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label for="reason">Lý do</label>
                                                <textarea class="form-control" id="reason" rows="3" maxlength="225"
                                                          placeholder="Nhập lý do..."></textarea>
                                                <div class="text-right">
                                                    <small id="charNum" class="form-text text-muted">0 / 225</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <div class="col-md-6">
                                                <button type="button" class="btn btn-secondary float-left"
                                                        style="    background-color: #9BBEC8; border: none;" onclick="window.location.href='tamTrutamVang.php'">Quay
                                                    lại
                                                </button>
                                            </div>
                                            <div class="col-md-6">
                                                <button type="submit" class="btn btn-gui float-right">Gửi
                                                </button>
                                                <style>    .btn-gui {
                                                        background-color: #28a745;
                                                        /* Bootstrap green color */
                                                        border-color: #28a745;
                                                        color: #fff;
                                                        /* White text */

                                                    }</style>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>


                        </div>
                    </div>
                    <!-- [ Hover-table ] end -->
                    <!-- [ Main Content ] end -->
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Modal -->
<?php
$modalContent = 'Bạn có chắc chắn muốn gửi không ?';
include '../../common/modal/confirmationModal.php';
?>
<!-- Success Modal -->
<?php
$modalContent = 'Đơn xin cấp tạm vắng đã được gửi thành công';
include '../../common/modal/successModal.php';
?>



<!-- Required Js -->
<script src="../../assets/js/vendor-all.min.js"></script>
<script src="../../assets/plugins/bootstrap/js/bootstrap.min.js"></script>
<script src="js/loadData.js"></script>
<script src="js/dangKiTamTru.js"></script>
</body>

</html>