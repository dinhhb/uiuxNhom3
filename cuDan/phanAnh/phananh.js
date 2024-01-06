


/*
1 - Loop Through Array & Access each value
2 - Create Table Rows & append to table
*/

var state = {
    'querySet': tableData1,
    'page': 1,
    'rows': 5,
    'window': 5,
}

// Lưu trạng thái của tableData1
// var originaltableData1 = JSON.parse(JSON.stringify(tableData1));

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

function buildTable() {
    var table = $('#table-body');

    var data = pagination(state.querySet, state.page, state.rows);
    var myList = data.querySet;

    table.empty(); // Xóa nội dung cũ trong bảng
    // var characterLimit = 50;

    for (var i in myList) {
        var stt = (state.page - 1) * state.rows + parseInt(i) + 1;
        var noiDung = myList[i].noiDung.length > 50 ? myList[i].noiDung.substring(0, 50) + '...' : myList[i].noiDung;

        var row = `<tr>
                <td style="padding-left:35px;">${stt}</td>
                <td class="loaiPA">${myList[i].loaiPA}</td>
                <td class="NoiDung" id="noiDung${i}">${noiDung}</td>
                <td>${myList[i].trangThai}</td>
                <td>${myList[i].thoiGian}</td>
                <td id="idInput" style="display: none;">${myList[i].id}</td>
                <td id="image" class="image" style="display: none;">${myList[i].image}</td>
                <td class="noiDung" style="display: none;">${myList[i].noiDung}</td>
                <td> 
                <button type="button" class="custom-btn" data-toggle="modal" data-target="#infoModal" onclick="detail(${i})">Xem thêm</button>
                </td>
             </tr>`;

        table.append(row);
    }

    pageButtons(data.pages);
}

// **************************************************************Filer***********************************
var currentMonth = null;
var currentYear = null;
var currentStatus = null;

// Search and filter function
function searchAndFilter() {
    var search = document.getElementById('searchInput').value.toLowerCase();
    var filteredData = tableData1.filter(item => {
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
        if (currentStatus === "notduyet" && item.trangThai !== "Chưa duyệt") {
            return false;
        }
        if (currentStatus === "duyet" && item.trangThai !== "Đã duyệt") {
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

    // Xử lý sự kiện chọn trạng thái
    $('#choice').on('click', '.dropdown-item', function () {
        var selectedStatus = this.getAttribute('value');
        currentStatus = selectedStatus; // Lưu trữ giá trị trạng thái đã chọn
        updateButtonText(selectedStatus); // Cập nhật nội dung của nút
        searchAndFilter(); // Gọi lại hàm lọc
    });
});

function updateButtonText(text) {
    // Lấy thẻ button và cập nhật nội dung của nó
    var button = document.getElementById('choiceButton');
    if (button) {
        button.textContent = (text === 'notduyet') ? 'Chưa duyệt' : 'Tất cả';
        button.textContent = (text === 'duyet') ? 'Chưa duyệt' : 'Tất cả';
    }
}

// ***************************** Xem thêm ************************************
function detail(id) {
    var loaiPA = $('.loaiPA').eq(id).text();
    var noiDung = $('.noiDung').eq(id).text();
    var imageSrc = $('.image').eq(id).text();

    // var imageSrc = $('#image').text();
    console.log(id, imageSrc, noiDung);

    $('#inforloaiPA').text(loaiPA);
    $('#infornoiDung').text(noiDung);
    $('#inforimage').html(`<img src="../../assets/images/cudan/${imageSrc}" alt="Phản ánh Image" style="max-width: 100%; height: auto;">`);

    // Hiển thị modal xem them
    $('#infoModel').modal('show');
    $('#infoModel').modal('hide');

}
// *********************** Submit *************************
function confirmSubmission(event) {
    event.preventDefault();

    // Display the confirmation modal
    // $('#confirmationModal').modal('show');

    // Event listener for the confirm button in the confirmation modal
    $('#btn-xac-nhan').off('click').on('click', function () {
        // Close the confirmation modal
        $('#confirmationModal').modal('hide');

        // Lấy giá trị từ form
        var loaiPA = document.getElementById("typePA").value;
        var image = document.getElementById("avatar").value; // Lưu đường dẫn ảnh, bạn có thể xử lý đường dẫn này nếu cần
        var noiDung = document.getElementById("reason1").value;
        var imageName = image.replace(/^.*[\\\/]/, '');

        // Tạo đối tượng JSON mới
        var newRecord = {
            "id": tableData1.length + 1,
            "idCudan": "CDS201",
            "idHome": "S201",
            "loaiPA": loaiPA,
            "trangThai": "Chưa duyệt",
            "noiDung": noiDung,
            "image": imageName,
            "thoiGian": new Date().toLocaleDateString()
        };

        // Thêm đối tượng mới vào mảng
        tableData1.push(newRecord);

        // Lưu lại vào localStorage
        localStorage.setItem('tableData1', JSON.stringify(tableData1));

        // Show the success modal
        $('#successModal').modal('show');

        // Reset the form
        document.getElementById("myForm").reset();
        $('#newPA').modal('hide');
        location.reload();
    });
}

// ************storage******************
function clearLocalStorage() {
    localStorage.removeItem('tableData1');
}

// Gọi hàm để xóa dữ liệu
clearLocalStorage();

