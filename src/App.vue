<template>
  <div id="app">
    <LoadingScreen />
    <Header />
    <main>
      <Transition name="page" mode="out-in">
        <router-view :productos="listaProductos" @producto-agregado="agregarALista" />
      </Transition>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import LoadingScreen from "./components/LoadingScreen.vue";

export default {
  components: {
    Header,
    Footer,
    LoadingScreen,
  },
  data() {
    return {
      listaProductos: []
    };
  },
  methods: {
    agregarALista(producto) {
      this.listaProductos.push(producto);
      console.log("Producto agregado:", producto);
      console.log("Lista de productos actualizada:", this.listaProductos);
    }
  }
};
</script>
