// Dữ liệu dưới dạng chuỗi, mỗi dòng cách nhau bằng '\n' và mỗi giá trị cách nhau bằng '\t'.
const data = `1\tThông báo tiền nước tháng 12\tabc1\t20/12/2023\tpa1.pnj
2\tThông báo tiền điện tháng 12\tabc2\t23/12/2023\tpa2.pnj
3\tThông báo tiền Internet tháng 12\tabc3\t17/12/2023\tpa3.pnj
4\tThông báo tiền Internet tháng 11\tabc4\t28/11/2023\tpa1.pnj
5\tThông báo tiền điện tháng 11\tabc5\t27/11/2023\tpa2.pnj
6\tThông báo tiền nước tháng 11\tabc6\t28/11/2023\tpa3.pnj
7\tThông báo tiền điện tháng 10\tabc7\t25/10/2023\tpa1.pnj
8\tThông báo tiền nước tháng 10\tabc8\t26/10/2023\tpa2.pnj
9\tThông báo tiền Internet tháng 10\tabc9\t27/10/2023\tpa3.pnj`;

// Chia dữ liệu thành một mảng các dòng.
const lines = data.trim().split('\n');

// Xử lý từng dòng và chuyển đổi chúng thành đối tượng.
const result = lines.map(line => {
    const [id, title, noiDung, date, image] = line.split('\t');
    return {
        id: Number(id),
        title,
        noiDung,
        date,
        image
    };
});

// Chuyển đổi mảng đối tượng thành chuỗi JSON.
const json = JSON.stringify(result, null, 2); // 'null' và '2' để định dạng JSON cho dễ đọc.

// In ra hoặc sử dụng chuỗi JSON.
console.log(json);
