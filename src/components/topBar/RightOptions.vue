<script setup>
import Gear from '../icons/Gear.vue';
import SearchBar from './SearchBar.vue';
</script>

<template>
  <div class="container">
    <div id="searchBarContainer">
      <SearchBar />
    </div>
    <div class="topBtn">
      <Gear />
    </div>
  </div>
</template>

<style>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  flex: 1;
  max-width: 48%;
}
#searchBarContainer{
  width: 80%;
}
</style>




