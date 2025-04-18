<template>
  <header>
    <div class="container-fluid">
      <!-- Social + Lema -->
      <div class="row align-items-center text-center text-md-start py-2 top-header">
        <div class="col-12 col-md-4 d-flex justify-content-center justify-content-md-start">
          <a href="#" class="social-icon rounded-circle"><i class="fab fa-facebook-f"></i></a>
          <a href="#" class="social-icon rounded-circle"><i class="fab fa-instagram"></i></a>
          <a href="#" class="social-icon rounded-circle"><i class="fab fa-twitter"></i></a>
          <a href="#" class="social-icon rounded-circle"><i class="fab fa-whatsapp"></i></a>
        </div>
        <div class="col-12 col-md-4">
          <strong class="slogan">De nuestra creatividad a tu jardín las mejores macetas para ti</strong>
        </div>
      </div>

      <!-- Contacto / Logo / Login -->
      <div class="row align-items-center py-3 bg-white text-center text-md-start contact-header">
        <div class="col-12 col-md-4">
          <p class="mb-1"><i class="fas fa-phone-alt text-success me-2"></i>+51 967 152 992</p>
          <p class="mb-0"><i class="fas fa-envelope text-success me-2"></i>giansinarahua@outlook.com</p>
        </div>
        <div class="col-12 col-md-4 text-center">
          <img src="@/assets/img/macetas.jpg" alt="macetas" class="imagen-clase shadow">
        </div>
        <div class="col-12 col-md-4 text-md-end text-center mt-3 mt-md-0">
          <a href="#" class="auth-link me-1">INICIAR SESIÓN /</a>
          <a href="#" class="auth-link">REGISTRARSE</a>
          <div class="icons d-inline-flex align-items-center ms-2">
            <a href="#" class="icon"><i class="fas fa-search"></i></a>
            <a href="#" class="icon"><i class="fas fa-heart"></i><span class="badge">0</span></a>
            <a href="#" class="icon"><i class="fas fa-shopping-bag"></i><span class="badge">0</span></a>
            <span class="price">S/0.00</span>
          </div>
        </div>
      </div>

      <!-- Navegación y búsqueda -->
      <div class="row align-items-center py-3 bg-light border-top border-bottom">
        <div class="col-12 col-md-4 text-center text-md-start">
          <a class="navbar-brand d-flex align-items-center fw-bold text-dark" href="/">
            <img src="@/assets/img/macetas.jpg" alt="Logo" width="40" class="me-2 rounded-circle border">
            Macetas Mary
          </a>
        </div>
        <div class="col-12 col-md-4">
          <ul class="nav justify-content-center flex-column flex-md-row nav-underline">
            <li class="nav-item"><a class="nav-link active" href="/">Home</a></li>
            <li class="nav-item"><a class="nav-link" href="/nosotros">Nosotros</a></li>
            <li class="nav-item"><a class="nav-link" href="/categorias">Categorías</a></li>
            <li class="nav-item"><a class="nav-link" href="/productos">Productos</a></li>
            <li class="nav-item"><a class="nav-link" href="/contactanos">Contáctanos</a></li>
          </ul>
        </div>
        <div class="col-12 col-md-4">
          <form class="d-flex justify-content-center justify-content-md-end px-2" role="search">
            <input class="form-control me-2 rounded-pill border-success" type="search" placeholder="Buscar..."
              aria-label="Search">
            <button class="btn btn-success rounded-pill" type="submit">Buscar</button>
          </form>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.top-header {
  background: linear-gradient(to right, #4caf50, #388e3c);
  color: white;
  margin-top: 40px;
}

.social-icon {
  width: 35px;
  height: 35px;
  background: white;
  color: #4caf50;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
  transition: all 0.3s ease;
}

.social-icon:hover {
  background: #2e7d32;
  color: white;
}

.slogan {
  font-size: 14px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.contact-header {
  border-bottom: 1px solid #eee;
}

.auth-link {
  text-decoration: none;
  color: #333;
  font-size: 14px;
}

.auth-link:hover {
  color: #4caf50;
}

.icons {
  display: inline-flex;
  align-items: center;
  gap: 10px;
}

.icon {
  position: relative;
  color: #4caf50;
  font-size: 18px;
  text-decoration: none;
}

.icon:hover {
  color: #2e7d32;
}

.badge {
  position: absolute;
  top: -6px;
  right: -6px;
  background: #f44336;
  color: white;
  font-size: 11px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.price {
  font-size: 14px;
  color: #333;
}

.imagen-clase {
  width: 60px;
  height: auto;
  border-radius: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.nav-link {
  color: #333;
  text-decoration: none;
  padding: 0.5rem 1rem;
  font-weight: 500;
  font-family: 'Arial', sans-serif;
}

.nav-link:hover,
.nav-link.active {
  border-bottom: 3px solid #4caf50;
  color: #4caf50;
}

/* Responsive ajustes */
@media (max-width: 768px) {
  .nav.nav-underline {
    flex-direction: column;
    align-items: center;
  }

  .auth-link {
    display: inline-block;
    margin: 4px 0;
  }

  .imagen-clase {
    margin: 10px auto;
  }

  .social-icon {
    margin-bottom: 5px;
  }
}
</style>
