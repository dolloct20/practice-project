import {createRouter, createWebHistory} from 'vue-router';
import LoginPage from '../components/LoginPage.vue';
import Dashboard from '../components/Dashboard.vue';
import Note from '../components/Note.vue'
// import ProgressNote from '../components/ProgressNote.vue'
import AdmissionNote from '../components/AdmissionNote.vue'
// import DischargeNote from '../components/DischargeNote.vue'
import MainLayout from  '../layouts/MainLayout.vue'


const routes = [
  { 
    path: '/login',
    component: LoginPage
  },
  { 
    path: '/',
    component: MainLayout,
    children: [
      {
      path: '/dashboard',
      component: Dashboard,
      },
      {
      path: '/note',
      component: Note,
        children: [
          {
            path: '/note/admission/:fee_no',
            component: AdmissionNote,
            props:true
          }
        ]
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;