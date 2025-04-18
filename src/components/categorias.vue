<template>
  <div class="productos-container">
    <h2 class="section-title">Categorías</h2>
    <div class="row justify-content-center gy-4">
      <div class="col-md-6 col-lg-3" v-for="(producto, index) in productos" :key="index">
        <div class="card h-100 shadow-sm border-0">
          <img :src="producto.img" class="card-img-top" :alt="producto.titulo">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title text-success">{{ producto.titulo }}</h5>
            <p class="card-text">{{ producto.descripcion }}</p>
            <a href="#" class="btn btn-outline-success mt-auto">Ver más</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
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
    descripcion: 'Versión decorativa del ave nacional del Perú',
    img: gallito
  }
]
</script>

<style scoped>
.productos-container {
  padding: 60px 20px;
  margin-top: 100px;
  background-color: #f9f9f9;
}

.section-title {
  text-align: center;
  color: #198754;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 40px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-radius: 16px;
}

.card:hover {
  transform: scale(1.03);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
}

.card-img-top {
  height: 220px;
  object-fit: cover;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

.card-body {
  display: flex;
  flex-direction: column;
  padding: 1.25rem;
}

.card-title {
  font-size: 1.2rem;
  color: #198754;
}

.card-text {
  color: #555;
}

.btn {
  width: 100%;
  border-radius: 8px;
}
</style>
