<template>
	<div>
		<h2>水果列表</h2>
		<ul>
			<li v-for="fruit in fruits">{{fruit}}</li>
		</ul>
	</div>
</template>

<script>
	import axios from "axios";
	export default {
		data(){
			return {
				fruits:null
			}
		},
		mounted(){
			var self = this;
			axios.get("data/fruits.json")
			.then(function(res){
				self.fruits = res.data;
			})
		}
	}
</script>
