document.addEventListener('DOMContentLoaded', function () {
        // Sample data
        var tableData = [
     {
    "stt": "",
    "id": 1,
    "khoanThu": "Quản Lý Chung Cư",
    "khoanChi": "Quản Lý Chung Cư",
    "soTienThu": 1500000,
    "soTienChi": 1500000,
    "thang": "2",
    "nam": "2023",
    "chungCu": "s1"
  },
  {
    "stt": "",
    "id": 2,
    "khoanThu": "Dịch Vụ Nước",
    "khoanChi": "Dịch Vụ Nước",
    "soTienThu": 800000,
    "soTienChi": 800000,
    "thang": "3",
    "nam": "2023",
    "chungCu": "s1"
  },
  {
    "stt": "",
    "id": 3,
    "khoanThu": "Dịch Vụ Điện",
    "khoanChi": "Dịch Vụ Điện",
    "soTienThu": 1200000,
    "soTienChi": 1200000,
    "thang": "4",
    "nam": "2023",
    "chungCu": "s1"
  },
  {
    "stt": "",
    "id": 4,
    "khoanThu": "Dịch Vụ Internet",
    "khoanChi": "Dịch Vụ Internet",
    "soTienThu": 900000,
    "soTienChi": 900000,
    "thang": "5",
    "nam": "2023",
    "chungCu": "s1"
  },
  {
    "stt": "",
    "id": 5,
    "khoanThu": "Dịch Vụ Thu Gom Rác",
    "khoanChi": "Dịch Vụ Thu Gom Rác",
    "soTienThu": 500000,
    "soTienChi": 500000,
    "thang": "6",
    "nam": "2023",
    "chungCu": "s1"
  },
  {
    "stt": "",
    "id": 6,
    "khoanThu": "Dịch Vụ Bảo Vệ",
    "khoanChi": "Dịch Vụ Bảo Vệ",
    "soTienThu": 2000000,
    "soTienChi": 2000000,
    "thang": "7",
    "nam": "2023",
    "chungCu": "s1"
  },
  {
    "stt": "",
    "id": 7,
    "khoanThu": "Dịch Vụ An Ninh",
    "khoanChi": "Dịch Vụ An Ninh",
    "soTienThu": 1800000,
    "soTienChi": 1800000,
    "thang": "8",
    "nam": "2023",
    "chungCu": "s1"
  },
  {
    "stt": "",
    "id": 8,
    "khoanThu": "Gửi Xe Đạp",
    "khoanChi": "Gửi Xe Đạp",
    "soTienThu": 600000,
    "soTienChi": 600000,
    "thang": "9",
    "nam": "2023",
    "chungCu": "s1"
  },
  {
    "stt": "",
    "id": 9,
    "khoanThu": "Gửi Xe Máy",
    "khoanChi": "Gửi Xe Máy",
    "soTienThu": 700000,
    "soTienChi": 700000,
    "thang": "10",
    "nam": "2023",
    "chungCu": "s1"
  },
  {
    "stt": "",
    "id": 10,
    "khoanThu": "Gửi Xe Đạp Điện",
    "khoanChi": "Gửi Xe Đạp Điện",
    "soTienThu": 850000,
    "soTienChi": 850000,
    "thang": "11",
    "nam": "2023",
    "chungCu": "s1"
  },
  {
    "stt": "",
    "id": 11,
    "khoanThu": "Đỗ Xe Đạp",
    "khoanChi": "Đỗ Xe Đạp",
    "soTienThu": 400000,
    "soTienChi": 400000,
    "thang": "12",
    "nam": "2023",
    "chungCu": "s1"
  },
  {
    "stt": "",
    "id": 12,
    "khoanThu": "Gửi Xe Máy Điện",
    "khoanChi": "Gửi Xe Máy Điện",
    "soTienThu": 950000,
    "soTienChi": 950000,
    "thang": "1",
    "nam": "2024",
    "chungCu": "s2"
  },
  {
    "stt": "",
    "id": 13,
    "khoanThu": "Sử Dụng Hồ Bơi",
    "khoanChi": "Sử Dụng Hồ Bơi",
    "soTienThu": 1200000,
    "soTienChi": 1200000,
    "thang": "2",
    "nam": "2024",
    "chungCu": "s2"
  },
  {
    "stt": "",
    "id": 14,
    "khoanThu": "Dịch Vụ Gym",
    "khoanChi": "Dịch Vụ Gym",
    "soTienThu": 900000,
    "soTienChi": 900000,
    "thang": "3",
    "nam": "2024",
    "chungCu": "s1"
  }
];


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
              <td>${myList[i].khoanThu}</td>
              <td>${myList[i].soTienThu}</td>
              <td>${myList[i].khoanChi}</td>
              <td>${myList[i].soTienChi}</td>
              <td></td>
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

