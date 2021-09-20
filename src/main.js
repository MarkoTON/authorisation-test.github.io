import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.prototype.$axios = axios;
Vue.config.productionTip = false

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAswaa0JMlSIAbutG4t_ORi1-IJT4d0NJU",
  authDomain: "test-auth-login-6de91.firebaseapp.com",
  projectId: "test-auth-login-6de91",
  storageBucket: "test-auth-login-6de91.appspot.com",
  messagingSenderId: "1059971674942",
  appId: "1:1059971674942:web:aa06afa1cad27ad6b2326f"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  appFirebase,
  render: h => h(App)
}).$mount('#app')
