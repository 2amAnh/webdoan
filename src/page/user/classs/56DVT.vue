<template>
    <a-card title="Danh sach sinh viên 56DVT" style="width: 100%">
       
        <a-table :dataSource="users" :columns="columns" :scroll="{ x: 500 }">
            <template #bodyCell="{ column, index, record }">

               
                <template v-if="column.key === 'infor'">
                        <router-link :to="{ name: 'user-student-55DVT', params: { id: record.id } }">
                            <a-button type="primary">
                                <font-awesome-icon icon="pen-to-square" />
                            </a-button>
                        </router-link>
                </template>
                <template v-if="column.key === 'index'">
                    <span>
                        {{ index + 1 }}
                    </span>
                </template>
                <template v-if="column.key === 'status'">
                    <span v-if="record.status_id == 1" class="text-primary">{{ record.status }}</span>
                    <span v-else-if="record.status_id == 3" class="text-danger">{{ record.status }}</span>
                    <span v-else-if="record.status_id == 2" class="text-primary">{{ record.status }}</span>
                </template>
                <template v-if="column.key === 'classify'">
                    <span v-if="record.classify_id == 1" >{{ record.classify }}</span>
                    <span v-else-if="record.classify_id == 2" >{{ record.classify }}</span>
                    
                </template>
               
                <template v-if="column.key === 'classifyy'">
                    <span v-if="record.scores < 2" class="text-danger" >Yếu</span>
                    <span v-else-if="record.scores >=2"
                        v-if="record.scores < 2.5" class="text-primary" >Trung Bình</span>
                        <span v-if="record.scores > 4" class="text-danger" >Lỗi</span>
                    <span v-else-if="record.scores >=2.5"
                         v-if="record.scores <3.2" class="text-primary" >Khá</span> 
                    <span v-if="record.scores >= 3.6" class="text-primary" >Xuất Sắc</span>
                    <span v-else-if="record.scores >=3.2" v-if="record.scores <3.6" class="text-primary" >Giỏi</span> 
                </template>
               

            </template>
            <template #customFilterDropdown="{ setSelectedKeys, selectedKeys, confirm, clearFilters, column }">
                <div style="padding: 8px">
                    <a-input ref="searchInput" :placeholder="`Search ${column.dataIndex}`" :value="selectedKeys[0]"
                        style="width: 188px; margin-bottom: 8px; display: block"
                        @change="e => setSelectedKeys(e.target.value ? [e.target.value] : [])"
                        @pressEnter="handleSearch(selectedKeys, confirm, column.dataIndex)" />
                    <a-button type="primary" size="small" style="width: 90px; margin-right: 8px"
                        @click="handleSearch(selectedKeys, confirm, column.dataIndex)">
                        <template #icon>
                            <SearchOutlined />
                        </template>
                        Search
                    </a-button>
                    <a-button size="small" style="width: 90px" @click="handleReset(clearFilters)">
                        Reset
                    </a-button>
                </div>
            </template>
            <template #customFilterIcon="{ filtered }">
                <search-outlined :style="{ color: filtered ? '#108ee9' : undefined }" />
            </template>

        </a-table>
    </a-card>
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
        useMenu().onselectedKeys(["admin-user"]);
        const state = reactive({
            searchText: '',
            searchedColumn: '',
        });
        const searchInput = ref();
        const columns = [
            {
                title: 'STT',
                key: 'index',
                width: 60,

            },
            {
                title: 'Avatar',
                key: 'avatar',
                responsive: [""],
            },
            {
                title: 'MSSV',
                dataIndex: 'username',
                key: 'username',
                width: 160,
                customFilterDropdown: true,
                onFilter: (value, record) => record.username.toString().toLowerCase().includes(value.toLowerCase()),
                onFilterDropdownVisibleChange: visible => {
                    if (visible) {
                        setTimeout(() => {
                            searchInput.value.focus();
                        }, 100);
                    }
                },
            },
            {
                title: 'Họ và tên',
                dataIndex: 'name',
                key: 'name',
                width: 200,
                customFilterDropdown: true,
                onFilter: (value, record) => record.name.toString().toLowerCase().includes(value.toLowerCase()),
                onFilterDropdownVisibleChange: visible => {
                    if (visible) {
                        setTimeout(() => {
                            searchInput.value.focus();
                        }, 100);
                    }
                },
            },
            {
                title: 'Giới tính',
                dataIndex: 'sex',
                key: 'sex',
                width: 120,
                customFilterDropdown: true,
                onFilter: (value, record) => record.sex.toString().toLowerCase().includes(value.toLowerCase()),
                onFilterDropdownVisibleChange: visible => {
                    if (visible) {
                        setTimeout(() => {
                            searchInput.value.focus();
                        }, 100);
                    }
                },
            },
            {
                title: 'Thông tin',
                key: 'infor',
                fixed: "right",
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
                .get("http://127.0.0.1:8000/api/users/class56")
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
            axios.get(`http://127.0.0.1:8000/api/users/delete/`+id)
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
<style scoped>
.highlight {
    background-color: rgb(255, 192, 105);
    padding: 0px;
}
</style>