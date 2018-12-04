<template>
  <div class='pagecut-wrap'>
    <div class="pagecut" ref="page">
      <button @click='toggleShow(true)'>截图</button>
      <div class="exmaple">
        <p>了温柔和认可千万户人家客户福建省富家大室房闪光灯还是跟还是跟挂号费的发</p>
        <p>了温柔和认可千万户人家客户福建省富家大室房闪光灯还是跟还是跟挂号费的发</p>
        <p>了温柔和认可千万户人家客户福建省富家大室房闪光灯还是跟还是跟挂号费的发</p>
      </div>
      <div style="height:900px;">
      </div>
    </div>
    <div v-show="show" class='cut-layer'>
      <div class='cutter-container' :style="`width:${m.width}px;height:${m.height}px;left:${m.left}px;top:${m.top}px;`">
        <canvas @mousemove="move($event)" @mousedown="toggleMove($event,true)" @mouseup="toggleMove($event,false)"></canvas>
        <svg>
          <g transform="translate(0.5 0.5)">
            <path :d="`M0 0 H ${m.width-1} V ${m.height-1} H0 Z`" />
          </g>
        </svg>
        <ul class="events-list" v-resize="{'m':m}">
          <li class="p1"></li>
          <li class="p2"></li>
          <li class="p3"></li>
          <li class="p4"></li>
          <li class="p5"></li>
          <li class="p6"></li>
          <li class="p7"></li>
          <li class="p8"></li>
        </ul>
        <div class="button  catchbtn" @click='makeCatch()'>铺获</div>
        <div class="button" @click='toggleShow(false)'>取消</div>
      </div>
    </div>
  </div>
</template>
<script>
import { mouse } from "./util.js"

export default {
  data() {
    return {
      show: false,
      m: {
        left: 150,
        top: 100,
        width: 600,
        height: 360,
      },
      inMoveSate: false,
      isResizeState: false,
      isenter: false
    }
  },
  directives: {
    resize: {
      inserted(el, binding) {
        var m = binding.value && binding.value.m,
          isentering = false,
          ispressing = false,
          children = Array.prototype.slice.call(el.children);
        if (!m) {
          return
        }
        var count = 0;

        el.addEventListener("mousemove", (event) => {
          /*if (count++ % 2 != 0) { return }
           */
          if (event.target.nodeName != "LI") {
            return
          }
          if (ispressing && isentering) {
            //console.log('is耶耶耶耶耶')
            var mar = mouse.getMargin(event);
            if (!mar) return;
            var order, wh = [1, 3, 6, 8],
              w = [4, 5],
              h = [2, 7],
              targetli = event.target;
            if ((order = children.indexOf(targetli)) == -1) {
              //console.log('hasing not tag');
              return
            }
            order = order + 1;
            console.log(order);
            if (wh.indexOf(order) != -1) {
              console.log(mar);
              m.left = m.left + mar.X;
              m.top = m.top + mar.Y;
              m.width = m.width - mar.X;
              m.height = m.height - mar.Y;
            } else if (w.indexOf(order) != -1) {
              if (order == 4) {
                m.left = m.left + mar.X;
                m.width = m.width - mar.X;
              } else {
                m.width = m.width + mar.X;
              }

            } else if (h.indexOf(order) != -1) {
              if (order == 2) {
                m.top = m.top + mar.Y;
                m.height = m.height - mar.Y;
              } else {
                m.height = m.height + mar.Y;
              }

            }
          }
        })
        el.addEventListener("mousedown", () => {
          ispressing = true;
          mouse.init();
        })
        el.addEventListener("mouseup", () => {
          ispressing = false;
        })
        el.addEventListener("mouseenter", () => {
          isentering = true;
        })
        el.addEventListener("mouseleave", () => {
          if (!ispressing) {
            isentering = false;
          }
          /*isentering = false; ispressing = false;
           */
        })
      }
    }
  },
  mounted() {

  },
  methods: {
    toggleResize(e, flag) {
      if (e.target.tagName == "li") {

      }
    },

    toggleEnter() {
      this.isenter = true;
    },
    toggleShow(flag) {
      this.show = flag;
      if (flag) {
        var canvas = document.querySelector('canvas');
        var ctx = canvas.getContext('2d');
        console.log(this.$refs.page);
        var img = new Image();
        img.src = this.$refs.page.innerHTML;
        document.getElementsByTagName('body')[0].appendChild(img);
        ctx.drawImage(img, 200, 40, 100, 100);
      }
    },
    toggleMove(e, flag) {
      this.inMoveSate = flag;
      mouse.init();
    },
    move(e) {
      if (!this.inMoveSate) {
        return;
      }
      var margin = mouse.getMargin(e);
      if (margin) {
        var m = this.m
        m.left = m.left + margin.X
        m.top = m.top + margin.Y
      }
    },
    makeCatch() {},
    cut() {}
  }
}

</script>
<style lang="scss">
.cutter-container {
    position: absolute;
    border: 0px solid green;
    &:hover {
        cursor: move;
    }
    .events-list {

        li:after {
            content: '';
            pointer-events: auto;
            border: 1px solid #333;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: #fff;
            position: absolute;
        }
        $wid:-4px;
        $mrg:2px;
        $final:$wid+$mrg;
        .p2:after {
            top: $wid;
        }
        .p4:after {
            left: $wid;
        }
        .p5:after {
            right: $wid;
        }
        .p7:after {
            bottom: $wid;
        }
        .p2:after,
        .p7:after {
            left: 50%;
            cursor: n-resize;
        }
        .p4:after,
        .p5:after {
            top: 50%;
            cursor: e-resize;
        }
        .p1:after {
            top: $final;
            left: $final;
            cursor: nw-resize;
        }
        .p3:after {
            top: $final;
            right: $final;
            cursor: ne-resize;
        }
        .p6:after {
            bottom: $final;
            left: $final;
            cursor: sw-resize;
        }
        .p8:after {
            bottom: $final;
            right: $final;
            cursor: se-resize;
        }
    }
    svg {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        path {
            stroke-dasharray: 4;
            fill: transparent;
            stroke: #333;
        }
    }
    canvas {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        border: 0px dashed red;
        background: rgba(255, 255, 255, 1);
    }

    .button {
        position: absolute;

        background-color: #fff;
        bottom: -37px;
        right: 0px;
        padding: 5px 13px;
        border-radius: 3px;
        cursor: pointer;
        &.catchbtn {
            background-color: #3385ff;
            color: #fff;
            right: 63px;
        }
    }
}

.cut-layer {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, .5);
    z-index: 100;
}

.pagecut-wrap {
    /* position: absolute;
    left: 0px;
    right: 0px;
    top: 0;
    height: 100%;
    overflow: auto;
    border: 0px solid green; */
}

.pagecut {
    border: 0px solid red;

    position: absolute;
    padding-top: 70px;
    left: 0px;
    right: 0px;
    top: 0;
    max-height: 100%;
    overflow: auto;
    z-index: 50;
    button {
        margin-left: 100px;
    }
    .exmaple {
        margin: 100px auto;
        width: 900px;
    }
}

</style>
