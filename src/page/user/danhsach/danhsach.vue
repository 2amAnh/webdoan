<template>
    <a-card title="Danh sách lớp sinh viên" style="width: 100%">
        <div class="row mb-3">
            <div class="col-12  d-flex justify-content-end ">
                <!-- <a-button type="primary">
                    <router-link :to="{ name: 'admin-user-create' }">
                        <font-awesome-icon icon="plus" />
                    </router-link>
                </a-button> -->
            </div>
        </div>

    </a-card>
    <!-- <img src="../index/55.2.jpg" alt="demo">
    <input type="file"> -->

    <div class="newsCare">
        <div class="row">

            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                <div class="inner">
                    <div class="skin-item nn-prod-box">
                        <router-link :to="{ name: 'user-class-55DVT' }" title="K55DVT" >
                            <img src="../index/55.1.jpg" alt="55DVT" class="mb-2"></router-link>

                    </div>
                    <div class="pd20 text-center text-uppercase" >
                        <router-link :to="{ name: 'user-class-55DVT' }" title="K55DVT">
                            <span> 55DVT</span>
                        </router-link>
                    </div>
                </div>
            </div>

            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 mb-3">
                <div class="inner">
                    <div class="skin-item nn-prod-box">
                        <router-link :to="{ name: 'user-class-56DVT' }" title="K56DVT">
                            <img src="../index/56.3.jpg" alt="56DVT " class="mb-2"></router-link>

                    </div>
                    <div class="pd20 text-center text-uppercase">
                        <router-link :to="{ name: 'user-class-56DVT'  }" title="K56DVT" >
                            <span> 56DVT</span>
                        </router-link>
                    </div>
                </div>
            </div>

            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                <div class="inner">
                    <div class="skin-item nn-prod-box">
                        <router-link :to="{ name: 'user-class-57DVT' }" title="K57DVT">
                            <img src="../index/57.4.jpg" class="mb-2"> </router-link>

                    </div>
                    <div class="pd20 text-center text-uppercase">
                        <router-link :to="{ name: 'user-class-57DVT' }" title="K57DVT">
                            <span> 57DVT</span>
                        </router-link>
                    </div>
                </div>
            </div>


        </div>
    </div>
</template>

<script>
import { SearchOutlined } from '@ant-design/icons-vue';
import { defineComponent, reactive, ref, toRefs } from 'vue';
import axios from 'axios';
import { useMenu } from '../../../store/use-menu';
import { message } from 'ant-design-vue';

const data = [{
    key: 'id',
    username: 'username',
    address: 'address',
    faculity: 'faculity'

}
];
export default defineComponent({
    components: {
        SearchOutlined,
    },
    setup() {
        useMenu().onselectedKeys(["user-index"]);
        const state = reactive({
            searchText: '',
            searchedColumn: '',
        });
        const searchInput = ref();
        const columns = [

            {
                title: 'Lớp',
                dataIndex: 'classs',
                key: 'classs',
                width: 100,

            },
        ];
        const handleSearch = (selectedKeys, confirm, dataIndex) => {
            confirm();
            state.searchText = selectedKeys[0];
            state.searchedColumn = dataIndex;
        };
        const handleReset = clearFilters => {
            clearFilters({
                confirm: true,
            });
            state.searchText = '';
        };
        const users = ref([]);
        const getUsers = () => {
            axios
                .get("http://127.0.0.1:8000/api/users")
                .then((response) => {
                    users.value = response.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        };
        // const destroy = (id) => {
        // //alert(` bạn đang muốn xóa user có id là: ${id}`);
        //     axios.delete("http://127.0.0.1:8000/api/delete/" + id)

        // };
        const destroy = (id) => {
            axios.get(`http://127.0.0.1:8000/api/users/delete/` + id)
                .then((response) => {
                    if (response.status == 200) {
                        message.success("Xóa thành công!");
                        users.value = response.data;
                        console.log(response);
                    }
                })
                .catch((error) => {
                    console.log(error);
                })
        };
        getUsers();
        return {
            data,
            columns,
            handleSearch,
            handleReset,
            searchInput,
            ...toRefs(state),
            users,
            destroy
        };
    },
});
</script>
