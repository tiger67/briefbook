import HelloWorld from '@/components/HelloWorld'
import Login from '@/views/login/Login'

let routes = [{
  path: '/',
  name: 'HelloWorld',
  component: HelloWorld
}, {
  path: '/login',
  name: 'Login',
  component: Login
}];

export default routes;
