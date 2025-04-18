<template>
  <section class="nosotros">
    <div class="container">
      <div class="texto">
        <h1>Sobre Nosotros</h1>
        <p>
          Nuestra misión es cultivar creatividad, vida y conciencia. Diseñamos productos únicos
          que no solo alegran tu día, sino que también promueven el amor por las plantas y el
          respeto por la naturaleza. Cada creación es una expresión viva de arte y compromiso.
        </p>
      </div>
      <div class="imagen">
        <img src="@/assets/img/aguila3.jpeg" alt="Imagen nosotros" />
      </div>
    </div>

    <!-- Nueva sección: Nuestros Valores -->
    <div class="valores">
      <h2>Nuestros Valores</h2>
      <div class="valores-container">
        <div class="valor-item">
          <i class="fa fa-leaf"></i>
          <h3>Sostenibilidad</h3>
          <p>Promovemos prácticas que respetan el medio ambiente, utilizando materiales reciclables y sostenibles.</p>
        </div>
        <div class="valor-item">
          <i class="fa fa-heart"></i>
          <h3>Pasión por el Arte</h3>
          <p>Cada pieza es el reflejo de nuestra dedicación y pasión por crear productos que inspiran.</p>
        </div>
        <div class="valor-item">
          <i class="fa fa-users"></i>
          <h3>Trabajo en Equipo</h3>
          <p>Creemos en la colaboración, donde cada miembro del equipo aporta su creatividad y experiencia.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Aquí no necesitamos lógica, pero puedes agregar interactividad si lo deseas.
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&family=Open+Sans&display=swap');

.nosotros {
  background: linear-gradient(135deg, #a8e063, #56ab2f); /* Fondo suave y elegante */
  padding: 80px 20px;
  color: #fff;
  font-family: 'Open Sans', sans-serif;
  box-shadow: inset 0 4px 10px rgba(0, 0, 0, 0.1); /* Sombra interna suave */
  border-radius: 8px;
  animation: fadeIn 1.5s ease-in-out;
}

.container {
  margin-top: 60px;
  max-width: 1100px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
}

.texto {
  flex: 1;
  min-width: 280px;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3); /* Sombra en el texto para hacerlo más legible */
}

.texto h1 {
  font-family: 'Playfair Display', serif;
  font-size: 3.5rem;
  margin-bottom: 20px;
  color: #f0f0f0;
}

.texto p {
  font-size: 1.2rem;
  line-height: 1.7;
  color: #e5e5e5;
  margin-bottom: 30px;
}

.imagen {
  flex: 1;
  display: flex;
  justify-content: center;
  min-width: 280px;
}

.imagen img {
  width: 350px;
  border-radius: 20px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2); /* Sombra más pronunciada en la imagen */
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.imagen img:hover {
  transform: scale(1.1); /* Aumento del tamaño con efecto de hover */
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25); /* Más sombra al hacer hover */
}

.valores {
  background-color: #f8f8f8;
  padding: 60px 20px;
  text-align: center;
  margin-top: 60px;
  border-radius: 10px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.valores h2 {
  font-size: 2.5rem;
  margin-bottom: 40px;
  font-family: 'Playfair Display', serif;
  color: #333;
}

.valores-container {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
}

.valor-item {
  flex: 1;
  min-width: 250px;
  padding: 30px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.valor-item h3 {
  font-size: 1.6rem;
  color: #56ab2f;
  margin-top: 15px;
}

.valor-item p {
  color: #555;
  font-size: 1.1rem;
  margin-top: 10px;
}

.valor-item i {
  font-size: 3.5rem;
  color: #56ab2f;
  transition: color 0.3s ease;
}

.valor-item:hover {
  transform: scale(1.05); /* Efecto de hover en cada valor */
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.15);
}

.valor-item:hover i {
  color: #4a9327; /* Cambio de color en el ícono */
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
    text-align: center;
  }

  .texto h1 {
    font-size: 2.5rem;
  }

  .imagen img {
    width: 280px;
  }

  .valores-container {
    flex-direction: column;
  }

  .valor-item {
    margin-bottom: 30px;
  }
}
</style>
