<template>
  <div id="app" class="div1">
    <div class="div2">
      <Header></Header>
      <InputText :newItem="newItem" @change="(val) => addNewItem(val)"></InputText>
      <br/>
      <ShowList :items="returnList()" @modified="(id,val) => modified(id,val)"/>
      <Footer :filterCondition="filterCondition" @change="(val) => this.filterCondition = val"/>

    </div>

  </div>
</template>

<script>

import Header from "./components/Header.vue"
import InputText from  "./components/InputText.vue"
import ShowList from "./components/ShowList.vue"
import Footer from  "./components/Footer.vue"

export default {
  name: 'app',
  components: {
    Header,
    InputText,
    ShowList,
    Footer
  },
  data() {
    return{
      newItem:'',
      listIndex: 1,
      showList:[],
      filterCondition:"ALL"
    }
  },
  props(){

  },
  methods:{
    addNewItem (val) {
      this.showList.push({ id: this.listIndex, content: val, completed: false });
      this.listIndex++
    },
    returnList() {
      if (this.filterCondition === "ACTIVE") {
        return this.showList.filter(item => !item.completed)
      }
      if (this.filterCondition === "COMPLETE") {
        return this.showList.filter(item => item.completed)
      }
      return this.showList;
    },
    modified(id, val) {
      this.showList.find((item) => item.id === id).content = val;
    }
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

.div1 {
  padding: 20px;
  height: 100%;
  position: relative;
}

.div2 {
  background-color: white;
  border-radius: 5px;
  border:outset darkolivegreen 5px;
  padding: 30px;
  width: 450px;
  height: auto;
  margin: auto;
}
</style>
