import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const VIEWS = {
  HOME: () => import('../views/Home'),
  ABOUT: () => import('../views/About'),
  CONTACT: () => import('../views/Contact'),
  POST: () => import('../views/Post'),
};

const LAYOUTS = {
  MAIN: () => import('../layouts/MainLayout'),
  READER: () => import('../layouts/ReaderLayout'),
};

// Vue instance router
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
          component: LAYOUTS.READER,
          children: [
            {
              path: '/',
              name: 'Home',
              component: VIEWS.HOME,
            },
            {
              path: '/about',
              name: 'About',
              component: VIEWS.ABOUT,
            },
          ],
        },
        {
          path: '/posts/:postId',
          name: 'Post',
          props: true,
          component: VIEWS.POST,
        },
        {
          path: '/contacts',
          name: 'Contact',
          component: VIEWS.CONTACT,
        },
      ],
    },
  ],
});

export default router;
