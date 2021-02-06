<template lang="html">
  <v-container>
    <v-row>
      <v-col cols="auto">
        <a :href="browser.href.android">
          <img
          class="download-button"
          src="/getting_started/mobile/google_play.png">
        </a>
      </v-col>
      <v-col cols="auto">
        <a :href="browser.href.ios">
          <img
          class="download-button"
          src="/getting_started/mobile/app_store.svg">
        </a>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="css" scoped>
.download-button {
  height: 50px;
}
</style>

<script>
export default {
  props: {
    browser: Object
  }
}
</script>
