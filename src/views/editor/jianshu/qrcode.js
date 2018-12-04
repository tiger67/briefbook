var QRCode;


function a(a) {
  this.mode = c.MODE_8BIT_BYTE, this.data = a, this.parsedData = [];
  for (var b = [], d = 0, e = this.data.length; e > d; d++) {
    var f = this.data.charCodeAt(d);
    f > 65536 ? (b[0] = 240 | (1835008 & f) >>> 18, b[1] = 128 | (258048 & f) >>> 12, b[2] = 128 | (4032 & f) >>> 6, b[3] = 128 | 63 & f) : f > 2048 ? (b[0] = 224 | (61440 & f) >>> 12, b[1] = 128 | (4032 & f) >>> 6, b[2] = 128 | 63 & f) : f > 128 ? (b[0] = 192 | (1984 & f) >>> 6, b[1] = 128 | 63 & f) : b[0] = f, this.parsedData = this.parsedData.concat(b)
  }
  this.parsedData.length != this.data.length && (this.parsedData.unshift(191), this.parsedData.unshift(187), this.parsedData.unshift(239))
}

function b(a, b) { this.typeNumber = a, this.errorCorrectLevel = b, this.modules = null, this.moduleCount = 0, this.dataCache = null, this.dataList = [] }

function i(a, b) {
  if (void 0 == a.length) throw new Error(a.length + "/" + b);
  for (var c = 0; c < a.length && 0 == a[c];) c++;
  this.num = new Array(a.length - c + b);
  for (var d = 0; d < a.length - c; d++) this.num[d] = a[d + c]
}

function j(a, b) { this.totalCount = a, this.dataCount = b }

function k() { this.buffer = [], this.length = 0 }

function m() { return "undefined" != typeof CanvasRenderingContext2D }

function n() {
  var a = !1,
    b = navigator.userAgent;
  return /android/i.test(b) && (a = !0, aMat = b.toString().match(/android ([0-9]\.[0-9])/i), aMat && aMat[1] && (a = parseFloat(aMat[1]))), a
}

function r(a, b) {
  for (var c = 1, e = s(a), f = 0, g = l.length; g >= f; f++) {
    var h = 0;
    switch (b) {
      case d.L:
        h = l[f][0];
        break;
      case d.M:
        h = l[f][1];
        break;
      case d.Q:
        h = l[f][2];
        break;
      case d.H:
        h = l[f][3]
    }
    if (h >= e) break;
    c++
  }
  if (c > l.length) throw new Error("Too long data");
  return c
}

