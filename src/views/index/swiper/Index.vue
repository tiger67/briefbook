<template>
  <div class="swiper" @mouseenter='setStop(true)' @mouseleave='setStop(false)'>
    <div class="swp-p-container">
      <router-link v-for="(img,i) in lists" to="/" :key="i" :class="classobject(i)" class="swp-img-wrap">
        <img class="swp-img" :src="img.img" />
      </router-link>
    </div>
    <ul class="swp-contorl">
      <li v-for="(t,i) in lists" class="swp-contorl-cell" :class="{active:preActive==i}"></li>
    </ul>
    <a v-once class="swp-bt swp-bt-l" @click="swiper('right',true)"><i class="iconfont ic-previous-s"></i></a>
    <a v-once class="swp-bt swp-bt-r" @click="swiper('left',true)"><i class="iconfont ic-next-s"></i></a>
  </div>
</template>
<script>
var imglist = [
  { img: require('@/assets/swiper/1.jpg') },
  { img: require('@/assets/swiper/2.jpg') },
  { img: require('@/assets/swiper/3.jpg') },
  { img: require('@/assets/swiper/4.jpg') },
  { img: require('@/assets/swiper/5.png') }
]
export default {
  data() {
    return {
      isswipering: false,
      direction: 'left',
      active: 0,
      next: -1,
      preActive: 0,
      isstoped: false,
      lists: imglist
    }
  },
  mounted() {
    setInterval(function() {
      this.swiperRun();
    }.bind(this), 5000)
  },
  methods: {
    setStop(flag) {
      this.isstoped = flag;
    },
    classobject(i) {
      var obj = { active: this.active == i, next: i == this.next, };
      obj[this.direction] = this.next != -1 && i == this.active || i == this.next;
      return obj;
    },
    swiperRun(ishoverbtn) {
      if (!ishoverbtn && (this.isswipering || this.isstoped)) {
        return;
      }
      this.isswipering = true;
      if (this.direction == 'left') {
        this.next = (this.active + 1) % this.lists.length;
      } else {
        this.next = this.active == 0 ? this.lists.length - 1 : this.active - 1;
      }
      this.preActive = this.next;
      setTimeout(function() {
        this.active = this.next;
        this.next = -1;
        this.isswipering = false;
      }.bind(this), 600);
    },
    swiper(direct, ishoverbtn) {
      this.direction = direct == "right" ? 'right' : 'left';
      this.swiperRun(ishoverbtn);
    }
  }
}

</script>
<style lang="scss">
@import "./index.scss"

</style>
