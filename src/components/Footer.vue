<template>
    <div id="Footer">
        <div class="selectButton">
            <a href="#" @click="emitChange(0)">ALL</a>
            <a href="#" @click="emitChange(1)">ACTIVE</a>
            <a href="#" @click="emitChange(2)">COMPLETE</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Footer",
        methods: {

            emitChange(filterCondition){
                this.$store.commit('updateStatus',filterCondition)
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