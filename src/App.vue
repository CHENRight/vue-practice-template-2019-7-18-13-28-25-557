<template>
  <div id="app" class="div1">
    <div class="div2">
      <Header></Header>
      <InputText></InputText>
      <br/>
      <ShowList/>
      <Footer/>

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
