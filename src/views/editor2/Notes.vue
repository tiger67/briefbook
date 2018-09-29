<template>
  <div class="ae-r">
    <catalog class="ae-r-l" />
    <router-view class="ae-r-r"></router-view>
  </div>
</template>
<script>
import Catalog from "./Catalog.vue"
import data from './data'
export default {
  data() {
    return {
      ...data
    }
  },
  components: {
    Catalog
  },

}

</script>
