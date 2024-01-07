<!DOCTYPE html>
<html lang="en">

<head>
    <title>BQL-Thông báo thu phí</title>
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
    <link rel="icon" href="../../template/assets/images/favicon.ico" type="image/x-icon">
    <!-- fontawesome icon -->

    <link rel="stylesheet" href="../../template/assets/fonts/fontawesome/css/fontawesome-all.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <!-- animation css -->
    <link rel="stylesheet" href="../../template/assets/plugins/animation/css/animate.min.css">
    <!-- vendor css -->
    <link rel="stylesheet" href="../../template/assets/css/style.css">



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
    <div class="containeri" style="display:flex; width:100%; ">
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
                                                <h3>Thông báo thu phí</h3>
                                            </div>
                                            <div class="mt-3 justify-content-between">
                                                <form class="d-flex justify-content-between" style="display: flex; align-items: center; justify-content: start; gap: 20px;">
                                                    <div class="mb-3" style="display: flex; align-items: center; justify-content: start; gap: 20px;">
                                                        <!-- Radio button group -->
                                                        <label for="apartmentChoice" class="form-label">Chọn chung
                                                            cư</label>
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="radio" name="apartmentOptions" id="apartmentOption1" value="all" checked>
                                                            <label class="form-check-label" for="apartmentOption1">
                                                                Cả 2 chung cư
                                                            </label>
                                                        </div>
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="radio" name="apartmentOptions" id="apartmentOption2" value="s1">
                                                            <label class="form-check-label" for="apartmentOption2">
                                                                S1
                                                            </label>
                                                        </div>
                                                        <div class="form-check ">
                                                            <input class="form-check-input" type="radio" name="apartmentOptions" id="apartmentOption3" value="s2">
                                                            <label class="form-check-label" for="apartmentOption3">
                                                                S2
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <button id="sendNoti" class="btn btn-primary btn-group">Gửi thông báo
                                                    </button>
                                                </form>
                                            </div>
                                            <div class="toolbar-container d-flex justify-content-between" style="display: flex; align-items: center; justify-content: start; gap: 20px;">
                                                
                                                <div class="btn-group dropdown custom-dropdown">
                                                    <button class="btn btn-third dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" id="monthButton" aria-expanded="false">Chọn tháng
                                                    </button>
                                                    <div class="dropdown-menu dropdown-style" aria-labelledby="monthDropdownButton" id="monthDropdown">
                                                    </div>
                                                </div>
                                                <div class="btn-group dropdown custom-dropdown">
                                                    <button class="btn btn-third dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" id="yearButton" aria-expanded="false">Chọn năm
                                                    </button>
                                                    <div class="dropdown-menu dropdown-style" aria-labelledby="yearDropdownButton" id="yearDropdown">
                                                    </div>
                                                </div>
                                                <script>

                                                </script>

                                                <div class="search-container" style="display: flex; align-items: center;">
                                                    <div class="input-group custom-search-input">
                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text" id="basic-addon1"><i class="fa fa-search"></i></span>
                                                        </div>
                                                        <input type="text" id="searchInput" class="form-control" placeholder="Tìm kiếm..." aria-label="Search" aria-describedby="basic-addon1">
                                                    </div>
                                                </div>
                                                <!--                                            <button class="btn btn-primary">Thêm khoản phí</button>-->
                                            </div>
                                        </div>
                                        <!-- <div class="card-header">
                                        <h5>Hover Table</h5>
                                        <span class="d-block m-t-5">use class <code>table-hover</code> inside table
                                            element</span>
                                    </div>
                                    <div class="card-block table-border-style"> -->
                                        <div class="table-responsive">
                                            <table class="table table-hover">
                                                <thead>
                                                    <tr>
                                                    <th><input type="checkbox" id="selectAll"></th> <!-- Checkbox chọn tất cả -->
                                                        <th>STT</th>
                                                        <th>Tên chủ hộ</th>
                                                        <th>Tên dịch vụ</th>
                                                        <th>Loại dịch vụ</th>
                                                        <th>Hạn đóng</th>
                                                        <th>Số tiền</th>
                                                    </tr>
                                                </thead>
                                                <tbody id="table-body" class="table-body">


                                                </tbody>
                                            </table>
                                        </div>
                                        <nav aria-label="Page navigation example">
                                            <ul class="pagination pagination-custom" id="pagination-wrapper">

                                            </ul>
                                        </nav>
                                        <!-- <div class="align-left" onclick="window.location.href='dashboard_TamTruTamVang.php'">
                                            <button type="button" class="btn custom-btn d-inline-block ml-4 mb-3" style="padding: 10px 30px; background: #9BBEC8; color: white;">Quay lại
                                            </button>
                                        </div> -->
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

    <!-- Modal -->
    <?php
    $modalContent = 'Bạn có chắc chắn muốn duyệt  không ?';
    include '../../common/modal/confirmationModal.php';
    ?>
    <!-- Success Modal -->
    <?php
    $modalContent = 'Báo cáo đã được gửi thành công';
    include '../../common/modal/successModal.php';
    ?>

    <!-- Modal Xác Nhận Xóa -->
    <div class="modal fade" id="deleteConfirmationModal" tabindex="-1" role="dialog" aria-labelledby="deleteConfirmationModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="deleteConfirmationModalLabel">Xác Nhận Xóa</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    Bạn có chắc chắn muốn xóa mục này không? Hành động này không thể hoàn tác.
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Hủy</button>
                    <button type="button" class="btn btn-danger" id="confirmDeleteButton">Xóa</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Required Js -->
    <script src="../../template/assets/js/vendor-all.min.js"></script>
    <script src="../../template/assets/plugins/bootstrap/js/bootstrap.min.js"></script>
    <!--<script src="assets/js/pcoded.min.js"></script>-->
    <script src="Js/loadData.js"></script>
    <script src="Js/thongBaoThuPhi.js"></script>
    <!--<script src="assets/plugins/chart-morris/js/raphael.min.js"></script>-->
    <!--<script src="assets/plugins/chart-morris/js/morris.min.js"></script>-->
    <!-- Phần này bắt buộc -->
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

        .no-outline:focus {
            outline: none !important;
            /*box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.5); !* Example of a subtle box shadow focus style *!*/
        }
    </style>

    <?php
    include '../../common/modal/successModal.php';
    include '../../common/modal/confirmationModal.php';
    ?>


</body>

</html>