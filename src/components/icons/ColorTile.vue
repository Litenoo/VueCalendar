<script setup>
const props= defineProps({
  color: String,
})
</script>

<template>
  <div class="colorTile"></div>
</template>

<style scoped>
.colorTile{
  background: v-bind('props.color');
  width: 26px;
  height: 26px;
  border: 1px solid black;
}
</style>