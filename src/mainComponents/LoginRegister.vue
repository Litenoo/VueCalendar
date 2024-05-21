<script setup>
import Login from '@/components/loginRegister/Login.vue';
import Register from '../components/loginRegister/Register.vue';
import store from '../store.js';
</script>

<template>
  <Login v-if="store.state.display.displayLogin"/>
  <Register v-else/>
</template>