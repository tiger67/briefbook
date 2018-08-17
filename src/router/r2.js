import Home from '@/views/Home'
import Follow from '@/views/follow'
import News from '@/views/news'

let routes = [{
  path: '/follow',
  component: Home,
  children: [{
    path: '',
    name: 'follow',
    component: Follow
  }]
}, {
  path: '/news',
  component: Home,
  children: [{
    path: '',
    name: 'news',
    component: News
  }]
}];

export default routes;
