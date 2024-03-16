import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import '/src/assets/main.css'
import { createApp } from 'vue'
import navbar from './components/nav.vue'
import footer from './components/footer.vue'
import mui_player from './components/mui_player.vue'



createApp(navbar).mount("#nav")
createApp(footer).mount("#footer")
createApp(mui_player).mount("#player")
