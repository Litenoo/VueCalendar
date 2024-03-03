<template>
  <div class="columnGrid">
    <div class="dayName">
      <span class="monthDay">{{ dayInfo.monthDay }}</span>
      <span class="weekDay">{{ dayInfo.weekDay }}</span>
    </div>
  </div>
  <div class="columnGrid" id="mainGrid">
    <GridColumn />
    <GridColumn />
    <GridColumn />
    <GridColumn />
    <GridColumn />
    <GridColumn />
    <GridColumn />
  </div>
</template>

<script setup>
import GridColumn from './GridColumn.vue';
let dayInfo = { monthDay: 1, weekDay: 'Friday' };
</script>

<style scoped>
#grid {
  display: grid;
  grid-column: 1;
  grid-row: 100px;
}
#mainGrid{
  overflow-y: scroll;
  max-height: 89vh;
}

.columnGrid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  border-bottom: 1px solid #d1d1d1;
  padding: 4px;
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
</style>