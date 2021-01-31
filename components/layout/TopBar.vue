<template lang="html">
  <v-app-bar
  hide-on-scroll
  clipped-left
  dense
  fixed
  app>
    <v-toolbar-title @click="drawer = !drawer" class="cursor-pointer">
      <v-icon :class="{'accent--text' : !drawer}">
        mdi-help
      </v-icon>
      <span class="text-body-1">help center</span>

      <a href="https://fundrzme-beta.herokuapp.com/" target="_blank" class="ml-10">
        <span class="text-body-2">
          <b>FUNDRZ:</b><i class="success--text">me</i>
        </span>
      </a>
    </v-toolbar-title>
  </v-app-bar>
</template>

<script>
export default {
  computed: {
    drawer: {
      get() {
        return this.$store.state.layout.drawer
      },
      set(value) {
        this.$store.commit('layout/drawer', value)
      }
    }
  }
}
</script>

<style lang="css" scoped>
a {
  text-decoration: none;
}
</style>
