var tableData1 = JSON.parse(localStorage.getItem('tableData1')) ||
    [
        {
            "id": 1,
            "idCudan": "CDS201",
            "idHome": "S201",
            "loaiPA": "Vệ sinh",
            "trangThai": "Chưa duyệt",
            "noiDung": "Cần lưu ý về việc có một số cư dân vẫn thường xuyên vứt rác bừa bãi tại khu vực cổng A của tòa nhà S1. Tình trạng này không chỉ tạo ra một cảnh quan xấu mắt mà còn ảnh hưởng đến môi trường sống chung của chúng ta. Xin Ban Quản Lý chú ý và có những biện pháp cần thiết để ngăn chặn hành vi vứt rác không đúng quy tắc tại khu vực này.",
            "image": "pa1.jpg",
            "thoiGian": "25/12/2023"
        },
        {
            "id": 2,
            "idCudan": "CDS201",
            "idHome": "S201",
            "loaiPA": "Dịch vụ",
            "trangThai": "Đã duyệt",
            "noiDung": "abc2",
            "image": "pa2.jpg",
            "thoiGian": "24/11/2023"
        },
        {
            "id": 3,
            "idCudan": "CDS201",
            "idHome": "S201",
            "loaiPA": "An ninh",
            "trangThai": "Đã duyệt",
            "noiDung": "abc3",
            "image": "pa3.jpg",
            "thoiGian": "18/10/2023"
        },
        {
            "id": 4,
            "idCudan": "CDS201",
            "idHome": "S201",
            "loaiPA": "Vệ sinh",
            "trangThai": "Đã duyệt",
            "noiDung": "abc4",
            "image": "pa4.jpg",
            "thoiGian": "15/10/2023"
        }
    ]
var originaltableData1 = JSON.parse(JSON.stringify(tableData1));
