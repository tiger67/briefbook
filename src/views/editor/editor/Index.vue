<template>
  <div class='editor-page'>
    <span class="save-tip">{{d.isSaving ? "保存中..." : "已保存"}}</span>
    <div class="edt-container">
      <input type="text" class="title" v-model="d.title" @input="saveTitle">
      <editor-header />
      <editor-textarea />
    </div>
    <loading ref="loading" :text="'内容加载中...'" />
  </div>
</template>
<script>
import EditorHeader from './EditorHeader'
import EditorTextarea from './EditorTextarea'
import d from "./data"
import API from "../api"
import getRefs from "../common/getRefs"
import Loading from "../common/loading/Index"
var temptitle = "";

export default {
  data() {
    return {
      d,
      loadingdata: false
    }
  },
  methods: {
    saveTitle() {
      if (!d.isSaving && temptitle != d.title) {
        temptitle = d.title;
        d.isSaving = true;
        //console.log(this.$route);
        var r = this.$route;
        var note = { title: d.title, noteId: r.params.note_id };
        API.updateNote({ note }).then(res => {
          var $note = getRefs.getNote(this);
          $note.freshNote(res.data);
          d.isSaving = false;
        })
      }
    },
    openNode() {
      if (this.$refs.loading) {
        this.$refs.loading.show = true;
      }
      setTimeout(() => {
        /*var note = getRefs.getNote(this).getNote();
         */
        // console.log(this.$route.params.note_id);
        API.findNoteById({ noteId: this.$route.params.note_id }).then(res => {
          if (res.code === 0) {
            d.title = res.data.title;
          }
          if (this.$refs.loading) {
            this.$refs.loading.show = false;
          }
        })
      }, 100)
    },
    init() {}
  },
  mounted() {
    this.openNode();
  },
  watch: {
    $route(to, from) {
      var to_note_id = to.params && to.params.note_id;
      var from_note_id = from.params && from.params.note_id;
      if (to_note_id != from_note_id) {
        this.openNode();
      }
    }
  },
  components: {
    EditorHeader,
    EditorTextarea,
    Loading,
  }
}

</script>
<style lang="scss">
@import "./scss/index.scss";
.edt-container {
    height: 100%;
}

</style>
