<template>
  <div id="containerG">
    <div class="columnGrid">
      <div class="dayName">
        <span class="monthDay">{{ dayInfo.monthDay }}</span>
        <span class="weekDay">{{ dayInfo.weekDay }}</span>
      </div>
    </div>
    <div id="mainGrid">
      <HoursColumn />
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
</script>

<style scoped>
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
  grid-template-columns: 0.16fr repeat(7, 1fr);
  border-bottom: 1px solid #d1d1d1;
}

.columnGrid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  border-bottom: 1px solid #d1d1d1;
  padding: 5px 5px 0px 5px;
}

.column {
  height: 100%;
}

.dayName {
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

#containerG {
  /* change its name */
  width: 100%;
}
</style>