import index from "@/pages/index/index.vue"
import about from "@/pages/about/about.vue"
import { createRouter, createWebHistory,createWebHashHistory } from "vue-router";

const routes = [
    {
        path:"/",
        name:"index",
        component: index,
    },
    {
        path:"/about",
        name:"about",
        component: about
    }
]


// const routerHistorys = createWebHashHistory();

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router ;
