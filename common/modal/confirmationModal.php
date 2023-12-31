<div class="modal fade" id="confirmationModal" tabindex="-1" role="dialog" aria-labelledby="modalTitle" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="modalTitle">Xác nhận</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <?php echo isset($modalContent) ? $modalContent : 'Nội dung mặc định'; ?>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-huy-bo" data-dismiss="modal">Hủy bỏ</button>
                <button type="button" class="btn btn-xac-nhan" id="btn-xac-nhan" >Xác nhận</button>
            </div>
        </div>
    </div>
</div>

<div class="modal fade" id="confirmationModalLogout" tabindex="-1" role="dialog" aria-labelledby="modalTitle" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="modalTitle">Xác nhận</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                Bạn có chắc chắn muốn đăng xuất?
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-huy-bo" data-dismiss="modal">Hủy bỏ</button>
                <button type="button" class="btn btn-xac-nhan" onclick="logout()">Xác nhận</button>
            </div>
        </div>
    </div>
</div>

<style>
    .btn-xac-nhan {
        background-color: #28a745;
        /* Bootstrap green color */
        border-color: #28a745;
        color: #fff;
        /* White text */

    }

    /* Style for the 'Hủy bỏ' button */
    .btn-huy-bo {
        background-color: #6c757d;
        /* Bootstrap gray color */
        border-color: #6c757d;
        color: #fff;
        /* White text */
    }
</style>

<script>
    function logout() {
        console.log("logout");
        // Redirect to the index.html page
        window.location.href = '../../index.html';
    }
</script>