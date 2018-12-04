import Mock from 'mockjs'
import axios from 'axios'
/*import md5 from "../md5/md5"

*/
/*
console.log(md5("1234566"))
*/
Mock.mock('/signin', function(ops) {
  //console.log(ops);
  return {
    username: "admin",
    password: "123456"
  };
})

function login(user) {
  new Promise((resolve, reject) => {
    return axios.post('/signin', user).then(function(res) {
      resolve(res);
    })
  })
}
export default {
  login
}
