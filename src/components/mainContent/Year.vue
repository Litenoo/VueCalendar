<script setup>
import MiniCalendar from '../leftBar/MiniCalendar.vue';

</script>

<template>
  <div id="calendarContainer">
    <div> January
      <MiniCalendar :month=0 />
    </div>
    <div> February
      <MiniCalendar :month=1 />
    </div>
    <div> March
      <MiniCalendar :month=2 />
    </div>
    <div> April
      <MiniCalendar :month=3 />
    </div>
    <div> May
      <MiniCalendar :month=4 />
    </div>
    <div> June
      <MiniCalendar :month=5 />
    </div>
    <div> July
      <MiniCalendar :month=6 />
    </div>
    <div> August
      <MiniCalendar :month=7 />
    </div>
    <div> September
      <MiniCalendar :month=8 />
    </div>
    <div> October
      <MiniCalendar :month=9 />
    </div>
    <div> November
      <MiniCalendar :month=10 />
    </div>
    <div> December
      <MiniCalendar :month=11 />
    </div>
  </div>
</template>

<style>
#calendarContainer {
  display: flex;
  align-items: center;
  justify-content: center;
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
