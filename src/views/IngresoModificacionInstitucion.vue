<script setup>
import { ref, reactive, computed, onMounted, onUnmounted } from 'vue'

// Estado del formulario
const form = reactive({
  nombreInstitucion: '',
  nombreGestor: '',
  correoGestor: '',
  pais: '',
  comuna: ''
})

// Lista reactiva de instituciones
const instituciones = ref([])

// Lista de países de ejemplo
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

const comunasChile = ref(["Algarrobo",
  "Alhué",
  "Alto Biobío",
  "Alto del Carmen",
  "Alto Hospicio",
  "Ancud",
  "Andacollo",
  "Angol",
  "Antártica",
  "Antofagasta",
  "Antuco",
  "Arauco",
  "Arica",
  "Aysén",
  "Buin",
  "Bulnes",
  "Cabildo",
  "Cabo de Hornos",
  "Cabrero",
  "Calama",
  "Calbuco",
  "Caldera",
  "Calera",
  "Calera de Tango",
  "Calle Larga",
  "Camarones",
  "Camiña",
  "Canela",
  "Cañete",
  "Carahue",
  "Cartagena",
  "Casablanca",
  "Castro",
  "Catemu",
  "Cauquenes",
  "Cerrillos",
  "Cerro Navia",
  "Chaitén",
  "Chanco",
  "Chañaral",
  "Chépica",
  "Chiguayante",
  "Chile Chico",
  "Chillán",
  "Chillán Viejo",
  "Chimbarongo",
  "Cholchol",
  "Chonchi",
  "Cisnes",
  "Cobquecura",
  "Cochamó",
  "Cochrane",
  "Codegua",
  "Coelemu",
  "Coihueco",
  "Coinco",
  "Colbún",
  "Colchane",
  "Colina",
  "Collipulli",
  "Coltauco",
  "Combarbalá",
  "Concepción",
  "Conchalí",
  "Concón",
  "Constitución",
  "Contulmo",
  "Copiapó",
  "Coquimbo",
  "Coronel",
  "Corral",
  "Coyhaique",
  "Cunco",
  "Curacautín",
  "Curacaví",
  "Curaco de Vélez",
  "Curanilahue",
  "Curarrehue",
  "Curepto",
  "Curicó",
  "Dalcahue",
  "Diego de Almagro",
  "Doñihue",
  "El Bosque",
  "El Carmen",
  "El Monte",
  "El Quisco",
  "El Tabo",
  "Empedrado",
  "Ercilla",
  "Estación Central",
  "Florida",
  "Freire",
  "Freirina",
  "Fresia",
  "Frutillar",
  "Futaleufú",
  "Futrono",
  "Galvarino",
  "General Lagos",
  "Gorbea",
  "Graneros",
  "Guaitecas",
  "Hijuelas",
  "Hualaihué",
  "Hualañé",
  "Hualpén",
  "Hualqui",
  "Huara",
  "Huasco",
  "Huechuraba",
  "Illapel",
  "Independencia",
  "Iquique",
  "Isla de Maipo",
  "Isla de Pascua",
  "Juan Fernández",
  "La Cisterna",
  "La Cruz",
  "La Estrella",
  "La Florida",
  "La Granja",
  "La Higuera",
  "La Ligua",
  "La Pintana",
  "La Reina",
  "La Serena",
  "La Unión",
  "Lago Ranco",
  "Lago Verde",
  "Laguna Blanca",
  "Laja",
  "Lampa",
  "Lanco",
  "Las Cabras",
  "Las Condes",
  "Lautaro",
  "Lebu",
  "Licantén",
  "Limache",
  "Linares",
  "Litueche",
  "Llaillay",
  "Llanquihue",
  "Lo Barnechea",
  "Lo Espejo",
  "Lo Prado",
  "Lolol",
  "Loncoche",
  "Longaví",
  "Lonquimay",
  "Los Álamos",
  "Los Andes",
  "Los Ángeles",
  "Los Lagos",
  "Los Muermos",
  "Los Sauces",
  "Los Vilos",
  "Lota",
  "Lumaco",
  "Machalí",
  "Macul",
  "Máfil",
  "Maipú",
  "Malloa",
  "Marchihue",
  "María Elena",
  "María Pinto",
  "Mariquina",
  "Maule",
  "Maullín",
  "Mejillones",
  "Melipeuco",
  "Melipilla",
  "Molina",
  "Monte Patria",
  "Mostazal",
  "Mulchén",
  "Nacimiento",
  "Nancagua",
  "Natales",
  "Navidad",
  "Negrete",
  "Ninhue",
  "Nogales",
  "Nueva Imperial",
  "Ñiquén",
  "Ñuñoa",
  "O'Higgins",
  "Olivar",
  "Ollagüe",
  "Olmué",
  "Osorno",
  "Ovalle",
  "Padre Hurtado",
  "Padre Las Casas",
  "Paiguano",
  "Paillaco",
  "Paine",
  "Palena",
  "Palmilla",
  "Panguipulli",
  "Panquehue",
  "Papudo",
  "Paredones",
  "Parral",
  "Pedro Aguirre Cerda",
  "Pelarco",
  "Pelluhue",
  "Pemuco",
  "Pencahue",
  "Penco",
  "Peñaflor",
  "Peñalolén",
  "Peralillo",
  "Perquenco",
  "Petorca",
  "Peumo",
  "Pica",
  "Pichidegua",
  "Pichilemu",
  "Pinto",
  "Pirque",
  "Pitrufquén",
  "Placilla",
  "Portezuelo",
  "Porvenir",
  "Pozo Almonte",
  "Primavera",
  "Providencia",
  "Puchuncaví",
  "Pucón",
  "Pudahuel",
  "Puente Alto",
  "Puerto Montt",
  "Puerto Octay",
  "Puerto Varas",
  "Pumanque",
  "Punitaqui",
  "Punta Arenas",
  "Puqueldón",
  "Purén",
  "Purranque",
  "Putaendo",
  "Putre",
  "Puyehue",
  "Queilén",
  "Quellón",
  "Quemchi",
  "Quilaco",
  "Quilicura",
  "Quilleco",
  "Quillón",
  "Quillota",
  "Quilpué",
  "Quinchao",
  "Quinta de Tilcoco",
  "Quinta Normal",
  "Quintero",
  "Quirihue",
  "Rancagua",
  "Ránquil",
  "Rauco",
  "Recoleta",
  "Renaico",
  "Renca",
  "Rengo",
  "Requínoa",
  "Retiro",
  "Rinconada",
  "Río Bueno",
  "Río Claro",
  "Río Hurtado",
  "Río Ibáñez",
  "Río Negro",
  "Río Verde",
  "Romeral",
  "Saavedra",
  "Sagrada Familia",
  "Salamanca",
  "San Antonio",
  "San Bernardo",
  "San Carlos",
  "San Clemente",
  "San Esteban",
  "San Fabián",
  "San Felipe",
  "San Fernando",
  "San Gregorio",
  "San Ignacio",
  "San Javier",
  "San Joaquín",
  "San José de Maipo",
  "San Juan de la Costa",
  "San Miguel",
  "San Nicolás",
  "San Pablo",
  "San Pedro",
  "San Pedro de Atacama",
  "San Pedro de la Paz",
  "San Rafael",
  "San Ramón",
  "San Rosendo",
  "San Vicente",
  "Santa Bárbara",
  "Santa Cruz",
  "Santa Juana",
  "Santa María",
  "Santiago",
  "Santo Domingo",
  "Sierra Gorda",
  "Talagante",
  "Talca",
  "Talcahuano",
  "Taltal",
  "Temuco",
  "Teno",
  "Teodoro Schmidt",
  "Tierra Amarilla",
  "Tiltil",
  "Timaukel",
  "Tirúa",
  "Tocopilla",
  "Toltén",
  "Tomé",
  "Torres del Paine",
  "Tortel",
  "Traiguén",
  "Treguaco",
  "Tucapel",
  "Valdivia",
  "Vallenar",
  "Valparaíso",
  "Vichuquén",
  "Victoria",
  "Vicuña",
  "Vilcún",
  "Villa Alegre",
  "Villa Alemana",
  "Villarrica",
  "Viña del Mar",
  "Vitacura",
  "Yerbas Buenas",
  "Yumbel",
  "Yungay",
  "Zapallar"])

