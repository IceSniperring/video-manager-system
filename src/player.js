import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import '/src/assets/main.css'

import { createApp } from 'vue'
import navbar from './components/nav.vue'
import footer from './components/footer.vue'
import mui_player from './components/mui_player.vue'
import player_recommend from './components/playerRecommend.vue'
import comment from './components/comment.vue'



createApp(navbar).mount("#nav")
createApp(footer).mount("#footer")
createApp(mui_player).mount("#player")
createApp(player_recommend).mount("#player-recommend")
createApp(comment).mount("#comment")