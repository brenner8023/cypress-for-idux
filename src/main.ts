import { createApp } from 'vue'
import { idux } from './plugins'
import App from './App.vue'

createApp(App).use(idux).mount('#app')
