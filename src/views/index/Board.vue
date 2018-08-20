<template>
  <div class="board">
    <router-link v-for="(a,i) in lists" :key="a.url" target="_blank" :to="{path:a.url,name:i+'board'}">
      <img :src="a.img">
    </router-link>
  </div>
</template>
<style>
.board>a>img {
    width: 100%;
    min-height: 50px;
    margin-bottom: 6px;
    border-radius: 4px;
}

</style>
<script>
var datalists = [{
    img: require("../../assets/home/board/1.png"),
    url: '/1'
  },
  {
    img: require("../../assets/home/board/2.png"),
    url: '/2'
  },
  {
    img: require("../../assets/home/board/3.png"),
    url: '/3'
  },
  {
    img: require("../../assets/home/board/4.png"),
    url: '/4'
  },
  {
    img: require("../../assets/home/board/5.png"),
    url: '/5'
  },
]
export default {
  data() {
    return {
      lists: datalists
    }
  }
}

</script>
