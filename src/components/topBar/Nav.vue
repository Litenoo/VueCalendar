<script setup>
import LeftArr from '../icons/LeftArrow.vue';
import RightArr from '../icons/RightArrow.vue';
import store from '../../store';
import { computed } from 'vue';

function increment() {
  if (props.global) {
    store.commit('increment', false);
  }else{
    store.commit('increment', true);
  }
}
function decrement() {
  if (props.global) {
    store.commit('decrement', false);
  }else{
    store.commit('decrement', true);
  }
}

const props = defineProps({
  size: Number,
  global: Boolean,
  // change global maybe :P
})

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

let dateToDisplay;
let yearToDisplay;

if (props.global) {
  dateToDisplay = computed(() => monthNames[store.state.currentDate.month]);
  yearToDisplay = computed(() => store.state.currentDate.year);
} else {
  dateToDisplay = computed(() => monthNames[store.state.currentDate.viewMonth]);
  yearToDisplay = computed(() => store.state.currentDate.year);
}

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
    <span id="selectedDate" :font-size="size || 25">{{ dateToDisplay }} {{ yearToDisplay }}</span>
  </div>
</template>