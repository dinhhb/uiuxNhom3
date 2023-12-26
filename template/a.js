// Dữ liệu dưới dạng chuỗi, mỗi dòng cách nhau bằng '\n' và mỗi giá trị cách nhau bằng '\t'.
const data = `1\t11\tNguyễn Thu Trang\tNữ\t1/1/1990\t0115410378\t092102031709\t123 Đường Trần Hưng Đạo, Q.1\tChủ hộ
2\t11\tLê Văn An\tNam\t2/2/1991\t0544080056\t057268022916\t456 Đường Lê Lai, Q.3\t
3\t11\tTrần Thị Bình\tNữ\t3/3/1992\t0837692617\t055262585686\t789 Đường Nguyễn Văn Cừ, Q.5\t
4\t12\tPhạm Văn Cường\tNam\t4/4/1993\t0165558371\t008197748641\t321 Đường Lý Tự Trọng, Q.10\tChủ hộ
5\t12\tHoàng Thị Dung\tNữ\t5/5/1994\t0772268749\t081257923271\t678 Đường Võ Văn Tần, Q.3\t
6\t13\tĐỗ Văn Đức\tNam\t6/6/1995\t0118909543\t036160317612\t987 Đường Trần Phú, Q.5\tChủ hộ
7\t13\tLê Thị Hương\tNữ\t7/7/1996\t0416421678\t009142120353\t234 Đường 3/2, Q.10\t
8\t14\tNguyễn Văn Hải\tNam\t8/8/1997\t0476192525\t020182915870\t876 Đường Nguyễn Thị Minh Khai, Q.1\tChủ hộ
9\t14\tTrần Thị Thơ\tNữ\t9/9/1998\t0663899035\t080114893197\t543 Đường Lê Văn Sỹ, Q.3\t
10\t15\tPhạm Văn Tài\tNam\t10/10/1999\t0128267967\t078215545737\t654 Đường Cách Mạng Tháng 8, Q.10\tChủ hộ
11\t15\tHoàng Thị Tâm\tNữ\t11/11/2000\t0576885113\t038267723580\t789 Đường Hoàng Sa, Q.3\t
12\t15\tĐỗ Văn Khánh\tNam\t12/12/2001\t0248219056\t076277096536\t876 Đường Hai Bà Trưng, Q.1\t
13\t21\tLê Thị Mai\tNữ\t1/13/2002\t0734513586\t085187313581\t345 Đường Nam Kỳ Khởi Nghĩa, Q.3\tChủ hộ
14\t21\tNguyễn Văn Bảo\tNam\t2/14/2003\t0420552707\t056173403173\t678 Đường Ngô Quyền, Q.5\t
15\t21\tTrần Thị Tú\tNữ\t3/15/2004\t0645083728\t029138248928\t987 Đường Hai Bà Trưng, Q.3\t
16\t22\tNguyễn Thu Trang\tNữ\t1/1/1990\t0674546882\t073103296478\t123 Đường Trần Hưng Đạo, Q.1\tChủ hộ
17\t22\tLê Văn An\tNam\t2/2/1991\t0817263736\t088277999805\t456 Đường Lê Lai, Q.3\t
18\t23\tTrần Thị Bình\tNữ\t3/3/1992\t0702865527\t007251899209\t789 Đường Nguyễn Văn Cừ, Q.5\tChủ hộ
19\t23\tPhạm Văn Cường\tNam\t4/4/1993\t0428995169\t025278638034\t321 Đường Lý Tự Trọng, Q.10\t
20\t23\tHoàng Thị Dung\tNữ\t5/5/1994\t0787371180\t003130671632\t678 Đường Võ Văn Tần, Q.3\t
21\t24\tĐỗ Văn Đức\tNam\t6/6/1995\t0887429327\t031285899529\t987 Đường Trần Phú, Q.5\tChủ hộ
22\t24\tLê Thị Hương\tNữ\t7/7/1996\t0110211904\t045210960580\t234 Đường 3/2, Q.10\t
23\t25\tNguyễn Văn Hải\tNam\t8/8/1997\t0703974265\t077192470933\t876 Đường Nguyễn Thị Minh Khai, Q.1\tChủ hộ
24\t31\tTrần Thị Thơ\tNữ\t9/9/1998\t0168591083\t018254055893\t543 Đường Lê Văn Sỹ, Q.3\tChủ hộ
25\t31\tPhạm Văn Tài\tNam\t10/10/1999\t0194410269\t049136629345\t654 Đường Cách Mạng Tháng 8, Q.10\t
26\t32\tHoàng Thị Tâm\tNữ\t11/11/2000\t0281558100\t096151008157\t789 Đường Hoàng Sa, Q.3\tChủ hộ
27\t32\tĐỗ Văn Khánh\tNam\t12/12/2001\t0273111326\t028156614040\t876 Đường Hai Bà Trưng, Q.1\t
28\t33\tLê Thị Mai\tNữ\t1/13/2002\t0823653668\t043112711631\t345 Đường Nam Kỳ Khởi Nghĩa, Q.3\t
29\t34\tNguyễn Văn Bảo\tNam\t2/14/2003\t0724817804\t002140359088\t678 Đường Ngô Quyền, Q.5\tChủ hộ
30\t34\tTrần Thị Tú\tNữ\t3/15/2004\t0216845060\t094164006291\t987 Đường Hai Bà Trưng, Q.3\t
31\t35\tNguyễn Thu Trang\tNữ\t1/1/1990\t0678333009\t054177465785\t123 Đường Trần Hưng Đạo, Q.1\tChủ hộ
32\t35\tLê Văn An\tNam\t2/2/1991\t0683988539\t072277802868\t456 Đường Lê Lai, Q.3\t
33\t41\tTrần Thị Bình\tNữ\t3/3/1992\t0159217481\t072267543793\t789 Đường Nguyễn Văn Cừ, Q.5\tChủ hộ
34\t41\tPhạm Văn Cường\tNam\t4/4/1993\t0615719502\t085187484819\t321 Đường Lý Tự Trọng, Q.10\t
35\t41\tHoàng Thị Dung\tNữ\t5/5/1994\t0487346274\t076283299904\t678 Đường Võ Văn Tần, Q.3\t
36\t42\tĐỗ Văn Đức\tNam\t6/6/1995\t0531419660\t014206091109\t987 Đường Trần Phú, Q.5\tChủ hộ
37\t43\tLê Thị Hương\tNữ\t7/7/1996\t0998454533\t062161003324\t234 Đường 3/2, Q.10\tChủ hộ
38\t43\tNguyễn Văn Hải\tNam\t8/8/1997\t0953526952\t024241033724\t876 Đường Nguyễn Thị Minh Khai, Q.1\t
39\t43\tTrần Thị Thơ\tNữ\t9/9/1998\t0583967562\t022282206392\t543 Đường Lê Văn Sỹ, Q.3\t
40\t44\tPhạm Văn Tài\tNam\t10/10/1999\t0344289022\t021159353828\t654 Đường Cách Mạng Tháng 8, Q.10\tChủ hộ
41\t44\tHoàng Thị Tâm\tNữ\t11/11/2000\t0351996469\t056261849641\t789 Đường Hoàng Sa, Q.3\t
42\t45\tĐỗ Văn Khánh\tNam\t12/12/2001\t0233022120\t067162770448\t876 Đường Hai Bà Trưng, Q.1\tChủ hộ
43\t45\tLê Thị Mai\tNữ\t1/13/2002\t0644945917\t026155130100\t345 Đường Nam Kỳ Khởi Nghĩa, Q.3\t
44\t45\tNguyễn Văn Bảo\tNam\t2/14/2003\t0349499250\t084167025617\t678 Đường Ngô Quyền, Q.5\t
45\t51\tTrần Thị Tú\tNữ\t3/15/2004\t0200356465\t070271761744\t987 Đường Hai Bà Trưng, Q.3\tChủ hộ
46\t51\tNguyễn Thu Trang\tNữ\t1/1/1990\t0461286890\t063107279865\t123 Đường Trần Hưng Đạo, Q.1\t
47\t52\tLê Văn An\tNam\t2/2/1991\t0695079523\t027215507005\t456 Đường Lê Lai, Q.3\tChủ hộ
48\t53\tTrần Thị Bình\tNữ\t3/3/1992\t0627280135\t011287561977\t789 Đường Nguyễn Văn Cừ, Q.5\tChủ hộ
49\t53\tPhạm Văn Cường\tNam\t4/4/1993\t0966414814\t096129108250\t321 Đường Lý Tự Trọng, Q.10\t
50\t53\tHoàng Thị Dung\tNữ\t5/5/1994\t0940506358\t031272526910\t678 Đường Võ Văn Tần, Q.3\t
51\t54\tĐỗ Văn Đức\tNam\t6/6/1995\t0694242557\t074198998120\t987 Đường Trần Phú, Q.5\tChủ hộ
52\t55\tLê Thị Hương\tNữ\t7/7/1996\t0956206310\t024188025785\t234 Đường 3/2, Q.10\tChủ hộ
53\t55\tTrần Thị Tú\tNữ\t3/15/2004\t0856335349\t008129417650\t987 Đường Hai Bà Trưng, Q.3\t`;

// Chia dữ liệu thành một mảng các dòng.
const lines = data.trim().split('\n');

// Xử lý từng dòng và chuyển đổi chúng thành đối tượng.
const result = lines.map(line => {
    const [id, areaCode, name, gender, dob, phone, identificationNumber, address, notes] = line.split('\t');
    return {
        id: Number(id),
        areaCode: Number(areaCode),
        name,
        gender,
        dob,
        phone,
        identificationNumber,
        address,
        notes: notes || ""  // Xử lý trường hợp 'notes' không tồn tại.
    };
});

// Chuyển đổi mảng đối tượng thành chuỗi JSON.
const json = JSON.stringify(result, null, 2); // 'null' và '2' để định dạng JSON cho dễ đọc.

// In ra hoặc sử dụng chuỗi JSON.
console.log(json);
