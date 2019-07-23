
<template>
    <div>
        <ul id="filters">
            <li>
                <a href="#" @click="updateStatus(0)">ALL</a>
            </li>
            <li>
                <a href="#" @click="updateStatus(1)">Active</a>
            </li>
            <li>
                <a href="#" @click="updateStatus(2)">Complete</a>
            </li>
        </ul>
    </div>
</template>
<script>
    import { mapMutations } from 'vuex'
    export default {
        name: 'Foot',
        methods: {
            ...mapMutations([
                'updateStatus'
            ]),
        }

    }

</script>
<style>

</style>