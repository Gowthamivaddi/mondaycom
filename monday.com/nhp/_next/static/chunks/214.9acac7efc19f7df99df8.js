(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [214], {
        T2gH: function(e, t, r) {
            "use strict";
            r.r(t);
            var a = r("cpVT"),
                o = r("dhJC"),
                p = r("MX0m"),
                n = r.n(p),
                c = r("bZyZ"),
                s = r("A440"),
                i = r("Tc2L"),
                d = r("bmYG"),
                l = [".side-by-side-title-paragraph-component.jsx-3384757154{max-width:".concat(d.k + "px", ";margin:auto;}")];
            l.__hash = "3384757154";
            var b = r("nKUr");

            function u(e, t) {
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
                    t % 2 ? u(Object(r), !0).forEach((function(t) {
                        Object(a.default)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : u(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var f = function(e) {
                var t = e.titleProps,
                    r = e.paragraphProps,
                    a = e.titleAdvancedProps,
                    p = e.paragraphAdvancedProps,
                    d = Object(o.default)(e, ["titleProps", "paragraphProps", "titleAdvancedProps", "paragraphAdvancedProps"]),
                    u = g(g({}, t), a),
                    f = g(g(g({}, r), p), {}, {
                        topic: "",
                        title: ""
                    });
                return Object(b.jsxs)("div", {
                    className: "jsx-".concat(l.__hash) + " side-by-side-title-paragraph-component",
                    children: [Object(b.jsx)(c.a, g({
                        paragraphVerticalAlignment: "top",
                        replaceTextComponent: s.a,
                        replaceTextComponentProps: u,
                        replaceAssetComponent: i.b,
                        replaceAssetComponentProps: f
                    }, d)), Object(b.jsx)(n.a, {
                        id: l.__hash,
                        children: l
                    })]
                })
            };
            t.default = f;
            f.defaultProps = {
                paddingTop: "48px",
                paddingBottom: "48px",
                fullParagraph: {},
                titleProps: s.a.defaultProps,
                paragraphProps: {
                    body: "Boost your team\u2019s alignment, efficiency, and productivity by customizing any workflow to fit your needs."
                },
                alignToLogo: !0
            }
        }
    }
]);
//# sourceMappingURL=214.9acac7efc19f7df99df8.js.map