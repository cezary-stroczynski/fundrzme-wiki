<template>
  <div class="pa-10">
    <div class="text-h5 grey--text text-uppercase py-3">
      getting started on mobile
    </div>
    <div class="text-h6 text-uppercase grey--text mt-7 mb-5">
      why do i need a dapp browser?
    </div>
    <div class="text-justify">
      Fundrz:me is based on blockchain technology. To be more precise,
      Fundrz:me uses a set of smart contracts placed on the Ethereum blockchain
      to create a unique social financing system. The thing is, most mobile
      browsers are unable to communicate with the Ethereum blockchain.
      That's why Fundrz:me must be opened in a dapp browser so you can
      interact with the Ethereum blockchain from your mobile device.
    </div>
    <div class="text-h6 text-uppercase grey--text mt-7 mb-5">
      how to install dapp browser?
    </div>
    <div class="text-center text-uppercase grey--text mb-5">
      Choose one of the recommended Dapp browsers:
    </div>
    <v-container>
      <v-row
      align="end"
      justify="center">
        <v-col
        align="center"
        cols="auto">
          <div
          :class="{ 'dimmed' : chosenBrowser != 'tokenPocket' }"
          @click="chooseBrowser('tokenPocket')"
          class="cursor-pointer">
            <v-img
            :src="browsers.tokenPocket.imgSrc"
            max-width="60"></v-img>
            <div
            class="mt-1"
            :class="{ 'font-weight-bold' : chosenBrowser == 'tokenPocket' }">
              {{ browsers.tokenPocket.name }}
            </div>
          </div>
        </v-col>
        <v-col
        offset="2"
        align="center"
        cols="auto">
        <div
        :class="{ 'dimmed' : chosenBrowser != 'dappPocket' }"
        @click="chooseBrowser('dappPocket')"
        class="cursor-pointer">
          <v-img
          :src="browsers.dappPocket.imgSrc"
          max-width="60"></v-img>
          <div
          class="mt-1"
          :class="{ 'font-weight-bold' : chosenBrowser == 'dappPocket' }">
            {{ browsers.dappPocket.name }}
          </div>
        </div>
        </v-col>
      </v-row>
    </v-container>
    <div v-if="chosenBrowser == 'tokenPocket'">
      <TokenPocketInstructions />
    </div>
    <div v-if="chosenBrowser == 'dappPocket'">
      <DappPocketInstructions />
    </div>
  </div>
</template>

<style lang="css" scoped>
.dimmed {
  opacity: 0.7;
}
</style>

<script>
import TokenPocketInstructions from '~/components/start/mobile/TokenPocketInstructions.vue'
import DappPocketInstructions from '~/components/start/mobile/DappPocketInstructions.vue'
export default {
  components: {
    TokenPocketInstructions,
    DappPocketInstructions,
  },
  computed: {
    browsers() {
      return this.$store.state.start.mobile.browsers
    },
    chosenBrowser() {
      return this.$store.state.start.mobile.chosenBrowser
    }
  },
  methods: {
    chooseBrowser(name) {
      this.$store.commit('start/mobile/chooseBrowser', name)
    }
  }
}
</script>
