<script setup>
import GridColumn from './GridColumn.vue';
import HoursColumn from './HoursDisplay.vue';
import store from '../../store';
import { computed, toRaw } from 'vue';

store.dispatch("changeDay", 0)

let weekDaysN = computed(()=> {
  let rawData = store.state.date.display;
  rawData = toRaw(rawData)
  let res = []
  for(let i = 0; i < 7; i++){
    res.push(rawData[i]);
  }
  return res;
});
</script>

<template>
  <div id="gridContainer">
    <div class="columnGrid">
      <div class="dayName" v-for="day in weekDaysN">
        <span class="monthDay">{{ day }}</span>
        <!-- <span class="weekDay">{{ day.weekDay }}</span> -->
      </div>
    </div>
    <div id="mainGrid">
      <HoursColumn />
      <!-- Instead of GridColumn moultiple times make v-for -->
      <div v-for="index in 7" :key="index">
        <GridColumn />
      </div>
    </div>
  </div>
</template>