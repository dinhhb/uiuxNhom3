// Dữ liệu dưới dạng chuỗi, mỗi dòng cách nhau bằng '\n' và mỗi giá trị cách nhau bằng '\t'.
const data = `1\tMai Quốc Bảo\tNam\t08/02/1996\t0383679744\t054256453835\tAn Thượng, Hà Nội\tGiáo viên\tBắc Phú, Sóc Sơn, Hà Nội\t21/04/2023\t28/05/2023\tĐi công tác dài hạn.\ts2
2\tHuỳnh/Hoàng Chi Mai\tNữ\t22/10/1981\t0838407931\t004167922356\tĐồng Tâm, Mỹ Đức, Hà Nội\tBác sĩ\tBắc Phú, Sóc Sơn, Hà Nội\t05/10/2023\t13/11/2023\tChuẩn bị cho triển lãm nghệ thuật.\ts1
3\tĐiền Nguyệt Cầm\tNữ\t21/07/1983\t0838916763\t079107472429\tHoàng Long, Phú Xuyên, Hà Nội\tY tá\tBắc Phú, Sóc Sơn, Hà Nội\t27/08/2023\t27/09/2023\tThăm người thân đang ốm.\ts1
4\tLê Thanh Hằng\tNữ\t08/06/1990\t0312509244\t051117704344\tKhương Đình, Hà Nội\tKỹ sư\tBắc Phú, Sóc Sơn, Hà Nội\t31/08/2023\t06/10/2023\tThực tập chuyên nghiệp.\ts1
5\tNgô Ý Nhiên\tNữ\t11/08/1982\t0456810390\t091259444802\tLĩnh Nam, Hà Nội\tLập trình viên\tBắc Phú, Sóc Sơn, Hà Nội\t07/02/2023\t07/03/2023\tNghiên cứu khoa học.\ts1
6\tPhan Công Vinh\tNam\t06/02/1985\t0180148400\t064223743484\tNgọc Hà, Hà Nội\tKiến trúc sư\tBắc Phú, Sóc Sơn, Hà Nội\t24/11/2023\t16/12/2023\tTham gia một dự án xây dựng.\ts1
7\tLý Ngọc Bích\tNữ\t15/01/1992\t0695583466\t073104168213\tNgọc Khánh, Hà Nội\tThợ xây\tBắc Phú, Sóc Sơn, Hà Nội\t22/06/2023\t06/08/2023\tĐiều trị y tế chuyên sâu.\ts1
8\tVũ/Võ Linh Chi\tNữ\t18/11/1984\t0750258837\t046100678041\tVạn Phúc, Hà Đông, Hà Nội\tThợ hàn\tBắc Phú, Sóc Sơn, Hà Nội\t26/01/2023\t12/03/2023\tTìm kiếm cơ hội việc làm.\ts1
9\tBùi Hồng Quân\tNam\t19/10/1997\t0284295298\t078157034242\tXuân La, Hà Nội\tĐầu bếp\tBắc Phú, Sóc Sơn, Hà Nội\t05/03/2023\t20/04/2023\tNghỉ dưỡng sau phẫu thuật.\ts2
10\tGiang Uyển Nhi\tNữ\t01/07/2001\t0924510413\t096189921126\tCổ Bi, Hà Nội\tPhục vụ nhà hàng\tBắc Phú, Sóc Sơn, Hà Nội\t28/06/2023\t28/07/2023\tHợp tác quốc tế.\ts1
11\tVũ/Võ Yến Nhi\tNữ\t13/01/1992\t0537240500\t070124691732\tPhú La, Hà Nội\tLao động phổ thông\tBắc Phú, Sóc Sơn, Hà Nội\t27/12/2023\t23/1/2024\tTham gia khóa học ngắn hạn.\ts2
12\tTô Ý Nhiên\tNữ\t30/03/2005\t0215386201\t025278927906\tTả Thanh Oai, Thanh Trì, Hà Nội\tNhân viên văn phòng\tBắc Phú, Sóc Sơn, Hà Nội\t10/01/2023\t08/02/2023\tThực hiện công tác từ thiện.\ts2
13\tNguyễn Xuân Mai\tNữ\t21/11/1984\t0866069383\t055172809876\tKim Lũ, Hà Nội\tNhân viên bán hàng\tBắc Phú, Sóc Sơn, Hà Nội\t25/04/2023\t27/05/2023\tTạm trú sau thiên tai.\ts2
14\tHà Quỳnh Như\tNữ\t03/12/2005\t0163997278\t071276627429\tVân Canh, Hoài Đức, Hà Nội\tNhân viên ngân hàng\tBắc Phú, Sóc Sơn, Hà Nội\t28/11/2023\t1/1/2024\tLàm việc tại đại sứ quán.\ts1
15\tHuỳnh/Hoàng Chi Mai\tNữ\t28/08/1983\t0840260410\t024241632875\tHòa Lạc, Hà Nội\tTài xế xe tải\tBắc Phú, Sóc Sơn, Hà Nội\t06/06/2023\t05/07/2023\tĐiều tra thị trường mới.\ts1
16\tNguyễn Thúy Vân\tNữ\t08/05/1986\t0237912300\t055238835469\tMinh Châu, Sóc Sơn, Hà Nội\tTài xế taxi\tBắc Phú, Sóc Sơn, Hà Nội\t30/11/2023\t12/12/2023\tNghệ sĩ thực hiện dự án.\ts2
17\tHàn Thúy Vân\tNữ\t03/10/1980\t0384122730\t039199267572\tBắc Hồng, Gia Lâm, Hà Nội\tLái xe buýt\tBắc Phú, Sóc Sơn, Hà Nội\t13/04/2023\t29/04/2023\tTham dự hội nghị quốc tế.\ts1
18\tNgô Lan Anh\tNữ\t31/12/1986\t0953856163\t006228714790\tDị Nậu, Mỹ Đức, Hà Nội\tCảnh sát\tBắc Phú, Sóc Sơn, Hà Nội\t27/01/2023\t12/03/2023\tĐào tạo nâng cao kỹ năng.\ts2
19\tKhuất Xuân Mai\tNữ\t09/04/2005\t0296485831\t045141895453\tSơn Đồng, Hoài Đức, Hà Nội\tLính cứu hỏa\tBắc Phú, Sóc Sơn, Hà Nội\t28/10/2023\t3/12/2023\tTình nguyện viên quốc tế.\ts2
20\tThạch Kim Anh\tNữ\t18/09/1991\t0683079096\t027239599245\tQuất Động, Thường Tín, Hà Nội\tNhiếp ảnh gia\tBắc Phú, Sóc Sơn, Hà Nội\t18/04/2023\t06/05/2023\tPhục hồi sau chấn thương.\ts2
21\tĐiền Vũ Phong\tNam\t09/07/1996\t0884224358\t078272350440\tThụy Hương, Thường Tín, Hà Nội\tNhà báo\tBắc Phú, Sóc Sơn, Hà Nội\t12/11/2023\t3/12/2023\tKhám phá văn hóa địa phương.\ts1
22\tNguyễn An Duy\tNam\t02/01/2003\t0399628947\t069225748112\tHải Bối, Đông Anh, Hà Nội\tBiên tập viên\tBắc Phú, Sóc Sơn, Hà Nội\t15/10/2023\t26/11/2023\tGiai đoạn thử việc.\ts1
23\tĐặng Thúy Vân\tNữ\t08/11/1994\t0179665600\t005124753872\tThường Tín, Hà Nội\tĐạo diễn\tBắc Phú, Sóc Sơn, Hà Nội\t08/09/2023\t06/10/2023\tTham quan du lịch.\ts2
24\tHồ Sơn Tùng\tNam\t14/06/1981\t0597599954\t042209847069\tĐại Đồng, Đông Anh, Hà Nội\tDiễn viên\tBắc Phú, Sóc Sơn, Hà Nội\t26/05/2023\t13/06/2023\tĐịnh cư tạm thời chờ nhà mới.\ts1
25\tBùi Hoài An\tNam\t31/01/1993\t0876940377\t006212148080\tVân Nội, Đông Anh, Hà Nội\tCa sĩ\tBắc Phú, Sóc Sơn, Hà Nội\t19/02/2023\t15/03/2023\tThực hiện dự án phim ảnh.\ts2
26\tNguyễn Hoàng Anh\tNam\t04/02/2003\t0664419189\t006171322221\tBình Phú, Thạch Thất, Hà Nội\tNhạc sĩ\tBắc Phú, Sóc Sơn, Hà Nội\t18/05/2023\t04/07/2023\tPhục vụ trong quân đội.\ts2
27\tPhạm Minh Anh\tNam\t28/10/1989\t0455985580\t022212319965\tThạch Thất, Hà Nội\tHọa sĩ\tBắc Phú, Sóc Sơn, Hà Nội\t30/04/2023\t25/05/2023\tThực tập sinh nước ngoài.\ts2
28\tTrần Thị Bình\tNữ\t3/3/1992\t0811159400\t091134145642\t789 Đường Nguyễn Văn Cừ, Q.5\tNhà thiết kế thời trang\tBắc Phú, Sóc Sơn, Hà Nội\t19/01/2023\t08/03/2023\tTham gia chương trình trao đổi.\ts1
29\tPhạm Văn Cường\tNam\t4/4/1993\t0761732714\t055294160329\t321 Đường Lý Tự Trọng, Q.10\tThợ may\tBắc Phú, Sóc Sơn, Hà Nội\t20/01/2023\t18/02/2023\tĐiều dưỡng sau bệnh tật.\ts1
30\tHoàng Thị Dung\tNữ\t5/5/1994\t0961920379\t049218420681\t678 Đường Võ Văn Tần, Q.3\tThợ làm tóc\tBắc Phú, Sóc Sơn, Hà Nội\t22/04/2023\t20/05/2023\tCải thiện trình độ ngoại ngữ.\ts2
31\tĐỗ Văn Đức\tNam\t6/6/1995\t0211095902\t023255538713\t987 Đường Trần Phú, Q.5\tChuyên viên làm đẹp\tBắc Phú, Sóc Sơn, Hà Nội\t01/03/2023\t19/03/2023\tTham gia lễ hội truyền thống.\ts2
32\tLê Thị Hương\tNữ\t7/7/1996\t0576461210\t076214477933\t234 Đường 3/2, Q.10\tThợ sửa chữa điện tử\tBắc Phú, Sóc Sơn, Hà Nội\t09/11/2023\t27/11/2023\tHợp tác nghiên cứu học thuật.\ts1
33\tNguyễn Văn Hải\tNam\t8/8/1997\t0672386066\t035244663398\t876 Đường Nguyễn Thị Minh Khai, Q.1\tKỹ thuật viên máy tính\tBắc Phú, Sóc Sơn, Hà Nội\t27/08/2023\t13/09/2023\tPhát triển dự án khởi nghiệp.\ts1
34\tTrần Thị Thơ\tNữ\t9/9/1998\t0744710124\t018212139834\t543 Đường Lê Văn Sỹ, Q.3\tNhân viên tiếp thị\tBắc Phú, Sóc Sơn, Hà Nội\t17/11/2023\t22/12/2023\tThực tập văn hóa.\ts1
35\tPhạm Văn Tài\tNam\t10/10/1999\t0129877579\t074287896359\t654 Đường Cách Mạng Tháng 8, Q.10\tChuyên gia SEO\tBắc Phú, Sóc Sơn, Hà Nội\t11/01/2023\t24/01/2023\tChuẩn bị cho cuộc thi.\ts1
36\tHoàng Thị Tâm\tNữ\t11/11/2000\t0663340943\t002247168780\t789 Đường Hoàng Sa, Q.3\tNhà phân tích dữ liệu\tBắc Phú, Sóc Sơn, Hà Nội\t07/05/2023\t30/05/2023\tTham gia giải đấu thể thao.\ts1
37\tĐỗ Văn Khánh\tNam\t12/12/2001\t0951674302\t038250129009\t876 Đường Hai Bà Trưng, Q.1\tChuyên gia tư vấn\tBắc Phú, Sóc Sơn, Hà Nội\t16/06/2023\t16/07/2023\tChăm sóc người thân già yếu.\ts2
38\tLê Thị Mai\tNữ\t1/13/2002\t0880303366\t068189876088\t345 Đường Nam Kỳ Khởi Nghĩa, Q.3\tLuật sư\tBắc Phú, Sóc Sơn, Hà Nội\t17/05/2023\t27/05/2023\tTạm trú chờ visa.\ts2
39\tNguyễn Văn Bảo\tNam\t2/14/2003\t0501978676\t041284054394\t678 Đường Ngô Quyền, Q.5\tKế toán\tBắc Phú, Sóc Sơn, Hà Nội\t15/04/2023\t04/05/2023\tHọc nghề thủ công.\ts1
40\tTrần Thị Tú\tNữ\t3/15/2004\t0672678483\t001176742005\t987 Đường Hai Bà Trưng, Q.3\tThủ quỹ\tBắc Phú, Sóc Sơn, Hà Nội\t03/07/2023\t22/07/2023\tPhục vụ công tác môi trường.\ts1
41\tNguyễn Thu Trang\tNữ\t1/1/1990\t0736615066\t027272475836\t123 Đường Trần Hưng Đạo, Q.1\tQuản lý khách sạn\tBắc Phú, Sóc Sơn, Hà Nội\t06/05/2023\t22/06/2023\tQuan sát tự nhiên hoang dã.\ts2
42\tLê Văn An\tNam\t2/2/1991\t0144492106\t082200410040\t456 Đường Lê Lai, Q.3\tNhân viên lễ tân\tBắc Phú, Sóc Sơn, Hà Nội\t01/02/2023\t05/03/2023\tĐợi kết quả xét nghiệm y tế.\ts1
43\tTrần Thị Bình\tNữ\t3/3/1992\t0508346979\t058174640284\t789 Đường Nguyễn Văn Cừ, Q.5\tHướng dẫn viên du lịch\tBắc Phú, Sóc Sơn, Hà Nội\t14/07/2023\t25/07/2023\tTham gia cuộc thi nghệ thuật.\ts2
44\tPhạm Văn Cường\tNam\t4/4/1993\t0521852750\t023102668917\t321 Đường Lý Tự Trọng, Q.10\tPhi công\tBắc Phú, Sóc Sơn, Hà Nội\t09/03/2023\t29/03/2023\tSáng tác âm nhạc.\ts1
45\tHoàng Thị Dung\tNữ\t5/5/1994\t0513888194\t042150834671\t678 Đường Võ Văn Tần, Q.3\tTiếp viên hàng không\tBắc Phú, Sóc Sơn, Hà Nội\t20/11/2023\t10/12/2023\tThực hiện nghiên cứu thị trường.\ts2
46\tĐỗ Văn Đức\tNam\t6/6/1995\t0109296741\t039116285404\t987 Đường Trần Phú, Q.5\tNhân viên an ninh sân bay\tBắc Phú, Sóc Sơn, Hà Nội\t28/12/2023\t14/1/2024\tTìm hiểu phong tục địa phương.\ts2
47\tLê Thị Hương\tNữ\t7/7/1996\t0880153149\t037109733553\t234 Đường 3/2, Q.10\tNhân viên kiểm tra hành lý\tBắc Phú, Sóc Sơn, Hà Nội\t13/03/2023\t05/04/2023\tLàm việc tại tổ chức phi chính phủ.\ts1
48\tNguyễn Văn Hải\tNam\t8/8/1997\t0315729195\t035180801328\t876 Đường Nguyễn Thị Minh Khai, Q.1\tNhà nghiên cứu khoa học\tBắc Phú, Sóc Sơn, Hà Nội\t24/07/2023\t19/08/2023\tHọc kỹ năng sống tự lập.\ts1
49\tTrần Thị Thơ\tNữ\t9/9/1998\t0694960016\t032225236312\t543 Đường Lê Văn Sỹ, Q.3\tGiáo sư đại học\tBắc Phú, Sóc Sơn, Hà Nội\t22/09/2023\t26/10/2023\tThăm bạn bè cũ.\ts2
50\tPhạm Văn Tài\tNam\t10/10/1999\t0393363645\t021296658037\t654 Đường Cách Mạng Tháng 8, Q.10\tSinh viên\tBắc Phú, Sóc Sơn, Hà Nội\t07/11/2023\t27/12/2023\tTạm trú chờ hôn lễ.\ts1
51\tHoàng Thị Tâm\tNữ\t11/11/2000\t0601640968\t012291782198\t789 Đường Hoàng Sa, Q.3\tHọc sinh\tBắc Phú, Sóc Sơn, Hà Nội\t19/08/2023\t30/09/2023\tĐiều chỉnh cuộc sống sau ly hôn.\ts1
52\tĐỗ Văn Khánh\tNam\t12/12/2001\t0986419791\t005114261596\t876 Đường Hai Bà Trưng, Q.1\tNhân viên bảo vệ\tBắc Phú, Sóc Sơn, Hà Nội\t29/08/2023\t24/09/2023\tHọc tập kỹ thuật mới.\ts1
53\tLê Thị Mai\tNữ\t1/13/2002\t0570192498\t016129381500\t345 Đường Nam Kỳ Khởi Nghĩa, Q.3\tThợ sửa ống nước\tBắc Phú, Sóc Sơn, Hà Nội\t18/06/2023\t07/07/2023\tChờ kết quả pháp lý.\ts1
54\tNguyễn Văn Bảo\tNam\t2/14/2003\t0406179246\t035173852005\t678 Đường Ngô Quyền, Q.5\tThợ điện\tBắc Phú, Sóc Sơn, Hà Nội\t15/07/2023\t21/08/2023\tSưu tầm nghệ thuật.\ts2
55\tTrần Thị Tú\tNữ\t3/15/2004\t0734889747\t081175851126\t987 Đường Hai Bà Trưng, Q.3\tThợ cơ khí\tBắc Phú, Sóc Sơn, Hà Nội\t09/12/2023\t21/01/2024\tChăm sóc con cái học tập.\ts1
56\tNguyễn Thu Trang\tNữ\t1/1/1990\t0228783948\t009106289704\t123 Đường Trần Hưng Đạo, Q.1\tNgười mẫu\tBắc Phú, Sóc Sơn, Hà Nội\t03/02/2023\t18/03/2023\tHợp tác sản xuất.\ts2
57\tLê Văn An\tNam\t2/2/1991\t0112679407\t042179992869\t456 Đường Lê Lai, Q.3\tNhà văn\tBắc Phú, Sóc Sơn, Hà Nội\t30/09/2023\t18/10/2023\tTham gia chương trình thực tế.\ts2
58\tTrần Thị Bình\tNữ\t3/3/1992\t0515657560\t088223122671\t789 Đường Nguyễn Văn Cừ, Q.5\tBiên kịch\tBắc Phú, Sóc Sơn, Hà Nội\t04/07/2023\t01/08/2023\tChuẩn bị di cư.\ts1
59\tPhạm Văn Cường\tNam\t4/4/1993\t0633960134\t061223702637\t321 Đường Lý Tự Trọng, Q.10\tChuyên viên truyền thông\tBắc Phú, Sóc Sơn, Hà Nội\t23/04/2023\t29/05/2023\tPhục hồi sau cai nghiện.\ts1
60\tHoàng Thị Dung\tNữ\t5/5/1994\t0242720927\t034200547365\t678 Đường Võ Văn Tần, Q.3\tNhà sản xuất âm nhạc\tBắc Phú, Sóc Sơn, Hà Nội\t22/04/2023\t14/05/2023\tThăm quan di sản.\ts1
61\tĐỗ Văn Đức\tNam\t6/6/1995\t0181166271\t096234248944\t987 Đường Trần Phú, Q.5\tDJ\tBắc Phú, Sóc Sơn, Hà Nội\t28/02/2023\t04/04/2023\tĐiều chỉnh sau chuyển công tác.\ts1
62\tLê Thị Hương\tNữ\t7/7/1996\t0973051419\t067152126822\t234 Đường 3/2, Q.10\tNgười tổ chức sự kiện\tBắc Phú, Sóc Sơn, Hà Nội\t17/04/2023\t05/05/2023\tNghiên cứu dân tộc học.\ts1
63\tNguyễn Văn Hải\tNam\t8/8/1997\t0627320431\t089234208923\t876 Đường Nguyễn Thị Minh Khai, Q.1\tNhân viên bảo hiểm\tBắc Phú, Sóc Sơn, Hà Nội\t25/10/2023\t14/12/2023\tHỗ trợ cộng đồng địa phương.\ts1
64\tTrần Thị Thơ\tNữ\t9/9/1998\t0443011027\t096273379163\t543 Đường Lê Văn Sỹ, Q.3\tChuyên viên tư vấn tài chính\tBắc Phú, Sóc Sơn, Hà Nội\t21/03/2023\t30/04/2023\tĐiều trị bệnh mãn tính.\ts2
65\tPhạm Văn Tài\tNam\t10/10/1999\t0240647702\t096171800159\t654 Đường Cách Mạng Tháng 8, Q.10\tChuyên gia đầu tư\tBắc Phú, Sóc Sơn, Hà Nội\t10/11/2023\t28/11/2023\tTạm trú sau mất nhà.\ts2`;

// Chia dữ liệu thành một mảng các dòng.
const lines = data.trim().split('\n');

// Xử lý từng dòng và chuyển đổi chúng thành đối tượng.
const result = lines.map(line => {
    const [id, hoTen, gioiTinh, ngaySinh, SDT, CCCD, DDThuongTru,ngheNghiep, DDTamVang,ngayBatDau,ngayKetThuc, lyDo,canHo] = line.split('\t');
    return {
        id: Number(id),hoTen,
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
        canHo// Xử lý trường hợp 'lyDo' không tồn tại.
    };
});

// Chuyển đổi mảng đối tượng thành chuỗi JSON.
const json = JSON.stringify(result, null, 2); // 'null' và '2' để định dạng JSON cho dễ đọc.

// In ra hoặc sử dụng chuỗi JSON.
console.log(json);
