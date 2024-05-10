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

</style>