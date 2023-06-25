<template>
    <form @submit.prevent="createUser()">
        <a-card title="Tạo lớp mới" style="width:100%">
            <div class="row mb-3">
                <div class="col-12 col-sm-4">
                    <div class="row">
                        <div class="col-12 d-flex justify-content-center mb-3">
                            <a-avatar shape="square" :size="200">
                                <template #icon>
                                    <img src="../../../assets/lu.png" alt="Avatar">
                                </template>
                            </a-avatar>
                        </div>
                        <div class="col-12 d-flex justify-content-center">
                            <a-button type="primary">
                                <font-awesome-icon icon="plus" class="me-2" />
                                <span> Chọn ảnh</span>
                            </a-button>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="row mb-3">
                        <div class="col-12 col-sm-3 text-start text-sm-end">
                            <label>
                                <span class="text-danger me-1">*</span>
                                <span :class="{
                                    'text-danger': errors.classs
                                }">Lớp :</span>
                            </label>
                        </div>
                        <div class="col-12 col-sm-5">
                            <a-input placeholder="Lớp  " allow-clear v-model:value="classs" :class="{
                                'input-danger': errors.classs
                            }" />
                            <div class="w-100"></div>
                            <small v-if="errors.classs" class="text-danger">{{ errors.classs[0] }}</small>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12 d-grid d-sm-flex justify-content-sm-end mx-auto">
                    <a-button type="primary " class="me-sm-1 mb-2 mb-sm-0 me-0" html-type="submit">
                        <span>Lưu</span>
                    </a-button>
                    <a-button>
                        <router-link :to="{ name: 'admin-user' }">
                            <span>Hủy</span>
                        </router-link>
                    </a-button>
                </div>
            </div>
        </a-card>
    </form>
</template>
<script>
import { defineComponent, ref, reactive, toRefs } from 'vue';
import { useMenu } from '../../../store/use-menu';
import { useRouter } from "vue-router";
import { message } from 'ant-design-vue';
export default defineComponent({
    setup() {
        useMenu().onselectedKeys(["admin-user"]);
        const router = useRouter();
        const user_status = ref([]);
        const faculity = ref([]);
        const department = ref([]);
        const address = ref([]);
        const classify = ref([]);
        const user = reactive({
            username: "",
            name: "",
            date: "",
            email: "",
            sex: "",
            startyear: "",
            scores: "",
            nation: "",
            national: "",
            cmnd: "",
            drl: "",
            banknumber: "",
            staying: "",
            major: "",
            teacher: "",
            training: "",
            // year: "",
            tinchi: "",
            classs: "",
            phone_number: "",
            password: "",
            password_confirmation: "",
            department_id: [],
            status_id: [],
            faculity_id: [],
            classify_id: [],
            address_id: []

        });
        const getUserCreate = () => {
            axios
                .get("http://127.0.0.1:8000/api/users/create")
                .then((response) => {
                    user_status.value = response.data.user_status;
                    department.value = response.data.department;
                    address.value = response.data.address;
                    classify.value = response.data.classify;
                    faculity.value = response.data.faculity;
                    console.log(error);
                })
                .catch((error) => {
                    console.log(error);
                });
        };
        const errors = ref({});
        const createUser = () => {
            axios.post("http://127.0.0.1:8000/api/users", user)
                .then((response) => {
                    if (response.status == 200) {
                        message.success('Tạo mới thành công');
                        router.push({ name: "admin-user" });
                        console.log(error);
                    }
                })
                .catch((error) => {
                    errors.value = error.response.data.errors;
                });
        }
        const filterOption = (input, option) => {
            return option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0;
        };
        getUserCreate();
        return {
            user_status,
            department,
            address,
            faculity,
            classify,
            errors,
            ...toRefs(user),
            filterOption,
            createUser
        }
    },
})
</script>
<style>
.select-danger {
    border: 1px solid red;
}

.input-danger {
    border-color: red;
}
</style>