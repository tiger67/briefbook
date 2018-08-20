<template>
  <div class="app-share-box">
    <router-link to="/app-download">
      <img src="../../assets/home/code/td-code.png" class="td-code">
      <div class='app-share-text'>
        <h4 class='title'>下载简书手机App<i class="iconfont ic-link"></i></h4>
        <span class="desc">随时随地发现和创作内容</span>
      </div>
    </router-link>
  </div>
</template>
<style>
.app-share-text>.desc {
    margin-top: 4px;
    font-size: 13px;
    color: #999;
}

.app-share-text>.title {
    font-size: 15px;
    font-weight: 500;
    color: #333;
}

.app-share-text {
    display: inline-block;
    vertical-align: middle;
    margin-left: 7px;
}

.app-share-box {
    margin-bottom: 30px;
    padding: 10px 22px;
    width: 100%;
    border: 1px solid #f0f0f0;
    border-radius: 6px;
    background-color: #fff;
}

.td-code {
    width: 60px;
    height: 60px;
    opacity: .85;
    vertical-align: middle;
}

</style>
