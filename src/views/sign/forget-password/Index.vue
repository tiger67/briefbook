<template>
  <div class="sign-form forget-password-pg">
    <form>
      <div class="input-box">
        <input type="text" placeholder="手机号" v-model="telephone" v-error="'empty,mobile,mobilefilter,mobile2,:手机号'">
        <input type="text" name="name" hidden>
        <i class="iconfont ic-phonenumber"></i>
        <div class="error-tip"></div>
      </div>
      <div class="input-box">
        <input type="password" name="password" hidden>
        <input type="text" placeholder="短信验证码" v-model="smsCode" v-error="':验证码'">
        <i class="iconfont ic-verify"></i>
        <a class="sign-resend sign-btn" :class="{'active':mobileisvalid && !smsCodesending}" href="javascript:void(0)">{{smsCodesended ? "已发送" :smsCodesending ? "正在发送...":'发送验证码'}}</a>
        <div class="error-tip"></div>
      </div>
      <div class="input-box">
        <input type="password" name="password" hidden>
        <input type="password" placeholder="请输入新密码" v-model="password" v-error="'empty,:新密码'">
        <i class="iconfont ic-password"></i>
        <div class="error-tip"></div>
      </div>
      <div class="input-box last">
        <input type="password" name="password" hidden>
        <input type="password" placeholder="请再输入一遍新密码" v-model="repassword" v-error="'empty,:确认密码'">
        <i class="iconfont ic-password"></i>
        <div class="error-tip"></div>
      </div>
      <div class="submit-box">
        <!--  <input type="submit"  v-error-submit.prevent.trim="{submit}" value="密码重置"> -->
        <button class="sign-btn" v-error-submit.prevent.trim="{submit,isvertify}">
          <loading v-show="issubmiting" />密码重置
        </button>
      </div>
    </form>
    <div class="other-link">
      <router-link to="/sign_in"><i class="iconfont ic-back"></i>返回登录注册</router-link>
    </div>
    <error />
    <vertify-img ref="vertifyImg" />
  </div>
</template>
<style lang="scss">
.sign-form.forget-password-pg {
    .sign-btn {
        background: #3194d0;
        &.sign-resend {
            background: #3194d0;
        }
    }
    .other-link {
        margin-top: 30px;
        a {
            color: #969696;
            &:hover {
                color: #333;
            }
            i {
                margin-right: 10px;
            }
        }
    }
}

</style>
<script>
import data from "data";
import Error from "../common/error"
import Loading from "../common/Loading"
import VertifyImg from "../common/vertify-img/Index"
export default {
  data() {
    return {
      issubmiting: false,
      isvertify: false,
      issign: true,
      nickname: "karry",
      password: "123456",
      telephone: "15813390657",
      repassword: "123456",
      smsCode: "1234",
      sign: data,
      mobileisvalid: false,
      mobileisvertifying: false,
      vertifying: false,
      smsCodesending: false,
      smsCodesended: false,
    }
  },
  components: {
    Error,
    Loading,
    VertifyImg
  },
  methods: {
    submit() {
      this.issubmiting = true;
      setTimeout(() => {
        this.$refs.vertifyImg.open = true
        this.issubmiting = false;
      }, 1000)
    }
  }
}

</script>
