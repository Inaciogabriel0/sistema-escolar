import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {createPinia} from 'pinia'
import { vuetify } from './plugins/vuetify'
import router from './router/index.ts'

import '@mdi/font/css/materialdesignicons.css'


createApp(App)
.use(createPinia())
.use(vuetify)
.use(router)
.mount('#app')
