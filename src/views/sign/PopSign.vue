<template>
  <pop-mask @close="$emit('close')">
    <div class="sign-panel">
      <header>
        <a href="#" :class="{'router-link-exact-active':!issignup}" @click.prevent="$emit('swichsignup',false)">登录</a>
        <b>·</b>
        <a href="#" :class="{'router-link-exact-active':issignup}" @click.prevent="$emit('swichsignup',true)">注册</a>
      </header>
      <sign-in v-show="!issignup" />
      <sign-up v-show="issignup" />
    </div>
  </pop-mask>
</template>
<script>
import PopMask from "../components/PopMask"
import SignIn from "./SignIn"
import SignUp from "./SignUp"
export default {
  props: {
    issignup: Boolean,
  },
  data() {
    return {
      //issignup: !this.issignup,
    }
  },
  methods: {},
  components: {
    PopMask,
    SignIn,
    SignUp
  }
}

</script>
