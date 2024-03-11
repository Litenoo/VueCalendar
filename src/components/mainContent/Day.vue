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
      <GridColumn />
    </div>
  </div>
</template>

<script setup>
import GridColumn from './GridColumn.vue';
import HoursColumn from './HoursDisplay.vue';
import store from '../../store';
import { computed } from 'vue';


const days = [
{ monthDay: computed(()=> store.state.currentDate.day), weekDay: 'Friday' }, 
]
</script>

<style scoped>
/* Move CSS from here */
#grid {
  display: grid;
  grid-column: 1;
  grid-row: 100px;
  width: 100%;
}

#mainGrid {
  display: grid;
  overflow-y: scroll;
  border-bottom: 1px solid #d1d1d1;
  height: calc(100vh - 112px);
  grid-template-columns: 20px 1fr;
}

.columnGrid {
  display: flex;
  border-bottom: 1px solid #d1d1d1;
  grid-template-columns: repeat(7, 1fr);
  padding: 5px 5px 0px 0px;
  margin: 0px 13px 0px 22px;
}

.column {
  height: 100%;
}

.dayName {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
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