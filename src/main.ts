import { createApp } from 'vue'
import { createPinia } from 'pinia'

import '@/assets/root'

import App from './App'
import router from './router'

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

const app = createApp(App)

app.use(Antd)

app.use(createPinia())
app.use(router)

app.mount('#app')
