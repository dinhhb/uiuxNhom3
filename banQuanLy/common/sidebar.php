<?php
// Function to return the file name of the current script
function get_current_file_name()
{
    return basename($_SERVER['PHP_SELF']);
}

// Call the function and store the current file name
$current_file_name = get_current_file_name();
$current_folder_name= $_SERVER['PHP_SELF'];
?>

<div class="containeri" style="display:flex; width:100%; ">
    <div class="menu" style="position: fixed;background-color:#FFFFFF;margin-top:100px;margin-left:30px; width:300px;border-radius: 14px;height:px;">
        <div class="menu-item <?php echo ($current_file_name == 'dashboard.php') ? 'active' : ''; ?>">
            <a href="/banQuanLy/dashboard.php" class="nav-link "><span class="pcoded-micon"><i class="fas fa-home" style="color: #000000; width:30px;height:30px;"></i></span><span class="menu-options">Dashboard</span></a>
        </div>
        <div class="menu-item <?php echo ($current_file_name == 'xemThongKe.php') ? 'active' : ''; ?>">
            <a href="/banQuanLy/xemThongKe/xemThongKe.php" class="nav-link "><span class="pcoded-micon"><i class="fas fa-chart-bar" style="color: #000000;width:30px;height:30px;"></i></span><span class="menu-options">Xem thống kê</span></a>
        </div>
        <div class="menu-item <?php echo ($current_file_name == 'xemBaoCaoTaiChinh.php' || $current_file_name == 'taoBaoCaoTaiChinh.php') ? 'active' : ''; ?>">
            <a href="/banQuanLy/baoCaoTaiChinh/xemBaoCaoTaiChinh.php" class="nav-link "><span class="pcoded-micon"><i class="fas fa-file-excel" style="color: #000000; width: 30px; height: 30px;"></i></span><span class="menu-options">Tạo báo cáo tài chính</span></a>
        </div>
        <div class="menu-item <?php echo (strpos($current_folder_name, '/tamTruTamVang/') !== false) ? 'active' : ''; ?>">
            <a href="/banQuanLy/tamTruTamVang/dashboard_TamTruTamVang.php" class="nav-link "><span class="pcoded-micon"><i class="fas fa-user-cog" style="color: #000000; width:30px;height:30px;"></i></span><span class="menu-options">Quản lí tạm trú/tạm vắng</span></a>
        </div>
        <div class="menu-item <?php echo ($current_file_name == 'quanLyDongPhi.php') ? 'active' : ''; ?>">
            <a href="/banQuanLy/dongPhi/quanLyDongPhi.php" class="nav-link "><span class="pcoded-micon"><i class="fas fa-money-bill-wave" style="color: #000000; width:30px;height:30px;"></i></span><span class="menu-options">Quản lý đóng phí</span></a>
        </div>
        <div class="menu-item <?php echo ($current_file_name == 'thongBaoThuPhi.php') ? 'active' : ''; ?>">
            <a href="/banQuanLy/dongPhi/thongBaoThuPhi.php" class="nav-link "><span class="pcoded-micon"><i class="fas fa-bell" style="color: #000000; width:30px;height:30px;"></i></span><span class="menu-options">Thông báo thu phí</span></a>
        </div>
        <div class="menu-item <?php echo ($current_file_name == 'yKienCuDan.php') ? 'active' : ''; ?>">
            <a href="/banQuanLy/yKien/yKienCuDan.php" class="nav-link "><span class="pcoded-micon"><i class="fas fa-comment-dots" style="color: #000000; width:30px;height:30px;"></i></span><span class="menu-options">Ý kiến của cư dân</span></a>
        </div>
        <div class="menu-item-logout" style="padding-top:50px;">
            <a id="logout" class="nav-link "><span class="pcoded-micon"><i class="fas fa-sign-out-alt" style="color: red; width:30px;height:30px;"></i></span><span class="menu-options-logout" style="color:red;">Đăng xuất</span></a>
        </div>
    </div>


    <script>
        document.getElementById('logout').addEventListener('click', function(event) {
            console.log("logout");
            // Ngăn form thực hiện hành động mặc định
            event.preventDefault();
            $('#confirmationModalLogout').modal('show');
        });
    </script>

    <style>
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
        .menu-item.active {
            background-color: #E8EDF0;
            margin-left:15px;
            margin-right:15px;
            border-radius: 5px; /* Màu hồng cho background khi active */
        }

        .menu-item.active a {
            color: #164863; /* Màu xanh cho icon và chữ khi active */
        }
    </style>
