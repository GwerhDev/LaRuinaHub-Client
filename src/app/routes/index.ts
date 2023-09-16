import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router';
import LandingPage from '../pages/LandingPage.vue';
import LoginPage from '../pages/LoginPage.vue';
import RegisterPage from '../pages/RegisterPage.vue';
import AccountPage from '../pages/AccountPage.vue';
import OAuthPage from '../pages/OAuthPage.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/register',
    name: 'RegisterPage',
    component: RegisterPage
  },
  {
    path: '/account/settings/:token',
    name: 'AccountPage',
    component: AccountPage
  },
  {
    path: '/oauth/chooseaccount/:redirect_uri',
    name: 'OAuth',
    component: OAuthPage
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;