(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [15], {
        AYhQ: function(t, e, n) {
            var o, i;
            void 0 === (i = "function" === typeof(o = function(t, e, n) {
                return function(t, e) {
                    "use strict";
                    var n = e || {},
                        o = n.aggressive || !1,
                        i = d(n.sensitivity, 20),
                        r = d(n.timer, 1e3),
                        c = d(n.delay, 0),
                        a = n.callback || function() {},
                        s = h(n.cookieExpire) || "",
                        u = n.cookieDomain ? ";domain=" + n.cookieDomain : "",
                        p = n.cookieName ? n.cookieName : "viewedOuibounceModal",
                        l = !0 === n.sitewide ? ";path=/" : "",
                        x = null,
                        f = document.documentElement;

                    function d(t, e) {
                        return "undefined" === typeof t ? e : t
                    }

                    function h(t) {
                        var e = 24 * t * 60 * 60 * 1e3,
                            n = new Date;
                        return n.setTime(n.getTime() + e), "; expires=" + n.toUTCString()
                    }

                    function b() {
                        _() || (f.addEventListener("mouseleave", j), f.addEventListener("mouseenter", m), f.addEventListener("keydown", v))
                    }

                    function j(t) {
                        t.clientY > i || (x = setTimeout(k, c))
                    }

                    function m() {
                        x && (clearTimeout(x), x = null)
                    }
                    setTimeout(b, r);
                    var g = !1;

                    function v(t) {
                        g || t.metaKey && 76 === t.keyCode && (g = !0, x = setTimeout(k, c))
                    }

                    function O(t, e) {
                        return y()[t] === e
                    }

                    function y() {
                        for (var t = document.cookie.split("; "), e = {}, n = t.length - 1; n >= 0; n--) {
                            var o = t[n].split("=");
                            e[o[0]] = o[1]
                        }
                        return e
                    }

                    function _() {
                        return O(p, "true") && !o
                    }

                    function k() {
                        _() || (t && (t.style.display = "block"), a(), w())
                    }

                    function w(t) {
                        var e = t || {};
                        "undefined" !== typeof e.cookieExpire && (s = h(e.cookieExpire)), !0 === e.sitewide && (l = ";path=/"), "undefined" !== typeof e.cookieDomain && (u = ";domain=" + e.cookieDomain), "undefined" !== typeof e.cookieName && (p = e.cookieName), document.cookie = p + "=true" + s + u + l, f.removeEventListener("mouseleave", j), f.removeEventListener("mouseenter", m), f.removeEventListener("keydown", v)
                    }
                    return {
                        fire: k,
                        disable: w,
                        isDisabled: _
                    }
                }
            }) ? o.call(e, n, e, t) : o) || (t.exports = i)
        },
        cSW2: function(t, e, n) {
            "use strict";
            var o = n("cpVT"),
                i = n("H+61"),
                r = n("UlJF"),
                c = n("7LId"),
                a = n("VIvw"),
                s = n("iHvq"),
                u = n("q1tI"),
                p = n("WJer"),
                l = n("+Css"),
                x = n("AYhQ"),
                f = n.n(x),
                d = n("87MR"),
                h = n("yAMK"),
                b = n("PkAx"),
                j = n("1BgC"),
                m = n("UmnM"),
                g = n("MX0m"),
                v = n.n(g),
                O = n("xwfA"),
                y = n("SQRZ"),
                _ = [".modal-background.jsx-3924909682{position:fixed;width:100%;height:100%;background-color:".concat(O.a.black, ";opacity:0.9;top:0;left:0;z-index:").concat(y.h, ";}")];
            _.__hash = "3924909682";
            var k = _,
                w = n("nKUr"),
                P = function(t) {
                    var e = t.onClick;
                    return Object(w.jsx)("div", {
                        onClick: e,
                        className: "jsx-".concat(k.__hash) + " modal-background",
                        children: Object(w.jsx)(v.a, {
                            id: k.__hash,
                            children: k
                        })
                    })
                },
                E = n("S1kh"),
                T = n("l/Z5"),
                C = n("bmYG"),
                D = [".header-text.jsx-282370729{margin-bottom:16px;}"];
            D.__hash = "282370729";
            var N = [".exit-popup-signup .footer-text{cursor:pointer;color:#e6e6e6;}", ".exit-popup-signup .exit-popup-signup-box{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}", ".exit-popup-signup .exit-popup-signup-box .signup-form{margin-bottom:16px;margin-top:0;}", ".exit-popup-signup .exit-popup-signup-box .signup-input{height:56px;width:224px;padding:0 24px;border-radius:50px 0 0 50px;border:1px solid transparent;margin-right:0;color:".concat(O.a.black, ";vertical-align:bottom;font-size:0.875rem;}"), ".exit-popup-signup .exit-popup-signup-box .signup-input:focus{outline:0;}", ".exit-popup-signup .exit-popup-signup-box .signup-button{height:56px;min-width:200px;background:#f4ce2f;border-radius:0 50px 50px 0;border:1px solid transparent;padding:0 10px;color:#333;font-size:0.875rem;vertical-align:bottom;}", ".exit-popup-signup .exit-popup-signup-box .signup-button:hover{background:#f3c817;border:#f4ce2f;}", "@media (max-width:".concat(C.y, "){.exit-popup-signup .exit-popup-signup-box .signup-form-core-component-wrapper form{-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.exit-popup-signup .exit-popup-signup-box .signup-form-core-component-wrapper form .signup-button-wrapper{width:auto;padding:8px 0 16px 0;}}")];

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
                    var n, o = Object(s.default)(t);
                    if (e) {
                        var i = Object(s.default)(this).constructor;
                        n = Reflect.construct(o, arguments, i)
                    } else n = o.apply(this, arguments);
                    return Object(a.default)(this, n)
                }
            }
            N.__hash = "151150442";
            var R = function(t) {
                Object(c.default)(n, t);
                var e = I(n);

                function n(t) {
                    var o;
                    return Object(i.default)(this, n), (o = e.call(this, t)).state = {
                        value: ""
                    }, o.onInputChange = o.onInputChange.bind(Object(l.a)(o)), o
                }
                return Object(r.default)(n, [{
                    key: "onInputChange",
                    value: function(t) {
                        var e = t.target.value.value;
                        this.setState({
                            value: e
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = this.props,
                            e = t.headerText,
                            n = t.inputPlaceholder,
                            o = t.buttonText,
                            i = t.footerText,
                            r = t.origin,
                            c = t.onClickFooterText;
                        this.state.value;
                        return Object(w.jsxs)("div", {
                            className: "jsx-".concat(D.__hash, " jsx-").concat(N.__hash) + " exit-popup-signup",
                            children: [e && Object(w.jsx)("div", {
                                className: "jsx-".concat(D.__hash, " jsx-").concat(N.__hash) + " header-text",
                                children: e
                            }), Object(w.jsx)("div", {
                                className: "jsx-".concat(D.__hash, " jsx-").concat(N.__hash) + " exit-popup-signup-box",
                                children: Object(w.jsx)(E.a, {
                                    placeholder: n,
                                    ctaText: o,
                                    useCtaText: !!o,
                                    origin: r,
                                    forceDefaultForm: !0
                                })
                            }), i && Object(w.jsx)("div", {
                                onClick: c,
                                className: "jsx-".concat(D.__hash, " jsx-").concat(N.__hash) + " footer-text",
                                children: i
                            }), Object(w.jsx)(v.a, {
                                id: D.__hash,
                                children: D
                            }), Object(w.jsx)(v.a, {
                                id: N.__hash,
                                children: N
                            })]
                        })
                    }
                }]), n
            }(u.PureComponent);
            R.defaultProps = {
                headerText: "Join <monday-paying-companies />+ teams who are passionate about monday.com",
                buttonText: "Get free access now",
                inputPlaceholder: "Enter your work email",
                footerText: "No thanks"
            };
            var S = [".exit-popup-content-component.jsx-1919072357{position:fixed;z-index:".concat(y.h + 1, ";left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:720px;padding:56px 40px 40px 40px;border-radius:4px;background:#333;color:#fff;text-align:center;}"), ".exit-popup-content-component.jsx-1919072357 .content-title.jsx-1919072357{font-size:3vw;font-weight:500;margin:0;}", ".exit-popup-content-component.jsx-1919072357 .content-subtitle.jsx-1919072357{font-size:1.2vw;margin-bottom:56px;}"];
            S.__hash = "1919072357";
            var L = [".exit-popup-close.jsx-2011702370{position:absolute;top:0;right:0;width:60px;height:60px;background:linear-gradient(45deg,#787878 0%,#787878 50%,#343434 50%,#222 61%);border-radius:0px 0px 0px 5px;}", ".exit-popup-close.jsx-2011702370 .x-button.jsx-2011702370{position:absolute;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);top:-4px;right:4px;line-height:1;font-size:2.25rem;color:#787878;-webkit-transition:color 0.1s ease-in-out;transition:color 0.1s ease-in-out;-webkit-text-decoration:none;text-decoration:none;cursor:pointer;}", ".exit-popup-close.jsx-2011702370 .x-button.jsx-2011702370:hover,.exit-popup-close.jsx-2011702370 .x-button.jsx-2011702370:active,.exit-popup-close.jsx-2011702370 .x-button.jsx-2011702370:focus{color:#c4c4c4;-webkit-text-decoration:none;text-decoration:none;}"];

            function A(t) {
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
                        var i = Object(s.default)(this).constructor;
                        n = Reflect.construct(o, arguments, i)
                    } else n = o.apply(this, arguments);
                    return Object(a.default)(this, n)
                }
            }
            L.__hash = "2011702370";
            var M = function(t) {
                Object(c.default)(n, t);
                var e = A(n);

                function n() {
                    return Object(i.default)(this, n), e.apply(this, arguments)
                }
                return Object(r.default)(n, [{
                    key: "render",
                    value: function() {
                        var t = this.props,
                            e = t.title,
                            n = t.subtitle,
                            o = t.signupHeaderText,
                            i = t.singupInputPlaceholder,
                            r = t.signupButtonText,
                            c = t.signupFooterText,
                            a = t.onClose,
                            s = t.origin;
                        return Object(w.jsxs)("div", {
                            className: "jsx-".concat(S.__hash, " jsx-").concat(L.__hash) + " exit-popup-content-component",
                            children: [Object(w.jsx)("div", {
                                className: "jsx-".concat(S.__hash, " jsx-").concat(L.__hash) + " exit-popup-close",
                                children: Object(w.jsx)("a", {
                                    rel: "nofollow",
                                    onClick: a,
                                    className: "jsx-".concat(S.__hash, " jsx-").concat(L.__hash) + " x-button pointer tc",
                                    children: "+"
                                })
                            }), Object(w.jsx)("h3", {
                                className: "jsx-".concat(S.__hash, " jsx-").concat(L.__hash) + " content-title",
                                children: e
                            }), Object(w.jsx)("p", {
                                className: "jsx-".concat(S.__hash, " jsx-").concat(L.__hash) + " content-subtitle",
                                children: n
                            }), Object(w.jsx)(R, {
                                headerText: o,
                                inputPlaceholder: i,
                                buttonText: r,
                                footerText: c,
                                onClickFooterText: a,
                                origin: s
                            }), Object(w.jsx)(v.a, {
                                id: S.__hash,
                                children: S
                            }), Object(w.jsx)(v.a, {
                                id: L.__hash,
                                children: L
                            })]
                        })
                    }
                }]), n
            }(u.PureComponent);

            function U(t) {
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
                        var i = Object(s.default)(this).constructor;
                        n = Reflect.construct(o, arguments, i)
                    } else n = o.apply(this, arguments);
                    return Object(a.default)(this, n)
                }
            }
            var z = function(t) {
                Object(c.default)(n, t);
                var e = U(n);

                function n(t) {
                    var o;
                    return Object(i.default)(this, n), (o = e.call(this, t)).state = {
                        isOpen: !1
                    }, o._ouibounce = null, o.onExitIntent = o.onExitIntent.bind(Object(l.a)(o)), o.onClose = o.onClose.bind(Object(l.a)(o)), o
                }
                return Object(r.default)(n, [{
                    key: "componentDidMount",
                    value: function() {
                        this.initOuibounce()
                    }
                }, {
                    key: "initOuibounce",
                    value: function() {
                        var t = this.props,
                            e = t.timer,
                            n = t.aggressive,
                            o = t.sensitivity,
                            i = t.delay,
                            r = t.cookieExpire,
                            c = t.cookieDomain,
                            a = t.cookieName;
                        this._ouibounce = f()(!1, {
                            timer: e,
                            aggressive: n,
                            sensitivity: o,
                            delay: i,
                            cookieExpire: r,
                            cookieDomain: c,
                            cookieName: a,
                            callback: this.onExitIntent
                        })
                    }
                }, {
                    key: "onExitIntent",
                    value: function() {
                        var t = this.props.abTests;
                        Object(m.shouldSeeReviveExitPopupAbTest)(t, !0) && (this.props.onExitIntentCallback && this.props.onExitIntentCallback(), this.setState({
                            isOpen: !0
                        }), Object(d.trackEvent)(h.EXIT_POPUP_OPEN))
                    }
                }, {
                    key: "onClose",
                    value: function() {
                        this.props.onCloseExitPopupCallback && this.props.onCloseExitPopupCallback(), this.setState({
                            isOpen: !1
                        }), Object(d.trackEvent)(h.EXIT_POPUP_CLOSE)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = this.state.isOpen,
                            e = this.props,
                            n = e.title,
                            o = e.subtitle,
                            i = e.signupConfig,
                            r = e.translate,
                            c = e.translateWithParam,
                            a = e.localeId,
                            s = n || r("exitPopup.title"),
                            u = o || r("exitPopup.subtitle"),
                            p = i && i.headerText || c("exitPopup.signupTitle", Object(T.a)(a)),
                            l = i && i.inputPlaceholder || r("exitPopup.signupInputPlaceholder"),
                            x = i && i.buttonText || r("exitPopup.signupButtonText"),
                            f = i && i.footerText || r("exitPopup.footerText");
                        return t ? Object(w.jsxs)("div", {
                            className: "exit-popup-overlay",
                            children: [Object(w.jsx)(P, {}), Object(w.jsx)(M, {
                                title: s,
                                subtitle: u,
                                signupHeaderText: p,
                                singupInputPlaceholder: l,
                                signupButtonText: x,
                                signupFooterText: f,
                                onClose: this.onClose,
                                origin: "hp_exit_intent_modal"
                            })]
                        }) : Object(w.jsx)("div", {})
                    }
                }]), n
            }(u.PureComponent);
            z.defaultProps = {
                timer: 100,
                aggressive: !1,
                sensitivity: 5,
                delay: 200,
                cookieExpire: 30,
                cookieDomain: ".monday.com",
                cookieName: j.VIEWED_OUI_BOUNCE_MODAL_COOKIE
            };
            var F = Object(b.b)(Object(p.b)(z)),
                B = n("Tddi"),
                H = n("eZOO"),
                J = n.n(H);

            function K(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    e && (o = o.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function W(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? K(Object(n), !0).forEach((function(e) {
                        Object(o.default)(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : K(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function V(t) {
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
                        var i = Object(s.default)(this).constructor;
                        n = Reflect.construct(o, arguments, i)
                    } else n = o.apply(this, arguments);
                    return Object(a.default)(this, n)
                }
            }
            var Y = function(t) {
                Object(c.default)(n, t);
                var e = V(n);

                function n() {
                    return Object(i.default)(this, n), e.apply(this, arguments)
                }
                return Object(r.default)(n, [{
                    key: "componentDidMount",
                    value: function() {
                        Object(B.b)(J.a.SHOW_COOKIEHUB_DIALOG_EVENT_NAME)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = this.props,
                            e = t.exitPopup,
                            n = t.exitPopupConfig;
                        return Object(w.jsx)(u.Fragment, {
                            children: e && Object(w.jsx)(F, W({}, n))
                        })
                    }
                }]), n
            }(u.PureComponent);
            e.a = Object(b.b)(Object(p.b)(Y))
        }
    }
]);
//# sourceMappingURL=38f90f0a4293be6573d0f5a84a4ad771351dd6c0.d2e86e3a5547469926ca.js.map