import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createStore } from 'vuex'

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

createApp(App).mount('#app');
