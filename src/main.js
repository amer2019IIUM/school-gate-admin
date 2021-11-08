import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons'
import { faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faSchool } from '@fortawesome/free-solid-svg-icons'
import { faStoreAlt } from '@fortawesome/free-solid-svg-icons'
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons'
import { faBuilding } from '@fortawesome/free-solid-svg-icons'
import { faArchway } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faUsersCog } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faSearch, faUserGraduate, faHome, faChalkboardTeacher, faStoreAlt, faDoorOpen, faArchway, faSchool, faBuilding, faUsersCog)


Vue.config.productionTip = false
Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
