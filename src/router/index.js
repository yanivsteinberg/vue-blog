import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const VIEWS = {
  HOME: () => import('../views/Home'),

};

const LAYOUTS = {
  MAIN: () => import('../layouts/MainLayout'),
};

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: LAYOUTS.MAIN,
      children: [
        {
          path: '/',
          name: 'Home',
          component: VIEWS.HOME,
        },
      ],
    },
  ],
});

export default router;
