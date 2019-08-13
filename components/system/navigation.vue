<template>
    <div>
        <v-navigation-drawer  app
                              clipped
        v-model="drawer" class="">
            <v-list>
                <v-subheader>User's in room:</v-subheader>
                <v-list-tile
                        v-for="(user,id) in users"
                        :key="id"
                        @click=""
                >
                    <v-list-tile-content>
                        <v-list-tile-title v-text="user.name"></v-list-tile-title>
                    </v-list-tile-content>
                    <v-list-tile-action>
                        <v-icon color="pink">chat</v-icon>
                    </v-list-tile-action>
                </v-list-tile>

            </v-list>
        </v-navigation-drawer>
        <!---->
        <v-toolbar app fixed
                   clipped-left>
        <v-toolbar-side-icon app @click="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title>Title</v-toolbar-title>
        <v-spacer></v-spacer>
            room: {{user.room}}
        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn flat @click="toLogin">Login</v-btn>
            <v-btn flat @click="toChat">Chat</v-btn>
        </v-toolbar-items>
    </v-toolbar>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: "navigation",
        data () {
            return {
                drawer: false,
                users: [
                    {name: 'boba'}
                    ]
            }
        },
        methods:{
            toChat(){
                this.$router.push('/chat')
            },
            toLogin(){
                this.$router.push('/login')
            }
        },
        computed: mapState(['user'])

    }
</script>

<style scoped>

</style>
