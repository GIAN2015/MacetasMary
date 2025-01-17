<template>
  <title>Header</title>

  <header>
    <div class="container text-center">
      <div class="row social-row">
        <div class="col">
          <!-- Facebook -->
          <a href="https://facebook.com" target="_blank" class="social-icon">
            <i class="fab fa-facebook-f"></i>
          </a>
          <!-- Instagram -->
          <a href="https://instagram.com" target="_blank" class="social-icon">
            <i class="fab fa-instagram"></i>
          </a>
          <!-- Twitter -->
          <a href="https://twitter.com" target="_blank" class="social-icon">
            <i class="fab fa-twitter"></i>
          </a>
          <!-- WhatsApp -->
          <a href="https://wa.me/123456789" target="_blank" class="social-icon">
            <i class="fab fa-whatsapp"></i>
          </a>
        </div>
        <div class="col" style="color: white; margin-left: -100px;">
          <strong class="font-header">De nuestra creatividad a tu jardín las mejores macetas para ti </strong>
        </div>

        <div class="col">

        </div>


      </div>
      <div class="row 2" style="background-color: white;">
        <div class="col">
          <div>
            <strong>Teléfono: </strong>
            <a class="contact-item" style="margin-left: 60px;">
              <span>+51 967 152 992 </span>
            </a>
            <strong>Correo:</strong>
            <a class="contact-item">
              <span>giansinarahua@outlook.com</span>
            </a>
          </div>
        </div>
        <div class="col-5">
          <img src="@/assets/img/macetas.jpg" alt="macetas" class="imagen-clase">

        </div>
        <div class="col">
          <div class="header-right">
            <!-- Iniciar sesión / Registrarse -->
            <a href="#" class="auth-link">INICIAR SESIÓN /</a>
            <a href="#" class="auth-link">REGISTRARSE</a>

            <!-- Iconos -->
            <div class="icons">
              <!-- Búsqueda -->
              <a href="#" class="icon">
                <i class="fas fa-search"></i>
              </a>
              <!-- Favoritos -->
              <a href="#" class="icon">
                <i class="fas fa-heart"></i>
                <span class="badge">0</span>
              </a>
              <!-- Carrito -->
              <a href="#" class="icon">
                <i class="fas fa-shopping-bag"></i>
                <span class="badge">0</span>
              </a>
              <!-- Precio -->
              <span class="price">{{ 'S/0.00' }}</span>
            </div>
          </div>

        </div>
      </div>
      <div class="row custom-row " style="background-color: white;">
        <div class="col">
          <nav class="navbar">
            <div class="container-fluid">
              <a class="navbar-brand" href="/">
                <img src="@/assets/img/macetas.jpg" alt="Logo" width="30" class="d-inline-block align-text-top">
                Macetas Mary
              </a>
            </div>
          </nav>
        </div>
        <div class="col">
          <ul class="nav nav-underline">
            <li class="nav-item" style="color: black;">
              <a class="nav-link" aria-current="page" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" style="color: black;" href="/nosotros">Nosotros</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" style="color: black;" href="/categorias">Categorías</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/productos" style="color: black;">Productos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/contactanos" style="color: black;">Contáctanos</a>
            </li>

          </ul>
        </div>
        <div class="col">
          <nav class="search">
            <div class="container-fluid" style="padding-right: 90px;">
              <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Buscar..." aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Buscar</button>
              </form>
            </div>
          </nav>
        </div>

      </div>
    </div>

  </header>

</template>


<style scoped>
.nav-link {
  color: black;
  /* Color negro para los enlaces */
  text-decoration: none;
  /* Quitar subrayado por defecto */
  border-bottom: 5px solid transparent;
  /* Línea inferior transparente (no visible por defecto) */
  padding-bottom: 5px;
  /* Espaciado para la línea */
  font-family: Arial, Helvetica, sans-serif;
}


.nav-link:hover {
  color: black;
  /* Mantener color negro al pasar el mouse */
  border-bottom: 3px solid black;
  /* Línea inferior negra al pasar el mouse */
}

.nav-link.active {
  color: black;
  /* Color negro cuando está activo */
  font-weight: normal;
  /* Sin negrita */
  border-bottom: 3px solid black;
  /* Línea inferior negra más gruesa */
}

.bg-body-tertiary {
  background-color: white;
}

.custom-row {
  border-top: 1px solid #9c958d;
  /* Línea superior */
}




.contact-item {
  color: gray;
  padding: 15px;
  font-size: medium;
  font-family: Verdana, Geneva, Tahoma, sans-serif;




}

.imagen-clase {
  margin-left: -100px;
  position: fixed;
  width: 70px;
  margin-top: -10px;
  /* Hace que la imagen ocupe todo el ancho del contenedor */
  height: auto;
  /* Mantiene las proporciones de la imagen */
  border-radius: 10px;
  /* Bordes redondeados */

  /* Sombra para darle estilo */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  /* Efectos de hover */
}

/* Estilo general del header */
header {
  display: flex;
  /* Coloca los contenedores uno al lado del otro */
  justify-content: space-between;
  /* Espacio uniforme entre los contenedores */
  align-items: center;
  /* Alinea los contenedores verticalmente */
  height: 100px;
  /* Altura del header */
  position: fixed;
  margin-top: 53px;
}




.row {
  width: 130%;
  /* Asegura que las filas ocupen todo el ancho */
  padding: 13px;
  /* Elimina márgenes entre las filas */
  background-color: #a5e14a;
  margin-left: -125px;

}

/* Colores para cada contenedor */
.font-header {
  color: white;
  font-size: 14px;
  font-style: initial;
}

.social-icon {
  margin-left: 20px;
  padding: 5px;
  color: white;
  margin-right: 5px;

}

.social-icon:hover {
  color: grey;
  /* Cambiar el color del ícono */

  border-radius: 5px;
  /*
   Bordes redondeados para el fondo */
}

.header-right {
  display: flex;
  align-items: center;
  gap: 15px;
  font-family: Arial, sans-serif;
  margin-left: -90px;
}

.auth-link {
  text-decoration: none;
  color: #333;
  font-size: 14px;
}

.auth-link:hover {
  color: #555;
}

.icons {
  display: flex;
  align-items: center;
  gap: 10px;
}

.icon {
  position: relative;
  text-decoration: none;
  color: #333;
  font-size: 18px;
}

.icon:hover {
  color: #555;
}

.badge {
  position: absolute;
  top: -5px;
  right: -5px;
  background: #4caf50;
  color: white;
  font-size: 12px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.price {
  font-size: 14px;
  color: #333;
}
</style>
