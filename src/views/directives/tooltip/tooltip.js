import { addClasses, removeClasses, getLength } from "./utils"

function merge(node, pos, el, content) {
  var tel = el;
  return {
    el: node,
    pos: pos,
    show() {
      var position = getposition(tel, this.pos, content);
      this.el.style.top = position.top + "px";
      this.el.style.left = position.left + "px";
      var nclass = `ant-in-${this.pos}`;
      addClasses(this.el, `ant-in-${this.pos}`);
      removeClasses(this.el, `ant-tooltip-hidden`);
      setTimeout(() => {
        removeClasses(this.el, `ant-in-${this.pos}`);
      }, 300)
    },
    hide() {
      addClasses(this.el, 'ant-tooltip-hidden');
    },
    destory() {
      var Node = this.el.parentNode.parentNode;
      Node.parentNode.removeChild(Node);
    }
  }
}

function getposition(el, pos, content) {
  var position, rect = el.getBoundingClientRect(),
    scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
  if (pos == "right") {
    position = {
      left: rect.right + 5,
      top: scrollTop + rect.top + (rect.height - 34) / 2
    }
  } else if (pos == "top") {
    var clen = content.length,
      len = getLength(content)
    position = {
      left: rect.left + (rect.width - (len * 7 + clen * 7 + 16)) / 2,
      top: scrollTop + rect.top - 45
    }
  } else if (pos == "bottom") {
    var clen = content.length,
      len = getLength(content)
    position = {
      left: rect.left + (rect.width - (len * 7 + clen * 7 + 16)) / 2,
      top: scrollTop + rect.bottom + 5
    }
  } else {
    var clen = content.length,
      len = getLength(content)
    position = {
      left: rect.left - (len * 7 + clen * 7 + 16) - 12,
      top: scrollTop + rect.top + (rect.height - 34) / 2
    }
  }
  return position;
}

function create(el, { content, pos }) {
  /*var position = {}*/
  var template = `
<div style="position: absolute;top: 0px;left: 0px;width: 100%;">
<div>
<div class="ant-tooltip ant-tooltip-placement-${pos} " 
style="left: 0px; top: 0px; transform-origin: -4px 50% 0px;">
<div class="ant-tooltip-content">
<div class="ant-tooltip-arrow"></div>
<div class="ant-tooltip-inner">${content}</div>
</div>
</div>
</div>
</div>
`;
  var div = document.createElement("div");
  div.innerHTML = template.trim();
  var conNode = div.children[0]
  var tooltipNode = conNode.children[0].children[0];
  el.tooltip = merge(tooltipNode, pos, el, content);
  document.body.appendChild(conNode);
}

export default {
  create
}
