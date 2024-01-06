<!DOCTYPE html>
<html lang="en">

<head>
    <title>BQL-Thống kê cư dân
    </title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui">
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <!-- <meta name="description"
          content="Free Datta Able Admin Template come up with latest Bootstrap 4 framework with basic components, form elements and lots of pre-made layout options" />
    <meta name="keywords"
          content="admin templates, bootstrap admin templates, bootstrap 4, dashboard, dashboard templets, sass admin templets, html admin templates, responsive, bootstrap admin templates free download,premium bootstrap admin templates, datta able, datta able bootstrap admin template, free admin theme, free dashboard template" /> -->
    <meta name="author" content="CodedThemes" />
    <link rel="import" href="header.html">
    <!-- Favicon icon -->
    <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-zkRf1z1uPbXpFZV4KTMEH7PVB7ZlDdjw0EhMf7ueExUqMW+0vWuAHR4/j5qoHw1NvMyO4tDw9HZmpyKiCyr/D3A==" crossorigin="anonymous" /> -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-zkRf1z1uPbXpFZV4KTMEH7PVB7ZlDdjw0EhMf7ueExUqMW+0vWuAHR4/j5qoHw1NvMyO4tDw9HZmpyKiCyr/D3A==" crossorigin="anonymous" />
    <link rel="icon" href="../assets/images/favicon.ico" type="image/x-icon">
    <!-- fontawesome icon -->
    <link rel="stylesheet" href="../assets/fonts/fontawesome/css/fontawesome-all.min.css">
    <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> -->
    <!-- animation css -->
    <link rel="stylesheet" href="../assets/plugins/animation/css/animate.min.css">
    <!-- vendor css -->
    <link rel="stylesheet" href="../assets/css/style.css">

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
    <?php include 'common/header.php'; ?>
    <!-- End-header -->

    <!-- [ menu ] start -->
    <?php include 'common/sidebar.php'; ?>
    <!-- End menu -->

    <?php
    include '../common/modal/confirmationModal.php';
    ?>

    <!-- Phần của mọi người -->
    <div class="pcoded-wrapper" style="width:1520px;">
        <div class="information" style="margin-top:100px;margin-left:350px;margin-right:30px;">
            <div class="pcoded-inner-content">
                <div class="main-body">
                    <div class="page-wrapper">
                        <div class="row">
                            <div class="col-xl-12">
                                <div class="card" style="border-radius: 15px;">
                                    <div class="card-block">
                                        <div style="text-align: center; font-weight: bold; padding-bottom: 20px;">
                                            <p style="font-family: 'Inter';font-style: normal;font-weight: 600;font-size: 36px;line-height: 21px;letter-spacing: 0.1px;color: #000000;">Xin chào Ban quản lý </p>
                                        </div>
                                    </div>
                                    <div style="display:flex;position:relative;">
                                        <div class="img-dashboard" style="padding-top:30px;padding-left:375px;">
                                            <img style="width: 387px;height: 381px;filter: drop-shadow(0px 4px 4px rgba(22, 72, 99, 0.25));border-radius: 45px;" src="../assets/images/chung-cu-mini.jpg">
                                        </div>
                                        <div class="vector-left" style="padding-left:220px;padding-top:60px;position:absolute;">
                                            <svg width="230" height="110" viewBox="0 0 230 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M229 109L126.363 1H0" stroke="#164863" stroke-width="2" />
                                            </svg>
                                        </div>
                                        <div class="vector-right" style="position:absolute;padding-left:650px;padding-top:30px;">
                                            <svg width="234" height="85" viewBox="0 0 234 85" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 84L77.7992 1H155.9H234" stroke="#164863" stroke-width="2" />
                                            </svg>
                                        </div>
                                        <div class="tenchungcu" style="position:absolute; padding-top:37px;padding-left:245px;font-family: 'Inter';font-style: normal;font-weight: 600;font-size: 14px;line-height: 21px;letter-spacing: 0.1px;color: #000000;">Chung cư S1</div>
                                        <div class="tenchungcu" style="position:absolute; padding-top:10px;padding-left:780px;font-family: 'Inter';font-style: normal;font-weight: 600;font-size: 14px;line-height: 21px;letter-spacing: 0.1px;color: #000000;">Chung cư S2</div>
                                        <div class="thongtinchungcu" style="position:absolute;width:200px;height:161px;top:120px;left:150px;background-color: #E8EDF0;box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);border-radius: 15px;">
                                            <ul style="padding-top:15px;list-style-type:none;color:#000000;font-family: 'Inter';font-style: normal;font-weight: 600;font-size: 14px;line-height: 21px;letter-spacing: 0.1px;">
                                                <li>Diện tích: 556 m2</li>
                                                <li>Số tầng: 5</li>
                                                <li>Số căn hộ: 25</li>
                                                <li>Số cư dân: 50</li>
                                            </ul>
                                        </div>
                                        <div class="thongtinchungcu" style="position:absolute;width:200px;height:161px;top:100px;left:820px;background-color: #E8EDF0;box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);border-radius: 15px;">
                                            <ul style="padding-top:15px;list-style-type:none;font-family: 'Inter';font-style: normal;font-weight: 600;font-size: 14px;line-height: 21px;letter-spacing: 0.1px;color:#000000">
                                                <li>Diện tích: 556 m2</li>
                                                <li>Số tầng: 5</li>
                                                <li>Số căn hộ: 25</li>
                                                <li>Số cư dân: 50</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="icon-chat" style="display:flex;padding-top:50px;padding-left:100px; font-family: 'Inter';font-style: normal;font-weight: 600;font-size: 14px; line-height: 21px;letter-spacing: 0.1px;color: #000000;">
                                        <svg width="33" height="29" viewBox="0 0 33 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_118_6101)">
                                                <rect width="33" height="29" transform="matrix(-1 0 0 1 33 0)" fill="#9BBEC8" />
                                                <path d="M22.9835 14.5C22.3326 14.5 21.805 14.0363 21.805 13.4643C21.805 12.8923 22.3326 12.4286 22.9835 12.4286C23.6344 12.4286 24.1621 12.8923 24.1621 13.4643C24.1621 14.0363 23.6344 14.5 22.9835 14.5Z" stroke="#000001" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M15.3214 14.5C14.6705 14.5 14.1429 14.0363 14.1429 13.4643C14.1429 12.8923 14.6705 12.4286 15.3214 12.4286C15.9723 12.4286 16.5 12.8923 16.5 13.4643C16.5 14.0363 15.9723 14.5 15.3214 14.5Z" stroke="#000001" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M7.66127 14.5C7.01037 14.5 6.4827 14.0363 6.4827 13.4643C6.4827 12.8923 7.01037 12.4286 7.66127 12.4286C8.31218 12.4286 8.83984 12.8923 8.83984 13.4643C8.83984 14.0363 8.31218 14.5 7.66127 14.5Z" stroke="#000001" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M22.3937 25.8928L31.8223 27.9643L29.4651 21.75V3.10713C29.4651 2.55776 29.2168 2.03088 28.7747 1.64241C28.3327 1.25394 27.7331 1.03571 27.108 1.03571H3.53655C2.9114 1.03571 2.31185 1.25394 1.8698 1.64241C1.42775 2.03088 1.17941 2.55776 1.17941 3.10713V23.8214C1.17941 24.3708 1.42775 24.8977 1.8698 25.2861C2.31185 25.6746 2.9114 25.8928 3.53655 25.8928H22.3937Z" stroke="#000001" stroke-linecap="round" stroke-linejoin="round" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_118_6101">
                                                    <rect width="33" height="29" fill="white" transform="matrix(-1 0 0 1 33 0)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <div style="padding-top:10px;padding-left:10px;">Ý kiến của cư dân</div>
                                        <a href="">
                                            <div style="padding-top:7px;padding-left:10px;font-family: 'Inter';font-style: normal;font-weight: 700;font-size: 12px;line-height: 26px;text-decoration-line: underline;color: #164863;">Xem chi tiết >></div>
                                        </a>
                                    </div>
                                    <a href="">
                                        <div class="require" style="position:relative; margin-left:100px;margin-bottom:20px; margin-top:10px; background-color: #E8EDF0; box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); border-radius: 15px; width:1000px; height:120px; color: #090909;">
                                            <div class="title-require" style="padding-top:10px;padding-left:25px;font-family: 'Inter';font-style: Bold;font-weight: 700;font-size: 20px;line-height: 26px;color:#000000">Phản ánh hàng xóm ồn ào</div>
                                            <div class="content-require" style="padding-top:20px;padding-left:20px;font-family: 'Inter';font-style: normal;font-weight: 600;font-size: 14px;line-height: 21px;letter-spacing: 0.1px;color: #000000;">Từ: Nguyễn Văn An, hộ gia đình số 3, địa chỉ Sóc Sơn, Hà Nội...</div>
                                            <div class="date-require" style="position:absolute;top:15px;right:30px;color: #164863;">25/11/2023</div>
                                            <a href="">
                                                <div class="detail-require" style="position:absolute;top:80px;right:50px;font-family: 'Inter';font-style: normal;font-weight: 600;font-size: 14px;line-height: 21px;letter-spacing: 0.1px;color: #164863;">Xem thêm</div>
                                            </a>
                                        </div>
                                    </a>
                                    <a href="">
                                        <div class="require" style="position:relative; margin-left:100px;margin-bottom:20px; margin-top:10px; background-color: #E8EDF0; box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); border-radius: 15px; width:1000px; height:120px; color: #090909;">
                                            <div class="title-require" style="padding-top:10px;padding-left:5px;font-family: 'Inter';font-style: Bold;font-weight: 700;font-size: 20px;line-height: 26px;color:#000000">Phản ánh hàng xóm ồn ào</div>
                                            <div class="content-require" style="padding-top:20px;padding-left:20px;font-family: 'Inter';font-style: normal;font-weight: 600;font-size: 14px;line-height: 21px;letter-spacing: 0.1px;color: #000000;">Từ: Nguyễn Văn An, hộ gia đình số 3, địa chỉ Sóc Sơn, Hà Nội...</div>
                                            <div class="date-require" style="position:absolute;top:15px;right:30px;color: #164863;">25/11/2023</div>
                                            <a href="">
                                                <div class="detail-require" style="position:absolute;top:80px;right:50px;font-family: 'Inter';font-style: normal;font-weight: 600;font-size: 14px;line-height: 21px;letter-spacing: 0.1px;color: #164863;">Xem thêm</div>
                                            </a>
                                        </div>
                                    </a>




                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Required Js -->
    <script src="../assets/js/vendor-all.min.js"></script>
    <script src="../assets/plugins/bootstrap/js/bootstrap.min.js"></script>
    <!-- Phần này bắt buộc -->
    <style>
        body {
            margin: 0;
            /* Loại bỏ margin mặc định của body */
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
            font-family: 'Inter';
            font-style: normal;
            font-weight: 600;
            font-size: 20px;
            color: #000000;
            margin: 0;
        }

        .user-info p.subtitle {
            font-family: 'Inter';
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

            font-family: 'Inter';
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

            font-family: 'Inter';
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
    </style>
    <!-- tạo active cho menu -->
    <style>
        .menu-item.active {
            background-color: #E8EDF0;
            margin-left: 15px;
            margin-right: 15px;
            border-radius: 5px;
            /* Màu hồng cho background khi active */
        }

        .menu-item.active a {
            color: #164863;
            /* Màu xanh cho icon và chữ khi active */
        }
    </style>
</body>

</html>