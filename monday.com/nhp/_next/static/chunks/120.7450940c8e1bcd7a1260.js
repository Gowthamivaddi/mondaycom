(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [120], {
        "5kYX": function(e, t, r) {
            "use strict";
            r.r(t);
            var c = r("cpVT"),
                s = r("MX0m"),
                n = r.n(s),
                a = r("CwWs"),
                o = r("1sAk"),
                i = r("1m3A"),
                l = r("sK+7"),
                j = [];
            j.__hash = "2773652461";
            var b = r("nKUr");

            function O(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var c = Object.getOwnPropertySymbols(e);
                    t && (c = c.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, c)
                }
                return r
            }

            function p(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? O(Object(r), !0).forEach((function(t) {
                        Object(c.default)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : O(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var u = function(e) {
                var t, r = (t = {}, Object(c.default)(t, i.a, a.a), Object(c.default)(t, i.b, o.a), t)[e.footer_type] || o.a;
                return Object(b.jsxs)("div", {
                    className: "jsx-".concat(j.__hash) + " base-footer-component",
                    children: [Object(b.jsx)(r, p(p({}, e), {}, {
                        className: "jsx-".concat(j.__hash) + " " + (e && null != e.className && e.className || "")
                    })), Object(b.jsx)(n.a, {
                        id: j.__hash,
                        children: j
                    })]
                })
            };
            u.defaultProps = l.a;
            t.default = u
        },
        CwWs: function(e, t, r) {
            "use strict";
            var c = r("cpVT"),
                s = r("MX0m"),
                n = r.n(s),
                a = r("WJer"),
                o = r("PkAx"),
                i = r("FGYX"),
                l = r("fR1J"),
                j = r("6uXm"),
                b = r("NGjm"),
                O = r("rNX+"),
                p = r("Lge8"),
                u = r("jvQQ"),
                d = r("nKUr");

            function f(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var c = Object.getOwnPropertySymbols(e);
                    t && (c = c.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, c)
                }
                return r
            }
            var y = function(e) {
                var t = e.translate,
                    r = e.localeId,
                    s = e.abTests,
                    a = e.pageClusterConfig,
                    o = e.useProductMiniSiteConfig;
                return Object(d.jsxs)(d.Fragment, {
                    children: [Object(d.jsx)("div", {
                        className: "jsx-".concat(b.a.__hash) + " footer-desktop-wrapper",
                        children: function() {
                            var e = Object(u.a)(r, s, !0);
                            a && Object(i.k)(a, e, {
                                useProductMiniSiteConfig: o
                            });
                            var c = e.MondayFooterLinks,
                                n = e.OurTeamFooterLinksV2,
                                l = e.MoreByMondayFooterLinks,
                                b = e.UseCasesFooterLinksV2,
                                f = e.ResourcesFooterLinks,
                                y = e.ProductsFooterLinks,
                                h = e.FeaturesFooterLinks;
                            return Object(d.jsxs)("footer", {
                                className: "footer-container",
                                children: [Object(d.jsx)("div", {
                                    className: "footer-content-container",
                                    children: Object(d.jsx)("nav", {
                                        className: "footer-content",
                                        "aria-label": "Footer",
                                        children: Object(d.jsxs)("div", {
                                            className: "categories-container",
                                            children: [c && Object(d.jsx)("div", {
                                                className: "category-container",
                                                children: Object(d.jsx)(j.a, {
                                                    title: t(c.title),
                                                    links: c.links,
                                                    hasMondayLogoTitle: c.hasMondayLogoTitle
                                                })
                                            }), h && Object(d.jsx)("div", {
                                                className: "category-container features",
                                                children: Object(d.jsx)(j.a, {
                                                    title: t(h.title),
                                                    links: h.links
                                                })
                                            }), y && Object(d.jsx)("div", {
                                                className: "category-container products",
                                                children: Object(d.jsxs)("div", {
                                                    className: "categories-colmmn-wrapper",
                                                    children: [Object(d.jsx)(j.a, {
                                                        type: y.type,
                                                        title: t(y.title),
                                                        links: y.links
                                                    }), Object(d.jsx)(j.a, {
                                                        type: l.type,
                                                        title: t(l.title),
                                                        links: l.links
                                                    })]
                                                })
                                            }), b && Object(d.jsx)("div", {
                                                className: "category-container",
                                                children: Object(d.jsx)(j.a, {
                                                    title: t(b.title),
                                                    links: b.links
                                                })
                                            }), n && Object(d.jsx)("div", {
                                                className: "category-container",
                                                children: Object(d.jsx)(j.a, {
                                                    type: n.type,
                                                    title: t(n.title),
                                                    links: n.links
                                                })
                                            }), f && Object(d.jsx)("div", {
                                                className: "category-container",
                                                children: Object(d.jsx)(j.a, {
                                                    type: f.type,
                                                    title: t(f.title),
                                                    links: f.links
                                                })
                                            })]
                                        })
                                    })
                                }), Object(d.jsx)(p.a, {
                                    SocialFooterLinks: O.Cc
                                })]
                            })
                        }()
                    }), Object(d.jsx)("div", {
                        className: "jsx-".concat(b.a.__hash) + " footer-mobile-wrapper",
                        children: Object(d.jsx)(l.a, function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? f(Object(r), !0).forEach((function(t) {
                                    Object(c.default)(e, t, r[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : f(Object(r)).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                                }))
                            }
                            return e
                        }({}, e))
                    }), Object(d.jsx)(n.a, {
                        id: b.a.__hash,
                        children: b.a
                    })]
                })
            };
            t.a = Object(o.b)(Object(a.b)(y));
            y.defaultProps = {}
        },
        "sK+7": function(e, t, r) {
            "use strict";
            var c = r("1m3A");
            t.a = {
                footer_type: c.b
            }
        }
    }
]);
//# sourceMappingURL=120.7450940c8e1bcd7a1260.js.map