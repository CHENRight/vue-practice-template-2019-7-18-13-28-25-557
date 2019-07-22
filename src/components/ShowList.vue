<template>
    <div id="ShowList" class="div3">
        <ol>
            <ListItem v-for="item of items" :item="item" v-bind:key="item.listIndex" @change="emitChange" @modified="(val) => emitModify(item.id, val)"/>
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
        props: {
            items: {
                default: []
            }
        },
        methods: {
            emitChange() {
                this.$emit("change");
            },
            emitModify(id, val) {
                this.$emit("modified", id, val);
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