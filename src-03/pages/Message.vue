<template>
	<div>
		<ul>
			<li v-for="msg in msgList" :key="msg.id">
				<router-link active-class="active" 
				
			:to="{
				name:'xiangqing',
				query:{
					id:msg.id,
					title:msg.title
				} 
			
			
			
			}"
			>
			{{ msg.title }}
			 
		    </router-link>
				<button @click="goToPush(msg)">push到详情</button>
			</li>
			
		</ul>
		
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name:'Message',
		data(){
         return{
			msgList:[
			{id:'qwe01',title:'消息01'},
			{id:'qwe02',title:'消息02'},
			{id:'qwe03',title:'消息03'},
			{id:'qwe04',title:'消息04'},

		]
		}
	  },
	  methods:{
		goToPush(msg){
			this.$router.push({
				name:'xiangqing',
				query:{
					id:msg.id,
					title:msg.title
				},
			},()=>{},()=>{})
		},
	  }
		
	}
</script>