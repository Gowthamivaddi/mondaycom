(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [137], {
        "+niT": function(t, e, a) {
            "use strict";
            a.r(e);
            var r = a("9hre"),
                s = a("wKPs"),
                n = a("/Z+I"),
                i = a("pIH8"),
                o = {
                    alignToLogo: !0,
                    paragraphs: [{
                        title: "Streamline your work for<br/><b>maximum productivity</b>",
                        description: "Centralize all your work, processes, tools, and files into one Work OS. Connect teams, bridge silos, and maintain one source of truth across your organization.",
                        avatarSrc: "https://dapulse-res.cloudinary.com/image/upload/r_400/f_auto,q_auto/remote_mondaycom_static/uploads/BarBen/jane.jpeg",
                        avatarAlt: "Jane Tham's profile image",
                        testimonial: "We use monday.com for a plethora of use cases, the opportunities this platform provides are limitless.",
                        name: "Jane Tham",
                        jobTitle: "VP of Collaboration Technologies",
                        companyName: "Universal Music Group"
                    }, {
                        title: "Bring teams together to<br/><b>drive business impact</b>",
                        description: "Collaborate effectively organization-wide to get a clear picture of all your work. Stay in the loop with easy-to-use automations and real-time notifications.",
                        avatarSrc: "https://dapulse-res.cloudinary.com/image/upload/r_400/f_auto,q_auto/remote_mondaycom_static/uploads/BarBen/sarah.jpeg",
                        avatarAlt: "Sarah Pharr's profile image",
                        testimonial: "Since adopting monday.com, our global marketing department has seen a 40% improvement in cross-team collaboration.",
                        name: "Sarah Pharr",
                        jobTitle: "AVP Marketing",
                        companyName: "Genpact",
                        buttonConfig: {
                            buttonType: s.e,
                            buttonColor: n.WHITE_COLOR_NAME,
                            invert: !0,
                            buttonSize: i.d
                        }
                    }, {
                        title: "Stay on track to<br/><b>reach your goals, faster</b>",
                        description: "Get a high-level overview of your organization with customizable dashboards. Make confident decisions and easily scale workflows for your evolving needs.",
                        avatarSrc: "https://dapulse-res.cloudinary.com/image/upload/r_400/f_auto,q_auto/remote_mondaycom_static/uploads/BarBen/baptiste.jpeg",
                        avatarAlt: "Baptiste Ancey's profile image",
                        testimonial: "monday.com allows banks to be synchronized between the top-level management figures and local KPIs.",
                        name: "Baptiste Ancey",
                        jobTitle: "Head of Innovation",
                        companyName: "Indosuez Wealth Management"
                    }],
                    topAsset: {
                        src: "https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/parallax/first_board.png",
                        alt: "monday.com board with multiple integrations"
                    },
                    bottomAsset: {
                        src: {
                            formats: ["/Generator_featured images/Home Page - 2022 Rebrand/parallax/goals_dashboard.mp4"]
                        }
                    }
                },
                l = a("cpVT"),
                c = a("MX0m"),
                p = a.n(c),
                u = a("q1tI"),
                d = a("xwIp");

            function m() {
                var t, e, a, r, s, n, i, o, l, c;
                return Object(d.b)() ? {
                    width: void 0,
                    height: void 0
                } : {
                    width: (null === (t = window) || void 0 === t ? void 0 : t.innerWidth) || (null === (e = document) || void 0 === e || null === (a = e.documentElement) || void 0 === a ? void 0 : a.clientWidth) || (null === (r = document) || void 0 === r || null === (s = r.body) || void 0 === s ? void 0 : s.clientWidth),
                    height: (null === (n = window) || void 0 === n ? void 0 : n.innerHeight) || (null === (i = document) || void 0 === i || null === (o = i.documentElement) || void 0 === o ? void 0 : o.clientHeight) || (null === (l = document) || void 0 === l || null === (c = l.body) || void 0 === c ? void 0 : c.clientHeight)
                }
            }
            var x = a("bdgK");

            function f(t, e) {
                var a = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), a.push.apply(a, r)
                }
                return a
            }

            function h(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var a = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? f(Object(a), !0).forEach((function(e) {
                        Object(l.default)(t, e, a[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : f(Object(a)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
                    }))
                }
                return t
            }

            function g(t) {
                if (!t) return {
                    height: 0,
                    width: 0,
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    clientHeight: 0,
                    clientWidth: 0,
                    offsetTop: 0,
                    offsetBottom: 0,
                    offsetLeft: 0,
                    offsetRight: 0
                };
                var e = t.clientHeight,
                    a = t.clientWidth,
                    r = t.offsetTop,
                    s = t.offsetBottom,
                    n = t.offsetLeft,
                    i = t.offsetRight;
                return h(h({}, t.getBoundingClientRect()), {}, {
                    clientHeight: e,
                    clientWidth: a,
                    offsetTop: r,
                    offsetBottom: s,
                    offsetLeft: n,
                    offsetRight: i
                })
            }
            var j = function(t) {
                    var e = Object(u.useState)(g(t ? t.current : null)),
                        a = e[0],
                        r = e[1],
                        s = Object(u.useCallback)((function() {
                            t.current && r(g(t.current))
                        }), [t]);
                    return Object(u.useLayoutEffect)((function() {
                        var e = t.current;
                        if (e) {
                            s();
                            var a = new x.default((function() {
                                return s()
                            }));
                            return a.observe(e),
                                function() {
                                    a && (a.disconnect(), a = null)
                                }
                        }
                    }), [t.current]), Object(u.useLayoutEffect)((function() {
                        return window.addEventListener("scroll", s),
                            function() {
                                window.removeEventListener("scroll", s)
                            }
                    }), [t.current]), a
                },
                y = a("bmYG"),
                b = a("TSYQ"),
                O = a.n(b),
                _ = a("KAy6"),
                v = a.n(_),
                w = a("h0RW"),
                k = a("ELNm"),
                E = a.n(k),
                P = {
                    typedProps: {
                        strings: ["This is typed string"],
                        typeSpeed: 20,
                        startDelay: 0,
                        backSpeed: 20,
                        backDelay: 700,
                        smartBackspace: !0,
                        loop: !1,
                        shuffle: !1
                    }
                },
                S = [".typed-component.jsx-1892852294 .content.jsx-1892852294{white-space:pre;font-size:0.875rem;}", ".typed-component.jsx-1892852294 .content.jsx-1892852294 .tag{color:#0981fc;}"];
            S.__hash = "1892852294";
            var N = a("nKUr");

            function R(t, e) {
                var a = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), a.push.apply(a, r)
                }
                return a
            }

            function T(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var a = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? R(Object(a), !0).forEach((function(e) {
                        Object(l.default)(t, e, a[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : R(Object(a)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
                    }))
                }
                return t
            }
            var C = function(t) {
                    var e = t.typedProps,
                        a = t.className,
                        r = t.style,
                        s = t.stopped,
                        n = Object(u.useState)(0),
                        i = n[0],
                        o = n[1],
                        l = Object(u.useRef)(null),
                        c = Object(u.useRef)(null);
                    return Object(u.useEffect)((function() {
                        return c.current = new E.a(l.current, T(T({}, P.typedProps), e)),
                            function() {
                                c.current.destroy()
                            }
                    }), []), Object(u.useEffect)((function() {
                        if (!s) {
                            var t = e.startDelay,
                                a = void 0 === t ? 0 : t,
                                r = performance.now(),
                                n = Math.max(0, a - i),
                                l = setTimeout((function() {
                                    return c.current.start()
                                }), n);
                            return function() {
                                var t = performance.now();
                                o(i + t - r), clearTimeout(l)
                            }
                        }
                        c.current.stop()
                    }), [s]), Object(N.jsxs)("div", {
                        style: r,
                        className: "jsx-".concat(S.__hash) + " " + (O()("typed-component", a) || ""),
                        children: [Object(N.jsx)("span", {
                            ref: l,
                            className: "jsx-".concat(S.__hash) + " content"
                        }), Object(N.jsx)(p.a, {
                            id: S.__hash,
                            children: S
                        })]
                    })
                },
                D = C;
            C.defaultProps = P;
            var I = [".parallax-galaxy.jsx-2947511791{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:absolute;right:-11vw;top:-4vw;opacity:1;}", ".parallax-galaxy.jsx-2947511791 .galaxy-container.jsx-2947511791{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:500px;height:500px;margin:0 auto;position:relative;}", ".parallax-galaxy.jsx-2947511791 .galaxy-container.jsx-2947511791 .spin-container.jsx-2947511791{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:448px;height:448px;}", ".parallax-galaxy.jsx-2947511791 .galaxy-container.jsx-2947511791 .spin-container.jsx-2947511791 .circle-container.jsx-2947511791{position:absolute;background-size:cover;background-position:center;background-repeat:no-repeat;-webkit-animation:rotate-circle-jsx-2947511791 var(--d) linear infinite;animation:rotate-circle-jsx-2947511791 var(--d) linear infinite;}", ".parallax-galaxy.jsx-2947511791 .galaxy-container.jsx-2947511791 .spin-container.jsx-2947511791 .circle-container.small-circle.jsx-2947511791{width:200px;height:200px;background-image:url(https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/parallax/integrations/Ellipse3.svg);}", ".parallax-galaxy.jsx-2947511791 .galaxy-container.jsx-2947511791 .spin-container.jsx-2947511791 .circle-container.medium-circle.jsx-2947511791{--d:6s;width:270px;height:270px;background-image:url(https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/parallax/integrations/Ellipse2.svg);}", ".parallax-galaxy.jsx-2947511791 .galaxy-container.jsx-2947511791 .spin-container.jsx-2947511791 .circle-container.large-circle.jsx-2947511791{--d:15s;width:350px;height:350px;background-image:url(https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/parallax/integrations/Ellipse1.svg);}", ".parallax-galaxy.jsx-2947511791 .galaxy-container.jsx-2947511791 .spin-container.jsx-2947511791 .items-container.jsx-2947511791{position:absolute;display:grid;place-content:center;}", ".parallax-galaxy.jsx-2947511791 .galaxy-container.jsx-2947511791 .spin-container.jsx-2947511791 .items-container.small-circle.jsx-2947511791{--n:3;--d:9s;width:200px;height:200px;}", ".parallax-galaxy.jsx-2947511791 .galaxy-container.jsx-2947511791 .spin-container.jsx-2947511791 .items-container.medium-circle.jsx-2947511791{--n:2;--d:14s;width:270px;height:270px;}", ".parallax-galaxy.jsx-2947511791 .galaxy-container.jsx-2947511791 .spin-container.jsx-2947511791 .items-container.large-circle.jsx-2947511791{--n:6;--d:25s;width:350px;height:350px;}", ".parallax-galaxy.jsx-2947511791 .item.jsx-2947511791{grid-area:1/1;}", ".parallax-galaxy.jsx-2947511791 .galaxy-container.jsx-2947511791 .spin-container.jsx-2947511791 .items-container.small-circle.jsx-2947511791 .item.jsx-2947511791{width:auto;height:68px;-webkit-animation:small-spin-jsx-2947511791 var(--d) linear infinite;animation:small-spin-jsx-2947511791 var(--d) linear infinite;-webkit-transform:rotate(0) translate(95px) rotate(0);-ms-transform:rotate(0) translate(95px) rotate(0);transform:rotate(0) translate(95px) rotate(0);}", ".parallax-galaxy.jsx-2947511791 .galaxy-container.jsx-2947511791 .spin-container.jsx-2947511791 .items-container.small-circle.jsx-2947511791 .item.jsx-2947511791:nth-child(1){-webkit-animation-delay:calc(-0 * var(--d) / var(--n));animation-delay:calc(-0 * var(--d) / var(--n));}", ".parallax-galaxy.jsx-2947511791 .galaxy-container.jsx-2947511791 .spin-container.jsx-2947511791 .items-container.small-circle.jsx-2947511791 .item.jsx-2947511791:nth-child(2){-webkit-animation-delay:calc(-1 * var(--d) / var(--n));animation-delay:calc(-1 * var(--d) / var(--n));}", ".parallax-galaxy.jsx-2947511791 .galaxy-container.jsx-2947511791 .spin-container.jsx-2947511791 .items-container.small-circle.jsx-2947511791 .item.jsx-2947511791:nth-child(3){-webkit-animation-delay:calc(-2 * var(--d) / var(--n));animation-delay:calc(-2 * var(--d) / var(--n));}", ".parallax-galaxy.jsx-2947511791 .galaxy-container.jsx-2947511791 .spin-container.jsx-2947511791 .items-container.small-circle.jsx-2947511791 .item.jsx-2947511791 img.jsx-2947511791{width:auto;height:68px;}", ".parallax-galaxy.jsx-2947511791 .galaxy-container.jsx-2947511791 .spin-container.jsx-2947511791 .items-container.medium-circle.jsx-2947511791 .item.jsx-2947511791{width:auto;height:62px;}", ".parallax-galaxy.jsx-2947511791 .galaxy-container.jsx-2947511791 .spin-container.jsx-2947511791 .items-container.medium-circle.jsx-2947511791 .item.item-inner.jsx-2947511791{-webkit-animation:medium-spin-inner-jsx-2947511791 var(--d) linear infinite;animation:medium-spin-inner-jsx-2947511791 var(--d) linear infinite;-webkit-transform:rotate(0) translate(135px) rotate(0);-ms-transform:rotate(0) translate(135px) rotate(0);transform:rotate(0) translate(135px) rotate(0);}", ".parallax-galaxy.jsx-2947511791 .galaxy-container.jsx-2947511791 .spin-container.jsx-2947511791 .items-container.medium-circle.jsx-2947511791 .item.item-outer.jsx-2947511791{-webkit-animation:medium-spin-outer-jsx-2947511791 var(--d) linear infinite;animation:medium-spin-outer-jsx-2947511791 var(--d) linear infinite;-webkit-transform:rotate(0) translate(175px) rotate(0);-ms-transform:rotate(0) translate(175px) rotate(0);transform:rotate(0) translate(175px) rotate(0);}", ".parallax-galaxy.jsx-2947511791 .galaxy-container.jsx-2947511791 .spin-container.jsx-2947511791 .items-container.medium-circle.jsx-2947511791 .item.jsx-2947511791:nth-child(1){-webkit-animation-delay:calc(-0 * var(--d) / var(--n));animation-delay:calc(-0 * var(--d) / var(--n));}", ".parallax-galaxy.jsx-2947511791 .galaxy-container.jsx-2947511791 .spin-container.jsx-2947511791 .items-container.medium-circle.jsx-2947511791 .item.jsx-2947511791:nth-child(2){-webkit-animation-delay:calc( -1 * var(--d) / (var(--n) * 2));animation-delay:calc( -1 * var(--d) / (var(--n) * 2));}", ".parallax-galaxy.jsx-2947511791 .galaxy-container.jsx-2947511791 .spin-container.jsx-2947511791 .items-container.medium-circle.jsx-2947511791 .item.jsx-2947511791 img.jsx-2947511791{width:auto;height:62px;}", ".parallax-galaxy.jsx-2947511791 .galaxy-container.jsx-2947511791 .spin-container.jsx-2947511791 .items-container.large-circle.jsx-2947511791 .item.jsx-2947511791{width:auto;height:50px;-webkit-animation:large-spin-jsx-2947511791 var(--d) linear infinite;animation:large-spin-jsx-2947511791 var(--d) linear infinite;-webkit-transform:rotate(0) translate(225px) rotate(0);-ms-transform:rotate(0) translate(225px) rotate(0);transform:rotate(0) translate(225px) rotate(0);}", ".parallax-galaxy.jsx-2947511791 .galaxy-container.jsx-2947511791 .spin-container.jsx-2947511791 .items-container.large-circle.jsx-2947511791 .item.jsx-2947511791:nth-child(1){-webkit-animation-delay:calc(-0 * var(--d) / var(--n));animation-delay:calc(-0 * var(--d) / var(--n));}", ".parallax-galaxy.jsx-2947511791 .galaxy-container.jsx-2947511791 .spin-container.jsx-2947511791 .items-container.large-circle.jsx-2947511791 .item.jsx-2947511791:nth-child(2){-webkit-animation-delay:calc(-1 * var(--d) / (var(--n)));animation-delay:calc(-1 * var(--d) / (var(--n)));}", ".parallax-galaxy.jsx-2947511791 .galaxy-container.jsx-2947511791 .spin-container.jsx-2947511791 .items-container.large-circle.jsx-2947511791 .item.jsx-2947511791:nth-child(3){-webkit-animation-delay:calc(-1.5 * var(--d) / (var(--n)));animation-delay:calc(-1.5 * var(--d) / (var(--n)));}", ".parallax-galaxy.jsx-2947511791 .galaxy-container.jsx-2947511791 .spin-container.jsx-2947511791 .items-container.large-circle.jsx-2947511791 .item.jsx-2947511791:nth-child(4){-webkit-animation-delay:calc(-3 * var(--d) / (var(--n)));animation-delay:calc(-3 * var(--d) / (var(--n)));}", ".parallax-galaxy.jsx-2947511791 .galaxy-container.jsx-2947511791 .spin-container.jsx-2947511791 .items-container.large-circle.jsx-2947511791 .item.jsx-2947511791:nth-child(5){-webkit-animation-delay:calc(-4 * var(--d) / (var(--n)));animation-delay:calc(-4 * var(--d) / (var(--n)));}", ".parallax-galaxy.jsx-2947511791 .galaxy-container.jsx-2947511791 .spin-container.jsx-2947511791 .items-container.large-circle.jsx-2947511791 .item.jsx-2947511791 img.jsx-2947511791{width:auto;height:50px;}", "@-webkit-keyframes small-spin-jsx-2947511791{100%{-webkit-transform:rotate(1turn) translate(95px) rotate(-1turn);-ms-transform:rotate(1turn) translate(95px) rotate(-1turn);transform:rotate(1turn) translate(95px) rotate(-1turn);}}", "@keyframes small-spin-jsx-2947511791{100%{-webkit-transform:rotate(1turn) translate(95px) rotate(-1turn);-ms-transform:rotate(1turn) translate(95px) rotate(-1turn);transform:rotate(1turn) translate(95px) rotate(-1turn);}}", "@-webkit-keyframes medium-spin-inner-jsx-2947511791{100%{-webkit-transform:rotate(1turn) translate(135px) rotate(-1turn);-ms-transform:rotate(1turn) translate(135px) rotate(-1turn);transform:rotate(1turn) translate(135px) rotate(-1turn);}}", "@keyframes medium-spin-inner-jsx-2947511791{100%{-webkit-transform:rotate(1turn) translate(135px) rotate(-1turn);-ms-transform:rotate(1turn) translate(135px) rotate(-1turn);transform:rotate(1turn) translate(135px) rotate(-1turn);}}", "@-webkit-keyframes medium-spin-outer-jsx-2947511791{100%{-webkit-transform:rotate(1turn) translate(175px) rotate(-1turn);-ms-transform:rotate(1turn) translate(175px) rotate(-1turn);transform:rotate(1turn) translate(175px) rotate(-1turn);}}", "@keyframes medium-spin-outer-jsx-2947511791{100%{-webkit-transform:rotate(1turn) translate(175px) rotate(-1turn);-ms-transform:rotate(1turn) translate(175px) rotate(-1turn);transform:rotate(1turn) translate(175px) rotate(-1turn);}}", "@-webkit-keyframes large-spin-jsx-2947511791{100%{-webkit-transform:rotate(1turn) translate(225px) rotate(-1turn);-ms-transform:rotate(1turn) translate(225px) rotate(-1turn);transform:rotate(1turn) translate(225px) rotate(-1turn);}}", "@keyframes large-spin-jsx-2947511791{100%{-webkit-transform:rotate(1turn) translate(225px) rotate(-1turn);-ms-transform:rotate(1turn) translate(225px) rotate(-1turn);transform:rotate(1turn) translate(225px) rotate(-1turn);}}", "@-webkit-keyframes rotate-circle-jsx-2947511791{from{-webkit-transform:rotate(0);-ms-transform:rotate(0);transform:rotate(0);}to{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}", "@keyframes rotate-circle-jsx-2947511791{from{-webkit-transform:rotate(0);-ms-transform:rotate(0);transform:rotate(0);}to{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}", ".parallax-galaxy.jsx-2947511791 #twinkling-stars.jsx-2947511791{position:absolute;left:0;top:0;width:100%;height:100%;background:transparent;}", '.parallax-galaxy.jsx-2947511791 #twinkling-stars.jsx-2947511791 .star{--twinkle-duration:"";--twinkle-delay:"";--star-size:"";position:absolute;background-image:url("https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/parallax/integrations/star.svg");background-repeat:no-repeat;background-size:cover;width:var(--star-size);height:var(--star-size);border-radius:50%;-webkit-animation:twinkle-jsx-2947511791 infinite alternate;animation:twinkle-jsx-2947511791 infinite alternate;-webkit-animation-duration:var(--twinkle-duration);animation-duration:var(--twinkle-duration);-webkit-animation-delay:var(--twinkle-delay);animation-delay:var(--twinkle-delay);will-change:transform;}', ".parallax-galaxy.jsx-2947511791 .circle.jsx-2947511791{background-image:unset;background:#fff;}", "@-webkit-keyframes twinkle-jsx-2947511791{from{-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);}to{-webkit-transform:scale(1.5);-ms-transform:scale(1.5);transform:scale(1.5);}}", "@keyframes twinkle-jsx-2947511791{from{-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);}to{-webkit-transform:scale(1.5);-ms-transform:scale(1.5);transform:scale(1.5);}}", "@media (max-width:".concat(y.n, "){.parallax-galaxy.jsx-2947511791{right:-33vw;top:-2vw;}}")];
            I.__hash = "2947511791";
            var A = function(t) {
                return Object(u.useEffect)((function() {
                    ! function() {
                        for (var t = document.getElementById("twinkling-stars"), e = function(t, e) {
                                return Math.random() * (e - t) + t
                            }, a = function(a, r, s) {
                                var n = document.createElement("div");
                                n.classList.add("star"), a && n.classList.add("circle");
                                var i = e(1, .75 * t.offsetWidth),
                                    o = e(1, .8 * t.offsetHeight),
                                    l = n.style;
                                return l.left = "".concat(Math.floor(i), "px"), l.top = "".concat(Math.floor(o), "px"), l.setProperty("--star-size", "".concat(e(r, s), "px")), l.setProperty("--twinkle-duration", "".concat(Math.ceil(e(1, 3)), "s")), l.setProperty("--twinkle-delay", "".concat(Math.ceil(e(1, 8)), "s")), n
                            }, r = 0; r < 24; r++) r < 16 ? null === t || void 0 === t || t.append(a(!1, 4, 10)) : null === t || void 0 === t || t.append(a(!0, 3, 6))
                    }()
                }), []), Object(N.jsxs)("div", {
                    style: t.style,
                    className: "jsx-".concat(I.__hash) + " parallax-galaxy",
                    children: [Object(N.jsx)("div", {
                        className: "jsx-".concat(I.__hash) + " galaxy-container",
                        children: Object(N.jsxs)("div", {
                            className: "jsx-".concat(I.__hash) + " spin-container",
                            children: [Object(N.jsx)("div", {
                                id: "twinkling-stars",
                                className: "jsx-".concat(I.__hash)
                            }), Object(N.jsx)("div", {
                                className: "jsx-".concat(I.__hash) + " circle-container small-circle"
                            }), Object(N.jsxs)("div", {
                                className: "jsx-".concat(I.__hash) + " items-container small-circle",
                                children: [Object(N.jsx)("div", {
                                    className: "jsx-".concat(I.__hash) + " item gmail",
                                    children: Object(N.jsx)("img", {
                                        src: "https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/parallax/integrations/gmail.svg",
                                        alt: "gmail integration icon",
                                        className: "jsx-".concat(I.__hash)
                                    })
                                }), Object(N.jsx)("div", {
                                    className: "jsx-".concat(I.__hash) + " item linkedin",
                                    children: Object(N.jsx)("img", {
                                        src: "https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/parallax/integrations/linkedin.svg",
                                        alt: "linkedin integration icon",
                                        className: "jsx-".concat(I.__hash)
                                    })
                                }), Object(N.jsx)("div", {
                                    className: "jsx-".concat(I.__hash) + " item harvest",
                                    children: Object(N.jsx)("img", {
                                        src: "https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/parallax/integrations/harvest.svg",
                                        alt: "harvest integration icon",
                                        className: "jsx-".concat(I.__hash) + " system__icon system__icon--sun"
                                    })
                                })]
                            }), Object(N.jsx)("div", {
                                className: "jsx-".concat(I.__hash) + " circle-container medium-circle"
                            }), Object(N.jsxs)("div", {
                                className: "jsx-".concat(I.__hash) + " items-container medium-circle",
                                children: [Object(N.jsx)("div", {
                                    className: "jsx-".concat(I.__hash) + " item item-inner zoom",
                                    children: Object(N.jsx)("img", {
                                        src: "https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/parallax/integrations/zoom.svg",
                                        alt: "zoom integration icon",
                                        className: "jsx-".concat(I.__hash)
                                    })
                                }), Object(N.jsx)("div", {
                                    className: "jsx-".concat(I.__hash) + " item item-outer facebook-ads",
                                    children: Object(N.jsx)("img", {
                                        src: "https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/parallax/integrations/facebook_ads.svg",
                                        alt: "facebook-ads integration icon",
                                        className: "jsx-".concat(I.__hash)
                                    })
                                })]
                            }), Object(N.jsx)("div", {
                                className: "jsx-".concat(I.__hash) + " circle-container large-circle"
                            }), Object(N.jsxs)("div", {
                                className: "jsx-".concat(I.__hash) + " items-container large-circle",
                                children: [Object(N.jsx)("div", {
                                    className: "jsx-".concat(I.__hash) + " item mailchimp",
                                    children: Object(N.jsx)("img", {
                                        src: "https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/parallax/integrations/mailchimp.svg",
                                        alt: "mailchimp integration icon",
                                        className: "jsx-".concat(I.__hash)
                                    })
                                }), Object(N.jsx)("div", {
                                    className: "jsx-".concat(I.__hash) + " item jira",
                                    children: Object(N.jsx)("img", {
                                        src: "https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/parallax/integrations/jira.svg",
                                        alt: "jira integration icon",
                                        className: "jsx-".concat(I.__hash)
                                    })
                                }), Object(N.jsx)("div", {
                                    className: "jsx-".concat(I.__hash) + " item salesforce",
                                    children: Object(N.jsx)("img", {
                                        src: "https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/parallax/integrations/salesforce.svg",
                                        alt: "salesforce integration icon",
                                        className: "jsx-".concat(I.__hash)
                                    })
                                }), Object(N.jsx)("div", {
                                    className: "jsx-".concat(I.__hash) + " item jotform",
                                    children: Object(N.jsx)("img", {
                                        src: "https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/parallax/integrations/jotform.svg",
                                        alt: "jotform integration icon",
                                        className: "jsx-".concat(I.__hash)
                                    })
                                }), Object(N.jsx)("div", {
                                    className: "jsx-".concat(I.__hash) + " item dropbox",
                                    children: Object(N.jsx)("img", {
                                        src: "https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/parallax/integrations/dropbox.svg",
                                        alt: "dropbox integration icon",
                                        className: "jsx-".concat(I.__hash)
                                    })
                                })]
                            })]
                        })
                    }), Object(N.jsx)(p.a, {
                        id: I.__hash,
                        children: I
                    })]
                })
            };

            function H(t, e) {
                var a = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), a.push.apply(a, r)
                }
                return a
            }

            function L(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var a = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? H(Object(a), !0).forEach((function(e) {
                        Object(l.default)(t, e, a[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : H(Object(a)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
                    }))
                }
                return t
            }
            var W = "small",
                B = "medium",
                M = "step1",
                z = "step2",
                F = "step3",
                G = "scale(1)",
                q = "opacity 0.5s",
                U = "0.6s",
                Y = "0.8s",
                Z = "left ".concat(U, " ease-out, top ").concat(U, " ease-in-out, transform ").concat(U, " ease-in-out"),
                V = "left ".concat(Y, " ease-in-out, top ").concat(Y, " ease-in-out, transform ").concat(Y, " ease-in-out"),
                J = [{
                    image: {
                        src: "https://dapulse-res.cloudinary.com/image/upload/v1649149959/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/parallax/person1.png",
                        alt: "Samantha's profile image"
                    }
                }, {
                    image: {
                        src: "https://dapulse-res.cloudinary.com/image/upload/v1649149959/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/parallax/person2.png",
                        alt: "Nate's profile image"
                    }
                }, {
                    image: {
                        src: "https://dapulse-res.cloudinary.com/image/upload/v1649149959/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/parallax/person3.png",
                        alt: "Paloma's profile image"
                    }
                }],
                K = function(t) {
                    return [t("parallex.typings.first"), t("parallex.typings.second"), "".concat(v.a.renderToString(Object(N.jsxs)("div", {
                        className: "text-with-pdf",
                        children: [Object(N.jsx)("div", {
                            children: Object(N.jsx)("span", {
                                children: t("parallex.typings.third")
                            })
                        }), Object(N.jsx)("img", {
                            className: "pdf-icon",
                            src: "https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaystagingcom_static/uploads/Bar%20Ben/pdf_icon.png"
                        })]
                    })))]
                },
                X = function(t, e, a, r) {
                    var s = function(t) {
                            var e;
                            return (e = {}, Object(l.default)(e, W, {
                                GALAXY_SCALE: "scale(0.75)",
                                SPACE_BOARD_WIDTH: 450,
                                SPACE_DASHBOARD_WIDTH: 450,
                                PERSON_FIRST_SCALE: "scale(0.3)",
                                PERSON_FIRST_COLUMN: 145,
                                PERSON_ONE_FIRST_ROW: 166,
                                PERSON_TWO_FIRST_ROW: 229,
                                PERSON_THREE_FIRST_ROW: 289,
                                PERSON_ONE_SECOND_ROW: 100,
                                PERSON_TWO_SECOND_ROW: 185,
                                PERSON_THREE_SECOND_ROW: 270,
                                PERSON_THIRD_SCALE: "scale(0.32)",
                                PERSON_THIRD_ROW: 351,
                                PERSON_ONE_THIRD_ROW: 250,
                                PERSON_TWO_THIRD_ROW: 305,
                                PERSON_THREE_THIRD_ROW: 360,
                                TYPED_FONT_SIZE: 18
                            }), Object(l.default)(e, B, {
                                GALAXY_SCALE: "scale(1)",
                                SPACE_BOARD_WIDTH: 600,
                                SPACE_DASHBOARD_WIDTH: 600,
                                PERSON_FIRST_SCALE: "scale(0.4)",
                                PERSON_FIRST_COLUMN: 202,
                                PERSON_ONE_FIRST_ROW: 145,
                                PERSON_TWO_FIRST_ROW: 229,
                                PERSON_THREE_FIRST_ROW: 309,
                                PERSON_ONE_SECOND_ROW: 105,
                                PERSON_TWO_SECOND_ROW: 190,
                                PERSON_THREE_SECOND_ROW: 275,
                                PERSON_THIRD_SCALE: "scale(0.42)",
                                PERSON_THIRD_ROW: 392,
                                PERSON_ONE_THIRD_ROW: 343,
                                PERSON_TWO_THIRD_ROW: 414,
                                PERSON_THREE_THIRD_ROW: 487,
                                TYPED_FONT_SIZE: 22
                            }), e)[t]
                        }(t),
                        n = K(e);
                    return [{
                        id: "galaxy",
                        props: function(t) {
                            var e;
                            return {
                                style: L({
                                    position: "absolute",
                                    zIndex: 0,
                                    transition: q,
                                    transform: s.GALAXY_SCALE,
                                    right: -150,
                                    top: -125,
                                    opacity: 0
                                }, (e = {}, Object(l.default)(e, M, {
                                    opacity: 1
                                }), Object(l.default)(e, z, {
                                    opacity: 0
                                }), Object(l.default)(e, F, {
                                    opacity: 0
                                }), e)[t])
                            }
                        },
                        component: A
                    }, {
                        id: "space-board",
                        props: function(t) {
                            var e;
                            return {
                                image: a,
                                useWindowMask: !0,
                                width: s.SPACE_BOARD_WIDTH,
                                style: L({
                                    position: "absolute",
                                    zIndex: 1,
                                    transition: q,
                                    opacity: 0
                                }, (e = {}, Object(l.default)(e, M, {
                                    opacity: 1
                                }), Object(l.default)(e, z, {
                                    opacity: 0
                                }), Object(l.default)(e, F, {
                                    opacity: 0
                                }), e)[t])
                            }
                        },
                        component: w.a
                    }, {
                        id: "space-dashboard",
                        props: function(t) {
                            var e;
                            return {
                                video: L(L({}, r), {}, {
                                    playWhenVisible: !1,
                                    loop: !1,
                                    autoPlay: t === F
                                }),
                                hideControls: !0,
                                useWindowMask: !0,
                                width: s.SPACE_DASHBOARD_WIDTH,
                                style: L({
                                    position: "absolute",
                                    zIndex: 1,
                                    transition: q,
                                    opacity: 0
                                }, (e = {}, Object(l.default)(e, M, {
                                    opacity: 0
                                }), Object(l.default)(e, z, {
                                    opacity: 0
                                }), Object(l.default)(e, F, {
                                    opacity: 1
                                }), e)[t])
                            }
                        },
                        component: w.a
                    }, {
                        id: "person-one",
                        props: function(t) {
                            return L(L({}, J[0]), {}, {
                                width: 50,
                                style: L({
                                    position: "absolute",
                                    zIndex: 2,
                                    transition: Z,
                                    opacity: 0
                                }, {
                                    step1: {
                                        left: s.PERSON_FIRST_COLUMN,
                                        top: s.PERSON_ONE_FIRST_ROW,
                                        transform: s.PERSON_FIRST_SCALE,
                                        opacity: 1
                                    },
                                    step2: {
                                        left: 0,
                                        top: s.PERSON_ONE_SECOND_ROW,
                                        transform: G,
                                        opacity: 1
                                    },
                                    step3: {
                                        transition: V,
                                        left: s.PERSON_ONE_THIRD_ROW,
                                        top: s.PERSON_THIRD_ROW,
                                        transform: s.PERSON_THIRD_SCALE,
                                        opacity: 1
                                    }
                                }[t])
                            })
                        },
                        component: w.a
                    }, {
                        id: "person-two",
                        props: function(t) {
                            return L(L({}, J[1]), {}, {
                                width: 50,
                                style: L({
                                    position: "absolute",
                                    zIndex: 2,
                                    transition: Z,
                                    opacity: 0
                                }, {
                                    step1: {
                                        left: s.PERSON_FIRST_COLUMN,
                                        top: s.PERSON_TWO_FIRST_ROW,
                                        transform: s.PERSON_FIRST_SCALE,
                                        opacity: 1
                                    },
                                    step2: {
                                        left: 0,
                                        top: s.PERSON_TWO_SECOND_ROW,
                                        transform: G,
                                        opacity: 1
                                    },
                                    step3: {
                                        transition: V,
                                        left: s.PERSON_TWO_THIRD_ROW,
                                        top: s.PERSON_THIRD_ROW,
                                        transform: s.PERSON_THIRD_SCALE,
                                        opacity: 1
                                    }
                                }[t])
                            })
                        },
                        component: w.a
                    }, {
                        id: "person-three",
                        props: function(t) {
                            return L(L({}, J[2]), {}, {
                                width: 50,
                                style: L({
                                    position: "absolute",
                                    zIndex: 2,
                                    transition: Z,
                                    opacity: 0
                                }, {
                                    step1: {
                                        left: s.PERSON_FIRST_COLUMN,
                                        top: s.PERSON_THREE_FIRST_ROW,
                                        transform: s.PERSON_FIRST_SCALE,
                                        opacity: 1
                                    },
                                    step2: {
                                        left: 0,
                                        top: s.PERSON_THREE_SECOND_ROW,
                                        transform: G,
                                        opacity: 1
                                    },
                                    step3: {
                                        transition: V,
                                        left: s.PERSON_THREE_THIRD_ROW,
                                        top: s.PERSON_THIRD_ROW,
                                        transform: s.PERSON_THIRD_SCALE,
                                        opacity: 1
                                    }
                                }[t])
                            })
                        },
                        component: w.a
                    }, {
                        id: "typed-1",
                        props: function(t) {
                            var e;
                            return {
                                style: L({
                                    left: 75,
                                    top: 100,
                                    position: "absolute",
                                    fontSize: s.TYPED_FONT_SIZE,
                                    transition: "opacity 0.4s linear",
                                    opacity: 0
                                }, (e = {}, Object(l.default)(e, M, {
                                    opacity: 0
                                }), Object(l.default)(e, z, {
                                    opacity: 1
                                }), Object(l.default)(e, F, {
                                    opacity: 0
                                }), e)[t]),
                                stopped: t !== z,
                                typedProps: {
                                    strings: ["".concat(n[0])],
                                    startDelay: 250
                                }
                            }
                        },
                        component: D
                    }, {
                        id: "typed-2",
                        props: function(t) {
                            var e;
                            return {
                                style: L({
                                    left: 75,
                                    top: 185,
                                    position: "absolute",
                                    fontSize: s.TYPED_FONT_SIZE,
                                    transition: "opacity 0.4s linear",
                                    opacity: 0
                                }, (e = {}, Object(l.default)(e, M, {
                                    opacity: 0
                                }), Object(l.default)(e, z, {
                                    opacity: 1
                                }), Object(l.default)(e, F, {
                                    opacity: 0
                                }), e)[t]),
                                stopped: t !== z,
                                typedProps: {
                                    strings: ["".concat(n[1])],
                                    startDelay: 3e3
                                }
                            }
                        },
                        component: D
                    }, {
                        id: "typed-3",
                        props: function(t) {
                            var e;
                            return {
                                style: L({
                                    left: 75,
                                    top: 270,
                                    position: "absolute",
                                    display: "flex",
                                    fontSize: s.TYPED_FONT_SIZE,
                                    transition: "opacity 0.4s linear",
                                    opacity: 0
                                }, (e = {}, Object(l.default)(e, M, {
                                    opacity: 0
                                }), Object(l.default)(e, z, {
                                    opacity: 1
                                }), Object(l.default)(e, F, {
                                    opacity: 0
                                }), e)[t]),
                                stopped: t !== z,
                                typedProps: {
                                    strings: ["".concat(n[2])],
                                    startDelay: 5500
                                }
                            }
                        },
                        component: D
                    }]
                },
                Q = [M, z, F],
                $ = a("Tc2L"),
                tt = [".parallex-paragraphs.jsx-1168499457 .paragraph.jsx-1168499457 .bold.jsx-1168499457{font-weight:bold;}", ".parallex-paragraphs.jsx-1168499457 .paragraph.jsx-1168499457:first-child .headline.jsx-1168499457{margin-top:128px;}", ".parallex-paragraphs.jsx-1168499457 .paragraph.jsx-1168499457 .headline.jsx-1168499457{margin-top:".concat("150px", ";max-width:").concat("500px", ";}"), ".parallex-paragraphs.jsx-1168499457 .paragraph.jsx-1168499457 .headline.jsx-1168499457 .core-title{font-weight:300;}", ".parallex-paragraphs.jsx-1168499457 .paragraph.jsx-1168499457 .social-proof.jsx-1168499457{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-top:".concat("".concat(150, "px"), ";-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}"), ".parallex-paragraphs.jsx-1168499457 .paragraph.jsx-1168499457 .social-proof.jsx-1168499457 .avatar.jsx-1168499457{width:72px;height:72px;}", ".parallex-paragraphs.jsx-1168499457 .paragraph.jsx-1168499457 .social-proof.jsx-1168499457 .testimonial.jsx-1168499457{font-size:0.875rem;line-height:24px;margin-left:16px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}", ".parallex-paragraphs.jsx-1168499457 .paragraph.jsx-1168499457 .social-proof.jsx-1168499457 .testimonial.jsx-1168499457 .content.jsx-1168499457{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;max-width:".concat("".concat(400, "px"), ";}"), ".parallex-paragraphs.jsx-1168499457 .paragraph.jsx-1168499457 .social-proof.jsx-1168499457 .testimonial.jsx-1168499457 .content.jsx-1168499457 .company.jsx-1168499457{font-size:0.8125rem;line-height:20px;}", ".parallex-paragraphs.jsx-1168499457 .paragraph.jsx-1168499457 .social-proof.jsx-1168499457 .testimonial.jsx-1168499457 .content.jsx-1168499457 .person.jsx-1168499457{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-top:8px;font-size:0.8125rem;line-height:20px;}", ".parallex-paragraphs.jsx-1168499457 .paragraph.jsx-1168499457 .social-proof.jsx-1168499457 .testimonial.jsx-1168499457 .content.jsx-1168499457 .person.jsx-1168499457 .text.jsx-1168499457{font-weight:bold;}", ".parallex-paragraphs.jsx-1168499457 .paragraph.jsx-1168499457 .social-proof.jsx-1168499457 .testimonial.jsx-1168499457 .content.jsx-1168499457 .person.jsx-1168499457 .divider.jsx-1168499457{margin:0 4px;}", ".parallex-paragraphs.jsx-1168499457 .paragraph.jsx-1168499457 .social-proof.jsx-1168499457 .testimonial.jsx-1168499457 .content.jsx-1168499457 .person.jsx-1168499457 .logo.jsx-1168499457{width:auto;height:18px;}"];
            tt.__hash = "1168499457";
            var et = function(t) {
                    var e = t.paragraphs;
                    return Object(N.jsxs)("div", {
                        className: "jsx-".concat(tt.__hash) + " parallex-paragraphs",
                        children: [e.map((function(t, e) {
                            return Object(N.jsxs)("div", {
                                className: "jsx-".concat(tt.__hash) + " paragraph",
                                children: [Object(N.jsx)("div", {
                                    className: "jsx-".concat(tt.__hash) + " headline",
                                    children: Object(N.jsx)($.b, {
                                        title: t.title,
                                        body: t.description,
                                        topic: {
                                            text: ""
                                        },
                                        buttonConfig: t.buttonConfig
                                    })
                                }), Object(N.jsxs)("div", {
                                    className: "jsx-".concat(tt.__hash) + " social-proof",
                                    children: [Object(N.jsx)("img", {
                                        src: t.avatarSrc,
                                        alt: t.avatarAlt,
                                        className: "jsx-".concat(tt.__hash) + " avatar"
                                    }), Object(N.jsxs)("div", {
                                        className: "jsx-".concat(tt.__hash) + " testimonial",
                                        children: [Object(N.jsx)("span", {
                                            className: "jsx-".concat(tt.__hash),
                                            children: "\u201c"
                                        }), Object(N.jsxs)("div", {
                                            className: "jsx-".concat(tt.__hash) + " content",
                                            children: [Object(N.jsxs)("span", {
                                                className: "jsx-".concat(tt.__hash) + " main",
                                                children: [t.testimonial, "\u201d"]
                                            }), Object(N.jsxs)("div", {
                                                className: "jsx-".concat(tt.__hash) + " person",
                                                children: [Object(N.jsx)("span", {
                                                    className: "jsx-".concat(tt.__hash) + " text",
                                                    children: t.name
                                                }), Object(N.jsx)("span", {
                                                    className: "jsx-".concat(tt.__hash) + " divider",
                                                    children: "|"
                                                }), Object(N.jsx)("span", {
                                                    className: "jsx-".concat(tt.__hash) + " text",
                                                    children: t.jobTitle
                                                })]
                                            }), Object(N.jsx)("div", {
                                                className: "jsx-".concat(tt.__hash) + " company",
                                                children: t.companyName
                                            })]
                                        })]
                                    })]
                                })]
                            }, "paragraph_".concat(e))
                        })), Object(N.jsx)(p.a, {
                            id: tt.__hash,
                            children: tt
                        })]
                    })
                },
                at = a("zcv4"),
                rt = a("ZIUT"),
                st = a.n(rt),
                nt = a("xwfA"),
                it = "".concat(at.a.HEADER_CONTENT_HORIZONTAL_PADDING, "px"),
                ot = "".concat(st.a.BODY_CONTENT_HORIZONTAL_PADDING, "px"),
                lt = [".scroll-parallax-homepage-first-fold-component-desktop.jsx-1545135405{background:".concat(nt.a[n.SPACE_BLUE_COLOR_NAME], ";color:").concat(nt.a[n.WHITE_COLOR_NAME], ";position:relative;padding:128px 0;}"), ".scroll-parallax-homepage-first-fold-component-desktop.jsx-1545135405 .container.jsx-1545135405{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;max-width:".concat("".concat(y.k, "px"), ";margin:auto;padding:", "0 ".concat(ot), ";}"), ".scroll-parallax-homepage-first-fold-component-desktop.jsx-1545135405 .container.align-to-logo.jsx-1545135405{padding-left:".concat(it, ";padding-right:").concat(it, ";}"), ".scroll-parallax-homepage-first-fold-component-desktop.jsx-1545135405 .container.jsx-1545135405 .paragraphs.jsx-1545135405{-webkit-flex:1 0 0;-ms-flex:1 0 0;flex:1 0 0;}", ".scroll-parallax-homepage-first-fold-component-desktop.jsx-1545135405 .container.jsx-1545135405 .parallex.jsx-1545135405{-webkit-flex:1 0 0;-ms-flex:1 0 0;flex:1 0 0;position:relative;min-height:100%;padding-left:50px;}", ".scroll-parallax-homepage-first-fold-component-desktop.jsx-1545135405 .container.jsx-1545135405 .parallex.jsx-1545135405 .controller.jsx-1545135405{height:500px;position:-webkit-sticky;position:sticky;top:calc(50% - 250px);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}", ".scroll-parallax-homepage-first-fold-component-desktop.jsx-1545135405 .container.jsx-1545135405 .parallex.jsx-1545135405 .controller.jsx-1545135405 .window-mask{padding:0;}", "@media (max-width:".concat(y.n, "){.parallax-galaxy-wrapper.jsx-1545135405{-webkit-transform:scale(0.75);-ms-transform:scale(0.75);transform:scale(0.75);}}")];
            lt.__hash = "1545135405";
            var ct = ["@-webkit-keyframes fade-in-jsx-2870219812{0%{opacity:0;-webkit-transform:scale(0.5);-ms-transform:scale(0.5);transform:scale(0.5);}80%{opacity:1;-webkit-transform:scale(1.15);-ms-transform:scale(1.15);transform:scale(1.15);}100%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}}", "@keyframes fade-in-jsx-2870219812{0%{opacity:0;-webkit-transform:scale(0.5);-ms-transform:scale(0.5);transform:scale(0.5);}80%{opacity:1;-webkit-transform:scale(1.15);-ms-transform:scale(1.15);transform:scale(1.15);}100%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}}", ".text-with-pdf .pdf-icon{width:70px;margin-left:-20px;margin-top:-8px;-webkit-animation:fade-in-jsx-2870219812 0.5s ease-in-out;animation:fade-in-jsx-2870219812 0.5s ease-in-out;}"];

            function pt(t, e) {
                var a = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), a.push.apply(a, r)
                }
                return a
            }

            function ut(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var a = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? pt(Object(a), !0).forEach((function(e) {
                        Object(l.default)(t, e, a[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : pt(Object(a)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
                    }))
                }
                return t
            }
            ct.__hash = "2870219812";
            var dt = function(t) {
                    var e = t.alignToLogo,
                        a = t.paragraphs,
                        r = t.translate,
                        s = t.bottomAsset,
                        n = t.topAsset,
                        i = t.backgroundColor,
                        o = function() {
                            var t = Object(u.useState)(m()),
                                e = t[0],
                                a = t[1];
                            return Object(u.useEffect)((function() {
                                if (Object(d.b)()) return !1;

                                function t() {
                                    a(m())
                                }
                                return window.addEventListener("resize", t),
                                    function() {
                                        return window.removeEventListener("resize", t)
                                    }
                            }), []), e
                        }().width,
                        l = Object(u.useRef)(null),
                        c = Object(u.useRef)(null),
                        x = j(l),
                        f = j(c),
                        h = o >= y.k ? B : W,
                        g = X(h, r, n, s),
                        b = Q[Math.floor(f.offsetTop * Q.length / x.clientHeight)];
                    return Object(N.jsxs)("div", {
                        style: {
                            backgroundColor: nt.a[i]
                        },
                        className: "jsx-".concat(lt.__hash, " jsx-").concat(ct.__hash) + " scroll-parallax-homepage-first-fold-component-desktop",
                        children: [Object(N.jsxs)("div", {
                            className: "jsx-".concat(lt.__hash, " jsx-").concat(ct.__hash) + " " + (O()("container", {
                                "align-to-logo": e
                            }) || ""),
                            children: [Object(N.jsx)("div", {
                                className: "jsx-".concat(lt.__hash, " jsx-").concat(ct.__hash) + " paragraphs",
                                children: Object(N.jsx)(et, {
                                    paragraphs: a
                                })
                            }), Object(N.jsx)("div", {
                                ref: l,
                                className: "jsx-".concat(lt.__hash, " jsx-").concat(ct.__hash) + " parallex",
                                children: Object(N.jsx)("div", {
                                    ref: c,
                                    className: "jsx-".concat(lt.__hash, " jsx-").concat(ct.__hash) + " controller",
                                    children: g.map((function(t) {
                                        var e = t.id,
                                            a = t.props,
                                            r = t.component;
                                        return Object(N.jsx)(r, ut(ut({}, a(b)), {}, {
                                            className: "jsx-".concat(lt.__hash, " jsx-").concat(ct.__hash)
                                        }), e)
                                    }))
                                })
                            })]
                        }), Object(N.jsx)(p.a, {
                            id: lt.__hash,
                            children: lt
                        }), Object(N.jsx)(p.a, {
                            id: ct.__hash,
                            children: ct
                        })]
                    })
                },
                mt = a("bZyZ"),
                xt = (a("M173"), a("zaBJ")),
                ft = a("VgqV"),
                ht = a("n8Bu"),
                gt = a.n(ht),
                jt = [".scroll-parallax-homepage-first-fold-mobile-component.jsx-3714210345{background:".concat(nt.a[n.SPACE_BLUE_COLOR_NAME], ";}"), ".scroll-parallax-homepage-first-fold-mobile-component.jsx-3714210345 .full-paragraph-component-wrapper{padding-bottom:20px;}", ".scroll-parallax-homepage-first-fold-mobile-component.jsx-3714210345 .middle-paragraph-and-asset{padding-bottom:24px;}", ".scroll-parallax-homepage-first-fold-mobile-component.jsx-3714210345 .top-asset-wrapper .asset-inner{padding-top:72px;}", ".scroll-parallax-homepage-first-fold-mobile-component.jsx-3714210345 .top-asset-wrapper .parallax-galaxy-wrapper,.scroll-parallax-homepage-first-fold-mobile-component.jsx-3714210345 .bottom-asset-wrapper .parallax-galaxy-wrapper{-webkit-transform:scale(0.4);-ms-transform:scale(0.4);transform:scale(0.4);top:5vw;right:-28vw;position:relative;}", ".scroll-parallax-homepage-first-fold-mobile-component.jsx-3714210345 .middle-asset-wrapper{width:100%;min-height:250px;}", ".scroll-parallax-homepage-first-fold-mobile-component.jsx-3714210345 .middle-asset-wrapper .typing-wrapper{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-top:24px;}", ".scroll-parallax-homepage-first-fold-mobile-component.jsx-3714210345 .middle-asset-wrapper .typing-wrapper .picture-component{padding-right:8px;}", ".scroll-parallax-homepage-first-fold-mobile-component.jsx-3714210345 .middle-asset-wrapper .typing-wrapper .picture-component img{width:40px;}", ".scroll-parallax-homepage-first-fold-mobile-component.jsx-3714210345 .middle-asset-wrapper .typing-wrapper:last-child .typed-component{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}", ".scroll-parallax-homepage-first-fold-mobile-component.jsx-3714210345 .side-by-side-text-and-asset .side-by-side-content.is-full-width{padding-top:60px;padding-bottom:0;}"];

            function yt(t, e) {
                var a = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), a.push.apply(a, r)
                }
                return a
            }

            function bt(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var a = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? yt(Object(a), !0).forEach((function(e) {
                        Object(l.default)(t, e, a[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : yt(Object(a)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
                    }))
                }
                return t
            }
            jt.__hash = "3714210345";
            var Ot = function(t) {
                    var e = Object(u.useState)(!1),
                        a = e[0],
                        r = e[1],
                        s = t.paragraphs,
                        i = t.topAsset,
                        o = t.bottomAsset,
                        l = t.translate,
                        c = s.map((function(t) {
                            return {
                                paragraph: {
                                    title: t.title,
                                    titleSize: ft.e,
                                    body: t.description,
                                    topic: ""
                                }
                            }
                        }));
                    return Object(N.jsxs)("div", {
                        className: "jsx-".concat(ct.__hash, " jsx-").concat(jt.__hash) + " scroll-parallax-homepage-first-fold-mobile-component",
                        children: [Object(N.jsx)(mt.a, {
                            background: {
                                color: n.SPACE_BLUE_COLOR_NAME,
                                width: "100%"
                            },
                            fullParagraph: c[0].paragraph,
                            replaceAssetComponent: function() {
                                return Object(N.jsxs)("div", {
                                    className: "top-asset-wrapper",
                                    children: [Object(N.jsx)("div", {
                                        className: "parallax-galaxy-wrapper",
                                        children: Object(N.jsx)(A, {})
                                    }), Object(N.jsx)(w.a, {
                                        image: i,
                                        useWindowMask: !0
                                    })]
                                })
                            },
                            contentClassName: "top-paragraph-and-asset"
                        }), Object(N.jsx)(mt.a, {
                            background: {
                                color: n.SPACE_BLUE_COLOR_NAME,
                                width: "100%"
                            },
                            fullParagraph: c[1].paragraph,
                            replaceAssetComponent: function() {
                                var t = function(t) {
                                    return {
                                        typedProps: {
                                            strings: ["".concat(K(l)[t])],
                                            startDelay: [250, 3e3, 5500][t]
                                        }
                                    }
                                };
                                return Object(N.jsx)(gt.a, {
                                    offset: {
                                        bottom: 0,
                                        top: 0
                                    },
                                    partialVisibility: !0,
                                    active: !0,
                                    scrollCheck: !0,
                                    onChange: function(t) {
                                        !a && t && r(!0)
                                    },
                                    children: Object(N.jsx)("div", {
                                        className: "middle-asset-wrapper",
                                        children: J.map((function(e, r) {
                                            return Object(N.jsxs)("div", {
                                                className: "typing-wrapper",
                                                children: [Object(N.jsx)(xt.a, bt({}, J[r].image)), a && Object(N.jsx)(D, bt({}, t(r)))]
                                            })
                                        }))
                                    })
                                })
                            },
                            contentClassName: "middle-paragraph-and-asset"
                        }), Object(N.jsx)(mt.a, {
                            background: {
                                color: n.SPACE_BLUE_COLOR_NAME,
                                width: "100%"
                            },
                            fullParagraph: c[2].paragraph,
                            replaceAssetComponent: function() {
                                return Object(N.jsx)("div", {
                                    className: "bottom-asset-wrapper",
                                    children: Object(N.jsx)(w.a, {
                                        video: o,
                                        useWindowMask: !0
                                    })
                                })
                            },
                            contentClassName: "bottom-paragraph-and-asset"
                        }), Object(N.jsx)(p.a, {
                            id: ct.__hash,
                            children: ct
                        }), Object(N.jsx)(p.a, {
                            id: jt.__hash,
                            children: jt
                        })]
                    })
                },
                _t = Object(r.a)(dt, Ot);
            _t.defaultProps = o;
            e.default = _t
        },
        ELNm: function(t, e, a) {
            var r;
            r = function() {
                return function(t) {
                    var e = {};

                    function a(r) {
                        if (e[r]) return e[r].exports;
                        var s = e[r] = {
                            exports: {},
                            id: r,
                            loaded: !1
                        };
                        return t[r].call(s.exports, s, s.exports, a), s.loaded = !0, s.exports
                    }
                    return a.m = t, a.c = e, a.p = "", a(0)
                }([function(t, e, a) {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = function() {
                            function t(t, e) {
                                for (var a = 0; a < e.length; a++) {
                                    var r = e[a];
                                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                                }
                            }
                            return function(e, a, r) {
                                return a && t(e.prototype, a), r && t(e, r), e
                            }
                        }(),
                        s = a(1),
                        n = a(3),
                        i = function() {
                            function t(e, a) {
                                ! function(t, e) {
                                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                                }(this, t), s.initializer.load(this, a, e), this.begin()
                            }
                            return r(t, [{
                                key: "toggle",
                                value: function() {
                                    this.pause.status ? this.start() : this.stop()
                                }
                            }, {
                                key: "stop",
                                value: function() {
                                    this.typingComplete || this.pause.status || (this.toggleBlinking(!0), this.pause.status = !0, this.options.onStop(this.arrayPos, this))
                                }
                            }, {
                                key: "start",
                                value: function() {
                                    this.typingComplete || this.pause.status && (this.pause.status = !1, this.pause.typewrite ? this.typewrite(this.pause.curString, this.pause.curStrPos) : this.backspace(this.pause.curString, this.pause.curStrPos), this.options.onStart(this.arrayPos, this))
                                }
                            }, {
                                key: "destroy",
                                value: function() {
                                    this.reset(!1), this.options.onDestroy(this)
                                }
                            }, {
                                key: "reset",
                                value: function() {
                                    var t = arguments.length <= 0 || void 0 === arguments[0] || arguments[0];
                                    clearInterval(this.timeout), this.replaceText(""), this.cursor && this.cursor.parentNode && (this.cursor.parentNode.removeChild(this.cursor), this.cursor = null), this.strPos = 0, this.arrayPos = 0, this.curLoop = 0, t && (this.insertCursor(), this.options.onReset(this), this.begin())
                                }
                            }, {
                                key: "begin",
                                value: function() {
                                    var t = this;
                                    this.options.onBegin(this), this.typingComplete = !1, this.shuffleStringsIfNeeded(this), this.insertCursor(), this.bindInputFocusEvents && this.bindFocusEvents(), this.timeout = setTimeout((function() {
                                        t.currentElContent && 0 !== t.currentElContent.length ? t.backspace(t.currentElContent, t.currentElContent.length) : t.typewrite(t.strings[t.sequence[t.arrayPos]], t.strPos)
                                    }), this.startDelay)
                                }
                            }, {
                                key: "typewrite",
                                value: function(t, e) {
                                    var a = this;
                                    this.fadeOut && this.el.classList.contains(this.fadeOutClass) && (this.el.classList.remove(this.fadeOutClass), this.cursor && this.cursor.classList.remove(this.fadeOutClass));
                                    var r = this.humanizer(this.typeSpeed),
                                        s = 1;
                                    !0 !== this.pause.status ? this.timeout = setTimeout((function() {
                                        e = n.htmlParser.typeHtmlChars(t, e, a);
                                        var r = 0,
                                            i = t.substr(e);
                                        if ("^" === i.charAt(0) && /^\^\d+/.test(i)) {
                                            var o = 1;
                                            o += (i = /\d+/.exec(i)[0]).length, r = parseInt(i), a.temporaryPause = !0, a.options.onTypingPaused(a.arrayPos, a), t = t.substring(0, e) + t.substring(e + o), a.toggleBlinking(!0)
                                        }
                                        if ("`" === i.charAt(0)) {
                                            for (;
                                                "`" !== t.substr(e + s).charAt(0) && (s++, !(e + s > t.length)););
                                            var l = t.substring(0, e),
                                                c = t.substring(l.length + 1, e + s),
                                                p = t.substring(e + s + 1);
                                            t = l + c + p, s--
                                        }
                                        a.timeout = setTimeout((function() {
                                            a.toggleBlinking(!1), e >= t.length ? a.doneTyping(t, e) : a.keepTyping(t, e, s), a.temporaryPause && (a.temporaryPause = !1, a.options.onTypingResumed(a.arrayPos, a))
                                        }), r)
                                    }), r) : this.setPauseStatus(t, e, !0)
                                }
                            }, {
                                key: "keepTyping",
                                value: function(t, e, a) {
                                    0 === e && (this.toggleBlinking(!1), this.options.preStringTyped(this.arrayPos, this)), e += a;
                                    var r = t.substr(0, e);
                                    this.replaceText(r), this.typewrite(t, e)
                                }
                            }, {
                                key: "doneTyping",
                                value: function(t, e) {
                                    var a = this;
                                    this.options.onStringTyped(this.arrayPos, this), this.toggleBlinking(!0), this.arrayPos === this.strings.length - 1 && (this.complete(), !1 === this.loop || this.curLoop === this.loopCount) || (this.timeout = setTimeout((function() {
                                        a.backspace(t, e)
                                    }), this.backDelay))
                                }
                            }, {
                                key: "backspace",
                                value: function(t, e) {
                                    var a = this;
                                    if (!0 !== this.pause.status) {
                                        if (this.fadeOut) return this.initFadeOut();
                                        this.toggleBlinking(!1);
                                        var r = this.humanizer(this.backSpeed);
                                        this.timeout = setTimeout((function() {
                                            e = n.htmlParser.backSpaceHtmlChars(t, e, a);
                                            var r = t.substr(0, e);
                                            if (a.replaceText(r), a.smartBackspace) {
                                                var s = a.strings[a.arrayPos + 1];
                                                s && r === s.substr(0, e) ? a.stopNum = e : a.stopNum = 0
                                            }
                                            e > a.stopNum ? (e--, a.backspace(t, e)) : e <= a.stopNum && (a.arrayPos++, a.arrayPos === a.strings.length ? (a.arrayPos = 0, a.options.onLastStringBackspaced(), a.shuffleStringsIfNeeded(), a.begin()) : a.typewrite(a.strings[a.sequence[a.arrayPos]], e))
                                        }), r)
                                    } else this.setPauseStatus(t, e, !1)
                                }
                            }, {
                                key: "complete",
                                value: function() {
                                    this.options.onComplete(this), this.loop ? this.curLoop++ : this.typingComplete = !0
                                }
                            }, {
                                key: "setPauseStatus",
                                value: function(t, e, a) {
                                    this.pause.typewrite = a, this.pause.curString = t, this.pause.curStrPos = e
                                }
                            }, {
                                key: "toggleBlinking",
                                value: function(t) {
                                    this.cursor && (this.pause.status || this.cursorBlinking !== t && (this.cursorBlinking = t, t ? this.cursor.classList.add("typed-cursor--blink") : this.cursor.classList.remove("typed-cursor--blink")))
                                }
                            }, {
                                key: "humanizer",
                                value: function(t) {
                                    return Math.round(Math.random() * t / 2) + t
                                }
                            }, {
                                key: "shuffleStringsIfNeeded",
                                value: function() {
                                    this.shuffle && (this.sequence = this.sequence.sort((function() {
                                        return Math.random() - .5
                                    })))
                                }
                            }, {
                                key: "initFadeOut",
                                value: function() {
                                    var t = this;
                                    return this.el.className += " " + this.fadeOutClass, this.cursor && (this.cursor.className += " " + this.fadeOutClass), setTimeout((function() {
                                        t.arrayPos++, t.replaceText(""), t.strings.length > t.arrayPos ? t.typewrite(t.strings[t.sequence[t.arrayPos]], 0) : (t.typewrite(t.strings[0], 0), t.arrayPos = 0)
                                    }), this.fadeOutDelay)
                                }
                            }, {
                                key: "replaceText",
                                value: function(t) {
                                    this.attr ? this.el.setAttribute(this.attr, t) : this.isInput ? this.el.value = t : "html" === this.contentType ? this.el.innerHTML = t : this.el.textContent = t
                                }
                            }, {
                                key: "bindFocusEvents",
                                value: function() {
                                    var t = this;
                                    this.isInput && (this.el.addEventListener("focus", (function(e) {
                                        t.stop()
                                    })), this.el.addEventListener("blur", (function(e) {
                                        t.el.value && 0 !== t.el.value.length || t.start()
                                    })))
                                }
                            }, {
                                key: "insertCursor",
                                value: function() {
                                    this.showCursor && (this.cursor || (this.cursor = document.createElement("span"), this.cursor.className = "typed-cursor", this.cursor.setAttribute("aria-hidden", !0), this.cursor.innerHTML = this.cursorChar, this.el.parentNode && this.el.parentNode.insertBefore(this.cursor, this.el.nextSibling)))
                                }
                            }]), t
                        }();
                    e.default = i, t.exports = e.default
                }, function(t, e, a) {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r, s = Object.assign || function(t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var a = arguments[e];
                                for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (t[r] = a[r])
                            }
                            return t
                        },
                        n = function() {
                            function t(t, e) {
                                for (var a = 0; a < e.length; a++) {
                                    var r = e[a];
                                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                                }
                            }
                            return function(e, a, r) {
                                return a && t(e.prototype, a), r && t(e, r), e
                            }
                        }(),
                        i = a(2),
                        o = (r = i) && r.__esModule ? r : {
                            default: r
                        },
                        l = function() {
                            function t() {
                                ! function(t, e) {
                                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                                }(this, t)
                            }
                            return n(t, [{
                                key: "load",
                                value: function(t, e, a) {
                                    if (t.el = "string" === typeof a ? document.querySelector(a) : a, t.options = s({}, o.default, e), t.isInput = "input" === t.el.tagName.toLowerCase(), t.attr = t.options.attr, t.bindInputFocusEvents = t.options.bindInputFocusEvents, t.showCursor = !t.isInput && t.options.showCursor, t.cursorChar = t.options.cursorChar, t.cursorBlinking = !0, t.elContent = t.attr ? t.el.getAttribute(t.attr) : t.el.textContent, t.contentType = t.options.contentType, t.typeSpeed = t.options.typeSpeed, t.startDelay = t.options.startDelay, t.backSpeed = t.options.backSpeed, t.smartBackspace = t.options.smartBackspace, t.backDelay = t.options.backDelay, t.fadeOut = t.options.fadeOut, t.fadeOutClass = t.options.fadeOutClass, t.fadeOutDelay = t.options.fadeOutDelay, t.isPaused = !1, t.strings = t.options.strings.map((function(t) {
                                            return t.trim()
                                        })), "string" === typeof t.options.stringsElement ? t.stringsElement = document.querySelector(t.options.stringsElement) : t.stringsElement = t.options.stringsElement, t.stringsElement) {
                                        t.strings = [], t.stringsElement.style.display = "none";
                                        var r = Array.prototype.slice.apply(t.stringsElement.children),
                                            n = r.length;
                                        if (n)
                                            for (var i = 0; i < n; i += 1) {
                                                var l = r[i];
                                                t.strings.push(l.innerHTML.trim())
                                            }
                                    }
                                    for (var i in t.strPos = 0, t.arrayPos = 0, t.stopNum = 0, t.loop = t.options.loop, t.loopCount = t.options.loopCount, t.curLoop = 0, t.shuffle = t.options.shuffle, t.sequence = [], t.pause = {
                                            status: !1,
                                            typewrite: !0,
                                            curString: "",
                                            curStrPos: 0
                                        }, t.typingComplete = !1, t.strings) t.sequence[i] = i;
                                    t.currentElContent = this.getCurrentElContent(t), t.autoInsertCss = t.options.autoInsertCss, this.appendAnimationCss(t)
                                }
                            }, {
                                key: "getCurrentElContent",
                                value: function(t) {
                                    return t.attr ? t.el.getAttribute(t.attr) : t.isInput ? t.el.value : "html" === t.contentType ? t.el.innerHTML : t.el.textContent
                                }
                            }, {
                                key: "appendAnimationCss",
                                value: function(t) {
                                    var e = "data-typed-js-css";
                                    if (t.autoInsertCss && (t.showCursor || t.fadeOut) && !document.querySelector("[" + e + "]")) {
                                        var a = document.createElement("style");
                                        a.type = "text/css", a.setAttribute(e, !0);
                                        var r = "";
                                        t.showCursor && (r += "\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      "), t.fadeOut && (r += "\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      "), 0 !== a.length && (a.innerHTML = r, document.body.appendChild(a))
                                    }
                                }
                            }]), t
                        }();
                    e.default = l;
                    var c = new l;
                    e.initializer = c
                }, function(t, e) {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var a = {
                        strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
                        stringsElement: null,
                        typeSpeed: 0,
                        startDelay: 0,
                        backSpeed: 0,
                        smartBackspace: !0,
                        shuffle: !1,
                        backDelay: 700,
                        fadeOut: !1,
                        fadeOutClass: "typed-fade-out",
                        fadeOutDelay: 500,
                        loop: !1,
                        loopCount: 1 / 0,
                        showCursor: !0,
                        cursorChar: "|",
                        autoInsertCss: !0,
                        attr: null,
                        bindInputFocusEvents: !1,
                        contentType: "html",
                        onBegin: function(t) {},
                        onComplete: function(t) {},
                        preStringTyped: function(t, e) {},
                        onStringTyped: function(t, e) {},
                        onLastStringBackspaced: function(t) {},
                        onTypingPaused: function(t, e) {},
                        onTypingResumed: function(t, e) {},
                        onReset: function(t) {},
                        onStop: function(t, e) {},
                        onStart: function(t, e) {},
                        onDestroy: function(t) {}
                    };
                    e.default = a, t.exports = e.default
                }, function(t, e) {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var a = function() {
                            function t(t, e) {
                                for (var a = 0; a < e.length; a++) {
                                    var r = e[a];
                                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                                }
                            }
                            return function(e, a, r) {
                                return a && t(e.prototype, a), r && t(e, r), e
                            }
                        }(),
                        r = function() {
                            function t() {
                                ! function(t, e) {
                                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                                }(this, t)
                            }
                            return a(t, [{
                                key: "typeHtmlChars",
                                value: function(t, e, a) {
                                    if ("html" !== a.contentType) return e;
                                    var r = t.substr(e).charAt(0);
                                    if ("<" === r || "&" === r) {
                                        var s = "";
                                        for (s = "<" === r ? ">" : ";"; t.substr(e + 1).charAt(0) !== s && !(1 + ++e > t.length););
                                        e++
                                    }
                                    return e
                                }
                            }, {
                                key: "backSpaceHtmlChars",
                                value: function(t, e, a) {
                                    if ("html" !== a.contentType) return e;
                                    var r = t.substr(e).charAt(0);
                                    if (">" === r || ";" === r) {
                                        var s = "";
                                        for (s = ">" === r ? "<" : "&"; t.substr(e - 1).charAt(0) !== s && !(--e < 0););
                                        e--
                                    }
                                    return e
                                }
                            }]), t
                        }();
                    e.default = r;
                    var s = new r;
                    e.htmlParser = s
                }])
            }, t.exports = r()
        }
    }
]);
//# sourceMappingURL=137.8a38d6ba632082c74e08.js.map