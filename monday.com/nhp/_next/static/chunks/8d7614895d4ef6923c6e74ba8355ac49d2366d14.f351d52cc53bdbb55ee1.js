(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [26], {
        "L3+E": function(t, e) {
            t.exports = {
                FIELD_TYPES: {
                    GALLERY: "gallery",
                    CONSTANT: "constant",
                    COMBO: "combo",
                    BOOLEAN: "boolean",
                    SEGMENTS: "segments",
                    TEXT: "text",
                    RICH_TEXT: "rich_text",
                    DROPDOWN: "dropdown",
                    NESTED: "nested",
                    COLOR_PICKER: "colorPicker",
                    VIDEO_PICKER: "videoPicker",
                    CLOUDINARY_VIDEO_PICKER: "cloudinaryVideoPicker",
                    MULTIPLE_TEXTS: "multipleTexts",
                    MULTIPLE_NESTED: "multipleNested",
                    DYNAMIC: "dynamic",
                    HOMEPAGE_URL: "homepageUrl",
                    TAGS: "tags",
                    CATEGORIES: "categories",
                    CLUSTERS: "clusters",
                    SUB_CLUSTERS: "sub_clusters",
                    FULLSTORY_RECORDING_FREQUENCY: "fullstory_recording_frequency",
                    LOCALES: "locales",
                    CONDITIONAL_NESTED: "conditionalNested",
                    AUTOCOMPLETE: "autocomplete",
                    SOLUTION: "solution",
                    CALENDAR: "calendar",
                    PRODUCTS: "products"
                }
            }
        },
        MCHi: function(t, e, o) {
            "use strict";
            var r = o("L3+E"),
                n = o("icyP");
            e.a = {
                theme: {
                    type: r.FIELD_TYPES.COLOR_PICKER,
                    label: "Theme",
                    possibleColors: n.a
                }
            }
        },
        cpGi: function(t, e, o) {
            "use strict";
            var r = o("q1tI"),
                n = o.n(r);

            function i(t, e) {
                for (var o = 0; o < e.length; o++) {
                    var r = e[o];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }

            function l(t, e, o) {
                return e in t ? Object.defineProperty(t, e, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = o, t
            }

            function a() {
                return (a = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var o = arguments[e];
                        for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (t[r] = o[r])
                    }
                    return t
                }).apply(this, arguments)
            }

            function p(t, e) {
                var o = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), o.push.apply(o, r)
                }
                return o
            }

            function s(t) {
                return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }

            function c(t, e) {
                return (c = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function d(t, e) {
                return !e || "object" !== typeof e && "function" !== typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function f(t) {
                return function() {
                    return t
                }
            }
            var u = function() {};
            u.thatReturns = f, u.thatReturnsFalse = f(!1), u.thatReturnsTrue = f(!0), u.thatReturnsNull = f(null), u.thatReturnsThis = function() {
                return this
            }, u.thatReturnsArgument = function(t) {
                return t
            };
            var b = u;
            var h = function(t, e, o, r, n, i, l, a) {
                    if (!t) {
                        var p;
                        if (void 0 === e) p = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
                        else {
                            var s = [o, r, n, i, l, a],
                                c = 0;
                            (p = new Error(e.replace(/%s/g, (function() {
                                return s[c++]
                            })))).name = "Invariant Violation"
                        }
                        throw p.framesToPop = 1, p
                    }
                },
                _ = Object.getOwnPropertySymbols,
                m = Object.prototype.hasOwnProperty,
                g = Object.prototype.propertyIsEnumerable;

            function y(t) {
                if (null === t || void 0 === t) throw new TypeError("Object.assign cannot be called with null or undefined");
                return Object(t)
            }(function() {
                try {
                    if (!Object.assign) return !1;
                    var t = new String("abc");
                    if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0]) return !1;
                    for (var e = {}, o = 0; o < 10; o++) e["_" + String.fromCharCode(o)] = o;
                    if ("0123456789" !== Object.getOwnPropertyNames(e).map((function(t) {
                            return e[t]
                        })).join("")) return !1;
                    var r = {};
                    return "abcdefghijklmnopqrst".split("").forEach((function(t) {
                        r[t] = t
                    })), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
                } catch (n) {
                    return !1
                }
            })() && Object.assign;
            var v = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
            var E = function(t, e) {
                    return t(e = {
                        exports: {}
                    }, e.exports), e.exports
                }((function(t) {
                    t.exports = function() {
                        function t(t, e, o, r, n, i) {
                            i !== v && h(!1, "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")
                        }

                        function e() {
                            return t
                        }
                        t.isRequired = t;
                        var o = {
                            array: t,
                            bool: t,
                            func: t,
                            number: t,
                            object: t,
                            string: t,
                            symbol: t,
                            any: t,
                            arrayOf: e,
                            element: t,
                            instanceOf: e,
                            node: t,
                            objectOf: e,
                            oneOf: e,
                            oneOfType: e,
                            shape: e,
                            exact: e
                        };
                        return o.checkPropTypes = b, o.PropTypes = o, o
                    }()
                })),
                w = {
                    HIDE: "__react_tooltip_hide_event",
                    REBUILD: "__react_tooltip_rebuild_event",
                    SHOW: "__react_tooltip_show_event"
                },
                T = function(t, e) {
                    var o;
                    "function" === typeof window.CustomEvent ? o = new window.CustomEvent(t, {
                        detail: e
                    }) : ((o = document.createEvent("Event")).initEvent(t, !1, !0), o.detail = e), window.dispatchEvent(o)
                };
            var O = function(t, e) {
                    var o = this.state.show,
                        r = this.props.id,
                        n = this.isCapture(e.currentTarget),
                        i = e.currentTarget.getAttribute("currentItem");
                    n || e.stopPropagation(), o && "true" === i ? t || this.hideTooltip(e) : (e.currentTarget.setAttribute("currentItem", "true"), x(e.currentTarget, this.getTargetArray(r)), this.showTooltip(e))
                },
                x = function(t, e) {
                    for (var o = 0; o < e.length; o++) t !== e[o] ? e[o].setAttribute("currentItem", "false") : e[o].setAttribute("currentItem", "true")
                },
                L = {
                    id: "9b69f92e-d3fe-498b-b1b4-c5e63a51b0cf",
                    set: function(t, e, o) {
                        this.id in t ? t[this.id][e] = o : Object.defineProperty(t, this.id, {
                            configurable: !0,
                            value: l({}, e, o)
                        })
                    },
                    get: function(t, e) {
                        var o = t[this.id];
                        if (void 0 !== o) return o[e]
                    }
                };
            var S = function(t, e, o) {
                    var r = e.respectEffect,
                        n = void 0 !== r && r,
                        i = e.customEvent,
                        l = void 0 !== i && i,
                        a = this.props.id,
                        p = o.target.getAttribute("data-tip") || null,
                        s = o.target.getAttribute("data-for") || null,
                        c = o.target;
                    if (!this.isCustomEvent(c) || l) {
                        var d = null == a && null == s || s === a;
                        if (null != p && (!n || "float" === this.getEffect(c)) && d) {
                            var f = function(t) {
                                var e = {};
                                for (var o in t) "function" === typeof t[o] ? e[o] = t[o].bind(t) : e[o] = t[o];
                                return e
                            }(o);
                            f.currentTarget = c, t(f)
                        }
                    }
                },
                C = function(t, e) {
                    var o = {};
                    return t.forEach((function(t) {
                        var r = t.getAttribute(e);
                        r && r.split(" ").forEach((function(t) {
                            return o[t] = !0
                        }))
                    })), o
                },
                P = function() {
                    return document.getElementsByTagName("body")[0]
                };

            function A(t, e, o, r, n, i, l) {
                for (var a = D(o), p = a.width, s = a.height, c = D(e), d = c.width, f = c.height, u = B(t, e, i), b = u.mouseX, h = u.mouseY, _ = j(i, d, f, p, s), m = N(l), g = m.extraOffset_X, y = m.extraOffset_Y, v = window.innerWidth, E = window.innerHeight, w = H(o), T = w.parentTop, O = w.parentLeft, x = function(t) {
                        var e = _[t].l;
                        return b + e + g
                    }, L = function(t) {
                        var e = _[t].t;
                        return h + e + y
                    }, S = function(t) {
                        return function(t) {
                            var e = _[t].r;
                            return b + e + g
                        }(t) > v
                    }, C = function(t) {
                        return function(t) {
                            var e = _[t].b;
                            return h + e + y
                        }(t) > E
                    }, P = function(t) {
                        return function(t) {
                            return x(t) < 0
                        }(t) || S(t) || function(t) {
                            return L(t) < 0
                        }(t) || C(t)
                    }, A = function(t) {
                        return !P(t)
                    }, R = ["top", "bottom", "left", "right"], k = [], I = 0; I < 4; I++) {
                    var M = R[I];
                    A(M) && k.push(M)
                }
                var U, F = !1,
                    Y = n !== r;
                return A(n) && Y ? (F = !0, U = n) : k.length > 0 && Y && P(n) && P(r) && (F = !0, U = k[0]), F ? {
                    isNewState: !0,
                    newState: {
                        place: U
                    }
                } : {
                    isNewState: !1,
                    position: {
                        left: parseInt(x(r) - O, 10),
                        top: parseInt(L(r) - T, 10)
                    }
                }
            }
            var R, k, I, D = function(t) {
                    var e = t.getBoundingClientRect(),
                        o = e.height,
                        r = e.width;
                    return {
                        height: parseInt(o, 10),
                        width: parseInt(r, 10)
                    }
                },
                B = function(t, e, o) {
                    var r = e.getBoundingClientRect(),
                        n = r.top,
                        i = r.left,
                        l = D(e),
                        a = l.width,
                        p = l.height;
                    return "float" === o ? {
                        mouseX: t.clientX,
                        mouseY: t.clientY
                    } : {
                        mouseX: i + a / 2,
                        mouseY: n + p / 2
                    }
                },
                j = function(t, e, o, r, n) {
                    var i, l, a, p;
                    return "float" === t ? (i = {
                        l: -r / 2,
                        r: r / 2,
                        t: -(n + 3 + 2),
                        b: -3
                    }, a = {
                        l: -r / 2,
                        r: r / 2,
                        t: 15,
                        b: n + 3 + 2 + 12
                    }, p = {
                        l: -(r + 3 + 2),
                        r: -3,
                        t: -n / 2,
                        b: n / 2
                    }, l = {
                        l: 3,
                        r: r + 3 + 2,
                        t: -n / 2,
                        b: n / 2
                    }) : "solid" === t && (i = {
                        l: -r / 2,
                        r: r / 2,
                        t: -(o / 2 + n + 2),
                        b: -o / 2
                    }, a = {
                        l: -r / 2,
                        r: r / 2,
                        t: o / 2,
                        b: o / 2 + n + 2
                    }, p = {
                        l: -(r + e / 2 + 2),
                        r: -e / 2,
                        t: -n / 2,
                        b: n / 2
                    }, l = {
                        l: e / 2,
                        r: r + e / 2 + 2,
                        t: -n / 2,
                        b: n / 2
                    }), {
                        top: i,
                        bottom: a,
                        left: p,
                        right: l
                    }
                },
                N = function(t) {
                    var e = 0,
                        o = 0;
                    for (var r in "[object String]" === Object.prototype.toString.apply(t) && (t = JSON.parse(t.toString().replace(/\'/g, '"'))), t) "top" === r ? o -= parseInt(t[r], 10) : "bottom" === r ? o += parseInt(t[r], 10) : "left" === r ? e -= parseInt(t[r], 10) : "right" === r && (e += parseInt(t[r], 10));
                    return {
                        extraOffset_X: e,
                        extraOffset_Y: o
                    }
                },
                H = function(t) {
                    for (var e = t; e && "none" === window.getComputedStyle(e).getPropertyValue("transform");) e = e.parentElement;
                    return {
                        parentTop: e && e.getBoundingClientRect().top || 0,
                        parentLeft: e && e.getBoundingClientRect().left || 0
                    }
                };

            function M(t, e, o, r) {
                if (e) return e;
                if (void 0 !== o && null !== o) return o;
                if (null === o) return null;
                var i = /<br\s*\/?>/;
                return r && "false" !== r && i.test(t) ? t.split(i).map((function(t, e) {
                    return n.a.createElement("span", {
                        key: e,
                        className: "multi-line"
                    }, t)
                })) : t
            }

            function U(t) {
                var e = {};
                return Object.keys(t).filter((function(t) {
                    return /(^aria-\w+$|^role$)/.test(t)
                })).forEach((function(o) {
                    e[o] = t[o]
                })), e
            }! function(t) {
                if (t && "undefined" !== typeof window) {
                    var e = document.createElement("style");
                    e.setAttribute("type", "text/css"), e.innerHTML = t, document.head.appendChild(e)
                }
            }('.__react_component_tooltip {\n  border-radius: 3px;\n  display: inline-block;\n  font-size: 13px;\n  left: -999em;\n  opacity: 0;\n  padding: 8px 21px;\n  position: fixed;\n  pointer-events: none;\n  transition: opacity 0.3s ease-out;\n  top: -999em;\n  visibility: hidden;\n  z-index: 999;\n}\n.__react_component_tooltip.allow_hover, .__react_component_tooltip.allow_click {\n  pointer-events: auto;\n}\n.__react_component_tooltip:before, .__react_component_tooltip:after {\n  content: "";\n  width: 0;\n  height: 0;\n  position: absolute;\n}\n.__react_component_tooltip.show {\n  opacity: 0.9;\n  margin-top: 0px;\n  margin-left: 0px;\n  visibility: visible;\n}\n.__react_component_tooltip.type-dark {\n  color: #fff;\n  background-color: #222;\n}\n.__react_component_tooltip.type-dark.place-top:after {\n  border-top-color: #222;\n  border-top-style: solid;\n  border-top-width: 6px;\n}\n.__react_component_tooltip.type-dark.place-bottom:after {\n  border-bottom-color: #222;\n  border-bottom-style: solid;\n  border-bottom-width: 6px;\n}\n.__react_component_tooltip.type-dark.place-left:after {\n  border-left-color: #222;\n  border-left-style: solid;\n  border-left-width: 6px;\n}\n.__react_component_tooltip.type-dark.place-right:after {\n  border-right-color: #222;\n  border-right-style: solid;\n  border-right-width: 6px;\n}\n.__react_component_tooltip.type-dark.border {\n  border: 1px solid #fff;\n}\n.__react_component_tooltip.type-dark.border.place-top:before {\n  border-top: 8px solid #fff;\n}\n.__react_component_tooltip.type-dark.border.place-bottom:before {\n  border-bottom: 8px solid #fff;\n}\n.__react_component_tooltip.type-dark.border.place-left:before {\n  border-left: 8px solid #fff;\n}\n.__react_component_tooltip.type-dark.border.place-right:before {\n  border-right: 8px solid #fff;\n}\n.__react_component_tooltip.type-success {\n  color: #fff;\n  background-color: #8DC572;\n}\n.__react_component_tooltip.type-success.place-top:after {\n  border-top-color: #8DC572;\n  border-top-style: solid;\n  border-top-width: 6px;\n}\n.__react_component_tooltip.type-success.place-bottom:after {\n  border-bottom-color: #8DC572;\n  border-bottom-style: solid;\n  border-bottom-width: 6px;\n}\n.__react_component_tooltip.type-success.place-left:after {\n  border-left-color: #8DC572;\n  border-left-style: solid;\n  border-left-width: 6px;\n}\n.__react_component_tooltip.type-success.place-right:after {\n  border-right-color: #8DC572;\n  border-right-style: solid;\n  border-right-width: 6px;\n}\n.__react_component_tooltip.type-success.border {\n  border: 1px solid #fff;\n}\n.__react_component_tooltip.type-success.border.place-top:before {\n  border-top: 8px solid #fff;\n}\n.__react_component_tooltip.type-success.border.place-bottom:before {\n  border-bottom: 8px solid #fff;\n}\n.__react_component_tooltip.type-success.border.place-left:before {\n  border-left: 8px solid #fff;\n}\n.__react_component_tooltip.type-success.border.place-right:before {\n  border-right: 8px solid #fff;\n}\n.__react_component_tooltip.type-warning {\n  color: #fff;\n  background-color: #F0AD4E;\n}\n.__react_component_tooltip.type-warning.place-top:after {\n  border-top-color: #F0AD4E;\n  border-top-style: solid;\n  border-top-width: 6px;\n}\n.__react_component_tooltip.type-warning.place-bottom:after {\n  border-bottom-color: #F0AD4E;\n  border-bottom-style: solid;\n  border-bottom-width: 6px;\n}\n.__react_component_tooltip.type-warning.place-left:after {\n  border-left-color: #F0AD4E;\n  border-left-style: solid;\n  border-left-width: 6px;\n}\n.__react_component_tooltip.type-warning.place-right:after {\n  border-right-color: #F0AD4E;\n  border-right-style: solid;\n  border-right-width: 6px;\n}\n.__react_component_tooltip.type-warning.border {\n  border: 1px solid #fff;\n}\n.__react_component_tooltip.type-warning.border.place-top:before {\n  border-top: 8px solid #fff;\n}\n.__react_component_tooltip.type-warning.border.place-bottom:before {\n  border-bottom: 8px solid #fff;\n}\n.__react_component_tooltip.type-warning.border.place-left:before {\n  border-left: 8px solid #fff;\n}\n.__react_component_tooltip.type-warning.border.place-right:before {\n  border-right: 8px solid #fff;\n}\n.__react_component_tooltip.type-error {\n  color: #fff;\n  background-color: #BE6464;\n}\n.__react_component_tooltip.type-error.place-top:after {\n  border-top-color: #BE6464;\n  border-top-style: solid;\n  border-top-width: 6px;\n}\n.__react_component_tooltip.type-error.place-bottom:after {\n  border-bottom-color: #BE6464;\n  border-bottom-style: solid;\n  border-bottom-width: 6px;\n}\n.__react_component_tooltip.type-error.place-left:after {\n  border-left-color: #BE6464;\n  border-left-style: solid;\n  border-left-width: 6px;\n}\n.__react_component_tooltip.type-error.place-right:after {\n  border-right-color: #BE6464;\n  border-right-style: solid;\n  border-right-width: 6px;\n}\n.__react_component_tooltip.type-error.border {\n  border: 1px solid #fff;\n}\n.__react_component_tooltip.type-error.border.place-top:before {\n  border-top: 8px solid #fff;\n}\n.__react_component_tooltip.type-error.border.place-bottom:before {\n  border-bottom: 8px solid #fff;\n}\n.__react_component_tooltip.type-error.border.place-left:before {\n  border-left: 8px solid #fff;\n}\n.__react_component_tooltip.type-error.border.place-right:before {\n  border-right: 8px solid #fff;\n}\n.__react_component_tooltip.type-info {\n  color: #fff;\n  background-color: #337AB7;\n}\n.__react_component_tooltip.type-info.place-top:after {\n  border-top-color: #337AB7;\n  border-top-style: solid;\n  border-top-width: 6px;\n}\n.__react_component_tooltip.type-info.place-bottom:after {\n  border-bottom-color: #337AB7;\n  border-bottom-style: solid;\n  border-bottom-width: 6px;\n}\n.__react_component_tooltip.type-info.place-left:after {\n  border-left-color: #337AB7;\n  border-left-style: solid;\n  border-left-width: 6px;\n}\n.__react_component_tooltip.type-info.place-right:after {\n  border-right-color: #337AB7;\n  border-right-style: solid;\n  border-right-width: 6px;\n}\n.__react_component_tooltip.type-info.border {\n  border: 1px solid #fff;\n}\n.__react_component_tooltip.type-info.border.place-top:before {\n  border-top: 8px solid #fff;\n}\n.__react_component_tooltip.type-info.border.place-bottom:before {\n  border-bottom: 8px solid #fff;\n}\n.__react_component_tooltip.type-info.border.place-left:before {\n  border-left: 8px solid #fff;\n}\n.__react_component_tooltip.type-info.border.place-right:before {\n  border-right: 8px solid #fff;\n}\n.__react_component_tooltip.type-light {\n  color: #222;\n  background-color: #fff;\n}\n.__react_component_tooltip.type-light.place-top:after {\n  border-top-color: #fff;\n  border-top-style: solid;\n  border-top-width: 6px;\n}\n.__react_component_tooltip.type-light.place-bottom:after {\n  border-bottom-color: #fff;\n  border-bottom-style: solid;\n  border-bottom-width: 6px;\n}\n.__react_component_tooltip.type-light.place-left:after {\n  border-left-color: #fff;\n  border-left-style: solid;\n  border-left-width: 6px;\n}\n.__react_component_tooltip.type-light.place-right:after {\n  border-right-color: #fff;\n  border-right-style: solid;\n  border-right-width: 6px;\n}\n.__react_component_tooltip.type-light.border {\n  border: 1px solid #222;\n}\n.__react_component_tooltip.type-light.border.place-top:before {\n  border-top: 8px solid #222;\n}\n.__react_component_tooltip.type-light.border.place-bottom:before {\n  border-bottom: 8px solid #222;\n}\n.__react_component_tooltip.type-light.border.place-left:before {\n  border-left: 8px solid #222;\n}\n.__react_component_tooltip.type-light.border.place-right:before {\n  border-right: 8px solid #222;\n}\n.__react_component_tooltip.place-top {\n  margin-top: -10px;\n}\n.__react_component_tooltip.place-top:before {\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n  bottom: -8px;\n  left: 50%;\n  margin-left: -10px;\n}\n.__react_component_tooltip.place-top:after {\n  border-left: 8px solid transparent;\n  border-right: 8px solid transparent;\n  bottom: -6px;\n  left: 50%;\n  margin-left: -8px;\n}\n.__react_component_tooltip.place-bottom {\n  margin-top: 10px;\n}\n.__react_component_tooltip.place-bottom:before {\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n  top: -8px;\n  left: 50%;\n  margin-left: -10px;\n}\n.__react_component_tooltip.place-bottom:after {\n  border-left: 8px solid transparent;\n  border-right: 8px solid transparent;\n  top: -6px;\n  left: 50%;\n  margin-left: -8px;\n}\n.__react_component_tooltip.place-left {\n  margin-left: -10px;\n}\n.__react_component_tooltip.place-left:before {\n  border-top: 6px solid transparent;\n  border-bottom: 6px solid transparent;\n  right: -8px;\n  top: 50%;\n  margin-top: -5px;\n}\n.__react_component_tooltip.place-left:after {\n  border-top: 5px solid transparent;\n  border-bottom: 5px solid transparent;\n  right: -6px;\n  top: 50%;\n  margin-top: -4px;\n}\n.__react_component_tooltip.place-right {\n  margin-left: 10px;\n}\n.__react_component_tooltip.place-right:before {\n  border-top: 6px solid transparent;\n  border-bottom: 6px solid transparent;\n  left: -8px;\n  top: 50%;\n  margin-top: -5px;\n}\n.__react_component_tooltip.place-right:after {\n  border-top: 5px solid transparent;\n  border-bottom: 5px solid transparent;\n  left: -6px;\n  top: 50%;\n  margin-top: -4px;\n}\n.__react_component_tooltip .multi-line {\n  display: block;\n  padding: 2px 0px;\n  text-align: center;\n}');
            var F, Y = function(t) {
                t.hide = function(t) {
                    T(w.HIDE, {
                        target: t
                    })
                }, t.rebuild = function() {
                    T(w.REBUILD)
                }, t.show = function(t) {
                    T(w.SHOW, {
                        target: t
                    })
                }, t.prototype.globalRebuild = function() {
                    this.mount && (this.unbindListener(), this.bindListener())
                }, t.prototype.globalShow = function(t) {
                    if (this.mount) {
                        var e = {
                            currentTarget: t.detail.target
                        };
                        this.showTooltip(e, !0)
                    }
                }, t.prototype.globalHide = function(t) {
                    if (this.mount) {
                        var e = !!(t && t.detail && t.detail.target);
                        this.hideTooltip({
                            currentTarget: e && t.detail.target
                        }, e)
                    }
                }
            }(R = function(t) {
                t.prototype.bindWindowEvents = function(t) {
                    window.removeEventListener(w.HIDE, this.globalHide), window.addEventListener(w.HIDE, this.globalHide, !1), window.removeEventListener(w.REBUILD, this.globalRebuild), window.addEventListener(w.REBUILD, this.globalRebuild, !1), window.removeEventListener(w.SHOW, this.globalShow), window.addEventListener(w.SHOW, this.globalShow, !1), t && (window.removeEventListener("resize", this.onWindowResize), window.addEventListener("resize", this.onWindowResize, !1))
                }, t.prototype.unbindWindowEvents = function() {
                    window.removeEventListener(w.HIDE, this.globalHide), window.removeEventListener(w.REBUILD, this.globalRebuild), window.removeEventListener(w.SHOW, this.globalShow), window.removeEventListener("resize", this.onWindowResize)
                }, t.prototype.onWindowResize = function() {
                    this.mount && this.hideTooltip()
                }
            }(R = function(t) {
                t.prototype.isCustomEvent = function(t) {
                    return this.state.event || !!t.getAttribute("data-event")
                }, t.prototype.customBindListener = function(t) {
                    var e = this,
                        o = this.state,
                        r = o.event,
                        n = o.eventOff,
                        i = t.getAttribute("data-event") || r,
                        l = t.getAttribute("data-event-off") || n;
                    i.split(" ").forEach((function(o) {
                        t.removeEventListener(o, L.get(t, o));
                        var r = O.bind(e, l);
                        L.set(t, o, r), t.addEventListener(o, r, !1)
                    })), l && l.split(" ").forEach((function(o) {
                        t.removeEventListener(o, e.hideTooltip), t.addEventListener(o, e.hideTooltip, !1)
                    }))
                }, t.prototype.customUnbindListener = function(t) {
                    var e = this.state,
                        o = e.event,
                        r = e.eventOff,
                        n = o || t.getAttribute("data-event"),
                        i = r || t.getAttribute("data-event-off");
                    t.removeEventListener(n, L.get(t, o)), i && t.removeEventListener(i, this.hideTooltip)
                }
            }(R = function(t) {
                t.prototype.isCapture = function(t) {
                    return t && "true" === t.getAttribute("data-iscapture") || this.props.isCapture || !1
                }
            }(R = function(t) {
                t.prototype.getEffect = function(t) {
                    return t.getAttribute("data-effect") || this.props.effect || "float"
                }
            }(R = function(t) {
                t.prototype.isBodyMode = function() {
                    return !!this.props.bodyMode
                }, t.prototype.bindBodyListener = function(t) {
                    var e = this,
                        o = this.state,
                        r = o.event,
                        n = o.eventOff,
                        i = o.possibleCustomEvents,
                        l = o.possibleCustomEventsOff,
                        a = P(),
                        p = C(t, "data-event"),
                        s = C(t, "data-event-off");
                    null != r && (p[r] = !0), null != n && (s[n] = !0), i.split(" ").forEach((function(t) {
                        return p[t] = !0
                    })), l.split(" ").forEach((function(t) {
                        return s[t] = !0
                    })), this.unbindBodyListener(a);
                    var c = this.bodyModeListeners = {};
                    for (var d in null == r && (c.mouseover = S.bind(this, this.showTooltip, {}), c.mousemove = S.bind(this, this.updateTooltip, {
                            respectEffect: !0
                        }), c.mouseout = S.bind(this, this.hideTooltip, {})), p) c[d] = S.bind(this, (function(t) {
                        var o = t.currentTarget.getAttribute("data-event-off") || n;
                        O.call(e, o, t)
                    }), {
                        customEvent: !0
                    });
                    for (var f in s) c[f] = S.bind(this, this.hideTooltip, {
                        customEvent: !0
                    });
                    for (var u in c) a.addEventListener(u, c[u])
                }, t.prototype.unbindBodyListener = function(t) {
                    t = t || P();
                    var e = this.bodyModeListeners;
                    for (var o in e) t.removeEventListener(o, e[o])
                }
            }((I = k = function(t) {
                function e(t) {
                    var o;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), (o = d(this, s(e).call(this, t))).state = {
                        place: t.place || "top",
                        desiredPlace: t.place || "top",
                        type: "dark",
                        effect: "float",
                        show: !1,
                        border: !1,
                        offset: {},
                        extraClass: "",
                        html: !1,
                        delayHide: 0,
                        delayShow: 0,
                        event: t.event || null,
                        eventOff: t.eventOff || null,
                        currentEvent: null,
                        currentTarget: null,
                        ariaProps: U(t),
                        isEmptyTip: !1,
                        disable: !1,
                        possibleCustomEvents: t.possibleCustomEvents || "",
                        possibleCustomEventsOff: t.possibleCustomEventsOff || "",
                        originTooltip: null,
                        isMultiline: !1
                    }, o.bind(["showTooltip", "updateTooltip", "hideTooltip", "hideTooltipOnScroll", "getTooltipContent", "globalRebuild", "globalShow", "globalHide", "onWindowResize", "mouseOnToolTip"]), o.mount = !0, o.delayShowLoop = null, o.delayHideLoop = null, o.delayReshow = null, o.intervalUpdateContent = null, o
                }
                var o, r, f;
                return function(t, e) {
                    if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && c(t, e)
                }(e, t), o = e, f = [{
                    key: "getDerivedStateFromProps",
                    value: function(t, e) {
                        var o = e.ariaProps,
                            r = U(t);
                        return Object.keys(r).some((function(t) {
                            return r[t] !== o[t]
                        })) ? function(t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var o = null != arguments[e] ? arguments[e] : {};
                                e % 2 ? p(Object(o), !0).forEach((function(e) {
                                    l(t, e, o[e])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o)) : p(Object(o)).forEach((function(e) {
                                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e))
                                }))
                            }
                            return t
                        }({}, e, {
                            ariaProps: r
                        }) : null
                    }
                }], (r = [{
                    key: "bind",
                    value: function(t) {
                        var e = this;
                        t.forEach((function(t) {
                            e[t] = e[t].bind(e)
                        }))
                    }
                }, {
                    key: "componentDidMount",
                    value: function() {
                        var t = this.props,
                            e = (t.insecure, t.resizeHide);
                        this.bindListener(), this.bindWindowEvents(e)
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this.mount = !1, this.clearTimer(), this.unbindListener(), this.removeScrollListener(), this.unbindWindowEvents()
                    }
                }, {
                    key: "mouseOnToolTip",
                    value: function() {
                        return !(!this.state.show || !this.tooltipRef) && (this.tooltipRef.matches || (this.tooltipRef.msMatchesSelector ? this.tooltipRef.matches = this.tooltipRef.msMatchesSelector : this.tooltipRef.matches = this.tooltipRef.mozMatchesSelector), this.tooltipRef.matches(":hover"))
                    }
                }, {
                    key: "getTargetArray",
                    value: function(t) {
                        var e;
                        if (t) {
                            var o = t.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
                            e = document.querySelectorAll('[data-tip][data-for="'.concat(o, '"]'))
                        } else e = document.querySelectorAll("[data-tip]:not([data-for])");
                        return function(t) {
                            var e = t.length;
                            return t.hasOwnProperty ? Array.prototype.slice.call(t) : new Array(e).fill().map((function(e) {
                                return t[e]
                            }))
                        }(e)
                    }
                }, {
                    key: "bindListener",
                    value: function() {
                        var t = this,
                            e = this.props,
                            o = e.id,
                            r = e.globalEventOff,
                            n = e.isCapture,
                            i = this.getTargetArray(o);
                        i.forEach((function(e) {
                            null === e.getAttribute("currentItem") && e.setAttribute("currentItem", "false"), t.unbindBasicListener(e), t.isCustomEvent(e) && t.customUnbindListener(e)
                        })), this.isBodyMode() ? this.bindBodyListener(i) : i.forEach((function(e) {
                            var o = t.isCapture(e),
                                r = t.getEffect(e);
                            t.isCustomEvent(e) ? t.customBindListener(e) : (e.addEventListener("mouseenter", t.showTooltip, o), "float" === r && e.addEventListener("mousemove", t.updateTooltip, o), e.addEventListener("mouseleave", t.hideTooltip, o))
                        })), r && (window.removeEventListener(r, this.hideTooltip), window.addEventListener(r, this.hideTooltip, n)), this.bindRemovalTracker()
                    }
                }, {
                    key: "unbindListener",
                    value: function() {
                        var t = this,
                            e = this.props,
                            o = e.id,
                            r = e.globalEventOff;
                        this.isBodyMode() ? this.unbindBodyListener() : this.getTargetArray(o).forEach((function(e) {
                            t.unbindBasicListener(e), t.isCustomEvent(e) && t.customUnbindListener(e)
                        })), r && window.removeEventListener(r, this.hideTooltip), this.unbindRemovalTracker()
                    }
                }, {
                    key: "unbindBasicListener",
                    value: function(t) {
                        var e = this.isCapture(t);
                        t.removeEventListener("mouseenter", this.showTooltip, e), t.removeEventListener("mousemove", this.updateTooltip, e), t.removeEventListener("mouseleave", this.hideTooltip, e)
                    }
                }, {
                    key: "getTooltipContent",
                    value: function() {
                        var t, e = this.props,
                            o = e.getContent,
                            r = e.children;
                        return o && (t = Array.isArray(o) ? o[0] && o[0](this.state.originTooltip) : o(this.state.originTooltip)), M(this.state.originTooltip, r, t, this.state.isMultiline)
                    }
                }, {
                    key: "isEmptyTip",
                    value: function(t) {
                        return "string" === typeof t && "" === t || null === t
                    }
                }, {
                    key: "showTooltip",
                    value: function(t, e) {
                        if (!e || this.getTargetArray(this.props.id).some((function(e) {
                                return e === t.currentTarget
                            }))) {
                            var o = this.props,
                                r = o.multiline,
                                n = o.getContent,
                                i = t.currentTarget.getAttribute("data-tip"),
                                l = t.currentTarget.getAttribute("data-multiline") || r || !1,
                                a = t instanceof window.FocusEvent || e,
                                p = !0;
                            t.currentTarget.getAttribute("data-scroll-hide") ? p = "true" === t.currentTarget.getAttribute("data-scroll-hide") : null != this.props.scrollHide && (p = this.props.scrollHide);
                            var s = t.currentTarget.getAttribute("data-place") || this.props.place || "top",
                                c = a ? "solid" : this.getEffect(t.currentTarget),
                                d = t.currentTarget.getAttribute("data-offset") || this.props.offset || {},
                                f = A(t, t.currentTarget, this.tooltipRef, s, s, c, d);
                            f.position && this.props.overridePosition && (f.position = this.props.overridePosition(f.position, t.currentTarget, this.tooltipRef, s, s, c, d));
                            var u = f.isNewState ? f.newState.place : s;
                            this.clearTimer();
                            var b = t.currentTarget,
                                h = this.state.show ? b.getAttribute("data-delay-update") || this.props.delayUpdate : 0,
                                _ = this,
                                m = function() {
                                    _.setState({
                                        originTooltip: i,
                                        isMultiline: l,
                                        desiredPlace: s,
                                        place: u,
                                        type: b.getAttribute("data-type") || _.props.type || "dark",
                                        effect: c,
                                        offset: d,
                                        html: b.getAttribute("data-html") ? "true" === b.getAttribute("data-html") : _.props.html || !1,
                                        delayShow: b.getAttribute("data-delay-show") || _.props.delayShow || 0,
                                        delayHide: b.getAttribute("data-delay-hide") || _.props.delayHide || 0,
                                        delayUpdate: b.getAttribute("data-delay-update") || _.props.delayUpdate || 0,
                                        border: b.getAttribute("data-border") ? "true" === b.getAttribute("data-border") : _.props.border || !1,
                                        extraClass: b.getAttribute("data-class") || _.props.class || _.props.className || "",
                                        disable: b.getAttribute("data-tip-disable") ? "true" === b.getAttribute("data-tip-disable") : _.props.disable || !1,
                                        currentTarget: b
                                    }, (function() {
                                        p && _.addScrollListener(_.state.currentTarget), _.updateTooltip(t), n && Array.isArray(n) && (_.intervalUpdateContent = setInterval((function() {
                                            if (_.mount) {
                                                var t = _.props.getContent,
                                                    e = M(i, "", t[0](), l),
                                                    o = _.isEmptyTip(e);
                                                _.setState({
                                                    isEmptyTip: o
                                                }), _.updatePosition()
                                            }
                                        }), n[1]))
                                    }))
                                };
                            h ? this.delayReshow = setTimeout(m, h) : m()
                        }
                    }
                }, {
                    key: "updateTooltip",
                    value: function(t) {
                        var e = this,
                            o = this.state,
                            r = o.delayShow,
                            n = o.disable,
                            i = this.props.afterShow,
                            l = this.getTooltipContent(),
                            a = parseInt(r, 10),
                            p = t.currentTarget || t.target;
                        if (!this.mouseOnToolTip() && !this.isEmptyTip(l) && !n) {
                            var s = function() {
                                if (Array.isArray(l) && l.length > 0 || l) {
                                    var o = !e.state.show;
                                    e.setState({
                                        currentEvent: t,
                                        currentTarget: p,
                                        show: !0
                                    }, (function() {
                                        e.updatePosition(), o && i && i(t)
                                    }))
                                }
                            };
                            clearTimeout(this.delayShowLoop), r ? this.delayShowLoop = setTimeout(s, a) : s()
                        }
                    }
                }, {
                    key: "listenForTooltipExit",
                    value: function() {
                        this.state.show && this.tooltipRef && this.tooltipRef.addEventListener("mouseleave", this.hideTooltip)
                    }
                }, {
                    key: "removeListenerForTooltipExit",
                    value: function() {
                        this.state.show && this.tooltipRef && this.tooltipRef.removeEventListener("mouseleave", this.hideTooltip)
                    }
                }, {
                    key: "hideTooltip",
                    value: function(t, e) {
                        var o = this,
                            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                                isScroll: !1
                            },
                            n = this.state.disable,
                            i = r.isScroll,
                            l = i ? 0 : this.state.delayHide,
                            a = this.props.afterHide,
                            p = this.getTooltipContent();
                        if (this.mount && !this.isEmptyTip(p) && !n) {
                            if (e) {
                                var s = this.getTargetArray(this.props.id),
                                    c = s.some((function(e) {
                                        return e === t.currentTarget
                                    }));
                                if (!c || !this.state.show) return
                            }
                            var d = function() {
                                var e = o.state.show;
                                o.mouseOnToolTip() ? o.listenForTooltipExit() : (o.removeListenerForTooltipExit(), o.setState({
                                    show: !1
                                }, (function() {
                                    o.removeScrollListener(), e && a && a(t)
                                })))
                            };
                            this.clearTimer(), l ? this.delayHideLoop = setTimeout(d, parseInt(l, 10)) : d()
                        }
                    }
                }, {
                    key: "hideTooltipOnScroll",
                    value: function(t, e) {
                        this.hideTooltip(t, e, {
                            isScroll: !0
                        })
                    }
                }, {
                    key: "addScrollListener",
                    value: function(t) {
                        var e = this.isCapture(t);
                        window.addEventListener("scroll", this.hideTooltipOnScroll, e)
                    }
                }, {
                    key: "removeScrollListener",
                    value: function() {
                        window.removeEventListener("scroll", this.hideTooltipOnScroll)
                    }
                }, {
                    key: "updatePosition",
                    value: function() {
                        var t = this,
                            e = this.state,
                            o = e.currentEvent,
                            r = e.currentTarget,
                            n = e.place,
                            i = e.desiredPlace,
                            l = e.effect,
                            a = e.offset,
                            p = this.tooltipRef,
                            s = A(o, r, p, n, i, l, a);
                        if (s.position && this.props.overridePosition && (s.position = this.props.overridePosition(s.position, o, r, p, n, i, l, a)), s.isNewState) return this.setState(s.newState, (function() {
                            t.updatePosition()
                        }));
                        p.style.left = s.position.left + "px", p.style.top = s.position.top + "px"
                    }
                }, {
                    key: "clearTimer",
                    value: function() {
                        clearTimeout(this.delayShowLoop), clearTimeout(this.delayHideLoop), clearTimeout(this.delayReshow), clearInterval(this.intervalUpdateContent)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = this,
                            o = this.state,
                            r = o.extraClass,
                            i = o.html,
                            l = o.ariaProps,
                            p = o.disable,
                            s = this.getTooltipContent(),
                            c = this.isEmptyTip(s),
                            d = "__react_component_tooltip" + (!this.state.show || p || c ? "" : " show") + (this.state.border ? " border" : "") + " place-".concat(this.state.place) + " type-".concat(this.state.type) + (this.props.delayUpdate ? " allow_hover" : "") + (this.props.clickable ? " allow_click" : ""),
                            f = this.props.wrapper;
                        e.supportedWrappers.indexOf(f) < 0 && (f = e.defaultProps.wrapper);
                        var u = [d, r].filter(Boolean).join(" ");
                        return i ? n.a.createElement(f, a({
                            className: u,
                            id: this.props.id,
                            ref: function(e) {
                                return t.tooltipRef = e
                            }
                        }, l, {
                            "data-id": "tooltip",
                            dangerouslySetInnerHTML: {
                                __html: s
                            }
                        })) : n.a.createElement(f, a({
                            className: u,
                            id: this.props.id
                        }, l, {
                            ref: function(e) {
                                return t.tooltipRef = e
                            },
                            "data-id": "tooltip"
                        }), s)
                    }
                }]) && i(o.prototype, r), f && i(o, f), e
            }(n.a.Component), l(k, "propTypes", {
                children: E.any,
                place: E.string,
                type: E.string,
                effect: E.string,
                offset: E.object,
                multiline: E.bool,
                border: E.bool,
                insecure: E.bool,
                class: E.string,
                className: E.string,
                id: E.string,
                html: E.bool,
                delayHide: E.number,
                delayUpdate: E.number,
                delayShow: E.number,
                event: E.string,
                eventOff: E.string,
                watchWindow: E.bool,
                isCapture: E.bool,
                globalEventOff: E.string,
                getContent: E.any,
                afterShow: E.func,
                afterHide: E.func,
                overridePosition: E.func,
                disable: E.bool,
                scrollHide: E.bool,
                resizeHide: E.bool,
                wrapper: E.string,
                bodyMode: E.bool,
                possibleCustomEvents: E.string,
                possibleCustomEventsOff: E.string,
                clickable: E.bool
            }), l(k, "defaultProps", {
                insecure: !0,
                resizeHide: !0,
                wrapper: "div",
                clickable: !1
            }), l(k, "supportedWrappers", ["div", "span"]), l(k, "displayName", "ReactTooltip"), (F = R = I).prototype.bindRemovalTracker = function() {
                var t = this,
                    e = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                if (null != e) {
                    var o = new e((function(e) {
                        for (var o = 0; o < e.length; o++)
                            for (var r = e[o], n = 0; n < r.removedNodes.length; n++)
                                if (r.removedNodes[n] === t.state.currentTarget) return void t.hideTooltip()
                    }));
                    o.observe(window.document, {
                        childList: !0,
                        subtree: !0
                    }), this.removalTracker = o
                }
            }, R = void(F.prototype.unbindRemovalTracker = function() {
                this.removalTracker && (this.removalTracker.disconnect(), this.removalTracker = null)
            }) || R)) || R) || R) || R) || R) || R) || R;
            e.a = Y
        },
        vSb5: function(t, e, o) {
            "use strict";
            var r = o("L3+E"),
                n = o("MCHi");
            e.a = {
                paddingTop: {
                    type: r.FIELD_TYPES.TEXT,
                    label: "Padding Top"
                },
                paddingBottom: {
                    type: r.FIELD_TYPES.TEXT,
                    label: "Padding Bottom"
                },
                mobilePaddingTop: {
                    type: r.FIELD_TYPES.TEXT,
                    label: "Mobile Padding Top"
                },
                visibilityOffset: {
                    type: r.FIELD_TYPES.TEXT,
                    label: "Visibility offset (px only)"
                },
                segmentMinHeight: {
                    type: r.FIELD_TYPES.TEXT,
                    label: "Segment min height"
                },
                mobilePaddingBottom: {
                    type: r.FIELD_TYPES.TEXT,
                    label: "Mobile Padding Bottom"
                },
                hideOnMobile: {
                    type: r.FIELD_TYPES.BOOLEAN,
                    label: "Hide segment on mobile"
                },
                topTriangle: {
                    type: r.FIELD_TYPES.NESTED,
                    label: "Top triangle",
                    fields: {
                        isVisible: {
                            type: r.FIELD_TYPES.BOOLEAN,
                            label: "Is visible"
                        },
                        color: {
                            type: r.FIELD_TYPES.COLOR_PICKER,
                            label: "Color",
                            possibleColors: n.a.theme.possibleColors
                        }
                    }
                },
                bottomTriangle: {
                    type: r.FIELD_TYPES.NESTED,
                    label: "Bottom triangle",
                    fields: {
                        isVisible: {
                            type: r.FIELD_TYPES.BOOLEAN,
                            label: "Is visible"
                        },
                        color: {
                            type: r.FIELD_TYPES.COLOR_PICKER,
                            label: "Color",
                            possibleColors: n.a.theme.possibleColors
                        }
                    }
                },
                segmentId: {
                    type: r.FIELD_TYPES.TEXT,
                    unAllowedChars: ["#"],
                    label: "Segment ID",
                    labelDescription: "To link to this element insert the unique id (without # symbol). Consider adding 72px top padding (because of the header)"
                }
            }
        }
    }
]);
//# sourceMappingURL=8d7614895d4ef6923c6e74ba8355ac49d2366d14.f351d52cc53bdbb55ee1.js.map