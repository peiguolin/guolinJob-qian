import { createApp } from 'vue'
import App from './App.vue'
import { router } from "./router/index";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// 全局引入 ElMessage 和 ElMessageBox
import { ElMessage, ElMessageBox } from 'element-plus';

const app = createApp(App);

app.use(ElementPlus);
// 将 ElMessage 和 ElMessageBox 添加到全局属性中
app.config.globalProperties.$message = ElMessage;
app.config.globalProperties.$confirm = ElMessageBox.confirm;
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.mount('#app');

window._AMapSecurityConfig = {
    securityJsCode: '2667ab833f558e9de66a6bd1a4ffd75b' //*  安全密钥
}

createApp(App)
    .use(router)
    .mount('#app')

