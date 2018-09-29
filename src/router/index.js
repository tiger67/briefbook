import Vue from 'vue'
import Router from 'vue-router'
import NotFound from '@/views/404'
import r1 from "./r1"
import r2 from "./r2"
import editor from "./editor"
import Fonts from "@/views/Fonts"

Vue.use(Router);

let r = r1.concat(r2).concat(editor).concat([{
    path: '/font',
    name: 'Fonts',
    component: Fonts
  },
  {
    path: '/404',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '*',
    hidden: true,
    redirect: { path: '/404' }
  }
]);

export default new Router({
  routes: r,
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    /*console.log(to);
console.log(from);
console.log(savedPosition);
*/
    return { x: 0, y: 0 }
  }
})
