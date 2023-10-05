(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [35], {
        Xawi: function(e, t, a) {
            "use strict";
            var u, l, r, i, n, s, c, f, d, o, E, O, b, R, m, k, j, N, P, p, S, T, A, g, C, I, D, V, y, h, F, _, B, w, v, L, M, x, Y, W, K, q, G, z, X, U, H, J, Q, Z, $, ee, te, ae, ue, le, re, ie, ne, se, ce, fe, de, oe, Ee, Oe, be, Re, me, ke, je, Ne, Pe, pe, Se, Te, Ae, ge, Ce, Ie, De, Ve, ye, he, Fe, _e, Be, we, ve, Le, Me, xe, Ye, We, Ke, qe, Ge, ze, Xe, Ue, He, Je, Qe, Ze, $e, et, tt, at, ut, lt, rt, it, nt, st, ct, ft, dt, ot, Et, Ot, bt, Rt, mt, kt, jt, Nt, Pt, pt, St, Tt, At, gt, Ct, It, Dt, Vt, yt, ht, Ft, _t, Bt, wt, vt, Lt, Mt, xt, Yt, Wt, Kt, qt, Gt, zt, Xt, Ut, Ht, Jt, Qt, Zt, $t, ea, ta, aa, ua, la, ra, ia, na, sa, ca, fa, da, oa, Ea, Oa, ba, Ra, ma, ka, ja, Na, Pa, pa, Sa, Ta, Aa, ga, Ca, Ia, Da, Va, ya, ha, Fa, _a, Ba, wa, va, La, Ma, xa, Ya, Wa, Ka, qa, Ga, za, Xa, Ua, Ha, Ja, Qa, Za, $a, eu, tu, au, uu, lu, ru, iu, nu, su, cu, fu, du, ou, Eu, Ou, bu, Ru, mu, ku, ju, Nu, Pu, pu, Su, Tu, Au, gu, Cu, Iu, Du, Vu, yu, hu, Fu, _u, Bu, wu, vu, Lu, Mu, xu, Yu, Wu = a("cpVT"),
                Ku = a("xwfA"),
                qu = a("aIIR"),
                Gu = a("xPEm"),
                zu = a("/Z+I");
            t.a = {
                core: {
                    productId: Gu.n,
                    showInSwitcher: !0,
                    switcherLabel: "Work\nmanagement",
                    switcherIconColor: Ku.a[zu.WORK_OS_IRIS_COLOR_NAME],
                    orderInSwitcher: 2,
                    showLearnMoreVideo: !0,
                    label: "pricingPage.products.core.title",
                    color: Ku.a["product-core"],
                    primaryColor: Ku.a[zu.WORK_OS_IRIS_COLOR_NAME],
                    secondaryColor: Ku.a["brand-iris-hover"],
                    mostPopularTierBySeat: {
                        0: qu.k.STANDARD,
                        25: qu.k.PRO,
                        100: qu.k.ENTERPRISE
                    },
                    tiers: [{
                        name: qu.k.FREE,
                        features: ["upTo3Boards", "unlimitedDocs", "200plusTemplates", "limitedColumnTypes", "iosAndAndroidApps"]
                    }, {
                        name: qu.k.BASIC,
                        features: ["unlimitedFreeViewers", "unlimitedItems", "5GbFileStorage", "prioritisedCustomerSupport", "dashboardBasedOn1Board"]
                    }, {
                        name: qu.k.STANDARD,
                        features: ["timelineAndGanttViews", "calendarView", "guestAccess", "automations250", "integrations250", "dashboardCombined5boards"]
                    }, {
                        name: qu.k.PRO,
                        features: ["privateBoardsAndWorkdocs", "chartView", "timeTracking", "formulaColumn", "automations25K", "integrations25K", "dashboardCombined10boards"]
                    }, {
                        name: qu.k.ENTERPRISE,
                        features: ["enterpriseAutomationsAndIntegrations", "multiLevelPermissions", "enterpriseSecurityAndGovernance", "advancedReportingAndAnalytics", "tailoredOnboarding", "premiumSupport", "dashboardCombined50boards"]
                    }],
                    featuresList: [{
                        sectionName: "essentials",
                        features: [{
                            featureName: "maximumNumberOfSeats",
                            tierColumnValues: (u = {}, Object(Wu.default)(u, qu.k.FREE, "pricingPage.features.plans.upTo2Seat"), Object(Wu.default)(u, qu.k.BASIC, "pricingPage.features.plans.unlimited"), Object(Wu.default)(u, qu.k.STANDARD, "pricingPage.features.plans.unlimited"), Object(Wu.default)(u, qu.k.PRO, "pricingPage.features.plans.unlimited"), Object(Wu.default)(u, qu.k.ENTERPRISE, "pricingPage.features.plans.unlimited"), u)
                        }, {
                            featureName: "items",
                            tierColumnValues: (l = {}, Object(Wu.default)(l, qu.k.FREE, "pricingPage.features.plans.upToOneK"), Object(Wu.default)(l, qu.k.BASIC, "pricingPage.features.plans.unlimited"), Object(Wu.default)(l, qu.k.STANDARD, "pricingPage.features.plans.unlimited"), Object(Wu.default)(l, qu.k.PRO, "pricingPage.features.plans.unlimited"), Object(Wu.default)(l, qu.k.ENTERPRISE, "pricingPage.features.plans.unlimited"), l)
                        }, {
                            featureName: "fileStorage",
                            tierColumnValues: (r = {}, Object(Wu.default)(r, qu.k.FREE, "pricingPage.features.plans.storage_free"), Object(Wu.default)(r, qu.k.BASIC, "pricingPage.features.plans.storage_basic"), Object(Wu.default)(r, qu.k.STANDARD, "pricingPage.features.plans.storage_standard"), Object(Wu.default)(r, qu.k.PRO, "pricingPage.features.plans.storage_pro"), Object(Wu.default)(r, qu.k.ENTERPRISE, "pricingPage.features.plans.storage_enterprise"), r)
                        }, {
                            featureName: "activityLog",
                            tierColumnValues: (i = {}, Object(Wu.default)(i, qu.k.FREE, "pricingPage.features.plans.one_week"), Object(Wu.default)(i, qu.k.BASIC, "pricingPage.features.plans.one_week"), Object(Wu.default)(i, qu.k.STANDARD, "pricingPage.features.plans.six_months"), Object(Wu.default)(i, qu.k.PRO, "pricingPage.features.plans.one_year"), Object(Wu.default)(i, qu.k.ENTERPRISE, "pricingPage.features.plans.five_years"), i)
                        }, {
                            featureName: "unlimitedBoards",
                            tierColumnValues: (n = {}, Object(Wu.default)(n, qu.k.BASIC, !0), Object(Wu.default)(n, qu.k.STANDARD, !0), Object(Wu.default)(n, qu.k.PRO, !0), Object(Wu.default)(n, qu.k.ENTERPRISE, !0), n)
                        }, {
                            featureName: "unlimitedDocs",
                            tierColumnValues: (s = {}, Object(Wu.default)(s, qu.k.BASIC, !0), Object(Wu.default)(s, qu.k.STANDARD, !0), Object(Wu.default)(s, qu.k.PRO, !0), Object(Wu.default)(s, qu.k.ENTERPRISE, !0), s)
                        }, {
                            featureName: "over20ColumnTypes",
                            tierColumnValues: (c = {}, Object(Wu.default)(c, qu.k.FREE, !0), Object(Wu.default)(c, qu.k.BASIC, !0), Object(Wu.default)(c, qu.k.STANDARD, !0), Object(Wu.default)(c, qu.k.PRO, !0), Object(Wu.default)(c, qu.k.ENTERPRISE, !0), c)
                        }, {
                            featureName: "200plusTemplates",
                            tierColumnValues: (f = {}, Object(Wu.default)(f, qu.k.FREE, !0), Object(Wu.default)(f, qu.k.BASIC, !0), Object(Wu.default)(f, qu.k.STANDARD, !0), Object(Wu.default)(f, qu.k.PRO, !0), Object(Wu.default)(f, qu.k.ENTERPRISE, !0), f)
                        }, {
                            featureName: "iosAndAndroidApps",
                            tierColumnValues: (d = {}, Object(Wu.default)(d, qu.k.FREE, !0), Object(Wu.default)(d, qu.k.BASIC, !0), Object(Wu.default)(d, qu.k.STANDARD, !0), Object(Wu.default)(d, qu.k.PRO, !0), Object(Wu.default)(d, qu.k.ENTERPRISE, !0), d)
                        }, {
                            featureName: "unlimitedMessagesUpdates",
                            tierColumnValues: (o = {}, Object(Wu.default)(o, qu.k.FREE, !0), Object(Wu.default)(o, qu.k.BASIC, !0), Object(Wu.default)(o, qu.k.STANDARD, !0), Object(Wu.default)(o, qu.k.PRO, !0), Object(Wu.default)(o, qu.k.ENTERPRISE, !0), o)
                        }, {
                            featureName: "integrations",
                            tierColumnValues: (E = {}, Object(Wu.default)(E, qu.k.STANDARD, "pricingPage.features.plans.integrations_standard"), Object(Wu.default)(E, qu.k.PRO, "pricingPage.features.plans.integrations_pro"), Object(Wu.default)(E, qu.k.ENTERPRISE, "pricingPage.features.plans.integrations_enterprise"), E)
                        }, {
                            featureName: "automations",
                            tierColumnValues: (O = {}, Object(Wu.default)(O, qu.k.STANDARD, "pricingPage.features.plans.automations_standard"), Object(Wu.default)(O, qu.k.PRO, "pricingPage.features.plans.automations_pro"), Object(Wu.default)(O, qu.k.ENTERPRISE, "pricingPage.features.plans.automations_enterprise"), O)
                        }, {
                            featureName: "unlimitedFreeViewers",
                            tierColumnValues: (b = {}, Object(Wu.default)(b, qu.k.BASIC, !0), Object(Wu.default)(b, qu.k.STANDARD, !0), Object(Wu.default)(b, qu.k.PRO, !0), Object(Wu.default)(b, qu.k.ENTERPRISE, !0), b)
                        }]
                    }, {
                        sectionName: "collaboration",
                        features: [{
                            featureName: "embeddedDocuments",
                            tierColumnValues: (R = {}, Object(Wu.default)(R, qu.k.FREE, !0), Object(Wu.default)(R, qu.k.BASIC, !0), Object(Wu.default)(R, qu.k.STANDARD, !0), Object(Wu.default)(R, qu.k.PRO, !0), Object(Wu.default)(R, qu.k.ENTERPRISE, !0), R)
                        }, {
                            featureName: "whiteboardCollaboration",
                            tierColumnValues: (m = {}, Object(Wu.default)(m, qu.k.FREE, !0), Object(Wu.default)(m, qu.k.BASIC, !0), Object(Wu.default)(m, qu.k.STANDARD, !0), Object(Wu.default)(m, qu.k.PRO, !0), Object(Wu.default)(m, qu.k.ENTERPRISE, !0), m)
                        }, {
                            featureName: "updatesSection",
                            tierColumnValues: (k = {}, Object(Wu.default)(k, qu.k.FREE, !0), Object(Wu.default)(k, qu.k.BASIC, !0), Object(Wu.default)(k, qu.k.STANDARD, !0), Object(Wu.default)(k, qu.k.PRO, !0), Object(Wu.default)(k, qu.k.ENTERPRISE, !0), k)
                        }, {
                            featureName: "zoomIntegration",
                            tierColumnValues: (j = {}, Object(Wu.default)(j, qu.k.STANDARD, !0), Object(Wu.default)(j, qu.k.PRO, !0), Object(Wu.default)(j, qu.k.ENTERPRISE, !0), j)
                        }, {
                            featureName: "guestAccess",
                            tierColumnValues: (N = {}, Object(Wu.default)(N, qu.k.STANDARD, "pricingPage.features.plans.guests_four_one"), Object(Wu.default)(N, qu.k.PRO, !0), Object(Wu.default)(N, qu.k.ENTERPRISE, !0), N)
                        }]
                    }, {
                        sectionName: "productivity",
                        features: [{
                            featureName: "ShareableForms",
                            tierColumnValues: (P = {}, Object(Wu.default)(P, qu.k.FREE, !0), Object(Wu.default)(P, qu.k.BASIC, !0), Object(Wu.default)(P, qu.k.STANDARD, !0), Object(Wu.default)(P, qu.k.PRO, "pricingPage.features.descriptions.shareableForms.plusBranded"), Object(Wu.default)(P, qu.k.ENTERPRISE, "pricingPage.features.descriptions.shareableForms.plusConditional"), P)
                        }, {
                            featureName: "customNotifications",
                            tierColumnValues: (p = {}, Object(Wu.default)(p, qu.k.FREE, !0), Object(Wu.default)(p, qu.k.BASIC, !0), Object(Wu.default)(p, qu.k.STANDARD, !0), Object(Wu.default)(p, qu.k.PRO, !0), Object(Wu.default)(p, qu.k.ENTERPRISE, !0), p)
                        }, {
                            featureName: "customFields",
                            tierColumnValues: (S = {}, Object(Wu.default)(S, qu.k.BASIC, !0), Object(Wu.default)(S, qu.k.STANDARD, !0), Object(Wu.default)(S, qu.k.PRO, !0), Object(Wu.default)(S, qu.k.ENTERPRISE, !0), S)
                        }, {
                            featureName: "premiumIntegrations",
                            tierColumnValues: Object(Wu.default)({}, qu.k.ENTERPRISE, !0)
                        }, {
                            featureName: "timeTracking",
                            tierColumnValues: (T = {}, Object(Wu.default)(T, qu.k.PRO, !0), Object(Wu.default)(T, qu.k.ENTERPRISE, !0), T)
                        }, {
                            featureName: "formulaColumn",
                            tierColumnValues: (A = {}, Object(Wu.default)(A, qu.k.PRO, !0), Object(Wu.default)(A, qu.k.ENTERPRISE, !0), A)
                        }, {
                            featureName: "dependencyColumn",
                            tierColumnValues: (g = {}, Object(Wu.default)(g, qu.k.PRO, !0), Object(Wu.default)(g, qu.k.ENTERPRISE, !0), g)
                        }, {
                            featureName: "workload",
                            tierColumnValues: (C = {}, Object(Wu.default)(C, qu.k.PRO, !0), Object(Wu.default)(C, qu.k.ENTERPRISE, !0), C)
                        }]
                    }, {
                        sectionName: "viewsAndReporting",
                        features: [{
                            featureName: "activityLog",
                            tierColumnValues: (I = {}, Object(Wu.default)(I, qu.k.FREE, "pricingPage.features.plans.one_week"), Object(Wu.default)(I, qu.k.BASIC, "pricingPage.features.plans.one_week"), Object(Wu.default)(I, qu.k.STANDARD, "pricingPage.features.plans.six_months"), Object(Wu.default)(I, qu.k.PRO, "pricingPage.features.plans.one_year"), Object(Wu.default)(I, qu.k.ENTERPRISE, "pricingPage.features.plans.five_years"), I)
                        }, {
                            featureName: "dashboards",
                            tierColumnValues: (D = {}, Object(Wu.default)(D, qu.k.FREE, "pricingPage.features.plans.dashboards_basic"), Object(Wu.default)(D, qu.k.BASIC, "pricingPage.features.plans.dashboards_basic"), Object(Wu.default)(D, qu.k.STANDARD, "pricingPage.features.plans.dashboards_standard"), Object(Wu.default)(D, qu.k.PRO, "pricingPage.features.plans.dashboards_pro"), Object(Wu.default)(D, qu.k.ENTERPRISE, "pricingPage.features.plans.dashboards_enterprise"), D)
                        }, {
                            featureName: "kanbanView",
                            tierColumnValues: (V = {}, Object(Wu.default)(V, qu.k.FREE, !0), Object(Wu.default)(V, qu.k.BASIC, !0), Object(Wu.default)(V, qu.k.STANDARD, !0), Object(Wu.default)(V, qu.k.PRO, !0), Object(Wu.default)(V, qu.k.ENTERPRISE, !0), V)
                        }, {
                            featureName: "timeLineView",
                            tierColumnValues: (y = {}, Object(Wu.default)(y, qu.k.STANDARD, !0), Object(Wu.default)(y, qu.k.PRO, !0), Object(Wu.default)(y, qu.k.ENTERPRISE, !0), y)
                        }, {
                            featureName: "calendarView",
                            tierColumnValues: (h = {}, Object(Wu.default)(h, qu.k.STANDARD, !0), Object(Wu.default)(h, qu.k.PRO, !0), Object(Wu.default)(h, qu.k.ENTERPRISE, !0), h)
                        }, {
                            featureName: "mapView",
                            tierColumnValues: (F = {}, Object(Wu.default)(F, qu.k.STANDARD, !0), Object(Wu.default)(F, qu.k.PRO, !0), Object(Wu.default)(F, qu.k.ENTERPRISE, !0), F)
                        }, {
                            featureName: "chartView",
                            tierColumnValues: (_ = {}, Object(Wu.default)(_, qu.k.PRO, !0), Object(Wu.default)(_, qu.k.ENTERPRISE, !0), _)
                        }]
                    }, {
                        sectionName: "support",
                        features: [{
                            featureName: "selfServeKnowledgeBase",
                            tierColumnValues: (B = {}, Object(Wu.default)(B, qu.k.FREE, !0), Object(Wu.default)(B, qu.k.BASIC, !0), Object(Wu.default)(B, qu.k.STANDARD, !0), Object(Wu.default)(B, qu.k.PRO, !0), Object(Wu.default)(B, qu.k.ENTERPRISE, !0), B)
                        }, {
                            featureName: "247CustomerSupport",
                            tierColumnValues: (w = {}, Object(Wu.default)(w, qu.k.BASIC, !0), Object(Wu.default)(w, qu.k.STANDARD, !0), Object(Wu.default)(w, qu.k.PRO, !0), Object(Wu.default)(w, qu.k.ENTERPRISE, !0), w)
                        }, {
                            featureName: "dailyLiveWebinars",
                            tierColumnValues: (v = {}, Object(Wu.default)(v, qu.k.BASIC, !0), Object(Wu.default)(v, qu.k.STANDARD, !0), Object(Wu.default)(v, qu.k.PRO, !0), Object(Wu.default)(v, qu.k.ENTERPRISE, !0), v)
                        }, {
                            featureName: "dedicatedCsManager",
                            tierColumnValues: Object(Wu.default)({}, qu.k.ENTERPRISE, !0)
                        }, {
                            featureName: "99SLA",
                            tierColumnValues: Object(Wu.default)({}, qu.k.ENTERPRISE, !0)
                        }]
                    }, {
                        sectionName: "securityAndPrivacy",
                        features: [{
                            featureName: "soc2compliance",
                            tierColumnValues: (L = {}, Object(Wu.default)(L, qu.k.FREE, !0), Object(Wu.default)(L, qu.k.BASIC, !0), Object(Wu.default)(L, qu.k.STANDARD, !0), Object(Wu.default)(L, qu.k.PRO, !0), Object(Wu.default)(L, qu.k.ENTERPRISE, !0), L)
                        }, {
                            featureName: "twoFactorAuth",
                            tierColumnValues: (M = {}, Object(Wu.default)(M, qu.k.FREE, !0), Object(Wu.default)(M, qu.k.BASIC, !0), Object(Wu.default)(M, qu.k.STANDARD, !0), Object(Wu.default)(M, qu.k.PRO, !0), Object(Wu.default)(M, qu.k.ENTERPRISE, !0), M)
                        }, {
                            featureName: "privateBoardAndDocs",
                            tierColumnValues: (x = {}, Object(Wu.default)(x, qu.k.PRO, !0), Object(Wu.default)(x, qu.k.ENTERPRISE, !0), x)
                        }, {
                            featureName: "googleAuth",
                            tierColumnValues: (Y = {}, Object(Wu.default)(Y, qu.k.PRO, !0), Object(Wu.default)(Y, qu.k.ENTERPRISE, !0), Y)
                        }, {
                            featureName: "sso",
                            tierColumnValues: Object(Wu.default)({}, qu.k.ENTERPRISE, !0)
                        }, {
                            featureName: "hippaCompliance",
                            tierColumnValues: Object(Wu.default)({}, qu.k.ENTERPRISE, !0)
                        }, {
                            featureName: "integrationPermissions",
                            tierColumnValues: Object(Wu.default)({}, qu.k.ENTERPRISE, !0)
                        }, {
                            featureName: "ipRestrictions",
                            tierColumnValues: Object(Wu.default)({}, qu.k.ENTERPRISE, !0)
                        }, {
                            featureName: "contentDirectory",
                            tierColumnValues: Object(Wu.default)({}, qu.k.ENTERPRISE, !0)
                        }]
                    }, {
                        sectionName: "administrationAndControl",
                        features: [{
                            featureName: "boardAdmins",
                            tierColumnValues: (W = {}, Object(Wu.default)(W, qu.k.PRO, !0), Object(Wu.default)(W, qu.k.ENTERPRISE, !0), W)
                        }, {
                            featureName: "scimProvisioning",
                            tierColumnValues: Object(Wu.default)({}, qu.k.ENTERPRISE, !0)
                        }, {
                            featureName: "auditLog",
                            tierColumnValues: Object(Wu.default)({}, qu.k.ENTERPRISE, !0)
                        }, {
                            featureName: "sessionManagement",
                            tierColumnValues: Object(Wu.default)({}, qu.k.ENTERPRISE, !0)
                        }, {
                            featureName: "panicMode",
                            tierColumnValues: Object(Wu.default)({}, qu.k.ENTERPRISE, !0)
                        }, {
                            featureName: "privateWorkspaces",
                            tierColumnValues: Object(Wu.default)({}, qu.k.ENTERPRISE, !0)
                        }, {
                            featureName: "advancedAccountPermissions",
                            tierColumnValues: Object(Wu.default)({}, qu.k.ENTERPRISE, !0)
                        }]
                    }, {
                        sectionName: "enterpriseReportingAndAnalytics",
                        features: [{
                            featureName: "workPerformanceInsights",
                            tierColumnValues: Object(Wu.default)({}, qu.k.ENTERPRISE, !0)
                        }, {
                            featureName: "dashboardEmailNotification",
                            tierColumnValues: Object(Wu.default)({}, qu.k.ENTERPRISE, !0)
                        }, {
                            featureName: "pivotAnalysisAndReports",
                            tierColumnValues: Object(Wu.default)({}, qu.k.ENTERPRISE, !0)
                        }]
                    }]
                },
                marketing: {
                    productId: Gu.e,
                    showInSwitcher: !1,
                    switcherLabel: "Marketer",
                    switcherIconColor: Ku.a["product-marketing"],
                    label: "pricingPage.products.marketing.title",
                    orderInSwitcher: 4,
                    showLearnMoreVideo: !1,
                    mostPopularTierBySeat: {
                        0: qu.k.STANDARD,
                        25: qu.k.PRO,
                        100: qu.k.ENTERPRISE
                    },
                    color: Ku.a["product-marketing"],
                    primaryColor: Ku.a["product-marketing"],
                    secondaryColor: Ku.a["product-marketing"],
                    tiers: [{
                        name: qu.k.FREE,
                        features: ["upTo2Members", "upTo1000Items", "simpleMarketingTaskManagement", "basicFilterAndSearch"]
                    }, {
                        name: qu.k.BASIC,
                        features: ["unlimitedFreeViewers", "unlimitedItems", "contentAndCreativeAssetLibraries", "digitalAssetManagementIntegrations", "creativeRequestForms", "basicActivityTracking", "marketingAnalytics", "iosAndAndroidApps"]
                    }, {
                        name: qu.k.STANDARD,
                        features: ["contentCalendarView", "campaignGanttView", "readyMadeDashboards", "exclusiveMarketingIntegrations", "customAutomations250", "integrations250", "marketingAnalytics"]
                    }, {
                        name: qu.k.PRO,
                        features: ["privateBoardsAndWorkDocs", "annotationsMultipleFileTypes", "versionControl", "campaignGanttWithDeps", "creativeCloudPlugin", "shareableBriefs", "customAutomations25k", "integrations25k", "marketingAnalytics"]
                    }, {
                        name: qu.k.ENTERPRISE,
                        features: ["enterpriseAutomationsAndIntegrations", "campaignApprovalAdvanced", "enterpriseSecurityAndGovernance", "10TBstorage", "salesforceAndJiraIntegration", "marketingAnalytics", "premiumSupport"]
                    }],
                    featuresList: [{
                        sectionName: "essentials",
                        features: [{
                            featureName: "30PlusReadyMadeTemplates",
                            tierColumnValues: (K = {}, Object(Wu.default)(K, qu.k.FREE, !0), Object(Wu.default)(K, qu.k.BASIC, !0), Object(Wu.default)(K, qu.k.STANDARD, !0), Object(Wu.default)(K, qu.k.PRO, !0), Object(Wu.default)(K, qu.k.ENTERPRISE, !0), K)
                        }, {
                            featureName: "upTo2TeamMembers",
                            tierColumnValues: (q = {}, Object(Wu.default)(q, qu.k.FREE, "pricingPage.features.plans.upTo2Seat"), Object(Wu.default)(q, qu.k.BASIC, "pricingPage.features.plans.unlimited"), Object(Wu.default)(q, qu.k.STANDARD, "pricingPage.features.plans.unlimited"), Object(Wu.default)(q, qu.k.PRO, "pricingPage.features.plans.unlimited"), Object(Wu.default)(q, qu.k.ENTERPRISE, "pricingPage.features.plans.unlimited"), q)
                        }, {
                            featureName: "items",
                            tierColumnValues: (G = {}, Object(Wu.default)(G, qu.k.FREE, "pricingPage.features.plans.upToOneK"), Object(Wu.default)(G, qu.k.BASIC, "pricingPage.features.plans.unlimited"), Object(Wu.default)(G, qu.k.STANDARD, "pricingPage.features.plans.unlimited"), Object(Wu.default)(G, qu.k.PRO, "pricingPage.features.plans.unlimited"), Object(Wu.default)(G, qu.k.ENTERPRISE, "pricingPage.features.plans.unlimited"), G)
                        }, {
                            featureName: "contentCalendarView",
                            tierColumnValues: (z = {}, Object(Wu.default)(z, qu.k.BASIC, !0), Object(Wu.default)(z, qu.k.STANDARD, !0), Object(Wu.default)(z, qu.k.PRO, !0), Object(Wu.default)(z, qu.k.ENTERPRISE, !0), z)
                        }, {
                            featureName: "eventManagement",
                            tierColumnValues: (X = {}, Object(Wu.default)(X, qu.k.BASIC, !0), Object(Wu.default)(X, qu.k.STANDARD, !0), Object(Wu.default)(X, qu.k.PRO, !0), Object(Wu.default)(X, qu.k.ENTERPRISE, !0), X)
                        }, {
                            featureName: "annotationsMultipleFileTypes",
                            tierColumnValues: (U = {}, Object(Wu.default)(U, qu.k.BASIC, !0), Object(Wu.default)(U, qu.k.STANDARD, !0), Object(Wu.default)(U, qu.k.PRO, !0), Object(Wu.default)(U, qu.k.ENTERPRISE, !0), U)
                        }, {
                            featureName: "versionControl",
                            tierColumnValues: (H = {}, Object(Wu.default)(H, qu.k.BASIC, !0), Object(Wu.default)(H, qu.k.STANDARD, !0), Object(Wu.default)(H, qu.k.PRO, !0), Object(Wu.default)(H, qu.k.ENTERPRISE, !0), H)
                        }, {
                            featureName: "integrations",
                            tierColumnValues: (J = {}, Object(Wu.default)(J, qu.k.STANDARD, "pricingPage.features.plans.integrations_standard"), Object(Wu.default)(J, qu.k.PRO, "pricingPage.features.plans.integrations_pro"), Object(Wu.default)(J, qu.k.ENTERPRISE, "pricingPage.features.plans.integrations_enterprise"), J)
                        }, {
                            featureName: "automations",
                            tierColumnValues: (Q = {}, Object(Wu.default)(Q, qu.k.STANDARD, "pricingPage.features.plans.automations_standard"), Object(Wu.default)(Q, qu.k.PRO, "pricingPage.features.plans.automations_pro"), Object(Wu.default)(Q, qu.k.ENTERPRISE, "pricingPage.features.plans.automations_enterprise"), Q)
                        }, {
                            featureName: "iosAndAndroidApps",
                            tierColumnValues: (Z = {}, Object(Wu.default)(Z, qu.k.BASIC, !0), Object(Wu.default)(Z, qu.k.STANDARD, !0), Object(Wu.default)(Z, qu.k.PRO, !0), Object(Wu.default)(Z, qu.k.ENTERPRISE, !0), Z)
                        }, {
                            featureName: "unlimitedBoards",
                            tierColumnValues: ($ = {}, Object(Wu.default)($, qu.k.BASIC, !0), Object(Wu.default)($, qu.k.STANDARD, !0), Object(Wu.default)($, qu.k.PRO, !0), Object(Wu.default)($, qu.k.ENTERPRISE, !0), $)
                        }, {
                            featureName: "unlimitedDocs",
                            tierColumnValues: (ee = {}, Object(Wu.default)(ee, qu.k.BASIC, !0), Object(Wu.default)(ee, qu.k.STANDARD, !0), Object(Wu.default)(ee, qu.k.PRO, !0), Object(Wu.default)(ee, qu.k.ENTERPRISE, !0), ee)
                        }, {
                            featureName: "over20ColumnTypes",
                            tierColumnValues: (te = {}, Object(Wu.default)(te, qu.k.BASIC, !0), Object(Wu.default)(te, qu.k.STANDARD, !0), Object(Wu.default)(te, qu.k.PRO, !0), Object(Wu.default)(te, qu.k.ENTERPRISE, !0), te)
                        }, {
                            featureName: "200plusTemplates",
                            tierColumnValues: (ae = {}, Object(Wu.default)(ae, qu.k.BASIC, !0), Object(Wu.default)(ae, qu.k.STANDARD, !0), Object(Wu.default)(ae, qu.k.PRO, !0), Object(Wu.default)(ae, qu.k.ENTERPRISE, !0), ae)
                        }, {
                            featureName: "unlimitedFreeViewers",
                            tierColumnValues: (ue = {}, Object(Wu.default)(ue, qu.k.BASIC, !0), Object(Wu.default)(ue, qu.k.STANDARD, !0), Object(Wu.default)(ue, qu.k.PRO, !0), Object(Wu.default)(ue, qu.k.ENTERPRISE, !0), ue)
                        }, {
                            featureName: "shareableRequestForms",
                            tierColumnValues: (le = {}, Object(Wu.default)(le, qu.k.STANDARD, !0), Object(Wu.default)(le, qu.k.PRO, !0), Object(Wu.default)(le, qu.k.ENTERPRISE, !0), le)
                        }, {
                            featureName: "privateBoardsAndWorkDocs",
                            tierColumnValues: (re = {}, Object(Wu.default)(re, qu.k.PRO, !0), Object(Wu.default)(re, qu.k.ENTERPRISE, !0), re)
                        }, {
                            featureName: "dynamicForms",
                            tierColumnValues: (ie = {}, Object(Wu.default)(ie, qu.k.PRO, !0), Object(Wu.default)(ie, qu.k.ENTERPRISE, !0), ie)
                        }, {
                            featureName: "activityLog",
                            tierColumnValues: (ne = {}, Object(Wu.default)(ne, qu.k.FREE, "pricingPage.features.plans.one_week"), Object(Wu.default)(ne, qu.k.BASIC, "pricingPage.features.plans.one_week"), Object(Wu.default)(ne, qu.k.STANDARD, "pricingPage.features.plans.six_months"), Object(Wu.default)(ne, qu.k.PRO, "pricingPage.features.plans.one_year"), Object(Wu.default)(ne, qu.k.ENTERPRISE, "pricingPage.features.plans.five_years"), ne)
                        }]
                    }, {
                        sectionName: "campaignManagement",
                        features: [{
                            featureName: "contentAndCreativeAssetLibraries",
                            tierColumnValues: (se = {}, Object(Wu.default)(se, qu.k.BASIC, !0), Object(Wu.default)(se, qu.k.STANDARD, !0), Object(Wu.default)(se, qu.k.PRO, !0), Object(Wu.default)(se, qu.k.ENTERPRISE, !0), se)
                        }, {
                            featureName: "googleAds",
                            tierColumnValues: (ce = {}, Object(Wu.default)(ce, qu.k.STANDARD, !0), Object(Wu.default)(ce, qu.k.PRO, !0), Object(Wu.default)(ce, qu.k.ENTERPRISE, !0), ce)
                        }, {
                            featureName: "facebookAds",
                            tierColumnValues: (fe = {}, Object(Wu.default)(fe, qu.k.STANDARD, !0), Object(Wu.default)(fe, qu.k.PRO, !0), Object(Wu.default)(fe, qu.k.ENTERPRISE, !0), fe)
                        }, {
                            featureName: "campaignGanttWithDeps",
                            tierColumnValues: (de = {}, Object(Wu.default)(de, qu.k.STANDARD, !0), Object(Wu.default)(de, qu.k.PRO, !0), Object(Wu.default)(de, qu.k.ENTERPRISE, !0), de)
                        }, {
                            featureName: "marketingAnalytics",
                            tierColumnValues: (oe = {}, Object(Wu.default)(oe, qu.k.PRO, !0), Object(Wu.default)(oe, qu.k.ENTERPRISE, !0), oe)
                        }, {
                            featureName: "campaignApprovalAdvanced",
                            tierColumnValues: (Ee = {}, Object(Wu.default)(Ee, qu.k.PRO, !0), Object(Wu.default)(Ee, qu.k.ENTERPRISE, !0), Ee)
                        }]
                    }, {
                        sectionName: "digitalAssetManagement",
                        features: [{
                            featureName: "contentAndBrandManagement",
                            tierColumnValues: (Oe = {}, Object(Wu.default)(Oe, qu.k.FREE, !0), Object(Wu.default)(Oe, qu.k.BASIC, !0), Object(Wu.default)(Oe, qu.k.STANDARD, !0), Object(Wu.default)(Oe, qu.k.PRO, !0), Object(Wu.default)(Oe, qu.k.ENTERPRISE, !0), Oe)
                        }, {
                            featureName: "embeddedDocuments",
                            tierColumnValues: (be = {}, Object(Wu.default)(be, qu.k.FREE, !0), Object(Wu.default)(be, qu.k.BASIC, !0), Object(Wu.default)(be, qu.k.STANDARD, !0), Object(Wu.default)(be, qu.k.PRO, !0), Object(Wu.default)(be, qu.k.ENTERPRISE, !0), be)
                        }, {
                            featureName: "whiteboardCollaboration",
                            tierColumnValues: (Re = {}, Object(Wu.default)(Re, qu.k.FREE, !0), Object(Wu.default)(Re, qu.k.BASIC, !0), Object(Wu.default)(Re, qu.k.STANDARD, !0), Object(Wu.default)(Re, qu.k.PRO, !0), Object(Wu.default)(Re, qu.k.ENTERPRISE, !0), Re)
                        }, {
                            featureName: "guestAccess",
                            tierColumnValues: (me = {}, Object(Wu.default)(me, qu.k.STANDARD, "pricingPage.features.plans.guests_four_one"), Object(Wu.default)(me, qu.k.PRO, !0), Object(Wu.default)(me, qu.k.ENTERPRISE, !0), me)
                        }, {
                            featureName: "creativeCloudPlugin",
                            tierColumnValues: (ke = {}, Object(Wu.default)(ke, qu.k.STANDARD, !0), Object(Wu.default)(ke, qu.k.PRO, !0), Object(Wu.default)(ke, qu.k.ENTERPRISE, !0), ke)
                        }, {
                            featureName: "1TBStorage",
                            tierColumnValues: (je = {}, Object(Wu.default)(je, qu.k.STANDARD, !0), Object(Wu.default)(je, qu.k.PRO, !0), Object(Wu.default)(je, qu.k.ENTERPRISE, !0), je)
                        }, {
                            featureName: "5TBStorage",
                            tierColumnValues: (Ne = {}, Object(Wu.default)(Ne, qu.k.PRO, !0), Object(Wu.default)(Ne, qu.k.ENTERPRISE, !0), Ne)
                        }, {
                            featureName: "assetApproval",
                            tierColumnValues: (Pe = {}, Object(Wu.default)(Pe, qu.k.STANDARD, !0), Object(Wu.default)(Pe, qu.k.PRO, !0), Object(Wu.default)(Pe, qu.k.ENTERPRISE, !0), Pe)
                        }]
                    }, {
                        sectionName: "productivity",
                        features: [{
                            featureName: "customNotifications",
                            tierColumnValues: (pe = {}, Object(Wu.default)(pe, qu.k.FREE, !0), Object(Wu.default)(pe, qu.k.BASIC, !0), Object(Wu.default)(pe, qu.k.STANDARD, !0), Object(Wu.default)(pe, qu.k.PRO, !0), Object(Wu.default)(pe, qu.k.ENTERPRISE, !0), pe)
                        }, {
                            featureName: "timeTracking",
                            tierColumnValues: (Se = {}, Object(Wu.default)(Se, qu.k.PRO, !0), Object(Wu.default)(Se, qu.k.ENTERPRISE, !0), Se)
                        }, {
                            featureName: "formulaColumn",
                            tierColumnValues: (Te = {}, Object(Wu.default)(Te, qu.k.PRO, !0), Object(Wu.default)(Te, qu.k.ENTERPRISE, !0), Te)
                        }, {
                            featureName: "dependencyColumn",
                            tierColumnValues: (Ae = {}, Object(Wu.default)(Ae, qu.k.PRO, !0), Object(Wu.default)(Ae, qu.k.ENTERPRISE, !0), Ae)
                        }, {
                            featureName: "premiumIntegrations",
                            tierColumnValues: Object(Wu.default)({}, qu.k.ENTERPRISE, !0)
                        }]
                    }, {
                        sectionName: "viewsAndReporting",
                        features: [{
                            featureName: "dashboards",
                            tierColumnValues: (ge = {}, Object(Wu.default)(ge, qu.k.FREE, "pricingPage.features.plans.dashboards_basic"), Object(Wu.default)(ge, qu.k.BASIC, "pricingPage.features.plans.dashboards_basic"), Object(Wu.default)(ge, qu.k.STANDARD, "pricingPage.features.plans.dashboards_standard"), Object(Wu.default)(ge, qu.k.PRO, "pricingPage.features.plans.dashboards_pro"), Object(Wu.default)(ge, qu.k.ENTERPRISE, "pricingPage.features.plans.dashboards_enterprise"), ge)
                        }, {
                            featureName: "kanbanView",
                            tierColumnValues: (Ce = {}, Object(Wu.default)(Ce, qu.k.FREE, !0), Object(Wu.default)(Ce, qu.k.BASIC, !0), Object(Wu.default)(Ce, qu.k.STANDARD, !0), Object(Wu.default)(Ce, qu.k.PRO, !0), Object(Wu.default)(Ce, qu.k.ENTERPRISE, !0), Ce)
                        }, {
                            featureName: "timeLineView",
                            tierColumnValues: (Ie = {}, Object(Wu.default)(Ie, qu.k.STANDARD, !0), Object(Wu.default)(Ie, qu.k.PRO, !0), Object(Wu.default)(Ie, qu.k.ENTERPRISE, !0), Ie)
                        }, {
                            featureName: "calendarView",
                            tierColumnValues: (De = {}, Object(Wu.default)(De, qu.k.STANDARD, !0), Object(Wu.default)(De, qu.k.PRO, !0), Object(Wu.default)(De, qu.k.ENTERPRISE, !0), De)
                        }, {
                            featureName: "mapView",
                            tierColumnValues: (Ve = {}, Object(Wu.default)(Ve, qu.k.STANDARD, !0), Object(Wu.default)(Ve, qu.k.PRO, !0), Object(Wu.default)(Ve, qu.k.ENTERPRISE, !0), Ve)
                        }, {
                            featureName: "chartView",
                            tierColumnValues: (ye = {}, Object(Wu.default)(ye, qu.k.PRO, !0), Object(Wu.default)(ye, qu.k.ENTERPRISE, !0), ye)
                        }, {
                            featureName: "workload",
                            tierColumnValues: (he = {}, Object(Wu.default)(he, qu.k.PRO, !0), Object(Wu.default)(he, qu.k.ENTERPRISE, !0), he)
                        }]
                    }, {
                        sectionName: "support",
                        features: [{
                            featureName: "selfServeKnowledgeBase",
                            tierColumnValues: (Fe = {}, Object(Wu.default)(Fe, qu.k.FREE, !0), Object(Wu.default)(Fe, qu.k.BASIC, !0), Object(Wu.default)(Fe, qu.k.STANDARD, !0), Object(Wu.default)(Fe, qu.k.PRO, !0), Object(Wu.default)(Fe, qu.k.ENTERPRISE, !0), Fe)
                        }, {
                            featureName: "247CustomerSupport",
                            tierColumnValues: (_e = {}, Object(Wu.default)(_e, qu.k.FREE, !0), Object(Wu.default)(_e, qu.k.BASIC, !0), Object(Wu.default)(_e, qu.k.STANDARD, !0), Object(Wu.default)(_e, qu.k.PRO, !0), Object(Wu.default)(_e, qu.k.ENTERPRISE, !0), _e)
                        }, {
                            featureName: "dailyLiveWebinars",
                            tierColumnValues: (Be = {}, Object(Wu.default)(Be, qu.k.FREE, !0), Object(Wu.default)(Be, qu.k.BASIC, !0), Object(Wu.default)(Be, qu.k.STANDARD, !0), Object(Wu.default)(Be, qu.k.PRO, !0), Object(Wu.default)(Be, qu.k.ENTERPRISE, !0), Be)
                        }, {
                            featureName: "dedicatedCsManager",
                            tierColumnValues: Object(Wu.default)({}, qu.k.ENTERPRISE, !0)
                        }, {
                            featureName: "99SLA",
                            tierColumnValues: Object(Wu.default)({}, qu.k.ENTERPRISE, !0)
                        }]
                    }, {
                        sectionName: "securityAndPrivacy",
                        features: [{
                            featureName: "soc2compliance",
                            tierColumnValues: (we = {}, Object(Wu.default)(we, qu.k.FREE, !0), Object(Wu.default)(we, qu.k.BASIC, !0), Object(Wu.default)(we, qu.k.STANDARD, !0), Object(Wu.default)(we, qu.k.PRO, !0), Object(Wu.default)(we, qu.k.ENTERPRISE, !0), we)
                        }, {
                            featureName: "twoFactorAuth",
                            tierColumnValues: (ve = {}, Object(Wu.default)(ve, qu.k.FREE, !0), Object(Wu.default)(ve, qu.k.BASIC, !0), Object(Wu.default)(ve, qu.k.STANDARD, !0), Object(Wu.default)(ve, qu.k.PRO, !0), Object(Wu.default)(ve, qu.k.ENTERPRISE, !0), ve)
                        }, {
                            featureName: "privateBoardAndDocs",
                            tierColumnValues: (Le = {}, Object(Wu.default)(Le, qu.k.PRO, !0), Object(Wu.default)(Le, qu.k.ENTERPRISE, !0), Le)
                        }, {
                            featureName: "googleAuth",
                            tierColumnValues: (Me = {}, Object(Wu.default)(Me, qu.k.PRO, !0), Object(Wu.default)(Me, qu.k.ENTERPRISE, !0), Me)
                        }, {
                            featureName: "sso",
                            tierColumnValues: Object(Wu.default)({}, qu.k.ENTERPRISE, !0)
                        }, {
                            featureName: "hippaCompliance",
                            tierColumnValues: Object(Wu.default)({}, qu.k.ENTERPRISE, !0)
                        }, {
                            featureName: "integrationPermissions",
                            tierColumnValues: Object(Wu.default)({}, qu.k.ENTERPRISE, !0)
                        }, {
                            featureName: "ipRestrictions",
                            tierColumnValues: Object(Wu.default)({}, qu.k.ENTERPRISE, !0)
                        }, {
                            featureName: "contentDirectory",
                            tierColumnValues: Object(Wu.default)({}, qu.k.ENTERPRISE, !0)
                        }]
                    }, {
                        sectionName: "administrationAndControl",
                        features: [{
                            featureName: "boardAdmins",
                            tierColumnValues: (xe = {}, Object(Wu.default)(xe, qu.k.PRO, !0), Object(Wu.default)(xe, qu.k.ENTERPRISE, !0), xe)
                        }, {
                            featureName: "scimProvisioning",
                            tierColumnValues: Object(Wu.default)({}, qu.k.ENTERPRISE, !0)
                        }, {
                            featureName: "auditLog",
                            tierColumnValues: Object(Wu.default)({}, qu.k.ENTERPRISE, !0)
                        }, {
                            featureName: "sessionManagement",
                            tierColumnValues: Object(Wu.default)({}, qu.k.ENTERPRISE, !0)
                        }, {
                            featureName: "panicMode",
                            tierColumnValues: Object(Wu.default)({}, qu.k.ENTERPRISE, !0)
                        }, {
                            featureName: "privateWorkspaces",
                            tierColumnValues: Object(Wu.default)({}, qu.k.ENTERPRISE, !0)
                        }, {
                            featureName: "advancedAccountPermissions",
                            tierColumnValues: Object(Wu.default)({}, qu.k.ENTERPRISE, !0)
                        }]
                    }, {
                        sectionName: "enterpriseReportingAndAnalytics",
                        features: [{
                            featureName: "workPerformanceInsights",
                            tierColumnValues: Object(Wu.default)({}, qu.k.ENTERPRISE, !0)
                        }, {
                            featureName: "dashboardEmailNotification",
                            tierColumnValues: Object(Wu.default)({}, qu.k.ENTERPRISE, !0)
                        }, {
                            featureName: "pivotAnalysisAndReports",
                            tierColumnValues: Object(Wu.default)({}, qu.k.ENTERPRISE, !0)
                        }]
                    }]
                },
                crm: {
                    productId: Gu.a,
                    showInSwitcher: !0,
                    switcherLabel: "Sales CRM",
                    switcherIconColor: Ku.a["crm-green"],
                    label: "pricingPage.products.crm.title",
                    orderInSwitcher: 1,
                    showLearnMoreVideo: !1,
                    color: Ku.a["crm-green"],
                    primaryColor: Ku.a[zu.DARK_CRM_GREEN_COLOR_NAME],
                    secondaryColor: Ku.a[zu.CRM_DARKER_TINT_02],
                    mostPopularTierBySeat: {
                        0: qu.k.STANDARD,
                        25: qu.k.PRO,
                        100: qu.k.ENTERPRISE
                    },
                    showFreeTierComingSoon: !0,
                    tiers: [{
                        name: qu.k.FREE,
                        features: ["upTo2TeamMembers", "upTo1000Contacts", "webForms"]
                    }, {
                        name: qu.k.BASIC,
                        features: ["customizablePipelines", "unlimitedContacts", "unlimitedBoard", "leadManagement", "iosAndAndroidApps", "unlimitedFreeViewers", "dashboardCombined1board"]
                    }, {
                        name: "standard",
                        features: ["accountContactAndDealManagement", "twoWayEmailIntegration", "activityManagement", "quotesAndInvoices", "mergeDuplicateData", "automations", "integrations", "dashboardCombined5boards"]
                    }, {
                        name: qu.k.PRO,
                        features: ["salesForeCasting", "emailTemplates", "emailTracking", "massEmails", "googleCalendarSync", "salesAnalytics", "customEmailSignatures", "automations", "integrations", "dashboardCombined10boards"]
                    }, {
                        name: qu.k.ENTERPRISE,
                        features: ["leadScoring", "teamGoals", "advancedAnalytics", "accountManagement", "documentsForSales", "enterpriseAutomationsAndIntegrations", "enterpriseSecurityAndGovernance", "multiLevelPermissions", "hippaCompliance"]
                    }],
                    featuresList: [{
                        sectionName: "essentials",
                        features: [{
                            featureName: "contactsDatabase",
                            tierColumnValues: (Ye = {}, Object(Wu.default)(Ye, qu.k.FREE, "pricingPage.features.plans.upToOneK"), Object(Wu.default)(Ye, qu.k.BASIC, "pricingPage.features.plans.unlimited"), Object(Wu.default)(Ye, qu.k.STANDARD, "pricingPage.features.plans.unlimited"), Object(Wu.default)(Ye, qu.k.PRO, "pricingPage.features.plans.unlimited"), Object(Wu.default)(Ye, qu.k.ENTERPRISE, "pricingPage.features.plans.unlimited"), Ye)
                        }, {
                            featureName: "maximumNumberOfSeats",
                            tierColumnValues: (We = {}, Object(Wu.default)(We, qu.k.FREE, "pricingPage.features.plans.upTo2Seat"), Object(Wu.default)(We, qu.k.BASIC, "pricingPage.features.plans.unlimited"), Object(Wu.default)(We, qu.k.STANDARD, "pricingPage.features.plans.unlimited"), Object(Wu.default)(We, qu.k.PRO, "pricingPage.features.plans.unlimited"), Object(Wu.default)(We, qu.k.ENTERPRISE, "pricingPage.features.plans.unlimited"), We)
                        }, {
                            featureName: "webFormsToCaptureLeads",
                            tierColumnValues: (Ke = {}, Object(Wu.default)(Ke, qu.k.FREE, !0), Object(Wu.default)(Ke, qu.k.BASIC, !0), Object(Wu.default)(Ke, qu.k.STANDARD, !0), Object(Wu.default)(Ke, qu.k.PRO, !0), Object(Wu.default)(Ke, qu.k.ENTERPRISE, !0), Ke)
                        }, {
                            featureName: "basicLeadContractAndDealManagement",
                            tierColumnValues: (qe = {}, Object(Wu.default)(qe, qu.k.BASIC, !0), Object(Wu.default)(qe, qu.k.STANDARD, !0), Object(Wu.default)(qe, qu.k.PRO, !0), Object(Wu.default)(qe, qu.k.ENTERPRISE, !0), qe)
                        }, {
                            featureName: "unlimitedCustomizablePipelines",
                            tierColumnValues: (Ge = {}, Object(Wu.default)(Ge, qu.k.BASIC, !0), Object(Wu.default)(Ge, qu.k.STANDARD, !0), Object(Wu.default)(Ge, qu.k.PRO, !0), Object(Wu.default)(Ge, qu.k.ENTERPRISE, !0), Ge)
                        }, {
                            featureName: "unlimitedBoards",
                            tierColumnValues: (ze = {}, Object(Wu.default)(ze, qu.k.BASIC, !0), Object(Wu.default)(ze, qu.k.STANDARD, !0), Object(Wu.default)(ze, qu.k.PRO, !0), Object(Wu.default)(ze, qu.k.ENTERPRISE, !0), ze)
                        }, {
                            featureName: "unlimitedDocs",
                            tierColumnValues: (Xe = {}, Object(Wu.default)(Xe, qu.k.BASIC, !0), Object(Wu.default)(Xe, qu.k.STANDARD, !0), Object(Wu.default)(Xe, qu.k.PRO, !0), Object(Wu.default)(Xe, qu.k.ENTERPRISE, !0), Xe)
                        }, {
                            featureName: "over20ColumnTypes",
                            tierColumnValues: (Ue = {}, Object(Wu.default)(Ue, qu.k.BASIC, !0), Object(Wu.default)(Ue, qu.k.STANDARD, !0), Object(Wu.default)(Ue, qu.k.PRO, !0), Object(Wu.default)(Ue, qu.k.ENTERPRISE, !0), Ue)
                        }, {
                            featureName: "200plusTemplates",
                            tierColumnValues: (He = {}, Object(Wu.default)(He, qu.k.BASIC, !0), Object(Wu.default)(He, qu.k.STANDARD, !0), Object(Wu.default)(He, qu.k.PRO, !0), Object(Wu.default)(He, qu.k.ENTERPRISE, !0), He)
                        }, {
                            featureName: "iosAndAndroidApps",
                            tierColumnValues: (Je = {}, Object(Wu.default)(Je, qu.k.BASIC, !0), Object(Wu.default)(Je, qu.k.STANDARD, !0), Object(Wu.default)(Je, qu.k.PRO, !0), Object(Wu.default)(Je, qu.k.ENTERPRISE, !0), Je)
                        }, {
                            featureName: "unlimitedFreeViewers",
                            tierColumnValues: (Qe = {}, Object(Wu.default)(Qe, qu.k.BASIC, !0), Object(Wu.default)(Qe, qu.k.STANDARD, !0), Object(Wu.default)(Qe, qu.k.PRO, !0), Object(Wu.default)(Qe, qu.k.ENTERPRISE, !0), Qe)
                        }, {
                            featureName: "leadManagement",
                            tierColumnValues: (Ze = {}, Object(Wu.default)(Ze, qu.k.STANDARD, !0), Object(Wu.default)(Ze, qu.k.PRO, !0), Object(Wu.default)(Ze, qu.k.ENTERPRISE, !0), Ze)
                        }, {
                            featureName: "accountAndContractManagement",
                            tierColumnValues: ($e = {}, Object(Wu.default)($e, qu.k.STANDARD, !0), Object(Wu.default)($e, qu.k.PRO, !0), Object(Wu.default)($e, qu.k.ENTERPRISE, !0), $e)
                        }, {
                            featureName: "dealManagement",
                            tierColumnValues: (et = {}, Object(Wu.default)(et, qu.k.STANDARD, !0), Object(Wu.default)(et, qu.k.PRO, !0), Object(Wu.default)(et, qu.k.ENTERPRISE, !0), et)
                        }, {
                            featureName: "items",
                            tierColumnValues: (tt = {}, Object(Wu.default)(tt, qu.k.FREE, "pricingPage.features.plans.upToOneK"), Object(Wu.default)(tt, qu.k.BASIC, "pricingPage.features.plans.unlimited"), Object(Wu.default)(tt, qu.k.STANDARD, "pricingPage.features.plans.unlimited"), Object(Wu.default)(tt, qu.k.PRO, "pricingPage.features.plans.unlimited"), Object(Wu.default)(tt, qu.k.ENTERPRISE, "pricingPage.features.plans.unlimited"), tt)
                        }, {
                            featureName: "fileStorage",
                            tierColumnValues: (at = {}, Object(Wu.default)(at, qu.k.FREE, "pricingPage.features.plans.storage_free"), Object(Wu.default)(at, qu.k.BASIC, "pricingPage.features.plans.storage_basic"), Object(Wu.default)(at, qu.k.STANDARD, "pricingPage.features.plans.storage_standard"), Object(Wu.default)(at, qu.k.PRO, "pricingPage.features.plans.storage_pro"), Object(Wu.default)(at, qu.k.ENTERPRISE, "pricingPage.features.plans.storage_enterprise"), at)
                        }, {
                            featureName: "activityLog",
                            tierColumnValues: (ut = {}, Object(Wu.default)(ut, qu.k.FREE, "pricingPage.features.plans.one_week"), Object(Wu.default)(ut, qu.k.BASIC, "pricingPage.features.plans.one_week"), Object(Wu.default)(ut, qu.k.STANDARD, "pricingPage.features.plans.six_months"), Object(Wu.default)(ut, qu.k.PRO, "pricingPage.features.plans.one_year"), Object(Wu.default)(ut, qu.k.ENTERPRISE, "pricingPage.features.plans.five_years"), ut)
                        }]
                    }, {
                        sectionName: "customerRelationship",
                        features: [{
                            featureName: "twoWayEmailIntegration",
                            tierColumnValues: (lt = {}, Object(Wu.default)(lt, qu.k.STANDARD, !0), Object(Wu.default)(lt, qu.k.PRO, !0), Object(Wu.default)(lt, qu.k.ENTERPRISE, !0), lt)
                        }, {
                            featureName: "activityManagement",
                            tierColumnValues: (rt = {}, Object(Wu.default)(rt, qu.k.STANDARD, !0), Object(Wu.default)(rt, qu.k.PRO, !0), Object(Wu.default)(rt, qu.k.ENTERPRISE, !0), rt)
                        }, {
                            featureName: "quotesAndInvoices",
                            tierColumnValues: (it = {}, Object(Wu.default)(it, qu.k.STANDARD, !0), Object(Wu.default)(it, qu.k.PRO, !0), Object(Wu.default)(it, qu.k.ENTERPRISE, !0), it)
                        }, {
                            featureName: "emailTemplates",
                            tierColumnValues: (nt = {}, Object(Wu.default)(nt, qu.k.PRO, !0), Object(Wu.default)(nt, qu.k.ENTERPRISE, !0), nt)
                        }, {
                            featureName: "emailTracking",
                            tierColumnValues: (st = {}, Object(Wu.default)(st, qu.k.PRO, !0), Object(Wu.default)(st, qu.k.ENTERPRISE, !0), st)
                        }, {
                            featureName: "massEmails",
                            tierColumnValues: (ct = {}, Object(Wu.default)(ct, qu.k.PRO, !0), Object(Wu.default)(ct, qu.k.ENTERPRISE, !0), ct)
                        }, {
                            featureName: "googleCalendarSync",
                            tierColumnValues: (ft = {}, Object(Wu.default)(ft, qu.k.PRO, !0), Object(Wu.default)(ft, qu.k.ENTERPRISE, !0), ft)
                        }, {
                            featureName: "customizableEmailSignatures",
                            tierColumnValues: (dt = {}, Object(Wu.default)(dt, qu.k.PRO, !0), Object(Wu.default)(dt, qu.k.ENTERPRISE, !0), dt)
                        }]
                    }, {
                        sectionName: "productivity",
                        features: [{
                            featureName: "customNotifications",
                            tierColumnValues: (ot = {}, Object(Wu.default)(ot, qu.k.FREE, !0), Object(Wu.default)(ot, qu.k.BASIC, !0), Object(Wu.default)(ot, qu.k.STANDARD, !0), Object(Wu.default)(ot, qu.k.PRO, !0), Object(Wu.default)(ot, qu.k.ENTERPRISE, !0), ot)
                        }, {
                            featureName: "mergeDuplicateData",
                            tierColumnValues: (Et = {}, Object(Wu.default)(Et, qu.k.STANDARD, !0), Object(Wu.default)(Et, qu.k.PRO, !0), Object(Wu.default)(Et, qu.k.ENTERPRISE, !0), Et)
                        }, {
                            featureName: "integrations",
                            tierColumnValues: (Ot = {}, Object(Wu.default)(Ot, qu.k.STANDARD, "pricingPage.features.plans.integrations_standard"), Object(Wu.default)(Ot, qu.k.PRO, "pricingPage.features.plans.integrations_pro"), Object(Wu.default)(Ot, qu.k.ENTERPRISE, "pricingPage.features.plans.integrations_enterprise"), Ot)
                        }, {
                            featureName: "automations",
                            tierColumnValues: (bt = {}, Object(Wu.default)(bt, qu.k.STANDARD, "pricingPage.features.plans.automations_standard"), Object(Wu.default)(bt, qu.k.PRO, "pricingPage.features.plans.automations_pro"), Object(Wu.default)(bt, qu.k.ENTERPRISE, "pricingPage.features.plans.automations_enterprise"), bt)
                        }, {
                            featureName: "docusignIntegration",
                            tierColumnValues: (Rt = {}, Object(Wu.default)(Rt, qu.k.STANDARD, !0), Object(Wu.default)(Rt, qu.k.PRO, !0), Object(Wu.default)(Rt, qu.k.ENTERPRISE, !0), Rt)
                        }, {
                            featureName: "airCallIntegration",
                            tierColumnValues: (mt = {}, Object(Wu.default)(mt, qu.k.STANDARD, !0), Object(Wu.default)(mt, qu.k.PRO, !0), Object(Wu.default)(mt, qu.k.ENTERPRISE, !0), mt)
                        }, {
                            featureName: "pandaDocIntegration",
                            tierColumnValues: (kt = {}, Object(Wu.default)(kt, qu.k.STANDARD, !0), Object(Wu.default)(kt, qu.k.PRO, !0), Object(Wu.default)(kt, qu.k.ENTERPRISE, !0), kt)
                        }, {
                            featureName: "mailChimpIntegration",
                            tierColumnValues: (jt = {}, Object(Wu.default)(jt, qu.k.PRO, !0), Object(Wu.default)(jt, qu.k.ENTERPRISE, !0), jt)
                        }, {
                            featureName: "hubSpotIntegration",
                            tierColumnValues: (Nt = {}, Object(Wu.default)(Nt, qu.k.PRO, !0), Object(Wu.default)(Nt, qu.k.ENTERPRISE, !0), Nt)
                        }, {
                            featureName: "facebookAdsIntegration",
                            tierColumnValues: (Pt = {}, Object(Wu.default)(Pt, qu.k.PRO, !0), Object(Wu.default)(Pt, qu.k.ENTERPRISE, !0), Pt)
                        }, {
                            featureName: "timeTracking",
                            tierColumnValues: (pt = {}, Object(Wu.default)(pt, qu.k.PRO, !0), Object(Wu.default)(pt, qu.k.ENTERPRISE, !0), pt)
                        }, {
                            featureName: "formulaColumn",
                            tierColumnValues: (St = {}, Object(Wu.default)(St, qu.k.PRO, !0), Object(Wu.default)(St, qu.k.ENTERPRISE, !0), St)
                        }, {
                            featureName: "salesForceIntegration",
                            tierColumnValues: Object(Wu.default)({}, qu.k.ENTERPRISE, !0)
                        }, {
                            featureName: "leadScoring",
                            tierColumnValues: Object(Wu.default)({}, qu.k.ENTERPRISE, !0)
                        }, {
                            featureName: "duplicateWarning",
                            tierColumnValues: Object(Wu.default)({}, qu.k.ENTERPRISE, !0)
                        }]
                    }, {
                        sectionName: "insightsAndReporting",
                        features: [{
                            featureName: "salesForecasting",
                            tierColumnValues: (Tt = {}, Object(Wu.default)(Tt, qu.k.PRO, !0), Object(Wu.default)(Tt, qu.k.ENTERPRISE, !0), Tt)
                        }, {
                            featureName: "salesAnalytics",
                            tierColumnValues: (At = {}, Object(Wu.default)(At, qu.k.PRO, !0), Object(Wu.default)(At, qu.k.ENTERPRISE, !0), At)
                        }, {
                            featureName: "advancedAnalytics",
                            tierColumnValues: Object(Wu.default)({}, qu.k.ENTERPRISE, !0)
                        }, {
                            featureName: "teamGoals",
                            tierColumnValues: Object(Wu.default)({}, qu.k.ENTERPRISE, !0)
                        }, {
                            featureName: "dashboards",
                            tierColumnValues: (gt = {}, Object(Wu.default)(gt, qu.k.FREE, "pricingPage.features.plans.dashboards_basic"), Object(Wu.default)(gt, qu.k.BASIC, "pricingPage.features.plans.dashboards_basic"), Object(Wu.default)(gt, qu.k.STANDARD, "pricingPage.features.plans.dashboards_standard"), Object(Wu.default)(gt, qu.k.PRO, "pricingPage.features.plans.dashboards_pro"), Object(Wu.default)(gt, qu.k.ENTERPRISE, "pricingPage.features.plans.dashboards_enterprise"), gt)
                        }]
                    }, {
                        sectionName: "postSalesManagement",
                        features: [{
                            featureName: "accountManagement",
                            tierColumnValues: Object(Wu.default)({}, qu.k.ENTERPRISE, !0)
                        }, {
                            featureName: "clientProjects",
                            tierColumnValues: Object(Wu.default)({}, qu.k.ENTERPRISE, !0)
                        }, {
                            featureName: "collectionTracking",
                            tierColumnValues: Object(Wu.default)({}, qu.k.ENTERPRISE, !0)
                        }]
                    }, {
                        sectionName: "salesOperations",
                        features: [{
                            featureName: "headcountPlanning",
                            tierColumnValues: Object(Wu.default)({}, qu.k.ENTERPRISE, !0)
                        }, {
                            featureName: "salesTeamOnboarding",
                            tierColumnValues: Object(Wu.default)({}, qu.k.ENTERPRISE, !0)
                        }, {
                            featureName: "salesCollateral",
                            tierColumnValues: Object(Wu.default)({}, qu.k.ENTERPRISE, !0)
                        }, {
                            featureName: "documentsForSales",
                            tierColumnValues: Object(Wu.default)({}, qu.k.ENTERPRISE, !0)
                        }, {
                            featureName: "legalAndSecurityRequests",
                            tierColumnValues: Object(Wu.default)({}, qu.k.ENTERPRISE, !0)
                        }]
                    }, {
                        sectionName: "collaboration",
                        features: [{
                            featureName: "embeddedDocuments",
                            tierColumnValues: (Ct = {}, Object(Wu.default)(Ct, qu.k.FREE, !0), Object(Wu.default)(Ct, qu.k.BASIC, !0), Object(Wu.default)(Ct, qu.k.STANDARD, !0), Object(Wu.default)(Ct, qu.k.PRO, !0), Object(Wu.default)(Ct, qu.k.ENTERPRISE, !0), Ct)
                        }, {
                            featureName: "whiteboardCollaboration",
                            tierColumnValues: (It = {}, Object(Wu.default)(It, qu.k.FREE, !0), Object(Wu.default)(It, qu.k.BASIC, !0), Object(Wu.default)(It, qu.k.STANDARD, !0), Object(Wu.default)(It, qu.k.PRO, !0), Object(Wu.default)(It, qu.k.ENTERPRISE, !0), It)
                        }, {
                            featureName: "updatesSection",
                            tierColumnValues: (Dt = {}, Object(Wu.default)(Dt, qu.k.FREE, !0), Object(Wu.default)(Dt, qu.k.BASIC, !0), Object(Wu.default)(Dt, qu.k.STANDARD, !0), Object(Wu.default)(Dt, qu.k.PRO, !0), Object(Wu.default)(Dt, qu.k.ENTERPRISE, !0), Dt)
                        }, {
                            featureName: "zoomIntegration",
                            tierColumnValues: (Vt = {}, Object(Wu.default)(Vt, qu.k.STANDARD, !0), Object(Wu.default)(Vt, qu.k.PRO, !0), Object(Wu.default)(Vt, qu.k.ENTERPRISE, !0), Vt)
                        }, {
                            featureName: "guestAccess",
                            tierColumnValues: (yt = {}, Object(Wu.default)(yt, qu.k.STANDARD, "pricingPage.features.plans.guests_four_one"), Object(Wu.default)(yt, qu.k.PRO, !0), Object(Wu.default)(yt, qu.k.ENTERPRISE, !0), yt)
                        }]
                    }, {
                        sectionName: "viewsAndReporting",
                        features: [{
                            featureName: "kanbanView",
                            tierColumnValues: (ht = {}, Object(Wu.default)(ht, qu.k.FREE, !0), Object(Wu.default)(ht, qu.k.BASIC, !0), Object(Wu.default)(ht, qu.k.STANDARD, !0), Object(Wu.default)(ht, qu.k.PRO, !0), Object(Wu.default)(ht, qu.k.ENTERPRISE, !0), ht)
                        }, {
                            featureName: "timeLineView",
                            tierColumnValues: (Ft = {}, Object(Wu.default)(Ft, qu.k.STANDARD, !0), Object(Wu.default)(Ft, qu.k.PRO, !0), Object(Wu.default)(Ft, qu.k.ENTERPRISE, !0), Ft)
                        }, {
                            featureName: "calendarView",
                            tierColumnValues: (_t = {}, Object(Wu.default)(_t, qu.k.STANDARD, !0), Object(Wu.default)(_t, qu.k.PRO, !0), Object(Wu.default)(_t, qu.k.ENTERPRISE, !0), _t)
                        }, {
                            featureName: "mapView",
                            tierColumnValues: (Bt = {}, Object(Wu.default)(Bt, qu.k.STANDARD, !0), Object(Wu.default)(Bt, qu.k.PRO, !0), Object(Wu.default)(Bt, qu.k.ENTERPRISE, !0), Bt)
                        }, {
                            featureName: "chartView",
                            tierColumnValues: (wt = {}, Object(Wu.default)(wt, qu.k.PRO, !0), Object(Wu.default)(wt, qu.k.ENTERPRISE, !0), wt)
                        }, {
                            featureName: "workload",
                            tierColumnValues: (vt = {}, Object(Wu.default)(vt, qu.k.PRO, !0), Object(Wu.default)(vt, qu.k.ENTERPRISE, !0), vt)
                        }]
                    }, {
                        sectionName: "support",
                        features: [{
                            featureName: "selfServeKnowledgeBase",
                            tierColumnValues: (Lt = {}, Object(Wu.default)(Lt, qu.k.FREE, !0), Object(Wu.default)(Lt, qu.k.BASIC, !0), Object(Wu.default)(Lt, qu.k.STANDARD, !0), Object(Wu.default)(Lt, qu.k.PRO, !0), Object(Wu.default)(Lt, qu.k.ENTERPRISE, !0), Lt)
                        }, {
                            featureName: "247CustomerSupport",
                            tierColumnValues: (Mt = {}, Object(Wu.default)(Mt, qu.k.FREE, !0), Object(Wu.default)(Mt, qu.k.BASIC, !0), Object(Wu.default)(Mt, qu.k.STANDARD, !0), Object(Wu.default)(Mt, qu.k.PRO, !0), Object(Wu.default)(Mt, qu.k.ENTERPRISE, !0), Mt)
                        }, {
                            featureName: "dailyLiveWebinars",
                            tierColumnValues: (xt = {}, Object(Wu.default)(xt, qu.k.FREE, !0), Object(Wu.default)(xt, qu.k.BASIC, !0), Object(Wu.default)(xt, qu.k.STANDARD, !0), Object(Wu.default)(xt, qu.k.PRO, !0), Object(Wu.default)(xt, qu.k.ENTERPRISE, !0), xt)
                        }, {
                            featureName: "dedicatedCsManager",
                            tierColumnValues: Object(Wu.default)({}, qu.k.ENTERPRISE, !0)
                        }, {
                            featureName: "99SLA",
                            tierColumnValues: Object(Wu.default)({}, qu.k.ENTERPRISE, !0)
                        }]
                    }, {
                        sectionName: "securityAndPrivacy",
                        features: [{
                            featureName: "soc2compliance",
                            tierColumnValues: (Yt = {}, Object(Wu.default)(Yt, qu.k.FREE, !0), Object(Wu.default)(Yt, qu.k.BASIC, !0), Object(Wu.default)(Yt, qu.k.STANDARD, !0), Object(Wu.default)(Yt, qu.k.PRO, !0), Object(Wu.default)(Yt, qu.k.ENTERPRISE, !0), Yt)
                        }, {
                            featureName: "twoFactorAuth",
                            tierColumnValues: (Wt = {}, Object(Wu.default)(Wt, qu.k.FREE, !0), Object(Wu.default)(Wt, qu.k.BASIC, !0), Object(Wu.default)(Wt, qu.k.STANDARD, !0), Object(Wu.default)(Wt, qu.k.PRO, !0), Object(Wu.default)(Wt, qu.k.ENTERPRISE, !0), Wt)
                        }, {
                            featureName: "privateBoardAndDocs",
                            tierColumnValues: (Kt = {}, Object(Wu.default)(Kt, qu.k.PRO, !0), Object(Wu.default)(Kt, qu.k.ENTERPRISE, !0), Kt)
                        }, {
                            featureName: "googleAuth",
                            tierColumnValues: (qt = {}, Object(Wu.default)(qt, qu.k.PRO, !0), Object(Wu.default)(qt, qu.k.ENTERPRISE, !0), qt)
                        }, {
                            featureName: "sso",
                            tierColumnValues: Object(Wu.default)({}, qu.k.ENTERPRISE, !0)
                        }, {
                            featureName: "hippaCompliance",
                            tierColumnValues: Object(Wu.default)({}, qu.k.ENTERPRISE, !0)
                        }, {
                            featureName: "integrationPermissions",
                            tierColumnValues: Object(Wu.default)({}, qu.k.ENTERPRISE, !0)
                        }, {
                            featureName: "ipRestrictions",
                            tierColumnValues: Object(Wu.default)({}, qu.k.ENTERPRISE, !0)
                        }, {
                            featureName: "contentDirectory",
                            tierColumnValues: Object(Wu.default)({}, qu.k.ENTERPRISE, !0)
                        }]
                    }, {
                        sectionName: "administrationAndControl",
                        features: [{
                            featureName: "boardAdmins",
                            tierColumnValues: (Gt = {}, Object(Wu.default)(Gt, qu.k.PRO, !0), Object(Wu.default)(Gt, qu.k.ENTERPRISE, !0), Gt)
                        }, {
                            featureName: "scimProvisioning",
                            tierColumnValues: Object(Wu.default)({}, qu.k.ENTERPRISE, !0)
                        }, {
                            featureName: "auditLog",
                            tierColumnValues: Object(Wu.default)({}, qu.k.ENTERPRISE, !0)
                        }, {
                            featureName: "sessionManagement",
                            tierColumnValues: Object(Wu.default)({}, qu.k.ENTERPRISE, !0)
                        }, {
                            featureName: "panicMode",
                            tierColumnValues: Object(Wu.default)({}, qu.k.ENTERPRISE, !0)
                        }, {
                            featureName: "privateWorkspaces",
                            tierColumnValues: Object(Wu.default)({}, qu.k.ENTERPRISE, !0)
                        }, {
                            featureName: "advancedAccountPermissions",
                            tierColumnValues: Object(Wu.default)({}, qu.k.ENTERPRISE, !0)
                        }]
                    }, {
                        sectionName: "enterpriseReportingAndAnalytics",
                        features: [{
                            featureName: "workPerformanceInsights",
                            tierColumnValues: Object(Wu.default)({}, qu.k.ENTERPRISE, !0)
                        }, {
                            featureName: "dashboardEmailNotification",
                            tierColumnValues: Object(Wu.default)({}, qu.k.ENTERPRISE, !0)
                        }, {
                            featureName: "pivotAnalysisAndReports",
                            tierColumnValues: Object(Wu.default)({}, qu.k.ENTERPRISE, !0)
                        }]
                    }]
                },
                projectManagement: {
                    productId: Gu.l,
                    showInSwitcher: !1,
                    switcherLabel: "Projects",
                    switcherIconColor: Ku.a["product-project-management"],
                    orderInSwitcher: 5,
                    showLearnMoreVideo: !1,
                    label: "pricingPage.products.projectManagement.title",
                    color: Ku.a["product-project-management"],
                    primaryColor: Ku.a["product-project-management"],
                    secondaryColor: Ku.a["product-project-management"],
                    mostPopularTierBySeat: {
                        0: qu.k.STANDARD,
                        25: qu.k.PRO,
                        100: qu.k.ENTERPRISE
                    },
                    tiers: [{
                        name: qu.k.FREE,
                        features: ["upTo2Members", "upTo1000Tasks", "brainstormingInitiativesAndPlanning"]
                    }, {
                        name: qu.k.BASIC,
                        features: ["freeViewingAccess", "unlimitedTasks", "projectRequests", "centralizedProjectCommunication", "agileProjectsWithKanbanView", "dashboardCombined1board", "mobileApps"]
                    }, {
                        name: qu.k.STANDARD,
                        features: ["calendarViewAndIntegration", "ganttChart", "guestAccess", "milestones", "simpleOverviewAcrossProjects", "taskRollup", "projectAutomations", "integrations250", "dashboardCombined5boards"]
                    }, {
                        name: qu.k.PRO,
                        features: ["privateBoardsAndWorkDocs", "dependencies", "resourceAllocation", "criticalPath", "baseline", "projectAutomations", "integrations25k", "dashboardCombined10boards"]
                    }, {
                        name: qu.k.ENTERPRISE,
                        features: ["enterpriseAutomationsAndIntegrations", "enterpriseSecurityAndGovernance", "advancedReportingAndAnalytics", "multiLevelPermissions", "portfolioManagementAndDashboard", "projectsLifeCycle", "dashboardCombined50boards"]
                    }],
                    featuresList: [{
                        sectionName: "essentials",
                        features: [{
                            featureName: "maximumNumberOfSeats",
                            tierColumnValues: (zt = {}, Object(Wu.default)(zt, qu.k.FREE, "pricingPage.features.plans.upTo2Seat"), Object(Wu.default)(zt, qu.k.BASIC, "pricingPage.features.plans.unlimited"), Object(Wu.default)(zt, qu.k.STANDARD, "pricingPage.features.plans.unlimited"), Object(Wu.default)(zt, qu.k.PRO, "pricingPage.features.plans.unlimited"), Object(Wu.default)(zt, qu.k.ENTERPRISE, "pricingPage.features.plans.unlimited"), zt)
                        }, {
                            featureName: "items",
                            tierColumnValues: (Xt = {}, Object(Wu.default)(Xt, qu.k.FREE, "pricingPage.features.plans.upToOneK"), Object(Wu.default)(Xt, qu.k.BASIC, "pricingPage.features.plans.unlimited"), Object(Wu.default)(Xt, qu.k.STANDARD, "pricingPage.features.plans.unlimited"), Object(Wu.default)(Xt, qu.k.PRO, "pricingPage.features.plans.unlimited"), Object(Wu.default)(Xt, qu.k.ENTERPRISE, "pricingPage.features.plans.unlimited"), Xt)
                        }, {
                            featureName: "activityLog",
                            tierColumnValues: (Ut = {}, Object(Wu.default)(Ut, qu.k.FREE, "pricingPage.features.plans.one_week"), Object(Wu.default)(Ut, qu.k.BASIC, "pricingPage.features.plans.one_week"), Object(Wu.default)(Ut, qu.k.STANDARD, "pricingPage.features.plans.six_months"), Object(Wu.default)(Ut, qu.k.PRO, "pricingPage.features.plans.one_year"), Object(Wu.default)(Ut, qu.k.ENTERPRISE, "pricingPage.features.plans.five_years"), Ut)
                        }, {
                            featureName: "fileStorage",
                            tierColumnValues: (Ht = {}, Object(Wu.default)(Ht, qu.k.FREE, "pricingPage.features.plans.storage_free"), Object(Wu.default)(Ht, qu.k.BASIC, "pricingPage.features.plans.storage_basic"), Object(Wu.default)(Ht, qu.k.STANDARD, "pricingPage.features.plans.storage_standard"), Object(Wu.default)(Ht, qu.k.PRO, "pricingPage.features.plans.storage_pro"), Object(Wu.default)(Ht, qu.k.ENTERPRISE, "pricingPage.features.plans.storage_enterprise"), Ht)
                        }, {
                            featureName: "importFromExcel",
                            tierColumnValues: (Jt = {}, Object(Wu.default)(Jt, qu.k.FREE, !0), Object(Wu.default)(Jt, qu.k.BASIC, !0), Object(Wu.default)(Jt, qu.k.STANDARD, !0), Object(Wu.default)(Jt, qu.k.PRO, !0), Object(Wu.default)(Jt, qu.k.ENTERPRISE, !0), Jt)
                        }, {
                            featureName: "unlimitedBoards",
                            tierColumnValues: (Qt = {}, Object(Wu.default)(Qt, qu.k.BASIC, !0), Object(Wu.default)(Qt, qu.k.STANDARD, !0), Object(Wu.default)(Qt, qu.k.PRO, !0), Object(Wu.default)(Qt, qu.k.ENTERPRISE, !0), Qt)
                        }, {
                            featureName: "unlimitedDocs",
                            tierColumnValues: (Zt = {}, Object(Wu.default)(Zt, qu.k.BASIC, !0), Object(Wu.default)(Zt, qu.k.STANDARD, !0), Object(Wu.default)(Zt, qu.k.PRO, !0), Object(Wu.default)(Zt, qu.k.ENTERPRISE, !0), Zt)
                        }, {
                            featureName: "over20ColumnTypes",
                            tierColumnValues: ($t = {}, Object(Wu.default)($t, qu.k.BASIC, !0), Object(Wu.default)($t, qu.k.STANDARD, !0), Object(Wu.default)($t, qu.k.PRO, !0), Object(Wu.default)($t, qu.k.ENTERPRISE, !0), $t)
                        }, {
                            featureName: "simpleProjectOverview",
                            tierColumnValues: (ea = {}, Object(Wu.default)(ea, qu.k.BASIC, !0), Object(Wu.default)(ea, qu.k.STANDARD, !0), Object(Wu.default)(ea, qu.k.PRO, !0), Object(Wu.default)(ea, qu.k.ENTERPRISE, !0), ea)
                        }, {
                            featureName: "manageProjectsTasksAndSubtasks",
                            tierColumnValues: (ta = {}, Object(Wu.default)(ta, qu.k.BASIC, !0), Object(Wu.default)(ta, qu.k.STANDARD, !0), Object(Wu.default)(ta, qu.k.PRO, !0), Object(Wu.default)(ta, qu.k.ENTERPRISE, !0), ta)
                        }, {
                            featureName: "freeViewingAccess",
                            tierColumnValues: (aa = {}, Object(Wu.default)(aa, qu.k.BASIC, !0), Object(Wu.default)(aa, qu.k.STANDARD, !0), Object(Wu.default)(aa, qu.k.PRO, !0), Object(Wu.default)(aa, qu.k.ENTERPRISE, !0), aa)
                        }, {
                            featureName: "centralizedProjectCommunication",
                            tierColumnValues: (ua = {}, Object(Wu.default)(ua, qu.k.BASIC, !0), Object(Wu.default)(ua, qu.k.STANDARD, !0), Object(Wu.default)(ua, qu.k.PRO, !0), Object(Wu.default)(ua, qu.k.ENTERPRISE, !0), ua)
                        }, {
                            featureName: "milestones",
                            tierColumnValues: (la = {}, Object(Wu.default)(la, qu.k.STANDARD, !0), Object(Wu.default)(la, qu.k.PRO, !0), Object(Wu.default)(la, qu.k.ENTERPRISE, !0), la)
                        }, {
                            featureName: "simpleOverviewAcrossProjects",
                            tierColumnValues: (ra = {}, Object(Wu.default)(ra, qu.k.STANDARD, !0), Object(Wu.default)(ra, qu.k.PRO, !0), Object(Wu.default)(ra, qu.k.ENTERPRISE, !0), ra)
                        }, {
                            featureName: "taskRollup",
                            tierColumnValues: (ia = {}, Object(Wu.default)(ia, qu.k.STANDARD, !0), Object(Wu.default)(ia, qu.k.PRO, !0), Object(Wu.default)(ia, qu.k.ENTERPRISE, !0), ia)
                        }, {
                            featureName: "projectAndTaskFilters",
                            tierColumnValues: (na = {}, Object(Wu.default)(na, qu.k.STANDARD, !0), Object(Wu.default)(na, qu.k.PRO, !0), Object(Wu.default)(na, qu.k.ENTERPRISE, !0), na)
                        }, {
                            featureName: "criticalPath",
                            tierColumnValues: (sa = {}, Object(Wu.default)(sa, qu.k.PRO, !0), Object(Wu.default)(sa, qu.k.ENTERPRISE, !0), sa)
                        }, {
                            featureName: "resourceAllocation",
                            tierColumnValues: (ca = {}, Object(Wu.default)(ca, qu.k.PRO, !0), Object(Wu.default)(ca, qu.k.ENTERPRISE, !0), ca)
                        }, {
                            featureName: "effortManagement",
                            tierColumnValues: (fa = {}, Object(Wu.default)(fa, qu.k.PRO, !0), Object(Wu.default)(fa, qu.k.ENTERPRISE, !0), fa)
                        }, {
                            featureName: "budgetAndCostManagement",
                            tierColumnValues: (da = {}, Object(Wu.default)(da, qu.k.PRO, !0), Object(Wu.default)(da, qu.k.ENTERPRISE, !0), da)
                        }, {
                            featureName: "baseline",
                            tierColumnValues: (oa = {}, Object(Wu.default)(oa, qu.k.PRO, !0), Object(Wu.default)(oa, qu.k.ENTERPRISE, !0), oa)
                        }, {
                            featureName: "dependencies",
                            tierColumnValues: (Ea = {}, Object(Wu.default)(Ea, qu.k.PRO, !0), Object(Wu.default)(Ea, qu.k.ENTERPRISE, !0), Ea)
                        }, {
                            featureName: "projectApprovals",
                            tierColumnValues: Object(Wu.default)({}, qu.k.ENTERPRISE, !0)
                        }, {
                            featureName: "portfolioManagementAndDashboard",
                            tierColumnValues: Object(Wu.default)({}, qu.k.ENTERPRISE, !0)
                        }, {
                            featureName: "projectAndPortfolioRiskManagement",
                            tierColumnValues: Object(Wu.default)({}, qu.k.ENTERPRISE, !0)
                        }, {
                            featureName: "trackingProgressAcrossPortfolioAndPrograms",
                            tierColumnValues: Object(Wu.default)({}, qu.k.ENTERPRISE, !0)
                        }]
                    }, {
                        sectionName: "collaboration",
                        features: [{
                            featureName: "embeddedDocuments",
                            tierColumnValues: (Oa = {}, Object(Wu.default)(Oa, qu.k.FREE, !0), Object(Wu.default)(Oa, qu.k.BASIC, !0), Object(Wu.default)(Oa, qu.k.STANDARD, !0), Object(Wu.default)(Oa, qu.k.PRO, !0), Object(Wu.default)(Oa, qu.k.ENTERPRISE, !0), Oa)
                        }, {
                            featureName: "whiteboardCollaboration",
                            tierColumnValues: (ba = {}, Object(Wu.default)(ba, qu.k.FREE, !0), Object(Wu.default)(ba, qu.k.BASIC, !0), Object(Wu.default)(ba, qu.k.STANDARD, !0), Object(Wu.default)(ba, qu.k.PRO, !0), Object(Wu.default)(ba, qu.k.ENTERPRISE, !0), ba)
                        }, {
                            featureName: "updatesSection",
                            tierColumnValues: (Ra = {}, Object(Wu.default)(Ra, qu.k.FREE, !0), Object(Wu.default)(Ra, qu.k.BASIC, !0), Object(Wu.default)(Ra, qu.k.STANDARD, !0), Object(Wu.default)(Ra, qu.k.PRO, !0), Object(Wu.default)(Ra, qu.k.ENTERPRISE, !0), Ra)
                        }, {
                            featureName: "zoomIntegration",
                            tierColumnValues: (ma = {}, Object(Wu.default)(ma, qu.k.STANDARD, !0), Object(Wu.default)(ma, qu.k.PRO, !0), Object(Wu.default)(ma, qu.k.ENTERPRISE, !0), ma)
                        }, {
                            featureName: "guestAccess",
                            tierColumnValues: (ka = {}, Object(Wu.default)(ka, qu.k.STANDARD, "pricingPage.features.plans.guests_four_one"), Object(Wu.default)(ka, qu.k.PRO, !0), Object(Wu.default)(ka, qu.k.ENTERPRISE, !0), ka)
                        }]
                    }, {
                        sectionName: "productivity",
                        features: [{
                            featureName: "ShareableForms",
                            tierColumnValues: (ja = {}, Object(Wu.default)(ja, qu.k.FREE, !0), Object(Wu.default)(ja, qu.k.BASIC, !0), Object(Wu.default)(ja, qu.k.STANDARD, !0), Object(Wu.default)(ja, qu.k.PRO, "pricingPage.features.descriptions.shareableForms.plusBranded"), Object(Wu.default)(ja, qu.k.ENTERPRISE, "pricingPage.features.descriptions.shareableForms.plusConditional"), ja)
                        }, {
                            featureName: "customNotifications",
                            tierColumnValues: (Na = {}, Object(Wu.default)(Na, qu.k.FREE, !0), Object(Wu.default)(Na, qu.k.BASIC, !0), Object(Wu.default)(Na, qu.k.STANDARD, !0), Object(Wu.default)(Na, qu.k.PRO, !0), Object(Wu.default)(Na, qu.k.ENTERPRISE, !0), Na)
                        }, {
                            featureName: "integrations",
                            tierColumnValues: (Pa = {}, Object(Wu.default)(Pa, qu.k.STANDARD, "pricingPage.features.plans.integrations_standard"), Object(Wu.default)(Pa, qu.k.PRO, "pricingPage.features.plans.integrations_pro"), Object(Wu.default)(Pa, qu.k.ENTERPRISE, "pricingPage.features.plans.integrations_enterprise"), Pa)
                        }, {
                            featureName: "automations",
                            tierColumnValues: (pa = {}, Object(Wu.default)(pa, qu.k.STANDARD, "pricingPage.features.plans.automations_standard"), Object(Wu.default)(pa, qu.k.PRO, "pricingPage.features.plans.automations_pro"), Object(Wu.default)(pa, qu.k.ENTERPRISE, "pricingPage.features.plans.automations_enterprise"), pa)
                        }, {
                            featureName: "microsoftTeamsApp",
                            tierColumnValues: (Sa = {}, Object(Wu.default)(Sa, qu.k.STANDARD, !0), Object(Wu.default)(Sa, qu.k.PRO, !0), Object(Wu.default)(Sa, qu.k.ENTERPRISE, !0), Sa)
                        }, {
                            featureName: "slackIntegration",
                            tierColumnValues: (Ta = {}, Object(Wu.default)(Ta, qu.k.STANDARD, !0), Object(Wu.default)(Ta, qu.k.PRO, !0), Object(Wu.default)(Ta, qu.k.ENTERPRISE, !0), Ta)
                        }, {
                            featureName: "timeTracking",
                            tierColumnValues: (Aa = {}, Object(Wu.default)(Aa, qu.k.PRO, !0), Object(Wu.default)(Aa, qu.k.ENTERPRISE, !0), Aa)
                        }, {
                            featureName: "formulaColumn",
                            tierColumnValues: (ga = {}, Object(Wu.default)(ga, qu.k.PRO, !0), Object(Wu.default)(ga, qu.k.ENTERPRISE, !0), ga)
                        }, {
                            featureName: "advancedIntegrationsWithJiraServerSalesforceAndMore",
                            tierColumnValues: Object(Wu.default)({}, qu.k.ENTERPRISE, !0)
                        }]
                    }, {
                        sectionName: "viewsAndReporting",
                        features: [{
                            featureName: "dashboards",
                            tierColumnValues: (Ca = {}, Object(Wu.default)(Ca, qu.k.FREE, "pricingPage.features.plans.dashboards_basic"), Object(Wu.default)(Ca, qu.k.BASIC, "pricingPage.features.plans.dashboards_basic"), Object(Wu.default)(Ca, qu.k.STANDARD, "pricingPage.features.plans.dashboards_standard"), Object(Wu.default)(Ca, qu.k.PRO, "pricingPage.features.plans.dashboards_pro"), Object(Wu.default)(Ca, qu.k.ENTERPRISE, "pricingPage.features.plans.dashboards_enterprise"), Ca)
                        }, {
                            featureName: "agileProjectsWithKanbanView",
                            tierColumnValues: (Ia = {}, Object(Wu.default)(Ia, qu.k.BASIC, !0), Object(Wu.default)(Ia, qu.k.STANDARD, !0), Object(Wu.default)(Ia, qu.k.PRO, !0), Object(Wu.default)(Ia, qu.k.ENTERPRISE, !0), Ia)
                        }, {
                            featureName: "timeLineView",
                            tierColumnValues: (Da = {}, Object(Wu.default)(Da, qu.k.STANDARD, !0), Object(Wu.default)(Da, qu.k.PRO, !0), Object(Wu.default)(Da, qu.k.ENTERPRISE, !0), Da)
                        }, {
                            featureName: "calendarViewAndIntegrations",
                            tierColumnValues: (Va = {}, Object(Wu.default)(Va, qu.k.STANDARD, !0), Object(Wu.default)(Va, qu.k.PRO, !0), Object(Wu.default)(Va, qu.k.ENTERPRISE, !0), Va)
                        }, {
                            featureName: "mapView",
                            tierColumnValues: (ya = {}, Object(Wu.default)(ya, qu.k.STANDARD, !0), Object(Wu.default)(ya, qu.k.PRO, !0), Object(Wu.default)(ya, qu.k.ENTERPRISE, !0), ya)
                        }, {
                            featureName: "chartView",
                            tierColumnValues: (ha = {}, Object(Wu.default)(ha, qu.k.PRO, !0), Object(Wu.default)(ha, qu.k.ENTERPRISE, !0), ha)
                        }, {
                            featureName: "workload",
                            tierColumnValues: (Fa = {}, Object(Wu.default)(Fa, qu.k.PRO, !0), Object(Wu.default)(Fa, qu.k.ENTERPRISE, !0), Fa)
                        }, {
                            featureName: "goalTracking",
                            tierColumnValues: (_a = {}, Object(Wu.default)(_a, qu.k.PRO, !0), Object(Wu.default)(_a, qu.k.ENTERPRISE, !0), _a)
                        }, {
                            featureName: "plannedVsActualAnalysis",
                            tierColumnValues: (Ba = {}, Object(Wu.default)(Ba, qu.k.PRO, !0), Object(Wu.default)(Ba, qu.k.ENTERPRISE, !0), Ba)
                        }, {
                            featureName: "enterpriseCostManagement",
                            tierColumnValues: Object(Wu.default)({}, qu.k.ENTERPRISE, !0)
                        }]
                    }, {
                        sectionName: "support",
                        features: [{
                            featureName: "selfServeKnowledgeBase",
                            tierColumnValues: (wa = {}, Object(Wu.default)(wa, qu.k.FREE, !0), Object(Wu.default)(wa, qu.k.BASIC, !0), Object(Wu.default)(wa, qu.k.STANDARD, !0), Object(Wu.default)(wa, qu.k.PRO, !0), Object(Wu.default)(wa, qu.k.ENTERPRISE, !0), wa)
                        }, {
                            featureName: "247CustomerSupport",
                            tierColumnValues: (va = {}, Object(Wu.default)(va, qu.k.FREE, !0), Object(Wu.default)(va, qu.k.BASIC, !0), Object(Wu.default)(va, qu.k.STANDARD, !0), Object(Wu.default)(va, qu.k.PRO, !0), Object(Wu.default)(va, qu.k.ENTERPRISE, !0), va)
                        }, {
                            featureName: "dailyLiveWebinars",
                            tierColumnValues: (La = {}, Object(Wu.default)(La, qu.k.FREE, !0), Object(Wu.default)(La, qu.k.BASIC, !0), Object(Wu.default)(La, qu.k.STANDARD, !0), Object(Wu.default)(La, qu.k.PRO, !0), Object(Wu.default)(La, qu.k.ENTERPRISE, !0), La)
                        }, {
                            featureName: "dedicatedCsManager",
                            tierColumnValues: Object(Wu.default)({}, qu.k.ENTERPRISE, !0)
                        }, {
                            featureName: "99SLA",
                            tierColumnValues: Object(Wu.default)({}, qu.k.ENTERPRISE, !0)
                        }]
                    }, {
                        sectionName: "securityAndPrivacy",
                        features: [{
                            featureName: "soc2compliance",
                            tierColumnValues: (Ma = {}, Object(Wu.default)(Ma, qu.k.FREE, !0), Object(Wu.default)(Ma, qu.k.BASIC, !0), Object(Wu.default)(Ma, qu.k.STANDARD, !0), Object(Wu.default)(Ma, qu.k.PRO, !0), Object(Wu.default)(Ma, qu.k.ENTERPRISE, !0), Ma)
                        }, {
                            featureName: "twoFactorAuth",
                            tierColumnValues: (xa = {}, Object(Wu.default)(xa, qu.k.FREE, !0), Object(Wu.default)(xa, qu.k.BASIC, !0), Object(Wu.default)(xa, qu.k.STANDARD, !0), Object(Wu.default)(xa, qu.k.PRO, !0), Object(Wu.default)(xa, qu.k.ENTERPRISE, !0), xa)
                        }, {
                            featureName: "privateBoardAndDocs",
                            tierColumnValues: (Ya = {}, Object(Wu.default)(Ya, qu.k.PRO, !0), Object(Wu.default)(Ya, qu.k.ENTERPRISE, !0), Ya)
                        }, {
                            featureName: "googleAuth",
                            tierColumnValues: (Wa = {}, Object(Wu.default)(Wa, qu.k.PRO, !0), Object(Wu.default)(Wa, qu.k.ENTERPRISE, !0), Wa)
                        }, {
                            featureName: "sso",
                            tierColumnValues: Object(Wu.default)({}, qu.k.ENTERPRISE, !0)
                        }, {
                            featureName: "hippaCompliance",
                            tierColumnValues: Object(Wu.default)({}, qu.k.ENTERPRISE, !0)
                        }, {
                            featureName: "integrationPermissions",
                            tierColumnValues: Object(Wu.default)({}, qu.k.ENTERPRISE, !0)
                        }, {
                            featureName: "ipRestrictions",
                            tierColumnValues: Object(Wu.default)({}, qu.k.ENTERPRISE, !0)
                        }, {
                            featureName: "contentDirectory",
                            tierColumnValues: Object(Wu.default)({}, qu.k.ENTERPRISE, !0)
                        }]
                    }, {
                        sectionName: "administrationAndControl",
                        features: [{
                            featureName: "boardAdmins",
                            tierColumnValues: (Ka = {}, Object(Wu.default)(Ka, qu.k.PRO, !0), Object(Wu.default)(Ka, qu.k.ENTERPRISE, !0), Ka)
                        }, {
                            featureName: "scimProvisioning",
                            tierColumnValues: Object(Wu.default)({}, qu.k.ENTERPRISE, !0)
                        }, {
                            featureName: "auditLog",
                            tierColumnValues: Object(Wu.default)({}, qu.k.ENTERPRISE, !0)
                        }, {
                            featureName: "sessionManagement",
                            tierColumnValues: Object(Wu.default)({}, qu.k.ENTERPRISE, !0)
                        }, {
                            featureName: "panicMode",
                            tierColumnValues: Object(Wu.default)({}, qu.k.ENTERPRISE, !0)
                        }, {
                            featureName: "privateWorkspaces",
                            tierColumnValues: Object(Wu.default)({}, qu.k.ENTERPRISE, !0)
                        }, {
                            featureName: "advancedAccountPermissions",
                            tierColumnValues: Object(Wu.default)({}, qu.k.ENTERPRISE, !0)
                        }]
                    }, {
                        sectionName: "enterpriseReportingAndAnalytics",
                        features: [{
                            featureName: "workPerformanceInsights",
                            tierColumnValues: Object(Wu.default)({}, qu.k.ENTERPRISE, !0)
                        }, {
                            featureName: "dashboardEmailNotification",
                            tierColumnValues: Object(Wu.default)({}, qu.k.ENTERPRISE, !0)
                        }, {
                            featureName: "pivotAnalysisAndReports",
                            tierColumnValues: Object(Wu.default)({}, qu.k.ENTERPRISE, !0)
                        }]
                    }]
                },
                software: {
                    productId: Gu.c,
                    showInSwitcher: !0,
                    switcherLabel: "Dev",
                    switcherIconColor: Ku.a["dev-orange"],
                    orderInSwitcher: 3,
                    showLearnMoreVideo: !1,
                    label: "pricingPage.products.software.title",
                    color: Ku.a["dev-orange"],
                    primaryColor: Ku.a[zu.BRAND_GREEN_DARK_TINT_01_COLOR_NAME],
                    secondaryColor: Ku.a[zu.BRAND_GREEN_DARKER_TINT_02],
                    mostPopularTierBySeat: {
                        0: qu.k.STANDARD,
                        25: qu.k.PRO,
                        100: qu.k.ENTERPRISE
                    },
                    showFreeTierComingSoon: !0,
                    tiers: [{
                        name: qu.k.FREE,
                        features: ["upTo2TeamMembers", "upToItems", "simpleTaskManagement"]
                    }, {
                        name: qu.k.BASIC,
                        features: ["unlimitedViewers", "unlimitedItems", "templatesForDev", "wikiAndDocumentations", "dashboardCombined1board", "mobileApps"]
                    }, {
                        name: qu.k.STANDARD,
                        features: ["ganttChart", "guestAccess", "sprintManagement", "roadmapPlanning", "githubApp", "automations", "integrations", "dashboardCombined5boards"]
                    }, {
                        name: qu.k.PRO,
                        features: ["privateBoards", "timeTracking", "agileReporting", "roadmapWithDeps", "customerFeedbackAndRequests", "automations", "integrations", "dashboardCombined10boards"]
                    }, {
                        name: qu.k.ENTERPRISE,
                        features: ["enterpriseAutomationsAndIntegrations", "enterpriseSecurityAndGovernance", "advancedReportingAndAnalytics", "multiLevelPermissions", "tailoredOnboarding", "premiumSupport", "dashboardCombined50boards"]
                    }],
                    featuresList: [{
                        sectionName: "essentials",
                        features: [{
                            featureName: "maximumNumberOfSeats",
                            tierColumnValues: (qa = {}, Object(Wu.default)(qa, qu.k.FREE, "pricingPage.features.plans.upTo2Seat"), Object(Wu.default)(qa, qu.k.BASIC, "pricingPage.features.plans.unlimited"), Object(Wu.default)(qa, qu.k.STANDARD, "pricingPage.features.plans.unlimited"), Object(Wu.default)(qa, qu.k.PRO, "pricingPage.features.plans.unlimited"), Object(Wu.default)(qa, qu.k.ENTERPRISE, "pricingPage.features.plans.unlimited"), qa)
                        }, {
                            featureName: "items",
                            tierColumnValues: (Ga = {}, Object(Wu.default)(Ga, qu.k.FREE, "pricingPage.features.plans.upToOneK"), Object(Wu.default)(Ga, qu.k.BASIC, "pricingPage.features.plans.unlimited"), Object(Wu.default)(Ga, qu.k.STANDARD, "pricingPage.features.plans.unlimited"), Object(Wu.default)(Ga, qu.k.PRO, "pricingPage.features.plans.unlimited"), Object(Wu.default)(Ga, qu.k.ENTERPRISE, "pricingPage.features.plans.unlimited"), Ga)
                        }, {
                            featureName: "fileStorage",
                            tierColumnValues: (za = {}, Object(Wu.default)(za, qu.k.FREE, "pricingPage.features.plans.storage_free"), Object(Wu.default)(za, qu.k.BASIC, "pricingPage.features.plans.storage_basic"), Object(Wu.default)(za, qu.k.STANDARD, "pricingPage.features.plans.storage_standard"), Object(Wu.default)(za, qu.k.PRO, "pricingPage.features.plans.storage_pro"), Object(Wu.default)(za, qu.k.ENTERPRISE, "pricingPage.features.plans.storage_enterprise"), za)
                        }, {
                            featureName: "wikiAndDocumentations",
                            tierColumnValues: (Xa = {}, Object(Wu.default)(Xa, qu.k.FREE, !0), Object(Wu.default)(Xa, qu.k.BASIC, !0), Object(Wu.default)(Xa, qu.k.STANDARD, !0), Object(Wu.default)(Xa, qu.k.PRO, !0), Object(Wu.default)(Xa, qu.k.ENTERPRISE, !0), Xa)
                        }, {
                            featureName: "sprintManagement",
                            tierColumnValues: (Ua = {}, Object(Wu.default)(Ua, qu.k.FREE, !0), Object(Wu.default)(Ua, qu.k.BASIC, !0), Object(Wu.default)(Ua, qu.k.STANDARD, !0), Object(Wu.default)(Ua, qu.k.PRO, !0), Object(Wu.default)(Ua, qu.k.ENTERPRISE, !0), Ua)
                        }, {
                            featureName: "kanbanView",
                            tierColumnValues: (Ha = {}, Object(Wu.default)(Ha, qu.k.BASIC, !0), Object(Wu.default)(Ha, qu.k.STANDARD, !0), Object(Wu.default)(Ha, qu.k.PRO, !0), Object(Wu.default)(Ha, qu.k.ENTERPRISE, !0), Ha)
                        }, {
                            featureName: "backlog",
                            tierColumnValues: (Ja = {}, Object(Wu.default)(Ja, qu.k.BASIC, !0), Object(Wu.default)(Ja, qu.k.STANDARD, !0), Object(Wu.default)(Ja, qu.k.PRO, !0), Object(Wu.default)(Ja, qu.k.ENTERPRISE, !0), Ja)
                        }, {
                            featureName: "bugTracking",
                            tierColumnValues: (Qa = {}, Object(Wu.default)(Qa, qu.k.BASIC, !0), Object(Wu.default)(Qa, qu.k.STANDARD, !0), Object(Wu.default)(Qa, qu.k.PRO, !0), Object(Wu.default)(Qa, qu.k.ENTERPRISE, !0), Qa)
                        }, {
                            featureName: "unlimitedBoards",
                            tierColumnValues: (Za = {}, Object(Wu.default)(Za, qu.k.BASIC, !0), Object(Wu.default)(Za, qu.k.STANDARD, !0), Object(Wu.default)(Za, qu.k.PRO, !0), Object(Wu.default)(Za, qu.k.ENTERPRISE, !0), Za)
                        }, {
                            featureName: "iosAndAndroidApps",
                            tierColumnValues: ($a = {}, Object(Wu.default)($a, qu.k.BASIC, !0), Object(Wu.default)($a, qu.k.STANDARD, !0), Object(Wu.default)($a, qu.k.PRO, !0), Object(Wu.default)($a, qu.k.ENTERPRISE, !0), $a)
                        }, {
                            featureName: "freeViewingAccess",
                            tierColumnValues: (eu = {}, Object(Wu.default)(eu, qu.k.BASIC, !0), Object(Wu.default)(eu, qu.k.STANDARD, !0), Object(Wu.default)(eu, qu.k.PRO, !0), Object(Wu.default)(eu, qu.k.ENTERPRISE, !0), eu)
                        }, {
                            featureName: "gitHubApp",
                            tierColumnValues: (tu = {}, Object(Wu.default)(tu, qu.k.STANDARD, !0), Object(Wu.default)(tu, qu.k.PRO, !0), Object(Wu.default)(tu, qu.k.ENTERPRISE, !0), tu)
                        }, {
                            featureName: "gitlabIntegration",
                            tierColumnValues: (au = {}, Object(Wu.default)(au, qu.k.STANDARD, !0), Object(Wu.default)(au, qu.k.PRO, !0), Object(Wu.default)(au, qu.k.ENTERPRISE, !0), au)
                        }, {
                            featureName: "jiraIntegration",
                            tierColumnValues: (uu = {}, Object(Wu.default)(uu, qu.k.STANDARD, !0), Object(Wu.default)(uu, qu.k.PRO, !0), Object(Wu.default)(uu, qu.k.ENTERPRISE, !0), uu)
                        }, {
                            featureName: "slackIntegration",
                            tierColumnValues: (lu = {}, Object(Wu.default)(lu, qu.k.STANDARD, !0), Object(Wu.default)(lu, qu.k.PRO, !0), Object(Wu.default)(lu, qu.k.ENTERPRISE, !0), lu)
                        }, {
                            featureName: "microsoftTeamsApp",
                            tierColumnValues: (ru = {}, Object(Wu.default)(ru, qu.k.STANDARD, !0), Object(Wu.default)(ru, qu.k.PRO, !0), Object(Wu.default)(ru, qu.k.ENTERPRISE, !0), ru)
                        }]
                    }, {
                        sectionName: "planning",
                        features: [{
                            featureName: "customerFeedbackAndRequests",
                            tierColumnValues: (iu = {}, Object(Wu.default)(iu, qu.k.STANDARD, !0), Object(Wu.default)(iu, qu.k.PRO, !0), Object(Wu.default)(iu, qu.k.ENTERPRISE, !0), iu)
                        }, {
                            featureName: "featuresPrioritization",
                            tierColumnValues: (nu = {}, Object(Wu.default)(nu, qu.k.STANDARD, !0), Object(Wu.default)(nu, qu.k.PRO, !0), Object(Wu.default)(nu, qu.k.ENTERPRISE, !0), nu)
                        }, {
                            featureName: "roadmapWithDependencies",
                            tierColumnValues: (su = {}, Object(Wu.default)(su, qu.k.STANDARD, !0), Object(Wu.default)(su, qu.k.PRO, !0), Object(Wu.default)(su, qu.k.ENTERPRISE, !0), su)
                        }, {
                            featureName: "documentSpecsAndProductRequirementDocs",
                            tierColumnValues: (cu = {}, Object(Wu.default)(cu, qu.k.ENTERPRISE, !0), Object(Wu.default)(cu, qu.k.PRO, !0), Object(Wu.default)(cu, qu.k.ENTERPRISE, !0), cu)
                        }, {
                            featureName: "productPlanning",
                            tierColumnValues: (fu = {}, Object(Wu.default)(fu, qu.k.ENTERPRISE, !0), Object(Wu.default)(fu, qu.k.PRO, !0), Object(Wu.default)(fu, qu.k.ENTERPRISE, !0), fu)
                        }, {
                            featureName: "featureRequestsAndReleaseManagement",
                            tierColumnValues: (du = {}, Object(Wu.default)(du, qu.k.ENTERPRISE, !0), Object(Wu.default)(du, qu.k.PRO, !0), Object(Wu.default)(du, qu.k.ENTERPRISE, !0), du)
                        }]
                    }, {
                        sectionName: "collaboration",
                        features: [{
                            featureName: "unlimitedMessagesUpdates",
                            tierColumnValues: (ou = {}, Object(Wu.default)(ou, qu.k.FREE, !0), Object(Wu.default)(ou, qu.k.BASIC, !0), Object(Wu.default)(ou, qu.k.STANDARD, !0), Object(Wu.default)(ou, qu.k.PRO, !0), Object(Wu.default)(ou, qu.k.ENTERPRISE, !0), ou)
                        }, {
                            featureName: "embeddedDocuments",
                            tierColumnValues: (Eu = {}, Object(Wu.default)(Eu, qu.k.FREE, !0), Object(Wu.default)(Eu, qu.k.BASIC, !0), Object(Wu.default)(Eu, qu.k.STANDARD, !0), Object(Wu.default)(Eu, qu.k.PRO, !0), Object(Wu.default)(Eu, qu.k.ENTERPRISE, !0), Eu)
                        }, {
                            featureName: "updatesSection",
                            tierColumnValues: (Ou = {}, Object(Wu.default)(Ou, qu.k.FREE, !0), Object(Wu.default)(Ou, qu.k.BASIC, !0), Object(Wu.default)(Ou, qu.k.STANDARD, !0), Object(Wu.default)(Ou, qu.k.PRO, !0), Object(Wu.default)(Ou, qu.k.ENTERPRISE, !0), Ou)
                        }, {
                            featureName: "whiteboardCollaboration",
                            tierColumnValues: (bu = {}, Object(Wu.default)(bu, qu.k.FREE, !0), Object(Wu.default)(bu, qu.k.BASIC, !0), Object(Wu.default)(bu, qu.k.STANDARD, !0), Object(Wu.default)(bu, qu.k.PRO, !0), Object(Wu.default)(bu, qu.k.ENTERPRISE, !0), bu)
                        }, {
                            featureName: "miroIntegration",
                            tierColumnValues: (Ru = {}, Object(Wu.default)(Ru, qu.k.BASIC, !0), Object(Wu.default)(Ru, qu.k.STANDARD, !0), Object(Wu.default)(Ru, qu.k.PRO, !0), Object(Wu.default)(Ru, qu.k.ENTERPRISE, !0), Ru)
                        }, {
                            featureName: "figmaIntegration",
                            tierColumnValues: (mu = {}, Object(Wu.default)(mu, qu.k.BASIC, !0), Object(Wu.default)(mu, qu.k.STANDARD, !0), Object(Wu.default)(mu, qu.k.PRO, !0), Object(Wu.default)(mu, qu.k.ENTERPRISE, !0), mu)
                        }, {
                            featureName: "zoomIntegration",
                            tierColumnValues: (ku = {}, Object(Wu.default)(ku, qu.k.STANDARD, !0), Object(Wu.default)(ku, qu.k.PRO, !0), Object(Wu.default)(ku, qu.k.ENTERPRISE, !0), ku)
                        }]
                    }, {
                        sectionName: "productivity",
                        features: [{
                            featureName: "customNotifications",
                            tierColumnValues: (ju = {}, Object(Wu.default)(ju, qu.k.FREE, !0), Object(Wu.default)(ju, qu.k.BASIC, !0), Object(Wu.default)(ju, qu.k.STANDARD, !0), Object(Wu.default)(ju, qu.k.PRO, !0), Object(Wu.default)(ju, qu.k.ENTERPRISE, !0), ju)
                        }, {
                            featureName: "manageDifferentIssueTypes",
                            tierColumnValues: (Nu = {}, Object(Wu.default)(Nu, qu.k.FREE, !0), Object(Wu.default)(Nu, qu.k.BASIC, !0), Object(Wu.default)(Nu, qu.k.STANDARD, !0), Object(Wu.default)(Nu, qu.k.PRO, !0), Object(Wu.default)(Nu, qu.k.ENTERPRISE, !0), Nu)
                        }, {
                            featureName: "ShareableForms",
                            tierColumnValues: (Pu = {}, Object(Wu.default)(Pu, qu.k.FREE, !0), Object(Wu.default)(Pu, qu.k.BASIC, !0), Object(Wu.default)(Pu, qu.k.STANDARD, !0), Object(Wu.default)(Pu, qu.k.PRO, "pricingPage.features.descriptions.shareableForms.plusBranded"), Object(Wu.default)(Pu, qu.k.ENTERPRISE, "pricingPage.features.descriptions.shareableForms.plusConditional"), Pu)
                        }, {
                            featureName: "shareableBoardsWithExternalStakeholders",
                            tierColumnValues: (pu = {}, Object(Wu.default)(pu, qu.k.STANDARD, !0), Object(Wu.default)(pu, qu.k.PRO, !0), Object(Wu.default)(pu, qu.k.ENTERPRISE, !0), pu)
                        }, {
                            featureName: "timeTracking",
                            tierColumnValues: (Su = {}, Object(Wu.default)(Su, qu.k.PRO, !0), Object(Wu.default)(Su, qu.k.ENTERPRISE, !0), Su)
                        }, {
                            featureName: "formulaColumn",
                            tierColumnValues: (Tu = {}, Object(Wu.default)(Tu, qu.k.PRO, !0), Object(Wu.default)(Tu, qu.k.ENTERPRISE, !0), Tu)
                        }]
                    }, {
                        sectionName: "viewsAndReporting",
                        features: [{
                            featureName: "dashboards",
                            tierColumnValues: (Au = {}, Object(Wu.default)(Au, qu.k.FREE, "pricingPage.features.plans.dashboards_basic"), Object(Wu.default)(Au, qu.k.BASIC, "pricingPage.features.plans.dashboards_basic"), Object(Wu.default)(Au, qu.k.STANDARD, "pricingPage.features.plans.dashboards_standard"), Object(Wu.default)(Au, qu.k.PRO, "pricingPage.features.plans.dashboards_pro"), Object(Wu.default)(Au, qu.k.ENTERPRISE, "pricingPage.features.plans.dashboards_enterprise"), Au)
                        }, {
                            featureName: "activityLog",
                            tierColumnValues: (gu = {}, Object(Wu.default)(gu, qu.k.FREE, "pricingPage.features.plans.one_week"), Object(Wu.default)(gu, qu.k.BASIC, "pricingPage.features.plans.one_week"), Object(Wu.default)(gu, qu.k.STANDARD, "pricingPage.features.plans.six_months"), Object(Wu.default)(gu, qu.k.PRO, "pricingPage.features.plans.one_year"), Object(Wu.default)(gu, qu.k.ENTERPRISE, "pricingPage.features.plans.five_years"), gu)
                        }, {
                            featureName: "timeLineView",
                            tierColumnValues: (Cu = {}, Object(Wu.default)(Cu, qu.k.STANDARD, !0), Object(Wu.default)(Cu, qu.k.PRO, !0), Object(Wu.default)(Cu, qu.k.ENTERPRISE, !0), Cu)
                        }, {
                            featureName: "calendarViewAndIntegrations",
                            tierColumnValues: (Iu = {}, Object(Wu.default)(Iu, qu.k.STANDARD, !0), Object(Wu.default)(Iu, qu.k.PRO, !0), Object(Wu.default)(Iu, qu.k.ENTERPRISE, !0), Iu)
                        }, {
                            featureName: "mapView",
                            tierColumnValues: (Du = {}, Object(Wu.default)(Du, qu.k.STANDARD, !0), Object(Wu.default)(Du, qu.k.PRO, !0), Object(Wu.default)(Du, qu.k.ENTERPRISE, !0), Du)
                        }, {
                            featureName: "timelineAndGanttViews",
                            tierColumnValues: (Vu = {}, Object(Wu.default)(Vu, qu.k.STANDARD, !0), Object(Wu.default)(Vu, qu.k.PRO, !0), Object(Wu.default)(Vu, qu.k.ENTERPRISE, !0), Vu)
                        }, {
                            featureName: "chartView",
                            tierColumnValues: (yu = {}, Object(Wu.default)(yu, qu.k.STANDARD, !0), Object(Wu.default)(yu, qu.k.PRO, !0), Object(Wu.default)(yu, qu.k.ENTERPRISE, !0), yu)
                        }, {
                            featureName: "workload",
                            tierColumnValues: (hu = {}, Object(Wu.default)(hu, qu.k.PRO, !0), Object(Wu.default)(hu, qu.k.ENTERPRISE, !0), hu)
                        }, {
                            featureName: "agileReporting",
                            tierColumnValues: (Fu = {}, Object(Wu.default)(Fu, qu.k.PRO, !0), Object(Wu.default)(Fu, qu.k.ENTERPRISE, !0), Fu)
                        }]
                    }, {
                        sectionName: "support",
                        features: [{
                            featureName: "selfServeKnowledgeBase",
                            tierColumnValues: (_u = {}, Object(Wu.default)(_u, qu.k.FREE, !0), Object(Wu.default)(_u, qu.k.BASIC, !0), Object(Wu.default)(_u, qu.k.STANDARD, !0), Object(Wu.default)(_u, qu.k.PRO, !0), Object(Wu.default)(_u, qu.k.ENTERPRISE, !0), _u)
                        }, {
                            featureName: "247CustomerSupport",
                            tierColumnValues: (Bu = {}, Object(Wu.default)(Bu, qu.k.FREE, !0), Object(Wu.default)(Bu, qu.k.BASIC, !0), Object(Wu.default)(Bu, qu.k.STANDARD, !0), Object(Wu.default)(Bu, qu.k.PRO, !0), Object(Wu.default)(Bu, qu.k.ENTERPRISE, !0), Bu)
                        }, {
                            featureName: "dailyLiveWebinars",
                            tierColumnValues: (wu = {}, Object(Wu.default)(wu, qu.k.FREE, !0), Object(Wu.default)(wu, qu.k.BASIC, !0), Object(Wu.default)(wu, qu.k.STANDARD, !0), Object(Wu.default)(wu, qu.k.PRO, !0), Object(Wu.default)(wu, qu.k.ENTERPRISE, !0), wu)
                        }, {
                            featureName: "dedicatedCsManager",
                            tierColumnValues: Object(Wu.default)({}, qu.k.ENTERPRISE, !0)
                        }, {
                            featureName: "99SLA",
                            tierColumnValues: Object(Wu.default)({}, qu.k.ENTERPRISE, !0)
                        }]
                    }, {
                        sectionName: "securityAndPrivacy",
                        features: [{
                            featureName: "soc2compliance",
                            tierColumnValues: (vu = {}, Object(Wu.default)(vu, qu.k.FREE, !0), Object(Wu.default)(vu, qu.k.BASIC, !0), Object(Wu.default)(vu, qu.k.STANDARD, !0), Object(Wu.default)(vu, qu.k.PRO, !0), Object(Wu.default)(vu, qu.k.ENTERPRISE, !0), vu)
                        }, {
                            featureName: "twoFactorAuth",
                            tierColumnValues: (Lu = {}, Object(Wu.default)(Lu, qu.k.FREE, !0), Object(Wu.default)(Lu, qu.k.BASIC, !0), Object(Wu.default)(Lu, qu.k.STANDARD, !0), Object(Wu.default)(Lu, qu.k.PRO, !0), Object(Wu.default)(Lu, qu.k.ENTERPRISE, !0), Lu)
                        }, {
                            featureName: "privateBoardAndDocs",
                            tierColumnValues: (Mu = {}, Object(Wu.default)(Mu, qu.k.PRO, !0), Object(Wu.default)(Mu, qu.k.ENTERPRISE, !0), Mu)
                        }, {
                            featureName: "googleAuth",
                            tierColumnValues: (xu = {}, Object(Wu.default)(xu, qu.k.PRO, !0), Object(Wu.default)(xu, qu.k.ENTERPRISE, !0), xu)
                        }, {
                            featureName: "sso",
                            tierColumnValues: Object(Wu.default)({}, qu.k.ENTERPRISE, !0)
                        }, {
                            featureName: "hippaCompliance",
                            tierColumnValues: Object(Wu.default)({}, qu.k.ENTERPRISE, !0)
                        }, {
                            featureName: "integrationPermissions",
                            tierColumnValues: Object(Wu.default)({}, qu.k.ENTERPRISE, !0)
                        }, {
                            featureName: "contentDirectory",
                            tierColumnValues: Object(Wu.default)({}, qu.k.ENTERPRISE, !0)
                        }, {
                            featureName: "ipRestrictions",
                            tierColumnValues: Object(Wu.default)({}, qu.k.ENTERPRISE, !0)
                        }]
                    }, {
                        sectionName: "administrationAndControl",
                        features: [{
                            featureName: "boardAdmins",
                            tierColumnValues: (Yu = {}, Object(Wu.default)(Yu, qu.k.PRO, !0), Object(Wu.default)(Yu, qu.k.ENTERPRISE, !0), Yu)
                        }, {
                            featureName: "scimProvisioning",
                            tierColumnValues: Object(Wu.default)({}, qu.k.ENTERPRISE, !0)
                        }, {
                            featureName: "auditLog",
                            tierColumnValues: Object(Wu.default)({}, qu.k.ENTERPRISE, !0)
                        }, {
                            featureName: "sessionManagement",
                            tierColumnValues: Object(Wu.default)({}, qu.k.ENTERPRISE, !0)
                        }, {
                            featureName: "panicMode",
                            tierColumnValues: Object(Wu.default)({}, qu.k.ENTERPRISE, !0)
                        }, {
                            featureName: "privateWorkspaces",
                            tierColumnValues: Object(Wu.default)({}, qu.k.ENTERPRISE, !0)
                        }, {
                            featureName: "advancedAccountPermissions",
                            tierColumnValues: Object(Wu.default)({}, qu.k.ENTERPRISE, !0)
                        }]
                    }, {
                        sectionName: "enterpriseReportingAndAnalytics",
                        features: [{
                            featureName: "workPerformanceInsights",
                            tierColumnValues: Object(Wu.default)({}, qu.k.ENTERPRISE, !0)
                        }, {
                            featureName: "dashboardEmailNotification",
                            tierColumnValues: Object(Wu.default)({}, qu.k.ENTERPRISE, !0)
                        }, {
                            featureName: "pivotAnalysisAndReports",
                            tierColumnValues: Object(Wu.default)({}, qu.k.ENTERPRISE, !0)
                        }]
                    }]
                }
            }
        },
        hsJD: function(e, t, a) {
            "use strict";
            var u = a("Vvt1"),
                l = a.n(u),
                r = a("L3+E"),
                i = a("Xawi"),
                n = {
                    type: r.FIELD_TYPES.NESTED,
                    label: "Features Table",
                    fields: {
                        dataNote: {
                            type: r.FIELD_TYPES.CONSTANT,
                            label: "Note regarding data: ",
                            text: "This component will display either the main pricing page's default features list, or the full features table for the page's cluster, defined via the clusters service."
                        },
                        productName: {
                            label: "Product",
                            type: "combo",
                            options: Object.keys(i.a).map((function(e) {
                                return {
                                    value: e,
                                    text: e
                                }
                            }))
                        },
                        hideFreeTier: {
                            label: "Hide free tier",
                            type: r.FIELD_TYPES.BOOLEAN
                        }
                    }
                },
                s = a("cpVT"),
                c = a("vSb5");

            function f(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var u = Object.getOwnPropertySymbols(e);
                    t && (u = u.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, u)
                }
                return a
            }
            var d = {
                    type: r.FIELD_TYPES.NESTED,
                    label: "",
                    fields: function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var a = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? f(Object(a), !0).forEach((function(t) {
                                Object(s.default)(e, t, a[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : f(Object(a)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                            }))
                        }
                        return e
                    }({}, c.a)
                },
                o = l()((function() {
                    return Promise.all([a.e(0), a.e(33), a.e(219)]).then(a.bind(null, "G/k0"))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return ["G/k0"]
                        },
                        modules: ["./features-table-pricing-component"]
                    }
                });
            t.a = {
                FeaturesTablePricingComponent: o,
                FeaturesTablePricingConfig: n,
                FeaturesTablePricingAdvancedConfig: d
            }
        },
        uSKi: function(e, t, a) {
            "use strict";
            var u = a("Vvt1"),
                l = a.n(u),
                r = a("L3+E"),
                i = a("Xawi"),
                n = {
                    type: r.FIELD_TYPES.NESTED,
                    label: "Tier descriptions configuration",
                    fields: {
                        free: {
                            type: r.FIELD_TYPES.TEXT,
                            label: "Free tier description",
                            translatable: !0
                        },
                        basic: {
                            type: r.FIELD_TYPES.TEXT,
                            label: "Basic tier description",
                            translatable: !0
                        },
                        standard: {
                            type: r.FIELD_TYPES.TEXT,
                            label: "Standard tier description",
                            translatable: !0
                        },
                        pro: {
                            type: r.FIELD_TYPES.TEXT,
                            label: "Pro tier description",
                            translatable: !0
                        },
                        enterprise: {
                            type: r.FIELD_TYPES.TEXT,
                            label: "Enterprise tier description",
                            translatable: !0
                        }
                    }
                },
                s = a("cpVT");

            function c(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var u = Object.getOwnPropertySymbols(e);
                    t && (u = u.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, u)
                }
                return a
            }

            function f(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? c(Object(a), !0).forEach((function(t) {
                        Object(s.default)(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : c(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }
            var d = {
                    nestedConfig: {
                        type: r.FIELD_TYPES.NESTED,
                        fields: {
                            name: {
                                type: r.FIELD_TYPES.TEXT,
                                label: "Feature name",
                                translatable: !0
                            },
                            text: {
                                type: r.FIELD_TYPES.TEXT,
                                label: "Feature description",
                                translatable: !0
                            }
                        }
                    }
                },
                o = {
                    type: r.FIELD_TYPES.NESTED,
                    label: "Tier features configuration",
                    fields: {
                        free: f({
                            type: r.FIELD_TYPES.MULTIPLE_NESTED,
                            label: "Free tier features"
                        }, d),
                        basic: f({
                            type: r.FIELD_TYPES.MULTIPLE_NESTED,
                            label: "Basic tier features"
                        }, d),
                        standard: f({
                            type: r.FIELD_TYPES.MULTIPLE_NESTED,
                            label: "Standard tier features"
                        }, d),
                        pro: f({
                            type: r.FIELD_TYPES.MULTIPLE_NESTED,
                            label: "Pro tier features"
                        }, d),
                        enterprise: f({
                            type: r.FIELD_TYPES.MULTIPLE_NESTED,
                            label: "Enterprise tier features"
                        }, d)
                    }
                },
                E = {
                    type: r.FIELD_TYPES.NESTED,
                    label: "Prices And Features Cards",
                    fields: {
                        textNote: {
                            type: r.FIELD_TYPES.CONSTANT,
                            label: "Note about texts:",
                            text: "You can either use translation keys for translatable text, or enter English text directly, which will be untranslated."
                        },
                        clusterNote: {
                            type: r.FIELD_TYPES.CONSTANT,
                            label: "Note about pricing data:",
                            text: "The pricing data - tier descriptions and features lists - are taken from the clusters app, if a cluster is defined for the page, or from preexisting default values."
                        },
                        signupButtonText: {
                            type: r.FIELD_TYPES.TEXT,
                            label: "Signup button CTA text",
                            translatable: !0
                        },
                        contactUsButtonText: {
                            type: r.FIELD_TYPES.TEXT,
                            label: "'Contact Us' button CTA text",
                            translatable: !0
                        },
                        productName: {
                            label: "Product",
                            type: "combo",
                            options: Object.keys(i.a).map((function(e) {
                                return {
                                    value: e,
                                    text: e
                                }
                            }))
                        },
                        hideFreeForever: {
                            label: "Hide free forever",
                            type: r.FIELD_TYPES.BOOLEAN
                        },
                        hideFreeTier: {
                            label: "Hide free tier",
                            type: r.FIELD_TYPES.BOOLEAN
                        },
                        showFeatureCheckbox: {
                            label: "Show checkboxes on features",
                            type: r.FIELD_TYPES.BOOLEAN
                        },
                        showLearnMoreVideo: {
                            label: "Show learn more video on packages",
                            type: r.FIELD_TYPES.BOOLEAN
                        },
                        isHomepagePricing: {
                            label: "Is homepage pricing",
                            type: r.FIELD_TYPES.BOOLEAN
                        },
                        tierDescriptionConfig: n,
                        tierFeaturesConfig: o
                    }
                },
                O = a("vSb5");

            function b(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var u = Object.getOwnPropertySymbols(e);
                    t && (u = u.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, u)
                }
                return a
            }

            function R(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? b(Object(a), !0).forEach((function(t) {
                        Object(s.default)(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : b(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }
            var m = {
                    type: r.FIELD_TYPES.NESTED,
                    label: "",
                    fields: R(R({}, O.a), {}, {
                        hidePlanTryForFreeButton: {
                            label: "Hide Try for free button",
                            type: r.FIELD_TYPES.BOOLEAN
                        }
                    })
                },
                k = l()((function() {
                    return Promise.all([a.e(0), a.e(29), a.e(31), a.e(34), a.e(101)]).then(a.bind(null, "Dk2l"))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return ["Dk2l"]
                        },
                        modules: ["./prices-and-features-cards-pricing-component"]
                    }
                });
            t.a = {
                PricesAndFeaturesCardsPricingComponent: k,
                PricesAndFeaturesCardsPricingConfig: E,
                PricesAndFeaturesCardsPricingAdvancedConfig: m
            }
        },
        v0kE: function(e, t, a) {
            "use strict";
            var u = a("Vvt1"),
                l = a.n(u),
                r = a("L3+E"),
                i = a("uSKi"),
                n = a("hsJD"),
                s = {
                    type: r.FIELD_TYPES.NESTED,
                    label: "Multi Products Pricing",
                    fields: {
                        pricesAndFeaturesCardsPricing: i.a.PricesAndFeaturesCardsPricingConfig,
                        featureTablePricing: n.a.FeaturesTablePricingConfig
                    }
                },
                c = a("cpVT"),
                f = a("vSb5");

            function d(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var u = Object.getOwnPropertySymbols(e);
                    t && (u = u.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, u)
                }
                return a
            }
            var o = {
                    type: r.FIELD_TYPES.NESTED,
                    label: "",
                    fields: function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var a = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? d(Object(a), !0).forEach((function(t) {
                                Object(c.default)(e, t, a[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : d(Object(a)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                            }))
                        }
                        return e
                    }({}, f.a)
                },
                E = {
                    MultiProductsPricingComponent: l()((function() {
                        return Promise.all([a.e(31), a.e(221)]).then(a.bind(null, "HNfO"))
                    }), {
                        loadableGenerated: {
                            webpack: function() {
                                return ["HNfO"]
                            },
                            modules: ["./multi-products-pricing-component"]
                        }
                    }),
                    MultiProductsPricingConfig: s,
                    MultiProductsPricingAdvancedConfig: o
                },
                O = a("z7pX"),
                b = {
                    question: {
                        type: r.FIELD_TYPES.TEXT,
                        label: "Question text / translation key",
                        translatable: !0
                    },
                    answer: {
                        type: r.FIELD_TYPES.TEXT,
                        label: "Answer text / translation key",
                        translatable: !0
                    }
                },
                R = a("VgqV"),
                m = a("icyP"),
                k = {
                    type: r.FIELD_TYPES.NESTED,
                    label: "Frequently Asked Questions",
                    fields: {
                        theme: {
                            type: r.FIELD_TYPES.COLOR_PICKER,
                            label: "Theme",
                            possibleColors: [].concat(Object(O.a)(m.a), [m.k])
                        },
                        title: {
                            type: r.FIELD_TYPES.TEXT,
                            label: "Title (text or translation key)",
                            translatable: !0
                        },
                        titleColor: {
                            type: r.FIELD_TYPES.COLOR_PICKER,
                            label: "Title color"
                        },
                        titleSize: {
                            type: r.FIELD_TYPES.COMBO,
                            label: "Title Size",
                            options: [{
                                value: R.g,
                                text: "22px (formerly 24px)"
                            }, {
                                value: R.e,
                                text: "28px (formerly 32px)"
                            }, {
                                value: R.c,
                                text: "36px (formerly 40px)"
                            }, {
                                value: R.a,
                                text: "44px (formerly 50px)"
                            }, {
                                value: R.b,
                                text: "54px (formerly 60px)"
                            }, {
                                value: R.f,
                                text: "64px (formerly 72px)"
                            }, {
                                value: R.k,
                                text: "72px (formerly 80px)"
                            }]
                        },
                        questionSize: {
                            type: r.FIELD_TYPES.COMBO,
                            label: "Question text Size",
                            options: [{
                                value: R.g,
                                text: "22px (formerly 24px)"
                            }, {
                                value: R.e,
                                text: "28px (formerly 32px)"
                            }, {
                                value: R.c,
                                text: "36px (formerly 40px)"
                            }, {
                                value: R.a,
                                text: "44px (formerly 50px)"
                            }, {
                                value: R.b,
                                text: "54px (formerly 60px)"
                            }, {
                                value: R.f,
                                text: "64px (formerly 72px)"
                            }, {
                                value: R.k,
                                text: "72px (formerly 80px)"
                            }]
                        },
                        answerSize: {
                            type: r.FIELD_TYPES.COMBO,
                            label: "Answer text Size",
                            options: [{
                                value: R.c,
                                text: "18px (formerly 20px)"
                            }, {
                                value: R.a,
                                text: "22px (formerly 24px)"
                            }]
                        },
                        questions: {
                            type: r.FIELD_TYPES.MULTIPLE_NESTED,
                            label: "Questions",
                            nestedConfig: {
                                type: r.FIELD_TYPES.NESTED,
                                fields: b
                            }
                        },
                        hideQuestionsJumpToShortCut: {
                            type: r.FIELD_TYPES.BOOLEAN,
                            label: "Hide questions jump-To shortcut"
                        }
                    }
                };

            function j(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var u = Object.getOwnPropertySymbols(e);
                    t && (u = u.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, u)
                }
                return a
            }
            var N = {
                    type: r.FIELD_TYPES.NESTED,
                    label: "",
                    fields: function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var a = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? j(Object(a), !0).forEach((function(t) {
                                Object(c.default)(e, t, a[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : j(Object(a)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                            }))
                        }
                        return e
                    }({}, f.a)
                },
                P = {
                    FrequentlyAskedQuestionsPricingComponent: l()((function() {
                        return Promise.all([a.e(33), a.e(220)]).then(a.bind(null, "suJz"))
                    }), {
                        loadableGenerated: {
                            webpack: function() {
                                return ["suJz"]
                            },
                            modules: ["./frequently-asked-questions-pricing-component"]
                        }
                    }),
                    FrequentlyAskedQuestionsPricingConfig: k,
                    FrequentlyAskedQuestionsPricingAdvancedConfig: N
                };
            t.a = {
                MultiProductsPricing: E,
                FeaturesTablePricing: n.a,
                PricesAndFeaturesCardsPricing: i.a,
                FrequentlyAskedQuestionsPricing: P
            }
        }
    }
]);
//# sourceMappingURL=0fbb21853233986fec1ec915ee40ef6ae7dd569f.3274ed46d0315de38b4d.js.map