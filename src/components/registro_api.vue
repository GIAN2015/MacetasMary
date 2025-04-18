<script>
import axios from "axios";


export default {
  data() {
    return {
      products: [], // Array vacío por defecto
      inputValue: "", // Almacena el valor del input
      frutas: [{
        name: "Manzana",
        price: "15.9",
        item: 13,
        description: "rico muy rico",

      },
      {
        name: "Piña",
        price: "12.9",
        item: 14,
        description: "rico muy feo"
      },
      {
        name: "Mango",
        price: "11.9",
        item: 10,
        description: "feo muy feo"
      }]
    };
  },
  mounted() {
    axios
      .get("https://jsonplaceholder.typicode.com/albums/1/photos")
      .then((response) => (this.products = response.data));
  },
  methods: {
    prueba1(message) {
      console.log(message);
    },
    handleSubmit() {
      console.log("Valor ingresado:", this.inputValue);
      // Aquí puedes realizar más acciones con el valor del input
    },
  },
  computed:{
    frutasfiltradad(){
      return this.frutas.filter(prods => prods.item>12)
    }


  }
};
</script>

<template>
  <h1 style="margin-top: 200px;">Registro de APIs</h1>


  <!-- Input para ingresar texto -->


  <div>
    <table class="table table-bordered table-hover">
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>price</th>
          <th>stock</th>
          <th>description</th>
          <th>acciones</th>
          <th>Activador</th>
        </tr>
      </thead>
      <tbody>

        <tr v-for="(prods, i) in frutasfiltradad" :key="prods.name"  >
          <td>
            {{ i + 1 }}
          </td>
          <td>
            {{ prods.name }}
          </td>
          <td>
            {{ prods.price }}
          </td>
          <td>
            {{ prods.item }}
          </td>
          <td>
            {{ prods.description }}
          </td>

          <td>
            <router-link :to="{path:'editar/'+ prods.name}">
              <button class="btn btn-warning">editar</button>
            </router-link>
          </td>
          <td>

            <button @click="prueba1('texto1')">Activar 1</button>
            <button @click="prueba1('texto2')">Activar 2</button>

          </td>

        </tr>

      </tbody>

    </table>
  </div>
  <!-- Tabla de productos -->
  <div class="row">
    <div class="col-lg-8 offset-lg-2">
      <div class="table-responsive">
        <table class="table table-bordered table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Imagen</th>
              <th>Imagen</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody class="table-group-divider" id="contenido">
            <tr v-for="(prod, index) in products" :key="prod.id">
              <td>{{ index + 1 }}</td>
              <td>{{ prod.title }}</td>
              <td>
                <img :src="prod.url" alt="product" style="width: 100px;" />
              </td>
              <td>
                <img :src="prod.thumbnailUrl" alt="producto thumbnail" style="width: 100px;" />
              </td>
              <td>
                <router-link :to="{ path: 'edit/' + prod.id }" class="btn btn-warning">
                  <i class="fa-solid fa-edit" style="margin: 2px;"></i>
                </router-link>
                &nbsp;
                <button class="btn btn-danger">
                  <i class="fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style></style>
