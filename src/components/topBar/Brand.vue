<script setup>
import Bars from '../icons/Bars.vue'

function hideLeftBar() {
  console.log('Hide left bar')
}

</script>

<template>
  <div id="conatiner">
  <button class="topOption" @click="hideLeftBar">
    <Bars />
  </button>
  <div id="brand"><img src="" alt="">Calendar</div>
</div>
</template>

<style>
#conatiner{
  display: flex;
  justify-content: center;
  align-items: center;
}
#brand {
  font-size: 24px;
  color: #505050;
}

.topOption{
  transition: 0.1s;
}

.topOption:hover {
  padding: 5px;
  background-color: #f1f1f1;
  cursor: pointer;
  border-radius: 16px;
}
.topOption:active {
  transition: 0.06s;
  background-color: #e6e6e6;
  border-radius: 20px;
}
</style>