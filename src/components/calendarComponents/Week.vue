<script setup>
import GridColumn from './TaskManagement/GridColumn.vue';
import HoursColumn from './HoursDisplay.vue';
import store from '../../store';
import { ref, computed, toRaw } from 'vue';

store.dispatch("changeDay", 0);
const weekDays = ["Monday", "Wednesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

let weekDaysN = computed(()=> {
  let rawData = store.state.date.display;
  rawData = toRaw(rawData);
  let res = [];
  for(let i = 0; i < 7; i++){
    // console.log("Loop, ", ref(rawData[i]))
    res.push(ref(rawData[i]));
  }
  store.dispatch("fetchTasks", {days : rawData, month : store.state.date._month});
  return res;
});
</script>

<template>
  <div id="gridContainer">
    <div class="columnGrid">
      <div class="dayName" v-for="(day, index) in weekDaysN">
        <span class="monthDay">{{ day }}</span>
        <span class="weekDay">{{ weekDays[index] }}</span>
      </div>
    </div>
    <div id="mainGrid">
      <HoursColumn />
      <div v-for="day in weekDaysN">
        <GridColumn :day="day" />
      </div>
    </div>
  </div>
</template>