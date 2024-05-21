<script setup>
import store from '../store.js';
import {useRouter} from 'vue-router';
import { ref } from 'vue';

const router = useRouter();

let urlParams = new URLSearchParams(window.location.search);



const password = defineModel('password');
const passwordRepeat = defineModel('repeatPassword');

let errorMessage = ref('');


async function submitForm() {
  let token = '';
  if(urlParams.has('token')){
    token = urlParams.get('token');
  }else{ //probably useless but safe.
    await router.push("/loginRegister");
  }

  if(password.value === passwordRepeat.value){
    await store.dispatch("changePassword", {password : password.value, token : token});
    await router.push("/loginRegister");
  }else{
    errorMessage.value = 'Please check if you entered same password twice.';
  }
}
</script>

<template>
  <div id="formContainer">
    <div id="userForm">
      <h1>Change Password</h1>
      <h6>Please enter your email and password</h6>

      <form @submit.prevent="submitForm">
        <input type="password" name="password" class="password" placeholder="Password" required v-model="password">
        <input type="password" name="passwordR" class="password" placeholder="Repeat Password" required v-model="passwordRepeat">
        <input type="submit" value="Change my password">
        <span class="errorMessage">{{errorMessage}}</span>
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