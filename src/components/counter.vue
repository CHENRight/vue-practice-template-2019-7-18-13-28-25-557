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
                count: 0,
            }
        },
        methods: {
            decrease(){
              this.count --;
            },
            increase(){
                this.count++;
            }
        }
    }
</script>

<style scoped>
    button{
        margin: 20px;
    }
</style>