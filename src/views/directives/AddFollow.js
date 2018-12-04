import data from "data"
export default function(Vue) {
  Vue.directive("addfollow", {
    inserted: (el, binding, vnode, oldVnode) => {
      el.addEventListener("click", (function() {
        var isrunning = false;
        return function(e) {
          /*console.log(binding);
            console.log(vnode);
            console.log(el);*/
          if (isrunning) {
            return
          }
          isrunning = true;
          if (!data.isSignIned) {
            data.showPopSign = true;
          } else {
            var userId = binding.value.w && binding.value.w.userId;
            if (!userId) {
              isrunning = false;
              return;
            }
          }
        }
      }()))
    }
  })
}
