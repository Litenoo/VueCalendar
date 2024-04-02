<script>
function register(){
  fetch("127.0.0.1/register", {
    method:"POST",
  });
}
</script>

<template>
    <div id="formContainer">
  <form action="127.0.0.1" id="userForm">
    <input type="text" name="username" id="username">
    <input type="password" name="password" id="password">
    <input type="submit">Register</input>
  </form>
</div>
</template>