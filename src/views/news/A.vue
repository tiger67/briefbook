<template>
  <div>
    <h1>这是A页面</h1>
    <ul>
      <li v-for="item in list">{{item}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: ["sjsj", "666", '9999']
    }
  },
  mounted() {
    this.list.splice(1, 1, "8888");
    //this.list[1] = "8888"
  },
  methods: {

  }
}

</script>
<style lang="scss">


</style>
