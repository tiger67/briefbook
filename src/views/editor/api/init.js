import API from "./index"
import util from "../util"
//util.clearData("books");
export default function init() {
  if (util.getData("books").length == 0) {
    API.createBook({ name: "日记本" }).then(res => {
      //console.log(res);
      API.createNote({ bookId: res.data.id, index: 0 }).then(res => {
        //console.log(res);
      })
    });
  }
}
