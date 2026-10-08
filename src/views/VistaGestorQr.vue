<script setup>
import { ref, reactive } from 'vue'

// Estado del gestor logueado o actual
const gestor = reactive({
  nombre: 'Nombre del Gestor QR'
})

// Lista de ejemplo para las pasantías pendientes
const pasantiasPendientes = ref([])
</script>

<template>
  <div class="admin-container">
    
    <!-- CONTENEDOR CENTRALIZADO -->
    <div class="content-wrapper">
      
      <!-- SECCIÓN SUPERIOR: Saludo / Bienvenida -->
      <div class="welcome-section">
        <label class="welcome-label">Bienvenido / a</label>
        <div class="welcome-card">
          <span>{{ gestor.nombre }}</span>
        </div>
        <div class="button-wrapper">
          <button type="submit" class="btn-connexion">Buscar</button>
        </div>
      </div>

      <!-- SECCIÓN INFERIOR: Tabla de Pasantías pendientes de activación QR -->
      <div class="section-block">
        <h3>Pasantías pendientes de activación QR</h3>
        
        <div class="table-card">
          <!-- Cabecera de la tabla con las 6 columnas -->
          <div class="table-header-pendientes">
            <span class="th-red">Nº Resolución</span>
            <span class="th-red">Solicitante</span>
            <span class="th-red">Fecha inicio</span>
            <span class="th-red">Fecha Término</span>
            <span class="th-red">Estado QR</span>
            <span class="th-green">Actualizar Estado QR</span>
          </div>
          
          <div v-if="pasantiasPendientes.length === 0" class="empty-row-pendientes">
            <!-- Espacio en blanco interior -->
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
}

/* Contenedor centralizador principal */
.content-wrapper {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 1250px;
  width: 100%;
  margin: 0 auto;
}

/* Sección de bienvenida superior */
.welcome-section {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  width: 100%;
  max-width: 400px;
}

.welcome-label {
  font-size: 0.85rem;
  color: #7f8c8d;
}

.welcome-card {
  background-color: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 2px;
  padding: 0.6rem 1rem;
  font-size: 0.9rem;
  color: #2c3e50;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
}

/* Sección de la tabla */
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
  width: 100%;
  box-sizing: border-box;
}

/* Cabecera de la tabla con 6 columnas proporcionales */
.table-header-pendientes {
  display: grid;
  grid-template-columns: 1fr 1.2fr 1fr 1fr 1fr 1.3fr;
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

.empty-row-pendientes {
  height: 280px;
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
</style>