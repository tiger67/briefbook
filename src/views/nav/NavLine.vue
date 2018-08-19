<template>
  <router-link to="/" class="nav-line">
    <i class="iconfont ic-comments"></i>
    <span class="nav-line-text">评论</span>
  </router-link>
</template>
<script>
export default {
  data() {
    return {}
  }
}

</script>
<style>
.nav-line {
    display: block;
    padding: 10px 25px;
    line-height: 30px;
    border-radius: 4px;
}

.nav-line:hover {
    background-color: #f0f0f0;
}

.nav-line>i {
    margin-right: 15px;
    font-size: 24px;
    color: #ea6f5a;
    vertical-align: middle;
}

.nav-line-text {
    font-size: 15px;
    vertical-align: middle;
}

</style>
