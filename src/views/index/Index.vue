<template>
  <div class="row">
    <div class="left-m">
      <swiper />
      <recommend-subject />
      <div class="split-line"></div>
      <article-list/>
    </div>
    <div class="right-m">
      <board />
      <app-share />
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
  width: 66.66667%;
  /*  border: 1px solid #ccc; */
  padding-top: 30px;
  padding-left: 15px;
}

.right-m {
  float: right;
  margin-left: 4.16667%;
  width: 29.16667%;
  padding: 30px 0 0;
  /*   border: 1px solid #ccc; */
}

</style>
<script>
import Swiper from "./Swiper"
import RecommendSubject from "./RecommendSubject"
import RecommendAuthor from "./RecommendAuthor"
import ArticleList from "./ArticleList"
import Board from "./Board"
import AppShare from "./AppShare"
import data from "data"
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
