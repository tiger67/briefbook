<template>
  <div class="catalog-p">
    <a @click.prevent="" class='file-create-btn'>
 	<i class='fa fa-plus-circle'></i>新建文章
 </a>
    <ul class='file-lists'>
      <li class="file-lists-line" v-for="(n,i) in notes" :key="i" :class="{active:index==i}" @click="select(i)">
        <i class="file-icon"></i>
        <div class="set-btn"></div>
        <span class="title">{{n.title}}</span>
        <span class="sub-title">{{n.sub_title}}</span>
        <span class="tip-msg">字数：{{n.words}}</span>
      </li>
    </ul>
    <a @click.prevent="" class="file-create-btn-b">
    	<i class="fa fa-plus"></i>
    	在下方创建文章
    </a>
  </div>
</template>
<script>
import cdata from "./data"
export default {
  data() {
    return {
      notes: [],
      index: 0
    }
  },
  methods: {
    select: function(i) {
      this.index = i;

    }
  },
  mounted: function() {
    setTimeout(() => {
      let params = this.$route.params;
      console.log(this.$route);
      console.log(this.$router);
      if (!params.note_id) {}
    }, 300)
  },

  watch: {
    '$route': function(to, from) {
      //console.log(to)
      //return;
      if (to !== from) {
        if (to.params.note_id) {
          //console.log("0000000000000000")
          return;
        }
        let i = 0;
        for (; i < cdata.files.length; i++) {
          let file = cdata.files[i];
          if (file.id == to.params.book_id) {
            this.notes = file.notes;
            if (file.notes.length > 0) {
              let url = to.fullPath + "/notes/" + file.notes[0].id;
              this.$router.push(url)
            }
          }
        }
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
