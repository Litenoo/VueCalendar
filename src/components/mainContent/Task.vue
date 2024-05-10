<script setup>
import { ref } from 'vue';
const props = defineProps({
  task : Object,
});
</script>

<template>
  <div class="task" :style="{ backgroundColor: task.color, marginTop: task.size.start, height: task.size.end }">
    task : {{task.size.end}}
  </div>
</template>

<style scoped>
.task{
  width: 100%;
  border-radius: 4px;
  border: 1px solid black;
  position: absolute;
  transition: 0.1s;
  user-select: none;
}
</style>