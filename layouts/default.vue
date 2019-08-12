<template>
  <v-app dark>
    <navigation/>
    <nuxt/>
  </v-app>
</template>

<script>
  import navigation from "../components/system/navigation"
export default {
  components:{
    navigation,
  },
  data() {
    return {
    }
  },
}
</script>
