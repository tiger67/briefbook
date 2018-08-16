<template>
  <div class="login-pg">
    <router-link to="/" class="logo"><img src="../../assets/logo.png"></router-link>
    <div class="login-panel"></div>
  </div>
</template>
<script>
export default {


}

</script>
<style lang="scss">
.login-pg {
  height: 100%;
  min-height: 750px;
  text-align: center;
  font-size: 14px;
  background-color: #f1f1f1;
}

.login-pg .logo {
  position: absolute;
  top: 56px;
  margin-left: 50px;
}

.login-pg .logo img {
  width: 100px;
}


.login-pg .login-panel {
  width: 400px;
  margin: 60px auto 0;
  padding: 50px 50px 30px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0, 0, 0, .1);
  vertical-align: middle;
  display: inline-block;
}

</style>
