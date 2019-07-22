<template>
    <div id = "counter">
        <button v-on:click="decrease"> - </button>
        <span> {{ count }} </span>
        <button v-on:click="increase"> + </button>
    </div>
</template>

<script>
    export default {
        name: "counter",
        data() {
            return {
               count:0
            }
        },
        methods: {
            decrease(){
                this.count--;
                this.$store.commit('decrease')
            },
            increase(){
                this.count++;
                this.$store.commit('increase')
            }
        }
    }
</script>

<style scoped>
    button{
        margin: 20px;
    }
</style>