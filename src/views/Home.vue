<template>
  <div class="main" id="app">
    <local-nav></local-nav>
    <div class="w m0a">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
    <transition name="fade" mode="out-in">
      <pop-sign>
      </pop-sign>
    </transition>
  </div>
</template>
<style lang="scss">
.main {
    padding-top: 56px;
}

@import "@/styles/public.scss";
@import "@/views/sign/asign-page.scss";
@import "@/views/sign/asign-form.scss";

</style>
<script>
import '@/styles/fonts.css'
import '@/styles/common.css'
import Nav from "./nav/Index.vue"
import cdata from '../data'
import PopSign from "./sign/PopSign"
export default {
  data() {
    return {
      cdata: cdata,
    }
  },
  components: {
    localNav: Nav,
    PopSign
  }
}

</script>
