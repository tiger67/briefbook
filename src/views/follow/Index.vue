<template>
  <div class="container follow-page">
    <div class="row">
      <div class="aside">
        <f-nav/>
      </div>
      <div class="r-mian">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.follow-page {
    .row {
        padding-top: 30px;
    }
    .aside {
        position: fixed;
        top: 0;
        bottom: 0;
        margin: 86px 0 0;
        padding: 0 0 30px;
        width: 280px;
        overflow: auto;
        border-right: 1px solid #f0f0f0;
    }
    @media (max-width: 1092px) {
        .aside {
            width: 218.75px;
        }
    }
    .r-mian {
        margin-left: 33.33333%;
        width: 66.66666%;
        min-height: 700px;
    }
}

</style>
<script>
import FNav from "./nav/Index"
export default {
  data() {
    return {
      value: 2,
    }
  },
  components: {
    FNav
  },
  mounted() {

  },
  methods: {

  },

}

</script>
