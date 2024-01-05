<div class="modal fade" id="successModal" tabindex="-1" role="dialog" aria-labelledby="successModalTitle" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="successModalTitle">Thành công</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <?php echo isset($modalContent) ? $modalContent : 'Nội dung mặc định'; ?>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-huy-bo" data-dismiss="modal">Đóng</button>
            </div>
        </div>
    </div>
</div>

<style>
    /* Style for the 'Hủy bỏ' button */
    .btn-huy-bo {
        background-color: #6c757d;
        /* Bootstrap gray color */
        border-color: #6c757d;
        color: #fff;
        /* White text */
    }
</style>