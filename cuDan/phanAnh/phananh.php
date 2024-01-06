<!DOCTYPE html>
<html lang="en">

<head>
    <title>CD-Phản ánh</title>
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
                                                <h3>Phản ánh </h3>
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
                                                <button class="btn btn-primary" data-toggle="modal"
                                                    data-target="#newPA">Tạo mới</button>
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
            <div class="modal-content" style="width: 800px;">
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
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- [ popup] Xem thêm end  -->

    <!-- [ popup] Tạo mới  -->
    <!-- Modal -->
    <div class="modal fade" id="newPA" tabindex="-1" role="dialog" aria-labelledby="modalTitle" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="modalTitle">Tạo mới</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <!-- Form fields without placeholder and value attributes -->
                    <form id="myForm">
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="fullName1">Họ và tên</label>
                                <input type="text" class="form-control" id="fullName1" placeholder="Mai Quốc Bảo"
                                    value="Mai Quốc Bảo">
                            </div>
                            <div class="form-group col-md-6">
                                <label for="loaiDV">Địa chỉ</label>
                                <input type="text" class="form-control" id="loaiDV" placeholder=""
                                    value="Căn hộ số 1 Chung cư S2">
                            </div>
                            <div class="form-group col-md-6">
                                <label for="typePA">Loại phản ánh</label>
                                <select class="form-control" id="typePA">
                                    <option value="Vệ sinh">Vệ sinh</option>
                                    <option value="Dịch vụ">Dịch vụ</option>
                                    <option value="An ninh">An ninh</option>
                                    <option value="Bảo trì và sửa chữa">Bảo trì và sửa chữa</option>
                                    <option value="Quy định cộng đồng">Quy định cộng đồng</option>
                                </select>
                            </div>
                            <div class="form-group col-md-6">
                                <label for="loaiDV">Ảnh minh họa</label>
                                <input type="file" class="form-control" id="avatar" name="avatar"
                                    accept="image/png, image/jpeg" />
                            </div>
                            <div class="form-group  col-md-12 center-form">
                                <label for="reason">Lý do</label>
                                <div class="col-md-10">
                                    <textarea class="form-control" id="reason1" rows="3" maxlength="225"
                                        placeholder="Nhập lý do..."></textarea>
                                    <div class="text-right">
                                        <small id="charNum1" class="form-text text-muted">0 / 225</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
                <div class="text-right" style="margin-bottom: 30px;"> <!-- Căn phải nút Submit -->
                    <button type="button" class="btn btn-success" id="submitbtn" onclick="confirmSubmission(event)">Xác nhận</button>
                </div>
                </form>
                <!-- Include other form fields as per your screenshot -->
            </div>
        </div>
    </div>
    <!-- [ popup] Tạo mới  -->
    <!-- [popup] cònfirm  -->
    <!-- Modal Confirmation -->
    <div class="modal fade" id="confirmationModal" tabindex="-1" role="dialog" aria-labelledby="confirmationModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="confirmationModalLabel">Xác nhận</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    Bạn có chắc chắn muốn gửi?
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Thoát</button>
                    <button type="button" class="btn btn-success" id="confirmSaveChanges">Xác nhận</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="successModal" tabindex="-1" role="dialog" aria-labelledby="successModalLabel"
     aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="successModalLabel">Success</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                Dữ liệu đã được gửi và lưu thành công!
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
</body>

</html>