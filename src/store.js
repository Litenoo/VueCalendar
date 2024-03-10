import { createStore } from 'vuex';

const date = new Date()

const store = createStore({
  state() {
    return {
      currentDate: { viewMonth: date.getMonth(), month: date.getMonth(), year: date.getFullYear(), weekDay: null, view: 'Week' },
    }
  },
  mutations: {
    increment(state, global) {
      if (state.currentDate.month === 11) {
        state.currentDate.year++; // probably need to change year too 
        if (global) {
          state.currentDate.viewMonth = 0;
        } else {
          state.currentDate.month = 0;
        }
      } else {
        if (global) {
          state.currentDate.viewMonth++;
        } else {
          state.currentDate.month++;
        }
      }
    },
    decrement(state, global) {
      if (state.currentDate.month === 0) {
        state.currentDate.year--; // probably need to change year too 
        if (global) {
          state.currentDate.viewMonth = 11;
        } else {
          state.currentDate.month = 11;
        }
      } else {
        if (global) {
          state.currentDate.viewMonth--;
        } else {
          state.currentDate.month--;
        }
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