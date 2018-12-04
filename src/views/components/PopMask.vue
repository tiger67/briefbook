<template>
  <div class="pop-mask">
    <slot></slot>
  </div>
</template>
<style lang="scss">
.pop-mask {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
    background-color: rgba(0, 0, 0, .3);
    text-align: center;
    &:before {
        display: inline-block;
        content: '';
        height: 85%;
        vertical-align: middle;
    }
}

</style>
