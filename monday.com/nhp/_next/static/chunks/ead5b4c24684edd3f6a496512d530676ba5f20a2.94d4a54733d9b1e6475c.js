(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [13], {
        "2Dpp": function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, "PREFETCH_TYPES", (function() {
                return n
            })), r.d(t, "PLATFORM_MANIFEST_ASSETS_CDN_DOMAIN", (function() {
                return i
            })), r.d(t, "PLATFORM_CDN_URL", (function() {
                return a
            })), r.d(t, "PLATFORM_MANIFEST_ENDPOINT", (function() {
                return s
            })), r.d(t, "MANIFEST_PREFETCHED_ASSET_KEYS", (function() {
                return u
            }));
            var n = {
                    DNS_PREFETCH: "dns-prefetch",
                    PREFETCH: "prefetch",
                    PRECONNECT: "preconnect"
                },
                i = "http://webpack.llama.fan:3444",
                a = "https://cdn.monday.com",
                s = "".concat(a, "/build/manifest.json"),
                u = ["soft_signup.js", "soft_signup.css", "main.js", "main.css", "components.js", "vendors.js", "backbone_init.js", "externals.js"]
        },
        "4qC0": function(e, t, r) {
            var n = r("NykK"),
                i = r("Z0cm"),
                a = r("ExA7");
            e.exports = function(e) {
                return "string" == typeof e || !i(e) && a(e) && "[object String]" == n(e)
            }
        },
        "5HHs": function(e, t, r) {
            "use strict";
            r.d(t, "a", (function() {
                return i
            }));
            var n = r("Xkd2"),
                i = function(e, t) {
                    var r = "".concat(e, "/").concat("production"),
                        i = "".concat(n.FALLBACK_DEFAULT_IMAGE_TRANSFORMATION_PARAM, "_").concat(r.replace(/\//g, ":"), ":").concat("default.png", ",q_100");
                    return "".concat(n.CLOUDINARY_IMAGE_PREFIX, "upload/").concat(i, "/").concat(r, "/").concat(t)
                }
        },
        "6gX7": function(e, t, r) {
            "use strict";
            r.d(t, "d", (function() {
                return n
            })), r.d(t, "c", (function() {
                return i
            })), r.d(t, "b", (function() {
                return a
            })), r.d(t, "e", (function() {
                return s
            })), r.d(t, "g", (function() {
                return u
            })), r.d(t, "f", (function() {
                return c
            })), r.d(t, "a", (function() {
                return o
            }));
            var n = 72,
                i = 107,
                a = 1225,
                s = 128,
                u = 422,
                c = 284,
                o = "10%"
        },
        "8tO+": function(e, t, r) {
            "use strict";

            function n(e) {
                if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
            }
            r.d(t, "a", (function() {
                return n
            }))
        },
        "E+oP": function(e, t, r) {
            var n = r("A90E"),
                i = r("QqLw"),
                a = r("03A+"),
                s = r("Z0cm"),
                u = r("MMmD"),
                c = r("DSRE"),
                o = r("6sVZ"),
                d = r("c6wG"),
                l = Object.prototype.hasOwnProperty;
            e.exports = function(e) {
                if (null == e) return !0;
                if (u(e) && (s(e) || "string" == typeof e || "function" == typeof e.splice || c(e) || d(e) || a(e))) return !e.length;
                var t = i(e);
                if ("[object Map]" == t || "[object Set]" == t) return !e.size;
                if (o(e)) return !n(e).length;
                for (var r in e)
                    if (l.call(e, r)) return !1;
                return !0
            }
        },
        QHCa: function(e, t, r) {
            "use strict";
            r.d(t, "d", (function() {
                return G
            })), r.d(t, "a", (function() {
                return B
            })), r.d(t, "b", (function() {
                return w
            })), r.d(t, "c", (function() {
                return F
            }));
            var n = r("cpVT"),
                i = r("4qC0"),
                a = r.n(i),
                s = r("wig9"),
                u = r.n(s),
                c = r("aIIR"),
                o = r("ua6y"),
                d = (r("Pr/7"), r("YRc4"), r("iNqc")),
                l = r("U6qq"),
                f = {
                    sectionName: "pricingPage.features.sections.insights_essentials",
                    features: [l.MARKETING_DASHBOARDS, l.MARKETING_CALENDAR, l.DAILY_REPORTS]
                },
                p = {
                    sectionName: "pricingPage.features.sections.other_essentials",
                    features: [l.IMPORT_EXPORT_EXCEL, l.UNLIMITED_BOARDS, l.ADVANCED_COLUMN_TYPES, l.MOBILE, l.ACTIVITY_LOG, l.ZOOM_INTEGRATION]
                },
                g = r("q6EP"),
                E = {
                    ESSENTIALS: function(e) {
                        var t = e.abTests,
                            r = e.cookies;
                        return e.hasFreeTier ? Object(g.a)(t, r) : function(e, t) {
                            return {
                                sectionName: "pricingPage.features.sections.essentials",
                                features: [l.UNLIMITED_VIEWERS, l.UNLIMITED_BOARDS, l.UNLIMITED_DOCS, l.COLUMN_TYPES({
                                    cookies: e
                                }), l.MOBILE, l.STORAGE({
                                    cookies: e,
                                    abTests: t
                                }), l.ACTIVITY_LOG]
                            }
                        }(r, t)
                    },
                    REMOTE_WORK_FEATURES_SECTION: d.h,
                    ADVANCED: d.b,
                    SECURITY: d.i,
                    ADVANCED_REPORTING: d.c,
                    SUPPORT: d.l,
                    COMMUNICATION_ESSENTIALS: function(e) {
                        var t = e.cookies,
                            r = e.abTests;
                        return {
                            sectionName: "pricingPage.features.sections.communication_essentials",
                            features: [l.COMMUNICATION_WITH_CONTEXT, l.COLLABORATIVE_WHITEBOARD, l.INTEGRATIONS_WITH_GMAIL_AND_OUTLOOK, l.STORAGE({
                                cookies: t,
                                abTests: r
                            })]
                        }
                    },
                    ADMINISTRATION_AND_CONTROL: d.a,
                    SECURITY_NEW: d.k,
                    SUPPORT_NEW: d.m,
                    COLLABORATION_AND_SHARING_ESSENTIALS: function(e) {
                        var t = e.hasStudentPlan;
                        return {
                            sectionName: "pricingPage.features.sections.collaboration_and_sharing_essentials",
                            features: [l.EMBED_DOCUMENTS_AND_BRIEFS, l.MARKETING_REQUESTS_WITH_FORMS, l.READY_MADE_MARKETING_TEMPLATES, l.DEADLINE_MANAGEMENT, l.SHARE_BOARD_WITH_EXTERNAL_GUESTS, l.UNLIMITED_VIEWERS, l.AUTOMATIONS, l.MARKETING_INTEGRATIONS, l.TIMELINE({
                                hasStudentPlan: t
                            })]
                        }
                    },
                    INSIGHTS_ESSENTIALS: f,
                    MARKETING_OTHER_ESSENTIALS: p,
                    MARKETING_ADVANCED_SECTION: function(e) {
                        var t = e.hasStudentPlan;
                        return {
                            sectionName: "pricingPage.features.sections.advanced",
                            features: [l.KANBAN_VIEW, l.MAP, l.SEARCH, l.FORMS_CUSTOMIZATION({
                                hasStudentPlan: t
                            }), l.TIME_TRACKING, l.CHART_VIEW({
                                hasStudentPlan: t
                            }), l.FORMULA({
                                hasStudentPlan: t
                            }), l.TAGS, l.PRIVATE_BOARDS]
                        }
                    },
                    CUSTOMER_FAVORITES: d.e,
                    COLLABORATION: d.d,
                    PRODUCTIVITY: d.g,
                    VIEWS_AND_REPORTING: d.n,
                    SECURITY_AND_PRIVACY: d.j,
                    ENTERPRISE_REPORTING_AND_ANALYTICS: d.f
                },
                O = r("yAMK"),
                b = r("87MR"),
                _ = r("w2gP");

            function P(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function m(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? P(Object(r), !0).forEach((function(t) {
                        Object(n.default)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : P(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function S(e, t) {
                var r;
                if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (r = function(e, t) {
                            if (!e) return;
                            if ("string" === typeof e) return T(e, t);
                            var r = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === r && e.constructor && (r = e.constructor.name);
                            if ("Map" === r || "Set" === r) return Array.from(e);
                            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return T(e, t)
                        }(e)) || t && e && "number" === typeof e.length) {
                        r && (e = r);
                        var n = 0,
                            i = function() {};
                        return {
                            s: i,
                            n: function() {
                                return n >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[n++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: i
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var a, s = !0,
                    u = !1;
                return {
                    s: function() {
                        r = e[Symbol.iterator]()
                    },
                    n: function() {
                        var e = r.next();
                        return s = e.done, e
                    },
                    e: function(e) {
                        u = !0, a = e
                    },
                    f: function() {
                        try {
                            s || null == r.return || r.return()
                        } finally {
                            if (u) throw a
                        }
                    }
                }
            }

            function T(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            var A = ["name", "description"],
                I = ["sectionName"],
                R = function e(t, r, n) {
                    return r && r[t] ? {
                        value: (i = r[t], !!i && ("true" == i || Object(_.c)(_.a.concat(i))))
                    } : t === c.k.FREE ? e(c.k.BASIC, r, n) : null !== n && void 0 !== n && n.tiers[t] ? n.tiers[t] : {
                        value: !1
                    };
                    var i
                },
                N = function(e, t) {
                    var r = t.abTests,
                        n = t.cookies,
                        i = t.hasStudentPlan,
                        a = t.hasFreeTier;
                    if ("function" === typeof l[e]) return l[e]({
                        abTests: r,
                        cookies: n,
                        hasStudentPlan: i,
                        hasFreeTier: a
                    });
                    var s = l[e];
                    return s ? m({}, s) : null
                },
                v = function(e, t) {
                    var r = t.abTests,
                        n = t.cookies,
                        i = t.hasStudentPlan,
                        s = t.hasFreeTier;
                    if (a()(e)) {
                        var u = N(e, {
                            abTests: r,
                            cookies: n,
                            hasFreeTier: s,
                            hasStudentPlan: i
                        });
                        return u || (Object(b.trackEvent)(O.PRICING_PAGE_MISSING_CLUSTER_INFO_ENCOUNTERED, {
                            kind: "name",
                            placement: "features",
                            data: e
                        }), null)
                    }
                    var c = e.feature,
                        o = e.featureName,
                        d = e.overrides;
                    if (!c && !o && (null === d || void 0 === d || !d.name)) return Object(b.trackEvent)(O.PRICING_PAGE_MISSING_CLUSTER_INFO_ENCOUNTERED, {
                        kind: "object",
                        placement: "features",
                        data: e
                    }), null;
                    var l = N(c, {
                            abTests: r,
                            cookies: n,
                            hasStudentPlan: i,
                            hasFreeTier: s
                        }) || N(o, {
                            abTests: r,
                            cookies: n,
                            hasFreeTier: s,
                            hasStudentPlan: i
                        }) || {},
                        f = Object(_.b)(l, null === e || void 0 === e ? void 0 : e.overrides, A),
                        p = (d || {}).tiers;
                    return f.tiers || (f.tiers = function() {
                            var e = {};
                            return Object(_.e)((function(t) {
                                e[t] = {
                                    value: !1
                                }
                            })), e
                        }()), Object(_.e)((function(e) {
                            f.tiers[e] = R(e, p, f)
                        })),
                        function(e) {
                            var t, r = S(A);
                            try {
                                for (r.s(); !(t = r.n()).done;) {
                                    var n = t.value;
                                    if (!a()(e[n]) || 0 === e[n].length) return !1
                                }
                            } catch (i) {
                                r.e(i)
                            } finally {
                                r.f()
                            }
                            return !(!e.tiers || 0 === Object.keys(e.tiers).length)
                        }(f) ? f : null
                },
                j = function(e, t) {
                    var r, n = t.abTests,
                        i = t.cookies,
                        a = t.hasStudentPlan,
                        s = t.hasFreeTier;
                    return (r = "function" === typeof E[e] ? E[e]({
                        abTests: n,
                        cookies: i,
                        hasStudentPlan: a,
                        hasFreeTier: s
                    }) : E[e]) ? m({}, r) : null
                },
                D = function(e, t) {
                    var r = t.abTests,
                        n = t.cookies,
                        i = t.hasStudentPlan,
                        s = t.hasFreeTier;
                    if (a()(e)) {
                        var c = j(e, {
                            abTests: r,
                            cookies: n,
                            hasFreeTier: s,
                            hasStudentPlan: i
                        });
                        return c || (Object(b.trackEvent)(O.PRICING_PAGE_MISSING_CLUSTER_INFO_ENCOUNTERED, {
                            kind: "name",
                            placement: "sections",
                            data: e
                        }), null)
                    }
                    var o = e.section,
                        d = e.sectionName,
                        l = e.overrides;
                    if (!o && !d && (null === l || void 0 === l || !l.sectionName)) return Object(b.trackEvent)(O.PRICING_PAGE_MISSING_CLUSTER_INFO_ENCOUNTERED, {
                        placement: "sections",
                        kind: "object",
                        data: e
                    }), null;
                    var f = j(o, {
                            abTests: r,
                            cookies: n,
                            hasStudentPlan: i,
                            hasFreeTier: s
                        }) || j(d, {
                            abTests: r,
                            cookies: n,
                            hasStudentPlan: i,
                            hasFreeTier: s
                        }) || {},
                        p = Object(_.b)(f, l, I);
                    return p.features || (p.features = []), null !== l && void 0 !== l && l.features && (p.features = u()(l.features.map((function(e) {
                            return v(e, {
                                abTests: r,
                                cookies: n,
                                hasStudentPlan: i,
                                hasFreeTier: s
                            })
                        })))),
                        function(e) {
                            var t, r = S(I);
                            try {
                                for (r.s(); !(t = r.n()).done;) {
                                    var n = t.value;
                                    if (!a()(e[n]) || 0 === e[n].length) return !1
                                }
                            } catch (i) {
                                r.e(i)
                            } finally {
                                r.f()
                            }
                            return !(!e.features || 0 === e.features.length)
                        }(p) ? p : null
                },
                k = r("pT56"),
                y = r("hTNa");

            function M(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function h(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? M(Object(r), !0).forEach((function(t) {
                        Object(n.default)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : M(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var C = function(e) {
                    return a()(null === e || void 0 === e ? void 0 : e.name) && a()(null === e || void 0 === e ? void 0 : e.text) && e.name.length > 0 && e.text.length > 0
                },
                x = function(e) {
                    return C(y[e]) ? h({}, y[e]) : null
                },
                L = function(e) {
                    if (a()(e)) {
                        var t = x(e);
                        return t || Object(b.trackEvent)(O.PRICING_PAGE_MISSING_CLUSTER_INFO_ENCOUNTERED, {
                            placement: "value_features",
                            kind: "name",
                            data: e
                        }), t
                    }
                    if (Object(_.d)(e)) {
                        var r = e.feature,
                            n = e.name,
                            i = e.overrides,
                            s = x(r) || x(n) || {},
                            u = Object(_.b)(s, i, ["name", "text", "link"]);
                        return C(u) ? u : (Object(b.trackEvent)(O.PRICING_PAGE_MISSING_CLUSTER_INFO_ENCOUNTERED, {
                            placement: "value_features",
                            kind: "object",
                            data: e
                        }), null)
                    }
                    return Object(b.trackEvent)(O.PRICING_PAGE_MISSING_CLUSTER_INFO_ENCOUNTERED, {
                        placement: "value_features",
                        kind: "invalid_type",
                        data: e
                    }), null
                };

            function U(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }
            var G = function(e, t) {
                    t.abTests, t.cookies, t.forcePricing;
                    return !0
                },
                B = function(e, t) {
                    var r = t.abTests,
                        n = void 0 === r ? {} : r,
                        i = t.cookies,
                        a = void 0 === i ? {} : i,
                        s = t.hasStudentPlan,
                        c = void 0 !== s && s,
                        o = t.hasFreeTier,
                        d = void 0 !== o && o;
                    if (Object(_.d)(e) && Array.isArray(e.sections)) {
                        var l = e.sections;
                        return u()(l.map((function(e) {
                            return function(e, t) {
                                var r = t.abTests,
                                    n = t.cookies,
                                    i = t.hasStudentPlan,
                                    a = t.hasFreeTier;
                                return D(e, {
                                    abTests: r,
                                    cookies: n,
                                    hasStudentPlan: i,
                                    hasFreeTier: a
                                })
                            }(e, {
                                abTests: n,
                                cookies: a,
                                hasStudentPlan: c,
                                hasFreeTier: d
                            })
                        })))
                    }
                },
                w = function(e, t, r) {
                    var i = r.hasStudentPlan;
                    r.cookies, r.abTests, r.forcePricing;
                    if (Object(_.d)(e) && Object(_.d)(e.tier_descriptions)) {
                        var s = e.tier_descriptions,
                            u = function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = null != arguments[t] ? arguments[t] : {};
                                    t % 2 ? U(Object(r), !0).forEach((function(t) {
                                        Object(n.default)(e, t, r[t])
                                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : U(Object(r)).forEach((function(t) {
                                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                                    }))
                                }
                                return e
                            }({}, Object(o.a)({
                                hasStudentPlan: i
                            }));
                        return Object(_.d)(s) && Object(_.e)((function(e) {
                            e !== c.k.FREE && a()(s[e]) && (u[e] = s[e])
                        })), u
                    }
                },
                F = function(e, t) {
                    var r = t.hasStudentPlan,
                        n = t.hasFreeTier,
                        i = t.abTests,
                        a = t.cookies;
                    if (e && Object(_.d)(e)) return function(e, t) {
                        var r = t.hasStudentPlan,
                            n = t.hasFreeTier,
                            i = t.abTests,
                            a = t.cookies,
                            s = t.forcePricing,
                            o = h({}, Object(k.a)({
                                hasStudentPlan: r,
                                hasFreeTier: n,
                                abTests: i,
                                cookies: a,
                                forcePricing: s
                            }));
                        return Object(_.e)((function(t) {
                            if (t !== c.k.FREE) {
                                var r = e[t];
                                Array.isArray(r) && r.length > 0 && (o[t] = u()(r.map(L)))
                            }
                        })), o
                    }(e, {
                        hasStudentPlan: r,
                        hasFreeTier: n,
                        abTests: i,
                        cookies: a
                    })
                }
        },
        SxRa: function(e, t, r) {
            "use strict";
            r.d(t, "a", (function() {
                return l
            }));
            var n, i, a, s, u, c = r("cpVT"),
                o = r("h12S"),
                d = {
                    usd: 0,
                    euro: 0,
                    gbp: 0,
                    cad: 0,
                    aud: 0,
                    brl: 0,
                    mxn: 0,
                    inr: 0,
                    jpy: 0
                },
                l = {
                    core: (n = {}, Object(c.default)(n, o.VERSION_9, {
                        monthly: {
                            free: d,
                            basic: {
                                usd: 10,
                                euro: 10,
                                gbp: 9,
                                cad: 14,
                                aud: 14,
                                brl: 43,
                                mxn: 200,
                                inr: 750,
                                jpy: 1100
                            },
                            standard: {
                                usd: 12,
                                euro: 12,
                                gbp: 11,
                                cad: 17,
                                aud: 17,
                                brl: 55,
                                mxn: 240,
                                inr: 900,
                                jpy: 1400
                            },
                            pro: {
                                usd: 20,
                                euro: 20,
                                gbp: 18,
                                cad: 27,
                                aud: 27,
                                brl: 91,
                                mxn: 400,
                                inr: 1500,
                                jpy: 2200
                            },
                            enterprise: {
                                usd: 46,
                                euro: 46,
                                gbp: 40,
                                cad: 62,
                                aud: 62,
                                brl: 217,
                                mxn: 920,
                                inr: 3450,
                                jpy: 4700
                            }
                        },
                        yearly: {
                            free: d,
                            basic: {
                                usd: 8,
                                euro: 8,
                                gbp: 7,
                                cad: 11,
                                aud: 11,
                                brl: 35,
                                mxn: 160,
                                inr: 600,
                                jpy: 900
                            },
                            standard: {
                                usd: 10,
                                euro: 10,
                                gbp: 9,
                                cad: 14,
                                aud: 14,
                                brl: 45,
                                mxn: 200,
                                inr: 750,
                                jpy: 1100
                            },
                            pro: {
                                usd: 16,
                                euro: 16,
                                gbp: 14,
                                cad: 22,
                                aud: 22,
                                brl: 75,
                                mxn: 320,
                                inr: 1200,
                                jpy: 1800
                            },
                            enterprise: {
                                usd: 38,
                                euro: 38,
                                gbp: 33,
                                cad: 51,
                                aud: 51,
                                brl: 178,
                                mxn: 760,
                                inr: 2850,
                                jpy: 4200
                            }
                        }
                    }), Object(c.default)(n, o.VERSION_10, {
                        monthly: {
                            free: d,
                            basic: {
                                usd: 8,
                                euro: 8,
                                gbp: 6,
                                cad: 10,
                                aud: 10,
                                brl: 37,
                                mxn: 150,
                                inr: 550,
                                jpy: 850
                            },
                            standard: {
                                usd: 12,
                                euro: 12,
                                gbp: 11,
                                cad: 17,
                                aud: 17,
                                brl: 60,
                                mxn: 240,
                                inr: 900,
                                jpy: 1400
                            },
                            pro: {
                                usd: 27,
                                euro: 27,
                                gbp: 23,
                                cad: 37,
                                aud: 37,
                                brl: 135,
                                mxn: 540,
                                inr: 2e3,
                                jpy: 3e3
                            },
                            enterprise: {
                                usd: 54,
                                euro: 54,
                                gbp: 46,
                                cad: 74,
                                aud: 74,
                                brl: 270,
                                mxn: 1100,
                                inr: 4025,
                                jpy: 6100
                            }
                        },
                        yearly: {
                            free: d,
                            basic: {
                                usd: 6,
                                euro: 6,
                                gbp: 5,
                                cad: 8,
                                aud: 8,
                                brl: 30,
                                mxn: 120,
                                inr: 450,
                                jpy: 700
                            },
                            standard: {
                                usd: 10,
                                euro: 10,
                                gbp: 9,
                                cad: 14,
                                aud: 14,
                                brl: 50,
                                mxn: 200,
                                inr: 750,
                                jpy: 1100
                            },
                            pro: {
                                usd: 22,
                                euro: 22,
                                gbp: 19,
                                cad: 30,
                                aud: 30,
                                brl: 110,
                                mxn: 440,
                                inr: 1650,
                                jpy: 2500
                            },
                            enterprise: {
                                usd: 44,
                                euro: 44,
                                gbp: 38,
                                cad: 60,
                                aud: 60,
                                brl: 220,
                                mxn: 900,
                                inr: 3300,
                                jpy: 5e3
                            }
                        }
                    }), Object(c.default)(n, o.VERSION_11, {
                        monthly: {
                            free: d,
                            basic: {
                                usd: 10,
                                euro: 10,
                                gbp: 9,
                                cad: 14,
                                aud: 14,
                                brl: 43,
                                mxn: 200,
                                inr: 750,
                                jpy: 1300
                            },
                            standard: {
                                usd: 12,
                                euro: 12,
                                gbp: 11,
                                cad: 17,
                                aud: 17,
                                brl: 55,
                                mxn: 240,
                                inr: 900,
                                jpy: 1700
                            },
                            pro: {
                                usd: 20,
                                euro: 20,
                                gbp: 18,
                                cad: 27,
                                aud: 27,
                                brl: 91,
                                mxn: 400,
                                inr: 1500,
                                jpy: 3300
                            },
                            enterprise: {
                                usd: 46,
                                euro: 46,
                                gbp: 40,
                                cad: 62,
                                aud: 62,
                                brl: 217,
                                mxn: 920,
                                inr: 3450,
                                jpy: 4700
                            }
                        },
                        yearly: {
                            free: d,
                            basic: {
                                usd: 8,
                                euro: 8,
                                gbp: 7,
                                cad: 11,
                                aud: 11,
                                brl: 35,
                                mxn: 160,
                                inr: 600,
                                jpy: 1100
                            },
                            standard: {
                                usd: 10,
                                euro: 10,
                                gbp: 9,
                                cad: 14,
                                aud: 14,
                                brl: 45,
                                mxn: 200,
                                inr: 750,
                                jpy: 1400
                            },
                            pro: {
                                usd: 16,
                                euro: 16,
                                gbp: 14,
                                cad: 22,
                                aud: 22,
                                brl: 75,
                                mxn: 320,
                                inr: 1200,
                                jpy: 2700
                            },
                            enterprise: {
                                usd: 38,
                                euro: 38,
                                gbp: 33,
                                cad: 51,
                                aud: 51,
                                brl: 178,
                                mxn: 760,
                                inr: 2850,
                                jpy: 4200
                            }
                        }
                    }), Object(c.default)(n, o.VERSION_12, {
                        monthly: {
                            free: d,
                            basic: {
                                usd: 10,
                                euro: 10,
                                gbp: 9,
                                cad: 14,
                                aud: 14,
                                brl: 43,
                                mxn: 200,
                                inr: 750,
                                jpy: 1300
                            },
                            standard: {
                                usd: 12,
                                euro: 12,
                                gbp: 11,
                                cad: 17,
                                aud: 17,
                                brl: 55,
                                mxn: 240,
                                inr: 900,
                                jpy: 1700
                            },
                            pro: {
                                usd: 24,
                                euro: 24,
                                gbp: 21,
                                cad: 32,
                                aud: 32,
                                brl: 108,
                                mxn: 475,
                                inr: 1780,
                                jpy: 3300
                            },
                            enterprise: {
                                usd: 54,
                                euro: 54,
                                gbp: 46,
                                cad: 74,
                                aud: 74,
                                brl: 270,
                                mxn: 1100,
                                inr: 4025,
                                jpy: 6100
                            }
                        },
                        yearly: {
                            free: d,
                            basic: {
                                usd: 8,
                                euro: 8,
                                gbp: 7,
                                cad: 11,
                                aud: 11,
                                brl: 35,
                                mxn: 160,
                                inr: 600,
                                jpy: 1100
                            },
                            standard: {
                                usd: 10,
                                euro: 10,
                                gbp: 9,
                                cad: 14,
                                aud: 14,
                                brl: 45,
                                mxn: 200,
                                inr: 750,
                                jpy: 1400
                            },
                            pro: {
                                usd: 19,
                                euro: 19,
                                gbp: 17,
                                cad: 26,
                                aud: 26,
                                brl: 89,
                                mxn: 380,
                                inr: 1425,
                                jpy: 2700
                            },
                            enterprise: {
                                usd: 44,
                                euro: 44,
                                gbp: 38,
                                cad: 60,
                                aud: 60,
                                brl: 220,
                                mxn: 900,
                                inr: 3300,
                                jpy: 5e3
                            }
                        }
                    }), n),
                    marketing: (i = {}, Object(c.default)(i, o.VERSION_9, {
                        monthly: {
                            free: d,
                            basic: {
                                usd: 2.5,
                                euro: 2.5,
                                gbp: 2,
                                cad: 3.3,
                                aud: 3.3,
                                brl: 12,
                                mxn: 50,
                                inr: 187.5,
                                jpy: 280
                            },
                            standard: {
                                usd: 4,
                                euro: 4,
                                gbp: 3,
                                cad: 5.3,
                                aud: 5.3,
                                brl: 20,
                                mxn: 80,
                                inr: 300,
                                jpy: 450
                            },
                            pro: {
                                usd: 7.5,
                                euro: 7.5,
                                gbp: 6,
                                cad: 10,
                                aud: 10,
                                brl: 36,
                                mxn: 150,
                                inr: 562.5,
                                jpy: 845
                            },
                            enterprise: d
                        },
                        yearly: {
                            free: d,
                            basic: {
                                usd: 2,
                                euro: 2,
                                gbp: 1.5,
                                cad: 2.65,
                                aud: 2.65,
                                brl: 10,
                                mxn: 40,
                                inr: 150,
                                jpy: 225
                            },
                            standard: {
                                usd: 3,
                                euro: 3,
                                gbp: 2.3,
                                cad: 4,
                                aud: 4,
                                brl: 15,
                                mxn: 60,
                                inr: 225,
                                jpy: 350
                            },
                            pro: {
                                usd: 6,
                                euro: 6,
                                gbp: 4.6,
                                cad: 8,
                                aud: 8,
                                brl: 30,
                                mxn: 120,
                                inr: 450,
                                jpy: 680
                            },
                            enterprise: d
                        }
                    }), Object(c.default)(i, o.VERSION_10, {
                        monthly: {
                            free: d,
                            basic: {
                                usd: 2.5,
                                euro: 2.5,
                                gbp: 2,
                                cad: 3.3,
                                aud: 3.3,
                                brl: 12,
                                mxn: 50,
                                inr: 187.5,
                                jpy: 280
                            },
                            standard: {
                                usd: 4,
                                euro: 4,
                                gbp: 3,
                                cad: 5.3,
                                aud: 5.3,
                                brl: 20,
                                mxn: 80,
                                inr: 300,
                                jpy: 450
                            },
                            pro: {
                                usd: 7.5,
                                euro: 7.5,
                                gbp: 6,
                                cad: 10,
                                aud: 10,
                                brl: 36,
                                mxn: 150,
                                inr: 562.5,
                                jpy: 845
                            },
                            enterprise: d
                        },
                        yearly: {
                            free: d,
                            basic: {
                                usd: 2,
                                euro: 2,
                                gbp: 1.5,
                                cad: 2.65,
                                aud: 2.65,
                                brl: 10,
                                mxn: 40,
                                inr: 150,
                                jpy: 225
                            },
                            standard: {
                                usd: 3,
                                euro: 3,
                                gbp: 2.3,
                                cad: 4,
                                aud: 4,
                                brl: 15,
                                mxn: 60,
                                inr: 225,
                                jpy: 350
                            },
                            pro: {
                                usd: 6,
                                euro: 6,
                                gbp: 4.6,
                                cad: 8,
                                aud: 8,
                                brl: 30,
                                mxn: 120,
                                inr: 450,
                                jpy: 680
                            },
                            enterprise: d
                        }
                    }), Object(c.default)(i, o.VERSION_11, {
                        monthly: {
                            free: d,
                            basic: {
                                usd: 2.5,
                                euro: 2.5,
                                gbp: 2,
                                cad: 3.3,
                                aud: 3.3,
                                brl: 12,
                                mxn: 50,
                                inr: 187.5,
                                jpy: 280
                            },
                            standard: {
                                usd: 4,
                                euro: 4,
                                gbp: 3,
                                cad: 5.3,
                                aud: 5.3,
                                brl: 20,
                                mxn: 80,
                                inr: 300,
                                jpy: 450
                            },
                            pro: {
                                usd: 7.5,
                                euro: 7.5,
                                gbp: 6,
                                cad: 10,
                                aud: 10,
                                brl: 36,
                                mxn: 150,
                                inr: 562.5,
                                jpy: 845
                            },
                            enterprise: d
                        },
                        yearly: {
                            free: d,
                            basic: {
                                usd: 2,
                                euro: 2,
                                gbp: 1.5,
                                cad: 2.65,
                                aud: 2.65,
                                brl: 10,
                                mxn: 40,
                                inr: 150,
                                jpy: 225
                            },
                            standard: {
                                usd: 3,
                                euro: 3,
                                gbp: 2.3,
                                cad: 4,
                                aud: 4,
                                brl: 15,
                                mxn: 60,
                                inr: 225,
                                jpy: 350
                            },
                            pro: {
                                usd: 6,
                                euro: 6,
                                gbp: 4.6,
                                cad: 8,
                                aud: 8,
                                brl: 30,
                                mxn: 120,
                                inr: 450,
                                jpy: 680
                            },
                            enterprise: d
                        }
                    }), Object(c.default)(i, o.VERSION_12, {
                        monthly: {
                            free: d,
                            basic: {
                                usd: 2.5,
                                euro: 2.5,
                                gbp: 2,
                                cad: 3.3,
                                aud: 3.3,
                                brl: 12,
                                mxn: 50,
                                inr: 187.5,
                                jpy: 280
                            },
                            standard: {
                                usd: 4,
                                euro: 4,
                                gbp: 3,
                                cad: 5.3,
                                aud: 5.3,
                                brl: 20,
                                mxn: 80,
                                inr: 300,
                                jpy: 450
                            },
                            pro: {
                                usd: 7.5,
                                euro: 7.5,
                                gbp: 6,
                                cad: 10,
                                aud: 10,
                                brl: 36,
                                mxn: 150,
                                inr: 562.5,
                                jpy: 845
                            },
                            enterprise: d
                        },
                        yearly: {
                            free: d,
                            basic: {
                                usd: 2,
                                euro: 2,
                                gbp: 1.5,
                                cad: 2.65,
                                aud: 2.65,
                                brl: 10,
                                mxn: 40,
                                inr: 150,
                                jpy: 225
                            },
                            standard: {
                                usd: 3,
                                euro: 3,
                                gbp: 2.3,
                                cad: 4,
                                aud: 4,
                                brl: 15,
                                mxn: 60,
                                inr: 225,
                                jpy: 350
                            },
                            pro: {
                                usd: 6,
                                euro: 6,
                                gbp: 4.6,
                                cad: 8,
                                aud: 8,
                                brl: 30,
                                mxn: 120,
                                inr: 450,
                                jpy: 680
                            },
                            enterprise: d
                        }
                    }), i),
                    crm: (a = {}, Object(c.default)(a, o.VERSION_9, {
                        monthly: {
                            free: d,
                            basic: {
                                usd: 2.5,
                                euro: 2.5,
                                gbp: 2,
                                cad: 3.3,
                                aud: 3.3,
                                brl: 12,
                                mxn: 50,
                                inr: 187.5,
                                jpy: 280
                            },
                            standard: {
                                usd: 5,
                                euro: 5,
                                gbp: 4,
                                cad: 6.6,
                                aud: 6.6,
                                brl: 24,
                                mxn: 100,
                                inr: 375,
                                jpy: 560
                            },
                            pro: {
                                usd: 10,
                                euro: 10,
                                gbp: 8,
                                cad: 13.2,
                                aud: 13.2,
                                brl: 48,
                                mxn: 200,
                                inr: 750,
                                jpy: 1125
                            },
                            enterprise: d
                        },
                        yearly: {
                            free: d,
                            basic: {
                                usd: 2,
                                euro: 2,
                                gbp: 1.5,
                                cad: 2.65,
                                aud: 2.65,
                                brl: 10,
                                mxn: 40,
                                inr: 150,
                                jpy: 225
                            },
                            standard: {
                                usd: 4,
                                euro: 4,
                                gbp: 3,
                                cad: 5.3,
                                aud: 5.3,
                                brl: 20,
                                mxn: 80,
                                inr: 300,
                                jpy: 450
                            },
                            pro: {
                                usd: 8,
                                euro: 8,
                                gbp: 6,
                                cad: 10.6,
                                aud: 10.6,
                                brl: 40,
                                mxn: 160,
                                inr: 600,
                                jpy: 900
                            },
                            enterprise: d
                        }
                    }), Object(c.default)(a, o.VERSION_10, {
                        monthly: {
                            free: d,
                            basic: {
                                usd: 2.5,
                                euro: 2.5,
                                gbp: 2,
                                cad: 3.3,
                                aud: 3.3,
                                brl: 12,
                                mxn: 50,
                                inr: 187.5,
                                jpy: 280
                            },
                            standard: {
                                usd: 5,
                                euro: 5,
                                gbp: 4,
                                cad: 6.6,
                                aud: 6.6,
                                brl: 24,
                                mxn: 100,
                                inr: 375,
                                jpy: 560
                            },
                            pro: {
                                usd: 10,
                                euro: 10,
                                gbp: 8,
                                cad: 13.2,
                                aud: 13.2,
                                brl: 48,
                                mxn: 200,
                                inr: 750,
                                jpy: 1125
                            },
                            enterprise: d
                        },
                        yearly: {
                            free: d,
                            basic: {
                                usd: 2,
                                euro: 2,
                                gbp: 1.5,
                                cad: 2.65,
                                aud: 2.65,
                                brl: 10,
                                mxn: 40,
                                inr: 150,
                                jpy: 225
                            },
                            standard: {
                                usd: 4,
                                euro: 4,
                                gbp: 3,
                                cad: 5.3,
                                aud: 5.3,
                                brl: 20,
                                mxn: 80,
                                inr: 300,
                                jpy: 450
                            },
                            pro: {
                                usd: 8,
                                euro: 8,
                                gbp: 6,
                                cad: 10.6,
                                aud: 10.6,
                                brl: 40,
                                mxn: 160,
                                inr: 600,
                                jpy: 900
                            },
                            enterprise: d
                        }
                    }), Object(c.default)(a, o.VERSION_11, {
                        monthly: {
                            free: d,
                            basic: {
                                usd: 2.5,
                                euro: 2.5,
                                gbp: 2,
                                cad: 3.3,
                                aud: 3.3,
                                brl: 12,
                                mxn: 50,
                                inr: 187.5,
                                jpy: 280
                            },
                            standard: {
                                usd: 5,
                                euro: 5,
                                gbp: 4,
                                cad: 6.6,
                                aud: 6.6,
                                brl: 24,
                                mxn: 100,
                                inr: 375,
                                jpy: 560
                            },
                            pro: {
                                usd: 10,
                                euro: 10,
                                gbp: 8,
                                cad: 13.2,
                                aud: 13.2,
                                brl: 48,
                                mxn: 200,
                                inr: 750,
                                jpy: 1125
                            },
                            enterprise: d
                        },
                        yearly: {
                            free: d,
                            basic: {
                                usd: 2,
                                euro: 2,
                                gbp: 1.5,
                                cad: 2.65,
                                aud: 2.65,
                                brl: 10,
                                mxn: 40,
                                inr: 150,
                                jpy: 225
                            },
                            standard: {
                                usd: 4,
                                euro: 4,
                                gbp: 3,
                                cad: 5.3,
                                aud: 5.3,
                                brl: 20,
                                mxn: 80,
                                inr: 300,
                                jpy: 450
                            },
                            pro: {
                                usd: 8,
                                euro: 8,
                                gbp: 6,
                                cad: 10.6,
                                aud: 10.6,
                                brl: 40,
                                mxn: 160,
                                inr: 600,
                                jpy: 900
                            },
                            enterprise: d
                        }
                    }), Object(c.default)(a, o.VERSION_12, {
                        monthly: {
                            free: d,
                            basic: {
                                usd: 2.5,
                                euro: 2.5,
                                gbp: 2,
                                cad: 3.3,
                                aud: 3.3,
                                brl: 12,
                                mxn: 50,
                                inr: 187.5,
                                jpy: 280
                            },
                            standard: {
                                usd: 5,
                                euro: 5,
                                gbp: 4,
                                cad: 6.6,
                                aud: 6.6,
                                brl: 24,
                                mxn: 100,
                                inr: 375,
                                jpy: 560
                            },
                            pro: {
                                usd: 10,
                                euro: 10,
                                gbp: 8,
                                cad: 13.2,
                                aud: 13.2,
                                brl: 48,
                                mxn: 200,
                                inr: 750,
                                jpy: 1125
                            },
                            enterprise: d
                        },
                        yearly: {
                            free: d,
                            basic: {
                                usd: 2,
                                euro: 2,
                                gbp: 1.5,
                                cad: 2.65,
                                aud: 2.65,
                                brl: 10,
                                mxn: 40,
                                inr: 150,
                                jpy: 225
                            },
                            standard: {
                                usd: 4,
                                euro: 4,
                                gbp: 3,
                                cad: 5.3,
                                aud: 5.3,
                                brl: 20,
                                mxn: 80,
                                inr: 300,
                                jpy: 450
                            },
                            pro: {
                                usd: 8,
                                euro: 8,
                                gbp: 6,
                                cad: 10.6,
                                aud: 10.6,
                                brl: 40,
                                mxn: 160,
                                inr: 600,
                                jpy: 900
                            },
                            enterprise: d
                        }
                    }), a),
                    projectManagement: (s = {}, Object(c.default)(s, o.VERSION_9, {
                        monthly: {
                            free: d,
                            basic: {
                                usd: 2,
                                euro: 2,
                                gbp: 1.5,
                                cad: 2.65,
                                aud: 2.65,
                                brl: 10,
                                mxn: 40,
                                inr: 150,
                                jpy: 225
                            },
                            standard: {
                                usd: 2.5,
                                euro: 2.5,
                                gbp: 2,
                                cad: 3.3,
                                aud: 3.3,
                                brl: 12,
                                mxn: 50,
                                inr: 187.5,
                                jpy: 280
                            },
                            pro: {
                                usd: 5,
                                euro: 5,
                                gbp: 4,
                                cad: 6.6,
                                aud: 6.6,
                                brl: 24,
                                mxn: 100,
                                inr: 375,
                                jpy: 560
                            },
                            enterprise: d
                        },
                        yearly: {
                            free: d,
                            basic: {
                                usd: 1,
                                euro: 1,
                                gbp: .75,
                                cad: 1.3,
                                aud: 1.3,
                                brl: 5,
                                mxn: 20,
                                inr: 75,
                                jpy: 115
                            },
                            standard: {
                                usd: 2,
                                euro: 2,
                                gbp: 1.5,
                                cad: 2.65,
                                aud: 2.65,
                                brl: 10,
                                mxn: 40,
                                inr: 150,
                                jpy: 225
                            },
                            pro: {
                                usd: 4,
                                euro: 4,
                                gbp: 3,
                                cad: 5.3,
                                aud: 5.3,
                                brl: 20,
                                mxn: 80,
                                inr: 300,
                                jpy: 450
                            },
                            enterprise: d
                        }
                    }), Object(c.default)(s, o.VERSION_10, {
                        monthly: {
                            free: d,
                            basic: {
                                usd: 2,
                                euro: 2,
                                gbp: 1.5,
                                cad: 2.65,
                                aud: 2.65,
                                brl: 10,
                                mxn: 40,
                                inr: 150,
                                jpy: 225
                            },
                            standard: {
                                usd: 2.5,
                                euro: 2.5,
                                gbp: 2,
                                cad: 3.3,
                                aud: 3.3,
                                brl: 12,
                                mxn: 50,
                                inr: 187.5,
                                jpy: 280
                            },
                            pro: {
                                usd: 5,
                                euro: 5,
                                gbp: 4,
                                cad: 6.6,
                                aud: 6.6,
                                brl: 24,
                                mxn: 100,
                                inr: 375,
                                jpy: 560
                            },
                            enterprise: d
                        },
                        yearly: {
                            free: d,
                            basic: {
                                usd: 1,
                                euro: 1,
                                gbp: .75,
                                cad: 1.3,
                                aud: 1.3,
                                brl: 5,
                                mxn: 20,
                                inr: 75,
                                jpy: 115
                            },
                            standard: {
                                usd: 2,
                                euro: 2,
                                gbp: 1.5,
                                cad: 2.65,
                                aud: 2.65,
                                brl: 10,
                                mxn: 40,
                                inr: 150,
                                jpy: 225
                            },
                            pro: {
                                usd: 4,
                                euro: 4,
                                gbp: 3,
                                cad: 5.3,
                                aud: 5.3,
                                brl: 20,
                                mxn: 80,
                                inr: 300,
                                jpy: 450
                            },
                            enterprise: d
                        }
                    }), Object(c.default)(s, o.VERSION_11, {
                        monthly: {
                            free: d,
                            basic: {
                                usd: 2,
                                euro: 2,
                                gbp: 1.5,
                                cad: 2.65,
                                aud: 2.65,
                                brl: 10,
                                mxn: 40,
                                inr: 150,
                                jpy: 225
                            },
                            standard: {
                                usd: 2.5,
                                euro: 2.5,
                                gbp: 2,
                                cad: 3.3,
                                aud: 3.3,
                                brl: 12,
                                mxn: 50,
                                inr: 187.5,
                                jpy: 280
                            },
                            pro: {
                                usd: 5,
                                euro: 5,
                                gbp: 4,
                                cad: 6.6,
                                aud: 6.6,
                                brl: 24,
                                mxn: 100,
                                inr: 375,
                                jpy: 560
                            },
                            enterprise: d
                        },
                        yearly: {
                            free: d,
                            basic: {
                                usd: 1,
                                euro: 1,
                                gbp: .75,
                                cad: 1.3,
                                aud: 1.3,
                                brl: 5,
                                mxn: 20,
                                inr: 75,
                                jpy: 115
                            },
                            standard: {
                                usd: 2,
                                euro: 2,
                                gbp: 1.5,
                                cad: 2.65,
                                aud: 2.65,
                                brl: 10,
                                mxn: 40,
                                inr: 150,
                                jpy: 225
                            },
                            pro: {
                                usd: 4,
                                euro: 4,
                                gbp: 3,
                                cad: 5.3,
                                aud: 5.3,
                                brl: 20,
                                mxn: 80,
                                inr: 300,
                                jpy: 450
                            },
                            enterprise: d
                        }
                    }), Object(c.default)(s, o.VERSION_12, {
                        monthly: {
                            free: d,
                            basic: {
                                usd: 2,
                                euro: 2,
                                gbp: 1.5,
                                cad: 2.65,
                                aud: 2.65,
                                brl: 10,
                                mxn: 40,
                                inr: 150,
                                jpy: 225
                            },
                            standard: {
                                usd: 2.5,
                                euro: 2.5,
                                gbp: 2,
                                cad: 3.3,
                                aud: 3.3,
                                brl: 12,
                                mxn: 50,
                                inr: 187.5,
                                jpy: 280
                            },
                            pro: {
                                usd: 5,
                                euro: 5,
                                gbp: 4,
                                cad: 6.6,
                                aud: 6.6,
                                brl: 24,
                                mxn: 100,
                                inr: 375,
                                jpy: 560
                            },
                            enterprise: d
                        },
                        yearly: {
                            free: d,
                            basic: {
                                usd: 1,
                                euro: 1,
                                gbp: .75,
                                cad: 1.3,
                                aud: 1.3,
                                brl: 5,
                                mxn: 20,
                                inr: 75,
                                jpy: 115
                            },
                            standard: {
                                usd: 2,
                                euro: 2,
                                gbp: 1.5,
                                cad: 2.65,
                                aud: 2.65,
                                brl: 10,
                                mxn: 40,
                                inr: 150,
                                jpy: 225
                            },
                            pro: {
                                usd: 4,
                                euro: 4,
                                gbp: 3,
                                cad: 5.3,
                                aud: 5.3,
                                brl: 20,
                                mxn: 80,
                                inr: 300,
                                jpy: 450
                            },
                            enterprise: d
                        }
                    }), s),
                    software: (u = {}, Object(c.default)(u, o.VERSION_9, {
                        monthly: {
                            free: d,
                            basic: {
                                usd: 2,
                                euro: 2,
                                gbp: 1.5,
                                cad: 2.65,
                                aud: 2.65,
                                brl: 10,
                                mxn: 40,
                                inr: 150,
                                jpy: 225
                            },
                            standard: {
                                usd: 2.5,
                                euro: 2.5,
                                gbp: 2,
                                cad: 3.3,
                                aud: 3.3,
                                brl: 12,
                                mxn: 50,
                                inr: 187.5,
                                jpy: 280
                            },
                            pro: {
                                usd: 5,
                                euro: 5,
                                gbp: 4,
                                cad: 6.6,
                                aud: 6.6,
                                brl: 24,
                                mxn: 100,
                                inr: 375,
                                jpy: 560
                            },
                            enterprise: d
                        },
                        yearly: {
                            free: d,
                            basic: {
                                usd: 1,
                                euro: 1,
                                gbp: .75,
                                cad: 1.3,
                                aud: 1.3,
                                brl: 5,
                                mxn: 20,
                                inr: 75,
                                jpy: 115
                            },
                            standard: {
                                usd: 2,
                                euro: 2,
                                gbp: 1.5,
                                cad: 2.65,
                                aud: 2.65,
                                brl: 10,
                                mxn: 40,
                                inr: 150,
                                jpy: 225
                            },
                            pro: {
                                usd: 4,
                                euro: 4,
                                gbp: 3,
                                cad: 5.3,
                                aud: 5.3,
                                brl: 20,
                                mxn: 80,
                                inr: 300,
                                jpy: 450
                            },
                            enterprise: d
                        }
                    }), Object(c.default)(u, o.VERSION_10, {
                        monthly: {
                            free: d,
                            basic: {
                                usd: 2,
                                euro: 2,
                                gbp: 1.5,
                                cad: 2.65,
                                aud: 2.65,
                                brl: 10,
                                mxn: 40,
                                inr: 150,
                                jpy: 225
                            },
                            standard: {
                                usd: 2.5,
                                euro: 2.5,
                                gbp: 2,
                                cad: 3.3,
                                aud: 3.3,
                                brl: 12,
                                mxn: 50,
                                inr: 187.5,
                                jpy: 280
                            },
                            pro: {
                                usd: 5,
                                euro: 5,
                                gbp: 4,
                                cad: 6.6,
                                aud: 6.6,
                                brl: 24,
                                mxn: 100,
                                inr: 375,
                                jpy: 560
                            },
                            enterprise: d
                        },
                        yearly: {
                            free: d,
                            basic: {
                                usd: 1,
                                euro: 1,
                                gbp: .75,
                                cad: 1.3,
                                aud: 1.3,
                                brl: 5,
                                mxn: 20,
                                inr: 75,
                                jpy: 115
                            },
                            standard: {
                                usd: 2,
                                euro: 2,
                                gbp: 1.5,
                                cad: 2.65,
                                aud: 2.65,
                                brl: 10,
                                mxn: 40,
                                inr: 150,
                                jpy: 225
                            },
                            pro: {
                                usd: 4,
                                euro: 4,
                                gbp: 3,
                                cad: 5.3,
                                aud: 5.3,
                                brl: 20,
                                mxn: 80,
                                inr: 300,
                                jpy: 450
                            },
                            enterprise: d
                        }
                    }), Object(c.default)(u, o.VERSION_11, {
                        monthly: {
                            free: d,
                            basic: {
                                usd: 2,
                                euro: 2,
                                gbp: 1.5,
                                cad: 2.65,
                                aud: 2.65,
                                brl: 10,
                                mxn: 40,
                                inr: 150,
                                jpy: 225
                            },
                            standard: {
                                usd: 2.5,
                                euro: 2.5,
                                gbp: 2,
                                cad: 3.3,
                                aud: 3.3,
                                brl: 12,
                                mxn: 50,
                                inr: 187.5,
                                jpy: 280
                            },
                            pro: {
                                usd: 5,
                                euro: 5,
                                gbp: 4,
                                cad: 6.6,
                                aud: 6.6,
                                brl: 24,
                                mxn: 100,
                                inr: 375,
                                jpy: 560
                            },
                            enterprise: d
                        },
                        yearly: {
                            free: d,
                            basic: {
                                usd: 1,
                                euro: 1,
                                gbp: .75,
                                cad: 1.3,
                                aud: 1.3,
                                brl: 5,
                                mxn: 20,
                                inr: 75,
                                jpy: 115
                            },
                            standard: {
                                usd: 2,
                                euro: 2,
                                gbp: 1.5,
                                cad: 2.65,
                                aud: 2.65,
                                brl: 10,
                                mxn: 40,
                                inr: 150,
                                jpy: 225
                            },
                            pro: {
                                usd: 4,
                                euro: 4,
                                gbp: 3,
                                cad: 5.3,
                                aud: 5.3,
                                brl: 20,
                                mxn: 80,
                                inr: 300,
                                jpy: 450
                            },
                            enterprise: d
                        }
                    }), Object(c.default)(u, o.VERSION_12, {
                        monthly: {
                            free: d,
                            basic: {
                                usd: 2,
                                euro: 2,
                                gbp: 1.5,
                                cad: 2.65,
                                aud: 2.65,
                                brl: 10,
                                mxn: 40,
                                inr: 150,
                                jpy: 225
                            },
                            standard: {
                                usd: 2.5,
                                euro: 2.5,
                                gbp: 2,
                                cad: 3.3,
                                aud: 3.3,
                                brl: 12,
                                mxn: 50,
                                inr: 187.5,
                                jpy: 280
                            },
                            pro: {
                                usd: 5,
                                euro: 5,
                                gbp: 4,
                                cad: 6.6,
                                aud: 6.6,
                                brl: 24,
                                mxn: 100,
                                inr: 375,
                                jpy: 560
                            },
                            enterprise: d
                        },
                        yearly: {
                            free: d,
                            basic: {
                                usd: 1,
                                euro: 1,
                                gbp: .75,
                                cad: 1.3,
                                aud: 1.3,
                                brl: 5,
                                mxn: 20,
                                inr: 75,
                                jpy: 115
                            },
                            standard: {
                                usd: 2,
                                euro: 2,
                                gbp: 1.5,
                                cad: 2.65,
                                aud: 2.65,
                                brl: 10,
                                mxn: 40,
                                inr: 150,
                                jpy: 225
                            },
                            pro: {
                                usd: 4,
                                euro: 4,
                                gbp: 3,
                                cad: 5.3,
                                aud: 5.3,
                                brl: 20,
                                mxn: 80,
                                inr: 300,
                                jpy: 450
                            },
                            enterprise: d
                        }
                    }), u)
                }
        },
        U6qq: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, "FILES_MANAGEMENT", (function() {
                return be
            })), r.d(t, "LEAD_ASSIGNMENT", (function() {
                return _e
            })), r.d(t, "CUSTOMIZABLE_SALES_PROCESS", (function() {
                return Pe
            })), r.d(t, "CUSTOMER_PROJECT_MANAGEMENT", (function() {
                return me
            })), r.d(t, "WEB_TO_LEAD_CAPTURING", (function() {
                return Se
            })), r.d(t, "CUSTOM_DASHBOARDS", (function() {
                return Te
            })), r.d(t, "COMMUNICATION_WITH_CONTEXT", (function() {
                return Ae
            })), r.d(t, "COLLABORATIVE_WHITEBOARD", (function() {
                return Ie
            })), r.d(t, "INTEGRATIONS_WITH_GMAIL_AND_OUTLOOK", (function() {
                return Re
            })), r.d(t, "IMPORT_FROM_OTHER_TOOLS", (function() {
                return Ne
            })), r.d(t, "EMBED_DOCUMENTS_AND_BRIEFS", (function() {
                return ve
            })), r.d(t, "MARKETING_REQUESTS_WITH_FORMS", (function() {
                return je
            })), r.d(t, "READY_MADE_MARKETING_TEMPLATES", (function() {
                return De
            })), r.d(t, "TEMPLATES", (function() {
                return ke
            })), r.d(t, "UPDATES_SECTION", (function() {
                return ye
            })), r.d(t, "CUSTOMIZABLE_NOTIFICATIONS", (function() {
                return Me
            })), r.d(t, "DEADLINE_MANAGEMENT", (function() {
                return he
            })), r.d(t, "SHARE_BOARD_WITH_EXTERNAL_GUESTS", (function() {
                return Ce
            })), r.d(t, "MARKETING_INTEGRATIONS", (function() {
                return xe
            })), r.d(t, "MARKETING_DASHBOARDS", (function() {
                return Le
            })), r.d(t, "MARKETING_CALENDAR", (function() {
                return Ue
            })), r.d(t, "DAILY_REPORTS", (function() {
                return Ge
            })), r.d(t, "IMPORT_EXPORT_EXCEL", (function() {
                return Be
            })), r.d(t, "WHITEBOARD", (function() {
                return we
            })), r.d(t, "EMBEDDED_BOARD", (function() {
                return Fe
            })), r.d(t, "ZOOM_INTEGRATION", (function() {
                return Ve
            })), r.d(t, "TIMELINE", (function() {
                return He
            })), r.d(t, "CALENDAR", (function() {
                return We
            })), r.d(t, "GUESTS", (function() {
                return Ke
            })), r.d(t, "KANBAN_VIEW", (function() {
                return Ye
            })), r.d(t, "WEBINARS", (function() {
                return Xe
            })), r.d(t, "FORMS", (function() {
                return qe
            })), r.d(t, "MAP", (function() {
                return ze
            })), r.d(t, "SEARCH", (function() {
                return Ze
            })), r.d(t, "IP_RESTRICTIONS", (function() {
                return Qe
            })), r.d(t, "CONTENT_DIRECTORY", (function() {
                return Je
            })), r.d(t, "TEAMS_INSIDE_TEAMS", (function() {
                return $e
            })), r.d(t, "CUSTOM_ROLES", (function() {
                return et
            })), r.d(t, "SEATS_MANAGEMENT", (function() {
                return tt
            })), r.d(t, "TENANT_RESTRICTIONS", (function() {
                return rt
            })), r.d(t, "APPROVED_GUEST", (function() {
                return nt
            })), r.d(t, "BLOCK_DOMAINS", (function() {
                return it
            })), r.d(t, "FORMS_CUSTOMIZATION", (function() {
                return at
            })), r.d(t, "TWO_WAY_EMAIL_SYNC", (function() {
                return st
            })), r.d(t, "COMMISSION_MANAGEMENT", (function() {
                return ut
            })), r.d(t, "ADVANCED_CUSTOMER_PROJECT_MANAGEMENT", (function() {
                return ct
            })), r.d(t, "WORKLOAD", (function() {
                return ot
            })), r.d(t, "TIME_TRACKING", (function() {
                return dt
            })), r.d(t, "CHART_VIEW", (function() {
                return lt
            })), r.d(t, "FORMULA", (function() {
                return ft
            })), r.d(t, "DEPENDENCY_COLUMN", (function() {
                return pt
            })), r.d(t, "TAGS", (function() {
                return gt
            })), r.d(t, "PRIVATE_BOARDS", (function() {
                return Et
            })), r.d(t, "INTEGRATIONS", (function() {
                return Ot
            })), r.d(t, "AUTOMATIONS", (function() {
                return bt
            })), r.d(t, "PREMIUM_INTEGRATIONS", (function() {
                return _t
            })), r.d(t, "DASHBOARDS", (function() {
                return Pt
            })), r.d(t, "TWO_FA", (function() {
                return mt
            })), r.d(t, "GOOGLE", (function() {
                return St
            })), r.d(t, "BOARD_ADMINISTRATORS", (function() {
                return Tt
            })), r.d(t, "SAML", (function() {
                return At
            })), r.d(t, "SCIM", (function() {
                return It
            })), r.d(t, "AUDIT_LOG", (function() {
                return Rt
            })), r.d(t, "SESSIONS", (function() {
                return Nt
            })), r.d(t, "PANIC_MODE", (function() {
                return vt
            })), r.d(t, "HIPAA", (function() {
                return jt
            })), r.d(t, "SOC", (function() {
                return Dt
            })), r.d(t, "SLA", (function() {
                return kt
            })), r.d(t, "CS_MANAGER", (function() {
                return yt
            })), r.d(t, "INTEGRATION_PERMISSIONS", (function() {
                return Mt
            })), r.d(t, "SALESFORCE_INTEGRATION", (function() {
                return ht
            })), r.d(t, "PRIVATE_WORKSPACES", (function() {
                return Ct
            })), r.d(t, "ACCOUNT_PERMISSIONS", (function() {
                return xt
            })), r.d(t, "WORK_PERFORMANCE_INSIGHTS", (function() {
                return Lt
            })), r.d(t, "SCHEDULED_DASHBOARD_DELIVERY", (function() {
                return Ut
            })), r.d(t, "PIVOT_ANALYSIS", (function() {
                return Gt
            })), r.d(t, "KNOWLEDGE_BASE", (function() {
                return Bt
            })), r.d(t, "EMAIL_SUPPORT", (function() {
                return wt
            })), r.d(t, "TAILORED_ONBOARDING", (function() {
                return Ft
            })), r.d(t, "UNLIMITED_VIEWERS", (function() {
                return Vt
            })), r.d(t, "UNLIMITED_BOARDS", (function() {
                return Ht
            })), r.d(t, "UNLIMITED_DOCS", (function() {
                return Wt
            })), r.d(t, "COLUMN_TYPES", (function() {
                return Kt
            })), r.d(t, "MAXIMUM_SEATS", (function() {
                return Yt
            })), r.d(t, "MOBILE", (function() {
                return Xt
            })), r.d(t, "STORAGE", (function() {
                return qt
            })), r.d(t, "ACTIVITY_LOG", (function() {
                return Qt
            })), r.d(t, "ADVANCED_COLUMN_TYPES", (function() {
                return Jt
            })), r.d(t, "VIEWERS", (function() {
                return $t
            })), r.d(t, "BOARDS", (function() {
                return er
            })), r.d(t, "ITEMS", (function() {
                return tr
            })), r.d(t, "UNLIMITED_BOARDS_WITH_FREE_TIER", (function() {
                return rr
            }));
            var n, i, a, s, u, c, o, d, l, f, p, g, E, O, b, _, P, m, S, T, A, I, R, N, v, j, D, k, y, M, h, C, x, L, U, G, B, w, F, V, H, W, K, Y, X, q, z, Z = r("cpVT"),
                Q = r("aIIR"),
                J = r("1BgC"),
                $ = r("0SMW"),
                ee = r("Pr/7"),
                te = function(e, t) {
                    var r = t[J.MONDAY_FREE_TIER_ACCOUNT_CREATION_ITEM_RESOURCE_CREDIT_COOKIE_NAME];
                    if (r) return parseInt(r);
                    return Object($.isRunningInClient)() && Object(ee.e)(J.HOMEPAGE_ACCOUNT_CREATION_ITEM_RESOURCE_CREDIT_COOKIE_NAME, 200), 200
                },
                re = r("n/Sm"),
                ne = (n = {}, Object(Z.default)(n, Q.k.FREE, {
                    value: !0
                }), Object(Z.default)(n, Q.k.BASIC, {
                    value: !0
                }), Object(Z.default)(n, Q.k.STANDARD, {
                    value: !0
                }), Object(Z.default)(n, Q.k.PRO, {
                    value: !0
                }), Object(Z.default)(n, Q.k.ENTERPRISE, {
                    value: !0
                }), n),
                ie = (i = {}, Object(Z.default)(i, Q.k.FREE, {
                    value: !1
                }), Object(Z.default)(i, Q.k.BASIC, {
                    value: !1
                }), Object(Z.default)(i, Q.k.STANDARD, {
                    value: !1
                }), Object(Z.default)(i, Q.k.PRO, {
                    value: !1
                }), Object(Z.default)(i, Q.k.ENTERPRISE, {
                    value: !0
                }), i),
                ae = ne,
                se = (a = {}, Object(Z.default)(a, Q.k.FREE, {
                    value: !1
                }), Object(Z.default)(a, Q.k.BASIC, {
                    value: !1
                }), Object(Z.default)(a, Q.k.STANDARD, {
                    value: "pricingPage.features.plans.integrations_standard"
                }), Object(Z.default)(a, Q.k.PRO, {
                    value: "pricingPage.features.plans.integrations_pro"
                }), Object(Z.default)(a, Q.k.ENTERPRISE, {
                    value: "pricingPage.features.plans.integrations_enterprise"
                }), a),
                ue = ne,
                ce = (s = {}, Object(Z.default)(s, Q.k.FREE, {
                    value: !1
                }), Object(Z.default)(s, Q.k.BASIC, {
                    value: !1
                }), Object(Z.default)(s, Q.k.STANDARD, {
                    value: "pricingPage.features.plans.guests_four_one"
                }), Object(Z.default)(s, Q.k.PRO, {
                    value: "pricingPage.features.plans.unlimited"
                }), Object(Z.default)(s, Q.k.ENTERPRISE, {
                    value: "pricingPage.features.plans.unlimited"
                }), s),
                oe = (u = {}, Object(Z.default)(u, Q.k.FREE, {
                    value: "pricingPage.features.plans.dashboards_basic"
                }), Object(Z.default)(u, Q.k.BASIC, {
                    value: "pricingPage.features.plans.dashboards_basic"
                }), Object(Z.default)(u, Q.k.STANDARD, {
                    value: "pricingPage.features.plans.dashboards_standard"
                }), Object(Z.default)(u, Q.k.PRO, {
                    value: "pricingPage.features.plans.dashboards_pro"
                }), Object(Z.default)(u, Q.k.ENTERPRISE, {
                    value: "pricingPage.features.plans.dashboards_enterprise"
                }), u),
                de = (c = {}, Object(Z.default)(c, Q.k.FREE, {
                    value: !1
                }), Object(Z.default)(c, Q.k.BASIC, {
                    value: !1
                }), Object(Z.default)(c, Q.k.STANDARD, {
                    value: !0
                }), Object(Z.default)(c, Q.k.PRO, {
                    value: !0
                }), Object(Z.default)(c, Q.k.ENTERPRISE, {
                    value: !0
                }), c),
                le = (o = {}, Object(Z.default)(o, Q.k.FREE, {
                    value: !1
                }), Object(Z.default)(o, Q.k.BASIC, {
                    value: !1
                }), Object(Z.default)(o, Q.k.STANDARD, {
                    value: !1
                }), Object(Z.default)(o, Q.k.PRO, {
                    value: !1
                }), Object(Z.default)(o, Q.k.ENTERPRISE, {
                    value: !0
                }), o),
                fe = (d = {}, Object(Z.default)(d, Q.k.FREE, {
                    value: !1
                }), Object(Z.default)(d, Q.k.BASIC, {
                    value: !1
                }), Object(Z.default)(d, Q.k.STANDARD, {
                    value: !1
                }), Object(Z.default)(d, Q.k.PRO, {
                    value: !0
                }), Object(Z.default)(d, Q.k.ENTERPRISE, {
                    value: !0
                }), d),
                pe = (l = {}, Object(Z.default)(l, Q.k.FREE, {
                    value: !1
                }), Object(Z.default)(l, Q.k.BASIC, {
                    value: !1
                }), Object(Z.default)(l, Q.k.STANDARD, {
                    value: !1
                }), Object(Z.default)(l, Q.k.PRO, {
                    value: !1
                }), Object(Z.default)(l, Q.k.ENTERPRISE, {
                    value: !0
                }), l),
                ge = r("UmnM");

            function Ee(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function Oe(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Ee(Object(r), !0).forEach((function(t) {
                        Object(Z.default)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ee(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var be = {
                    name: "pricingPage.features.titles.filesManagement",
                    description: "pricingPage.features.descriptions.filesManagement",
                    tiers: ne
                },
                _e = {
                    name: "pricingPage.features.titles.leadAssignment",
                    description: "pricingPage.features.descriptions.leadAssignment",
                    tiers: ne
                },
                Pe = {
                    name: "pricingPage.features.titles.customizableSalesProcess",
                    description: "pricingPage.features.descriptions.customizableSalesProcess",
                    tiers: ne
                },
                me = {
                    name: "pricingPage.features.titles.customerProjectManagement",
                    description: "pricingPage.features.descriptions.customerProjectManagement",
                    tiers: ne
                },
                Se = {
                    name: "pricingPage.features.titles.webToLeadCapturing",
                    description: "pricingPage.features.descriptions.webToLeadCapturing",
                    tiers: ne
                },
                Te = {
                    name: "pricingPage.features.titles.customDashboards",
                    description: "pricingPage.features.descriptions.customDashboards",
                    tiers: ne
                },
                Ae = {
                    name: "pricingPage.features.titles.communication_with_context",
                    description: "pricingPage.features.descriptions.communication_with_context",
                    tiers: ne
                },
                Ie = {
                    name: "pricingPage.features.titles.collaborative_whiteboard",
                    description: "pricingPage.features.descriptions.whiteboard",
                    tiers: ae
                },
                Re = {
                    name: "pricingPage.features.titles.integrations_with_gmail_and_outlook",
                    description: "pricingPage.features.descriptions.integrations_with_gmail_and_outlook",
                    tiers: se
                },
                Ne = {
                    name: "pricingPage.features.titles.importFromOtherTools",
                    description: "pricingPage.features.descriptions.importFromOtherTools",
                    tiers: ne
                },
                ve = {
                    name: "pricingPage.features.titles.embed_documents_and_briefs",
                    description: "pricingPage.features.descriptions.embed_documents_and_briefs",
                    tiers: ne
                },
                je = {
                    name: "pricingPage.features.titles.marketing_requests_with_forms",
                    description: "pricingPage.features.descriptions.marketing_requests_with_forms",
                    tiers: ue
                },
                De = {
                    name: "pricingPage.features.titles.ready_made_marketing_templates",
                    description: "pricingPage.features.descriptions.ready_made_marketing_templates",
                    tiers: ne
                },
                ke = {
                    name: "pricingPage.features.titles.templates",
                    description: "pricingPage.features.descriptions.templates",
                    tiers: ne
                },
                ye = {
                    name: "pricingPage.features.titles.updatesSection",
                    description: "pricingPage.features.descriptions.updatesSection",
                    tiers: ne
                },
                Me = {
                    name: "pricingPage.features.titles.customizableNotifications",
                    description: "pricingPage.features.descriptions.customizableNotifications",
                    tiers: ne
                },
                he = {
                    name: "pricingPage.features.titles.deadline_management",
                    description: "pricingPage.features.descriptions.deadline_management",
                    tiers: ne
                },
                Ce = {
                    name: "pricingPage.features.titles.share_board_with_external_guests",
                    description: "pricingPage.features.descriptions.guests",
                    tiers: ce
                },
                xe = {
                    name: "pricingPage.features.titles.integrations",
                    description: "pricingPage.features.descriptions.marketing_integrations",
                    tiers: se
                },
                Le = {
                    name: "pricingPage.features.titles.dashboards",
                    description: "pricingPage.features.descriptions.marketing_dashboards",
                    tiers: oe
                },
                Ue = {
                    name: "pricingPage.features.titles.calendar",
                    description: "pricingPage.features.descriptions.marketing_calendar",
                    tiers: de
                },
                Ge = {
                    name: "pricingPage.features.titles.daily_reports",
                    description: "pricingPage.features.descriptions.daily_reports",
                    tiers: le
                },
                Be = {
                    name: "pricingPage.features.titles.import_export_excel",
                    description: "pricingPage.features.descriptions.import_export_excel",
                    tiers: ne
                },
                we = {
                    name: "pricingPage.features.titles.whiteboard",
                    description: "pricingPage.features.descriptions.whiteboard",
                    tiers: ae
                },
                Fe = {
                    name: "pricingPage.features.titles.embed_docs",
                    description: "pricingPage.features.descriptions.embed_docs",
                    tiers: ne
                },
                Ve = {
                    name: "pricingPage.features.titles.zoom_integration",
                    description: "pricingPage.features.descriptions.zoom_integration",
                    tiers: (f = {}, Object(Z.default)(f, Q.k.FREE, {
                        value: !1
                    }), Object(Z.default)(f, Q.k.BASIC, {
                        value: !1
                    }), Object(Z.default)(f, Q.k.STANDARD, {
                        value: !0
                    }), Object(Z.default)(f, Q.k.PRO, {
                        value: !0
                    }), Object(Z.default)(f, Q.k.ENTERPRISE, {
                        value: !0
                    }), f)
                },
                He = function(e) {
                    var t, r = e.hasStudentPlan;
                    return {
                        name: "pricingPage.features.titles.timeline",
                        description: "pricingPage.features.descriptions.timeline",
                        tiers: (t = {}, Object(Z.default)(t, Q.k.FREE, r ? {
                            value: !0
                        } : {
                            value: !1
                        }), Object(Z.default)(t, Q.k.BASIC, {
                            value: !1
                        }), Object(Z.default)(t, Q.k.STANDARD, {
                            value: !0
                        }), Object(Z.default)(t, Q.k.PRO, {
                            value: !0
                        }), Object(Z.default)(t, Q.k.ENTERPRISE, {
                            value: !0
                        }), t)
                    }
                },
                We = function(e) {
                    var t = e.hasStudentPlan;
                    return {
                        name: "pricingPage.features.titles.calendar",
                        description: "pricingPage.features.descriptions.calendar",
                        tiers: Oe(Oe({}, de), {}, Object(Z.default)({}, Q.k.FREE, t ? {
                            value: !0
                        } : {
                            value: !1
                        }))
                    }
                },
                Ke = {
                    name: "pricingPage.features.titles.guests",
                    description: "pricingPage.features.descriptions.guests",
                    tiers: ce
                },
                Ye = {
                    name: "pricingPage.features.titles.kanbanView",
                    description: "pricingPage.features.descriptions.kanbanView",
                    tiers: ne
                },
                Xe = {
                    name: "pricingPage.features.titles.webinars",
                    description: "pricingPage.features.descriptions.webinars",
                    tiers: ne
                },
                qe = {
                    name: "pricingPage.features.titles.forms",
                    description: "pricingPage.features.descriptions.forms",
                    tiers: ue
                },
                ze = {
                    name: "pricingPage.features.titles.map",
                    description: "pricingPage.features.descriptions.map",
                    tiers: (p = {}, Object(Z.default)(p, Q.k.FREE, {
                        value: !1
                    }), Object(Z.default)(p, Q.k.BASIC, {
                        value: !1
                    }), Object(Z.default)(p, Q.k.STANDARD, {
                        value: !0
                    }), Object(Z.default)(p, Q.k.PRO, {
                        value: !0
                    }), Object(Z.default)(p, Q.k.ENTERPRISE, {
                        value: !0
                    }), p)
                },
                Ze = {
                    name: "pricingPage.features.titles.search",
                    description: "pricingPage.features.descriptions.search",
                    tiers: (g = {}, Object(Z.default)(g, Q.k.FREE, {
                        value: !1
                    }), Object(Z.default)(g, Q.k.BASIC, {
                        value: !1
                    }), Object(Z.default)(g, Q.k.STANDARD, {
                        value: !0
                    }), Object(Z.default)(g, Q.k.PRO, {
                        value: !0
                    }), Object(Z.default)(g, Q.k.ENTERPRISE, {
                        value: !0
                    }), g)
                },
                Qe = {
                    name: "pricingPage.features.titles.ip_restrictions",
                    description: "pricingPage.features.descriptions.ip_restrictions",
                    tiers: (E = {}, Object(Z.default)(E, Q.k.FREE, {
                        value: !1
                    }), Object(Z.default)(E, Q.k.BASIC, {
                        value: !1
                    }), Object(Z.default)(E, Q.k.STANDARD, {
                        value: !1
                    }), Object(Z.default)(E, Q.k.PRO, {
                        value: !1
                    }), Object(Z.default)(E, Q.k.ENTERPRISE, {
                        value: !0
                    }), E)
                },
                Je = {
                    name: "pricingPage.features.titles.content_directory",
                    description: "pricingPage.features.descriptions.content_directory",
                    tiers: (O = {}, Object(Z.default)(O, Q.k.FREE, {
                        value: !1
                    }), Object(Z.default)(O, Q.k.BASIC, {
                        value: !1
                    }), Object(Z.default)(O, Q.k.STANDARD, {
                        value: !1
                    }), Object(Z.default)(O, Q.k.PRO, {
                        value: !1
                    }), Object(Z.default)(O, Q.k.ENTERPRISE, {
                        value: !0
                    }), O)
                },
                $e = {
                    name: "pricingPage.features.titles.teams_inside_teams",
                    description: "pricingPage.features.descriptions.teams_inside_teams",
                    tiers: ie
                },
                et = {
                    name: "pricingPage.features.titles.custom_roles",
                    description: "pricingPage.features.descriptions.custom_roles",
                    tiers: ie
                },
                tt = {
                    name: "pricingPage.features.titles.seats_management",
                    description: "pricingPage.features.descriptions.seats_management",
                    tiers: ie
                },
                rt = {
                    name: "pricingPage.features.titles.tenant_restrictions",
                    description: "pricingPage.features.descriptions.tenant_restrictions",
                    tiers: ie
                },
                nt = {
                    name: "pricingPage.features.titles.approved_guest",
                    description: "pricingPage.features.descriptions.approved_guest",
                    tiers: ie
                },
                it = {
                    name: "pricingPage.features.titles.block_domains",
                    description: "pricingPage.features.descriptions.block_domains",
                    tiers: ie
                },
                at = function(e) {
                    var t, r = e.hasStudentPlan;
                    return {
                        name: "pricingPage.features.titles.formsCustomization",
                        description: "pricingPage.features.descriptions.formsCustomization",
                        tiers: (t = {}, Object(Z.default)(t, Q.k.FREE, r ? {
                            value: !0
                        } : {
                            value: !1
                        }), Object(Z.default)(t, Q.k.BASIC, {
                            value: !1
                        }), Object(Z.default)(t, Q.k.STANDARD, {
                            value: !0
                        }), Object(Z.default)(t, Q.k.PRO, {
                            value: !0
                        }), Object(Z.default)(t, Q.k.ENTERPRISE, {
                            value: !0
                        }), t)
                    }
                },
                st = {
                    name: "pricingPage.features.titles.twoWayEmailSync",
                    description: "pricingPage.features.descriptions.twoWayEmailSync",
                    tiers: (b = {}, Object(Z.default)(b, Q.k.FREE, {
                        value: !1
                    }), Object(Z.default)(b, Q.k.BASIC, {
                        value: !1
                    }), Object(Z.default)(b, Q.k.STANDARD, {
                        value: !0
                    }), Object(Z.default)(b, Q.k.PRO, {
                        value: !0
                    }), Object(Z.default)(b, Q.k.ENTERPRISE, {
                        value: !0
                    }), b)
                },
                ut = {
                    name: "pricingPage.features.titles.commissionManagement",
                    description: "pricingPage.features.descriptions.commissionManagement",
                    tiers: (_ = {}, Object(Z.default)(_, Q.k.FREE, {
                        value: !1
                    }), Object(Z.default)(_, Q.k.BASIC, {
                        value: !1
                    }), Object(Z.default)(_, Q.k.STANDARD, {
                        value: !1
                    }), Object(Z.default)(_, Q.k.PRO, {
                        value: !0
                    }), Object(Z.default)(_, Q.k.ENTERPRISE, {
                        value: !0
                    }), _)
                },
                ct = {
                    name: "pricingPage.features.titles.advancedCustomerProjectManagement",
                    description: "pricingPage.features.descriptions.advancedCustomerProjectManagement",
                    tiers: (P = {}, Object(Z.default)(P, Q.k.FREE, {
                        value: !1
                    }), Object(Z.default)(P, Q.k.BASIC, {
                        value: !1
                    }), Object(Z.default)(P, Q.k.STANDARD, {
                        value: !1
                    }), Object(Z.default)(P, Q.k.PRO, {
                        value: !0
                    }), Object(Z.default)(P, Q.k.ENTERPRISE, {
                        value: !0
                    }), P)
                },
                ot = {
                    name: "pricingPage.features.titles.workload",
                    description: "pricingPage.features.descriptions.workload",
                    tiers: (m = {}, Object(Z.default)(m, Q.k.FREE, {
                        value: !1
                    }), Object(Z.default)(m, Q.k.BASIC, {
                        value: !1
                    }), Object(Z.default)(m, Q.k.STANDARD, {
                        value: !1
                    }), Object(Z.default)(m, Q.k.PRO, {
                        value: !0
                    }), Object(Z.default)(m, Q.k.ENTERPRISE, {
                        value: !0
                    }), m)
                },
                dt = {
                    name: "pricingPage.features.titles.timeTracking",
                    description: "pricingPage.features.descriptions.timeTracking",
                    tiers: (S = {}, Object(Z.default)(S, Q.k.FREE, {
                        value: !1
                    }), Object(Z.default)(S, Q.k.BASIC, {
                        value: !1
                    }), Object(Z.default)(S, Q.k.STANDARD, {
                        value: !1
                    }), Object(Z.default)(S, Q.k.PRO, {
                        value: !0
                    }), Object(Z.default)(S, Q.k.ENTERPRISE, {
                        value: !0
                    }), S)
                },
                lt = function(e) {
                    var t, r = e.hasStudentPlan;
                    return {
                        name: "pricingPage.features.titles.chartView",
                        description: "pricingPage.features.descriptions.chartView",
                        tiers: (t = {}, Object(Z.default)(t, Q.k.FREE, r ? {
                            value: !0
                        } : {
                            value: !1
                        }), Object(Z.default)(t, Q.k.BASIC, {
                            value: !1
                        }), Object(Z.default)(t, Q.k.STANDARD, {
                            value: !1
                        }), Object(Z.default)(t, Q.k.PRO, {
                            value: !0
                        }), Object(Z.default)(t, Q.k.ENTERPRISE, {
                            value: !0
                        }), t)
                    }
                },
                ft = function(e) {
                    var t, r = e.hasStudentPlan;
                    return {
                        name: "pricingPage.features.titles.formula",
                        description: "pricingPage.features.descriptions.formula",
                        tiers: (t = {}, Object(Z.default)(t, Q.k.FREE, r ? {
                            value: !0
                        } : {
                            value: !1
                        }), Object(Z.default)(t, Q.k.BASIC, {
                            value: !1
                        }), Object(Z.default)(t, Q.k.STANDARD, {
                            value: !1
                        }), Object(Z.default)(t, Q.k.PRO, {
                            value: !0
                        }), Object(Z.default)(t, Q.k.ENTERPRISE, {
                            value: !0
                        }), t)
                    }
                },
                pt = {
                    name: "pricingPage.features.titles.dependencyColumn",
                    description: "pricingPage.features.descriptions.dependencyColumn",
                    tiers: (T = {}, Object(Z.default)(T, Q.k.FREE, {
                        value: !1
                    }), Object(Z.default)(T, Q.k.BASIC, {
                        value: !1
                    }), Object(Z.default)(T, Q.k.STANDARD, {
                        value: !1
                    }), Object(Z.default)(T, Q.k.PRO, {
                        value: !0
                    }), Object(Z.default)(T, Q.k.ENTERPRISE, {
                        value: !0
                    }), T)
                },
                gt = {
                    name: "pricingPage.features.titles.tags",
                    description: "pricingPage.features.descriptions.tags",
                    tiers: (A = {}, Object(Z.default)(A, Q.k.FREE, {
                        value: !1
                    }), Object(Z.default)(A, Q.k.BASIC, {
                        value: !1
                    }), Object(Z.default)(A, Q.k.STANDARD, {
                        value: !1
                    }), Object(Z.default)(A, Q.k.PRO, {
                        value: !0
                    }), Object(Z.default)(A, Q.k.ENTERPRISE, {
                        value: !0
                    }), A)
                },
                Et = {
                    name: "pricingPage.features.titles.privateBoards",
                    description: "pricingPage.features.descriptions.privateBoards",
                    tiers: (I = {}, Object(Z.default)(I, Q.k.FREE, {
                        value: !1
                    }), Object(Z.default)(I, Q.k.BASIC, {
                        value: !1
                    }), Object(Z.default)(I, Q.k.STANDARD, {
                        value: !1
                    }), Object(Z.default)(I, Q.k.PRO, {
                        value: !0
                    }), Object(Z.default)(I, Q.k.ENTERPRISE, {
                        value: !0
                    }), I)
                },
                Ot = {
                    name: "pricingPage.features.titles.integrations",
                    description: "pricingPage.features.descriptions.integrations",
                    tiers: se
                },
                bt = {
                    name: "pricingPage.features.titles.automations",
                    description: "pricingPage.features.descriptions.automations",
                    tiers: (R = {}, Object(Z.default)(R, Q.k.FREE, {
                        value: !1
                    }), Object(Z.default)(R, Q.k.BASIC, {
                        value: !1
                    }), Object(Z.default)(R, Q.k.STANDARD, {
                        value: "pricingPage.features.plans.automations_standard"
                    }), Object(Z.default)(R, Q.k.PRO, {
                        value: "pricingPage.features.plans.automations_pro"
                    }), Object(Z.default)(R, Q.k.ENTERPRISE, {
                        value: "pricingPage.features.plans.automations_enterprise"
                    }), R)
                },
                _t = {
                    name: "pricingPage.features.titles.premiumIntegrations",
                    description: "pricingPage.features.descriptions.premiumIntegrations",
                    tiers: (N = {}, Object(Z.default)(N, Q.k.FREE, {
                        value: !1
                    }), Object(Z.default)(N, Q.k.BASIC, {
                        value: !1
                    }), Object(Z.default)(N, Q.k.STANDARD, {
                        value: !1
                    }), Object(Z.default)(N, Q.k.PRO, {
                        value: !1
                    }), Object(Z.default)(N, Q.k.ENTERPRISE, {
                        value: !0
                    }), N)
                },
                Pt = function(e) {
                    var t = e.hasStudentPlan;
                    return {
                        name: "pricingPage.features.titles.dashboards",
                        description: "pricingPage.features.descriptions.dashboards",
                        tiers: Oe(Oe({}, oe), {}, Object(Z.default)({}, Q.k.FREE, t ? {
                            value: "pricingPage.features.plans.dashboards_pro"
                        } : {
                            value: "pricingPage.features.plans.dashboards_basic"
                        }))
                    }
                },
                mt = {
                    name: "pricingPage.features.titles.twoFa",
                    description: "pricingPage.features.descriptions.twoFa",
                    tiers: ne
                },
                St = {
                    name: "pricingPage.features.titles.google",
                    description: "pricingPage.features.descriptions.google",
                    tiers: (v = {}, Object(Z.default)(v, Q.k.FREE, {
                        value: !1
                    }), Object(Z.default)(v, Q.k.BASIC, {
                        value: !1
                    }), Object(Z.default)(v, Q.k.STANDARD, {
                        value: !1
                    }), Object(Z.default)(v, Q.k.PRO, {
                        value: !0
                    }), Object(Z.default)(v, Q.k.ENTERPRISE, {
                        value: !0
                    }), v)
                },
                Tt = {
                    name: "pricingPage.features.titles.boardAdministrators",
                    description: "pricingPage.features.descriptions.boardAdministrators",
                    tiers: fe
                },
                At = {
                    name: "pricingPage.features.titles.saml",
                    description: "pricingPage.features.descriptions.saml",
                    tiers: (j = {}, Object(Z.default)(j, Q.k.FREE, {
                        value: !1
                    }), Object(Z.default)(j, Q.k.BASIC, {
                        value: !1
                    }), Object(Z.default)(j, Q.k.STANDARD, {
                        value: !1
                    }), Object(Z.default)(j, Q.k.PRO, {
                        value: !1
                    }), Object(Z.default)(j, Q.k.ENTERPRISE, {
                        value: !0
                    }), j)
                },
                It = {
                    name: "pricingPage.features.titles.scimProvisioning",
                    description: "pricingPage.features.descriptions.scimProvisioning",
                    tiers: (D = {}, Object(Z.default)(D, Q.k.FREE, {
                        value: !1
                    }), Object(Z.default)(D, Q.k.BASIC, {
                        value: !1
                    }), Object(Z.default)(D, Q.k.STANDARD, {
                        value: !1
                    }), Object(Z.default)(D, Q.k.PRO, {
                        value: !1
                    }), Object(Z.default)(D, Q.k.ENTERPRISE, {
                        value: !0
                    }), D)
                },
                Rt = {
                    name: "pricingPage.features.titles.auditLog",
                    description: "pricingPage.features.descriptions.auditLog",
                    tiers: (k = {}, Object(Z.default)(k, Q.k.FREE, {
                        value: !1
                    }), Object(Z.default)(k, Q.k.BASIC, {
                        value: !1
                    }), Object(Z.default)(k, Q.k.STANDARD, {
                        value: !1
                    }), Object(Z.default)(k, Q.k.PRO, {
                        value: !1
                    }), Object(Z.default)(k, Q.k.ENTERPRISE, {
                        value: !0
                    }), k)
                },
                Nt = {
                    name: "pricingPage.features.titles.sessions",
                    description: "pricingPage.features.descriptions.sessions",
                    tiers: (y = {}, Object(Z.default)(y, Q.k.FREE, {
                        value: !1
                    }), Object(Z.default)(y, Q.k.BASIC, {
                        value: !1
                    }), Object(Z.default)(y, Q.k.STANDARD, {
                        value: !1
                    }), Object(Z.default)(y, Q.k.PRO, {
                        value: !1
                    }), Object(Z.default)(y, Q.k.ENTERPRISE, {
                        value: !0
                    }), y)
                },
                vt = {
                    name: "pricingPage.features.titles.panicMode",
                    description: "pricingPage.features.descriptions.panicMode",
                    tiers: pe
                },
                jt = {
                    name: "pricingPage.features.titles.hipaa",
                    description: "pricingPage.features.descriptions.hipaa",
                    tiers: (M = {}, Object(Z.default)(M, Q.k.FREE, {
                        value: !1
                    }), Object(Z.default)(M, Q.k.BASIC, {
                        value: !1
                    }), Object(Z.default)(M, Q.k.STANDARD, {
                        value: !1
                    }), Object(Z.default)(M, Q.k.PRO, {
                        value: !1
                    }), Object(Z.default)(M, Q.k.ENTERPRISE, {
                        value: !0
                    }), M)
                },
                Dt = {
                    name: "pricingPage.features.titles.soc",
                    description: "pricingPage.features.descriptions.soc",
                    tiers: ne
                },
                kt = {
                    name: "pricingPage.features.titles.sla",
                    description: "pricingPage.features.descriptions.sla",
                    tiers: (h = {}, Object(Z.default)(h, Q.k.FREE, {
                        value: !1
                    }), Object(Z.default)(h, Q.k.BASIC, {
                        value: !1
                    }), Object(Z.default)(h, Q.k.STANDARD, {
                        value: !1
                    }), Object(Z.default)(h, Q.k.PRO, {
                        value: !1
                    }), Object(Z.default)(h, Q.k.ENTERPRISE, {
                        value: !0
                    }), h)
                },
                yt = {
                    name: "pricingPage.features.titles.csManager",
                    description: "pricingPage.features.descriptions.csManager",
                    tiers: (C = {}, Object(Z.default)(C, Q.k.FREE, {
                        value: !1
                    }), Object(Z.default)(C, Q.k.BASIC, {
                        value: !1
                    }), Object(Z.default)(C, Q.k.STANDARD, {
                        value: !1
                    }), Object(Z.default)(C, Q.k.PRO, {
                        value: !1
                    }), Object(Z.default)(C, Q.k.ENTERPRISE, {
                        value: !0
                    }), C)
                },
                Mt = {
                    name: "pricingPage.features.titles.integrationPermissions",
                    description: "pricingPage.features.descriptions.integrationPermissions",
                    tiers: (x = {}, Object(Z.default)(x, Q.k.FREE, {
                        value: !1
                    }), Object(Z.default)(x, Q.k.BASIC, {
                        value: !1
                    }), Object(Z.default)(x, Q.k.STANDARD, {
                        value: !1
                    }), Object(Z.default)(x, Q.k.PRO, {
                        value: !1
                    }), Object(Z.default)(x, Q.k.ENTERPRISE, {
                        value: !0
                    }), x)
                },
                ht = {
                    name: "pricingPage.features.titles.salesforceIntegration",
                    description: "pricingPage.features.descriptions.salesforceIntegration",
                    tiers: (L = {}, Object(Z.default)(L, Q.k.FREE, {
                        value: !1
                    }), Object(Z.default)(L, Q.k.BASIC, {
                        value: !1
                    }), Object(Z.default)(L, Q.k.STANDARD, {
                        value: !1
                    }), Object(Z.default)(L, Q.k.PRO, {
                        value: !1
                    }), Object(Z.default)(L, Q.k.ENTERPRISE, {
                        value: !0
                    }), L)
                },
                Ct = {
                    name: "pricingPage.features.titles.privateWorkspaces",
                    description: "pricingPage.features.descriptions.privateWorkspaces",
                    tiers: (U = {}, Object(Z.default)(U, Q.k.FREE, {
                        value: !1
                    }), Object(Z.default)(U, Q.k.BASIC, {
                        value: !1
                    }), Object(Z.default)(U, Q.k.STANDARD, {
                        value: !1
                    }), Object(Z.default)(U, Q.k.PRO, {
                        value: !1
                    }), Object(Z.default)(U, Q.k.ENTERPRISE, {
                        value: !0
                    }), U)
                },
                xt = {
                    name: "pricingPage.features.titles.accountPermissions",
                    description: "pricingPage.features.descriptions.accountPermissions",
                    tiers: (G = {}, Object(Z.default)(G, Q.k.FREE, {
                        value: !1
                    }), Object(Z.default)(G, Q.k.BASIC, {
                        value: !1
                    }), Object(Z.default)(G, Q.k.STANDARD, {
                        value: !1
                    }), Object(Z.default)(G, Q.k.PRO, {
                        value: !1
                    }), Object(Z.default)(G, Q.k.ENTERPRISE, {
                        value: !0
                    }), G)
                },
                Lt = {
                    name: "pricingPage.features.titles.workPerformanceInsights",
                    description: "pricingPage.features.descriptions.workPerformanceInsights",
                    tiers: (B = {}, Object(Z.default)(B, Q.k.FREE, {
                        value: !1
                    }), Object(Z.default)(B, Q.k.BASIC, {
                        value: !1
                    }), Object(Z.default)(B, Q.k.STANDARD, {
                        value: !1
                    }), Object(Z.default)(B, Q.k.PRO, {
                        value: !1
                    }), Object(Z.default)(B, Q.k.ENTERPRISE, {
                        value: !0
                    }), B)
                },
                Ut = {
                    name: "pricingPage.features.titles.dashboardEmailNotifications",
                    description: "pricingPage.features.descriptions.dashboardEmailNotifications",
                    tiers: le
                },
                Gt = {
                    name: "pricingPage.features.titles.pivotAnalysis",
                    description: "pricingPage.features.descriptions.pivotAnalysis",
                    tiers: (w = {}, Object(Z.default)(w, Q.k.FREE, {
                        value: !1
                    }), Object(Z.default)(w, Q.k.BASIC, {
                        value: !1
                    }), Object(Z.default)(w, Q.k.STANDARD, {
                        value: !1
                    }), Object(Z.default)(w, Q.k.PRO, {
                        value: !1
                    }), Object(Z.default)(w, Q.k.ENTERPRISE, {
                        value: !0
                    }), w)
                },
                Bt = {
                    name: "pricingPage.features.titles.knowledgeBase",
                    description: "pricingPage.features.descriptions.knowledgeBase",
                    tiers: ne
                },
                wt = {
                    name: "pricingPage.features.titles.emailSupport",
                    description: "pricingPage.features.descriptions.emailSupport",
                    tiers: ne
                },
                Ft = {
                    name: "pricingPage.features.titles.tailoredOnboarding",
                    description: "pricingPage.features.descriptions.tailoredOnboarding",
                    tiers: (F = {}, Object(Z.default)(F, Q.k.FREE, {
                        value: !1
                    }), Object(Z.default)(F, Q.k.BASIC, {
                        value: !1
                    }), Object(Z.default)(F, Q.k.STANDARD, {
                        value: !1
                    }), Object(Z.default)(F, Q.k.PRO, {
                        value: !1
                    }), Object(Z.default)(F, Q.k.ENTERPRISE, {
                        value: !0
                    }), F)
                },
                Vt = {
                    name: "pricingPage.features.titles.unlimitedViewers",
                    description: "pricingPage.features.descriptions.viewers",
                    tiers: (V = {}, Object(Z.default)(V, Q.k.FREE, {
                        value: !1
                    }), Object(Z.default)(V, Q.k.BASIC, {
                        value: !0
                    }), Object(Z.default)(V, Q.k.STANDARD, {
                        value: !0
                    }), Object(Z.default)(V, Q.k.PRO, {
                        value: !0
                    }), Object(Z.default)(V, Q.k.ENTERPRISE, {
                        value: !0
                    }), V)
                },
                Ht = {
                    name: "pricingPage.features.titles.unlimitedBoards",
                    description: "pricingPage.features.descriptions.boards",
                    tiers: ne
                },
                Wt = {
                    name: "pricingPage.features.titles.unlimitedDocs",
                    description: "pricingPage.features.descriptions.docs",
                    tiers: ne
                },
                Kt = function(e) {
                    var t, r = e.cookies,
                        n = void 0 === r ? {} : r;
                    return {
                        name: "pricingPage.features.titles.columnTypes",
                        description: "pricingPage.features.descriptions.columnTypes",
                        tiers: (t = {}, Object(Z.default)(t, Q.k.FREE, {
                            value: Object(re.d)({
                                cookies: n
                            })
                        }), Object(Z.default)(t, Q.k.BASIC, {
                            value: !0
                        }), Object(Z.default)(t, Q.k.STANDARD, {
                            value: !0
                        }), Object(Z.default)(t, Q.k.PRO, {
                            value: !0
                        }), Object(Z.default)(t, Q.k.ENTERPRISE, {
                            value: !0
                        }), t)
                    }
                },
                Yt = {
                    name: "pricingPage.features.titles.maximumSeats",
                    description: "pricingPage.features.descriptions.maximumSeats",
                    tiers: (H = {}, Object(Z.default)(H, Q.k.FREE, {
                        value: {
                            key: "pricingPage.upToXSeats",
                            param: Q.b
                        }
                    }), Object(Z.default)(H, Q.k.BASIC, {
                        value: "pricingPage.features.plans.unlimited"
                    }), Object(Z.default)(H, Q.k.STANDARD, {
                        value: "pricingPage.features.plans.unlimited"
                    }), Object(Z.default)(H, Q.k.PRO, {
                        value: "pricingPage.features.plans.unlimited"
                    }), Object(Z.default)(H, Q.k.ENTERPRISE, {
                        value: "pricingPage.features.plans.unlimited"
                    }), H)
                },
                Xt = {
                    name: "pricingPage.features.titles.mobile",
                    description: "pricingPage.features.descriptions.mobile",
                    tiers: ne
                },
                qt = function(e) {
                    var t = e.cookies,
                        r = e.abTests;
                    return Object(ge.shouldShowBiggerStorageInPricingFeatures)(r, t, !1) ? Zt : zt
                },
                zt = {
                    name: "pricingPage.features.titles.storage",
                    id: Q.a.STORAGE,
                    description: "pricingPage.features.descriptions.storage",
                    onVisible: {
                        callback: function(e) {
                            var t = e.abTests,
                                r = e.cookies;
                            return Object(ge.shouldShowBiggerStorageInPricingFeatures)(t, r, !0)
                        },
                        onlyOnce: !0
                    },
                    tiers: (W = {}, Object(Z.default)(W, Q.k.FREE, {
                        value: "pricingPage.features.plans.storage_free"
                    }), Object(Z.default)(W, Q.k.BASIC, {
                        value: "pricingPage.features.plans.storage_basic"
                    }), Object(Z.default)(W, Q.k.STANDARD, {
                        value: "pricingPage.features.plans.storage_standard"
                    }), Object(Z.default)(W, Q.k.PRO, {
                        value: "pricingPage.features.plans.storage_pro"
                    }), Object(Z.default)(W, Q.k.ENTERPRISE, {
                        value: "pricingPage.features.plans.storage_enterprise"
                    }), W)
                },
                Zt = {
                    name: "pricingPage.features.titles.storage",
                    description: "pricingPage.features.descriptions.storage",
                    id: Q.a.STORAGE,
                    onVisible: {
                        callback: function(e) {
                            var t = e.abTests,
                                r = e.cookies;
                            return Object(ge.shouldShowBiggerStorageInPricingFeatures)(t, r, !0)
                        },
                        onlyOnce: !0
                    },
                    tiers: (K = {}, Object(Z.default)(K, Q.k.FREE, {
                        value: "pricingPage.features.plans.storage_free"
                    }), Object(Z.default)(K, Q.k.BASIC, {
                        value: "pricingPage.features.plans.storage_basic"
                    }), Object(Z.default)(K, Q.k.STANDARD, {
                        value: "pricingPage.features.plans.storage_standard"
                    }), Object(Z.default)(K, Q.k.PRO, {
                        value: "pricingPage.features.plans.storage_pro_bigger"
                    }), Object(Z.default)(K, Q.k.ENTERPRISE, {
                        value: "pricingPage.features.plans.storage_enterprise_bigger"
                    }), K)
                },
                Qt = {
                    name: "pricingPage.features.titles.activityLog",
                    description: "pricingPage.features.descriptions.activityLog",
                    tiers: (Y = {}, Object(Z.default)(Y, Q.k.FREE, {
                        value: "pricingPage.features.plans.one_week"
                    }), Object(Z.default)(Y, Q.k.BASIC, {
                        value: "pricingPage.features.plans.one_week"
                    }), Object(Z.default)(Y, Q.k.STANDARD, {
                        value: "pricingPage.features.plans.six_months"
                    }), Object(Z.default)(Y, Q.k.PRO, {
                        value: "pricingPage.features.plans.one_year"
                    }), Object(Z.default)(Y, Q.k.ENTERPRISE, {
                        value: "pricingPage.features.plans.five_years"
                    }), Y)
                },
                Jt = {
                    name: "pricingPage.features.titles.advancedColumnTypes",
                    description: "pricingPage.features.descriptions.columnTypes",
                    tiers: (X = {}, Object(Z.default)(X, Q.k.FREE, {
                        value: !1
                    }), Object(Z.default)(X, Q.k.BASIC, {
                        value: !0
                    }), Object(Z.default)(X, Q.k.STANDARD, {
                        value: !0
                    }), Object(Z.default)(X, Q.k.PRO, {
                        value: !0
                    }), Object(Z.default)(X, Q.k.ENTERPRISE, {
                        value: !0
                    }), X)
                },
                $t = {
                    name: "pricingPage.features.titles.viewers",
                    description: "pricingPage.features.descriptions.viewers",
                    tiers: (q = {}, Object(Z.default)(q, Q.k.FREE, {
                        value: !1
                    }), Object(Z.default)(q, Q.k.BASIC, {
                        value: !0
                    }), Object(Z.default)(q, Q.k.STANDARD, {
                        value: !0
                    }), Object(Z.default)(q, Q.k.PRO, {
                        value: !0
                    }), Object(Z.default)(q, Q.k.ENTERPRISE, {
                        value: !0
                    }), q)
                },
                er = {
                    name: "pricingPage.features.titles.boards",
                    description: "pricingPage.features.descriptions.boards",
                    tiers: (z = {}, Object(Z.default)(z, Q.k.FREE, {
                        value: "pricingPage.features.plans.unlimited"
                    }), Object(Z.default)(z, Q.k.BASIC, {
                        value: "pricingPage.features.plans.unlimited"
                    }), Object(Z.default)(z, Q.k.STANDARD, {
                        value: "pricingPage.features.plans.unlimited"
                    }), Object(Z.default)(z, Q.k.PRO, {
                        value: "pricingPage.features.plans.unlimited"
                    }), Object(Z.default)(z, Q.k.ENTERPRISE, {
                        value: "pricingPage.features.plans.unlimited"
                    }), z)
                },
                tr = function(e) {
                    e.abTests;
                    var t, r = e.cookies;
                    return {
                        name: "pricingPage.features.titles.items",
                        description: {
                            key: "pricingPage.features.descriptions.items",
                            param: te(0, r)
                        },
                        tiers: (t = {}, Object(Z.default)(t, Q.k.FREE, {
                            value: "pricingPage.features.plans.upToOneK"
                        }), Object(Z.default)(t, Q.k.BASIC, {
                            value: "pricingPage.features.plans.unlimited"
                        }), Object(Z.default)(t, Q.k.STANDARD, {
                            value: "pricingPage.features.plans.unlimited"
                        }), Object(Z.default)(t, Q.k.PRO, {
                            value: "pricingPage.features.plans.unlimited"
                        }), Object(Z.default)(t, Q.k.ENTERPRISE, {
                            value: "pricingPage.features.plans.unlimited"
                        }), t)
                    }
                },
                rr = function(e) {
                    var t, r = e.cookies,
                        n = void 0 === r ? {} : r,
                        i = e.abTests,
                        a = void 0 === i ? [] : i;
                    return {
                        name: "pricingPage.features.titles.unlimitedBoards",
                        description: "pricingPage.features.descriptions.boards",
                        tiers: (t = {}, Object(Z.default)(t, Q.k.FREE, {
                            value: Object(re.e)({
                                cookies: n,
                                abTests: a
                            })
                        }), Object(Z.default)(t, Q.k.BASIC, {
                            value: !0
                        }), Object(Z.default)(t, Q.k.STANDARD, {
                            value: !0
                        }), Object(Z.default)(t, Q.k.PRO, {
                            value: !0
                        }), Object(Z.default)(t, Q.k.ENTERPRISE, {
                            value: !0
                        }), t)
                    }
                }
        },
        YGBs: function(e, t, r) {
            "use strict";
            r.d(t, "a", (function() {
                return N
            })), r.d(t, "b", (function() {
                return v
            })), r.d(t, "c", (function() {
                return j
            })), r.d(t, "d", (function() {
                return k
            }));
            var n = r("Pr/7"),
                i = r("1BgC"),
                a = r("aIIR"),
                s = r("XqsQ"),
                u = r("QHCa"),
                c = r("MX0m"),
                o = r.n(c),
                d = r("TSYQ"),
                l = r.n(d),
                f = [".price-with-currency.jsx-3469352237{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;}", ".price-with-currency.jsx-3469352237 .currency-sign-and-text.jsx-3469352237{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-right:2%;margin-bottom:3%;}", ".price-with-currency.jsx-3469352237 .currency-sign-and-text.jsx-3469352237 .currency-sign.jsx-3469352237{font-size:0.65em;}", ".price-with-currency.jsx-3469352237 .currency-sign-and-text.jsx-3469352237 .currency-text.jsx-3469352237{font-size:0.2em;font-weight:bold;}"];
            f.__hash = "3469352237";
            var p = r("nKUr"),
                g = function(e) {
                    var t = e.price,
                        r = e.currency,
                        n = e.currencySign,
                        i = e.className;
                    return Object(p.jsxs)("span", {
                        className: "jsx-".concat(f.__hash) + " price-with-currency",
                        children: [Object(p.jsxs)("span", {
                            className: "jsx-".concat(f.__hash) + " currency-sign-and-text",
                            children: [Object(p.jsx)("div", {
                                className: "jsx-".concat(f.__hash) + " " + (l()("currency-sign", i) || ""),
                                children: n
                            }), Object(p.jsx)("div", {
                                className: "jsx-".concat(f.__hash) + " " + (l()("currency-text", i) || ""),
                                children: r.toUpperCase()
                            })]
                        }), Object(p.jsx)("span", {
                            className: "jsx-".concat(f.__hash) + " " + (i || ""),
                            children: t
                        }), Object(p.jsx)(o.a, {
                            id: f.__hash,
                            children: f
                        })]
                    })
                },
                E = [s.FRENCH_LOCALE_ID, s.GERMAN_LOCALE_ID],
                O = ["ad", "at", "be", "cy", "ee", "fi", "fr", "de", "gr", "ie", "it", "lv", "lt", "lu", "mt", "mc", "me", "nl", "pt", "sm", "sk", "si", "es", "al", "bh", "by", "ba", "bg", "hr", "cz", "dk", "eg", "fo", "ge", "gi", "hu", "is", "jo", "kw", "li", "mk", "md", "ma", "no", "om", "pl", "qa", "ro", "rs", "se", "ch", "sa", "tn", "tr", "ug", "ua", "ae", "va", "ye"],
                b = ["gb", "je", "gg", "im", "gs", "uk"],
                _ = ["ca"],
                P = ["au"],
                m = ["mx"],
                S = ["br"],
                T = ["jp"],
                A = function(e) {
                    Object(n.e)(i.CURRENCY_COOKIE_NAME, e)
                },
                I = function(e, t, r) {
                    return e || (r ? function(e) {
                        if (e) {
                            var t = e.toLowerCase();
                            return O.indexOf(t) > -1 ? (A("eur"), "eur") : b.indexOf(t) > -1 ? (A("gbp"), "gbp") : _.indexOf(t) > -1 ? (A("cad"), "cad") : P.indexOf(t) > -1 ? (A("aud"), "aud") : m.indexOf(t) > -1 ? (A("mxn"), "mxn") : S.indexOf(t) > -1 ? (A("brl"), "brl") : T.indexOf(t) > -1 ? (A("jpy"), "jpy") : (A("usd"), "usd")
                        }
                    }(r) : (null === t || void 0 === t ? void 0 : t.defaultCurrency) || "usd")
                },
                R = function(e) {
                    return a.j.filter((function(t) {
                        return t.name === e
                    }))[0]
                },
                N = function(e) {
                    var t = e.forceCurrency,
                        r = e.pricingDefaults,
                        n = void 0 === r ? {} : r,
                        i = e.countryCode,
                        s = I(t, n, i);
                    return a.j.filter((function(e) {
                        return e.currencyShortText.toLowerCase() === s.toLowerCase()
                    }))[0].name
                },
                v = function(e) {
                    return R(e).currencySign
                },
                j = function(e) {
                    var t = e.price,
                        r = e.currency,
                        n = e.localeId,
                        i = void 0 === n ? s.ENGLISH_LOCALE_ID : n,
                        a = e.hideCurrency,
                        u = void 0 !== a && a,
                        c = e.className;
                    if (u) return t;
                    var o = v(r),
                        d = E.includes(i);
                    return !u && function(e) {
                        switch (e.toLowerCase()) {
                            case "cad":
                            case "aud":
                            case "mxn":
                                return !0;
                            default:
                                return !1
                        }
                    }(r) ? Object(p.jsx)(g, {
                        price: t,
                        currency: r,
                        currencySign: o,
                        className: c
                    }) : d ? "".concat(t, " ").concat(o) : "".concat(o).concat(t)
                },
                D = function(e) {
                    var t, r, n = e.clusterConfig,
                        i = e.abTests,
                        a = e.cookies,
                        s = e.forcePricing;
                    return Object(u.d)(n, {
                        abTests: i,
                        cookies: a,
                        forcePricing: s
                    }) && (null === n || void 0 === n || null === (t = n.payments_view) || void 0 === t || null === (r = t.pricing) || void 0 === r ? void 0 : r.contact_us_threshold) || 50
                },
                k = function(e, t) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    return e === a.k.ENTERPRISE || t.includes("+") || Number(t) >= D(r)
                }
        },
        ZfCQ: function(e, t, r) {
            "use strict";
            r.d(t, "a", (function() {
                return A
            })), r.d(t, "b", (function() {
                return I
            })), r.d(t, "c", (function() {
                return R
            }));
            var n = r("cpVT"),
                i = r("h12S"),
                a = r.n(i),
                s = r("n/Sm"),
                u = r("H+61"),
                c = r("UlJF"),
                o = r("7LId"),
                d = r("VIvw"),
                l = r("iHvq"),
                f = r("E+oP"),
                p = r.n(f),
                g = r("QHCa"),
                E = r("aIIR"),
                O = r("q6Ym"),
                b = r("sXdA"),
                _ = function() {
                    function e() {
                        Object(u.default)(this, e)
                    }
                    return Object(c.default)(e, [{
                        key: "getPlanPrice",
                        value: function(e, t, r, n, i, a, s, u, c) {
                            var o = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
                                d = this.getPrices({
                                    pricingVersion: i
                                });
                            if (e === E.k.FREE) return 0;
                            var l = Object(O.b)(d[r][e][t], n, a, s, u, c),
                                f = Object(b.b)(a, s, u, c) ? 12 * l : l;
                            return o ? f : Object(O.a)(f, e, r, a, s, u, c)
                        }
                    }, {
                        key: "shouldShowUserOptions",
                        value: function() {
                            return !0
                        }
                    }, {
                        key: "getDefaultUserOption",
                        value: function() {
                            return "0"
                        }
                    }, {
                        key: "getUserOptions",
                        value: function() {
                            return {}
                        }
                    }, {
                        key: "getPrices",
                        value: function() {
                            return []
                        }
                    }]), e
                }(),
                P = r("SxRa");

            function m(e) {
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
                    var r, n = Object(l.default)(e);
                    if (t) {
                        var i = Object(l.default)(this).constructor;
                        r = Reflect.construct(n, arguments, i)
                    } else r = n.apply(this, arguments);
                    return Object(d.default)(this, r)
                }
            }
            var S = function(e) {
                    Object(o.default)(r, e);
                    var t = m(r);

                    function r() {
                        return Object(u.default)(this, r), t.apply(this, arguments)
                    }
                    return Object(c.default)(r, [{
                        key: "shouldShowUserOptions",
                        value: function() {
                            return !0
                        }
                    }, {
                        key: "getClusterUserOptions",
                        value: function() {
                            var e, t, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                n = r.clusterConfig,
                                i = r.abTests,
                                a = r.forcePricing,
                                s = r.cookies,
                                u = null === n || void 0 === n || null === (e = n.payments_view) || void 0 === e || null === (t = e.pricing) || void 0 === t ? void 0 : t.users_count_options;
                            if (!p()(n) && Object(g.d)(n, {
                                    abTests: i,
                                    forcePricing: a,
                                    cookies: s
                                })) return null === u || void 0 === u ? void 0 : u.all_options
                        }
                    }, {
                        key: "getDefaultUserOption",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                t = this.getClusterUserOptions(e);
                            return (null === t || void 0 === t ? void 0 : t.length) > 0 ? t[0] : "3"
                        }
                    }, {
                        key: "getUserOptions",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                t = this.getClusterUserOptions(e);
                            return (null === t || void 0 === t ? void 0 : t.length) > 0 ? t : ["3", "5", "10", "15", "20", "25", "30", "40", "50", "100", E.d]
                        }
                    }, {
                        key: "getPrices",
                        value: function(e) {
                            var t = e.pricingVersion,
                                r = void 0 === t ? a.a.DEFAULT_VERSION : t;
                            return P.a.core[r]
                        }
                    }]), r
                }(_),
                T = r("YGBs"),
                A = function(e) {
                    var t = Object(n.default)({}, a.a.VERSION_9, S);
                    return new(t[e] || t[a.a.DEFAULT_VERSION])
                },
                I = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.forcePricing,
                        r = e.cookies,
                        n = void 0 === r ? {} : r,
                        i = e.abTests,
                        u = void 0 === i ? [] : i,
                        c = e.currency,
                        o = e.isV12PricingVersion,
                        d = Object(s.j)({
                            cookies: n,
                            abTests: u,
                            forcePricing: t,
                            isV12PricingVersion: o
                        });
                    if (d) return a.a.VERSION_12;
                    var l = Object(s.i)({
                        cookies: n,
                        forcePricing: t,
                        currency: c
                    });
                    if (l) return a.a.VERSION_11;
                    var f = Object(s.h)({
                        cookies: n,
                        abTests: u,
                        forcePricing: t
                    });
                    return f ? a.a.VERSION_10 : a.a.DEFAULT_VERSION
                },
                R = function(e) {
                    var t = e.forcePricing,
                        r = e.cookies,
                        n = e.abTests,
                        i = e.forceCurrency,
                        a = e.countryCode,
                        s = Object(T.a)({
                            forceCurrency: i,
                            countryCode: a
                        });
                    return I({
                        forcePricing: t,
                        cookies: r,
                        abTests: n,
                        currency: s
                    })
                }
        },
        h12S: function(e, t) {
            var r = ["9", "10", "11", "12"];
            e.exports = {
                VERSION_9: "9",
                VERSION_10: "10",
                VERSION_11: "11",
                VERSION_12: "12",
                DEFAULT_VERSION: "9",
                ALLOWED_VERSIONS: r
            }
        },
        hTNa: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, "UNLIMITED_BOARDS", (function() {
                return i
            })), r.d(t, "UP_TO_THREE_BOARDS", (function() {
                return a
            })), r.d(t, "UNLIMITED_DOCS", (function() {
                return s
            })), r.d(t, "UNLIMITED_ITEMS", (function() {
                return u
            })), r.d(t, "FIVE_GB_STORAGE", (function() {
                return c
            })), r.d(t, "UP_TO_X_TEAM_MEMBERS", (function() {
                return o
            })), r.d(t, "PRIORITISED_CUSTOMER_SUPPORT", (function() {
                return d
            })), r.d(t, "OVER_200_TEMPLATES", (function() {
                return l
            })), r.d(t, "COLUMN_TYPES", (function() {
                return f
            })), r.d(t, "LIMITED_COLUMN_TYPES", (function() {
                return p
            })), r.d(t, "COMMUNICATION_WITH_CONTEXT", (function() {
                return g
            })), r.d(t, "FORMS", (function() {
                return E
            })), r.d(t, "KANBAN_VIEW", (function() {
                return O
            })), r.d(t, "WHITEBOARD", (function() {
                return b
            })), r.d(t, "MOBILE", (function() {
                return _
            })), r.d(t, "UNLIMITED_VIEWERS", (function() {
                return P
            })), r.d(t, "LEAD_MANAGEMENT", (function() {
                return m
            })), r.d(t, "UNLIMITED_PIPELINES", (function() {
                return S
            })), r.d(t, "UNLIMITED_CONTACTS", (function() {
                return T
            })), r.d(t, "UNLIMITED_CUSTOM_FIELDS", (function() {
                return A
            })), r.d(t, "FULL_MOBILE_CRM", (function() {
                return I
            })), r.d(t, "DOCUMENT_MANAGEMENT", (function() {
                return R
            })), r.d(t, "API_ACCESS", (function() {
                return N
            })), r.d(t, "SINGLE_DASHBOARD", (function() {
                return v
            })), r.d(t, "TIMELINE_AND_GANTT_VIEWS", (function() {
                return j
            })), r.d(t, "TIMELINE", (function() {
                return D
            })), r.d(t, "CALENDAR", (function() {
                return k
            })), r.d(t, "TIMELINE_AND_CALENDAR", (function() {
                return y
            })), r.d(t, "FILTERS", (function() {
                return M
            })), r.d(t, "SEARCH", (function() {
                return h
            })), r.d(t, "GUESTS", (function() {
                return C
            })), r.d(t, "EMAIL_INTEGRATION", (function() {
                return x
            })), r.d(t, "SALES_ANALYTICS", (function() {
                return L
            })), r.d(t, "MAILCHIMP_INTEGRATION", (function() {
                return U
            })), r.d(t, "SALES_GOALS", (function() {
                return G
            })), r.d(t, "STANDARD_DASHBOARDS", (function() {
                return B
            })), r.d(t, "STANDARD_AUTOMATIONS", (function() {
                return w
            })), r.d(t, "STANDARD_INTEGRATIONS", (function() {
                return F
            })), r.d(t, "PRIVATE_BOARDS", (function() {
                return V
            })), r.d(t, "BOARD_PERMISSIONS", (function() {
                return H
            })), r.d(t, "CHART_VIEW", (function() {
                return W
            })), r.d(t, "TIME_TRACKING", (function() {
                return K
            })), r.d(t, "FORMULA", (function() {
                return Y
            })), r.d(t, "DEPENDENCY", (function() {
                return X
            })), r.d(t, "UNLIMITED_GUESTS", (function() {
                return q
            })), r.d(t, "CUSTOMIZED_NOTIFICATIONS", (function() {
                return z
            })), r.d(t, "MARKETING_ACTIVITY_MANAGEMENT", (function() {
                return Z
            })), r.d(t, "ADVANCED_PERMISSIONS", (function() {
                return Q
            })), r.d(t, "WORKFLOW_AND_APPROVAL_AUTOMATION", (function() {
                return J
            })), r.d(t, "ADVANCED_REPORTS", (function() {
                return $
            })), r.d(t, "PRO_DASHBOARDS", (function() {
                return ee
            })), r.d(t, "PRO_AUTOMATIONS", (function() {
                return te
            })), r.d(t, "PRO_INTEGRATIONS", (function() {
                return re
            })), r.d(t, "ENTERPRISE_SCALE_AUTOMATIONS", (function() {
                return ne
            })), r.d(t, "ENTERPRISE_SPECIFIC_INTEGRATIONS", (function() {
                return ie
            })), r.d(t, "ENTERPRISE_GRADE_SECURITY", (function() {
                return ae
            })), r.d(t, "ADVANCED_REPORTING", (function() {
                return se
            })), r.d(t, "MULTI_LEVEL_PERMISSIONS", (function() {
                return ue
            })), r.d(t, "TAILORED_ONBOARDING", (function() {
                return ce
            })), r.d(t, "PREMIUM_SUPPORT", (function() {
                return oe
            })), r.d(t, "ENTERPRISE_DASHBOARDS", (function() {
                return de
            })), r.d(t, "MARKETING_TEMPLATES", (function() {
                return le
            })), r.d(t, "MARKETING_REQUESTS_WITH_FORMS", (function() {
                return fe
            })), r.d(t, "UNLIMITED_TEMPLATES", (function() {
                return pe
            })), r.d(t, "WORK_PERFORMANCE_INSIGHTS", (function() {
                return ge
            })), r.d(t, "ASSETS_AND_FILE_MANAGEMENT", (function() {
                return Ee
            })), r.d(t, "IMPORT_EXPORT_EXCEL", (function() {
                return Oe
            })), r.d(t, "SOCIAL_CALENDAR", (function() {
                return be
            })), r.d(t, "SHARE_INSIGHTS_WITH_GUESTS", (function() {
                return _e
            })), r.d(t, "MARKETING_ANALYTICS", (function() {
                return Pe
            })), r.d(t, "DEADLINE_MANAGEMENT", (function() {
                return me
            })), r.d(t, "CAMPAIGN_MANAGEMENT", (function() {
                return Se
            })), r.d(t, "HIGH_LEVEL_MARKETING_PLANNING", (function() {
                return Te
            })), r.d(t, "ADOBE_CREATIVE_CLOUD_PLUGIN", (function() {
                return Ae
            })), r.d(t, "UNLIMITED_PROJECTS_ITEMS_SUBITEMS", (function() {
                return Ie
            })), r.d(t, "UNLIMITED_SHAREABLE_FORMS", (function() {
                return Re
            })), r.d(t, "FILE_MANAGEMENT", (function() {
                return Ne
            })), r.d(t, "GANTT_CHARTS", (function() {
                return ve
            })), r.d(t, "CUSTOM_NOTIFICATIONS_AND_REMINDERS", (function() {
                return je
            })), r.d(t, "SIMPLE_PROJECT_PORTFOLIO_MANAGEMENT", (function() {
                return De
            })), r.d(t, "CALENDAR_SYNC", (function() {
                return ke
            })), r.d(t, "BASIC_ANALYTICS_AND_DASHBOARDS", (function() {
                return ye
            })), r.d(t, "TASK_AND_PROJECT_DEPENDENCIES", (function() {
                return Me
            })), r.d(t, "MILESTONES_MANAGEMENT", (function() {
                return he
            })), r.d(t, "RESOURCE_ALLOCATION", (function() {
                return Ce
            })), r.d(t, "POWERFUL_ANALYTICS_AND_DASHBOARDS", (function() {
                return xe
            })), r.d(t, "UNLIMITED_PRIVATE_BOARDS", (function() {
                return Le
            })), r.d(t, "ADVANCED_FORMULA_CAPABILITIES", (function() {
                return Ue
            })), r.d(t, "SLACK_MSTEAMS_TODOIST_INTEGRATIONS", (function() {
                return Ge
            })), r.d(t, "ADVANCED_PROJECT_PORTFOLIO_MANAGEMENT", (function() {
                return Be
            })), r.d(t, "ENTERPRISE_INTEGRATIONS", (function() {
                return we
            })), r.d(t, "SPRINT_MANAGEMENT", (function() {
                return Fe
            })), r.d(t, "KANBAN_MANAGEMENT", (function() {
                return Ve
            })), r.d(t, "DEV_TEMPLATES", (function() {
                return He
            })), r.d(t, "BUILT_IN_WORKOCS", (function() {
                return We
            })), r.d(t, "SHARABLE_DEV_BOARDS", (function() {
                return Ke
            })), r.d(t, "GIT_INTEGRATIONS", (function() {
                return Ye
            })), r.d(t, "AGILE_REPORTING", (function() {
                return Xe
            })), r.d(t, "DEV_FEEDBACK_FORMS", (function() {
                return qe
            }));
            var n = r("6gX7"),
                i = {
                    name: "pricingPage.features.titles.unlimitedBoards",
                    text: "pricingPage.features.descriptions.boards"
                },
                a = {
                    name: "pricingPage.features.titles.upTo3Boards",
                    text: "pricingPage.features.descriptions.boards"
                },
                s = {
                    name: "pricingPage.features.titles.unlimitedDocs",
                    text: "pricingPage.features.descriptions.docs"
                },
                u = {
                    name: "pricingPage.features.titles.unlimitedItems",
                    text: "pricingPage.features.descriptions.unlimitedItems"
                },
                c = {
                    name: "pricingPage.features.titles.fiveGBStorage",
                    text: "pricingPage.features.descriptions.storage"
                },
                o = function(e) {
                    return {
                        name: {
                            key: "pricingPage.features.titles.upToXMembers",
                            param: e
                        },
                        text: {
                            key: "pricingPage.features.descriptions.upToXMembers",
                            param: e
                        }
                    }
                },
                d = {
                    name: "pricingPage.features.titles.prioritisedCustomerSupport",
                    text: "pricingPage.features.descriptions.prioritisedCustomerSupport"
                },
                l = {
                    name: "pricingPage.features.titles.templates",
                    text: "pricingPage.features.descriptions.templates"
                },
                f = {
                    name: "pricingPage.features.titles.columnTypes",
                    text: "pricingPage.features.descriptions.columnTypes"
                },
                p = {
                    name: "pricingPage.features.titles.limitedColumnTypes",
                    text: "pricingPage.features.descriptions.columnTypes"
                },
                g = {
                    name: "pricingPage.features.titles.communication_with_context",
                    text: "pricingPage.features.descriptions.communication_with_context",
                    videoPath: "https://dapulse-res.cloudinary.com/video/upload/w_".concat(n.g, ",h_").concat(n.f, ",c_fit/remote_mondaycom_static/developers/features/Communication_-_updates.mp4")
                },
                E = {
                    name: "pricingPage.features.titles.forms.simple",
                    text: "pricingPage.features.descriptions.forms",
                    videoPath: "https://dapulse-res.cloudinary.com/video/upload/w_".concat(n.g, ",h_").concat(n.f, ",c_fit/remote_mondaycom_static/developers/features/Form.mp4")
                },
                O = {
                    name: "pricingPage.features.titles.kanbanView",
                    text: "pricingPage.features.descriptions.kanbanView"
                },
                b = {
                    name: "pricingPage.features.titles.whiteboard",
                    text: "pricingPage.features.descriptions.whiteboard"
                },
                _ = {
                    name: "pricingPage.features.titles.mobile",
                    text: "pricingPage.features.descriptions.mobile"
                },
                P = {
                    name: "pricingPage.features.titles.unlimitedViewers",
                    text: "pricingPage.features.descriptions.viewers"
                },
                m = {
                    name: "pricingPage.features.titles.leadManagement",
                    text: "pricingPage.features.descriptions.leadManagement"
                },
                S = {
                    name: "pricingPage.features.titles.unlimitedPipelines",
                    text: "pricingPage.features.descriptions.unlimitedPipelines"
                },
                T = {
                    name: "pricingPage.features.titles.unlimitedContacts",
                    text: "pricingPage.features.descriptions.unlimitedContacts"
                },
                A = {
                    name: "pricingPage.features.titles.unlimitedCustomFields",
                    text: "pricingPage.features.descriptions.unlimitedCustomFields"
                },
                I = {
                    name: "pricingPage.features.titles.fullMobileCRM",
                    text: "pricingPage.features.descriptions.fullMobileCRM"
                },
                R = {
                    name: "pricingPage.features.titles.documentManagement",
                    text: "pricingPage.features.descriptions.documentManagement"
                },
                N = {
                    name: "pricingPage.features.titles.apiAccess",
                    text: "pricingPage.features.descriptions.apiAccess"
                },
                v = {
                    name: "pricingPage.features.titles.basicDashboards",
                    text: "pricingPage.features.descriptions.dashboards"
                },
                j = {
                    name: "pricingPage.features.titles.timelineAndGanttView",
                    text: "pricingPage.features.descriptions.timelineAndGanttView"
                },
                D = {
                    name: "pricingPage.features.titles.timeline",
                    text: "pricingPage.features.descriptions.timeline"
                },
                k = {
                    name: "pricingPage.features.titles.calendar",
                    text: "pricingPage.features.descriptions.calendar"
                },
                y = {
                    name: "pricingPage.features.titles.timelineAndCalendarView",
                    text: "pricingPage.features.descriptions.timelineAndCalendarView",
                    videoPath: "https://dapulse-res.cloudinary.com/video/upload/w_".concat(n.g, ",h_").concat(n.f, "/remote_mondaycom_static/developers/features/Timeline_view.mp4")
                },
                M = {
                    name: "pricingPage.features.titles.filters",
                    text: "pricingPage.features.descriptions.filters"
                },
                h = {
                    name: "pricingPage.features.titles.search",
                    text: "pricingPage.features.descriptions.search"
                },
                C = {
                    name: "pricingPage.features.titles.guests",
                    text: "pricingPage.features.descriptions.guests"
                },
                x = {
                    name: "pricingPage.features.titles.emailIntegration",
                    text: "pricingPage.features.descriptions.emailIntegration"
                },
                L = {
                    name: "pricingPage.features.titles.salesAnalytics",
                    text: "pricingPage.features.descriptions.salesAnalytics"
                },
                U = {
                    name: "pricingPage.features.titles.mailchimpIntegration",
                    text: "pricingPage.features.descriptions.mailchimpIntegration"
                },
                G = {
                    name: "pricingPage.features.titles.salesGoals",
                    text: "pricingPage.features.descriptions.salesGoals"
                },
                B = {
                    name: "pricingPage.features.titles.standardDashboards",
                    text: "pricingPage.features.descriptions.dashboards",
                    videoPath: "https://dapulse-res.cloudinary.com/video/upload/w_".concat(n.g, ",h_").concat(n.f, ",c_fit/remote_mondaycom_static/developers/features/Dashboard_standard.mp4")
                },
                w = {
                    name: "pricingPage.valueFeatures.titles.automations.standard",
                    text: "pricingPage.features.descriptions.automations",
                    link: "https://support.monday.com/hc/en-us/articles/360002826680",
                    videoPath: "https://dapulse-res.cloudinary.com/video/upload/w_".concat(n.g, ",h_").concat(n.f, ",c_fit/remote_mondaycom_static/developers/features/Automations.mp4")
                },
                F = {
                    name: "pricingPage.valueFeatures.titles.integrations.standard",
                    text: "pricingPage.features.descriptions.integrations",
                    link: "https://support.monday.com/hc/en-us/articles/360002826680",
                    videoPath: "https://dapulse-res.cloudinary.com/video/upload/w_".concat(n.g, ",h_").concat(n.f, ",c_fit/remote_mondaycom_static/developers/features/Integrations.mp4")
                },
                V = {
                    name: "pricingPage.features.titles.privateBoards",
                    text: "pricingPage.features.descriptions.privateBoards",
                    videoPath: "https://dapulse-res.cloudinary.com/video/upload/w_".concat(n.g, ",h_").concat(n.f, ",c_fit/remote_mondaycom_static/developers/features/Private_board.mp4")
                },
                H = {
                    name: "pricingPage.features.titles.boardPermissions",
                    text: "pricingPage.features.descriptions.boardPermissions",
                    videoPath: "https://dapulse-res.cloudinary.com/video/upload/w_".concat(n.g, ",h_").concat(n.f, ",c_fit/remote_mondaycom_static/developers/features/Board_permission.mp4")
                },
                W = {
                    name: "pricingPage.features.titles.chartView",
                    text: "pricingPage.features.descriptions.chartView",
                    videoPath: "https://dapulse-res.cloudinary.com/video/upload/w_".concat(n.g, ",h_").concat(n.f, ",c_fit/remote_mondaycom_static/developers/features/Chart_view.mp4")
                },
                K = {
                    name: "pricingPage.features.titles.timeTracking",
                    text: "pricingPage.features.descriptions.timeTracking"
                },
                Y = {
                    name: "pricingPage.features.titles.formula",
                    text: "pricingPage.features.descriptions.formula"
                },
                X = {
                    name: "pricingPage.features.titles.dependencyColumn",
                    text: "pricingPage.features.descriptions.dependencyColumn"
                },
                q = {
                    name: "pricingPage.features.titles.unlimitedGuests",
                    text: ""
                },
                z = {
                    name: "pricingPage.features.titles.customizedNotifications",
                    text: "pricingPage.features.descriptions.customizedNotifications"
                },
                Z = {
                    name: "pricingPage.features.titles.marketingActivityManagement",
                    text: "pricingPage.features.descriptions.marketingActivityManagement"
                },
                Q = {
                    name: "pricingPage.features.titles.advancedPermissions",
                    text: "pricingPage.features.descriptions.boardPermissions"
                },
                J = {
                    name: "pricingPage.features.titles.workflowAndApprovalAutomation",
                    text: "pricingPage.features.descriptions.workflowAndApprovalAutomation"
                },
                $ = {
                    name: "pricingPage.features.titles.advancedReports",
                    text: "pricingPage.features.descriptions.dashboards"
                },
                ee = {
                    name: "pricingPage.features.titles.proDashboards",
                    text: "pricingPage.features.descriptions.dashboards",
                    videoPath: "https://dapulse-res.cloudinary.com/video/upload/w_".concat(n.g, ",h_").concat(n.f, ",c_fit/remote_mondaycom_static/developers/features/Dashboard.mp4")
                },
                te = {
                    name: "pricingPage.valueFeatures.titles.automations.pro",
                    text: "pricingPage.features.descriptions.automations",
                    link: "https://support.monday.com/hc/en-us/articles/360002826680",
                    videoPath: "https://dapulse-res.cloudinary.com/video/upload/w_".concat(n.g, ",h_").concat(n.f, ",c_fit/remote_mondaycom_static/developers/features/Automations.mp4")
                },
                re = {
                    name: "pricingPage.valueFeatures.titles.integrations.pro",
                    text: "pricingPage.features.descriptions.integrations",
                    link: "https://support.monday.com/hc/en-us/articles/360002826680",
                    videoPath: "https://dapulse-res.cloudinary.com/video/upload/w_".concat(n.g, ",h_").concat(n.f, ",c_fit/remote_mondaycom_static/developers/features/Integrations.mp4")
                },
                ne = {
                    name: "pricingPage.features.titles.enterpriseScaleAutomations",
                    text: "pricingPage.features.descriptions.enterpriseScaleAutomations",
                    link: "https://support.monday.com/hc/en-us/articles/360002826680"
                },
                ie = {
                    name: "pricingPage.features.titles.enterpriseSpecificIntegrations",
                    text: "pricingPage.features.descriptions.enterpriseSpecifciIntegrations"
                },
                ae = {
                    name: "pricingPage.features.titles.enterpriseGradeSecurity",
                    text: "pricingPage.features.descriptions.enterpriseGradeSecurity"
                },
                se = {
                    name: "pricingPage.features.titles.advancedReporting",
                    text: "pricingPage.features.descriptions.advancedReporting"
                },
                ue = {
                    name: "pricingPage.features.titles.multiLevelPermissions",
                    text: "pricingPage.features.descriptions.multiLevelPermissions"
                },
                ce = {
                    name: "pricingPage.features.titles.tailoredOnboarding",
                    text: "pricingPage.features.descriptions.tailoredOnboarding"
                },
                oe = {
                    name: "pricingPage.features.titles.premiumSupport",
                    text: "pricingPage.features.descriptions.premiumSupport"
                },
                de = {
                    name: "pricingPage.features.titles.enterpriseDashboards",
                    text: "pricingPage.features.descriptions.fiftyDashboards"
                },
                le = {
                    name: "pricingPage.features.titles.ready_made_marketing_templates",
                    text: "pricingPage.features.descriptions.ready_made_marketing_templates"
                },
                fe = {
                    name: "pricingPage.features.titles.marketing_requests_with_forms",
                    text: "pricingPage.features.descriptions.marketing_requests_with_forms"
                },
                pe = {
                    name: "pricingPage.features.titles.unlimited_templates",
                    text: "pricingPage.features.descriptions.ready_made_marketing_templates"
                },
                ge = {
                    name: "pricingPage.features.titles.workPerformanceInsights",
                    text: "pricingPage.features.descriptions.workPerformanceInsights"
                },
                Ee = {
                    name: "pricingPage.features.titles.assets_and_file_management",
                    text: "pricingPage.features.descriptions.embed_documents_and_briefs"
                },
                Oe = {
                    name: "pricingPage.features.titles.import_export_excel",
                    text: "pricingPage.features.descriptions.import_export_excel"
                },
                be = {
                    name: "pricingPage.features.titles.social_calendar",
                    text: "pricingPage.features.descriptions.marketing_calendar"
                },
                _e = {
                    name: "pricingPage.features.titles.share_insights_with_guests",
                    text: "pricingPage.features.descriptions.guests"
                },
                Pe = {
                    name: "pricingPage.features.titles.marketing_analytics",
                    text: "pricingPage.features.descriptions.marketing_dashboards"
                },
                me = {
                    name: "pricingPage.features.titles.deadline_management",
                    text: "pricingPage.features.descriptions.deadline_management"
                },
                Se = {
                    name: "pricingPage.features.titles.campaign_management",
                    text: "pricingPage.features.descriptions.campaign_management"
                },
                Te = {
                    name: "pricingPage.features.titles.high_level_marketing_planning",
                    text: "pricingPage.features.descriptions.high_level_marketing_planning"
                },
                Ae = {
                    name: "pricingPage.features.titles.adobe_creative_cloud_plugin",
                    text: "pricingPage.features.descriptions.adobe_creative_cloud_plugin"
                },
                Ie = {
                    name: "pricingPage.features.titles.unlimitedProjectsItemsSubitems",
                    text: "pricingPage.features.descriptions.unlimitedProjectsItemsSubitems"
                },
                Re = {
                    name: "pricingPage.features.titles.unlimitedShareableForms",
                    text: "pricingPage.features.descriptions.unlimitedShareableForms"
                },
                Ne = {
                    name: "pricingPage.features.titles.fileManagement",
                    text: "pricingPage.features.descriptions.fileManagement"
                },
                ve = {
                    name: "pricingPage.features.titles.ganttCharts",
                    text: "pricingPage.features.descriptions.ganttCharts"
                },
                je = {
                    name: "pricingPage.features.titles.customNotificationsAndReminders",
                    text: "pricingPage.features.descriptions.customNotificationsAndReminders"
                },
                De = {
                    name: "pricingPage.features.titles.projectPortfolioManagement",
                    text: "pricingPage.features.descriptions.projectPortfolioManagement"
                },
                ke = {
                    name: "pricingPage.features.titles.calendarSync",
                    text: "pricingPage.features.descriptions.calendarSync"
                },
                ye = {
                    name: "pricingPage.features.titles.basicAnalytics",
                    text: "pricingPage.features.descriptions.basicAnalytics"
                },
                Me = {
                    name: "pricingPage.features.titles.taskAndProjectDependencies",
                    text: "pricingPage.features.descriptions.taskAndProjectDependencies"
                },
                he = {
                    name: "pricingPage.features.titles.milestonesManagement",
                    text: "pricingPage.features.descriptions.milestonesManagement"
                },
                Ce = {
                    name: "pricingPage.features.titles.resourceAllocation",
                    text: "pricingPage.features.descriptions.resourceAllocation"
                },
                xe = {
                    name: "pricingPage.features.titles.powerfulAnalytics",
                    text: "pricingPage.features.descriptions.powerfulAnalytics"
                },
                Le = {
                    name: "pricingPage.features.titles.unlimitedPrivateBoards",
                    text: "pricingPage.features.descriptions.privateBoards"
                },
                Ue = {
                    name: "pricingPage.features.titles.advancedFormulaCapabilities",
                    text: "pricingPage.features.descriptions.formula"
                },
                Ge = {
                    name: "pricingPage.features.titles.slackMSTeamsTodoistIntegrations",
                    text: "pricingPage.features.descriptions.slackMSTeamsTodoistIntegrations"
                },
                Be = {
                    name: "pricingPage.features.titles.advancedProjectPortfolioManagement",
                    text: "pricingPage.features.descriptions.advancedProjectPortfolioManagement"
                },
                we = {
                    name: "pricingPage.features.titles.enterpriseIntegrations",
                    text: "pricingPage.features.descriptions.enterpriseIntegrations"
                },
                Fe = {
                    name: "pricingPage.features.titles.sprint_management",
                    text: "pricingPage.features.descriptions.sprint_management"
                },
                Ve = {
                    name: "pricingPage.features.titles.kanban_management",
                    text: "pricingPage.features.descriptions.kanban_management"
                },
                He = {
                    name: "pricingPage.features.titles.dev_templates",
                    text: "pricingPage.features.descriptions.dev_templates"
                },
                We = {
                    name: "pricingPage.features.titles.workdocs",
                    text: "pricingPage.features.descriptions.workdocs"
                },
                Ke = {
                    name: "pricingPage.products.software.featuresList.shareableBoardsWithExternalStakeholders",
                    text: "pricingPage.products.software.featuresList.shareableBoardsWithExternalStakeholders.description"
                },
                Ye = {
                    name: "pricingPage.features.titles.git_integrations",
                    text: "pricingPage.features.descriptions.git_integrations"
                },
                Xe = {
                    name: "pricingPage.features.titles.agile_reporting",
                    text: "pricingPage.features.descriptions.agile_reporting"
                },
                qe = {
                    name: "pricingPage.products.software.featuresList.customerFeedbackAndRequests",
                    text: "pricingPage.products.software.featuresList.customerFeedbackAndRequests.description"
                }
        },
        iNqc: function(e, t, r) {
            "use strict";
            r.d(t, "e", (function() {
                return i
            })), r.d(t, "d", (function() {
                return a
            })), r.d(t, "g", (function() {
                return s
            })), r.d(t, "n", (function() {
                return u
            })), r.d(t, "m", (function() {
                return c
            })), r.d(t, "j", (function() {
                return o
            })), r.d(t, "a", (function() {
                return d
            })), r.d(t, "f", (function() {
                return l
            })), r.d(t, "h", (function() {
                return f
            })), r.d(t, "b", (function() {
                return p
            })), r.d(t, "i", (function() {
                return g
            })), r.d(t, "c", (function() {
                return E
            })), r.d(t, "l", (function() {
                return O
            })), r.d(t, "k", (function() {
                return b
            })), r.d(t, "o", (function() {
                return _
            }));
            var n = r("U6qq"),
                i = function(e) {
                    var t = e.hasStudentPlan,
                        r = e.cookies;
                    return {
                        sectionName: "pricingPage.features.sections.customer_favorites",
                        features: [n.UNLIMITED_BOARDS, n.TEMPLATES, n.COLUMN_TYPES({
                            cookies: r
                        }), n.UNLIMITED_VIEWERS, n.FORMS, n.MOBILE, n.IMPORT_FROM_OTHER_TOOLS, n.TIMELINE({
                            hasStudentPlan: t
                        }), n.PRIVATE_BOARDS, n.AUTOMATIONS]
                    }
                },
                a = function(e) {
                    var t = e.cookies,
                        r = e.abTests,
                        i = e.hasFreeTier,
                        a = e.hasStudentPlan,
                        s = [n.EMBEDDED_BOARD, n.WHITEBOARD, n.UPDATES_SECTION, n.ZOOM_INTEGRATION, n.GUESTS];
                    return i || a || (s.unshift(n.UNLIMITED_VIEWERS), s.push(n.STORAGE({
                        cookies: t,
                        abTests: r
                    }))), {
                        sectionName: "pricingPage.features.sections.collaboration",
                        features: s
                    }
                },
                s = function(e) {
                    var t = e.hasStudentPlan;
                    return {
                        sectionName: "pricingPage.features.sections.productivity",
                        features: [n.MOBILE, n.FORMS, n.CUSTOMIZABLE_NOTIFICATIONS, n.INTEGRATIONS, n.AUTOMATIONS, n.PREMIUM_INTEGRATIONS, n.TIME_TRACKING, n.FORMULA({
                            hasStudentPlan: t
                        }), n.DEPENDENCY_COLUMN]
                    }
                },
                u = function(e) {
                    var t = e.hasStudentPlan;
                    return {
                        sectionName: "pricingPage.features.sections.views_and_reporting",
                        features: [n.ACTIVITY_LOG, n.DASHBOARDS({
                            hasStudentPlan: t
                        }), n.KANBAN_VIEW, n.TIMELINE({
                            hasStudentPlan: t
                        }), n.CALENDAR({
                            hasStudentPlan: t
                        }), n.MAP, n.CHART_VIEW({
                            hasStudentPlan: t
                        }), n.WORKLOAD]
                    }
                },
                c = {
                    sectionName: "pricingPage.features.sections.support",
                    features: [n.KNOWLEDGE_BASE, n.EMAIL_SUPPORT, n.WEBINARS, n.CS_MANAGER, n.SLA]
                },
                o = {
                    sectionName: "pricingPage.features.sections.security_and_privacy",
                    features: [n.SOC, n.TWO_FA, n.PRIVATE_BOARDS, n.GOOGLE, n.SAML, n.HIPAA, n.INTEGRATION_PERMISSIONS, n.IP_RESTRICTIONS, n.CONTENT_DIRECTORY, n.TEAMS_INSIDE_TEAMS, n.CUSTOM_ROLES, n.SEATS_MANAGEMENT, n.TENANT_RESTRICTIONS, n.APPROVED_GUEST, n.BLOCK_DOMAINS]
                },
                d = {
                    sectionName: "pricingPage.features.sections.administration_and_control",
                    features: [n.MAXIMUM_SEATS, n.BOARD_ADMINISTRATORS, n.SCIM, n.AUDIT_LOG, n.SESSIONS, n.PANIC_MODE, n.PRIVATE_WORKSPACES, n.ACCOUNT_PERMISSIONS]
                },
                l = {
                    sectionName: "pricingPage.features.sections.enterprise_reporting_and_analytics",
                    features: [n.WORK_PERFORMANCE_INSIGHTS, n.SCHEDULED_DASHBOARD_DELIVERY, n.PIVOT_ANALYSIS]
                },
                f = function(e) {
                    var t = e.hasStudentPlan;
                    return {
                        sectionName: "pricingPage.features.sections.remote_work",
                        features: [n.WHITEBOARD, n.EMBEDDED_BOARD, n.ZOOM_INTEGRATION, n.TIMELINE({
                            hasStudentPlan: t
                        }), n.CALENDAR({
                            hasStudentPlan: t
                        })]
                    }
                },
                p = function(e) {
                    var t = e.hasStudentPlan;
                    return {
                        sectionName: "pricingPage.features.sections.advanced",
                        features: [n.GUESTS, n.KANBAN_VIEW, n.FORMS, n.MAP, n.SEARCH, n.FORMS_CUSTOMIZATION({
                            hasStudentPlan: t
                        }), n.WORKLOAD, n.TIME_TRACKING, n.CHART_VIEW({
                            hasStudentPlan: t
                        }), n.FORMULA({
                            hasStudentPlan: t
                        }), n.DEPENDENCY_COLUMN, n.TAGS, n.PRIVATE_BOARDS, n.INTEGRATIONS, n.AUTOMATIONS, n.PREMIUM_INTEGRATIONS, n.DASHBOARDS({
                            hasStudentPlan: t
                        })]
                    }
                },
                g = {
                    sectionName: "pricingPage.features.sections.security",
                    features: [n.TWO_FA, n.GOOGLE, n.SAML, n.SCIM, n.AUDIT_LOG, n.SESSIONS, n.HIPAA, n.SLA, n.INTEGRATION_PERMISSIONS, n.PRIVATE_WORKSPACES, n.ACCOUNT_PERMISSIONS]
                },
                E = {
                    sectionName: "pricingPage.features.sections.advancedReporting",
                    features: [n.WORK_PERFORMANCE_INSIGHTS, n.SCHEDULED_DASHBOARD_DELIVERY, n.PIVOT_ANALYSIS]
                },
                O = {
                    sectionName: "pricingPage.features.sections.support",
                    features: [n.KNOWLEDGE_BASE, n.EMAIL_SUPPORT, n.TAILORED_ONBOARDING]
                },
                b = {
                    sectionName: "pricingPage.features.sections.security_new",
                    features: [n.TWO_FA, n.SOC, n.GOOGLE, n.SAML, n.HIPAA, n.INTEGRATION_PERMISSIONS, n.IP_RESTRICTIONS, n.CONTENT_DIRECTORY]
                },
                _ = function(e) {
                    return function(e) {
                        var t = e.cookies,
                            r = e.abTests,
                            n = e.hasStudentPlan,
                            f = e.hasFreeTier;
                        return [i({
                            hasStudentPlan: n,
                            cookies: t
                        }), a({
                            cookies: t,
                            abTests: r,
                            hasStudentPlan: n,
                            hasFreeTier: f
                        }), s({
                            hasStudentPlan: n
                        }), u({
                            hasStudentPlan: n
                        }), c, o, d, l]
                    }({
                        cookies: e.cookies,
                        abTests: e.abTests,
                        hasStudentPlan: e.hasStudentPlan,
                        hasFreeTier: e.hasFreeTier
                    })
                }
        },
        mN4y: function(e, t, r) {
            "use strict";
            r.d(t, "c", (function() {
                return a
            })), r.d(t, "a", (function() {
                return s
            })), r.d(t, "e", (function() {
                return u
            })), r.d(t, "d", (function() {
                return c
            })), r.d(t, "f", (function() {
                return o
            })), r.d(t, "b", (function() {
                return d
            }));
            var n = r("aIIR"),
                i = r("hTNa"),
                a = [i.UNLIMITED_BOARDS, i.UNLIMITED_DOCS, i.OVER_200_TEMPLATES, i.COLUMN_TYPES, i.UP_TO_X_TEAM_MEMBERS(n.b), i.MOBILE],
                s = function(e) {
                    return e.hasFreeTier ? [i.UNLIMITED_VIEWERS, i.UNLIMITED_ITEMS, i.FIVE_GB_STORAGE, i.PRIORITISED_CUSTOMER_SUPPORT, i.SINGLE_DASHBOARD] : [i.UNLIMITED_BOARDS, i.UNLIMITED_DOCS, i.OVER_200_TEMPLATES, i.COLUMN_TYPES, i.UNLIMITED_VIEWERS, i.MOBILE, i.SINGLE_DASHBOARD]
                },
                u = function(e) {
                    var t = e.withoutBasic,
                        r = e.hasFreeTier;
                    return t ? r ? [i.UNLIMITED_VIEWERS, i.UNLIMITED_ITEMS, i.PRIORITISED_CUSTOMER_SUPPORT, i.TIMELINE_AND_GANTT_VIEWS, i.CALENDAR, i.GUESTS, i.STANDARD_AUTOMATIONS, i.STANDARD_INTEGRATIONS, i.STANDARD_DASHBOARDS] : [i.UNLIMITED_BOARDS, i.UNLIMITED_DOCS, i.UNLIMITED_VIEWERS, i.OVER_200_TEMPLATES, i.COLUMN_TYPES, i.TIMELINE_AND_GANTT_VIEWS, i.CALENDAR, i.GUESTS, i.STANDARD_AUTOMATIONS, i.STANDARD_INTEGRATIONS, i.STANDARD_DASHBOARDS, i.MOBILE] : [i.TIMELINE_AND_GANTT_VIEWS, i.CALENDAR, i.GUESTS, i.STANDARD_AUTOMATIONS, i.STANDARD_INTEGRATIONS, i.STANDARD_DASHBOARDS]
                },
                c = [i.PRIVATE_BOARDS, i.CHART_VIEW, i.TIME_TRACKING, i.FORMULA, i.DEPENDENCY, i.PRO_AUTOMATIONS, i.PRO_INTEGRATIONS, i.PRO_DASHBOARDS],
                o = [i.UNLIMITED_BOARDS, i.OVER_200_TEMPLATES, i.COLUMN_TYPES, i.UNLIMITED_VIEWERS, i.MOBILE, i.CHART_VIEW],
                d = [i.ENTERPRISE_SCALE_AUTOMATIONS, i.ENTERPRISE_GRADE_SECURITY, i.ADVANCED_REPORTING, i.MULTI_LEVEL_PERMISSIONS, i.TAILORED_ONBOARDING, i.PREMIUM_SUPPORT, i.ENTERPRISE_DASHBOARDS]
        },
        "n/Sm": function(e, t, r) {
            "use strict";
            r.d(t, "f", (function() {
                return T
            })), r.d(t, "g", (function() {
                return A
            })), r.d(t, "h", (function() {
                return I
            })), r.d(t, "i", (function() {
                return R
            })), r.d(t, "a", (function() {
                return N
            })), r.d(t, "j", (function() {
                return v
            })), r.d(t, "b", (function() {
                return D
            })), r.d(t, "c", (function() {
                return k
            })), r.d(t, "d", (function() {
                return y
            })), r.d(t, "e", (function() {
                return M
            })), r.d(t, "l", (function() {
                return h
            })), r.d(t, "k", (function() {
                return C
            })), r.d(t, "m", (function() {
                return x
            })), r.d(t, "n", (function() {
                return L
            }));
            var n = r("cpVT"),
                i = r("YRc4"),
                a = r("Pr/7"),
                s = r("A1E4"),
                u = r("1BgC"),
                c = r("h12S"),
                o = r.n(c),
                d = r("aIIR"),
                l = r("mN4y"),
                f = "purchase_now_ab_test",
                p = "new_with_purchase_now_button",
                g = "pricing_page_sub_title_v2_ab_test",
                E = "new_pricing_with_sub_title_v2",
                O = "homepage_platform_pricing_contact_us_cta_ab_test",
                b = "new_cta_with_talk_to_sales",
                _ = "homepage_pricing_enterprise_contact_us_typeform_feature_flag",
                P = "new_homepage_pricing_enterprise_contact_us_typeform_feature_flag",
                m = r("AJaK"),
                S = r("hTNa"),
                T = function(e) {
                    var t = e.abTests,
                        r = e.forcePricing,
                        n = e.cookies;
                    if (e.hasStudentPlan) return !0;
                    var a = (n || {})[u.PLATFORM_HIDE_BASIC_COOKIE];
                    return a ? "true" === a : "without_basic" === r || Object(i.getAbTestVariantNew)(t, s.HOMEPAGE_HIDE_BASIC_AB_TEST.test_name) === s.HOMEPAGE_HIDE_BASIC_AB_TEST.new_variation_name
                },
                A = function(e) {
                    return "products" === e.forcePricing
                },
                I = function(e) {
                    var t = e.cookies,
                        r = void 0 === t ? {} : t,
                        n = e.abTests,
                        a = void 0 === n ? [] : n;
                    if ("v10" === e.forcePricing) return !0;
                    var c = r[u.PLATFORM_PRICING_VERSION_COOKIE];
                    return c ? c === o.a.VERSION_10 : Object(i.getAbTestVariantNew)(a, s.HOMEPAGE_V10_PRICING_VERSION_AB_TEST.test_name) === s.HOMEPAGE_V10_PRICING_VERSION_AB_TEST.new_variation_name
                },
                R = function(e) {
                    var t = e.cookies,
                        r = void 0 === t ? {} : t,
                        n = e.forcePricing,
                        i = e.currency;
                    if ("v11" === n) return !0;
                    var a = r[u.PLATFORM_PRICING_VERSION_COOKIE];
                    return a ? a === o.a.VERSION_11 : "jpy" === i
                },
                N = function(e, t, r, n) {
                    if (!t[u.PLATFORM_PRICING_VERSION_COOKIE] && !r) {
                        var c = Object(i.getAbTestVariantNew)(e, s.HOMEPAGE_V12_PRICING_VERSION_AB_TEST.test_name, !0);
                        n || c === s.HOMEPAGE_V12_PRICING_VERSION_AB_TEST.new_variation_name ? Object(a.f)(u.HOMEPAGE_PRICING_VERSION_COOKIE, o.a.VERSION_12, {
                            expires: 90
                        }) : Object(a.f)(u.HOMEPAGE_PRICING_VERSION_COOKIE, o.a.DEFAULT_VERSION, {
                            expires: 90
                        })
                    }
                },
                v = function(e) {
                    var t = e.cookies,
                        r = void 0 === t ? {} : t,
                        n = e.abTests,
                        a = void 0 === n ? [] : n,
                        c = e.forcePricing,
                        d = e.isV12PricingVersion;
                    if (c === o.a.VERSION_12) return !0;
                    var l = r[u.PLATFORM_PRICING_VERSION_COOKIE];
                    return l ? l === o.a.VERSION_12 : !!d || Object(i.getAbTestVariantNew)(a, s.HOMEPAGE_V12_PRICING_VERSION_AB_TEST.test_name) === s.HOMEPAGE_V12_PRICING_VERSION_AB_TEST.new_variation_name
                },
                j = function(e, t) {
                    var r, i = e[u.PLATFORM_FREE_TIER_VERSION_COOKIE],
                        a = t || i,
                        c = (r = {}, Object(n.default)(r, s.HOMEPAGE_FREE_TIER_2022_ABC_TEST.new_variation_name_b, "2022_a"), Object(n.default)(r, s.HOMEPAGE_FREE_TIER_2022_ABC_TEST.new_variation_name_c, "2022_b"), r);
                    return a || c[s.HOMEPAGE_FREE_TIER_2022_ABC_TEST.new_variation_name_b]
                },
                D = function(e) {
                    var t = e.cookies,
                        r = void 0 === t ? {} : t,
                        n = e.forcePricing;
                    switch (j(r, n)) {
                        case "2022_a":
                            return [S.UP_TO_THREE_BOARDS, S.UNLIMITED_DOCS, S.OVER_200_TEMPLATES, S.LIMITED_COLUMN_TYPES, S.UP_TO_X_TEAM_MEMBERS(d.b), S.MOBILE];
                        case "2022_b":
                            return [S.UP_TO_THREE_BOARDS, S.UNLIMITED_DOCS, S.OVER_200_TEMPLATES, S.LIMITED_COLUMN_TYPES, S.UP_TO_X_TEAM_MEMBERS(d.c), S.MOBILE];
                        default:
                            return l.c
                    }
                },
                k = function(e) {
                    var t = e.cookies,
                        r = void 0 === t ? {} : t,
                        n = e.forcePricing;
                    switch (j(r, n)) {
                        case "2022_a":
                            return d.b;
                        case "2022_b":
                            return d.c;
                        default:
                            return d.b
                    }
                },
                y = function(e) {
                    var t = e.cookies,
                        r = void 0 === t ? {} : t,
                        n = e.forcePricing;
                    switch (j(r, n)) {
                        case "2022_a":
                        case "2022_b":
                            return !1;
                        default:
                            return !0
                    }
                },
                M = function(e) {
                    var t = e.cookies,
                        r = void 0 === t ? {} : t,
                        n = e.forcePricing;
                    switch (j(r, n)) {
                        case "2022_a":
                        case "2022_b":
                            return !1;
                        default:
                            return !0
                    }
                },
                h = function(e) {
                    var t = e.abTests,
                        r = void 0 === t ? [] : t;
                    return "purchase_now" === e.forcePricing || !Object(m.d)() && Object(i.getAbTestVariantNew)(r, f, !0) === p
                },
                C = function(e) {
                    var t = e.abTests,
                        r = void 0 === t ? [] : t;
                    return "sub_title_v2" === e.forcePricing || Object(i.getAbTestVariantNew)(r, g, !0) === E
                },
                x = function(e) {
                    var t = e.abTests,
                        r = void 0 === t ? [] : t;
                    return "talk_to_sales" === e.forcePricing || Object(i.getAbTestVariantNew)(r, O, !0) === b
                },
                L = function(e) {
                    var t = e.abTests,
                        r = void 0 === t ? [] : t;
                    return Object(i.getAbTestVariantNew)(r, _, !0) === P
                }
        },
        pT56: function(e, t, r) {
            "use strict";
            r.d(t, "a", (function() {
                return u
            })), r.d(t, "b", (function() {
                return c
            }));
            var n = r("cpVT"),
                i = r("aIIR"),
                a = r("mN4y"),
                s = r("n/Sm"),
                u = function(e) {
                    var t, r = e.hasStudentPlan,
                        u = e.hasFreeTier,
                        c = e.abTests,
                        o = e.cookies,
                        d = e.forcePricing,
                        l = Object(s.f)({
                            abTests: c,
                            cookies: o,
                            forcePricing: d
                        });
                    return t = {}, Object(n.default)(t, i.k.FREE, r ? a.f : Object(s.b)({
                        cookies: o,
                        forcePricing: d
                    })), Object(n.default)(t, i.k.BASIC, Object(a.a)({
                        hasFreeTier: u
                    })), Object(n.default)(t, i.k.STANDARD, Object(a.e)({
                        withoutBasic: l,
                        hasFreeTier: u
                    })), Object(n.default)(t, i.k.PRO, a.d), Object(n.default)(t, i.k.ENTERPRISE, a.b), t
                },
                c = function(e) {
                    var t = e.hasStudentPlan,
                        r = e.hasFreeTier,
                        n = e.abTests,
                        i = e.cookies,
                        a = e.forcePricing;
                    return u({
                        hasStudentPlan: t,
                        hasFreeTier: r,
                        abTests: n,
                        cookies: i,
                        forcePricing: a
                    })
                }
        },
        q6EP: function(e, t, r) {
            "use strict";
            r.d(t, "a", (function() {
                return i
            }));
            var n = r("U6qq"),
                i = function(e, t) {
                    return {
                        sectionName: "pricingPage.features.sections.essentials",
                        features: [n.MAXIMUM_SEATS, n.ITEMS({
                            abTests: e,
                            cookies: t
                        }), n.STORAGE({
                            abTests: e,
                            cookies: t
                        }), n.ACTIVITY_LOG, n.UNLIMITED_BOARDS_WITH_FREE_TIER({
                            abTests: e,
                            cookies: t
                        }), n.UNLIMITED_DOCS, n.COLUMN_TYPES({
                            cookies: t
                        }), n.TEMPLATES, n.MOBILE, n.UNLIMITED_VIEWERS]
                    }
                }
        },
        q6Ym: function(e, t, r) {
            "use strict";
            r.d(t, "c", (function() {
                return u
            })), r.d(t, "a", (function() {
                return c
            })), r.d(t, "b", (function() {
                return o
            })), r.d(t, "d", (function() {
                return d
            }));
            var n = r("z7pX"),
                i = r("E+oP"),
                a = r.n(i),
                s = r("QHCa"),
                u = function(e, t, r, i) {
                    var u = function(e, t, r, n) {
                        var i, u, c, o = null === e || void 0 === e || null === (i = e.payments_view) || void 0 === i || null === (u = i.pricing) || void 0 === u || null === (c = u.users_count_options) || void 0 === c ? void 0 : c.free_options;
                        if (!a()(o) && Object(s.d)(e, {
                                abTests: t,
                                cookies: r,
                                forcePricing: n
                            })) return o
                    }(e, t, r, i);
                    if ((null === u || void 0 === u ? void 0 : u.length) > 0) return Math.max.apply(Math, Object(n.a)(u))
                },
                c = function(e, t, r, n, i, u, c) {
                    var o = function(e, t, r, n) {
                        var i, u, c = null === e || void 0 === e || null === (i = e.payments_view) || void 0 === i || null === (u = i.pricing) || void 0 === u ? void 0 : u.discount;
                        if (!a()(c) && Object(s.d)(e, {
                                abTests: t,
                                cookies: r,
                                forcePricing: n
                            })) return c
                    }(n, i, u, c);
                    if (a()(o)) return e;
                    var d = o.value,
                        l = o.valid_tiers,
                        f = o.valid_periods;
                    if (!d) return e;
                    var p = a()(l) || l.includes(t),
                        g = a()(f) || f.includes(r);
                    return p && g ? e * (1 - d) : e
                },
                o = function(e, t, r, n, i, a) {
                    var s = t,
                        c = u(r, n, i, a);
                    return c > 0 && (s = t - c), Math.max(e * s, 0)
                },
                d = function(e, t, r, n) {
                    var i, u, c = null === e || void 0 === e || null === (i = e.payments_view) || void 0 === i || null === (u = i.pricing) || void 0 === u ? void 0 : u.discount;
                    return !(a()(c) || !Object(s.d)(e, {
                        abTests: t,
                        cookies: r,
                        forcePricing: n
                    })) && c.hide_crossed_out_discount
                }
        },
        sXdA: function(e, t, r) {
            "use strict";
            r.d(t, "a", (function() {
                return c
            })), r.d(t, "b", (function() {
                return o
            }));
            var n = r("aIIR"),
                i = r("E+oP"),
                a = r.n(i),
                s = r("QHCa"),
                u = function(e, t, r, n) {
                    var i, u, c = null === e || void 0 === e || null === (i = e.payments_view) || void 0 === i || null === (u = i.pricing) || void 0 === u ? void 0 : u.periods;
                    return !a()(c) && Object(s.d)(e, {
                        abTests: t,
                        cookies: r,
                        forcePricing: n
                    }) ? c : {}
                },
                c = function(e, t, r, i) {
                    var s = n.f,
                        c = (u(e, t, r, i) || {}).hidden_periods,
                        o = void 0 === c ? [] : c;
                    return a()(o) ? s : s.filter((function(e) {
                        return !o.includes(e)
                    }))
                },
                o = function(e, t, r, i) {
                    var a = u(e, t, r, i).display;
                    return (null === a || void 0 === a ? void 0 : a.price_display) === n.g.yearly
                }
        },
        ua6y: function(e, t, r) {
            "use strict";
            r.d(t, "a", (function() {
                return c
            }));
            var n, i = r("cpVT"),
                a = r("aIIR");

            function s(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }
            var u = (n = {}, Object(i.default)(n, a.k.FREE, "pricingPage.tierDescriptions.individual.new"), Object(i.default)(n, a.k.BASIC, "pricingPage.tierDescriptions.basic.new"), Object(i.default)(n, a.k.STANDARD, "pricingPage.tierDescriptions.standard.new"), Object(i.default)(n, a.k.PRO, "pricingPage.tierDescriptions.pro.new"), Object(i.default)(n, a.k.ENTERPRISE, "pricingPage.tierDescriptions.enterprise.new"), n),
                c = function(e) {
                    var t = e.hasStudentPlan,
                        r = function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? s(Object(r), !0).forEach((function(t) {
                                    Object(i.default)(e, t, r[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : s(Object(r)).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                                }))
                            }
                            return e
                        }({}, u);
                    return t && (r[a.k.FREE] = "pricingPage.tierDescriptions.student"), r
                }
        },
        w2gP: function(e, t, r) {
            "use strict";
            r.d(t, "d", (function() {
                return l
            })), r.d(t, "e", (function() {
                return f
            })), r.d(t, "a", (function() {
                return p
            })), r.d(t, "c", (function() {
                return g
            })), r.d(t, "b", (function() {
                return E
            }));
            var n = r("cpVT"),
                i = r("4qC0"),
                a = r.n(i),
                s = r("aIIR"),
                u = r("tm0V");

            function c(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function o(e, t) {
                var r;
                if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (r = function(e, t) {
                            if (!e) return;
                            if ("string" === typeof e) return d(e, t);
                            var r = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === r && e.constructor && (r = e.constructor.name);
                            if ("Map" === r || "Set" === r) return Array.from(e);
                            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return d(e, t)
                        }(e)) || t && e && "number" === typeof e.length) {
                        r && (e = r);
                        var n = 0,
                            i = function() {};
                        return {
                            s: i,
                            n: function() {
                                return n >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[n++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: i
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var a, s = !0,
                    u = !1;
                return {
                    s: function() {
                        r = e[Symbol.iterator]()
                    },
                    n: function() {
                        var e = r.next();
                        return s = e.done, e
                    },
                    e: function(e) {
                        u = !0, a = e
                    },
                    f: function() {
                        try {
                            s || null == r.return || r.return()
                        } finally {
                            if (u) throw a
                        }
                    }
                }
            }

            function d(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            var l = function(e) {
                    return "object" === typeof e && null !== e
                },
                f = function(e) {
                    Object.keys(s.k).forEach((function(t) {
                        return e(s.k[t])
                    }))
                },
                p = [],
                g = function(e) {
                    if (!e || 0 === e.length) return "";
                    var t, r = o(e);
                    try {
                        for (r.s(); !(t = r.n()).done;) {
                            var n = t.value;
                            if (u[n]) return n
                        }
                    } catch (i) {
                        r.e(i)
                    } finally {
                        r.f()
                    }
                    return Array.isArray(e) ? "".concat(e[0]) : "".concat(e)
                },
                E = function(e, t, r) {
                    var i, s = function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? c(Object(r), !0).forEach((function(t) {
                                    Object(n.default)(e, t, r[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                                }))
                            }
                            return e
                        }({}, e),
                        u = o(r);
                    try {
                        for (u.s(); !(i = u.n()).done;) {
                            var d = i.value,
                                l = null === t || void 0 === t ? void 0 : t[d];
                            (a()(l) || Array.isArray(l)) && (s[d] = g(t[d]))
                        }
                    } catch (f) {
                        u.e(f)
                    } finally {
                        u.f()
                    }
                    return s
                }
        },
        wig9: function(e, t) {
            e.exports = function(e) {
                for (var t = -1, r = null == e ? 0 : e.length, n = 0, i = []; ++t < r;) {
                    var a = e[t];
                    a && (i[n++] = a)
                }
                return i
            }
        },
        z7pX: function(e, t, r) {
            "use strict";
            r.d(t, "a", (function() {
                return s
            }));
            var n = r("6FTQ");
            var i = r("8tO+"),
                a = r("8rE2");

            function s(e) {
                return function(e) {
                    if (Array.isArray(e)) return Object(n.a)(e)
                }(e) || Object(i.a)(e) || Object(a.a)(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
        }
    }
]);
//# sourceMappingURL=ead5b4c24684edd3f6a496512d530676ba5f20a2.94d4a54733d9b1e6475c.js.map