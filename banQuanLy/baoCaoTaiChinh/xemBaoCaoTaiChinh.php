<!DOCTYPE html>
<html lang="en">

<head>
    <title>BQL-Xem báo cáo tài chính</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui">
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="description" content="Free Datta Able Admin Template come up with latest Bootstrap 4 framework with basic components, form elements and lots of pre-made layout options" />
    <meta name="keywords" content="admin templates, bootstrap admin templates, bootstrap 4, dashboard, dashboard templets, sass admin templets, html admin templates, responsive, bootstrap admin templates free download,premium bootstrap admin templates, datta able, datta able bootstrap admin template, free admin theme, free dashboard template" />
    <meta name="author" content="CodedThemes" />
    <link rel="import" href="header.html">
    <!-- Favicon icon -->
    <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-zkRf1z1uPbXpFZV4KTMEH7PVB7ZlDdjw0EhMf7ueExUqMW+0vWuAHR4/j5qoHw1NvMyO4tDw9HZmpyKiCyr/D3A==" crossorigin="anonymous" /> -->
    <!--    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-zkRf1z1uPbXpFZV4KTMEH7PVB7ZlDdjw0EhMf7ueExUqMW+0vWuAHR4/j5qoHw1NvMyO4tDw9HZmpyKiCyr/D3A==" crossorigin="anonymous" />-->
    <link rel="icon" href="../../assets/images/favicon.ico" type="image/x-icon">
    <!-- fontawesome icon -->

    <link rel="stylesheet" href="../../assets/fonts/fontawesome/css/fontawesome-all.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <!-- animation css -->
    <link rel="stylesheet" href="../../assets/plugins/animation/css/animate.min.css">
    <!-- vendor css -->
    <link rel="stylesheet" href="../../assets/css/style.css">
    <link rel="stylesheet" href="../../assets/css/new.css">
    <link rel="stylesheet" href="../../assets/css/tbDongphi.css">

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
                                <div class="card" style="border-radius: 15px;">
                                    <div class="card-block">

                                            <div style="text-align: center; font-weight: bold; padding-bottom: 20px;">
                                                <h3>Xem báo cáo tài chính </h3>
                                            </div>
                                            <div class="mt-3 justify-content-between">

                                        </div>
                                        <div class="toolbar-container d-flex justify-content-between" style="display: flex; align-items: center; justify-content: start; gap: 20px;">
                                            <div class="btn-group dropdown custom-dropdown" id="choice">
                                                <button class="btn btn-third dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="choiceButton" value="all">Tất cả
                                                </button>
                                                <div class="dropdown-menu">
                                                    <a class="dropdown-item" value="all">Tất cả</a>
                                                    <a class="dropdown-item" value="bang-can-doi-ke-toan">Bảng cân đối kế toán</a>
                                                    <a class="dropdown-item" value="bao-cao-ket-qua-kinh-doanh">Báo cáo kết quả hoạt động kinh doanh</a>
                                                    <a class="dropdown-item" value="bao-cao-luu-chuyen-tien-te">Báo cáo lưu chuyển tiền tệ</a>
                                                    <a class="dropdown-item" value="bang-can-doi-tai-khoan">Bảng cân đối tài khoản</a>
                                                </div>
                                            </div>
                                            <div class="btn-group dropdown custom-dropdown" id="month">
                                                <button class="btn btn-third dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" id="monthButton" aria-expanded="false">Chọn tháng
                                                </button>
                                                <div class="dropdown-menu dropdown-style" aria-labelledby="monthDropdownButton" id="monthDropdown">
                                                </div>
                                            </div>
                                            <div class="btn-group dropdown custom-dropdown" id="year">
                                                <button class="btn btn-third dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" id="yearButton" aria-expanded="false">Chọn năm
                                                </button>
                                                <div class="dropdown-menu dropdown-style" aria-labelledby="yearDropdownButton" id="yearDropdown">
                                                </div>
                                            </div>
                                            <button onclick="redirectToPage()" class="btn btn-primary btn-group">Tạo báo cáo</button>
                                        </div>
                                    </div>
                                    <div class="DSthongbao">
                                        <!-- <div class="require" >
                                                <div class="title-require" ></div>
                                                <div class="content-require" >Gửi: Ông Mai Quốc Bảo, hộ gia đình số 1, căn hộ chung cư S2...</div>
                                                <div class="date-require" ></div>
                                                <a href=""><div class="detail-require">Xem thêm</div></a>
                                            </div> -->
                                    </div>
                                    <nav aria-label="Page navigation example">
                                        <ul class="pagination pagination-custom" id="pagination-wrapper">

                                        </ul>
                                    </nav>

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
    <!-- [ popup] Xem thêm  -->
    <!-- Modal -->
    <div class="modal fade" id="infoModal" tabindex="-1" role="dialog" aria-labelledby="infoModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content" style="width: 700px;">
                <div class="modal-header">
                    <h5 class="modal-title" style="font-weight: bold; text-align: center; align-items: center; justify-content: center;"> <span id="inforTitle"></span></h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body" style="color: black">
                    <div class="image-container">
                        <div class="image-text">
                        </div>
                        <div class="image-content" style="width: 400px; height: 200px;">
                            <span id="inforimage"></span>
                        </div>
                    </div>
                    <br><br>
                    <p>Gửi ông/ bà:<span> Mai Quốc Bảo , hộ gia đình số 1, căn hộ chung cư S2</span></p>
                    <p><span id="infornoiDung"></span></p>

                    <!-- Dùng CSS Flexbox -->

                </div>
            </div>
        </div>
    </div>
    <!-- [ popup] Xem thêm end  -->

    <!-- Required Js -->
    <script src="../../assets/js/vendor-all.min.js"></script>
    <script src="../../assets/plugins/bootstrap/js/bootstrap.min.js"></script>
    <!-- <script src="../../assets/js/pcoded.min.js"></script> -->

    <!-- <script src="../../assets/plugins/chart-morris/js/raphael.min.js"></script> -->
    <!-- <script src="../../assets/plugins/chart-morris/js/morris.min.js"></script> -->
    <!-- Phần này bắt buộc -->
    <script src="dataTB.js"></script>
    <script src="thongBao.js"></script>
    <!-- <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script> -->

    <?php
    $modalContent = 'Bạn có chắc chắn muốn gửi báo cáo này không?';
    include '../../common/modal/confirmationModal.php';
    ?>

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
    <script>
        function redirectToPage() {
            window.location.href = 'taoBaoCaoTaiChinh.php';
        }
    </script>
</body>

</html>