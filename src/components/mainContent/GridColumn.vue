<script setup>
import {ref} from "vue";
import TaskComp from './Task.vue';
import store from '../../store.js';

const taskList = ref([]);

let mouseDetect = ref(null);
let start;

class Task{
  constructor(_startCoord, _endCoord){
    this.date = {day: new Date().getDate(), month: new Date().getMonth()};
    this.title = null;
    this.color = '#08CCAA';
    this.size = {start:'0px', end:'0px'};
    this.startCoord = _startCoord;
    this.endCoord = _endCoord;
  }
  commitData(){

  }
}

function createTask(startPoint, endPoint){
  const task = new Task(startPoint, endPoint, 'Title', '12-14', '#1be460');
  taskList.value.push(task);
}

async function initTask(event) {
  const rect = mouseDetect._value.getBoundingClientRect();
  start = Math.floor((event.clientY - rect.top)/48*4);
  createTask(start, 0);
}

async function updateTask(event) {
  const rect = mouseDetect._value.getBoundingClientRect();
  let task = taskList.value[taskList.value.length - 1]; //put id of one of tasks in here
  if(task){
    console.log('endcoord : ', Math.floor((event.clientY - rect.top)/48*4));
    task.endCoord = Math.floor((event.clientY - rect.top)/48*4);
  }
}

store.commit('changeMouseBtn', false);

function mouseDown(){
  store.commit('changeMouseBtn',true);
}

function mouseUp(){
  store.commit('changeMouseBtn',false);
}

let beforeCoords = {y:0}; //x probably will be needed in future for moving by grids

const mouseMove = (event) => {
  if(store.state.mouseBtnStatus){
  // const _x = event.clientX;
  const _y = event.clientY;
  if(_y -beforeCoords.y <= 15){
    updateTask(event);
  }
  beforeCoords = { y:_y};
  }
};
</script>

<template>
  <div id="taskGrid" @mouseup="mouseUp()">
    <div ref="mouseDetect" id="hoverDiv" @mousedown="initTask($event); mouseDown()" @mouseup="mouseUp()" @mousemove="mouseMove($event)">
      <TaskComp v-for="(task, index) in taskList" :task="taskList[index]" @mousedown.stop></TaskComp>
    </div>
  </div>
</template>

<style scoped>

#hoverDiv {
  height: 100%;
  width: 100%;
  min-height: 1153px;
  box-sizing: border-box;
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