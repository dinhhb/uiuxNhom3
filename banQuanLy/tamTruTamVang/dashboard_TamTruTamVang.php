<!DOCTYPE html>
<html lang="en">

<head>
    <title>Datta Able Free Bootstrap 4 Admin Template</title>
    <!-- HTML5 Shim and Respond.js IE11 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 11]>
    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
    <!-- Meta -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui">
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="description"
          content="Free Datta Able Admin Template come up with latest Bootstrap 4 framework with basic components, form elements and lots of pre-made layout options" />
    <meta name="keywords"
          content="admin templates, bootstrap admin templates, bootstrap 4, dashboard, dashboard templets, sass admin templets, html admin templates, responsive, bootstrap admin templates free download,premium bootstrap admin templates, datta able, datta able bootstrap admin template, free admin theme, free dashboard template" />
    <meta name="author" content="CodedThemes" />

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
    <script src="https://cdn.jsdelivr.net/npm/chart.js@3.0.0/dist/chart.min.js"></script>
    <!-- Make sure to include the datalabels plugin -->
    <script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels@2.0.0"></script>

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
            margin-top: 6px;
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
            margin-top: 6px;
            padding: 15px;
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
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
<!-- [ navigation menu ] end -->


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

                                        <div style="text-align: center; font-weight: bold; padding-bottom: 20px;">
                                            <h3>Quản lý tạm vắng </h3>
                                        </div>
                                        <div class="mt-3 justify-content-between" >
                                            <form class="d-flex justify-content-between" style="display: flex; align-items: center; justify-content: start; gap: 20px;">
                                                <div class="mb-3"  style="display: flex; align-items: center; justify-content: start; gap: 20px;">
                                                    <!-- Radio button group -->
                                                    <label for="apartmentChoice" class="form-label">Chọn chung cư</label>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="radio" name="apartmentOptions" id="apartmentOption1" value="all">
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
                                            </form>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-5">
                                            <div class="chart-container ml-5 mb-3">
                                            <!--                                        <h2 class="chart-header">Quản lý tạm trú/tạm vắng</h2>-->
                                            <canvas id="doughnutChart"></canvas>
                                            <ul class="chart-legend mt-3" style="display: grid;align-content: space-evenly;justify-items: start;justify-content: center;">
                                                <li><span style="background-color: #5F8CA0;"></span> Số người tạm trú: 25</li>
                                                <li><span style="background-color: #BFD1D9;"></span> Số người tạm vắng: 12</li>
                                            </ul>
                                                <div class="d-flex justify-content-between">
                                                    <span></span> <!-- Placeholder for left side content -->
                                                    <a href="quanLyTamVang.php" class="link-button mt-3">Quản lý đơn tạm trú/ tạm vắng >></a>
                                                </div>
                                            </div>

                                        </div>
                                        <div class="col-md-6">

                                            <div class="card-body row">
                                                <div class=" col-md-0">
                                                    <i class="fa-solid fa-person-walking-arrow-loop-left "style="font-size:30px"></i>

                                                </div>
                                                <div class="col-md-11">
                                                    <h5 class="">Đơn khai báo tạm trú</h5>
                                                    <div class="progress my-2">
                                                        <div class="progress-bar" role="progressbar" style="width: 66%;border-radius: 0.5rem;" aria-valuenow="10" aria-valuemin="0" aria-valuemax="15">10/15</div>
                                                    </div>
                                                    <div class="d-flex justify-content-between">
                                                        <span></span> <!-- Placeholder for left side content -->
                                                        <a href="#" class="link-button mt-3">Quản lý đơn tạm trú >></a>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="card-body row">
                                                <div class=" col-md-0">
                                                    <i class="fa-solid fa-person-walking-arrow-right "style="font-size:30px"></i>
                                                </div>
                                                <div class="col-md-11">
                                                    <h5 class="">Đơn khai báo tạm vắng</h5>
                                                    <div class="progress my-2">
                                                        <div class="progress-bar" role="progressbar" style="width: 60%;border-radius: 0.5rem;" aria-valuenow="12" aria-valuemin="0" aria-valuemax="20">12/20</div>
                                                    </div>
                                                    <div class="d-flex justify-content-between">
                                                        <span></span> <!-- Placeholder for left side content -->
                                                        <a href="#" class="link-button mt-3">Quản lý đơn tạm vắng >></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

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



<!-- Required Js -->
<script src="../../template/assets/js/vendor-all.min.js"></script>
<script src="../../template/assets/plugins/bootstrap/js/bootstrap.min.js"></script>
<script src="../../template/assets/js/pcoded.min.js"></script>
<script src="Js/loadData.js"></script>
<script src="Js/dbTamTruTamVang.js"></script>


</body>

</html>