<div class="header">
    <img src="../../assets/images/logo.png">
    <p style="color:#164863;padding-top:30px;padding-left:30px;line-height: 21px;font-style: normal;font-family: 'Inter';font-size:25px;font-weight: 600;">Soc Son Plaza</p>
    <a href=""><img src="../../assets/images/avatar.png" class="avatar">
    <div class="user-info">
        <p>Văn Thanh</p>
        <p class="subtitle">Ban quản lý</p>
    </div>
    </a>
</div>

<style>
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
</style>