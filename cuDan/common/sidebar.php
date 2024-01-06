<?php
// Function to return the file name of the current script
function get_current_file_name()
{
    return basename($_SERVER['PHP_SELF']);
}

// Call the function and store the current file name
$current_file_name = get_current_file_name();
?>

<div class="containeri" style="display:flex; width:100%; ">
    <div class="menu" style="position: fixed;background-color:#FFFFFF;margin-top:100px;margin-left:30px; width:300px;border-radius: 14px;height:px;">
        <div class="menu-item <?php echo ($current_file_name == 'dashboard.php') ? 'active' : ''; ?>">
            <a href="/cuDan/dashboard.php" class="nav-link "><span class="pcoded-micon"><i class="fas fa-home" style="color: #000000; width:30px;height:30px;"></i></span><span class="menu-options">Dashboard</span></a>
        </div>
        <div class="menu-item <?php echo ($current_file_name == 'dongPhi.php') ? 'active' : ''; ?>">
            <a href="/cuDan/dongPhi/dongPhi.php" class="nav-link "><span class="pcoded-micon"><i class="fas fa-money-bill-wave" style="color: #000000;width:30px;height:30px;"></i></span><span class="menu-options">Đóng phí</span></a>
        </div>
        <div class="menu-item <?php echo ($current_file_name == 'lsThanhtoan.php') ? 'active' : ''; ?>">
            <a href="/cuDan/dongPhi/lsThanhtoan.php" class="nav-link "><span class="pcoded-micon"><i class="fa fa-history" style="color: #000000; width: 30px; height: 30px;"></i></span><span class="menu-options">Lịch sử thanh toán</span></a>
        </div>
        <div class="menu-item <?php echo ($current_file_name == 'tbDongphi.php') ? 'active' : ''; ?>">
            <a href="/cuDan/tbDongPhi/tbDongphi.php" class="nav-link "><span class="pcoded-micon"><i class="fas fa-bell" style="color: #000000; width:30px;height:30px;"></i></span><span class="menu-options">Thông báo đóng phí</span></a>
        </div>
        <div class="menu-item <?php echo ($current_file_name == 'tamTrutamVang.php') ? 'active' : ''; ?>">
            <a href="/cuDan/TamTruTamVang/tamTrutamVang.php" class="nav-link "><span class="pcoded-micon"><i class="fas fa-user-cog" style="color: #000000; width:30px;height:30px;"></i></span><span class="menu-options">Tạm trú tạm vắng</span></a>
        </div>
        <div class="menu-item <?php echo ($current_file_name == 'phananh.php') ? 'active' : ''; ?>">
            <a href="/cuDan/phanAnh/phananh.php" class="nav-link "><span class="pcoded-micon"><i class="fa fa-commenting-o" style="color: #000000; width:30px;height:30px;"></i></span><span class="menu-options">Phản ánh</span></a>
        </div>
        <div class="menu-item-logout" style="padding-top:50px;">
            <a href="" class="nav-link "><span class="pcoded-micon"><i class="fas fa-sign-out-alt" id="logout" style="color: red; width:30px;height:30px;"></i></span><span class="menu-options-logout" style="color:red;">Đăng xuất</span></a>
        </div>
    </div>