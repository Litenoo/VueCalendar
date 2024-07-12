<script setup>
import {computed, ref, watch} from "vue";
import TaskComp from './Task.vue';
import store from '../../../store.js';

const props = defineProps({
  day: Object,
  edgeDisplay: Boolean, //true means that days loader is out of current month days and
});


class Task {
  constructor(_startCoord, _endCoord, _title, _color) {
    this.date = {day: new Date().getDate(), month: new Date().getMonth(), year: new Date().getFullYear()}; //dev
    this.duration = {start: _startCoord, end: _endCoord};
    this.color = _color;
    this.title = props.day;
    this.priority = 0;
    this.status = 0;
  }
}

const task = new Task(14, 24, 'Title', '#08CCAA');

const taskList = ref([]);

watch(() => props.day, (newDay) => { //Make valid also for current month and year
  loadTasks(newDay);
});

function loadTasks(newDay){
  taskList.value = [];
  store.state.tasks.forEach((task) => {
    // initialising variables to make if statement more readable
    const isCurrentMonthTask = task.date.day === newDay.day.value &&
        task.date.month === store.state.date._month &&
        !props.edgeDisplay;

    const isEdgeMonthTask = task.date.day === newDay.day.value &&
        task.date.month === store.state.date._month + 1 &&
        props.edgeDisplay;

    if (isCurrentMonthTask || isEdgeMonthTask) {
      taskList.value.push(task);
      console.log("Task: ", task);
    }

    // console.log("GridColumn day :", newDay.value, "newTask : ", task);
  })
}
let mouseDetect = ref(null);
let start;

function createTile(startPoint, endPoint) { // handle backend action
  const task = new Task(startPoint, endPoint, 'Title', '#08CCAA');
  taskList.value.push(task);
  console.log("new task : ", task)
}

async function initTask(event) {
  console.log("Task init")
  const rect = mouseDetect._value.getBoundingClientRect();
  start = Math.floor((event.clientY - rect.top) / 48 * 4);
  createTile(start, 0);
}

async function updateTask(event) {
  const rect = mouseDetect._value.getBoundingClientRect();
  let task = taskList.value[taskList.value.length - 1]; //put id of one of tasks in here
  if (task) {
    task.duration.end = Math.floor((event.clientY - rect.top) / 48 * 4);
  }
}

store.commit('changeMouseBtn', false);

function mouseDown() {
  store.commit('changeMouseBtn', true);
}

function mouseUp(event) {
  store.commit('changeMouseBtn', false);
}

function taskCommited() { //this function will trigger task editing input to the right
  console.log('endTask', taskList.value);
}

let beforeCoords = {y: 0}; //x probably will be needed in future for moving by grids

const mouseMove = (event) => {
  if (store.state.mouseBtnStatus) {
    // const _x = event.clientX;
    const _y = event.clientY + 100;
    if (_y - beforeCoords.y >= 15 || _y - beforeCoords.y <= -15) {
      updateTask(event);
      beforeCoords = {y: _y + 100};
    }
  }
};

loadTasks(props.day);
</script>

<template>
  <div id="taskGrid">
    <div
        ref="mouseDetect"
        id="hoverDiv"
        @mousedown="initTask($event); mouseDown()"
        @mouseleave="mouseUp($event)"
        @mouseup="mouseUp($event); taskCommited()"
        @mousemove="mouseMove($event)"
    >
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
  border-right: 1px solid #a1a1a1;
}

#taskGrid {
  margin: 0;
  padding: 0;
  width: 100%;
}

.column div {
  height: 1104px;
  width: 100%;
  border-bottom: 1px solid #d1d1d1;
  border-right: 1px solid #d1d1d1;
  box-sizing: border-box;
}
</style>