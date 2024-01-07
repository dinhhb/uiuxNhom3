    document.addEventListener('DOMContentLoaded', function () {
        // Sample data
        var tableData = [
            {"stt": "", "id": 1, "canHo": 11, "chungCu": "S1", "tenCuDan": "Nguyễn Thu Trang", "ngaySinh": "01/01/1990", "CCCD": "123456789", "gioiTinh": "Nữ", "sdt": "123456789", "tinhTrang": "Tạm trú"},
  {"stt": "", "id": 2, "canHo": 11, "chungCu": "S1", "tenCuDan": "Lê Văn An", "ngaySinh": "02/02/1991", "CCCD": "987654321", "gioiTinh": "Nam", "sdt": "234567890", "tinhTrang": "Tạm trú"},
  {"stt": "", "id": 3, "canHo": 11, "chungCu": "S1", "tenCuDan": "Trần Thị Bình", "ngaySinh": "03/03/1992", "CCCD": "123456789", "gioiTinh": "Nữ", "sdt": "345678901", "tinhTrang": "Tạm trú"},
  {"stt": "", "id": 4, "canHo": 12, "chungCu": "S1", "tenCuDan": "Phạm Văn Cường", "ngaySinh": "04/04/1993", "CCCD": "987654321", "gioiTinh": "Nam", "sdt": "456789012", "tinhTrang": "Tạm trú"},
  {"stt": "", "id": 5, "canHo": 12, "chungCu": "S1", "tenCuDan": "Hoàng Thị Dung", "ngaySinh": "05/05/1994", "CCCD": "123456789", "gioiTinh": "Nữ", "sdt": "567890123", "tinhTrang": "Tạm trú"},
  {"stt": "", "id": 6, "canHo": 13, "chungCu": "S1", "tenCuDan": "Đỗ Văn Đức", "ngaySinh": "06/06/1995", "CCCD": "987654321", "gioiTinh": "Nam", "sdt": "678901234", "tinhTrang": "Tạm trú"},
  {"stt": "", "id": 7, "canHo": 13, "chungCu": "S1", "tenCuDan": "Lê Thị Hương", "ngaySinh": "07/07/1996", "CCCD": "123456789", "gioiTinh": "Nữ", "sdt": "789012345", "tinhTrang": "Tạm trú"},
  {"stt": "", "id": 8, "canHo": 14, "chungCu": "S1", "tenCuDan": "Nguyễn Văn Hải", "ngaySinh": "08/08/1997", "CCCD": "987654321", "gioiTinh": "Nam", "sdt": "890123456", "tinhTrang": "Tạm trú"},
  {"stt": "", "id": 9, "canHo": 14, "chungCu": "S1", "tenCuDan": "Trần Thị Thơ", "ngaySinh": "09/09/1998", "CCCD": "123456789", "gioiTinh": "Nữ", "sdt": "901234567", "tinhTrang": "Tạm trú"},
  {"stt": "", "id": 10, "canHo": 15, "chungCu": "S1", "tenCuDan": "Phạm Văn Tài", "ngaySinh": "10/10/1999", "CCCD": "987654321", "gioiTinh": "Nam", "sdt": "12345678", "tinhTrang": "Tạm trú"},
  {"stt": "", "id": 11, "canHo": 15, "chungCu": "S1", "tenCuDan": "Hoàng Thị Tâm", "ngaySinh": "11/11/2000", "CCCD": "123456789", "gioiTinh": "Nữ", "sdt": "123456789", "tinhTrang": "Tạm trú"},
  {"stt": "", "id": 12, "canHo": 15, "chungCu": "S1", "tenCuDan": "Đỗ Văn Khánh", "ngaySinh": "12/12/2001", "CCCD": "987654321", "gioiTinh": "Nam", "sdt": "234567890", "tinhTrang": "Tạm trú"},
  {"stt": "", "id": 13, "canHo": 21, "chungCu": "S2", "tenCuDan": "Lê Thị Mai", "ngaySinh": "13/01/2002", "CCCD": "123456789", "gioiTinh": "Nữ", "sdt": "345678901", "tinhTrang": "Tạm trú"},
  {"stt": "", "id": 14, "canHo": 21, "chungCu": "S2", "tenCuDan": "Nguyễn Văn Bảo", "ngaySinh": "14/02/2003", "CCCD": "987654321", "gioiTinh": "Nam", "sdt": "456789012", "tinhTrang": "Tạm trú"},
  {"stt": "", "id": 15, "canHo": 21, "chungCu": "S2", "tenCuDan": "Trần Thị Tú", "ngaySinh": "15/03/2004", "CCCD": "123456789", "gioiTinh": "Nữ", "sdt": "567890123", "tinhTrang": "Tạm trú"},
  {"stt": "", "id": 16, "canHo": 22, "chungCu": "S2", "tenCuDan": "Nguyễn Thu Trang", "ngaySinh": "01/01/1990", "CCCD": "123456789", "gioiTinh": "Nữ", "sdt": "123456789", "tinhTrang": "Tạm trú"},
  {"stt": "", "id": 17, "canHo": 22, "chungCu": "S2", "tenCuDan": "Lê Văn An", "ngaySinh": "02/02/1991", "CCCD": "987654321", "gioiTinh": "Nam", "sdt": "234567890", "tinhTrang": "Tạm trú"},
  {"stt": "", "id": 18, "canHo": 23, "chungCu": "S2", "tenCuDan": "Trần Thị Bình", "ngaySinh": "03/03/1992", "CCCD": "123456789", "gioiTinh": "Nữ", "sdt": "345678901", "tinhTrang": "Tạm trú"},
  {"stt": "", "id": 19, "canHo": 23, "chungCu": "S2", "tenCuDan": "Phạm Văn Cường", "ngaySinh": "04/04/1993", "CCCD": "987654321", "gioiTinh": "Nam", "sdt": "456789012", "tinhTrang": "Tạm trú"},
  {"stt": "", "id": 20, "canHo": 23, "chungCu": "S2", "tenCuDan": "Hoàng Thị Dung", "ngaySinh": "05/05/1994", "CCCD": "123456789", "gioiTinh": "Nữ", "sdt": "567890123", "tinhTrang": "Tạm trú"},
  {"stt": "", "id": 21, "canHo": 24, "chungCu": "S2", "tenCuDan": "Đỗ Văn Đức", "ngaySinh": "06/06/1995", "CCCD": "987654321", "gioiTinh": "Nam", "sdt": "678901234", "tinhTrang": "Tạm trú"},
  {"stt": "", "id": 22, "canHo": 24, "chungCu": "S2", "tenCuDan": "Lê Thị Hương", "ngaySinh": "07/07/1996", "CCCD": "123456789", "gioiTinh": "Nữ", "sdt": "789012345", "tinhTrang": "Tạm trú"},
  {"stt": "", "id": 23, "canHo": 25, "chungCu": "S2", "tenCuDan": "Nguyễn Văn Hải", "ngaySinh": "08/08/1997", "CCCD": "987654321", "gioiTinh": "Nam", "sdt": "890123456", "tinhTrang": "Tạm trú"},
  {"stt": "", "id": 24, "canHo": 31, "chungCu": "S1", "tenCuDan": "Trần Thị Thơ", "gioiTinh": "Nữ", "ngaySinh": "09/09/1998", "CCCD": "123456789", "sdt": "901234567", "diaChi": "543 Đường Lê Văn Sỹ, Q.3", "tinhTrang": "Tạm vắng"},
  {"stt": "", "id": 25, "canHo": 31, "chungCu": "S1", "tenCuDan": "Phạm Văn Tài", "gioiTinh": "Nam", "ngaySinh": "10/10/1999", "CCCD": "987654321", "sdt": "12345678", "diaChi": "654 Đường Cách Mạng Tháng 8, Q.10", "tinhTrang": "Tạm vắng"},
  {"stt": "", "id": 26, "canHo": 32, "chungCu": "S1", "tenCuDan": "Hoàng Thị Tâm", "gioiTinh": "Nữ", "ngaySinh": "11/11/2000", "CCCD": "123456789", "sdt": "123456789", "diaChi": "789 Đường Hoàng Sa, Q.3", "tinhTrang": "Tạm vắng"},
  {"stt": "", "id": 27, "canHo": 32, "chungCu": "S1", "tenCuDan": "Đỗ Văn Khánh", "gioiTinh": "Nam", "ngaySinh": "12/12/2001", "CCCD": "987654321", "sdt": "234567890", "diaChi": "876 Đường Hai Bà Trưng, Q.1", "tinhTrang": "Tạm vắng"},
  {"stt": "", "id": 28, "canHo": 33, "chungCu": "S1", "tenCuDan": "Lê Thị Mai", "gioiTinh": "Nữ", "ngaySinh": "13/01/2002", "CCCD": "123456789", "sdt": "345678901", "diaChi": "345 Đường Nam Kỳ Khởi Nghĩa, Q.3", "tinhTrang": "Tạm vắng"},
  {"stt": "", "id": 29, "canHo": 34, "chungCu": "S1", "tenCuDan": "Nguyễn Văn Bảo", "gioiTinh": "Nam", "ngaySinh": "14/02/2003", "CCCD": "987654321", "sdt": "456789012", "diaChi": "678 Đường Ngô Quyền, Q.5", "tinhTrang": "Tạm vắng"},
  {"stt": "", "id": 30, "canHo": 34, "chungCu": "S1", "tenCuDan": "Trần Thị Tú", "gioiTinh": "Nữ", "ngaySinh": "15/03/2004", "CCCD": "123456789", "sdt": "567890123", "diaChi": "987 Đường Hai Bà Trưng, Q.3", "tinhTrang": "Tạm vắng"},
  {"stt": "", "id": 31, "canHo": 35, "chungCu": "S2", "tenCuDan": "Nguyễn Thu Trang", "gioiTinh": "Nữ", "ngaySinh": "01/01/1990", "CCCD": "123456789", "sdt": "123456789", "diaChi": "123 Đường Trần Hưng Đạo, Q.1", "tinhTrang": "Tạm vắng"},
  {"stt": "", "id": 32, "canHo": 35, "chungCu": "S2", "tenCuDan": "Lê Văn An", "gioiTinh": "Nam", "ngaySinh": "02/02/1991", "CCCD": "987654321", "sdt": "234567890", "diaChi": "456 Đường Lê Lai, Q.3", "tinhTrang": "Tạm vắng"},
  {"stt": "", "id": 33, "canHo": 41, "chungCu": "S2", "tenCuDan": "Trần Thị Bình", "gioiTinh": "Nữ", "ngaySinh": "03/03/1992", "CCCD": "123456789", "sdt": "345678901", "diaChi": "789 Đường Nguyễn Văn Cừ, Q.5", "tinhTrang": "Tạm vắng"},
  {"stt": "", "id": 34, "canHo": 41, "chungCu": "S2", "tenCuDan": "Phạm Văn Cường", "gioiTinh": "Nam", "ngaySinh": "04/04/1993", "CCCD": "987654321", "sdt": "456789012", "diaChi": "321 Đường Lý Tự Trọng, Q.10", "tinhTrang": "Tạm vắng"},
  {"stt": "", "id": 35, "canHo": 41, "chungCu": "S2", "tenCuDan": "Hoàng Thị Dung", "gioiTinh": "Nữ", "ngaySinh": "05/05/1994", "CCCD": "123456789", "sdt": "567890123", "diaChi": "678 Đường Võ Văn Tần, Q.3", "tinhTrang": "Tạm vắng"},
  {"stt": "", "id": 36, "canHo": 42, "chungCu": "S2", "tenCuDan": "Đỗ Văn Đức", "gioiTinh": "Nam", "ngaySinh": "06/06/1995", "CCCD": "987654321", "sdt": "678901234", "diaChi": "987 Đường Trần Phú, Q.5", "tinhTrang": "Tạm vắng"},
  {"stt": "", "id": 37, "canHo": 43, "chungCu": "S1", "tenCuDan": "Lê Thị Hương", "gioiTinh": "Nữ", "ngaySinh": "07/07/1996", "CCCD": "123456789", "sdt": "789012345", "diaChi": "234 Đường 3/2, Q.10", "tinhTrang": "Tạm vắng"},
  {"stt": "", "id": 38, "canHo": 43, "chungCu": "S1", "tenCuDan": "Nguyễn Văn Hải", "gioiTinh": "Nam", "ngaySinh": "08/08/1997", "CCCD": "987654321", "sdt": "890123456", "diaChi": "876 Đường Nguyễn Thị Minh Khai, Q.1", "tinhTrang": "Tạm vắng"},
  {"stt": "", "id": 39, "canHo": 43, "chungCu": "S1", "tenCuDan": "Trần Thị Thơ", "gioiTinh": "Nữ", "ngaySinh": "09/09/1998", "CCCD": "123456789", "sdt": "901234567", "diaChi": "543 Đường Lê Văn Sỹ, Q.3", "tinhTrang": "Tạm vắng"},
  {"stt": "", "id": 40, "canHo": 44, "chungCu": "S1", "tenCuDan": "Phạm Văn Tài", "gioiTinh": "Nam", "ngaySinh": "10/10/1999", "CCCD": "987654321", "sdt": "12345678", "diaChi": "654 Đường Cách Mạng Tháng 8, Q.10", "tinhTrang": "Tạm vắng"},
  {"stt": "", "id": 41, "canHo": 44, "chungCu": "S1", "tenCuDan": "Hoàng Thị Tâm", "gioiTinh": "Nữ", "ngaySinh": "11/11/2000", "CCCD": "123456789", "sdt": "123456789", "diaChi": "789 Đường Hoàng Sa, Q.3", "tinhTrang": "Tạm vắng"},
  {"stt": "", "id": 42, "canHo": 45, "chungCu": "S1", "tenCuDan": "Đỗ Văn Khánh", "gioiTinh": "Nam", "ngaySinh": "12/12/2001", "CCCD": "987654321", "sdt": "234567890", "diaChi": "876 Đường Hai Bà Trưng, Q.1", "tinhTrang": "Tạm vắng"},
  {"stt": "", "id": 43, "canHo": 45, "chungCu": "S1", "tenCuDan": "Lê Thị Mai", "gioiTinh": "Nữ", "ngaySinh": "13/01/2002", "CCCD": "123456789", "sdt": "345678901", "diaChi": "345 Đường Nam Kỳ Khởi Nghĩa, Q.3", "tinhTrang": "Tạm vắng"},
  {"stt": "", "id": 44, "canHo": 45, "chungCu": "S1", "tenCuDan": "Nguyễn Văn Bảo", "gioiTinh": "Nam", "ngaySinh": "14/02/2003", "CCCD": "987654321", "sdt": "456789012", "diaChi": "678 Đường Ngô Quyền, Q.5", "tinhTrang": "Tạm vắng"},
  {"stt": "", "id": 45, "canHo": 51, "chungCu": "S1", "tenCuDan": "Trần Thị Tú", "gioiTinh": "Nữ", "ngaySinh": "15/03/2004", "CCCD": "123456789", "sdt": "567890123", "diaChi": "987 Đường Hai Bà Trưng, Q.3", "tinhTrang": "Tạm vắng"},
  {"stt": "", "id": 46, "canHo": 51, "chungCu": "S1", "tenCuDan": "Nguyễn Thu Trang", "gioiTinh": "Nữ", "ngaySinh": "01/01/1990", "CCCD": "123456789", "sdt": "123456789", "diaChi": "123 Đường Trần Hưng Đạo, Q.1", "tinhTrang": "Tạm vắng"},
  {"stt": "", "id": 47, "canHo": 52, "chungCu": "S1", "tenCuDan": "Lê Văn An", "gioiTinh": "Nam", "ngaySinh": "02/02/1991", "CCCD": "987654321", "sdt": "234567890", "diaChi": "456 Đường Lê Lai, Q.3", "tinhTrang": "Tạm vắng"},
  {"stt": "", "id": 48, "canHo": 53, "chungCu": "S1", "tenCuDan": "Trần Thị Bình", "gioiTinh": "Nữ", "ngaySinh": "03/03/1992", "CCCD": "123456789", "sdt": "345678901", "diaChi": "789 Đường Nguyễn Văn Cừ, Q.5", "tinhTrang": "Tạm vắng"}
  
];
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
  table.empty();

  for (var i in myList) {
    var stt = (state.page - 1) * state.rows + parseInt(i) + 1;
    var row = `<tr>
                <td>${stt}</td>
                <td>${myList[i].canHo}</td>
                <td>${myList[i].chungCu}</td>
                <td>${myList[i].tenCuDan}</td>
                <td>${myList[i].ngaySinh}</td>
                <td>${myList[i].CCCD}</td>
                <td>${myList[i].gioiTinh}</td>
                <td>${myList[i].sdt}</td>
                <td>${myList[i].tinhTrang}</td>
              </tr>`;
    table.append(row);
  }

  pageButtons(data.pages);
}

function searchAndFilter() {
  var search = document.getElementById('searchInput').value.toLowerCase();
  var currentApartment = $('input[name="apartmentOptions"]:checked').val();
  var currentStatus = $('input[name="tamtruOptions"]:checked').val();

  var filteredData = tableData.filter(item => {
    // Đảm bảo rằng các giá trị khớp với dữ liệu của bạn
    if (currentStatus === "tamtru" && item.tinhTrang !== "Tạm trú") {
      return false;
    }
    if (currentStatus === "tamvang" && item.tinhTrang !== "Tạm vắng") {
      return false;
    }
    if (currentApartment !== "all" && item.chungCu !== currentApartment) {
      return false;
    }
    return Object.keys(item).some(key => item[key].toString().toLowerCase().includes(search));
  });

  state.querySet = filteredData;
  state.page = 1;
  buildTable();
}
// Thêm sự kiện lắng nghe cho radio button của chung cư
$('input[name="apartmentOptions"]').on('change', searchAndFilter);

// Thêm sự kiện lắng nghe cho radio button của tình trạng
$('input[name="tamtruOptions"]').on('change', searchAndFilter);

// Xóa sự kiện lắng nghe trước đó
document.getElementById('searchInput').removeEventListener('keyup', searchAndFilter);

// Thêm sự kiện lắng nghe cho ô tìm kiếm
document.getElementById('searchInput').addEventListener('keyup', searchAndFilter);

// Xóa sự kiện lắng nghe trước đó
$('#choice').off('click');

// Thêm sự kiện lắng nghe cho trạng thái
$('#choice').on('click', '.dropdown-item', function () {
  var selectedStatus = this.getAttribute('value');
  $('input[name="tamtruOptions"]').prop('checked', false);
  $('input[name="tamtruOptions"][value="' + selectedStatus + '"]').prop('checked', true);
  searchAndFilter();
});

// Xóa sự kiện lắng nghe trước đó
$('#choiceButton').off('click');

// Thêm sự kiện lắng nghe cho nút
$('#choiceButton').on('click', function () {
  $('input[name="tamtruOptions"]').prop('checked', false);
  searchAndFilter();
});

// Xóa sự kiện lắng nghe trước đó
$('#searchInput').off('keyup');

// Thêm sự kiện lắng nghe cho ô tìm kiếm
$('#searchInput').on('keyup', searchAndFilter);

// Xóa sự kiện lắng nghe trước đó
$('.page').off('click');

// Thêm sự kiện lắng nghe cho trang
$('.page').on('click', function () {
  $('#table-body').empty();
  state.page = Number($(this).val());
  buildTable();
});

// Xóa sự kiện lắng nghe trước đó
$('input[name="apartmentOptions"]').off('change');

// Thêm sự kiện lắng nghe cho radio button của chung cư
$('input[name="apartmentOptions"]').on('change', searchAndFilter);

// Thực hiện chức năng ban đầu
buildTable();





});