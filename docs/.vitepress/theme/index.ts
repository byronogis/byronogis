// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import MyLayout from './MyLayout.vue'
import './custom.css'
import EssaysList from '/components/EssaysList.vue'
import Earth from '/components/Earth.vue'
import Home from '/components/Home.vue'

export default {
  ...DefaultTheme,
  Layout: MyLayout,
  enhanceApp({ app, _router, _siteData }) {
    // register global components
    app.component('EssaysList', EssaysList)
    app.component('Earth', Earth)
    app.component('Home', Home)
  },
}
