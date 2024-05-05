<script setup>
import Login from '../components/mainContent/Login.vue';
import Register from '../components/mainContent/Register.vue';
import store from '../store.js';
</script>

<template>
  <Login v-if="store.state.display.displayLogin"/>
  <Register v-else/>
</template>