<script setup>

import WeekGrid from './mainContent/Week.vue';
import DayGrid from './mainContent/Day.vue';

</script>

<template>
  <div id="calendar">
    <WeekGrid />
  </div>
</template>

<style>
#calendar {
  flex: 11;
  padding: 4px;
}
</style>