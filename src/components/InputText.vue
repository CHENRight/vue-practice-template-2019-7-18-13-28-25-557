<template>
    <div id="InputText">
        <input class="input1" type="text" v-model="newItem"
               placeholder="enter your new item"
        />
        <button class="add" @click="emitChange" >Add</button>
    </div>
</template>

<script>
    export default {
        name: "InputText",
        data() {
            return{
                newItem:''
            }
        },
        methods:{
            emitChange() {
                this.$store.commit('addItem',{ id: this.listIndex, content: this.newItem, completed: false })
            }
        }
    }
</script>

<style scoped>
    .add {
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

    .input1 {
        float: left;
        height: 30px;
        width: 350px;
        font-size: 25px;
    }

</style>