<script setup>
import Gear from '../../icons/Gear.vue';
import SearchBar from './SearchBar.vue';
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="container">
    <div id="searchBarContainer">
      <SearchBar />
    </div>
    <div class="topBtn">
      <router-link to="/options"><Gear /></router-link>
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




