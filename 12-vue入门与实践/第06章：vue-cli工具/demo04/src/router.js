import Vue from "vue";
import VueRouter from "vue-router";
import home from "./components/home.vue";
import comment from "./components/comment.vue";

Vue.use(VueRouter);

export default new VueRouter({
	routes:[                            
		{path:"/",component:home},        
		{path:"/comment",component:comment}
	]
})