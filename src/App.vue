<template>
  <div id="app">
<!--    <input placeholder="please input the counter number. " v-model = "counterNum"/>-->
<!--    <CounterGroup></CounterGroup>-->
<!--    <CountSum></CountSum>-->
    <toDoList/>
  </div>
</template>

<script>
// import counterGroup from './components/counterGroup.vue'
// import countSum from './components/counterSum'
import toDoList from './components/toDoList.vue'

export default {
  name: 'app',
  components: {
    // HelloWorld,

    // counterGroup,
    // countSum
    toDoList
  },
  data() {
    return{
      counterNum : this.counterNum
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
