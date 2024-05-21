<script setup>
import colorTile from "../../icons/ColorTile.vue";
</script>

<template>
  <div class="taskCreationTemp">
    <input type="text" placeholder="Title">
    <colorTile color="#ff0000"/>
    Task creation content
  </div>
</template>

<style scoped>
  .taskCreationTemp{
    margin-left: 100px;
  }
</style>