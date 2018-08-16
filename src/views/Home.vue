<template>
  <div class="main">
    <div class="nav nav-fixed nav-wrap">
      <router-link class="nav-link" to="/signin">登录</router-link>
      <router-link class="nav-link" to="/signup">注册</router-link>
    </div>
    <div class="container"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      islogin: true,
    }
  },
  methods: {
    togglesign: function() {
      this.islogin = !this.islogin;
    }
  }

}

</script>
<style>
.main {
  padding-top: 56px;
}

.nav-link {
  margin-left: 30px;
  font-size: 25px;
}

.container {
  height: 2000px;
}

.nav-wrap {
  text-align: center;
  border-bottom: 1px solid #ddd;
  line-height: 56px;
}

.nav {
  height: 56px;
}

.nav-fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}

</style>
