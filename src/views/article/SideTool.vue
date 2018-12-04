<template>
  <div class="side-tool">
    <ul>
      <li v-tooltip="{pos:'left',content:'回到顶部'}" v-scrolltop>
        <a href="javascript:void(0)">
          <i class="iconfont ic-backtop"></i>
        </a>
      </li>
      <li v-tooltip="{pos:'left',content:'将文章加入专题'}">
        <a href="javascript:void(0)">
          <i class="iconfont ic-addcollectionmodal"></i>
         </a>
      </li>
      <li v-tooltip="{pos:'left',content:'收藏文章'}">
        <a href="javascript:void(0)">
          <i class="iconfont ic-mark"></i>
         </a>
      </li>
      <li v-tooltip="{pos:'left',content:'分享文章'}">
        <a href="javascript:void(0)">
          <i class="iconfont ic-share"></i>
         </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  directives: {

  },
  methods: {
    scrollTop() {

    }
  }
}

</script>
<style lang="scss">
.side-tool {
    position: fixed;
    bottom: 40px;
    right: 40px;
    z-index: 50;
    li {
        border: 1px solid #dcdcdc;
        border-bottom: none;
        background-color: #fff;
        line-height: 20px;
        transition: .1s ease-in;
        &:last-child {
            border-bottom: 1px solid #dcdcdc;
        }
        &:hover {
            background-color: hsla(0, 0%, 71%, .1);
        }
        a {
            cursor: pointer;
            width: 50px;
            height: 50px;
            text-align: center;
            display: block;
            i {
                padding-top: 16px;
                font-size: 20px;
                display: block;
            }
        }
    }
}

</style>
