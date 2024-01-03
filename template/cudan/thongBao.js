var state = {
    'querySet': tableData3,

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

function buildTable() {
    // Assume you have a container element with class 'DSthongbao'
    var dsThongBaoContainer = document.querySelector('.DSthongbao');
    var data = pagination(state.querySet, state.page, state.rows);
    var myList = data.querySet;

    // Clear existing content in the container
    dsThongBaoContainer.innerHTML = '';

    // Loop through each item in myList and create HTML elements
    myList.forEach(function (item) {
        var thongBaoElement = document.createElement('div');
        thongBaoElement.classList.add('require');

        var titleElement = document.createElement('div');
        titleElement.classList.add('title-require');
        titleElement.textContent = item.title;

        var contentElement = document.createElement('div');
        contentElement.classList.add('content-require');
        contentElement.textContent = 'Gửi: Ông Mai Quốc Bảo, hộ gia đình số 1, căn hộ chung cư S2...';

        var dateElement = document.createElement('div');
        dateElement.classList.add('date-require');
        dateElement.textContent = item.date;

        var viewMoreButton = document.createElement('div');
        viewMoreButton.classList.add('detail-require');
        viewMoreButton.textContent = 'Xem thêm';

        // Create a closure to capture the current item
        (function (currentItem) {
            // Add click event listener to the 'Xem thêm' button
            viewMoreButton.addEventListener('click', function () {
                openInfoModal(currentItem);
            });
        })(item);

        // Append child elements to thongBaoElement
        thongBaoElement.appendChild(titleElement);
        thongBaoElement.appendChild(contentElement);
        thongBaoElement.appendChild(dateElement);
        thongBaoElement.appendChild(viewMoreButton);

        // Append thongBaoElement to dsThongBaoContainer
        dsThongBaoContainer.appendChild(thongBaoElement);
    });

    pageButtons(data.pages);
}

function openInfoModal(selectedItem) {
    // Set the content of the modal based on the selected item
    document.getElementById('inforTitle').textContent = selectedItem.title;
    document.getElementById('infornoiDung').textContent = selectedItem.noiDung;
    // document.getElementById('inforimage').textContent = selectedItem.image;
    // Create an img element
    var imageElement = document.createElement('img');
    imageElement.src = `../assets/images/cudan/${selectedItem.image}`;
    imageElement.alt = "Ảnh minh họa";
    imageElement.style.maxWidth = "100%";
    imageElement.style.height = "auto";

    // Get the container element and append the img element to it
    var imageContainer = document.getElementById('inforimage');
    imageContainer.innerHTML = ''; // Clear existing content
    imageContainer.appendChild(imageElement);
    // Set other modal content based on the selected item

    // Show the 'Xem thêm' modal
    $('#infoModal').modal('show');
}

// function clearLocalStorage() {
//     localStorage.removeItem('tableData');
// }

// // Gọi hàm để xóa dữ liệu
// clearLocalStorage();

// **************************************************************Filer***********************************
var currentMonth = null;
var currentYear = null;
var currentStatus = null;

// Search and filter function
function searchAndFilter() {
    // var search = document.getElementById('searchInput').value.toLowerCase();
    var filteredData = tableData3.filter(item => {
        // Thêm điều kiện lọc theo tháng và năm
        var dateParts = item.date.split('/'); // Tách ngày bắt đầu thành các phần
        var month = parseInt(dateParts[1], 10); // Lấy tháng và chuyển đổi thành số nguyên
        var year = parseInt(dateParts[2], 10); // Lấy năm và chuyển đổi thành số nguyên

        if (currentMonth !== null && month !== currentMonth) {
            return false;
        }
        if (currentYear !== null && year !== currentYear) {
            return false;
        }
        if (currentStatus === "notRead" && item.trangThai !== "Chưa đọc") {
            return false;
        }
        if (currentStatus === "Read" && item.trangThai !== "Đã đọc") {
            return false;
        }
        // Uncomment the line below if you want to include the search functionality
        // return Object.keys(item).some(key => item[key].toString().toLowerCase().includes(search));
        return true; // Return true for now, as search functionality is commented out
    });
    state.querySet = filteredData;
    state.page = 1;
    buildTable();
}

function updateState(newState) {
    state = newState;
    searchAndFilter();
}

document.addEventListener('DOMContentLoaded', function () {
    var monthButton = document.getElementById('monthButton');
    var yearButton = document.getElementById('yearButton');

    // Tạo dropdown chọn tháng
    var months = ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6",
        "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"];

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
        button.textContent = (text === 'notRead') ? 'Chưa đọc' : (text === 'Read') ? 'Đã đọc' : 'Tất cả';
    }
}
