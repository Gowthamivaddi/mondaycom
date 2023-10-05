(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [12], {
        "+6t4": function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return w
            }));
            var o = n("H+61"),
                r = n("UlJF"),
                a = n("7LId"),
                c = n("VIvw"),
                i = n("iHvq"),
                u = n("MX0m"),
                l = n.n(u),
                s = n("q1tI"),
                d = n("xwfA"),
                p = n("SQRZ"),
                f = n("Hz/y"),
                b = d.a.mud,
                h = d.a.white,
                g = [".tooltip.jsx-2448846319{font-size:0.8125rem;border-radius:8px;padding:14px;z-index:".concat(p.h - 1, ";white-space:nowrap;box-shadow:0 1px 3px rgba(0,0,0,0.12),0 1px 2px rgba(0,0,0,0.24);position:absolute;}"), ".tooltip.light.jsx-2448846319{background-color:".concat(h, ";color:").concat(b, ";}"), ".tooltip.light.jsx-2448846319:after{border-top-color:".concat(h, ";}"), ".tooltip.dark.jsx-2448846319{background-color:".concat(b, ";color:").concat(h, ";}"), ".tooltip.dark.jsx-2448846319:after{border-top-color:".concat(b, ";}"), '.tooltip.jsx-2448846319:after{content:"";position:absolute;left:calc(50% - 4px);width:0;height:0;bottom:-11px;border-style:solid;border-width:12px 12px 0 12px;border-color:transparent;}'];
            g.__hash = "2448846319";
            var m = n("TSYQ"),
                O = n.n(m),
                v = n("nKUr");

            function y(t) {
                var e = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, o = Object(i.default)(t);
                    if (e) {
                        var r = Object(i.default)(this).constructor;
                        n = Reflect.construct(o, arguments, r)
                    } else n = o.apply(this, arguments);
                    return Object(c.default)(this, n)
                }
            }
            var w = function(t) {
                Object(a.default)(n, t);
                var e = y(n);

                function n() {
                    return Object(o.default)(this, n), e.apply(this, arguments)
                }
                return Object(r.default)(n, [{
                    key: "render",
                    value: function() {
                        var t = this.props,
                            e = t.theme,
                            n = t.className;
                        return Object(v.jsxs)("div", {
                            className: "jsx-".concat(g.__hash) + " " + (O()("tooltip", e, n) || ""),
                            children: [this.props.children, Object(v.jsx)(l.a, {
                                id: g.__hash,
                                children: g
                            })]
                        })
                    }
                }]), n
            }(s.PureComponent);
            w.defaultProps = {
                theme: f.LIGHT_THEME
            }
        },
        "3DtS": function(t, e, n) {
            ! function(e, o) {
                "use strict";
                t.exports = function(t) {
                    var e = [];

                    function n(n) {
                        if (void 0 !== n) {
                            if (/ladda-button/i.test(n.className) || (n.className += " ladda-button"), n.hasAttribute("data-style") || n.setAttribute("data-style", "expand-right"), !n.querySelector(".ladda-label")) {
                                var o = document.createElement("span");
                                o.className = "ladda-label", r = n, a = o, (c = document.createRange()).selectNodeContents(r), c.surroundContents(a), r.appendChild(a)
                            }
                            var r, a, c, i, u, l = n.querySelector(".ladda-spinner");
                            l || ((l = document.createElement("span")).className = "ladda-spinner"), n.appendChild(l);
                            var s = {
                                start: function() {
                                    return i || (i = function(e) {
                                        var n, o, r = e.offsetHeight;
                                        0 === r && (r = parseFloat(window.getComputedStyle(e).height)), r > 32 && (r *= .8), e.hasAttribute("data-spinner-size") && (r = parseInt(e.getAttribute("data-spinner-size"), 10)), e.hasAttribute("data-spinner-color") && (n = e.getAttribute("data-spinner-color")), e.hasAttribute("data-spinner-lines") && (o = parseInt(e.getAttribute("data-spinner-lines"), 10));
                                        var a = .2 * r;
                                        return new t({
                                            color: n || "#fff",
                                            lines: o || 12,
                                            radius: a,
                                            length: .6 * a,
                                            width: a < 7 ? 2 : 3,
                                            zIndex: "auto",
                                            top: "auto",
                                            left: "auto",
                                            className: ""
                                        })
                                    }(n)), n.disabled = !0, n.setAttribute("data-loading", ""), clearTimeout(u), i.spin(l), this.setProgress(0), this
                                },
                                startAfter: function(t) {
                                    return clearTimeout(u), u = setTimeout((function() {
                                        s.start()
                                    }), t), this
                                },
                                stop: function() {
                                    return s.isLoading() && (n.disabled = !1, n.removeAttribute("data-loading")), clearTimeout(u), i && (u = setTimeout((function() {
                                        i.stop()
                                    }), 1e3)), this
                                },
                                toggle: function() {
                                    return this.isLoading() ? this.stop() : this.start()
                                },
                                setProgress: function(t) {
                                    t = Math.max(Math.min(t, 1), 0);
                                    var e = n.querySelector(".ladda-progress");
                                    0 === t && e && e.parentNode ? e.parentNode.removeChild(e) : (e || ((e = document.createElement("div")).className = "ladda-progress", n.appendChild(e)), e.style.width = (t || 0) * n.offsetWidth + "px")
                                },
                                enable: function() {
                                    return this.stop()
                                },
                                disable: function() {
                                    return this.stop(), n.disabled = !0, this
                                },
                                isLoading: function() {
                                    return n.hasAttribute("data-loading")
                                },
                                remove: function() {
                                    clearTimeout(u), n.disabled = !1, n.removeAttribute("data-loading"), i && (i.stop(), i = null), e.splice(e.indexOf(s), 1)
                                }
                            };
                            return e.push(s), s
                        }
                        console.warn("Ladda button target must be defined.")
                    }

                    function o(t, e) {
                        if ("function" == typeof t.addEventListener) {
                            var o = n(t),
                                r = -1;
                            t.addEventListener("click", (function() {
                                var n, a, c = !0,
                                    i = function(t, e) {
                                        for (; t.parentNode && t.tagName !== e;) t = t.parentNode;
                                        return e === t.tagName ? t : void 0
                                    }(t, "FORM");
                                if (void 0 !== i && !i.hasAttribute("novalidate"))
                                    if ("function" == typeof i.checkValidity) c = i.checkValidity();
                                    else
                                        for (var u = (n = i, a = [], ["input", "textarea", "select"].forEach((function(t) {
                                                for (var e = n.getElementsByTagName(t), o = 0; o < e.length; o++) e[o].hasAttribute("required") && a.push(e[o])
                                            })), a), l = 0; l < u.length; l++) {
                                            var s = u[l],
                                                d = s.getAttribute("type");
                                            if ("" === s.value.replace(/^\s+|\s+$/g, "") && (c = !1), "checkbox" !== d && "radio" !== d || s.checked || (c = !1), "email" === d && (c = /^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*$/i.test(s.value)), "url" === d && (c = /^([a-z]([a-z]|\d|\+|-|\.)*):(\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?((\[(|(v[\da-f]{1,}\.(([a-z]|\d|-|\.|_|~)|[!\$&'\(\)\*\+,;=]|:)+))\])|((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=])*)(:\d*)?)(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*|(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)){0})(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(s.value)), !c) break
                                        }
                                c && (o.startAfter(1), "number" == typeof e.timeout && (clearTimeout(r), r = setTimeout(o.stop, e.timeout)), "function" == typeof e.callback && e.callback.apply(null, [o]))
                            }), !1)
                        }
                    }
                    return {
                        bind: function(t, e) {
                            var n;
                            if ("string" == typeof t) n = document.querySelectorAll(t);
                            else {
                                if ("object" != typeof t) throw new Error("target must be string or object");
                                n = [t]
                            }
                            e = e || {};
                            for (var r = 0; r < n.length; r++) o(n[r], e)
                        },
                        create: n,
                        stopAll: function() {
                            for (var t = 0, n = e.length; t < n; t++) e[t].stop()
                        }
                    }
                }(n("RnbG"))
            }()
        },
        "3WCC": function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return i
            }));
            var o = n("xvhg"),
                r = n("/Z+I"),
                a = n("xwfA"),
                c = function t(e, n, o, r) {
                    var a, c, i, u, l, s, d, p = Math.round,
                        f = "string" == typeof o;
                    return "number" != typeof e || e < -1 || e > 1 || "string" != typeof n || "r" != n[0] && "#" != n[0] || o && !f ? null : (d = n.length > 9, d = f ? o.length > 9 || "c" == o && !d : d, l = t.pSBCr(n), u = e < 0, s = o && "c" != o ? t.pSBCr(o) : u ? {
                        r: 0,
                        g: 0,
                        b: 0,
                        a: -1
                    } : {
                        r: 255,
                        g: 255,
                        b: 255,
                        a: -1
                    }, u = 1 - (e = u ? -1 * e : e), l && s ? (r ? (a = p(u * l.r + e * s.r), c = p(u * l.g + e * s.g), i = p(u * l.b + e * s.b)) : (a = p(Math.pow(u * Math.pow(l.r, 2) + e * Math.pow(s.r, 2), .5)), c = p(Math.pow(u * Math.pow(l.g, 2) + e * Math.pow(s.g, 2), .5)), i = p(Math.pow(u * Math.pow(l.b, 2) + e * Math.pow(s.b, 2), .5))), f = l.a, s = s.a, f = (l = f >= 0 || s >= 0) ? f < 0 ? s : s < 0 ? f : f * u + s * e : 0, d ? "rgb" + (l ? "a(" : "(") + a + "," + c + "," + i + (l ? "," + p(1e3 * f) / 1e3 : "") + ")" : "#" + (4294967296 + 16777216 * a + 65536 * c + 256 * i + (l ? p(255 * f) : 0)).toString(16).slice(1, l ? void 0 : -2)) : null)
                };
            c.pSBCr = function(t) {
                var e = parseInt,
                    n = t.length,
                    r = {};
                if (n > 9) {
                    var a = t = t.split(","),
                        c = Object(o.a)(a, 4),
                        i = c[0],
                        u = c[1],
                        l = c[2],
                        s = c[3];
                    if ((n = t.length) < 3 || n > 4) return null;
                    r.r = e("a" == i[3] ? i.slice(5) : i.slice(4)), r.g = e(u), r.b = e(l), r.a = s ? parseFloat(s) : -1
                } else {
                    if (8 == n || 6 == n || n < 4) return null;
                    n < 6 && (t = "#" + t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + (n > 4 ? t[4] + t[4] : "")), t = e(t.slice(1), 16), 9 == n || 5 == n ? (r.r = t >> 24 & 255, r.g = t >> 16 & 255, r.b = t >> 8 & 255, r.a = Math.round((255 & t) / .255) / 1e3) : (r.r = t >> 16, r.g = t >> 8 & 255, r.b = 255 & t, r.a = -1)
                }
                return r
            };
            var i = function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -.3;
                return t === a.a[r.GRADIANT_WORKOS_IRIS_COLOR_NAME] ? a.a[r.GRADIANT_WORKOS_IRIS_HOVER_COLOR_NAME] : c(e, t)
            }
        },
        "7sg0": function(t, e, n) {
            var o;
            ! function(t) {
                var e = navigator.userAgent;
                t.HTMLPictureElement && /ecko/.test(e) && e.match(/rv\:(\d+)/) && RegExp.$1 < 45 && addEventListener("resize", function() {
                    var e, n = document.createElement("source"),
                        o = function(t) {
                            var e, o, r = t.parentNode;
                            "PICTURE" === r.nodeName.toUpperCase() ? (e = n.cloneNode(), r.insertBefore(e, r.firstElementChild), setTimeout((function() {
                                r.removeChild(e)
                            }))) : (!t._pfLastSize || t.offsetWidth > t._pfLastSize) && (t._pfLastSize = t.offsetWidth, o = t.sizes, t.sizes += ",100vw", setTimeout((function() {
                                t.sizes = o
                            })))
                        },
                        r = function() {
                            var t, e = document.querySelectorAll("picture > img, img[srcset][sizes]");
                            for (t = 0; t < e.length; t++) o(e[t])
                        },
                        a = function() {
                            clearTimeout(e), e = setTimeout(r, 99)
                        },
                        c = t.matchMedia && matchMedia("(orientation: landscape)"),
                        i = function() {
                            a(), c && c.addListener && c.addListener(a)
                        };
                    return n.srcset = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", /^[c|i]|d$/.test(document.readyState || "") ? i() : document.addEventListener("DOMContentLoaded", i), a
                }())
            }(window),
            function(r, a, c) {
                "use strict";
                var i, u, l;
                a.createElement("picture");
                var s = {},
                    d = !1,
                    p = function() {},
                    f = a.createElement("img"),
                    b = f.getAttribute,
                    h = f.setAttribute,
                    g = f.removeAttribute,
                    m = a.documentElement,
                    O = {},
                    v = {
                        algorithm: ""
                    },
                    y = "data-pfsrc",
                    w = y + "set",
                    x = navigator.userAgent,
                    _ = /rident/.test(x) || /ecko/.test(x) && x.match(/rv\:(\d+)/) && RegExp.$1 > 35,
                    k = "currentSrc",
                    j = /\s+\+?\d+(e\d+)?w/,
                    E = /(\([^)]+\))?\s*(.+)/,
                    R = r.picturefillCFG,
                    C = "font-size:100%!important;",
                    A = !0,
                    N = {},
                    I = {},
                    T = r.devicePixelRatio,
                    S = {
                        px: 1,
                        in: 96
                    },
                    D = a.createElement("a"),
                    M = !1,
                    P = /^[ \t\n\r\u000c]+/,
                    L = /^[, \t\n\r\u000c]+/,
                    F = /^[^ \t\n\r\u000c]+/,
                    z = /[,]+$/,
                    U = /^\d+$/,
                    K = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,
                    G = function(t, e, n, o) {
                        t.addEventListener ? t.addEventListener(e, n, o || !1) : t.attachEvent && t.attachEvent("on" + e, n)
                    },
                    B = function(t) {
                        var e = {};
                        return function(n) {
                            return n in e || (e[n] = t(n)), e[n]
                        }
                    };

                function W(t) {
                    return " " === t || "\t" === t || "\n" === t || "\f" === t || "\r" === t
                }
                var V, H = function() {
                        var t = /^([\d\.]+)(em|vw|px)$/,
                            e = B((function(t) {
                                return "return " + function() {
                                    for (var t = arguments, e = 0, n = t[0]; ++e in t;) n = n.replace(t[e], t[++e]);
                                    return n
                                }((t || "").toLowerCase(), /\band\b/g, "&&", /,/g, "||", /min-([a-z-\s]+):/g, "e.$1>=", /max-([a-z-\s]+):/g, "e.$1<=", /calc([^)]+)/g, "($1)", /(\d+[\.]*[\d]*)([a-z]+)/g, "($1 * e.$2)", /^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi, "") + ";"
                            }));
                        return function(n, o) {
                            var r;
                            if (!(n in N))
                                if (N[n] = !1, o && (r = n.match(t))) N[n] = r[1] * S[r[2]];
                                else try {
                                    N[n] = new Function("e", e(n))(S)
                                } catch (a) {}
                            return N[n]
                        }
                    }(),
                    Y = function(t, e) {
                        return t.w ? (t.cWidth = s.calcListLength(e || "100vw"), t.res = t.w / t.cWidth) : t.res = t.d, t
                    },
                    q = function(t) {
                        if (d) {
                            var e, n, o, r = t || {};
                            if (r.elements && 1 === r.elements.nodeType && ("IMG" === r.elements.nodeName.toUpperCase() ? r.elements = [r.elements] : (r.context = r.elements, r.elements = null)), o = (e = r.elements || s.qsa(r.context || a, r.reevaluate || r.reselect ? s.sel : s.selShort)).length) {
                                for (s.setupRun(r), M = !0, n = 0; n < o; n++) s.fillImg(e[n], r);
                                s.teardownRun(r)
                            }
                        }
                    };

                function J(t, e, n, o) {
                    var r, a, c;
                    return "saveData" === v.algorithm ? t > 2.7 ? c = n + 1 : (a = (e - n) * (r = Math.pow(t - .6, 1.5)), o && (a += .1 * r), c = t + a) : c = n > 1 ? Math.sqrt(t * e) : t, c > n
                }

                function X(t, e) {
                    return t.res - e.res
                }

                function $(t, e) {
                    var n, o, r;
                    if (t && e)
                        for (r = s.parseSet(e), t = s.makeUrl(t), n = 0; n < r.length; n++)
                            if (t === s.makeUrl(r[n].url)) {
                                o = r[n];
                                break
                            }
                    return o
                }
                r.console && console.warn, k in f || (k = "src"), O["image/jpeg"] = !0, O["image/gif"] = !0, O["image/png"] = !0, O["image/svg+xml"] = a.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1"), s.ns = ("pf" + (new Date).getTime()).substr(0, 9), s.supSrcset = "srcset" in f, s.supSizes = "sizes" in f, s.supPicture = !!r.HTMLPictureElement, s.supSrcset && s.supPicture && !s.supSizes && (V = a.createElement("img"), f.srcset = "data:,a", V.src = "data:,a", s.supSrcset = f.complete === V.complete, s.supPicture = s.supSrcset && s.supPicture), s.supSrcset && !s.supSizes ? function() {
                    var t = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
                        e = a.createElement("img"),
                        n = function() {
                            2 === e.width && (s.supSizes = !0), u = s.supSrcset && !s.supSizes, d = !0, setTimeout(q)
                        };
                    e.onload = n, e.onerror = n, e.setAttribute("sizes", "9px"), e.srcset = t + " 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 9w", e.src = t
                }() : d = !0, s.selShort = "picture>img,img[srcset]", s.sel = s.selShort, s.cfg = v, s.DPR = T || 1, s.u = S, s.types = O, s.setSize = p, s.makeUrl = B((function(t) {
                    return D.href = t, D.href
                })), s.qsa = function(t, e) {
                    return "querySelector" in t ? t.querySelectorAll(e) : []
                }, s.matchesMedia = function() {
                    return r.matchMedia && (matchMedia("(min-width: 0.1em)") || {}).matches ? s.matchesMedia = function(t) {
                        return !t || matchMedia(t).matches
                    } : s.matchesMedia = s.mMQ, s.matchesMedia.apply(this, arguments)
                }, s.mMQ = function(t) {
                    return !t || H(t)
                }, s.calcLength = function(t) {
                    var e = H(t, !0) || !1;
                    return e < 0 && (e = !1), e
                }, s.supportsType = function(t) {
                    return !t || O[t]
                }, s.parseSize = B((function(t) {
                    var e = (t || "").match(E);
                    return {
                        media: e && e[1],
                        length: e && e[2]
                    }
                })), s.parseSet = function(t) {
                    return t.cands || (t.cands = function(t, e) {
                        function n(e) {
                            var n, o = e.exec(t.substring(l));
                            if (o) return n = o[0], l += n.length, n
                        }
                        var o, r, a, c, i, u = t.length,
                            l = 0,
                            s = [];

                        function d() {
                            var t, n, a, c, i, u, l, d, p, f = !1,
                                b = {};
                            for (c = 0; c < r.length; c++) u = (i = r[c])[i.length - 1], l = i.substring(0, i.length - 1), d = parseInt(l, 10), p = parseFloat(l), U.test(l) && "w" === u ? ((t || n) && (f = !0), 0 === d ? f = !0 : t = d) : K.test(l) && "x" === u ? ((t || n || a) && (f = !0), p < 0 ? f = !0 : n = p) : U.test(l) && "h" === u ? ((a || n) && (f = !0), 0 === d ? f = !0 : a = d) : f = !0;
                            f || (b.url = o, t && (b.w = t), n && (b.d = n), a && (b.h = a), a || n || t || (b.d = 1), 1 === b.d && (e.has1x = !0), b.set = e, s.push(b))
                        }

                        function p() {
                            for (n(P), a = "", c = "in descriptor";;) {
                                if (i = t.charAt(l), "in descriptor" === c)
                                    if (W(i)) a && (r.push(a), a = "", c = "after descriptor");
                                    else {
                                        if ("," === i) return l += 1, a && r.push(a), void d();
                                        if ("(" === i) a += i, c = "in parens";
                                        else {
                                            if ("" === i) return a && r.push(a), void d();
                                            a += i
                                        }
                                    }
                                else if ("in parens" === c)
                                    if (")" === i) a += i, c = "in descriptor";
                                    else {
                                        if ("" === i) return r.push(a), void d();
                                        a += i
                                    }
                                else if ("after descriptor" === c)
                                    if (W(i));
                                    else {
                                        if ("" === i) return void d();
                                        c = "in descriptor", l -= 1
                                    }
                                l += 1
                            }
                        }
                        for (;;) {
                            if (n(L), l >= u) return s;
                            o = n(F), r = [], "," === o.slice(-1) ? (o = o.replace(z, ""), d()) : p()
                        }
                    }(t.srcset, t)), t.cands
                }, s.getEmValue = function() {
                    var t;
                    if (!i && (t = a.body)) {
                        var e = a.createElement("div"),
                            n = m.style.cssText,
                            o = t.style.cssText;
                        e.style.cssText = "position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)", m.style.cssText = C, t.style.cssText = C, t.appendChild(e), i = e.offsetWidth, t.removeChild(e), i = parseFloat(i, 10), m.style.cssText = n, t.style.cssText = o
                    }
                    return i || 16
                }, s.calcListLength = function(t) {
                    if (!(t in I) || v.uT) {
                        var e = s.calcLength(function(t) {
                            var e, n, o, r, a, c, i, u = /^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,
                                l = /^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;
                            for (o = (n = function(t) {
                                    var e, n = "",
                                        o = [],
                                        r = [],
                                        a = 0,
                                        c = 0,
                                        i = !1;

                                    function u() {
                                        n && (o.push(n), n = "")
                                    }

                                    function l() {
                                        o[0] && (r.push(o), o = [])
                                    }
                                    for (;;) {
                                        if ("" === (e = t.charAt(c))) return u(), l(), r;
                                        if (i) {
                                            if ("*" === e && "/" === t[c + 1]) {
                                                i = !1, c += 2, u();
                                                continue
                                            }
                                            c += 1
                                        } else {
                                            if (W(e)) {
                                                if (t.charAt(c - 1) && W(t.charAt(c - 1)) || !n) {
                                                    c += 1;
                                                    continue
                                                }
                                                if (0 === a) {
                                                    u(), c += 1;
                                                    continue
                                                }
                                                e = " "
                                            } else if ("(" === e) a += 1;
                                            else if (")" === e) a -= 1;
                                            else {
                                                if ("," === e) {
                                                    u(), l(), c += 1;
                                                    continue
                                                }
                                                if ("/" === e && "*" === t.charAt(c + 1)) {
                                                    i = !0, c += 2;
                                                    continue
                                                }
                                            }
                                            n += e, c += 1
                                        }
                                    }
                                }(t)).length, e = 0; e < o; e++)
                                if (a = (r = n[e])[r.length - 1], i = a, u.test(i) && parseFloat(i) >= 0 || l.test(i) || "0" === i || "-0" === i || "+0" === i) {
                                    if (c = a, r.pop(), 0 === r.length) return c;
                                    if (r = r.join(" "), s.matchesMedia(r)) return c
                                }
                            return "100vw"
                        }(t));
                        I[t] = e || S.width
                    }
                    return I[t]
                }, s.setRes = function(t) {
                    var e;
                    if (t)
                        for (var n = 0, o = (e = s.parseSet(t)).length; n < o; n++) Y(e[n], t.sizes);
                    return e
                }, s.setRes.res = Y, s.applySetCandidate = function(t, e) {
                    if (t.length) {
                        var n, o, r, a, c, i, u, l, d, p = e[s.ns],
                            f = s.DPR;
                        if (i = p.curSrc || e[k], (u = p.curCan || function(t, e, n) {
                                var o;
                                return !n && e && (n = (n = t[s.ns].sets) && n[n.length - 1]), (o = $(e, n)) && (e = s.makeUrl(e), t[s.ns].curSrc = e, t[s.ns].curCan = o, o.res || Y(o, o.set.sizes)), o
                            }(e, i, t[0].set)) && u.set === t[0].set && ((d = _ && !e.complete && u.res - .1 > f) || (u.cached = !0, u.res >= f && (c = u))), !c)
                            for (t.sort(X), c = t[(a = t.length) - 1], o = 0; o < a; o++)
                                if ((n = t[o]).res >= f) {
                                    c = t[r = o - 1] && (d || i !== s.makeUrl(n.url)) && J(t[r].res, n.res, f, t[r].cached) ? t[r] : n;
                                    break
                                }
                        c && (l = s.makeUrl(c.url), p.curSrc = l, p.curCan = c, l !== i && s.setSrc(e, c), s.setSize(e))
                    }
                }, s.setSrc = function(t, e) {
                    var n;
                    t.src = e.url, "image/svg+xml" === e.set.type && (n = t.style.width, t.style.width = t.offsetWidth + 1 + "px", t.offsetWidth + 1 && (t.style.width = n))
                }, s.getSet = function(t) {
                    var e, n, o, r = !1,
                        a = t[s.ns].sets;
                    for (e = 0; e < a.length && !r; e++)
                        if ((n = a[e]).srcset && s.matchesMedia(n.media) && (o = s.supportsType(n.type))) {
                            "pending" === o && (n = o), r = n;
                            break
                        }
                    return r
                }, s.parseSets = function(t, e, n) {
                    var o, r, a, i, l = e && "PICTURE" === e.nodeName.toUpperCase(),
                        d = t[s.ns];
                    (d.src === c || n.src) && (d.src = b.call(t, "src"), d.src ? h.call(t, y, d.src) : g.call(t, y)), (d.srcset === c || n.srcset || !s.supSrcset || t.srcset) && (o = b.call(t, "srcset"), d.srcset = o, i = !0), d.sets = [], l && (d.pic = !0, function(t, e) {
                        var n, o, r, a, c = t.getElementsByTagName("source");
                        for (n = 0, o = c.length; n < o; n++)(r = c[n])[s.ns] = !0, (a = r.getAttribute("srcset")) && e.push({
                            srcset: a,
                            media: r.getAttribute("media"),
                            type: r.getAttribute("type"),
                            sizes: r.getAttribute("sizes")
                        })
                    }(e, d.sets)), d.srcset ? (r = {
                        srcset: d.srcset,
                        sizes: b.call(t, "sizes")
                    }, d.sets.push(r), (a = (u || d.src) && j.test(d.srcset || "")) || !d.src || $(d.src, r) || r.has1x || (r.srcset += ", " + d.src, r.cands.push({
                        url: d.src,
                        d: 1,
                        set: r
                    }))) : d.src && d.sets.push({
                        srcset: d.src,
                        sizes: null
                    }), d.curCan = null, d.curSrc = c, d.supported = !(l || r && !s.supSrcset || a && !s.supSizes), i && s.supSrcset && !d.supported && (o ? (h.call(t, w, o), t.srcset = "") : g.call(t, w)), d.supported && !d.srcset && (!d.src && t.src || t.src !== s.makeUrl(d.src)) && (null === d.src ? t.removeAttribute("src") : t.src = d.src), d.parsed = !0
                }, s.fillImg = function(t, e) {
                    var n, o = e.reselect || e.reevaluate;
                    t[s.ns] || (t[s.ns] = {}), n = t[s.ns], (o || n.evaled !== l) && (n.parsed && !e.reevaluate || s.parseSets(t, t.parentNode, e), n.supported ? n.evaled = l : function(t) {
                        var e, n = s.getSet(t),
                            o = !1;
                        "pending" !== n && (o = l, n && (e = s.setRes(n), s.applySetCandidate(e, t))), t[s.ns].evaled = o
                    }(t))
                }, s.setupRun = function() {
                    M && !A && T === r.devicePixelRatio || (A = !1, T = r.devicePixelRatio, N = {}, I = {}, s.DPR = T || 1, S.width = Math.max(r.innerWidth || 0, m.clientWidth), S.height = Math.max(r.innerHeight || 0, m.clientHeight), S.vw = S.width / 100, S.vh = S.height / 100, l = [S.height, S.width, T].join("-"), S.em = s.getEmValue(), S.rem = S.em)
                }, s.supPicture ? (q = p, s.fillImg = p) : function() {
                    var t, e = r.attachEvent ? /d$|^c/ : /d$|^c|^i/,
                        n = function() {
                            var r = a.readyState || "";
                            o = setTimeout(n, "loading" === r ? 200 : 999), a.body && (s.fillImgs(), (t = t || e.test(r)) && clearTimeout(o))
                        },
                        o = setTimeout(n, a.body ? 9 : 99),
                        c = m.clientHeight;
                    G(r, "resize", function(t, e) {
                        var n, o, r = function() {
                            var a = new Date - o;
                            a < e ? n = setTimeout(r, e - a) : (n = null, t())
                        };
                        return function() {
                            o = new Date, n || (n = setTimeout(r, e))
                        }
                    }((function() {
                        A = Math.max(r.innerWidth || 0, m.clientWidth) !== S.width || m.clientHeight !== c, c = m.clientHeight, A && s.fillImgs()
                    }), 99)), G(a, "readystatechange", n)
                }(), s.picturefill = q, s.fillImgs = q, s.teardownRun = p, q._ = s, r.picturefillCFG = {
                    pf: s,
                    push: function(t) {
                        var e = t.shift();
                        "function" === typeof s[e] ? s[e].apply(s, t) : (v[e] = t[0], M && s.fillImgs({
                            reselect: !0
                        }))
                    }
                };
                for (; R && R.length;) r.picturefillCFG.push(R.shift());
                r.picturefill = q, "object" === typeof t.exports ? t.exports = q : (o = function() {
                    return q
                }.call(e, n, e, t)) === c || (t.exports = o), s.supPicture || (O["image/webp"] = function(t, e) {
                    var n = new r.Image;
                    return n.onerror = function() {
                        O[t] = !1, q()
                    }, n.onload = function() {
                        O[t] = 1 === n.width, q()
                    }, n.src = e, "pending"
                }("image/webp", "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="))
            }(window, document)
        },
        GL8T: function(t, e) {
            t.exports = function(t, e, n) {
                var o = t.direction,
                    r = t.value;
                switch (o) {
                    case "top":
                        return n.top + r < e.top && n.bottom > e.bottom && n.left < e.left && n.right > e.right;
                    case "left":
                        return n.left + r < e.left && n.bottom > e.bottom && n.top < e.top && n.right > e.right;
                    case "bottom":
                        return n.bottom - r > e.bottom && n.left < e.left && n.right > e.right && n.top < e.top;
                    case "right":
                        return n.right - r > e.right && n.left < e.left && n.top < e.top && n.bottom > e.bottom
                }
            }
        },
        "Hz/y": function(t, e) {
            t.exports = {
                LIGHT_THEME: "light",
                DARK_THEME: "dark"
            }
        },
        J2DA: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
                    }
                    return t
                },
                r = function() {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var o = e[n];
                            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                        }
                    }
                    return function(e, n, o) {
                        return n && t(e.prototype, n), o && t(e, o), e
                    }
                }(),
                a = n("q1tI"),
                c = s(a),
                i = s(n("17x9")),
                u = s(n("3DtS")),
                l = n("V/Nc");

            function s(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }

            function d(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function p(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" !== typeof e && "function" !== typeof e ? t : e
            }
            var f = ["loading", "progress"],
                b = function(t) {
                    function e() {
                        var t, n, o;
                        d(this, e);
                        for (var r = arguments.length, a = Array(r), c = 0; c < r; c++) a[c] = arguments[c];
                        return n = o = p(this, (t = e.__proto__ || Object.getPrototypeOf(e)).call.apply(t, [this].concat(a))), o.setNode = function(t) {
                            o.node = t
                        }, o.updateLaddaInstance = function(t) {
                            t.loading !== o.props.loading && (t.loading ? o.laddaInstance.start() : t.disabled ? o.laddaInstance.disable() : o.laddaInstance.stop()), t.progress !== o.props.progress && o.laddaInstance.setProgress(t.progress)
                        }, p(o, n)
                    }
                    return function(t, e) {
                        if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }(e, t), r(e, [{
                        key: "componentDidMount",
                        value: function() {
                            this.laddaInstance = u.default.create(this.node), this.props.loading && this.laddaInstance.start(), "undefined" !== typeof this.props.progress && this.laddaInstance.setProgress(this.props.progress)
                        }
                    }, {
                        key: "componentWillReceiveProps",
                        value: function(t) {
                            this.updateLaddaInstance(t)
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.laddaInstance.remove()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return c.default.createElement("button", o({}, function(t, e) {
                                var n = {};
                                return Object.keys(t).forEach((function(o) {
                                    -1 === e.indexOf(o) && (n[o] = t[o])
                                })), n
                            }(this.props, f), {
                                className: "ladda-button " + (this.props.className || ""),
                                ref: this.setNode,
                                disabled: this.props.disabled || this.props.loading
                            }), c.default.createElement("span", {
                                className: "ladda-label"
                            }, this.props.children))
                        }
                    }]), e
                }(a.Component);
            b.propTypes = {
                children: i.default.node,
                className: i.default.string,
                progress: i.default.number,
                loading: i.default.bool,
                disabled: i.default.bool,
                "data-color": i.default.string,
                "data-size": i.default.oneOf(l.SIZES),
                "data-style": i.default.oneOf(l.STYLES),
                "data-spinner-size": i.default.number,
                "data-spinner-color": i.default.string,
                "data-spinner-lines": i.default.number
            }, e.default = b
        },
        JmpY: function(t, e, n) {
            var o = n("eUgh");
            t.exports = function(t, e) {
                return o(e, (function(e) {
                    return t[e]
                }))
            }
        },
        KsWq: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return r
            }));
            var o = n("nKUr"),
                r = function() {
                    return [Object(o.jsx)("link", {
                        rel: "shortcut icon",
                        href: "/static/img/favicons/favicon.ico"
                    }), Object(o.jsx)("link", {
                        rel: "icon",
                        sizes: "16x16 32x32 64x64",
                        href: "/static/img/favicons/favicon.ico"
                    }), Object(o.jsx)("link", {
                        rel: "icon",
                        type: "image/png",
                        sizes: "196x196",
                        href: "/static/img/favicons/favicon-monday5-192.png"
                    }), Object(o.jsx)("link", {
                        rel: "icon",
                        type: "image/png",
                        sizes: "96x96",
                        href: "/static/img/favicons/favicon-monday5-96.png"
                    }), Object(o.jsx)("link", {
                        rel: "icon",
                        type: "image/png",
                        sizes: "64x64",
                        href: "/static/img/favicons/favicon-monday5-60.png"
                    }), Object(o.jsx)("link", {
                        rel: "icon",
                        type: "image/png",
                        sizes: "32x32",
                        href: "/static/img/favicons/favicon-monday5-32.png"
                    }), Object(o.jsx)("link", {
                        rel: "icon",
                        type: "image/png",
                        sizes: "16x16",
                        href: "/static/img/favicons/favicon-monday5-16.png"
                    }), Object(o.jsx)("link", {
                        rel: "apple-touch-icon",
                        href: "/static/img/favicons/favicon-monday5-57.png"
                    }), Object(o.jsx)("link", {
                        rel: "apple-touch-icon",
                        sizes: "114x114",
                        href: "/static/img/favicons/favicon-monday5-114.png"
                    }), Object(o.jsx)("link", {
                        rel: "apple-touch-icon",
                        sizes: "72x72",
                        href: "/static/img/favicons/favicon-monday5-72.png"
                    }), Object(o.jsx)("link", {
                        rel: "apple-touch-icon",
                        sizes: "144x144",
                        href: "/static/img/favicons/favicon-monday5-144.png"
                    }), Object(o.jsx)("link", {
                        rel: "apple-touch-icon",
                        sizes: "60x60",
                        href: "/static/img/favicons/favicon-monday5-60.png"
                    }), Object(o.jsx)("link", {
                        rel: "apple-touch-icon",
                        sizes: "120x120",
                        href: "/static/img/favicons/favicon-monday5-120.png"
                    }), Object(o.jsx)("link", {
                        rel: "apple-touch-icon",
                        sizes: "76x76",
                        href: "/static/img/favicons/favicon-monday5-76.png"
                    }), Object(o.jsx)("link", {
                        rel: "apple-touch-icon",
                        sizes: "152x152",
                        href: "/static/img/favicons/favicon-monday5-152.png"
                    }), Object(o.jsx)("link", {
                        rel: "apple-touch-icon",
                        sizes: "180x180",
                        href: "/static/img/favicons/favicon-monday5-180.png"
                    }), Object(o.jsx)("meta", {
                        name: "msapplication-TileColor",
                        content: "#FFFFFF"
                    }), Object(o.jsx)("meta", {
                        name: "msapplication-TileImage",
                        content: "/static/img/favicons/favicon-monday5-144.png"
                    }), Object(o.jsx)("link", {
                        rel: "icon",
                        type: "image/x-icon",
                        href: "/static/img/favicons/favicon.ico"
                    })]
                }
        },
        L92s: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return h
            }));
            var o = n("H+61"),
                r = n("UlJF"),
                a = n("7LId"),
                c = n("VIvw"),
                i = n("iHvq"),
                u = n("MX0m"),
                l = n.n(u),
                s = n("q1tI"),
                d = ["@-webkit-keyframes shake-jsx-1473421095{10%,90%{-webkit-transform:translate3d(-1px,0,0);-ms-transform:translate3d(-1px,0,0);transform:translate3d(-1px,0,0);}20%,80%{-webkit-transform:translate3d(2px,0,0);-ms-transform:translate3d(2px,0,0);transform:translate3d(2px,0,0);}30%,50%,70%{-webkit-transform:translate3d(-4px,0,0);-ms-transform:translate3d(-4px,0,0);transform:translate3d(-4px,0,0);}40%,60%{-webkit-transform:translate3d(4px,0,0);-ms-transform:translate3d(4px,0,0);transform:translate3d(4px,0,0);}}", "@keyframes shake-jsx-1473421095{10%,90%{-webkit-transform:translate3d(-1px,0,0);-ms-transform:translate3d(-1px,0,0);transform:translate3d(-1px,0,0);}20%,80%{-webkit-transform:translate3d(2px,0,0);-ms-transform:translate3d(2px,0,0);transform:translate3d(2px,0,0);}30%,50%,70%{-webkit-transform:translate3d(-4px,0,0);-ms-transform:translate3d(-4px,0,0);transform:translate3d(-4px,0,0);}40%,60%{-webkit-transform:translate3d(4px,0,0);-ms-transform:translate3d(4px,0,0);transform:translate3d(4px,0,0);}}", ".shake.jsx-1473421095{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}", ".shake.active.jsx-1473421095{-webkit-animation:shake-jsx-1473421095 0.5s cubic-bezier(0.36,0.07,0.19,0.97) both;animation:shake-jsx-1473421095 0.5s cubic-bezier(0.36,0.07,0.19,0.97) both;-webkit-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);transform:translate3d(0,0,0);-webkit-animation-iteration-count:1;animation-iteration-count:1;}"];
            d.__hash = "1473421095";
            var p = d,
                f = n("nKUr");

            function b(t) {
                var e = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, o = Object(i.default)(t);
                    if (e) {
                        var r = Object(i.default)(this).constructor;
                        n = Reflect.construct(o, arguments, r)
                    } else n = o.apply(this, arguments);
                    return Object(c.default)(this, n)
                }
            }
            var h = function(t) {
                Object(a.default)(n, t);
                var e = b(n);

                function n() {
                    return Object(o.default)(this, n), e.apply(this, arguments)
                }
                return Object(r.default)(n, [{
                    key: "render",
                    value: function() {
                        var t = this.props,
                            e = t.children,
                            n = t.isActive;
                        return Object(f.jsxs)("div", {
                            className: "jsx-".concat(p.__hash) + " " + "shake ".concat(n ? "active" : "stop"),
                            children: [e, Object(f.jsx)(l.a, {
                                id: p.__hash,
                                children: p
                            })]
                        })
                    }
                }]), n
            }(s.PureComponent);
            h.defaultProps = {
                isActive: !1
            }
        },
        "P/G1": function(t, e, n) {
            var o = n("JmpY"),
                r = n("7GkX");
            t.exports = function(t) {
                return null == t ? [] : o(t, r(t))
            }
        },
        PkAx: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return g
            })), n.d(e, "b", (function() {
                return m
            }));
            var o = n("cpVT"),
                r = n("dhJC"),
                a = n("H+61"),
                c = n("UlJF"),
                i = n("+Css"),
                u = n("7LId"),
                l = n("VIvw"),
                s = n("iHvq"),
                d = n("q1tI"),
                p = n("nKUr");

            function f(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    e && (o = o.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function b(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? f(Object(n), !0).forEach((function(e) {
                        Object(o.default)(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : f(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function h(t) {
                var e = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, o = Object(s.default)(t);
                    if (e) {
                        var r = Object(s.default)(this).constructor;
                        n = Reflect.construct(o, arguments, r)
                    } else n = o.apply(this, arguments);
                    return Object(l.default)(this, n)
                }
            }
            var g = Object(d.createContext)(null),
                m = function(t) {
                    var e = function(e) {
                        Object(u.default)(o, e);
                        var n = h(o);

                        function o(t) {
                            var e;
                            return Object(a.default)(this, o), (e = n.call(this, t)).getAbTestsFromValue = e.getAbTestsFromValue.bind(Object(i.a)(e)), e.getAbTestExactEventNameFromValue = e.getAbTestExactEventNameFromValue.bind(Object(i.a)(e)), e
                        }
                        return Object(c.default)(o, [{
                            key: "getAbTestsFromValue",
                            value: function(t) {
                                return t && t.abTestVariants || []
                            }
                        }, {
                            key: "getAbTestExactEventNameFromValue",
                            value: function(t) {
                                return t && t.abTestExactEventName || null
                            }
                        }, {
                            key: "render",
                            value: function() {
                                var e = this,
                                    n = this.props,
                                    o = n.forwardedRef,
                                    a = Object(r.default)(n, ["forwardedRef"]);
                                return Object(p.jsx)(g.Consumer, {
                                    children: function(n) {
                                        return Object(p.jsx)(t, b(b({
                                            ref: o
                                        }, a), {}, {
                                            abTests: e.getAbTestsFromValue(n),
                                            abTestExactEventName: e.getAbTestExactEventNameFromValue(n)
                                        }))
                                    }
                                })
                            }
                        }]), o
                    }(d.PureComponent);
                    return Object(d.forwardRef)((function(t, n) {
                        return Object(p.jsx)(e, b(b({}, t), {}, {
                            forwardedRef: n
                        }))
                    }))
                }
        },
        QTzx: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return h
            })), n.d(e, "b", (function() {
                return g
            }));
            var o = n("cpVT"),
                r = n("dhJC"),
                a = n("H+61"),
                c = n("UlJF"),
                i = n("7LId"),
                u = n("VIvw"),
                l = n("iHvq"),
                s = n("q1tI"),
                d = n("nKUr");

            function p(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    e && (o = o.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function f(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? p(Object(n), !0).forEach((function(e) {
                        Object(o.default)(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function b(t) {
                var e = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, o = Object(l.default)(t);
                    if (e) {
                        var r = Object(l.default)(this).constructor;
                        n = Reflect.construct(o, arguments, r)
                    } else n = o.apply(this, arguments);
                    return Object(u.default)(this, n)
                }
            }
            var h = Object(s.createContext)(null),
                g = function(t) {
                    var e = function(e) {
                        Object(i.default)(o, e);
                        var n = b(o);

                        function o() {
                            return Object(a.default)(this, o), n.apply(this, arguments)
                        }
                        return Object(c.default)(o, [{
                            key: "render",
                            value: function() {
                                var e = this.props,
                                    n = e.forwardedRef,
                                    o = Object(r.default)(e, ["forwardedRef"]);
                                return Object(d.jsx)(h.Consumer, {
                                    children: function(e) {
                                        return Object(d.jsx)(t, f(f({
                                            ref: n
                                        }, o), e))
                                    }
                                })
                            }
                        }]), o
                    }(s.PureComponent);
                    return Object(s.forwardRef)((function(t, n) {
                        return Object(d.jsx)(e, f(f({}, t), {}, {
                            forwardedRef: n
                        }))
                    }))
                }
        },
        QxgC: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return o
            })), n.d(e, "b", (function() {
                return r
            }));
            var o = "below",
                r = "side"
        },
        RnbG: function(t, e, n) {
            var o, r, a;
            a = function() {
                "use strict";
                var t, e, n = ["webkit", "Moz", "ms", "O"],
                    o = {};

                function r(t, e) {
                    var n, o = document.createElement(t || "div");
                    for (n in e) o[n] = e[n];
                    return o
                }

                function a(t) {
                    for (var e = 1, n = arguments.length; e < n; e++) t.appendChild(arguments[e]);
                    return t
                }

                function c(n, r, a, c) {
                    var i = ["opacity", r, ~~(100 * n), a, c].join("-"),
                        u = .01 + a / c * 100,
                        l = Math.max(1 - (1 - n) / r * (100 - u), n),
                        s = t.substring(0, t.indexOf("Animation")).toLowerCase(),
                        d = s && "-" + s + "-" || "";
                    return o[i] || (e.insertRule("@" + d + "keyframes " + i + "{0%{opacity:" + l + "}" + u + "%{opacity:" + n + "}" + (u + .01) + "%{opacity:1}" + (u + r) % 100 + "%{opacity:" + n + "}100%{opacity:" + l + "}}", e.cssRules.length), o[i] = 1), i
                }

                function i(t, e) {
                    var o, r, a = t.style;
                    if (void 0 !== a[e = e.charAt(0).toUpperCase() + e.slice(1)]) return e;
                    for (r = 0; r < n.length; r++)
                        if (void 0 !== a[o = n[r] + e]) return o
                }

                function u(t, e) {
                    for (var n in e) t.style[i(t, n) || n] = e[n];
                    return t
                }

                function l(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var o in n) void 0 === t[o] && (t[o] = n[o])
                    }
                    return t
                }

                function s(t, e) {
                    return "string" == typeof t ? t : t[e % t.length]
                }
                var d = {
                    lines: 12,
                    length: 7,
                    width: 5,
                    radius: 10,
                    scale: 1,
                    corners: 1,
                    color: "#000",
                    opacity: 1 / 4,
                    rotate: 0,
                    direction: 1,
                    speed: 1,
                    trail: 100,
                    fps: 20,
                    zIndex: 2e9,
                    className: "spinner",
                    top: "50%",
                    left: "50%",
                    shadow: !1,
                    hwaccel: !1,
                    position: "absolute"
                };

                function p(t) {
                    this.opts = l(t || {}, p.defaults, d)
                }
                if (p.defaults = {}, l(p.prototype, {
                        spin: function(e) {
                            this.stop();
                            var n = this,
                                o = n.opts,
                                a = n.el = r(null, {
                                    className: o.className
                                });
                            if (u(a, {
                                    position: o.position,
                                    width: 0,
                                    zIndex: o.zIndex,
                                    left: o.left,
                                    top: o.top
                                }), e && e.insertBefore(a, e.firstChild || null), a.setAttribute("role", "progressbar"), n.lines(a, n.opts), !t) {
                                var c, i = 0,
                                    l = (o.lines - 1) * (1 - o.direction) / 2,
                                    s = o.fps,
                                    d = s / o.speed,
                                    p = (1 - o.opacity) / (d * o.trail / 100),
                                    f = d / o.lines;
                                ! function t() {
                                    i++;
                                    for (var e = 0; e < o.lines; e++) c = Math.max(1 - (i + (o.lines - e) * f) % d * p, o.opacity), n.opacity(a, e * o.direction + l, c, o);
                                    n.timeout = n.el && setTimeout(t, ~~(1e3 / s))
                                }()
                            }
                            return n
                        },
                        stop: function() {
                            var t = this.el;
                            return t && (clearTimeout(this.timeout), t.parentNode && t.parentNode.removeChild(t), this.el = void 0), this
                        },
                        lines: function(e, n) {
                            var o, i = 0,
                                l = (n.lines - 1) * (1 - n.direction) / 2;

                            function d(t, e) {
                                return u(r(), {
                                    position: "absolute",
                                    width: n.scale * (n.length + n.width) + "px",
                                    height: n.scale * n.width + "px",
                                    background: t,
                                    boxShadow: e,
                                    transformOrigin: "left",
                                    transform: "rotate(" + ~~(360 / n.lines * i + n.rotate) + "deg) translate(" + n.scale * n.radius + "px,0)",
                                    borderRadius: (n.corners * n.scale * n.width >> 1) + "px"
                                })
                            }
                            for (; i < n.lines; i++) o = u(r(), {
                                position: "absolute",
                                top: 1 + ~(n.scale * n.width / 2) + "px",
                                transform: n.hwaccel ? "translate3d(0,0,0)" : "",
                                opacity: n.opacity,
                                animation: t && c(n.opacity, n.trail, l + i * n.direction, n.lines) + " " + 1 / n.speed + "s linear infinite"
                            }), n.shadow && a(o, u(d("#000", "0 0 4px #000"), {
                                top: "2px"
                            })), a(e, a(o, d(s(n.color, i), "0 0 1px rgba(0,0,0,.1)")));
                            return e
                        },
                        opacity: function(t, e, n) {
                            e < t.childNodes.length && (t.childNodes[e].style.opacity = n)
                        }
                    }), "undefined" !== typeof document) {
                    e = function() {
                        var t = r("style", {
                            type: "text/css"
                        });
                        return a(document.getElementsByTagName("head")[0], t), t.sheet || t.styleSheet
                    }();
                    var f = u(r("group"), {
                        behavior: "url(#default#VML)"
                    });
                    !i(f, "transform") && f.adj ? function() {
                        function t(t, e) {
                            return r("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', e)
                        }
                        e.addRule(".spin-vml", "behavior:url(#default#VML)"), p.prototype.lines = function(e, n) {
                            var o = n.scale * (n.length + n.width),
                                r = 2 * n.scale * o;

                            function c() {
                                return u(t("group", {
                                    coordsize: r + " " + r,
                                    coordorigin: -o + " " + -o
                                }), {
                                    width: r,
                                    height: r
                                })
                            }
                            var i, l = -(n.width + n.length) * n.scale * 2 + "px",
                                d = u(c(), {
                                    position: "absolute",
                                    top: l,
                                    left: l
                                });

                            function p(e, r, i) {
                                a(d, a(u(c(), {
                                    rotation: 360 / n.lines * e + "deg",
                                    left: ~~r
                                }), a(u(t("roundrect", {
                                    arcsize: n.corners
                                }), {
                                    width: o,
                                    height: n.scale * n.width,
                                    left: n.scale * n.radius,
                                    top: -n.scale * n.width >> 1,
                                    filter: i
                                }), t("fill", {
                                    color: s(n.color, e),
                                    opacity: n.opacity
                                }), t("stroke", {
                                    opacity: 0
                                }))))
                            }
                            if (n.shadow)
                                for (i = 1; i <= n.lines; i++) p(i, -2, "progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");
                            for (i = 1; i <= n.lines; i++) p(i);
                            return a(e, d)
                        }, p.prototype.opacity = function(t, e, n, o) {
                            var r = t.firstChild;
                            o = o.shadow && o.lines || 0, r && e + o < r.childNodes.length && (r = (r = (r = r.childNodes[e + o]) && r.firstChild) && r.firstChild) && (r.opacity = n)
                        }
                    }() : t = i(f, "animation")
                }
                return p
            }, t.exports ? t.exports = a() : void 0 === (r = "function" === typeof(o = a) ? o.call(e, n, e, t) : o) || (t.exports = r)
        },
        S1kh: function(t, e, n) {
            "use strict";
            var o = n("cpVT"),
                r = n("H+61"),
                a = n("UlJF"),
                c = n("7LId"),
                i = n("VIvw"),
                u = n("iHvq"),
                l = n("q1tI"),
                s = n("pn+o"),
                d = n("+Css"),
                p = n("MX0m"),
                f = n.n(p),
                b = n("TSYQ"),
                h = n.n(b),
                g = n("xwfA"),
                m = n("bmYG"),
                O = "160px",
                v = "386px",
                y = "48px",
                w = "width ".concat(200, "ms ease"),
                x = "padding ".concat(200, "ms ease"),
                _ = [".signup-form-core-outer-wrapper{width:".concat(v, ";}"), ".signup-form-core-outer-wrapper .signup-form-core-component-wrapper{position:relative;width:".concat(O, ";-webkit-transition:").concat(w, ";transition:").concat(w, ";}"), ".signup-form-core-outer-wrapper .signup-form-core-component-wrapper form{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;}", ".signup-form-core-outer-wrapper .signup-form-core-component-wrapper .signup-button-wrapper{position:absolute;width:".concat(O, ";z-index:2;right:0;}"), ".signup-form-core-outer-wrapper .signup-form-core-component-wrapper .signup-button-wrapper .signup-button{width:100%;height:".concat(y, ";font-size:0.875rem;}"), ".signup-form-core-outer-wrapper .signup-form-core-component-wrapper .signup-input{min-width:auto;max-width:none;height:".concat(y, ";width:100%;z-index:1;-webkit-transition:").concat(x, ";transition:").concat(x, ";font-size:0.875rem;line-height:8px;padding:12px 24px;border:1px solid;border-radius:40px;outline:none;}"), ".signup-form-core-outer-wrapper .signup-form-core-component-wrapper .signup-input:hover::-webkit-input-placeholder,.signup-form-core-outer-wrapper .signup-form-core-component-wrapper .signup-input:focus::-webkit-input-placeholder{color:var(--placholder-focus-color);}", ".signup-form-core-outer-wrapper .signup-form-core-component-wrapper .signup-input:hover::-moz-placeholder,.signup-form-core-outer-wrapper .signup-form-core-component-wrapper .signup-input:focus::-moz-placeholder{color:var(--placholder-focus-color);}", ".signup-form-core-outer-wrapper .signup-form-core-component-wrapper .signup-input:hover:-ms-input-placeholder,.signup-form-core-outer-wrapper .signup-form-core-component-wrapper .signup-input:focus:-ms-input-placeholder{color:var(--placholder-focus-color);}", ".signup-form-core-outer-wrapper .signup-form-core-component-wrapper .signup-input:hover::placeholder,.signup-form-core-outer-wrapper .signup-form-core-component-wrapper .signup-input:focus::placeholder{color:var(--placholder-focus-color);}", ".signup-form-core-outer-wrapper .signup-form-core-component-wrapper.error input,.signup-form-core-outer-wrapper .signup-form-core-component-wrapper.error input:focus{border-color:".concat(g.a.error, " !important;}"), ".signup-form-core-outer-wrapper .signup-form-core-component-wrapper.opened-input{width:".concat(v, ";}"), ".signup-form-core-outer-wrapper .signup-form-core-component-wrapper.opened-input .signup-input{padding-right:".concat(O, ";}"), ".signup-form-core-outer-wrapper.align-center{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}", "@media (max-width:".concat(m.y, "){.signup-form-core-outer-wrapper{width:").concat("300px", ";}.signup-form-core-outer-wrapper .signup-form-core-component-wrapper{text-align:center;width:100%;}.signup-form-core-outer-wrapper .signup-form-core-component-wrapper form{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.signup-form-core-outer-wrapper .signup-form-core-component-wrapper .signup-input{padding:16px 32px;text-align:center;margin:0 0 16px 0;}.signup-form-core-outer-wrapper .signup-form-core-component-wrapper .signup-button-wrapper{position:relative;width:100%;}.signup-form-core-outer-wrapper .signup-form-core-component-wrapper .signup-button-wrapper .signup-button{padding:16px 32px;}.signup-form-core-outer-wrapper .signup-form-core-component-wrapper.opened-input{width:100%;}.signup-form-core-outer-wrapper .signup-form-core-component-wrapper.opened-input .signup-input{padding:0;}}")];
            _.__hash = "3223086763";
            var k = n("yAMK"),
                j = n("tWrx"),
                E = n("WJer"),
                R = n("hPVn"),
                C = n("nKUr");

            function A(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    e && (o = o.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function N(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? A(Object(n), !0).forEach((function(e) {
                        Object(o.default)(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : A(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function I(t) {
                var e = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, o = Object(u.default)(t);
                    if (e) {
                        var r = Object(u.default)(this).constructor;
                        n = Reflect.construct(o, arguments, r)
                    } else n = o.apply(this, arguments);
                    return Object(i.default)(this, n)
                }
            }
            var T = function(t) {
                Object(c.default)(n, t);
                var e = I(n);

                function n(t) {
                    var a;
                    return Object(r.default)(this, n), a = e.call(this, t), Object(o.default)(Object(d.a)(a), "handleShowInput", (function() {
                        var t = a.props.placement;
                        BigBrain("track", k.SIGNUP_FORM_GET_STARTED_CLICKED, {
                            placement: t
                        }), a.setState({
                            emailInputOpened: !0,
                            useSecondCTA: !0
                        }, (function() {
                            return setTimeout((function() {
                                a._signupComponent.focusOnInput()
                            }), 200)
                        }))
                    })), a.state = {
                        emailInputOpened: t.emailInputOpened,
                        useSecondCTA: !1
                    }, a._signupComponent = null, a
                }
                return Object(a.default)(n, [{
                    key: "componentDidMount",
                    value: function() {
                        window.matchMedia(m.z).matches && this.setState({
                            emailInputOpened: !0
                        })
                    }
                }, {
                    key: "getSecondCtaButtonText",
                    value: function() {
                        return (0, this.props.translate)("signup.secondCta")
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = this,
                            e = this.props,
                            n = e.buttonColor,
                            o = e.alignCenter,
                            r = this.state,
                            a = r.emailInputOpened,
                            c = r.useSecondCTA,
                            i = (a || this.handleShowInput, c ? this.getSecondCtaButtonText() : null),
                            u = g.a[n];
                        return Object(C.jsxs)("div", {
                            className: "jsx-".concat(_.__hash) + " " + (h()("signup-form-core-outer-wrapper", {
                                "align-center": o
                            }) || ""),
                            children: [Object(C.jsx)(j.a, N(N({
                                ref: function(e) {
                                    return t._signupComponent = e
                                }
                            }, this.props), {}, {
                                emailInputOpened: a,
                                borderColor: u,
                                ctaText: i,
                                useCtaText: !!i,
                                placeholderFocusColor: u
                            })), Object(C.jsx)(f.a, {
                                id: _.__hash,
                                children: _
                            })]
                        })
                    }
                }]), n
            }(l.PureComponent);
            T.defaultProps = {
                emailInputOpened: !0,
                alignCenter: !1,
                focusOnLoad: !1,
                focusTimeout: 0,
                buttonColor: "brand-pink"
            };
            var S = Object(R.a)(Object(E.b)(T));

            function D(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    e && (o = o.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function M(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? D(Object(n), !0).forEach((function(e) {
                        Object(o.default)(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : D(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function P(t) {
                var e = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, o = Object(u.default)(t);
                    if (e) {
                        var r = Object(u.default)(this).constructor;
                        n = Reflect.construct(o, arguments, r)
                    } else n = o.apply(this, arguments);
                    return Object(i.default)(this, n)
                }
            }
            var L = function(t) {
                Object(c.default)(n, t);
                var e = P(n);

                function n() {
                    return Object(r.default)(this, n), e.apply(this, arguments)
                }
                return Object(a.default)(n, [{
                    key: "render",
                    value: function() {
                        var t = this.props,
                            e = t.inputPlaceholder,
                            n = t.useExpandingSignup ? S : s.a;
                        return Object(C.jsx)(n, M(M({}, this.props), {}, {
                            placeholder: e
                        }))
                    }
                }]), n
            }(l.PureComponent);
            L.defaultProps = {
                forceHorizontal: !1
            };
            e.a = Object(E.b)(L)
        },
        SQRZ: function(t, e, n) {
            "use strict";
            n.d(e, "h", (function() {
                return o
            })), n.d(e, "j", (function() {
                return r
            })), n.d(e, "m", (function() {
                return a
            })), n.d(e, "n", (function() {
                return c
            })), n.d(e, "o", (function() {
                return i
            })), n.d(e, "p", (function() {
                return u
            })), n.d(e, "d", (function() {
                return l
            })), n.d(e, "f", (function() {
                return s
            })), n.d(e, "g", (function() {
                return d
            })), n.d(e, "a", (function() {
                return p
            })), n.d(e, "e", (function() {
                return f
            })), n.d(e, "b", (function() {
                return b
            })), n.d(e, "l", (function() {
                return h
            })), n.d(e, "c", (function() {
                return g
            })), n.d(e, "k", (function() {
                return m
            })), n.d(e, "i", (function() {
                return O
            }));
            var o = 999,
                r = 666,
                a = 555,
                c = 557,
                i = 9,
                u = 0,
                l = -1,
                s = 100,
                d = 200,
                p = 1e7,
                f = 1032,
                b = 1,
                h = 1,
                g = 1,
                m = 1,
                O = -1
        },
        "UG/g": function(t, e, n) {
            "use strict";
            n.d(e, "b", (function() {
                return f
            })), n.d(e, "a", (function() {
                return b
            })), n.d(e, "e", (function() {
                return h
            })), n.d(e, "c", (function() {
                return g
            })), n.d(e, "d", (function() {
                return m
            })), n.d(e, "f", (function() {
                return O
            })), n.d(e, "k", (function() {
                return v
            })), n.d(e, "j", (function() {
                return y
            })), n.d(e, "i", (function() {
                return w
            })), n.d(e, "l", (function() {
                return x
            })), n.d(e, "h", (function() {
                return _
            })), n.d(e, "g", (function() {
                return j
            }));
            var o = n("cpVT"),
                r = n("Pr/7"),
                a = n("1BgC"),
                c = n("xKtW"),
                i = n("UmnM"),
                u = n("0SMW"),
                l = n("xPEm"),
                s = (n("87MR"), n("3gK6"), n("aIIR"), n("K7IA"), n("rNX+"));

            function d(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    e && (o = o.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function p(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? d(Object(n), !0).forEach((function(e) {
                        Object(o.default)(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : d(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }
            var f = "monday_slug_details",
                b = "https://cdn1.monday.com/dapulse_default_photo.png",
                h = function() {
                    var t = Object(r.b)(f),
                        e = [];
                    if (t) try {
                        t = decodeURIComponent(t), e = JSON.parse(t).filter((function(t) {
                            return t.account_name || t.an
                        })).map((function(t) {
                            return k(t)
                        }))
                    } catch (n) {
                        c.c(n)
                    }
                    return e
                },
                g = function() {
                    return Object(r.b)(a.LAST_ACCOUNT_SLUG)
                },
                m = function(t) {
                    return "//".concat(t, ".").concat("monday.com")
                },
                O = function(t) {
                    return "".concat(m(g())).concat(t)
                },
                v = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return Object(i.shouldGetWelcomeBackPageTest)(t, e) && !0 === e[a.WELCOME_BACK_SHOULD_UPDATE_CTA_COOKIE_NAME]
                },
                y = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    try {
                        var e = t[a.PLATFORM_PRICING_VERSION_COOKIE];
                        if (!e) return !1;
                        if (Object(u.isRunningInClient)()) {
                            var n = g(),
                                o = h();
                            if (!n || !o) return !1
                        }
                        return !0
                    } catch (r) {
                        return c.c(r), !1
                    }
                },
                w = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        e = t[a.PLATFORM_PRICING_VERSION_COOKIE],
                        n = t[a.IS_PAYING_ACCOUNT_COOKIE_NAME];
                    return e && !n
                },
                x = function() {
                    Object(r.b)(a.LAST_ACCOUNT_SLUG) ? Object(r.e)(a.WELCOME_BACK_SHOULD_UPDATE_CTA_COOKIE_NAME, "true", {
                        expires: 30
                    }) : c.d("Attempt to set Welcome back cookie on account without dapulseLastLoginAccount cookie")
                },
                _ = function(t) {
                    t.productId, t.clusterId, t.subClusterId, t.pricingDetails;
                    var e = t.existingAccount || {},
                        n = e.existingAccountCtaText,
                        o = e.platformUrlOverrideForExistingAccount;
                    return {
                        ctaTextKey: n || "existingAccount.mainCta",
                        platformRedirectUrl: O(o)
                    }
                },
                k = function(t) {
                    return t ? p(p({}, t), {}, {
                        un: t.un || t.user_name,
                        ue: t.ue || t.user_email,
                        ui: t.ui || t.user_id,
                        us: t.us || t.user_serial_number,
                        up: t.up || t.user_image || b,
                        an: t.an || t.account_name,
                        ac: t.ac || t.account_created,
                        ai: t.ai || t.account_id,
                        sl: t.sl || t.slug,
                        lu: t.lu || t.last_used
                    }) : {}
                },
                j = function(t) {
                    return t && Object(l.t)(t) ? Object(l.r)(t) : s.ac
                }
        },
        UK0n: function(t, e, n) {
            "use strict";
            n.d(e, "c", (function() {
                return r
            })), n.d(e, "a", (function() {
                return a
            })), n.d(e, "d", (function() {
                return c
            })), n.d(e, "e", (function() {
                return i
            })), n.d(e, "b", (function() {
                return l
            }));
            var o = n("/Z+I"),
                r = function(t) {
                    return "Enter" === (null === t || void 0 === t ? void 0 : t.key) || " " === (null === t || void 0 === t ? void 0 : t.key) || "Spacebar" === (null === t || void 0 === t ? void 0 : t.key) || 13 === (null === t || void 0 === t ? void 0 : t.which) || 32 === (null === t || void 0 === t ? void 0 : t.which)
                },
                a = function(t) {
                    for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), o = 1; o < e; o++) n[o - 1] = arguments[o];
                    return function(e) {
                        r(e) && (e.preventDefault(), t.apply(void 0, [e].concat(n)))
                    }
                },
                c = function(t) {
                    return t.preventDefault()
                },
                i = function(t, e) {
                    var n = t.replace(/[^\w\s]/gi, "");
                    t.startsWith("#") && !n.startsWith("#") && (n = "#".concat(n));
                    var o = document.querySelector("".concat(n, " svg > title"));
                    null !== o && void 0 !== o && o.textContent && (o.textContent = e)
                },
                u = {
                    pink: o.BRAND_BLACK_TEXT_COLOR
                },
                l = function(t) {
                    return u[t] || t
                }
        },
        "V/Nc": function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = e.XS = "xs",
                r = e.S = "s",
                a = e.L = "l",
                c = e.XL = "xl",
                i = (e.SIZES = [o, r, a, c], e.CONTRACT = "contract"),
                u = e.CONTRACT_OVERLAY = "contract-overlay",
                l = e.EXPAND_LEFT = "expand-left",
                s = e.EXPAND_RIGHT = "expand-right",
                d = e.EXPAND_UP = "expand-up",
                p = e.EXPAND_DOWN = "expand-down",
                f = e.SLIDE_LEFT = "slide-left",
                b = e.SLIDE_RIGHT = "slide-right",
                h = e.SLIDE_UP = "slide-up",
                g = e.SLIDE_DOWN = "slide-down",
                m = e.ZOOM_IN = "zoom-in",
                O = e.ZOOM_OUT = "zoom-out";
            e.STYLES = [i, u, l, s, d, p, f, b, h, g, m, O]
        },
        VgqV: function(t, e, n) {
            "use strict";
            n.d(e, "l", (function() {
                return o
            })), n.d(e, "i", (function() {
                return r
            })), n.d(e, "j", (function() {
                return a
            })), n.d(e, "h", (function() {
                return c
            })), n.d(e, "g", (function() {
                return i
            })), n.d(e, "e", (function() {
                return u
            })), n.d(e, "d", (function() {
                return l
            })), n.d(e, "c", (function() {
                return s
            })), n.d(e, "a", (function() {
                return d
            })), n.d(e, "b", (function() {
                return p
            })), n.d(e, "f", (function() {
                return f
            })), n.d(e, "k", (function() {
                return b
            }));
            var o = "xss",
                r = "xs_m",
                a = "xs_ml",
                c = "xs_l",
                i = "xs",
                u = "sm",
                l = "ms",
                s = "md",
                d = "lg",
                p = "lgr",
                f = "xl",
                b = "xxl"
        },
        WJer: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return h
            })), n.d(e, "b", (function() {
                return g
            }));
            var o = n("cpVT"),
                r = n("dhJC"),
                a = n("H+61"),
                c = n("UlJF"),
                i = n("7LId"),
                u = n("VIvw"),
                l = n("iHvq"),
                s = n("q1tI"),
                d = n("nKUr");

            function p(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    e && (o = o.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function f(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? p(Object(n), !0).forEach((function(e) {
                        Object(o.default)(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function b(t) {
                var e = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, o = Object(l.default)(t);
                    if (e) {
                        var r = Object(l.default)(this).constructor;
                        n = Reflect.construct(o, arguments, r)
                    } else n = o.apply(this, arguments);
                    return Object(u.default)(this, n)
                }
            }
            var h = Object(s.createContext)(null),
                g = function(t) {
                    var e = function(e) {
                        Object(i.default)(o, e);
                        var n = b(o);

                        function o(t) {
                            return Object(a.default)(this, o), n.call(this, t)
                        }
                        return Object(c.default)(o, [{
                            key: "render",
                            value: function() {
                                var e = this.props,
                                    n = e.forwardedRef,
                                    o = Object(r.default)(e, ["forwardedRef"]);
                                return Object(d.jsx)(h.Consumer, {
                                    children: function(e) {
                                        return Object(d.jsx)(t, f(f({
                                            ref: n
                                        }, e), o))
                                    }
                                })
                            }
                        }]), o
                    }(s.PureComponent);
                    return Object(s.forwardRef)((function(t, n) {
                        return Object(d.jsx)(e, f(f({}, t), {}, {
                            forwardedRef: n
                        }))
                    }))
                }
        },
        XAPJ: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return x
            }));
            var o = n("cpVT"),
                r = n("dhJC"),
                a = n("H+61"),
                c = n("UlJF"),
                i = n("+Css"),
                u = n("7LId"),
                l = n("VIvw"),
                s = n("iHvq"),
                d = n("MX0m"),
                p = n.n(d),
                f = n("q1tI"),
                b = n("bmYG"),
                h = ["input.jsx-3561993290{min-width:240px;max-width:320px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;outline:none;}", "@media (max-width:".concat(b.y, "){input.jsx-3561993290:not(.force-horizontal){min-width:120px;max-width:none;width:100%;}}")];
            h.__hash = "3561993290";
            var g = h,
                m = n("pX74"),
                O = n("nKUr");

            function v(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    e && (o = o.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function y(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? v(Object(n), !0).forEach((function(e) {
                        Object(o.default)(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : v(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function w(t) {
                var e = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, o = Object(s.default)(t);
                    if (e) {
                        var r = Object(s.default)(this).constructor;
                        n = Reflect.construct(o, arguments, r)
                    } else n = o.apply(this, arguments);
                    return Object(l.default)(this, n)
                }
            }
            var x = function(t) {
                Object(u.default)(n, t);
                var e = w(n);

                function n(t) {
                    var o;
                    return Object(a.default)(this, n), (o = e.call(this, t))._input = null, o.focus = o.focus.bind(Object(i.a)(o)), o
                }
                return Object(c.default)(n, [{
                    key: "componentDidMount",
                    value: function() {
                        var t = this.props.placeholderFocusColor;
                        t && this._input.style.setProperty("--placholder-focus-color", t)
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function() {
                        this.props.focusOnUpdate && setTimeout(this.focus, 0)
                    }
                }, {
                    key: "focus",
                    value: function() {
                        this._input.focus()
                    }
                }, {
                    key: "isValid",
                    value: function() {
                        return this._input.checkValidity() && m.a.test(this._input.value)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = this,
                            e = this.props,
                            n = (e.focusOnUpdate, e.forceHorizontal, e.placeholderFocusColor, Object(r.default)(e, ["focusOnUpdate", "forceHorizontal", "placeholderFocusColor"]));
                        return Object(O.jsxs)(f.Fragment, {
                            children: [Object(O.jsx)("input", y(y({}, n), {}, {
                                ref: function(e) {
                                    return t._input = e
                                },
                                className: "jsx-".concat(g.__hash) + " " + (n && null != n.className && n.className || "")
                            })), Object(O.jsx)(p.a, {
                                id: g.__hash,
                                children: g
                            })]
                        })
                    }
                }]), n
            }(f.PureComponent);
            x.defaultProps = {
                value: "",
                autoComplete: "off",
                autoCapitalize: "off",
                spellCheck: "false",
                className: "email",
                type: "email",
                placeholder: "",
                name: "email",
                required: !0,
                focusOnUpdate: !1
            }
        },
        bmYG: function(t, e, n) {
            "use strict";
            n.d(e, "D", (function() {
                return o
            })), n.d(e, "C", (function() {
                return r
            })), n.d(e, "B", (function() {
                return a
            })), n.d(e, "v", (function() {
                return c
            })), n.d(e, "m", (function() {
                return i
            })), n.d(e, "i", (function() {
                return l
            })), n.d(e, "l", (function() {
                return s
            })), n.d(e, "k", (function() {
                return d
            })), n.d(e, "c", (function() {
                return p
            })), n.d(e, "o", (function() {
                return f
            })), n.d(e, "p", (function() {
                return b
            })), n.d(e, "a", (function() {
                return h
            })), n.d(e, "r", (function() {
                return g
            })), n.d(e, "u", (function() {
                return m
            })), n.d(e, "n", (function() {
                return O
            })), n.d(e, "t", (function() {
                return v
            })), n.d(e, "s", (function() {
                return y
            })), n.d(e, "q", (function() {
                return w
            })), n.d(e, "x", (function() {
                return x
            })), n.d(e, "w", (function() {
                return _
            })), n.d(e, "A", (function() {
                return k
            })), n.d(e, "y", (function() {
                return j
            })), n.d(e, "z", (function() {
                return E
            })), n.d(e, "h", (function() {
                return R
            })), n.d(e, "b", (function() {
                return C
            })), n.d(e, "j", (function() {
                return A
            })), n.d(e, "e", (function() {
                return N
            })), n.d(e, "d", (function() {
                return I
            })), n.d(e, "f", (function() {
                return T
            })), n.d(e, "g", (function() {
                return S
            })), n.d(e, "E", (function() {
                return D
            }));
            var o = 360,
                r = 450,
                a = 768,
                c = 991,
                i = 1199,
                u = 1599,
                l = 1050,
                s = 1300,
                d = 1440,
                p = 1920,
                f = 1280,
                b = 1229,
                h = ("(max-width: ".concat(o, "px)"), "(min-width: ".concat(o + 1, "px) and (max-width: ").concat(a, "px)"), "(min-width: ".concat(a + 1, "px) and (max-width: ").concat(c, "px)"), "(min-width: ".concat(c + 1, "px) and (max-width: ").concat(i, "px)"), "(min-width: ".concat(i + 1, "px) and (max-width: ").concat(u, "px)"), "(min-width: ".concat(1600, "px)"), "(max-width: ".concat(i, "px)"), "1441px"),
                g = "".concat(a, "px"),
                m = "".concat(380, "px"),
                O = "".concat(1440, "px"),
                v = "".concat(r + 1, "px"),
                y = "".concat(r, "px"),
                w = "(max-width: ".concat(g, ")"),
                x = "".concat(o, "px"),
                _ = "".concat(o - 1, "px"),
                k = "".concat(a + 1, "px"),
                j = "".concat(c, "px"),
                E = "(max-width: ".concat(c, "px)"),
                R = "".concat(i, "px"),
                C = "1270px",
                A = "".concat(d, "px"),
                N = "".concat(b, "px"),
                I = "".concat(f, "px"),
                T = "".concat(1300, "px"),
                S = "".concat(u, "px"),
                D = "".concat(1880, "px")
        },
        e7tk: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = n("V/Nc");
            Object.keys(o).forEach((function(t) {
                "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: function() {
                        return o[t]
                    }
                })
            }));
            var r, a = n("J2DA"),
                c = (r = a) && r.__esModule ? r : {
                    default: r
                };
            e.default = c.default
        },
        eZOO: function(t, e) {
            t.exports = {
                HUBSPOT_FORM_SUBMITTED: "hubspotFormSubmitted",
                IN_PAGE_AB_TEST_EVENT_NAME: "inPageAbTest",
                SHOW_COOKIEHUB_DIALOG_EVENT_NAME: "showCookiehubDialog",
                SIGNUP_CLICKED: "signupClicked",
                SIGNUP_WITH_GOOGLE_CLICKED: "signupWithGoogleClicked",
                TAG_SELECTED: "tagSelected"
            }
        },
        fhzG: function(t, e, n) {
            "use strict";
            var o = n("q1tI"),
                r = n("lT4e");
            if ("undefined" === typeof o) throw Error("create-react-class could not find the React object. If you are using script tags, make sure that React is being loaded before create-react-class.");
            var a = (new o.Component).updater;
            t.exports = r(o.Component, o.isValidElement, a)
        },
        fkjU: function(t, e, n) {
            "use strict";
            var o = n("q1tI"),
                r = n("i8i4");

            function a(t, e) {
                return (a = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function c(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function i(t, e, n) {
                return t === e || (t.correspondingElement ? t.correspondingElement.classList.contains(n) : t.classList.contains(n))
            }
            var u, l, s = (void 0 === u && (u = 0), function() {
                    return ++u
                }),
                d = {},
                p = {},
                f = ["touchstart", "touchmove"];

            function b(t, e) {
                var n = null;
                return -1 !== f.indexOf(e) && l && (n = {
                    passive: !t.props.preventDefault
                }), n
            }
            e.a = function(t, e) {
                var n, u, f = t.displayName || t.name || "Component";
                return u = n = function(n) {
                    var u, h;

                    function g(t) {
                        var o;
                        return (o = n.call(this, t) || this).__outsideClickHandler = function(t) {
                            if ("function" !== typeof o.__clickOutsideHandlerProp) {
                                var e = o.getInstance();
                                if ("function" !== typeof e.props.handleClickOutside) {
                                    if ("function" !== typeof e.handleClickOutside) throw new Error("WrappedComponent: " + f + " lacks a handleClickOutside(event) function for processing outside click events.");
                                    e.handleClickOutside(t)
                                } else e.props.handleClickOutside(t)
                            } else o.__clickOutsideHandlerProp(t)
                        }, o.__getComponentNode = function() {
                            var t = o.getInstance();
                            return e && "function" === typeof e.setClickOutsideRef ? e.setClickOutsideRef()(t) : "function" === typeof t.setClickOutsideRef ? t.setClickOutsideRef() : Object(r.findDOMNode)(t)
                        }, o.enableOnClickOutside = function() {
                            if ("undefined" !== typeof document && !p[o._uid]) {
                                "undefined" === typeof l && (l = function() {
                                    if ("undefined" !== typeof window && "function" === typeof window.addEventListener) {
                                        var t = !1,
                                            e = Object.defineProperty({}, "passive", {
                                                get: function() {
                                                    t = !0
                                                }
                                            }),
                                            n = function() {};
                                        return window.addEventListener("testPassiveEventSupport", n, e), window.removeEventListener("testPassiveEventSupport", n, e), t
                                    }
                                }()), p[o._uid] = !0;
                                var t = o.props.eventTypes;
                                t.forEach || (t = [t]), d[o._uid] = function(t) {
                                    var e;
                                    null !== o.componentNode && (o.props.preventDefault && t.preventDefault(), o.props.stopPropagation && t.stopPropagation(), o.props.excludeScrollbar && (e = t, document.documentElement.clientWidth <= e.clientX || document.documentElement.clientHeight <= e.clientY) || function(t, e, n) {
                                        if (t === e) return !0;
                                        for (; t.parentNode || t.host;) {
                                            if (t.parentNode && i(t, e, n)) return !0;
                                            t = t.parentNode || t.host
                                        }
                                        return t
                                    }(t.composed && t.composedPath && t.composedPath().shift() || t.target, o.componentNode, o.props.outsideClickIgnoreClass) === document && o.__outsideClickHandler(t))
                                }, t.forEach((function(t) {
                                    document.addEventListener(t, d[o._uid], b(c(o), t))
                                }))
                            }
                        }, o.disableOnClickOutside = function() {
                            delete p[o._uid];
                            var t = d[o._uid];
                            if (t && "undefined" !== typeof document) {
                                var e = o.props.eventTypes;
                                e.forEach || (e = [e]), e.forEach((function(e) {
                                    return document.removeEventListener(e, t, b(c(o), e))
                                })), delete d[o._uid]
                            }
                        }, o.getRef = function(t) {
                            return o.instanceRef = t
                        }, o._uid = s(), o
                    }
                    h = n, (u = g).prototype = Object.create(h.prototype), u.prototype.constructor = u, a(u, h);
                    var m = g.prototype;
                    return m.getInstance = function() {
                        if (t.prototype && !t.prototype.isReactComponent) return this;
                        var e = this.instanceRef;
                        return e.getInstance ? e.getInstance() : e
                    }, m.componentDidMount = function() {
                        if ("undefined" !== typeof document && document.createElement) {
                            var t = this.getInstance();
                            if (e && "function" === typeof e.handleClickOutside && (this.__clickOutsideHandlerProp = e.handleClickOutside(t), "function" !== typeof this.__clickOutsideHandlerProp)) throw new Error("WrappedComponent: " + f + " lacks a function for processing outside click events specified by the handleClickOutside config option.");
                            this.componentNode = this.__getComponentNode(), this.props.disableOnClickOutside || this.enableOnClickOutside()
                        }
                    }, m.componentDidUpdate = function() {
                        this.componentNode = this.__getComponentNode()
                    }, m.componentWillUnmount = function() {
                        this.disableOnClickOutside()
                    }, m.render = function() {
                        var e = this.props;
                        e.excludeScrollbar;
                        var n = function(t, e) {
                            if (null == t) return {};
                            var n, o, r = {},
                                a = Object.keys(t);
                            for (o = 0; o < a.length; o++) n = a[o], e.indexOf(n) >= 0 || (r[n] = t[n]);
                            return r
                        }(e, ["excludeScrollbar"]);
                        return t.prototype && t.prototype.isReactComponent ? n.ref = this.getRef : n.wrappedRef = this.getRef, n.disableOnClickOutside = this.disableOnClickOutside, n.enableOnClickOutside = this.enableOnClickOutside, Object(o.createElement)(t, n)
                    }, g
                }(o.Component), n.displayName = "OnClickOutside(" + f + ")", n.defaultProps = {
                    eventTypes: ["mousedown", "touchstart"],
                    excludeScrollbar: e && e.excludeScrollbar || !1,
                    outsideClickIgnoreClass: "ignore-react-onclickoutside",
                    preventDefault: !1,
                    stopPropagation: !1
                }, n.getClass = function() {
                    return t.getClass ? t.getClass() : t
                }, u
            }
        },
        fsZk: function(t, e, n) {
            "use strict";
            var o, r = n("MX0m"),
                a = n.n(r),
                c = n("q1tI"),
                i = n("e7tk"),
                u = n.n(i),
                l = n("TSYQ"),
                s = n.n(l),
                d = n("/Z+I"),
                p = n("xwfA"),
                f = n("3WCC"),
                b = n("yncp"),
                h = n("cpVT"),
                g = (o = {}, Object(h.default)(o, d.BLUE_COLOR_NAME, {
                    "background-color": p.a["brand-blue"],
                    color: p.a.white,
                    "disabled-background-color": p.a["blue-hover"]
                }), Object(h.default)(o, "outline-blue", {
                    "background-color": p.a.white,
                    color: p.a["light-blue"],
                    "disabled-background-color": p.a.white
                }), Object(h.default)(o, "outline-dark-blue", {
                    "background-color": p.a.white,
                    color: p.a["brand-dark-blue"],
                    "hover-color": p.a.white,
                    "disabled-background-color": p.a["brand-dark-blue"]
                }), Object(h.default)(o, "outline-indigo", {
                    "background-color": p.a.white,
                    color: p.a.indigo,
                    "hover-color": p.a.white,
                    "disabled-background-color": p.a.indigo
                }), Object(h.default)(o, "brand-pink", {
                    "background-color": p.a["signup-pink"],
                    color: p.a.white,
                    "disabled-background-color": p.a["signup-pink-hover"]
                }), Object(h.default)(o, "brand-blue", {
                    "background-color": p.a["brand-blue"],
                    color: p.a.white,
                    "disabled-background-color": p.a["blue-hover"]
                }), Object(h.default)(o, "brand-red", {
                    "background-color": p.a["brand-red"],
                    color: p.a.white,
                    "disabled-background-color": p.a["brand-red-hover"]
                }), Object(h.default)(o, "brand-green", {
                    "background-color": p.a["brand-green"],
                    color: p.a.white,
                    "disabled-background-color": p.a["brand-green-hover"]
                }), Object(h.default)(o, "brand-yellow", {
                    "background-color": p.a["brand-yellow"],
                    color: p.a.white,
                    "disabled-background-color": p.a["brand-yellow-hover"]
                }), Object(h.default)(o, "brand-iris", {
                    "background-color": p.a["brand-iris"],
                    color: p.a.white,
                    "disabled-background-color": p.a["brand-iris-hover"]
                }), Object(h.default)(o, "brand-purple", {
                    "background-color": p.a["brand-purple"],
                    color: p.a.white,
                    "disabled-background-color": p.a["brand-purple-hover"]
                }), Object(h.default)(o, "green", {
                    "background-color": p.a.green,
                    color: p.a.white,
                    "disabled-background-color": p.a["green-hover"]
                }), Object(h.default)(o, "purple", {
                    "background-color": p.a.purple,
                    color: p.a.white,
                    "disabled-background-color": p.a["brand-purple-hover"]
                }), Object(h.default)(o, d.IRIS_COLOR_NAME, {
                    "background-color": p.a.iris,
                    color: p.a.white,
                    "disabled-background-color": p.a["iris-hover"]
                }), Object(h.default)(o, "yellow", {
                    "background-color": p.a.yellow,
                    color: p.a.mud,
                    "disabled-background-color": p.a["brand-yellow-hover"]
                }), Object(h.default)(o, "orange", {
                    "background-color": p.a.orange,
                    color: p.a.mud,
                    "disabled-background-color": p.a.orange
                }), Object(h.default)(o, "pink", {
                    "background-color": p.a.pink,
                    color: p.a.white,
                    "disabled-background-color": p.a["pink-hover"]
                }), Object(h.default)(o, "royal", {
                    "background-color": p.a.royal,
                    color: p.a.white,
                    "disabled-background-color": p.a["royal-hover"]
                }), Object(h.default)(o, d.DODGER_BLUE_COLOR_NAME, {
                    "background-color": p.a["dodger-blue"],
                    color: p.a.white,
                    "disabled-background-color": p.a["dodger-blue-hover"]
                }), Object(h.default)(o, d.SPACE_BLUE_COLOR_NAME, {
                    "background-color": p.a[d.SPACE_BLUE_COLOR_NAME],
                    color: p.a.white,
                    "disabled-background-color": p.a["space-blue-hover"]
                }), Object(h.default)(o, d.WHITE_COLOR_NAME, {
                    "background-color": p.a.white,
                    color: p.a[d.BRAND_BLACK_TEXT_COLOR],
                    "disabled-background-color": p.a.white
                }), Object(h.default)(o, d.BRAND_BLACK_TEXT_COLOR, {
                    "background-color": p.a[d.BRAND_BLACK_TEXT_COLOR],
                    color: p.a.white,
                    "disabled-background-color": p.a[d.BRAND_BLACK_TEXT_COLOR]
                }), o),
                m = ["button.ladda-button.blue{background-color:".concat(g.blue["background-color"], ";color:").concat(g.blue.color, ";}"), "button.ladda-button.blue.invert{color:".concat(g.blue["background-color"], ";background-color:").concat(g.blue.color, ";border-color:").concat(g.blue["background-color"], ";}"), "button.ladda-button.blue.invert:hover{box-shadow:inset 0 0 0 1px;}", "button.ladda-button.blue:disabled{background-color:".concat(g.blue["disabled-background-color"], ";}"), "button.ladda-button.outline-blue{border-width:1px;border-style:solid;background-color:".concat(g["outline-blue"]["background-color"], ";color:").concat(g["outline-blue"].color, ";}"), "button.ladda-button.outline-blue.invert{color:".concat(g["outline-blue"]["background-color"], ";background-color:").concat(g["outline-blue"].color, ";border-color:").concat(g["outline-blue"]["background-color"], ";}"), "button.ladda-button.outline-blue.invert:hover{box-shadow:inset 0 0 0 1px;}", "button.ladda-button.outline-blue:disabled{background-color:".concat(g["outline-blue"]["disabled-background-color"], ";}"), "button.ladda-button.outline-dark-blue,button.ladda-button.outline-dark-blue-inverted-hover{border-width:1px;border-style:solid;background-color:".concat(g["outline-dark-blue"]["background-color"], ";color:").concat(g["outline-dark-blue"].color, ";}"), "button.ladda-button.outline-dark-blue.invert,button.ladda-button.outline-dark-blue-inverted-hover.invert{color:".concat(g["outline-dark-blue"]["background-color"], ";background-color:").concat(g["outline-dark-blue"].color, ";border-color:").concat(g["outline-dark-blue"]["background-color"], ";}"), "button.ladda-button.outline-dark-blue.invert:hover,button.ladda-button.outline-dark-blue-inverted-hover.invert:hover{box-shadow:inset 0 0 0 1px;}", "button.ladda-button.outline-dark-blue:disabled,button.ladda-button.outline-dark-blue-inverted-hover:disabled{background-color:".concat(g["outline-dark-blue"]["disabled-background-color"], ";}"), "button.ladda-button.outline-dark-blue-inverted-hover:hover{-webkit-filter:unset;filter:unset;color:".concat(g["outline-dark-blue"]["background-color"], ";background-color:").concat(g["outline-dark-blue"].color, ";border-color:").concat(g["outline-dark-blue"]["background-color"], ";}"), "button.ladda-button.outline-indigo-inverted-hover{border-width:1px;border-style:solid;background-color:".concat(g["outline-indigo"]["background-color"], ";color:").concat(g["outline-indigo"].color, ";}"), "button.ladda-button.outline-indigo-inverted-hover.invert{color:".concat(g["outline-indigo"]["background-color"], ";background-color:").concat(g["outline-indigo"].color, ";border-color:").concat(g["outline-indigo"]["background-color"], ";}"), "button.ladda-button.outline-indigo-inverted-hover.invert:hover{box-shadow:inset 0 0 0 1px;}", "button.ladda-button.outline-indigo-inverted-hover:hover{-webkit-filter:unset;filter:unset;color:".concat(g["outline-indigo"]["background-color"], ";background-color:").concat(g["outline-indigo"].color, ";border-color:").concat(g["outline-indigo"]["background-color"], ";}"), "button.ladda-button.outline-indigo-inverted-hover:disabled{background-color:".concat(g["outline-indigo"]["disabled-background-color"], ";}"), "button.ladda-button.brand-pink{background-color:".concat(g["brand-pink"]["background-color"], ";color:").concat(g["brand-pink"].color, ";}"), "button.ladda-button.brand-pink.invert{color:".concat(g["brand-pink"]["background-color"], ";background-color:").concat(g["brand-pink"].color, ";border-color:").concat(g["brand-pink"]["background-color"], ";}"), "button.ladda-button.brand-pink.invert:hover{box-shadow:inset 0 0 0 1px;}", "button.ladda-button.brand-pink:disabled{background-color:".concat(g["brand-pink"]["disabled-background-color"], ";}"), "button.ladda-button.brand-blue{background-color:".concat(g["brand-blue"]["background-color"], ";color:").concat(g["brand-blue"].color, ";}"), "button.ladda-button.brand-blue.invert{color:".concat(g["brand-blue"]["background-color"], ";background-color:").concat(g["brand-blue"].color, ";border-color:").concat(g["brand-blue"]["background-color"], ";}"), "button.ladda-button.brand-blue.invert:hover{box-shadow:inset 0 0 0 1px;}", "button.ladda-button.brand-blue:disabled{background-color:".concat(g["brand-blue"]["disabled-background-color"], ";}"), "button.ladda-button.brand-iris{background-color:".concat(g["brand-iris"]["background-color"], ";color:").concat(g["brand-iris"].color, ";}"), "button.ladda-button.brand-iris.invert{color:".concat(g["brand-iris"]["background-color"], ";background-color:").concat(g["brand-iris"].color, ";border-color:").concat(g["brand-iris"]["background-color"], ";}"), "button.ladda-button.brand-iris.invert:hover{box-shadow:inset 0 0 0 1px;}", "button.ladda-button.brand-red{background-color:".concat(g["brand-red"]["background-color"], ";color:").concat(g["brand-red"].color, ";}"), "button.ladda-button.brand-red.invert{color:".concat(g["brand-red"]["background-color"], ";background-color:").concat(g["brand-red"].color, ";border-color:").concat(g["brand-red"]["background-color"], ";}"), "button.ladda-button.brand-red.invert:hover{box-shadow:inset 0 0 0 1px;}", "button.ladda-button.brand-red:disabled{background-color:".concat(g["brand-red"]["disabled-background-color"], ";}"), "button.ladda-button.brand-green{background-color:".concat(g["brand-green"]["background-color"], ";color:").concat(g["brand-green"].color, ";}"), "button.ladda-button.brand-green.invert{color:".concat(g["brand-green"]["background-color"], ";background-color:").concat(g["brand-green"].color, ";border-color:").concat(g["brand-green"]["background-color"], ";}"), "button.ladda-button.brand-green.invert:hover{box-shadow:inset 0 0 0 1px;}", "button.ladda-button.brand-green:disabled{background-color:".concat(g["brand-green"]["disabled-background-color"], ";}"), "button.ladda-button.brand-yellow{background-color:".concat(g["brand-yellow"]["background-color"], ";color:").concat(g["brand-yellow"].color, ";}"), "button.ladda-button.brand-yellow.invert{color:".concat(g["brand-yellow"]["background-color"], ";background-color:").concat(g["brand-yellow"].color, ";border-color:").concat(g["brand-yellow"]["background-color"], ";}"), "button.ladda-button.brand-yellow.invert:hover{box-shadow:inset 0 0 0 1px;}", "button.ladda-button.brand-yellow:disabled{background-color:".concat(g["brand-yellow"]["disabled-background-color"], ";}"), "button.ladda-button.brand-purple{background-color:".concat(g["brand-purple"]["background-color"], ";color:").concat(g["brand-purple"].color, ";}"), "button.ladda-button.brand-purple.invert{color:".concat(g["brand-purple"]["background-color"], ";background-color:").concat(g["brand-purple"].color, ";border-color:").concat(g["brand-purple"]["background-color"], ";}"), "button.ladda-button.brand-purple.invert:hover{box-shadow:inset 0 0 0 1px;}", "button.ladda-button.brand-purple:disabled{background-color:".concat(g["brand-purple"]["disabled-background-color"], ";}"), "button.ladda-button.green{background-color:".concat(g.green["background-color"], ";color:").concat(g.green.color, ";}"), "button.ladda-button.green.invert{color:".concat(g.green["background-color"], ";background-color:").concat(g.green.color, ";border-color:").concat(g.green["background-color"], ";}"), "button.ladda-button.green.invert:hover{box-shadow:inset 0 0 0 1px;}", "button.ladda-button.green:disabled{background-color:".concat(g.green["disabled-background-color"], ";}"), "button.ladda-button.purple{background-color:".concat(g.purple["background-color"], ";color:").concat(g.purple.color, ";}"), "button.ladda-button.purple.invert{color:".concat(g.purple["background-color"], ";background-color:").concat(g.purple.color, ";border-color:").concat(g.purple["background-color"], ";}"), "button.ladda-button.purple.invert:hover{box-shadow:inset 0 0 0 1px;}", "button.ladda-button.purple:disabled{background-color:".concat(g.purple["disabled-background-color"], ";}"), "button.ladda-button.iris{background-color:".concat(g.iris["background-color"], ";color:").concat(g.iris.color, ";}"), "button.ladda-button.iris.invert{color:".concat(g.iris["background-color"], ";background-color:").concat(g.iris.color, ";border-color:").concat(g.iris["background-color"], ";}"), "button.ladda-button.iris.invert:hover{box-shadow:inset 0 0 0 1px;}", "button.ladda-button.iris:disabled{background-color:".concat(g.iris["disabled-background-color"], ";}"), "button.ladda-button.yellow{background-color:".concat(g.yellow["background-color"], ";color:").concat(g.yellow.color, ";}"), "button.ladda-button.yellow.invert{color:".concat(g.yellow["background-color"], ";background-color:").concat(g.yellow.color, ";border-color:").concat(g.yellow["background-color"], ";}"), "button.ladda-button.yellow.invert:hover{box-shadow:inset 0 0 0 1px;}", "button.ladda-button.yellow:disabled{background-color:".concat(g.yellow["disabled-background-color"], ";}"), "button.ladda-button.orange{background-color:".concat(g.orange["background-color"], ";color:").concat(g.orange.color, ";}"), "button.ladda-button.orange.invert{color:".concat(g.orange["background-color"], ";background-color:").concat(g.orange.color, ";border-color:").concat(g.orange["background-color"], ";}"), "button.ladda-button.orange.invert:hover{box-shadow:inset 0 0 0 1px;}", "button.ladda-button.orange:disabled{background-color:".concat(g.orange["disabled-background-color"], ";}"), "button.ladda-button.pink{background-color:".concat(g.pink["background-color"], ";color:").concat(g.pink.color, ";}"), "button.ladda-button.pink.invert{color:".concat(g.pink["background-color"], ";background-color:").concat(g.pink.color, ";border-color:").concat(g.pink["background-color"], ";}"), "button.ladda-button.pink.invert:hover{box-shadow:inset 0 0 0 1px;}", "button.ladda-button.pink:disabled{background-color:".concat(g.pink["disabled-background-color"], ";}"), "button.ladda-button.royal{background-color:".concat(g.royal["background-color"], ";color:").concat(g.royal.color, ";}"), "button.ladda-button.royal.invert{color:".concat(g.royal["background-color"], ";background-color:").concat(g.royal.color, ";border-color:").concat(g.royal["background-color"], ";}"), "button.ladda-button.royal.invert:hover{box-shadow:inset 0 0 0 1px;}", "button.ladda-button.royal:disabled{background-color:".concat(g.royal["disabled-background-color"], ";}"), "button.ladda-button.dodger-blue{background-color:".concat(g["dodger-blue"]["background-color"], ";color:").concat(g["dodger-blue"].color, ";}"), "button.ladda-button.dodger-blue.invert{color:".concat(g["dodger-blue"]["background-color"], ";background-color:").concat(g["dodger-blue"].color, ";border-color:").concat(g["dodger-blue"]["background-color"], ";}"), "button.ladda-button.dodger-blue.invert:hover{box-shadow:inset 0 0 0 1px;}", "button.ladda-button.dodger-blue:disabled{background-color:".concat(g["dodger-blue"]["disabled-background-color"], ";}"), "button.ladda-button.crm-dark-tint-01{background-color:".concat(p.a[d.CRM_DARK_TINT_01_COLOR_NAME], ";color:").concat(p.a.white, ";}"), "button.ladda-button.crm-dark-tint-01.invert{color:".concat(p.a[d.CRM_DARK_TINT_01_COLOR_NAME], ";background-color:transparent;border-color:").concat(p.a[d.CRM_DARK_TINT_01_COLOR_NAME], ";}"), "button.ladda-button.crm-dark-tint-01.invert:hover{box-shadow:inset 0 0 0 1px;}", "button.ladda-button.crm-dark-tint-01:disabled{background-color:".concat(p.a[d.CRM_DARK_TINT_01_COLOR_NAME], ";}"), "button.ladda-button.crm-darker-tint-02{background-color:".concat(p.a[d.CRM_DARKER_TINT_02_COLOR_NAME], ";color:").concat(p.a.white, ";}"), "button.ladda-button.crm-darker-tint-02.invert{color:".concat(p.a[d.CRM_DARKER_TINT_02_COLOR_NAME], ";background-color:transparent;border-color:").concat(p.a[d.CRM_DARKER_TINT_02_COLOR_NAME], ";}"), "button.ladda-button.crm-darker-tint-02.invert:hover{box-shadow:inset 0 0 0 1px;}", "button.ladda-button.crm-darker-tint-02:disabled{background-color:".concat(p.a[d.CRM_DARKER_TINT_02_COLOR_NAME], ";}"), "button.ladda-button.wm-darker-tint-color{background-color:".concat(p.a[d.BRAND_WORK_MANAGEMENT_DARKER_TINT_COLOR_NAME], ";color:").concat(p.a.white, ";}"), "button.ladda-button.wm-darker-tint-color.invert{color:".concat(p.a[d.BRAND_WORK_MANAGEMENT_DARKER_TINT_COLOR_NAME], ";background-color:transparent;border-color:").concat(p.a[d.BRAND_WORK_MANAGEMENT_DARKER_TINT_COLOR_NAME], ";}"), "button.ladda-button.wm-darker-tint-color.invert:hover{box-shadow:inset 0 0 0 1px;}", "button.ladda-button.wm-darker-tint-color:disabled{background-color:".concat(p.a[d.BRAND_WORK_MANAGEMENT_DARKER_TINT_COLOR_NAME], ";}"), "button.ladda-button.dev-darker-int-02{background-color:".concat(p.a[d.DEV_DARKER_TINT_02_COLOR_NAME], ";color:").concat(p.a.white, ";}"), "button.ladda-button.dev-darker-int-02.invert{color:".concat(p.a[d.DEV_DARKER_TINT_02_COLOR_NAME], ";background-color:transparent;border-color:").concat(p.a[d.DEV_DARKER_TINT_02_COLOR_NAME], ";}"), "button.ladda-button.dev-darker-int-02.invert:hover{box-shadow:inset 0 0 0 1px;}", "button.ladda-button.dev-darker-int-02:disabled{background-color:".concat(p.a[d.DEV_DARKER_TINT_02_COLOR_NAME], ";}"), "button.ladda-button.brand-primary-green{background-color:".concat(p.a[d.BRAND_PRIMARY_GREEN_COLOR_NAME], ";color:").concat(p.a.white, ";}"), "button.ladda-button.brand-primary-green.invert{color:".concat(p.a[d.BRAND_PRIMARY_GREEN_COLOR_NAME], ";background-color:transparent;border-color:").concat(p.a[d.BRAND_PRIMARY_GREEN_COLOR_NAME], ";}"), "button.ladda-button.brand-primary-green.invert:hover{box-shadow:inset 0 0 0 1px;}", "button.ladda-button.brand-primary-green:disabled{background-color:".concat(p.a[d.BRAND_PRIMARY_GREEN_COLOR_NAME], ";}"), "button.ladda-button.brand-green-dark-tint-01{background-color:".concat(p.a[d.BRAND_GREEN_DARK_TINT_01_COLOR_NAME], ";color:").concat(p.a.white, ";}"), "button.ladda-button.brand-green-dark-tint-01.invert{color:".concat(p.a[d.BRAND_GREEN_DARK_TINT_01_COLOR_NAME], ";background-color:transparent;border-color:").concat(p.a[d.BRAND_GREEN_DARK_TINT_01_COLOR_NAME], ";}"), "button.ladda-button.brand-green-dark-tint-01.invert:hover{box-shadow:inset 0 0 0 1px;}", "button.ladda-button.brand-green-dark-tint-01:disabled{background-color:".concat(p.a[d.BRAND_GREEN_DARK_TINT_01_COLOR_NAME], ";}"), "button.ladda-button.workos-iris{background-color:".concat(p.a[d.WORK_OS_IRIS_COLOR_NAME], ";color:").concat(p.a.white, ";}"), "button.ladda-button.workos-iris.invert{color:".concat(p.a[d.WORK_OS_IRIS_COLOR_NAME], ";background-color:transparent;border-color:").concat(p.a[d.WORK_OS_IRIS_COLOR_NAME], ";}"), "button.ladda-button.workos-iris.invert:hover{box-shadow:inset 0 0 0 1px;}", "button.ladda-button.workos-iris:disabled{background-color:".concat(p.a[d.WORK_OS_IRIS_COLOR_NAME], ";}"), "button.ladda-button.marketing-red-dark{background-color:".concat(p.a[d.DARK_MARKETING_RED_COLOR_NAME], ";color:").concat(p.a.white, ";}"), "button.ladda-button.marketing-red-dark.invert{color:".concat(p.a[d.DARK_MARKETING_RED_COLOR_NAME], ";background-color:transparent;border-color:").concat(p.a[d.DARK_MARKETING_RED_COLOR_NAME], ";}"), "button.ladda-button.marketing-red-dark.invert:hover{box-shadow:inset 0 0 0 1px;}", "button.ladda-button.marketing-red-dark:disabled{background-color:".concat(p.a[d.DARK_MARKETING_RED_COLOR_NAME], ";}"), "button.ladda-button.crm-green-dark{background-color:".concat(p.a[d.DARK_CRM_GREEN_COLOR_NAME], ";color:").concat(p.a.white, ";}"), "button.ladda-button.crm-green-dark.invert{color:".concat(p.a[d.DARK_CRM_GREEN_COLOR_NAME], ";background-color:transparent;border-color:").concat(p.a[d.DARK_CRM_GREEN_COLOR_NAME], ";}"), "button.ladda-button.crm-green-dark.invert:hover{box-shadow:inset 0 0 0 1px;}", "button.ladda-button.crm-green-dark:disabled{background-color:".concat(p.a[d.DARK_CRM_GREEN_COLOR_NAME], ";}"), "button.ladda-button.projects-orange-dark{background-color:".concat(p.a[d.DARK_PROJECTS_ORANGE_COLOR_NAME], ";color:").concat(p.a.white, ";}"), "button.ladda-button.projects-orange-dark.invert{color:".concat(p.a[d.DARK_PROJECTS_ORANGE_COLOR_NAME], ";background-color:transparent;border-color:").concat(p.a[d.DARK_PROJECTS_ORANGE_COLOR_NAME], ";}"), "button.ladda-button.projects-orange-dark.invert:hover{box-shadow:inset 0 0 0 1px;}", "button.ladda-button.projects-orange-dark:disabled{background-color:".concat(p.a[d.DARK_PROJECTS_ORANGE_COLOR_NAME], ";}"), "button.ladda-button.dev-green-dark{background-color:".concat(p.a[d.DARK_DEV_GREEN_COLOR_NAME], ";color:").concat(p.a.white, ";}"), "button.ladda-button.dev-green-dark.invert{color:".concat(p.a[d.DARK_DEV_GREEN_COLOR_NAME], ";background-color:transparent;border-color:").concat(p.a[d.DARK_DEV_GREEN_COLOR_NAME], ";}"), "button.ladda-button.dev-green-dark.invert:hover{box-shadow:inset 0 0 0 1px;}", "button.ladda-button.dev-green-dark:disabled{background-color:".concat(p.a[d.DARK_DEV_GREEN_COLOR_NAME], ";}"), "button.ladda-button.space-blue{background-color:".concat(g["space-blue"]["background-color"], ";color:").concat(g["space-blue"].color, ";}"), "button.ladda-button.space-blue.invert{color:".concat(g["space-blue"]["background-color"], ";background-color:").concat(g["space-blue"].color, ";border-color:").concat(g["space-blue"]["background-color"], ";}"), "button.ladda-button.space-blue.invert:hover{box-shadow:inset 0 0 0 1px;}", "button.ladda-button.space-blue:disabled{background-color:".concat(g["space-blue"]["disabled-background-color"], ";}"), "button.ladda-button.black,button.ladda-button.Black{background-color:".concat(p.a.Black, ";color:").concat(p.a.white, ";}"), "button.ladda-button.black.invert,button.ladda-button.Black.invert{color:".concat(p.a.black, ";background-color:").concat(p.a.white, ";border-color:").concat(p.a.black, ";}"), "button.ladda-button.black.invert:hover,button.ladda-button.Black.invert:hover{box-shadow:inset 0 0 0 1px;}", "button.ladda-button.black:disabled,button.ladda-button.Black:disabled{background-color:".concat(p.a.Black, ";}"), "button.ladda-button.white{background-color:".concat(p.a[d.WHITE_COLOR_NAME], ";color:").concat(p.a[d.BRAND_BLACK_TEXT_COLOR], ";}"), "button.ladda-button.white.invert{color:".concat(p.a[d.WHITE_COLOR_NAME], ";background-color:transparent;border-color:").concat(p.a[d.WHITE_COLOR_NAME], ";}"), "button.ladda-button.white.invert:hover{box-shadow:inset 0 0 0 1px;}", "button.ladda-button.white:disabled{background-color:".concat(p.a.white, ";}"), "button.ladda-button.white-iris{background-color:".concat(p.a.white, ";color:").concat(p.a[d.WORK_OS_IRIS_COLOR_NAME], ";}"), "button.ladda-button.white-iris.invert{color:".concat(p.a.white, ";background-color:").concat(p.a[d.WORK_OS_IRIS_COLOR_NAME], ";border-color:").concat(p.a.white, ";}"), "button.ladda-button.white-iris.invert:hover{box-shadow:inset 0 0 0 1px;}", "button.ladda-button.white-iris:disabled{background-color:".concat(p.a.white, ";}"), "button.ladda-button.gradiant-workos-iris{background:".concat(p.a[d.GRADIANT_WORKOS_IRIS_COLOR_NAME], ";color:").concat(p.a.white, ";}"), "button.ladda-button.gradiant-workos-iris.invert{color:".concat(p.a[d.GRADIANT_WORKOS_IRIS_COLOR_NAME], ";background:").concat(p.a.white, ";border-color:").concat(p.a[d.GRADIANT_WORKOS_IRIS_COLOR_NAME], ";}"), "button.ladda-button.gradiant-workos-iris.invert:hover{box-shadow:inset 0 0 0 1px;}", "button.ladda-button.gradiant-workos-iris:disabled{background:".concat(p.a[d.GRADIANT_WORKOS_IRIS_COLOR_NAME], ";}"), "button.ladda-button.white-dodger{background-color:".concat(p.a.white, ";color:").concat(p.a[d.DODGER_BLUE_COLOR_NAME], ";}"), "button.ladda-button.white-dodger.invert{color:".concat(p.a.white, ";background-color:").concat(p.a[d.DODGER_BLUE_COLOR_NAME], ";border-color:").concat(p.a.white, ";}"), "button.ladda-button.white-dodger.invert:hover{box-shadow:inset 0 0 0 1px;}", "button.ladda-button.white-dodger:disabled{background-color:".concat(p.a.white, ";}"), "button.ladda-button.workforms-red{background-color:".concat(p.a[d.WORKFORMS_RED_COLOR_NAME], ";color:").concat(p.a.white, ";}"), "button.ladda-button.workforms-red.invert{color:".concat(p.a[d.WORKFORMS_RED_COLOR_NAME], ";background-color:").concat(p.a.white, ";border-color:").concat(p.a[d.WORKFORMS_RED_COLOR_NAME], ";}"), "button.ladda-button.workforms-red.invert:hover{box-shadow:inset 0 0 0 1px;}", "button.ladda-button.workforms-red:disabled{background-color:".concat(p.a[d.WORKFORMS_RED_COLOR_NAME], ";}"), "button.ladda-button.with-border{border-width:1px;border-style:solid;}"];
            m.__hash = "768742246";
            var O = ["button.ladda-button.small{font-size:0.8125rem;padding:12px 9vw;font-weight:300;}", "button.ladda-button.xs{font-size:0.8125rem;padding:8px 16px;font-weight:300;}", "button.ladda-button.sm{font-size:0.8125rem;padding:16px 32px;font-weight:300;}", "button.ladda-button.xl{font-size:1rem;padding:16px 120px;font-weight:400;}"];
            O.__hash = "3148497380";
            var v = ["button.ladda-button{padding:16px 32px;cursor:pointer;font-size:1rem;border-radius:40px;border:none;font-weight:400;text-align:center;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;line-height:17px;}", 'button.ladda-button[data-style="zoom-in"]:not(:hover){-webkit-transition:0.1s ease background-color;transition:0.1s ease background-color;}', 'button.ladda-button.disable-animation.ladda-button[data-style="zoom-out"] .ladda-label{-webkit-transition:none !important;transition:none !important;z-index:0;}', "button.ladda-button.disable-animation.ladda-button .ladda-label{-webkit-transition:none !important;transition:none !important;z-index:0;}", "button.ladda-button.has-arrow{padding:16px 32px 16px 31px;}", "button.ladda-button.has-arrow.sm{padding-left:29px;}", "button.ladda-button.invert{border-width:1px;border-style:solid;}", "button.ladda-button.has-paint-animation{isolation:isolate;}", "button.ladda-button:disabled{cursor:auto;}", "button.ladda-button:hover{outline:none;}", "button.ladda-button img{vertical-align:middle;}", "button.ladda-button .paint-overlay{position:absolute;display:block;width:0;height:0;border-radius:50%;background-color:var(--signup-paint-animation-color);-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);z-index:-1;top:8px;left:calc(100% / 2);}", "button.ladda-button .paint-overlay.start-animating{-webkit-animation:paintAnimation 1s ease-in-out;animation:paintAnimation 1s ease-in-out;}", "@-webkit-keyframes paintAnimation{0%{width:0;height:0;}60%{width:".concat("".concat(405, "px"), ";height:", "".concat(405, "px"), ";}100%{opacity:0;}}"), "@keyframes paintAnimation{0%{width:0;height:0;}60%{width:".concat("".concat(405, "px"), ";height:", "".concat(405, "px"), ";}100%{opacity:0;}}")];
            v.__hash = "2407656928";
            var y = ["{/*!\n   * Ladda\n   * http://lab.hakim.se/ladda\n   * MIT licensed\n   *\n   * Copyright (C) 2016 Hakim El Hattab, http://hakim.se\n   */}", ".ladda-button{position:relative;}", ".ladda-button .ladda-spinner{position:absolute;z-index:2;display:inline-block;width:32px;top:50%;margin-top:0;opacity:0;pointer-events:none;}", ".ladda-button .ladda-label{position:relative;z-index:3;}", ".ladda-button,.ladda-button .ladda-spinner,.ladda-button .ladda-label{-webkit-transition:0.3s cubic-bezier(0.175,0.885,0.32,1.275) all;transition:0.3s cubic-bezier(0.175,0.885,0.32,1.275) all;}", '.ladda-button[data-style="zoom-in"],.ladda-button[data-style="zoom-in"] .ladda-spinner,.ladda-button[data-style="zoom-in"] .ladda-label,.ladda-button[data-style="zoom-out"],.ladda-button[data-style="zoom-out"] .ladda-spinner,.ladda-button[data-style="zoom-out"] .ladda-label{-webkit-transition:0.3s ease all;transition:0.3s ease all;}', '.ladda-button[data-style="zoom-out"]{overflow:hidden;}', '.ladda-button[data-style="zoom-out"] .ladda-spinner{left:50%;margin-left:32px;-webkit-transform:scale(2.5);-ms-transform:scale(2.5);transform:scale(2.5);}', '.ladda-button[data-style="zoom-out"] .ladda-label{position:relative;display:inline-block;}', '.ladda-button[data-style="zoom-out"][data-loading] .ladda-label{opacity:0;-webkit-transform:scale(0.5);-ms-transform:scale(0.5);transform:scale(0.5);}', '.ladda-button[data-style="zoom-out"][data-loading] .ladda-spinner{opacity:1;margin-left:0;-webkit-transform:none;-ms-transform:none;transform:none;}', '.ladda-button[data-style="zoom-in"]{overflow:hidden;}', '.ladda-button[data-style="zoom-in"] .ladda-spinner{left:50%;margin-left:-16px;-webkit-transform:scale(0.2);-ms-transform:scale(0.2);transform:scale(0.2);}', '.ladda-button[data-style="zoom-in"] .ladda-label{position:relative;display:inline-block;}', '.ladda-button[data-style="zoom-in"][data-loading] .ladda-label{opacity:0;-webkit-transform:scale(2.2);-ms-transform:scale(2.2);transform:scale(2.2);}', '.ladda-button[data-style="zoom-in"][data-loading] .ladda-spinner{opacity:1;margin-left:0;-webkit-transform:none;-ms-transform:none;transform:none;}'];
            y.__hash = "862339233";
            var w = y,
                x = n("nKUr"),
                _ = ["blue", "outline-blue", "outline-dark-blue", "outline-dark-blue-inverted-hover", "outline-indigo-inverted-hover", "brand-blue", "brand-red", "brand-green", "brand-yellow", "brand-purple", "brand-iris", "green", "purple", "iris", "yellow", "royal", "orange", "dodger-blue", "white", "white-iris", "white-dodger", d.BRAND_BLACK_TEXT_COLOR, d.CRM_DARKER_TINT_02_COLOR_NAME, d.DEV_DARKER_TINT_02_COLOR_NAME, d.BRAND_PRIMARY_GREEN_COLOR_NAME, d.BRAND_BLACK_BACKGROUND_COLOR, d.GRADIANT_WORKOS_IRIS_COLOR_NAME, d.WORKFORMS_RED_COLOR_NAME, d.DARK_MARKETING_RED_COLOR_NAME, d.DARK_CRM_GREEN_COLOR_NAME, d.DARK_PROJECTS_ORANGE_COLOR_NAME, d.DARK_DEV_GREEN_COLOR_NAME, d.CRM_DARK_TINT_01_COLOR_NAME, d.BRAND_GREEN_DARK_TINT_01_COLOR_NAME, d.WORK_OS_IRIS_COLOR_NAME, d.BRAND_WORK_MANAGEMENT_DARKER_TINT_COLOR_NAME],
                k = function(t) {
                    var e = Object(c.useState)(!1),
                        n = e[0],
                        o = e[1],
                        r = Object(c.useState)(!0),
                        l = r[0],
                        h = r[1],
                        g = t.color,
                        y = t.className,
                        k = t.size,
                        j = t.isLoading,
                        E = t.onClickCallback,
                        R = t.children,
                        C = t.type,
                        A = t.disabled,
                        N = t.disableAnimation,
                        I = t.dataSpinnerColor,
                        T = t.invert,
                        S = t.withBorder,
                        D = t.hasArrow,
                        M = t.paintButtonColor,
                        P = -1 !== _.indexOf(g) ? g : "dodger-blue";
                    return Object(c.useEffect)((function() {
                        M && (h(!0), setTimeout((function() {
                            h(!1)
                        }), 1e3))
                    }), [M]), Object(x.jsx)(x.Fragment, {
                        children: Object(x.jsxs)(u.a, {
                            className: s()("".concat(y, " ").concat(P, " ").concat(k), {
                                invert: T,
                                "disable-animation": N,
                                "with-border": S,
                                "has-arrow": D,
                                "has-paint-animation": M
                            }),
                            "data-style": i.ZOOM_IN,
                            "data-size": i.XL,
                            "data-spinner-color": I,
                            onClick: E,
                            type: C,
                            loading: j,
                            disabled: A || j,
                            "data-button-color": P,
                            onMouseEnter: function() {
                                return o(!0)
                            },
                            onMouseLeave: function() {
                                return o(!1)
                            },
                            children: [R, D && Object(x.jsx)(b.a, {
                                size: k,
                                hover: n,
                                isSignup: !0
                            }), Object(x.jsx)(a.a, {
                                id: "3191259953",
                                dynamic: [P, Object(f.a)(p.a[P]), p.a[d.BACKGROUND_GRAY_COLOR_NAME]],
                                children: ['button.ladda-button[data-button-color="'.concat(P, '"]:not(.invert){-webkit-transition:background-color 200ms ease;transition:background-color 200ms ease;}'), 'button.ladda-button[data-button-color="'.concat(P, '"]:not(.invert):hover{background-color:').concat(Object(f.a)(p.a[P]), ";-webkit-filter:unset;filter:unset;}"), 'button.ladda-button[data-button-color="'.concat(P, '"]:not(.invert):hover.white,button.ladda-button[data-button-color="').concat(P, '"]:not(.invert):hover.white-iris{background-color:').concat(p.a[d.BACKGROUND_GRAY_COLOR_NAME], ";}")]
                            }), M && Object(x.jsx)("span", {
                                style: {
                                    "--signup-paint-animation-color": p.a[M]
                                },
                                className: "jsx-".concat(v.__hash, " jsx-").concat(m.__hash, " jsx-").concat(O.__hash, " jsx-").concat(w.__hash) + " " + a.a.dynamic([
                                    ["3191259953", [P, Object(f.a)(p.a[P]), p.a[d.BACKGROUND_GRAY_COLOR_NAME]]]
                                ]) + " " + (s()("paint-overlay", {
                                    "start-animating": l
                                }) || "")
                            }), Object(x.jsx)(a.a, {
                                id: v.__hash,
                                children: v
                            }), Object(x.jsx)(a.a, {
                                id: m.__hash,
                                children: m
                            }), Object(x.jsx)(a.a, {
                                id: O.__hash,
                                children: O
                            }), Object(x.jsx)(a.a, {
                                id: w.__hash,
                                children: w
                            })]
                        })
                    })
                };
            k.defaultProps = {
                isLoading: !1,
                disableAnimation: !1,
                onClickCallback: function() {},
                className: "",
                type: "button",
                withBorder: !1
            };
            e.a = k
        },
        g4pe: function(t, e, n) {
            t.exports = n("8Kt/")
        },
        "hKI/": function(t, e, n) {
            (function(e) {
                var n = "Expected a function",
                    o = /^\s+|\s+$/g,
                    r = /^[-+]0x[0-9a-f]+$/i,
                    a = /^0b[01]+$/i,
                    c = /^0o[0-7]+$/i,
                    i = parseInt,
                    u = "object" == typeof e && e && e.Object === Object && e,
                    l = "object" == typeof self && self && self.Object === Object && self,
                    s = u || l || Function("return this")(),
                    d = Object.prototype.toString,
                    p = Math.max,
                    f = Math.min,
                    b = function() {
                        return s.Date.now()
                    };

                function h(t, e, o) {
                    var r, a, c, i, u, l, s = 0,
                        d = !1,
                        h = !1,
                        O = !0;
                    if ("function" != typeof t) throw new TypeError(n);

                    function v(e) {
                        var n = r,
                            o = a;
                        return r = a = void 0, s = e, i = t.apply(o, n)
                    }

                    function y(t) {
                        return s = t, u = setTimeout(x, e), d ? v(t) : i
                    }

                    function w(t) {
                        var n = t - l;
                        return void 0 === l || n >= e || n < 0 || h && t - s >= c
                    }

                    function x() {
                        var t = b();
                        if (w(t)) return _(t);
                        u = setTimeout(x, function(t) {
                            var n = e - (t - l);
                            return h ? f(n, c - (t - s)) : n
                        }(t))
                    }

                    function _(t) {
                        return u = void 0, O && r ? v(t) : (r = a = void 0, i)
                    }

                    function k() {
                        var t = b(),
                            n = w(t);
                        if (r = arguments, a = this, l = t, n) {
                            if (void 0 === u) return y(l);
                            if (h) return u = setTimeout(x, e), v(l)
                        }
                        return void 0 === u && (u = setTimeout(x, e)), i
                    }
                    return e = m(e) || 0, g(o) && (d = !!o.leading, c = (h = "maxWait" in o) ? p(m(o.maxWait) || 0, e) : c, O = "trailing" in o ? !!o.trailing : O), k.cancel = function() {
                        void 0 !== u && clearTimeout(u), s = 0, r = l = a = u = void 0
                    }, k.flush = function() {
                        return void 0 === u ? i : _(b())
                    }, k
                }

                function g(t) {
                    var e = typeof t;
                    return !!t && ("object" == e || "function" == e)
                }

                function m(t) {
                    if ("number" == typeof t) return t;
                    if (function(t) {
                            return "symbol" == typeof t || function(t) {
                                return !!t && "object" == typeof t
                            }(t) && "[object Symbol]" == d.call(t)
                        }(t)) return NaN;
                    if (g(t)) {
                        var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                        t = g(e) ? e + "" : e
                    }
                    if ("string" != typeof t) return 0 === t ? t : +t;
                    t = t.replace(o, "");
                    var n = a.test(t);
                    return n || c.test(t) ? i(t.slice(2), n ? 2 : 8) : r.test(t) ? NaN : +t
                }
                t.exports = function(t, e, o) {
                    var r = !0,
                        a = !0;
                    if ("function" != typeof t) throw new TypeError(n);
                    return g(o) && (r = "leading" in o ? !!o.leading : r, a = "trailing" in o ? !!o.trailing : a), h(t, e, {
                        leading: r,
                        maxWait: e,
                        trailing: a
                    })
                }
            }).call(this, n("ntbh"))
        },
        hPVn: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return j
            }));
            var o = n("H+61"),
                r = n("UlJF"),
                a = n("+Css"),
                c = n("7LId"),
                i = n("VIvw"),
                u = n("iHvq"),
                l = n("cpVT"),
                s = n("MX0m"),
                d = n.n(s),
                p = n("q1tI"),
                f = n("L92s"),
                b = n("+6t4"),
                h = n("TSYQ"),
                g = n.n(h),
                m = n("fkjU"),
                O = n("WJer"),
                v = n("bmYG"),
                y = [".error-handling-component{position:relative;width:100%;}", ".error-handling-component .error-tooltip-text{color:red;font-weight:300;}", ".error-handling-component .tooltip{-webkit-transform:translate(0,-120%);-ms-transform:translate(0,-120%);transform:translate(0,-120%);}", "@media (max-width:".concat(v.y, "){.error-handling-component .tooltip{-webkit-transform:translate(5%,-120%);-ms-transform:translate(5%,-120%);transform:translate(5%,-120%);}}")];
            y.__hash = "875249827";
            var w = n("nKUr");

            function x(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    e && (o = o.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function _(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? x(Object(n), !0).forEach((function(e) {
                        Object(l.default)(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : x(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function k(t) {
                var e = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, o = Object(u.default)(t);
                    if (e) {
                        var r = Object(u.default)(this).constructor;
                        n = Reflect.construct(o, arguments, r)
                    } else n = o.apply(this, arguments);
                    return Object(i.default)(this, n)
                }
            }

            function j(t) {
                var e = function(e) {
                    Object(c.default)(i, e);
                    var n = k(i);

                    function i(t) {
                        var e;
                        return Object(o.default)(this, i), e = n.call(this, t), Object(l.default)(Object(a.a)(e), "handleClickOutside", (function() {
                            e.setState({
                                error: !1,
                                shouldShake: !1
                            })
                        })), Object(l.default)(Object(a.a)(e), "resetShaker", (function() {
                            e.state.shouldShake && setTimeout((function() {
                                return e.setState({
                                    shouldShake: !1
                                })
                            }), 600)
                        })), Object(l.default)(Object(a.a)(e), "updateErrorState", (function(t) {
                            e.setState({
                                error: t,
                                shouldShake: t
                            }, e.resetShaker)
                        })), e.state = {
                            error: !1,
                            shouldShake: !1
                        }, e
                    }
                    return Object(r.default)(i, [{
                        key: "renderErrorMessageIfNeeded",
                        value: function() {
                            var t = this.props,
                                e = t.preventErrorMessage,
                                n = t.translate,
                                o = this.state.error,
                                r = n("signup.emailError");
                            if (o && !e) return Object(w.jsx)(b.a, {
                                children: Object(w.jsx)("div", {
                                    className: "error-tooltip-text",
                                    children: r
                                })
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.state,
                                n = e.error,
                                o = e.shouldShake;
                            return Object(w.jsxs)("div", {
                                className: "jsx-".concat(y.__hash) + " " + (g()("error-handling-component") || ""),
                                children: [Object(w.jsxs)(f.a, {
                                    isActive: o,
                                    children: [Object(w.jsx)(t, _(_({}, this.props), {}, {
                                        isErrorState: n,
                                        errorStateCallback: this.updateErrorState
                                    })), this.renderErrorMessageIfNeeded()]
                                }), Object(w.jsx)(d.a, {
                                    id: y.__hash,
                                    children: y
                                })]
                            })
                        }
                    }]), i
                }(p.PureComponent);
                return Object(O.b)(Object(m.a)(e))
            }
        },
        "l/Z5": function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return o
            }));
            var o = function(t) {
                return 18e4.toLocaleString(t || "en")
            }
        },
        lT4e: function(t, e, n) {
            "use strict";
            var o = n("Qetd"),
                r = {};

            function a(t, e, n, o, r, a, c, i) {
                if (!t) {
                    var u;
                    if (void 0 === e) u = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
                    else {
                        var l = [n, o, r, a, c, i],
                            s = 0;
                        (u = new Error(e.replace(/%s/g, (function() {
                            return l[s++]
                        })))).name = "Invariant Violation"
                    }
                    throw u.framesToPop = 1, u
                }
            }
            var c = "mixins";
            t.exports = function(t, e, n) {
                var i = [],
                    u = {
                        mixins: "DEFINE_MANY",
                        statics: "DEFINE_MANY",
                        propTypes: "DEFINE_MANY",
                        contextTypes: "DEFINE_MANY",
                        childContextTypes: "DEFINE_MANY",
                        getDefaultProps: "DEFINE_MANY_MERGED",
                        getInitialState: "DEFINE_MANY_MERGED",
                        getChildContext: "DEFINE_MANY_MERGED",
                        render: "DEFINE_ONCE",
                        componentWillMount: "DEFINE_MANY",
                        componentDidMount: "DEFINE_MANY",
                        componentWillReceiveProps: "DEFINE_MANY",
                        shouldComponentUpdate: "DEFINE_ONCE",
                        componentWillUpdate: "DEFINE_MANY",
                        componentDidUpdate: "DEFINE_MANY",
                        componentWillUnmount: "DEFINE_MANY",
                        UNSAFE_componentWillMount: "DEFINE_MANY",
                        UNSAFE_componentWillReceiveProps: "DEFINE_MANY",
                        UNSAFE_componentWillUpdate: "DEFINE_MANY",
                        updateComponent: "OVERRIDE_BASE"
                    },
                    l = {
                        getDerivedStateFromProps: "DEFINE_MANY_MERGED"
                    },
                    s = {
                        displayName: function(t, e) {
                            t.displayName = e
                        },
                        mixins: function(t, e) {
                            if (e)
                                for (var n = 0; n < e.length; n++) p(t, e[n])
                        },
                        childContextTypes: function(t, e) {
                            t.childContextTypes = o({}, t.childContextTypes, e)
                        },
                        contextTypes: function(t, e) {
                            t.contextTypes = o({}, t.contextTypes, e)
                        },
                        getDefaultProps: function(t, e) {
                            t.getDefaultProps ? t.getDefaultProps = b(t.getDefaultProps, e) : t.getDefaultProps = e
                        },
                        propTypes: function(t, e) {
                            t.propTypes = o({}, t.propTypes, e)
                        },
                        statics: function(t, e) {
                            ! function(t, e) {
                                if (!e) return;
                                for (var n in e) {
                                    var o = e[n];
                                    if (e.hasOwnProperty(n)) {
                                        if (a(!(n in s), 'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.', n), n in t) return a("DEFINE_MANY_MERGED" === (l.hasOwnProperty(n) ? l[n] : null), "ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.", n), void(t[n] = b(t[n], o));
                                        t[n] = o
                                    }
                                }
                            }(t, e)
                        },
                        autobind: function() {}
                    };

                function d(t, e) {
                    var n = u.hasOwnProperty(e) ? u[e] : null;
                    v.hasOwnProperty(e) && a("OVERRIDE_BASE" === n, "ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.", e), t && a("DEFINE_MANY" === n || "DEFINE_MANY_MERGED" === n, "ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.", e)
                }

                function p(t, n) {
                    if (n) {
                        a("function" !== typeof n, "ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."), a(!e(n), "ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.");
                        var o = t.prototype,
                            r = o.__reactAutoBindPairs;
                        for (var i in n.hasOwnProperty(c) && s.mixins(t, n.mixins), n)
                            if (n.hasOwnProperty(i) && i !== c) {
                                var l = n[i],
                                    p = o.hasOwnProperty(i);
                                if (d(p, i), s.hasOwnProperty(i)) s[i](t, l);
                                else {
                                    var f = u.hasOwnProperty(i);
                                    if ("function" === typeof l && !f && !p && !1 !== n.autobind) r.push(i, l), o[i] = l;
                                    else if (p) {
                                        var g = u[i];
                                        a(f && ("DEFINE_MANY_MERGED" === g || "DEFINE_MANY" === g), "ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.", g, i), "DEFINE_MANY_MERGED" === g ? o[i] = b(o[i], l) : "DEFINE_MANY" === g && (o[i] = h(o[i], l))
                                    } else o[i] = l
                                }
                            }
                    } else;
                }

                function f(t, e) {
                    for (var n in a(t && e && "object" === typeof t && "object" === typeof e, "mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects."), e) e.hasOwnProperty(n) && (a(void 0 === t[n], "mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.", n), t[n] = e[n]);
                    return t
                }

                function b(t, e) {
                    return function() {
                        var n = t.apply(this, arguments),
                            o = e.apply(this, arguments);
                        if (null == n) return o;
                        if (null == o) return n;
                        var r = {};
                        return f(r, n), f(r, o), r
                    }
                }

                function h(t, e) {
                    return function() {
                        t.apply(this, arguments), e.apply(this, arguments)
                    }
                }

                function g(t, e) {
                    return e.bind(t)
                }
                var m = {
                        componentDidMount: function() {
                            this.__isMounted = !0
                        }
                    },
                    O = {
                        componentWillUnmount: function() {
                            this.__isMounted = !1
                        }
                    },
                    v = {
                        replaceState: function(t, e) {
                            this.updater.enqueueReplaceState(this, t, e)
                        },
                        isMounted: function() {
                            return !!this.__isMounted
                        }
                    },
                    y = function() {};
                return o(y.prototype, t.prototype, v),
                    function(t) {
                        var e = function(t, o, c) {
                            this.__reactAutoBindPairs.length && function(t) {
                                for (var e = t.__reactAutoBindPairs, n = 0; n < e.length; n += 2) {
                                    var o = e[n],
                                        r = e[n + 1];
                                    t[o] = g(t, r)
                                }
                            }(this), this.props = t, this.context = o, this.refs = r, this.updater = c || n, this.state = null;
                            var i = this.getInitialState ? this.getInitialState() : null;
                            a("object" === typeof i && !Array.isArray(i), "%s.getInitialState(): must return an object or null", e.displayName || "ReactCompositeComponent"), this.state = i
                        };
                        for (var o in e.prototype = new y, e.prototype.constructor = e, e.prototype.__reactAutoBindPairs = [], i.forEach(p.bind(null, e)), p(e, m), p(e, t), p(e, O), e.getDefaultProps && (e.defaultProps = e.getDefaultProps()), a(e.prototype.render, "createClass(...): Class specification must implement a `render` method."), u) e.prototype[o] || (e.prototype[o] = null);
                        return e
                    }
            }
        },
        n8Bu: function(t, e, n) {
            "use strict";
            var o = n("q1tI"),
                r = n("i8i4"),
                a = n("17x9"),
                c = n("fhzG"),
                i = n("GL8T"),
                u = a.any;
            "undefined" !== typeof window && (u = a.instanceOf(window.Element)), t.exports = c({
                displayName: "VisibilitySensor",
                propTypes: {
                    onChange: a.func,
                    active: a.bool,
                    partialVisibility: a.oneOfType([a.bool, a.oneOf(["top", "right", "bottom", "left"])]),
                    delayedCall: a.bool,
                    offset: a.oneOfType([a.shape({
                        top: a.number,
                        left: a.number,
                        bottom: a.number,
                        right: a.number
                    }), a.shape({
                        direction: a.oneOf(["top", "right", "bottom", "left"]),
                        value: a.number
                    })]),
                    scrollCheck: a.bool,
                    scrollDelay: a.number,
                    scrollThrottle: a.number,
                    resizeCheck: a.bool,
                    resizeDelay: a.number,
                    resizeThrottle: a.number,
                    intervalCheck: a.bool,
                    intervalDelay: a.number,
                    containment: u,
                    children: a.oneOfType([a.element, a.func]),
                    minTopValue: a.number
                },
                getDefaultProps: function() {
                    return {
                        active: !0,
                        partialVisibility: !1,
                        minTopValue: 0,
                        scrollCheck: !1,
                        scrollDelay: 250,
                        scrollThrottle: -1,
                        resizeCheck: !1,
                        resizeDelay: 250,
                        resizeThrottle: -1,
                        intervalCheck: !0,
                        intervalDelay: 100,
                        delayedCall: !1,
                        offset: {},
                        containment: null,
                        children: o.createElement("span")
                    }
                },
                getInitialState: function() {
                    return {
                        isVisible: null,
                        visibilityRect: {}
                    }
                },
                componentDidMount: function() {
                    this.node = r.findDOMNode(this), this.props.active && this.startWatching()
                },
                componentWillUnmount: function() {
                    this.stopWatching()
                },
                componentWillReceiveProps: function(t) {
                    t.active && !this.props.active ? (this.setState(this.getInitialState()), this.startWatching()) : t.active || this.stopWatching()
                },
                componentDidUpdate: function(t) {
                    this.node = r.findDOMNode(this)
                },
                getContainer: function() {
                    return this.props.containment || window
                },
                addEventListener: function(t, e, n, o) {
                    var r;
                    this.debounceCheck || (this.debounceCheck = {});
                    var a = function() {
                            r = null, this.check()
                        }.bind(this),
                        c = {
                            target: t,
                            fn: o > -1 ? function() {
                                r || (r = setTimeout(a, o || 0))
                            } : function() {
                                clearTimeout(r), r = setTimeout(a, n || 0)
                            },
                            getLastTimeout: function() {
                                return r
                            }
                        };
                    t.addEventListener(e, c.fn), this.debounceCheck[e] = c
                },
                startWatching: function() {
                    this.debounceCheck || this.interval || (this.props.intervalCheck && (this.interval = setInterval(this.check, this.props.intervalDelay)), this.props.scrollCheck && this.addEventListener(this.getContainer(), "scroll", this.props.scrollDelay, this.props.scrollThrottle), this.props.resizeCheck && this.addEventListener(window, "resize", this.props.resizeDelay, this.props.resizeThrottle), !this.props.delayedCall && this.check())
                },
                stopWatching: function() {
                    if (this.debounceCheck)
                        for (var t in this.debounceCheck)
                            if (this.debounceCheck.hasOwnProperty(t)) {
                                var e = this.debounceCheck[t];
                                clearTimeout(e.getLastTimeout()), e.target.removeEventListener(t, e.fn), this.debounceCheck[t] = null
                            }
                    this.debounceCheck = null, this.interval && (this.interval = clearInterval(this.interval))
                },
                roundRectDown: function(t) {
                    return {
                        top: Math.floor(t.top),
                        left: Math.floor(t.left),
                        bottom: Math.floor(t.bottom),
                        right: Math.floor(t.right)
                    }
                },
                check: function() {
                    var t, e, n = this.node;
                    if (!n) return this.state;
                    if (t = function(t) {
                            return void 0 === t.width && (t.width = t.right - t.left), void 0 === t.height && (t.height = t.bottom - t.top), t
                        }(this.roundRectDown(n.getBoundingClientRect())), this.props.containment) {
                        var o = this.props.containment.getBoundingClientRect();
                        e = {
                            top: o.top,
                            left: o.left,
                            bottom: o.bottom,
                            right: o.right
                        }
                    } else e = {
                        top: 0,
                        left: 0,
                        bottom: window.innerHeight || document.documentElement.clientHeight,
                        right: window.innerWidth || document.documentElement.clientWidth
                    };
                    var r = this.props.offset || {};
                    "object" === typeof r && (e.top += r.top || 0, e.left += r.left || 0, e.bottom -= r.bottom || 0, e.right -= r.right || 0);
                    var a = {
                            top: t.top >= e.top,
                            left: t.left >= e.left,
                            bottom: t.bottom <= e.bottom,
                            right: t.right <= e.right
                        },
                        c = t.height > 0 && t.width > 0,
                        u = c && a.top && a.left && a.bottom && a.right;
                    if (c && this.props.partialVisibility) {
                        var l = t.top <= e.bottom && t.bottom >= e.top && t.left <= e.right && t.right >= e.left;
                        "string" === typeof this.props.partialVisibility && (l = a[this.props.partialVisibility]), u = this.props.minTopValue ? l && t.top <= e.bottom - this.props.minTopValue : l
                    }
                    "string" === typeof r.direction && "number" === typeof r.value && (console.warn("[notice] offset.direction and offset.value have been deprecated. They still work for now, but will be removed in next major version. Please upgrade to the new syntax: { %s: %d }", r.direction, r.value), u = i(r, t, e));
                    var s = this.state;
                    return this.state.isVisible !== u && (s = {
                        isVisible: u,
                        visibilityRect: a
                    }, this.setState(s), this.props.onChange && this.props.onChange(u, a)), s
                },
                render: function() {
                    return this.props.children instanceof Function ? this.props.children({
                        isVisible: this.state.isVisible,
                        visibilityRect: this.state.visibilityRect
                    }) : o.Children.only(this.props.children)
                }
            })
        },
        pX74: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return o
            }));
            var o = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*){2,}|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        },
        "pn+o": function(t, e, n) {
            "use strict";
            var o = n("cpVT"),
                r = n("H+61"),
                a = n("UlJF"),
                c = n("7LId"),
                i = n("VIvw"),
                u = n("iHvq"),
                l = n("MX0m"),
                s = n.n(l),
                d = n("q1tI"),
                p = n("xwfA"),
                f = n("bmYG"),
                b = n("/Z+I"),
                h = (n("wKPs"), [".signup-form-core-component-wrapper form{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}", ".signup-form-core-component-wrapper .phoneno{display:none;}", ".signup-form-core-component-wrapper.align-left form{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}", ".signup-form-core-component-wrapper.hide-form{visibility:hidden;}", "@media (max-width:".concat(f.y, "){.signup-form-core-component-wrapper:not(.force-horizontal) form{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}}")]);
            h.__hash = "890050634";
            var g = [".signup-form-core-component-wrapper{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:100%;}", ".signup-form-core-component-wrapper input{font-size:0.875rem;line-height:8px;padding:12px 24px;border-radius:32px;-webkit-appearance:none;background-color:".concat(p.a["light-grey"], ";color:").concat(p.a.black, ";border:1px solid;border-color:").concat(p.a.grey, ";text-align:center;-webkit-transition:border-color 0.1s ease-in-out;transition:border-color 0.1s ease-in-out;margin:8px 16px 8px 0;}"), ".signup-form-core-component-wrapper input:hover::-webkit-input-placeholder,.signup-form-core-component-wrapper input:focus::-webkit-input-placeholder{color:".concat(p.a[b.WORK_OS_IRIS_COLOR_NAME], ";}"), ".signup-form-core-component-wrapper input:hover::-moz-placeholder,.signup-form-core-component-wrapper input:focus::-moz-placeholder{color:".concat(p.a[b.WORK_OS_IRIS_COLOR_NAME], ";}"), ".signup-form-core-component-wrapper input:hover:-ms-input-placeholder,.signup-form-core-component-wrapper input:focus:-ms-input-placeholder{color:".concat(p.a[b.WORK_OS_IRIS_COLOR_NAME], ";}"), ".signup-form-core-component-wrapper input:hover::placeholder,.signup-form-core-component-wrapper input:focus::placeholder{color:".concat(p.a[b.WORK_OS_IRIS_COLOR_NAME], ";}"), ".signup-form-core-component-wrapper input:focus{border-color:".concat(p.a[b.WORK_OS_IRIS_COLOR_NAME], ";background-color:").concat(p.a.white, ";}"), ".signup-form-core-component-wrapper input.transparent{background-color:rgba(255,255,255,0.1);color:".concat(p.a.white, ";}"), ".signup-form-core-component-wrapper input.transparent::-webkit-input-placeholder{color:".concat(p.a.white, ";opacity:0.8;}"), ".signup-form-core-component-wrapper input.transparent::-moz-placeholder{color:".concat(p.a.white, ";opacity:0.8;}"), ".signup-form-core-component-wrapper input.transparent:-ms-input-placeholder{color:".concat(p.a.white, ";opacity:0.8;}"), ".signup-form-core-component-wrapper input.transparent::placeholder{color:".concat(p.a.white, ";opacity:0.8;}"), ".signup-form-core-component-wrapper.error input,.signup-form-core-component-wrapper.error input:focus{border-color:".concat(p.a.error, ";}"), ".signup-form-core-component-wrapper button.ladda-button.sm{font-size:0.875rem;}", ".signup-form-core-component-wrapper .only-button{min-width:300px;}", ".signup-form-core-component-wrapper .signup-button-wrapper .signup-button{min-width:130px;}", "@media (max-width:1058px){.signup-form-core-component-wrapper .signup-button-wrapper .signup-button.secondary-button{margin-top:8px;}}", "@media (min-width:1058px){.signup-form-core-component-wrapper .signup-button-wrapper .signup-button.secondary-button{margin-left:24px;}}", ".signup-form-core-component-wrapper .signup-button-wrapper.button-with-arrow .signup-button{padding-right:20px;}", ".signup-form-core-component-wrapper .signup-button-wrapper.button-with-arrow .signup-button.xs{padding-right:14px;}", ".signup-form-core-component-wrapper .signup-button-wrapper.button-with-arrow .signup-button.xxs{padding-right:8px;padding-left:8px;font-size:0.6875rem;padding-top:8px;padding-bottom:8px;}", "@media (max-width:".concat(f.y, "){.signup-form-core-component-wrapper:not(.force-horizontal){text-align:center;}.signup-form-core-component-wrapper:not(.force-horizontal) input{margin-bottom:16px;font-size:1rem;padding:11.5px 8px;margin-right:0;min-width:264px;}.signup-form-core-component-wrapper:not(.force-horizontal) .signup-button-wrapper{width:100%;}.signup-form-core-component-wrapper:not(.force-horizontal) .signup-button-wrapper button{font-size:0.875rem;padding:16px 48px;width:100%;}.signup-form-core-component-wrapper:not(.force-horizontal) .button-with-arrow button.signup-button{padding-right:32px;}}")];
            g.__hash = "2871822729";
            var m = n("tWrx"),
                O = n("hPVn"),
                v = n("nKUr");

            function y(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    e && (o = o.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function w(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? y(Object(n), !0).forEach((function(e) {
                        Object(o.default)(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : y(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function x(t) {
                var e = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, o = Object(u.default)(t);
                    if (e) {
                        var r = Object(u.default)(this).constructor;
                        n = Reflect.construct(o, arguments, r)
                    } else n = o.apply(this, arguments);
                    return Object(i.default)(this, n)
                }
            }
            var _ = function(t) {
                Object(c.default)(n, t);
                var e = x(n);

                function n(t) {
                    return Object(r.default)(this, n), e.call(this, t)
                }
                return Object(a.default)(n, [{
                    key: "render",
                    value: function() {
                        return Object(v.jsxs)(d.Fragment, {
                            children: [Object(v.jsx)(m.a, w(w({}, this.props), {}, {
                                disableButtonAnimation: !0
                            })), Object(v.jsx)(s.a, {
                                id: h.__hash,
                                children: h
                            }), Object(v.jsx)(s.a, {
                                id: g.__hash,
                                children: g
                            })]
                        })
                    }
                }]), n
            }(d.PureComponent);
            e.a = Object(O.a)(_)
        },
        tWrx: function(t, e, n) {
            "use strict";
            var o = n("vJKn"),
                r = n.n(o),
                a = n("rg98"),
                c = n("H+61"),
                i = n("UlJF"),
                u = n("+Css"),
                l = n("7LId"),
                s = n("VIvw"),
                d = n("iHvq"),
                p = n("cpVT"),
                f = n("MX0m"),
                b = n.n(f),
                h = n("q1tI"),
                g = n("TSYQ"),
                m = n.n(g),
                O = n("rNX+"),
                v = n("1BgC"),
                y = n("GOf+"),
                w = n("UG/g"),
                x = n("YRc4"),
                _ = n("A1E4"),
                k = n("fsTa"),
                j = n("xwfA"),
                E = n("/Z+I"),
                R = n("xPEm"),
                C = n("fsZk"),
                A = n("XAPJ"),
                N = n("yAMK"),
                I = n("WJer"),
                T = n("QTzx"),
                S = n("PkAx"),
                D = n("3gK6"),
                M = n("jvQQ"),
                P = n("UmnM"),
                L = n("87MR"),
                F = n("5qtf"),
                z = n("0SMW"),
                U = n("Pr/7"),
                K = n("QxgC"),
                G = n("zTib"),
                B = n("EPOh"),
                W = n("K7IA"),
                V = n("eZOO"),
                H = n.n(V),
                Y = n("Tddi"),
                q = n("AJaK"),
                J = n("q0CA"),
                X = function() {
                    var t = document.referrer;
                    localStorage.getItem(J.SIGNUP_REFERRER) || localStorage.setItem(J.SIGNUP_REFERRER, JSON.stringify({
                        value: t,
                        timestamp: Date.now()
                    }))
                },
                $ = [".signup-form-core-component-wrapper .additional-button-text{font-style:normal;font-weight:normal;font-size:0.8125rem;line-height:18px;color:".concat(j.a.asphalt, ";}"), ".signup-form-core-component-wrapper .additional-button-text.below{margin-top:8px;text-align:center;}", ".signup-form-core-component-wrapper .additional-button-text.side{margin-left:16px;text-align:left;}", ".signup-form-core-component-wrapper .signup-button-wrapper.additional-text{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".signup-form-core-component-wrapper .signup-button-wrapper.additional-text.additional-text-below{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}", ".signup-form-core-component-wrapper .signup-button-wrapper.additional-text.additional-text-side{-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}", ".signup-form-core-component-wrapper .signup-button-wrapper.hide-button{visibility:hidden;}", ".signup-form-core-component-wrapper .signup-button-wrapper.with-icon .ladda-label{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".signup-form-core-component-wrapper .signup-button-wrapper.with-icon .ladda-label .product-icon{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-right:8px;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;}", ".signup-form-core-component-wrapper.vertical-google-connect{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;min-width:305px;}", ".signup-form-core-component-wrapper.vertical-google-connect.google-first{-webkit-flex-direction:column-reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;}", ".signup-form-core-component-wrapper.vertical-google-connect .social-connect-section{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}", ".signup-form-core-component-wrapper.vertical-google-connect .social-connect-section.google-first{-webkit-flex-direction:column-reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;}", ".signup-form-core-component-wrapper.vertical-google-connect .social-connect-section .google-separator{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:16px 0;}", ".signup-form-core-component-wrapper.vertical-google-connect .social-connect-section .google-separator .seperator-line{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;border-color:".concat(j.a["wolf-gray"], ";border-top-width:0.5px;border-bottom-width:0.5px;border-style:solid;opacity:0.4;}"), ".signup-form-core-component-wrapper.vertical-google-connect .social-connect-section .google-separator .separator-text{padding-left:16px;padding-right:16px;font-size:0.8125rem;line-height:24px;color:".concat(j.a.asphalt, ";}"), ".signup-form-core-component-wrapper.vertical-google-connect .social-connect-section .google-connect-button{padding-top:12px;padding-bottom:12px;}", ".signup-form-core-component-wrapper.vertical-google-connect .social-connect-section .google-connect-button .google-button-inner{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}", ".signup-form-core-component-wrapper.vertical-google-connect .social-connect-section .google-connect-button .google-button-inner .continue-text{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:0.875rem;}", ".signup-form-core-component-wrapper.vertical-google-connect .social-connect-section .google-connect-button .google-button-inner .google-icon{width:24px;height:24px;margin-left:16px;}", ".signup-form-core-component-wrapper .terms-of-service{margin-top:16px;margin-bottom:16px;width:240px;font-size:0.75rem;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;font-weight:400;line-height:1.125rem;}", ".signup-form-core-component-wrapper .terms-of-service .link{color:#1f76c2;}", ".signup-form-core-component-wrapper.dark-theme .additional-button-text{color:".concat(j.a.white, ";}"), ".signup-form-core-component-wrapper.dark-theme .social-connect-section .google-separator .separator-text{color:".concat(j.a.white, ";}"), ".signup-form-core-component-wrapper.dark-theme .social-connect-section .google-connect-button{border:none;}"];
            $.__hash = "320882948";
            var Q, Z = n("nKUr"),
                tt = function() {
                    return Object(Z.jsxs)("svg", {
                        width: "20",
                        height: "19",
                        viewBox: "0 0 20 19",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [Object(Z.jsx)("path", {
                            d: "M9.57439 12.1966C10.815 12.1966 11.8207 11.1909 11.8207 9.95037C11.8207 8.70979 10.815 7.7041 9.57439 7.7041C8.33381 7.7041 7.32812 8.70979 7.32812 9.95037C7.32812 11.1909 8.33381 12.1966 9.57439 12.1966Z",
                            fill: "white"
                        }), Object(Z.jsx)("path", {
                            d: "M9.57439 4.49253C10.815 4.49253 11.8207 3.48685 11.8207 2.24627C11.8207 1.00569 10.815 0 9.57439 0C8.33381 0 7.32812 1.00569 7.32812 2.24627C7.32812 3.48685 8.33381 4.49253 9.57439 4.49253Z",
                            fill: "white"
                        }), Object(Z.jsx)("path", {
                            d: "M2.24627 9.81675C3.48685 9.81675 4.49253 8.81106 4.49253 7.57049C4.49253 6.32991 3.48685 5.32422 2.24627 5.32422C1.00569 5.32422 0 6.32991 0 7.57049C0 8.81106 1.00569 9.81675 2.24627 9.81675Z",
                            fill: "white"
                        }), Object(Z.jsx)("path", {
                            d: "M5.0451 18.43C6.28567 18.43 7.29136 17.4243 7.29136 16.1838C7.29136 14.9432 6.28567 13.9375 5.0451 13.9375C3.80452 13.9375 2.79883 14.9432 2.79883 16.1838C2.79883 17.4243 3.80452 18.43 5.0451 18.43Z",
                            fill: "white"
                        }), Object(Z.jsx)("path", {
                            d: "M14.1017 18.431C15.3423 18.431 16.348 17.4253 16.348 16.1847C16.348 14.9442 15.3423 13.9385 14.1017 13.9385C12.8612 13.9385 11.8555 14.9442 11.8555 16.1847C11.8555 17.4253 12.8612 18.431 14.1017 18.431Z",
                            fill: "white"
                        }), Object(Z.jsx)("path", {
                            d: "M16.9025 9.81675C18.1431 9.81675 19.1488 8.81106 19.1488 7.57049C19.1488 6.32991 18.1431 5.32422 16.9025 5.32422C15.6619 5.32422 14.6562 6.32991 14.6562 7.57049C14.6562 8.81106 15.6619 9.81675 16.9025 9.81675Z",
                            fill: "white"
                        })]
                    })
                },
                et = function() {
                    return Object(Z.jsxs)("svg", {
                        width: "23",
                        height: "16",
                        viewBox: "0 0 23 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [Object(Z.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M11.5578 13.8771C11.0537 13.5037 10.5939 13.0675 10.1906 12.576C9.2082 11.379 8.61331 9.91794 8.4751 8.38625L16.1387 8.3861C16.5206 8.38594 16.8301 8.07632 16.8301 7.69444C16.83 6.1314 16.4262 4.58539 15.6456 3.21107C15.0177 2.10568 14.1696 1.15278 13.1632 0.405634C13.902 0.161758 14.6916 0.0297852 15.5121 0.0297852C19.6475 0.0297852 22.9999 3.38216 22.9999 7.51752C22.9999 11.6529 19.6475 15.0053 15.5121 15.0053C14.0605 15.0053 12.7053 14.5922 11.5578 13.8771Z",
                            fill: "white"
                        }), Object(Z.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M0.000488281 7.69457C0.000488281 3.44498 3.44546 0 7.69506 0C9.08159 0 10.3806 0.366118 11.5027 1.00651C11.5155 1.01504 11.5285 1.02318 11.5419 1.03092C12.7213 1.71185 13.7055 2.69767 14.3852 3.89428C14.9314 4.8559 15.26 5.91671 15.358 7.00297H7.69471C7.31272 7.00297 7.00306 7.31263 7.00306 7.69461C7.00306 9.79483 7.73128 11.8301 9.06365 13.4536C9.49381 13.9777 9.97835 14.4485 10.5066 14.8595C9.63621 15.2013 8.68809 15.3891 7.69506 15.3891C3.44546 15.3891 0.000488281 11.9442 0.000488281 7.69457Z",
                            fill: "white"
                        })]
                    })
                },
                nt = function() {
                    return Object(Z.jsx)("svg", {
                        width: "24",
                        height: "16",
                        viewBox: "0 0 24 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: Object(Z.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M11.0592 4.66582C9.32409 4.69936 7.9293 6.11496 7.9293 7.85816C7.9293 9.59951 9.32114 11.014 11.0537 11.0504V11.0538H20.3318V11.0511H20.6975V11.0573C20.8822 11.0639 21.0686 11.1361 21.2219 11.2886L22.77 12.828C23.081 13.1373 23.081 13.6406 22.77 13.9499L21.2219 15.4893C21.0368 15.6734 20.8034 15.7406 20.583 15.7163H11.1222L11.0572 15.716L10.995 15.7163H10.4078C5.70942 15.1564 3.91699 11.3715 3.51992 9.7832L3.50259 9.78753C3.34685 9.17026 3.26411 8.52389 3.26411 7.85816C3.26411 3.61106 6.63131 0.152213 10.8424 0.00491065C10.8928 0.0016537 10.9437 0 10.995 0L11.0601 0.000264158L11.1222 2.38905e-05C11.173 2.38905e-05 11.2233 0.00164219 11.2732 0.00482997C15.4851 0.151298 18.8531 3.61049 18.8531 7.85814C18.8531 8.51215 18.7733 9.14747 18.6228 9.75488H13.5643C13.9563 9.22464 14.1879 8.5686 14.1879 7.85814C14.1879 6.11534 12.7938 4.7 11.0592 4.66582ZM2.57097 11.0511H2.3326C1.04434 11.0511 0 12.0954 0 13.3837C0 14.6719 1.04434 15.7163 2.3326 15.7163H6.42581C4.3053 14.419 3.1291 12.464 2.57097 11.0511Z",
                            fill: "white"
                        })
                    })
                };

            function ot(t) {
                var e = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, o = Object(d.default)(t);
                    if (e) {
                        var r = Object(d.default)(this).constructor;
                        n = Reflect.construct(o, arguments, r)
                    } else n = o.apply(this, arguments);
                    return Object(s.default)(this, n)
                }
            }

            function rt(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    e && (o = o.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function at(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? rt(Object(n), !0).forEach((function(e) {
                        Object(p.default)(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : rt(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }
            var ct = function(t) {
                    return Object(Z.jsxs)("svg", at(at({
                        width: "2443",
                        height: "2500",
                        viewBox: "0 0 256 262",
                        xmlns: "http://www.w3.org/2000/svg",
                        preserveAspectRatio: "xMidYMid"
                    }, t), {}, {
                        children: [Object(Z.jsx)("path", {
                            d: "M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027",
                            fill: "#4285F4"
                        }), Object(Z.jsx)("path", {
                            d: "M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1",
                            fill: "#34A853"
                        }), Object(Z.jsx)("path", {
                            d: "M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782",
                            fill: "#FBBC05"
                        }), Object(Z.jsx)("path", {
                            d: "M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251",
                            fill: "#EB4335"
                        })]
                    }))
                },
                it = "signup.cta",
                ut = "sign-up",
                lt = (Q = {}, Object(p.default)(Q, R.n, Object(Z.jsx)(tt, {})), Object(p.default)(Q, R.a, Object(Z.jsx)(et, {})), Object(p.default)(Q, R.c, Object(Z.jsx)(nt, {})), Q),
                st = [E.WHITE_COLOR_NAME, E.BLUE_COLOR_NAME, E.WORK_OS_IRIS_COLOR_NAME, E.GRADIANT_WORKOS_IRIS_COLOR_NAME, E.CRM_DARKER_TINT_02_COLOR_NAME, E.BRAND_PRIMARY_GREEN_COLOR_NAME, E.DEV_DARKER_TINT_02_COLOR_NAME, E.BRAND_BLACK_TEXT_COLOR, E.BRAND_BLACK_BACKGROUND_COLOR, E.WORKFORMS_RED_COLOR_NAME, E.DARK_MARKETING_RED_COLOR_NAME, E.DARK_CRM_GREEN_COLOR_NAME, E.DARK_PROJECTS_ORANGE_COLOR_NAME, E.DARK_DEV_GREEN_COLOR_NAME, E.CRM_DARK_TINT_01_COLOR_NAME, E.BRAND_GREEN_DARK_TINT_01_COLOR_NAME, E.BRAND_WORK_MANAGEMENT_DARKER_TINT_COLOR_NAME],
                dt = (new Date).getTime(),
                pt = function(t) {
                    Object(l.default)(n, t);
                    var e = ot(n);

                    function n(t) {
                        var o;
                        Object(c.default)(this, n), o = e.call(this, t), Object(p.default)(Object(u.a)(o), "getSignupProductId", (function() {
                            var t = o.props,
                                e = t.signupProductId,
                                n = t.pageProductId;
                            return e || n
                        })), Object(p.default)(Object(u.a)(o), "getSignupClusterId", (function() {
                            var t = o.props,
                                e = t.signupClusterId,
                                n = t.pageClusterId;
                            return e || n
                        })), Object(p.default)(Object(u.a)(o), "setKeepRegionTestCookieIfNeeded", (function() {
                            var t = o.props,
                                e = t.abTests,
                                n = t.cloudfrontViewerCountry,
                                r = t.isMobileOrTabletBrowser,
                                a = t.signupWithsolutionAppReferenceId;
                            o.getSignupProductId() || r || a || Object(P.shouldGetKeepRegionTest)(e, n, !0) && Object(U.f)(v.IS_IN_KEEP_REGION_TEST, !0)
                        })), Object(p.default)(Object(u.a)(o), "useProductSignup", (function() {
                            var t = o.props,
                                e = t.forceProductSignup,
                                n = t.abTests,
                                r = o.getSignupProductId();
                            return r && (e || Object(R.t)(r, n))
                        })), Object(p.default)(Object(u.a)(o), "subscribeToBackNavigation", (function(t) {
                            null !== t && void 0 !== t && t.persisted && o.setState({
                                isLoading: !1,
                                isGoogleConnectLoading: !1
                            })
                        })), Object(p.default)(Object(u.a)(o), "focusOnInput", (function() {
                            o._emailInput && o._emailInput.focus()
                        })), Object(p.default)(Object(u.a)(o), "handleBeforeSubmitCallback", (function() {
                            var t = o.props,
                                e = t.beforeSubmitCallback,
                                n = t.shouldSendClustersAsParams;
                            if (e) {
                                var r = e();
                                if (r && r.params && n) Object.keys(r.params).forEach((function(t) {
                                    o._form.action = Object(D.addParamToURL)(o._form.action, t, r.params[t])
                                }))
                            }
                        })), Object(p.default)(Object(u.a)(o), "updateUserCluster", (function() {
                            var t = o.props.pageSubClusterId,
                                e = o.getSignupClusterId() || W.GENERIC_CLUSTER;
                            Object(y.f)(e, B.CLUSTER_TYPE, k.b, {
                                setSignupCluster: !0,
                                reason: k.g,
                                sendBigBrainEvent: !0,
                                useCaseId: t
                            })
                        })), Object(p.default)(Object(u.a)(o), "fireWorkManagementHighIntentTestEventIfNeeded", (function() {
                            var t = o.props.abTests;
                            o.getSignupProductId() === R.n && (Object(x.isInTest)(_.WM_HIGH_INTENT_IN_MINISITE_TEST, t) && Object(P.shouldExperienceWMHighIntentInMinisiteTest)(t, !0), Object(x.isInTest)(_.WM_HIGH_INTENT_IN_LP_TEST, t) && Object(P.shouldExperienceWMHighIntentInLPTest)(t, !0))
                        })), Object(p.default)(Object(u.a)(o), "sendGetStartedEvent", (function(t, e) {
                            var n, r = o.props,
                                a = r.placement,
                                c = r.buttonId,
                                i = r.signupClusterId,
                                u = r.segmentNumber,
                                l = r.segmentType,
                                s = r.extraData,
                                d = r.useCtaText;
                            r.ctaText;
                            d || (n = Object(M.d)(it));
                            var p = o.getSignupProductId(),
                                f = p ? Object(R.q)(p) : void 0,
                                b = {
                                    placement: a,
                                    kind: t,
                                    info1: l,
                                    info2: o.getButtonText(),
                                    info3: i,
                                    direct_object_id: e,
                                    direct_object: window.visitGuid,
                                    board_kind: c,
                                    value: u,
                                    data: at({
                                        timeStillPageLoad: (new Date).getTime() - dt,
                                        englishText: n,
                                        signupProductId: p,
                                        productKind: f
                                    }, s)
                                };
                            Object(L.trackEvent)(N.SIGNUP_MAIN_CTA_CLICKED, b), Object(Y.b)(H.a.SIGNUP_CLICKED)
                        })), Object(p.default)(Object(u.a)(o), "shouldReplaceGetStartedWithGoToAccount", (function() {
                            var t = o.props,
                                e = t.abTests,
                                n = t.useCtaText,
                                r = t.signupWithsolutionAppReferenceId,
                                a = t.forceGoToMyAccount,
                                c = t.persistantCookies,
                                i = t.pricingDetails;
                            return !!a || !(n && !i || r) && (o.onlyButton && Object(w.k)(e, c))
                        })), Object(p.default)(Object(u.a)(o), "renderTextNextToButtonIfNeeded", (function() {
                            var t = o.props,
                                e = t.additionalText,
                                n = t.additionalTextMaxWidth,
                                r = t.abTests,
                                a = t.translate;
                            if (e) {
                                var c = e,
                                    i = n;
                                return c.indexOf("Free forever. No credit card.") > -1 && Object(P.shouldGetUnlimitedTimeCTATextTest)(r, !0) && (c = a("signup.button.unlimitedTimeCta"), i = null), Object(Z.jsx)("div", {
                                    className: m()("additional-button-text", o.additionalTextPosition),
                                    style: {
                                        maxWidth: i
                                    },
                                    children: Object(Z.jsx)(G.a, {
                                        text: c
                                    })
                                })
                            }
                        })), Object(p.default)(Object(u.a)(o), "clickGoogleConnectAction", (function() {
                            var t = o.props.skipUpdateCluster;
                            o.setState({
                                isGoogleConnectLoading: !0
                            }), Object(L.trackEvent)(N.SIGNUP_WITH_GOOGLE_CLICKED), Object(Y.b)(H.a.SIGNUP_WITH_GOOGLE_CLICKED), o.handleBeforeSubmitCallback(), t || o.updateUserCluster(), o.setKeepRegionTestCookieIfNeeded(), window.location.href = Object(q.a)(O.uc)
                        })), Object(p.default)(Object(u.a)(o), "shouldRenderMobileOrTabletGoogleConnect", (function() {
                            var t = o.props,
                                e = t.isMobileOrTabletBrowser,
                                n = t.showGoogleConnectOnMobile,
                                r = t.forceVerticalGoogleConnect;
                            return e && n && (!Object(q.c)() || Object(q.c)() && Object(q.b)()) || r
                        })), Object(p.default)(Object(u.a)(o), "renderGoogleConnect", (function(t) {
                            return o.shouldRenderMobileOrTabletGoogleConnect() ? o.renderMobileGoogleConnect(t) : null
                        })), Object(p.default)(Object(u.a)(o), "googleConnectButton", (function() {
                            var t = o.props,
                                e = t.translate,
                                n = t.buttonSize,
                                r = t.googleOverrideCtaKey,
                                a = o.state.isGoogleConnectLoading,
                                c = o.getGoogleConnectColorData(),
                                i = r || "signup.continueWith";
                            return Object(Z.jsx)(C.a, {
                                className: "google-connect-button",
                                color: c.buttonColor,
                                size: n,
                                onClickCallback: o.clickGoogleConnectAction,
                                isLoading: a,
                                dataSpinnerColor: j.a[c.spinnerColorName],
                                withBorder: "true",
                                children: Object(Z.jsxs)("div", {
                                    className: "google-button-inner",
                                    children: [Object(Z.jsxs)("span", {
                                        className: "continue-text",
                                        children: [" ", e(i), " "]
                                    }), Object(Z.jsx)(ct, {
                                        className: "google-icon"
                                    })]
                                })
                            })
                        })), Object(p.default)(Object(u.a)(o), "renderMobileGoogleConnect", (function(t) {
                            var e = o.props.translate;
                            return Object(Z.jsxs)("div", {
                                className: m()("social-connect-section", {
                                    "google-first": t
                                }),
                                children: [Object(Z.jsxs)("div", {
                                    className: "google-separator",
                                    children: [Object(Z.jsx)("span", {
                                        className: "seperator-line"
                                    }), Object(Z.jsxs)("span", {
                                        className: "separator-text",
                                        children: [e("signup.or"), " "]
                                    }), Object(Z.jsx)("span", {
                                        className: "seperator-line"
                                    })]
                                }), o.googleConnectButton()]
                            })
                        })), Object(p.default)(Object(u.a)(o), "getGoogleConnectColorData", (function() {
                            var t, e = o.getButtonColor();
                            return (t = {}, Object(p.default)(t, E.WORK_OS_IRIS_COLOR_NAME, {
                                spinnerColorName: E.WORK_OS_IRIS_COLOR_NAME,
                                buttonColor: "white-iris"
                            }), Object(p.default)(t, E.DODGER_BLUE_COLOR_NAME, {
                                spinnerColorName: E.DODGER_BLUE_COLOR_NAME,
                                buttonColor: "white-dodger"
                            }), Object(p.default)(t, E.SPACE_BLUE_COLOR_NAME, {
                                spinnerColorName: E.SPACE_BLUE_COLOR_NAME,
                                buttonColor: "white"
                            }), t)[e] || {
                                spinnerColorName: E.SPACE_BLUE_COLOR_NAME,
                                buttonColor: "white"
                            }
                        })), Object(p.default)(Object(u.a)(o), "getButtonColor", (function() {
                            var t = o.props.buttonColor;
                            return st.includes(t) ? t : E.WORK_OS_IRIS_COLOR_NAME
                        })), Object(p.default)(Object(u.a)(o), "signupClicked", (function() {
                            o.setKeepRegionTestCookieIfNeeded(), o.onClickSignup()
                        })), Object(p.default)(Object(u.a)(o), "gotToAccount", (function(t, e) {
                            var n = o.props,
                                r = n.buttonId,
                                a = n.signupClusterId,
                                c = n.segmentNumber,
                                i = n.segmentType,
                                u = (0, n.translate)(e),
                                l = Object(M.d)(e),
                                s = {
                                    placement: o.getSignupProductId(),
                                    kind: t,
                                    info1: i,
                                    info2: u,
                                    info3: a,
                                    board_kind: r,
                                    value: c,
                                    data: {
                                        englishText: l
                                    }
                                };
                            Object(L.trackEvent)(N.EXISTING_ACCOUNT_MAIN_CTA_CLICKED, s), window.location = t
                        })), Object(p.default)(Object(u.a)(o), "renderTermsOfService", (function() {
                            var t = o.props.translate;
                            return Object(Z.jsx)("div", {
                                className: "terms-of-service",
                                children: Object(Z.jsx)("span", {
                                    dangerouslySetInnerHTML: {
                                        __html: t("mobileSignup.termsOfService")
                                    }
                                })
                            })
                        })), o.state = {
                            emailValue: "",
                            isLoading: !1,
                            isGoogleConnectLoading: !1
                        }, o._emailInput = null, o.updateEmail = o.updateEmail.bind(Object(u.a)(o)), o.handleSubmit = o.handleSubmit.bind(Object(u.a)(o)), o.handleUserSignup = o.handleUserSignup.bind(Object(u.a)(o)), o.submitFormIfNeeded = o.submitFormIfNeeded.bind(Object(u.a)(o)), o.onClickSignup = o.onClick.bind(Object(u.a)(o), ut), o.onlyButton = o.shouldSeeOnlyButton(t);
                        var r = t.isMobileOrTabletBrowser,
                            a = t.additionalTextPosition;
                        return o.additionalTextPosition = r ? K.a : a, o
                    }
                    return Object(i.default)(n, [{
                        key: "isInSoftSignupMobileTest",
                        value: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                e = this.props,
                                n = e.abTests,
                                o = e.getMobileSoftSignup;
                            return !this.onlyButton && (o || Object(P.shouldGetMobileSoftSignupTest)(n, t))
                        }
                    }, {
                        key: "shouldSeeOnlyButton",
                        value: function(t) {
                            var e = t.forceInputHide,
                                n = t.forceDefaultForm,
                                o = t.isMobileOrTabletBrowser;
                            return !!e || !n && !o
                        }
                    }, {
                        key: "getProductSignupURLWithProductId",
                        value: function() {
                            return Object(R.r)(this.getSignupProductId())
                        }
                    }, {
                        key: "handleProductCookie",
                        value: function() {
                            if (this.useProductSignup()) {
                                var t = this.getSignupProductId();
                                Object(U.e)(v.WEBSITE_PRODUCT_SIGNUP_COOKIE_NAME, Object(R.q)(t), {
                                    expires: 1
                                })
                            } else Object(U.d)(v.WEBSITE_PRODUCT_SIGNUP_COOKIE_NAME)
                        }
                    }, {
                        key: "hasOverridePlatformUrlForExistingAccount",
                        value: function() {
                            var t = this.props,
                                e = t.persistantCookies;
                            return t.existingAccount.platformUrlOverrideForExistingAccount && Object(w.j)(e)
                        }
                    }, {
                        key: "getPlatformOverrideUrlForExistingAccount",
                        value: function() {
                            var t = this.props.existingAccount.platformUrlOverrideForExistingAccount;
                            return Object(w.f)(t)
                        }
                    }, {
                        key: "getSubmitUrl",
                        value: function() {
                            var t, e, n = this.props,
                                o = n.submitUrl,
                                r = n.signupWithsolutionAppReferenceId;
                            return this.onlyButton ? this.hasOverridePlatformUrlForExistingAccount() ? t = this.getPlatformOverrideUrlForExistingAccount() : this.useProductSignup() ? t = this.getProductSignupURLWithProductId() : r && (t = Object(O.Tc)(r)) : (e = O.Ic, t = Object(D.addParamToURL)(e, "source", "web_main"), this.isInSoftSignupMobileTest(!0) && (t = Object(D.addParamToURL)(t, "new_signup_mobile", "1"), Object(U.e)(v.SOFT_SIGNUP_MOBILE_TEST_COOKIE_NAME, !0))), t || o
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            var t = this.props,
                                e = t.focusOnLoad,
                                n = t.isFirstSegment;
                            t.isPreview || ((e || n) && this.focusOnInput(), window.addEventListener("pageshow", this.subscribeToBackNavigation))
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            window.removeEventListener("pageshow", this.subscribeToBackNavigation)
                        }
                    }, {
                        key: "submitFormIfNeeded",
                        value: function(t) {
                            "Enter" === t.key && (this.handleSubmit(), t.preventDefault())
                        }
                    }, {
                        key: "updateEmail",
                        value: function(t) {
                            var e = this.state.emailValue,
                                n = this.props,
                                o = n.errorStateCallback,
                                r = n.parentSegment,
                                a = n.segmentNumber;
                            e || Object(L.trackEvent)(N.SIGNUP_START_FILL_EMAIL, {
                                info1: r,
                                info2: this.getButtonText(),
                                info3: a
                            }), this.setState({
                                emailValue: t.target.value
                            }), o(!1)
                        }
                    }, {
                        key: "handleSubmit",
                        value: function() {
                            var t = Object(a.default)(r.a.mark((function t() {
                                var e, n, o, a, c, i, u, l, s, d = arguments;
                                return r.a.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            if (e = d.length > 0 && void 0 !== d[0] ? d[0] : ut, n = this.props, o = n.errorStateCallback, a = n.placement, c = n.parentSegment, i = n.buttonSource, u = n.segmentNumber, l = "isLoading", this.setState(Object(p.default)({}, l, !0)), this.onlyButton || this._emailInput.isValid()) {
                                                t.next = 11;
                                                break
                                            }
                                            return s = this.state.emailValue, this.setState({
                                                isLoading: !1
                                            }), this._emailInput.focus(), o(!0), Object(L.trackEvent)(N.SIGNUP_SUBMIT_CLICK_WITH_EMAIL_ERROR, {
                                                info1: s,
                                                info2: c,
                                                info3: u
                                            }), t.abrupt("return");
                                        case 11:
                                            return Object(L.trackEvent)(N.SIGNUP_FORM_SUBMIT, {
                                                placement: a,
                                                kind: e,
                                                info1: c,
                                                info3: i
                                            }), this.handleBeforeSubmitCallback(), t.next = 15, this.handleUserSignup(e);
                                        case 15:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this)
                            })));
                            return function() {
                                return t.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "handleUserSignup",
                        value: function() {
                            var t = Object(a.default)(r.a.mark((function t(e) {
                                var n;
                                return r.a.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return this.props.skipUpdateCluster || this.updateUserCluster(), t.next = 4, Object(z.getScrollPercent)();
                                        case 4:
                                            n = t.sent, this.handleProductCookie(), this.sendGetStartedEvent(e, n), this.fireWorkManagementHighIntentTestEventIfNeeded(), X(), this._form.submit();
                                        case 10:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this)
                            })));
                            return function(e) {
                                return t.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "getButtonText",
                        value: function() {
                            var t, e = this.props,
                                n = e.useCtaText,
                                o = e.ctaText,
                                r = e.translate,
                                a = this.props,
                                c = a.persistantCookies,
                                i = a.existingAccount.existingAccountCtaText;
                            return i && Object(w.j)(c) ? t = i : n && o && (t = o), t || r(it)
                        }
                    }, {
                        key: "getPlaceholderText",
                        value: function() {
                            var t = this.props,
                                e = t.placeholder,
                                n = t.translate;
                            return e || n("signup.emailInputPlaceholder")
                        }
                    }, {
                        key: "onClick",
                        value: function(t) {
                            var e = this.state,
                                n = e.emailValue;
                            e.isLoading || (this.onlyButton || n || Object(L.trackEvent)(N.CLICKED_SIGNUP_WITHOUT_INSERTING_EMAIL), this.handleSubmit(t))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var t = this,
                                e = this.props,
                                n = e.buttonSize,
                                o = e.origin,
                                r = e.isErrorState,
                                a = e.className,
                                c = e.forceHorizontal,
                                i = e.emailInputOpened,
                                u = e.borderColor,
                                l = e.disableButtonAnimation,
                                s = e.placeholderFocusColor,
                                d = e.withButtonArrow,
                                p = e.buttonSpinnerColor,
                                f = e.freeTierForcePrevent,
                                h = e.additionalText,
                                g = e.isMobileInputTransparent,
                                O = e.isMobileOrTabletBrowser,
                                v = e.showGoogleConnectOnMobile,
                                y = e.invert,
                                x = e.displayedOnDarkTheme,
                                _ = e.forceVerticalGoogleConnect,
                                k = e.translate,
                                j = e.pricingDetails,
                                E = e.pageSubClusterId,
                                R = e.paintButtonColor,
                                N = e.existingAccount,
                                I = e.productIdToUse,
                                T = e.useCtaIcon,
                                S = this.state.isLoading,
                                M = !1,
                                P = this.getButtonText(),
                                L = this.getPlaceholderText(),
                                z = this.getSubmitUrl(),
                                U = Object(D.addParamToURL)(z, "origin", o);
                            U = f ? Object(D.addParamToURL)(U, F.PREVENT_FREE_TIER_PARAM, f) : U;
                            var K = this.getButtonColor(),
                                G = this.signupClicked;
                            if (this.shouldReplaceGetStartedWithGoToAccount()) {
                                var B = Object(w.h)({
                                    productId: this.getSignupProductId(),
                                    clusterId: this.getSignupClusterId(),
                                    subClusterId: E,
                                    pricingDetails: j,
                                    existingAccount: N
                                });
                                P = k(B.ctaTextKey), G = function() {
                                    return t.gotToAccount(B.platformRedirectUrl, B.ctaTextKey)
                                }, M = B.hideButton
                            }
                            var W = O && v || _;
                            return Object(Z.jsxs)("div", {
                                className: "jsx-".concat($.__hash) + " " + b.a.dynamic([
                                    ["3375504617", [this.isInSoftSignupMobileTest() ? "142px" : "unset"]]
                                ]) + " " + (m()("signup-form-core-component-wrapper", a, {
                                    error: r,
                                    "force-horizontal": c,
                                    "opened-input": i,
                                    "vertical-google-connect": W,
                                    "dark-theme": x,
                                    "google-first": this.isInSoftSignupMobileTest()
                                }) || ""),
                                children: [Object(Z.jsxs)("form", {
                                    action: U,
                                    "data-origin": o,
                                    method: "POST",
                                    noValidate: !0,
                                    ref: function(e) {
                                        return t._form = e
                                    },
                                    className: "jsx-".concat($.__hash) + " " + b.a.dynamic([
                                        ["3375504617", [this.isInSoftSignupMobileTest() ? "142px" : "unset"]]
                                    ]) + " signup-form",
                                    children: [!this.onlyButton && Object(Z.jsx)(A.a, {
                                        className: m()("signup-input", {
                                            "force-horizontal": c,
                                            transparent: g
                                        }),
                                        ref: function(e) {
                                            return t._emailInput = e
                                        },
                                        value: this.state.emailValue,
                                        onChange: this.updateEmail,
                                        placeholder: L,
                                        onKeyPress: this.submitFormIfNeeded,
                                        autoComplete: "on",
                                        placeholderFocusColor: s,
                                        style: {
                                            borderColor: u
                                        }
                                    }), Object(Z.jsxs)("div", {
                                        className: "jsx-".concat($.__hash) + " " + b.a.dynamic([
                                            ["3375504617", [this.isInSoftSignupMobileTest() ? "142px" : "unset"]]
                                        ]) + " " + (m()("signup-button-wrapper", h && "additional-text additional-text-".concat(this.additionalTextPosition), {
                                            "button-with-arrow": d,
                                            "hide-button": M,
                                            "with-icon": T
                                        }) || ""),
                                        children: [Object(Z.jsxs)(C.a, {
                                            className: "signup-button",
                                            color: K,
                                            size: n,
                                            isLoading: S,
                                            onClickCallback: G,
                                            disableAnimation: l,
                                            dataSpinnerColor: p,
                                            invert: y,
                                            hasArrow: d,
                                            paintButtonColor: R,
                                            children: [T && Object(Z.jsx)("div", {
                                                className: "jsx-".concat($.__hash) + " " + b.a.dynamic([
                                                    ["3375504617", [this.isInSoftSignupMobileTest() ? "142px" : "unset"]]
                                                ]) + " product-icon",
                                                children: lt[I]
                                            }), Object(Z.jsx)("span", {
                                                className: "jsx-".concat($.__hash) + " " + b.a.dynamic([
                                                    ["3375504617", [this.isInSoftSignupMobileTest() ? "142px" : "unset"]]
                                                ]) + " signup-text",
                                                children: P
                                            })]
                                        }), this.renderTextNextToButtonIfNeeded()]
                                    }), this.isInSoftSignupMobileTest() && this.renderTermsOfService()]
                                }), W && this.renderGoogleConnect(this.isInSoftSignupMobileTest()), Object(Z.jsx)(b.a, {
                                    id: $.__hash,
                                    children: $
                                }), Object(Z.jsx)(b.a, {
                                    id: "3375504617",
                                    dynamic: [this.isInSoftSignupMobileTest() ? "142px" : "unset"],
                                    children: [".error-handling-component .tooltip{bottom:".concat(this.isInSoftSignupMobileTest() ? "142px" : "unset", ";}")]
                                })]
                            })
                        }
                    }]), n
                }(h.PureComponent);
            pt.defaultProps = {
                focusOnLoad: !1,
                disableButtonAnimation: !1,
                borderColor: "grey",
                submitUrl: O.ac,
                origin: "hp_fullbg_page_header",
                forceDefaultForm: !1,
                forceInputHide: !1,
                withButtonArrow: !1,
                useCtaText: !1,
                ctaText: null,
                additionalText: !1,
                additionalTextPosition: K.a,
                additionalTextMaxWidth: null,
                buttonId: null,
                segmentNumber: null,
                isMobileInputTransparent: !1,
                skipUpdateCluster: !1,
                showGoogleConnectOnMobile: !1,
                invert: null,
                displayedOnDarkTheme: !1,
                forceVerticalGoogleConnect: !1,
                forceProductSignup: !1,
                forceGoToMyAccount: !1,
                existingAccount: {
                    platformUrlOverrideForExistingAccount: ""
                },
                extraData: {}
            };
            e.a = Object(T.b)(Object(S.b)(Object(I.b)(pt)))
        },
        wKPs: function(t, e, n) {
            "use strict";
            n.d(e, "b", (function() {
                return o
            })), n.d(e, "c", (function() {
                return r
            })), n.d(e, "e", (function() {
                return a
            })), n.d(e, "h", (function() {
                return c
            })), n.d(e, "f", (function() {
                return i
            })), n.d(e, "g", (function() {
                return u
            })), n.d(e, "j", (function() {
                return l
            })), n.d(e, "d", (function() {
                return s
            })), n.d(e, "i", (function() {
                return p
            })), n.d(e, "a", (function() {
                return f
            }));
            var o = "Regular",
                r = "Secondary",
                a = "Signup",
                c = "ButtonsCombo",
                i = "SignupButtonsCombo",
                u = "Subscribe",
                l = "YouTube Popup",
                s = "SignupAndYoutubeComboButtonsCombo",
                d = "0.3s",
                p = "background-size ".concat(d),
                f = "padding ".concat(d, " ease-in-out")
        },
        yncp: function(t, e, n) {
            "use strict";
            var o = n("cpVT"),
                r = n("MX0m"),
                a = n.n(r),
                c = n("wKPs"),
                i = [".arrow-wrapper{padding-left:12px;padding-right:6px;-webkit-transition:".concat(c.a, ";transition:").concat(c.a, ";}"), ".arrow-wrapper.hover{padding-left:18px;padding-right:0px;}", ".arrow-wrapper svg{fill:currentColor;height:12px;width:14px;}", ".arrow-wrapper.sm.signup svg{width:15px;height:13px;}", ".arrow-wrapper.md.signup svg,.arrow-wrapper.lg.signup svg{height:12px;width:16px;}", ".arrow-wrapper.lg svg{width:13px;height:11px;}", ".arrow-wrapper.md{padding-left:10px;padding-right:5px;}", ".arrow-wrapper.md.hover{padding-left:15px;padding-right:0px;}", ".arrow-wrapper.md svg{width:12px;height:10px;}", ".arrow-wrapper.xs{padding-left:8px;padding-right:4px;}", ".arrow-wrapper.xs.hover{padding-left:12px;padding-right:0px;}", ".arrow-wrapper.xs svg{width:12px;height:10px;}", ".arrow-wrapper.sm{padding-left:8px;padding-right:4px;}", ".arrow-wrapper.sm.hover{padding-left:12px;padding-right:0px;}", ".arrow-wrapper.sm svg{width:10px;height:9px;}"];
            i.__hash = "2730172878";
            var u = n("TSYQ"),
                l = n.n(u),
                s = n("VgqV"),
                d = n("nKUr");

            function p(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    e && (o = o.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function f(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? p(Object(n), !0).forEach((function(e) {
                        Object(o.default)(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }
            var b = function(t) {
                    return Object(d.jsx)("svg", f(f({
                        width: "10",
                        height: "14",
                        viewBox: "0 0 9 7",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, t), {}, {
                        children: Object(d.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M4.628.616a.5.5 0 1 0-.64.768L6.203 3.23H.5a.5.5 0 0 0 0 1h5.612L3.988 6a.5.5 0 1 0 .64.769l3.23-2.693a.5.5 0 0 0 0-.768L4.628.616z"
                        })
                    }))
                },
                h = function(t) {
                    var e = t.size,
                        n = t.hover,
                        o = t.isSignup;
                    return Object(d.jsxs)("span", {
                        className: "jsx-".concat(i.__hash) + " " + (l()("arrow-wrapper", e, {
                            hover: n,
                            signup: o
                        }) || ""),
                        children: [Object(d.jsx)(b, {}), Object(d.jsx)(a.a, {
                            id: i.__hash,
                            children: i
                        })]
                    })
                };
            h.defaultProps = {
                size: s.c
            };
            e.a = h
        },
        zTib: function(t, e, n) {
            "use strict";
            var o = n("H+61"),
                r = n("UlJF"),
                a = n("7LId"),
                c = n("VIvw"),
                i = n("iHvq"),
                u = n("q1tI"),
                l = n.n(u),
                s = n("TSYQ"),
                d = n.n(s),
                p = function() {
                    function t() {
                        Object(o.default)(this, t)
                    }
                    return Object(r.default)(t, [{
                        key: "regex",
                        value: function() {
                            return ""
                        }
                    }, {
                        key: "isRecursive",
                        value: function() {
                            return !1
                        }
                    }, {
                        key: "patternCharsCount",
                        value: function() {
                            return 0
                        }
                    }, {
                        key: "onMountHandler",
                        value: function(t) {}
                    }, {
                        key: "onUmountHandler",
                        value: function(t) {}
                    }, {
                        key: "replacer",
                        value: function() {
                            return null
                        }
                    }, {
                        key: "locale",
                        set: function(t) {
                            this.localeId = t
                        }
                    }]), t
                }(),
                f = n("xwfA");

            function b(t) {
                var e = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, o = Object(i.default)(t);
                    if (e) {
                        var r = Object(i.default)(this).constructor;
                        n = Reflect.construct(o, arguments, r)
                    } else n = o.apply(this, arguments);
                    return Object(c.default)(this, n)
                }
            }
            var h = "(<monday-color (".concat(".+?", ")>(.*?)</monday-color>)"),
                g = "(<monday-color .+?>".concat(".+?", "</monday-color>)"),
                m = function(t) {
                    Object(a.default)(n, t);
                    var e = b(n);

                    function n() {
                        return Object(o.default)(this, n), e.apply(this, arguments)
                    }
                    return Object(r.default)(n, [{
                        key: "regex",
                        value: function() {
                            return g
                        }
                    }, {
                        key: "isRecursive",
                        value: function() {
                            return !0
                        }
                    }, {
                        key: "patternCharsCount",
                        value: function() {
                            return 0
                        }
                    }, {
                        key: "replacer",
                        value: function(t) {
                            var e = t.match(h),
                                n = e[2],
                                o = e[3];
                            return '<span class="colored" style="color: '.concat(f.a[n], '; font: inherit;">').concat(o, "</span>")
                        }
                    }]), n
                }(p);

            function O(t) {
                var e = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, o = Object(i.default)(t);
                    if (e) {
                        var r = Object(i.default)(this).constructor;
                        n = Reflect.construct(o, arguments, r)
                    } else n = o.apply(this, arguments);
                    return Object(c.default)(this, n)
                }
            }
            var v = function(t) {
                    Object(a.default)(n, t);
                    var e = O(n);

                    function n() {
                        return Object(o.default)(this, n), e.apply(this, arguments)
                    }
                    return Object(r.default)(n, [{
                        key: "regex",
                        value: function() {
                            return "(<monday-dot .+? />)"
                        }
                    }, {
                        key: "isRecursive",
                        value: function() {
                            return !1
                        }
                    }, {
                        key: "replacer",
                        value: function(t) {
                            var e = t.match("(<monday-dot (.+?) />)")[2];
                            return '<span style="color: '.concat(f.a[e], '; font: inherit; font-size: 3.263rem;padding-left: 2px;">.</span>')
                        }
                    }]), n
                }(p),
                y = n("l/Z5");

            function w(t) {
                var e = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, o = Object(i.default)(t);
                    if (e) {
                        var r = Object(i.default)(this).constructor;
                        n = Reflect.construct(o, arguments, r)
                    } else n = o.apply(this, arguments);
                    return Object(c.default)(this, n)
                }
            }
            var x = function(t) {
                Object(a.default)(n, t);
                var e = w(n);

                function n() {
                    return Object(o.default)(this, n), e.apply(this, arguments)
                }
                return Object(r.default)(n, [{
                    key: "regex",
                    value: function() {
                        return "(<monday-paying-companies />)"
                    }
                }, {
                    key: "isRecursive",
                    value: function() {
                        return !1
                    }
                }, {
                    key: "replacer",
                    value: function(t) {
                        return "".concat(Object(y.a)(this.localeId))
                    }
                }]), n
            }(p);

            function _(t) {
                var e = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, o = Object(i.default)(t);
                    if (e) {
                        var r = Object(i.default)(this).constructor;
                        n = Reflect.construct(o, arguments, r)
                    } else n = o.apply(this, arguments);
                    return Object(c.default)(this, n)
                }
            }
            var k = function(t) {
                Object(a.default)(n, t);
                var e = _(n);

                function n() {
                    return Object(o.default)(this, n), e.apply(this, arguments)
                }
                return Object(r.default)(n, [{
                    key: "regex",
                    value: function() {
                        return "(<monday-new-line />)"
                    }
                }, {
                    key: "isRecursive",
                    value: function() {
                        return !1
                    }
                }, {
                    key: "patternCharsCount",
                    value: function() {
                        return 0
                    }
                }, {
                    key: "replacer",
                    value: function(t) {
                        return "<br/>"
                    }
                }]), n
            }(p);

            function j(t) {
                var e = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, o = Object(i.default)(t);
                    if (e) {
                        var r = Object(i.default)(this).constructor;
                        n = Reflect.construct(o, arguments, r)
                    } else n = o.apply(this, arguments);
                    return Object(c.default)(this, n)
                }
            }
            var E = function(t) {
                    Object(a.default)(n, t);
                    var e = j(n);

                    function n() {
                        return Object(o.default)(this, n), e.apply(this, arguments)
                    }
                    return Object(r.default)(n, [{
                        key: "regex",
                        value: function() {
                            return "(<monday-bold>.+</monday-bold>)"
                        }
                    }, {
                        key: "isRecursive",
                        value: function() {
                            return !0
                        }
                    }, {
                        key: "patternCharsCount",
                        value: function() {
                            return 0
                        }
                    }, {
                        key: "replacer",
                        value: function(t) {
                            var e = t.match("(<monday-bold>(.+)</monday-bold>)")[2];
                            return "<b>".concat(e, "</b>")
                        }
                    }]), n
                }(p),
                R = n("+Css"),
                C = n("cpVT"),
                A = n("3gK6");

            function N(t) {
                var e = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, o = Object(i.default)(t);
                    if (e) {
                        var r = Object(i.default)(this).constructor;
                        n = Reflect.construct(o, arguments, r)
                    } else n = o.apply(this, arguments);
                    return Object(c.default)(this, n)
                }
            }
            var I, T = "(<monday-url-param (".concat(".+?", ") (").concat(".+?", ") />)"),
                S = function(t) {
                    Object(a.default)(n, t);
                    var e = N(n);

                    function n() {
                        var t;
                        Object(o.default)(this, n);
                        for (var r = arguments.length, a = new Array(r), c = 0; c < r; c++) a[c] = arguments[c];
                        return t = e.call.apply(e, [this].concat(a)), Object(C.default)(Object(R.a)(t), "getParamValueFromUrl", (function(t) {
                            return Object(A.getUrlParamValueFromCurrentLocation)(t) || ""
                        })), t
                    }
                    return Object(r.default)(n, [{
                        key: "regex",
                        value: function() {
                            return "(<monday-url-param .+? />)"
                        }
                    }, {
                        key: "isRecursive",
                        value: function() {
                            return !1
                        }
                    }, {
                        key: "patternCharsCount",
                        value: function() {
                            return 0
                        }
                    }, {
                        key: "replacer",
                        value: function(t) {
                            var e = t.match(T),
                                n = e[2],
                                o = e[3];
                            return "".concat(this.getParamValueFromUrl(n) || o)
                        }
                    }]), n
                }(p),
                D = n("P/G1"),
                M = n.n(D);

            function P(t) {
                var e = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, o = Object(i.default)(t);
                    if (e) {
                        var r = Object(i.default)(this).constructor;
                        n = Reflect.construct(o, arguments, r)
                    } else n = o.apply(this, arguments);
                    return Object(c.default)(this, n)
                }
            }
            var L = {
                    SM: "sm",
                    MD: "md",
                    LG: "lg"
                },
                F = (I = {}, Object(C.default)(I, L.SM, 1.8), Object(C.default)(I, L.MD, 2.7), Object(C.default)(I, L.LG, 3.6), I),
                z = M()(L).join("|"),
                U = "(<monday-font-size (".concat(z, ")>(.+)</monday-font-size>)"),
                K = function(t) {
                    Object(a.default)(n, t);
                    var e = P(n);

                    function n() {
                        return Object(o.default)(this, n), e.apply(this, arguments)
                    }
                    return Object(r.default)(n, [{
                        key: "regex",
                        value: function() {
                            return "(<monday-font-size .+?>.+</monday-font-size>)"
                        }
                    }, {
                        key: "isRecursive",
                        value: function() {
                            return !1
                        }
                    }, {
                        key: "patternCharsCount",
                        value: function() {
                            return 0
                        }
                    }, {
                        key: "replacer",
                        value: function(t) {
                            var e = t.match(U),
                                n = e[2],
                                o = F[n],
                                r = e[3];
                            return '<span style="font-size: '.concat(o, 'rem;" >').concat(r, "</span>")
                        }
                    }]), n
                }(p),
                G = n("87MR"),
                B = n("yAMK");

            function W(t) {
                var e = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, o = Object(i.default)(t);
                    if (e) {
                        var r = Object(i.default)(this).constructor;
                        n = Reflect.construct(o, arguments, r)
                    } else n = o.apply(this, arguments);
                    return Object(c.default)(this, n)
                }
            }
            var V = "(<monday-hyperlink ".concat(".+?", ">.+</monday-hyperlink>)"),
                H = '(<monday-hyperlink href="('.concat(".+?", ')">(.+)</monday-hyperlink>)'),
                Y = [m, v, x, k, S, E, K, function(t) {
                    Object(a.default)(n, t);
                    var e = W(n);

                    function n() {
                        return Object(o.default)(this, n), e.apply(this, arguments)
                    }
                    return Object(r.default)(n, [{
                        key: "regex",
                        value: function() {
                            return V
                        }
                    }, {
                        key: "onMountHandler",
                        value: function(t) {
                            null === t || void 0 === t || t.addEventListener("click", n.onClick)
                        }
                    }, {
                        key: "onUmountHandler",
                        value: function(t) {
                            null === t || void 0 === t || t.removeEventListener("click", n.onClick)
                        }
                    }, {
                        key: "replacer",
                        value: function(t) {
                            var e = t.match(H),
                                n = e[2],
                                o = e[3];
                            return '<a href="'.concat(n, '" style="font: inherit;" data-monday-hyperlink>').concat(o, "</a>")
                        }
                    }], [{
                        key: "onClick",
                        value: function(t) {
                            t.target.hasAttribute("data-monday-hyperlink") && Object(G.trackEvent)(B.MONDAY_HYPERLINK_CLICKED, {
                                info1: t.target.innerText,
                                info2: t.target.href
                            })
                        }
                    }]), n
                }(p)].map((function(t) {
                    return new t
                })),
                q = function t(e, n) {
                    try {
                        var o = function() {
                            for (var o = Y.map((function(t) {
                                    return t.regex()
                                })).join("|"), r = new RegExp(o), a = "", c = ""; c = e.match(r);) Y.forEach((function(o, r) {
                                o.locale = n;
                                var i = c[r + 1];
                                if (i) {
                                    var u = e.substring(0, c.index),
                                        l = "".concat(a).concat(u).concat(o.replacer(i));
                                    a = o.isRecursive() ? t(l, n) : l;
                                    var s = Math.min(c.index + i.length + o.patternCharsCount(), e.length);
                                    e = e.substring(s, e.length)
                                }
                            }));
                            return {
                                v: a + e
                            }
                        }();
                        if ("object" === typeof o) return o.v
                    } catch (r) {
                        return console.error("Error in parseText:", r), e
                    }
                },
                J = n("WJer"),
                X = n("nKUr");

            function $(t) {
                var e = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, o = Object(i.default)(t);
                    if (e) {
                        var r = Object(i.default)(this).constructor;
                        n = Reflect.construct(o, arguments, r)
                    } else n = o.apply(this, arguments);
                    return Object(c.default)(this, n)
                }
            }
            var Q = function(t) {
                Object(a.default)(n, t);
                var e = $(n);

                function n(t) {
                    var r;
                    return Object(o.default)(this, n), (r = e.call(this, t)).ref = l.a.createRef(), r
                }
                return Object(r.default)(n, [{
                    key: "componentDidMount",
                    value: function() {
                        var t = this;
                        Y.map((function(t) {
                            return t.onMountHandler
                        })).forEach((function(e) {
                            e(t.ref.current)
                        }))
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        var t = this;
                        Y.map((function(t) {
                            return t.onUmountHandler
                        })).forEach((function(e) {
                            e(t.ref.current)
                        }))
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = this.props,
                            e = t.tagName,
                            n = t.text,
                            o = t.className,
                            r = t.style,
                            a = t.localeId;
                        if (!n) return null;
                        var c = q(n, a);
                        return Object(X.jsx)(e, {
                            ref: this.ref,
                            className: d()("monday-markup-language-component", o),
                            dangerouslySetInnerHTML: {
                                __html: c
                            },
                            style: r
                        })
                    }
                }]), n
            }(u.PureComponent);
            Q.defaultProps = {
                tagName: "div"
            };
            e.a = Object(J.b)(Q)
        },
        zaBJ: function(t, e, n) {
            "use strict";
            var o = n("cpVT"),
                r = n("MX0m"),
                a = n.n(r),
                c = n("q1tI"),
                i = n("bmYG"),
                u = n("Xkd2"),
                l = n("0SMW"),
                s = n("TSYQ"),
                d = n.n(s),
                p = n("n8Bu"),
                f = n.n(p),
                b = n("WJer"),
                h = "picture-lazy",
                g = "data-source",
                m = function(t) {
                    var e = t.getAttribute(g);
                    e && (t.setAttribute("src", e), t.classList.remove(h), t.removeAttribute(g))
                },
                O = n("yAMK"),
                v = n("NFXt"),
                y = n("CXpV"),
                w = [".picture-component.blur-image.jsx-4212101279 img.jsx-4212101279{-webkit-filter:blur(10px);filter:blur(10px);}", ".picture-lazy.jsx-4212101279{opacity:0;}"];
            w.__hash = "4212101279";
            var x = n("nKUr");

            function _(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    e && (o = o.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function k(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? _(Object(n), !0).forEach((function(e) {
                        Object(o.default)(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : _(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }
            var j = function(t) {
                var e = Object(c.useState)(!1),
                    r = e[0],
                    s = e[1],
                    p = Object(c.useRef)(null),
                    b = t.shouldUseLazyLoad,
                    _ = t.mobile,
                    j = t.imagesLazyLoad,
                    E = t.src,
                    R = t.alt,
                    C = t.shouldTrackMouseEvents,
                    A = t.className,
                    N = t.pictureClass,
                    I = t.specificImageStyle,
                    T = t.assetQuality,
                    S = t.isDecorative,
                    D = t.extraCloudinaryTransformations,
                    M = t.isPreview,
                    P = t.skipCloudinaryConversion,
                    L = t.pictureComponentHeight;
                Object(c.useEffect)((function() {
                    F(), n("7sg0")()
                }), []), Object(c.useEffect)((function() {
                    F()
                }), [E]);
                var F = function() {
                        var t, e = p.current;
                        G() ? (t = e, new IntersectionObserver((function(t, e) {
                            t.forEach((function(t) {
                                if (t.isIntersecting) {
                                    var n = t.target;
                                    m(n), e.disconnect()
                                }
                            }))
                        })).observe(t)) : m(e)
                    },
                    z = function(t, e) {
                        return Object(x.jsx)("source", {
                            srcSet: t,
                            media: e
                        })
                    },
                    U = function() {
                        var t = Object(u.extractCloudinaryTransformations)(k(k({}, I), D));
                        return K() && (t = function(t) {
                            return k(k({}, t), {}, {
                                quality: u.LOW_RES_IMAGE_QUALITY_LEVEL,
                                blur: u.IMAGE_DEFAULT_BLUR
                            })
                        }(t)), M && (t = function(t) {
                            var e = Math.ceil(1e3 * Math.random());
                            return k(k({}, t), {}, {
                                defaultImage: e
                            })
                        }(t)), t
                    },
                    K = function() {
                        return r
                    },
                    G = function() {
                        return !!window && ("IntersectionObserver" in window && b)
                    },
                    B = function() {
                        C && BigBrain("track", O.MOUSE_ENTER_IMAGE_ELEMENT, {
                            placement: E,
                            kind: R
                        })
                    },
                    W = function() {
                        C && BigBrain("track", O.CLICK_IMAGE_ELEMENT, {
                            placement: E,
                            kind: R
                        })
                    },
                    V = function() {
                        var t, e = U(),
                            n = Object(u.isCloudinaryUrl)(E) || P ? E : Object(u.generateCloudinaryImageUrl)(E, e, {
                                assetQuality: T
                            }),
                            r = function(t) {
                                return _ ? Object(u.isCloudinaryUrl)(_) || P ? _ : Object(u.generateCloudinaryImageUrl)(_, t) : null
                            }(e),
                            c = S ? "" : R || function(t) {
                                if (!t) return "";
                                try {
                                    var e = t.lastIndexOf("/"),
                                        n = t.substr(e + 1),
                                        o = Object(v.removeFileExtension)(n);
                                    return n.length > y.UUID_LENGTH && Object(y.isUUID)(n.substring(0, y.UUID_LENGTH)) && (o = o.substring(y.UUID_LENGTH)), o.replace(/-|_/g, " ").trim()
                                } catch (r) {
                                    return console.error("Error generating alt text for imgSrc: ".concat(t, ":"), r), t
                                }
                            }(E),
                            s = b ? g : "src",
                            f = (t = {
                                alt: c,
                                ref: p,
                                className: d()(A, Object(o.default)({}, h, b))
                            }, Object(o.default)(t, s, n), Object(o.default)(t, "style", I), t),
                            m = L ? {
                                display: "flex",
                                height: L,
                                width: "100%"
                            } : {};
                        return Object(x.jsxs)(x.Fragment, {
                            children: [Object(x.jsxs)("picture", {
                                style: m,
                                className: "jsx-".concat(w.__hash) + " " + (d()("picture-component", N, {
                                    "blur-image": K() && !Object(l.isImageLoaded)(p.current)
                                }) || ""),
                                children: [r && z(r, i.q), Object(x.jsx)("img", k(k({}, f), {}, {
                                    onMouseEnter: B,
                                    onClick: W,
                                    className: "jsx-".concat(w.__hash) + " " + (f && null != f.className && f.className || "")
                                }))]
                            }), Object(x.jsx)(a.a, {
                                id: w.__hash,
                                children: w
                            })]
                        })
                    };
                return j ? Object(x.jsx)(f.a, {
                    offset: {
                        top: 200
                    },
                    partialVisibility: !0,
                    onChange: function(t, e) {
                        t && r && s(!1)
                    },
                    active: !0,
                    scrollCheck: !0,
                    children: V()
                }) : V()
            };
            e.a = Object(b.b)(j);
            j.defaultProps = {
                className: "",
                src: "",
                mobile: null,
                alt: "",
                pictureClass: "",
                specificImageStyle: {},
                screenRatios: {},
                imagesLazyLoad: !1,
                shouldUseLazyLoad: !1,
                shouldTrackMouseEvents: !1,
                isDecorative: !1,
                skipCloudinaryConversion: !1
            }
        }
    }
]);
//# sourceMappingURL=9f6e78b4a2f03433ceb33678de8b19fa8277c6a6.d42ec49781d9883a96c3.js.map