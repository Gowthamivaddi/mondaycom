(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [109], {
        P5I8: function(e, t, o) {
            "use strict";
            var a = o("MX0m"),
                n = o.n(a),
                r = o("TSYQ"),
                s = o.n(r),
                i = o("/Z+I"),
                c = o("xwfA"),
                l = [".tab-nav-button{font-size:0.875rem;font-weight:500;padding:7px 16px 9px;border-radius:20px;background-color:".concat(c.a[i.BACKGROUND_GRAY_COLOR_NAME], ";color:").concat(c.a[i.DARK_WORK_OS_IRIS_COLOR_NAME], ";white-space:nowrap;-webkit-transition:background-color 0.2s ease-in-out,color 0.2s ease-in-out;transition:background-color 0.2s ease-in-out,color 0.2s ease-in-out;}"), ".tab-nav-button.selected{background-color:".concat(c.a[i.SPACE_BLUE_COLOR_NAME], ";color:").concat(c.a[i.WHITE_COLOR_NAME], ";}"), ".tab-nav-button.background-gray{background-color:".concat(c.a[i.WHITE_COLOR_NAME], ";}"), ".tab-nav-button.background-gray.selected{background-color:".concat(c.a[i.SPACE_BLUE_COLOR_NAME], ";}"), ".tab-nav-button.crm-green{background-color:".concat(c.a[i.WHITE_COLOR_NAME], ";color:").concat(c.a[i.DARK_CRM_GREEN_COLOR_NAME], ";}"), ".tab-nav-button.crm-green.selected{background-color:".concat(c.a[i.DARK_CRM_GREEN_COLOR_NAME], ";color:").concat(c.a[i.WHITE_COLOR_NAME], ";}"), ".tab-nav-button.marketing-red{background-color:".concat(c.a[i.WHITE_COLOR_NAME], ";color:").concat(c.a[i.DARK_MARKETING_RED_COLOR_NAME], ";}"), ".tab-nav-button.marketing-red.selected{background-color:".concat(c.a[i.DARK_MARKETING_RED_COLOR_NAME], ";color:").concat(c.a[i.WHITE_COLOR_NAME], ";}"), ".tab-nav-button.projects-orange{background-color:".concat(c.a[i.WHITE_COLOR_NAME], ";color:").concat(c.a[i.DARK_PROJECTS_ORANGE_COLOR_NAME], ";}"), ".tab-nav-button.projects-orange.selected{background-color:".concat(c.a[i.DARK_PROJECTS_ORANGE_COLOR_NAME], ";color:").concat(c.a[i.WHITE_COLOR_NAME], ";}"), ".tab-nav-button.dev-green{background-color:".concat(c.a[i.WHITE_COLOR_NAME], ";color:").concat(c.a[i.DARK_DEV_GREEN_COLOR_NAME], ";}"), ".tab-nav-button.dev-green.selected{background-color:".concat(c.a[i.DARK_DEV_GREEN_COLOR_NAME], ";color:").concat(c.a[i.WHITE_COLOR_NAME], ";}"), ".tab-nav-button.white{background-color:transparent;border:".concat("1px solid ".concat(c.a[i.WHITE_COLOR_NAME]), ";color:", c.a[i.WHITE_COLOR_NAME], ";}"), ".tab-nav-button.white.selected{background-color:rgba(255,255,255,0.2);border-color:rgba(255,255,255,0.2);color:".concat(c.a[i.WHITE_COLOR_NAME], ";}"), ".tab-nav-button.dev-lighter-tint-01{background-color:transparent;border:".concat("1px solid ".concat(c.a[i.BRAND_PRIMARY_GREEN]), ";color:", c.a[i.BRAND_BLACK_TEXT_COLOR], ";}"), ".tab-nav-button.dev-lighter-tint-01.selected{background-color:".concat(c.a[i.DEV_LIGHTER_TINT_01_COLOR_NAME], ";color:").concat(c.a[i.BRAND_BLACK_TEXT_COLOR], ";border-color:").concat(c.a[i.DEV_LIGHTER_TINT_01_COLOR_NAME], ";}")];
            l.__hash = "1108289001";
            var b = o("nKUr");
            t.a = function(e) {
                var t = e.label,
                    o = e.selected,
                    a = e.theme;
                return Object(b.jsxs)(b.Fragment, {
                    children: [Object(b.jsx)("span", {
                        className: "jsx-".concat(l.__hash) + " " + (s()("tab-nav-button", {
                            selected: o
                        }, a) || ""),
                        children: t
                    }), Object(b.jsx)(n.a, {
                        id: l.__hash,
                        children: l
                    })]
                })
            }
        },
        "TSH/": function(e, t, o) {
            "use strict";
            o.d(t, "a", (function() {
                return a
            }));
            var a = [".mobile-tabs-navigation{overflow-x:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;gap:8px;padding-left:16px;}", ".mobile-tabs-navigation::-webkit-scrollbar{display:none;}", ".mobile-tabs-navigation .tab-nav-button-wrapper{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;white-space:nowrap;}", '.mobile-tabs-navigation::after{content:"";padding-right:16px;}'];
            a.__hash = "1485220159"
        },
        "a/++": function(e, t, o) {
            "use strict";
            o.r(t);
            var a = o("cpVT"),
                n = o("dhJC"),
                r = o("hrmg"),
                s = o("/Z+I"),
                i = o("icyP"),
                c = o("rNX+");

            function l(e, t) {
                var o = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), o.push.apply(o, a)
                }
                return o
            }

            function b(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? l(Object(o), !0).forEach((function(t) {
                        Object(a.default)(e, t, o[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : l(Object(o)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                    }))
                }
                return e
            }
            var d = r.default.defaultProps.asset,
                u = (d.image, Object(n.default)(d, ["image"])),
                p = {
                    buildingBlocksTabsTheme: i.o,
                    tabs: [{
                        tabLabel: "Boards",
                        tabIcon: "https://dapulse-res.cloudinary.com/image/upload/Generator_featured images/Home Page - 2022 Rebrand/tabs/board_icon.svg",
                        textAndAsset: b(b({}, r.default.defaultProps), {}, {
                            swapTextAndAssetPosition: !0,
                            fullParagraph: b(b({}, r.default.defaultProps.fullParagraph), {}, {
                                topic: {},
                                title: "Boards",
                                titleColor: s.WORK_OS_IRIS_COLOR_NAME,
                                body: "Everything starts with a visual board \u2014 the core of monday.com Work OS. Tailor it your way and manage anything from projects to departments."
                            }),
                            asset: b(b({}, u), {}, {
                                video: {
                                    loop: !0,
                                    src: {
                                        formats: ["/Generator_featured images/Home Page - 2022 Rebrand/tabs/final-videos-tabs/7_status.mp4"]
                                    }
                                },
                                position: "center",
                                useWindowMask: !0
                            })
                        })
                    }, {
                        tabLabel: "Views",
                        tabIcon: "https://dapulse-res.cloudinary.com/image/upload/Generator_featured images/Home Page - 2022 Rebrand/tabs/views_icon.svg",
                        textAndAsset: b(b({}, r.default.defaultProps), {}, {
                            swapTextAndAssetPosition: !0,
                            fullParagraph: b(b({}, r.default.defaultProps.fullParagraph), {}, {
                                topic: {},
                                title: "Views",
                                titleColor: s.WORK_OS_IRIS_COLOR_NAME,
                                body: "Visualize and plan your work more efficiently with multiple views: Kanban board, calendar, timeline, Gantt chart, and more."
                            }),
                            asset: b(b({}, u), {}, {
                                video: {
                                    loop: !0,
                                    src: {
                                        formats: ["/Generator_featured images/Home Page - 2022 Rebrand/tabs/final-videos-tabs/1_Views.mp4"]
                                    }
                                },
                                position: "center",
                                useWindowMask: !0
                            })
                        })
                    }, {
                        tabLabel: "Dashboards",
                        tabIcon: "https://dapulse-res.cloudinary.com/image/upload/Generator_featured images/Home Page - 2022 Rebrand/tabs/dashboard_icon.svg",
                        textAndAsset: b(b({}, r.default.defaultProps), {}, {
                            swapTextAndAssetPosition: !0,
                            fullParagraph: b(b({}, r.default.defaultProps.fullParagraph), {}, {
                                topic: {},
                                title: "Dashboards",
                                titleColor: s.WORK_OS_IRIS_COLOR_NAME,
                                buttonConfig: {
                                    buttonType: "Secondary",
                                    buttonText: "Learn more",
                                    url: c.K
                                },
                                body: "Get the insights you need to make decisions with confidence. Keep track of progress, timelines, and budgets with custom dashboards."
                            }),
                            asset: b(b({}, u), {}, {
                                video: {
                                    loop: !0,
                                    src: {
                                        formats: ["/Generator_featured images/Home Page - 2022 Rebrand/tabs/final-videos-tabs/2_Dashboards.mp4"]
                                    }
                                },
                                position: "center",
                                useWindowMask: !0
                            })
                        })
                    }, {
                        tabLabel: "Integrations",
                        tabIcon: "https://dapulse-res.cloudinary.com/image/upload/Generator_featured images/Home Page - 2022 Rebrand/tabs/integrations_icon.svg",
                        textAndAsset: b(b({}, r.default.defaultProps), {}, {
                            swapTextAndAssetPosition: !0,
                            fullParagraph: b(b({}, r.default.defaultProps.fullParagraph), {}, {
                                topic: {},
                                title: "Integrations",
                                titleColor: s.WORK_OS_IRIS_COLOR_NAME,
                                buttonConfig: {
                                    buttonType: "Secondary",
                                    buttonText: "Learn more",
                                    url: c.tb
                                },
                                body: "Connect monday.com with all your favorite tools and get more work done. Integrate Slack, Dropbox, Adobe Creative Cloud, and more."
                            }),
                            asset: b(b({}, u), {}, {
                                video: {
                                    loop: !0,
                                    src: {
                                        formats: ["/Generator_featured images/Home Page - 2022 Rebrand/tabs/final-videos-tabs/4_Integrations.mp4"]
                                    }
                                },
                                position: "center",
                                useWindowMask: !0
                            })
                        })
                    }, {
                        tabLabel: "Automations",
                        tabIcon: "https://dapulse-res.cloudinary.com/image/upload/Generator_featured images/Home Page - 2022 Rebrand/tabs/automations_icon.svg",
                        textAndAsset: b(b({}, r.default.defaultProps), {}, {
                            swapTextAndAssetPosition: !0,
                            fullParagraph: b(b({}, r.default.defaultProps.fullParagraph), {}, {
                                topic: {},
                                title: "Automations",
                                titleColor: s.WORK_OS_IRIS_COLOR_NAME,
                                buttonConfig: {
                                    buttonType: "Secondary",
                                    buttonText: "Learn more",
                                    url: c.w
                                },
                                body: "Streamline processes to focus on the work that matters. Choose from a variety of automation recipes or create your own in minutes."
                            }),
                            asset: b(b({}, u), {}, {
                                video: {
                                    loop: !0,
                                    src: {
                                        formats: ["/Generator_featured images/Home Page - 2022 Rebrand/tabs/final-videos-tabs/3_Automations.mp4"]
                                    }
                                },
                                position: "center",
                                useWindowMask: !0
                            })
                        })
                    }, {
                        tabLabel: "Apps",
                        tabIcon: "https://dapulse-res.cloudinary.com/image/upload/Generator_featured images/Home Page - 2022 Rebrand/tabs/apps_icon.svg",
                        textAndAsset: b(b({}, r.default.defaultProps), {}, {
                            swapTextAndAssetPosition: !0,
                            fullParagraph: b(b({}, r.default.defaultProps.fullParagraph), {}, {
                                topic: {},
                                title: "Apps",
                                titleColor: s.WORK_OS_IRIS_COLOR_NAME,
                                buttonConfig: {
                                    buttonType: "Secondary",
                                    buttonText: "Learn more",
                                    url: c.n
                                },
                                body: "Expand the capabilities of your Work OS with monday apps. Enhance your workflows with custom views, widgets, integrations, and more. "
                            }),
                            asset: b(b({}, u), {}, {
                                video: {
                                    loop: !0,
                                    src: {
                                        formats: ["/Generator_featured images/Home Page - 2022 Rebrand/tabs/final-videos-tabs/5_Apps.mp4"]
                                    }
                                },
                                position: "center",
                                useWindowMask: !0
                            })
                        })
                    }, {
                        tabLabel: "Docs",
                        tabIcon: "https://dapulse-res.cloudinary.com/image/upload/Generator_featured images/Home Page - 2022 Rebrand/tabs/docs_icon.svg",
                        textAndAsset: b(b({}, r.default.defaultProps), {}, {
                            swapTextAndAssetPosition: !0,
                            fullParagraph: b(b({}, r.default.defaultProps.fullParagraph), {}, {
                                topic: {},
                                title: "Docs",
                                titleColor: s.WORK_OS_IRIS_COLOR_NAME,
                                buttonConfig: {
                                    buttonType: "Secondary",
                                    buttonText: "Learn more",
                                    url: c.Lc
                                },
                                body: "Transform text into action items, in just a few clicks. Connect, collaborate, and execute ideas and workflows in real-time from any doc."
                            }),
                            asset: b(b({}, u), {}, {
                                video: {
                                    loop: !0,
                                    src: {
                                        formats: ["/Generator_featured images/Home Page - 2022 Rebrand/tabs/final-videos-tabs/6_Docs.mp4"]
                                    }
                                },
                                position: "center",
                                useWindowMask: !0
                            })
                        })
                    }]
                },
                f = o("9hre"),
                O = o("MX0m"),
                g = o.n(O),
                m = o("gzYw"),
                h = o("q1tI"),
                _ = o("P5I8"),
                j = o("TSYQ"),
                x = o.n(j),
                v = o("xwfA"),
                y = o("Xkd2"),
                w = o("bmYG"),
                k = [".building-blocks-content-wrapper.jsx-1134681092{visibility:hidden;opacity:0;-webkit-transition:0.3s;transition:0.3s;}", ".building-blocks-content-wrapper.jsx-1134681092:not(:first-child){position:absolute;top:0;left:0;}", ".building-blocks-content-wrapper.selected.jsx-1134681092{visibility:visible;opacity:1;}", "@media (max-width:".concat(w.r, "){.building-blocks-content-wrapper.jsx-1134681092 .side-by-side-content.is-swap{-webkit-flex-direction:column-reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;}}")];
            k.__hash = "1134681092";
            var R = o("VgqV"),
                A = o("nKUr");

            function P(e, t) {
                var o = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), o.push.apply(o, a)
                }
                return o
            }

            function E(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? P(Object(o), !0).forEach((function(t) {
                        Object(a.default)(e, t, o[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : P(Object(o)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                    }))
                }
                return e
            }
            var C = function(e) {
                var t = e.tab,
                    o = e.isSelected,
                    a = e.themeColor,
                    n = e.isAssetVisible,
                    s = e.isMobileDisplay,
                    i = E(E({}, t.textAndAsset), {}, {
                        hideControls: !0,
                        asset: n ? E(E({}, t.textAndAsset.asset), {}, {
                            video: E(E({}, t.textAndAsset.asset.video), {}, {
                                videoPlayerRef: t.videoPlayerRef
                            })
                        }) : {},
                        fullParagraph: E(E({}, t.textAndAsset.fullParagraph), {}, {
                            titleIcon: Object(y.getUrlWithColor)({
                                url: null === t || void 0 === t ? void 0 : t.tabIcon,
                                color: v.a[a]
                            }),
                            titleColor: a,
                            title: s ? "" : t.textAndAsset.fullParagraph.title
                        }),
                        textSize: s ? R.e : t.textAndAsset.fullParagraph.textSize
                    });
                return Object(A.jsxs)("div", {
                    className: "jsx-".concat(k.__hash) + " " + (x()("building-blocks-content-wrapper", {
                        selected: o
                    }) || ""),
                    children: [Object(A.jsx)(r.default, E(E({}, i), {}, {
                        useWindowMask: t.textAndAsset.asset.useWindowMask
                    })), Object(A.jsx)(g.a, {
                        id: k.__hash,
                        children: k
                    })]
                })
            };
            C.defaultProps = {
                isSelected: !0,
                isAssetVisible: !0
            };
            var T = C,
                N = [".building-blocks-tabs-mobile-component .secondary-button .secondary-button-text{font-size:0.8125rem;}", ".building-blocks-tabs-mobile-component .secondary-button .arrow-wrapper svg{height:12px;width:10px;}"];

            function S(e, t) {
                var o = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), o.push.apply(o, a)
                }
                return o
            }

            function I(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? S(Object(o), !0).forEach((function(t) {
                        Object(a.default)(e, t, o[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : S(Object(o)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                    }))
                }
                return e
            }
            N.__hash = "66671977";
            var L = function(e) {
                    var t = Object(h.useState)(0),
                        o = t[0],
                        a = t[1],
                        n = Object(h.useState)(!1),
                        r = n[0],
                        s = n[1],
                        i = e.buildingBlocksTabsTheme;
                    return Object(A.jsxs)("div", {
                        className: "jsx-".concat(N.__hash) + " building-blocks-tabs-mobile-component",
                        children: [Object(A.jsx)(m.a, I(I({}, e), {}, {
                            selectedTab: o,
                            setSelectedTab: a,
                            wasComponentEverVisible: r,
                            setWasComponentEverVisible: s,
                            navigationItemRenderer: function(e, t) {
                                return Object(A.jsx)(_.a, {
                                    label: e.tabLabel,
                                    selected: o === t,
                                    theme: i
                                })
                            },
                            carouselItemRenderer: function(e, t) {
                                var a = r || t === o;
                                return Object(A.jsx)(T, {
                                    tab: e,
                                    isAssetVisible: a,
                                    buildingBlocksTabsTheme: i,
                                    themeColor: i,
                                    isMobileDisplay: !0
                                }, t)
                            }
                        })), Object(A.jsx)(g.a, {
                            id: N.__hash,
                            children: N
                        })]
                    })
                },
                M = o("n8Bu"),
                D = o.n(M),
                W = o("h0RW"),
                K = o("87MR"),
                G = o("yAMK"),
                H = [".tab.jsx-2579243975{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;position:relative;cursor:pointer;padding:0 20px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;min-width:100px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}", ".tab.jsx-2579243975 .icon-wrapper.jsx-2579243975{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding-top:8px;opacity:0.6;position:relative;}", ".tab.jsx-2579243975 .icon-wrapper.jsx-2579243975 .icon-absolute-container.jsx-2579243975{position:absolute;top:0;opacity:0;}", ".tab.jsx-2579243975 .icon-wrapper.jsx-2579243975 .icon-absolute-container.visible.jsx-2579243975{opacity:1;}", ".tab.jsx-2579243975 .name.jsx-2579243975{font-weight:300;opacity:0.6;}", ".tab.jsx-2579243975 .marker.jsx-2579243975{position:absolute;bottom:0;left:0;height:4px;width:100%;border-top-left-radius:8px;border-top-right-radius:8px;-webkit-transition:background-color 0.1s ease-in-out;transition:background-color 0.1s ease-in-out;}", ".tab.selected.jsx-2579243975{cursor:pointer;}", ".tab.selected.jsx-2579243975 .icon-wrapper.jsx-2579243975{opacity:1;}", ".tab.selected.jsx-2579243975 .name.jsx-2579243975{opacity:1;}", ".tab.jsx-2579243975:hover{background-color:".concat(v.a[s.BACKGROUND_GRAY_COLOR_NAME], ";}")];
            H.__hash = "2579243975";
            var B = o("UK0n"),
                V = o("EgnU");

            function U(e, t) {
                var o = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), o.push.apply(o, a)
                }
                return o
            }

            function z(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? U(Object(o), !0).forEach((function(t) {
                        Object(a.default)(e, t, o[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : U(Object(o)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                    }))
                }
                return e
            }
            var Y = "16px",
                X = function(e) {
                    var t, o = e.buildingBlock,
                        a = e.index,
                        n = e.selectedTab,
                        r = e.setSelectedTab,
                        i = e.themeColor,
                        c = a === n,
                        l = v.a[(null === (t = V.productsColorOptionsOvertonesMap[i]) || void 0 === t ? void 0 : t.dark) || s.DARK_WORK_OS_IRIS_COLOR_NAME],
                        b = function(e) {
                            var t = e.isSelected;
                            return {
                                image: {
                                    src: Object(y.getUrlWithColor)({
                                        url: o.tabIcon,
                                        color: t ? l : v.a[s.SPACE_BLUE_COLOR_NAME]
                                    })
                                }
                            }
                        },
                        d = b({
                            isSelected: !0
                        }),
                        u = b({
                            isSelected: !1
                        }),
                        p = function(e) {
                            var t, o = e.buildingBlock,
                                a = e.index;
                            Object(K.trackEvent)(G.TAB_CLICKED, {
                                kind: o.tabLabel,
                                info1: a
                            }), r(a), null !== o && void 0 !== o && null !== (t = o.videoPlayerRef) && void 0 !== t && t.current && o.videoPlayerRef.current.seekTo(0)
                        };
                    return Object(A.jsxs)("div", {
                        onClick: function() {
                            return p({
                                buildingBlock: o,
                                index: a
                            })
                        },
                        onKeyDown: Object(B.a)((function() {
                            return p({
                                buildingBlock: o,
                                index: a
                            })
                        })),
                        role: "tab",
                        "aria-selected": c,
                        tabIndex: 0,
                        className: "jsx-".concat(H.__hash) + " " + (x()("tab", {
                            selected: c
                        }) || ""),
                        children: [Object(A.jsxs)("div", {
                            className: "jsx-".concat(H.__hash) + " icon-wrapper",
                            children: [Object(A.jsx)("div", {
                                className: "jsx-".concat(H.__hash) + " " + (x()("icon-absolute-container", {
                                    visible: c
                                }) || ""),
                                children: Object(A.jsx)(W.a, z(z({}, d), {}, {
                                    width: Y,
                                    height: Y
                                }))
                            }), Object(A.jsx)("div", {
                                className: "jsx-".concat(H.__hash) + " " + (x()("icon-absolute-container", {
                                    visible: !c
                                }) || ""),
                                children: Object(A.jsx)(W.a, z(z({}, u), {}, {
                                    width: Y,
                                    height: Y
                                }))
                            })]
                        }), Object(A.jsx)("div", {
                            style: {
                                color: c ? l : v.a[s.SPACE_BLUE_COLOR_NAME]
                            },
                            className: "jsx-".concat(H.__hash) + " name",
                            children: o.tabLabel
                        }), Object(A.jsx)("div", {
                            style: {
                                backgroundColor: c ? l : "transparent"
                            },
                            className: "jsx-".concat(H.__hash) + " marker"
                        }), Object(A.jsx)(g.a, {
                            id: H.__hash,
                            children: H
                        })]
                    }, a)
                },
                J = [".building-blocks-tabs-desktop-component.jsx-4224238187{max-width:".concat("".concat(w.k, "px"), ";margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:40px 0;}"), ".building-blocks-tabs-desktop-component.jsx-4224238187 .building-blocks-tabs-wrapper.jsx-4224238187{height:83px;box-shadow:0px 10px 30px rgba(29,140,242,0.2);border-radius:8px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;margin-bottom:40px;font-size:0.875rem;}", ".building-blocks-tabs-desktop-component.jsx-4224238187 .building-blocks-contents-wrapper.jsx-4224238187{width:100%;position:relative;}"];

            function q(e, t) {
                var o = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), o.push.apply(o, a)
                }
                return o
            }

            function Q(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? q(Object(o), !0).forEach((function(t) {
                        Object(a.default)(e, t, o[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : q(Object(o)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                    }))
                }
                return e
            }
            J.__hash = "4224238187";
            var Z = function(e) {
                    var t = Object(h.useState)(0),
                        o = t[0],
                        a = t[1],
                        n = Object(h.useState)(!1),
                        r = n[0],
                        s = n[1],
                        i = e.tabs,
                        c = e.buildingBlocksTabsTheme,
                        l = [];
                    i.forEach((function(e) {
                        l.push(Q(Q({}, e), {}, {
                            videoPlayerRef: Object(h.useRef)(null)
                        }))
                    }));
                    return Object(A.jsx)(D.a, {
                        offset: {
                            bottom: -100,
                            top: -100
                        },
                        partialVisibility: !0,
                        onChange: function(e) {
                            !r && e && s(!0)
                        },
                        active: !r,
                        scrollCheck: !r,
                        children: Object(A.jsxs)("div", {
                            className: "jsx-".concat(J.__hash) + " building-blocks-tabs-desktop-component",
                            children: [Object(A.jsx)("div", {
                                role: "tablist",
                                className: "jsx-".concat(J.__hash) + " building-blocks-tabs-wrapper",
                                children: l.map((function(e, t) {
                                    return Object(A.jsx)(X, {
                                        buildingBlock: e,
                                        index: t,
                                        selectedTab: o,
                                        setSelectedTab: a,
                                        themeColor: c
                                    }, t)
                                }))
                            }), Object(A.jsx)("div", {
                                className: "jsx-".concat(J.__hash) + " building-blocks-contents-wrapper",
                                children: l.map((function(e, t) {
                                    var a = t === o,
                                        n = r || a;
                                    return Object(A.jsx)(T, {
                                        tab: e,
                                        isSelected: a,
                                        isAssetVisible: n,
                                        buildingBlocksTabsTheme: c,
                                        themeColor: c
                                    }, t)
                                }))
                            }), Object(A.jsx)(g.a, {
                                id: J.__hash,
                                children: J
                            })]
                        })
                    })
                },
                F = Object(f.a)(Z, L);
            F.defaultProps = p;
            t.default = F
        },
        gzYw: function(e, t, o) {
            "use strict";
            var a = o("cpVT"),
                n = o("MX0m"),
                r = o.n(n),
                s = o("q1tI"),
                i = o("n8Bu"),
                c = o.n(i),
                l = o("87MR"),
                b = o("yAMK"),
                d = o("3D78"),
                u = o("TSH/"),
                p = o("bmYG"),
                f = [".mobile-tabs-component *:focus{outline:none !important;}", ".mobile-tabs-component .carousel .slick-slider.focus .slick-list .slick-track{padding:0;}", "@media (min-width:".concat(p.t, "){.carousel .slick-slide .side-by-side-text-and-asset .side-by-side-content .full-paragraph-component-wrapper{padding:0;}}")];
            f.__hash = "3316118724";
            var O = o("nKUr");

            function g(e, t) {
                var o = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), o.push.apply(o, a)
                }
                return o
            }

            function m(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? g(Object(o), !0).forEach((function(t) {
                        Object(a.default)(e, t, o[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : g(Object(o)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                    }))
                }
                return e
            }
            t.a = function(e) {
                var t = Object(s.useState)(null),
                    o = t[0],
                    a = t[1],
                    n = Object(s.useState)(!1),
                    i = n[0],
                    p = n[1],
                    g = Object(s.useRef)([]),
                    h = e.tabs,
                    _ = e.selectedTab,
                    j = e.setSelectedTab,
                    x = e.navigationItemRenderer,
                    v = e.carouselItemRenderer,
                    y = e.wasComponentEverVisible,
                    w = e.setWasComponentEverVisible,
                    k = [];
                h.forEach((function(e) {
                    k.push(m(m({}, e), {}, {
                        videoPlayerRef: Object(s.useRef)(null)
                    }))
                })), Object(s.useEffect)((function() {
                    g.current = g.current.slice(0, k.length)
                }), [k]);
                Object(s.useEffect)((function() {
                    var e, t = k[_];
                    null !== t && void 0 !== t && null !== (e = t.videoPlayerRef) && void 0 !== e && e.current && t.videoPlayerRef.current.seekTo(0), null === o || void 0 === o || o.slickGoTo(_)
                }), [_]);
                var R = function(e) {
                        var t, o;
                        i && (null === g || void 0 === g || null === (t = g.current) || void 0 === t || null === (o = t[e]) || void 0 === o || o.scrollIntoView({
                            behavior: "smooth",
                            block: "nearest",
                            inline: "center"
                        }))
                    },
                    A = function(e, t) {
                        return Object(O.jsx)("div", {
                            className: "tab-nav-button-wrapper",
                            ref: function(e) {
                                return g.current[t] = e
                            },
                            onClick: function(o) {
                                return function(e, t, o) {
                                    j(o), e.scrollIntoView({
                                        behavior: "smooth",
                                        block: "nearest",
                                        inline: "center"
                                    }), Object(l.trackEvent)(b.TAB_CLICKED, {
                                        kind: t.tabLabel,
                                        info1: o
                                    })
                                }(o.target, e, t)
                            },
                            children: x(e, t)
                        })
                    },
                    P = {
                        items: k,
                        itemRenderer: v,
                        defaultIndex: y ? 0 : _,
                        slidesToShow: 1,
                        autoplay: !1,
                        autoplaySpeed: -1,
                        centerPadding: "5%",
                        centerMode: !1,
                        infinite: !1,
                        fade: !1,
                        onRefSet: a
                    };
                return Object(O.jsx)(c.a, {
                    offset: {
                        bottom: -100,
                        top: -100
                    },
                    partialVisibility: !0,
                    onChange: function(e) {
                        var t, o;
                        !y && e && (w(!0), 0 !== _ && (null === g || void 0 === g || null === (t = g.current) || void 0 === t || null === (o = t[_]) || void 0 === o || o.scrollIntoView({
                            behavior: "smooth",
                            block: "nearest",
                            inline: "center"
                        })));
                        p(e)
                    },
                    active: !y,
                    scrollCheck: !y,
                    children: Object(O.jsxs)("div", {
                        className: "jsx-".concat(u.a.__hash, " jsx-").concat(f.__hash) + " mobile-tabs-component",
                        children: [Object(O.jsx)("div", {
                            className: "jsx-".concat(u.a.__hash, " jsx-").concat(f.__hash) + " mobile-tabs-navigation",
                            children: k.map((function(e, t) {
                                return A(e, t)
                            }))
                        }), Object(O.jsx)("div", {
                            className: "jsx-".concat(u.a.__hash, " jsx-").concat(f.__hash) + " carousel-wrapper",
                            children: Object(O.jsx)(d.a, m(m({}, P), {}, {
                                onChange: function(e) {
                                    return function(e) {
                                        e !== _ && (j(e), R(e))
                                    }(e)
                                },
                                onSwipe: function(e) {
                                    var t = _;
                                    "left" === e && _ < h.length - 1 && (t = _ + 1), "right" === e && _ > 0 && (t = _ - 1), j(t), R(_)
                                }
                            }))
                        }), Object(O.jsx)(r.a, {
                            id: u.a.__hash,
                            children: u.a
                        }), Object(O.jsx)(r.a, {
                            id: f.__hash,
                            children: f
                        })]
                    })
                })
            }
        }
    }
]);
//# sourceMappingURL=109.589b61d8dcea83ea5574.js.map