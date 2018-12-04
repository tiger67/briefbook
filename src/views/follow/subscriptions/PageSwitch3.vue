<template>
  <div class="switch-comp">
    <switch-header :active="active" />
    <div class="switch-content">
      <switch-content :active="active" />
    </div>
  </div>
</template>
<style lang="scss">
.switch-comp {
    .switch-trigger-menu {
        padding: 40px 0px;
        border-bottom: 1px solid #f0f0f0;
        li {
            float: left;
            a {
                padding: 20px 20px;
                font-size: 15px;
                font-weight: 700;
                color: #969696;
                border-bottom: 2px solid transparent;
                letter-spacing: 0px;
                &:hover,
                &.active {
                    border-bottom-color: #646464;
                    color: #646464;
                }
            }
        }
    }
    .switch-content {
        padding-top: 30px;
    }
}

</style>
<script>
import Collection from "./Collection"
import Comments from "./Comments"
import Hot from "./Hot"
const pageData = [
  { name: '最新收录', icon: 'iconfont ic-articles', component: Collection },
  { name: '最新评论', icon: 'iconfont ic-latestcomments', component: Comments },
  { name: '热门', icon: 'iconfont ic-hot', component: Hot }
];
export default {
  data() {
    return {
      active: 0,
      datalists: [],
    }
  },
  methods: {
    trigger(a) {
      this.active = +a;
    }
  },
  mounted() {},
  components: {
    'switch-header': {
      props: {
        active: Number
      },
      render(c) {
        var activeIndex = this.$props.active;
        var trigger = this.$parent.trigger;
        return c('ul', { 'class': "switch-trigger-menu" }, pageData.map((p, index) => {
          var adata = {
            'class': activeIndex == index ? "active" : "",
            'href': "javascript:void(0)",
            on: {
              click: function() {
                trigger(index)
              }
            }
          }

          function childfn() {
            return [c('i', { 'class': p.icon }), `     ${p.name}`]
          }
          return c('li', { key: index }, [c('a', adata, childfn())]);
        }));
      }
    },
    'switch-content': {
      props: {
        active: Number
      },
      render() {
        var h = this.$parent.$createElement;
        var activeIndex = this.$props.active;
        return h(pageData[activeIndex].component);
      }
    }
  }
}

</script>
