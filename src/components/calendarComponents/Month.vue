<script setup>

import { computed } from 'vue';
import store from '../../store';

function createCalendar(year, month) {
  // console.log("CREATING CALENDAR with date year: " + year + "and month : " + month); DEV
  function getTotalDays(yr, mnt) {
    const lastDay = new Date(yr, mnt + 1, 0).getDate();
    return lastDay;
  }

  const calendar = [];

  const currentDate = new Date(year, month);
  let startDay = currentDate.getDay();
  if(startDay === 0){
    startDay = 7;
  }
  let today = currentDate.getDate();

  let monthLength = getTotalDays(year, month);
  let beforeMonthLength = getTotalDays(year, month - 1);

  for (let i = 0; i < startDay - 1; startDay--, beforeMonthLength--) {
    calendar.unshift({ day: beforeMonthLength, today: false });
  }

  for (let i = 1; i <= monthLength; i++) {
    if (today === i && currentDate.day && currentDate.month === month, currentDate.year === year) {
      calendar.push({ day: i, today: true });
    } else {
      calendar.push({ day: i, today: false });
    }
  }

  let i = 1;
  while (calendar.length < 42) {
    calendar.push({ day: i, today: false });
    i++;
  }
  return calendar;
}



function updateWeekday(weekDay) {
  store.commit("setDate", weekDay, null);
}

let calendar = computed(() => createCalendar(store.state.date._year, store.state.date._month -1));


</script>

<template>
  <div id="monthDays">
    <div v-for="day in calendar" @click="updateWeekday(day.day)" class="miniDay">
      <span class="mini-calendar__day">{{ day.day }}</span>
    </div>
  </div>
</template>

<style scoped>
#monthDays {
  display: flex;
  justify-items: center;
  align-items: center;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
  overflow: scroll;
  scroll-behavior: smooth;
}

#monthDays::-webkit-scrollbar {
  display: none;
}

.miniDay {
  cursor: pointer;
  overflow: hidden;
  border-right: 1px solid #c4c4c4;
  border-bottom: 1px solid #c4c4c4;
  min-height: 20%;
  transition: 0.2s;
  flex: 0 0 14%;
}

.miniDay:hover {
  transition: 0.35s;
  background-color: #f1f1f1;
}

.mini-calendar__day {
  display: block;
  padding: 8px 0 0 12px;
}
</style>