const HelloWorld = resolve => require(['@/views/components/HelloWorld'], resolve)
const Home = resolve => require(['@/views/Home'], resolve);
const SignIn = resolve => require(['@/views/sign/SignIn'], resolve);
const SignUp = resolve => require(['@/views/sign/SignUp'], resolve);
const Writer = resolve => require(['@/views/writer'], resolve);
const Index = resolve => require(['@/views/index'], resolve);
const Sign = resolve => require(['@/views/sign/Sign'], resolve);
let routes = [{
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
    path: '/writer',
    name: 'Writer',
    component: Writer
  }
];

export default routes;
