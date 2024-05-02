<script setup>
import store from './store.js';

const email = defineModel('email');
const password = defineModel('password');

function changeView(){
  store.state.display.displayLogin = false;
}
async function submitForm(){
  console.log('calling submitForm with variables', {email : email.value, password: password.value});
  store.dispatch("loginUser", {email : email.value, password: password.value});
}
</script>

<template>
  <div id="formContainer">
    <div id="userFormContainer">
      <div id="userForm">
        <h1>Login</h1>
        <h6>Welcome back! Fill the form and click "Login" <br> to log in or
          <span class="actionBtn" @click="changeView()">
            Create a new account.
          </span></h6>

        <form @submit.prevent="submitForm">
          <input type="text" name="email" id="email" placeholder="Email" required v-model="email">
          <input type="password" name="password" id="password" placeholder="Password" required v-model="password">
          <input type="submit" value="Login">
          <h6><a href="">Forgot your password ?</a></h6>
        </form>
      </div>

      <div id="projectPresentation">
        CalendarApp - The most efficient way to organise your day, week, life.

        *Screenshots from the project*
      </div>

    </div>
  </div>
</template>