<template>
  <div class='editor'>
    <span class="save-tip">已保存</span>
    <div>
      <input type="text" class="title" value="2018-09-23">
      <ul class="editor-tool-wrap clearfix">
        <li class="sp-fr send-btn">
          <a href="javascript:void(0)">
        	<i class="fa fa-mail-forward"></i>
        	发布文章
        </a>
        </li>
        <li> <a href="javascript:void(0)" class="fa fa-bold has-sub"></a>
          <ul class="sub-tool">
            <li><a href="javascript:void(0)" class="fa fa-bold"></a></li>
            <li><a href="javascript:void(0)" class="fa fa-italic"></a></li>
            <li><a href="javascript:void(0)" class="fa fa-strikethrough"></a></li>
            <li><a href="javascript:void(0)" class="fa fa-quote-left"></a></li>
          </ul>
        </li>
        <li> <a href="javascript:void(0)" class="fa fa-picture-o"></a></li>
        <li> <a href="javascript:void(0)" class="fa fa-undefined has-sub">H1</a>
          <ul class="sub-tool">
            <li><a href="javascript:void(0)" class="fa fa-undefined">H1</a></li>
            <li><a href="javascript:void(0)" class="fa fa-undefined">H2</a></li>
            <li><a href="javascript:void(0)" class="fa fa-undefined">H3</a></li>
            <li><a href="javascript:void(0)" class="fa fa-undefined">H4</a></li>
          </ul>
        </li>
        <li>
          <!-- <a href="javascript:void(0)" class="fa fa-undefined">—</a> -->
          <ul>
            <li><a href="javascript:void(0)" class="fa fa-undefined">—</a></li>
            <li><a href="javascript:void(0)" class="fa fa-link"></a></li>
            <li><a href="javascript:void(0)" class="fa fa-youtube-play"></a></li>
          </ul>
        </li>
        <li>
          <a href="javascript:void(0)" class="fa fa-undo has-sub"></a>
          <ul class="sub-tool">
            <li><a href="javascript:void(0)" class="fa fa-undo"></a></li>
            <li><a href="javascript:void(0)" class="fa fa-repeat"></a></li>
          </ul>
        </li>
        <li> <a href="javascript:void(0)" class="fa fa-clock-o"></a></li>
        <li class="sp-fr"> <a href="javascript:void(0)" class="fa fa-expand"></a></li>
        <li class="sp-fr"> <a href="javascript:void(0)" class="fa fa-floppy-o"></a></li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss">
@import "./index.scss"

</style>
