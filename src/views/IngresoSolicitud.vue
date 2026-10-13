<script setup>
import { ref, reactive, computed, onMounted, onUnmounted } from 'vue'

// Estados reactivos para los formularios
const formServicio = reactive({
  tipoIdentificacion: '',
  numeroIdentificacion: '',
  validoHasta: '',
  nombre: '',
  apellidos: '',
  profesion: '',
  email: '',
  telefono: '',
  nacionalidad: '',
  universidad: '',
  
  // Nuevos campos para la sección de solicitud
  fechaSolicitud: '',
  fechaInicio: '',
  fechaTermino: '',
  horaInicio: '',
  horaTermino: '',
  totalHoras: '',
  mesesTotales: '',
  servicioClinico: '',
  institucionlistado: '',
  jefatura: '',
  tutorClinico: '',
  tipoFormulario: ''
})



const formTutor = reactive({
  nombreTutor: '',
  correoTutor: ''
})

// Listas de ejemplo para las tablas
const tutoresClinicos = ref([])
const pasantiasVigentes = ref([])

// paises 
const paisesDisponibles = ref(["Afganistán",
  "Albania",
  "Alemania",
  "Andorra",
  "Angola",
  "Anguila",
  "Antártida",
  "Antigua y Barbuda",
  "Arabia Saudita",
  "Argelia",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaiyán",
  "Bahamas",
  "Bangladés",
  "Barbados",
  "Baréin",
  "Bélgica",
  "Belice",
  "Benín",
  "Bermudas",
  "Bielorrusia",
  "Bolivia",
  "Bonaire, San Eustaquio y Saba",
  "Bosnia y Herzegovina",
  "Botsuana",
  "Brasil",
  "Brunéi",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Bután",
  "Cabo Verde",
  "Camboya",
  "Camerún",
  "Canadá",
  "Catar",
  "Chad",
  "Chile",
  "China",
  "Chipre",
  "Ciudad del Vaticano",
  "Colombia",
  "Comoras",
  "Corea del Norte",
  "Corea del Sur",
  "Costa de Marfil",
  "Costa Rica",
  "Croacia",
  "Cuba",
  "Curazao",
  "Dinamarca",
  "Dominica",
  "Ecuador",
  "Egipto",
  "El Salvador",
  "Emiratos Árabes Unidos",
  "Eritrea",
  "Eslovaquia",
  "Eslovenia",
  "España",
  "Estados Unidos",
  "Estonia",
  "Esuatini",
  "Etiopía",
  "Filipinas",
  "Finlandia",
  "Fiyi",
  "Francia",
  "Gabón",
  "Gambia",
  "Georgia",
  "Ghana",
  "Gibraltar",
  "Granada",
  "Grecia",
  "Groenlandia",
  "Guadalupe",
  "Guam",
  "Guatemala",
  "Guayana Francesa",
  "Guernsey",
  "Guinea",
  "Guinea Ecuatorial",
  "Guinea-Bisáu",
  "Guyana",
  "Haití",
  "Honduras",
  "Hong Kong",
  "Hungría",
  "India",
  "Indonesia",
  "Irak",
  "Irán",
  "Irlanda",
  "Isla Bouvet",
  "Isla de Man",
  "Isla de Navidad",
  "Isla Norfolk",
  "Islandia",
  "Islas Åland",
  "Islas Caimán",
  "Islas Cocos",
  "Islas Cook",
  "Islas Feroe",
  "Islas Georgia del Sur y Sandwich del Sur",
  "Islas Heard y McDonald",
  "Islas Malvinas",
  "Islas Marianas del Norte",
  "Islas Marshall",
  "Islas Menores Alejadas de EE. UU.",
  "Islas Pitcairn",
  "Islas Salomón",
  "Islas Turcas y Caicos",
  "Islas Vírgenes Británicas",
  "Islas Vírgenes de EE. UU.",
  "Israel",
  "Italia",
  "Jamaica",
  "Japón",
  "Jersey",
  "Jordania",
  "Kazajistán",
  "Kenia",
  "Kirguistán",
  "Kiribati",
  "Kosovo",
  "Kuwait",
  "Laos",
  "Lesoto",
  "Letonia",
  "Líbano",
  "Liberia",
  "Libia",
  "Liechtenstein",
  "Lituania",
  "Luxemburgo",
  "Macao",
  "Macedonia del Norte",
  "Madagascar",
  "Malasia",
  "Malaui",
  "Maldivas",
  "Malí",
  "Malta",
  "Marruecos",
  "Martinica",
  "Mauricio",
  "Mauritania",
  "Mayotte",
  "México",
  "Micronesia",
  "Moldavia",
  "Mónaco",
  "Mongolia",
  "Montenegro",
  "Montserrat",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Nicaragua",
  "Níger",
  "Nigeria",
  "Niue",
  "Noruega",
  "Nueva Caledonia",
  "Nueva Zelanda",
  "Omán",
  "Países Bajos",
  "Pakistán",
  "Palaos",
  "Palestina",
  "Panamá",
  "Papúa Nueva Guinea",
  "Paraguay",
  "Perú",
  "Polinesia Francesa",
  "Polonia",
  "Portugal",
  "Puerto Rico",
  "Reino Unido",
  "República Centroafricana",
  "República Checa",
  "República del Congo",
  "República Democrática del Congo",
  "República Dominicana",
  "Reunión",
  "Ruanda",
  "Rumania",
  "Rusia",
  "Sahara Occidental",
  "Samoa",
  "Samoa Americana",
  "San Bartolomé",
  "San Cristóbal y Nieves",
  "San Marino",
  "San Martín (Francia)",
  "San Martín (Países Bajos)",
  "San Pedro y Miquelón",
  "San Vicente y las Granadinas",
  "Santa Elena, Ascensión y Tristán de Acuña",
  "Santa Lucía",
  "Santo Tomé y Príncipe",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leona",
  "Singapur",
  "Siria",
  "Somalia",
  "Sri Lanka",
  "Sudáfrica",
  "Sudán",
  "Sudán del Sur",
  "Suecia",
  "Suiza",
  "Surinam",
  "Svalbard y Jan Mayen",
  "Tailandia",
  "Taiwán",
  "Tanzania",
  "Tayikistán",
  "Territorio Británico del Océano Índico",
  "Tierras Australes y Antárticas Francesas",
  "Timor Oriental",
  "Togo",
  "Tokelau",
  "Tonga",
  "Trinidad y Tobago",
  "Túnez",
  "Turkmenistán",
  "Turquía",
  "Tuvalu",
  "Ucrania",
  "Uganda",
  "Uruguay",
  "Uzbekistán",
  "Vanuatu",
  "Venezuela",
  "Vietnam",
  "Wallis y Futuna",
  "Yemen",
  "Yibuti",
  "Zambia",
  "Zimbabue"])

