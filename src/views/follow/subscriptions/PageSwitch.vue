<template>
  <div class="switch-comp">
    <ul class='switch-trigger-menu'>
      <li v-for="(p,index) in pagelists" :key="index">
        <a @click="trigger(index)" href="javascript:void(0);" :class='{"active":active==index}'>
          <i :class="p.icon"></i>
          {{p.name}}
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
const pageData = [
  { name: '最新收录', icon: 'iconfont ic-articles', component: Collection },
  { name: '最新评论', icon: 'iconfont ic-latestcomments', component: Comments },
  { name: '热门', icon: 'iconfont ic-hot', component: Hot }
];
const components = {};
pageData.forEach((p, i) => {
  components['page' + i] = p.component
})
export default {
  props: {
    pData: Array,
  },
  beforeCreate() {
    //console.log(this);
  },
  data() {
    console.log(arguments);
    return {
      active: 0,
      pagelists: [],
      comp: "page1"
    }
  },
  methods: {
    trigger(a) {
      this.active = a;
      this.comp = `page${a}`
    }
  },
  created() {
    this.pagelists = pageData.map((p) => {
      return { name: p.name, icon: p.icon };
    })
  },
  components: components
}

</script>
