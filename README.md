# Phần mềm quản lý thu phí và hộ khẩu của 1 toà chung cư

## Giới thiệu

- Đây là bài tập lớn môn Giao diện và trải nghiệm người dùng IT4441 của nhóm HI03
<br>
- Các thành viên nhóm:
    - Hà Bửu Định - 20205200
    - Nguyễn Ngọc Ánh - 20205228
    - Nguyễn Thu Trang - 20205225
    - Nguyễn Thị Phương Trang - 20205224
<br>
- Đề bài
Xây dựng phần mềm quản lý thu phí và hộ khẩu của 1 toà chung cư. Trong đó, các phí bao gồm phí bảo hành, bảo trì chung cư; phí dịch vụ như tiền điện, nước, tiền gửi xe,…; quỹ vui chơi và các quỹ khác nhau (bắt buộc hoặc tự nguyện). Phí dịch vụ được thu tùy thuộc vào mục đích để ở hay kinh doanh. Cần quản lý việc hộ khẩu, tạm trú, tạm vắng để kiểm tra chéo với hộ khẩu công an. Phần mềm dành cho cả người quản lý tòa nhà và cư dân tại chung cư.
<br>
- Đối tượng sử dụng: 
    - Công an
    - Ban quản trị
    - Ban quản lý
    - Cư dân của khu chung cư

## Tài liệu
[Mẫu thử, Wireframe, UI style guide, ...](https://www.figma.com/files/project/113610996/HI_03?fuid=1298891856350322719)


## Các tính năng chính

[//]: # (Liệt kê các tính năng chính của dự án.)

- Ban quản lý:
    - Xem thống kê
    - Tạo báo cáo tài chính
    - Quản lý tạm trú, tạm vắng
    - Quản lý đóng phí
    - Thông báo thu phí
    - Xem ý kiến cư dân
- Ban quản trị:
    - Xem báo cáo tài chính
- Cư dân:
    - Đóng phí
    - Xem lịch sử thanh toán
    - Thông báo đóng phí
    - Khai báo tạm trú, tạm vắng
    - Phản ánh
- Công an:
    - Xem thông tin tạm trú, tạm vắng

## Cài Đặt và Sử Dụng

[//]: # (Cung cấp các bước cài đặt và sử dụng dự án.)

- Yêu cầu: đã cài đặt docker
- Chạy docker

```bash
docker-compose up -d
```
- Truy cập http://localhost:8080/index.html
- Kết thúc
```bash
docker compose down
```
