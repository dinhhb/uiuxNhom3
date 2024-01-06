<!DOCTYPE html>
<html lang="en">

<head>
    <title>CD-Thông báo đóng phí</title>
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
                                                <h3>Thông báo đóng phí </h3>
                                            </div>
                                            <div class="mt-3 justify-content-between">

                                            </div>
                                            <div class="toolbar-container d-flex justify-content-between"
                                                style="display: flex; align-items: center; justify-content: start; gap: 20px;padding-right: 50px;padding-left: 50px;">
                                                <div class="btn-group dropdown custom-dropdown" id="choice">
                                                    <button class="btn btn-third dropdown-toggle" type="button"
                                                        data-toggle="dropdown" aria-haspopup="true"
                                                        aria-expanded="false" id="choiceButton" value="all">Lựa chọn
                                                    </button>
                                                    <div class="dropdown-menu">
                                                        <a class="dropdown-item" value="all">Tất cả</a>
                                                        <a class="dropdown-item" value="notRead">Chưa đọc</a>
                                                        <a class="dropdown-item" value="Read">Đã đọc</a>
                                                    </div>
                                                </div>
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

                                            </div>
                                        </div >
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
    <div class="modal fade" id="infoModal" tabindex="-1" role="dialog" aria-labelledby="infoModalLabel"
        aria-hidden="true">
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
        include '../../common/modal/confirmationModal.php';
    ?>
</body>

</html>