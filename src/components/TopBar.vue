<script setup>
import LeftOptions from './TopOptions.vue'
import RightOptions from './RightOptions.vue'

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
  padding: 6px;
}
</style>