(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [212], {
        bvOt: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, "default", (function() {
                return w
            }));
            var n = r("cpVT"),
                c = r("H+61"),
                a = r("UlJF"),
                o = r("7LId"),
                i = r("VIvw"),
                p = r("iHvq"),
                s = r("MX0m"),
                u = r.n(s),
                f = r("q1tI"),
                l = r("bmYG"),
                d = r("Tc2L"),
                b = [".full-paragraph-component.jsx-1055366927{max-width:".concat("".concat(l.k, "px"), ";margin:auto;}"), ".full-paragraph-component.jsx-1055366927 .full-paragraph-wrapper.jsx-1055366927{max-width:1100px;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:".concat("0px ".concat(d.a), ";}")];
            b.__hash = "1055366927";
            var h = r("/Vdx"),
                j = r("VgqV"),
                x = r("nKUr");

            function O(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function y(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? O(Object(r), !0).forEach((function(e) {
                        Object(n.default)(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : O(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }

            function m(t) {
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
                    var r, n = Object(p.default)(t);
                    if (e) {
                        var c = Object(p.default)(this).constructor;
                        r = Reflect.construct(n, arguments, c)
                    } else r = n.apply(this, arguments);
                    return Object(i.default)(this, r)
                }
            }
            var w = function(t) {
                Object(o.default)(r, t);
                var e = m(r);

                function r() {
                    return Object(c.default)(this, r), e.apply(this, arguments)
                }
                return Object(a.default)(r, [{
                    key: "render",
                    value: function() {
                        var t = this.props.maxWidth;
                        return Object(x.jsxs)("div", {
                            className: "jsx-".concat(b.__hash) + " full-paragraph-component",
                            children: [Object(x.jsx)("div", {
                                style: {
                                    maxWidth: t
                                },
                                className: "jsx-".concat(b.__hash) + " full-paragraph-wrapper",
                                children: Object(x.jsx)(d.b, y({}, this.props))
                            }), Object(x.jsx)(u.a, {
                                id: b.__hash,
                                children: b
                            })]
                        })
                    }
                }]), r
            }(f.PureComponent);
            w.defaultProps = y(y({}, h.a), {}, {
                paddingTop: "64px",
                paddingBottom: "64px",
                titleSize: j.c,
                textSize: j.c,
                maxWidth: "1100px"
            })
        }
    }
]);
//# sourceMappingURL=212.b8820b2c5363a9e6f30f.js.map