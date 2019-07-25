import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lists:[{title:'标题','content':'啥'}]
  },
  mutations: {
    addItem(state,value){
      console.log(state,value)
      state.lists.push(value)
    }
  },
  actions: {

  }
})