const searchQueryPais = ref('')
const showDropdownPais = ref(false)

const paisesFiltrados = computed(() => {
  if (!searchQueryPais.value) return paisesDisponibles.value
  return paisesDisponibles.value.filter(p => 
    p.toLowerCase().includes(searchQueryPais.value.toLowerCase())
  )
})

const seleccionarPais = (pais) => {
  formServicio.pais = pais
  searchQueryPais.value = pais
  showDropdownPais.value = false
}

// ----------------------------------------------------
// 0. Desplegable Tipo de Identificación
// ----------------------------------------------------
const documentos = ref(['Rut', 'DNI', 'Pasaporte'])
const searchQueryDocumento = ref('')
const showDropdownDocumento = ref(false)

const documentosFiltrados = computed(() => {
  if (!searchQueryDocumento.value) return documentos.value
  return documentos.value.filter(d => 
    d.toLowerCase().includes(searchQueryDocumento.value.toLowerCase())
  )
})

const seleccionarDocumento = (doc) => {
  formServicio.tipoIdentificacion = doc
  searchQueryDocumento.value = doc
  showDropdownDocumento.value = false
}

// ----------------------------------------------------
// 1. Desplegable Servicio Clínico
// ----------------------------------------------------
const serviciosClinicos = ref(['Servicio Medicina', 'Servicio Cirugía', 'Servicio Urgencia'])
const searchQueryServicio = ref('')
const showDropdownServicio = ref(false)

const serviciosFiltrados = computed(() => {
  if (!searchQueryServicio.value) return serviciosClinicos.value
  return serviciosClinicos.value.filter(s => 
    s.toLowerCase().includes(searchQueryServicio.value.toLowerCase())
  )
})

const seleccionarServicio = (item) => {
  formServicio.servicioClinico = item
  searchQueryServicio.value = item
  showDropdownServicio.value = false
}

// ----------------------------------------------------
// 2. Desplegable Jefatura
// ----------------------------------------------------
const jefaturas = ref(['lala', 'lale', 'lali'])
const searchQueryJefatura = ref('')
const showDropdownJefatura = ref(false)

const jefaturasFiltradas = computed(() => {
  if (!searchQueryJefatura.value) return jefaturas.value
  return jefaturas.value.filter(j => 
    j.toLowerCase().includes(searchQueryJefatura.value.toLowerCase())
  )
})

const seleccionarJefatura = (item) => {
  formServicio.jefatura = item
  searchQueryJefatura.value = item
  showDropdownJefatura.value = false
}

// ----------------------------------------------------
// 3. Desplegable Tutor Clínico
// ----------------------------------------------------
const tutoresOptions = ref(['tutor 1', 'tutor 2', 'tutor 3'])
const searchQueryTutor = ref('')
const showDropdownTutor = ref(false)

const tutoresFiltrados = computed(() => {
  if (!searchQueryTutor.value) return tutoresOptions.value
  return tutoresOptions.value.filter(t => 
    t.toLowerCase().includes(searchQueryTutor.value.toLowerCase())
  )
})

const seleccionarTutor = (item) => {
  formServicio.tutorClinico = item
  searchQueryTutor.value = item
  showDropdownTutor.value = false
}

// ----------------------------------------------------
// 5. Desplegable Listado instituciones
// ----------------------------------------------------
const listadoInstituciones = ref(['Hospital valdivia', 'Hospital antofagasta', 'Hospital maipu'])
const searchQueryListadoInstituciones = ref('')
const showDropdownListadoInstituciones = ref(false)

const institucionesFiltradas = computed(() => {
  if (!searchQueryListadoInstituciones.value) return listadoInstituciones.value
  return listadoInstituciones.value.filter(i => 
    i.toLowerCase().includes(searchQueryListadoInstituciones.value.toLowerCase())
  )
})

const seleccionarInstitucion = (item) => {
  formServicio.institucionlistado = item
  searchQueryListadoInstituciones.value = item
  showDropdownListadoInstituciones.value = false
}

// Cierre de desplegables al hacer clic fuera
const handleClickOutside = (e) => {
  if (!e.target.closest('.searchable-select')) {
    showDropdownDocumento.value = false
    showDropdownServicio.value = false
    showDropdownJefatura.value = false
    showDropdownTutor.value = false
    showDropdownListadoInstituciones.value = false
    showDropdownPais.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})

const buscarSolicitante = () => {
  alert('Buscando solicitante...')
}

const registrarSolicitante = () => {
  alert('Registrando solicitante...')
}

const actualizarSolicitante = () => {
  alert('Actualizando solicitante...')
}
</script>

