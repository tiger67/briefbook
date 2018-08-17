import HelloWorld from '@/components/HelloWorld'
import Home from '@/views/Home'
import SignIn from '@/views/SignIn'
import SignUp from '@/views/SignUp'
import Sign from '@/views/Sign'

let routes = [{
  path: '/',
  name: 'Home',
  component: Home
}, {
  path: '/sign_in',
  name: 'SignIn',
  component: Sign,
  children: [{
    path: '',
    component: SignIn
  }]
}, {
  path: '/sign_up',
  name: 'SignUp',
  component: Sign,
  children: [{
    path: '',
    component: SignUp
  }]
}];

export default routes;
