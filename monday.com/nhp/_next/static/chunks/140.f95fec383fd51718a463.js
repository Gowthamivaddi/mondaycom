(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [140, 212], {
        bvOt: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, "default", (function() {
                return v
            }));
            var a = r("cpVT"),
                o = r("H+61"),
                s = r("UlJF"),
                n = r("7LId"),
                i = r("VIvw"),
                c = r("iHvq"),
                l = r("MX0m"),
                p = r.n(l),
                d = r("q1tI"),
                u = r("bmYG"),
                x = r("Tc2L"),
                j = [".full-paragraph-component.jsx-1055366927{max-width:".concat("".concat(u.k, "px"), ";margin:auto;}"), ".full-paragraph-component.jsx-1055366927 .full-paragraph-wrapper.jsx-1055366927{max-width:1100px;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:".concat("0px ".concat(x.a), ";}")];
            j.__hash = "1055366927";
            var b = r("/Vdx"),
                m = r("VgqV"),
                w = r("nKUr");

            function f(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, a)
                }
                return r
            }

            function g(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? f(Object(r), !0).forEach((function(t) {
                        Object(a.default)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : f(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function h(e) {
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
                    var r, a = Object(c.default)(e);
                    if (t) {
                        var o = Object(c.default)(this).constructor;
                        r = Reflect.construct(a, arguments, o)
                    } else r = a.apply(this, arguments);
                    return Object(i.default)(this, r)
                }
            }
            var v = function(e) {
                Object(n.default)(r, e);
                var t = h(r);

                function r() {
                    return Object(o.default)(this, r), t.apply(this, arguments)
                }
                return Object(s.default)(r, [{
                    key: "render",
                    value: function() {
                        var e = this.props.maxWidth;
                        return Object(w.jsxs)("div", {
                            className: "jsx-".concat(j.__hash) + " full-paragraph-component",
                            children: [Object(w.jsx)("div", {
                                style: {
                                    maxWidth: e
                                },
                                className: "jsx-".concat(j.__hash) + " full-paragraph-wrapper",
                                children: Object(w.jsx)(x.b, g({}, this.props))
                            }), Object(w.jsx)(p.a, {
                                id: j.__hash,
                                children: j
                            })]
                        })
                    }
                }]), r
            }(d.PureComponent);
            v.defaultProps = g(g({}, b.a), {}, {
                paddingTop: "64px",
                paddingBottom: "64px",
                titleSize: m.c,
                textSize: m.c,
                maxWidth: "1100px"
            })
        },
        zURx: function(e, t, r) {
            "use strict";
            r.r(t);
            var a = r("cpVT"),
                o = r("dhJC"),
                s = r("MX0m"),
                n = r.n(s),
                i = r("hrmg"),
                c = r("q1tI"),
                l = r("TSYQ"),
                p = r.n(l),
                d = r("n1eY"),
                u = r("zaBJ"),
                x = r("87MR"),
                j = r("yAMK"),
                b = r("UK0n"),
                m = r("+tDp");

            function w(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, a)
                }
                return r
            }

            function f(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? w(Object(r), !0).forEach((function(t) {
                        Object(a.default)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : w(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var g = {
                    autoplay: {
                        shouldAutoPlay: !0,
                        interval: "10000"
                    },
                    reviews: [f(f({}, m.f[m.b]), {}, {
                        customerImage: {
                            src: "https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/reviews/oscar_image.png",
                            alt: "Oscar's customer image"
                        },
                        companyLogo: {
                            src: "https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/reviews/oscar_logo.svg",
                            alt: "Oscar logo"
                        }
                    }), f(f({}, m.f[m.d]), {}, {
                        customerImage: {
                            src: "https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/reviews/the_student_hotel_image.png",
                            alt: "The Student Hotel's customer image"
                        },
                        companyLogo: {
                            src: "https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/reviews/the_student_hotel_logo.svg",
                            alt: "The Student Hotel logo"
                        }
                    }), f(f({}, m.f[m.c]), {}, {
                        customerImage: {
                            src: "https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/reviews/telefonica_image.png",
                            alt: "Telefonica's customer image"
                        },
                        companyLogo: {
                            src: "https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/reviews/telefonica_logo.svg",
                            alt: "Telefonica logo"
                        }
                    }), f(f({}, m.f[m.e]), {}, {
                        customerImage: {
                            src: "https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/reviews/zippo_image.png",
                            alt: "Zippo's customer image"
                        },
                        companyLogo: {
                            src: "https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/reviews/zippo.svg",
                            alt: "Zippo logo"
                        }
                    }), f(f({}, m.f[m.a]), {}, {
                        customerImage: {
                            src: "https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/reviews/nissan_image.png",
                            alt: "Nissan's customer image"
                        },
                        companyLogo: {}
                    })]
                },
                h = r("xwfA"),
                v = r("/Z+I"),
                O = "44px",
                y = 200,
                _ = "".concat(4.5, "px"),
                k = "".concat(2, "px"),
                P = "".concat(11, "px"),
                S = "".concat(16, "px"),
                N = "linear-gradient(180deg, ".concat(h.a[v.WORK_OS_IRIS_COLOR_NAME], " 0%, ").concat(h.a[v.WORK_OS_IRIS_COLOR_NAME], " 25%, ").concat(h.a[v.DARK_WORK_OS_IRIS_COLOR_NAME], " 100%)"),
                R = [".reviews-carousel.jsx-2544786094 .reviews-carousel-content-and-indicators.jsx-2544786094{margin-right:".concat("".concat(120, "px"), ";}"), ".reviews-carousel.jsx-2544786094 .reviews-carousel-content-and-indicators.has-customer-image.jsx-2544786094{margin-bottom:".concat("".concat(100, "px"), ";}"), ".reviews-carousel.jsx-2544786094 .reviews-carousel-content-and-indicators.jsx-2544786094 .reviews-carousel-content.jsx-2544786094{width:100%;height:320px;background:".concat(N, ";border-radius:16px;color:white;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:").concat(O, ";position:relative;}"), ".reviews-carousel.jsx-2544786094 .reviews-carousel-content-and-indicators.jsx-2544786094 .reviews-carousel-content.jsx-2544786094 .quote-wrapper.jsx-2544786094{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;font-size:1.3125rem;-webkit-flex:1;-ms-flex:1;flex:1;opacity:0;-webkit-transition:all 0.3s;transition:all 0.3s;}", ".reviews-carousel.jsx-2544786094 .reviews-carousel-content-and-indicators.jsx-2544786094 .reviews-carousel-content.jsx-2544786094 .quote-wrapper.jsx-2544786094:not(:first-child){position:absolute;top:0;left:0;padding:".concat(O, ";height:100%;}"), ".reviews-carousel.jsx-2544786094 .reviews-carousel-content-and-indicators.jsx-2544786094 .reviews-carousel-content.jsx-2544786094 .quote-wrapper.selected.jsx-2544786094{opacity:1;}", ".reviews-carousel.jsx-2544786094 .reviews-carousel-content-and-indicators.jsx-2544786094 .reviews-carousel-content.jsx-2544786094 .quote-wrapper.jsx-2544786094 .content-wrapper.jsx-2544786094{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-transition:all 0.3s;transition:all 0.3s;}", ".reviews-carousel.jsx-2544786094 .reviews-carousel-content-and-indicators.jsx-2544786094 .reviews-carousel-content.jsx-2544786094 .quote-wrapper.jsx-2544786094 .content-wrapper.jsx-2544786094 .quote.jsx-2544786094{position:relative;margin:auto 0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;text-align:left;-webkit-letter-spacing:-0.5px;-moz-letter-spacing:-0.5px;-ms-letter-spacing:-0.5px;letter-spacing:-0.5px;line-height:36px;}", ".reviews-carousel.jsx-2544786094 .reviews-carousel-content-and-indicators.jsx-2544786094 .reviews-carousel-content.jsx-2544786094 .quote-wrapper.jsx-2544786094 .content-wrapper.jsx-2544786094 .quote.jsx-2544786094 .quotationMark.jsx-2544786094{position:absolute;top:0;left:-8px;margin-right:8px;}", ".reviews-carousel.jsx-2544786094 .reviews-carousel-content-and-indicators.jsx-2544786094 .reviews-carousel-content.jsx-2544786094 .quote-wrapper.jsx-2544786094 .content-wrapper.jsx-2544786094 .footer.jsx-2544786094 .name-and-job-description.jsx-2544786094{font-size:0.875rem;}", ".reviews-carousel.jsx-2544786094 .reviews-carousel-content-and-indicators.jsx-2544786094 .reviews-carousel-content.jsx-2544786094 .quote-wrapper.jsx-2544786094 .content-wrapper.jsx-2544786094 .footer.jsx-2544786094 .logo.jsx-2544786094{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding-top:16px;height:38px;}", ".reviews-carousel.jsx-2544786094 .reviews-carousel-content-and-indicators.jsx-2544786094 .reviews-carousel-content.jsx-2544786094 .quote-wrapper.jsx-2544786094 .content-wrapper.jsx-2544786094 .footer.jsx-2544786094 .logo.jsx-2544786094 img{max-height:38px;}", ".reviews-carousel.jsx-2544786094 .reviews-carousel-content-and-indicators.jsx-2544786094 .reviews-carousel-content.jsx-2544786094 .quote-wrapper.jsx-2544786094 .content-wrapper.jsx-2544786094 .footer.jsx-2544786094 .logo.hidden.jsx-2544786094{visibility:hidden;}", ".reviews-carousel.jsx-2544786094 .reviews-carousel-content-and-indicators.jsx-2544786094 .indicators.jsx-2544786094{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-top:24px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:".concat(S, ";}"), ".reviews-carousel.jsx-2544786094 .reviews-carousel-content-and-indicators.jsx-2544786094 .indicators.jsx-2544786094 .indicator-wrapper.jsx-2544786094{padding:".concat(_, ";cursor:pointer;-webkit-transition:padding 0.2s ease-in-out;transition:padding 0.2s ease-in-out;}"), ".reviews-carousel.jsx-2544786094 .reviews-carousel-content-and-indicators.jsx-2544786094 .indicators.jsx-2544786094 .indicator-wrapper.jsx-2544786094 .indicator.jsx-2544786094{border:1px solid;width:".concat(P, ";height:").concat(P, ";border-radius:8px;-webkit-transition:width 0.2s ease-in-out,height 0.2s ease-in-out;transition:width 0.2s ease-in-out,height 0.2s ease-in-out;}"), ".reviews-carousel.jsx-2544786094 .reviews-carousel-content-and-indicators.jsx-2544786094 .indicators.jsx-2544786094 .indicator-wrapper.jsx-2544786094 .indicator.selected.jsx-2544786094{border:".concat("1px solid ".concat(h.a[v.WORK_OS_IRIS_COLOR_NAME]), ";background:", h.a[v.WORK_OS_IRIS_COLOR_NAME], ";}"), ".reviews-carousel.jsx-2544786094 .reviews-carousel-content-and-indicators.jsx-2544786094 .indicators.jsx-2544786094 .indicator-wrapper.jsx-2544786094:hover{padding:".concat(k, ";}"), ".reviews-carousel.jsx-2544786094 .reviews-carousel-content-and-indicators.jsx-2544786094 .indicators.jsx-2544786094 .indicator-wrapper.jsx-2544786094:hover .indicator.jsx-2544786094{width:".concat(S, ";height:").concat(S, ";}"), ".reviews-carousel.jsx-2544786094 .reviews-carousel-content-and-indicators.jsx-2544786094 .indicators.jsx-2544786094 .indicator-wrapper.jsx-2544786094:hover.jsx-2544786094:focus{outline:none;}", ".reviews-carousel.jsx-2544786094 .reviews-carousel-asset.jsx-2544786094{position:absolute;bottom:0;right:0;width:".concat("".concat(y, "px"), ";height:", "".concat(y, "px"), ";border-radius:16px;-webkit-transition:opacity 0.2s ease-in-out;transition:opacity 0.2s ease-in-out;}"), ".reviews-carousel.jsx-2544786094 .reviews-carousel-asset.jsx-2544786094 img{max-width:".concat("".concat(y, "px"), ";max-height:", "".concat(y, "px"), ";height:auto;width:auto;margin:0 auto;border-radius:16px;}"), ".reviews-carousel.jsx-2544786094 .reviews-carousel-asset.hidden.jsx-2544786094{visibility:hidden;}"];
            R.__hash = "2544786094";
            var D = r("nKUr");

            function q(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, a)
                }
                return r
            }

            function I(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? q(Object(r), !0).forEach((function(t) {
                        Object(a.default)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : q(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var E = "indicator-wrapper",
                L = function(e) {
                    var t, r = Object(c.useState)(0),
                        a = r[0],
                        o = r[1],
                        s = e.autoplay,
                        i = s.shouldAutoPlay,
                        l = s.interval,
                        m = e.reviews,
                        w = e.removeQuoteSigns;
                    Object(d.a)((function() {
                        o((a + 1) % m.length)
                    }), i ? Number(l) || 1e4 : null, [a]);
                    var f = function(e, t) {
                            var r, a;
                            null === t || void 0 === t || null === (r = t.target) || void 0 === r || null === (a = r.closest(".".concat(E))) || void 0 === a || a.blur(), o(e), Object(x.trackEvent)(j.CAROUSEL_PAGE_CLICKED, {
                                info1: e
                            })
                        },
                        g = function(e) {
                            var t;
                            return null === e || void 0 === e || null === (t = e.customerImage) || void 0 === t ? void 0 : t.src
                        },
                        h = function(e) {
                            var t;
                            return null === e || void 0 === e || null === (t = e.companyLogo) || void 0 === t ? void 0 : t.src
                        },
                        v = Object(c.useMemo)((function() {
                            return null === m || void 0 === m ? void 0 : m.reduce((function(e, t) {
                                return e || g(t)
                            }), !1)
                        }), [m]);
                    return Object(D.jsxs)("div", {
                        className: "jsx-".concat(R.__hash) + " reviews-carousel",
                        children: [Object(D.jsxs)("div", {
                            className: "jsx-".concat(R.__hash) + " " + (p()("reviews-carousel-content-and-indicators", {
                                "has-customer-image": v
                            }) || ""),
                            children: [Object(D.jsx)("div", {
                                className: "jsx-".concat(R.__hash) + " reviews-carousel-content",
                                children: m.map((function(e, t) {
                                    var r = e.quote,
                                        o = void 0 === r ? "" : r,
                                        s = e.name,
                                        n = void 0 === s ? "" : s,
                                        i = e.jobDescription,
                                        c = void 0 === i ? "" : i,
                                        l = e.companyLogo;
                                    return Object(D.jsx)("div", {
                                        className: "jsx-".concat(R.__hash) + " " + (p()("quote-wrapper", {
                                            selected: t === a
                                        }) || ""),
                                        children: Object(D.jsxs)("div", {
                                            className: "jsx-".concat(R.__hash) + " content-wrapper",
                                            children: [Object(D.jsxs)("blockquote", {
                                                id: "quote-".concat(t),
                                                className: "jsx-".concat(R.__hash) + " quote",
                                                children: [!w && Object(D.jsx)("span", {
                                                    className: "jsx-".concat(R.__hash) + " quotationMark",
                                                    children: "\u201c"
                                                }), Object(D.jsx)("span", {
                                                    className: "jsx-".concat(R.__hash) + " quoteText",
                                                    children: "".concat(w ? o : "".concat(o, "\u201d"))
                                                })]
                                            }), Object(D.jsxs)("div", {
                                                className: "jsx-".concat(R.__hash) + " footer",
                                                children: [Object(D.jsx)("div", {
                                                    id: "reviewer-".concat(t, "-name-and-job-description"),
                                                    className: "jsx-".concat(R.__hash) + " name-and-job-description",
                                                    children: "".concat(n, " | ").concat(c)
                                                }), Object(D.jsx)("div", {
                                                    className: "jsx-".concat(R.__hash) + " " + (p()("logo", {
                                                        hidden: !h(e)
                                                    }) || ""),
                                                    children: h(e) && Object(D.jsx)(u.a, I(I({}, l), {}, {
                                                        height: "38px"
                                                    }))
                                                })]
                                            })]
                                        })
                                    }, t)
                                }))
                            }), Object(D.jsx)("div", {
                                className: "jsx-".concat(R.__hash) + " indicators",
                                children: m.map((function(e, t) {
                                    return Object(D.jsx)("div", {
                                        onClick: function(e) {
                                            return f(t, e)
                                        },
                                        onKeyDown: Object(b.a)((function() {
                                            return f(t)
                                        })),
                                        "aria-label": "review".concat(t + 1),
                                        "aria-describedby": "reviewer-".concat(t, "-name-and-job-description quote-").concat(t),
                                        "aria-current": t === a,
                                        role: "button",
                                        tabIndex: 0,
                                        className: "jsx-".concat(R.__hash) + " " + E,
                                        children: Object(D.jsx)("div", {
                                            className: "jsx-".concat(R.__hash) + " " + (p()("indicator", {
                                                selected: t === a
                                            }) || "")
                                        })
                                    }, t)
                                }))
                            })]
                        }), Object(D.jsx)("div", {
                            className: "jsx-".concat(R.__hash) + " " + (p()("reviews-carousel-asset", {
                                hidden: !g(null === m || void 0 === m ? void 0 : m[a])
                            }) || ""),
                            children: g(null === m || void 0 === m ? void 0 : m[a]) && Object(D.jsx)(u.a, I({}, null === m || void 0 === m || null === (t = m[a]) || void 0 === t ? void 0 : t.customerImage))
                        }), Object(D.jsx)(n.a, {
                            id: R.__hash,
                            children: R
                        })]
                    })
                },
                A = L;
            L.defaultProps = g;
            var C = r("9hre"),
                M = r("VgqV"),
                H = r("/Vdx");

            function K(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, a)
                }
                return r
            }

            function z(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? K(Object(r), !0).forEach((function(t) {
                        Object(a.default)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : K(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var G = {
                    titleSize: M.f,
                    alignToLogo: !0,
                    fullParagraph: z(z({}, H.a), {}, {
                        topic: "",
                        title: "<light>Hear<br>it from our<br></light><b>customers</b>",
                        body: "Real people, real reviews"
                    }),
                    carousel: z({}, g),
                    mobileMarginBetweenParagraphAndCarousel: "32px"
                },
                T = r("bmYG"),
                V = [".paragraph-and-carousel-reviews-component.jsx-1339824800{max-width:".concat(T.k + "px", ";margin:auto;}"), ".paragraph-and-carousel-reviews-component.jsx-1339824800 .full-paragraph-component-wrapper{padding-bottom:100px;}", ".paragraph-and-carousel-reviews-component.jsx-1339824800 .image-wrapper{-webkit-filter:drop-shadow(-16px 23px 56px rgba(29,140,242,0.3));filter:drop-shadow(-16px 23px 56px rgba(29,140,242,0.3));}"];
            V.__hash = "1339824800";
            var W = r("bvOt"),
                Q = r("3D78"),
                U = 113,
                J = [".paragraph-and-carousel-reviews-mobile-component .carousel-wrapper{margin-top:var(--margin-between-paragraph-and-carousel);}", ".paragraph-and-carousel-reviews-mobile-component .carousel-wrapper .review-carousel-item{padding:0 20px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".paragraph-and-carousel-reviews-mobile-component .carousel-wrapper .review-carousel-item .customer-image-wrapper{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:absolute;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}", ".paragraph-and-carousel-reviews-mobile-component .carousel-wrapper .review-carousel-item .customer-image-wrapper .customer-image{width:".concat("".concat(U, "px"), ";border-radius:", "".concat(56.5, "px"), ";}"), ".paragraph-and-carousel-reviews-mobile-component .carousel-wrapper .review-carousel-item .review-card{color:white;margin-top:".concat("".concat(45.2, "px"), ";padding:", "".concat(90.4, "px"), " 12px 0 12px;background-color:", h.a[v.WORK_OS_IRIS_COLOR_NAME], ";border-radius:8px;text-align:center;}"), ".paragraph-and-carousel-reviews-mobile-component .carousel-wrapper .review-carousel-item .review-card .name-and-job-description{font-size:0.875rem;font-weight:500;min-height:64px;}", ".paragraph-and-carousel-reviews-mobile-component .carousel-wrapper .review-carousel-item .review-card .quote{font-size:0.8125rem;padding:16px 0;min-height:112px;}", ".paragraph-and-carousel-reviews-mobile-component .carousel-wrapper .review-carousel-item .review-card .company-logo-wrapper{padding:0 0 24px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;min-height:96px;}", ".paragraph-and-carousel-reviews-mobile-component .carousel-wrapper .review-carousel-item .review-card .company-logo-wrapper .company-logo{width:92px;}"];

            function B(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, a)
                }
                return r
            }

            function Y(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? B(Object(r), !0).forEach((function(t) {
                        Object(a.default)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : B(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            J.__hash = "2632462519";

            function Z(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, a)
                }
                return r
            }

            function X(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Z(Object(r), !0).forEach((function(t) {
                        Object(a.default)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Z(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var F = Object(C.a)((function(e) {
                var t = e.carousel,
                    r = e.removeQuoteSigns,
                    a = Object(o.default)(e, ["carousel", "removeQuoteSigns"]);
                return Object(D.jsxs)("div", {
                    className: "jsx-".concat(V.__hash) + " paragraph-and-carousel-reviews-component",
                    children: [Object(D.jsx)(i.default, X(X({}, a), {}, {
                        replaceAssetComponent: A,
                        replaceAssetComponentProps: X(X({}, t), {}, {
                            removeQuoteSigns: r
                        })
                    })), Object(D.jsx)(n.a, {
                        id: V.__hash,
                        children: V
                    })]
                })
            }), (function(e) {
                var t = e.carousel,
                    r = e.fullParagraph,
                    a = e.mobileMarginBetweenParagraphAndCarousel,
                    o = e.removeQuoteSigns,
                    s = {
                        items: t.reviews,
                        itemRenderer: function(e) {
                            var t = e.customerImage,
                                r = e.name,
                                a = e.jobDescription,
                                s = e.quote,
                                n = e.companyLogo;
                            return Object(D.jsxs)("div", {
                                className: "review-carousel-item",
                                children: [Object(D.jsx)("div", {
                                    className: "customer-image-wrapper",
                                    children: (null === t || void 0 === t ? void 0 : t.src) && Object(D.jsx)(u.a, {
                                        className: "customer-image",
                                        src: null === t || void 0 === t ? void 0 : t.src,
                                        alt: null === t || void 0 === t ? void 0 : t.alt
                                    })
                                }), Object(D.jsxs)("div", {
                                    className: "review-card",
                                    children: [Object(D.jsxs)("div", {
                                        className: "name-and-job-description",
                                        children: [r, " | ", a]
                                    }), Object(D.jsx)("div", {
                                        className: "quote",
                                        children: o ? s : "\u201c".concat(s, "\u201c")
                                    }), Object(D.jsx)("div", {
                                        className: "company-logo-wrapper",
                                        children: (null === n || void 0 === n ? void 0 : n.src) && Object(D.jsx)(u.a, {
                                            className: "company-logo",
                                            src: null === n || void 0 === n ? void 0 : n.src,
                                            alt: null === n || void 0 === n ? void 0 : n.alt
                                        })
                                    })]
                                })]
                            })
                        },
                        defaultIndex: 0,
                        infinite: !1,
                        slidesToShow: 1,
                        dots: !0,
                        autoplaySpeed: 5e3,
                        centerPadding: "15%"
                    };
                return Object(D.jsxs)("div", {
                    style: {
                        "--margin-between-paragraph-and-carousel": a
                    },
                    className: "jsx-".concat(J.__hash) + " paragraph-and-carousel-reviews-mobile-component",
                    children: [Object(D.jsx)(W.default, Y({}, r)), Object(D.jsx)("div", {
                        className: "jsx-".concat(J.__hash) + " carousel-wrapper",
                        children: Object(D.jsx)(Q.a, Y({}, s))
                    }), Object(D.jsx)(n.a, {
                        id: J.__hash,
                        children: J
                    })]
                })
            }));
            F.defaultProps = G;
            t.default = F
        }
    }
]);
//# sourceMappingURL=140.f95fec383fd51718a463.js.map