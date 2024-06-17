import {createWebHistory, createRouter} from 'vue-router';

const routes = [
  {path: '/', component: ()=>import('./mainComponents/Calendar.vue')},
  {path: '/loginRegister', component: ()=>import('@/components/loginRegister/Login.vue')},
  {path: '/register', component: ()=>import('./components/loginRegister/Register.vue')},
  {path: '/options', component:  ()=>import('./mainComponents/Options.vue')},
  {path: '/passwordRecovery', component:  ()=>import('./mainComponents/PasswordRecovery.vue')},
  {path: '/changePassword', component: ()=>import('./mainComponents/ChangePassword.vue')},
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
        next('/loginRegister');
      } else {
        next();
      }
    }else{
      if (to.path !== '/loginRegister' && to.path !== '/register' && to.path !== '/passwordRecovery' && to.path !== '/changePassword') { //dev /changePassword is useless
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
          next('/loginRegister');
        } else {
          next();
        }
      } else {
        next();
      }
    }
  } catch (err) {
    console.log(err);
    next('/loginRegister');
  }
});


export default router;
