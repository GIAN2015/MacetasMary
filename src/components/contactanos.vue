<template>
  <div class="contact-container">
    <h1 class="contact-title">Contáctanos</h1>

    <form class="contact-form">
      <div class="row mb-3">
        <div class="col-md-6">
          <label class="form-label">Nombre</label>
          <input type="text" class="form-control" placeholder="Gian Carlos">
        </div>
        <div class="col-md-6">
          <label class="form-label">Apellido</label>
          <input type="text" class="form-control" placeholder="Sinarahua Cárdenas">
        </div>
      </div>

      <div class="mb-3">
        <label class="form-label">Correo</label>
        <input type="email" class="form-control" placeholder="example@gmail.com">
      </div>

      <div class="mb-3">
        <label class="form-label">Teléfono</label>
        <input type="tel" class="form-control" placeholder="+51 123456789">
      </div>

      <div class="mb-4">
        <label class="form-label">Mensaje</label>
        <textarea class="form-control" rows="4" placeholder="Escríbenos para más macetas..."></textarea>
      </div>

      <button type="submit" class="btn btn-success w-100">Enviar mensaje</button>
    </form>
  </div>
</template>

<script setup>
</script>

<style scoped>
.contact-container {
 
  max-width: 700px;
  margin: 170px auto;
  padding: 40px;
  background-color: #ffffff;
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.contact-title {
  text-align: center;
  margin-bottom: 30px;
  font-weight: bold;
  color: #198754;
}

.form-label {
  font-weight: 500;
  margin-bottom: 6px;
}
</style>
