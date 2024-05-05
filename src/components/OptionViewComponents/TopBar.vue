<script setup>
import Back from '../icons/LeftArrow.vue';
import { RouterLink } from 'vue-router';
</script>

<template>
  <div id="topBar">
    <div id="leftOptions">
      <router-link to="/">
        <Back id="returnBtn" class="topBtn"/>
      </router-link>
      Settings
    </div>
  </div>
  <div id="leftBar">
    Account
  </div>
</template>

<style>
#topBar {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 6px 0 6px 0 ;
  border-bottom: 1px solid #a1a1a1;
  min-height: 41px;
}
#returnBtn{
  height: 20px;
  padding-top: 2px;
}
#leftOptions{
  display: flex;
  min-width: 120px;
  justify-content: space-around;
  font-size: 20px;
}
#leftBar {
  border-right: 1px solid #c4c4c4;
  width: 210px;
  flex: 3;
  max-width: 250px;
  height: 100%;
}
</style>