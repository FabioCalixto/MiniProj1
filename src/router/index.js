import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/sobre-me',
    name: 'About',
    component: () => import('../views/About.vue'),
  },
  {
    path: '/trabalhos',
    name: 'Works',
    component: () => import('../views/Works.vue'),
  },
  {
    path: '/hobbies',
    name: 'Hobbies',
    component: () => import('../views/Hobbies.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
