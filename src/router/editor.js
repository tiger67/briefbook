import Editor from '@/views/editor'
/*import Notes from '@/views/editor/Notes.vue'
import EditPanel from '@/views/editor/EditPanel.vue'
*/

export default [{
  path: '/writer',
  name: 'writer',
  component: Editor,

}, {
  path: '/writer/notebooks/:book_id',
  name: 'notebooks',
  component: Editor,
}, {
  path: '/writer/notebooks/:book_id/notes/:note_id',
  name: 'notes',
  component: Editor,
}]
