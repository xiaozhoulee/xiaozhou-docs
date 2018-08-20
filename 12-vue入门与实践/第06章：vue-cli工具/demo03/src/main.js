import Vue from "vue";
import store from "./store.js";
import app from "./components/app.vue";

new Vue({
	el:"#app",
	store,              
	components:{app} 
})