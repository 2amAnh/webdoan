import { createApp } from 'vue'
import router from './router/index.js'
import { createPinia } from 'pinia'
import axios from 'axios'
window.axios =axios;

import { 
    Carousel,
    Checkbox,
    DatePicker,
    Select,
    Form,
    Input,
    Avatar,
    Table,
    Card,
    Menu,
    List,
    Button,
    Drawer, 
    message } from 'ant-design-vue';
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
library.add(fas , fab,far);
import 'ant-design-vue/dist/antd.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import 'bootstrap/dist/css/bootstrap-utilities.min.css'

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(createPinia());
app.use(router);
app.use(DatePicker);
app.use(Checkbox);
app.use(Input);
app.use(Button);
app.use(Avatar);
app.use(Table);
app.use(Form);
app.use(Select);
app.use(List);
app.use(Card);
app.use(Menu);
app.use(Drawer);
app.use(Carousel);
app.mount('#app');
app.config.globalProperties.$message = message