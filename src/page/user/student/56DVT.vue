<template>
    <!-- <form action="/add-image" method="post" enctype="multipart/form-data">
        @csrf
        <input type="file" name="image">
        <button type="submit">Thêm ảnh</button>
    </form> -->
    <div class="col-12 d-flex justify-content-center mb-2">
                            <a-button type="primary">
                                <font-awesome-icon icon="plus" class="me-2" />
                                <span> Chọn ảnh</span>
                            </a-button>
                        </div>
</template>
<script>
import { useMenu } from '../../../store/use-menu';
export default {
    setup() {
        useMenu().onselectedKeys(["admin-setting"]);
    },
}
</script>