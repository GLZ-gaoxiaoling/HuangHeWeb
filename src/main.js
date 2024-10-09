
import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css'; // 引入 Ant Design 样式

createApp(App).mount('#app')


const app = createApp(App);
app.use(Antd);
app.mount('#app');
