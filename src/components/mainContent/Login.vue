<script setup>
import store from '../../store.js';
import { useRouter } from 'vue-router';
import { RouterLink } from 'vue-router';
import { ref } from "vue";
const router = useRouter();

const email = defineModel('email');
const password = defineModel('password');

let errorMessage = ref('');

async function submitForm(){
    await store.dispatch("loginUser", {email : email.value, password: password.value});
    await router.push('/');
}
</script>

<template>
  <div id="formContainer">
    <div id="userFormContainer">
      <div id="userForm">
        <h1>Login</h1>
        <h6>Welcome back! Fill the form and click "Login" <br> to log in or
          <router-link to="/register">Don't have an account ?</router-link></h6>

        <form @submit.prevent="submitForm">
          <input type="text" name="email" id="email" placeholder="Email" required v-model="email">
          <input type="password" name="password" id="password" placeholder="Password" required v-model="password">
          <input type="submit" value="Login">
          <span class="errorMessage">{{errorMessage}}</span>
          <h6><router-link to="/passwordRecovery">Forgot your password ?</router-link></h6>
        </form>
      </div>

      <div id="projectPresentation">
        CalendarApp - The most efficient way to organise your day, week, life.

        *Screenshots from the project*
      </div>

    </div>
  </div>
</template>

<style>
input{
  width: 100%;
}
</style>