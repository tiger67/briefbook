<template>
  <ul class="editor-tool-wrap clearfix">
    <li class="sp-fr send-btn">
      <a href="javascript:void(0)" @click="post">
          <i class="fa fa-mail-forward"></i>
          发布文章
        </a>
    </li>
    <li> <a href="javascript:void(0)" class="fa fa-bold has-sub"></a>
      <ul class="sub-tool">
        <li><a href="javascript:void(0)" @click="exec('bold')" v-tooltip="{content:'粗体'}" class="fa fa-bold"></a></li>
        <li><a href="javascript:void(0)" @click="exec('italic')" v-tooltip="{content:'斜体'}" class="fa fa-italic"></a></li>
        <li><a href="javascript:void(0)" @click="exec('strikethrough')" v-tooltip="{content:'删除线'}" class="fa fa-strikethrough"></a></li>
        <li><a href="javascript:void(0)" @click="quote" v-tooltip="{content:'引用'}" class="fa fa-quote-left"></a></li>
      </ul>
    </li>
    <li>
      <a href="javascript:void(0)" v-tooltip="{pos:'top',content:'插入图片'}" class="fa fa-picture-o">
        <input type="file" class="input-file-hide" />
      </a>
    </li>
    <li> <a href="javascript:void(0)" class="fa fa-undefined has-sub">H1</a>
      <ul class="sub-tool">
        <li><a href="javascript:void(0)" @click="toggleExec('H1')" v-tooltip="{content:'标题1'}" class="fa fa-undefined">H1</a></li>
        <li><a href="javascript:void(0)" @click="toggleExec('H2')" v-tooltip="{content:'标题2'}" class="fa fa-undefined">H2</a></li>
        <li><a href="javascript:void(0)" @click="toggleExec('H3')" v-tooltip="{content:'标题3'}" class="fa fa-undefined">H3</a></li>
        <li><a href="javascript:void(0)" @click="toggleExec('H4')" v-tooltip="{content:'标题4'}" class="fa fa-undefined">H4</a></li>
      </ul>
    </li>
    <li>
      <a href="javascript:void(0)" class="fa fa-undefined has-sub">一</a>
      <ul class="sub-tool">
        <li><a href="javascript:void(0)" class="fa fa-undefined" v-tooltip="{pos:'right',content:'分割线'}">—</a></li>
        <li><a href="javascript:void(0)" class="fa fa-link" v-tooltip="{pos:'right',content:'插入连接'}"></a></li>
        <li><a href="javascript:void(0)" class="fa fa-youtube-play" v-tooltip="{pos:'right',content:'插入视频'}"></a></li>
      </ul>
      <!-- <ul class="sub-tool">
        <li><a href="javascript:void(0)" class="fa fa-undefined" v-tooltip="{pos:'top',content:'分割线'}">—</a></li>
        <li><a href="javascript:void(0)" class="fa fa-link" v-tooltip="{pos:'top',content:'插入连接'}"></a></li>
        <li><a href="javascript:void(0)" class="fa fa-youtube-play" v-tooltip="{pos:'top',content:'插入视频'}"></a></li>
      </ul> -->
    </li>
    <li>
      <a href="javascript:void(0)" class="fa fa-undo has-sub"></a>
      <ul class="sub-tool">
        <li><a href="javascript:void(0)" @click="exec('undo')" v-tooltip="{pos:'right',content:'撤销'}" class="fa fa-undo"></a></li>
        <li><a href="javascript:void(0)" @click="exec('redo')" v-tooltip="{pos:'right',content:'重做'}" class="fa fa-repeat"></a></li>
      </ul>
    </li>
    <li><a href="javascript:void(0)" @click="copy" v-tooltip="{pos:'top',content:'历史版本'}" class="fa fa-clock-o"></a></li>
    <li class="sp-fr"> <a href="javascript:void(0)" class="fa fa-expand"></a></li>
    <li class="sp-fr"> <a href="javascript:void(0)" class="fa fa-floppy-o"></a></li>
  </ul>
</template>
<script>
import datalist from "@/views/index/article-list-data"
import content from "@/views/article/data/content"
var editorNode = null;

function getBockNode(node) {
  if (!node) return;
  var editorNode = editorNode || document.querySelector("#contenteditor");
  if (node.nodeType == 3) {
    node = node.parentNode;
  }
  while (node.parentNode != editorNode) {
    node = node.parentNode;
  }
  return node;
}
export default {
  data() {
    return {}
  },
  methods: {
    toggleExec(nodeName) {
      var editorNode = editorNode || document.querySelector("#contenteditor");
      var selection = window.getSelection();
      var range = document.createRange();
      var tnode = selection.anchorNode;
      var fnode = getBockNode(selection.focusNode);
      //console.log(selection);
      if (!tnode) {
        return
      }
      tnode = getBockNode(tnode);

      if (!selection.isCollapsed && tnode != fnode) {
        var alls = Array.prototype.slice.call(editorNode.children);
        var index1 = alls.indexOf(tnode);
        var index2 = alls.indexOf(fnode);
        if (index2 < index1) {
          var temp = index1;
          index1 = index2;
          index2 = temp;
        }
        var selectNodes = alls.slice(index1, index2 + 1);
        //console.log(selectNodes)
        var isSameName = selectNodes.every(node => {
          return node.nodeName == nodeName;
        })

        selectNodes.forEach((node) => {
          range = document.createRange();
          range.selectNodeContents(node);
          selection.removeAllRanges();
          selection.addRange(range);
          isSameName ? document.execCommand('formatBlock', false, 'p') :
            document.execCommand('formatBlock', false, nodeName);
        })
        selection.removeAllRanges();
        range = document.createRange();
        range.setStart(editorNode.children[index1], 0);
        var lastNode = editorNode.children[index2];
        if (lastNode.children.length == 0) {
          range.setEnd(lastNode, 1);
        } else {
          var nodes = lastNode.childNodes;
          var nlnode = nodes[nodes.length - 1];
          if (nlnode.nodeType == 3) {
            range.setEnd(nlnode, nlnode.textContent.length);
          } else {
            range.setEnd(nlnode, 1);
          }
        }
        selection.addRange(range);
      } else {
        range.selectNodeContents(tnode);
        selection.removeAllRanges();
        selection.addRange(range);
        if (tnode.nodeName == nodeName) {
          document.execCommand('formatBlock', false, "p");
        } else {
          document.execCommand('formatBlock', false, nodeName);
        }
      }
    },
    quote() {},
    exec(command) {
      var result = document.execCommand(command);
      if (!result) {
        console.log(command + " exec error!");
      }
    },
    copy() {
      document.execCommand("copy");
    },
    post() {
      var editorNode = editorNode || document.querySelector("#contenteditor");
      content.c = editorNode.innerText;
      console.log(content.c);
      alert("djdjd");

      /*var d = {
        id: datalist.length + 1,
        title: "是的会计师的集散地",
        abstract: ``,
        meta: {
          avatar: require('@/assets/home/writer-cmd/7.jpg'),
          nickname: "你是欧恩",
          comments: 0,
          likes: 0
        }
      }
      datalist.push(d);*/
    }
  }
}

</script>
<style lang="scss">
@import "./scss/EditorHeader.scss"

</style>
