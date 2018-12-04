<template>
  <div style="height:2500px" class="container">
    <h1>follow页面</h1>
    <input type="text" v-model="d.name">
    <input type="text" v-model="test">
    <div class="box">
      <span class="load"></span>
    </div>
    <div class="svg-box">
      <!-- <svg class="load" viewBox="0 0 50 50">
        <circle class="myloading" cx="25" cy="25" r="20" />
      </svg>
      <svg width="400" height="300" viewBox="4,3,40,30" style="border:1px solid #cd0000;">
        <rect x="14" y="8" width="20" height="15" fill="#cd0000" />
      </svg> -->
      <mysvg />
      <mysvg2 />
    </div>
  </div>
</template>
<script>
import d from "../news/data"
import ld from "./data"
import mysvg from "./mysvg"
import mysvg2 from "./svg"
export default {
  data() {
    return {
      d,
      test: ""
    }
  },
  components: {
    mysvg,
    mysvg2
  },
  mounted() {
    if (ld.$this) {
      console.log(ld.$this)
      this.test = ld.$this.test
    }
    ld.$this = this;
    // ld.$this.test = 10000;
    //console.log(111111)
  }
}

</script>
<style lang="scss">
.svg-box {
    margin: 20px;
    padding: 50px;
    .load {
        width: 40px;
        height: 40px;
    }
    @keyframes dash2 {
        0% {
            stroke-dasharray: 1, 151;
            stroke-dashoffset: 0
        }
        50% {
            stroke-dasharray: 89, 151;
            stroke-dashoffset: -35
        }
        to {
            stroke-dasharray: 89, 151;
            stroke-dashoffset: -124
        }
    }
    .myloading {
        stroke: #ea6f5a;
        stroke-width: 3.5;
        fill: none;
        /* stroke-width: 5;
        stroke-miterlimit: 10;
        stroke-dasharray: 1, 151;
        stroke-dashoffset: 0;
        stroke-linecap: round; */
        animation: dash2 .8s linear infinite;
        /*  animation: dash 1.5s cubic-bezier(.645, .045, .355, 1) infinite; */
        /* will-change: stroke-dasharray, stroke-dashoffset */
    }
}

.box {
    padding: 100px 100px 0;
    @keyframes lod {
        from {
            transform: rotate(0)
        }
        to {
            transform: rotate(1turn)
        }
    }
    .load {
        display: inline-block;
        width: 40px;
        height: 40px;
        position: relative;
        border: 3px solid green;
        border-radius: 50%;
        border-bottom-color: transparent;
        animation: lod .8s infinite linear;
        &:after {
            display: block;
            position: absolute;
            content: "";
            width: 0px;
            height: 0px;
            left: -3px;
            top: -3px;
            border: 20px solid #fff;
            opacity: 1;
            border-left-color: transparent;
            border-top-color: transparent;
            border-bottom-color: transparent;
        }
    }
}

</style>
