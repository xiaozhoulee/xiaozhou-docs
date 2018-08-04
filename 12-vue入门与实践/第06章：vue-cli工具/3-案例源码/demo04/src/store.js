import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
export default new Vuex.Store({
	state:{ 
		title:"test",                
		comments:[
			"这是一篇好文章",
			"这是一条测试评论"
		]
	},
	mutations:{                
		release(state,data){
			state.comments.push(data);
			console.log(data);
		},

	}
})