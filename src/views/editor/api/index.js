import bookapi from "./book"
import noteapi from "./note"
import init from "./init"

export default {
  ...bookapi,
  ...noteapi,
  init
}
