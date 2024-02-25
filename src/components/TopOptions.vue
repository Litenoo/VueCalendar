<script setup>

import Brand from './Brand.vue'
import Navigation from './Nav.vue'
</script>

<template>
  <div class="container">
    <Brand />
    <Navigation />
  </div>
</template>

<style>
.container{
  flex: 2;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
</style>