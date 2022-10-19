import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import './style.css'
import App from './App.vue'

library.add(fas)
const pinia = createPinia()

createApp(App)
    .use(pinia)
    .component('fa', FontAwesomeIcon)
    .mount('#app')
