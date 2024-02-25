<script setup>
import Gear from './icons/Gear.vue';
import SearchBar from './SearchBar.vue';
</script>

<template>
  <div class="container">
    <SearchBar />
    <div>
      <Gear />
    </div>
  </div>
</template>

<style>
.container{
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
</style>




