<template>
  <div class="switch-comp">
    <ul class='switch-trigger-menu'>
      <li v-for="(item,index) in ['最新收录','最新评论','热门']" :key="index">
        <a @click="trigger(index)" href="javascript:void(0);" :class='{"active":active==index}'>
          <i class='iconfont ic-articles' v-if="index==0"></i>
          <i class='iconfont ic-latestcomments' v-if="index==1"></i>
          <i class='iconfont ic-hot' v-if="index==2"></i>
          {{item}}
        </a>
      </li>
    </ul>
    <div class="switch-content">
      <component v-bind:is="comp"></component>
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
export default {
  data() {
    return {
      active: 0,
      datalists: [],
      comp: "page1"
    }
  },
  methods: {
    trigger(a) {
      this.active = a;
      this.comp = `page${a+1}`
    }
  },
  components: {
    'page1': Collection,
    'page2': Comments,
    'page3': Hot
  }
}

</script>
