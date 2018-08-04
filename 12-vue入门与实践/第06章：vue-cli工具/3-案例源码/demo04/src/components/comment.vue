<template>
	<div>
		<button><router-link to="/">返回</router-link></button>
		<form v-on:submit.prevent="release">
			<input type="text" v-model="content">
			<input type="submit">
		</form>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				content:""
			}
		},
		methods:{
			release(){
				this.$store.commit("release",this.content);
				this.$router.push("/");
			}
		}
	}
</script>