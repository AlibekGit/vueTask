import Vue from 'vue'
import Router from 'vue-router'




Vue.use(Router)

let router = new Router({
    mode:'history',
    routes:[
        {
            path:'/',
            name: 'create',
            component: () => import('../components/Create')
        },
        {
            path:'/list',
            name: 'list',
            component: () => import('../components/List')
        },
        {
            path:'/task/:id',
            name: 'task',
            component: () => import('../components/Tasks')
        }
    ]
})




export default router;