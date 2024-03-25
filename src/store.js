import { createStore } from 'vuex';

const acctualDate = new Date()

const store = createStore({
  state() {
    return {
      date: {
        viewMode: "Week",
        miniCalendarView: acctualDate.getMonth(),
        calendarView: acctualDate.getMonth(),

        _day: acctualDate.getDate(),
        _year: acctualDate.getFullYear(),
        _month: acctualDate.getMonth() + 1,
      }
    }
  },
  mutations: {
    changeMonth(state, num) {
      state.date._month += num;

      if (state.date._month < 1) {
        state.date._month = 12;
        state.date._year--;
      } else if (state.date._month > 12) {
        state.date_month = 1;
        state.date._year++;
      }
    },
    updateViewMode(state, newMode) {
      state.date.viewMode = newMode;
    }
  },

  actions: {
    changeDay({ state, commit }, num) {
      state.date._day += num;

      if (state.date._day < 1) {
        commit("changeMonth", -1);
        let negative = state.date._day;
        state.date._day = (new Date(state.date._year, state.date._month, 0).getDate()) + negative;
      } else if (state.date._day > new Date(state.date._year, state.date._month, 0).getDate()) {
        commit("changeMonth", 1);
        let excess = state.date._day - new Date(state.date._year, state.date._month, 0).getDate();
        console.log(`excess equals ${state.date._day} - ${new Date(state.date._year, state.date._month, 0).getDate()}`);
        console.log(`length of ${state.date._month} is :`, new Date(state.date._year, state.date._month, 0).getDate());
        state.date._day = excess;
        console.log(state.date._day);
      }
    }
  },
});

export default store;