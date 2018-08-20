<template>
  <div class="author-editor">
    <div class="editor-layout">
      <folder-builder-panel class="ae-l " />
      <div class="ae-r">
        <article-builder-panel class="ae-r-l" />
        <edit-panel class="ae-r-r" />
      </div>
    </div>
  </div>
</template>
<style>
html,
body {
    width: 100%;
    height: 100%;
}

* {
    box-sizing: border-box;
}

body {
    margin: 0;
    font-family: Monospaced Number, Chinese Quote, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 14px;
    line-height: 1.5;
    color: rgba(0, 0, 0, .65);
    background-color: #fff;
}

.author-editor {
    width: 100%;
    height: 100%;
    max-width: 100vw;
    max-height: 100vh
}

.editor-layout {
    height: 100%;
    overflow: hidden;
}

.ae-l {
    width: 16.66666667%;
    float: left;
    height: 100%;
}

.ae-r {
    height: 100%;
    float: left;
    width: 83.33333333%;
}

.ae-r-l {
    width: 30%;
    height: 100%;
    border-right: 1px solid #d9d9d9;
    float: left;
}

.ae-r-r {
    position: relative;
    width: 70%;
    height: 100%;
    float: left;

    height: 100vh;
    padding-top: 0;
    background-color: #f2f2f2;
    text-align: center;
}

</style>
<script>
import FolderBuilderPanel from "./FolderBuilderPanel.vue"
import ArticleBuilderPanel from "./ArticleBuilderPanel.vue"
import EditPanel from "./EditPanel.vue"
export default {
  components: {
    FolderBuilderPanel,
    ArticleBuilderPanel,
    EditPanel
  },
  data() {
    return {

    }
  }

}

</script>
