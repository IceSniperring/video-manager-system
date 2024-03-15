import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import { createApp } from 'vue'
import navbar from './components/nav.vue'
import footer from './components/footer.vue'
import mui_player from './components/mui_player.vue'
import ad from  './components/advertisement.vue'

import recommend from './components/recommend.vue'



createApp(navbar).mount("#nav")
createApp(footer).mount("#footer")
createApp(ad).mount("#ad")
createApp(mui_player).mount("#player")
createApp(recommend).mount('#recommend')



