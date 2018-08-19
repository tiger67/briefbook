<template>
  <div class="row">
    <div class="left-m">
      <swiper></swiper>
    </div>
    <div class="right-m"></div>
  </div>
</template>
<style>
.left-m {
    float: left;
    width: 66.66667%;
    border: 1px solid #ccc;
    padding-top: 30px;
}

.right-m {
    float: right;
    margin-left: 4.16667%;
    width: 29.16667%;
    padding-top: 30px;
    border: 1px solid #ccc;
}

</style>
<script>
import Swiper from "./Swiper"
export default {
  components: {
    Swiper
  }
}

</script>
