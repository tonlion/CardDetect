var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
  return typeof t;
} : function(t) {
  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
};

! function(e, o) {
  "object" === ("undefined" == typeof exports ? "undefined" : t(exports)) && "undefined" != typeof module ? module.exports = o() : "function" == typeof define && define.amd ? define(o) : e.weCropper = o();
}(void 0, function() {
  function e(t) {
    return t.charAt(0).toUpperCase() + t.slice(1);
  }

  function o(t) {
    for (var e = arguments.length, o = Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) o[n - 1] = arguments[n];
    c.forEach(function(e, n) {
      void 0 !== o[n] && (t[e] = o[n]);
    });
  }

  function n(t, e) {
    Object.defineProperties(t, e);
  }

  function i() {
    return r || (r = wx.getSystemInfoSync()), r;
  }
  var r = void 0,
    c = ["touchstarted", "touchmoved", "touchended"],
    a = "function" == typeof Symbol && "symbol" === t(Symbol.iterator) ? function(e) {
      return void 0 === e ? "undefined" : t(e);
    } : function(e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : t(e);
    },
    u = function(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    },
    s = function() {
      function t(t, e) {
        for (var o = 0; o < e.length; o++) {
          var n = e[o];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n);
        }
      }
      return function(e, o, n) {
        return o && t(e.prototype, o), n && t(e, n), e;
      };
    }(),
    l = function() {
      function t(t, e) {
        var o = [],
          n = !0,
          i = !1,
          r = void 0;
        try {
          for (var c, a = t[Symbol.iterator](); !(n = (c = a.next()).done) && (o.push(c.value), !e || o.length !== e); n = !0);
        } catch (t) {
          i = !0, r = t;
        } finally {
          try {
            !n && a.return && a.return();
          } finally {
            if (i) throw r;
          }
        }
        return o;
      }
      return function(e, o) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e)) return t(e, o);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      };
    }(),
    d = {},
    f = {
      id: {
        default: "cropper",
        get: function() {
          return d.id;
        },
        set: function(t) {
          "string" != typeof t && console.error("id：" + t + " is invalid"), d.id = t;
        }
      },
      width: {
        default: 750,
        get: function() {
          return d.width;
        },
        set: function(t) {
          "number" != typeof t && console.error("width：" + t + " is invalid"), d.width = t;
        }
      },
      height: {
        default: 750,
        get: function() {
          return d.height;
        },
        set: function(t) {
          "number" != typeof t && console.error("height：" + t + " is invalid"), d.height = t;
        }
      },
      scale: {
        default: 2.5,
        get: function() {
          return d.scale;
        },
        set: function(t) {
          "number" != typeof t && console.error("scale：" + t + " is invalid"), d.scale = t;
        }
      },
      zoom: {
        default: 5,
        get: function() {
          return d.zoom;
        },
        set: function(t) {
          "number" != typeof t ? console.error("zoom：" + t + " is invalid") : (t < 0 || t > 10) && console.error("zoom should be ranged in 0 ~ 10"),
            d.zoom = t;
        }
      },
      src: {
        default: "cropper",
        get: function() {
          return d.src;
        },
        set: function(t) {
          "string" != typeof t && console.error("id：" + t + " is invalid"), d.src = t;
        }
      },
      cut: {
        default: {},
        get: function() {
          return d.cut;
        },
        set: function(t) {
          "object" !== (void 0 === t ? "undefined" : a(t)) && console.error("id：" + t + " is invalid"),
            d.cut = t;
        }
      },
      onReady: {
        default: null,
        get: function() {
          return d.ready;
        },
        set: function(t) {
          d.ready = t;
        }
      },
      onBeforeImageLoad: {
        default: null,
        get: function() {
          return d.beforeImageLoad;
        },
        set: function(t) {
          d.beforeImageLoad = t;
        }
      },
      onImageLoad: {
        default: null,
        get: function() {
          return d.imageLoad;
        },
        set: function(t) {
          d.imageLoad = t;
        }
      },
      onBeforeDraw: {
        default: null,
        get: function() {
          return d.beforeDraw;
        },
        set: function(t) {
          d.beforeDraw = t;
        }
      }
    },
    h = {
      touchStart: function(t) {
        var e = this,
          n = l(t.touches, 2),
          i = n[0],
          r = n[1];
        o(e, !0, null, null), e.__oneTouchStart(i), t.touches.length >= 2 && e.__twoTouchStart(i, r);
      },
      touchMove: function(t) {
        var e = this,
          n = l(t.touches, 2),
          i = n[0],
          r = n[1];
        o(e, null, !0), 1 === t.touches.length && e.__oneTouchMove(i), t.touches.length >= 2 && e.__twoTouchMove(i, r);
      },
      touchEnd: function(t) {
        var e = this;
        o(e, !1, !1, !0), e.__xtouchEnd();
      }
    },
    g = function() {
      function t(e) {
        u(this, t);
        var o = this,
          i = {};
        return n(o, f), Object.keys(f).forEach(function(t) {
            i[t] = f[t].default;
          }), Object.assign(o, i, e), o.prepare(), o.attachPage(), o.createCtx(), o.observer(),
          o.cutt(), o.methods(), o.init(), o.update(), o;
      }
      return s(t, [{
        key: "init",
        value: function() {
          var t = this,
            e = t.src;
          return t.version = "1.1.4", "function" == typeof t.onReady && t.onReady(t.ctx, t),
            e && t.pushOrign(e), o(t, !1, !1, !1), t.oldScale = 1, t.newScale = 1, t;
        }
      }]), t;
    }();
  return Object.assign(g.prototype, h), g.prototype.prepare = function() {
    var t = this,
      e = i().windowWidth;
    t.attachPage = function() {
      var e = getCurrentPages();
      e[e.length - 1].wecropper = t;
    }, t.createCtx = function() {
      var e = t.id;
      e ? t.ctx = wx.createCanvasContext(e) : console.error("constructor: create canvas context failed, 'id' must be valuable");
    }, t.deviceRadio = e / 750;
  }, g.prototype.observer = function() {
    var t = this,
      o = ["ready", "beforeImageLoad", "beforeDraw", "imageLoad"];
    t.on = function(n, i) {
      return o.indexOf(n) > -1 ? "function" == typeof i && ("ready" === n ? i(t) : t["on" + e(n)] = i) : console.error("event: " + n + " is invalid"),
        t;
    };
  }, g.prototype.methods = function() {
    var t = this,
      e = t.deviceRadio,
      o = t.width,
      n = t.height,
      i = t.cut,
      r = i.x,
      c = void 0 === r ? 0 : r,
      a = i.y,
      u = void 0 === a ? 0 : a,
      s = i.width,
      l = void 0 === s ? o : s,
      d = i.height,
      f = void 0 === d ? n : d;
    t.updateCanvas = function() {
      return t.croperTarget && t.ctx.drawImage(t.croperTarget, t.imgLeft, t.imgTop, t.scaleWidth, t.scaleHeight),
        "function" == typeof t.onBeforeDraw && t.onBeforeDraw(t.ctx, t), t.setBoundStyle(),
        t.ctx.draw(), t;
    }, t.pushOrign = function(e) {
      return t.src = e, "function" == typeof t.onBeforeImageLoad && t.onBeforeImageLoad(t.ctx, t),
        wx.getImageInfo({
          src: e,
          success: function(e) {
            var o = e.width / e.height;
            t.croperTarget = e.path, console.log(c, u), o < l / f ? (t.rectX = c, t.baseWidth = l,
                t.baseHeight = l / o, t.rectY = u - Math.abs((f - t.baseHeight) / 2)) : (t.rectY = u,
                t.baseWidth = f * o, t.baseHeight = f, t.rectX = c - Math.abs((l - t.baseWidth) / 2)),
              t.imgLeft = t.rectX, t.imgTop = t.rectY, t.scaleWidth = t.baseWidth, t.scaleHeight = t.baseHeight,
              t.updateCanvas(), "function" == typeof t.onImageLoad && t.onImageLoad(t.ctx, t);
          }
        }), t.update(), t;
    }, t.getCropperImage = function() {
      for (var o = arguments.length, n = Array(o), i = 0; i < o; i++) n[i] = arguments[i];
      var r = t.id;
      switch (toString.call(n[0])) {
        case "[object Object]":
          var a = n[0].quality,
            s = void 0 === a ? 10 : a;
          "number" != typeof s ? console.error("quality：" + s + " is invalid") : (s < 0 || s > 10) && console.error("quality should be ranged in 0 ~ 10"),
            wx.canvasToTempFilePath({
              canvasId: r,
              x: c,
              y: u,
              width: l,
              height: f,
              destWidth: l * s / (10 * e),
              destHeight: f * s / (10 * e),
              success: function(t) {
                "function" == typeof n[n.length - 1] && n[n.length - 1](t.tempFilePath);
              }
            });
          break;

        case "[object Function]":
          console.log("wx.canvasToTempFilePath start"), wx.canvasToTempFilePath({
            canvasId: r,
            x: c,
            y: u,
            width: l,
            height: f,
            destWidth: l / e,
            destHeight: f / e,
            success: function(t) {
              console.log("wx.canvasToTempFilePath success"), "function" == typeof n[n.length - 1] && n[n.length - 1](t.tempFilePath);
            },
            fail: function(t) {
              console.log(t);
            },
            complete: function() {
              console.log("wx.canvasToTempFilePath end");
            }
          });
      }
      return t;
    };
  }, g.prototype.cutt = function() {
    var t = this,
      e = (t.deviceRadio, t.width),
      o = t.height,
      n = t.cut,
      i = n.x,
      r = void 0 === i ? 0 : i,
      c = n.y,
      a = void 0 === c ? 0 : c,
      u = n.width,
      s = void 0 === u ? e : u,
      l = n.height,
      d = void 0 === l ? o : l;
    t.outsideBound = function(e, o) {
      t.imgLeft = e >= r ? r : t.scaleWidth + e - r <= s ? r + s - t.scaleWidth : e, t.imgTop = o >= a ? a : t.scaleHeight + o - a <= d ? a + d - t.scaleHeight : o;
    }, t.setBoundStyle = function() {
      var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        i = n.color,
        c = void 0 === i ? "#04b00f" : i,
        u = n.mask,
        l = void 0 === u ? "rgba(0, 0, 0, 0.3)" : u,
        f = n.lineWidth,
        h = void 0 === f ? 1 : f;
      t.ctx.beginPath(), t.ctx.setFillStyle(l), t.ctx.fillRect(0, 0, r, o), t.ctx.fillRect(r, 0, s, a),
        t.ctx.fillRect(r, a + d, s, o - a - d), t.ctx.fillRect(r + s, 0, e - r - s, o),
        t.ctx.fill(), t.ctx.beginPath(), t.ctx.setStrokeStyle(c), t.ctx.setLineWidth(h),
        t.ctx.moveTo(r - h, a + 10 - h), t.ctx.lineTo(r - h, a - h), t.ctx.lineTo(r + 10 - h, a - h),
        t.ctx.stroke(), t.ctx.beginPath(), t.ctx.setStrokeStyle(c), t.ctx.setLineWidth(h),
        t.ctx.moveTo(r - h, a + d - 10 + h), t.ctx.lineTo(r - h, a + d + h), t.ctx.lineTo(r + 10 - h, a + d + h),
        t.ctx.stroke(), t.ctx.beginPath(), t.ctx.setStrokeStyle(c), t.ctx.setLineWidth(h),
        t.ctx.moveTo(r + s - 10 + h, a - h), t.ctx.lineTo(r + s + h, a - h), t.ctx.lineTo(r + s + h, a + 10 - h),
        t.ctx.stroke(), t.ctx.beginPath(), t.ctx.setStrokeStyle(c), t.ctx.setLineWidth(h),
        t.ctx.moveTo(r + s + h, a + d - 10 + h), t.ctx.lineTo(r + s + h, a + d + h), t.ctx.lineTo(r + s - 10 + h, a + d + h),
        t.ctx.stroke();
    };
  }, g.prototype.update = function() {
    var t = this;
    t.src && (t.__oneTouchStart = function(e) {
      t.touchX0 = e.x, t.touchY0 = e.y;
    }, t.__oneTouchMove = function(e) {
      var o = void 0,
        n = void 0;
      if (t.touchended) return t.updateCanvas();
      o = e.x - t.touchX0, n = e.y - t.touchY0;
      var i = t.rectX + o,
        r = t.rectY + n;
      t.outsideBound(i, r), t.updateCanvas();
    }, t.__twoTouchStart = function(e, o) {
      var n = void 0,
        i = void 0,
        r = void 0;
      t.touchX1 = t.rectX + t.scaleWidth / 2, t.touchY1 = t.rectY + t.scaleHeight / 2,
        n = o.x - e.x, i = o.y - e.y, r = Math.sqrt(n * n + i * i), t.oldDistance = r;
    }, t.__twoTouchMove = function(e, o) {
      var n = void 0,
        i = void 0,
        r = void 0,
        c = t.scale,
        a = t.zoom;
      n = o.x - e.x, i = o.y - e.y, r = Math.sqrt(n * n + i * i), t.newScale = t.oldScale + .001 * a * (r - t.oldDistance),
        t.newScale <= 1 && (t.newScale = 1), t.newScale >= c && (t.newScale = c), t.scaleWidth = t.newScale * t.baseWidth,
        t.scaleHeight = t.newScale * t.baseHeight;
      var u = t.touchX1 - t.scaleWidth / 2,
        s = t.touchY1 - t.scaleHeight / 2;
      t.outsideBound(u, s), t.updateCanvas();
    }, t.__xtouchEnd = function() {
      t.oldScale = t.newScale, t.rectX = t.imgLeft, t.rectY = t.imgTop;
    });
  }, g;
});