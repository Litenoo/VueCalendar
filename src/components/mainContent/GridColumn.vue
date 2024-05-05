<script setup>
import {ref} from "vue";
import Task from './Task.vue'

const taskList = ref([]);

let mouseDetect = ref(null);
let start;
let end;
let divInt;

async function down(event) {
  const rect = mouseDetect._value.getBoundingClientRect();
  start = Math.floor((event.clientY - rect.top)/48*4);
}

async function up(event) {
  const rect = mouseDetect._value.getBoundingClientRect();
  end = Math.floor((event.clientY - rect.top)/48*4);
  createTask(start, end);
}

function createTask(startPoint, endPoint){
  taskList.value.push({
    duration: {start: startPoint * 12 + 'px', end: (endPoint - start) * 12 + 'px'},
    title: 'clean up room',
    color: '#FF2249',
  });
}

</script>
<template>
  <div id="taskGrid">
    <div ref="mouseDetect" id="hoverDiv" @mousedown="down($event)" @mouseup="up($event)">
      <Task v-for="(task, index) in taskList" :task="taskList[index]"></Task>
    </div>
  </div>
</template>

<style scoped>

#hoverDiv {
  height: 100%;
  width: 100%;
  background-image: linear-gradient(to bottom, #a1a1a1 1px, transparent 1px);
  background-size: 100% 48px;
  position: relative;
}
#taskGrid {
  margin: 0;
  padding: 0;
}
.column div{
  height: 1104px;
  width: 100%;
  border-bottom: 1px solid #d1d1d1;
  border-right: 1px solid #d1d1d1;
  box-sizing: border-box;
}
</style>