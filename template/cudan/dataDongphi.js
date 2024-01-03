


/*
1 - Loop Through Array & Access each value
2 - Create Table Rows & append to table
*/


var state = {
  'querySet': tableData,

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
  var table = $('#table-body');

  var data = pagination(state.querySet, state.page, state.rows);
  var myList = data.querySet;

  table.empty(); // Xóa nội dung cũ trong bảng

  for (var i in myList) {
    var buttonColor = (myList[i].trangThai === "Chưa đóng") ? "#DDF2FD" : "#f7c5c0";
    var buttonLabel = (myList[i].trangThai === "Chưa đóng") ? "Đóng phí" : "Đã đóng";
    var buttonTextColor = (myList[i].trangThai === "Chưa đóng") ? "#427D9D" : "#C64141";

    // Thêm sự kiện click để mở pop-up nếu là "Đóng phí"
    var paymentAction = (myList[i].trangThai === "Chưa đóng") ? `openPaymentModal('${myList[i].id}', '${myList[i].tenDichVu}', '${myList[i].loaiDichVu}', '${myList[i].soTien}', '${myList[i].hanDong}')` : '';
    var stt = (state.page - 1) * state.rows + parseInt(i) + 1;

    var row = `<tr>
              <td>${stt}</td>
              <td>${myList[i].tenDichVu}</td>
              <td>${myList[i].loaiDichVu}</td>
              <td>${myList[i].trangThai}</td>
              <td>${myList[i].soTien}</td>
              <td id="hanDong">${myList[i].hanDong}</td>
              <td id="idInput" style="display: none;">${myList[i].id}</td>
              <td> 
                <button type="button" class="custom-btn"
                  data-toggle="modal" style="background-color: ${buttonColor}; color: ${buttonTextColor};"
                  onclick="${paymentAction}"
                  id="paymentButton_${myList[i].id}" 
                  data-button-label="${buttonLabel}" 
                >
                  ${buttonLabel}
                </button>
              </td>
           </tr>`;

    table.append(row);
  }

  pageButtons(data.pages);
}


function openPaymentModal(id, tenDichVu, loaiDichVu, soTien, hanDong) {
  $('#idInput').text(id);
  $('#tenDV').val(tenDichVu);
  $('#loaiDV').val(loaiDichVu);
  $('#soTien').val(soTien);
  $('#hanDong').text(hanDong);

  // Mở pop-up
  $('#paymentModal').modal('show');
}

// Đóng pop-up
function closePaymentModal() {
  $('#paymentModal').modal('hide');
}

// Gọi hàm updateStatus và truyền vào tableData
let idToUpdate = 1; // Đặt giá trị id cần cập nhật

// Hàm updateStatus nhận thêm tham số data để cập nhật dữ liệu
function updateStatus(id, data) {
  console.log('Update Status - Received ID:', id);

  // Chuyển đổi kiểu dữ liệu của id thành số
  id = parseInt(id);

  // Tìm mục có ID phù hợp trong dữ liệu được truyền vào (data)
  const itemIndex = data.findIndex(item => item.id === id);

  if (itemIndex !== -1) {
    // Cập nhật trangThai thành "Đã đóng"
    data[itemIndex].trangThai = 'Đã đóng';
    // Thêm thông tin mới vào mục
    data[itemIndex].maGiaoDich = $('#paymentSuccessMaGiaoDich').text(generateRandomCode());
    data[itemIndex].phuongThucThanhToan = $('#typePayment option:selected').text();
    data[itemIndex].thoiGian = $('#paymentSuccessThoiGian').text(`${hanDong} ${generateRandomTime()}`);


    console.log('Update Status - Data updated successfully:', data);

    // Lưu trạng thái mới vào Local Storage
    localStorage.setItem('tableData', JSON.stringify(data));

    buildTable(); // Gọi lại hàm buildTable sau khi cập nhật dữ liệu
  } else {
    console.log('Update Status - Item not found.');
  }
}


// Hàm submitForm
function submitForm() {
  // Lấy thông tin từ các trường input
  var tenDV = $('#tenDV').val();
  var loaiDV = $('#loaiDV').val();
  var soTien = $('#soTien').val();
  var phuongThucThanhToan = $('#typePayment option:selected').text();

  // Lấy thời gian từ cột hanDong trong bảng
  var hanDong = $('#hanDong').text();

  console.log('Submit Form - hanDong:', hanDong);

  // Show the confirmation modal
  $('#confirmationModal').modal('show');

  // Event listener for the confirm button in the confirmation modal
  $('#confirmSaveChanges').off('click').on('click', function () {
    // Close the confirmation modal
    $('#confirmationModal').modal('hide');

    // Perform actions for payment success and show the payment success modal
    showPaymentSuccessModal(tenDV, loaiDV, soTien, phuongThucThanhToan, hanDong);
  });
}

