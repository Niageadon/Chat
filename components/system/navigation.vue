<template>
    <div>
    <v-toolbar>
        <v-toolbar-side-icon app @click="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title>Title</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn flat @click="toLogin">Login</v-btn>
            <v-btn flat @click="toChat">Chat</v-btn>
        </v-toolbar-items>
    </v-toolbar>
    </div>
</template>

<script>
    export default {
        name: "navigation",
        data () {
            return {
                drawer: false,
                users: []
            }
        },
        methods:{
            toChat(){
                this.$router.push('/chat')
            },
            toLogin(){
                this.$router.push('/login')
            }
        }
    }
</script>

<style scoped>

</style>
