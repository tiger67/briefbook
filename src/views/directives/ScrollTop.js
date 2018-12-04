function localScrollTo({ to, time }) {
  var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame;
  time = requestAnimationFrame ? time : time + 60;
  var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
  var cminut = 1;
  var i = 0;
  if (requestAnimationFrame) {
    var telheight = (to - scrollTop) * cminut / (time);
    var stop = null;

    function step() {
      i = i + cminut;
      window.scrollTo(0, scrollTop + telheight * i);
      if (i >= time) {
        window.cancelAnimationFrame(stop)
      } else {
        stop = requestAnimationFrame(step);
      }
    }
    step();
  } else {
    time = time + 60;
    var telheight = (to - scrollTop) * cminut / (time);
    var interval = window.setInterval(function() {
      i = i + cminut;
      window.scrollTo(0, scrollTop + telheight * i);
      if (i >= time) {
        window.clearInterval(interval);
      }
    }, cminut);
  }

}
var scrollToEvent = function() {
  localScrollTo({ to: 0, time: 20 })
}
const scrollEventCreator = function(el) {
  var prevScrollTop = 0;
  return scrollEventCreator.scrollEvent = (e) => {
    var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
    var intervalScroll = prevScrollTop - scrollTop;
    if (intervalScroll > -150 && intervalScroll < 150) {
      return;
    }
    var availHeight = window.innerHeight;

    if (scrollTop > availHeight) {
      if (el.style.display != "block") {
        el.style.display = "block";
      }
    } else {
      if (el.style.display != "none") {
        el.style.display = "none";
      }
    }
    prevScrollTop = scrollTop;
  }
}
export default function install(Vue) {
  Vue.directive("scrolltop", {
    bind(el, binding, vnode) {
      el.style.display = "none";
      el.addEventListener("click", scrollToEvent)
      document.addEventListener("scroll", scrollEventCreator(el))
    },
    unbind(el) {
      el.removeEventListener("click", scrollToEvent);
      document.removeEventListener("scroll", scrollEventCreator.scrollEvent);
    }
  })
}