// Control del buscador desplegable de Países
const searchQuery = ref('')
const showDropdown = ref(false)

const paisesFiltrados = computed(() => {
  if (!searchQuery.value) return paisesDisponibles.value
  return paisesDisponibles.value.filter(p => 
    p.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

const seleccionarPais = (pais) => {
  form.pais = pais
  searchQuery.value = pais
  showDropdown.value = false
  if (pais !== 'Chile') {
    form.comuna = ''
  }
}

const handleClickOutside = (e) => {
  if (!e.target.closest('.searchable-select')) {
    showDropdown.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})

const guardarInstitucion = () => {
  if (!form.nombreInstitucion) {
    alert('Por favor ingresa el nombre de la institución')
    return
  }

  instituciones.value.push({ ...form })

  form.nombreInstitucion = ''
  form.nombreGestor = ''
  form.correoGestor = ''
  form.pais = ''
  form.comuna = ''
  searchQuery.value = ''
}

const eliminarInstitucion = (index) => {
  instituciones.value.splice(index, 1)
}
</script>

<template>
  <div class="institucion-container">
    <div class="form-section">
      <form @submit.prevent="guardarInstitucion" class="form-grid-2-columns">
        
        <!-- COLUMNA IZQUIERDA -->
        <div class="column-left">
          <div class="input-group">
            <label>Nombre Institución</label>
            <input 
              type="text" 
              v-model="form.nombreInstitucion" 
              placeholder="Ingrese nombre de institución" 
              required 
            />
          </div>

          <div class="input-group">
            <label>Nombre Gestor Institución...</label>
            <input 
              type="text" 
              v-model="form.nombreGestor" 
              placeholder="Nombre del gestor" 
            />
          </div>

          <div class="input-group">
            <label>Correo Gestor Institucional</label>
            <input 
              type="email" 
              v-model="form.correoGestor" 
              placeholder="correo@ejemplo.com" 
            />
          </div>
        </div>

        <!-- COLUMNA DERECHA -->
        <div class="column-right">
          <div class="input-group searchable-select">
            <label>País</label>
            <div class="search-input-wrapper">
              <input 
                type="text" 
                v-model="searchQuery" 
                @focus="showDropdown = true" 
                placeholder="Buscar o seleccionar país..." 
                class="input-search-green"
              />
              <span class="dropdown-arrow">▼</span>
            </div>

            <ul v-if="showDropdown && paisesFiltrados.length > 0" class="dropdown-list">
              <li 
                v-for="pais in paisesFiltrados" 
                :key="pais" 
                @click="seleccionarPais(pais)"
              >
                {{ pais }}
              </li>
            </ul>
          </div>

          <div class="input-group" v-if="form.pais === 'Chile'">
            <label>Comuna</label>
            <select v-model="form.comuna" class="select-green">
              <option disabled value="">Desplegable</option>
              <option v-for="c in comunasChile" :key="c" :value="c">{{ c }}</option>
            </select>
          </div>

          <div class="button-wrapper">
            <button type="submit" class="btn-connexion">Guardar</button>
          </div>
        </div>
        
      </form>
    </div>

    <!-- Sección Listado Integrada -->
    <div class="listado-section">
      <h3>Listado de Instituciones</h3>
      
      <div class="table-card">
        <div class="table-header">
          <span class="th-red">Nombre Institución</span>
          <span class="th-red">Nombre Gestor</span>
          <span class="th-red">Correo Electrónico</span>
          <span class="th-red">País</span>
          <span class="th-red">Comuna</span>
          <span class="th-green">Actualizar/Eliminar</span>
        </div>

        <div v-if="instituciones.length === 0" class="empty-list">
          No hay instituciones registradas aún.
        </div>

        <div v-for="(item, index) in instituciones" :key="index" class="table-row">
          <span>{{ item.nombreInstitucion }}</span>
          <span>{{ item.nombreGestor || '-' }}</span>
          <span>{{ item.correoGestor || '-' }}</span>
          <span>{{ item.pais || '-' }}</span>
          <span>{{ item.comuna || '-' }}</span>
          <span class="action-buttons">
            <button @click="eliminarInstitucion(index)" class="btn-eliminarinstitucion">Eliminar</button>
          </span>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
.institucion-container {
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #e6e6e6;
  padding: 2.5rem;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}

.form-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  width: 100%;
}

/* Ancho ampliado para llenar mejor la página */
.form-grid-2-columns {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
}

.listado-section {
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  flex: 1;
}

.column-left,
.column-right {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.input-group {
  display: flex;
  flex-direction: column;
}

.input-group label {
  font-size: 0.9rem;
  color: #060606;
  margin-bottom: 0.3rem;
}

.input-group input {
  padding: 0.6rem;
  border: 1px solid #ccc;
  background-color: #ffffff;
  border-radius: 2px;
  font-size: 0.95rem;
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
  border: none !important;
  border-radius: 2px;
}

.input-search-green::placeholder {
  color: rgba(4, 4, 4, 0.8);
}

.dropdown-arrow {
  position: absolute;
  right: 10px;
  color: #ffffff;
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

.select-green {
  padding: 0.6rem;
  background-color: #f6f7f6;
  color: #060606;
  font-weight: bold;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  text-align: left;
}

.select-green option {
  background-color: #ffffff;
  color: #333;
}

.button-wrapper {
  margin-top: auto;
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

.listado-section h3 {
  color: #7f8c8d;
  font-size: 1.1rem;
  margin-bottom: 0.8rem;
}

.table-card {
  background-color: #ffffff;
  border-radius: 4px;
  padding: 1.5rem;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
  overflow-x: auto;
}

.table-header {
  display: grid;
  grid-template-columns: 1.5fr 1.2fr 1.5fr 1fr 1fr 1.2fr;
  gap: 1rem;
  margin-bottom: 1rem;
  align-items: center;
}

.th-red {
  background-color: #195058;
  color: #ffffff;
  padding: 0.6rem 1rem;
  font-weight: bold;
  text-align: center;
  border-radius: 2px;
  font-size: 0.9rem;
}

.th-green {
  background-color: #aed581;
  color: #2e7d32;
  padding: 0.6rem 1rem;
  font-weight: bold;
  text-align: center;
  border-radius: 2px;
  font-size: 0.9rem;
}

.table-row {
  display: grid;
  grid-template-columns: 1.5fr 1.2fr 1.5fr 1fr 1fr 1.2fr;
  gap: 1rem;
  padding: 0.75rem 0.5rem;
  border-bottom: 1px solid #f0f0f0;
  align-items: center;
  font-size: 0.9rem;
  color: #333;
  text-align: center;
}

.empty-list {
  text-align: center;
  color: #888;
  padding: 2rem;
}

.btn-eliminarinstitucion {
  background-color: #ef4444;
  color: #ffffff;
  border: none;
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  cursor: pointer;
  color: #fff;
  font-size: 0.85 rem;
}

.btn-eliminarinstitucion:hover {
  background-color: #dc2626;
}
</style>