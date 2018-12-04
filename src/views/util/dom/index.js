function toggleClick(btn, yescb, nocb) {
  var isopen = false;
  var body = document.body || document.getElementsByTagName("body")[0];

  function contains(node, parentNode) {
    if (!parentNode) {
      return false;
    }
    var flag = (node == parentNode);
    if (!flag) {
      if (parentNode.contains) {
        return parentNode.contains(node);
      }
      while (node.parentNode && node.parentNode != body) {
        node = node.parentNode
        if (node == parentNode) {
          flag = true
          break;
        }
      }
    }
    return flag;
  }

  function domclick(e) {
    if (!isopen && contains(e.target, btn)) {
      isopen = true;
      yescb();
    } else {
      if (isopen) {
        isopen = false;
        nocb();
      }
    }
  }
  body.addEventListener("click", domclick)
  return function() {
    body.removeEventListener("click", domclick)
  }
}


export default {
  toggleClick: toggleClick
}