function s(a) {
  var b = encodeURI(a).toString().replace(/\%[0-9a-fA-F]{2}/g, "a");
  return b.length + (b.length != a ? 3 : 0)
}
a.prototype = { getLength: function() { return this.parsedData.length }, write: function(a) { for (var b = 0, c = this.parsedData.length; c > b; b++) a.put(this.parsedData[b], 8) } }, b.prototype = {
    addData: function(b) {
      var c = new a(b);
      this.dataList.push(c), this.dataCache = null
    },
    isDark: function(a, b) { if (0 > a || this.moduleCount <= a || 0 > b || this.moduleCount <= b) throw new Error(a + "," + b); return this.modules[a][b] },
    getModuleCount: function() { return this.moduleCount },
    make: function() { this.makeImpl(!1, this.getBestMaskPattern()) },
    makeImpl: function(a, c) { this.moduleCount = 4 * this.typeNumber + 17, this.modules = new Array(this.moduleCount); for (var d = 0; d < this.moduleCount; d++) { this.modules[d] = new Array(this.moduleCount); for (var e = 0; e < this.moduleCount; e++) this.modules[d][e] = null } this.setupPositionProbePattern(0, 0), this.setupPositionProbePattern(this.moduleCount - 7, 0), this.setupPositionProbePattern(0, this.moduleCount - 7), this.setupPositionAdjustPattern(), this.setupTimingPattern(), this.setupTypeInfo(a, c), this.typeNumber >= 7 && this.setupTypeNumber(a), null == this.dataCache && (this.dataCache = b.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)), this.mapData(this.dataCache, c) },
    setupPositionProbePattern: function(a, b) {
      for (var c = -1; 7 >= c; c++)
        if (!(-1 >= a + c || this.moduleCount <= a + c))
          for (var d = -1; 7 >= d; d++) - 1 >= b + d || this.moduleCount <= b + d || (this.modules[a + c][b + d] = c >= 0 && 6 >= c && (0 == d || 6 == d) || d >= 0 && 6 >= d && (0 == c || 6 == c) || c >= 2 && 4 >= c && d >= 2 && 4 >= d ? !0 : !1)
    },
    getBestMaskPattern: function() {
      for (var a = 0, b = 0, c = 0; 8 > c; c++) {
        this.makeImpl(!0, c);
        var d = f.getLostPoint(this);
        (0 == c || a > d) && (a = d, b = c)
      }
      return b
    },
    createMovieClip: function(a, b, c) {
      var d = a.createEmptyMovieClip(b, c),
        e = 1;
      this.make();
      for (var f = 0; f < this.modules.length; f++)
        for (var g = f * e, h = 0; h < this.modules[f].length; h++) {
          var i = h * e,
            j = this.modules[f][h];
          j && (d.beginFill(0, 100), d.moveTo(i, g), d.lineTo(i + e, g), d.lineTo(i + e, g + e), d.lineTo(i, g + e), d.endFill())
        }
      return d
    },
    setupTimingPattern: function() { for (var a = 8; a < this.moduleCount - 8; a++) null == this.modules[a][6] && (this.modules[a][6] = 0 == a % 2); for (var b = 8; b < this.moduleCount - 8; b++) null == this.modules[6][b] && (this.modules[6][b] = 0 == b % 2) },
    setupPositionAdjustPattern: function() {
      for (var a = f.getPatternPosition(this.typeNumber), b = 0; b < a.length; b++)
        for (var c = 0; c < a.length; c++) {
          var d = a[b],
            e = a[c];
          if (null == this.modules[d][e])
            for (var g = -2; 2 >= g; g++)
              for (var h = -2; 2 >= h; h++) this.modules[d + g][e + h] = -2 == g || 2 == g || -2 == h || 2 == h || 0 == g && 0 == h ? !0 : !1
        }
    },
    setupTypeNumber: function(a) {
      for (var b = f.getBCHTypeNumber(this.typeNumber), c = 0; 18 > c; c++) {
        var d = !a && 1 == (1 & b >> c);
        this.modules[Math.floor(c / 3)][c % 3 + this.moduleCount - 8 - 3] = d
      }
      for (var c = 0; 18 > c; c++) {
        var d = !a && 1 == (1 & b >> c);
        this.modules[c % 3 + this.moduleCount - 8 - 3][Math.floor(c / 3)] = d
      }
    },
    setupTypeInfo: function(a, b) {
      for (var c = this.errorCorrectLevel << 3 | b, d = f.getBCHTypeInfo(c), e = 0; 15 > e; e++) {
        var g = !a && 1 == (1 & d >> e);
        6 > e ? this.modules[e][8] = g : 8 > e ? this.modules[e + 1][8] = g : this.modules[this.moduleCount - 15 + e][8] = g
      }
      for (var e = 0; 15 > e; e++) {
        var g = !a && 1 == (1 & d >> e);
        8 > e ? this.modules[8][this.moduleCount - e - 1] = g : 9 > e ? this.modules[8][15 - e - 1 + 1] = g : this.modules[8][15 - e - 1] = g
      }
      this.modules[this.moduleCount - 8][8] = !a
    },
    mapData: function(a, b) {
      for (var c = -1, d = this.moduleCount - 1, e = 7, g = 0, h = this.moduleCount - 1; h > 0; h -= 2)
        for (6 == h && h--;;) {
          for (var i = 0; 2 > i; i++)
            if (null == this.modules[d][h - i]) {
              var j = !1;
              g < a.length && (j = 1 == (1 & a[g] >>> e));
              var k = f.getMask(b, d, h - i);
              k && (j = !j), this.modules[d][h - i] = j, e--, -1 == e && (g++, e = 7)
            }
          if (d += c, 0 > d || this.moduleCount <= d) { d -= c, c = -c; break }
        }
    }
  }, b.PAD0 = 236, b.PAD1 = 17, b.createData = function(a, c, d) {
    for (var e = j.getRSBlocks(a, c), g = new k, h = 0; h < d.length; h++) {
      var i = d[h];
      g.put(i.mode, 4), g.put(i.getLength(), f.getLengthInBits(i.mode, a)), i.write(g)
    }
    for (var l = 0, h = 0; h < e.length; h++) l += e[h].dataCount;
    if (g.getLengthInBits() > 8 * l) throw new Error("code length overflow. (" + g.getLengthInBits() + ">" + 8 * l + ")");
    for (g.getLengthInBits() + 4 <= 8 * l && g.put(0, 4); 0 != g.getLengthInBits() % 8;) g.putBit(!1);
    for (;;) {
      if (g.getLengthInBits() >= 8 * l) break;
      if (g.put(b.PAD0, 8), g.getLengthInBits() >= 8 * l) break;
      g.put(b.PAD1, 8)
    }
    return b.createBytes(g, e)
  },
  b.createBytes = function(a, b) {
    for (var c = 0, d = 0, e = 0, g = new Array(b.length), h = new Array(b.length), j = 0; j < b.length; j++) {
      var k = b[j].dataCount,
        l = b[j].totalCount - k;
      d = Math.max(d, k), e = Math.max(e, l), g[j] = new Array(k);
      for (var m = 0; m < g[j].length; m++) g[j][m] = 255 & a.buffer[m + c];
      c += k;
      var n = f.getErrorCorrectPolynomial(l),
        o = new i(g[j], n.getLength() - 1),
        p = o.mod(n);
      h[j] = new Array(n.getLength() - 1);
      for (var m = 0; m < h[j].length; m++) {
        var q = m + p.getLength() - h[j].length;
        h[j][m] = q >= 0 ? p.get(q) : 0
      }
    }
    for (var r = 0, m = 0; m < b.length; m++) r += b[m].totalCount;
    for (var s = new Array(r), t = 0, m = 0; d > m; m++)
      for (var j = 0; j < b.length; j++) m < g[j].length && (s[t++] = g[j][m]);
    for (var m = 0; e > m; m++)
      for (var j = 0; j < b.length; j++) m < h[j].length && (s[t++] = h[j][m]);
    return s
  };
