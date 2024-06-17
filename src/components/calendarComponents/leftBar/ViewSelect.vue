<script setup>
import store from '../../../store.js';
import {ref, watch} from 'vue';
import RightArr from "@/components/icons/RightArrow.vue";
import LeftArr from "@/components/icons/LeftArrow.vue";

const options = [{id: 0, text: "Day"}, {id: 1, text: "Week"}, {id: 2, text: "Month"}, {id: 3, text: "Year"},];
const viewMode = ref('Week');

let selected = ref(1);

function changeView(value) {
  selected.value = value;
  viewMode.value = options[value].text;
  console.log(selected);
}

watch(viewMode, (viewMode) => {
  store.commit("updateViewMode", viewMode);
});

watch(selected, (newValue) => {
  viewMode.value = options[newValue].text;
});
</script>

<template>
    <div class="viewSelect">
      <div
          class="option"
          v-for="option in options"
          :key="option.id"
          :class="{'selected': selected === option.id, 'option': selected !== option.id}"
          @click="changeView(option.id)"
      >
        {{ option.text }}
      </div>
    </div>

</template>

<style>
.viewSelect {
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  box-sizing: border-box;
  overflow: hidden;
}

.option {
  width: 56px;
  text-align: center;
  font-size: 14px;
  background: #f3f3f3;
  padding: 4px;
  box-sizing: border-box;
  cursor: pointer;
  transition: 0.4s;
  border-top: 1px solid #a1a1a1;
  border-bottom: 1px solid #a1a1a1;
  border-right: 1px solid #a1a1a1;
}

.viewSelect :first-child {
  border-left: 1px solid #a1a1a1;
}

.selected {
  padding: 4px;
  box-sizing: border-box;
  cursor: pointer;
  background: #28c266;
  transition: 0.4s;
}
</style>