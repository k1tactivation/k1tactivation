(function(e) {
    function a(a) {
        for (var r, s, i = a[0], c = a[1], d = a[2], u = 0, m = []; u < i.length; u++)
            s = i[u],
            Object.prototype.hasOwnProperty.call(n, s) && n[s] && m.push(n[s][0]),
            n[s] = 0;
        for (r in c)
            Object.prototype.hasOwnProperty.call(c, r) && (e[r] = c[r]);
        l && l(a);
        while (m.length)
            m.shift()();
        return o.push.apply(o, d || []),
        t()
    }
    function t() {
        for (var e, a = 0; a < o.length; a++) {
            for (var t = o[a], r = !0, i = 1; i < t.length; i++) {
                var c = t[i];
                0 !== n[c] && (r = !1)
            }
            r && (o.splice(a--, 1),
            e = s(s.s = t[0]))
        }
        return e
    }
    var r = {}
      , n = {
        app: 0
    }
      , o = [];
    function s(a) {
        if (r[a])
            return r[a].exports;
        var t = r[a] = {
            i: a,
            l: !1,
            exports: {}
        };
        return e[a].call(t.exports, t, t.exports, s),
        t.l = !0,
        t.exports
    }
    s.m = e,
    s.c = r,
    s.d = function(e, a, t) {
        s.o(e, a) || Object.defineProperty(e, a, {
            enumerable: !0,
            get: t
        })
    }
    ,
    s.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    s.t = function(e, a) {
        if (1 & a && (e = s(e)),
        8 & a)
            return e;
        if (4 & a && "object" === typeof e && e && e.__esModule)
            return e;
        var t = Object.create(null);
        if (s.r(t),
        Object.defineProperty(t, "default", {
            enumerable: !0,
            value: e
        }),
        2 & a && "string" != typeof e)
            for (var r in e)
                s.d(t, r, function(a) {
                    return e[a]
                }
                .bind(null, r));
        return t
    }
    ,
    s.n = function(e) {
        var a = e && e.__esModule ? function() {
            return e["default"]
        }
        : function() {
            return e
        }
        ;
        return s.d(a, "a", a),
        a
    }
    ,
    s.o = function(e, a) {
        return Object.prototype.hasOwnProperty.call(e, a)
    }
    ,
    s.p = "/";
    var i = window["webpackJsonp"] = window["webpackJsonp"] || []
      , c = i.push.bind(i);
    i.push = a,
    i = i.slice();
    for (var d = 0; d < i.length; d++)
        a(i[d]);
    var l = c;
    o.push([0, "chunk-vendors"]),
    t()
}
)({
    0: function(e, a, t) {
        e.exports = t("56d7")
    },
    "2c2f": function(e, a, t) {
        "use strict";
        t("4deb")
    },
    "337e": function(e, a, t) {
        "use strict";
        t("9c0d")
    },
    "35b5": function(e, a, t) {},
    "3a4e": function(e, a, t) {
        "use strict";
        t("e268")
    },
    4678: function(e, a, t) {
        var r = {
            "./af": "2bfb",
            "./af.js": "2bfb",
            "./ar": "8e73",
            "./ar-dz": "a356",
            "./ar-dz.js": "a356",
            "./ar-kw": "423e",
            "./ar-kw.js": "423e",
            "./ar-ly": "1cfd",
            "./ar-ly.js": "1cfd",
            "./ar-ma": "0a84",
            "./ar-ma.js": "0a84",
            "./ar-sa": "8230",
            "./ar-sa.js": "8230",
            "./ar-tn": "6d83",
            "./ar-tn.js": "6d83",
            "./ar.js": "8e73",
            "./az": "485c",
            "./az.js": "485c",
            "./be": "1fc1",
            "./be.js": "1fc1",
            "./bg": "84aa",
            "./bg.js": "84aa",
            "./bm": "a7fa",
            "./bm.js": "a7fa",
            "./bn": "9043",
            "./bn-bd": "9686",
            "./bn-bd.js": "9686",
            "./bn.js": "9043",
            "./bo": "d26a",
            "./bo.js": "d26a",
            "./br": "6887",
            "./br.js": "6887",
            "./bs": "2554",
            "./bs.js": "2554",
            "./ca": "d716",
            "./ca.js": "d716",
            "./cs": "3c0d",
            "./cs.js": "3c0d",
            "./cv": "03ec",
            "./cv.js": "03ec",
            "./cy": "9797",
            "./cy.js": "9797",
            "./da": "0f14",
            "./da.js": "0f14",
            "./de": "b469",
            "./de-at": "b3eb",
            "./de-at.js": "b3eb",
            "./de-ch": "bb71",
            "./de-ch.js": "bb71",
            "./de.js": "b469",
            "./dv": "598a",
            "./dv.js": "598a",
            "./el": "8d47",
            "./el.js": "8d47",
            "./en-au": "0e6b",
            "./en-au.js": "0e6b",
            "./en-ca": "3886",
            "./en-ca.js": "3886",
            "./en-gb": "39a6",
            "./en-gb.js": "39a6",
            "./en-ie": "e1d3",
            "./en-ie.js": "e1d3",
            "./en-il": "7333",
            "./en-il.js": "7333",
            "./en-in": "ec2e",
            "./en-in.js": "ec2e",
            "./en-nz": "6f50",
            "./en-nz.js": "6f50",
            "./en-sg": "b7e9",
            "./en-sg.js": "b7e9",
            "./eo": "65db",
            "./eo.js": "65db",
            "./es": "898b",
            "./es-do": "0a3c",
            "./es-do.js": "0a3c",
            "./es-mx": "b5b7",
            "./es-mx.js": "b5b7",
            "./es-us": "55c9",
            "./es-us.js": "55c9",
            "./es.js": "898b",
            "./et": "ec18",
            "./et.js": "ec18",
            "./eu": "0ff2",
            "./eu.js": "0ff2",
            "./fa": "8df4",
            "./fa.js": "8df4",
            "./fi": "81e9",
            "./fi.js": "81e9",
            "./fil": "d69a",
            "./fil.js": "d69a",
            "./fo": "0721",
            "./fo.js": "0721",
            "./fr": "9f26",
            "./fr-ca": "d9f8",
            "./fr-ca.js": "d9f8",
            "./fr-ch": "0e49",
            "./fr-ch.js": "0e49",
            "./fr.js": "9f26",
            "./fy": "7118",
            "./fy.js": "7118",
            "./ga": "5120",
            "./ga.js": "5120",
            "./gd": "f6b4",
            "./gd.js": "f6b4",
            "./gl": "8840",
            "./gl.js": "8840",
            "./gom-deva": "aaf2",
            "./gom-deva.js": "aaf2",
            "./gom-latn": "0caa",
            "./gom-latn.js": "0caa",
            "./gu": "e0c5",
            "./gu.js": "e0c5",
            "./he": "c7aa",
            "./he.js": "c7aa",
            "./hi": "dc4d",
            "./hi.js": "dc4d",
            "./hr": "4ba9",
            "./hr.js": "4ba9",
            "./hu": "5b14",
            "./hu.js": "5b14",
            "./hy-am": "d6b6",
            "./hy-am.js": "d6b6",
            "./id": "5038",
            "./id.js": "5038",
            "./is": "0558",
            "./is.js": "0558",
            "./it": "6e98",
            "./it-ch": "6f12",
            "./it-ch.js": "6f12",
            "./it.js": "6e98",
            "./ja": "079e",
            "./ja.js": "079e",
            "./jv": "b540",
            "./jv.js": "b540",
            "./ka": "201b",
            "./ka.js": "201b",
            "./kk": "6d79",
            "./kk.js": "6d79",
            "./km": "e81d",
            "./km.js": "e81d",
            "./kn": "3e92",
            "./kn.js": "3e92",
            "./ko": "22f8",
            "./ko.js": "22f8",
            "./ku": "2421",
            "./ku.js": "2421",
            "./ky": "9609",
            "./ky.js": "9609",
            "./lb": "440c",
            "./lb.js": "440c",
            "./lo": "b29d",
            "./lo.js": "b29d",
            "./lt": "26f9",
            "./lt.js": "26f9",
            "./lv": "b97c",
            "./lv.js": "b97c",
            "./me": "293c",
            "./me.js": "293c",
            "./mi": "688b",
            "./mi.js": "688b",
            "./mk": "6909",
            "./mk.js": "6909",
            "./ml": "02fb",
            "./ml.js": "02fb",
            "./mn": "958b",
            "./mn.js": "958b",
            "./mr": "39bd",
            "./mr.js": "39bd",
            "./ms": "ebe4",
            "./ms-my": "6403",
            "./ms-my.js": "6403",
            "./ms.js": "ebe4",
            "./mt": "1b45",
            "./mt.js": "1b45",
            "./my": "8689",
            "./my.js": "8689",
            "./nb": "6ce3",
            "./nb.js": "6ce3",
            "./ne": "3a39",
            "./ne.js": "3a39",
            "./nl": "facd",
            "./nl-be": "db29",
            "./nl-be.js": "db29",
            "./nl.js": "facd",
            "./nn": "b84c",
            "./nn.js": "b84c",
            "./oc-lnc": "167b",
            "./oc-lnc.js": "167b",
            "./pa-in": "f3ff",
            "./pa-in.js": "f3ff",
            "./pl": "8d57",
            "./pl.js": "8d57",
            "./pt": "f260",
            "./pt-br": "d2d4",
            "./pt-br.js": "d2d4",
            "./pt.js": "f260",
            "./ro": "972c",
            "./ro.js": "972c",
            "./ru": "957c",
            "./ru.js": "957c",
            "./sd": "6784",
            "./sd.js": "6784",
            "./se": "ffff",
            "./se.js": "ffff",
            "./si": "eda5",
            "./si.js": "eda5",
            "./sk": "7be6",
            "./sk.js": "7be6",
            "./sl": "8155",
            "./sl.js": "8155",
            "./sq": "c8f3",
            "./sq.js": "c8f3",
            "./sr": "cf1e",
            "./sr-cyrl": "13e9",
            "./sr-cyrl.js": "13e9",
            "./sr.js": "cf1e",
            "./ss": "52bd",
            "./ss.js": "52bd",
            "./sv": "5fbd",
            "./sv.js": "5fbd",
            "./sw": "74dc",
            "./sw.js": "74dc",
            "./ta": "3de5",
            "./ta.js": "3de5",
            "./te": "5cbb",
            "./te.js": "5cbb",
            "./tet": "576c",
            "./tet.js": "576c",
            "./tg": "3b1b",
            "./tg.js": "3b1b",
            "./th": "10e8",
            "./th.js": "10e8",
            "./tk": "5aff",
            "./tk.js": "5aff",
            "./tl-ph": "0f38",
            "./tl-ph.js": "0f38",
            "./tlh": "cf75",
            "./tlh.js": "cf75",
            "./tr": "0e81",
            "./tr.js": "0e81",
            "./tzl": "cf51",
            "./tzl.js": "cf51",
            "./tzm": "c109",
            "./tzm-latn": "b53d",
            "./tzm-latn.js": "b53d",
            "./tzm.js": "c109",
            "./ug-cn": "6117",
            "./ug-cn.js": "6117",
            "./uk": "ada2",
            "./uk.js": "ada2",
            "./ur": "5294",
            "./ur.js": "5294",
            "./uz": "2e8c",
            "./uz-latn": "010e",
            "./uz-latn.js": "010e",
            "./uz.js": "2e8c",
            "./vi": "2921",
            "./vi.js": "2921",
            "./x-pseudo": "fd7e",
            "./x-pseudo.js": "fd7e",
            "./yo": "7f33",
            "./yo.js": "7f33",
            "./zh-cn": "5c3a",
            "./zh-cn.js": "5c3a",
            "./zh-hk": "49ab",
            "./zh-hk.js": "49ab",
            "./zh-mo": "3a6c",
            "./zh-mo.js": "3a6c",
            "./zh-tw": "90ea",
            "./zh-tw.js": "90ea"
        };
        function n(e) {
            var a = o(e);
            return t(a)
        }
        function o(e) {
            if (!t.o(r, e)) {
                var a = new Error("Cannot find module '" + e + "'");
                throw a.code = "MODULE_NOT_FOUND",
                a
            }
            return r[e]
        }
        n.keys = function() {
            return Object.keys(r)
        }
        ,
        n.resolve = o,
        e.exports = n,
        n.id = "4678"
    },
    "4deb": function(e, a, t) {},
    "52bc": function(e, a, t) {
        "use strict";
        t("ba99")
    },
    "56d7": function(e, a, t) {
        "use strict";
        t.r(a);
        t("e260"),
        t("e6cf"),
        t("cca6"),
        t("a79d");
        var r = t("2b0e")
          , n = function() {
            var e = this
              , a = e.$createElement
              , t = e._self._c || a;
            return t("v-app", [t("v-container", [t("Header"), t("v-dialog", {
                attrs: {
                    persistent: "",
                    width: "unset"
                },
                model: {
                    value: e.alert.active,
                    callback: function(a) {
                        e.$set(e.alert, "active", a)
                    },
                    expression: "alert.active"
                }
            }, [t("v-alert", {
                staticStyle: {
                    "margin-bottom": "0px"
                },
                attrs: {
                    type: e.alert.type
                }
            }, [t("v-row", {
                attrs: {
                    align: "center"
                }
            }, [t("v-col", {
                attrs: {
                    align: "right"
                }
            }, [t("v-btn", {
                attrs: {
                    icon: ""
                },
                on: {
                    click: e.closeDialog
                }
            }, [t("v-icon", [e._v(" mdi-close-circle-outline ")])], 1)], 1)], 1), e._v(" " + e._s(e.alert.message) + " ")], 1)], 1), t("transition", {
                attrs: {
                    name: "fade",
                    mode: "out-in"
                }
            }, [t("router-view", {
                key: e.$route.fullPath,
                staticClass: "py-16 px-md-6 px-sm-3"
            })], 1)], 1)], 1)
        }
          , o = []
          , s = t("5530")
          , i = function() {
            var e = this
              , a = e.$createElement
              , r = e._self._c || a;
            return r("v-app-bar", {
                attrs: {
                    app: "",
                    color: "gray",
                    light: "",
                    elevation: "0"
                }
            }, [r("v-toolbar-title", [r("router-link", {
                attrs: {
                    to: {
                        name: "Home"
                    }
                }
            }, [r("img", {
                staticClass: "logo",
                attrs: {
                    src: t("b5de")
                }
            })])], 1)], 1)
        }
          , c = []
          , d = {
            name: "Header"
        }
          , l = d
          , u = t("2877")
          , m = t("6544")
          , p = t.n(m)
          , h = t("40dc")
          , f = t("2a7f")
          , v = Object(u["a"])(l, i, c, !1, null, "9d3a4d8e", null)
          , _ = v.exports;
        p()(v, {
            VAppBar: h["a"],
            VToolbarTitle: f["a"]
        });
        var b = {
            methods: {
                handleAlert: function(e) {
                    var a = this
                      , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "error"
                      , r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4e3;
                    this.$store.commit("setAlert", {
                        message: e,
                        type: t,
                        active: !0
                    }),
                    "error" !== t && setTimeout((function() {
                        a.$store.commit("setAlert", {
                            active: !1
                        })
                    }
                    ), r)
                }
            }
        }
          , g = {
            name: "App",
            components: {
                Header: _
            },
            mixins: [b],
            computed: {
                alert: {
                    get: function() {
                        return this.$store.state.alert
                    },
                    set: function(e) {
                        this.$store.commit("setAlert", Object(s["a"])(Object(s["a"])({}, this.$store.state.alert), {}, {
                            active: e
                        }))
                    }
                }
            },
            methods: {
                closeDialog: function() {
                    this.$store.commit("setAlert", {
                        active: !1
                    })
                }
            }
        }
          , y = g
          , k = (t("5c0b"),
        t("0798"))
          , S = t("7496")
          , T = t("8336")
          , A = t("62ad")
          , j = t("a523")
          , E = t("169a")
          , D = t("132d")
          , C = t("0fd9")
          , I = Object(u["a"])(y, n, o, !1, null, null, null)
          , x = I.exports;
        p()(I, {
            VAlert: k["a"],
            VApp: S["a"],
            VBtn: T["a"],
            VCol: A["a"],
            VContainer: j["a"],
            VDialog: E["a"],
            VIcon: D["a"],
            VRow: C["a"]
        });
        var q = t("8c4f")
          , $ = function() {
            var e = this
              , a = e.$createElement
              , r = e._self._c || a;
            return r("v-row", {
                staticClass: "pt-16"
            }, [r("v-col", [r("v-row", {
                attrs: {
                    "no-gutters": ""
                }
            }, [r("v-col", {
                staticClass: "acticon",
                attrs: {
                    cols: "auto",
                    "align-self": "center"
                }
            }, [r("img", {
                staticClass: "safety_certificate",
                attrs: {
                    src: t("6b05")
                }
            })]), r("v-col", [r("h2", {
                staticClass: "page-title"
            }, [e._v("Kits Activation")])])], 1), r("v-row", [r("v-col", {
                attrs: {
                    cols: "12",
                    sm: "12"
                }
            }, [r("p", [e._v(" This system can be used to submit the "), r("b", [e._v("sample taken date ")]), e._v(" or fill in the declaration for International Arrivals or Fit to fly kits. ")])])], 1), r("v-row", [r("v-col", {
                staticClass: "validation-b-form"
            }, [r("BarcodeValidation", {
                attrs: {
                    "error-msg": e.barcode_error_message
                },
                on: {
                    returnBarcode: e.assignBarcode
                }
            }), r("PinValidation", {
                attrs: {
                    "error-msg": e.pin_error_message
                },
                on: {
                    returnPin: e.assignPin
                }
            }), r("v-btn", {
                staticClass: "my-5 pa-3",
                attrs: {
                    raised: "",
                    rounded: "",
                    dark: "",
                    "x-large": "",
                    color: "primary"
                },
                on: {
                    click: e.sendInfo
                }
            }, [e._v(" Activate Kit ")])], 1), r("v-col", {
                staticClass: "instructions"
            }, [r("v-card", {
                staticClass: "pa-5 pa-md-10 rounded-card"
            }, [r("div", {
                attrs: {
                    align: "center"
                }
            }, [r("img", {
                attrs: {
                    src: t("b7bc")
                }
            })]), r("h3", {
                staticClass: "explanation-visual__title mb-5",
                attrs: {
                    align: "center"
                }
            }, [e._v(" Use the barcode find on your tube ")]), r("div", {
                staticClass: "d-flex justify-center"
            }, [r("div", [r("p", {
                staticClass: "step-number"
            }, [r("img", {
                attrs: {
                    src: t("715c")
                }
            })])])])])], 1)], 1), r("Footer")], 1)], 1)
        }
          , M = []
          , w = function() {
            var e = this
              , a = e.$createElement
              , t = e._self._c || a;
            return t("div", [e._m(0), t("div", [t("div", {
                staticClass: "input-wrapper"
            }, [t("PincodeInput", {
                attrs: {
                    placeholder: "0"
                },
                model: {
                    value: e.pin,
                    callback: function(a) {
                        e.pin = a
                    },
                    expression: "pin"
                }
            })], 1)]), t("p", {
                staticClass: "mt-3 text-caption"
            }, [e._v("PIN must contain at least 4 digits. You can find it in the dispatch confirmation email or (in case of purchase from other providers) it was provided to you by your provider at the time of dispatch.")]), "" !== e.errorMsg ? t("p", [t("small", [e._v(e._s(e.errorMsg))])]) : e._e()])
        }
          , B = [function() {
            var e = this
              , a = e.$createElement
              , t = e._self._c || a;
            return t("p", [e._v("Type here your "), t("strong", [e._v("Activation Pin")])])
        }
        ]
          , O = t("a7d0")
          , Y = {
            name: "PinValidation",
            components: {
                PincodeInput: O["a"]
            },
            props: ["errorMsg"],
            data: function() {
                return {
                    pin: ""
                }
            },
            methods: {
                onChange: function(e) {
                    console.log("onChange ", e)
                },
                onComplete: function(e) {
                    console.log("onComplete ", e),
                    this.$emit("returnPin", this.pin)
                }
            },
            watch: {
                pin: function() {
                    this.$emit("returnPin", this.pin)
                }
            }
        }
          , P = Y
          , R = Object(u["a"])(P, w, B, !1, null, null, null)
          , N = R.exports
          , V = function() {
            var e = this
              , a = e.$createElement
              , t = e._self._c || a;
            return t("v-row", {
                staticClass: "pb-3 barcode-validation"
            }, [t("v-col", [t("p", [e._v("Type here your "), t("strong", [e._v("KIT barcode")])]), t("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.barcode,
                    expression: "barcode"
                }],
                attrs: {
                    type: "text"
                },
                domProps: {
                    value: e.barcode
                },
                on: {
                    input: function(a) {
                        a.target.composing || (e.barcode = a.target.value)
                    }
                }
            }), "" !== e.errorMsg ? t("p", [t("small", [e._v(e._s(e.errorMsg))])]) : e._e()])], 1)
        }
          , F = []
          , H = {
            name: "BarcodeValidation",
            props: ["errorMsg"],
            data: function() {
                return {
                    barcode: ""
                }
            },
            watch: {
                barcode: function() {
                    this.$emit("returnBarcode", this.barcode)
                }
            }
        }
          , G = H
          , K = (t("52bc"),
        Object(u["a"])(G, V, F, !1, null, "9acf3f14", null))
          , z = K.exports;
        p()(K, {
            VCol: A["a"],
            VRow: C["a"]
        });
        var U = function() {
            var e = this
              , a = e.$createElement
              , t = e._self._c || a;
            return t("div")
        }
          , J = []
          , L = {
            name: "Footer"
        }
          , Z = L
          , W = Object(u["a"])(Z, U, J, !1, null, "47db34f3", null)
          , X = W.exports
          , Q = t("bc3a")
          , ee = t.n(Q)
          , ae = (t("d3b7"),
        t("2f62"));
        r["default"].use(ae["a"]);
        var te = "https://core.coronafocus.app/api/"
          , re = new ae["a"].Store({
            state: {
                alert: {
                    message: "test",
                    type: "info",
                    active: !1
                },
                namespaced: !0,
                pincode: "",
                barcode: "",
                declaration: {},
                verificate: []
            },
            getters: {
                getPincode: function(e) {
                    return e.pincode
                },
                getBarcode: function(e) {
                    return e.barcode
                },
                getDeclaration: function(e) {
                    return e.declaration
                }
            },
            mutations: {
                setVerificate: function(e, a) {
                    e.verificate = a
                },
                import_informations: function(e, a) {
                    e.pincode = a.pincode,
                    e.barcode = a.barcode,
                    e.declaration = a.declaration
                },
                setAlert: function(e, a) {
                    e.alert = a
                }
            },
            actions: {
                postDate: function(e, a) {
                    e.commit;
                    var t = sessionStorage.getItem("pincode")
                      , r = sessionStorage.getItem("barcode");
                    return new Promise((function(e, n) {
                        ee.a.post(te + "v1/public/kits", {
                            pincode: t,
                            barcode: r,
                            sampleDate: a
                        }).then((function(a) {
                            e(a)
                        }
                        )).catch((function(e) {
                            e.response ? n(e.response.data) : e.request ? n(e.request) : n(e.message)
                        }
                        ))
                    }
                    ))
                },
                checkCertificate: function(e, a) {
                    var t = e.commit;
                    return new Promise((function(e, r) {
                        ee.a.post(te + "verify/" + a).then((function(a) {
                            console.log(a),
                            t("setVerificate", a.data),
                            e(a)
                        }
                        )).catch((function(e) {
                            r(e)
                        }
                        ))
                    }
                    ))
                },
                postDeclaration: function(e, a) {
                    e.commit;
                    var t = a.sampleDate
                      , r = a.payload
                      , n = sessionStorage.getItem("pincode")
                      , o = sessionStorage.getItem("barcode");
                    return new Promise((function(e, a) {
                        ee.a.post(te + "v1/public/kits", {
                            pincode: n,
                            barcode: o,
                            data: r.data,
                            sampleDate: t
                        }).then((function(a) {
                            e(a)
                        }
                        )).catch((function(e) {
                            e.response ? a(e.response.data) : e.request ? a(e.request) : a(e.message)
                        }
                        ))
                    }
                    ))
                }
            },
            modules: {}
        })
          , ne = {
            name: "Home",
            index: re,
            components: {
                Footer: X,
                BarcodeValidation: z,
                PinValidation: N
            },
            created: function() {
                sessionStorage.clear()
            },
            data: function() {
                return {
                    pin: "",
                    barcode: "",
                    pin_error_message: "",
                    barcode_error_message: ""
                }
            },
            methods: {
                assignPin: function(e) {
                    this.pin = e
                },
                assignBarcode: function(e) {
                    this.barcode = e
                },
                validate: function() {
                    return "" !== this.barcode || (this.barcode_error_message = "Barcode required",
                    !1)
                },
                cleanErrors: function() {
                    this.barcode_error_message = "",
                    this.pin_error_message = ""
                },
                sendInfo: function() {
                    var e = this;
                    this.validate() && (this.cleanErrors(),
                    ee.a.post("https://core.coronafocus.app/api/v1/public/kits/fetch", {
                        pincode: this.pin,
                        barcode: this.barcode
                    }).then((function(a) {
                        sessionStorage.setItem("kit", JSON.stringify(a.data.kit)),
                        sessionStorage.setItem("declarationItem", JSON.stringify(a.data.declaration)),
                        sessionStorage.setItem("pincode", e.pin),
                        sessionStorage.setItem("barcode", e.barcode),
                        a.data.declaration ? sessionStorage.setItem("declaration", a.data.declaration.declaration_complete) : sessionStorage.setItem("declaration", !0),
                        a.data.kit.sampleDate && sessionStorage.setItem("sampleDate", a.data.kit.sampleDate),
                        e.$store.commit("import_informations", {
                            pincode: e.pin,
                            barcode: e.barcode,
                            declaration: a.data
                        }),
                        e.$router.push("/forms")
                    }
                    )).catch((function(a) {
                        var t = a.response.data.errors || a.response.data.message;
                        e.general_error_message = t.barcode ? t.barcode[0] : t.pincode ? t.pincode[0] : t,
                        e.handleAlert(e.general_error_message)
                    }
                    )))
                }
            },
            mixins: [b]
        }
          , oe = ne
          , se = t("b0af")
          , ie = Object(u["a"])(oe, $, M, !1, null, null, null)
          , ce = ie.exports;
        p()(ie, {
            VBtn: T["a"],
            VCard: se["a"],
            VCol: A["a"],
            VRow: C["a"]
        });
        var de = function() {
            var e = this
              , a = e.$createElement
              , t = e._self._c || a;
            return t("v-row", {
                staticClass: "max-width-800",
                attrs: {
                    "no-gutters": ""
                }
            }, [t("v-col", [t("SelectedBarCode"), t("SampleTakenDate", {
                attrs: {
                    sampleDate: e.sampleDate,
                    sampleTakenDate: e.sampleTakenDate,
                    $v: e.$v
                },
                on: {
                    "update:sampleTakenDate": function(a) {
                        e.sampleTakenDate = a
                    },
                    "update:sample-taken-date": function(a) {
                        e.sampleTakenDate = a
                    },
                    "add-sample-date": e.addSampleDate
                }
            }), t("v-row", {
                staticClass: "declaration-section"
            }, [t("v-col", [e.existDeclaration ? t("v-row", [t("v-col", {
                attrs: {
                    cols: "12"
                }
            }, [t("h3", [e._v(" Declaration data and personal information for this KIT are not required or already exists. Please contact your provider if you wish to update your personal information. ")])])], 1) : t("DeclarationStepper", {
                attrs: {
                    loading: e.loading,
                    declaration: e.declaration
                },
                on: {
                    "send-data": e.sendData
                }
            })], 1)], 1)], 1)], 1)
        }
          , le = []
          , ue = (t("4de4"),
        t("b64b"),
        t("a15b"),
        t("caad"),
        t("b5ae"))
          , me = (t("7db0"),
        t("d81d"),
        t("07ac"),
        t("b0c0"),
        t("466d"),
        t("ac1f"),
        t("c1df"))
          , pe = t.n(me)
          , he = function(e) {
            return !!/^[+]?[\d+\s?\d+]+$/.test(e)
        }
          , fe = function(e) {
            return pe()(e, "DD/MM/YYYY", !0).isValid() || !e
        }
          , ve = function(e) {
            return e ? e.substr(6, 4) + "-" + e.substr(3, 2) + "-" + e.substr(0, 2) : null
        }
          , _e = function(e) {
            return !!e
        }
          , be = {
            computed: {
                kit: function() {
                    return this.$store.state.declaration
                },
                checkRequiredTtrIntTavel: function() {
                    var e;
                    return ["ttr", "international_travel_day2", "international_travel_day8", "international_travel_day2_green", "international_travel_day2_vacc"].includes(null === (e = this.kit.declaration) || void 0 === e ? void 0 : e.programme_type)
                },
                checkRequiredTtrIntTavelFitFly: function() {
                    var e;
                    return ["ttr", "international_travel_day2", "international_travel_day8", "fitfly", "international_travel_day2_green", "international_travel_day2_vacc"].includes(null === (e = this.kit.declaration) || void 0 === e ? void 0 : e.programme_type)
                }
            },
            methods: {
                dateErrors: function(e) {
                    var a = [];
                    return this.$v.declaration.data[e].$dirty ? (!this.$v.declaration.data[e].required && a.push("Date of birth is required"),
                    this.$v.declaration.data[e].isValidDate || a.push("Valid format: DD/MM/YYYY"),
                    a) : a
                },
                requiredErrors: function(e) {
                    var a = [];
                    return this.$v.declaration.data[e].$dirty ? (!this.$v.declaration.data[e].required && a.push("This field is required."),
                    a) : a
                },
                checkedError: function(e) {
                    var a = [];
                    return this.$v.declaration.data[e].$dirty ? (!this.$v.declaration.data[e].isTrue && a.push("This field must be checked."),
                    a) : a
                },
                handleErrors: function(e) {
                    this.$v.declaration.data[e].$touch()
                },
                phoneErrors: function() {
                    var e = [];
                    return this.$v.declaration.data.phone.$dirty ? (!this.$v.declaration.data.phone.required && e.push("Phone is required"),
                    !this.$v.declaration.data.phone.isPhone && e.push("Phone is not valid"),
                    e) : e
                },
                emailErrors: function() {
                    var e = [];
                    return this.$v.declaration.data.email.$dirty ? (!this.$v.declaration.data.email.required && e.push("email is required"),
                    !this.$v.declaration.data.email.email && e.push("invalid email."),
                    e) : e
                },
                confirmEmailErrors: function() {
                    var e = [];
                    return this.$v.declaration.data.confirmEmail.$dirty ? (!this.$v.declaration.data.confirmEmail.required && e.push("confirm email is required"),
                    this.$v.declaration.data.email.$model !== this.$v.declaration.data.confirmEmail.$model && e.push("mail and confirm mail must match."),
                    !this.$v.declaration.data.confirmEmail.email && e.push("invalid confirm email."),
                    e) : e
                }
            },
            validations: {
                declaration: {
                    data: {
                        first_name: {
                            required: ue["required"]
                        },
                        surname: {
                            required: ue["required"]
                        },
                        sex: {
                            required: ue["required"]
                        },
                        date_of_birth: {
                            required: ue["required"],
                            isValidDate: fe
                        },
                        document_id_number: {
                            required: Object(ue["requiredIf"])((function() {
                                return this.checkRequiredTtrIntTavelFitFly
                            }
                            ))
                        },
                        ethnicity: {
                            required: Object(ue["requiredIf"])((function() {
                                return this.checkRequiredTtrIntTavel
                            }
                            ))
                        },
                        home_address_1: {
                            required: ue["required"]
                        },
                        home_city: {
                            required: ue["required"]
                        },
                        home_post_code: {
                            required: ue["required"]
                        },
                        home_country: {
                            required: ue["required"]
                        },
                        isolation_address_1: {
                            required: Object(ue["requiredIf"])((function() {
                                return this.checkRequiredTtrIntTavel
                            }
                            ))
                        },
                        isolation_city: {
                            required: Object(ue["requiredIf"])((function() {
                                return this.checkRequiredTtrIntTavel
                            }
                            ))
                        },
                        isolation_postcode: {
                            required: Object(ue["requiredIf"])((function() {
                                return this.checkRequiredTtrIntTavel
                            }
                            ))
                        },
                        isolation_country: {
                            required: Object(ue["requiredIf"])((function() {
                                return this.checkRequiredTtrIntTavel
                            }
                            ))
                        },
                        uk_arrival_date: {
                            required: Object(ue["requiredIf"])((function() {
                                return this.checkRequiredTtrIntTavel
                            }
                            ))
                        },
                        travelled_from_country: {
                            required: Object(ue["requiredIf"])((function() {
                                return this.checkRequiredTtrIntTavel
                            }
                            ))
                        },
                        travelled_from_city: {
                            required: Object(ue["requiredIf"])((function() {
                                return this.checkRequiredTtrIntTavel
                            }
                            ))
                        },
                        type_of_transport: {
                            required: Object(ue["requiredIf"])((function() {
                                return this.checkRequiredTtrIntTavel
                            }
                            ))
                        },
                        flight_number: {
                            required: Object(ue["requiredIf"])((function() {
                                return this.checkRequiredTtrIntTavel
                            }
                            ))
                        },
                        travelled_through_countries: {
                            required: Object(ue["requiredIf"])((function() {
                                return this.checkRequiredTtrIntTavel
                            }
                            ))
                        },
                        vaccination_status: {
                            required: Object(ue["requiredIf"])((function() {
                                return this.checkRequiredTtrIntTavel
                            }
                            ))
                        },
                        email: {
                            required: ue["required"],
                            email: ue["email"]
                        },
                        confirmEmail: {
                            required: ue["required"],
                            email: ue["email"]
                        },
                        phone: {
                            required: ue["required"],
                            isPhone: he
                        },
                        consent_to_test: {
                            isTrue: _e
                        }
                    }
                },
                sampleTakenDate: {
                    required: ue["required"]
                }
            }
        }
          , ge = function() {
            var e = this
              , a = e.$createElement
              , t = e._self._c || a;
            return t("v-row", {
                staticClass: "sampleDate-section",
                attrs: {
                    "no-gutters": ""
                }
            }, [e.sampleDate ? t("v-col", [t("p", [e._v(e._s(e.sampleDate))])]) : t("v-col", [t("h3", {
                staticClass: "mb-5"
            }, [e._v(" Set the Swab Taken Date ")]), t("v-row", {
                ref: "sampleDate",
                staticClass: "field-group-swab-taken-date",
                attrs: {
                    "no-gutters": ""
                }
            }, [t("v-col", {
                attrs: {
                    "no-gutters": ""
                }
            }, [t("datetime", {
                staticClass: "date-time",
                class: {
                    "date-time-error": e.$v.sampleTakenDate.$error
                },
                attrs: {
                    value: e.sampleTakenDate,
                    type: "datetime",
                    "max-datetime": e.maxDate,
                    "min-datetime": e.minDate,
                    placeholder: "Select Swab Taken Date"
                },
                on: {
                    input: e.changeDate
                }
            }), e.$v.sampleTakenDate.$error ? t("div", {
                staticClass: "date-time-error-message"
            }, [e._v(" Sample date is required ")]) : e._e()], 1)], 1), !e.sampleDate && e.existDeclaration ? t("v-row", [t("v-col", [t("v-btn", {
                attrs: {
                    raised: "",
                    rounded: "",
                    dark: "",
                    "x-large": "",
                    color: "primary"
                },
                on: {
                    click: e.addSampleDate
                }
            }, [e._v(" Submit Sample Date ")])], 1)], 1) : e._e()], 1)], 1)
        }
          , ye = []
          , ke = {
            name: "SampleTakenDate",
            props: ["sampleDate", "sampleTakenDate", "$v"],
            computed: {
                existDeclaration: function() {
                    return JSON.parse(sessionStorage.getItem("declaration"))
                }
            },
            data: function() {
                return {
                    maxDate: "",
                    minDate: ""
                }
            },
            mounted: function() {
                this.maxDate = pe()().add(2, "days").format("YYYY-MM-DD"),
                this.minDate = pe()().subtract(8, "days").format("YYYY-MM-DD")
            },
            methods: {
                addSampleDate: function() {
                    this.$emit("add-sample-date")
                },
                changeDate: function(e) {
                    e && (this.$v.sampleTakenDate.$touch(),
                    this.$emit("update:sampleTakenDate", e))
                }
            }
        }
          , Se = ke
          , Te = (t("d967"),
        Object(u["a"])(Se, ge, ye, !1, null, null, null))
          , Ae = Te.exports;
        p()(Te, {
            VBtn: T["a"],
            VCol: A["a"],
            VRow: C["a"]
        });
        var je = function() {
            var e = this
              , a = e.$createElement
              , t = e._self._c || a;
            return t("v-row", {
                staticClass: "mt-0 my-5",
                attrs: {
                    "no-gutters": ""
                }
            }, [t("v-col", [t("v-card", {
                staticClass: "pa-5 rounded-card",
                attrs: {
                    elevation: "0",
                    dark: "",
                    color: "primary",
                    rounded: ""
                }
            }, [t("v-card-title", [e._v("Selected Barcode")]), t("v-card-text", [t("h2", {
                staticClass: "selectedBarcode"
            }, [e._v(e._s(e.selectedBarcode))]), e.selectedBarcodeKit.result ? t("v-chip", [e._v(e._s(e.selectedBarcodeKit.result) + " ")]) : e._e()], 1)], 1)], 1)], 1)
        }
          , Ee = []
          , De = {
            name: "SelectedBarCode",
            computed: {
                selectedBarcode: function() {
                    return sessionStorage.getItem("barcode")
                },
                selectedBarcodeKit: function() {
                    return JSON.parse(sessionStorage.getItem("kit"))
                }
            }
        }
          , Ce = De
          , Ie = (t("9beb"),
        t("99d9"))
          , xe = t("cc20")
          , qe = Object(u["a"])(Ce, je, Ee, !1, null, "01023eb4", null)
          , $e = qe.exports;
        p()(qe, {
            VCard: se["a"],
            VCardText: Ie["a"],
            VCardTitle: Ie["b"],
            VChip: xe["a"],
            VCol: A["a"],
            VRow: C["a"]
        });
        var Me = function() {
            var e = this
              , a = e.$createElement
              , t = e._self._c || a;
            return t("v-stepper", {
                attrs: {
                    vertical: "",
                    flat: "",
                    "alt-labels": ""
                },
                model: {
                    value: e.step,
                    callback: function(a) {
                        e.step = a
                    },
                    expression: "step"
                }
            }, [t("v-stepper-step", {
                attrs: {
                    color: "primary",
                    complete: e.step > 1,
                    step: "1"
                }
            }, [e._v(" Personal Data ")]), t("v-stepper-content", {
                attrs: {
                    step: "1"
                }
            }, [t("PersonalDataStep", {
                attrs: {
                    declaration: e.declaration
                },
                on: {
                    "update:declaration": function(a) {
                        e.declaration = a
                    },
                    "go-to-step": e.goToStep
                }
            })], 1), t("v-stepper-step", {
                attrs: {
                    complete: e.step > 2,
                    step: "2"
                }
            }, [e._v(" Service Consent ")]), t("v-stepper-content", {
                attrs: {
                    step: "2"
                }
            }, [t("ServiceConsentStep", {
                attrs: {
                    declaration: e.declaration
                },
                on: {
                    "update:declaration": function(a) {
                        e.declaration = a
                    },
                    "go-to-step": e.goToStep
                }
            })], 1), t("v-stepper-step", {
                attrs: {
                    complete: e.step > 3,
                    step: "3"
                }
            }, [e._v(" Personal Details"), t("span", [e._v(" for " + e._s(e.declarationItem.programme_type))])]), t("v-stepper-content", {
                attrs: {
                    step: "3"
                }
            }, [t("PersonalDetailsStep", {
                attrs: {
                    declaration: e.declaration
                },
                on: {
                    "update:declaration": function(a) {
                        e.declaration = a
                    },
                    "go-to-step": e.goToStep
                }
            })], 1), e.checkRequiredTtrIntTavel ? t("v-stepper-step", {
                attrs: {
                    complete: e.step > 4,
                    step: "4"
                }
            }, [e._v(" Travel Information"), t("span", [e._v(" for " + e._s(e.declarationItem.programme_type))])]) : e._e(), e.checkRequiredTtrIntTavel ? t("v-stepper-content", {
                attrs: {
                    step: "4"
                }
            }, [t("TravelInformationStep", {
                attrs: {
                    declaration: e.declaration,
                    countryNames: e.countryNames
                },
                on: {
                    "update:declaration": function(a) {
                        e.declaration = a
                    },
                    "go-to-step": e.goToStep
                }
            })], 1) : e._e(), t("v-stepper-step", {
                attrs: {
                    complete: e.checkRequiredTtrIntTavel ? e.step > 5 : e.step > 4,
                    step: e.checkRequiredTtrIntTavel ? 5 : 4
                }
            }, [e._v(" Origin Country Home Address"), t("span", {
                staticClass: "programme_type"
            }, [e._v(" for " + e._s(e.declarationItem.programme_type))])]), t("v-stepper-content", {
                attrs: {
                    step: e.checkRequiredTtrIntTavel ? 5 : 4
                }
            }, [t("OriginCountryHomeAddressStep", {
                attrs: {
                    declaration: e.declaration,
                    countryNames: e.countryNames
                },
                on: {
                    "update:declaration": function(a) {
                        e.declaration = a
                    },
                    "go-to-step": e.goToStep
                }
            })], 1), e.checkRequiredTtrIntTavel ? t("v-stepper-step", {
                attrs: {
                    complete: e.step > 6,
                    step: "6"
                }
            }, [e._v(" Isolation Information (for " + e._s(e.declarationItem.programme_type) + ") ")]) : e._e(), e.checkRequiredTtrIntTavel ? t("v-stepper-content", {
                attrs: {
                    step: "6"
                }
            }, [t("IsolationInformationStep", {
                attrs: {
                    declaration: e.declaration
                },
                on: {
                    "update:declaration": function(a) {
                        e.declaration = a
                    },
                    "go-to-step": e.goToStep
                }
            })], 1) : e._e(), t("v-stepper-step", {
                attrs: {
                    step: e.checkRequiredTtrIntTavel ? 7 : 5
                }
            }, [e._v(" Summary ")]), t("v-stepper-content", {
                attrs: {
                    step: e.checkRequiredTtrIntTavel ? 7 : 5
                }
            }, [t("SummaryStep", {
                attrs: {
                    declaration: e.declaration,
                    checkRequiredTtrIntTavel: e.checkRequiredTtrIntTavel,
                    loading: e.loading
                },
                on: {
                    "send-data": e.sendData,
                    "go-to-step": e.goToStep
                }
            })], 1)], 1)
        }
          , we = []
          , Be = t("7252")
          , Oe = function() {
            var e = this
              , a = e.$createElement
              , t = e._self._c || a;
            return t("form", {
                staticClass: "mt-4"
            }, [t("v-text-field", {
                attrs: {
                    outlined: "",
                    rounded: "",
                    label: "First Name",
                    "error-messages": e.requiredErrors("first_name")
                },
                on: {
                    blur: function(a) {
                        return e.handleErrors("first_name")
                    }
                },
                model: {
                    value: e.declaration.data.first_name,
                    callback: function(a) {
                        e.$set(e.declaration.data, "first_name", a)
                    },
                    expression: "declaration.data.first_name"
                }
            }), t("v-text-field", {
                attrs: {
                    outlined: "",
                    rounded: "",
                    label: "Last Name",
                    "error-messages": e.requiredErrors("surname")
                },
                on: {
                    blur: function(a) {
                        return e.handleErrors("surname")
                    }
                },
                model: {
                    value: e.declaration.data.surname,
                    callback: function(a) {
                        e.$set(e.declaration.data, "surname", a)
                    },
                    expression: "declaration.data.surname"
                }
            }), t("v-text-field", {
                attrs: {
                    outlined: "",
                    rounded: "",
                    label: "Email Address",
                    "error-messages": e.emailErrors()
                },
                on: {
                    blur: function(a) {
                        return e.handleErrors("email")
                    }
                },
                model: {
                    value: e.declaration.data.email,
                    callback: function(a) {
                        e.$set(e.declaration.data, "email", a)
                    },
                    expression: "declaration.data.email"
                }
            }), t("v-text-field", {
                attrs: {
                    outlined: "",
                    rounded: "",
                    label: "Confirm Email",
                    "error-messages": e.confirmEmailErrors()
                },
                on: {
                    blur: function(a) {
                        return e.handleErrors("confirmEmail")
                    }
                },
                model: {
                    value: e.declaration.data.confirmEmail,
                    callback: function(a) {
                        e.$set(e.declaration.data, "confirmEmail", a)
                    },
                    expression: "declaration.data.confirmEmail"
                }
            }), t("v-text-field", {
                attrs: {
                    outlined: "",
                    rounded: "",
                    "prepend-inner-icon": "mdi-phone",
                    label: "Mobile Phone Number",
                    "error-messages": e.phoneErrors(),
                    hint: "Accepted format e.g +441223494994",
                    placeholder: "e.g +441223494994",
                    "persistent-hint": ""
                },
                on: {
                    blur: function(a) {
                        return e.handleErrors("phone")
                    }
                },
                model: {
                    value: e.declaration.data.phone,
                    callback: function(a) {
                        e.$set(e.declaration.data, "phone", a)
                    },
                    expression: "declaration.data.phone"
                }
            }), t("v-text-field", {
                attrs: {
                    outlined: "",
                    rounded: "",
                    label: "PassportId / Document No.",
                    "error-messages": e.requiredErrors("document_id_number")
                },
                on: {
                    blur: function(a) {
                        return e.handleErrors("document_id_number")
                    }
                },
                model: {
                    value: e.declaration.data.document_id_number,
                    callback: function(a) {
                        e.$set(e.declaration.data, "document_id_number", a)
                    },
                    expression: "declaration.data.document_id_number"
                }
            }), t("v-btn", {
                staticClass: "mb-3",
                attrs: {
                    color: "primary",
                    rounded: "",
                    elevation: "0",
                    large: ""
                },
                on: {
                    click: function(a) {
                        return e.goToStep(2)
                    }
                }
            }, [e._v(" continue ")])], 1)
        }
          , Ye = []
          , Pe = {
            name: "PersonalDataStep",
            props: ["declaration"],
            mixins: [be],
            methods: {
                goToStep: function(e) {
                    this.handleErrors("first_name"),
                    this.handleErrors("surname"),
                    this.handleErrors("email"),
                    this.handleErrors("phone"),
                    this.handleErrors("document_id_number"),
                    this.$v.$anyError || this.$emit("go-to-step", e)
                }
            }
        }
          , Re = Pe
          , Ne = t("8654")
          , Ve = Object(u["a"])(Re, Oe, Ye, !1, null, null, null)
          , Fe = Ve.exports;
        p()(Ve, {
            VBtn: T["a"],
            VTextField: Ne["a"]
        });
        var He = function() {
            var e = this
              , a = e.$createElement
              , t = e._self._c || a;
            return t("div", [t("p", {
                staticClass: "terms text-sm-caption"
            }, [e._v(" 1. Definitions and Interpretation 1.1 In these Terms, the following terms have the following meanings: Coronafocus Consent Form: the consent attached to these Terms of Sale Coronafocus Test Kit: the package we send to you by post which includes a sterile swab to take the Sample, an envelope to return the Sample and the User Instructions. Coronafocus Consent Form: the consent attached to these Terms of Sale Coronafocus Test Kit: the package we send to you by post which includes a sterile swab to take the Sample, an envelope to return the Sample and the User Instructions.Coronafocus Consent Form: the consent attached to these Terms of Sale Coronafocus Test Kit: the package we send to you by post which includes a sterile swab to take the Sample, an envelope to return the Sample and the User Instructions.Coronafocus Consent Form: the consent attached to these Terms of Sale Coronafocus Test Kit: the package we send to you by post which includes a sterile swab to take the Sample, an envelope to return the Sample and the User Instructions.Coronafocus Consent Form: the consent attached to these Terms of Sale Coronafocus Test Kit: the package we send to you by post which includes a sterile swab to take the Sample, an envelope to return the Sample and the User Instructions. ")]), t("v-checkbox", {
                attrs: {
                    label: "I confirm I have read and agree to the terms of this form",
                    "error-messages": e.checkedError("consent_to_test")
                },
                on: {
                    click: function(a) {
                        return e.handleErrors("consent_to_test")
                    }
                },
                model: {
                    value: e.declaration.data.consent_to_test,
                    callback: function(a) {
                        e.$set(e.declaration.data, "consent_to_test", a)
                    },
                    expression: "declaration.data.consent_to_test"
                }
            }), t("v-btn", {
                attrs: {
                    color: "secondary",
                    rounded: "",
                    elevation: "0",
                    large: ""
                },
                on: {
                    click: function(a) {
                        return e.goToStep(1)
                    }
                }
            }, [e._v(" Back ")]), t("v-btn", {
                staticClass: "ml-3",
                attrs: {
                    color: "primary",
                    rounded: "",
                    elevation: "0",
                    large: ""
                },
                on: {
                    click: function(a) {
                        return e.goToStep(3)
                    }
                }
            }, [e._v(" Continue ")])], 1)
        }
          , Ge = []
          , Ke = {
            name: "ServiceConsentStep",
            props: ["declaration"],
            mixins: [be],
            methods: {
                goToStep: function(e) {
                    1 !== e ? (this.handleErrors("consent_to_test"),
                    this.$v.$anyError || this.$emit("go-to-step", e)) : this.$emit("go-to-step", e)
                }
            }
        }
          , ze = Ke
          , Ue = t("ac7c")
          , Je = Object(u["a"])(ze, He, Ge, !1, null, null, null)
          , Le = Je.exports;
        p()(Je, {
            VBtn: T["a"],
            VCheckbox: Ue["a"]
        });
        var Ze = function() {
            var e = this
              , a = e.$createElement
              , t = e._self._c || a;
            return t("form", {
                staticClass: "mt-4"
            }, [t("v-text-field", {
                attrs: {
                    outlined: "",
                    rounded: "",
                    label: "First Name",
                    "error-messages": e.requiredErrors("first_name")
                },
                on: {
                    blur: function(a) {
                        return e.handleErrors("first_name")
                    }
                },
                model: {
                    value: e.declaration.data.first_name,
                    callback: function(a) {
                        e.$set(e.declaration.data, "first_name", a)
                    },
                    expression: "declaration.data.first_name"
                }
            }), t("v-text-field", {
                attrs: {
                    outlined: "",
                    rounded: "",
                    label: "Surname",
                    "error-messages": e.requiredErrors("surname")
                },
                on: {
                    blur: function(a) {
                        return e.handleErrors("surname")
                    }
                },
                model: {
                    value: e.declaration.data.surname,
                    callback: function(a) {
                        e.$set(e.declaration.data, "surname", a)
                    },
                    expression: "declaration.data.surname"
                }
            }), t("v-select", {
                attrs: {
                    outlined: "",
                    rounded: "",
                    items: ["M", "F"],
                    "error-messages": e.requiredErrors("sex"),
                    label: "Sex"
                },
                on: {
                    blur: function(a) {
                        return e.handleErrors("sex")
                    }
                },
                model: {
                    value: e.declaration.data.sex,
                    callback: function(a) {
                        e.$set(e.declaration.data, "sex", a)
                    },
                    expression: "declaration.data.sex"
                }
            }), t("VCleaveInput", {
                attrs: {
                    rounded: "",
                    outlined: "",
                    type: "tel",
                    placeholder: "DD/MM/YYYY",
                    options: {
                        date: !0,
                        delimiter: "/",
                        datePattern: ["d", "m", "Y"]
                    },
                    label: "Date of birth",
                    "error-messages": e.dateErrors("date_of_birth")
                },
                on: {
                    blur: function(a) {
                        return e.handleErrors("date_of_birth")
                    }
                },
                model: {
                    value: e.date,
                    callback: function(a) {
                        e.date = a
                    },
                    expression: "date"
                }
            }), t("v-select", {
                attrs: {
                    outlined: "",
                    rounded: "",
                    items: ["No", "1st dose", "1st and 2nd dose"],
                    label: "Vaccination Status",
                    "error-messages": e.requiredErrors("vaccination_status")
                },
                on: {
                    blur: function(a) {
                        return e.handleErrors("vaccination_status")
                    }
                },
                model: {
                    value: e.declaration.data.vaccination_status,
                    callback: function(a) {
                        e.$set(e.declaration.data, "vaccination_status", a)
                    },
                    expression: "declaration.data.vaccination_status"
                }
            }), t("v-text-field", {
                attrs: {
                    outlined: "",
                    rounded: "",
                    label: "Mobile Phone Number",
                    "error-messages": e.phoneErrors()
                },
                on: {
                    blur: function(a) {
                        return e.handleErrors("phone")
                    }
                },
                model: {
                    value: e.declaration.data.phone,
                    callback: function(a) {
                        e.$set(e.declaration.data, "phone", a)
                    },
                    expression: "declaration.data.phone"
                }
            }), t("v-text-field", {
                attrs: {
                    outlined: "",
                    rounded: "",
                    label: "Email",
                    "error-messages": e.emailErrors()
                },
                on: {
                    blur: function(a) {
                        return e.handleErrors("email")
                    }
                },
                model: {
                    value: e.declaration.data.email,
                    callback: function(a) {
                        e.$set(e.declaration.data, "email", a)
                    },
                    expression: "declaration.data.email"
                }
            }), t("v-select", {
                attrs: {
                    outlined: "",
                    rounded: "",
                    items: ["White", "Mixed/Multiple ethnic groups", "Asian/Asian British", "Black/African/Caribbean/Black British", "Other ethnic group"],
                    label: "Ethnicity",
                    "error-messages": e.requiredErrors("ethnicity")
                },
                on: {
                    blur: function(a) {
                        return e.handleErrors("ethnicity")
                    }
                },
                model: {
                    value: e.declaration.data.ethnicity,
                    callback: function(a) {
                        e.$set(e.declaration.data, "ethnicity", a)
                    },
                    expression: "declaration.data.ethnicity"
                }
            }), t("v-text-field", {
                attrs: {
                    outlined: "",
                    rounded: "",
                    label: "ID passport",
                    "error-messages": e.requiredErrors("document_id_number")
                },
                on: {
                    blur: function(a) {
                        return e.handleErrors("document_id_number")
                    }
                },
                model: {
                    value: e.declaration.data.document_id_number,
                    callback: function(a) {
                        e.$set(e.declaration.data, "document_id_number", a)
                    },
                    expression: "declaration.data.document_id_number"
                }
            }), t("v-btn", {
                attrs: {
                    color: "secondary",
                    rounded: "",
                    elevation: "0",
                    large: ""
                },
                on: {
                    click: function(a) {
                        return e.goToStep(2)
                    }
                }
            }, [e._v(" Back ")]), t("v-btn", {
                staticClass: "ml-3",
                attrs: {
                    color: "primary",
                    rounded: "",
                    elevation: "0",
                    large: ""
                },
                on: {
                    click: function(a) {
                        return e.goToStep(4)
                    }
                }
            }, [e._v(" Continue ")])], 1)
        }
          , We = []
          , Xe = (t("99af"),
        t("f9cd"))
          , Qe = t.n(Xe)
          , ea = {
            name: "PersonalDetailsStep",
            props: ["declaration"],
            mixins: [be],
            components: {
                VCleaveInput: Qe.a
            },
            data: function() {
                return {
                    date: ""
                }
            },
            watch: {
                date: function(e) {
                    var a = "".concat(e.substring(0, 2), "/").concat(e.substring(2, 4), "/").concat(e.substring(4, 8));
                    this.declaration.data.date_of_birth = a
                }
            },
            methods: {
                goToStep: function(e) {
                    2 !== e ? (this.handleErrors("first_name"),
                    this.handleErrors("surname"),
                    this.handleErrors("sex"),
                    this.handleErrors("date_of_birth"),
                    this.handleErrors("vaccination_status"),
                    this.handleErrors("phone"),
                    this.handleErrors("email"),
                    this.handleErrors("ethnicity"),
                    this.handleErrors("document_id_number"),
                    this.$v.$anyError || this.$emit("go-to-step", e)) : this.$emit("go-to-step", e)
                }
            }
        }
          , aa = ea
          , ta = t("b974")
          , ra = Object(u["a"])(aa, Ze, We, !1, null, null, null)
          , na = ra.exports;
        p()(ra, {
            VBtn: T["a"],
            VSelect: ta["a"],
            VTextField: Ne["a"]
        });
        var oa = function() {
            var e = this
              , a = e.$createElement
              , t = e._self._c || a;
            return t("form", {
                staticClass: "mt-4"
            }, [t("v-menu", {
                ref: "menu",
                attrs: {
                    "close-on-content-click": !1,
                    "return-value": e.declaration.data.uk_arrival_date,
                    transition: "scale-transition",
                    "offset-y": "",
                    "min-width": "auto"
                },
                on: {
                    "update:returnValue": function(a) {
                        return e.$set(e.declaration.data, "uk_arrival_date", a)
                    },
                    "update:return-value": function(a) {
                        return e.$set(e.declaration.data, "uk_arrival_date", a)
                    }
                },
                scopedSlots: e._u([{
                    key: "activator",
                    fn: function(a) {
                        var r = a.on
                          , n = a.attrs;
                        return [t("v-text-field", e._g(e._b({
                            attrs: {
                                outlined: "",
                                rounded: "",
                                value: e.formattedDate,
                                "error-messages": e.requiredErrors("uk_arrival_date"),
                                label: "UK arrival date",
                                "prepend-inner-icon": "mdi-calendar",
                                readonly: ""
                            },
                            on: {
                                blur: function(a) {
                                    return e.handleErrors("uk_arrival_date")
                                }
                            }
                        }, "v-text-field", n, !1), r))]
                    }
                }]),
                model: {
                    value: e.menu,
                    callback: function(a) {
                        e.menu = a
                    },
                    expression: "menu"
                }
            }, [t("v-date-picker", {
                attrs: {
                    color: "primary",
                    "first-day-of-week": 1,
                    "no-title": "",
                    scrollable: ""
                },
                model: {
                    value: e.declaration.data.uk_arrival_date,
                    callback: function(a) {
                        e.$set(e.declaration.data, "uk_arrival_date", a)
                    },
                    expression: "declaration.data.uk_arrival_date"
                }
            }, [t("v-spacer"), t("v-btn", {
                attrs: {
                    text: "",
                    color: "primary"
                },
                on: {
                    click: function(a) {
                        e.menu = !1
                    }
                }
            }, [e._v(" Cancel ")]), t("v-btn", {
                attrs: {
                    text: "",
                    color: "primary"
                },
                on: {
                    click: function(a) {
                        return e.$refs.menu.save(e.declaration.data.uk_arrival_date)
                    }
                }
            }, [e._v(" OK ")])], 1)], 1), t("v-select", {
                attrs: {
                    outlined: "",
                    rounded: "",
                    items: e.countryNames,
                    label: "Departure Country",
                    "error-messages": e.requiredErrors("travelled_from_country")
                },
                on: {
                    blur: function(a) {
                        return e.handleErrors("travelled_from_country")
                    }
                },
                model: {
                    value: e.declaration.data.travelled_from_country,
                    callback: function(a) {
                        e.$set(e.declaration.data, "travelled_from_country", a)
                    },
                    expression: "declaration.data.travelled_from_country"
                }
            }), t("v-text-field", {
                attrs: {
                    outlined: "",
                    rounded: "",
                    label: "Departure City",
                    "error-messages": e.requiredErrors("travelled_from_city")
                },
                on: {
                    blur: function(a) {
                        return e.handleErrors("travelled_from_city")
                    }
                },
                model: {
                    value: e.declaration.data.travelled_from_city,
                    callback: function(a) {
                        e.$set(e.declaration.data, "travelled_from_city", a)
                    },
                    expression: "declaration.data.travelled_from_city"
                }
            }), t("v-select", {
                attrs: {
                    outlined: "",
                    rounded: "",
                    items: ["Airplane", "Vessel", "Train", "Bus/Car", "Other"],
                    label: "Transportation type",
                    "error-messages": e.requiredErrors("type_of_transport")
                },
                on: {
                    blur: function(a) {
                        return e.handleErrors("type_of_transport")
                    }
                },
                model: {
                    value: e.declaration.data.type_of_transport,
                    callback: function(a) {
                        e.$set(e.declaration.data, "type_of_transport", a)
                    },
                    expression: "declaration.data.type_of_transport"
                }
            }), t("v-text-field", {
                attrs: {
                    outlined: "",
                    rounded: "",
                    label: "Flight/Train/Vessel Number",
                    "error-messages": e.requiredErrors("flight_number")
                },
                on: {
                    blur: function(a) {
                        return e.handleErrors("flight_number")
                    }
                },
                model: {
                    value: e.declaration.data.flight_number,
                    callback: function(a) {
                        e.$set(e.declaration.data, "flight_number", a)
                    },
                    expression: "declaration.data.flight_number"
                }
            }), t("v-text-field", {
                attrs: {
                    outlined: "",
                    rounded: "",
                    label: "Countries visited in the last 10 days",
                    "error-messages": e.requiredErrors("travelled_through_countries")
                },
                on: {
                    blur: function(a) {
                        return e.handleErrors("travelled_through_countries")
                    }
                },
                model: {
                    value: e.declaration.data.travelled_through_countries,
                    callback: function(a) {
                        e.$set(e.declaration.data, "travelled_through_countries", a)
                    },
                    expression: "declaration.data.travelled_through_countries"
                }
            }), t("v-btn", {
                attrs: {
                    color: "secondary",
                    rounded: "",
                    elevation: "0",
                    large: ""
                },
                on: {
                    click: function(a) {
                        return e.goToStep(3)
                    }
                }
            }, [e._v(" Back ")]), t("v-btn", {
                staticClass: "ml-3",
                attrs: {
                    color: "primary",
                    rounded: "",
                    elevation: "0",
                    large: ""
                },
                on: {
                    click: function(a) {
                        return e.goToStep(5)
                    }
                }
            }, [e._v(" Continue ")])], 1)
        }
          , sa = []
          , ia = {
            name: "TravelInformationStep",
            props: ["declaration", "countryNames"],
            computed: {
                formattedDate: function() {
                    return this.declaration.data.uk_arrival_date ? pe()(this.declaration.data.uk_arrival_date).format("DD/MM/YYYY") : ""
                }
            },
            data: function() {
                return {
                    date: new Date(Date.now() - 6e4 * (new Date).getTimezoneOffset()).toISOString().substr(0, 10),
                    menu: !1
                }
            },
            mixins: [be],
            methods: {
                goToStep: function(e) {
                    3 !== e ? (this.handleErrors("uk_arrival_date"),
                    this.handleErrors("travelled_from_country"),
                    this.handleErrors("travelled_from_city"),
                    this.handleErrors("type_of_transport"),
                    this.handleErrors("flight_number"),
                    this.handleErrors("travelled_through_countries"),
                    this.$v.$anyError || this.$emit("go-to-step", e)) : this.$emit("go-to-step", e)
                }
            }
        }
          , ca = ia
          , da = t("2e4b")
          , la = t("e449")
          , ua = t("2fa4")
          , ma = Object(u["a"])(ca, oa, sa, !1, null, null, null)
          , pa = ma.exports;
        p()(ma, {
            VBtn: T["a"],
            VDatePicker: da["a"],
            VMenu: la["a"],
            VSelect: ta["a"],
            VSpacer: ua["a"],
            VTextField: Ne["a"]
        });
        var ha = function() {
            var e = this
              , a = e.$createElement
              , t = e._self._c || a;
            return t("form", {
                staticClass: "mt-4"
            }, [t("v-select", {
                attrs: {
                    outlined: "",
                    rounded: "",
                    items: e.countryNames,
                    label: "Home Country",
                    "error-messages": e.requiredErrors("home_country")
                },
                on: {
                    blur: function(a) {
                        return e.handleErrors("home_country")
                    }
                },
                model: {
                    value: e.declaration.data.home_country,
                    callback: function(a) {
                        e.$set(e.declaration.data, "home_country", a)
                    },
                    expression: "declaration.data.home_country"
                }
            }), t("v-text-field", {
                attrs: {
                    outlined: "",
                    rounded: "",
                    label: "Home City",
                    "error-messages": e.requiredErrors("home_city")
                },
                on: {
                    blur: function(a) {
                        return e.handleErrors("home_city")
                    }
                },
                model: {
                    value: e.declaration.data.home_city,
                    callback: function(a) {
                        e.$set(e.declaration.data, "home_city", a)
                    },
                    expression: "declaration.data.home_city"
                }
            }), t("v-text-field", {
                attrs: {
                    outlined: "",
                    rounded: "",
                    label: "Home Postcode",
                    "error-messages": e.requiredErrors("home_post_code")
                },
                on: {
                    blur: function(a) {
                        return e.handleErrors("home_post_code")
                    }
                },
                model: {
                    value: e.declaration.data.home_post_code,
                    callback: function(a) {
                        e.$set(e.declaration.data, "home_post_code", a)
                    },
                    expression: "declaration.data.home_post_code"
                }
            }), t("v-text-field", {
                attrs: {
                    outlined: "",
                    rounded: "",
                    label: "Home Full Address",
                    "error-messages": e.requiredErrors("home_address_1")
                },
                on: {
                    blur: function(a) {
                        return e.handleErrors("home_address_1")
                    }
                },
                model: {
                    value: e.declaration.data.home_address_1,
                    callback: function(a) {
                        e.$set(e.declaration.data, "home_address_1", a)
                    },
                    expression: "declaration.data.home_address_1"
                }
            }), t("v-btn", {
                attrs: {
                    color: "secondary",
                    rounded: "",
                    elevation: "0",
                    large: ""
                },
                on: {
                    click: function(a) {
                        return e.goToStep(e.checkRequiredTtrIntTavel ? 4 : 3)
                    }
                }
            }, [e._v(" Back ")]), t("v-btn", {
                staticClass: "ml-3",
                attrs: {
                    color: "primary",
                    rounded: "",
                    elevation: "0",
                    large: ""
                },
                on: {
                    click: function(a) {
                        return e.goToStep(e.checkRequiredTtrIntTavel ? 6 : 5)
                    }
                }
            }, [e._v(" Continue ")])], 1)
        }
          , fa = []
          , va = {
            name: "OriginCountryHomeAddressStep",
            props: ["declaration", "countryNames", "loading"],
            mixins: [be, b],
            methods: {
                checkForErrors: function() {
                    this.handleErrors("home_country"),
                    this.handleErrors("home_city"),
                    this.handleErrors("home_post_code"),
                    this.handleErrors("home_address_1")
                },
                goToStep: function(e) {
                    e < 5 ? this.$emit("go-to-step", e) : (this.checkForErrors(),
                    this.$v.$anyError || this.$emit("go-to-step", e))
                }
            }
        }
          , _a = va
          , ba = Object(u["a"])(_a, ha, fa, !1, null, null, null)
          , ga = ba.exports;
        p()(ba, {
            VBtn: T["a"],
            VSelect: ta["a"],
            VTextField: Ne["a"]
        });
        var ya = function() {
            var e = this
              , a = e.$createElement
              , t = e._self._c || a;
            return t("form", {
                staticClass: "mt-4"
            }, ["United Kingdom of Great Britain and Northern Ireland" === e.declaration.data.home_country ? t("v-checkbox", {
                staticClass: "mb-6",
                attrs: {
                    color: "primary",
                    label: "Same as home address",
                    rounded: "",
                    elevation: "0",
                    large: ""
                },
                on: {
                    click: e.copyAddress
                },
                model: {
                    value: e.sameAddress,
                    callback: function(a) {
                        e.sameAddress = a
                    },
                    expression: "sameAddress"
                }
            }) : e._e(), t("v-text-field", {
                attrs: {
                    outlined: "",
                    rounded: "",
                    value: "GB",
                    label: "Isolation country",
                    disabled: "",
                    "error-messages": e.requiredErrors("isolation_country")
                },
                on: {
                    blur: function(a) {
                        return e.handleErrors("isolation_country")
                    }
                },
                model: {
                    value: e.declaration.data.isolation_country,
                    callback: function(a) {
                        e.$set(e.declaration.data, "isolation_country", a)
                    },
                    expression: "declaration.data.isolation_country"
                }
            }), t("v-text-field", {
                attrs: {
                    outlined: "",
                    rounded: "",
                    label: "Isolation city",
                    disabled: e.sameAddress,
                    "error-messages": e.requiredErrors("isolation_city")
                },
                on: {
                    blur: function(a) {
                        return e.handleErrors("isolation_city")
                    }
                },
                model: {
                    value: e.declaration.data.isolation_city,
                    callback: function(a) {
                        e.$set(e.declaration.data, "isolation_city", a)
                    },
                    expression: "declaration.data.isolation_city"
                }
            }), t("v-text-field", {
                attrs: {
                    outlined: "",
                    rounded: "",
                    label: "Isolation Postcode",
                    disabled: e.sameAddress,
                    "error-messages": e.requiredErrors("isolation_postcode")
                },
                on: {
                    blur: function(a) {
                        return e.handleErrors("isolation_postcode")
                    }
                },
                model: {
                    value: e.declaration.data.isolation_postcode,
                    callback: function(a) {
                        e.$set(e.declaration.data, "isolation_postcode", a)
                    },
                    expression: "declaration.data.isolation_postcode"
                }
            }), t("v-text-field", {
                attrs: {
                    outlined: "",
                    rounded: "",
                    label: "Isolation Street Address",
                    disabled: e.sameAddress,
                    "error-messages": e.requiredErrors("isolation_address_1")
                },
                on: {
                    blur: function(a) {
                        return e.handleErrors("isolation_address_1")
                    }
                },
                model: {
                    value: e.declaration.data.isolation_address_1,
                    callback: function(a) {
                        e.$set(e.declaration.data, "isolation_address_1", a)
                    },
                    expression: "declaration.data.isolation_address_1"
                }
            }), t("v-btn", {
                attrs: {
                    color: "secondary",
                    rounded: "",
                    elevation: "0",
                    large: ""
                },
                on: {
                    click: function(a) {
                        return e.goToStep(5)
                    }
                }
            }, [e._v(" Back ")]), t("v-btn", {
                staticClass: "mb-3",
                attrs: {
                    color: "primary",
                    rounded: "",
                    elevation: "0",
                    large: ""
                },
                on: {
                    click: function(a) {
                        return e.goToStep(7)
                    }
                }
            }, [e._v(" continue ")])], 1)
        }
          , ka = []
          , Sa = {
            name: "IsolationInformationStep",
            props: ["declaration", "loading"],
            mixins: [be, b],
            data: function() {
                return {
                    sameAddress: !1
                }
            },
            methods: {
                goToStep: function(e) {
                    e < 5 ? this.$emit("go-to-step", e) : (this.checkForErrors(),
                    this.$v.$anyError || this.$emit("go-to-step", e))
                },
                checkForErrors: function() {
                    this.handleErrors("isolation_country"),
                    this.handleErrors("isolation_city"),
                    this.handleErrors("isolation_postcode"),
                    this.handleErrors("isolation_address_1")
                },
                copyAddress: function() {
                    this.declaration.data.isolation_city = this.declaration.data.home_city,
                    this.declaration.data.isolation_postcode = this.declaration.data.home_post_code,
                    this.declaration.data.isolation_address_1 = this.declaration.data.home_address_1
                }
            }
        }
          , Ta = Sa
          , Aa = Object(u["a"])(Ta, ya, ka, !1, null, null, null)
          , ja = Aa.exports;
        p()(Aa, {
            VBtn: T["a"],
            VCheckbox: Ue["a"],
            VTextField: Ne["a"]
        });
        var Ea = function() {
            var e = this
              , a = e.$createElement
              , t = e._self._c || a;
            return t("div", {
                staticClass: "declaration-summary"
            }, [t("h4", [e._v("Personal Data")]), t("ul", [t("li", [e._v("First name: "), t("span", [e._v(e._s(e.declaration.data.first_name))])]), t("li", [e._v("Last name: "), t("span", [e._v(e._s(e.declaration.data.surname))])]), t("li", [e._v("Email address: "), t("span", [e._v(e._s(e.declaration.data.email))])]), t("li", [e._v("Phone number: "), t("span", [e._v(e._s(e.declaration.data.phone))])]), t("li", [e._v(" PassportId / Document No.: "), t("span", [e._v(e._s(e.declaration.data.document_id_number))])])]), t("h4", [e._v("Service Consent")]), t("ul", [t("li", [e._v("Consent: "), t("span", [e._v(e._s(e.declaration.data.consent_to_test ? "Yes" : "No"))])])]), t("h4", [e._v("Personal Details")]), t("ul", [t("li", [e._v("First name: "), t("span", [e._v(e._s(e.declaration.data.first_name))])]), t("li", [e._v("Last name: "), t("span", [e._v(e._s(e.declaration.data.surname))])]), t("li", [e._v("Sex: "), t("span", [e._v(e._s(e.declaration.data.sex))])]), t("li", [e._v("Date of birth: "), t("span", [e._v(e._s(e.declaration.data.date_of_birth))])]), t("li", [e._v("Vaccination status: "), t("span", [e._v(e._s(e.declaration.data.vaccination_status))])]), t("li", [e._v("Email address: "), t("span", [e._v(e._s(e.declaration.data.email))])]), t("li", [e._v("Phone number: "), t("span", [e._v(e._s(e.declaration.data.phone))])]), t("li", [e._v("Ethnicity: "), t("span", [e._v(e._s(e.declaration.data.ethnicity))])]), t("li", [e._v(" PassportId / Document No.: "), t("span", [e._v(e._s(e.declaration.data.document_id_number))])])]), e.checkRequiredTtrIntTavel ? t("div", [t("h4", [e._v("Travel Information")]), t("ul", [t("li", [e._v("UK arrival date: "), t("span", [e._v(e._s(e.declaration.data.uk_arrival_date))])]), t("li", [e._v(" Travelled from country: "), t("span", [e._v(e._s(e.declaration.data.travelled_from_country))])]), t("li", [e._v("Traveled from city: "), t("span", [e._v(e._s(e.declaration.data.travelled_from_city))])]), t("li", [e._v("Type of transport: "), t("span", [e._v(e._s(e.declaration.data.type_of_transport))])]), t("li", [e._v(" Flight/Train/Vessel Number: "), t("span", [e._v(e._s(e.declaration.data.flight_number))])]), t("li", [e._v(" Countries visited in the last 10 days: "), t("span", [e._v(e._s(e.declaration.data.travelled_through_countries))])])])]) : e._e(), t("h4", [e._v("Origin Country Home Address")]), t("ul", [t("li", [e._v("Home country: "), t("span", [e._v(e._s(e.declaration.data.home_country))])]), t("li", [e._v("Home city: "), t("span", [e._v(e._s(e.declaration.data.home_city))])]), t("li", [e._v("Home post code: "), t("span", [e._v(e._s(e.declaration.data.home_post_code))])]), t("li", [e._v("Home address: "), t("span", [e._v(e._s(e.declaration.data.home_address_1))])])]), e.checkRequiredTtrIntTavel ? t("div", [t("h4", [e._v("Isolation Information")]), t("ul", [t("li", [e._v("Isolation country: "), t("span", [e._v(e._s(e.declaration.data.isolation_country))])]), t("li", [e._v("Isolation city: "), t("span", [e._v(e._s(e.declaration.data.isolation_city))])]), t("li", [e._v("Isolation post code: "), t("span", [e._v(e._s(e.declaration.data.isolation_postcode))])]), t("li", [e._v("Isolation address: "), t("span", [e._v(e._s(e.declaration.data.isolation_address_1))])])])]) : e._e(), t("v-btn", {
                attrs: {
                    color: "secondary",
                    rounded: "",
                    elevation: "0",
                    large: ""
                },
                on: {
                    click: function(a) {
                        return e.goToStep(e.checkRequiredTtrIntTavel ? 6 : 4)
                    }
                }
            }, [e._v(" Back ")]), t("v-btn", {
                staticClass: "ml-3",
                attrs: {
                    color: "primary",
                    rounded: "",
                    elevation: "0",
                    large: "",
                    loading: e.loading
                },
                on: {
                    click: e.sendData
                }
            }, [e._v(" Submit Declaration Data ")])], 1)
        }
          , Da = []
          , Ca = {
            name: "SummaryStep",
            props: ["declaration", "loading", "checkRequiredTtrIntTavel"],
            methods: {
                goToStep: function(e) {
                    this.$emit("go-to-step", e)
                },
                sendData: function() {
                    this.$emit("send-data")
                }
            }
        }
          , Ia = Ca
          , xa = (t("3a4e"),
        Object(u["a"])(Ia, Ea, Da, !1, null, "04442cf0", null))
          , qa = xa.exports;
        p()(xa, {
            VBtn: T["a"]
        });
        var $a = {
            name: "DeclarationStepper",
            components: {
                SummaryStep: qa,
                IsolationInformationStep: ja,
                OriginCountryHomeAddressStep: ga,
                TravelInformationStep: pa,
                PersonalDetailsStep: na,
                ServiceConsentStep: Le,
                PersonalDataStep: Fe
            },
            mixins: [be],
            props: ["declaration", "loading"],
            data: function() {
                return {
                    step: 1,
                    countryNames: [],
                    declarationItem: JSON.parse(sessionStorage.getItem("declarationItem"))
                }
            },
            mounted: function() {
                this.countryNames = Be.map((function(e) {
                    return e.name
                }
                ))
            },
            methods: {
                goToStep: function(e) {
                    this.step = e
                },
                sendData: function() {
                    this.$emit("send-data")
                }
            }
        }
          , Ma = $a
          , wa = (t("d4f6"),
        t("7e85"))
          , Ba = t("e516")
          , Oa = t("56a4")
          , Ya = Object(u["a"])(Ma, Me, we, !1, null, "62905760", null)
          , Pa = Ya.exports;
        p()(Ya, {
            VStepper: wa["a"],
            VStepperContent: Ba["a"],
            VStepperStep: Oa["a"]
        });
        var Ra = {
            name: "Form",
            components: {
                DeclarationStepper: Pa,
                SelectedBarCode: $e,
                SampleTakenDate: Ae
            },
            mixins: [be, b],
            created: function() {
                this.sampleDate = this.formatDateFromSessionStorage()
            },
            computed: {
                existDeclaration: function() {
                    return JSON.parse(sessionStorage.getItem("declaration"))
                }
            },
            data: function() {
                return {
                    loading: !1,
                    sampleDate: null,
                    sampleTakenDate: "",
                    declaration: {
                        data: {
                            consent_to_test: !1,
                            first_name: "",
                            surname: "",
                            sex: "",
                            vaccination_status: "",
                            phone: "",
                            email: "",
                            ethnicity: "",
                            document_id_number: "",
                            date_of_birth: "",
                            uk_arrival_date: "",
                            travelled_from_country: "",
                            travelled_from_city: "",
                            type_of_transport: "",
                            flight_number: "",
                            travelled_through_countries: "",
                            home_country: "",
                            home_city: "",
                            home_post_code: "",
                            home_address_1: "",
                            isolation_country: "GB",
                            isolation_city: "",
                            isolation_postcode: "",
                            isolation_address_1: ""
                        }
                    }
                }
            },
            methods: {
                formatDateFromSessionStorage: function() {
                    var e = sessionStorage.getItem("sampleDate");
                    return e ? pe()(e, "YYYY-MM-DD HH:mm:ss").format("DD/MM/YYYY HH:mm") : ""
                },
                sendData: function() {
                    var e = this;
                    if (this.loading = !0,
                    this.sampleTakenDate = this.sampleTakenDate || sessionStorage.getItem("sampleDate"),
                    this.$v.declaration.data.$touch(),
                    this.$v.sampleTakenDate.$touch(),
                    this.$v.declaration.data.$invalid || this.$v.sampleTakenDate.$invalid) {
                        if (this.loading = !1,
                        this.$v.declaration.data.$invalid) {
                            var a = Object.keys(this.$v.declaration.data.$params).filter((function(a) {
                                return e.$v.declaration.data[a].$invalid
                            }
                            ));
                            this.handleAlert("Some field are missing or in the wrong format. Please Check : " + a.join(", "))
                        }
                        this.$v.sampleTakenDate.$invalid && this.handleAlert("Sample Taken Date is missing or invalid. Make sure it is in the correct format. (e.g. 25/12/2021 18:45)")
                    } else {
                        var t = Object(s["a"])(Object(s["a"])({}, this.declaration), {}, {
                            data: Object(s["a"])({}, this.declaration.data)
                        });
                        t.data.date_of_birth = ve(t.data.date_of_birth);
                        var r = pe()(this.sampleTakenDate).format("YYYY-MM-DD HH:mm:ss");
                        this.checkDate(r);
                        var n = this.checkDate(r);
                        n && this.$store.dispatch("postDeclaration", {
                            payload: t,
                            sampleDate: n ? r : ""
                        }).then((function() {
                            e.handleAlert("Your declaration has been sent.", "success"),
                            setTimeout((function() {
                                return e.clearAll()
                            }
                            ), 5e3),
                            e.loading = !1
                        }
                        )).catch((function(a) {
                            e.loading = !1,
                            e.handleAlert(a)
                        }
                        ))
                    }
                },
                clearAll: function() {
                    this.$v.$reset(),
                    this.declaration.data = {
                        consent_to_test: !1,
                        first_name: "",
                        surname: "",
                        sex: "",
                        vaccination_status: "",
                        phone: "",
                        email: "",
                        ethnicity: "",
                        document_id_number: "",
                        date_of_birth: "",
                        uk_arrival_date: "",
                        travelled_from_country: "",
                        travelled_from_city: "",
                        type_of_transport: "",
                        flight_number: "",
                        travelled_through_countries: "",
                        home_country: "",
                        home_city: "",
                        home_post_code: "",
                        home_address_1: "",
                        isolation_country: "",
                        isolation_city: "",
                        isolation_postcode: "",
                        isolation_address_1: ""
                    },
                    this.sampleTakenDate = "",
                    sessionStorage.clear(),
                    this.$router.push({
                        name: "Home"
                    })
                },
                sendOnlyDate: function() {
                    var e = this
                      , a = pe()(this.sampleTakenDate).format("YYYY-MM-DD HH:mm:ss");
                    this.$v.$touch(),
                    this.$v.sampleTakenDate.$invalid ? this.handleAlert("Please check the sample taken date entered and make sure it is in the correct format. (e.g. 25/12/2021 18:45)") : this.$store.dispatch("postDate", a).then((function() {
                        e.handleAlert("Your sample date has been updated", "success"),
                        setTimeout((function() {
                            return e.clearAll()
                        }
                        ), 300)
                    }
                    )).catch((function(a) {
                        e.handleAlert(a)
                    }
                    ))
                },
                checkDate: function(e) {
                    if (!e)
                        return !0;
                    var a = JSON.parse(sessionStorage.getItem("kit"));
                    if (a.sampleDate == e)
                        return !0;
                    var t = pe()(e, "YYYY-MM-DD HH:mm:ss")
                      , r = pe()()
                      , n = a.result_at_local ? pe()(a.result_at_local, "YYYY-MM-DD HH:mm:ss") : null
                      , o = a.booked_in_at_local ? pe()(a.booked_in_at_local, "YYYY-MM-DD HH:mm:ss") : null
                      , s = o || n || r;
                    return t > s ? (this.handleAlert("Sample Taken Date is greater than : " + s.format("DD/MM/YYYY HH:mm:ss")),
                    !1) : !(t < s.subtract(20, "days")) || (this.handleAlert("Sample Taken Date too old"),
                    !1)
                },
                addSampleDate: function() {
                    if (this.sampleTakenDate) {
                        this.checkDate(this.sampleTakenDate);
                        var e = !!this.checkDate(this.sampleTakenDate);
                        e && this.sendOnlyDate()
                    } else
                        this.handleAlert("Please check the sample taken date entered and make sure it is in the correct format. (e.g. 25/12/2021 18:45)")
                }
            }
        }
          , Na = Ra
          , Va = (t("337e"),
        Object(u["a"])(Na, de, le, !1, null, "4c73249c", null))
          , Fa = Va.exports;
        p()(Va, {
            VCol: A["a"],
            VRow: C["a"]
        });
        var Ha = function() {
            var e = this
              , a = e.$createElement
              , t = e._self._c || a;
            return t("v-row", [t("Header"), t("v-row", {
                staticClass: "pa-5"
            }, [t("v-col", {
                attrs: {
                    cols: "12",
                    sm: "12"
                }
            }, [t("h3", {
                staticStyle: {
                    color: "#2cbfce"
                }
            }, [e._v(" Certificate validity check")]), t("v-divider"), t("v-row", {
                staticClass: "pt-2"
            }, [t("v-col", [t("v-text-field", {
                class: {
                    good: e.result,
                    bad: e.notFound
                },
                attrs: {
                    "hide-details": "",
                    clearable: "",
                    filled: "",
                    label: "Cerificate Barcode"
                },
                on: {
                    "keydown:enter": e.checkTest
                },
                model: {
                    value: e.barcode,
                    callback: function(a) {
                        e.barcode = a
                    },
                    expression: "barcode"
                }
            })], 1)], 1), t("v-divider"), e.load ? t("v-row", [e.barcodeFound ? e._e() : t("v-col", [t("h3", {
                staticStyle: {
                    color: "red"
                }
            }, [e._v(" THIS BARCODE DOESN'T EXIST")])]), e.barcodeFound ? t("v-col", [t("v-row", {
                staticClass: "pt-5"
            }, [t("v-col", {
                attrs: {
                    cols: "3"
                }
            }, [t("v-text-field", {
                attrs: {
                    readonly: "",
                    outlined: "",
                    label: "Name"
                },
                model: {
                    value: e.result.name,
                    callback: function(a) {
                        e.$set(e.result, "name", a)
                    },
                    expression: "result.name"
                }
            })], 1), t("v-col", {
                attrs: {
                    cols: "3"
                }
            }, [t("v-text-field", {
                attrs: {
                    readonly: "",
                    outlined: "",
                    label: "Sex"
                },
                model: {
                    value: e.result.sex,
                    callback: function(a) {
                        e.$set(e.result, "sex", a)
                    },
                    expression: "result.sex"
                }
            })], 1), t("v-col", {
                attrs: {
                    cols: "6"
                }
            }, [t("v-text-field", {
                attrs: {
                    readonly: "",
                    outlined: "",
                    label: "Date of Birth"
                },
                model: {
                    value: e.result.birthday,
                    callback: function(a) {
                        e.$set(e.result, "birthday", a)
                    },
                    expression: "result.birthday"
                }
            })], 1)], 1), t("v-divider"), t("v-row", {
                staticClass: "pt-5"
            }, [t("v-col", [t("v-text-field", {
                attrs: {
                    readonly: "",
                    outlined: "",
                    label: "Sample Date"
                },
                model: {
                    value: e.result.sampleDate,
                    callback: function(a) {
                        e.$set(e.result, "sampleDate", a)
                    },
                    expression: "result.sampleDate"
                }
            })], 1)], 1), t("v-row", [t("v-col", [t("v-text-field", {
                attrs: {
                    readonly: "",
                    outlined: "",
                    label: "Result Date"
                },
                model: {
                    value: e.result.result_at,
                    callback: function(a) {
                        e.$set(e.result, "result_at", a)
                    },
                    expression: "result.result_at"
                }
            })], 1)], 1), t("v-row", [t("v-col", [t("v-text-field", {
                class: {
                    green: "negative" === e.result.result,
                    bad: "positive" === e.result.result
                },
                attrs: {
                    "hide-details": "",
                    readonly: "",
                    outlined: "",
                    label: "Test result"
                },
                model: {
                    value: e.result.result,
                    callback: function(a) {
                        e.$set(e.result, "result", a)
                    },
                    expression: "result.result"
                }
            })], 1)], 1)], 1) : e._e()], 1) : e._e()], 1), e.load ? e._e() : t("v-row", {
                attrs: {
                    align: "center"
                }
            }, [t("v-col", {
                attrs: {
                    align: "center"
                }
            }, [t("v-btn", {
                attrs: {
                    loading: e.loading,
                    rounded: "",
                    "x-large": "",
                    dark: ""
                },
                on: {
                    click: function(a) {
                        return e.checkTest()
                    }
                }
            }, [e._v(" Insert barcode ")])], 1)], 1), e.load ? t("v-row", {
                attrs: {
                    align: "center"
                }
            }, [t("v-col", {
                attrs: {
                    align: "center"
                }
            }, [t("v-btn", {
                attrs: {
                    loading: e.loading,
                    rounded: "",
                    "x-large": "",
                    dark: ""
                },
                on: {
                    click: function(a) {
                        return e.checkTest()
                    }
                }
            }, [e._v(" Insert new barcode ")])], 1)], 1) : e._e()], 1), t("Footer")], 1)
        }
          , Ga = []
          , Ka = {
            components: {
                Footer: X,
                Header: _
            },
            data: function() {
                return {
                    barcodeFound: !1,
                    notFound: !1,
                    load: !1,
                    barcode: "",
                    result: {},
                    loading: !1
                }
            },
            created: function() {
                this.verifyBarcode()
            },
            methods: {
                verifyBarcode: function() {
                    var e = this;
                    this.loading = !0;
                    var a = this.$route.query.barcode ? this.$route.query.barcode : this.barcode;
                    a ? this.$store.dispatch("checkCertificate", a).then((function(a) {
                        e.result = a.data,
                        e.result.name = a.data.first_name_initial + "." + a.data.surname_initial,
                        e.barcode = a.data.barcode,
                        e.load = !0,
                        e.barcodeFound = !0,
                        e.loading = !1
                    }
                    )).catch((function() {
                        e.load = !0,
                        e.loading = !1,
                        e.notFound = !0
                    }
                    )) : (this.loading = !1,
                    this.load = !1,
                    this.barcodeFound = !1)
                },
                checkTest: function() {
                    var e = this.barcode;
                    this.$router.push({
                        path: "/verify",
                        query: {
                            barcode: e
                        }
                    })
                }
            }
        }
          , za = Ka
          , Ua = (t("2c2f"),
        t("ce7e"))
          , Ja = Object(u["a"])(za, Ha, Ga, !1, null, "21bd14b9", null)
          , La = Ja.exports;
        p()(Ja, {
            VBtn: T["a"],
            VCol: A["a"],
            VDivider: Ua["a"],
            VRow: C["a"],
            VTextField: Ne["a"]
        }),
        r["default"].use(q["a"]);
        var Za = [{
            path: "/",
            name: "Home",
            component: ce
        }, {
            path: "/forms",
            name: "Forms",
            component: Fa
        }, {
            path: "/verify",
            props: !0,
            name: "Verify",
            component: La
        }]
          , Wa = new q["a"]({
            mode: "history",
            routes: Za
        })
          , Xa = Wa
          , Qa = t("f309");
        r["default"].use(Qa["a"]);
        var et = new Qa["a"]({
            theme: {
                themes: {
                    light: {
                        primary: "#2CBFCE",
                        secondary: "#b0bec5",
                        anchor: "#8c9eff"
                    }
                }
            }
        })
          , at = et
          , tt = t("1dce")
          , rt = t.n(tt)
          , nt = t("859b")
          , ot = t.n(nt);
        t("c0da");
        r["default"].config.productionTip = !1,
        r["default"].use(rt.a),
        r["default"].use(ot.a),
        new r["default"]({
            router: Xa,
            store: re,
            vuetify: at,
            render: function(e) {
                return e(x)
            }
        }).$mount("#app")
    },
    "5c0b": function(e, a, t) {
        "use strict";
        t("9c0c")
    },
    "5e18": function(e, a, t) {},
    "6b05": function(e, a) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFIAAABSCAYAAADHLIObAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAZwSURBVHgB7ZzdThtHFMfPzC5t1CYSj8BlmhCJjzZSr2CL2tuYJ4h5AuAJgCcAngD8BJCrXjTRuleVWiiW+GgueYNSJZUI2DM9Z21Hrpn1znpnZ8bS/iTL4F3D+u89Z//nzMwCVFRUVFSkwcBTZn/5Y1mG4Ss8wGX6XQK0WLvduPjxuyZ4iFdC9sXjIOso3LRqHzzgawGsKe/v969+etkCT3AuJIkHYbiEB4LiyZk87+2JeoyiNlyL6kTIpz//NhM+evR6HPHS6Ivagdv999H312AZa0L2xYMk58llKBXWkkI0Ovzu2JaopQo5E59NPwZYByvipcFaQoh9we+aZYpqXEgS72sh6ozzV0XEo1DFsG8AiKYAeQMiwL/J6Co+A2PDmihqowxRjQhpSjzkRgjZ4FwcX0RqmzMb45VdBnU88iWfRB1bSJvipeGTqLmFfPH2pCaDYN2VeGkYFPUYRX1ztbJ4mOtdeXZ+9u60zjk7gPEwLl4afVEZA4wWtbHPAo91LY+YIeSAMbYM+biR+A0zaDc+Qti6Xlm4AQv0vih6wIv4pCYkr+UVFVPWEj4d6u6fS0hNSCysMjo7iXjRvBXx0jiPvj3GJ3oMivoaDGNKyEQ8hnblA/Bj1+Kl0RcVL5QbX4GocaCzlNXAAEaExNIsuormvWkgZNH7og/p8Sz+fY5DeAYF4WAA+YX8GyYUAVNGoseIkBWVkMaohDREJaQhKiENUQlpiDIqG+s8jc9m8IPswlAJiF3yN5cri3tggYkXktp5UyBjqej4MA6/giUmPrSfAGxJZdtMYpdpcRssMdFnJLX1cDhiY/h1FPa6A3ebYJGJFZLyYgCSzsYHCBCbtodkJza0Q5BHKSG981e3y2OViRRyNj7bwqe54dcppG3mxUEmTshkigvIbcWmmw58isARE5UjKS9i8/hAlRfxorPjYqpKH2tCJrMu2u0H4Zhnml6QYnVwXOjwMlqwYrzTsBbajwEOIAzi4Ucv32WC+63j2Vgffp3y4r8AVq2OCmtCtrsfVtGNlts0fDrqvRTSuJ/yjKO86MMYkTUh30fzNJdnR7WNQXAwh6Gf9l4qAdVb3ObFQaxetS+jxT0moTH8OuW9NgjlxIMX8dmu2i9C05XVUWHd/gSMbVBee7iF1Z6/O/1fuTeqBGzDpzXwCOtCtjCfSWivqrYxzrZoeJR+TkpA/F21n4sSMAsnhvwqetnCM011pZ0OIDyifOlbCZiFs8qG8iX05ucM0s2XycXFqxIwC6clYhsY5TmVdZlTvOa0BMzCqZBkidAJrurs67oEzMJ50yKZgifk/qh9uiWgnbGXcfGi+3OxskgWRzkJq9vtvt0Bz/GmjYb5kkL8Qb6kvOhzSPfxRkh1Cel3XhzEq8buUAnpVQmYhXcd8vMfFuoY0NHHbqhPDEYau/xW0oc2dlUte9XDIGEy/bk4Rs5IrJF3dRu0PkGdpbQ+Z17yLQ+R8gZY2tIcatD+WcOuzKrvF4jeXCEc+0lfdMWE+AdykOuMbHNO396obvTcFHwZ9zs4PkLH1m0Up4uYtOn4Xa4zNZeQZFHQ782r+4mfD2KGVgn4GOo07kPHJkcssesWAPm961iLOqnNdS/lXtbCHyzt9qYAdlqOx1RoBPMJAHbaHw6eDYJiND4A2xhnDKjQMuPZ+HQb/8RWxj+4vndYnVA+TJv2Nwj1R4vU84XXa1POYdiMzViRSgs6N/OuOC3KN29PamHAD+SINYgyWWDfXqVmMxSgsP2hA+gAoz7hqAOZplW1NvMmWZsg4Edy9ELOJuXDoiISRm/FoBPqSJMGrsoK9b61yV5PLvexBN0AQxi/p8Wz+LTOgT2Yzz30T0vJm5RmaMxHZqUZzIdXkdk0U8pdVnqTQOOslfwS86apyfJkbbKqlHGtjQ6l3a7GlkXqWZst1fj3IEWsjQ6lCdmnTIvUzYfyCNSDZZ8pam10KF1IQscisaRaEpvnmmPWutaGQWfNRjfJSj9SxyLRBUICP9KxSLSPrrWx1ZKzckYOUsQi9W4RdmTb2uhgXUjieXy6wbpialskl9ZGBydCEnksEuNcMux3ZuVDlyOOzoQkdC1SFmVbG81jcI9m3lRiw9ro4IWQRHIbLggOdO9rZtPa6OCNkISuwYaSGx/j4JWQfUaHun1ro4OXQhIKi+TM2ujgrZBEL9ST1Q6+hXJFRUVFhT7/AfADWZk3pXJDAAAAAElFTkSuQmCC"
    },
    "715c": function(e, a, t) {
        e.exports = t.p + "img/barcode.69435bd8.png"
    },
    7252: function(e) {
        e.exports = JSON.parse('[{"name":"Afghanistan","code":"AF"},{"name":"Åland Islands","code":"AX"},{"name":"Albania","code":"AL"},{"name":"Algeria","code":"DZ"},{"name":"American Samoa","code":"AS"},{"name":"Andorra","code":"AD"},{"name":"Angola","code":"AO"},{"name":"Anguilla","code":"AI"},{"name":"Antarctica","code":"AQ"},{"name":"Antigua and Barbuda","code":"AG"},{"name":"Argentina","code":"AR"},{"name":"Armenia","code":"AM"},{"name":"Aruba","code":"AW"},{"name":"Australia","code":"AU"},{"name":"Austria","code":"AT"},{"name":"Azerbaijan","code":"AZ"},{"name":"Bahamas","code":"BS"},{"name":"Bahrain","code":"BH"},{"name":"Bangladesh","code":"BD"},{"name":"Barbados","code":"BB"},{"name":"Belarus","code":"BY"},{"name":"Belgium","code":"BE"},{"name":"Belize","code":"BZ"},{"name":"Benin","code":"BJ"},{"name":"Bermuda","code":"BM"},{"name":"Bhutan","code":"BT"},{"name":"Bolivia (Plurinational State of)","code":"BO"},{"name":"Bonaire, Sint Eustatius and Saba","code":"BQ"},{"name":"Bosnia and Herzegovina","code":"BA"},{"name":"Botswana","code":"BW"},{"name":"Bouvet Island","code":"BV"},{"name":"Brazil","code":"BR"},{"name":"British Indian Ocean Territory","code":"IO"},{"name":"Brunei Darussalam","code":"BN"},{"name":"Bulgaria","code":"BG"},{"name":"Burkina Faso","code":"BF"},{"name":"Burundi","code":"BI"},{"name":"Cabo Verde","code":"CV"},{"name":"Cambodia","code":"KH"},{"name":"Cameroon","code":"CM"},{"name":"Canada","code":"CA"},{"name":"Cayman Islands","code":"KY"},{"name":"Central African Republic","code":"CF"},{"name":"Chad","code":"TD"},{"name":"Chile","code":"CL"},{"name":"China","code":"CN"},{"name":"Christmas Island","code":"CX"},{"name":"Cocos (Keeling) Islands","code":"CC"},{"name":"Colombia","code":"CO"},{"name":"Comoros","code":"KM"},{"name":"Congo","code":"CG"},{"name":"Congo, Democratic Republic of the","code":"CD"},{"name":"Cook Islands","code":"CK"},{"name":"Costa Rica","code":"CR"},{"name":"Côte d\'Ivoire","code":"CI"},{"name":"Croatia","code":"HR"},{"name":"Cuba","code":"CU"},{"name":"Curaçao","code":"CW"},{"name":"Cyprus","code":"CY"},{"name":"Czechia","code":"CZ"},{"name":"Denmark","code":"DK"},{"name":"Djibouti","code":"DJ"},{"name":"Dominica","code":"DM"},{"name":"Dominican Republic","code":"DO"},{"name":"Ecuador","code":"EC"},{"name":"Egypt","code":"EG"},{"name":"El Salvador","code":"SV"},{"name":"Equatorial Guinea","code":"GQ"},{"name":"Eritrea","code":"ER"},{"name":"Estonia","code":"EE"},{"name":"Eswatini","code":"SZ"},{"name":"Ethiopia","code":"ET"},{"name":"Falkland Islands (Malvinas)","code":"FK"},{"name":"Faroe Islands","code":"FO"},{"name":"Fiji","code":"FJ"},{"name":"Finland","code":"FI"},{"name":"France","code":"FR"},{"name":"French Guiana","code":"GF"},{"name":"French Polynesia","code":"PF"},{"name":"French Southern Territories","code":"TF"},{"name":"Gabon","code":"GA"},{"name":"Gambia","code":"GM"},{"name":"Georgia","code":"GE"},{"name":"Germany","code":"DE"},{"name":"Ghana","code":"GH"},{"name":"Gibraltar","code":"GI"},{"name":"Greece","code":"GR"},{"name":"Greenland","code":"GL"},{"name":"Grenada","code":"GD"},{"name":"Guadeloupe","code":"GP"},{"name":"Guam","code":"GU"},{"name":"Guatemala","code":"GT"},{"name":"Guernsey","code":"GG"},{"name":"Guinea","code":"GN"},{"name":"Guinea-Bissau","code":"GW"},{"name":"Guyana","code":"GY"},{"name":"Haiti","code":"HT"},{"name":"Heard Island and McDonald Islands","code":"HM"},{"name":"Holy See","code":"VA"},{"name":"Honduras","code":"HN"},{"name":"Hong Kong","code":"HK"},{"name":"Hungary","code":"HU"},{"name":"Iceland","code":"IS"},{"name":"India","code":"IN"},{"name":"Indonesia","code":"ID"},{"name":"Iran (Islamic Republic of)","code":"IR"},{"name":"Iraq","code":"IQ"},{"name":"Ireland","code":"IE"},{"name":"Isle of Man","code":"IM"},{"name":"Israel","code":"IL"},{"name":"Italy","code":"IT"},{"name":"Jamaica","code":"JM"},{"name":"Japan","code":"JP"},{"name":"Jersey","code":"JE"},{"name":"Jordan","code":"JO"},{"name":"Kazakhstan","code":"KZ"},{"name":"Kenya","code":"KE"},{"name":"Kiribati","code":"KI"},{"name":"Korea (Democratic People\'s Republic of)","code":"KP"},{"name":"Korea, Republic of","code":"KR"},{"name":"Kuwait","code":"KW"},{"name":"Kyrgyzstan","code":"KG"},{"name":"Lao People\'s Democratic Republic","code":"LA"},{"name":"Latvia","code":"LV"},{"name":"Lebanon","code":"LB"},{"name":"Lesotho","code":"LS"},{"name":"Liberia","code":"LR"},{"name":"Libya","code":"LY"},{"name":"Liechtenstein","code":"LI"},{"name":"Lithuania","code":"LT"},{"name":"Luxembourg","code":"LU"},{"name":"Macao","code":"MO"},{"name":"Madagascar","code":"MG"},{"name":"Malawi","code":"MW"},{"name":"Malaysia","code":"MY"},{"name":"Maldives","code":"MV"},{"name":"Mali","code":"ML"},{"name":"Malta","code":"MT"},{"name":"Marshall Islands","code":"MH"},{"name":"Martinique","code":"MQ"},{"name":"Mauritania","code":"MR"},{"name":"Mauritius","code":"MU"},{"name":"Mayotte","code":"YT"},{"name":"Mexico","code":"MX"},{"name":"Micronesia (Federated States of)","code":"FM"},{"name":"Moldova, Republic of","code":"MD"},{"name":"Monaco","code":"MC"},{"name":"Mongolia","code":"MN"},{"name":"Montenegro","code":"ME"},{"name":"Montserrat","code":"MS"},{"name":"Morocco","code":"MA"},{"name":"Mozambique","code":"MZ"},{"name":"Myanmar","code":"MM"},{"name":"Namibia","code":"NA"},{"name":"Nauru","code":"NR"},{"name":"Nepal","code":"NP"},{"name":"Netherlands","code":"NL"},{"name":"New Caledonia","code":"NC"},{"name":"New Zealand","code":"NZ"},{"name":"Nicaragua","code":"NI"},{"name":"Niger","code":"NE"},{"name":"Nigeria","code":"NG"},{"name":"Niue","code":"NU"},{"name":"Norfolk Island","code":"NF"},{"name":"North Macedonia","code":"MK"},{"name":"Northern Mariana Islands","code":"MP"},{"name":"Norway","code":"NO"},{"name":"Oman","code":"OM"},{"name":"Pakistan","code":"PK"},{"name":"Palau","code":"PW"},{"name":"Palestine, State of","code":"PS"},{"name":"Panama","code":"PA"},{"name":"Papua New Guinea","code":"PG"},{"name":"Paraguay","code":"PY"},{"name":"Peru","code":"PE"},{"name":"Philippines","code":"PH"},{"name":"Pitcairn","code":"PN"},{"name":"Poland","code":"PL"},{"name":"Portugal","code":"PT"},{"name":"Puerto Rico","code":"PR"},{"name":"Qatar","code":"QA"},{"name":"Réunion","code":"RE"},{"name":"Romania","code":"RO"},{"name":"Russian Federation","code":"RU"},{"name":"Rwanda","code":"RW"},{"name":"Saint Barthélemy","code":"BL"},{"name":"Saint Helena, Ascension and Tristan da Cunha","code":"SH"},{"name":"Saint Kitts and Nevis","code":"KN"},{"name":"Saint Lucia","code":"LC"},{"name":"Saint Martin (French part)","code":"MF"},{"name":"Saint Pierre and Miquelon","code":"PM"},{"name":"Saint Vincent and the Grenadines","code":"VC"},{"name":"Samoa","code":"WS"},{"name":"San Marino","code":"SM"},{"name":"Sao Tome and Principe","code":"ST"},{"name":"Saudi Arabia","code":"SA"},{"name":"Senegal","code":"SN"},{"name":"Serbia","code":"RS"},{"name":"Seychelles","code":"SC"},{"name":"Sierra Leone","code":"SL"},{"name":"Singapore","code":"SG"},{"name":"Sint Maarten (Dutch part)","code":"SX"},{"name":"Slovakia","code":"SK"},{"name":"Slovenia","code":"SI"},{"name":"Solomon Islands","code":"SB"},{"name":"Somalia","code":"SO"},{"name":"South Africa","code":"ZA"},{"name":"South Georgia and the South Sandwich Islands","code":"GS"},{"name":"South Sudan","code":"SS"},{"name":"Spain","code":"ES"},{"name":"Sri Lanka","code":"LK"},{"name":"Sudan","code":"SD"},{"name":"Suriname","code":"SR"},{"name":"Svalbard and Jan Mayen","code":"SJ"},{"name":"Sweden","code":"SE"},{"name":"Switzerland","code":"CH"},{"name":"Syrian Arab Republic","code":"SY"},{"name":"Taiwan, Province of China","code":"TW"},{"name":"Tajikistan","code":"TJ"},{"name":"Tanzania, United Republic of","code":"TZ"},{"name":"Thailand","code":"TH"},{"name":"Timor-Leste","code":"TL"},{"name":"Togo","code":"TG"},{"name":"Tokelau","code":"TK"},{"name":"Tonga","code":"TO"},{"name":"Trinidad and Tobago","code":"TT"},{"name":"Tunisia","code":"TN"},{"name":"Turkey","code":"TR"},{"name":"Turkmenistan","code":"TM"},{"name":"Turks and Caicos Islands","code":"TC"},{"name":"Tuvalu","code":"TV"},{"name":"Uganda","code":"UG"},{"name":"Ukraine","code":"UA"},{"name":"United Arab Emirates","code":"AE"},{"name":"United Kingdom of Great Britain and Northern Ireland","code":"GB"},{"name":"United States of America","code":"US"},{"name":"United States Minor Outlying Islands","code":"UM"},{"name":"Uruguay","code":"UY"},{"name":"Uzbekistan","code":"UZ"},{"name":"Vanuatu","code":"VU"},{"name":"Venezuela (Bolivarian Republic of)","code":"VE"},{"name":"Viet Nam","code":"VN"},{"name":"Virgin Islands (British)","code":"VG"},{"name":"Virgin Islands (U.S.)","code":"VI"},{"name":"Wallis and Futuna","code":"WF"},{"name":"Western Sahara","code":"EH"},{"name":"Yemen","code":"YE"},{"name":"Zambia","code":"ZM"},{"name":"Zimbabwe","code":"ZW"}]')
    },
    "9beb": function(e, a, t) {
        "use strict";
        t("5e18")
    },
    "9c0c": function(e, a, t) {},
    "9c0d": function(e, a, t) {},
    ac2b: function(e, a, t) {},
    b5de: function(e, a, t) {
        e.exports = t.p + "img/mainLogo.fc4c613f.png"
    },
    b7bc: function(e, a) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAH8SURBVHgB7ZpNTgIxFIBfcYhbjsCSKAtGExN3NJ6EG+gJHE7AEQzncFF2JhodFhPDkiOwNHGc2gcMMsNUmJ+EaXnfpu2jTPJlCn3pKwBBEARRX9j24EK89hrQHDGQPQnQAuNhkxC+BjN+O99E4k5H+O0mSN8O0QSLCEL+yW+mOGjEUQfgyUJZpNUAZxQPnL+47KcmTsBs+ll9Rzc74FccDKYrPmRWvAEnBgnbDgnbzskJOznna//u1TbGsubkjes45DmHQEvadkjYdkjYdkjYdkjYdnKnlsYQyWFW2Frh4O7ay4rTb9h2SNh2SNh2KPEwHayCYmEwXSaNseoNr0u+AguDTTgXHfHSTs+xRjiWVceZbRxji9I94SdKwEYLRyAH2KZlYyTI8ZS7i+2Y9mw473nvsdDJKt1hwHfzaaPfcF5ZxFjhIrJI7YS7z2/9fXOKyiK1Eu4K/xGcM7FsNZSRRWojvJKU3mokvSzpsrLIPxU8NoEKCbirvSSDe+U3SJ/tiDBPfW95VFOF7PKJcUcJqwwlcdWnUvZtcyh0poSypEOAcRWyyGZJRxA+qGYBR2LG3fkPMK6k5slPpLe+IdhOxXPLIhthvJoXAnPhiBfSdNK7NwSLySK1zKb0yxspLovUNn3Mli4ni9Q6X05Kl5c1ApS+FO/3QBAEcYr8Ao7/9iiV9iJmAAAAAElFTkSuQmCC"
    },
    ba99: function(e, a, t) {},
    d4f6: function(e, a, t) {
        "use strict";
        t("ac2b")
    },
    d967: function(e, a, t) {
        "use strict";
        t("35b5")
    },
    e268: function(e, a, t) {}
});
//# sourceMappingURL=app.3435aec4.js.map
