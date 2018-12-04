import util from "../util"
import Promise from "Promise"
import noteapi from "./note"

const findBooks = () => {
  return new Promise((resolve) => {
    var books = util.getData("books");
    resolve({ code: 0, data: books });
  })
}
const findBook = ({ bookId }) => {
  return new Promise((resolve) => {
    var books = util.getData("books");
    var book = books.filter(book => {
      return book.id == bookId;
    })
    resolve({ code: 0, data: book });
  })
}
const createBook = ({ name }) => { //{name}
  return new Promise((resolve, reject) => {
    var books = util.getData("books");
    let bookId = util.getId();
    let book = {
      id: bookId,
      name: name
    }
    books.unshift(book);
    util.storageData("books", books);
    util.success(resolve, { data: book })
  })
}
const deleteBook = ({ bookId }) => {
  return new Promise((resolve, reject) => {
    var books = util.getData("books");
    var i = books.length;
    var hasbook = false;
    while (i--) {
      if (books[i].id == bookId) {
        hasbook = true
        break;
      }
    }
    if (hasbook) {

      noteapi.deleteNotes({ bookId }).then(res => {
        console.log(res);
        if (res.code === 0) {
          books.splice(i, 1);
          util.storageData("books", books);
          util.success(resolve, { data: books })
        }
      })
    } else {
      util.error(reject, { data: null })
    }
  })
}
const updateBook = ({ bookId, book }) => {
  return new Promise((resolve, reject) => {
    var books = util.getData("books");
    var i = books.length;
    while (i--) {
      if (books[i].id == bookId) {
        books[i] = { ...books[i], ...book };
        util.storageData("books", books);
        util.success(resolve, { data: books })
        return;
      }
    }
    util.error(reject, { data: null })
  })
}
export default {
  findBook,
  findBooks,
  createBook,
  deleteBook,
  updateBook
}
