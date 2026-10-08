<script setup>
import { ref, reactive } from 'vue'

// Estado para el formulario de Gestor QR
const formGestor = reactive({
  nombreGestor: '',
  correoGestor: ''
})

// Lista de ejemplo para la tabla
const listadoInstituciones = ref([])

const guardarGestor = () => {
  if (!formGestor.nombreGestor || !formGestor.correoGestor) {
    alert('Por favor complete todos los campos')
    return
  }
  alert(`Guardando gestor: ${formGestor.nombreGestor}`)
}
</script>

<template>
  <div class="admin-container">

    <div class="gestores-title">
      <h1>Gestores de Acceso QR</h1>
    </div>
    
    
    <!-- LAYOUT PRINCIPAL EN 2 COLUMNAS -->
    <div class="main-layout">
      
      <!-- COLUMNA IZQUIERDA: Formulario de Gestor QR -->
      <div class="left-form-section">
        
        <div class="widget-group">
          <label>Nombre Gestor QR</label>
          <input type="text" v-model="formGestor.nombreGestor" required />
        </div>

        <div class="widget-group">
          <label>Correo Gestor QR</label>
          <input type="text" v-model="formGestor.correoGestor" required />
        </div>

        <div class="button-wrapper">
            <button type="submit" class="btn-connexion">Crear Gestor</button>
        </div>

      </div>

      <!-- COLUMNA DERECHA: Listado de Instituciones -->
      <div class="right-table-section">
        <div class="section-block">
          <h3>Listado de Instituciones</h3>
          <div class="table-card">
            <div class="table-header-instituciones">
              <span class="th-red">Nombre Gestor</span>
              <span class="th-red">Correo Electrónico</span>
              <span class="th-green">Actualizar/Eliminar</span>
            </div>
            
            <div v-if="listadoInstituciones.length === 0" class="empty-row-large">
              <!-- Espacio en blanco interior -->
            </div>
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
  grid-template-columns: 1fr 1.4fr;
  gap: 3rem;
  max-width: 1250px;
  width: 100%;
  margin: 0 auto;
  align-items: flex-start;
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

/* Botón alineado a la izquierda como en la imagen */
.actions-row {
  display: flex;
  margin-top: 0.5rem;
  justify-content: flex-start;
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

/* Cabecera tabla de instituciones (3 columnas) */
.table-header-instituciones {
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
  height: 200px;
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


.gestores-title {
  text-align: center;
  margin-bottom: 1.5rem;
}
</style>