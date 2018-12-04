<template>
  <div class="contanier">
    <div class="left-m w-b ">
      <swiper />
      <recommend-subject />
      <div class="split-line"></div>
      <article-list/>
    </div>
    <div class="right-m w-s">
      <board v-once />
      <app-share v-once/>
      <recommend-author />
    </div>
  </div>
</template>
<style>
.main .split-line {
    margin: -5px 0 15px;
    border-top: 1px solid #f0f0f0;
}

.left-m {
    float: left;
    /*  border: 1px solid #ccc; */
    padding-top: 30px;
    padding-left: 15px;
}

.right-m {
    float: right;
    margin-left: 4.16667%;
    padding: 30px 0 0;
    /*   border: 1px solid #ccc; */
}

</style>
<script>
import api from "@/api/backend"
import Swiper from "./swiper/Index.vue"
import RecommendSubject from "./RecommendSubject"
import RecommendAuthor from "./RecommendAuthor"
import ArticleList from "./ArticleList"
import Board from "./Board"
import AppShare from "./AppShare"
/*api.signin({ username: '1223', password: "123456" });
console.log(api);*/
export default {
  components: {
    Swiper,
    RecommendSubject,
    RecommendAuthor,
    ArticleList,
    Board,
    AppShare
  }
}

</script>
