<script setup>
import store from "@/store.js";
import { RouterLink } from 'vue-router';

function changeView(){
  store.state.display.displayLogin = true;
}
</script>

<template>
  <div id="formContainer">
    <div id="userFormContainer">
      <div id="userForm">
        <h1>Register</h1>
        <h6>Please fill the form to register. Or choose one of options
          <router-link to="/login">Already have an account ?</router-link>
        </h6>

        <iframe name="dummyframe" id="dummyframe" style="display: none;"></iframe>
        <form action="http://127.0.0.1:3000/register" method="POST" target="dummyframe">
          <input type="email" name="email" id="email" placeholder="Email" required>
          <input type="text" name="username" id="username" placeholder="Username" required>
          <input type="password" name="password" id="password" placeholder="Password" required>
          <input type="submit" value="Register">
        </form>
      </div>

      <div id="projectPresentation">
        CalendarApp - The most efficient way to organise your day, week, life.

        *Screenshots from project*
      </div>

    </div>
  </div>
</template>

