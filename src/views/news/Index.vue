<template>
  <div>
    <h1>news 页面</h1>
    <div @click="add(true)">点击我+</div>
    <div @click="add(false)">点击我-</div>
    <h3 v-for="list in lists">{{list.name}}</h3>
  </div>
</template>
<script>
import cdata from "../../data.js"
export default {
  data() {
    return {

      lists: cdata.lists
    }
  },
  methods: {
    add: function(flag) {
      flag ? this.lists.push({ name: '66363636' }) : this.lists.pop();
    }
  }

}

</script>
