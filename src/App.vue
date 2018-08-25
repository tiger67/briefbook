<template>
  <transition name="fade" mode="out-in">
    <router-view></router-view>
  </transition>
</template>
<script>
export default {
  name: 'App'
}

</script>
<style>
.app-container {
    border: 1px solid red;
    height: 100%;
}

.fade-enter-active,
.fade-leave-active {
    /* transition: all .2s ease; */
}

.fade-enter,
.fade-leave-active {
    /*  opacity: 0; */
}

</style>
