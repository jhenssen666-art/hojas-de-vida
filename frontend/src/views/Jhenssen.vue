
<template>
  <div>
    <header class="perfil-header py-5">
      <div class="container text-center">
        <div class="foto-perfil">
          <img
            src="/imagenes/jhenssen.png"
            alt="Foto de Jhenssen Jesús Bello Garay"
          >
        </div>

        <h1 class="display-5 fw-bold">
          Jhenssen Jesús Bello Garay
        </h1>
        <p>Hoja de Vida</p>
      </div>
    </header>

    <main class="cv-container container py-5">

      <section class="cv-seccion card shadow-sm border-0 p-4 mb-4">
        <h2>Información Personal</h2>
        <div class="informacion">
          <p><strong>Cédula de ciudadanía:</strong> 1.064.606.755</p>
          <p><strong>Dirección:</strong> CL 11 10 0, Chinú – Córdoba</p>
          <p><strong>Teléfono:</strong> 323 599 6364</p>
          <p><strong>Correo electrónico:</strong> jhenssen666@gmail.com</p>
        </div>
      </section>

      <section class="cv-seccion card shadow-sm border-0 p-4 mb-4">
        <h2>Perfil Laboral</h2>
        <div class="perfil-texto">
          <p>
            Estudiante universitario en Ingeniería de Software,
            con manejo básico de herramientas ofimáticas como Word.
            Cuenta con conocimientos fundamentales en el área
            tecnológica y disposición para el aprendizaje continuo.
          </p>
          <p>
            Se destaca por su responsabilidad, organización y
            capacidad para adaptarse a diferentes entornos laborales.
            Posee habilidades para el trabajo en equipo, seguimiento
            de instrucciones y cumplimiento de las tareas asignadas.
          </p>
        </div>
      </section>

      <section class="cv-seccion card shadow-sm border-0 p-4 mb-4">
        <h2>Experiencia Laboral</h2>
        <h3>Sin experiencia laboral registrada</h3>
        <p>Actualmente no registra experiencia laboral.</p>
      </section>

      <section class="cv-seccion card shadow-sm border-0 p-4 mb-4">
        <h2>Nivel Educativo</h2>
        <div class="estudio">
          <h3>Ingeniería de Software</h3>
          <p><strong>Nivel educativo:</strong> Universitario</p>
          <p><strong>Institución:</strong> Universidad de Cartagena – Sede a distancia Cereté</p>
          <p><strong>Estado:</strong> En curso</p>
          <p><strong>Finalización:</strong> Cursando actualmente</p>
        </div>
      </section>

      <section class="cv-seccion card shadow-sm border-0 p-4 mb-4">
        <h2>Educación Informal</h2>
        <div class="estudio">
          <h3>Taller de Neurofortalezas</h3>
          <p><strong>Tipo:</strong> Taller</p>
          <p><strong>Institución:</strong> COMFACOR</p>
          <p><strong>Estado:</strong> No certificado</p>
          <p><strong>Duración:</strong> 4 horas</p>
        </div>
      </section>

      <section class="cv-seccion card shadow-sm border-0 p-4 mb-4">
        <h2>Idiomas</h2>
        <div class="estudio">
          <h3>Inglés</h3>
          <p><strong>Nivel:</strong> Alto</p>
        </div>
      </section>

      <section class="cv-seccion card shadow-sm border-0 p-4 mb-4">
        <h2>Otros Conocimientos</h2>
        <div class="estudio">
          <h3>Microsoft Word</h3>
          <p><strong>Nivel:</strong> Intermedio</p>
        </div>
      </section>

      <div class="volver text-center">
        <router-link to="/" class="boton-volver btn btn-primary">
          ← Volver a las hojas de vida
        </router-link>
      </div>

    </main>

    <footer class="text-center py-4">
      <p>© 2026 - Hojas de Vida</p>
    </footer>
  </div>
</template>
