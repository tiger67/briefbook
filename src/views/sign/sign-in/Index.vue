<template>
  <div class="sign-form sign-in">
    <error>
      <form name="errortest">
        <div class="input-box">
          <input type="text" placeholder="手机号/邮箱" v-error="'empty,mobile,:手机号'" v-model="telephone">
          <input type="text" name="name" hidden>
          <i class="iconfont ic-user"></i>
        </div>
        <div class="input-box">
          <input type="password" placeholder="设置密码" v-error="'empty,:密码'" v-model="password">
          <input type="text" name="password" hidden>
          <i class="iconfont ic-password"></i>
        </div>
        <div class="remember">
          <input type="checkbox" name="remember_me" id="remember_me">
          <label for="remember_me">记住我</label>
        </div>
        <a href='#' @click="goForgetPassword" class="problem">忘记密码</a>
        <div class="submit-box">
          <button v-error-submit.prevent.trim="{submit,isvertify}">
            <loading v-show="issubmiting" />登录
          </button>
        </div>
      </form>
      <form-footer>
        <h5 class="sign-hr"><span>社交帐号直接注册</span></h5>
      </form-footer>
    </error>
    <vertify-img ref="vertifyImg" />
  </div>
</template>
<script>
import c from "data";
import FormFooter from "./Footer"
import Error from "../common/error"
import Loading from "../common/Loading"
import VertifyImg from "../common/vertify-img/Index"
import manager from "../common/userManager.js"
import lang from "@/lang"

export default {
  data() {
    return {
      issign: true,
      isvertify: false,
      issubmiting: false,
      password: "123456",
      telephone: '15813390656'
    }
  },
  components: {
    FormFooter,
    Error,
    Loading,
    VertifyImg
  },
  methods: {
    goForgetPassword: function() {
      c.showPopSign = false;
      /* this.$router.replace({ path: 'forget_password' });
       */
      this.$router.push('/forget_password');
    },
    togglesign: function() {
      this.issign = !this.issign;
    },
    submit: function() {
      this.issubmiting = true;
      setTimeout(() => {
        //this.$refs.vertifyImg.open = true;
        this.issubmiting = false;
        var user = {
          avatar: require("@/assets/home/nav/default-user-logo.jpg"),
          name: "liting"
        };
        manager.putUser(user);
        c.isSignIned = true;
        if (this.$route.name == "sign_in") {
          this.$router.push('/');
        } else {
          c.showPopSign = false;
        }
      }, 1000)
    }
  }
}

</script>
<style lang="scss">
.sign-in {
    .remember {
        float: left;
        margin: 15px 0;
    }
    .problem {
        float: right;
        margin: 15px 0;
        font-size: 14px;
        color: #999;
        &:hover {
            color: #222;
        }
    }
    .submit-box {
        input {
            background-color: #3194d0;
        }
    }
}

</style>
