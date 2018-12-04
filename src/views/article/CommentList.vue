<template>
  <div class="comments-list-w">
    <div class="hd-title">
      <span ref="init">{{comments.length||0}}条评论</span>
      <div class="hd-title-r">
        <a href="javascript:void(0);" ref="getdataA" @click="putsort(0)" :class="{active:sort==0}">按照时间倒序</a>
        <a href="javascript:void(0);" ref="getdataB" @click="putsort(1)" :class="{active:sort==1}">按照时间正序</a>
      </div>
    </div>
    <!-- <paging class="comments-list-content" @getDataList="getdata" :pageSize="3"> -->
    <div class="comments-list-content">
      <comment-line v-for="(cmt,i) in comments" :key="cmt.id" :cmt="cmt" :mindex="i" />
    </div>
    <!-- </paging> -->
  </div>
</template>
<script>
import CommentLine from "./CommentLine"
import data from "./data"
export default {
  props: {},
  data() {
    return {
      sort: data.sort,
      d: data,
      comments: [{}, {}, {}, {}]
    }
  },
  components: {
    CommentLine,
  },
  mounted() {
    var id = this.$route.params.id
  },
  methods: {
    getdata({ startPage, pageSize }, cb) {},
    putsort(s) {
      if (data.sort == s) {
        return;
      }
      this.sort = s;
      data.sort = this.sort;
    }
  }
}

</script>
<style lang="scss">
.comments-list-w {
    margin-top: 40px;
    padding-bottom: 200px;
    .comments-list-content {
        /* border: 2px solid red; */
        min-height: 400px;
    }
    .hd-title {
        padding-bottom: 20px;
        font-size: 17px;
        font-weight: 700;
        /* border-bottom: 1px solid #f0f0f0; */
        span {
            vertical-align: middle;
        }
        .hd-title-r {
            float: right;
            a {
                margin-left: 10px;
                font-size: 12px;
                font-weight: 400;
                color: #969696;
                display: inline-block;
                &.active {
                    color: #222;
                }
            }
        }
    }
}

</style>
