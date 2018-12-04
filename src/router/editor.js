const Editor = resolve => require(['@/views/editor'], resolve);

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
