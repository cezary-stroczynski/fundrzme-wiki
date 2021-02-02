<template lang="html">
  <div class="">
    <div>
      normal text
    </div>
    <div class="text-caption">
      caption
    </div>
    <v-breadcrumbs :items="location" class="text-uppercase"></v-breadcrumbs>
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
