import './assets/style.css'
//import './assets/magnific-popup.css'
//import './assets/fonts.googleapis.css'
import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import axios from 'axios'

const app=createApp(App)
app.use(router)
app.config.globalProperties.$http=axios
app.mount('#app')
