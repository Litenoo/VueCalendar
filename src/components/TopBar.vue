<script setup>
import LeftOptions from '@/components/calendarComponents/topBar/LeftOptions.vue'
import RightOptions from '@/components/calendarComponents/topBar/RightOptions.vue'

function hideLeftBar() {

}
</script>

<template>
  <div id="topBar">
    <LeftOptions />
    <RightOptions />
  </div>
</template>

<style>
#topBar {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 0 6px 0 ;
  border-bottom: 1px solid #a1a1a1;
}
</style>