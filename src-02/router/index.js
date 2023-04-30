// 1.该文件用于创建整个应用的路由器，且整个应用只有一个路由器。
// 2.该文件中，会定义一条一条的路由规则，当然这些规则最后都要交给路由器去管理
// 3.我们所安装的vue-router是Vue里的一个插件库


import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入一个一个的组件，供路由规则去使用
import Home from '../components/Home'
import About from '../components/About'


Vue.use(VueRouter)

// 创建一个路由器
let router = new VueRouter({
    routes:[
        {path:'/about',component:About},
        {path:'/home',component:Home}
        
]
})

// 暴露一个路由器
export default router