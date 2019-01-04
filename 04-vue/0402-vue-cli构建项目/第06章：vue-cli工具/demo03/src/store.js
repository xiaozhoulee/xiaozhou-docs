import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
export default new Vuex.Store({
	state:{                     //state可以叫做状态，我们将组件间啊共享的数据放在这里
		number:0
	},
	mutations:{                 //组件可以通过提交mutation来实现操作state。
		add(state){
			state.number++;
		},
		sub(state){
			state.number--;
		}
	}
})