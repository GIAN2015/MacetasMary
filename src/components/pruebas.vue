<script>
import axios from 'axios';


export default {
  data() {
    return {
      personaje: []

    }
  },
  methods: {

  },

  computed: {

  },
  mounted() {
    axios
      .get("https://jsonplaceholder.typicode.com/albums/1/photos")
      .then((response) => (this.products = response.data));
  }

}

</script>

<template>

  <div class="first">
    <div>
      <h1>Menú de rick and morty</h1>
    </div>
    <div>
      <ul>
        <li ><a href="/view_list">ver lista de productos</a></li>

        <li ><a href="/create">crear producto</a></li>
      </ul>
    </div>

  </div>
</template>

<style>
.first {
  margin-top: 100px;
  background-color: rgba(203, 233, 206, 0.377);
  padding: 100px;
}
</style>
