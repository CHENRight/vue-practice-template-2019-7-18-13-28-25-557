<template>
    <div id="ListItem">
        <li>
            <input type="checkbox" @change="emitBoxChange" v-model="item.completed" class="input2"/>
            <span contenteditable="true" @blur="emitModify" > {{ item.content }}</span>
        </li>
    </div>
</template>

<script>

    export default {
        name: "ListItem",

        props:{
            item:{},
        },
        methods:{
            emitBoxChange(){
                this.$emit("change");
            },
            emitModify(e){
                this.$emit("modify",e.target.innerText)
            }
        }

    }
</script>

<style scoped>
    .input2 {
        width: 20px;
        height: 20px;
    }
</style>