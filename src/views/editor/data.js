import getId from "./utils"
export default {
  config: {},
  getId,
  files: [{
      name: "日记本",
      id: getId(),
      filesLists: [{
        createTime: "",
        title: "",
        ispublishing: false,
        issubmited: false
      }]
    },
    {
      id: getId(),
      name: "随笔",
      filesLists: [{
        createTime: "",
        title: "",
        ispublishing: false,
        issubmited: false
      }]
    }
  ]
}
