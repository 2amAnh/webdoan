<template>
    <form @submit.prevent="createContact()">
        <a-card title="Gửi ý kiến" style="width:100%">
            <div class="col-12 col-sm-12 mb-3">
                <div class="row">
                    <div class="col-12 col-sm-1">
                        <label>
                            <span class="text-danger me-1">*</span>
                            <span :class="{
                                'text-danger' : errors.contactusername
                            }">
                            MSSV</span>

                        </label>

                    </div>
                    <div class="col-12 col-sm-3">
                        <a-input placeholder="MSSV" allow-clear 
                        v-model:value="contactusername" 
                        :class="{
                                'input-danger': errors.contactusername
                            }"
                        />
                        <div class="w-100"></div>
                            <small v-if="errors.contactusername" class="text-danger">{{ errors.contactusername[0] }}</small>
                    </div>
                </div>
            </div>
            <div class="col-12 col-sm-12 mb-3">
                <div class="row">
                    <div class="col-12 col-sm-1">
                        <label>
                            <span class="text-danger me-1">*</span>
                            <span :class="{
                                'text-danger' : errors.contactname
                            }">Họ và tên</span>

                        </label>

                    </div>
                    <div class="col-12 col-sm-3">
                        <a-input placeholder="Họ và tên" allow-clear 
                        v-model:value="contactname"
                        :class="{
                                'input-danger': errors.contactname
                            }"
                        />
                        <div class="w-100"></div>
                            <small v-if="errors.contactname" class="text-danger">{{ errors.contactname[0] }}</small>
                    </div>
                </div>
            </div>
            <div class="col-12 col-sm-12 mb-3">
                <div class="row">
                    <div class="col-12 col-sm-1">
                        <label>
                            <span class="text-danger me-1">*</span>
                            <span :class="{
                                'text-danger' : errors.contacttext
                            }">Ý kiến</span>

                        </label>

                    </div>
                    <ul class="col-12 col-sm-4 ">
                        <a-textarea type="text" placeholder="Ý kiến" :rows="3" 
                        v-model:value="contacttext"
                        :class="{
                                'input-danger': errors.contacttext
                            }"
                        />
                         <div class="w-100"></div>
                            <small v-if="errors.contacttext" class="text-danger">{{ errors.contacttext[0] }}</small>
                    </ul>
                </div>
            </div>
            <a-button class="me-sm-2">
                <router-link :to="{ name: 'user-index' }">
                    <span>Hủy</span>
                </router-link>
            </a-button>
            <a-button type="primary" html-type="submit">
                <span>Gửi</span>
            </a-button>
        </a-card>
    </form>
</template>
<script>
import { defineComponent, ref , reactive, toRefs } from 'vue';
import { useRouter } from "vue-router";
import { message } from 'ant-design-vue';
import { useMenu } from '../../../store/use-menu';
export default defineComponent({
    setup() {
        useMenu().onselectedKeys(["user-contact"]);
        const contacts= reactive({
            contactusername:"",
            contactname:"",
            contacttext:"",
        })
        const errors = ref({});
        const createContact = () => {
            axios.post("http://127.0.0.1:8000/api/Contact", contacts)
                .then((response) => {
                    // if (response.status == 200) {
                    //     message.success('Gửi ý kiến thành công thành công');
                    //     router.push({ name: "user-index" });
                        console.log(response);
                    // }
                })
                .catch((error) => {
                    console.log(error);
                    errors.value = error.response.data.errors ;
                    
                });
        }
        return {
            errors,
            createContact,
            ...toRefs(contacts)
        };
    },

});
</script>
<style>
.select-danger {
    border: 1px solid red;
}

.input-danger {
    border-color: red;
}
</style>