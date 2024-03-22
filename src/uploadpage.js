import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import '/src/assets/main.css'

import { createApp } from 'vue'
import navbar from './components/nav.vue'
import footer from './components/footer.vue'
import uploadMenu from './components/upload.vue'

createApp(navbar).mount("#nav")
createApp(footer).mount("#footer")
createApp(uploadMenu).mount('#upload-menu')



