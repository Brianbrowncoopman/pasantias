<script setup>
import { ref, reactive } from 'vue'

// Estados reactivos para los formularios de servicios y tutores
const formServicio = reactive({
  nombreServicio: '',
  nombreJefatura: '',
  correoJefatura: '',
  rutJefatura: '',
  nombreJefaturaAlt: '',
  correoJefaturaAlt: '',
  rutJefaturaAlt: '',
  nombreSecretaria: '',
  correoSecretaria: '',
  rutSecretaria: ''
})

const formTutor = reactive({
  nombreTutor: '',
  correoTutor: ''
})

// Listas de ejemplo para las tablas
const tutoresClinicos = ref([])

const guardarServicio = () => {
  alert('Guardando servicio clínico y jefaturas...')
}

const actualizarServicio = () => {
  alert('Actualizando servicio clínico...')
}

const guardarTutor = () => {
  alert('Guardando tutor clínico...')
}
</script>

<template>
  <div class="admin-container">

    <!-- <button type="submit" class="btn-crear">Crear servicio </button> -->
    
    <!-- SECCIÓN SUPERIOR / PRINCIPAL -->
    <div class="main-layout">

      
      
      <!-- COLUMNA IZQUIERDA: Formulario de Servicio Clínico y Jefaturas -->
      <div class="left-form-section">
        
        <!-- Fila 1 -->
        <div class="widget-group">
          <label>Nombre Servicio/Unidad</label>
          <input type="text" v-model="formServicio.nombreServicio" placeholder="" required />
          
          <!----------->
          <!-- este es un desplegable  con el array de servicios que se tiene en la base de datos, para seleccionar el servicio que se quiere modificar-->
          <!----------->
        </div>

        <!-- Fila 2: Jefatura Principal -->
        <div class="form-row-3">
          <div class="widget-group">
            <label>Nombre Jefatura</label>
            <input type="text" v-model="formServicio.nombreJefatura" required />
          </div>
          <div class="widget-group">
            <label>Correo Jefatura</label>
            <input type="text" v-model="formServicio.correoJefatura" required />
          </div>
          <div class="widget-group">
            <label>RUT Jefatura</label>
            <input type="text" v-model="formServicio.rutJefatura" required />
          </div>
        </div>

        <!-- Fila 3: Jefatura Alternativa / Opcional -->
        <div class="form-row-3">
          <div class="widget-group">
            <label>Nombre Jefatura (s)</label>
            <input type="text" v-model="formServicio.nombreJefaturaAlt" required />
          </div>
          <div class="widget-group">
            <label>Correo Jefatura (s)</label>
            <input type="text" v-model="formServicio.correoJefaturaAlt" required />
          </div>
          <div class="widget-group">
            <label>RUT Jefatura (s)</label>
            <input type="text" v-model="formServicio.rutJefaturaAlt" required />
          </div>
        </div>

        <!-- Fila 4: Secretaría -->
        <div class="form-row-3">
          <div class="widget-group">
            <label>Nombre Secretaria/o</label>
            <input type="text" v-model="formServicio.nombreSecretaria" required />
          </div>
          <div class="widget-group">
            <label>Correo Secretaria/o</label>
            <input type="text" v-model="formServicio.correoSecretaria" required />
          </div>
          <div class="widget-group">
            <label>RUT Secretaria/o</label>
            <input type="text" v-model="formServicio.rutSecretaria" required />
          </div>
        </div>

        <!-- Botones de Acción Izquierdos -->
        <div class="actions-row">
          <div class="button-wrapper">
            <button type="submit" class="btn-connexion">Crear </button>
        </div>
          <div class="button-wrapper">
            <button type="submit" class="btn-connexion">{ Actualizar Información } </button>
        </div>
        </div>

      </div>

      <!-- COLUMNA DERECHA: Listado de Tutores Clínicos -->
      <div class="right-table-section">
        <div class="section-block">
          <h3>Listado de Tutores Clínicos</h3>
          <div class="table-card">
            <div class="table-header-tutores">
              <span class="th-red">Nombre</span>
              <span class="th-red">Correo Electrónico</span>
              <span class="th-green">Actualizar/Eliminar</span>
            </div>
            
            <div v-if="tutoresClinicos.length === 0" class="empty-row-large">
              <!-- Espacio en blanco interior -->
            </div>
          </div>
        </div>

        <!-- Formulario Inferior Derecho: Tutor Clínico -->
        <div class="tutor-bottom-form">
          <div class="form-row-2">
            <div class="widget-group">
              <label>Nombre Tutor Clínico</label>
              <input type="text" v-model="formTutor.nombreTutor" required />
            </div>
            <div class="widget-group">
              <label>Correo Tutor Clínico</label>
              <input type="text" v-model="formTutor.correoTutor" required />
            </div>
          </div>
          <div class="button-wrapper">
            <button type="submit" class="btn-connexion">Crear Tutor</button>
        </div>
        </div>

      </div>

    </div>

  </div>
