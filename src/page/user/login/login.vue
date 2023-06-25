<template>
  <div>
      <form @submit.prevent="login">
          <input  v-model="username" placeholder="username">
          <input type="password" v-model="password" placeholder="Password">
          <button type="submit">Login</button>
      </form>

      <!-- <form @submit.prevent="register">
          <input type="text" v-model="username" placeholder="UserName">
          <input type="email" v-model="email" placeholder="Email">
          <input type="password" v-model="password" placeholder="Password">
          <button type="submit">Register</button>
      </form> -->
  </div>
</template>

<script>
  import axios from 'axios';
  import { message } from 'ant-design-vue';
  import { defineComponent, ref, reactive, toRefs } from 'vue';
  import { useRouter } from "vue-router";
  export default defineComponent ({
    
   
      data() {
        const router = useRouter()
          return {
              email: '',
              password: '',
              username: ''
          }
      },
      methods: {
          login() {
              axios.post('http://127.0.0.1:8000/api/login', {
                  username: this.username,
                  password: this.password
              })
              .then(response => {
                  console.log(response.data.token);
                  if (response.status == 200) {
                        message.success('dang nhap thành công');
                        roter.push({ name: "user-index" });

                    }
              })
              .catch(error => {
                  console.log(error);
              });
          },
          register() {
              axios.post('http://127.0.0.1:8000/api/register', {
                  username: this.username,
                  email: this.email,
                  password: this.password
              })
              .then(response => {
                  console.log(response.data.token);
              })
              .catch(error => {
                  console.log(error);
              });
          }
      }
  });
</script>