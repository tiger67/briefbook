webpackJsonp([7], { Oaj2: function(t, i) {}, a2LT: function(t, i, n) { "use strict";
    Object.defineProperty(i, "__esModule", { value: !0 }); var s = n("Gu7T"),
      a = n.n(s),
      e = n("nBI3"),
      o = { props: { unit: Object } },
      r = { render: function() { var t = this,
            i = t.$createElement,
            n = t._self._c || i; return n("li", { staticClass: "unit", class: { hasimg: t.unit.img } }, [n("a", { staticClass: "img-wrp", attrs: { href: "javascript:void(0)" } }, [t.unit.img ? n("img", { attrs: { src: t.unit.img } }) : t._e()]), t._v(" "), n("div", { staticClass: "content" }, [n("div", { staticClass: "author" }, [n("img", { attrs: { src: t.unit.author, alt: "" } }), t._v(" "), n("span", { staticClass: "info" }, [n("a", { attrs: { href: "javascript:void(0)" } }, [t._v(t._s(t.unit.name))]), t._v(" "), n("span", [t._v("发表了文章 · " + t._s(t.unit.publishTime) + "小时前")])])]), t._v(" "), n("router-link", { staticClass: "title", attrs: { to: "/article/" + t.unit.id } }, [t._v(t._s(t.unit.title))]), t._v(" "), n("div", { staticClass: "abstract" }, [t._v(t._s(t.unit.abstract))]), t._v(" "), n("div", { staticClass: "meta" }, [t.unit.oauthor ? n("span", { staticClass: "oauthor" }, [t._v(t._s(t.unit.oauthor))]) : t._e(), t._v(" "), n("a", { attrs: { href: "javascript:void(0)", target: "_blank" } }, [n("i", { staticClass: "iconfont ic-list-comments" }), t._v("\n          " + t._s(t.unit.comments) + "\n      ")]), t._v(" "), n("span", [n("i", { staticClass: "iconfont ic-list-like" }), t._v("\n      " + t._s(t.unit.likes))]), t._v(" "), t.unit.money ? n("span", [n("i", { staticClass: "iconfont ic-list-money" }), t._v("\n          " + t._s(t.unit.money) + "\n      ")]) : t._e()])], 1)]) }, staticRenderFns: [] }; var l = { data: function() { return { lists: [], isloading: !1 } }, components: { Unit: n("VU/8")(o, r, !1, function(t) { n("eLd7") }, null, null).exports }, mounted: function() { this.loadData() }, methods: { loadData: function() { var t = this;
            this.isloading || (this.isloading = !0, e.a["/friend-list"]().then(function(i) { var n;
              (n = t.lists).splice.apply(n, [t.lists.length, 0].concat(a()(i.data))), t.isloading = !1 })) } } },
      c = { render: function() { var t = this.$createElement,
            i = this._self._c || t; return i("div", { staticClass: "flw-friends-list" }, [i("ul", [this._l(this.lists, function(t, n) { return i("unit", { key: n, attrs: { unit: t } }) }), this._v(" "), i("p-loadmore", { directives: [{ name: "show", rawName: "v-show", value: this.lists.length, expression: "lists.length" }], on: { click: this.loadData } })], 2)]) }, staticRenderFns: [] }; var u = n("VU/8")(l, c, !1, function(t) { n("Oaj2") }, null, null);
    i.default = u.exports }, eLd7: function(t, i) {}, nBI3: function(t, i, n) { "use strict"; var s = n("//Fk"),
      a = n.n(s),
      e = n("zNUS"),
      o = n.n(e),
      r = n("mtWM"),
      l = n.n(r),
      c = "/friend-list";
    o.a.mock(c, "post", function(t) { for (var i = o.a.Random, n = [], s = 8; s--;) { var a = { id: 1, name: i.cname(1, 5), title: i.ctitle(3, 30), abstract: i.cparagraph(4, 5), publishTime: i.integer(1, 12), author: i.image("24x24"), likes: i.integer(0, 30), comments: i.integer(0, 10) };
        i.boolean() && (a.img = i.image("125x100")), i.boolean() && (a.oauthor = i.cname(1, 5)), i.boolean() && (a.money = i.integer(2, 20)), n.push(a) } return n }); var u = { "/friend-list": function(t) { return new a.a(function(i, n) { l.a.post(c, { id: t }).then(function(t) { i(t) }) }) } };
    i.a = u } });
