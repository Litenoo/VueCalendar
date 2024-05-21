<script setup>

</script>

<template>
  <div class="barsContainer">
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
  </div>
</template>

<style scoped>

.barsContainer{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  cursor: row-resize;
  padding: 3px 0 3px 0;
}

.bar {
  height: 1px;
  width: 40%;
  background: #5d5d5d;
  margin: 0 0 1px 0;
}
</style>