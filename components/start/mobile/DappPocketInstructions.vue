<template lang="html">
  <div>
    <ol>
      <li>
        Download the app:
        <DownloadButtons :browser="browser" />
      </li>
      <li>
        Run the application and select "Create New Account":
        <v-img
        class="mt-5 mb-10 mx-auto"
        max-width="300px"
        src="/getting_started/mobile/dapp_pocket/1.png"></v-img>
      </li>
      <li>
        Write down your recovery phrase and move on:
        <v-img
        class="mt-5 mb-10 mx-auto"
        max-width="300px"
        src="/getting_started/mobile/dapp_pocket/2.png"></v-img>
      </li>
      <li>
        Set your PIN code:
        <v-img
        class="mt-5 mb-10 mx-auto"
        max-width="300px"
        src="/getting_started/mobile/dapp_pocket/3.png"></v-img>
      </li>
      <li>
        You have successfully created a new wallet.
        However, if you want to use the Fundrz:me, there is one thing left to do.
        Fundrz:me is currently being tested, therefore it only works
        on the Ethereum test network called Rinkeby. To switch to the Rinkeby
        network, click the third icon on the lower bar and select the
        "Advanced" option from the list:
        <v-img
        class="mt-5 mb-10 mx-auto"
        max-width="300px"
        src="/getting_started/mobile/dapp_pocket/4.png"></v-img>
      </li>
      <li>
        Choose "Blockchain Network":
        <v-img
        class="mt-5 mb-10 mx-auto"
        max-width="300px"
        src="/getting_started/mobile/dapp_pocket/5.png"></v-img>
      </li>
      <li>
        Change the network from "MAINNET" to "RINKEBY":
        <v-img
        class="mt-5 mb-10 mx-auto"
        max-width="300px"
        src="/getting_started/mobile/dapp_pocket/6.png"></v-img>
      </li>
      <li>
        That's all! you are ready to use Fundrz:me.
        Select the middle icon from the bottom bar and copy-paste this
        address in the address bar: <br>
        <b>https://fundrzme-beta.herokuapp.com/</b>
        <v-img
        class="mt-5 mb-10 mx-auto"
        max-width="300px"
        src="/getting_started/mobile/dapp_pocket/7.png"></v-img>
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
      return this.$store.state.start.mobile.browsers.dappPocket
    }
  }
}
</script>
