<template>
    <div id="counter-group">
        <div  v-for="count in counterNum" v-bind:key="count">
            <counter @change="countTotal($event)"></counter>
        </div>
        <div>
            <p>All counter's total value is：  {{total}}</p>

        </div>
    </div>
</template>

<script>
    import Counter from "./counter"

    export default {
        name: "counter-group",
        components: {Counter},
        data() {
            return{
                count:0,
                total:0,
            }
        },
        props: {
            counterNum : Number
        },
        methods:{
            countTotal(val){
                this.total = this.total + val;
            }
        }
    }
</script>

<style scoped>

</style>