import {createWebHistory, createRouter} from 'vue-router';
import Calendar from './Calendar.vue';
import Login from './Login.vue';
import Register from './Register.vue';
import store from './store.js';

const routes = [
  {path: '/', component: Calendar},
  {path: '/login', component: Login},
  {path: '/register', component: Register}
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach(async (to, from, next) => {
  const request = await fetch('http://localhost:3000/userData', {
    method:'POST',
    credentials: 'include',
    sameSite: 'strict',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:5173',
    },
  });
  const userData = JSON.stringify(request);
    console.log('USER DATA : ', userData);
  // if(!store.state.auth.username){
  //   const userData = await fetch('http://localhost:3000/userData');
  //   store.commit("")
  // }
  next();
});


export default router;
