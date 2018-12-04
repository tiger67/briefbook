<template>
  <pop-tool>
    <li>
      <i class="fa fa-share"></i> 直接发布
    </li>
    <li class="sub-show-tigger" @mouseenter="getbook">
      <i class="fa fa-folder-open"></i> 移动文章
      <div class="sub-l-tool">
        <ul>
          <li v-for="b in books" :key="b.id" @click="run(1,b.id)">{{b.name}}</li>
        </ul>
      </div>
    </li>
    <li>
      <i class="fa fa-clock-o"></i> 历史版本
    </li>
    <li @click="run(3)">
      <i class="fa fa-trash-o"></i> 删除文章
    </li>
  </pop-tool>
</template>
<script>
import PopTool from "./PopTool"
export default {
  props: {
    ops: Object
  },
  data() {
    return {
      books: []
    }
  },
  components: {
    PopTool
  },
  methods: {
    run(index, bookId) {
      if (index == 1) {
        this.ops[index] && this.ops[index](bookId);
      } else {
        this.ops[index] && this.ops[index]();
      }
    },
    getbook() {
      var books = [];
      this.$emit("getBooks", books);
      this.books = books
    }
  },
}

</script>
<style lang="scss">
.sub-show-tigger {
    &:after {
        width: 0;
        height: 0;
        border-top: 5px solid transparent;
        border-bottom: 5px solid transparent;
        margin: 4px 0 0 -12px;
        float: left;
        content: "";
        border-right: 5px solid #ccc;
    }
    &:hover {
        .sub-l-tool {
            display: block;
            color: #595959;
        }
    }
    .sub-l-tool {
        display: none;
        left: 0;
        width: 0;
        top: 0;
        overflow: visible;
        position: absolute;

        ul {
            float: right;
            /* top: 0; */
            background: #fff;
            border-radius: 4px;
            box-shadow: 0 5px 10px rgba(0, 0, 0, .2);
            li {
                text-align: center;
            }
        }
    }
}

</style>
