<script setup>
const weekDays = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

function createCalendar(year, month) {

  function getTotalDays(year, month) {
    const lastDay = new Date(year, month, 0);
    return lastDay.getDate();
  }

  const calendar = [];
  const monthLength = getTotalDays(year, month);
  let beforeMonthLength = getTotalDays(year, month - 1);

  const currentDate = new Date();
  currentDate.setDate(1);
  let startDay = currentDate.getDay();

  for(let i = 0; i < startDay - 1 ; startDay--, beforeMonthLength--){
    calendar.unshift(beforeMonthLength);
  }
  for(let i = 1; i <= monthLength; i++){
    calendar.push(i);
  }
  let i = 1;
  while(calendar.length < 42){
    calendar.push(i);
    i++;
  }
  return calendar;
}

let calendar = createCalendar(2024,2);
</script>

<template>
  <div id="miniCalendar">
    <div id="weekDays"><span v-for="weekDay in weekDays" class="miniDay">{{ weekDay }}</span></div>
    <div id="miniDays"><span v-for="day in calendar" class="miniDay">{{ day }}</span></div>
  </div>
</template>

<style>
#weekDays{
  display: flex;
  width: 100%;
}
#miniCalendar {
  width: 100%;
  min-height: 120px;

}

#miniDays {
  display: flex;
  flex-wrap: wrap;
  width: 210px;
  margin: none;
}

.miniDay { 
  /* It's now possible to hoover between two days. Resolve that problem. */
  /* And make it a little bit wider. So the padding will be ~12px */
  background-color: #ffffff;
  margin: none;
  padding: 8px 0px 8px 0px;
  font-size: 12px;
  width: 30px;
  transition: 0.4s;
  border-radius: 100%;
  text-align: center;
}
.miniDay:hover{
  background-color: #f1f1f1;
  cursor: pointer;
  transition: 0.2s;
}
</style>