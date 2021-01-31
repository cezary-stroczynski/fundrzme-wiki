<template lang="html">
  <div class="">
    <v-breadcrumbs :items="location" class="text-h3 text-uppercase"></v-breadcrumbs>
  </div>
</template>

<script>
export default {
  data: () => ({
    location: [
      {
        text: 'getting started',
        disabled: true,
      },
      {
        text: 'initial setup',
        disabled: true,
      },
      {
        text: 'on desktop',
        disabled: true,
      },

    ]
  }),
}
</script>

<style lang="css" scoped>
</style>
