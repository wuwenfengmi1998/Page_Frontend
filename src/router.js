import { createRouter,createWebHashHistory } from "vue-router";
import home from './home.vue'
import blog from './blog.vue'
import works from './works.vue'
import about from './about.vue'
import todolist from './todolist.vue'

const router = createRouter({

    history: createWebHashHistory(),

    routes:[
        {path: '/',redirect:'/home'},
        {path: '/home',component:home},
        {path: '/blog',component:blog},
        {path: '/works',component:works},
        {path: '/about',component:about},
        {path: '/todolist',component:todolist},
    ]

})

export default router