<template>
  <div class="admin-container">
    <div class="main-layout">
      <h1>Ingreso Solicitante</h1>

      <!-- Encabezado / Formulario Solicitante -->
      <div class="left-form-section">
        
        <!-- Fila de Búsqueda inicial -->
        <div class="widget-group">
          <label>Consultar RUT / DNI / Pasaporte</label>
          <div style="display: flex; gap: 1rem; align-items: center;">
            <input 
              type="text" 
              placeholder="Ingrese documento a buscar..." 
              style="flex: 1;"
            />
            <button type="button" class="btn-connexion" @click="buscarSolicitante">Buscar</button>
          </div>
        </div>

        <!-- Fila 1 de datos personales -->
        <div class="form-row-3">
          <div class="widget-group">
            <label>Nombre(s)</label>
            <input type="text" v-model="formServicio.nombre" required />
          </div>
          <div class="widget-group">
            <label>Apellidos</label>
            <input type="text" v-model="formServicio.apellidos" required />
          </div>
          <div class="widget-group">
            <label>Profesión</label>
            <input type="text" v-model="formServicio.profesion" required />
          </div>
        </div>
        
        <!-- Fila 2 de datos personales -->
        <div class="form-row-3">
          <div class="widget-group">
            <label>Correo Electrónico</label>
            <input type="email" v-model="formServicio.email" required />
          </div>
          <div class="widget-group">
            <label>Número Telefónico</label>
            <input type="text" v-model="formServicio.telefono" required />
          </div>
          <div class="widget-group">
            <label>Nacionalidad</label>
            <input type="text" v-model="formServicio.nacionalidad" required />
          </div>
        </div>

        <!-- Botones de Carga de Archivos -->
        <div class="actions-row">
          <div class="button-wrapper">
            <button type="button" class="btn-cargarDocumento">Cargar Documento Identidad</button>
          </div>
          <div class="button-wrapper">
            <button type="button" class="btn-cargarDocumento">Cargar Certificado de Antecedentes</button>
          </div>
        </div>
        
        <!-- Fila con el Desplegable de Tipo de Identificación -->
        <div class="form-row-3">
          <div class="widget-group searchable-select">
            <label>Tipo de Identificación</label>
            <div class="search-input-wrapper">
              <input 
                type="text" 
                v-model="searchQueryDocumento" 
                @focus="showDropdownDocumento = true" 
                placeholder="Seleccione o busque..." 
                class="input-search-green"
                readonly
              />
              <span class="dropdown-arrow">▼</span>
            </div>

            <ul v-if="showDropdownDocumento && documentosFiltrados.length > 0" class="dropdown-list">
              <li 
                v-for="doc in documentosFiltrados" 
                :key="doc" 
                @click="seleccionarDocumento(doc)"
              >
                {{ doc }}
              </li>
            </ul>
          </div>

          <div class="widget-group">
            <label>Número de Identificación</label>
            <input type="text" v-model="formServicio.numeroIdentificacion" required />
          </div>

          <div class="widget-group">
            <label>Válido Hasta</label>
            <input type="date" v-model="formServicio.validoHasta" required />
          </div>
        </div>

        <!-- Botones de Acción Finales -->
        <div class="actions-row" style="padding-left: 0; justify-content: flex-start; gap: 1rem;">
          <div class="button-wrapper">
            <button type="button" class="btn-connexion" @click="registrarSolicitante">Registrar</button>
          </div>
          <div class="button-wrapper">
            <button type="button" class="btn-connexion" @click="actualizarSolicitante">Actualizar</button>
          </div>
        </div>

        <h1>Ingreso de Solicitud de Pasantía</h1>

        <div class="form-row-3">
          <div class="widget-group">
            <label>Fecha de solicitud</label>
            <input type="date" v-model="formServicio.fechaSolicitud" required />
          </div>
          <div class="widget-group">
            <label>Fecha de inicio</label>
            <input type="date" v-model="formServicio.fechaInicio" required />
          </div>
          <div class="widget-group">
            <label>Fecha de término</label>
            <input type="date" v-model="formServicio.fechaTermino" required />
          </div>
          <div class="widget-group">
            <label>Hora de inicio</label>
            <input type="time" v-model="formServicio.horaInicio" required />
          </div>
          <div class="widget-group">
            <label>Hora de término</label>
            <input type="time" v-model="formServicio.horaTermino" required />
          </div>
          <div class="widget-group">
            <label>Total de horas</label>
            <input type="text" v-model="formServicio.totalHoras" required />
          </div>
          <div class="widget-group">
            <label>Meses totales</label>
            <input type="text" v-model="formServicio.mesesTotales" required />
          </div>
        </div>

        <!-- SECCIÓN DE LOS 4 DESPLEGABLES -->
        <div class="desplegables-grid">
          
          <!-- 1. Servicio Clínico -->
          <div class="widget-group searchable-select">
            <label>Servicio Clínico</label>
            <div class="search-input-wrapper">
              <input 
                type="text" 
                v-model="searchQueryServicio" 
                @focus="showDropdownServicio = true" 
                placeholder="Seleccione servicio..." 
                class="input-search-green"
                readonly
              />
              <span class="dropdown-arrow">▼</span>
            </div>

            <ul v-if="showDropdownServicio && serviciosFiltrados.length > 0" class="dropdown-list">
              <li 
                v-for="item in serviciosFiltrados" 
                :key="item" 
                @click="seleccionarServicio(item)"
              >
                {{ item }}
              </li>
            </ul>
          </div>

          <!-- 2. Jefatura -->
          <div class="widget-group searchable-select">
            <label>Jefatura</label>
            <div class="search-input-wrapper">
              <input 
                type="text" 
                v-model="searchQueryJefatura" 
                @focus="showDropdownJefatura = true" 
                placeholder="Seleccione jefatura..." 
                class="input-search-green"
                readonly
              />
              <span class="dropdown-arrow">▼</span>
            </div>

            <ul v-if="showDropdownJefatura && jefaturasFiltradas.length > 0" class="dropdown-list">
              <li 
                v-for="item in jefaturasFiltradas" 
                :key="item" 
                @click="seleccionarJefatura(item)"
              >
                {{ item }}
              </li>
            </ul>
          </div>

          <!-- 3. Tutor Clínico -->
          <div class="widget-group searchable-select">
            <label>Tutor Clínico</label>
            <div class="search-input-wrapper">
              <input 
                type="text" 
                v-model="searchQueryTutor" 
                @focus="showDropdownTutor = true" 
                placeholder="Seleccione tutor..." 
                class="input-search-green"
                readonly
              />
              <span class="dropdown-arrow">▼</span>
            </div>

            <ul v-if="showDropdownTutor && tutoresFiltrados.length > 0" class="dropdown-list">
              <li 
                v-for="item in tutoresFiltrados" 
                :key="item" 
                @click="seleccionarTutor(item)"
              >
                {{ item }}
              </li>
            </ul>
          </div>

          <!-- 4. Tipo de Formulario (Usando <select> nativo para control directo) -->
          <div class="widget-group">
            <label>Tipo de Formulario</label>
            <select v-model="formServicio.tipoFormulario" class="select-green">
              <option disabled value="">Seleccione formulario...</option>
              <option value="Formulario A">Formulario A</option>
              <option value="Formulario B">Formulario B</option>
              <option value="Formulario C">Formulario C</option>
              <option value="Formulario D">Formulario D</option>
              <option value="Formulario E">Formulario E</option>
            </select>
          </div>

        </div>

      </div>

    </div>

    <!-- Formulario A -->
    <div v-if="formServicio.tipoFormulario === 'Formulario A'" class="formulario solicitud-pasantia">
        <header class="formulario-header">
          <h2 class="h2">
            FORMULARIO SOLICITUD DE PASANTÍA DE PERFECCIONAMIENTO
            PARA MÉDICOS, ODONTÓLOGOS, PROFESIONALES DE SALUD,
            TÉCNICOS Y ADMINISTRATIVOS DE INSTITUCIONES PÚBLICAS
            Y PRIVADAS EN EL HOSPITAL SAN JUAN DE DIOS
          </h2>
          <div class="header-divider"></div>
          <p class="formulario-descripcion">
            Complete los datos requeridos y revise la documentación
            antes de crear su solicitud.
          </p>
        </header>
        <section class="documentacion-section">
          <div class="institucion-container widget-group searchable-select">
            <label>Listado de instituciones</label>
            <div class="search-input-wrapper">
              <input
                type="text"
                v-model="searchQueryListadoInstituciones"
                @focus="showDropdownListadoInstituciones = true"
                placeholder="Seleccione institución..."
                class="input-search-green"
                readonly
              />
              <span class="dropdown-arrow">▼</span>
            </div>
            <ul
              v-if="showDropdownListadoInstituciones && institucionesFiltradas.length > 0"
              class="dropdown-list"
            >
              <li
                v-for="item in institucionesFiltradas"
                :key="item"
                @click="seleccionarInstitucion(item)"
              >
                {{ item }}
              </li>
            </ul>
          </div>

          <div class="documentos-grid">
            <div class="documento-card">
              <button
                type="button"
                class="btn-connexion documento-btn"
                @click="actualizarSolicitante"
              >
                <span class="documento-icon">▤</span>
                <span>Carta Solicitud Director</span>
              </button>
              <label class="checkbox-label">
                <input
                  type="checkbox"
                  v-model="formServicio.noAplicaCarta"
                />
                <span>Autorizado</span>
              </label>
            </div>
            <div class="documento-card">
              <button
                type="button"
                class="btn-connexion documento-btn"
                @click="actualizarSolicitante"
              >
                <span class="documento-icon">▣</span>
                <span>Certificado Superintendencia de Salud / Título</span>
              </button>
              <label class="checkbox-label">
                <input
                  type="checkbox"
                  v-model="formServicio.noAplicaSuperintendencia"
                />
                <span>Autorizado</span>
              </label>
            </div>
            <div class="documento-card">
              <button
                type="button"
                class="btn-connexion documento-btn"
                @click="actualizarSolicitante"
              >
                <span class="documento-icon">⇄</span>
                <span>Certificado de Relación de Servicio</span>
              </button>
              <label class="checkbox-label">
                <input
                  type="checkbox"
                  v-model="formServicio.noAplicaRelacionServicio"
                />
                <span>Autorizado</span>
              </label>
            </div>
            <div class="documento-card">
              <button
                type="button"
                class="btn-connexion documento-btn"
                @click="actualizarSolicitante"
              >
                <span class="documento-icon">✚</span>
                <span>Certificado de Vacuna de Hepatitis B</span>
              </button>
              <label class="checkbox-label">
                <input
                  type="checkbox"
                  v-model="formServicio.noAplicaHepatitis"
                />
                <span>Autorizado</span>
              </label>
            </div>
            <div class="documento-card">
              <button
                type="button"
                class="btn-connexion documento-btn"
                @click="actualizarSolicitante"
              >
                <span class="documento-icon">⬡</span>
                <span>Seguro de Responsabilidad Civil</span>
              </button>
              <label class="checkbox-label">
                <input
                  type="checkbox"
                  v-model="formServicio.noAplicaSeguro"
                />
                <span>No aplica / autorizado</span>
              </label>
            </div>
            <div class="documento-card">
              <button
                type="button"
                class="btn-connexion documento-btn"
                @click="actualizarSolicitante"
              >
                <span class="documento-icon">✈</span>
                <span>Certificado de Viaje</span>
              </button>
              <label class="checkbox-label">
                <input
                  type="checkbox"
                  v-model="formServicio.noAplicaViaje"
                />
                <span>No aplica / autorizado</span>
              </label>
            </div>
          </div>
        </section>
        <footer class="formulario-actions">
            <button
              type="button"
              class="btn-connexion btn-action btn-crear"
              @click="actualizarSolicitante"
            >
              <span class="action-icon">＋</span>
              Crear Solicitud
            </button>
            <button
              type="button"
              class="btn-connexion btn-action btn-borrador"
              @click="actualizarSolicitante"
            >
              <span class="action-icon">▣</span>
              Guardar Borrador
            </button>
            <button
              type="button"
              class="btn-connexion btn-action btn-cancelar"
              @click="actualizarSolicitante"
            >
              <span class="action-icon">✕</span>
              Cancelar
            </button>
        </footer>
    </div>  
    <!-- Formulario B -->
    <div
      v-if="formServicio.tipoFormulario === 'Formulario B'"
      class="formulario solicitud-pasantia"
    >
      <!-- ENCABEZADO -->
      <header class="formulario-header">
        <h2 class="h2">
          FORMULARIO SOLICITUD DE PASANTÍA DE PERFECCIONAMIENTO
          PARA MÉDICOS, ODONTÓLOGOS, PROFESIONALES DE SALUD,
          TÉCNICOS Y ADMINISTRATIVOS DE FORMA PARTICULAR
          EN EL HOSPITAL SAN JUAN DE DIOS
        </h2>

        <div class="header-divider"></div>

        <p class="formulario-descripcion">
          Complete y revise la documentación requerida para
          continuar con su solicitud de pasantía particular.
        </p>
      </header>

      <!-- DOCUMENTACIÓN REQUERIDA -->
      <section class="documentacion-section documentacion-section-b">

        <div class="documentos-grid documentos-grid-b">

          <!-- CARTA SOLICITUD DIRECTOR -->
          <div class="documento-card">
            <button
              type="button"
              class="btn-connexion documento-btn"
              @click="actualizarSolicitante"
            >
              <span class="documento-icon">▤</span>
              <span>Carta Solicitud Director</span>
            </button>

            <label class="checkbox-label">
              <input
                type="checkbox"
                v-model="formServicio.noAplicaCarta"
              />
              <span>Autorizado</span>
            </label>
          </div>

          <!-- CERTIFICADO SUPERINTENDENCIA -->
          <div class="documento-card">
            <button
              type="button"
              class="btn-connexion documento-btn"
              @click="actualizarSolicitante"
            >
              <span class="documento-icon">▣</span>
              <span>
                Certificado Superintendencia de Salud / Título
              </span>
            </button>

            <label class="checkbox-label">
              <input
                type="checkbox"
                v-model="formServicio.noAplicaSuperintendencia"
              />
              <span>Autorizado</span>
            </label>
          </div>

          <!-- CERTIFICADO HEPATITIS B -->
          <div class="documento-card">
            <button
              type="button"
              class="btn-connexion documento-btn"
              @click="actualizarSolicitante"
            >
              <span class="documento-icon">✚</span>
              <span>Certificado de Vacuna de Hepatitis B</span>
            </button>

            <label class="checkbox-label">
              <input
                type="checkbox"
                v-model="formServicio.noAplicaHepatitis"
              />
              <span>Autorizado</span>
            </label>
          </div>

          <!-- SEGURO RESPONSABILIDAD CIVIL -->
          <div class="documento-card">
            <button
              type="button"
              class="btn-connexion documento-btn"
              @click="actualizarSolicitante"
            >
              <span class="documento-icon">⬡</span>
              <span>Seguro de Responsabilidad Civil</span>
            </button>

            <label class="checkbox-label">
              <input
                type="checkbox"
                v-model="formServicio.noAplicaSeguro"
              />
              <span>No aplica / autorizado</span>
            </label>
          </div>

          <!-- CERTIFICADO DE VIAJE -->
          <div class="documento-card">
            <button
              type="button"
              class="btn-connexion documento-btn"
              @click="actualizarSolicitante"
            >
              <span class="documento-icon">✈</span>
              <span>Certificado de Viaje</span>
            </button>

            <label class="checkbox-label">
              <input
                type="checkbox"
                v-model="formServicio.noAplicaViaje"
              />
              <span>No aplica / autorizado</span>
            </label>
          </div>

        </div>
      </section>

      <!-- ACCIONES -->
      <footer class="formulario-actions">

        <button
          type="button"
          class="btn-connexion btn-action btn-crear"
          @click="actualizarSolicitante"
        >
          <span class="action-icon">＋</span>
          Crear Solicitud
        </button>

        <button
          type="button"
          class="btn-connexion btn-action btn-borrador"
          @click="actualizarSolicitante"
        >
          <span class="action-icon">▣</span>
          Guardar Borrador
        </button>

        <button
          type="button"
          class="btn-connexion btn-action btn-cancelar"
          @click="actualizarSolicitante"
        >
          <span class="action-icon">✕</span>
          Cancelar
        </button>

      </footer>
    </div>
    <!-- Formulario C -->
    <div v-if="formServicio.tipoFormulario === 'Formulario C'" class="formulario solicitud-pasantia">
      <header class="formulario-header">
        <h2 class="h2">FORMULARIO SOLICITUD DE PASANTIA OBSERVACIONAL PARA ESTUDIANTES DE PREGRADO EN EL HOSPITAL SAN JUAN DE DIOS (QUE NO FORMA PARTE DE SU FORMACIÓN CURRICULAR)</h2>
        <div class="header-divider"></div>
        <p class="formulario-descripcion">Complete los datos y requisitos necesarios para la pasantía observacional.</p>
      </header>
      <section class="documentacion-section documentacion-section-b">
        <div class="documentos-grid">
          <div class="documento-card">
            <button type="button" class="btn-connexion documento-btn" @click="actualizarSolicitante"><span class="documento-icon">▤</span><span>Carta de Solicitud</span></button>
            <label class="checkbox-label"><input type="checkbox" v-model="formServicio.noAplicaCarta" /><span>Autorizado</span></label>
          </div>
          <div class="documento-card">
            <button type="button" class="btn-connexion documento-btn" @click="actualizarSolicitante"><span class="documento-icon">▣</span><span>Certificado Alumno regular</span></button>
            <label class="checkbox-label"><input type="checkbox" v-model="formServicio.noAplicaAlumno" /><span>Autorizado</span></label>
          </div>
          <div class="documento-card">
            <button type="button" class="btn-connexion documento-btn" @click="actualizarSolicitante"><span class="documento-icon">✚</span><span>Certificado de Vacuna de Hepatitis B</span></button>
            <label class="checkbox-label"><input type="checkbox" v-model="formServicio.noAplicaHepatitis" /><span>Autorizado</span></label>
          </div>
          <div class="documento-card">
            <button type="button" class="btn-connexion documento-btn" @click="actualizarSolicitante"><span class="documento-icon">✈</span><span>Certificado de Viaje</span></button>
            <label class="checkbox-label"><input type="checkbox" v-model="formServicio.noAplicaViaje" /><span>No aplica / autorizado</span></label>
          </div>  
        </div>

        <div class="form-row-3" style="margin-top: 1.5rem;">
          <div class="widget-group searchable-select">
            <label>País</label>
            <div class="search-input-wrapper">
              <input 
                type="text" 
                v-model="searchQueryPais" 
                @focus="showDropdownPais = true" 
                placeholder="Buscar o seleccionar país..." 
                class="input-search-green"
              />
              <span class="dropdown-arrow">▼</span>
            </div>

            <ul v-if="showDropdownPais && paisesFiltrados.length > 0" class="dropdown-list">
              <li 
                v-for="pais in paisesFiltrados" 
                :key="pais" 
                @click="seleccionarPais(pais)"
              >
                {{ pais }}
              </li>
            </ul>
          </div>

          <div class="widget-group">
            <label>Universidad</label>
            <input type="text" v-model="formServicio.universidad" required />
          </div>
        </div>
      </section>
      
      <footer class="formulario-actions">
        <button type="button" class="btn-connexion btn-action btn-crear" @click="actualizarSolicitante"><span class="action-icon">＋</span>Crear Solicitud</button>
        <button type="button" class="btn-connexion btn-action btn-borrador" @click="actualizarSolicitante"><span class="action-icon">▣</span>Guardar Borrador</button>
        <button type="button" class="btn-connexion btn-action btn-cancelar" @click="actualizarSolicitante"><span class="action-icon">✕</span>Cancelar</button>
      </footer>
    </div>
    <!-- Formulario D -->
    <div v-if="formServicio.tipoFormulario === 'Formulario D'" class="formulario solicitud-pasantia">
      <header class="formulario-header">
        <h2 class="h2">FORMULARIO SOLICITUD DE PASANTIA DE PERFECCIONAMIENTO PARA PROFESIONALES Y TÉCNICOS DE OTRAS CARRERAS, Y ADMINISTRATIVOS DE INSTITUCIONES PÚBLICAS Y PRIVADAS EN EL HOSPITAL SAN JUAN DE DIOS</h2>
        <div class="header-divider"></div>
        <p class="formulario-descripcion">Complete los datos de la institución y la documentación requerida.</p>
      </header>
      <section class="documentacion-section">
        <div class="institucion-container widget-group searchable-select">
          <label>Listado de instituciones</label>
          <div class="search-input-wrapper">
            <input 
              type="text" 
              v-model="searchQueryListadoInstituciones" 
              @focus="showDropdownListadoInstituciones = true" 
              placeholder="Seleccione institución..." 
              class="input-search-green"
              readonly
            />
            <span class="dropdown-arrow">▼</span>
          </div>

          <ul v-if="showDropdownListadoInstituciones && institucionesFiltradas.length > 0" class="dropdown-list">
            <li 
              v-for="item in institucionesFiltradas" 
              :key="item" 
              @click="seleccionarInstitucion(item)"
            >
              {{ item }}
            </li>
          </ul>
        </div>
        <div class="documentos-grid">
          <div class="documento-card">
            <button type="button" class="btn-connexion documento-btn" @click="actualizarSolicitante"><span class="documento-icon">▤</span><span>Carta Solicitud Director</span></button>
            <label class="checkbox-label"><input type="checkbox" v-model="formServicio.noAplicaCarta" /><span>Autorizado</span></label>
          </div>
          <div class="documento-card">
            <button type="button" class="btn-connexion documento-btn" @click="actualizarSolicitante"><span class="documento-icon">▣</span><span>Certificado Titulo</span></button>
            <label class="checkbox-label"><input type="checkbox" v-model="formServicio.noAplicaTitulo" /><span>Autorizado</span></label>
          </div>
          <div class="documento-card">
            <button type="button" class="btn-connexion documento-btn" @click="actualizarSolicitante"><span class="documento-icon">⇄</span><span>Certificado de Relacion de Servicio</span></button>
            <label class="checkbox-label"><input type="checkbox" v-model="formServicio.noAplicaRelacion" /><span>Autorizado</span></label>
          </div>
          <div class="documento-card">
            <button type="button" class="btn-connexion documento-btn" @click="actualizarSolicitante"><span class="documento-icon">✈</span><span>Certificado Seguro de Viaje</span></button>
            <label class="checkbox-label"><input type="checkbox" v-model="formServicio.noAplicaSeguroViaje" /><span>No aplica / autorizado</span></label>
          </div>  
        </div>
      </section>
      
      <footer class="formulario-actions">
        <button type="button" class="btn-connexion btn-action btn-crear" @click="actualizarSolicitante"><span class="action-icon">＋</span>Crear Solicitud</button>
        <button type="button" class="btn-connexion btn-action btn-borrador" @click="actualizarSolicitante"><span class="action-icon">▣</span>Guardar Borrador</button>
        <button type="button" class="btn-connexion btn-action btn-cancelar" @click="actualizarSolicitante"><span class="action-icon">✕</span>Cancelar</button>
      </footer>
    </div>
    <!-- Formulario E -->
    <div v-if="formServicio.tipoFormulario === 'Formulario E'" class="formulario solicitud-pasantia">
      <header class="formulario-header">
        <h2 class="h2">FORMULARIO SOLICITUD DE PASANTIA DE PERFECCIONAMIENTO PARA PROFESIONALES Y TÉCNICOS DE OTRAS CARRERAS, Y ADMINISTRATIVOS DE FORMA PARTICULAR EN EL HOSPITAL SAN JUAN DE DIOS</h2>
        <div class="header-divider"></div>
        <p class="formulario-descripcion">Verifique y autorice los documentos necesarios para la pasantía particular.</p>
      </header>
      <section class="documentacion-section documentacion-section-b">
        <div class="documentos-grid documentos-grid-b">
          <div class="documento-card">
            <button type="button" class="btn-connexion documento-btn" @click="actualizarSolicitante"><span class="documento-icon">▤</span><span>Carta Solicitud Director</span></button>
            <label class="checkbox-label"><input type="checkbox" v-model="formServicio.noAplicaCarta" /><span>Autorizado</span></label>
          </div>
          <div class="documento-card">
            <button type="button" class="btn-connexion documento-btn" @click="actualizarSolicitante"><span class="documento-icon">▣</span><span>Certificado de Titulo</span></button>
            <label class="checkbox-label"><input type="checkbox" v-model="formServicio.noAplicaTitulo" /><span>Autorizado</span></label>
          </div>
        </div>
      </section>
      
      <footer class="formulario-actions">
        <button type="button" class="btn-connexion btn-action btn-crear" @click="actualizarSolicitante"><span class="action-icon">＋</span>Crear Solicitud</button>
        <button type="button" class="btn-connexion btn-action btn-borrador" @click="actualizarSolicitante"><span class="action-icon">▣</span>Guardar Borrador</button>
        <button type="button" class="btn-connexion btn-action btn-cancelar" @click="actualizarSolicitante"><span class="action-icon">✕</span>Cancelar</button>
      </footer>
    </div>

  </div>
