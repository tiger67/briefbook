function empty() {
  if (!this.isvertify) {
    return
  }
  if (this.value == "") {
    this.isvertify = false;
    this.msg = `请输入${this.name}`;
    return false;
  } else {
    this.isvertify = true;
    return true;
  }
}

function mobile() {
  if (!this.isvertify) {
    return
  }
  if (!/^[1][3,4,5,7,8][0-9]{9}$/.test(this.value)) {
    this.isvertify = false;
    this.msg = "手机号格式错误"
    return false;
  } else {
    this.isvertify = true;
    return true;
  }
}

async function nickname() {
  if (this.isvertify) {
    var nickName = this.value;
    //var res = await API["get/api/u/checkNickName"]({ nickName });
    if (nickName == "klt") {
      var res = {
        data: {
          code: 1114,
          msg: "昵称 已被使用，换一个吧"
        }
      }
    } else {
      var res = {
        data: {
          code: 0,
          msg: ""
        }
      }
    }
    if (res.data.code !== 0) {
      this.isvertify = false;
      this.msg = res.data.msg;
      return false;
    } else {
      this.isvertify = true;
      return true;
    }
  }
}

function mobile1() {
  if (this.isvertify) {
    var mobile = this.value;
    //var res = await API["get/api/u/checkMobile"]({ mobile, type: 1 });
    if (mobile == "15813390656") {
      var res = {
        data: {
          code: -1,
          msg: "手机号已注册"
        }
      }
    } else {
      var res = {
        data: {
          code: 0,
          msg: "手机号有效"
        }
      }
    }
    if (res.data.code !== 0) {
      this.isvertify = false;
      this.msg = res.data.msg;
      return false;
    } else {
      this.isvertify = true;
      return true;
    }
  }
}

function mobile2() {
  if (this.isvertify) {
    var mobile = this.value;
    //var res = await API["get/api/u/checkMobile"]({ mobile, type: 2 });
    if (mobile == "15813390656") {
      var res = {
        data: {
          code: -1,
          msg: "手机号已注册"
        }
      }
    } else {
      var res = {
        data: {
          code: 0,
          msg: "手机号有效"
        }
      }
    }
    if (res.data.code !== 0) {
      this.isvertify = false;
      this.msg = res.data.msg;
      return false;
    } else {
      this.isvertify = true;
      return true;
    }
  }
}

function mobile3() {
  console.log("running 3333")
  if (this.isvertify) {
    var mobile = this.value;

    if (mobile == "15813390000") {
      var res = {
        data: {
          code: -1,
          msg: "手机号无效"
        }
      }
    } else {
      var res = {
        data: {
          code: 0,
          msg: "手机号有效"
        }
      }
    }
    if (res.data.code !== 0) {
      this.isvertify = false;
      this.msg = res.data.msg;
      return false;
    } else {
      this.isvertify = true;
      return true;
    }
  }
}

function mobilefilter() {
  var del_mobiles = ['15813390659']
  if (this.isvertify) {
    var mobile = this.value;
    //var res = await API["get/api/u/checkMobile"]({ mobile, type: 2 });
    if (del_mobiles.indexOf(mobile) != -1) {
      this.isvertify = false;
      this.msg = "禁止使用此号码"
      return false;
    } else {
      this.isvertify = true;
      return true;
    }
  }
}


export default {
  empty,
  mobile,
  nickname,
  mobile1,
  mobile2,
  mobile3,
  mobilefilter
}
