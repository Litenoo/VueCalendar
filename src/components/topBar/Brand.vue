<script setup>
import Bars from '../icons/Bars.vue';

function hideLeftBar() {
  console.log('Hide left bar');
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
  color: #505050;
  font-size: 24px;
}

.topOption{
  transition: 0.1s;
}

.topOption:hover {
  background-color: #f1f1f1;
  cursor: pointer;
  padding: 5px;
  border-radius: 16px;
}
.topOption:active {
  background-color: #e6e6e6;
  transition: 0.06s;
  border-radius: 20px;
}
</style>