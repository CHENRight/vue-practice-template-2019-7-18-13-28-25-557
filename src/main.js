//入口文件，引进了整个vue,App都是有我们书写，写完App放在index.hrml中，#app是根源树
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
