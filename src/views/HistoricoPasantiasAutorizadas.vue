<script setup>
import { ref } from 'vue'

// Lista de ejemplo para el histórico de pasantías autorizadas
const pasantiasAutorizadas = ref([])
</script>

<template>
  <div class="admin-container">
    
    <!-- SECCIÓN: Histórico Pasantías Autorizadas -->
    <div class="section-block full-width">
      <h3>Histórico Pasantías Autorizadas</h3>
      
      <div class="table-card">
        <!-- Cabecera con las 9 columnas de la imagen -->
        <div class="table-header-pasantias">
          <span class="th-red">Nº Resolución</span>
          <span class="th-red">Solicitante</span>
          <span class="th-red">Fecha inicio</span>
          <span class="th-red">Fecha Término</span>
          <span class="th-red">Servicio/ Unidad</span>
          <span class="th-red">Estado QR</span>
          <span class="th-red">Estado Credencial</span>
          <span class="th-red">Termino</span>
          <span class="th-green">Desplegar</span>
        </div>
        
        <div v-if="pasantiasAutorizadas.length === 0" class="empty-row-historic">
          <!-- Espacio en blanco interior -->
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

/* Sección de ancho completo para la tabla de histórico */
.section-block.full-width {
  width: 100%;
  max-width: 1350px;
  margin: 0 auto;
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

/* Cabecera de la tabla con 9 columnas ajustadas proporcionalmente */
.table-header-pasantias {
  display: grid;
  grid-template-columns: 1fr 1.2fr 1fr 1fr 1.2fr 0.9fr 1.1fr 0.9fr 1fr;
  gap: 0.5rem;
  align-items: stretch;
}

.th-red {
  background-color: #195058; /* Tono rojo corporativo acorde a la vista */
  color: #ffffff;
  padding: 0.5rem 0.4rem;
  font-weight: bold;
  text-align: center;
  border-radius: 2px;
  font-size: 0.78rem;
  display: flex;
  align-items: center;
  justify-content: center;
  word-break: break-word;
}

.th-green {
  background-color: #aed581;
  color: #2e7d32;
  padding: 0.5rem 0.4rem;
  font-weight: bold;
  text-align: center;
  border-radius: 2px;
  font-size: 0.78rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.empty-row-historic {
  height: 350px;
}
</style>