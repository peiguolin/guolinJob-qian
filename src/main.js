import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import { router } from "./router/index";
// import axios from "axios";


window._AMapSecurityConfig = {
    securityJsCode: '？？？' //*  安全密钥
}

createApp(App)
    // .provide('$axios',axios)
    .use(router)
    .mount('#app')

// new Vue({
//     router,
//     render: h => h(App)
// }).$mount('#app')
