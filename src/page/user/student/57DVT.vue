<template>
    <a-card title="Danh sach sinh viên 57DVT" style="width: 100%">
       
        <a-table :dataSource="users" :columns="columns" :scroll="{ x: 1500 }">
            <template #bodyCell="{ column, index, record }">

                
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
                <!-- <template v-if="column.key === 'scores'">
                    <span v-if="record.classify_id == 1" class="text-primary">{{ record.classify }}</span>
                    <span v-if="record.classify_id == 2" class="text-primary">{{ record.classify }}</span>
                    <span v-if="record.classify_id == 3" class="text-primary">{{ record.classify }}</span>
                    <span v-if="record.classify_id == 4" class="text-primary">{{ record.classify }}</span>
                    <span v-else-if="record.classify_id == 5" class="text-danger">{{ record.classify }}</span>
                </template>
                 -->
                <template v-if="column.key === 'action'">
                    <!-- <div class="col-12"> -->
                    <div class="col-3 mb-1">
                        <router-link :to="{ name: 'admin-user-edit', params: { id: record.id } }">
                            <a-button type="primary">
                                <font-awesome-icon icon="pen-to-square" />
                            </a-button>
                        </router-link>
                    </div>
                    <!-- <div class="col-3 mb-1">
                        <router-link :to="{ name: 'admin-user-delete', params: { id: record.id } }">
                            <a-button type="danger" >
                            <font-awesome-icon icon="trash" style="border: none" />
                        </a-button>
                        </router-link>
                    </div> -->
                    <div class="col-9">
                        <a-button type="danger" @click="destroy(record.id)">
                            <font-awesome-icon icon="trash" style="border: none" />
                        </a-button>
                    </div>
                    <!-- </div> -->
                    <!-- <td>
                        <a href="{{ router('users.delete',['id']=>$item->id )}}" class="btn btn-danger btn-sm"> Xoa</a>
                    </td> -->

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

            <div _ngcontent-fsg-c170="" class="pl-0 pr-2 col-md-4"><div _ngcontent-fsg-c170="" class="row mb-1"><div _ngcontent-fsg-c170="" class="col-4 text-nowrap">Mã SV:</div><div _ngcontent-fsg-c170="" class="col-8" style="font-weight: 600;">K195520207002</div></div><div _ngcontent-fsg-c170="" class="row mb-1"><div _ngcontent-fsg-c170="" class="col-4 text-nowrap">Tên sinh viên:</div><div _ngcontent-fsg-c170="" class="col-8" style="font-weight: 600;">Ngô Hoàng Anh</div></div><div _ngcontent-fsg-c170="" class="row mb-1"><div _ngcontent-fsg-c170="" class="col-4 text-nowrap">Ngày sinh:</div><div _ngcontent-fsg-c170="" class="col-8" style="font-weight: 600;">03/07/2001</div></div><div _ngcontent-fsg-c170="" class="row mb-1"><div _ngcontent-fsg-c170="" class="col-4 text-nowrap">Giới tính:</div><div _ngcontent-fsg-c170="" class="col-8" style="font-weight: 600;">Nam</div></div><div _ngcontent-fsg-c170="" class="row mb-1"><div _ngcontent-fsg-c170="" class="col-4 text-nowrap">Trạng thái:</div><div _ngcontent-fsg-c170="" class="col-8" style="font-weight: 600;">Đang học</div></div></div>
            
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
                width: 100,
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
                title: 'Năm nhập học',
                dataIndex: 'startyear',
                key: 'startyear',
                width: 130,
            },
            {
                title: 'Năm',
             
                key: 'year',
                width: 110,
            },
            {
                title: 'Tình trạng',
                dataIndex: 'status',
                key: 'status',
                width: 120,
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
                
                title: 'Tôn Giáo',
                dataIndex: 'classify',
                key: 'classify',
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
                key: 'classifyy',
                // dataIndex: 'classify_id',
                
                width: 150,
                customFilterDropdown: true,
                onFilter: (value, record) => record.classifyy.toString().toLowerCase().includes(value.toLowerCase()),
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
            {
                title: 'Công cụ',
                key: 'action',
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
                .get("http://127.0.0.1:8000/api/users/class57")
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