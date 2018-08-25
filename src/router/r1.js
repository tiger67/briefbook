import HelloWorld from '@/views/components/HelloWorld'
import Home from '@/views/Home'
import SignIn from '@/views/sign/SignIn'
import SignUp from '@/views/sign/SignUp'
import Sign from '@/views/sign/Sign'

import Index from '@/views/index'
import RecommendWriter from '@/views/recommend-writer'

export default [{
    path: '/',
    component: Home,
    children: [{
      path: '',
      name: 'home',
      component: Index
    }]
  }, {
    path: '/sign_in',
    component: Sign,
    children: [{
      path: '',
      name: 'sign_in',
      component: SignIn
    }]
  }, {
    path: '/sign_up',
    component: Sign,
    children: [{
      path: '',
      name: 'signUp',
      component: SignUp
    }]
  },
  {
    path: '/recommendations',
    component: Home,
    children: [{
      path: '',
      name: 'recommendwriter',
      component: RecommendWriter
    }]
  }
]
