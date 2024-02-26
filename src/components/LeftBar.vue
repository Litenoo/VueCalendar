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
  box-sizing: border-box;
  border-right: 1px solid #c4c4c4;
  padding: 6px 0px 0px 6px ;
  flex: 3;
}
</style>