</template>

<style scoped>
/* =========================================
   BASE Y ESTRUCTURA GENERAL
========================================= */
.admin-container {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  min-width: 0;
  padding: clamp(1rem, 2.5vw, 2.5rem);
  box-sizing: border-box;
  background: #e6e6e6;
  font-family: Arial, Helvetica, sans-serif;
}

.main-layout {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1440px;
  min-width: 0;
  margin: 0 auto;
}

.left-form-section {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  min-width: 0;
}

.admin-container h1 {
  margin: 0 0 1rem;
  color: #164568;
  font-size: clamp(1.35rem, 2vw, 1.8rem);
  line-height: 1.3;
}

/* =========================================
   GRILLAS Y CAMPOS
========================================= */
.form-row-3 {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  min-width: 0;
}

.desplegables-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.2rem;
  margin-top: 1rem;
}

.widget-group {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.widget-group > label {
  margin-bottom: 0.4rem;
  color: #405568;
  font-size: 0.875rem;
  font-weight: 600;
}

.widget-group input:not([type="checkbox"]),
.widget-group select,
.widget-group textarea {
  width: 100%;
  min-width: 0;
  min-height: 42px;
  padding: 0.7rem 0.8rem;
  color: #243746;
  background: #fff;
  border: 1px solid #d4dfe7;
  border-radius: 7px;
  font: inherit;
  box-sizing: border-box;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.widget-group input:not([type="checkbox"]):focus,
.widget-group select:focus,
.widget-group textarea:focus {
  border-color: #0caf80;
  box-shadow: 0 0 0 3px rgba(12, 175, 128, 0.12);
}

.select-green {
  cursor: pointer;
}

.searchable-select {
  position: relative;
  min-width: 0;
}

.search-input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  min-width: 0;
}

.input-search-green {
  width: 100%;
  padding-right: 2.2rem !important;
  background: #fff !important;
  color: #243746 !important;
  border: 1px solid #d4dfe7 !important;
  border-radius: 7px !important;
  font-weight: 500;
  cursor: pointer;
}

.input-search-green:focus {
  border-color: #0caf80 !important;
  box-shadow: 0 0 0 3px rgba(12, 175, 128, 0.12);
}

.dropdown-arrow {
  position: absolute;
  right: 12px;
  color: #078664;
  font-size: 0.75rem;
  pointer-events: none;
}

.dropdown-list {
  position: absolute;
  z-index: 100;
  top: calc(100% + 4px);
  left: 0;
  width: 100%;
  max-height: 240px;
  margin: 0;
  padding: 5px;
  overflow-y: auto;
  list-style: none;
  background: #fff;
  border: 1px solid #dbe7e4;
  border-radius: 8px;
  box-shadow: 0 8px 20px rgba(15, 45, 65, 0.12);
  box-sizing: border-box;
}

.dropdown-list li {
  padding: 0.7rem 0.8rem;
  color: #334155;
  border-radius: 5px;
  font-size: 0.9rem;
  cursor: pointer;
}

.dropdown-list li:hover {
  color: #087c5d;
  background: #eaf8f3;
}

/* =========================================
   BOTONES GENERALES
========================================= */
.actions-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 1rem;
  margin-top: 0.5rem;
}

