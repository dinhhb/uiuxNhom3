<!DOCTYPE html>
<html lang="en">

<head>
    <title>BQL-Tạo báo cáo
    </title>
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
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        integrity="sha512-zkRf1z1uPbXpFZV4KTMEH7PVB7ZlDdjw0EhMf7ueExUqMW+0vWuAHR4/j5qoHw1NvMyO4tDw9HZmpyKiCyr/D3A=="
        crossorigin="anonymous" />
    <link rel="icon" href="../assets/images/favicon.ico" type="image/x-icon">
    <!-- fontawesome icon -->
    <link rel="stylesheet" href="../assets/fonts/fontawesome/css/fontawesome-all.min.css">
    <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> -->
    <!-- animation css -->
    <link rel="stylesheet" href="../assets/plugins/animation/css/animate.min.css">
    <!-- vendor css -->
    <link rel="stylesheet" href="../assets/css/style.css">
    <script src="https://cdn.tiny.cloud/1/no-api-key/tinymce/6/tinymce.min.js" referrerpolicy="origin"></script>


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
    <?php include 'header.html'; ?>
    <!-- End-header -->

    <!-- [ menu ] start -->
    <div class="containeri" style="display:flex; width:100%; ">
        <div class="menu"
            style="position: fixed;background-color:#FFFFFF;margin-top:100px;margin-left:30px; width:300px;border-radius: 14px;height:px;">
            <div class="menu-item">
                <a href="Dashboardbql.html" class="nav-link "><span class="pcoded-micon"><i class="fas fa-home"
                            style="color: #000000; width:30px;height:30px;"></i></span><span
                        class="menu-options">Dashboard</span></a>
            </div>
            <div class="menu-item">
                <a href="Xemthongke.html" class="nav-link "><span class="pcoded-micon"><i class="fas fa-chart-bar"
                            style="color: #000000;width:30px;height:30px;"></i></span><span class="menu-options">Xem
                        thống kê</span></a>
            </div>
            <div class="menu-item active">
                <a href="index.html" class="nav-link "><span class="pcoded-micon"><i class="fas fa-file-excel"
                            style="color: #000000; width: 30px; height: 30px;"></i></span><span class="menu-options">Tạo
                        báo cáo tài chính</span></a>
            </div>
            <div class="menu-item">
                <a href="index.html" class="nav-link "><span class="pcoded-micon"><i class="fas fa-user-cog"
                            style="color: #000000; width:30px;height:30px;"></i></span><span class="menu-options">Quản
                        lí tạm trú/tạm vắng</span></a>
            </div>
            <div class="menu-item">
                <a href="index.html" class="nav-link "><span class="pcoded-micon"><i class="fas fa-money-bill-wave"
                            style="color: #000000; width:30px;height:30px;"></i></span><span class="menu-options">Quản
                        lý đóng phí</span></a>
            </div>
            <div class="menu-item">
                <a href="index.html" class="nav-link "><span class="pcoded-micon"><i class="fas fa-bell"
                            style="color: #000000; width:30px;height:30px;"></i></span><span class="menu-options">Thông
                        báo thu phí</span></a>
            </div>
            <div class="menu-item">
                <a href="Ykiencudan.html" class="nav-link "><span class="pcoded-micon"><i class="fas fa-comment-dots"
                            style="color: #000000; width:30px;height:30px;"></i></span><span class="menu-options">Ý kiến
                        của cư dân</span></a>
            </div>
            <div class="menu-item-logout" style="padding-top:50px;">
                <a href="index.html" class="nav-link "><span class="pcoded-micon"><i class="fas fa-sign-out-alt"
                            style="color: red; width:30px;height:30px;"></i></span><span class="menu-options-logout"
                        style="color:red;">Đăng xuất</span></a>
            </div>
        </div>
        <!-- End menu -->
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
                                                <p
                                                    style="font-family: 'Inter';font-style: normal;font-weight: 600;font-size: 36px;line-height: 21px;letter-spacing: 0.1px;color: #000000;">
                                                    Tạo báo cáo tài chính</p>
                                            </div>
                                            <div class="toolbar-container d-flex justify-content-between"
                                                style="display: flex; align-items: center; justify-content: start; gap: 20px;">
                                                <div class="btn-group dropdown custom-dropdown">
                                                    <button class="btn btn-third dropdown-toggle" type="button"
                                                        data-toggle="dropdown" aria-haspopup="true"
                                                        id="loaiBaoCaoButton" aria-expanded="false">Bảng cân đối kế toán
                                                    </button>
                                                    <div class="dropdown-menu dropdown-style"
                                                        aria-labelledby="loaiBaoCaoDropdownButton" id="loaiBaoCaoDropdown">
                                                    </div>
                                                </div>
                                                <button type="submit" class="btn btn-primary1 btn-group">Xem báo cáo đã gửi
                                                </button>
                                                <button data-toggle="modal" data-target="#confirmationModal" type="submitBaoCao" class="btn btn-primary btn-group">Gửi báo cáo
                                                </button>
                                            </div>
                                            
                                        </div>
                                        <form id="baoCao" method="post" style="min-height: 60vh;">
                                            <textarea id="mytextarea" style="height: 60vh;">Hello, World!</textarea>
                                        </form>
                                        <script>
                                            tinymce.init({
                                                selector: '#mytextarea',
                                                setup: function (editor) {
                                                    editor.on('init', function () {
                                                        editor.setContent('<table><tr><td><p><strong>Đơn vị báo cáo:………………....</strong></p></td><td><p><strong>                                          Mẫu số B 01 – DN</strong></p></td></tr><tr><td><p><strong>Địa chỉ:………………………….</strong></p></td><td><p>      (Ban hành theo Thông tư số 200/2014/TT-BTC</p><p>          Ngày 22/12/2014 của Bộ Tài chính)</p></td></tr></table><p><strong>BẢNG CÂN ĐỐI KẾ TOÁN </strong></p><p><em>Tại ngày ... tháng ... năm ...(1)</em></p><p><strong><em>(Áp dụng cho doanh nghiệp đáp ứng giả định hoạt động liên tục)</em></strong></p><p><em>  Đơn vị tính:.............</em></p><table><tr><td><p><strong>TÀI SẢN</strong></p></td><td><p><strong>Mã</strong></p><p><strong>số</strong></p></td><td><p><strong>Thuyết minh</strong></p></td><td><p><strong>Số cuối năm (3)</strong></p></td><td><p><strong>Số</strong></p><p><strong>đầu  năm </strong></p><p><strong>(3)</strong></p></td></tr><tr><td><p>1</p></td><td><p>2</p></td><td><p>3</p></td><td><p>4</p></td><td><p>5</p></td></tr><tr><td><p><strong>A - TÀI SẢN NGẮN HẠN</strong></p></td><td><p><strong>100</strong></p></td><td></td><td></td><td></td></tr><tr><td><p><strong>I. Tiền và các khoản tương đương tiền</strong></p></td><td><p><strong>110</strong></p></td><td></td><td></td><td></td></tr><tr><td><p>1. Tiền </p></td><td><p>111</p></td><td></td><td></td><td></td></tr><tr><td><p>2. Các khoản tương đương tiền</p></td><td><p>112</p></td><td></td><td></td><td></td></tr><tr><td><p><strong>II. Đầu tư tài chính ngắn hạn</strong></p></td><td><p><strong>120</strong></p></td><td></td><td></td><td></td></tr><tr><td><p>1. Chứng khoán kinh doanh</p></td><td><p>121</p></td><td></td><td></td><td></td></tr><tr><td><p>2. Dự phòng giảm giá chứng khoán kinh doanh (*) </p></td><td><p>122</p></td><td></td><td><p>(…)</p></td><td><p>(…)</p></td></tr><tr><td><p>3. Đầu tư nắm giữ đến ngày đáo hạn</p></td><td><p>123</p></td><td></td><td></td><td></td></tr><tr><td><p><strong>III. Các khoản phải thu ngắn hạn</strong></p></td><td><p><strong>130</strong></p></td><td></td><td></td><td></td></tr><tr><td><p>1. Phải thu ngắn hạn của khách hàng </p></td><td><p>131</p></td><td></td><td></td><td></td></tr><tr><td><p>2. Trả trước cho người bán ngắn hạn</p></td><td><p>132</p></td><td></td><td></td><td></td></tr><tr><td><p>3. Phải thu nội bộ ngắn hạn</p></td><td><p>133</p></td><td></td><td></td><td></td></tr><tr><td><p>4. Phải thu theo tiến độ kế hoạch hợp đồng xây dựng</p></td><td><p>134</p></td><td></td><td></td><td></td></tr><tr><td><p>5. Phải thu về cho vay ngắn hạn</p></td><td><p>135</p></td><td></td><td></td><td></td></tr><tr><td><p>6. Phải thu ngắn hạn khác</p></td><td><p>136</p></td><td></td><td></td><td></td></tr><tr><td><p>7. Dự phòng phải thu ngắn hạn khó đòi (*)</p></td><td><p>137</p></td><td></td><td></td><td></td></tr><tr><td><p>8. Tài sản thiếu chờ xử lý</p></td><td><p>139</p></td><td></td><td></td><td></td></tr><tr><td><p><strong>IV. Hàng tồn kho</strong></p></td><td><p><strong>140</strong></p></td><td></td><td></td><td></td></tr><tr><td><p>1. Hàng tồn kho</p></td><td><p>141</p></td><td></td><td></td><td></td></tr><tr><td><p>2. Dự phòng giảm giá hàng tồn kho (*)</p></td><td><p>149</p></td><td></td><td><p>(…)</p></td><td><p>(…)</p></td></tr><tr><td></td><td></td><td></td><td></td><td></td></tr><tr><td><p><strong>V. Tài sản ngắn hạn khác</strong></p></td><td><p><strong>150</strong></p></td><td></td><td></td><td></td></tr><tr><td><p>1. Chi phí trả trước ngắn hạn </p></td><td><p>151</p></td><td></td><td></td><td></td></tr><tr><td><p>2. Thuế GTGT được khấu trừ</p></td><td><p>152</p></td><td></td><td></td><td></td></tr><tr><td><p>3. Thuế và các khoản khác phải thu Nhà nước</p></td><td><p>153</p></td><td></td><td></td><td></td></tr><tr><td><p>4. Giao dịch mua bán lại trái phiếu Chính phủ</p></td><td><p>154</p></td><td></td><td></td><td></td></tr><tr><td><p>5. Tài sản ngắn hạn khác</p></td><td><p>155</p></td><td></td><td></td><td></td></tr><tr><td><p><strong>B - TÀI SẢN DÀI HẠN</strong></p></td><td><p><strong>200</strong></p></td><td></td><td></td><td></td></tr><tr><td><p><strong>I. Các khoản phải thu dài hạn </strong></p></td><td><p><strong>210</strong></p></td><td></td><td></td><td></td></tr><tr><td><p>1. Phải thu dài hạn của khách hàng</p></td><td><p>211</p></td><td></td><td></td><td></td></tr><tr><td><p>2. Trả trước cho người bán dài hạn</p></td><td><p>212</p></td><td></td><td></td><td></td></tr><tr><td><p>3. Vốn kinh doanh ở đơn vị trực thuộc</p></td><td><p>213</p></td><td></td><td></td><td></td></tr><tr><td><p>4. Phải thu nội bộ dài hạn</p></td><td><p>214</p></td><td></td><td></td><td></td></tr><tr><td><p>5. Phải thu về cho vay dài hạn</p></td><td><p>215</p></td><td></td><td></td><td></td></tr><tr><td><p>6. Phải thu dài hạn khác</p></td><td><p>216</p></td><td></td><td></td><td></td></tr><tr><td><p>7. Dự phòng phải thu dài hạn khó đòi (*)</p></td><td><p>219</p></td><td></td><td><p>(...)</p></td><td><p>(...)</p></td></tr><tr><td><p><strong>II. Tài sản cố định</strong></p></td><td><p><strong>220</strong></p></td><td></td><td></td><td></td></tr><tr><td><p>1. Tài sản cố định hữu hình</p></td><td><p>221</p></td><td></td><td></td><td></td></tr><tr><td><p>      - Nguyên giá</p></td><td><p>222</p></td><td></td><td></td><td></td></tr><tr><td><p>      - Giá trị hao mòn luỹ kế (*)</p></td><td><p>223</p></td><td></td><td><p>(…)</p></td><td><p>(…)</p></td></tr><tr><td><p>2. Tài sản cố định thuê tài chính</p></td><td><p>224</p></td><td></td><td></td><td></td></tr><tr><td><p>      - Nguyên giá</p></td><td><p>225</p></td><td></td><td></td><td></td></tr><tr><td><p>      - Giá trị hao mòn luỹ kế (*)</p></td><td><p>226</p></td><td></td><td><p>(…)</p></td><td><p>(…)</p></td></tr><tr><td><p>3. Tài sản cố định vô hình</p></td><td><p>227</p></td><td></td><td></td><td></td></tr><tr><td><p>      - Nguyên giá</p></td><td><p>228</p></td><td></td><td></td><td></td></tr><tr><td><p>      - Giá trị hao mòn luỹ kế (*)</p></td><td><p>229</p></td><td></td><td><p>(…)</p></td><td><p>(…)</p></td></tr><tr><td><p><strong>III. Bất động sản đầu tư</strong></p></td><td><p><strong>230</strong></p></td><td></td><td></td><td></td></tr><tr><td><p>      - Nguyên giá</p></td><td><p>231</p></td><td></td><td></td><td></td></tr><tr><td><p>      - Giá trị hao mòn luỹ kế (*)</p></td><td><p>232</p></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td><p>(…)</p></td><td><p>(…)</p></td></tr><tr><td><p><strong>IV. Tài sản dở dang dài hạn </strong></p><p>1. Chi phí sản xuất, kinh doanh dở dang dài hạn </p><p>2. Chi phí xây dựng cơ bản dở dang</p></td><td><p><strong>240</strong></p><p>241</p><p>242</p></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td></tr><tr><td><p><strong>V. Đầu tư tài chính dài hạn</strong></p></td><td><p><strong>250</strong></p></td><td></td><td></td><td></td></tr><tr><td><p>1. Đầu tư vào công ty con </p></td><td><p>251</p></td><td></td><td></td><td></td></tr><tr><td><p>2. Đầu tư vào công ty liên doanh, liên kết</p></td><td><p>252</p></td><td></td><td></td><td></td></tr><tr><td><p>3. Đầu tư góp vốn vào đơn vị khác</p><p>4. Dự phòng đầu tư tài chính dài hạn (*)</p></td><td><p>253</p><p>254</p></td><td></td><td></td><td></td></tr><tr><td><p>5. Đầu tư nắm giữ đến ngày đáo hạn</p></td><td><p>255</p></td><td></td><td><p>(…)</p></td><td><p>(…)</p></td></tr><tr><td><p><strong>VI. Tài sản dài hạn khác</strong></p></td><td><p><strong>260</strong></p></td><td></td><td></td><td></td></tr><tr><td><p>1. Chi phí trả trước dài hạn</p></td><td><p>261</p></td><td></td><td></td><td></td></tr><tr><td><p>2. Tài sản thuế thu nhập hoãn lại</p></td><td><p>262</p></td><td></td><td></td><td></td></tr><tr><td><p>3. Thiết bị, vật tư, phụ tùng thay thế dài hạn</p></td><td><p>263</p></td><td></td><td></td><td></td></tr><tr><td><p>4. Tài sản dài hạn khác</p></td><td><p>268</p></td><td></td><td></td><td></td></tr><tr><td><p><strong>TỔNG CỘNG TÀI SẢN (270 = 100 + 200)</strong></p></td><td><p><strong>270</strong></p></td><td></td><td></td><td></td></tr><tr><td><p><strong>C - NỢ PHẢI TRẢ</strong></p></td><td><p><strong>300</strong></p></td><td></td><td></td><td></td></tr><tr><td><p><strong>I. Nợ ngắn hạn</strong></p></td><td><p><strong>310</strong></p></td><td></td><td></td><td></td></tr><tr><td><p>1. Phải trả người bán ngắn hạn</p></td><td><p>311</p></td><td></td><td></td><td></td></tr><tr><td><p>2. Người mua trả tiền trước ngắn hạn</p></td><td><p>312</p></td><td></td><td></td><td></td></tr><tr><td><p>3. Thuế và các khoản phải nộp Nhà nước</p></td><td><p>313</p></td><td></td><td></td><td></td></tr><tr><td><p>4. Phải trả người lao động</p></td><td><p>314</p></td><td></td><td></td><td></td></tr><tr><td><p>5. Chi phí phải trả ngắn hạn</p></td><td><p>315</p></td><td></td><td></td><td></td></tr><tr><td><p>6. Phải trả nội bộ ngắn hạn</p></td><td><p>316</p></td><td></td><td></td><td></td></tr><tr><td><p>7. Phải trả theo tiến độ kế hoạch hợp đồng xây dựng</p></td><td><p>317</p></td><td></td><td></td><td></td></tr><tr><td><p>8. Doanh thu chưa thực hiện ngắn hạn </p></td><td><p>318</p></td><td></td><td></td><td></td></tr><tr><td><p>9. Phải trả ngắn hạn khác</p></td><td><p>319</p></td><td></td><td></td><td></td></tr><tr><td><p>10. Vay và nợ thuê tài chính ngắn hạn</p></td><td><p>320</p></td><td></td><td></td><td></td></tr><tr><td><p>11. Dự phòng phải trả ngắn hạn </p></td><td><p>321</p></td><td></td><td></td><td></td></tr><tr><td><p>12. Quỹ khen thưởng, phúc lợi </p></td><td><p>322</p></td><td></td><td></td><td></td></tr><tr><td><p>13. Quỹ bình ổn giá</p></td><td><p>323</p></td><td></td><td></td><td></td></tr><tr><td><p>14. Giao dịch mua bán lại trái phiếu Chính phủ</p></td><td><p>324</p></td><td></td><td></td><td></td></tr><tr><td><p><strong>II. Nợ dài hạn</strong></p></td><td><p><strong>330</strong></p></td><td></td><td></td><td></td></tr><tr><td><p>1. Phải trả người bán dài hạn</p></td><td><p>331</p></td><td></td><td></td><td></td></tr><tr><td><p>2. Người mua trả tiền trước dài hạn</p></td><td><p>332</p></td><td></td><td></td><td></td></tr><tr><td><p>3. Chi phí phải trả dài hạn</p></td><td><p>333</p></td><td></td><td></td><td></td></tr><tr><td><p>4. Phải trả nội bộ về vốn kinh doanh</p></td><td><p>334</p></td><td></td><td></td><td></td></tr><tr><td><p>5. Phải trả nội bộ dài hạn</p></td><td><p>335</p></td><td></td><td></td><td></td></tr><tr><td><p>6. Doanh thu chưa thực hiện dài hạn </p></td><td><p>336</p></td><td></td><td></td><td></td></tr><tr><td><p>7. Phải trả dài hạn khác</p></td><td><p>337</p></td><td></td><td></td><td></td></tr><tr><td><p>8. Vay và nợ thuê tài chính dài hạn </p></td><td><p>338</p></td><td></td><td></td><td></td></tr><tr><td><p>9. Trái phiếu chuyển đổi</p></td><td><p>339</p></td><td></td><td></td><td></td></tr><tr><td><p>10. Cổ phiếu ưu đãi</p></td><td><p>340</p></td><td></td><td></td><td></td></tr><tr><td><p>11. Thuế thu nhập hoãn lại phải trả </p></td><td><p>341</p></td><td></td><td></td><td></td></tr><tr><td><p>12. Dự phòng phải trả dài hạn </p></td><td><p>342</p></td><td></td><td></td><td></td></tr><tr><td><p>13. Quỹ phát triển khoa học và công nghệ</p></td><td><p>343</p></td><td></td><td></td><td></td></tr><tr><td><p><strong>D - VỐN CHỦ SỞ HỮU</strong></p></td><td><p><strong>400</strong></p></td><td></td><td></td><td></td></tr><tr><td><p><strong>I. Vốn chủ sở hữu</strong></p></td><td><p><strong>410</strong></p></td><td></td><td></td><td></td></tr><tr><td><p>1. Vốn góp của chủ sở hữu</p><p>    - Cổ phiếu phổ thông có quyền biểu quyết</p><p>    - Cổ phiếu ưu đãi</p></td><td><p>411</p><p>411a</p><p>411b</p></td><td></td><td></td><td></td></tr><tr><td><p>2. Thặng dư vốn cổ phần</p></td><td><p>412</p></td><td></td><td></td><td></td></tr><tr><td><p>3. Quyền chọn chuyển đổi trái phiếu</p></td><td><p>413</p></td><td></td><td></td><td></td></tr><tr><td><p>4. Vốn khác của chủ sở hữu </p></td><td><p>414</p></td><td></td><td></td><td></td></tr><tr><td><p>5. Cổ phiếu quỹ (*)</p></td><td><p>415</p></td><td></td><td><p>(...)</p></td><td><p>(...)</p></td></tr><tr><td><p>6. Chênh lệch đánh giá lại tài sản</p></td><td><p>416</p></td><td></td><td></td><td></td></tr><tr><td><p>7. Chênh lệch tỷ giá hối đoái</p></td><td><p>417</p></td><td></td><td></td><td></td></tr><tr><td><p>8. Quỹ đầu tư phát triển</p></td><td><p>418</p></td><td></td><td></td><td></td></tr><tr><td><p>9. Quỹ hỗ trợ sắp xếp doanh nghiệp</p></td><td><p>419</p></td><td></td><td></td><td></td></tr><tr><td><p>10. Quỹ khác thuộc vốn chủ sở hữu</p></td><td><p>420</p></td><td></td><td></td><td></td></tr><tr><td><p>11. Lợi nhuận sau thuế chưa phân phối</p><p>     - LNST chưa phân phối lũy kế đến cuối kỳ trước</p><p>     - LNST chưa phân phối kỳ này</p></td><td><p>421</p><p>421a</p><p>421b</p></td><td></td><td></td><td></td></tr><tr><td><p>12. Nguồn vốn đầu tư XDCB</p></td><td><p>422</p></td><td></td><td></td><td></td></tr><tr><td><p><strong>II. Nguồn kinh phí và quỹ khác</strong></p></td><td><p><strong>430</strong></p></td><td></td><td></td><td></td></tr><tr><td><p>  1. Nguồn kinh phí </p></td><td><p>431</p></td><td></td><td></td><td></td></tr><tr><td><p>  2. Nguồn kinh phí đã hình thành TSCĐ</p></td><td><p>432</p></td><td></td><td></td><td></td></tr><tr><td><p><strong>TỔNG CỘNG NGUỒN VỐN (440 = 300 + 400)</strong></p></td><td><p><strong>440</strong></p></td><td></td><td></td><td></td></tr></table><p><strong>                                                                </strong><em>Lập, ngày ... tháng ... năm ...</em></p><table><tr><td><p><strong>Người lập biểu</strong></p></td><td><p><strong>Kế toán trưởng</strong></p></td><td><p><strong>Giám đốc</strong></p></td></tr><tr><td><p>(Ký, họ tên)</p><p>      - Số chứng chỉ hành nghề;</p><p>- Đơn vị cung cấp dịch vụ kế toán</p></td><td><p>(Ký, họ tên)</p></td><td><p>(Ký, họ tên, đóng dấu)</p></td></tr></table><p><strong><em>Ghi chú:</em></strong></p><ol><li><em>Những chỉ tiêu không có số liệu được miễn trình bày nhưng không được đánh lại “Mã số” chỉ tiêu.</em></li><li><em>Số liệu trong các chỉ tiêu có dấu (*) được ghi bằng số âm dưới hình thức ghi trong ngoặc đơn (...).</em></li><li><em>Đối với doanh nghiệp có kỳ kế toán năm là năm dương lịch (X) thì “Số cuối năm“ có thể ghi là “31.12.X“; “Số đầu năm“ có thể ghi là “01.01.X“. </em></li></ol><p><em>(4) Đối với người lập biểu là các đơn vị dịch vụ kế toán phải ghi rõ Số chứng chỉ hành nghề,  tên và địa chỉ Đơn vị cung cấp dịch vụ kế toán. Người lập biểu là cá nhân ghi rõ Số chứng chỉ hành nghề.</em></p>');
                                                    });
                                                }
                                            });
                                        </script>
                                        <div class="align-left" style="padding-top: 10px;">
                                            <a href="Xemthongke.html"><button type="button"
                                                    class="btn custom-btn d-inline-block ml-4 mb-3"
                                                    style="padding: 10px 30px; background: #6c757d; color: white;">Quay
                                                    lại</button></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <nav aria-label="Page navigation example">
                                <ul class="pagination pagination-custom" id="pagination-wrapper">

                                </ul>
                            </nav>
                            <!-- <div class="align-left">
                                <a href="Xemthongke.html"><button type="button"
                                        class="btn custom-btn d-inline-block ml-4 mb-3"
                                        style="padding: 10px 30px; background: #9BBEC8; color: white;">Quay
                                        lại</button></a>
                            </div> -->
                        </div>

                    </div>

                </div>

            </div>

        </div>
    </div>
    </div>
    </div>

    <!-- Required Js -->
    <script src="assets/js/vendor-all.min.js"></script>
    <script src="assets/plugins/bootstrap/js/bootstrap.min.js"></script>
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
    <style>
        .custom-dropdown .btn {
            background-color: #FFFFFF;
            /* White background */
            border: 1px solid #D0D5DD;
            /* Border color */
            border-radius: 0.5rem;
            font-family: 'Inter';
            font-style: normal;
            /* width: 150px; */
            color: #667085
                /* Rounded corners */
        }

        /* Optional: if you want to style the dropdown menu */
        .custom-dropdown .dropdown-menu {
            border-color: #D0D5DD;
            border-radius: 0.5rem;
            font-family: 'Inter';
            font-style: normal;
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

        .btn-third {
            display: flex;
            justify-content: center;
            align-items: center;
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

        .form-check-label-tttv {
            font-family: 'Inter';
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 21px;
            /* identical to box height, or 150% */
            letter-spacing: 0.1px;
            color: #000000;

        }
    </style>
    <!-- tạo active cho menu -->
    <style>
        .menu-item.active {
            background-color: #E8EDF0;
            margin-left: 15px;
            margin-right: 15px;
            border-radius: 5px;
        }

        .menu-item.active a {
            color: #164863;
            /* Màu xanh cho icon và chữ khi active */
        }
    </style>

    <script>

        function submitForm() {
            // Logic to handle form submission here
            // ...

            // Close the confirmation modal if it's still open
            $('#confirmationModal').modal('hide');

            // Show success modal
            $('#successModal').modal('show');
        }


        document.getElementById('baoCao').addEventListener('submitBaoCao', function(event) {
            // Ngăn form thực hiện hành động mặc định
            event.preventDefault();
            $('#confirmationModal').modal('show');
        });

        document.addEventListener('DOMContentLoaded', function () {
            var loaiBaoCaoButton = document.getElementById('loaiBaoCaoButton');
            var yearButton = document.getElementById('yearButton');

            // Tạo dropdown chọn tháng
            var loaiBaoCaos = ["Báo cáo kết quả hoạt động kinh doanh", "Báo cáo lưu chuyển tiền tệ", "Thuyết minh báo cáo tài chính"];
            var loaiBaoCaoOptions = '';
            // var loaiBaoCaoOptions = '<a class="dropdown-item" href="#" data-value="">Tất cả tháng </a>';
            loaiBaoCaos.forEach(function (loaiBaoCao, index) {
                loaiBaoCaoOptions += '<a class="dropdown-item" href="#" data-value="' + (index + 1) + '">' + loaiBaoCao + '</a>';
            });
            var loaiBaoCaoDropdown = document.getElementById('loaiBaoCaoDropdown');
            loaiBaoCaoDropdown.innerHTML = loaiBaoCaoOptions;

            // Tạo dropdown chọn năm
            var startYear = 1900; // Năm bắt đầu
            var endYear = new Date().getFullYear(); // Năm hiện tại
            // Tạo dropdown chọn năm với tùy chọn bỏ lọc
            var yearOptions = '<a class="dropdown-item" href="#" data-value="">Tất cả năm</a>';
            for (var year = endYear; year >= startYear; year--) {
                yearOptions += '<a class="dropdown-item" href="#" data-value="' + year + '">' + year + '</a>';
            }
            var yearDropdown = document.getElementById('yearDropdown');
            yearDropdown.innerHTML = yearOptions;

            // Xử lý sự kiện chọn tháng
            $('#loaiBaoCaoDropdown').on('click', '.dropdown-item', function () {
                loaiBaoCaoButton.textContent = this.textContent;
                currentloaiBaoCao = $(this).data('value'); // Lưu trữ giá trị tháng đã chọn
                searchAndFilter(); // Gọi lại hàm lọc
            });

            // Xử lý sự kiện chọn năm
            $('#yearDropdown').on('click', '.dropdown-item', function () {
                yearButton.textContent = this.textContent;
                currentYear = $(this).data('value'); // Lưu trữ giá trị năm đã chọn
                searchAndFilter(); // Gọi lại hàm lọc
            });

        });
    </script>

<style>
    body {
        margin: 0; /* Loại bỏ margin mặc định của body */
    }
    .btn-primary {
        color: #fff;
        background-color: #427D9D;
        border-color: #164863;
    }

    .btn-primary1 {
        color: #fff;
        background-color: #9BBEC8;
        border-color: #9BBEC8;
    }

    .header {
        background-color: #FFFFFF;
        display: flex;
        position: fixed; /* Đặt vị trí của header là cố định */
        width: 100%; /* Chiều rộng 100% của header */
        height: 80px;
        z-index: 1000; /* Đảm bảo header nằm trên cùng */
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

    /* Tạo kiểu cho dropdown menu */
    .dropdown-style {
        max-height: 150px; /* Chiều cao tối đa cho phép scroll */
        overflow-y: auto; /* Cho phép scroll nếu nội dung vượt quá chiều cao tối đa */
    }

    /* Style for the 'Gửi báo cáo' button */
.btn-xac-nhan {
    background-color: #28a745; /* Bootstrap green color */
    border-color: #28a745;
    color: #fff; /* White text */

}

/* Style for the 'Hủy bỏ' button */
.btn-huy-bo {
    background-color: #6c757d; /* Bootstrap gray color */
    border-color: #6c757d;
    color: #fff; /* White text */
}

</style>

<!-- Success Modal -->
<div class="modal fade" id="successModal" tabindex="-1" role="dialog" aria-labelledby="successModalTitle" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="successModalTitle">Thành công</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                Báo cáo đã được gửi thành công.
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-huy-bo" data-dismiss="modal">Đóng</button>
            </div>
        </div>
    </div>
</div>


<!-- Modal -->
<div class="modal fade" id="confirmationModal" tabindex="-1" role="dialog" aria-labelledby="modalTitle" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalTitle">Xác nhận</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          Bạn có chắc chắn muốn gửi báo cáo này không?
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-huy-bo" data-dismiss="modal">Hủy bỏ</button>
          <button type="button" class="btn btn-xac-nhan" onclick="submitForm()">Xác nhận</button>
        </div>
      </div>
    </div>
  </div>
  

</body>



</html>