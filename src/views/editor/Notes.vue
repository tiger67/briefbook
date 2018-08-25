<template>
  <div class="ae-r">
    <catalog class="ae-r-l" />
    <router-view class="ae-r-r"></router-view>
  </div>
</template>
<style>


</style>
<script>
import Catalog from "./Catalog.vue"
export default {
  data() {
    return {

    }
  },
  components: {
    Catalog
  },
  watch: {
    '$route': function(to, from) {
      console.log(to);

    }
  }


}

</script>
