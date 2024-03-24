import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'
library.add(fas, far, fab)

import './assets/main.css'

import { createApp } from 'vue'
import navbar from './components/nav.vue'
import footer from './components/footer.vue'
import ad from './components/advertisement.vue'
import recommend from './components/recommend.vue'



createApp(navbar).mount("#nav")
createApp(footer).mount("#footer")
createApp(ad).mount("#ad")
createApp(recommend).mount('#recommend')



