<template>
	<div class="todo-header">
		<input  @keyup.enter="handlerAddTodo" type="text" placeholder="请输入你的任务名称，按回车键确认" />
	</div>
</template>

<script>
//引入nanoid，用于生成唯一标识
import  {nanoid}  from 'nanoid';
export default {
		name:'MyHeader',
		props:[],
		methods: {
			handlerAddTodo(event){
                  let {value} = event.target 
				 //校验数据合法性
				 if(!value.trim()){
					return alert('输入不能为空！')

				 }
				  let todoObj = {id:nanoid(),title:value,done:false}
                  this.$emit('addTodo',todoObj)
				  event.target.value=""

			}  
		},
		
		
		
	}
</script>

<style scoped>
	/*header*/
	.todo-header input {
		width: 560px;
		height: 28px;
		font-size: 14px;
		border: 1px solid #ccc;
		border-radius: 4px;
		padding: 4px 7px;
	}

	.todo-header input:focus {
		outline: none;
		border-color: rgba(82, 168, 236, 0.8);
		box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
	}
</style>