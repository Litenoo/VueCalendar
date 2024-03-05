<template>
  <div id="HoursDisplay">
    <div v-for="hour in hours">{{ hour }}</div>
  </div>
</template>

<script setup>

import { ref } from 'vue';

const hours = ref([]);
for (let i = 1; i <= 23; i++) {
  hours.value.push(`${i}`)
}

</script>

<style scoped>
#HoursDisplay{
  padding-top: 39px;
  width: 20px;
}
#HoursDisplay div{
  height: 46px;
  font-size: 12px;
  color: #505050;
  text-align: center;
}
</style>