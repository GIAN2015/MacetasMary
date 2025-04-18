<template>
  <div class="gian">
    <h2>Lista de Productos</h2>
    <ul>
      <li v-for="(producto, index) in productos" :key="index">
        {{ producto.nombre }} - S/{{ producto.precio }} -
        {{ producto.cantidad }} - {{ producto.descripcion }} - {{ producto.categorias }}
      </li>
    </ul>
    <p v-if="productos.length === 0">No hay productos aún.</p>
  </div>
</template>

<script>
export default {
  props: ["productos"]
};
</script>

<style>
.gian {
  padding: 200px;
}
</style>
