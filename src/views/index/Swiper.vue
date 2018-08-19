<template>
  <div class="swiper">
    <div class="swp-p-container">
      <img v-for="img in lists" class="swp-img" :src="img.url" />
    </div>
    <ul class="swp-contorl">
      <li v-for="t in lists" class=""></li>
      <li></li>
      <li></li>
    </ul>
    <a class="swp-bt swp-bt-l"><i class="iconfont ic-previous-s"></i></a>
    <a class="swp-bt swp-bt-t"><i class="iconfont ic-next-s"></i></a>
  </div>
</template>
<style>
.swiper {
    border: 2px solid green;
}

</style>
<script>
export default {
  data: {
    lists: [{}]
  }
}

</script>
