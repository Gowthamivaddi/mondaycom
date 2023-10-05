_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [60], {
        "0/5u": function(t, e, n) {},
        "1TCz": function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "reportWebVitals", (function() {
                return f
            })), n.d(e, "default", (function() {
                return d
            }));
            var r = n("cpVT"),
                i = (n("6Fm8"), n("9LTe"), n("0/5u"), n("Tj/8"), n("Pi13")),
                o = n("o6i0"),
                a = n("IdUi"),
                u = n.n(a),
                s = n("nKUr");

            function c(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function f(t) {
                t.label && t.label === o.NEXTJS_WEB_VITAL_LABEL && Object(i.collect)(t)
            }

            function d(t) {
                var e = t.Component,
                    n = t.pageProps;
                return Object(s.jsx)(e, function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? c(Object(n), !0).forEach((function(e) {
                            Object(r.default)(t, e, n[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                        }))
                    }
                    return t
                }({}, n))
            }
            u.a.init()
        },
        4: function(t, e, n) {
            n("j36g"), n("EeD0"), n("GcxT"), t.exports = n("nOHt")
        },
        "6Fm8": function(t, e, n) {},
        "9LTe": function(t, e, n) {},
        DUL6: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "DefaultPrivacyLevel", (function() {
                return Wt
            })), n.d(e, "datadogRum", (function() {
                return Fo
            }));
            var r = {
                    log: "log",
                    debug: "debug",
                    info: "info",
                    warn: "warn",
                    error: "error"
                },
                i = function(t) {
                    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                    Object.prototype.hasOwnProperty.call(r, t) || (t = r.log), i[t].apply(i, e)
                };

            function o(t, e) {
                return function() {
                    for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                    try {
                        return t.apply(void 0, n)
                    } catch (o) {
                        i.error(e, o)
                    }
                }
            }
            i.debug = console.debug.bind(console), i.log = console.log.bind(console), i.info = console.info.bind(console), i.warn = console.warn.bind(console), i.error = console.error.bind(console);
            var a, u = function(t, e, n) {
                    if (n || 2 === arguments.length)
                        for (var r, i = 0, o = e.length; i < o; i++) !r && i in e || (r || (r = Array.prototype.slice.call(e, 0, i)), r[i] = e[i]);
                    return t.concat(r || Array.prototype.slice.call(e))
                },
                s = !1;

            function c(t) {
                s = t
            }

            function f(t) {
                return function() {
                    return d(t, this, arguments)
                }
            }

            function d(t, e, n) {
                try {
                    return t.apply(e, n)
                } catch (i) {
                    if (l(r.error, i), a) try {
                        a(i)
                    } catch (i) {
                        l(r.error, i)
                    }
                }
            }

            function l(t) {
                for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                s && i.apply(void 0, u([t, "[MONITOR]"], e, !1))
            }
            var p = 1e3,
                v = 6e4;

            function m(t, e, n) {
                var r, i, o = !n || void 0 === n.leading || n.leading,
                    a = !n || void 0 === n.trailing || n.trailing,
                    u = !1;
                return {
                    throttled: function() {
                        for (var n = [], s = 0; s < arguments.length; s++) n[s] = arguments[s];
                        u ? r = n : (o ? t.apply(void 0, n) : r = n, u = !0, i = setTimeout((function() {
                            a && r && t.apply(void 0, r), u = !1, r = void 0
                        }), e))
                    },
                    cancel: function() {
                        clearTimeout(i), u = !1, r = void 0
                    }
                }
            }

            function h(t) {
                for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                return e.forEach((function(e) {
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                })), t
            }

            function y(t) {
                return h({}, t)
            }

            function g(t) {
                return t ? (parseInt(t, 10) ^ 16 * Math.random() >> parseInt(t, 10) / 4).toString(16) : "".concat(1e7, "-").concat(1e3, "-").concat(4e3, "-").concat(8e3, "-").concat(1e11).replace(/[018]/g, g)
            }

            function b(t) {
                return 0 !== t && 100 * Math.random() <= t
            }

            function w(t, e) {
                return +t.toFixed(e)
            }

            function S() {}

            function T(t, e, n) {
                if ("object" !== typeof t || null === t) return JSON.stringify(t);
                var r = C(Object.prototype),
                    i = C(Array.prototype),
                    o = C(Object.getPrototypeOf(t)),
                    a = C(t);
                try {
                    return JSON.stringify(t, e, n)
                } catch (u) {
                    return "<error: unable to serialize object>"
                } finally {
                    r(), i(), o(), a()
                }
            }

            function C(t) {
                var e = t,
                    n = e.toJSON;
                return n ? (delete e.toJSON, function() {
                    e.toJSON = n
                }) : S
            }

            function E(t, e) {
                return -1 !== t.indexOf(e)
            }

            function k(t) {
                if (Array.from) return Array.from(t);
                var e = [];
                if (t instanceof Set) t.forEach((function(t) {
                    return e.push(t)
                }));
                else
                    for (var n = 0; n < t.length; n++) e.push(t[n]);
                return e
            }

            function x(t, e) {
                for (var n = 0; n < t.length; n += 1) {
                    var r = t[n];
                    if (e(r, n)) return r
                }
            }

            function _(t) {
                return I(t) && t >= 0 && t <= 100
            }

            function I(t) {
                return "number" === typeof t
            }

            function O(t) {
                return Object.keys(t).map((function(e) {
                    return t[e]
                }))
            }

            function A(t) {
                return Object.keys(t).map((function(e) {
                    return [e, t[e]]
                }))
            }

            function R(t) {
                return 0 === Object.keys(t).length
            }

            function N() {
                if ("object" === typeof globalThis) return globalThis;
                Object.defineProperty(Object.prototype, "_dd_temp_", {
                    get: function() {
                        return this
                    },
                    configurable: !0
                });
                var t = _dd_temp_;
                return delete Object.prototype._dd_temp_, "object" !== typeof t && (t = "object" === typeof self ? self : "object" === typeof window ? window : {}), t
            }

            function L(t) {
                if (t.origin) return t.origin;
                var e = t.host.replace(/(:80|:443)$/, "");
                return "".concat(t.protocol, "//").concat(e)
            }

            function P(t, e) {
                var n = new RegExp("(?:^|;)\\s*".concat(e, "\\s*=\\s*([^;]+)")).exec(t);
                return n ? n[1] : void 0
            }

            function M(t, e, n) {
                void 0 === n && (n = "");
                var r = t.charCodeAt(e - 1),
                    i = r >= 55296 && r <= 56319 ? e + 1 : e;
                return t.length <= i ? t : "".concat(t.slice(0, i)).concat(n)
            }

            function D(t, e, n, r) {
                return U(t, [e], n, r)
            }

            function U(t, e, n, r) {
                var i = void 0 === r ? {} : r,
                    o = i.once,
                    a = i.capture,
                    u = i.passive,
                    s = f(o ? function(t) {
                        d(), n(t)
                    } : n),
                    c = u ? {
                        capture: a,
                        passive: u
                    } : a;
                e.forEach((function(e) {
                    return t.addEventListener(e, s, c)
                }));
                var d = function() {
                    return e.forEach((function(e) {
                        return t.removeEventListener(e, s, c)
                    }))
                };
                return {
                    stop: d
                }
            }

            function B(t, e) {
                return t.matches ? t.matches(e) : !!t.msMatchesSelector && t.msMatchesSelector(e)
            }

            function q(t, e) {
                document.readyState === t || "complete" === document.readyState ? e() : D(window, "complete" === t ? "load" : "DOMContentLoaded", e, {
                    once: !0
                })
            }

            function j(t) {
                return null === t ? "null" : Array.isArray(t) ? "array" : typeof t
            }

            function F(t, e, n) {
                if (void 0 === n && (n = function() {
                        if ("undefined" !== typeof WeakSet) {
                            var t = new WeakSet;
                            return {
                                hasAlreadyBeenSeen: function(e) {
                                    var n = t.has(e);
                                    return n || t.add(e), n
                                }
                            }
                        }
                        var e = [];
                        return {
                            hasAlreadyBeenSeen: function(t) {
                                var n = e.indexOf(t) >= 0;
                                return n || e.push(t), n
                            }
                        }
                    }()), void 0 === e) return t;
                if ("object" !== typeof e || null === e) return e;
                if (e instanceof Date) return new Date(e.getTime());
                if (e instanceof RegExp) {
                    var r = e.flags || [e.global ? "g" : "", e.ignoreCase ? "i" : "", e.multiline ? "m" : "", e.sticky ? "y" : "", e.unicode ? "u" : ""].join("");
                    return new RegExp(e.source, r)
                }
                if (!n.hasAlreadyBeenSeen(e)) {
                    if (Array.isArray(e)) {
                        for (var i = Array.isArray(t) ? t : [], o = 0; o < e.length; ++o) i[o] = F(i[o], e[o], n);
                        return i
                    }
                    var a = "object" === j(t) ? t : {};
                    for (var u in e) Object.prototype.hasOwnProperty.call(e, u) && (a[u] = F(a[u], e[u], n));
                    return a
                }
            }

            function V(t) {
                return F(void 0, t)
            }

            function H() {
                for (var t, e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                for (var r = 0, i = e; r < i.length; r++) {
                    var o = i[r];
                    void 0 !== o && null !== o && (t = F(t, o))
                }
                return t
            }

            function z(t, e) {
                return t.some((function(t) {
                    return t === e || t instanceof RegExp && t.test(e)
                }))
            }

            function G(t) {
                return window.CSS && window.CSS.escape ? window.CSS.escape(t) : t.replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, (function(t, e) {
                    return e ? "\0" === t ? "\ufffd" : "".concat(t.slice(0, -1), "\\").concat(t.charCodeAt(t.length - 1).toString(16), " ") : "\\".concat(t)
                }))
            }

            function X() {
                var t = {};
                return {
                    get: function() {
                        return t
                    },
                    add: function(e, n) {
                        t[e] = n
                    },
                    remove: function(e) {
                        delete t[e]
                    },
                    set: function(e) {
                        t = e
                    },
                    getContext: function() {
                        return V(t)
                    },
                    setContext: function(e) {
                        t = V(e)
                    },
                    setContextProperty: function(e, n) {
                        t[e] = V(n)
                    },
                    removeContextProperty: function(e) {
                        delete t[e]
                    },
                    clearContext: function() {
                        t = {}
                    }
                }
            }
            var W, Y = function() {
                function t() {
                    this.buffer = []
                }
                return t.prototype.add = function(t) {
                    this.buffer.push(t) > 500 && this.buffer.splice(0, 1)
                }, t.prototype.drain = function() {
                    this.buffer.forEach((function(t) {
                        return t()
                    })), this.buffer.length = 0
                }, t
            }();

            function K(t) {
                return {
                    relative: t,
                    timeStamp: J(t)
                }
            }

            function J(t) {
                var e = Z() - performance.now();
                return e > ot() ? Math.round(e + t) : function(t) {
                    return Math.round(ot() + t)
                }(t)
            }

            function $(t) {
                return I(t) ? w(1e6 * t, 0) : t
            }

            function Z() {
                return (new Date).getTime()
            }

            function Q() {
                return Z()
            }

            function tt() {
                return performance.now()
            }

            function et() {
                return {
                    relative: tt(),
                    timeStamp: Q()
                }
            }

            function nt() {
                return {
                    relative: 0,
                    timeStamp: ot()
                }
            }

            function rt(t, e) {
                return e - t
            }

            function it(t) {
                return t - ot()
            }

            function ot() {
                return void 0 === W && (W = performance.timing.navigationStart), W
            }
            var at;

            function ut(t, e, n, r) {
                var i = new Date;
                i.setTime(i.getTime() + n);
                var o = "expires=".concat(i.toUTCString()),
                    a = r && r.crossSite ? "none" : "strict",
                    u = r && r.domain ? ";domain=".concat(r.domain) : "",
                    s = r && r.secure ? ";secure" : "";
                document.cookie = "".concat(t, "=").concat(e, ";").concat(o, ";path=/;samesite=").concat(a).concat(u).concat(s)
            }

            function st(t) {
                return P(document.cookie, t)
            }

            function ct(t, e) {
                ut(t, "", 0, e)
            }

            function ft() {
                return Boolean(window._DATADOG_SYNTHETICS_INJECTS_RUM || st("datadog-synthetics-injects-rum"))
            }

            function dt() {
                var t = N().DatadogEventBridge;
                if (t) return {
                    getAllowedWebViewHosts: function() {
                        return JSON.parse(t.getAllowedWebViewHosts())
                    },
                    send: function(e, n) {
                        t.send(JSON.stringify({
                            eventType: e,
                            event: n
                        }))
                    }
                }
            }

            function lt(t) {
                var e;
                void 0 === t && (t = null === (e = N().location) || void 0 === e ? void 0 : e.hostname);
                var n = dt();
                return !!n && n.getAllowedWebViewHosts().some((function(e) {
                    return t === e || (n = t, r = ".".concat(e), n.slice(-r.length) === r);
                    var n, r
                }))
            }
            var pt = "?";

            function vt(t) {
                var e = [],
                    n = Ct(t, "stack");
                return n && n.split("\n").forEach((function(t) {
                    var n = function(t) {
                        var e = yt.exec(t);
                        if (!e) return;
                        var n = e[2] && 0 === e[2].indexOf("native"),
                            r = e[2] && 0 === e[2].indexOf("eval"),
                            i = gt.exec(e[2]);
                        r && i && (e[2] = i[1], e[3] = i[2], e[4] = i[3]);
                        return {
                            args: n ? [e[2]] : [],
                            column: e[4] ? +e[4] : void 0,
                            func: e[1] || pt,
                            line: e[3] ? +e[3] : void 0,
                            url: n ? void 0 : e[2]
                        }
                    }(t) || function(t) {
                        var e = bt.exec(t);
                        if (!e) return;
                        return {
                            args: [],
                            column: e[3] ? +e[3] : void 0,
                            func: pt,
                            line: e[2] ? +e[2] : void 0,
                            url: e[1]
                        }
                    }(t) || function(t) {
                        var e = wt.exec(t);
                        if (!e) return;
                        return {
                            args: [],
                            column: e[4] ? +e[4] : void 0,
                            func: e[1] || pt,
                            line: +e[3],
                            url: e[2]
                        }
                    }(t) || function(t) {
                        var e = St.exec(t);
                        if (!e) return;
                        var n = e[3] && e[3].indexOf(" > eval") > -1,
                            r = Tt.exec(e[3]);
                        n && r && (e[3] = r[1], e[4] = r[2], e[5] = void 0);
                        return {
                            args: e[2] ? e[2].split(",") : [],
                            column: e[5] ? +e[5] : void 0,
                            func: e[1] || pt,
                            line: e[4] ? +e[4] : void 0,
                            url: e[3]
                        }
                    }(t);
                    n && (!n.func && n.line && (n.func = pt), e.push(n))
                })), {
                    message: Ct(t, "message"),
                    name: Ct(t, "name"),
                    stack: e
                }
            }
            var mt = "((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\\w+\\.|\\/).*?)",
                ht = "(?::(\\d+))",
                yt = new RegExp("^\\s*at (.*?) ?\\(".concat(mt).concat(ht, "?").concat(ht, "?\\)?\\s*$"), "i"),
                gt = new RegExp("\\((\\S*)".concat(ht).concat(ht, "\\)"));
            var bt = new RegExp("^\\s*at ?".concat(mt).concat(ht, "?").concat(ht, "??\\s*$"), "i");
            var wt = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
            var St = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|capacitor|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i,
                Tt = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;

            function Ct(t, e) {
                if ("object" === typeof t && t && e in t) {
                    var n = t[e];
                    return "string" === typeof n ? n : void 0
                }
            }
            var Et, kt, xt = "agent",
                _t = "console",
                It = "custom",
                Ot = "source",
                At = "report";

            function Rt(t, e, n, r) {
                return t && (void 0 !== t.message || e instanceof Error) ? {
                    message: t.message || "Empty message",
                    stack: Nt(t),
                    handlingStack: r,
                    type: t.name
                } : {
                    message: "".concat(n, " ").concat(T(e)),
                    stack: "No stack, consider using an instance of Error",
                    handlingStack: r,
                    type: t && t.name
                }
            }

            function Nt(t) {
                var e = Lt(t);
                return t.stack.forEach((function(t) {
                    var n = "?" === t.func ? "<anonymous>" : t.func,
                        r = t.args && t.args.length > 0 ? "(".concat(t.args.join(", "), ")") : "",
                        i = t.line ? ":".concat(t.line) : "",
                        o = t.line && t.column ? ":".concat(t.column) : "";
                    e += "\n  at ".concat(n).concat(r, " @ ").concat(t.url).concat(i).concat(o)
                })), e
            }

            function Lt(t) {
                return "".concat(t.name || "Error", ": ").concat(t.message)
            }

            function Pt() {
                var t, e = new Error;
                if (!e.stack) try {
                    throw e
                } catch (n) {}
                return d((function() {
                    var n = vt(e);
                    n.stack = n.stack.slice(2), t = Nt(n)
                })), t
            }

            function Mt(t) {
                return !!Et && Et.has(t)
            }

            function Dt() {
                return Et || new Set
            }

            function Ut(t) {
                return qt(t, L(window.location)).href
            }

            function Bt(t) {
                return L(qt(t))
            }

            function qt(t, e) {
                if (function() {
                        if (void 0 !== kt) return kt;
                        try {
                            var t = new URL("http://test/path");
                            return kt = "http://test/path" === t.href
                        } catch (e) {
                            kt = !1
                        }
                        return kt
                    }()) return void 0 !== e ? new URL(t, e) : new URL(t);
                if (void 0 === e && !/:/.test(t)) throw new Error("Invalid URL: '".concat(t, "'"));
                var n = document,
                    r = n.createElement("a");
                if (void 0 !== e) {
                    var i = (n = document.implementation.createHTMLDocument("")).createElement("base");
                    i.href = e, n.head.appendChild(i), n.body.appendChild(r)
                }
                return r.href = t, r
            }
            var jt = "datadoghq.com",
                Ft = {
                    logs: "logs",
                    rum: "rum",
                    sessionReplay: "session-replay"
                },
                Vt = {
                    logs: "logs",
                    rum: "rum",
                    sessionReplay: "replay"
                };

            function Ht(t, e, n) {
                var r = t.site,
                    i = void 0 === r ? jt : r,
                    o = t.clientToken,
                    a = i.split("."),
                    u = a.pop(),
                    s = "".concat(Ft[e], ".browser-intake-").concat(a.join("-"), ".").concat(u),
                    c = "https://".concat(s, "/api/v2/").concat(Vt[e]),
                    f = t.proxyUrl && Ut(t.proxyUrl);
                return {
                    build: function() {
                        var t = "ddsource=browser" + "&ddtags=".concat(encodeURIComponent(["sdk_version:".concat("4.19.0")].concat(n).join(","))) + "&dd-api-key=".concat(o) + "&dd-evp-origin-version=".concat(encodeURIComponent("4.19.0")) + "&dd-evp-origin=browser" + "&dd-request-id=".concat(g());
                        "rum" === e && (t += "&batch_time=".concat(Q()));
                        var r = "".concat(c, "?").concat(t);
                        return f ? "".concat(f, "?ddforward=").concat(encodeURIComponent(r)) : r
                    },
                    buildIntakeUrl: function() {
                        return f ? "".concat(f, "?ddforward") : c
                    },
                    endpointType: e
                }
            }
            var zt = /[^a-z0-9_:./-]/;

            function Gt(t, e) {
                var n = 200 - t.length - 1;
                (e.length > n || zt.test(e)) && i.warn("".concat(t, " value doesn't meet tag requirements and will be sanitized"));
                var r = e.replace(/,/g, "_");
                return "".concat(t, ":").concat(r)
            }

            function Xt(t) {
                var e = function(t) {
                        var e = t.env,
                            n = t.service,
                            r = t.version,
                            i = t.datacenter,
                            o = [];
                        return e && o.push(Gt("env", e)), n && o.push(Gt("service", n)), r && o.push(Gt("version", r)), i && o.push(Gt("datacenter", i)), o
                    }(t),
                    n = function(t, e) {
                        return {
                            logsEndpointBuilder: Ht(t, "logs", e),
                            rumEndpointBuilder: Ht(t, "rum", e),
                            sessionReplayEndpointBuilder: Ht(t, "sessionReplay", e)
                        }
                    }(t, e),
                    r = O(n).map((function(t) {
                        return t.buildIntakeUrl()
                    })),
                    i = function(t, e, n) {
                        if (!t.replica) return;
                        var r = h({}, t, {
                                site: jt,
                                clientToken: t.replica.clientToken
                            }),
                            i = {
                                logsEndpointBuilder: Ht(r, "logs", n),
                                rumEndpointBuilder: Ht(r, "rum", n)
                            };
                        return e.push.apply(e, O(i).map((function(t) {
                            return t.buildIntakeUrl()
                        }))), h({
                            applicationId: t.replica.applicationId
                        }, i)
                    }(t, r, e);
                return h({
                    isIntakeUrl: function(t) {
                        return r.some((function(e) {
                            return 0 === t.indexOf(e)
                        }))
                    },
                    replica: i,
                    site: t.site || jt
                }, n)
            }
            var Wt = {
                ALLOW: "allow",
                MASK: "mask",
                MASK_USER_INPUT: "mask-user-input"
            };

            function Yt(t) {
                var e, n;
                if (t && t.clientToken)
                    if (void 0 === t.sampleRate || _(t.sampleRate)) {
                        var r;
                        if (void 0 === t.telemetrySampleRate || _(t.telemetrySampleRate)) return r = t.enableExperimentalFeatures, Array.isArray(r) && (Et || (Et = new Set(r)), r.filter((function(t) {
                            return "string" === typeof t
                        })).forEach((function(t) {
                            E(t, "-") && i.warn("please use snake case for '".concat(t, "'")), Et.add(t)
                        }))), h({
                            beforeSend: t.beforeSend && o(t.beforeSend, "beforeSend threw an error:"),
                            cookieOptions: Kt(t),
                            sampleRate: null !== (e = t.sampleRate) && void 0 !== e ? e : 100,
                            telemetrySampleRate: null !== (n = t.telemetrySampleRate) && void 0 !== n ? n : 20,
                            service: t.service,
                            silentMultipleInit: !!t.silentMultipleInit,
                            batchBytesLimit: 16384,
                            eventRateLimiterThreshold: 3e3,
                            maxTelemetryEventsPerPage: 15,
                            flushTimeout: 3e4,
                            batchMessagesLimit: 50,
                            messageBytesLimit: 262144
                        }, Xt(t));
                        i.error("Telemetry Sample Rate should be a number between 0 and 100")
                    } else i.error("Sample Rate should be a number between 0 and 100");
                else i.error("Client Token is not configured, we will not send any data.")
            }

            function Kt(t) {
                var e = {};
                return e.secure = function(t) {
                    return !!t.useSecureSessionCookie || !!t.useCrossSiteSessionCookie
                }(t), e.crossSite = !!t.useCrossSiteSessionCookie, t.trackSessionAcrossSubdomains && (e.domain = function() {
                    if (void 0 === at) {
                        for (var t = "dd_site_test_".concat(g()), e = window.location.hostname.split("."), n = e.pop(); e.length && !st(t);) n = "".concat(e.pop(), ".").concat(n), ut(t, "test", p, {
                            domain: n
                        });
                        ct(t, {
                            domain: n
                        }), at = n
                    }
                    return at
                }()), e
            }
            var Jt = function() {
                function t(t) {
                    this.onFirstSubscribe = t, this.observers = []
                }
                return t.prototype.subscribe = function(t) {
                    var e = this;
                    return !this.observers.length && this.onFirstSubscribe && (this.onLastUnsubscribe = this.onFirstSubscribe() || void 0), this.observers.push(t), {
                        unsubscribe: function() {
                            e.observers = e.observers.filter((function(e) {
                                return t !== e
                            })), !e.observers.length && e.onLastUnsubscribe && e.onLastUnsubscribe()
                        }
                    }
                }, t.prototype.notify = function(t) {
                    this.observers.forEach((function(e) {
                        return e(t)
                    }))
                }, t
            }();

            function $t() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                var n = new Jt((function() {
                    var e = t.map((function(t) {
                        return t.subscribe((function(t) {
                            return n.notify(t)
                        }))
                    }));
                    return function() {
                        return e.forEach((function(t) {
                            return t.unsubscribe()
                        }))
                    }
                }));
                return n
            }
            var Zt, Qt = ["https://www.datadoghq-browser-agent.com", "https://www.datad0g-browser-agent.com", "http://localhost", "<anonymous>"],
                te = ["ddog-gov.com"],
                ee = {
                    maxEventsPerPage: 0,
                    sentEventCount: 0,
                    telemetryEnabled: !1
                };

            function ne(t) {
                var e, n = new Jt;
                return ee.telemetryEnabled = b(t.telemetrySampleRate), Zt = function(r) {
                    !E(te, t.site) && ee.telemetryEnabled && n.notify(function(t) {
                        return H({
                            type: "telemetry",
                            date: Q(),
                            service: "browser-sdk",
                            version: "4.19.0",
                            source: "browser",
                            _dd: {
                                format_version: 2
                            },
                            telemetry: t,
                            experimental_features: k(Dt())
                        }, void 0 !== e ? e() : {})
                    }(r))
                }, a = ie, h(ee, {
                    maxEventsPerPage: t.maxTelemetryEventsPerPage,
                    sentEventCount: 0
                }), {
                    setContextProvider: function(t) {
                        e = t
                    },
                    observable: n
                }
            }

            function re(t, e) {
                l(r.debug, t, e), oe(h({
                    message: t,
                    status: "debug"
                }, e))
            }

            function ie(t) {
                oe(h({
                    status: "error"
                }, function(t) {
                    if (t instanceof Error) {
                        var e = vt(t);
                        return {
                            error: {
                                kind: e.name,
                                stack: Nt(ae(e))
                            },
                            message: e.message
                        }
                    }
                    return {
                        error: {
                            stack: "Not an instance of error"
                        },
                        message: "Uncaught ".concat(T(t))
                    }
                }(t)))
            }

            function oe(t) {
                Zt && ee.sentEventCount < ee.maxEventsPerPage && (ee.sentEventCount += 1, Zt(t))
            }

            function ae(t) {
                return t.stack = t.stack.filter((function(t) {
                    return !t.url || Qt.some((function(e) {
                        return n = t.url, r = e, n.slice(0, r.length) === r;
                        var n, r
                    }))
                })), t
            }

            function ue() {
                var t, e = window;
                if (e.Zone) {
                    var n = e.Zone.__symbol__;
                    if (!(t = e[n("MutationObserver")]) && e.MutationObserver) {
                        var r = new e.MutationObserver(S)[n("originalInstance")];
                        t = r && r.constructor
                    }
                }
                return t || (t = e.MutationObserver), t
            }
            var se = "initial_document",
                ce = [
                    ["document", function(t) {
                        return se === t
                    }],
                    ["xhr", function(t) {
                        return "xmlhttprequest" === t
                    }],
                    ["fetch", function(t) {
                        return "fetch" === t
                    }],
                    ["beacon", function(t) {
                        return "beacon" === t
                    }],
                    ["css", function(t, e) {
                        return /\.css$/i.test(e)
                    }],
                    ["js", function(t, e) {
                        return /\.js$/i.test(e)
                    }],
                    ["image", function(t, e) {
                        return E(["image", "img", "icon"], t) || null !== /\.(gif|jpg|jpeg|tiff|png|svg|ico)$/i.exec(e)
                    }],
                    ["font", function(t, e) {
                        return null !== /\.(woff|eot|woff2|ttf)$/i.exec(e)
                    }],
                    ["media", function(t, e) {
                        return E(["audio", "video"], t) || null !== /\.(mp3|mp4)$/i.exec(e)
                    }]
                ];

            function fe(t) {
                var e = t.name;
                if (! function(t) {
                        try {
                            return !!qt(t)
                        } catch (o) {
                            return !1
                        }
                    }(e)) return re('Failed to construct URL for "'.concat(t.name, '"')), "other";
                for (var n = function(t) {
                        var e = qt(t).pathname;
                        return "/" === e[0] ? e : "/".concat(e)
                    }(e), r = 0, i = ce; r < i.length; r++) {
                    var o = i[r],
                        a = o[0];
                    if ((0, o[1])(t.initiatorType, n)) return a
                }
                return "other"
            }

            function de() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                for (var n = 1; n < t.length; n += 1)
                    if (t[n - 1] > t[n]) return !1;
                return !0
            }

            function le(t) {
                var e = t.duration,
                    n = t.startTime,
                    r = t.responseEnd;
                return $(0 === e && n < r ? rt(n, r) : e)
            }

            function pe(t) {
                var e = ve(t);
                if (e) {
                    var n = e.startTime,
                        r = e.fetchStart,
                        i = e.redirectStart,
                        o = e.redirectEnd,
                        a = e.domainLookupStart,
                        u = e.domainLookupEnd,
                        s = e.connectStart,
                        c = e.secureConnectionStart,
                        f = e.connectEnd,
                        d = e.requestStart,
                        l = e.responseStart,
                        p = {
                            download: he(n, l, e.responseEnd),
                            first_byte: he(n, d, l)
                        };
                    return f !== r && (p.connect = he(n, s, f), de(s, c, f) && (p.ssl = he(n, c, f))), u !== r && (p.dns = he(n, a, u)), me(t) && (p.redirect = he(n, i, o)), p
                }
            }

            function ve(t) {
                if (de(t.startTime, t.fetchStart, t.domainLookupStart, t.domainLookupEnd, t.connectStart, t.connectEnd, t.requestStart, t.responseStart, t.responseEnd)) {
                    if (!me(t)) return t;
                    var e = t.redirectStart,
                        n = t.redirectEnd;
                    if (e < t.startTime && (e = t.startTime), n < t.startTime && (n = t.fetchStart), de(t.startTime, e, n, t.fetchStart)) return h({}, t, {
                        redirectEnd: n,
                        redirectStart: e
                    })
                }
            }

            function me(t) {
                return t.fetchStart !== t.startTime
            }

            function he(t, e, n) {
                return {
                    duration: $(rt(e, n)),
                    start: $(rt(t, e))
                }
            }

            function ye(t) {
                if (t.startTime < t.responseStart) return t.decodedBodySize
            }

            function ge(t, e) {
                return e && !t.isIntakeUrl(e)
            }
            var be, we;

            function Se(t) {
                var e = function(t) {
                    var e = t.querySelector("meta[name=dd-trace-id]"),
                        n = t.querySelector("meta[name=dd-trace-time]");
                    return Te(e && e.content, n && n.content)
                }(t) || function(t) {
                    var e = function(t) {
                        for (var e = 0; e < t.childNodes.length; e += 1) {
                            if (n = Ce(t.childNodes[e])) return n
                        }
                        if (t.body)
                            for (e = t.body.childNodes.length - 1; e >= 0; e -= 1) {
                                var n, r = t.body.childNodes[e];
                                if (n = Ce(r)) return n;
                                if (!Ee(r)) break
                            }
                    }(t);
                    if (!e) return;
                    return Te(P(e, "trace-id"), P(e, "trace-time"))
                }(t);
                if (e && !(e.traceTime <= Z() - 12e4)) return e.traceId
            }

            function Te(t, e) {
                var n = e && Number(e);
                if (t && n) return {
                    traceId: t,
                    traceTime: n
                }
            }

            function Ce(t) {
                if (t && function(t) {
                        return "#comment" === t.nodeName
                    }(t)) {
                    var e = /^\s*DATADOG;(.*?)\s*$/.exec(t.data);
                    if (e) return e[1]
                }
            }

            function Ee(t) {
                return "#text" === t.nodeName
            }

            function ke() {
                return void 0 !== window.performance && "getEntries" in performance
            }

            function xe(t) {
                return window.PerformanceObserver && void 0 !== PerformanceObserver.supportedEntryTypes && PerformanceObserver.supportedEntryTypes.includes(t)
            }

            function _e(t, e) {
                var n;
                if (n = function(n) {
                        Oe(t, e, [n])
                    }, q("interactive", (function() {
                        var t, e = {
                            entryType: "resource",
                            initiatorType: se,
                            traceId: Se(document)
                        };
                        if (xe("navigation") && performance.getEntriesByType("navigation").length > 0) t = h(performance.getEntriesByType("navigation")[0].toJSON(), e);
                        else {
                            var r = Ie();
                            t = h(r, {
                                decodedBodySize: 0,
                                duration: r.responseEnd,
                                name: window.location.href,
                                startTime: 0
                            }, e)
                        }
                        n(t)
                    })), ke()) {
                    var r = performance.getEntries();
                    setTimeout(f((function() {
                        return Oe(t, e, r)
                    })))
                }
                if (window.PerformanceObserver) {
                    var i = f((function(n) {
                            return Oe(t, e, n.getEntries())
                        })),
                        o = ["resource", "navigation", "longtask", "paint"],
                        a = ["largest-contentful-paint", "first-input", "layout-shift"];
                    try {
                        a.forEach((function(t) {
                            new PerformanceObserver(i).observe({
                                type: t,
                                buffered: !0
                            })
                        }))
                    } catch (u) {
                        o.push.apply(o, a)
                    }
                    new PerformanceObserver(i).observe({
                        entryTypes: o
                    }), ke() && "addEventListener" in performance && performance.addEventListener("resourcetimingbufferfull", (function() {
                        performance.clearResourceTimings()
                    }))
                }
                xe("navigation") || function(t) {
                    function e() {
                        t(h(Ie(), {
                            entryType: "navigation"
                        }))
                    }
                    q("complete", (function() {
                        setTimeout(f(e))
                    }))
                }((function(n) {
                    Oe(t, e, [n])
                })), xe("first-input") || function(t) {
                    var e = Z(),
                        n = !1,
                        r = U(window, ["click", "mousedown", "keydown", "touchstart", "pointerdown"], (function(t) {
                            if (t.cancelable) {
                                var e = {
                                    entryType: "first-input",
                                    processingStart: tt(),
                                    startTime: t.timeStamp
                                };
                                "pointerdown" === t.type ? i(e) : o(e)
                            }
                        }), {
                            passive: !0,
                            capture: !0
                        }).stop;

                    function i(t) {
                        U(window, ["pointerup", "pointercancel"], (function(e) {
                            "pointerup" === e.type && o(t)
                        }), {
                            once: !0
                        })
                    }

                    function o(i) {
                        if (!n) {
                            n = !0, r();
                            var o = i.processingStart - i.startTime;
                            o >= 0 && o < Z() - e && t(i)
                        }
                    }
                }((function(n) {
                    Oe(t, e, [n])
                }))
            }

            function Ie() {
                var t = {},
                    e = performance.timing;
                for (var n in e)
                    if (I(e[n])) {
                        var r = n,
                            i = e[r];
                        t[r] = 0 === i ? 0 : it(i)
                    }
                return t
            }

            function Oe(t, e, n) {
                var r = n.filter((function(t) {
                    return "resource" === t.entryType || "navigation" === t.entryType || "paint" === t.entryType || "longtask" === t.entryType || "largest-contentful-paint" === t.entryType || "first-input" === t.entryType || "layout-shift" === t.entryType
                })).filter((function(t) {
                    return ! function(t) {
                        return "navigation" === t.entryType && t.loadEventEnd <= 0
                    }(t) && ! function(t, e) {
                        return "resource" === e.entryType && !ge(t, e.name)
                    }(e, t)
                }));
                r.length && t.notify(0, r)
            }

            function Ae(t, e, n) {
                var r = 0,
                    i = !1;
                return {
                    isLimitReached: function() {
                        if (0 === r && setTimeout((function() {
                                r = 0
                            }), v), (r += 1) <= e || i) return i = !1, !1;
                        if (r === e + 1) {
                            i = !0;
                            try {
                                n({
                                    message: "Reached max number of ".concat(t, "s by minute: ").concat(e),
                                    source: xt,
                                    startClocks: et()
                                })
                            } finally {
                                i = !1
                            }
                        }
                        return !0
                    }
                }
            }

            function Re(t, e) {
                for (var n = t, r = 0, i = e.split("."); r < i.length; r++) {
                    var o = i[r];
                    if (!Le(n, o)) return;
                    n = n[o]
                }
                return n
            }

            function Ne(t, e, n) {
                for (var r = t, i = e.split("."), o = 0; o < i.length; o += 1) {
                    var a = i[o];
                    if (!Le(r, a)) return;
                    o !== i.length - 1 ? r = r[a] : r[a] = n
                }
            }

            function Le(t, e) {
                return "object" === typeof t && null !== t && Object.prototype.hasOwnProperty.call(t, e)
            }

            function Pe() {
                var t = function() {
                        var t = window._DATADOG_SYNTHETICS_PUBLIC_ID || st("datadog-synthetics-public-id");
                        return "string" === typeof t ? t : void 0
                    }(),
                    e = function() {
                        var t = window._DATADOG_SYNTHETICS_RESULT_ID || st("datadog-synthetics-result-id");
                        return "string" === typeof t ? t : void 0
                    }();
                if (t && e) return {
                    test_id: t,
                    result_id: e,
                    injected: ft()
                }
            }

            function Me() {
                return be || (be = function() {
                    var t = new Jt((function() {
                        var e = m(f((function() {
                            t.notify(De())
                        })), 200).throttled;
                        return D(window, "resize", e, {
                            capture: !0,
                            passive: !0
                        }).stop
                    }));
                    return t
                }()), be
            }

            function De() {
                var t = window.visualViewport;
                return t ? {
                    width: Number(t.width * t.scale),
                    height: Number(t.height * t.scale)
                } : {
                    width: Number(window.innerWidth || 0),
                    height: Number(window.innerHeight || 0)
                }
            }

            function Ue() {
                if (Mt("clickmap")) return we || (we = De(), Me().subscribe((function(t) {
                    we = t
                })).unsubscribe), {
                    viewport: we
                }
            }
            var Be = ["view.url", "view.referrer", "action.target.name", "error.message", "error.stack", "error.resource.url", "resource.url"],
                qe = Be.concat(["context"]);

            function je(t, e, n, r, o, a, u, s) {
                var c, f = ((c = {}).error = Ae("error", t.eventRateLimiterThreshold, s), c.action = Ae("action", t.eventRateLimiterThreshold, s), c),
                    d = Pe(),
                    l = function() {
                        var t, e = null === (t = window.Cypress) || void 0 === t ? void 0 : t.env("traceId");
                        if ("string" === typeof e) return {
                            test_execution_id: e
                        }
                    }();
                e.subscribe(10, (function(s) {
                    var c, p = s.startTime,
                        v = s.rawRumEvent,
                        m = s.domainContext,
                        h = s.savedCommonContext,
                        y = s.customerContext,
                        g = r.findView(p),
                        b = o.findUrl(p),
                        w = n.findTrackedSession("view" !== v.type ? p : void 0);
                    if (w && g && b) {
                        var S = h || u(),
                            T = a.findActionId(p),
                            C = H({
                                _dd: {
                                    format_version: 2,
                                    drift: Math.round(Z() - (ot() + performance.now())),
                                    session: {
                                        plan: w.hasPremiumPlan ? 2 : 1
                                    },
                                    browser_sdk_version: lt() ? "4.19.0" : void 0
                                },
                                application: {
                                    id: t.applicationId
                                },
                                date: Q(),
                                service: g.service || t.service,
                                version: g.version || t.version,
                                source: "browser",
                                session: {
                                    id: w.id,
                                    type: d ? "synthetics" : l ? "ci_test" : "user"
                                },
                                view: {
                                    id: g.id,
                                    name: g.name,
                                    url: b.url,
                                    referrer: b.referrer
                                },
                                action: (c = v, -1 !== ["error", "resource", "long_task"].indexOf(c.type) && T ? {
                                    id: T
                                } : void 0),
                                synthetics: d,
                                ci_test: l,
                                display: Ue()
                            }, v);
                        C.context = H(S.context, y), "has_replay" in C.session || (C.session.has_replay = S.hasReplay), R(S.user) || (C.usr = S.user),
                            function(t, e, n, r) {
                                var o;
                                if (e) {
                                    var a = function(t, e, n) {
                                        var r = V(t),
                                            i = n(r);
                                        return e.forEach((function(e) {
                                            var n = Re(t, e),
                                                i = Re(r, e),
                                                o = j(n),
                                                a = j(i);
                                            a === o ? Ne(t, e, i) : "object" !== o || "undefined" !== a && "null" !== a || Ne(t, e, {})
                                        })), i
                                    }(t, "view" === t.type ? Be : qe, (function(t) {
                                        return e(t, n)
                                    }));
                                    if (!1 === a && "view" !== t.type) return !1;
                                    !1 === a && i.warn("Can't dismiss view events using beforeSend!")
                                }
                                return !(null === (o = r[t.type]) || void 0 === o ? void 0 : o.isLimitReached())
                            }(C, t.beforeSend, m, f) && (R(C.context) && delete C.context, e.notify(11, C))
                    }
                }))
            }
            var Fe = [];

            function Ve() {
                document.hasFocus() && He();
                var t, e, n = (t = He, D(window, "focus", (function(e) {
                        e.isTrusted && t()
                    }))).stop,
                    r = (e = ze, D(window, "blur", (function(t) {
                        t.isTrusted && e()
                    }))).stop;
                return {
                    isInForegroundAt: Ge,
                    selectInForegroundPeriodsFor: Xe,
                    stop: function() {
                        Fe = [], n(), r()
                    }
                }
            }

            function He() {
                if (!(Fe.length > 2500)) {
                    var t = Fe[Fe.length - 1],
                        e = tt();
                    void 0 !== t && void 0 === t.end || Fe.push({
                        start: e
                    })
                }
            }

            function ze() {
                if (0 !== Fe.length) {
                    var t = Fe[Fe.length - 1],
                        e = tt();
                    void 0 === t.end && (t.end = e)
                }
            }

            function Ge(t) {
                for (var e = Fe.length - 1; e >= 0; e--) {
                    var n = Fe[e];
                    if (void 0 !== n.end && t > n.end) break;
                    if (t > n.start && (void 0 === n.end || t < n.end)) return !0
                }
                return !1
            }

            function Xe(t, e) {
                for (var n = t + e, r = [], i = Math.max(0, Fe.length - 500), o = Fe.length - 1; o >= i; o--) {
                    var a = Fe[o];
                    if (void 0 !== a.end && t > a.end) break;
                    if (!(n < a.start)) {
                        var u = t > a.start ? t : a.start,
                            s = rt(t, u),
                            c = rt(u, void 0 === a.end || n < a.end ? n : a.end);
                        r.unshift({
                            start: $(s),
                            duration: $(c)
                        })
                    }
                }
                return r
            }
            var We, Ye = function() {
                    function t() {
                        this.callbacks = {}
                    }
                    return t.prototype.notify = function(t, e) {
                        var n = this.callbacks[t];
                        n && n.forEach((function(t) {
                            return t(e)
                        }))
                    }, t.prototype.subscribe = function(t, e) {
                        var n = this;
                        return this.callbacks[t] || (this.callbacks[t] = []), this.callbacks[t].push(e), {
                            unsubscribe: function() {
                                n.callbacks[t] = n.callbacks[t].filter((function(t) {
                                    return e !== t
                                }))
                            }
                        }
                    }, t
                }(),
                Ke = 144e5,
                Je = 9e5,
                $e = 1 / 0,
                Ze = function() {
                    function t(t) {
                        var e = this;
                        this.expireDelay = t, this.entries = [], this.clearOldContextsInterval = setInterval((function() {
                            return e.clearOldContexts()
                        }), 6e4)
                    }
                    return t.prototype.add = function(t, e) {
                        var n = this,
                            r = {
                                context: t,
                                startTime: e,
                                endTime: $e,
                                remove: function() {
                                    var t = n.entries.indexOf(r);
                                    t >= 0 && n.entries.splice(t, 1)
                                },
                                close: function(t) {
                                    r.endTime = t
                                }
                            };
                        return this.entries.unshift(r), r
                    }, t.prototype.find = function(t) {
                        void 0 === t && (t = $e);
                        for (var e = 0, n = this.entries; e < n.length; e++) {
                            var r = n[e];
                            if (r.startTime <= t) {
                                if (t <= r.endTime) return r.context;
                                break
                            }
                        }
                    }, t.prototype.closeActive = function(t) {
                        var e = this.entries[0];
                        e && e.endTime === $e && e.close(t)
                    }, t.prototype.findAll = function(t) {
                        return void 0 === t && (t = $e), this.entries.filter((function(e) {
                            return e.startTime <= t && t <= e.endTime
                        })).map((function(t) {
                            return t.context
                        }))
                    }, t.prototype.reset = function() {
                        this.entries = []
                    }, t.prototype.stop = function() {
                        clearInterval(this.clearOldContextsInterval)
                    }, t.prototype.clearOldContexts = function() {
                        for (var t = tt() - this.expireDelay; this.entries.length > 0 && this.entries[this.entries.length - 1].endTime < t;) this.entries.pop()
                    }, t
                }();

            function Qe(t, e, n) {
                var r = t[e],
                    i = n(r),
                    o = function() {
                        if ("function" === typeof i) return i.apply(this, arguments)
                    };
                return t[e] = o, {
                    stop: function() {
                        t[e] === o ? t[e] = r : i = r
                    }
                }
            }

            function tn(t, e, n) {
                var r = n.before,
                    i = n.after;
                return Qe(t, e, (function(t) {
                    return function() {
                        var e, n = arguments;
                        return r && d(r, this, n), "function" === typeof t && (e = t.apply(this, n)), i && d(i, this, n), e
                    }
                }))
            }

            function en(t, e, n) {
                var r = Object.getOwnPropertyDescriptor(t, e);
                if (!r || !r.set || !r.configurable) return {
                    stop: S
                };
                var i = function(t, e) {
                        setTimeout(f((function() {
                            n(t, e)
                        })), 0)
                    },
                    o = function(t) {
                        r.set.call(this, t), i(this, t)
                    };
                return Object.defineProperty(t, e, {
                    set: o
                }), {
                    stop: function() {
                        var n;
                        (null === (n = Object.getOwnPropertyDescriptor(t, e)) || void 0 === n ? void 0 : n.set) === o ? Object.defineProperty(t, e, r) : i = S
                    }
                }
            }
            var nn, rn = new WeakMap;

            function on() {
                return We || (We = function() {
                    var t = new Jt((function() {
                        var e = tn(XMLHttpRequest.prototype, "open", {
                                before: an
                            }).stop,
                            n = tn(XMLHttpRequest.prototype, "send", {
                                before: function() {
                                    un.call(this, t)
                                }
                            }).stop,
                            r = tn(XMLHttpRequest.prototype, "abort", {
                                before: sn
                            }).stop;
                        return function() {
                            e(), n(), r()
                        }
                    }));
                    return t
                }()), We
            }

            function an(t, e) {
                rn.set(this, {
                    state: "open",
                    method: t,
                    url: Ut(String(e))
                })
            }

            function un(t) {
                var e = this,
                    n = rn.get(this);
                if (n) {
                    var r = n;
                    r.state = "start", r.startTime = tt(), r.startClocks = et(), r.isAborted = !1, r.xhr = this;
                    var i = !1,
                        o = tn(this, "onreadystatechange", {
                            before: function() {
                                this.readyState === XMLHttpRequest.DONE && a()
                            }
                        }).stop,
                        a = f((function() {
                            if (e.removeEventListener("loadend", a), o(), !i) {
                                i = !0;
                                var u = n;
                                u.state = "complete", u.duration = rt(r.startClocks.timeStamp, Q()), u.status = e.status, t.notify(y(u))
                            }
                        }));
                    this.addEventListener("loadend", a), t.notify(r)
                }
            }

            function sn() {
                var t = rn.get(this);
                t && (t.isAborted = !0)
            }

            function cn() {
                return nn || (nn = function() {
                    var t = new Jt((function() {
                        if (window.fetch) return Qe(window, "fetch", (function(e) {
                            return function(n, r) {
                                var i, o = d(fn, null, [t, n, r]);
                                return o ? (i = e.call(this, o.input, o.init), d(dn, null, [t, i, o])) : i = e.call(this, n, r), i
                            }
                        })).stop
                    }));
                    return t
                }()), nn
            }

            function fn(t, e, n) {
                var r = n && n.method || "object" === typeof e && e.method || "GET",
                    i = Ut("object" === typeof e && e.url || e),
                    o = {
                        state: "start",
                        init: n,
                        input: e,
                        method: r,
                        startClocks: et(),
                        url: i
                    };
                return t.notify(o), o
            }

            function dn(t, e, n) {
                var r = function(e) {
                    var r = n;
                    r.state = "complete", r.duration = rt(r.startClocks.timeStamp, Q()), "stack" in e || e instanceof Error ? (r.status = 0, r.isAborted = e instanceof DOMException && e.code === DOMException.ABORT_ERR, r.error = e, t.notify(r)) : "status" in e && (r.response = e, r.responseType = e.type, r.status = e.status, r.isAborted = !1, t.notify(r))
                };
                e.then(f(r), f(r))
            }

            function ln(t) {
                0 !== t.status || t.isAborted || (t.traceId = void 0, t.spanId = void 0, t.traceSampled = void 0)
            }

            function pn(t, e, n, r) {
                var i, o, a;
                void 0 !== vn() && function(t, e) {
                    return z(t.allowedTracingOrigins, Bt(e))
                }(t, e.url) && n.findTrackedSession() && (e.traceId = new mn, e.spanId = new mn, e.traceSampled = !I(t.tracingSampleRate) || b(t.tracingSampleRate), r((i = e.traceId, o = e.spanId, a = e.traceSampled, {
                    "x-datadog-origin": "rum",
                    "x-datadog-parent-id": o.toDecimalString(),
                    "x-datadog-sampling-priority": a ? "1" : "0",
                    "x-datadog-trace-id": i.toDecimalString()
                })))
            }

            function vn() {
                return window.crypto || window.msCrypto
            }
            var mn = function() {
                    function t() {
                        this.buffer = new Uint8Array(8), vn().getRandomValues(this.buffer), this.buffer[0] = 127 & this.buffer[0]
                    }
                    return t.prototype.toString = function(t) {
                        var e = this.readInt32(0),
                            n = this.readInt32(4),
                            r = "";
                        do {
                            var i = e % t * 4294967296 + n;
                            e = Math.floor(e / t), n = Math.floor(i / t), r = (i % t).toString(t) + r
                        } while (e || n);
                        return r
                    }, t.prototype.toDecimalString = function() {
                        return this.toString(10)
                    }, t.prototype.readInt32 = function(t) {
                        return 16777216 * this.buffer[t] + (this.buffer[t + 1] << 16) + (this.buffer[t + 2] << 8) + this.buffer[t + 3]
                    }, t
                }(),
                hn = 1;

            function yn(t, e, n) {
                var r = function(t, e) {
                    return {
                        clearTracingIfNeeded: ln,
                        traceFetch: function(n) {
                            return pn(t, n, e, (function(t) {
                                var e;
                                if (n.input instanceof Request && !(null === (e = n.init) || void 0 === e ? void 0 : e.headers)) n.input = new Request(n.input), Object.keys(t).forEach((function(e) {
                                    n.input.headers.append(e, t[e])
                                }));
                                else {
                                    n.init = y(n.init);
                                    var r = [];
                                    n.init.headers instanceof Headers ? n.init.headers.forEach((function(t, e) {
                                        r.push([e, t])
                                    })) : Array.isArray(n.init.headers) ? n.init.headers.forEach((function(t) {
                                        r.push(t)
                                    })) : n.init.headers && Object.keys(n.init.headers).forEach((function(t) {
                                        r.push([t, n.init.headers[t]])
                                    })), n.init.headers = r.concat(A(t))
                                }
                            }))
                        },
                        traceXhr: function(n, r) {
                            return pn(t, n, e, (function(t) {
                                Object.keys(t).forEach((function(e) {
                                    r.setRequestHeader(e, t[e])
                                }))
                            }))
                        }
                    }
                }(e, n);
                ! function(t, e, n) {
                    var r = on().subscribe((function(r) {
                        var i = r;
                        if (ge(e, i.url)) switch (i.state) {
                            case "start":
                                n.traceXhr(i, i.xhr), i.requestIndex = gn(), t.notify(5, {
                                    requestIndex: i.requestIndex,
                                    url: i.url
                                });
                                break;
                            case "complete":
                                n.clearTracingIfNeeded(i), t.notify(6, {
                                    duration: i.duration,
                                    method: i.method,
                                    requestIndex: i.requestIndex,
                                    spanId: i.spanId,
                                    startClocks: i.startClocks,
                                    status: i.status,
                                    traceId: i.traceId,
                                    traceSampled: i.traceSampled,
                                    type: "xhr",
                                    url: i.url,
                                    xhr: i.xhr
                                })
                        }
                    }))
                }(t, e, r),
                function(t, e, n) {
                    var r = cn().subscribe((function(r) {
                        var i = r;
                        if (ge(e, i.url)) switch (i.state) {
                            case "start":
                                n.traceFetch(i), i.requestIndex = gn(), t.notify(5, {
                                    requestIndex: i.requestIndex,
                                    url: i.url
                                });
                                break;
                            case "complete":
                                n.clearTracingIfNeeded(i), t.notify(6, {
                                    duration: i.duration,
                                    method: i.method,
                                    requestIndex: i.requestIndex,
                                    responseType: i.responseType,
                                    spanId: i.spanId,
                                    startClocks: i.startClocks,
                                    status: i.status,
                                    traceId: i.traceId,
                                    traceSampled: i.traceSampled,
                                    type: "fetch",
                                    url: i.url,
                                    response: i.response,
                                    init: i.init,
                                    input: i.input
                                })
                        }
                    }))
                }(t, e, r)
            }

            function gn() {
                var t = hn;
                return hn += 1, t
            }

            function bn(t, e) {
                void 0 === e && (e = S);
                var n = {
                        errorCount: 0,
                        longTaskCount: 0,
                        resourceCount: 0,
                        actionCount: 0,
                        frustrationCount: 0
                    },
                    r = t.subscribe(11, (function(t) {
                        switch (t.type) {
                            case "error":
                                n.errorCount += 1, e(n);
                                break;
                            case "action":
                                n.actionCount += 1, t.action.frustration && (n.frustrationCount += t.action.frustration.type.length), e(n);
                                break;
                            case "long_task":
                                n.longTaskCount += 1, e(n);
                                break;
                            case "resource":
                                n.resourceCount += 1, e(n)
                        }
                    }));
                return {
                    stop: function() {
                        r.unsubscribe()
                    },
                    eventCounts: n
                }
            }

            function wn(t, e, n, r, i) {
                return function(t, e, n) {
                    var r, i = !1,
                        o = setTimeout(f((function() {
                            return c({
                                hadActivity: !1
                            })
                        })), 100),
                        a = n && setTimeout(f((function() {
                            return c({
                                hadActivity: !0,
                                end: Q()
                            })
                        })), n),
                        u = t.subscribe((function(t) {
                            var e = t.isBusy;
                            clearTimeout(o), clearTimeout(r);
                            var n = Q();
                            e || (r = setTimeout(f((function() {
                                return c({
                                    hadActivity: !0,
                                    end: n
                                })
                            })), 100))
                        })),
                        s = function() {
                            i = !0, clearTimeout(o), clearTimeout(r), clearTimeout(a), u.unsubscribe()
                        };

                    function c(t) {
                        i || (s(), e(t))
                    }
                    return {
                        stop: s
                    }
                }(function(t, e, n) {
                    var r = new Jt((function() {
                        var i, o = [],
                            a = 0;
                        o.push(e.subscribe(c), t.subscribe(0, (function(t) {
                            t.some((function(t) {
                                return "resource" === t.entryType && !Sn(n, t.name)
                            })) && c()
                        })), t.subscribe(5, (function(t) {
                            Sn(n, t.url) || (void 0 === i && (i = t.requestIndex), a += 1, c())
                        })), t.subscribe(6, (function(t) {
                            Sn(n, t.url) || void 0 === i || t.requestIndex < i || (a -= 1, c())
                        })));
                        var u, s = (u = c, tn(window, "open", {
                            before: u
                        })).stop;
                        return function() {
                            s(), o.forEach((function(t) {
                                return t.unsubscribe()
                            }))
                        };

                        function c() {
                            r.notify({
                                isBusy: a > 0
                            })
                        }
                    }));
                    return r
                }(t, e, n), r, i)
            }

            function Sn(t, e) {
                return z(t.excludedActivityUrls, e)
            }
            var Tn = p;

            function Cn(t, e) {
                var n, r = [],
                    i = 0;

                function o(t) {
                    t.stopObservable.subscribe(a), r.push(t), clearTimeout(n), n = setTimeout(f(u), 1e3)
                }

                function a() {
                    1 === i && r.every((function(t) {
                        return t.isStopped()
                    })) && (i = 2, e(r))
                }

                function u() {
                    clearTimeout(n), 0 === i && (i = 1, a())
                }
                return o(t), {
                    tryAppend: function(t) {
                        return 0 === i && (r.length > 0 && ! function(t, e) {
                            return t.target === e.target && (n = t, r = e, Math.sqrt(Math.pow(n.clientX - r.clientX, 2) + Math.pow(n.clientY - r.clientY, 2)) <= 100) && t.timeStamp - e.timeStamp <= Tn;
                            var n, r
                        }(r[r.length - 1].event, t.event) ? (u(), !1) : (o(t), !0))
                    },
                    stop: function() {
                        u()
                    }
                }
            }
            var En = "data-dd-action-name";

            function kn(t, e) {
                return xn(t, En) || e && xn(t, e) || Rn(t, e, On) || Rn(t, e, An) || ""
            }

            function xn(t, e) {
                var n;
                if (function() {
                        void 0 === In && (In = "closest" in HTMLElement.prototype);
                        return In
                    }()) n = t.closest("[".concat(e, "]"));
                else
                    for (var r = t; r;) {
                        if (r.hasAttribute(e)) {
                            n = r;
                            break
                        }
                        r = r.parentElement
                    }
                if (n) return Ln(Nn(n.getAttribute(e).trim()))
            }
            var _n, In, On = [function(t, e) {
                    if (function() {
                            void 0 === _n && (_n = "labels" in HTMLInputElement.prototype);
                            return _n
                        }()) {
                        if ("labels" in t && t.labels && t.labels.length > 0) return Pn(t.labels[0], e)
                    } else if (t.id) {
                        var n = t.ownerDocument && x(t.ownerDocument.querySelectorAll("label"), (function(e) {
                            return e.htmlFor === t.id
                        }));
                        return n && Pn(n, e)
                    }
                }, function(t) {
                    if ("INPUT" === t.nodeName) {
                        var e = t,
                            n = e.getAttribute("type");
                        if ("button" === n || "submit" === n || "reset" === n) return e.value
                    }
                }, function(t, e) {
                    if ("BUTTON" === t.nodeName || "LABEL" === t.nodeName || "button" === t.getAttribute("role")) return Pn(t, e)
                }, function(t) {
                    return t.getAttribute("aria-label")
                }, function(t, e) {
                    var n = t.getAttribute("aria-labelledby");
                    if (n) return n.split(/\s+/).map((function(e) {
                        return function(t, e) {
                            return t.ownerDocument ? t.ownerDocument.getElementById(e) : null
                        }(t, e)
                    })).filter((function(t) {
                        return Boolean(t)
                    })).map((function(t) {
                        return Pn(t, e)
                    })).join(" ")
                }, function(t) {
                    return t.getAttribute("alt")
                }, function(t) {
                    return t.getAttribute("name")
                }, function(t) {
                    return t.getAttribute("title")
                }, function(t) {
                    return t.getAttribute("placeholder")
                }, function(t, e) {
                    if ("options" in t && t.options.length > 0) return Pn(t.options[0], e)
                }],
                An = [function(t, e) {
                    return Pn(t, e)
                }];

            function Rn(t, e, n) {
                for (var r = t, i = 0; i <= 10 && r && "BODY" !== r.nodeName && "HTML" !== r.nodeName && "HEAD" !== r.nodeName;) {
                    for (var o = 0, a = n; o < a.length; o++) {
                        var u = (0, a[o])(r, e);
                        if ("string" === typeof u) {
                            var s = u.trim();
                            if (s) return Ln(Nn(s))
                        }
                    }
                    if ("FORM" === r.nodeName) break;
                    r = r.parentElement, i += 1
                }
            }

            function Nn(t) {
                return t.replace(/\s+/g, " ")
            }

            function Ln(t) {
                return t.length > 100 ? "".concat(M(t, 100), " [...]") : t
            }

            function Pn(t, e) {
                if (!t.isContentEditable) {
                    if ("innerText" in t) {
                        var n = t.innerText,
                            r = function(e) {
                                for (var r = t.querySelectorAll(e), i = 0; i < r.length; i += 1) {
                                    var o = r[i];
                                    if ("innerText" in o) {
                                        var a = o.innerText;
                                        a && a.trim().length > 0 && (n = n.replace(a, ""))
                                    }
                                }
                            };
                        return Boolean(document.documentMode) && r("script, style"), r("[".concat(En, "]")), e && r("[".concat(e, "]")), n
                    }
                    return t.textContent
                }
            }
            var Mn, Dn = ["data-dd-action-name", "data-testid", "data-test", "data-qa", "data-cy", "data-test-id", "data-qa-id", "data-testing", "data-component", "data-element", "data-source-file"];

            function Un(t, e) {
                var n = function() {
                    Mn || (Mn = Dn.map((function(t) {
                        return function(e) {
                            return Fn(t, e)
                        }
                    })));
                    return Mn
                }();
                return e && (n = [function(t) {
                    return Fn(e, t)
                }].concat(n)), {
                    selector: Bn(t, [qn], [jn]),
                    selector_with_stable_attributes: Bn(t, n.concat(qn), n.concat(jn)),
                    selector_without_classes: Bn(t, n.concat(qn), n)
                }
            }

            function Bn(t, e, n) {
                for (var r = [], i = t; i && "HTML" !== i.nodeName;) {
                    var o = Hn(i, e, zn);
                    if (o) {
                        r.unshift(o);
                        break
                    }
                    var a = Hn(i, n, Gn);
                    a ? r.unshift(a) : r.unshift(Vn(i)), i = i.parentElement
                }
                return r.join(">")
            }

            function qn(t) {
                if (t.id) return "#".concat(G(t.id))
            }

            function jn(t) {
                if (t.classList.length > 0) {
                    var e = k(t.classList).sort();
                    return "".concat(t.tagName).concat(e.map((function(t) {
                        return ".".concat(G(t))
                    })).join(""))
                }
            }

            function Fn(t, e) {
                if (e.hasAttribute(t)) return "".concat(e.tagName, "[").concat(t, '="').concat(G(e.getAttribute(t)), '"]')
            }

            function Vn(t) {
                for (var e, n = t.parentElement.firstElementChild, r = 0; n && !(n.tagName === t.tagName && (r += 1, n === t && (e = r), void 0 !== e && r > 1));) n = n.nextElementSibling;
                return 1 === r ? t.tagName : "".concat(t.tagName, ":nth-of-type(").concat(e, ")")
            }

            function Hn(t, e, n) {
                for (var r = 0, i = e; r < i.length; r++) {
                    var o = (0, i[r])(t);
                    if (o && n(t, o)) return o
                }
            }

            function zn(t, e) {
                return 1 === t.ownerDocument.body.querySelectorAll(e).length
            }

            function Gn(t, e) {
                for (var n = 0; n < t.parentElement.children.length; n++) {
                    var r = t.parentElement.children[n];
                    if (r !== t && B(r, e)) return !1
                }
                return !0
            }

            function Xn() {
                var t = window.getSelection();
                return !t || t.isCollapsed
            }

            function Wn(t, e) {
                if (function(t) {
                        if (t.some((function(t) {
                                return t.getUserActivity().selection
                            }))) return !1;
                        for (var e = 0; e < t.length - 2; e += 1)
                            if (t[e + 3 - 1].event.timeStamp - t[e].event.timeStamp <= p) return !0;
                        return !1
                    }(t)) return e.addFrustration("rage_click"), t.some(Yn) && e.addFrustration("dead_click"), e.hasError && e.addFrustration("error_click"), {
                    isRage: !0
                };
                var n = t.some((function(t) {
                    return t.getUserActivity().selection
                }));
                return t.forEach((function(t) {
                    t.hasError && t.addFrustration("error_click"), Yn(t) && !n && t.addFrustration("dead_click")
                })), {
                    isRage: !1
                }
            }

            function Yn(t) {
                return !t.hasPageActivity && !t.getUserActivity().input && !B(t.event.target, 'input:not([type="checkbox"]):not([type="radio"]):not([type="button"]):not([type="submit"]):not([type="reset"]):not([type="range"]),textarea,select,canvas,a[href],a[href] *')
            }

            function Kn(t, e, n) {
                var r, i = new Ze(3e5),
                    o = new Jt,
                    a = n.trackFrustrations;
                t.subscribe(8, (function() {
                    i.reset()
                })), t.subscribe(9, s), t.subscribe(4, s);
                var u = function(t) {
                    var e, n = t.onClick,
                        r = !1,
                        i = !1,
                        o = [D(window, "mousedown", (function() {
                            r = !1, e = Xn()
                        }), {
                            capture: !0
                        }), D(window, "selectionchange", (function() {
                            e && Xn() || (r = !0)
                        }), {
                            capture: !0
                        }), D(window, "click", (function(t) {
                            if (t.target instanceof Element) {
                                var e = {
                                    selection: r,
                                    input: i
                                };
                                i || setTimeout(f((function() {
                                    e.input = i
                                }))), n({
                                    event: t,
                                    getUserActivity: function() {
                                        return e
                                    }
                                })
                            }
                        }), {
                            capture: !0
                        }), D(window, "input", (function() {
                            i = !0
                        }), {
                            capture: !0
                        })];
                    return {
                        stop: function() {
                            o.forEach((function(t) {
                                return t.stop()
                            }))
                        }
                    }
                }({
                    onClick: function(u) {
                        var s = u.event,
                            c = u.getUserActivity;
                        if (!a && i.find()) return;
                        var f = function(t, e) {
                            var n, r;
                            if (Mt("clickmap")) {
                                var i = t.target.getBoundingClientRect();
                                n = h({
                                    width: Math.round(i.width),
                                    height: Math.round(i.height)
                                }, Un(t.target, e)), r = {
                                    x: Math.round(t.clientX - i.left),
                                    y: Math.round(t.clientY - i.top)
                                }
                            }
                            return {
                                type: "click",
                                target: n,
                                position: r,
                                name: kn(t.target, e),
                                event: t,
                                startClocks: et()
                            }
                        }(s, n.actionNameAttribute);
                        if (!a && !f.name) return;
                        var d = Jn(t, i, c, f);
                        if (a && (!r || !r.tryAppend(d))) {
                            var l = d.clone();
                            r = Cn(d, (function(t) {
                                ! function(t, e) {
                                    Wn(t, e).isRage ? (t.forEach((function(t) {
                                        return t.discard()
                                    })), e.stop(Q()), e.validate(t.map((function(t) {
                                        return t.event
                                    })))) : (e.discard(), t.forEach((function(t) {
                                        return t.validate()
                                    })))
                                }(t, l)
                            }))
                        }
                        var p = wn(t, e, n, (function(t) {
                                t.hadActivity && t.end < f.startClocks.timeStamp ? d.discard() : (d.stop(t.hadActivity ? t.end : void 0), a || (t.hadActivity ? d.validate() : d.discard()))
                            }), 1e4).stop,
                            v = t.subscribe(4, (function(t) {
                                var e = t.endClocks;
                                d.stop(e.timeStamp)
                            })),
                            m = o.subscribe((function() {
                                d.stop()
                            }));
                        d.stopObservable.subscribe((function() {
                            v.unsubscribe(), p(), m.unsubscribe()
                        }))
                    }
                }).stop;
                return {
                    stop: function() {
                        s(), o.notify(), u()
                    },
                    actionContexts: {
                        findActionId: function(t) {
                            return a ? i.findAll(t) : i.find(t)
                        }
                    }
                };

                function s() {
                    r && r.stop()
                }
            }

            function Jn(t, e, n, r) {
                var i, o = g(),
                    a = e.add(o, r.startClocks.relative),
                    u = bn(t),
                    s = 0,
                    c = [],
                    f = new Jt;

                function d(t) {
                    0 === s && (s = 1, (i = t) ? a.close(it(i)) : a.remove(), u.stop(), f.notify())
                }
                return {
                    event: r.event,
                    stop: d,
                    stopObservable: f,
                    get hasError() {
                        return u.eventCounts.errorCount > 0
                    },
                    get hasPageActivity() {
                        return void 0 !== i
                    },
                    getUserActivity: n,
                    addFrustration: function(t) {
                        c.push(t)
                    },
                    isStopped: function() {
                        return 1 === s || 2 === s
                    },
                    clone: function() {
                        return Jn(t, e, n, r)
                    },
                    validate: function(e) {
                        if (d(), 1 === s) {
                            var n = u.eventCounts,
                                a = n.resourceCount,
                                f = n.errorCount,
                                l = n.longTaskCount,
                                p = h({
                                    type: "click",
                                    duration: i && rt(r.startClocks.timeStamp, i),
                                    id: o,
                                    frustrationTypes: c,
                                    counts: {
                                        resourceCount: a,
                                        errorCount: f,
                                        longTaskCount: l
                                    },
                                    events: null !== e && void 0 !== e ? e : [r.event]
                                }, r);
                            t.notify(1, p), s = 2
                        }
                    },
                    discard: function() {
                        d(), s = 2
                    }
                }
            }

            function $n(t, e) {
                var n = Zn(t) ? {
                        action: {
                            id: t.id,
                            loading_time: $(t.duration),
                            frustration: {
                                type: t.frustrationTypes
                            },
                            error: {
                                count: t.counts.errorCount
                            },
                            long_task: {
                                count: t.counts.longTaskCount
                            },
                            resource: {
                                count: t.counts.resourceCount
                            }
                        },
                        _dd: {
                            action: {
                                target: t.target,
                                position: t.position
                            }
                        }
                    } : void 0,
                    r = Zn(t) ? void 0 : t.context,
                    i = H({
                        action: {
                            id: g(),
                            target: {
                                name: t.name
                            },
                            type: t.type
                        },
                        date: t.startClocks.timeStamp,
                        type: "action"
                    }, n),
                    o = e.isInForegroundAt(t.startClocks.relative);
                return void 0 !== o && (i.view = {
                    in_foreground: o
                }), {
                    customerContext: r,
                    rawRumEvent: i,
                    startTime: t.startClocks.relative,
                    domainContext: Zn(t) ? {
                        event: t.event,
                        events: t.events
                    } : {}
                }
            }

            function Zn(t) {
                return "custom" !== t.type
            }
            var Qn = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/;

            function tr(t) {
                var e = function(t) {
                        return tn(window, "onerror", {
                            before: function(e, n, r, i, o) {
                                var a;
                                if (o) a = vt(o), t(a, o);
                                else {
                                    var u, s = {
                                            url: n,
                                            column: i,
                                            line: r
                                        },
                                        c = e;
                                    if ("[object String]" === {}.toString.call(e)) {
                                        var f = Qn.exec(c);
                                        f && (u = f[1], c = f[2])
                                    }
                                    t(a = {
                                        name: u,
                                        message: "string" === typeof c ? c : void 0,
                                        stack: [s]
                                    }, e)
                                }
                            }
                        })
                    }(t).stop,
                    n = function(t) {
                        return tn(window, "onunhandledrejection", {
                            before: function(e) {
                                var n = e.reason || "Empty reason",
                                    r = vt(n);
                                t(r, n)
                            }
                        })
                    }(t).stop;
                return {
                    stop: function() {
                        e(), n()
                    }
                }
            }
            var er = {};

            function nr(t) {
                var e = t.map((function(t) {
                    return er[t] || (er[t] = function(t) {
                        var e = new Jt((function() {
                            var n = console[t];
                            return console[t] = function() {
                                    for (var r = [], i = 0; i < arguments.length; i++) r[i] = arguments[i];
                                    n.apply(console, r);
                                    var o = Pt();
                                    d((function() {
                                        e.notify(rr(r, t, o))
                                    }))
                                },
                                function() {
                                    console[t] = n
                                }
                        }));
                        return e
                    }(t)), er[t]
                }));
                return $t.apply(void 0, e)
            }

            function rr(t, e, n) {
                var i, o = t.map((function(t) {
                    return function(t) {
                        if ("string" === typeof t) return t;
                        if (t instanceof Error) return Lt(vt(t));
                        return T(t, void 0, 2)
                    }(t)
                })).join(" ");
                if (e === r.error) {
                    var a = x(t, (function(t) {
                        return t instanceof Error
                    }));
                    i = a ? Nt(vt(a)) : void 0, o = "console error: ".concat(o)
                }
                return {
                    api: e,
                    message: o,
                    stack: i,
                    handlingStack: n
                }
            }
            var ir, or, ar = "intervention",
                ur = "csp_violation";

            function sr(t) {
                var e = [];
                E(t, ur) && e.push(function() {
                    var t = new Jt((function() {
                        var e = f((function(e) {
                            t.notify(function(t) {
                                var e = ur,
                                    n = "'".concat(t.blockedURI, "' blocked by '").concat(t.effectiveDirective, "' directive");
                                return {
                                    type: ur,
                                    subtype: t.effectiveDirective,
                                    message: "".concat(e, ": ").concat(n),
                                    stack: cr(t.effectiveDirective, "".concat(n, ' of the policy "').concat(M(t.originalPolicy, 100, "..."), '"'), t.sourceFile, t.lineNumber, t.columnNumber)
                                }
                            }(e))
                        }));
                        return D(document, "securitypolicyviolation", e).stop
                    }));
                    return t
                }());
                var n = t.filter((function(t) {
                    return t !== ur
                }));
                return n.length && e.push(function(t) {
                    var e = new Jt((function() {
                        if (window.ReportingObserver) {
                            var n = f((function(t) {
                                    return t.forEach((function(t) {
                                        e.notify(function(t) {
                                            var e = t.type,
                                                n = t.body;
                                            return {
                                                type: e,
                                                subtype: n.id,
                                                message: "".concat(e, ": ").concat(n.message),
                                                stack: cr(n.id, n.message, n.sourceFile, n.lineNumber, n.columnNumber)
                                            }
                                        }(t))
                                    }))
                                })),
                                r = new window.ReportingObserver(n, {
                                    types: t,
                                    buffered: !0
                                });
                            return r.observe(),
                                function() {
                                    r.disconnect()
                                }
                        }
                    }));
                    return e
                }(n)), $t.apply(void 0, e)
            }

            function cr(t, e, n, r, i) {
                return n && Nt({
                    name: t,
                    message: e,
                    stack: [{
                        func: "?",
                        url: n,
                        line: r,
                        column: i
                    }]
                })
            }

            function fr(t, e) {
                var n = new Jt;
                return function(t) {
                        var e = nr([r.error]).subscribe((function(e) {
                            return t.notify({
                                startClocks: et(),
                                message: e.message,
                                stack: e.stack,
                                source: _t,
                                handling: "handled",
                                handlingStack: e.handlingStack
                            })
                        }))
                    }(n),
                    function(t) {
                        tr((function(e, n) {
                            var r = Rt(e, n, "Uncaught"),
                                i = r.stack,
                                o = r.message,
                                a = r.type;
                            t.notify({
                                message: o,
                                stack: i,
                                type: a,
                                source: Ot,
                                startClocks: et(),
                                originalError: n,
                                handling: "unhandled"
                            })
                        }))
                    }(n),
                    function(t) {
                        var e = sr([ur, ar]).subscribe((function(e) {
                            return t.notify({
                                startClocks: et(),
                                message: e.message,
                                stack: e.stack,
                                type: e.subtype,
                                source: At,
                                handling: "unhandled"
                            })
                        }))
                    }(n), n.subscribe((function(e) {
                        return t.notify(12, {
                            error: e
                        })
                    })),
                    function(t, e) {
                        return t.subscribe(12, (function(n) {
                            var r = n.error,
                                i = n.customerContext,
                                o = n.savedCommonContext;
                            t.notify(10, h({
                                customerContext: i,
                                savedCommonContext: o
                            }, function(t, e) {
                                var n = {
                                        date: t.startClocks.timeStamp,
                                        error: {
                                            id: g(),
                                            message: t.message,
                                            source: t.source,
                                            stack: t.stack,
                                            handling_stack: t.handlingStack,
                                            type: t.type,
                                            handling: t.handling,
                                            source_type: "browser"
                                        },
                                        type: "error"
                                    },
                                    r = e.isInForegroundAt(t.startClocks.relative);
                                void 0 !== r && (n.view = {
                                    in_foreground: r
                                });
                                return {
                                    rawRumEvent: n,
                                    startTime: t.startClocks.relative,
                                    domainContext: {
                                        error: t.originalError
                                    }
                                }
                            }(r, e)))
                        })), {
                            addError: function(e, n) {
                                var r = e.error,
                                    i = e.handlingStack,
                                    o = e.startClocks,
                                    a = e.context,
                                    u = function(t, e, n) {
                                        var r = t instanceof Error ? vt(t) : void 0;
                                        return h({
                                            startClocks: n,
                                            source: It,
                                            originalError: t,
                                            handling: "handled"
                                        }, Rt(r, t, "Provided", e))
                                    }(r, i, o);
                                t.notify(12, {
                                    customerContext: a,
                                    savedCommonContext: n,
                                    error: u
                                })
                            }
                        }
                    }(t, e)
            }

            function dr(t) {
                if (performance && "getEntriesByName" in performance) {
                    var e = performance.getEntriesByName(t.url, "resource");
                    if (e.length && "toJSON" in e[0]) {
                        var n, r = e.map((function(t) {
                            return t.toJSON()
                        })).filter(ve).filter((function(e) {
                            return function(t, e, n) {
                                var r = 1;
                                return t.startTime >= e - r && lr(t) <= n + r
                            }(e, t.startClocks.relative, lr({
                                startTime: t.startClocks.relative,
                                duration: t.duration
                            }))
                        }));
                        return 1 === r.length ? r[0] : 2 === r.length && lr((n = r)[0]) <= n[1].startTime ? r[1] : void 0
                    }
                }
            }

            function lr(t) {
                return t.startTime + t.duration
            }

            function pr(t, e) {
                t.subscribe(6, (function(n) {
                    t.notify(10, function(t, e) {
                        var n = "xhr" === t.type ? "xhr" : "fetch",
                            r = dr(t),
                            i = r ? K(r.startTime) : t.startClocks,
                            o = r ? mr(r) : void 0,
                            a = function(t, e) {
                                if (!(t.traceSampled && t.traceId && t.spanId)) return;
                                return {
                                    _dd: {
                                        span_id: t.spanId.toDecimalString(),
                                        trace_id: t.traceId.toDecimalString(),
                                        rule_psr: yr(e)
                                    }
                                }
                            }(t, e),
                            u = H({
                                date: i.timeStamp,
                                resource: {
                                    id: g(),
                                    type: n,
                                    duration: $(t.duration),
                                    method: t.method,
                                    status_code: t.status,
                                    url: t.url
                                },
                                type: "resource"
                            }, a, o);
                        return {
                            startTime: i.relative,
                            rawRumEvent: u,
                            domainContext: {
                                performanceEntry: r && hr(r),
                                xhr: t.xhr,
                                response: t.response,
                                requestInput: t.input,
                                requestInit: t.init,
                                error: t.error
                            }
                        }
                    }(n, e))
                })), t.subscribe(0, (function(n) {
                    for (var r = 0, i = n; r < i.length; r++) {
                        var o = i[r];
                        "resource" === o.entryType && ("xmlhttprequest" !== (a = o).initiatorType && "fetch" !== a.initiatorType) && t.notify(10, vr(o, e))
                    }
                    var a
                }))
            }

            function vr(t, e) {
                var n = fe(t),
                    r = mr(t),
                    i = function(t, e) {
                        if (!t.traceId) return;
                        return {
                            _dd: {
                                trace_id: t.traceId,
                                rule_psr: yr(e)
                            }
                        }
                    }(t, e),
                    o = K(t.startTime),
                    a = H({
                        date: o.timeStamp,
                        resource: {
                            id: g(),
                            type: n,
                            url: t.name
                        },
                        type: "resource"
                    }, i, r);
                return {
                    startTime: o.relative,
                    rawRumEvent: a,
                    domainContext: {
                        performanceEntry: hr(t)
                    }
                }
            }

            function mr(t) {
                return {
                    resource: h({
                        duration: le(t),
                        size: ye(t)
                    }, pe(t))
                }
            }

            function hr(t) {
                return "function" === typeof PerformanceEntry && t instanceof PerformanceEntry && t.toJSON(), t
            }

            function yr(t) {
                return I(t.tracingSampleRate) ? t.tracingSampleRate / 100 : void 0
            }

            function gr(t) {
                return void 0 === t && (t = window), ir || ("hidden" === document.visibilityState ? ir = {
                    timeStamp: 0
                } : (ir = {
                    timeStamp: 1 / 0
                }, or = U(t, ["pagehide", "visibilitychange"], (function(t) {
                    "pagehide" !== t.type && "hidden" !== document.visibilityState || (ir.timeStamp = t.timeStamp, or())
                }), {
                    capture: !0
                }).stop)), ir
            }
            var br = 6e5;

            function wr(t, e) {
                var n = {};

                function r(t) {
                    h(n, t), e(n)
                }
                var i = function(t, e) {
                        return {
                            stop: t.subscribe(0, (function(t) {
                                for (var n = 0, r = t; n < r.length; n++) {
                                    var i = r[n];
                                    "navigation" === i.entryType && e({
                                        domComplete: i.domComplete,
                                        domContentLoaded: i.domContentLoadedEventEnd,
                                        domInteractive: i.domInteractive,
                                        loadEvent: i.loadEventEnd,
                                        firstByte: i.responseStart
                                    })
                                }
                            })).unsubscribe
                        }
                    }(t, r).stop,
                    o = function(t, e) {
                        var n = gr();
                        return {
                            stop: t.subscribe(0, (function(t) {
                                var r = x(t, (function(t) {
                                    return "paint" === t.entryType && "first-contentful-paint" === t.name && t.startTime < n.timeStamp && t.startTime < br
                                }));
                                r && e(r.startTime)
                            })).unsubscribe
                        }
                    }(t, (function(t) {
                        return r({
                            firstContentfulPaint: t
                        })
                    })).stop,
                    a = function(t, e, n) {
                        var r = gr(),
                            i = 1 / 0,
                            o = U(e, ["pointerdown", "keydown"], (function(t) {
                                i = t.timeStamp
                            }), {
                                capture: !0,
                                once: !0
                            }).stop,
                            a = t.subscribe(0, (function(t) {
                                var e = function(t, e) {
                                    for (var n = t.length - 1; n >= 0; n -= 1) {
                                        var r = t[n];
                                        if (e(r, n, t)) return r
                                    }
                                }(t, (function(t) {
                                    return "largest-contentful-paint" === t.entryType && t.startTime < i && t.startTime < r.timeStamp && t.startTime < br
                                }));
                                e && n(e.startTime)
                            })).unsubscribe;
                        return {
                            stop: function() {
                                o(), a()
                            }
                        }
                    }(t, window, (function(t) {
                        r({
                            largestContentfulPaint: t
                        })
                    })).stop,
                    u = function(t, e) {
                        var n = gr();
                        return {
                            stop: t.subscribe(0, (function(t) {
                                var r = x(t, (function(t) {
                                    return "first-input" === t.entryType && t.startTime < n.timeStamp
                                }));
                                if (r) {
                                    var i = rt(r.startTime, r.processingStart);
                                    e({
                                        firstInputDelay: i >= 0 ? i : 0,
                                        firstInputTime: r.startTime
                                    })
                                }
                            })).unsubscribe
                        }
                    }(t, (function(t) {
                        r({
                            firstInputDelay: t.firstInputDelay,
                            firstInputTime: t.firstInputTime
                        })
                    })).stop;
                return {
                    stop: function() {
                        i(), o(), a(), u()
                    }
                }
            }

            function Sr(t, e, n, r, i, o) {
                var a, u = {
                        eventCounts: {
                            errorCount: 0,
                            longTaskCount: 0,
                            resourceCount: 0,
                            actionCount: 0,
                            frustrationCount: 0
                        }
                    },
                    s = bn(t, (function(t) {
                        u.eventCounts = t, r()
                    })).stop,
                    c = function(t, e, n, r, i, o) {
                        var a = "initial_load" === r,
                            u = !0,
                            s = [];

                        function c() {
                            !u && !a && s.length > 0 && o(Math.max.apply(Math, s))
                        }
                        return {
                            stop: wn(t, e, n, (function(t) {
                                u && (u = !1, t.hadActivity && s.push(rt(i.timeStamp, t.end)), c())
                            })).stop,
                            setLoadEvent: function(t) {
                                a && (a = !1, s.push(t), c())
                            }
                        }
                    }(t, e, n, i, o, (function(t) {
                        u.loadingTime = t, r()
                    })),
                    f = c.stop,
                    d = c.setLoadEvent;
                return xe("layout-shift") ? (u.cumulativeLayoutShift = 0, a = function(t, e) {
                    var n = 0,
                        r = function() {
                            var t, e, n = 0;
                            return {
                                update: function(r) {
                                    void 0 === t || r.startTime - e >= p || r.startTime - t >= 5e3 ? (t = e = r.startTime, n = r.value) : (n += r.value, e = r.startTime)
                                },
                                value: function() {
                                    return n
                                }
                            }
                        }();
                    return {
                        stop: t.subscribe(0, (function(t) {
                            for (var i = 0, o = t; i < o.length; i++) {
                                var a = o[i];
                                "layout-shift" !== a.entryType || a.hadRecentInput || (r.update(a), r.value() > n && (n = r.value(), e(w(n, 4))))
                            }
                        })).unsubscribe
                    }
                }(t, (function(t) {
                    u.cumulativeLayoutShift = t, r()
                })).stop) : a = S, {
                    stop: function() {
                        s(), f(), a()
                    },
                    setLoadEvent: d,
                    viewMetrics: u
                }
            }

            function Tr(t, e, n, r, i, o, a) {
                var u, s = function(i) {
                        var o = Cr(e, n, r, t, "initial_load", nt(), i),
                            a = wr(e, (function(t) {
                                o.updateTimings(t), o.scheduleUpdate()
                            })).stop;
                        return {
                            initialView: o,
                            stop: a
                        }
                    }(a),
                    c = s.stop,
                    d = s.initialView,
                    l = function() {
                        e.subscribe(8, (function() {
                            d.end(), d = p(void 0, {
                                name: d.name,
                                service: d.service,
                                version: d.version
                            })
                        })), e.subscribe(9, (function() {
                            d.end(), d.triggerUpdate()
                        }));
                        var t = window.setInterval(f((function() {
                            d.triggerUpdate()
                        })), 3e5);
                        return {
                            stop: function() {
                                clearInterval(t)
                            }
                        }
                    }().stop;

                function p(i, o) {
                    return Cr(e, n, r, t, "route_change", i, o)
                }
                return o && (u = function(t) {
                    return t.subscribe((function(t) {
                        var e, n, r = t.oldLocation,
                            i = t.newLocation;
                        if (n = i, (e = r).pathname !== n.pathname || ! function(t) {
                                var e = t.substr(1);
                                return !!document.getElementById(e)
                            }(n.hash) && Er(n.hash) !== Er(e.hash)) return d.end(), d.triggerUpdate(), void(d = p())
                    }))
                }(i)), {
                    addTiming: function(t, e) {
                        void 0 === e && (e = Q()), d.addTiming(t, e), d.scheduleUpdate()
                    },
                    startView: function(t, e) {
                        d.end(e), d.triggerUpdate(), d = p(e, t)
                    },
                    stop: function() {
                        null === u || void 0 === u || u.unsubscribe(), c(), l(), d.end()
                    }
                }
            }

            function Cr(t, e, n, r, o, a, u) {
                void 0 === a && (a = et());
                var s, c, d, l, p = g(),
                    v = {},
                    b = {},
                    w = 0,
                    S = y(r);
                u && (c = u.name, d = u.service, l = u.version), t.notify(2, {
                    id: p,
                    name: c,
                    startClocks: a,
                    service: d,
                    version: l
                });
                var T = m(f(O), 3e3, {
                        leading: !1
                    }),
                    C = T.throttled,
                    E = T.cancel,
                    k = Sr(t, e, n, C, o, a),
                    x = k.setLoadEvent,
                    _ = k.stop,
                    I = k.viewMetrics;

                function O() {
                    w += 1;
                    var e = void 0 === s ? Q() : s.timeStamp;
                    t.notify(3, h({
                        customTimings: b,
                        documentVersion: w,
                        id: p,
                        name: c,
                        service: d,
                        version: l,
                        loadingType: o,
                        location: S,
                        startClocks: a,
                        timings: v,
                        duration: rt(a.timeStamp, e),
                        isActive: void 0 === s
                    }, I))
                }
                return O(), {
                    name: c,
                    service: d,
                    version: l,
                    scheduleUpdate: C,
                    end: function(e) {
                        void 0 === e && (e = et()), s = e, t.notify(4, {
                            endClocks: s
                        }), _()
                    },
                    triggerUpdate: function() {
                        E(), O()
                    },
                    updateTimings: function(t) {
                        v = t, void 0 !== t.loadEvent && x(t.loadEvent)
                    },
                    addTiming: function(t, e) {
                        var n = function(t) {
                            return t < 31536e6
                        }(e) ? e : rt(a.timeStamp, e);
                        b[function(t) {
                            var e = t.replace(/[^a-zA-Z0-9-_.@$]/g, "_");
                            e !== t && i.warn("Invalid timing name: ".concat(t, ", sanitized to: ").concat(e));
                            return e
                        }(t)] = n
                    }
                }
            }

            function Er(t) {
                var e = t.indexOf("?");
                return e < 0 ? t : t.slice(0, e)
            }

            function kr(t, e, n, r, i, o, a, u) {
                return t.subscribe(3, (function(e) {
                    return t.notify(10, function(t, e, n) {
                        var r = n.getReplayStats(t.id),
                            i = {
                                _dd: {
                                    document_version: t.documentVersion,
                                    replay_stats: r
                                },
                                date: t.startClocks.timeStamp,
                                type: "view",
                                view: {
                                    action: {
                                        count: t.eventCounts.actionCount
                                    },
                                    frustration: {
                                        count: t.eventCounts.frustrationCount
                                    },
                                    cumulative_layout_shift: t.cumulativeLayoutShift,
                                    first_byte: $(t.timings.firstByte),
                                    dom_complete: $(t.timings.domComplete),
                                    dom_content_loaded: $(t.timings.domContentLoaded),
                                    dom_interactive: $(t.timings.domInteractive),
                                    error: {
                                        count: t.eventCounts.errorCount
                                    },
                                    first_contentful_paint: $(t.timings.firstContentfulPaint),
                                    first_input_delay: $(t.timings.firstInputDelay),
                                    first_input_time: $(t.timings.firstInputTime),
                                    is_active: t.isActive,
                                    name: t.name,
                                    largest_contentful_paint: $(t.timings.largestContentfulPaint),
                                    load_event: $(t.timings.loadEvent),
                                    loading_time: xr($(t.loadingTime)),
                                    loading_type: t.loadingType,
                                    long_task: {
                                        count: t.eventCounts.longTaskCount
                                    },
                                    resource: {
                                        count: t.eventCounts.resourceCount
                                    },
                                    time_spent: $(t.duration),
                                    in_foreground_periods: e.selectInForegroundPeriodsFor(t.startClocks.relative, t.duration)
                                },
                                session: {
                                    has_replay: !!r || void 0
                                }
                            };
                        R(t.customTimings) || (i.view.custom_timings = function(t, e) {
                            for (var n = {}, r = 0, i = Object.keys(t); r < i.length; r++) {
                                var o = i[r];
                                n[o] = e(t[o])
                            }
                            return n
                        }(t.customTimings, $));
                        return {
                            rawRumEvent: i,
                            startTime: t.startClocks.relative,
                            domainContext: {
                                location: t.location
                            }
                        }
                    }(e, o, a))
                })), Tr(n, t, r, e, i, !e.trackViewsManually, u)
            }

            function xr(t) {
                return I(t) && t < 0 ? void 0 : t
            }
            var _r, Ir = /^([a-z]+)=([a-z0-9-]+)$/,
                Or = "&",
                Ar = "_dd_s",
                Rr = [];

            function Nr(t, e) {
                var n;
                if (void 0 === e && (e = 0), _r || (_r = t), t === _r)
                    if (e >= 100) Mr();
                    else {
                        var r, i = Br();
                        if (Lr()) {
                            if (i.lock) return void Pr(t, e);
                            if (r = g(), i.lock = r, Ur(i, t.options), (i = Br()).lock !== r) return void Pr(t, e)
                        }
                        var o = t.process(i);
                        if (Lr() && (i = Br()).lock !== r) Pr(t, e);
                        else {
                            if (o && Dr(o, t.options), Lr() && (!o || !qr(o))) {
                                if ((i = Br()).lock !== r) return void Pr(t, e);
                                delete i.lock, Ur(i, t.options), o = i
                            }
                            null === (n = t.after) || void 0 === n || n.call(t, o || i), Mr()
                        }
                    }
                else Rr.push(t)
            }

            function Lr() {
                return !!window.chrome || /HeadlessChrome/.test(window.navigator.userAgent)
            }

            function Pr(t, e) {
                setTimeout(f((function() {
                    Nr(t, e + 1)
                })), 10)
            }

            function Mr() {
                _r = void 0;
                var t = Rr.shift();
                t && Nr(t)
            }

            function Dr(t, e) {
                qr(t) ? function(t) {
                    ut(Ar, "", 0, t)
                }(e) : (t.expire = String(Z() + Je), Ur(t, e))
            }

            function Ur(t, e) {
                ut(Ar, function(t) {
                    return A(t).map((function(t) {
                        var e = t[0],
                            n = t[1];
                        return "".concat(e, "=").concat(n)
                    })).join(Or)
                }(t), Je, e)
            }

            function Br() {
                var t = st(Ar),
                    e = {};
                return function(t) {
                    return void 0 !== t && (-1 !== t.indexOf(Or) || Ir.test(t))
                }(t) && t.split(Or).forEach((function(t) {
                    var n = Ir.exec(t);
                    if (null !== n) {
                        var r = n[1],
                            i = n[2];
                        e[r] = i
                    }
                })), e
            }

            function qr(t) {
                return R(t)
            }

            function jr(t, e, n) {
                var r = new Jt,
                    i = new Jt,
                    o = setInterval(f((function() {
                        Nr({
                            options: t,
                            process: function(t) {
                                return c(t) ? void 0 : {}
                            },
                            after: u
                        })
                    })), 1e3),
                    a = function() {
                        var t = Br();
                        if (c(t)) return t;
                        return {}
                    }();

                function u(t) {
                    return c(t) || (t = {}), s() && (! function(t) {
                        return a.id !== t.id || a[e] !== t[e]
                    }(t) ? a = t : (a = {}, i.notify())), t
                }

                function s() {
                    return void 0 !== a[e]
                }

                function c(t) {
                    return (void 0 === t.created || Z() - Number(t.created) < Ke) && (void 0 === t.expire || Z() < Number(t.expire))
                }
                return {
                    expandOrRenewSession: m(f((function() {
                        var i;
                        Nr({
                            options: t,
                            process: function(t) {
                                var r = u(t);
                                return i = function(t) {
                                    var r = n(t[e]),
                                        i = r.trackingType,
                                        o = r.isTracked;
                                    t[e] = i, o && !t.id && (t.id = g(), t.created = String(Z()));
                                    return o
                                }(r), r
                            },
                            after: function(t) {
                                i && !s() && function(t) {
                                    a = t, r.notify()
                                }(t), a = t
                            }
                        })
                    })), 1e3).throttled,
                    expandSession: function() {
                        Nr({
                            options: t,
                            process: function(t) {
                                return s() ? u(t) : void 0
                            }
                        })
                    },
                    getSession: function() {
                        return a
                    },
                    renewObservable: r,
                    expireObservable: i,
                    stop: function() {
                        clearInterval(o)
                    }
                }
            }
            var Fr = [];

            function Vr(t, e, n) {
                ! function(t) {
                    var e = st(Ar),
                        n = st("_dd"),
                        r = st("_dd_r"),
                        i = st("_dd_l");
                    if (!e) {
                        var o = {};
                        n && (o.id = n), i && /^[01]$/.test(i) && (o.logs = i), r && /^[012]$/.test(r) && (o.rum = r), Dr(o, t)
                    }
                }(t);
                var r = jr(t, e, n);
                Fr.push((function() {
                    return r.stop()
                }));
                var i = new Ze(144e5);

                function o() {
                    return {
                        id: r.getSession().id,
                        trackingType: r.getSession()[e]
                    }
                }
                return Fr.push((function() {
                        return i.stop()
                    })), r.renewObservable.subscribe((function() {
                        i.add(o(), tt())
                    })), r.expireObservable.subscribe((function() {
                        i.closeActive(tt())
                    })), r.expandOrRenewSession(), i.add(o(), nt().relative),
                    function(t) {
                        var e = U(window, ["click", "touchstart", "keydown", "scroll"], t, {
                            capture: !0,
                            passive: !0
                        }).stop;
                        Fr.push(e)
                    }((function() {
                        return r.expandOrRenewSession()
                    })),
                    function(t) {
                        var e = f((function() {
                                "visible" === document.visibilityState && t()
                            })),
                            n = D(document, "visibilitychange", e).stop;
                        Fr.push(n);
                        var r = setInterval(e, 6e4);
                        Fr.push((function() {
                            clearInterval(r)
                        }))
                    }((function() {
                        return r.expandSession()
                    })), {
                        findActiveSession: function(t) {
                            return i.find(t)
                        },
                        renewObservable: r.renewObservable,
                        expireObservable: r.expireObservable
                    }
            }

            function Hr(t, e) {
                var n = Vr(t.cookieOptions, "rum", (function(e) {
                    return function(t, e) {
                        var n;
                        n = function(t) {
                            return "0" === t || "1" === t || "2" === t
                        }(e) ? e : b(t.sampleRate) ? b(t.premiumSampleRate) ? "1" : "2" : "0";
                        return {
                            trackingType: n,
                            isTracked: zr(n)
                        }
                    }(t, e)
                }));
                return n.expireObservable.subscribe((function() {
                    e.notify(7)
                })), n.renewObservable.subscribe((function() {
                    e.notify(8)
                })), {
                    findTrackedSession: function(t) {
                        var e = n.findActiveSession(t);
                        if (e && zr(e.trackingType)) return {
                            id: e.id,
                            hasPremiumPlan: "1" === e.trackingType,
                            hasLitePlan: "2" === e.trackingType
                        }
                    }
                }
            }

            function zr(t) {
                return "2" === t || "1" === t
            }
            var Gr = /[^\u0000-\u007F]/,
                Xr = function() {
                    function t(t, e, n, r, i, o) {
                        void 0 === o && (o = S), this.request = t, this.batchMessagesLimit = e, this.batchBytesLimit = n, this.messageBytesLimit = r, this.flushTimeout = i, this.beforeUnloadCallback = o, this.pushOnlyBuffer = [], this.upsertBuffer = {}, this.bufferBytesCount = 0, this.bufferMessagesCount = 0, this.setupFlushOnExit(), this.flushPeriodically()
                    }
                    return t.prototype.add = function(t) {
                        this.addOrUpdate(t)
                    }, t.prototype.upsert = function(t, e) {
                        this.addOrUpdate(t, e)
                    }, t.prototype.flush = function(t) {
                        if (void 0 === t && (t = this.request.send), 0 !== this.bufferMessagesCount) {
                            var e = this.pushOnlyBuffer.concat(O(this.upsertBuffer)),
                                n = this.bufferBytesCount;
                            this.pushOnlyBuffer = [], this.upsertBuffer = {}, this.bufferBytesCount = 0, this.bufferMessagesCount = 0, t({
                                data: e.join("\n"),
                                bytesCount: n
                            })
                        }
                    }, t.prototype.flushOnExit = function() {
                        this.flush(this.request.sendOnExit)
                    }, t.prototype.computeBytesCount = function(t) {
                        return Gr.test(t) ? void 0 !== window.TextEncoder ? (new TextEncoder).encode(t).length : new Blob([t]).size : t.length
                    }, t.prototype.addOrUpdate = function(t, e) {
                        var n = this.process(t),
                            r = n.processedMessage,
                            o = n.messageBytesCount;
                        o >= this.messageBytesLimit ? i.warn("Discarded a message whose size was bigger than the maximum allowed size ".concat(this.messageBytesLimit, "KB.")) : (this.hasMessageFor(e) && this.remove(e), this.willReachedBytesLimitWith(o) && this.flush(), this.push(r, o, e), this.isFull() && this.flush())
                    }, t.prototype.process = function(t) {
                        var e = T(t);
                        return {
                            processedMessage: e,
                            messageBytesCount: this.computeBytesCount(e)
                        }
                    }, t.prototype.push = function(t, e, n) {
                        this.bufferMessagesCount > 0 && (this.bufferBytesCount += 1), void 0 !== n ? this.upsertBuffer[n] = t : this.pushOnlyBuffer.push(t), this.bufferBytesCount += e, this.bufferMessagesCount += 1
                    }, t.prototype.remove = function(t) {
                        var e = this.upsertBuffer[t];
                        delete this.upsertBuffer[t];
                        var n = this.computeBytesCount(e);
                        this.bufferBytesCount -= n, this.bufferMessagesCount -= 1, this.bufferMessagesCount > 0 && (this.bufferBytesCount -= 1)
                    }, t.prototype.hasMessageFor = function(t) {
                        return void 0 !== t && void 0 !== this.upsertBuffer[t]
                    }, t.prototype.willReachedBytesLimitWith = function(t) {
                        return this.bufferBytesCount + t + 1 >= this.batchBytesLimit
                    }, t.prototype.isFull = function() {
                        return this.bufferMessagesCount === this.batchMessagesLimit || this.bufferBytesCount >= this.batchBytesLimit
                    }, t.prototype.flushPeriodically = function() {
                        var t = this;
                        setTimeout(f((function() {
                            t.flush(), t.flushPeriodically()
                        })), this.flushTimeout)
                    }, t.prototype.setupFlushOnExit = function() {
                        var t = this;
                        navigator.sendBeacon && (D(window, "beforeunload", this.beforeUnloadCallback), D(document, "visibilitychange", (function() {
                            "hidden" === document.visibilityState && t.flushOnExit()
                        })), D(window, "beforeunload", (function() {
                            return t.flushOnExit()
                        })))
                    }, t
                }(),
                Wr = 3145728;

            function Yr(t, e, n, r, i) {
                0 === e.transportStatus && 0 === e.queuedPayloads.size() && e.bandwidthMonitor.canHandle(t) ? Jr(t, e, n, {
                    onSuccess: function() {
                        return $r(0, e, n, r, i)
                    },
                    onFailure: function() {
                        e.queuedPayloads.enqueue(t), Kr(e, n, r, i)
                    }
                }) : e.queuedPayloads.enqueue(t)
            }

            function Kr(t, e, n, r) {
                2 === t.transportStatus && setTimeout(f((function() {
                    Jr(t.queuedPayloads.first(), t, e, {
                        onSuccess: function() {
                            t.queuedPayloads.dequeue(), 0 !== t.lastFailureStatus && re("resuming after transport down", {
                                failureStatus: t.lastFailureStatus
                            }), t.currentBackoffTime = 1e3, $r(1, t, e, n, r)
                        },
                        onFailure: function() {
                            t.currentBackoffTime = Math.min(256e3, 2 * t.currentBackoffTime), Kr(t, e, n, r)
                        }
                    })
                })), t.currentBackoffTime)
            }

            function Jr(t, e, n, r) {
                var i = r.onSuccess,
                    o = r.onFailure;
                e.bandwidthMonitor.add(t), n(t, (function(n) {
                    e.bandwidthMonitor.remove(t), ! function(t) {
                        return 0 !== t.status && t.status < 500
                    }(n) ? (e.transportStatus = e.bandwidthMonitor.ongoingRequestCount > 0 ? 1 : 2, e.lastFailureStatus = n.status, o()) : (e.transportStatus = 0, i())
                }))
            }

            function $r(t, e, n, r, i) {
                0 === t && e.queuedPayloads.isFull() && !e.queueFullReported && (i({
                    message: "Reached max ".concat(r, " events size queued for upload: ").concat(3, "MiB"),
                    source: xt,
                    startClocks: et()
                }), e.queueFullReported = !0);
                var o = e.queuedPayloads;
                for (e.queuedPayloads = Zr(); o.size() > 0;) Yr(o.dequeue(), e, n, r, i)
            }

            function Zr() {
                var t = [];
                return {
                    bytesCount: 0,
                    enqueue: function(e) {
                        this.isFull() || (t.push(e), this.bytesCount += e.bytesCount)
                    },
                    first: function() {
                        return t[0]
                    },
                    dequeue: function() {
                        var e = t.shift();
                        return e && (this.bytesCount -= e.bytesCount), e
                    },
                    size: function() {
                        return t.length
                    },
                    isFull: function() {
                        return this.bytesCount >= Wr
                    }
                }
            }

            function Qr(t, e, n) {
                var r = {
                        transportStatus: 0,
                        lastFailureStatus: 0,
                        currentBackoffTime: 1e3,
                        bandwidthMonitor: {
                            ongoingRequestCount: 0,
                            ongoingByteCount: 0,
                            canHandle: function(t) {
                                return 0 === this.ongoingRequestCount || this.ongoingByteCount + t.bytesCount <= 81920 && this.ongoingRequestCount < 32
                            },
                            add: function(t) {
                                this.ongoingRequestCount += 1, this.ongoingByteCount += t.bytesCount
                            },
                            remove: function(t) {
                                this.ongoingRequestCount -= 1, this.ongoingByteCount -= t.bytesCount
                            }
                        },
                        queuedPayloads: Zr(),
                        queueFullReported: !1
                    },
                    i = function(n, r) {
                        return ei(t, e, n, r)
                    };
                return {
                    send: function(o) {
                        Mt("retry") ? Yr(o, r, i, t.endpointType, n) : ei(t, e, o)
                    },
                    sendOnExit: function(n) {
                        ! function(t, e, n) {
                            var r = n.data,
                                i = n.bytesCount,
                                o = t.build();
                            if (navigator.sendBeacon && i < e) try {
                                if (navigator.sendBeacon(o, r)) return
                            } catch (a) {
                                ! function(t) {
                                    ti || (ti = !0, ie(t))
                                }(a)
                            }
                            ni(o, r)
                        }(t, e, n)
                    }
                }
            }
            var ti = !1;

            function ei(t, e, n, r) {
                var i = n.data,
                    o = n.bytesCount,
                    a = t.build();
                (function() {
                    try {
                        return window.Request && "keepalive" in new Request("http://a")
                    } catch (n) {
                        return !1
                    }
                })() && o < e ? fetch(a, {
                    method: "POST",
                    body: i,
                    keepalive: !0
                }).then(f((function(t) {
                    return null === r || void 0 === r ? void 0 : r({
                        status: t.status
                    })
                })), f((function() {
                    ni(a, i, r)
                }))) : ni(a, i, r)
            }

            function ni(t, e, n) {
                var r = new XMLHttpRequest;
                r.open("POST", t, !0), r.send(e), r.addEventListener("loadend", f((function() {
                    null === n || void 0 === n || n({
                        status: r.status
                    })
                })))
            }

            function ri(t, e, n, r) {
                var i = function(t, e, n) {
                    var r, i = a(t.rumEndpointBuilder, (function() {
                            return e.notify(9)
                        })),
                        o = t.replica;
                    void 0 !== o && (r = a(o.rumEndpointBuilder));

                    function a(e, r) {
                        return new Xr(Qr(e, t.batchBytesLimit, n), t.batchMessagesLimit, t.batchBytesLimit, t.messageBytesLimit, t.flushTimeout, r)
                    }

                    function u(t) {
                        return H(t, {
                            application: {
                                id: o.applicationId
                            }
                        })
                    }
                    return {
                        add: function(t, e) {
                            void 0 === e && (e = !0), i.add(t), r && e && r.add(u(t))
                        },
                        upsert: function(t, e) {
                            i.upsert(t, e), r && r.upsert(u(t), e)
                        }
                    }
                }(t, e, r);
                e.subscribe(11, (function(t) {
                    "view" === t.type ? i.upsert(t, t.view.id) : i.add(t)
                })), n.subscribe((function(e) {
                    return i.add(e, function(t) {
                        return "datad0g.com" === t.site
                    }(t))
                }))
            }

            function ii(t) {
                var e = y(t),
                    n = new Jt((function() {
                        var t, e = function(t) {
                                var e = tn(history, "pushState", {
                                        after: t
                                    }).stop,
                                    n = tn(history, "replaceState", {
                                        after: t
                                    }).stop,
                                    r = D(window, "popstate", t).stop;
                                return {
                                    stop: function() {
                                        e(), n(), r()
                                    }
                                }
                            }(r).stop,
                            n = (t = r, D(window, "hashchange", t)).stop;
                        return function() {
                            e(), n()
                        }
                    }));

                function r() {
                    if (e.href !== t.href) {
                        var r = y(t);
                        n.notify({
                            newLocation: r,
                            oldLocation: e
                        }), e = r
                    }
                }
                return n
            }
            var oi = 2,
                ai = 3,
                ui = 4,
                si = 6,
                ci = 7,
                fi = 8,
                di = 9,
                li = 0,
                pi = 1,
                vi = 2,
                mi = 3,
                hi = 4,
                yi = 0,
                gi = 1,
                bi = 2,
                wi = 3,
                Si = 4,
                Ti = 5,
                Ci = 6,
                Ei = 7,
                ki = 8,
                xi = 0,
                _i = 1,
                Ii = 2,
                Oi = 3,
                Ai = 4,
                Ri = 5,
                Ni = 6,
                Li = 7,
                Pi = 9,
                Mi = 0,
                Di = 1,
                Ui = {
                    IGNORE: "ignore",
                    HIDDEN: "hidden",
                    ALLOW: Wt.ALLOW,
                    MASK: Wt.MASK,
                    MASK_USER_INPUT: Wt.MASK_USER_INPUT
                },
                Bi = "data-dd-privacy",
                qi = "hidden",
                ji = "***",
                Fi = {
                    INPUT: !0,
                    OUTPUT: !0,
                    TEXTAREA: !0,
                    SELECT: !0,
                    OPTION: !0,
                    DATALIST: !0,
                    OPTGROUP: !0
                };

            function Vi(t, e) {
                var n = t.parentNode ? Vi(t.parentNode, e) : e;
                return Hi(zi(t), n)
            }

            function Hi(t, e) {
                switch (e) {
                    case Ui.HIDDEN:
                    case Ui.IGNORE:
                        return e
                }
                switch (t) {
                    case Ui.ALLOW:
                    case Ui.MASK:
                    case Ui.MASK_USER_INPUT:
                    case Ui.HIDDEN:
                    case Ui.IGNORE:
                        return t;
                    default:
                        return e
                }
            }

            function zi(t) {
                if (function(t) {
                        return t.nodeType === t.ELEMENT_NODE
                    }(t)) {
                    var e = t.getAttribute(Bi);
                    if ("BASE" === t.tagName) return Ui.ALLOW;
                    if ("INPUT" === t.tagName) {
                        var n = t;
                        if ("password" === n.type || "email" === n.type || "tel" === n.type) return Ui.MASK;
                        if ("hidden" === n.type) return Ui.MASK;
                        var r = n.getAttribute("autocomplete");
                        if (r && 0 === r.indexOf("cc-")) return Ui.MASK
                    }
                    return e === qi || t.classList.contains("dd-privacy-hidden") ? Ui.HIDDEN : "mask" === e || t.classList.contains("dd-privacy-mask") ? Ui.MASK : "mask-user-input" === e || t.classList.contains("dd-privacy-mask-user-input") ? Ui.MASK_USER_INPUT : "allow" === e || t.classList.contains("dd-privacy-allow") ? Ui.ALLOW : function(t) {
                        if ("SCRIPT" === t.nodeName) return !0;
                        if ("LINK" === t.nodeName) {
                            return "preload" === (n = i("rel")) && "script" === i("as") || "shortcut icon" === n || "icon" === n
                        }
                        if ("META" === t.nodeName) {
                            var e = i("name"),
                                n = i("rel"),
                                r = i("property");
                            return /^msapplication-tile(image|color)$/.test(e) || "application-name" === e || "icon" === n || "apple-touch-icon" === n || "shortcut icon" === n || "keywords" === e || "description" === e || /^(og|twitter|fb):/.test(r) || /^(og|twitter):/.test(e) || "pinterest" === e || "robots" === e || "googlebot" === e || "bingbot" === e || t.hasAttribute("http-equiv") || "author" === e || "generator" === e || "framework" === e || "publisher" === e || "progid" === e || /^article:/.test(r) || /^product:/.test(r) || "google-site-verification" === e || "yandex-verification" === e || "csrf-token" === e || "p:domain_verify" === e || "verify-v1" === e || "verification" === e || "shopify-checkout-api-token" === e
                        }

                        function i(e) {
                            return (t.getAttribute(e) || "").toLowerCase()
                        }
                        return !1
                    }(t) ? Ui.IGNORE : void 0
                }
            }

            function Gi(t, e) {
                switch (e) {
                    case Ui.MASK:
                    case Ui.HIDDEN:
                    case Ui.IGNORE:
                        return !0;
                    case Ui.MASK_USER_INPUT:
                        return function(t) {
                            return t.nodeType === t.TEXT_NODE
                        }(t) ? Xi(t.parentNode) : Xi(t);
                    default:
                        return !1
                }
            }

            function Xi(t) {
                if (!t || t.nodeType !== t.ELEMENT_NODE) return !1;
                var e = t;
                if ("INPUT" === e.tagName) switch (e.type) {
                    case "button":
                    case "color":
                    case "reset":
                    case "submit":
                        return !1
                }
                return !!Fi[e.tagName]
            }

            function Wi(t, e, n) {
                var r, i = null === (r = t.parentElement) || void 0 === r ? void 0 : r.tagName,
                    o = t.textContent || "";
                if (!e || o.trim()) {
                    var a = "STYLE" === i || void 0;
                    if ("SCRIPT" === i) o = ji;
                    else if (n === Ui.HIDDEN) o = ji;
                    else if (Gi(t, n) && !a)
                        if ("DATALIST" === i || "SELECT" === i || "OPTGROUP" === i) {
                            if (!o.trim()) return
                        } else o = "OPTION" === i ? ji : o.replace(/\S/g, "x");
                    return o
                }
            }
            var Yi = new WeakMap;

            function Ki(t) {
                return Yi.has(t)
            }

            function Ji(t) {
                return Yi.get(t)
            }

            function $i(t, e) {
                var n = t.tagName,
                    r = t.value;
                if (Gi(t, e)) {
                    var i = t.type;
                    if ("INPUT" === n && ("button" === i || "submit" === i || "reset" === i)) return r;
                    if (!r || "OPTION" === n) return;
                    return ji
                }
                return "OPTION" === n || "SELECT" === n ? t.value : "INPUT" === n || "TEXTAREA" === n ? r : void 0
            }

            function Zi(t) {
                return Boolean(t.changedTouches)
            }

            function Qi(t, e) {
                Array.prototype.forEach.call(t, e)
            }

            function to(t, e) {
                return {
                    data: h({
                        source: t
                    }, e),
                    type: ai,
                    timestamp: Q()
                }
            }

            function eo(t) {
                for (var e = [], n = t; n.parentRule;) {
                    var r = Array.from(n.parentRule.cssRules).indexOf(n);
                    e.unshift(r), n = n.parentRule
                }
                if (n.parentStyleSheet) {
                    var i = Array.from(n.parentStyleSheet.cssRules).indexOf(n);
                    return e.unshift(i), e
                }
            }

            function no(t, e, n) {
                return ro(t, {
                    document: t,
                    parentNodePrivacyLevel: e,
                    serializationContext: n
                })
            }

            function ro(t, e) {
                var n = function(t, e) {
                    switch (t.nodeType) {
                        case t.DOCUMENT_NODE:
                            return function(t, e) {
                                return {
                                    type: li,
                                    childNodes: io(t, e)
                                }
                            }(t, e);
                        case t.DOCUMENT_TYPE_NODE:
                            return {
                                type: pi,
                                name: (n = t).name,
                                publicId: n.publicId,
                                systemId: n.systemId
                            };
                        case t.ELEMENT_NODE:
                            return function(t, e) {
                                var n, r = so(t.tagName),
                                    i = (a = t, "svg" === a.tagName || a instanceof SVGElement || void 0),
                                    o = Hi(zi(t), e.parentNodePrivacyLevel);
                                var a;
                                if (o === Ui.HIDDEN) {
                                    var u = t.getBoundingClientRect(),
                                        s = u.width,
                                        c = u.height;
                                    return {
                                        type: vi,
                                        tagName: r,
                                        attributes: (n = {
                                            rr_width: "".concat(s, "px"),
                                            rr_height: "".concat(c, "px")
                                        }, n[Bi] = qi, n),
                                        childNodes: [],
                                        isSVG: i
                                    }
                                }
                                if (o === Ui.IGNORE) return;
                                var f = function(t, e, n) {
                                        var r;
                                        if (e === Ui.HIDDEN) return {};
                                        for (var i = {}, o = so(t.tagName), a = t.ownerDocument, u = 0; u < t.attributes.length; u += 1) {
                                            var s = t.attributes.item(u).name,
                                                c = oo(t, e, s);
                                            null !== c && (i[s] = c)
                                        }
                                        if (t.value && ("textarea" === o || "select" === o || "option" === o || "input" === o)) {
                                            var f = $i(t, e);
                                            void 0 !== f && (i.value = f)
                                        }
                                        if ("option" === o && e === Ui.ALLOW) {
                                            var d = t;
                                            d.selected && (i.selected = d.selected)
                                        }
                                        if ("link" === o) {
                                            var l = Array.from(a.styleSheets).find((function(e) {
                                                return e.href === t.href
                                            }));
                                            (p = co(l)) && l && (delete i.rel, delete i.href, i._cssText = p)
                                        }
                                        if ("style" === o && t.sheet && !(t.innerText || t.textContent || "").trim().length) {
                                            var p;
                                            (p = co(t.sheet)) && (i._cssText = p)
                                        }
                                        var v, m, h = t;
                                        "input" !== o || "radio" !== h.type && "checkbox" !== h.type || (e === Ui.ALLOW ? i.checked = !!h.checked : Gi(h, e) && (i.checked = ji));
                                        if ("audio" === o || "video" === o) {
                                            var y = t;
                                            i.rr_mediaState = y.paused ? "paused" : "played"
                                        }
                                        switch (n.status) {
                                            case 0:
                                                v = Math.round(t.scrollTop), m = Math.round(t.scrollLeft), (v || m) && n.elementsScrollPositions.set(t, {
                                                    scrollTop: v,
                                                    scrollLeft: m
                                                });
                                                break;
                                            case 1:
                                                n.elementsScrollPositions.has(t) && (v = (r = n.elementsScrollPositions.get(t)).scrollTop, m = r.scrollLeft)
                                        }
                                        m && (i.rr_scrollLeft = m);
                                        v && (i.rr_scrollTop = v);
                                        return i
                                    }(t, o, e.serializationContext),
                                    d = [];
                                if (t.childNodes.length) {
                                    d = io(t, e.parentNodePrivacyLevel === o && e.ignoreWhiteSpace === ("head" === r) ? e : h({}, e, {
                                        parentNodePrivacyLevel: o,
                                        ignoreWhiteSpace: "head" === r
                                    }))
                                }
                                return {
                                    type: vi,
                                    tagName: r,
                                    attributes: f,
                                    childNodes: d,
                                    isSVG: i
                                }
                            }(t, e);
                        case t.TEXT_NODE:
                            return function(t, e) {
                                var n, r = null === (n = t.parentElement) || void 0 === n ? void 0 : n.tagName,
                                    i = Wi(t, e.ignoreWhiteSpace || !1, e.parentNodePrivacyLevel);
                                if (!i) return;
                                return {
                                    type: mi,
                                    textContent: i,
                                    isStyle: "STYLE" === r || void 0
                                }
                            }(t, e);
                        case t.CDATA_SECTION_NODE:
                            return {
                                type: hi,
                                textContent: ""
                            }
                    }
                    var n
                }(t, e);
                if (!n) return null;
                var r = Ji(t) || ao++,
                    i = n;
                return i.id = r,
                    function(t, e) {
                        Yi.set(t, e)
                    }(t, r), e.serializedNodeIds && e.serializedNodeIds.add(r), i
            }

            function io(t, e) {
                var n = [];
                return Qi(t.childNodes, (function(t) {
                    var r = ro(t, e);
                    r && n.push(r)
                })), n
            }

            function oo(t, e, n) {
                if (e === Ui.HIDDEN) return null;
                var r = t.getAttribute(n);
                if (e === Ui.MASK) {
                    var i = t.tagName;
                    switch (n) {
                        case "title":
                        case "alt":
                        case "placeholder":
                            return ji
                    }
                    if (("IMG" === i || "SOURCE" === i) && ("src" === n || "srcset" === n)) return "data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==";
                    if ("A" === i && "href" === n) return ji;
                    if (r && 0 === n.indexOf("data-") && n !== Bi) return ji
                }
                return r && "string" === typeof r && r.length > 1e5 && "data:" === r.slice(0, 5) ? "data:truncated" : r
            }
            var ao = 1;
            var uo = /[^a-z1-6-_]/;

            function so(t) {
                var e = t.toLowerCase().trim();
                return uo.test(e) ? "div" : e
            }

            function co(t) {
                try {
                    var e = t.rules || t.cssRules;
                    return e ? Array.from(e).map(fo).join("") : null
                } catch (n) {
                    return null
                }
            }

            function fo(t) {
                return function(t) {
                    return "styleSheet" in t
                }(t) ? co(t.styleSheet) || "" : t.cssText
            }

            function lo(t) {
                var e = S,
                    n = [];

                function r() {
                    e(), t(n), n = []
                }
                return {
                    addMutations: function(t) {
                        0 === n.length && (e = function(t, e) {
                            if (window.requestIdleCallback) {
                                var n = window.requestIdleCallback(f(t), e);
                                return function() {
                                    return window.cancelIdleCallback(n)
                                }
                            }
                            var r = window.requestAnimationFrame(f(t));
                            return function() {
                                return window.cancelAnimationFrame(r)
                            }
                        }(r, {
                            timeout: 100
                        })), n.push.apply(n, t)
                    },
                    flush: r,
                    stop: function() {
                        e()
                    }
                }
            }

            function po(t, e, n) {
                var r = ue();
                if (!r) return {
                    stop: S
                };
                var i = lo((function(t) {
                        ! function(t, e, n) {
                            var r = t.filter((function(t) {
                                    return document.contains(t.target) && function(t) {
                                        for (var e = t; e;) {
                                            if (!Ki(e)) return !1;
                                            e = e.parentNode
                                        }
                                        return !0
                                    }(t.target) && Vi(t.target, n) !== Ui.HIDDEN
                                })),
                                i = function(t, e) {
                                    for (var n = new Set, r = new Map, i = function(t) {
                                            Qi(t.addedNodes, (function(t) {
                                                n.add(t)
                                            })), Qi(t.removedNodes, (function(e) {
                                                n.has(e) || r.set(e, t.target), n.delete(e)
                                            }))
                                        }, o = 0, a = t; o < a.length; o++) {
                                        i(a[o])
                                    }
                                    var u = Array.from(n);
                                    s = u, s.sort((function(t, e) {
                                        var n = t.compareDocumentPosition(e);
                                        return n & Node.DOCUMENT_POSITION_CONTAINED_BY ? -1 : n & Node.DOCUMENT_POSITION_CONTAINS || n & Node.DOCUMENT_POSITION_FOLLOWING ? 1 : n & Node.DOCUMENT_POSITION_PRECEDING ? -1 : 0
                                    }));
                                    var s;
                                    for (var c = new Set, f = [], d = 0, l = u; d < l.length; d++) {
                                        var p = l[d];
                                        if (!y(p)) {
                                            var v = Vi(p.parentNode, e);
                                            if (v !== Ui.HIDDEN && v !== Ui.IGNORE) {
                                                var m = ro(p, {
                                                    document: document,
                                                    serializedNodeIds: c,
                                                    parentNodePrivacyLevel: v,
                                                    serializationContext: {
                                                        status: 2
                                                    }
                                                });
                                                m && f.push({
                                                    nextId: g(p),
                                                    parentId: Ji(p.parentNode),
                                                    node: m
                                                })
                                            }
                                        }
                                    }
                                    var h = [];
                                    return r.forEach((function(t, e) {
                                        Ki(e) && h.push({
                                            parentId: Ji(t),
                                            id: Ji(e)
                                        })
                                    })), {
                                        adds: f,
                                        removes: h,
                                        hasBeenSerialized: y
                                    };

                                    function y(t) {
                                        return Ki(t) && c.has(Ji(t))
                                    }

                                    function g(t) {
                                        for (var e = t.nextSibling; e;) {
                                            if (Ki(e)) return Ji(e);
                                            e = e.nextSibling
                                        }
                                        return null
                                    }
                                }(r.filter((function(t) {
                                    return "childList" === t.type
                                })), n),
                                o = i.adds,
                                a = i.removes,
                                u = i.hasBeenSerialized,
                                s = function(t, e) {
                                    for (var n, r = [], i = new Set, o = t.filter((function(t) {
                                            return !i.has(t.target) && (i.add(t.target), !0)
                                        })), a = 0, u = o; a < u.length; a++) {
                                        var s = u[a];
                                        if (s.target.textContent !== s.oldValue) {
                                            var c = Vi(s.target.parentNode, e);
                                            c !== Ui.HIDDEN && c !== Ui.IGNORE && r.push({
                                                id: Ji(s.target),
                                                value: null !== (n = Wi(s.target, !1, c)) && void 0 !== n ? n : null
                                            })
                                        }
                                    }
                                    return r
                                }(r.filter((function(t) {
                                    return "characterData" === t.type && !u(t.target)
                                })), n),
                                c = function(t, e) {
                                    for (var n = [], r = new Map, i = t.filter((function(t) {
                                            var e = r.get(t.target);
                                            return !(null === e || void 0 === e ? void 0 : e.has(t.attributeName)) && (e ? e.add(t.attributeName) : r.set(t.target, new Set([t.attributeName])), !0)
                                        })), o = new Map, a = 0, u = i; a < u.length; a++) {
                                        var s = u[a];
                                        if (s.target.getAttribute(s.attributeName) !== s.oldValue) {
                                            var c = Vi(s.target, e),
                                                f = oo(s.target, c, s.attributeName),
                                                d = void 0;
                                            if ("value" === s.attributeName) {
                                                var l = $i(s.target, c);
                                                if (void 0 === l) continue;
                                                d = l
                                            } else d = "string" === typeof f ? f : null;
                                            var p = o.get(s.target);
                                            p || (p = {
                                                id: Ji(s.target),
                                                attributes: {}
                                            }, n.push(p), o.set(s.target, p)), p.attributes[s.attributeName] = d
                                        }
                                    }
                                    return n
                                }(r.filter((function(t) {
                                    return "attributes" === t.type && !u(t.target)
                                })), n);
                            if (!s.length && !c.length && !a.length && !o.length) return;
                            e({
                                adds: o,
                                removes: a,
                                texts: s,
                                attributes: c
                            })
                        }(t.concat(o.takeRecords()), e, n)
                    })),
                    o = new r(f(i.addMutations));
                return o.observe(document, {
                    attributeOldValue: !0,
                    attributes: !0,
                    characterData: !0,
                    characterDataOldValue: !0,
                    childList: !0,
                    subtree: !0
                }), t.onFlush(i.flush), {
                    stop: function() {
                        o.disconnect(), i.stop()
                    }
                }
            }
            var vo = function() {
                function t() {}
                return t.prototype.flush = function() {
                    var t;
                    null === (t = this.flushListener) || void 0 === t || t.call(this)
                }, t.prototype.onFlush = function(t) {
                    this.flushListener = t
                }, t
            }();
            var mo, ho = function(t, e) {
                    var n = window.visualViewport,
                        r = {
                            layoutViewportX: t,
                            layoutViewportY: e,
                            visualViewportX: t,
                            visualViewportY: e
                        };
                    return n ? (! function() {
                        var t = window.visualViewport;
                        return Math.abs(t.pageTop - t.offsetTop - window.scrollY) > 25 || Math.abs(t.pageLeft - t.offsetLeft - window.scrollX) > 25
                    }() ? (r.visualViewportX = Math.round(t - n.offsetLeft), r.visualViewportY = Math.round(e - n.offsetTop)) : (r.layoutViewportX = Math.round(t + n.offsetLeft), r.layoutViewportY = Math.round(e + n.offsetTop)), r) : r
                },
                yo = function() {
                    var t = window.visualViewport;
                    return {
                        scale: t.scale,
                        offsetLeft: t.offsetLeft,
                        offsetTop: t.offsetTop,
                        pageLeft: t.pageLeft,
                        pageTop: t.pageTop,
                        height: t.height,
                        width: t.width
                    }
                };

            function go() {
                var t, e = window.visualViewport;
                return t = e ? e.pageLeft - e.offsetLeft : void 0 !== window.scrollX ? window.scrollX : window.pageXOffset || 0, Math.round(t)
            }

            function bo() {
                var t, e = window.visualViewport;
                return t = e ? e.pageTop - e.offsetTop : void 0 !== window.scrollY ? window.scrollY : window.pageYOffset || 0, Math.round(t)
            }
            var wo = new WeakMap,
                So = 1;

            function To(t) {
                return wo.has(t) || wo.set(t, So++), wo.get(t)
            }

            function Co(t) {
                var e, n, r, i, o, a, u = (e = t.mutationController, n = t.mutationCb, r = t.defaultPrivacyLevel, po(e, n, r).stop),
                    s = function(t) {
                        var e = m(f((function(e) {
                            var n = e.target;
                            if (Ki(n)) {
                                var r = Zi(e) ? e.changedTouches[0] : e,
                                    i = r.clientX,
                                    o = r.clientY,
                                    a = {
                                        id: Ji(n),
                                        timeOffset: 0,
                                        x: i,
                                        y: o
                                    };
                                if (window.visualViewport) {
                                    var u = ho(i, o),
                                        s = u.visualViewportX,
                                        c = u.visualViewportY;
                                    a.x = s, a.y = c
                                }
                                t([a], Zi(e) ? Ci : gi)
                            }
                        })), 50, {
                            trailing: !1
                        }).throttled;
                        return U(document, ["mousemove", "touchmove"], e, {
                            capture: !0,
                            passive: !0
                        }).stop
                    }(t.mousemoveCb),
                    c = function(t, e) {
                        var n = function(n) {
                            var r = n.target;
                            if (Vi(r, e) !== Ui.HIDDEN && Ki(r)) {
                                var i = Zi(n) ? n.changedTouches[0] : n,
                                    o = i.clientX,
                                    a = i.clientY,
                                    u = {
                                        id: Ji(r),
                                        type: Eo[n.type],
                                        x: o,
                                        y: a
                                    };
                                if (window.visualViewport) {
                                    var s = ho(o, a),
                                        c = s.visualViewportX,
                                        f = s.visualViewportY;
                                    u.x = c, u.y = f
                                }
                                var d = h({
                                    id: To(n)
                                }, to(bi, u));
                                t(d)
                            }
                        };
                        return U(document, Object.keys(Eo), n, {
                            capture: !0,
                            passive: !0
                        }).stop
                    }(t.mouseInteractionCb, t.defaultPrivacyLevel),
                    d = function(t, e, n) {
                        var r = m(f((function(r) {
                            var i = r.target;
                            if (i && Vi(i, e) !== Ui.HIDDEN && Ki(i)) {
                                var o = Ji(i),
                                    a = i === document ? {
                                        scrollTop: bo(),
                                        scrollLeft: go()
                                    } : {
                                        scrollTop: Math.round(i.scrollTop),
                                        scrollLeft: Math.round(i.scrollLeft)
                                    };
                                n.set(i, a), t({
                                    id: o,
                                    x: a.scrollLeft,
                                    y: a.scrollTop
                                })
                            }
                        })), 100).throttled;
                        return D(document, "scroll", r, {
                            capture: !0,
                            passive: !0
                        }).stop
                    }(t.scrollCb, t.defaultPrivacyLevel, t.elementsScrollPositions),
                    l = function(t) {
                        return Me().subscribe(t).unsubscribe
                    }(t.viewportResizeCb),
                    p = function(t, e) {
                        var n = new WeakMap;

                        function r(t) {
                            var n = Vi(t, e);
                            if (n !== Ui.HIDDEN) {
                                var r, o = t.type;
                                if ("radio" === o || "checkbox" === o) {
                                    if (Gi(t, n)) return;
                                    r = {
                                        isChecked: t.checked
                                    }
                                } else {
                                    var a = $i(t, n);
                                    if (void 0 === a) return;
                                    r = {
                                        text: a
                                    }
                                }
                                i(t, r);
                                var u = t.name;
                                "radio" === o && u && t.checked && Qi(document.querySelectorAll('input[type="radio"][name="'.concat(u, '"]')), (function(e) {
                                    e !== t && i(e, {
                                        isChecked: !1
                                    })
                                }))
                            }
                        }

                        function i(e, r) {
                            if (Ki(e)) {
                                var i = n.get(e);
                                i && i.text === r.text && i.isChecked === r.isChecked || (n.set(e, r), t(h({
                                    id: Ji(e)
                                }, r)))
                            }
                        }
                        var o = U(document, ["input", "change"], (function(t) {
                                (t.target instanceof HTMLInputElement || t.target instanceof HTMLTextAreaElement || t.target instanceof HTMLSelectElement) && r(t.target)
                            }), {
                                capture: !0,
                                passive: !0
                            }).stop,
                            a = [en(HTMLInputElement.prototype, "value", r), en(HTMLInputElement.prototype, "checked", r), en(HTMLSelectElement.prototype, "value", r), en(HTMLTextAreaElement.prototype, "value", r), en(HTMLSelectElement.prototype, "selectedIndex", r)];
                        return function() {
                            a.forEach((function(t) {
                                return t.stop()
                            })), o()
                        }
                    }(t.inputCb, t.defaultPrivacyLevel),
                    v = function(t, e) {
                        return U(document, ["play", "pause"], (function(n) {
                            var r = n.target;
                            r && Vi(r, e) !== Ui.HIDDEN && Ki(r) && t({
                                id: Ji(r),
                                type: "play" === n.type ? Mi : Di
                            })
                        }), {
                            capture: !0,
                            passive: !0
                        }).stop
                    }(t.mediaInteractionCb, t.defaultPrivacyLevel),
                    y = function(t) {
                        function e(t, e) {
                            t && Ki(t.ownerNode) && e(Ji(t.ownerNode))
                        }
                        var n = [tn(CSSStyleSheet.prototype, "insertRule", {
                            before: function(n, r) {
                                e(this, (function(e) {
                                    return t({
                                        id: e,
                                        adds: [{
                                            rule: n,
                                            index: r
                                        }]
                                    })
                                }))
                            }
                        }), tn(CSSStyleSheet.prototype, "deleteRule", {
                            before: function(n) {
                                e(this, (function(e) {
                                    return t({
                                        id: e,
                                        removes: [{
                                            index: n
                                        }]
                                    })
                                }))
                            }
                        })];
                        "undefined" !== typeof CSSGroupingRule ? r(CSSGroupingRule) : (r(CSSMediaRule), r(CSSSupportsRule));

                        function r(r) {
                            n.push(tn(r.prototype, "insertRule", {
                                before: function(n, r) {
                                    var i = this;
                                    e(this.parentStyleSheet, (function(e) {
                                        var o = eo(i);
                                        o && (o.push(r || 0), t({
                                            id: e,
                                            adds: [{
                                                rule: n,
                                                index: o
                                            }]
                                        }))
                                    }))
                                }
                            }), tn(r.prototype, "deleteRule", {
                                before: function(n) {
                                    var r = this;
                                    e(this.parentStyleSheet, (function(e) {
                                        var i = eo(r);
                                        i && (i.push(n), t({
                                            id: e,
                                            removes: [{
                                                index: i
                                            }]
                                        }))
                                    }))
                                }
                            }))
                        }
                        return function() {
                            return n.forEach((function(t) {
                                return t.stop()
                            }))
                        }
                    }(t.styleSheetCb),
                    g = (i = t.focusCb, U(window, ["focus", "blur"], (function() {
                        i({
                            has_focus: document.hasFocus()
                        })
                    })).stop),
                    b = function(t) {
                        if (!window.visualViewport) return S;
                        var e = m(f((function() {
                                t(yo())
                            })), 200, {
                                trailing: !1
                            }),
                            n = e.throttled,
                            r = e.cancel,
                            i = U(window.visualViewport, ["resize", "scroll"], n, {
                                capture: !0,
                                passive: !0
                            }).stop;
                        return function() {
                            i(), r()
                        }
                    }(t.visualViewportResizeCb),
                    w = (o = t.lifeCycle, a = t.frustrationCb, o.subscribe(10, (function(t) {
                        var e, n, r;
                        "action" === t.rawRumEvent.type && "click" === t.rawRumEvent.action.type && (null === (n = null === (e = t.rawRumEvent.action.frustration) || void 0 === e ? void 0 : e.type) || void 0 === n ? void 0 : n.length) && "events" in t.domainContext && (null === (r = t.domainContext.events) || void 0 === r ? void 0 : r.length) && a({
                            timestamp: t.rawRumEvent.date,
                            type: di,
                            data: {
                                frustrationTypes: t.rawRumEvent.action.frustration.type,
                                recordIds: t.domainContext.events.map((function(t) {
                                    return To(t)
                                }))
                            }
                        })
                    })).unsubscribe);
                return function() {
                    u(), s(), c(), d(), l(), p(), v(), y(), g(), b(), w()
                }
            }
            var Eo = ((mo = {}).mouseup = xi, mo.mousedown = _i, mo.click = Ii, mo.contextmenu = Oi, mo.dblclick = Ai, mo.focus = Ri, mo.blur = Ni, mo.touchstart = Li, mo.touchend = Pi, mo);

            function ko(t) {
                var e = t.emit;
                if (!e) throw new Error("emit function is required");
                var n = new vo,
                    r = function() {
                        var t = new WeakMap;
                        return {
                            set: function(e, n) {
                                (e !== document || document.scrollingElement) && t.set(e === document ? document.scrollingElement : e, n)
                            },
                            get: function(e) {
                                return t.get(e)
                            },
                            has: function(e) {
                                return t.has(e)
                            }
                        }
                    }(),
                    i = function(i, o) {
                        void 0 === i && (i = Q()), void 0 === o && (o = {
                            status: 0,
                            elementsScrollPositions: r
                        }), n.flush();
                        var a = De(),
                            u = a.width,
                            s = a.height;
                        e({
                            data: {
                                height: s,
                                href: window.location.href,
                                width: u
                            },
                            type: ui,
                            timestamp: i
                        }), e({
                            data: {
                                has_focus: document.hasFocus()
                            },
                            type: si,
                            timestamp: i
                        }), e({
                            data: {
                                node: no(document, t.defaultPrivacyLevel, o),
                                initialOffset: {
                                    left: go(),
                                    top: bo()
                                }
                            },
                            type: oi,
                            timestamp: i
                        }), window.visualViewport && e({
                            data: yo(),
                            type: fi,
                            timestamp: i
                        })
                    };
                return i(), {
                    stop: Co({
                        lifeCycle: t.lifeCycle,
                        mutationController: n,
                        elementsScrollPositions: r,
                        defaultPrivacyLevel: t.defaultPrivacyLevel,
                        inputCb: function(t) {
                            return e(to(Ti, t))
                        },
                        mediaInteractionCb: function(t) {
                            return e(to(Ei, t))
                        },
                        mouseInteractionCb: function(t) {
                            return e(t)
                        },
                        mousemoveCb: function(t, n) {
                            return e(to(n, {
                                positions: t
                            }))
                        },
                        mutationCb: function(t) {
                            return e(to(yi, t))
                        },
                        scrollCb: function(t) {
                            return e(to(wi, t))
                        },
                        styleSheetCb: function(t) {
                            return e(to(ki, t))
                        },
                        viewportResizeCb: function(t) {
                            return e(to(Si, t))
                        },
                        frustrationCb: function(t) {
                            return e(t)
                        },
                        focusCb: function(t) {
                            return e({
                                data: t,
                                type: si,
                                timestamp: Q()
                            })
                        },
                        visualViewportResizeCb: function(t) {
                            e({
                                data: t,
                                type: fi,
                                timestamp: Q()
                            })
                        }
                    }),
                    takeSubsequentFullSnapshot: function(t) {
                        return i(t, {
                            status: 1,
                            elementsScrollPositions: r
                        })
                    },
                    flushMutations: function() {
                        return n.flush()
                    }
                }
            }
            var xo;

            function _o(t) {
                return Ao(t).segments_count
            }

            function Io(t) {
                Ao(t).records_count += 1
            }

            function Oo(t) {
                return null === xo || void 0 === xo ? void 0 : xo.get(t)
            }

            function Ao(t) {
                var e;
                return xo || (xo = new Map), xo.has(t) ? e = xo.get(t) : (e = {
                    records_count: 0,
                    segments_count: 0,
                    segments_total_raw_size: 0
                }, xo.set(t, e), xo.size > 10 && function() {
                    if (!xo) return;
                    if (xo.keys) xo.delete(xo.keys().next().value);
                    else {
                        var t = !0;
                        xo.forEach((function(e, n) {
                            t && (xo.delete(n), t = !1)
                        }))
                    }
                }()), e
            }
            var Ro = 0,
                No = function() {
                    function t(t, e, n, r, i, o) {
                        var a = this;
                        this.worker = t, this.isFlushed = !1, this.id = Ro++;
                        var u = e.view.id;
                        this.metadata = h({
                                start: r.timestamp,
                                end: r.timestamp,
                                creation_reason: n,
                                records_count: 1,
                                has_full_snapshot: r.type === oi,
                                index_in_view: _o(u),
                                source: "browser"
                            }, e),
                            function(t) {
                                Ao(t).segments_count += 1
                            }(u), Io(u);
                        var s = f((function(e) {
                            var n = e.data;
                            "errored" !== n.type && "initialized" !== n.type && (n.id === a.id ? (! function(t, e) {
                                Ao(t).segments_total_raw_size += e
                            }(u, n.additionalBytesCount), "flushed" === n.type ? (o(n.result, n.rawBytesCount), t.removeEventListener("message", s)) : i(n.compressedBytesCount)) : n.id > a.id && (t.removeEventListener("message", s), re("Segment did not receive a 'flush' response before being replaced.")))
                        }));
                        t.addEventListener("message", s), this.worker.postMessage({
                            data: '{"records":['.concat(JSON.stringify(r)),
                            id: this.id,
                            action: "write"
                        })
                    }
                    return t.prototype.addRecord = function(t) {
                        var e;
                        this.metadata.start = Math.min(this.metadata.start, t.timestamp), this.metadata.end = Math.max(this.metadata.end, t.timestamp), this.metadata.records_count += 1, Io(this.metadata.view.id), (e = this.metadata).has_full_snapshot || (e.has_full_snapshot = t.type === oi), this.worker.postMessage({
                            data: ",".concat(JSON.stringify(t)),
                            id: this.id,
                            action: "write"
                        })
                    }, t.prototype.flush = function() {
                        this.worker.postMessage({
                            data: "],".concat(JSON.stringify(this.metadata).slice(1), "\n"),
                            id: this.id,
                            action: "flush"
                        }), this.isFlushed = !0
                    }, t
                }(),
                Lo = 6e4;

            function Po(t, e, n, r, i, o) {
                return function(t, e, n, r, i) {
                    void 0 === i && (i = window);
                    var o = {
                            status: 0,
                            nextSegmentCreationReason: "init"
                        },
                        a = t.subscribe(2, (function() {
                            c("view_change")
                        })).unsubscribe,
                        u = t.subscribe(9, (function() {
                            c("before_unload")
                        })).unsubscribe,
                        s = D(i, "visibilitychange", (function() {
                            "hidden" === document.visibilityState && c("visibility_hidden")
                        }), {
                            capture: !0
                        }).stop;

                    function c(t) {
                        1 === o.status && (o.segment.flush(), clearTimeout(o.expirationTimeoutId)), o = t ? {
                            status: 0,
                            nextSegmentCreationReason: t
                        } : {
                            status: 2
                        }
                    }

                    function d(t, i) {
                        var a = e();
                        if (a) {
                            var u = new No(r, a, t, i, (function(t) {
                                !u.isFlushed && t > Lo && c("segment_bytes_limit")
                            }), (function(t, e) {
                                n(t, u.metadata, e)
                            }));
                            o = {
                                status: 1,
                                segment: u,
                                expirationTimeoutId: setTimeout(f((function() {
                                    c("segment_duration_limit")
                                })), 3e4)
                            }
                        }
                    }
                    return {
                        addRecord: function(t) {
                            switch (o.status) {
                                case 0:
                                    d(o.nextSegmentCreationReason, t);
                                    break;
                                case 1:
                                    o.segment.addRecord(t)
                            }
                        },
                        stop: function() {
                            c(), a(), u(), s()
                        }
                    }
                }(t, (function() {
                    return function(t, e, n) {
                        var r = e.findTrackedSession(),
                            i = n.findView();
                        if (!r || !i) return;
                        return {
                            application: {
                                id: t
                            },
                            session: {
                                id: r.id
                            },
                            view: {
                                id: i.id
                            }
                        }
                    }(e, n, r)
                }), i, o)
            }
            var Mo = n("Dpok"),
                Do = {
                    status: 0
                };

            function Uo(t, e) {
                switch (void 0 === e && (e = Mo.a), Do.status) {
                    case 0:
                        Do = {
                                status: 1,
                                callbacks: [t]
                            },
                            function(t) {
                                void 0 === t && (t = Mo.a);
                                try {
                                    var e = t();
                                    e.addEventListener("error", f(Bo)), e.addEventListener("message", f((function(t) {
                                        var n, r = t.data;
                                        "errored" === r.type ? Bo(r.error) : "initialized" === r.type && (n = e, 1 === Do.status && (Do.callbacks.forEach((function(t) {
                                            return t(n)
                                        })), Do = {
                                            status: 3,
                                            worker: n
                                        }))
                                    }))), e.postMessage({
                                        action: "init"
                                    })
                                } catch (n) {
                                    Bo(n)
                                }
                            }(e);
                        break;
                    case 1:
                        Do.callbacks.push(t);
                        break;
                    case 2:
                        t();
                        break;
                    case 3:
                        t(Do.worker)
                }
            }

            function Bo(t) {
                1 === Do.status ? (i.error("Session Replay recording failed to start: an error occurred while creating the Worker:", t), t instanceof Event || t instanceof Error && E(t.message, "Content Security Policy") ? i.error("Please make sure CSP is correctly configured https://docs.datadoghq.com/real_user_monitoring/faq/content_security_policy") : ie(t), Do.callbacks.forEach((function(t) {
                    return t()
                })), Do = {
                    status: 2
                }) : ie(t)
            }

            function qo(t, e, n, r) {
                var i = new FormData;
                i.append("segment", new Blob([e], {
                    type: "application/octet-stream"
                }), "".concat(n.session.id, "-").concat(n.start)), jo(n, (function(t, e) {
                    return i.append(t, e)
                })), i.append("raw_segment_size", r.toString()), t.sendOnExit({
                    data: i,
                    bytesCount: e.byteLength
                })
            }

            function jo(t, e, n) {
                void 0 === n && (n = ""), A(t).forEach((function(t) {
                    var r = t[0],
                        i = t[1];
                    "object" === typeof i && null !== i ? jo(i, e, "".concat(n).concat(r, ".")) : e("".concat(n).concat(r), String(i))
                }))
            }
            var Fo = function(t, e, n) {
                var r = (void 0 === n ? {} : n).ignoreInitIfSyntheticsWillInjectRum,
                    o = void 0 === r || r,
                    a = !1,
                    u = X(),
                    s = X(),
                    l = function() {},
                    v = function() {},
                    m = new Y,
                    y = function(t, e) {
                        void 0 === e && (e = Q()), m.add((function() {
                            return y(t, e)
                        }))
                    },
                    b = function(t, e) {
                        void 0 === e && (e = et()), m.add((function() {
                            return b(t, e)
                        }))
                    },
                    w = function(t, e) {
                        void 0 === e && (e = {
                            context: u.getContext(),
                            user: s.getContext()
                        }), m.add((function() {
                            return w(t, e)
                        }))
                    },
                    S = function(t, e) {
                        void 0 === e && (e = {
                            context: u.getContext(),
                            user: s.getContext()
                        }), m.add((function() {
                            return S(t, e)
                        }))
                    };

                function T(n, r) {
                    var i = t(n, (function() {
                        return {
                            user: s.getContext(),
                            context: u.getContext(),
                            hasReplay: !!e.isRecording() || void 0
                        }
                    }), e, r);
                    b = i.startView, w = i.addAction, S = i.addError, y = i.addTiming, l = i.getInternalContext, m.drain(), e.onRumStart(i.lifeCycle, n, i.session, i.viewContexts)
                }
                var C = f((function(t) {
                    b("object" === typeof t ? t : {
                        name: t
                    })
                }));
                return function(t) {
                    var e = h({
                        version: "4.19.0",
                        onReady: function(t) {
                            t()
                        }
                    }, t);
                    return Object.defineProperty(e, "_setDebug", {
                        get: function() {
                            return c
                        },
                        enumerable: !1
                    }), e
                }({
                    init: f((function(t) {
                        if (!o || !ft()) {
                            if (lt()) t = function(t) {
                                return h({}, t, {
                                    applicationId: "00000000-aaaa-0000-aaaa-000000000000",
                                    clientToken: "empty",
                                    sampleRate: 100
                                })
                            }(t);
                            else if (! function(t) {
                                    if (! function(t) {
                                            if (void 0 === document.cookie || null === document.cookie) return !1;
                                            try {
                                                var e = "dd_cookie_test_".concat(g()),
                                                    n = "test";
                                                ut(e, n, p, t);
                                                var r = st(e) === n;
                                                return ct(e, t), r
                                            } catch (o) {
                                                return i.error(o), !1
                                            }
                                        }(Kt(t))) return i.warn("Cookies are not authorized, we will not send any data."), !1;
                                    if ("file:" === window.location.protocol) return i.error("Execution is not allowed in the current context."), !1;
                                    return !0
                                }(t)) return;
                            if (function(t) {
                                    if (a) return t.silentMultipleInit || i.error("DD_RUM is already initialized."), !1;
                                    return !0
                                }(t)) {
                                var e = function(t) {
                                    var e, n, r;
                                    if (t.applicationId) {
                                        var o = null !== (e = t.premiumSampleRate) && void 0 !== e ? e : t.replaySampleRate;
                                        if (void 0 === o || _(o))
                                            if (void 0 === t.tracingSampleRate || _(t.tracingSampleRate)) {
                                                if (void 0 !== t.allowedTracingOrigins) {
                                                    if (!Array.isArray(t.allowedTracingOrigins)) return void i.error("Allowed Tracing Origins should be an array");
                                                    if (0 !== t.allowedTracingOrigins.length && void 0 === t.service) return void i.error("Service need to be configured when tracing is enabled")
                                                }
                                                if (void 0 === t.excludedActivityUrls || Array.isArray(t.excludedActivityUrls)) {
                                                    var a = Yt(t);
                                                    if (a) {
                                                        var u, s, c = !!t.trackFrustrations;
                                                        return h({
                                                            applicationId: t.applicationId,
                                                            version: t.version,
                                                            actionNameAttribute: t.actionNameAttribute,
                                                            premiumSampleRate: null !== o && void 0 !== o ? o : 100,
                                                            allowedTracingOrigins: null !== (n = t.allowedTracingOrigins) && void 0 !== n ? n : [],
                                                            tracingSampleRate: t.tracingSampleRate,
                                                            excludedActivityUrls: null !== (r = t.excludedActivityUrls) && void 0 !== r ? r : [],
                                                            trackInteractions: !!t.trackInteractions || c,
                                                            trackFrustrations: c,
                                                            trackViewsManually: !!t.trackViewsManually,
                                                            defaultPrivacyLevel: (u = Wt, s = t.defaultPrivacyLevel, Object.keys(u).some((function(t) {
                                                                return u[t] === s
                                                            })) ? t.defaultPrivacyLevel : Wt.MASK_USER_INPUT)
                                                        }, a)
                                                    }
                                                } else i.error("Excluded Activity Urls should be an array")
                                            } else i.error("Tracing Sample Rate should be a number between 0 and 100");
                                        else i.error("Premium Sample Rate should be a number between 0 and 100")
                                    } else i.error("Application ID is not configured, no RUM data will be collected.")
                                }(t);
                                if (e) {
                                    if (e.trackViewsManually) {
                                        var n = m;
                                        m = new Y, b = function(t) {
                                            T(e, t)
                                        }, n.drain()
                                    } else T(e);
                                    v = function() {
                                        return V(t)
                                    }, a = !0
                                }
                            }
                        }
                    })),
                    addRumGlobalContext: f(u.add),
                    setGlobalContextProperty: f(u.setContextProperty),
                    removeRumGlobalContext: f(u.remove),
                    removeGlobalContextProperty: f(u.removeContextProperty),
                    getRumGlobalContext: f(u.get),
                    getGlobalContext: f(u.getContext),
                    setRumGlobalContext: f(u.set),
                    setGlobalContext: f(u.setContext),
                    clearGlobalContext: f(u.clearContext),
                    getInternalContext: f((function(t) {
                        return l(t)
                    })),
                    getInitConfiguration: f((function() {
                        return v()
                    })),
                    addAction: f((function(t, e) {
                        w({
                            name: t,
                            context: V(e),
                            startClocks: et(),
                            type: "custom"
                        })
                    })),
                    addError: function(t, e) {
                        var n = Pt();
                        d((function() {
                            S({
                                error: t,
                                handlingStack: n,
                                context: V(e),
                                startClocks: et()
                            })
                        }))
                    },
                    addTiming: f((function(t, e) {
                        y(t, e)
                    })),
                    setUser: f((function(t) {
                        "object" === typeof t && t ? s.setContext(E(t)) : i.error("Unsupported user:", t)
                    })),
                    getUser: f(s.getContext),
                    setUserProperty: f((function(t, e) {
                        var n, r = E((n = {}, n[t] = e, n))[t];
                        s.setContextProperty(t, r)
                    })),
                    removeUserProperty: f(s.removeContextProperty),
                    removeUser: f(s.clearContext),
                    clearUser: f(s.clearContext),
                    startView: C,
                    startSessionReplayRecording: f(e.start),
                    stopSessionReplayRecording: f(e.stop)
                });

                function E(t) {
                    var e = h(t, {});
                    return "id" in e && (e.id = String(e.id)), "name" in e && (e.name = String(e.name)), "email" in e && (e.email = String(e.email)), e
                }
            }((function(t, e, n, r) {
                var i = new Ye,
                    o = function(t) {
                        var e = ne(t);
                        if (lt()) {
                            var n = dt();
                            e.observable.subscribe((function(t) {
                                return n.send("internal_telemetry", t)
                            }))
                        }
                        return e
                    }(t);
                o.setContextProvider((function() {
                    var e, n;
                    return {
                        application: {
                            id: t.applicationId
                        },
                        session: {
                            id: null === (e = u.findTrackedSession()) || void 0 === e ? void 0 : e.id
                        },
                        view: {
                            id: null === (n = l.findView()) || void 0 === n ? void 0 : n.id
                        },
                        action: {
                            id: m.findActionId()
                        }
                    }
                }));
                var a = function(t) {
                    i.notify(12, {
                        error: t
                    })
                };
                lt() ? function(t) {
                    var e = dt();
                    t.subscribe(11, (function(t) {
                        e.send("rum", t)
                    }))
                }(i) : ri(t, i, o.observable, a);
                var u = lt() ? function() {
                        var t = {
                            id: "00000000-aaaa-0000-aaaa-000000000000",
                            hasPremiumPlan: !0,
                            hasLitePlan: !1
                        };
                        return {
                            findTrackedSession: function() {
                                return t
                            }
                        }
                    }() : Hr(t, i),
                    s = function() {
                        var t = ue(),
                            e = new Jt((function() {
                                if (t) {
                                    var n = new t(f((function() {
                                        return e.notify()
                                    })));
                                    return n.observe(document, {
                                            attributes: !0,
                                            characterData: !0,
                                            childList: !0,
                                            subtree: !0
                                        }),
                                        function() {
                                            return n.disconnect()
                                        }
                                }
                            }));
                        return e
                    }(),
                    c = ii(location),
                    d = function(t, e, n, r, i, o, a, u) {
                        var s = function(t) {
                                var e = new Ze(144e5);
                                return t.subscribe(2, (function(t) {
                                    e.add(function(t) {
                                        return {
                                            service: t.service,
                                            version: t.version,
                                            id: t.id,
                                            name: t.name
                                        }
                                    }(t), t.startClocks.relative)
                                })), t.subscribe(4, (function(t) {
                                    var n = t.endClocks;
                                    e.closeActive(n.relative)
                                })), t.subscribe(8, (function() {
                                    e.reset()
                                })), {
                                    findView: function(t) {
                                        return e.find(t)
                                    },
                                    stop: function() {
                                        e.stop()
                                    }
                                }
                            }(t),
                            c = function(t, e, n) {
                                var r, i = new Ze(144e5);
                                t.subscribe(4, (function(t) {
                                    var e = t.endClocks;
                                    i.closeActive(e.relative)
                                })), t.subscribe(2, (function(t) {
                                    var e = t.startClocks,
                                        o = n.href;
                                    i.add(a({
                                        url: o,
                                        referrer: r || document.referrer
                                    }), e.relative), r = o
                                }));
                                var o = e.subscribe((function(t) {
                                    var e = t.newLocation,
                                        n = i.find();
                                    if (n) {
                                        var r = tt();
                                        i.closeActive(r), i.add(a({
                                            url: e.href,
                                            referrer: n.referrer
                                        }), r)
                                    }
                                }));

                                function a(t) {
                                    return {
                                        url: t.url,
                                        referrer: t.referrer
                                    }
                                }
                                return {
                                    findUrl: function(t) {
                                        return i.find(t)
                                    },
                                    stop: function() {
                                        o.unsubscribe(), i.stop()
                                    }
                                }
                            }(t, i, n),
                            f = Ve(),
                            d = function(t, e, n, r) {
                                t.subscribe(1, (function(e) {
                                    return t.notify(10, $n(e, r))
                                }));
                                var i = {
                                    findActionId: S
                                };
                                return n.trackInteractions && (i = Kn(t, e, n).actionContexts), {
                                    addAction: function(e, n) {
                                        t.notify(10, h({
                                            savedCommonContext: n
                                        }, $n(e, r)))
                                    },
                                    actionContexts: i
                                }
                            }(t, o, e, f),
                            l = d.addAction,
                            p = d.actionContexts;
                        return je(e, t, r, s, c, p, a, u), {
                            viewContexts: s,
                            foregroundContexts: f,
                            urlContexts: c,
                            addAction: l,
                            actionContexts: p,
                            stop: function() {
                                s.stop(), f.stop()
                            }
                        }
                    }(i, t, location, u, c, s, e, a),
                    l = d.viewContexts,
                    p = d.foregroundContexts,
                    v = d.urlContexts,
                    m = d.actionContexts,
                    y = d.addAction;
                ! function(t, e) {
                    t.subscribe(0, (function(n) {
                        for (var r = 0, i = n; r < i.length; r++) {
                            var o = i[r];
                            if ("longtask" !== o.entryType) break;
                            var a = e.findTrackedSession(o.startTime);
                            if (!a || a.hasLitePlan) break;
                            var u = K(o.startTime),
                                s = {
                                    date: u.timeStamp,
                                    long_task: {
                                        id: g(),
                                        duration: $(o.duration)
                                    },
                                    type: "long_task"
                                };
                            t.notify(10, {
                                rawRumEvent: s,
                                startTime: u.relative,
                                domainContext: {
                                    performanceEntry: o.toJSON()
                                }
                            })
                        }
                    }))
                }(i, u), pr(i, t);
                var b = kr(i, t, location, s, c, p, n, r),
                    w = b.addTiming,
                    T = b.startView,
                    C = fr(i, p).addError;
                yn(i, t, u), _e(i, t);
                var E = function(t, e, n, r, i) {
                    return {
                        get: function(o) {
                            var a = n.findView(o),
                                u = i.findUrl(o),
                                s = e.findTrackedSession(o);
                            if (s && a && u) {
                                var c = r.findActionId(o);
                                return {
                                    application_id: t,
                                    session_id: s.id,
                                    user_action: c ? {
                                        id: c
                                    } : void 0,
                                    view: {
                                        id: a.id,
                                        name: a.name,
                                        referrer: u.referrer,
                                        url: u.url
                                    }
                                }
                            }
                        }
                    }
                }(t.applicationId, u, l, m, v);
                return {
                    addAction: y,
                    addError: C,
                    addTiming: w,
                    startView: T,
                    lifeCycle: i,
                    viewContexts: l,
                    session: u,
                    getInternalContext: E.get
                }
            }), function(t, e) {
                if (void 0 === e && (e = Uo), lt() || "function" !== typeof Array.from || "function" !== typeof CSSSupportsRule) return {
                    start: S,
                    stop: S,
                    getReplayStats: function() {},
                    onRumStart: S,
                    isRecording: function() {
                        return !1
                    }
                };
                var n = {
                        status: 0
                    },
                    r = function() {
                        n = {
                            status: 1
                        }
                    },
                    i = function() {
                        n = {
                            status: 0
                        }
                    };
                return {
                    start: function() {
                        return r()
                    },
                    stop: function() {
                        return i()
                    },
                    getReplayStats: Oo,
                    onRumStart: function(o, a, u, s) {
                        o.subscribe(7, (function() {
                            2 !== n.status && 3 !== n.status || (i(), n = {
                                status: 1
                            })
                        })), o.subscribe(8, (function() {
                            1 === n.status && r()
                        })), r = function() {
                            var r = u.findTrackedSession();
                            r && r.hasPremiumPlan ? 2 !== n.status && 3 !== n.status && (n = {
                                status: 2
                            }, q("interactive", (function() {
                                2 === n.status && e((function(e) {
                                    if (2 === n.status)
                                        if (e) {
                                            var r = t(o, a, u, s, e).stop;
                                            n = {
                                                status: 3,
                                                stopRecording: r
                                            }
                                        } else n = {
                                            status: 0
                                        }
                                }))
                            }))) : n = {
                                status: 1
                            }
                        }, i = function() {
                            0 !== n.status && (3 === n.status && n.stopRecording(), n = {
                                status: 0
                            })
                        }, 1 === n.status && r()
                    },
                    isRecording: function() {
                        return 3 === n.status
                    }
                }
            }((function(t, e, n, r, i, o) {
                var a = o || Qr(e.sessionReplayEndpointBuilder, Lo, (function(e) {
                        t.notify(12, {
                            error: e
                        })
                    })),
                    u = Po(t, e.applicationId, n, r, (function(t, e, n) {
                        return qo(a, t, e, n)
                    }), i),
                    s = u.addRecord,
                    c = u.stop,
                    f = ko({
                        emit: s,
                        defaultPrivacyLevel: e.defaultPrivacyLevel,
                        lifeCycle: t
                    }),
                    d = f.stop,
                    l = f.takeSubsequentFullSnapshot,
                    p = f.flushMutations,
                    v = t.subscribe(4, (function() {
                        p(), s({
                            timestamp: Q(),
                            type: ci
                        })
                    })).unsubscribe,
                    m = t.subscribe(2, (function(t) {
                        l(t.startClocks.timeStamp)
                    })).unsubscribe;
                return {
                    stop: function() {
                        v(), m(), d(), c()
                    }
                }
            })));
            ! function(t, e, n) {
                var r = t[e];
                t[e] = n, r && r.q && r.q.forEach((function(t) {
                    return o(t, "onReady callback threw an error:")()
                }))
            }(N(), "DD_RUM", Fo)
        },
        EeD0: function(t, e, n) {
            "use strict";
            n.r(e),
                function(t) {
                    var e = n("8+Th"),
                        r = n("aI3+"),
                        i = t.env.SENTRY_DSN || t.env.NEXT_PUBLIC_SENTRY_DSN;
                    e.init({
                        dsn: i || "https://0a9f00c4a3c746ce8aac9e2c5e612674@o916138.ingest.sentry.io/6123979",
                        integrations: [new r.a],
                        tracesSampleRate: 0,
                        release: t.env.CF_REVISION
                    })
                }.call(this, n("8oxB"))
        },
        GcxT: function(t, e, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function() {
                return n("1TCz")
            }])
        },
        IdUi: function(t, e, n) {
            var r = n("DUL6").datadogRum;
            t.exports = {
                init: function() {
                    r.init({
                        applicationId: "dc71d1b6-3891-4ba9-bf53-78e06463ef0a",
                        clientToken: "pub45347c95079698d9d8af2edbd0df0d8c",
                        site: "datadoghq.eu",
                        service: "homepage",
                        env: "production",
                        sampleRate: 1,
                        premiumSampleRate: 0,
                        trackInteractions: !0,
                        trackFrustrations: !0,
                        trackResources: !0,
                        trackSessionAcrossSubdomains: !0
                    })
                }
            }
        },
        Pi13: function(t, e, n) {
            "use strict";
            var r = n("AroE")(n("dhJC")),
                i = n("yAMK"),
                o = n("87MR");
            t.exports = {
                collect: function(t) {
                    var e = t.label,
                        n = t.name,
                        a = t.value,
                        u = (0, r.default)(t, ["label", "name", "value"]);
                    (0, o.trackEvent)(i.CLIENT_PERFORMANCE_MEASUREMENT, {
                        kind: n,
                        info1: e,
                        value: a,
                        data: u
                    })
                }
            }
        },
        "Tj/8": function(t, e, n) {},
        j36g: function(t, e, n) {
            (function(t) {
                ("undefined" !== typeof window ? window : "undefined" !== typeof t ? t : "undefined" !== typeof self ? self : {}).SENTRY_RELEASE = {
                    id: "6314c970e278e953eb87626cd018cc7752843141"
                }
            }).call(this, n("ntbh"))
        }
    },
    [
        [4, 4, 3, 54, 2, 7, 8, 10, 9]
    ]
]);
//# sourceMappingURL=_app-f96739ba18e3d896558a.js.map