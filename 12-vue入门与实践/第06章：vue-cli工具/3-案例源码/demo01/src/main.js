import Vue from "vue";
import router from "./router.js";
import app from "./components/app.vue";

new Vue({
	el:"#app",
	router,              
	components:{app} 
})