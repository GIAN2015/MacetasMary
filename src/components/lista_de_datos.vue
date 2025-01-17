<template>
<div>
  <h1> Lista del Menú</h1>
  <input type="text" v-model="newtareas" @keyup.enter="updatetareas" >
  <ul >
    <li v-for="(tareas,index) in tareas" :key="index">{{ tareas }}
      <div><button type="button" @click="borrartareas"> Delete</button>
      </div></li>


  </ul>
  <button type="button" @click="updatetareas">Save</button>

</div>

</template>
<script setup>
import {ref} from 'vue';
const tareas= ref([]);
const newtareas= ref('');
const updatetareas = () => {tareas.value.push(newtareas.value);
newtareas.value= '';}
const borrartareas = (index) =>{tareas.value.splice(index,1);

}



</script>

<style scoped>

</style>
