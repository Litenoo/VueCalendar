<script setup>
import MiniCalendar from '@/components/calendarComponents/leftBar/MiniCalendar.vue';
import Nav from '@/components/calendarComponents/topBar/Nav.vue';
import ViewSelect from '@/components/calendarComponents/leftBar/ViewSelect.vue';
import TaskTemplateCreator from "@/components/calendarComponents/leftBar/TaskTemplateCreator.vue";
import Separator from "./calendarComponents/leftBar/Separator.vue";


</script>

<template>
  <div id="leftBar">
    <Nav global:false />
    <MiniCalendar globalDisplay />
    <ViewSelect />
    <Separator />
    <TaskTemplateCreator/>
  </div>
</template>

<style scoped>
#leftBar {
  border-right: 1px solid #c4c4c4;
  width: 210px;
  flex: 3;
  max-width: 250px;
}
</style>
