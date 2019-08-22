<template>
  <v-layout row justify-center class="mt-5 ml-5">
    <v-flex xs8>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
            v-model="name"
            :rules="nameRules"
            :counter="10"
            label="Name"
            required
        ></v-text-field>
        <v-text-field
            v-model="room"
            :rules="roomRules"
            label="Room"
            required
            v-on:keyup.enter="submit"
        ></v-text-field>
        <v-btn
            :disabled="!valid"
            @click="submit"
        >
          Enter
        </v-btn>
      </v-form>
    </v-flex>
  </v-layout>
</template>

<script>
  import {mapMutations} from 'vuex'
  export default {
    name: "login",
    data(){
      return{
        valid: true,
        name: '',
        room: '',
        nameRules: [
          v => !!v || 'Name is required',
          v => (v && v.length <= 10) || 'Name must be less than 10 characters',
          v => (v !== 'system') || 'You cant use "system" name'
        ],
        roomRules: [
          v => !!v || 'room code is required',
        ],
        password: '',
        passwordRules: [
          v => !!v || 'Password is required',
          v => (v && v.length >= 4) || 'Min 4 characters'
        ]
      }
    },
    methods: {
      ...mapMutations(["setUser"]),
      submit() {
        if (this.$refs.form.validate()) {
          const user = {
            name: this.name,
            room: this.room
          };

          this.$socket.emit('userJoined', user, cbData => {
            if (typeof cbData === 'string'){
              console.error('hey1', cbData)
            }
            else {
              console.log(cbData);
              user.id = cbData.userID;
              this.setUser(user);
              this.$router.push("/chat");
            }
          });

        }
      }
    }
  }
</script>

<style scoped>

</style>
