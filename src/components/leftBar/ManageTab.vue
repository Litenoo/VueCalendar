<script setup>
import Plus from '../icons/Plus.vue';
import Minus from '../icons/Minus.vue';
import TaskView from './TaskView.vue';
</script>

<template>
  <div>
    <button class="option"> <Plus :fill="'#505050'" :height="'26'" />Add new</button>
    <button class="option"> <Minus :fill="'#505050'" :height="'26'" />Delete</button>
    <TaskView />
  </div>
</template>

<style>
.option{
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  color: #000;
  margin: 4px;
  padding: 1px 6px;
}
.option * {
  padding: 0px 5px 0px 5px;
}
</style>