<template>
  <div class="flw-subs-con">
    <f-head />
    <page-switch />
  </div>
</template>
<style lang="scss">
.flw-subs-con {}

</style>
<script>
import api from "@/api/backend/follow"
import FHead from "./Head"
import PageSwitch from "./PageSwitch"
/*import Collection from "./Collection" import Comments from "./Comments" import Hot from "./Hot"
*/

export default {
  components: {
    FHead,
    PageSwitch,
    /*"page-switch":{ render(_){ } }
*/
  },
  mounted() {},
  methods: {},

}

</script>
