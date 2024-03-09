<script setup>
import LeftArr from '../icons/LeftArrow.vue';
import RightArr from '../icons/RightArrow.vue';
import store from '../../store';
import { computed } from 'vue';

function increment (){
  store.commit('increment');
}
function decrement (){
  store.commit('decrement');
}

const props = defineProps({
  size: Number,
})

const monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"
];
let dateToDisplay = computed(() => monthNames[store.state.currentDate.month]);
</script>

<template>
  <div id="nawArrows">
    <div class="topBtn">
      <LeftArr :height="size || 18" @click="decrement"/>
    </div>
    <div class="topBtn">
      <RightArr :height="size || 18" @click="increment"/>
    </div>
  </div>
  <span id="selectedDate" :font-size="size || 25" >{{dateToDisplay}}</span>
</template>