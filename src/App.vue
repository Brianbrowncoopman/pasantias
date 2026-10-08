<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header/Header.vue';
import Footer from './components/Footer/Footer.vue';
</script>

<template>
  <div id="app-layout">
    <Header />
      <!-- Header superior a pantalla completa -->
      <header class="app-header">
        <nav class="nav-links">
          <!-- <RouterLink to="/">Home</RouterLink> -->
          <RouterLink to="/login">Login</RouterLink>
          <RouterLink to="/vistaAdministrador">Vista Administrador</RouterLink>
          <RouterLink to="/ingresoSolicitud">Ingreso Solicitud</RouterLink>
          <RouterLink to="/ingresoModificacionServicio">Ingreso Modificación Servicio</RouterLink>
          <RouterLink to="/ingresoModificacionInstitucion">Ingreso Modificación Institución</RouterLink>  
          <RouterLink to="/ingresoModificadorGestor">Ingreso Modificación Gestor</RouterLink>
          <RouterLink to="/historicoPasantiasAutorizadas">Histórico Pasantías Autorizadas</RouterLink>
          <RouterLink to="/vistaGestorQr">Vista Gestor QR</RouterLink>  
          <RouterLink to="/vistaJefaturasSecretarias">Vista Jefaturas Secretarias</RouterLink>
        </nav>
      </header>

    <!-- Contenido dinámico a ancho completo -->
    <main class="app-content">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<style>
/* Reset global para asegurar pantalla completa real */
body, html {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

#app {
  display: block !important;
  max-width: none !important;
  width: 100% !important;
  padding: 0 !important;
  margin: 0 !important;
}
</style>

<style scoped>
#app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
}

/* Header adaptado a ancho completo con un padding cómodo */
.app-header {
  width: 100%;
  background-color: #ffffff;
  border-bottom: 1px solid #e5e7eb;
  padding: 0.75rem 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 1000;
  box-sizing: border-box;
}

/* Menú distribuido de forma fluida cubriendo todo el ancho disponible */
.nav-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start; /* Puedes cambiar a 'center' si prefieres que se centren */
  align-items: center;
  gap: 0.4rem 1rem;
  width: 100%;
}

.nav-links a {
  text-decoration: none;
  color: #4b5563;
  font-size: 0.85rem;
  padding: 0.2rem 0.5rem;
  border-left: 1px solid #d1d5db;
  transition: color 0.2s;
  white-space: nowrap; /* Evita que el texto de los links se parta a mitad de palabra */
}

.nav-links a:first-of-type {
  border-left: none;
}

.nav-links a:hover {
  color: #1f2937;
}

.nav-links a.router-link-exact-active {
  color: #0d9488;
  font-weight: 600;
}

/* Contenido principal expandido a todo el ancho (con un padding interno sutil para que el texto o formularios nopeguen exactamente contra el borde de la pantalla) */
.app-content {
  width: 100%;
  flex: 1;
  padding: 1.5rem 2rem;
  background-color: #f9fafb;
  box-sizing: border-box;
}
</style>