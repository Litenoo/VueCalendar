<template>
  <div id="gridContainer">
    <div class="columnGrid">
      <div class="dayName" v-for="day in days">
        <span class="monthDay">{{ day.monthDay }}</span>
        <span class="weekDay">{{ day.weekDay }}</span>
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

<script setup>
import GridColumn from './GridColumn.vue';
import HoursColumn from './HoursDisplay.vue';

let dayInfo = { monthDay: 1, weekDay: 'Friday' };

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