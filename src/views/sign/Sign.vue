<template>
  <div class="sign-pg">
    <router-link to="/" class="logo"><img src="../../assets/logo.png"></router-link>
    <div class="sign-panel">
      <header>
        <router-link to="/sign_in">登录</router-link>
        <b>·</b>
        <router-link to="/sign_up">注册</router-link>
      </header>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import "./asign-page.css";
import "./asign-form.css";
export default {
  data() {
    return {
      issign: true,
      nickname: "",
      password: "",
      telephone: ''
    }
  },
  methods: {
    togglesign: function() {
      this.issign = !this.issign;
    },
    submit: function() {}
  }
}

</script>
