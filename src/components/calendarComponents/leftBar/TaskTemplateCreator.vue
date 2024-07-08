<script setup>
import store from '@/store.js';

const title = defineModel("title"),
    startHrs = defineModel("startHrs"),
    startMin = defineModel("startMin"),
    endHrs = defineModel("endHrs"),
    endMin = defineModel("endMin"),
    color = defineModel("color"),
    date = defineModel("date"),
    priority = defineModel("priority"),
    status = defineModel("status");

function submitTask() {
  const durationStart = Number(startHrs.value + startMin.value)*4;
  const durationEnd = Number(endHrs.value + endMin.value)*4;
  const dateArr = date.value.split("-");
  const [month, day, year] = dateArr.map(Number); //Read more about maps !
  store.dispatch("pushTask", {
    color: color.value,
    date: {year, month, day},
    duration: {start: durationStart, end: durationEnd},
    priority: Number(priority.value),
    status: Number(status.value),
    title: title.value,
  });
}

const hours = [], quarters = ["00", "15", "30", "45"];

for (let i = 0; i < 24; i++) {
  hours.push(i);
}

</script>
<!--Tidy that shit :D And make custom input for data based on miniCalendar component-->
<template>
  <form @submit.prevent="submitTask" id="formBody">
    <input required type="text" placeholder="Title" name="title" v-model="title">

    <input required type="date" placeholder="date" name="date" v-model="date">

    <label for="color">Color</label>
    <input required type="color" v-model="color">
    
    <label for="startSelect">Duration Start</label>
    <div class="formCell">
      <select required name="startHrs" v-model="startHrs">
        <option v-for="hour in hours" :value=hour>{{ hour }}</option>
      </select>
      <select required name="startMin" v-model="startMin">
        <option v-for="(quarter, index) in quarters" :value=index>{{ quarter }}</option>
      </select>
    </div>
    <label for="endSelect">Duration End</label>
    <div class="formCell">
      <select required name="endHrs" v-model="endHrs">
        <option v-for="hour in hours" :value=hour>{{ hour }}</option>
      </select>
      <select required name="endMin" v-model="endMin">
        <option v-for="(quarter, index) in quarters" :value=index>{{ quarter }}</option>
      </select>
    </div>
    <div class="formCell" id="addOptsContainer">

      <div>
        <label for="priority">Priority</label>
        <select required id="priority" v-model="priority">
          <option value=1>Low</option>
          <option value=2 selected>Normal</option>
          <option value=3>High</option>
          <option value=4>Urgent</option>
        </select>
      </div>

      <div>
        <label for="status">status</label>
        <select required name="status" v-model="status">
          <option value=1 selected>Pending</option>
          <option value=2>In progress</option>
          <option value=3>Done</option>
        </select>
      </div>

    </div>
    <input type="submit">
  </form>
</template>

<style scoped>
form {
  display: flex;
  align-items: center;
  width: 100%;
}

form > * {
  flex: 1;
  min-height: 20px;
  width: 90%;
}

form input {
  width: 70%;
  min-width: 100px;
  padding: 2px;
  border: 1px solid #a1a1a1;
  border-radius: 4px;
}

form input[type="color"] {
  flex: 1;
}

select {
  min-width: 90px;
  width: 40%;
}

.formCell {
  display: flex;
  flex-direction: row;
}

.formCell > * {
  flex: 1;
}

label {
  color: #5d5d5d;
  font-size: 12px;
  text-align: center;
}

#addOptsContainer {
  display: flex;
  justify-content: space-around;
}
</style>