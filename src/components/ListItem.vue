<template>
    <div id="ListItem">
        <li>
            <input type="checkbox" @change="emitBoxChange" v-model="listItem.completed" class="input2"/>
            <span contenteditable="true" @blur="emitModify" > {{ listItem.content }}</span>
        </li>
    </div>
</template>

<script>

    export default {
        name: "ListItem",
        props:{
          index: Number
        },
        computed:{
          listItem(){
              return this.$store.state.lists[this.index];
          }
        },
        methods:{
            emitBoxChange(){
                this.$store.commit('updateCompleted',{index: this.index, complete: this.listItem.completed})
            },
            emitModify(e){
                this.$store.commit('updateMsg',{index: this.index, updateMsg: e.target.innerText})

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