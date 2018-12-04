<template>
  <div>
    <div class="bba-box">
    </div>
    <div class="bba-box2"></div>
  </div>
</template>
<style lang="scss">
@keyframes roing {
    0% {
        transform: translate(-50%);
    }
}

.bba-box2,
.bba-box {
    float: left;
    width: 100px;
    height: 50px;
    border-bottom: 3px solid rgba(0, 0, 0, .1);
    position: relative;
    margin: 30px;
}

.bba-box2 {
    &:hover:after {
        opacity: 1;
        transform: translate(-50%) scaleX(1);
        transition: .2s ease-in-out;
    }
    &:after {
        content: "";
        position: absolute;
        left: 50%;
        bottom: -2px;
        width: 100%;
        opacity: 1;
        border-bottom: 2px solid #646464;
        transform: translate(-50%) scaleX(0);
        transition: .2s ease-in-out;
    }
}

.bba-box {
    @keyframes border-open {
        0% {
            opacity: 0;
            transform: scaleX(0);
        }
    }
    @keyframes border-close {
        0% {
            opacity: 1;
            transform: scaleX(1);
        }
    }
    &:hover:after {
        opacity: 1;
        transform: scaleX(1);
        animation: border-open ease-in-out .2s;
    }

    &:after {
        opacity: 0;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        height: 3px;
        content: '';
        transform: scaleX(0);
        animation: border-close ease-in-out .2s;
        background: #646464;
    }
}

</style>
