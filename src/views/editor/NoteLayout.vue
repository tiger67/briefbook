<template>
  <div class="ae-r">
    <note-catalog class="ae-r-l" />
    <div class="ae-r-r">
      <edit-container></edit-container>
    </div>
  </div>
</template>
<script>
import NoteCatalog from "./NoteCatalog.vue"
import EditContainer from "./EditContainer.vue"
import data from './data'
export default {
  data() {
    return {
      ...data
    }
  },
  components: {
    NoteCatalog,
    EditContainer
  }
}

</script>
