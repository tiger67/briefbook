import Vue from "vue";
import vfuns from "./vertifyFun"
var errheight = 42;
var data = {
  els: []
};

function destory() {
  data.els.splice(0, data.els.length);
}

function initerror() {
  return {
    filters: [],
    value: "",
    name: "",
    msg: "",
    pos: {
      left: 0,
      top: 0
    },
    isvertify: true,
    show: false
  }
}

function setPos(error, el) {
  var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
  var pos = error.pos;
  var rect = el.getBoundingClientRect();
  pos.left = rect.right;
  pos.top = scrollTop + rect.top + (rect.height - errheight) / 2;
}

var isverfitying = false;

Vue.directive("error", {
  inserted: function(el, binding) {
    //console.dir(el);
    var error = initerror();
    var filters = binding.value.split(",");
    var p = el.parentNode;
    data.els.push(el);
    if (/^:/.test(filters[filters.length - 1])) {
      error.name = (filters.splice(filters.length - 1, 1)[0]).slice(1);
    }
    error.filters = filters;
    el.error = error;
    el.addEventListener("blur", async() => {
      if (isverfitying) {
        return;
      }
      var len = filters.length;
      error.value = el.value;
      //console.log(error.value);
      for (var i = 0; i < len; i++) {
        var fun = vfuns[filters[i]];
        if (fun) {
          var result = await fun.call(error);
          if (!result) {
            if (error.pos.top == 0) {
              setPos(error, p);
            }
            //console.log(error);
            console.log(error.pos);
            error.show = true;
            break;
          }
        }
      }
    })
    el.addEventListener("focus", () => {
      error.show = false;
      error.isvertify = true;
    })
  }
})

Vue.directive("errorSubmit", {
  inserted: function(btn, binding) {
    btn.addEventListener("click", async(e) => {
      if (binding.modifiers.prevent) {
        e.preventDefault();
      }
      isverfitying = true;
      var istrim = binding.modifiers.trim;
      var els = data.els;
      var elen = els.length;
      for (var j = 0; j < elen; j++) {
        var el = els[j];
        var error = el.error;
        var filters = error.filters;
        var len = filters.length;
        error.value = istrim ? el.value.trim() : el.value;
        for (var i = 0; i < len; i++) {
          var fun = vfuns[filters[i]];
          if (fun) {
            var result = await fun.call(error);
            if (!result) {
              if (error.pos.top == 0) {
                setPos(error, el.parentNode)
              }
              binding.value.isvertify = false;
              error.show = true;
              isverfitying = false;
              return false;
            } else {
              error.show = false;
            }
          }
        }
        isverfitying = false;
      }
      binding.value.submit();
    })
  }
})
export default {
  data,
  destory
}
