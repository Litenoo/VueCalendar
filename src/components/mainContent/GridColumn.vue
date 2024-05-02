<script setup>
import {ref} from "vue";
import Task from './Task.vue'

const taskList = ref([{
  duration: {start: '10px', end: '18px'},
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
  console.log('down Y : ', Math.ceil(((event.clientY - rect.top) * 100 / rect.height) *  1.04166666)); //change that value to dividing
  start = Math.ceil(((event.clientY - rect.top) * 100 / rect.height) * 1.04166666);
}

async function up(event) {
  const rect = event.target.getBoundingClientRect();
  console.log('up Y : ', Math.ceil(((event.clientY - rect.top) * 100 / rect.height) * 1.04166666));
  end = Math.ceil(((event.clientY - rect.top) * 100 / rect.height) / 1.04166666);
  createTask();
}

function createTask(){
  taskList.value.push({
    duration: {start: start * 8 + 'px', end: (end + 1 - start) * 8 + 'px'},
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
}

#taskGrid {
  margin: 0;
  padding: 0;
}

.column{
  display: flex;
  flex-direction: column;
}
.column div{
  height: 1104px;
  width: 100%;
  border-bottom: 1px solid #d1d1d1;
  border-right: 1px solid #d1d1d1;
  box-sizing: border-box;
}
</style>