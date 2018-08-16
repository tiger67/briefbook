import HelloWorld from '@/components/HelloWorld'
import Home from '@/views/Home'
import SignIn from '@/views/SignIn'
import SignUp from '@/views/SignUp'

let routes = [{
  path: '/',
  name: 'Home',
  component: Home
}, {
  path: '/signin',
  name: 'SignIn',
  component: SignIn
}, {
  path: '/signup',
  name: 'SignUp',
  component: SignUp
}];

export default routes;
