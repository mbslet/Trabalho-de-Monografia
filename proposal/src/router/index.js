import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import ReusableList from '../views/ReusableList.vue'
import SgPage from '../views/SgPage'
import ColorsPallet from  '../views/ColorsPallet'
import Tipografia from  '../components/Tipografia'
import RegraEscrita from '../components/RegraEscrita'
import ComponentsPage from '../views/ComponentsPage'
import DesignAtomico from '../components/DesignAtomico'
import MaterialDesign from '../components/MaterialDesign'
import PrimeVue from '../components/PrimeVue'
import DesignFuncional from  '../views/DesignFuncional'
import Fundamentos from '../components/Fundamentos'
import Feedback from '../views/Feedback'

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage
  },
  {
    path: '/reusablelist',
    name: 'Reusable List',
    component: ReusableList
  },
  {
    path: '/sgpage',
    name: 'Style Guide Page',
    component: SgPage
  },
  {
    path: '/components-page',
    name: 'Componentes',
    component: ComponentsPage
  },
  {
    path: '/colors-pallet',
    name: 'Paleta de Cores',
    component: ColorsPallet
  },
  {
    path: '/tipography',
    name: 'Tipografia',
    component: Tipografia
  },
  {
    path: '/regras',
    name: 'Regras de Escritas',
    component: RegraEscrita
  },
  {
    path: '/designatomico',
    name: 'Design Atomic',
    component: DesignAtomico
  },
  {
    path: '/material',
    name: 'Material Design',
    component: MaterialDesign
  },
  {
    path: '/primevue',
    name: 'Prime Vue',
    component: PrimeVue
  },
  {
    path: '/funcional',
    name: 'Design Funcional',
    component: DesignFuncional
  },
  {
    path: '/fundamentos',
    name: 'Fundamentos',
    component: Fundamentos
  },
  {
    path: '/feedback',
    name: 'Feedback',
    component: Feedback
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
