<template>
  <div class="board" v-once>
    <router-link v-for="(a,i) in lists" :key="a.url" target="_blank" :to="a.url">
      <img :src="a.img">
    </router-link>
  </div>
</template>
<style lang="scss">
.board {
    margin-top: -4px;
    padding-bottom: 4px;
    min-height: 228px;
    a {
        img {
            width: 100%;
            height: auto;
            margin-bottom: 6px;
            border-radius: 4px;
            display: block;
        }
    }
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