for (var c = { MODE_NUMBER: 1, MODE_ALPHA_NUM: 2, MODE_8BIT_BYTE: 4, MODE_KANJI: 8 }, d = { L: 1, M: 0, Q: 3, H: 2 }, e = { PATTERN000: 0, PATTERN001: 1, PATTERN010: 2, PATTERN011: 3, PATTERN100: 4, PATTERN101: 5, PATTERN110: 6, PATTERN111: 7 }, f = {
    PATTERN_POSITION_TABLE: [],
    G15: 1335,
    G18: 7973,
    G15_MASK: 21522,
    getBCHTypeInfo: function(a) { for (var b = a << 10; f.getBCHDigit(b) - f.getBCHDigit(f.G15) >= 0;) b ^= f.G15 << f.getBCHDigit(b) - f.getBCHDigit(f.G15); return (a << 10 | b) ^ f.G15_MASK },
    getBCHTypeNumber: function(a) { for (var b = a << 12; f.getBCHDigit(b) - f.getBCHDigit(f.G18) >= 0;) b ^= f.G18 << f.getBCHDigit(b) - f.getBCHDigit(f.G18); return a << 12 | b },
    getBCHDigit: function(a) { for (var b = 0; 0 != a;) b++, a >>>= 1; return b },
    getPatternPosition: function(a) { return f.PATTERN_POSITION_TABLE[a - 1] },
    getMask: function(a, b, c) {
      switch (a) {
        case e.PATTERN000:
          return 0 == (b + c) % 2;
        case e.PATTERN001:
          return 0 == b % 2;
        case e.PATTERN010:
          return 0 == c % 3;
        case e.PATTERN011:
          return 0 == (b + c) % 3;
        case e.PATTERN100:
          return 0 == (Math.floor(b / 2) + Math.floor(c / 3)) % 2;
        case e.PATTERN101:
          return 0 == b * c % 2 + b * c % 3;
        case e.PATTERN110:
          return 0 == (b * c % 2 + b * c % 3) % 2;
        case e.PATTERN111:
          return 0 == (b * c % 3 + (b + c) % 2) % 2;
        default:
          throw new Error("bad maskPattern:" + a)
      }
    },
    getErrorCorrectPolynomial: function(a) { for (var b = new i([1], 0), c = 0; a > c; c++) b = b.multiply(new i([1, g.gexp(c)], 0)); return b },
    getLengthInBits: function(a, b) {
      if (b >= 1 && 10 > b) switch (a) {
        case c.MODE_NUMBER:
          return 10;
        case c.MODE_ALPHA_NUM:
          return 9;
        case c.MODE_8BIT_BYTE:
          return 8;
        case c.MODE_KANJI:
          return 8;
        default:
          throw new Error("mode:" + a)
      } else if (27 > b) switch (a) {
        case c.MODE_NUMBER:
          return 12;
        case c.MODE_ALPHA_NUM:
          return 11;
        case c.MODE_8BIT_BYTE:
          return 16;
        case c.MODE_KANJI:
          return 10;
        default:
          throw new Error("mode:" + a)
      } else {
        if (!(41 > b)) throw new Error("type:" + b);
        switch (a) {
          case c.MODE_NUMBER:
            return 14;
          case c.MODE_ALPHA_NUM:
            return 13;
          case c.MODE_8BIT_BYTE:
            return 16;
          case c.MODE_KANJI:
            return 12;
          default:
            throw new Error("mode:" + a)
        }
      }
    },
    getLostPoint: function(a) {
      for (var b = a.getModuleCount(), c = 0, d = 0; b > d; d++)
        for (var e = 0; b > e; e++) {
          for (var f = 0, g = a.isDark(d, e), h = -1; 1 >= h; h++)
            if (!(0 > d + h || d + h >= b))
              for (var i = -1; 1 >= i; i++) 0 > e + i || e + i >= b || (0 != h || 0 != i) && g == a.isDark(d + h, e + i) && f++;
          f > 5 && (c += 3 + f - 5)
        }
      for (var d = 0; b - 1 > d; d++)
        for (var e = 0; b - 1 > e; e++) {
          var j = 0;
          a.isDark(d, e) && j++, a.isDark(d + 1, e) && j++, a.isDark(d, e + 1) && j++, a.isDark(d + 1, e + 1) && j++, (0 == j || 4 == j) && (c += 3)
        }
      for (var d = 0; b > d; d++)
        for (var e = 0; b - 6 > e; e++) a.isDark(d, e) && !a.isDark(d, e + 1) && a.isDark(d, e + 2) && a.isDark(d, e + 3) && a.isDark(d, e + 4) && !a.isDark(d, e + 5) && a.isDark(d, e + 6) && (c += 40);
      for (var e = 0; b > e; e++)
        for (var d = 0; b - 6 > d; d++) a.isDark(d, e) && !a.isDark(d + 1, e) && a.isDark(d + 2, e) && a.isDark(d + 3, e) && a.isDark(d + 4, e) && !a.isDark(d + 5, e) && a.isDark(d + 6, e) && (c += 40);
      for (var k = 0, e = 0; b > e; e++)
        for (var d = 0; b > d; d++) a.isDark(d, e) && k++;
      var l = Math.abs(100 * k / b / b - 50) / 5;
      return c += 10 * l
    }
  }, g = { glog: function(a) { if (1 > a) throw new Error("glog(" + a + ")"); return g.LOG_TABLE[a] }, gexp: function(a) { for (; 0 > a;) a += 255; for (; a >= 256;) a -= 255; return g.EXP_TABLE[a] }, EXP_TABLE: new Array(256), LOG_TABLE: new Array(256) }, h = 0; 8 > h; h++) g.EXP_TABLE[h] = 1 << h;
