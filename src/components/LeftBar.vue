<script setup>
import { ref } from 'vue';
import MiniCalendar from './leftBar/MiniCalendar.vue';
import ManageTab from './leftBar/ManageTab.vue';

function getCurrentDate() {
  const date = new Date();
  return { year: date.getFullYear(), month: date.getMonth(), weekDay: date.getDay(), monthDay:date.getDate() };
}

const currentDate = ref(getCurrentDate());
</script>

<template>
  <div id="leftBar">
    <MiniCalendar :currentCalendar="currentDate" />
    <ManageTab />
  </div>
</template>

<style>
#leftBar {
  border-right: 1px solid #c4c4c4;
  width: 210px;
  flex: 3;
  max-width: 250px;
}
</style>