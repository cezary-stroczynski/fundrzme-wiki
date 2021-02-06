<template lang="html">
  <div>
    <ol>
      <li>
        Download the app:
        <DownloadButtons :browser="browser" />
      </li>
      <li>
        Run the application and select "Create Wallet":
        <v-img
        class="mt-5 mb-10 mx-auto"
        max-width="300px"
        src="/getting_started/mobile/tokenpocket/1.png"></v-img>
      </li>
      <li>
        Name your wallet and set a password for it:
        <v-img
        class="mt-5 mb-10 mx-auto"
        max-width="300px"
        src="/getting_started/mobile/tokenpocket/2.png"></v-img>
      </li>
      <li>
        You have successfully created a new wallet.
        However, if you want to use the Fundrz:me, there is one thing left to do.
        Fundrz:me is currently being tested, therefore it only works
        on the Ethereum test network called Rinkeby. To switch to the Rinkeby
        network, click the gear on the bottom bar, scroll down a little until
        you see the "Network" option:
        <v-img
        class="mt-5 mb-10 mx-auto"
        max-width="300px"
        src="/getting_started/mobile/tokenpocket/3.png"></v-img>
      </li>
      <li>
        Go to the "Network" options and change the network from "Main" to "Rinkeby Testnet":
        <v-img
        class="mt-5 mb-10 mx-auto"
        max-width="300px"
        src="/getting_started/mobile/tokenpocket/4.png"></v-img>
      </li>
      <li>
        That's all! You are ready to use Fundrz:me. From the bottom bar,
        select the icon with the crossed letter "D" (first from the right),
        then in the address bar enter the address "fundrzme-beta.herokuapp.com":
        <v-img
        class="mt-5 mb-10 mx-auto"
        max-width="300px"
        src="/getting_started/mobile/tokenpocket/5.png"></v-img>
      </li>
    </ol>
  </div>
</template>

<style lang="css" scoped>
li {
  margin-top: 15px;
}
</style>

<script>
import DownloadButtons from '~/components/start/mobile/DownloadButtons.vue'
export default {
  components: {
    DownloadButtons,
  },
  computed: {
    browser() {
      return this.$store.state.start.mobile.browsers.tokenPocket
    }
  }
}
</script>
