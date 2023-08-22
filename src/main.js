import './assets/style.css'

//import './assets/css/theme.css'
//import './assets/css/demo.css'
//import './assets/js/bootstrap/bootstrap.min.js'
//import './assets/js/theme.js'
//import './assets/magnific-popup.css'
//import './assets/fonts.googleapis.css'
import 'bootstrap/dist/css/bootstrap.css' //引用bootstrap的样式
import 'bootstrap/dist/js/bootstrap.min.js' //引用bootstrap的js

import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import axios from 'axios'

const app=createApp(App)
app.use(router)
app.config.globalProperties.$http=axios
app.mount('#app')
