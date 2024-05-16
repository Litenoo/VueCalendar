<script setup>
import TrashIcon from '../icons/Trash.vue';
import {computed} from "vue";
import store from '../../store.js';

const props = defineProps({
  task: Object,
});

const size = computed(() => {
  return {
    start: props.task.startCoord * 12 + "px",
    end: (props.task.endCoord * 12) - props.task.startCoord * 12 + "px",
  }
});

const duration = computed(() => {
  return {
    startTime: (Math.floor(props.task.startCoord / 4) + ((props.task.startCoord / 4) % 1) * 0.6).toFixed(2),
    endTime: (Math.floor(props.task.endCoord / 4) + ((props.task.endCoord / 4) % 1) * 0.6).toFixed(2),
  }
});

// if(props.task.startCoord - props.task.endCoord > 3){ //that works, but it has to be activated only when task is commited.
//   console.log('Small task'); // change class of task here.
// }

function deleteTask(taskId) {
  // store.dispatch("deleteTask");
}

function addTask(task) {
  // store.dispatch("addTask");
}

function updateTask(task) {
  // store.dispatch("updateTask");
}
</script>

<template>
  <div class="task" :style="{ backgroundColor: task.color, marginTop: size.start, height: size.end }">
    <div>
      <div>
        <div class="taskTitle" v-if="task.title">{{ task.title }}</div>
        <div v-else class="titleInpContainer"><input type="text" placeholder="Title" class="titleInput"></div>
      </div>
      <div class="durationText">{{ `${duration.startTime} - ${duration.endTime}` }}</div>
    </div>
    <div class="bottomTaskSection">
      <div></div>
      <TrashIcon @click="deleteTask()" class="icon"/>
    </div>
  </div>
</template>
<!--cursor: row-resize/col-resize ;-->
<style scoped>
.task {
  width: 100%;
  border-radius: 4px;
  border: 1px solid #5d5d5d;
  position: absolute;
  transition: 0.1s;
  user-select: none;
  box-sizing: border-box;
  padding: 3px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: row-resize;
}

.bottomTaskSection {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.icon {
  cursor: pointer;
  transition: 0.2s;
  border-radius: 6px;
}

.icon:hover {
  background: #5d5d5d23;
  transition: 0.2s;
  border-radius: 6px;
}

.durationText {
  opacity: 0.8;
  font-size: 13px;
}

.taskTitle {
  font-size: 16px;
}
.titleInput{
  background: rgba(0,0,0, 0.05);
  border: 1px solid black;
}
.titleInput:active{
  outline: none;
  border: 1px solid black
}
.titleInpContainer{
  display: flex;
}
</style>