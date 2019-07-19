<template>
    <div id="counterGroup">

        <counter v-for = ""


        />
    </div>
</template>

<script>
    import Counter from "./counter"
    export default {
        name: "counterGroup",
        components: {Counter},
        data() {
            return{

            }
        },
        props(){

        }
    }
</script>

<style scoped>

</style>