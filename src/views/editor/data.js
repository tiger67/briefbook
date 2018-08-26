let title = new Date().toLocaleDateString().replace(/\//g, '-');
const ID1 = getId();
const ID2 = getId();
const ID3 = getId();
const ID4 = getId();
const ID5 = getId();
let files = [{
    name: "日记本",
    id: ID1,
    notes: [{
      id: ID3,
      createTime: "",
      title: title,
      ispublishing: false,
      issubmited: false,
      words: 0,
      content: ""
    }]
  },
  {
    id: ID2,
    name: "随笔",
    notes: [{
      id: ID4,
      createTime: "",
      title: title,
      ispublishing: false,
      issubmited: false,
      words: 0,
      content: ""
    }, {
      id: ID5,
      createTime: "",
      title: title,
      ispublishing: false,
      issubmited: false,
      words: 0,
      content: ""
    }]
  }
];
let index = 0;
import { getId } from "./utils"
export default {
  config: {},
  index: index,
  files: files
}
