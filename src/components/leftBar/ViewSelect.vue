<script setup>
import store from '../../store';
import { ref, watch } from 'vue';

const viewMode = ref('Week')

watch(()=>{
  return viewMode.value;
}, ()=>{
  store.commit("updateViewMode", viewMode)
})

</script>

<template>
  <select name="selectView" id="selectView" v-model="viewMode">
    <option>One-day</option>
    <option>Week</option>
    <option>Month</option>
    <option>Year</option>
  </select>
</template>