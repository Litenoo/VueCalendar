<script setup>
let urlParams = new URLSearchParams(window.location.search);
console.log(urlParams.has('token')); // true
console.log(urlParams.get('token')); // "MyParam"
const token = urlParams.get('token');
</script>

<template>
  {{token}}
</template>

<style scoped>

</style>