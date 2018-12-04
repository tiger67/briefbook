<template>
  <div class="atc-page">
    <side-tool />
    <aritcle-single :atc="d" />
  </div>
</template>
<style lang="scss">
.atc-page {
    margin: 30px auto;
    max-width: 800px;
}

</style>
<script>
import SideTool from "./SideTool"
import Article from "./Article"
import atclist from "../index/article-list-data"
import content from "./data/content.js"

export default {
  data() {
    return {
      d: {}
    }
  },
  created() {},
  mounted() {
    var id = this.$route.params.id;
    //data.id = id;
    var i = atclist.length;
    while (i--) {
      if (atclist[i].id == id) {
        atclist[i].content = content.c;
        this.d = atclist[i];
      }
    }
  },
  components: {
    SideTool,
    AritcleSingle: Article,
  }
}

</script>
