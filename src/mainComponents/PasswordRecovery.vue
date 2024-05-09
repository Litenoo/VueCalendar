<script setup>
import store from '../store.js';
import {useRouter} from 'vue-router';

const router = useRouter();

const email = defineModel('email');


async function submitForm() {
  store.dispatch("recoveryPassword", {email: email.value});
  await router.push('/login');
}
</script>

<template>
  <div id="formContainer">
    <div id="userForm">
      <h1>Password Recovery</h1>
      <h6>Please enter your email address. After clicking "Send email" button we will send recovery email to you.</h6>

      <form @submit.prevent="submitForm">
        <input type="text" name="email" id="email" placeholder="Email" required v-model="email">
        <input type="submit" value="Send Email">
        <h6>I provide, that the given email address <i>belongs to me</i></h6>
      </form>

    </div>
  </div>
</template>

<style scoped>
input {
  width: 100%;
}
#userForm {
  width: 20%;
  max-width: 460px;
  height: 40%;
  border-radius: 6px;
}
</style>