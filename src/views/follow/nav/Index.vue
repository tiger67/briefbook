<template>
  <div class='follow-nav'>
    <div class="flw-head">
      <a href="javascript:void(0)" class='dropdwon-btn' v-toggle="{toggleOpen}">
      全部关注<i class="iconfont ic-filter"></i>
      </a>
      <router-link to="/follow" class="add-people" v-once>
        <i class="iconfont ic-addpeople"></i> 添加关注
      </router-link>
      <dropdown-menu :class="{'open':isopen}" />
    </div>
    <ul class="nav-lists" v-once>
      <li v-for="(nav,index) in datalists" :key="index">
        <router-link :to="{path:index==0 ? '/follow/timeline':`/follow/subscriptions/${nav.id}/collection`}">
          <div class="avatar"><img :src="nav.img" alt=""></div>
          <span class="name">{{nav.name}}</span>
          <span class="count">{{nav.count}}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import datalists from "./data"
import DropdownMenu from "./DropdownMenu"
export default {
  data() {
    return {
      datalists,
      isopen: false
    }
  },
  components: {
    DropdownMenu
  },
  methods: {
    toggleOpen(flag) {
      this.isopen = flag;
    }
  }
}

</script>
<style lang="scss">
.follow-nav {
    border: 0px solid red;
    .flw-head {
        .dropdwon-btn {
            margin-left: 15px;
            font-size: 15px;
            i {
                margin-left: 5px;
                color: #c8c8c8;
            }
        }
        .add-people {
            float: right;
            margin: 4px 10px 0 0;
            font-size: 13px;
            color: #333;
            outline: none;
            i {
                margin-right: 4px
            }
        }
    }
    .nav-lists {
        margin-top: 7px;
        list-style: none;
        border-top: 1px solid #f0f0f0;
        a {
            padding: 10px 13px;
            display: block;
            &.router-link-active,
            &:hover {
                background-color: #f0f0f0;
            }
            .count {
                float: right;
                margin-top: 10px;
                font-size: 14px;
                color: #969696;
            }
            .avatar {
                width: 40px;
                height: 40px;
                margin-right: 4px;
                display: inline-block;
                vertical-align: middle;
                img {
                    width: 100%;
                    height: 100%;
                    border-radius: 10%;
                }
            }
            .name {
                vertical-align: middle;
                display: inline-block;
            }
        }
    }
}

</style>
