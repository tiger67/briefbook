<template>
  <div class="loading-layer" :class="{'show':show,'display':display}">
    <span class="loading-wrap">
    <svg class="load" viewBox="0 0 50 50">
      <circle class="loading" cx="25" cy="25" r="20" />
    </svg>
    <div class="load-text">{{text}}</div>
    </span>
  </div>
</template>
<script>
export default {
  props: {
    text: String
  },
  data() {
    return {
      show: false,
      display: false
    }
  },
  watch: {
    show(cur, old) {
      if (cur != old) {
        if (cur) {
          this.display = true;
        } else {
          setTimeout(() => {
            this.display = false;
          }, 200);
        }
      }
    }
  }
}

</script>
<style lang="scss">
.loading-layer {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 10;
    text-align: center;
    background-color: rgba(0, 0, 0, .1);
    display: none;
    opacity: 0;
    transition: opacity 0.1s;
    &.show {
        opacity: 1;
    }
    &.display {
        display: block;
    }

    &:before {
        display: inline-block;
        content: '';
        height: 100%;
        visibility: hidden;
        vertical-align: middle;
    }
    .load-text {
        color: #ea6f5a;
        font-size: 16px;
        margin: 16px 0px 10px 10px;
    }
    .loading-wrap {
        display: inline-block;
        opacity: .9;
        vertical-align: middle;
    }
    .load {
        width: 48px;
        height: 48px;
    }
    @keyframes dash {
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

    .loading {
        stroke: #ea6f5a;
        stroke-width: 5;
        fill: none;
        animation: dash .75s cubic-bezier(.645, .045, .355, 1) infinite;
        will-change: stroke-dasharray, stroke-dashoffset
    }
}

</style>
