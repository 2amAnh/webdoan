<template>
  <div class="containter-fuild">
    <div class="row " style="background-color:aqua ; padding: 1rem">
      <div class="col-1 d-flex d-sm-none align-items-center justify-content-center">
        <span @click="showDrawer()"><font-awesome-icon icon="align-justify" /></span>
      </div>

      <div class="col-10 col-sm-9 d-flex  align-items-center justify-content-center justify-content-sm-start">
        <img src="../assets/335028589_1292737315014604_1650569806879197830_n.jpg " alt="logo" height="60" width="60"
          class="sm-3 me-3">
        <b>
          <span class="d-none d-sm-flex justify-content-sm-center fw-400"> CHUYÊN NGÀNH ĐIỆN TỬ VIỄN THÔNG </span>
          
        </b>
      </div>

      <div class="col-1 d-flex d-sm-none align-items-center justify-content-center">
        <span @click="showDrawerUser()"><font-awesome-icon icon="user" /></span>
      </div>
    </div>
  </div>

 
  <a-drawer v-model:visible="visible" title="DANH MUC" placement="left">
    <TheMenu />

  </a-drawer>
  <a-drawer v-model:visible="visible_user" title="Admin" placement="right">
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </a-drawer>
</template>
<script>
import TheMenu from '../components/TheMenu.vue';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  components: {
    TheMenu,
  },
  setup() {
    const visible = ref(false);
    const visible_user = ref(false);

    const showDrawer = () => {
      visible.value = true;
    };
    const showDrawerUser = () => {
      visible_user.value = true;
    };
    return {
      visible,
      visible_user,
      showDrawerUser,
      showDrawer,
    };
  },
});
</script>