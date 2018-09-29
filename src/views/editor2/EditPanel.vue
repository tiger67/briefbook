<template>
  <div>
    <h1 v-if="has_not_note">default</h1>
    <div v-else>
      <h1>editor</h1>
    </div>
  </div>
</template>
<style>


</style>
<script>
export default {
  data() {
    return {
      has_not_note: true
    }
  },
  mounted: function() {
    console.log(this.$route)
  },
  watch: {
    '$route': function(to, from) {
      if (to !== from) {
        if (to.params && to.params.note_id) {
          this.has_not_note = false;
        }
      }
    }
  }

}

</script>
