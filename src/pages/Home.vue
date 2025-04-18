<template>
  <div>
    <!-- Carrusel -->
    <div id="carouselExampleDark" class="carousel carousel-dark slide mb-5">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active"
          aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner rounded">
        <div class="carousel-item active" data-bs-interval="10000">
          <img :src="macetas" class="d-block w-100" alt="Macetas">
          <div class="carousel-caption d-none d-md-block text-light bg-dark bg-opacity-50 rounded">
            <h5>Macetas de diferentes tamaños</h5>
            <p>Las mejores macetas para ti y para cualquiera</p>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <img :src="macetas" class="d-block w-100" alt="Macetas">
          <div class="carousel-caption d-none d-md-block text-light bg-dark bg-opacity-50 rounded">
            <h5>Tus macetas a tu mejor precio</h5>
            <p>Macetas Mary</p>
          </div>
        </div>
        <div class="carousel-item">
          <img :src="macetas" class="d-block w-100" alt="Macetas">
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

    <!-- Título de sección -->
    <h2 class="text-center mb-4 text-success fw-bold" style="font-family:Verdana, Geneva, Tahoma, sans-serif;">
      Productos Nuevos
    </h2>

    <!-- Productos -->
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-3 mb-4" v-for="(producto, index) in productos" :key="index">
          <div class="card h-100 shadow-sm border-0">
            <img :src="producto.img" class="card-img-top" alt="producto">
            <div class="card-body">
              <h5 class="card-title text-success">{{ producto.titulo }}</h5>
              <p class="card-text">{{ producto.descripcion }}</p>
              <a href="#" class="btn btn-success w-100">Ver más</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import macetas from '@/assets/img/macetasblancas.jpg'
import ardilla from '@/assets/img/ardilla_escultura.jpeg'
import gallito from '@/assets/img/galliro_de_las_rocas.jpeg'
import loros from '@/assets/img/loro_escultura.jpeg'

const productos = [
  {
    titulo: 'Escultura de ardilla',
    descripcion: 'Escultura de ardilla hecha de cemento',
    img: ardilla
  },
  {
    titulo: 'Gallito de las Rocas',
    descripcion: 'Escultura del gallito de las rocas versión decorativa',
    img: gallito
  },
  {
    titulo: 'Escultura de Loros',
    descripcion: 'Dos loros en una rama de árbol',
    img: loros
  },
  {
    titulo: 'Gallito de las Rocas 2',
    descripcion: 'Escultura decorativa del ave nacional del Perú',
    img: gallito
  }
]
</script>

<style scoped>
.card {
  transition: transform 0.3s ease;
  border-radius: 10px;
}

.card:hover {
  transform: scale(1.05);
}

.carousel {
  border-radius: 12px;
  overflow: hidden;
}
</style>
