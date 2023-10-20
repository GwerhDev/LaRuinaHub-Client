import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router';
import AuthPage from '../pages/AuthPage.vue';
import LoginPage from '../pages/LoginPage.vue';
import OAuthPage from '../pages/OAuthPage.vue';
import LandingPage from '../pages/LandingPage.vue';
import AccountPage from '../pages/AccountPage.vue';
import RegisterPage from '../pages/RegisterPage.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage
  },
  {
    path: '/auth/:token',
    name: 'AuthPage',
    component: AuthPage
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