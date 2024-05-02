<script setup>
import Login from './Login.vue';
import Register from './Register.vue';
import store from './store.js';
</script>

<template>
  <Login v-if="store.state.display.displayLogin"/>
  <Register v-else/>
</template>