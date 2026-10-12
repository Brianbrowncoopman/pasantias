<script setup>
import { ref, reactive, computed, onMounted, onUnmounted, vModelCheckbox } from 'vue'

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
// 4. Desplegable Tipo de Formulario
// ----------------------------------------------------
const tiposFormulario = ref(['Formulario A', 'Formulario B', 'Formulario C', 'Formulario D', 'Formulario E'])
const searchQueryFormulario = ref('')
const showDropdownFormulario = ref(false)

const formulariosFiltrados = computed(() => {
  if (!searchQueryFormulario.value) return tiposFormulario.value
  return tiposFormulario.value.filter(f => 
    f.toLowerCase().includes(searchQueryFormulario.value.toLowerCase())
  )
})

const seleccionarFormulario = (item) => {
  formServicio.tipoFormulario = item
  searchQueryFormulario.value = item
  showDropdownFormulario.value = false
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
    showDropdownFormulario.value = false
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
            <button type="button" class="btn-connexion">Cargar Documento Identidad</button>
          </div>
          <div class="button-wrapper">
            <button type="button" class="btn-connexion">Cargar Certificado de Antecedentes</button>
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

          <!-- 4. Tipo de Formulario -->
          <div class="widget-group searchable-select">
            <label>Tipo de Formulario</label>
            <div class="search-input-wrapper">
              <input 
                type="text" 
                v-model="searchQueryFormulario" 
                @focus="showDropdownFormulario = true" 
                placeholder="Seleccione formulario..." 
                class="input-search-green"
                readonly
              />
              <span class="dropdown-arrow">▼</span>
            </div>

            <ul v-if="showDropdownFormulario && formulariosFiltrados.length > 0" class="dropdown-list">
              <li 
                v-for="item in formulariosFiltrados" 
                :key="item" 
                @click="seleccionarFormulario(item)"
              >
                {{ item }}
              </li>
            </ul>
          </div>

        </div>

      </div>

    </div>

    <!-- Formulario A -->
    <div v-if="formServicio.tipoFormulario === 'Formulario A'" class="formulario">
      <h2>FORMULARIO SOLICITUD DE PASANTÍA DE PERFECCIONAMIENTO PARA MÉDICOS, ODONTÓLOGOS, PROFESIONALES DE SALUD, TÉCNICOS Y ADMINISTRATIVOS DE INSTITUCIONES PÚBLICAS Y PRIVADAS EN EL HOSPITAL SAN JUAN DE DIOS</h2>
      <div class="form-row-3">
          <div class="widget-group searchable-select">
            <label>Listado instituciones</label>
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
          <div class="button-wrapper">
            <button type="button" class="btn-connexion" @click="actualizarSolicitante">Carta Solicitud Director</button>
            <label class="checkbox-label">
              <input type="checkbox" v-model="formServicio.noAplicaCarta" />
              <span>Autorizado</span>
            </label>
          </div>
          <div class="button-wrapper">
            <button type="button" class="btn-connexion" @click="actualizarSolicitante">Certificado Superintendencia de Salud/ Titulo</button>
            <label class="checkbox-label">
              <input type="checkbox" v-model="formServicio.noAplicaCarta" />
              <span>Autorizado</span>
            </label>
          </div>
          <div class="button-wrapper">
            <button type="button" class="btn-connexion" @click="actualizarSolicitante">Certificado de Relacion de Servicio</button>
            <label class="checkbox-label">
              <input type="checkbox" v-model="formServicio.noAplicaCarta" />
              <span>Autorizado</span>
            </label>
          </div>
          <div class="button-wrapper">
            <button type="button" class="btn-connexion" @click="actualizarSolicitante">Certificado de Vacuna de Hepatitis B</button>
            <label class="checkbox-label">
              <input type="checkbox" v-model="formServicio.noAplicaCarta" />
              <span>Autorizado</span>
            </label>
          </div>
          <div class="button-wrapper">
            <button type="button" class="btn-connexion" @click="actualizarSolicitante">Seguro de Responsabilidad Civil</button>
            <label class="checkbox-label">
              <input type="checkbox" v-model="formServicio.noAplicaCarta" />
              <span>No aplica / autorizado</span>
            </label>
          </div>
          <div class="button-wrapper">
            <button type="button" class="btn-connexion" @click="actualizarSolicitante">Certificado de Viaje</button>
            <label class="checkbox-label">
              <input type="checkbox" v-model="formServicio.noAplicaCarta" />
              <span>No aplica / autorizado</span>
            </label>
          </div>  
      </div>
      <br>
      <div class="form-row-3">
        <div class="button-wrapper">
          <button type="button" class="btn-connexion" @click="actualizarSolicitante">Crear Solicitud</button>
        </div>
        <div class="button-wrapper">
          <button type="button" class="btn-connexion" @click="actualizarSolicitante">Guardar Borrador</button>
        </div>
        <div class="button-wrapper">
          <button type="button" class="btn-connexion" @click="actualizarSolicitante">Cancelar</button>
        </div> 
      </div>
    </div>
    
    <h1 v-if="formServicio.tipoFormulario === 'Formulario A'">---------------------------------------------------------------</h1>

    <!-- Formulario B -->
    <div v-if="formServicio.tipoFormulario === 'Formulario B'" class="formulario">
      <h2>FORMULARIO SOLICITUD DE PASANTÍA DE PERFECCIONAMIENTO PARA MÉDICOS, ODONTÓLOGOS, PROFESIONALES DE SALUD, TÉCNICOS Y ADMINISTRATIVOS DE FORMA PARTICULAR EN EL HOSPITAL SAN JUAN DE DIOS</h2>
      <div class="form-row-3">
          <div class="button-wrapper">
            <button type="button" class="btn-connexion" @click="actualizarSolicitante">Carta Solicitud Director</button>
            <label class="checkbox-label">
              <input type="checkbox" v-model="formServicio.noAplicaCarta" />
              <span>Autorizado</span>
            </label>
          </div>
          <div class="button-wrapper">
            <button type="button" class="btn-connexion" @click="actualizarSolicitante">Certificado Superintendencia de Salud/ Titulo</button>
            <label class="checkbox-label">
              <input type="checkbox" v-model="formServicio.noAplicaCarta" />
              <span>Autorizado</span>
            </label>
          </div>
          <div class="button-wrapper">
            <button type="button" class="btn-connexion" @click="actualizarSolicitante">Certificado de Vacuna de Hepatitis B</button>
            <label class="checkbox-label">
              <input type="checkbox" v-model="formServicio.noAplicaCarta" />
              <span>Autorizado</span>
            </label>
          </div>
          <div class="button-wrapper">
            <button type="button" class="btn-connexion" @click="actualizarSolicitante">Seguro de Responsabilidad Civil</button>
            <label class="checkbox-label">
              <input type="checkbox" v-model="formServicio.noAplicaCarta" />
              <span>No aplica / autorizado</span>
            </label>
          </div>
          <div class="button-wrapper">
            <button type="button" class="btn-connexion" @click="actualizarSolicitante">Certificado de Viaje</button>
            <label class="checkbox-label">
              <input type="checkbox" v-model="formServicio.noAplicaCarta" />
              <span>No aplica / autorizado</span>
            </label>
          </div>  
      </div>
      <br>
      <div class="form-row-3">
        <div class="button-wrapper">
          <button type="button" class="btn-connexion" @click="actualizarSolicitante">Crear Solicitud</button>
        </div>
        <div class="button-wrapper">
          <button type="button" class="btn-connexion" @click="actualizarSolicitante">Guardar Borrador</button>
        </div>
        <div class="button-wrapper">
          <button type="button" class="btn-connexion" @click="actualizarSolicitante">Cancelar</button>
        </div> 
      </div>
    </div>
    
    <h1 v-if="formServicio.tipoFormulario === 'Formulario B'">---------------------------------------------------------------</h1>

    <!-- Formulario C -->
    <div v-if="formServicio.tipoFormulario === 'Formulario C'" class="formulario">
      <h2>FORMULARIO SOLICITUD DE PASANTIA OBSERVACIONAL PARA ESTUDIANTES DE PREGRADO EN EL HOSPITAL SAN JUAN DE DIOS (QUE NO FORMA PARTE DE SU FORMACIÓN CURRICULAR)</h2>
      <div class="form-row-3">
          <div class="button-wrapper">
            <button type="button" class="btn-connexion" @click="actualizarSolicitante">Carta de Solicitud</button>
            <label class="checkbox-label">
              <input type="checkbox" v-model="formServicio.noAplicaCarta" />
              <span>Autorizado</span>
            </label>
          </div>
          <div class="button-wrapper">
            <button type="button" class="btn-connexion" @click="actualizarSolicitante">Certificado Alumno regular</button>
            <label class="checkbox-label">
              <input type="checkbox" v-model="formServicio.noAplicaCarta" />
              <span>Autorizado</span>
            </label>
          </div>
          <div class="button-wrapper">
            <button type="button" class="btn-connexion" @click="actualizarSolicitante">Certificado de Vacuna de Hepatitis B</button>
            <label class="checkbox-label">
              <input type="checkbox" v-model="formServicio.noAplicaCarta" />
              <span>Autorizado</span>
            </label>
          </div>
          <div class="button-wrapper">
            <button type="button" class="btn-connexion" @click="actualizarSolicitante">Certificado de Viaje</button>
            <label class="checkbox-label">
              <input type="checkbox" v-model="formServicio.noAplicaCarta" />
              <span>No aplica / autorizado</span>
            </label>
          </div>  

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
      <br>
      <div class="form-row-3">
        <div class="button-wrapper">
          <button type="button" class="btn-connexion" @click="actualizarSolicitante">Crear Solicitud</button>
        </div>
        <div class="button-wrapper">
          <button type="button" class="btn-connexion" @click="actualizarSolicitante">Guardar Borrador</button>
        </div>
        <div class="button-wrapper">
          <button type="button" class="btn-connexion" @click="actualizarSolicitante">Cancelar</button>
        </div> 
      </div>
    </div>
    
    <h1 v-if="formServicio.tipoFormulario === 'Formulario C'">---------------------------------------------------------------</h1>

    <!-- Formulario D -->
    <div v-if="formServicio.tipoFormulario === 'Formulario D'" class="formulario">
      <h2>FORMULARIO SOLICITUD DE PASANTIA DE PERFECCIONAMIENTO PARA PROFESIONALES Y TÉCNICOS DE OTRAS CARRERAS, Y ADMINISTRATIVOS DE INSTITUCIONES PÚBLICAS Y PRIVADAS EN EL HOSPITAL SAN JUAN DE DIOS</h2>
      <div class="form-row-3">
          <div class="widget-group searchable-select">
            <label>Listado instituciones</label>
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
          <div class="button-wrapper">
            <button type="button" class="btn-connexion" @click="actualizarSolicitante">Carta Solicitud Director</button>
            <label class="checkbox-label">
              <input type="checkbox" v-model="formServicio.noAplicaCarta" />
              <span>Autorizado</span>
            </label>
          </div>
          <div class="button-wrapper">
            <button type="button" class="btn-connexion" @click="actualizarSolicitante">Certificado Titulo</button>
            <label class="checkbox-label">
              <input type="checkbox" v-model="formServicio.noAplicaCarta" />
              <span>Autorizado</span>
            </label>
          </div>
          <div class="button-wrapper">
            <button type="button" class="btn-connexion" @click="actualizarSolicitante">Certificado de Relacion de Servicio</button>
            <label class="checkbox-label">
              <input type="checkbox" v-model="formServicio.noAplicaCarta" />
              <span>Autorizado</span>
            </label>
          </div>
          <div class="button-wrapper">
            <button type="button" class="btn-connexion" @click="actualizarSolicitante">Certificado Seguro de Viaje</button>
            <label class="checkbox-label">
              <input type="checkbox" v-model="formServicio.noAplicaCarta" />
              <span>No aplica / autorizado</span>
            </label>
          </div>  
      </div>
      <br>
      <div class="form-row-3">
        <div class="button-wrapper">
          <button type="button" class="btn-connexion" @click="actualizarSolicitante">Crear Solicitud</button>
        </div>
        <div class="button-wrapper">
          <button type="button" class="btn-connexion" @click="actualizarSolicitante">Guardar Borrador</button>
        </div>
        <div class="button-wrapper">
          <button type="button" class="btn-connexion" @click="actualizarSolicitante">Cancelar</button>
        </div> 
      </div>
    </div>
    
    <h1 v-if="formServicio.tipoFormulario === 'Formulario D'">---------------------------------------------------------------</h1>

    <!-- Formulario E -->
    <div v-if="formServicio.tipoFormulario === 'Formulario E'" class="formulario">
      <h2>FORMULARIO SOLICITUD DE PASANTIA DE PERFECCIONAMIENTO PARA PROFESIONALES Y TÉCNICOS DE OTRAS CARRERAS, Y ADMINISTRATIVOS DE FORMA PARTICULAR EN EL HOSPITAL SAN JUAN DE DIOS</h2>
      <div class="form-row-3">
          <div class="button-wrapper">
            <button type="button" class="btn-connexion" @click="actualizarSolicitante">Carta Solicitud Director</button>
            <label class="checkbox-label">
              <input type="checkbox" v-model="formServicio.noAplicaCarta" />
              <span>Autorizado</span>
            </label>
          </div>
          <div class="button-wrapper">
            <button type="button" class="btn-connexion" @click="actualizarSolicitante">Certificado de Titulo</button>
            <label class="checkbox-label">
              <input type="checkbox" v-model="formServicio.noAplicaCarta" />
              <span>Autorizado</span>
            </label>
          </div>
      </div>
      <br>
      <div class="form-row-3">
        <div class="button-wrapper">
          <button type="button" class="btn-connexion" @click="actualizarSolicitante">Crear Solicitud</button>
        </div>
        <div class="button-wrapper">
          <button type="button" class="btn-connexion" @click="actualizarSolicitante">Guardar Borrador</button>
        </div>
        <div class="button-wrapper">
          <button type="button" class="btn-connexion" @click="actualizarSolicitante">Cancelar</button>
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

.main-layout {
  display: flex;
  flex-direction: column;
  max-width: 1250px;
  width: 100%;
  margin: 0 auto;
}

.left-form-section {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.form-row-3 {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.desplegables-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.2rem;
  margin-top: 1rem;
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

.searchable-select {
  position: relative;
}

.search-input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.input-search-green {
  width: 100%;
  padding: 0.6rem 2rem 0.6rem 0.6rem !important;
  background-color: #f7f8f6 !important;
  color: #131313 !important;
  font-weight: bold;
  border: 1px solid #dcdcdc !important;
  border-radius: 2px;
  cursor: pointer;
}

.dropdown-arrow {
  position: absolute;
  right: 10px;
  color: #195058;
  font-size: 0.75rem;
  pointer-events: none;
}

.dropdown-list {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  max-height: 150px;
  overflow-y: auto;
  background-color: #ffffff;
  border: 1px solid #ccc;
  border-radius: 0 0 4px 4px;
  list-style: none;
  padding: 0;
  margin: 0;
  z-index: 100;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.dropdown-list li {
  padding: 0.5rem 0.8rem;
  cursor: pointer;
  font-size: 0.9rem;
  color: #333;
}

.dropdown-list li:hover {
  background-color: #f1f5f9;
  color: #2e7d32;
  font-weight: bold;
}

.actions-row {
  display: flex;
  gap: 1.5rem;
  margin-top: 0.5rem;
  justify-content: flex-start;
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

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: #333;
  margin-top: 0.3rem;
  cursor: pointer;
}

.formulario {
  background-color: #ffffff;
  padding: 1.5rem;
  border-radius: 6px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
}
</style>