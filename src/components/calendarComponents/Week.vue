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
    if(rawData.includes(1) && [31, 30, 29].some(arg => rawData.includes(arg))){
      res.push({day : ref(rawData[i]), isEdge : true});
    }else{
      res.push({day : ref(rawData[i]), isEdge : false});
    }
  }
  store.dispatch("fetchTasks", {days : rawData, month : store.state.date._month});
  return res;
});
</script>

<template>
    <div class="columnGrid">
      <HoursColumn />

      <div class="dayName" v-for="(day, index) in weekDaysN">
        <span class="monthDay">{{ day.day }}</span>
        <span class="weekDay">{{ weekDays[index] }}</span>
        <GridColumn :day="day" :edgeDisplay="day.isEdge"/>
      </div>
    </div>
</template>

<style>

</style>