<!DOCTYPE html>
<html lang="en">

<head>
    <title>CD-Lịch sử thanh toán</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui">
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="description"
        content="Free Datta Able Admin Template come up with latest Bootstrap 4 framework with basic components, form elements and lots of pre-made layout options" />
    <meta name="keywords"
        content="admin templates, bootstrap admin templates, bootstrap 4, dashboard, dashboard templets, sass admin templets, html admin templates, responsive, bootstrap admin templates free download,premium bootstrap admin templates, datta able, datta able bootstrap admin template, free admin theme, free dashboard template" />
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
    <link rel="stylesheet" href="../../assets/css/dongphi.css">

</head>

<body>
    <!-- [ Pre-loader ] start -->
    <div class="loader-bg">
        <div class="loader-track">
            <div class="loader-fill"></div>
        </div>
    </div>
    <!-- [ Pre-loader ] End -->
    <?php 
        include '../../common/modal/confirmationModal.php';
    ?>
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
                                                <h3>Lịch sử thanh toán </h3>
                                            </div>
                                            <div class="mt-3 justify-content-between">

                                            </div>
                                            <div class="toolbar-container d-flex justify-content-between"
                                                style="display: flex; align-items: center; justify-content: start; gap: 20px;">

                                                <div class="btn-group dropdown custom-dropdown" id="month">
                                                    <button class="btn btn-third dropdown-toggle" type="button"
                                                        data-toggle="dropdown" aria-haspopup="true" id="monthButton"
                                                        aria-expanded="false">Chọn tháng
                                                    </button>
                                                    <div class="dropdown-menu dropdown-style"
                                                        aria-labelledby="monthDropdownButton" id="monthDropdown">
                                                    </div>
                                                </div>
                                                <div class="btn-group dropdown custom-dropdown" id="year">
                                                    <button class="btn btn-third dropdown-toggle" type="button"
                                                        data-toggle="dropdown" aria-haspopup="true" id="yearButton"
                                                        aria-expanded="false">Chọn năm
                                                    </button>
                                                    <div class="dropdown-menu dropdown-style"
                                                        aria-labelledby="yearDropdownButton" id="yearDropdown">
                                                    </div>
                                                </div>

                                                <div class="search-container"
                                                    style="display: flex; align-items: center;">
                                                    <div class="input-group custom-search-input">
                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text" id="basic-addon1"><i
                                                                    class="fa fa-search"></i></span>
                                                        </div>
                                                        <input type="text" id="searchInput" class="form-control"
                                                            placeholder="Tìm kiếm..." aria-label="Search"
                                                            aria-describedby="basic-addon1">
                                                    </div>
                                                </div>
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
                                                        <th style="padding-left: 30px;">STT</th>
                                                        <th>Tên dịch vụ</th>
                                                        <th>Loại dịch vụ</th>
                                                        <th>Mã giao dịch </th>
                                                        <th>Số tiền </th>
                                                        <th>Phương thức thanh toán</th>
                                                        <th>Thời gian</th>
                                                        
                                                        
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

    

    

    


    <!-- Required Js -->
    <script src="../../assets/js/vendor-all.min.js"></script>
    <script src="../../assets/plugins/bootstrap/js/bootstrap.min.js"></script>
    <script src="../../assets/js/pcoded.min.js"></script>

    <script src="../../assets/plugins/chart-morris/js/raphael.min.js"></script>
    <script src="../../assets/plugins/chart-morris/js/morris.min.js"></script>
    <!-- Phần này bắt buộc -->
    <script src="data.js"></script>
    <script src="Thanhtoan.js"></script>
    
</body>

</html>