import Vue from 'vue'
import Rules from './view/Rules.vue'
import Home from './view/Home.vue'
import About from './view/About.vue'
import Contacts from './view/Contacts.vue'
import Accomodations from './view/Accomodations'
import Transportation from './view/Transportation'

import RulePart from './components/RulePart.vue'
import ContactPart from './components/ContactPart.vue'

import App from './App.vue'
import store from './store'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
Vue.use(Vuetify)

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyB9id485Gn1Ounw7JWk-WfczIcbqnX1eNA',
    libraries: 'places' // This is required if you use the Autocomplete plugin
  }
})

Vue.config.productionTip = false

const routes = [
  { path: '/', component: Home },
  { path: '/rules', component: Rules },
  { path: '/about', component: About },
  { path: '/contacts', component: Contacts },
  { path: '/accomodations', component: Accomodations },
  { path: '/transportation', component: Transportation }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
