<template>
  <ul class="article-lists">
    <li class="atc-unit" v-for="a in lists" :class="{hasimg:a.img!==undefined}">
      <router-link class="img-wrap" to="/"><img v-if="a.img!==undefined" :src="a.img" /></router-link>
      <div class="atc-unit-c">
        <router-link to="/article" class="title">{{a.title}}</router-link>
        <p class="abstract">{{a.abstract}}</p>
        <div class="meta">
          <router-link target="_blank" to="/author">
            {{a.meta.nickname}}
          </router-link>
          <router-link target="_blank" to="/comments">
            <i class='iconfont ic-list-comments'></i> {{a.meta.comments}}
          </router-link>
          <router-link target="_blank" to="/likes">
            <i class='iconfont ic-list-like'></i> {{a.meta.likes}}
          </router-link>
        </div>
      </div>
    </li>
  </ul>
</template>
<style>
.atc-unit {
  position: relative;
  width: 100%;
  margin: 0 0 15px;
  padding: 15px 2px 20px 0;
  border-bottom: 1px solid #f0f0f0;
  word-wrap: break-word;
}

.atc-unit>.img-wrap {
  position: absolute;
  top: 50%;
  margin-top: -60px;
  right: 0;
  width: 125px;
  height: 100px;
}

.img-wrap>img {
  width: 100%;
  height: 100%;
  border-radius: 4px;
  border: 1px solid #f0f0f0;
}

.hasimg>.atc-unit-c {
  margin-right: 140px;
}

.atc-unit-c>.title {
  margin: -7px 0 4px;
  display: inherit;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.5;
}

.atc-unit-c>.title:hover {
  text-decoration: underline;
}

.atc-unit-c>.abstract {
  margin: 0 0 8px;
  font-size: 13px;
  line-height: 24px;
  color: #999;
}

.atc-unit-c>.meta>a {
  margin-right: 10px;
  color: #b4b4b4;
}

</style>
<script>
import ArticleListData from "./article-list-data";
export default {
  data() {
    return {
      lists: ArticleListData
    }
  }

}

</script>
