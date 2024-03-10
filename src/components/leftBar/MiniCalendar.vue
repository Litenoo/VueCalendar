<script setup>

import { computed, watch } from 'vue';
import store from '../../store';

function createCalendar(year, month) {
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

const params = defineProps({
  globalDisplay: Boolean,
  month: Number,
})


const daysNames = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

const emit = defineEmits(['updateCalendar']);

let calendar;

if (params.globalDisplay) {
  calendar = computed(() => createCalendar(store.state.currentDate.year, store.state.currentDate.month));
  watch(() => {
    return store.state.currentDate.month;
  }, () => {
    createCalendar(store.state.currentDate.year, store.state.currentDate.month);
  })
} else {
  calendar = computed(() => createCalendar(store.state.currentDate.year, params.month));
}

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

#calendarTop {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 6px 6px 0;
}
</style>