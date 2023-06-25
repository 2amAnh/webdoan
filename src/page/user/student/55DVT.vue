<template>
    <form @submit.prevent="updateUser()">
        <a-card title="Thông tin sinh viên " style="width:100%">
            <div class="row mb-3 " style="background-color:rgb(149, 240, 217)">
                <div class="col-12 col-sm-2 mt-2">
                    <div class="row">
                        <div class="col-12 d-flex justify-content-center mb-3">
                            <a-avatar shape="square" :size="200">
                                <template #icon>
                                    <img src="../../../assets/lu.png" alt="Avatar">
                                </template>
                            </a-avatar>
                        </div>
                        <div class="col-12 d-flex justify-content-center mb-2">
                            <a-button type="primary">
                                <font-awesome-icon icon="plus" class="me-2" />
                                <span> Chọn ảnh</span>
                            </a-button>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-4 mt-2">
                    <div class="row mb-3">
                        <div class="col-12 col-sm-5 text-start text-sm-end">
                            <label>
                                <span class="text-danger me-1">*</span>
                                <span :class="{
                                    'text-danger': errors.username
                                }">MSSV:</span>
                            </label>
                        </div>
                        <div class="col-12 col-sm-7">
                            <a-input placeholder="MSSV" allow-clear v-model:value="username" :class="{
                                'input-danger': errors.username
                            }" />
                            <div class="w-100"></div>
                            <small v-if="errors.username" class="text-danger">{{ errors.username[0] }}</small>

                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-12 col-sm-5 text-start text-sm-end">
                            <label>
                                <span class="text-danger me-1">*</span>
                                <span :class="{
                                    'text-danger': errors.name
                                }">Họ và tên:</span>
                            </label>
                        </div>
                        <div class="col-12 col-sm-7">
                            <a-input placeholder="Họ và tên" allow-clear v-model:value="name" :class="{
                                'input-danger': errors.name
                            }" />
                            <div class="w-100"></div>
                            <small v-if="errors.name" class="text-danger">{{ errors.name[0] }}</small>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-12 col-sm-5 text-start text-sm-end">
                            <label>
                                <span class="text-danger me-1">*</span>
                                <span :class="{
                                    'text-danger': errors.date
                                }">Ngày sinh:</span>
                            </label>
                        </div>
                        <div class="col-12 col-sm-7">
                            <!-- <a-date-picker v-model:value="value2" :format="dateFormatList" /> -->
                            <!-- <a-date-picker v-model:value="value1" /> -->

                            <a-input placeholder="Ngày sinh(yyyy-mm-dd) " allow-clear v-model:value="date" :class="{
                                'input-danger': errors.date
                            }" />
                            <!-- <a-date-picker placeholder="Ngày sinh "  v-model:value="date" :class="{
                                'input-danger': errors.date6666
                            }" /> -->
                            <div class="w-100"></div>
                            <small v-if="errors.date" class="text-danger">{{ errors.date[0] }}</small>

                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-12 col-sm-5 text-start text-sm-end">
                            <label>
                                <span class="text-danger me-1">*</span>
                                <span :class="{
                                    'text-danger': errors.sex
                                }">Giới tính:</span>
                            </label>
                        </div>
                        <div class="col-12 col-sm-7">
                            <a-input placeholder="Giới tính" allow-clear v-model:value="sex" :class="{
                                'input-danger': errors.sex
                            }" />
                            <div class="w-100"></div>
                            <small v-if="errors.sex" class="text-danger">{{ errors.sex[0] }}</small>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-12 col-sm-5 text-start text-sm-end">
                            <label>
                                <span class="text-danger me-1">*</span>
                                <span :class="{
                                    'text-danger': errors.status_id
                                }">Tình trạng:</span>
                            </label>
                        </div>
                        <div class="col-12 col-sm-7">
                            <a-select show-search placeholder="Tình trạng" style="width: 100%" :options="user_status"
                                :filter-option="filterOption" allow-clear v-model:value="status_id" :class="{
                                    'select-danger': errors.status_id
                                }"></a-select>
                            <div class="w-100"></div>
                            <small v-if="errors.status_id" class="text-danger">{{ errors.status_id[0] }}</small>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-4 mt-2">
                    <div class="row mb-3">
                        <div class="col-12 col-sm-5 text-start text-sm-end">
                            <label>
                                <span class="text-danger me-1">*</span>
                                <span :class="{
                                    'text-danger': errors.classs
                                }">Lớp:</span>
                            </label>
                        </div>
                        <div class="col-12 col-sm-7">
                            <a-input placeholder="Lớp sinh viên " allow-clear v-model:value="classs" :class="{
                                'input-danger': errors.classs
                            }" />
                            <div class="w-100"></div>
                            <small v-if="errors.classs" class="text-danger">{{ errors.classs[0] }}</small>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-12 col-sm-5 text-start text-sm-end">
                            <label>
                                <span class="text-danger me-1">*</span>
                                <span :class="{
                                    'text-danger': errors.faculity_id
                                }">Khoa:</span>
                            </label>
                        </div>
                        <div class="col-12 col-sm-7">
                            <a-select show-search placeholder="Khoa" style="width: 100%" :options="faculity"
                                :filter-option="filterOption" allow-clear v-model:value="faculity_id" :class="{
                                    'select-danger': errors.faculity_id
                                }"></a-select>
                            <div class="w-100"></div>
                            <small v-if="errors.faculity_id" class="text-danger">{{ errors.faculity_id[0] }}</small>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-12 col-sm-5 text-start text-sm-end">
                            <label>
                                <span class="text-danger me-1">*</span>
                                <span :class="{
                                    'text-danger': errors.major
                                }">Chuyên ngành :</span>
                            </label>
                        </div>
                        <div class="col-12 col-sm-7">
                            <a-input placeholder="Chuyên ngành " allow-clear v-model:value="major" :class="{
                                'input-danger': errors.major
                            }" />
                            <div class="w-100"></div>
                            <small v-if="errors.major" class="text-danger">{{ errors.major[0] }}</small>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-12 col-sm-5 text-start text-sm-end">
                            <label>
                                <span class="text-danger me-1">*</span>
                                <span :class="{
                                    'text-danger': errors.training
                                }">Hệ đào tạo :</span>
                            </label>
                        </div>
                        <div class="col-12 col-sm-7">
                            <a-input placeholder="Hệ đào tạo " allow-clear v-model:value="training" :class="{
                                'input-danger': errors.training
                            }" />
                            <div class="w-100"></div>
                            <small v-if="errors.training" class="text-danger">{{ errors.training[0] }}</small>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-12 col-sm-5 text-start text-sm-end">
                            <label>
                                <span class="text-danger me-1">*</span>
                                <span :class="{
                                    'text-danger': errors.startyear
                                }">Năm bắt đầu:</span>
                            </label>
                        </div>
                        <div class="col-12 col-sm-7">
                            <a-input placeholder="Năm bắt đầu" allow-clear v-model:value="startyear" :class="{
                                'input-danger': errors.startyear
                            }" />
                            <div class="w-100"></div>
                            <small v-if="errors.startyear" class="text-danger">{{ errors.startyear[0] }}</small>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-2"></div>
            </div>


            <div class="row mb-3">
                <div class="col-12 col-sm-4">

                    <div class="row mb-3">
                        <div class="col-12 col-sm-5 text-start text-sm-start">
                            <label>
                                <span class="text-danger me-1">*</span>
                                <span :class="{
                                    'text-danger': errors.email
                                }">Email:</span>
                            </label>
                        </div>
                        <div class="col-12 col-sm-7">
                            <a-input placeholder="Email" allow-clear v-model:value="email" :class="{
                                'input-danger': errors.email
                            }" />
                            <div class="w-100"></div>
                            <small v-if="errors.email" class="text-danger">{{ errors.email[0] }}</small>

                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-12 col-sm-5 text-start text-sm-start">
                            <label>
                                <span class="text-danger me-1">*</span>
                                <span :class="{
                                    'text-danger': errors.department_id
                                }">Chức vụ:</span>
                            </label>
                        </div>
                        <div class="col-12 col-sm-7">
                            <a-select show-search placeholder="Chức vụ" style="width: 100%" :options="department"
                                :filter-option="filterOption" allow-clear v-model:value="department_id" :class="{
                                    'select-danger': errors.department_id
                                }"></a-select>
                            <div class="w-100"></div>
                            <small v-if="errors.department_id" class="text-danger">{{ errors.department_id[0] }}</small>

                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-12 col-sm-5 text-start text-sm-start">
                            <label>
                                <span class="text-danger me-1">*</span>
                                <span :class="{
                                    'text-danger': errors.teacher
                                }">GV chủ nhiệm:</span>
                            </label>
                        </div>
                        <div class="col-12 col-sm-7">
                            <a-input placeholder="Giáo viên chủ nhiệm " allow-clear v-model:value="teacher" :class="{
                                'input-danger': errors.teacher
                            }" />
                            <div class="w-100"></div>
                            <small v-if="errors.teacher" class="text-danger">{{ errors.teacher[0] }}</small>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-12 col-sm-5 text-start text-sm-start">
                            <label>
                                <span class="text-danger me-1">*</span>
                                <span :class="{
                                    'text-danger': errors.scores
                                }">Điểm tích lũy hệ 4:</span>
                            </label>
                        </div>
                        <div class="col-12 col-sm-7">
                            <a-input placeholder="Điểm tích lũy hệ 4 " allow-clear v-model:value="scores" :class="{
                                'input-danger': errors.scores
                            }" />
                            <div class="w-100"></div>
                            <small v-if="errors.scores" class="text-danger">{{ errors.scores[0] }}</small>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-12 col-sm-5 text-start text-sm-start">
                            <label>
                                <span class="text-danger me-1">*</span>
                                <span :class="{
                                    'text-danger': errors.cmnd
                                }">Số CCCD :</span>
                            </label>
                        </div>
                        <div class="col-12 col-sm-7">
                            <a-input placeholder="Số căn cước công dân " allow-clear v-model:value="cmnd" :class="{
                                'input-danger': errors.cmnd
                            }" />
                            <div class="w-100"></div>
                            <small v-if="errors.cmnd" class="text-danger">{{ errors.cmnd[0] }}</small>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-1"></div>

                <div class="col-12 col-sm-3">
                    <div class="row mb-3">
                        <div class="col-12 col-sm-5 text-start text-sm-start">
                            <label>
                                <span class="text-danger me-1">*</span>
                                <span :class="{
                                    'text-danger': errors.phone_number
                                }">Số điện thoại:</span>
                            </label>
                        </div>
                        <div class="col-12 col-sm-7">
                            <a-input placeholder="Số điện thoại" allow-clear v-model:value="phone_number" :class="{
                                'input-danger': errors.phone_number
                            }" />
                            <div class="w-100"></div>
                            <small v-if="errors.phone_number" class="text-danger">{{ errors.phone_number[0] }}</small>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-12 col-sm-5 text-start text-sm-start">
                            <label>
                                <span class="text-danger me-1">*</span>
                                <span :class="{
                                    'text-danger': errors.nation
                                }">Dân tộc :</span>
                            </label>
                        </div>
                        <div class="col-12 col-sm-7">
                            <a-input placeholder="Dân tộc " allow-clear v-model:value="nation" :class="{
                                'input-danger': errors.nation
                            }" />
                            <div class="w-100"></div>
                            <small v-if="errors.nation" class="text-danger">{{ errors.nation[0] }}</small>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-12 col-sm-5 text-start text-sm-start">
                            <label>
                                <span class="text-danger me-1">*</span>
                                <span :class="{
                                    'text-danger': errors.staying
                                }">Nơi cư trú:</span>
                            </label>
                        </div>
                        <div class="col-12 col-sm-7">
                            <a-input placeholder="Nơi cư trú " allow-clear v-model:value="staying" :class="{
                                'input-danger': errors.staying
                            }" />
                            <div class="w-100"></div>
                            <small v-if="errors.staying" class="text-danger">{{ errors.staying[0] }}</small>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-12 col-sm-5 text-start text-sm-start">
                            <label>
                                <span class="text-danger me-1">*</span>
                                <span :class="{
                                    'text-danger': errors.drl
                                }">Điểm rèn luyện:</span>
                            </label>
                        </div>
                        <div class="col-12 col-sm-7">
                            <a-input placeholder="Điểm rèn luyện " allow-clear v-model:value="drl" :class="{
                                'input-danger': errors.drl
                            }" />
                            <div class="w-100"></div>
                            <small v-if="errors.drl" class="text-danger">{{ errors.drl[0] }}</small>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-12 col-sm-5 text-start text-sm-start">
                            <label>
                                <span class="text-danger me-1">*</span>
                                <span :class="{
                                    'text-danger': errors.banknumber
                                }">Số tài khoản :</span>
                            </label>
                        </div>
                        <div class="col-12 col-sm-7">
                            <a-input placeholder="Số tài khoản " allow-clear v-model:value="banknumber" :class="{
                                'input-danger': errors.banknumber
                            }" />
                            <div class="w-100"></div>
                            <small v-if="errors.banknumber" class="text-danger">{{ errors.banknumber[0] }}</small>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-1"></div>
                <div class="col-12 col-sm-3">
                    <div class="row mb-3">
                        <div class="col-12 col-sm-5 text-start text-sm-start">
                            <label>
                                <span class="text-danger me-1">*</span>
                                <span :class="{
                                    'text-danger': errors.address_id
                                }">Quê quán:</span>
                            </label>
                        </div>
                        <div class="col-12 col-sm-7">
                            <a-select show-search placeholder="Quê quán" style="width: 100%" :options="address"
                                :filter-option="filterOption" allow-clear v-model:value="address_id" :class="{
                                    'select-danger': errors.address_id
                                }"></a-select>
                            <div class="w-100"></div>
                            <small v-if="errors.address_id" class="text-danger">{{ errors.address_id[0] }}</small>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-12 col-sm-5 text-start text-sm-start">
                            <label>
                                <span class="text-danger me-1">*</span>
                                <span :class="{
                                    'text-danger': errors.classify_id
                                }">Tôn Giáo:</span>
                            </label>
                        </div>
                        <div class="col-12 col-sm-7">
                            <a-select show-search placeholder="Tôn giáo" style="width: 100%" :options="classify"
                                :filter-option="filterOption" allow-clear v-model:value="classify_id" :class="{
                                    'select-danger': errors.classify_id
                                }"></a-select>
                            <div class="w-100"></div>
                            <small v-if="errors.classify_id" class="text-danger">{{ errors.classify_id[0] }}</small>

                        </div>
                    </div>       
                    <div class="row mb-3">
                        <div class="col-12 col-sm-5 text-start text-sm-start">
                            <label>
                                <span class="text-danger me-1">*</span>
                                <span :class="{
                                    'text-danger': errors.national
                                }">Quốc tịch:</span>
                            </label>
                        </div>
                        <div class="col-12 col-sm-7">
                            <a-input placeholder="Quốc tịch " allow-clear v-model:value="national" :class="{
                                'input-danger': errors.national
                            }" />
                            <div class="w-100"></div>
                            <small v-if="errors.national" class="text-danger">{{ errors.national[0] }}</small>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-12 col-sm-5 text-start text-sm-start">
                            <label>
                                <span class="text-danger me-1">*</span>
                                <span :class="{
                                    'text-danger': errors.tinchi
                                }">Số tín chỉ tích lũy:</span>
                            </label>
                        </div>
                        <div class="col-12 col-sm-7">
                            <a-input placeholder="Số tín chỉ tích lũy " allow-clear v-model:value="tinchi" :class="{
                                'input-danger': errors.tinchi
                            }" />
                            <div class="w-100"></div>
                            <small v-if="errors.tinchi" class="text-danger">{{ errors.tinchi[0] }}</small>
                        </div>
                    </div>
                </div>



            </div>
            <!-- <div class="row mb-3  ">
                <div class="row mb-3">
                        <div class="col-12 col-sm-3 text-start text-sm-end">

                        </div>
                        <div class="col-12 col-sm-5">
                            <a-checkbox v-model:checked="change_password">
                                Đổi mật khẩu</a-checkbox>
                        </div>
                    </div>
                    <div class="row mb-3" v-if="change_password == true">
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
                    <div class="row mb-3" v-if="change_password == true">
                        <div class="col-12 col-sm-3 text-start text-sm-end">
                            <label>
                                <span class="text-danger me-1">*</span>
                                <span :class="{
                                    'text-danger': errors.password_confirmation
                                }">Xác nhận mật khẩu :</span>
                            </label>
                        </div>
                        <div class="col-12 col-sm-5">
                            <a-input-password placeholder="Xác nhận mật khẩu" allow-clear
                                v-model:value="password_confirmation" :class="{
                                    'input-danger': errors.password_confirmation
                                }" />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-12 col-sm-3 text-start text-sm-end">
                            <label>
                                <span>Lần đăng nhập gần đây :</span>
                            </label>
                        </div>
                        <div class="col-12 col-sm-5">
                            <span>{{ login_at }}</span>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-12 col-sm-3 text-start text-sm-end">
                            <label>
                                <span>Lần đổi mật khẩu gần đây:</span>
                            </label>
                        </div>
                        <div class="col-12 col-sm-5">
                            <span>{{ chagne_password_at }}</span>
                        </div>
                    </div>
            </div> -->

            <div class="row">
                <div class="col-12 d-grid d-sm-flex justify-content-sm-end mx-auto">
                    <!-- <a-button type="primary " class="me-sm-1 mb-2 mb-sm-0 me-0" html-type="submit">
                        <span>Lưu</span>
                    </a-button> -->
                    
                   
                    <a-button type="primary">
                        <router-link :to="{ name: 'user-danhsach' }">
                            <span>Quay lại</span>
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
import { useRoute } from "vue-router";
import { message } from 'ant-design-vue';
import axios from 'axios';
import dayjs from 'dayjs';
export default defineComponent({
    setup() {
        useMenu().onselectedKeys(["admin-user"]);
        const router = useRouter();
        const route = useRoute();
        const user_status = ref([]);
        const department = ref([]);
        const faculity = ref([]);
        const classify = ref([]);
        const address = ref([]);
        const user = reactive({
            username: "",
            name: "",
            date: "",
            email: "",
            sex: "",
            phone_number: "",
            password: "",
            password_confirmation: "",
            department_id: [],
            faculity_id: [],
            address_id: [],
            status_id: [],
            classify_id: [],
            startyear: [],
            scores: [],
            nation: [],
            national: [],
            cmnd: [],
            drl: [],
            banknumber: [],
            staying: [],
            major: [],
            teacher: [],
            training: [],
            year: [],
            tinchi: [],
            classs: [],
            change_password: false,
            login_at: "",
            chagne_password_at: ""
        });

        const errors = ref({});

        const getUserEdit = () => {
            axios.get(`http://127.0.0.1:8000/api/users/${route.params.id}/edit`)
                .then((response) => {
                    console.log(response);
                    user.username = response.data.user.username;
                    user.name = response.data.user.name;
                    user.date = response.data.user.date;
                    user.email = response.data.user.email;
                    user.sex = response.data.user.sex;
                    user.phone_number = response.data.user.phone_number;
                    user.department_id = response.data.user.department_id;
                    user.faculity_id = response.data.user.faculity_id;
                    user.address_id = response.data.user.address_id;
                    user.status_id = response.data.user.status_id;
                    user.classify_id = response.data.user.classify_id;
                    user.startyear = response.data.user.startyear;
                    user.scores = response.data.user.scores;
                    user.nation = response.data.user.nation;
                    user.national = response.data.user.national;
                    user.cmnd = response.data.user.cmnd;
                    user.drl = response.data.user.drl;
                    user.banknumber = response.data.user.banknumber;
                    user.staying = response.data.user.staying;
                    user.major = response.data.user.major;
                    user.teacher = response.data.user.teacher;
                    user.training = response.data.user.training;
                    user.year = response.data.user.year;
                    user.tinchi = response.data.user.tinchi;
                    user.classs = response.data.user.classs;

                    response.data.user.login_at
                        ? (user.login_at = dayjs(response.data.user.login_at).format('DD/MM/YYYY-HH:mm'))
                        : (user.login_at = "Chưa có lượt đăng nhập");
                    response.data.user.chagne_password_at
                        ? (user.chagne_password_at = dayjs(response.data.user.chagne_password_at).format('DD/MM/YYYY - HH:mm'))
                        : (user.chagne_password_at = "Chưa có lượt đổi mật khẩu");

                    user_status.value = response.data.user_status;
                    department.value = response.data.department;
                    address.value = response.data.address;
                    faculity.value = response.data.faculity;
                    classify.value = response.data.classify;
                })
                .catch((error) => {
                    console.log(error);
                })
        };
        const updateUser = () => {
            axios.put(`http://127.0.0.1:8000/api/users/${route.params.id}`, user)
                .then((response) => {
                    if (response.status == 200) {
                        message.success("Cập nhập thành công!");
                        router.push({ name: "admin-user" });
                    }
                })
                .catch((error) => {
                    errors.value = error.response.data.errors;
                })
        };
        const filterOption = (input, option) => {
            return option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0;
        };
        getUserEdit();
        return {
            user_status,
            address,
            faculity,
            department,
            classify,
            errors,
            ...toRefs(user),
            filterOption,
            updateUser
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