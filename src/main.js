import './assets/style.css'
//import './assets/magnific-popup.css'
//import './assets/fonts.googleapis.css'
import { createApp } from 'vue'
import App from './App.vue'

import router from './router'

const app=createApp(App)
app.use(router)
app.mount('#app')
