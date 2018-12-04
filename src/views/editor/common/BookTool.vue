<template>
  <pop-tool>
    <li v-for="(a,index) in arr" @click="run(index)">
      <i class="fa" :class="a.icon"></i> {{a.msg}}
    </li>
  </pop-tool>
</template>
<script>
import PopTool from "./PopTool"
var arr = [
  { msg: "修改文集", icon: "fa-pencil-square-o" },
  { msg: "删除文集", icon: "fa-trash-o" },
]
export default {
  props: {
    ops: Object
  },
  data() {
    return {
      arr
    }
  },
  components: {
    PopTool
  },
  methods: {
    run(index) {
      if (this.ops && this.ops[index]) {
        this.ops[index]();
      }
    }
  }
}

</script>
