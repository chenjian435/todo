// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail.vue'

// Vue.use(VueRouter)
//第一步：缓存原始的push和replace
const originalPush = VueRouter.prototype.push
const originalReplace = VueRouter.prototype.replace
//第二步:增强push
VueRouter.prototype.push = function(location,okCallback,errCallback){
	//若程序员使用push的时候，没有传递成功、失败的回调，那就靠catch
	if(okCallback === undefined && errCallback === undefined){
		return originalPush.call(this,location).catch(()=>{})
	}else{
		return originalPush.call(this,location,okCallback,errCallback)
	}
	}
//第三步:增强replace
VueRouter.prototype.replace=function(location,okCallback,errCallback){
	if(okCallback === undefined && errCallback === undefined){
	return originalReplace.call(this,location).catch(()=>{})
}else{
	return originalReplace.call(this,location,okCallback,errCallback)
}
}


//创建并暴露一个路由器
export default new VueRouter({
	routes:[
		{
			path:'/about',
			component:About
		},
		{
			path:'/home',
			component:Home,
			children:[
				{
					path:'news',
					component:News,
					children:[{
						// name:'xiangqing',
                        path:'detail',
						component:Detail,

					}]
				},
				{
					path:'message',
					component:Message,
					children:[{
						name:'xiangqing',
                        path:'detail',
						component:Detail,
						props(r){
							return {...r.query}
						}
				    }]
					

					}

				
			]
		},
		{
			path:'/',
			redirect:'/about'

		}
	]
})
