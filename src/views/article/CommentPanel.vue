<template>
  <div class="comment-panel-wrap">
    <div class="post-comment-control">
      <div class="signin-wrap" v-if="!c.isSignIned">
        <a href="javascript:void(0)" v-signin class="btn signin-btn">登录</a>
        <span>后发表评论</span>
      </div>
      <article-reply v-else>
      </article-reply>
    </div>
    <comment-list :comments="comments" />
  </div>
</template>
<script>
import c from "data"
import CommentList from "./CommentList"
import ArticleReply from "./ArticleReply"
/*import api from "./api"
*/
import data from "./data"
export default {
  data() {
    return {
      c,
      comments: data.comments,
    }
  },
  mounted() {
    //this.commentslist();
    var id = this.$route.params.id
    //api.getcomments(id)

  },
  methods: {
    commentslist() {

    }
  },
  components: {
    CommentList,
    ArticleReply
  }
}

</script>
<style lang="scss">
.comment-panel-wrap {
    height: 500px;
    border: 0px solid red;
    .post-comment-control {
        padding-bottom: 40px;
    }
    .signin-wrap {
        height: 80px;
        margin-bottom: 50px;
        text-align: center;
        border: 1px solid #dcdcdc;
        border-radius: 4px;
        background-color: hsla(0, 0%, 71%, .1);
        &:before {
            height: 100%;
            display: inline-block;
            content: '';
            vertical-align: middle;
        }
        .signin-btn {
            display: inline-block;
            outline: none;
            border-radius: 20px;
            font-size: 16px;
            width: 78px;
            margin: 11px 10px 0 0;
            padding: 7px 18px;
            vertical-align: middle;
            color: #fff;
            /*  background-color: #ffc81f; */
            background-color: #3194d0;
            &+span {
                font-size: 14px;
                vertical-align: -7px;
            }
        }
    }
}

</style>
