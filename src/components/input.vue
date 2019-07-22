<template>
    <div id="input">
        <input class="input1" type="text" v-model="newItem"
               placeholder="enter your new item"
        />
        <button class="add" @change="inputTextChange" >Add</button>
    </div>
</template>

<script>
    export default {
        name: "input",
        data(){
            return{
                newItem:''
            }
        },
        methods:{
            inputTextChange() {
                this.emit("change",this.newItem);
                this.newItem = ''
            }
        }
    }
</script>

<style scoped>

</style>