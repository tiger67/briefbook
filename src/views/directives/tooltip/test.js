function getLength(str) {
  if (/[0-9a-z|\s]/i.test(str)) {
    return str.match(/[0-9a-z|\s]/ig).length;
  }
  return 0;
}

function getLength2(str) {
  if (/[\u4e00-\u9fa5]/i.test(str)) {
    return str.match(/[\u4e00-\u9fa5]/g).length;
  }
  return 0;
}

var len = getLength2("时间的话 卡 萨sk")
console.log(len);
var gg = "88888"
var g = new Function("gg", "console.log(gg)");
g(gg)
