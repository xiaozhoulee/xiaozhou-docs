import Vue from "vue";
import VueRouter from "vue-router";
import home from "./components/home.vue";
import movies from "./components/movies.vue";
import images from "./components/images.vue";

Vue.use(VueRouter);

export default new VueRouter({
	routes:[                                 //设置url与组件的对应关系
		{path:"/",component:home},        
		{path:"/movies",component:movies},
		{path:"/images",component:images},
	]
})