.button-wrapper {
  min-width: 0;
}

.btn-connexion {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  width: auto;
  max-width: 100%;
  padding: 0.75rem 1.25rem;
  color: #fff;
  background: #0caf80;
  border: 1px solid transparent;
  border-radius: 9px;
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.18);
  font-family: inherit;
  font-size: 0.9rem;
  font-weight: 700;
  line-height: 1.35;
  text-align: center;
  white-space: normal;
  overflow-wrap: anywhere;
  cursor: pointer;
  transition: background-color 0.2s, transform 0.2s, box-shadow 0.2s;
}

.btn-connexion:hover {
  background: #078b67;
  box-shadow: 0 5px 14px rgba(7, 139, 103, 0.2);
}

.btn-connexion:active {
  transform: translateY(1px);
}

.btn-connexion:focus-visible {
  outline: 3px solid rgba(12, 175, 128, 0.25);
  outline-offset: 2px;
}

.btn-cargarDocumento {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  width: auto;
  max-width: 100%;
  padding: 0.75rem 1.25rem;
  color: #fff;
  background: #4c81f2;
  border: 1px solid transparent;
  border-radius: 9px;
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.18);
  font-family: inherit;
  font-size: 0.9rem;
  font-weight: 700;
  line-height: 1.35;
  text-align: center;
  white-space: normal;
  overflow-wrap: anywhere;
  cursor: pointer;
  transition: background-color 0.2s, transform 0.2s, box-shadow 0.2s;
}

