
<template>
  <header class="encabezado py-5 text-center">
    <h1 class="display-4 fw-bold">
      Hojas de Vida
    </h1>

    <p class="lead">
      Selecciona una persona para consultar su información
    </p>
  </header>

  <main class="container py-5">
    <div class="row justify-content-center g-4">

      <div class="col-12 col-md-5">
        <router-link to="/luis" class="tarjeta d-block">

          <div class="icono">
            <img
              src="/imagenes/luis.png"
              alt="Foto de Luis Manuel Burgos Francis"
            >
          </div>

          <h2>
            Luis Manuel<br>
            Burgos Francis
          </h2>

          <p>
            Hoja de Vida
          </p>

          <span class="boton btn btn-primary">
            Ver hoja de vida
          </span>

        </router-link>
      </div>

      <div class="col-12 col-md-5">
        <router-link to="/jhenssen" class="tarjeta d-block">

          <div class="icono">
            <img
              src="/imagenes/jhenssen.png"
              alt="Foto de Jhenssen Jesús Bello Garay"
            >
          </div>

          <h2>
            Jhenssen Jesús<br>
            Bello Garay
          </h2>

          <p>
            Hoja de Vida
          </p>

          <span class="boton btn btn-primary">
            Ver hoja de vida
          </span>

        </router-link>
      </div>

    </div>
  </main>

  <footer class="text-center py-4">
    <p class="mb-0">
      © 2026 - Hojas de Vida
    </p>

    <router-link to="/admin" class="text-muted small">
      Administración
    </router-link>
  </footer>
</template>
