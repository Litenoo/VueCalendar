import { createStore } from 'vuex';

const date = new Date()

const store = createStore({
  state() {
    return{
      currentDate : {month : date.getMonth(), year : date.getFullYear()},
    }
  },
  mutations : {
    increment(state){
      if(state.currentDate.month === 11){
        state.currentDate.year++;
        state.currentDate.month = 0;
      }else{
        state.currentDate.month++;
      }
      console.log('date after incrementation : ', state.currentDate.month, state.currentDate.year)
    },
    decrement(state){
      if(state.currentDate.month === 0){
        state.currentDate.year--;
        state.currentDate.month = 11;
      }else{
        state.currentDate.month--;
      }
      console.log('date after decrementation : ', state.currentDate.month, state.currentDate.year)
    },
    setDate(state, newMonth){
      
    },
  }
})

export default store;