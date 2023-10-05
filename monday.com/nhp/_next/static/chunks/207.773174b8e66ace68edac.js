(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [207], {
        WRnB: function(e, t, n) {
            "use strict";
            n.r(t);
            var o = n("cpVT"),
                a = n("MX0m"),
                r = n.n(a),
                i = n("q1tI"),
                l = n("Tc2L"),
                s = n("9OpD"),
                p = n("0sIy"),
                c = n("ksnn"),
                f = n("TSYQ"),
                u = n.n(f),
                d = n("icyP"),
                b = n("bL3u"),
                m = n("z8IR"),
                g = n("EXqj"),
                h = n("/Z+I"),
                v = n("rNX+"),
                j = n("UmnM"),
                O = n("PkAx"),
                x = n("RdyY"),
                w = n("A440"),
                y = n("VgqV"),
                k = n("vI/o"),
                T = 270,
                I = 630,
                _ = 735,
                N = {
                    fullParagraph: {
                        title: "A platform built for a new way of working",
                        body: "What would you like to manage with monday.com Work OS?"
                    },
                    subTitle: {},
                    subTitleAdvancedConfig: {
                        titleSize: y.g
                    },
                    clusters: k.b,
                    lines: [{
                        start: {
                            top: "".concat(T),
                            left: "".concat(I)
                        },
                        end: {
                            top: "".concat(T),
                            left: "".concat(_)
                        }
                    }],
                    buttonConfig: {
                        buttonColor: h.GRADIANT_WORKOS_IRIS_COLOR_NAME
                    },
                    fullParagraphAdvancedConfig: {
                        titleSize: y.f,
                        textSize: y.a,
                        titleWidth: "800px",
                        spaceFromParagraph: "32px",
                        buttonTopMargin: "196px"
                    },
                    paddingTop: "64px"
                },
                P = n("bmYG"),
                C = [".monday-universe-homepage-first-fold-component{max-width:".concat("".concat(P.k, "px"), ";margin:auto;height:600px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;position:relative;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}"), ".monday-universe-homepage-first-fold-component .stars-canvas{position:absolute;height:100%;width:".concat("".concat(P.k, "px"), ";}"), ".monday-universe-homepage-first-fold-component .stars-canvas .comet-line{position:absolute;height:1px;background:linear-gradient(90deg,transparent,#fff,transparent);}", ".monday-universe-homepage-first-fold-component .stars-canvas .comet-line.underline{background:linear-gradient(90deg,transparent,#fff);}", ".monday-universe-homepage-first-fold-component .paragraph-wrapper .title-wrapper{margin-left:auto;margin-right:auto;}", ".monday-universe-homepage-first-fold-component .paragraph-wrapper .title-wrapper .universe-title{padding-bottom:12px;font-weight:400;}", ".monday-universe-homepage-first-fold-component .paragraph-wrapper .sub-title{text-align:center;margin-top:40px;font-weight:bold;}", ".monday-universe-homepage-first-fold-component.universe-theme .paragraph-wrapper .title-wrapper .universe-title{background:linear-gradient(360deg,#ffffff 53.95%,#0b0b4a 207.37%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;}"];
            C.__hash = "1656210492";
            var A = [{
                    top: 160,
                    left: -129
                }, {
                    top: 227,
                    left: -106
                }, {
                    top: 20,
                    left: -20
                }, {
                    top: 128,
                    left: 220
                }, {
                    top: 73,
                    left: 315
                }, {
                    top: 218,
                    left: 12
                }, {
                    top: 50,
                    left: 510
                }, {
                    top: 35,
                    left: 855
                }, {
                    top: 449,
                    left: 424
                }, {
                    top: 515,
                    left: 387
                }, {
                    top: 495,
                    left: 946
                }, {
                    top: 487,
                    left: 985
                }, {
                    top: 480,
                    left: 976
                }, {
                    top: 24,
                    left: 1036
                }, {
                    top: 59,
                    left: 1138
                }, {
                    top: 86,
                    left: 1087
                }, {
                    top: 380,
                    left: 1378
                }, {
                    top: 202,
                    left: 1522
                }],
                E = n("nKUr");

            function S(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function M(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? S(Object(n), !0).forEach((function(t) {
                        Object(o.default)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : S(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var R = Object(i.memo)((function() {
                    return Object(E.jsx)(c.a, {
                        stars: A
                    })
                })),
                L = Object(O.b)((function(e) {
                    var t = Object(m.b)(),
                        n = e.fullParagraph,
                        o = e.subTitle,
                        a = e.subTitleAdvancedConfig,
                        c = e.fullParagraphAdvancedConfig,
                        f = e.buttonConfig,
                        O = e.clusters,
                        y = e.theme,
                        k = e.abTests,
                        T = e.translate,
                        I = e.tagsWidth,
                        _ = e.pallet,
                        N = e.squareTagsMarginTop,
                        P = e.showBorderInLightTheme,
                        A = Object(i.useMemo)((function() {
                            return x.b[_] || {}
                        }), [_]),
                        S = y === d.l,
                        L = {
                            tagsWidth: I,
                            buttonConfig: f,
                            clusters: O,
                            theme: y,
                            secondaryButtonConfig: Object(i.useMemo)((function() {
                                return Object(g.a)(t) && Object(j.shouldSeeEnrichmentHomepageSalesCtaAbTest)(k, !0)
                            }), [t, k]) ? {
                                buttonText: T("signup.talkToSales"),
                                color: h.WHITE_COLOR_NAME,
                                url: v.E,
                                isOpenLinkInNewTab: !0
                            } : null,
                            marginTop: N,
                            showBorderInLightTheme: P
                        };
                    return Object(E.jsxs)("div", {
                        className: "jsx-".concat(C.__hash) + " " + (u()("monday-universe-homepage-first-fold-component", {
                            "selectable-clusters": !0,
                            "universe-theme": S
                        }) || ""),
                        children: [S && Object(E.jsxs)("div", {
                            className: "jsx-".concat(C.__hash) + " stars-canvas",
                            children: [e.lines.map((function(e, t) {
                                var n, o, a, r, i = {
                                        top: parseInt(null === e || void 0 === e || null === (n = e.start) || void 0 === n ? void 0 : n.top),
                                        left: parseInt(null === e || void 0 === e || null === (o = e.start) || void 0 === o ? void 0 : o.left)
                                    },
                                    l = {
                                        top: parseInt(null === e || void 0 === e || null === (a = e.end) || void 0 === a ? void 0 : a.top),
                                        left: parseInt(null === e || void 0 === e || null === (r = e.end) || void 0 === r ? void 0 : r.left)
                                    };
                                if (!Number.isInteger(i.top) || !Number.isInteger(i.left) || !Number.isInteger(l.top) || !Number.isInteger(l.left)) return null;
                                var s = 180 * Math.atan2(l.top - i.top, l.left - i.left) / Math.PI,
                                    c = Object(p.a)(i.left, i.top, l.left, l.top);
                                return Object(E.jsx)("div", {
                                    className: u()("comet-line", {
                                        underline: !0
                                    }),
                                    style: M({
                                        transform: "rotate(".concat(s, "deg)"),
                                        width: c
                                    }, i)
                                }, "comet-".concat(t))
                            })), Object(E.jsx)(R, {})]
                        }), Object(E.jsxs)("div", {
                            className: "jsx-".concat(C.__hash) + " " + (u()("paragraph-wrapper") || ""),
                            children: [Object(E.jsx)(l.b, M(M(M({}, c), n), {}, {
                                topic: {},
                                textAlign: s.ALIGN_TYPES.CENTER,
                                titleClassName: "universe-title"
                            })), (null === o || void 0 === o ? void 0 : o.title) && Object(E.jsx)(w.a, M(M(M({}, o), a), {}, {
                                titleClassName: "sub-title"
                            }))]
                        }), Object(E.jsx)(b.default, M({
                            palette: A
                        }, L)), Object(E.jsx)(r.a, {
                            id: C.__hash,
                            children: C
                        })]
                    })
                }));
            L.defaultProps = N;
            t.default = L
        }
    }
]);
//# sourceMappingURL=207.773174b8e66ace68edac.js.map