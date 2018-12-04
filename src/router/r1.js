import Home from '@/views/Home'
const SignIn = resolve => require(['@/views/sign/sign-in'], resolve);
const SignUp = resolve => require(['@/views/sign/sign-up'], resolve);
const ForgetPassword = resolve => require(['@/views/sign/forget-password'], resolve);
const Sign = resolve => require(['@/views/sign/Sign'], resolve);
const Index = resolve => require(['@/views/index'], resolve);
const RecommendWriter = resolve => require(['@/views/recommend-writer'], resolve);
const Article = resolve => require(['@/views/article'], resolve);
const PageCut = resolve => require(['@/views/example'], resolve);
export default [{
  path: '/',
  component: Home,
  children: [{
    path: '',
    name: 'home',
    component: Index
  }, {
    path: 'recommendations',
    name: 'recommendwriter',
    component: RecommendWriter
  }, {
    path: 'article/:id',
    name: 'article',
    component: Article
  }, {
    path: 'pagecut',
    name: 'pagecut',
    component: PageCut

  }]
}, {
  path: '/',
  component: Sign,
  children: [{
    path: 'sign_in',
    name: 'sign_in',
    component: SignIn
  }, {
    path: 'sign_up',
    name: 'signUp',
    component: SignUp
  }, {
    path: 'forget_password',
    name: 'ForgetPassword',
    component: ForgetPassword
  }]
}]
