import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createStore } from 'vuex'
import router from './router.js';

const store = createStore({
  state() {
    return { calendarData: [] }
  },
  mutations: {
    createCalendar(state, data) {
      state.calendar = data;
    }
  }
})

createApp(App).use(router).mount('#app');
