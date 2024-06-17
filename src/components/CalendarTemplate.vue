<script setup>
import WeekGrid from '@/components/calendarComponents/Week.vue';
import DayGrid from '@/components/calendarComponents/Day.vue';
import MonthGrid from '@/components/calendarComponents/Month.vue';
import YearGrid from '@/components/calendarComponents/Year.vue';
import store from '../store';
</script>

<template>
  <div id="calendar">
    <DayGrid v-if="store.state.date.viewMode === 'Day'" />
    <WeekGrid v-else-if="store.state.date.viewMode === 'Week'" />
    <MonthGrid v-else-if="store.state.date.viewMode === 'Month'" />
    <YearGrid v-else />
  </div>
</template>

<style>
#calendar {
  flex: 11;
  padding: 4px;
}
</style>