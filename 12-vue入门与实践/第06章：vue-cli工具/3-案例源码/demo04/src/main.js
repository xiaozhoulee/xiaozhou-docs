import Vue from "vue";
import router from "./router.js";
import store from "./store.js";
import app from "./components/app.vue";


new Vue({
	el:"#app",
	router,             
	store,
	components:{app} 
})