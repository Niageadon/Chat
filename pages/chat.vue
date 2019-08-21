<template>
    <div class="Chat__container">
        <div class="Chat__messages">
            <v-card class="Chat__message message_my" v-for="(message,id) in messages" :key="id">{{message.text}}</v-card>
        </div>
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
        /*Страница чата*/
        height: 100%;
        background-color: #7F828B;
        position: relative;
        overflow: hidden;
    }
    .Chat_form{
        /*Поле для ввода сообщений*/
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 1rem;
        height: 7rem;
        background-color: blue;
    }
    .Chat__messages{
        /*Контейнер для сообщений*/
        padding-top: .5rem;
        padding-bottom: .5rem;
        position: relative;
        left: 0;
        right: 0;
        margin-bottom: 7rem;
        background-color: #ffa2b0;
    }
    .Chat__message{
        /*сообщение*/
        width: 60%;
        position: relative;
        margin: 10px;
        min-height: 3rem;
        background-color: orangered;
    }
    .message_my{
        left:28%
    }
</style>
