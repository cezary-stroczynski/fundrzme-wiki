<template lang="html">
  <div class="">
    <v-breadcrumbs :items="location"></v-breadcrumbs>
  </div>
</template>

<script>
export default {
  data: () => ({
    location: [
      {
        text: 'one',
        href: '/eloszka',
        disabled: false,
      },
      {
        text: 'one2',
        href: '/eloszka2',
        disabled: false,
      },
      {
        text: 'one3',
        href: '/eloszka3',
        disabled: true,
      },

    ]
  }),
}
</script>

<style lang="css" scoped>
</style>
