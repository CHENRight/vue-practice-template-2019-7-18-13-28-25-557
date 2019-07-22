<template>
    <div id="ShowList" class="div3">
        <ol v-for="(item,index) in lists" :index="index">
            <ListItem :index="index"/>
        </ol>
    </div>
</template>

<script>
    import ListItem from "./ListItem.vue"
    export default {
        name: "ShowList",
        components:{
          ListItem
        },
        computed:{
            status(){
                return this.$store.state.status
            },
            lists:{
                get(){
                    if (this.status === 0) {
                        return this.$store.state.lists;
                    } else if (this.status === 1) {
                        return this.$store.state.lists.filter((a) => a.completed)
                    }else{
                        return this.$store.state.lists.filter((a) => !a.completed)
                    }
                }
            }
        }
    }
</script>

<style scoped>
    .div3 {
        margin-top: 20px;
        padding: 10px;
        border-radius: 5px;
        font-size: 20px;
    }

    .div3:nth-child(odd) {
        background-color: lightcoral;
    }
</style>