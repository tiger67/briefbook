import Loadmore from './Loadmore'
import PopMask from './PopMask'
export default {
  install(Vue) {
    Vue.component("p-loadmore", Loadmore);
    Vue.component("pop-mask", PopMask);
  }
}
