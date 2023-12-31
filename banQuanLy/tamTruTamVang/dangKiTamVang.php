<!DOCTYPE html>
<html lang="en">

<head>
    <title>Đăng kí tạm vắng</title>
    <!-- HTML5 Shim and Respond.js IE11 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 11]>
    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
    <!-- Meta -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui">
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="description"
          content="Free Datta Able Admin Template come up with latest Bootstrap 4 framework with basic components, form elements and lots of pre-made layout options"/>
    <meta name="keywords"
          content="admin templates, bootstrap admin templates, bootstrap 4, dashboard, dashboard templets, sass admin templets, html admin templates, responsive, bootstrap admin templates free download,premium bootstrap admin templates, datta able, datta able bootstrap admin template, free admin theme, free dashboard template"/>
    <meta name="author" content="CodedThemes"/>

    <!-- Favicon icon -->
    <link rel="icon" href="../../template/assets/images/favicon.ico" type="image/x-icon">
    <!-- fontawesome icon -->
    <link rel="stylesheet" href="../../template/assets/fonts/fontawesome/css/fontawesome-all.min.css">
    <!--    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">-->
    <link rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <!-- animation css -->
    <link rel="stylesheet" href="../../template/assets/plugins/animation/css/animate.min.css">
    <!-- vendor css -->
    <link rel="stylesheet" href="../../template/assets/css/style.css">
    <link rel="stylesheet" href="../../assets/css/style.css">


    <style>
        .custom-dropdown .btn {
            background-color: #FFFFFF; /* White background */
            border: 1px solid #D0D5DD; /* Border color */
            border-radius: 0.5rem; /* Rounded corners */
        }

        /* Optional: if you want to style the dropdown menu */
        .custom-dropdown .dropdown-menu {
            border-color: #D0D5DD;
            border-radius: 0.5rem; /* Rounded corners for the dropdown menu */
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

        .chart-container {
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            padding: 20px;
            margin-top: 50px;
            text-align: center;
            max-width: 400px; /* Adjust as needed */
        }

        .chart-header {
            color: #333;
            margin-bottom: 20px;
            font-size: 1rem;
        }

        .chart-legend {
            list-style: none;
            padding: 0;
        }

        .chart-legend li {
            display: inline-block;
            margin-right: 10px;
        }

        .chart-legend span {
            display: inline-block;
            width: 12px;
            height: 12px;
            margin-right: 5px;
            border-radius: 50%;
        }

        .card-body {
            padding: 15px;
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            transition: 0.3s;
            padding: 15px;
            margin-bottom: 20px;
        }

        .progress-bar {
            background-color: #007bff;
        }

        .link-button {
            text-decoration: none;
            color: #007bff;
        }

        .link-button:hover {
            text-decoration: underline;
        }

    </style>
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

<!-- [ Main Content ] start -->
<div class="containeri" style="display:flex; width:100%; ">
    <!-- [ menu ] start -->
    <?php include '../common/sidebar.php'; ?>
    <!-- End menu -->



    <div class="pcoded-wrapper" style="width:1520px;">
        <div class="information"  style="margin-top:100px;margin-left:350px;margin-right:30px;">
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

                                        <h3 style="text-align: center    ;font-weight: bold;">Đăng kí tạm vắng</h3>
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
                                                        <option value="other">Khác</option>
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
                                                    <label for="diaChiTamVang">Địa chỉ nơi đến</label>
                                                    <input type="text" class="form-control" id="diaChiTamVang"
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
                                                            style="    background-color: #9BBEC8; border: none;">Quay
                                                        lại
                                                    </button>
                                                </div>
                                                <div class="col-md-6">
                                                    <button type="submit" class="btn btn-gui float-right">Xác nhận
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

</div>
<!-- [ Main Content ] end -->
<!-- Modal Confirmation -->
<?php
$modalContent = 'Bạn có chắc chắn muốn xác nhận  không ?';
include '../../common/modal/confirmationModal.php';
?>
<!-- Success Modal -->
<?php
$modalContent = 'Đơn tạm trú đã được tạo thành công';
include '../../common/modal/successModal.php';
?>

<!-- Required Js -->

<script src="Js/loadData.js"></script>
<script src="Js/dangKiTamVang.js"></script>
<script src="../../template/assets/js/vendor-all.min.js"></script>
<script src="../../template/assets/plugins/bootstrap/js/bootstrap.min.js"></script>
<!--<script src="../../template/assets/js/pcoded.min.js"></script>-->
<script>
    // JavaScript for character counter
    document.addEventListener('DOMContentLoaded', function () {
        var reasonTextarea = document.getElementById('reason');
        var charNumDisplay = document.getElementById('charNum');

        reasonTextarea.addEventListener('input', function () {
            var currentLength = this.value.length;
            charNumDisplay.textContent = `${currentLength} / 225`;
        });
    });

</script>


</body>

</html>