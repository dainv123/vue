import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import VeeValidate from 'vee-validate'
import BootstrapVue from 'bootstrap-vue'
import vueCustomElement from "vue-custom-element";
import BaseModal from "@/components/Base/BaseModal/BaseModal"

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './scss/style.scss'

Vue.use(VeeValidate)
Vue.use(BootstrapVue)
Vue.use(vueCustomElement)

BaseModal.store = store;

Vue.config.ignoredElements = [
  "base-modal",
  ....
]

Vue.customElement("base-modal", BaseModal);

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#hello')