function showPaymentSuccessModal(tenDV, loaiDV, soTien, phuongThucThanhToan, hanDong) {
  // Set modal content
  // Hiển thị thông báo thanh toán thành công
  $('#paymentSuccessTenDV').text(tenDV);
  $('#paymentSuccessLoaiDV').text(loaiDV);
  $('#paymentSuccessSoTien').text(soTien);
  $('#paymentSuccessPhuongThuc').text(phuongThucThanhToan);

  // Hiển thị mã giao dịch ngẫu nhiên
  $('#paymentSuccessMaGiaoDich').text(generateRandomCode());

  // Hiển thị thời gian ngẫu nhiên
  $('#paymentSuccessThoiGian').text(`${hanDong} ${generateRandomTime()}`);

  // Show the payment success modal
  $('#paymentSuccessModal').modal('show');

  // Đóng modal thanh toán
  $('#paymentModal').modal('hide');

  // Cập nhật trạng thái trong dữ liệu JSON
  let id = $('#idInput').text();
  id = parseInt(id, 10);
  updateStatus(id, originalTableData);
  // location.reload();
}



// Biến toàn cục để lưu giữ giá trị maGiaoDich và thoiGian
var globalMaGiaoDich;
var globalThoiGian;

function updateStatus(id, data) {
  console.log('Update Status - Received ID:', id);

  // Chuyển đổi kiểu dữ liệu của id thành số
  id = parseInt(id);

  // Tìm mục có ID phù hợp trong dữ liệu được truyền vào (data)
  const itemIndex = data.findIndex(item => item.id === id);

  if (itemIndex !== -1) {
    // Cập nhật trangThai thành "Đã đóng"
    data[itemIndex].trangThai = 'Đã đóng';

    // Thêm thông tin mới vào mục
    data[itemIndex].maGiaoDich = globalMaGiaoDich;
    data[itemIndex].phuongThucThanhToan = $('#typePayment option:selected').text();
    data[itemIndex].thoiGian = globalThoiGian;

    console.log('Update Status - Data updated successfully:', data);

    // Lưu trạng thái mới vào Local Storage
    localStorage.setItem('tableData', JSON.stringify(data));

    buildTable(); // Gọi lại hàm buildTable sau khi cập nhật dữ liệu
  } else {
    console.log('Update Status - Item not found.');
  }
}

function submitForm() {
  // Lấy thông tin từ các trường input
  var tenDV = $('#tenDV').val();
  var loaiDV = $('#loaiDV').val();
  var soTien = $('#soTien').val();
  var phuongThucThanhToan = $('#typePayment option:selected').text();

  // Lấy thời gian từ cột hanDong trong bảng
  var hanDong = $('#hanDong').text(); // Sử dụng id tương ứng với cột hanDong trong bảng
  console.log('Submit Form - hanDong:', hanDong);

  // Show the confirmation modal
  $('#confirmationModal').modal('show');

  // Event listener for the confirm button in the confirmation modal
  $('#confirmSaveChanges').off('click').on('click', function () {
      // Close the confirmation modal
      $('#confirmationModal').modal('hide');

      // Perform actions for payment success and show the payment success modal
      showPaymentSuccessModal(tenDV, loaiDV, soTien, phuongThucThanhToan, hanDong);
  });
}

function showPaymentSuccessModal(tenDV, loaiDV, soTien, phuongThucThanhToan, hanDong) {
  // Set modal content
  // Hiển thị thông báo thanh toán thành công
  $('#paymentSuccessTenDV').text(tenDV);
  $('#paymentSuccessLoaiDV').text(loaiDV);
  $('#paymentSuccessSoTien').text(soTien);
  $('#paymentSuccessPhuongThuc').text(phuongThucThanhToan);

  // Hiển thị mã giao dịch ngẫu nhiên
  $('#paymentSuccessMaGiaoDich').text(generateRandomCode());

  // Hiển thị thời gian ngẫu nhiên
  $('#paymentSuccessThoiGian').text(`${hanDong} ${generateRandomTime()}`);

  // Show the payment success modal
  $('#paymentSuccessModal').modal('show');

  // Đóng modal thanh toán
  $('#paymentModal').modal('hide');

  // Cập nhật trạng thái trong dữ liệu JSON
  let id = $('#idInput').text();
  id = parseInt(id, 10);
  updateStatus(id, originalTableData);
  // location.reload();
}



function generateRandomCode() {
  // Sinh mã ngẫu nhiên gồm chữ in hoa và số
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  var result = '';
  for (var i = 0; i < 10; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

function generateRandomTime() {
  // Sinh thời gian ngẫu nhiên trong khoảng từ 00:00 đến 23:59
  var hours = padLeft(Math.floor(Math.random() * 24), 2);
  var minutes = padLeft(Math.floor(Math.random() * 60), 2);
  return hours + ':' + minutes;
}

function padLeft(value, length) {
  // Hàm bổ sung số 0 ở đầu nếu cần thiết
  return String(value).padStart(length, '0');
}

function clearLocalStorage() {
  localStorage.removeItem('tableData');
}

// Gọi hàm để xóa dữ liệu
clearLocalStorage();

// **************************************************************Filer***********************************
var currentMonth = null;
var currentYear = null;
var currentStatus = null;

// Search and filter function
function searchAndFilter() {
  var search = document.getElementById('searchInput').value.toLowerCase();
  var filteredData = tableData.filter(item => {
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
    if (currentStatus === "notPay" && item.trangThai !== "Chưa đóng") {
      return false;
    }
    if (currentStatus === "Pay" && item.trangThai !== "Đã đóng") {
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
    button.textContent = (text === 'notPay') ? 'Phí chưa đóng' : 'Tất cả';
    button.textContent = (text === 'Pay') ? 'Phí đã đóng' : 'Tất cả';

  }
}
