<template>
  <v-app>
    <NavigationDrawer />
    <TopBar />
    <v-main class="white">
      <div class="mx-auto max-width_body secondary">
        <nuxt />
      </div>
    </v-main>
    <MainFooter />
  </v-app>
</template>

<script>
import NavigationDrawer from '~/components/layout/NavigationDrawer.vue'
import TopBar from '~/components/layout/TopBar.vue'
import MainFooter from '~/components/layout/MainFooter.vue'
export default {
  components: {
    NavigationDrawer,
    TopBar,
    MainFooter,
  },
}
</script>
