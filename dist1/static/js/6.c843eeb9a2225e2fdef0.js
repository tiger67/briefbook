webpackJsonp([6],{"+Vfz":function(t,n){},"1sE8":function(t,n){},DTRK:function(t,n){},dQc1:function(t,n){},eITr:function(t,n){},jXsk:function(t,n){},mwsJ:function(t,n){},nBI3:function(t,n,i){"use strict";var s=i("//Fk"),a=i.n(s),e=i("zNUS"),o=i.n(e),c=i("mtWM"),r=i.n(c),l="/friend-list";o.a.mock(l,"post",function(t){for(var n=o.a.Random,i=[],s=8;s--;){var a={id:1,name:n.cname(1,5),title:n.ctitle(3,30),abstract:n.cparagraph(4,5),publishTime:n.integer(1,12),author:n.image("24x24"),likes:n.integer(0,30),comments:n.integer(0,10)};n.boolean()&&(a.img=n.image("125x100")),n.boolean()&&(a.oauthor=n.cname(1,5)),n.boolean()&&(a.money=n.integer(2,20)),i.push(a)}return i});var u={"/friend-list":function(t){return new a.a(function(n,i){r.a.post(l,{id:t}).then(function(t){n(t)})})}};n.a=u},rZRV:function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s=i("nBI3"),a={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"flw-subs-head"},[n("h1",[this._v("这是head")])])}]};var e=i("VU/8")(null,a,!1,function(t){i("+Vfz")},null,null).exports,o=i("Gu7T"),c=i.n(o),r={props:{unit:Object}},l={render:function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("li",{staticClass:"unit",class:{hasimg:t.unit.img}},[i("a",{staticClass:"img-wrp",attrs:{href:"javascript:void(0)"}},[t.unit.img?i("img",{attrs:{src:t.unit.img}}):t._e()]),t._v(" "),i("div",{staticClass:"content"},[i("router-link",{staticClass:"title",attrs:{to:"/article/"+t.unit.id}},[t._v(t._s(t.unit.title))]),t._v(" "),i("div",{staticClass:"abstract"},[t._v(t._s(t.unit.abstract))]),t._v(" "),i("div",{staticClass:"meta"},[i("span",{staticClass:"oauthor"},[t._v(t._s(t.unit.name))]),t._v(" "),i("a",{attrs:{href:"javascript:void(0)",target:"_blank"}},[i("i",{staticClass:"iconfont ic-list-comments"}),t._v("\n          "+t._s(t.unit.comments)+"\n      ")]),t._v(" "),i("span",[i("i",{staticClass:"iconfont ic-list-like"}),t._v("\n      "+t._s(t.unit.likes))]),t._v(" "),t.unit.money?i("span",[i("i",{staticClass:"iconfont ic-list-money"}),t._v("\n          "+t._s(t.unit.money)+"\n      ")]):t._e()])],1)])},staticRenderFns:[]};var u=i("VU/8")(r,l,!1,function(t){i("dQc1")},null,null).exports,d={data:function(){return{lists:[],isloading:!1}},components:{Unit:u},mounted:function(){this.loadData()},methods:{loadData:function(t){var n=this;this.isloading||(this.isloading=!0,s.a["/friend-list"]().then(function(i){var s;t?n.lists=i.data:(s=n.lists).splice.apply(s,[n.lists.length,0].concat(c()(i.data)));n.isloading=!1}))}},watch:{$route:function(t,n){(t.params&&t.params.id)!=(n.params&&n.params.id)&&this.loadData(!0)}}},f={render:function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"flw-friends-list"},[i("ul",[t._l(t.lists,function(t,n){return i("unit",{key:n,attrs:{unit:t}})}),t._v(" "),i("p-loadmore",{directives:[{name:"show",rawName:"v-show",value:t.lists.length,expression:"lists.length"}],on:{click:function(n){t.loadData(!1)}}})],2)])},staticRenderFns:[]};var m={data:function(){return{lists:[],isloading:!1}},components:{Unit:u},mounted:function(){this.loadData()},methods:{loadData:function(t){var n=this;this.isloading||(this.isloading=!0,s.a["/friend-list"]().then(function(i){var s;t?n.lists=i.data:(s=n.lists).splice.apply(s,[n.lists.length,0].concat(c()(i.data)));n.isloading=!1}))}},watch:{$route:function(t,n){(t.params&&t.params.id)!=(n.params&&n.params.id)&&this.loadData(!0)}}},h={render:function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"flw-friends-list"},[i("ul",[t._l(t.lists,function(t,n){return i("unit",{key:n,attrs:{unit:t}})}),t._v(" "),i("p-loadmore",{directives:[{name:"show",rawName:"v-show",value:t.lists.length,expression:"lists.length"}],on:{click:function(n){t.loadData(!1)}}})],2)])},staticRenderFns:[]};var p={data:function(){return{lists:[],isloading:!1}},components:{Unit:u},mounted:function(){this.loadData()},methods:{loadData:function(t){var n=this;this.isloading||(this.isloading=!0,s.a["/friend-list"]().then(function(i){var s;t?n.lists=i.data:(s=n.lists).splice.apply(s,[n.lists.length,0].concat(c()(i.data)));n.isloading=!1}))}},watch:{$route:function(t,n){t.params.id!=n.params.id&&this.loadData(!0)}}},v={render:function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"flw-friends-list"},[i("ul",[t._l(t.lists,function(t,n){return i("unit",{key:n,attrs:{unit:t}})}),t._v(" "),i("p-loadmore",{directives:[{name:"show",rawName:"v-show",value:t.lists.length,expression:"lists.length"}],on:{click:function(n){t.loadData(!1)}}})],2)])},staticRenderFns:[]};var g=[{name:"最新收录",icon:"iconfont ic-articles",component:i("VU/8")(d,f,!1,function(t){i("jXsk")},null,null).exports},{name:"最新评论",icon:"iconfont ic-latestcomments",component:i("VU/8")(m,h,!1,function(t){i("1sE8")},null,null).exports},{name:"热门",icon:"iconfont ic-hot",component:i("VU/8")(p,v,!1,function(t){i("DTRK")},null,null).exports}],_={};g.forEach(function(t,n){_["page"+n]=t.component});var w={props:{pData:Array},beforeCreate:function(){},data:function(){return console.log(arguments),{active:0,pagelists:[],comp:"page1"}},methods:{trigger:function(t){this.active=t,this.comp="page"+t}},created:function(){this.pagelists=g.map(function(t){return{name:t.name,icon:t.icon}})},components:_},C={render:function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"switch-comp"},[i("ul",{staticClass:"switch-trigger-menu"},t._l(t.pagelists,function(n,s){return i("li",{key:s},[i("a",{class:{active:t.active==s},attrs:{href:"javascript:void(0);"},on:{click:function(n){t.trigger(s)}}},[i("i",{class:n.icon}),t._v("\n        "+t._s(n.name)+"\n      ")])])})),t._v(" "),i("div",{staticClass:"switch-content"},[i(t.comp,{tag:"component"})],1)])},staticRenderFns:[]};var k={components:{FHead:e,PageSwitch:i("VU/8")(w,C,!1,function(t){i("eITr")},null,null).exports},mounted:function(){},methods:{}},D={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"flw-subs-con"},[n("f-head"),this._v(" "),n("page-switch")],1)},staticRenderFns:[]};var b=i("VU/8")(k,D,!1,function(t){i("mwsJ")},null,null);n.default=b.exports}});