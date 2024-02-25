<script setup>
import Search from './icons/Search.vue';
</script>

<template>
  <div id="searchBar">
    <input type="text">
    <Search />
  </div>
</template>

<style>
#searchBar{
  background: linear-gradient(#0ab87e, #509277);
  border: 1px solid #c0c0c0;
  box-sizing: border-box;
  display: flex;
  padding: 3px;
  border-radius: 15px;
}
#searchBar input {
  background-color: #ffffff;
  border: none;
  color: #505050;
  border-radius: 14px 0px 0px 14px;
}
#searchBar svg{
  padding: 3px;
  border-radius: 0px 14px 14px 0px;
}
</style>