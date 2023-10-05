(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [1], {
        "/eed": function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "a", (function() {
                return c
            })), n.d(t, "s", (function() {
                return s
            }));
            var r = n("JDgB"),
                i = Object.defineProperty,
                a = (e, t) => i(e, "name", {
                    value: t,
                    configurable: !0
                });

            function o(e, t) {
                return t.forEach((function(t) {
                    t && "string" !== typeof t && !Array.isArray(t) && Object.keys(t).forEach((function(n) {
                        if ("default" !== n && !(n in e)) {
                            var r = Object.getOwnPropertyDescriptor(t, n);
                            Object.defineProperty(e, n, r.get ? r : {
                                enumerable: !0,
                                get: function() {
                                    return t[n]
                                }
                            })
                        }
                    }))
                })), Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }))
            }
            a(o, "_mergeNamespaces");
            var c = {
                exports: {}
            };
            ! function(e) {
                var t, n, r = e.Pos;

                function i(e) {
                    var t = e.flags;
                    return null != t ? t : (e.ignoreCase ? "i" : "") + (e.global ? "g" : "") + (e.multiline ? "m" : "")
                }

                function o(e, t) {
                    for (var n = i(e), r = n, a = 0; a < t.length; a++) - 1 == r.indexOf(t.charAt(a)) && (r += t.charAt(a));
                    return n == r ? e : new RegExp(e.source, r)
                }

                function c(e) {
                    return /\\s|\\n|\n|\\W|\\D|\[\^/.test(e.source)
                }

                function s(e, t, n) {
                    t = o(t, "g");
                    for (var i = n.line, a = n.ch, c = e.lastLine(); i <= c; i++, a = 0) {
                        t.lastIndex = a;
                        var s = e.getLine(i),
                            l = t.exec(s);
                        if (l) return {
                            from: r(i, l.index),
                            to: r(i, l.index + l[0].length),
                            match: l
                        }
                    }
                }

                function l(e, t, n) {
                    if (!c(t)) return s(e, t, n);
                    t = o(t, "gm");
                    for (var i, a = 1, l = n.line, u = e.lastLine(); l <= u;) {
                        for (var d = 0; d < a && !(l > u); d++) {
                            var p = e.getLine(l++);
                            i = null == i ? p : i + "\n" + p
                        }
                        a *= 2, t.lastIndex = n.ch;
                        var f = t.exec(i);
                        if (f) {
                            var b = i.slice(0, f.index).split("\n"),
                                h = f[0].split("\n"),
                                m = n.line + b.length - 1,
                                g = b[b.length - 1].length;
                            return {
                                from: r(m, g),
                                to: r(m + h.length - 1, 1 == h.length ? g + h[0].length : h[h.length - 1].length),
                                match: f
                            }
                        }
                    }
                }

                function u(e, t, n) {
                    for (var r, i = 0; i <= e.length;) {
                        t.lastIndex = i;
                        var a = t.exec(e);
                        if (!a) break;
                        var o = a.index + a[0].length;
                        if (o > e.length - n) break;
                        (!r || o > r.index + r[0].length) && (r = a), i = a.index + 1
                    }
                    return r
                }

                function d(e, t, n) {
                    t = o(t, "g");
                    for (var i = n.line, a = n.ch, c = e.firstLine(); i >= c; i--, a = -1) {
                        var s = e.getLine(i),
                            l = u(s, t, a < 0 ? 0 : s.length - a);
                        if (l) return {
                            from: r(i, l.index),
                            to: r(i, l.index + l[0].length),
                            match: l
                        }
                    }
                }

                function p(e, t, n) {
                    if (!c(t)) return d(e, t, n);
                    t = o(t, "gm");
                    for (var i, a = 1, s = e.getLine(n.line).length - n.ch, l = n.line, p = e.firstLine(); l >= p;) {
                        for (var f = 0; f < a && l >= p; f++) {
                            var b = e.getLine(l--);
                            i = null == i ? b : b + "\n" + i
                        }
                        a *= 2;
                        var h = u(i, t, s);
                        if (h) {
                            var m = i.slice(0, h.index).split("\n"),
                                g = h[0].split("\n"),
                                x = l + m.length,
                                v = m[m.length - 1].length;
                            return {
                                from: r(x, v),
                                to: r(x + g.length - 1, 1 == g.length ? v + g[0].length : g[g.length - 1].length),
                                match: h
                            }
                        }
                    }
                }

                function f(e, t, n, r) {
                    if (e.length == t.length) return n;
                    for (var i = 0, a = n + Math.max(0, e.length - t.length);;) {
                        if (i == a) return i;
                        var o = i + a >> 1,
                            c = r(e.slice(0, o)).length;
                        if (c == n) return o;
                        c > n ? a = o : i = o + 1
                    }
                }

                function b(e, i, a, o) {
                    if (!i.length) return null;
                    var c = o ? t : n,
                        s = c(i).split(/\r|\n\r?/);
                    e: for (var l = a.line, u = a.ch, d = e.lastLine() + 1 - s.length; l <= d; l++, u = 0) {
                        var p = e.getLine(l).slice(u),
                            b = c(p);
                        if (1 == s.length) {
                            var h = b.indexOf(s[0]);
                            if (-1 == h) continue e;
                            return a = f(p, b, h, c) + u, {
                                from: r(l, f(p, b, h, c) + u),
                                to: r(l, f(p, b, h + s[0].length, c) + u)
                            }
                        }
                        var m = b.length - s[0].length;
                        if (b.slice(m) == s[0]) {
                            for (var g = 1; g < s.length - 1; g++)
                                if (c(e.getLine(l + g)) != s[g]) continue e;
                            var x = e.getLine(l + s.length - 1),
                                v = c(x),
                                j = s[s.length - 1];
                            if (v.slice(0, j.length) == j) return {
                                from: r(l, f(p, b, m, c) + u),
                                to: r(l + s.length - 1, f(x, v, j.length, c))
                            }
                        }
                    }
                }

                function h(e, i, a, o) {
                    if (!i.length) return null;
                    var c = o ? t : n,
                        s = c(i).split(/\r|\n\r?/);
                    e: for (var l = a.line, u = a.ch, d = e.firstLine() - 1 + s.length; l >= d; l--, u = -1) {
                        var p = e.getLine(l);
                        u > -1 && (p = p.slice(0, u));
                        var b = c(p);
                        if (1 == s.length) {
                            var h = b.lastIndexOf(s[0]);
                            if (-1 == h) continue e;
                            return {
                                from: r(l, f(p, b, h, c)),
                                to: r(l, f(p, b, h + s[0].length, c))
                            }
                        }
                        var m = s[s.length - 1];
                        if (b.slice(0, m.length) == m) {
                            var g = 1;
                            for (a = l - s.length + 1; g < s.length - 1; g++)
                                if (c(e.getLine(a + g)) != s[g]) continue e;
                            var x = e.getLine(l + 1 - s.length),
                                v = c(x);
                            if (v.slice(v.length - s[0].length) == s[0]) return {
                                from: r(l + 1 - s.length, f(x, v, x.length - s[0].length, c)),
                                to: r(l, f(p, b, m.length, c))
                            }
                        }
                    }
                }

                function m(e, t, n, i) {
                    var a;
                    this.atOccurrence = !1, this.afterEmptyMatch = !1, this.doc = e, n = n ? e.clipPos(n) : r(0, 0), this.pos = {
                        from: n,
                        to: n
                    }, "object" == typeof i ? a = i.caseFold : (a = i, i = null), "string" == typeof t ? (null == a && (a = !1), this.matches = function(n, r) {
                        return (n ? h : b)(e, t, r, a)
                    }) : (t = o(t, "gm"), i && !1 === i.multiline ? this.matches = function(n, r) {
                        return (n ? d : s)(e, t, r)
                    } : this.matches = function(n, r) {
                        return (n ? p : l)(e, t, r)
                    })
                }
                a(i, "regexpFlags"), a(o, "ensureFlags"), a(c, "maybeMultiline"), a(s, "searchRegexpForward"), a(l, "searchRegexpForwardMultiline"), a(u, "lastMatchIn"), a(d, "searchRegexpBackward"), a(p, "searchRegexpBackwardMultiline"), String.prototype.normalize ? (t = a((function(e) {
                    return e.normalize("NFD").toLowerCase()
                }), "doFold"), n = a((function(e) {
                    return e.normalize("NFD")
                }), "noFold")) : (t = a((function(e) {
                    return e.toLowerCase()
                }), "doFold"), n = a((function(e) {
                    return e
                }), "noFold")), a(f, "adjustPos"), a(b, "searchStringForward"), a(h, "searchStringBackward"), a(m, "SearchCursor"), m.prototype = {
                    findNext: function() {
                        return this.find(!1)
                    },
                    findPrevious: function() {
                        return this.find(!0)
                    },
                    find: function(t) {
                        var n = this.doc.clipPos(t ? this.pos.from : this.pos.to);
                        if (this.afterEmptyMatch && this.atOccurrence && (n = r(n.line, n.ch), t ? (n.ch--, n.ch < 0 && (n.line--, n.ch = (this.doc.getLine(n.line) || "").length)) : (n.ch++, n.ch > (this.doc.getLine(n.line) || "").length && (n.ch = 0, n.line++)), 0 != e.cmpPos(n, this.doc.clipPos(n)))) return this.atOccurrence = !1;
                        var i = this.matches(t, n);
                        if (this.afterEmptyMatch = i && 0 == e.cmpPos(i.from, i.to), i) return this.pos = i, this.atOccurrence = !0, this.pos.match || !0;
                        var a = r(t ? this.doc.firstLine() : this.doc.lastLine() + 1, 0);
                        return this.pos = {
                            from: a,
                            to: a
                        }, this.atOccurrence = !1
                    },
                    from: function() {
                        if (this.atOccurrence) return this.pos.from
                    },
                    to: function() {
                        if (this.atOccurrence) return this.pos.to
                    },
                    replace: function(t, n) {
                        if (this.atOccurrence) {
                            var i = e.splitLines(t);
                            this.doc.replaceRange(i, this.pos.from, this.pos.to, n), this.pos.to = r(this.pos.from.line + i.length - 1, i[i.length - 1].length + (1 == i.length ? this.pos.from.ch : 0))
                        }
                    }
                }, e.defineExtension("getSearchCursor", (function(e, t, n) {
                    return new m(this.doc, e, t, n)
                })), e.defineDocExtension("getSearchCursor", (function(e, t, n) {
                    return new m(this, e, t, n)
                })), e.defineExtension("selectMatches", (function(t, n) {
                    for (var r = [], i = this.getSearchCursor(t, this.getCursor("from"), n); i.findNext() && !(e.cmpPos(i.to(), this.getCursor("to")) > 0);) r.push({
                        anchor: i.from(),
                        head: i.to()
                    });
                    r.length && this.setSelections(r, 0)
                }))
            }(r.a.exports);
            var s = o({
                __proto__: null,
                default: c.exports
            }, [c.exports])
        },
        "0xfM": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            }));

            function r(e, t) {
                var n, r;
                const {
                    levels: i,
                    indentLevel: a
                } = e;
                return ((i && 0 !== i.length ? i.at(-1) - ((null === (n = this.electricInput) || void 0 === n ? void 0 : n.test(t)) ? 1 : 0) : a) || 0) * ((null === (r = this.config) || void 0 === r ? void 0 : r.indentUnit) || 0)
            }(0, Object.defineProperty)(r, "name", {
                value: "indent",
                configurable: !0
            })
        },
        "1s4Q": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            }));
            var r = {
                strokeWidth: "0",
                opacity: "1",
                shadowBlur: "0",
                shadowOffsetX: "0",
                shadowOffsetY: "0",
                zIndex: 0
            }
        },
        "B+5c": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return v
            }));
            var r = n("H+61"),
                i = n("UlJF"),
                a = n("+Css"),
                o = n("7LId"),
                c = n("VIvw"),
                s = n("iHvq"),
                l = n("cpVT"),
                u = n("MX0m"),
                d = n.n(u),
                p = n("q1tI"),
                f = (n("xwfA"), [".download-mobile-app-component{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}", ".download-mobile-app-component .download-mobile-app-image{width:168px;}"]);
            f.__hash = "862816351";
            var b = n("zaBJ"),
                h = n("AJaK"),
                m = n("rNX+"),
                g = n("nKUr");

            function x(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = Object(s.default)(e);
                    if (t) {
                        var i = Object(s.default)(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return Object(c.default)(this, n)
                }
            }
            var v = function(e) {
                Object(o.default)(n, e);
                var t = x(n);

                function n(e) {
                    var i;
                    return Object(r.default)(this, n), i = t.call(this, e), Object(l.default)(Object(a.a)(i), "downloadMobileApp", (function() {
                        var e = i.state.isAndroidPhone;
                        BigBrain("track", "hp_store_clicked", {
                            kind: e ? "android" : "ios"
                        }), window.location.href = e ? m.c : m.vb
                    })), i.state = {
                        isAndroidPhone: !1
                    }, i
                }
                return Object(i.default)(n, [{
                    key: "componentDidMount",
                    value: function() {
                        this.setState({
                            isAndroidPhone: Object(h.b)()
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.state.isAndroidPhone ? "https://dapulse-res.cloudinary.com/image/upload/mobile_menu/google-play-badge.png" : "https://dapulse-res.cloudinary.com/image/upload/mobile_menu/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917_1.png";
                        return Object(g.jsxs)("div", {
                            onClick: this.downloadMobileApp,
                            className: "jsx-".concat(f.__hash) + " download-mobile-app-component",
                            children: [Object(g.jsx)(b.a, {
                                src: e,
                                className: "download-mobile-app-image"
                            }), Object(g.jsx)(d.a, {
                                id: f.__hash,
                                children: f
                            })]
                        })
                    }
                }]), n
            }(p.PureComponent)
        },
        ELeq: function(e, t, n) {
            "use strict";
            var r = n("cpVT"),
                i = n("mI2M"),
                a = n("yDyw"),
                o = n("nVeN"),
                c = n("q1tI"),
                s = n("nKUr");

            function l(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function u(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? l(Object(n), !0).forEach((function(t) {
                        Object(r.default)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            t.a = function(e) {
                var t = e.componentType,
                    n = e.windowHeight,
                    r = e.relativeTo,
                    l = e.isPreview,
                    d = Object(a.b)(e, t),
                    p = Object(c.useMemo)((function() {
                        return Object(o.b)({
                            relativeTo: r,
                            isPreview: l
                        })
                    }), [n, r, l]);
                return Object(s.jsx)(i.b, u(u(u({}, d), Object(o.a)(e)), {}, {
                    y: d.y + p
                }))
            }
        },
        GA6A: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "default", (function() {
                return V
            }));
            var r = n("cpVT"),
                i = n("H+61"),
                a = n("UlJF"),
                o = n("7LId"),
                c = n("VIvw"),
                s = n("iHvq"),
                l = n("MX0m"),
                u = n.n(l),
                d = n("q1tI"),
                p = [".dynamic-header-component.jsx-3839087399 .desktop-wrapper.jsx-3839087399{display:block;}", ".dynamic-header-component.jsx-3839087399 .mobile-wrapper.jsx-3839087399{display:none;}", "@media (max-width:1090px){.dynamic-header-component.jsx-3839087399 .desktop-wrapper.jsx-3839087399{display:none;}.dynamic-header-component.jsx-3839087399 .mobile-wrapper.jsx-3839087399{display:block;}}"];
            p.__hash = "3839087399";
            var f = n("rNX+"),
                b = [".dynamic-header-desktop-component.jsx-801215115 .dynamic-header-links.jsx-801215115{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:100%;width:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".dynamic-header-desktop-component.jsx-801215115 .dynamic-header-links.jsx-801215115 .left-side-header-links.jsx-801215115,.dynamic-header-desktop-component.jsx-801215115 .dynamic-header-links.jsx-801215115 .right-side-header-links.jsx-801215115{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}"];
            b.__hash = "801215115";
            var h = n("k42/"),
                m = n("Pni5"),
                g = n("nKUr");

            function x(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = Object(s.default)(e);
                    if (t) {
                        var i = Object(s.default)(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return Object(c.default)(this, n)
                }
            }
            var v = function(e) {
                    Object(o.default)(n, e);
                    var t = x(n);

                    function n() {
                        return Object(i.default)(this, n), t.apply(this, arguments)
                    }
                    return Object(a.default)(n, [{
                        key: "renderLinkItems",
                        value: function(e) {
                            return this.props.linkItems.filter((function(t) {
                                return !!t.desktopAlignRight === e
                            })).map((function(e, t) {
                                var n = e.label,
                                    r = e.url;
                                return Object(g.jsx)("div", {
                                    className: "link-item-component-wrapper",
                                    children: Object(g.jsx)(m.a, {
                                        title: n,
                                        url: r
                                    })
                                }, t)
                            }))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props.logoImage,
                                t = e.src,
                                n = e.href,
                                r = e.style;
                            return Object(g.jsxs)("header", {
                                className: "jsx-".concat(b.__hash) + " dynamic-header-desktop-component",
                                children: [Object(g.jsx)(h.a, {
                                    imageSrc: t,
                                    imageHref: n,
                                    imageStyle: r,
                                    children: Object(g.jsxs)("div", {
                                        className: "jsx-".concat(b.__hash) + " dynamic-header-links",
                                        children: [Object(g.jsx)("div", {
                                            className: "jsx-".concat(b.__hash) + " left-side-header-links",
                                            children: this.renderLinkItems(!1)
                                        }), Object(g.jsx)("div", {
                                            className: "jsx-".concat(b.__hash) + " right-side-header-links",
                                            children: this.renderLinkItems(!0)
                                        })]
                                    })
                                }), Object(g.jsx)(u.a, {
                                    id: b.__hash,
                                    children: b
                                })]
                            })
                        }
                    }]), n
                }(d.PureComponent),
                j = n("+Css"),
                O = n("TSYQ"),
                y = n.n(O),
                w = n("aIjF"),
                k = n("WJer"),
                _ = n("SQRZ"),
                P = 300,
                I = n("zcv4"),
                C = "".concat(I.a.BASIC_HEADER_HEIGHT, "px"),
                T = "calc(100% - ".concat(I.a.BASIC_HEADER_HEIGHT - 1, "px)"),
                N = "opacity ".concat(P, "ms ease, visibility ").concat(P, "ms ease;"),
                S = [".dynamic-header-mobile-component{width:100%;height:".concat(C, ";}"), ".dynamic-header-mobile-component .mobile-header-content{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}", ".dynamic-header-mobile-component .mobile-header-content .hamburger-menu span{height:2px !important;}", ".dynamic-header-mobile-component .header-menu-component-wrapper{position:fixed;z-index:".concat(_.m, ";top:").concat(I.a.BASIC_HEADER_HEIGHT - 1 + "px", ";opacity:0;height:").concat(T, ";width:100%;visibility:hidden;-webkit-transition:").concat(N, ";transition:").concat(N, ";}"), ".dynamic-header-mobile-component .header-menu-component-wrapper.is-open{opacity:1;visibility:visible;}"];
            S.__hash = "4172051378";
            var E = n("xwfA"),
                R = [".dynamic-mobile-header-menu-component{height:100%;width:100%;background-color:".concat(E.a.white, ";-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding-bottom:80px;padding:0px 32px 80px;overflow:auto;}"), ".dynamic-mobile-header-menu-component .download-mobile-app-component-wrapper{margin-top:32px;}"];
            R.__hash = "32379717";
            var D = n("Kt2o"),
                A = n("B+5c");

            function L(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = Object(s.default)(e);
                    if (t) {
                        var i = Object(s.default)(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return Object(c.default)(this, n)
                }
            }
            var M = function(e) {
                Object(o.default)(n, e);
                var t = L(n);

                function n(e) {
                    return Object(i.default)(this, n), t.call(this, e)
                }
                return Object(a.default)(n, [{
                    key: "renderLinkItems",
                    value: function() {
                        return this.props.linkItems.map((function(e, t) {
                            var n = e.label,
                                r = e.url;
                            return Object(g.jsx)(D.a, {
                                title: n,
                                url: r
                            }, t)
                        }))
                    }
                }, {
                    key: "render",
                    value: function() {
                        return Object(g.jsxs)("div", {
                            className: "jsx-".concat(R.__hash) + " dynamic-mobile-header-menu-component",
                            children: [this.renderLinkItems(), Object(g.jsx)("div", {
                                className: "jsx-".concat(R.__hash) + " download-mobile-app-component-wrapper",
                                children: Object(g.jsx)(A.a, {})
                            }), Object(g.jsx)(u.a, {
                                id: R.__hash,
                                children: R
                            })]
                        })
                    }
                }]), n
            }(d.PureComponent);

            function H(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = Object(s.default)(e);
                    if (t) {
                        var i = Object(s.default)(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return Object(c.default)(this, n)
                }
            }
            M.defaultProps = {
                linkItems: []
            };
            var B = function(e) {
                    Object(o.default)(n, e);
                    var t = H(n);

                    function n(e) {
                        var a;
                        return Object(i.default)(this, n), a = t.call(this, e), Object(r.default)(Object(j.a)(a), "toogleOpenMenu", (function(e) {
                            e ? a._basicHeader.forceShadow() : a._basicHeader.unforceShadow(), a.setState({
                                isMenuOpen: e
                            })
                        })), Object(r.default)(Object(j.a)(a), "getMobileLinkItems", (function() {
                            return a.props.linkItems.filter((function(e) {
                                return !e.hideInMobile
                            }))
                        })), a.state = {
                            isMenuOpen: !1
                        }, a
                    }
                    return Object(a.default)(n, [{
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.props,
                                n = t.showMenu,
                                r = t.logoImage,
                                i = t.translate,
                                a = r.src,
                                o = r.href,
                                c = this.state.isMenuOpen,
                                s = this.getMobileLinkItems();
                            return Object(g.jsxs)("header", {
                                className: "jsx-".concat(S.__hash) + " dynamic-header-mobile-component",
                                children: [Object(g.jsx)(h.a, {
                                    ref: function(t) {
                                        return e._basicHeader = t
                                    },
                                    showMenu: n,
                                    imageSrc: a,
                                    imageHref: o,
                                    isMenuOpen: c,
                                    children: Object(g.jsx)("div", {
                                        "aria-label": i("header.mainMenu"),
                                        role: "navigation",
                                        className: "jsx-".concat(S.__hash) + " mobile-header-content",
                                        children: Object(g.jsx)(w.a, {
                                            changeStateCallback: this.toogleOpenMenu,
                                            isOpen: c
                                        })
                                    })
                                }), Object(g.jsx)("div", {
                                    className: "jsx-".concat(S.__hash) + " " + (y()("header-menu-component-wrapper", {
                                        "is-open": c
                                    }) || ""),
                                    children: Object(g.jsx)(M, {
                                        ref: function(t) {
                                            return e._headerMenu = t
                                        },
                                        linkItems: s
                                    })
                                }), Object(g.jsx)(u.a, {
                                    id: S.__hash,
                                    children: S
                                })]
                            })
                        }
                    }]), n
                }(d.PureComponent),
                U = Object(k.b)(B);

            function F(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function K(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? F(Object(n), !0).forEach((function(t) {
                        Object(r.default)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : F(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function z(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = Object(s.default)(e);
                    if (t) {
                        var i = Object(s.default)(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return Object(c.default)(this, n)
                }
            }
            var V = function(e) {
                Object(o.default)(n, e);
                var t = z(n);

                function n() {
                    return Object(i.default)(this, n), t.apply(this, arguments)
                }
                return Object(a.default)(n, [{
                    key: "render",
                    value: function() {
                        return Object(g.jsxs)("div", {
                            className: "jsx-".concat(p.__hash) + " dynamic-header-component",
                            children: [Object(g.jsx)("div", {
                                className: "jsx-".concat(p.__hash) + " desktop-wrapper",
                                children: Object(g.jsx)(v, K({}, this.props))
                            }), Object(g.jsx)("div", {
                                className: "jsx-".concat(p.__hash) + " mobile-wrapper",
                                children: Object(g.jsx)(U, K({}, this.props))
                            }), Object(g.jsx)(u.a, {
                                id: p.__hash,
                                children: p
                            })]
                        })
                    }
                }]), n
            }(d.PureComponent);
            V.defaultProps = {
                logoImage: {
                    src: f.Rb,
                    href: f.sc
                },
                linkItems: []
            }
        },
        HLp0: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "a", (function() {
                return c
            })), n.d(t, "s", (function() {
                return s
            }));
            var r = n("l8dK"),
                i = Object.defineProperty,
                a = (e, t) => i(e, "name", {
                    value: t,
                    configurable: !0
                });

            function o(e, t) {
                return t.forEach((function(t) {
                    t && "string" !== typeof t && !Array.isArray(t) && Object.keys(t).forEach((function(n) {
                        if ("default" !== n && !(n in e)) {
                            var r = Object.getOwnPropertyDescriptor(t, n);
                            Object.defineProperty(e, n, r.get ? r : {
                                enumerable: !0,
                                get: function() {
                                    return t[n]
                                }
                            })
                        }
                    }))
                })), Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }))
            }
            a(o, "_mergeNamespaces");
            var c = {
                exports: {}
            };
            ! function(e) {
                var t, n, r = e.Pos;

                function i(e) {
                    var t = e.flags;
                    return null != t ? t : (e.ignoreCase ? "i" : "") + (e.global ? "g" : "") + (e.multiline ? "m" : "")
                }

                function o(e, t) {
                    for (var n = i(e), r = n, a = 0; a < t.length; a++) - 1 == r.indexOf(t.charAt(a)) && (r += t.charAt(a));
                    return n == r ? e : new RegExp(e.source, r)
                }

                function c(e) {
                    return /\\s|\\n|\n|\\W|\\D|\[\^/.test(e.source)
                }

                function s(e, t, n) {
                    t = o(t, "g");
                    for (var i = n.line, a = n.ch, c = e.lastLine(); i <= c; i++, a = 0) {
                        t.lastIndex = a;
                        var s = e.getLine(i),
                            l = t.exec(s);
                        if (l) return {
                            from: r(i, l.index),
                            to: r(i, l.index + l[0].length),
                            match: l
                        }
                    }
                }

                function l(e, t, n) {
                    if (!c(t)) return s(e, t, n);
                    t = o(t, "gm");
                    for (var i, a = 1, l = n.line, u = e.lastLine(); l <= u;) {
                        for (var d = 0; d < a && !(l > u); d++) {
                            var p = e.getLine(l++);
                            i = null == i ? p : i + "\n" + p
                        }
                        a *= 2, t.lastIndex = n.ch;
                        var f = t.exec(i);
                        if (f) {
                            var b = i.slice(0, f.index).split("\n"),
                                h = f[0].split("\n"),
                                m = n.line + b.length - 1,
                                g = b[b.length - 1].length;
                            return {
                                from: r(m, g),
                                to: r(m + h.length - 1, 1 == h.length ? g + h[0].length : h[h.length - 1].length),
                                match: f
                            }
                        }
                    }
                }

                function u(e, t, n) {
                    for (var r, i = 0; i <= e.length;) {
                        t.lastIndex = i;
                        var a = t.exec(e);
                        if (!a) break;
                        var o = a.index + a[0].length;
                        if (o > e.length - n) break;
                        (!r || o > r.index + r[0].length) && (r = a), i = a.index + 1
                    }
                    return r
                }

                function d(e, t, n) {
                    t = o(t, "g");
                    for (var i = n.line, a = n.ch, c = e.firstLine(); i >= c; i--, a = -1) {
                        var s = e.getLine(i),
                            l = u(s, t, a < 0 ? 0 : s.length - a);
                        if (l) return {
                            from: r(i, l.index),
                            to: r(i, l.index + l[0].length),
                            match: l
                        }
                    }
                }

                function p(e, t, n) {
                    if (!c(t)) return d(e, t, n);
                    t = o(t, "gm");
                    for (var i, a = 1, s = e.getLine(n.line).length - n.ch, l = n.line, p = e.firstLine(); l >= p;) {
                        for (var f = 0; f < a && l >= p; f++) {
                            var b = e.getLine(l--);
                            i = null == i ? b : b + "\n" + i
                        }
                        a *= 2;
                        var h = u(i, t, s);
                        if (h) {
                            var m = i.slice(0, h.index).split("\n"),
                                g = h[0].split("\n"),
                                x = l + m.length,
                                v = m[m.length - 1].length;
                            return {
                                from: r(x, v),
                                to: r(x + g.length - 1, 1 == g.length ? v + g[0].length : g[g.length - 1].length),
                                match: h
                            }
                        }
                    }
                }

                function f(e, t, n, r) {
                    if (e.length == t.length) return n;
                    for (var i = 0, a = n + Math.max(0, e.length - t.length);;) {
                        if (i == a) return i;
                        var o = i + a >> 1,
                            c = r(e.slice(0, o)).length;
                        if (c == n) return o;
                        c > n ? a = o : i = o + 1
                    }
                }

                function b(e, i, a, o) {
                    if (!i.length) return null;
                    var c = o ? t : n,
                        s = c(i).split(/\r|\n\r?/);
                    e: for (var l = a.line, u = a.ch, d = e.lastLine() + 1 - s.length; l <= d; l++, u = 0) {
                        var p = e.getLine(l).slice(u),
                            b = c(p);
                        if (1 == s.length) {
                            var h = b.indexOf(s[0]);
                            if (-1 == h) continue e;
                            return a = f(p, b, h, c) + u, {
                                from: r(l, f(p, b, h, c) + u),
                                to: r(l, f(p, b, h + s[0].length, c) + u)
                            }
                        }
                        var m = b.length - s[0].length;
                        if (b.slice(m) == s[0]) {
                            for (var g = 1; g < s.length - 1; g++)
                                if (c(e.getLine(l + g)) != s[g]) continue e;
                            var x = e.getLine(l + s.length - 1),
                                v = c(x),
                                j = s[s.length - 1];
                            if (v.slice(0, j.length) == j) return {
                                from: r(l, f(p, b, m, c) + u),
                                to: r(l + s.length - 1, f(x, v, j.length, c))
                            }
                        }
                    }
                }

                function h(e, i, a, o) {
                    if (!i.length) return null;
                    var c = o ? t : n,
                        s = c(i).split(/\r|\n\r?/);
                    e: for (var l = a.line, u = a.ch, d = e.firstLine() - 1 + s.length; l >= d; l--, u = -1) {
                        var p = e.getLine(l);
                        u > -1 && (p = p.slice(0, u));
                        var b = c(p);
                        if (1 == s.length) {
                            var h = b.lastIndexOf(s[0]);
                            if (-1 == h) continue e;
                            return {
                                from: r(l, f(p, b, h, c)),
                                to: r(l, f(p, b, h + s[0].length, c))
                            }
                        }
                        var m = s[s.length - 1];
                        if (b.slice(0, m.length) == m) {
                            var g = 1;
                            for (a = l - s.length + 1; g < s.length - 1; g++)
                                if (c(e.getLine(a + g)) != s[g]) continue e;
                            var x = e.getLine(l + 1 - s.length),
                                v = c(x);
                            if (v.slice(v.length - s[0].length) == s[0]) return {
                                from: r(l + 1 - s.length, f(x, v, x.length - s[0].length, c)),
                                to: r(l, f(p, b, m.length, c))
                            }
                        }
                    }
                }

                function m(e, t, n, i) {
                    var a;
                    this.atOccurrence = !1, this.afterEmptyMatch = !1, this.doc = e, n = n ? e.clipPos(n) : r(0, 0), this.pos = {
                        from: n,
                        to: n
                    }, "object" == typeof i ? a = i.caseFold : (a = i, i = null), "string" == typeof t ? (null == a && (a = !1), this.matches = function(n, r) {
                        return (n ? h : b)(e, t, r, a)
                    }) : (t = o(t, "gm"), i && !1 === i.multiline ? this.matches = function(n, r) {
                        return (n ? d : s)(e, t, r)
                    } : this.matches = function(n, r) {
                        return (n ? p : l)(e, t, r)
                    })
                }
                a(i, "regexpFlags"), a(o, "ensureFlags"), a(c, "maybeMultiline"), a(s, "searchRegexpForward"), a(l, "searchRegexpForwardMultiline"), a(u, "lastMatchIn"), a(d, "searchRegexpBackward"), a(p, "searchRegexpBackwardMultiline"), String.prototype.normalize ? (t = a((function(e) {
                    return e.normalize("NFD").toLowerCase()
                }), "doFold"), n = a((function(e) {
                    return e.normalize("NFD")
                }), "noFold")) : (t = a((function(e) {
                    return e.toLowerCase()
                }), "doFold"), n = a((function(e) {
                    return e
                }), "noFold")), a(f, "adjustPos"), a(b, "searchStringForward"), a(h, "searchStringBackward"), a(m, "SearchCursor"), m.prototype = {
                    findNext: function() {
                        return this.find(!1)
                    },
                    findPrevious: function() {
                        return this.find(!0)
                    },
                    find: function(t) {
                        var n = this.doc.clipPos(t ? this.pos.from : this.pos.to);
                        if (this.afterEmptyMatch && this.atOccurrence && (n = r(n.line, n.ch), t ? (n.ch--, n.ch < 0 && (n.line--, n.ch = (this.doc.getLine(n.line) || "").length)) : (n.ch++, n.ch > (this.doc.getLine(n.line) || "").length && (n.ch = 0, n.line++)), 0 != e.cmpPos(n, this.doc.clipPos(n)))) return this.atOccurrence = !1;
                        var i = this.matches(t, n);
                        if (this.afterEmptyMatch = i && 0 == e.cmpPos(i.from, i.to), i) return this.pos = i, this.atOccurrence = !0, this.pos.match || !0;
                        var a = r(t ? this.doc.firstLine() : this.doc.lastLine() + 1, 0);
                        return this.pos = {
                            from: a,
                            to: a
                        }, this.atOccurrence = !1
                    },
                    from: function() {
                        if (this.atOccurrence) return this.pos.from
                    },
                    to: function() {
                        if (this.atOccurrence) return this.pos.to
                    },
                    replace: function(t, n) {
                        if (this.atOccurrence) {
                            var i = e.splitLines(t);
                            this.doc.replaceRange(i, this.pos.from, this.pos.to, n), this.pos.to = r(this.pos.from.line + i.length - 1, i[i.length - 1].length + (1 == i.length ? this.pos.from.ch : 0))
                        }
                    }
                }, e.defineExtension("getSearchCursor", (function(e, t, n) {
                    return new m(this.doc, e, t, n)
                })), e.defineDocExtension("getSearchCursor", (function(e, t, n) {
                    return new m(this, e, t, n)
                })), e.defineExtension("selectMatches", (function(t, n) {
                    for (var r = [], i = this.getSearchCursor(t, this.getCursor("from"), n); i.findNext() && !(e.cmpPos(i.to(), this.getCursor("to")) > 0);) r.push({
                        anchor: i.from(),
                        head: i.to()
                    });
                    r.length && this.setSelections(r, 0)
                }))
            }(r.a.exports);
            var s = o({
                __proto__: null,
                default: c.exports
            }, [c.exports])
        },
        HbrU: function(e, t, n) {
            "use strict";
            var r = n("Nygj"),
                i = n("c1qA");
            t.a = {
                portalId: "5945317",
                formId: i.a,
                source: r.u,
                withPrivacyNotice: !0
            }
        },
        Kt2o: function(e, t, n) {
            "use strict";
            var r = n("H+61"),
                i = n("UlJF"),
                a = n("7LId"),
                o = n("VIvw"),
                c = n("iHvq"),
                s = n("MX0m"),
                l = n.n(s),
                u = n("q1tI"),
                d = n("xwfA"),
                p = n("Nxo1"),
                f = "1px solid ".concat(d.a["dark-marble"]),
                b = "".concat(p.a.LINK_HEIGHT, "px"),
                h = [".link-mobile-component{height:".concat(b, ";border-bottom:").concat(f, ";font-size:1.125rem;color:").concat(d.a["text-gray"], ";display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;-webkit-text-decoration:none;text-decoration:none;}")];
            h.__hash = "3792945056";
            var m = n("WJer"),
                g = n("nKUr");

            function x(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = Object(c.default)(e);
                    if (t) {
                        var i = Object(c.default)(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return Object(o.default)(this, n)
                }
            }
            var v = function(e) {
                Object(a.default)(n, e);
                var t = x(n);

                function n(e) {
                    return Object(r.default)(this, n), t.call(this, e)
                }
                return Object(i.default)(n, [{
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.title,
                            n = e.url,
                            r = e.translate,
                            i = e.onClickFunc;
                        return Object(g.jsxs)("a", {
                            href: n,
                            onClick: i,
                            className: "jsx-".concat(h.__hash) + " link-mobile-component",
                            children: [r(t), Object(g.jsx)(l.a, {
                                id: h.__hash,
                                children: h
                            })]
                        })
                    }
                }]), n
            }(u.PureComponent);
            t.a = Object(m.b)(v)
        },
        NDeG: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n("cpVT"),
                i = n("MX0m"),
                a = n.n(i),
                o = n("Tc2L"),
                c = n("/Vdx"),
                s = n("JtvU"),
                l = n("VgqV"),
                u = n("bmYG"),
                d = [".full-with-bullets-paragraph-component.jsx-2644021826{max-width:".concat("".concat(u.k, "px"), ";margin:auto;}"), ".full-with-bullets-paragraph-component.jsx-2644021826 .full-with-bullets-paragraph-wrapper.jsx-2644021826{margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:0px 32px;}"];
            d.__hash = "2644021826";
            var p = n("nKUr");

            function f(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function b(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? f(Object(n), !0).forEach((function(t) {
                        Object(r.default)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : f(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var h = function(e) {
                var t = e.maxWidth;
                return Object(p.jsxs)("div", {
                    className: "jsx-".concat(d.__hash) + " full-with-bullets-paragraph-component",
                    children: [Object(p.jsx)("div", {
                        style: {
                            maxWidth: t
                        },
                        className: "jsx-".concat(d.__hash) + " full-with-bullets-paragraph-wrapper",
                        children: Object(p.jsx)(o.b, b({}, e))
                    }), Object(p.jsx)(a.a, {
                        id: d.__hash,
                        children: d
                    })]
                })
            };
            h.defaultProps = b(b({}, c.a), {}, {
                bulletsConfig: s.a,
                paddingTop: "64px",
                paddingBottom: "64px",
                titleSize: l.c,
                textSize: l.c,
                maxWidth: "1100px"
            });
            t.default = h
        },
        "No+z": function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "a", (function() {
                return c
            })), n.d(t, "d", (function() {
                return s
            }));
            var r = n("JDgB"),
                i = Object.defineProperty,
                a = (e, t) => i(e, "name", {
                    value: t,
                    configurable: !0
                });

            function o(e, t) {
                return t.forEach((function(t) {
                    t && "string" !== typeof t && !Array.isArray(t) && Object.keys(t).forEach((function(n) {
                        if ("default" !== n && !(n in e)) {
                            var r = Object.getOwnPropertyDescriptor(t, n);
                            Object.defineProperty(e, n, r.get ? r : {
                                enumerable: !0,
                                get: function() {
                                    return t[n]
                                }
                            })
                        }
                    }))
                })), Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }))
            }
            a(o, "_mergeNamespaces");
            var c = {
                exports: {}
            };
            ! function(e) {
                function t(t, n, r) {
                    var i, a = t.getWrapperElement();
                    return (i = a.appendChild(document.createElement("div"))).className = r ? "CodeMirror-dialog CodeMirror-dialog-bottom" : "CodeMirror-dialog CodeMirror-dialog-top", "string" == typeof n ? i.innerHTML = n : i.appendChild(n), e.addClass(a, "dialog-opened"), i
                }

                function n(e, t) {
                    e.state.currentNotificationClose && e.state.currentNotificationClose(), e.state.currentNotificationClose = t
                }
                a(t, "dialogDiv"), a(n, "closeNotification"), e.defineExtension("openDialog", (function(r, i, o) {
                    o || (o = {}), n(this, null);
                    var c = t(this, r, o.bottom),
                        s = !1,
                        l = this;

                    function u(t) {
                        if ("string" == typeof t) p.value = t;
                        else {
                            if (s) return;
                            s = !0, e.rmClass(c.parentNode, "dialog-opened"), c.parentNode.removeChild(c), l.focus(), o.onClose && o.onClose(c)
                        }
                    }
                    a(u, "close");
                    var d, p = c.getElementsByTagName("input")[0];
                    return p ? (p.focus(), o.value && (p.value = o.value, !1 !== o.selectValueOnOpen && p.select()), o.onInput && e.on(p, "input", (function(e) {
                        o.onInput(e, p.value, u)
                    })), o.onKeyUp && e.on(p, "keyup", (function(e) {
                        o.onKeyUp(e, p.value, u)
                    })), e.on(p, "keydown", (function(t) {
                        o && o.onKeyDown && o.onKeyDown(t, p.value, u) || ((27 == t.keyCode || !1 !== o.closeOnEnter && 13 == t.keyCode) && (p.blur(), e.e_stop(t), u()), 13 == t.keyCode && i(p.value, t))
                    })), !1 !== o.closeOnBlur && e.on(c, "focusout", (function(e) {
                        null !== e.relatedTarget && u()
                    }))) : (d = c.getElementsByTagName("button")[0]) && (e.on(d, "click", (function() {
                        u(), l.focus()
                    })), !1 !== o.closeOnBlur && e.on(d, "blur", u), d.focus()), u
                })), e.defineExtension("openConfirm", (function(r, i, o) {
                    n(this, null);
                    var c = t(this, r, o && o.bottom),
                        s = c.getElementsByTagName("button"),
                        l = !1,
                        u = this,
                        d = 1;

                    function p() {
                        l || (l = !0, e.rmClass(c.parentNode, "dialog-opened"), c.parentNode.removeChild(c), u.focus())
                    }
                    a(p, "close"), s[0].focus();
                    for (var f = 0; f < s.length; ++f) {
                        var b = s[f];
                        ! function(t) {
                            e.on(b, "click", (function(n) {
                                e.e_preventDefault(n), p(), t && t(u)
                            }))
                        }(i[f]), e.on(b, "blur", (function() {
                            --d, setTimeout((function() {
                                d <= 0 && p()
                            }), 200)
                        })), e.on(b, "focus", (function() {
                            ++d
                        }))
                    }
                })), e.defineExtension("openNotification", (function(r, i) {
                    n(this, u);
                    var o, c = t(this, r, i && i.bottom),
                        s = !1,
                        l = i && "undefined" !== typeof i.duration ? i.duration : 5e3;

                    function u() {
                        s || (s = !0, clearTimeout(o), e.rmClass(c.parentNode, "dialog-opened"), c.parentNode.removeChild(c))
                    }
                    return a(u, "close"), e.on(c, "click", (function(t) {
                        e.e_preventDefault(t), u()
                    })), l && (o = setTimeout(u, l)), u
                }))
            }(r.a.exports);
            var s = o({
                __proto__: null,
                default: c.exports
            }, [c.exports])
        },
        Nxo1: function(e, t, n) {
            "use strict";
            t.a = {
                MENU_ITEM_TITLE_HEIGHT: 70,
                MENU_ITEM_LINK_HEIGHT: 56,
                LINK_HEIGHT: 70,
                LINK_WITH_MENU_PADDING_BOTTOM: 26,
                LINK_ITEM_TRANSITION_DURATION: 300
            }
        },
        "O/JI": function(e, t, n) {
            "use strict";
            t.a = {
                HEADER_MENU_TRANSITION_DURATION: 300,
                SCROLL_PIXEL_THRESHOLD: 100,
                SCROLL_BACK_UP_THRESHOLD: 40,
                SECONDARY_HEADER_SCROLL_FIRST_TRANSITION_DURATION: 50,
                SECONDARY_HEADER_SCROLL_DISSAPEARING_LINKS_DURATION: 250,
                SECONDARY_HEADER_SCROLL_FULL_TRANSITION_DURATION: 500,
                HEADER_MENU_COMPONENT_WRAPPER_CLASS_NAME: "header-menu-component-wrapper",
                HEADER_DESKTOP_SEGMENT_NAME: "BaseHeaderDesktopComponent"
            }
        },
        OwUf: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return $
            }));
            var r = n("cpVT"),
                i = n("H+61"),
                a = n("UlJF"),
                o = n("7LId"),
                c = n("VIvw"),
                s = n("iHvq"),
                l = n("MX0m"),
                u = n.n(l),
                d = n("q1tI"),
                p = [".vertical-tabs.jsx-2250338181 .desktop-wrapper.jsx-2250338181{display:block;}", ".vertical-tabs.jsx-2250338181 .mobile-wrapper.jsx-2250338181{display:none;}", "@media (max-width:991px){.vertical-tabs.jsx-2250338181 .desktop-wrapper.jsx-2250338181{display:none;}.vertical-tabs.jsx-2250338181 .mobile-wrapper.jsx-2250338181{display:block;}}"];
            p.__hash = "2250338181";
            var f = n("Q3Z/"),
                b = n("bZyZ"),
                h = n("jEg/"),
                m = n("VgqV"),
                g = n("A440"),
                x = n("+Css"),
                v = n("xwfA"),
                j = [".vertical-tabs{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}", ".vertical-tabs .tabs{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding-top:64px;width:200px;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;}", ".vertical-tabs .tabs .tabs-wrapper{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;position:relative;width:100%;}", ".vertical-tabs .tabs .tabs-wrapper .selected-tab-indicator-component{position:absolute;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;right:-16px;-webkit-transition:-webkit-transform 300ms ease;-webkit-transition:transform 300ms ease;transition:transform 300ms ease;z-index:1;}", ".vertical-tabs .tabs .tabs-wrapper .selected-tab-indicator-component .selected-tab-indicator{height:32px;width:32px;border-radius:50%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}", ".vertical-tabs .tabs .tabs-wrapper .selected-tab-indicator-component .selected-tab-indicator g{stroke:".concat(v.a.white, ";}"), ".vertical-tabs .content{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;padding:64px 0px;border-radius:4px;padding-bottom:0;}"];
            j.__hash = "3001823142";
            var O = 40,
                y = n("nKUr");

            function w(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = Object(s.default)(e);
                    if (t) {
                        var i = Object(s.default)(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return Object(c.default)(this, n)
                }
            }

            function k(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function _(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? k(Object(n), !0).forEach((function(t) {
                        Object(r.default)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : k(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var P = function(e) {
                    return Object(y.jsxs)("svg", _(_({
                        width: "14",
                        height: "15",
                        viewBox: "0 0 14 15",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, e), {}, {
                        children: [Object(y.jsx)("title", {
                            children: "Group 7"
                        }), Object(y.jsxs)("g", {
                            stroke: "#000",
                            strokeWidth: "2",
                            fill: "none",
                            fillRule: "evenodd",
                            children: [Object(y.jsx)("path", {
                                d: "M6.657 1.75l5.657 5.657-5.657 5.657"
                            }), Object(y.jsx)("path", {
                                d: "M11 7.407H1",
                                strokeLinecap: "square"
                            })]
                        })]
                    }))
                },
                I = function(e) {
                    Object(o.default)(n, e);
                    var t = w(n);

                    function n(e) {
                        var r;
                        return Object(i.default)(this, n), (r = t.call(this, e)).state = {
                            activeTabIndex: e.defaultActiveTabIndex || r.getNextActiveTab()
                        }, r.handleTabClick = r.handleTabClick.bind(Object(x.a)(r)), r
                    }
                    return Object(a.default)(n, [{
                        key: "componentDidMount",
                        value: function() {
                            this.props.autoTransition && this.playAutoTransition()
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this._changeActiveIndexInterval && clearInterval(this._changeActiveIndexInterval)
                        }
                    }, {
                        key: "getNextActiveTab",
                        value: function(e) {
                            for (var t = this.props.children, n = e ? e + 1 : 0, r = n; r < t.length + n; r++) {
                                var i = r % t.length;
                                if (!t[r % t.length].props.isDisabled) return i
                            }
                        }
                    }, {
                        key: "playAutoTransition",
                        value: function() {
                            var e = this,
                                t = this.props.autoTransition;
                            this._changeActiveIndexInterval = setInterval((function() {
                                var t = e.state.activeTabIndex;
                                e.setState({
                                    activeTabIndex: e.getNextActiveTab(t)
                                })
                            }), t)
                        }
                    }, {
                        key: "handleTabClick",
                        value: function(e) {
                            this.props.children[e].props.isDisabled || (this._changeActiveIndexInterval && clearInterval(this._changeActiveIndexInterval), this.setState({
                                activeTabIndex: e
                            }))
                        }
                    }, {
                        key: "contentRenderer",
                        value: function() {
                            var e = this.props.children,
                                t = this.state.activeTabIndex;
                            if (e[t]) return e[t].props.children
                        }
                    }, {
                        key: "tabsRenderer",
                        value: function() {
                            var e = this,
                                t = this.props.children,
                                n = this.state.activeTabIndex;
                            return t.map((function(t, r) {
                                return Object(d.cloneElement)(t, {
                                    onClick: e.handleTabClick,
                                    index: r,
                                    isActive: r === n
                                })
                            }))
                        }
                    }, {
                        key: "renderSelectedTabIndicator",
                        value: function() {
                            var e = this.state.activeTabIndex,
                                t = this.props.color,
                                n = "translateY(".concat(e * O, "px)");
                            return Object(y.jsx)("div", {
                                className: "selected-tab-indicator-component",
                                style: {
                                    transform: n,
                                    height: O
                                },
                                children: Object(y.jsx)("div", {
                                    className: "selected-tab-indicator",
                                    style: {
                                        backgroundColor: v.a[t]
                                    },
                                    children: Object(y.jsx)(P, {})
                                })
                            })
                        }
                    }, {
                        key: "getContentInlineStyle",
                        value: function() {
                            var e = this.props,
                                t = e.minHeight,
                                n = e.fullBackground,
                                r = e.backgroundColor,
                                i = e.paddingAboveTabs;
                            return {
                                minHeight: t,
                                background: !n && v.a[r],
                                paddingTop: i
                            }
                        }
                    }, {
                        key: "getTabsInlineStyle",
                        value: function() {
                            return {
                                paddingTop: this.props.paddingAboveTabs
                            }
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.positionStyles,
                                n = e.addTabIndicator;
                            return Object(y.jsxs)("div", {
                                className: "jsx-".concat(j.__hash) + " vertical-tabs",
                                children: [Object(y.jsx)("div", {
                                    style: this.getTabsInlineStyle(),
                                    className: "jsx-".concat(j.__hash) + " tabs",
                                    children: Object(y.jsxs)("div", {
                                        style: t,
                                        className: "jsx-".concat(j.__hash) + " tabs-wrapper",
                                        children: [this.tabsRenderer(), n && this.renderSelectedTabIndicator()]
                                    })
                                }), Object(y.jsx)("div", {
                                    role: "tab",
                                    style: this.getContentInlineStyle(),
                                    className: "jsx-".concat(j.__hash) + " content",
                                    children: this.contentRenderer()
                                }), Object(y.jsx)(u.a, {
                                    id: j.__hash,
                                    children: j
                                })]
                            })
                        }
                    }]), n
                }(d.PureComponent),
                C = n("bmYG"),
                T = n("TSYQ"),
                N = n.n(T),
                S = n("UK0n"),
                E = n("yAMK"),
                R = "".concat(O, "px"),
                D = n("zaBJ"),
                A = n("icyP"),
                L = n("/Z+I");

            function M(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function H(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? M(Object(n), !0).forEach((function(t) {
                        Object(r.default)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : M(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function B(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = Object(s.default)(e);
                    if (t) {
                        var i = Object(s.default)(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return Object(c.default)(this, n)
                }
            }
            var U = function(e) {
                Object(o.default)(n, e);
                var t = B(n);

                function n(e) {
                    var a;
                    return Object(i.default)(this, n), a = t.call(this, e), Object(r.default)(Object(x.a)(a), "blurTab", (function(e) {
                        var t, n;
                        null === e || void 0 === e || null === (t = e.target) || void 0 === t || null === (n = t.closest(".vertical-tab")) || void 0 === n || n.blur()
                    })), Object(r.default)(Object(x.a)(a), "tabClickedAction", (function() {
                        var e = a.props,
                            t = e.onClick,
                            n = e.index,
                            r = e.label;
                        BigBrain("track", E.TAB_CLICKED, {
                            kind: r,
                            info1: n
                        }), t(n)
                    })), Object(r.default)(Object(x.a)(a), "rednerWithImage", (function() {
                        var e = a.props.tabImage;
                        return Object(y.jsx)("div", {
                            className: "tab-image",
                            children: Object(y.jsx)(D.a, H({}, e))
                        })
                    })), Object(r.default)(Object(x.a)(a), "rednerWithoutImage", (function() {
                        var e = a.props,
                            t = e.label,
                            n = e.isActive,
                            r = e.color,
                            i = e.addTimeline,
                            o = e.lineColor;
                        return Object(y.jsxs)(y.Fragment, {
                            children: [i && Object(y.jsx)("hr", {
                                className: "vertical-tab-timeline",
                                style: {
                                    borderColor: n ? v.a[r] : v.a[o] || v.a[L.WHITE_COLOR_NAME]
                                }
                            }), Object(y.jsx)("span", {
                                className: "tab-label",
                                style: {
                                    color: a.getTabColor()
                                },
                                children: t
                            })]
                        })
                    })), a.onTabClicked = a.onTabClicked.bind(Object(x.a)(a)), a.onKeyDown = Object(S.a)(a.tabClickedAction), a
                }
                return Object(a.default)(n, [{
                    key: "onTabClicked",
                    value: function(e) {
                        this.blurTab(e), this.tabClickedAction()
                    }
                }, {
                    key: "getTabColor",
                    value: function() {
                        var e = this.props,
                            t = e.disabledColor,
                            n = e.color,
                            r = e.isDarkTheme,
                            i = e.isDisabled,
                            a = e.isActive;
                        return i && t ? v.a[t] : a ? v.a[n] : r ? v.a[L.WHITE_COLOR_NAME] : v.a[L.BRAND_BLACK_BACKGROUND_COLOR]
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.tabImage,
                            n = e.isActive,
                            i = e.color,
                            a = e.theme,
                            o = e.tabClassName,
                            c = function(e) {
                                var t = [".vertical-tab.jsx-2706621189{height:".concat(R, ";display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;font-size:0.875rem;}"), ".vertical-tab.active.jsx-2706621189{color:".concat(v.a[e], ";}"), ".vertical-tab.active.with-image.jsx-2706621189{border-left:5px solid;border-color:var(--border-color);}", ".vertical-tab.jsx-2706621189:hover{color:".concat(v.a[e], ";outline:0;}"), ".vertical-tab.jsx-2706621189 .vertical-tab-timeline.jsx-2706621189{margin-right:16px;height:100%;width:1px;border:0;border-right:5px;border-style:solid;-webkit-transition:border-color 0.3s ease-in-out;transition:border-color 0.3s ease-in-out;}", ".vertical-tab.jsx-2706621189:first-child .vertical-tab-timeline.jsx-2706621189{border-radius:5px 5px 0px 0px;}", ".vertical-tab.jsx-2706621189:last-child .vertical-tab-timeline.jsx-2706621189{border-radius:0px 0px 5px 5px;}"];
                                return t.__hash = "2706621189", t
                            }(i),
                            s = a ? A.q[a].background : "none";
                        return Object(y.jsxs)("div", {
                            onClick: this.onTabClicked,
                            role: "tab",
                            "aria-selected": n,
                            tabIndex: 0,
                            onKeyDown: this.onKeyDown,
                            style: {
                                "--border-color": s
                            },
                            className: "jsx-".concat(c.__hash) + " " + (N()("vertical-tab", Object(r.default)({
                                active: n,
                                "with-image": t
                            }, o, o)) || ""),
                            children: [!t && this.rednerWithoutImage(), t && this.rednerWithImage(), Object(y.jsx)(u.a, {
                                id: c.__hash,
                                children: c
                            })]
                        })
                    }
                }]), n
            }(d.PureComponent);

            function F(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function K(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? F(Object(n), !0).forEach((function(t) {
                        Object(r.default)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : F(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function z(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = Object(s.default)(e);
                    if (t) {
                        var i = Object(s.default)(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return Object(c.default)(this, n)
                }
            }
            U.defaultProps = {};
            var V = function(e) {
                    Object(o.default)(n, e);
                    var t = z(n);

                    function n() {
                        return Object(i.default)(this, n), t.apply(this, arguments)
                    }
                    return Object(a.default)(n, [{
                        key: "tabsRenderer",
                        value: function() {
                            var e = this.props,
                                t = e.tabs,
                                n = e.tabsColor,
                                r = e.addTimeline,
                                i = e.isDarkTheme,
                                a = e.lineColor,
                                o = e.tabContentRenderer;
                            return t.map((function(e, t) {
                                var c = e.tabLabel,
                                    s = e.textAndAsset,
                                    l = e.tabClassName,
                                    u = e.isDisabled,
                                    p = e.tabDisabledColor,
                                    f = (s || {}).titleSize;
                                return Object(y.jsx)(U, {
                                    tabClassName: l,
                                    isDisabled: u,
                                    label: c,
                                    disabledColor: p,
                                    color: n,
                                    addTimeline: r,
                                    isDarkTheme: i,
                                    lineColor: a,
                                    children: o ? o(e) : Object(d.createElement)(b.a, K(K({}, s), {}, {
                                        titleSize: f || m.g,
                                        key: t
                                    }))
                                }, c)
                            }))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.title,
                                n = e.titleSize,
                                r = e.tabsColor,
                                i = e.tabsPosition,
                                a = e.tabsTitleRenderer,
                                o = Object(h.a)(i),
                                c = function(e) {
                                    var t = [".vertical-tabs-desktop-component{max-width:".concat(C.k + "px", ";margin:auto;padding-left:32px;}"), ".vertical-tabs-desktop-component .vertical-tabs-title-wrapper{padding:32px 48px;text-align:center;}", ".vertical-tabs-desktop-component .side-by-side-text-and-asset .full-paragraph-component-wrapper{-webkit-align-self:".concat(e ? e.alignItems : "auto", ";-ms-flex-item-align:").concat(e ? e.alignItems : "auto", ";align-self:").concat(e ? e.alignItems : "auto", ";width:40%;}"), ".vertical-tabs-desktop-component .side-by-side-text-and-asset .image-wrapper{width:60%;}"];
                                    return t.__hash = "3860483713", t
                                }(o);
                            return Object(y.jsxs)("div", {
                                className: "jsx-".concat(c.__hash) + " vertical-tabs-desktop-component",
                                children: [a ? a() : Object(y.jsx)("div", {
                                    className: "jsx-".concat(c.__hash) + " vertical-tabs-title-wrapper",
                                    children: Object(y.jsx)(g.a, K(K({}, t), {}, {
                                        titleSize: n
                                    }))
                                }), Object(y.jsx)("div", {
                                    role: "tablist",
                                    className: "jsx-".concat(c.__hash) + " vertical-tabs-wrapper",
                                    children: Object(y.jsx)(I, K(K({}, this.props), {}, {
                                        color: r,
                                        positionStyles: o,
                                        children: this.tabsRenderer()
                                    }))
                                }), Object(y.jsx)(u.a, {
                                    id: c.__hash,
                                    children: c
                                })]
                            })
                        }
                    }]), n
                }(d.PureComponent),
                G = [".vertical-tabs-mobile-component{max-width:".concat(C.k + "px", ";margin:auto;padding:0px 24px;}"), ".vertical-tabs-mobile-component .vertical-tabs-mobile-title-wrapper{padding:0px 16px;margin-bottom:32px;text-align:center;}", ".vertical-tabs-mobile-component .tab-wrapper{margin-bottom:80px;}", ".vertical-tabs-mobile-component .tab-wrapper .tab-label{font-size:1rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}", ".vertical-tabs-mobile-component .tab-wrapper .tab-label .line{height:2px;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}", ".vertical-tabs-mobile-component .tab-wrapper .tab-label .text{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;margin:0px 16px;font-weight:400;}", ".vertical-tabs-mobile-component .tab-wrapper .tab-content{margin-top:32px;}", ".vertical-tabs-mobile-component .tab-wrapper .tab-content .paragraph-body{display:none !important;}", ".vertical-tabs-mobile-component .tab-wrapper .tab-content .side-by-side-text-and-asset .side-by-side-content{background-color:transparent !important;}"];

            function q(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function W(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? q(Object(n), !0).forEach((function(t) {
                        Object(r.default)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : q(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function J(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = Object(s.default)(e);
                    if (t) {
                        var i = Object(s.default)(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return Object(c.default)(this, n)
                }
            }
            G.__hash = "3021617059";
            var Y = function(e) {
                Object(o.default)(n, e);
                var t = J(n);

                function n() {
                    return Object(i.default)(this, n), t.apply(this, arguments)
                }
                return Object(a.default)(n, [{
                    key: "renderTabs",
                    value: function() {
                        var e = this.props,
                            t = e.tabs,
                            n = e.tabsColor;
                        return t.map((function(e, t) {
                            var i = e.tabLabel,
                                a = e.textAndAsset,
                                o = e.tabClassName,
                                c = e.tabDisabledColor,
                                s = e.isDisabled && c ? v.a[c] : v.a[n];
                            return Object(y.jsxs)("div", {
                                className: N()("tab-wrapper", Object(r.default)({}, o, o)),
                                children: [Object(y.jsxs)("div", {
                                    className: "tab-label",
                                    children: [Object(y.jsx)("span", {
                                        className: "line",
                                        style: {
                                            backgroundColor: s
                                        }
                                    }), Object(y.jsx)("span", {
                                        className: "text",
                                        style: {
                                            color: s
                                        },
                                        children: i
                                    }), Object(y.jsx)("span", {
                                        className: "line",
                                        style: {
                                            backgroundColor: s
                                        }
                                    })]
                                }), Object(y.jsx)("div", {
                                    className: "tab-content",
                                    children: Object(y.jsx)(b.a, W(W({}, a), {}, {
                                        titleSize: m.g
                                    }))
                                })]
                            }, t)
                        }))
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.title,
                            n = e.titleSize;
                        return Object(y.jsxs)("div", {
                            className: "jsx-".concat(G.__hash) + " vertical-tabs-mobile-component",
                            children: [Object(y.jsx)("div", {
                                className: "jsx-".concat(G.__hash) + " vertical-tabs-mobile-title-wrapper",
                                children: Object(y.jsx)(g.a, W(W({}, t), {}, {
                                    titleSize: n
                                }))
                            }), this.renderTabs(), Object(y.jsx)(u.a, {
                                id: G.__hash,
                                children: G
                            })]
                        })
                    }
                }]), n
            }(d.PureComponent);

            function X(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Z(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? X(Object(n), !0).forEach((function(t) {
                        Object(r.default)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : X(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function Q(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = Object(s.default)(e);
                    if (t) {
                        var i = Object(s.default)(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return Object(c.default)(this, n)
                }
            }
            var $ = function(e) {
                Object(o.default)(n, e);
                var t = Q(n);

                function n() {
                    return Object(i.default)(this, n), t.apply(this, arguments)
                }
                return Object(a.default)(n, [{
                    key: "render",
                    value: function() {
                        return Object(y.jsxs)("div", {
                            className: "jsx-".concat(p.__hash) + " vertical-tabs",
                            children: [Object(y.jsx)("div", {
                                className: "jsx-".concat(p.__hash) + " desktop-wrapper",
                                children: Object(y.jsx)(V, Z({}, this.props))
                            }), Object(y.jsx)("div", {
                                className: "jsx-".concat(p.__hash) + " mobile-wrapper",
                                children: Object(y.jsx)(Y, Z({}, this.props))
                            }), Object(y.jsx)(u.a, {
                                id: p.__hash,
                                children: p
                            })]
                        })
                    }
                }]), n
            }(d.PureComponent);
            $.defaultProps = f.a
        },
        Pni5: function(e, t, n) {
            "use strict";
            var r = n("H+61"),
                i = n("UlJF"),
                a = n("+Css"),
                o = n("7LId"),
                c = n("VIvw"),
                s = n("iHvq"),
                l = n("cpVT"),
                u = n("MX0m"),
                d = n.n(u),
                p = n("q1tI"),
                f = n("xwfA"),
                b = n("/Z+I"),
                h = [".link-item-component{font-size:0.875rem;cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:8px 10px;-webkit-text-decoration:none;text-decoration:none;color:".concat(f.a["text-gray"], ";-webkit-transition:color 200ms ease;transition:color 200ms ease;border-radius:8px;}"), ".link-item-component:hover{color:".concat(f.a[b.DARK_WORK_OS_IRIS_COLOR_NAME], ";background-color:").concat(f.a[b.BACKGROUND_GRAY_COLOR_NAME], ";}")];
            h.__hash = "2138693134";
            var m = n("WJer"),
                g = n("yAMK"),
                x = n("87MR"),
                v = n("nKUr");

            function j(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = Object(s.default)(e);
                    if (t) {
                        var i = Object(s.default)(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return Object(c.default)(this, n)
                }
            }
            var O = function(e) {
                Object(o.default)(n, e);
                var t = j(n);

                function n() {
                    var e;
                    Object(r.default)(this, n);
                    for (var i = arguments.length, o = new Array(i), c = 0; c < i; c++) o[c] = arguments[c];
                    return e = t.call.apply(t, [this].concat(o)), Object(l.default)(Object(a.a)(e), "onClick", (function(t) {
                        var n = e.props,
                            r = n.url,
                            i = n.title,
                            a = n.clickEvent,
                            o = 0 === (null === t || void 0 === t ? void 0 : t.screenX) && 0 === (null === t || void 0 === t ? void 0 : t.screenY);
                        Object(x.trackEvent)(g.HEADER_LINK_CLICKED, {
                            kind: r,
                            info1: o ? "keyboard" : "mouse",
                            info2: i
                        }), a && a()
                    })), e
                }
                return Object(i.default)(n, [{
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.title,
                            n = e.url,
                            r = e.translate,
                            i = n ? "link" : "button";
                        return Object(v.jsxs)("a", {
                            href: n,
                            role: i,
                            onClick: this.onClick,
                            tabIndex: "0",
                            onKeyPress: this.onClick,
                            className: "jsx-".concat(h.__hash) + " link-item-component",
                            children: [r(t), Object(v.jsx)(d.a, {
                                id: h.__hash,
                                children: h
                            })]
                        })
                    }
                }]), n
            }(p.PureComponent);
            t.a = Object(m.b)(O)
        },
        "Q3Z/": function(e, t, n) {
            "use strict";
            var r, i = n("cpVT"),
                a = n("fBav"),
                o = n("q1nZ"),
                c = n("VgqV");
            t.a = (r = {
                children: [],
                defaultActiveTabIndex: 0,
                autoTransition: "10000",
                theme: "gradiant-gray",
                title: a.a,
                tabsColor: "iris",
                tabs: [{
                    tabLabel: "Tab 1",
                    textAndAsset: o.a
                }, {
                    tabLabel: "Tab 2",
                    textAndAsset: o.a
                }, {
                    tabLabel: "Tab 3",
                    textAndAsset: o.a
                }, {
                    tabLabel: "Tab 4",
                    textAndAsset: o.a
                }, {
                    tabLabel: "Tab 5",
                    textAndAsset: o.a
                }, {
                    tabLabel: "Tab 6",
                    textAndAsset: o.a
                }],
                paddingTop: "64px",
                paddingBottom: "64px",
                titleSize: c.c
            }, Object(i.default)(r, "autoTransition", null), Object(i.default)(r, "backgroundColor", "white"), Object(i.default)(r, "minHeight", "600px"), Object(i.default)(r, "addTimeline", !1), Object(i.default)(r, "addTabIndicator", !0), Object(i.default)(r, "fullBackground", !1), r)
        },
        dvHp: function(e, t, n) {
            "use strict";
            var r = n("cpVT"),
                i = n("MX0m"),
                a = n.n(i),
                o = n("zaBJ"),
                c = n("M173"),
                s = n("/Z+I"),
                l = n("xPEm"),
                u = n("q1tI"),
                d = n("Pr/7"),
                p = n("1BgC"),
                f = n("8loo"),
                b = n("EPOh"),
                h = n("GOf+"),
                m = n("K7IA"),
                g = n("VgqV"),
                x = [".product-sign-up.jsx-3745987394{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;height:50px;}", ".product-sign-up.jsx-3745987394 .product-logo-image.jsx-3745987394{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".product-sign-up.jsx-3745987394 .product-logo-image.jsx-3745987394 .picture-component.jsx-3745987394 img.jsx-3745987394{width:160px;}"];
            x.__hash = "3745987394";
            var v, j = n("nKUr"),
                O = (v = {}, Object(r.default)(v, l.a, "https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202023/Multi%20products/Global-zoom/Frame_1261162032.png"), Object(r.default)(v, l.c, "https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202023/Multi%20products/Global-zoom/Frame_1261162033.png"), Object(r.default)(v, l.n, "https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202023/Multi%20products/Global-zoom/Frame_1261162031.png"), v),
                y = function(e) {
                    var t = e.displayImage,
                        n = e.useCtaText,
                        r = e.buttonSize,
                        i = e.ctaText,
                        v = e.productType,
                        y = void 0 === v ? l.n : v,
                        w = e.selectedProductIds,
                        k = void 0 === w ? [] : w,
                        _ = e.signupClusterId,
                        P = e.useCtaIcon,
                        I = e.buttonColor,
                        C = void 0 === I ? s.WHITE_COLOR_NAME : I,
                        T = function(e) {
                            Object(d.e)(p.SKIP_AB_TESTS_HP, !0, {
                                expires: 1
                            }), Object(d.e)(p.MULTIPLE_PRODUCTS_SELECTION, !0, {
                                expires: 1
                            });
                            var t = e || function() {
                                if (1 === k.length) return k[0];
                                if (2 === k.length) {
                                    var e = k.sort();
                                    return "".concat(e[0], "_").concat(e[1])
                                }
                                return null
                            }();
                            if (t) {
                                var n = f.d[t];
                                null === n || void 0 === n || n.forEach((function(e) {
                                    Object(d.e)(e.key, e.value, {
                                        expires: 1
                                    })
                                }))
                            } else Object(d.e)(p.INSTALL_PRODUCTS_FLOW, !1, {
                                expires: 1
                            });
                            ! function() {
                                var e = [];
                                k.length < 3 && (k.forEach((function(t) {
                                    var n = f.f[t];
                                    n && e.push({
                                        clusterId: n,
                                        clusterType: b.CLUSTER_TYPE
                                    })
                                })), Object(h.e)(e, m.HP_TAGS_SELECTION))
                            }()
                        },
                        N = Object(u.useMemo)((function() {
                            return y === l.a || y === l.c ? y : null
                        }), [y]);
                    return Object(j.jsxs)("div", {
                        className: "jsx-".concat(x.__hash) + " product-sign-up",
                        children: [t ? Object(j.jsx)("div", {
                            className: "jsx-".concat(x.__hash) + " product-logo-image",
                            children: Object(j.jsx)(o.a, {
                                src: O[y]
                            })
                        }) : null, Object(j.jsx)(c.a, {
                            useCtaIcon: P,
                            productIdToUse: y,
                            signupClusterId: _,
                            useCtaText: n,
                            ctaText: i,
                            buttonSize: r || g.e,
                            buttonColor: C,
                            beforeSubmitCallback: function() {
                                return T(y)
                            },
                            skipUpdateCluster: !0,
                            signupProductId: N,
                            extraData: {
                                selectedProduct: y
                            }
                        }), Object(j.jsx)(a.a, {
                            id: x.__hash,
                            children: x
                        })]
                    })
                };
            t.a = y;
            y.defaultProps = {}
        },
        fBav: function(e, t, n) {
            "use strict";
            var r = n("cpVT"),
                i = n("VgqV"),
                a = n("yZRv");

            function o(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? o(Object(n), !0).forEach((function(t) {
                        Object(r.default)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            t.a = c(c({}, a.a), {}, {
                textAlign: "left",
                titleSize: i.a
            })
        },
        hyNF: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return w
            }));
            var r = n("cpVT"),
                i = n("H+61"),
                a = n("UlJF"),
                o = n("7LId"),
                c = n("VIvw"),
                s = n("iHvq"),
                l = n("MX0m"),
                u = n.n(l),
                d = n("q1tI"),
                p = n("FlbJ"),
                f = [".title-only-paragraph{word-break:break-word;width:100%;}", ".title-only-paragraph .button-wrapper{margin-top:32px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}", ".title-only-paragraph .button-wrapper.left{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}", ".title-only-paragraph .button-wrapper.center{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}", ".title-only-paragraph .button-wrapper.right{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}"];
            f.__hash = "3533281938";
            var b = n("fBav"),
                h = n("TSYQ"),
                m = n.n(h),
                g = n("xwfA"),
                x = n("A440"),
                v = n("nKUr");

            function j(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function O(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? j(Object(n), !0).forEach((function(t) {
                        Object(r.default)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : j(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function y(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = Object(s.default)(e);
                    if (t) {
                        var i = Object(s.default)(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return Object(c.default)(this, n)
                }
            }
            var w = function(e) {
                Object(o.default)(n, e);
                var t = y(n);

                function n() {
                    return Object(i.default)(this, n), t.apply(this, arguments)
                }
                return Object(a.default)(n, [{
                    key: "getComponentInlineStyles",
                    value: function() {
                        var e = this.props,
                            t = e.textAlign,
                            n = e.textColor,
                            r = e.fontSize,
                            i = e.titleSize,
                            a = {
                                textAlign: t,
                                color: g.a[n]
                            };
                        return i || (a.fontSize = r), a
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.title,
                            n = e.buttonConfig,
                            r = e.textAlign,
                            i = e.titleSize,
                            a = e.isFirstSegment,
                            o = e.titleColor,
                            c = this.getComponentInlineStyles();
                        return Object(v.jsxs)("div", {
                            style: c,
                            className: "jsx-".concat(f.__hash) + " title-only-paragraph",
                            children: [Object(v.jsx)(x.a, {
                                title: t,
                                titleSize: i,
                                isFirstSegment: a,
                                titleColor: o
                            }), n && Object(v.jsx)("div", {
                                className: "jsx-".concat(f.__hash) + " " + (m()("button-wrapper", r) || ""),
                                children: Object(v.jsx)(p.a, O({}, n))
                            }), Object(v.jsx)(u.a, {
                                id: f.__hash,
                                children: f
                            })]
                        })
                    }
                }]), n
            }(d.PureComponent);
            w.defaultProps = b.a
        },
        i5mY: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "a", (function() {
                return c
            })), n.d(t, "d", (function() {
                return s
            }));
            var r = n("l8dK"),
                i = Object.defineProperty,
                a = (e, t) => i(e, "name", {
                    value: t,
                    configurable: !0
                });

            function o(e, t) {
                return t.forEach((function(t) {
                    t && "string" !== typeof t && !Array.isArray(t) && Object.keys(t).forEach((function(n) {
                        if ("default" !== n && !(n in e)) {
                            var r = Object.getOwnPropertyDescriptor(t, n);
                            Object.defineProperty(e, n, r.get ? r : {
                                enumerable: !0,
                                get: function() {
                                    return t[n]
                                }
                            })
                        }
                    }))
                })), Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }))
            }
            a(o, "_mergeNamespaces");
            var c = {
                exports: {}
            };
            ! function(e) {
                function t(t, n, r) {
                    var i, a = t.getWrapperElement();
                    return (i = a.appendChild(document.createElement("div"))).className = r ? "CodeMirror-dialog CodeMirror-dialog-bottom" : "CodeMirror-dialog CodeMirror-dialog-top", "string" == typeof n ? i.innerHTML = n : i.appendChild(n), e.addClass(a, "dialog-opened"), i
                }

                function n(e, t) {
                    e.state.currentNotificationClose && e.state.currentNotificationClose(), e.state.currentNotificationClose = t
                }
                a(t, "dialogDiv"), a(n, "closeNotification"), e.defineExtension("openDialog", (function(r, i, o) {
                    o || (o = {}), n(this, null);
                    var c = t(this, r, o.bottom),
                        s = !1,
                        l = this;

                    function u(t) {
                        if ("string" == typeof t) p.value = t;
                        else {
                            if (s) return;
                            s = !0, e.rmClass(c.parentNode, "dialog-opened"), c.parentNode.removeChild(c), l.focus(), o.onClose && o.onClose(c)
                        }
                    }
                    a(u, "close");
                    var d, p = c.getElementsByTagName("input")[0];
                    return p ? (p.focus(), o.value && (p.value = o.value, !1 !== o.selectValueOnOpen && p.select()), o.onInput && e.on(p, "input", (function(e) {
                        o.onInput(e, p.value, u)
                    })), o.onKeyUp && e.on(p, "keyup", (function(e) {
                        o.onKeyUp(e, p.value, u)
                    })), e.on(p, "keydown", (function(t) {
                        o && o.onKeyDown && o.onKeyDown(t, p.value, u) || ((27 == t.keyCode || !1 !== o.closeOnEnter && 13 == t.keyCode) && (p.blur(), e.e_stop(t), u()), 13 == t.keyCode && i(p.value, t))
                    })), !1 !== o.closeOnBlur && e.on(c, "focusout", (function(e) {
                        null !== e.relatedTarget && u()
                    }))) : (d = c.getElementsByTagName("button")[0]) && (e.on(d, "click", (function() {
                        u(), l.focus()
                    })), !1 !== o.closeOnBlur && e.on(d, "blur", u), d.focus()), u
                })), e.defineExtension("openConfirm", (function(r, i, o) {
                    n(this, null);
                    var c = t(this, r, o && o.bottom),
                        s = c.getElementsByTagName("button"),
                        l = !1,
                        u = this,
                        d = 1;

                    function p() {
                        l || (l = !0, e.rmClass(c.parentNode, "dialog-opened"), c.parentNode.removeChild(c), u.focus())
                    }
                    a(p, "close"), s[0].focus();
                    for (var f = 0; f < s.length; ++f) {
                        var b = s[f];
                        ! function(t) {
                            e.on(b, "click", (function(n) {
                                e.e_preventDefault(n), p(), t && t(u)
                            }))
                        }(i[f]), e.on(b, "blur", (function() {
                            --d, setTimeout((function() {
                                d <= 0 && p()
                            }), 200)
                        })), e.on(b, "focus", (function() {
                            ++d
                        }))
                    }
                })), e.defineExtension("openNotification", (function(r, i) {
                    n(this, u);
                    var o, c = t(this, r, i && i.bottom),
                        s = !1,
                        l = i && "undefined" !== typeof i.duration ? i.duration : 5e3;

                    function u() {
                        s || (s = !0, clearTimeout(o), e.rmClass(c.parentNode, "dialog-opened"), c.parentNode.removeChild(c))
                    }
                    return a(u, "close"), e.on(c, "click", (function(t) {
                        e.e_preventDefault(t), u()
                    })), l && (o = setTimeout(u, l)), u
                }))
            }(r.a.exports);
            var s = o({
                __proto__: null,
                default: c.exports
            }, [c.exports])
        },
        "k42/": function(e, t, n) {
            "use strict";
            var r = n("MX0m"),
                i = n.n(r),
                a = n("q1tI"),
                o = n("TSYQ"),
                c = n.n(o),
                s = n("bmYG"),
                l = n("SQRZ"),
                u = n("xwfA"),
                d = n("O/JI"),
                p = n("/Z+I"),
                f = n("zcv4"),
                b = "".concat(f.a.BASIC_HEADER_HEIGHT, "px"),
                h = "".concat(f.a.HEADER_CONTENT_HORIZONTAL_PADDING, "px"),
                m = "opacity ".concat(d.a.SECONDARY_HEADER_SCROLL_FIRST_TRANSITION_DURATION, "ms ease"),
                g = "#ae63e5",
                x = [".basic-header-component{width:100%;height:".concat(b, ";}"), ".basic-header-component .basic-header-content-wrapper{width:100%;height:".concat(b, ";position:fixed;z-index:").concat(l.m + 1, ";background-color:").concat(u.a[p.WHITE_COLOR_NAME], ";display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}"), '.basic-header-component .basic-header-content-wrapper.with-shadow::after{content:"";position:absolute;right:0;bottom:0;width:100%;height:8px;box-shadow:0px 4px 4px rgba(29,140,242,0.08);z-index:'.concat(l.n, ";}"), ".basic-header-component .basic-header-content-wrapper .basic-header-content{max-width:".concat(s.k + "px", ";width:100%;position:fixed;height:").concat(b, ";padding-left:").concat(h, ";padding-right:").concat(h, ";z-index:").concat(l.m, ";background-color:").concat(u.a[p.WHITE_COLOR_NAME], ";-webkit-transition:background-color 200ms ease;transition:background-color 200ms ease;top:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}"), ".basic-header-component .basic-header-content-wrapper .basic-header-content .base-header-monday-logo-image{height:42px;margin-right:16px;}", ".basic-header-component .basic-header-content-wrapper .basic-header-content .main-logo-wrapper,.basic-header-component .basic-header-content-wrapper .basic-header-content .secondary-logo-wrapper{-webkit-transition:".concat(m, ";transition:").concat(m, ";}"), ".basic-header-component .basic-header-content-wrapper .basic-header-content .main-logo-wrapper .logo-popup{height:100%;position:absolute;background:".concat(g, ";border-radius:80px;top:66px;left:20px;height:60px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;box-shadow:-4px 4px 30px;color:").concat(g, ";opacity:1;-webkit-transition:opacity 200ms ease;transition:opacity 200ms ease;z-index:1;}"), ".basic-header-component .basic-header-content-wrapper .basic-header-content .main-logo-wrapper .logo-popup .popup-text{font-size:0.875rem;line-height:120%;color:white;margin-left:24px;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}", ".basic-header-component .basic-header-content-wrapper .basic-header-content .main-logo-wrapper .logo-popup .popup-text .link-text{padding-left:4px;color:white;cursor:pointer;}", ".basic-header-component .basic-header-content-wrapper .basic-header-content .main-logo-wrapper .logo-popup .popup-gif{margin-left:8px;width:53px;height:100%;-webkit-box-flex:0;-webkit-flex-grow:0;-ms-flex-positive:0;flex-grow:0;}", ".basic-header-component .basic-header-content-wrapper .basic-header-content .main-logo-wrapper .logo-popup .popup-gif .popup-gif-image{width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", '.basic-header-component .basic-header-content-wrapper .basic-header-content .main-logo-wrapper .logo-popup::before{content:"";top:-18px;left:35px;position:absolute;border:0px solid;display:block;width:30px;height:26px;background-color:transparent;border-top-left-radius:50%;border-top-right-radius:50%;-webkit-transform:rotate(-50deg);-ms-transform:rotate(-50deg);transform:rotate(-50deg);box-shadow:-12px -5px 0px 0px;color:'.concat(g, ";z-index:-1;}"), ".basic-header-component .basic-header-content-wrapper .basic-header-content .main-logo-wrapper .logo-popup.elevate{background:".concat(u.a["gradiant-elevate"], ";color:").concat("#595AD480", ";}"), ".basic-header-component .basic-header-content-wrapper .basic-header-content .main-logo-wrapper .logo-popup.elevate::before{color:#1f245b;}", ".basic-header-component .basic-header-content-wrapper .basic-header-content .secondary-logo-wrapper{opacity:0;visibility:hidden;pointer-events:none;position:absolute;}", ".basic-header-component.scrolled .basic-header-content-wrapper .basic-header-content .main-logo-wrapper .logo-popup{opacity:0;}", "@media (max-width:".concat(s.j, "){.basic-header-component .basic-header-content-wrapper{max-width:100vw;}.basic-header-component .basic-header-content-wrapper .basic-header-content{max-width:100vw;}}"), ".basic-header-component.dark-mode{background-color:".concat(u.a[p.SPACE_BLUE_VIDEO_ONLY_COLOR_NAME], ";}"), ".basic-header-component.dark-mode .basic-header-content-wrapper .basic-header-content{background-color:".concat(u.a[p.SPACE_BLUE_VIDEO_ONLY_COLOR_NAME], ";}"), ".basic-header-component.dark-mode .basic-header-content-wrapper .basic-header-content .mobile-menu-right-section .mobile-header-content .hamburger-menu .hamburger-menu-line{background-color:".concat(u.a[p.WHITE_COLOR_NAME], ";}"), ".scrolled-threshold .basic-header-component.with-secondary-logo .basic-header-content-wrapper .basic-header-content .main-logo-wrapper{opacity:0;visibility:hidden;pointer-events:none;position:absolute;}", ".scrolled-threshold .basic-header-component.with-secondary-logo .basic-header-content-wrapper .basic-header-content .secondary-logo-wrapper{opacity:1;visibility:visible;position:static;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;pointer-events:auto;}"];
            x.__hash = "2776966822";
            var v = n("Niaz"),
                j = n("rNX+"),
                O = n("aH8o"),
                y = n("zaBJ"),
                w = n("yAMK"),
                k = n("87MR"),
                _ = n("WJer"),
                P = n("nKUr"),
                I = Object(a.forwardRef)((function(e, t) {
                    var n = Object(a.useState)(!1),
                        r = n[0],
                        o = n[1],
                        s = Object(a.useState)(!1),
                        l = s[0],
                        u = s[1],
                        d = e.children,
                        p = e.showMenu,
                        f = e.imageSrc,
                        b = e.imageHref,
                        h = e.imageStyle,
                        m = e.className,
                        g = e.secondaryLogoObject,
                        _ = e.imageAlt,
                        I = e.darkMode,
                        C = e.logoPopup,
                        T = e.translate,
                        N = e.isMenuOpen,
                        S = e.localeId,
                        E = e.trackScroll;
                    Object(a.useEffect)((function() {
                        return window.addEventListener("scroll", R),
                            function() {
                                return window.removeEventListener("scroll", R)
                            }
                    }), []);
                    var R = function() {
                            o(E && window.scrollY > 0)
                        },
                        D = function() {
                            u(!0)
                        },
                        A = function() {
                            u(!1)
                        },
                        L = r || l;
                    return Object(a.useImperativeHandle)(t, (function() {
                        return {
                            forceShadow: D,
                            unforceShadow: A
                        }
                    })), Object(P.jsxs)("div", {
                        className: "jsx-".concat(x.__hash) + " " + (c()("basic-header-component", m, {
                            "with-secondary-logo": !!g,
                            scrolled: r,
                            "dark-mode": I
                        }) || ""),
                        children: [Object(P.jsx)("div", {
                            className: "jsx-".concat(x.__hash) + " " + (c()("basic-header-content-wrapper", {
                                "with-shadow": L
                            }) || ""),
                            children: Object(P.jsxs)("div", {
                                className: "jsx-".concat(x.__hash) + " basic-header-content",
                                children: [Object(P.jsxs)("div", {
                                    className: "jsx-".concat(x.__hash) + " main-logo-wrapper",
                                    children: [Object(P.jsx)(v.a, {
                                        src: f || j.Rb,
                                        className: "base-header-monday-logo-image",
                                        href: b || j.sc,
                                        specificImageStyle: h,
                                        alt: _
                                    }), function() {
                                        var e = function(e) {
                                            return e ? O.a[e] : null
                                        }(C);
                                        if (N || !e) return null;
                                        var t = null === e || void 0 === e ? void 0 : e.getLink(S);
                                        return Object(P.jsxs)("div", {
                                            className: c()("logo-popup", null === e || void 0 === e ? void 0 : e.popupClassName),
                                            children: [Object(P.jsxs)("div", {
                                                className: "popup-text",
                                                children: [Object(P.jsx)("span", {
                                                    className: "text",
                                                    dangerouslySetInnerHTML: {
                                                        __html: T(null === e || void 0 === e ? void 0 : e.textKey)
                                                    }
                                                }), Object(P.jsx)("a", {
                                                    href: t,
                                                    className: "link-text",
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    onClick: function() {
                                                        return function(e) {
                                                            Object(k.trackEvent)(w.POPUP_LINK_CLICKED, {
                                                                kind: e
                                                            })
                                                        }(t)
                                                    },
                                                    children: T(null === e || void 0 === e ? void 0 : e.ctaKey)
                                                })]
                                            }), Object(P.jsx)("div", {
                                                className: "popup-gif",
                                                children: Object(P.jsx)(y.a, {
                                                    src: null === e || void 0 === e ? void 0 : e.gifSrc,
                                                    pictureClass: "popup-gif-image",
                                                    specificImageStyle: {
                                                        height: "42px"
                                                    }
                                                })
                                            })]
                                        })
                                    }()]
                                }), function() {
                                    if (g) return Object(P.jsx)("div", {
                                        className: "secondary-logo-wrapper",
                                        children: Object(P.jsx)(v.a, {
                                            src: g.src,
                                            className: "base-header-monday-logo-image",
                                            href: g.url,
                                            alt: g.alt
                                        })
                                    })
                                }(), p && d]
                            })
                        }), Object(P.jsx)(i.a, {
                            id: x.__hash,
                            children: x
                        })]
                    })
                }));
            I.defaultProps = {
                showMenu: !0,
                imageSrc: j.Rb,
                imageHref: j.sc,
                imageAlt: "monday.com logo",
                secondaryLogoObject: null,
                isMenuOpen: !1,
                trackScroll: !0
            };
            t.a = Object(_.b)(I)
        },
        ksnn: function(e, t, n) {
            "use strict";
            var r = n("cpVT"),
                i = n("MX0m"),
                a = n.n(i),
                o = n("TSYQ"),
                c = n.n(o),
                s = n("0sIy"),
                l = ['.universe-star.jsx-3954818524{--twinkle-duration:"";--twinkle-delay:"";--star-size:"";position:absolute;background-image:url("https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/parallax/integrations/star.svg");background-repeat:no-repeat;background-size:cover;width:var(--star-size);height:var(--star-size);border-radius:50%;-webkit-animation:twinkle-jsx-3954818524 infinite alternate;animation:twinkle-jsx-3954818524 infinite alternate;-webkit-animation-duration:var(--twinkle-duration);animation-duration:var(--twinkle-duration);-webkit-animation-delay:var(--twinkle-delay);animation-delay:var(--twinkle-delay);will-change:transform;}', ".universe-star.circle.jsx-3954818524{background-image:unset;background:#fff;}", "@-webkit-keyframes twinkle-jsx-3954818524{from{-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);}to{-webkit-transform:scale(1.2);-ms-transform:scale(1.2);transform:scale(1.2);}}", "@keyframes twinkle-jsx-3954818524{from{-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);}to{-webkit-transform:scale(1.2);-ms-transform:scale(1.2);transform:scale(1.2);}}"];
            l.__hash = "3954818524";
            var u = n("nKUr"),
                d = function(e) {
                    var t = e.isCircle,
                        n = e.leftRange,
                        r = e.rightRange,
                        i = e.left,
                        o = e.top,
                        d = e.right;
                    return Object(u.jsx)("div", {
                        style: {
                            left: i,
                            top: o,
                            right: d,
                            "--star-size": "".concat(Object(s.b)(n, r), "px"),
                            "--twinkle-duration": "".concat(Math.ceil(Object(s.b)(1, 3)), "s"),
                            "--twinkle-delay": "".concat(Math.ceil(Object(s.b)(1, 8)), "s")
                        },
                        className: "jsx-".concat(l.__hash) + " " + (c()("universe-star", {
                            circle: t
                        }) || ""),
                        children: Object(u.jsx)(a.a, {
                            id: l.__hash,
                            children: l
                        })
                    })
                };

            function p(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }
            var f = function(e) {
                var t = e.stars;
                return Object(u.jsx)(u.Fragment, {
                    children: t.map((function(e, t) {
                        return Object(u.jsx)(d, function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? p(Object(n), !0).forEach((function(t) {
                                    Object(r.default)(e, t, n[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                }))
                            }
                            return e
                        }({
                            leftRange: 3,
                            rightRange: 10
                        }, e), "star-".concat(t))
                    }))
                })
            };
            t.a = f;
            f.defaultProps = {
                stars: []
            }
        },
        nVeN: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return o
            })), n.d(t, "b", (function() {
                return c
            }));
            var r = n("xwfA"),
                i = n("KbBw"),
                a = function(e) {
                    return "0" === e ? 0 : Number(e) || 50
                },
                o = function(e) {
                    var t = e.fill,
                        n = e.gradientFill,
                        i = {
                            fill: r.a[t]
                        };
                    return null !== n && void 0 !== n && n.useLinearGradientFill && (i = {
                        fill: null,
                        fillLinearGradientStartPoint: {
                            x: 0,
                            y: 0
                        },
                        fillLinearGradientEndPoint: {
                            x: a(null === n || void 0 === n ? void 0 : n.x),
                            y: a(null === n || void 0 === n ? void 0 : n.y)
                        },
                        fillLinearGradientColorStops: [0, r.a[t], 1, r.a[null === n || void 0 === n ? void 0 : n.color] || "white"]
                    }), i
                },
                c = function(e) {
                    var t = e.relativeTo,
                        n = e.isPreview;
                    if (t) {
                        console.log("isPreview: ", n);
                        var r = document.getElementById(t);
                        if (r) return Object(i.b)(n && r.offsetParent || r)
                    }
                    return 0
                }
        },
        q6eU: function(e, t, n) {
            "use strict";
            var r = n("vJKn"),
                i = n.n(r),
                a = n("rg98"),
                o = n("z7pX"),
                c = n("H+61"),
                s = n("UlJF"),
                l = n("+Css"),
                u = n("7LId"),
                d = n("VIvw"),
                p = n("iHvq"),
                f = n("cpVT"),
                b = n("MX0m"),
                h = n.n(b),
                m = n("q1tI"),
                g = n("WJer"),
                x = n("c1qA"),
                v = n("Nygj"),
                j = n("TNtu"),
                O = n("Pr/7"),
                y = n("yAMK"),
                w = n("1BgC"),
                k = n("eZOO"),
                _ = n.n(k),
                P = n("Tddi"),
                I = n("UAbO"),
                C = n("ozNw"),
                T = n("x5Ho"),
                N = n("PkAx"),
                S = n("YRc4"),
                E = n("A1E4"),
                R = n("87MR"),
                D = n("RGl1"),
                A = n("uY10"),
                L = n("n/Sm"),
                M = n("ZfCQ"),
                H = n("HbrU"),
                B = [];
            B.__hash = "1885662918";
            var U = n("nKUr");

            function F(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = Object(p.default)(e);
                    if (t) {
                        var i = Object(p.default)(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return Object(d.default)(this, n)
                }
            }
            var K = "INVALID_EMAIL",
                z = "utm_campaign",
                V = "https://www.gartner.com/doc/reprints?id=1-2AKZAKIR&ct=220714&st=sb",
                G = function(e) {
                    Object(u.default)(n, e);
                    var t = F(n);

                    function n() {
                        var e;
                        Object(c.default)(this, n);
                        for (var r = arguments.length, s = new Array(r), u = 0; u < r; u++) s[u] = arguments[u];
                        return e = t.call.apply(t, [this].concat(s)), Object(f.default)(Object(l.a)(e), "generateHiddenData", (function(t) {
                            var n = t.shouldAdd1_19PhoneSupportTestHiddenField,
                                r = e.props,
                                i = r.withPrivacyNotice,
                                a = r.source,
                                c = r.overrideCampaignId,
                                s = r.abTests,
                                l = r.cookies,
                                u = r.cloudfrontViewerCountry,
                                d = Object(A.b)();
                            if (c) {
                                var p = d.filter((function(e) {
                                    return (null === e || void 0 === e ? void 0 : e.name) !== z
                                }));
                                p.push({
                                    name: z,
                                    value: c
                                }), d = p
                            }
                            var f = Object(o.a)(d),
                                b = Object(O.b)(w.BIG_BRAIN_VISITOR_ID) || "";
                            f.push({
                                name: v.o,
                                value: b
                            });
                            var h = Object(M.c)({
                                cookies: l,
                                abTests: s,
                                countryCode: u
                            });
                            f.push({
                                name: v.l,
                                value: h
                            });
                            var m = Object(O.b)(w.CLUSTER_COOKIE) || "";
                            if (f.push({
                                    name: v.b,
                                    value: m
                                }), f.push({
                                    name: v.n,
                                    value: a
                                }), f.push({
                                    name: v.m,
                                    value: i
                                }), n) {
                                var g = Object(S.getAbTestVariantNew)(s, E.CS_1_19_PHONE_SUPPORT_TEST.test_name, !1) || E.CS_1_19_PHONE_SUPPORT_TEST.new_variation_name;
                                f.push({
                                    name: v.a,
                                    value: g
                                })
                            }
                            var x = Object(j.a)(window.location, v.s, v.g);
                            return x.value && f.push(x), f
                        })), Object(f.default)(Object(l.a)(e), "getFirstErrorMessageFromResponse", (function(e) {
                            var t, n, r, i;
                            return (null === e || void 0 === e || null === (t = e.errors) || void 0 === t || null === (n = t[0]) || void 0 === n ? void 0 : n.errorType) === K ? "form.errors.invalidEmailError" : null === e || void 0 === e || null === (r = e.errors) || void 0 === r || null === (i = r[0]) || void 0 === i ? void 0 : i.message
                        })), Object(f.default)(Object(l.a)(e), "isEligibleForCS1_19PhoneSupportTest", (function(e) {
                            var t;
                            return (null === (t = e.find((function(e) {
                                return e.name === v.d
                            }))) || void 0 === t ? void 0 : t.value) === T.a
                        })), Object(f.default)(Object(l.a)(e), "sendFormToHubspot", function() {
                            var t = Object(a.default)(i.a.mark((function t(n) {
                                var r, a, c, s, l, u, d, p, f, b, h, m, g, x, v;
                                return i.a.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, r = e.props, a = r.formId, c = r.portalId, s = r.abTests, l = r.enablePhoneSupportGroupTest, u = r.cookies, d = r.isV12PricingVersion, p = !1, e.isEligibleForCS1_19PhoneSupportTest(n) && (l || Object(S.isInTest)(E.CS_1_19_PHONE_SUPPORT_TEST, s, !0)) && (p = !0), f = e.generateHiddenData({
                                                shouldAdd1_19PhoneSupportTestHiddenField: p
                                            }), b = [].concat(Object(o.a)(n), Object(o.a)(f)), t.next = 8, Object(j.b)(c, a, b);
                                        case 8:
                                            return h = t.sent, m = h && !h.status, g = null, m ? (Object(R.trackEvent)(y.HUBSPOT_FORM_SUBMIT_CLICKED, {
                                                kind: a
                                            }), Object(P.b)(_.a.HUBSPOT_FORM_SUBMITTED, {
                                                formId: a
                                            })) : (v = (null === h || void 0 === h ? void 0 : h.errors) && (null === h || void 0 === h || null === (x = h.errors[0]) || void 0 === x ? void 0 : x.errorType), g = e.getFirstErrorMessageFromResponse(h), Object(R.trackEvent)(y.HUBSPOT_FORM_SUBMIT_FAILED, {
                                                kind: a,
                                                info1: v,
                                                info2: g
                                            })), Object(L.a)(s, u, void 0, d), t.abrupt("return", {
                                                success: m,
                                                errorMessage: g
                                            });
                                        case 16:
                                            return t.prev = 16, t.t0 = t.catch(0), t.next = 20, Object(D.a)({
                                                e: t.t0,
                                                bbEventParams: {
                                                    name: y.CONTACT_SALES_FORM_SUBMISSION_FAILED
                                                }
                                            });
                                        case 20:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, null, [
                                    [0, 16]
                                ])
                            })));
                            return function(e) {
                                return t.apply(this, arguments)
                            }
                        }()), Object(f.default)(Object(l.a)(e), "getSubmitScreenData", (function() {
                            switch (e.props.overrideCampaignId) {
                                case I.b:
                                    return {
                                        titleKey: "forms.thanksPage.ipoCampaign.title",
                                        subTitleHtmlKey: "forms.thanksPage.ipoCampaign.subTitleHtml"
                                    };
                                case I.a:
                                    return {
                                        titleKey: "forms.thanksPage.gartnerCampaign.title",
                                        subTitleHtmlKey: "forms.thanksPage.gartnerCampaign.subTitleHtml2023",
                                        footerHtml: "forms.thanksPage.gartnerCampaign.footerHtml",
                                        downloadButtonLink: V
                                    };
                                default:
                                    return null
                            }
                        })), Object(f.default)(Object(l.a)(e), "onInputBlur", (function(t, n) {
                            var r = e.props.formId;
                            Object(R.trackEvent)(y.HUBSPOT_FORM_INPUT_BLUR, {
                                kind: r,
                                info1: t,
                                info2: n.length
                            })
                        })), e
                    }
                    return Object(s.default)(n, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this.props.formId;
                            Object(R.trackEvent)(y.HUBSPOT_FORM_READY, {
                                kind: e
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.withPrivacyNotice,
                                n = e.formId,
                                r = e.overrideCampaignId,
                                i = e.backgroundLayers,
                                a = e.isMobileOrTabletBrowser,
                                o = e.formTitle,
                                c = e.lastNameFirst,
                                s = e.urlToRedirectAfterSubmission,
                                l = Object(x.i)({
                                    formId: n,
                                    overrideCampaignId: r,
                                    withPrivacyNotice: t,
                                    formTitle: o,
                                    lastNameFirst: c
                                }),
                                u = this.getSubmitScreenData();
                            return Object(U.jsxs)("div", {
                                className: "jsx-".concat(B.__hash) + " hubspot-contact-form-wrapper",
                                children: [Object(U.jsx)(C.a, {
                                    backgroundLayers: a ? 0 : i,
                                    formConfig: l,
                                    submitFormAsyncCallback: this.sendFormToHubspot,
                                    submitScreenData: u,
                                    onInputBlur: this.onInputBlur,
                                    renderPrivacyNotice: t,
                                    urlToRedirectAfterSubmission: s
                                }), Object(U.jsx)(h.a, {
                                    id: B.__hash,
                                    children: B
                                })]
                            })
                        }
                    }]), n
                }(m.PureComponent);
            G.defaultProps = H.a;
            t.a = Object(N.b)(Object(g.b)(G))
        }
    }
]);
//# sourceMappingURL=f8cce8635ec3e3c63ed2debdff7e603114406e6e.2a31c45c850fb8a984d6.js.map