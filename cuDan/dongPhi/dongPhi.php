<!DOCTYPE html>
<html lang="en">

<head>
    <title>CD-Đóng phí</title>
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
                                                <h3>Đóng phí </h3>
                                            </div>
                                            <div class="mt-3 justify-content-between">

                                            </div>
                                            <div class="toolbar-container d-flex justify-content-between"
                                                style="display: flex; align-items: center; justify-content: start; gap: 20px;">
                                                <div class="btn-group dropdown custom-dropdown" id="choice">
                                                    <button class="btn btn-third dropdown-toggle" type="button"
                                                        data-toggle="dropdown" aria-haspopup="true"
                                                        aria-expanded="false" id="choiceButton" value="all">Lựa chọn
                                                    </button>
                                                    <div class="dropdown-menu">
                                                        <a class="dropdown-item" value="all">Tất cả</a>
                                                        <a class="dropdown-item" value="notPay">Phí chưa đóng</a>
                                                        <a class="dropdown-item" value="Pay">Phí đã đóng</a>
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
                                                        <th>Tình trạng </th>
                                                        <th>Số tiền </th>
                                                        <th>Hạn đóng </th>
                                                        <th></th>
                                                        <!-- <th></th> -->
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

    

    <!-- [popup] Thanh toán -->
    <!-- Modal -->
    <div class="modal fade" id="paymentModal" tabindex="-1" role="dialog" aria-labelledby="modalTitle"
        aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="modalTitle">Thanh toán</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <!-- Form fields without placeholder and value attributes -->
                    <form>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="fullName1">Họ và tên</label>
                                <input type="text" class="form-control" id="fullName1" placeholder="Mai Quốc Bảo"
                                    value="Mai Quốc Bảo">
                            </div>
                            <div class="form-group col-md-6">
                                <label for="tenDV">Tên dịch vụ</label>
                                <input type="text" class="form-control" id="tenDV" placeholder="Tên dịch vụ" value="">
                            </div>
                            <div class="form-group col-md-6">
                                <label for="loaiDV">Loại dịch vụ</label>
                                <input type="text" class="form-control" id="loaiDV" placeholder="Loại dịch vụ" value="">
                            </div>
                            <div class="form-group col-md-6">
                                <label for="soTien">Số tiền</label>
                                <input type="text" class="form-control" id="soTien" placeholder="Số tiền" value="">
                            </div>
                            <div class="form-group col-md-6">
                                <label for="typePayment">Phương thức thanh toán</label>
                                <select class="form-control" id="typePayment">
                                    <option value="nganHang">Ngân hàng</option>
                                    <option value="momo">MoMo</option>
                                    <option value="vnPay">VnPay</option>
                                </select>
                            </div>
                        </div>

                </div>
                <div class="text-right" style="margin-bottom: 30px;"> <!-- Căn phải nút Submit -->
                    <button type="button" class="btn btn-success" id="submitBtn" onclick="submitForm()">Xác
                        nhận</button>
                </div>
                </form>
                <!-- Include other form fields as per your screenshot -->
            </div>
        </div>
    </div>
    <!-- end Thanh toán  -->

    <!-- [pop up] Thanh toán thành công -->
    <!-- Modal Thông Báo Thanh Toán Thành Công -->
    <div class="modal fade" id="paymentSuccessModal" tabindex="-1" role="dialog"
        aria-labelledby="paymentSuccessModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="paymentSuccessModalLabel">Thanh toán thành công</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body" style="color: black">
                    <!-- Hiển thị thông tin thanh toán thành công ở đây -->
                    <p style="color : green; font-size: x-large; font-weight: bold; text-align: center;">
                        Cảm ơn bạn đã thanh toán!</p>
                    <br>
                    <p>Tên cư dân:<span> Mai Quốc Bảo</span></p>
                    <p>Tên dịch vụ: <span id="paymentSuccessTenDV"></span></p>
                    <p>Loại dịch vụ: <span id="paymentSuccessLoaiDV"></span></p>
                    <p>Số tiền: <span id="paymentSuccessSoTien"></span></p>
                    <p>Phương thức thanh toán: <span id="paymentSuccessPhuongThuc"></span></p>
                    <p>Mã giao dịch: <span id="paymentSuccessMaGiaoDich"></span></p>
                    <p>Thời gian: <span id="paymentSuccessThoiGian"></span></p>
                    <!-- Thêm các thông tin khác nếu cần -->
                    <div class="text-right" style="margin-bottom: 30px;"> <!-- Căn phải nút Submit -->
                        <button type="button" class="btn btn-success" id="okbtn" onclick="location.reload()">
                            OK</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- end Thanh toán thành công -->


    <!-- Required Js -->
    <script src="../../assets/js/vendor-all.min.js"></script>
    <script src="../../assets/plugins/bootstrap/js/bootstrap.min.js"></script>
    <script src="../../assets/js/pcoded.min.js"></script>
    <script src="../../assets/plugins/chart-morris/js/raphael.min.js"></script>
    <script src="../../assets/plugins/chart-morris/js/morris.min.js"></script>
    <!-- Phần này bắt buộc -->
    <script src="data.js"></script>
    <script src="dataDongphi.js"></script>
    <script>
        document.getElementById('submitbtn').addEventListener('click', function(event) {
            // Ngăn form thực hiện hành động mặc định
            console.log("Anh ga");
            event.preventDefault()
            $('#confirmationModal').modal('show');
        });
    </script>
    <!-- Modal -->
    <?php 
        $modalContent = 'Bạn có chắc chắn muốn thanh toán không?';
        include '../../common/modal/confirmationModal.php';
    ?>
    
</body>

</html>