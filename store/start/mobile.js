export const state = () => ({
  chosenBrowser: false,
  browsers: {
    tokenPocket: {
      name: 'tokenPocket',
      imgSrc: '/browser_logos/tokenpocket.png',
      href: {
        android: 'https://play.google.com/store/apps/details?id=com.tokenpocket',
        ios: 'https://itunes.apple.com/app/token-pocket/id1288636393',
      }
    },
    dappPocket: {
      name: 'Dapp Pocket',
      imgSrc: '/browser_logos/dapp_pocket.png',
      href: {
        android: 'https://play.google.com/store/apps/details?id=com.dapppocket',
        ios: 'https://itunes.apple.com/tw/app/dapp-pocket/id1443703224',
      }
    }
  }
})



export const mutations = {
  chooseBrowser(state, value) {
    state.chosenBrowser = value
  },
}
