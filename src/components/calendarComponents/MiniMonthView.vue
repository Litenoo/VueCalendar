<script setup>
import { defineProps } from 'vue'
import store from "../../store.js";
const props = defineProps({
  month: Number,
});
const month = props.month;
function createCalendar(year, month) {
  console.log('creating minimonth with month : ', month, 'year :', year);
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
let calendar = createCalendar(store.state.date._year, month);

// CHANGE NAME OF THIS FILE !!!!!!!!!!! IMPORTANT dev
</script>

<template>
    <div id="weekDays"><span v-for="weekDay in daysNames" class="miniDay">{{ weekDay }}</span></div>
    <div id="miniDays">
      <div v-for="day in calendar" class="miniDay">
        <span class="mini-calendar__day">{{ day.day }}</span>
      </div>
    </div>
</template>

<style scoped>
#miniDays {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  cursor: pointer;
  width: 100%;
}
.mini-calendar__day {
  transition: 0.4s;
  border-radius: 100%;
  padding: 7px;
}
.miniDay {
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(14.2% - 14px);
  min-height: 16px;
  min-width: 13.25px;
  padding: 0 7px;
  font-size: 12px;
}
</style>