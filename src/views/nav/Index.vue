<template>
  <div class="nav nav-fixed nav-wrap">
    <div class="nav-layout" style="position:relative">
      <nav-right />
      <router-link class="logo" to="/"><img src="@/assets/nav-logo.png"></router-link>
      <div class="w m0a">
        <!--   <div class="nav-menu-collapse"> -->
        <ul class="nav">
          <li class="nav-tab nav">
            <router-link to="/">
              <i class="iconfont ic-navigation-discover menu-icon"></i><span class="menu-text">发现</span>
            </router-link>
          </li>
          <li class="nav-tab">
            <router-link to="/follow">
              <i class="iconfont ic-navigation-follow menu-icon"></i>
              <span class="menu-text">关注</span>
            </router-link>
          </li>
          <li class="nav-tab notification">
            <router-link to="/news" class="notification-btn">
              <i class="iconfont ic-navigation-notification menu-icon"></i>
              <span class="menu-text">消息</span>
              <span class="badge">2</span>
              <sub-nav class='sub-nav'></sub-nav>
            </router-link>
          </li>
          <li class="nav-tab notification">
          </li>
          <li class="nav-tab ">
            <search-box></search-box>
          </li>
          <li></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import "./anav.css"
import SubNav from "./SubNav";
import Sign from "./Sign"
import SearchBox from "./SearchBox"
import NavRight from "./NavRight"

export default {
  name: 'Nav',
  data() {
    return {

    }
  },
  components: {
    SubNav,
    Sign,
    SearchBox,
    NavRight
  }
}

</script>
