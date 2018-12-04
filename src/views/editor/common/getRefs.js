var getNote = (() => {
  var $note;
  return function($this) {
    if (!$note) {
      $note = $this.$root.$children[0].$children[0].$refs.note
    }
    return $note
  }
})()
var getBook = (() => {
  var $book;
  return function($this) {
    if (!$book) {
      $book = $this.$root.$children[0].$children[0].$refs.book
    }
    return $book
  }
})()

export default {
  getNote,
  getBook
}
