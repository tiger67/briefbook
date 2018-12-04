<template>
  <div class="toolwrap">
    <i class="fa fa-gear" v-toggle="{toggleOpen}"></i>
    <ul class="toolop" v-show="show">
      <slot />
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
    }
  },
  methods: {
    toggleOpen(flag) {
      this.show = flag
    }
  }
}

</script>
<style lang="scss">
.toolwrap {
    float: right;
    font-size: 16px;
    width: 40px;
    text-align: center;
    position: relative;
    min-height: 30px;
    max-height: 50px;
    .toolop {
        background: #fff;
        position: absolute;
        z-index: 99;
        right: 0;
        box-shadow: 0 5px 10px rgba(0, 0, 0, .2);
        list-style: none;
        background-color: #fff;
        color: #595959;
        border-radius: 6px;
        font-size: 14px;
        top: 100%;
        &:after {
            border-left: 9px solid transparent;
            border-right: 9px solid transparent;
            border-bottom: 9px solid #fff;
            top: -9px;
            position: absolute;
            right: 12px;
            content: "";
            display: inline-block;
            z-index: 20;
        }
        li {
            padding: 10px 20px;
            line-height: 20px;
            white-space: nowrap;
            text-align: left;
            position: relative;
            border-bottom: 1px solid #d9d9d9;
            i {
                margin-right: 2px;
            }
            &:hover {
                background-color: #666;
                color: #fff;
            }
            &:first-child {
                border-radius: 4px 4px 0 0;
            }
            &:last-child {
                border-radius: 0 0 4px 4px;
                border-bottom: none;
            }
        }
    }
}

</style>
