
// Event Listener cho form submission
function confirmAndSaveChanges() {


    // Tạo bản ghi mới từ thông tin nhập vào
    var newRecord = {
        id: tableTamTru.length + 1, // Tạo ID mới dựa trên độ dài mảng hiện tại
        hoTen: document.getElementById('fullName').value,
        ngaySinh: formatDateReverse(document.getElementById('dob').value),
        CCCD: document.getElementById('cccd').value,
        gioiTinh: document.getElementById('genderSelect').value,
        DDThuongTru: document.getElementById('diaChiThuongTru').value,
        DDTamTru: document.getElementById('diaChiTamTru').value,
        SDT: document.getElementById('soDienThoai').value,
        ngheNghiep: document.getElementById('ngheNghiep').value,
        ngayBatDau: formatDateReverse(document.getElementById('ngayBatDau').value),
        ngayKetThuc: formatDateReverse(document.getElementById('ngayKetThuc').value),
        canHo:document.getElementById('ChungCu').value,
        lyDo: document.getElementById('reason').value,
        trangThai:0
    };
    // Thêm bản ghi mới vào mảng
    tableTamTru.push(newRecord);

    // Cập nhật bảng và lưu vào localStorage
    // buildTable();
    saveToLocalStorage(tableTamTru);
    $('#confirmationModal').modal('hide');
    // Hiển thị modal
    $('#successModal').modal('show');
    // Xác định sự kiện khi modal được đóng
    $('#successModal').on('hidden.bs.modal', function () {
        // Chạy chuyển hướng trang sau khi modal đã được đóng
        window.location="quanLyTamTru.php";
    });


};

// Chuyển đổi ngày tháng từ dạng YYYY-MM-DD sang DD/MM/YYYY
function formatDateReverse(dateString) {
    var parts = dateString.split("-");
    return parts[2] + "/" + parts[1] + "/" + parts[0];
}
function saveToLocalStorage(data) {
    localStorage.setItem('tableTamTru', JSON.stringify(data));
}
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    // Ngăn form thực hiện hành động mặc định
    event.preventDefault();
    $('#confirmationModal').modal('show');
});

document.getElementById('btn-xac-nhan').addEventListener('click', confirmAndSaveChanges);
