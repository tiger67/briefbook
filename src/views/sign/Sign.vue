<template>
  <div class="sign-pg">
    <router-link to="/" class="logo"><img src="../../assets/logo.png"></router-link>
    <section class="sign-panel">
      <header>
        <router-link to="/sign_in">登录</router-link>
        <router-link to="/sign_up">注册</router-link>
      </header>
      <router-view></router-view>
    </section>
  </div>
</template>
<script>
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
    submit: function() {

    }
  }
}

</script>
