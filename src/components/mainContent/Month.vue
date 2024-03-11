<script setup>

import { computed, watch } from 'vue';
import store from '../../store';

function createCalendar(year, month) { //When go to 2023 (october for example its not displayed correct.)
  function getTotalDays(yr, mnt) {
    const lastDay = new Date(yr, mnt + 1, 0).getDate();
    return lastDay;
  }

  const calendar = [];

  const currentDate = new Date(year, month);
  let startDay = currentDate.getDay();
  let today = currentDate.getDate();

  let monthLength = getTotalDays(year, month);
  let beforeMonthLength = getTotalDays(year, month - 1);

  if(startDay === 1){ //check if there is better way to occure that case
    startDay = 6;
  }

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
  store.commit("setDate", weekDay, null)
}

const emit = defineEmits(['updateCalendar']);

let calendar = computed(() => createCalendar(store.state.currentDate.year, store.state.currentDate.viewMonth));

watch(() => {
  return store.state.currentDate.viewMonth;
}, () => {
  createCalendar(store.state.currentDate.year, store.state.currentDate.viewMonth);
})

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
  height: 77.4vh;
  /* change something with width */
  width: 100%;
}

.miniDay {
  cursor: pointer;
  border-right: 1px solid #c4c4c4;
  border-bottom: 1px solid #c4c4c4;
  min-width: 14.2%;
  min-height: 20%;
  transition: 0.2s;
  flex: 1;
}

.miniDay:hover {
  transition: 0.35s;
  background-color: #f1f1f1;
}

.mini-calendar__day {
  display: block;
  padding: 8px 0px 0px 12px;
}
</style>

<!-- 
  There is an error on year display when counter will run out of current year 
-->