<script setup>
import Plus from '../icons/Plus.vue'
</script>

<template>
  <div>
    <button class="option"> <Plus />Add new</button>
  </div>
</template>

<style>
.option{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border: 1px solid #b4b4b4;
  padding: 4px;
  min-width: 90px;
}
</style>