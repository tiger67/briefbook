<template>
  <div>
    <slot/>
    <div class="tooltip-wrap">
      <div class="tooltip-error" v-for="(e ,i) in errors" :class="{'show':e.show}" :style="`left:${e.pos.left}px;top:${e.pos.top}px;`">
        <div class="tooltip-arrow tooltip-arrow-border" style="top: 50%;"></div>
        <div class="tooltip-arrow tooltip-arrow-bg" style="top: 50%;"></div>
        <div class="tooltip-inner"><i class="iconfont ic-error"></i>{{e.msg}}</div>
      </div>
    </div>
  </div>
</template>
<script>
import data from "./data"

export default {
  data() {
    return {
      errors: []
    }
  },
  mounted() {
    setTimeout(() => {
      this.errors = data.data.els.map(el => {
        //console.log(el.error);
        return el.error;
      })

    }, 1000);
  },
  methods: {
    vertify() {
      return
      this.errors.every(function(error) {
        return error.isvertify
      })
    }
  },
  destroyed() {
    data.destory();
  }
}

</script>
<style lang="scss">
.tooltip-wrap {
    position: absolute;
    left: 0;
    top: 0;
}

.tooltip-error {
    font-size: 14px;
    line-height: 25px;
    white-space: nowrap;
    background: none;
    border-radius: 4px;
    text-align: center;
    position: absolute;
    margin-left: 3px;
    padding: 0 5px;
    text-align: start;
    text-decoration: none;
    text-shadow: none;
    text-transform: none;
    display: none;
    &.show {
        display: block;
        opacity: .9;
    }
    .tooltip-arrow {
        position: absolute;
        width: 0;
        height: 0;
        border-color: transparent;
        border-style: solid;
        left: 0;
        margin-top: -5px;
        border-width: 5px 5px 5px 0;
    }
    .tooltip-arrow-bg {
        left: 2px;
        border-right-color: #fff;
    }
    .tooltip-arrow-border {
        border-right-color: #ea6f5a;
    }
    .tooltip-inner {
        max-width: 280px;
        color: #333;
        border: 1px solid #ea6f5a;
        background-color: #fff;
        padding: 5px 10px;
        border-radius: 4px;
        i {
            position: static;
            margin-right: 5px;
            font-size: 20px;
            color: #ea6f5a;
            vertical-align: middle;
        }
    }
}

</style>
