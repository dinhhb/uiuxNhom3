var state = {
    'querySet': tableTamTru,

    'page': 1, 'rows': 5, 'window': 5,
}

buildTable(); // Xây dựng bảng ngay lập tức sau khi tải dữ liệu

function saveToLocalStorage(data) {
    localStorage.setItem('tableTamTru', JSON.stringify(data));
}


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

    for (var i = 0; i < myList.length; i++) {
        var stt = (state.page - 1) * state.rows + parseInt(i) + 1;

        //Keep in mind we are using "Template Litterals to create rows"
        var row = `<tr>
                  <td>${stt}</td>
                  <td>${myList[i].CCCD}</td>
                  <td>${myList[i].hoTen}</td>
                  <td>${myList[i].gioiTinh}</td>
                  <td>${myList[i].DDThuongTru}</td>
                  <td>
                    <i class="fa fa-trash-o mr-2" style="font-size:20px" aria-hidden="true" ></i>
                    <i class="fa fa-pencil" style="font-size:20px" aria-hidden="true" data-toggle="modal" data-target="#infoModalChange"></i>
                    </td>
                    <td> <button type="button" class="custom-btn view-details-button" data-toggle="modal" data-id="${myList[i].id}">Xem thêm</button></td>
                                                            `
        table.append(row)
    }

    pageButtons(data.pages)
}

var currentMonth = null;
var currentYear = null;
var currentApartment = 'all';

