<template>
	<div>
		<button v-on:click="sub">-</button>
		<button v-on:click="add">+</button>
	</div>
</template>

<script>
	export default {
		methods:{
			add(){
				this.$store.commit("add");     //提交mutation来操作state
			},
			sub(){
				this.$store.commit("sub");     //提交mutation来操作state
			}
		}
	}
</script>