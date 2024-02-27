<script setup>

import LeftArr from '../icons/LeftArrow.vue'
import RightArr from '../icons/RightArrow.vue'
import Nav from '../topBar/Nav.vue'

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const weekDays = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

let dateDisplay = getCurrentDate();

function getCurrentDate() {
  const date = new Date();
  return `${monthNames[date.getMonth()]} ${date.getFullYear()}`
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
    calendar.unshift(beforeMonthLength);
  }
  for (let i = 1; i <= monthLength; i++) {
    calendar.push(i);
  }
  let i = 1;
  while (calendar.length < 42) {
    calendar.push(i);
    i++;
  }
  return calendar;
}

let calendar = createCalendar(2024, 2);
</script>

<template>
  <div id="miniCalendar">
    <div id="calendarTop">
      <Nav size="12"/>
    </div>
    <div id="weekDays"><span v-for="weekDay in weekDays" class="miniDay">{{ weekDay }}</span></div>
    <div id="miniDays"><span v-for="day in calendar" class="miniDay">{{ day }}</span></div>
  </div>
</template>

<style>
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
  margin: none;
}

.miniDay {
  background-color: #ffffff;
  margin: none;
  transition: 0.4s;
  border-radius: 100%;
  font-size: 12px;
  padding: 7px;
  width: calc(14.2% - 14px);
  text-align: center;
  min-height: 16px;
}

.miniDay:hover {
  background-color: #f1f1f1;
  cursor: pointer;
  transition: 0.2s;
}

#calendarTop {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 6px 6px 0px;
}
</style>