function displayData(pageNumber) {
        var rowsPerPage = 5;
        var startIndex = (pageNumber - 1) * rowsPerPage;
        var endIndex = startIndex + rowsPerPage;
        var tableBody = document.getElementById("table-body");
        tableBody.innerHTML = "";

        for (var i = startIndex; i < endIndex && i < jsonData.length; i++) {
            var row = jsonData[i];
            var tr = document.createElement("tr");
            tr.innerHTML = `<td>${row.STT}</td>
                            <td>${row['Căn hộ']}</td>
                            <td>${row['Chung cư']}</td>
                            <td>${row['Tên cư dân']}</td>
                            <td>${row['Ngày sinh']}</td>
                            <td>${row.CCCD}</td>
                            <td>${row['Giới tính']}</td>
                            <td>${row['Số điện thoại']}</td>
                            <td>${row['Tình trạng']}</td>`;
            tableBody.appendChild(tr);
        }
    }

    // Function to generate pagination links
    function generatePagination() {
        var rowsPerPage = 5;
        var totalRows = jsonData.length;
        var totalPages = Math.ceil(totalRows / rowsPerPage);
        var paginationWrapper = document.getElementById("pagination-wrapper");
        paginationWrapper.innerHTML = "";

        for (var i = 1; i <= totalPages; i++) {
            var li = document.createElement("li");
            li.classList.add("page-item");
            var a = document.createElement("a");
            a.classList.add("page-link");
            a.href = "javascript:void(0);";
            a.innerHTML = i;
            a.addEventListener("click", function (event) {
                var pageNumber = parseInt(event.target.innerHTML);
                displayData(pageNumber);
            });
            li.appendChild(a);
            paginationWrapper.appendChild(li);
        }
    }

    // Initial display on page load
    displayData(1);

    // Generate pagination links
    generatePagination();