<script setup>
import store from '../../../store.js';
import {ref} from 'vue';

const options = ["Day", "Week", "Month", "Year"];

let selected = ref(1);

function changeView(value) {
  selected.value = value;
  store.commit("updateViewMode", options[value]);
}
</script>

<template>
    <div class="viewSelect">
      <div
          class="option"
          v-for="(option, index) in options"
          :key="index"
          :class="{'selected': selected === index, 'option': selected !== index}"
          @click="changeView(index)"
      >
        {{ option }}
      </div>
    </div>

</template>

<style scoped>
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