.btn-cargarDocumento:hover {
  background: #486ab4;
  box-shadow: 0 5px 14px rgba(7, 139, 103, 0.2);
}

.btn-cargarDocumento:active {
  transform: translateY(1px);
}

.btn-cargarDocumento:focus-visible {
  outline: 3px solid rgba(12, 175, 128, 0.25);
  outline-offset: 2px;
}

.checkbox-label {
  display: flex;
  align-items: flex-start;
  gap: 0.55rem;
  margin: 0;
  color: #334155;
  font-size: 0.85rem;
  line-height: 1.5;
  cursor: pointer;
}

.checkbox-label input[type="checkbox"] {
  flex: 0 0 17px;
  width: 17px;
  height: 17px;
  margin: 2px 0 0;
  accent-color: #0caf80;
  cursor: pointer;
}

/* =========================================
   CONTENEDOR VISUAL DE FORMULARIOS A, B, C, D, E
========================================= */
.formulario.solicitud-pasantia {
  width: 100%;
  max-width: 100%;
  min-width: 0;
  padding: clamp(1rem, 2.2vw, 2rem);
  color: #243746;
  background: #fff;
  border: 1px solid #e1e8ef;
  border-radius: 14px;
  box-shadow: 0 5px 20px rgba(15, 45, 65, 0.07);
  box-sizing: border-box;
}

