<script setup>
import Search from '../icons/Search.vue';
</script>

<template>
  <div id="searchBar">
    <input type="text">
      <Search />
  </div>
</template>

<style>
#searchBar {
  border: 1px solid #c0c0c0;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
  padding: 3px;
  border-radius: 15px;
}

#searchBar input {
  background-color: #ffffff;
  border: none;
  color: #505050;
  outline: none;
  margin: 0px 10px 0px 10px;
  text-align: center;
}

#searchBar input:focus {
  background-color: #ffffff;
  border: none;
  color: #505050;
  outline: none;
  margin: 0px 10px 0px 10px;
  min-width: 260px;
  border-bottom: 1px solid #a5a5a5;
}

#searchBar svg {
  padding: 3px;
  border-radius: 0px 14px 14px 0px;
}</style>