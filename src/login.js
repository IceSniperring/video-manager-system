import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import '/src/assets/main.css'
import { createApp } from 'vue'
import navbar from './components/nav.vue'
import footer from './components/footer.vue'
import loginForm from './components/login.vue'



createApp(navbar).mount("#nav")
createApp(footer).mount("#footer")
createApp(loginForm).mount("#loginForm")
