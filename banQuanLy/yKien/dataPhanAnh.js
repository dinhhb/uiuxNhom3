var tableData1 = JSON.parse(localStorage.getItem('tableData1')) ||
    [
        {
            "id": 1,
            "idCudan": "CDS201",
            "idHome": "S201",
            "loaiPA": "Vệ sinh",
            "trangThai": "Chưa duyệt",
            "noiDung": "Cần lưu ý về việc có một số cư dân vẫn thường xuyên vứt rác bừa bãi tại khu vực cổng A của tòa nhà S2. Tình trạng này không chỉ tạo ra một cảnh quan xấu mắt mà còn ảnh hưởng đến môi trường sống chung của chúng ta. Xin Ban Quản Lý chú ý và có những biện pháp cần thiết để ngăn chặn hành vi vứt rác không đúng quy tắc tại khu vực này.",
            "image": "pa1.png",
            "thoiGian": "25/12/2023"
        },
        {
            "id": 2,
            "idCudan": "CDS201",
            "idHome": "S201",
            "loaiPA": "Dịch vụ",
            "trangThai": "Đã duyệt",
            "noiDung": "Tôi đã có trải nghiệm với dịch vụ bảo trì sửa chữa và muốn chia sẻ ý kiến của mình. Mặc dù có những khía cạnh tích cực, tôi cảm thấy còn cần cải thiện ở một số điểm để nâng cao chất lượng và hiệu quả công việc. Xin đề xuất quản lý xem xét và thực hiện những điều chỉnh cần thiết. Cảm ơn!",
            "image": "pa2.jpg",
            "thoiGian": "24/12/2023"
        },
        {
            "id": 3,
            "idCudan": "CDS201",
            "idHome": "S201",
            "loaiPA": "An ninh",
            "trangThai": "Đã duyệt",
            "noiDung": "Thực sự lo ngại về tình trạng an ninh tại khu dân cư, mong muốn có sự chăm sóc tốt hơn từ bộ phận quản lý. Mong rằng việc nâng cao hệ thống giám sát, tăng cường đào tạo nhân sự an ninh, và tăng cường tương tác cộng đồng sẽ giúp cải thiện mức độ an toàn cho mọi người sống tại đây. ",
            "image": "pa3.jpg",
            "thoiGian": "18/10/2023"
        },
        {
            "id": 4,
            "idCudan": "CDS201",
            "idHome": "S201",
            "loaiPA": "Vệ sinh",
            "trangThai": "Đã duyệt",
            "noiDung": "Cần lưu ý về việc có một số cư dân vẫn thường xuyên vứt rác bừa bãi tại khu vực cổng A của tòa nhà S2. Tình trạng này không chỉ tạo ra một cảnh quan xấu mắt mà còn ảnh hưởng đến môi trường sống chung của chúng ta. Xin Ban Quản Lý chú ý và có những biện pháp cần thiết để ngăn chặn hành vi vứt rác không đúng quy tắc tại khu vực này.",
            "image": "pa1.png",
            "thoiGian": "15/10/2023"
        },
        {
            "id": 5,
            "idCudan": "CDS201",
            "idHome": "S201",
            "loaiPA": "Vệ sinh",
            "trangThai": "Đã duyệt",
            "noiDung": "Cần lưu ý về việc có một số cư dân vẫn thường xuyên vứt rác bừa bãi tại khu vực cổng A của tòa nhà S2. Tình trạng này không chỉ tạo ra một cảnh quan xấu mắt mà còn ảnh hưởng đến môi trường sống chung của chúng ta. Xin Ban Quản Lý chú ý và có những biện pháp cần thiết để ngăn chặn hành vi vứt rác không đúng quy tắc tại khu vực này.",
            "image": "pa1.png",
            "thoiGian": "15/10/2023"
        },
        {
            "id": 6,
            "idCudan": "CDS201",
            "idHome": "S201",
            "loaiPA": "Vệ sinh",
            "trangThai": "Đã duyệt",
            "noiDung": "Cần lưu ý về việc có một số cư dân vẫn thường xuyên vứt rác bừa bãi tại khu vực cổng A của tòa nhà S2. Tình trạng này không chỉ tạo ra một cảnh quan xấu mắt mà còn ảnh hưởng đến môi trường sống chung của chúng ta. Xin Ban Quản Lý chú ý và có những biện pháp cần thiết để ngăn chặn hành vi vứt rác không đúng quy tắc tại khu vực này.",
            "image": "pa1.png",
            "thoiGian": "15/10/2023"
        },
        {
            "id": 7,
            "idCudan": "CDS201",
            "idHome": "S201",
            "loaiPA": "Vệ sinh",
            "trangThai": "Đã duyệt",
            "noiDung": "Cần lưu ý về việc có một số cư dân vẫn thường xuyên vứt rác bừa bãi tại khu vực cổng A của tòa nhà S2. Tình trạng này không chỉ tạo ra một cảnh quan xấu mắt mà còn ảnh hưởng đến môi trường sống chung của chúng ta. Xin Ban Quản Lý chú ý và có những biện pháp cần thiết để ngăn chặn hành vi vứt rác không đúng quy tắc tại khu vực này.",
            "image": "pa1.png",
            "thoiGian": "15/10/2023"
        }
    ]
var originaltableData1 = JSON.parse(JSON.stringify(tableData1));
