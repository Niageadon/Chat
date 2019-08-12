<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-btn @click="sendToServer">ff</v-btn>
  </v-layout>
</template>

<script>

export default {
  components: {
  },
  sockets: {
    connect(){
      console.log('hye3')
    },
    customEmit(data) {
      console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
    }
  },
  methods:{
    sendToServer(){
      this.$socket.emit('methodd', 'boba')

    }
  }
}
</script>
