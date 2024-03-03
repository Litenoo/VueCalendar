<script setup>
import { ref } from 'vue';
import MiniCalendar from './leftBar/MiniCalendar.vue';
import ManageTab from './leftBar/ManageTab.vue';

function getDate(year, month) {
  const date = new Date(year, month);
  return { year: date.getFullYear(), month: date.getMonth(), weekDay: date.getDay(), monthDay: date.getDate() };
}

function updateCalendarState(year, month) {
  currentDate.value = getDate(year, month);
}

function handleUpdateCalendar(value){
  globalMonth = globalMonth + value;
  updateCalendarState(2024, globalMonth);
}

const onceDate = new Date();
let globalMonth = onceDate.getMonth() -1;
let currentDate = ref(getDate(onceDate.getFullYear(), globalMonth));


</script>

<template>
  <div id="leftBar">
    <MiniCalendar :currentCalendar="currentDate" @updateCalendar="handleUpdateCalendar"/>
    <ManageTab/>
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