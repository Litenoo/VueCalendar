<script setup>
import { ref } from 'vue';
import LeftArr from '../icons/LeftArrow.vue'
import RightArr from '../icons/RightArrow.vue'

const props = defineProps({
  size: Number,
  dateToDisplay: String,
})
</script>

<template>
  <div id="nawArrows">
    <div class="topBtn">
      <LeftArr :height="size || 18" @click="$emit('updateCalendarState', -1)"/>
    </div>
    <div class="topBtn">
      <RightArr :height="size || 18" @click="$emit('updateCalendarState', 1)"/>
    </div>
  </div>
  <span id="selectedDate" :font-size="size || 25" >{{dateToDisplay}}</span>
</template>