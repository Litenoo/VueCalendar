import { createStore } from 'vuex';

const date = new Date()

const store = createStore({
  state() {
    return {
      currentDate: { viewMonth: date.getMonth(), month: date.getMonth(), year: date.getFullYear(), day: date.getDate(), week: 0, view: 'Month' }, //make separated year for minicalendar
    }
  },
  mutations: {
    incrementMonth(state, global) {
      if (state.currentDate.month === 11 || state.currentDate.viewMonth === 11 ) {
        state.currentDate.year++;
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
    decrementMonth(state, global) {
      if (state.currentDate.month === 0 || state.currentDate.viewMonth === 0) {
        state.currentDate.year--;
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
    },
    incrementWeek(state) {
      state.currentDate.week++;
    },
    decrementWeek(state) {
      state.currentDate.week--;
    },
    incrementDay(state) {
      state.currentDate.day++;
    if(state.currentDate > 30){ //change 30 (31 - 1) to acctual month length in future
      state.currentDate = 0;
    }
    },
    decrementDay(state) {
      state.currentDate.day--;
      if(state.currentDate < 0){
        state.currentDate = 31; // change 30 (31 - 1) to acctual month length in future
      }
    },
    incrementYear(state){
      state.currentDate.year++;
    },
    decrementYear(state){
      state.currentDate.year--;
    }
  }
})

export default store;