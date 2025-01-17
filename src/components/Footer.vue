<template>
  <footer>
    <div class="container">
      <div class="row">
        <!-- Columna 1 -->
        <div class="col">
          <a href="/nosotros">
            <img src="@/assets/img/macetas.jpg" width="200px">
          </a>
          <h5>Sobre Nosotros</h5>
          <p>Somos una empresa familiar que busca llegar a los jardínes y partes de sus casas para la mejora de
            la decoración de su hogar </p>
        </div>

        <!-- Columna 2 -->
        <div class="col" style="margin-top: 7px;">
          <h5>Menú</h5>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/nosotros">Nosotros</a></li>
            <li><a href="/categorias">Categorías</a></li>
            <li><a href="/productos">Productos</a></li>

          </ul>
        </div>

        <!-- Columna 3 -->


        <div class="col-4" style="margin-top: 7px;">

          <h5 style="margin-right: 390px;">Contáctanos</h5>
          <ul class="social-links" style="color: black;">
            <li><a href="#"><i class="fab fa-whatsapp"></i> 967152992</a></li>
            <li><a href="#"><i class="contac-item"></i> giansica@gmail.com</a></li>
          </ul>

        </div>
        <div class="col" style="margin-top: 10px; margin-left:-200px;">
          <nav>
            <a href="/librodereclamaciones">
              <img src="@/assets/img/librodereclamaciones.png" width="200px">
            </a>
          </nav>
        </div>

      </div>
      <div class="row mt-3">
        <div class="col text-center">
          <p>© 2025 Mari macetas, Todos los derechos reservados.</p>
          <p>Desarrollado por Gian Sinarahua</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
footer {
  background-color: #f8f9fa;
  /* Color de fondo */
  padding: 20px 0;
  border-top: 1px solid #ccc;
}

footer h5 {
  font-size: 18px;
  margin-bottom: 10px;
  color: #333;
}

footer p {
  font-size: 14px;
  color: #666;
}

footer ul {
  list-style-type: none;
  padding: 0;
}

footer ul li {
  margin-bottom: 5px;
}

footer ul li a {
  color: #007bff;
  text-decoration: none;
}

footer ul li a:hover {
  text-decoration: underline;
}

.social-links li {
  display: flex;
  align-items: center;
  color: black;
}

.social-links i {
  margin-right: 5px;
  color: black;
}

footer .text-center {
  font-size: 12px;
  color: #999;
}
</style>
