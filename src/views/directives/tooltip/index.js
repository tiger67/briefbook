/*import Vue from "vue"
 */
import Tooltip from './tooltip'
import "./tooltip.css"

function enterHandlerCreater(el, binding) {
  var value = binding.value;

  function enterHandler(e) {
    var content = '';
    content = typeof value == 'object' ? value.content : value;
    var pos = value && value.pos || 'right';
    if (!this.tooltip) {
      Tooltip.create(this, { pos, content });
    }
    this.tooltip.show();
  }
  el.enterHandler = enterHandler
  return enterHandler;
}

function leaveHanlder() {
  this.tooltip && this.tooltip.hide();
}

function install(Vue) {
  Vue.directive("Tooltip", {
    inserted(el, binding) {
      el.addEventListener("mouseenter", enterHandlerCreater(el, binding))
      el.addEventListener("mouseleave", leaveHanlder)
    },
    unbind(el, binding) {
      el.removeEventListener("mouseenter", el.enterHandler)
      el.removeEventListener("mouseleave", leaveHanlder)
      el.tooltip && el.tooltip.destory();
    }
  })
}

export default install
