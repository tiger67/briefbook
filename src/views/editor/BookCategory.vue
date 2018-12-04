<template>
  <div class="folder-b-p">
    <div class="return-home-btn">
      <router-link to="/">回首页</router-link>
    </div>
    <div class="folder-create">
      <a class="folder-c-btn" @click.prevent.stop="toggleCreate(true)">
          <i class="fa fa-plus"></i>
          新建文集
      </a>
      <form class="folder-from" :class='{open:iscreating}'>
        <input type="text" class='folder-name' ref="bookinput" placeholder="请输入文集名..." name="foldername" v-model='foldername'>
        <button class='f-btn  f-submit-btn' @click.prevent.stop="createBook">提 交</button>
        <button class='f-btn f-cancel-btn' @click.prevent.stop="toggleCreate(false)">取 消</button>
      </form>
    </div>
    <ul class="folder-lists">
      <li class='folder-line' href="javascript:void(0);" v-for="(b,index) in books" @click="openBook(b,index)" :class="{'router-link-active':$route.params.book_id==b.id}" :key="b.id" :title='b.name'>
        <book-tool v-if="$route.params.book_id==b.id" :ops="{ 0:initUpdateBook,1:removeBook}" />
        <span>{{b.name}}</span>
      </li>
    </ul>
    <div class='config-set-panel'></div>
    <div class="problem-btn"></div>
  </div>
</template>
<style lang="scss">
@import "./scss/BookCategory.scss"

</style>
<script>
import api from "./api"
import BookTool from "./common/BookTool"
var openingbook;
var isupdating;
var openindex = 0;
export default {
  data() {
    return {
      books: [],
      foldername: '',
      iscreating: false
    }
  },
  components: {
    BookTool
  },
  mounted: function() {
    this.findBooks();
  },
  methods: {
    updateBook() {
      api.updateBook({ bookId: openingbook.id, book: { name: this.foldername } }).then(res => {
        isupdating = false;
        this.toggleCreate(false);
        if (res.code === 0) {
          this.findBooks();
        }
      })
    },
    initUpdateBook() {
      isupdating = true;
      //console.log(openingbook);
      this.foldername = openingbook.name;
      this.toggleCreate(true);
    },
    removeBook() {
      //console.log("is runnig")
      api.deleteBook({ bookId: openingbook.id }).then(res => {
        if (this.books.length - 1 == openindex) {
          openindex = openindex - 1;
        }
        if (res.code == 0) {
          this.findBooks();
        }
      })
    },
    toggleCreate(flag) {
      this.iscreating = flag;
      if (flag) {
        this.$refs.bookinput.focus();
      } else {
        this.foldername = "";
      }
    },
    openBook(book, index) {
      openingbook = book;
      openindex = index;
      if (this.$route.params.book_id != book.id) {
        api.findNote({ bookId: book.id }).then(res => {
          var note = res.data;
          var url = `/writer/notebooks/${book.id}`;
          if (note) {
            url = `${url}/notes/${note.id}`;
          }
          this.$router.push(url);
        })
      }
    },
    findBooks() {
      api.findBooks().then(res => {
        if (res.code === 0) {
          this.books = res.data;
          if (res.data.length > 0) {
            if (res.data[openindex]) {
              this.openBook(res.data[openindex]);
            } else {
              this.openBook(res.data[0]);
            }
          } else {
            this.$router.push("/writer");
          }
        }
      })
    },
    createBook() {
      if (isupdating) {
        this.updateBook();
      } else {
        api.createBook({ name: this.foldername }).then(res => {
          this.toggleCreate(false);
          if (res.code === 0) {
            this.findBooks();
          }
        })
      }
    }
  }
}

</script>
