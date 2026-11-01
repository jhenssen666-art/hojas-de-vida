
<script setup>
import { ref, onMounted } from 'vue'

const API = 'http://localhost:3000/api/experiencias'

const experiencias = ref([])
const cargando = ref(false)
const mensaje = ref('')
const editandoId = ref(null)

const formulario = ref({
  persona: 'Luis Manuel Burgos Francis',
  empresa: '',
  cargo: '',
  duracion: '',
  ciudad: '',
  descripcion: ''
})

async function cargarExperiencias() {
  cargando.value = true

  try {
    const respuesta = await fetch(API)
    if (!respuesta.ok) throw new Error()
    experiencias.value = await respuesta.json()
  } catch {
    mensaje.value = 'No se pudieron cargar las experiencias.'
  } finally {
    cargando.value = false
  }
}

function limpiarFormulario() {
  editandoId.value = null
  formulario.value = {
    persona: 'Luis Manuel Burgos Francis',
    empresa: '',
    cargo: '',
    duracion: '',
    ciudad: '',
    descripcion: ''
  }
}

async function guardarExperiencia() {
  mensaje.value = ''

  const metodo = editandoId.value ? 'PUT' : 'POST'
  const url = editandoId.value
    ? `${API}/${editandoId.value}`
    : API

  try {
    const respuesta = await fetch(url, {
      method: metodo,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formulario.value)
    })

    if (!respuesta.ok) throw new Error()

    mensaje.value = editandoId.value
      ? 'Experiencia actualizada correctamente.'
      : 'Experiencia registrada correctamente.'

    limpiarFormulario()
    await cargarExperiencias()
  } catch {
    mensaje.value = 'Ocurrió un error al guardar.'
  }
}

function editarExperiencia(exp) {
  editandoId.value = exp._id
  formulario.value = {
    persona: exp.persona,
    empresa: exp.empresa,
    cargo: exp.cargo,
    duracion: exp.duracion,
    ciudad: exp.ciudad,
    descripcion: exp.descripcion
  }
}

async function eliminarExperiencia(id) {
  if (!confirm('¿Seguro que deseas eliminar esta experiencia?')) return

  try {
    const respuesta = await fetch(`${API}/${id}`, {
      method: 'DELETE'
    })

    if (!respuesta.ok) throw new Error()

    mensaje.value = 'Experiencia eliminada correctamente.'
    await cargarExperiencias()
  } catch {
    mensaje.value = 'No se pudo eliminar la experiencia.'
  }
}

onMounted(cargarExperiencias)
</script>

<template>
  <main class="container py-5">
    <h1 class="text-center mb-4">Panel de administración</h1>

    <p v-if="mensaje">{{ mensaje }}</p>

    <section class="card p-4 mb-5">
      <h2>{{ editandoId ? 'Editar experiencia' : 'Registrar experiencia' }}</h2>

      <form @submit.prevent="guardarExperiencia">
        <div class="mb-3">
          <label class="form-label">Persona</label>
          <select v-model="formulario.persona" class="form-select">
            <option>Luis Manuel Burgos Francis</option>
            <option>Jhenssen Jesús Bello Garay</option>
          </select>
        </div>

        <div class="mb-3">
          <label class="form-label">Empresa</label>
          <input v-model="formulario.empresa" class="form-control" required>
        </div>

        <div class="mb-3">
          <label class="form-label">Cargo</label>
          <input v-model="formulario.cargo" class="form-control" required>
        </div>

        <div class="mb-3">
          <label class="form-label">Duración</label>
          <input v-model="formulario.duracion" class="form-control" required>
        </div>

        <div class="mb-3">
          <label class="form-label">Ciudad</label>
          <input v-model="formulario.ciudad" class="form-control" required>
        </div>

        <div class="mb-3">
          <label class="form-label">Descripción</label>
          <textarea v-model="formulario.descripcion" class="form-control" required></textarea>
        </div>

        <button class="btn btn-primary" type="submit">
          {{ editandoId ? 'Actualizar' : 'Guardar experiencia' }}
        </button>

        <button
          v-if="editandoId"
          class="btn btn-secondary ms-2"
          type="button"
          @click="limpiarFormulario"
        >
          Cancelar
        </button>
      </form>
    </section>

    <section>
      <h2>Experiencias registradas</h2>

      <p v-if="cargando">Cargando...</p>
      <p v-else-if="experiencias.length === 0">
        No hay experiencias registradas.
      </p>

      <article
        v-for="exp in experiencias"
        :key="exp._id"
        class="card p-3 mb-3"
      >
        <h3>{{ exp.empresa }} - {{ exp.cargo }}</h3>
        <p><strong>Persona:</strong> {{ exp.persona }}</p>
        <p><strong>Duración:</strong> {{ exp.duracion }}</p>
        <p><strong>Ciudad:</strong> {{ exp.ciudad }}</p>
        <p>{{ exp.descripcion }}</p>

        <div>
          <button class="btn btn-warning me-2" @click="editarExperiencia(exp)">
            Editar
          </button>

          <button class="btn btn-danger" @click="eliminarExperiencia(exp._id)">
            Eliminar
          </button>
        </div>
      </article>
    </section>

    <router-link to="/" class="btn btn-secondary mt-4">
      Volver al inicio
    </router-link>
  </main>
</template>
