
var activeItems = tableDonTamVang;
console.log(activeItems)
var state = {
    'querySet': activeItems,

    'page': 1, 'rows': 5, 'window': 5,
}

buildTable(); // Xây dựng bảng ngay lập tức sau khi tải dữ liệu

function pagination(querySet, page, rows) {

    var trimStart = (page - 1) * rows
    var trimEnd = trimStart + rows

    var trimmedData = querySet.slice(trimStart, trimEnd)

    var pages = Math.ceil(querySet.length / rows);

    return {
        'querySet': trimmedData, 'pages': pages,
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

    if (state.page != pages && pages != 0) {
        wrapper.innerHTML += `<li class="page-item page" value=${pages}><a class="page-link" href="#"><i class="fa fa-arrow-right" aria-hidden="true"></i></a></li>`
    }

    $('.page').on('click', function () {
        $('#table-body').empty()

        state.page = Number($(this).val())

        buildTable()
    })

}



function buildTable() {
    var table = $('#table-body')
    // Clear the current table before repopulating
    table.empty();
    var data = pagination(state.querySet, state.page, state.rows)
    var myList = data.querySet
    var buttonColor;
    var buttonLabel;
    var buttonTextColor;
    for (var i = 0; i < myList.length; i++) {

        if (myList[i].tinhTrang === "Chưa đóng") {
            buttonColor = "#f7c5c0";
            buttonLabel = "Chưa đóng";
            buttonTextColor = "#C64141";

        } else if (myList[i].tinhTrang === "Đã đóng") {
            buttonColor = "#DDF2FD";
            buttonLabel = "Đã đóng";
            buttonTextColor = "#427D9D";

        }

        // var buttonColor = (myList[i].trangThai === "Chưa đóng") ? "#DDF2FD" : "#f7c5c0";
        // var buttonLabel = (myList[i].trangThai === "Chưa đóng") ? "Đóng phí" : "Đã đóng";
        // var buttonTextColor = (myList[i].trangThai === "Chưa đóng") ? "#427D9D" : "#C64141";

        // Thêm sự kiện click để mở pop-up nếu là "Đóng phí"
        var stt = (state.page - 1) * state.rows + parseInt(i) + 1;

        //Keep in mind we are using "Template Litterals to create rows"
        var row = `<tr>
                  <td>${stt}</td>
                  <td>${myList[i].tenChuHo}</td>
                  <td>${myList[i].tenDichVu}</td>
                  <td>${myList[i].loaiDichVu}</td>
                  <td>${myList[i].hanDong}</td>
                  <td>${myList[i].soTien}</td>
                  <td id="idInput" style="display: none;">${myList[i].id}</td>
                  <td> 
                  <button type="button" class="custom-btn"
                    data-toggle="modal" style="background-color: ${buttonColor}; color: ${buttonTextColor};"
                    id="paymentButton_${myList[i].id}" 
                    data-button-label="${buttonLabel}" 
                  >
                    ${buttonLabel}
                  </button>
                </td>
             </tr>`;
        table.append(row)
    }

    pageButtons(data.pages)
}
function confirmApproval(id) {
    // Lưu trữ ID cần duyệt vào biến toàn cục
    window.idToApprove = id;

    // Hiển thị modal xác nhận
    $('#confirmationModal').modal('show');
}

document.getElementById('btn-xac-nhan').addEventListener('click', approveRequest);
function approveRequest() {
    // Tìm kiếm thông tin dựa trên ID trong mảng activeItems
    var index = tableDonTamVang.findIndex(item => item.id === window.idToApprove);
    if (index !== -1) {
        // Chuyển dữ liệu từ activeItems sang tableData
        var person = tableDonTamVang[index];
        // Tạo ID mới dựa trên số lượng mục trong tableData
        person.id = tableData.length + 1;

        // Thêm mục vào tableData
        tableData.push(person);

        // Lưu dữ liệu vào localStorage
        localStorage.setItem('tableDonTamVang', JSON.stringify(tableDonTamVang));
        localStorage.setItem('tableData', JSON.stringify(tableData));

        // Đóng modal xác nhận
        $('#confirmationModal').modal('hide');
        // Hiển thị modal
        $('#successModal').modal('show');

        // Cập nhật bảng
        buildTable();
        // Kiểm tra xem trang hiện tại có còn mục nào không
        var currentPageItems = tableDonTamVang.slice((state.page - 1) * state.rows, state.page * state.rows);
        if (currentPageItems.length === 0 && state.page > 1) {
            // Nếu không, chuyển đến trang trước đó
            state.page--;
            buildTable();
        }
    }
}

var currentMonth = null;
var currentYear = null;
var currentApartment = 'all';
var currentStatus = null;

// Search and filter function
function searchAndFilter() {
    var search = document.getElementById('searchInput').value.toLowerCase();
    var filteredData = activeItems.filter(item => {
        // Thêm điều kiện lọc theo tháng và năm
        var dateParts = item.hanDong.split('/'); // Tách ngày bắt đầu thành các phần
        var month = parseInt(dateParts[1], 10); // Lấy tháng và chuyển đổi thành số nguyên
        var year = parseInt(dateParts[2], 10); // Lấy năm và chuyển đổi thành số nguyên

        if (currentMonth && month != currentMonth) {
            return false;
        }
        if (currentYear && year != currentYear) {
            return false;
        }
        if (currentApartment !== 'all' && item.canHo !== currentApartment) {
            return false;
        }
        if (currentStatus === "notPay" && item.tinhTrang !== "Chưa đóng") {
            return false;
        }
        if (currentStatus === "Pay" && item.tinhTrang !== "Đã đóng") {
            return false;
        }
        return Object.keys(item).some(key => item[key].toString().toLowerCase().includes(search));
    });
    state.querySet = filteredData;
    state.page = 1;
    buildTable();
}

// Event listener for the search input
document.getElementById('searchInput').addEventListener('keyup', searchAndFilter);


document.addEventListener('DOMContentLoaded', function () {
    var monthButton = document.getElementById('monthButton');
    var yearButton = document.getElementById('yearButton');

    // Tạo dropdown chọn tháng
    var months = ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"];
    // var monthOptions = '';
    var monthOptions = '<a class="dropdown-item" href="#" data-value="">Tất cả tháng </a>';
    months.forEach(function (month, index) {
        monthOptions += '<a class="dropdown-item" href="#" data-value="' + (index + 1) + '">' + month + '</a>';
    });
    var monthDropdown = document.getElementById('monthDropdown');
    monthDropdown.innerHTML = monthOptions;

    // Tạo dropdown chọn năm
    var startYear = 1900; // Năm bắt đầu
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

// Hàm này sẽ được gọi khi người dùng nhấn vào nút "Xem thêm".

function formatDate(dateString) {
    var parts = dateString.split("/");
    return parts[2] + "-" + parts[1] + "-" + parts[0];
}


// Thêm sự kiện lắng nghe cho các radio button của chung cư
document.querySelectorAll('input[name="apartmentOptions"]').forEach(radio => {
    radio.addEventListener('change', function () {
        currentApartment = this.value; // Cập nhật lựa chọn chung cư
        searchAndFilter(); // Gọi lại hàm lọc
    });
});

function updateButtonText(text) {
    // Lấy thẻ button và cập nhật nội dung của nó
    var button = document.getElementById('choiceButton');
    if (button) {
        button.textContent = (text === 'notPay') ? 'Chưa đóng' : 'Tất cả';
        button.textContent = (text === 'Pay') ? 'Đã đóng' : 'Tất cả';

    }
}

function updateModalContent(modalId, newContent) {
    // Find the element that holds the content in the modal
    var modalContentElement = document.querySelector(modalId + ' .modal-body');
    if (modalContentElement) {
        // Update the content of the modal
        modalContentElement.innerHTML = newContent;
    }
}

document.getElementById('addServiceButton').addEventListener('click', function(event) {
    event.preventDefault()
    console.log("popup");
    $('#addServiceModal').modal('show');
});

document.addEventListener('DOMContentLoaded', function() {
    // Event listener for the 'Thêm dịch vụ' button in addServiceModal
    document.getElementById('addServiceButtonPopup').addEventListener('click', function() {
        updateModalContent('#confirmationModal', 'Bạn có chắc chắn muốn thêm dịch vụ này không?');
        $('#addServiceModal').modal('hide');
        // Show the confirmationModal
        $('#confirmationModal').modal('show');
    });

    // Event listener for the 'Xác nhận' button in confirmationModal
    document.getElementById('btn-xac-nhan').addEventListener('click', function() {
        updateModalContent('#successModal', 'Dịch vụ mới đã được thêm thành công');
        // Close the confirmationModal and show the successModal
        $('#confirmationModal').modal('hide');
        $('#successModal').modal('show');
    });
});


