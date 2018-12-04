<template>
  <div class="notebook-p">
    <div class="editor-layout">
      <book-category class="ae-l" ref="book" />
      <div class="ae-r">
        <note-category class="ae-r-l" ref="note" />
        <div class="ae-r-r">
          <edit-container></edit-container>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import api from "./api"
api.init();
import '@/assets/font-awesome-4.7.0/css/font-awesome.css'
import BookCategory from "./BookCategory.vue"
import NoteCategory from "./NoteCategory.vue"
import EditContainer from "./EditContainer.vue"
export default {
  components: {
    BookCategory,
    NoteCategory,
    EditContainer
  }
}

</script>
<style lang="scss">
@import "./scss/Index.scss"

</style>
