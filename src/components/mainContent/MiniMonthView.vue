<script setup>
const props = defineProps({
  days: Array,
})
</script>

<template>
  <div v-for="day in props.days" class="miniDay">
    <span class="mini-calendar__day">{{ day.day }}</span>
  </div>
</template>