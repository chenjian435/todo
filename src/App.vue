<template>
	<div id="root">
		<div class="todo-container">
			<div class="todo-wrap">
				<MyHeader @addTodo="addTodo"/>
				<MyList :todos="todos"  />
				<MyFooter :todos="todos" @checkAllTodo="checkAllTodo"  @clearAllDone="clearAllDone"/>
			</div>
		</div>
	</div>
</template>

<script>
	import MyHeader from './components/MyHeader'
	import MyList from './components/MyList'
	import MyFooter from './components/MyFooter.vue'

	export default {
		name:'App',
		components:{MyHeader,MyList,MyFooter},
		data() {
		return {
			todos:[
				{id:'1234',title:'抽烟',done:true},
				{id:'1235',title:'喝酒',done:true},
				{id:'1236',title:'烫头',done:true},
				{id:'1237',title:'学习',done:true},
				{id:'1238',title:'看书',done:true}
			]
		}
	
		},
		methods: {
			addTodo(value){
				this.todos.unshift(value)
			},
			
			checkTodo(id){
                 this.todos.forEach(todo=>{
					if(todo.id === id) todo.done = !todo.done
				 })
			},
			deleteTodo(id){
				this.todos=this.todos.filter((todo)=>{
                         return todo.id !== id
				})
			},
			checkAllTodo(value){
                 this.todos.forEach(todo=>todo.done=value)
			},
			clearAllDone(){
				this.todos=this.todos.filter(todo=>!todo.done)
			},
			updateTodo(id,title){
				this.todos.forEach(todo=>{
					if(todo.id === id) todo.title = title
				 })

			}

		},
		mounted(){
			//全局事件总线
			this.$bus.$on('deleteTodo',this.deleteTodo )
			this.$bus.$on('checkTodo',this.checkTodo)
			this.$bus.$on('updateTodo',this.updateTodo)
		},
		beforeDestroy(){
			this.$bus.$off('deleteTodo')
			this.$bus.$off('checkTodo')
		}
		
	}
</script>

<style>
	/*base*/
	body {
		background: #fff;
	}
	.btn {
		display: inline-block;
		padding: 4px 12px;
		margin-bottom: 0;
		font-size: 14px;
		line-height: 20px;
		text-align: center;
		vertical-align: middle;
		cursor: pointer;
		box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
		border-radius: 4px;
	}
	.btn-danger {
		color: #fff;
		background-color: #da4f49;
		border: 1px solid #bd362f;
	}
	.btn-danger:hover{
		color: #fff;
		background-color: #bd362f;
	}
	.btn-edit{
		color: #fff;
		background-color: #0444f3;
		border: 1px solid #4b0df7;
		margin-right: 5px;
	}
	.btn-edit:hover{
		color: #fff;
		background-color:#3e579e;
	}
	.btn:focus {
		outline: none;
	}
	.todo-container {
		width: 600px;
		margin: 0 auto;
	}
	.todo-container .todo-wrap {
		padding: 10px;
		border: 1px solid #ddd;
		border-radius: 5px;
	}
</style>
