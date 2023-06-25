<template>
    <a-menu v-model:openKeys="openKeys" v-model:selectedKeys="selectedKeys" mode="inline">
        <a-menu-item key="admin-user">
            <router-link :to="{ name: 'admin-user' }">
                <span> <font-awesome-icon icon="users" class="me-1" />Quản lý sinh viên</span>
            </router-link>
        </a-menu-item>
        <a class=" d-flex border border-secondary-subtle "></a>

        <a-sub-menu key="sub2">
            <template #title><font-awesome-icon :icon="['fas', 'book-open']" class="me-1" />Bài viết</template>
            <a-menu-item dataIndex="classs" key="classs"> <router-link :to="{ name: 'admin-new-introduce' }"
                    title=" Giới thiệu">
                    <span> Giới thiệu</span>
                </router-link></a-menu-item>
            <a-menu-item key="4"> <router-link :to="{ name: 'admin-new-tuyensinh' }" title="Tuyển sinh">
                    <span> Tuyển sinh</span>
                </router-link></a-menu-item>
            <a-menu-item key="5"> <router-link :to="{ name: 'admin-new-tintuc' }" title="Tin Tức">
                    <span> Tin Tức</span>
                </router-link></a-menu-item>
            <a-menu-item key="admin-new-khcn"> <router-link :to="{ name: 'admin-new-khcn' }" title=" Khoa học công nghệ">
                    <span> Khoa học công nghệ</span>
                </router-link></a-menu-item>

        </a-sub-menu>
        <a-menu-item key="admin-roles">
            <router-link :to="{ name: 'admin-roles' }">
                <span><font-awesome-icon icon="layer-group" class="me-1" /> Hoạt động ngoại khóa</span>
            </router-link>
        </a-menu-item>
        <a class=" d-flex border border-secondary-subtle "></a>
        <a-menu-item key="admin-usern">
            <router-link :to="{ name: 'user-index' }">
                <span> <font-awesome-icon icon="user" class="me-2" />User</span>
            </router-link>
        </a-menu-item>
        <a class=" d-flex border border-secondary-subtle "></a>
        <a-sub-menu key="sub1">
            <template #title><font-awesome-icon icon="user" class="me-2" />Danh sách lớp</template>
            <a-menu-item dataIndex="classs" key="classs"> <router-link :to="{ name: 'user-class-55DVT' }" title="K55DVT">
                    <span> 55DVT</span>
                </router-link></a-menu-item>
            <a-menu-item key="4"> <router-link :to="{ name: 'user-class-56DVT' }" title="K56DVT">
                    <span> 56DVT</span>
                </router-link></a-menu-item>
            <a-menu-item key="4"> <router-link :to="{ name: 'user-class-57DVT' }" title="K57DVT">
                    <span> 57DVT</span>
                </router-link></a-menu-item>

        </a-sub-menu>
        <a class=" d-flex border border-secondary-subtle "></a>
        <a-menu-item key="admin-tkb">
            <a href=" https://tms.tnut.edu.vn/tkb/"><font-awesome-icon :icon="['fas', 'calendar-days']" class="me-2" />Thời
                khóa biểu</a>
        </a-menu-item>
        <!-- <a-menu-item key="admin-tkb">
            <router-link :to="{ name: 'admin-tkb' }">
                <span> <font-awesome-icon :icon="['fas', 'calendar-days']" class="me-2"/>Thời khóa biểu</span>
           
            </router-link>
        </a-menu-item> -->
        <a class=" d-flex border border-secondary-subtle "></a>
        <a-menu-item key="admin-xemdiem">
            <router-link :to="{ name: 'admin-xemdiem' }">
                <span> <font-awesome-icon :icon="['fas', 'star']" class="me-2" />Xem điểm</span>
            </router-link>
        </a-menu-item>
        <a class=" d-flex border border-secondary-subtle "></a>
        <a-menu-item key="admin-dkmh">
            <router-link :to="{ name: 'admin-dkmh' }">
                <span> <font-awesome-icon :icon="['fas', 'subscript']" class="me-2" />Đăng ký môn học</span>
            </router-link>
        </a-menu-item>
        <a class=" d-flex border border-secondary-subtle "></a>
        <a-menu-item key="admin-ykien">
            <router-link :to="{ name: 'admin-ykien' }">
                <span> <font-awesome-icon :icon="['far', 'envelope']" class="me-2" />Ý kiến đóng góp</span>
            </router-link>
        </a-menu-item>
        <a class=" d-flex border border-secondary-subtle "></a>
        <a-menu-item key="admin-setting">
            <router-link :to="{ name: 'admin-setting' }">
                <span> <font-awesome-icon icon="gear" class="me-2" />Cài đặt</span>
            </router-link>
        </a-menu-item>

    </a-menu>
    <div>

    </div>
</template>
<script>
import { defineComponent } from 'vue';
import { storeToRefs } from 'pinia';
import { useMenu } from "../store/use-menu";
export default defineComponent({
    setup() {
        const store = useMenu();

        return {
            ...storeToRefs(store)
        };
    },
});
</script>