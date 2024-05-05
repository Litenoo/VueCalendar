import {createStore} from 'vuex';


const acctualDate = new Date();

const store = createStore({
  state() {
    return {
      date: {
        viewMode: "Week",
        miniCalendarView: acctualDate.getMonth(),
        calendarView: acctualDate.getMonth(),
        display: [],

        _day: acctualDate.getDate() - acctualDate.getDay() + 1, // Check if subtracting, so the start day is monday is 100% correct in every month
        _month: acctualDate.getMonth() + 1,
        _year: acctualDate.getFullYear(),
        _miniMonth: acctualDate.getMonth() + 1,
        _miniYear: acctualDate.getFullYear(),
      },
      auth: {
        username: null,
        email: null,
        errorMessage: null,
      },
      tasks: {}
    }
  },
  mutations: {
    changeMiniMonth(state, num) {
      state.date._miniMonth += num;

      if (state.date._miniMonth < 1) {
        state.date._miniMonth = 12;
        state.date._miniYear--;
      }
      if (state.date._miniMonth > 12) {
        state.date._miniMonth = 1;
        state.date._miniYear++;
      }
    },
    changeMonth(state, num) {

      // const monthNames = ["January", "February", "March", "April", "May", "June", //dev
      //   "July", "August", "September", "October", "November", "December" //dev
      // ]; //dev
      state.date._month += num;

      if (state.date._month < 1) {
        state.date._month = 12;
        state.date._year--;
      }
      if (state.date._month > 12) {
        state.date._month = 1;
        state.date._year++;
      }
      // console.log("Now its " + monthNames[state.date._month - 1] + " , Which has length of :" + new Date(state.date._year, state.date._month, 0).getDate()); //dev
    },
    updateViewMode(state, newMode) {
      state.date.viewMode = newMode;
    },
    getTotalDays(yr, mnt) { // consider using it in actions instead of repeating one line of code moultiple times
      const lastDay = new Date(yr, mnt + 1, 0).getDate();
      return lastDay;
    },
    setUserData(state, username, email){
        state.auth.username = username;
        state.auth.email = email;
    }
  },

  actions: {
    async loginUser({state, commit}, userData) {
      console.log('login');
      try {
        console.log('loginUser : ', userData.password, userData.email);
        const response = await fetch('http://localhost:3000/login', {
          method: 'POST',
          credentials: 'include',
          sameSite: 'strict',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:5173',
          },
          body: JSON.stringify({ email: userData.email, password: userData.password }),
        });
        const data = await response.json();
        console.log('recived data: ', data);
        if (!response.ok) {
          state.auth.errorMessage = data.error;
        }
        commit("setUserData", response.body.username, response.body.email);
      } catch (err) {
        console.log(err); //dev
      }
    },
    async recoveryPassword({state, commit}, userData){
      fetch('http://localhost:3000/changePassword', {
        method: 'POST',
        credentials: 'include',
        sameSite: 'strict',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'http://localhost:5173',
        },
        body: JSON.stringify({ email: userData.email}),
      })
    },
    changeDay({state, commit}, num) {
      state.date._day += num;


      if (state.date._day < 1) {
        commit("changeMonth", -1);
        let negative = state.date._day;
        state.date._day = (new Date(state.date._year, state.date._month, 0).getDate()) + negative;
      } else if (state.date._day > new Date(state.date._year, state.date._month, 0).getDate()) {
        let excess = state.date._day - new Date(state.date._year, state.date._month, 0).getDate();
        commit("changeMonth", 1);
        state.date._day = excess;
      }
      // console.log(state.date._day);
      state.date.display = [];

      let displayDays = state.date._day;
      for (let i = 0; i < 7; i++, displayDays++) {
        if (displayDays > new Date(state.date._year, state.date._month, 0).getDate()) {
          displayDays = 1;
        }
        state.date.display.push(displayDays);
      }
    }
  },
});

export default store;