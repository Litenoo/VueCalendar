import { createStore } from 'vuex';

const date = new Date()

const store = createStore({
  state() {
    return {
      currentDate: { month: date.getMonth(), year: date.getFullYear(), weekDay: null, view: 'Week' },
    }
  },
  mutations: {
    increment(state) {
      if (state.currentDate.month === 11) {
        state.currentDate.year++;
        state.currentDate.month = 0;
      } else {
        state.currentDate.month++;
      }
    },
    decrement(state) {
      if (state.currentDate.month === 0) {
        state.currentDate.year--;
        state.currentDate.month = 11;
      } else {
        state.currentDate.month--;
      }
    },
    setDate(state, newWeekday) {
      state.currentDate.weekDay = newWeekday;
    },
    updateViewmode(state, newViewMode) {
      state.currentDate.view = newViewMode;
    }
  }
})

export default store;