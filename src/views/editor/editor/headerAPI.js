var select = (function selectCreater() {
  var editor;
  return function({ edt, node }) {
    if (!editor) {
      editor = edt;
    }
    editor.focus();
    var selection = window.getSelection();
    var range = document.createRange();
    range.selectNode(node);
    selection.removeAllRanges();
    selection.addRange(range);

  }
})()

function setCaretPosition(ctrl, pos) {
  if (ctrl.setSelectionRange) {
    ctrl.focus();
    ctrl.setSelectionRange(pos, pos);
  } else if (ctrl.createRange) {
    var range = ctrl.createRange();
    range.collapse(true);
    range.moveEnd('character', pos);
    range.moveStart('character', pos);
    range.select();
  }
}
