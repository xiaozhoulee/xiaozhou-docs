<template>
	<h1>{{number}}</h1>
</template>

<script>
	export default {
		computed:{               //在组件中，使用computed属性获取共享的状态。
			number(){
				return this.$store.state.number
			}
		}
	}
</script>