</template>

<style scoped>
.admin-container {
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #e6e6e6;
  padding: 2.5rem;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
  gap: 2rem;
}

/* Layout Principal en 2 columnas */
.main-layout {
  display: grid;
  grid-template-columns: 1.1fr 1.1fr;
  gap: 3rem;
  max-width: 1250px;
  width: 100%;
  margin: 0 auto;
}

.left-form-section {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.right-table-section {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

/* Filas con múltiples columnas de inputs */
.form-row-3 {
  display: grid;
  grid-template-columns: 1.2fr 1.2fr 1fr;
  gap: 1rem;
}

.form-row-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.widget-group {
  display: flex;
  flex-direction: column;
}

.widget-group label {
  font-size: 0.85rem;
  color: #7f8c8d;
  margin-bottom: 0.3rem;
}

.widget-group input {
  padding: 0.6rem;
  border: 1px solid #dcdcdc;
  background-color: #ffffff;
  border-radius: 2px;
  font-size: 0.9rem;
  outline: none;
}

/* Botones inferiores alineados */
.actions-row {
  display: flex;
  gap: 2rem;
  margin-top: 0.5rem;
  justify-content: flex-start;
  padding-left: 3rem;
}

.actions-center {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}

/* Secciones de tablas */
.section-block {
  width: 100%;
}

.section-block h3 {
  color: #7f8c8d;
  font-size: 1.05rem;
  margin-bottom: 0.6rem;
}

.table-card {
  background-color: #ffffff;
  border-radius: 4px;
  padding: 1.2rem;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
}

/* Cabecera tabla tutores (3 columnas) */
.table-header-tutores {
  display: grid;
  grid-template-columns: 1.2fr 1.4fr 1.2fr;
  gap: 0.6rem;
  align-items: stretch;
}

.th-red {
  background-color: #195058;
  color: #ffffff;
  padding: 0.5rem 0.6rem;
  font-weight: bold;
  text-align: center;
  border-radius: 2px;
  font-size: 0.82rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.th-green {
  background-color: #aed581;
  color: #2e7d32;
  padding: 0.5rem 0.6rem;
  font-weight: bold;
  text-align: center;
  border-radius: 2px;
  font-size: 0.82rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.empty-row-large {
  height: 180px;
}

.tutor-bottom-form {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

/* Estilos de botones heredados */
.btn-gray {
  padding: 0.4rem 2.2rem;
  background-color: #bdc3c7;
  color: #2c3e50;
  font-weight: bold;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-size: 0.9rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.btn-gray:hover {
  background-color: #95a5a6;
}

.btn-connexion {
  width: auto;
  padding: 0.7rem 2.2rem;
  background-color: #10b981;
  color: #ffffff;
  font-weight: bold;
  font-size: 0.9rem;
  letter-spacing: 0.5px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
  transition: background-color 0.2s, transform 0.1s;
}

.btn-connexion:hover {
  background-color: #059669;
}

.btn-connexion:active {
  transform: scale(0.98);
}

.btn-crear {
  width: 150px;
  padding: 0.7rem 2.2rem;
  background-color: #10b981;
  color: #ffffff;
  font-weight: bold;
  font-size: 0.9rem;
  letter-spacing: 0.5px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
  transition: background-color 0.2s, transform 0.1s;
}

.btn-crear:hover {
  background-color: #059669;
}

.btn-crear:active {
  transform: scale(0.98);
}
</style>