<template>
  <div style="height:2500px">
    <h1>follow页面</h1>
    <h3 v-for="list in lists">{{list.name}}</h3>
  </div>
</template>
<script>
import data from "data"

export default {
  data() {
    return {
      lists: data.lists
    }
  },
  mounted() {
    console.log(data);
  }
}

</script>
