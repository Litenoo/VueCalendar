<script setup>

import { computed } from 'vue';
import store from '../../../store.js';

function createCalendar(year, month) {
  console.log('creating minimonth with month : ', month, 'year :', year);
  function getTotalDays(yr, mnt) {
    return new Date(yr, mnt + 1, 0).getDate();
  }

  const calendar = [];

  const currentDate = new Date(year, month);
  let startDay = currentDate.getDay();
  if(startDay === 0){ startDay = 7; }
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

const daysNames = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

let calendar = computed(() => createCalendar(store.state.date._miniYear, store.state.date._miniMonth -1));

</script>

<template>
  <div id="miniCalendar">
    <div id="weekDays"><span v-for="weekDay in daysNames" class="miniDay">{{ weekDay }}</span></div>
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
  flex: 1;
  width: calc(100% - 18px);
  min-height: 120px;
  padding: 9px;
}

#miniDays {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  cursor: pointer;
  width: 100%;
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

.miniDay span {
  display: flex;
  justify-content: center;
  min-width: 13.25px;
}

.mini-calendar__day {
  transition: 0.4s;
  border-radius: 100%;
  padding: 7px;
}

.miniDay:hover .mini-calendar__day {
  background-color: #f1f1f1;
  text-align: center;
  transition: 0.2s;
}

.miniDay:hover {
  cursor: pointer;
}
</style>