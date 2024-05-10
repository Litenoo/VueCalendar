<script setup>
import GridColumn from './GridColumn.vue';
import HoursColumn from './HoursDisplay.vue';
import store from '../../store';
import { computed } from 'vue';

const days = [
{ monthDay: computed(()=> store.state.date.display[0]), weekDay: 'Friday' }, 
]

</script>


<template>
  <div id="DayContainer">
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

<style scoped>

#mainGrid {
  display: grid;
  overflow-y: scroll;
  border-bottom: 1px solid #d1d1d1;
  height: calc(100vh - 112px);
  grid-template-columns: 20px 1fr;
}

#DayContainer {
  /* change its name */
  width: 100%;
}
</style>