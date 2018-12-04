import Vue from 'vue'
import Collection from "../Collection"
import Comments from "../Comments"
import Hot from "../Hot"
var pageComponets = [Collection, Comments, Hot]
Vue.component("my-switch", {
  name: 'my-switch',
  props: {
    active: Number
  },
  render(c) {
    var h = this.$parent.$createElement;
    return h(pageComponets[this.$props.active]);
  }
})
