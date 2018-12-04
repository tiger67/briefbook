<template>
  <div class="edt-area-wrap">
    <div id="contenteditor" contenteditable="true" @paste="paste" @change='change' class='edt-area' @keyup.8="backspace" @input="input" @keyup.13="enter">
    </div>
  </div>
</template>
<script>
import content from "@/views/article/data/content"
/*var content = `
<p>撒谎的卡上的卡撒谎的教科书的计算的话还打算几点火炬手当回事的</p>
<p>撒谎的卡上的卡撒谎的教科书的计算的话还打算几点火炬手当回事的</p>
<h3>王俊凯撒谎分开的时候开发就打扫房间很多时间</h3> `
*/
export default {
  data() {
    return {
      content: ""
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    paste(e) {
      console.log(e)
      var pastedText = e.clipboardData.getData('text/html');
      var temp = document.createElement("div");
      temp.innerHTML = pastedText;
      console.log(temp.innerText);
    },
    change() {
      console.log('change-----')
    },
    addp(edt, node) {
      var p = document.createElement('p');
      p.innerHTML = "<br>";
      if (node) {
        edt.insertBefore(p, node);
        var se = window.getSelection();
        var range = document.createRange();
        se.removeAllRanges();
        range.selectNode(p);
        range.setEnd(p, 0);
        se.addRange(range);
      } else {
        edt.appendChild(p);
      }
    },
    init() {
      var edt = this.$el.children[0];
      edt.innerHTML = content.c;
      edt.focus();
      if (edt.innerHTML.trim().length == 0) {
        this.addp(edt);
      } else {
        var selection = window.getSelection();
        var range = document.createRange();
        range.selectNodeContents(edt.lastChild);
        selection.removeAllRanges();
        selection.addRange(range);

      }
    },
    enter(e) {
      var edt = e.target;
      var node = window.getSelection().anchorNode;
      if (node.nodeName == "DIV") {
        this.addp(edt, node)
        edt.removeChild(node);
      }
    },
    backspace(e) {
      var edt = e.target;
      if (edt.innerHTML.length == 0) {
        this.addp(edt);
      }
    },
    input(e) {
      console.log('input-----')
      // var ch = this.$el.children[0]
      //console.dir(ch.innerHTML);
    }

  },
  watch: {
    '$route' (to, from) {
      this.init();
    }
  }
}

</script>
<style lang="scss">
.edt-area-wrap {
    width: 100%;
    height: calc(100% - 85px);
    overflow-y: auto;
}

.edt-area {
    border: none;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.7;
    bottom: 0;
    outline: 0;
    min-height: 100%;
    box-sizing: border-box;
    padding: 40px 40px 80px;
    -webkit-user-modify: read-write;
    color: rgba(0, 0, 0, .85);
    &>div {
        margin: 0 0 25px;
    }
    a {
        color: #3194d0;
    }
    p {
        margin: 0 0 25px;
        word-break: break-word;
    }
    h1 {
        font-size: 26px;
    }
    h2 {
        font-size: 24px;
    }
    h3 {
        font-size: 22px;
    }
    h4 {
        font-size: 20px;
    }
    h1,
    h2,
    h3,
    h4 {
        text-rendering: optimizelegibility;
        line-height: 1.7;
        margin: 0 0 15px;
        font-weight: 700;
    }
    blockquote {
        padding: 20px;
        background-color: #f2f2f2;
        border-left: 6px solid #b3b3b3;
        word-break: break-word;
        font-size: 16px;
        font-weight: 400;
        line-height: 30px;
        margin: 0 0 20px;
    }
}

</style>
