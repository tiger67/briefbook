<template>
  <div class="mycontainer">
    <svg width="800" height="800">
      <path d="M30 30 L 530 30 L 530 530 L30 530 Z" stroke="red"></path>
      <path d="M500 60 L 500 500 L60 500 L 60 60 Z" stroke="purple"></path>
      <path d="M470 470 L 90 470 L 90 90 L470 90 Z" stroke="green"></path>
      <path d="M120 440 L 120 120 L 440 120 L440 440 Z" stroke="#fff"></path>
    </svg>
  </div>
</template>
<style lang="scss">
.mycontainer {
    background: #0a0a0a;
    width: 80%;
    height: 600px;
    margin: 30px auto;
    border: 1px solid #222;
    box-shadow: 3px 3px 3px #222;
    @keyframes dash {
        to {
            stroke-dashoffset: 0;
        }
    }
    svg {
        width: 100%;
        path {
            stroke-width: 5;
            stroke-linecap: round;
            animation: dash 3s linear;
        }
    }
}

</style>
<script>
document.addEventListener('DOMContentLoaded', function() {
  var paths = document.getElementsByTagName('path');
  var path, length;
  for (var i = 0, len = paths.length; i < len; i++) {
    path = paths[i];
    length = path.getTotalLength() + 10;
    path.setAttribute('stroke-dasharray', length);
    path.setAttribute('stroke-dashoffset', length);
    (function(path) {
      path.addEventListener('animationend', function() {
        path.setAttribute('stroke-dashoffset', 0);
      });
    })(path);
  }
});

</script>
