<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
<div class="logoo">

<img class="logo1" src="/faviconWellfish.png" alt="logo"/>
<h1 class="logo11"> Wellfish</h1>
</div>
<div class="box">

  <HelloWorld msg="Logga in" />
  <div>
  <form action="dashboard.vue">
  <div class="form-group">
    <label for="exampleInputEmail1" class="label1">Email </label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Din email"/>

  </div>
  <div class="form-group">
    <label for="exampleInputPassword1" class="label1">Lösenord</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Ditt lösenord"/>
  </div>
  <div class="social-media">
<img alt="icon" class="facebook" src='./assets/facebook.png'/>
<img alt="icon" class="email" src="./assets/email.png"/>

  
 </div>
 
  <button type="submit" class="btn btn-primary" id="btn1">Logga in</button>
</form>
   
  </div>
   
 </div>

</template>

<style scoped>

</style>
