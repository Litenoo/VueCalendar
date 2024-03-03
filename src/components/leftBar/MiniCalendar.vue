<script setup>

import Nav from '../topBar/Nav.vue';
import { ref, computed, watch } from 'vue';

function createCalendar(year, month) {
  function getTotalDays(yr, mnt) {
    const lastDay = new Date(yr, mnt + 1, 0).getDate();
    return lastDay;
  }

  const calendar = [];

  const currentDate = new Date(year, month);
  let startDay = currentDate.getDay();

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

function handleUpdateCalendar(value) {
  emit('updateCalendar', value);
}

const props = defineProps({
  currentCalendar: Object,
});

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const daysNames = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

const emit = defineEmits(['updateCalendar']);

let today = props.currentCalendar;
let currentDispDate = ref(`${monthNames[props.currentCalendar.month]} ${props.currentCalendar.year}`);
let calendar = createCalendar(2024, 1);

watch(() => {
  return props.currentCalendar;
}, (newCalendar) => {
  calendar = createCalendar(newCalendar.year, newCalendar.month);
});
watch(() => {
  return props.currentCalendar.month;
}, (newMonth) => {
  currentDispDate = `${monthNames[newMonth]} ${props.currentCalendar.year}`;
});

</script>

<template>
  <div id="miniCalendar">
    <div id="calendarTop">
      <Nav size=12 @updateCalendarState="handleUpdateCalendar" :dateToDisplay="currentDispDate" />
    </div>
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