<template>
    <form @submit.prevent="createUser()">
        <a-card title="Tạo mới tài khoản" style="width:100%">
            <div class="row mb-3">
                <div class="col-12 col-sm-4">
                    <div class="row">
                        <div class="col-12 d-flex justify-content-center mb-3">
                            <a-avatar shape="square" :size="200">
                                <template #icon>
                                    <!-- <div>
                                        <input type="file" @change="uploadImage">
                                    </div> -->
                                    <img src="../../../assets/lu.png" alt="Avatar">
                                </template>
                            </a-avatar>
                        </div>
                        <div class="col-12 d-flex justify-content-center">
                            <form>
                                <label for="fileInput">Chọn ảnh:</label>
                                <input type="file" id="Avatar">
                            </form>
                            <img src="" alt="" heigh="50%" width="10%">
                        </div>
                        <!-- <form action="/add-image" method="post" enctype="multipart/form-data">
                            @csrf
                            <input type="file" name="image">
                            <button type="submit">Thêm ảnh</button>
                        </form> -->
                    </div>
                </div>
                <div class="col-12 col-sm-8">
                    <div class="row mb-3">
                        <div class="col-12 col-sm-3 text-start text-sm-end">
                            <label>
                                <span class="text-danger me-1">*</span>
                                <span :class="{
                                    'text-danger': errors.status_id
                                }">Tình trạng :</span>
                            </label>
                        </div>
                        <div class="col-12 col-sm-5">
                            <a-select show-search placeholder="Tình trạng" style="width: 100%" :options="user_status"
                                :filter-option="filterOption" allow-clear v-model:value="status_id" :class="{
                                    'select-danger': errors.status_id
                                }"></a-select>
                            <div class="w-100"></div>
                            <small v-if="errors.status_id" class="text-danger">{{ errors.status_id[0] }}</small>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-12 col-sm-3 text-start text-sm-end">
                            <label>
                                <span class="text-danger me-1">*</span>
                                <span :class="{
                                    'text-danger': errors.name
                                }">Họ và tên :</span>
                            </label>
                        </div>
                        <div class="col-12 col-sm-5">
                            <a-input placeholder="Họ và tên" allow-clear v-model:value="name" :class="{
                                'input-danger': errors.name
                            }" />
                            <div class="w-100"></div>
                            <small v-if="errors.name" class="text-danger">{{ errors.name[0] }}</small>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-12 col-sm-3 text-start text-sm-end">
                            <label>
                                <span class="text-danger me-1">*</span>
                                <span :class="{
                                    'text-danger': errors.sex
                                }">Giới tính :</span>
                            </label>
                        </div>
                        <div class="col-12 col-sm-5">
                            <a-input placeholder="Giới tính" allow-clear v-model:value="sex" :class="{
                                'input-danger': errors.sex
                            }" />
                            <div class="w-100"></div>
                            <small v-if="errors.sex" class="text-danger">{{ errors.sex[0] }}</small>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-12 col-sm-3 text-start text-sm-end">
                            <label>
                                <span class="text-danger me-1">*</span>
                                <span :class="{
                                    'text-danger': errors.username
                                }">MSSV :</span>
                            </label>
                        </div>
                        <div class="col-12 col-sm-5">
                            <a-input placeholder="MSSV" allow-clear v-model:value="username" :class="{
                                'input-danger': errors.username
                            }" />
                            <div class="w-100"></div>
                            <small v-if="errors.username" class="text-danger">{{ errors.username[0] }}</small>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-12 col-sm-3 text-start text-sm-end">
                            <label>
                                <span class="text-danger me-1">*</span>
                                <span :class="{
                                    'text-danger': errors.phone_number
                                }">Số điện thoại :</span>
                            </label>
                        </div>
                        <div class="col-12 col-sm-5">
                            <a-input placeholder="Số điện thoại" allow-clear v-model:value="phone_number" :class="{
                                'input-danger': errors.phone_number
                            }" />
                            <div class="w-100"></div>
                            <small v-if="errors.phone_number" class="text-danger">{{ errors.phone_number[0] }}</small>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-12 col-sm-3 text-start text-sm-end">
                            <label>
                                <span class="text-danger me-1">*</span>
                                <span :class="{
                                    'text-danger': errors.address_id
                                }">Quê quán :</span>
                            </label>
                        </div>
                        <div class="col-12 col-sm-5">
                            <a-select show-search placeholder="Quê quán" style="width: 100%" :options="address"
                                :filter-option="filterOption" allow-clear v-model:value="address_id" :class="{
                                    'select-danger': errors.address_id
                                }"></a-select>
                            <div class="w-100"></div>
                            <small v-if="errors.address_id" class="text-danger">{{ errors.address_id[0] }}</small>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-12 col-sm-3 text-start text-sm-end">
                            <label>
                                <span class="text-danger me-1">*</span>
                                <span :class="{
                                    'text-danger': errors.faculity_id
                                }">Khoa :</span>
                            </label>
                        </div>
                        <div class="col-12 col-sm-5">
                            <a-select show-search placeholder="Khoa" style="width: 100%" :options="faculity"
                                :filter-option="filterOption" allow-clear v-model:value="faculity_id" :class="{
                                    'select-danger': errors.faculity_id
                                }"></a-select>
                            <div class="w-100"></div>
                            <small v-if="errors.faculity_id" class="text-danger">{{ errors.faculity_id[0] }}</small>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-12 col-sm-3 text-start text-sm-end">
                            <label>
                                <span class="text-danger me-1">*</span>
                                <span :class="{
                                    'text-danger': errors.date
                                }">Ngày sinh :</span>
                            </label>
                        </div>
                        <div class="col-12 col-sm-5">
                            <!-- <a-date-picker v-model:value="value2" :format="dateFormatList" /> -->
                            <!-- <a-date-picker v-model:value="value1" /> -->
                            <a-input type="date" placeholder="Ngày sinh(yyyy-mm-dd) " allow-clear v-model:value="date"
                                :class="{
                                    'input-danger': errors.date
                                }" />
                            <div class="w-100"></div>
                            <small v-if="errors.date" class="text-danger">{{ errors.date[0] }}</small>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-12 col-sm-3 text-start text-sm-end">
                            <label>
                                <span class="text-danger me-1">*</span>
                                <span :class="{
                                    'text-danger': errors.email
                                }">Email :</span>
                            </label>
                        </div>
                        <div class="col-12 col-sm-5">
                            <a-input placeholder="Email" allow-clear v-model:value="email" :class="{
                                'input-danger': errors.email
                            }" />
                            <div class="w-100"></div>
                            <small v-if="errors.email" class="text-danger">{{ errors.email[0] }}</small>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-12 col-sm-3 text-start text-sm-end">
                            <label>
                                <span class="text-danger me-1">*</span>
                                <span :class="{
                                    'text-danger': errors.department_id
                                }">Chức vụ :</span>
                            </label>
                        </div>
                        <div class="col-12 col-sm-5">
                            <a-select show-search placeholder="Chức vụ" style="width: 100%" :options="department"
                                :filter-option="filterOption" allow-clear v-model:value="department_id" :class="{
                                    'select-danger': errors.department_id
                                }"></a-select>
                            <div class="w-100"></div>
                            <small v-if="errors.department_id" class="text-danger">{{ errors.department_id[0] }}</small>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-12 col-sm-3 text-start text-sm-end">
                            <label>
                                <span class="text-danger me-1">*</span>
                                <span :class="{
                                    'text-danger': errors.classify_id
                                }">Tôn giáo :</span>
                            </label>
                        </div>
                        <div class="col-12 col-sm-5">
                            <a-select show-search placeholder="Tôn giáo" style="width: 100%" :options="classify"
                                :filter-option="filterOption" allow-clear v-model:value="classify_id" :class="{
                                    'select-danger': errors.classify_id
                                }"></a-select>
                            <div class="w-100"></div>
                            <small v-if="errors.classify_id" class="text-danger">{{ errors.classify_id[0] }}</small>
                        </div>
                    </div>

                    <div class="row mb-3">
                        <div class="col-12 col-sm-3 text-start text-sm-end">
                            <label>
                                <span class="text-danger me-1">*</span>
                                <span :class="{
                                    'text-danger': errors.startyear
                                }">Năm bắt đầu :</span>
                            </label>
                        </div>
                        <div class="col-12 col-sm-5">
                            <a-input type="date" placeholder="Năm bắt đầu" allow-clear v-model:value="startyear" :class="{
                                'input-danger': errors.startyear
                            }" />
                            <div class="w-100"></div>
                            <small v-if="errors.startyear" class="text-danger">{{ errors.startyear[0] }}</small>
                        </div>
                    </div>

                    <div class="row mb-3">
                        <div class="col-12 col-sm-3 text-start text-sm-end">
                            <label>
                                <span class="text-danger me-1">*</span>
                                <span :class="{
                                    'text-danger': errors.scores
                                }">Điểm hệ 4. :</span>
                            </label>
                        </div>
                        <div class="col-12 col-sm-5">
                            <a-input placeholder="Điểm hệ 4." allow-clear v-model:value="scores" :class="{
                                'input-danger': errors.scores
                            }" />
                            <div class="w-100"></div>
                            <small v-if="errors.scores" class="text-danger">{{ errors.scores[0] }}</small>
                        </div>
                    </div>

                    <div class="row mb-3">
                        <div class="col-12 col-sm-3 text-start text-sm-end">
                            <label>
                                <span class="text-danger me-1">*</span>
                                <span :class="{
                                    'text-danger': errors.nation
                                }">Dân tộc :</span>
                            </label>
                        </div>
                        <div class="col-12 col-sm-5">
                            <a-input placeholder="Dân tộc" allow-clear v-model:value="nation" :class="{
                                'input-danger': errors.nation
                            }" />
                            <div class="w-100"></div>
                            <small v-if="errors.nation" class="text-danger">{{ errors.nation[0] }}</small>
                        </div>
                    </div>

                    <div class="row mb-3">
                        <div class="col-12 col-sm-3 text-start text-sm-end">
                            <label>
                                <span class="text-danger me-1">*</span>
                                <span :class="{
                                    'text-danger': errors.national
                                }">Quốc tịch :</span>
                            </label>
                        </div>
                        <div class="col-12 col-sm-5">
                            <a-input placeholder="Quốc tịch " allow-clear v-model:value="national" :class="{
                                'input-danger': errors.national
                            }" />
                            <div class="w-100"></div>
                            <small v-if="errors.national" class="text-danger">{{ errors.national[0] }}</small>
                        </div>
                    </div>

                    <div class="row mb-3">
                        <div class="col-12 col-sm-3 text-start text-sm-end">
                            <label>
                                <span class="text-danger me-1">*</span>
                                <span :class="{
                                    'text-danger': errors.cmnd
                                }">Số CCCD :</span>
                            </label>
                        </div>
                        <div class="col-12 col-sm-5">
                            <a-input placeholder="Căn cước công dân" allow-clear v-model:value="cmnd" :class="{
                                'input-danger': errors.cmnd
                            }" />
                            <div class="w-100"></div>
                            <small v-if="errors.cmnd" class="text-danger">{{ errors.cmnd[0] }}</small>
                        </div>
                    </div>

                    <div class="row mb-3">
                        <div class="col-12 col-sm-3 text-start text-sm-end">
                            <label>
                                <span class="text-danger me-1">*</span>
                                <span :class="{
                                    'text-danger': errors.drl
                                }">Điểm rèn luyện :</span>
                            </label>
                        </div>
                        <div class="col-12 col-sm-5">
                            <a-input placeholder="Điểm rèn luyện" allow-clear v-model:value="drl" :class="{
                                'input-danger': errors.drl
                            }" />
                            <div class="w-100"></div>
                            <small v-if="errors.drl" class="text-danger">{{ errors.drl[0] }}</small>
                        </div>
                    </div>

                    <div class="row mb-3">
                        <div class="col-12 col-sm-3 text-start text-sm-end">
                            <label>
                                <span class="text-danger me-1">*</span>
                                <span :class="{
                                    'text-danger': errors.banknumber
                                }">Số tài khoản :</span>
                            </label>
                        </div>
                        <div class="col-12 col-sm-5">
                            <a-input placeholder="Số tài khoản " allow-clear v-model:value="banknumber" :class="{
                                'input-danger': errors.banknumber
                            }" />
                            <div class="w-100"></div>
                            <small v-if="errors.banknumber" class="text-danger">{{ errors.banknumber[0] }}</small>
                        </div>
                    </div>

                    <div class="row mb-3">
                        <div class="col-12 col-sm-3 text-start text-sm-end">
                            <label>
                                <span class="text-danger me-1">*</span>
                                <span :class="{
                                    'text-danger': errors.staying
                                }">Tạm trú :</span>
                            </label>
                        </div>
                        <div class="col-12 col-sm-5">
                            <a-input placeholder="Tạm trú " allow-clear v-model:value="staying" :class="{
                                'input-danger': errors.staying
                            }" />
                            <div class="w-100"></div>
                            <small v-if="errors.staying" class="text-danger">{{ errors.staying[0] }}</small>
                        </div>
                    </div>

                    <div class="row mb-3">
                        <div class="col-12 col-sm-3 text-start text-sm-end">
                            <label>
                                <span class="text-danger me-1">*</span>
                                <span :class="{
                                    'text-danger': errors.major
                                }">Chuyên ngành :</span>
                            </label>
                        </div>
                        <div class="col-12 col-sm-5">
                            <a-input placeholder="Chuyên ngành " allow-clear v-model:value="major" :class="{
                                'input-danger': errors.major
                            }" />
                            <div class="w-100"></div>
                            <small v-if="errors.major" class="text-danger">{{ errors.major[0] }}</small>
                        </div>
                    </div>

                    <div class="row mb-3">
                        <div class="col-12 col-sm-3 text-start text-sm-end">
                            <label>
                                <span class="text-danger me-1">*</span>
                                <span :class="{
                                    'text-danger': errors.teacher
                                }">GVCN :</span>
                            </label>
                        </div>
                        <div class="col-12 col-sm-5">
                            <a-input placeholder="GVCN " allow-clear v-model:value="teacher" :class="{
                                'input-danger': errors.teacher
                            }" />
                            <div class="w-100"></div>
                            <small v-if="errors.teacher" class="text-danger">{{ errors.teacher[0] }}</small>
                        </div>
                    </div>

                    <div class="row mb-3">
                        <div class="col-12 col-sm-3 text-start text-sm-end">
                            <label>
                                <span class="text-danger me-1">*</span>
                                <span :class="{
                                    'text-danger': errors.training
                                }">Hệ đào tạo :</span>
                            </label>
                        </div>
                        <div class="col-12 col-sm-5">
                            <a-input placeholder="Hệ đào tạo " allow-clear v-model:value="training" :class="{
                                'input-danger': errors.training
                            }" />
                            <div class="w-100"></div>
                            <small v-if="errors.training" class="text-danger">{{ errors.training[0] }}</small>
                        </div>
                    </div>

                    <!-- <div class="row mb-3">
                        <div class="col-12 col-sm-3 text-start text-sm-end">
                            <label>
                                <span class="text-danger me-1">*</span>
                                <span :class="{
                                    'text-danger': errors.year
                                }">Năm :</span>
                            </label>
                        </div>
                        <div class="col-12 col-sm-5">
                            <a-input placeholder="Năm " allow-clear v-model:value="year" :class="{
                                    'input-danger': errors.year
                                }" />
                            <div class="w-100"></div>
                            <small v-if="errors.year" class="text-danger">{{ errors.year[0] }}</small>
                        </div>
                    </div> -->

                    <div class="row mb-3">
                        <div class="col-12 col-sm-3 text-start text-sm-end">
                            <label>
                                <span class="text-danger me-1">*</span>
                                <span :class="{
                                    'text-danger': errors.tinchi
                                }">Số tín chỉ :</span>
                            </label>
                        </div>
                        <div class="col-12 col-sm-5">
                            <a-input placeholder="Số tín chỉ  " allow-clear v-model:value="tinchi" :class="{
                                'input-danger': errors.tinchi
                            }" />
                            <div class="w-100"></div>
                            <small v-if="errors.tinchi" class="text-danger">{{ errors.tinchi[0] }}</small>
                        </div>
                    </div>

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


                    <div class="row mb-3">
                        <div class="col-12 col-sm-3 text-start text-sm-end">
                            <label>
                                <span class="text-danger me-1">*</span>
                                <span :class="{
                                    'text-danger': errors.password
                                }">Mật khẩu :</span>
                            </label>
                        </div>
                        <div class="col-12 col-sm-5">
                            <a-input-password placeholder="Mật khẩu" allow-clear v-model:value="password" :class="{
                                'input-danger': errors.password
                            }" />
                            <div class="w-100"></div>
                            <small v-if="errors.password" class="text-danger">{{ errors.password[0] }}</small>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-12 col-sm-3 text-start text-sm-end">
                            <label>
                                <span class="text-danger me-1">*</span>
                                <span :class="{
                                    'text-danger': errors.password_confirmation
                                }">Xác nhận mật khẩu:</span>
                            </label>
                        </div>
                        <div class="col-12 col-sm-5">
                            <a-input-password placeholder="Xác nhận mật khẩu" allow-clear
                                v-model:value="password_confirmation" :class="{
                                    'input-danger': errors.password_confirmation
                                }" />
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
    // methods: {
    //     uploadImage(event) {
    //         let formData = new FormData();
    //         formData.append('image', event.target.files[0]);

    //         axios.post('/add-image', formData).then(response => {
    //             console.log(response.data);
    //         });
    //     }
    // },
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
            Avatar: "",
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

                    }
                })
                .catch((error) => {
                    console.log(error);
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