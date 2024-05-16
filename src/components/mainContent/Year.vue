<script setup>
import MiniCalendar from './MiniMonthView.vue';
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
</script>

<template>
  <div id="calendarContainer">
    <div v-for="index in 12" :key="index-1"> {{ monthNames[index - 1] }}
      <MiniCalendar :month="index - 1" />
    </div>
  </div>
</template>

<style>
#calendarContainer {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 14px;
  overflow-y: scroll;
}

#calendarContainer>div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1 0 21%;
  min-width: 240px;
  font-size: 15px;
  box-sizing: border-box;
  padding: 20px;
}

#calendarContainer>div>div {
  max-width: 270px;
}
</style>
