<template>

  <div id="carouselExampleDark" class="carousel carousel-dark slide">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active"
        aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active" data-bs-interval="10000">
        <img src="@/assets/img/macetasblancas.jpg" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h5>Macetas de diferentes tamaños</h5>
          <p>Las mejores Macetas para ti y para cualquiera</p>
        </div>
      </div>
      <div class="carousel-item" data-bs-interval="2000">
        <img src="@/assets/img/macetasblancas.jpg" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h5>tus macetas a tu mejor Precio</h5>
          <p>Macetas Mary</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="@/assets/img/macetasblancas.jpg" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">

        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>


    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  <h2 style="justify-content:center;">Productos Nuevos</h2>
  <div class="row" style="margin-top: 20px;">
    <div class="col-3">
      <div class="card" style="width: 18rem;">
        <img src="@/assets/img/ardilla_escultura.jpeg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Escultura de ardilla</h5>
          <p class="card-text">Escultura de ardilla hecho de cemento</p>
          <a href="#" class="btn btn-primary">Ver más</a>
        </div>
      </div>
    </div>
    <div class="col-3">
      <div class="card" style="width: 18rem;">
        <img src="@/assets/img/galliro_de_las_rocas.jpeg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Escultura del Gallito de las Rocas</h5>
          <p class="card-text">Escultura del gallito de las rocas versión</p>
          <a href="#" class="btn btn-primary">Ver más</a>
        </div>
      </div>
    </div>
    <div  class="col-3">
      <div class="card" style="width: 18rem;">
        <img src="@/assets/img/loro_escultura.jpeg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Escultura  de Loros</h5>
          <p class="card-text">Escultura de dos loros en una rama de árbol</p>
          <a href="#" class="btn btn-primary">Ver más</a>
        </div>
      </div>
    </div>
    <div class="col-3">
      <div class="card" style="width: 18rem;">
        <img src="@/assets/img/galliro_de_las_rocas.jpeg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Escultura del Gallito de las Rocas</h5>
          <p class="card-text">Escultura del gallito de las rocas versión</p>
          <a href="#" class="btn btn-primary">Ver más</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.card{

  transition: transform 0.3s ease;
}

.card:hover{
  transform: scale(1.05);
}

h1 {
  color: blue;
  text-align: center;
}

.Button89 {
  border-radius: 5px;
  padding: 12px;
  padding-right: 20px;
  padding-left: 20px;
  margin-top: -500px;
}
</style>
