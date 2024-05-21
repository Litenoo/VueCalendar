<script setup>

import Brand from './Brand.vue';
import Nav from './Nav.vue';

function handleUpdateCalendar(value){
  console.log('updateCalendar executed in leftoptions ! With value : ', value);
}
</script>

<template>
  <div class="container">
    <Brand />
    <div class="container">
      <Nav :navClass="'topBtn'" @updateCalendarState="handleUpdateCalendar" v-bind:global="true"/>
    </div>
  </div>
</template>

<style>
.container{
  flex: 2;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 44%;
}
</style>