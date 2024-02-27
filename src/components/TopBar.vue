<script setup>
import LeftOptions from './topBar/LeftOptions.vue'
import RightOptions from './topBar/RightOptions.vue'

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
  padding: 6px 0px 6px 0px ;
  border-bottom: 1px solid #a1a1a1;
}
</style>