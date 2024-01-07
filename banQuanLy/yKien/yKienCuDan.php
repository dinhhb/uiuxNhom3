<!DOCTYPE html>
<html lang="en">

<head>
    <title>Ý kiến cư dân</title>
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
    <link rel="stylesheet" href="../../assets/css/phananh.css">

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
                                             <h3>Ý kiến của cư dân </h3>
                                        </div>
                                            <div class="mt-3 justify-content-between">

                                            </div>
                                            <div class="toolbar-container d-flex"
                                                style="display: flex; align-items: center; justify-content: start; gap: 20px;">
                                                <div class="btn-group dropdown custom-dropdown" id="choice">
                                                    <button class="btn btn-third dropdown-toggle" type="button"
                                                        data-toggle="dropdown" aria-haspopup="true"
                                                        aria-expanded="false" id="choiceButton" value="all">Tình trạng
                                                    </button>
                                                    <div class="dropdown-menu">
                                                        <a class="dropdown-item" value="all">Tất cả</a>
                                                        <a class="dropdown-item" value="notduyet">Chưa duyệt</a>
                                                        <a class="dropdown-item" value="duyet">Đã duyệt</a>
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

                                                <div class="search-container"
                                                    style="display: flex; align-items: center;padding-left:350px;">
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
                                                        <th>Loại phản ánh</th>
                                                        <th>Nội dung</th>
                                                        <th>Tình trạng </th>
                                                        <th>Thời gian </th>
                                                        <th></th>
                                                        
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

    <!-- [ popup] Xem thêm  -->
    <!-- Modal -->
    <div class="modal fade" id="infoModal" tabindex="-1" role="dialog" aria-labelledby="infoModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content" style="width: 800px;height:470px;">
                <div class="modal-header">
                    <h5 class="modal-title" style="text-align: center; font-weight: bold;">Phản ánh về <span id="inforloaiPA"></span></h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="form-row">
                        <div class="form-group col-md-7">
                        <!-- Text content on the left side -->
                        <div class="text-content">
                            <p>Từ ông/ bà:<span> Mai Quốc Bảo</span></p>
                            <p>Căn hộ gia đình số: <span>1</span></p>
                            <p>Chung cư: <span>S2</span></p>
                            <p>Nội dung phản ánh: <span id="infornoiDung"></span></p>
                        </div>
                        </div>
                        <div class="form-group col-md-5">
                        <!-- Image container on the right side -->
                        <div class="image-container">
                            <div class="image-text">
                                <p>Ảnh minh họa</p>
                            </div>
                            <div class="image-content">
                                <span id="inforimage"></span>
                            </div>
                        </div>
                        </div>
                        <!-- Thêm id cho input và các phần tử cần thao tác -->
<p>Lý do từ chối
    <input id="rejectReasonInput" placeholder="Điền lý do từ chối">
    <span id="rejectErrorMsg" style="color: red; margin-left: 10px; display: none;">Cần nhập lý do trước khi từ chối</span>
</p>
<div style="display: flex; justify-content: space-between; margin-top: 10px;">
    <button id="rejectBtn" onclick="rejectFeedback()" style="margin-left:50px;width: 150px; height: 40px; background-color: red; color: white;">Từ chối</button>
    <button id="acceptReviewBtn" onclick="acceptAndReview()" style="margin-left:300px;width: 200px; height: 40px; background-color: green; color: white;">Chấp nhận và xem xét</button>
    <p id="rejectMessage" style="color: red; display: none;padding-top:30px;padding-left:10px;font-size:20px;">Đã từ chối</p>
    <p id="acceptMessage" style="color: green; display: none;padding-top:30px;padding-left:10px;font-size:20px;">Đã chấp nhận</p>
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
    <script src="../../assets/js/pcoded.min.js"></script>

    <script src="../../assets/plugins/chart-morris/js/raphael.min.js"></script>
    <script src="../../assets/plugins/chart-morris/js/morris.min.js"></script>
    <!-- Phần này bắt buộc -->
    <script src="dataPhanAnh.js"></script>
    <script src="phananh.js"></script>
    <script>
        document.getElementById('submitbtn').addEventListener('click', function(event) {
            // Ngăn form thực hiện hành động mặc định
            console.log("Anh ga");
            event.preventDefault()
            $('#confirmationModal').modal('show');
        });
        function rejectFeedback() {
    var rejectReason = document.getElementById("rejectReasonInput").value;

    if (rejectReason.trim() === "") {
        // Hiển thị thông báo khi chưa nhập lý do
        document.getElementById("rejectErrorMsg").style.display = "inline";
    } else {
        // Ẩn các nút và hiển thị thông báo đã từ chối
        document.getElementById("rejectBtn").style.display = "none";
        document.getElementById("acceptReviewBtn").style.display = "none";
        document.getElementById("rejectMessage").style.display = "inline";
    }
}

function acceptAndReview() {
    // Ẩn các nút và hiển thị thông báo đã chấp nhận
    document.getElementById("rejectBtn").style.display = "none";
    document.getElementById("acceptReviewBtn").style.display = "none";
    document.getElementById("acceptMessage").style.display = "inline";
}

    </script>
    <!-- Modal -->
    <?php 
        $modalContent = 'Bạn có chắc chắn muốn gửi phản ánh này không?';
        include '../../common/modal/confirmationModal.php';
    ?>
</body>

</html>