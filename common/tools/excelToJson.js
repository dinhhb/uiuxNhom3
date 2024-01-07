// Dữ liệu dưới dạng chuỗi, mỗi dòng cách nhau bằng '\n' và mỗi giá trị cách nhau bằng '\t'.
const data = `1	Nguyễn Thu Trang	Dịch vụ nước	Dịch Vụ Cơ Bản	25/12/2023	800 000	Đã đóng	s2
2	Phạm Văn Cường	Dịch vụ điện	Dịch Vụ Cơ Bản	27/12/2023	1 200 000	Chưa đóng	s1
3	Đỗ Văn Đức	Dịch vụ Internet	Dịch Vụ Cơ Bản	17/12/2023	500 000	Đã đóng	s1
4	Nguyễn Văn Hải	Dịch vụ An ninh	Dịch Vụ An Ninh và Bảo Vệ	05/12/2023	700 000	Chưa đóng	s1
5	Phạm Văn Tài	Gửi xe máy	Dịch Vụ Gửi Xe và Đỗ Xe	14/12/2023	100 000	Đã đóng	s1
6	Lê Thị Mai	Dịch Vụ Thu Gom Rác	Dịch Vụ Cơ Bản	09/12/2023	100 000	Đã đóng	s1
7	Nguyễn Thu Trang	Dịch Vụ Bảo Vệ	Dịch Vụ An Ninh và Bảo Vệ	29/12/2023	560 000	Đã đóng	s1
8	Trần Thị Bình	Dịch Vụ Gym	Dịch Vụ Giải Trí và Thể Thao	18/12/2023	700 000	Chưa đóng	s1
9	Đỗ Văn Đức	Bảo Hiểm Chung Cư	Dịch Vụ Bảo Hiểm và An Toàn	31/12/2023	200 000	Đã đóng	s2
10	Nguyễn Văn Hải	Bảo Hiểm Cháy Nổ	Dịch Vụ Bảo Hiểm và An Toàn	13/12/2023	250 000	Chưa đóng	s1
11	Trần Thị Thơ	Bảo Hiểm Tai Nạn	Dịch Vụ Bảo Hiểm và An Toàn	04/12/2023	450 000	Chưa đóng	s2
12	Hoàng Thị Tâm	Bảo Hiểm Xe Cộ	Dịch Vụ Bảo Hiểm và An Toàn	03/12/2023	320 000	Đã đóng	s2
13	Nguyễn Văn Bảo	Dịch Vụ Sửa Chữa	Dịch Vụ Bảo Dưỡng và Sửa Chữa	01/12/2023	120 000	Đã đóng	s2
14	Nguyễn Thu Trang	Bảo Dưỡng Thang Máy	Dịch Vụ Bảo Dưỡng và Sửa Chữa	09/12/2023	100 000	Chưa đóng	s1
15	Trần Thị Bình	Bảo Dưỡng Cảnh Quan	Dịch Vụ Bảo Dưỡng và Sửa Chữa	21/12/2023	100 000	Chưa đóng	s1
16	Đỗ Văn Đức	Bảo Dưỡng Hệ Thống Cấp Nước	Dịch Vụ Bảo Dưỡng và Sửa Chữa	10/12/2023	100 000	Chưa đóng	s2
17	Lê Thị Hương	Bảo Dưỡng Hệ Thống Điện	Dịch Vụ Bảo Dưỡng và Sửa Chữa	25/12/2023	100 000	Chưa đóng	s1
18	Phạm Văn Tài	Dịch vụ nước	Dịch Vụ Cơ Bản	30/11/2023	800 000	Đã đóng	s2
19	Đỗ Văn Khánh	Dịch vụ điện	Dịch Vụ Cơ Bản	30/11/2023	1 200 000	Chưa đóng	s2
20	Trần Thị Tú	Dịch vụ Internet	Dịch Vụ Cơ Bản	28/11/2023	500 000	Chưa đóng	s2
21	Lê Văn An	Dịch vụ An ninh	Dịch Vụ An Ninh và Bảo Vệ	03/11/2023	700 000	Đã đóng	s1
22	Trần Thị Bình	Gửi xe máy	Dịch Vụ Gửi Xe và Đỗ Xe	27/11/2023	100 000	Đã đóng	s1
23	Đỗ Văn Đức	Dịch Vụ Thu Gom Rác	Dịch Vụ Cơ Bản	27/11/2023	100 000	Chưa đóng	s2
24	Lê Thị Hương	Dịch Vụ Bảo Vệ	Dịch Vụ An Ninh và Bảo Vệ	03/11/2023	560 000	Đã đóng	s1
25	Mai Quốc Bảo	Dịch Vụ Gym	Dịch Vụ Giải Trí và Thể Thao	26/11/2023	700 000	Chưa đóng	s2
26	Hoàng Chi Mai	Bảo Hiểm Chung Cư	Dịch Vụ Bảo Hiểm và An Toàn	05/11/2023	200 000	Đã đóng	s2
27	Lê Thanh Hằng	Bảo Hiểm Cháy Nổ	Dịch Vụ Bảo Hiểm và An Toàn	04/11/2023	250 000	Đã đóng	s2
28	Phan Công Vinh	Bảo Hiểm Tai Nạn	Dịch Vụ Bảo Hiểm và An Toàn	14/11/2023	450 000	Đã đóng	s1
29	Vũ/Võ Linh Chi	Bảo Hiểm Xe Cộ	Dịch Vụ Bảo Hiểm và An Toàn	22/11/2023	320 000	Đã đóng	s1
30	Giang Uyển Nhi	Dịch Vụ Sửa Chữa	Dịch Vụ Bảo Dưỡng và Sửa Chữa	26/11/2023	120 000	Đã đóng	s2
31	Tô Ý Nhiên	Bảo Dưỡng Thang Máy	Dịch Vụ Bảo Dưỡng và Sửa Chữa	15/11/2023	100 000	Đã đóng	s2
32	Huỳnh/Hoàng Chi Mai	Bảo Dưỡng Cảnh Quan	Dịch Vụ Bảo Dưỡng và Sửa Chữa	04/11/2023	100 000	Chưa đóng	s1
33	Hàn Thúy Vân	Bảo Dưỡng Hệ Thống Cấp Nước	Dịch Vụ Bảo Dưỡng và Sửa Chữa	07/11/2023	100 000	Đã đóng	s1
34	Khuất Xuân Mai	Bảo Dưỡng Hệ Thống Điện	Dịch Vụ Bảo Dưỡng và Sửa Chữa	12/11/2023	100 000	Chưa đóng	s1
35	Nguyễn An Duy	Dịch vụ nước	Dịch Vụ Cơ Bản	24/10/2023	800 000	Đã đóng	s1
36	Bùi Hoài An	Dịch vụ điện	Dịch Vụ Cơ Bản	26/10/2023	1 200 000	Đã đóng	s1
37	Hàn Hải Triều	Dịch vụ Internet	Dịch Vụ Cơ Bản	26/10/2023	500 000	Chưa đóng	s2
38	Đinh Hoàng Anh	Dịch vụ An ninh	Dịch Vụ An Ninh và Bảo Vệ	03/10/2023	700 000	Đã đóng	s2
39	Thái Mỹ Dung	Gửi xe máy	Dịch Vụ Gửi Xe và Đỗ Xe	28/10/2023	100 000	Chưa đóng	s1
40	Triệu Đào Trang	Dịch Vụ Thu Gom Rác	Dịch Vụ Cơ Bản	31/10/2023	100 000	Chưa đóng	s1
41	Khương Kiên Trung	Dịch Vụ Bảo Vệ	Dịch Vụ An Ninh và Bảo Vệ	22/10/2023	560 000	Đã đóng	s2
42	Hồ An Duy	Dịch Vụ Gym	Dịch Vụ Giải Trí và Thể Thao	17/10/2023	700 000	Chưa đóng	s1
43	Trần Văn Khoa	Bảo Hiểm Chung Cư	Dịch Vụ Bảo Hiểm và An Toàn	07/10/2023	200 000	Chưa đóng	s2
44	Triệu Thanh Hằng	Bảo Hiểm Cháy Nổ	Dịch Vụ Bảo Hiểm và An Toàn	27/10/2023	250 000	Đã đóng	s1`;

// Chia dữ liệu thành một mảng các dòng.
const lines = data.trim().split('\n');

// Xử lý từng dòng và chuyển đổi chúng thành đối tượng.
const result = lines.map(line => {
    const [id, tenChuHo, tenDichVu, loaiDichVu, hanDong, soTien, tinhTrang, canHo] = line.split('\t');
    return {
        id: Number(id),
        tenChuHo,
        tenDichVu,
        loaiDichVu,
        hanDong,
        soTien,
        tinhTrang,
        canHo
    };
});

// Chuyển đổi mảng đối tượng thành chuỗi JSON.
const json = JSON.stringify(result, null, 2); // 'null' và '2' để định dạng JSON cho dễ đọc.

// In ra hoặc sử dụng chuỗi JSON.
console.log(json);
