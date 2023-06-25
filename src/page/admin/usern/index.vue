<template>
    <a-card title="Quản lý sinh viên" style="width: 100%">
        <!-- <div class="row mb-3">
            <div class="col-12  d-flex justify-content-end ">
                <a-button type="primary">
                    <router-link :to="{ name: 'admin-user-create' }">
                        <font-awesome-icon icon="plus" />
                    </router-link>
                </a-button>
            </div>
        </div> -->

        <a-table :dataSource="users" :columns="columns" :scroll="{ x: 1500 }">
            <template #bodyCell="{ column, index, record }">
                <template v-if="column.key === 'index'">
                    <span>
                        {{ index + 1 }}
                    </span>
                </template>
                <template v-if="column.key === 'status'">
                    <span v-if="record.status_id == 1" class="text-primary">{{ record.status }}</span>
                    <span v-else-if="record.status_id == 2" class="text-danger">{{ record.status }}</span>
                </template>
                <template v-if="column.key === 'action'">
                    <!-- <div class="col-12"> -->
                    <div class="col-3 mb-1">
                        <router-link :to="{ name: 'admin-user-edit', params: { id: record.id } }">
                            <a-button type="primary">
                                <font-awesome-icon icon="pen-to-square" />{{ record.id }}
                            </a-button>
                        </router-link>
                    </div>
                    <div class="col-9">
                        <a-button type="danger" @click="deleteUser(record.id)">
                            .<font-awesome-icon icon="trash" style="border: none" />.
                        </a-button>
                    </div>
                    <!-- </div> -->

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

const data = [{
    key: 'id',
    username: 'username',
    address: 'address',
    faculity: 'faculity'
    // }, {
    //     key: 'username',
    //     username: 'K205520207001 ',
    //     address: 'Quảng Ninh',
    // }, {
    //     key: '3',
    //     name: 'Jim Green',

    //     address: 'Sidney No. 1 Lake Park',
    // }, {
    //     key: '4',
    //     name: 'Jim Red',

    //     address: 'London No. 2 Lake Park',
    // 
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
                width: 100,
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
                title: 'Ngày sinh',
                dataIndex: 'date',
                key: 'date',
                width: 120,
            },
            {
                title: 'Gmail',
                dataIndex: 'email',
                key: 'email',
                width: 220,
                customFilterDropdown: true,
                onFilter: (value, record) => record.email.toString().toLowerCase().includes(value.toLowerCase()),
                onFilterDropdownVisibleChange: visible => {
                    if (visible) {
                        setTimeout(() => {
                            searchInput.value.focus();
                        }, 100);
                    }
                },
            },

            {
                title: 'Chức vụ',
                dataIndex: 'department',
                key: 'department',
                width: 100,
                customFilterDropdown: true,
                onFilter: (value, record) => record.department.toString().toLowerCase().includes(value.toLowerCase()),
                onFilterDropdownVisibleChange: visible => {
                    if (visible) {
                        setTimeout(() => {
                            searchInput.value.focus();
                        }, 100);
                    }
                },
            },
            {
                title: 'Giáo viên',
                dataIndex: 'teacher',
                key: 'teacher',
                width: 150,
            },
            {
                title: 'Lớp',
                dataIndex: 'classs',
                key: 'classs',
                width: 80,
            },
            {
                title: 'Chuyên ngành',
                dataIndex: 'major',
                key: 'major',
                width: 200,
            },
            
            {
                title: 'Khoa',
                key: 'faculity',
                dataIndex: 'faculity',
                width: 150,
                customFilterDropdown: true,
                onFilter: (value, record) => record.faculity.toString().toLowerCase().includes(value.toLowerCase()),
                onFilterDropdownVisibleChange: visible => {
                    if (visible) {
                        setTimeout(() => {
                            searchInput.value.focus();
                        }, 100);
                    }
                },
            },
            {
                title: 'Hệ đào tạo',
                dataIndex: 'training',
                key: 'training',
                width: 200,
            },
            {
                title: 'Năm bắt đầu',
                dataIndex: 'startyear',
                key: 'startyear',
                width: 100,
            },
            {
                title: 'Năm',
                dataIndex: 'year',
                key: 'year',
                width: 80,
            },
            {
                title: 'Tình trạng',
                dataIndex: 'status',
                key: 'status',
                width: 100,
                customFilterDropdown: true,
                onFilter: (value, record) => record.status.toString().toLowerCase().includes(value.toLowerCase()),
                onFilterDropdownVisibleChange: visible => {
                    if (visible) {
                        setTimeout(() => {
                            searchInput.value.focus();
                        }, 100);
                    }
                },
            },
            {
                title: 'Dân tộc',
                dataIndex: 'nation',
                key: 'nation',
                width: 120,
            },
            
            {
                title: 'Quê quán',
                key: 'address',
                dataIndex: 'address',
                width: 150,
                customFilterDropdown: true,
                onFilter: (value, record) => record.address.toString().toLowerCase().includes(value.toLowerCase()),
                onFilterDropdownVisibleChange: visible => {
                    if (visible) {
                        setTimeout(() => {
                            searchInput.value.focus();
                        }, 100);
                    }
                },
            },
            {
                title: 'Tạm trú',
                dataIndex: 'staying',
                key: 'staying',
                width: 200,
            },
            {
                title: ' Quốc tịch',
                dataIndex: 'national',
                key: 'national',
                width: 150,
            },
            {
                title: 'Điểm hệ 4.',
                dataIndex: 'scores',
                key: 'scores',
                width: 150,
            },
            {
                title: 'ĐRL',
                dataIndex: 'drl',
                key: 'drl',
                width: 80,
            },
            {
                title: 'Số tín chỉ tích lũy',
                dataIndex: 'tinchi',
                key: 'tinchi',
                width: 150,
            },
            {
                title: 'Căn cước công dân',
                dataIndex: 'cmnd',
                key: 'cmnd',
                width: 180,
            },
            {
                title: 'Phân loại',
                key: 'classify',
                dataIndex: 'classify',
                width: 150,
                customFilterDropdown: true,
                onFilter: (value, record) => record.classify.toString().toLowerCase().includes(value.toLowerCase()),
                onFilterDropdownVisibleChange: visible => {
                    if (visible) {
                        setTimeout(() => {
                            searchInput.value.focus();
                        }, 100);
                    }
                },
            },
            {
                title: 'Số điện thoại ',
                key: 'phone_number',
                dataIndex: 'phone_number',
                width: 160,
            },
            {
                title: 'Số tài khoản',
                dataIndex: 'banknumber',
                key: 'banknumber',
                width: 180,
            },
            // {
            //     title: 'Công cụ',
            //     key: 'action',
            //     fixed: "right",
            //     width: 100,
            // },

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
        const deleteUser = (id) => {
            this.axios.delete(`http://127.0.0.1:8000/api/user/` + id)
                .then(() => {

                    // message.success("Xóa thành công: ");
                    this.getUser();
                    message.success("Xóa thành công: $(id)");

                })
                .catch((error) => {
                    console.log(error); 6

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
            deleteUser
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