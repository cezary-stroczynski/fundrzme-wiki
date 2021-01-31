<template>
  <div>
    <div class="primary">
      primary
    </div>
    <div class="secondary">
      secondary
    </div>
    <div class="success">
      success
    </div>
    <div class="accent">
      accent
    </div>
    <div class="info">
      info
    </div>
    <div class="warning">
      warning
    </div>

    <div class="error">
      error
    </div>
    <div class="">
      <a href="/">elo</a>
    </div>

  </div>
</template>


<style lang="css" scoped>
html {
  color: blue !important;
}
</style>


<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  }
}
</script>
