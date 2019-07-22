<template>
    <div id="Footer">
        <div class="selectButton">
            <a href="#" v-on:click="emitChange('ALL')">ALL</a>
            <a href="#" v-on:click="emitChange('ACTIVE')">ACTIVE</a>
            <a href="#" @click="emitChange('COMPLETED')">COMPLETE</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Footer",
        data(){
            return{
                filterCondition:"ALL"
            }
        },
        methods: {

            emitChange(filterCondition){
                this.$emit("change",filterCondition)
            }
        },

    }
</script>

<style scoped>
    .selectButton {
        margin-bottom: 10px;
        padding-top: 20px;
    }

    .selectButton a {
        outline: none;
        color: darksalmon;
        margin: 15px;
    }
</style>