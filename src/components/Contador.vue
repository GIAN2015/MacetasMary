<template>
  <h1 class="gian"> {{contador}} </h1>
  <p>
    <button @click="tooglebutton">sube</button>
    <button @click="decream">baja</button>
  </p>

 </template>

<script setup>
import { ref } from 'vue';
const contador= ref(0)
const tooglebutton= ()=>{
  contador.value++;
}
const decream= ()=>{
  contador.value--;
}


</script>

<style scoped>
.gian{
  color: red;
}


</style>
