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
  background-color : v-bind(color);
  position: absolute;
  margin-top: v-bind(start);
  width: 75%;
  height: v-bind(end);
  border-radius: 12px;
}
</style>