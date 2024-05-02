<script setup>
const props = defineProps({
  task : Object,
});
const color = props.task.color;
const start = props.task.duration.start;
const end = props.task.duration.end;
</script>

<template>
  <div class="task">
    task : {{task.title}}
  </div>
</template>

<style scoped>
.task{
  width: 100%;
  border-radius: 4px;
  border: 1px solid black;
  position: absolute;
  background-color : v-bind(color);
  margin-top: v-bind(start);
  height: v-bind(end);
}
</style>