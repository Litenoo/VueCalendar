<script setup>
import Search from '../../icons/Search.vue';
</script>

<template>
  <div id="searchBar">
    <input type="text">
      <Search />
  </div>
</template>

<style>
#searchBar {
  display: flex;
  justify-content: flex-end;
  box-sizing: border-box;
  border: 1px solid #c0c0c0;
  padding: 3px;
  border-radius: 15px;
  width: 60%;
}

#searchBar input {
  text-align: center;
  border: none;
  outline: none;
  background-color: #ffffff;
  color: #505050;
  margin: 0px 10px 0px 10px;
  width: 100%;
}

#searchBar input:focus {
  background-color: #ffffff;
  border: none;
  color: #505050;
  outline: none;
  border-bottom: 1px solid #a5a5a5;
  margin: 0px 10px 0px 10px;
  min-width: 260px;
}

#searchBar svg {
  padding: 3px;
  border-radius: 0px 14px 14px 0px;
}</style>