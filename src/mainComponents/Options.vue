<script setup>
import TopBar from '@/components/optionViewComponents/TopBar.vue';
import LeftBar from '../components/LeftBar.vue';
</script>

<template>
  <div id="app">
    <TopBar />
  </div>
</template>

<style scoped>
#mainContent {
  display: flex;
  flex-direction: row;
  height: 100%;
}
#app{
  height: 100vh;
  overflow: hidden;
}
</style>
