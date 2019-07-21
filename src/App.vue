<template>
  <div id="app">
    <to-do-list></to-do-list>
  </div>
</template>

<script>

import toDoList from './components/toDoList.vue'

export default {
  name: 'app',
  components: {
    toDoList,
  },
  data() {
    return{

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
  color: #2c3e50;
  margin: 60px;
}
</style>
