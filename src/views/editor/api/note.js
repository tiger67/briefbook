import util from "../util"
import Promise from "Promise"
import bookapi from "./book"

const findNotes = ({ bookId }) => {
  return new Promise(resolve => {
    var notes = util.getData("notes");
    var filter = notes.filter(note => {
      return note.bookId == bookId
    })
    //console.log(filter)
    util.success(resolve, { data: filter })
  })
}

const createNote = ({ bookId, index }) => { //index(0:最开始,-1最末尾)
  return new Promise((resolve, reject) => {
    var notes = util.getData("notes");
    let defaulTitle = util.getDate();
    let noteId = util.getId();
    var note = {
      bookId,
      id: noteId,
      createTime: new Date(),
      title: defaulTitle,
      ispublishing: false,
      issubmited: false,
      words: 0,
      content: ''
    }
    bookapi.findBook({ bookId }).then(res => {
      //console.log(res);
      if (res.data.length == 1) {
        if (index == -1) {
          notes.push(note);
        } else {
          notes.splice(index, 0, note);
        }
        util.storageData("notes", notes);
        util.success(resolve, { data: note })
      } else {
        util.error(resolve, { data: null });
      }
    })
  })
}
const updateNote = ({ note }) => {
  return new Promise((resolve, reject) => {
    var notes = util.getData("notes");
    var blen = notes.length;
    for (let i = 0; i < blen; i++) {
      var n = notes[i];
      if (note.noteId == n.id) {
        var newnote = { ...n, ...note }
        if (note.bookId) {
          notes.splice(i, 1);
          notes.push(newnote);
        } else {
          notes.splice(i, 1, newnote);
        }
        util.storageData("notes", notes);
        util.success(resolve, { data: newnote });
        return;
      }
    }
    util.error(resolve, { data: null });
  })
}
const deleteNote = ({ bookId, noteId }) => {
  return new Promise((resolve, reject) => {
    var notes = util.getData("notes");
    var blen = notes.length;
    for (let i = 0; i < blen; i++) {
      var n = notes[i];
      if (noteId == n.id) {
        notes.splice(i, 1);
        util.storageData("notes", notes);
        util.success(resolve, { data: n });
        return;
      }
    }
    util.error(resolve, { data: null });
  })
}
const deleteNotes = ({ bookId }) => {
  return new Promise((resolve, reject) => {
    var notes = util.getData("notes");
    var sum = [];
    notes.forEach((n, i) => {
      if (bookId == n.bookId) {
        sum.push(notes.splice(i, 1));
      }
    });
    util.storageData("notes", notes);
    util.success(resolve, { data: sum });

  })
}
const findNote = ({ bookId }) => {
  return new Promise((resolve, reject) => {
    var notes = util.getData("notes");
    var blen = notes.length;
    for (let i = 0; i < blen; i++) {
      var n = notes[i];
      if (bookId == n.bookId) {
        util.success(resolve, { data: n });
        return;
      }
    }
    util.success(resolve, { data: null });
  })
}

const findNoteById = ({ noteId }) => {
  return new Promise((resolve, reject) => {
    var notes = util.getData("notes");
    var blen = notes.length;
    for (let i = 0; i < blen; i++) {
      var n = notes[i];
      if (noteId == n.id) {
        util.success(resolve, { data: n });
        return;
      }
    }
    util.success(resolve, { data: null });
  })
}


export default {
  findNotes,
  createNote,
  updateNote,
  deleteNote,
  findNote,
  findNoteById,
  deleteNotes
}
