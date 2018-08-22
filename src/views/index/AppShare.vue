<template>
  <div class="app-share-box">
    <router-link to="/app-download">
      <img src="../../assets/home/code/td-code.png" class="td-code">
      <div class='app-share-text'>
        <h4 class='title'>下载简书手机App<i class="iconfont ic-link"></i></h4>
        <div class="desc">随时随地发现和创作内容</div>
      </div>
    </router-link>
    <div class="pop-prcode">
      <img class="qrcode" src="../../assets/home/code/td-code.png" />
    </div>
  </div>
</template>
<style>
.pop-prcode {
  position: absolute;
  top: -193px;
  left: 48px;
  z-index: 10;
  border: 1px solid rgba(0, 0, 0, .2);
  border-radius: 6px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, .2);
  background-color: #fff;
  display: none;
}

.app-share-box:hover .pop-prcode {
  display: block
}

.pop-prcode:after,
.pop-prcode:before {
  position: absolute;
  content: '';
  width: 0;
  height: 0;
  border-color: transparent;
  border-style: solid;
  left: 50%;
}

.pop-prcode:after {
  border-width: 10px;
  bottom: -10px;
  margin-left: -10px;
  border-bottom-width: 0;
  border-top-color: #fff;
}

.pop-prcode:before {
  border-width: 11px;
  bottom: -11px;
  margin-left: -11px;
  border-bottom-width: 0;
  border-top-color: rgba(0, 0, 0, .25);
}

.pop-prcode .qrcode {
  width: 160px;
  height: 160px;
  display: block;
  margin: 10px;
}

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
  position: relative;
}

.td-code {
  width: 60px;
  height: 60px;
  opacity: .85;
  vertical-align: middle;
}

</style>
