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
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 48%;
}
#searchBarContainer{
  width: 80%;
}
</style>




