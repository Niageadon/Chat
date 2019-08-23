<template>
    <div class="Chat__container">
        <!--Поле сообщений-->
        <div class="Chat__messages">
            <v-card class="Chat__message message_my"
                    v-for="(message,id) in messages" :key="id"
                    v-bind:class="{message_owner: message.name === user.name}">
                <v-card-title class="py-1 pl-3">
                    <span class="caption" >{{message.name}}</span>
                </v-card-title>
                <v-card-text class="font-weight-bold py-1">
                    {{message.text}}
                </v-card-text>
            </v-card>
        </div>
        <!--Поле ввода сообщения-->
        <v-textarea
            label="Message"
            solo no-resize
            v-on:keydown.shift="shift = true"
            v-on:keyup.shift="shift = false"
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
                shift: false, // user use key
                userText: '',
                test: false,
            }
        },
        methods:{
            ...mapMutations(["sendMessage", "clearData"]),
            send(){
                if(this.shift) return; // TODO: реализовать нормально обработку нажатия шифта
                if(this.userText){
                    //console.log(this.userText);
                    let message = {};
                    message.name = this.user.name;
                    message.text = this.userText;
                    //this.sendMessage(message);
                    this.$socket.emit("createMessage",
                        {
                            text: this.userText,
                            id: this.$store.state.user.id
                        },
                        data => {
                            if (typeof data === "string") {
                                console.error('createMessage', data);
                            } else {
                                this.text = "";
                            }
                         });
                    this.userText = '';
                }
            },
            leftRoom(){
                this.$socket.emit('userLest', this.user.id, () => {
                    this.$router.push('/?message=leftRoom');
                    this.clearData();
                })
                
            }
        }
    };
</script>

<style scoped lang="scss">
    $container-bc: #313131;

    $chat-form-height: 7rem;
    $chat-form-mb: 0rem;
    $chat-form-mx: 0rem;
    $chat-form-bc: #010101;

    $message-min-width: 24%;
    $message-max-width: 75%;
    $message-margin-owner: 100% - $message-max-width - 2%;
    $message-bc-owner: #EEFF70;
    $message-mb: $chat-form-height + $chat-form-mb;
    $message-bc: #e444ff;
    $message-pt: .5rem;

    .Chat__container{
        /*Страница чата*/
        height: 100%;
        background-color: $container-bc;
        position: relative;
        overflow: hidden;
    }
    .Chat__messages{
        /*Контейнер для сообщений*/
        top: 0;
        padding-top: $message-pt;
        position: relative;
        display: flex;
        flex-direction: column;
        padding-bottom: 7rem;
        .Chat__message{
            /*сообщение*/
            position: relative;
            align-self: flex-start;
            display: inline-block;
/*            float: left;    clear:both;*/
            word-wrap: break-word; /*перенос на новую строку*/
            min-width: $message-min-width;
            max-width: $message-max-width;
            margin: 10px;
            min-height: 3rem;
            background-color: $message-bc;
        }
        .message_owner{
            background-color: $message-bc-owner;
            color: black;
            align-self: flex-end;
/*            float: right;*/
        }
    }
    .Chat_form{
        /*Поле для ввода сообщений*/
        position: fixed;
        bottom: 0;
        width: 100%;
        margin-right: 100px;
        height: $chat-form-height;
        margin-bottom: $chat-form-mb;
        margin-left: $chat-form-mx;
        margin-right: $chat-form-mx;
    }
    .Chat_form textarea{
        padding-right: 40px // TODO: почему не работает?
    }

</style>
