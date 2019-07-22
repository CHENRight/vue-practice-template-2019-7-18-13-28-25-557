//入口文件，引进了整个vue,App都是有我们书写，写完App放在index.hrml中，#app是根源树
import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    lists:[],
    status: 0
  },
  mutations: {
    addItem(state,payload){
      state.lists.push(payload)
    },
    updateCompleted(state,payload){
      state.lists[payload.index].completed = payload.complete
    },
    updateMsg(state,payload){
      state.lists[payload.index].content = payload.updateMsg
    },
    updateStatus(state,payload){
      state.status = payload
    }
  },
  getters:{
    getShowList: (state) => (status) => {
      if (status === 0) {
        return state.lists;
      } else if (status === 1) {
        return state.lists.filter((a) => !a.completed)
      }else{
        console.log(state.lists.filter((a) => a.completed))
        return state.lists.filter((a) => a.completed)
      }
    }
  }
});

new Vue({store,
  render: h => h(App),
}).$mount('#app')
