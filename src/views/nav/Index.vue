<template>
  <div class="nav nav-fixed nav-wrap">
    <div class="nav-layout">
      <router-link class="logo" to="/"><img src="../../assets/nav-logo.png"></router-link>
      <router-link class="btn write-btn" to="/writer">
        <i class="iconfont ic-write"></i>写文章
      </router-link>
      <router-link to="/404" class="style-mode-btn">
        <i class="iconfont ic-navigation-mode"></i>
      </router-link>
      <div class="container">
        <div class="nav-menu-collapse">
          <ul class="nav">
            <li class="nav-tab nav">
              <router-link to="/">
                <span class="menu-text">发现</span>
              </router-link>
            </li>
            <li class="nav-tab">
              <router-link to="/follow">
                <span class="menu-text">关注</span>
              </router-link>
            </li>
            <li class="nav-tab notification">
              <router-link to="/news" class="notification-btn">
                <span class="menu-text">消息</span>
                <span class="badge">1</span>
              </router-link>
              <sub-nav class='sub-nav'></sub-nav>
            </li>
            <li class="nav-tab search">
              <div class="nav-search-wrap">
                <input id="nav-search-input" type="text">
                <router-link to="/"><i class="iconfont ic-search"></i></router-link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
#nav-search-input {
  width: 200px;
  line-height: 16px;
  outline: none;
  border: none;
}

.nav-search-wrap>.iconfont {}


.nav-search-wrap {
  border-radius: 30px;
  border: 1px solid red;
  margin: 11px;
  padding: 5px 10px;
}

</style>
<script>
import SubNav from "./SubNav";
export default {
  name: 'Nav',
  data() {
    return {}
  },
  components: {
    SubNav
  },
  methods: {

  }
}

</script>
<style>
.sub-nav {
  display: none;
  z-index: 3;
  background-color: #fff;
}

.nav-tab:hover .sub-nav {
  display: block
}

.nav-fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  border-style: solid;
  border-width: 0 0 1px;
  border-color: #e7e7e7;
  background: #fff;
  z-index: 2;
}

.nav {
  height: 56px;
}

.nav-wrap {
  font-size: 17px;
  margin-bottom: 20px;
}

.nav .style-mode-btn {
  float: right;
  line-height: 20px;
  padding: 17px 10px 17px 15px;
  font-size: 24px;
  color: #969696;
}

.nav .write-btn {
  float: right;
  width: 100px;
  height: 40px;
  line-height: 24px;
  margin: 8px 15px 0;
  border-radius: 20px;
  font-size: 15px;
  color: #fff;
  background-color: #ea6f5a;
}

.write-btn .ic-write {
  margin-right: 3px;
  font-size: 19px;
  vertical-align: middle;
}

.badge {
  padding: 3px 6px;
  font-size: 13px!important;
  background-color: #ea6f5a;
}

.nav-list {
  margin-left: -15px;
}

.nav-layout {
  min-width: 768px;
  max-width: 1440px;
  margin: 0 auto;
  height: 100%;
}

.nav-menu-collapse {
  margin-left: -15px;
}

.logo img {
  height: 100%;
}

.nav-tab {
  float: left;
  margin-right: 10px;
  position: relative;
}

.nav-tab>a {
  display: block;
  height: 56px;
  line-height: 26px;
  padding: 15px;
  text-decoration: none;
  position: relative;
}

.nav-tab>.router-link-exact-active {
  color: #ea6f5a;
}

.nav>.nav-tab>a:not(.router-link-exact-active):hover {
  background-color: #f5f5f5
}

.nav-layout>.logo {
  float: left;
  height: 56px;
  padding: 0;
}

.notification-btn .badge {
  position: absolute;
  top: 10px;
  right: -5px;
  color: #fff!important;
}

</style>
