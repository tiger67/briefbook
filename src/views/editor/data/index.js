import utils from "../utils"
let index = 0;
let title = utils.getDate();
const ID1 = utils.getId();
const ID2 = utils.getId();
const ID3 = utils.getId();
const ID4 = utils.getId();
const ID5 = utils.getId();
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

export default {
  config: {},
  index: index,
  files: files
}
