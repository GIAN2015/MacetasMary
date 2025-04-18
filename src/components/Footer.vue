<template>
  <footer>
    <div class="container py-4">
      <div class="row">
        <!-- Columna 1: Logo y descripción -->
        <div class="col-md-3 mb-4">
          <a href="/nosotros">
            <img src="@/assets/img/macetas.jpg" width="180" class="rounded shadow-sm mb-2">
          </a>
          <h5 class="text-white">Sobre Nosotros</h5>
          <p class="text-light small">
            Somos una empresa familiar que busca llegar a los jardines y hogares para mejorar la decoración.
          </p>
        </div>

        <!-- Columna 2: Menú -->
        <div class="col-md-3 mb-4">
          <h5 class="text-white">Menú</h5>
          <ul class="footer-menu">
            <li><a href="/">Home</a></li>
            <li><a href="/nosotros">Nosotros</a></li>
            <li><a href="/categorias">Categorías</a></li>
            <li><a href="/productos">Productos</a></li>
          </ul>
        </div>

        <!-- Columna 3: Contacto -->
        <div class="col-md-3 mb-4">
          <h5 class="text-white">Contáctanos</h5>
          <ul class="footer-contact">
            <li><i class="fab fa-whatsapp text-white me-2"></i><a href="#">967152992</a></li>
            <li><i class="fas fa-envelope text-white me-2"></i><a href="#">giansica@gmail.com</a></li>
          </ul>
        </div>

        <!-- Columna 4: Libro de Reclamaciones -->
        <div class="col-md-3 mb-4 text-center">
          <a href="/librodereclamaciones">
            <img src="@/assets/img/librodereclamaciones.png" width="160" class="img-fluid rounded">
          </a>
        </div>
      </div>

      <div class="row border-top pt-3 mt-3">
        <div class="col text-center text-light small">
          <p>© 2025 Mari Macetas, Todos los derechos reservados.</p>
          <p>Desarrollado por Gian Sinarahua</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background: linear-gradient(to right, #4caf50, #388e3c);
  color: white;
}

.footer-menu,
.footer-contact {
  list-style-type: none;
  padding: 0;
}

.footer-menu li,
.footer-contact li {
  margin-bottom: 8px;
}

.footer-menu li a,
.footer-contact li a {
  color: #ffffff;
  text-decoration: none;
  font-size: 14px;
}

.footer-menu li a:hover,
.footer-contact li a:hover {
  text-decoration: underline;
  color: #c8e6c9;
}

.footer-contact li {
  display: flex;
  align-items: center;
}

.footer-contact i {
  font-size: 16px;
}

footer p {
  margin: 0;
  font-size: 13px;
}

@media (max-width: 768px) {
  .text-center img {
    margin-top: 20px;
  }
}
</style>
