<template>
  <ul class="s-nav" @mouseenter="enter(true)" @mouseleave="enter(false)">
    <li v-for="nav in navlists">
      <nav-line></nav-line>
    </li>
  </ul>
</template>
<script>
import NavLine from "./NavLine"
export default {
  props: {

  },
  data() {
    return {
      navlists: [
        { icon: "", text: "", url: "" },
        { icon: "", text: "", url: "" },
        { icon: "", text: "", url: "" },
        { icon: "", text: "", url: "" },
        { icon: "", text: "", url: "" },
        { icon: "", text: "", url: "" },
      ]
    }
  },
  components: {
    NavLine
  },
  methods: {
    enter: function(flag) {
      console.log("hover");
      console.log(flag);
    }
  }
}

</script>
<style>
.s-nav {
  position: absolute;
  height: auto;
  width: 200px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .1);
  padding: 5px 0;
  background-color: #fff;
}

</style>
