<template>
    <v-container fluid>
        <v-layout row collumn wrap xs10 justify-center>
            <v-flex xs10 class="mb-5"><v-btn @click="leftRoom" color="red" class="mx-0">Left room</v-btn></v-flex>
            <v-flex xs10 mb-4>Chat page</v-flex>
            <v-flex xs10><v-textarea
                name="input-7-1"
                filled
                label="Label"
                auto-grow
                v-model="userText"
                style="min-height: 100px"
            ></v-textarea></v-flex>
            <v-btn @click="send">send</v-btn>
            <!--chat window-->
            <v-flex xs6><ul>
                <li v-for="(message,id) in messages" :key="id">{{message.text}}</li>
            </ul></v-flex>

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
            ...mapMutations(["sendMessage", "clearData"]),
            send(){
                if(this.userText){
                    //console.log(this.userText);
                    let message = {};
                    message.autor = this.user;
                    message.text = this.userText;
                    this.sendMessage(message);
                    this.userText = '';
                }
            },
            leftRoom(){
                this.$router.push('/?message=leftRoom');
                this.clearData();
            }
        }
    };
</script>

