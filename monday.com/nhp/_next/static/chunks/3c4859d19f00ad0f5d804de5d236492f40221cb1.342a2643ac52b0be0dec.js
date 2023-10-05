(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [21], {
        "0PSK": function(t, e, n) {
            "use strict";
            var r = n("q1tI"),
                a = n.n(r);
            e.a = a.a.createContext(null)
        },
        "1q17": function(t, e, n) {
            "use strict";
            n.d(e, "b", (function() {
                return r
            })), n.d(e, "a", (function() {
                return a
            }));
            var r = 1e3,
                a = 10 * r
        },
        Cmft: function(t, e, n) {
            "use strict";
            var r = n("H+61"),
                a = n("UlJF"),
                i = n("7LId"),
                o = n("VIvw"),
                s = n("iHvq"),
                c = n("MX0m"),
                l = n.n(c),
                d = n("q1tI"),
                b = n("WJer"),
                u = n("xwfA"),
                p = n("TSYQ"),
                f = n.n(p),
                m = [".core-badge-component{padding:1px 8px 2px 7px;border-radius:2px;background-color:".concat(u.a["brand-yellow"], ";font-size:0.6875rem;color:").concat(u.a.black, ";}"), ".core-badge-component.has-stroke{padding-top:0px;padding-bottom:1px;}"];
            m.__hash = "2426969066";
            var h = n("nKUr");

            function v(t) {
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
                    var n, r = Object(s.default)(t);
                    if (e) {
                        var a = Object(s.default)(this).constructor;
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments);
                    return Object(o.default)(this, n)
                }
            }
            var x = function(t) {
                Object(i.default)(n, t);
                var e = v(n);

                function n() {
                    return Object(r.default)(this, n), e.apply(this, arguments)
                }
                return Object(a.default)(n, [{
                    key: "render",
                    value: function() {
                        var t = this.props,
                            e = t.translate,
                            n = t.badgeText,
                            r = t.badgeColorName,
                            a = t.badgeTextColorName,
                            i = t.badgeStrokeColorName;
                        return Object(h.jsxs)("span", {
                            style: {
                                backgroundColor: u.a[r],
                                color: u.a[a],
                                border: i ? "1px solid ".concat(u.a[i]) : "unset"
                            },
                            className: "jsx-".concat(m.__hash) + " " + (f()("core-badge-component", {
                                "has-stroke": i
                            }) || ""),
                            children: [n || e("header.menuItem.popular"), Object(h.jsx)(l.a, {
                                id: m.__hash,
                                children: m
                            })]
                        })
                    }
                }]), n
            }(d.PureComponent);
            e.a = Object(b.b)(x)
        },
        FwEH: function(t, e, n) {
            "use strict";
            var r, a, i = n("dI71"),
                o = n("q1tI"),
                s = n.n(o),
                c = n("dRu9"),
                l = n("0PSK");
            var d = "out-in",
                b = "in-out",
                u = function(t, e, n) {
                    return function() {
                        var r;
                        t.props[e] && (r = t.props)[e].apply(r, arguments), n()
                    }
                },
                p = ((r = {})[d] = function(t) {
                    var e = t.current,
                        n = t.changeState;
                    return s.a.cloneElement(e, { in: !1,
                        onExited: u(e, "onExited", (function() {
                            n(c.b, null)
                        }))
                    })
                }, r[b] = function(t) {
                    var e = t.current,
                        n = t.changeState,
                        r = t.children;
                    return [e, s.a.cloneElement(r, { in: !0,
                        onEntered: u(r, "onEntered", (function() {
                            n(c.b)
                        }))
                    })]
                }, r),
                f = ((a = {})[d] = function(t) {
                    var e = t.children,
                        n = t.changeState;
                    return s.a.cloneElement(e, { in: !0,
                        onEntered: u(e, "onEntered", (function() {
                            n(c.a, s.a.cloneElement(e, { in: !0
                            }))
                        }))
                    })
                }, a[b] = function(t) {
                    var e = t.current,
                        n = t.children,
                        r = t.changeState;
                    return [s.a.cloneElement(e, { in: !1,
                        onExited: u(e, "onExited", (function() {
                            r(c.a, s.a.cloneElement(n, { in: !0
                            }))
                        }))
                    }), s.a.cloneElement(n, { in: !0
                    })]
                }, a),
                m = function(t) {
                    function e() {
                        for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
                        return (e = t.call.apply(t, [this].concat(r)) || this).state = {
                            status: c.a,
                            current: null
                        }, e.appeared = !1, e.changeState = function(t, n) {
                            void 0 === n && (n = e.state.current), e.setState({
                                status: t,
                                current: n
                            })
                        }, e
                    }
                    Object(i.a)(e, t);
                    var n = e.prototype;
                    return n.componentDidMount = function() {
                        this.appeared = !0
                    }, e.getDerivedStateFromProps = function(t, e) {
                        return null == t.children ? {
                            current: null
                        } : e.status === c.b && t.mode === b ? {
                            status: c.b
                        } : !e.current || (n = e.current, r = t.children, n === r || s.a.isValidElement(n) && s.a.isValidElement(r) && null != n.key && n.key === r.key) ? {
                            current: s.a.cloneElement(t.children, { in: !0
                            })
                        } : {
                            status: c.c
                        };
                        var n, r
                    }, n.render = function() {
                        var t, e = this.props,
                            n = e.children,
                            r = e.mode,
                            a = this.state,
                            i = a.status,
                            o = a.current,
                            d = {
                                children: n,
                                current: o,
                                changeState: this.changeState,
                                status: i
                            };
                        switch (i) {
                            case c.b:
                                t = f[r](d);
                                break;
                            case c.c:
                                t = p[r](d);
                                break;
                            case c.a:
                                t = o
                        }
                        return s.a.createElement(l.a.Provider, {
                            value: {
                                isMounting: !this.appeared
                            }
                        }, t)
                    }, e
                }(s.a.Component);
            m.propTypes = {}, m.defaultProps = {
                mode: d
            }, e.a = m
        },
        KkKZ: function(t, e, n) {
            "use strict";
            e.a = {
                disabled: !1
            }
        },
        X76l: function(t, e, n) {
            "use strict";
            var r = n("1q17"),
                a = n("jEg/"),
                i = n("/Z+I"),
                o = function(t) {
                    return {
                        video: {
                            loop: !1,
                            src: {
                                formats: ["/static/video/capabilites_videos/".concat(t, ".mp4")]
                            }
                        }
                    }
                };
            e.a = {
                tabs: [{
                    title: "Flexible Database",
                    content: "A Work OS is flexible enough to fit any team, workflow, or industry. With intuitive analytics, you can run your daily work, analyze your performance, and manage your team in one place. ",
                    timer: 10 * r.b,
                    asset: o("flexibility")
                }, {
                    title: "Insights & reporting",
                    content: "Track progress and understand how your team is working in a single glance with contextual insights.",
                    timer: 10 * r.b,
                    asset: o("insight")
                }, {
                    title: "Data visualization",
                    content: "See organization-wide insights and drill down into the details using flexible dashboards.",
                    timer: 7 * r.b,
                    asset: o("data-viz")
                }, {
                    title: "Organization-wide use",
                    content: "Meet the needs of all your teams and run processes, gain insights, and communicate all in one place.",
                    timer: 6 * r.b,
                    asset: o("organization-wide-use")
                }, {
                    title: "Collaboration",
                    content: "Share knowledge and collaborate within the context of your work. ",
                    timer: 7 * r.b,
                    asset: o("colaboration")
                }, {
                    title: "Integrations",
                    content: "Integrate with your favorite tools and build diverse workflows from start to finish. ",
                    timer: 8 * r.b,
                    asset: o("integrations")
                }, {
                    title: "Automations",
                    content: "Put mundane tasks on autopilot so teams can focus on the work that makes an impact.",
                    timer: 12 * r.b,
                    asset: o("automations")
                }, {
                    title: "Working remotely",
                    content: "Collaborate, track statuses, give feedback, outline projects, and define ownership for your projects, processes, and workflows no matter where you are.",
                    timer: 5 * r.b,
                    badgeText: "Popular",
                    asset: o("working-remotely")
                }],
                backgroundColor: i.LIGHT_BLUE_VIDEO_BACKGROUND_COLOR_NAME,
                progressbarColor: "brand-green",
                showArrow: !1,
                assetPosition: a.b.BOTTOM_CENTER,
                showButton: !0,
                buttonConfig: {
                    buttonType: "YouTube Popup",
                    isWithIcon: !0,
                    buttonText: "Watch monday.com in action",
                    iconColor: "green"
                },
                timerEnabled: !0,
                alwaysShowProgressbar: !1,
                arrowSize: "22px",
                title: {
                    fontSize: "16px",
                    selectedFontSize: "20px"
                }
            }
        },
        cF34: function(t, e, n) {
            "use strict";
            var r = n("cpVT"),
                a = n("MX0m"),
                i = n.n(a),
                o = n("dhJC"),
                s = n("H+61"),
                c = n("UlJF"),
                l = n("+Css"),
                d = n("7LId"),
                b = n("VIvw"),
                u = n("iHvq"),
                p = n("q1tI"),
                f = n("FwEH"),
                m = n("pQ8y"),
                h = n("h0RW"),
                v = n("FlbJ"),
                x = n("xwfA"),
                g = n("jEg/"),
                j = n("TSYQ"),
                O = n.n(j),
                y = n("A440"),
                w = n("Cmft"),
                k = n("UK0n"),
                E = n("yAMK"),
                C = n("zTib"),
                S = [".progressbar{margin-top:16px;height:2px;background-color:rgba(0,0,0,0.05);}", ".progressbar .progressbar-fill{height:100%;text-align:right;box-sizing:border-box;}", ".progressbar .progressbar-start-animation{width:0;-webkit-animation:fill-progresssbar linear;animation:fill-progresssbar linear;}", ".progressbar .progressbar-stop-animation{width:100%;-webkit-animation:none;animation:none;}", "@-webkit-keyframes fill-progresssbar{from{width:0%;}to{width:100%;}}", "@keyframes fill-progresssbar{from{width:0%;}to{width:100%;}}"];
            S.__hash = "1951405534";
            var T = n("nKUr");

            function _(t) {
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
                    var n, r = Object(u.default)(t);
                    if (e) {
                        var a = Object(u.default)(this).constructor;
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments);
                    return Object(b.default)(this, n)
                }
            }
            var P = function(t) {
                    Object(d.default)(n, t);
                    var e = _(n);

                    function n() {
                        return Object(s.default)(this, n), e.apply(this, arguments)
                    }
                    return Object(c.default)(n, [{
                        key: "render",
                        value: function() {
                            var t = this.props,
                                e = t.forceProgressbarDone,
                                n = t.duration,
                                r = t.progressbarColor,
                                a = t.enabled;
                            return Object(T.jsxs)("div", {
                                className: "jsx-".concat(S.__hash) + " progressbar",
                                children: [Object(T.jsx)("div", {
                                    style: {
                                        animationDuration: "".concat(n, "ms"),
                                        backgroundColor: x.a[r]
                                    },
                                    className: "jsx-".concat(S.__hash) + " " + (O()({
                                        "progressbar-fill": a,
                                        "progressbar-start-animation": !e,
                                        "progressbar-stop-animation": e || !a
                                    }) || "")
                                }), Object(T.jsx)(i.a, {
                                    id: S.__hash,
                                    children: S
                                })]
                            })
                        }
                    }]), n
                }(p.PureComponent),
                N = [".vertical-timer-tab-desktop-container{margin-bottom:32px;height:32px;}", ".vertical-timer-tab-desktop-container .vertical-timer-tab-desktop-title-button{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;cursor:pointer;line-height:16px;font-weight:300;padding:0px;}", ".vertical-timer-tab-desktop-container .vertical-timer-tab-desktop-title-button:hover{outline:0;}", ".vertical-timer-tab-desktop-container .vertical-timer-tab-desktop-title-button .vertical-timer-tab-title-badge-margin{display:inline;margin-left:8px;}", ".vertical-timer-tab-desktop-container .vertical-timer-tab-desktop-title-button .vertical-timer-tab-arrow-wrapper{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;text-align:end;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}", ".vertical-timer-tab-desktop-container .vertical-timer-tab-desktop-title-button .vertical-timer-tab-arrow-wrapper .vertical-timer-tab-arrow{width:22px;-webkit-transition:0.3s -webkit-transform ease-in-out;-webkit-transition:0.3s transform ease-in-out;transition:0.3s transform ease-in-out;}", ".vertical-timer-tab-desktop-container .vertical-timer-tab-desktop-title-button .vertical-timer-tab-arrow-wrapper .vertical-timer-tab-arrow.selected{-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg);}", ".vertical-timer-tab-desktop-container .vertical-timer-tab-desktop-title-button:hover{font-weight:500;}", ".vertical-timer-tab-desktop-container .vertical-timer-tab-desktop-title-button-selected{font-weight:400;margin-bottom:16px;}", ".vertical-timer-tab-desktop-container .vertical-timer-tab-desktop-content-container{overflow:hidden;-webkit-transition-duration:0.15s;transition-duration:0.15s;height:0px;opacity:0;-webkit-transition:opacity 0.3s linear;transition:opacity 0.3s linear;}", ".vertical-timer-tab-desktop-container .vertical-timer-tab-desktop-content-container-selected{opacity:1;height:100%;}", ".vertical-timer-tab-desktop-container .vertical-timer-tab-desktop-content{font-size:0.875rem;line-height:22px;margin-top:8px;}", ".vertical-timer-tab-desktop-container-selected{height:auto !important;}"];

            function R(t) {
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
                    var n, r = Object(u.default)(t);
                    if (e) {
                        var a = Object(u.default)(this).constructor;
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments);
                    return Object(b.default)(this, n)
                }
            }

            function D(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function I(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? D(Object(n), !0).forEach((function(e) {
                        Object(r.default)(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : D(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }
            N.__hash = "3735956292";
            var z = function(t) {
                    return Object(T.jsx)("svg", I(I({
                        viewBox: "0 0 22 13",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, t), {}, {
                        children: Object(T.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M21.414.586a2 2 0 0 1 0 2.828l-9 9a2 2 0 0 1-2.828 0l-9-9A2 2 0 1 1 3.414.586L11 8.172 18.586.586a2 2 0 0 1 2.828 0z",
                            fill: "currentColor"
                        })
                    }))
                },
                F = "vertical-timer-tab-desktop-title-button",
                A = function(t) {
                    Object(d.default)(n, t);
                    var e = R(n);

                    function n(t) {
                        var a;
                        return Object(s.default)(this, n), a = e.call(this, t), Object(r.default)(Object(l.a)(a), "handleTitleClick", (function() {
                            var t = a.props,
                                e = t.setSelectedTab,
                                n = t.index,
                                r = t.title,
                                i = t.getTabIdentifier,
                                o = t.isSelected,
                                s = i ? i(a.props) : r;
                            BigBrain("track", E.TAB_CLICKED, {
                                kind: s,
                                info1: n,
                                info2: o
                            }), e(n)
                        })), Object(r.default)(Object(l.a)(a), "onTabClicked", (function(t) {
                            a.blurTab(t), a.handleTitleClick()
                        })), Object(r.default)(Object(l.a)(a), "blurTab", (function(t) {
                            var e, n;
                            null === t || void 0 === t || null === (e = t.target) || void 0 === e || null === (n = e.closest(".".concat(F))) || void 0 === n || n.blur()
                        })), Object(r.default)(Object(l.a)(a), "shouldShowProgressbar", (function() {
                            var t = a.props,
                                e = t.isSelected,
                                n = t.timerEnabled;
                            return t.alwaysShowProgressbar || n && e
                        })), a.onKeyDown = Object(k.a)(a.handleTitleClick), a
                    }
                    return Object(c.default)(n, [{
                        key: "render",
                        value: function() {
                            var t = this.props,
                                e = t.title,
                                n = t.tabTitleRenderer,
                                r = t.tabContentRenderer,
                                a = t.content,
                                s = t.badgeText,
                                c = t.fontColor,
                                l = t.selectedFontColor,
                                d = t.titleFontWeight,
                                b = t.fontSize,
                                u = t.selectedFontSize,
                                p = t.lineHeight,
                                f = t.isSelected,
                                m = t.forceProgressbarDone,
                                h = t.duration,
                                v = t.showArrow,
                                g = t.progressbarColor,
                                j = t.arrowSize,
                                y = t.timerEnabled,
                                k = Object(o.default)(t, ["title", "tabTitleRenderer", "tabContentRenderer", "content", "badgeText", "fontColor", "selectedFontColor", "titleFontWeight", "fontSize", "selectedFontSize", "lineHeight", "isSelected", "forceProgressbarDone", "duration", "showArrow", "progressbarColor", "arrowSize", "timerEnabled"]),
                                E = f ? x.a[l] : x.a[c];
                            return Object(T.jsxs)("div", {
                                tabIndex: 0,
                                role: "tab",
                                style: {
                                    height: p || b
                                },
                                className: "jsx-".concat(N.__hash) + " " + (O()("vertical-timer-tab-desktop-container", {
                                    "vertical-timer-tab-desktop-container-selected": f
                                }) || ""),
                                children: [Object(T.jsxs)("div", {
                                    role: "button",
                                    tabIndex: 0,
                                    onClick: this.onTabClicked,
                                    onKeyDown: this.onKeyDown,
                                    style: {
                                        fontSize: f ? u : b
                                    },
                                    className: "jsx-".concat(N.__hash) + " " + (O()(F, {
                                        "vertical-timer-tab-desktop-title-button-selected": f
                                    }) || ""),
                                    children: [n ? n(e, I({}, k)) : Object(T.jsx)(C.a, {
                                        tagName: "span",
                                        style: {
                                            color: E,
                                            fontWeight: d,
                                            lineHeight: p
                                        },
                                        text: e
                                    }), s && Object(T.jsx)("div", {
                                        className: "jsx-".concat(N.__hash) + " vertical-timer-tab-title-badge-margin",
                                        children: Object(T.jsx)(w.a, {
                                            badgeText: s
                                        })
                                    }), Object(T.jsx)("span", {
                                        className: "jsx-".concat(N.__hash) + " vertical-timer-tab-arrow-wrapper",
                                        children: v && Object(T.jsx)(z, {
                                            className: O()("vertical-timer-tab-arrow", {
                                                selected: f
                                            }),
                                            style: {
                                                color: E,
                                                width: j
                                            }
                                        })
                                    })]
                                }), Object(T.jsx)("div", {
                                    className: "jsx-".concat(N.__hash) + " " + (O()("vertical-timer-tab-desktop-progress-container") || ""),
                                    children: this.shouldShowProgressbar() && Object(T.jsx)(P, {
                                        duration: h,
                                        forceProgressbarDone: m || !y,
                                        progressbarColor: g,
                                        enabled: f
                                    })
                                }), (a || r) && Object(T.jsx)("div", {
                                    className: "jsx-".concat(N.__hash) + " " + (O()("vertical-timer-tab-desktop-content-container", {
                                        "vertical-timer-tab-desktop-content-container-selected": f
                                    }) || ""),
                                    children: Object(T.jsx)("div", {
                                        className: "jsx-".concat(N.__hash) + " vertical-timer-tab-desktop-content",
                                        children: r ? r(a, I({}, k)) : Object(T.jsx)(C.a, {
                                            text: a
                                        })
                                    })
                                }), Object(T.jsx)(i.a, {
                                    id: N.__hash,
                                    children: N
                                })]
                            })
                        }
                    }]), n
                }(p.PureComponent),
                M = n("bmYG"),
                L = n("ZIUT"),
                W = n.n(L),
                H = "".concat(550, "px"),
                K = "".concat(W.a.BODY_CONTENT_HORIZONTAL_PADDING, "px"),
                U = [".timer-vertical-tabs-desktop-component{max-width:".concat(M.l + "px", ";width:85%;margin:0 auto;padding:8px 0px;}"), ".timer-vertical-tabs-desktop-component .tabs-divider{border-top:".concat("1px solid ".concat(x.a.gainsboro), ";width:100%;margin-bottom:32px;}"), ".timer-vertical-tabs-desktop-component .tabs-paragraph-wrapper{margin-bottom:45px;}", ".timer-vertical-tabs-desktop-component .vertical-timer-tabs-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}", ".timer-vertical-tabs-desktop-component .vertical-timer-tabs-container .right-side-container{position:relative;}", ".timer-vertical-tabs-desktop-component .vertical-timer-tabs-container .right-side-container .right-side-tab-content-container{width:100%;height:100%;position:absolute;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".timer-vertical-tabs-desktop-component .vertical-timer-tabs-container .right-side-container .right-side-tab-content-container.hidden{opacity:0;}", ".timer-vertical-tabs-desktop-component .vertical-timer-tabs-container .desktop-tabs-text-container{margin-right:75px;min-height:".concat(H, ";display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}"), ".timer-vertical-tabs-desktop-component .vertical-timer-tabs-container .desktop-asset-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}", ".timer-vertical-tabs-desktop-component .vertical-timer-tabs-container .desktop-asset-container .tab-asset-inner{-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:760px;height:".concat(H, ";padding:28px;}"), ".timer-vertical-tabs-desktop-component .vertical-timer-tabs-container .desktop-asset-container .tab-asset-inner .tab-asset-image{max-width:100%;max-height:".concat(H, ";width:auto;}"), ".timer-vertical-tabs-desktop-component .vertical-timer-tabs-container .fade-enter{opacity:0;}", ".timer-vertical-tabs-desktop-component .vertical-timer-tabs-container .fade-exit{opacity:1;}", ".timer-vertical-tabs-desktop-component .vertical-timer-tabs-container .fade-enter-active{opacity:1;}", ".timer-vertical-tabs-desktop-component .vertical-timer-tabs-container .fade-exit-active{opacity:0;}", ".timer-vertical-tabs-desktop-component .vertical-timer-tabs-container .fade-enter-active,.timer-vertical-tabs-desktop-component .vertical-timer-tabs-container .fade-exit-active{-webkit-transition:opacity 200ms;transition:opacity 200ms;}", ".timer-vertical-tabs-desktop-component .button-link{margin-top:40px;}", ".full-screen{width:100%;max-width:".concat(M.c + "px", ";padding:0;}"), ".full-screen .vertical-timer-tabs-container{display:grid;grid-template-columns:1fr 1fr;}", ".full-screen .vertical-timer-tabs-container .desktop-asset-container .tab-asset-inner{height:100%;width:100%;padding:0;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;}", ".full-screen .vertical-timer-tabs-container .desktop-tabs-text-container{box-sizing:content-box;margin-left:auto;padding-left:".concat("calc(max(min(100vw, ".concat(M.c, "px) - ").concat(M.k, "px, 0px) / 2 + ").concat(K, ")"), ";padding-right:60px;padding-top:64px;padding-bottom:64px;max-width:", "calc((".concat(M.k, "px - ").concat(K, " * 2) / 2) })"), ";}")];
            U.__hash = "4136462593";
            var V = n("1q17");

            function q(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function B(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? q(Object(n), !0).forEach((function(e) {
                        Object(r.default)(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : q(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function Q(t) {
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
                    var n, r = Object(u.default)(t);
                    if (e) {
                        var a = Object(u.default)(this).constructor;
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments);
                    return Object(b.default)(this, n)
                }
            }
            var G = function(t) {
                    Object(d.default)(n, t);
                    var e = Q(n);

                    function n(t) {
                        var r;
                        Object(s.default)(this, n);
                        var a = (r = e.call(this, t)).props.isCollapsable;
                        return r.state = {
                            selectedTab: a ? null : 0,
                            forceProgressbarDone: !1
                        }, r.tabsInterval = null, r.handleOnMouseLeave = r.handleOnMouseLeave.bind(Object(l.a)(r)), r.handleOnMouseOver = r.handleOnMouseOver.bind(Object(l.a)(r)), r.setSelectedTab = r.setSelectedTab.bind(Object(l.a)(r)), r.startTabInterval = r.startTabInterval.bind(Object(l.a)(r)), r.clearTabInterval = r.clearTabInterval.bind(Object(l.a)(r)), r.startInterval = r.startInterval.bind(Object(l.a)(r)), r.stopInterval = r.stopInterval.bind(Object(l.a)(r)), r.renderTabs = r.renderTabs.bind(Object(l.a)(r)), r
                    }
                    return Object(c.default)(n, [{
                        key: "componentDidMount",
                        value: function() {
                            this.startInterval()
                        }
                    }, {
                        key: "handleOnMouseOver",
                        value: function() {
                            this.setState({
                                forceProgressbarDone: !0
                            }), this.stopInterval()
                        }
                    }, {
                        key: "handleOnMouseLeave",
                        value: function() {
                            this.setState({
                                forceProgressbarDone: !1
                            }), this.startInterval()
                        }
                    }, {
                        key: "setSelectedTab",
                        value: function(t) {
                            var e = this.props.isCollapsable,
                                n = this.state.selectedTab,
                                r = e && t === n ? null : t;
                            this.setState({
                                selectedTab: r,
                                forceProgressbarDone: !1
                            }), this.startInterval()
                        }
                    }, {
                        key: "startTabInterval",
                        value: function() {
                            var t, e = this,
                                n = this.state.selectedTab,
                                r = this.props,
                                a = r.tabs;
                            r.isCollapsable || (this.tabsInterval = setInterval((function() {
                                var t = (n + 1) % a.length;
                                e.setSelectedTab(t)
                            }), parseInt(null === (t = a[n]) || void 0 === t ? void 0 : t.timer) || V.a))
                        }
                    }, {
                        key: "clearTabInterval",
                        value: function() {
                            this.props.isCollapsable || clearInterval(this.tabsInterval)
                        }
                    }, {
                        key: "startInterval",
                        value: function() {
                            this.props.timerEnabled && (this.stopInterval(), this.startTabInterval())
                        }
                    }, {
                        key: "stopInterval",
                        value: function() {
                            this.props.timerEnabled && this.clearTabInterval()
                        }
                    }, {
                        key: "renderTabs",
                        value: function() {
                            var t = this,
                                e = this.state,
                                n = e.selectedTab,
                                r = e.forceProgressbarDone,
                                a = this.props,
                                i = a.tabs,
                                s = a.showDivider,
                                c = a.timerEnabled,
                                l = a.tabContentRenderer,
                                d = a.showArrow,
                                b = a.progressbarColor,
                                u = a.alwaysShowProgressbar,
                                p = a.arrowSize,
                                f = a.tabTitleRenderer,
                                m = a.title,
                                h = a.getTabIdentifier,
                                v = m || {},
                                x = v.fontSize,
                                g = v.selectedFontSize,
                                j = v.fontColor,
                                O = v.selectedFontColor,
                                y = v.fontWeight,
                                w = v.lineHeight;
                            return i.map((function(e, a) {
                                var m = e.title,
                                    v = e.content,
                                    k = e.badgeText,
                                    E = e.timer,
                                    C = e.overrideTabFontColor,
                                    S = Object(o.default)(e, ["title", "content", "badgeText", "timer", "overrideTabFontColor"]);
                                return Object(T.jsxs)("div", {
                                    className: "tab",
                                    role: "tablist",
                                    children: [Object(T.jsx)(A, B({
                                        index: a,
                                        getTabIdentifier: h,
                                        isSelected: a === n,
                                        title: m,
                                        content: v,
                                        badgeText: k,
                                        duration: E || V.a,
                                        forceProgressbarDone: r,
                                        setSelectedTab: t.setSelectedTab,
                                        showArrow: d,
                                        timerEnabled: c,
                                        fontSize: x,
                                        lineHeight: w,
                                        selectedFontSize: g,
                                        fontColor: null !== C && void 0 !== C ? C : j,
                                        selectedFontColor: null !== C && void 0 !== C ? C : O,
                                        progressbarColor: b,
                                        alwaysShowProgressbar: u,
                                        arrowSize: p,
                                        tabTitleRenderer: f,
                                        tabContentRenderer: l,
                                        titleFontWeight: y
                                    }, S), a), s && a < i.length - 1 && Object(T.jsx)("div", {
                                        className: "tabs-divider"
                                    })]
                                })
                            }))
                        }
                    }, {
                        key: "renderAllRightSideContent",
                        value: function() {
                            var t = this,
                                e = this.props.tabs,
                                n = this.state.selectedTab;
                            return Object(T.jsx)("div", {
                                className: "right-side-container",
                                children: e.map((function(e, r) {
                                    return Object(T.jsx)("div", {
                                        className: O()("right-side-tab-content-container", {
                                            hidden: r !== n
                                        }),
                                        children: t.renderRightSide(r)
                                    }, r)
                                }))
                            })
                        }
                    }, {
                        key: "renderRightSide",
                        value: function(t) {
                            var e, n, r, a, i, o, s, c = this.props,
                                l = c.assetQuality,
                                d = c.hideControls,
                                b = c.useWindowMask,
                                u = c.tabs,
                                p = c.backgroundColor,
                                f = c.rightSideRenderer,
                                m = c.assetPosition;
                            if (!((null === (e = u[t]) || void 0 === e ? void 0 : e.asset) && (null === (n = u[t].asset) || void 0 === n || null === (r = n.image) || void 0 === r ? void 0 : r.src) || (null === (a = u[t]) || void 0 === a || null === (i = a.asset) || void 0 === i || null === (o = i.video) || void 0 === o ? void 0 : o.src)) && f) return f(u[t]);
                            var v = B(B({}, Object(g.a)(m)), {}, {
                                backgroundColor: x.a[p]
                            });
                            return Object(T.jsx)("div", {
                                className: "desktop-asset-container",
                                children: Object(T.jsx)(h.a, B(B({}, null === (s = u[t]) || void 0 === s ? void 0 : s.asset), {}, {
                                    assetQuality: l,
                                    hideControls: d,
                                    useWindowMask: b,
                                    convertGifToVideo: !0,
                                    className: "tab-asset-inner",
                                    imageClassName: "tab-asset-image",
                                    style: v
                                }))
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var t = this.props,
                                e = t.showButton,
                                n = t.buttonConfig,
                                a = t.isFullScreen,
                                o = t.tabsTitle,
                                s = t.tabsContainerClassName,
                                c = t.isTabsFullWidth,
                                l = t.prerenderTabs,
                                d = this.state.selectedTab;
                            return Object(T.jsxs)("div", {
                                className: "jsx-".concat(U.__hash) + " " + (O()("timer-vertical-tabs-desktop-component", {
                                    "full-screen": a
                                }) || ""),
                                children: [Object(T.jsxs)("div", {
                                    className: "jsx-".concat(U.__hash) + " vertical-timer-tabs-container",
                                    children: [Object(T.jsxs)("div", {
                                        style: {
                                            width: c && "100%"
                                        },
                                        onFocus: this.handleOnMouseOver,
                                        onBlur: this.handleOnMouseLeave,
                                        onMouseOver: this.handleOnMouseOver,
                                        onMouseLeave: this.handleOnMouseLeave,
                                        className: "jsx-".concat(U.__hash) + " " + (O()("desktop-tabs-text-container", Object(r.default)({}, s, s)) || ""),
                                        children: [o && Object(T.jsx)("div", {
                                            className: "jsx-".concat(U.__hash) + " tabs-paragraph-wrapper",
                                            children: Object(T.jsx)(y.a, B({}, o))
                                        }), this.renderTabs()]
                                    }), Object(T.jsx)(f.a, {
                                        mode: "out-in",
                                        children: Object(T.jsx)(m.a, {
                                            classNames: "fade",
                                            timeout: 200,
                                            children: l ? this.renderAllRightSideContent() : this.renderRightSide(d)
                                        }, d)
                                    })]
                                }), e && Object(T.jsx)("div", {
                                    className: "jsx-".concat(U.__hash) + " button-link",
                                    children: Object(T.jsx)(v.a, B({}, n))
                                }), Object(T.jsx)(i.a, {
                                    id: U.__hash,
                                    children: U
                                })]
                            })
                        }
                    }]), n
                }(p.PureComponent),
                J = [".mobile-timer-tabs-component{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:32px 40px;}", ".mobile-timer-tabs-component .mobile-tabs-title-wrapper{margin-bottom:48px;}", ".mobile-timer-tabs-component .mobile-button-link{padding:16px 0px;}"];
            J.__hash = "4216295117";
            var X = n("7lyN"),
                Y = n("zcv4"),
                Z = n("87MR"),
                $ = [".vertical-timer-tab-mobile-component{padding-bottom:16px;}", ".vertical-timer-tab-mobile-component .vertical-timer-tab-mobile-title{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;line-height:22px;font-weight:300;font-size:0.875rem;padding:0;}", ".vertical-timer-tab-mobile-component .vertical-timer-tab-mobile-title .vertical-timer-tab-mobile-title-badge-margin{display:inline;margin-left:8px;}", ".vertical-timer-tab-mobile-component .vertical-timer-tab-mobile-title .vertical-timer-tab-arrow-wrapper{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;text-align:end;}", ".vertical-timer-tab-mobile-component .vertical-timer-tab-mobile-title .vertical-timer-tab-arrow-wrapper .vertical-timer-tab-arrow{width:22px;-webkit-transition:0.3s -webkit-transform ease-in-out;-webkit-transition:0.3s transform ease-in-out;transition:0.3s transform ease-in-out;}", ".vertical-timer-tab-mobile-component .vertical-timer-tab-mobile-title .vertical-timer-tab-arrow-wrapper .vertical-timer-tab-arrow.selected{-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg);}", ".vertical-timer-tab-mobile-component .vertical-timer-tab-mobile-title-selected{font-style:normal;font-weight:bold;font-size:1.125rem;line-height:22px;padding:0 0 16px 0;}", ".vertical-timer-tab-mobile-component .vertical-timer-tab-mobile-progress-container{margin-bottom:16px;}", ".vertical-timer-tab-mobile-component .vertical-timer-tab-mobile-content-container{height:0px;opacity:0;-webkit-transition:opacity 0.3s linear;transition:opacity 0.3s linear;}", ".vertical-timer-tab-mobile-component .vertical-timer-tab-mobile-content-container .vertical-timer-tab-mobile-content{padding-bottom:16px;line-height:22px;font-weight:300;font-size:0.875rem;}", ".vertical-timer-tab-mobile-component .vertical-timer-tab-mobile-content-container .vertical-timer-tab-mobile-asset{padding:10px;}", ".vertical-timer-tab-mobile-component .vertical-timer-tab-mobile-content-container-selected{height:100%;opacity:1;}"];

            function tt(t) {
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
                    var n, r = Object(u.default)(t);
                    if (e) {
                        var a = Object(u.default)(this).constructor;
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments);
                    return Object(b.default)(this, n)
                }
            }

            function et(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function nt(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? et(Object(n), !0).forEach((function(e) {
                        Object(r.default)(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : et(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }
            $.__hash = "4035353165";
            var rt = function(t) {
                    return Object(T.jsx)("svg", nt(nt({
                        viewBox: "0 0 22 13",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, t), {}, {
                        children: Object(T.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M21.414.586a2 2 0 0 1 0 2.828l-9 9a2 2 0 0 1-2.828 0l-9-9A2 2 0 1 1 3.414.586L11 8.172 18.586.586a2 2 0 0 1 2.828 0z",
                            fill: "currentColor"
                        })
                    }))
                },
                at = function(t) {
                    Object(d.default)(n, t);
                    var e = tt(n);

                    function n(t) {
                        var a;
                        return Object(s.default)(this, n), a = e.call(this, t), Object(r.default)(Object(l.a)(a), "handleTitleClick", (function() {
                            var t = a.props,
                                e = t.setSelectedTab,
                                n = t.index,
                                r = t.title,
                                i = t.getTabIdentifier,
                                o = t.isSelected,
                                s = i ? i(a.props) : r;
                            Object(Z.trackEvent)(E.TAB_CLICKED, {
                                kind: s,
                                info1: n,
                                info2: o
                            }), e(n)
                        })), a.tabRef = Object(p.createRef)(), a
                    }
                    return Object(c.default)(n, [{
                        key: "componentDidUpdate",
                        value: function(t, e, n) {
                            var r = this.props.isSelected;
                            r && r !== t.isSelected && Object(X.b)(this.tabRef, Y.a.BASIC_HEADER_HEIGHT)
                        }
                    }, {
                        key: "renderRightSide",
                        value: function() {
                            var t, e, n = this.props,
                                r = n.assetQuality,
                                a = n.asset,
                                i = n.rightSideRenderer,
                                o = n.backgroundColor;
                            return !(a && (null === a || void 0 === a || null === (t = a.image) || void 0 === t ? void 0 : t.src) || (null === a || void 0 === a || null === (e = a.video) || void 0 === e ? void 0 : e.src)) && i ? i(this.props) : Object(T.jsx)("div", {
                                className: "vertical-timer-tab-mobile-asset",
                                style: {
                                    backgroundColor: x.a[o]
                                },
                                children: Object(T.jsx)(h.a, nt(nt({}, a), {}, {
                                    assetQuality: r,
                                    convertGifToVideo: !0
                                }))
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var t = this.props,
                                e = t.title,
                                n = t.tabContentRenderer,
                                r = t.content,
                                a = t.badgeText,
                                s = t.fontColor,
                                c = t.selectedFontColor,
                                l = t.titleFontWeight,
                                d = t.fontSize,
                                b = t.selectedFontSize,
                                u = t.tabTitleRenderer,
                                p = Object(o.default)(t, ["title", "tabContentRenderer", "content", "badgeText", "fontColor", "selectedFontColor", "titleFontWeight", "fontSize", "selectedFontSize", "tabTitleRenderer"]),
                                f = this.props,
                                m = f.isSelected,
                                h = f.alwaysShowProgressbar,
                                v = f.showArrow,
                                g = f.progressbarColor,
                                j = f.arrowSize,
                                y = f.lineHeight,
                                k = m ? x.a[c] : x.a[s];
                            return Object(T.jsxs)("div", {
                                className: "jsx-".concat($.__hash) + " vertical-timer-tab-mobile-component",
                                children: [Object(T.jsxs)("div", {
                                    ref: this.tabRef,
                                    onClick: this.handleTitleClick,
                                    style: {
                                        fontSize: m ? b : d
                                    },
                                    className: "jsx-".concat($.__hash) + " " + (O()("vertical-timer-tab-mobile-title", {
                                        "vertical-timer-tab-mobile-title-selected": m
                                    }) || ""),
                                    children: [u ? u(e, nt({}, p)) : Object(T.jsx)(C.a, {
                                        tagName: "span",
                                        style: {
                                            color: k,
                                            fontWeight: l,
                                            lineHeight: y
                                        },
                                        text: e
                                    }), a && Object(T.jsx)("div", {
                                        className: "jsx-".concat($.__hash) + " vertical-timer-tab-mobile-title-badge-margin",
                                        children: Object(T.jsx)(w.a, {
                                            badgeText: a
                                        })
                                    }), Object(T.jsx)("span", {
                                        className: "jsx-".concat($.__hash) + " vertical-timer-tab-arrow-wrapper",
                                        children: v && Object(T.jsx)(rt, {
                                            className: O()("vertical-timer-tab-arrow", {
                                                selected: m
                                            }),
                                            style: {
                                                color: k,
                                                width: j
                                            }
                                        })
                                    })]
                                }), Object(T.jsx)("div", {
                                    className: "jsx-".concat($.__hash) + " vertical-timer-tab-mobile-progress-container",
                                    children: h && Object(T.jsx)(P, {
                                        forceProgressbarDone: !0,
                                        progressbarColor: g,
                                        enabled: m
                                    })
                                }), Object(T.jsx)("div", {
                                    className: "jsx-".concat($.__hash) + " " + (O()("vertical-timer-tab-mobile-content-container", {
                                        "vertical-timer-tab-mobile-content-container-selected": m
                                    }) || ""),
                                    children: m ? Object(T.jsxs)(T.Fragment, {
                                        children: [Object(T.jsx)("div", {
                                            className: "jsx-".concat($.__hash) + " vertical-timer-tab-mobile-content",
                                            children: n ? n(r, nt({}, p)) : Object(T.jsx)(C.a, {
                                                text: r
                                            })
                                        }), this.renderRightSide()]
                                    }) : Object(T.jsx)(T.Fragment, {})
                                }), Object(T.jsx)(i.a, {
                                    id: $.__hash,
                                    children: $
                                })]
                            })
                        }
                    }]), n
                }(p.PureComponent);

            function it(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function ot(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? it(Object(n), !0).forEach((function(e) {
                        Object(r.default)(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : it(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function st(t) {
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
                    var n, r = Object(u.default)(t);
                    if (e) {
                        var a = Object(u.default)(this).constructor;
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments);
                    return Object(b.default)(this, n)
                }
            }
            var ct = function(t) {
                    Object(d.default)(n, t);
                    var e = st(n);

                    function n(t) {
                        var a;
                        return Object(s.default)(this, n), a = e.call(this, t), Object(r.default)(Object(l.a)(a), "setSelectedTab", (function(t) {
                            var e = a.props.timerEnabled;
                            a.setState((function(n) {
                                return {
                                    selectedTab: e || n.selectedTab !== t ? t : null
                                }
                            }))
                        })), Object(r.default)(Object(l.a)(a), "renderTabs", (function() {
                            var t = a.state.selectedTab,
                                e = a.props,
                                n = e.tabs,
                                r = e.tabContentRenderer,
                                i = e.assetQuality,
                                o = e.title,
                                s = e.showArrow,
                                c = e.progressbarColor,
                                l = e.rightSideRenderer,
                                d = e.alwaysShowProgressbar,
                                b = e.arrowSize,
                                u = e.backgroundColor,
                                p = e.tabTitleRenderer,
                                f = e.getTabIdentifier,
                                m = o || {},
                                h = m.fontSize,
                                v = m.selectedFontSize,
                                x = m.fontColor,
                                g = m.selectedFontColor,
                                j = m.fontWeight;
                            return n.map((function(e, n) {
                                return Object(T.jsx)(at, ot(ot({
                                    index: n
                                }, e), {}, {
                                    getTabIdentifier: f,
                                    isSelected: n === t,
                                    setSelectedTab: a.setSelectedTab,
                                    assetQuality: i,
                                    rightSideRenderer: l,
                                    showArrow: s,
                                    tabContentRenderer: r,
                                    fontSize: h,
                                    tabTitleRenderer: p,
                                    selectedFontSize: v,
                                    fontColor: x,
                                    selectedFontColor: g,
                                    titleFontWeight: j,
                                    progressbarColor: c,
                                    alwaysShowProgressbar: d,
                                    arrowSize: b,
                                    backgroundColor: u
                                }), n)
                            }))
                        })), a.state = {
                            selectedTab: 0
                        }, a
                    }
                    return Object(c.default)(n, [{
                        key: "render",
                        value: function() {
                            var t = this.props,
                                e = t.showButton,
                                n = t.buttonConfig,
                                r = t.tabsTitle;
                            return Object(T.jsxs)("div", {
                                className: "jsx-".concat(J.__hash) + " mobile-timer-tabs-component",
                                children: [r && Object(T.jsx)("div", {
                                    className: "jsx-".concat(J.__hash) + " mobile-tabs-title-wrapper",
                                    children: Object(T.jsx)(y.a, ot({}, r))
                                }), this.renderTabs(), e && Object(T.jsx)("div", {
                                    className: "jsx-".concat(J.__hash) + " mobile-button-link",
                                    children: Object(T.jsx)(v.a, ot({}, n))
                                }), Object(T.jsx)(i.a, {
                                    id: J.__hash,
                                    children: J
                                })]
                            })
                        }
                    }]), n
                }(p.PureComponent),
                lt = M.m + "px",
                dt = [".vertical-timer-tabs.jsx-735614337 .desktop-wrapper.jsx-735614337{display:block;}", ".vertical-timer-tabs.jsx-735614337 .mobile-wrapper.jsx-735614337{display:none;}", "@media (max-width:".concat(lt, "){.vertical-timer-tabs.jsx-735614337 .desktop-wrapper.jsx-735614337{display:none;}.vertical-timer-tabs.jsx-735614337 .mobile-wrapper.jsx-735614337{display:block;}}")];
            dt.__hash = "735614337";
            var bt = n("X76l");

            function ut(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function pt(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? ut(Object(n), !0).forEach((function(e) {
                        Object(r.default)(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ut(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }
            var ft = function(t) {
                return Object(T.jsxs)("div", {
                    className: "jsx-".concat(dt.__hash) + " vertical-timer-tabs",
                    children: [Object(T.jsx)("div", {
                        className: "jsx-".concat(dt.__hash) + " desktop-wrapper",
                        children: Object(T.jsx)(G, pt({}, t))
                    }), Object(T.jsx)("div", {
                        className: "jsx-".concat(dt.__hash) + " mobile-wrapper",
                        children: Object(T.jsx)(ct, pt({}, t))
                    }), Object(T.jsx)(i.a, {
                        id: dt.__hash,
                        children: dt
                    })]
                })
            };
            ft.defaultProps = bt.a;
            e.a = ft
        },
        dI71: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return a
            }));
            var r = n("s4An");

            function a(t, e) {
                t.prototype = Object.create(e.prototype), t.prototype.constructor = t, Object(r.a)(t, e)
            }
        },
        dRu9: function(t, e, n) {
            "use strict";
            n.d(e, "b", (function() {
                return p
            })), n.d(e, "a", (function() {
                return f
            })), n.d(e, "c", (function() {
                return m
            }));
            var r = n("zLVn"),
                a = n("dI71"),
                i = n("q1tI"),
                o = n.n(i),
                s = n("i8i4"),
                c = n.n(s),
                l = n("KkKZ"),
                d = n("0PSK"),
                b = "unmounted",
                u = "exited",
                p = "entering",
                f = "entered",
                m = "exiting",
                h = function(t) {
                    function e(e, n) {
                        var r;
                        r = t.call(this, e, n) || this;
                        var a, i = n && !n.isMounting ? e.enter : e.appear;
                        return r.appearStatus = null, e.in ? i ? (a = u, r.appearStatus = p) : a = f : a = e.unmountOnExit || e.mountOnEnter ? b : u, r.state = {
                            status: a
                        }, r.nextCallback = null, r
                    }
                    Object(a.a)(e, t), e.getDerivedStateFromProps = function(t, e) {
                        return t.in && e.status === b ? {
                            status: u
                        } : null
                    };
                    var n = e.prototype;
                    return n.componentDidMount = function() {
                        this.updateStatus(!0, this.appearStatus)
                    }, n.componentDidUpdate = function(t) {
                        var e = null;
                        if (t !== this.props) {
                            var n = this.state.status;
                            this.props.in ? n !== p && n !== f && (e = p) : n !== p && n !== f || (e = m)
                        }
                        this.updateStatus(!1, e)
                    }, n.componentWillUnmount = function() {
                        this.cancelNextCallback()
                    }, n.getTimeouts = function() {
                        var t, e, n, r = this.props.timeout;
                        return t = e = n = r, null != r && "number" !== typeof r && (t = r.exit, e = r.enter, n = void 0 !== r.appear ? r.appear : e), {
                            exit: t,
                            enter: e,
                            appear: n
                        }
                    }, n.updateStatus = function(t, e) {
                        void 0 === t && (t = !1), null !== e ? (this.cancelNextCallback(), e === p ? this.performEnter(t) : this.performExit()) : this.props.unmountOnExit && this.state.status === u && this.setState({
                            status: b
                        })
                    }, n.performEnter = function(t) {
                        var e = this,
                            n = this.props.enter,
                            r = this.context ? this.context.isMounting : t,
                            a = this.props.nodeRef ? [r] : [c.a.findDOMNode(this), r],
                            i = a[0],
                            o = a[1],
                            s = this.getTimeouts(),
                            d = r ? s.appear : s.enter;
                        !t && !n || l.a.disabled ? this.safeSetState({
                            status: f
                        }, (function() {
                            e.props.onEntered(i)
                        })) : (this.props.onEnter(i, o), this.safeSetState({
                            status: p
                        }, (function() {
                            e.props.onEntering(i, o), e.onTransitionEnd(d, (function() {
                                e.safeSetState({
                                    status: f
                                }, (function() {
                                    e.props.onEntered(i, o)
                                }))
                            }))
                        })))
                    }, n.performExit = function() {
                        var t = this,
                            e = this.props.exit,
                            n = this.getTimeouts(),
                            r = this.props.nodeRef ? void 0 : c.a.findDOMNode(this);
                        e && !l.a.disabled ? (this.props.onExit(r), this.safeSetState({
                            status: m
                        }, (function() {
                            t.props.onExiting(r), t.onTransitionEnd(n.exit, (function() {
                                t.safeSetState({
                                    status: u
                                }, (function() {
                                    t.props.onExited(r)
                                }))
                            }))
                        }))) : this.safeSetState({
                            status: u
                        }, (function() {
                            t.props.onExited(r)
                        }))
                    }, n.cancelNextCallback = function() {
                        null !== this.nextCallback && (this.nextCallback.cancel(), this.nextCallback = null)
                    }, n.safeSetState = function(t, e) {
                        e = this.setNextCallback(e), this.setState(t, e)
                    }, n.setNextCallback = function(t) {
                        var e = this,
                            n = !0;
                        return this.nextCallback = function(r) {
                            n && (n = !1, e.nextCallback = null, t(r))
                        }, this.nextCallback.cancel = function() {
                            n = !1
                        }, this.nextCallback
                    }, n.onTransitionEnd = function(t, e) {
                        this.setNextCallback(e);
                        var n = this.props.nodeRef ? this.props.nodeRef.current : c.a.findDOMNode(this),
                            r = null == t && !this.props.addEndListener;
                        if (n && !r) {
                            if (this.props.addEndListener) {
                                var a = this.props.nodeRef ? [this.nextCallback] : [n, this.nextCallback],
                                    i = a[0],
                                    o = a[1];
                                this.props.addEndListener(i, o)
                            }
                            null != t && setTimeout(this.nextCallback, t)
                        } else setTimeout(this.nextCallback, 0)
                    }, n.render = function() {
                        var t = this.state.status;
                        if (t === b) return null;
                        var e = this.props,
                            n = e.children,
                            a = (e.in, e.mountOnEnter, e.unmountOnExit, e.appear, e.enter, e.exit, e.timeout, e.addEndListener, e.onEnter, e.onEntering, e.onEntered, e.onExit, e.onExiting, e.onExited, e.nodeRef, Object(r.a)(e, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]));
                        return o.a.createElement(d.a.Provider, {
                            value: null
                        }, "function" === typeof n ? n(t, a) : o.a.cloneElement(o.a.Children.only(n), a))
                    }, e
                }(o.a.Component);

            function v() {}
            h.contextType = d.a, h.propTypes = {}, h.defaultProps = { in: !1,
                mountOnEnter: !1,
                unmountOnExit: !1,
                appear: !1,
                enter: !0,
                exit: !0,
                onEnter: v,
                onEntering: v,
                onEntered: v,
                onExit: v,
                onExiting: v,
                onExited: v
            }, h.UNMOUNTED = b, h.EXITED = u, h.ENTERING = p, h.ENTERED = f, h.EXITING = m, e.d = h
        },
        hrmg: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "default", (function() {
                return x
            }));
            var r = n("cpVT"),
                a = n("H+61"),
                i = n("UlJF"),
                o = n("7LId"),
                s = n("VIvw"),
                c = n("iHvq"),
                l = n("MX0m"),
                d = n.n(l),
                b = n("q1tI"),
                u = n("0znF"),
                p = [".two-thirds-text-and-asset-component .side-by-side-text-and-asset-component .full-paragraph-component-wrapper{width:40%;}", ".two-thirds-text-and-asset-component .side-by-side-text-and-asset-component .image-wrapper{width:60%;}"];
            p.__hash = "3189732021";
            var f = n("nKUr");

            function m(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function h(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? m(Object(n), !0).forEach((function(e) {
                        Object(r.default)(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : m(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function v(t) {
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
                    var n, r = Object(c.default)(t);
                    if (e) {
                        var a = Object(c.default)(this).constructor;
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments);
                    return Object(s.default)(this, n)
                }
            }
            var x = function(t) {
                Object(o.default)(n, t);
                var e = v(n);

                function n() {
                    return Object(a.default)(this, n), e.apply(this, arguments)
                }
                return Object(i.default)(n, [{
                    key: "render",
                    value: function() {
                        return Object(f.jsxs)("div", {
                            className: "jsx-".concat(p.__hash) + " two-thirds-text-and-asset-component",
                            children: [Object(f.jsx)(u.default, h({}, this.props)), Object(f.jsx)(d.a, {
                                id: p.__hash,
                                children: p
                            })]
                        })
                    }
                }]), n
            }(b.PureComponent);
            x.defaultProps = h(h({}, u.default.defaultProps), {}, {
                fullParagraph: h(h({}, u.default.defaultProps.fullParagraph), {}, {
                    topic: {
                        text: "For the creative process",
                        color: "brand-blue"
                    },
                    title: "Streamline your creative workflow",
                    body: "Use customizable forms to request all the information needed. Then, easily share assets and receive feedback in real time."
                }),
                asset: h(h({}, u.default.defaultProps.asset), {}, {
                    image: h(h({}, u.default.defaultProps.asset.image), {}, {
                        src: "https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/segment-layout-default-images/text-and-asset/timeline-view.png"
                    })
                })
            })
        },
        pQ8y: function(t, e, n) {
            "use strict";
            var r = n("wx14"),
                a = n("zLVn"),
                i = n("dI71");

            function o(t, e) {
                return t.replace(new RegExp("(^|\\s)" + e + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "")
            }
            var s = n("q1tI"),
                c = n.n(s),
                l = n("dRu9"),
                d = function(t, e) {
                    return t && e && e.split(" ").forEach((function(e) {
                        return r = e, void((n = t).classList ? n.classList.remove(r) : "string" === typeof n.className ? n.className = o(n.className, r) : n.setAttribute("class", o(n.className && n.className.baseVal || "", r)));
                        var n, r
                    }))
                },
                b = function(t) {
                    function e() {
                        for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
                        return (e = t.call.apply(t, [this].concat(r)) || this).appliedClasses = {
                            appear: {},
                            enter: {},
                            exit: {}
                        }, e.onEnter = function(t, n) {
                            var r = e.resolveArguments(t, n),
                                a = r[0],
                                i = r[1];
                            e.removeClasses(a, "exit"), e.addClass(a, i ? "appear" : "enter", "base"), e.props.onEnter && e.props.onEnter(t, n)
                        }, e.onEntering = function(t, n) {
                            var r = e.resolveArguments(t, n),
                                a = r[0],
                                i = r[1] ? "appear" : "enter";
                            e.addClass(a, i, "active"), e.props.onEntering && e.props.onEntering(t, n)
                        }, e.onEntered = function(t, n) {
                            var r = e.resolveArguments(t, n),
                                a = r[0],
                                i = r[1] ? "appear" : "enter";
                            e.removeClasses(a, i), e.addClass(a, i, "done"), e.props.onEntered && e.props.onEntered(t, n)
                        }, e.onExit = function(t) {
                            var n = e.resolveArguments(t)[0];
                            e.removeClasses(n, "appear"), e.removeClasses(n, "enter"), e.addClass(n, "exit", "base"), e.props.onExit && e.props.onExit(t)
                        }, e.onExiting = function(t) {
                            var n = e.resolveArguments(t)[0];
                            e.addClass(n, "exit", "active"), e.props.onExiting && e.props.onExiting(t)
                        }, e.onExited = function(t) {
                            var n = e.resolveArguments(t)[0];
                            e.removeClasses(n, "exit"), e.addClass(n, "exit", "done"), e.props.onExited && e.props.onExited(t)
                        }, e.resolveArguments = function(t, n) {
                            return e.props.nodeRef ? [e.props.nodeRef.current, t] : [t, n]
                        }, e.getClassNames = function(t) {
                            var n = e.props.classNames,
                                r = "string" === typeof n,
                                a = r ? "" + (r && n ? n + "-" : "") + t : n[t];
                            return {
                                baseClassName: a,
                                activeClassName: r ? a + "-active" : n[t + "Active"],
                                doneClassName: r ? a + "-done" : n[t + "Done"]
                            }
                        }, e
                    }
                    Object(i.a)(e, t);
                    var n = e.prototype;
                    return n.addClass = function(t, e, n) {
                        var r = this.getClassNames(e)[n + "ClassName"],
                            a = this.getClassNames("enter").doneClassName;
                        "appear" === e && "done" === n && a && (r += " " + a), "active" === n && t && t.scrollTop, r && (this.appliedClasses[e][n] = r, function(t, e) {
                            t && e && e.split(" ").forEach((function(e) {
                                return r = e, void((n = t).classList ? n.classList.add(r) : function(t, e) {
                                    return t.classList ? !!e && t.classList.contains(e) : -1 !== (" " + (t.className.baseVal || t.className) + " ").indexOf(" " + e + " ")
                                }(n, r) || ("string" === typeof n.className ? n.className = n.className + " " + r : n.setAttribute("class", (n.className && n.className.baseVal || "") + " " + r)));
                                var n, r
                            }))
                        }(t, r))
                    }, n.removeClasses = function(t, e) {
                        var n = this.appliedClasses[e],
                            r = n.base,
                            a = n.active,
                            i = n.done;
                        this.appliedClasses[e] = {}, r && d(t, r), a && d(t, a), i && d(t, i)
                    }, n.render = function() {
                        var t = this.props,
                            e = (t.classNames, Object(a.a)(t, ["classNames"]));
                        return c.a.createElement(l.d, Object(r.a)({}, e, {
                            onEnter: this.onEnter,
                            onEntered: this.onEntered,
                            onEntering: this.onEntering,
                            onExit: this.onExit,
                            onExiting: this.onExiting,
                            onExited: this.onExited
                        }))
                    }, e
                }(c.a.Component);
            b.defaultProps = {
                classNames: ""
            }, b.propTypes = {};
            e.a = b
        },
        s4An: function(t, e, n) {
            "use strict";

            function r(t, e) {
                return (r = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }
            n.d(e, "a", (function() {
                return r
            }))
        },
        wx14: function(t, e, n) {
            "use strict";

            function r() {
                return (r = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }).apply(this, arguments)
            }
            n.d(e, "a", (function() {
                return r
            }))
        },
        zLVn: function(t, e, n) {
            "use strict";

            function r(t, e) {
                if (null == t) return {};
                var n, r, a = {},
                    i = Object.keys(t);
                for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || (a[n] = t[n]);
                return a
            }
            n.d(e, "a", (function() {
                return r
            }))
        }
    }
]);
//# sourceMappingURL=3c4859d19f00ad0f5d804de5d236492f40221cb1.342a2643ac52b0be0dec.js.map