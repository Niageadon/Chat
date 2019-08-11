<template>
  <v-app dark>
    <navigation/>
    <re/>
    <nuxt/>
  </v-app>
</template>

<script>
  import navigation from "../components/system/navigation"
  import re from "../components/user/loginForm"
export default {
  components:{
    navigation,
    re
  },
  data() {
    return {
    }
  },
}
</script>
