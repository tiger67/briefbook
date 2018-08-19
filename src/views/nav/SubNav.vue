<template>
  <ul class="s-nav">
    <li v-for="nav in lists">
      <nav-line></nav-line>
    </li>
  </ul>
</template>
<script>
import cdata from "../../data.js"
import NavLine from "./NavLine"
export default {
  props: {

  },
  data() {
    return {
      lists: cdata.lists,
      navlists: [

      ]
    }
  },
  components: {
    NavLine
  },
  methods: {

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
    left: 0;
    top: 56px;
}

</style>
