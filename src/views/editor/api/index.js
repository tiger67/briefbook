import data from './data'
import util from "../util"
import Promise from "Promise"

const findBooks = () => {
  return new Promise((resolve) => {
    resolve({ code: 0, data: [...data.books] });
  })
}
const findNotes = ({ bookId }) => {
  return new Promise(resolve => {
    data.books.forEach(b => {
      if (b.id == bookId) {
        util.success(resolve, { data: [...b.notes] })
      }
    })
  })
}

const createBook = ({ name }) => { //{name}
  return new Promise((resolve, reject) => {
    let bookId = util.getId();
    let book = {
      id: bookId,
      name: name,
      notes: []
    }
    data.books.unshift(book);

    util.success(resolve, { data: book })
  })

}

const createNote = ({ bookId, index }) => { //index(0:最开始,-1最末尾)
  return new Promise((resolve, reject) => {
    let defaulTitle = util.getDate();
    let noteId = util.getId();
    var note = {
      id: noteId,
      createTime: new Date(),
      title: defaulTitle,
      ispublishing: false,
      issubmited: false,
      words: 0
    }
    var handle = false;
    data.books.forEach(b => {
      if (bookId == b.id) {
        handle = true;
        if (index == -1) {
          b.notes.push(note)
        } else {
          b.notes.splice(index, 0, note);
        }
      }
    })
    handle ? util.success(resolve, { data: note }) : util.error(resolve, { data: null });
  })
}

const updateNote = ({ bookid, title }) => {

}
export default {
  findBooks,
  findNotes,
  createBook,
  createNote
}
