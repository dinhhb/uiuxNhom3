document.addEventListener('DOMContentLoaded', function () {
        // Sample data
        var tableData = [
  {
    "id": 1,
    "idloai": "1",
    "loaiDichVu": "Dịch Vụ Cơ Bản",
    "tenDichVu": "Quản Lý Chung Cư",
    "donViTinh": "VND",
    "soCanSD": 1,
    "soNguoiSD": "22",
    "chungCu": "s1",
    "thang": "1",
    "nam": "2024"
  },
  {
    "id": 2,
    "idloai": "1",
    "loaiDichVu": "Dịch Vụ Cơ Bản",
    "tenDichVu": "Dịch Vụ Nước",
    "donViTinh": "VND/m3",
    "soCanSD": 1,
    "soNguoiSD": "52",
    "chungCu": "s1",
    "thang": "2",
    "nam": "2024"
  },
  {
    "id": 3,
    "idloai": "1",
    "loaiDichVu": "Dịch Vụ Cơ Bản",
    "tenDichVu": "Dịch Vụ Điện",
    "donViTinh": "VND/kWh",
    "soCanSD": 1,
    "soNguoiSD": "12",
    "chungCu": "s1",
    "thang": "3",
    "nam": "2024"
  },
  {
    "id": 4,
    "idloai": "2",
    "loaiDichVu": "Dịch Vụ An Ninh và Bảo Vệ",
    "tenDichVu": "Dịch Vụ Bảo Vệ",
    "donViTinh": "VND",
    "soCanSD": 1,
    "soNguoiSD": "35",
    "chungCu": "s1",
    "thang": "4",
    "nam": "2024"
  },
  {
    "id": 5,
    "idloai": "2",
    "loaiDichVu": "Dịch Vụ An Ninh và Bảo Vệ",
    "tenDichVu": "Dịch Vụ An Ninh",
    "donViTinh": "VND",
    "soCanSD": 1,
    "soNguoiSD": "28",
    "chungCu": "s2",
    "thang": "5",
    "nam": "2024"
  },
  {
    "id": 6,
    "idloai": "3",
    "loaiDichVu": "Loại Dịch Vụ Gửi Xe và Đỗ Xe",
    "tenDichVu": "Gửi Xe Đạp",
    "donViTinh": "VND/xe",
    "soCanSD": 1,
    "soNguoiSD": "31",
    "chungCu": "s2",
    "thang": "1",
    "nam": "2024"
  },
  {
    "id": 7,
    "idloai": "3",
    "loaiDichVu": "Loại Dịch Vụ Gửi Xe và Đỗ Xe",
    "tenDichVu": "Gửi Xe Đạp",
    "donViTinh": "VND/xe",
    "soCanSD": 1,
    "soNguoiSD": "31",
    "chungCu": "s2",
    "thang": "2",
    "nam": "2024"
  },
  {
    "id": 8,
    "idloai": "4",
    "loaiDichVu": "Dịch Vụ Giải Trí và Thể Thao",
    "tenDichVu": "Sử Dụng Hồ Bơi",
    "donViTinh": "VND/người",
    "soCanSD": 1,
    "soNguoiSD": "20",
    "chungCu": "s3",
    "thang": "3",
    "nam": "2024"
  },
  {
    "id": 9,
    "idloai": "5",
    "loaiDichVu": "Dịch Vụ Bảo Hiểm và An Toàn",
    "tenDichVu": "Bảo Hiểm Chung Cư",
    "donViTinh": "VND",
    "soCanSD": 1,
    "soNguoiSD": "42",
    "chungCu": "s3",
    "thang": "4",
    "nam": "2024"
  },
  {
    "id": 10,
    "idloai": "6",
    "loaiDichVu": "Dịch Vụ Bảo Dưỡng và Sửa Chữa",
    "tenDichVu": "Dịch Vụ Sửa Chữa",
    "donViTinh": "VND",
    "soCanSD": 1,
    "soNguoiSD": "18",
    "chungCu": "s3",
    "thang": "5",
    "nam": "2024"
  },
  {
    "id": 11,
    "idloai": "7",
    "loaiDichVu": "Dịch vụ Khác",
    "tenDichVu": "Dịch Vụ Khẩn Cấp",
    "donViTinh": "VND",
    "soCanSD": 1,
    "soNguoiSD": "15",
    "chungCu": "s4",
    "thang": "6",
    "nam": "2024"
  },
  {
    "id": 12,
    "idloai": "7",
    "loaiDichVu": "Dịch vụ Khác",
    "tenDichVu": "Sử Dụng Phòng Cộng Đồng",
    "donViTinh": "VND",
    "soCanSD": 1,
    "soNguoiSD": "25",
    "chungCu": "s4",
    "thang": "7",
    "nam": "2024"
  },
  {
    "id": 13,
    "idloai": "8",
    "loaiDichVu": "Dịch vụ Mới",
    "tenDichVu": "Cước Thang Bộ",
    "donViTinh": "VND/tầng",
    "soCanSD": 1,
    "soNguoiSD": "10",
    "chungCu": "s5",
    "thang": "8",
    "nam": "2024"
  },
  {
    "id": 14,
    "idloai": "8",
    "loaiDichVu": "Dịch vụ Mới",
    "tenDichVu": "Phí Gửi Bưu Điện",
    "donViTinh": "VND",
    "soCanSD": 1,
    "soNguoiSD": "5",
    "chungCu": "s5",
    "thang": "9",
    "nam": "2024"
  },
  {
    "id": 15,
    "idloai": "8",
    "loaiDichVu": "Dịch vụ Mới",
    "tenDichVu": "Gửi Hàng Hóa",
    "donViTinh": "VND/kg",
    "soCanSD": 1,
    "soNguoiSD": "12",
    "chungCu": "s5",
    "thang": "10",
    "nam": "2024"
  }
]
;


var state = {
    'querySet': tableData,

    'page': 1,
    'rows': 5,
    'window': 5,
}

buildTable(); // Xây dựng bảng ngay lập tức sau khi tải dữ liệu

function saveToLocalStorage(data) {
    localStorage.setItem('tableData', JSON.stringify(data));
}



function pagination(querySet, page, rows) {

    var trimStart = (page - 1) * rows
    var trimEnd = trimStart + rows

    var trimmedData = querySet.slice(trimStart, trimEnd)

    var pages = Math.ceil(querySet.length / rows);

    return {
        'querySet': trimmedData,
        'pages': pages,
    }
}

function pageButtons(pages) {
    var wrapper = document.getElementById('pagination-wrapper')

    wrapper.innerHTML = ``
    console.log('Pages:', pages)
    // Kiểm tra nếu không có trang nào (không có dữ liệu)
    // if (pages === 0) {
    //     return; // Không hiển thị nút phân trang nếu không có dữ liệu
    // }

    var maxLeft = (state.page - Math.floor(state.window / 2))
    var maxRight = (state.page + Math.floor(state.window / 2))

    if (maxLeft < 1) {
        maxLeft = 1
        maxRight = state.window
    }

    if (maxRight > pages) {
        maxLeft = pages - (state.window - 1)

        if (maxLeft < 1) {
            maxLeft = 1
        }
        maxRight = pages
    }
    console.log('maxRight:', maxRight)
    console.log('maxLeft:', maxLeft)

    for (var page = maxLeft; page <= maxRight; page++) {
        // Check if the current page is equal to state.page
        var activeClass = state.page === page ? 'active' : '';
        wrapper.innerHTML += ` <li class="page-item page ${activeClass}" value=${page}><a class="page-link">${page}</a></li>`
    }

    if (state.page != 1) {
        wrapper.innerHTML = `<li class="page-item page" value=${1}><a class="page-link " ><i class="fa fa-arrow-left" aria-hidden="true"></i></i></a></li>` + wrapper.innerHTML
    }

    if (state.page != pages && pages!=0) {
        wrapper.innerHTML += `<li class="page-item page" value=${pages}><a class="page-link" href="#"><i class="fa fa-arrow-right" aria-hidden="true"></i></a></li>`
    }

    $('.page').on('click', function () {
        $('#table-body').empty()

        state.page = Number($(this).val())

        buildTable()
    })

}
function buildTable() {
  var table = $('#table-body');
  var data = pagination(state.querySet, state.page, state.rows);
  var myList = data.querySet;
  table.empty(); // Xóa nội dung cũ trong bảng

  for (var i in myList) {

    var stt = (state.page - 1) * state.rows + parseInt(i) + 1;

    var row = `<tr>
              <td>${stt}</td>
              <td>${myList[i].tenDichVu}</td>
              <td>${myList[i].loaiDichVu}</td>
              <td>${myList[i].donViTinh}</td>
              <td>${myList[i].soCanSD}</td>
              <td>${myList[i].soNguoiSD}</td>
           </tr>`;

    table.append(row);
  }

  pageButtons(data.pages);
}

// **************************************************************Filer***********************************
var currentMonth = null;
var currentYear = null;
var currentApartment = "all";

// Search and filter function
function searchAndFilter() {
    var search = $('#searchInput').val().toLowerCase();

    var filteredData = tableData.filter(item => {
        var month = item.thang;
        var year = item.nam;
        var apartment = item.chungCu;
        console.log('currentApartment:', currentApartment);

        if (currentMonth && month != currentMonth) {
            return false;
        }
        if (currentYear && year != currentYear) {
            return false;
        }
        if (currentApartment !== 'all' && apartment !== currentApartment) {
            return false;
        }
        if (state.selectedTypeId && item.idloai !== state.selectedTypeId) {
                return false;
            }
        return Object.keys(item).some(key =>
            item[key].toString().toLowerCase().includes(search));
    });

    console.log('Dữ liệu đã lọc:', filteredData);

    state.querySet = filteredData;
    state.page = 1;
    buildTable();
}

var monthButton = document.getElementById('monthButton');
var yearButton = document.getElementById('yearButton');
var typeButton = document.getElementById('typeButton');
 var serviceTypes = [
        { idloai: "1", loaiDichVu: "Dịch Vụ Cơ Bản" },
        { idloai: "2", loaiDichVu: "Dịch Vụ An Ninh và Bảo Vệ" },
        { idloai: "3", loaiDichVu: "Loại Dịch Vụ Gửi Xe và Đỗ Xe" },
        { idloai: "4", loaiDichVu: "Dịch Vụ Giải Trí và Thể Thao" },
        { idloai: "5", loaiDichVu: "Dịch Vụ Bảo Hiểm và An Toàn" },
        { idloai: "6", loaiDichVu: "Dịch Vụ Bảo Dưỡng và Sửa Chữa" },
        { idloai: "7", loaiDichVu: "Dịch vụ Khác" },
        { idloai: "8", loaiDichVu: "Dịch vụ Mới" }
    ];

   var typeOptions = '<a class="dropdown-item" href="#" data-value="">Tất cả loại dịch vụ</a>';
    serviceTypes.forEach(function (type) {
        typeOptions += '<a class="dropdown-item" href="#" data-value="' + type.idloai + '">' + type.loaiDichVu + '</a>';
    });

    var typeDropdown = document.getElementById('typeDropdown');
    if (typeDropdown) {
        typeDropdown.innerHTML = typeOptions;

        $('#typeDropdown').on('click', '.dropdown-item', function () {
            var selectedValue = $(this).data('value');
            typeButton.textContent = this.textContent;

            // Chuyển đổi giá trị thành chuỗi nếu không phải là số
            state.selectedTypeId = selectedValue ? selectedValue.toString() : null;

            console.log('Clicked type:', state.selectedTypeId);
            searchAndFilter();
        });
    } else {
        console.error("Element with id 'typeDropdown' not found.");
    }


// Tạo dropdown chọn tháng
var months = ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6",
    "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"];
// var monthOptions = '';
var monthOptions = '<a class="dropdown-item" href="#" data-value="">Tất cả tháng </a>';
months.forEach(function (month, index) {
    monthOptions += '<a class="dropdown-item" href="#" data-value="' + (index + 1) + '">' + month + '</a>';
});
var monthDropdown = document.getElementById('monthDropdown');
monthDropdown.innerHTML = monthOptions;

// Tạo dropdown chọn năm
var startYear = 2000; // Năm bắt đầu
var endYear = new Date().getFullYear(); // Năm hiện tại
// Tạo dropdown chọn năm với tùy chọn bỏ lọc
var yearOptions = '<a class="dropdown-item" href="#" data-value="">Tất cả năm</a>';
for (var year = endYear; year >= startYear; year--) {
    yearOptions += '<a class="dropdown-item" href="#" data-value="' + year + '">' + year + '</a>';
}
var yearDropdown = document.getElementById('yearDropdown');
yearDropdown.innerHTML = yearOptions;

// Xử lý sự kiện chọn tháng
$('#monthDropdown').on('click', '.dropdown-item', function () {
    monthButton.textContent = this.textContent;
    currentMonth = $(this).data('value'); // Lưu trữ giá trị tháng đã chọn
    searchAndFilter(); // Gọi lại hàm lọc
});

// Xử lý sự kiện chọn năm
$('#yearDropdown').on('click', '.dropdown-item', function () {
    yearButton.textContent = this.textContent;
    currentYear = $(this).data('value'); // Lưu trữ giá trị năm đã chọn
    searchAndFilter(); // Gọi lại hàm lọc
});

// Event listener for radio buttons
document.querySelectorAll('input[name="apartmentOptions"]').forEach(radio => {
    radio.addEventListener('change', function () {
        currentApartment = this.value;
        searchAndFilter();
    });
});

// Build the initial table
buildTable();
});