for (var h = 8; 256 > h; h++) g.EXP_TABLE[h] = g.EXP_TABLE[h - 4] ^ g.EXP_TABLE[h - 5] ^ g.EXP_TABLE[h - 6] ^ g.EXP_TABLE[h - 8];
for (var h = 0; 255 > h; h++) g.LOG_TABLE[g.EXP_TABLE[h]] = h;
i.prototype = {
    get: function(a) { return this.num[a] },
    getLength: function() { return this.num.length },
    multiply: function(a) {
      for (var b = new Array(this.getLength() + a.getLength() - 1), c = 0; c < this.getLength(); c++)
        for (var d = 0; d < a.getLength(); d++) b[c + d] ^= g.gexp(g.glog(this.get(c)) + g.glog(a.get(d)));
      return new i(b, 0)
    },
    mod: function(a) { if (this.getLength() - a.getLength() < 0) return this; for (var b = g.glog(this.get(0)) - g.glog(a.get(0)), c = new Array(this.getLength()), d = 0; d < this.getLength(); d++) c[d] = this.get(d); for (var d = 0; d < a.getLength(); d++) c[d] ^= g.gexp(g.glog(a.get(d)) + b); return new i(c, 0).mod(a) }
  },
  j.getRSBlocks = function(a, b) {
    var c = j.getRsBlockTable(a, b);
    if (void 0 == c) throw new Error("bad rs block @ typeNumber:" + a + "/errorCorrectLevel:" + b);
    for (var d = c.length / 3, e = [], f = 0; d > f; f++)
      for (var g = c[3 * f + 0], h = c[3 * f + 1], i = c[3 * f + 2], k = 0; g > k; k++) e.push(new j(h, i));
    return e
  }, j.getRsBlockTable = function(a, b) {
    switch (b) {
      case d.L:
        return j.RS_BLOCK_TABLE[4 * (a - 1) + 0];
      case d.M:
        return j.RS_BLOCK_TABLE[4 * (a - 1) + 1];
      case d.Q:
        return j.RS_BLOCK_TABLE[4 * (a - 1) + 2];
      case d.H:
        return j.RS_BLOCK_TABLE[4 * (a - 1) + 3];
      default:
        return void 0
    }
  }, k.prototype = {
    get: function(a) { var b = Math.floor(a / 8); return 1 == (1 & this.buffer[b] >>> 7 - a % 8) },
    put: function(a, b) { for (var c = 0; b > c; c++) this.putBit(1 == (1 & a >>> b - c - 1)) },
    getLengthInBits: function() { return this.length },
    putBit: function(a) {
      var b = Math.floor(this.length / 8);
      this.buffer.length <= b && this.buffer.push(0), a && (this.buffer[b] |= 128 >>> this.length % 8), this.length++
    }
  };
