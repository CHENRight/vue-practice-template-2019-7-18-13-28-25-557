<template>
  <div id="app">
    <counter></counter>
  </div>
</template>

<script>
//import counterGroup from './components/counterGroup.vue'
import counter from './components/counter.vue'
export default {
  name: 'app',
  components: {
    //counterGroup,
    counter,
  },
  data() {
    return{
      counterNum : 0
    }
  },
  props(){

  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px;
}
</style>
