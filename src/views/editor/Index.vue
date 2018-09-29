<template>
  <div class="notebook-p">
    <div class="editor-layout">
      <book-category class="ae-l" />
      <note-layout />
    </div>
  </div>
</template>
<script>
import '@/assets/font-awesome-4.7.0/css/font-awesome.css'
import BookCategory from "./BookCategory.vue"
import NoteLayout from "./NoteLayout.vue"
export default {
  data() {
    return {}
  },
  components: {
    BookCategory,
    NoteLayout
  },
  mounted: function() {

  }
}

</script>
<style>
html,
body {
    width: 100%;
    height: 100%;
}

*,
:before,
:after {
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

a {
    background-color: transparent;
    text-decoration: none;
    outline: none;
    cursor: pointer;
    transition: color .3s;
}

.notebook-p {
    width: 100%;
    height: 100%;
    max-width: 100vw;
    max-height: 100vh
}

.editor-layout {
    height: 100%;
    overflow: hidden;
}

.notebook-p .ae-l {
    width: 16.66666667%;
    float: left;
    height: 100%;
}

.notebook-p .ae-r {
    height: 100%;
    float: left;
    width: 83.33333333%;
}

.notebook-p .ae-r-l {
    width: 30%;
    height: 100%;
    border-right: 1px solid #d9d9d9;
    float: left;
}

.notebook-p .ae-r-r {
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
<style>
.notebook-p input,
.notebook-p button {
    outline: none;
    margin: 0;
}

</style>
