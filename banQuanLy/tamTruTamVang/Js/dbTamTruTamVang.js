


// Biến để lưu biểu đồ hiện tại
var doughnutChart;
// Hàm để cập nhật biểu đồ và chú thích
function updateChartAndLegend(tamTruCount, tamVangCount) {
    // Cập nhật chú thích biểu đồ
    document.querySelector('.chart-legend li:nth-child(1)').innerHTML = `<span style="background-color: #5F8CA0;"></span> Số người tạm trú: ${tamTruCount}`;
    document.querySelector('.chart-legend li:nth-child(2)').innerHTML = `<span style="background-color: #BFD1D9;"></span> Số người tạm vắng: ${tamVangCount}`;

    // Xóa biểu đồ hiện tại nếu có
    if (doughnutChart) {
        doughnutChart.destroy();
    }

    // Cập nhật dữ liệu cho biểu đồ
    const data = {
        labels: ['Số người tạm trú', 'Số người tạm vắng'],
        datasets: [{
            data: [tamTruCount, tamVangCount],
            backgroundColor: ['#5F8CA0', '#BFD1D9'],
            borderColor: ['#ffffff', '#ffffff'],
            borderWidth: 2
        }]
    };

    // Cấu hình biểu đồ
    const config = {
        type: 'doughnut',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    enabled: true
                },
                datalabels: {
                    color: '#fff',
                    font: {
                        weight: 'bold'
                    },
                    formatter: (value, context) => {
                        const total = context.chart.data.datasets[0].data.reduce((sum, current) => sum + current, 0);
                        const percentage = (value / total * 100).toFixed(2) + '%';
                        return percentage;
                    }
                }
            }
        },
        plugins: [ChartDataLabels]
    };

    // Khởi tạo biểu đồ mới
    doughnutChart = new Chart(
        document.getElementById('doughnutChart').getContext('2d'),
        config
    );
}
// Thêm sự kiện click vào các nút radio
document.querySelectorAll('.form-check-input').forEach(function (radio) {
    radio.addEventListener('click', function () {
        var option = this.value;
        var filteredDataTamTru, filteredDataTamVang;

        if (option === 'all') { // Cả 2 chung cư
            filteredDataTamVang = tableData;
            filteredDataTamTru= tableTamTru;
        } else if (option === 's1') { // S1
            filteredDataTamVang = tableData.filter(item => item.canHo === 's1');
             filteredDataTamTru = tableTamTru.filter(item => item.canHo === 's1');
        } else { // S2
            filteredDataTamVang = tableData.filter(item => item.canHo === 's2');
             filteredDataTamTru = tableTamTru.filter(item => item.canHo === 's2');
        }

        // Lấy số lượng tạm trú và tạm vắng
        var tamTruCount = filteredDataTamTru.length;
        var tamVangCount = filteredDataTamVang.length;

        // Cập nhật biểu đồ và chú thích
        updateChartAndLegend(tamTruCount, tamVangCount);
    });
});

// Hàm khởi tạo
function init() {
    var tamVangCount = tableData.length;
    var   tamTruCount= tableTamTru.length;

    updateChartAndLegend(tamTruCount, tamVangCount);
}
init();


function updateProgressBar() {
    // Lấy giá trị của radio button được chọn
    var apartmentOption = document.querySelector('input[name="apartmentOptions"]:checked').value;

    // Lọc dữ liệu dựa trên giá trị của radio button
    var filteredTableDonTamTru = tableDonTamTru.filter(item => apartmentOption === 'all' || item.canHo === apartmentOption);
    var filteredTableDonTamVang = tableDonTamVang.filter(item => apartmentOption === 'all' || item.canHo === apartmentOption);

    // Tính toán số lượng mục có trạng thái bằng 1 cho mỗi loại đơn
    var approvedCountTru = filteredTableDonTamTru.filter(item => item.trangThai == 1).length;
    var approvedCountVang = filteredTableDonTamVang.filter(item => item.trangThai == 1).length;

    // Tính toán tổng số lượng mục cho mỗi loại đơn
    var totalCountTru = filteredTableDonTamTru.length;
    var totalCountVang = filteredTableDonTamVang.length;

    // Tính toán phần trăm mục đã được duyệt cho mỗi loại đơn
    var percentageTru = (approvedCountTru / totalCountTru) * 100;
    var percentageVang = (approvedCountVang / totalCountVang) * 100;

    // Cập nhật giao diện cho mỗi loại đơn
    var progressBarTru = document.querySelector('#progress-bar-tru');
    progressBarTru.style.width = percentageTru + '%';
    progressBarTru.setAttribute('aria-valuenow', approvedCountTru);
    progressBarTru.setAttribute('aria-valuemax', totalCountTru);

    var progressBarVang = document.querySelector('#progress-bar-vang');
    progressBarVang.style.width = percentageVang + '%';
    progressBarVang.setAttribute('aria-valuenow', approvedCountVang);
    progressBarVang.setAttribute('aria-valuemax', totalCountVang);

    // Cập nhật số liệu cho mỗi loại đơn
    var progressCountTru = document.getElementById('progress-count-tru');
    progressCountTru.textContent = 'Đã xác nhận ' + approvedCountTru + '/' + totalCountTru;

    var progressCountVang = document.getElementById('progress-count-vang');
    progressCountVang.textContent = 'Đã xác nhận ' + approvedCountVang + '/' + totalCountVang;

    // Kiểm tra xem tất cả các mục đã được duyệt chưa cho mỗi loại đơn
    var statusTextTru = document.getElementById('status-text-tru');
    if (approvedCountTru === totalCountTru) {
        statusTextTru.textContent = 'Đã xác nhận tất cả';
    } else {
        statusTextTru.textContent = 'Cần xác nhận';
    }

    var statusTextVang = document.getElementById('status-text-vang');
    if (approvedCountVang === totalCountVang) {
        statusTextVang.textContent = 'Đã xác nhận tất cả';
    } else {
        statusTextVang.textContent = 'Cần xác nhận';
    }
}

// Gọi hàm updateProgressBar ngay sau khi tải dữ liệu
updateProgressBar();
// Thêm sự kiện 'change' vào mỗi radio button
document.getElementById('apartmentOption1').addEventListener('change', updateProgressBar);
document.getElementById('apartmentOption2').addEventListener('change', updateProgressBar);
document.getElementById('apartmentOption3').addEventListener('change', updateProgressBar);