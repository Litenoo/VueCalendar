<script setup>

import WeekGrid from './mainContent/Week.vue';
import DayGrid from './mainContent/Day.vue';
import MonthGrid from './mainContent/Month.vue';
import YearGrid from './mainContent/Year.vue';
import store from '../store';

</script>

<template>
  <div id="calendar">
    <DayGrid v-if="store.state.currentDate.view === 'One-day'" />
    <WeekGrid v-else-if="store.state.currentDate.view === 'Week'" />
    <MonthGrid v-else-if="store.state.currentDate.view === 'Month'" />
    <YearGrid v-else />
  </div>
</template>

<style>
#calendar {
  flex: 11;
  padding: 4px;
}
</style>