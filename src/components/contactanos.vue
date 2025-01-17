<template>
  <div style= "padding: 200px;" >
  <h1> Contáctanos</h1>
  <div class="input-group mb-3" >
    <span class="input-group-text" id="basic-addon1">Nombre</span>
    <input type="text" class="form-control" placeholder="Gian Carlos" aria-label="Nombre"
      aria-describedby="basic-addon1">
      <span class="input-group-text" id="basic-addon1">Apellido</span>
    <input type="text" class="form-control" placeholder="Sinarahua Cárdenas" aria-label="Nombre"
      aria-describedby="basic-addon1">
  </div>

  <div class="input-group mb-3">
    <input type="text" class="form-control" placeholder="example@gmail.com" aria-label="Recipient's username"
      aria-describedby="basic-addon2">
    <span class="input-group-text" id="basic-addon2">Correo</span>
  </div>

  <div class="mb-3">

    <div class="input-group">
      <span class="input-group-text" id="basic-addon3">Teléfono</span>
      <input placeholder="+51 123456789" type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4">
    </div>

  </div>




  <div class="input-group">
    <span class="input-group-text">Mensaje</span>
    <textarea class="form-control" aria-label="With textarea" placeholder="Escribenos para más macetas....."></textarea>
  </div>
</div>
</template>

<script setup>

</script>

<style scoped></style>
