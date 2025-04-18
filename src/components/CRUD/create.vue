<template>
  <div class="gian">
    <h2>Agregar Producto</h2>
    <form @submit.prevent="agregarProducto">
      <ul>
        <li>
          <input v-model="producto.nombre" placeholder="Nombre del producto" required />
        </li>
        <li>
          <input v-model.number="producto.precio" placeholder="Precio" type="number" required />
        </li>
        <li>
          <input v-model.number="producto.cantidad" placeholder="Cantidad" type="number" required />
        </li>
        <li>
          <input v-model="producto.categorias" placeholder="Categoría" type="text" required />
        </li>
        <li>
          <input v-model="producto.descripcion" placeholder="Descripción" type="text" required />
        </li>
      </ul>
      <button type="submit">Enviar</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      producto: { nombre: "", precio: 0, descripcion: "", categorias: "", cantidad: 0 }
    };
  },
  methods: {
    agregarProducto() {
      this.$emit("producto-agregado", { ...this.producto });
      this.producto = { nombre: "", precio: 0, descripcion: "", categorias: "", cantidad: 0 }; // Reset formulario
    }
  }
};
</script>
