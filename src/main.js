import Vue from 'vue'
import App from './App'
import BuyDialogComponent from '@/components/Common/BuyDialog'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import * as fb from 'firebase/app'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)
Vue.component('app-buy-dialog', BuyDialogComponent)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    var firebaseConfig = {
      apiKey: 'AIzaSyB3UkWT8lCUmJxCmxYe-HiBYq7vXWCnGJs',
      authDomain: 'onlinestore-d929e.firebaseapp.com',
      databaseURL: 'https://onlinestore-d929e.firebaseio.com',
      projectId: 'onlinestore-d929e',
      storageBucket: 'onlinestore-d929e.appspot.com',
      messagingSenderId: '477462685389',
      appId: '1:477462685389:web:55c52e14c4c726cc'
    }
    // Initialize Firebase
    fb.initializeApp(firebaseConfig)

    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })
    this.$store.dispatch('fetchProducts')
  }
})
