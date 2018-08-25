import Editor from '@/views/editor'
import Notes from '@/views/editor/Notes.vue'
import EditPanel from '@/views/editor/EditPanel.vue'

export default [{
  path: '/writer',
  name: 'Editor',
  component: Editor
}, {
  path: '/writer',
  component: Editor,
  children: [{
    path: 'notebooks/:notebook_id',
    component: Notes,
    children: [{
      path: 'notes/:note_id',
      name: 'notes',
      component: EditPanel
    }]
  }]
}]
