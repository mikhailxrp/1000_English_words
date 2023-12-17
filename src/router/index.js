import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '../views/MainPage.vue';
import TrainingPage from '../views/TrainingPage.vue';
import AllWords from '../views/AllWords.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: MainPage },
    { path: '/train', component: TrainingPage },
    {path: '/allWords', component: AllWords}
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
});
