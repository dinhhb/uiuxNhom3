// Dữ liệu dưới dạng chuỗi, mỗi dòng cách nhau bằng '\n' và mỗi giá trị cách nhau bằng '\t'.
const data = `1\tS201\tDịch vụ nước\tDịch Vụ Cơ Bản\tChưa đóng\t800 000\t25/12/2023.						
2\tS201\tDịch vụ điện\tDịch Vụ Cơ Bản\tChưa đóng\t1 200 000\t14/12/2023.						
3\tS201\tDịch vụ Internet\tDịch Vụ Cơ Bản\tChưa đóng\t500 000\t22/12/2023.						
4\tS201\tDịch vụ An ninh\tDịch Vụ An Ninh và Bảo Vệ\tChưa đóng\t700 000\t18/12/2023.						
5\tS201\tGửi xe máy\tDịch Vụ Gửi Xe và Đỗ Xe\tChưa đóng\t100 000\t15/12/2023.						
6\tS201\tDịch Vụ Thu Gom Rác\tDịch Vụ Cơ Bản\tChưa đóng\t100 000\t09/12/2023.						
7\tS201\tDịch Vụ Bảo Vệ\tDịch Vụ An Ninh và Bảo Vệ\tChưa đóng\t560 000\t11/12/2023.						
8\tS201\tDịch Vụ Gym\tDịch Vụ Giải Trí và Thể Thao\tChưa đóng\t700 000\t15/12/2023.						
9\tS201\tBảo Hiểm Chung Cư\tDịch Vụ Bảo Hiểm và An Toàn\tChưa đóng\t200 000\t18/12/2023.						
10\tS201\tBảo Hiểm Cháy Nổ\tDịch Vụ Bảo Hiểm và An Toàn\tĐã đóng\t250 000\t11/12/2023.						
11\tS201\tBảo Hiểm Tai Nạn\tDịch Vụ Bảo Hiểm và An Toàn\tĐã đóng\t450 000\t28/12/2023.						
12\tS201\tBảo Hiểm Xe Cộ\tDịch Vụ Bảo Hiểm và An Toàn\tĐã đóng\t320 000\t13/12/2023.						
13\tS201\tDịch Vụ Sửa Chữa\tDịch Vụ Bảo Dưỡng và Sửa Chữa\tĐã đóng\t120 000\t10/12/2023.						
14\tS201\tBảo Dưỡng Thang Máy\tDịch Vụ Bảo Dưỡng và Sửa Chữa\tĐã đóng\t100 000\t08/12/2023.						
15\tS201\tBảo Dưỡng Cảnh Quan\tDịch Vụ Bảo Dưỡng và Sửa Chữa\tĐã đóng\t100 000\t24/12/2023.						
16\tS201\tBảo Dưỡng Hệ Thống Cấp Nước\tDịch Vụ Bảo Dưỡng và Sửa Chữa\tĐã đóng\t100 000\t05/12/2023.						
17\tS201\tBảo Dưỡng Hệ Thống Điện\tDịch Vụ Bảo Dưỡng và Sửa Chữa\tĐã đóng\t100 000\t19/12/2023.						
18\tS201\tDịch vụ nước\tDịch Vụ Cơ Bản\tĐã đóng\t800 000\t29/11/2023.						
19\tS201\tDịch vụ điện\tDịch Vụ Cơ Bản\tĐã đóng\t1 200 000\t17/11/2023.						
20\tS201\tDịch vụ Internet\tDịch Vụ Cơ Bản\tĐã đóng\t500 000\t17/11/2023.						
21\tS201\tDịch vụ An ninh\tDịch Vụ An Ninh và Bảo Vệ\tĐã đóng\t700 000\t17/11/2023.						
22\tS201\tGửi xe máy\tDịch Vụ Gửi Xe và Đỗ Xe\tĐã đóng\t100 000\t11/11/2023.						
23\tS201\tDịch Vụ Thu Gom Rác\tDịch Vụ Cơ Bản\tĐã đóng\t100 000\t05/11/2023.						
24\tS201\tDịch Vụ Bảo Vệ\tDịch Vụ An Ninh và Bảo Vệ\tĐã đóng\t560 000\t30/11/2023.						
25\tS201\tDịch Vụ Gym\tDịch Vụ Giải Trí và Thể Thao\tĐã đóng\t700 000\t07/11/2023.						
26\tS201\tBảo Hiểm Chung Cư\tDịch Vụ Bảo Hiểm và An Toàn\tĐã đóng\t200 000\t06/11/2023.						
27\tS201\tBảo Hiểm Cháy Nổ\tDịch Vụ Bảo Hiểm và An Toàn\tĐã đóng\t250 000\t18/11/2023.						
28\tS201\tBảo Hiểm Tai Nạn\tDịch Vụ Bảo Hiểm và An Toàn\tĐã đóng\t450 000\t16/11/2023.						
29\tS201\tBảo Hiểm Xe Cộ\tDịch Vụ Bảo Hiểm và An Toàn\tĐã đóng\t320 000\t20/11/2023.						
30\tS201\tDịch Vụ Sửa Chữa\tDịch Vụ Bảo Dưỡng và Sửa Chữa\tĐã đóng\t120 000\t16/11/2023.						
31\tS201\tBảo Dưỡng Thang Máy\tDịch Vụ Bảo Dưỡng và Sửa Chữa\tĐã đóng\t100 000\t18/11/2023.						
32\tS201\tBảo Dưỡng Cảnh Quan\tDịch Vụ Bảo Dưỡng và Sửa Chữa\tĐã đóng\t100 000\t03/11/2023.						
33\tS201\tBảo Dưỡng Hệ Thống Cấp Nước\tDịch Vụ Bảo Dưỡng và Sửa Chữa\tĐã đóng\t100 000\t03/11/2023.						
34\tS201\tBảo Dưỡng Hệ Thống Điện\tDịch Vụ Bảo Dưỡng và Sửa Chữa\tĐã đóng\t100 000\t24/11/2023.						
35\tS201\tDịch vụ nước\tDịch Vụ Cơ Bản\tĐã đóng\t800 000\t20/10/2023.						
36\tS201\tDịch vụ điện\tDịch Vụ Cơ Bản\tĐã đóng\t1 200 000\t23/10/2023.						
37\tS201\tDịch vụ Internet\tDịch Vụ Cơ Bản\tĐã đóng\t500 000\t28/10/2023.						
38\tS201\tDịch vụ An ninh\tDịch Vụ An Ninh và Bảo Vệ\tĐã đóng\t700 000\t03/10/2023.						
39\tS201\tGửi xe máy\tDịch Vụ Gửi Xe và Đỗ Xe\tĐã đóng\t100 000\t17/10/2023.						
40\tS201\tDịch Vụ Thu Gom Rác\tDịch Vụ Cơ Bản\tĐã đóng\t100 000\t20/10/2023.						
41\tS201\tDịch Vụ Bảo Vệ\tDịch Vụ An Ninh và Bảo Vệ\tĐã đóng\t560 000\t17/10/2023.						
42\tS201\tDịch Vụ Gym\tDịch Vụ Giải Trí và Thể Thao\tĐã đóng\t700 000\t23/10/2023.						
43\tS201\tBảo Hiểm Chung Cư\tDịch Vụ Bảo Hiểm và An Toàn\tĐã đóng\t200 000\t31/10/2023.						
44\tS201\tBảo Hiểm Cháy Nổ\tDịch Vụ Bảo Hiểm và An Toàn\tĐã đóng\t250 000\t01/10/2023.						
45\tS201\tBảo Hiểm Tai Nạn\tDịch Vụ Bảo Hiểm và An Toàn\tĐã đóng\t450 000\t06/10/2023.						
46\tS201\tBảo Hiểm Xe Cộ\tDịch Vụ Bảo Hiểm và An Toàn\tĐã đóng\t320 000\t23/10/2023.						
47\tS201\tDịch Vụ Sửa Chữa\tDịch Vụ Bảo Dưỡng và Sửa Chữa\tĐã đóng\t120 000\t29/10/2023.						
48\tS201\tBảo Dưỡng Thang Máy\tDịch Vụ Bảo Dưỡng và Sửa Chữa\tĐã đóng\t100 000\t04/10/2023.						
49\tS201\tBảo Dưỡng Cảnh Quan\tDịch Vụ Bảo Dưỡng và Sửa Chữa\tĐã đóng\t100 000\t29/10/2023.						
50\tS201\tBảo Dưỡng Hệ Thống Cấp Nước\tDịch Vụ Bảo Dưỡng và Sửa Chữa\tĐã đóng\t100 000\t23/10/2023.						
51\tS201\tBảo Dưỡng Hệ Thống Điện\tDịch Vụ Bảo Dưỡng và Sửa Chữa\tĐã đóng\t100 000\t23/10/2023.`;

// Chia dữ liệu thành một mảng các dòng.
const lines = data.trim().split('\n');

// Xử lý từng dòng và chuyển đổi chúng thành đối tượng.
const result = lines.map(line => {
    const [id, idHome, tenDichVu, loaiDichVu, trangThai, soTien, hanDong] = line.split('\t');
    return {
        id: Number(id),
        idHome,
        tenDichVu,
        loaiDichVu,
        trangThai,
        soTien,
        hanDong
    };
});

// Chuyển đổi mảng đối tượng thành chuỗi JSON.
const json = JSON.stringify(result, null, 2); // 'null' và '2' để định dạng JSON cho dễ đọc.

// In ra hoặc sử dụng chuỗi JSON.
console.log(json);
