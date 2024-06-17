<script setup>
import store from '@/store.js';

const title = defineModel("title");
const durationStart = defineModel("durationStart");
const durationEnd = defineModel("durationEnd");
const color = defineModel("color");
const date = defineModel("date");
const priority = defineModel("Normal");
const status = defineModel("status");

function submitTask() {
  store.dispatch("pushTask", {
    color: color.value,
    date : date.value,
    duration : {start: durationStart.value, end: durationEnd.value},
    priority : Number(priority.value),
    status : Number(status.value),
    title : title.value,
  });
}
const gridSnapPoints = [];
const timeIntervals = [];

for(let i = 0; i < 96; i++){
  gridSnapPoints.push(i);
  timeIntervals.push(quartersToHours(i));
}

function quartersToHours(numOfQuarters){
  let i = numOfQuarters;
  while (i >= 4){i -= 4;}

  let hour = (numOfQuarters - i) / 4;
  let quarter = i * 15;

  if(quarter === 0){quarter = "00";}
  return `${hour}:${quarter}`;
}

</script>

<template>
<!--  DEV change design of that form and make different hour selecting system.  -->
  <form @submit.prevent="submitTask">
    <input required type="text" placeholder="Title" name="title" v-model="title">
    <input required type="date" placeholder="date" name="date" v-model="date">
    <select required name="durationStart" id="durationStart" v-model="durationStart">
      <option v-for="(hour, index) in timeIntervals" :value=gridSnapPoints[index]>{{ hour }}</option>
    </select>
    <select required name="durationStart" id="durationStart" v-model="durationEnd">
      <option v-for="(hour, index) in timeIntervals" :value=gridSnapPoints[index]>{{ hour }}</option>
    </select>
    <input required type="color" placeholder="color" name="color" v-model="color">

    <label for="priority">Priority</label>
    <select required name="priority" v-model="priority">
      <option value=1>Low</option>
      <option value=2 selected>Normal</option>
      <option value=3>High</option>
      <option value=4>Urgent</option>
    </select>

    <label for="status">status</label>
    <select required name="status" v-model="status">
      <option value=1 selected >Pending</option>
      <option value=2>In progress</option>
      <option value=3>Done</option>
    </select>
    <input type="submit">
  </form>
</template>

<style scoped>
form {
  display: flex;
  flex: 1;
  padding: 12px;
}

form input {
  width: 70%;
  min-width: 100px;
  padding: 2px;
}

select {
  min-width: 90px;
  width: 40%;
}
</style>