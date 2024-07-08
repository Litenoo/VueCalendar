import {createStore} from 'vuex';
import router from './router.js';

const acctualDate = new Date();

//dev Make a couple of smaller files to enhance quality of code.

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
      tasks: [],
      mouseBtnStatus: false,
      leftBar: true,
    }
  },
  mutations: {
    //Calendar system mutations
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
    updateViewMode(state, newMode) {
      state.date.viewMode = newMode;
    },
    getTotalDays(yr, mnt) { // consider using it in actions instead of repeating one line of code moultiple times
      return new Date(yr, mnt + 1, 0).getDate();
    },
    //Account system mutations
    setUserData(state, username, email) {
      state.auth.username = username;
      state.auth.email = email;
    },
    //Error messages in loginRegister/register/recovery views mutations
    setErrorMsg(state, msg){
      console.log('error msg data : ', msg);
      state.auth.errorMessage = msg;
    },
    clearErrorMsg(state){
      state.auth.errorMessage = null;
    },
    changeMouseBtn(state, bool){
      state.mouseBtnStatus = bool;
    },
    SwitchLBar(state){
      state.leftBar = !state.leftBar;
    }
  },

  actions: {
    //Account system actions
    async registerUser({state, commit}, userData) {
      const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        credentials: 'include',
        sameSite: 'strict',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'http://localhost:5173',
          'Cookie': 'sameSite=strict',
        },
        body: JSON.stringify({email: userData.email, password: userData.password, username: userData.username}),
      });
      const data = await response.json();
      if(data.errorMessage){
        console.log('loginRegister error : ', data.errorMessage);
        commit("setErrorMsg", data.errorMessage);
      }else{
        await router.push('/');
      }
    },
    async loginUser({state, commit}, userData) {
      try {
        const response = await fetch('http://localhost:3000/login', {
          method: 'POST',
          credentials: 'include',
          sameSite: 'strict',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:5173',
          },
          body: JSON.stringify({email: userData.email, password: userData.password}),
        });
        const data = await response.json();
        if (!response.ok) {
          commit("setErrorMsg", data.errorMessage);
        }else{
        commit("setUserData", response.body.username, response.body.email);
        }
      } catch (err) {
        console.log(err); //dev
      }
    },
    //Password recovery actions
    async changePassword({state}, userData){ //add token here to authorize user !!! IMPROTANT ASF -- Probably done but check later
      await fetch('http://localhost:3000/changePassword', {
        method: 'POST',
        credentials: 'include',
        sameSite: 'strict',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'http://localhost:5173',
          'Cookie': 'sameSite=strict',
        },
        body: JSON.stringify({password: userData.password, token : userData.token}),
      })
    },
    async recoveryPassword({state, commit}, userData) {
      try{
        await fetch('http://localhost:3000/passwordRecoveryToken', {
          method: 'POST',
          credentials: 'include',
          sameSite: 'strict',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:5173',
            'Cookie': 'sameSite=strict',
          },
          body: JSON.stringify({email: userData.email, username: ''}),
        });
      }catch(err){
        console.log(err);
      }
    },
    //Calendar system actions
    async changeMonth({state}, num) {
      state.date._month += num;

      if (state.date._month < 1) {
        state.date._month = 12;
        state.date._year--;
      }
      if (state.date._month > 12) {
        state.date._month = 1;
        state.date._year++;
      }
      await store.dispatch("fetchTasks");
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
      state.date.display = [];

      let displayDays = state.date._day;
      for (let i = 0; i < 7; i++, displayDays++) {
        if (displayDays > new Date(state.date._year, state.date._month, 0).getDate()) {
          displayDays = 1;
        }
        state.date.display.push(displayDays);
      }
    },
    //tasks
    async loadTasks({state}, days){ //used to load tasks from local vuex tasks variable

    },
    async fetchTasks({state}){ //fetches tasks from server
      console.log('fetching tasks for month :', state.date._month); //dev handle to return next and before month on backend.
      try{
        const rawTasks = await fetch("http://localhost:3000/tasksFetch", {
          method: 'POST',
          credentials: 'include',
          sameSite: 'strict',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:5173',
            'Cookie': 'sameSite=strict',
          },
          body: JSON.stringify({
            month: state.date._month,
            year: state.date._year,
          }),
        });
        const taskList = await rawTasks.json();
        console.log("response from fetchTasks :", taskList);

      }catch(err){
        console.log(err);
      }
    },
    async pushTask(state, task){
      console.log("pushing task :", task);
      try{
        await fetch('http://localhost:3000/pushTask', {
          method: 'POST',
          credentials: 'include',
          sameSite: 'strict',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:5173',
            'Cookie': 'sameSite=strict',
          },
          body: JSON.stringify({task}),
        });
      }catch(err){
        console.log(err);
      }
    },
  },
});



export default store;