import Vue from "vue";
import VueRouter from "vue-router";
import home from "./components/home.vue";
import movies from "./components/movies.vue";

Vue.use(VueRouter);

export default new VueRouter({
	routes:[                                
		{path:"/",component:home},        
		{path:"/movies",component:movies}
	]
})