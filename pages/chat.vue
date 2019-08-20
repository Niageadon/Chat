<template>
    <div  class="Chat__container">
            <!--<v-flex xs10><v-textarea
            name="input-7-1"
            filled
            label="Label"
            auto-grow
            v-model="userText"
            style="min-height: 100px"
        ></v-textarea></v-flex>
        <v-btn @click="send">send</v-btn>-->
        <!--chat window-->
        <ul class="Chat__messages">
            <li class="Chat__message" v-for="(message,id) in messages" :key="id">{{message.text}}</li>
        </ul>
        <div class="Chat_form">dd</div>
    </div>
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

<style scoped>
    .Chat__container{
        height: 100%;
        background-color: #7F828B;
        position: relative;
    }
    .Chat_form{
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 1rem;
        height: 160px;
        background-color: blue;
    }
    .Chat__messages{
        position: relative;
        left: 0;
        right: 0;
        padding: 1rem;
        height: 60px;
        background-color: orangered;
    }
    .Chat__message{
        position: relative;
        left: 0;
        right: 0;
        padding: 1rem;
        height: 60px;
        background-color: orangered;
    }
</style>
