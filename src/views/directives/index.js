import sign_install from "./Sign"
import addfollow_install from "./AddFollow"
import tooltip_install from "./tooltip"
import toggle_install from "./Toggle"
import scrolltop_install from "./ScrollTop"
export default {
  install(Vue) {
    sign_install(Vue);
    addfollow_install(Vue);
    tooltip_install(Vue);
    toggle_install(Vue);
    scrolltop_install(Vue);
  }
}
