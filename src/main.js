// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyAswaa0JMlSIAbutG4t_ORi1-IJT4d0NJU",
  authDomain: "test-auth-login-6de91.firebaseapp.com",
  projectId: "test-auth-login-6de91",
  storageBucket: "test-auth-login-6de91.appspot.com",
  messagingSenderId: "1059971674942",
  appId: "1:1059971674942:web:aa06afa1cad27ad6b2326f"
};

firebase.initializeApp(firebaseConfig);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
