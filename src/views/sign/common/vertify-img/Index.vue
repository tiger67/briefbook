<template>
  <transition name="pop">
    <div class="mask-layer" v-if="open">
      <div class="vertify-wrap">
        <!-- <a class="close-btn" href="javascript:void(0);" >
        <i class="iconfont ic-unfollow"></i>
      </a> -->
        <div class="v-hd">
          <div class="v-hd-w">请在下图<span class="sp">依次</span>点击
          </div>
          <canvas id="codeSpace" class="code-space" width="115" height="35"></canvas>
        </div>
        <div class="img-wrap">
          <div class="img-wrap-w">
            <img :src="img" id="vtyimg" alt="">
            <div class="mark-list" @click.self="addmark">
              <div class="vertify-msg v-error" :class='{showvalid,"v-error":!isValid,"v-right":isValid}'>
                {{isValid ? "验证通过！进入下一步" : "验证有误！请重新操作"}}
              </div>
              <div class='mark' v-for="(m,i) in marks" :style="`left:${m.x-16}px;top:${m.y-16}px`">
                <span class="mark-no">{{i+1}}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="v-ft">
          <a href="javascript:void(0);" class="v-btn vfy-close-btn" @click="close"></a>
          <a href="javascript:void(0);" class="v-btn vfy-flash-btn" :class="{'geting-img':getingImg}" @click="getVartifyImg(true)"></a>
          <a href="javascript:void(0);" class="quer-btn" :class="{'active':marks.length==rightlength}" @click="imgVartify"> 确认</a>
        </div>
      </div>
      <!--  {{getimg}} -->
    </div>
  </transition>
</template>
<script>
var flag = false;
var img1 = require("./assets/code.jpg")
var img2 = require("./assets/vercode.jpg");
export default {
  data() {
    return {
      img: img1,
      open: false,
      isValid: false,
      showvalid: false,
      rightlength: 4,
      getingImg: false,
      marks: [{
        x: 40,
        y: 60
      }]
    }
  },
  mounted() {
    this.getVartifyImg();
  },
  computed: {
    /* getimg: function() { if (this.open) { this.getVartifyImg(); } } */
  },
  methods: {
    clear() {
      this.marks = [];
      this.showvalid = false;
    },
    queren() {

    },
    drawcode() {
      var c = document.querySelector("#codeSpace");
      var ctx = c && c.getContext("2d");
      var img = document.querySelector("#vtyimg");
      ctx && ctx.drawImage(img, 0, img.naturalHeight - 37, 115, 35, 0, 0, 115, 35);
    },
    addmark(e) {
      /*console.log(e); console.dir(e.target);*/
      this.marks.push({ x: e.offsetX, y: e.offsetY });
      //this.marks.push({ x: e.layerX, y: e.layerX });
    },
    close() {
      this.open = false;
      this.clear();
    },
    async imgVartify() {
      if (this.marks.length == 0) {
        return;
      }
      let code = "";
      this.marks.forEach(function(item) {
        code = code + `,${item.x}_${item.y+30}`;
      })
      code = code.slice(1);
      setTimeout(() => {
        this.isValid = this.marks.length == this.rightlength;
        this.showvalid = true;
        setTimeout(() => {
          if (this.isValid) {
            this.close();
          } else {
            this.getVartifyImg();
          }
        }, 1200)
      }, 500)

    },
    async getVartifyImg(isflash) {
      if (this.getingImg) {
        return;
      }
      if (isflash) {
        this.getingImg = true;
      }
      this.showvalid = false;
      setTimeout(() => {
        this.img = flag ? img1 : img2;
        flag = !flag;
        this.getingImg = false;
        this.marks = [];
        setTimeout(() => {
          this.drawcode();
        }, 300)
      }, 500);
    },
  }
}

</script>
<style lang="scss">
@import "./index.scss";
@keyframes rotate {
    0% {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(1turn);
    }
}

.vfy-flash-btn {
    &.geting-img {
        display: inline-block;
        animation: rotate 1s ease;
    }
}

</style>
