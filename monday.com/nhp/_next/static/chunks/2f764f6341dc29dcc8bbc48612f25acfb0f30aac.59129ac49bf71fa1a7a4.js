(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [36], {
        "0znF": function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, "default", (function() {
                return h
            }));
            var a = i("cpVT"),
                s = i("H+61"),
                n = i("UlJF"),
                r = i("7LId"),
                d = i("VIvw"),
                o = i("iHvq"),
                c = i("MX0m"),
                l = i.n(c),
                p = i("q1tI"),
                b = i("bZyZ"),
                g = i("VgqV"),
                u = i("D1Kn"),
                f = [];
            f.__hash = "2826627200";
            var x = i("nKUr");

            function y(e, t) {
                var i = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), i.push.apply(i, a)
                }
                return i
            }

            function m(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var i = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? y(Object(i), !0).forEach((function(t) {
                        Object(a.default)(e, t, i[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : y(Object(i)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
                    }))
                }
                return e
            }

            function w(e) {
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
                    var i, a = Object(o.default)(e);
                    if (t) {
                        var s = Object(o.default)(this).constructor;
                        i = Reflect.construct(a, arguments, s)
                    } else i = a.apply(this, arguments);
                    return Object(d.default)(this, i)
                }
            }
            var h = function(e) {
                Object(r.default)(i, e);
                var t = w(i);

                function i() {
                    return Object(s.default)(this, i), t.apply(this, arguments)
                }
                return Object(n.default)(i, [{
                    key: "render",
                    value: function() {
                        return Object(x.jsxs)("div", {
                            className: "jsx-".concat(f.__hash) + " side-by-side-text-and-asset-component",
                            children: [Object(x.jsx)(b.a, m({}, this.props)), Object(x.jsx)(l.a, {
                                id: f.__hash,
                                children: f
                            })]
                        })
                    }
                }]), i
            }(p.PureComponent);
            h.defaultProps = m(m({}, b.a.defaultProps), {}, {
                paddingTop: "64px",
                paddingBottom: "64px",
                titleSize: g.c,
                textSize: g.c,
                assetQuality: u.AUTO,
                nestedBoardItems: {
                    addLiveBoardTextAndAsset: !1,
                    boardBannerText: "Sign up for free to gain full access to all features",
                    embeddedBoardTitle: "Project plan",
                    addSecondLiveBoardSignUpButton: !1
                }
            })
        },
        bZyZ: function(e, t, i) {
            "use strict";
            i.d(t, "a", (function() {
                return I
            }));
            var a = i("dhJC"),
                s = i("H+61"),
                n = i("UlJF"),
                r = i("+Css"),
                d = i("7LId"),
                o = i("VIvw"),
                c = i("iHvq"),
                l = i("cpVT"),
                p = i("MX0m"),
                b = i.n(p),
                g = i("q1tI"),
                u = i("TSYQ"),
                f = i.n(u),
                x = i("bmYG"),
                y = (i("xwfA"), i("zcv4")),
                m = i("ZIUT"),
                w = i.n(m),
                h = "".concat(y.a.HEADER_CONTENT_HORIZONTAL_PADDING, "px"),
                v = "".concat(w.a.BODY_CONTENT_HORIZONTAL_PADDING, "px"),
                j = [".side-by-side-text-and-asset{height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}", ".side-by-side-text-and-asset .left-space{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}", ".side-by-side-text-and-asset .side-by-side-content{width:100%;padding:".concat("0 ".concat(v), ";max-width:", "".concat(x.k, "px"), ";-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;gap:var(--space-between-text-and-asset);}"), ".side-by-side-text-and-asset .side-by-side-content.top{-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}", ".side-by-side-text-and-asset .side-by-side-content.center{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".side-by-side-text-and-asset .side-by-side-content.bottom{-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;}", ".side-by-side-text-and-asset .side-by-side-content.is-swap{-webkit-flex-direction:row-reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;}", ".side-by-side-text-and-asset .side-by-side-content.is-swap .full-paragraph-component-wrapper{padding:0 0 0 60px;}", ".side-by-side-text-and-asset .side-by-side-content.align-to-logo{padding-left:".concat(h, ";padding-right:").concat(h, ";}"), ".side-by-side-text-and-asset .side-by-side-content.no-text-component{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}", ".side-by-side-text-and-asset .side-by-side-content.no-text-component .image-wrapper{width:100%;}", ".side-by-side-text-and-asset .side-by-side-content .image-wrapper{position:relative;z-index:1;width:50%;}", ".side-by-side-text-and-asset .side-by-side-content .full-paragraph-component-wrapper{position:relative;z-index:1;width:50%;}", ".side-by-side-text-and-asset .side-by-side-content .full-paragraph-component-wrapper.sticky{position:-webkit-sticky;position:sticky;-webkit-align-self:flex-start;-ms-flex-item-align:start;align-self:flex-start;}", ".side-by-side-text-and-asset .side-by-side-content .image-wrapper.inside-parallax{width:100%;}", ".side-by-side-text-and-asset .side-by-side-content .full-paragraph-component-wrapper{padding:0 60px 0 0;}", ".side-by-side-text-and-asset .side-by-side-content .image-wrapper{overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}", ".side-by-side-text-and-asset .side-by-side-content .image-wrapper.with-shadow{".concat(Object(m.getComponentShadow)(), ";}"), ".side-by-side-text-and-asset .side-by-side-content .image-wrapper.top{-webkit-align-self:flex-start;-ms-flex-item-align:start;align-self:flex-start;}", ".side-by-side-text-and-asset .side-by-side-content .image-wrapper.center{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;}", ".side-by-side-text-and-asset .side-by-side-content .image-wrapper.bottom{-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end;}", ".side-by-side-text-and-asset .side-by-side-content .image-wrapper .side-by-side-asset{height:100%;width:100%;}", ".side-by-side-text-and-asset .side-by-side-content .image-wrapper .side-by-side-asset.ignore-parent-height{height:auto;}", ".side-by-side-text-and-asset .side-by-side-content .image-wrapper .side-by-side-asset .picture-component{width:100%;height:100%;display:block;}", '.side-by-side-text-and-asset .side-by-side-content .image-wrapper .side-by-side-asset .picture-component:before{content:"";display:inline-block;height:100%;vertical-align:middle;}', ".side-by-side-text-and-asset .side-by-side-content .image-wrapper .side-by-side-asset .text-and-asset-image{max-width:100%;max-height:100%;width:auto;height:auto;display:inline-block;vertical-align:middle;position:relative;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);}", ".side-by-side-text-and-asset .side-by-side-content.add-live-board-experience .image-wrapper{cursor:pointer;}", ".side-by-side-text-and-asset .right-space{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}", "@media (min-width:".concat(x.y, "){.align-image-to-screen-edge .side-by-side-content{max-width:unset;}.align-image-to-screen-edge .side-by-side-content:not(.is-swap){padding-right:0;}.align-image-to-screen-edge .side-by-side-content.is-swap{padding-left:0;}.align-image-to-screen-edge .side-by-side-content .image-wrapper .side-by-side-asset .text-and-asset-image{width:100%;}.align-image-to-screen-edge:not(.is-swap) .left-space{min-width:", "calc((100vw - ".concat(x.k, "px) / 2)"), ";}.align-image-to-screen-edge:not(.is-swap) .right-space{display:none;}.align-image-to-screen-edge.is-swap{padding:0 96px 0 0;}.align-image-to-screen-edge.is-swap .left-space{display:none;}.align-image-to-screen-edge.is-swap .right-space{min-width:", "calc((100vw - ".concat(x.k, "px) / 2)"), ";}}"), "@media (max-width:".concat(x.y, "){.side-by-side-text-and-asset .side-by-side-content,.side-by-side-text-and-asset .side-by-side-content.is-swap{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;gap:var(--mobile-space-between-text-and-asset);}.side-by-side-text-and-asset .side-by-side-content.is-mobile-swap,.side-by-side-text-and-asset .side-by-side-content.is-swap.is-mobile-swap{-webkit-flex-direction:column-reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;}.side-by-side-text-and-asset .side-by-side-content.is-full-width,.side-by-side-text-and-asset .side-by-side-content.is-swap.is-full-width{padding-top:30px;padding-bottom:45px;}.side-by-side-text-and-asset .side-by-side-content .full-paragraph-component-wrapper,.side-by-side-text-and-asset .side-by-side-content .image-wrapper,.side-by-side-text-and-asset .side-by-side-content.is-swap .full-paragraph-component-wrapper,.side-by-side-text-and-asset .side-by-side-content.is-swap .image-wrapper{width:100% !important;}.side-by-side-text-and-asset .side-by-side-content .full-paragraph-component-wrapper,.side-by-side-text-and-asset .side-by-side-content.is-swap .full-paragraph-component-wrapper{padding:0 60px 60px 60px;}.side-by-side-text-and-asset .side-by-side-content .image-wrapper,.side-by-side-text-and-asset .side-by-side-content.is-swap .image-wrapper{height:initial;padding-bottom:16px;}}"), "@media (max-width:".concat(x.s, "){.side-by-side-text-and-asset .side-by-side-content{padding:0;}.side-by-side-text-and-asset .side-by-side-content .full-paragraph-component-wrapper,.side-by-side-text-and-asset .side-by-side-content.is-swap .full-paragraph-component-wrapper{padding:0 32px 40px 32px;}.side-by-side-text-and-asset .side-by-side-content .image-wrapper,.side-by-side-text-and-asset .side-by-side-content.is-swap .image-wrapper{padding-left:32px !important;padding-right:32px !important;}}"), ".parallax-wrapper{width:50%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}"];
            j.__hash = "985226155";
            var k = i("q1nZ"),
                O = i("Tc2L"),
                S = i("icyP"),
                P = i("h0RW"),
                T = i("87MR"),
                A = i("yAMK"),
                _ = i("nKUr");

            function B(e, t) {
                var i = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), i.push.apply(i, a)
                }
                return i
            }

            function C(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var i = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? B(Object(i), !0).forEach((function(t) {
                        Object(l.default)(e, t, i[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : B(Object(i)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
                    }))
                }
                return e
            }

            function D(e) {
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
                    var i, a = Object(c.default)(e);
                    if (t) {
                        var s = Object(c.default)(this).constructor;
                        i = Reflect.construct(a, arguments, s)
                    } else i = a.apply(this, arguments);
                    return Object(o.default)(this, i)
                }
            }
            var N = "100%",
                I = function(e) {
                    Object(d.default)(i, e);
                    var t = D(i);

                    function i() {
                        var e;
                        Object(s.default)(this, i);
                        for (var n = arguments.length, d = new Array(n), o = 0; o < n; o++) d[o] = arguments[o];
                        return e = t.call.apply(t, [this].concat(d)), Object(l.default)(Object(r.a)(e), "assetExist", (function(e) {
                            var t, i;
                            return (null === e || void 0 === e || null === (t = e.image) || void 0 === t ? void 0 : t.src) || (null === e || void 0 === e || null === (i = e.video) || void 0 === i ? void 0 : i.src)
                        })), Object(l.default)(Object(r.a)(e), "renderAsset", (function(t) {
                            var i = e.props,
                                s = i.replaceAssetComponent,
                                n = i.replaceAssetComponentProps,
                                r = i.assetQuality,
                                d = i.useDynamicAsset,
                                o = i.hideControls,
                                c = i.useWindowMask,
                                l = i.dynamicAssetParamPath;
                            if (s) return Object(_.jsx)(s, C({}, n));
                            var p = t.fitToContainer,
                                b = Object(a.default)(t, ["fitToContainer"]),
                                g = f()("side-by-side-asset", {
                                    "ignore-parent-height": !p
                                });
                            return Object(_.jsx)(P.a, C(C({}, b), {}, {
                                assetQuality: r,
                                useDynamicAsset: d,
                                hideControls: o,
                                useWindowMask: c,
                                dynamicAssetParamPath: l,
                                convertGifToVideo: !0,
                                className: g,
                                imageClassName: "text-and-asset-image"
                            }))
                        })), Object(l.default)(Object(r.a)(e), "getFullParagraphComponentStyle", (function() {
                            var t = e.props,
                                i = t.leftSizeWidth,
                                a = t.nestedBoardItems,
                                s = null !== a && void 0 !== a ? a : {},
                                n = s.fullParagraphMarginTop,
                                r = s.fullParagraphMarginBottom,
                                d = s.fullParagraphDistanceFromTop,
                                o = s.parallaxAsset,
                                c = {
                                    width: i,
                                    marginTop: n,
                                    marginBottom: r
                                };
                            return e.assetExist(o) && (c = C(C({}, c), {}, {
                                top: d
                            })), c
                        })), Object(l.default)(Object(r.a)(e), "getImageWrapperStyle", (function() {
                            var t = e.props,
                                i = {
                                    width: t.rightSizeWidth
                                };
                            return t.allowImageOverflow && (i = C(C({}, i), {}, {
                                overflow: "visible"
                            })), i
                        })), Object(l.default)(Object(r.a)(e), "openLiveBoardExperience", (function() {
                            var t = e.props,
                                i = t.nestedBoardItems,
                                a = null !== i && void 0 !== i ? i : {};
                            (0, t.openLiveBoard)({
                                boardBannerText: a.boardBannerText,
                                embeddedBoardTitle: a.embeddedBoardTitle,
                                addSecondLiveBoardSignUpButton: a.addSecondLiveBoardSignUpButton,
                                liveBoardToolTipText: a.liveBoardToolTipText
                            })
                        })), Object(l.default)(Object(r.a)(e), "imageClicked", (function(t) {
                            Object(T.trackEvent)(A.LIVE_BOARD_PARALLAX_ASSET_CLICKED, {
                                kind: void 0 !== t ? t : null
                            }), e.openLiveBoardExperience()
                        })), Object(l.default)(Object(r.a)(e), "getReplaceTextProps", (function() {
                            var t = e.props,
                                i = t.bulletsConfig,
                                a = t.iconsConfig,
                                s = t.titleSize,
                                n = t.textSize,
                                r = t.spaceFromParagraph,
                                d = t.withDynamicParagraphTitle,
                                o = t.withDynamicParagraphSubtitle,
                                c = t.topicBottomMargin,
                                l = t.buttonTopMargin,
                                p = {};
                            return i && (p.bulletsConfig = i), a && (p.iconsConfig = a), s && (p.titleSize = s), n && (p.textSize = n), r && (p.spaceFromParagraph = r), d && (p.withDynamicParagraphTitle = d), o && (p.withDynamicParagraphSubtitle = o), c && (p.topicBottomMargin = c), l && (p.buttonTopMargin = l), p
                        })), e
                    }
                    return Object(n.default)(i, [{
                        key: "getLeftSpaceStyle",
                        value: function() {
                            var e = this.props.background,
                                t = e.color;
                            return e.width ? C({}, S.q[t]) : {}
                        }
                    }, {
                        key: "getBackgroundStyle",
                        value: function() {
                            var e = this.props,
                                t = e.background,
                                i = e.swapTextAndAssetPosition,
                                a = e.spaceBetweenTextAndAsset,
                                s = t.width,
                                n = t.color,
                                r = t.verticalPadding,
                                d = r ? {
                                    paddingBottom: r,
                                    paddingTop: r
                                } : {},
                                o = S.q[n];
                            if (!s || !o) return d;
                            var c = i ? "left" : "right";
                            return d = C(C({}, d), {}, {
                                background: "linear-gradient(to ".concat(c, ", ").concat(o.background, " ").concat(s, ", white 0)"),
                                color: o.color,
                                gap: a
                            })
                        }
                    }, {
                        key: "getContentStyle",
                        value: function() {
                            var e = this.props;
                            return C({
                                "--space-between-text-and-asset": e.spaceBetweenTextAndAsset,
                                "--mobile-space-between-text-and-asset": e.mobileSpaceBetweenTextAndAsset || 0
                            }, this.getBackgroundStyle())
                        }
                    }, {
                        key: "getSideBySideComponentStyle",
                        value: function() {
                            var e, t, i = this.props.background,
                                a = null === i || void 0 === i || null === (e = i.backgroundImage) || void 0 === e ? void 0 : e.src;
                            return a ? {
                                background: "url(".concat(a, ")"),
                                backgroundPosition: (null === i || void 0 === i || null === (t = i.backgroundImage) || void 0 === t ? void 0 : t.backgroundPosition) || "center",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover"
                            } : null
                        }
                    }, {
                        key: "getRightSpaceStyle",
                        value: function() {
                            var e = this.props.background,
                                t = e.width,
                                i = e.color,
                                a = S.q[i];
                            return a ? {
                                backgroundColor: t === N ? a.background : void 0
                            } : {}
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.props,
                                i = t.replaceTextComponent,
                                a = t.replaceTextComponentProps,
                                s = t.contentClassName,
                                n = t.fullParagraph,
                                r = t.asset,
                                d = t.swapTextAndAssetPosition,
                                o = t.mobileSwapTextAndAssetPosition,
                                c = t.background,
                                l = t.alignToLogo,
                                p = t.paragraphVerticalAlignment,
                                g = t.alignImageToScreenEdge,
                                u = t.hideParagraph,
                                x = t.nestedBoardItems,
                                y = null !== x && void 0 !== x ? x : {},
                                m = y.addLiveBoardTextAndAsset,
                                w = y.parallaxAsset,
                                h = y.gapBetweenAssets,
                                v = this.assetExist(w),
                                k = d ? this.getRightSpaceStyle() : this.getLeftSpaceStyle(),
                                S = this.getContentStyle(),
                                P = this.getSideBySideComponentStyle(),
                                T = d ? this.getLeftSpaceStyle() : this.getRightSpaceStyle(),
                                A = i || O.b,
                                B = c.width === N,
                                D = function(t, i) {
                                    return Object(_.jsx)("div", {
                                        className: f()("image-wrapper", null === r || void 0 === r ? void 0 : r.position, (null === r || void 0 === r ? void 0 : r.shadow) && "with-shadow", v && "inside-parallax"),
                                        onClick: m ? function() {
                                            return e.imageClicked(i)
                                        } : null,
                                        style: e.getImageWrapperStyle(),
                                        children: e.renderAsset(t)
                                    })
                                },
                                I = [r, w];
                            return Object(_.jsxs)("div", {
                                style: P,
                                className: "jsx-".concat(j.__hash) + " " + (f()("side-by-side-text-and-asset", {
                                    "align-image-to-screen-edge": g,
                                    "is-swap": d,
                                    "is-mobile-swap": o
                                }) || ""),
                                children: [Object(_.jsx)("div", {
                                    style: k,
                                    className: "jsx-".concat(j.__hash) + " left-space"
                                }), Object(_.jsxs)("div", {
                                    style: S,
                                    className: "jsx-".concat(j.__hash) + " " + (f()("side-by-side-content", p, s, {
                                        "is-swap": d,
                                        "is-mobile-swap": o,
                                        "is-full-width": B,
                                        "align-to-logo": !!l,
                                        "no-text-component": u,
                                        "add-live-board-experience": m
                                    }) || ""),
                                    children: [!u && Object(_.jsx)("div", {
                                        style: this.getFullParagraphComponentStyle(),
                                        className: "jsx-".concat(j.__hash) + " " + (f()("full-paragraph-component-wrapper", v && "sticky") || ""),
                                        children: Object(_.jsx)(A, C(C(C(C({}, a), n), this.getReplaceTextProps()), {}, {
                                            openLiveBoardExperience: m ? this.openLiveBoardExperience : null,
                                            className: "jsx-".concat(j.__hash) + " " + (n && null != n.className && n.className || a && null != a.className && a.className || "")
                                        }))
                                    }), v ? Object(_.jsx)("div", {
                                        style: {
                                            gap: h
                                        },
                                        className: "jsx-".concat(j.__hash) + " parallax-wrapper",
                                        children: I.map((function(e, t) {
                                            return D(e, t)
                                        }))
                                    }) : D(r)]
                                }), Object(_.jsx)("div", {
                                    style: T,
                                    className: "jsx-".concat(j.__hash) + " right-space"
                                }), Object(_.jsx)(b.a, {
                                    id: j.__hash,
                                    children: j
                                })]
                            })
                        }
                    }]), i
                }(g.PureComponent);
            I.defaultProps = k.a
        },
        q1nZ: function(e, t, i) {
            "use strict";
            var a = i("/Vdx"),
                s = i("D1Kn");
            t.a = {
                contentClassName: "",
                swapTextAndAssetPosition: !1,
                leftSizeWidth: null,
                rightSizeWidth: null,
                background: {},
                fullParagraph: a.a,
                asset: {
                    position: "center",
                    fitToContainer: !0,
                    image: {
                        src: "https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/segment-layout-default-images/text-and-asset/board-with-dragged-column-in-circle.png"
                    }
                },
                assetQuality: s.AUTO,
                withDynamicParagraphTitle: !1,
                withDynamicParagraphSubtitle: !1
            }
        }
    }
]);
//# sourceMappingURL=2f764f6341dc29dcc8bbc48612f25acfb0f30aac.59129ac49bf71fa1a7a4.js.map