<script setup>
  import { ref } from 'vue';
  const fillColor = ref('#505050');
</script>

<template>
  <svg :fill="fillColor" width="22" height="22" xmlns="http://www.w3.org/2000/svg" >
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
      <path
        d="M3,8H21a1,1,0,0,0,0-2H3A1,1,0,0,0,3,8Zm18,8H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Zm0-5H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z">
      </path>
    </g>
  </svg>
</template>