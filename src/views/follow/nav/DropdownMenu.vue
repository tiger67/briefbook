<template>
  <ul class="dropdown-menu arrow-top" v-once>
    <li>
      <router-link to="/follow">全部关注</router-link>
    </li>
    <li>
      <router-link to="/follow">只看作者</router-link>
    </li>
    <li>
      <router-link to="/follow">只看专题</router-link>
    </li>
    <li>
      <router-link to="/follow">只看文集</router-link>
    </li>
    <li>
      <router-link to="/follow">只看推送更新</router-link>
    </li>
  </ul>
</template>
<style lang="scss">
.flw-head {
    .dropdown-menu {
        margin-top: 7px;
        list-style: none;
        border-top: 1px solid #f0f0f0;
        &.open {
            display: block;
        }
    }
}

.arrow-top {
    &:after,
    &:before {
        position: absolute;
        top: -10px;
        left: 45%;
        content: "";
        display: inline-block;
        border-left: 9px solid transparent;
        border-right: 9px solid transparent;
        border-bottom: 9px solid transparent;
    }
    &:after {
        top: -9px;
        border-bottom: 9px solid #fff;
    }
}

.dropdown-menu {
    display: none;
    position: absolute;
    z-index: 1000;
    float: left;
    padding: 5px 0;
    margin: 2px 0 0;
    list-style: none;
    font-size: 14px;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, .15);
    border-radius: 4px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, .175);
    background-clip: padding-box;
    border-color: transparent;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .1);
    filter: drop-shadow(0 2px 8px rgba(0, 0, 0, .1));
    top: 23px;
    left: 20px;
    min-width: 130px;
    text-align: center;
    li {
        line-height: 20px;
        a {
            display: block;
            clear: both;
            font-weight: 400;
            line-height: 1.42857;
            white-space: nowrap;
            padding: 10px 20px;
            &:hover,
            &:focus {
                text-decoration: none;
                color: #262626;
                background-color: #f5f5f5;
            }
        }
    }
}

</style>
<script>
export default {

}

</script>
