import { createStore } from 'vuex';

const date = new Date()

const store = createStore({
  state() {
    return {
      currentDate: {
        weekDisplay: [1, 2, 3, 4, 5, 6, 7],
        viewMonthLength: new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate(),
        viewMonth: date.getMonth(),
        month: date.getMonth(),
        year: date.getFullYear(),
        day: date.getDate(),
        week: 1,
        view: 'Week',
        weekStart: 1, //Change name
        weekStartDay: 17, //change to weekDay
        isDecrementNegative: 0,
      }, //add separated year for minicalendar
    }
  },
  mutations: {
    setDate(state, newWeekday) {
      state.currentDate.weekDay = newWeekday;
    },
    updateViewmode(state, newViewMode) {
      state.currentDate.view = newViewMode;
    },
    incrementYear(state) {
      state.currentDate.year++;
    },
    decrementYear(state) {
      state.currentDate.year--;
    },
    updateMonthLength(state) {
      state.currentDate.viewMonthLength = new Date(state.currentDate.year, state.currentDate.viewMonth, 0).getDate();
      //check if everything is correct
    }
  },
  actions: {
    incrementDay({ state, commit }) {
      state.currentDate.day++;
      if (state.currentDate.day > state.currentDate.viewMonthLength) {
        state.currentDate.day = 1;
        if (state.currentDate.viewMonth === 11 || state.currentDate.viewMonth === 11) {
          state.currentDate.year++;
          state.currentDate.viewMonth = 0;
        } else {
          state.currentDate.viewMonth++;
        }
        commit("updateMonthLength");
      }
    },
    decrementDay({ state, commit }) {
      state.currentDate.day--;
      if (state.currentDate.day < 1) {
        commit("updateMonthLength");
        state.currentDate.day = state.currentDate.viewMonthLength;
        if (state.currentDate.viewMonth === 0 || state.currentDate.viewMonth === 0) {
          state.currentDate.year--;
          state.currentDate.viewMonth = 11;
        } else {
          state.currentDate.viewMonth--;
        }
      }
    },
    incrementMonth({ state, commit }, global) {
      console.log("incrementing month !");
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
      commit("updateMonthLength");
    },
    decrementMonth({ state, commit }, global) {
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
      commit("updateMonthLength");
    },
    incrementWeek({ state, dispatch }) {
      state.currentDate.week++;
      state.currentDate.weekDisplay = [];
      // let weekStartDayName = (new Date(state.currentDate.year, state.currentDate.viewMonth, 1).getDay()); //5 (friday)
      state.currentDate.isDecrementNegative = false;

      for (let i = 0; i < 7; i++) {
        state.currentDate.weekDisplay.push(state.currentDate.weekStartDay);
        if (state.currentDate.weekStartDay >= state.currentDate.viewMonthLength) {
          state.currentDate.weekStartDay = 1;
          dispatch("incrementMonth", true);
        } else {
          state.currentDate.weekStartDay++;
        }
      }
      console.log("endDay:", state.currentDate.weekStartDay)
    },


    decrementWeek({ state, dispatch }) {
      let beforeMonthLength = new Date(state.currentDate.year, state.currentDate.viewMonth, 0).getDate();
      state.currentDate.week--;
      state.currentDate.weekDisplay = [];
      
      state.currentDate.weekStartDay -= 14;
      state.currentDate.weekDisplay = [];
      state.currentDate.isDecrementNegative = false;

      let isNegative = false;

      for (let i = 0; i < 7; i++) {
        if(state.currentDate.weekStartDay < 1){
          console.log("befmonthlen : ", beforeMonthLength,"weekStartDay :", state.currentDate.weekStartDay)
          state.currentDate.weekStartDay = beforeMonthLength + state.currentDate.weekStartDay;
          isNegative = true;
        }
        state.currentDate.weekDisplay.push(state.currentDate.weekStartDay);
        if (state.currentDate.weekStartDay >= beforeMonthLength) {
          state.currentDate.weekStartDay = 1;
          dispatch("decrementMonth", true);
        } else {
          state.currentDate.weekStartDay++;
        }
      }
      if(isNegative){
        state.currentDate.weekStartDay -= 2
      }
      console.log("endDay:", state.currentDate.weekStartDay);
      //after subtracting 2 there is 2 missing days and that must be fixed
    },
    
  },
});

export default store;

// Add weekDays to monthDays and make it valid
// error when changing month by day february is having 31 days somehow :P
// Refactor the code deeply (Use actions)
// Make EVERYTHING work correctly