<script setup>
import MiniCalendar from './leftBar/MiniCalendar.vue'
import ManageTab from './leftBar/ManageTab.vue'
</script>

<template>
  <div id="leftBar">
    <MiniCalendar />
    <ManageTab />
  </div>
</template>

<style>
#leftBar{
  border-right: 1px solid #c4c4c4;
  width: 210px;
  flex: 3;
  max-width: 300px;
}
</style>