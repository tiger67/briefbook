<template>
  <footer v-once>
    <slot />
    <ul class="sign-more-style">
      <li>
        <router-link to="/" class="s-weibo">
          <i class="iconfont ic-weibo"></i>
        </router-link>
      </li>
      <li>
        <router-link to="/" class="s-wechat">
          <i class="iconfont ic-wechat"></i>
        </router-link>
      </li>
      <li>
        <router-link to="/" class="s-qq">
          <i class="iconfont ic-qq_connect"></i>
        </router-link>
      </li>
      <li>
        <router-link to="/" class="s-douban">
          <i class="iconfont ic-douban"></i>
        </router-link>
      </li>
    </ul>
  </footer>
</template>
