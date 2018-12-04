<template>
  <div class="flw-friends-list">
    <ul>
      <unit v-for="(item,index) in lists" :unit="item" :key="index"></unit>
      <p-loadmore v-show="lists.length" @click="loadData" />
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
    loadData() {
      if (this.isloading) {
        return
      }
      this.isloading = true;
      api["/friend-list"]().then(res => {
        this.lists.splice(this.lists.length, 0, ...res.data);
        this.isloading = false;
      })
    }
  }
}

</script>
