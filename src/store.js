import { createStore } from 'vuex';

const date = new Date()

const store = createStore({
  state() {
    return {
      currentDate: {
        weekDisplay: [1,2,3,4,5,6,7],
        viewMonthLength: new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate(),
        viewMonth: date.getMonth(),
        month: date.getMonth(),
        year: date.getFullYear(),
        day: date.getDate(),
        week: 1,
        view: 'Week',
      }, //add separated year for minicalendar
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
      // console.log(state.currentDate.viewMonth)
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
      console.log(state.currentDate.viewMonth)
    },
    setDate(state, newWeekday) {
      state.currentDate.weekDay = newWeekday;
    },
    updateViewmode(state, newViewMode) {
      state.currentDate.view = newViewMode;
    },
    incrementWeek(state) {
      let monthWeeks = Math.ceil((state.currentDate.viewMonthLength - 7) / 7) + 1
      state.currentDate.week++;

      if (state.currentDate.week > monthWeeks) {
        state.currentDate.week = 1;
        if (state.currentDate.viewMonth === 11) {
          state.currentDate.year++;
          state.currentDate.viewMonth = 0;
        } else {
          state.currentDate.viewMonth++;
        }
        state.currentDate.viewMonthLength = new Date(state.currentDate.year, state.currentDate.viewMonth + 1, 0).getDate(); //make function by it
      }
      
      state.currentDate.weekDisplay = []
      let day = state.currentDate.week * monthWeeks + 1;
      console.log(day);
      let j = 1;
      for(let i=1; i <= 7; i++, day++){
        if(!day > state.currentDate.viewMonth){
          state.currentDate.weekDisplay.push(j);
          j++;
        }else{
          state.currentDate.weekDisplay.push(day);
        }
      }
      console.log(state.currentDate.weekDisplay);
    },
    decrementWeek(state) {
      let beforeMonthWeeks = Math.ceil(new Date(state.currentDate.year, state.currentDate.viewMonth - 1, 0).getDate() / 7); //standarize it (monthWeeks variable is vuex global variable)
      state.currentDate.week--;

      if (state.currentDate.week < 1) {
        state.currentDate.week = beforeMonthWeeks;
        if (state.currentDate.viewMonth === 0) {
          state.currentDate.year--;
          state.currentDate.viewMonth = 11;
        } else {
          state.currentDate.viewMonth--;
        }
        state.currentDate.viewMonthLength = new Date(state.currentDate.year, state.currentDate.viewMonth + 1, 0).getDate(); //make function by it
      }
      console.log(state.currentDate.week);
      console.log('viewMonthLength = ', state.currentDate.viewMonthLength);
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

//When go to 2023 (october for example its not displayed correct.)