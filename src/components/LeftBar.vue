<script setup>
import MiniCalendar from './leftBar/MiniCalendar.vue';
import Nav from './topBar/Nav.vue';
import ViewSelect from './leftBar/ViewSelect.vue';


</script>

<template>
  <div id="leftBar">
    <Nav global:false />
    <MiniCalendar globalDisplay />
    <ViewSelect />
  </div>
</template>

<style scoped>
#leftBar {
  border-right: 1px solid #c4c4c4;
  width: 210px;
  flex: 3;
  max-width: 250px;
}
</style>
