import { createRouter, createWebHistory } from 'vue-router';

import ExerciseList from './pages/exercises/ExerciseList.vue';
import FavouritesList from './pages/favourites/FavouritesList.vue';

import NotFound from './pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/exercises' },
    { path: '/exercises', component: ExerciseList },
    {
      path: '/exercises/:id',
      component: null,
      children: [{ path: 'contact', component: null }],
    },
    { path: '/favourites', component: FavouritesList },
    { path: '/:notFound(.*)', component: NotFound },
  ],
});

export default router;
