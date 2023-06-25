<template>
    <a-card title="Ý kiến của sinh viên" style="width: 1000px">
        <div class="row">
            <div class="col-12">
                <a-table :dataSource="newuser" :columns="columns">
                    <template #bodyCell="{ column, record , index }">
                        <template v-if="column.key === 'id'">
                            <span>{{ index + 1 }}</span>
                        </template>
                    </template>
                </a-table>
            </div>
        </div>
       
    </a-card>
</template>
<script>
import { SearchOutlined } from '@ant-design/icons-vue';
import { defineComponent, reactive, ref, toRefs } from 'vue';
import axios from 'axios';
import { useMenu } from '../../../store/use-menu';
export default defineComponent({
    setup() {
        useMenu().onselectedKeys(["admin-ykien"]);
        const newuser = ref([]);
        const columns = [
            {
                title: 'STT',
                key: 'id',
            },
            {
                title: 'Họ và tên',
                dataIndex: 'contactname',
                key: 'name',
            },
            {
                title: 'MSSV',
                dataIndex: 'contactusername',
                key: 'username',
            },
            {
                title: 'Ý kiến nhận được',
                dataIndex: 'contacttext',
                key: 'text',
            },
        ]
        const NewUser = () => {
            axios.get('http://127.0.0.1:8000/api/Newuser')
                .then((response) => {
                    newuser.value = response.data;
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
        NewUser();
        return {
            newuser,
            columns
        }
    },
})
</script>