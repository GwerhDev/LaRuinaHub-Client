import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router';
import LandingPage from '../pages/LandingPage.vue';
import RegisterPage from '../pages/RegisterPage.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage
  },
  {
    path: '/register',
    name: 'RegisterPage',
    component: RegisterPage
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;