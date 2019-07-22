
<template>
  <div id="app">
    <input placeholder="please input the counter number. " v-model = "counterNum"/>
    <counter-group :counterNum = parseInt(counterNum)></counter-group>
  </div>
</template>

<script>
  import counterGroup from './components/CounterGroup.vue'
  export default {
    name: 'app',
    components: {
      counterGroup,
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