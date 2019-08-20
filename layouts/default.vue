<template>
  <v-app app dark>
    <navigation/>
    <v-content>
      <div style="height: 100%">
        <nuxt/>
      </div>
    </v-content>
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
