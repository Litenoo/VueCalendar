<script setup>
import store from '../store.js';
import TopBar from '../components/TopBar.vue';
import LeftBar from '../components/LeftBar.vue';
import Calendar from '../components/CalendarTemplate.vue';
</script>

<template>
  <div id="app">
    <TopBar />
    <div id="mainContent">
      <LeftBar v-if="store.state.leftBar" />
      <Calendar />
    </div>
  </div>
</template>

<style scoped>
#mainContent {
  display: flex;
  flex-direction: row;
  height: 100%;
}
#app{
  height: 100vh;
  overflow: hidden;
}
</style>
