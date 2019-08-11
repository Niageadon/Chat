<template>
    <v-layout>
        <h1>{{user.name}}</h1>
    </v-layout>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: "chat",
        middleware: ['chat'],
        computed: mapState(['user'])

    }
</script>

<style scoped>

</style>