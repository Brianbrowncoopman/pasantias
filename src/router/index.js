import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue'),
    },
    {
      path: '/vistaAdministrador',
      name: 'vistaAdministrador',
      component: () => import('../views/VistaAdministrador.vue'),
    },
    {
      path: '/ingresoSolicitud',
      name: 'ingresoSolicitud',
      component: () => import('../views/IngresoSolicitud.vue'),
    },
    { 
      path: '/ingresoModificacionServicio',
      name: 'ingresoModificacionServicio',
      component: () => import('../views/IngresoModificacionServicio.vue'),
    },
    {
      path: '/ingresoModificacionInstitucion',
      name: 'ingresoModificacionInstitucion',
      component: () => import('../views/IngresoModificacionInstitucion.vue'),
    },
    {
      path: '/ingresoModificadorGestor',
      name: 'ingresoModificadorGestor',
      component: () => import('../views/IngresoModificadorGestor.vue'),     
    },
    {
      path: '/historicoPasantiasAutorizadas',
      name: 'historicoPasantiasAutorizadas',
      component: () => import('../views/HistoricoPasantiasAutorizadas.vue'),  
    },
    {
      path: '/vistaGestorQr',
      name: 'vistaGestorQr',
      component: () => import('../views/VistaGestorQr.vue'),
    },
    {
      path: '/vistaJefaturasSecretarias',
      name: 'vistaJefaturasSecretarias',
      component: () => import('../views/VistaJefaturasSecretarias.vue'),
    }

  ],
})

export default router
