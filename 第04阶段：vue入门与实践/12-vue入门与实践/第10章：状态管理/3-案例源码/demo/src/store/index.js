import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        number:0
    },
    mutations:{
        add(state){
             state.number++;
        },
        sub(state){
            state.number--;
        }
    }
})

export default store