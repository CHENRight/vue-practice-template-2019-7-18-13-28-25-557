<template>
    <div id = "to-do-list" class="div1">
       <div class="div2">
           <h1>Jquery to do list</h1>
           <p>simple Todo List with adding and filter by diff status.</p>
           <input class="input1" v-model="newItem"/><button class="add" v-on:submit.prevent = "addNewItem">Add</button>
            <br />
           <span>{{newItem}}</span>
           <div v-for="(index,name,value) in todos" v-bind:key="index" class="div3" @change="addNewItem">
               {{index}}. {{name}}: <input type="checkbox" class="checkboxs">{{value}}
           </div>
       </div>
    </div>
</template>

<script>
    export default {
        name : "to-do-list",
        data() {
            return{
                newItem: '',
                // eslint-disable-next-line no-sparse-arrays
                todos:  [
                    'Do the dishes','Take out the trash' , 'Mow the lawn'
                ],
            }
        },
        methods:{
            addNewItem: function () {
                this.todos.push(this.newItem)
            }
        }

    }
</script>

<style scoped>
    .div1 {
        background-color: lightgrey;
        padding: 20px;
        height: 100%;
        position: relative;
    }
    .div2 {
        background-color: white;
        border-radius: 5px;
        padding: 30px;
        width: 500px;
        height: 500px;
        margin: auto;
    }
    .add{
        color: white;
        background-color: lightcoral;
        border: unset;
        border-radius: 5px;
        margin-left: 10px;
        width: 80px;
        height: 35px;
        font-size: 20px;
        float: left;
    }
    .input1{
        float: left;
        height: 30px;
        width: 350px;
    }
    .div3{
        margin-top: 20px;
        padding: 10px;
    }
    .checkboxs{
        width: 10px;
        height: 10px;
        float: left;
    }
</style>
