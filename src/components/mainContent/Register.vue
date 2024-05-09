<script setup>
import store from "@/store.js";
import {RouterLink} from 'vue-router';
import {useRouter} from 'vue-router';
import {ref} from 'vue';

const router = useRouter();

const email = defineModel('email');
const username = defineModel('username');
const password = defineModel('password');
const passwordRepeat = defineModel('passwordRepeat')

let errorMessage = ref('');

async function submitForm() {
  if (password.value === passwordRepeat.value) {
    await store.dispatch("registerUser", {email: email.value, password: password.value, username: username.value});
    errorMessage.value = store.state.auth.errorMessage;
    store.commit("clearErrorMsg");
  }else{
  errorMessage.value = 'Please check if you entered same password twice.';
  }
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

        <form @submit.prevent="submitForm">
          <input type="email" name="email" id="email" placeholder="Email" required v-model="email">
          <input type="text" name="username" id="username" placeholder="Username" required v-model="username">
          <input type="password" name="password" id="password" placeholder="Password" required v-model="password">
          <input type="password" name="passwordRepeat" id="passwordRepeat" placeholder="Repeat Password"
                 v-model="passwordRepeat" required>
          <input type="submit" value="Register">
          <span class="errorMessage">{{errorMessage}}</span>
          <div class="termsOfUse"><input class="checkbox" type="checkbox" required> I accept the terms of use</div>
        </form>
      </div>

      <div id="projectPresentation">
        CalendarApp - The most efficient way to organise your day, week, life.

        *Screenshots from project*
      </div>

    </div>
  </div>
</template>

