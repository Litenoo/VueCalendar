<script setup>
import { ref } from 'vue';
import LeftArr from '../icons/LeftArrow.vue'
import RightArr from '../icons/RightArrow.vue'


const selectedDate = ref('25 February 2024')
</script>

<template>
  <div id="nawArrows">
    <div class="topBtn">
      <LeftArr />
    </div>
    <div class="topBtn">
      <RightArr />
    </div>
  </div>
  <span id="selectedDate">{{ selectedDate }}</span>
</template>

<style>
#nawArrows {
  display: flex;
  padding-top: 3px;
}
.topBtn{
  transition: 0.1s;
}
.topBtn:hover {
  transition: 0.1s;
  background-color: #d3d3d3;
  cursor: pointer;
  border-radius: 12px;
}
.topBtn:active {
  transition: 0.1s;
  background-color: #c4c4c4;
  cursor: pointer;
  border-radius: 14px;
}
#selectedDate{
  color: #505050;
  font-weight: 400;
  font-size: 19px;
  text-align: center;
}
</style>
