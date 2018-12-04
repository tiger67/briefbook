import Home from '@/views/Home'
const News = resolve => require(['@/views/news'], resolve);
const Default = resolve => require(['@/views/news/Default'], resolve);

export default [{
  path: '',
  component: Home,
  children: [{
    path: 'news',
    component: News,
    children: [{
      path: '',
      name: "default",
      component: Default,
    }]
  }]
}];
