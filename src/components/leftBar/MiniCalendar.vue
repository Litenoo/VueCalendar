<script setup>

import Nav from '../topBar/Nav.vue';
import {ref, computed} from 'vue';

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const daysNames = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

let currentDate = getCurrentDate();
let today = currentDate.day;

function getCurrentDate() {
  const date = new Date();
  return {year:date.getFullYear(), month:date.getMonth(), day:date.getDay()};
}

function createCalendar(year, month) {

  function getTotalDays(year, month) {
    const lastDay = new Date(year, month, 0);
    return lastDay.getDate();
  }

  const calendar = [];

  const monthLength = getTotalDays(year, month);
  let beforeMonthLength = getTotalDays(year, month - 1);

  const currentDate = new Date();
  currentDate.setDate(1);
  let startDay = currentDate.getDay();

  for (let i = 0; i < startDay - 1; startDay--, beforeMonthLength--) {
      calendar.unshift({day : beforeMonthLength, today: false});
  }
  for (let i = 1; i <= monthLength; i++) {
    if(today === i && currentDate.day && currentDate.month === month, currentDate.year === year){
      calendar.push({day : i, today: true});
    }else{
      calendar.push({day : i, today: false});
    }
  }
  let i = 1;
  while (calendar.length < 42) {
    calendar.push({day:i, today:false});
    i++;
  }
  return calendar;
}

let calendar = createCalendar(currentDate.year, currentDate.year);

const calendarValid = computed(()=>{

})
</script>

<template>
  <div id="miniCalendar">
    <div id="calendarTop">
      <Nav size="12" />
    </div>
    <div id="weekDays"><span v-for="weekDay in daysNames" class="miniDay" >{{ weekDay }}</span></div>
    <div id="miniDays">
      <div v-for="day in calendar" class="miniDay">
        <span class="mini-calendar__day">{{ day.day }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
#weekDays {
  display: flex;
  width: 100%;
}

#miniCalendar {
  width: calc(100% - 18px);
  min-height: 120px;
  padding: 9px;
}

#miniDays {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  cursor: pointer;
}

.miniDay {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  width: calc(14.2% - 14px);
  min-height: 16px;
  min-width: 13.25px;
  padding: 0 7px;
}

.miniDay span {
  min-width: 13.25px;
  display: flex;
  justify-content: center;
}

.mini-calendar__day {
  transition: 0.4s;
  border-radius: 100%;
  padding: 7px;
  aspect-ratio: 1/1;
}

.miniDay:hover .mini-calendar__day {
  background-color: #f1f1f1;
  transition: 0.2s;
  text-align: center;
}

.miniDay:hover {
  cursor: pointer;
}

#calendarTop {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 6px 6px 0px;
}
</style>