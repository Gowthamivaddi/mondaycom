(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [131], {
        ob4f: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return h
            }));
            var r = n("q1tI");

            function i() {
                return (i = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function o(e, t) {
                return (o = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }
            var a = new Map,
                s = new WeakMap,
                c = 0,
                u = void 0;

            function l(e) {
                return Object.keys(e).sort().filter((function(t) {
                    return void 0 !== e[t]
                })).map((function(t) {
                    return t + "_" + ("root" === t ? (n = e.root) ? (s.has(n) || (c += 1, s.set(n, c.toString())), s.get(n)) : "0" : e[t]);
                    var n
                })).toString()
            }

            function p(e, t, n, r) {
                if (void 0 === n && (n = {}), void 0 === r && (r = u), "undefined" === typeof window.IntersectionObserver && void 0 !== r) {
                    var i = e.getBoundingClientRect();
                    return t(r, {
                            isIntersecting: r,
                            target: e,
                            intersectionRatio: "number" === typeof n.threshold ? n.threshold : 0,
                            time: 0,
                            boundingClientRect: i,
                            intersectionRect: i,
                            rootBounds: i
                        }),
                        function() {}
                }
                var o = function(e) {
                        var t = l(e),
                            n = a.get(t);
                        if (!n) {
                            var r, i = new Map,
                                o = new IntersectionObserver((function(t) {
                                    t.forEach((function(t) {
                                        var n, o = t.isIntersecting && r.some((function(e) {
                                            return t.intersectionRatio >= e
                                        }));
                                        e.trackVisibility && "undefined" === typeof t.isVisible && (t.isVisible = o), null == (n = i.get(t.target)) || n.forEach((function(e) {
                                            e(o, t)
                                        }))
                                    }))
                                }), e);
                            r = o.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), n = {
                                id: t,
                                observer: o,
                                elements: i
                            }, a.set(t, n)
                        }
                        return n
                    }(n),
                    s = o.id,
                    c = o.observer,
                    p = o.elements,
                    f = p.get(e) || [];
                return p.has(e) || p.set(e, f), f.push(t), c.observe(e),
                    function() {
                        f.splice(f.indexOf(t), 1), 0 === f.length && (p.delete(e), c.unobserve(e)), 0 === p.size && (c.disconnect(), a.delete(s))
                    }
            }
            var f = ["children", "as", "triggerOnce", "threshold", "root", "rootMargin", "onChange", "skip", "trackVisibility", "delay", "initialInView", "fallbackInView"];

            function d(e) {
                return "function" !== typeof e.children
            }
            r.Component;

            function h(e) {
                var t, n = void 0 === e ? {} : e,
                    i = n.threshold,
                    o = n.delay,
                    a = n.trackVisibility,
                    s = n.rootMargin,
                    c = n.root,
                    u = n.triggerOnce,
                    l = n.skip,
                    f = n.initialInView,
                    d = n.fallbackInView,
                    h = n.onChange,
                    b = r.useState(null),
                    g = b[0],
                    m = b[1],
                    w = r.useRef(),
                    y = r.useState({
                        inView: !!f,
                        entry: void 0
                    }),
                    v = y[0],
                    O = y[1];
                w.current = h, r.useEffect((function() {
                    var e;
                    if (!l && g) return e = p(g, (function(t, n) {
                            O({
                                inView: t,
                                entry: n
                            }), w.current && w.current(t, n), n.isIntersecting && u && e && (e(), e = void 0)
                        }), {
                            root: c,
                            rootMargin: s,
                            threshold: i,
                            trackVisibility: a,
                            delay: o
                        }, d),
                        function() {
                            e && e()
                        }
                }), [Array.isArray(i) ? i.toString() : i, g, c, s, u, l, a, d, o]);
                var j = null == (t = v.entry) ? void 0 : t.target;
                r.useEffect((function() {
                    g || !j || u || l || O({
                        inView: !!f,
                        entry: void 0
                    })
                }), [g, j, u, l, f]);
                var k = [m, v.inView, v.entry];
                return k.ref = k[0], k.inView = k[1], k.entry = k[2], k
            }
        },
        v22Z: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n("cpVT"),
                i = n("xvhg"),
                o = n("MX0m"),
                a = n.n(o),
                s = n("TSYQ"),
                c = n.n(s),
                u = n("bmYG"),
                l = [".regular-asset-component{width:100%;}", ".regular-asset-component .asset-component-wrapper{max-width:".concat(u.k + "px", ";margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}"), ".regular-asset-component .asset-component-wrapper.left{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}", ".regular-asset-component .asset-component-wrapper.center{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}", ".regular-asset-component .asset-component-wrapper.right{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}", ".regular-asset-component .asset-component-wrapper.full-width{max-width:none;}", ".regular-asset-component .asset-component-wrapper .regular-asset-image-wrapper .regular-asset-image{width:100% !important;height:auto;}", ".regular-asset-component .asset-component-wrapper video{display:block !important;}"];
            l.__hash = "1344462221";
            var p = n("xwfA"),
                f = n("h0RW"),
                d = n("WJer"),
                h = n("D1Kn"),
                b = n("q1tI"),
                g = n("ob4f"),
                m = n("87MR"),
                w = n("yAMK"),
                y = n("QTzx"),
                v = n("nKUr");

            function O(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function j(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? O(Object(n), !0).forEach((function(t) {
                        Object(r.default)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : O(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var k = function(e) {
                var t = e.isMobileOrTabletBrowser,
                    n = e.backgroundColor,
                    r = e.width,
                    o = e.mobileWidth,
                    s = e.position,
                    u = e.asset,
                    d = e.assetQuality,
                    h = e.useDynamicAsset,
                    y = e.hideControls,
                    O = e.dynamicAssetParamPath,
                    k = e.fullWidth,
                    x = e.useWindowMask,
                    _ = e.minHeight,
                    V = e.segmentNumber,
                    P = t && o ? o : r,
                    I = P ? "".concat(P, "%") : "auto",
                    E = Object(g.a)({
                        threshold: 1,
                        triggerOnce: !0
                    }),
                    M = Object(i.a)(E, 2),
                    A = M[0],
                    S = M[1];
                return Object(b.useEffect)((function() {
                    if (u && S) {
                        var e = u.image,
                            t = u.video;
                        Object(m.trackEvent)(w.ASSET_COMPONENT_IS_FULLY_VISIBLE, {
                            kind: (null === e || void 0 === e ? void 0 : e.src) || (null === t || void 0 === t ? void 0 : t.src),
                            info1: V
                        })
                    }
                }), [S]), Object(v.jsxs)("div", {
                    style: {
                        backgroundColor: p.a[n],
                        minHeight: _
                    },
                    ref: A,
                    className: "jsx-".concat(l.__hash) + " regular-asset-component",
                    children: [Object(v.jsx)("div", {
                        className: "jsx-".concat(l.__hash) + " " + (c()("asset-component-wrapper", s, {
                            "full-width": k
                        }) || ""),
                        children: Object(v.jsx)(f.a, j(j({}, u), {}, {
                            assetQuality: d,
                            useDynamicAsset: h,
                            hideControls: y,
                            width: I,
                            convertGifToVideo: !0,
                            className: "regular-asset-image-wrapper",
                            imageClassName: "regular-asset-image",
                            dynamicAssetParamPath: O,
                            useWindowMask: x
                        }))
                    }), Object(v.jsx)(a.a, {
                        id: l.__hash,
                        children: l
                    })]
                })
            };
            k.defaultProps = {
                width: 100,
                position: "center",
                asset: {
                    image: {
                        src: "https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/segment-layout-default-images/asset/timeline-view.png"
                    }
                },
                assetQuality: h.AUTO,
                fullWidth: !1
            };
            t.default = Object(y.b)(Object(d.b)(k))
        }
    }
]);
//# sourceMappingURL=131.3aa2ebce54969988f22b.js.map