.solicitud-pasantia *,
.solicitud-pasantia *::before,
.solicitud-pasantia *::after {
  box-sizing: border-box;
}

.solicitud-pasantia .formulario-header {
  width: 100%;
  margin-bottom: 1.75rem;
  text-align: center;
}

.solicitud-pasantia .h2 {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  color: #164568;
  font-size: clamp(1.1rem, 1.6vw, 1.6rem);
  font-weight: 700;
  line-height: 1.5;
  text-align: center;
  overflow-wrap: break-word;
}

.solicitud-pasantia .header-divider {
  width: 100%;
  height: 3px;
  margin: 1.2rem 0 0.9rem;
  background: #0caf80;
  border-radius: 5px;
}

.solicitud-pasantia .formulario-descripcion {
  margin: 0;
  color: #64748b;
  font-size: 0.9rem;
  line-height: 1.5;
}

/* Formulario A y D: selector de institución + documentos */
.solicitud-pasantia .documentacion-section {
  display: grid;
  grid-template-columns: minmax(220px, 1fr) minmax(0, 5fr);
  align-items: start;
  gap: 1.25rem;
  min-width: 0;
}

.solicitud-pasantia .institucion-container {
  position: relative;
  min-width: 0;
}

.solicitud-pasantia .institucion-container > label {
  display: block;
  margin-bottom: 0.55rem;
  color: #24445b;
  font-size: 0.875rem;
  font-weight: 600;
}

