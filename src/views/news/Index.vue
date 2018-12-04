<template>
  <div class="container news-page">
    <div class="row">
      <div class="aside">
        <ul class="router-lists">
          <li v-for="(r,index) in routes">
            <router-link :to="r.path">{{r.nameText}}
              <i v-if='index!=0' class="iconfont ic-unfollow" @click="remove(r,$event)"></i>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="r-mian">
        <div class="router-control">
          <select v-model="selectadd">
            <option v-for='item in selectList' :value="item">路由{{item.toUpperCase()}}</option>
          </select>
          <button @click="add" class="r-c-btn">增加</button>
        </div>
        <div class="view-container">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.news-page {
    /* border: 1px solid red; */
    position: relative;
    height: 600px;
    .aside {
        width: 23.33333%;
        position: absolute;
        border: 1px solid rgba(0, 0, 0, .1);
        left: 0;
        top: 0;
        bottom: 0;
        .router-lists {
            li {
                text-align: center;
                background: rgba(0, 0, 0, .05);
                color: #fff;
                font-size: 16px;
                cursor: pointer;
                &:hover {

                    background: rgba(0, 0, 0, .15);
                }
                a {
                    display: inline-block;
                    padding: 15px;
                    width: 100%;
                    height: 100%;
                    position: relative;
                    border-bottom: 1px solid rgba(0, 0, 0, .1);
                    i {
                        position: absolute;
                        top: 15px;
                        right: 15px;
                        text-align: center;
                        display: none;
                    }
                    &:hover i {
                        display: block;
                    }
                }
            }
        }
    }
    .r-mian {
        width: 76.6666%;
        margin-left: 23.33333%;
        .router-control {
            padding: 15px;
            background: rgba(0, 0, 0, .1);
            select {
                padding: 5px 10px;
            }
            .r-c-btn {
                margin-left: 10px;
                padding: 5px 10px;
                margin-right: 30px;
            }
        }
        .view-container {
            margin-top: 10px;
            text-align: center;
        }
    }
}

</style>
<script>
import Home from '@/views/Home'
const News = resolve => require(['@/views/news'], resolve);
import a from "./A"
import b from "./B"
import c from "./C"
import d from "./D"
import e from "./E"
var map = {
  "a": a,
  "b": b,
  "c": c,
  "d": d,
  "e": e
}
var hasadd = {};
export default {
  data() {
    var list = Object.keys(map);
    return {
      selectList: list,
      routes: [{ path: "/news", nameText: "主页" }],
      selectadd: list[0]
    }
  },
  mounted() {},
  methods: {
    remove(r, e) {
      e.preventDefault();
      e.stopPropagation();
      var index = this.routes.indexOf(r);
      var removeobj = this.routes.splice(index, 1);
      this.selectList.push(r.name);
      if (this.selectList.length == 1) {
        this.selectadd = r.name;
      }
    },
    add() {
      let r = this.selectadd;
      if (!r) {
        return;
      }
      var len = this.routes.length;
      this.selectList.splice(this.selectList.indexOf(r), 1);
      this.selectadd = this.selectList[0];
      if (hasadd[r]) {
        this.routes.push(hasadd[r]);
        return;
      }
      var routerObj = { path: `/news/${r}`, nameText: `路由${r.toUpperCase()}`, name: r }
      this.routes.push(routerObj);
      hasadd[r] = routerObj;
      this.$router.addRoutes([{
        path: '',
        component: Home,
        children: [{
          path: 'news',
          component: News,
          children: [{
            path: r,
            name: r,
            component: map[r]
          }]
        }]
      }]);

      //console.log(this.$router);
    }


  },

  updated() {}


}

</script>
