<script setup>
import {ref} from "vue";
import TaskComp from './Task.vue';

const taskList = ref([]);

let mouseDetect = ref(null);
let start;

class Task{
  constructor(_startCoord, _endCoord, title){
    this.title = title;
    this.color = '#08CCAA';
    this.duration = {startTime:'', endTime:''};
    this.size = {start:'0px', end:'0px'};
    this.startCoord = _startCoord;
    this.endCoord = _endCoord;
    this.setSize();
  } // dev Remove these methods and handle these values by interpreting on startCoord and endCoord. Both of these function base on them
  setSize(){
    this.size.start = this.startCoord * 12 + 'px';
    this.size.end = (this.endCoord * 12) - (this.startCoord * 12) + 'px';
  }
  setDuration(){
    this.duration.startTime = (Math.floor(this.startCoord /4) + ((this.startCoord /4) % 1) * 0.6).toFixed(2);
    this.duration.endTime = (Math.floor(this.endCoord /4) + ((this.endCoord /4) % 1) * 0.6).toFixed(2);
  }
  commitData(){

  }
}

function createTask(startPoint, endPoint){
  const task = new Task(startPoint, endPoint, 'Title', '12-14', '#1be460');
  task.setDuration();
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
    task.setDuration();
    task.setSize();
  }
}

let mouseBtnStatus = false;
function mouseDown(){
  mouseBtnStatus = true;
}

function mouseUp(){
  mouseBtnStatus = false;
}
let beforeCoords = {y:0}; //x probably will be needed in future for moving by grids
const mouseMove = (event) => {
  if(mouseBtnStatus){
  // const _x = event.clientX;
  const _y = event.clientY;
  if(_y -beforeCoords.y <= 15){
    updateTask(event);
  }
  beforeCoords = { y:_y};
  }
};


//change mousemove to setInterval which will return mousePosition every for example 10ms;
</script>
<template>
  <div id="taskGrid">
    <div ref="mouseDetect" id="hoverDiv" @mouseup="mouseUp()" @mousedown="initTask($event); mouseDown()" @mousemove="mouseMove($event)">
      <TaskComp v-for="(task, index) in taskList" :task="taskList[index]"></TaskComp>
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