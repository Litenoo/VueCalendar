<script setup>
import {ref} from "vue";
import Task from './Task.vue'

const taskList = ref([{
  duration: {start: '0px', end: '18px'},
  title: 'Clean car',
  color: '#0088BB',
}, {
  duration: {start: '158px', end: '80px'},
  title: 'Take dog for a walk',
  color: '#22BB77',
}]);

let start;
let end;

async function down(event) {
  const rect = event.target.getBoundingClientRect();
  console.log('down Y : ', Math.floor((event.clientY - rect.top)/48*4));
  start = Math.floor((event.clientY - rect.top)/48*4);
}

async function up(event) {
  const rect = event.target.getBoundingClientRect();
  console.log('up Y : ', Math.floor((event.clientY - rect.top)/48*4));
  end = Math.floor((event.clientY - rect.top)/48*4);
  createTask();
}

function createTask(){
  taskList.value.push({
    duration: {start: start * 12 + 'px', end: (end - start) * 12 + 'px'},
    title: 'clean up room',
    color: '#2233FF',
  });
  console.log(taskList);
}

</script>
<template>
  <div id="taskGrid">
    <div ref="el" id="hoverDiv" @mousedown="down($event)" @mouseup="up($event)">
      <Task v-for="(task, index) in taskList" :task="taskList[index]"></Task>
    </div>
  </div>
</template>

<style scoped>

#hoverDiv {
  background: grey;
  height: 800px;
  width: 100%;
  background-image: linear-gradient(to bottom, black 1px, transparent 1px);
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