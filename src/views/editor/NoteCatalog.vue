<template>
  <div class="catalog-p">
    <a @click.prevent="createNote(0)" class='file-create-btn'>
  <i class='fa fa-plus-circle'></i> 新建文章
 </a>
    <div class='file-lists'>
      <a class="file-lists-line" v-for="n in notes" :key="n.id" :class="{'active':$route.params.note_id==n.id}" @click.prevent="openNote(n)">
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
  </div>
</template>
<script>
import cdata from "./data"
import api from "./api"
export default {
  data() {
    return {
      notes: []
    }
  },
  methods: {
    openNote(note) {
      var bookId = this.$route.params.book_id;
      this.$router.push(`/writer/notebooks/${bookId}/notes/${note.id}`);
    },
    findNotes(bookId, index) {
      api.findNotes({ bookId }).then(res => {
        if (res.code === 0) {
          /*  if (res.data.length > 0) {*/
          this.notes = res.data;
          if (res.data.length > 1 && index == -1) {
            this.openNote(res.data.slice(-1)[0]);
          } else {
            this.openNote(res.data[0])
          }
          /*} else {
            this.notes = res.data;
          }*/
        }
      })
    },
    createNote(index) {
      // console.log()
      var bookId = this.$route.params.book_id;
      api.createNote({ bookId, index }).then(res => {
        console.log(res);
        if (res.code == 0) {
          this.findNotes(bookId, index);
        }
      })
    }
  },
  mounted: function() {},
  watch: {
    '$route': function(to, from) {
      var to_book_id = to.params && to.params.book_id;
      var from_book_id = from.params && from.params.book_id;
      if (to_book_id != from_book_id) {
        this.findNotes(to_book_id);
      }
    }
  }
}

</script>
<style scoped>
.file-create-btn-b {
    display: block;
    line-height: 30px;
    padding: 20px 0 20px 25px;
    cursor: pointer;
    color: #999;
    margin-bottom: 80px;
}

.file-create-btn-b:hover {
    color: #666;
}

.catalog-p {
    overflow-y: scroll;
    height: 100%;
}

.tip-msg {
    position: absolute;
    bottom: 2px;
    left: 5px;
    font-size: 9px;
    line-height: 16px;
    color: #595959;
}

.sub-title {
    display: block;
    height: 30px;
    line-height: 30px;
    margin-right: 40px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.title {
    display: block;
    height: 30px;
    line-height: 30px;
    margin-right: 40px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 18px;
    color: #333;
}

.file-icon {
    position: absolute;
    top: 30px;
    left: 20px;
    width: 22px;
    height: 30px;
    background: url('../../assets/home/editor/sprite.png') no-repeat 0 -25px;
    background-size: 250px;
}

.file-lists-line.active {
    border-left-color: #ec7259;
    background-color: #e6e6e6;
}

.file-lists-line:hover {
    background-color: #e6e6e6;
}

.file-lists-line {
    display: block;
    position: relative;
    height: 90px;
    color: #595959;
    background-color: #fff;
    margin-bottom: 0;
    padding: 15px 10px 15px 60px;
    box-shadow: 0 0 0 1px #d9d9d9;
    border-left: 5px solid transparent;
    list-style: none;
    line-height: 60px;
    cursor: pointer;
    user-select: none;
}

.file-lists {
    position: relative;
    margin-bottom: 0;
    background-color: #efe9d9;
    border-top: 1px solid #d9d9d9;
}

.file-create-btn {
    display: block;
    line-height: 20px;
    font-size: 15px;
    font-weight: 400;
    padding: 20px 0 20px 25px;
    cursor: pointer;
    color: #595959;
}

.fa-plus-circle {
    padding-right: 3px;
    font-size: 18px;
    vertical-align: bottom;
}

</style>
