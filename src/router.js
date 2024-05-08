import {createWebHistory, createRouter} from 'vue-router';
import Calendar from './mainComponents/Calendar.vue';
import Login from './components/mainContent/Login.vue';
import Register from './components/mainContent/Register.vue';
import Options from './mainComponents/Options.vue';
import PasswordRecovery from './mainComponents/PasswordRecovery.vue'
import ChangePassword from "./mainComponents/ChangePassword.vue";

const routes = [
  {path: '/', component: Calendar},
  {path: '/login', component: Login},
  {path: '/register', component: Register},
  {path: '/options', component: Options},
  {path: '/passwordRecovery', component: PasswordRecovery},
  {path: '/changePassword', component: ChangePassword}
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach(async (to, from, next) => {
  try {
    if (to.path === '/changePassword') {
      console.log('checkTokenRecovery');
      const response = await fetch('http://localhost:3000/checkRecoveryToken', {
        method: 'POST',
        credentials: 'include',
        sameSite: 'strict',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'http://localhost:5173',
        },
        body: JSON.stringify({token: to.query.token}),
      });
      console.log('response :', response);
      if (!response.ok) {
        next('/login');
      } else {
        next();
      }
    }else{
      if (to.path !== '/login' && to.path !== '/register' && to.path !== '/passwordRecovery' && to.path !== '/changePassword') { //dev /changePassword is useless
        const response = await fetch('http://localhost:3000/userData', {
          method: 'POST',
          credentials: 'include',
          sameSite: 'strict',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:5173',
          },
        });

        if (!response.ok) {
          next('/login');
        } else {
          next();
        }
      } else {
        next();
      }
    }
  } catch (err) {
    console.log(err);
    next('/login');
  }
});


export default router;
