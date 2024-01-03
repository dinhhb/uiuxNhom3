// Dữ liệu dưới dạng chuỗi, mỗi dòng cách nhau bằng '\n' và mỗi giá trị cách nhau bằng '\t'.
const data = `1\tCDS201\tS201\tVệ sinh\tChưa duyệt\tabc1\tpa1			
2\tCDS201\tS201\tDịch vụ\tĐã duyệt\tabc2\tpa2			
3\tCDS201\tS201\tAn ninh\tĐã duyệt\tabc3\tpa3			
4\tCDS201\tS201\tVệ sinh\tĐã duyệt\tabc4\tpa4			`;

// Chia dữ liệu thành một mảng các dòng.
const lines = data.trim().split('\n');

// Xử lý từng dòng và chuyển đổi chúng thành đối tượng.
const result = lines.map(line => {
    const [id, idCudan, idHome, loaiPA, trangThai, noiDung, image] = line.split('\t');
    return {
        id: Number(id),
        idCudan,
        idHome,
        loaiPA,
        trangThai,
        noiDung,
        image
    };
});

// Chuyển đổi mảng đối tượng thành chuỗi JSON.
const json = JSON.stringify(result, null, 2); // 'null' và '2' để định dạng JSON cho dễ đọc.

// In ra hoặc sử dụng chuỗi JSON.
console.log(json);