// Search and filter function
function searchAndFilter() {
    var search = document.getElementById('searchInput').value.toLowerCase();
    var filteredData = tableTamTru.filter(item => {
        // Thêm điều kiện lọc theo tháng và năm
        var dateParts = item.ngayBatDau.split('/'); // Tách ngày bắt đầu thành các phần
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

});

// Hàm này sẽ được gọi khi người dùng nhấn vào nút "Xem thêm".

function formatDate(dateString) {
    var parts = dateString.split("/");
    return parts[2] + "-" + parts[1] + "-" + parts[0];
}

function showDetails(id) {
    // Tìm kiếm thông tin dựa trên ID trong mảng tableTamTru
    var person = tableTamTru.find(item => item.id === id);
    if (person) {
        console.log(person);
        // Cập nhật thông tin vào các trường trong modal
        document.getElementById('fullName').value = person.hoTen;
        document.getElementById('dob').value = formatDate(person.ngaySinh);
        document.getElementById('cccd').value = person.CCCD;
        document.getElementById('genderSelect').value = person.gioiTinh;
        document.getElementById('diaChiThuongTru').value = person.DDThuongTru;
        document.getElementById('diaChiTamVang').value = person.DDTamTru;
        document.getElementById('soDienThoai').value = person.SDT;
        document.getElementById('ngheNghiep').value = person.ngheNghiep;
        document.getElementById('ngayBatDau').value = formatDate(person.ngayBatDau);
        document.getElementById('ngayKetThuc').value = formatDate(person.ngayKetThuc);
        document.getElementById('ChungCu').value = person.canHo;

        // Gán giá trị cho textarea
        var reasonTextarea = document.getElementById('reason');
        reasonTextarea.value = person.lyDo;

        // Cập nhật bộ đếm ký tự
        var charNumDisplay = document.getElementById('charNum');
        charNumDisplay.textContent = `${reasonTextarea.value.length} / 225`;


        // Hiển thị modal
        $('#infoModal').modal('show');
    }
}

// Gắn sự kiện click vào tất cả nút "Xem thêm" khi trang đã tải xong.
document.addEventListener('DOMContentLoaded', function () {
    var tableBody = document.getElementById('table-body');
    tableBody.addEventListener('click', function (event) {
        var target = event.target;
        // Kiểm tra xem có phải là nút "Xem thêm" hay không
        if (target.classList.contains('view-details-button')) {
            var id = target.getAttribute('data-id');
            showDetails(Number(id));
        }
    });
});

// Thêm sự kiện lắng nghe cho các radio button của chung cư
document.querySelectorAll('input[name="apartmentOptions"]').forEach(radio => {
    radio.addEventListener('change', function () {
        currentApartment = this.value; // Cập nhật lựa chọn chung cư
        searchAndFilter(); // Gọi lại hàm lọc
    });
});


// Biến toàn cục để lưu trữ ID của người dùng hiện tại đang được chỉnh sửa
var currentEditingId = null;

// Hàm này sẽ được gọi khi người dùng nhấn vào biểu tượng chỉnh sửa (fa fa-pencil).
function showEditForm(id) {
    var person = tableTamTru.find(item => item.id === id);
    if (person) {
        currentEditingId = person.id
        // Cập nhật thông tin vào các trường trong modal chỉnh sửa
        document.getElementById('fullName1').value = person.hoTen;
        document.getElementById('dob1').value = formatDate(person.ngaySinh);
        document.getElementById('cccd1').value = person.CCCD;
        document.getElementById('genderSelect1').value = person.gioiTinh;
        document.getElementById('diaChiThuongTru1').value = person.DDThuongTru;
        document.getElementById('diaChiTamTru1').value = person.DDTamTru;
        document.getElementById('soDienThoai1').value = person.SDT;
        document.getElementById('ngheNghiep1').value = person.ngheNghiep;
        document.getElementById('ngayBatDau1').value = formatDate(person.ngayBatDau);
        document.getElementById('ngayKetThuc1').value = formatDate(person.ngayKetThuc);
        document.getElementById('ChungCu1').value = person.canHo;
        // Gán giá trị cho textarea
        var reasonTextarea = document.getElementById('reason1');
        reasonTextarea.value = person.lyDo;

        // Cập nhật bộ đếm ký tự
        var charNumDisplay = document.getElementById('charNum1');
        charNumDisplay.textContent = `${reasonTextarea.value.length} / 225`;


        // Hiển thị modal chỉnh sửa
        $('#infoModalChange').modal('show');
    }
}

// Gắn sự kiện click vào biểu tượng chỉnh sửa
document.addEventListener('DOMContentLoaded', function () {
    var tableBody = document.getElementById('table-body');
    tableBody.addEventListener('click', function (event) {
        var target = event.target;
        // Kiểm tra xem có phải là biểu tượng chỉnh sửa hay không
        if (target.classList.contains('fa-pencil')) {
            var id = target.closest('tr').querySelector('.view-details-button').getAttribute('data-id');
            showEditForm(Number(id));
        }
    });
});


function confirmAndSaveChanges() {
    // Hãy chắc chắn rằng currentEditingId đã được đặt giá trị
    if (currentEditingId == null) {
        console.error("No current editing ID set.");
        return;
    }
    var editedPerson = {
        id: currentEditingId,
        hoTen: document.getElementById('fullName1').value,
        ngaySinh: formatDateReverse(document.getElementById('dob1').value),
        CCCD: document.getElementById('cccd1').value,
        gioiTinh: document.getElementById('genderSelect1').value,
        DDThuongTru: document.getElementById('diaChiThuongTru1').value,
        DDTamTru: document.getElementById('diaChiTamTru1').value,
        SDT: document.getElementById('soDienThoai1').value,
        ngheNghiep: document.getElementById('ngheNghiep1').value,
        ngayBatDau: formatDateReverse(document.getElementById('ngayBatDau1').value),
        ngayKetThuc: formatDateReverse(document.getElementById('ngayKetThuc1').value),
        canHo: document.getElementById('ChungCu1').value,
        lyDo: document.getElementById('reason1').value

    };
    // Hiển thị modal xác nhận trước khi lưu
    $('#confirmationModal').modal('show');
    // Tìm vị trí của người dùng trong mảng và cập nhật thông tin
    var index = tableTamTru.findIndex(item => item.id === currentEditingId);
    if (index !== -1) {
        tableTamTru[index] = editedPerson;
    }
    // Đóng modal chỉnh sửa và modal xác nhận
    $('#infoModalChange').modal('hide');
    $('#confirmationModal').modal('hide');
    // Lưu dữ liệu vào localStorage
    saveToLocalStorage(tableTamTru);

    // Xây dựng lại bảng với dữ liệu đã cập nhật
    buildTable();

    // Gọi lại hàm lọc
    searchAndFilter();
}

document.getElementById('btn-xac-nhan').addEventListener('click', confirmAndSaveChanges);


// Hàm này sẽ được gọi khi nhấn nút "Save changes"
function saveChanges() {
    var editedPerson = {
        id: currentEditingId,
        hoTen: document.getElementById('fullName1').value,
        ngaySinh: formatDateReverse(document.getElementById('dob1').value),
        CCCD: document.getElementById('cccd1').value,
        gioiTinh: document.getElementById('genderSelect1').value,
        DDThuongTru: document.getElementById('diaChiThuongTru1').value,
        DDTamTru: document.getElementById('diaChiTamTru1').value,
        SDT: document.getElementById('soDienThoai1').value,
        ngheNghiep: document.getElementById('ngheNghiep1').value,
        ngayBatDau: formatDateReverse(document.getElementById('ngayBatDau1').value),
        ngayKetThuc: formatDateReverse(document.getElementById('ngayKetThuc1').value),
        lyDo: document.getElementById('reason1').value
    };
    // Hiển thị modal xác nhận trước khi lưu
    $('#confirmationModal').modal('show');
    // Tìm vị trí của người dùng trong mảng và cập nhật thông tin
    var index = tableTamTru.findIndex(item => item.id === currentEditingId);
    if (index !== -1) {
        tableTamTru[index] = editedPerson;
    }
    // Đóng modal chỉnh sửa và modal xác nhận
    $('#infoModalChange').modal('hide');
    $('#confirmationModal').modal('hide');
    buildTable();
}

// Chuyển đổi ngày tháng từ dạng YYYY-MM-DD sang DD/MM/YYYY
function formatDateReverse(dateString) {
    var parts = dateString.split("-");
    return parts[2] + "/" + parts[1] + "/" + parts[0];
}

document.getElementById('saveChangesButton').addEventListener('click', function () {
    $('#confirmationModal').modal('show');
});


// Định nghĩa hàm hiển thị modal xác nhận xóa
function confirmDelete(id) {
    // Lưu ID của hàng cần xóa vào biến toàn cục
    currentDeletingId = id;

    // Hiển thị modal xác nhận xóa
    $('#deleteConfirmationModal').modal('show');
}

// Thêm sự kiện click vào biểu tượng thùng rác
document.addEventListener('DOMContentLoaded', function () {
    var tableBody = document.getElementById('table-body');
    tableBody.addEventListener('click', function (event) {
        var target = event.target;
        if (target.classList.contains('fa-trash-o')) {
            var id = target.closest('tr').querySelector('.view-details-button').getAttribute('data-id');
            confirmDelete(Number(id));
        }
    });
});

// Xử lý sự kiện xác nhận xóa
document.getElementById('confirmDeleteButton').addEventListener('click', function () {
    // Xóa dữ liệu từ mảng tableTamTru và state.querySet
    tableTamTru = tableTamTru.filter(item => item.id !== currentDeletingId);
    state.querySet = state.querySet.filter(item => item.id !== currentDeletingId);

    // Lưu dữ liệu đã cập nhật vào localStorage
    saveToLocalStorage(tableTamTru);



    // Đóng modal xác nhận xóa
    $('#deleteConfirmationModal').modal('hide');
    // Kiểm tra xem trang hiện tại có còn mục nào không
    var currentPageItems = tableTamTru.slice((state.page - 1) * state.rows, state.page * state.rows);
    if (currentPageItems.length === 0 && state.page > 1) {
        // Nếu không, chuyển đến trang trước đó
        state.page--;
        buildTable();
    }else {
    // Xây dựng lại bảng với dữ liệu đã cập nhật
    // Đặt buildTable để chạy ngay sau tất cả các tác vụ hiện tại trong call stack
    setTimeout(buildTable, 0);
    }
    console.log("Deleted item. New data:", tableTamTru);
});

