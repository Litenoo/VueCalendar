<script>
function Login(){
  fetch("127.0.0.1/Login", {
    method:"POST",
  });
}
</script>

<template>
  <div id="formContainer">
    <div id="userFormContainer">
      <div id="userForm">
        <h1>Welcome back !</h1>
      <form action="127.0.0.1" >
      <input type="text" name="username" id="username">
      <input type="password" name="password" id="password">
      <div id="loginOptions">
        <input type="submit" value="Login"></input>
        <button>Go to register</button>
      </div>
      
    </form>
  </div>

    <div id="projectPresentation">
      CalendarApp - The most efficient way to organise your day, week, life.

      *Screenshots from project*
    </div>

  </div>
</div>
</template>