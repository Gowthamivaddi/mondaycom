(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [28], {
        "0+51": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return o
            }));
            var o = {
                MOBILE_ASSET: "MOBILE_ASSET",
                MOBILE_BACKGROUND_GIF: "MOBILE_BACKGROUND_GIF"
            }
        },
        "0zu5": function(e, t, n) {
            ! function(e, t, n, o) {
                "use strict";

                function r(e, t) {
                    return e(t = {
                        exports: {}
                    }, t.exports), t.exports
                }
                n = n && n.hasOwnProperty("default") ? n.default : n;
                var a = r((function(e) {
                    function t() {
                        return e.exports = t = Object.assign || function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = arguments[t];
                                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                            }
                            return e
                        }, t.apply(this, arguments)
                    }
                    e.exports = t
                }));

                function i(e) {
                    if (Array.isArray(e)) return e
                }
                var l = i;

                function s(e, t) {
                    var n = [],
                        o = !0,
                        r = !1,
                        a = void 0;
                    try {
                        for (var i, l = e[Symbol.iterator](); !(o = (i = l.next()).done) && (n.push(i.value), !t || n.length !== t); o = !0);
                    } catch (s) {
                        r = !0, a = s
                    } finally {
                        try {
                            o || null == l.return || l.return()
                        } finally {
                            if (r) throw a
                        }
                    }
                    return n
                }
                var c = s;

                function p() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
                var u = p;

                function d(e, t) {
                    return l(e) || c(e, t) || u()
                }
                var b = d;

                function f(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }
                var g = f;

                function h(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var o = t[n];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }

                function y(e, t, n) {
                    return t && h(e.prototype, t), n && h(e, n), e
                }
                var m = y,
                    E = r((function(e) {
                        function t(e) {
                            return (t = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                                return typeof e
                            } : function(e) {
                                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                            })(e)
                        }

                        function n(o) {
                            return "function" === typeof Symbol && "symbol" === t(Symbol.iterator) ? e.exports = n = function(e) {
                                return t(e)
                            } : e.exports = n = function(e) {
                                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : t(e)
                            }, n(o)
                        }
                        e.exports = n
                    }));

                function v(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }
                var O = v;

                function T(e, t) {
                    return !t || "object" !== E(t) && "function" !== typeof t ? O(e) : t
                }
                var w = T,
                    S = r((function(e) {
                        function t(n) {
                            return e.exports = t = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                                return e.__proto__ || Object.getPrototypeOf(e)
                            }, t(n)
                        }
                        e.exports = t
                    })),
                    x = r((function(e) {
                        function t(n, o) {
                            return e.exports = t = Object.setPrototypeOf || function(e, t) {
                                return e.__proto__ = t, e
                            }, t(n, o)
                        }
                        e.exports = t
                    }));

                function D(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && x(e, t)
                }
                var P = D;

                function _(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }
                var L = _,
                    C = function(e, t, n, o, r, a, i, l) {
                        if (void 0 === t) throw new Error("invariant requires an error message argument");
                        if (!e) {
                            var s;
                            if (void 0 === t) s = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
                            else {
                                var c = [n, o, r, a, i, l],
                                    p = 0;
                                (s = new Error(t.replace(/%s/g, (function() {
                                    return c[p++]
                                })))).name = "Invariant Violation"
                            }
                            throw s.framesToPop = 1, s
                        }
                    },
                    I = function() {
                        function e() {
                            g(this, e), L(this, "refs", {})
                        }
                        return m(e, [{
                            key: "add",
                            value: function(e, t) {
                                this.refs[e] || (this.refs[e] = []), this.refs[e].push(t)
                            }
                        }, {
                            key: "remove",
                            value: function(e, t) {
                                var n = this.getIndex(e, t); - 1 !== n && this.refs[e].splice(n, 1)
                            }
                        }, {
                            key: "isActive",
                            value: function() {
                                return this.active
                            }
                        }, {
                            key: "getActive",
                            value: function() {
                                var e = this;
                                return this.refs[this.active.collection].find((function(t) {
                                    return t.node.sortableInfo.index == e.active.index
                                }))
                            }
                        }, {
                            key: "getIndex",
                            value: function(e, t) {
                                return this.refs[e].indexOf(t)
                            }
                        }, {
                            key: "getOrderedRefs",
                            value: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.active.collection;
                                return this.refs[e].sort(j)
                            }
                        }]), e
                    }();

                function j(e, t) {
                    return e.node.sortableInfo.index - t.node.sortableInfo.index
                }

                function R(e) {
                    if (Array.isArray(e)) {
                        for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                        return n
                    }
                }
                var k = R;

                function N(e) {
                    if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
                }
                var A = N;

                function F() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance")
                }
                var B = F;

                function Y(e) {
                    return k(e) || A(e) || B()
                }
                var M = Y;

                function H(e, t, n) {
                    return "undefined" !== typeof console && console.warn("Deprecation warning: arrayMove will no longer be exported by 'react-sortable-hoc' in the next major release. Please install the `array-move` package locally instead. https://www.npmjs.com/package/array-move"), (e = e.slice()).splice(n < 0 ? e.length + n : n, 0, e.splice(t, 1)[0]), e
                }

                function W(e) {
                    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) n[o - 1] = arguments[o];
                    return Object.keys(e).reduce((function(t, o) {
                        return -1 === n.indexOf(o) && (t[o] = e[o]), t
                    }), {})
                }
                var G = {
                        end: ["touchend", "touchcancel", "mouseup"],
                        move: ["touchmove", "mousemove"],
                        start: ["touchstart", "mousedown"]
                    },
                    K = function() {
                        if ("undefined" === typeof window || "undefined" === typeof document) return "";
                        var e = window.getComputedStyle(document.documentElement, "") || ["-moz-hidden-iframe"],
                            t = (Array.prototype.slice.call(e).join("").match(/-(moz|webkit|ms)-/) || "" === e.OLink && ["", "o"])[1];
                        switch (t) {
                            case "ms":
                                return "ms";
                            default:
                                return t && t.length ? t[0].toUpperCase() + t.substr(1) : ""
                        }
                    }();

                function X(e, t) {
                    Object.keys(t).forEach((function(n) {
                        e.style[n] = t[n]
                    }))
                }

                function U(e, t) {
                    e.style["".concat(K, "Transform")] = null == t ? "" : "translate3d(".concat(t.x, "px,").concat(t.y, "px,0)")
                }

                function V(e, t) {
                    e.style["".concat(K, "TransitionDuration")] = null == t ? "" : "".concat(t, "ms")
                }

                function z(e, t) {
                    for (; e;) {
                        if (t(e)) return e;
                        e = e.parentNode
                    }
                    return null
                }

                function J(e, t, n) {
                    return Math.max(e, Math.min(n, t))
                }

                function q(e) {
                    return "px" === e.substr(-2) ? parseFloat(e) : 0
                }

                function Q(e) {
                    var t = window.getComputedStyle(e);
                    return {
                        bottom: q(t.marginBottom),
                        left: q(t.marginLeft),
                        right: q(t.marginRight),
                        top: q(t.marginTop)
                    }
                }

                function Z(e, t) {
                    var n = t.displayName || t.name;
                    return n ? "".concat(e, "(").concat(n, ")") : e
                }

                function $(e, t) {
                    var n = e.getBoundingClientRect();
                    return {
                        top: n.top + t.top,
                        left: n.left + t.left
                    }
                }

                function ee(e) {
                    return e.touches && e.touches.length ? {
                        x: e.touches[0].pageX,
                        y: e.touches[0].pageY
                    } : e.changedTouches && e.changedTouches.length ? {
                        x: e.changedTouches[0].pageX,
                        y: e.changedTouches[0].pageY
                    } : {
                        x: e.pageX,
                        y: e.pageY
                    }
                }

                function te(e) {
                    return e.touches && e.touches.length || e.changedTouches && e.changedTouches.length
                }

                function ne(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                        left: 0,
                        top: 0
                    };
                    if (e) {
                        var o = {
                            left: n.left + e.offsetLeft,
                            top: n.top + e.offsetTop
                        };
                        return e.parentNode === t ? o : ne(e.parentNode, t, o)
                    }
                }

                function oe(e, t, n) {
                    return e < n && e > t ? e - 1 : e > n && e < t ? e + 1 : e
                }

                function re(e) {
                    var t = e.lockOffset,
                        n = e.width,
                        o = e.height,
                        r = t,
                        a = t,
                        i = "px";
                    if ("string" === typeof t) {
                        var l = /^[+-]?\d*(?:\.\d*)?(px|%)$/.exec(t);
                        C(null !== l, 'lockOffset value should be a number or a string of a number followed by "px" or "%". Given %s', t), r = parseFloat(t), a = parseFloat(t), i = l[1]
                    }
                    return C(isFinite(r) && isFinite(a), "lockOffset value should be a finite. Given %s", t), "%" === i && (r = r * n / 100, a = a * o / 100), {
                        x: r,
                        y: a
                    }
                }

                function ae(e) {
                    var t = e.height,
                        n = e.width,
                        o = e.lockOffset,
                        r = Array.isArray(o) ? o : [o, o];
                    C(2 === r.length, "lockOffset prop of SortableContainer should be a single value or an array of exactly two values. Given %s", o);
                    var a = b(r, 2),
                        i = a[0],
                        l = a[1];
                    return [re({
                        height: t,
                        lockOffset: i,
                        width: n
                    }), re({
                        height: t,
                        lockOffset: l,
                        width: n
                    })]
                }

                function ie(e) {
                    var t = window.getComputedStyle(e),
                        n = /(auto|scroll)/;
                    return ["overflow", "overflowX", "overflowY"].find((function(e) {
                        return n.test(t[e])
                    }))
                }

                function le(e) {
                    return e instanceof HTMLElement ? ie(e) ? e : le(e.parentNode) : null
                }
                var se = {
                        TAB: 9,
                        ESC: 27,
                        SPACE: 32,
                        LEFT: 37,
                        UP: 38,
                        RIGHT: 39,
                        DOWN: 40
                    },
                    ce = {
                        Anchor: "A",
                        Button: "BUTTON",
                        Canvas: "CANVAS",
                        Input: "INPUT",
                        Option: "OPTION",
                        Textarea: "TEXTAREA",
                        Select: "SELECT"
                    };

                function pe(e) {
                    var t = "input, textarea, select, canvas, [contenteditable]",
                        n = e.querySelectorAll(t),
                        o = e.cloneNode(!0);
                    return M(o.querySelectorAll(t)).forEach((function(e, t) {
                        "file" !== e.type && (e.value = n[t].value), "radio" === e.type && e.name && (e.name = "__sortableClone__".concat(e.name)), e.tagName === ce.Canvas && n[t].width > 0 && n[t].height > 0 && e.getContext("2d").drawImage(n[t], 0, 0)
                    })), o
                }

                function ue(e) {
                    var n, r, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        withRef: !1
                    };
                    return r = n = function(n) {
                        function r() {
                            return g(this, r), w(this, S(r).apply(this, arguments))
                        }
                        return P(r, n), m(r, [{
                            key: "componentDidMount",
                            value: function() {
                                o.findDOMNode(this).sortableHandle = !0
                            }
                        }, {
                            key: "getWrappedInstance",
                            value: function() {
                                return C(i.withRef, "To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableHandle() call"), this.refs.wrappedInstance
                            }
                        }, {
                            key: "render",
                            value: function() {
                                var n = i.withRef ? "wrappedInstance" : null;
                                return t.createElement(e, a({
                                    ref: n
                                }, this.props))
                            }
                        }]), r
                    }(t.Component), L(n, "displayName", Z("sortableHandle", e)), r
                }

                function de(e) {
                    return null != e.sortableHandle
                }
                var be = function() {
                    function e(t, n) {
                        g(this, e), this.container = t, this.onScrollCallback = n
                    }
                    return m(e, [{
                        key: "clear",
                        value: function() {
                            clearInterval(this.interval), this.interval = null
                        }
                    }, {
                        key: "update",
                        value: function(e) {
                            var t = this,
                                n = e.translate,
                                o = e.minTranslate,
                                r = e.maxTranslate,
                                a = e.width,
                                i = e.height,
                                l = {
                                    x: 0,
                                    y: 0
                                },
                                s = {
                                    x: 1,
                                    y: 1
                                },
                                c = {
                                    x: 10,
                                    y: 10
                                },
                                p = this.container,
                                u = p.scrollTop,
                                d = p.scrollLeft,
                                b = p.scrollHeight,
                                f = p.scrollWidth,
                                g = 0 === u,
                                h = b - u - p.clientHeight === 0,
                                y = 0 === d,
                                m = f - d - p.clientWidth === 0;
                            n.y >= r.y - i / 2 && !h ? (l.y = 1, s.y = c.y * Math.abs((r.y - i / 2 - n.y) / i)) : n.x >= r.x - a / 2 && !m ? (l.x = 1, s.x = c.x * Math.abs((r.x - a / 2 - n.x) / a)) : n.y <= o.y + i / 2 && !g ? (l.y = -1, s.y = c.y * Math.abs((n.y - i / 2 - o.y) / i)) : n.x <= o.x + a / 2 && !y && (l.x = -1, s.x = c.x * Math.abs((n.x - a / 2 - o.x) / a)), this.interval && (this.clear(), this.isAutoScrolling = !1), 0 === l.x && 0 === l.y || (this.interval = setInterval((function() {
                                t.isAutoScrolling = !0;
                                var e = {
                                    left: s.x * l.x,
                                    top: s.y * l.y
                                };
                                t.container.scrollTop += e.top, t.container.scrollLeft += e.left, t.onScrollCallback(e)
                            }), 5))
                        }
                    }]), e
                }();

                function fe(e) {
                    var t = e.node;
                    return {
                        height: t.offsetHeight,
                        width: t.offsetWidth
                    }
                }

                function ge(e) {
                    return -1 !== [ce.Input, ce.Textarea, ce.Select, ce.Option, ce.Button].indexOf(e.target.tagName) || !!z(e.target, (function(e) {
                        return "true" === e.contentEditable
                    }))
                }
                var he = {
                        axis: n.oneOf(["x", "y", "xy"]),
                        contentWindow: n.any,
                        disableAutoscroll: n.bool,
                        distance: n.number,
                        getContainer: n.func,
                        getHelperDimensions: n.func,
                        helperClass: n.string,
                        helperContainer: n.oneOfType([n.func, "undefined" === typeof HTMLElement ? n.any : n.instanceOf(HTMLElement)]),
                        hideSortableGhost: n.bool,
                        keyboardSortingTransitionDuration: n.number,
                        lockAxis: n.string,
                        lockOffset: n.oneOfType([n.number, n.string, n.arrayOf(n.oneOfType([n.number, n.string]))]),
                        lockToContainerEdges: n.bool,
                        onSortEnd: n.func,
                        onSortMove: n.func,
                        onSortOver: n.func,
                        onSortStart: n.func,
                        pressDelay: n.number,
                        pressThreshold: n.number,
                        shouldCancelStart: n.func,
                        transitionDuration: n.number,
                        updateBeforeSortStart: n.func,
                        useDragHandle: n.bool,
                        useWindowAsScrollContainer: n.bool,
                        zoomFactor: n.number
                    },
                    ye = {
                        axis: "y",
                        disableAutoscroll: !1,
                        distance: 0,
                        getHelperDimensions: fe,
                        hideSortableGhost: !0,
                        lockOffset: "50%",
                        lockToContainerEdges: !1,
                        pressDelay: 0,
                        pressThreshold: 5,
                        shouldCancelStart: ge,
                        transitionDuration: 300,
                        useWindowAsScrollContainer: !1,
                        zoomFactor: 1
                    },
                    me = Object.keys(he);

                function Ee(e) {
                    C(!(e.distance && e.pressDelay), "Attempted to set both `pressDelay` and `distance` on SortableContainer, you may only use one or the other, not both at the same time.")
                }

                function ve(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var o = Object.getOwnPropertySymbols(e);
                        t && (o = o.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), n.push.apply(n, o)
                    }
                    return n
                }

                function Oe(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? ve(n, !0).forEach((function(t) {
                            L(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ve(n).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }

                function Te(e, t) {
                    try {
                        var n = e()
                    } catch (o) {
                        return t(!0, o)
                    }
                    return n && n.then ? n.then(t.bind(null, !1), t.bind(null, !0)) : t(!1, value)
                }

                function we(e) {
                    var r, i, l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        withRef: !1
                    };
                    return i = r = function(n) {
                        function r(e) {
                            var t;
                            return g(this, r), t = w(this, S(r).call(this, e)), L(O(t), "handleStart", (function(e) {
                                var n = t.props,
                                    o = n.distance,
                                    r = n.shouldCancelStart;
                                if (2 !== e.button && !r(e)) {
                                    t.touched = !0, t.position = ee(e);
                                    var a = z(e.target, (function(e) {
                                        return null != e.sortableInfo
                                    }));
                                    if (a && a.sortableInfo && t.nodeIsChild(a) && !t.state.sorting) {
                                        var i = t.props.useDragHandle,
                                            l = a.sortableInfo,
                                            s = l.index,
                                            c = l.collection;
                                        if (l.disabled) return;
                                        if (i && !z(e.target, de)) return;
                                        t.manager.active = {
                                            collection: c,
                                            index: s
                                        }, te(e) || e.target.tagName !== ce.Anchor || e.preventDefault(), o || (0 === t.props.pressDelay ? t.handlePress(e) : t.pressTimer = setTimeout((function() {
                                            return t.handlePress(e)
                                        }), t.props.pressDelay))
                                    }
                                }
                            })), L(O(t), "nodeIsChild", (function(e) {
                                return e.sortableInfo.manager === t.manager
                            })), L(O(t), "handleMove", (function(e) {
                                var n = t.props,
                                    o = n.distance,
                                    r = n.pressThreshold;
                                if (!t.state.sorting && t.touched && !t._awaitingUpdateBeforeSortStart) {
                                    var a = ee(e),
                                        i = {
                                            x: t.position.x - a.x,
                                            y: t.position.y - a.y
                                        },
                                        l = Math.abs(i.x) + Math.abs(i.y);
                                    t.delta = i, o || r && !(l >= r) ? o && l >= o && t.manager.isActive() && t.handlePress(e) : (clearTimeout(t.cancelTimer), t.cancelTimer = setTimeout(t.cancel, 0))
                                }
                            })), L(O(t), "handleEnd", (function() {
                                t.touched = !1, t.cancel()
                            })), L(O(t), "cancel", (function() {
                                var e = t.props.distance;
                                t.state.sorting || (e || clearTimeout(t.pressTimer), t.manager.active = null)
                            })), L(O(t), "handlePress", (function(e) {
                                try {
                                    var n = t.manager.getActive(),
                                        o = function() {
                                            if (n) {
                                                var o = function() {
                                                        var n = b.sortableInfo.index,
                                                            o = Q(b),
                                                            r = t.scrollContainer.getBoundingClientRect(),
                                                            c = i({
                                                                collection: f,
                                                                index: n,
                                                                node: b
                                                            });
                                                        if (t.node = b, t.margin = o, t.width = c.width / d, t.height = c.height / d, t.marginOffset = {
                                                                x: t.margin.left + t.margin.right,
                                                                y: Math.max(t.margin.top, t.margin.bottom)
                                                            }, t.boundingClientRect = b.getBoundingClientRect(), t.containerBoundingRect = r, t.index = n, t.newIndex = n, t.axis = {
                                                                x: a.indexOf("x") >= 0,
                                                                y: a.indexOf("y") >= 0
                                                            }, t.offsetEdge = ne(b, t.container), t.initialOffset = ee(g ? Oe({}, e, {
                                                                pageX: t.boundingClientRect.left,
                                                                pageY: t.boundingClientRect.top
                                                            }) : e), t.initialScroll = {
                                                                left: t.scrollContainer.scrollLeft,
                                                                top: t.scrollContainer.scrollTop
                                                            }, t.initialWindowScroll = {
                                                                left: window.pageXOffset,
                                                                top: window.pageYOffset
                                                            }, t.helper = t.helperContainer.appendChild(pe(b)), X(t.helper, {
                                                                boxSizing: "border-box",
                                                                height: "".concat(t.height, "px"),
                                                                left: "".concat(t.boundingClientRect.left - o.left, "px"),
                                                                pointerEvents: "none",
                                                                position: "fixed",
                                                                top: "".concat(t.boundingClientRect.top - o.top, "px"),
                                                                width: "".concat(t.width, "px")
                                                            }), g && t.helper.focus(), s && (t.sortableGhost = b, X(b, {
                                                                opacity: 0,
                                                                visibility: "hidden"
                                                            })), t.minTranslate = {}, t.maxTranslate = {}, g) {
                                                            var h = u ? {
                                                                    top: 0,
                                                                    left: 0,
                                                                    width: t.contentWindow.innerWidth,
                                                                    height: t.contentWindow.innerHeight
                                                                } : t.containerBoundingRect,
                                                                y = h.top,
                                                                m = h.left,
                                                                E = h.width,
                                                                v = y + h.height,
                                                                O = m + E;
                                                            t.axis.x && (t.minTranslate.x = m - t.boundingClientRect.left, t.maxTranslate.x = O - (t.boundingClientRect.left + t.width)), t.axis.y && (t.minTranslate.y = y - t.boundingClientRect.top, t.maxTranslate.y = v - (t.boundingClientRect.top + t.height))
                                                        } else t.axis.x && (t.minTranslate.x = (u ? 0 : r.left) - t.boundingClientRect.left - t.width / 2, t.maxTranslate.x = (u ? t.contentWindow.innerWidth : r.left + r.width) - t.boundingClientRect.left - t.width / 2), t.axis.y && (t.minTranslate.y = (u ? 0 : r.top) - t.boundingClientRect.top - t.height / 2, t.maxTranslate.y = (u ? t.contentWindow.innerHeight : r.top + r.height) - t.boundingClientRect.top - t.height / 2);
                                                        l && l.split(" ").forEach((function(e) {
                                                            return t.helper.classList.add(e)
                                                        })), t.listenerNode = e.touches ? b : t.contentWindow, g ? (t.listenerNode.addEventListener("wheel", t.handleKeyEnd, !0), t.listenerNode.addEventListener("mousedown", t.handleKeyEnd, !0), t.listenerNode.addEventListener("keydown", t.handleKeyDown)) : (G.move.forEach((function(e) {
                                                            return t.listenerNode.addEventListener(e, t.handleSortMove, !1)
                                                        })), G.end.forEach((function(e) {
                                                            return t.listenerNode.addEventListener(e, t.handleSortEnd, !1)
                                                        }))), t.setState({
                                                            sorting: !0,
                                                            sortingIndex: n
                                                        }), p && p({
                                                            node: b,
                                                            index: n,
                                                            collection: f,
                                                            isKeySorting: g
                                                        }, e), g && t.keyMove(0)
                                                    },
                                                    r = t.props,
                                                    a = r.axis,
                                                    i = r.getHelperDimensions,
                                                    l = r.helperClass,
                                                    s = r.hideSortableGhost,
                                                    c = r.updateBeforeSortStart,
                                                    p = r.onSortStart,
                                                    u = r.useWindowAsScrollContainer,
                                                    d = r.zoomFactor,
                                                    b = n.node,
                                                    f = n.collection,
                                                    g = t.manager.isKeySorting,
                                                    h = function() {
                                                        if ("function" === typeof c) {
                                                            t._awaitingUpdateBeforeSortStart = !0;
                                                            var n = Te((function() {
                                                                var t = b.sortableInfo.index;
                                                                return Promise.resolve(c({
                                                                    collection: f,
                                                                    index: t,
                                                                    node: b,
                                                                    isKeySorting: g
                                                                }, e)).then((function() {}))
                                                            }), (function(e, n) {
                                                                if (t._awaitingUpdateBeforeSortStart = !1, e) throw n;
                                                                return n
                                                            }));
                                                            if (n && n.then) return n.then((function() {}))
                                                        }
                                                    }();
                                                return h && h.then ? h.then(o) : o(h)
                                            }
                                        }();
                                    return Promise.resolve(o && o.then ? o.then((function() {})) : void 0)
                                } catch (r) {
                                    return Promise.reject(r)
                                }
                            })), L(O(t), "handleSortMove", (function(e) {
                                var n = t.props.onSortMove;
                                "function" === typeof e.preventDefault && e.preventDefault(), t.updateHelperPosition(e), t.animateNodes(), t.autoscroll(), n && n(e)
                            })), L(O(t), "handleSortEnd", (function(e) {
                                var n = t.props,
                                    o = n.hideSortableGhost,
                                    r = n.onSortEnd,
                                    a = t.manager,
                                    i = a.active.collection,
                                    l = a.isKeySorting,
                                    s = t.manager.refs[i];
                                t.listenerNode && (l ? (t.listenerNode.removeEventListener("wheel", t.handleKeyEnd, !0), t.listenerNode.removeEventListener("mousedown", t.handleKeyEnd, !0), t.listenerNode.removeEventListener("keydown", t.handleKeyDown)) : (G.move.forEach((function(e) {
                                    return t.listenerNode.removeEventListener(e, t.handleSortMove)
                                })), G.end.forEach((function(e) {
                                    return t.listenerNode.removeEventListener(e, t.handleSortEnd)
                                })))), t.helper.parentNode.removeChild(t.helper), o && t.sortableGhost && X(t.sortableGhost, {
                                    opacity: "",
                                    visibility: ""
                                });
                                for (var c = 0, p = s.length; c < p; c++) {
                                    var u = s[c],
                                        d = u.node;
                                    u.edgeOffset = null, u.boundingClientRect = null, U(d, null), V(d, null), u.translate = null
                                }
                                t.autoScroller.clear(), t.manager.active = null, t.manager.isKeySorting = !1, t.setState({
                                    sorting: !1,
                                    sortingIndex: null
                                }), "function" === typeof r && r({
                                    collection: i,
                                    newIndex: t.newIndex,
                                    oldIndex: t.index,
                                    isKeySorting: l
                                }, e), t.touched = !1
                            })), L(O(t), "autoscroll", (function() {
                                var e = t.props.disableAutoscroll,
                                    n = t.manager.isKeySorting;
                                if (!e) {
                                    if (n) {
                                        var o = Oe({}, t.translate),
                                            r = 0,
                                            a = 0;
                                        return t.axis.x && (o.x = Math.min(t.maxTranslate.x, Math.max(t.minTranslate.x, t.translate.x)), r = t.translate.x - o.x), t.axis.y && (o.y = Math.min(t.maxTranslate.y, Math.max(t.minTranslate.y, t.translate.y)), a = t.translate.y - o.y), t.translate = o, U(t.helper, t.translate), t.scrollContainer.scrollLeft += r, void(t.scrollContainer.scrollTop += a)
                                    }
                                    t.autoScroller.update({
                                        height: t.height,
                                        maxTranslate: t.maxTranslate,
                                        minTranslate: t.minTranslate,
                                        translate: t.translate,
                                        width: t.width
                                    })
                                }
                            })), L(O(t), "onAutoScroll", (function(e) {
                                t.translate.x += e.left, t.translate.y += e.top, t.animateNodes()
                            })), L(O(t), "handleKeyDown", (function(e) {
                                var n = e.keyCode,
                                    o = t.props.shouldCancelStart;
                                if ((!t.manager.active || t.manager.isKeySorting) && (t.manager.active || n === se.SPACE && !o(e) && t.isValidSortingTarget(e))) switch (e.stopPropagation(), e.preventDefault(), n) {
                                    case se.SPACE:
                                        t.manager.active ? t.keyDrop(e) : t.keyLift(e);
                                        break;
                                    case se.DOWN:
                                    case se.RIGHT:
                                        t.keyMove(1);
                                        break;
                                    case se.UP:
                                    case se.LEFT:
                                        t.keyMove(-1);
                                        break;
                                    case se.ESC:
                                        t.newIndex = t.manager.active.index, t.keyDrop(e)
                                }
                            })), L(O(t), "keyLift", (function(e) {
                                var n = e.target,
                                    o = z(n, (function(e) {
                                        return null != e.sortableInfo
                                    })).sortableInfo,
                                    r = o.index,
                                    a = o.collection;
                                t.initialFocusedNode = n, t.manager.isKeySorting = !0, t.manager.active = {
                                    index: r,
                                    collection: a
                                }, t.handlePress(e)
                            })), L(O(t), "keyMove", (function(e) {
                                var n = t.manager.getOrderedRefs(),
                                    o = n[n.length - 1].node.sortableInfo.index,
                                    r = t.newIndex + e,
                                    a = t.newIndex;
                                if (!(r < 0 || r > o)) {
                                    t.prevIndex = a, t.newIndex = r;
                                    var i = oe(t.newIndex, t.prevIndex, t.index),
                                        l = n.find((function(e) {
                                            return e.node.sortableInfo.index === i
                                        })),
                                        s = l.node,
                                        c = t.containerScrollDelta,
                                        p = l.boundingClientRect || $(s, c),
                                        u = l.translate || {
                                            x: 0,
                                            y: 0
                                        },
                                        d = {
                                            top: p.top + u.y - c.top,
                                            left: p.left + u.x - c.left
                                        },
                                        b = a < r,
                                        f = {
                                            x: b && t.axis.x ? s.offsetWidth - t.width : 0,
                                            y: b && t.axis.y ? s.offsetHeight - t.height : 0
                                        };
                                    t.handleSortMove({
                                        pageX: d.left + f.x,
                                        pageY: d.top + f.y,
                                        ignoreTransition: 0 === e
                                    })
                                }
                            })), L(O(t), "keyDrop", (function(e) {
                                t.handleSortEnd(e), t.initialFocusedNode && t.initialFocusedNode.focus()
                            })), L(O(t), "handleKeyEnd", (function(e) {
                                t.manager.active && t.keyDrop(e)
                            })), L(O(t), "isValidSortingTarget", (function(e) {
                                var n = t.props.useDragHandle,
                                    o = e.target,
                                    r = z(o, (function(e) {
                                        return null != e.sortableInfo
                                    }));
                                return r && r.sortableInfo && !r.sortableInfo.disabled && (n ? de(o) : o.sortableInfo)
                            })), Ee(e), t.state = {}, t.manager = new I, t.events = {
                                end: t.handleEnd,
                                move: t.handleMove,
                                start: t.handleStart
                            }, t
                        }
                        return P(r, n), m(r, [{
                            key: "getChildContext",
                            value: function() {
                                return {
                                    manager: this.manager
                                }
                            }
                        }, {
                            key: "componentDidMount",
                            value: function() {
                                var e = this,
                                    t = this.props.useWindowAsScrollContainer,
                                    n = this.getContainer();
                                Promise.resolve(n).then((function(n) {
                                    e.container = n, e.document = e.container.ownerDocument || document;
                                    var o = e.props.contentWindow || e.document.defaultView || window;
                                    e.contentWindow = "function" === typeof o ? o() : o, e.scrollContainer = t ? e.document.scrollingElement || e.document.documentElement : le(e.container) || e.container, e.autoScroller = new be(e.scrollContainer, e.onAutoScroll), Object.keys(e.events).forEach((function(t) {
                                        return G[t].forEach((function(n) {
                                            return e.container.addEventListener(n, e.events[t], !1)
                                        }))
                                    })), e.container.addEventListener("keydown", e.handleKeyDown)
                                }))
                            }
                        }, {
                            key: "componentWillUnmount",
                            value: function() {
                                var e = this;
                                this.helper && this.helper.parentNode && this.helper.parentNode.removeChild(this.helper), this.container && (Object.keys(this.events).forEach((function(t) {
                                    return G[t].forEach((function(n) {
                                        return e.container.removeEventListener(n, e.events[t])
                                    }))
                                })), this.container.removeEventListener("keydown", this.handleKeyDown))
                            }
                        }, {
                            key: "updateHelperPosition",
                            value: function(e) {
                                var t = this.props,
                                    n = t.lockAxis,
                                    o = t.lockOffset,
                                    r = t.lockToContainerEdges,
                                    a = t.transitionDuration,
                                    i = t.keyboardSortingTransitionDuration,
                                    l = void 0 === i ? a : i,
                                    s = this.manager.isKeySorting,
                                    c = e.ignoreTransition,
                                    p = ee(e),
                                    u = {
                                        x: p.x - this.initialOffset.x,
                                        y: p.y - this.initialOffset.y
                                    };
                                if (u.y -= window.pageYOffset - this.initialWindowScroll.top, u.x -= window.pageXOffset - this.initialWindowScroll.left, this.translate = u, r) {
                                    var d = ae({
                                            height: this.height,
                                            lockOffset: o,
                                            width: this.width
                                        }),
                                        f = b(d, 2),
                                        g = f[0],
                                        h = f[1],
                                        y = {
                                            x: this.width / 2 - g.x,
                                            y: this.height / 2 - g.y
                                        },
                                        m = {
                                            x: this.width / 2 - h.x,
                                            y: this.height / 2 - h.y
                                        };
                                    u.x = J(this.minTranslate.x + y.x, this.maxTranslate.x - m.x, u.x), u.y = J(this.minTranslate.y + y.y, this.maxTranslate.y - m.y, u.y)
                                }
                                "x" === n ? u.y = 0 : "y" === n && (u.x = 0), s && l && !c && V(this.helper, l), U(this.helper, u)
                            }
                        }, {
                            key: "animateNodes",
                            value: function() {
                                var e = this.props,
                                    t = e.transitionDuration,
                                    n = e.hideSortableGhost,
                                    o = e.onSortOver,
                                    r = e.zoomFactor,
                                    a = this.containerScrollDelta,
                                    i = this.windowScrollDelta,
                                    l = this.manager.getOrderedRefs(),
                                    s = {
                                        left: this.offsetEdge.left + this.translate.x + a.left,
                                        top: this.offsetEdge.top + this.translate.y + a.top
                                    },
                                    c = this.manager.isKeySorting,
                                    p = this.newIndex;
                                this.newIndex = null;
                                for (var u = 0, d = l.length; u < d; u++) {
                                    var b = l[u].node,
                                        f = b.sortableInfo.index,
                                        g = b.offsetWidth,
                                        h = b.offsetHeight,
                                        y = {
                                            height: this.height > h ? h / 2 : this.height / 2,
                                            width: this.width > g ? g / 2 : this.width / 2
                                        },
                                        m = c && f > this.index && f <= p,
                                        E = c && f < this.index && f >= p,
                                        v = {
                                            x: 0,
                                            y: 0
                                        },
                                        O = l[u].edgeOffset;
                                    O || (O = ne(b, this.container), l[u].edgeOffset = O, c && (l[u].boundingClientRect = $(b, a)));
                                    var T = u < l.length - 1 && l[u + 1],
                                        w = u > 0 && l[u - 1];
                                    T && !T.edgeOffset && (T.edgeOffset = ne(T.node, this.container), c && (T.boundingClientRect = $(T.node, a))), f !== this.index ? (t && V(b, t), this.axis.x ? this.axis.y ? E || f < this.index && (s.left + i.left - y.width <= O.left && s.top + i.top <= O.top + y.height || s.top + i.top + y.height <= O.top) ? (v.x = this.width + this.marginOffset.x, O.left + v.x > this.containerBoundingRect.width - y.width && T && (v.x = T.edgeOffset.left - O.left, v.y = T.edgeOffset.top - O.top), null === this.newIndex && (this.newIndex = f)) : (m || f > this.index && (s.left + i.left + y.width >= O.left && s.top + i.top + y.height >= O.top || s.top + i.top + y.height >= O.top + h)) && (v.x = -(this.width + this.marginOffset.x), O.left + v.x < this.containerBoundingRect.left + y.width && w && (v.x = w.edgeOffset.left - O.left, v.y = w.edgeOffset.top - O.top), this.newIndex = f) : m || f > this.index && s.left + i.left + y.width >= O.left ? (v.x = -(this.width * r + this.marginOffset.x), this.newIndex = f) : (E || f < this.index && s.left + i.left <= O.left + y.width) && (v.x = this.width * r + this.marginOffset.x, null == this.newIndex && (this.newIndex = f)) : this.axis.y && (m || f > this.index && s.top + i.top + y.height >= O.top ? (v.y = -(this.height * r + this.marginOffset.y), this.newIndex = f) : (E || f < this.index && s.top + i.top <= O.top + y.height) && (v.y = this.height * r + this.marginOffset.y, null == this.newIndex && (this.newIndex = f))), U(b, v), l[u].translate = v) : n && (this.sortableGhost = b, X(b, {
                                        opacity: 0,
                                        visibility: "hidden"
                                    }))
                                }
                                null == this.newIndex && (this.newIndex = this.index), c && (this.newIndex = p);
                                var S = c ? this.prevIndex : p;
                                o && this.newIndex !== S && o({
                                    collection: this.manager.active.collection,
                                    index: this.index,
                                    newIndex: this.newIndex,
                                    oldIndex: S,
                                    isKeySorting: c
                                })
                            }
                        }, {
                            key: "getWrappedInstance",
                            value: function() {
                                return C(l.withRef, "To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableContainer() call"), this.refs.wrappedInstance
                            }
                        }, {
                            key: "getContainer",
                            value: function() {
                                var e = this.props.getContainer;
                                return "function" !== typeof e ? o.findDOMNode(this) : e(l.withRef ? this.getWrappedInstance() : void 0)
                            }
                        }, {
                            key: "render",
                            value: function() {
                                var n = l.withRef ? "wrappedInstance" : null;
                                return t.createElement(e, a({
                                    ref: n
                                }, W(this.props, me)))
                            }
                        }, {
                            key: "helperContainer",
                            get: function() {
                                var e = this.props.helperContainer;
                                return "function" === typeof e ? e() : this.props.helperContainer || this.document.body
                            }
                        }, {
                            key: "containerScrollDelta",
                            get: function() {
                                return this.props.useWindowAsScrollContainer ? {
                                    left: 0,
                                    top: 0
                                } : {
                                    left: this.scrollContainer.scrollLeft - this.initialScroll.left,
                                    top: this.scrollContainer.scrollTop - this.initialScroll.top
                                }
                            }
                        }, {
                            key: "windowScrollDelta",
                            get: function() {
                                return {
                                    left: this.contentWindow.pageXOffset - this.initialWindowScroll.left,
                                    top: this.contentWindow.pageYOffset - this.initialWindowScroll.top
                                }
                            }
                        }]), r
                    }(t.Component), L(r, "displayName", Z("sortableList", e)), L(r, "defaultProps", ye), L(r, "propTypes", he), L(r, "childContextTypes", {
                        manager: n.object.isRequired
                    }), i
                }
                var Se = {
                        index: n.number.isRequired,
                        collection: n.oneOfType([n.number, n.string]),
                        disabled: n.bool
                    },
                    xe = Object.keys(Se);

                function De(e) {
                    var r, i, l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        withRef: !1
                    };
                    return i = r = function(n) {
                        function r() {
                            return g(this, r), w(this, S(r).apply(this, arguments))
                        }
                        return P(r, n), m(r, [{
                            key: "componentDidMount",
                            value: function() {
                                this.register()
                            }
                        }, {
                            key: "componentDidUpdate",
                            value: function(e) {
                                this.node && (e.index !== this.props.index && (this.node.sortableInfo.index = this.props.index), e.disabled !== this.props.disabled && (this.node.sortableInfo.disabled = this.props.disabled)), e.collection !== this.props.collection && (this.unregister(e.collection), this.register())
                            }
                        }, {
                            key: "componentWillUnmount",
                            value: function() {
                                this.unregister()
                            }
                        }, {
                            key: "register",
                            value: function() {
                                var e = this.props,
                                    t = e.collection,
                                    n = e.disabled,
                                    r = e.index,
                                    a = o.findDOMNode(this);
                                a.sortableInfo = {
                                    collection: t,
                                    disabled: n,
                                    index: r,
                                    manager: this.context.manager
                                }, this.node = a, this.ref = {
                                    node: a
                                }, this.context.manager.add(t, this.ref)
                            }
                        }, {
                            key: "unregister",
                            value: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props.collection;
                                this.context.manager.remove(e, this.ref)
                            }
                        }, {
                            key: "getWrappedInstance",
                            value: function() {
                                return C(l.withRef, "To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableElement() call"), this.refs.wrappedInstance
                            }
                        }, {
                            key: "render",
                            value: function() {
                                var n = l.withRef ? "wrappedInstance" : null;
                                return t.createElement(e, a({
                                    ref: n
                                }, W(this.props, xe)))
                            }
                        }]), r
                    }(t.Component), L(r, "displayName", Z("sortableElement", e)), L(r, "contextTypes", {
                        manager: n.object.isRequired
                    }), L(r, "propTypes", Se), L(r, "defaultProps", {
                        collection: 0
                    }), i
                }
                e.SortableContainer = we, e.sortableContainer = we, e.SortableElement = De, e.sortableElement = De, e.SortableHandle = ue, e.sortableHandle = ue, e.arrayMove = H, Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            }(t, n("q1tI"), n("17x9"), n("i8i4"))
        },
        "1m3A": function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return o
            })), n.d(t, "a", (function() {
                return r
            }));
            var o = "slim",
                r = "long"
        },
        "28mk": function(e, t, n) {
            "use strict";
            var o = n("cpVT"),
                r = n("L3+E"),
                a = n("Uuqm"),
                i = n("EgnU");

            function l(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function s(e) {
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
            t.a = s(s({
                buttonColor: {
                    type: r.FIELD_TYPES.COLOR_PICKER,
                    label: "Color",
                    possibleColors: i.signupButtonColorOptions
                },
                useCtaText: {
                    type: r.FIELD_TYPES.BOOLEAN,
                    label: "Use override default CTA"
                },
                ctaText: {
                    type: r.FIELD_TYPES.TEXT,
                    label: "Override Default CTA",
                    translatable: !0
                },
                signupWithsolutionAppReferenceId: {
                    type: r.FIELD_TYPES.TEXT,
                    label: "Solution Id:",
                    labelDescription: "Leave blank unless signup with solution needed - enter the solution's app reference id"
                }
            }, a.a), {}, {
                buttonId: {
                    type: r.FIELD_TYPES.TEXT,
                    label: "Button ID",
                    labelDescription: "board_kind in signup_main_cta_clicked BB event"
                },
                isMobileInputTransparent: {
                    type: r.FIELD_TYPES.BOOLEAN,
                    label: "Use mobile transparent input",
                    labelDescription: "To be used in case of white button"
                },
                signupProductId: {
                    type: r.FIELD_TYPES.PRODUCTS,
                    label: "Product",
                    labelDescription: "Signup to monday product"
                },
                signupClusterId: {
                    type: r.FIELD_TYPES.CLUSTERS,
                    label: "Cluster",
                    labelDescription: "Use only in generic pages if you want to assign a cluster"
                },
                showGoogleConnectOnMobile: {
                    type: r.FIELD_TYPES.BOOLEAN,
                    label: "Mobile google connect",
                    labelDescription: "Display google connect option in mobile pages"
                },
                existingAccount: {
                    type: r.FIELD_TYPES.NESTED,
                    label: "Existing account",
                    fields: {
                        platformUrlOverrideForExistingAccount: {
                            type: r.FIELD_TYPES.TEXT,
                            label: "Platform url override for existing account",
                            labelDescription: "Internal platform Url to redirect existing account to"
                        },
                        existingAccountCtaText: {
                            type: r.FIELD_TYPES.TEXT,
                            label: "Override Default CTA for existing account",
                            translatable: !0
                        }
                    }
                }
            })
        },
        "79or": function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return l
            })), n.d(t, "a", (function() {
                return s
            })), n.d(t, "c", (function() {
                return c
            })), n.d(t, "d", (function() {
                return p
            }));
            var o = n("r061"),
                r = n("jnSd"),
                a = n("tpvQ"),
                i = n("vBa2"),
                l = function(e) {
                    return o.a[e]
                },
                s = function(e) {
                    return r.a[e]
                },
                c = function(e) {
                    return !l(e) && !s(e) && ! function(e) {
                        return a.a[e]
                    }(e)
                },
                p = function(e) {
                    return e === i.a.SHAPE
                }
        },
        "7xOj": function(e, t, n) {
            "use strict";
            n.d(t, "f", (function() {
                return a
            })), n.d(t, "a", (function() {
                return i
            })), n.d(t, "b", (function() {
                return l
            })), n.d(t, "c", (function() {
                return s
            })), n.d(t, "e", (function() {
                return c
            })), n.d(t, "d", (function() {
                return p
            }));
            var o = n("lqvt"),
                r = n("0+51"),
                a = {
                    type: "nested",
                    label: "Text Config",
                    fields: {
                        color: {
                            type: "colorPicker",
                            label: "Text Color",
                            possibleColors: ["black", "white"]
                        },
                        titleLines: {
                            type: "multipleTexts",
                            label: "Title Lines (Up to 2, 250 chars per line)",
                            maxLimit: 2,
                            maxLineChars: 250
                        },
                        titleLinesFontSize: {
                            type: "text",
                            label: "Desktop title lines font size"
                        },
                        subtitleLines: {
                            type: "multipleTexts",
                            label: "Subtitle Lines (Up to 2, 150 chars per line)",
                            maxLimit: 2,
                            maxLineChars: 150
                        },
                        bullets: {
                            type: "multipleTexts",
                            label: "Bullets (Up to 3)",
                            maxLimit: 3
                        },
                        mobileTitleLines: {
                            type: "multipleTexts",
                            label: "Mobile Title Lines (Up to 3, if 3 subtitle won't appear, max 40 chars per line)",
                            maxLimit: 3,
                            maxLineChars: 40
                        },
                        mobileSubtitleLines: {
                            type: "multipleTexts",
                            label: "Mobile Subtitle Lines (Up to 2), max 40 chars per line",
                            maxLimit: 3,
                            maxLineChars: 40
                        }
                    }
                },
                i = {
                    type: "dynamic",
                    label: "Asset Type",
                    types: {
                        video: {
                            type: "videoPicker",
                            label: "Video Type",
                            videoType: o.b
                        }
                    }
                },
                l = {
                    type: "dynamic",
                    label: "Asset Type",
                    types: {
                        video: {
                            type: "videoPicker",
                            label: "Video Type",
                            videoType: o.a
                        }
                    }
                },
                s = {
                    type: "nested",
                    label: "Image and Backgound",
                    fields: {
                        imageSegmentHeight: {
                            type: "text",
                            label: "The height of the first screen (Must be defined by vh)"
                        },
                        backgroundColor: {
                            type: "colorPicker",
                            label: "Background Color",
                            possibleColors: ["brand-blue", "brand-purple", "brand-dark-blue", "brand-green", "transparent"]
                        },
                        imageAlign: {
                            type: "combo",
                            label: "Desktop image alignment",
                            options: [{
                                value: "align-center",
                                text: "Center"
                            }, {
                                value: "align-top",
                                text: "Top"
                            }, {
                                value: "align-bottom",
                                text: "Bottom"
                            }]
                        },
                        straightBorder: {
                            type: "boolean",
                            label: "Straight border"
                        },
                        src: {
                            type: "gallery",
                            defaultImagesKeys: ["static/img/templates/one-pager/boards/"],
                            label: "Select an image",
                            options: [{
                                value: "/static/img/boards/board-with-cactus-and-phone.png",
                                text: "Board with cactus and phone"
                            }, {
                                value: "/static/img/boards/board-with-column-picker.jpg",
                                text: "Board with column picker"
                            }, {
                                value: "/static/img/boards/board-with-conversation.png",
                                text: "Board with conversation"
                            }, {
                                value: "/static/img/boards/board-with-earphones.png",
                                text: "Board with earphones"
                            }, {
                                value: "/static/img/boards/board-with-notifications.jpg",
                                text: "Board with notifications"
                            }, {
                                value: "/static/img/boards/board-with-pencils.png",
                                text: "Board with pencils"
                            }, {
                                value: "/static/img/boards/board-with-person-picker.jpg",
                                text: "Board with person picker"
                            }, {
                                value: "/static/img/boards/board-with-status-menu.jpg",
                                text: "Board with status menu"
                            }, {
                                value: "/static/img/boards/board-with-yellow-coffee-cup.png",
                                text: "Board with yellow coffee cup"
                            }, {
                                value: "/static/img/boards/cactus-with-board.png",
                                text: "Board with cactus"
                            }, {
                                value: "/static/img/boards/upload-file-board.jpg",
                                text: "Board with upload file"
                            }]
                        },
                        alt: {
                            type: "text",
                            label: "Image description (important for SEO)"
                        }
                    }
                },
                c = {
                    type: "combo",
                    label: "Select page mobile version",
                    options: [{
                        value: r.a.MOBILE_BACKGROUND_GIF,
                        text: "Mobile background gif"
                    }, {
                        value: r.a.MOBILE_ASSET,
                        text: "Mobile Asset"
                    }]
                },
                p = {
                    type: "gallery",
                    label: "Mobile asset (Gif). Appears only in case mobile version is 'Mobile Asset'",
                    defaultImagesKeys: ["static/img/templates/one-pager/mobile/"]
                }
        },
        EgnU: function(e, t, n) {
            "use strict";
            var o, r = n("AroE")(n("cpVT")),
                a = n("/Z+I"),
                i = n("/Z+I"),
                l = i.WHITE_COLOR_NAME,
                s = i.RIVERSTONE_COLOR_NAME,
                c = i.PROJECTS_ORANGE_COLOR_NAME,
                p = i.MARKETING_RED_COLOR_NAME,
                u = i.CRM_GREEN_COLOR_NAME,
                d = i.DEV_GREEN_COLOR_NAME,
                b = i.WORK_OS_IRIS_COLOR_NAME,
                f = i.LIGHT_PROJECTS_ORANGE_COLOR_NAME,
                g = i.LIGHT_MARKETING_RED_COLOR_NAME,
                h = i.LIGHT_CRM_GREEN_COLOR_NAME,
                y = i.LIGHT_DEV_GREEN_COLOR_NAME,
                m = i.LIGHT_WORK_OS_IRIS_COLOR_NAME,
                E = i.DARK_PROJECTS_ORANGE_COLOR_NAME,
                v = i.DARK_MARKETING_RED_COLOR_NAME,
                O = i.DARK_CRM_GREEN_COLOR_NAME,
                T = i.DARK_DEV_GREEN_COLOR_NAME,
                w = i.DARK_WORK_OS_IRIS_COLOR_NAME,
                S = i.SPACE_BLUE_COLOR_NAME,
                x = i.SIGN_UP_WITH_PRODUCTS_COLOR_NAME,
                D = i.BACKGROUND_GRAY_COLOR_NAME,
                P = i.BRAND_BLACK_TEXT_COLOR,
                _ = i.DODGER_BLUE_COLOR_NAME,
                L = i.BLUE_COLOR_NAME,
                C = i.SPACE_BLUE_GRADIANT_COLOR_NAME,
                I = i.SPACE_BLUE_VIDEO_ONLY_COLOR_NAME,
                j = i.SPACE_BLUE_VIDEO_ONLY_DESKTOP_COLOR_NAME,
                R = i.ELEVATE_BANNER_GRADIANT_COLOR_NAME,
                k = i.ELEVATE_BUTTON_GRADIANT_COLOR_NAME,
                N = i.BRAND_WORK_MANAGEMENT_PRIMARY_COLOR,
                A = i.BRAND_WORK_MANAGEMENT_LIGHTER_TINT_01,
                F = i.BRAND_AND_WORK_MANAGEMENT_LIGHT_TINT_02,
                B = i.BRAND_AND_WORK_MANAGEMENT_DARK_TINT_01,
                Y = i.BRAND_AND_WORK_MANAGEMENT_DARKER_TINT_02,
                M = i.BRAND_PRIMARY_YELLOW,
                H = i.BRAND_YELLOW_DARK_TINT_01,
                W = i.BRAND_YELLOW_DARKER_TINT_02,
                G = i.BRAND_PRIMARY_RED,
                K = i.BRAND_RED_DARK_TINT_01,
                X = i.BRAND_RED_DARKER_TINT_02,
                U = i.BRAND_PRIMARY_GREEN,
                V = i.BRAND_GREEN_DARK_TINT_01,
                z = i.BRAND_GREEN_DARKER_TINT_02,
                J = i.BRAND_DARK_COLOR,
                q = i.BRAND_BLACK_BACKGROUND_COLOR,
                Q = i.CRM_PRIMARY_COLOR,
                Z = i.CRM_LIGHTER_TINT_01,
                $ = i.CRM_LIGHT_TINT_02,
                ee = i.CRM_DARK_TINT_01,
                te = i.CRM_DARKER_TINT_02,
                ne = i.DEV_PRIMARY_COLOR,
                oe = i.DEV_LIGHTER_TINT_01,
                re = i.DEV_LIGHT_TINT_02,
                ae = i.DEV_DARK_TINT_01,
                ie = i.DEV_DARKER_TINT_02,
                le = i.MARKETER_PRIMARY_COLOR,
                se = i.MARKETER_LIGHTER_TINT_01,
                ce = i.MARKETER_LIGHT_TINT_02,
                pe = i.MARKETER_DARK_TINT_01,
                ue = i.MARKETER_DARKER_TINT_02,
                de = i.PROJECTS_PRIMARY_COLOR,
                be = i.PROJECTS_LIGHTER_TINT_01,
                fe = i.PROJECTS_LIGHT_TINT_02,
                ge = i.PROJECTS_DARK_TINT_01,
                he = i.PROJECTS_DARKER_TINT_02,
                ye = i.PROJECTS_DARKEST_TINT_03,
                me = [{
                    value: "brand-red",
                    label: "Red"
                }, {
                    value: "brand-enterprise-dark",
                    label: "Dark Enterprise"
                }, {
                    value: "brand-green",
                    label: "Green"
                }, {
                    value: "brand-purple",
                    label: "Purple"
                }, {
                    value: "brand-pink",
                    label: "Pink"
                }, {
                    value: "brand-blue",
                    label: "Blue"
                }, {
                    value: "brand-iris",
                    label: "Iris"
                }, {
                    value: "brand-light-blue",
                    label: "Light Blue"
                }, {
                    value: "brand-dark-blue",
                    label: "Dark Blue"
                }, {
                    value: "transparent",
                    label: "Transparent"
                }, {
                    value: "snow",
                    label: "Snow"
                }, {
                    value: "purple",
                    label: "Purple"
                }, {
                    value: "iris",
                    label: "Iris"
                }, {
                    value: "royal",
                    label: "Royal"
                }, {
                    value: "green",
                    label: "Green"
                }, {
                    value: "yellow",
                    label: "Yellow"
                }, {
                    value: s,
                    label: "Riverstone"
                }, {
                    value: "pink",
                    label: "Pink"
                }, {
                    value: L,
                    label: "Blue"
                }, {
                    value: "enterprise",
                    label: "Enterprise Blue"
                }, {
                    value: "gradiant-gray",
                    label: "Gradiant Gray"
                }, {
                    value: a.GRADIANT_BRAND_GRAY_COLOR_NAME,
                    label: "Gradiant Brand Gray (new)"
                }, {
                    value: "gradiant-pink",
                    label: "Gradiant Pink"
                }, {
                    value: _,
                    label: "Dodger Blue"
                }, {
                    value: "light-blue",
                    label: "Light Blue"
                }, {
                    value: "green-2",
                    label: "Green"
                }, {
                    value: "dark-green",
                    label: "Grass Green"
                }, {
                    value: "bright-green",
                    label: "Bright Green"
                }, {
                    value: "saladish",
                    label: "Saladish"
                }, {
                    value: "dark-orange",
                    label: "Dark Orange"
                }, {
                    value: "brand-yellow",
                    label: "Egg Yolk"
                }, {
                    value: "red",
                    label: "Dark Red"
                }, {
                    value: "sofia-pink",
                    label: "Sofia Pink"
                }, {
                    value: "lipstick",
                    label: "Lipstick"
                }, {
                    value: "dark-purple",
                    label: "Dark purple"
                }, {
                    value: "purple-v2",
                    label: "Purple"
                }, {
                    value: "orange",
                    label: "Orange"
                }, {
                    value: "dark-blue-v2",
                    label: "Dark Blue"
                }, {
                    value: "light-blue-v2",
                    label: "Light Blue"
                }, {
                    value: "chill-blue",
                    label: "Chill Blue"
                }, {
                    value: "silver",
                    label: "Explosive"
                }, {
                    value: "brand-gray",
                    label: "American Gray"
                }, {
                    value: l,
                    label: "White"
                }, {
                    value: a.GAINSBORO_COLOR_NAME,
                    label: "Gainsboro"
                }, {
                    value: "brown",
                    label: "Brown"
                }, {
                    value: "sunset",
                    label: "Sunset"
                }, {
                    value: "bubble",
                    label: "Bubble"
                }, {
                    value: "peach",
                    label: "Peach"
                }, {
                    value: "berry",
                    label: "Berry"
                }, {
                    value: "winter",
                    label: "Winter"
                }, {
                    value: "river",
                    label: "River"
                }, {
                    value: "navy",
                    label: "Navy"
                }, {
                    value: "aquamarine",
                    label: "Aquamarine"
                }, {
                    value: "indigo",
                    label: "Indigo"
                }, {
                    value: "dark-indigo",
                    label: "Dark Indigo"
                }, {
                    value: p,
                    label: "Marketing red"
                }, {
                    value: u,
                    label: "CRM green"
                }, {
                    value: c,
                    label: "Projects orange"
                }, {
                    value: d,
                    label: "Software green"
                }, {
                    value: b,
                    label: "Brand & WM Primary Color"
                }, {
                    value: a.WORKFORMS_RED_COLOR_NAME,
                    label: "Workforms red"
                }, {
                    value: g,
                    label: "Marketing red - light"
                }, {
                    value: h,
                    label: "CRM green - light"
                }, {
                    value: f,
                    label: "Projects orange - light"
                }, {
                    value: y,
                    label: "Software green - light"
                }, {
                    value: m,
                    label: "Work OS Iris - light"
                }, {
                    value: v,
                    label: "Marketing red - dark"
                }, {
                    value: O,
                    label: "CRM green - dark"
                }, {
                    value: E,
                    label: "Projects orange - dark"
                }, {
                    value: T,
                    label: "Software green - dark"
                }, {
                    value: w,
                    label: "Work OS Iris - dark"
                }, {
                    value: S,
                    label: "Space blue"
                }, {
                    value: x,
                    label: "Sign up with products background"
                }, {
                    value: D,
                    label: "Background gray"
                }, {
                    value: C,
                    label: "Space blue gradiant"
                }, {
                    value: I,
                    label: "Don't use - Space blue video only"
                }, {
                    value: j,
                    label: "Don't use - Space blue video only - desktop"
                }, {
                    value: R,
                    label: "Elevate Banner"
                }, {
                    value: k,
                    label: "Elevate Button"
                }, {
                    value: N,
                    label: "Brand & WM Primary Color"
                }, {
                    value: a.BRAND_WORK_MANAGEMENT_CONTRAST_COLOR_NAME,
                    label: "Brand & WM Contrast Color"
                }, {
                    value: A,
                    label: "Brand & WM Lighter Tint 01"
                }, {
                    value: F,
                    label: "Brand & WM Light Tint 02"
                }, {
                    value: B,
                    label: "Brand & WM Dark Tint 01"
                }, {
                    value: Y,
                    label: "Brand & WM Darker Tint 02"
                }, {
                    value: M,
                    label: "Brand Primary Yellow"
                }, {
                    value: H,
                    label: "Brand Yellow Dark Tint 01"
                }, {
                    value: W,
                    label: "Brand Yellow Darker Tint 02"
                }, {
                    value: G,
                    label: "Brand Primary Red"
                }, {
                    value: K,
                    label: "Brand Red Dark Tint 01"
                }, {
                    value: X,
                    label: "Brand Red Darker Tint 02"
                }, {
                    value: U,
                    label: "Brand Primary Green"
                }, {
                    value: V,
                    label: "Brand Green Dark Tint 01"
                }, {
                    value: z,
                    label: "Brand Green Darker Tint 02"
                }, {
                    value: J,
                    label: "Dark"
                }, {
                    value: P,
                    label: "Blackish Text Color"
                }, {
                    value: q,
                    label: "Black Background Color"
                }, {
                    value: Q,
                    label: "CRM Primary Color"
                }, {
                    value: Z,
                    label: "CRM Lighter Tint 01"
                }, {
                    value: $,
                    label: "CRM Light Tint 02"
                }, {
                    value: ee,
                    label: "CRM Dark Tint 01"
                }, {
                    value: te,
                    label: "CRM Darker Tint 02"
                }, {
                    value: ne,
                    label: "Dev Primary Color"
                }, {
                    value: oe,
                    label: "Dev Lighter Tint 01"
                }, {
                    value: re,
                    label: "Dev Light Tint 02"
                }, {
                    value: ae,
                    label: "Dev Dark Tint 01"
                }, {
                    value: ie,
                    label: "Dev Darker Tint 02"
                }, {
                    value: le,
                    label: "Marketer Primary Color"
                }, {
                    value: se,
                    label: "Marketer Lighter Tint 01"
                }, {
                    value: ce,
                    label: "Marketer Light Tint 02"
                }, {
                    value: pe,
                    label: "Marketer Dark Tint 01"
                }, {
                    value: ue,
                    label: "Marketer Darker Tint 02"
                }, {
                    value: de,
                    label: "Projects Primary Color"
                }, {
                    value: be,
                    label: "Projects Lighter Tint 01"
                }, {
                    value: fe,
                    label: "Projects Light Tint 02"
                }, {
                    value: ge,
                    label: "Projects Dark Tint 01"
                }, {
                    value: he,
                    label: "Projects Darker Tint 02"
                }, {
                    value: ye,
                    label: "Projects Darkest Tint 03"
                }],
                Ee = (o = {}, (0, r.default)(o, le, {
                    light: ce,
                    dark: pe
                }), (0, r.default)(o, Q, {
                    light: $,
                    dark: ee
                }), (0, r.default)(o, de, {
                    light: fe,
                    dark: ge
                }), (0, r.default)(o, ne, {
                    light: re,
                    dark: ae
                }), (0, r.default)(o, N, {
                    light: F,
                    dark: B
                }), o),
                ve = [q, l],
                Oe = [N, q, l, a.WORKFORMS_RED_COLOR_NAME],
                Te = [N, A, F, B, Y, M, H, W, G, K, X, U, V, z, D, l, J, q, P, Q, Z, $, ee, te, ne, oe, re, ae, ie, le, se, ce, pe, ue, de, be, fe, ge, he, ye, a.GAINSBORO_COLOR_NAME],
                we = Te,
                Se = Te,
                xe = Te;
            e.exports = {
                colorOptions: me,
                tagsSupportedColors: we,
                titleColorOptions: xe,
                productsColorOptions: Se,
                productsColorOptionsOvertonesMap: Ee,
                textColorOptions: ve,
                signupButtonColorOptions: Oe,
                newBrandColors: Te
            }
        },
        H20Q: function(e, t, n) {
            "use strict";
            n.d(t, "f", (function() {
                return o
            })), n.d(t, "x", (function() {
                return r.a
            })), n.d(t, "y", (function() {
                return r.b
            })), n.d(t, "e", (function() {
                return a
            })), n.d(t, "g", (function() {
                return i
            })), n.d(t, "j", (function() {
                return l
            })), n.d(t, "z", (function() {
                return s
            })), n.d(t, "v", (function() {
                return c
            })), n.d(t, "k", (function() {
                return p
            })), n.d(t, "B", (function() {
                return u
            })), n.d(t, "r", (function() {
                return d.f
            })), n.d(t, "m", (function() {
                return d.a
            })), n.d(t, "o", (function() {
                return d.c
            })), n.d(t, "n", (function() {
                return d.b
            })), n.d(t, "q", (function() {
                return d.e
            })), n.d(t, "p", (function() {
                return d.d
            })), n.d(t, "h", (function() {
                return b
            })), n.d(t, "i", (function() {
                return f
            })), n.d(t, "s", (function() {
                return h
            })), n.d(t, "u", (function() {
                return m
            })), n.d(t, "d", (function() {
                return E
            })), n.d(t, "t", (function() {
                return O
            })), n.d(t, "a", (function() {
                return T.a
            })), n.d(t, "c", (function() {
                return w
            })), n.d(t, "w", (function() {
                return S
            })), n.d(t, "l", (function() {
                return x
            })), n.d(t, "b", (function() {
                return D
            })), n.d(t, "A", (function() {
                return P
            }));
            var o = {
                    type: "nested",
                    label: "Comparison Table",
                    fields: {
                        title: {
                            type: "text",
                            label: "Title"
                        },
                        subtitle: {
                            type: "text",
                            label: "Subtitle"
                        },
                        competitorLogo: {
                            type: "nested",
                            label: "Competitor",
                            fields: {
                                src: {
                                    type: "gallery",
                                    defaultImagesKeys: ["static/img/templates/comparison-table/competitors/"],
                                    label: "Competitor Logo",
                                    options: [{
                                        value: "/static/img/competitors/trello.png",
                                        text: "Trello"
                                    }, {
                                        value: "/static/img/competitors/asana.png",
                                        text: "Asana"
                                    }, {
                                        value: "/static/img/competitors/atlassian.png",
                                        text: "Atlassian"
                                    }, {
                                        value: "/static/img/competitors/basecamp.png",
                                        text: "Basecamp"
                                    }, {
                                        value: "/static/img/competitors/confluence.png",
                                        text: "Confluence"
                                    }, {
                                        value: "/static/img/competitors/jira.png",
                                        text: "Jira"
                                    }, {
                                        value: "/static/img/competitors/sharepoint.png",
                                        text: "SharePoint"
                                    }, {
                                        value: "/static/img/competitors/slack.png",
                                        text: "Slack"
                                    }, {
                                        value: "/static/img/competitors/todoist.png",
                                        text: "Todoist"
                                    }, {
                                        value: "/static/img/competitors/smartsheet.png",
                                        text: "Smartsheet"
                                    }, {
                                        value: "/static/img/competitors/wrike.png",
                                        text: "Wrike"
                                    }, {
                                        value: "/static/img/competitors/wunderlist.png",
                                        text: "Wunderlist"
                                    }, {
                                        value: "/static/img/competitors/yammer.png",
                                        text: "Yammer"
                                    }]
                                },
                                height: {
                                    type: "text",
                                    label: "Image height % (optional, 50-100)"
                                }
                            }
                        },
                        features: {
                            type: "segments",
                            label: "Features",
                            types: {
                                feature: {
                                    type: "nested",
                                    fields: {
                                        title: {
                                            type: "combo",
                                            label: "Feature Title",
                                            options: ["In app communication", "Gantt chart", "Time management", "Files management", "Supports agile", "Budget management", "Export dashboards", "Mobile app", "Use templates", "24/7 support", "Subtasks", "Shareable dashboards", "Deadline management", "Time tracking", "Email notifications", "Fun giphys", "Client management ", "Full API", "Integrations", "Import from Excel"],
                                            otherOption: {
                                                text: "Put your own feature...",
                                                inputPlaceholder: "Put your own feature..."
                                            }
                                        },
                                        monday: {
                                            type: "combo",
                                            label: "Monday",
                                            options: [{
                                                value: "true",
                                                text: "Yes"
                                            }, {
                                                value: "false",
                                                text: "No"
                                            }],
                                            otherOption: {
                                                text: "Put your own text...",
                                                inputPlaceholder: "Put your own URL..."
                                            }
                                        },
                                        competitor: {
                                            type: "combo",
                                            label: "Competitor",
                                            options: [{
                                                value: "true",
                                                text: "Yes"
                                            }, {
                                                value: "false",
                                                text: "No"
                                            }],
                                            otherOption: {
                                                text: "Put your own text...",
                                                inputPlaceholder: "Put your own text..."
                                            }
                                        },
                                        bigTexts: {
                                            type: "boolean",
                                            label: "Big Texts"
                                        }
                                    }
                                }
                            }
                        }
                    },
                    defaultData: {
                        comparisonTable: {
                            title: "May the best product win!",
                            subtitle: "monday.com is powerful enough to track everything your team is working on\u2014so you can get results.",
                            features: []
                        }
                    }
                },
                r = n("QMea"),
                a = {
                    type: "nested",
                    label: "Collboration Config",
                    fields: {
                        show: {
                            type: "boolean",
                            label: "Show"
                        },
                        color: {
                            type: "colorPicker",
                            label: "Text Color",
                            possibleColors: ["black", "white"]
                        },
                        text: {
                            type: "text",
                            label: "Text"
                        },
                        imageUrl: {
                            type: "gallery",
                            label: "Select a logo",
                            defaultImagesKeys: ["static/img/templates/collaboration-with/podcast-logos/"],
                            options: [{
                                value: "/static/img/podcast-logos/codepen.png",
                                text: "Codepen"
                            }]
                        }
                    }
                },
                i = {
                    type: "nested",
                    label: "Coupon",
                    fields: {
                        code: {
                            type: "text",
                            label: "Code"
                        },
                        daysToExpire: {
                            type: "text",
                            label: "Expire Days"
                        }
                    }
                },
                l = {
                    type: "nested",
                    label: "Extend Trial Cookie, (Get token here: https://forms.monday.com/forms/4555757001e20a941a5d413f8953e80e?r=use1)",
                    fields: {
                        token: {
                            type: "text",
                            label: "Dev Token For Extending"
                        },
                        daysToExpire: {
                            type: "text",
                            label: "Expire Days From Visit"
                        }
                    }
                },
                s = {
                    type: "nested",
                    label: "Social Buttons",
                    fields: {
                        show: {
                            type: "boolean",
                            label: "Show social buttons"
                        },
                        color: {
                            type: "colorPicker",
                            label: "Text Color",
                            possibleColors: ["black", "white"]
                        },
                        blogStyle: {
                            type: "boolean",
                            label: "Blog style"
                        }
                    }
                },
                c = {
                    type: "nested",
                    label: "Popup Video",
                    fields: {
                        show: {
                            type: "boolean",
                            label: "Show"
                        },
                        videoId: {
                            type: "text",
                            label: "Youtube Video ID"
                        },
                        playButtonText: {
                            type: "text",
                            label: "Play Button Text"
                        },
                        footerText: {
                            type: "text",
                            label: "Popup Footer Text"
                        }
                    }
                },
                p = {
                    type: "nested",
                    label: "Footer Config",
                    fields: {
                        preventFooter: {
                            type: "boolean",
                            label: "Prevent Footer"
                        },
                        footerBg: {
                            type: "colorPicker",
                            label: "Footer Background",
                            possibleColors: ["snow"]
                        },
                        footerTextColor: {
                            type: "colorPicker",
                            label: "Footer Text Color",
                            possibleColors: ["black"]
                        }
                    }
                },
                u = {
                    type: "nested",
                    label: "Topbar Config",
                    fields: {
                        showMenu: {
                            type: "boolean",
                            label: "Show Menu"
                        },
                        shortHeader: {
                            type: "boolean",
                            label: "Short Header"
                        },
                        maxWidth: {
                            type: "text",
                            label: "Max Width"
                        }
                    }
                },
                d = n("7xOj"),
                b = {
                    type: "segments",
                    label: "Pages",
                    types: {
                        link: {
                            type: "nested",
                            label: "Link",
                            fields: {
                                image: {
                                    type: "gallery",
                                    label: "Select an image",
                                    defaultImagesKeys: ["static/img/templates/directory-list-data/thumbnails/"]
                                },
                                firstTitle: {
                                    type: "nested",
                                    label: "First Title Line",
                                    fields: {
                                        text: {
                                            type: "text",
                                            label: "Text"
                                        },
                                        decorator: {
                                            type: "text",
                                            label: "Text decorator"
                                        }
                                    }
                                },
                                secondTitle: {
                                    type: "nested",
                                    label: "Second Title Line",
                                    fields: {
                                        text: {
                                            type: "text",
                                            label: "Text"
                                        },
                                        decorator: {
                                            type: "text",
                                            label: "Text decorator"
                                        }
                                    }
                                },
                                subtitle: {
                                    type: "text",
                                    label: "Subtitle (Appears on hover)"
                                },
                                link: {
                                    type: "text",
                                    label: "Thumbnail Link (Appears on hover)"
                                },
                                buttomLink: {
                                    type: "nested",
                                    label: "Buttom Link (Appears on hover)",
                                    fields: {
                                        show: {
                                            type: "boolean",
                                            label: "Should Show link"
                                        },
                                        text: {
                                            type: "text",
                                            label: "Link text"
                                        },
                                        url: {
                                            type: "text",
                                            label: "URL / Path"
                                        },
                                        color: {
                                            type: "colorPicker",
                                            label: "Text Color",
                                            possibleColors: ["brand-blue", "black"]
                                        }
                                    }
                                },
                                hoverDecorator: {
                                    type: "nested",
                                    label: "Hover Decorator (Appears on hover)",
                                    fields: {
                                        show: {
                                            type: "boolean",
                                            label: "Should Show"
                                        },
                                        text: {
                                            type: "text",
                                            label: "Text"
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                f = {
                    type: "nested",
                    label: "Exit Popup",
                    fields: {
                        title: {
                            type: "text",
                            label: "Title"
                        },
                        subtitle: {
                            type: "text",
                            label: "Subtitle"
                        },
                        signupConfig: {
                            type: "nested",
                            label: "Signup Config",
                            fields: {
                                headerText: {
                                    type: "text",
                                    label: "Header Text"
                                },
                                buttonText: {
                                    type: "text",
                                    label: "Button Text"
                                },
                                inputPlaceholder: {
                                    type: "text",
                                    label: "Input Placeholder"
                                },
                                footerText: {
                                    type: "text",
                                    label: "Footer Text"
                                }
                            }
                        }
                    }
                },
                g = n("L3+E"),
                h = {
                    type: g.FIELD_TYPES.NESTED,
                    label: "Paragraph",
                    fields: {
                        textDirection: {
                            type: g.FIELD_TYPES.COMBO,
                            label: "Text Direction",
                            options: [{
                                value: "left",
                                text: "Left"
                            }, {
                                value: "center",
                                text: "Center"
                            }, {
                                value: "right",
                                text: "Right"
                            }]
                        },
                        topic: {
                            type: g.FIELD_TYPES.NESTED,
                            label: "Topic",
                            fields: {
                                text: {
                                    type: g.FIELD_TYPES.TEXT,
                                    label: "Text"
                                },
                                color: {
                                    type: g.FIELD_TYPES.COLOR_PICKER,
                                    label: "Color"
                                }
                            }
                        },
                        title: {
                            type: g.FIELD_TYPES.TEXT,
                            label: "Title"
                        },
                        titleFontSize: {
                            type: g.FIELD_TYPES.TEXT,
                            label: "Title Font Size"
                        },
                        body: {
                            type: g.FIELD_TYPES.MULTIPLE_TEXTS,
                            label: "Body"
                        },
                        showSignup: {
                            type: g.FIELD_TYPES.BOOLEAN,
                            label: "Show Signup"
                        },
                        signupForm: r.a
                    }
                },
                y = h;
            y.fields.bottomLink = {
                type: g.FIELD_TYPES.NESTED,
                label: "Bottom Link",
                fields: {
                    text: {
                        type: g.FIELD_TYPES.TEXT,
                        label: "Text"
                    },
                    href: {
                        type: g.FIELD_TYPES.TEXT,
                        label: "Url"
                    }
                }
            };
            var m = y,
                E = (g.FIELD_TYPES.MULTIPLE_NESTED, g.FIELD_TYPES.NESTED, g.FIELD_TYPES.GALLERY, {
                    type: g.FIELD_TYPES.MULTIPLE_NESTED,
                    label: "Image With Text",
                    maxLimit: 10,
                    nestedConfig: {
                        type: g.FIELD_TYPES.NESTED,
                        fields: {
                            url: {
                                type: g.FIELD_TYPES.GALLERY,
                                label: "Image",
                                defaultImagesKeys: []
                            },
                            href: {
                                type: g.FIELD_TYPES.TEXT,
                                label: "Link To"
                            }
                        }
                    }
                }),
                v = n("lqvt"),
                O = {
                    type: g.FIELD_TYPES.NESTED,
                    label: "Text and Asset",
                    fields: {
                        content: {
                            type: g.FIELD_TYPES.NESTED,
                            label: "Content",
                            fields: {
                                topic: {
                                    type: g.FIELD_TYPES.NESTED,
                                    label: "Topic",
                                    fields: {
                                        text: {
                                            type: g.FIELD_TYPES.TEXT,
                                            label: "Text"
                                        },
                                        color: {
                                            type: g.FIELD_TYPES.COLOR_PICKER,
                                            label: "Color"
                                        }
                                    }
                                },
                                image: {
                                    type: g.FIELD_TYPES.NESTED,
                                    label: "Title image",
                                    fields: {
                                        src: {
                                            type: g.FIELD_TYPES.GALLERY,
                                            defaultImagesKeys: ["static/img/templates/long-template/boards/"],
                                            label: "Select an Image"
                                        },
                                        alt: {
                                            type: g.FIELD_TYPES.TEXT,
                                            label: "Image description (alt)"
                                        }
                                    }
                                },
                                title: {
                                    type: g.FIELD_TYPES.TEXT,
                                    label: "Title"
                                },
                                body: {
                                    type: g.FIELD_TYPES.MULTIPLE_TEXTS,
                                    label: "Content",
                                    textArea: !0,
                                    maxLineChars: 574
                                },
                                bottomLink: {
                                    type: g.FIELD_TYPES.NESTED,
                                    label: "Bottom Link",
                                    fields: {
                                        text: {
                                            type: g.FIELD_TYPES.TEXT,
                                            label: "Text"
                                        },
                                        href: {
                                            type: g.FIELD_TYPES.TEXT,
                                            label: "Url"
                                        }
                                    }
                                }
                            }
                        },
                        asset: {
                            type: g.FIELD_TYPES.NESTED,
                            label: "Asset",
                            fields: {
                                shadow: {
                                    type: g.FIELD_TYPES.BOOLEAN,
                                    label: "Shadow Frame"
                                },
                                side: {
                                    type: g.FIELD_TYPES.COMBO,
                                    label: "Asset Location",
                                    options: ["left", "right"]
                                },
                                image: {
                                    type: g.FIELD_TYPES.NESTED,
                                    label: "Image",
                                    fields: {
                                        src: {
                                            type: g.FIELD_TYPES.GALLERY,
                                            defaultImagesKeys: ["static/img/templates/long-template/boards/"],
                                            label: "Select an Image"
                                        },
                                        alt: {
                                            type: g.FIELD_TYPES.TEXT,
                                            label: "Image description (alt)"
                                        }
                                    }
                                },
                                video: {
                                    type: g.FIELD_TYPES.NESTED,
                                    label: "Add a Video",
                                    fields: {
                                        src: {
                                            type: g.FIELD_TYPES.VIDEO_PICKER,
                                            label: "Video",
                                            videoType: v.c
                                        },
                                        loop: {
                                            type: g.FIELD_TYPES.BOOLEAN,
                                            label: "Loop",
                                            options: ["Yes", "No"]
                                        },
                                        playWhenVisible: {
                                            type: g.FIELD_TYPES.BOOLEAN,
                                            label: "Play Only When Visible",
                                            options: ["Yes", "No"]
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                T = n("zd4H"),
                w = {
                    type: g.FIELD_TYPES.NESTED,
                    label: "Circle",
                    fields: {
                        position: {
                            type: "text",
                            label: "position"
                        },
                        width: {
                            type: "text",
                            label: "Width"
                        },
                        height: {
                            type: "text",
                            label: "Height"
                        },
                        background: {
                            type: "text",
                            label: "background"
                        },
                        top: {
                            type: "text",
                            label: "top"
                        },
                        left: {
                            type: "text",
                            label: "left"
                        },
                        zIndex: {
                            type: "text",
                            label: "z index"
                        },
                        borderRadius: {
                            type: "text",
                            label: "border radius"
                        }
                    }
                },
                S = {
                    type: g.FIELD_TYPES.COMBO,
                    label: "Show Segment",
                    options: [{
                        value: "all",
                        text: "All"
                    }, {
                        value: "desktop",
                        text: "Desktop Only"
                    }, {
                        value: "mobile",
                        text: "Mobile Only"
                    }]
                },
                x = {
                    type: g.FIELD_TYPES.COMBO,
                    label: "Mobile Image width Ratio",
                    options: ["0.1", "0.2", "0.3", "0.4", "0.5", {
                        value: "0.6",
                        text: "0.6 (Default)"
                    }, "0.7", "0.8", "0.9", "1"]
                },
                D = {
                    type: g.FIELD_TYPES.NESTED,
                    label: "Button Link",
                    fields: {
                        color: {
                            type: g.FIELD_TYPES.COLOR_PICKER,
                            label: "Color"
                        },
                        textColor: {
                            type: g.FIELD_TYPES.COLOR_PICKER,
                            label: "Text Color"
                        },
                        fontSize: {
                            type: g.FIELD_TYPES.TEXT,
                            label: "Font Size"
                        },
                        text: {
                            type: g.FIELD_TYPES.TEXT,
                            label: "Text"
                        },
                        shouldForwardUrlParams: {
                            type: g.FIELD_TYPES.BOOLEAN,
                            label: "Should forward url params"
                        },
                        href: {
                            type: g.FIELD_TYPES.TEXT,
                            label: "URL"
                        },
                        placement: {
                            type: g.FIELD_TYPES.TEXT,
                            label: "BigBrain Placement"
                        }
                    }
                },
                P = {
                    type: g.FIELD_TYPES.NESTED,
                    label: "Stars",
                    fields: {
                        paddingTop: {
                            type: g.FIELD_TYPES.TEXT,
                            label: "Padding top"
                        },
                        showStars: {
                            type: g.FIELD_TYPES.BOOLEAN,
                            label: "Show stars"
                        },
                        numberOfSelectedStars: {
                            type: g.FIELD_TYPES.TEXT,
                            label: "Number of selected stars"
                        }
                    }
                }
        },
        QMea: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            })), n.d(t, "b", (function() {
                return i
            }));
            var o = n("L3+E"),
                r = {
                    type: o.FIELD_TYPES.NESTED,
                    label: "Signup Config",
                    fields: {
                        buttonColor: {
                            type: o.FIELD_TYPES.COLOR_PICKER,
                            label: "Button Color",
                            possibleColors: ["space-blue", "dodger-blue", "blue", "iris", "white"]
                        },
                        buttonText: {
                            type: o.FIELD_TYPES.TEXT,
                            label: "Button Text"
                        },
                        inputPlaceholder: {
                            type: o.FIELD_TYPES.TEXT,
                            label: "Input Placeholder"
                        },
                        showDownloadButtonOnMobile: {
                            type: o.FIELD_TYPES.BOOLEAN,
                            label: "Show download button on mobile"
                        },
                        downloadButtonTitle: {
                            type: o.FIELD_TYPES.TEXT,
                            label: "Download button title"
                        },
                        placement: {
                            type: o.FIELD_TYPES.TEXT,
                            label: "BigBrain Event Placement"
                        },
                        focusOnLoad: {
                            type: o.FIELD_TYPES.BOOLEAN,
                            label: "Auto Focus"
                        }
                    }
                },
                a = r;
            a.fields.showDecorations = {
                type: o.FIELD_TYPES.BOOLEAN,
                label: "Show decorations"
            };
            var i = a
        },
        QuVX: function(e, t, n) {
            "use strict";
            var o = n("cpVT"),
                r = n("L3+E"),
                a = n("eL1y"),
                i = n("pIH8"),
                l = n("Uuqm");

            function s(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }
            t.a = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? s(Object(n), !0).forEach((function(t) {
                        Object(o.default)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }({
                buttonSize: {
                    type: r.FIELD_TYPES.COMBO,
                    label: "Size",
                    options: [{
                        value: i.d,
                        text: "Small"
                    }, {
                        value: i.c,
                        text: "Medium"
                    }, {
                        value: i.b,
                        text: "Large"
                    }]
                },
                buttonText: {
                    type: r.FIELD_TYPES.TEXT,
                    label: "Text",
                    translatable: !0
                },
                url: {
                    type: r.FIELD_TYPES.TEXT,
                    label: "Url"
                },
                isOpenLinkInNewTab: {
                    type: r.FIELD_TYPES.BOOLEAN,
                    label: "Open link in new tab"
                },
                color: {
                    type: r.FIELD_TYPES.COLOR_PICKER,
                    label: "Color",
                    possibleColors: a.b
                },
                outline: {
                    type: r.FIELD_TYPES.BOOLEAN,
                    label: "White button with color outline"
                }
            }, l.a)
        },
        RrTa: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return F
            })), n.d(t, "b", (function() {
                return B
            }));
            var o = n("cpVT"),
                r = n("q1tI"),
                a = n("H+61"),
                i = n("UlJF"),
                l = n("+Css"),
                s = n("7LId"),
                c = n("VIvw"),
                p = n("iHvq"),
                u = n("MX0m"),
                d = n.n(u),
                b = n("TSYQ"),
                f = n.n(b),
                g = n("xwfA"),
                h = n("SQRZ"),
                y = "2px solid ".concat(g.a["bold-blue"]),
                m = [".preview-base-segment-component{height:100%;width:100%;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background:white;cursor:pointer;}", ".preview-base-segment-component.preview-base-template-draggable-helper-element{overflow:hidden;box-shadow:0px 2px 16px 0 rgba(0,0,0,0.2);cursor:move;}", ".preview-base-segment-component.preview-base-template-draggable-helper-element .preview-overlay,.preview-base-segment-component.preview-base-template-draggable-helper-element .base-layout-segment-component{zoom:50%;}", ".preview-base-segment-component:hover .preview-overlay,.preview-base-segment-component.is-selected .preview-overlay,.preview-base-segment-component.preview-base-template-draggable-helper-element .preview-overlay{border:".concat("2px dashed #c6e2e8", ";opacity:1;}"), ".preview-base-segment-component.is-selected .preview-overlay{border:".concat(y, ";}"), ".preview-base-segment-component .preview-overlay{position:absolute;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:32px 0 0 32px;top:0;right:0;bottom:0;left:0;z-index:".concat(h.a, ";-webkit-transition:opacity 200ms ease;transition:opacity 200ms ease;opacity:0;border:2px solid transparent;pointer-events:none;}"), ".preview-base-segment-component .preview-overlay .icon-wrapper{position:relative;margin:6px;background:white;box-shadow:0 4px 8px 0 rgba(0,0,0,0.16);border-radius:8px;height:60px;width:60px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-transition:-webkit-transform 150ms ease;-webkit-transition:transform 150ms ease;transition:transform 150ms ease;pointer-events:all;z-index:".concat(h.o, ";}"), ".preview-base-segment-component .preview-overlay .icon-wrapper:hover{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);}", ".preview-base-segment-component .preview-overlay .icon-wrapper svg{height:36px;width:36px;}", ".preview-base-segment-component .preview-overlay .icon-wrapper.drag-icon-wrapper{cursor:move;}", ".preview-base-segment-component .preview-overlay .icon-wrapper.edit-icon-wrapper{cursor:pointer;}", ".preview-base-segment-component .preview-overlay .icon-wrapper.remove-icon-wrapper{cursor:pointer;}", ".preview-base-segment-component .preview-overlay .icon-wrapper.copy-icon-wrapper{cursor:pointer;}", ".preview-base-segment-component .preview-overlay .icon-wrapper.paste-icon-wrapper{cursor:pointer;}", ".preview-base-segment-component .preview-overlay .icon-wrapper.disabled{background:#d6d4d4;cursor:auto;}", ".preview-base-segment-component .preview-overlay .icon-wrapper.disabled:hover{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}", ".icon-wrapper-tooltip{font-size:1.238rem;top:45px !important;z-index:".concat(h.o, ";}"), ".has-copied{position:absolute;bottom:-20px;font-size:1rem;}"];
            m.__hash = "3280013088";
            var E = n("0zu5"),
                v = n("cpGi"),
                O = n("79or"),
                T = n("nKUr");

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
                    var n, o = Object(p.default)(e);
                    if (t) {
                        var r = Object(p.default)(this).constructor;
                        n = Reflect.construct(o, arguments, r)
                    } else n = o.apply(this, arguments);
                    return Object(c.default)(this, n)
                }
            }

            function S(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function x(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? S(Object(n), !0).forEach((function(t) {
                        Object(o.default)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : S(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var D = function(e) {
                    return Object(T.jsxs)("svg", x(x({
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, e), {}, {
                        children: [Object(T.jsx)("path", {
                            d: "M14.795 1.21a2.42 2.42 0 0 0-3.438.023l-9.644 9.64L.5 15.5l4.628-1.213 9.643-9.64a2.419 2.419 0 0 0 .024-3.438zM11.08 1.509l3.415 3.413M9.688 2.9l3.415 3.414",
                            stroke: "#1D1E3D",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }), Object(T.jsx)("path", {
                            d: "M1.713 10.873l2.394 1.022 1.024 2.389M11.395 4.607l-7.288 7.287",
                            stroke: "#1D1E3D",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })]
                    }))
                },
                P = function(e) {
                    return Object(T.jsx)("svg", x(x({
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, e), {}, {
                        children: Object(T.jsx)("path", {
                            d: "M1 3h14M9.5 1h-3a1 1 0 0 0-1 1v1h5V2a1 1 0 0 0-1-1zM6.5 11.5v-5M9.5 11.5v-5M12.577 14.083a1 1 0 0 1-.997.917H4.42a1 1 0 0 1-.996-.917L2.5 3h11l-.923 11.083z",
                            stroke: "#000",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })
                    }))
                },
                _ = function(e) {
                    return Object(T.jsx)("svg", x(x({
                        width: "13",
                        height: "15",
                        viewBox: "0 0 13 15",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, e), {}, {
                        children: Object(T.jsx)("path", {
                            d: "M9.333 0h-8C.597 0 0 .597 0 1.333v9.334h1.333V1.333h8V0zm2 2.667H4c-.737 0-1.333.596-1.333 1.333v9.333c0 .737.596 1.334 1.333 1.334h7.333c.737 0 1.334-.597 1.334-1.334V4c0-.737-.597-1.333-1.334-1.333zm0 10.666H4V4h7.333v9.333z",
                            fill: "#1D1E3D"
                        })
                    }))
                },
                L = function(e) {
                    return Object(T.jsx)("svg", x(x({
                        width: "12",
                        height: "14",
                        viewBox: "0 0 12 14",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, e), {}, {
                        children: Object(T.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M1.333 0h8v1.333h-8v9.334H0V1.333C0 .597.597 0 1.333 0zM3 5.35h1V4h2.1V3H4a1 1 0 0 0-1 1v1.35zM8.9 3v1H11v1.35h1V4a1 1 0 0 0-1-1H8.9zm0 11v-1H11v-1.35h1V13a1 1 0 0 1-1 1H8.9zm-2.8 0v-1H4v-1.35H3V13a1 1 0 0 0 1 1h2.1zM3 7.15h1v2.7H3v-2.7zm9 2.7h-1v-2.7h1v2.7z",
                            fill: "#1D1E3D"
                        })
                    }))
                },
                C = function(e) {
                    return Object(T.jsxs)("svg", x(x({
                        width: "9",
                        height: "14",
                        viewBox: "0 0 9 14",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, e), {}, {
                        children: [Object(T.jsx)("title", {
                            children: "Group"
                        }), Object(T.jsxs)("g", {
                            fill: "#333",
                            fillRule: "evenodd",
                            children: [Object(T.jsx)("rect", {
                                x: ".084",
                                y: ".928",
                                width: "3",
                                height: "3",
                                rx: "1.5"
                            }), Object(T.jsx)("rect", {
                                x: "5.084",
                                y: ".928",
                                width: "3",
                                height: "3",
                                rx: "1.5"
                            }), Object(T.jsx)("rect", {
                                x: ".084",
                                y: "5.928",
                                width: "3",
                                height: "3",
                                rx: "1.5"
                            }), Object(T.jsx)("rect", {
                                x: "5.084",
                                y: "5.928",
                                width: "3",
                                height: "3",
                                rx: "1.5"
                            }), Object(T.jsx)("rect", {
                                x: ".084",
                                y: "10.928",
                                width: "3",
                                height: "3",
                                rx: "1.5"
                            }), Object(T.jsx)("rect", {
                                x: "5.084",
                                y: "10.928",
                                width: "3",
                                height: "3",
                                rx: "1.5"
                            })]
                        })]
                    }))
                },
                I = Object(E.sortableHandle)((function() {
                    return Object(T.jsx)(C, {})
                })),
                j = 250,
                R = function(e) {
                    Object(s.default)(n, e);
                    var t = w(n);

                    function n(e) {
                        var i;
                        return Object(a.default)(this, n), i = t.call(this, e), Object(o.default)(Object(l.a)(i), "editComponent", (function(e) {
                            var t = i.props,
                                n = t.index;
                            (0, t.setSelectedSegmentIndex)(n), e.stopPropagation()
                        })), Object(o.default)(Object(l.a)(i), "removeSegment", (function(e) {
                            var t = i.props,
                                n = t.index;
                            (0, t.onRemoveSegment)(n), e.stopPropagation()
                        })), Object(o.default)(Object(l.a)(i), "copySegmant", (function(e) {
                            var t = i.props;
                            (0, t.setCopiedSegment)(t.segment), e.stopPropagation(), i.setState({
                                hasCopied: !0
                            }), setTimeout((function() {
                                i.setState({
                                    hasCopied: !1
                                })
                            }), 2e3)
                        })), Object(o.default)(Object(l.a)(i), "pasteSegment", (function(e) {
                            if (!i.isPasteSegmentDisabled()) {
                                var t = i.props,
                                    n = t.copiedSegment,
                                    o = t.onPasteSegment,
                                    r = t.index;
                                n && (o(r, n), e.stopPropagation())
                            }
                        })), Object(o.default)(Object(l.a)(i), "getPreviewBaseLayoutStyle", (function() {
                            var e = i.props.segment;
                            return e.props && e.props.baseLayoutStyleProps
                        })), Object(o.default)(Object(l.a)(i), "childrenRendererWithoutBaseLayoutStyles", (function() {
                            var e = i.props.children;
                            if (!(e && e.props && e.props.segment && e.props.segment.props)) return e;
                            var t = x(x({}, e.props), {}, {
                                segment: x(x({}, e.props.segment), {}, {
                                    props: x(x({}, e.props.segment.props), {}, {
                                        baseLayoutStyleProps: null
                                    })
                                })
                            });
                            return Object(r.cloneElement)(e, t)
                        })), Object(o.default)(Object(l.a)(i), "isPasteSegmentDisabled", (function() {
                            var e = i.props,
                                t = e.copiedSegment,
                                n = e.segment;
                            return !t || Object(O.a)(null === n || void 0 === n ? void 0 : n.type)
                        })), i.state = {
                            hasCopied: !1
                        }, i
                    }
                    return Object(i.default)(n, [{
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.selectedSegmentIndex,
                                n = e.index,
                                o = this.state.hasCopied,
                                r = t === n,
                                a = this.getPreviewBaseLayoutStyle();
                            return Object(T.jsxs)("div", {
                                style: a,
                                onClick: this.editComponent,
                                className: "jsx-".concat(m.__hash) + " " + (f()("preview-base-segment-component", {
                                    "is-selected": r
                                }) || ""),
                                children: [Object(T.jsxs)("div", {
                                    className: "jsx-".concat(m.__hash) + " preview-overlay",
                                    children: [Object(T.jsxs)("div", {
                                        "data-for": "tooltip_drag_".concat(n),
                                        "data-tip": "Reorder",
                                        className: "jsx-".concat(m.__hash) + " drag-icon-wrapper icon-wrapper",
                                        children: [Object(T.jsx)(v.a, {
                                            multiline: !1,
                                            className: "icon-wrapper-tooltip",
                                            id: "tooltip_drag_".concat(n),
                                            effect: "solid",
                                            place: "bottom",
                                            delayShow: j
                                        }), Object(T.jsx)(I, {})]
                                    }), Object(T.jsxs)("div", {
                                        "data-for": "tooltip_edit_".concat(n),
                                        "data-tip": "Edit",
                                        onClick: this.editComponent,
                                        className: "jsx-".concat(m.__hash) + " edit-icon-wrapper icon-wrapper",
                                        children: [Object(T.jsx)(v.a, {
                                            multiline: !1,
                                            className: "icon-wrapper-tooltip",
                                            id: "tooltip_edit_".concat(n),
                                            effect: "solid",
                                            place: "bottom",
                                            delayShow: j
                                        }), Object(T.jsx)(D, {})]
                                    }), Object(T.jsxs)("div", {
                                        "data-for": "tooltip_remove_".concat(n),
                                        "data-tip": "Remove",
                                        onClick: this.removeSegment,
                                        className: "jsx-".concat(m.__hash) + " remove-icon-wrapper icon-wrapper",
                                        children: [Object(T.jsx)(v.a, {
                                            multiline: !1,
                                            className: "icon-wrapper-tooltip",
                                            id: "tooltip_remove_".concat(n),
                                            effect: "solid",
                                            place: "bottom",
                                            delayShow: j
                                        }), Object(T.jsx)(P, {})]
                                    }), Object(T.jsxs)("div", {
                                        "data-for": "tooltip_copy_".concat(n),
                                        "data-tip": "Copy component",
                                        onClick: this.copySegmant,
                                        className: "jsx-".concat(m.__hash) + " copy-icon-wrapper icon-wrapper",
                                        children: [!o && Object(T.jsx)(v.a, {
                                            multiline: !1,
                                            className: "icon-wrapper-tooltip",
                                            id: "tooltip_copy_".concat(n),
                                            effect: "solid",
                                            place: "bottom",
                                            delayShow: j
                                        }), Object(T.jsx)(_, {}), o && Object(T.jsx)("span", {
                                            className: "jsx-".concat(m.__hash) + " has-copied",
                                            children: "Copied!"
                                        })]
                                    }), Object(T.jsxs)("div", {
                                        onClick: this.pasteSegment,
                                        "data-for": "tooltip_paste_".concat(n),
                                        "data-tip": "Paste component below",
                                        className: "jsx-".concat(m.__hash) + " " + (f()("paste-icon-wrapper", "icon-wrapper", {
                                            disabled: this.isPasteSegmentDisabled()
                                        }) || ""),
                                        children: [Object(T.jsx)(v.a, {
                                            multiline: !1,
                                            className: "icon-wrapper-tooltip",
                                            id: "tooltip_paste_".concat(n),
                                            effect: "solid",
                                            place: "bottom",
                                            delayShow: j
                                        }), Object(T.jsx)(L, {})]
                                    })]
                                }), this.childrenRendererWithoutBaseLayoutStyles(), Object(T.jsx)(d.a, {
                                    id: m.__hash,
                                    children: m
                                })]
                            })
                        }
                    }]), n
                }(r.PureComponent),
                k = Object(E.SortableElement)((function(e) {
                    return Object(T.jsx)(R, x({}, e))
                }));

            function N(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function A(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? N(Object(n), !0).forEach((function(t) {
                        Object(o.default)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : N(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var F = Object(r.createContext)(null),
                B = function(e) {
                    return function(t) {
                        return Object(T.jsx)(F.Consumer, {
                            children: function(n) {
                                return Object(T.jsx)(k, A(A(A({}, t), n), {}, {
                                    children: Object(T.jsx)(e, A({}, t))
                                }))
                            }
                        })
                    }
                }
        },
        Uuqm: function(e, t, n) {
            "use strict";
            var o = n("L3+E"),
                r = n("QxgC");
            t.a = {
                additionalText: {
                    type: o.FIELD_TYPES.TEXT,
                    label: "Additional text (monday markup supported)",
                    translatable: !0
                },
                additionalTextMaxWidth: {
                    type: o.FIELD_TYPES.TEXT,
                    label: "Additional text max width"
                },
                additionalTextPosition: {
                    type: o.FIELD_TYPES.COMBO,
                    options: [{
                        value: r.b,
                        text: "Side"
                    }, {
                        value: r.a,
                        text: "Below"
                    }],
                    label: "Position of additional text",
                    labelDescription: "mobile version will always be shown below"
                }
            }
        },
        buRD: function(e, t, n) {
            "use strict";
            var o = n("L3+E"),
                r = n("eL1y"),
                a = n("wKPs"),
                i = n("QuVX").a.buttonSize;
            t.a = {
                buttonDisplayType: {
                    type: o.FIELD_TYPES.COMBO,
                    label: "Display type",
                    options: [{
                        value: a.c,
                        text: "Secondary"
                    }, {
                        value: a.b,
                        text: "Regular"
                    }]
                },
                buttonSize: i,
                buttonText: {
                    type: o.FIELD_TYPES.TEXT,
                    label: "Text",
                    translatable: !0
                },
                videoId: {
                    type: o.FIELD_TYPES.TEXT,
                    label: "Video ID"
                },
                color: {
                    type: o.FIELD_TYPES.COLOR_PICKER,
                    label: "Color",
                    possibleColors: r.b
                },
                isWithArrow: {
                    type: o.FIELD_TYPES.BOOLEAN,
                    label: "With arrow"
                },
                isWithIcon: {
                    type: o.FIELD_TYPES.BOOLEAN,
                    label: "With icon"
                },
                isWithIconInsteadOfArrow: {
                    type: o.FIELD_TYPES.BOOLEAN,
                    label: "Show icon instead of arrow"
                },
                iconColor: {
                    type: o.FIELD_TYPES.COLOR_PICKER,
                    label: "Icon color",
                    possibleColors: r.b
                }
            }
        },
        jnSd: function(e, t, n) {
            "use strict";
            var o = n("Vvt1"),
                r = n.n(o),
                a = n("L3+E"),
                i = n("1m3A"),
                l = {
                    type: a.FIELD_TYPES.NESTED,
                    label: "Base",
                    fields: {
                        footer_type: {
                            type: a.FIELD_TYPES.COMBO,
                            label: "Footer Type",
                            options: [{
                                value: i.b,
                                text: "Slim (For landing pages)"
                            }, {
                                value: i.a,
                                text: "Long (For website pages)"
                            }]
                        }
                    }
                },
                s = n("cpVT"),
                c = n("vSb5");

            function p(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }
            var u = {
                    type: a.FIELD_TYPES.NESTED,
                    label: "",
                    fields: function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? p(Object(n), !0).forEach((function(t) {
                                Object(s.default)(e, t, n[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            }))
                        }
                        return e
                    }({}, c.a)
                },
                d = {
                    BaseFooterComponent: r()((function() {
                        return Promise.all([n.e(0), n.e(120)]).then(n.bind(null, "5kYX"))
                    }), {
                        loadableGenerated: {
                            webpack: function() {
                                return ["5kYX"]
                            },
                            modules: ["./base-footer-component"]
                        }
                    }),
                    BaseFooterConfig: l,
                    BaseFooterAdvancedConfig: u
                },
                b = {
                    type: a.FIELD_TYPES.NESTED,
                    label: "Remote Work",
                    fields: {}
                };

            function f(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }
            var g = {
                    type: a.FIELD_TYPES.NESTED,
                    label: "",
                    fields: function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? f(Object(n), !0).forEach((function(t) {
                                Object(s.default)(e, t, n[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : f(Object(n)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            }))
                        }
                        return e
                    }({}, c.a)
                },
                h = {
                    RemoteWorkFooterComponent: r()((function() {
                        return n.e(97).then(n.bind(null, "V0Xm"))
                    }), {
                        loadableGenerated: {
                            webpack: function() {
                                return ["V0Xm"]
                            },
                            modules: ["./remote-work-footer-component"]
                        }
                    }),
                    RemoteWorkFooterConfig: b,
                    RemoteWorkFooterAdvancedConfig: g
                },
                y = {
                    type: a.FIELD_TYPES.NESTED,
                    label: "Welcome New Joiners",
                    fields: {}
                };

            function m(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }
            var E = {
                    type: a.FIELD_TYPES.NESTED,
                    label: "",
                    fields: function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? m(Object(n), !0).forEach((function(t) {
                                Object(s.default)(e, t, n[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : m(Object(n)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            }))
                        }
                        return e
                    }({}, c.a)
                },
                v = {
                    WelcomeNewJoinersFooterComponent: r()((function() {
                        return n.e(185).then(n.bind(null, "TL/8"))
                    }), {
                        loadableGenerated: {
                            webpack: function() {
                                return ["TL/8"]
                            },
                            modules: ["./welcome-new-joiners-footer-component"]
                        }
                    }),
                    WelcomeNewJoinersFooterConfig: y,
                    WelcomeNewJoinersFooterAdvancedConfig: E
                },
                O = {
                    type: a.FIELD_TYPES.NESTED,
                    label: "Long",
                    fields: {}
                };

            function T(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }
            var w = {
                    type: a.FIELD_TYPES.NESTED,
                    label: "",
                    fields: function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? T(Object(n), !0).forEach((function(t) {
                                Object(s.default)(e, t, n[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : T(Object(n)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            }))
                        }
                        return e
                    }({}, c.a)
                },
                S = {
                    LongFooterComponent: r()((function() {
                        return n.e(20).then(n.bind(null, "w4qz"))
                    }), {
                        loadableGenerated: {
                            webpack: function() {
                                return ["w4qz"]
                            },
                            modules: ["./long-footer-component"]
                        }
                    }),
                    LongFooterConfig: O,
                    LongFooterAdvancedConfig: w
                },
                x = {
                    type: a.FIELD_TYPES.NESTED,
                    label: "Slim",
                    fields: {}
                };

            function D(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }
            var P = {
                    type: a.FIELD_TYPES.NESTED,
                    label: "",
                    fields: function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? D(Object(n), !0).forEach((function(t) {
                                Object(s.default)(e, t, n[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : D(Object(n)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            }))
                        }
                        return e
                    }({}, c.a)
                },
                _ = {
                    BaseFooter: d,
                    RemoteWorkFooter: h,
                    WelcomeNewJoinersFooter: v,
                    LongFooter: S,
                    SlimFooter: {
                        SlimFooterComponent: r()((function() {
                            return Promise.all([n.e(0), n.e(184)]).then(n.bind(null, "5uIx"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["5uIx"]
                                },
                                modules: ["./slim-footer-component"]
                            }
                        }),
                        SlimFooterConfig: x,
                        SlimFooterAdvancedConfig: P
                    }
                },
                L = _.BaseFooter,
                C = _.RemoteWorkFooter,
                I = _.WelcomeNewJoinersFooter,
                j = _.LongFooter,
                R = _.SlimFooter;
            t.a = {
                BaseFooterComponent: {
                    type: "BaseFooterComponent",
                    title: "Base",
                    imgSrc: "/static/img/segments/layouts/long-footer.png",
                    config: L.BaseFooterConfig,
                    advancedConfig: L.BaseFooterAdvancedConfig,
                    component: L.BaseFooterComponent
                },
                RemoteWorkFooterComponent: {
                    type: "RemoteWorkFooterComponent",
                    title: "Remote Work",
                    imgSrc: "/static/img/segments/layouts/remote-work-footer.png",
                    config: C.RemoteWorkFooterConfig,
                    advancedConfig: C.RemoteWorkFooterAdvancedConfig,
                    component: C.RemoteWorkFooterComponent
                },
                WelcomeNewJoinersFooterComponent: {
                    type: "WelcomeNewJoinersFooterComponent",
                    title: "Welcome New Joiners",
                    imgSrc: "/static/img/segments/layouts/welcome-new-joiners-footer.png",
                    config: I.WelcomeNewJoinersFooterConfig,
                    advancedConfig: I.WelcomeNewJoinersFooterAdvancedConfig,
                    component: I.WelcomeNewJoinersFooterComponent
                },
                LongFooterComponent: {
                    type: "LongFooterComponent",
                    title: "Long (OLD)",
                    imgSrc: "/static/img/segments/layouts/long-footer.png",
                    config: j.LongFooterConfig,
                    advancedConfig: j.LongFooterAdvancedConfig,
                    component: j.LongFooterComponent
                },
                SlimFooterComponent: {
                    type: "SlimFooterComponent",
                    title: "Slim (OLD)",
                    imgSrc: "/static/img/segments/layouts/slim-footer.png",
                    config: R.SlimFooterConfig,
                    advancedConfig: R.SlimFooterAdvancedConfig,
                    component: R.SlimFooterComponent
                }
            }
        },
        lqvt: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return o
            })), n.d(t, "a", (function() {
                return r
            })), n.d(t, "c", (function() {
                return a
            }));
            var o = "background-videos",
                r = "full-height-videos",
                a = "paragraph-and-asset-videos"
        },
        r061: function(e, t, n) {
            "use strict";
            var o = n("Vvt1"),
                r = n.n(o),
                a = n("L3+E"),
                i = {
                    type: a.FIELD_TYPES.NESTED,
                    label: "Remote Work",
                    fields: {}
                },
                l = n("cpVT"),
                s = n("vSb5");

            function c(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }
            var p = {
                    type: a.FIELD_TYPES.NESTED,
                    label: "",
                    fields: function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? c(Object(n), !0).forEach((function(t) {
                                Object(l.default)(e, t, n[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            }))
                        }
                        return e
                    }({}, s.a)
                },
                u = {
                    RemoteWorkHeaderComponent: r()((function() {
                        return Promise.all([n.e(2), n.e(17), n.e(103)]).then(n.bind(null, "8Jhx"))
                    }), {
                        loadableGenerated: {
                            webpack: function() {
                                return ["8Jhx"]
                            },
                            modules: ["./remote-work-header-component"]
                        }
                    }),
                    RemoteWorkHeaderConfig: i,
                    RemoteWorkHeaderAdvancedConfig: p
                },
                d = {
                    type: a.FIELD_TYPES.NESTED,
                    label: "Developers Center",
                    fields: {}
                };

            function b(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }
            var f = {
                    type: a.FIELD_TYPES.NESTED,
                    label: "",
                    fields: function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? b(Object(n), !0).forEach((function(t) {
                                Object(l.default)(e, t, n[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : b(Object(n)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            }))
                        }
                        return e
                    }({}, s.a)
                },
                g = {
                    DevelopersCenterHeaderComponent: r()((function() {
                        return Promise.all([n.e(2), n.e(0), n.e(1), n.e(200)]).then(n.bind(null, "RZ/N"))
                    }), {
                        loadableGenerated: {
                            webpack: function() {
                                return ["RZ/N"]
                            },
                            modules: ["./developers-center-header-component"]
                        }
                    }),
                    DevelopersCenterHeaderConfig: d,
                    DevelopersCenterHeaderAdvancedConfig: f
                },
                h = {
                    type: a.FIELD_TYPES.NESTED,
                    label: "Welcome New Joiners",
                    fields: {}
                };

            function y(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }
            var m = {
                    type: a.FIELD_TYPES.NESTED,
                    label: "",
                    fields: function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? y(Object(n), !0).forEach((function(t) {
                                Object(l.default)(e, t, n[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : y(Object(n)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            }))
                        }
                        return e
                    }({}, s.a)
                },
                E = {
                    WelcomeNewJoinersHeaderComponent: r()((function() {
                        return Promise.all([n.e(2), n.e(1), n.e(129)]).then(n.bind(null, "ggAn"))
                    }), {
                        loadableGenerated: {
                            webpack: function() {
                                return ["ggAn"]
                            },
                            modules: ["./welcome-new-joiners-header-component"]
                        }
                    }),
                    WelcomeNewJoinersHeaderConfig: h,
                    WelcomeNewJoinersHeaderAdvancedConfig: m
                },
                v = {
                    type: a.FIELD_TYPES.NESTED,
                    label: "Dynamic",
                    fields: {
                        logoImage: {
                            type: a.FIELD_TYPES.NESTED,
                            label: "Logo Image",
                            fields: {
                                src: {
                                    type: a.FIELD_TYPES.GALLERY,
                                    defaultImagesKeys: [],
                                    label: "Select an Image (size: 167x42)"
                                },
                                href: {
                                    type: a.FIELD_TYPES.TEXT,
                                    label: "Href"
                                }
                            }
                        },
                        linkItems: {
                            type: a.FIELD_TYPES.MULTIPLE_NESTED,
                            label: "Links",
                            maxLimit: 8,
                            nestedConfig: {
                                type: a.FIELD_TYPES.NESTED,
                                fields: {
                                    label: {
                                        type: a.FIELD_TYPES.TEXT,
                                        label: "Label"
                                    },
                                    url: {
                                        type: a.FIELD_TYPES.TEXT,
                                        label: "Url"
                                    }
                                }
                            }
                        }
                    }
                };

            function O(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }
            var T = {
                    type: a.FIELD_TYPES.NESTED,
                    label: "",
                    fields: function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? O(Object(n), !0).forEach((function(t) {
                                Object(l.default)(e, t, n[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : O(Object(n)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            }))
                        }
                        return e
                    }({}, s.a)
                },
                w = {
                    DynamicHeaderComponent: r()((function() {
                        return Promise.all([n.e(2), n.e(1)]).then(n.bind(null, "GA6A"))
                    }), {
                        loadableGenerated: {
                            webpack: function() {
                                return ["GA6A"]
                            },
                            modules: ["./dynamic-header-component"]
                        }
                    }),
                    DynamicHeaderConfig: v,
                    DynamicHeaderAdvancedConfig: T
                },
                S = n("28mk"),
                x = n("QuVX"),
                D = n("wKPs"),
                P = {
                    type: a.FIELD_TYPES.NESTED,
                    label: "Base",
                    fields: {
                        showMenu: {
                            type: a.FIELD_TYPES.BOOLEAN,
                            label: "Show Menu"
                        },
                        hideLogin: {
                            type: a.FIELD_TYPES.BOOLEAN,
                            label: "Hide login button"
                        },
                        showButton: {
                            type: a.FIELD_TYPES.BOOLEAN,
                            label: "Show Button"
                        },
                        hideLanguagePicker: {
                            type: a.FIELD_TYPES.BOOLEAN,
                            label: "Hide Language Picker (when Show Menu is off)"
                        },
                        logoHref: {
                            type: a.FIELD_TYPES.TEXT,
                            label: "Override Logo Click URL"
                        },
                        logoSrc: {
                            type: a.FIELD_TYPES.TEXT,
                            label: "Override Logo Image"
                        },
                        buttonConfig: {
                            type: a.FIELD_TYPES.CONDITIONAL_NESTED,
                            label: "Button",
                            conditionalKeyName: "buttonType",
                            options: [{
                                text: D.e,
                                fieldsConfig: S.a
                            }, {
                                text: D.b,
                                fieldsConfig: x.a
                            }]
                        }
                    }
                },
                _ = n("aH8o");

            function L(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function C(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? L(Object(n), !0).forEach((function(t) {
                        Object(l.default)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : L(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var I = {
                    type: a.FIELD_TYPES.NESTED,
                    label: "",
                    fields: C(C({}, s.a), {}, {
                        logoPopup: {
                            type: a.FIELD_TYPES.COMBO,
                            label: "Logo Popup",
                            options: _.b
                        },
                        mobileStickySignup: {
                            type: a.FIELD_TYPES.BOOLEAN,
                            label: "Mobile sticky signup (In test don't touch)"
                        },
                        mobileDarkHeader: {
                            type: a.FIELD_TYPES.BOOLEAN,
                            label: "Mobile dark header (In test don't touch)"
                        },
                        isExistingAccountHeader: {
                            type: a.FIELD_TYPES.BOOLEAN,
                            label: "Use existing account header (welcome back page)"
                        },
                        showSuccessStoriesInHeader: {
                            type: a.FIELD_TYPES.BOOLEAN,
                            label: "Show success stories in header (In test don't touch)"
                        }
                    })
                },
                j = {
                    BaseHeaderComponent: r()((function() {
                        return Promise.all([n.e(2), n.e(17), n.e(108)]).then(n.bind(null, "/55W"))
                    }), {
                        loadableGenerated: {
                            webpack: function() {
                                return ["/55W"]
                            },
                            modules: ["./base-header-component"]
                        }
                    }),
                    BaseHeaderConfig: P,
                    BaseHeaderAdvancedConfig: I
                },
                R = {
                    type: a.FIELD_TYPES.NESTED,
                    label: "Regular",
                    fields: {
                        showMenu: {
                            type: a.FIELD_TYPES.BOOLEAN,
                            label: "Show Menu"
                        }
                    }
                };

            function k(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }
            var N = {
                    type: a.FIELD_TYPES.NESTED,
                    label: "",
                    fields: function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? k(Object(n), !0).forEach((function(t) {
                                Object(l.default)(e, t, n[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : k(Object(n)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            }))
                        }
                        return e
                    }({}, s.a)
                },
                A = {
                    RemoteWorkHeader: u,
                    DevelopersCenterHeader: g,
                    WelcomeNewJoinersHeader: E,
                    DynamicHeader: w,
                    BaseHeader: j,
                    RegularHeader: {
                        RegularHeaderComponent: r()((function() {
                            return Promise.all([n.e(2), n.e(17), n.e(102)]).then(n.bind(null, "UfkL"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["UfkL"]
                                },
                                modules: ["./regular-header-component"]
                            }
                        }),
                        RegularHeaderConfig: R,
                        RegularHeaderAdvancedConfig: N
                    }
                },
                F = A.RemoteWorkHeader,
                B = A.DevelopersCenterHeader,
                Y = A.WelcomeNewJoinersHeader,
                M = A.DynamicHeader,
                H = A.BaseHeader,
                W = A.RegularHeader;
            t.a = {
                RemoteWorkHeaderComponent: {
                    type: "RemoteWorkHeaderComponent",
                    title: "Remote Work",
                    imgSrc: "/static/img/segments/layouts/remote-work-header.png",
                    config: F.RemoteWorkHeaderConfig,
                    advancedConfig: F.RemoteWorkHeaderAdvancedConfig,
                    component: F.RemoteWorkHeaderComponent
                },
                DevelopersCenterHeaderComponent: {
                    type: "DevelopersCenterHeaderComponent",
                    title: "Developers Center",
                    imgSrc: "/static/img/segments/layouts/developers-center-header.png",
                    config: B.DevelopersCenterHeaderConfig,
                    advancedConfig: B.DevelopersCenterHeaderAdvancedConfig,
                    component: B.DevelopersCenterHeaderComponent
                },
                WelcomeNewJoinersHeaderComponent: {
                    type: "WelcomeNewJoinersHeaderComponent",
                    title: "Welcome New Joiners",
                    imgSrc: "/static/img/segments/layouts/welcome-new-joiners-header.png",
                    config: Y.WelcomeNewJoinersHeaderConfig,
                    advancedConfig: Y.WelcomeNewJoinersHeaderAdvancedConfig,
                    component: Y.WelcomeNewJoinersHeaderComponent
                },
                DynamicHeaderComponent: {
                    type: "DynamicHeaderComponent",
                    title: "Dynamic",
                    imgSrc: "/static/img/segments/layouts/dynamic-header.png",
                    config: M.DynamicHeaderConfig,
                    advancedConfig: M.DynamicHeaderAdvancedConfig,
                    component: M.DynamicHeaderComponent
                },
                BaseHeaderComponent: {
                    type: "BaseHeaderComponent",
                    title: "Base",
                    imgSrc: "/static/img/segments/layouts/base-header.png",
                    config: H.BaseHeaderConfig,
                    advancedConfig: H.BaseHeaderAdvancedConfig,
                    component: H.BaseHeaderComponent
                },
                RegularHeaderComponent: {
                    type: "RegularHeaderComponent",
                    title: "Regular",
                    imgSrc: "/static/img/segments/layouts/regular-header.png",
                    config: W.RegularHeaderConfig,
                    advancedConfig: W.RegularHeaderAdvancedConfig,
                    component: W.RegularHeaderComponent
                }
            }
        },
        tpvQ: function(e, t, n) {
            "use strict";
            var o = n("Vvt1"),
                r = n.n(o),
                a = n("L3+E"),
                i = n("z7pX"),
                l = n("cpVT"),
                s = n("wKPs"),
                c = n("QuVX"),
                p = n("x+i+"),
                u = n("28mk"),
                d = n("buRD"),
                b = (n("MCHi"), n("icyP"), n("eL1y"));

            function f(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function g(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? f(Object(n), !0).forEach((function(t) {
                        Object(l.default)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : f(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var h = g(g({}, c.a), {}, {
                    color: g(g({}, c.a.color), {}, {
                        possibleColors: [].concat(Object(i.a)(c.a.color.possibleColors), [b.a])
                    })
                }),
                y = {
                    bannerText: {
                        type: a.FIELD_TYPES.TEXT,
                        label: "Text",
                        translatable: !0
                    },
                    mobileBannerText: {
                        type: a.FIELD_TYPES.TEXT,
                        label: "Mobile Text",
                        translatable: !0
                    },
                    bannerCta: {
                        type: a.FIELD_TYPES.TEXT,
                        label: "Button Text",
                        translatable: !0
                    },
                    bannerHeight: {
                        type: a.FIELD_TYPES.TEXT,
                        label: "Banner Height"
                    },
                    theme: {
                        type: a.FIELD_TYPES.COLOR_PICKER,
                        label: "Theme"
                    },
                    withCloseIcon: {
                        type: a.FIELD_TYPES.BOOLEAN,
                        label: "Show Close Button"
                    },
                    buttonConfig: {
                        type: a.FIELD_TYPES.CONDITIONAL_NESTED,
                        label: "Button",
                        conditionalKeyName: "buttonType",
                        options: [{
                            text: s.b,
                            fieldsConfig: h
                        }, {
                            text: s.c,
                            fieldsConfig: p.a
                        }, {
                            text: s.e,
                            fieldsConfig: u.a
                        }, {
                            text: s.j,
                            fieldsConfig: d.a
                        }]
                    },
                    stickImagesToText: {
                        type: a.FIELD_TYPES.BOOLEAN,
                        label: "Stick images to text"
                    },
                    bannerIcon: {
                        type: a.FIELD_TYPES.GALLERY,
                        label: "Banner Icon"
                    },
                    bannerIconHeight: {
                        type: a.FIELD_TYPES.TEXT,
                        label: "Banner Icon Height"
                    }
                },
                m = {
                    type: a.FIELD_TYPES.NESTED,
                    label: "Plain",
                    fields: y
                },
                E = n("vSb5");

            function v(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }
            var O = {
                    type: a.FIELD_TYPES.NESTED,
                    label: "",
                    fields: function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? v(Object(n), !0).forEach((function(t) {
                                Object(l.default)(e, t, n[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : v(Object(n)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            }))
                        }
                        return e
                    }({}, E.a)
                },
                T = {
                    PlainBannerComponent: r()((function() {
                        return n.e(176).then(n.bind(null, "tM1o"))
                    }), {
                        loadableGenerated: {
                            webpack: function() {
                                return ["tM1o"]
                            },
                            modules: ["./plain-banner-component"]
                        }
                    }),
                    PlainBannerConfig: m,
                    PlainBannerAdvancedConfig: O
                };

            function w(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function S(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? w(Object(n), !0).forEach((function(t) {
                        Object(l.default)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : w(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var x = {
                type: a.FIELD_TYPES.NESTED,
                label: "With Background",
                fields: S(S({}, y), {}, {
                    bannerleftImage: {
                        type: a.FIELD_TYPES.GALLERY,
                        label: "Select an Left Image"
                    },
                    bannerRightImage: {
                        type: a.FIELD_TYPES.GALLERY,
                        label: "Select an Right Image"
                    }
                })
            };

            function D(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }
            var P = {
                    type: a.FIELD_TYPES.NESTED,
                    label: "",
                    fields: function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? D(Object(n), !0).forEach((function(t) {
                                Object(l.default)(e, t, n[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : D(Object(n)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            }))
                        }
                        return e
                    }({}, E.a)
                },
                _ = {
                    PlainBanner: T,
                    WithBackgroundBanner: {
                        WithBackgroundBannerComponent: r()((function() {
                            return n.e(177).then(n.bind(null, "zokY"))
                        }), {
                            loadableGenerated: {
                                webpack: function() {
                                    return ["zokY"]
                                },
                                modules: ["./with-background-banner-component"]
                            }
                        }),
                        WithBackgroundBannerConfig: x,
                        WithBackgroundBannerAdvancedConfig: P
                    }
                },
                L = _.PlainBanner,
                C = _.WithBackgroundBanner;
            t.a = {
                PlainBannerComponent: {
                    type: "PlainBannerComponent",
                    title: "Plain",
                    imgSrc: "/static/img/segments/layouts/plain-banner.png",
                    config: L.PlainBannerConfig,
                    advancedConfig: L.PlainBannerAdvancedConfig,
                    component: L.PlainBannerComponent
                },
                WithBackgroundBannerComponent: {
                    type: "WithBackgroundBannerComponent",
                    title: "With Background",
                    imgSrc: "/static/img/segments/layouts/with-background-banner.png",
                    config: C.WithBackgroundBannerConfig,
                    advancedConfig: C.WithBackgroundBannerAdvancedConfig,
                    component: C.WithBackgroundBannerComponent
                }
            }
        },
        vBa2: function(e, t, n) {
            "use strict";
            t.a = {
                COMPONENT: "COMPONENT",
                SHAPE: "SHAPE"
            }
        },
        "x+i+": function(e, t, n) {
            "use strict";
            var o = n("L3+E"),
                r = n("eL1y");
            t.a = {
                buttonText: {
                    type: o.FIELD_TYPES.TEXT,
                    label: "Text",
                    translatable: !0
                },
                url: {
                    type: o.FIELD_TYPES.TEXT,
                    label: "Url"
                },
                color: {
                    type: o.FIELD_TYPES.COLOR_PICKER,
                    label: "Color",
                    possibleColors: r.b
                },
                isOpenLinkInNewTab: {
                    type: o.FIELD_TYPES.BOOLEAN,
                    label: "Open link in new tab"
                }
            }
        },
        zd4H: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return a
            }));
            var o = n("L3+E"),
                r = n("lqvt"),
                a = {
                    type: o.FIELD_TYPES.NESTED,
                    label: "Asset",
                    fields: {
                        shadow: {
                            type: o.FIELD_TYPES.BOOLEAN,
                            label: "Shadow Frame"
                        },
                        convertGifToVideo: {
                            type: o.FIELD_TYPES.BOOLEAN,
                            label: "Convert gif to video"
                        },
                        side: {
                            type: o.FIELD_TYPES.COMBO,
                            label: "Asset Location",
                            options: ["left", "right"]
                        },
                        image: {
                            type: o.FIELD_TYPES.NESTED,
                            label: "Image",
                            fields: {
                                src: {
                                    type: o.FIELD_TYPES.GALLERY,
                                    defaultImagesKeys: ["static/img/templates/long-template/boards/"],
                                    label: "Select an Image"
                                },
                                alt: {
                                    type: o.FIELD_TYPES.TEXT,
                                    label: "Image description (alt)"
                                },
                                href: {
                                    type: o.FIELD_TYPES.TEXT,
                                    label: "Href"
                                }
                            }
                        },
                        video: {
                            type: o.FIELD_TYPES.NESTED,
                            label: "Add a Video",
                            fields: {
                                src: {
                                    type: o.FIELD_TYPES.CLOUDINARY_VIDEO_PICKER,
                                    label: "Video",
                                    videoType: r.c
                                },
                                loop: {
                                    type: o.FIELD_TYPES.BOOLEAN,
                                    label: "Loop",
                                    options: ["Yes", "No"]
                                },
                                playWhenVisible: {
                                    type: o.FIELD_TYPES.BOOLEAN,
                                    label: "Play Only When Visible",
                                    options: ["Yes", "No"]
                                }
                            }
                        }
                    }
                }
        }
    }
]);
//# sourceMappingURL=1ba3aa5a6a65e1163192cd0ab3b49fcff12365f1.3756f5804796488cf13d.js.map