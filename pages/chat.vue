<template>
    <v-container fluid>
        <v-layout mt-5 row collumn wrap xs10 justify-center>
            <v-flex xs10 mb-4>Chat page</v-flex>
            <v-flex xs10>
            <v-textarea
                name="input-7-1"
                filled
                label="Label"
                auto-grow
                v-model="userText"
                style="min-height: 100px"
            ></v-textarea>
            </v-flex>
            <v-flex xs10>
            <ul>
                <li v-for="m in messages" :key="m.text">{{m.text}}</li>
            </ul>
            </v-flex>
            <v-btn @click="send">send</v-btn>
        </v-layout>
    </v-container>
</template>

<script>
    import { mapState, mapMutations } from "vuex";
    export default {
        middleware: ["chat"],
        head() {
            return {
                title: `Комната ${this.user.room}`
            };
        },
        computed: mapState(["user", "messages"]),
        data(){
            return{
                userText: '',
            }
        },
        methods:{
            ...mapMutations(["sendMessage"]),
            send(){
                if(this.userText){
                    console.log(this.userText);
                    this.sendMessage(this.userText)
                }
            }
        }
    };
</script>

