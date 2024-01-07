    document.addEventListener('DOMContentLoaded', function () {
        // Sample data
        var tableData = [
            {
    "stt":"",
    "id":1,
    "canHo": 11,
    "chungCu": "S1",
    "tenCuDan": "Nguyễn Thu Trang",
    "ngaySinh": "01/01/1990",
    "CCCD": "123456789",
    "gioiTinh": "Nữ",
    "sdt": "123456789",
    "tinhTrang": "Tạm trú"
  },
  {"STT":"",
  "id":2,
    "canHo": 11,
    "chungCu": "S1",
    "tenCuDan": "Lê Văn An",
    "ngaySinh": "02/02/1991",
    "CCCD": "987654321",
    "gioiTinh": "Nam",
    "sdt": "234567890",
    "tinhTrang": "Tạm vắng"
  },
  {"stt":"",
  "id":3,
    "canHo": 11,
    "chungCu": "S2",
    "tenCuDan": "Trần Thị Bình",
    "ngaySinh": "03/03/1992",
    "CCCD": "123456789",
    "gioiTinh": "Nữ",
    "sdt": "345678901",
    "tinhTrang": "Tạm trú"
  },
  {"stt":"",
  "id":4,
    "canHo": 12,
    "chungCu": "S2",
    "tenCuDan": "Phạm Văn Cường",
    "ngaySinh": "04/04/1993",
    "CCCD": "987654321",
    "gioiTinh": "Nam",
    "sdt": "456789012",
    "tinhTrang": "Tạm trú"
  },
  {"stt":"",
  "id":4,
    "canHo": 12,
    "chungCu": "S2",
    "tenCuDan": "Phạm Văn Cường",
    "ngaySinh": "04/04/1993",
    "CCCD": "987654321",
    "gioiTinh": "Nam",
    "sdt": "456789012",
    "tinhTrang": "Tạm trú"
  },
  {"stt":"",
  "id":4,
    "canHo": 12,
    "chungCu": "S2",
    "tenCuDan": "Phạm Văn Cường",
    "ngaySinh": "04/04/1993",
    "CCCD": "987654321",
    "gioiTinh": "Nam",
    "sdt": "456789012",
    "tinhTrang": "Tạm trú"
  },
  {"stt":"",
  "id":4,
    "canHo": 12,
    "chungCu": "S2",
    "tenCuDan": "Phạm Văn Cường",
    "ngaySinh": "04/04/1993",
    "CCCD": "987654321",
    "gioiTinh": "Nam",
    "sdt": "456789012",
    "tinhTrang": "Tạm trú"
  },
  {"stt":"",
  "id":4,
    "canHo": 12,
    "chungCu": "S2",
    "tenCuDan": "Phạm Văn Cường",
    "ngaySinh": "04/04/1993",
    "CCCD": "987654321",
    "gioiTinh": "Nam",
    "sdt": "456789012",
    "tinhTrang": "Tạm trú"
  },
  {"stt":"",
  "id":4,
    "canHo": 12,
    "chungCu": "S2",
    "tenCuDan": "Phạm Văn Cường",
    "ngaySinh": "04/04/1993",
    "CCCD": "987654321",
    "gioiTinh": "Nam",
    "sdt": "456789012",
    "tinhTrang": "Tạm trú"
  },
  {"stt":"",
  "id":4,
    "canHo": 12,
    "chungCu": "S2",
    "tenCuDan": "Phạm Văn Cường",
    "ngaySinh": "04/04/1993",
    "CCCD": "987654321",
    "gioiTinh": "Nam",
    "sdt": "456789012",
    "tinhTrang": "Tạm trú"
  }
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