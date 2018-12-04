<template>
  <div class="sign-pg">
    <router-link to="/" class="logo"><img src="../../assets/logo.png"></router-link>
    <div class="sign-panel">
      <header v-if="$route.name=='ForgetPassword'">
        <h3 class="fgpwd-title">用手机号重置密码</h3>
      </header>
      <header v-else>
        <router-link to="/sign_in">登录</router-link>
        <b>·</b>
        <router-link to="/sign_up">注册</router-link>
      </header>
      <router-view></router-view>
    </div>
  </div>
</template>
<style lang="scss">
@import "./asign-form.scss";
@import "./asign-page.scss";

</style>
<script>
export default {
  methods: {}
}

</script>
