import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

// Importa estilos
import './assets/main.css';
import 'bootstrap/dist/css/bootstrap.css';

// Importa Bootstrap JS
import 'bootstrap/dist/js/bootstrap.bundle.js';

const app = createApp(App);

// Configura los plugins
app.use(createPinia());
app.use(router);

// Monta la aplicación
app.mount('#app');
