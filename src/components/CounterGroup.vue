<template>
    <div id="counter-group">
        <div  v-for="count in counterNum" v-bind:key="count">
            <counter></counter>
        </div>
        <div>
            <p>All counter's total value is：  {{countSum}}</p>
        </div>
    </div>
</template>

<script>
    import Counter from "./Counter"
    export default {
        name: "counter-group",
        components: {Counter},
        data() {
            return{
                count:0,
            }
        },
        props: {
            counterNum : Number
        },

        computed:{
            countSum(){
                return this.$store.state.sum
            }
        }
    }
</script>

<style scoped>
</style>