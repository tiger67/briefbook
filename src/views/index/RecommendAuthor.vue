<template>
  <div class="home-cmd-user">
    <div class="hcu-hd"></div>
    <ul>
      <li class="cmd-author-line">
        <router-link class="avatar" to='/404'>
          <img src="" />
        </router-link>
        <div class="author-info"></div>
        <a herf="javascript:void(0);" @click.prevent="follow" class="cmd-a-op">
            <i class="iconfont ic-follow"></i>
               关注
               </a>
      </li>
    </ul>
  </div>
</template>
<style>


</style>
<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    follow: function() {

    }
  }
}

</script>
