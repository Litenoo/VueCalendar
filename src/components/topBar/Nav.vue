<script setup>
import LeftArr from '../icons/LeftArrow.vue';
import RightArr from '../icons/RightArrow.vue';
import store from '../../store';
import { computed, ref } from 'vue';

function increment() {
  store.commit('increment');
}
function decrement() {
  store.commit('decrement');
}

const props = defineProps({
  size: Number,
})

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
let monthToDisplay = computed(() => monthNames[store.state.currentDate.month]);
let yearToDisplay = computed(() => store.state.currentDate.year)
</script>

<template>
  <div class="navContent">
    <div id="nawArrows">
      <div class="topBtn">
        <LeftArr :height="size || 18" @click="decrement" />
      </div>
      <div class="topBtn">
        <RightArr :height="size || 18" @click="increment" />
      </div>
    </div>
    <span id="selectedDate" :font-size="size || 25">{{ monthToDisplay  }} {{ yearToDisplay }}</span>
  </div>
</template>