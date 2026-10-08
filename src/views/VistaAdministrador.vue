<script setup>
import { ref, reactive, computed, onMounted, onUnmounted } from 'vue'

// Estado para los formularios inferiores
const formCredencial = reactive({
  numeroResolucion: '',
  estadoSeleccionado: ''
})

// Estados y lógica para la primera tabla (Solicitudes en Trámite)
const estado = ref([
  "Id Solicitante", "Nombre Solicitante", "Formulario", 
  "Dias en tramite", "Servicio/Unidad", "Prioridad", "Estado", "Desplegar"
])
const searchQueryTramite = ref('')
const showDropdownTramite = ref(false)

const estadosFiltrados = computed(() => {
  if (!searchQueryTramite.value) return estado.value
  return estado.value.filter(e => 
    e.toLowerCase().includes(searchQueryTramite.value.toLowerCase())
  )
})

const seleccionarEstado = (selectedEstado) => {
  searchQueryTramite.value = selectedEstado
  showDropdownTramite.value = false
}

// Estados y lógica para la segunda tabla (Pasantías Vigentes)
const vigentes = ref([
  "Numero resolución", "Nombre solicitante", "Fecha inicio", 
  "Fecha término", "Servicio/Unidad", "Estado QR", "Estado Credencial", "Desplegar"
])
const searchQueryVigente = ref('')
const showDropdownVigente = ref(false)

const vigentesFiltrados = computed(() => {
  if (!searchQueryVigente.value) return vigentes.value
  return vigentes.value.filter(e => 
    e.toLowerCase().includes(searchQueryVigente.value.toLowerCase())
  )
})

const seleccionarVigente = (selectedVigente) => {
  searchQueryVigente.value = selectedVigente
  showDropdownVigente.value = false
}

// Cierre de desplegables al hacer clic fuera
const handleClickOutside = (e) => {
  if (!e.target.closest('.searchable-select')) {
    showDropdownTramite.value = false
    showDropdownVigente.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})

// Listas vacías de ejemplo
const solicitudesEnTramite = ref([])
const pasantiasVigentes = ref([])

const buscarResolucion = () => {
  if (!formCredencial.numeroResolucion) {
    alert('Por favor ingrese un número de resolución')
    return
  }
  alert(`Buscando resolución: ${formCredencial.numeroResolucion}`)
}

const guardarEstadoCredencial = () => {
  alert(`Estado de credencial guardado: ${formCredencial.estadoSeleccionado || 'Sin selección'}`)
}
</script>

<template>
  <div class="admin-container">
    <!-- SECCIÓN SUPERIOR: Bienvenida y Accesos Rápidos -->

    <div class="usuario-info">
        <label>Bienvenido / a</label>
        <h2>Nombre del Usuario</h2>
    </div>

    <div class="top-grid">
      <div class="widget-group">
         <button type="submit" class="btn-connexion">Ingresar Nueva Solicitud de pasantia</button>
      </div>

      <div class="widget-group">
         <button type="submit" class="btn-connexion">Gestionar Servicios y Unidades</button>
      </div>
    </div>

    <!-- SECCIÓN MEDIA 1: Estados Solicitudes en Trámite -->
    <div class="section-block">
      <div class="filtrar">
        <h3>Estados Solicitudes en Trámite</h3>
        
        <div class="searchable-select">
            <label>Estados</label>
            <div class="search-input-wrapper">
              <input 
                type="text" 
                v-model="searchQueryTramite" 
                @focus="showDropdownTramite = true" 
                placeholder="Buscar o seleccionar estado..." 
                class="input-search-green"
              />
              <span class="dropdown-arrow">▼</span>
            </div>

            <ul v-if="showDropdownTramite && estadosFiltrados.length > 0" class="dropdown-list">
              <li 
                v-for="item in estadosFiltrados" 
                :key="item" 
                @click="seleccionarEstado(item)"
              >
                {{ item }}
              </li>
            </ul>
        </div>
      </div>

      <div class="table-card">
        <div class="table-header-grid">
          <span class="th-red">ID del Solicitante</span>
          <span class="th-red">Solicitante</span>
          <span class="th-red">Formulario</span>
          <span class="th-red">Días en Trámite</span>
          <span class="th-red">Servicio/ Unidad</span>
          <span class="th-red">Prioridad</span>
          <span class="th-red">Estado</span>
          <span class="th-green">Desplegar</span>
        </div>
        
        <div v-if="solicitudesEnTramite.length === 0" class="empty-row"></div>
      </div>
    </div>

    <!-- SECCIÓN MEDIA 2: Estado de Pasantías Vigentes -->
    <div class="section-block">
      <div class="filtrar">
        <h3>Estado de Pasantías Vigentes</h3>

        <div class="searchable-select">
            <label>Estado</label>
            <div class="search-input-wrapper">
              <input 
                type="text" 
                v-model="searchQueryVigente" 
                @focus="showDropdownVigente = true" 
                placeholder="Buscar o seleccionar..." 
                class="input-search-green"
              />
              <span class="dropdown-arrow">▼</span>
            </div>

            <ul v-if="showDropdownVigente && vigentesFiltrados.length > 0" class="dropdown-list">
              <li 
                v-for="vigenteItem in vigentesFiltrados" 
                :key="vigenteItem" 
                @click="seleccionarVigente(vigenteItem)"
              >
                {{ vigenteItem }}
              </li>
            </ul>
        </div>
      </div>

      <div class="table-card">
        <div class="table-header-grid">
          <span class="th-red">Nº Resolución</span>
          <span class="th-red">Solicitante</span>
          <span class="th-red">Fecha Inicio</span>
          <span class="th-red">Fecha Término</span>
          <span class="th-red">Servicio/ Unidad</span>
          <span class="th-red">Estado QR</span>
          <span class="th-red">Estado Credencial</span>
          <span class="th-green">Desplegar</span>
        </div>

        <div v-if="pasantiasVigentes.length === 0" class="empty-row"></div>
      </div>
    </div>

    <!-- SECCIÓN INFERIOR 
    <div class="bottom-grid">
      <div class="bottom-card">
        <label>Modificación Estado Credencial</label>
        <input 
          type="text" 
          v-model="formCredencial.numeroResolucion" 
          placeholder="Número Resolución Exenta" 
          class="input-white"
        />
        <div class="button-wrapper">
          <button type="submit" @click="buscarResolucion" class="btn-connexion">Buscar</button>
        </div>
      </div>

      <div class="bottom-card">
        <label>Estado Credencial</label>
        <select v-model="formCredencial.estadoSeleccionado" class="select-green-options">
          <option disabled value="">Se despliegan las opciones</option>
          <option value="Activa">Activa</option>
          <option value="Suspendida">Suspendida</option>
          <option value="Caducada">Caducada</option>
        </select>
        <div class="button-wrapper">
          <button type="submit" @click="guardarEstadoCredencial" class="btn-connexion">Guardar</button>
        </div>
      </div>
    </div>-->

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

