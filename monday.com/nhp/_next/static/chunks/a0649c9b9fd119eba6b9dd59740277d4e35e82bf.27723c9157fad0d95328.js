(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [19], {
        "/a9y": function(e, t, n) {
            "use strict";
            var r = n("/GRZ"),
                a = n("i2R6"),
                o = n("48fX"),
                i = n("tCBg"),
                c = n("T0f4");

            function u(e) {
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
                    var n, r = c(e);
                    if (t) {
                        var a = c(this).constructor;
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments);
                    return i(this, n)
                }
            }
            var s = n("AroE");
            t.__esModule = !0, t.default = void 0;
            var l = s(n("q1tI")),
                f = s(n("8Kt/")),
                d = {
                    400: "Bad Request",
                    404: "This page could not be found",
                    405: "Method Not Allowed",
                    500: "Internal Server Error"
                };

            function p(e) {
                var t = e.res,
                    n = e.err;
                return {
                    statusCode: t && t.statusCode ? t.statusCode : n ? n.statusCode : 404
                }
            }
            var g = function(e) {
                o(n, e);
                var t = u(n);

                function n() {
                    return r(this, n), t.apply(this, arguments)
                }
                return a(n, [{
                    key: "render",
                    value: function() {
                        var e = this.props.statusCode,
                            t = this.props.title || d[e] || "An unexpected error has occurred";
                        return l.default.createElement("div", {
                            style: m.error
                        }, l.default.createElement(f.default, null, l.default.createElement("title", null, e, ": ", t)), l.default.createElement("div", null, l.default.createElement("style", {
                            dangerouslySetInnerHTML: {
                                __html: "body { margin: 0 }"
                            }
                        }), e ? l.default.createElement("h1", {
                            style: m.h1
                        }, e) : null, l.default.createElement("div", {
                            style: m.desc
                        }, l.default.createElement("h2", {
                            style: m.h2
                        }, t, "."))))
                    }
                }]), n
            }(l.default.Component);
            t.default = g, g.displayName = "ErrorPage", g.getInitialProps = p, g.origGetInitialProps = p;
            var m = {
                error: {
                    color: "#000",
                    background: "#fff",
                    fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',
                    height: "100vh",
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center"
                },
                desc: {
                    display: "inline-block",
                    textAlign: "left",
                    lineHeight: "49px",
                    height: "49px",
                    verticalAlign: "middle"
                },
                h1: {
                    display: "inline-block",
                    borderRight: "1px solid rgba(0, 0, 0,.3)",
                    margin: 0,
                    marginRight: "20px",
                    padding: "10px 23px 10px 0",
                    fontSize: "24px",
                    fontWeight: 500,
                    verticalAlign: "top"
                },
                h2: {
                    fontSize: "14px",
                    fontWeight: "normal",
                    lineHeight: "inherit",
                    margin: 0,
                    padding: 0
                }
            }
        },
        "/rC9": function(e, t) {
            e.exports = {
                getPathFromRequest: function(e) {
                    return e.redirectPath || e.path
                },
                setRedirectPathOnRequest: function(e, t) {
                    e.redirectPath = t
                },
                setGeneratorSystemConfigOnRequest: function(e, t) {
                    e.systemConfig = t
                },
                getGeneratorSystemConfigOnRequest: function(e) {
                    return e.systemConfig
                },
                setPageConfigOnRequest: function(e, t) {
                    e.pageConfig = t
                },
                getPageConfigFromRequest: function(e) {
                    return e.pageConfig
                },
                getSearchParamsPathFromRequest: function(e) {
                    var t = e.url.split("?");
                    return t.length > 1 ? t[1] : null
                }
            }
        },
        "1Lgf": function(e, t) {
            e.exports = {
                DeviceTypes: {
                    DESKTOP: "DESKTOP",
                    MOBILE: "MOBILE"
                }
            }
        },
        "H/68": function(e, t) {
            var n = {
                    FULL_TRANSLATION: "FULL_TRANSLATION",
                    UPDATE_EXISTING: "UPDATE_EXISTING"
                },
                r = [{
                    id: n.FULL_TRANSLATION,
                    label: "Full translation",
                    warningText: "This will create a new localized page draft and ignore any current live localized pages"
                }, {
                    id: n.UPDATE_EXISTING,
                    label: "Update existing",
                    warningText: "This will update the existing localized pages (if exists) and only add new segments to it"
                }];
            e.exports = {
                TranslationStatus: {
                    QUEUED: "QUEUED",
                    IN_PROGRESS: "IN_PROGRESS",
                    AWAITING_REVIEW: "AWAITING_REVIEW",
                    DONE: "DONE"
                },
                TranslationStrategy: n,
                strategiesData: r
            }
        },
        Q8ZC: function(e, t, n) {
            var r = n("mPvQ"),
                a = n("vJKn"),
                o = n("qVT1"),
                i = n("rL+A"),
                c = n("AZF0").normalizePath,
                u = n("SbN5"),
                s = u.CurrentPageVersion,
                l = u.PAGE_ID_FIELD_NAME,
                f = n("BFJ4").initLogger,
                d = n("H/68").TranslationStatus,
                p = n("3gK6").normalizeUrlForCanonical,
                g = f(),
                m = function() {
                    var e = o(a.mark((function e(t) {
                        var n, r;
                        return a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, n = [{
                                        $match: {
                                            path: {
                                                $in: t
                                            }
                                        }
                                    }, {
                                        $group: {
                                            _id: "$path",
                                            path: {
                                                $first: "$path"
                                            },
                                            languages: {
                                                $addToSet: {
                                                    $concat: ["$language"]
                                                }
                                            }
                                        }
                                    }], e.next = 4, i.aggregate(n);
                                case 4:
                                    return r = e.sent, e.abrupt("return", r);
                                case 8:
                                    return e.prev = 8, e.t0 = e.catch(0), g.error(e.t0), e.abrupt("return", []);
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 8]
                        ])
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                h = function() {
                    var e = o(a.mark((function e(t) {
                        return a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, i.findByIdAndUpdate(t, {
                                        translationStatus: d.DONE
                                    });
                                case 3:
                                    e.next = 8;
                                    break;
                                case 5:
                                    e.prev = 5, e.t0 = e.catch(0), g.error(e.t0);
                                case 8:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 5]
                        ])
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                v = function() {
                    var e = o(a.mark((function e(t) {
                        var n, o, i, u, f;
                        return a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, n = c(t), e.next = 4, s.findOne({
                                        path: n
                                    }).populate(l);
                                case 4:
                                    if (o = e.sent) {
                                        e.next = 7;
                                        break
                                    }
                                    return e.abrupt("return", []);
                                case 7:
                                    return e.next = 9, s.aggregate([{
                                        $match: {
                                            pageId: o.pageId._id
                                        }
                                    }, {
                                        $project: {
                                            path: "$path",
                                            locale: "$locale"
                                        }
                                    }]);
                                case 9:
                                    return i = e.sent, u = [{
                                        path: o.pageId.path,
                                        locale: "x-default"
                                    }].concat(r(i)), f = u.map((function(e) {
                                        var t = e.locale,
                                            n = e.path;
                                        return {
                                            path: p(n),
                                            locale: t
                                        }
                                    })), e.abrupt("return", f);
                                case 15:
                                    return e.prev = 15, e.t0 = e.catch(0), g.error(e.t0), e.abrupt("return", []);
                                case 19:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 15]
                        ])
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }();
            e.exports = {
                getTranslatedLanguages: m,
                updateTranslationJobOnPublish: h,
                getPageLocales: v
            }
        },
        SbN5: function(e, t, n) {
            var r, a = n("oI91"),
                o = n("jA0i"),
                i = n("Smqs"),
                c = n("1Lgf").DeviceTypes,
                u = n("XqsQ").ENGLISH_LOCALE_ID,
                s = "path",
                l = "locale",
                f = "device",
                d = "publishedBy",
                p = "publishedAt",
                g = "pageId",
                m = "pageConfig",
                h = new o.Schema((a(r = {}, s, {
                    type: String,
                    ref: i.Page,
                    unique: !0
                }), a(r, l, {
                    type: String,
                    default: u,
                    index: !0
                }), a(r, f, {
                    type: String,
                    default: c.DESKTOP
                }), a(r, d, {
                    type: String
                }), a(r, p, {
                    type: Date
                }), a(r, g, {
                    type: o.Schema.ObjectId,
                    ref: i.Page
                }), a(r, m, o.Schema.Types.Mixed), r), {
                    timestamps: !0,
                    minimize: !1
                }),
                v = o.models[i.CurrentPageVersion] || o.model(i.CurrentPageVersion, h);
            e.exports = {
                CurrentPageVersion: v,
                PATH_FIELD_NAME: s,
                LOCALE_FIELD_NAME: l,
                DEVICE_FIELD_NAME: f,
                PUBLISHED_BY_FIELD_NAME: d,
                PUBLISHED_AT_FIELD_NAME: p,
                PAGE_ID_FIELD_NAME: g,
                PAGE_CONFIG_FIELD_NAME: m
            }
        },
        Smqs: function(e, t) {
            e.exports = {
                Page: "Page",
                PageConfig: "PageConfig",
                TranslationJob: "TranslationJob",
                CurrentPageVersion: "CurrentPageVersion"
            }
        },
        aSMN: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return a
            }));
            var r = n("5qtf"),
                a = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = {};
                    return r.SUPPORTED_OVERRIDE_QUERY_PARAMS.forEach((function(n) {
                        e.hasOwnProperty(n) && (t[n] = e[n])
                    })), t
                }
        },
        ehd4: function(e, t, n) {
            var r = n("S8vx").getCookie,
                a = n("1BgC"),
                o = [a.WELCOME_BACK_SHOULD_UPDATE_CTA_COOKIE_NAME, a.WEBSITE_AB_TEST_DEBUG_COOKIE_NAME, a.PLATFORM_PRICING_VERSION_COOKIE, a.IS_PAYING_ACCOUNT_COOKIE_NAME];
            e.exports = {
                getPersistantServerCookiesFromRequest: function(e, t) {
                    return o.reduce((function(n, a) {
                        var o = r(a, {
                            req: e,
                            res: t
                        });
                        return n[a] = o, n
                    }), {})
                }
            }
        },
        eomm: function(e, t, n) {
            e.exports = n("/a9y")
        },
        "j+Cm": function(e, t, n) {
            var r = n("vJKn"),
                a = n("qVT1"),
                o = n("8+Th"),
                i = n("4fh7").trackBigBrainEventOnServer,
                c = n("w5rV").logException,
                u = function() {
                    var e = a(r.mark((function e(t) {
                        var n, a, u, s, l, f, d;
                        return r.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = t.externalMessage, a = t.e, u = t.req, s = t.res, l = t.extraLogParams, f = t.bbEventParams, d = void 0 === f ? {} : f, c({
                                        externalMessage: n,
                                        e: a,
                                        req: u,
                                        res: s,
                                        extraLogParams: l
                                    }), o.captureException(a), e.next = 5, o.flush(2e3);
                                case 5:
                                    return e.next = 7, i(d.name || "server_exception", {
                                        kind: d.kind,
                                        placement: u && u.url,
                                        info1: a && a.message,
                                        info2: u && u.params && u.params.id,
                                        directObject: u && u.hostname
                                    });
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }();
            e.exports = {
                handleServerException: u
            }
        },
        osBV: function(e, t, n) {
            "use strict";
            var r = n("AroE"),
                a = r(n("vJKn")),
                o = r(n("rg98")),
                i = r(n("H+61")),
                c = r(n("UlJF")),
                u = r(n("7LId")),
                s = r(n("VIvw")),
                l = r(n("iHvq")),
                f = n("yAMK"),
                d = n("VhhF"),
                p = n("2Dpp"),
                g = r(n("Lmlh"));

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
                    var n, r = (0, l.default)(e);
                    if (t) {
                        var a = (0, l.default)(this).constructor;
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments);
                    return (0, s.default)(this, n)
                }
            }
            var h = n("x/xx").BaseDataProvider,
                v = n("j+Cm").handleServerException,
                E = function(e) {
                    (0, u.default)(n, e);
                    var t = m(n);

                    function n() {
                        return (0, i.default)(this, n), t.call(this)
                    }
                    return (0, c.default)(n, [{
                        key: "key",
                        value: function() {
                            return "".concat(g.default.MANIFEST_DATA)
                        }
                    }, {
                        key: "refreshInterval",
                        value: function() {
                            return 1800
                        }
                    }, {
                        key: "getData",
                        value: function() {
                            var e = (0, o.default)(a.default.mark((function e() {
                                var t, n, r, o;
                                return a.default.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, t = {
                                                headers: {
                                                    "Content-Type": "application/json"
                                                },
                                                method: "GET",
                                                pragma: "no-cache"
                                            }, n = (0, d.getPlatformLinkByEnvironment)(p.PLATFORM_MANIFEST_ENDPOINT), e.next = 5, fetch(n, t);
                                        case 5:
                                            if (200 !== (null === (r = e.sent) || void 0 === r ? void 0 : r.status)) {
                                                e.next = 11;
                                                break
                                            }
                                            return e.next = 9, r.json();
                                        case 9:
                                            return o = e.sent, e.abrupt("return", {
                                                success: !0,
                                                response: o
                                            });
                                        case 11:
                                            throw new Error(r.statusText);
                                        case 14:
                                            throw e.prev = 14, e.t0 = e.catch(0), v({
                                                e: e.t0,
                                                bbEventParams: {
                                                    name: f.PLATFORM_MANIFEST_FETCH_ERROR,
                                                    direct_object: e.t0.message
                                                }
                                            }), console.error(e.t0.message), e.t0;
                                        case 19:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 14]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }]), n
                }(h);
            e.exports = {
                PlatformManifestProvider: E
            }
        },
        "rL+A": function(e, t, n) {
            var r = n("jA0i"),
                a = n("Smqs"),
                o = n("H/68"),
                i = o.TranslationStatus,
                c = o.TranslationStrategy,
                u = new r.Schema({
                    path: {
                        type: String,
                        ref: a.Page
                    },
                    language: {
                        type: String
                    },
                    createdBy: {
                        type: String
                    },
                    translationStrategy: {
                        type: String,
                        enum: Object.values(c)
                    },
                    translationStatus: {
                        type: String,
                        enum: Object.values(i),
                        default: i.QUEUED
                    },
                    originalConfig: {
                        type: r.Schema.ObjectId,
                        ref: a.PageConfig
                    },
                    generatedConfig: {
                        type: r.Schema.ObjectId,
                        ref: a.PageConfig
                    },
                    draftConfig: {
                        type: r.Schema.ObjectId,
                        ref: a.PageConfig
                    }
                }, {
                    timestamps: !0
                }),
                s = r.models[a.TranslationJob] || r.model(a.TranslationJob, u);
            e.exports = s
        },
        siE9: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            }));
            var r = function() {
                return {
                    template: "LongTemplate",
                    title: "monday.com pricing and plans",
                    description: "Starting from $8 per user per month, monday.com\u2019s pricing has a plan for everyone.",
                    canonicalUrl: "https://monday.com/pricing/",
                    withFullstory: !0,
                    enableHotjar: !0,
                    fullstoryRecordingFrequency: 100,
                    pricingDefaults: {
                        defaultCurrency: "usd",
                        defaultBillingPeriod: "yearly",
                        defaultSelectedPlanName: "standard"
                    },
                    topbar: {
                        preventMenu: !1
                    },
                    socialButtons: {
                        show: !1
                    },
                    customersList: [{
                        name: "outbrain",
                        imgSrc: "/static/img/pricing/outbrain.jpg"
                    }, {
                        name: "conduit",
                        imgSrc: "/static/img/pricing/conduit.jpg"
                    }, {
                        name: "wework",
                        imgSrc: "/static/img/pricing/wework.jpg"
                    }, {
                        name: "spotim",
                        imgSrc: "/static/img/pricing/spotim.jpg"
                    }],
                    tweetIds: ["950446913760956420", "948055055302770689", "948379472830652416", "940538468249333760"]
                }
            }
        },
        "sj+0": function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "default", (function() {
                return J
            }));
            var r = n("xvhg"),
                a = n("H+61"),
                o = n("UlJF"),
                i = n("7LId"),
                c = n("VIvw"),
                u = n("iHvq"),
                s = n("vJKn"),
                l = n.n(s),
                f = n("rg98"),
                d = n("q1tI"),
                p = n("uhaA"),
                g = n("eomm"),
                m = n.n(g),
                h = n("/rC9"),
                v = n("pGse"),
                E = n("YRc4"),
                y = n("S4xZ"),
                b = n("1BgC"),
                O = n("ZfCQ"),
                S = function(e) {
                    var t = e && e[b.GRANTED_FEATURE_COOKIE];
                    return t && t.split(",")
                },
                P = n("aSMN"),
                T = n("5qtf"),
                C = n("jvQQ"),
                _ = n("GOf+"),
                I = n("YZpo"),
                x = n("zq9a"),
                R = (n("h12S"), n("ehd4")),
                A = n("5HHs"),
                N = function(e, t) {
                    var n = null === e || void 0 === e ? void 0 : e.dynamicMetaTagImagesParamPath,
                        r = n && t && Object(A.a)(n, t);
                    return [{
                        imagePath: r || (null === e || void 0 === e ? void 0 : e.ogImagePath),
                        imageWidth: r && (null === e || void 0 === e ? void 0 : e.dynamicMetaTagImageWidth),
                        imageHeight: r && (null === e || void 0 === e ? void 0 : e.dynamicMetaTagImageHeight)
                    }, {
                        imagePath: r || (null === e || void 0 === e ? void 0 : e.twitterImagePath)
                    }]
                },
                D = n("siE9"),
                j = n("YGBs"),
                w = n("2Dpp"),
                k = n("xKtW"),
                M = n("8+Th"),
                L = n("x/xx").getCachedData,
                F = n("osBV").PlatformManifestProvider,
                q = function() {
                    var e = Object(f.default)(l.a.mark((function e() {
                        var t, n;
                        return l.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = {}, e.prev = 1, n = new F, e.next = 5, L(n);
                                case 5:
                                    t = e.sent, e.next = 12;
                                    break;
                                case 8:
                                    return e.prev = 8, e.t0 = e.catch(1), M.captureException(e.t0), e.abrupt("return", {
                                        success: !1
                                    });
                                case 12:
                                    return e.abrupt("return", t);
                                case 13:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 8]
                        ])
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }();

            function B() {
                return U.apply(this, arguments)
            }

            function U() {
                return (U = Object(f.default)(l.a.mark((function e() {
                    var t, n, r, a;
                    return l.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return t = w.PLATFORM_CDN_URL, n = [], e.prev = 2, e.next = 5, q();
                            case 5:
                                (r = e.sent).response ? (a = r.response, w.MANIFEST_PREFETCHED_ASSET_KEYS.forEach((function(e) {
                                    a[e] && n.push({
                                        type: w.PREFETCH_TYPES.PREFETCH,
                                        href: a[e].replace(w.PLATFORM_MANIFEST_ASSETS_CDN_DOMAIN, t)
                                    })
                                }))) : k.d("getPlatformManifest() failed. Platform manifest response: ".concat(JSON.stringify(r))), e.next = 12;
                                break;
                            case 9:
                                e.prev = 9, e.t0 = e.catch(2), k.c(e.t0);
                            case 12:
                                return e.abrupt("return", n);
                            case 13:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [2, 9]
                    ])
                })))).apply(this, arguments)
            }
            var G = n("nKUr");

            function V(e) {
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
                    var n, r = Object(u.default)(e);
                    if (t) {
                        var a = Object(u.default)(this).constructor;
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments);
                    return Object(c.default)(this, n)
                }
            }
            var H = function() {
                    var e = Object(f.default)(l.a.mark((function e(t, n) {
                        var r, a, o, i;
                        return l.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, Object(p.h)(t);
                                case 2:
                                    return r = e.sent, a = r.statusCode > 200 ? r.statusCode : null, e.next = 6, r.json();
                                case 6:
                                    return o = e.sent, (i = o.pageConfig) || a || (n.statusCode = 404, a = n.statusCode), e.abrupt("return", {
                                        pageConfig: i,
                                        errorCode: a
                                    });
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                J = function(e) {
                    Object(i.default)(c, e);
                    var t = V(c);

                    function c() {
                        return Object(a.default)(this, c), t.apply(this, arguments)
                    }
                    return Object(o.default)(c, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this.props.pageConfig;
                            e && e.abTestVariant && e.abTestName && BigBrain("track", e.abTestName, {
                                ab_test: e.abTestVariant
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props.errorCode;
                            return Object(G.jsx)(m.a, {
                                statusCode: e
                            })
                        }
                    }], [{
                        key: "getInitialProps",
                        value: function() {
                            var e = Object(f.default)(l.a.mark((function e(t) {
                                var a, o, i, c, u, s, f, d, p, g, m, A, w, k, M, L, F, q, U, G, V, J, K, W, $, z, Q, Y, Z, X, ee, te, ne, re, ae, oe, ie, ce, ue, se, le, fe, de, pe, ge, me, he, ve, Ee, ye, be, Oe, Se, Pe, Te, Ce, _e, Ie, xe, Re, Ae, Ne, De, je, we, ke;
                                return l.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (a = t.req, o = t.res, i = t.asPath, c = n("j+Cm"), u = c.handleServerException, s = i, f = {}, d = null, p = null, g = null, m = null, A = null, w = null, k = null, M = null, L = null, F = null, q = "", U = !1, G = null, V = {}, J = {}, K = null, W = [], a && o || window && (BigBrain("track", "back_forward_reload_in_mobile", {
                                                    kind: "force_reload"
                                                }), window.location.reload()), e.prev = 22, d = Object(h.getPageConfigFromRequest)(a), s = Object(h.getPathFromRequest)(a), g = Object(v.isMobileOrTablet)(a), m = Object(v.isMobile)(a), M = a.localeToUse, L = a.userSelectedLocale, w = a.query && a.query[T.FORCE_PRICING], k = a.query && a.query[T.FORCE_CURRENCY], U = !!a.cookies[b.HIDE_BANNER_WITH_BACKGROUND_COOKIE_NAME], q = o.getHeader(y.CLOUDFRONT_VIEWER_COUNTRY_HEADER), F = o.getHeader(y.AB_TEST_EXACT_EVENT_NAME), A = null === ($ = Object(h.getGeneratorSystemConfigOnRequest)(a)) || void 0 === $ ? void 0 : $.isTypeformDisabled, re = a.query && a.query[T.PREVENT_FREE_TIER_PARAM], ae = a.cookies[b.HAS_STUDENT_PLAN_INDICATION_COOKIE_NAME], oe = Object(I.getHasStudentPlan)({
                                                    forcePricing: w,
                                                    hasStudentPlanCookie: ae
                                                }), ie = Object(E.getHasFreeTierByRequest)(a), G = S(a.cookies), d) {
                                                e.next = 46;
                                                break
                                            }
                                            return e.next = 43, H(s, o);
                                        case 43:
                                            ce = e.sent, d = ce.pageConfig, p = ce.errorCode;
                                        case 46:
                                            return ue = Object(E.getAllAbTestsVariantsFromRequest)(a), se = d.localeId, e.next = 50, Object(C.c)(se);
                                        case 50:
                                            if (f = e.sent, V = Object(P.a)(a.query), le = a.cookies, fe = Object(_.b)(V, le, d), de = fe.clusterId, pe = fe.subClusterId, ge = fe.clusterIdSource, me = fe.subClusterIdSource, null === (z = d) || void 0 === z || !z.fetchClusterConfig) {
                                                e.next = 58;
                                                break
                                            }
                                            return e.next = 57, Object(_.a)(de, pe, M);
                                        case 57:
                                            J = e.sent;
                                        case 58:
                                            if (he = Object(D.a)(), ve = he.pricingDefaults, Ee = Object(O.b)({
                                                    forcePricing: w,
                                                    cookies: le,
                                                    abTests: ue,
                                                    currency: Object(j.a)({
                                                        forceCurrency: k,
                                                        pricingDefaults: ve,
                                                        countryCode: q
                                                    }),
                                                    isV12PricingVersion: null === (Q = d) || void 0 === Q ? void 0 : Q.isV12PricingVersion
                                                }), ye = null === (Y = d) || void 0 === Y ? void 0 : Y.clusterMiniSite, be = null === (Z = d) || void 0 === Z ? void 0 : Z.useProductMiniSiteConfig, Oe = null === (X = d) || void 0 === X ? void 0 : X.ignorePageClusterConfig, Se = null === (ee = d) || void 0 === ee ? void 0 : ee.pageProductId, Pe = null === (te = d) || void 0 === te ? void 0 : te.clusterId, Te = null === (ne = d) || void 0 === ne ? void 0 : ne.subClusterId, Oe || !Pe && !Te) {
                                                e.next = 70;
                                                break
                                            }
                                            return e.next = 69, Object(_.a)(Pe, Te, M);
                                        case 69:
                                            K = e.sent;
                                        case 70:
                                            return Ce = null === a || void 0 === a ? void 0 : a.query[T.DYNAMIC_ASSET_PARAM], _e = N(d, Ce), Ie = Object(r.a)(_e, 2), xe = Ie[0], Re = Ie[1], Ae = Object(R.getPersistantServerCookiesFromRequest)(a, o), Ne = n("Q8ZC"), De = Ne.getPageLocales, je = a.path, e.next = 77, De(je);
                                        case 77:
                                            if (W = e.sent, ke = [], !(we = !0)) {
                                                e.next = 84;
                                                break
                                            }
                                            return e.next = 83, B();
                                        case 83:
                                            ke = e.sent;
                                        case 84:
                                            return e.abrupt("return", {
                                                forcePricing: w,
                                                forceCurrency: k,
                                                pageConfig: d,
                                                asPath: i,
                                                errorCode: p,
                                                isMobileOrTabletBrowser: g,
                                                isMobileBrowser: m,
                                                isTypeformDisabled: A,
                                                abTestVariants: ue,
                                                translations: f,
                                                abTestExactEventName: F,
                                                cloudfrontViewerCountry: q,
                                                pricingVersion: Ee,
                                                hasFreeTier: ie,
                                                hasStudentPlan: oe,
                                                localeToUse: M,
                                                userSelectedLanguage: L,
                                                hideBannerWithBackground: U,
                                                grantedFeatures: G,
                                                freeTierForcePrevent: re,
                                                clusterId: de,
                                                subClusterId: pe,
                                                clusterIdSource: ge,
                                                subClusterIdSource: me,
                                                clusterConfig: J,
                                                isClusterMiniSitePage: ye,
                                                useProductMiniSiteConfig: be,
                                                facebookMetaOverride: xe,
                                                twitterMetaOverride: Re,
                                                dynamicAssetParam: Ce,
                                                cookies: le,
                                                activePagePath: s,
                                                activeOriginalPagePath: je,
                                                pageClusterConfig: K,
                                                pageProductId: Se,
                                                pageClusterId: Pe,
                                                pageSubClusterId: Te,
                                                localizedPages: W,
                                                persistantCookies: Ae,
                                                shouldGetSignupPrefetchedAssets: we,
                                                signupDynamicAssetsLinks: ke
                                            });
                                        case 87:
                                            return e.prev = 87, e.t0 = e.catch(22), e.next = 91, u({
                                                externalMessage: "Base template's page getInitialProps failed with an exception: ",
                                                e: e.t0,
                                                req: a,
                                                res: o
                                            });
                                        case 91:
                                            return o.statusCode = x.INTERNAL_SERVER_ERROR_CODE, e.abrupt("return", {
                                                errorCode: x.INTERNAL_SERVER_ERROR_CODE
                                            });
                                        case 93:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [22, 87]
                                ])
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }]), c
                }(d.PureComponent)
        },
        uhaA: function(e, t, n) {
            "use strict";
            n.d(t, "h", (function() {
                return d
            })), n.d(t, "i", (function() {
                return p
            })), n.d(t, "o", (function() {
                return g
            })), n.d(t, "m", (function() {
                return m
            })), n.d(t, "p", (function() {
                return h
            })), n.d(t, "g", (function() {
                return v
            })), n.d(t, "l", (function() {
                return E
            })), n.d(t, "e", (function() {
                return y
            })), n.d(t, "b", (function() {
                return b
            })), n.d(t, "n", (function() {
                return O
            })), n.d(t, "d", (function() {
                return S
            })), n.d(t, "a", (function() {
                return P
            })), n.d(t, "c", (function() {
                return T
            })), n.d(t, "q", (function() {
                return C
            })), n.d(t, "r", (function() {
                return _
            })), n.d(t, "f", (function() {
                return I
            })), n.d(t, "k", (function() {
                return x
            })), n.d(t, "j", (function() {
                return R
            }));
            var r = n("vJKn"),
                a = n.n(r),
                o = n("rg98"),
                i = n("cpVT");

            function c(e, t) {
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
                    t % 2 ? c(Object(n), !0).forEach((function(t) {
                        Object(i.default)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var s = "https://monday.com",
                l = {
                    credentials: "same-origin",
                    headers: {
                        "Content-Type": "application/json"
                    }
                },
                f = function(e, t) {
                    return fetch(e, u(u({}, l), t))
                },
                d = function(e, t) {
                    return f("".concat("https://monday.com", "/get-page-config?path=").concat(e))
                },
                p = function(e, t) {
                    return f("".concat(s, "/dynamic/templates-generator/generated-page-exists?path=").concat(e))
                },
                g = function(e) {
                    return f("".concat(s, "/dynamic/templates-generator/remove-page?path=").concat(e), {
                        method: "POST"
                    })
                },
                m = function(e) {
                    return f("".concat(s, "/dynamic/templates-generator/publish"), {
                        method: "POST",
                        body: JSON.stringify({
                            pageConfig: e
                        })
                    })
                },
                h = function(e, t) {
                    return f("".concat(s, "/dynamic/templates-generator/restore-page"), {
                        method: "POST",
                        body: JSON.stringify({
                            path: e,
                            historyIndex: t
                        })
                    })
                },
                v = function(e) {
                    return f("".concat(s, "/dynamic/templates-generator/get-or-create-page"), {
                        method: "POST",
                        body: JSON.stringify({
                            path: e
                        })
                    })
                },
                E = function(e) {
                    return f("".concat(s, "/dynamic/templates-generator/migrate-existing-translations"), {
                        method: "POST",
                        body: JSON.stringify({
                            path: e
                        })
                    })
                },
                y = function(e) {
                    return f("".concat(s, "/dynamic/templates-generator/get-translated-pages?filter=").concat(e), {
                        method: "GET"
                    })
                },
                b = function(e, t, n) {
                    return f("".concat(s, "/dynamic/templates-generator/create-translation-jobs"), {
                        method: "POST",
                        body: JSON.stringify({
                            path: e,
                            languages: t,
                            translationStrategy: n
                        })
                    })
                },
                O = function() {
                    var e = Object(o.default)(a.a.mark((function e() {
                        return a.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", f("".concat(s, "/dynamic/templates-generator/refresh-translation-jobs-status"), {
                                        method: "POST"
                                    }));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                S = function(e) {
                    return f("".concat(s, "/dynamic/templates-generator/get-translation-job/").concat(e, "/draft-config"), {
                        method: "GET"
                    })
                },
                P = function(e) {
                    return f("".concat(s, "/dynamic/templates-generator/create-ab-test"), {
                        method: "POST",
                        body: JSON.stringify({
                            abTestData: e
                        })
                    })
                },
                T = function() {
                    return f("".concat(s, "/dynamic/templates-generator/fetch-ab-tests-data"), {
                        method: "GET"
                    })
                },
                C = function(e) {
                    return f("".concat(s, "/dynamic/templates-generator/start-ab-test"), {
                        method: "POST",
                        body: JSON.stringify({
                            abTestId: e
                        })
                    })
                },
                _ = function(e) {
                    return f("".concat(s, "/dynamic/templates-generator/stop-ab-test"), {
                        method: "POST",
                        body: JSON.stringify({
                            abTestId: e
                        })
                    })
                },
                I = function() {
                    return f("".concat(s, "/dynamic/templates-generator/get-clusters"), {
                        method: "GET"
                    })
                },
                x = function() {
                    var e = Object(o.default)(a.a.mark((function e() {
                        var t, n;
                        return a.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, f("".concat(s, "/dynamic/templates-generator/get-solutions"), {
                                        method: "GET"
                                    });
                                case 2:
                                    return t = e.sent, e.next = 5, t.json();
                                case 5:
                                    return n = e.sent, e.abrupt("return", n);
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                R = function() {
                    var e = Object(o.default)(a.a.mark((function e(t) {
                        var n, r, o, i;
                        return a.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = t.solutionId, r = t.localeId, e.next = 3, f("".concat(s, "/dynamic/templates-generator/get-solution?localeId=").concat(r, "&solutionId=").concat(n), {
                                        method: "GET"
                                    });
                                case 3:
                                    return o = e.sent, e.next = 6, o.json();
                                case 6:
                                    return i = e.sent, e.abrupt("return", i);
                                case 8:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
        },
        zq9a: function(e, t) {
            e.exports = {
                SUCCESS_CODE: 200,
                INTERNAL_SERVER_ERROR_CODE: 500,
                PAGE_NOT_FOUND_ERROR_CODE: 404,
                FORBIDDEN_ERROR_CODE: 403
            }
        }
    }
]);
//# sourceMappingURL=a0649c9b9fd119eba6b9dd59740277d4e35e82bf.27723c9157fad0d95328.js.map