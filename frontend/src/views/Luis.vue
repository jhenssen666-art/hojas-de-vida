
<script setup>
import { ref, onMounted } from 'vue'

const experiencias = ref([])
const cargando = ref(true)
const error = ref('')

const cargarExperiencias = async () => {
  try {
    const respuesta = await fetch('http://localhost:3000/api/experiencias')

    if (!respuesta.ok) {
      throw new Error('No se pudieron consultar las experiencias')
    }

    const datos = await respuesta.json()

    experiencias.value = datos.filter(
      experiencia =>
        experiencia.persona.trim().toLowerCase() ===
        'luis manuel burgos francis'
    )
  } catch (err) {
    error.value = 'No fue posible cargar las experiencias laborales.'
  } finally {
    cargando.value = false
  }
}

onMounted(cargarExperiencias)
</script>

<template>
  <div>
    <header class="perfil-header py-5">
      <div class="container text-center">
        <div class="foto-perfil">
          <img
            src="/imagenes/luis.png"
            alt="Foto de Luis Manuel Burgos Francis"
          >
        </div>

        <h1 class="display-5 fw-bold">
          Luis Manuel Burgos Francis
        </h1>
        <p class="lead mb-0">Hoja de Vida</p>
      </div>
    </header>

    <main class="cv-container container py-5">
      <div class="row g-4">

        <div class="col-12 col-lg-6">
          <section class="cv-seccion card shadow-sm border-0 h-100 p-4">
            <h2>Información Personal</h2>
            <div class="informacion">
              <p><strong>Dirección:</strong> K 13 # 1-32 Barrio Los Alpes, Ciénaga de Oro – Córdoba</p>
              <p><strong>Celular:</strong> 324 5657244</p>
              <p><strong>Correo electrónico:</strong> luisfrancis00017@gmail.com</p>
              <p><strong>Cédula de ciudadanía:</strong> 1.003.192.246 de Ciénaga de Oro</p>
              <p><strong>Fecha de nacimiento:</strong> Enero 09 de 2002</p>
              <p><strong>Lugar de nacimiento:</strong> Cereté – Córdoba</p>
              <p><strong>Estado civil:</strong> Soltero</p>
            </div>
          </section>
        </div>

        <div class="col-12 col-lg-6">
          <section class="cv-seccion card shadow-sm border-0 h-100 p-4">
            <h2>Estudios Realizados</h2>

            <div class="estudio mb-4">
              <h3>Primaria</h3>
              <p class="mb-1">Institución Educativa Alianza para el Progreso</p>
              <span>Ciénaga de Oro – Córdoba</span>
            </div>

            <div class="estudio mb-4">
              <h3>Secundaria</h3>
              <p class="mb-1">Institución Educativa Madre Bernarda</p>
              <span>Ciénaga de Oro – Córdoba</span>
            </div>

            <div class="estudio">
              <h3>Título Obtenido</h3>
              <p class="mb-0">Bachiller Académico</p>
            </div>
          </section>
        </div>

        <div class="col-12 col-lg-6">
          <section class="cv-seccion card shadow-sm border-0 h-100 p-4">
            <h2>Experiencia Laboral</h2>

            <p v-if="cargando">Cargando experiencias...</p>
            <p v-else-if="error">{{ error }}</p>

            <div v-else-if="experiencias.length">
              <div
                v-for="experiencia in experiencias"
                :key="experiencia._id"
                class="experiencia mb-4"
              >
                <h3>{{ experiencia.empresa }}</h3>
                <p><strong>Cargo:</strong> {{ experiencia.cargo }}</p>
                <p><strong>Tiempo laborado:</strong> {{ experiencia.duracion }}</p>
                <p><strong>Ciudad:</strong> {{ experiencia.ciudad }}</p>
                <p class="mb-0">
                  <strong>Descripción:</strong> {{ experiencia.descripcion }}
                </p>
              </div>
            </div>

            <p v-else>
              Sin experiencia laboral registrada.
            </p>
          </section>
        </div>

        <div class="col-12 col-lg-6">
          <section class="cv-seccion card shadow-sm border-0 h-100 p-4">
            <h2>Referencias Personales</h2>

            <div class="referencia">
              <h3>Manuel Gregorio Salgado Argumedo</h3>
              <p>Supervisor</p>
              <p>Tel. 300 5306350</p>
              <p class="mb-0">Ciénaga de Oro – Córdoba</p>
            </div>
          </section>
        </div>

        <div class="col-12">
          <section class="cv-seccion card shadow-sm border-0 p-4">
            <h2>Referencias Familiares</h2>

            <div class="row g-4">
              <div class="col-12 col-md-6">
                <div class="referencia">
                  <h3>Maria Fernanda Guzman Francis</h3>
                  <p>Administradora en salud</p>
                  <p>Tel. 304 3958984</p>
                  <p class="mb-0">Ciénaga de Oro – Córdoba</p>
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="referencia">
                  <h3>Yenis Patricia Francis Reales</h3>
                  <p>Ama de casa</p>
                  <p>Tel. 300 5731430</p>
                  <p class="mb-0">Ciénaga de Oro – Córdoba</p>
                </div>
              </div>
            </div>
          </section>
        </div>

      </div>

      <div class="volver text-center mt-5">
        <router-link to="/" class="boton-volver btn btn-primary">
          ← Volver a las hojas de vida
        </router-link>
      </div>
    </main>

    <footer class="text-center py-4">
      <p class="mb-0">© 2026 - Hojas de Vida</p>
    </footer>
  </div>
</template>
