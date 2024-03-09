<script>
import MiniMonth from './MiniMonthView.vue';
const dispDays = [
  {day:1, today:false},
  {day:2, today:false},
  {day:3, today:false},
]
</script>

<template>
 <MiniMonth days={{ dispDays }}/>
</template>
