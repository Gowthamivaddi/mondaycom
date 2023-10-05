(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [9], {
        "0SMW": function(e, t, n) {
            var _ = n("vJKn"),
                r = n("qVT1"),
                i = function() {
                    var e = r(_.mark((function e() {
                        return _.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", new Promise((function(e, t) {
                                        try {
                                            requestAnimationFrame((function() {
                                                var t = document.body.parentNode;
                                                if (t.scrollHeight - t.clientHeight === 0) return e(0);
                                                var n = (document.body.scrollTop || t.scrollTop) / (t.scrollHeight - t.clientHeight) * 100;
                                                e(n)
                                            }))
                                        } catch (n) {
                                            t()
                                        }
                                    })));
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
                o = function() {
                    var e = r(_.mark((function e(t) {
                        return _.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", new Promise((function(e, n) {
                                        try {
                                            requestAnimationFrame((function() {
                                                var n = t.getBoundingClientRect(),
                                                    _ = n.top >= 0 && n.bottom <= (window.innerHeight || document.documentElement.clientHeight) && n.left >= 0 && n.right <= (window.innerWidth || document.documentElement.clientWidth);
                                                e(_)
                                            }))
                                        } catch (_) {
                                            n()
                                        }
                                    })));
                                case 1:
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
                isImageLoaded: function(e) {
                    return e && e.complete
                },
                scrollTo: function(e, t) {
                    var n = window.scrollY,
                        _ = .5 * (n + e),
                        r = n - _,
                        i = performance.now();
                    window.requestAnimationFrame((function e() {
                        var n = (performance.now() - i) / t;
                        n > 1 && (n = 1), window.scrollTo(0, _ + r * Math.cos(n * Math.PI)), n < 1 && window.requestAnimationFrame(e)
                    }))
                },
                isRunningInClient: function() {
                    return !(!window.document || !window.document.createElement)
                },
                getScrollPercent: i,
                getViewportHeight: function() {
                    return new Promise((function(e, t) {
                        try {
                            requestAnimationFrame((function() {
                                var t = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
                                e(t)
                            }))
                        } catch (n) {
                            t()
                        }
                    }))
                },
                getDocumentFullHeight: function() {
                    return new Promise((function(e, t) {
                        try {
                            requestAnimationFrame((function() {
                                var t = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
                                e(t)
                            }))
                        } catch (n) {
                            t()
                        }
                    }))
                },
                getPassiveIfSupported: function() {
                    var e = !1;
                    try {
                        var t = {
                            get passive() {
                                return e = !0, !1
                            }
                        };
                        window.addEventListener("test", null, t), window.removeEventListener("test", null, t)
                    } catch (n) {
                        e = !1
                    }
                    return e
                },
                isNodeFullyInView: o
            }
        },
        "1BgC": function(e, t, n) {
            var _, r = n("oI91"),
                i = n("7nzS").COOKIE_CATEGORIES,
                o = n("xM9h"),
                a = o.StoriesCookies,
                c = o.UserCampaignType,
                u = n("XqsQ").USER_SELECTED_LOCALE_ID_COOKIE,
                E = n("A1E4").PRICE_PER_USER_AB_TEST,
                s = "top_banner_cookie",
                d = "bb_visitor_id",
                l = "experiment_visitor_id",
                T = "platform_user_id",
                I = "platform_account_id",
                O = "user_selected_cluster",
                C = "user_selected_industry",
                f = "hide_banner_with_background",
                A = "website_product_signup",
                p = "monday-exclude-synthetic-test",
                S = "new_mobile_flow_config",
                R = "m_campaign",
                N = "m_campaign_id",
                g = "m_source",
                m = "m_banner",
                w = "m_medium",
                b = "m_content",
                L = "m_retargeting",
                D = "m_referrer",
                P = "m_vertical",
                y = "m_landing_page",
                h = "m_gift_send",
                U = "m_aw_grp",
                M = "m_aw_kw",
                v = "m_aw_ad",
                k = "monday_has_free_tier",
                G = "monday_free_tier_account_creation_item_resource_credit",
                B = "homepage_account_creation_item_resource_credit",
                K = "use_old_storage_settings",
                F = "is_in_keep_region_test",
                Y = "utm_cluster_id",
                x = "utm_sub_cluster_id",
                H = "platform_account_cluster",
                V = "platform_account_sub_cluster",
                W = "welcome_back_update_cta",
                j = "website_ab_test_debug",
                q = "is_paying_account",
                z = "xi_country",
                X = "cloudfront_viewer_country",
                Q = "force_currency_homepage",
                Z = "referral_token",
                J = "homepage_force_200_item_limitation",
                $ = "monday_pricing_version",
                ee = "platform_free_tier_version",
                te = "platform_hide_basic",
                ne = "platform_show_solutions_pricing",
                _e = "hp_pricing",
                re = "utm_locale_id",
                ie = "skip_clusters_question",
                oe = "marketing_template_board_ids",
                ae = "stories_template_board_id_sign_up",
                ce = "coupon_code",
                ue = "stories_template_board_id",
                Ee = "jwt_et",
                se = "viewedOuibounceModal",
                de = "granted_feature_cookie",
                le = ".monday.com",
                Te = {
                    path: "/",
                    expires: 365,
                    domain: le,
                    secure: !0
                },
                Ie = "crm_big_signup_modal_for_products_ab_test",
                Oe = "dev_big_signup_modal_for_products_ab_test",
                Ce = "multiple_products_selection",
                fe = "skip_ab_tests_hp",
                Ae = "install_products_flow",
                pe = "mp_test",
                Se = (r(_ = {}, s, {
                    isMandatory: !0,
                    category: i.NECESSARY
                }), r(_, f, {
                    isMandatory: !0,
                    category: i.NECESSARY
                }), r(_, d, {
                    isMandatory: !0,
                    category: i.NECESSARY
                }), r(_, l, {
                    isMandatory: !0,
                    category: i.NECESSARY
                }), r(_, T, {
                    isMandatory: !0,
                    category: i.FUNCTIONAL
                }), r(_, I, {
                    isMandatory: !0,
                    category: i.FUNCTIONAL
                }), r(_, O, {
                    isMandatory: !0,
                    category: i.NECESSARY
                }), r(_, C, {
                    isMandatory: !0,
                    category: i.NECESSARY
                }), r(_, A, {
                    isMandatory: !0,
                    category: i.NECESSARY
                }), r(_, R, {
                    isMandatory: !0,
                    category: i.ANALYTICS
                }), r(_, N, {
                    isMandatory: !0,
                    category: i.ANALYTICS
                }), r(_, g, {
                    isMandatory: !0,
                    category: i.ANALYTICS
                }), r(_, m, {
                    isMandatory: !0,
                    category: i.ANALYTICS
                }), r(_, w, {
                    isMandatory: !0,
                    category: i.ANALYTICS
                }), r(_, b, {
                    isMandatory: !0,
                    category: i.ANALYTICS
                }), r(_, L, {
                    isMandatory: !0,
                    category: i.ANALYTICS
                }), r(_, D, {
                    isMandatory: !0,
                    category: i.ANALYTICS
                }), r(_, P, {
                    isMandatory: !0,
                    category: i.ANALYTICS
                }), r(_, y, {
                    isMandatory: !0,
                    category: i.ANALYTICS
                }), r(_, h, {
                    isMandatory: !0,
                    category: i.ANALYTICS
                }), r(_, U, {
                    isMandatory: !0,
                    category: i.ANALYTICS
                }), r(_, M, {
                    isMandatory: !0,
                    category: i.ANALYTICS
                }), r(_, v, {
                    isMandatory: !0,
                    category: i.ANALYTICS
                }), r(_, oe, {
                    isMandatory: !0,
                    options: {
                        expires: 30,
                        domain: le
                    },
                    category: i.FUNCTIONAL
                }), r(_, ae, {
                    isMandatory: !0,
                    options: {
                        expires: 7,
                        domain: le
                    },
                    category: i.NECESSARY
                }), r(_, ue, {
                    isMandatory: !0,
                    options: {
                        expires: 7,
                        domain: le
                    },
                    category: i.NECESSARY
                }), r(_, ce, {
                    isMandatory: !0,
                    options: {
                        expires: 1
                    },
                    category: i.NECESSARY
                }), r(_, Ee, {
                    isMandatory: !0,
                    options: {
                        expires: 1
                    },
                    category: i.NECESSARY
                }), r(_, z, {
                    isMandatory: !0,
                    category: i.NECESSARY
                }), r(_, X, {
                    isMandatory: !0,
                    category: i.NECESSARY
                }), r(_, Z, {
                    isMandatory: !0,
                    category: i.NECESSARY
                }), r(_, J, {
                    isMandatory: !0,
                    category: i.NECESSARY
                }), r(_, c.STORIES_CAMPAIGN, {
                    isMandatory: !0,
                    category: i.ANALYTICS
                }), r(_, c.STORIES_SOURCE, {
                    isMandatory: !0,
                    category: i.ANALYTICS
                }), r(_, c.STORIES_MEDIUM, {
                    isMandatory: !0,
                    category: i.ANALYTICS
                }), r(_, c.STORIES_CONTENT, {
                    isMandatory: !0,
                    category: i.ANALYTICS
                }), r(_, c.STORIES_CAMPAIGN_DATE, {
                    isMandatory: !0,
                    category: i.ANALYTICS
                }), r(_, c.STORIES_SLUG, {
                    isMandatory: !0,
                    category: i.ANALYTICS
                }), r(_, c.STORIES_TEMPLATE_TYPE, {
                    isMandatory: !0,
                    category: i.ANALYTICS
                }), r(_, a.MONDAY_USER_ID, {
                    isMandatory: !0,
                    category: i.NECESSARY
                }), r(_, a.MONDAY_ACCOUNT_SLUGS, {
                    isMandatory: !0,
                    category: i.NECESSARY
                }), r(_, k, {
                    isMandatory: !0,
                    category: i.NECESSARY
                }), r(_, G, {
                    isMandatory: !0,
                    category: i.NECESSARY
                }), r(_, K, {
                    isMandatory: !0,
                    category: i.NECESSARY
                }), r(_, F, {
                    isMandatory: !0,
                    category: i.NECESSARY
                }), r(_, re, {
                    isMandatory: !0,
                    category: i.FUNCTIONAL
                }), r(_, ie, {
                    isMandatory: !0,
                    category: i.FUNCTIONAL
                }), r(_, u, {
                    isMandatory: !0,
                    category: i.FUNCTIONAL
                }), r(_, Y, {
                    isMandatory: !0,
                    category: i.NECESSARY
                }), r(_, W, {
                    isMandatory: !0,
                    category: i.NECESSARY
                }), r(_, j, {
                    isMandatory: !0,
                    category: i.NECESSARY
                }), r(_, x, {
                    isMandatory: !0,
                    category: i.NECESSARY
                }), r(_, H, {
                    isMandatory: !0,
                    category: i.NECESSARY
                }), r(_, V, {
                    isMandatory: !0,
                    category: i.NECESSARY
                }), r(_, q, {
                    isMandatory: !0,
                    category: i.NECESSARY
                }), r(_, E, {
                    isMandatory: !0,
                    category: i.NECESSARY
                }), r(_, se, {
                    isMandatory: !0,
                    category: i.FUNCTIONAL
                }), r(_, Q, {
                    isMandatory: !0,
                    category: i.NECESSARY
                }), r(_, de, {
                    isMandatory: !0,
                    category: i.NECESSARY
                }), r(_, B, {
                    isMandatory: !0,
                    category: i.NECESSARY
                }), r(_, $, {
                    isMandatory: !0,
                    category: i.NECESSARY
                }), r(_, _e, {
                    isMandatory: !0,
                    category: i.NECESSARY
                }), r(_, ee, {
                    isMandatory: !0,
                    category: i.NECESSARY
                }), r(_, te, {
                    isMandatory: !0,
                    category: i.NECESSARY
                }), r(_, ne, {
                    isMandatory: !0,
                    category: i.NECESSARY
                }), r(_, Ie, {
                    isMandatory: !0,
                    category: i.NECESSARY
                }), r(_, Oe, {
                    isMandatory: !0,
                    category: i.NECESSARY
                }), r(_, Ce, {
                    isMandatory: !0,
                    category: i.NECESSARY
                }), r(_, fe, {
                    isMandatory: !0,
                    category: i.NECESSARY
                }), r(_, Ae, {
                    isMandatory: !0,
                    category: i.NECESSARY
                }), r(_, pe, {
                    isMandatory: !0,
                    category: i.FUNCTIONAL
                }), r(_, p, {
                    isMandatory: !0,
                    category: i.NECESSARY
                }), r(_, S, {
                    isMandatory: !0,
                    category: i.NECESSARY
                }), _);
            e.exports = {
                TOP_BANNER_COOKIE: s,
                BIG_BRAIN_VISITOR_ID: d,
                EXPERIMENT_VISITOR_ID: l,
                MONDAY_PLATFORM_USER_ID: T,
                MONDAY_PLATFORM_ACCOUNT_ID: I,
                USER_SELECTED_CLUSTER_COOKIE: O,
                USER_SELECTED_INDUSTRY_COOKIE: C,
                WEBSITE_PRODUCT_SIGNUP_COOKIE_NAME: A,
                ALWAYS_FS: "always_fs",
                HIDE_BANNER_WITH_BACKGROUND_COOKIE_NAME: f,
                M_CAMPAIGN: R,
                M_CAMPAIGN_ID: N,
                M_SOURCE: g,
                M_BANNER: m,
                M_MEDIUM: w,
                M_CONTENT: b,
                M_RETARGETING: L,
                M_REFERRER: D,
                M_VERTICAL: P,
                M_LANDING_PAGE: y,
                M_GIFT_SEND: h,
                M_AW_GRP: U,
                M_AW_KW: M,
                M_AW_AD: v,
                HAS_FREE_TIER_INDICATION_COOKIE_NAME: k,
                HAS_STUDENT_PLAN_INDICATION_COOKIE_NAME: "monday_has_student_plan",
                WELCOME_BACK_SHOULD_UPDATE_CTA_COOKIE_NAME: W,
                WEBSITE_AB_TEST_DEBUG_COOKIE_NAME: j,
                LAST_ACCOUNT_SLUG: "dapulseLastLoginAccount",
                DEFAULT_USERS_OPTION: "users_option",
                MONDAY_FREE_TIER_ACCOUNT_CREATION_ITEM_RESOURCE_CREDIT_COOKIE_NAME: G,
                HOMEPAGE_ACCOUNT_CREATION_ITEM_RESOURCE_CREDIT_COOKIE_NAME: B,
                CLUSTER_COOKIE: Y,
                SUB_CLUSTER_COOKIE: x,
                PLATFORM_ACCOUNT_CLUSTER_COOKIE: H,
                PLATFORM_ACCOUNT_SUB_CLUSTER_COOKIE: V,
                COUNTRY_COOKIE_NAME: z,
                CLOUDFRONT_VIEWER_COUNTRY_COOKIE_NAME: X,
                CURRENCY_COOKIE_NAME: Q,
                IS_PAYING_ACCOUNT_COOKIE_NAME: q,
                ACCOUNT_REFERRAL_COOKIE: Z,
                HOMEPAGE_FORCE_200_ITEM_LIMITATION: J,
                LOCALE_COOKIE: re,
                COOKIE_EXPIRY_DAYS_FOR_LOCALIZATION: 7,
                SKIP_CLUSTER_QUESTION: ie,
                DAYS_TO_EXPIRE: 365,
                EXTEND_TRIAL_COOKIE_DAYS_EXPIRE_DEFAULT: 1,
                COUPON_DAYS_EXPIRE_DEFAULT: 1,
                MARKETING_TEMPLATE_BOARD_IDS: oe,
                STORIES_TEMPLATE_BOARD_ID_SIGN_UP: ae,
                COUPON_CODE: ce,
                STORIES_TEMPLATE_BOARD_ID: ue,
                EXTEND_TRIAL_COOKIE_KEY: Ee,
                VIEWED_OUI_BOUNCE_MODAL_COOKIE: se,
                GRANTED_FEATURE_COOKIE: de,
                COOKIES_DOMAIN: le,
                IS_SECURE_COOKIE: !0,
                DEFAULT_COOKIES_SETTINGS: Te,
                COOKIES_CONFIG: Se,
                USE_OLD_STORAGE_SETTINGS: K,
                IS_IN_KEEP_REGION_TEST: F,
                PLATFORM_PRICING_VERSION_COOKIE: $,
                HOMEPAGE_PRICING_VERSION_COOKIE: _e,
                PLATFORM_FREE_TIER_VERSION_COOKIE: ee,
                PLATFORM_HIDE_BASIC_COOKIE: te,
                PLATFORM_SHOW_SOLUTIONS_PRICING: ne,
                CRM_BIG_SIGNUP_MODAL_FOR_PRODUCTS_AB_TEST: Ie,
                DEV_BIG_SIGNUP_MODAL_FOR_PRODUCTS_AB_TEST: Oe,
                MULTIPLE_PRODUCTS_SELECTION: Ce,
                SKIP_AB_TESTS_HP: fe,
                INSTALL_PRODUCTS_FLOW: Ae,
                MULTI_PRODUCTS_TEST_COOKIE_NAME: pe,
                SYNTHETIC_TEST_COOKIE_NAME: p,
                SOFT_SIGNUP_MOBILE_TEST_COOKIE_NAME: S
            }
        },
        "3gK6": function(e, t) {
            var n = function(e) {
                    return (e = e || "").split("?")[0]
                },
                _ = function(e) {
                    var t = e.search;
                    return "" === t ? {} : (t = t.replace("?", "")).split("&").reduce((function(e, t) {
                        var n = t.split("="),
                            _ = n[0],
                            r = n[1];
                        return e[_] = r, e
                    }), {})
                },
                r = function(e) {
                    return "/" === (e = e || "")[e.length - 1] ? e : e + "/"
                },
                i = function(e) {
                    try {
                        return e ? "/" === e ? "/" : e.endsWith("/") ? e.slice(0, -1) : e : e
                    } catch (t) {
                        return e
                    }
                },
                o = function(e, t) {
                    return r(e).toLowerCase() === r(t).toLowerCase()
                },
                a = function(e, t) {
                    var n = _(e);
                    return n[t] ? decodeURI(n[t]) : ""
                };
            e.exports = {
                truncateQueryParams: n,
                getQueryStringAsHash: _,
                getQueryParamValue: function(e, t) {
                    return _(e)[t]
                },
                normalizeUrl: r,
                stripTrailingSlash: i,
                sameUrls: o,
                isSameUrlWithoutQueryParams: function(e, t) {
                    var _ = n(e),
                        r = n(t);
                    return o(_, r)
                },
                isExactMatchToOneOfPages: function(e, t) {
                    var _ = n(e);
                    return t.filter((function(e) {
                        return o(_, e)
                    })).length > 0
                },
                addParamToURL: function(e, t, n) {
                    var _ = e.indexOf("?") > -1 ? "&" : "?";
                    return "".concat(e).concat(_).concat(t, "=").concat(n)
                },
                addHashToURL: function(e, t) {
                    return "".concat(e, "#").concat(t)
                },
                normalizeUrlForCanonical: function(e) {
                    return (e = n(e = e || "")).endsWith("/") && (e = e.substring(0, e.length - 1)), "" == e || e.startsWith("/") ? e = "https://monday.com".concat(e) : e.startsWith("https") ? e : e.startsWith("http") ? e = e.replace("http", "https") : e
                },
                getDecodedParamFromQuery: a,
                getStringKeyForUrl: function(e) {
                    var t = e.replace(/\/$/, "");
                    return t = (t = t.replace(/^\//, "")).replace(/\//g, "_")
                },
                getLastPartOfUrl: function(e) {
                    if (!e) return "";
                    var t = n(e),
                        _ = i(t).lastIndexOf("/");
                    return _ ? t.substring(_ + 1) : t
                },
                getUrlParamValue: function(e, t) {
                    try {
                        var n = function(e) {
                            return "?" + (null === e || void 0 === e ? void 0 : e.split(/\?/)[1])
                        }(e);
                        return new URLSearchParams(n).get(t)
                    } catch (_) {
                        return ""
                    }
                },
                getUrlParamValueFromCurrentLocation: function(e) {
                    try {
                        return a(window.location, e)
                    } catch (t) {
                        return ""
                    }
                }
            }
        },
        "7nzS": function(e, t, n) {
            var _, r = n("oI91"),
                i = {
                    NECESSARY: "necessary",
                    FUNCTIONAL: "functional",
                    ANALYTICS: "analytics",
                    MARKETING: "marketing"
                },
                o = (r(_ = {}, i.NECESSARY, {
                    gtmAllowedDataLayerVariable: "cookiehub_necessary"
                }), r(_, i.FUNCTIONAL, {
                    gtmAllowedDataLayerVariable: "cookiehub_preferences"
                }), r(_, i.ANALYTICS, {
                    gtmAllowedDataLayerVariable: "cookiehub_analytics"
                }), r(_, i.MARKETING, {
                    gtmAllowedDataLayerVariable: "cookiehub_marketing"
                }), _);
            e.exports = {
                COOKIE_CATEGORIES: i,
                COOKIE_CATEGORIES_GTM_MAPPINGS: o
            }
        },
        "87MR": function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "initBigBrainTracker", (function() {
                return O
            })), n.d(t, "trackEvent", (function() {
                return C
            })), n.d(t, "trackEventImmediately", (function() {
                return f
            })), n.d(t, "setUtmClusterId", (function() {
                return A
            })), n.d(t, "setUtmSubClusterId", (function() {
                return p
            })), n.d(t, "setUtmLocaleId", (function() {
                return S
            })), n.d(t, "trackCommunityEvent", (function() {
                return R
            })), n.d(t, "trackBigBrainPageView", (function() {
                return N
            }));
            var _ = n("vJKn"),
                r = n.n(_),
                i = n("rg98"),
                o = n("cpVT"),
                a = n("yAMK"),
                c = n("3gK6"),
                u = n("xwIp"),
                E = n("Pr/7"),
                s = n("1BgC"),
                d = n("o6i0");

            function l(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var _ = Object.getOwnPropertySymbols(e);
                    t && (_ = _.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, _)
                }
                return n
            }

            function T(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? l(Object(n), !0).forEach((function(t) {
                        Object(o.default)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var I = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = parseInt((new Date).getTime() / 1e3),
                        n = e.source || a.HP_SOURCE,
                        _ = e.group || a.HP_GROUP;
                    return T({
                        timestamp: t,
                        source: n,
                        group: _
                    }, e)
                },
                O = function(e) {
                    window.BigBrainQ = [], window.BigBrain = e ? new BigBrainTracker({
                        bigbrain_url: "https://data.bigbrain.me",
                        send_immediately: !0
                    }) : function(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        if (e === a.TRACK_EVENT) {
                            var _ = I(n),
                                r = JSON.stringify(_);
                            console.info([e, t, r])
                        }
                    }
                },
                C = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (Object(u.b)()) console.log("bigbrain-service: trackEvent does not emit events from the server-side to BigBrain. If you must emit during a server call or render, use trackBigBrainEventOnServer().");
                    else {
                        var n = I(t);
                        window.BigBrain ? window.BigBrain(a.TRACK_EVENT, e, n) : console.log("Missing BigBrain in window")
                    }
                },
                f = function() {
                    var e = Object(i.default)(r.a.mark((function e(t) {
                        var n, _, i, o, a, c = arguments;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = c.length > 1 && void 0 !== c[1] ? c[1] : {}, _ = I(n), i = {
                                        bbVisitorId: Object(E.b)(s.BIG_BRAIN_VISITOR_ID),
                                        screen_height: screen.height,
                                        screen_width: screen.width,
                                        os_language: navigator.language,
                                        user_agent: navigator.userAgent
                                    }, o = [T(T(T({}, _), i), {}, {
                                        name: t
                                    })], a = JSON.stringify(o), e.abrupt("return", fetch(d.BIGBRAIN_TRACKING_URL, {
                                        body: a,
                                        method: "POST",
                                        keepalive: !0,
                                        headers: {
                                            "Content-Type": "application/json"
                                        }
                                    }));
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                A = function(e) {
                    window.BigBrain && window.BigBrain("set_utm_cluster_id", e)
                },
                p = function(e) {},
                S = function(e) {
                    window.BigBrain && window.BigBrain("set_utm_locale_id", e)
                },
                R = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    t.source = a.STORIES_SOURCE, window.currentUser ? (t.pulse_user_id = t.pulse_user_id || window.currentUser.mondayUserId, t.pulse_account_id = t.pulse_account_id || window.currentUser.mondayAccountId) : window.mondayUserId && (t.pulse_user_id = t.pulse_user_id || window.mondayUserId);
                    var n = I(t);
                    if (window.BigBrain) try {
                        window.BigBrain(a.TRACK_EVENT, e, n)
                    } catch (_) {
                        console.log("error trackCommunityEvent ", _)
                    } else console.log("Missing BigBrain in window")
                },
                N = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location.pathname,
                        t = arguments.length > 1 ? arguments[1] : void 0,
                        n = arguments.length > 2 ? arguments[2] : void 0,
                        _ = {
                            kind: e = "/" === (e = Object(c.truncateQueryParams)(e))[e.length - 1] ? e : e + "/",
                            info3: location.href,
                            direct_object: window.visitGuid,
                            info1: t ? "".concat(t).concat(n ? "," + n : "") : ""
                        };
                    C(a.PAGE_VIEW, _)
                }
        },
        A1E4: function(e, t) {
            e.exports = {
                DEBUG_AB_TEST_PARAM_NAME: "debug-ab-test-name",
                PRICE_PER_USER_AB_TEST: "homepage_price_per_user_ab_test",
                NEW_COOKIES_POLICY_AB_TEST: "new_cookies_policy_ab_test",
                SOFT_SIGNUP_TRIAL_CTA_HOMEPAGE_AB_TEST: "soft_signup_trial_cta_homepage_ab_test",
                SOFT_SIGNUP_TRIAL_CTA_LP_AB_TEST: "soft_signup_trial_cta_lp_ab_test",
                SKIP_SIGN_UP_STEP_IN_PRICING_PAGE_AB_TEST: "skip_sign_up_step_in_pricing_page_ab_test",
                DRIFT_PRICING_CHATBOT_CONTACT_SALES_AB_TEST: "drift_pricing_chatbot_contact_sales_ab_test",
                HOMEPAGE_PRICE_PER_SEAT_NEW_AB_TEST: "homepage_price_per_seat_new_ab_test",
                EXIT_POP_UP_SURVEY_AB_TEST: "exit_pop_up_survey_ab_test",
                LEARN_MORE_AND_SIGNUP_BUTTON: {
                    test_name: "learn_more_and_signup_button",
                    new_variation_name: "new_with_learn_more_and_signup_button"
                },
                LEARN_MORE_TO_PRODUCT_BUTTON: {
                    test_name: "learn_more_to_product_button_new",
                    new_variation_name: "new_with_learn_more_to_product_button"
                },
                HOMEPAGE_PRICE_PER_SEAT_V3_AB_TEST: "homepage_price_per_seat_v3_ab_test",
                TRY_FOR_FREE_CTA_AB_TEST: "try_for_free_cta_ab_test",
                REVIVE_EXIT_POPUP_AB_TEST: {
                    test_name: "revive_exit_popup_ab_test",
                    new_variation_name: "new_with_exit_popup"
                },
                PERFORMANCE_STATIC_PAGE_AB_TEST: {
                    test_name: "performance_static_page_ab_test",
                    new_variation_name: "new_static_page"
                },
                BIGGER_STORAGE_IN_PRICING_PAGE_FEATURES: {
                    test_name: "homepage_bigger_storage_in_pricing_page_features",
                    new_variation_name: "new_with_bigger_storage"
                },
                TEMPLATES_IN_HEADER_AB_TEST: {
                    test_name: "homepage_templates_in_header_ab_test",
                    new_variation_name: "new_with_templates"
                },
                HOMEPAGE_V10_PRICING_VERSION_AB_TEST: {
                    test_name: "homepage_v10_pricing_version_ab_test",
                    new_variation_name: "new_with_v10"
                },
                HOMEPAGE_V12_PRICING_VERSION_AB_TEST: {
                    test_name: "homepage_v12_pricing_version_ab_test",
                    new_variation_name: "new_with_v12"
                },
                HOMEPAGE_FREE_TIER_2022_ABC_TEST: {
                    test_name: "homepage_free_tier_2022_ab_test",
                    new_variation_name_b: "new_with_free_tier_2022_a",
                    new_variation_name_c: "new_with_free_tier_2022_b"
                },
                DESKTOP_WITH_ENTERPRISE_IN_SUBMENU_TEST: {
                    test_name: "desktop_with_enterprise_in_submenu_ab_test",
                    new_variation_name: "new_with_enterprise_in_submenu"
                },
                HOMEPAGE_HIDE_BASIC_AB_TEST: {
                    test_name: "homepage_hide_basic_ab_test",
                    new_variation_name: "new_with_hide_basic"
                },
                HOMEPAGE_PRODUCT_SOLUTIONS_AB_TEST: {
                    test_name: "homepage_product_solutions_ab_test",
                    new_variation_name: "new_with_product_solutions"
                },
                PRICING_ENTERPRISE_CONTACT_SALES_AB_TEST: {
                    test_name: "pricing_enterprise_contact_sales_ab_test",
                    new_variation_name: "new_enterprise_page"
                },
                MOBILE_STICKY_SIGNUP_AB_TEST: {
                    test_name: "mobile_sticky_signup_ab_test",
                    new_variation_name: "new_with_sticky_signup"
                },
                ENRICHMENT_HOMEPAGE_SALES_CTA_AB_TEST: {
                    test_name: "enrichment_homepage_sales_cta_ab_test",
                    new_variation_name: "new_with_sales_cta"
                },
                ENRICHEMNT_DRIFT_CRM_LP_AB_TEST: {
                    test_name: "enrichemnt_drift_open_crm_lp_ab_test_v2",
                    new_variation_name: "new_with_drift"
                },
                WELCOME_BACK_PAGE_TEST: {
                    test_name: "welcome_back_account_homepage_return_to_account_cta_test_2",
                    new_variation_name: "new_with_welcome_back",
                    launch_date: "2022-11-08"
                },
                KEEP_REGION_TEST: {
                    test_name: "keep_region_au_ab_test",
                    new_variation_name: "new_with_keep_region"
                },
                CONTACT_SALES_TYPEFORM_EMEA: {
                    test_name: "contact_sales_typeform_emea",
                    new_variation_name: "new_with_typeform"
                },
                CONTACT_SALES_TYPEFORM_ANZ: {
                    test_name: "contact_sales_typeform_anz",
                    new_variation_name: "new_with_typeform"
                },
                CONTACT_SALES_MOBILE_TYPEFORM_TEST: {
                    test_name: "mobile_contact_sales_typeform_first_question_in_first_screen_test",
                    new_variation_name: "new_with_mobile_typeform"
                },
                CS_1_19_PHONE_SUPPORT_TEST: {
                    test_name: "cs_1_19_phone_support_test",
                    new_variation_name: "new_with_phone_support_group"
                },
                HEADER_NEW_PRODUCTS_OFFERING_TEST: {
                    test_name: "header_new_products_offering_more_clickable_test",
                    new_variation_name: "new_header_products_offering"
                },
                UNLIMITED_TIME_FREE_PLAN_CTA_TEXT_TEST: {
                    test_name: "unlimited_time_free_plan_cta_text_test",
                    new_variation_name: "new_unlimited_time_cta"
                },
                SHOW_SUCCESS_STORIES_IN_HEADER_TEST: {
                    test_name: "show_customers_stories_in_header_test",
                    new_variation_name: "new_with_success_stories_in_header"
                },
                WM_HIGH_INTENT_IN_MINISITE_TEST: {
                    test_name: "experience_wm_high_intent_with_get_started_in_minisite_test",
                    new_variation_name: "new_with_wm_high_intent_test"
                },
                WM_HIGH_INTENT_IN_LP_TEST: {
                    test_name: "experience_wm_high_intent_with_get_started_in_lp_test",
                    new_variation_name: "new_with_wm_high_intent_test"
                },
                MOBILE_SOFT_SIGNUP_TEST: {
                    test_name: "mobile_soft_signup_with_terms_and_privacy_policy_in_acquisition_pages_test",
                    new_variation_name: "new_with_new_soft_signup"
                },
                TYPEFORM_FIRST_SCREEN_MULTIPLE_FIELDS_TEST: {
                    test_name: "typeform_first_screen_multiple_fields_test",
                    new_variation_name: "new_with_multiple_fields"
                }
            }
        },
        K4CH: function(e, t, n) {
            var _;
            ! function(r, i) {
                "use strict";
                var o = "function",
                    a = "undefined",
                    c = "object",
                    u = "string",
                    E = "model",
                    s = "name",
                    d = "type",
                    l = "vendor",
                    T = "version",
                    I = "architecture",
                    O = "console",
                    C = "mobile",
                    f = "tablet",
                    A = "smarttv",
                    p = "wearable",
                    S = "embedded",
                    R = "Amazon",
                    N = "Apple",
                    g = "ASUS",
                    m = "BlackBerry",
                    w = "Firefox",
                    b = "Google",
                    L = "Huawei",
                    D = "LG",
                    P = "Microsoft",
                    y = "Motorola",
                    h = "Opera",
                    U = "Samsung",
                    M = "Sharp",
                    v = "Sony",
                    k = "Xiaomi",
                    G = "Zebra",
                    B = "Facebook",
                    K = function(e) {
                        for (var t = {}, n = 0; n < e.length; n++) t[e[n].toUpperCase()] = e[n];
                        return t
                    },
                    F = function(e, t) {
                        return typeof e === u && -1 !== Y(t).indexOf(Y(e))
                    },
                    Y = function(e) {
                        return e.toLowerCase()
                    },
                    x = function(e, t) {
                        if (typeof e === u) return e = e.replace(/^\s\s*/, "").replace(/\s\s*$/, ""), typeof t === a ? e : e.substring(0, 350)
                    },
                    H = function(e, t) {
                        for (var n, _, r, a, u, E, s = 0; s < t.length && !u;) {
                            var d = t[s],
                                l = t[s + 1];
                            for (n = _ = 0; n < d.length && !u;)
                                if (u = d[n++].exec(e))
                                    for (r = 0; r < l.length; r++) E = u[++_], typeof(a = l[r]) === c && a.length > 0 ? 2 === a.length ? typeof a[1] == o ? this[a[0]] = a[1].call(this, E) : this[a[0]] = a[1] : 3 === a.length ? typeof a[1] !== o || a[1].exec && a[1].test ? this[a[0]] = E ? E.replace(a[1], a[2]) : i : this[a[0]] = E ? a[1].call(this, E, a[2]) : i : 4 === a.length && (this[a[0]] = E ? a[3].call(this, E.replace(a[1], a[2])) : i) : this[a] = E || i;
                            s += 2
                        }
                    },
                    V = function(e, t) {
                        for (var n in t)
                            if (typeof t[n] === c && t[n].length > 0) {
                                for (var _ = 0; _ < t[n].length; _++)
                                    if (F(t[n][_], e)) return "?" === n ? i : n
                            } else if (F(t[n], e)) return "?" === n ? i : n;
                        return e
                    },
                    W = {
                        ME: "4.90",
                        "NT 3.11": "NT3.51",
                        "NT 4.0": "NT4.0",
                        2e3: "NT 5.0",
                        XP: ["NT 5.1", "NT 5.2"],
                        Vista: "NT 6.0",
                        7: "NT 6.1",
                        8: "NT 6.2",
                        8.1: "NT 6.3",
                        10: ["NT 6.4", "NT 10.0"],
                        RT: "ARM"
                    },
                    j = {
                        browser: [
                            [/\b(?:crmo|crios)\/([\w\.]+)/i],
                            [T, [s, "Chrome"]],
                            [/edg(?:e|ios|a)?\/([\w\.]+)/i],
                            [T, [s, "Edge"]],
                            [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
                            [s, T],
                            [/opios[\/ ]+([\w\.]+)/i],
                            [T, [s, "Opera Mini"]],
                            [/\bopr\/([\w\.]+)/i],
                            [T, [s, h]],
                            [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i, /(ba?idubrowser)[\/ ]?([\w\.]+)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i, /(weibo)__([\d\.]+)/i],
                            [s, T],
                            [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
                            [T, [s, "UCBrowser"]],
                            [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i],
                            [T, [s, "WeChat(Win) Desktop"]],
                            [/micromessenger\/([\w\.]+)/i],
                            [T, [s, "WeChat"]],
                            [/konqueror\/([\w\.]+)/i],
                            [T, [s, "Konqueror"]],
                            [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
                            [T, [s, "IE"]],
                            [/yabrowser\/([\w\.]+)/i],
                            [T, [s, "Yandex"]],
                            [/(avast|avg)\/([\w\.]+)/i],
                            [
                                [s, /(.+)/, "$1 Secure Browser"], T
                            ],
                            [/\bfocus\/([\w\.]+)/i],
                            [T, [s, "Firefox Focus"]],
                            [/\bopt\/([\w\.]+)/i],
                            [T, [s, "Opera Touch"]],
                            [/coc_coc\w+\/([\w\.]+)/i],
                            [T, [s, "Coc Coc"]],
                            [/dolfin\/([\w\.]+)/i],
                            [T, [s, "Dolphin"]],
                            [/coast\/([\w\.]+)/i],
                            [T, [s, "Opera Coast"]],
                            [/miuibrowser\/([\w\.]+)/i],
                            [T, [s, "MIUI Browser"]],
                            [/fxios\/([-\w\.]+)/i],
                            [T, [s, w]],
                            [/\bqihu|(qi?ho?o?|360)browser/i],
                            [
                                [s, "360 Browser"]
                            ],
                            [/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],
                            [
                                [s, /(.+)/, "$1 Browser"], T
                            ],
                            [/(comodo_dragon)\/([\w\.]+)/i],
                            [
                                [s, /_/g, " "], T
                            ],
                            [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],
                            [s, T],
                            [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i, /\[(linkedin)app\]/i],
                            [s],
                            [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
                            [
                                [s, B], T
                            ],
                            [/safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(chromium|instagram)[\/ ]([-\w\.]+)/i],
                            [s, T],
                            [/\bgsa\/([\w\.]+) .*safari\//i],
                            [T, [s, "GSA"]],
                            [/headlesschrome(?:\/([\w\.]+)| )/i],
                            [T, [s, "Chrome Headless"]],
                            [/ wv\).+(chrome)\/([\w\.]+)/i],
                            [
                                [s, "Chrome WebView"], T
                            ],
                            [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
                            [T, [s, "Android Browser"]],
                            [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
                            [s, T],
                            [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
                            [T, [s, "Mobile Safari"]],
                            [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
                            [T, s],
                            [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
                            [s, [T, V, {
                                "1.0": "/8",
                                1.2: "/1",
                                1.3: "/3",
                                "2.0": "/412",
                                "2.0.2": "/416",
                                "2.0.3": "/417",
                                "2.0.4": "/419",
                                "?": "/"
                            }]],
                            [/(webkit|khtml)\/([\w\.]+)/i],
                            [s, T],
                            [/(navigator|netscape\d?)\/([-\w\.]+)/i],
                            [
                                [s, "Netscape"], T
                            ],
                            [/mobile vr; rv:([\w\.]+)\).+firefox/i],
                            [T, [s, "Firefox Reality"]],
                            [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i],
                            [s, T]
                        ],
                        cpu: [
                            [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
                            [
                                [I, "amd64"]
                            ],
                            [/(ia32(?=;))/i],
                            [
                                [I, Y]
                            ],
                            [/((?:i[346]|x)86)[;\)]/i],
                            [
                                [I, "ia32"]
                            ],
                            [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
                            [
                                [I, "arm64"]
                            ],
                            [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
                            [
                                [I, "armhf"]
                            ],
                            [/windows (ce|mobile); ppc;/i],
                            [
                                [I, "arm"]
                            ],
                            [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
                            [
                                [I, /ower/, "", Y]
                            ],
                            [/(sun4\w)[;\)]/i],
                            [
                                [I, "sparc"]
                            ],
                            [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],
                            [
                                [I, Y]
                            ]
                        ],
                        device: [
                            [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
                            [E, [l, U],
                                [d, f]
                            ],
                            [/\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i],
                            [E, [l, U],
                                [d, C]
                            ],
                            [/\((ip(?:hone|od)[\w ]*);/i],
                            [E, [l, N],
                                [d, C]
                            ],
                            [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
                            [E, [l, N],
                                [d, f]
                            ],
                            [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
                            [E, [l, L],
                                [d, f]
                            ],
                            [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
                            [E, [l, L],
                                [d, C]
                            ],
                            [/\b(poco[\w ]+)(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],
                            [
                                [E, /_/g, " "],
                                [l, k],
                                [d, C]
                            ],
                            [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
                            [
                                [E, /_/g, " "],
                                [l, k],
                                [d, f]
                            ],
                            [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
                            [E, [l, "OPPO"],
                                [d, C]
                            ],
                            [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
                            [E, [l, "Vivo"],
                                [d, C]
                            ],
                            [/\b(rmx[12]\d{3})(?: bui|;|\))/i],
                            [E, [l, "Realme"],
                                [d, C]
                            ],
                            [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
                            [E, [l, y],
                                [d, C]
                            ],
                            [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
                            [E, [l, y],
                                [d, f]
                            ],
                            [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
                            [E, [l, D],
                                [d, f]
                            ],
                            [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i],
                            [E, [l, D],
                                [d, C]
                            ],
                            [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],
                            [E, [l, "Lenovo"],
                                [d, f]
                            ],
                            [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
                            [
                                [E, /_/g, " "],
                                [l, "Nokia"],
                                [d, C]
                            ],
                            [/(pixel c)\b/i],
                            [E, [l, b],
                                [d, f]
                            ],
                            [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
                            [E, [l, b],
                                [d, C]
                            ],
                            [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
                            [E, [l, v],
                                [d, C]
                            ],
                            [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
                            [
                                [E, "Xperia Tablet"],
                                [l, v],
                                [d, f]
                            ],
                            [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
                            [E, [l, "OnePlus"],
                                [d, C]
                            ],
                            [/(alexa)webm/i, /(kf[a-z]{2}wi)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
                            [E, [l, R],
                                [d, f]
                            ],
                            [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
                            [
                                [E, /(.+)/g, "Fire Phone $1"],
                                [l, R],
                                [d, C]
                            ],
                            [/(playbook);[-\w\),; ]+(rim)/i],
                            [E, l, [d, f]],
                            [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
                            [E, [l, m],
                                [d, C]
                            ],
                            [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
                            [E, [l, g],
                                [d, f]
                            ],
                            [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
                            [E, [l, g],
                                [d, C]
                            ],
                            [/(nexus 9)/i],
                            [E, [l, "HTC"],
                                [d, f]
                            ],
                            [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic|sony(?!-bra))[-_ ]?([-\w]*)/i],
                            [l, [E, /_/g, " "],
                                [d, C]
                            ],
                            [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
                            [E, [l, "Acer"],
                                [d, f]
                            ],
                            [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
                            [E, [l, "Meizu"],
                                [d, C]
                            ],
                            [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
                            [E, [l, M],
                                [d, C]
                            ],
                            [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i],
                            [l, E, [d, C]],
                            [/(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
                            [l, E, [d, f]],
                            [/(surface duo)/i],
                            [E, [l, P],
                                [d, f]
                            ],
                            [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
                            [E, [l, "Fairphone"],
                                [d, C]
                            ],
                            [/(u304aa)/i],
                            [E, [l, "AT&T"],
                                [d, C]
                            ],
                            [/\bsie-(\w*)/i],
                            [E, [l, "Siemens"],
                                [d, C]
                            ],
                            [/\b(rct\w+) b/i],
                            [E, [l, "RCA"],
                                [d, f]
                            ],
                            [/\b(venue[\d ]{2,7}) b/i],
                            [E, [l, "Dell"],
                                [d, f]
                            ],
                            [/\b(q(?:mv|ta)\w+) b/i],
                            [E, [l, "Verizon"],
                                [d, f]
                            ],
                            [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
                            [E, [l, "Barnes & Noble"],
                                [d, f]
                            ],
                            [/\b(tm\d{3}\w+) b/i],
                            [E, [l, "NuVision"],
                                [d, f]
                            ],
                            [/\b(k88) b/i],
                            [E, [l, "ZTE"],
                                [d, f]
                            ],
                            [/\b(nx\d{3}j) b/i],
                            [E, [l, "ZTE"],
                                [d, C]
                            ],
                            [/\b(gen\d{3}) b.+49h/i],
                            [E, [l, "Swiss"],
                                [d, C]
                            ],
                            [/\b(zur\d{3}) b/i],
                            [E, [l, "Swiss"],
                                [d, f]
                            ],
                            [/\b((zeki)?tb.*\b) b/i],
                            [E, [l, "Zeki"],
                                [d, f]
                            ],
                            [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
                            [
                                [l, "Dragon Touch"], E, [d, f]
                            ],
                            [/\b(ns-?\w{0,9}) b/i],
                            [E, [l, "Insignia"],
                                [d, f]
                            ],
                            [/\b((nxa|next)-?\w{0,9}) b/i],
                            [E, [l, "NextBook"],
                                [d, f]
                            ],
                            [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
                            [
                                [l, "Voice"], E, [d, C]
                            ],
                            [/\b(lvtel\-)?(v1[12]) b/i],
                            [
                                [l, "LvTel"], E, [d, C]
                            ],
                            [/\b(ph-1) /i],
                            [E, [l, "Essential"],
                                [d, C]
                            ],
                            [/\b(v(100md|700na|7011|917g).*\b) b/i],
                            [E, [l, "Envizen"],
                                [d, f]
                            ],
                            [/\b(trio[-\w\. ]+) b/i],
                            [E, [l, "MachSpeed"],
                                [d, f]
                            ],
                            [/\btu_(1491) b/i],
                            [E, [l, "Rotor"],
                                [d, f]
                            ],
                            [/(shield[\w ]+) b/i],
                            [E, [l, "Nvidia"],
                                [d, f]
                            ],
                            [/(sprint) (\w+)/i],
                            [l, E, [d, C]],
                            [/(kin\.[onetw]{3})/i],
                            [
                                [E, /\./g, " "],
                                [l, P],
                                [d, C]
                            ],
                            [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
                            [E, [l, G],
                                [d, f]
                            ],
                            [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
                            [E, [l, G],
                                [d, C]
                            ],
                            [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
                            [l, E, [d, O]],
                            [/droid.+; (shield) bui/i],
                            [E, [l, "Nvidia"],
                                [d, O]
                            ],
                            [/(playstation [345portablevi]+)/i],
                            [E, [l, v],
                                [d, O]
                            ],
                            [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
                            [E, [l, P],
                                [d, O]
                            ],
                            [/smart-tv.+(samsung)/i],
                            [l, [d, A]],
                            [/hbbtv.+maple;(\d+)/i],
                            [
                                [E, /^/, "SmartTV"],
                                [l, U],
                                [d, A]
                            ],
                            [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
                            [
                                [l, D],
                                [d, A]
                            ],
                            [/(apple) ?tv/i],
                            [l, [E, "Apple TV"],
                                [d, A]
                            ],
                            [/crkey/i],
                            [
                                [E, "Chromecast"],
                                [l, b],
                                [d, A]
                            ],
                            [/droid.+aft(\w)( bui|\))/i],
                            [E, [l, R],
                                [d, A]
                            ],
                            [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
                            [E, [l, M],
                                [d, A]
                            ],
                            [/(bravia[\w ]+)( bui|\))/i],
                            [E, [l, v],
                                [d, A]
                            ],
                            [/(mitv-\w{5}) bui/i],
                            [E, [l, k],
                                [d, A]
                            ],
                            [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i],
                            [
                                [l, x],
                                [E, x],
                                [d, A]
                            ],
                            [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
                            [
                                [d, A]
                            ],
                            [/((pebble))app/i],
                            [l, E, [d, p]],
                            [/droid.+; (glass) \d/i],
                            [E, [l, b],
                                [d, p]
                            ],
                            [/droid.+; (wt63?0{2,3})\)/i],
                            [E, [l, G],
                                [d, p]
                            ],
                            [/(quest( 2)?)/i],
                            [E, [l, B],
                                [d, p]
                            ],
                            [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
                            [l, [d, S]],
                            [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],
                            [E, [d, C]],
                            [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
                            [E, [d, f]],
                            [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
                            [
                                [d, f]
                            ],
                            [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
                            [
                                [d, C]
                            ],
                            [/(android[-\w\. ]{0,9});.+buil/i],
                            [E, [l, "Generic"]]
                        ],
                        engine: [
                            [/windows.+ edge\/([\w\.]+)/i],
                            [T, [s, "EdgeHTML"]],
                            [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                            [T, [s, "Blink"]],
                            [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i],
                            [s, T],
                            [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
                            [T, s]
                        ],
                        os: [
                            [/microsoft (windows) (vista|xp)/i],
                            [s, T],
                            [/(windows) nt 6\.2; (arm)/i, /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i, /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],
                            [s, [T, V, W]],
                            [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
                            [
                                [s, "Windows"],
                                [T, V, W]
                            ],
                            [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /cfnetwork\/.+darwin/i],
                            [
                                [T, /_/g, "."],
                                [s, "iOS"]
                            ],
                            [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
                            [
                                [s, "Mac OS"],
                                [T, /_/g, "."]
                            ],
                            [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
                            [T, s],
                            [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i],
                            [s, T],
                            [/\(bb(10);/i],
                            [T, [s, m]],
                            [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
                            [T, [s, "Symbian"]],
                            [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
                            [T, [s, "Firefox OS"]],
                            [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
                            [T, [s, "webOS"]],
                            [/crkey\/([\d\.]+)/i],
                            [T, [s, "Chromecast"]],
                            [/(cros) [\w]+ ([\w\.]+\w)/i],
                            [
                                [s, "Chromium OS"], T
                            ],
                            [/(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
                            [s, T],
                            [/(sunos) ?([\w\.\d]*)/i],
                            [
                                [s, "Solaris"], T
                            ],
                            [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i, /(unix) ?([\w\.]*)/i],
                            [s, T]
                        ]
                    },
                    q = function(e, t) {
                        if (typeof e === c && (t = e, e = i), !(this instanceof q)) return new q(e, t).getResult();
                        var n = e || (typeof r !== a && r.navigator && r.navigator.userAgent ? r.navigator.userAgent : ""),
                            _ = t ? function(e, t) {
                                var n = {};
                                for (var _ in e) t[_] && t[_].length % 2 === 0 ? n[_] = t[_].concat(e[_]) : n[_] = e[_];
                                return n
                            }(j, t) : j;
                        return this.getBrowser = function() {
                            var e, t = {};
                            return t.name = i, t.version = i, H.call(t, n, _.browser), t.major = typeof(e = t.version) === u ? e.replace(/[^\d\.]/g, "").split(".")[0] : i, t
                        }, this.getCPU = function() {
                            var e = {};
                            return e.architecture = i, H.call(e, n, _.cpu), e
                        }, this.getDevice = function() {
                            var e = {};
                            return e.vendor = i, e.model = i, e.type = i, H.call(e, n, _.device), e
                        }, this.getEngine = function() {
                            var e = {};
                            return e.name = i, e.version = i, H.call(e, n, _.engine), e
                        }, this.getOS = function() {
                            var e = {};
                            return e.name = i, e.version = i, H.call(e, n, _.os), e
                        }, this.getResult = function() {
                            return {
                                ua: this.getUA(),
                                browser: this.getBrowser(),
                                engine: this.getEngine(),
                                os: this.getOS(),
                                device: this.getDevice(),
                                cpu: this.getCPU()
                            }
                        }, this.getUA = function() {
                            return n
                        }, this.setUA = function(e) {
                            return n = typeof e === u && e.length > 350 ? x(e, 350) : e, this
                        }, this.setUA(n), this
                    };
                q.VERSION = "0.7.32", q.BROWSER = K([s, T, "major"]), q.CPU = K([I]), q.DEVICE = K([E, l, d, O, C, A, f, p, S]), q.ENGINE = q.OS = K([s, T]), typeof t !== a ? (typeof e !== a && e.exports && (t = e.exports = q), t.UAParser = q) : n("qpuh") ? (_ = function() {
                    return q
                }.call(t, n, t, e)) === i || (e.exports = _) : typeof r !== a && (r.UAParser = q);
                var z = typeof r !== a && (r.jQuery || r.Zepto);
                if (z && !z.ua) {
                    var X = new q;
                    z.ua = X.getResult(), z.ua.get = function() {
                        return X.getUA()
                    }, z.ua.set = function(e) {
                        X.setUA(e);
                        var t = X.getResult();
                        for (var n in t) z.ua[n] = t[n]
                    }
                }
            }("object" === typeof window ? window : this)
        },
        "Pr/7": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return T
            })), n.d(t, "b", (function() {
                return I
            })), n.d(t, "e", (function() {
                return O
            })), n.d(t, "f", (function() {
                return C
            })), n.d(t, "d", (function() {
                return f
            })), n.d(t, "c", (function() {
                return A
            }));
            var _ = n("cpVT"),
                r = n("p46w"),
                i = n.n(r),
                o = n("yAMK"),
                a = n("1BgC"),
                c = n("Tddi"),
                u = n("7nzS"),
                E = n("0SMW"),
                s = n("87MR");

            function d(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var _ = Object.getOwnPropertySymbols(e);
                    t && (_ = _.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, _)
                }
                return n
            }

            function l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? d(Object(n), !0).forEach((function(t) {
                        Object(_.default)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : d(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            i.a.defaults = a.DEFAULT_COOKIES_SETTINGS;
            var T = function() {
                    return i.a.get()
                },
                I = function(e) {
                    return i.a.get(e)
                },
                O = function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        _ = a.COOKIES_CONFIG[e] || {},
                        r = Object(E.isRunningInClient)();
                    return r || console.log("setCookie ".concat(e, " called on server side")), 0 !== Object.keys(_).length && null !== _ && void 0 !== _ && _.category || (console.error("Cookie ".concat(e, " is not categorized")), Object(s.trackEvent)(o.COOKIE_UNCATEGORIZED, {
                        kind: e
                    })), A(_.category) && Object(s.trackEvent)(o.COOKIE_CATEGORY_NOT_APPROVED, {
                        kind: _.category,
                        info1: e,
                        info2: t
                    }), i.a.set(e, t, l(l(l({}, a.DEFAULT_COOKIES_SETTINGS), _.options), n))
                },
                C = function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        _ = arguments.length > 3 ? arguments[3] : void 0;
                    !I(e) && t && (O(e, t, n), _ && Object(s.trackEvent)(_))
                },
                f = function(e) {
                    return i.a.remove(e)
                },
                A = function(e) {
                    return !!Object(E.isRunningInClient)() && ! function(e) {
                        var t, n = null === (t = u.COOKIE_CATEGORIES_GTM_MAPPINGS[e]) || void 0 === t ? void 0 : t.gtmAllowedDataLayerVariable,
                            _ = Object(c.c)(n);
                        return "undefined" != typeof _ && null !== _ || (Object(s.trackEvent)(o.COOKIE_CATEGORY_GTM_DATALAYER_NOT_SET, {
                            kind: e
                        }), console.log("cookie category ".concat(e, " not set in GTM datalayer"))), !1 !== _
                    }(e)
                }
        },
        Tddi: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return u
            })), n.d(t, "d", (function() {
                return E
            })), n.d(t, "c", (function() {
                return s
            })), n.d(t, "a", (function() {
                return d
            }));
            var _ = n("cpVT"),
                r = n("klrw"),
                i = n("0SMW"),
                o = n("lNUL");

            function a(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var _ = Object.getOwnPropertySymbols(e);
                    t && (_ = _.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, _)
                }
                return n
            }

            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? a(Object(n), !0).forEach((function(t) {
                        Object(_.default)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var u = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (window.dataLayer) {
                        var n = c(c({}, t), {}, {
                            event: e
                        });
                        window.dataLayer.push(n)
                    }
                },
                E = function(e) {
                    window.dataLayer && window.dataLayer.push(e)
                },
                s = function(e) {
                    var t, n, _;
                    return (null === (t = window) || void 0 === t ? void 0 : t.google_tag_manager) && (null === (n = window.google_tag_manager[r.a]) || void 0 === n || null === (_ = n.dataLayer) || void 0 === _ ? void 0 : _.get(e))
                },
                d = function(e) {
                    var t = e.localeId,
                        n = e.clusterId,
                        _ = e.hasFreeTier;
                    if (Object(i.isRunningInClient)()) {
                        var r = navigator.userAgent,
                            a = Object(o.getUserAgentAnalyzedData)(r);
                        window.gtmIsMobile = a.isMobile, window.gtmIsTablet = a.isTablet, window.gtmIsDesktop = a.isDesktop, window.gtmIsIos = a.isIos, window.gtmIsAndroid = a.isAndroid, window.gtmLocaleId = t, window.gtmClusterId = n, window.gtmIsFreeTier = _
                    }
                }
        },
        XqsQ: function(e, t) {
            var n = "en",
                _ = "zh-tw",
                r = "lang",
                i = ["es", "fr", "de", "pt", "ru", "ja", "it", "nl", "ko", "tr", "sv", "pl", _],
                o = [n].concat(i);
            e.exports = {
                ENGLISH_LOCALE_ID: n,
                SPANISH_LOCALE_ID: "es",
                FRENCH_LOCALE_ID: "fr",
                GERMAN_LOCALE_ID: "de",
                PORTUGEESE_LOCALE_ID: "pt",
                ITALIAN_LOCALE_ID: "it",
                DUTCH_LOCALE_ID: "nl",
                RUSSIAN_LOCALE_ID: "ru",
                JAPANESE_LOCALE_ID: "ja",
                KOREAN_LOCALE_ID: "ko",
                TURKISH_LOCALE_ID: "tr",
                SWEDISH_LOCALE_ID: "sv",
                POLISH_LOCALE_ID: "pl",
                CHINESE_LOCALE_ID: _,
                LANGUAGES_ROOT: r,
                SUPPORTED_LOCALE_IDS: i,
                SUPPORTED_LOCALE_IDS_INCLUDING_ENGLISH: o,
                UTM_LOCALE_COOKIE: "utm_locale_id",
                USER_SELECTED_LOCALE_ID_COOKIE: "user_selected_locale_id",
                LOCALIZED_PRICING_ROUTES: ["/pricing/", "/lang/es/pricing/", "/lang/fr/pricing/", "/lang/de/pricing/", "/lang/pt/pricing/", "/lang/ru/pricing/", "/lang/nl/pricing/", "/lang/ja/pricing/", "/lang/ko/pricing/", "/lang/it/pricing/", "/lang/tr/pricing/", "/lang/sv/pricing/", "/lang/pl/pricing/", "/lang/zh-tw/pricing/"],
                COOKIES_POLICY_REQUIRED_COUNTRIES_ISO_CODES: ["IE", "NL", "FR", "DE", "AT", "BE", "BG", "CY", "CZ", "DK", "EE", "ES", "FI", "GB", "GR", "HR", "HU", "IT", "LT", "LU", "LV", "MT", "PL", "PT", "RO", "SE", "SI", "SK"],
                UNITED_STATES_COUNTRY_CODE: "US",
                getHomepageLocalizedRoutes: function() {
                    return i.map((function(e) {
                        return "/".concat(r, "/").concat(e, "/")
                    }))
                }
            }
        },
        dhJC: function(e, t, n) {
            "use strict";

            function _(e, t) {
                if (null == e) return {};
                var n, _, r = function(e, t) {
                    if (null == e) return {};
                    var n, _, r = {},
                        i = Object.keys(e);
                    for (_ = 0; _ < i.length; _++) n = i[_], t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (_ = 0; _ < i.length; _++) n = i[_], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
                }
                return r
            }
            n.r(t), n.d(t, "default", (function() {
                return _
            }))
        },
        klrw: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return _
            }));
            var _ = "GTM-WMDX8GX"
        },
        lNUL: function(e, t, n) {
            var _ = n("K4CH"),
                r = "mobile",
                i = "tablet",
                o = "Android",
                a = function() {
                    return "undefined" !== typeof document && "undefined" !== typeof navigator ? navigator.userAgent || navigator.vendor || window.opera : ""
                },
                c = function(e) {
                    if (!e) return null;
                    var t = _(e);
                    return t.device && t.device.type
                },
                u = function(e) {
                    if (!e) return null;
                    var t = _(e);
                    return t.browser && t.browser.name
                },
                E = function(e) {
                    return c(e) === r
                },
                s = function(e) {
                    return c(e) === i
                };
            e.exports = {
                isDesktopViewer: function(e) {
                    return void 0 === c(e)
                },
                isMobileViewer: E,
                isTabletViewer: s,
                isMobileOrTabletViewer: function(e) {
                    return E(e) || s(e)
                },
                isAndroidViewer: function(e) {
                    return function(e) {
                        if (!e) return null;
                        var t = _(e);
                        return t.os && t.os.name
                    }(e) === o
                },
                isFacebookViewer: function(e) {
                    return "Facebook" === u(e)
                },
                isInstagramViewer: function(e) {
                    return "Instagram" === u(e)
                },
                getUserAgentAnalyzedData: function(e) {
                    if (!e) return {};
                    var t = _(e),
                        n = t.device && t.device.type,
                        a = t.os && t.os.name;
                    return {
                        isMobile: n === r,
                        isTablet: n === i,
                        isDesktop: void 0 === n,
                        isIos: "iOS" === a,
                        isAndroid: a === o
                    }
                },
                isSafari: function(e) {
                    var t = e || a();
                    return "Safari" === u(t)
                },
                fetchUserAgent: a
            }
        },
        o6i0: function(e, t) {
            e.exports = {
                NEXTJS_WEB_VITAL_LABEL: "web-vital",
                BIGBRAIN_TRACKING_URL: "https://track.bigbrain.me/prod/event"
            }
        },
        p46w: function(e, t, n) {
            var _, r;
            ! function(i) {
                if (void 0 === (r = "function" === typeof(_ = i) ? _.call(t, n, t, e) : _) || (e.exports = r), !0, e.exports = i(), !!0) {
                    var o = window.Cookies,
                        a = window.Cookies = i();
                    a.noConflict = function() {
                        return window.Cookies = o, a
                    }
                }
            }((function() {
                function e() {
                    for (var e = 0, t = {}; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var _ in n) t[_] = n[_]
                    }
                    return t
                }

                function t(e) {
                    return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent)
                }
                return function n(_) {
                    function r() {}

                    function i(t, n, i) {
                        if ("undefined" !== typeof document) {
                            "number" === typeof(i = e({
                                path: "/"
                            }, r.defaults, i)).expires && (i.expires = new Date(1 * new Date + 864e5 * i.expires)), i.expires = i.expires ? i.expires.toUTCString() : "";
                            try {
                                var o = JSON.stringify(n);
                                /^[\{\[]/.test(o) && (n = o)
                            } catch (u) {}
                            n = _.write ? _.write(n, t) : encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), t = encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
                            var a = "";
                            for (var c in i) i[c] && (a += "; " + c, !0 !== i[c] && (a += "=" + i[c].split(";")[0]));
                            return document.cookie = t + "=" + n + a
                        }
                    }

                    function o(e, n) {
                        if ("undefined" !== typeof document) {
                            for (var r = {}, i = document.cookie ? document.cookie.split("; ") : [], o = 0; o < i.length; o++) {
                                var a = i[o].split("="),
                                    c = a.slice(1).join("=");
                                n || '"' !== c.charAt(0) || (c = c.slice(1, -1));
                                try {
                                    var u = t(a[0]);
                                    if (c = (_.read || _)(c, u) || t(c), n) try {
                                        c = JSON.parse(c)
                                    } catch (E) {}
                                    if (r[u] = c, e === u) break
                                } catch (E) {}
                            }
                            return e ? r[e] : r
                        }
                    }
                    return r.set = i, r.get = function(e) {
                        return o(e, !1)
                    }, r.getJSON = function(e) {
                        return o(e, !0)
                    }, r.remove = function(t, n) {
                        i(t, "", e(n, {
                            expires: -1
                        }))
                    }, r.defaults = {}, r.withConverter = n, r
                }((function() {}))
            }))
        },
        qpuh: function(e, t) {
            (function(t, n) {
                e.exports = function() {
                    var e = {
                            929: function(e) {
                                e.exports = t
                            }
                        },
                        _ = {};

                    function r(t) {
                        if (_[t]) return _[t].exports;
                        var n = _[t] = {
                                exports: {}
                            },
                            i = !0;
                        try {
                            e[t](n, n.exports, r), i = !1
                        } finally {
                            i && delete _[t]
                        }
                        return n.exports
                    }
                    return r.ab = n + "/", r(929)
                }()
            }).call(this, {}, "/")
        },
        xM9h: function(e, t) {
            var n = new Date("2018-06-14"),
                _ = {
                    PENDING: 0,
                    APPROVED: 1,
                    REJECTED: 2,
                    APPROVED_PAID: 3,
                    PENDING_USER_TO_APPROVE: 4,
                    APPROVED_BY_USER: 5,
                    REJECTED_BY_USER: 6,
                    DUPLICATED: 7,
                    DELETED: 9
                },
                r = {
                    TOOLS: 1,
                    INDUSTRY: 2,
                    TEAM_SIZE: 3,
                    BOARD_USAGE: 4,
                    CATEGORIES: 5
                },
                i = {
                    TRENDING: "Trending",
                    MOST_USED: "Most used",
                    EDITOR_CHOICE: "Editor's choice",
                    LATEST: "Latest"
                },
                o = Object.keys(i).map((function(e) {
                    return i[e]
                }));
            e.exports = {
                MILLIS_IN_HOUR: 36e5,
                STORIES_PARAGRAPH_MINIMUM_WORD_COUNT: 50,
                TemplateStatus: _,
                TemplateImageType: {
                    SELFIE: "selfie",
                    BOARD: "board"
                },
                UserCampaignType: {
                    STORIES_CAMPAIGN: "stories_campaign",
                    STORIES_SOURCE: "stories_source",
                    STORIES_MEDIUM: "stories_medium",
                    STORIES_CONTENT: "stories_content",
                    STORIES_CAMPAIGN_DATE: "stories_campaign_date",
                    STORIES_SLUG: "stories_slug"
                },
                BoardLinkStatus: {
                    LINKED: "Linked",
                    NOT_LINKED: "Not Linked",
                    MISMATCH: "Mismatch"
                },
                isTemplateApprovedStatus: function(e) {
                    return _.APPROVED == e || _.APPROVED_PAID == e || _.APPROVED_BY_USER == e
                },
                getTemplateStatusText: function(e) {
                    switch (parseInt(e)) {
                        case _.PENDING:
                            return "Awaiting approval";
                        case _.PENDING_USER_TO_APPROVE:
                            return "Awaiting user approval";
                        case _.APPROVED:
                        case _.APPROVED_PAID:
                        case _.APPROVED_BY_USER:
                            return "Approved (online)";
                        case _.REJECTED:
                            return "Changes required";
                        case _.REJECTED_BY_USER:
                            return "Rejected by User";
                        case _.DELETED:
                            return "Deleted";
                        default:
                            return ""
                    }
                },
                getTemplateStatusClass: function(e) {
                    switch (parseInt(e)) {
                        case _.PENDING:
                            return "pending";
                        case _.PENDING_USER_TO_APPROVE:
                            return "pending user";
                        case _.APPROVED:
                        case _.DUPLICATED:
                            return "approved";
                        case _.APPROVED_PAID:
                            return "approved paid";
                        case _.APPROVED_BY_USER:
                            return "approved user";
                        case _.REJECTED:
                            return "rejected";
                        case _.REJECTED_BY_USER:
                            return "rejected user";
                        case _.DELETED:
                            return "deleted";
                        default:
                            return ""
                    }
                },
                TagsCategory: r,
                getTagCategoryText: function(e) {
                    switch (parseInt(e)) {
                        case r.TOOLS:
                            return "Tools";
                        case r.INDUSTRY:
                            return "Industry";
                        case r.TEAM_SIZE:
                            return "Team Size";
                        case r.BOARD_USAGE:
                            return "Board Usage";
                        case r.CATEGORIES:
                            return "Categories";
                        default:
                            return ""
                    }
                },
                TemplateScoreType: {
                    ADMIN_SCORE: "admin",
                    LIKES_COUNT: "likes",
                    VIEWS_COUNT: "views",
                    USED_COUNT: "usage",
                    POSTS_COUNT: "posts",
                    FEATURED_SCORE: "featured",
                    EDITOR_CHOICE: "editor_choice"
                },
                StoriesMainPageCategories: i,
                StoriesMainPageCategoriesArr: o,
                StoriesMainPageSortTypes: {
                    LATEST: "Latest",
                    MOST_USED: "Most used",
                    TRENDING: "Trending",
                    TEAM_SIZE: "Team size"
                },
                MAX_ADMIN_SCORE: 5,
                TEMPLATE_CREATE_DATE_REQUIRE_TOU_ACCEPT: n,
                TemplateTypeCookie: {
                    STORIES_TEMPLATE_TYPE: "stories_template_type"
                },
                StoriesCookies: {
                    MONDAY_USER_ID: "stories_monday_user_id",
                    MONDAY_ACCOUNT_SLUGS: "dapulseAccountSlugs"
                },
                TemplateRejectReason: {
                    NO_REASON: "None",
                    BAD_SELFIE: "Bad Seflie",
                    BAD_TEXT: "Bad Text",
                    BAD_SELFIE_AND_TEXT: "Bad Selfie and Text"
                }
            }
        },
        xwIp: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            })), n.d(t, "b", (function() {
                return i
            }));
            var _ = n("xKtW"),
                r = function(e, t) {
                    var n = "";
                    try {
                        var r = function(e) {
                                var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
                                return t ? {
                                    r: parseInt(t[1], 16),
                                    g: parseInt(t[2], 16),
                                    b: parseInt(t[3], 16)
                                } : null
                            }(e),
                            i = r.r,
                            o = r.g,
                            a = r.b;
                        n = "rgba(".concat(i, ", ").concat(o, ", ").concat(a, ", ").concat(t, ")")
                    } catch (c) {
                        _.c(c), _.d("Faild to convert hex color to rgba")
                    }
                    return n
                },
                i = function() {
                    0
                }
        },
        yAMK: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "TRACK_EVENT", (function() {
                return _
            })), n.d(t, "HP_SOURCE", (function() {
                return r
            })), n.d(t, "HP_GROUP", (function() {
                return i
            })), n.d(t, "PAGE_VIEW", (function() {
                return o
            })), n.d(t, "PREFETCH_ASSET_COMPLETED", (function() {
                return a
            })), n.d(t, "PREFETCH_ALL_ASSETS_COMPLETED", (function() {
                return c
            })), n.d(t, "MOBILE_OR_TABLE_VIEW", (function() {
                return u
            })), n.d(t, "SOCIAL_SHARE", (function() {
                return E
            })), n.d(t, "SIGNUP_FORM_GET_STARTED_CLICKED", (function() {
                return s
            })), n.d(t, "SIGNUP_FORM_SUBMIT", (function() {
                return d
            })), n.d(t, "SIGNUP_SECONDARY_BUTTON_CLICKED", (function() {
                return l
            })), n.d(t, "SIGNUP_MAIN_CTA_CLICKED", (function() {
                return T
            })), n.d(t, "SIGNUP_WITH_GOOGLE_CLICKED", (function() {
                return I
            })), n.d(t, "SIGNUP_START_FILL_EMAIL", (function() {
                return O
            })), n.d(t, "SIGNUP_SUBMIT_CLICK_WITH_EMAIL_ERROR", (function() {
                return C
            })), n.d(t, "EXISTING_ACCOUNT_MAIN_CTA_CLICKED", (function() {
                return f
            })), n.d(t, "BUTTON_LINK_CLICKED", (function() {
                return A
            })), n.d(t, "SET_CLUSTER_ID_EVENT_NAME", (function() {
                return p
            })), n.d(t, "SET_CLUSTER_EVENT", (function() {
                return S
            })), n.d(t, "SET_SUB_CLUSTER_ID_EVENT_NAME", (function() {
                return R
            })), n.d(t, "SET_LOCALE_ID_EVENT_NAME", (function() {
                return N
            })), n.d(t, "CLICKED_SIGNUP_WITHOUT_INSERTING_EMAIL", (function() {
                return g
            })), n.d(t, "YOUTUBE_MODAL_OPEN", (function() {
                return m
            })), n.d(t, "YOUTUBE_MODAL_CLOSE", (function() {
                return w
            })), n.d(t, "YOUTUBE_MODAL_OPEN_SECONDARY", (function() {
                return b
            })), n.d(t, "YOUTUBE_MODAL_CLOSE_SECONDARY", (function() {
                return L
            })), n.d(t, "YOUTUBE_VIDEO_STARTED", (function() {
                return D
            })), n.d(t, "YOUTUBE_VIDEO_ENDED", (function() {
                return P
            })), n.d(t, "EXIT_POPUP_OPEN", (function() {
                return y
            })), n.d(t, "EXIT_POPUP_CLOSE", (function() {
                return h
            })), n.d(t, "EXIT_POP_UP_REASON", (function() {
                return U
            })), n.d(t, "PRICING_PLAN_SELECTED", (function() {
                return M
            })), n.d(t, "PRICING_INFO_ICON_HOVER", (function() {
                return v
            })), n.d(t, "PRICING_USERS_SELECTED", (function() {
                return k
            })), n.d(t, "PRICING_BILLING_PERIOD_SELECTED", (function() {
                return G
            })), n.d(t, "PRICING_PAGE_FAQ_QUESTION_CLICK", (function() {
                return B
            })), n.d(t, "PRICING_PAGE_FAQ_SECTION_VISIBLE", (function() {
                return K
            })), n.d(t, "PRICING_PAGE_FAQ_QUESTIONS_BUTTON_CLICK", (function() {
                return F
            })), n.d(t, "PRICING_PAGE_FAQ_QUESTION_LINK_CLICK", (function() {
                return Y
            })), n.d(t, "PRICING_PAGE_FEATURE_INFO_ICON_HOVER", (function() {
                return x
            })), n.d(t, "PRICING_PAGE_FEATURE_INFO_ICON_EXIT", (function() {
                return H
            })), n.d(t, "PRICING_PAGE_FREE_TIER_COMING_SOON_HOVER", (function() {
                return V
            })), n.d(t, "PRICING_PAGE_CLUSTERIZED_INFO_PRESENTED", (function() {
                return W
            })), n.d(t, "PRICING_PAGE_MISSING_CLUSTER_INFO_ENCOUNTERED", (function() {
                return j
            })), n.d(t, "PRICING_PAGE_PURCHASE_NOW_CLICKED", (function() {
                return q
            })), n.d(t, "PRICING_PAGE_PURCHASE_NOW_REDIRECT", (function() {
                return z
            })), n.d(t, "PRICING_PAGE_PURCHASE_NOW_REDIRECT_FAILURE", (function() {
                return X
            })), n.d(t, "PRICING_PAGE_SEAT_BUCKET_CHANGED", (function() {
                return Q
            })), n.d(t, "PRICING_PAGE_PERIOD_CHANGED", (function() {
                return Z
            })), n.d(t, "PRICING_PAGE_SEAT_DROPDOWN_OPENED", (function() {
                return J
            })), n.d(t, "PRICING_PAGE_PRODUCT_SWITCHER_CLICKED", (function() {
                return $
            })), n.d(t, "FOOTER_LINK_CLICK", (function() {
                return ee
            })), n.d(t, "SIDE_MENU_LINK_CLICK", (function() {
                return te
            })), n.d(t, "LANGUAGE_PICKER_LANG_CHANGED", (function() {
                return ne
            })), n.d(t, "LANGUAGE_PICKER_OPENED", (function() {
                return _e
            })), n.d(t, "MOBILE_DOWNLOAD_LINK_CLICK", (function() {
                return re
            })), n.d(t, "CAROUSEL_SWITCH_BOARD_CLICKED", (function() {
                return ie
            })), n.d(t, "CAROUSEL_BOARD_SWITCHED", (function() {
                return oe
            })), n.d(t, "CAROUSEL_PAGE_CLICKED", (function() {
                return ae
            })), n.d(t, "CAROUSEL_ARROW_CLICKED", (function() {
                return ce
            })), n.d(t, "CAROUSEL_USER_SWIPE", (function() {
                return ue
            })), n.d(t, "PAGE_SCROLL_BY_PERCENTAGE", (function() {
                return Ee
            })), n.d(t, "SCROLL_INDICATION_CLICKED", (function() {
                return se
            })), n.d(t, "CLUSTER_CLICKED", (function() {
                return de
            })), n.d(t, "CLUSTER_SELECTED", (function() {
                return le
            })), n.d(t, "MOBILE_CLUSTER_CLICKED", (function() {
                return Te
            })), n.d(t, "MOBILE_CLUSTER_SELECTED", (function() {
                return Ie
            })), n.d(t, "LAYOUT_CLICKED", (function() {
                return Oe
            })), n.d(t, "LAYOUT_SELECTED", (function() {
                return Ce
            })), n.d(t, "INDUSTRY_SELECTED", (function() {
                return fe
            })), n.d(t, "INDUSTRY_MANAGE_OPTION_CLICKED", (function() {
                return Ae
            })), n.d(t, "INDUSTRY_NEXT_CLICKED", (function() {
                return pe
            })), n.d(t, "HUBSPOT_FORM_SUBMIT_CLICKED", (function() {
                return Se
            })), n.d(t, "HUBSPOT_FORM_SUBMIT_FAILED", (function() {
                return Re
            })), n.d(t, "HUBSPOT_FORM_READY", (function() {
                return Ne
            })), n.d(t, "HUBSPOT_FORM_INPUT_BLUR", (function() {
                return ge
            })), n.d(t, "PAGE_PERFORMANCE_TRACKING_GENERIC_ERROR", (function() {
                return me
            })), n.d(t, "PAGE_PERFORMANCE_TRACKING_NOT_SUPPORTED", (function() {
                return we
            })), n.d(t, "PAGE_PERFORMANCE_TRACKING_DATA", (function() {
                return be
            })), n.d(t, "PAGE_PERFORMANCE_TRACKING_ERROR", (function() {
                return Le
            })), n.d(t, "PAGE_PERFORMANCE_TRACKING_RESOURCES", (function() {
                return De
            })), n.d(t, "PAGE_PERFORMANCE_TRACKING_RESOURCES_ERROR", (function() {
                return Pe
            })), n.d(t, "STORIES_SOURCE", (function() {
                return ye
            })), n.d(t, "SHARE_NEW_TEMPLATE_CLICK", (function() {
                return he
            })), n.d(t, "SHOW_TEMPLATES", (function() {
                return Ue
            })), n.d(t, "COMMUNITY_GENERATOR_TEMPLATE_BUTTON", (function() {
                return Me
            })), n.d(t, "UPDATE_COMMUNITY_TEMPLATE_STATUS", (function() {
                return ve
            })), n.d(t, "LINK_BOARD_TO_MONDAY_STORIES", (function() {
                return ke
            })), n.d(t, "UNLINK_BOARD_TO_MONDAY_STORIES", (function() {
                return Ge
            })), n.d(t, "USE_BOARD_FROM_MONDAY_STORIES", (function() {
                return Be
            })), n.d(t, "SIGN_UP_FROM_TEMPLATE", (function() {
                return Ke
            })), n.d(t, "EMPTY_TEMPLATE_CLICK", (function() {
                return Fe
            })), n.d(t, "USER_TEMPLATE_APPROVAL", (function() {
                return Ye
            })), n.d(t, "USER_TERMS_APPROVAL", (function() {
                return xe
            })), n.d(t, "CATEGORY_CLICK", (function() {
                return He
            })), n.d(t, "CATEGORY_SHOW_ALL_CLICK", (function() {
                return Ve
            })), n.d(t, "SHOW_MORE_CLICK", (function() {
                return We
            })), n.d(t, "SHOW_TOP_5_STORIES", (function() {
                return je
            })), n.d(t, "TOPBAR_SIGNUP_LINK_CLICK", (function() {
                return qe
            })), n.d(t, "GENERATOR_PAGE_ARCHIVE_CLICK", (function() {
                return ze
            })), n.d(t, "TOP_BANNER_CLOSED_CLICK", (function() {
                return Xe
            })), n.d(t, "IFRAME_COMPONENT_RENDERED", (function() {
                return Qe
            })), n.d(t, "IFRAME_LOADED", (function() {
                return Ze
            })), n.d(t, "IFRAME_LOAD_ERROR", (function() {
                return Je
            })), n.d(t, "EMBEDDED_BOARD_INITIAL_INTERACTION", (function() {
                return $e
            })), n.d(t, "SUBSCRIBE_BUTTON_BIGBRAIN_EVENT_NAME", (function() {
                return et
            })), n.d(t, "SUBSCRIBE_BUTTON_RENDERED", (function() {
                return tt
            })), n.d(t, "CLICKED_SUBSCRIBE_BUTTON", (function() {
                return nt
            })), n.d(t, "SUBSCRIPTION_REQUESTED", (function() {
                return _t
            })), n.d(t, "SUBSCRIPTION_SUCCESS", (function() {
                return rt
            })), n.d(t, "CAREER_PAGE_CLICK", (function() {
                return it
            })), n.d(t, "CAREER_KIND_SEARCH_FIELD_START_TYPING", (function() {
                return ot
            })), n.d(t, "CAREER_KIND_SEARCH_FIELD_SUBMITTED", (function() {
                return at
            })), n.d(t, "CAREER_KIND_FILTER_BY_LOCATION", (function() {
                return ct
            })), n.d(t, "CAREER_KIND_FILTER_BY_TEAM", (function() {
                return ut
            })), n.d(t, "CAREER_KIND_LOCATION_FILTER_CHOSEN", (function() {
                return Et
            })), n.d(t, "CAREER_KIND_TEAM_FILTER_CHOSEN", (function() {
                return st
            })), n.d(t, "CAREER_KIND_IMAGES_HOVERED", (function() {
                return dt
            })), n.d(t, "CAREER_TEAM_FILTER_CHOSEN", (function() {
                return lt
            })), n.d(t, "CAREER_KIND_SHOW_MORE_OPTIONS", (function() {
                return Tt
            })), n.d(t, "CAREER_KIND_DIDNT_FIND_POSITION", (function() {
                return It
            })), n.d(t, "CAREER_KIND_SPECIFIC_POSITION_CLICKED", (function() {
                return Ot
            })), n.d(t, "CAREER_KIND_NEWS_ITEM_CLICKED", (function() {
                return Ct
            })), n.d(t, "CAREER_KIND_BLOG_ITEM_CLICKED", (function() {
                return ft
            })), n.d(t, "CAREER_KIND_PODCAST_ITEM_CLICKED", (function() {
                return At
            })), n.d(t, "CAREER_KIND_SEARCH_OPEN_POSITION_BOTTOM_CTA", (function() {
                return pt
            })), n.d(t, "CAREER_KIND_BACK_TO_CARRER_PAGE_CTA", (function() {
                return St
            })), n.d(t, "CAREER_POSITIONS_RETRIEVE_FROM_COMEET", (function() {
                return Rt
            })), n.d(t, "CAREER_POSITIONS_RETRIEVE_FROM_COMEET_ERROR", (function() {
                return Nt
            })), n.d(t, "CAREER_COMEET_RETRIEVE_POSITIONS_TIMEOUT", (function() {
                return gt
            })), n.d(t, "CAREER_POSITIONS_APPLY_NOW_BUTTON_IS_VISIBLE", (function() {
                return mt
            })), n.d(t, "CAREERS_POSITION_APPLY_NOW_BUTTON_CLICKED", (function() {
                return wt
            })), n.d(t, "MOUSE_ENTER_IMAGE_ELEMENT", (function() {
                return bt
            })), n.d(t, "CLICK_IMAGE_ELEMENT", (function() {
                return Lt
            })), n.d(t, "SET_SKIP_QUESTION_COOKIE", (function() {
                return Dt
            })), n.d(t, "CONTACT_US_BUTTON_CLICKED", (function() {
                return Pt
            })), n.d(t, "SEE_COMPLETE_FEATURES_LIST_CLICKED", (function() {
                return yt
            })), n.d(t, "PRICING_PAGE_FEATURE_LINK_CLICKED", (function() {
                return ht
            })), n.d(t, "CONTACT_SALES_FORM_SUBMISSION_FAILED", (function() {
                return Ut
            })), n.d(t, "DOM_CHANGED", (function() {
                return Mt
            })), n.d(t, "DOM_CHANGED_UNAVAILABLE", (function() {
                return vt
            })), n.d(t, "DOM_CHANGE_EVENT_FAILURE", (function() {
                return kt
            })), n.d(t, "SERVER_EXCEPTION", (function() {
                return Gt
            })), n.d(t, "CAREERS_ERROR_RENDERED", (function() {
                return Bt
            })), n.d(t, "SELECTED_TAG_EVENT", (function() {
                return Kt
            })), n.d(t, "CAROUSEL_SWIPED", (function() {
                return Ft
            })), n.d(t, "CAROUSEL_SLIDE_CHANGED", (function() {
                return Yt
            })), n.d(t, "GRID_TAG_CLICKED", (function() {
                return xt
            })), n.d(t, "USE_CASE_TAG_CLICKED", (function() {
                return Ht
            })), n.d(t, "GRID_TAG_HOVERED", (function() {
                return Vt
            })), n.d(t, "MINI_SITE_CLUSTER_NOT_VALID", (function() {
                return Wt
            })), n.d(t, "ZENDESK_FORM_SUBMIT_CLICKED", (function() {
                return jt
            })), n.d(t, "ZENDESK_FORM_SUBMIT_SUCCESS", (function() {
                return qt
            })), n.d(t, "ZENDESK_FORM_SUBMIT_FAILED", (function() {
                return zt
            })), n.d(t, "PAGE_USAGE_DURATION", (function() {
                return Xt
            })), n.d(t, "BIGBRAIN_IFRAME_LOCALSTORAGE_EVENTS", (function() {
                return Qt
            })), n.d(t, "WEBSITE_SYNC_VISITOR_AND_AB_TEST_EXPERIMENT_ID", (function() {
                return Zt
            })), n.d(t, "BIGBRAIN_IFRAME_COOKIE_SYNC_ERROR", (function() {
                return Jt
            })), n.d(t, "HEADER_LINK_CLICKED", (function() {
                return $t
            })), n.d(t, "HEADER_SUBMENU_LINK_CLICKED", (function() {
                return en
            })), n.d(t, "HEADER_SUBMENU_SEE_MORE_CLICKED", (function() {
                return tn
            })), n.d(t, "SECONDARY_HEADER_LINK_CLICKED", (function() {
                return nn
            })), n.d(t, "HEADER_SUBMENU_OPENED", (function() {
                return _n
            })), n.d(t, "HEADER_SUBMENU_CLOSED", (function() {
                return rn
            })), n.d(t, "HEADER_PRODUCT_TAG_HOVERED", (function() {
                return on
            })), n.d(t, "HEADER_LEFT_PANEL_ITEM_CLICKED", (function() {
                return an
            })), n.d(t, "HEADER_LEFT_PANEL_SUBITEM_CLICKED", (function() {
                return cn
            })), n.d(t, "HEADER_LEFT_PANEL_SUBITEM_CONTENT_VIEWED", (function() {
                return un
            })), n.d(t, "SEGMENT_VISIBLE_IN_VIEWPORT", (function() {
                return En
            })), n.d(t, "SEGMENT_NOT_VISIBLE_IN_VIEWPORT", (function() {
                return sn
            })), n.d(t, "PICTURE_WITH_LINK_CLICKED", (function() {
                return dn
            })), n.d(t, "REGULAR_BUTTON_CLICKED", (function() {
                return ln
            })), n.d(t, "SECONDARY_BUTTON_CLICKED", (function() {
                return Tn
            })), n.d(t, "TAB_CLICKED", (function() {
                return In
            })), n.d(t, "POPUP_LINK_CLICKED", (function() {
                return On
            })), n.d(t, "BANNER_LINK_CLICKED", (function() {
                return Cn
            })), n.d(t, "BOARD_TAB_CLICKED", (function() {
                return fn
            })), n.d(t, "BOARD_TAB_HOVERED", (function() {
                return An
            })), n.d(t, "MONDAY_HYPERLINK_CLICKED", (function() {
                return pn
            })), n.d(t, "GRID_CARD_CLICKED", (function() {
                return Sn
            })), n.d(t, "GRID_CARD_HOVERED", (function() {
                return Rn
            })), n.d(t, "FLEXIBLE_GRID_CARD_CLICKED", (function() {
                return Nn
            })), n.d(t, "FLEXIBLE_GRID_CARD_HOVERED", (function() {
                return gn
            })), n.d(t, "COOKIE_UNCATEGORIZED", (function() {
                return mn
            })), n.d(t, "COOKIE_CATEGORY_GTM_DATALAYER_NOT_SET", (function() {
                return wn
            })), n.d(t, "COOKIE_CATEGORY_NOT_APPROVED", (function() {
                return bn
            })), n.d(t, "FREQUENTLY_ASKED_QUESTION_CLICKED", (function() {
                return Ln
            })), n.d(t, "THUMBNAIL_LIST_LINK_CLICKED", (function() {
                return Dn
            })), n.d(t, "THUMBNAIL_LIST_BOTTOM_LINK_CLICKED", (function() {
                return Pn
            })), n.d(t, "CUSTOMER_TESTIMONIAL_CHANGED_MANUALLY", (function() {
                return yn
            })), n.d(t, "SOLUTION_PAGE_WITH_INVALID_SOLUTION_ERROR", (function() {
                return hn
            })), n.d(t, "SOLUTION_CATEGORY_PAGE_WITH_INVALID_CATEGORY_ERROR", (function() {
                return Un
            })), n.d(t, "SOLUTION_PAGE_ERROR", (function() {
                return Mn
            })), n.d(t, "SOLUTION_CATEGORY_PAGE_ERROR", (function() {
                return vn
            })), n.d(t, "SOLUTION_CARD_CLICKED", (function() {
                return kn
            })), n.d(t, "FEATURED_CATEGORY_CLICKED", (function() {
                return Gn
            })), n.d(t, "MENU_CATEGORY_CLICKED", (function() {
                return Bn
            })), n.d(t, "SOLUTION_GALERY_ITEM_CLICKED", (function() {
                return Kn
            })), n.d(t, "SOLUTION_GALERY_VIDEO_INTERACTION", (function() {
                return Fn
            })), n.d(t, "SOLUTION_STORE_SEARCH", (function() {
                return Yn
            })), n.d(t, "SOLUTION_STORE_SEARCH_COMPLETED", (function() {
                return xn
            })), n.d(t, "SIGN_UP_WITH_TEMPLATE_CLICKED", (function() {
                return Hn
            })), n.d(t, "CLIENT_PERFORMANCE_MEASUREMENT", (function() {
                return Vn
            })), n.d(t, "SEGMENT_LAYOUT_NOT_FOUND", (function() {
                return Wn
            })), n.d(t, "CLIENT_EXCEPTION", (function() {
                return jn
            })), n.d(t, "PLATFORM_MANIFEST_FETCH_ERROR", (function() {
                return qn
            })), n.d(t, "CLUSTER_INTERNAL_FETCH_ERROR", (function() {
                return zn
            })), n.d(t, "CLUSTER_INTERNAL_ERROR", (function() {
                return Xn
            })), n.d(t, "TRANSLATIONS_INTERNAL_ERROR", (function() {
                return Qn
            })), n.d(t, "RETRIEVED_404_ERROR", (function() {
                return Zn
            })), n.d(t, "CLIENT_ERROR_STATE_CAUGHT", (function() {
                return Jn
            })), n.d(t, "DRIFT_CHAT_LOADED", (function() {
                return $n
            })), n.d(t, "DRIFT_COVERSATION_STARTED", (function() {
                return e_
            })), n.d(t, "DRIFT_MEETING_BOOKED", (function() {
                return t_
            })), n.d(t, "DRIFT_AGENT_REPLIED", (function() {
                return n_
            })), n.d(t, "DRIFT_MESSAGE_RECEIVED", (function() {
                return __
            })), n.d(t, "SIGNUP_POPUP_OPENED", (function() {
                return r_
            })), n.d(t, "SIGNUP_POPUP_CLOSED", (function() {
                return i_
            })), n.d(t, "MOBILE_PRODUCT_COMPONENT_OPENED", (function() {
                return o_
            })), n.d(t, "MOBILE_PRODUCT_COMPONENT_CLOSED", (function() {
                return a_
            })), n.d(t, "WELCOME_PAGE_DIDNT_FIND_ACCOUNT_CLICKED", (function() {
                return c_
            })), n.d(t, "WELCOME_PAGE_GO_TO_ACCOUNT_CLICKED", (function() {
                return u_
            })), n.d(t, "WELCOME_PAGE_LOADED_WITH_NO_ACCOUNTS", (function() {
                return E_
            })), n.d(t, "WELCOME_PAGE_LOADED", (function() {
                return s_
            })), n.d(t, "DEMO_ASSET_CLICKED", (function() {
                return d_
            })), n.d(t, "DEMO_ASSET_LEFT_SIDE_CLICKED", (function() {
                return l_
            })), n.d(t, "DEMO_STEP_CLICKED", (function() {
                return T_
            })), n.d(t, "TYPEFORM_CONTACT_SALES_QUESTION_CHANGED", (function() {
                return I_
            })), n.d(t, "TYPEFORM_CONTACT_SALES_FORM_LOADED", (function() {
                return O_
            })), n.d(t, "TYPEFORM_CONTACT_SALES_FORM_SUBMITTED", (function() {
                return C_
            })), n.d(t, "TYPEFORM_CONTACT_SALES_FORM_CLOSED", (function() {
                return f_
            })), n.d(t, "TYPEFORM_UNHANDLED_EXCEPTION", (function() {
                return A_
            })), n.d(t, "SIGNUP_PRODUCT_TAG_HOVERED", (function() {
                return p_
            })), n.d(t, "SIGNUP_PRODUCT_CARD_CLICKED", (function() {
                return S_
            })), n.d(t, "CONTINUE_BUTTON_CLICKED", (function() {
                return R_
            })), n.d(t, "SKIP_BUTTON_CLICKED", (function() {
                return N_
            })), n.d(t, "SIGN_UP_WITH_PRODUCTS_LOADED", (function() {
                return g_
            })), n.d(t, "PRODUCT_USE_CASE_ENTER", (function() {
                return m_
            })), n.d(t, "PRODUCT_USE_CASE_LEAVE", (function() {
                return w_
            })), n.d(t, "LIVE_BOARD_OPENED", (function() {
                return b_
            })), n.d(t, "LIVE_BOARD_CLOSED", (function() {
                return L_
            })), n.d(t, "LIVE_BOARD_OPEN_BUTTON_HOVERED", (function() {
                return D_
            })), n.d(t, "LIVE_BOARD_SCALED", (function() {
                return P_
            })), n.d(t, "LIVE_BOARD_OPEN_BUTTON_CLICKED", (function() {
                return y_
            })), n.d(t, "LIVE_BOARD_PARALLAX_ASSET_CLICKED", (function() {
                return h_
            })), n.d(t, "ASSET_COMPONENT_IS_FULLY_VISIBLE", (function() {
                return U_
            })), n.d(t, "NAVIGATION_LINK_CLICKED", (function() {
                return M_
            })), n.d(t, "FILTER_CLICKED", (function() {
                return v_
            })), n.d(t, "FILTER_CHOICE_CLICKED", (function() {
                return k_
            })), n.d(t, "FILTER_TYPING_STARTED", (function() {
                return G_
            })), n.d(t, "CLEAR_ALL_CLICKED", (function() {
                return B_
            })), n.d(t, "SHARE_CLICKED", (function() {
                return K_
            })), n.d(t, "READ_MORE_CLICKED", (function() {
                return F_
            })), n.d(t, "MONDAY_CONFIG_FETCH_ERROR", (function() {
                return Y_
            })), n.d(t, "MONDAY_CONFIG_INTERNAL_ERROR", (function() {
                return x_
            })), n.d(t, "PRODUCT_CARD_SELECTED", (function() {
                return H_
            })), n.d(t, "PRODUCT_CARD_UNSELECTED", (function() {
                return V_
            })), n.d(t, "CHECKBOX_SELECTED", (function() {
                return W_
            })), n.d(t, "CHECKBOX_UNSELECTED", (function() {
                return j_
            })), n.d(t, "FIRST_FOLD_PRODUCT_CARD_HOVERED", (function() {
                return q_
            })), n.d(t, "PRODUCTS_SELECTED", (function() {
                return z_
            })), n.d(t, "PRODUCT_CARD_CLICKED", (function() {
                return X_
            })), n.d(t, "PRODUCT_MODAL_OPENED", (function() {
                return Q_
            })), n.d(t, "PRODUCT_TAG_CLICKED", (function() {
                return Z_
            }));
            var _ = "track",
                r = "monday_homepage",
                i = "website",
                o = "page_view",
                a = "prefetched_asset",
                c = "prefetch_all_assets_completed",
                u = "mobile_or_tablet_view",
                E = "hp_social_share",
                s = "signup_form_get_started_clicked",
                d = "signup_form_soft_signup",
                l = "signup_secondary_button_clicked",
                T = "signup_main_cta_clicked",
                I = "signup_with_google_clicked",
                O = "signup_user_email_input_start_fill",
                C = "signup_submit_click_with_email_error",
                f = "existing_account_main_cta_clicked",
                A = "button_link_clicked",
                p = "set_cluster_id",
                S = "set_cluster",
                R = "set_sub_cluster_id",
                N = "set_locale_id",
                g = "clicked_signup_without_inserting_email",
                m = "youtube_modal_video_opened",
                w = "youtube_modal_video_closed",
                b = "youtube_modal_video_opened_secondary",
                L = "youtube_modal_video_closed_secondary",
                D = "youtube_video_started",
                P = "youtube_video_ended",
                y = "exit_popup_open",
                h = "exit_popup_close",
                U = "exit_popup_reason",
                M = "hp_opened_pricing_plan_popup",
                v = "pricing_info_icon_hover",
                k = "pricing_plan_selected",
                G = "pricing_billing_period_selected",
                B = "pricing_page_faq_question_click",
                K = "pricing_page_faq_section_visible",
                F = "pricing_page_faq_questions_button_click",
                Y = "pricing_page_faq_question_link_click",
                x = "pricing_page_feature_info_icon_hover",
                H = "pricing_page_feature_info_icon_exit",
                V = "pricing_page_free_tier_coming_soon_hover",
                W = "pricing_page_features",
                j = "pricing_page_missing_cluster_info_encountered",
                q = "pricing_page_purchase_now_clicked",
                z = "pricing_page_purchase_now_redirect",
                X = "pricing_page_purchase_now_redirect_failure",
                Q = "pricing_page_seat_bucket_changed",
                Z = "pricing_page_period_changed",
                J = "pricing_page_seat_dropdown_opened",
                $ = "pricing_page_product_switcher_product_selected",
                ee = "footer_link_click",
                te = "side_menu_link_click",
                ne = "language_picker_language_changed",
                _e = "language_picker_opened",
                re = "mobile_download_link_click",
                ie = "carousel_click_switch_board",
                oe = "carousel_board_switched",
                ae = "carousel_click_page",
                ce = "carousel_click_arrow",
                ue = "carousel_user_swipe",
                Ee = "page_scroll_by_percentage",
                se = "scroll_indication_clicked",
                de = "value_before_signup_cluster_clicked",
                le = "value_before_signup_cluster_selected",
                Te = "value_before_signup_mobile_cluster_clicked",
                Ie = "value_before_signup_mobile_cluster_selected",
                Oe = "value_before_signup_layout_clicked",
                Ce = "value_before_signup_layout_selected",
                fe = "value_before_signup_industry_selected",
                Ae = "value_before_signup_industry_manage_option_clicked",
                pe = "value_before_signup_industry_next_clicked",
                Se = "hubspot_form_submit_clicked",
                Re = "hubspot_form_submit_failed",
                Ne = "hubspot_form_ready",
                ge = "hubspot_form_input_blur",
                me = "page_performance_tracking_generic_error",
                we = "page_performance_tracking_not_supported",
                be = "page_performance_tracking_data",
                Le = "page_performance_tracking_error",
                De = "page_performance_tracking_resources",
                Pe = "page_performance_tracking_resources_error",
                ye = "monday_stories",
                he = "share_new_community_template_click",
                Ue = "show_community_templates",
                Me = "community_generator_button",
                ve = "community_template_status_update",
                ke = "monday_stories_link_board",
                Ge = "monday_stories_unlink_board",
                Be = "monday_stories_use_board",
                Ke = "monday_stories_sign_up_from_board",
                Fe = "monday_stories_empty_template_click",
                Ye = "monday_stories_user_approval",
                xe = "monday_stories_user_terms_of_use_approval",
                He = "monday_stories_category_click",
                Ve = "monday_stories_category_show_all_click",
                We = "monday_stories_show_more_click",
                je = "monday_stories_show_top_5",
                qe = "monday_stories_top_bar_sign_up",
                ze = "generator_page_archive_click",
                Xe = "top_banner_close_clicked",
                Qe = "iframe_component_rendered",
                Ze = "iframe_loaded",
                Je = "iframe_load_error",
                $e = "embedded_board_initial_interaction",
                et = "homepage_subscribe_button_tracking",
                tt = "subscribe_button_rendered",
                nt = "clicked_subscribe_button",
                _t = "subscription_requested",
                rt = "subscription_success",
                it = "career_page_click",
                ot = "search_field_start_typing",
                at = "search_field_submitted",
                ct = "filter_by_location",
                ut = "filter_by_team",
                Et = "location_filter_chosen",
                st = "team_filter_chosen",
                dt = "images_hovered",
                lt = "team_filter_chosen",
                Tt = "show_more_options",
                It = "didnt_find_position",
                Ot = "specific_position_clicked",
                Ct = "news_item_clicked",
                ft = "blog_item_clicked",
                At = "podcast_item_clicked",
                pt = "search_open_position_bottom_cta",
                St = "back_to_careers_page_cta",
                Rt = "career_positions_retrieve_from_comeet",
                Nt = "career_positions_retrieve_from_comeet_error",
                gt = "career_comeet_retrieve_positions_timeout",
                mt = "career_positions_apply_now_button_is_visible",
                wt = "careers_position_apply_now_button_clicked",
                bt = "mouse_enter_image_element",
                Lt = "click_image_element",
                Dt = "set_skip_question_cookie",
                Pt = "contact_us_button_clicked",
                yt = "see_complete_features_list_clicked",
                ht = "pricing_page_feature_link_clicked",
                Ut = "contact_sales_form_submission_failed",
                Mt = "dom_changed_v3",
                vt = "dom_changed_unavailable",
                kt = "dom_change_event_failure",
                Gt = "server_exception",
                Bt = "careers_error_rendered",
                Kt = "selected_tag_event",
                Ft = "carousel_swiped",
                Yt = "carousel_slide_changed",
                xt = "grid_tag_clicked",
                Ht = "use_case_tag_clicked",
                Vt = "grid_tag_hovered",
                Wt = "mini_site_cluster_not_valid",
                jt = "zendesk_form_submit_clicked",
                qt = "zendesk_form_submit_success",
                zt = "zendesk_form_submit_failed",
                Xt = "page_usage_duration",
                Qt = "bigbrain_iframe_localstorage_events",
                Zt = "website_sync_visitor_and_ab_test_experiment_id",
                Jt = "bigbrain_iframe_cookie_sync_error",
                $t = "header_link_clicked",
                en = "header_submenu_link_clicked",
                tn = "header_submenu_see_more_clicked",
                nn = "secondary_header_link_clicked",
                _n = "header_submenu_opened",
                rn = "header_submenu_closed",
                on = "header_product_tag_hovered",
                an = "header_left_panel_item_clicked",
                cn = "header_left_panel_subitem_clicked",
                un = "header_left_panel_subitem_content_viewed",
                En = "segment_visible_in_viewport",
                sn = "segment_not_visible_in_viewport",
                dn = "picture_with_link_clicked",
                ln = "regular_button_clicked",
                Tn = "secondary_button_clicked",
                In = "tab_clicked",
                On = "popup_link_clicked",
                Cn = "banner_link_clicked",
                fn = "board_tab_clicked",
                An = "board_tab_hovered",
                pn = "monday_hyperlink_clicked",
                Sn = "grid_card_clicked",
                Rn = "grid_card_hovered",
                Nn = "flexible_grid_card_clicked",
                gn = "flexible_grid_card_hovered",
                mn = "website_uncategorized_cookie",
                wn = "cookie_category_gtm_datalayer_not_set",
                bn = "cookie_category_not_approved",
                Ln = "frequently_asked_question_clicked",
                Dn = "thumbnail_list_link_clicked",
                Pn = "thumbnail_list_bottom_link_clicked",
                yn = "customer_testimonial_changed_manually",
                hn = "solution_page_with_invalid_solution_error",
                Un = "solution_page_with_invalid_category_error",
                Mn = "solution_page_error",
                vn = "solution_category_page_error",
                kn = "solution_card_clicked",
                Gn = "featured_category_clicked",
                Bn = "menu_category_clicked",
                Kn = "solution_galery_item_clicked",
                Fn = "solution_galery_video_interaction",
                Yn = "solution_store_search",
                xn = "solution_store_search_completed",
                Hn = "sign_up_with_template_clicked",
                Vn = "client_performance_measurement",
                Wn = "segment_layout_not_found",
                jn = "client_exception",
                qn = "platform_manifest_fetch_error",
                zn = "cluster_internal_fetch_error",
                Xn = "cluster_internal_error",
                Qn = "translations_internal_error",
                Zn = "404_page_retrieved",
                Jn = "website_client_error_caught",
                $n = "drift_chat_loaded",
                e_ = "drift_coversation_started",
                t_ = "drift_meeting_booked",
                n_ = "drift_agent_replied",
                __ = "drift_message_received",
                r_ = "signup_popup_opened",
                i_ = "signup_popup_closed",
                o_ = "mobile_product_component_opened",
                a_ = "mobile_product_component_closed",
                c_ = "welcome_page_didnt_find_account_clicked",
                u_ = "welcome_page_go_to_account_clicked",
                E_ = "welcome_page_loaded_with_no_accounts",
                s_ = "welcome_page_loaded",
                d_ = "demo_asset_clicked",
                l_ = "demo_asset_left_side_clicked",
                T_ = "demo_step_clicked",
                I_ = "typeform_contact_sales_question_changed",
                O_ = "typeform_contact_sales_form_loaded",
                C_ = "typeform_contact_sales_form_submitted",
                f_ = "typeform_contact_sales_form_closed",
                A_ = "typeform_unhandled_exception",
                p_ = "signup_product_tag_hovered",
                S_ = "signup_product_card_clicked",
                R_ = "signup_products_continue_button_clicked",
                N_ = "signup_products_skip_button_clicked",
                g_ = "sign_up_with_products_loaded",
                m_ = "product_use_case_enter",
                w_ = "product_use_case_leave",
                b_ = "live_board_opened",
                L_ = "live_board_closed",
                D_ = "live_board_open_button_hovered",
                P_ = "live_board_scaled",
                y_ = "live_board_open_button_clicked",
                h_ = "live_board_parallax_asset_clicked",
                U_ = "asset_component_is_fully_visible",
                M_ = "navigation_link_clicked",
                v_ = "filter_clicked",
                k_ = "filter_choice_clicked",
                G_ = "filter_typing_started",
                B_ = "clear_all_clicked",
                K_ = "share_clicked",
                F_ = "read_more_clicked",
                Y_ = "monday_config_fetch_error",
                x_ = "monday_config_internal_error",
                H_ = "product_card_selected",
                V_ = "product_card_unselected",
                W_ = "checkbox_selected",
                j_ = "checkbox_unselected",
                q_ = "first_fold_product_card__hovered",
                z_ = "products_selected",
                X_ = "product_card_clicked",
                Q_ = "product_modal_opened",
                Z_ = "product_tag_clicked"
        }
    }
]);
//# sourceMappingURL=1e4a768985375c9086279ba9fac884e0684dadfa.7c27846505f14640f02c.js.map