<template>
  <div class="catalog-p">
    <a @click.prevent="createNote(0)" class='file-create-btn'>
  <i class='fa fa-plus-circle'></i> 新建文章
 </a>
    <!-- <div class="loading" v-if="!notes">
      <span style="line-height:300px;text-align:center">正在加载...</span>
    </div> -->
    <div class='file-lists'>
      <a class="file-lists-line" v-for="n in notes" :key="n.id" :class="{'active':$route.params.note_id==n.id}" @click.prevent="openNote(n)">
        <note-tool v-if="$route.params.note_id==n.id" @getBooks="getBooks" :ops="{1:moveto,3:removeNote}" />
        <i class="file-icon"></i>
        <div class="set-btn"></div>
        <span class="title">{{n.title}}</span>
        <span class="sub-title">{{n.sub_title}}</span>
        <span class="tip-msg">字数：{{n.words}}</span>
      </a>
    </div>
    <a @click.prevent="createNote(-1)" class="file-create-btn-b">
      <i class="fa fa-plus"></i>
      在下方创建文章
    </a>
    <loading ref="loading" :text="'文章加载中...'" />
  </div>
</template>
<style lang="scss">
@import "./scss/NoteCatelog.scss";

</style>
<script>
import api from "./api"
import NoteTool from "./common/NoteTool"
import d from "./editor/data"
import getRefs from "./common/getRefs"
import Loading from "./common/loading/Index"
var localnote;
var openindex = 0;
var loading = {};
export default {
  data() {
    return {
      notes: null,
      d
    }
  },
  components: {
    NoteTool,
    Loading
  },
  methods: {
    moveto(bookId) {
      var r = this.$route;
      var note = { bookId, noteId: r.params.note_id };
      api.updateNote({ note }).then(res => {
        this.findNotes(undefined, 0);
      })
    },
    removeNote() {
      var bookId = this.$route.params.book_id;
      var noteId = localnote.id;
      api.deleteNote({ bookId, noteId }).then(res => {
        if (res.code == 0) {
          //console.log(openindex);
          if (openindex !== 0) {
            openindex = openindex - 1;
          }
          this.findNotes(bookId, openindex);
        }
      })
    },
    getBooks(rbk) {
      var bookId = this.$route.params.book_id;
      var books = getRefs.getBook(this).books;
      var i = books.length;
      while (i--) {
        let b = books[i];
        if (bookId != b.id) {
          rbk.unshift({ name: b.name, id: b.id });
        }
      }
      return rbk;
    },
    getNote() {
      return localnote
    },
    openNote(note) {
      var bookId = this.$route.params.book_id;
      localnote = note;
      openindex = this.notes.indexOf(note);
      this.$router.push(`/writer/notebooks/${bookId}/notes/${note.id}`);
    },
    freshNote(note) {
      var noteid = this.$route.params.note_id;
      var len = this.notes.length;
      for (var i = 0; i < len; i++) {
        if (noteid == this.notes[i].id) {
          this.notes.splice(i, 1, note);
        }
      }
    },
    findNotes(bookId, index) { //index表示打开最开始还是最后一个，跟创建的index保持一致
      loading.show = true;
      setTimeout(() => {
        var bookId = bookId || this.$route.params.book_id;
        api.findNotes({ bookId }).then(res => {
          // console.log(res);
          loading.show = false;
          if (res.code === 0) {
            this.notes = res.data;
            if (index === undefined) {
              index = openindex;
            }
            if (index == -1) {
              index = this.notes.length + index;
            }
            this.openNote(res.data[index]);
          }
        })
      }, 50);
    },
    createNote(index) {
      var bookId = this.$route.params.book_id;
      api.createNote({ bookId, index }).then(res => {
        if (res.code == 0) {
          this.findNotes(bookId, index);
        }
      })
    }
  },
  mounted: function() {
    loading = this.$refs.loading;
    setTimeout(() => {
      var bookId = this.$route.params.book_id;
      //console.log(bookId)
      if (bookId) {
        this.findNotes(bookId, 0);
      }
    }, 50)
  },
  watch: {
    '$route': function(to, from) {
      var to_book_id = to.params && to.params.book_id;
      var from_book_id = from.params && from.params.book_id;
      var to_note_id = to.params && to.params.note_id;
      var from_note_id = from.params && from.params.note_id;
      if (!to_book_id) {
        this.notes = [];
      } else if (to_book_id != from_book_id) {
        this.findNotes(to_book_id, 0);
      }
      if (to_note_id && to_note_id != from_note_id) {
        //this.
      }
    }
  }
}

</script>
