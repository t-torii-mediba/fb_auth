// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyB_7meyb5EEip5U0bdql1v4V_qKwcmcwwQ',
  authDomain: 'vueauth-6e450.firebaseapp.com',
  databaseURL: 'https://vueauth-6e450.firebaseio.com',
  projectId: 'vueauth-6e450',
  storageBucket: 'vueauth-6e450.appspot.com',
  messagingSenderId: '797046111261'
}
firebase.initializeApp(config)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
