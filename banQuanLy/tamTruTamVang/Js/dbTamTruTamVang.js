


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
            filteredDataTamTru = tableData;
            filteredDataTamVang = tableTamTru;
        } else if (option === 's1') { // S1
            filteredDataTamTru = tableData.filter(item => item.canHo === 's1');
            filteredDataTamVang = tableTamTru.filter(item => item.canHo === 's1');
        } else { // S2
            filteredDataTamTru = tableData.filter(item => item.canHo === 's2');
            filteredDataTamVang = tableTamTru.filter(item => item.canHo === 's2');
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
    var tamTruCount = tableData.length;
    var tamVangCount = tableTamTru.length;
    updateChartAndLegend(tamTruCount, tamVangCount);
}
init();