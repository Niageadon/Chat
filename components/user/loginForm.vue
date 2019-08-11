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
            <v-select
                    v-model="room"
                    :items="rooms"
                    :rules="[v => !!v || 'Item is required']"
                    label="Item"
                    required
            ></v-select>
            <v-btn
                    :disabled="!valid"
                    @click="register"
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
        name: "loginForm",
        data(){
            return{
                valid: true,
                name: '',
                rooms: ['mt', 'bobaRoom'],
                room: '',
                nameRules: [
                    v => !!v || 'Name is required',
                    v => (v && v.length <= 10) || 'Name must be less than 10 characters'
                ],
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
                ],
                password: '',
                passwordRules: [
                    v => !!v || 'Password is required',
                    v => (v && v.length >= 4) || 'Min 4 characters'
                ]
            }
        },
        methods: {
            ...mapMutations(['setUser']),
            register () {
                if (this.$refs.form.validate()) {
                    // Native form submission is not yet supported

                    this.$router.push('/chat')
                    this.setUser({
                        name: this.name,
                        room: this.room
                    })
                }
            }
        }
    }
</script>

<style scoped>

</style>