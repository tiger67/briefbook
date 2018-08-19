<template>
  <div class="main">
    <local-nav></local-nav>
    <div class="container">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>
<style scoped>
.main {
    padding-top: 56px;
}

.main>.container {
    border: 1px solid red;
    min-height: 1000px;
}

</style>
<script>
import '@/styles/common.css'
import '@/styles/public.css'
import '@/styles/layout.css'
import '@/styles/fonts.css'
import Nav from "./nav/Index.vue"
import cdata from '../data'
export default {
  data() {
    return {
      cdata: cdata,
    }
  },
  components: {
    localNav: Nav
  }
}

</script>
