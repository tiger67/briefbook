<template>
  <pop-mask v-show="c.showPopSign">
    <div class="sign-panel">
      <header>
        <a href="#" :class="{'router-link-exact-active':!issignup}">登录</a>
        <b>·</b>
        <a href="#" @click='goSignup' :class="{'router-link-exact-active':issignup}">注册</a>
        <!-- <router-link to="/sign_up">注册</router-link> -->
      </header>
      <sign-in v-show="!issignup" />
      <sign-up v-show="issignup" />
    </div>
  </pop-mask>
</template>
<script>
import SignIn from "./sign-in"
import SignUp from "./sign-up"
import c from "data"
//console.log(c);
export default {
  props: {
    issignup: Boolean,
  },
  data() {
    return {
      c
    }
  },
  methods: {
    goSignup() {
      this.c.showPopSign = false;
      this.$router.push("/sign_up");
    }
  },
  components: {
    SignIn,
    SignUp
  }
}

</script>
