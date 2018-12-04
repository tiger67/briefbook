<template>
  <div class="sign-form sign-up">
    <form>
      <div class="input-box">
        <input type="text" placeholder="你的昵称" v-error="'empty,nickname,:昵称'" v-model="nickname">
        <input type="text" name="name" hidden>
        <i class="iconfont ic-user"></i>
      </div>
      <div class="input-box">
        <input type="text" placeholder="手机号" v-error="'empty,mobile,:手机号'" v-model="telephone">
        <input type="text" name="name" hidden>
        <i class="iconfont ic-phonenumber"></i>
      </div>
      <div class="input-box">
        <input type="password" placeholder="设置密码" v-error="'empty,:密码'" v-model="password">
        <i class="iconfont ic-password"></i>
      </div>
      <div class="submit-box">
        <button v-error-submit.prevent.trim="{submit,isvertify:isvertify}">
          <loading v-show="issubmiting" />注册
        </button>
      </div>
      <div class="msg-box">
        点击 “注册” 即表示您同意并愿意遵守简书
        <br/>
        <router-link to="/">用户协议</router-link> 和
        <router-link to="/">隐私政策 </router-link>。
      </div>
    </form>
    <form-footer>
      <h5 class="sign-hr"><span>社交帐号直接注册</span></h5>
    </form-footer>
    <error />
    <vertify-img ref="vertifyImg" />
  </div>
</template>
<style lang="scss">
.sign-up {
    .msg-box {
        margin: 10px 0;
        padding: 0;
        text-align: center;
        font-size: 12px;
        line-height: 20px;
        color: #969696;
        a {
            color: #3194d0;
        }
    }
}

</style>
<script>
import FormFooter from "./Footer"
import Error from "../common/error"
import Loading from "../common/Loading"
import VertifyImg from "../common/vertify-img/Index"
import c from "data"
export default {
  data() {
    return {
      isvertify: false,
      issubmiting: false,
      issign: true,
      nickname: "karry",
      password: "123456",
      telephone: "15813390656"
    }
  },
  components: {
    FormFooter,
    Error,
    Loading,
    VertifyImg
  },
  methods: {
    togglesign: function() {
      this.issign = !this.issign;
    },
    submit: function() {
      this.issubmiting = true;
      setTimeout(() => {
        var vimg = this.$refs.vertifyImg.open = true;
        /* this.issubmiting = false;
         c.isSignIned = true;
         this.$router.push('/');*/
      }, 1000)
    }
  }
}

</script>
