import Mock from 'mockjs'
import axios from 'axios'
var url = "/friend-list";
var sum = 8;
Mock.mock(url, 'post', function(ops) {
  var random = Mock.Random;
  var data = [];
  var i = sum;
  while (i--) {
    var tempobj = {
      'id': 1,
      name: random.cname(1, 5),
      title: random.ctitle(3, 30),
      abstract: random.cparagraph(4, 5),
      publishTime: random.integer(1, 12),
      author: random.image('24x24'),
      likes: random.integer(0, 30),
      comments: random.integer(0, 10),
    }
    if (random.boolean()) {
      tempobj.img = random.image('125x100')
    }
    if (random.boolean()) {
      tempobj.oauthor = random.cname(1, 5)
    }
    if (random.boolean()) {
      tempobj.money = random.integer(2, 20)
    }
    data.push(tempobj);
  }
  return data
})

var api = {};
api[url] = (id) => {
  return new Promise((resolve, reject) => {
    axios.post(url, { id: id }).then(res => {
      resolve(res);
    })
  })
}
export default api
