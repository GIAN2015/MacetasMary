import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import Productos from '@/components/Productos.vue';
import categorias from '@/components/categorias.vue';
import nosotros from '@/components/nosotros.vue';
import contactanos from '@/components/contactanos.vue';
import Librodereclamaciones from '@/components/Librodereclamaciones.vue';
import { useLoadingStore } from "@/stores/loadingStore";
import Registro_api from '@/components/registro_api.vue';
import pruebas from '@/components/pruebas.vue';
import create from '@/components/CRUD/create.vue';

import view_list from '@/components/CRUD/view_list.vue'



const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/productos', name: 'Productos', component: Productos },
  { path: '/categorias', name: 'categorias', component: categorias },
  { path: '/nosotros', name: 'nosotros', component: nosotros },
  { path: '/contactanos', name: 'contactanos', component: contactanos },
  { path: '/librodereclamaciones', name: 'Librodereclamaciones', component: Librodereclamaciones },
  {path: '/Registro_api', name: 'Registro_api', component: Registro_api},
  { path: '/pruebas', name: 'pruebas', component:pruebas },
  { path: '/create', name:'create', component: create, props: true },
  { path: '/view_list', name: 'view_list', component: view_list, props: true },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  const loadingStore = useLoadingStore();
  loadingStore.showLoading();
  setTimeout(next, 500); // Simula un breve retardo
});

router.afterEach(() => {
  const loadingStore = useLoadingStore();
  loadingStore.hideLoading();
});
export default router;
