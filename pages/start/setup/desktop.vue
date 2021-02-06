<template>
  <div class="pa-10">
    <div class="text-h5 grey--text text-uppercase py-3">
      getting started on desktop
    </div>
    <div class="text-h6 text-uppercase grey--text mt-7 mb-5">
      why do i need a metamask?
    </div>
    <div class="text-justify">
      Fundrz:me is based on blockchain technology. To be more precise,
      Fundrz:me uses a set of smart contracts placed on the Ethereum blockchain
      to create a unique social financing system. The thing is, most web
      browsers are unable to communicate with the Ethereum blockchain.
      That's why Fundrz:me requires the MetaMask extension so you can
      interact with the Ethereum blockchain from your browser.
    </div>
    <div class="text-h6 text-uppercase grey--text mt-7 mb-5">
      how to install metamask?
    </div>
    <div class="text-uppercase grey--text text-center mb-2">
      supported browsers:
    </div>
    <v-container>
      <v-row
      align="end"
      justify="center">
        <v-col
        align="center"
        v-for="(browser, i) in browsers"
        :offset="i == '0' ? '0' : '1'"
        cols="auto"
        :key="i">
          <a
          :href="browser.href"
          target="_blank">
            <v-img
            :src="browser.imgSrc"
            max-width="60"></v-img>
            <div class="mt-1">
              {{ browser.name }}
            </div>
          </a>
        </v-col>
      </v-row>
    </v-container>
    <ol>
      <li>
        From the icons above, select the icon representing your browser
        and click on it.
      </li>
      <li>
        In the newly opened tab install the MetaMask extension.
      </li>
      <li>
        After the installation is complete, a new tab will open.
        Click the "GET STARTED" button to begin the configuration.
      </li>
    </ol>
    <div class="text-justify text-body-2 my-3">
      If you are using a different browser, or have had trouble installing
      the MetaMask extension, you can try to find more information about
      the extension on the official MetaMask website:
      <a href="https://metamask.io/"
      target="_blank">
        MetaMask.io
      </a>
    </div>
    <div class="text-h6 text-uppercase grey--text mt-7 mb-5">
      metamask configuration
    </div>
    <div class="text-justify">
      <ol>
        <li>
          Select the "CREATE A WALLET" option.
          <v-img
          class="mt-5 mb-10 mx-auto"
          src="/metamask_configuration/desktop/create_wallet.png"
          max-width="700"></v-img>
        </li>
        <li>
          Create a password that will secure your MetaMask wallet.
          <v-img
          class="mt-5 mb-10 mx-auto"
          src="/metamask_configuration/desktop/password.png"
          max-width="300"></v-img>
        </li>
        <li>
          Back up your wallet with a seed phrase. In the first step,
          a sequence of words will be displayed. Try to remember them or
          write them down in a safe place. In the next step, you will have
          to enter the same words in the correct order to prove that you
          memorize them or wrote them down.
          <v-container>
            <v-row>
              <v-col cols="6">
                <v-img
                class="mt-5 mb-10 mx-auto"
                src="/metamask_configuration/desktop/secret_backup_phrase.png"></v-img>
              </v-col>
              <v-col cols="6">
                <v-img
                class="mt-5 mb-10 mx-auto"
                src="/metamask_configuration/desktop/phrases_ready.png"></v-img>
              </v-col>
            </v-row>
          </v-container>
        </li>
        <li>
          That's pretty much it. Your new MetaMask wallet is ready for use.
          However, if you want to use the Fundrz:me, there is one thing left to do.
          Fundrz:me is currently being tested, therefore it only works
          on the Ethereum test network called Rinkeby. To switch to the Rinkeby
          network, click the drop-down menu in the upper right corner
          and select "Rinkeby test network" from the list.
          <v-img
          max-width="500"
          class="mt-5 mb-10 mx-auto"
          src="/metamask_configuration/desktop/rinkeby.png"></v-img>
        </li>
        <li>
          You can now go back to the
          <a href="https://fundrzme-beta.herokuapp.com/">Fundrz:me</a>
          page and start
          discovering tons of cool features.
        </li>

      </ol>
    </div>
  </div>
</template>

<style lang="css" scoped>
li {
  margin-top: 15px;
}
.browser-icons {
  width: 60px;
}
</style>


<script>
import UnderConstruction from '~/components/UnderConstruction.vue'
export default {
  data: () => ({
    browsers: [
      {
        name: 'Chrome',
        imgSrc: '/browser_logos/chrome.png',
        href: 'https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn',
      },
      {
        name: 'Firefox',
        imgSrc: '/browser_logos/firefox.png',
        href: 'https://addons.mozilla.org/firefox/addon/ether-metamask/',
      },
      {
        name: 'Brave',
        imgSrc: '/browser_logos/brave.png',
        href: 'https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn',
      },
      {
        name: 'Edge',
        imgSrc: '/browser_logos/edge.png',
        href: 'https://microsoftedge.microsoft.com/addons/detail/metamask/ejbalbakoplchlghecdalmeeeajnimhm',
      },
    ]
  }),
  components: {
    UnderConstruction
  }
}
</script>
