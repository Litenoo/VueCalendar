<script setup>
import LeftArr from '../icons/LeftArrow.vue';
import RightArr from '../icons/RightArrow.vue';
import store from '../../store';
import { computed } from 'vue';

async function updateDate(num) {
  if (props.global === true) {
    switch (store.state.date.viewMode) {
      case "One-day":
        store.dispatch("changeDay", num);
        break;
      case "Week":
        store.dispatch("changeDay", 7 * num);
        break;
      case "Month":
        store.commit("changeMonth", num);
        break;
    }
  }else{
    store.commit("changeMiniMonth", num);
  }
}

const props = defineProps({
  size: Number,
  global: Boolean,
})

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

let dateToDisplay;
let yearToDisplay;

if (props.global === true) {
  dateToDisplay = computed(() => monthNames[store.state.date._month - 1]);
  yearToDisplay = computed(() => store.state.date._year);
} else {
  dateToDisplay = computed(() => monthNames[store.state.date._miniMonth - 1]);
  yearToDisplay = computed(() => store.state.date._miniYear);
}

</script>

<template>
  <div class="navContent">
    <div id="nawArrows">
      <div class="topBtn">
        <LeftArr :height="size || 18" @click="updateDate(-1)" />
      </div>
      <div class="topBtn">
        <RightArr :height="size || 18" @click="updateDate(1)" />
      </div>
    </div>
    <span id="selectedDate" :font-size="size || 25">
      <span v-if="store.state.date.view !== 'Year' && !props.global || props.global">
        {{ dateToDisplay }}
      </span>
      {{ yearToDisplay }}
    </span>
  </div>
</template>

<style>
span {
  user-select: none;
}
</style>