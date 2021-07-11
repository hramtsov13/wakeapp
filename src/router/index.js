import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    meta: { layout: 'pageLayout' },
    component: () => import('../views/Main.vue'),
  },
  {
    path: '/menu-item-page/:id',
    name: 'menu-item-page',
    meta: { layout: 'pageLayout' },
    component: () => import('../views/Item-page.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
