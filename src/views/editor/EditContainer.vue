<template>
  <div class="edit-container">
    <div class="editor-wrap" v-if="$route.params.note_id">
      <editor/>
    </div>
    <span v-else class="default">简书</span>
  </div>
</template>
<script>
import Editor from "./editor"

export default {
  data() {
    return {
      has_not_note: true
    }
  },
  components: {
    Editor
  }
}

</script>
<style lang="scss">
.edit-container {
    border: 0px solid red;
    height: 100%;
    position: relative;
    &:before {
        height: 100%;
        content: "";
        display: inline-block;
        vertical-align: middle;
        visibility: hidden;
    }
    .editor-wrap {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: #fff;
    }
    .default {
        display: inline-block;
        vertical-align: middle;
        font-size: 64px;
        color: #e6e6e6;
        text-shadow: 0 1px 0 #fff;
    }
}

</style>
