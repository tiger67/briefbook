<template>
  <div style="height:2500px" class="container">
    <h1>follow页面</h1>
    <h2>{{count}}</h2>
    <button @click="add(3)">add count</button>
    <br/>
    <input type="text" v-model="value">
    <br/>
    <button @click="initcount(value)">init count</button>
    <br/>
    <div class="box">
      <span class="load"></span>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations, createNamespacedHelpers } from 'vuex'
const sign = createNamespacedHelpers("sign");
export default {
  data() {
    return {
      value: 2,
    }
  },
  components: {},
  mounted() {
    console.log(this);
  },
  methods: {
    ...sign.mapMutations({
      add: "add",
      initcount: 'initcount'
    })
  },
  computed: {
    ...sign.mapState(["count"]),
    ...mapState({
      name: 'name',
    }),
    ...sign.mapGetters({
      kltgetter: "kltgetter"
    })
  }
}

</script>
<style lang="scss">
.svg-box {
    margin: 20px;
    padding: 50px;
    .load {
        width: 40px;
        height: 40px;
    }
}

.box {
    padding: 100px 100px 0;
}

</style>
