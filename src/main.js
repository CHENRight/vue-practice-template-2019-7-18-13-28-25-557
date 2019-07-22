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
    //变更状态
    // increment (state, n) {     n是参数,多数情况下参数都是   对象（payload）
    //   state.count += n
    // }
    increase (state) {
       state.sum++
    },
    decrease(state){
       state.sum--
    },
    resetSum(state,payload){
      state.sum = state.sum - payload.countNum
    }
  },
  getters: {
    paySum: state => state.sum
  }
})

new Vue({store,
  render: h => h(App),
}).$mount('#app')
