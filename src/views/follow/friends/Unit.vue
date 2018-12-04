<template>
  <li class="unit" :class="{'hasimg':unit.img}">
    <a href="javascript:void(0)" class="img-wrp"><img v-if="unit.img" :src="unit.img"></a>
    <div class="content">
      <div class="author">
        <img :src="unit.author" alt="">
        <span class='info'>
            <a href="javascript:void(0)">{{unit.name}}</a>
            <span>发表了文章 · {{unit.publishTime}}小时前</span>
        </span>
      </div>
      <router-link :to="`/article/${unit.id}`" class='title'>{{unit.title}}</router-link>
      <div class='abstract'>{{unit.abstract}}</div>
      <div class="meta">
        <span v-if="unit.oauthor" class="oauthor">{{unit.oauthor}}</span>
        <a href="javascript:void(0)" target='_blank'>
            <i class="iconfont ic-list-comments"></i>
            {{unit.comments}}
        </a>
        <span>
        <i class='iconfont ic-list-like'></i>
        {{unit.likes}}</span>
        <span v-if='unit.money'>
            <i class="iconfont ic-list-money"></i>
            {{unit.money}}
        </span>
      </div>
    </div>
  </li>
</template>
<style lang="scss">
.unit {
    position: relative;
    width: 100%;
    margin: 0 0 15px;
    padding: 15px 2px 20px 0;
    border-bottom: 1px solid #f0f0f0;
    word-wrap: break-word;
    line-height: 20px;
    .img-wrp {
        position: absolute;
        top: 50%;
        margin-top: -60px;
        right: 0;
        width: 125px;
        height: 100px;
        img {
            width: 100%;
            height: 100%;
            border-radius: 4px;
            border: 1px solid #f0f0f0;
        }
    }
    &.hasimg {
        min-height: 140px;
        .content {
            margin-right: 140px;
        }
    }
    .content {
        .author {
            margin-bottom: 14px;
            font-size: 13px;

            img {
                width: 24px;
                height: 24px;
                display: inline-block;
                vertical-align: middle;
                cursor: pointer;
                border-radius: 50%;
                margin-right: 5px;
            }
            .info {
                display: inline-block;
                vertical-align: middle;
                span {
                    padding-left: 3px;
                    color: #969696;
                    line-height: 20px;
                }
            }
        }
        .title {
            margin: -7px 0 4px;
            display: inherit;
            font-size: 18px;
            font-weight: 700;
            line-height: 1.5;
        }
        .abstract {
            margin: 0 0 8px;
            font-size: 13px;
            line-height: 24px;
            color: #999;
        }
        .meta {
            padding-right: 0!important;
            font-size: 12px;
            font-weight: 400;
            line-height: 20px;
            a,
            span {
                margin-right: 10px;
                color: #b4b4b4;
            }
        }
    }
}

</style>
<script>
export default {
  props: {
    unit: Object
  }
}

</script>
