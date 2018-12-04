<template>
  <div class="flw-friends-list">
    <ul>
      <unit v-for="(item,index) in lists" :unit="item" :key="index"></unit>
      <p-loadmore v-show="lists.length" @click="loadData(false)" />
    </ul>
  </div>
</template>
<style lang="scss">
.flw-friends-list {}

</style>
<script>
import api from "@/api/backend/follow"
import Unit from "./Unit"

export default {
  data() {
    return {
      lists: [],
      isloading: false
    }
  },
  components: {
    Unit
  },
  mounted() {
    this.loadData();
  },
  methods: {
    loadData(isreload) {
      if (this.isloading) {
        return
      }
      this.isloading = true;
      api["/friend-list"]().then(res => {
        if (isreload) {
          this.lists = res.data;
        } else {
          this.lists.splice(this.lists.length, 0, ...res.data);
        }
        this.isloading = false;
      })
    }
  },
  watch: {
    $route(to, from) {
      var to_id = to.params.id;
      var from_id = from.params.id;
      if (to_id != from_id) {
        this.loadData(true);
      }
    }
  }
}

</script>
