<script setup>
import GridColumn from './GridColumn.vue';
import HoursColumn from './HoursDisplay.vue';
import store from '../../store';
import { computed, toRaw, isProxy } from 'vue';

let weekDaysN = computed(()=> {
  console.log('computedCalled !')
  let rawData = store.state.currentDate.weekDisplay;
  rawData = toRaw(rawData)
  let res = []
  for(let i = 0; i < 6; i++){
    res.push(rawData[i]);
  }
  return res;
})

function weekDay(){
  setInterval(()=>{console.log(weekDaysN.value)}, 2000)
}

weekDay();


const days = [
  { monthDay: 1, weekDay: 'Friday' },
  { monthDay: 2, weekDay: 'Saturday' },
  { monthDay: 3, weekDay: 'Sunday' },
  { monthDay: 4, weekDay: 'Monday' },
  { monthDay: 5, weekDay: 'Wednsday' },
  { monthDay: 6, weekDay: 'Tuesday' },
  { monthDay: 7, weekDay: 'Thursday' },
]
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
      <GridColumn />
      <GridColumn />
      <GridColumn />
      <GridColumn />
      <GridColumn />
      <GridColumn />
      <GridColumn />
    </div>
  </div>
</template>

<style scoped>
/* move all CSS to global. Do the same in ./Day.vue */
#grid {
  display: grid;
  grid-column: 1;
  grid-row: 100px;
  width: 100%;
}

#mainGrid {
  overflow-y: scroll;
  height: calc(100vh - 112px);
  display: grid;
  grid-template-columns: 20px repeat(7, 1fr);
  border-bottom: 1px solid #d1d1d1;
}

.columnGrid {
  display: flex;
  grid-template-columns: repeat(7, 1fr);
  border-bottom: 1px solid #d1d1d1;
  padding: 5px 5px 0px 0px;
  margin: 0px 12px 0px 20px;
}

.column {
  height: 100%;
}

.dayName {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.monthDay {
  font-size: 26px;
  color: #505050;
}

.weekDay {
  font-size: 13px;
}

#mainContentContainer {
  display: flex;
  width: 100%;
}

#gridContainer {
  /* change its name */
  width: 100%;
}
</style>