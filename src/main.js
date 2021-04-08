import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import zh from './zh_TW.js'
import { ValidationObserver, ValidationProvider, localize, configure, extend } from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'

Vue.config.productionTip = false

Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule])
})

configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid'
  }
})
localize('tw', zh)

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
