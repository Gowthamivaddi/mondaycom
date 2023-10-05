(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [17], {
        "/55W": function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n("cpVT"),
                o = n("H+61"),
                a = n("UlJF"),
                i = n("7LId"),
                c = n("VIvw"),
                s = n("iHvq"),
                d = n("MX0m"),
                u = n.n(d),
                p = n("q1tI"),
                l = n("bmYG"),
                m = [".base-header-component.jsx-308082724 .desktop-wrapper.jsx-308082724{display:block;}", ".base-header-component.jsx-308082724 .mobile-wrapper.jsx-308082724{display:none;}", "@media (max-width:".concat(l.e, "){.base-header-component.jsx-308082724 .desktop-wrapper.jsx-308082724{display:none;}.base-header-component.jsx-308082724 .mobile-wrapper.jsx-308082724{display:block;}}")];
            m.__hash = "308082724";
            var h = n("k42/"),
                b = n("wKPs"),
                f = n("PkAx"),
                x = n("+Css"),
                g = n("WJer"),
                w = n("Niaz"),
                j = n("xwfA"),
                O = n("/Z+I"),
                k = "1px",
                y = "".concat(k, " solid transparent"),
                v = "".concat(k, " solid ").concat(j.a[O.DARK_WORK_OS_IRIS_COLOR_NAME]),
                A = [".secondary-link-item-component{cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-top:".concat(k, ";padding-left:16px;padding-right:16px;-webkit-text-decoration:none;text-decoration:none;color:").concat(j.a.asphalt, ";-webkit-transition:color 200ms ease;transition:color 200ms ease;font-weight:300;font-size:0.875rem;line-height:24px;border-bottom:").concat(y, ";}"), ".secondary-link-item-component.selected{color:".concat(j.a[O.DARK_WORK_OS_IRIS_COLOR_NAME], ";border-bottom:").concat(v, ";}"), ".secondary-link-item-component:hover{color:".concat(j.a[O.DARK_WORK_OS_IRIS_COLOR_NAME], ";}")];
            A.__hash = "3389230092";
            var _ = n("TSYQ"),
                E = n.n(_),
                N = n("yAMK"),
                I = n("nKUr");

            function C(e) {
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
                        var o = Object(s.default)(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return Object(c.default)(this, n)
                }
            }
            var S = function(e) {
                    Object(i.default)(n, e);
                    var t = C(n);

                    function n() {
                        var e;
                        Object(o.default)(this, n);
                        for (var a = arguments.length, i = new Array(a), c = 0; c < a; c++) i[c] = arguments[c];
                        return e = t.call.apply(t, [this].concat(i)), Object(r.default)(Object(x.a)(e), "onClick", (function(t) {
                            var n = e.props.url,
                                r = 0 === (null === t || void 0 === t ? void 0 : t.screenX) && 0 === (null === t || void 0 === t ? void 0 : t.screenY);
                            BigBrain("track", N.SECONDARY_HEADER_LINK_CLICKED, {
                                kind: n,
                                info1: r ? "keyboard" : "mouse"
                            })
                        })), e
                    }
                    return Object(a.default)(n, [{
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.title,
                                n = e.url,
                                r = e.isSelected,
                                o = e.translate;
                            return Object(I.jsxs)("a", {
                                href: n,
                                onClick: this.onClick,
                                className: "jsx-".concat(A.__hash) + " " + (E()("secondary-link-item-component", {
                                    selected: r
                                }) || ""),
                                children: [o(t), Object(I.jsx)(u.a, {
                                    id: A.__hash,
                                    children: A
                                })]
                            })
                        }
                    }]), n
                }(p.PureComponent),
                R = Object(g.b)(S),
                M = n("FGYX"),
                D = n("3gK6"),
                P = n("20a2"),
                T = n("zcv4"),
                L = n("O/JI"),
                B = "1px solid ".concat(j.a.riverstone),
                H = "".concat(T.a.HEADER_CONTENT_HORIZONTAL_PADDING, "px"),
                U = "opacity ".concat(L.a.SECONDARY_HEADER_SCROLL_FIRST_TRANSITION_DURATION, "ms ease, transform ").concat(L.a.SECONDARY_HEADER_SCROLL_FIRST_TRANSITION_DURATION, "ms ease"),
                G = "opacity ".concat(L.a.SECONDARY_HEADER_SCROLL_FULL_TRANSITION_DURATION, "ms ease, transform ").concat(L.a.SECONDARY_HEADER_SCROLL_FULL_TRANSITION_DURATION, "ms ease"),
                Q = "opacity ".concat(L.a.SECONDARY_HEADER_SCROLL_FULL_TRANSITION_DURATION, "ms ease"),
                K = "".concat(T.a.SECONDARY_HEADER_HEIGHT + 1, "px"),
                z = "".concat(T.a.SECONDARY_HEADER_HEIGHT, "px"),
                F = [".secondary-header-desktop-component{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:100%;border-top:".concat(B, ";border-bottom:").concat("1px solid transparent", ";-webkit-transition:").concat(Q, ";transition:").concat(Q, ";height:").concat(K, ";background-color:").concat(j.a.white, ";}"), ".secondary-header-desktop-component .secondary-header-desktop-content{height:100%;max-width:".concat(l.k + "px", ";width:100%;padding-left:").concat(H, ";padding-right:").concat(H, ";display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}"), ".secondary-header-desktop-component .secondary-header-desktop-content .logo-wrapper{padding-right:16px;-webkit-transition:".concat(U, ";transition:").concat(U, ";}"), ".secondary-header-desktop-component .secondary-header-desktop-content .logo-wrapper .secondary-header-logo-image{height:".concat(z, ";}"), ".secondary-header-desktop-component .secondary-header-desktop-content .links-wrapper{height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-transition:".concat(G, ";transition:").concat(G, ";}"), ".secondary-header-desktop-component .secondary-header-desktop-content .links-wrapper .secondary-link-item-wrapper{height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}", ".scroll-started .secondary-header-wrapper .secondary-header-desktop-component{border-bottom:".concat(B, ";}"), ".scrolled-threshold .secondary-header-wrapper .secondary-header-desktop-component{opacity:0;visibility:hidden;}", ".scrolled-threshold .secondary-header-wrapper .secondary-header-desktop-component .logo-wrapper{opacity:0;visibility:hidden;-webkit-transform:translateY(-5px);-ms-transform:translateY(-5px);transform:translateY(-5px);}", ".scrolled-threshold .secondary-header-wrapper .secondary-header-desktop-component .links-wrapper{opacity:0;visibility:hidden;-webkit-transform:translateY(-5px);-ms-transform:translateY(-5px);transform:translateY(-5px);}"];

            function Y(e) {
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
                        var o = Object(s.default)(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return Object(c.default)(this, n)
                }
            }
            F.__hash = "3203132333";
            var V = function(e) {
                    Object(i.default)(n, e);
                    var t = Y(n);

                    function n() {
                        var e;
                        Object(o.default)(this, n);
                        for (var a = arguments.length, i = new Array(a), c = 0; c < a; c++) i[c] = arguments[c];
                        return e = t.call.apply(t, [this].concat(i)), Object(r.default)(Object(x.a)(e), "renderLogo", (function() {
                            var t = e.props,
                                n = t.pageClusterConfig,
                                r = t.useProductMiniSiteConfig,
                                o = Object(M.f)(n, {
                                    useProductMiniSiteConfig: r
                                });
                            return Object(I.jsx)(w.a, {
                                className: "secondary-header-logo-image",
                                src: null === o || void 0 === o ? void 0 : o.src,
                                alt: null === o || void 0 === o ? void 0 : o.alt,
                                href: null === o || void 0 === o ? void 0 : o.url
                            })
                        })), Object(r.default)(Object(x.a)(e), "renderLinks", (function() {
                            var t = e.props,
                                n = t.pageClusterConfig,
                                r = t.router,
                                o = t.useProductMiniSiteConfig;
                            return Object(M.e)(n, {
                                useProductMiniSiteConfig: o
                            }).map((function(e, t) {
                                return Object(I.jsx)("div", {
                                    className: "secondary-link-item-wrapper",
                                    children: Object(I.jsx)(R, {
                                        url: null === e || void 0 === e ? void 0 : e.url,
                                        title: null === e || void 0 === e ? void 0 : e.text,
                                        isSelected: Object(D.isSameUrlWithoutQueryParams)(null === e || void 0 === e ? void 0 : e.url, null === r || void 0 === r ? void 0 : r.asPath)
                                    })
                                }, t)
                            }))
                        })), e
                    }
                    return Object(a.default)(n, [{
                        key: "render",
                        value: function() {
                            return Object(I.jsxs)("nav", {
                                "aria-label": "Secondary",
                                className: "jsx-".concat(F.__hash) + " secondary-header-desktop-component",
                                children: [Object(I.jsxs)("div", {
                                    className: "jsx-".concat(F.__hash) + " secondary-header-desktop-content",
                                    children: [Object(I.jsx)("div", {
                                        className: "jsx-".concat(F.__hash) + " logo-wrapper",
                                        children: this.renderLogo()
                                    }), Object(I.jsx)("div", {
                                        className: "jsx-".concat(F.__hash) + " links-wrapper",
                                        children: this.renderLinks()
                                    })]
                                }), Object(I.jsx)(u.a, {
                                    id: F.__hash,
                                    children: F
                                })]
                            })
                        }
                    }]), n
                }(p.PureComponent),
                J = Object(P.withRouter)(Object(g.b)(V)),
                X = n("9wCD"),
                q = n("SQRZ"),
                W = "".concat(T.a.BASIC_HEADER_HEIGHT, "px"),
                Z = "".concat(T.a.SECONDARY_HEADER_HEIGHT, "px"),
                $ = "opacity ".concat(L.a.SECONDARY_HEADER_SCROLL_FULL_TRANSITION_DURATION, "ms ease, transform ").concat(L.a.SECONDARY_HEADER_SCROLL_FULL_TRANSITION_DURATION, "ms ease"),
                ee = "opacity ".concat(L.a.SECONDARY_HEADER_SCROLL_DISSAPEARING_LINKS_DURATION, "ms ease, transform ").concat(L.a.SECONDARY_HEADER_SCROLL_DISSAPEARING_LINKS_DURATION, "ms ease"),
                te = "opacity 50ms ease",
                ne = [".base-header-desktop-component{width:100%;}", ".base-header-desktop-component .header-create-account-button-wrapper{padding-left:8px;}", ".base-header-desktop-component .header-create-account-button-wrapper .regular-button{height:40px;}", ".base-header-desktop-component .header-create-account-button-wrapper .regular-button .button-component{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:0.8125rem;}", ".base-header-desktop-component .header-button-wrapper{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-left:16px;}", ".base-header-desktop-component .header-button-wrapper .signup-button{height:40px;}", ".base-header-desktop-component .signup-popup-wrapper{position:fixed;z-index:".concat(q.a, ";top:").concat(T.a.BASIC_HEADER_HEIGHT + 12, "px;left:calc( (100vw - ").concat(l.k, "px) / 2 + ").concat(l.k, "px - ").concat(T.a.SIGNUP_POPUP_SCREEN_WIDTH, "px - ").concat(T.a.SIGNUP_POPUP_SCREEN_RIGHT_MARGIN, "px);}"), "@media (max-width:".concat(l.j, "){.base-header-desktop-component .signup-popup-wrapper{left:calc(100vw - ").concat(T.a.SIGNUP_POPUP_SCREEN_WIDTH, "px - ").concat(T.a.SIGNUP_POPUP_SCREEN_RIGHT_MARGIN, "px);}}"), ".base-header-desktop-component.scrolled-threshold .base-header-desktop-content .left-side-header-links .absolute-main-links{opacity:0;visibility:hidden;pointer-events:none;-webkit-transform:translateY(-8px);-ms-transform:translateY(-8px);transform:translateY(-8px);-webkit-transition:".concat(ee, ";transition:").concat(ee, ";}"), ".base-header-desktop-component.scrolled-threshold .base-header-desktop-content .left-side-header-links .absolute-unified-links{opacity:1;visibility:visible;pointer-events:auto;-webkit-transform:none;-ms-transform:none;transform:none;-webkit-transition:".concat($, ";transition:").concat($, ";}"), ".base-header-desktop-component.scrolled-threshold .secondary-header-wrapper{pointer-events:none;}", ".base-header-desktop-component .base-header-desktop-content{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;height:".concat(W, ";}"), ".base-header-desktop-component .base-header-desktop-content .left-side-header-links,.base-header-desktop-component .base-header-desktop-content .right-side-header-links{height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}", ".base-header-desktop-component .base-header-desktop-content .left-side-header-links .link-item-with-menu-component-wrapper,.base-header-desktop-component .base-header-desktop-content .left-side-header-links .link-item-component-wrapper,.base-header-desktop-component .base-header-desktop-content .right-side-header-links .link-item-with-menu-component-wrapper,.base-header-desktop-component .base-header-desktop-content .right-side-header-links .link-item-component-wrapper{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".base-header-desktop-component .base-header-desktop-content .left-side-header-links .link-item-with-menu-component-wrapper.header-language-picker,.base-header-desktop-component .base-header-desktop-content .left-side-header-links .link-item-component-wrapper.header-language-picker,.base-header-desktop-component .base-header-desktop-content .right-side-header-links .link-item-with-menu-component-wrapper.header-language-picker,.base-header-desktop-component .base-header-desktop-content .right-side-header-links .link-item-component-wrapper.header-language-picker{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".base-header-desktop-component .base-header-desktop-content .left-side-header-links .link-item-with-menu-component-wrapper.header-language-picker .language-picker-component .selected-language,.base-header-desktop-component .base-header-desktop-content .left-side-header-links .link-item-component-wrapper.header-language-picker .language-picker-component .selected-language,.base-header-desktop-component .base-header-desktop-content .right-side-header-links .link-item-with-menu-component-wrapper.header-language-picker .language-picker-component .selected-language,.base-header-desktop-component .base-header-desktop-content .right-side-header-links .link-item-component-wrapper.header-language-picker .language-picker-component .selected-language{border-radius:8px;padding:0 16px;}", ".base-header-desktop-component .base-header-desktop-content .left-side-header-links .link-item-with-menu-component-wrapper.header-language-picker .language-picker-component .selected-language:hover,.base-header-desktop-component .base-header-desktop-content .left-side-header-links .link-item-component-wrapper.header-language-picker .language-picker-component .selected-language:hover,.base-header-desktop-component .base-header-desktop-content .right-side-header-links .link-item-with-menu-component-wrapper.header-language-picker .language-picker-component .selected-language:hover,.base-header-desktop-component .base-header-desktop-content .right-side-header-links .link-item-component-wrapper.header-language-picker .language-picker-component .selected-language:hover{background-color:".concat(j.a[O.BACKGROUND_GRAY_COLOR_NAME], ";}"), ".base-header-desktop-component .base-header-desktop-content .left-side-header-links .link-item-with-menu-component-wrapper.header-language-picker .language-picker-component .earth-icon,.base-header-desktop-component .base-header-desktop-content .left-side-header-links .link-item-component-wrapper.header-language-picker .language-picker-component .earth-icon,.base-header-desktop-component .base-header-desktop-content .right-side-header-links .link-item-with-menu-component-wrapper.header-language-picker .language-picker-component .earth-icon,.base-header-desktop-component .base-header-desktop-content .right-side-header-links .link-item-component-wrapper.header-language-picker .language-picker-component .earth-icon{margin:0 6px;width:18px;height:18px;}", ".base-header-desktop-component .base-header-desktop-content .left-side-header-links .link-item-with-menu-component-wrapper.header-language-picker .language-picker-component .arrow-down-icon,.base-header-desktop-component .base-header-desktop-content .left-side-header-links .link-item-component-wrapper.header-language-picker .language-picker-component .arrow-down-icon,.base-header-desktop-component .base-header-desktop-content .right-side-header-links .link-item-with-menu-component-wrapper.header-language-picker .language-picker-component .arrow-down-icon,.base-header-desktop-component .base-header-desktop-content .right-side-header-links .link-item-component-wrapper.header-language-picker .language-picker-component .arrow-down-icon{height:7px;}", ".base-header-desktop-component .base-header-desktop-content .left-side-header-links .link-item-with-menu-component-wrapper.header-language-picker .language-picker-component .language-picker-dialog-component-wrapper,.base-header-desktop-component .base-header-desktop-content .left-side-header-links .link-item-component-wrapper.header-language-picker .language-picker-component .language-picker-dialog-component-wrapper,.base-header-desktop-component .base-header-desktop-content .right-side-header-links .link-item-with-menu-component-wrapper.header-language-picker .language-picker-component .language-picker-dialog-component-wrapper,.base-header-desktop-component .base-header-desktop-content .right-side-header-links .link-item-component-wrapper.header-language-picker .language-picker-component .language-picker-dialog-component-wrapper{top:52px;}", ".base-header-desktop-component .base-header-desktop-content .left-side-header-links{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;}", ".base-header-desktop-component .base-header-desktop-content .left-side-header-links .absolute-unified-links,.base-header-desktop-component .base-header-desktop-content .left-side-header-links .absolute-main-links{position:absolute;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100%;}", ".base-header-desktop-component .base-header-desktop-content .left-side-header-links .absolute-main-links{opacity:1;visibility:visible;-webkit-transition:".concat($, ";transition:").concat($, ";}"), ".base-header-desktop-component .base-header-desktop-content .left-side-header-links .absolute-main-links .submenu-enter{opacity:0.01;}", ".base-header-desktop-component .base-header-desktop-content .left-side-header-links .absolute-main-links .submenu-enter.submenu-enter-active{opacity:1;-webkit-transition:".concat(te, ";transition:").concat(te, ";}"), ".base-header-desktop-component .base-header-desktop-content .left-side-header-links .absolute-main-links .submenu-leave{opacity:1;}", ".base-header-desktop-component .base-header-desktop-content .left-side-header-links .absolute-main-links .submenu-leave.submenu-leave-active{opacity:0.01;-webkit-transition:".concat(te, ";transition:").concat(te, ";}"), ".base-header-desktop-component .base-header-desktop-content .left-side-header-links .absolute-unified-links{opacity:0;visibility:hidden;pointer-events:none;-webkit-transform:translateY(8px);-ms-transform:translateY(8px);transform:translateY(8px);-webkit-transition:".concat(ee, ";transition:").concat(ee, ";}"), ".base-header-desktop-component .base-header-desktop-content .right-side-header-links{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;}", ".base-header-desktop-component .base-header-desktop-content .header-button-wrapper{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;}", ".base-header-desktop-component .header-menu-component-wrapper{position:fixed;top:".concat(W, ";z-index:").concat(q.m, ";left:0;right:0;bottom:0;background-color:rgba(0,0,0,0.1);-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);pointer-events:none;width:100%;overflow:auto;}"), ".base-header-desktop-component .header-menu-component-wrapper .menu-component-wrapper{pointer-events:all;}", ".base-header-desktop-component .secondary-header-wrapper{height:".concat(Z, ";position:fixed;width:100%;z-index:").concat(q.m - 1, ";}")];
            ne.__hash = "1325184274";
            var re = n("Pni5"),
                oe = n("87MR"),
                ae = n("UmnM"),
                ie = n("UG/g"),
                ce = [".link-item-with-menu-component{cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:8px 10px;color:".concat(j.a["text-gray"], ";-webkit-transition:color 200ms ease;transition:color 200ms ease;border-radius:8px;}"), ".link-item-with-menu-component:hover{background-color:".concat(j.a[O.BACKGROUND_GRAY_COLOR_NAME], ";}"), ".link-item-with-menu-component.is-open,.link-item-with-menu-component:hover{color:".concat(j.a[O.DARK_WORK_OS_IRIS_COLOR_NAME], ";}"), ".link-item-with-menu-component.is-open .link-item-with-menu-icon path,.link-item-with-menu-component:hover .link-item-with-menu-icon path{fill:".concat(j.a[O.DARK_WORK_OS_IRIS_COLOR_NAME], ";stroke:").concat(j.a[O.DARK_WORK_OS_IRIS_COLOR_NAME], ";}"), ".link-item-with-menu-component.is-open .link-item-with-menu-icon{-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg);}", ".link-item-with-menu-component .link-item-with-menu-title{font-size:0.875rem;margin-right:4px;}", ".link-item-with-menu-component .link-item-with-menu-icon{height:7px;width:10px;-webkit-transition:-webkit-transform 200ms ease;-webkit-transition:transform 200ms ease;transition:transform 200ms ease;}", ".link-item-with-menu-component .link-item-with-menu-icon path{fill:".concat(j.a.mud, ";stroke:").concat(j.a.mud, ";}")];
            ce.__hash = "4115554422";
            var se = n("UK0n");

            function de(e) {
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
                        var o = Object(s.default)(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return Object(c.default)(this, n)
                }
            }

            function ue(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function pe(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ue(Object(n), !0).forEach((function(t) {
                        Object(r.default)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ue(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var le = function(e) {
                    return Object(I.jsx)("svg", pe(pe({
                        width: "256",
                        height: "256",
                        viewBox: "0 0 256 256",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, e), {}, {
                        children: Object(I.jsx)("path", {
                            d: "M0 66.73c0 2.66.981 5.33 2.955 7.41l117.332 123.323a10.64 10.64 0 0 0 7.712 3.314c2.912 0 5.696-1.19 7.712-3.314L253.043 74.14c4.074-4.278 3.914-11.077-.331-15.163a10.627 10.627 0 0 0-15.083.333L128 174.536 18.379 59.32c-4.075-4.279-10.827-4.429-15.083-.343A10.76 10.76 0 0 0 0 66.73z",
                            fill: "#000",
                            fillRule: "nonzero"
                        })
                    }))
                },
                me = "link-item-with-menu-component",
                he = function(e) {
                    Object(i.default)(n, e);
                    var t = de(n);

                    function n(e) {
                        var a;
                        return Object(o.default)(this, n), a = t.call(this, e), Object(r.default)(Object(x.a)(a), "onMouseLeave", (function(e) {
                            var t, n = a.props,
                                r = n.isOpen,
                                o = n.closeMenu;
                            (a.clearHoverOpenMenuTimeoutIfNeeded(), r) && (o(e), null === e || void 0 === e || null === (t = e.target) || void 0 === t || t.blur())
                        })), Object(r.default)(Object(x.a)(a), "onMouseEnter", (function(e) {
                            var t = a.props.openMenu;
                            a._hoverTimeout = setTimeout(t, a.getHoverWaitTime())
                        })), Object(r.default)(Object(x.a)(a), "getHoverWaitTime", (function() {
                            return a.props.shouldDelayMenuOpenOnHover ? 500 : 0
                        })), Object(r.default)(Object(x.a)(a), "clearHoverOpenMenuTimeoutIfNeeded", (function() {
                            a._hoverTimeout && (clearTimeout(a._hoverTimeout), a._hoverTimeout = null)
                        })), Object(r.default)(Object(x.a)(a), "onClickAction", (function(e) {
                            var t = a.props,
                                n = t.openMenu,
                                r = t.isOpen,
                                o = t.closeMenu;
                            r ? o() : n()
                        })), Object(r.default)(Object(x.a)(a), "blurItem", (function(e) {
                            var t, n;
                            null === e || void 0 === e || null === (t = e.target) || void 0 === t || null === (n = t.closest(".".concat(me))) || void 0 === n || n.blur()
                        })), Object(r.default)(Object(x.a)(a), "onClick", (function(e) {
                            a.blurItem(e), a.onClickAction(e)
                        })), a.onKeyDown = Object(se.a)(a.onClickAction), a._hoverTimeout = null, a
                    }
                    return Object(a.default)(n, [{
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.title,
                                n = e.isOpen,
                                r = e.translate,
                                o = e.className;
                            return Object(I.jsxs)("div", {
                                onKeyDown: this.onKeyDown,
                                onClick: this.onClick,
                                role: "link",
                                tabIndex: 0,
                                "aria-haspopup": "true",
                                "aria-expanded": n,
                                className: "jsx-".concat(ce.__hash) + " " + (E()(me, o, {
                                    "is-open": n
                                }) || ""),
                                children: [Object(I.jsx)("span", {
                                    className: "jsx-".concat(ce.__hash) + " link-item-with-menu-title",
                                    children: r(t)
                                }), Object(I.jsx)(le, {
                                    className: "link-item-with-menu-icon"
                                }), Object(I.jsx)(u.a, {
                                    id: ce.__hash,
                                    children: ce
                                })]
                            })
                        }
                    }]), n
                }(p.PureComponent);
            he.defaultProps = {
                shouldDelayMenuOpenOnHover: !1
            };
            var be = Object(g.b)(he),
                fe = n("mvu6"),
                xe = n("x5ij"),
                ge = n("rNX+"),
                we = n("oUkS"),
                je = n("VgqV"),
                Oe = n("FlbJ"),
                ke = n("B8ho"),
                ye = n("jvQQ"),
                ve = n("RkeR"),
                Ae = [".base-header-menu-component{width:100%;background-color:white;box-shadow:0px 18px 30px rgba(0,0,0,0.03);padding:16px 0px;}", ".base-header-menu-component .header-menu-items-wrapper{max-width:".concat(l.k + "px", ";width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:auto;padding:0px 32px;}"), ".base-header-menu-component .header-menu-items-wrapper .header-menu-item-component-wrapper{height:156px;width:20%;}", "@media (max-width:".concat(l.k + "px", "){.base-header-menu-component .header-menu-items-wrapper .header-menu-item-component-wrapper{width:25%;}}")];
            Ae.__hash = "303541824";
            var _e = [".header-menu-item-component{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100%;width:100%;cursor:pointer;padding:0px 10px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-transition:background-color 200ms ease;transition:background-color 200ms ease;-webkit-text-decoration:none;text-decoration:none;color:".concat(j.a.black, ";}"), ".header-menu-item-component:hover{background-color:".concat(j.a["highlight-blue"], ";}"), ".header-menu-item-component .header-menu-item-content{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}", ".header-menu-item-component .header-menu-item-content .menu-item-title-icon{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;font-size:0.875rem;margin-right:16px;}", ".header-menu-item-component .header-menu-item-content .menu-item-title-icon path{stroke:".concat(j.a.iris, ";}"), ".header-menu-item-component .header-menu-item-content .menu-item-text-wrapper{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}", ".header-menu-item-component .header-menu-item-content .menu-item-text-wrapper .menu-item-title-wrapper{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}", ".header-menu-item-component .header-menu-item-content .menu-item-text-wrapper .menu-item-title-wrapper .menu-item-title{font-weight:400;}", ".header-menu-item-component .header-menu-item-content .menu-item-text-wrapper .menu-item-title-wrapper .new-badge-component-wrapper{margin-left:8px;}", ".header-menu-item-component .header-menu-item-content .menu-item-text-wrapper .menu-item-description{margin-top:8px;font-size:0.8125rem;line-height:20px;color:".concat(j.a.asphalt, ";}"), ".header-menu-item-component .header-menu-item-content .menu-item-text-wrapper .menu-item-footer{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-top:16px;color:".concat(j.a.iris, ";font-size:0.6875rem;position:absolute;top:130px;}"), ".header-menu-item-component .header-menu-item-content .menu-item-text-wrapper .menu-item-footer svg{fill:currentColor;height:10px;margin-left:8px;}"];
            _e.__hash = "2371533702";
            var Ee = n("Cmft");

            function Ne(e) {
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
                        var o = Object(s.default)(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return Object(c.default)(this, n)
                }
            }

            function Ie(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Ce(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Ie(Object(n), !0).forEach((function(t) {
                        Object(r.default)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ie(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Se = function(e) {
                    return Object(I.jsx)("svg", Ce(Ce({
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "8",
                        height: "14",
                        viewBox: "0 0 8 14"
                    }, e), {}, {
                        children: Object(I.jsx)("path", {
                            d: "M.313 12.045l5.113-5.112L.313 1.821A1.065 1.065 0 1 1 1.82.312L7.687 6.18a1.064 1.064 0 0 1 0 1.508L1.82 13.554a1.065 1.065 0 1 1-1.507-1.508z"
                        })
                    }))
                },
                Re = function(e) {
                    Object(i.default)(n, e);
                    var t = Ne(n);

                    function n() {
                        var e;
                        Object(o.default)(this, n);
                        for (var a = arguments.length, i = new Array(a), c = 0; c < a; c++) i[c] = arguments[c];
                        return e = t.call.apply(t, [this].concat(i)), Object(r.default)(Object(x.a)(e), "onClick", (function(t) {
                            var n = e.props.url,
                                r = 0 === (null === t || void 0 === t ? void 0 : t.screenX) && 0 === (null === t || void 0 === t ? void 0 : t.screenY);
                            BigBrain("track", N.HEADER_SUBMENU_LINK_CLICKED, {
                                kind: n,
                                info1: r ? "keyboard" : "mouse"
                            })
                        })), e
                    }
                    return Object(a.default)(n, [{
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.icon,
                                n = e.title,
                                r = e.description,
                                o = e.url,
                                a = e.isPopular,
                                i = e.translate,
                                c = e.footer;
                            return Object(I.jsxs)("a", {
                                href: o,
                                onClick: this.onClick,
                                className: "jsx-".concat(_e.__hash) + " header-menu-item-component",
                                children: [Object(I.jsxs)("div", {
                                    className: "jsx-".concat(_e.__hash) + " header-menu-item-content",
                                    children: [Object(I.jsx)(t, {
                                        className: "jsx-".concat(_e.__hash) + " menu-item-title-icon"
                                    }), Object(I.jsxs)("div", {
                                        className: "jsx-".concat(_e.__hash) + " menu-item-text-wrapper",
                                        children: [Object(I.jsxs)("div", {
                                            className: "jsx-".concat(_e.__hash) + " menu-item-title-wrapper",
                                            children: [Object(I.jsx)("span", {
                                                className: "jsx-".concat(_e.__hash) + " menu-item-title",
                                                children: i(n)
                                            }), a && Object(I.jsx)("div", {
                                                className: "jsx-".concat(_e.__hash) + " new-badge-component-wrapper",
                                                children: Object(I.jsx)(Ee.a, {})
                                            })]
                                        }), Object(I.jsx)("span", {
                                            className: "jsx-".concat(_e.__hash) + " menu-item-description",
                                            children: i(r)
                                        }), c && Object(I.jsxs)("span", {
                                            className: "jsx-".concat(_e.__hash) + " menu-item-footer",
                                            children: [i(c), " ", Object(I.jsx)(Se, {})]
                                        })]
                                    })]
                                }), Object(I.jsx)(u.a, {
                                    id: _e.__hash,
                                    children: _e
                                })]
                            })
                        }
                    }]), n
                }(p.PureComponent),
                Me = Object(g.b)(Re);

            function De(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Pe(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? De(Object(n), !0).forEach((function(t) {
                        Object(r.default)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : De(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function Te(e) {
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
                        var o = Object(s.default)(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return Object(c.default)(this, n)
                }
            }
            var Le = function(e) {
                    Object(i.default)(n, e);
                    var t = Te(n);

                    function n() {
                        return Object(o.default)(this, n), t.apply(this, arguments)
                    }
                    return Object(a.default)(n, [{
                        key: "renderHeaderMenuItems",
                        value: function() {
                            return this.props.menuItems.map((function(e, t) {
                                return Object(I.jsx)("div", {
                                    className: "header-menu-item-component-wrapper",
                                    children: Object(I.jsx)(Me, Pe({}, e))
                                }, t)
                            }))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return Object(I.jsxs)("div", {
                                className: "jsx-".concat(Ae.__hash) + " base-header-menu-component",
                                children: [Object(I.jsx)("div", {
                                    className: "jsx-".concat(Ae.__hash) + " header-menu-items-wrapper",
                                    children: this.renderHeaderMenuItems()
                                }), Object(I.jsx)(u.a, {
                                    id: Ae.__hash,
                                    children: Ae
                                })]
                            })
                        }
                    }]), n
                }(p.PureComponent),
                Be = n("dhJC"),
                He = n("zTib"),
                Ue = n("zaBJ"),
                Ge = [".header-menu-section-component{height:100%;}", ".header-menu-section-component .header-menu-section-title{color:".concat(j.a.asphalt, ";font-weight:300;font-size:0.8125rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;}"), ".header-menu-section-component .header-menu-section-title.with-underline{font-size:1rem;}", '.header-menu-section-component .header-menu-section-title.with-underline:after{content:"";background:'.concat(j.a.mud, ";opacity:0.1;top:24px;display:block;position:absolute;height:1px;width:calc(100% - 20px);margin-left:-8px;}"), ".header-menu-section-component .header-menu-section-title.with-image-and-CTA{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;gap:8px;margin-left:-16px;padding:12px 16px;border-bottom:".concat("1px solid ".concat(j.a[O.BRAND_WORK_MANAGEMENT_LIGHTER_TINT_01]), ";}"), ".header-menu-section-component .header-menu-section-title.with-image-and-CTA:hover{border-radius:4px;border-color:transparent;background-color:".concat(j.a[O.BACKGROUND_GRAY_COLOR_NAME], ";cursor:pointer;}"), ".header-menu-section-component .header-menu-section-title.with-image-and-CTA .secondary-button{font-size:0.8125rem;}", ".header-menu-section-component .header-menu-section-title .header-menu-section-title-line{margin-right:8px;stroke:".concat(j.a.asphalt, ";}"), ".header-menu-section-component .header-menu-section-title .header-menu-section-title-image-and-cta{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".header-menu-section-component .header-menu-section-title .header-menu-section-title-image-and-cta .header-menu-section-title-image{height:26px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}", ".header-menu-section-component .header-menu-section-title .header-menu-section-title-image-and-cta .secondary-button{margin-right:18px;}", ".header-menu-section-component .header-menu-section-items-wrapper{margin:20px 0;display:grid;grid-auto-flow:column;grid-template-rows:repeat(var(--max-number-of-items-in-column),auto);}", ".header-menu-section-component .header-menu-see-more-wrapper{margin-bottom:16px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}", ".header-menu-section-component .header-menu-see-more-wrapper .secondary-button .secondary-button-text{font-size:0.8125rem;}"];
            Ge.__hash = "1246241892";
            var Qe = n("fxKy"),
                Ke = n("0R3M"),
                ze = n("ZIUT"),
                Fe = "".concat(98, "px"),
                Ye = "".concat(286, "px"),
                Ve = "".concat(18, "px"),
                Je = "".concat(8, "px"),
                Xe = [".header-menu-section-item-component-wrapper{width:".concat(Ye, ";height:").concat(Fe, ";margin-right:").concat(Ve, ";padding:16px 8px;background-color:var(--header-menu-section-item-background-color);border-radius:4px;border-width:2px;border-style:solid;}"), ".header-menu-section-item-component-wrapper:hover{background-color:var(--header-menu-section-item-hover-background-color);}", ".header-menu-section-item-component-wrapper.outline{border-color:".concat(j.a[O.BACKGROUND_GRAY_COLOR_NAME], ";}"), ".header-menu-section-item-component-wrapper:not(.outline){border-color:transparent;}", ".header-menu-section-item-component-wrapper.secondary-product{width:340px;}", ".header-menu-section-item-component-wrapper.secondary-product .menu-item-title{opacity:0.85;}", ".header-menu-section-item-component-wrapper.feature{width:280px;margin-bottom:14px;margin-right:14px;padding:16px 12px;}", ".header-menu-section-item-component-wrapper.feature .menu-item-title-icon{background-color:".concat(j.a[O.BACKGROUND_GRAY_COLOR_NAME], ";border:1px solid transparent;border-radius:2px;margin-right:12px;}"), ".header-menu-section-item-component-wrapper.feature:hover .menu-item-title-icon{border:".concat("1px solid ".concat(j.a[O.LIGHT_WORK_OS_IRIS_COLOR_NAME]), ";}"), ".header-menu-section-item-component-wrapper.resource{width:274px;margin-bottom:14px;margin-right:28px;}", ".header-menu-section-item-component-wrapper.story{height:unset;width:356px;padding:0;border:none;}", ".header-menu-section-item-component-wrapper.story:hover{".concat(Object(ze.getComponentShadowFilter)(), ";}"), "@media not all and (min-resolution:0.001dpcm){@supports (-webkit-appearance:none){.header-menu-section-item-component-wrapper.story:hover{-webkit-filter:unset;filter:unset;}}}", ".header-menu-section-item-component-wrapper.story:not(:last-child){margin-bottom:20px;}", ".header-menu-section-item-component-wrapper.story img{width:100%;height:147px;background:".concat(j.a.silver, ";border-top-left-radius:4px;border-top-right-radius:4px;}"), ".header-menu-section-item-component-wrapper.story .menu-item-text-wrapper{padding:8px 20px 16px;}", ".header-menu-section-item-component-wrapper.story .menu-item-text-wrapper .menu-item-description{font-size:0.8125rem;line-height:19px;color:".concat(j.a.mud, ";}"), ".header-menu-section-item-component-wrapper .menu-item-text-and-tags-wrapper{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".header-menu-section-item-component-wrapper.by-team .header-menu-section-item-component .header-menu-item-content .menu-item-title-icon{margin-top:-4px;margin-right:8px;}", ".header-menu-section-item-component-wrapper.secondary-product{width:156px;height:54px;margin-bottom:12px;}", ".header-menu-section-item-component-wrapper.secondary-product .header-menu-section-item-component .header-menu-item-content .menu-item-text-wrapper .menu-item-description{-webkit-line-clamp:3;}", ".header-menu-section-item-component{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100%;width:100%;cursor:pointer;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-transition:background-color 200ms ease;transition:background-color 200ms ease;-webkit-text-decoration:none;text-decoration:none;color:".concat(j.a.black, ";}"), ".header-menu-section-item-component:not([href]){cursor:default;}", ".header-menu-section-item-component .header-menu-item-content{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}", ".header-menu-section-item-component .header-menu-item-content.has-image-instead-title{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}", ".header-menu-section-item-component .header-menu-item-content .menu-item-title-icon{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;font-size:0.875rem;margin-right:16px;}", ".header-menu-section-item-component .header-menu-item-content .menu-item-title-icon:not(.fill) path,.header-menu-section-item-component .header-menu-item-content .menu-item-title-icon:not(.fill) rect,.header-menu-section-item-component .header-menu-item-content .menu-item-title-icon:not(.fill) circle{stroke:var(--icon-color);}", ".header-menu-section-item-component .header-menu-item-content .menu-item-text-wrapper{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}", ".header-menu-section-item-component .header-menu-item-content .menu-item-text-wrapper .menu-item-title-wrapper{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}", ".header-menu-section-item-component .header-menu-item-content .menu-item-text-wrapper .menu-item-title-wrapper .menu-item-title{font-size:0.875rem;font-weight:400;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;line-height:20px;}", ".header-menu-section-item-component .header-menu-item-content .menu-item-text-wrapper .menu-item-title-wrapper .new-badge-component-wrapper{margin-left:8px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".header-menu-section-item-component .header-menu-item-content .menu-item-text-wrapper .menu-item-description{margin-top:8px;font-size:0.8125rem;line-height:20px;color:".concat(j.a.asphalt, ";overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;}"), ".header-menu-section-item-component .header-menu-item-content .menu-item-text-wrapper .menu-item-description-button{margin-top:16px;}", ".header-menu-section-item-component .header-menu-item-content .menu-item-text-wrapper .menu-item-description-button .secondary-button{font-size:0.8125rem;}", "@media (max-width:".concat(l.f, "){.header-menu-section-item-component .header-menu-section-item-component-wrapper{margin-right:").concat(Je, ";}}"), "@media (max-width:".concat(l.n, "){.header-menu-section-item-component-wrapper.story{width:280px;}.header-menu-section-item-component-wrapper.story img{height:115px;}}"), "@media (max-width:".concat(l.d, "){.header-menu-section-item-component-wrapper.story{width:240px;}.header-menu-section-item-component-wrapper.story img{height:99px;}}")];

            function qe(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function We(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? qe(Object(n), !0).forEach((function(t) {
                        Object(r.default)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : qe(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            Xe.__hash = "1993034084";
            var Ze = function(e) {
                    return Object(I.jsxs)("svg", We(We({
                        width: "20",
                        height: "20",
                        viewBox: "0 0 20 20",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, e), {}, {
                        children: [Object(I.jsx)("circle", {
                            cx: "10",
                            cy: "10",
                            r: "10",
                            fill: "#CAF4E2",
                            className: "circle"
                        }), Object(I.jsx)("path", {
                            className: "mark",
                            d: "M6.272 9.834a.756.756 0 0 0-1.054 0 .72.72 0 0 0 0 1.032l2.98 2.92a.756.756 0 0 0 1.053 0l5.96-5.84a.72.72 0 0 0 0-1.032.756.756 0 0 0-1.054 0l-5.433 5.324-2.452-2.404z",
                            fill: "#037F4C"
                        })]
                    }))
                },
                $e = function(e) {
                    return Object(I.jsxs)("svg", We(We({
                        width: "20",
                        height: "20",
                        viewBox: "0 0 20 20",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, e), {}, {
                        children: [Object(I.jsxs)("g", {
                            clipPath: "url(#clip0_562_26773)",
                            children: [Object(I.jsx)("path", {
                                className: "circle",
                                d: "M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10z",
                                fill: "#CAF4E2"
                            }), Object(I.jsx)("path", {
                                className: "mark",
                                d: "M14.319 9.396c.454 0 .681.197.681.593v.044c0 .19-.051.337-.154.44-.102.087-.278.131-.527.131h-3.715v3.715c0 .249-.05.425-.153.527-.088.103-.228.154-.418.154h-.044c-.396 0-.593-.227-.593-.681v-3.715H5.68c-.249 0-.425-.044-.527-.131-.103-.103-.154-.25-.154-.44v-.044c0-.396.227-.593.681-.593h3.715V5.68c0-.454.197-.681.593-.681h.044c.19 0 .33.051.418.154.102.102.153.278.153.527v3.715h3.715z",
                                fill: "#037F4C"
                            })]
                        }), Object(I.jsx)("defs", {
                            children: Object(I.jsx)("clipPath", {
                                id: "clip0_562_26773",
                                children: Object(I.jsx)("path", {
                                    fill: "#fff",
                                    d: "M0 0h20v20H0z"
                                })
                            })
                        })]
                    }))
                },
                et = function(e) {
                    var t = e.icon,
                        n = e.iconType,
                        r = e.iconColor,
                        o = e.imageSrc,
                        a = e.topic,
                        i = e.title,
                        c = e.subtitle,
                        s = e.subtitleIcon,
                        d = e.description,
                        l = e.url,
                        m = e.isPopular,
                        h = e.translate,
                        b = e.badgeText,
                        f = e.badgeColorName,
                        x = e.badgeTextColorName,
                        g = e.badgeStrokeColorName,
                        w = e.openInNewTab,
                        k = e.button,
                        y = e.menuId,
                        v = e.sectionId,
                        A = e.iconStrokeColor,
                        _ = e.tags,
                        C = e.buttonText,
                        S = e.outline,
                        R = e.itemType,
                        M = e.backgroundColor,
                        D = e.hoverBackgroundColor,
                        P = e.subtitleAboveItem,
                        T = e.localeId,
                        L = e.imageFloatingCaption,
                        B = Object(p.useMemo)((function() {
                            return Object(Ke.c)(l, T)
                        }), [l, T]),
                        H = Object(p.useCallback)((function(e) {
                            var t = 0 === (null === e || void 0 === e ? void 0 : e.screenX) && 0 === (null === e || void 0 === e ? void 0 : e.screenY);
                            Object(oe.trackEvent)(N.HEADER_SUBMENU_LINK_CLICKED, {
                                kind: B,
                                info1: t ? "keyboard" : "mouse",
                                info2: y,
                                info3: v
                            })
                        }), [B]),
                        U = function(e) {
                            var t = e.tag,
                                n = e.index,
                                r = (null === _ || void 0 === _ ? void 0 : _.tagsType) || X.l.DEFAULT;
                            return Object(I.jsx)("div", {
                                className: "tag",
                                onMouseEnter: function() {
                                    return function(e, t) {
                                        Object(oe.trackEvent)(N.HEADER_PRODUCT_TAG_HOVERED, {
                                            kind: h(i),
                                            info1: h(e),
                                            info2: t
                                        })
                                    }(t, n)
                                },
                                children: r === X.l.BULLET ? function() {
                                    var e, r = n === (null === _ || void 0 === _ || null === (e = _.list) || void 0 === e ? void 0 : e.length) - 1 ? $e : Ze;
                                    return Object(I.jsxs)(I.Fragment, {
                                        children: [Object(I.jsx)(r, {
                                            className: "tag-bullet"
                                        }), h(t)]
                                    })
                                }() : h(t)
                            }, n)
                        },
                        G = function(e) {
                            var t = e.className;
                            return _ && Object(I.jsxs)("div", {
                                className: E()("tags-wrapper", t),
                                style: {
                                    "--header-product-tag-background-color": _.backgroundColor,
                                    "--header-product-tag-color": _.color
                                },
                                children: [_.title && Object(I.jsx)("div", {
                                    className: "tags-title",
                                    children: "".concat(h(_.title), ":")
                                }), _.list.map((function(e, t) {
                                    return U({
                                        tag: e,
                                        index: t
                                    })
                                }))]
                            })
                        };
                    return Object(I.jsxs)(I.Fragment, {
                        children: [P && Object(I.jsx)("div", {
                            children: h(P)
                        }), Object(I.jsx)("div", {
                            className: E()("header-menu-section-item-component-wrapper", R, {
                                outline: S
                            }),
                            style: {
                                "--header-menu-section-item-background-color": M || j.a[O.WHITE_COLOR_NAME],
                                "--header-menu-section-item-hover-background-color": D || j.a[O.BACKGROUND_GRAY_COLOR_NAME]
                            },
                            children: Object(I.jsxs)("a", {
                                href: B,
                                onClick: H,
                                target: w ? "_blank" : "_self",
                                rel: "noreferrer",
                                className: "jsx-".concat(Xe.__hash) + " header-menu-section-item-component",
                                children: [Object(I.jsxs)("div", {
                                    style: {
                                        display: "flex",
                                        flexDirection: "column"
                                    },
                                    className: "jsx-".concat(Xe.__hash) + " header-menu-item-content-and-tags-wrapper",
                                    children: [Object(I.jsxs)("div", {
                                        className: "jsx-".concat(Xe.__hash) + " " + (E()("header-menu-item-content", {
                                            "has-image-instead-title": !!o,
                                            "no-description": !d
                                        }) || ""),
                                        children: [t && Object(I.jsx)(t, {
                                            style: {
                                                "--icon-color": j.a[r || O.WORK_OS_IRIS_COLOR_NAME],
                                                "--icon-stroke-color": A
                                            },
                                            className: "jsx-".concat(Xe.__hash) + " " + (E()("menu-item-title-icon", n) || "")
                                        }), o && Object(I.jsxs)("div", {
                                            className: "jsx-".concat(Xe.__hash) + " menu-item-image-and-caption-wrapper",
                                            children: [Object(I.jsx)(Ue.a, {
                                                src: o
                                            }), L && Object(I.jsx)("span", {
                                                className: "jsx-".concat(Xe.__hash) + " menu-item-image-floating-caption",
                                                children: h(L)
                                            })]
                                        }), Object(I.jsxs)("div", {
                                            className: "jsx-".concat(Xe.__hash) + " menu-item-text-and-tags-wrapper",
                                            children: [Object(I.jsxs)("div", {
                                                className: "menu-item-text-wrapper",
                                                children: [a && Object(I.jsx)("div", {
                                                    className: "menu-item-topic-wrapper",
                                                    children: h(a)
                                                }), Object(I.jsxs)("div", {
                                                    className: "menu-item-title-wrapper",
                                                    children: [Object(I.jsx)("span", {
                                                        className: "menu-item-title",
                                                        children: h(i)
                                                    }), m && Object(I.jsx)("div", {
                                                        className: "new-badge-component-wrapper",
                                                        children: Object(I.jsx)(Ee.a, {
                                                            badgeText: h(b),
                                                            badgeColorName: f,
                                                            badgeTextColorName: x,
                                                            badgeStrokeColorName: g
                                                        })
                                                    })]
                                                }), c && Object(I.jsxs)("div", {
                                                    className: "menu-item-subtitle-wrapper",
                                                    children: [s && Object(I.jsx)(s, {}), Object(I.jsx)("span", {
                                                        className: "menu-item-title",
                                                        children: h(c)
                                                    })]
                                                }), d && Object(I.jsx)("span", {
                                                    className: "menu-item-description",
                                                    children: Object(I.jsx)(He.a, {
                                                        text: h(d)
                                                    })
                                                }), k && Object(I.jsx)("div", {
                                                    className: "menu-item-description-button",
                                                    children: Object(I.jsx)(Qe.a, {
                                                        buttonText: h(C || "header.menuItem.button.readMore"),
                                                        url: B,
                                                        isOpenLinkInNewTab: w
                                                    })
                                                })]
                                            }), G({
                                                className: "tags-next-to-logo"
                                            })]
                                        })]
                                    }), G({
                                        className: "tags-at-the-bottom"
                                    })]
                                }), Object(I.jsx)(u.a, {
                                    id: Xe.__hash,
                                    children: Xe
                                })]
                            })
                        }, i)]
                    })
                },
                tt = Object(g.b)(et);

            function nt(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function rt(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? nt(Object(n), !0).forEach((function(t) {
                        Object(r.default)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : nt(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            et.defaultProps = {
                iconType: X.d.outline
            };
            var ot = function(e) {
                    return Object(I.jsx)("svg", rt(rt({
                        width: "6",
                        height: "1",
                        viewBox: "0 0 6 1",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, e), {}, {
                        children: Object(I.jsx)("path", {
                            stroke: "#676879",
                            strokeLinecap: "round",
                            d: "M.25.75h5.5"
                        })
                    }))
                },
                at = function(e) {
                    var t = e.menuSectionItems,
                        n = e.maxNumberOfItemsInColumn,
                        r = e.title,
                        o = e.subtitle,
                        a = e.seeMoreItem,
                        i = e.translate,
                        c = e.classname,
                        s = e.titleLine,
                        d = e.titleImage,
                        l = e.titleCTA,
                        m = e.titleUrl,
                        h = e.menuId,
                        f = e.id,
                        x = e.withTitleUnderline,
                        g = Object(p.useCallback)((function(e, t, n) {
                            Object(oe.trackEvent)(N.HEADER_SUBMENU_LINK_CLICKED, {
                                kind: t,
                                info1: n,
                                info2: h,
                                info3: f
                            }), null === e || void 0 === e || e.stopPropagation()
                        }), [f, h]),
                        w = Object(p.useCallback)((function() {
                            return t.map((function(e) {
                                return Object(I.jsx)(tt, rt(rt({}, e), {}, {
                                    menuId: h,
                                    sectionId: f
                                }))
                            }))
                        }), [t]),
                        j = Object(p.useCallback)((function(e) {
                            if (!e) return null;
                            var t = e.title,
                                n = e.buttonType,
                                r = void 0 === n ? b.c : n,
                                o = e.eventInfo,
                                a = Object(Be.default)(e, ["title", "buttonType", "eventInfo"]),
                                c = rt({
                                    buttonText: i(t),
                                    buttonType: r,
                                    onClick: function(e) {
                                        return g(e, null === a || void 0 === a ? void 0 : a.url, o)
                                    }
                                }, a);
                            return Object(I.jsx)(Oe.a, rt({}, c))
                        }), [g, i]);
                    return Object(I.jsxs)("div", {
                        className: "jsx-".concat(Ge.__hash) + " header-menu-section-component",
                        children: [Object(I.jsxs)("div", {
                            onClick: function(e) {
                                var t = 0 === (null === e || void 0 === e ? void 0 : e.screenX) && 0 === (null === e || void 0 === e ? void 0 : e.screenY);
                                m && (Object(oe.trackEvent)(N.HEADER_SUBMENU_LINK_CLICKED, {
                                    kind: m,
                                    info1: t ? "keyboard" : "mouse",
                                    info2: h,
                                    info3: f
                                }), window.location.href = m)
                            },
                            className: "jsx-".concat(Ge.__hash) + " " + (E()("header-menu-section-title", {
                                "with-underline": x,
                                "with-image-and-CTA": d && l
                            }) || ""),
                            children: [(d || l) && Object(I.jsxs)("div", {
                                className: "jsx-".concat(Ge.__hash) + " header-menu-section-title-image-and-cta",
                                children: [d && Object(I.jsx)("a", {
                                    href: m,
                                    tabIndex: "-1",
                                    className: "jsx-".concat(Ge.__hash),
                                    children: Object(I.jsx)(Ue.a, {
                                        src: d,
                                        className: "header-menu-section-title-image"
                                    })
                                }), j(l)]
                            }), s && Object(I.jsx)(ot, {
                                className: "header-menu-section-title-line"
                            }), Object(I.jsx)(He.a, {
                                className: "header-menu-section-title-text",
                                text: i(r)
                            })]
                        }), o && Object(I.jsx)("div", {
                            className: "jsx-".concat(Ge.__hash) + " header-menu-section-subtitle",
                            children: Object(I.jsx)(He.a, {
                                text: i(o)
                            })
                        }), Object(I.jsx)("div", {
                            style: {
                                "--max-number-of-items-in-column": n
                            },
                            className: "jsx-".concat(Ge.__hash) + " " + (E()("header-menu-section-items-wrapper", c) || ""),
                            children: w()
                        }), a && Object(I.jsx)("div", {
                            className: "jsx-".concat(Ge.__hash) + " header-menu-see-more-wrapper",
                            children: j(a)
                        }), Object(I.jsx)(u.a, {
                            id: Ge.__hash,
                            children: Ge
                        })]
                    })
                },
                it = Object(g.b)(at);
            at.defaultProps = {
                maxNumberOfItemsInColumn: 3
            };
            "".concat(32, "px");
            var ct = "".concat(16, "px"),
                st = ("".concat(4, "px"), "".concat(4, "px")),
                dt = [".sections-header-menu-component{width:100%;background-color:white;padding:0;box-shadow:none;}", ".sections-header-menu-component .header-menu-sections-wrapper{max-width:".concat("".concat(l.k, "px"), ";width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:auto;padding:0px 32px;}"), ".sections-header-menu-component .header-menu-sections-wrapper .sections-separator{border-right:1px solid;border-color:".concat(j.a[O.BACKGROUND_GRAY_COLOR_NAME], ";margin:32px 36px;}"), ".sections-header-menu-component .header-menu-sections-wrapper .sections-separator.products{margin-right:80px;}", ".sections-header-menu-component .header-menu-sections-wrapper .sections-separator.mondayProducts{margin-right:64px;}", ".sections-header-menu-component .header-menu-sections-wrapper .header-menu-section-component-wrapper{padding:48px 0 0px;background-color:var(--section-background-color);min-height:400px;}", ".sections-header-menu-component .header-menu-sections-wrapper .header-menu-section-component-wrapper.has-background-color{-webkit-flex:1;-ms-flex:1;flex:1;padding-left:54px;padding-top:48px;padding-bottom:32px;}", ".sections-header-menu-component .header-menu-sections-wrapper .header-menu-section-component-wrapper.products:first-of-type .header-menu-section-title{font-size:1.238rem;margin-bottom:16px;margin-right:80px;color:unset;font-weight:500;}", ".sections-header-menu-component .header-menu-sections-wrapper .header-menu-section-component-wrapper.products:first-of-type .header-menu-section-subtitle{font-size:0.8125rem;line-height:20px;margin-right:50px;color:".concat(j.a.asphalt, ";}"), ".sections-header-menu-component .header-menu-sections-wrapper .header-menu-section-component-wrapper.products{width:312px;}", ".sections-header-menu-component .header-menu-sections-wrapper .header-menu-section-component-wrapper.mondayProducts{padding-top:30px;}", ".sections-header-menu-component .header-menu-sections-wrapper .header-menu-section-component-wrapper.mondayProducts .menu-item-title{opacity:0.85;}", ".sections-header-menu-component .header-menu-sections-wrapper .header-menu-section-component-wrapper.mondayProducts .header-menu-section-items-wrapper.mondayProducts{margin-top:0;}", "@media (max-width:".concat(l.f, "){.sections-header-menu-component .header-menu-sections-wrapper .sections-separator{margin-right:").concat(ct, ";margin-left:").concat(st, ";}}")];

            function ut(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function pt(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ut(Object(n), !0).forEach((function(t) {
                        Object(r.default)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ut(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            dt.__hash = "4284870950";
            var lt = function(e) {
                    var t = e.menuItems,
                        n = e.menuId,
                        r = Object(p.useCallback)((function() {
                            return t.map((function(e, r) {
                                var o = e.backgroundColor,
                                    a = e.classname,
                                    i = e.noSeparator,
                                    c = e.title,
                                    s = e.hasFirstSeparator,
                                    d = t.length - 1 === r,
                                    u = !!o;
                                return Object(I.jsxs)(I.Fragment, {
                                    children: [s && Object(I.jsx)("div", {
                                        className: E()("sections-separator", a)
                                    }), Object(I.jsx)("div", {
                                        className: E()("header-menu-section-component-wrapper", a, {
                                            "has-background-color": u
                                        }),
                                        style: {
                                            "--section-background-color": j.a[o] || "transparent"
                                        },
                                        children: Object(I.jsx)(it, pt(pt({}, e), {}, {
                                            menuId: n
                                        }))
                                    }, c), !d && !i && Object(I.jsx)("div", {
                                        className: E()("sections-separator", a)
                                    })]
                                })
                            }))
                        }), [t]);
                    return Object(I.jsxs)("div", {
                        className: "jsx-".concat(dt.__hash) + " sections-header-menu-component",
                        children: [Object(I.jsx)("div", {
                            className: "jsx-".concat(dt.__hash) + " header-menu-sections-wrapper",
                            children: r()
                        }), Object(I.jsx)(u.a, {
                            id: dt.__hash,
                            children: dt
                        })]
                    })
                },
                mt = ("".concat(32, "px"), "".concat(4, "px"), [".structured-header-menu-component{width:100%;background-color:".concat(j.a.white, ";display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}"), ".structured-header-menu-component.with-left-panel .structured-header-menu-content{padding-left:64px;}", ".structured-header-menu-component .header-menu-section-item-component-wrapper{margin-left:-8px;}", ".structured-header-menu-component.solutions .header-menu-section-items-wrapper,.structured-header-menu-component.teams .header-menu-section-items-wrapper{margin-top:16px;}", ".structured-header-menu-component.solutions,.structured-header-menu-component.teams,.structured-header-menu-component.platform{min-height:592px;}", ".structured-header-menu-component.solutions .structured-header-menu .structured-header-menu-top-part .structured-header-menu-content .header-menu-sections-wrapper .header-menu-section-item-component-wrapper,.structured-header-menu-component.teams .structured-header-menu .structured-header-menu-top-part .structured-header-menu-content .header-menu-sections-wrapper .header-menu-section-item-component-wrapper,.structured-header-menu-component.customers .structured-header-menu .structured-header-menu-top-part .structured-header-menu-content .header-menu-sections-wrapper .header-menu-section-item-component-wrapper,.structured-header-menu-component.resources .structured-header-menu .structured-header-menu-top-part .structured-header-menu-content .header-menu-sections-wrapper .header-menu-section-item-component-wrapper{margin-bottom:10px;}", ".structured-header-menu-component.customers .structured-header-menu .structured-header-menu-top-part .structured-header-menu-content .header-menu-sections-wrapper .header-menu-section-component-wrapper{margin-right:90px;}", ".structured-header-menu-component.customers .structured-header-menu .structured-header-menu-top-part .structured-header-menu-content .header-menu-sections-wrapper .header-menu-section-component-wrapper:nth-child(2){margin-right:30px;}", ".structured-header-menu-component.resources .structured-header-menu .structured-header-menu-top-part .structured-header-menu-content .header-menu-sections-wrapper .header-menu-section-component-wrapper{margin-right:0px;}", ".structured-header-menu-component.resources .structured-header-menu .structured-header-menu-top-part .structured-header-menu-content .header-menu-sections-wrapper .header-menu-section-component-wrapper:nth-child(3){margin-right:30px;}", ".structured-header-menu-component.resources .structured-header-menu .structured-header-menu-top-part .structured-header-menu-content .header-menu-sections-wrapper .header-menu-section-component-wrapper .header-menu-section-title{margin-right:32px;}", ".structured-header-menu-component.resources .structured-header-menu .structured-header-menu-top-part .structured-header-menu-content .header-menu-sections-wrapper .header-menu-section-component-wrapper .header-menu-section-item-component-wrapper{margin-right:60px;}", ".structured-header-menu-component .structured-header-menu{max-width:".concat("".concat(l.k, "px"), ";width:100%;height:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:0px 32px;}"), ".structured-header-menu-component .structured-header-menu .structured-header-menu-top-part{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100%;}", ".structured-header-menu-component .structured-header-menu .structured-header-menu-top-part .structured-header-menu-content{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}", ".structured-header-menu-component .structured-header-menu .structured-header-menu-top-part .structured-header-menu-content .header-menu-sections-wrapper{max-width:".concat("".concat(l.k, "px"), ";width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:auto;}"), ".structured-header-menu-component .structured-header-menu .structured-header-menu-top-part .structured-header-menu-content .header-menu-sections-wrapper .sections-separator{border-right:1px solid;border-color:".concat(j.a[O.BACKGROUND_GRAY_COLOR_NAME], ";margin:0 0;}"), ".structured-header-menu-component .structured-header-menu .structured-header-menu-top-part .structured-header-menu-content .header-menu-sections-wrapper .sections-separator.products{margin-right:80px;}", ".structured-header-menu-component .structured-header-menu .structured-header-menu-top-part .structured-header-menu-content .header-menu-sections-wrapper .sections-separator.mondayProducts{margin-right:64px;}", ".structured-header-menu-component .structured-header-menu .structured-header-menu-top-part .structured-header-menu-content .header-menu-sections-wrapper .header-menu-section-component-wrapper{padding:48px 0 0px;background-color:var(--section-background-color);min-height:400px;margin-right:32px;}", ".structured-header-menu-component .structured-header-menu .structured-header-menu-top-part .structured-header-menu-content .header-menu-sections-wrapper .header-menu-section-component-wrapper.has-background-color{-webkit-flex:1;-ms-flex:1;flex:1;padding-left:54px;padding-top:48px;padding-bottom:32px;}", ".structured-header-menu-component .structured-header-menu .structured-header-menu-top-part .structured-header-menu-content .header-menu-sections-wrapper .header-menu-section-component-wrapper .header-menu-section-title .header-menu-section-title-text{margin-bottom:10px;}", ".structured-header-menu-component .structured-header-menu .structured-header-menu-top-part .structured-header-menu-content .header-menu-sections-wrapper .header-menu-section-component-wrapper .header-menu-section-title.with-underline .header-menu-section-title-text{margin-bottom:6px;}", ".structured-header-menu-component .structured-header-menu .structured-header-menu-top-part .structured-header-menu-content .header-menu-sections-wrapper .header-menu-section-component-wrapper .header-menu-section-item-component-wrapper.inner-menu-bottom-item{height:unset;}", ".structured-header-menu-component .structured-header-menu .structured-header-menu-top-part .structured-header-menu-content .header-menu-sections-wrapper .header-menu-section-component-wrapper .header-menu-section-item-component-wrapper.story{width:280px;}", ".structured-header-menu-component .structured-header-menu .structured-header-menu-top-part .structured-header-menu-content .header-menu-sections-wrapper .header-menu-section-component-wrapper .header-menu-section-item-component-wrapper.story:hover{-webkit-filter:drop-shadow(0px 8px 24px rgba(29,140,242,0.08));filter:drop-shadow(0px 8px 24px rgba(29,140,242,0.08));}", ".structured-header-menu-component .structured-header-menu .structured-header-menu-top-part .structured-header-menu-content .header-menu-sections-wrapper .header-menu-section-component-wrapper .header-menu-section-item-component-wrapper.story img{height:115px;}", ".structured-header-menu-component .structured-header-menu .structured-header-menu-top-part .structured-header-menu-content .header-menu-sections-wrapper .header-menu-section-component-wrapper .header-menu-section-item-component-wrapper.feature{width:286px;margin-right:18px;margin-bottom:10px;}", ".structured-header-menu-component .structured-header-menu .structured-header-menu-top-part .structured-header-menu-content .header-menu-sections-wrapper .header-menu-section-component-wrapper .header-menu-section-item-component-wrapper.feature .menu-item-title-icon{background-color:transparent;}", ".structured-header-menu-component .structured-header-menu .structured-header-menu-top-part .structured-header-menu-content .header-menu-sections-wrapper .header-menu-section-component-wrapper .header-menu-section-item-component-wrapper.feature:hover .menu-item-title-icon{border-color:".concat(j.a[O.TRANSPARENT_COLOR_NAME], ";}"), ".structured-header-menu-component .structured-header-menu .structured-header-menu-top-part .structured-header-menu-content .header-menu-sections-wrapper .header-menu-section-component-wrapper .header-menu-section-item-component-wrapper.integration,.structured-header-menu-component .structured-header-menu .structured-header-menu-top-part .structured-header-menu-content .header-menu-sections-wrapper .header-menu-section-component-wrapper .header-menu-section-item-component-wrapper.addOn{height:68px;width:208px;}", ".structured-header-menu-component .structured-header-menu .structured-header-menu-top-part .structured-header-menu-content .header-menu-sections-wrapper .header-menu-section-component-wrapper .header-menu-section-item-component-wrapper.integration .header-menu-section-item-component .header-menu-item-content .menu-item-title-icon,.structured-header-menu-component .structured-header-menu .structured-header-menu-top-part .structured-header-menu-content .header-menu-sections-wrapper .header-menu-section-component-wrapper .header-menu-section-item-component-wrapper.addOn .header-menu-section-item-component .header-menu-item-content .menu-item-title-icon{margin-right:8px;}", ".structured-header-menu-component .structured-header-menu .structured-header-menu-top-part .structured-header-menu-content .header-menu-sections-wrapper .header-menu-section-component-wrapper .header-menu-section-item-component-wrapper.integration .header-menu-section-item-component .header-menu-item-content.has-image-instead-title,.structured-header-menu-component .structured-header-menu .structured-header-menu-top-part .structured-header-menu-content .header-menu-sections-wrapper .header-menu-section-component-wrapper .header-menu-section-item-component-wrapper.addOn .header-menu-section-item-component .header-menu-item-content.has-image-instead-title{-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;gap:8px;}", ".structured-header-menu-component .structured-header-menu .structured-header-menu-top-part .structured-header-menu-content .header-menu-sections-wrapper .header-menu-section-component-wrapper .header-menu-section-item-component-wrapper.integration .header-menu-section-item-component .header-menu-item-content.has-image-instead-title .picture-component,.structured-header-menu-component .structured-header-menu .structured-header-menu-top-part .structured-header-menu-content .header-menu-sections-wrapper .header-menu-section-component-wrapper .header-menu-section-item-component-wrapper.addOn .header-menu-section-item-component .header-menu-item-content.has-image-instead-title .picture-component{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:40px;height:40px;border:".concat("1px solid ".concat(j.a[O.BRAND_WORK_MANAGEMENT_LIGHTER_TINT_01]), ";border-radius:4px;}"), ".structured-header-menu-component .structured-header-menu .structured-header-menu-top-part .structured-header-menu-content .header-menu-sections-wrapper .header-menu-section-component-wrapper .header-menu-section-item-component-wrapper.integration .header-menu-section-item-component svg,.structured-header-menu-component .structured-header-menu .structured-header-menu-top-part .structured-header-menu-content .header-menu-sections-wrapper .header-menu-section-component-wrapper .header-menu-section-item-component-wrapper.addOn .header-menu-section-item-component svg{border:1px solid var(--icon-stroke-color);border-radius:4px;}", ".structured-header-menu-component .structured-header-menu .structured-header-menu-top-part .structured-header-menu-content .header-menu-sections-wrapper .header-menu-section-component-wrapper .header-menu-section-item-component .header-menu-item-content .menu-item-image-and-caption-wrapper{position:relative;}", ".structured-header-menu-component .structured-header-menu .structured-header-menu-top-part .structured-header-menu-content .header-menu-sections-wrapper .header-menu-section-component-wrapper .header-menu-section-item-component .header-menu-item-content .menu-item-image-and-caption-wrapper .menu-item-image-floating-caption{position:absolute;bottom:12px;left:8px;padding:4px;background-color:".concat(j.a[O.BRAND_WORK_MANAGEMENT_PRIMARY_COLOR], ";font-size:12px;border-radius:4px;color:white;margin-right:8px;}"), "@media (max-width:".concat(l.j, "){.structured-header-menu-component.solutions .structured-header-menu .structured-header-menu-top-part .structured-header-menu-left-panel,.structured-header-menu-component.teams .structured-header-menu .structured-header-menu-top-part .structured-header-menu-left-panel,.structured-header-menu-component.platform .structured-header-menu .structured-header-menu-top-part .structured-header-menu-left-panel{min-width:304px;}.structured-header-menu-component.solutions .structured-header-menu .structured-header-menu-top-part .structured-header-menu-content,.structured-header-menu-component.teams .structured-header-menu .structured-header-menu-top-part .structured-header-menu-content,.structured-header-menu-component.platform .structured-header-menu .structured-header-menu-top-part .structured-header-menu-content{padding-left:40px;}.structured-header-menu-component.solutions .structured-header-menu .structured-header-menu-top-part .structured-header-menu-content .header-menu-sections-wrapper .header-menu-section-component-wrapper.features,.structured-header-menu-component.teams .structured-header-menu .structured-header-menu-top-part .structured-header-menu-content .header-menu-sections-wrapper .header-menu-section-component-wrapper.features,.structured-header-menu-component.platform .structured-header-menu .structured-header-menu-top-part .structured-header-menu-content .header-menu-sections-wrapper .header-menu-section-component-wrapper.features{margin-right:8px;}.structured-header-menu-component.solutions .structured-header-menu .structured-header-menu-top-part .structured-header-menu-content .header-menu-sections-wrapper .header-menu-section-component-wrapper,.structured-header-menu-component.teams .structured-header-menu .structured-header-menu-top-part .structured-header-menu-content .header-menu-sections-wrapper .header-menu-section-component-wrapper{margin-right:8px;}.structured-header-menu-component.customers .structured-header-menu .structured-header-menu-top-part .structured-header-menu-content .header-menu-sections-wrapper .header-menu-section-component-wrapper,.structured-header-menu-component.resources .structured-header-menu .structured-header-menu-top-part .structured-header-menu-content .header-menu-sections-wrapper .header-menu-section-component-wrapper{margin-right:10px;}.structured-header-menu-component.customers .structured-header-menu .structured-header-menu-top-part .structured-header-menu-content .header-menu-sections-wrapper .header-menu-section-component-wrapper .header-menu-section-component .header-menu-section-items-wrapper .header-menu-section-item-component-wrapper,.structured-header-menu-component.resources .structured-header-menu .structured-header-menu-top-part .structured-header-menu-content .header-menu-sections-wrapper .header-menu-section-component-wrapper .header-menu-section-component .header-menu-section-items-wrapper .header-menu-section-item-component-wrapper{margin-right:32px;margin-bottom:10px;}.structured-header-menu-component.customers .structured-header-menu .structured-header-menu-top-part .structured-header-menu-content .header-menu-sections-wrapper .header-menu-section-component-wrapper{margin-right:20px;}.structured-header-menu-component.customers .structured-header-menu .structured-header-menu-top-part .structured-header-menu-content .header-menu-sections-wrapper .header-menu-section-component-wrapper:nth-child(2){margin-right:52x;}.structured-header-menu-component.customers .structured-header-menu .structured-header-menu-top-part .structured-header-menu-content .header-menu-sections-wrapper .header-menu-section-component-wrapper .header-menu-section-component .header-menu-section-items-wrapper .header-menu-section-item-component-wrapper{margin-right:20px;}}"), "@media (max-width:".concat(l.f, "){.structured-header-menu-component.platform .structured-header-menu .structured-header-menu-top-part .header-menu-section-item-component-wrapper.inner-menu-bottom-item{height:120px;}.structured-header-menu-component.platform .structured-header-menu .structured-header-menu-top-part .header-menu-section-item-component-wrapper.inner-menu-bottom-item .menu-item-description{-webkit-line-clamp:3;}.structured-header-menu-component.solutions .structured-header-menu .structured-header-menu-top-part .structured-header-menu-content,.structured-header-menu-component.teams .structured-header-menu .structured-header-menu-top-part .structured-header-menu-content,.structured-header-menu-component.platform .structured-header-menu .structured-header-menu-top-part .structured-header-menu-content{padding-left:38px;}.structured-header-menu-component.solutions .structured-header-menu .structured-header-menu-top-part .structured-header-menu-left-panel,.structured-header-menu-component.teams .structured-header-menu .structured-header-menu-top-part .structured-header-menu-left-panel,.structured-header-menu-component.platform .structured-header-menu .structured-header-menu-top-part .structured-header-menu-left-panel{min-width:250px;}.structured-header-menu-component.solutions .structured-header-menu .structured-header-menu-top-part .structured-header-menu-left-panel .structured-header-menu-left-panel-items .inner-menu-item .inner-menu-item-title,.structured-header-menu-component.teams .structured-header-menu .structured-header-menu-top-part .structured-header-menu-left-panel .structured-header-menu-left-panel-items .inner-menu-item .inner-menu-item-title,.structured-header-menu-component.platform .structured-header-menu .structured-header-menu-top-part .structured-header-menu-left-panel .structured-header-menu-left-panel-items .inner-menu-item .inner-menu-item-title{font-size:0.875rem;}.structured-header-menu-component.solutions .structured-header-menu .structured-header-menu-top-part .structured-header-menu-left-panel .structured-header-menu-left-panel-items .inner-menu-item .inner-menu-item-subitems .inner-menu-item-subitem,.structured-header-menu-component.teams .structured-header-menu .structured-header-menu-top-part .structured-header-menu-left-panel .structured-header-menu-left-panel-items .inner-menu-item .inner-menu-item-subitems .inner-menu-item-subitem,.structured-header-menu-component.platform .structured-header-menu .structured-header-menu-top-part .structured-header-menu-left-panel .structured-header-menu-left-panel-items .inner-menu-item .inner-menu-item-subitems .inner-menu-item-subitem{padding-left:16px;font-size:0.875rem;}.structured-header-menu-component.solutions .structured-header-menu .structured-header-menu-top-part .structured-header-menu-left-panel .structured-header-menu-left-panel-items .inner-menu-item .inner-menu-item-subitems .inner-menu-item-subitem .inner-menu-item-subitem-title-and-icon,.structured-header-menu-component.teams .structured-header-menu .structured-header-menu-top-part .structured-header-menu-left-panel .structured-header-menu-left-panel-items .inner-menu-item .inner-menu-item-subitems .inner-menu-item-subitem .inner-menu-item-subitem-title-and-icon,.structured-header-menu-component.platform .structured-header-menu .structured-header-menu-top-part .structured-header-menu-left-panel .structured-header-menu-left-panel-items .inner-menu-item .inner-menu-item-subitems .inner-menu-item-subitem .inner-menu-item-subitem-title-and-icon{gap:8px;}.structured-header-menu-component.solutions .structured-header-menu .structured-header-menu-top-part .structured-header-menu-left-panel .header-menu-section-item-component-wrapper.inner-menu-bottom-item,.structured-header-menu-component.teams .structured-header-menu .structured-header-menu-top-part .structured-header-menu-left-panel .header-menu-section-item-component-wrapper.inner-menu-bottom-item,.structured-header-menu-component.platform .structured-header-menu .structured-header-menu-top-part .structured-header-menu-left-panel .header-menu-section-item-component-wrapper.inner-menu-bottom-item{width:216px;}.structured-header-menu-component.customers .structured-header-menu .structured-header-menu-top-part .structured-header-menu-content .header-menu-sections-wrapper .header-menu-section-component-wrapper,.structured-header-menu-component.resources .structured-header-menu .structured-header-menu-top-part .structured-header-menu-content .header-menu-sections-wrapper .header-menu-section-component-wrapper{margin-right:16px;}.structured-header-menu-component.customers .structured-header-menu .structured-header-menu-top-part .structured-header-menu-content .header-menu-sections-wrapper .header-menu-section-component-wrapper .header-menu-section-component .header-menu-section-items-wrapper .header-menu-section-item-component-wrapper,.structured-header-menu-component.resources .structured-header-menu .structured-header-menu-top-part .structured-header-menu-content .header-menu-sections-wrapper .header-menu-section-component-wrapper .header-menu-section-component .header-menu-section-items-wrapper .header-menu-section-item-component-wrapper{width:274px;margin-right:0px;}.structured-header-menu-component.customers .structured-header-menu .structured-header-menu-top-part .structured-header-menu-content .header-menu-sections-wrapper .header-menu-section-component-wrapper:first-child{margin-right:20px;}.structured-header-menu-component.customers .structured-header-menu .structured-header-menu-top-part .structured-header-menu-content .header-menu-sections-wrapper .header-menu-section-component-wrapper:nth-child(2){margin-right:22px;}.structured-header-menu-component.customers .structured-header-menu .structured-header-menu-top-part .structured-header-menu-content .header-menu-sections-wrapper .header-menu-section-component-wrapper .header-menu-section-component .header-menu-section-items-wrapper .header-menu-section-item-component-wrapper{margin-right:16px;}.structured-header-menu-component.resources .structured-header-menu .structured-header-menu-top-part .structured-header-menu-content .header-menu-sections-wrapper .header-menu-section-component-wrapper{margin-right:26px;}.structured-header-menu-component.resources .structured-header-menu .structured-header-menu-top-part .structured-header-menu-content .header-menu-sections-wrapper .header-menu-section-component-wrapper:nth-child(3){margin-right:38px;}.structured-header-menu .structured-header-menu-top-part .structured-header-menu-content .header-menu-sections-wrapper .header-menu-section-component-wrapper.has-background-color:last-child{padding-left:32px;}}")]);
            mt.__hash = "86938340";
            var ht = [".structured-header-menu-content{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}", ".structured-header-menu-content .structured-header-menu-content-title{font-size:1rem;color:".concat(j.a.asphalt, ";padding-top:48px;}"), '.structured-header-menu-content .structured-header-menu-content-title:after{content:"";background:#323338;opacity:0.1;top:6px;display:block;position:relative;height:1px;margin-left:-8px;width:calc(100% - 40px);}', ".structured-header-menu-content .header-menu-section-component-wrapper .header-menu-sections-wrapper{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}", ".structured-header-menu-content .header-menu-section-component-wrapper .header-menu-sections-wrapper .header-menu-section-title{font-size:1rem;font-weight:300;}", ".structured-header-menu-content .header-menu-section-component-wrapper.integrations .header-menu-section-items-wrapper,.structured-header-menu-content .header-menu-section-component-wrapper.addOns .header-menu-section-items-wrapper{margin:8px 0 32px;}", ".structured-header-menu-content .header-menu-section-component-wrapper.integrations .header-menu-section-title,.structured-header-menu-content .header-menu-section-component-wrapper.addOns .header-menu-section-title{font-size:0.8125rem;font-weight:400;}", ".structured-header-menu-content .header-menu-section-component-wrapper.integrations .header-menu-section-title *,.structured-header-menu-content .header-menu-section-component-wrapper.addOns .header-menu-section-title *{font-weight:400;}"];

            function bt(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function ft(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? bt(Object(n), !0).forEach((function(t) {
                        Object(r.default)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : bt(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            ht.__hash = "3384891555";
            var xt = Object(g.b)((function(e) {
                    var t = e.menuId,
                        n = (e.id, e.content),
                        r = void 0 === n ? {} : n,
                        o = e.translate,
                        a = r.title,
                        i = r.menuSections,
                        c = void 0 === i ? [] : i,
                        s = function() {
                            var e = e ? j.a[e] : "transparent";
                            return {
                                "--section-background-color": e
                            }
                        },
                        d = Object(p.useCallback)((function() {
                            return c.map((function(e, n) {
                                var r = e.backgroundColor,
                                    o = e.classname,
                                    a = e.noSeparator,
                                    i = e.title,
                                    d = c.length - 1 === n,
                                    u = !!r;
                                return Object(I.jsxs)(I.Fragment, {
                                    children: [Object(I.jsx)("div", {
                                        className: E()("header-menu-section-component-wrapper", o, {
                                            "has-background-color": u
                                        }),
                                        style: s(),
                                        children: Object(I.jsx)(it, ft(ft({}, e), {}, {
                                            menuId: t
                                        }))
                                    }, i), !d && !a && Object(I.jsx)("div", {
                                        className: E()("sections-separator", o)
                                    })]
                                })
                            }))
                        }), [c]);
                    return Object(I.jsxs)("div", {
                        className: "jsx-".concat(ht.__hash) + " structured-header-menu-content",
                        children: [a && Object(I.jsx)("div", {
                            className: "jsx-".concat(ht.__hash) + " structured-header-menu-content-title",
                            children: o(a)
                        }), Object(I.jsx)("div", {
                            className: "jsx-".concat(ht.__hash) + " header-menu-sections-wrapper",
                            children: d()
                        }), Object(I.jsx)(u.a, {
                            id: ht.__hash,
                            children: ht
                        })]
                    })
                })),
                gt = n("sEfC"),
                wt = n.n(gt);
            var jt = function(e) {
                    var t = Object(p.useRef)();
                    return Object(p.useEffect)((function() {
                        t.current = e
                    }), [e]), t.current
                },
                Ot = "".concat(150, "ms transform ease-in-out"),
                kt = "".concat(150, "ms max-height ease-in-out,").concat(150, "ms margin ease-in-out"),
                yt = [".structured-header-menu-left-panel{min-width:320px;padding:24px 24px 24px 0;box-shadow:32px 0 40px -32px rgba(29,140,242,0.16);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}", ".structured-header-menu-left-panel .structured-header-menu-left-panel-items{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}", ".structured-header-menu-left-panel .structured-header-menu-left-panel-items .inner-menu-item{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;border-top:".concat("1px solid ".concat(j.a[O.BRAND_WORK_MANAGEMENT_LIGHTER_TINT_01]), ";margin:1px;}"), ".structured-header-menu-left-panel .structured-header-menu-left-panel-items .inner-menu-item:last-child{border-bottom:".concat("1px solid ".concat(j.a[O.BRAND_WORK_MANAGEMENT_LIGHTER_TINT_01]), ";}"), ".structured-header-menu-left-panel .structured-header-menu-left-panel-items .inner-menu-item.collapsed .inner-menu-item-subitems{max-height:160px;margin:0 0 16px;}", ".structured-header-menu-left-panel .structured-header-menu-left-panel-items .inner-menu-item .inner-menu-item-title{padding:16px 0;font-size:1rem;font-weight:400;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;gap:8px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}", ".structured-header-menu-left-panel .structured-header-menu-left-panel-items .inner-menu-item .inner-menu-item-title .expand-arrow{-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);-webkit-transition:".concat(Ot, ";transition:").concat(Ot, ";display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-right:14px;}"), ".structured-header-menu-left-panel .structured-header-menu-left-panel-items .inner-menu-item .inner-menu-item-title .expand-arrow.down-direction{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}", ".structured-header-menu-left-panel .structured-header-menu-left-panel-items .inner-menu-item .inner-menu-item-subitems{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:0px;max-height:0px;overflow:hidden;-webkit-transition:".concat(kt, ";transition:").concat(kt, ";}"), ".structured-header-menu-left-panel .structured-header-menu-left-panel-items .inner-menu-item .inner-menu-item-subitems .inner-menu-item-subitem{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;font-size:1rem;line-height:40px;padding-left:8px;border-top-right-radius:8px;border-bottom-right-radius:8px;margin:1px;}", ".structured-header-menu-left-panel .structured-header-menu-left-panel-items .inner-menu-item .inner-menu-item-subitems .inner-menu-item-subitem.selected{background-color:".concat(j.a[O.BACKGROUND_GRAY_COLOR_NAME], ";}"), ".structured-header-menu-left-panel .structured-header-menu-left-panel-items .inner-menu-item .inner-menu-item-subitems .inner-menu-item-subitem .inner-menu-item-subitem-title-and-icon{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;gap:16px;}", ".structured-header-menu-left-panel .structured-header-menu-left-panel-items .inner-menu-item .inner-menu-item-subitems .inner-menu-item-subitem .inner-menu-item-subitem-title-and-icon .inner-menu-item-subitem-title-icon{height:22px;width:22px;}", ".structured-header-menu-left-panel .structured-header-menu-left-panel-items .inner-menu-item .inner-menu-item-subitems .inner-menu-item-subitem .inner-menu-item-subitem-title-and-icon .inner-menu-item-subitem-tag{font-size:0.6875rem;font-weight:400;color:".concat(j.a[O.DEV_DARKER_TINT_02], ";background-color:").concat(j.a[O.DEV_LIGHT_TINT_02], ";border-radius:2px;padding:1px 5px;line-height:normal;}"), ".structured-header-menu-left-panel .structured-header-menu-left-panel-items .inner-menu-item .inner-menu-item-subitems .inner-menu-item-subitem .inner-menu-item-subitem-title-arrow{margin-right:16px;}", ".structured-header-menu-left-panel .structured-header-menu-left-panel-items .inner-menu-item .inner-menu-item-subitems .inner-menu-item-subitem .inner-menu-item-subitem-title-arrow .arrow-icon{height:8px;}", ".structured-header-menu-left-panel .structured-header-menu-left-panel-items .inner-menu-item .inner-menu-item-subitems .inner-menu-item-subitem .inner-menu-item-subitem-title-arrow .arrow-icon path{fill:".concat(j.a.asphalt, ";}")];

            function vt(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function At(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? vt(Object(n), !0).forEach((function(t) {
                        Object(r.default)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : vt(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            yt.__hash = "1529934726";
            var _t = function(e) {
                    return Object(I.jsx)("svg", At(At({
                        width: "11",
                        height: "8",
                        viewBox: "0 0 14 11",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, e), {}, {
                        children: Object(I.jsx)("path", {
                            d: "M0 .342h14L7.368 10.658 0 .342z",
                            fill: "#323338"
                        })
                    }))
                },
                Et = function(e) {
                    return Object(I.jsx)("svg", At(At({
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "8",
                        height: "14",
                        viewBox: "0 0 8 14"
                    }, e), {}, {
                        children: Object(I.jsx)("path", {
                            d: "M.313 12.045l5.113-5.112L.313 1.821A1.065 1.065 0 1 1 1.82.312L7.687 6.18a1.064 1.064 0 0 1 0 1.508L1.82 13.554a1.065 1.065 0 1 1-1.507-1.508z"
                        })
                    }))
                },
                Nt = "default",
                It = "user",
                Ct = wt()((function(e) {
                    return function(e) {
                        var t = e.menuItem,
                            n = e.subMenuItem,
                            r = e.changedBy;
                        Object(oe.trackEvent)(N.HEADER_LEFT_PANEL_SUBITEM_CONTENT_VIEWED, {
                            kind: n.id,
                            info1: t.id,
                            info3: r
                        })
                    }({
                        menuItem: e.menuItem,
                        subMenuItem: e.subMenuItem,
                        changedBy: e.changedBy
                    })
                }), 1e3),
                St = Object(g.b)((function(e) {
                    var t = e.menu,
                        n = e.menuId,
                        r = e.innerMenuIndex,
                        o = e.onItemClick,
                        a = e.innerMenuSubIndex,
                        i = e.setInnerMenuIndex,
                        c = e.setInnerMenuSubIndex,
                        s = e.translate,
                        d = e.hasSubItems,
                        l = e.itemsCollapsedState,
                        m = t.bottomItem,
                        h = jt(a),
                        b = function(e) {
                            var r = e.itemIndex;
                            Object(oe.trackEvent)(N.HEADER_LEFT_PANEL_ITEM_CLICKED, {
                                kind: t.items[r].id,
                                info2: n,
                                info3: l[r]
                            }), o(r)
                        },
                        f = function(e) {
                            var r = e.itemIndex,
                                o = e.subItemIndex;
                            c(o), Object(oe.trackEvent)(N.HEADER_LEFT_PANEL_SUBITEM_CLICKED, {
                                kind: t.items[r].subItems[o].id,
                                info2: n
                            })
                        };
                    Object(p.useEffect)((function() {
                        if (d(r)) {
                            var e = void 0 === h ? Nt : It;
                            Ct({
                                menuItem: t.items[r],
                                subMenuItem: t.items[r].subItems[a],
                                changedBy: e
                            })
                        }
                    }), [a, r]);
                    var x = function(e) {
                            var t = e.itemIndex,
                                n = e.subItem,
                                o = e.subItemIndex,
                                d = n.icon,
                                u = n.title,
                                p = n.hasBetaTag,
                                l = d;
                            return Object(I.jsxs)("div", {
                                className: E()("inner-menu-item-subitem", {
                                    selected: t === r && o === a
                                }),
                                onClick: function() {
                                    f({
                                        itemIndex: t,
                                        subItemIndex: o
                                    })
                                },
                                onMouseEnter: function() {
                                    ! function(e) {
                                        var t = e.itemIndex,
                                            n = e.subItemIndex;
                                        i(t), c(n)
                                    }({
                                        itemIndex: t,
                                        subItemIndex: o
                                    })
                                },
                                onKeyPress: Object(se.a)((function() {
                                    return f({
                                        itemIndex: t,
                                        subItemIndex: o
                                    })
                                })),
                                tabIndex: t === r ? 0 : -1,
                                children: [Object(I.jsxs)("div", {
                                    className: "inner-menu-item-subitem-title-and-icon",
                                    children: [d && Object(I.jsx)(l, {
                                        className: E()("inner-menu-item-subitem-title-icon")
                                    }), Object(I.jsx)("span", {
                                        children: s(u)
                                    }), p && Object(I.jsx)("div", {
                                        className: "inner-menu-item-subitem-tag",
                                        children: s("header.tabs.solutions.byProduct.dev.beta")
                                    })]
                                }), Object(I.jsx)("div", {
                                    className: "inner-menu-item-subitem-title-arrow",
                                    children: Object(I.jsx)(Et, {
                                        className: "arrow-icon"
                                    })
                                })]
                            })
                        },
                        g = function(e) {
                            return d(e) && l[e]
                        },
                        w = function(e) {
                            return !d(e)
                        };
                    return Object(I.jsxs)("div", {
                        className: "jsx-".concat(yt.__hash) + " structured-header-menu-left-panel",
                        children: [Object(I.jsx)("div", {
                            className: "jsx-".concat(yt.__hash) + " structured-header-menu-left-panel-items",
                            children: t.items.map((function(e, t) {
                                return function(e) {
                                    var t = e.item,
                                        n = e.itemIndex,
                                        o = n === r;
                                    return Object(I.jsxs)("div", {
                                        className: E()("inner-menu-item", {
                                            selected: o,
                                            collapsed: l[n]
                                        }),
                                        children: [Object(I.jsxs)("div", {
                                            className: "inner-menu-item-title",
                                            onClick: function() {
                                                return b({
                                                    itemIndex: n
                                                })
                                            },
                                            onKeyPress: Object(se.a)((function() {
                                                return b({
                                                    itemIndex: n
                                                })
                                            })),
                                            tabIndex: 0,
                                            children: [s(null === t || void 0 === t ? void 0 : t.title), w(n) && Object(I.jsx)(_t, {
                                                className: E()("expand-arrow", {
                                                    "down-direction": g(n)
                                                })
                                            })]
                                        }), d(n) && Object(I.jsx)("div", {
                                            className: E()("inner-menu-item-subitems"),
                                            children: t.subItems.map((function(e, t) {
                                                return x({
                                                    itemIndex: n,
                                                    subItem: e,
                                                    subItemIndex: t
                                                })
                                            }))
                                        })]
                                    })
                                }({
                                    item: e,
                                    itemIndex: t
                                })
                            }))
                        }), Object(I.jsx)("div", {
                            className: "jsx-".concat(yt.__hash),
                            children: m && Object(I.jsx)(tt, At({}, m))
                        }), Object(I.jsx)(u.a, {
                            id: yt.__hash,
                            children: yt
                        })]
                    })
                })),
                Rt = [".structured-header-menu-bottom-part-component{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:8px 0;border-top:".concat("1px solid ".concat(j.a[O.BACKGROUND_GRAY_COLOR_NAME]), ";}"), ".structured-header-menu-bottom-part-component .spacer{-webkit-flex:1;-ms-flex:1;flex:1;}"];
            Rt.__hash = "3633275640";
            var Mt = [".social-proof-component.jsx-1192858914{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:0.75rem;font-weight:400;color:".concat(j.a.asphalt, ";gap:8px;}"), ".social-proof-component.jsx-1192858914 .stars.jsx-1192858914{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}", ".social-proof-component.jsx-1192858914 .logo-wrapper.jsx-1192858914{height:19px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".social-proof-component.jsx-1192858914 .reviews-text.jsx-1192858914{white-space:nowrap;}"];

            function Dt(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Pt(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Dt(Object(n), !0).forEach((function(t) {
                        Object(r.default)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Dt(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            Mt.__hash = "1192858914";
            var Tt = function(e) {
                    return Object(I.jsxs)("svg", Pt(Pt({
                        width: "14",
                        height: "14",
                        viewBox: "0 0 14 14",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, e), {}, {
                        children: [Object(I.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M7 10.043l-4.114 2.62 1.22-4.723L.343 4.837l4.868-.3L7 0l1.789 4.538 4.868.299L9.894 7.94l1.22 4.723L7 10.043z",
                            fill: "#C3C6D4"
                        }), Object(I.jsx)("mask", {
                            id: "mask0_2436_172234",
                            style: {
                                maskType: "alpha"
                            },
                            maskUnits: "userSpaceOnUse",
                            x: "0",
                            y: "0",
                            width: "14",
                            height: "13",
                            children: Object(I.jsx)("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M7 10.043l-4.114 2.62 1.22-4.723L.343 4.837l4.868-.3L7 0l1.789 4.538 4.868.299L9.894 7.94l1.22 4.723L7 10.043z",
                                fill: "#C3C6D4"
                            })
                        }), Object(I.jsx)("g", {
                            mask: "url(#mask0_2436_172234)",
                            children: Object(I.jsx)("path", {
                                fill: "#FFCB00",
                                d: "M-.026-1.986l14.209-.043.05 17-14.208.043z"
                            })
                        })]
                    }))
                },
                Lt = function(e) {
                    return Object(I.jsxs)("svg", Pt(Pt({
                        width: "14",
                        height: "14",
                        viewBox: "0 0 14 14",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, e), {}, {
                        children: [Object(I.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M7 10.043l-4.114 2.62 1.22-4.723L.343 4.837l4.868-.3L7 0l1.789 4.538 4.868.299L9.894 7.94l1.22 4.723L7 10.043z",
                            fill: "#C3C6D4"
                        }), Object(I.jsx)("mask", {
                            id: "mask0_2436_172223",
                            style: {
                                maskType: "alpha"
                            },
                            maskUnits: "userSpaceOnUse",
                            x: "0",
                            y: "0",
                            width: "14",
                            height: "13",
                            children: Object(I.jsx)("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M7 10.043l-4.114 2.62 1.22-4.723L.343 4.837l4.868-.3L7 0l1.789 4.538 4.868.299L9.894 7.94l1.22 4.723L7 10.043z",
                                fill: "#C3C6D4"
                            })
                        }), Object(I.jsx)("g", {
                            mask: "url(#mask0_2436_172223)",
                            children: Object(I.jsx)("path", {
                                fill: "#FFCB00",
                                d: "M-.026-1.986l8.823-.026.05 17-8.822.026z"
                            })
                        })]
                    }))
                },
                Bt = function(e) {
                    return Object(I.jsxs)("svg", Pt(Pt({
                        width: "34",
                        height: "34",
                        viewBox: "0 0 34 34",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        xmlnsXlink: "http://www.w3.org/1999/xlink"
                    }, e), {}, {
                        children: [Object(I.jsx)("path", {
                            fill: "url(#pattern0)",
                            d: "M0 0h34v34H0z"
                        }), Object(I.jsxs)("defs", {
                            children: [Object(I.jsx)("pattern", {
                                id: "pattern0",
                                patternContentUnits: "objectBoundingBox",
                                width: "1",
                                height: "1",
                                children: Object(I.jsx)("use", {
                                    xlinkHref: "#image0_2434_171328",
                                    transform: "scale(.0039)"
                                })
                            }), Object(I.jsx)("image", {
                                id: "image0_2434_171328",
                                width: "256",
                                height: "256",
                                xlinkHref: "data:image/png;base64,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"
                            })]
                        })]
                    }))
                },
                Ht = function(e) {
                    return Object(I.jsxs)("svg", Pt(Pt({
                        width: "112",
                        height: "19",
                        viewBox: "0 0 112 19",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, e), {}, {
                        children: [Object(I.jsx)("path", {
                            d: "M8.98.056c.075.037.15.074.206.13l3.223 3.223c.13.13.205.299.205.485v14.868c0 .13-.093.224-.224.224a.211.211 0 0 1-.149-.056l-3.037-3.037A.677.677 0 0 1 9 15.41V.056h-.018z",
                            fill: "url(#paint0_linear_2434_171178)"
                        }), Object(I.jsx)("path", {
                            d: "M17.85.205a.828.828 0 0 1 .205-.15V15.41a.677.677 0 0 1-.205.484l-3.037 3.037a.214.214 0 0 1-.373-.149V3.913c0-.168.075-.354.205-.466L17.85.205z",
                            fill: "url(#paint1_linear_2434_171178)"
                        }), Object(I.jsx)("path", {
                            d: "M23.7 12.018l-.223-.224V8.627h-3.075a.228.228 0 0 0-.168.074l-2.198 2.2 7.043 7.06a.66.66 0 0 0 .484.187h3.708c.13 0 .224-.093.224-.224a.211.211 0 0 0-.056-.149L23.7 12.018z",
                            fill: "url(#paint2_linear_2434_171178)"
                        }), Object(I.jsx)("path", {
                            d: "M18.316 0a.676.676 0 0 0-.485.205l-3.223 3.223c-.056.056-.093.13-.13.187h8.999v8.16L23.7 12l3.205-3.186a.677.677 0 0 0 .205-.484V3.913a.677.677 0 0 0-.205-.485L23.682.205A.676.676 0 0 0 23.197 0h-4.881z",
                            fill: "url(#paint3_linear_2434_171178)"
                        }), Object(I.jsx)("path", {
                            d: "M9.167.205A.677.677 0 0 0 8.683 0H.223A.215.215 0 0 0 0 .224C0 .279.019.335.075.39l3.037 3.037c.13.13.298.205.484.205h8.57c.243 0 .448.205.448.447v-.167a.677.677 0 0 0-.205-.485L9.167.205z",
                            fill: "url(#paint4_linear_2434_171178)"
                        }), Object(I.jsx)("path", {
                            d: "M17.831.205A.676.676 0 0 1 18.316 0h4.881c.187 0 .354.075.485.205l3.223 3.223c.13.13.205.298.205.485v.167a.453.453 0 0 0-.447-.447H14.887a.453.453 0 0 0-.447.447v-.167c0-.187.075-.354.205-.485L17.831.205z",
                            fill: "url(#paint5_linear_2434_171178)"
                        }), Object(I.jsx)("path", {
                            d: "M27.11 8.161a.453.453 0 0 1-.447.447h-6.074a.12.12 0 0 0-.112.112c0 .037.019.056.037.075l3.205 3.204 3.205-3.186a.677.677 0 0 0 .205-.484V8.16h-.019z",
                            fill: "url(#paint6_linear_2434_171178)"
                        }), Object(I.jsx)("path", {
                            d: "M111.794 12.15c0-1.528-.876-2.105-3.019-2.646-1.286-.317-1.621-.577-1.621-1.025 0-.447.41-.745 1.248-.745.932.037 1.826.28 2.646.727l.261-1.64a7.358 7.358 0 0 0-2.907-.577c-1.937 0-3.074.987-3.074 2.366 0 1.49.839 2.05 2.851 2.553 1.397.335 1.789.559 1.789 1.155 0 .54-.541.875-1.491.875a6.075 6.075 0 0 1-3.074-.95l-.261 1.658a7.55 7.55 0 0 0 3.242.783c2.236 0 3.41-.95 3.41-2.534zm-7.621 2.366v-8.16h-1.975v5.533c-.652.634-1.342 1.044-2.031 1.044-.801 0-1.137-.485-1.137-1.211V6.337h-1.975v5.888c0 1.509.839 2.422 2.441 2.422 1.118 0 2.031-.578 2.832-1.305l.28 1.137 1.565.037zm-8.31 0v-8.16h-1.956v8.16h1.956zm-.969-11.738a1.13 1.13 0 0 1 1.137 1.137 1.13 1.13 0 0 1-1.137 1.136 1.13 1.13 0 0 1-1.137-1.136 1.13 1.13 0 0 1 1.137-1.137zm-4.118 9.018c-.577.708-1.21 1.155-2.012 1.155-.987 0-1.714-.764-1.714-2.366 0-1.789.857-2.665 2.012-2.665a3.825 3.825 0 0 1 1.714.355v3.521zm1.957 2.72V2.386l-1.957.336v3.932a6.47 6.47 0 0 0-1.993-.317c-1.975 0-3.727 1.341-3.727 4.36 0 2.72 1.435 3.987 3.224 3.987 1.192 0 2.012-.596 2.627-1.286l.167 1.118h1.659zM82.28 12.28a3.153 3.153 0 0 1-2.087.913c-.67 0-1.1-.372-1.1-.95 0-.782.616-1.472 3.206-1.77v1.807h-.019zm1.956 2.236V8.964c0-1.92-1.043-2.702-3.204-2.702a8.768 8.768 0 0 0-3.317.652l.242 1.565a7.86 7.86 0 0 1 2.851-.652c.932 0 1.49.336 1.49 1.211V9.3c-3.465.336-5.142 1.174-5.142 3.13 0 1.398.969 2.236 2.422 2.236a3.99 3.99 0 0 0 2.851-1.21l.186 1.043h1.621v.018zm-7.415-.298l-3.13-4.267c1.416-.447 2.347-1.434 2.347-3.037 0-2.086-1.509-3.279-4.006-3.279h-3.447v10.881h2.031v-4.21h.988l3.055 4.304 2.162-.392zm-2.814-7.192c0 1.137-.857 1.752-2.236 1.752h-1.155V5.312h1.267c1.398.019 2.124.633 2.124 1.714zm-6.446 7.49l-.243-1.62a4.356 4.356 0 0 1-.708.055c-.8 0-1.118-.354-1.118-1.025V7.94h2.069l-.336-1.584h-1.733V3.523l-1.937.336v2.496h-1.323V7.94h1.323v4.304c0 1.826 1.08 2.385 2.701 2.385.448.019.876-.018 1.305-.112zm-5.74-2.366c0-1.528-.875-2.105-3.018-2.646-1.285-.317-1.62-.577-1.62-1.025 0-.447.41-.745 1.248-.745.931.037 1.826.28 2.646.727l.279-1.64a7.359 7.359 0 0 0-2.907-.577c-1.937 0-3.074.987-3.074 2.366 0 1.49.839 2.05 2.85 2.553 1.398.335 1.79.559 1.79 1.155 0 .54-.54.875-1.491.875a5.893 5.893 0 0 1-3.037-.95l-.28 1.658a7.566 7.566 0 0 0 3.261.783c2.18 0 3.354-.95 3.354-2.534zm-7.508 2.366v-8.16h-1.975v5.533c-.652.634-1.342 1.044-2.03 1.044-.802 0-1.138-.485-1.138-1.211V6.337h-1.974v5.888c0 1.509.838 2.422 2.44 2.422 1.118 0 2.031-.578 2.832-1.305l.28 1.137 1.565.037zm-8.05-6.353l-.446-1.92c-1.249.224-1.994.876-2.572 1.808l-.372-1.696H41.4v8.161h1.919V9.858a3.825 3.825 0 0 1 2.944-1.695z",
                            fill: "url(#paint7_linear_2434_171178)"
                        }), Object(I.jsx)("path", {
                            d: "M42.63 5.44l-.446-1.807H32.55V5.44h3.633v9.074h2.031V5.44h4.416z",
                            fill: "url(#paint8_linear_2434_171178)"
                        }), Object(I.jsxs)("defs", {
                            children: [Object(I.jsxs)("linearGradient", {
                                id: "paint0_linear_2434_171178",
                                x1: "10.804",
                                y1: "18.99",
                                x2: "10.804",
                                y2: ".052",
                                gradientUnits: "userSpaceOnUse",
                                children: [Object(I.jsx)("stop", {
                                    offset: ".71",
                                    stopColor: "#116BF2"
                                }), Object(I.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#1E50E5"
                                })]
                            }), Object(I.jsxs)("linearGradient", {
                                id: "paint1_linear_2434_171178",
                                x1: "16.247",
                                y1: "18.994",
                                x2: "16.247",
                                y2: ".056",
                                gradientUnits: "userSpaceOnUse",
                                children: [Object(I.jsx)("stop", {
                                    offset: ".71",
                                    stopColor: "#116BF2"
                                }), Object(I.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#1E50E5"
                                })]
                            }), Object(I.jsxs)("linearGradient", {
                                id: "paint2_linear_2434_171178",
                                x1: "19.739",
                                y1: "8.983",
                                x2: "28.604",
                                y2: "17.847",
                                gradientUnits: "userSpaceOnUse",
                                children: [Object(I.jsx)("stop", {
                                    offset: ".41",
                                    stopColor: "#116BF2"
                                }), Object(I.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#185DEC"
                                })]
                            }), Object(I.jsxs)("linearGradient", {
                                id: "paint3_linear_2434_171178",
                                x1: "20.755",
                                y1: "11.999",
                                x2: "20.755",
                                y2: "-.112",
                                gradientUnits: "userSpaceOnUse",
                                children: [Object(I.jsx)("stop", {
                                    offset: ".58",
                                    stopColor: "#116BF2"
                                }), Object(I.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#1E50E5"
                                })]
                            }), Object(I.jsxs)("linearGradient", {
                                id: "paint4_linear_2434_171178",
                                x1: "8.445",
                                y1: "-.19",
                                x2: "4.837",
                                y2: "3.418",
                                gradientUnits: "userSpaceOnUse",
                                children: [Object(I.jsx)("stop", {
                                    offset: ".03",
                                    stopColor: "#59C5FF"
                                }), Object(I.jsx)("stop", {
                                    offset: ".99",
                                    stopColor: "#21B1FF"
                                })]
                            }), Object(I.jsxs)("linearGradient", {
                                id: "paint5_linear_2434_171178",
                                x1: "17.512",
                                y1: ".759",
                                x2: "21.12",
                                y2: "4.367",
                                gradientUnits: "userSpaceOnUse",
                                children: [Object(I.jsx)("stop", {
                                    offset: ".04",
                                    stopColor: "#59C5FF"
                                }), Object(I.jsx)("stop", {
                                    offset: ".99",
                                    stopColor: "#21B1FF"
                                })]
                            }), Object(I.jsxs)("linearGradient", {
                                id: "paint6_linear_2434_171178",
                                x1: "25.606",
                                y1: "10.271",
                                x2: "22.879",
                                y2: "7.544",
                                gradientUnits: "userSpaceOnUse",
                                children: [Object(I.jsx)("stop", {
                                    offset: ".04",
                                    stopColor: "#57C4FF"
                                }), Object(I.jsx)("stop", {
                                    offset: ".99",
                                    stopColor: "#21B1FF"
                                })]
                            }), Object(I.jsxs)("linearGradient", {
                                id: "paint7_linear_2434_171178",
                                x1: "41.401",
                                y1: "8.535",
                                x2: "111.794",
                                y2: "8.535",
                                gradientUnits: "userSpaceOnUse",
                                children: [Object(I.jsx)("stop", {
                                    offset: ".71",
                                    stopColor: "#116BF2"
                                }), Object(I.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#1E50E5"
                                })]
                            }), Object(I.jsxs)("linearGradient", {
                                id: "paint8_linear_2434_171178",
                                x1: "32.551",
                                y1: "9.073",
                                x2: "42.631",
                                y2: "9.073",
                                gradientUnits: "userSpaceOnUse",
                                children: [Object(I.jsx)("stop", {
                                    offset: ".71",
                                    stopColor: "#116BF2"
                                }), Object(I.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#1E50E5"
                                })]
                            })]
                        })]
                    }))
                },
                Ut = Object(g.b)((function(e) {
                    var t = e.translate;
                    return Object(I.jsxs)("div", {
                        className: "jsx-".concat(Mt.__hash) + " social-proof-component",
                        children: [Object(I.jsxs)("span", {
                            className: "jsx-".concat(Mt.__hash) + " stars",
                            children: [Object(I.jsx)(Tt, {}), Object(I.jsx)(Tt, {}), Object(I.jsx)(Tt, {}), Object(I.jsx)(Tt, {}), Object(I.jsx)(Lt, {})]
                        }), Object(I.jsx)("span", {
                            className: "jsx-".concat(Mt.__hash) + " reviews-text",
                            children: t("header.tabs.customers.section.bottomPart.socialProofText")
                        }), Object(I.jsx)("div", {
                            className: "jsx-".concat(Mt.__hash) + " logo-wrapper",
                            children: Object(I.jsx)(Bt, {
                                height: "19",
                                width: "19"
                            })
                        }), Object(I.jsx)("div", {
                            className: "jsx-".concat(Mt.__hash) + " logo-wrapper",
                            children: Object(I.jsx)(Ht, {
                                height: "15",
                                width: "auto"
                            })
                        }), Object(I.jsx)(u.a, {
                            id: Mt.__hash,
                            children: Mt
                        })]
                    })
                })),
                Gt = [".bottom-items-component{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:375px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}", ".bottom-items-component .bottom-items{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".bottom-items-component .bottom-items .separator{width:1px;height:50%;background:".concat(j.a[O.UI_BORDER_LIGHT_COLOR_NAME], ";}"), ".bottom-items-component .bottom-items .header-menu-section-item-component-wrapper{width:auto;height:auto;padding:0 16px;margin:0 8px;}", ".bottom-items-component .bottom-items .header-menu-section-item-component-wrapper .header-menu-section-item-component{font-size:0.8125rem;color:".concat(j.a.asphalt, ";display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;gap:8px;height:24px;}"), ".bottom-items-component .bottom-items .header-menu-section-item-component-wrapper .header-menu-section-item-component .header-menu-item-content{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".bottom-items-component .bottom-items .header-menu-section-item-component-wrapper .header-menu-section-item-component .header-menu-item-content .menu-item-title-icon{margin-right:8px;height:14px;}"];

            function Qt(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Kt(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Qt(Object(n), !0).forEach((function(t) {
                        Object(r.default)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Qt(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            Gt.__hash = "3615428909";
            var zt = function(e) {
                    var t = e.items,
                        n = e.menuId;
                    return Object(I.jsxs)("div", {
                        className: "jsx-".concat(Gt.__hash) + " bottom-items-component",
                        children: [Object(I.jsx)("div", {
                            className: "jsx-".concat(Gt.__hash) + " bottom-items",
                            children: t.map((function(e, t) {
                                return Object(I.jsxs)(I.Fragment, {
                                    children: [0 !== t && Object(I.jsx)("div", {
                                        className: "jsx-".concat(Gt.__hash) + " separator"
                                    }), Object(I.jsx)(tt, Kt(Kt({}, e), {}, {
                                        menuId: n
                                    }))]
                                })
                            }))
                        }), Object(I.jsx)(u.a, {
                            id: Gt.__hash,
                            children: Gt
                        })]
                    })
                },
                Ft = Object(g.b)((function(e) {
                    var t = e.menuId,
                        n = e.panel,
                        r = n.bottomItems,
                        o = n.isSocialProofDisplayed;
                    return Object(I.jsxs)("div", {
                        className: "jsx-".concat(Rt.__hash) + " structured-header-menu-bottom-part-component",
                        children: [o && Object(I.jsx)(Ut, {}), Object(I.jsx)("div", {
                            className: "jsx-".concat(Rt.__hash) + " spacer"
                        }), r && Object(I.jsx)(zt, {
                            menuId: t,
                            items: r
                        }), Object(I.jsx)(u.a, {
                            id: Rt.__hash,
                            children: Rt
                        })]
                    })
                })),
                Yt = {
                    BaseHeaderMenuComponent: Le,
                    SectionsHeaderMenuComponent: lt,
                    StructuredHeaderMenuComponent: function(e) {
                        var t = Object(p.useState)(0),
                            n = t[0],
                            r = t[1],
                            o = Object(p.useState)(0),
                            a = o[0],
                            i = o[1],
                            c = Object(p.useState)([!0, !0]),
                            s = c[0],
                            d = (c[1], e.menuItems),
                            l = e.menuId,
                            m = d.content,
                            h = d.innerMenu,
                            b = function(e) {
                                return h.items[e] && h.items[e].subItems
                            };
                        return Object(I.jsxs)("div", {
                            className: "jsx-".concat(mt.__hash) + " " + (E()("structured-header-menu-component", l, {
                                "with-left-panel": h
                            }) || ""),
                            children: [Object(I.jsxs)("div", {
                                className: "jsx-".concat(mt.__hash) + " structured-header-menu",
                                children: [Object(I.jsxs)("div", {
                                    className: "jsx-".concat(mt.__hash) + " structured-header-menu-top-part",
                                    children: [h && Object(I.jsx)(St, {
                                        menu: h,
                                        hasSubItems: b,
                                        innerMenuIndex: n,
                                        innerMenuSubIndex: a,
                                        itemsCollapsedState: s,
                                        onItemClick: function(e) {
                                            r(e)
                                        },
                                        setInnerMenuIndex: r,
                                        setInnerMenuSubIndex: i,
                                        menuId: l
                                    }), Object(I.jsx)(xt, {
                                        menuId: l,
                                        content: function() {
                                            if (!h) return m;
                                            var e = h.items;
                                            if (e) {
                                                var t = e[n];
                                                return b(n) ? t.subItems[a].content : t.content
                                            }
                                        }()
                                    })]
                                }), Object(I.jsx)("div", {
                                    className: "jsx-".concat(mt.__hash) + " structured-header-menu-bottom-part",
                                    children: d.bottomPanel && Object(I.jsx)(Ft, {
                                        menuId: l,
                                        panel: d.bottomPanel
                                    })
                                })]
                            }), Object(I.jsx)(u.a, {
                                id: mt.__hash,
                                children: mt
                            })]
                        })
                    }
                },
                Vt = [];

            function Jt(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Xt(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Jt(Object(n), !0).forEach((function(t) {
                        Object(r.default)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Jt(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            Vt.__hash = "2008225623";
            var qt, Wt = Object(g.b)(Object(f.b)((function(e) {
                var t = e.showMenu,
                    n = e.showButton,
                    r = e.buttonConfig,
                    o = e.hideLanguagePicker,
                    a = e.shouldShowMainPricingLink,
                    i = e.isSecondaryMenuNeeded,
                    c = e.renderUnifiedLinks,
                    s = e.hideLogin,
                    d = e.abTests,
                    l = e.testTypeformContactSales,
                    m = e.forceTypeformContactSalesExperience,
                    h = e.cloudfrontViewerCountry,
                    f = e.openedMenuId,
                    x = e.openLinkMenu,
                    g = e.closeLinkMenu,
                    w = e.isExistingAccountHeader,
                    j = e.isTypeformDisabled,
                    k = e.translate,
                    y = e.persistantCookies,
                    v = e.pageProductId,
                    A = e.showSuccessStoriesInHeader,
                    _ = function() {
                        return x(X.h)
                    },
                    N = function() {
                        return x(X.m)
                    },
                    C = function() {
                        return x(X.e)
                    },
                    S = function() {
                        return x(X.a)
                    },
                    R = function() {
                        return x(X.g)
                    },
                    M = function(e) {
                        return f === e
                    },
                    D = function(e) {
                        var t = f === e;
                        return Object(I.jsx)("div", {
                            children: t && P(e)
                        })
                    },
                    P = function(e) {
                        var t = X.k[e],
                            n = Yt[X.j[e]];
                        return Object(I.jsx)("div", {
                            className: L.a.HEADER_MENU_COMPONENT_WRAPPER_CLASS_NAME,
                            children: Object(I.jsx)("nav", {
                                "aria-label": "main submenu",
                                className: "menu-component-wrapper",
                                children: n && Object(I.jsx)(n, {
                                    menuItems: t,
                                    menuId: e
                                })
                            })
                        }, e)
                    },
                    T = A || Object(ae.shouldShowSuccessStoriesInHeaderTest)(d, !0),
                    B = Object(ve.a)({
                        abTests: d,
                        fallbackLink: ge.F
                    }).displayTypeform,
                    H = Object(p.useCallback)((function() {
                        !j && B()
                    }), [B, j]),
                    U = function() {
                        var e = {
                            leftLinks: {
                                isVisible: t
                            },
                            languagePicker: {
                                isVisible: !t && n && !o
                            },
                            pricing: {
                                isVisible: t && a()
                            },
                            contactSales: {
                                isVisible: n && (null === r || void 0 === r ? void 0 : r.buttonType) === b.e
                            },
                            login: {
                                isVisible: t && !s
                            },
                            createNewAccountButton: {
                                isVisible: !1
                            },
                            button: {
                                isVisible: n
                            }
                        };
                        return (null === r || void 0 === r ? void 0 : r.buttonType) === b.e && n && (w || Object(ie.j)(y)) && (e.login.isVisible = !1, e.createNewAccountButton.isVisible = !0, e.button.extraProps = {
                            forceGoToMyAccount: !0
                        }), e
                    }(),
                    G = U.leftLinks,
                    Q = U.languagePicker,
                    K = U.pricing,
                    z = U.contactSales,
                    F = U.login,
                    Y = U.button,
                    V = U.createNewAccountButton;
                return Object(I.jsxs)("nav", {
                    "aria-label": "Main",
                    className: "jsx-".concat(Vt.__hash) + " " + (E()("base-header-desktop-content") || ""),
                    children: [G.isVisible && Object(I.jsxs)("div", {
                        className: "jsx-".concat(Vt.__hash) + " left-side-header-links",
                        children: [Object(I.jsx)("div", {
                            role: "list",
                            className: "jsx-".concat(Vt.__hash) + " absolute-main-links",
                            children: Object(I.jsxs)(I.Fragment, {
                                children: [Object(I.jsx)("div", {
                                    className: E()("link-item-with-menu-component-wrapper", {
                                        "is-open": M(X.h)
                                    }),
                                    role: "listitem",
                                    children: Object(I.jsx)(be, {
                                        title: "header.products",
                                        openMenu: _,
                                        closeMenu: g,
                                        isOpen: M(X.h)
                                    })
                                }), D(X.h), Object(I.jsx)("div", {
                                    className: E()("link-item-with-menu-component-wrapper", {
                                        "is-open": M(X.m)
                                    }),
                                    role: "listitem",
                                    children: Object(I.jsx)(be, {
                                        title: "header.teams",
                                        openMenu: N,
                                        closeMenu: g,
                                        isOpen: M(X.m)
                                    })
                                }), D(X.m), Object(I.jsx)("div", {
                                    className: E()("link-item-with-menu-component-wrapper", {
                                        "is-open": M(X.e)
                                    }),
                                    role: "listitem",
                                    children: Object(I.jsx)(be, {
                                        title: "header.platform",
                                        openMenu: C,
                                        closeMenu: g,
                                        isOpen: M(X.e)
                                    })
                                }), D(X.e), T && Object(I.jsx)("div", {
                                    className: E()("link-item-with-menu-component-wrapper", {
                                        "is-open": M(X.a)
                                    }),
                                    role: "listitem",
                                    children: Object(I.jsx)(be, {
                                        title: "header.successStories",
                                        openMenu: S,
                                        closeMenu: g,
                                        isOpen: M(X.a)
                                    })
                                }), T && D(X.a), Object(I.jsx)("div", {
                                    className: E()("link-item-with-menu-component-wrapper", {
                                        "is-open": M(X.g)
                                    }),
                                    role: "listitem",
                                    children: Object(I.jsx)(be, {
                                        title: "header.resources",
                                        openMenu: R,
                                        closeMenu: g,
                                        isOpen: M(X.g)
                                    })
                                }), D(X.g)]
                            })
                        }), i && Object(I.jsx)("div", {
                            className: "jsx-".concat(Vt.__hash) + " absolute-unified-links",
                            children: c()
                        })]
                    }), Object(I.jsxs)("div", {
                        role: "list",
                        className: "jsx-".concat(Vt.__hash) + " right-side-header-links",
                        children: [Q.isVisible && Object(I.jsx)("div", {
                            className: "jsx-".concat(Vt.__hash) + " " + (E()("link-item-component-wrapper", "header-language-picker") || ""),
                            children: Object(I.jsx)(fe.a, {
                                dialogDirection: xe.a.ALIGN_BOTTOM,
                                showLabel: !1,
                                showMainLanguagesOnly: !0
                            })
                        }), K.isVisible && Object(I.jsx)("div", {
                            role: "listitem",
                            className: "jsx-".concat(Vt.__hash) + " link-item-component-wrapper",
                            children: Object(I.jsx)(re.a, {
                                title: "header.pricing",
                                url: ge.lc
                            })
                        }), z.isVisible && function() {
                            var e = {
                                url: ge.F
                            };
                            return Object(ke.a)({
                                abTests: d,
                                isTypeformDisabled: j,
                                cloudfrontViewerCountry: h,
                                testTypeformContactSales: l,
                                forceTypeformContactSalesExperience: m
                            }) && (e = {}), Object(I.jsx)("div", {
                                className: "link-item-component-wrapper",
                                role: "listitem",
                                children: Object(I.jsx)(re.a, Xt({
                                    title: "header.contactSales",
                                    clickEvent: H
                                }, e))
                            })
                        }(), F.isVisible && Object(I.jsx)("div", {
                            role: "listitem",
                            className: "jsx-".concat(Vt.__hash) + " link-item-component-wrapper",
                            children: Object(I.jsx)(re.a, {
                                title: "header.logIn",
                                url: ge.Db
                            })
                        })]
                    }), V.isVisible && Object(I.jsx)("div", {
                        className: "jsx-".concat(Vt.__hash) + " header-create-account-button-wrapper",
                        children: Object(I.jsx)(we.a, {
                            buttonText: k("existingAccount.createAccountCta"),
                            color: O.WORK_OS_IRIS_COLOR_NAME,
                            outline: !0,
                            url: Object(ie.g)(v),
                            isWithArrow: !1,
                            buttonSize: je.e,
                            extraEventData: {
                                englishText: Object(ye.d)("existingAccount.createAccountCta")
                            }
                        })
                    }), Y.isVisible && Object(I.jsx)("div", {
                        className: "jsx-".concat(Vt.__hash) + " header-button-wrapper",
                        children: Object(I.jsx)(Oe.a, Xt(Xt({}, r), {}, {
                            parentSegment: L.a.DESKTOP_HEADER_SEGMENT_NAME
                        }, Y.extraProps))
                    }), Object(I.jsx)(u.a, {
                        id: Vt.__hash,
                        children: Vt
                    })]
                })
            })));

            function Zt(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function $t(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Zt(Object(n), !0).forEach((function(t) {
                        Object(r.default)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Zt(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var en = (qt = {}, Object(r.default)(qt, X.h, "Products"), Object(r.default)(qt, X.m, "Teams"), Object(r.default)(qt, X.e, "Platform"), Object(r.default)(qt, X.a, "Success stories"), Object(r.default)(qt, X.g, "Resources"), qt),
                tn = function(e) {
                    var t = Object(p.useState)(null),
                        n = t[0],
                        r = t[1],
                        o = {
                            scrollTopWhenStartedScrollingUp: 0,
                            prevScrollTop: 0,
                            scrollingDown: !0
                        },
                        a = Object(p.useRef)(null),
                        i = Object(p.useRef)(null),
                        c = e.isSecondaryMenuNeeded,
                        s = e.buttonConfig,
                        d = e.pageClusterConfig,
                        l = e.useProductMiniSiteConfig,
                        m = e.showMenu,
                        f = e.hideLogin,
                        x = e.showButton,
                        g = e.logoHref,
                        w = e.logoSrc,
                        j = e.logoPopup,
                        O = e.isExistingAccountHeader,
                        k = e.hideLanguagePicker,
                        y = (e.abTests, e.testTypeformContactSales),
                        v = e.forceTypeformContactSalesExperience,
                        A = e.showSuccessStoriesInHeader,
                        _ = e.trackScroll;
                    Object(p.useEffect)((function() {
                        if (n) return window.addEventListener("mousedown", S),
                            function() {
                                C()
                            };
                        C()
                    }), [n]), Object(p.useEffect)((function() {
                        if (c) return window.addEventListener("scroll", R, {
                                passive: !0
                            }),
                            function() {
                                window.removeEventListener("scroll", R), C()
                            }
                    }), []);
                    var C = function() {
                            window.removeEventListener("mousedown", S)
                        },
                        S = function(e) {
                            null !== i && void 0 !== i && i.current && !i.current.contains(e.target) && P()
                        },
                        R = function(e) {
                            var t = document.querySelector(".".concat(X.b));
                            if (t) {
                                var n = !1;
                                document.scrollingElement.scrollTop > o.prevScrollTop ? o.scrollingDown = !0 : (o.scrollingDown && (o.scrollTopWhenStartedScrollingUp = document.scrollingElement.scrollTop), n = o.scrollTopWhenStartedScrollingUp - document.scrollingElement.scrollTop > L.a.SCROLL_BACK_UP_THRESHOLD, o.scrollingDown = !1), o.prevScrollTop = document.scrollingElement.scrollTop;
                                var r = document.scrollingElement.scrollTop > L.a.SCROLL_PIXEL_THRESHOLD && (o.scrollingDown || !n);
                                document.scrollingElement.scrollTop > 0 ? t.classList.add("scroll-started") : t.classList.remove("scroll-started"), r ? t.classList.add("scrolled-threshold") : t.classList.remove("scrolled-threshold")
                            }
                        },
                        D = function(e) {
                            var t, n;
                            r(e), Object(oe.trackEvent)(N.HEADER_SUBMENU_OPENED, {
                                kind: null !== (t = en[e]) && void 0 !== t ? t : e
                            }), null === a || void 0 === a || null === (n = a.current) || void 0 === n || n.forceShadow()
                        },
                        P = function(e) {
                            var t, o;
                            n && (r(null), Object(oe.trackEvent)(N.HEADER_SUBMENU_CLOSED, {
                                kind: null !== (t = en[n]) && void 0 !== t ? t : n
                            }), null === a || void 0 === a || null === (o = a.current) || void 0 === o || o.unforceShadow())
                        },
                        T = function() {
                            var e;
                            switch (s.buttonType) {
                                case b.e:
                                    e = {
                                        buttonSize: "xs"
                                    };
                                    break;
                                default:
                                    e = {}
                            }
                            return $t($t({}, s), e)
                        },
                        B = function() {
                            return !c || !Object(M.j)(d, {
                                useProductMiniSiteConfig: l
                            })
                        },
                        H = function() {
                            return Object(M.e)(d, {
                                onlyUnifiedLinks: !0,
                                useProductMiniSiteConfig: l
                            }).map((function(e) {
                                return Object(I.jsx)("div", {
                                    className: "link-item-component-wrapper",
                                    children: Object(I.jsx)(re.a, {
                                        title: null === e || void 0 === e ? void 0 : e.text,
                                        url: null === e || void 0 === e ? void 0 : e.url
                                    })
                                }, null === e || void 0 === e ? void 0 : e.text)
                            }))
                        },
                        U = c ? Object(M.h)(d, {
                            useProductMiniSiteConfig: l
                        }) : null,
                        G = function() {
                            if (d && !c) {
                                var e = Object(M.a)(d, {
                                    useProductMiniSiteConfig: l
                                });
                                if (e) return {
                                    logoHref: e.url,
                                    logoSrc: e.src,
                                    logoAltText: e.alt
                                }
                            }
                            return {
                                logoHref: g,
                                logoSrc: w
                            }
                        }();
                    return Object(I.jsxs)("header", {
                        ref: i,
                        className: "jsx-".concat(ne.__hash) + " " + (E()(X.b) || ""),
                        children: [Object(I.jsx)(h.a, {
                            ref: a,
                            imageHref: G.logoHref,
                            imageSrc: G.logoSrc,
                            imageAlt: G.logoAltText,
                            secondaryLogoObject: U,
                            logoPopup: j,
                            isMenuOpen: !!n,
                            trackScroll: _,
                            children: function() {
                                var e = {
                                    showMenu: m,
                                    hideLogin: f,
                                    showButton: x,
                                    buttonConfig: T(),
                                    openedMenuId: n,
                                    openLinkMenu: D,
                                    closeLinkMenu: P,
                                    shouldShowMainPricingLink: B,
                                    isSecondaryMenuNeeded: c,
                                    renderUnifiedLinks: H,
                                    isExistingAccountHeader: O,
                                    hideLanguagePicker: k,
                                    testTypeformContactSales: y,
                                    forceTypeformContactSalesExperience: v,
                                    showSuccessStoriesInHeader: A
                                };
                                return Object(I.jsx)(Wt, $t({}, e))
                            }()
                        }), c && Object(I.jsx)("div", {
                            className: "jsx-".concat(ne.__hash) + " secondary-header-wrapper",
                            children: Object(I.jsx)(J, {})
                        }), Object(I.jsx)(u.a, {
                            id: ne.__hash,
                            children: ne
                        })]
                    })
                };
            tn.defaultProps = {
                showMenu: !0,
                showButton: !0
            };
            var nn = Object(g.b)(Object(f.b)(tn)),
                rn = (n("G+jr"), n("RGl1")),
                on = n("cLS9"),
                an = n("B+5c"),
                cn = n("Kt2o"),
                sn = n("Nxo1"),
                dn = "1px solid ".concat(j.a["dark-marble"]),
                un = "".concat(sn.a.MENU_ITEM_TITLE_HEIGHT, "px"),
                pn = "".concat(sn.a.MENU_ITEM_LINK_HEIGHT, "px"),
                ln = "1px solid ".concat(j.a.riverstone),
                mn = [".link-with-menu-mobile-component{border-bottom:".concat(dn, ";overflow:hidden;-webkit-transition:height 400ms ease;transition:height 400ms ease;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;}"), ".link-with-menu-mobile-component.is-open .link-with-menu-title-wrapper .link-with-menu-title-text{color:".concat(j.a.iris, ";}"), ".link-with-menu-mobile-component.is-open .link-with-menu-title-wrapper .link-with-menu-title-icon{-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg);}", ".link-with-menu-mobile-component.is-open .link-with-menu-title-wrapper .link-with-menu-title-icon path{fill:".concat(j.a.iris, ";}"), ".link-with-menu-mobile-component .link-with-menu-title-wrapper{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:1.125rem;height:".concat(un, ";cursor:pointer;}"), ".link-with-menu-mobile-component .link-with-menu-title-wrapper .link-with-menu-title-text{color:".concat(j.a["text-gray"], ";margin-right:8px;}"), ".link-with-menu-mobile-component .link-with-menu-title-wrapper .link-with-menu-title-icon{height:10px;width:10px;-webkit-transition:-webkit-transform 400ms ease;-webkit-transition:transform 400ms ease;transition:transform 400ms ease;}", ".link-with-menu-mobile-component .link-with-menu-links-wrapper{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-transition:height 400ms ease;transition:height 400ms ease;}", ".link-with-menu-mobile-component .link-with-menu-links-wrapper .section-wrapper{margin:0 0 20px 12px;}", ".link-with-menu-mobile-component .link-with-menu-links-wrapper .section-link{font-size:0.875rem;color:".concat(j.a.asphalt, ";font-weight:500;border-bottom:").concat(ln, ";padding:16px 0;}"), ".link-with-menu-mobile-component .link-with-menu-links-wrapper .header-link{height:".concat(pn, ";display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:0.875rem;color:").concat(j.a.tuna, ";-webkit-text-decoration:none;text-decoration:none;}"), ".link-with-menu-mobile-component .link-with-menu-links-wrapper .header-link .new-badge-component-wrapper{margin-left:8px;}", ".link-with-menu-mobile-component .link-with-menu-links-wrapper .header-link.subsection-link{height:48px;color:".concat(j.a.asphalt, ";display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;gap:16px;}")];

            function hn(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function bn(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? hn(Object(n), !0).forEach((function(t) {
                        Object(r.default)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : hn(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            mn.__hash = "1750573056";
            var fn = function(e) {
                    return Object(I.jsx)("svg", bn(bn({
                        width: "256",
                        height: "256",
                        viewBox: "0 0 256 256",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, e), {}, {
                        children: Object(I.jsx)("path", {
                            d: "M0 66.73c0 2.66.981 5.33 2.955 7.41l117.332 123.323a10.64 10.64 0 0 0 7.712 3.314c2.912 0 5.696-1.19 7.712-3.314L253.043 74.14c4.074-4.278 3.914-11.077-.331-15.163a10.627 10.627 0 0 0-15.083.333L128 174.536 18.379 59.32c-4.075-4.279-10.827-4.429-15.083-.343A10.76 10.76 0 0 0 0 66.73z",
                            fill: "#000",
                            fillRule: "nonzero"
                        })
                    }))
                },
                xn = Object(g.b)((function(e) {
                    var t = Object(p.useRef)(null),
                        n = e.isOpen,
                        r = e.title,
                        o = e.translate,
                        a = e.id,
                        i = e.openLinksMenu,
                        c = e.links,
                        s = function() {
                            i(n ? null : a)
                        },
                        d = Object(p.useCallback)(Object(se.a)(s), [n, a]),
                        l = Object(p.useMemo)((function() {
                            return function() {
                                var e, r = (null === t || void 0 === t || null === (e = t.current) || void 0 === e ? void 0 : e.clientHeight) || "auto";
                                return n ? {
                                    height: r
                                } : {
                                    overflow: "hidden",
                                    height: 0
                                }
                            }()
                        }), [n]);
                    return Object(I.jsxs)("div", {
                        className: "jsx-".concat(mn.__hash) + " " + (E()("link-with-menu-mobile-component", {
                            "is-open": n
                        }) || ""),
                        children: [Object(I.jsxs)("div", {
                            tabIndex: 0,
                            onClick: s,
                            onKeyDown: d,
                            onMouseDown: se.d,
                            "aria-label": o(r),
                            role: "button",
                            "aria-haspopup": "menu",
                            "aria-expanded": n,
                            className: "jsx-".concat(mn.__hash) + " link-with-menu-title-wrapper",
                            children: [Object(I.jsx)("span", {
                                className: "jsx-".concat(mn.__hash) + " link-with-menu-title-text",
                                children: o(r)
                            }), Object(I.jsx)(fn, {
                                className: "link-with-menu-title-icon"
                            })]
                        }), Object(I.jsx)("div", {
                            style: l,
                            className: "jsx-".concat(mn.__hash) + " " + (E()("link-with-menu-links-wrapper") || ""),
                            children: Object(I.jsx)("div", {
                                ref: t,
                                className: "jsx-".concat(mn.__hash),
                                children: c.map((function(e, t) {
                                    return function(e) {
                                        var t = e.section,
                                            n = e.sectionIndex,
                                            r = t.mobileTitle,
                                            a = t.title,
                                            i = t.menuSectionItems;
                                        return !t.hideOnMobile && Object(I.jsxs)("div", {
                                            className: "section-wrapper",
                                            children: [(r || a) && Object(I.jsx)("div", {
                                                className: "section-link",
                                                children: o(r || a)
                                            }), Object(I.jsx)("div", {
                                                children: i.map((function(e, t) {
                                                    var n = e.title,
                                                        r = e.url,
                                                        a = e.isPopular,
                                                        i = e.badgeText,
                                                        c = e.badgeColorName,
                                                        s = e.badgeTextColorName,
                                                        d = e.badgeStrokeColorName,
                                                        u = e.openInNewTab,
                                                        p = e.mobileIcon;
                                                    return Object(I.jsxs)("a", {
                                                        className: "header-link subsection-link",
                                                        href: r,
                                                        onMouseDown: se.d,
                                                        target: u ? "_blank" : "_self",
                                                        children: [p && Object(I.jsx)(p, {}), o(n), a && Object(I.jsx)("div", {
                                                            className: "new-badge-component-wrapper",
                                                            children: Object(I.jsx)(Ee.a, {
                                                                badgeText: o(i),
                                                                badgeColorName: c,
                                                                badgeTextColorName: s,
                                                                badgeStrokeColorName: d
                                                            })
                                                        })]
                                                    }, "link_".concat(t))
                                                }))
                                            })]
                                        }, "section_".concat(n))
                                    }({
                                        section: e,
                                        sectionIndex: t
                                    })
                                }))
                            })
                        }), Object(I.jsx)(u.a, {
                            id: mn.__hash,
                            children: mn
                        })]
                    })
                })),
                gn = [".header-menu-mobile-component{height:100%;width:100%;background-color:".concat(j.a.white, ";-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding-bottom:80px;padding:0px 32px 80px;overflow:auto;}"), ".header-menu-mobile-component .download-mobile-app-component-wrapper{margin-top:32px;}", ".header-menu-mobile-component .monday-link-wrapper{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;gap:10px;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-top:28px;}", ".header-menu-mobile-component .monday-link-wrapper .picture-component img{max-height:20px;vertical-align:bottom;}", ".header-menu-mobile-component .monday-link-wrapper .monday-link-text-wrapper{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;vertical-align:middle;}", ".header-menu-mobile-component .monday-link-wrapper .monday-link-text-wrapper .secondary-button{line-height:24px;}", ".header-menu-mobile-component .monday-link-wrapper .monday-link-text-wrapper .secondary-button a.with-underline{background:none;}"];

            function wn(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }
            gn.__hash = "1474266031";
            var jn = Object(g.b)(Object(f.b)((function(e) {
                    var t = Object(p.useState)(null),
                        n = t[0],
                        o = t[1],
                        a = e.isMinisitePage,
                        i = e.pageClusterConfig,
                        c = e.useProductMiniSiteConfig,
                        s = e.abTests,
                        d = e.cloudfrontViewerCountry,
                        l = e.testTypeformContactSales,
                        m = e.translate,
                        h = e.isTypeformDisabled,
                        b = e.contactSalesTestMode,
                        f = function(e) {
                            o(e)
                        },
                        x = function() {
                            if (l || Object(ae.shouldGetContactSalesTypeformMobileTest)(s, !0)) {
                                if (h) return void(window.location = ge.F);
                                try {
                                    Object(on.i)({
                                        country: d,
                                        deviceType: on.e,
                                        isTest: b
                                    })
                                } catch (t) {
                                    var e = {
                                        name: N.TYPEFORM_UNHANDLED_EXCEPTION
                                    };
                                    Object(rn.a)({
                                        e: t,
                                        bbEventParams: e
                                    }), window.location = ge.F
                                }
                            }
                        };
                    return Object(I.jsxs)("div", {
                        className: "jsx-".concat(gn.__hash) + " header-menu-mobile-component",
                        children: [Object(I.jsx)(xn, {
                            id: X.f,
                            title: "header.products",
                            links: X.p,
                            openLinksMenu: f,
                            isOpen: n === X.f
                        }), Object(I.jsx)(xn, {
                            id: X.n,
                            title: "header.teams",
                            links: X.i[X.n],
                            openLinksMenu: f,
                            isOpen: n === X.n
                        }), Object(I.jsx)(xn, {
                            id: X.c,
                            title: "header.features",
                            links: X.i[X.c],
                            openLinksMenu: f,
                            isOpen: n === X.c
                        }), Object(I.jsx)(xn, {
                            id: X.g,
                            title: "header.resources",
                            links: X.i[X.g],
                            openLinksMenu: f,
                            isOpen: n === X.g
                        }), Object(I.jsx)(cn.a, {
                            title: "header.pricing",
                            url: function() {
                                var e = null;
                                return a && (e = Object(M.g)(i, {
                                    useProductMiniSiteConfig: c
                                })), e || ge.lc
                            }()
                        }), function() {
                            var e = {};
                            return l || Object(ae.shouldGetContactSalesTypeformMobileTest)(s) || (e = {
                                url: ge.F
                            }), Object(I.jsx)(cn.a, function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {};
                                    t % 2 ? wn(Object(n), !0).forEach((function(t) {
                                        Object(r.default)(e, t, n[t])
                                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : wn(Object(n)).forEach((function(t) {
                                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                    }))
                                }
                                return e
                            }({
                                title: "header.contactSales",
                                onClickFunc: x
                            }, e))
                        }(), Object(I.jsx)(cn.a, {
                            title: "header.logIn",
                            url: ge.Db
                        }), Object(I.jsx)("div", {
                            className: "jsx-".concat(gn.__hash) + " download-mobile-app-component-wrapper",
                            children: Object(I.jsx)(an.a, {})
                        }), Object(I.jsxs)("div", {
                            className: "jsx-".concat(gn.__hash) + " monday-link-wrapper",
                            children: [Object(I.jsx)(Ue.a, {
                                src: "https://dapulse-res.cloudinary.com/image/upload/mobile_menu/Monday.png"
                            }), Object(I.jsx)("div", {
                                className: "jsx-".concat(gn.__hash) + " monday-link-text-wrapper",
                                children: Object(I.jsx)(Qe.a, {
                                    buttonText: m("header.menuItem.backToHomePage"),
                                    url: ge.sc
                                })
                            })]
                        }), Object(I.jsx)(u.a, {
                            id: gn.__hash,
                            children: gn
                        })]
                    })
                }))),
                On = n("aIjF"),
                kn = n("c2XI"),
                yn = n("aH8o"),
                vn = "".concat(T.a.BASIC_HEADER_HEIGHT, "px"),
                An = "calc(100% - ".concat(T.a.BASIC_HEADER_HEIGHT - 1, "px)"),
                _n = "opacity ".concat(L.a.HEADER_MENU_TRANSITION_DURATION, "ms ease, visibility ").concat(L.a.HEADER_MENU_TRANSITION_DURATION, "ms ease;"),
                En = "".concat(T.a.MOBILE_MINI_SITE_BASIC_HEADER_HEIGHT + T.a.MOBILE_MINI_SITE_SECONDARY_HEADER_HEIGHT, "px"),
                Nn = "calc(100% - ".concat(T.a.MOBILE_MINI_SITE_BASIC_HEADER_HEIGHT - 1, "px)"),
                In = "".concat(T.a.MOBILE_MINI_SITE_BASIC_HEADER_HEIGHT, "px"),
                Cn = [".base-header-mobile-component{width:100%;height:".concat(vn, ";}"), ".base-header-mobile-component.secondary-header{height:".concat(En, ";}"), ".base-header-mobile-component.with-cluster-logo:not(.secondary-header){height:".concat(Nn, ";}"), ".base-header-mobile-component.with-cluster-logo .header-menu-component-wrapper{top:".concat(T.a.MOBILE_MINI_SITE_BASIC_HEADER_HEIGHT - 1 + "px", ";height:").concat(Nn, ";}"), ".base-header-mobile-component.with-cluster-logo .mobile-basic-header{height:".concat(In, ";}"), ".base-header-mobile-component.with-cluster-logo .mobile-basic-header .basic-header-content-wrapper{height:".concat(In, ";}"), ".base-header-mobile-component.with-cluster-logo .mobile-basic-header .basic-header-content-wrapper img{height:".concat(In, ";}"), ".base-header-mobile-component.with-cluster-logo .mobile-basic-header .basic-header-content-wrapper .basic-header-content{height:".concat(In, ";-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding-left:24px;padding-right:24px;}"), ".base-header-mobile-component.with-cluster-logo .mobile-basic-header .basic-header-content-wrapper .basic-header-content .main-logo-wrapper{height:100%;}", ".base-header-mobile-component.with-cluster-logo .mobile-basic-header .basic-header-content-wrapper .basic-header-content .main-logo-wrapper a{height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}", ".base-header-mobile-component.with-cluster-logo .mobile-basic-header .basic-header-content-wrapper .basic-header-content .main-logo-wrapper a .picture-component{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".base-header-mobile-component.with-cluster-logo .mobile-basic-header .basic-header-content-wrapper .basic-header-content .main-logo-wrapper a .picture-component .base-header-monday-logo-image{max-width:calc(100% - 32px);height:unset;max-height:60px;margin-right:0;}", ".base-header-mobile-component.with-cluster-logo .mobile-menu-right-section{-webkit-box-flex:0;-webkit-flex-grow:0;-ms-flex-positive:0;flex-grow:0;}", ".base-header-mobile-component.with-cluster-logo .mobile-menu-right-section .mobile-header-content .hamburger-menu{margin:0;}", ".base-header-mobile-component.sticky-signup .basic-header-component .basic-header-content-wrapper .basic-header-content{padding:0 16px;}", "@media (max-width:".concat(l.u, "){.base-header-mobile-component.sticky-signup .basic-header-component .basic-header-content-wrapper .basic-header-content{padding:0 12px;}.base-header-mobile-component.sticky-signup .basic-header-component .basic-header-content-wrapper .basic-header-content .mobile-header-content .hamburger-menu{width:22px;}}"), "@media (max-width:".concat(l.w, "){.base-header-mobile-component.sticky-signup .basic-header-component .basic-header-content-wrapper .basic-header-content .mobile-menu-right-section .sticky-signup-wrapper{display:none;}}"), ".base-header-mobile-component.sticky-signup .basic-header-component .basic-header-content-wrapper .basic-header-content .mobile-menu-right-section .sticky-signup-wrapper .regular-button .button-component{padding:8px 12px 9.5px 12px;font-size:0.8125rem;font-weight:300;}", ".base-header-mobile-component.sticky-signup .basic-header-component .basic-header-content-wrapper .basic-header-content .mobile-menu-right-section .mobile-header-content .hamburger-menu{margin-left:16px;margin-right:0;}", ".base-header-mobile-component .mobile-menu-right-section{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}", ".base-header-mobile-component .mobile-menu-right-section .mobile-header-content .hamburger-menu span{height:2px !important;}", ".base-header-mobile-component .header-menu-component-wrapper{position:fixed;z-index:".concat(q.a, ";top:").concat(T.a.BASIC_HEADER_HEIGHT - 1 + "px", ";opacity:0;height:").concat(An, ";width:100%;visibility:hidden;-webkit-transition:").concat(_n, ";transition:").concat(_n, ";}"), ".base-header-mobile-component .header-menu-component-wrapper.is-open{opacity:1;visibility:visible;}", "@media (max-width:".concat(l.j, "){.base-header-mobile-component .header-menu-component-wrapper{max-width:100vw;}}")];
            Cn.__hash = "2770025641";
            var Sn = n("0SMW"),
                Rn = "".concat(T.a.MOBILE_MINI_SITE_SECONDARY_HEADER_HEIGHT, "px"),
                Mn = [".secondary-header-mobile-component{height:".concat(Rn, ";width:100%;outline:solid 1px;outline-color:").concat(j.a["border-gray"], ";position:fixed;background-color:#fff;z-index:555;box-shadow:0px 4px 40px rgba(0,0,0,0.08);}"), ".secondary-header-mobile-component.scroll-end::after{opacity:0;}", '.secondary-header-mobile-component::after{content:"";position:absolute;right:0;top:0;height:100%;width:'.concat("48px", ";background:linear-gradient(90deg,rgba(255,255,255,0) -140%,#ffffff 180%);opacity:1;pointer-events:none;}"), ".secondary-header-mobile-component .links-wrapper{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;overflow:scroll;height:100%;}", ".secondary-header-mobile-component .links-wrapper::-webkit-scrollbar{display:none;}", ".secondary-header-mobile-component .links-wrapper .secondary-link-item-wrapper{white-space:nowrap;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}", ".secondary-header-mobile-component .links-wrapper .secondary-link-item-wrapper:first-child{padding-left:8px;}", ".secondary-header-mobile-component .links-wrapper .secondary-link-item-wrapper:last-child .secondary-link-item-component{margin-right:24px;}", ".secondary-header-mobile-component .links-wrapper .secondary-link-item-wrapper .secondary-link-item-component{padding-left:8px;padding-right:8px;margin:0 8px;font-size:0.8125rem;}", ".secondary-header-mobile-component .links-wrapper .secondary-link-item-wrapper .secondary-link-item-component:hover{color:".concat(j.a.asphalt, ";}")];
            Mn.__hash = "1562976613";
            var Dn = Object(P.withRouter)(Object(g.b)((function(e) {
                var t = Object(p.useState)(!1),
                    n = t[0],
                    r = t[1],
                    o = Object(p.useRef)(null),
                    a = Object(p.useRef)(null),
                    i = e.pageClusterConfig,
                    c = e.router,
                    s = e.useProductMiniSiteConfig,
                    d = Object(p.useState)(null),
                    l = d[0],
                    m = d[1],
                    h = Object(p.useState)(null),
                    b = h[0],
                    f = h[1];
                Object(p.useEffect)((function() {
                    null !== o && void 0 !== o && o.current && Object(Sn.isNodeFullyInView)(null === o || void 0 === o ? void 0 : o.current).then((function(e) {
                        e || (o.current.scrollIntoView(!0), a.current.scrollLeft += 64)
                    })), a.current.addEventListener("scroll", x, {
                        passive: !0
                    })
                }), []), Object(p.useEffect)((function() {
                    var e, t;
                    m(null === (e = a.current) || void 0 === e ? void 0 : e.scrollWidth), f(null === (t = a.current) || void 0 === t ? void 0 : t.offsetWidth)
                }), [a]);
                var x = function() {
                        a.current.scrollLeft + 10 >= l - b ? r(!0) : n && r(!1)
                    },
                    g = function(e) {
                        e.target.scrollIntoView(!0)
                    };
                return Object(I.jsxs)("nav", {
                    "aria-label": "Secondary",
                    className: "jsx-".concat(Mn.__hash) + " " + (E()("secondary-header-mobile-component", {
                        "scroll-end": n
                    }) || ""),
                    children: [Object(I.jsx)("div", {
                        ref: a,
                        className: "jsx-".concat(Mn.__hash) + " links-wrapper",
                        children: Object(M.e)(i, {
                            useProductMiniSiteConfig: s
                        }).map((function(e, t) {
                            var n = Object(D.isSameUrlWithoutQueryParams)(null === e || void 0 === e ? void 0 : e.url, null === c || void 0 === c ? void 0 : c.asPath);
                            return Object(I.jsx)("div", {
                                className: "secondary-link-item-wrapper",
                                ref: n ? o : null,
                                onClick: g,
                                children: Object(I.jsx)(R, {
                                    url: null === e || void 0 === e ? void 0 : e.url,
                                    title: null === e || void 0 === e ? void 0 : e.text,
                                    isSelected: n
                                })
                            }, t)
                        }))
                    }), Object(I.jsx)(u.a, {
                        id: Mn.__hash,
                        children: Mn
                    })]
                })
            })));

            function Pn(e) {
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
                        var o = Object(s.default)(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return Object(c.default)(this, n)
                }
            }
            var Tn = function(e) {
                    Object(i.default)(n, e);
                    var t = Pn(n);

                    function n(e) {
                        var a;
                        return Object(o.default)(this, n), a = t.call(this, e), Object(r.default)(Object(x.a)(a), "isScrolled", (function() {
                            var e, t, n;
                            return ((null === (e = window) || void 0 === e ? void 0 : e.pageYOffset) || (null === (t = document) || void 0 === t || null === (n = t.documentElement) || void 0 === n ? void 0 : n.scrollTop)) >= 2
                        })), Object(r.default)(Object(x.a)(a), "scrollListener", (function(e) {
                            var t = a.state.isScrolled,
                                n = a.isScrolled();
                            n !== t && a.setState({
                                isScrolled: n
                            })
                        })), Object(r.default)(Object(x.a)(a), "shouldDisplayClusterizedLogo", (function() {
                            var e = a.props,
                                t = e.pageClusterConfig,
                                n = e.isSecondaryMenuNeeded,
                                r = e.pageClusterId,
                                o = e.pageSubClusterId,
                                i = e.useProductMiniSiteConfig;
                            return !(!t || !(n || r || o)) && !!Object(M.f)(t, {
                                useProductMiniSiteConfig: i
                            })
                        })), Object(r.default)(Object(x.a)(a), "getMondayLogo", (function() {
                            var e, t, n = a.props,
                                r = n.pageClusterConfig,
                                o = n.useProductMiniSiteConfig,
                                i = a.props,
                                c = i.logoHref,
                                s = i.logoSrc;
                            return a.shouldDisplayClusterizedLogo() ? "true" === (null === r || void 0 === r || null === (e = r.mini_site) || void 0 === e || null === (t = e.logo) || void 0 === t ? void 0 : t.useDesktopLogoInMobile) ? Object(M.a)(r, {
                                useProductMiniSiteConfig: o
                            }) : Object(M.f)(r, {
                                useProductMiniSiteConfig: o
                            }) : {
                                src: a.isDarkMode() ? "https://dapulse-res.cloudinary.com/image/upload/remote_mondaycom_static/img/monday_logo_white.png" : s,
                                url: c
                            }
                        })), Object(r.default)(Object(x.a)(a), "enterMobileMenuAbTest", (function() {
                            a.props.abTests
                        })), Object(r.default)(Object(x.a)(a), "toogleOpenMenu", (function(e) {
                            var t;
                            e ? (a._basicHeader.forceShadow(), a.enterMobileMenuAbTest(), null !== (t = document) && void 0 !== t && t.activeElement && document.activeElement.blur()) : (setTimeout((function() {
                                var e;
                                return null === (e = a._headerMenu) || void 0 === e ? void 0 : e.openLinksMenu(null)
                            }), L.a.HEADER_MENU_TRANSITION_DURATION), a._basicHeader.unforceShadow());
                            a.setState({
                                isMenuOpen: e
                            })
                        })), Object(r.default)(Object(x.a)(a), "renderLogoPopupIfNeeded", (function() {
                            var e = a.props,
                                t = e.translate,
                                n = e.logoPopup,
                                r = e.localeId,
                                o = yn.a[n];
                            if (!o) return null;
                            var i = o.mobileTextKey || o.textKey,
                                c = o.mobileImageSrc || o.gifSrc,
                                s = t(i).replace("<br>", " ");
                            return Object(I.jsx)(kn.a, {
                                withSignupButton: !1,
                                bannerText: s,
                                bannerLinkData: {
                                    text: t(o.ctaKey),
                                    src: o.getLink(r)
                                },
                                theme: o.bannerTheme,
                                bannerleftImage: c
                            })
                        })), Object(r.default)(Object(x.a)(a), "renderSignup", (function() {
                            var e = a.props.translate;
                            return Object(I.jsx)("div", {
                                className: "sticky-signup-wrapper",
                                children: Object(I.jsx)(we.a, {
                                    buttonText: e("signup.cta"),
                                    url: ge.ac,
                                    color: O.WORK_OS_IRIS_COLOR_NAME
                                })
                            })
                        })), Object(r.default)(Object(x.a)(a), "shouldShowStickySignup", (function() {
                            var e = a.props,
                                t = e.abTests,
                                n = e.mobileStickySignup;
                            return !a.shouldDisplayClusterizedLogo() && (!!n || Object(ae.shouldGetMobileStickySignupAbTest)(t, !0))
                        })), Object(r.default)(Object(x.a)(a), "isDarkMode", (function() {
                            var e = a.props.mobileDarkHeader,
                                t = a.state.isScrolled;
                            return e && !t
                        })), a.state = {
                            isMenuOpen: !1,
                            isScrolled: !1
                        }, a
                    }
                    return Object(a.default)(n, [{
                        key: "componentDidMount",
                        value: function() {
                            window.addEventListener("scroll", this.scrollListener)
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            window.removeEventListener("scroll", this.scrollListener)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.props,
                                n = t.showMenu,
                                r = t.isSecondaryMenuNeeded,
                                o = t.translate,
                                a = this.state.isMenuOpen,
                                i = this.getMondayLogo(),
                                c = this.shouldDisplayClusterizedLogo(),
                                s = this.shouldShowStickySignup();
                            return Object(I.jsxs)(I.Fragment, {
                                children: [Object(I.jsxs)("header", {
                                    className: "jsx-".concat(Cn.__hash) + " " + (E()("base-header-mobile-component", {
                                        "secondary-header": r,
                                        "with-cluster-logo": c,
                                        "sticky-signup": s
                                    }) || ""),
                                    children: [Object(I.jsx)(h.a, {
                                        ref: function(t) {
                                            return e._basicHeader = t
                                        },
                                        showMenu: n,
                                        imageHref: i.url,
                                        imageSrc: i.src,
                                        imageAlt: i.alt,
                                        isMobile: !0,
                                        isSecondaryMenuNeeded: r,
                                        className: "mobile-basic-header",
                                        isMenuOpen: a,
                                        darkMode: this.isDarkMode(),
                                        children: Object(I.jsxs)("div", {
                                            className: "jsx-".concat(Cn.__hash) + " mobile-menu-right-section",
                                            children: [s && this.renderSignup(), Object(I.jsx)("div", {
                                                "aria-label": o("header.mainMenu"),
                                                role: "navigation",
                                                className: "jsx-".concat(Cn.__hash) + " mobile-header-content",
                                                children: Object(I.jsx)(On.a, {
                                                    changeStateCallback: this.toogleOpenMenu,
                                                    isOpen: a
                                                })
                                            })]
                                        })
                                    }), r && Object(I.jsx)(Dn, {}), Object(I.jsx)("div", {
                                        className: "jsx-".concat(Cn.__hash) + " " + (E()("header-menu-component-wrapper", {
                                            "is-open": a
                                        }) || ""),
                                        children: Object(I.jsx)(jn, {
                                            ref: function(t) {
                                                return e._headerMenu = t
                                            },
                                            isMinisitePage: r
                                        })
                                    }), Object(I.jsx)(u.a, {
                                        id: Cn.__hash,
                                        children: Cn
                                    })]
                                }), this.renderLogoPopupIfNeeded()]
                            })
                        }
                    }]), n
                }(p.PureComponent),
                Ln = Object(g.b)(Object(f.b)(Tn)),
                Bn = n("dhSG");

            function Hn(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Un(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Hn(Object(n), !0).forEach((function(t) {
                        Object(r.default)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Hn(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function Gn(e) {
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
                        var o = Object(s.default)(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return Object(c.default)(this, n)
                }
            }
            var Qn = function(e) {
                Object(i.default)(n, e);
                var t = Gn(n);

                function n(e) {
                    var r;
                    Object(o.default)(this, n), r = t.call(this, e);
                    var a = e.isSecondaryMenuNeeded;
                    return r.isSecondaryMenuNeeded = a, r
                }
                return Object(a.default)(n, [{
                    key: "componentDidMount",
                    value: function() {
                        this.trackIsMobileOrTablet()
                    }
                }, {
                    key: "trackIsMobileOrTablet",
                    value: function() {
                        var e = document.querySelector(".mobile-wrapper");
                        e && (null !== e.offsetParent && BigBrain("track", N.MOBILE_OR_TABLE_VIEW, {
                            kind: location.pathname
                        }))
                    }
                }, {
                    key: "render",
                    value: function() {
                        return Object(I.jsxs)("div", {
                            className: "jsx-".concat(m.__hash) + " base-header-component",
                            children: [Object(I.jsx)("div", {
                                className: "jsx-".concat(m.__hash) + " desktop-wrapper",
                                children: Object(I.jsx)(nn, Un({
                                    isSecondaryMenuNeeded: this.isSecondaryMenuNeeded
                                }, this.props))
                            }), Object(I.jsx)("div", {
                                className: "jsx-".concat(m.__hash) + " mobile-wrapper",
                                children: Object(I.jsx)(Ln, Un({
                                    isSecondaryMenuNeeded: this.isSecondaryMenuNeeded
                                }, this.props))
                            }), Object(I.jsx)(u.a, {
                                id: m.__hash,
                                children: m
                            })]
                        })
                    }
                }]), n
            }(p.PureComponent);
            Qn.defaultProps = Bn.a;
            t.default = Object(g.b)(Qn)
        },
        "B+5c": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return w
            }));
            var r = n("H+61"),
                o = n("UlJF"),
                a = n("+Css"),
                i = n("7LId"),
                c = n("VIvw"),
                s = n("iHvq"),
                d = n("cpVT"),
                u = n("MX0m"),
                p = n.n(u),
                l = n("q1tI"),
                m = (n("xwfA"), [".download-mobile-app-component{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}", ".download-mobile-app-component .download-mobile-app-image{width:168px;}"]);
            m.__hash = "862816351";
            var h = n("zaBJ"),
                b = n("AJaK"),
                f = n("rNX+"),
                x = n("nKUr");

            function g(e) {
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
                        var o = Object(s.default)(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return Object(c.default)(this, n)
                }
            }
            var w = function(e) {
                Object(i.default)(n, e);
                var t = g(n);

                function n(e) {
                    var o;
                    return Object(r.default)(this, n), o = t.call(this, e), Object(d.default)(Object(a.a)(o), "downloadMobileApp", (function() {
                        var e = o.state.isAndroidPhone;
                        BigBrain("track", "hp_store_clicked", {
                            kind: e ? "android" : "ios"
                        }), window.location.href = e ? f.c : f.vb
                    })), o.state = {
                        isAndroidPhone: !1
                    }, o
                }
                return Object(o.default)(n, [{
                    key: "componentDidMount",
                    value: function() {
                        this.setState({
                            isAndroidPhone: Object(b.b)()
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.state.isAndroidPhone ? "https://dapulse-res.cloudinary.com/image/upload/mobile_menu/google-play-badge.png" : "https://dapulse-res.cloudinary.com/image/upload/mobile_menu/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917_1.png";
                        return Object(x.jsxs)("div", {
                            onClick: this.downloadMobileApp,
                            className: "jsx-".concat(m.__hash) + " download-mobile-app-component",
                            children: [Object(x.jsx)(h.a, {
                                src: e,
                                className: "download-mobile-app-image"
                            }), Object(x.jsx)(p.a, {
                                id: m.__hash,
                                children: m
                            })]
                        })
                    }
                }]), n
            }(l.PureComponent)
        },
        Cmft: function(e, t, n) {
            "use strict";
            var r = n("H+61"),
                o = n("UlJF"),
                a = n("7LId"),
                i = n("VIvw"),
                c = n("iHvq"),
                s = n("MX0m"),
                d = n.n(s),
                u = n("q1tI"),
                p = n("WJer"),
                l = n("xwfA"),
                m = n("TSYQ"),
                h = n.n(m),
                b = [".core-badge-component{padding:1px 8px 2px 7px;border-radius:2px;background-color:".concat(l.a["brand-yellow"], ";font-size:0.6875rem;color:").concat(l.a.black, ";}"), ".core-badge-component.has-stroke{padding-top:0px;padding-bottom:1px;}"];
            b.__hash = "2426969066";
            var f = n("nKUr");

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
                        var o = Object(c.default)(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return Object(i.default)(this, n)
                }
            }
            var g = function(e) {
                Object(a.default)(n, e);
                var t = x(n);

                function n() {
                    return Object(r.default)(this, n), t.apply(this, arguments)
                }
                return Object(o.default)(n, [{
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.translate,
                            n = e.badgeText,
                            r = e.badgeColorName,
                            o = e.badgeTextColorName,
                            a = e.badgeStrokeColorName;
                        return Object(f.jsxs)("span", {
                            style: {
                                backgroundColor: l.a[r],
                                color: l.a[o],
                                border: a ? "1px solid ".concat(l.a[a]) : "unset"
                            },
                            className: "jsx-".concat(b.__hash) + " " + (h()("core-badge-component", {
                                "has-stroke": a
                            }) || ""),
                            children: [n || t("header.menuItem.popular"), Object(f.jsx)(d.a, {
                                id: b.__hash,
                                children: b
                            })]
                        })
                    }
                }]), n
            }(u.PureComponent);
            t.a = Object(p.b)(g)
        },
        Kt2o: function(e, t, n) {
            "use strict";
            var r = n("H+61"),
                o = n("UlJF"),
                a = n("7LId"),
                i = n("VIvw"),
                c = n("iHvq"),
                s = n("MX0m"),
                d = n.n(s),
                u = n("q1tI"),
                p = n("xwfA"),
                l = n("Nxo1"),
                m = "1px solid ".concat(p.a["dark-marble"]),
                h = "".concat(l.a.LINK_HEIGHT, "px"),
                b = [".link-mobile-component{height:".concat(h, ";border-bottom:").concat(m, ";font-size:1.125rem;color:").concat(p.a["text-gray"], ";display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;-webkit-text-decoration:none;text-decoration:none;}")];
            b.__hash = "3792945056";
            var f = n("WJer"),
                x = n("nKUr");

            function g(e) {
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
                        var o = Object(c.default)(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return Object(i.default)(this, n)
                }
            }
            var w = function(e) {
                Object(a.default)(n, e);
                var t = g(n);

                function n(e) {
                    return Object(r.default)(this, n), t.call(this, e)
                }
                return Object(o.default)(n, [{
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.title,
                            n = e.url,
                            r = e.translate,
                            o = e.onClickFunc;
                        return Object(x.jsxs)("a", {
                            href: n,
                            onClick: o,
                            className: "jsx-".concat(b.__hash) + " link-mobile-component",
                            children: [r(t), Object(x.jsx)(d.a, {
                                id: b.__hash,
                                children: b
                            })]
                        })
                    }
                }]), n
            }(u.PureComponent);
            t.a = Object(f.b)(w)
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
        Pni5: function(e, t, n) {
            "use strict";
            var r = n("H+61"),
                o = n("UlJF"),
                a = n("+Css"),
                i = n("7LId"),
                c = n("VIvw"),
                s = n("iHvq"),
                d = n("cpVT"),
                u = n("MX0m"),
                p = n.n(u),
                l = n("q1tI"),
                m = n("xwfA"),
                h = n("/Z+I"),
                b = [".link-item-component{font-size:0.875rem;cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:8px 10px;-webkit-text-decoration:none;text-decoration:none;color:".concat(m.a["text-gray"], ";-webkit-transition:color 200ms ease;transition:color 200ms ease;border-radius:8px;}"), ".link-item-component:hover{color:".concat(m.a[h.DARK_WORK_OS_IRIS_COLOR_NAME], ";background-color:").concat(m.a[h.BACKGROUND_GRAY_COLOR_NAME], ";}")];
            b.__hash = "2138693134";
            var f = n("WJer"),
                x = n("yAMK"),
                g = n("87MR"),
                w = n("nKUr");

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
                        var o = Object(s.default)(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return Object(c.default)(this, n)
                }
            }
            var O = function(e) {
                Object(i.default)(n, e);
                var t = j(n);

                function n() {
                    var e;
                    Object(r.default)(this, n);
                    for (var o = arguments.length, i = new Array(o), c = 0; c < o; c++) i[c] = arguments[c];
                    return e = t.call.apply(t, [this].concat(i)), Object(d.default)(Object(a.a)(e), "onClick", (function(t) {
                        var n = e.props,
                            r = n.url,
                            o = n.title,
                            a = n.clickEvent,
                            i = 0 === (null === t || void 0 === t ? void 0 : t.screenX) && 0 === (null === t || void 0 === t ? void 0 : t.screenY);
                        Object(g.trackEvent)(x.HEADER_LINK_CLICKED, {
                            kind: r,
                            info1: i ? "keyboard" : "mouse",
                            info2: o
                        }), a && a()
                    })), e
                }
                return Object(o.default)(n, [{
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.title,
                            n = e.url,
                            r = e.translate,
                            o = n ? "link" : "button";
                        return Object(w.jsxs)("a", {
                            href: n,
                            role: o,
                            onClick: this.onClick,
                            tabIndex: "0",
                            onKeyPress: this.onClick,
                            className: "jsx-".concat(b.__hash) + " link-item-component",
                            children: [r(t), Object(w.jsx)(p.a, {
                                id: b.__hash,
                                children: b
                            })]
                        })
                    }
                }]), n
            }(l.PureComponent);
            t.a = Object(f.b)(O)
        },
        QIyF: function(e, t, n) {
            var r = n("Kz5y");
            e.exports = function() {
                return r.Date.now()
            }
        },
        RkeR: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return u
            }));
            var r = n("q1tI"),
                o = n("WJer"),
                a = n("UmnM"),
                i = n("B8ho"),
                c = n("cLS9"),
                s = n("RGl1"),
                d = n("yAMK");

            function u(e) {
                var t = e.abTests,
                    n = e.fallbackLink,
                    u = Object(r.useState)(!1),
                    p = u[0],
                    l = u[1],
                    m = Object(r.useContext)(o.a),
                    h = m.forcePricing,
                    b = m.useNewTypeformUSVariant,
                    f = m.cookies,
                    x = m.forceCurrency,
                    g = m.cloudfrontViewerCountry,
                    w = m.isV12PricingVersion,
                    j = m.testTypeformContactSales,
                    O = m.forceTypeformContactSalesExperience,
                    k = m.contactSalesTestMode,
                    y = function() {
                        l(!1)
                    };
                return {
                    isShowingTypeform: p,
                    displayTypeform: function() {
                        var e = b || Object(a.shouldUseNewTypeformVariant)(t, !0),
                            r = {
                                forcePricing: h,
                                cookies: f,
                                abTests: t,
                                forceCurrency: x,
                                countryCode: g,
                                isV12PricingVersion: w
                            };
                        if (Object(i.a)({
                                abTests: t,
                                cloudfrontViewerCountry: g,
                                testTypeformContactSales: j,
                                forceTypeformContactSalesExperience: O,
                                sendBigBrainEvent: !0
                            })) try {
                            l(!0), Object(c.i)({
                                country: g,
                                deviceType: c.d,
                                getNewVariantForTest: e,
                                isTest: k,
                                pricingData: r,
                                onCloseCallback: y,
                                onSubmitCallback: y,
                                onReadyCallback: y
                            })
                        } catch (u) {
                            var o = {
                                name: d.TYPEFORM_UNHANDLED_EXCEPTION
                            };
                            Object(s.a)({
                                e: u,
                                bbEventParams: o
                            }), window.location = n
                        }
                    }
                }
            }
        },
        dhSG: function(e, t, n) {
            "use strict";
            var r = n("wKPs"),
                o = n("rNX+");
            t.a = {
                showMenu: !0,
                hideLogin: !1,
                showButton: !0,
                hideLanguagePicker: !1,
                logoHref: o.sc,
                logoSrc: o.Rb,
                buttonConfig: {
                    buttonType: r.e
                }
            }
        },
        "k42/": function(e, t, n) {
            "use strict";
            var r = n("MX0m"),
                o = n.n(r),
                a = n("q1tI"),
                i = n("TSYQ"),
                c = n.n(i),
                s = n("bmYG"),
                d = n("SQRZ"),
                u = n("xwfA"),
                p = n("O/JI"),
                l = n("/Z+I"),
                m = n("zcv4"),
                h = "".concat(m.a.BASIC_HEADER_HEIGHT, "px"),
                b = "".concat(m.a.HEADER_CONTENT_HORIZONTAL_PADDING, "px"),
                f = "opacity ".concat(p.a.SECONDARY_HEADER_SCROLL_FIRST_TRANSITION_DURATION, "ms ease"),
                x = "#ae63e5",
                g = [".basic-header-component{width:100%;height:".concat(h, ";}"), ".basic-header-component .basic-header-content-wrapper{width:100%;height:".concat(h, ";position:fixed;z-index:").concat(d.m + 1, ";background-color:").concat(u.a[l.WHITE_COLOR_NAME], ";display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}"), '.basic-header-component .basic-header-content-wrapper.with-shadow::after{content:"";position:absolute;right:0;bottom:0;width:100%;height:8px;box-shadow:0px 4px 4px rgba(29,140,242,0.08);z-index:'.concat(d.n, ";}"), ".basic-header-component .basic-header-content-wrapper .basic-header-content{max-width:".concat(s.k + "px", ";width:100%;position:fixed;height:").concat(h, ";padding-left:").concat(b, ";padding-right:").concat(b, ";z-index:").concat(d.m, ";background-color:").concat(u.a[l.WHITE_COLOR_NAME], ";-webkit-transition:background-color 200ms ease;transition:background-color 200ms ease;top:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}"), ".basic-header-component .basic-header-content-wrapper .basic-header-content .base-header-monday-logo-image{height:42px;margin-right:16px;}", ".basic-header-component .basic-header-content-wrapper .basic-header-content .main-logo-wrapper,.basic-header-component .basic-header-content-wrapper .basic-header-content .secondary-logo-wrapper{-webkit-transition:".concat(f, ";transition:").concat(f, ";}"), ".basic-header-component .basic-header-content-wrapper .basic-header-content .main-logo-wrapper .logo-popup{height:100%;position:absolute;background:".concat(x, ";border-radius:80px;top:66px;left:20px;height:60px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;box-shadow:-4px 4px 30px;color:").concat(x, ";opacity:1;-webkit-transition:opacity 200ms ease;transition:opacity 200ms ease;z-index:1;}"), ".basic-header-component .basic-header-content-wrapper .basic-header-content .main-logo-wrapper .logo-popup .popup-text{font-size:0.875rem;line-height:120%;color:white;margin-left:24px;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}", ".basic-header-component .basic-header-content-wrapper .basic-header-content .main-logo-wrapper .logo-popup .popup-text .link-text{padding-left:4px;color:white;cursor:pointer;}", ".basic-header-component .basic-header-content-wrapper .basic-header-content .main-logo-wrapper .logo-popup .popup-gif{margin-left:8px;width:53px;height:100%;-webkit-box-flex:0;-webkit-flex-grow:0;-ms-flex-positive:0;flex-grow:0;}", ".basic-header-component .basic-header-content-wrapper .basic-header-content .main-logo-wrapper .logo-popup .popup-gif .popup-gif-image{width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", '.basic-header-component .basic-header-content-wrapper .basic-header-content .main-logo-wrapper .logo-popup::before{content:"";top:-18px;left:35px;position:absolute;border:0px solid;display:block;width:30px;height:26px;background-color:transparent;border-top-left-radius:50%;border-top-right-radius:50%;-webkit-transform:rotate(-50deg);-ms-transform:rotate(-50deg);transform:rotate(-50deg);box-shadow:-12px -5px 0px 0px;color:'.concat(x, ";z-index:-1;}"), ".basic-header-component .basic-header-content-wrapper .basic-header-content .main-logo-wrapper .logo-popup.elevate{background:".concat(u.a["gradiant-elevate"], ";color:").concat("#595AD480", ";}"), ".basic-header-component .basic-header-content-wrapper .basic-header-content .main-logo-wrapper .logo-popup.elevate::before{color:#1f245b;}", ".basic-header-component .basic-header-content-wrapper .basic-header-content .secondary-logo-wrapper{opacity:0;visibility:hidden;pointer-events:none;position:absolute;}", ".basic-header-component.scrolled .basic-header-content-wrapper .basic-header-content .main-logo-wrapper .logo-popup{opacity:0;}", "@media (max-width:".concat(s.j, "){.basic-header-component .basic-header-content-wrapper{max-width:100vw;}.basic-header-component .basic-header-content-wrapper .basic-header-content{max-width:100vw;}}"), ".basic-header-component.dark-mode{background-color:".concat(u.a[l.SPACE_BLUE_VIDEO_ONLY_COLOR_NAME], ";}"), ".basic-header-component.dark-mode .basic-header-content-wrapper .basic-header-content{background-color:".concat(u.a[l.SPACE_BLUE_VIDEO_ONLY_COLOR_NAME], ";}"), ".basic-header-component.dark-mode .basic-header-content-wrapper .basic-header-content .mobile-menu-right-section .mobile-header-content .hamburger-menu .hamburger-menu-line{background-color:".concat(u.a[l.WHITE_COLOR_NAME], ";}"), ".scrolled-threshold .basic-header-component.with-secondary-logo .basic-header-content-wrapper .basic-header-content .main-logo-wrapper{opacity:0;visibility:hidden;pointer-events:none;position:absolute;}", ".scrolled-threshold .basic-header-component.with-secondary-logo .basic-header-content-wrapper .basic-header-content .secondary-logo-wrapper{opacity:1;visibility:visible;position:static;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;pointer-events:auto;}"];
            g.__hash = "2776966822";
            var w = n("Niaz"),
                j = n("rNX+"),
                O = n("aH8o"),
                k = n("zaBJ"),
                y = n("yAMK"),
                v = n("87MR"),
                A = n("WJer"),
                _ = n("nKUr"),
                E = Object(a.forwardRef)((function(e, t) {
                    var n = Object(a.useState)(!1),
                        r = n[0],
                        i = n[1],
                        s = Object(a.useState)(!1),
                        d = s[0],
                        u = s[1],
                        p = e.children,
                        l = e.showMenu,
                        m = e.imageSrc,
                        h = e.imageHref,
                        b = e.imageStyle,
                        f = e.className,
                        x = e.secondaryLogoObject,
                        A = e.imageAlt,
                        E = e.darkMode,
                        N = e.logoPopup,
                        I = e.translate,
                        C = e.isMenuOpen,
                        S = e.localeId,
                        R = e.trackScroll;
                    Object(a.useEffect)((function() {
                        return window.addEventListener("scroll", M),
                            function() {
                                return window.removeEventListener("scroll", M)
                            }
                    }), []);
                    var M = function() {
                            i(R && window.scrollY > 0)
                        },
                        D = function() {
                            u(!0)
                        },
                        P = function() {
                            u(!1)
                        },
                        T = r || d;
                    return Object(a.useImperativeHandle)(t, (function() {
                        return {
                            forceShadow: D,
                            unforceShadow: P
                        }
                    })), Object(_.jsxs)("div", {
                        className: "jsx-".concat(g.__hash) + " " + (c()("basic-header-component", f, {
                            "with-secondary-logo": !!x,
                            scrolled: r,
                            "dark-mode": E
                        }) || ""),
                        children: [Object(_.jsx)("div", {
                            className: "jsx-".concat(g.__hash) + " " + (c()("basic-header-content-wrapper", {
                                "with-shadow": T
                            }) || ""),
                            children: Object(_.jsxs)("div", {
                                className: "jsx-".concat(g.__hash) + " basic-header-content",
                                children: [Object(_.jsxs)("div", {
                                    className: "jsx-".concat(g.__hash) + " main-logo-wrapper",
                                    children: [Object(_.jsx)(w.a, {
                                        src: m || j.Rb,
                                        className: "base-header-monday-logo-image",
                                        href: h || j.sc,
                                        specificImageStyle: b,
                                        alt: A
                                    }), function() {
                                        var e = function(e) {
                                            return e ? O.a[e] : null
                                        }(N);
                                        if (C || !e) return null;
                                        var t = null === e || void 0 === e ? void 0 : e.getLink(S);
                                        return Object(_.jsxs)("div", {
                                            className: c()("logo-popup", null === e || void 0 === e ? void 0 : e.popupClassName),
                                            children: [Object(_.jsxs)("div", {
                                                className: "popup-text",
                                                children: [Object(_.jsx)("span", {
                                                    className: "text",
                                                    dangerouslySetInnerHTML: {
                                                        __html: I(null === e || void 0 === e ? void 0 : e.textKey)
                                                    }
                                                }), Object(_.jsx)("a", {
                                                    href: t,
                                                    className: "link-text",
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    onClick: function() {
                                                        return function(e) {
                                                            Object(v.trackEvent)(y.POPUP_LINK_CLICKED, {
                                                                kind: e
                                                            })
                                                        }(t)
                                                    },
                                                    children: I(null === e || void 0 === e ? void 0 : e.ctaKey)
                                                })]
                                            }), Object(_.jsx)("div", {
                                                className: "popup-gif",
                                                children: Object(_.jsx)(k.a, {
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
                                    if (x) return Object(_.jsx)("div", {
                                        className: "secondary-logo-wrapper",
                                        children: Object(_.jsx)(w.a, {
                                            src: x.src,
                                            className: "base-header-monday-logo-image",
                                            href: x.url,
                                            alt: x.alt
                                        })
                                    })
                                }(), l && p]
                            })
                        }), Object(_.jsx)(o.a, {
                            id: g.__hash,
                            children: g
                        })]
                    })
                }));
            E.defaultProps = {
                showMenu: !0,
                imageSrc: j.Rb,
                imageHref: j.sc,
                imageAlt: "monday.com logo",
                secondaryLogoObject: null,
                isMenuOpen: !1,
                trackScroll: !0
            };
            t.a = Object(A.b)(E)
        },
        sEfC: function(e, t, n) {
            var r = n("GoyQ"),
                o = n("QIyF"),
                a = n("tLB3"),
                i = Math.max,
                c = Math.min;
            e.exports = function(e, t, n) {
                var s, d, u, p, l, m, h = 0,
                    b = !1,
                    f = !1,
                    x = !0;
                if ("function" != typeof e) throw new TypeError("Expected a function");

                function g(t) {
                    var n = s,
                        r = d;
                    return s = d = void 0, h = t, p = e.apply(r, n)
                }

                function w(e) {
                    return h = e, l = setTimeout(O, t), b ? g(e) : p
                }

                function j(e) {
                    var n = e - m;
                    return void 0 === m || n >= t || n < 0 || f && e - h >= u
                }

                function O() {
                    var e = o();
                    if (j(e)) return k(e);
                    l = setTimeout(O, function(e) {
                        var n = t - (e - m);
                        return f ? c(n, u - (e - h)) : n
                    }(e))
                }

                function k(e) {
                    return l = void 0, x && s ? g(e) : (s = d = void 0, p)
                }

                function y() {
                    var e = o(),
                        n = j(e);
                    if (s = arguments, d = this, m = e, n) {
                        if (void 0 === l) return w(m);
                        if (f) return clearTimeout(l), l = setTimeout(O, t), g(m)
                    }
                    return void 0 === l && (l = setTimeout(O, t)), p
                }
                return t = a(t) || 0, r(n) && (b = !!n.leading, u = (f = "maxWait" in n) ? i(a(n.maxWait) || 0, t) : u, x = "trailing" in n ? !!n.trailing : x), y.cancel = function() {
                    void 0 !== l && clearTimeout(l), h = 0, s = m = d = l = void 0
                }, y.flush = function() {
                    return void 0 === l ? p : k(o())
                }, y
            }
        }
    }
]);
//# sourceMappingURL=3a6d8a08595d911cfb10268f85c7b2d8e308e641.66c519553cf1e3342873.js.map