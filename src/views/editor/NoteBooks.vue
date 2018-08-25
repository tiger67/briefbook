<template>
  <div class="folder-b-p">
    <div class="return-home-btn">
      <router-link to="/">回首页</router-link>
    </div>
    <div class="folder-create">
      <a class="folder-c-btn" @click.prevent.stop="iscreating=true">
          <i class="fa fa-plus"></i>
          新建文集
      </a>
      <form class="folder-from" :class='{open:iscreating}'>
        <input type="text" class='folder-name' name="foldername" v-model='foldername'>
        <button class='f-btn  f-submit-btn' @click.prevent.stop="createFolder">提 交</button>
        <button class='f-btn f-cancel-btn' @click.prevent.stop="iscreating=false">取 消</button>
      </form>
    </div>
    <div class="folder-lists">
      <router-link class='folder-line' v-for="(f,i) in data&&data.files" :to="{path:`/writer/notebooks/${f.id}/notes/${f.notes[0].id}`}" :key="i" :title='f.name'>
        <span>{{f.name}}</span>
      </router-link>
    </div>
    <div class='config-set-panel'>
    </div>
    <div class="problem-btn"></div>
  </div>
</template>
<script>
import { getId } from './utils'
import data from './data';
export default {
  data() {
    return {
      data: null,
      foldername: '',
      iscreating: false
    }
  },
  mounted: function() {
    setTimeout(() => {
      this.data = data;
      this.$router.push(`/writer/notebooks/${this.data.files[0].id}`);
    }, 300)
  },
  methods: {
    createFolder(name) {
      let defaulTitle = new Date().toLocaleDateString().replace(/\//g, '-');
      let bookId = getId();
      let noteId = getId();
      let localholder = {
        id: bookId,
        name: this.foldername,
        notes: [{
          id: noteId,
          createTime: new Date(),
          title: defaulTitle,
          ispublishing: false,
          issubmited: false,
          words: 0
        }]
      }
      this.iscreating = false;
      let d = this.data;
      setTimeout(() => {
        d.files.unshift(localholder);
        this.foldername = '';
        d.index = 0;
        this.$router.push(`/writer/notebooks/${bookId}/notes/${noteId}`)
      }, 300);

    },
    /* selectBook(i) { let d = this.data; d.index = i; let b = d.files[i]; b.notes.length > 0 ? this.$router.push(`/writer/notebooks/${b.id}/notes/${b.notes[0].id}`) : this.$router.push(`/writer/notebooks/${b.id}`); }
     */
  },
  watch: {
    '$route': function(to, from) {
      /* if (to !== from) { this.data.files.forEach(function(book, i) { if (book.id == to.params.book_id) { this.index = i; } }) }
       */

    }
  }


}

</script>
<style>
.folder-line.router-link-active {
    background-color: #666;
    border-left: 3px solid #ec7259;
    padding-left: 12px;
}

.folder-line>span {
    display: block;
    margin-right: 20px;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.folder-line {
    display: block;
    position: relative;
    line-height: 40px;
    list-style: none;
    font-size: 15px;
    color: #f2f2f2;
    background-color: #404040;
    padding: 0 15px;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-transition: padding .2s;
    -o-transition: padding .2s;
    transition: padding .2s;
}

.folder-lists {
    position: relative;
    z-index: 0;
    background-color: #8c8c8c;
}

.f-btn {
    position: relative;
    display: inline-block;
    text-align: center;
    height: 30px;
    line-height: 20px;
    padding: 4px 12px;
    border: 1px solid transparent;
    border-radius: 15px;
    font-size: 14px;
    font-weight: 500;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    white-space: nowrap;
    user-select: none;
    transition: all .2s cubic-bezier(.645, .045, .355, 1);
    color: #595959;
    background-color: #fff;
    border-color: transparent;
}

.f-cancel-btn {
    margin-left: 8px;
    background-color: #404040;
    border-color: transparent;
    color: #999;
}

.f-cancel-btn:hover {
    color: #ccc;
}

.f-submit-btn {
    color: #42c02e;
    border-color: #42c02e;
    margin-left: 4px;
    background-color: #404040;
}

.f-submit-btn:hover {
    color: #42c02e;
    border-color: #42c02e;
}

.folder-create {
    padding: 0 15px;
    margin-top: 20px;
    margin-bottom: 10px;
}

.folder-from {
    height: 0px;
    opacity: 0;
    margin-top: 0px;
    overflow: hidden;
    transition: all .2s ease-out;
}

.folder-from.open {
    opacity: 1;
    height: 85px;
    margin-top: 10px
}

input.folder-name {
    width: 100%;
    height: 35px;
    color: #ccc;
    background-color: #595959;
    border: 1px solid #333;
    padding: 4px 6px;
    margin-bottom: 10px;
    font-size: 14px;
    line-height: 20px;
}

.folder-c-btn {
    color: #f2f2f2;
}

.folder-c-btn:hover {
    color: #fff;
}

.folder-b-p {
    position: relative;
    overflow-y: auto;
    background-color: #404040;
    color: #f2f2f2;
    z-index: 100;
}

.return-home-btn {
    padding: 30px 18px 5px;
    text-align: center;
}

.return-home-btn>a {
    display: block;
    font-size: 15px;
    padding: 9px 0;
    color: #ec7259;
    border: 1px solid rgba(236, 114, 89, .8);
    border-radius: 20px;
    transition: border-color .2s ease-in;
}

.return-home-btn>a:hover {
    will-change: border-color;
    color: #ec7259;
    border-color: #ec7259;
}

.folder-b-p {
    position: relative;
    height: 100%;
    overflow-y: auto;
    background-color: #404040;
    color: #f2f2f2;
    z-index: 100;
}

</style>
