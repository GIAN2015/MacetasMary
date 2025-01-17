<template>
  <div id="app">
    <LoadingScreen />
    <Header />
    <main>
      <Transition name="page" mode="out-in">
        <router-view />
      </Transition>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import LoadingScreen from './components/LoadingScreen.vue';
</script>

<style scoped>
main {
  min-height: calc(100vh - 100px);
  /* Ajustar según altura del Header y Footer */
  padding: 20px;
}

/* Transición para la entrada y salida de páginas */
.page-enter-active, .page-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}

.page-enter-from {
  opacity: 0;
  transform: translateX(100%);
}

.page-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}

</style>
