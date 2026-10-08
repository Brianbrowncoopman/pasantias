<script setup>
import { ref } from 'vue'

// Variables reactivas para el formulario
const email = ref('')
const password = ref('')

const handleLogin = () => {
  // Aquí puedes agregar tu lógica de autenticación
  console.log('Iniciando sesión con:', email.value, password.value)
}
</script>

<template>
  <div class="login-container">
    <!-- Título superior principal de la intranet -->
    
    <!-- Tarjeta flotante de inicio de sesión -->
    <div class="login-card">
      <!-- Columna Izquierda (Panel azul oscuro) -->
      <div class="card-left">
        <h2>Bienvenidos</h2>
        <p>
          A continuación, ingrese sus credenciales para acceder a la plataforma.
En caso de dudas sobre su nombre de usuario y/o su contraseña, por favor, contactar a la Unidad de Transformación Digital.
          
        </p>
      </div>

      <!-- Columna Derecha (Formulario) -->
      <div class="card-right">
        <form @submit.prevent="handleLogin">
          <div class="input-group">
            <label for="courriel">Usuario</label>
            <input 
              id="courriel" 
              type="email" 
              v-model="email" 
              required 
            />
          </div>

          <div class="input-group">
            <label for="password">Contraseña</label>
            <input 
              id="password" 
              type="password" 
              v-model="password" 
              required 
            />
          </div>

          <button type="submit" class="btn-connexion">
            Ingresar
          </button>
          <br><br>
          <button type="submit" class="btn-connexion">
            Recuperar Contraseña
          </button>

        </form>
      </div>
      <h2></h2>
    </div>
  </div>
</template>

<style scoped>
/* Contenedor general que cubre toda la pantalla con el fondo urbano y efecto difuminado */
.login-container {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* Imagen de fondo urbana de ejemplo (puedes cambiar la URL por la tuya local) */
  background-image: url('https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=1920&q=80');
  background-size: cover;
  background-position: center;
  overflow: hidden;
  box-sizing: border-box;
}

/* Capa semitransparente sobre la imagen de fondo para darle el efecto de la foto */
.login-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.35);
  backdrop-filter: blur(2px);
  z-index: 1;
}

/* Título principal superior "MON INTRANET" */
.main-title {
  position: relative;
  z-index: 2;
  font-size: 2.2rem;
  font-weight: 300;
  letter-spacing: 3px;
  color: #ffffff;
  margin-bottom: 1.5rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

/* Tarjeta contenedora de dos columnas */
.login-card {
  position: relative;
  z-index: 2;
  display: flex;
  width: 900px;
  max-width: 95%;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
  overflow: hidden;
}

/* Panel Izquierdo (Azul Oscuro) */
.card-left {
  flex: 1;
  background-color: #195058;
  color: #ffffff;
  padding: 3rem 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.card-left h2 {
  font-size: 1.7rem;
  font-weight: 600;
  margin-bottom: 1.2rem;
  line-height: 1.2;
}

.card-left p {
  font-size: 0.9rem;
  line-height: 1.6;
  color: #cbd5e1;
}

/* Panel Derecho (Formulario) */
.card-right {
  flex: 1.1;
  background-color: #f1f5f9;
  padding: 3.5rem 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* Estilos de los inputs */
.input-group {
  margin-bottom: 1.5rem;
}

.input-group label {
  display: block;
  font-size: 0.95rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 0.5rem;
}

.input-group input {
  width: 100%;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border: 1px solid #cbd5e1;
  border-radius: 4px;
  background-color: #ffffff;
  outline: none;
  transition: border-color 0.2s;
  box-sizing: border-box;
}

.input-group input:focus {
  border-color: #10b981;
  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.15);
}

/* Botón de Connexion brillante */
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
  margin-top: 0.5rem;
}

.btn-connexion:hover {
  background-color: #059669;
}

.btn-connexion:active {
  transform: scale(0.98);
}

/* Diseño responsivo para pantallas pequeñas (móviles) */
@media (max-width: 768px) {
  .login-card {
    flex-direction: column;
    width: 95%;
  }
  
  .card-left, .card-right {
    padding: 2rem 1.5rem;
  }

  .main-title {
    font-size: 1.5rem;
  }
}
</style>