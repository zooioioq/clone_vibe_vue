import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')

import headerComponent from './components/header-component'
createApp(App).component(headerComponent.name, headerComponent)