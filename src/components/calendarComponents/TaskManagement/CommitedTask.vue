<script setup>
import {computed} from "vue";
import store from '../../../store.js';
import Bars from '../../icons/taskResizeBars.vue'

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
  // store.dispatch("addTask", task);
}

function updateTask(task) {
  // store.dispatch("updateTask");
}

function updateDuration(event) {
  props.task.endCoord = Math.floor((event.clientY - rect.top)/48*4);
}

</script>

<template>
  <div class="task" :style="{ backgroundColor: task.color, marginTop: size.start, height: size.end }">
    <div>
      <div class="topInfo">
        <Bars />
        <div class="taskTitle" >{{ task.title }}</div>
      </div>
      <div class="durationText">{{ `${duration.startTime} - ${duration.endTime}` }}</div>
    </div>
    <div class="bottomTaskSection">
      <Bars />
    </div>
  </div>
</template>
<!-- cursor: row-resize/col-resize ;-->
<style scoped>
.task {
  width: 100%;
  border-radius: 4px;
  border: 1px solid #5d5d5d;
  position: absolute;
  transition: 0.1s;
  user-select: none;
  box-sizing: border-box;
  padding: 0 3px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.bottomTaskSection {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
}

.durationText {
  opacity: 0.8;
  font-size: 13px;
}

.taskTitle {
  font-size: 16px;
}
.topInfo{
  display: flex;
  justify-content: center;
}
</style>