import Vue from "vue";
export default Vue.component('anchored-heading', {
  name: "mygloabal-h",
  render: function(createElement) {
    return createElement(
      'h' + this.level, // tag name 标签名称
      this.$slots.default // 子组件中的阵列
    )
  },
  props: {
    level: {
      type: Number,
      required: true
    }
  }
})
