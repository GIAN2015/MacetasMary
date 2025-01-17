<template>
  <div class="prueba">
  <h2 style="justify-content:center;">Productos</h2>
  <div class="row" style="margin-top: 20px;">
    <div class="col-3">
      <div class="card" style="width: 16rem;">
        <img src="@/assets/img/ardilla_escultura.jpeg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Escultura de ardilla</h5>
          <p class="card-text">Escultura de ardilla hecho de cemento</p>
          <a href="#" class="btn btn-primary">Ver más</a>
        </div>
      </div>
    </div>
    <div class="col-3">
      <div class="card" style="width: 16rem;">
        <img src="@/assets/img/galliro_de_las_rocas.jpeg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Escultura del Gallito de las Rocas</h5>
          <p class="card-text">Escultura del gallito de las rocas versión</p>
          <a href="#" class="btn btn-primary">Ver más</a>
        </div>
      </div>
    </div>
    <div  class="col-3">
      <div class="card" style="width: 16rem;">
        <img src="@/assets/img/loro_escultura.jpeg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Escultura  de Loros</h5>
          <p class="card-text">Escultura de dos loros en una rama de árbol</p>
          <a href="#" class="btn btn-primary">Ver más</a>
        </div>
      </div>
    </div>
    <div class="col-3">
      <div class="card" style="width: 16rem;">
        <img src="@/assets/img/galliro_de_las_rocas.jpeg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Escultura del Gallito de las Rocas</h5>
          <p class="card-text">Escultura del gallito de las rocas versión</p>
          <a href="#" class="btn btn-primary">Ver más</a>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script setup>


</script>

<style scoped>
.prueba{
  padding: 100px;

   margin-top: 120px;


}
.card{

transition: transform 0.3s ease;
}

.card:hover{
transform: scale(1.05);
}
</style>
