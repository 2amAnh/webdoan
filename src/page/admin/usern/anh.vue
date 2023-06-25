<template>
    <a-card title="Quản lý sinh viên" style="width: 100%">
        <div class="row mb-3">
            <div class="col-12  d-flex justify-content-end ">
                <a-button type="primary">
                    <router-link :to="{ name: 'admin-user-create' }">
                        <font-awesome-icon icon="plus" />
                    </router-link>
                </a-button>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
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
                </a-table>
            </div>
        </div>
    </a-card>
</template>
<script>
import axios from 'axios';
import { defineComponent, ref } from 'vue';
import { useMenu } from '../../../store/use-menu';
// import { useRouter } from "vue-router";
// import { useRoute } from "vue-router";
export default defineComponent({
    setup() {
        useMenu().onselectedKeys(["admin-user"]);
        // const router = useRouter();
        // const route = useRoute();
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
                filters: [{
                    text: 'K195',
                    value: 'K1955',
                }, {
                    text: 'K2055',
                    value: 'K2055',
                },{
                    text: 'K2155',
                    value: 'K2155',
                },
                {
                    text: 'K2255',
                    value: 'K2255',
                },
                {
                    text: 'K2355',
                    value: 'K2355',
                }
                
            ],
                // specify the condition of filtering result
                // here is that finding the name started with `value`
                onFilter: (value, record) => record.username.indexOf(value) === 0,
                // sorter: (a, b) => a.username.length - b.username.length,
                sortDirections: ['descend'],
            },
            {
                title: 'Họ và tên',
                dataIndex: 'name',
                key: 'name',
                width: 200,
            },
            {
                title: 'Giới tính',
                dataIndex: 'sex',
                key: 'sex',
                width: 100,
                filters: [{
                    text: 'Nữ',
                    value: 'Nữ',
                }, {
                    text: 'Nam',
                    value: 'Nam',
                },],
                
                onFilter: (value, record) => record.sex.indexOf(value) === 0,
                sortDirections: ['descend'],
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
            },

            {
                title: 'Chức vụ',
                dataIndex: 'department',
                key: 'department',
                width: 100,
            },
            {
                title: 'Khoa',
                key: 'faculity',
                dataIndex: 'faculity',
                width: 150,
                filters: [{
                    text: 'Điện tử',
                    value: 'Điện tử',
                }, {
                    text: 'Điện',
                    value: 'Điện',
                },{
                    text: 'Cơ khí',
                    value: 'Cơ Khí',
                },],
                
                onFilter: (value, record) => record.faculity.indexOf(value) === 0,
                sortDirections: ['descend'],
            },
            {
                title: 'Tình trạng',
                dataIndex: 'status',
                key: 'status',
                width: 100,
            },
            {
                title: 'Quê quán',
                key: 'address',
                dataIndex: 'address',
                width: 150,
            },
            {
                title: 'Số điện thoại ',
                key: 'phone_number',
                dataIndex: 'phone_number',
                width: 160,
            },
            {
                title: 'Công cụ',
                key: 'action',
                fixed: "right",
                width: 100,
            }
        ]
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
            this.axios.delete(`http://127.0.0.1:8000/api/user/`+ id)
                .then(() => {
                  
                        // message.success("Xóa thành công: ");
                        this.getUser();
                        message.success("Xóa thành công: $(id)");
                  
                })
                .catch((error) => {
                    console.log(error);6

                })
        };
        getUsers();
        return {
            users,
            columns,
            deleteUser
        }

    },
});
</script>