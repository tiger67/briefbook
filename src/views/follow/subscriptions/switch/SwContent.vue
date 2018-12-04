<template>
  <div class="switch-content">
    <component
 v-bind:is="comp"></component>
  </div>
</template>
<style lang="scss">
.switch-comp {
    .switch-content {
        padding-top: 30px;
    }
}