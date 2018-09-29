import Vue from "vue"
Vue.directive("mymodel", {
  inserted: function(el, binding) {
    el.addEventListener("keyup", () => {
      console.log('running -----');
      console.log(binding);

      binding.value.info = el.value;
    })
  }
})
