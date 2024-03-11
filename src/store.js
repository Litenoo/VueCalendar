import { createStore } from 'vuex';

const date = new Date()

const store = createStore({
  state() {
    return {
      currentDate: {
        viewMonthLength: new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate(),
        viewMonth: date.getMonth(),
        month: date.getMonth(),
        year: date.getFullYear(),
        day: date.getDate(),
        week: 0,
        view: 'Month',
      }, //make separated year for minicalendar
    }
  },
  mutations: {
    incrementMonth(state, global) {
      if (state.currentDate.month === 11 || state.currentDate.viewMonth === 11) {
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
      state.currentDate.viewMonthLength = date.getDate(date.getFullYear, date.getMonth(), 0); //made function from it
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
      state.currentDate.viewMonthLength = date.getDate(date.getFullYear, date.getMonth(), 0); //made function from it
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
      if (state.currentDate.day > state.currentDate.viewMonthLength) {
        state.currentDate.day = 1;
        if (state.currentDate.viewMonth === 11 || state.currentDate.viewMonth === 11) {
          state.currentDate.year++;
            state.currentDate.viewMonth = 0;
        } else {
            state.currentDate.viewMonth++;
        }
        state.currentDate.viewMonthLength = new Date(state.currentDate.year, state.currentDate.viewMonth + 1, 0).getDate(); //make function by it
      }
    },
    decrementDay(state) {
      state.currentDate.day--;
      if (state.currentDate.day < 1) {
        state.currentDate.viewMonthLength = new Date(state.currentDate.year, state.currentDate.viewMonth + 1, 0).getDate(); //make function by it
        state.currentDate.day = state.currentDate.viewMonthLength;
        if (state.currentDate.viewMonth === 0 || state.currentDate.viewMonth === 0) {
          state.currentDate.year--;
            state.currentDate.viewMonth = 11;
        } else {
            state.currentDate.viewMonth--;
        }
      }
    },
    incrementYear(state) {
      state.currentDate.year++;
    },
    decrementYear(state) {
      state.currentDate.year--;
    }
  }
});

export default store;