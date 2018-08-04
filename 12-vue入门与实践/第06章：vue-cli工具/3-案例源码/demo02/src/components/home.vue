<template>
	<div>
		<h1>主页</h1>
		<button><router-link to="/movies">routerLink跳转到电影页</router-link></button>
		<button v-on:click="toMovies">编程式导航跳转到电影页</button>
	</div>
</template>

<script>
	export default {
		methods:{
			toMovies(){
				this.$router.push("/movies");  //使用编程的方式实现页面跳转
			}
		}
	}
</script>