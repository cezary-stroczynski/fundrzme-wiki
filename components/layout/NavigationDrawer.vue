<template lang="html">
  <v-navigation-drawer
  v-model="drawer"
  clipped
  fixed
  app
  class="secondary">
  <div class="text-right">
    <v-btn
    class="grey--text text--darken-1"
    icon
    @click="drawer = !drawer">
      <v-icon>mdi-chevron-left</v-icon>
    </v-btn>
  </div>
  <v-treeview
  class="mt-5"
  dense
  transition
  hoverable
  open-on-click
  :items="categories">
    <template slot="label" slot-scope="{ item }">
      <div class="text-uppercase">
        <nuxt-link
        class="text-lowercase"
        v-if="item.destination"
        :to="item.destination">
        {{ item.name }}
      </nuxt-link>
      <span v-if="!item.destination">
        {{ item.name }}
      </span>
      </div>
    </template>
  </v-treeview>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    categories: [
      {
        id: 0,
        name: 'introduction',
        children: [
          {
            id: '0a',
            name: 'about ethereum',
            destination: '/introduction/ethereum',
          },
          {
            id: '0b',
            name: 'fundrz:me',
            destination: '/introduction/fundrzme'
          }
        ]
      },
      {
        id: 1,
        name: 'getting started',
        children: [
          {
            id: '1a',
            name: 'initial setup',
            children: [
              {
                id: '1a1',
                name: 'on desktop',
                destination: '/start/setup/desktop',
              },
              {
                id: '1a2',
                name: 'on mobile',
                destination: '/start/setup/mobile',
              },
            ]
          },
          {
            id: '1b',
            name: 'registration',
            destination: '/start/registration'
          },
          {
            id: '1c',
            name: 'user account',
            destination: '/start/user'
          },
          {
            id: '1d',
            name: 'new project',
            destination: '/start/newproject'
          },
        ]
      },
      {
        id: 2,
        name: 'project account',
        children: [
          {
            id: '2a',
            name: 'project editor',
            destination: '/project/editor',
          },
          {
            id: '2b',
            name: 'signed messages',
            destination: '/project/messages',
          },
          {
            id: '2c',
            name: 'personal coins',
            children: [
              {
                id: '2c1',
                name: 'your coins',
                destination: '/project/coins/about'
              },
              {
                id: '2c2',
                name: 'sales',
                destination: '/project/coins/sales'
              },
              {
                id: '2c3',
                name: 'dividends',
                destination: '/project/coins/dividends'
              },
              {
                id: '2c4',
                name: 'vouchers',
                destination: '/project/coins/vouchers'
              },
            ]
          },
          {
            id: '2d',
            name: 'collectibles',
            destination: '/project/collectibles'
          },
        ]
      },
    ]
  }),
  computed: {
    drawer: {
      get() {
        return this.$store.state.layout.drawer
      },
      set(value) {
        this.$store.commit('layout/drawer', value)
      }
    }
  },
}
</script>

<style lang="css" scoped>
.nuxt-link-exact-active {
  font-weight: bold;
}
a {
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
</style>
