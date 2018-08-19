<template>
  <div class="swiper">
    <div class="swp-p-container">
      <router-link v-for="(img,index) in lists" :class="{active:index==1}" :to="img.url" class="swp-img-wrap">
        <img class="swp-img" src="../../assets/swiper/1.jpg" />
      </router-link>
    </div>
    <ul class="swp-contorl">
      <li v-for="t in lists" class=""></li>
      <li></li>
      <li></li>
    </ul>
    <a class="swp-bt swp-bt-l"><i class="iconfont ic-previous-s"></i></a>
    <a class="swp-bt swp-bt-r"><i class="iconfont ic-next-s"></i></a>
  </div>
</template>
<style>
.swp-bt {
    background-color: rgba(0, 0, 0, .4);
    height: 50px;
    line-height: 50px;
    width: 40px;
    top: 40%;
    position: absolute;
    font-size: 20px;
    color: #fff;
    text-align: center;
    text-shadow: 0 1px 2px rgba(0, 0, 0, .6);
    cursor: pointer;
}

.swp-bt-l {
    left: 0;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
}

.swp-bt-r {
    right: 0;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
}

.swiper {
    border: 0px solid green;
    border-radius: 6px;
    overflow: hidden;
    position: relative;
    margin-bottom: 35px;
}

.swp-p-container {
    position: relative;
}

.swp-img-wrap {
    width: 100%;
    display: none;
}

.swp-img-wrap.active {
    display: block;
}

.swiper .swp-p-container img {
    width: 100%;
    height: 270px;
    background-color: hsla(0, 1%, 71%, 0.2);
    display: block;
}

</style>
<script>
export default {
  data() {
    return {
      lists: [{
          url: '/',
          src: '../../assets/swiper/1.jpg'
        },
        {
          url: '/',
          src: '../../assets/swiper/2.jpg'
        },
        {
          url: '/',
          src: '../../assets/swiper/3.jpg'
        }
      ]
    }
  }
}

</script>