var l = [],
  o = function() {
    var a = function(a, b) { this._el = a, this._htOption = b };
    return a.prototype.draw = function(a) {
      function g(a, b) { var c = document.createElementNS("http://www.w3.org/2000/svg", a); for (var d in b) b.hasOwnProperty(d) && c.setAttribute(d, b[d]); return c }
      var b = this._htOption,
        c = this._el,
        d = a.getModuleCount();
      Math.floor(b.width / d), Math.floor(b.height / d), this.clear();
      var h = g("svg", { viewBox: "0 0 " + String(d) + " " + String(d), width: "100%", height: "100%", fill: b.colorLight });
      h.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink"), c.appendChild(h), h.appendChild(g("rect", { fill: b.colorDark, width: "1", height: "1", id: "template" }));
      for (var i = 0; d > i; i++)
        for (var j = 0; d > j; j++)
          if (a.isDark(i, j)) {
            var k = g("use", { x: String(i), y: String(j) });
            k.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#template"), h.appendChild(k)
          }
    }, a.prototype.clear = function() { for (; this._el.hasChildNodes();) this._el.removeChild(this._el.lastChild) }, a
  }(),
  p = "svg" === document.documentElement.tagName.toLowerCase(),
  q = p ? o : m() ? function() {
    function a() { this._elImage.src = this._elCanvas.toDataURL("image/png"), this._elImage.style.display = "block", this._elCanvas.style.display = "none" }

    function d(a, b) {
      var c = this;
      if (c._fFail = b, c._fSuccess = a, null === c._bSupportDataURI) {
        var d = document.createElement("img"),
          e = function() { c._bSupportDataURI = !1, c._fFail && _fFail.call(c) },
          f = function() { c._bSupportDataURI = !0, c._fSuccess && c._fSuccess.call(c) };
        return d.onabort = e, d.onerror = e, d.onload = f,
          d.src = "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==",
          void 0
      }
      c._bSupportDataURI === !0 && c._fSuccess ? c._fSuccess.call(c) : c._bSupportDataURI === !1 && c._fFail && c._fFail.call(c)
    }

    var e = function(a, b) { this._bIsPainted = !1, this._android = n(), this._htOption = b, this._elCanvas = document.createElement("canvas"), this._elCanvas.width = b.width, this._elCanvas.height = b.height, a.appendChild(this._elCanvas), this._el = a, this._oContext = this._elCanvas.getContext("2d"), this._bIsPainted = !1, this._elImage = document.createElement("img"), this._elImage.style.display = "none", this._el.appendChild(this._elImage), this._bSupportDataURI = null };
    return e.prototype.draw = function(a) {
      var b = this._elImage,
        c = this._oContext,
        d = this._htOption,
        e = a.getModuleCount(),
        f = d.width / e,
        g = d.height / e,
        h = Math.round(f),
        i = Math.round(g);
      b.style.display = "none", this.clear();
      for (var j = 0; e > j; j++)
        for (var k = 0; e > k; k++) {
          var l = a.isDark(j, k),
            m = k * f,
            n = j * g;
          c.strokeStyle = l ? d.colorDark : d.colorLight, c.lineWidth = 1, c.fillStyle = l ? d.colorDark : d.colorLight, c.fillRect(m, n, f, g), c.strokeRect(Math.floor(m) + .5, Math.floor(n) + .5, h, i), c.strokeRect(Math.ceil(m) - .5, Math.ceil(n) - .5, h, i)
        }
      this._bIsPainted = !0
    }, e.prototype.makeImage = function() { this._bIsPainted && d.call(this, a) }, e.prototype.isPainted = function() { return this._bIsPainted }, e.prototype.clear = function() { this._oContext.clearRect(0, 0, this._elCanvas.width, this._elCanvas.height), this._bIsPainted = !1 }, e.prototype.round = function(a) { return a ? Math.floor(1e3 * a) / 1e3 : a }, e
  }() : function() {
    var a = function(a, b) { this._el = a, this._htOption = b };
    return a.prototype.draw = function(a) {
      for (var b = this._htOption, c = this._el, d = a.getModuleCount(), e = Math.floor(b.width / d), f = Math.floor(b.height / d), g = ['<table style="border:0;border-collapse:collapse;">'], h = 0; d > h; h++) {
        g.push("<tr>");
        for (var i = 0; d > i; i++) g.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:' + e + "px;height:" + f + "px;background-color:" + (a.isDark(h, i) ? b.colorDark : b.colorLight) + ';"></td>');
        g.push("</tr>")
      }
      g.push("</table>"), c.innerHTML = g.join("");
      var j = c.childNodes[0],
        k = (b.width - j.offsetWidth) / 2,
        l = (b.height - j.offsetHeight) / 2;
      k > 0 && l > 0 && (j.style.margin = l + "px " + k + "px")
    }, a.prototype.clear = function() { this._el.innerHTML = "" }, a
  }();
QRCode = function(a, b) {
    if (this._htOption = { width: 256, height: 256, typeNumber: 4, colorDark: "#000000", colorLight: "#ffffff", correctLevel: d.H }, "string" == typeof b && (b = { text: b }), b)
      for (var c in b) this._htOption[c] = b[c];
    "string" == typeof a && (a = document.getElementById(a)), this._android = n(), this._el = a, this._oQRCode = null, this._oDrawing = new q(this._el, this._htOption), this._htOption.text && this.makeCode(this._htOption.text)
  },
  QRCode.prototype.makeCode = function(a) {
    this._oQRCode =
      new b(r(a, this._htOption.correctLevel), this._htOption.correctLevel),
      this._oQRCode.addData(a), this._oQRCode.make(),
      this._el.title = a, this._oDrawing.draw(this._oQRCode), this.makeImage()
  }, QRCode.prototype.makeImage = function() { "function" == typeof this._oDrawing.makeImage && (!this._android || this._android >= 3) && this._oDrawing.makeImage() }, QRCode.prototype.clear = function() { this._oDrawing.clear() }, QRCode.CorrectLevel = d
