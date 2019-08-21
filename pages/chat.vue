<template>
    <div class="Chat__container">
        <div class="Chat__messages">
            <v-card class="Chat__message message_my"
                    v-for="(message,id) in messages" :key="id"
                    v-bind:class="{message_owner: message.author === user.name}">
                <v-card-title class="py-1 pl-3">
                    <span class="caption" >{{message.author}}</span>
                </v-card-title>
                <v-card-text class="subheading font-weight-bold py-1">
                    {{message.text}}
                </v-card-text>
            </v-card>
        </div>
        <v-textarea
            label="Message"
            solo no-resize
            v-on:keyup.enter="send"
            v-model="userText"
            class="Chat_form"
        ></v-textarea>
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
                    message.author = this.user.name;
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

<style scoped lang="scss">
    $chat-form__height: 7rem;
    $chat-form__mb: 0rem;
    $chat-form__mx: 0rem;


    $message-max-width: 60%;
    $message-max-width: 60%;
    $message-margin-owner: 100% - $message-max-width - 2%;
    $message-margin-owner: 100% - $message-max-width - 2%;
    $message-mb: $chat-form__height + $chat-form__mb;




    .Chat__container{
        /*Страница чата*/
        height: 100%;
        background-color: #7F828B;
        position: relative;
        overflow: hidden;
    }
    .Chat__messages{
        /*Контейнер для сообщений*/
        padding-top: .5rem;
        padding-bottom: .5rem;
        position: relative;
        left: 0;
        right: 0;
        margin-bottom: $message-mb;
        background-color: #ffa2b0;
        .Chat__message{
            /*сообщение*/
            width: $message-max-width;
            position: relative;
            margin: 10px;
            min-height: 3rem;
            background-color: orangered;
        }
        .message_owner{
            left: $message-margin-owner;
        }
    }
    .Chat_form{
        /*Поле для ввода сообщений*/
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        height: $chat-form__height;
        background-color: blue;
        margin-bottom: $chat-form__mb;
        margin-left: $chat-form__mx;
        margin-right: $chat-form__mx;
    }


</style>
