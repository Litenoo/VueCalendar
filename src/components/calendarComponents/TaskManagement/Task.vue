<script setup>
import {computed} from "vue";

const props = defineProps({
  task: Object,
});

const size = computed(() => {
  return {
    start: props.task.duration.start * 12 + "px",
    end: (props.task.duration.end * 12) - props.task.duration.start * 12 + "px",
  }
});

const duration = computed(() => {
  return {
    startTime: (Math.floor(props.task.duration.start / 4) + ((props.task.duration.start / 4) % 1) * 0.6).toFixed(2),
    endTime: (Math.floor(props.task.duration.end / 4) + ((props.task.duration.end / 4) % 1) * 0.6).toFixed(2),
  }
});

function updateDuration(event) {
  props.task.duration.end = Math.floor((event.clientY - rect.top)/48*4);
}

</script>

<template>
  <div class="task" :style="{ backgroundColor: task.color, marginTop: size.start, height: size.end }">
    <div>
      <div class="topInfo">
        <div class="taskTitle" >{{ task.title }}</div>
      </div>
      <div class="durationText">{{ `${duration.startTime} - ${duration.endTime}` }}</div>
    </div>
  </div>
</template>
<!-- cursor: row-resize/col-resize ;-->
<style scoped>
.task {
  width: 90%;
  border-radius: 4px;
  position: absolute;
  transition: 0.1s;
  user-select: none;
  box-sizing: border-box;
  padding: 0 3px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 2px 2px 1px #3d3d3d;
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