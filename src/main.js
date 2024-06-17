import './assets/main.css'

import { createApp } from 'vue'
import App from './mainComponents/App.vue'
import router from './router.js';

createApp(App).use(router).mount('#app');
