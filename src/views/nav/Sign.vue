<template>
  <div class="nav-user-wrap">
    <span class="nav-user" v-if="c.isSignIned">
        <router-link class="user-logo-wrap" to="/404">
          <img :src="c.u.avatar" alt="用户标识">
        </router-link>
        <user-sub-nav class="user-sub-nav" />
        </span>
    <span v-if="!c.isSignIned && $route.name=='home'">
        <router-link  class="btn nav-sign-up-btn" to="/sign_up">
         注册
        </router-link>
         <router-link  to="/sign_in" class="btn nav-sign-in-btn">
         登录
        </router-link>
        </span>
    <span v-if="!c.isSignIned && $route.name!='home'">
        <a href="javascript:void(0);" class="btn nav-sign-up-btn" >注册</a>
        <a href="javascript:void(0);" class="btn nav-sign-in-btn" v-signin>登录</a>
        </span>
    <router-link to="/404" class="style-mode-btn">
      <i class="iconfont ic-navigation-mode"></i>
    </router-link>
  </div>
</template>
<style lang="scss">
.nav-user-wrap {
    display: inline-block;
}

.nav-user {
    position: relative;
    float: right;
    height: 100%;
    &:hover {
        background-color: #f5f5f5;
        .user-sub-nav {
            display: block;
        }
    }

    .user-sub-nav {
        top: 100%;
        display: none;
    }
    .user-logo-wrap {
        position: relative;
        width: 40px;
        height: 40px;
        margin: 8px 28px 8px 20px;
        box-sizing: content-box;
        display: inline-block;
        &>img {
            width: 100%;
            height: 100%;
            display: block;
            border: 1px solid #ddd;
            border-radius: 50%;
        }
        &:after {
            content: "";
            position: absolute;
            top: 18px;
            right: -14px;
            border-left: 5px solid transparent;
            border-right: 5px solid transparent;
            border-top: 6px solid #999;
        }
    }
}

</style>
<script>
import c from "data";
import UserSubNav from "./UserSubNav"
export default {
  data() {
    return {
      issignup: false,
      c
    }
  },
  components: {
    UserSubNav
  }
}

</script>
