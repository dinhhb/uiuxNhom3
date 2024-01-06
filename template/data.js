// Dữ liệu dưới dạng chuỗi, mỗi dòng cách nhau bằng '\n' và mỗi giá trị cách nhau bằng '\t'.
const data = `1\tVũ Văn Trang\tNam\t02/12/1993\t0103832654\t084239031603\tBắc Phú, Sóc Sơn, Hà Nội\tGiáo viên\tXã Tây Bắc, Huyện Long Biên, Hải Phòng\t02/03/2023\t18/04/2023\tĐi nghỉ mát hoặc du lịch.\ts2\t0
2\tLê Công Minh\tNữ\t26/08/1989\t0438771365\t003198212513\tBắc Phú, Sóc Sơn, Hà Nội\tBác sĩ\tXã Tây Bắc, Huyện Tây Hồ, Hải Phòng\t03/05/2023\t08/06/2023\tCông tác.\ts1\t0
3\tPhan Thành Dương\tNữ\t26/03/1984\t0355817526\t049156119984\tBắc Phú, Sóc Sơn, Hà Nội\tY tá\tXã Minh Đức, Huyện Tây Hồ, Cần Thơ\t03/06/2023\t13/06/2023\tThăm bè bạn hoặc người thân.\ts1\t0
4\tLê Đức Bình\tNữ\t25/04/1993\t0449948650\t049106868261\tBắc Phú, Sóc Sơn, Hà Nội\tKỹ sư\tXã Tây Bắc, Huyện Đống Đa, Bình Dương\t03/06/2023\t18/07/2023\tĐiều trị y tế hoặc nằm viện.\ts1\t1
5\tVũ Hữu Minh\tNam\t04/11/1990\t0458037641\t002283103668\tBắc Phú, Sóc Sơn, Hà Nội\tLập trình viên\tXã Thượng Đức, Huyện Ba Đình, Hải Dương\t03/10/2023\t05/10/2023\tTham dự đám cưới hoặc sự kiện gia đình.\ts1\t0
6\tNguyễn Thành Bình\tNam\t26/05/1986\t0800329919\t084216304265\tBắc Phú, Sóc Sơn, Hà Nội\tKiến trúc sư\tXã Đại Phú, Huyện Sóc Sơn, Hải Dương\t03/12/2023\t18/01/2024\tTheo đuổi mục tiêu giáo dục, như học kỳ ở nước ngoài.\ts1\t0
7\tVõ Đức Bình\tNam\t09/05/1987\t0235481724\t060168453203\tBắc Phú, Sóc Sơn, Hà Nội\tThợ xây\tXã Phú Lâm, Huyện Hai Bà Trưng, Bình Dương\t04/04/2023\t17/04/2023\tCông việc ở thành phố hoặc quốc gia khác.\ts1\t0
8\tHoàng Văn Kiên\tNam\t10/12/1998\t0729954186\t093184197259\tBắc Phú, Sóc Sơn, Hà Nội\tThợ hàn\tXã Đông Hải, Huyện Ba Đình, Hà Nội\t04/11/2023\t10/11/2023\tTham dự hội nghị hoặc phát triển chuyên nghiệp.\ts1\t1
9\tPhan Thị Nam\tNữ\t19/12/1999\t0186735551\t058212880352\tBắc Phú, Sóc Sơn, Hà Nội\tĐầu bếp\tXã Bắc Phú, Huyện Hai Bà Trưng, Đà Nẵng\t05/02/2023\t10/03/2023\tTham gia chương trình tình nguyện.\ts2\t0
10\tHoàng Thành Minh\tNữ\t31/03/1998\t0497041759\t072162776417\tBắc Phú, Sóc Sơn, Hà Nội\tPhục vụ nhà hàng\tXã Đại Phú, Huyện Tây Hồ, Gia Lai\t05/09/2023\t17/10/2023\tNghĩa vụ quân sự.\ts1\t1
11\tHuỳnh Đức Hải\tNam\t19/03/2002\t0914189079\t053183436818\tBắc Phú, Sóc Sơn, Hà Nội\tLao động phổ thông\tXã Đại Phú, Huyện Hai Châu, Hải Phòng\t05/10/2023\t27/10/2023\tNghĩa vụ bồi thẩm đoàn.\ts2\t0
12\tLê Thành Nam\tNam\t08/11/1997\t0706960594\t077111314571\tBắc Phú, Sóc Sơn, Hà Nội\tNhân viên văn phòng\tXã Nam Sơn, Huyện Tây Hồ, Nghệ An\t06/02/2023\t01/03/2023\tNghỉ phép nghiên cứu.\ts2\t0
13\tHuỳnh Minh Anh\tNữ\t12/08/1993\t0269840364\t091168730956\tBắc Phú, Sóc Sơn, Hà Nội\tNhân viên bán hàng\tXã Đại Phú, Huyện Ba Đình, Bình Dương\t07/12/2023\t30/12/2023\tChuyến đi nghiên cứu học thuật hoặc khoa học.\ts2\t1
14\tVũ Đức Minh\tNam\t07/02/1989\t0491379892\t075205809671\tBắc Phú, Sóc Sơn, Hà Nội\tNhân viên ngân hàng\tXã Minh Đức, Huyện Sóc Sơn, Đà Nẵng\t08/05/2023\t26/05/2023\tThực tập hoặc học bổng.\ts1\t0
15\tLê Thị Linh\tNam\t01/12/1989\t0509700946\t030219219497\tBắc Phú, Sóc Sơn, Hà Nội\tTài xế xe tải\tXã Đại Phú, Huyện Hoàn Kiếm, Gia Lai\t08/06/2023\t13/07/2023\tDu lịch phiêu lưu hoặc khám phá.\ts1\t1
16\tPhan Quang Trang\tNam\t19/02/2003\t0344446991\t044159438526\tBắc Phú, Sóc Sơn, Hà Nội\tTài xế taxi\tXã Trung Hưng, Huyện Hoàn Kiếm, Bình Dương\t08/07/2023\t20/08/2023\tHành hương tôn giáo hoặc tu tập tâm linh.\ts2\t0
17\tHoàng Đức Kiên\tNam\t07/12/1999\t0424639572\t048259781309\tBắc Phú, Sóc Sơn, Hà Nội\tLái xe buýt\tXã Đại Phú, Huyện Ba Đình, Cần Thơ\t09/06/2023\t15/06/2023\tChăm sóc người thân ốm đau.\ts1\t1
18\tHoàng Minh Hải\tNữ\t19/08/1999\t0151528880\t069294614855\tBắc Phú, Sóc Sơn, Hà Nội\tCảnh sát\tXã Phú Lâm, Huyện Long Biên, TP Hồ Chí Minh\t09/10/2023\t03/11/2023\tNghỉ tang do tử vong trong gia đình.\ts2\t1
19\tNguyễn Minh Hải\tNam\t31/05/1994\t0514900359\t003157030244\tBắc Phú, Sóc Sơn, Hà Nội\tLính cứu hỏa\tXã Phú Lâm, Huyện Hai Bà Trưng, Nghệ An\t09/12/2023\t25/12/2023\tNghỉ thai sản hoặc nuôi con nhỏ.\ts2\t0
20\tPhạm Ngọc Kiên\tNữ\t29/10/1981\t0244887596\t083118733673\tBắc Phú, Sóc Sơn, Hà Nội\tNhiếp ảnh gia\tXã Bắc Phú, Huyện Hoàn Kiếm, Thanh Hóa\t13/01/2023\t19/02/2023\tSửa chữa hoặc tu sửa nhà cần di dời tạm thời.\ts2\t0
21\tPhan Đức Trang\tNam\t04/05/1983\t0453501477\t026182074079\tBắc Phú, Sóc Sơn, Hà Nội\tNhà báo\tXã Hòa Minh, Huyện Đống Đa, Thanh Hóa\t14/05/2023\t30/06/2023\tSơ tán do thảm họa tự nhiên như lũ lụt hoặc bão.\ts1\t0
22\tPhạm Bảo Kiên\tNam\t13/12/2005\t0310021654\t089206934056\tBắc Phú, Sóc Sơn, Hà Nội\tBiên tập viên\tXã Bắc Phú, Huyện Hai Châu, Hải Dương\t14/10/2023\t09/11/2023\tViệc pháp lý hoặc xuất hiện tại tòa ở địa điểm khác.\ts1\t1
23\tVũ Đức Nam\tNữ\t02/04/2003\t0533326705\t008205676602\tBắc Phú, Sóc Sơn, Hà Nội\tĐạo diễn\tXã Nam Sơn, Huyện Hai Bà Trưng, Nghệ An\t15/05/2023\t09/06/2023\tDu lịch mùa lễ hội dài ngày.\ts2\t0
24\tVũ Thị Nam\tNam\t10/12/2002\t0768272756\t087275462300\tBắc Phú, Sóc Sơn, Hà Nội\tDiễn viên\tXã Đại Phú, Huyện Hai Bà Trưng, Đà Nẵng\t16/05/2023\t27/06/2023\tTham gia giải đấu thể thao hoặc sự kiện.\ts1\t1
25\tHuỳnh Thị Linh\tNam\t29/10/1997\t0271095344\t017199029863\tBắc Phú, Sóc Sơn, Hà Nội\tCa sĩ\tXã Hòa Minh, Huyện Cầu Giấy, Hải Dương\t16/08/2023\t02/09/2023\tTham gia vào hoạt động văn hóa hoặc nghệ thuật.\ts2\t1
26\tVũ Thành Linh\tNữ\t25/02/1998\t0824207215\t005220467526\tBắc Phú, Sóc Sơn, Hà Nội\tNhạc sĩ\tXã Phú Lâm, Huyện Đống Đa, Hà Nội\t17/02/2023\t21/03/2023\tTham dự trại hè hoặc tu tập.\ts2\t1
27\tPhan Minh Kiên\tNam\t25/07/1991\t0494725198\t025257593628\tBắc Phú, Sóc Sơn, Hà Nội\tHọa sĩ\tXã Phú Lâm, Huyện Ba Đình, TP Hồ Chí Minh\t18/04/2023\t01/05/2023\tTu dưỡng sức khỏe và tinh thần.\ts2\t1
28\tPhạm Bảo Anh\tNam\t14/02/2002\t0390328828\t071140311737\tBắc Phú, Sóc Sơn, Hà Nội\tNhà thiết kế thời trang\tXã Nam Sơn, Huyện Hai Bà Trưng, Thanh Hóa\t18/06/2023\t23/06/2023\tNghỉ phép cá nhân cho sự nghỉ ngơi và phục hồi.\ts1\t1
29\tVũ Ngọc Chi\tNam\t25/11/1981\t0529145029\t073232709058\tBắc Phú, Sóc Sơn, Hà Nội\tThợ may\tXã Đại Phú, Huyện Hai Châu, Hải Phòng\t19/03/2023\t28/03/2023\tTheo đuổi sở thích hoặc mục tiêu một cách chuyên sâu, như chuyến đi chụp ảnh.\ts1\t0
30\tPhan Đức Chi\tNam\t21/09/1981\t0263528342\t049262726379\tBắc Phú, Sóc Sơn, Hà Nội\tThợ làm tóc\tXã Đông Hải, Huyện Ba Đình, Đà Nẵng\t19/07/2023\t16/08/2023\tĐào bới khảo cổ hoặc nghiên cứu lịch sử.\ts2\t0
31\tPhạm Quang Chi\tNam\t19/05/1996\t0818680789\t064174943659\tBắc Phú, Sóc Sơn, Hà Nội\tChuyên viên làm đẹp\tXã Bắc Phú, Huyện Ba Đình, Hải Dương\t20/01/2023\t14/02/2023\tLàm việc mùa vụ ở khu vực khác.\ts2\t0
32\tHoàng Công Bình\tNam\t03/08/1994\t0405542541\t026268397434\tBắc Phú, Sóc Sơn, Hà Nội\tThợ sửa chữa điện tử\tXã Đông Hải, Huyện Cầu Giấy, Thanh Hóa\t21/01/2023\t24/02/2023\tChuyến đi săn hoặc câu cá kéo dài.\ts1\t0
33\tĐặng Văn Linh\tNam\t29/09/1989\t0245115767\t080105374516\tBắc Phú, Sóc Sơn, Hà Nội\tKỹ thuật viên máy tính\tXã Phú Lâm, Huyện Hai Châu, Hà Nội\t21/04/2023\t23/05/2023\tHoạt động chính trị hoặc vận động.\ts1\t1
34\tLê Thành Bình\tNữ\t28/05/1987\t0378372826\t068260811059\tBắc Phú, Sóc Sơn, Hà Nội\tNhân viên tiếp thị\tXã Thượng Đức, Huyện Đống Đa, Hải Dương\t21/09/2023\t02/11/2023\tTham gia chương trình cai nghiện hoặc phục hồi sức khỏe.\ts1\t1
35\tPhan Thành Nam\tNữ\t29/05/1998\t0571847246\t068260266856\tBắc Phú, Sóc Sơn, Hà Nội\tChuyên gia SEO\tXã Trung Hưng, Huyện Hai Châu, Cần Thơ\t21/10/2023\t26/11/2023\tTham gia chương trình truyền hình thực tế hoặc cuộc thi.\ts1\t0
36\tĐặng Văn Trang\tNữ\t19/06/1987\t0461443112\t052225441829\tBắc Phú, Sóc Sơn, Hà Nội\tNhà phân tích dữ liệu\tXã Đại Phú, Huyện Tây Hồ, Hải Phòng\t22/04/2023\t03/06/2023\tTham gia sự kiện từ thiện đường dài như marathon.\ts1\t0
37\tHuỳnh Ngọc Bình\tNam\t30/01/2002\t0132737326\t044201854972\tBắc Phú, Sóc Sơn, Hà Nội\tChuyên gia tư vấn\tXã Đông Hải, Huyện Hoàn Kiếm, Thanh Hóa\t22/05/2023\t11/07/2023\tHọc và thi cử kéo dài.\ts2\t1
38\tĐặng Bảo Minh\tNữ\t13/05/2001\t0463172124\t009286615595\tBắc Phú, Sóc Sơn, Hà Nội\tLuật sư\tXã Thượng Đức, Huyện Cầu Giấy, Cần Thơ\t24/05/2023\t11/07/2023\tDi dời tạm thời do bất ổn hoặc nguy hiểm trong khu vực.\ts2\t1
39\tPhạm Thành Nam\tNữ\t09/01/1985\t0794848708\t073258182525\tBắc Phú, Sóc Sơn, Hà Nội\tKế toán\tXã Tây Bắc, Huyện Tây Hồ, Nghệ An\t24/07/2023\t08/08/2023\tHoạt động thể thao chuyên nghiệp.\ts1\t1
40\tHuỳnh Văn Nam\tNữ\t29/07/1984\t0370067901\t023254628993\tBắc Phú, Sóc Sơn, Hà Nội\tThủ quỹ\tXã Đông Hải, Huyện Liên Chiểu, Hà Nội\t24/09/2023\t10/10/2023\tThực hiện hành trình thực hiện danh sách mong muốn cá nhân.\ts1\t1
41\tNguyễn Văn Chi\tNam\t13/05/1984\t0926896031\t087174209267\tBắc Phú, Sóc Sơn, Hà Nội\tQuản lý khách sạn\tXã Đại Phú, Huyện Cầu Giấy, Gia Lai\t24/11/2023\t15/12/2023\tNghỉ để viết sách hoặc theo đuổi dự án sáng tạo.\ts2\t1
42\tVũ Văn Trang\tNữ\t25/09/1980\t0512456814\t080207957640\tBắc Phú, Sóc Sơn, Hà Nội\tNhân viên lễ tân\tXã Minh Đức, Huyện Sóc Sơn, Đà Nẵng\t25/07/2023\t07/08/2023\tTham dự hàng loạt lễ hội hoặc buổi hòa nhạc.\ts1\t1
43\tHoàng Quang Nam\tNam\t20/08/1981\t0558622486\t091242641222\tBắc Phú, Sóc Sơn, Hà Nội\tHướng dẫn viên du lịch\tXã Bắc Phú, Huyện Hai Bà Trưng, Đà Nẵng\t26/11/2023\t12/12/2023\tTheo dõi đoàn kịch hoặc nhóm nhạc lưu diễn.\ts2\t1
44\tPhan Ngọc Chi\tNam\t22/03/1997\t0180135416\t007178635049\tBắc Phú, Sóc Sơn, Hà Nội\tPhi công\tXã Đại Phú, Huyện Tây Hồ, Gia Lai\t27/02/2023\t24/03/2023\tPhục vụ như một nhà ngoại giao hoặc tư vấn.\ts1\t1
45\tHuỳnh Đức Linh\tNữ\t22/02/1985\t0593182031\t089174191337\tBắc Phú, Sóc Sơn, Hà Nội\tTiếp viên hàng không\tXã Nam Sơn, Huyện Tây Hồ, Nghệ An\t27/11/2023\t10/01/2024\tTham gia chương trình huấn luyện sinh tồn.\ts2\t1
46\tPhan Thành Dương\tNam\t10/06/1985\t0182737885\t047109134283\tBắc Phú, Sóc Sơn, Hà Nội\tNhân viên an ninh sân bay\tXã Phú Lâm, Huyện Ba Đình, TP Hồ Chí Minh\t28/09/2023\t17/10/2023\tTiến hành nghiên cứu thực địa về môi trường.\ts2\t0
47\tNguyễn Quang Kiên\tNữ\t06/05/2000\t0746788046\t057234227648\tBắc Phú, Sóc Sơn, Hà Nội\tNhân viên kiểm tra hành lý\tXã Đại Phú, Huyện Ba Đình, Bình Dương\t28/10/2023\t15/11/2023\tPhẫu thuật thẩm mỹ hoặc tự chọn.\ts1\t0
48\tVũ Hữu Linh\tNữ\t12/07/1993\t0809171542\t041211334390\tBắc Phú, Sóc Sơn, Hà Nội\tNhà nghiên cứu khoa học\tXã Minh Đức, Huyện Sóc Sơn, Đà Nẵng\t29/01/2023\t26/02/2023\tTham gia sứ mệnh ngoại giao hoặc chương trình trao đổi.\ts1\t1
49\tLê Quang Minh\tNữ\t16/12/1992\t0613256529\t094224015995\tBắc Phú, Sóc Sơn, Hà Nội\tGiáo sư đại học\tXã Đại Phú, Huyện Hoàn Kiếm, Gia Lai\t29/06/2023\t15/07/2023\tTham gia tái hiện lịch sử hoặc lễ hội.\ts2\t1
50\tTrần Bảo Nam\tNữ\t30/07/1980\t0915368255\t023145403650\tBắc Phú, Sóc Sơn, Hà Nội\tSinh viên\tXã Minh Đức, Huyện Sóc Sơn, Đà Nẵng\t29/10/2023\t29/11/2023\tTham dự sự kiện công việc của đối tác.\ts1\t0`;

// Chia dữ liệu thành một mảng các dòng.
const lines = data.trim().split('\n');

// Xử lý từng dòng và chuyển đổi chúng thành đối tượng.
const result = lines.map(line => {
    const [id, hoTen, gioiTinh, ngaySinh, SDT, CCCD, DDThuongTru,ngheNghiep, DDTamVang,ngayBatDau,ngayKetThuc, lyDo,canHo,trangThai] = line.split('\t');
    return {
        id: Number(id),
        hoTen,
        gioiTinh,
        ngaySinh,
        SDT,
        CCCD,
        DDThuongTru,
        ngheNghiep,
        DDTamVang,
        ngayBatDau,
        ngayKetThuc,
        lyDo: lyDo || "",
        canHo,// Xử lý trường hợp 'lyDo' không tồn tại.
        trangThai
    };
});

// Chuyển đổi mảng đối tượng thành chuỗi JSON.
const json = JSON.stringify(result, null, 2); // 'null' và '2' để định dạng JSON cho dễ đọc.

// In ra hoặc sử dụng chuỗi JSON.
console.log(json);
