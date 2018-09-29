<template>
  <div style="height:1600px" class="news-test">
    <div class="input-box">
      <input type="text" v-mymodel="msg">
    </div>
    <h3>{{msg.info}}</h3>
    <h1>{{d.name}}</h1>
    <div @click="add(true)">点击我+</div>
    <div @click="add(false)">点击我-</div>
    <!-- <h3 v-for="list in cdata.lists">{{list.name}}</h3> -->
  </div>
</template>
<style lang="scss">
.news-test {
    .input-box {
        border: 2px solid #eee;
        padding: 20px;
    }
}

</style>
<script>
import cdata from "data"
import localdata from "./data"
import test from "./test"
//if (!cdata.lists) { cdata.lists = [] }
//console.log(cdata);
export default {
  data() {
    return {
      /*cdata: cdata
       */
      d: localdata,
      msg: { info: "" }
    }
  },
  mounted() {
    console.log(this.d);
  },
  methods: {
    add: function(flag) {
      //flag ? cdata.lists.push({ name: '66363636' }) : cdata.lists.pop()
    }
  }

}

</script>
