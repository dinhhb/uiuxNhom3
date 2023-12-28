// Dữ liệu dưới dạng chuỗi, mỗi dòng cách nhau bằng '\n' và mỗi giá trị cách nhau bằng '\t'.
const data = `1\tVũ Thị Quân\tNam\t02/12/1993\t0103832654\t084239031603\tBắc Phú, Sóc Sơn, Hà Nội\tXã Tây Bắc, Huyện Long Biên, Hải Phòng\t2023/03/02\t2023/04/18\tĐi nghỉ mát hoặc du lịch.
2\tPhạm Thị Bảo\tNữ\t26/08/1989\t0438771365\t003198212513\tBắc Phú, Sóc Sơn, Hà Nội\tXã Tây Bắc, Huyện Tây Hồ, Hải Phòng\t2023/05/03\t2023/06/08\tCông tác.
3\tHoàng Phương Dung\tNữ\t26/03/1984\t0355817526\t049156119984\tBắc Phú, Sóc Sơn, Hà Nội\tXã Minh Đức, Huyện Tây Hồ, Cần Thơ\t2023/06/03\t2023/06/13\tThăm bè bạn hoặc người thân.
4\tVõ Ngọc Nhung\tNữ\t25/04/1993\t0449948650\t049106868261\tBắc Phú, Sóc Sơn, Hà Nội\tXã Tây Bắc, Huyện Đống Đa, Bình Dương\t2023/06/03\t2023/07/18\tĐiều trị y tế hoặc nằm viện.
5\tLê Khắc Khoa\tNam\t04/11/1990\t0458037641\t002283103668\tBắc Phú, Sóc Sơn, Hà Nội\tXã Thượng Đức, Huyện Ba Đình, Hải Dương\t2023/10/03\t2023/10/05\tTham dự đám cưới hoặc sự kiện gia đình.
6\tNguyễn Văn Quân\tNam\t26/05/1986\t0800329919\t084216304265\tBắc Phú, Sóc Sơn, Hà Nội\tXã Đại Phú, Huyện Sóc Sơn, Hải Dương\t2023/12/03\t2024/01/18\tTheo đuổi mục tiêu giáo dục, như học kỳ ở nước ngoài.
7\tTrần Ngọc Quân\tNam\t09/05/1987\t0235481724\t060168453203\tBắc Phú, Sóc Sơn, Hà Nội\tXã Phú Lâm, Huyện Hai Bà Trưng, Bình Dương\t2023/04/04\t2023/04/17\tCông việc ở thành phố hoặc quốc gia khác.
8\tVõ Công Khoa\tNam\t10/12/1998\t0729954186\t093184197259\tBắc Phú, Sóc Sơn, Hà Nội\tXã Đông Hải, Huyện Ba Đình, Hà Nội\t2023/11/04\t2023/11/10\tTham dự hội nghị hoặc phát triển chuyên nghiệp.
9\tTrần Khắc Nhung\tNữ\t19/12/1999\t0186735551\t058212880352\tBắc Phú, Sóc Sơn, Hà Nội\tXã Bắc Phú, Huyện Hai Bà Trưng, Đà Nẵng\t2023/02/05\t2023/03/10\tTham gia chương trình tình nguyện.
10\tTrần Văn Linh\tNữ\t31/03/1998\t0497041759\t072162776417\tBắc Phú, Sóc Sơn, Hà Nội\tXã Đại Phú, Huyện Tây Hồ, Gia Lai\t2023/09/05\t2023/10/17\tNghĩa vụ quân sự.
11\tVõ Văn Cường\tNam\t19/03/2002\t0914189079\t053183436818\tBắc Phú, Sóc Sơn, Hà Nội\tXã Đại Phú, Huyện Hai Châu, Hải Phòng\t2023/10/05\t2023/10/27\tNghĩa vụ bồi thẩm đoàn.
12\tVõ Ngọc Bảo\tNam\t08/11/1997\t0706960594\t077111314571\tBắc Phú, Sóc Sơn, Hà Nội\tXã Nam Sơn, Huyện Tây Hồ, Nghệ An\t2023/02/06\t2023/03/01\tNghỉ phép nghiên cứu.
13\tPhạm Thành Nhung\tNữ\t12/08/1993\t0269840364\t091168730956\tBắc Phú, Sóc Sơn, Hà Nội\tXã Đại Phú, Huyện Ba Đình, Bình Dương\t2023/12/07\t2023/12/30\tChuyến đi nghiên cứu học thuật hoặc khoa học.
14\tĐặng Hữu Cường\tNam\t07/02/1989\t0491379892\t075205809671\tBắc Phú, Sóc Sơn, Hà Nội\tXã Minh Đức, Huyện Sóc Sơn, Đà Nẵng\t2023/05/08\t2023/05/26\tThực tập hoặc học bổng.
15\tPhạm Minh Khoa\tNam\t01/12/1989\t0509700946\t030219219497\tBắc Phú, Sóc Sơn, Hà Nội\tXã Đại Phú, Huyện Hoàn Kiếm, Gia Lai\t2023/06/08\t2023/07/13\tDu lịch phiêu lưu hoặc khám phá.
16\tPhạm Thành Bảo\tNam\t19/02/2003\t0344446991\t044159438526\tBắc Phú, Sóc Sơn, Hà Nội\tXã Trung Hưng, Huyện Hoàn Kiếm, Bình Dương\t2023/07/08\t2023/08/20\tHành hương tôn giáo hoặc tu tập tâm linh.
17\tPhạm Công Quân\tNam\t07/12/1999\t0424639572\t048259781309\tBắc Phú, Sóc Sơn, Hà Nội\tXã Đại Phú, Huyện Ba Đình, Cần Thơ\t2023/06/09\t2023/06/15\tChăm sóc người thân ốm đau.
18\tĐặng Văn Thu\tNữ\t19/08/1999\t0151528880\t069294614855\tBắc Phú, Sóc Sơn, Hà Nội\tXã Phú Lâm, Huyện Long Biên, TP Hồ Chí Minh\t2023/10/09\t2023/11/03\tNghỉ tang do tử vong trong gia đình.
19\tVũ Khắc Cường\tNam\t31/05/1994\t0514900359\t003157030244\tBắc Phú, Sóc Sơn, Hà Nội\tXã Phú Lâm, Huyện Hai Bà Trưng, Nghệ An\t2023/12/09\t2023/12/25\tNghỉ thai sản hoặc nuôi con nhỏ.
20\tPhạm Văn Nhung\tNữ\t29/10/1981\t0244887596\t083118733673\tBắc Phú, Sóc Sơn, Hà Nội\tXã Bắc Phú, Huyện Hoàn Kiếm, Thanh Hóa\t2023/01/13\t2023/02/19\tSửa chữa hoặc tu sửa nhà cần di dời tạm thời.
21\tHuỳnh Khắc Khoa\tNam\t04/05/1983\t0453501477\t026182074079\tBắc Phú, Sóc Sơn, Hà Nội\tXã Hòa Minh, Huyện Đống Đa, Thanh Hóa\t2023/05/14\t2023/06/30\tSơ tán do thảm họa tự nhiên như lũ lụt hoặc bão.
22\tĐặng Văn Bảo\tNam\t13/12/2005\t0310021654\t089206934056\tBắc Phú, Sóc Sơn, Hà Nội\tXã Bắc Phú, Huyện Hai Châu, Hải Dương\t2023/10/14\t2023/11/09\tViệc pháp lý hoặc xuất hiện tại tòa ở địa điểm khác.
23\tTrần Đức Dung\tNữ\t02/04/2003\t0533326705\t008205676602\tBắc Phú, Sóc Sơn, Hà Nội\tXã Nam Sơn, Huyện Hai Bà Trưng, Nghệ An\t2023/05/15\t2023/06/09\tDu lịch mùa lễ hội dài ngày.
24\tHuỳnh Ngọc Bảo\tNam\t10/12/2002\t0768272756\t087275462300\tBắc Phú, Sóc Sơn, Hà Nội\tXã Đại Phú, Huyện Hai Bà Trưng, Đà Nẵng\t2023/05/16\t2023/06/27\tTham gia giải đấu thể thao hoặc sự kiện.
25\tPhan Phương Cường\tNam\t29/10/1997\t0271095344\t017199029863\tBắc Phú, Sóc Sơn, Hà Nội\tXã Hòa Minh, Huyện Cầu Giấy, Hải Dương\t2023/08/16\t2023/09/02\tTham gia vào hoạt động văn hóa hoặc nghệ thuật.
26\tVũ Khắc Thu\tNữ\t25/02/1998\t0824207215\t005220467526\tBắc Phú, Sóc Sơn, Hà Nội\tXã Phú Lâm, Huyện Đống Đa, Hà Nội\t2023/02/17\t2023/03/21\tTham dự trại hè hoặc tu tập.
27\tHoàng Phương Quân\tNam\t25/07/1991\t0494725198\t025257593628\tBắc Phú, Sóc Sơn, Hà Nội\tXã Phú Lâm, Huyện Ba Đình, TP Hồ Chí Minh\t2023/04/18\t2023/05/01\tTu dưỡng sức khỏe và tinh thần.
28\tTrần Văn Cường\tNam\t14/02/2002\t0390328828\t071140311737\tBắc Phú, Sóc Sơn, Hà Nội\tXã Nam Sơn, Huyện Hai Bà Trưng, Thanh Hóa\t2023/06/18\t2023/06/23\tNghỉ phép cá nhân cho sự nghỉ ngơi và phục hồi.
29\tVõ Thành Hiếu\tNam\t25/11/1981\t0529145029\t073232709058\tBắc Phú, Sóc Sơn, Hà Nội\tXã Đại Phú, Huyện Hai Châu, Hải Phòng\t2023/03/19\t2023/03/28\tTheo đuổi sở thích hoặc mục tiêu một cách chuyên sâu, như chuyến đi chụp ảnh.
30\tĐặng Đức Quân\tNam\t21/09/1981\t0263528342\t049262726379\tBắc Phú, Sóc Sơn, Hà Nội\tXã Đông Hải, Huyện Ba Đình, Đà Nẵng\t2023/07/19\t2023/08/16\tĐào bới khảo cổ hoặc nghiên cứu lịch sử.
31\tTrần Khắc Khoa\tNam\t19/05/1996\t0818680789\t064174943659\tBắc Phú, Sóc Sơn, Hà Nội\tXã Bắc Phú, Huyện Ba Đình, Hải Dương\t2023/01/20\t2023/02/14\tLàm việc mùa vụ ở khu vực khác.
32\tVõ Khắc Hiếu\tNam\t03/08/1994\t0405542541\t026268397434\tBắc Phú, Sóc Sơn, Hà Nội\tXã Đông Hải, Huyện Cầu Giấy, Thanh Hóa\t2023/01/21\t2023/02/24\tChuyến đi săn hoặc câu cá kéo dài.
33\tNguyễn Khắc Quân\tNam\t29/09/1989\t0245115767\t080105374516\tBắc Phú, Sóc Sơn, Hà Nội\tXã Phú Lâm, Huyện Hai Châu, Hà Nội\t2023/04/21\t2023/05/23\tHoạt động chính trị hoặc vận động.
34\tTrần Thành Dung\tNữ\t28/05/1987\t0378372826\t068260811059\tBắc Phú, Sóc Sơn, Hà Nội\tXã Thượng Đức, Huyện Đống Đa, Hải Dương\t2023/09/21\t2023/11/02\tTham gia chương trình cai nghiện hoặc phục hồi sức khỏe.
35\tPhạm Văn Thu\tNữ\t29/05/1998\t0571847246\t068260266856\tBắc Phú, Sóc Sơn, Hà Nội\tXã Trung Hưng, Huyện Hai Châu, Cần Thơ\t2023/10/21\t2023/11/26\tTham gia chương trình truyền hình thực tế hoặc cuộc thi.
36\tLê Ngọc Linh\tNữ\t19/06/1987\t0461443112\t052225441829\tBắc Phú, Sóc Sơn, Hà Nội\tXã Đại Phú, Huyện Tây Hồ, Hải Phòng\t2023/04/22\t2023/06/03\tTham gia sự kiện từ thiện đường dài như marathon.
37\tPhan Khắc Bảo\tNam\t30/01/2002\t0132737326\t044201854972\tBắc Phú, Sóc Sơn, Hà Nội\tXã Đông Hải, Huyện Hoàn Kiếm, Thanh Hóa\t2023/05/22\t2023/07/11\tHọc và thi cử kéo dài.
38\tNguyễn Thị Linh\tNữ\t13/05/2001\t0463172124\t009286615595\tBắc Phú, Sóc Sơn, Hà Nội\tXã Thượng Đức, Huyện Cầu Giấy, Cần Thơ\t2023/05/24\t2023/07/11\tDi dời tạm thời do bất ổn hoặc nguy hiểm trong khu vực.
39\tHuỳnh Thị Nhung\tNữ\t09/01/1985\t0794848708\t073258182525\tBắc Phú, Sóc Sơn, Hà Nội\tXã Tây Bắc, Huyện Tây Hồ, Nghệ An\t2023/07/24\t2023/08/08\tHoạt động thể thao chuyên nghiệp.
40\tLê Đức Dung\tNữ\t29/07/1984\t0370067901\t023254628993\tBắc Phú, Sóc Sơn, Hà Nội\tXã Đông Hải, Huyện Liên Chiểu, Hà Nội\t2023/09/24\t2023/10/10\tThực hiện hành trình thực hiện danh sách mong muốn cá nhân.
41\tHuỳnh Thành Cường\tNam\t13/05/1984\t0926896031\t087174209267\tBắc Phú, Sóc Sơn, Hà Nội\tXã Đại Phú, Huyện Cầu Giấy, Gia Lai\t2023/11/24\t2023/12/15\tNghỉ để viết sách hoặc theo đuổi dự án sáng tạo.
42\tHuỳnh Phương Nhung\tNữ\t25/09/1980\t0512456814\t080207957640\tBắc Phú, Sóc Sơn, Hà Nội\tXã Minh Đức, Huyện Sóc Sơn, Đà Nẵng\t2023/07/25\t2023/08/07\tTham dự hàng loạt lễ hội hoặc buổi hòa nhạc.
43\tLê Thành Hiếu\tNam\t20/08/1981\t0558622486\t091242641222\tBắc Phú, Sóc Sơn, Hà Nội\tXã Bắc Phú, Huyện Hai Bà Trưng, Đà Nẵng\t2023/11/26\t2023/12/12\tTheo dõi đoàn kịch hoặc nhóm nhạc lưu diễn.
44\tĐặng Đức Anh\tNam\t22/03/1997\t0180135416\t007178635049\tBắc Phú, Sóc Sơn, Hà Nội\tXã Đại Phú, Huyện Tây Hồ, Gia Lai\t2023/02/27\t2023/03/24\tPhục vụ như một nhà ngoại giao hoặc tư vấn.
45\tHuỳnh Thị Hiếu\tNữ\t22/02/1985\t0593182031\t089174191337\tBắc Phú, Sóc Sơn, Hà Nội\tXã Nam Sơn, Huyện Tây Hồ, Nghệ An\t2023/11/27\t2024/01/10\tTham gia chương trình huấn luyện sinh tồn.
46\tPhan Phương Khoa\tNam\t10/06/1985\t0182737885\t047109134283\tBắc Phú, Sóc Sơn, Hà Nội\tXã Phú Lâm, Huyện Ba Đình, TP Hồ Chí Minh\t2023/09/28\t2023/10/17\tTiến hành nghiên cứu thực địa về môi trường.
47\tPhạm Thành Linh\tNữ\t06/05/2000\t0746788046\t057234227648\tBắc Phú, Sóc Sơn, Hà Nội\tXã Đại Phú, Huyện Ba Đình, Bình Dương\t2023/10/28\t2023/11/15\tPhẫu thuật thẩm mỹ hoặc tự chọn.
48\tPhạm Thành Thu\tNữ\t12/07/1993\t0809171542\t041211334390\tBắc Phú, Sóc Sơn, Hà Nội\tXã Minh Đức, Huyện Sóc Sơn, Đà Nẵng\t2023/01/29\t2023/02/26\tTham gia sứ mệnh ngoại giao hoặc chương trình trao đổi.
49\tPhạm Văn Thu\tNữ\t16/12/1992\t0613256529\t094224015995\tBắc Phú, Sóc Sơn, Hà Nội\tXã Đại Phú, Huyện Hoàn Kiếm, Gia Lai\t2023/06/29\t2023/07/15\tTham gia tái hiện lịch sử hoặc lễ hội.
50\tHoàng Văn Thu\tNữ\t30/07/1980\t0915368255\t023145403650\tBắc Phú, Sóc Sơn, Hà Nội\tXã Minh Đức, Huyện Sóc Sơn, Đà Nẵng\t2023/10/29\t2023/11/29\tTham dự sự kiện công việc của đối tác.`;

// Chia dữ liệu thành một mảng các dòng.
const lines = data.trim().split('\n');

// Xử lý từng dòng và chuyển đổi chúng thành đối tượng.
const result = lines.map(line => {
    const [id, hoTen, gioiTinh, ngaySinh, SDT, CCCD, DDThuongTru, DDTamVang,ngayBatDau,ngayKetThuc, lyDo] = line.split('\t');
    return {
        id: Number(id),hoTen,
        gioiTinh,
        ngaySinh,
        SDT,
        CCCD,
        DDThuongTru,
        DDTamVang,
        ngayBatDau,
        ngayKetThuc,
        lyDo: lyDo || ""  // Xử lý trường hợp 'lyDo' không tồn tại.
    };
});

// Chuyển đổi mảng đối tượng thành chuỗi JSON.
const json = JSON.stringify(result, null, 2); // 'null' và '2' để định dạng JSON cho dễ đọc.

// In ra hoặc sử dụng chuỗi JSON.
console.log(json);