/* Formularios B, C y E: documentos ocupan todo el ancho */
.solicitud-pasantia .documentacion-section-b {
  grid-template-columns: minmax(0, 1fr);
}

.solicitud-pasantia .documentos-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  align-items: stretch;
  gap: 1rem;
  min-width: 0;
}

.solicitud-pasantia .documentos-grid-b {
  width: 100%;
}

/* Tarjetas de documentos */
.solicitud-pasantia .documento-card {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0.9rem;
  min-width: 0;
  min-height: 145px;
  padding: 0.75rem;
  background: linear-gradient(145deg, #f7fcfa, #eef9f6);
  border: 1px solid #d1ebe3;
  border-radius: 12px;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.solicitud-pasantia .documento-card:hover {
  border-color: #80cfb6;
  box-shadow: 0 4px 12px rgba(12, 175, 128, 0.09);
}

.solicitud-pasantia .documento-btn {
  display: flex;
  width: 100%;
  min-width: 0;
  min-height: 76px;
  align-items: center;
  justify-content: flex-start;
  gap: 0.65rem;
  padding: 0.8rem;
  color: #fff;
  background: linear-gradient(135deg, #10b981, #07966e);
  border: none;
  border-radius: 9px;
  box-shadow: 0 4px 9px rgba(7, 150, 110, 0.15);
  font-size: 0.82rem;
  font-weight: 700;
  line-height: 1.4;
  text-align: left;
  white-space: normal;
  overflow-wrap: anywhere;
}

.solicitud-pasantia .documento-btn:hover {
  background: linear-gradient(135deg, #0aa875, #057b5c);
}

.solicitud-pasantia .documento-icon {
  display: inline-flex;
  flex: 0 0 28px;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  line-height: 1;
}

.solicitud-pasantia .checkbox-label {
  padding: 0 0.2rem;
}

/* Acciones inferiores */
.solicitud-pasantia .formulario-actions {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.25rem;
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid #e1eaf0;
}

.solicitud-pasantia .btn-action {
  display: flex;
  width: 100%;
  min-width: 0;
  min-height: 52px;
  align-items: center;
  justify-content: center;
  gap: 0.65rem;
  padding: 0.8rem 1rem;
  border-radius: 9px;
  font-size: 0.9rem;
}

.solicitud-pasantia .btn-crear,
.solicitud-pasantia .btn-borrador {
  color: #fff;
  background: #0caf80;
}

.solicitud-pasantia .btn-crear:hover,
.solicitud-pasantia .btn-borrador:hover {
  background: #078b67;
}

.solicitud-pasantia .btn-cancelar {
  color: #475569;
  background: #edf2f7;
  border-color: #d9e2ec;
  box-shadow: none;
}

.solicitud-pasantia .btn-cancelar:hover {
  color: #334155;
  background: #e2e8f0;
}

.solicitud-pasantia .action-icon {
  font-size: 1.35rem;
  line-height: 1;
}

/* =========================================
   RESPONSIVE
========================================= */
@media (max-width: 1100px) {
  .form-row-3 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .solicitud-pasantia .documentacion-section {
    grid-template-columns: minmax(0, 1fr);
  }

  .solicitud-pasantia .documentos-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 600px) {
  .admin-container {
    gap: 1.25rem;
    padding: 0.75rem;
  }

  .form-row-3,
  .desplegables-grid {
    grid-template-columns: minmax(0, 1fr);
  }

  .actions-row {
    flex-direction: column;
    align-items: stretch;
  }

  .actions-row .button-wrapper,
  .actions-row .btn-connexion {
    width: 100%;
  }

  .solicitud-pasantia .h2 {
    font-size: 1.05rem;
    line-height: 1.45;
  }

  .solicitud-pasantia .documentos-grid {
    grid-template-columns: minmax(0, 1fr);
    gap: 0.75rem;
  }

  .solicitud-pasantia .documento-card {
    min-height: auto;
  }

  .solicitud-pasantia .documento-btn {
    min-height: 60px;
  }

  .solicitud-pasantia .formulario-actions {
    grid-template-columns: minmax(0, 1fr);
    gap: 0.75rem;
    margin-top: 1.25rem;
    padding-top: 1rem;
  }

  .solicitud-pasantia .btn-action {
    width: 100%;
  }
}
</style>