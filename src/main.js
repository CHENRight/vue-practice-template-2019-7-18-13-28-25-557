//入口文件，引进了整个vue,App都是有我们书写，写完App放在index.hrml中，#app是根源树
import Vue from 'vue'
import App from './App.vue'
import Vuex from "vuex";
Vue.use(Vuex)

Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    sum:0
  },
  mutations: {
    increase (state) {
      return state.sum++
    },
    decrease(state){
      return state.sum--
    }
  },

})

new Vue({store,
  render: h => h(App),
}).$mount('#app')
