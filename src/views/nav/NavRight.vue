<template>
  <div style="float:right" class="nav-right-wrap">
    <router-link class="btn write-btn" to="/writer">
      <i class="iconfont ic-write"></i>写文章
    </router-link>
    <sign />
  </div>
</template>
<script>
import Sign from "./Sign"


export default {
  name: 'Nav',
  data() {
    return {

    }
  },
  components: {
    Sign
  }
}

</script>
