


/*
1 - Loop Through Array & Access each value
2 - Create Table Rows & append to table
*/
var filteredTableData = tableData.filter(item => item.maGiaoDich !== "");

var state = {
    'querySet': filteredTableData,

    'page': 1,
    'rows': 5,
    'window': 5,
}

// Lưu trạng thái của tableData
// var originalTableData = JSON.parse(JSON.stringify(tableData));

buildTable()

function pagination(querySet, page, rows) {

    var trimStart = (page - 1) * rows
    var trimEnd = trimStart + rows

    var trimmedData = querySet.slice(trimStart, trimEnd)

    var pages = Math.round(querySet.length / rows);

    return {
        'querySet': trimmedData,
        'pages': pages,
    }
}

function pageButtons(pages) {
    var wrapper = document.getElementById('pagination-wrapper')

    wrapper.innerHTML = ``
    console.log('Pages:', pages)

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


    for (var page = maxLeft; page <= maxRight; page++) {
        // Check if the current page is equal to state.page
        var activeClass = state.page === page ? 'active' : '';
        wrapper.innerHTML += ` <li class="page-item page ${activeClass}" value=${page}><a class="page-link">${page}</a></li>`
    }

    if (state.page != 1) {
        wrapper.innerHTML = `<li class="page-item page" value=${1}><a class="page-link " ><i class="fa fa-arrow-left" aria-hidden="true"></i></i></a></li>` + wrapper.innerHTML
    }

    if (state.page != pages) {
        wrapper.innerHTML += `<li class="page-item page" value=${pages}><a class="page-link" href="#"><i class="fa fa-arrow-right" aria-hidden="true"></i></a></li>`
    }

    $('.page').on('click', function () {
        $('#table-body').empty()

        state.page = Number($(this).val())

        buildTable()
    })

}

// function buildTable() {
//     var table = $('#table-body');

//     var data = pagination(state.querySet, state.page, state.rows);
//     var myList = data.querySet;

//     table.empty(); // Xóa nội dung cũ trong bảng
//     for (var i in myList) {
//         if (myList[i].maGiaoDich !== "") {
//             var stt = (state.page - 1) * state.rows + parseInt(i) + 1;
//             var row = `<tr>
//                 <td>${stt}</td>
//                 <td>${myList[i].tenDichVu}</td>
//                 <td>${myList[i].loaiDichVu}</td>
//                 <td>${myList[i].maGiaoDich}</td>
//                 <td>${myList[i].soTien}</td>
//                 <td>${myList[i].phuongThucThanhToan}</td>
//                 <td>${myList[i].thoiGian}</td>
//                 <td id="idInput" style="display: none;">${myList[i].id}</td>
//              </tr>`;
//             table.append(row);
//         }
//     }

//     pageButtons(data.pages);
// }

function buildTable() {
    var table = $('#table-body');

    var data = pagination(state.querySet, state.page, state.rows);
    var myList = data.querySet;

    table.empty(); // Xóa nội dung cũ trong bảng

    // Find the index of the first row where maGiaoDich !== ""
    var startIndex = myList.findIndex(item => item.maGiaoDich !== "");

    // If no such row is found, set startIndex to 0
    if (startIndex === -1) {
        startIndex = 0;
    }

    for (var i = startIndex; i < myList.length; i++) {
        if (myList[i].maGiaoDich !== "") {
            var stt = (state.page - 1) * state.rows + i + 1; // Calculate stt for each row
            var row = `<tr>
                <td>${stt}</td>
                <td>${myList[i].tenDichVu}</td>
                <td>${myList[i].loaiDichVu}</td>
                <td>${myList[i].maGiaoDich}</td>
                <td>${myList[i].soTien}</td>
                <td>${myList[i].phuongThucThanhToan}</td>
                <td>${myList[i].thoiGian}</td>
                <td id="idInput" style="display: none;">${myList[i].id}</td>
             </tr>`;
             table.append(row);
        }
    }

    pageButtons(data.pages);
}



function clearLocalStorage() {
    localStorage.removeItem('tableData');
}

// Gọi hàm để xóa dữ liệu
clearLocalStorage();

// **************************************************************Filer***********************************
var currentMonth = null;
var currentYear = null;

// Search and filter function
function searchAndFilter() {
    var search = document.getElementById('searchInput').value.toLowerCase();
    var filteredData = tableData.filter(item => {
        // Thêm điều kiện lọc theo tháng và năm
        var dateParts = item.thoiGian.split('/'); // Tách ngày bắt đầu thành các phần
        var month = parseInt(dateParts[1], 10); // Lấy tháng và chuyển đổi thành số nguyên
        var year = parseInt(dateParts[2], 10); // Lấy năm và chuyển đổi thành số nguyên

        if (currentMonth && month != currentMonth) {
            return false;
        }
        if (currentYear && year != currentYear) {
            return false;
        }
        return Object.keys(item).some(key =>
            item[key].toString().toLowerCase().includes(search));
    });
    state.querySet = filteredData;
    state.page = 1;
    buildTable();
}
function updateState(newState) {
    state = newState;
    searchAndFilter();
}

// Event listener for the search input
document.getElementById('searchInput').addEventListener('keyup', searchAndFilter);

document.addEventListener('DOMContentLoaded', function () {
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
    var startYear = 2020; // Năm bắt đầu
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
});

