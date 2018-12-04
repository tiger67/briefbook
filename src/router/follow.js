//subscriptions
import Home from '@/views/Home'
const Follow = resolve => require(['@/views/follow'], resolve);
const Friends = resolve => require(['@/views/follow/friends'], resolve);
const Subscriptions = resolve => require(['@/views/follow/subscriptions'], resolve);

export default [{
  path: '',
  component: Home,
  children: [{
    path: 'follow',
    name: 'follow',
    component: Follow,
    redirect: 'follow/timeline',
    children: [{
      path: 'timeline',
      name: 'timeline',
      component: Friends
    }, {
      path: 'subscriptions/:id/collection',
      name: 'subscriptions',
      component: Subscriptions
    }]
  }]
}];