.top-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem 3rem;
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
}

.widget-group {
  display: flex;
  flex-direction: column;
}

.section-block {
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
}

.section-block h3 {
  color: #7f8c8d;
  font-size: 1.1rem;
  margin-bottom: 0.6rem;
}

.table-card {
  background-color: #ffffff;
  border-radius: 4px;
  padding: 1.2rem;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
}

.table-header-grid {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
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
}

.th-green {
  background-color: #aed581;
  color: #2e7d32;
  padding: 0.5rem 0.6rem;
  font-weight: bold;
  text-align: center;
  border-radius: 2px;
  font-size: 0.82rem;
}

.empty-row {
  height: 60px;
}

.bottom-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
}

.bottom-card {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.bottom-card label {
  font-size: 0.95rem;
  color: #7f8c8d;
}

.input-white {
  padding: 0.6rem;
  background-color: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 2px;
  font-size: 0.95rem;
  outline: none;
}

.select-green-options {
  padding: 0.6rem;
  background-color: #aed581;
  color: #1b4d3e;
  font-weight: bold;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  outline: none;
}

.select-green-options option {
  background-color: #ffffff;
  color: #333;
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

.usuario-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 1rem;
}

.filtrar {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: flex-end;
  margin-bottom: 0.5rem;
}

/* --- ESTILOS PARA LOS SELECTORES BUSCABLES --- */
.searchable-select {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 260px;
}

.searchable-select label {
  font-size: 0.85rem;
  color: #7f8c8d;
  margin-bottom: 0.2rem;
}

.search-input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.input-search-green {
  width: 100%;
  padding: 0.5rem 2rem 0.5rem 0.6rem;
  border: 1px solid #dcdcdc;
  background-color: #ffffff;
  border-radius: 2px;
  font-size: 0.9rem;
  outline: none;
}

.dropdown-arrow {
  position: absolute;
  right: 8px;
  font-size: 0.75rem;
  color: #555;
  pointer-events: none;
}

.dropdown-list {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: #ffffff;
  border: 1px solid #dcdcdc;
  border-top: none;
  list-style: none;
  padding: 0;
  margin: 0;
  max-height: 200px;
  overflow-y: auto;
  z-index: 100;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  border-radius: 0 0 2px 2px;
}

.dropdown-list li {
  padding: 0.5rem 0.8rem;
  font-size: 0.9rem;
  color: #333;
  cursor: pointer;
  border-bottom: 1px solid #f1f1f1;
}

.dropdown-list li:hover {
  background-color: #f2f2f2;
  color: #195058;
}
</style>