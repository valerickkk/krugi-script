(function (e) {
    function t(t) {
        for (var n, o, r = t[0], c = t[1], p = t[2], d = 0, g = []; d < r.length; d++)
            o = r[d],
                s[o] && g.push(s[o][0]),
                s[o] = 0;
        for (n in c)
            Object.prototype.hasOwnProperty.call(c, n) && (e[n] = c[n]);
        l && l(t);
        while (g.length)
            g.shift()();
        return a.push.apply(a, p || []),
            i()
    }
    function i() {
        for (var e, t = 0; t < a.length; t++) {
            for (var i = a[t], n = !0, r = 1; r < i.length; r++) {
                var c = i[r];
                0 !== s[c] && (n = !1)
            }
            n && (a.splice(t--, 1),
                e = o(o.s = i[0]))
        }
        return e
    }
    var n = {}
        , s = {
            app: 0
        }
        , a = [];
    function o(t) {
        if (n[t])
            return n[t].exports;
        var i = n[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(i.exports, i, i.exports, o),
            i.l = !0,
            i.exports
    }
    o.m = e,
        o.c = n,
        o.d = function (e, t, i) {
            o.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: i
            })
        }
        ,
        o.r = function (e) {
            "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }),
                Object.defineProperty(e, "__esModule", {
                    value: !0
                })
        }
        ,
        o.t = function (e, t) {
            if (1 & t && (e = o(e)),
                8 & t)
                return e;
            if (4 & t && "object" === typeof e && e && e.__esModule)
                return e;
            var i = Object.create(null);
            if (o.r(i),
                Object.defineProperty(i, "default", {
                    enumerable: !0,
                    value: e
                }),
                2 & t && "string" != typeof e)
                for (var n in e)
                    o.d(i, n, function (t) {
                        return e[t]
                    }
                        .bind(null, n));
            return i
        }
        ,
        o.n = function (e) {
            var t = e && e.__esModule ? function () {
                return e["default"]
            }
                : function () {
                    return e
                }
                ;
            return o.d(t, "a", t),
                t
        }
        ,
        o.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        ,
        o.p = "/circles/";
    var r = window["webpackJsonp"] = window["webpackJsonp"] || []
        , c = r.push.bind(r);
    r.push = t,
        r = r.slice();
    for (var p = 0; p < r.length; p++)
        t(r[p]);
    var l = c;
    a.push([0, "chunk-vendors"]),
        i()
}
)({
    0: function (e, t, i) {
        e.exports = i("cd49")
    },
    "0012": function (e, t, i) {
        e.exports = i.p + "img/water2.058f93fc.png"
    },
    "0026": function (e, t, i) {
        e.exports = i.p + "img/carpet.fcca1db2.png"
    },
    "002f": function (e, t, i) {
        e.exports = i.p + "img/shibainu.5334b177.png"
    },
    "00a4": function (e, t, i) {
        e.exports = i.p + "img/sausage.e2f5768f.png"
    },
    "01f5": function (e, t, i) {
        e.exports = i.p + "img/strawb.49219c71.png"
    },
    "02c1": function (e, t, i) {
        e.exports = i.p + "img/pepega.8f611c25.png"
    },
    "02e8": function (e, t, i) {
        e.exports = i.p + "img/ornam14.49a74fba.png"
    },
    "02f1": function (e, t, i) {
        e.exports = i.p + "img/bhutan.90fb71a2.png"
    },
    "047b": function (e, t, i) {
        e.exports = i.p + "img/gruzia.30d596bb.png"
    },
    "0568": function (e, t, i) {
        e.exports = i.p + "img/crystal2.1a0517e1.png"
    },
    "064e": function (e, t, i) { },
    "069b": function (e, t, i) {
        e.exports = i.p + "img/ball9.20825c0f.png"
    },
    "06c3": function (e, t, i) {
        "use strict";
        var n = i("8c3d")
            , s = i.n(n);
        s.a
    },
    "06d7": function (e, t, i) {
        "use strict";
        var n = i("9738")
            , s = i.n(n);
        s.a
    },
    "0706": function (e, t, i) {
        e.exports = i.p + "img/uprt_cat4.494738f0.png"
    },
    "0709": function (e, t, i) {
        e.exports = i.p + "img/mvp-fog.6a7a8456.png"
    },
    "077b": function (e, t, i) {
        e.exports = i.p + "img/glitter2.85ca59c7.png"
    },
    "07aa": function (e, t, i) {
        e.exports = i.p + "img/sonic.12c8ae37.png"
    },
    "07fc": function (e, t, i) {
        e.exports = i.p + "img/udmurt.01303db9.png"
    },
    "087c": function (e, t, i) {
        "use strict";
        var n = i("92f9")
            , s = i.n(n);
        s.a
    },
    "08d3": function (e, t, i) {
        e.exports = i.p + "img/goose.f4547cf2.png"
    },
    "08f7": function (e, t, i) {
        e.exports = i.p + "img/sm002.9e83a628.png"
    },
    "0ab1": function (e, t, i) {
        e.exports = i.p + "img/crystal4.7c8c32c0.png"
    },
    "0afa": function (e, t, i) {
        e.exports = i.p + "img/ore.f4547a44.png"
    },
    "0b20": function (e, t, i) {
        e.exports = i.p + "img/strawberry1.7c6c2412.png"
    },
    "0b3f": function (e, t, i) {
        e.exports = i.p + "img/anim2.058f5b61.png"
    },
    "0b61": function (e, t, i) { },
    "0bbd": function (e, t, i) {
        e.exports = i.p + "img/bokbok.b9e9f719.png"
    },
    "0c64": function (e, t, i) {
        e.exports = i.p + "img/natash.8c1486d5.png"
    },
    "0c99": function (e, t, i) {
        e.exports = i.p + "img/snapperz2.4b60bc38.png"
    },
    "0d1c": function (e, t, i) {
        e.exports = i.p + "img/orange.ffaecd22.png"
    },
    "0d3c": function (e, t, i) {
        e.exports = i.p + "img/ornam13.8250f8ce.png"
    },
    "0dd1": function (e, t, i) {
        e.exports = i.p + "img/bear.6d690b27.png"
    },
    "0eaa": function (e, t, i) {
        e.exports = i.p + "img/squid.7c03509e.png"
    },
    "0f33": function (e, t, i) {
        e.exports = i.p + "img/india.566845b5.png"
    },
    "0f84": function (e, t, i) {
        e.exports = i.p + "img/ornam53.b5f547cb.png"
    },
    "0fb7": function (e, t, i) {
        e.exports = i.p + "img/mvp-spawn2.78256352.png"
    },
    "0fe6": function (e, t, i) {
        e.exports = i.p + "img/infected-mass.9d37af27.png"
    },
    "10c0": function (e, t, i) {
        e.exports = i.p + "img/ice.ebe5e52f.png"
    },
    "10e5": function (e, t, i) {
        e.exports = i.p + "img/pumpkin.3199255c.png"
    },
    1139: function (e, t, i) {
        e.exports = i.p + "img/txtson.dde99b01.png"
    },
    "115e": function (e, t, i) {
        e.exports = i.p + "img/leopard.0ff49c02.png"
    },
    "117e": function (e, t, i) {
        e.exports = i.p + "img/penny.30ba77e9.png"
    },
    "11f6": function (e, t, i) {
        e.exports = i.p + "img/eatall.50389334.png"
    },
    1219: function (e, t, i) {
        e.exports = i.p + "img/ball2.ee1191ca.png"
    },
    1259: function (e, t, i) {
        e.exports = i.p + "img/rabbit.2b37b36a.png"
    },
    "12c3": function (e, t, i) {
        e.exports = i.p + "img/questions.039f9fbe.png"
    },
    "12c6": function (e, t, i) {
        e.exports = i.p + "img/popit1.d80bfd55.png"
    },
    "131f": function (e, t, i) {
        e.exports = i.p + "img/transparent.01b662b1.png"
    },
    1428: function (e, t, i) { },
    "161e": function (e, t, i) {
        e.exports = i.p + "img/nick_young.420f4ab9.png"
    },
    "162b": function (e, t, i) {
        e.exports = i.p + "img/deer2.7d0725ec.png"
    },
    1655: function (e, t, i) {
        e.exports = i.p + "img/kir.edf38f43.png"
    },
    "16bb": function (e, t, i) {
        e.exports = i.p + "img/onepunch.f8f78e60.png"
    },
    "16e4": function (e, t, i) {
        "use strict";
        var n = i("c670")
            , s = i.n(n);
        s.a
    },
    1792: function (e, t, i) {
        e.exports = i.p + "img/nge.edd8593e.png"
    },
    1834: function (e, t, i) {
        e.exports = i.p + "img/laos.770e495b.png"
    },
    "19b5": function (e, t, i) {
        e.exports = i.p + "img/splash2.d0adcd79.png"
    },
    "1a0a": function (e, t, i) {
        e.exports = i.p + "img/ege.34b4bfd1.png"
    },
    "1a11": function (e, t, i) {
        e.exports = i.p + "img/gel2.2c46b1b1.png"
    },
    "1a7a": function (e, t, i) {
        e.exports = i.p + "img/ornam.87b7d8bc.png"
    },
    "1a89": function (e, t, i) {
        e.exports = i.p + "img/chicks.d5fe125a.png"
    },
    "1b6f": function (e, t, i) {
        e.exports = i.p + "img/incognito.f476cd76.png"
    },
    "1bcc": function (e, t, i) {
        e.exports = i.p + "img/02.75105c9c.png"
    },
    "1c14": function (e, t, i) {
        "use strict";
        var n = i("c135")
            , s = i.n(n);
        s.a
    },
    "1cfd": function (e, t, i) {
        e.exports = i.p + "img/alpaca.16b42af7.png"
    },
    "1d5d": function (e, t, i) {
        e.exports = i.p + "img/cobra.149d0a48.png"
    },
    "1d9d": function (e, t, i) {
        e.exports = i.p + "img/bg-pattern-3.f2c540fb.png"
    },
    "1de4": function (e, t, i) {
        e.exports = i.p + "img/virus.87c5a633.png"
    },
    "1e69": function (e, t, i) {
        e.exports = i.p + "img/luffy.328ad619.png"
    },
    2050: function (e, t, i) {
        e.exports = i.p + "img/tiger.601ee875.png"
    },
    "20ac": function (e, t, i) {
        e.exports = i.p + "img/knukles.49e5195f.png"
    },
    "20c2": function (e, t, i) {
        e.exports = i.p + "img/creeper.e831f6de.png"
    },
    "20e8": function (e, t, i) {
        e.exports = i.p + "img/abstract6.83550bee.png"
    },
    "20f9": function (e, t, i) { },
    "210e": function (e, t, i) {
        e.exports = i.p + "img/hulk.7375025a.png"
    },
    2128: function (e, t, i) {
        e.exports = i.p + "img/pill.ce178727.png"
    },
    "21f8": function (e, t, i) {
        e.exports = i.p + "img/dart.7237969d.png"
    },
    2208: function (e, t, i) {
        e.exports = i.p + "img/abstract.a9244b73.png"
    },
    2244: function (e, t, i) {
        e.exports = i.p + "img/proj-mvp-laser.19117f3d.png"
    },
    "22dc": function (e, t, i) {
        e.exports = i.p + "img/china.d5f6dfc3.png"
    },
    "22f8": function (e, t, i) {
        e.exports = i.p + "img/icon-alt-lock.237b79b2.png"
    },
    2328: function (e, t, i) {
        e.exports = i.p + "img/moon.c468695e.png"
    },
    2342: function (e, t, i) {
        e.exports = i.p + "img/pola.11845f5b.png"
    },
    "23cd": function (e, t, i) {
        e.exports = i.p + "img/hong.1595dc55.png"
    },
    2422: function (e, t, i) {
        e.exports = i.p + "img/seadog.29d9ec92.png"
    },
    2494: function (e, t, i) {
        e.exports = i.p + "img/canad.f16ca46a.png"
    },
    2578: function (e, t, i) {
        e.exports = i.p + "img/nyan.e9512086.png"
    },
    "276f": function (e, t, i) {
        e.exports = i.p + "img/uprt_dog3.db338699.png"
    },
    "277e": function (e, t, i) {
        e.exports = i.p + "img/sunflower.ade8c831.png"
    },
    "27a8": function (e, t, i) {
        e.exports = i.p + "img/raspjam.11053e52.png"
    },
    "27fb": function (e, t, i) {
        e.exports = i.p + "img/tatarstan.4ea06bbd.png"
    },
    "284b": function (e, t, i) {
        e.exports = i.p + "img/ufo.79a19955.png"
    },
    2932: function (e, t, i) {
        e.exports = i.p + "img/coffee.6e885f44.png"
    },
    "296a": function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAPsSURBVHjarJdNaFxVFMd/782bzEySdmKTSTutilq1LqoLu9C2uvATEdyoXagLQRTErUvBhd11JYggLgq68wNEQcWW6sogtOI34ifSNrGticnkO/P13PweXFIzZsy7cJmZN/fd//+c8z/nnhulaUqfYxC4B3gK2A+kwPfAceAUsNLPZgn9j9uA5wTvApHPEmAW+DxPAgeAO4ErgYvAInA3cDMwJ2AMXAHcCjzt7zZwk2u+BM5uBBBtEIIq8JjzegHmgGWg6Pcp4G89MArsASo+B9gNLAHngPeAt4H5zXigBDwIvADsANaAhWD9jCAX9Ejkmq4k9rpHBIwBN+ixNvCOpHoSuBp4VKvmgGlfagNNoCGJhr8BOhLouLZkKErAiESeAX4GJv6LwDW6fUWgc8a6KcCaoWj5O3Jt6rM5wxQDw3qlCNzi3JBADAwAVwHbtPAv56ybp4G1Xd/Lnq26Zsm9Cu4zIJGa2kr05mUE9pte92rVlMpvaGEnAPy3kRHLNi+4dhoYkshDwB+KshlmwQHgReB2LZnU9ZcUWrsH8IYZpuu3A7v07Lgk3weOAjOJlj8bgE/lAJ55qu0eFwNSdeBhw/p6AtwneMt4/6n4lrYAno2url5QF4mhqRuOs4mKH9D6RYFXcwAPSbTce1ZhbrO4HYyB8wImEklkG5PfSIMZZlA3Bk4C3wlYVTRlXRXlRCBL8SH3rxjq0zHwDfCuoht0DgieB4FIYypWxRF18RnwYSzgtcalE+QzOWkg80DR0lz2HPkEuBAD9wMPSKThibUqkbwIZEJc0/o9ZsHuGLgDuE7QedXaDLzAFkMRlupFMUrAQeBwHNTn9QolRx2kQU1omuJVYG8MfGWhGPJh1TglAXi6BSJZASoZ5nJQdyZj4CPgUxfutErVPMGK60j8nwxI3GvUs2DU/84AEwnwC/CqlekuD45wLARVMfNEuknwotk1bl9Z1xNngDeA38OecAx4EnjC7+dtJi9ZntfrI+0BTGD5uF3WLuvBBPBK1j2H/cCMfywBL/nCqjM72brBZ2edN+KgekbGekSr66b4y8BbpuNlDUka9HyZSmsuLgc94bINSpaqGXBRkRWDfrCmB6qK/bTv9+wJfwJ+AA4rmIIvtYM+cUZttAJrq64fDghtV1sV4NegZe9J4EfgTWCfWhgUvCOB4cDKZcGqhqwuaBIcQBXgNw+9xmYIrAAfaNURq2TZs7ygSwvOefeoeREZCsKXXWC+AF5TdJ3N3oyycSNwyA0ndecjttfTAYExP08A39raj3oP+Bj4ut+rWa9xBHjevO7o6pYF7Vive2Bet+OT6uJxSTTN7eP9ggP8MwDaAEFNLvBXDQAAAABJRU5ErkJggg=="
    },
    "29cd": function (e, t, i) {
        e.exports = i.p + "img/lght.065d713c.png"
    },
    "2a68": function (e, t, i) {
        e.exports = i.p + "img/drstone.605607b8.png"
    },
    "2a8b": function (e, t, i) {
        e.exports = i.p + "img/grass.2e3bbb8b.png"
    },
    "2b34": function (e, t, i) { },
    "2b4f": function (e, t, i) {
        "use strict";
        var n = i("064e")
            , s = i.n(n);
        s.a
    },
    "2b73": function (e, t, i) {
        e.exports = i.p + "img/txtmaster.9a6d216b.png"
    },
    "2cae": function (e, t, i) {
        e.exports = i.p + "img/ornam16.f80175c7.png"
    },
    "2ce4": function (e, t, i) {
        e.exports = i.p + "img/buryatiya.29a14de4.png"
    },
    "2db9": function (e, t, i) {
        e.exports = i.p + "img/root.c2531719.png"
    },
    "2df5": function (e, t, i) {
        var n = {
            "./DroidSans.fnt": "a01a",
            "./DroidSans_0.png": "6f84"
        };
        function s(e) {
            var t = a(e);
            return i(t)
        }
        function a(e) {
            var t = n[e];
            if (!(t + 1)) {
                var i = new Error("Cannot find module '" + e + "'");
                throw i.code = "MODULE_NOT_FOUND",
                i
            }
            return t
        }
        s.keys = function () {
            return Object.keys(n)
        }
            ,
            s.resolve = a,
            e.exports = s,
            s.id = "2df5"
    },
    "2e1a": function (e, t, i) {
        e.exports = i.p + "img/mikuhatsune.969caec2.png"
    },
    "2ee2": function (e, t, i) {
        e.exports = i.p + "img/ball.33cd8c53.png"
    },
    "2f25": function (e, t, i) {
        e.exports = i.p + "img/ornam19.6b8e31b2.png"
    },
    "2fa4": function (e, t, i) {
        e.exports = i.p + "img/totoro.5847b9c9.png"
    },
    "2fbf": function (e, t, i) {
        e.exports = i.p + "img/bg-pattern-4.fa1b4e9e.png"
    },
    "2ff3": function (e, t, i) {
        e.exports = i.p + "img/doge.6d683d11.png"
    },
    "307d": function (e, t, i) {
        e.exports = i.p + "img/abstract1.4c676974.png"
    },
    3186: function (e, t, i) {
        e.exports = i.p + "img/slow.c155b449.png"
    },
    "319e": function (e, t, i) {
        e.exports = i.p + "img/splash1.45448016.png"
    },
    3352: function (e, t, i) { },
    "33ce": function (e, t, i) {
        e.exports = i.p + "img/gumball.8cd9245b.png"
    },
    "342e": function (e, t, i) {
        e.exports = i.p + "img/hp.6994b16a.png"
    },
    3460: function (e, t, i) { },
    3473: function (e, t, i) {
        e.exports = i.p + "img/yy.cd2506a9.png"
    },
    "348d": function (e, t, i) {
        e.exports = i.p + "img/mordovia.60d501cb.png"
    },
    "35f4": function (e, t, i) {
        e.exports = i.p + "img/gangdam.c86af8ea.png"
    },
    3643: function (e, t, i) {
        e.exports = i.p + "img/snowman.178a33e4.png"
    },
    3691: function (e, t, i) {
        e.exports = i.p + "img/ornam20.c5616431.png"
    },
    37456: function (e, t, i) {
        e.exports = i.p + "img/spongebob.d666da7f.png"
    },
    "37b0": function (e, t, i) {
        e.exports = i.p + "img/fin.2f1b4587.png"
    },
    "37f7": function (e, t, i) {
        e.exports = i.p + "img/ape.ea24bbc8.png"
    },
    3895: function (e, t, i) {
        e.exports = i.p + "img/givemass.47391f35.png"
    },
    "38ff": function (e, t, i) {
        e.exports = i.p + "img/anim3.bcc46409.png"
    },
    3903: function (e, t, i) {
        e.exports = i.p + "img/riddler.3b4338b5.png"
    },
    3917: function (e, t, i) {
        e.exports = i.p + "img/pebble.0fe1dcb2.png"
    },
    3922: function (e, t, i) {
        e.exports = i.p + "img/ornam27.67edf583.png"
    },
    "393c": function (e, t, i) {
        e.exports = i.p + "img/sweden.e0c782ca.png"
    },
    3975: function (e, t, i) {
        e.exports = i.p + "img/abstract11.7f5bd62f.png"
    },
    "39ff": function (e, t, i) {
        e.exports = i.p + "img/lfally.1698adb7.png"
    },
    "3aa0": function (e, t, i) {
        e.exports = i.p + "img/4e4nya.ce31870a.png"
    },
    "3aa4": function (e, t, i) {
        e.exports = i.p + "img/ball6.e5ef8420.png"
    },
    "3ab0": function (e, t, i) {
        e.exports = i.p + "img/fur3.d6bb7b6f.png"
    },
    "3aca": function (e, t, i) {
        e.exports = i.p + "img/ball10.92e7b564.png"
    },
    "3b6d": function (e, t, i) {
        e.exports = i.p + "img/icon-infect.9fb626d3.png"
    },
    "3b8a": function (e, t, i) {
        e.exports = i.p + "img/ornam11.b9a4a9e2.png"
    },
    "3c8a": function (e, t, i) {
        e.exports = i.p + "img/ornam12.8bc14d42.png"
    },
    "3ca5": function (e, t, i) {
        e.exports = i.p + "img/bts.bdbecc58.png"
    },
    "3d5b": function (e, t, i) {
        e.exports = i.p + "img/icon-crown.01bf317d.png"
    },
    "3dc1": function (e, t, i) {
        e.exports = i.p + "img/sequin.a1d25fe3.png"
    },
    "3dfb": function (e, t, i) {
        e.exports = i.p + "img/before.e879bd25.png"
    },
    "3e80": function (e, t, i) {
        e.exports = i.p + "img/bender.8251d8cd.png"
    },
    "3e80f": function (e, t, i) {
        e.exports = i.p + "img/discord.a7949f1c.png"
    },
    "3e9c": function (e, t, i) {
        e.exports = i.p + "img/bokbok2.f40c1cf7.png"
    },
    "3e9f": function (e, t, i) {
        e.exports = i.p + "img/after.40f91591.png"
    },
    "3f83": function (e, t, i) {
        e.exports = i.p + "img/deku.6d638441.png"
    },
    "40d5a": function (e, t, i) {
        e.exports = i.p + "img/wkyra.760931c5.png"
    },
    4104: function (e, t, i) {
        e.exports = i.p + "img/ty.043c1d3a.png"
    },
    "415e": function (e, t, i) {
        e.exports = i.p + "img/kareliya.77cf4826.png"
    },
    "417e": function (e, t, i) {
        e.exports = i.p + "img/kalmikiya.52dea8e2.png"
    },
    "418c": function (e, t, i) {
        e.exports = i.p + "img/heart4.a3dab59c.png"
    },
    "41ca": function (e, t, i) {
        e.exports = i.p + "img/shells.6279c878.png"
    },
    "41d3": function (e, t, i) {
        e.exports = i.p + "img/smile3.fa138c00.png"
    },
    "41fe": function (e, t, i) {
        e.exports = i.p + "img/uzbek.e448c24a.png"
    },
    "425d": function (e, t, i) {
        e.exports = i.p + "img/rat.6ff92326.png"
    },
    "432b": function (e, t, i) {
        e.exports = i.p + "img/txtbday.5304fd71.png"
    },
    4409: function (e, t, i) {
        e.exports = i.p + "img/ornam33.2ebcc1a6.png"
    },
    4439: function (e, t, i) {
        e.exports = i.p + "img/anim1.ce127a43.png"
    },
    "44ed": function (e, t, i) {
        e.exports = i.p + "img/ornam48.f887e444.png"
    },
    "455f": function (e, t, i) {
        e.exports = i.p + "img/rub.923441a9.png"
    },
    "467a": function (e, t, i) {
        e.exports = i.p + "img/ornam42.d23e1418.png"
    },
    "46df": function (e, t, i) {
        e.exports = i.p + "img/lffriend.53b19da2.png"
    },
    "47b7": function (e, t, i) {
        e.exports = i.p + "img/firework3.db168213.png"
    },
    "480c": function (e, t, i) {
        e.exports = i.p + "img/abstract10.6defd0c6.png"
    },
    "48eb": function (e, t, i) {
        e.exports = i.p + "img/seal.9fc2e49b.png"
    },
    "4a29": function (e, t, i) {
        e.exports = i.p + "img/pineapple.a9be399d.png"
    },
    "4a56": function (e, t, i) {
        e.exports = i.p + "img/est.1947aa76.png"
    },
    "4aa0": function (e, t, i) {
        e.exports = i.p + "img/ball4.821f9fa1.png"
    },
    "4aa06": function (e, t, i) {
        e.exports = i.p + "img/heart2.d4a2640c.png"
    },
    "4ab3": function (e, t, i) {
        e.exports = i.p + "img/by.d38f638d.png"
    },
    "4b04": function (e, t, i) {
        e.exports = i.p + "img/alien.adc0b7d9.png"
    },
    "4ba2": function (e, t, i) {
        e.exports = i.p + "img/fractal2.9547ec0a.png"
    },
    "4bd1": function (e, t, i) {
        e.exports = i.p + "img/pumpkin4.6ad60669.png"
    },
    "4c2e": function (e, t, i) {
        e.exports = i.p + "img/wry.dcd4f8d6.png"
    },
    "4ccc": function (e, t, i) {
        e.exports = i.p + "img/dania.26bd8e83.png"
    },
    "4cfd": function (e, t, i) {
        e.exports = i.p + "img/smile2.7d4f0e2c.png"
    },
    "4d49": function (e, t, i) {
        e.exports = i.p + "img/pellet.96100f5c.png"
    },
    "4e17": function (e, t, i) {
        e.exports = i.p + "img/foil.500728c0.png"
    },
    "4e4c": function (e, t, i) {
        e.exports = i.p + "img/ornam21.c22f34f9.png"
    },
    "4e76": function (e, t, i) {
        e.exports = i.p + "img/ornam51.18de77a1.png"
    },
    "4f2b": function (e, t, i) {
        e.exports = i.p + "img/daddy2.8fc690f2.png"
    },
    "4fd2": function (e, t, i) {
        e.exports = i.p + "img/ripple.046ddb62.png"
    },
    5057: function (e, t, i) {
        e.exports = i.p + "img/sponge.8700fffb.png"
    },
    "50c8": function (e, t, i) {
        e.exports = i.p + "img/jdm.92895b47.png"
    },
    5101: function (e, t, i) {
        e.exports = i.p + "img/ball3.3907eed3.png"
    },
    "51b5": function (e, t, i) {
        e.exports = i.p + "img/sea.b019a061.png"
    },
    "51c0": function (e, t, i) {
        e.exports = i.p + "img/lfwife.945ff781.png"
    },
    "527f": function (e, t, i) {
        e.exports = i.p + "img/batman.4226e522.png"
    },
    "52ec": function (e, t, i) {
        "use strict";
        var n = i("807e")
            , s = i.n(n);
        s.a
    },
    "530b": function (e, t, i) {
        e.exports = i.p + "img/sup_china.ff834152.png"
    },
    5314: function (e, t, i) {
        e.exports = i.p + "img/sup.a7afee5c.png"
    },
    "53eb": function (e, t, i) {
        e.exports = i.p + "img/stop.7b5fbfd7.png"
    },
    5428: function (e, t, i) {
        e.exports = i.p + "img/ornam15.df54c085.png"
    },
    5487: function (e, t, i) {
        e.exports = i.p + "img/txtdvoika.0e0d8771.png"
    },
    "556e": function (e, t, i) {
        e.exports = i.p + "img/doraemon.22eb4b6f.png"
    },
    "572d": function (e, t, i) {
        "use strict";
        var n = i("bdee")
            , s = i.n(n);
        s.a
    },
    5793: function (e, t, i) {
        e.exports = i.p + "img/fractal7.e2bde284.png"
    },
    "581a": function (e, t, i) {
        e.exports = i.p + "img/snowman2.cf4caab7.png"
    },
    5823: function (e, t, i) {
        e.exports = i.p + "img/infect.1e94a297.png"
    },
    5976: function (e, t, i) {
        e.exports = i.p + "img/fara.c2e6c327.png"
    },
    5978: function (e, t, i) {
        e.exports = i.p + "img/wolfy.58a58945.png"
    },
    "59a0": function (e, t, i) {
        e.exports = i.p + "img/icon-anti-eject.4158d143.png"
    },
    "59b4": function (e, t, i) {
        e.exports = i.p + "img/popit2.0ced2eaf.png"
    },
    "59d6": function (e, t, i) {
        e.exports = i.p + "img/ikuya.fb8c372c.png"
    },
    "5a48": function (e, t, i) {
        e.exports = i.p + "img/chuvashiya.7358d969.png"
    },
    "5aea": function (e, t, i) { },
    "5b6e": function (e, t, i) {
        e.exports = i.p + "img/vwkoly.19115deb.png"
    },
    "5b74": function (e, t, i) {
        e.exports = i.p + "img/heart1.3b0ffdba.png"
    },
    "5c07": function (e, t, i) {
        e.exports = i.p + "img/pivko.dc28e073.png"
    },
    "5c17": function (e, t, i) {
        e.exports = i.p + "img/fur2.5ba87d42.png"
    },
    "5c59": function (e, t, i) {
        e.exports = i.p + "img/abstract2.380ca21d.png"
    },
    "5c6b": function (e, t, i) {
        e.exports = i.p + "img/ornam22.bb43d1a9.png"
    },
    "5c7a": function (e, t, i) {
        e.exports = i.p + "img/usa.478aab19.png"
    },
    "5c8f": function (e, t, i) {
        e.exports = i.p + "img/raspberry1.501fcc53.png"
    },
    "5ce9": function (e, t, i) {
        e.exports = i.p + "img/whirpool2.9bf5e9c2.png"
    },
    "5d67": function (e, t, i) {
        e.exports = i.p + "img/ornam50.a97d00aa.png"
    },
    "5d71": function (e, t, i) {
        e.exports = i.p + "img/armenia.bd8c1976.png"
    },
    "5d90": function (e, t, i) {
        e.exports = i.p + "img/latvia.8d5b6e93.png"
    },
    "5ece": function (e, t, i) {
        e.exports = i.p + "img/dota.207098d6.png"
    },
    "5f74": function (e, t, i) {
        e.exports = i.p + "img/heart3.c6e674fa.png"
    },
    "5f7e": function (e, t, i) {
        e.exports = i.p + "img/ornam38.6d453aa9.png"
    },
    "5fc0": function (e, t, i) {
        e.exports = i.p + "img/coin.54fd3376.png"
    },
    "5fc8": function (e, t, i) {
        e.exports = i.p + "img/ornam37.0e6e3a23.png"
    },
    "5ff9": function (e, t, i) {
        e.exports = i.p + "img/fry.68813f43.png"
    },
    6017: function (e, t, i) {
        e.exports = i.p + "img/uprt_cat.d4c638f0.png"
    },
    6158: function (e, t, i) {
        e.exports = i.p + "img/japan.fb9e099f.png"
    },
    6177: function (e, t, i) {
        e.exports = i.p + "img/muerte.a850f327.png"
    },
    "61d1": function (e, t, i) {
        e.exports = i.p + "img/guybutterfly.aca5441d.png"
    },
    "621e": function (e, t, i) {
        e.exports = i.p + "img/nasa.58b1c431.png"
    },
    "626b": function (e, t, i) {
        e.exports = i.p + "img/ornam2.20f8dd4b.png"
    },
    6284: function (e, t, i) {
        e.exports = i.p + "img/ornam28.33220774.png"
    },
    6369: function (e, t, i) {
        e.exports = i.p + "img/paper.ab787da8.png"
    },
    6415: function (e, t, i) {
        e.exports = i.p + "img/ornam18.cd214bc0.png"
    },
    "642e": function (e, t, i) {
        e.exports = i.p + "img/gubka.9707873c.png"
    },
    6484: function (e, t, i) {
        e.exports = i.p + "img/jake.25c44d13.png"
    },
    "64e2": function (e, t, i) {
        e.exports = i.p + "img/disco.fd13402e.png"
    },
    "65d7": function (e, t, i) {
        e.exports = i.p + "img/ornam24.39c7abc6.png"
    },
    6645: function (e, t, i) {
        e.exports = i.p + "img/sm005.3e38c744.png"
    },
    6646: function (e, t, i) {
        e.exports = i.p + "img/fawkes.a63e4476.png"
    },
    "667f": function (e, t, i) {
        e.exports = i.p + "img/tennis.64303407.png"
    },
    "672b": function (e, t, i) {
        e.exports = i.p + "img/mann.65b75ae4.png"
    },
    6751: function (e, t, i) { },
    6770: function (e, t, i) {
        e.exports = i.p + "img/clock2.e2be09eb.png"
    },
    6772: function (e, t, i) {
        e.exports = i.p + "img/coal.f483215f.png"
    },
    6840: function (e, t, i) {
        e.exports = i.p + "img/txti.f4a8f507.png"
    },
    "68b7": function (e, t, i) {
        e.exports = i.p + "img/khaki.a65c57b4.png"
    },
    "68c3": function (e, t, i) {
        e.exports = i.p + "img/ufo.aa6068fd.png"
    },
    "696c": function (e, t, i) {
        e.exports = i.p + "img/crab.0e8e2605.png"
    },
    "69f9": function (e, t, i) {
        e.exports = i.p + "img/kerope.02a67b95.png"
    },
    "6a0f": function (e, t, i) { },
    "6a25": function (e, t, i) {
        e.exports = i.p + "img/shield.f7aaebfd.png"
    },
    "6a256": function (e, t, i) {
        e.exports = i.p + "img/eu.ed498efe.png"
    },
    "6a82": function (e, t, i) {
        e.exports = i.p + "img/balls.3e4b9a19.png"
    },
    "6a84": function (e, t, i) {
        e.exports = i.p + "media/suck.a4bb0f96.mp3"
    },
    "6b98": function (e, t, i) {
        e.exports = i.p + "img/abstract5.4fd147bf.png"
    },
    "6bba": function (e, t, i) {
        e.exports = i.p + "img/eme.808763bf.png"
    },
    "6bbf": function (e, t, i) {
        e.exports = i.p + "img/jellyfish2.7d4afd9d.png"
    },
    "6bca": function (e, t, i) {
        e.exports = i.p + "img/gel.f401ae13.png"
    },
    "6c6c": function (e, t, i) {
        e.exports = i.p + "img/smug.c9bdbde7.png"
    },
    "6ca3": function (e, t, i) {
        e.exports = i.p + "img/cutflower.cab3bf09.png"
    },
    "6d9a": function (e, t, i) {
        e.exports = i.p + "img/dino.0fe0e7c8.png"
    },
    "6da1": function (e, t, i) {
        e.exports = i.p + "img/anim4.4c48321a.png"
    },
    "6e13": function (e, t, i) {
        e.exports = i.p + "img/somalia.7cc2e3c6.png"
    },
    "6e27": function (e, t, i) {
        e.exports = i.p + "img/peka.b373596f.png"
    },
    "6e6c": function (e, t, i) {
        e.exports = i.p + "img/bweed.41ecdc80.png"
    },
    "6e8e": function (e, t, i) {
        e.exports = i.p + "img/abstract7.563e6e94.png"
    },
    "6f84": function (e, t, i) {
        e.exports = i.p + "img/DroidSans_0.7874f681.png"
    },
    "6f8d": function (e, t, i) {
        e.exports = i.p + "img/altay.5d3f0a82.png"
    },
    "6fdd": function (e, t, i) {
        e.exports = i.p + "img/popit3.ff666294.png"
    },
    "701c": function (e, t, i) {
        e.exports = i.p + "img/cd.a5a7e3ba.png"
    },
    "70c8": function (e, t, i) {
        e.exports = i.p + "img/germ.7375454c.png"
    },
    "70d0": function (e, t, i) {
        e.exports = i.p + "img/foil2.dbde18b2.png"
    },
    "716f": function (e, t, i) { },
    "71d0": function (e, t, i) {
        e.exports = i.p + "img/txtrat.badec746.png"
    },
    7333: function (e, t, i) {
        e.exports = i.p + "img/ball7.388b2f96.png"
    },
    "73db": function (e, t, i) {
        e.exports = i.p + "img/awoo.cdbb95bd.png"
    },
    7500: function (e, t, i) {
        e.exports = i.p + "img/snapperz3.9f7e11bb.png"
    },
    7528: function (e, t, i) {
        e.exports = i.p + "img/ornam30.303be452.png"
    },
    "753d": function (e, t, i) {
        e.exports = i.p + "img/thomas.219d65fe.png"
    },
    7601: function (e, t, i) {
        e.exports = i.p + "img/ornam39.2d0fa8d1.png"
    },
    7689: function (e, t, i) { },
    7763: function (e, t, i) {
        e.exports = i.p + "img/gang.42543646.png"
    },
    7797: function (e, t, i) {
        "use strict";
        var n = i("7689")
            , s = i.n(n);
        s.a
    },
    "77fe": function (e, t, i) {
        e.exports = i.p + "img/outlet.a181d01a.png"
    },
    "781b": function (e, t, i) {
        e.exports = i.p + "img/bsod.bf76d4e2.png"
    },
    7835: function (e, t, i) {
        e.exports = i.p + "img/ornam32.0a991caa.png"
    },
    7968: function (e, t, i) {
        e.exports = i.p + "img/splash3.472ffa44.png"
    },
    "79af": function (e, t, i) {
        e.exports = i.p + "img/adigeya.9a03670d.png"
    },
    "7a48": function (e, t, i) {
        e.exports = i.p + "img/lfbf.e140e15e.png"
    },
    "7ab1": function (e, t, i) {
        e.exports = i.p + "img/portal.7ef796b6.png"
    },
    "7ae7": function (e, t, i) {
        e.exports = i.p + "img/msk.a4762a10.png"
    },
    "7b5d": function (e, t, i) {
        e.exports = i.p + "img/harold.ddb23ffa.png"
    },
    "7be7": function (e, t, i) {
        e.exports = i.p + "img/icon-blind.603faca7.png"
    },
    "7c2d": function (e, t, i) {
        e.exports = i.p + "img/fur.2e8e0c8a.png"
    },
    "7d8f": function (e, t, i) {
        e.exports = i.p + "img/scale.93a92cbe.png"
    },
    "7de2": function (e, t, i) {
        e.exports = i.p + "img/poo.d0860e87.png"
    },
    "7efb": function (e, t, i) {
        "use strict";
        var n = i("1428")
            , s = i.n(n);
        s.a
    },
    "7f39": function (e, t, i) {
        e.exports = i.p + "img/ornam10.66294ff2.png"
    },
    "7fd4": function (e, t, i) {
        e.exports = i.p + "img/abstract8.4ae9b481.png"
    },
    8001: function (e, t, i) {
        e.exports = i.p + "img/mud.540e1eec.png"
    },
    8022: function (e, t, i) {
        e.exports = i.p + "img/spider.73285859.png"
    },
    "807e": function (e, t, i) { },
    "80c3": function (e, t, i) {
        e.exports = i.p + "img/macau.917ef1a9.png"
    },
    "80d3": function (e, t, i) {
        e.exports = i.p + "img/fish.c89b8376.png"
    },
    "811f": function (e, t, i) {
        e.exports = i.p + "img/fractal5.70606ddd.png"
    },
    "812a": function (e, t, i) {
        e.exports = i.p + "img/fractal3.fa6a699c.png"
    },
    8178: function (e, t, i) {
        e.exports = i.p + "img/aura.a8cea63b.png"
    },
    "818a": function (e, t, i) {
        e.exports = i.p + "img/ornam9.499e88d7.png"
    },
    "81c9": function (e, t, i) {
        e.exports = i.p + "img/deer.b7871bdb.png"
    },
    "81cb": function (e, t, i) {
        e.exports = i.p + "img/mvp-arrow.67d1af32.png"
    },
    "824a": function (e, t, i) {
        e.exports = i.p + "img/veryrich2.f322c059.gif"
    },
    8306: function (e, t, i) {
        e.exports = i.p + "img/bangladesh.18c6aed1.png"
    },
    "830e": function (e, t, i) {
        e.exports = i.p + "img/snowflake.68d11b94.png"
    },
    8353: function (e, t, i) {
        e.exports = i.p + "img/earth.fc61fe77.png"
    },
    "836d": function (e, t, i) {
        e.exports = i.p + "img/1337hack.68a465de.png"
    },
    8407: function (e, t, i) {
        e.exports = i.p + "img/foxy.6ac11677.png"
    },
    "848b": function (e, t, i) {
        e.exports = i.p + "img/hamster.73fe649c.png"
    },
    "85e6": function (e, t, i) {
        e.exports = i.p + "img/kabardinbalkar.6b58790b.png"
    },
    "869c": function (e, t, i) {
        e.exports = i.p + "img/ornam4.90bee4ac.png"
    },
    "873f": function (e, t, i) {
        e.exports = i.p + "img/tom.5fa33fe0.png"
    },
    8805: function (e, t, i) {
        e.exports = i.p + "img/willywonka.319971ee.png"
    },
    8806: function (e, t, i) {
        e.exports = i.p + "img/sm004.a8c4f75c.png"
    },
    "88c8": function (e, t, i) {
        e.exports = i.p + "img/awesome.a808ef66.png"
    },
    8917: function (e, t, i) {
        e.exports = i.p + "img/ornam46.4ffdadae.png"
    },
    "893c": function (e, t, i) {
        e.exports = i.p + "img/wave.8a457e7a.png"
    },
    "89f3": function (e, t, i) {
        e.exports = i.p + "img/firework2.01bef797.png"
    },
    "8a5c": function (e, t, i) {
        e.exports = i.p + "img/pumpkin2.6ecbe948.png"
    },
    "8b85": function (e, t, i) {
        e.exports = i.p + "img/wolf.982f5897.png"
    },
    "8bcb": function (e, t, i) {
        e.exports = i.p + "img/animeface2.05af46c0.png"
    },
    "8bf3": function (e, t, i) {
        e.exports = i.p + "img/bashkorkostan.6fc330cb.png"
    },
    "8c3d": function (e, t, i) { },
    "8c77": function (e, t, i) {
        e.exports = i.p + "img/ornam52.a9f4a6af.png"
    },
    "8cd1": function (e, t, i) {
        e.exports = i.p + "img/britain.5417950a.png"
    },
    "8d4a": function (e, t, i) {
        e.exports = i.p + "img/uprt_cat2.23486b27.png"
    },
    "8fd2": function (e, t, i) {
        e.exports = i.p + "img/romania.b7b8279c.png"
    },
    "90e4": function (e, t, i) {
        e.exports = i.p + "img/ornam45.6abc5811.png"
    },
    9154: function (e, t, i) {
        e.exports = i.p + "img/nosignal2.a9293e57.png"
    },
    "91af": function (e, t, i) {
        e.exports = i.p + "img/ks.34916841.png"
    },
    "91b0": function (e, t, i) {
        e.exports = i.p + "img/matrix.fbd054a2.png"
    },
    "92c2": function (e, t, i) {
        e.exports = i.p + "img/covid.702a98b7.png"
    },
    "92da": function (e, t, i) {
        e.exports = i.p + "img/mariel.d771b6c2.png"
    },
    "92f9": function (e, t, i) { },
    "93d2": function (e, t, i) {
        e.exports = i.p + "img/ussr.2162828b.png"
    },
    9459: function (e, t, i) {
        e.exports = i.p + "img/cow.05929950.png"
    },
    "950b": function (e, t, i) {
        e.exports = i.p + "img/gun.d7f813c3.png"
    },
    "959e": function (e, t, i) {
        e.exports = i.p + "img/ball5.0bfad6d6.png"
    },
    "95a3": function (e, t, i) {
        e.exports = i.p + "img/sun2.ec09ee19.png"
    },
    "95ab": function (e, t, i) {
        e.exports = i.p + "img/ornam43.61b353c1.png"
    },
    9611: function (e, t, i) {
        e.exports = i.p + "img/sea2.e8f0cd26.png"
    },
    9627: function (e, t, i) {
        e.exports = i.p + "img/bg-pattern-1.5fadb20c.png"
    },
    9677: function (e, t, i) {
        e.exports = i.p + "img/biohazard.50b8a99f.png"
    },
    9738: function (e, t, i) { },
    "981a": function (e, t, i) {
        e.exports = i.p + "img/heart5.3904370c.png"
    },
    "985b": function (e, t, i) {
        e.exports = i.p + "img/ingushetiya.2e1caa89.png"
    },
    9884: function (e, t, i) {
        e.exports = i.p + "img/puffed.19505321.png"
    },
    9922: function (e, t, i) {
        e.exports = i.p + "img/litva.7f942a3e.png"
    },
    9981: function (e, t, i) {
        e.exports = i.p + "img/onepunch2.d7b3d880.png"
    },
    "99d7": function (e, t, i) {
        e.exports = i.p + "img/kyrgyz.52bb208c.png"
    },
    "9a63": function (e, t, i) {
        e.exports = i.p + "img/lion.9eb2a29b.png"
    },
    "9b69": function (e, t, i) {
        e.exports = i.p + "img/hearts2.e15ba5ba.png"
    },
    "9c27": function (e, t, i) {
        e.exports = i.p + "img/pepe.a58e1d64.png"
    },
    "9c65": function (e, t, i) {
        e.exports = i.p + "img/icon-lock.57f9f3df.png"
    },
    "9c7b": function (e, t, i) {
        e.exports = i.p + "img/squirtle.2b0e93f9.png"
    },
    "9cf3": function (e, t, i) {
        "use strict";
        var n = i("2b34")
            , s = i.n(n);
        s.a
    },
    "9d18": function (e, t, i) {
        e.exports = i.p + "img/darkmoon.40f8d419.png"
    },
    "9d31": function (e, t, i) {
        e.exports = i.p + "img/smile.f6fd137c.png"
    },
    "9dbf": function (e, t, i) {
        e.exports = i.p + "img/splash4.311b843e.png"
    },
    "9dd3": function (e, t, i) {
        "use strict";
        var n = i("fec2")
            , s = i.n(n);
        s.a
    },
    "9f12": function (e, t, i) { },
    "9f6d": function (e, t, i) {
        e.exports = i.p + "img/thinking.44058cb4.png"
    },
    "9fa3": function (e, t, i) {
        e.exports = i.p + "img/apricot.20249575.png"
    },
    "9fa3c": function (e, t, i) {
        e.exports = i.p + "img/txtyou.34b39944.png"
    },
    "9fc0": function (e, t, i) {
        e.exports = i.p + "img/ghost.77335950.png"
    },
    "9fd4": function (e, t, i) {
        e.exports = i.p + "img/tunnel4.3703cf99.png"
    },
    a01a: function (e, t, i) {
        e.exports = i.p + "fonts/DroidSans.e14e7101.fnt"
    },
    a058: function (e, t, i) {
        e.exports = i.p + "img/success_kid.4697b67e.png"
    },
    a082: function (e, t, i) {
        e.exports = i.p + "img/default.6ea07697.png"
    },
    a084: function (e, t, i) { },
    a099: function (e, t, i) {
        e.exports = i.p + "img/facepalm.fa86496e.png"
    },
    a10f: function (e, t, i) {
        e.exports = i.p + "img/galaxy.9deda1b7.png"
    },
    a136: function (e, t, i) {
        "use strict";
        var n = i("aa30")
            , s = i.n(n);
        s.a
    },
    a1e9: function (e, t, i) {
        e.exports = i.p + "img/happy.3e635a1d.png"
    },
    a2cc: function (e, t, i) {
        e.exports = i.p + "img/present.0109b06d.png"
    },
    a2cd: function (e, t, i) {
        e.exports = i.p + "img/norv.1708af2a.png"
    },
    a359: function (e, t, i) {
        e.exports = i.p + "img/ornam34.5b49d600.png"
    },
    a36c: function (e, t, i) {
        e.exports = i.p + "img/wwf.a0645515.png"
    },
    a3bd: function (e, t, i) {
        e.exports = i.p + "img/blackhole.4c5efeb7.png"
    },
    a3c3: function (e, t, i) {
        e.exports = i.p + "img/heart6.696e9a7f.png"
    },
    a3d2: function (e, t, i) {
        e.exports = i.p + "img/leaf2.fff4ffad.png"
    },
    a3e0: function (e, t, i) {
        e.exports = i.p + "img/adaptation.03060487.png"
    },
    a46e: function (e, t, i) {
        "use strict";
        var n = i("6a0f")
            , s = i.n(n);
        s.a
    },
    a4c7: function (e, t, i) {
        e.exports = i.p + "img/ornam47.857e2644.png"
    },
    a5c2: function (e, t, i) {
        e.exports = i.p + "img/trololo.e8ea3270.png"
    },
    a5ec: function (e, t, i) {
        e.exports = i.p + "img/kana.c9347974.png"
    },
    a619: function (e, t, i) {
        e.exports = i.p + "img/ornam44.c40548fe.png"
    },
    a640: function (e, t, i) {
        e.exports = i.p + "img/dinnercat2.9c85bfd0.png"
    },
    a665: function (e, t, i) {
        e.exports = i.p + "img/apple.0bd7c61a.png"
    },
    a70d: function (e, t, i) {
        e.exports = i.p + "img/mvp.586e0680.png"
    },
    a75b: function (e, t, i) {
        e.exports = i.p + "img/eye2.47f02c7f.png"
    },
    a77e: function (e, t, i) {
        e.exports = i.p + "img/ornam25.740496a8.png"
    },
    a857: function (e, t, i) {
        e.exports = i.p + "img/tunnel2.ef296267.png"
    },
    a867: function (e, t, i) {
        e.exports = i.p + "img/brazil.3205a913.png"
    },
    a88b: function (e, t, i) {
        e.exports = i.p + "img/light2.42637fc8.png"
    },
    a8b4: function (e, t, i) {
        e.exports = i.p + "img/ornam17.8619bc23.png"
    },
    a97e: function (e, t, i) {
        e.exports = i.p + "img/abstract4.406fa486.png"
    },
    a98e: function (e, t, i) {
        e.exports = i.p + "img/tunnel3.0e726e09.png"
    },
    aa30: function (e, t, i) { },
    aa62: function (e, t, i) {
        e.exports = i.p + "img/pumpkin3.85a227f5.png"
    },
    aada: function (e, t, i) {
        e.exports = i.p + "img/tuva.e9c72e79.png"
    },
    ab8e: function (e, t, i) {
        e.exports = i.p + "img/needles.bc724660.png"
    },
    ac6b: function (e, t, i) {
        e.exports = i.p + "img/goosedie.10124f2f.png"
    },
    ac83: function (e, t, i) {
        e.exports = i.p + "img/yakutiya.eef6cc40.png"
    },
    ad1a: function (e, t, i) {
        e.exports = i.p + "img/sad.1be6d371.png"
    },
    ad3a: function (e, t, i) {
        e.exports = i.p + "img/watermelon.a317f7fa.png"
    },
    ad4f: function (e, t, i) {
        e.exports = i.p + "img/rich.bc411cbe.png"
    },
    ad6b: function (e, t, i) {
        e.exports = i.p + "img/argentina.ede06c54.png"
    },
    add5: function (e, t, i) {
        e.exports = i.p + "img/whirpool3.8df2e121.png"
    },
    ae88: function (e, t, i) {
        e.exports = i.p + "img/pumpkin6.2230b2a4.png"
    },
    aede: function (e, t, i) {
        e.exports = i.p + "img/thx.72ae7cf4.png"
    },
    af3e: function (e, t, i) {
        "use strict";
        var n = i("a084")
            , s = i.n(n);
        s.a
    },
    af56: function (e, t, i) {
        e.exports = i.p + "img/whirpool.8b49754a.png"
    },
    af8a: function (e, t, i) {
        e.exports = i.p + "img/bg-pattern-2.58bb35ff.png"
    },
    af94: function (e, t, i) {
        e.exports = i.p + "img/frog.ec44d7f6.png"
    },
    b045: function (e, t, i) {
        "use strict";
        var n = i("20f9")
            , s = i.n(n);
        s.a
    },
    b072: function (e, t, i) {
        e.exports = i.p + "img/uprt_dog2.d12fec24.png"
    },
    b20a: function (e, t, i) {
        e.exports = i.p + "img/water3.81ea30b7.png"
    },
    b260: function (e, t, i) {
        e.exports = i.p + "img/citrus.bf54a997.png"
    },
    b27b: function (e, t, i) {
        "use strict";
        var n = i("b7cd")
            , s = i.n(n);
        s.a
    },
    b2dd: function (e, t, i) {
        e.exports = i.p + "img/instability.c8d06955.png"
    },
    b498: function (e, t, i) {
        e.exports = i.p + "img/nosignal.d0363808.png"
    },
    b5b6: function (e, t, i) {
        e.exports = i.p + "img/alienmatter.79b95db1.png"
    },
    b5ba: function (e, t, i) {
        e.exports = i.p + "img/ornam29.81fbe237.png"
    },
    b7cd: function (e, t, i) { },
    ba67: function (e, t, i) {
        e.exports = i.p + "img/dinnercat.59fc24f1.png"
    },
    ba6e: function (e, t, i) {
        e.exports = i.p + "img/dio.aa921bde.png"
    },
    ba81: function (e, t, i) {
        var n = {
            "./adaptation.png": "a3e0",
            "./aura.png": "8178",
            "./bg-pattern-1.png": "9627",
            "./bg-pattern-2.png": "af8a",
            "./bg-pattern-3.png": "1d9d",
            "./bg-pattern-4.png": "2fbf",
            "./icon-alt-blind.png": "e18c",
            "./icon-alt-lock.png": "22f8",
            "./icon-anti-eject.png": "59a0",
            "./icon-blind.png": "7be7",
            "./icon-crown.png": "3d5b",
            "./icon-infect.png": "3b6d",
            "./icon-lock.png": "9c65",
            "./infect.png": "5823",
            "./infected-mass.png": "0fe6",
            "./instability.png": "b2dd",
            "./mvp-arrow.png": "81cb",
            "./mvp-fog.png": "0709",
            "./mvp-pellet.png": "296a",
            "./mvp-spawn.png": "d854",
            "./mvp-spawn2.png": "0fb7",
            "./mvp.png": "a70d",
            "./noise.png": "e954",
            "./pellet.png": "4d49",
            "./proj-antisplit.png": "c489",
            "./proj-blind.png": "fe2c",
            "./proj-mvp-laser.png": "2244",
            "./shield.png": "6a25",
            "./snowflake.png": "830e",
            "./ufo-active.png": "ffb0",
            "./ufo-overlay.png": "d259",
            "./ufo.png": "284b",
            "./virus.png": "1de4"
        };
        function s(e) {
            var t = a(e);
            return i(t)
        }
        function a(e) {
            var t = n[e];
            if (!(t + 1)) {
                var i = new Error("Cannot find module '" + e + "'");
                throw i.code = "MODULE_NOT_FOUND",
                i
            }
            return t
        }
        s.keys = function () {
            return Object.keys(n)
        }
            ,
            s.resolve = a,
            e.exports = s,
            s.id = "ba81"
    },
    bb93: function (e, t, i) {
        e.exports = i.p + "img/giga.c30d43f6.png"
    },
    bc56: function (e, t, i) {
        "use strict";
        var n = i("9f12")
            , s = i.n(n);
        s.a
    },
    bcec: function (e, t, i) {
        e.exports = i.p + "img/grass2.32bed965.png"
    },
    bd6b: function (e, t, i) {
        e.exports = i.p + "img/pomeg.e20657e6.png"
    },
    bdee: function (e, t, i) { },
    bea3: function (e, t, i) {
        e.exports = i.p + "img/snowflake.445cb4ac.png"
    },
    bf7d: function (e, t, i) {
        e.exports = i.p + "img/cat.13eff654.png"
    },
    bfe4: function (e, t, i) {
        e.exports = i.p + "img/ornam40.32f74adf.png"
    },
    bffd: function (e, t, i) {
        e.exports = i.p + "img/pizza.8e89fcd0.png"
    },
    c03d: function (e, t, i) {
        e.exports = i.p + "img/cow_pattern.83ca956d.png"
    },
    c123: function (e, t, i) {
        e.exports = i.p + "img/israel.c03785ca.png"
    },
    c135: function (e, t, i) { },
    c18e: function (e, t, i) {
        e.exports = i.p + "img/tohr.3bfa6673.png"
    },
    c1c0: function (e, t, i) {
        e.exports = i.p + "img/sea3.77a4efa4.png"
    },
    c235: function (e, t, i) {
        e.exports = i.p + "img/fawkes2.f4aa5a14.png"
    },
    c277: function (e, t, i) {
        e.exports = i.p + "img/boo.62d73762.png"
    },
    c325: function (e, t, i) {
        e.exports = i.p + "img/yasno.02d7e7f9.png"
    },
    c3af: function (e, t, i) {
        e.exports = i.p + "img/dragon.dd2efcf7.png"
    },
    c3e3: function (e, t, i) {
        e.exports = i.p + "img/firework.163742cd.png"
    },
    c41b: function (e, t, i) {
        e.exports = i.p + "img/uprt_cat3.2c2e693b.png"
    },
    c489: function (e, t, i) {
        e.exports = i.p + "img/proj-antisplit.c78c0747.png"
    },
    c4e1: function (e, t, i) {
        e.exports = i.p + "img/hearts.2b6a7b86.png"
    },
    c4ec: function (e, t, i) {
        e.exports = i.p + "img/stomach.f34b6cd9.png"
    },
    c670: function (e, t, i) { },
    c693: function (e, t, i) {
        e.exports = i.p + "img/lfhsbnd.9dcaf9dc.png"
    },
    c72f: function (e, t, i) {
        "use strict";
        var n = i("3460")
            , s = i.n(n);
        s.a
    },
    c73a: function (e, t, i) {
        e.exports = i.p + "img/hakasiya.66efe445.png"
    },
    c7bd: function (e, t, i) {
        e.exports = i.p + "img/tortoise.45a39878.png"
    },
    c825: function (e, t, i) {
        e.exports = i.p + "img/lfgf.b59053e5.png"
    },
    c84c: function (e, t, i) {
        e.exports = i.p + "img/bad.f13f453c.png"
    },
    c8f0: function (e, t, i) {
        e.exports = i.p + "img/abstract9.73052f05.png"
    },
    c8f0e: function (e, t, i) {
        e.exports = i.p + "img/mandarin.2b49321b.png"
    },
    c990: function (e, t, i) {
        "use strict";
        var n = i("3352")
            , s = i.n(n);
        s.a
    },
    c9fc: function (e, t, i) {
        e.exports = i.p + "img/uprt_cat5.40ebf8a1.png"
    },
    ca53: function (e, t, i) {
        e.exports = i.p + "img/burndog.b6783ef6.png"
    },
    cb38: function (e, t, i) {
        e.exports = i.p + "img/sunflowers.17492bd0.png"
    },
    cc55: function (e, t, i) {
        e.exports = i.p + "img/pie.5da38582.png"
    },
    cd49: function (e, t, i) {
        "use strict";
        i.r(t);
        var n = i("be94")
            , s = (i("386d"),
                i("1da1"))
            , a = (i("6d93"),
                i("2b0e"))
            , o = i("912c");
        i("0c69"),
            i("5aea"),
            i("edc0"),
            i("ceed"),
            i("6b54");
        a["default"].filter("price", e => {
            return e.gems ? e.gems : e.coins ? e.coins : ""
        }
        ),
            a["default"].filter("thousandSeparator", e => {
                if ("number" !== typeof e)
                    return "";
                const t = e.toString();
                let i = "";
                for (let n = t.length; n >= 0; --n)
                    i = t.charAt(n) + i,
                        n < t.length && n > 0 && (t.length - n) % 3 === 0 && "-" !== t[n - 1] && (i = " " + i);
                return i
            }
            );
        var r, c = function () {
            var e = this
                , t = e.$createElement
                , i = e._self._c || t;
            return i("div", {
                class: {
                    fullscreen: e.fullscreen
                },
                attrs: {
                    id: "app"
                }
            }, [e.loading ? i("div", {
                staticClass: "loader",
                class: e.loader.state
            }, [e._v("\n        " + e._s(e.loaderText) + "\n    ")]) : e.inGame ? e.inGame ? i("GameplayScreen", {
                staticClass: "screen"
            }) : e._e() : i("MainMenuScreen", {
                staticClass: "screen"
            }), e._l(e.popups, function (t) {
                return i("div", {
                    key: t.id,
                    staticClass: "modal-mask",
                    class: {
                        visible: t === e.topLevelPopup
                    },
                    on: {
                        click: e.onModalMaskClick
                    }
                }, [i(t.type, e._b({
                    tag: "component",
                    staticClass: "popup",
                    attrs: {
                        id: t.id
                    },
                    on: {
                        close: function (i) {
                            return e.closePopup(t.id)
                        }
                    }
                }, "component", t.props, !1))], 1)
            }), e.asyncOperation ? i("div", {
                staticClass: "blocker"
            }, [e._m(0)]) : e._e()], 2)
        }, p = [function () {
            var e = this
                , t = e.$createElement
                , i = e._self._c || t;
            return i("div", {
                staticClass: "spinner sk-fading-circle"
            }, [i("div", {
                staticClass: "sk-circle1 sk-circle"
            }), i("div", {
                staticClass: "sk-circle2 sk-circle"
            }), i("div", {
                staticClass: "sk-circle3 sk-circle"
            }), i("div", {
                staticClass: "sk-circle4 sk-circle"
            }), i("div", {
                staticClass: "sk-circle5 sk-circle"
            }), i("div", {
                staticClass: "sk-circle6 sk-circle"
            }), i("div", {
                staticClass: "sk-circle7 sk-circle"
            }), i("div", {
                staticClass: "sk-circle8 sk-circle"
            }), i("div", {
                staticClass: "sk-circle9 sk-circle"
            }), i("div", {
                staticClass: "sk-circle10 sk-circle"
            }), i("div", {
                staticClass: "sk-circle11 sk-circle"
            }), i("div", {
                staticClass: "sk-circle12 sk-circle"
            })])
        }
        ], l = i("9ab4"), d = i("60a3"), g = i("4bb5"), u = function () {
            var e = this
                , t = e.$createElement
                , i = e._self._c || t;
            return i("div", {
                staticClass: "main-menu-screen"
            }, [i("div", {
                staticClass: "stripe top"
            }), i("div", {
                staticClass: "stripe bot"
            }), i("div", {
                staticClass: "main-menu-content"
            }, [i("div", {
                staticClass: "passives-container"
            }, e._l(e.passives, function (e) {
                return i("PassiveRow", {
                    key: e,
                    attrs: {
                        passive: e
                    }
                })
            }), 1), i("div", {
                staticClass: "skills-container"
            }, e._l(e.skills, function (e) {
                return i("SkillRow", {
                    key: e,
                    attrs: {
                        skill: e
                    }
                })
            }), 1), i("div", {
                staticClass: "button-subscription pushable sprite-button-premium",
                on: {
                    click: e.onButtonSubscriptionClick
                }
            }, [i("span", {
                staticClass: "move-2px"
            }, [e._v("Премиум")])]), i("div", {
                staticClass: "button-buffs pushable sprite-button-buy-buff",
                on: {
                    click: e.onButtonBuffsClick
                }
            }, [i("span", {
                staticClass: "move-2px"
            }, [e._v("Зелья")])]), i("div", {
                staticClass: "button-top pushable sprite-button-buy-buff",
                on: {
                    click: e.onButtonTopClick
                }
            }, [i("span", {
                staticClass: "move-2px"
            }, [e._v("Рейтинг")])]), i("div", {
                staticClass: "button-play pushable sprite-button-play",
                on: {
                    click: e.onButtonPlayClick
                }
            }, [i("span", {
                staticClass: "move-2px"
            }, [e._v("Играть!")])]), i("div", {
                staticClass: "button-tutorial pushable sprite-button-tutorial",
                on: {
                    click: e.onButtonTutorialClick
                }
            }, [i("span", {
                staticClass: "move-2px"
            }, [e._v("Как играть?")])]), e.socialTasksRewardReceived ? e._e() : i("div", {
                staticClass: "sprite-free-gems-label",
                on: {
                    click: e.onLabelSocialTasksClick
                }
            }), i("CurrencyRow", {
                staticClass: "coins-row",
                attrs: {
                    type: "coins",
                    value: e.coins
                }
            }), i("CurrencyRow", {
                staticClass: "gems-row",
                attrs: {
                    type: "gems",
                    value: e.gems
                }
            }), i("CurrencyRow", {
                staticClass: "mvp-coins-row",
                attrs: {
                    type: "mvpcoins",
                    value: e.mvpCoins
                }
            }), i("div", {
                staticClass: "skin-container"
            }, [i("div", {
                staticClass: "skin-hint text-outline-black"
            }, [e._v("Внешний вид")]), e.showSkinUpdate ? i("div", {
                staticClass: "skin-update sprite-skin-update-bg"
            }, [i("span", {
                staticClass: "skin-update-text"
            }, [e._v("Обновление!")])]) : e._e(), i("div", {
                staticClass: "button-skin sprite-button-blue-small",
                on: {
                    click: e.onButtonSkinClick
                }
            }, [i("span", {
                staticClass: "move-1px"
            }, [e._v("Изменить")])]), i("div", {
                staticClass: "skin-preview",
                style: {
                    "background-image": e.skinBg
                }
            })]), e.canChangeNames ? i("div", {
                staticClass: "name-changes"
            }, [e.canChangeNames ? i("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.editedName,
                    expression: "editedName"
                }],
                staticClass: "input-name sprite-input-name-bg",
                attrs: {
                    maxlength: e.nameMaxLength,
                    placeholder: e.fullName,
                    type: "text"
                },
                domProps: {
                    value: e.editedName
                },
                on: {
                    input: function (t) {
                        t.target.composing || (e.editedName = t.target.value)
                    }
                }
            }) : e._e(), e.editedNameChanged && e.editedNameValid ? i("div", {
                staticClass: "button-accept-name-change sprite-button-v",
                on: {
                    click: e.onButtonAcceptNameChangeClick
                }
            }) : e._e(), e.editedNameChanged ? i("div", {
                staticClass: "button-reset-name-change sprite-button-x",
                on: {
                    click: e.onButtonResetNameChangeClick
                }
            }) : e._e(), e.editedNameValid ? e._e() : i("div", {
                staticClass: "invalid-name"
            }, [e._v("\n                Недопустимое имя!\n            ")])]) : i("div", {
                staticClass: "button-name-changes pushable sprite-button-blue-long",
                on: {
                    click: e.onButtonNameChangesClick
                }
            }, [i("span", {
                staticClass: "name-changes-hint"
            }, [e._v("Изменить имя")]), i("Currency", {
                staticClass: "name-changes-price",
                attrs: {
                    currency: e.changeNamesPrice
                }
            })], 1), i("div", {
                staticClass: "best-mass"
            }, [e._v("\n            Лучший результат:\n            "), i("br"), i("span", {
                staticClass: "best-mass-value text-outline-blue"
            }, [e._v(e._s(e.scores.bestMassAllTime))])])], 1)])
        }, m = [], h = (i("ac6a"),
            function () {
                var e = this
                    , t = e.$createElement
                    , i = e._self._c || t;
                return i("div", {
                    staticClass: "passive-row"
                }, [i("div", {
                    staticClass: "name text-outline-black",
                    class: {
                        compact: e.config.name.length >= 20
                    }
                }, [e._v("\n        " + e._s(e.config.name) + "\n    ")]), i("div", {
                    staticClass: "description text-outline-black"
                }, [e._v("\n        " + e._s(e.hovered ? e.nextLevelValues.description : e.values.description) + "\n    ")]), i("div", {
                    staticClass: "stars-container"
                }, e._l(Math.ceil(e.config.levels.length / 2), function (t) {
                    return i("div", {
                        key: t,
                        staticClass: "sprite-icon-star-empty"
                    }, [i("div", {
                        class: e.getStarIconClass(t),
                        style: {
                            width: e.starWidth(t, e.level)
                        }
                    }), e.hovered ? i("div", {
                        class: e.getStarIconClass(t),
                        style: {
                            width: e.starWidth(t, e.level + 1),
                            opacity: .2
                        }
                    }) : e._e()])
                }), 0), e.values.canLevelUp ? i("div", {
                    staticClass: "button-level-up sprite-button-blue-small",
                    on: {
                        mouseover: function (t) {
                            e.hovered = !0
                        },
                        mouseleave: function (t) {
                            e.hovered = !1
                        },
                        click: e.onLevelUpButtonClick
                    }
                }, [i("Currency", {
                    staticClass: "price move-1px",
                    attrs: {
                        currency: e.values.price
                    }
                })], 1) : i("div", {
                    staticClass: "sprite-icon-v"
                })])
            }
        ), f = [];
        (function (e) {
            e["OpenPopup"] = "openPopup",
                e["OpenErrorPopup"] = "openErrorPopup",
                e["ClosePopup"] = "closePopup",
                e["CloseAllPopups"] = "closeAllPopups",
                e["AsyncOperation"] = "asyncOperation",
                e["Login"] = "login",
                e["BuyNameChanges"] = "buyNameChanges",
                e["ChangeName"] = "changeName",
                e["BuySkin"] = "buySkin",
                e["ChangeSkin"] = "changeSkin",
                e["BuyCoins"] = "buyCoins",
                e["BuyGems"] = "buyGems",
                e["LevelUpPassive"] = "levelUpPassive",
                e["LevelUpSkill"] = "levelUpSkill",
                e["PerformSocialTask"] = "performSocialTask",
                e["CompleteWallPost"] = "completeWallPost",
                e["PollSocialTasks"] = "pollSocialTasks",
                e["ReceiveSocialTaskReward"] = "receiveSocialTaskReward",
                e["JoinGame"] = "joinGame",
                e["LeaveGame"] = "leaveGame",
                e["PremiumRespawn"] = "premiumRespawn",
                e["UpdateTop"] = "updateTop",
                e["UpdateLoader"] = "updateLoader",
                e["Subscribe"] = "subscribe",
                e["ReceiveDailyReward"] = "receiveDailyReward",
                e["BuyBuff"] = "buyBuff",
                e["SetTransparentTop"] = "setTransparentTop"
        }
        )(r || (r = {}));
        const y = {
            viewAreaBaseWidth: 1920,
            viewAreaBaseHeight: 1080,
            worldWidth: 15e3,
            worldHeight: 15e3,
            pelletMass: 1,
            projectileMass: 10,
            snowballMass: 50,
            mvpMass: 1650,
            mvpAuraRadius: 1200,
            mvpExtraAuraDuration: 4e4,
            mvpFightTime: 3e5
        };
        var b, v, _, C, x, w, k;
        (function (e) {
            e[e["Greeting"] = 0] = "Greeting",
                e[e["UpdateState"] = 1] = "UpdateState",
                e[e["PlayerJoined"] = 2] = "PlayerJoined",
                e[e["PlayerLeft"] = 3] = "PlayerLeft",
                e[e["Top"] = 4] = "Top",
                e[e["SnapCamera"] = 5] = "SnapCamera",
                e[e["Blind"] = 6] = "Blind",
                e[e["SkillCooldown"] = 7] = "SkillCooldown",
                e[e["Death"] = 8] = "Death",
                e[e["LeftRoom"] = 9] = "LeftRoom",
                e[e["Respawned"] = 10] = "Respawned",
                e[e["MvpTimer"] = 11] = "MvpTimer",
                e[e["MvpWon"] = 12] = "MvpWon",
                e[e["MvpInOtherRoom"] = 13] = "MvpInOtherRoom",
                e[e["UfoState"] = 14] = "UfoState"
        }
        )(b || (b = {})),
            function (e) {
                e[e["Respawn"] = 0] = "Respawn",
                    e[e["SetMouseOffset"] = 1] = "SetMouseOffset",
                    e[e["Split"] = 2] = "Split",
                    e[e["EjectMass"] = 3] = "EjectMass",
                    e[e["UseSkill"] = 4] = "UseSkill",
                    e[e["LeaveRoom"] = 5] = "LeaveRoom",
                    e[e["CancelInstability"] = 6] = "CancelInstability"
            }(v || (v = {})),
            function (e) {
                e[e["Position"] = 1] = "Position",
                    e[e["Mass"] = 2] = "Mass",
                    e[e["Teleported"] = 4] = "Teleported",
                    e[e["PlayerCellFlagsChanged"] = 8] = "PlayerCellFlagsChanged",
                    e[e["Ufo"] = 16] = "Ufo"
            }(_ || (_ = {})),
            function (e) {
                e[e["MassDecayAura"] = 1] = "MassDecayAura",
                    e[e["MassDecayed"] = 2] = "MassDecayed",
                    e[e["Antisplit"] = 4] = "Antisplit",
                    e[e["Instability"] = 8] = "Instability",
                    e[e["Blind"] = 16] = "Blind",
                    e[e["AntiEjectDebuff"] = 32] = "AntiEjectDebuff",
                    e[e["Infect"] = 64] = "Infect",
                    e[e["Adaptation"] = 128] = "Adaptation",
                    e[e["Shield"] = 256] = "Shield",
                    e[e["AltBlind"] = 512] = "AltBlind",
                    e[e["AltAntisplit"] = 1024] = "AltAntisplit",
                    e[e["Teleporting"] = 2048] = "Teleporting"
            }(C || (C = {})),
            function (e) {
                e[e["PlayerCell"] = 0] = "PlayerCell",
                    e[e["Pellet"] = 1] = "Pellet",
                    e[e["Virus"] = 2] = "Virus",
                    e[e["Mass"] = 3] = "Mass",
                    e[e["BlindProjectile"] = 4] = "BlindProjectile",
                    e[e["AntisplitProjectile"] = 5] = "AntisplitProjectile",
                    e[e["SnowballProjectile"] = 6] = "SnowballProjectile",
                    e[e["Mvp"] = 7] = "Mvp",
                    e[e["MvpLaser"] = 8] = "MvpLaser",
                    e[e["MvpPellet"] = 9] = "MvpPellet",
                    e[e["Ufo"] = 10] = "Ufo"
            }(x || (x = {})),
            function (e) {
                e["Teleport"] = "teleport",
                    e["MassDecay"] = "massDecay",
                    e["Blind"] = "blind",
                    e["Antisplit"] = "antisplit",
                    e["Instability"] = "instability",
                    e["Snowball"] = "snowball",
                    e["Adaptation"] = "adaptation"
            }(w || (w = {})),
            function (e) {
                e["Red"] = "red",
                    e["Green"] = "green",
                    e["Gold"] = "gold"
            }(k || (k = {}));
        const M = {
            [w.Teleport]: 0,
            [w.MassDecay]: 1,
            [w.Blind]: 2,
            [w.Antisplit]: 3,
            [w.Instability]: 4,
            [w.Snowball]: 5,
            [w.Adaptation]: 6
        }
            , S = Object.keys(M).reduce((e, t) => {
                return e[M[t]] = t,
                    e
            }
                , {});
        var T, I, P;
        (function (e) {
            e["Speed"] = "speed",
                e["InitialMass"] = "initialMass",
                e["ReduceMassDecay"] = "reduceMassDecay",
                e["MergeTime"] = "mergeTime",
                e["CoinsGain"] = "coinsGain"
        }
        )(T || (T = {})),
            function (e) {
                e[e["DualLogin"] = 4e3] = "DualLogin"
            }(I || (I = {})),
            function (e) {
                e[e["Despawned"] = 0] = "Despawned",
                    e[e["Spawning"] = 1] = "Spawning",
                    e[e["Spawned"] = 2] = "Spawned"
            }(P || (P = {}));
        const A = {
            [T.Speed]: {
                name: "Скорость",
                description: "+ {value}% скорости",
                levels: [{
                    value: 1,
                    price: {
                        coins: 100
                    }
                }, {
                    value: 2,
                    price: {
                        coins: 250
                    }
                }, {
                    value: 3,
                    price: {
                        coins: 500
                    }
                }, {
                    value: 4,
                    price: {
                        coins: 1500
                    }
                }, {
                    value: 6,
                    price: {
                        coins: 2500
                    }
                }, {
                    value: 8,
                    price: {
                        coins: 3500
                    }
                }, {
                    value: 10,
                    price: {
                        coins: 4e3
                    }
                }, {
                    value: 13,
                    price: {
                        coins: 5e3
                    }
                }, {
                    value: 16,
                    price: {
                        coins: 6e3
                    }
                }, {
                    value: 20,
                    price: {
                        coins: 7500
                    }
                }, {
                    value: 21,
                    price: {
                        mvpCoins: 1
                    }
                }, {
                    value: 22,
                    price: {
                        mvpCoins: 2
                    }
                }, {
                    value: 23,
                    price: {
                        mvpCoins: 3
                    }
                }, {
                    value: 24,
                    price: {
                        mvpCoins: 4
                    }
                }]
            },
            [T.InitialMass]: {
                name: "Начальная масса",
                description: "+ {value} массы",
                levels: [{
                    value: 5,
                    price: {
                        coins: 100
                    }
                }, {
                    value: 10,
                    price: {
                        coins: 250
                    }
                }, {
                    value: 15,
                    price: {
                        coins: 500
                    }
                }, {
                    value: 20,
                    price: {
                        coins: 1500
                    }
                }, {
                    value: 25,
                    price: {
                        coins: 2500
                    }
                }, {
                    value: 30,
                    price: {
                        coins: 3500
                    }
                }, {
                    value: 40,
                    price: {
                        coins: 4e3
                    }
                }, {
                    value: 50,
                    price: {
                        coins: 5e3
                    }
                }, {
                    value: 70,
                    price: {
                        coins: 6e3
                    }
                }, {
                    value: 100,
                    price: {
                        coins: 7500
                    }
                }, {
                    value: 115,
                    price: {
                        mvpCoins: 1
                    }
                }, {
                    value: 130,
                    price: {
                        mvpCoins: 2
                    }
                }, {
                    value: 145,
                    price: {
                        mvpCoins: 3
                    }
                }, {
                    value: 160,
                    price: {
                        mvpCoins: 4
                    }
                }]
            },
            [T.ReduceMassDecay]: {
                name: "Уменьшение скорости падения массы",
                description: "- {value}% в секунду",
                levels: [{
                    value: 1,
                    price: {
                        coins: 100
                    }
                }, {
                    value: 2,
                    price: {
                        coins: 250
                    }
                }, {
                    value: 4,
                    price: {
                        coins: 500
                    }
                }, {
                    value: 7,
                    price: {
                        coins: 1500
                    }
                }, {
                    value: 10,
                    price: {
                        coins: 2500
                    }
                }, {
                    value: 15,
                    price: {
                        coins: 3500
                    }
                }, {
                    value: 20,
                    price: {
                        coins: 4e3
                    }
                }, {
                    value: 30,
                    price: {
                        coins: 5e3
                    }
                }, {
                    value: 40,
                    price: {
                        coins: 6e3
                    }
                }, {
                    value: 50,
                    price: {
                        coins: 7500
                    }
                }, {
                    value: 55,
                    price: {
                        mvpCoins: 1
                    }
                }, {
                    value: 60,
                    price: {
                        mvpCoins: 2
                    }
                }, {
                    value: 65,
                    price: {
                        mvpCoins: 3
                    }
                }, {
                    value: 70,
                    price: {
                        mvpCoins: 4
                    }
                }]
            },
            [T.MergeTime]: {
                name: "Увеличение скорости слияния",
                description: "+ {value} {seconds}",
                levels: [{
                    value: 1,
                    price: {
                        coins: 100
                    }
                }, {
                    value: 2,
                    price: {
                        coins: 250
                    }
                }, {
                    value: 3,
                    price: {
                        coins: 500
                    }
                }, {
                    value: 4,
                    price: {
                        coins: 1500
                    }
                }, {
                    value: 5,
                    price: {
                        coins: 2500
                    }
                }, {
                    value: 6,
                    price: {
                        coins: 3500
                    }
                }, {
                    value: 7,
                    price: {
                        coins: 4e3
                    }
                }, {
                    value: 8,
                    price: {
                        coins: 5e3
                    }
                }, {
                    value: 9,
                    price: {
                        coins: 6e3
                    }
                }, {
                    value: 10,
                    price: {
                        coins: 7500
                    }
                }, {
                    value: 11,
                    price: {
                        mvpCoins: 1
                    }
                }, {
                    value: 12,
                    price: {
                        mvpCoins: 2
                    }
                }, {
                    value: 13,
                    price: {
                        mvpCoins: 3
                    }
                }, {
                    value: 14,
                    price: {
                        mvpCoins: 4
                    }
                }]
            },
            [T.CoinsGain]: {
                name: "Бонус к получаемому золоту",
                description: "+ {value}% золота за игру",
                levels: [{
                    value: 2,
                    price: {
                        coins: 100
                    }
                }, {
                    value: 4,
                    price: {
                        coins: 250
                    }
                }, {
                    value: 6,
                    price: {
                        coins: 500
                    }
                }, {
                    value: 8,
                    price: {
                        coins: 1500
                    }
                }, {
                    value: 10,
                    price: {
                        coins: 2500
                    }
                }, {
                    value: 12,
                    price: {
                        coins: 3500
                    }
                }, {
                    value: 15,
                    price: {
                        coins: 4e3
                    }
                }, {
                    value: 20,
                    price: {
                        coins: 5e3
                    }
                }, {
                    value: 25,
                    price: {
                        coins: 6e3
                    }
                }, {
                    value: 30,
                    price: {
                        coins: 7500
                    }
                }, {
                    value: 35,
                    price: {
                        mvpCoins: 1
                    }
                }, {
                    value: 40,
                    price: {
                        mvpCoins: 2
                    }
                }, {
                    value: 45,
                    price: {
                        mvpCoins: 3
                    }
                }, {
                    value: 50,
                    price: {
                        mvpCoins: 4
                    }
                }]
            }
        }
            , O = {
                [w.Teleport]: {
                    name: "Телепортация",
                    description: "Перемещает в случайное место с потерей {value}% массы",
                    levels: [{
                        value: 20,
                        cooldown: 180,
                        price: {
                            gems: 1500
                        }
                    }, {
                        value: 18,
                        cooldown: 170,
                        price: {
                            coins: 2500
                        }
                    }, {
                        value: 15,
                        cooldown: 160,
                        price: {
                            coins: 3500
                        }
                    }, {
                        value: 11,
                        cooldown: 140,
                        price: {
                            coins: 5e3
                        },
                        rate: 33
                    }, {
                        value: 6,
                        cooldown: 120,
                        price: {
                            coins: 7500
                        },
                        rate: 25
                    }, {
                        value: 0,
                        cooldown: 100,
                        price: {
                            coins: 1e4
                        },
                        rate: 15
                    }]
                },
                [w.MassDecay]: {
                    name: "Аура дегенерации",
                    description: "Усиливает дегенерацию массы вокруг на {value} {seconds}",
                    levels: [{
                        value: 2,
                        cooldown: 90,
                        price: {
                            gems: 1500
                        }
                    }, {
                        value: 2.5,
                        cooldown: 85,
                        price: {
                            coins: 2500
                        }
                    }, {
                        value: 3,
                        cooldown: 80,
                        price: {
                            coins: 3500
                        }
                    }, {
                        value: 3.5,
                        cooldown: 70,
                        price: {
                            coins: 5e3
                        },
                        rate: 33
                    }, {
                        value: 4,
                        cooldown: 60,
                        price: {
                            coins: 7500
                        },
                        rate: 25
                    }, {
                        value: 5,
                        cooldown: 45,
                        price: {
                            coins: 1e4
                        },
                        rate: 15
                    }]
                },
                [w.Blind]: {
                    name: "Ослепление",
                    description: "Ослепляет цель на 6 секунд",
                    levels: [{
                        cooldown: 90,
                        price: {
                            gems: 1500
                        }
                    }, {
                        cooldown: 85,
                        price: {
                            coins: 2500
                        }
                    }, {
                        cooldown: 80,
                        price: {
                            coins: 3500
                        }
                    }, {
                        cooldown: 70,
                        price: {
                            coins: 5e3
                        },
                        rate: 33
                    }, {
                        cooldown: 60,
                        price: {
                            coins: 7500
                        },
                        rate: 25
                    }, {
                        cooldown: 45,
                        price: {
                            coins: 1e4
                        },
                        rate: 15
                    }]
                },
                [w.Instability]: {
                    name: "Нестабильность",
                    description: "На {value} {seconds} полностью убирает время слияния",
                    levels: [{
                        value: 3,
                        cooldown: 300,
                        price: {
                            gems: 4500
                        }
                    }, {
                        value: 4,
                        cooldown: 280,
                        price: {
                            coins: 2500
                        }
                    }, {
                        value: 5,
                        cooldown: 260,
                        price: {
                            coins: 3500
                        }
                    }, {
                        value: 5,
                        cooldown: 240,
                        price: {
                            coins: 5e3
                        },
                        rate: 25
                    }, {
                        value: 6,
                        cooldown: 220,
                        price: {
                            coins: 7500
                        },
                        rate: 20
                    }, {
                        value: 7,
                        cooldown: 200,
                        price: {
                            coins: 1e4
                        },
                        rate: 10
                    }]
                },
                [w.Adaptation]: {
                    name: "Адаптация",
                    description: "Изменяет эффект способностей",
                    levels: [{
                        cooldown: 260,
                        price: {
                            gems: 2500
                        }
                    }, {
                        cooldown: 240,
                        price: {
                            coins: 2500
                        }
                    }, {
                        cooldown: 220,
                        price: {
                            coins: 3500
                        }
                    }, {
                        cooldown: 200,
                        price: {
                            coins: 5e3
                        },
                        rate: 25
                    }, {
                        cooldown: 180,
                        price: {
                            coins: 7500
                        },
                        rate: 20
                    }, {
                        cooldown: 150,
                        price: {
                            coins: 1e4
                        },
                        rate: 10
                    }]
                }
            }
            , j = {
                [k.Red]: {
                    name: "Зелье вампира",
                    description: ['Ваше умение "Аура" возвращает часть поглощенной массы.'],
                    price: {
                        gems: 1e3
                    }
                },
                [k.Green]: {
                    name: "Зелье соло игрока",
                    description: ["Ослабляет ауру, направленную против вас. Защита усиливается, если ваша масса больше чем у нападающего.", "Другие игроки, съедая вас, получают только 60% массы."],
                    price: {
                        mvpCoins: 3
                    }
                },
                [k.Gold]: {
                    name: "Зелье силы",
                    description: ["Ваше отталкивание (кнопка S) усиливается и работает на шипы."],
                    price: {
                        coins: 35e3
                    }
                }
            };
        var B = function () {
            var e = this
                , t = e.$createElement
                , i = e._self._c || t;
            return i("span", [i("span", {
                staticClass: "value"
            }, [e._v(e._s(e._f("thousandSeparator")(e.amount)))]), i("span", {
                staticClass: "icon-wrapper",
                style: e.wrapperStyle
            }, [i("span", {
                staticClass: "icon",
                class: e.icon,
                style: e.iconStyle
            })])])
        }
            , R = [];
        let L = class extends d["c"] {
            get icon() {
                return void 0 !== this.currency.gems ? "sprite-icon-gem" : void 0 !== this.currency.coins ? "sprite-icon-coin" : void 0 !== this.currency.mvpCoins ? "sprite-icon-mvp-coin" : void 0
            }
            get wrapperStyle() {
                return {
                    width: "".concat(this.iconSize, "px"),
                    height: "".concat(this.iconSize, "px")
                }
            }
            get iconStyle() {
                const e = this.iconSize / 46;
                return {
                    transform: "scale(".concat(e, ",").concat(e, ")")
                }
            }
            get amount() {
                return void 0 !== this.currency.gems ? this.currency.gems : void 0 !== this.currency.coins ? this.currency.coins : void 0 !== this.currency.mvpCoins ? this.currency.mvpCoins : void 0
            }
        }
            ;
        l["a"]([Object(d["b"])(Object)], L.prototype, "currency", void 0),
            l["a"]([Object(d["b"])({
                type: Number,
                default: 32
            })], L.prototype, "iconSize", void 0),
            L = l["a"]([Object(d["a"])({})], L);
        var U = L
            , E = U
            , D = (i("efe1"),
                i("2877"))
            , N = Object(D["a"])(E, B, R, !1, null, "1cb27465", null)
            , F = N.exports;
        i("a481"),
            i("28a5");
        function X(e) {
            for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
                i[n - 1] = arguments[n];
            if (!i || i.length < 3)
                return "";
            if (~~e !== e)
                return i[1];
            if (e >= 10 && e <= 20)
                return i[2];
            const s = e.toString()
                , a = s.charAt(s.length - 1);
            return "1" === a ? i[0] : "2" === a || "3" === a || "4" === a ? i[1] : i[2]
        }
        function G(e) {
            const t = {};
            if (e.length > 1) {
                const i = e.substring(1).split("&");
                for (let e = 0; e < i.length; ++e) {
                    const n = i[e].split("=")
                        , s = decodeURIComponent(n[0]);
                    2 === n.length ? t[s] = decodeURIComponent(n[1]) : t[s] = null
                }
            }
            return t
        }
        function z(e) {
            return new Promise((t, i) => {
                const n = document.createElement("script");
                n.src = e,
                    n.onload = (() => t()),
                    n.onerror = (() => i("Failed to load script ".concat(e, "!"))),
                    document.head.appendChild(n)
            }
            )
        }
        function V(e) {
            return new Promise(t => {
                setTimeout(() => t(), e)
            }
            )
        }
        function W(e, t) {
            return Math.floor(Math.random() * (t - e)) + e
        }
        function q(e) {
            return e += 0 === e,
                --e,
                e |= e >> 1,
                e |= e >> 2,
                e |= e >> 4,
                e |= e >> 8,
                e |= e >> 16,
                e + 1
        }
        function Y() {
            return !!(document.fullscreen || document.mozFullScreen || document.fullscreenElement || document.msFullscreenElement || document.webkitIsFullScreen)
        }
        function H() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
            e || (e = document.body),
                e.requestFullscreen ? e.requestFullscreen() : e.webkitRequestFullscreen ? e.webkitRequestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.msRequestFullscreen && e.msRequestFullscreen()
        }
        function J() {
            Y() && (document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen())
        }
        function K() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
            Y() ? J() : H(e)
        }
        function $(e) {
            document.addEventListener("fullscreenchange", e),
                document.addEventListener("mozfullscreenchange", e),
                document.addEventListener("MSFullscreenChange", e),
                document.addEventListener("webkitfullscreenchange", e)
        }
        function Z(e, t) {
            const i = e.levels.length;
            t = Math.min(t, i);
            const n = t < i
                , s = n ? e.levels[t].price : null
                , a = n ? e.levels[t].rate : void 0
                , o = t ? e.levels[t - 1].value : 0
                , r = t ? e.levels[t - 1].cooldown : 0
                , c = e.description.replace(/{([^{}]*)}/g, (e, t) => {
                    return "value" === t ? o : "seconds" === t ? X(o, "секунда", "секунды", "секунд") : ""
                }
                );
            return {
                price: s,
                value: o,
                description: c,
                cooldown: r,
                rate: a,
                canLevelUp: n
            }
        }
        function Q(e) {
            const t = 36e5
                , i = 24 * t
                , n = e / i
                , s = (e - Math.floor(n) * i) / t;
            if (n > 1) {
                const e = Math.ceil(n);
                return "".concat(e, " ").concat(X(e, "день", "дня", "дней"))
            }
            {
                const e = Math.ceil(s);
                return "".concat(e, " ").concat(X(e, "час", "часа", "часов"))
            }
        }
        let ee = class extends d["c"] {
            constructor() {
                super(...arguments),
                    this.hovered = !1
            }
            get level() {
                return this.passiveLevels[this.passive] || 0
            }
            get config() {
                return A[this.passive]
            }
            get values() {
                return Z(this.config, this.level)
            }
            get nextLevelValues() {
                return Z(this.config, this.level + 1)
            }
            getStarIconClass(e) {
                return e >= 6 ? "sprite-icon-mvp-star" : "sprite-icon-star"
            }
            starWidth(e, t) {
                return t >= 2 * e ? "32px" : t === 2 * e - 1 ? "16px" : "0px"
            }
            onLevelUpButtonClick() {
                this.asyncOperation({
                    type: r.LevelUpPassive,
                    payload: this.passive
                })
            }
        }
            ;
        l["a"]([Object(d["b"])(String)], ee.prototype, "passive", void 0),
            l["a"]([Object(g["c"])(e => e.player.passiveLevels)], ee.prototype, "passiveLevels", void 0),
            l["a"]([Object(g["a"])(r.AsyncOperation)], ee.prototype, "asyncOperation", void 0),
            ee = l["a"]([Object(d["a"])({
                components: {
                    Currency: F
                }
            })], ee);
        var te = ee
            , ie = te
            , ne = (i("7efb"),
                Object(D["a"])(ie, h, f, !1, null, "5ac63232", null))
            , se = ne.exports
            , ae = function () {
                var e = this
                    , t = e.$createElement
                    , i = e._self._c || t;
                return i("div", {
                    staticClass: "skill-row"
                }, [i("SkillIcon", {
                    staticClass: "icon",
                    attrs: {
                        skill: e.skill,
                        level: e.level
                    }
                }), i("div", {
                    staticClass: "name text-outline-black"
                }, [e._v(e._s(e.config.name))]), i("SkillDescription", {
                    staticClass: "description",
                    attrs: {
                        description: e.values.description,
                        cooldown: e.values.cooldown
                    }
                }), e.isAdaptation ? i("div", {
                    staticClass: "button-adaptation-hint sprite-button-q",
                    on: {
                        click: e.onButtonAdaptationClick
                    }
                }) : e._e(), e.values.canLevelUp ? i("div", {
                    staticClass: "button-level-up sprite-button-blue-small",
                    on: {
                        click: e.onButtonLevelUpClick
                    }
                }, [e.level ? [i("span", {
                    staticClass: "move-1px"
                }, [e._v("Усилить")])] : [i("Currency", {
                    attrs: {
                        currency: e.level1Price
                    }
                })]], 2) : e._e()], 1)
            }
            , oe = []
            , re = function () {
                var e = this
                    , t = e.$createElement
                    , i = e._self._c || t;
                return i("Popup", {
                    attrs: {
                        hasCloseButton: !0
                    }
                }, [i("div", {
                    staticClass: "popup-header"
                }, [e._v("\n        Усиление способности\n    ")]), i("SkillIcon", {
                    staticClass: "skill-icon left",
                    attrs: {
                        skill: e.skill,
                        level: e.level
                    }
                }), i("div", {
                    staticClass: "description-container left"
                }, [i("SkillDescription", {
                    staticClass: "description left",
                    attrs: {
                        description: e.values.description,
                        cooldown: e.values.cooldown
                    }
                })], 1), i("div", {
                    staticClass: "sprite-icon-arrow"
                }), i("div", {
                    staticClass: "sprite-skill-glow"
                }), i("SkillIcon", {
                    staticClass: "skill-icon right",
                    attrs: {
                        skill: e.skill,
                        level: e.level + 1
                    }
                }), i("div", {
                    staticClass: "description-container right"
                }, [i("SkillDescription", {
                    staticClass: "description right",
                    attrs: {
                        description: e.nextLevelValues.description,
                        cooldown: e.nextLevelValues.cooldown
                    }
                })], 1), e.values.rate ? i("div", {
                    staticClass: "unsafe-warning"
                }, [e._v("\n        При неудаче уровень усиления будет сброшен до 0!\n    ")]) : e._e(), i("div", {
                    staticClass: "chance"
                }, [i("div", [e._v("Шанс усиления")]), i("div", {
                    staticClass: "chance-value text-outline-black"
                }, [e._v(e._s(e.chance))])]), i("div", {
                    staticClass: "button-level-up pushable sprite-button-blue",
                    on: {
                        click: e.onLevelUpButtonClick
                    }
                }, [i("span", [e._v("Усилить")]), i("Currency", {
                    attrs: {
                        currency: e.values.price
                    }
                })], 1)], 1)
            }
            , ce = []
            , pe = function () {
                var e = this
                    , t = e.$createElement
                    , i = e._self._c || t;
                return i("div", {
                    staticClass: "standard-popup-layout",
                    on: {
                        click: function (e) {
                            e.stopPropagation()
                        }
                    }
                }, [e._t("default"), e.hasCloseButton ? i("div", {
                    staticClass: "button-close sprite-button-close",
                    on: {
                        click: function (t) {
                            return e.$parent.$emit("close")
                        }
                    }
                }) : e._e()], 2)
            }
            , le = [];
        let de = class extends d["c"] {
        }
            ;
        l["a"]([Object(d["b"])(Boolean)], de.prototype, "hasCloseButton", void 0),
            de = l["a"]([Object(d["a"])({})], de);
        var ge = de
            , ue = ge
            , me = (i("52ec"),
                Object(D["a"])(ue, pe, le, !1, null, "93e8165a", null))
            , he = me.exports
            , fe = function () {
                var e = this
                    , t = e.$createElement
                    , i = e._self._c || t;
                return i("div", {
                    staticClass: "skill-icon",
                    class: e.iconClass
                }, [e.refined ? i("div", {
                    staticClass: "sprite-skill-level-bg"
                }, [i("div", {
                    staticClass: "level"
                }, [e._v("+" + e._s(e.level - 1))])]) : e._e()])
            }
            , ye = [];
        let be = class extends d["c"] {
            get refined() {
                return this.level > 1
            }
            get iconClass() {
                switch (this.skill) {
                    case w.Blind:
                        return "sprite-skill-blind";
                    case w.MassDecay:
                        return "sprite-skill-mass-decay";
                    case w.Teleport:
                        return "sprite-skill-teleport";
                    case w.Antisplit:
                        return "sprite-skill-antisplit";
                    case w.Instability:
                        return "sprite-skill-instability";
                    case w.Snowball:
                        return "sprite-skill-snowball";
                    case w.Adaptation:
                        return "sprite-skill-adaptation"
                }
            }
        }
            ;
        l["a"]([Object(d["b"])(String)], be.prototype, "skill", void 0),
            l["a"]([Object(d["b"])(Number)], be.prototype, "level", void 0),
            be = l["a"]([Object(d["a"])({})], be);
        var ve = be
            , _e = ve
            , Ce = (i("c990"),
                Object(D["a"])(_e, fe, ye, !1, null, "bdd8de14", null))
            , xe = Ce.exports
            , we = function () {
                var e = this
                    , t = e.$createElement
                    , i = e._self._c || t;
                return i("div", {
                    staticClass: "skill-description"
                }, [i("span", {
                    staticClass: "description",
                    domProps: {
                        innerHTML: e._s(e.description)
                    }
                }), i("br"), i("span", {
                    staticClass: "cooldown"
                }, [e._v(e._s(e.cooldownText))])])
            }
            , ke = [];
        let Me = class extends d["c"] {
            get cooldownText() {
                return "(Перезарядка ".concat(this.cooldown, " ").concat(X(this.cooldown, "секунда", "секунды", "секунд"), ")")
            }
        }
            ;
        l["a"]([Object(d["b"])(String)], Me.prototype, "description", void 0),
            l["a"]([Object(d["b"])(Number)], Me.prototype, "cooldown", void 0),
            Me = l["a"]([Object(d["a"])({})], Me);
        var Se = Me
            , Te = Se
            , Ie = (i("06c3"),
                Object(D["a"])(Te, we, ke, !1, null, "794f3888", null))
            , Pe = Ie.exports;
        let Ae = class extends d["c"] {
            get chance() {
                return void 0 !== this.values.rate ? "".concat(this.values.rate, "%") : "100%"
            }
            get level() {
                return this.skillLevels[this.skill] || 0
            }
            get values() {
                return Z(this.config, this.level)
            }
            get nextLevelValues() {
                return Z(this.config, this.level + 1)
            }
            get config() {
                return O[this.skill]
            }
            onLevelUpButtonClick() {
                var e = this;
                return Object(s["a"])(function* () {
                    yield e.asyncOperation({
                        type: r.LevelUpSkill,
                        payload: e.skill
                    }),
                        e.values.canLevelUp || e.$emit("close")
                })()
            }
        }
            ;
        l["a"]([Object(d["b"])(String)], Ae.prototype, "skill", void 0),
            l["a"]([Object(g["c"])(e => e.player.skillLevels)], Ae.prototype, "skillLevels", void 0),
            l["a"]([Object(g["a"])(r.AsyncOperation)], Ae.prototype, "asyncOperation", void 0),
            Ae = l["a"]([Object(d["a"])({
                components: {
                    Popup: he,
                    SkillIcon: xe,
                    SkillDescription: Pe,
                    Currency: F
                }
            })], Ae);
        var Oe = Ae
            , je = Oe
            , Be = (i("de35"),
                Object(D["a"])(je, re, ce, !1, null, "15693d57", null))
            , Re = Be.exports
            , Le = function () {
                var e = this
                    , t = e.$createElement
                    , i = e._self._c || t;
                return i("Popup", {
                    attrs: {
                        hasCloseButton: !0
                    }
                }, [i("div", {
                    staticClass: "popup-header"
                }, [e._v("\n    Адаптация\n  ")]), i("div", {
                    staticClass: "adaptations-container text-outline-black"
                }, [i("div", [e._v("\n      Способность, использованная сразу после адаптации, полностью изменяет свой эффект.\n    ")]), i("div", [i("span", {
                    staticClass: "skill-highlight"
                }, [e._v("Аура")]), e._v(" дает "), i("span", {
                    staticClass: "updated"
                }, [e._v("длительную")]), e._v(" защиту от отталкивания и вражеской ауры.\n    ")]), i("div", {
                    staticClass: "updated"
                }, [i("span", {
                    staticClass: "skill-highlight"
                }, [e._v("Нестабильность")]), e._v(" моментально соединяет все круги воедино с потерей 40% массы.\n    ")]), i("div", [i("span", {
                    staticClass: "skill-highlight"
                }, [e._v("Ослепление")]), e._v(" запрещает оппоненту использовать кнопку W.\n    ")]), i("div", [i("span", {
                    staticClass: "skill-highlight"
                }, [e._v("Отталкивание")]), e._v(" обменивает местами ваш круг и круг оппонента. Чтобы умение сработало, масса кругов должна отличаться не более чем на 25%, а расстояние между ними должно быть не слишком большим.\n    ")]), i("div", [i("span", {
                    staticClass: "skill-highlight"
                }, [e._v("Премиум способность")]), e._v(" парализует, цель не может менять направление движения.\n    ")]), i("div", [i("span", {
                    staticClass: "skill-highlight"
                }, [e._v("Телепортация")]), e._v(" сохраняет свой эффект, но намного чаще переносит на дальние дистанции и соединяет все круги воедино.\n    ")])])])
            }
            , Ue = [];
        let Ee = class extends d["c"] {
        }
            ;
        Ee = l["a"]([Object(d["a"])({
            components: {
                Popup: he
            }
        })], Ee);
        var De = Ee
            , Ne = De
            , Fe = (i("a136"),
                Object(D["a"])(Ne, Le, Ue, !1, null, "15726dde", null))
            , Xe = Fe.exports;
        let Ge = class extends d["c"] {
            get level() {
                return this.skillLevels[this.skill] || 0
            }
            get level1Price() {
                return O[this.skill].levels[0].price
            }
            get values() {
                return Z(this.config, this.level || 1)
            }
            get config() {
                return O[this.skill]
            }
            get isAdaptation() {
                return this.skill === w.Adaptation
            }
            onButtonLevelUpClick() {
                this.level ? this.openPopup({
                    type: Re,
                    skill: this.skill
                }) : this.asyncOperation({
                    type: r.LevelUpSkill,
                    payload: this.skill
                })
            }
            onButtonAdaptationClick() {
                this.openPopup({
                    type: Xe
                })
            }
        }
            ;
        l["a"]([Object(d["b"])(String)], Ge.prototype, "skill", void 0),
            l["a"]([Object(g["c"])(e => e.player.skillLevels)], Ge.prototype, "skillLevels", void 0),
            l["a"]([Object(g["a"])(r.OpenPopup)], Ge.prototype, "openPopup", void 0),
            l["a"]([Object(g["a"])(r.AsyncOperation)], Ge.prototype, "asyncOperation", void 0),
            Ge = l["a"]([Object(d["a"])({
                components: {
                    SkillIcon: xe,
                    SkillDescription: Pe,
                    Currency: F
                }
            })], Ge);
        var ze = Ge
            , Ve = ze
            , We = (i("9dd3"),
                Object(D["a"])(Ve, ae, oe, !1, null, "5eeba4bc", null))
            , qe = We.exports
            , Ye = function () {
                var e = this
                    , t = e.$createElement
                    , i = e._self._c || t;
                return i("div", {
                    staticClass: "currency-row",
                    class: e.type
                }, [i("div", {
                    staticClass: "icon",
                    class: e.iconClass
                }), i("div", {
                    staticClass: "value"
                }, [e._v(e._s(e._f("thousandSeparator")(e.value)))]), i("div", {
                    staticClass: "button-shop",
                    class: e.shopButtonClass,
                    on: {
                        click: e.onShopButtonClick
                    }
                })])
            }
            , He = []
            , Je = function () {
                var e = this
                    , t = e.$createElement
                    , i = e._self._c || t;
                return i("div", {
                    staticClass: "shop-popup"
                }, [i("div", {
                    staticClass: "tab-bar-container",
                    on: {
                        click: function (e) {
                            e.stopPropagation()
                        }
                    }
                }, [i("div", {
                    staticClass: "tab-side",
                    class: e.coinsTab ? "selected sprite-tab-side-selected" : "sprite-tab-side",
                    on: {
                        mousedown: function (t) {
                            e.tabType = "coins"
                        }
                    }
                }, [i("div", {
                    staticClass: "tab-icon sprite-icon-coin"
                })]), i("div", {
                    staticClass: "tab-side",
                    class: e.gemsTab ? "selected sprite-tab-side-selected" : "sprite-tab-side",
                    on: {
                        mousedown: function (t) {
                            e.tabType = "gems"
                        }
                    }
                }, [i("div", {
                    staticClass: "tab-icon sprite-icon-gem"
                })])]), i("Popup", {
                    attrs: {
                        hasCloseButton: !0
                    }
                }, [i("div", {
                    staticClass: "shop-rows-container"
                }, e._l(e.items, function (t, n) {
                    return i("div", {
                        key: e.tabType + " " + n,
                        staticClass: "shop-row"
                    }, [i("Currency", {
                        staticClass: "amount text-outline-black",
                        attrs: {
                            iconSize: 46,
                            currency: t.amount
                        }
                    }), i("div", {
                        staticClass: "button-buy pushable sprite-button-blue",
                        class: {
                            disabled: e.coinsTab && !e.canBuyCoins(t)
                        },
                        on: {
                            click: function (i) {
                                return e.onButtonBuyClick(t)
                            }
                        }
                    }, [e.coinsTab ? i("Currency", {
                        staticClass: "move-1px",
                        attrs: {
                            currency: t.price
                        }
                    }) : e.gemsTab ? i("span", [e._v(e._s(e.getGemsPrice(t)))]) : e._e()], 1)], 1)
                }), 0)])], 1)
            }
            , Ke = [];
        const $e = [{
            amount: {
                coins: 3e3
            },
            price: {
                gems: 100
            }
        }, {
            amount: {
                coins: 9e3
            },
            price: {
                gems: 300
            }
        }, {
            amount: {
                coins: 16e3
            },
            price: {
                gems: 500
            }
        }, {
            amount: {
                coins: 32500
            },
            price: {
                gems: 1e3
            }
        }, {
            amount: {
                coins: 1e5
            },
            price: {
                gems: 3e3
            }
        }]
            , Ze = [{
                amount: {
                    gems: 1e3
                },
                price: {
                    ok: 50,
                    vk: 5
                },
                name: "1000 кристаллов",
                descripton: "",
                id: "gems_1000"
            }, {
                amount: {
                    gems: 2e3
                },
                price: {
                    ok: 100,
                    vk: 10
                },
                name: "2000 кристаллов",
                descripton: "",
                id: "gems_2000"
            }, {
                amount: {
                    gems: 5e3
                },
                price: {
                    ok: 250,
                    vk: 25
                },
                name: "5000 кристаллов",
                descripton: "",
                id: "gems_5000"
            }, {
                amount: {
                    gems: 10500
                },
                price: {
                    ok: 490,
                    vk: 49
                },
                name: "10500 кристаллов",
                descripton: "",
                id: "gems_10500"
            }, {
                amount: {
                    gems: 22500
                },
                price: {
                    ok: 990,
                    vk: 99
                },
                name: "22500 кристаллов",
                descripton: "",
                id: "gems_22500"
            }];
        var Qe, et, tt, it;
        (function (e) {
            e["Vk"] = "vk",
                e["Ok"] = "ok",
                e["None"] = "none"
        }
        )(Qe || (Qe = {})),
            function (e) {
                e["Direct"] = "direct",
                    e["Viral"] = "viral",
                    e["Ad"] = "ad"
            }(et || (et = {})),
            function (e) {
                e["JoinGroup"] = "joinGroup",
                    e["InviteFriends"] = "inviteFriends",
                    e["WallPost"] = "wallPost",
                    e["AddBooksmarks"] = "addBookmarks"
            }(tt || (tt = {})),
            function (e) {
                e["BestMassAllTime"] = "bestMassAllTime",
                    e["BestMassMonthly"] = "bestMassMonthly",
                    e["SecondsInTopAllTime"] = "secondsInTopAllTime",
                    e["SecondsInTopMonthly"] = "secondsInTopMonthly",
                    e["MvpsWonAllTime"] = "mvpsWonAllTime",
                    e["MvpsWonMonthly"] = "mvpsWonMonthly",
                    e["BestMvpMassAllTime"] = "bestMvpMassAllTime",
                    e["BestMvpMassMonthly"] = "bestMvpMassMonthly"
            }(it || (it = {}));
        const nt = {
            Country: {
                name: "Флаги"
            },
            Meme: {
                name: "Мемы"
            },
            Misc: {
                name: "Разное"
            },
            MvpCoins: {
                name: "За изумруды"
            },
            Texts: {
                name: "Общение"
            }
        }
            , st = {
                [Qe.Vk]: {
                    appId: "",
                    appUrl: "https://vk.com/app6823175",
                    currency: ["голос", "голоса", "голосов"],
                    groupId: "179211890",
                    groupUrl: "https://vk.com/circles_club",
                    userProfileUrlTemplate: "https://vk.com/id{{USER_ID}}",
                    defaultPhoto: "https://vk.com/images/camera_50.png"
                },
                [Qe.Ok]: {
                    appId: "",
                    appUrl: "",
                    currency: ["ОК", "ОК", "ОК"],
                    groupId: "56152174231574",
                    groupUrl: "https://ok.ru/group/56152174231574",
                    userProfileUrlTemplate: "https://ok.ru/profile/{{USER_ID}}",
                    defaultPhoto: "https://i.mycdn.me/res/stub_50x50.gif"
                },
                [Qe.None]: {
                    appId: "",
                    appUrl: "",
                    currency: ["голос", "голоса", "голосов"],
                    groupId: "",
                    groupUrl: "",
                    userProfileUrlTemplate: "https://vk.com/id0",
                    defaultPhoto: "https://vk.com/images/camera_50.png"
                }
            }
            , at = {
                message: "Присоединяйся к новому онлайн проекту, в котором тебе предстоит сражаться с другими игроками! Докажи, что ты - сильнейший!",
                title: "Круги",
                bannerUrl: "https://pp.userapi.com/c846324/v846324784/1ca163/3JX347gT6Ns.jpg"
            }
            , ot = {
                gems: 2e3
            }
            , rt = {
                gems: 1e3
            }
            , ct = {
                gems: 500
            }
            , pt = 22
            , lt = {
                itemId: "vip_7",
                price: {
                    vk: 15,
                    ok: 150,
                    none: 15
                }
            }
            , dt = [{
                coins: 500
            }, {
                coins: 750
            }, {
                coins: 1e3
            }, {
                coins: 1500
            }, {
                coins: 2e3
            }];
        let gt = class extends d["c"] {
            constructor() {
                super(...arguments),
                    this.tabType = this.initialTab
            }
            get items() {
                return this.coinsTab ? $e : this.gemsTab ? Ze : []
            }
            get coinsTab() {
                return "coins" === this.tabType
            }
            get gemsTab() {
                return "gems" === this.tabType
            }
            getGemsPrice(e) {
                const t = st[this.socialNetworkType]
                    , i = e.price[this.socialNetworkType] || 0;
                return "".concat(i, " ").concat(X(i, ...t.currency))
            }
            canBuyCoins(e) {
                const t = e.price.gems;
                return void 0 === t || t <= this.gems
            }
            onButtonBuyClick(e) {
                this.coinsTab ? this.asyncOperation({
                    type: r.BuyCoins,
                    payload: e
                }) : this.gemsTab && this.buyGems(e)
            }
        }
            ;
        l["a"]([Object(d["b"])(String)], gt.prototype, "initialTab", void 0),
            l["a"]([Object(g["c"])(e => e.player.gems)], gt.prototype, "gems", void 0),
            l["a"]([Object(g["a"])(r.AsyncOperation)], gt.prototype, "asyncOperation", void 0),
            l["a"]([Object(g["c"])(e => e.player.socialProfile.type)], gt.prototype, "socialNetworkType", void 0),
            l["a"]([Object(g["a"])(r.BuyGems)], gt.prototype, "buyGems", void 0),
            gt = l["a"]([Object(d["a"])({
                components: {
                    Popup: he,
                    Currency: F
                }
            })], gt);
        var ut = gt
            , mt = ut
            , ht = (i("af3e"),
                Object(D["a"])(mt, Je, Ke, !1, null, "8b99d264", null))
            , ft = ht.exports
            , yt = function () {
                var e = this
                    , t = e.$createElement
                    , i = e._self._c || t;
                return i("Popup", {
                    attrs: {
                        hasCloseButton: !0
                    }
                }, [i("div", {
                    staticClass: "popup-header"
                }, [e._v("Портал массы")]), i("div", {
                    staticClass: "mvp-hint top text-outline-black"
                }, [e._v("\n        Ежедневно и по расписанию открывается "), i("span", {
                    staticStyle: {
                        color: "gold"
                    }
                }, [e._v("Портал массы.")]), i("br"), e._v("\n        Отправляйте через него массу и соревнуйтесь с другими игроками. Тот, кто отправит больше всех массы, получит изумруд.\n    ")]), i("div", {
                    staticClass: "mvp-fog"
                }), i("div", {
                    staticClass: "mvp"
                }), i("div", {
                    staticClass: "mvp-hint bot text-outline-black"
                }, [e._v("\n        Расписание открытия портала: "), i("span", {
                    staticStyle: {
                        color: "gold"
                    }
                }, [e._v("00:00, 04:00, 08:00, 10:00, 12:00 и каждый час с 14:00 до 22:00")]), e._v("\n        по московскому времени. Обратите внимание: портал открывается лишь в одной из игровых комнат.\n    ")])])
            }
            , bt = [];
        let vt = class extends d["c"] {
        }
            ;
        vt = l["a"]([Object(d["a"])({
            components: {
                Popup: he
            }
        })], vt);
        var _t = vt
            , Ct = _t
            , xt = (i("da05"),
                Object(D["a"])(Ct, yt, bt, !1, null, "248892fc", null))
            , wt = xt.exports;
        let kt = class extends d["c"] {
            get shopButtonClass() {
                return "gems" === this.type ? "sprite-button-green-round" : "coins" === this.type || "mvpcoins" === this.type ? "sprite-button-blue-round" : null
            }
            get iconClass() {
                return "gems" === this.type ? "sprite-icon-gem" : "coins" === this.type ? "sprite-icon-coin" : "mvpcoins" === this.type ? "sprite-icon-mvp-coin" : null
            }
            onShopButtonClick() {
                "mvpcoins" === this.type ? this.openPopup({
                    type: wt
                }) : "gems" !== this.type && "coins" !== this.type || this.openPopup({
                    type: ft,
                    initialTab: this.type
                })
            }
        }
            ;
        l["a"]([Object(d["b"])(String)], kt.prototype, "type", void 0),
            l["a"]([Object(d["b"])(Number)], kt.prototype, "value", void 0),
            l["a"]([Object(g["a"])(r.OpenPopup)], kt.prototype, "openPopup", void 0),
            kt = l["a"]([Object(d["a"])({})], kt);
        var Mt = kt
            , St = Mt
            , Tt = (i("dd11"),
                Object(D["a"])(St, Ye, He, !1, null, "1d0ac96e", null))
            , It = Tt.exports
            , Pt = function () {
                var e = this
                    , t = e.$createElement
                    , i = e._self._c || t;
                return i("Popup", {
                    attrs: {
                        hasCloseButton: !0
                    }
                }, [i("div", {
                    staticClass: "tab-bar-container"
                }, e._l(e.categories, function (t) {
                    return i("div", {
                        key: t.name,
                        staticClass: "tab",
                        class: e.currentCategory === t ? "selected sprite-tab-selected" : "sprite-tab",
                        on: {
                            mousedown: function (i) {
                                return e.onTabMousedown(t)
                            }
                        }
                    }, [i("span", {
                        staticClass: "tab-text",
                        class: {
                            compact: t.name.length > 10
                        }
                    }, [e._v("\n                " + e._s(t.name) + "\n            ")])])
                }), 0), e.page > 0 ? i("div", {
                    staticClass: "button-scroll sprite-button-scroll-up",
                    on: {
                        click: function (t) {
                            e.page = e.page - 1
                        }
                    }
                }) : e._e(), e.page < e.maxPage ? i("div", {
                    staticClass: "button-scroll sprite-button-scroll-down",
                    on: {
                        click: function (t) {
                            e.page = e.page + 1
                        }
                    }
                }) : e._e(), i("div", {
                    staticClass: "skins-page"
                }, [i("div", {
                    staticClass: "skins-page-content"
                }, e._l(e.skinsOnPage, function (t) {
                    return i("div", {
                        key: t.id,
                        staticClass: "skin"
                    }, [i("div", {
                        staticClass: "skin-preview-container"
                    }, [i("div", {
                        staticClass: "skin-preview",
                        style: {
                            "background-image": e.getSkinBg(t)
                        }
                    })]), t.id === e.currentSkin ? i("div", {
                        staticClass: "sprite-icon-v"
                    }) : e._e(), i("div", {
                        staticClass: "button-skin sprite-button-blue-small",
                        on: {
                            click: function (i) {
                                return e.onSkinButtonClick(t)
                            }
                        }
                    }, [t.id === e.currentSkin ? [e._v("\n                        Снять\n                    ")] : t.id in e.skins ? [e._v("\n                        Выбрать\n                    ")] : [i("Currency", {
                        attrs: {
                            currency: t.price
                        }
                    })]], 2)])
                }), 0)])])
            }
            , At = [];
        const Ot = 1630357323e3;
        var jt = [{
            id: "hong",
            category: nt.Country,
            price: {
                coins: 5e3
            }
        }, {
            id: "bhutan",
            category: nt.Country,
            price: {
                coins: 5e3
            }
        }, {
            id: "mann",
            category: nt.Country,
            price: {
                coins: 5e3
            }
        }, {
            id: "india",
            category: nt.Country,
            price: {
                coins: 5e3
            }
        }, {
            id: "colombia",
            category: nt.Country,
            price: {
                coins: 5e3
            }
        }, {
            id: "bangladesh",
            category: nt.Country,
            price: {
                coins: 5e3
            }
        }, {
            id: "laos",
            category: nt.Country,
            price: {
                coins: 5e3
            }
        }, {
            id: "macau",
            category: nt.Country,
            price: {
                coins: 5e3
            }
        }, {
            id: "romania",
            category: nt.Country,
            price: {
                coins: 5e3
            }
        }, {
            id: "argentina",
            category: nt.Country,
            price: {
                coins: 5e3
            }
        }, {
            id: "israel",
            category: nt.Country,
            price: {
                coins: 5e3
            }
        }, {
            id: "turk",
            category: nt.Country,
            price: {
                coins: 5e3
            }
        }, {
            id: "somalia",
            category: nt.Country,
            price: {
                coins: 5e3
            }
        }, {
            id: "uganda",
            category: nt.Country,
            price: {
                coins: 5e3
            }
        }, {
            id: "eu",
            category: nt.Country,
            price: {
                coins: 5e3
            }
        }, {
            id: "kyrgyz",
            category: nt.Country,
            price: {
                coins: 5e3
            }
        }, {
            id: "brazil",
            category: nt.Country,
            price: {
                coins: 5e3
            }
        }, {
            id: "msk",
            category: nt.Country,
            price: {
                coins: 5e3
            }
        }, {
            id: "russia",
            category: nt.Country,
            price: {
                coins: 5e3
            }
        }, {
            id: "ukraine",
            category: nt.Country,
            price: {
                coins: 5e3
            }
        }, {
            id: "est",
            category: nt.Country,
            price: {
                coins: 5e3
            }
        }, {
            id: "armenia",
            category: nt.Country,
            price: {
                coins: 5e3
            }
        }, {
            id: "azerbaj",
            category: nt.Country,
            price: {
                coins: 5e3
            }
        }, {
            id: "by",
            category: nt.Country,
            price: {
                coins: 5e3
            }
        }, {
            id: "latvia",
            category: nt.Country,
            price: {
                coins: 5e3
            }
        }, {
            id: "litva",
            category: nt.Country,
            price: {
                coins: 5e3
            }
        }, {
            id: "pola",
            category: nt.Country,
            price: {
                coins: 5e3
            }
        }, {
            id: "gruzia",
            category: nt.Country,
            price: {
                coins: 5e3
            }
        }, {
            id: "uzbek",
            category: nt.Country,
            price: {
                coins: 5e3
            }
        }, {
            id: "kazah",
            category: nt.Country,
            price: {
                coins: 5e3
            }
        }, {
            id: "4e4nya",
            category: nt.Country,
            price: {
                coins: 5e3
            }
        }, {
            id: "dagestan",
            category: nt.Country,
            price: {
                coins: 5e3
            }
        }, {
            id: "altay",
            category: nt.Country,
            price: {
                coins: 5e3
            }
        }, {
            id: "bashkorkostan",
            category: nt.Country,
            price: {
                coins: 5e3
            }
        }, {
            id: "buryatiya",
            category: nt.Country,
            price: {
                coins: 5e3
            }
        }, {
            id: "chuvashiya",
            category: nt.Country,
            price: {
                coins: 5e3
            }
        }, {
            id: "adigeya",
            category: nt.Country,
            price: {
                coins: 5e3
            }
        }, {
            id: "hakasiya",
            category: nt.Country,
            price: {
                coins: 5e3
            }
        }, {
            id: "ingushetiya",
            category: nt.Country,
            price: {
                coins: 5e3
            }
        }, {
            id: "kabardinbalkar",
            category: nt.Country,
            price: {
                coins: 5e3
            }
        }, {
            id: "kalmikiya",
            category: nt.Country,
            price: {
                coins: 5e3
            }
        }, {
            id: "kara4erkesk",
            category: nt.Country,
            price: {
                coins: 5e3
            }
        }, {
            id: "kareliya",
            category: nt.Country,
            price: {
                coins: 5e3
            }
        }, {
            id: "komi",
            category: nt.Country,
            price: {
                coins: 5e3
            }
        }, {
            id: "mariel",
            category: nt.Country,
            price: {
                coins: 5e3
            }
        }, {
            id: "mordovia",
            category: nt.Country,
            price: {
                coins: 5e3
            }
        }, {
            id: "sevosetiya",
            category: nt.Country,
            price: {
                coins: 5e3
            }
        }, {
            id: "tatarstan",
            category: nt.Country,
            price: {
                coins: 5e3
            }
        }, {
            id: "tuva",
            category: nt.Country,
            price: {
                coins: 5e3
            }
        }, {
            id: "udmurt",
            category: nt.Country,
            price: {
                coins: 5e3
            }
        }, {
            id: "yakutiya",
            category: nt.Country,
            price: {
                coins: 5e3
            }
        }, {
            id: "usa",
            category: nt.Country,
            price: {
                coins: 5e3
            }
        }, {
            id: "china",
            category: nt.Country,
            price: {
                coins: 5e3
            }
        }, {
            id: "ussr",
            category: nt.Country,
            price: {
                coins: 5e3
            }
        }, {
            id: "britain",
            category: nt.Country,
            price: {
                coins: 5e3
            }
        }, {
            id: "che",
            category: nt.Country,
            price: {
                coins: 5e3
            }
        }, {
            id: "canad",
            category: nt.Country,
            price: {
                coins: 5e3
            }
        }, {
            id: "dania",
            category: nt.Country,
            price: {
                coins: 5e3
            }
        }, {
            id: "franc",
            category: nt.Country,
            price: {
                coins: 5e3
            }
        }, {
            id: "germ",
            category: nt.Country,
            price: {
                coins: 5e3
            }
        }, {
            id: "fin",
            category: nt.Country,
            price: {
                coins: 5e3
            }
        }, {
            id: "greek",
            category: nt.Country,
            price: {
                coins: 5e3
            }
        }, {
            id: "ispan",
            category: nt.Country,
            price: {
                coins: 5e3
            }
        }, {
            id: "ital",
            category: nt.Country,
            price: {
                coins: 5e3
            }
        }, {
            id: "japan",
            category: nt.Country,
            price: {
                coins: 5e3
            }
        }, {
            id: "korea",
            category: nt.Country,
            price: {
                coins: 5e3
            }
        }, {
            id: "norv",
            category: nt.Country,
            price: {
                coins: 5e3
            }
        }, {
            id: "sweden",
            category: nt.Country,
            price: {
                coins: 5e3
            }
        }, {
            id: "giga",
            category: nt.Meme,
            price: {
                gems: 9e3
            }
        }, {
            id: "anim1",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "anim2",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "anim3",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "gubka",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "transparent",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "anim4",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "facepalm",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "kana",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "drstone",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "ikuya",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "rabbit",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "smile3",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "popit2",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "popit1",
            category: nt.Meme,
            price: {
                coins: 1e6
            }
        }, {
            id: "popit3",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "snapperz2",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "snapperz3",
            category: nt.Meme,
            price: {
                coins: 1e6
            }
        }, {
            id: "snapperz1",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "mikuhatsune",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "sailormoon",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "smile2",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "smile",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "catmeme2",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "animeface",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "animeface2",
            category: nt.Meme,
            price: {
                coins: 1e6
            }
        }, {
            id: "happy",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "luffy",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "squirtle",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "taksoidet",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "charlie",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "before",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "after",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "dino",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "face",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "frog",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "ks",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "ks2",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "pigeon_gang",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "root",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "ore",
            category: nt.Meme,
            price: {
                coins: 1e6
            }
        }, {
            id: "ufo",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "wolfy",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "bweed",
            category: nt.Meme,
            price: {
                coins: 1e6
            }
        }, {
            id: "catmeme",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "emo",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "gang",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "gumball",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "harold",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "natash",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "paper",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "stones",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "weide",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "foxy",
            category: nt.Meme,
            price: {
                coins: 5e3
            }
        }, {
            id: "anon",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "goosedie",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "puffed",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "smug",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "riddler",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "wry",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "seagull",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "pivko",
            category: nt.Meme,
            price: {
                coins: 1e6
            }
        }, {
            id: "sonic",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "nyricardo",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "alien",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "bear",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "boo",
            category: nt.Meme,
            price: {
                coins: 1e6
            }
        }, {
            id: "daddy",
            category: nt.Meme,
            price: {
                coins: 5e5
            }
        }, {
            id: "daddy2",
            category: nt.Meme,
            price: {
                coins: 5e5
            }
        }, {
            id: "cat",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "invader",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "dinnercat2",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "dinnercat",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "gastly",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "02",
            category: nt.Meme,
            price: {
                coins: 1e6
            }
        }, {
            id: "onepunch",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "onepunch2",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "jake",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "batman",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "bender",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "doraemon",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "ghost",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "goose",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "bokbok2",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "sup",
            category: nt.Meme,
            price: {
                coins: 3e6
            }
        }, {
            id: "hp",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "stomach",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "totoro",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "squid",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "kerope",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "bsod",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "bokbok",
            category: nt.Meme,
            price: {
                coins: 1e6
            }
        }, {
            id: "dio",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "kotorimeme",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "shrek",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "tohr",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "sup_china",
            category: nt.Meme,
            price: {
                coins: 1e4
            }
        }, {
            id: "kir",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "fawkes",
            category: nt.Meme,
            price: {
                coins: 1e6
            }
        }, {
            id: "slow",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "awoo",
            category: nt.Meme,
            price: {
                coins: 1e6
            }
        }, {
            id: "yaranaika",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "thomas",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "tom",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "creeper",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "fawkes2",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "trololo",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "burndog",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "gangdam",
            category: nt.Meme,
            price: {
                coins: 1e6
            }
        }, {
            id: "pepega",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "sm001",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "sm002",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "sm003",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "sm004",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "sm005",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "evil_kermit",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "peka",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "doge",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "awesome",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "fry",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "guybutterfly",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "nick_young",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "nyan",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "pepe",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "pika",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "success_kid",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "spongebob",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "willywonka",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "thinking",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "ricardo",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "knukles",
            category: nt.Meme,
            price: {
                gems: 700
            }
        }, {
            id: "abstract",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "abstract1",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "abstract2",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "abstract3",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "abstract4",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "abstract5",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "abstract6",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "dart",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "flower",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "fur3",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "scale",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "abstract7",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "abstract8",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "abstract9",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "abstract10",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "abstract11",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "foil2",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "citrus",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "balls2",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "balls",
            category: nt.Misc,
            price: {
                coins: 1e6
            }
        }, {
            id: "game",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "mandarin",
            category: nt.Misc,
            price: {
                coins: 1e6
            }
        }, {
            id: "wkyra",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "ornam37",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "ornam38",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "ornam39",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "ornam40",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "ornam41",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "ornam42",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "ornam43",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "water3",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "deck",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "droplet",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "fish",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "fish2",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "fractal6",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "fractal7",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "pelmen",
            category: nt.Misc,
            price: {
                coins: 1e6
            }
        }, {
            id: "jellyfish",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "jellyfish2",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "leaves",
            category: nt.Misc,
            price: {
                coins: 1e6
            }
        }, {
            id: "pumpkin6",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "apples",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "grape",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "leaf3",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "pebble",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "sea3",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "sunflowers",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "leaf2",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "raspberry1",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "raspberry2",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "strawberry1",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "apricot",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "sea",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "sea2",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "honey2",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "shells",
            category: nt.Misc,
            price: {
                coins: 1e6
            }
        }, {
            id: "ornam24",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "ornam26",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "ornam27",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "ornam28",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "ripple",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "ornam30",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "dragon",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "hands",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "tunnel",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "ornam23",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "ornam25",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "ornam22",
            category: nt.Misc,
            price: {
                coins: 1e6
            }
        }, {
            id: "ball8",
            category: nt.Misc,
            price: {
                coins: 1e6
            }
        }, {
            id: "ball9",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "ball10",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "ball11",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "pine2",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "hearts2",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "heart1",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "heart4",
            category: nt.Misc,
            price: {
                coins: 1e6
            }
        }, {
            id: "heart5",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "heart6",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "cow_pattern",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "ball2",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "ball3",
            category: nt.Misc,
            price: {
                coins: 1e6
            }
        }, {
            id: "ball4",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "ball5",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "ball6",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "ball7",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "cd",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "veryrich2",
            category: nt.Misc,
            price: {
                gems: 1e5
            }
        }, {
            id: "clock",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "crystal3",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "crystal4",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "eye",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "eye2",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "firework",
            category: nt.Misc,
            price: {
                coins: 1e6
            }
        }, {
            id: "firework2",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "gun",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "heat",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "mud",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "penny",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "rub",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "pill",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "pine",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "pizza",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "present",
            category: nt.Misc,
            price: {
                coins: 1e6
            }
        }, {
            id: "snowman2",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "stop",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "wave",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "yy",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "pumpkin4",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "pumpkin5",
            category: nt.Misc,
            price: {
                coins: 5e5
            }
        }, {
            id: "coal",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "coin",
            category: nt.Misc,
            price: {
                coins: 5e6
            }
        }, {
            id: "cucu",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "fractal3",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "fur2",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "gel",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "glitter",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "grass2",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "hearts",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "leaf",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "nosignal2",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "peel",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "pineapple",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "pumpkin",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "strawb",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "tiger",
            category: nt.Misc,
            price: {
                coins: 1e6
            }
        }, {
            id: "tortoise",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "water",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "water2",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "zebr",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "veryrich",
            category: nt.Misc,
            price: {
                gems: 1e5
            }
        }, {
            id: "cutflower",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "chicks",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "cow",
            category: nt.Misc,
            price: {
                coins: 1e6
            }
        }, {
            id: "ege",
            category: nt.Misc,
            price: {
                coins: 5e5
            }
        }, {
            id: "pie",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "raspjam",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "seadog",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "spider",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "ape",
            category: nt.Misc,
            price: {
                coins: 1e6
            }
        }, {
            id: "coffee",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "crystal2",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "grass",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "khaki",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "ornam4",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "ornam5",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "outlet",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "pomeg",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "rich",
            category: nt.Misc,
            price: {
                gems: 9e3
            }
        }, {
            id: "seal",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "tennis",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "crab",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "lion",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "ornam2",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "sponge",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "whirpool",
            category: nt.Misc,
            price: {
                coins: 1e6
            }
        }, {
            id: "ornam",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "broccoli",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "alpaca",
            category: nt.Misc,
            price: {
                coins: 1e6
            }
        }, {
            id: "wwf",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "hamster",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "sad",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "jdm",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "rat",
            category: nt.Misc,
            price: {
                coins: 1e6
            }
        }, {
            id: "darkmoon",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "deer",
            category: nt.Misc,
            price: {
                coins: 5e5
            }
        }, {
            id: "deer2",
            category: nt.Misc,
            price: {
                coins: 5e5
            }
        }, {
            id: "dota",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "fractal",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "incognito",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "matrix",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "ball",
            category: nt.Misc,
            price: {
                coins: 1e6
            }
        }, {
            id: "snowman",
            category: nt.Misc,
            price: {
                coins: 5e5
            }
        }, {
            id: "snowflake",
            category: nt.Misc,
            price: {
                coins: 1e5
            }
        }, {
            id: "wolf",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "carpet",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "fara",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "nosignal",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "sausage",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "kiwi",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "dog_nose",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "apple",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "scream",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "fur",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "sunflower",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "disco",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "cracker",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "orange",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "forbidden",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "blackhole",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "watermelon",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "earth",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "moon",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "mars",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "nasa",
            category: nt.Misc,
            price: {
                gems: 700
            }
        }, {
            id: "ornam48",
            category: nt.MvpCoins,
            price: {
                mvpCoins: 15
            }
        }, {
            id: "ornam49",
            category: nt.MvpCoins,
            price: {
                mvpCoins: 30
            }
        }, {
            id: "ornam50",
            category: nt.MvpCoins,
            price: {
                mvpCoins: 20
            }
        }, {
            id: "ornam51",
            category: nt.MvpCoins,
            price: {
                mvpCoins: 30
            }
        }, {
            id: "ornam52",
            category: nt.MvpCoins,
            price: {
                mvpCoins: 10
            }
        }, {
            id: "ornam53",
            category: nt.MvpCoins,
            price: {
                mvpCoins: 20
            }
        }, {
            id: "ornam44",
            category: nt.MvpCoins,
            price: {
                mvpCoins: 10
            }
        }, {
            id: "ornam46",
            category: nt.MvpCoins,
            price: {
                mvpCoins: 25
            }
        }, {
            id: "ornam47",
            category: nt.MvpCoins,
            price: {
                mvpCoins: 20
            }
        }, {
            id: "aurora",
            category: nt.MvpCoins,
            price: {
                mvpCoins: 20
            }
        }, {
            id: "ice",
            category: nt.MvpCoins,
            price: {
                mvpCoins: 20
            }
        }, {
            id: "bad",
            category: nt.MvpCoins,
            price: {
                mvpCoins: 10
            }
        }, {
            id: "ornam32",
            category: nt.MvpCoins,
            price: {
                mvpCoins: 10
            }
        }, {
            id: "ornam33",
            category: nt.MvpCoins,
            price: {
                mvpCoins: 15
            }
        }, {
            id: "ornam34",
            category: nt.MvpCoins,
            price: {
                mvpCoins: 30
            }
        }, {
            id: "ornam35",
            category: nt.MvpCoins,
            price: {
                mvpCoins: 20
            }
        }, {
            id: "splash1",
            category: nt.MvpCoins,
            price: {
                mvpCoins: 20
            }
        }, {
            id: "splash2",
            category: nt.MvpCoins,
            price: {
                mvpCoins: 20
            }
        }, {
            id: "splash3",
            category: nt.MvpCoins,
            price: {
                mvpCoins: 20
            }
        }, {
            id: "splash4",
            category: nt.MvpCoins,
            price: {
                mvpCoins: 20
            }
        }, {
            id: "tunnel2",
            category: nt.MvpCoins,
            price: {
                mvpCoins: 10
            }
        }, {
            id: "tunnel3",
            category: nt.MvpCoins,
            price: {
                mvpCoins: 10
            }
        }, {
            id: "tunnel4",
            category: nt.MvpCoins,
            price: {
                mvpCoins: 5
            }
        }, {
            id: "ball12",
            category: nt.MvpCoins,
            price: {
                mvpCoins: 15
            }
        }, {
            id: "flame",
            category: nt.MvpCoins,
            price: {
                mvpCoins: 20
            }
        }, {
            id: "foil",
            category: nt.MvpCoins,
            price: {
                mvpCoins: 10
            }
        }, {
            id: "fractal4",
            category: nt.MvpCoins,
            price: {
                mvpCoins: 5
            }
        }, {
            id: "fractal5",
            category: nt.MvpCoins,
            price: {
                mvpCoins: 10
            }
        }, {
            id: "gel2",
            category: nt.MvpCoins,
            price: {
                mvpCoins: 5
            }
        }, {
            id: "gel3",
            category: nt.MvpCoins,
            price: {
                mvpCoins: 3
            }
        }, {
            id: "glitter2",
            category: nt.MvpCoins,
            price: {
                mvpCoins: 10
            }
        }, {
            id: "hex",
            category: nt.MvpCoins,
            price: {
                mvpCoins: 3
            }
        }, {
            id: "light2",
            category: nt.MvpCoins,
            price: {
                mvpCoins: 10
            }
        }, {
            id: "needles",
            category: nt.MvpCoins,
            price: {
                mvpCoins: 10
            }
        }, {
            id: "ornam29",
            category: nt.MvpCoins,
            price: {
                mvpCoins: 10
            }
        }, {
            id: "sun2",
            category: nt.MvpCoins,
            price: {
                mvpCoins: 10
            }
        }, {
            id: "heart2",
            category: nt.MvpCoins,
            price: {
                mvpCoins: 10
            }
        }, {
            id: "heart3",
            category: nt.MvpCoins,
            price: {
                mvpCoins: 10
            }
        }, {
            id: "clock2",
            category: nt.MvpCoins,
            price: {
                mvpCoins: 5
            }
        }, {
            id: "firework3",
            category: nt.MvpCoins,
            price: {
                mvpCoins: 10
            }
        }, {
            id: "ornam20",
            category: nt.MvpCoins,
            price: {
                mvpCoins: 10
            }
        }, {
            id: "ornam21",
            category: nt.MvpCoins,
            price: {
                mvpCoins: 10
            }
        }, {
            id: "sequin",
            category: nt.MvpCoins,
            price: {
                mvpCoins: 5
            }
        }, {
            id: "sun",
            category: nt.MvpCoins,
            price: {
                mvpCoins: 10
            }
        }, {
            id: "whirpool3",
            category: nt.MvpCoins,
            price: {
                mvpCoins: 10
            }
        }, {
            id: "pumpkin2",
            category: nt.MvpCoins,
            price: {
                mvpCoins: 10
            }
        }, {
            id: "pumpkin3",
            category: nt.MvpCoins,
            price: {
                mvpCoins: 10
            }
        }, {
            id: "lght",
            category: nt.MvpCoins,
            price: {
                mvpCoins: 10
            }
        }, {
            id: "ornam13",
            category: nt.MvpCoins,
            price: {
                mvpCoins: 5
            }
        }, {
            id: "ornam14",
            category: nt.MvpCoins,
            price: {
                mvpCoins: 5
            }
        }, {
            id: "ornam15",
            category: nt.MvpCoins,
            price: {
                mvpCoins: 5
            }
        }, {
            id: "ornam16",
            category: nt.MvpCoins,
            price: {
                mvpCoins: 10
            }
        }, {
            id: "ornam17",
            category: nt.MvpCoins,
            price: {
                mvpCoins: 5
            }
        }, {
            id: "ornam18",
            category: nt.MvpCoins,
            price: {
                mvpCoins: 5
            }
        }, {
            id: "ornam19",
            category: nt.MvpCoins,
            price: {
                mvpCoins: 10
            }
        }, {
            id: "eme",
            category: nt.MvpCoins,
            price: {
                mvpCoins: 55
            }
        }, {
            id: "covid",
            category: nt.MvpCoins,
            price: {
                mvpCoins: 10
            }
        }, {
            id: "ornam9",
            category: nt.MvpCoins,
            price: {
                mvpCoins: 10
            }
        }, {
            id: "ornam10",
            category: nt.MvpCoins,
            price: {
                mvpCoins: 5
            }
        }, {
            id: "ornam11",
            category: nt.MvpCoins,
            price: {
                mvpCoins: 5
            }
        }, {
            id: "ornam12",
            category: nt.MvpCoins,
            price: {
                mvpCoins: 10
            }
        }, {
            id: "galaxy",
            category: nt.MvpCoins,
            price: {
                mvpCoins: 10
            }
        }, {
            id: "fractal2",
            category: nt.MvpCoins,
            price: {
                mvpCoins: 3
            }
        }, {
            id: "alienmatter",
            category: nt.MvpCoins,
            price: {
                mvpCoins: 10
            }
        }, {
            id: "crystal",
            category: nt.MvpCoins,
            price: {
                mvpCoins: 3
            }
        }, {
            id: "lava",
            category: nt.MvpCoins,
            price: {
                mvpCoins: 10
            }
        }, {
            id: "muerte",
            category: nt.MvpCoins,
            price: {
                mvpCoins: 5
            }
        }, {
            id: "ornam6",
            category: nt.MvpCoins,
            price: {
                mvpCoins: 3
            }
        }, {
            id: "ornam7",
            category: nt.MvpCoins,
            price: {
                mvpCoins: 5
            }
        }, {
            id: "ornam8",
            category: nt.MvpCoins,
            price: {
                mvpCoins: 3
            }
        }, {
            id: "portal",
            category: nt.MvpCoins,
            price: {
                mvpCoins: 5
            }
        }, {
            id: "poo",
            category: nt.MvpCoins,
            price: {
                mvpCoins: 10
            }
        }, {
            id: "pop",
            category: nt.MvpCoins,
            price: {
                mvpCoins: 5
            }
        }, {
            id: "whirpool2",
            category: nt.MvpCoins,
            price: {
                mvpCoins: 3
            }
        }, {
            id: "cobra",
            category: nt.MvpCoins,
            price: {
                mvpCoins: 3
            }
        }, {
            id: "givemass",
            category: nt.MvpCoins,
            price: {
                mvpCoins: 10
            }
        }, {
            id: "leopard",
            category: nt.MvpCoins,
            price: {
                mvpCoins: 3
            }
        }, {
            id: "ornam3",
            category: nt.MvpCoins,
            price: {
                mvpCoins: 5
            }
        }, {
            id: "questions",
            category: nt.MvpCoins,
            price: {
                mvpCoins: 5
            }
        }, {
            id: "biohazard",
            category: nt.MvpCoins,
            price: {
                mvpCoins: 3
            }
        }, {
            id: "1337hack",
            category: nt.MvpCoins,
            price: {
                mvpCoins: 10
            }
        }, {
            id: "astaroth",
            category: nt.MvpCoins,
            price: {
                mvpCoins: 10
            }
        }, {
            id: "bts",
            category: nt.MvpCoins,
            price: {
                mvpCoins: 3
            }
        }, {
            id: "hulk",
            category: nt.MvpCoins,
            price: {
                mvpCoins: 5
            }
        }, {
            id: "shark",
            category: nt.MvpCoins,
            price: {
                mvpCoins: 10
            }
        }, {
            id: "shibainu",
            category: nt.MvpCoins,
            price: {
                mvpCoins: 5
            }
        }, {
            id: "nge",
            category: nt.MvpCoins,
            price: {
                mvpCoins: 5
            }
        }, {
            id: "uprt_cat",
            category: nt.MvpCoins,
            price: {
                mvpCoins: 1
            }
        }, {
            id: "uprt_cat2",
            category: nt.MvpCoins,
            price: {
                mvpCoins: 1
            }
        }, {
            id: "uprt_cat3",
            category: nt.MvpCoins,
            price: {
                mvpCoins: 1
            }
        }, {
            id: "uprt_cat4",
            category: nt.MvpCoins,
            price: {
                mvpCoins: 1
            }
        }, {
            id: "uprt_cat5",
            category: nt.MvpCoins,
            price: {
                mvpCoins: 1
            }
        }, {
            id: "uprt_dog",
            category: nt.MvpCoins,
            price: {
                mvpCoins: 2
            }
        }, {
            id: "uprt_dog2",
            category: nt.MvpCoins,
            price: {
                mvpCoins: 2
            }
        }, {
            id: "uprt_dog3",
            category: nt.MvpCoins,
            price: {
                mvpCoins: 2
            }
        }, {
            id: "ty",
            category: nt.Texts,
            price: {
                coins: 1e5
            }
        }, {
            id: "vwkoly",
            category: nt.Texts,
            price: {
                coins: 5e3
            }
        }, {
            id: "txtrat",
            category: nt.Texts,
            price: {
                coins: 1e5
            }
        }, {
            id: "txtserve",
            category: nt.Texts,
            price: {
                coins: 1e5
            }
        }, {
            id: "txtmaster",
            category: nt.Texts,
            price: {
                coins: 1e5
            }
        }, {
            id: "yasno",
            category: nt.Texts,
            price: {
                coins: 1e5
            }
        }, {
            id: "txtbday",
            category: nt.Texts,
            price: {
                coins: 1e5
            }
        }, {
            id: "txtdvoika",
            category: nt.Texts,
            price: {
                coins: 1e5
            }
        }, {
            id: "txti",
            category: nt.Texts,
            price: {
                coins: 1e5
            }
        }, {
            id: "txtlove",
            category: nt.Texts,
            price: {
                coins: 1e5
            }
        }, {
            id: "txtny",
            category: nt.Texts,
            price: {
                coins: 1e5
            }
        }, {
            id: "txtson",
            category: nt.Texts,
            price: {
                coins: 1e5
            }
        }, {
            id: "txtyou",
            category: nt.Texts,
            price: {
                coins: 1e5
            }
        }, {
            id: "eatall",
            category: nt.Texts,
            price: {
                coins: 1e5
            }
        }, {
            id: "iyou",
            category: nt.Texts,
            price: {
                coins: 1e5
            }
        }, {
            id: "lfally",
            category: nt.Texts,
            price: {
                coins: 1e5
            }
        }, {
            id: "lfbf",
            category: nt.Texts,
            price: {
                coins: 1e5
            }
        }, {
            id: "lffriend",
            category: nt.Texts,
            price: {
                coins: 1e5
            }
        }, {
            id: "lfgf",
            category: nt.Texts,
            price: {
                coins: 1e5
            }
        }, {
            id: "lfhsbnd",
            category: nt.Texts,
            price: {
                coins: 1e5
            }
        }, {
            id: "lfmeaning",
            category: nt.Texts,
            price: {
                coins: 1e5
            }
        }, {
            id: "lfwife",
            category: nt.Texts,
            price: {
                coins: 1e5
            }
        }, {
            id: "discord",
            category: nt.Texts,
            price: {
                coins: 1e5
            }
        }, {
            id: "thx",
            category: nt.Texts,
            price: {
                coins: 1e5
            }
        }]
            , Bt = i("a365")
            , Rt = PIXI.loaders.Loader;
        const Lt = i("ba81")
            , Ut = i("d6fc")
            , Et = i("2df5");
        window.globalSkinsGetter = Ut;
        function Dt(e) {
            e.add("aura", Lt("./aura.png")),
                e.add("adaptation", Lt("./adaptation.png")),
                e.add("bg_pattern_1", Lt("./bg-pattern-1.png")),
                e.add("bg_pattern_2", Lt("./bg-pattern-2.png")),
                e.add("bg_pattern_3", Lt("./bg-pattern-3.png")),
                e.add("bg_pattern_4", Lt("./bg-pattern-4.png")),
                e.add("icon_crown", Lt("./icon-crown.png")),
                e.add("icon_lock", Lt("./icon-lock.png")),
                e.add("icon_blind", Lt("./icon-blind.png")),
                e.add("icon_anti_eject", Lt("./icon-anti-eject.png")),
                e.add("icon_infect", Lt("./icon-infect.png")),
                e.add("icon_alt_blind", Lt("./icon-alt-blind.png")),
                e.add("icon_alt_lock", Lt("./icon-alt-lock.png")),
                e.add("pellet", Lt("./pellet.png")),
                e.add("proj_antisplit", Lt("./proj-antisplit.png")),
                e.add("proj_blind", Lt("./proj-blind.png")),
                e.add("virus", Lt("./virus.png")),
                e.add("snowflake", Lt("./snowflake.png")),
                e.add("mvp_arrow", Lt("./mvp-arrow.png")),
                e.add("mvp", Lt("./mvp.png")),
                e.add("mvp_fog", Lt("./mvp-fog.png")),
                e.add("mvp_spawn", Lt("./mvp-spawn.png")),
                e.add("mvp_spawn2", Lt("./mvp-spawn2.png")),
                e.add("proj_mvp_laser", Lt("./proj-mvp-laser.png")),
                e.add("mvp_pellet", Lt("./mvp-pellet.png")),
                e.add("infect", Lt("./infect.png")),
                e.add("infected_mass", Lt("./infected-mass.png")),
                e.add("ufo", Lt("./ufo.png")),
                e.add("ufo_active", Lt("./ufo-active.png")),
                e.add("ufo_overlay", Lt("./ufo-overlay.png")),
                e.add("shield", Lt("./shield.png")),
                e.add("instability", Lt("./instability.png")),
                e.add("skin_default", Ut("./default.png")),
                e.add(Et("./DroidSans.fnt"))
        }
        function Nt() {
            const e = new Rt;
            return e.pre((e, t) => {
                e.metadata.pageFile && (e.name = e.url = Et("./".concat(e.metadata.pageFile))),
                    t()
            }
            ),
                Dt(e),
                new Promise((t, i) => {
                    e.onLoad.add(() => t()),
                        e.onError.add(e => i(e)),
                        e.load()
                }
                )
        }
        function Ft(e) {
            return Xt.apply(this, arguments)
        }
        function Xt() {
            return Xt = Object(s["a"])(function* (e) {
                let t = document.createElement("canvas");
                t.width = 512,
                    t.height = 512;
                const i = [];
                for (let n = 0; n < e.frames.length; ++n) {
                    if (!e.frames[n].image)
                        continue;
                    const s = Object(Bt["decompressFrame"])(e.frames[n], e.gct, !0)
                        , a = t;
                    t = document.createElement("canvas"),
                        t.width = a.width,
                        t.height = a.height;
                    const o = t.getContext("2d");
                    o.drawImage(a, 0, 0);
                    const r = o.createImageData(s.dims.width, s.dims.height);
                    r.data.set(s.patch),
                        o.putImageData(r, s.dims.left, s.dims.top),
                        i.push(PIXI.Texture.from(t)),
                        yield V(0)
                }
                return i.length || i.push(PIXI.Texture.from("skin_default")),
                    i
            }),
                Xt.apply(this, arguments)
        }
        class Gt {
            load(e) {
                const t = Gt.getSkinUrl(e);
                if (t) {
                    const i = Gt.SkinsCache.get(t);
                    if (i instanceof PIXI.Texture && i.valid || i instanceof Array && i.length)
                        return i;
                    if (t.endsWith("gif"))
                        Gt.SkinsCache.set(t, [PIXI.Texture.from("skin_default")]),
                            fetch(t).then(e => e.arrayBuffer()).then(e => Object(Bt["parseGIF"])(e, !0)).then(e => Ft(e)).then(i => {
                                Gt.SkinsCache.set(t, i),
                                    this.onloaded && this.onloaded(e, i)
                            }
                            ).catch(i => console.warn("Failed to load animated skin ".concat(e, " from ").concat(t, ". ").concat(i)));
                    else {
                        const i = PIXI.Texture.from(t);
                        Gt.SkinsCache.set(t, i),
                            i.baseTexture.on("loaded", () => {
                                this.onloaded && this.onloaded(e, i)
                            }
                            ),
                            i.baseTexture.on("error", i => console.warn("Failed to load skin ".concat(e, " from ").concat(t, ". ").concat(i)))
                    }
                }
                return PIXI.Texture.from("skin_default")
            }
            static getSkinUrl(e) {
                try {
                    return Ut("./".concat(e, ".png"))
                } catch (t) { }
                try {
                    return Ut("./".concat(e, ".gif"))
                } catch (i) { }
                return null
            }
        }
        Gt.SkinsCache = new Map;
        const zt = new Gt
            , Vt = 8;
        let Wt = class extends d["c"] {
            constructor() {
                super(...arguments),
                    this.currentCategory = nt.Country,
                    this.page = 0
            }
            get categories() {
                return Object.values(nt)
            }
            get skinsInCategory() {
                return jt.filter(e => e.category === this.currentCategory)
            }
            get skinsOnPage() {
                const e = this.page * Vt
                    , t = e + Vt;
                return this.skinsInCategory.slice(e, t)
            }
            get maxPage() {
                return this.skinsInCategory.length ? Math.trunc((this.skinsInCategory.length - 1) / Vt) : 0
            }
            onSkinButtonClick(e) {
                e.id === this.currentSkin ? this.asyncOperation({
                    type: r.ChangeSkin,
                    payload: ""
                }) : e.id in this.skins ? this.asyncOperation({
                    type: r.ChangeSkin,
                    payload: e.id
                }) : this.asyncOperation({
                    type: r.BuySkin,
                    payload: e
                })
            }
            onTabMousedown(e) {
                this.currentCategory !== e && (this.currentCategory = e,
                    this.page = 0)
            }
            getSkinBg(e) {
                const t = Gt.getSkinUrl(e.id);
                return "url(".concat(t, ")")
            }
        }
            ;
        l["a"]([Object(g["c"])(e => e.player.skins)], Wt.prototype, "skins", void 0),
            l["a"]([Object(g["c"])(e => e.player.currentSkin)], Wt.prototype, "currentSkin", void 0),
            l["a"]([Object(g["a"])(r.AsyncOperation)], Wt.prototype, "asyncOperation", void 0),
            Wt = l["a"]([Object(d["a"])({
                components: {
                    Popup: he,
                    Currency: F
                }
            })], Wt);
        var qt = Wt
            , Yt = qt
            , Ht = (i("06d7"),
                Object(D["a"])(Yt, Pt, At, !1, null, "e1284656", null))
            , Jt = Ht.exports
            , Kt = function () {
                var e = this
                    , t = e.$createElement
                    , i = e._self._c || t;
                return i("Popup", {
                    attrs: {
                        hasCloseButton: !0
                    }
                }, [i("div", {
                    staticClass: "social-tasks-container"
                }, [i("div", {
                    staticClass: "task"
                }, [i("div", {
                    staticClass: "complete-task"
                }, [i("div", [e._v("Установить игру")]), i("div", {
                    staticClass: "sprite-icon-v"
                })])]), e._l(e.validSocialTasks, function (t) {
                    return i("div", {
                        key: t,
                        staticClass: "task"
                    }, [e.completeSocialTasks.includes(t) ? i("div", {
                        staticClass: "complete-task"
                    }, [i("div", [e._v(e._s(e.taskNames[t]))]), i("div", {
                        staticClass: "sprite-icon-v"
                    })]) : i("div", {
                        staticClass: "button-task pushable sprite-button-blue-long",
                        on: {
                            click: function (i) {
                                return e.onButtonTaskClick(t)
                            }
                        }
                    }, [i("span", [e._v(e._s(e.taskNames[t]))])])])
                })], 2), i("div", {
                    staticClass: "reward-hint"
                }, [i("span", [e._v("Ваша награда: ")]), i("Currency", {
                    staticClass: "reward text-outline-black",
                    attrs: {
                        currency: e.socialTasksReward
                    }
                })], 1), i("div", {
                    staticClass: "button-reward sprite-button-blue-small",
                    class: {
                        disabled: !e.canReceiveSocialTasksReward
                    },
                    on: {
                        click: e.onButtonRewardClick
                    }
                }, [e._v("\n        Забрать\n    ")])])
            }
            , $t = [];
        const Zt = {
            [tt.WallPost]: "Рассказать об игре",
            [tt.JoinGroup]: "Вступить в группу",
            [tt.InviteFriends]: "Пригласить трех друзей",
            [tt.AddBooksmarks]: "Добавить игру в закладки"
        };
        let Qt = class extends d["c"] {
            constructor() {
                super(...arguments),
                    this.taskNames = Zt
            }
            get socialTasksReward() {
                return rt
            }
            onPollingSocialTasksChanged(e) {
                e.running || this.canReceiveSocialTasksReward || this.pollSocialTasks()
            }
            onButtonTaskClick(e) {
                this.performSocialTask(e)
            }
            onButtonRewardClick() {
                var e = this;
                return Object(s["a"])(function* () {
                    try {
                        yield e.asyncOperation({
                            type: r.ReceiveSocialTaskReward
                        }),
                            e.$emit("close")
                    } catch (t) { }
                })()
            }
        }
            ;
        l["a"]([Object(g["b"])("validSocialTasks")], Qt.prototype, "validSocialTasks", void 0),
            l["a"]([Object(g["c"])(e => e.player.completeSocialTasks)], Qt.prototype, "completeSocialTasks", void 0),
            l["a"]([Object(g["a"])(r.PollSocialTasks)], Qt.prototype, "pollSocialTasks", void 0),
            l["a"]([Object(g["a"])(r.AsyncOperation)], Qt.prototype, "asyncOperation", void 0),
            l["a"]([Object(g["c"])(e => e.player.socialTasksPoll)], Qt.prototype, "socialTasksPoll", void 0),
            l["a"]([Object(g["b"])("canReceiveSocialTasksReward")], Qt.prototype, "canReceiveSocialTasksReward", void 0),
            l["a"]([Object(g["a"])(r.PerformSocialTask)], Qt.prototype, "performSocialTask", void 0),
            l["a"]([Object(d["d"])("socialTasksPoll", {
                immediate: !0,
                deep: !0
            })], Qt.prototype, "onPollingSocialTasksChanged", null),
            Qt = l["a"]([Object(d["a"])({
                components: {
                    Popup: he,
                    Currency: F
                }
            })], Qt);
        var ei = Qt
            , ti = ei
            , ii = (i("bc56"),
                Object(D["a"])(ti, Kt, $t, !1, null, "7f8d6221", null))
            , ni = ii.exports
            , si = function () {
                var e = this
                    , t = e.$createElement
                    , i = e._self._c || t;
                return i("Popup", {
                    attrs: {
                        hasCloseButton: !0
                    }
                }, [i("div", {
                    staticClass: "popup-header"
                }, [e._v("Премиум")]), i("div", {
                    staticClass: "features-container text-outline-blue"
                }, [i("div", {
                    staticClass: "feature"
                }, [i("div", {
                    staticClass: "sprite-icon-crown"
                }), i("div", {
                    staticClass: "feature-description feature-antisplit"
                }, [e._v("\n                Уникальная способность, которая блокирует деление противника\n                при попадании на "), i("span", {
                    staticClass: "highlighted-text"
                }, [e._v("6 секунд")]), i("br"), i("span", {
                    staticClass: "small-text"
                }, [e._v("(Перезарядка 45 секунд)")])]), i("div", {
                    staticClass: "antisplit-wrapper"
                }, [i("div", {
                    staticClass: "sprite-skill-antisplit"
                })])]), i("div", {
                    staticClass: "feature"
                }, [i("div", {
                    staticClass: "sprite-icon-crown"
                }), i("div", {
                    staticClass: "feature-description"
                }, [e._v("\n                Начальная масса "), i("span", {
                    staticClass: "highlighted-text"
                }, [e._v("+100")])])]), i("div", {
                    staticClass: "feature"
                }, [i("div", {
                    staticClass: "sprite-icon-crown"
                }), i("div", {
                    staticClass: "feature-description"
                }, [e._v("\n                Увеличенный обзор "), i("span", {
                    staticClass: "highlighted-text"
                }, [e._v("+20%")])])]), i("div", {
                    staticClass: "feature"
                }, [i("div", {
                    staticClass: "sprite-icon-crown"
                }), i("div", {
                    staticClass: "feature-description"
                }, [e._v("\n                Возможность видеть\n                "), i("span", {
                    staticClass: "highlighted-text"
                }, [e._v("точную массу")]), e._v("\n                оппонента и себя\n            ")])])]), e.vipSubscription ? e.vipSubscription.cancelled ? i("div", {
                    staticClass: "button-sub pushable sprite-button-blue-great",
                    on: {
                        click: e.onButtonSubscribeClick
                    }
                }, [i("span", [e._v("Подписка " + e._s(e.priceText) + "/неделя")])]) : i("div", {
                    staticClass: "subscription-duration text-outline-black"
                }, [i("div", [e._v("Премиум активен, осталось: " + e._s(e.subscriptionDuration))])]) : i("div", {
                    staticClass: "button-sub pushable sprite-button-blue-great",
                    on: {
                        click: e.onButtonSubscribeClick
                    }
                }, [i("span", [e._v("Активировать бесплатно на 3 дня")]), i("br"), i("span", {
                    staticClass: "small"
                }, [e._v("(Далее " + e._s(e.priceText) + "/неделя)")])])])
            }
            , ai = [];
        let oi = class extends d["c"] {
            get subscriptionDuration() {
                const e = Math.max(this.vipSubscription.nextBillTime - Date.now(), 0);
                return Q(e)
            }
            get vipSubscription() {
                return this.subscriptions[lt.itemId]
            }
            get config() {
                return lt
            }
            get priceText() {
                const e = st[this.socialNetworkType]
                    , t = this.config.price[this.socialNetworkType];
                return "".concat(t, " ").concat(X(t, ...e.currency))
            }
            onButtonSubscribeClick() {
                this.subscribe(lt)
            }
        }
            ;
        l["a"]([Object(g["c"])(e => e.player.subscriptions)], oi.prototype, "subscriptions", void 0),
            l["a"]([Object(g["c"])(e => e.player.socialProfile.type)], oi.prototype, "socialNetworkType", void 0),
            l["a"]([Object(g["a"])(r.Subscribe)], oi.prototype, "subscribe", void 0),
            oi = l["a"]([Object(d["a"])({
                components: {
                    Popup: he
                }
            })], oi);
        var ri = oi
            , ci = ri
            , pi = (i("c72f"),
                Object(D["a"])(ci, si, ai, !1, null, "2d4b1d78", null))
            , li = pi.exports
            , di = function () {
                var e = this
                    , t = e.$createElement
                    , i = e._self._c || t;
                return i("Popup", {
                    attrs: {
                        hasCloseButton: !0
                    }
                }, [i("div", {
                    staticClass: "popup-header"
                }, [e._v("Лучшие игроки")]), i("div", {
                    staticClass: "mass hint"
                }, [e._v("Максимальная масса")]), i("div", {
                    staticClass: "top3 hint"
                }, [e._v("Время в ТОП-3")]), i("div", {
                    staticClass: "mvps hint"
                }, [e._v("Порталы массы")]), i("div", {
                    staticClass: "best-mvp-mass hint"
                }, [e._v("Максимальная масса в портал")]), i("div", {
                    staticClass: "tab-bar-container"
                }, e._l(e.topTypes, function (t) {
                    return i("div", {
                        key: t,
                        staticClass: "tab",
                        class: t === e.topType ? "selected sprite-tab-short-selected" : "sprite-tab-short",
                        on: {
                            mousedown: function (i) {
                                return e.onTabMousedown(t)
                            }
                        }
                    }, [i("span", {
                        staticClass: "tab-text"
                    }, [e._v(e._s(e.getTopTabText(t)))])])
                }), 0), i("div", {
                    staticClass: "top-container"
                }, [i("div", {
                    staticClass: "top-rows-wrapper"
                }, [i("div", {
                    staticClass: "top-rows-container"
                }, [e._l(e.currentTop, function (t, n) {
                    return i("TopRow", {
                        key: n,
                        attrs: {
                            place: n + 1,
                            highlight: t.id === e.socialProfile.id && t.type === e.socialProfile.type,
                            entry: t
                        }
                    })
                }), e.selfInTop ? e._e() : i("div", {
                    staticClass: "reserved-space"
                })], 2)]), e.selfInTop ? e._e() : i("TopRow", {
                    staticClass: "self-row",
                    attrs: {
                        place: ">100",
                        entry: e.selfEntry,
                        inverseBorder: !0,
                        highlight: !0
                    }
                })], 1)])
            }
            , gi = []
            , ui = function () {
                var e = this
                    , t = e.$createElement
                    , i = e._self._c || t;
                return i("div", {
                    staticClass: "top-row",
                    style: e.borderStyle
                }, [i("div", {
                    staticClass: "sprite-photo-bg"
                }, [i("div", {
                    staticClass: "photo",
                    style: e.photoStyle
                })]), i("div", {
                    staticClass: "name",
                    class: {
                        highlighted: e.highlight
                    }
                }, [e._v("\n        " + e._s(e.place) + ". " + e._s(e.entry.name) + "\n    ")]), i("div", {
                    staticClass: "score text-outline-blue"
                }, [e._v("\n        " + e._s(e.entry.score) + "\n    ")]), i("div", {
                    staticClass: "clickable-area",
                    on: {
                        click: e.onClick
                    }
                })])
            }
            , mi = [];
        let hi = class extends d["c"] {
            get borderStyle() {
                const e = "solid 1px white";
                return this.inverseBorder ? {
                    "border-top": e
                } : {
                    "border-bottom": e
                }
            }
            get photoStyle() {
                return this.entry.photo ? {
                    background: "url('".concat(this.entry.photo, "')")
                } : null
            }
            onClick() {
                const e = st[this.entry.type].userProfileUrlTemplate;
                window.open(e.replace("{{USER_ID}}", this.entry.id), "_blank")
            }
        }
            ;
        l["a"]([Object(d["b"])(Object)], hi.prototype, "entry", void 0),
            l["a"]([Object(d["b"])()], hi.prototype, "place", void 0),
            l["a"]([Object(d["b"])(Boolean)], hi.prototype, "inverseBorder", void 0),
            l["a"]([Object(d["b"])(Boolean)], hi.prototype, "highlight", void 0),
            hi = l["a"]([Object(d["a"])({})], hi);
        var fi = hi
            , yi = fi
            , bi = (i("16e4"),
                Object(D["a"])(yi, ui, mi, !1, null, "3be31e46", null))
            , vi = bi.exports;
        let _i = class extends d["c"] {
            constructor() {
                super(...arguments),
                    this.topType = it.BestMassAllTime
            }
            get topTypes() {
                return [it.BestMassAllTime, it.BestMassMonthly, it.SecondsInTopAllTime, it.SecondsInTopMonthly, it.MvpsWonAllTime, it.MvpsWonMonthly, it.BestMvpMassAllTime, it.BestMvpMassMonthly]
            }
            getTopTabText(e) {
                return e === it.BestMassAllTime || e === it.SecondsInTopAllTime || e === it.MvpsWonAllTime || e === it.BestMvpMassAllTime ? "Общий" : e === it.BestMassMonthly || e === it.SecondsInTopMonthly || e === it.MvpsWonMonthly || e === it.BestMvpMassMonthly ? "Месяц" : null
            }
            get currentTop() {
                const e = this.top[this.topType];
                return e ? e.entries : []
            }
            get selfInTop() {
                return this.currentTop.find(e => e.id === this.socialProfile.id && e.type === this.socialProfile.type)
            }
            get selfEntry() {
                return {
                    name: this.fullName,
                    score: this.scores[this.topType] || 0,
                    photo: this.socialProfile.photo
                }
            }
            mounted() {
                this.asyncOperation({
                    type: r.UpdateTop,
                    payload: {
                        topType: this.topType,
                        updateScores: !0
                    }
                })
            }
            onTabMousedown(e) {
                var t = this;
                return Object(s["a"])(function* () {
                    const i = yield t.asyncOperation({
                        type: r.UpdateTop,
                        payload: {
                            topType: e
                        }
                    });
                    i && (t.topType = e)
                })()
            }
        }
            ;
        l["a"]([Object(g["a"])(r.AsyncOperation)], _i.prototype, "asyncOperation", void 0),
            l["a"]([Object(g["c"])(e => e.player.top)], _i.prototype, "top", void 0),
            l["a"]([Object(g["c"])(e => e.player.socialProfile)], _i.prototype, "socialProfile", void 0),
            l["a"]([Object(g["c"])(e => e.player.scores)], _i.prototype, "scores", void 0),
            l["a"]([Object(g["b"])("fullName")], _i.prototype, "fullName", void 0),
            _i = l["a"]([Object(d["a"])({
                components: {
                    Popup: he,
                    TopRow: vi
                }
            })], _i);
        var Ci = _i
            , xi = Ci
            , wi = (i("572d"),
                Object(D["a"])(xi, di, gi, !1, null, "22b86dba", null))
            , ki = wi.exports
            , Mi = function () {
                var e = this
                    , t = e.$createElement
                    , i = e._self._c || t;
                return i("div", {
                    staticClass: "tutorial-popup",
                    on: {
                        click: function (e) {
                            e.stopPropagation()
                        }
                    }
                }, [e._m(0), i("div", {
                    staticClass: "button-close sprite-button-blue pushable",
                    on: {
                        click: function (t) {
                            return e.$emit("close")
                        }
                    }
                }, [i("span", {
                    staticClass: "move-2px"
                }, [e._v("OK")])])])
            }
            , Si = [function () {
                var e = this
                    , t = e.$createElement
                    , i = e._self._c || t;
                return i("div", {
                    staticClass: "tutorial-items-container"
                }, [i("div", {
                    staticClass: "tutorial-item"
                }, [i("div", {
                    staticClass: "tutorial-item-header"
                }, [e._v("\n                Ваша цель - набрать массу, для этого поедайте звездочки."), i("br"), e._v("\n                Для управления используйте мышку.\n            ")]), i("div", {
                    staticClass: "tutorial-item-content"
                }, [i("div", {
                    staticClass: "tutorial1"
                })])]), i("div", {
                    staticClass: "tutorial-item"
                }, [i("div", {
                    staticClass: "tutorial-item-header"
                }, [e._v("\n                Красные шипы расщепляют игроков с большой массой."), i("br"), e._v("\n                Для маленьких они безвредны.\n            ")]), i("div", {
                    staticClass: "tutorial-item-content"
                }, [i("div", {
                    staticClass: "tutorial2"
                })])]), i("div", {
                    staticClass: "tutorial-item"
                }, [i("div", {
                    staticClass: "tutorial-item-header"
                }, [e._v("\n                Вы можете поедать других игроков, если ваша масса больше.\n            ")]), i("div", {
                    staticClass: "tutorial-item-content"
                }, [i("div", {
                    staticClass: "tutorial3"
                })])]), i("div", {
                    staticClass: "tutorial-item"
                }, [i("div", {
                    staticClass: "tutorial-item-header"
                }, [e._v("\n                В шипы можно стрелять своей массой, заставляя их делиться."), i("br"), e._v("\n                Для этого используйте клавишу W.\n            ")]), i("div", {
                    staticClass: "tutorial-item-content"
                }, [i("div", {
                    staticClass: "tutorial4"
                })])]), i("div", {
                    staticClass: "tutorial-item"
                }, [i("div", {
                    staticClass: "tutorial-item-header"
                }, [e._v("\n                Чтобы поделиться на части, нажмите Пробел.\n            ")]), i("div", {
                    staticClass: "tutorial-item-content"
                }, [i("div", {
                    staticClass: "tutorial5"
                })])]), i("div", {
                    staticClass: "tutorial-item"
                }, [i("div", {
                    staticClass: "tutorial-item-content"
                }, [i("div", {
                    staticClass: "tutorial6"
                }, [i("div", [e._v("И помните: чем меньше масса, тем выше ваша скорость.")]), i("div", {
                    staticClass: "tutorial6-large"
                }, [e._v("Удачи в игре!")])])])])])
            }
            ];
        let Ti = class extends d["c"] {
        }
            ;
        Ti = l["a"]([Object(d["a"])({
            components: {}
        })], Ti);
        var Ii = Ti
            , Pi = Ii
            , Ai = (i("a46e"),
                Object(D["a"])(Pi, Mi, Si, !1, null, "b057c6b0", null))
            , Oi = Ai.exports
            , ji = function () {
                var e = this
                    , t = e.$createElement
                    , i = e._self._c || t;
                return i("Popup", [i("div", {
                    staticClass: "popup-header"
                }, [e._v("Ежедневная награда")]), i("div", {
                    staticClass: "daily-reward-hint text-outline-blue"
                }, [e._v("Заходите каждый день и получайте призы!")]), i("div", {
                    staticClass: "daily-rewards-container"
                }, e._l(e.dailyRewards, function (t, n) {
                    return i("div", {
                        key: n,
                        staticClass: "daily-reward",
                        style: t.bgStyle
                    }, [i("div", {
                        staticClass: "reward-bg",
                        class: t.bgClass
                    }, [i("div", {
                        style: t.bgContentStyle
                    }, [i("div", {
                        staticClass: "day",
                        class: t.dayClass
                    }, [e._v("День " + e._s(n + 1) + "\n                    ")]), i("div", {
                        staticClass: "reward-icon",
                        class: t.icon
                    }), i("div", {
                        staticClass: "reward text-outline-blue"
                    }, [e._v("\n                        " + e._s(t.value) + "\n                    ")])])]), t.received ? i("div", {
                        staticClass: "sprite-icon-v-big"
                    }) : e._e(), i("div", {
                        staticClass: "day-hint"
                    }, [e._v(e._s(t.dayHint))])])
                }), 0), i("div", {
                    staticClass: "button-receive-reward pushable sprite-button-blue",
                    on: {
                        click: e.onButtonReceiveRewardClick
                    }
                }, [i("span", [e._v("Забрать!")])])])
            }
            , Bi = [];
        let Ri = class extends d["c"] {
            get dailyRewards() {
                return dt.map((e, t) => {
                    const i = {};
                    e.gems ? (i.value = e.gems,
                        i.icon = "sprite-icon-gem-big") : e.coins && (i.value = e.coins,
                            i.icon = "sprite-icon-coin-big");
                    const n = t === dt.length - 1
                        , s = t < this.dailyReward
                        , a = t === this.dailyReward;
                    return s ? (i.received = !0,
                        i.bgClass = "sprite-daily-left-received-bg") : a ? (i.dayClass = "available",
                            i.bgClass = n ? "sprite-daily-right-available-bg" : "sprite-daily-left-available-bg") : i.bgClass = n ? "sprite-daily-right-bg" : "sprite-daily-left-bg",
                        a ? i.dayHint = "сегодня" : t === (this.dailyReward + 1) % dt.length && (i.dayHint = "завтра"),
                        i.bgStyle = "z-index: ".concat(dt.length - t),
                        s && (i.bgContentStyle = "opacity: 0.6"),
                        i
                }
                )
            }
            onButtonReceiveRewardClick() {
                var e = this;
                return Object(s["a"])(function* () {
                    yield e.asyncOperation({
                        type: r.ReceiveDailyReward
                    }),
                        e.$emit("close")
                })()
            }
        }
            ;
        l["a"]([Object(g["a"])(r.AsyncOperation)], Ri.prototype, "asyncOperation", void 0),
            l["a"]([Object(g["c"])(e => e.player.dailyReward)], Ri.prototype, "dailyReward", void 0),
            Ri = l["a"]([Object(d["a"])({
                components: {
                    Popup: he
                }
            })], Ri);
        var Li = Ri
            , Ui = Li
            , Ei = (i("9cf3"),
                Object(D["a"])(Ui, ji, Bi, !1, null, "0fa7a7ad", null))
            , Di = Ei.exports
            , Ni = function () {
                var e = this
                    , t = e.$createElement
                    , i = e._self._c || t;
                return i("Popup", {
                    attrs: {
                        hasCloseButton: !0
                    }
                }, [i("div", {
                    staticClass: "popup-header"
                }, [e._v("Зелья")]), i("div", {
                    staticClass: "buffs-container"
                }, e._l(e.buffs, function (t) {
                    return i("div", {
                        key: t.id,
                        staticClass: "buff-column"
                    }, [i("div", {
                        staticClass: "buff-name text-outline-black"
                    }, [e._v(e._s(t.name))]), i("div", {
                        staticClass: "buff-icon",
                        class: e.getBuffIconClass(t)
                    }), i("div", {
                        staticClass: "buff-description-container"
                    }, e._l(t.description, function (t) {
                        return i("div", {
                            staticClass: "buff-description"
                        }, [e._v(e._s(t))])
                    }), 0), e.getBuffDuration(t.id) > 0 ? i("div", {
                        staticClass: "buff-duration text-outline-black"
                    }, [e._v("\n                Осталось: " + e._s(e.getBuffDurationStr(t.id)) + "\n            ")]) : i("div", {
                        staticClass: "buff-duration text-outline-black"
                    }, [e._v("\n                Неактивно\n            ")]), i("div", {
                        staticClass: "buy-buff-button sprite-button-blue-short pushable",
                        on: {
                            click: function (i) {
                                return e.onButtonBuyBuffClick(t)
                            }
                        }
                    }, [i("span", [e._v("+1 день")]), i("Currency", {
                        attrs: {
                            currency: t.price
                        }
                    })], 1)])
                }), 0)])
            }
            , Fi = [];
        let Xi = class extends d["c"] {
            constructor() {
                super(...arguments),
                    this.buffs = [k.Red, k.Green, k.Gold].map(e => Object(n["a"])({
                        id: e
                    }, j[e]))
            }
            getBuffDuration(e) {
                const t = this.buffExpirations[e] || 0;
                return Math.max(0, t - Date.now())
            }
            getBuffDurationStr(e) {
                return Q(this.getBuffDuration(e))
            }
            onButtonBuyBuffClick(e) {
                this.asyncOperation({
                    type: r.BuyBuff,
                    payload: e
                })
            }
            getBuffIconClass(e) {
                return e.id === k.Red ? "sprite-buff-red" : e.id === k.Green ? "sprite-buff-green" : e.id === k.Gold ? "sprite-buff-gold" : ""
            }
        }
            ;
        l["a"]([Object(g["c"])(e => e.player.buffExpirations)], Xi.prototype, "buffExpirations", void 0),
            l["a"]([Object(g["a"])(r.AsyncOperation)], Xi.prototype, "asyncOperation", void 0),
            Xi = l["a"]([Object(d["a"])({
                components: {
                    Currency: F,
                    Popup: he
                }
            })], Xi);
        var Gi = Xi
            , zi = Gi
            , Vi = (i("1c14"),
                Object(D["a"])(zi, Ni, Fi, !1, null, "0280ad5e", null))
            , Wi = Vi.exports;
        let qi = class extends d["c"] {
            constructor() {
                super(...arguments),
                    this.passives = Object.values(T),
                    this.skills = [w.Teleport, w.MassDecay, w.Blind, w.Instability, w.Adaptation],
                    this.editedName = null
            }
            mounted() {
                void 0 !== this.dailyReward && this.openPopup({
                    type: Di,
                    closable: !1
                })
            }
            get nameMaxLength() {
                return pt
            }
            get changeNamesPrice() {
                return ot
            }
            onButtonSkinClick() {
                this.openPopup({
                    type: Jt
                })
            }
            onButtonNameChangesClick() {
                this.asyncOperation({
                    type: r.BuyNameChanges
                })
            }
            onLabelSocialTasksClick() {
                this.openPopup({
                    type: ni
                })
            }
            onButtonSubscriptionClick() {
                this.openPopup({
                    type: li
                })
            }
            onButtonTopClick() {
                this.openPopup({
                    type: ki
                })
            }
            onButtonBuffsClick() {
                this.openPopup({
                    type: Wi
                })
            }
            get editedNameChanged() {
                return this.editedName !== this.name
            }
            get editedNameValid() {
                return !0
            }
            onNameChanged(e) {
                this.editedName = e
            }
            onButtonAcceptNameChangeClick() {
                this.asyncOperation({
                    type: r.ChangeName,
                    payload: this.editedName
                })
            }
            onButtonResetNameChangeClick() {
                this.editedName = this.name
            }
            onButtonPlayClick() {
                this.asyncOperation({
                    type: r.JoinGame
                })
            }
            get skinBg() {
                const e = this.currentSkin || "default"
                    , t = Gt.getSkinUrl(e);
                return "url(".concat(t, ")")
            }
            onButtonTutorialClick() {
                this.openPopup({
                    type: Oi,
                    hasCloseButton: !1
                })
            }
            get showSkinUpdate() {
                return Date.now() - Ot <= 6048e5
            }
        }
            ;
        l["a"]([Object(g["c"])(e => e.player.coins)], qi.prototype, "coins", void 0),
            l["a"]([Object(g["c"])(e => e.player.gems)], qi.prototype, "gems", void 0),
            l["a"]([Object(g["c"])(e => e.player.mvpCoins)], qi.prototype, "mvpCoins", void 0),
            l["a"]([Object(g["a"])(r.OpenPopup)], qi.prototype, "openPopup", void 0),
            l["a"]([Object(g["a"])(r.AsyncOperation)], qi.prototype, "asyncOperation", void 0),
            l["a"]([Object(g["c"])(e => e.player.socialTasksRewardReceived)], qi.prototype, "socialTasksRewardReceived", void 0),
            l["a"]([Object(g["c"])(e => e.player.canChangeNames)], qi.prototype, "canChangeNames", void 0),
            l["a"]([Object(g["c"])(e => e.player.name)], qi.prototype, "name", void 0),
            l["a"]([Object(g["c"])(e => e.player.currentSkin)], qi.prototype, "currentSkin", void 0),
            l["a"]([Object(g["c"])(e => e.player.scores)], qi.prototype, "scores", void 0),
            l["a"]([Object(g["c"])(e => e.player.socialProfile)], qi.prototype, "socialProfile", void 0),
            l["a"]([Object(g["b"])("fullName")], qi.prototype, "fullName", void 0),
            l["a"]([Object(g["c"])(e => e.player.dailyReward)], qi.prototype, "dailyReward", void 0),
            l["a"]([Object(d["d"])("name", {
                immediate: !0
            })], qi.prototype, "onNameChanged", null),
            qi = l["a"]([Object(d["a"])({
                components: {
                    PassiveRow: se,
                    SkillRow: qe,
                    CurrencyRow: It,
                    Currency: F
                }
            })], qi);
        var Yi = qi
            , Hi = Yi
            , Ji = (i("b27b"),
                Object(D["a"])(Hi, u, m, !1, null, "5f0edcee", null))
            , Ki = Ji.exports
            , $i = function () {
                var e = this
                    , t = e.$createElement
                    , i = e._self._c || t;
                return i("div", {
                    staticClass: "gameplay-screen"
                }, [i("canvas", {
                    ref: "canvas",
                    staticClass: "canvas"
                }), i("div", {
                    staticClass: "mvp-container",
                    style: e.hudStyle
                }, [e.mvpInOtherRoom ? i("div", {
                    staticClass: "mvp-in-other-room text-outline-black"
                }, [e._v("\n            Портал массы откроется в ближайшее время "), i("em", [e._v("в другой комнате.")])]) : e.mvpState === e.MvpState.Spawning ? i("div", {
                    staticClass: "text-outline-black"
                }, [e._v("\n            Портал массы откроется через "), i("span", {
                    staticClass: "mvp-timer"
                }, [e._v(e._s(e.mvpTimerText))])]) : e.mvpState === e.MvpState.Spawned ? i("div", {
                    staticClass: "text-outline-black"
                }, [e._v("\n            Портал открылся! Тот, кто отправит через него больше всех массы (W и пробел), получит награду."), i("br"), e._v("\n            До закрытия осталось "), i("span", {
                    staticClass: "mvp-timer"
                }, [e._v(e._s(e.mvpTimerText))])]) : e.mvpState === e.MvpState.Despawned && e.showMvpWinnerName && e.mvpResult.top.length ? i("div", {
                    staticClass: "text-outline-black mvp-result-text"
                }, [e.mvpResult.contributorsCount ? [i("span", {
                    staticClass: "mvp-winner-name"
                }, [e._v(e._s(e.mvpResultText(e.mvpResult.top[0])))]), e._v(" одерживает победу\n                "), e.mvpResult.contributorsCount > 3 ? [i("br"), e._v("над "), i("span", {
                    staticClass: "mvp-loser-name"
                }, [e._v(e._s(e.mvpResultText(e.mvpResult.top[1])))]), e._v(",\n                    "), i("span", {
                    staticClass: "mvp-loser-name"
                }, [e._v(e._s(e.mvpResultText(e.mvpResult.top[2])))]), e._v("\n                    и еще "), i("span", {
                    staticClass: "mvp-loser-name"
                }, [e._v(e._s(e.mvpContributorsCount))]), e._v(" " + e._s(e.mvpContributorsCountText) + "\n                ")] : e._e()] : e._e()], 2) : e._e()]), i("div", {
                    staticClass: "top-container",
                    class: {
                        transparent: e.transparentTop
                    },
                    style: e.hudStyle,
                    on: {
                        click: e.onTopClick
                    }
                }, [i("div", {
                    staticClass: "header"
                }, [e._v("Лучшие игроки")]), i("div", {
                    staticClass: "top-rows-container"
                }, e._l(e.top, function (t, n) {
                    return i("div", {
                        key: n,
                        staticClass: "top-row"
                    }, [i("div", {
                        staticClass: "name-score"
                    }, [i("span", [e._v(e._s(n + 1) + ". ")]), i("span", {
                        staticClass: "name",
                        class: {
                            compact: e.isTopEntryCompact(t)
                        }
                    }, [e._v("\n                        " + e._s(t.name) + "\n                    ")])]), e.isVip ? i("div", {
                        staticClass: "score"
                    }, [e._v("\n                    " + e._s(t.mass) + "\n                ")]) : e._e()])
                }), 0), i("div", {
                    staticClass: "result-hint"
                }, [e._v("Ваш результат")]), i("div", {
                    staticClass: "result-text"
                }, [e._v(e._s(e.bestMass))]), i("div", {
                    staticClass: "buttons-container"
                }, [i("div", {
                    staticClass: "button-exit sprite-button-blue-small",
                    on: {
                        click: function (t) {
                            return t.stopPropagation(),
                                e.onButtonExitClick(t)
                        }
                    }
                }, [e._v("\n                Меню\n            ")]), i("div", {
                    staticClass: "button-fullscreen sprite-button-blue-small",
                    on: {
                        click: function (t) {
                            return t.stopPropagation(),
                                e.onButtonFullscreenClick(t)
                        }
                    }
                }, [i("span", {
                    staticClass: "sprite-icon-fullscreen"
                })])])]), i("div", {
                    staticClass: "skills-container",
                    style: e.hudStyle
                }, [e._l(e.skills, function (t, n) {
                    return i("div", {
                        key: n,
                        staticClass: "skill"
                    }, [i("SkillIcon", {
                        staticClass: "skill-icon",
                        attrs: {
                            skill: n
                        }
                    }), i("div", {
                        staticClass: "skill-cooldown-fill-container"
                    }, [i("svg", {
                        staticClass: "skill-cooldown-fill",
                        style: e.getSkillCooldownFillStyle(n),
                        attrs: {
                            width: "100%",
                            height: "100%",
                            viewBox: "0 0 42 42"
                        }
                    }, [i("circle", {
                        attrs: {
                            cx: "21",
                            cy: "21",
                            r: "15.91549430918952",
                            fill: "none"
                        }
                    })])]), t.cooldown ? i("div", {
                        staticClass: "skill-cooldown"
                    }, [e._v("\n                " + e._s(t.cooldown) + "\n            ")]) : e._e(), i("div", {
                        staticClass: "skill-hotkey"
                    }, [e._v("\n                " + e._s(t.key) + "\n            ")])], 1)
                }), e._m(0), e._m(1)], 2)])
            }
            , Zi = [function () {
                var e = this
                    , t = e.$createElement
                    , i = e._self._c || t;
                return i("div", {
                    staticClass: "skill"
                }, [i("div", {
                    staticClass: "skill-icon sprite-action-eject-mass"
                }), i("div", {
                    staticClass: "action-fill"
                }), i("div", {
                    staticClass: "skill-hotkey"
                }, [e._v("W")])])
            }
                , function () {
                    var e = this
                        , t = e.$createElement
                        , i = e._self._c || t;
                    return i("div", {
                        staticClass: "skill"
                    }, [i("div", {
                        staticClass: "skill-icon sprite-action-split"
                    }), i("div", {
                        staticClass: "action-fill"
                    }), i("div", {
                        staticClass: "action-split-hotkey sprite-action-split-hotkey"
                    }, [e._v("\n                Пробел\n            ")])])
                }
            ];
        i("8449");
        function Qi(e, t, i) {
            return e < t ? t : e > i ? i : e
        }
        function en(e, t, i) {
            return e + i * (t - e)
        }
        function tn(e) {
            return Math.sqrt(100 * e)
        }
        function nn(e, t) {
            const i = t.width / y.viewAreaBaseWidth
                , n = t.height / y.viewAreaBaseHeight
                , s = Math.max(i, n);
            return 80 * s + 1.2 * e
        }
        function sn(e) {
            return 80 + 1.5 * e
        }
        class an {
            constructor() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                    , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                this.x = e,
                    this.y = t
            }
            set(e, t) {
                this.x = e,
                    this.y = t
            }
            clone() {
                return new an(this.x, this.y)
            }
            copy(e) {
                return this.x = e.x,
                    this.y = e.y,
                    this
            }
            scale(e) {
                return this.x *= e,
                    this.y *= e,
                    this
            }
            add(e) {
                return this.x += e.x,
                    this.y += e.y,
                    this
            }
            subtract(e) {
                return this.x -= e.x,
                    this.y -= e.y,
                    this
            }
            length() {
                return Math.sqrt(this.x * this.x + this.y * this.y)
            }
            lengthSq() {
                return this.x * this.x + this.y * this.y
            }
            normalize() {
                const e = this.length();
                return e && (this.x /= e,
                    this.y /= e),
                    this
            }
            dot(e) {
                return this.x * e.x + this.y * e.y
            }
            reset() {
                return this.x = 0,
                    this.y = 0,
                    this
            }
            lerp(e, t) {
                return this.x = this.x + t * (e.x - this.x),
                    this.y = this.y + t * (e.y - this.y),
                    this
            }
        }
        var on = PIXI.WebGLRenderer;
        const rn = 100;
        class cn {
            constructor(e, t) {
                let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                this._eater = null,
                    this._eaterVersion = 0,
                    this._eatenTime = 0,
                    this._pos0 = new an,
                    this._pos1 = new an,
                    this._pos = new an,
                    this._posT1 = 0,
                    this._mass0 = 0,
                    this._mass1 = 0,
                    this._mass = 0,
                    this._massT1 = 0,
                    this._radius = 0,
                    this._version = 0,
                    this._id = 0,
                    this._emitter = null,
                    this.type = e,
                    this.world = t,
                    this.sprite = new PIXI.Sprite(i),
                    this.sprite.anchor.set(.5, .5),
                    this.type === x.MvpLaser && this.sprite.anchor.set(.75, .5)
            }
            getLayer() {
                return this.type === x.Virus ? this.world.virusLayer : this.world.cellsLayer
            }
            init(e) {
                if (this._id = e.id,
                    this._version++,
                    this._eater = null,
                    this._eaterVersion = 0,
                    this._eatenTime = 0,
                    this._pos.set(e.x, e.y),
                    this._pos0.copy(this._pos),
                    this._pos1.copy(this._pos),
                    this.sprite.position.set(e.x, e.y),
                    this.getLayer().addChild(this.sprite),
                    this._mass1 = this._mass0 = this._mass = e.mass,
                    this._radius = tn(e.mass),
                    this.updateSpriteScale(),
                    e.tint && (this.sprite.tint = e.tint),
                    e.particles && (this._emitter = new PIXI.particles.Emitter(this.world.cellsLayer, e.particles.textures, e.particles.emitterConfig),
                        this._emitter.emit = !0),
                    void 0 !== e.angle && (this.sprite.rotation = e.angle),
                    this.type === x.Mass) {
                    const t = e.infected ? "infected_mass" : "skin_default";
                    this.sprite.texture = PIXI.Texture.from(t)
                }
            }
            beginRemove(e) {
                this.world.cellMgr.onCellRemoving(this),
                    this._eater = this.world.cellMgr.getCell(e),
                    this._eater ? (this.setNextMass(0),
                        this.setNextPosition(this._eater.x, this._eater.y, !1),
                        this._eatenTime = this.world.now + rn,
                        this.type !== x.Pellet && this.type !== x.MvpPellet || this.world.cellMgr.updatedCells.push(this)) : this.remove()
            }
            remove() {
                if (this._id = 0,
                    this._eater = null,
                    this.sprite.parent.removeChild(this.sprite),
                    this._emitter) {
                    this._emitter.destroy({
                        children: !0
                    }),
                        this._emitter = null;
                    const e = this.world.app.renderer;
                    e instanceof on && (e.plugins.sprite.sprites.length = 0)
                }
            }
            get removed() {
                return !this._id
            }
            setNextPosition(e, t, i) {
                i ? (this._pos.set(e, t),
                    this._pos1.copy(this._pos),
                    this._pos0.copy(this._pos),
                    this._posT1 = 0) : (this._pos0.copy(this._pos),
                        this._pos1.set(e, t),
                        this._posT1 = this.world.now + rn)
            }
            setNextMass(e) {
                this._mass0 = this._mass,
                    this._mass1 = e,
                    this._massT1 = this.world.now + rn
            }
            update(e) {
                this._eater && (this._eatenTime <= this.world.now ? this.remove() : this._eater.removed || this._eaterVersion !== this._eater.version || this._pos1.set(this._eater.x, this._eater.y));
                const t = Qi(1 - (this._posT1 - this.world.now) / rn, 0, 1)
                    , i = Qi(1 - (this._massT1 - this.world.now) / rn, 0, 1);
                this._pos.copy(this._pos0).lerp(this._pos1, t),
                    this._mass = en(this._mass0, this._mass1, i),
                    this._radius = tn(this._mass),
                    this.sprite.position.set(this._pos.x, this._pos.y),
                    this.updateSpriteScale(),
                    this._emitter && (this._emitter.update(e),
                        this._emitter.updateOwnerPos(this.x, this.y))
            }
            updateSpriteScale() {
                const e = this._radius / (this.sprite.texture.width / 2);
                this.sprite.scale.set(e, e)
            }
            get x() {
                return this._pos.x
            }
            get y() {
                return this._pos.y
            }
            get mass() {
                return this._mass
            }
            get radius() {
                return this._radius
            }
            get id() {
                return this._id
            }
            get version() {
                return this._version
            }
        }
        class pn extends cn {
            constructor(e) {
                super(x.PlayerCell, e),
                    this._instability = !1,
                    this._teleporting = !1,
                    this._player = null,
                    this._adaptationAuraTimer = null,
                    this._massDecayAura = new PIXI.Sprite(PIXI.Texture.from("aura")),
                    this._massDecayAura.anchor.set(.5, .5),
                    this._massDecayAura.visible = !1,
                    this._animatedSprite = new PIXI.extras.AnimatedSprite([PIXI.Texture.from("skin_default")]),
                    this._animatedSprite.visible = !1,
                    this._animatedSprite.anchor.set(.5, .5),
                    this._animatedSprite.animationSpeed = .2,
                    this.sprite.addChild(this._animatedSprite),
                    this._infectSprite = new PIXI.Sprite(PIXI.Texture.from("infect")),
                    this._infectSprite.visible = !1,
                    this._infectSprite.alpha = .5,
                    this._infectSprite.anchor.set(.5, .5),
                    this.sprite.addChild(this._infectSprite),
                    this._shieldSprite = new PIXI.Sprite(PIXI.Texture.from("shield")),
                    this._shieldSprite.visible = !1,
                    this._shieldSprite.anchor.set(.5, .5),
                    this.sprite.addChild(this._shieldSprite),
                    this._textsContainer = new PIXI.Container;
                const t = {
                    font: "128px Droid Sans"
                };
                this._nameText = new PIXI.Sprite,
                    this._nameText.anchor.set(.5, .48),
                    this._textsContainer.addChild(this._nameText)
                if (globalShowMass) {
                    this._massText = new PIXI.extras.BitmapText("", t);
                    this._massText.anchor = 0.5;
                    this._massText.position.y = 90;
                    this._textsContainer.addChild(this._massText);
                }
                this._vipIcon = new PIXI.Sprite(PIXI.Texture.from("icon_crown")),
                    this._vipIcon.position.y = -100,
                    this._vipIcon.anchor.set(.5, .5),
                    this._textsContainer.addChild(this._vipIcon),
                    this._antisplitIcon = new PIXI.Sprite(PIXI.Texture.from("icon_lock")),
                    this.sprite.addChild(this._antisplitIcon),
                    this._blindIcon = new PIXI.Sprite(PIXI.Texture.from("icon_blind")),
                    this.sprite.addChild(this._blindIcon),
                    this._antiEjectDebuffIcon = new PIXI.Sprite(PIXI.Texture.from("icon_anti_eject")),
                    this.sprite.addChild(this._antiEjectDebuffIcon),
                    this._infectIcon = new PIXI.Sprite(PIXI.Texture.from("icon_infect")),
                    this.sprite.addChild(this._infectIcon),
                    this._altBlindIcon = new PIXI.Sprite(PIXI.Texture.from("icon_alt_blind")),
                    this.sprite.addChild(this._altBlindIcon),
                    this._altLockIcon = new PIXI.Sprite(PIXI.Texture.from("icon_alt_lock")),
                    this.sprite.addChild(this._altLockIcon),
                    this._antisplitIcon.y = this._blindIcon.y = this._antiEjectDebuffIcon.y = this._infectIcon.y = this._altBlindIcon.y = this._altLockIcon.y = 150,
                    this._adaptationAura = new PIXI.Sprite(PIXI.Texture.from("adaptation")),
                    this._adaptationAura.anchor.set(.5, .5),
                    this._adaptationAura.visible = !1,
                    this.sprite.addChild(this._adaptationAura)
                if (!this.world.isWebGL) {
                    this._instabilitySprite = new PIXI.Sprite(PIXI.Texture.from("instability"));
                    this._instabilitySprite.alpha = 0.5;
                    this._instabilitySprite.anchor.set(0.5, 0.5);
                    this.sprite.addChild(this._instabilitySprite);
                }
            }
            init(e) {
                this._player = e.player,
                    "invader" === this._player.skin ? e.tint = Tn[this._player.color % Tn.length] : this._player.skin ? e.tint = 16777215 : e.tint = Sn[this._player.color],
                    super.init(e);
                const t = this._player.skin ? zt.load(this._player.skin) : PIXI.Texture.from("skin_default");
                this.setSkin(t),
                    this._nameText.texture = null,
                    this._vipIcon.visible = this._player.isVip,
                    this.world.auraLayer.addChild(this._massDecayAura),
                    this.world.textsLayer.addChild(this._textsContainer),
                    this._adaptationAura.visible = !1
            }
            remove() {
                super.remove(),
                    this.world.auraLayer.removeChild(this._massDecayAura),
                    this.world.textsLayer.removeChild(this._textsContainer)
            }
            update(e) {
                super.update(e);
                const t = sn(this.radius) / (this._massDecayAura.texture.width / 2);
                this._massDecayAura.position.set(this.x, this.y),
                    this._massDecayAura.scale.set(t, t);
                const i = Math.max(.4, .0035 * this.radius)
                    , n = this.world.cameraScale * i;
                if (this._textsContainer.visible = n >= .1,
                    this._textsContainer.visible) {
                    const e = 108 * n
                        , t = this.world.getName(this._player.name, e);
                    if (t) {
                        this._nameText.texture = t.texture;
                        const i = 1 / n * (e / t.size);
                        this._nameText.scale.set(i, i)
                    } else
                        this._nameText.texture = null;
                    this._massText && (this._massText.text = (~~this.mass).toString()),
                        this._textsContainer.position.set(this.x, this.y),
                        this._textsContainer.scale.set(i, i)
                }
            }
            get player() {
                return this._player
            }
            set massDecayed(e) { }
            get massDecayAura() {
                return this._massDecayAura.visible
            }
            set massDecayAura(e) {
                this._massDecayAura.visible = e
            }
            get antisplit() {
                return this._antisplitIcon.visible
            }
            set antisplit(e) {
                this.setIconVisible(this._antisplitIcon, e)
            }
            set instability(e) {
                this._instability = e,
                    this.updateLayer(),
                    this._instabilitySprite && (this._instabilitySprite.visible = e)
            }
            set teleporting(e) {
                this._teleporting = e,
                    this.updateLayer()
            }
            updateLayer() {
                this._teleporting ? this.sprite.parent !== this.world.teleportingLayer && this.world.teleportingLayer.addChild(this.sprite) : this._instability ? this.sprite.parent !== this.world.instabilityLayer && this.world.instabilityLayer.addChild(this.sprite) : this.sprite.parent !== this.world.cellsLayer && this.world.cellsLayer.addChild(this.sprite)
            }
            get blind() {
                return this._blindIcon.visible
            }
            set blind(e) {
                this.setIconVisible(this._blindIcon, e)
            }
            get antiEjectDebuff() {
                return this._antiEjectDebuffIcon.visible
            }
            set antiEjectDebuff(e) {
                this.setIconVisible(this._antiEjectDebuffIcon, e)
            }
            get infect() {
                return this._infectIcon.visible
            }
            set infect(e) {
                this.setIconVisible(this._infectIcon, e),
                    this._infectSprite.visible = e
            }
            get shield() {
                return this._shieldSprite.visible
            }
            set shield(e) {
                this._shieldSprite.visible = e
            }
            get altBlind() {
                return this._altBlindIcon.visible
            }
            set altBlind(e) {
                this.setIconVisible(this._altBlindIcon, e),
                    this._altBlindIcon.visible = e
            }
            get altAntisplit() {
                return this._altLockIcon.visible
            }
            set altAntisplit(e) {
                this.setIconVisible(this._altLockIcon, e),
                    this._altLockIcon.visible = e
            }
            get adaptation() {
                return this._adaptationAura.visible
            }
            set adaptation(e) {
                this._adaptationAuraTimer && (clearTimeout(this._adaptationAuraTimer),
                    this._adaptationAuraTimer = null),
                    e ? this._adaptationAura.visible = e : this._adaptationAuraTimer = setTimeout(() => {
                        this._adaptationAura.visible = !1,
                            this._adaptationAuraTimer = null
                    }
                        , 500)
            }
            setIconVisible(e, t) {
                e.visible !== t && (e.visible = t,
                    this.arrangeIcons())
            }
            arrangeIcons() {
                const e = [];
                this._antisplitIcon.visible && e.push(this._antisplitIcon),
                    this._blindIcon.visible && e.push(this._blindIcon),
                    this._antiEjectDebuffIcon.visible && e.push(this._antiEjectDebuffIcon),
                    this._infectIcon.visible && e.push(this._infectIcon),
                    this._altBlindIcon.visible && e.push(this._altBlindIcon),
                    this._altLockIcon.visible && e.push(this._altLockIcon);
                const t = 120
                    , i = e.length * t
                    , n = 155 - i / 2;
                for (let s = 0; s < e.length; ++s)
                    e[s].position.x = n + t * s
            }
            setSkin(e) {
                e instanceof PIXI.Texture ? (this.sprite.texture = e,
                    this._animatedSprite.visible = !1,
                    this._animatedSprite.stop()) : (this.sprite.texture = PIXI.Texture.from("skin_default"),
                        this._animatedSprite.textures = e,
                        this._animatedSprite.visible = !0,
                        this._animatedSprite.gotoAndPlay(0),
                        this.sprite.tint = 0)
            }
        }
        class ln extends cn {
            constructor(e) {
                super(x.Mvp, e, PIXI.Texture.from("mvp_fog")),
                    this._massDecayAura = new PIXI.Sprite(PIXI.Texture.from("aura")),
                    this._massDecayAura.anchor.set(.5, .5),
                    this._extraMassDecayAura = new PIXI.Sprite(PIXI.Texture.from("aura")),
                    this._extraMassDecayAura.anchor.set(.5, .5),
                    this._extraMassDecayAura.tint = 0;
                const t = y.mvpAuraRadius / (this._massDecayAura.texture.width / 2);
                this._massDecayAura.scale.set(t, t),
                    this._extraMassDecayAura.scale.set(t, t),
                    this._mvpSprite = new PIXI.Sprite(PIXI.Texture.from("mvp")),
                    this._mvpSprite.anchor.set(.5, .5)
            }
            getLayer() {
                return this.world.mvpLayer
            }
            init(e) {
                super.init(e),
                    this.world.auraLayer.addChild(this._massDecayAura),
                    this.world.extraMvpAuraLayer.addChild(this._extraMassDecayAura),
                    this._massDecayAura.position.set(this.x, this.y),
                    this._extraMassDecayAura.position.set(this.x, this.y),
                    this._mvpSprite.position.set(this.x, this.y),
                    this._mvpSprite.scale.set(this.sprite.scale.x, this.sprite.scale.y),
                    this.world.mvpLayer.addChild(this._mvpSprite)
            }
            remove() {
                super.remove(),
                    this.world.auraLayer.removeChild(this._massDecayAura),
                    this.world.extraMvpAuraLayer.removeChild(this._extraMassDecayAura),
                    this.world.mvpLayer.removeChild(this._mvpSprite)
            }
            update(e) {
                super.update(e),
                    this.sprite.rotation += .05 * e;
                const t = y.mvpFightTime - (this.world.mvpTimer - this.world.now);
                this._extraMassDecayAura.alpha = 1 - Qi(t / y.mvpExtraAuraDuration, 0, 1)
            }
        }
        var dn = i("1e5c");
        class gn extends cn {
            constructor(e) {
                super(x.Ufo, e, PIXI.Texture.from("ufo")),
                    this._laserCounter = 0,
                    this._sucking = !1,
                    this._ufoSuckSound = new dn["Howl"]({
                        src: [i("6a84")],
                        loop: !0,
                        volume: .3,
                        preload: !0
                    }),
                    this._ufoLaserSound = new dn["Howl"]({
                        src: [i("f889")],
                        volume: .05,
                        preload: !0
                    })
            }
            init(e) {
                super.init(e),
                    this.sucking = e.sucking
            }
            remove() {
                super.remove(),
                    this._ufoSuckSound.stop(),
                    this.world.ufoOverlay.visible = !1
            }
            getLayer() {
                return this.world.mvpLayer
            }
            get sucking() {
                return this._sucking
            }
            set sucking(e) {
                this._sucking = e,
                    this.sprite.texture = PIXI.Texture.from(e ? "ufo_active" : "ufo"),
                    e ? this._ufoSuckSound.play() : this._ufoSuckSound.stop(),
                    this.world.ufoOverlay.visible = e
            }
            get laserCounter() {
                return this._laserCounter
            }
            set laserCounter(e) {
                this._laserCounter != e && (this._ufoLaserSound.play(),
                    this._laserCounter = e)
            }
        }
        class un {
            constructor(e) {
                this._cells = new Array(1e4).fill(null),
                    this._updatedCells = [],
                    this._pools = new Array(Object.keys(x).length),
                    this._world = e,
                    this.makeCellPooled(x.PlayerCell, 1700),
                    this.makeCellPooled(x.Pellet, 2100),
                    this.makeCellPooled(x.Mass, 2100),
                    this.makeCellPooled(x.Virus, 200),
                    this.makeCellPooled(x.BlindProjectile, 100),
                    this.makeCellPooled(x.AntisplitProjectile, 100),
                    this.makeCellPooled(x.SnowballProjectile, 100),
                    this.makeCellPooled(x.Mvp, 1),
                    this.makeCellPooled(x.MvpLaser, 100),
                    this.makeCellPooled(x.MvpPellet, 2100),
                    this.makeCellPooled(x.Ufo, 1)
            }
            makeCellPooled(e, t) {
                this._pools[e] = {
                    cells: [],
                    maxSize: t
                }
            }
            addCell(e, t) {
                const i = this._pools[e]
                    , n = i && i.cells.length ? i.cells.pop() : this.createCell(e);
                return n.init(t),
                    this._cells[n.id] = n,
                    e !== x.Pellet && e !== x.MvpPellet && this.updatedCells.push(n),
                    n
            }
            createCell(e) {
                switch (e) {
                    case x.PlayerCell:
                        return new pn(this._world);
                    case x.Pellet:
                        return new cn(e, this._world, PIXI.Texture.from("pellet"));
                    case x.Virus:
                        return new cn(e, this._world, PIXI.Texture.from("virus"));
                    case x.Mass:
                        return new cn(e, this._world);
                    case x.BlindProjectile:
                        return new cn(e, this._world, PIXI.Texture.from("proj_blind"));
                    case x.AntisplitProjectile:
                        return new cn(e, this._world, PIXI.Texture.from("proj_antisplit"));
                    case x.SnowballProjectile:
                        return new cn(e, this._world, PIXI.Texture.from("skin_default"));
                    case x.Mvp:
                        return new ln(this._world);
                    case x.MvpLaser:
                        return new cn(e, this._world, PIXI.Texture.from("proj_mvp_laser"));
                    case x.MvpPellet:
                        return new cn(e, this._world, PIXI.Texture.from("mvp_pellet"));
                    case x.Ufo:
                        return new gn(this._world);
                    default:
                        throw new Error("Unknown cell type: ".concat(e))
                }
            }
            onCellRemoving(e) {
                this._cells[e.id] = null
            }
            getCell(e) {
                return this._cells[e]
            }
            update(e) {
                this._updatedCells.forEach(t => {
                    if (t.removed || t.update(e),
                        t.removed) {
                        const e = this._pools[t.type];
                        e && e.cells.length < e.maxSize && e.cells.push(t)
                    }
                }
                ),
                    this._updatedCells = this._updatedCells.filter(e => !e.removed)
            }
            get updatedCells() {
                return this._updatedCells
            }
        }
        var mn, hn = i("1c35");
        (function (e) {
            e[e["Begin"] = 0] = "Begin",
                e[e["Current"] = 1] = "Current",
                e[e["End"] = 2] = "End"
        }
        )(mn || (mn = {}));
        class fn {
            constructor() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 8192;
                this._position = 0,
                    this._length = 0,
                    this._view = hn["Buffer"].alloc(e)
            }
            writeInt8(e) {
                this.ensureCanFitAtCurrentPos(1),
                    this._view.writeInt8(e, this._position),
                    this.advance(1)
            }
            writeUInt8(e) {
                this.ensureCanFitAtCurrentPos(1),
                    this._view.writeUInt8(e, this._position),
                    this.advance(1)
            }
            writeInt16(e) {
                this.ensureCanFitAtCurrentPos(2),
                    this._view.writeInt16LE(e, this._position),
                    this.advance(2)
            }
            writeUInt16(e) {
                this.ensureCanFitAtCurrentPos(2),
                    this._view.writeUInt16LE(e, this._position),
                    this.advance(2)
            }
            writeInt32(e) {
                this.ensureCanFitAtCurrentPos(4),
                    this._view.writeInt32LE(e, this._position),
                    this.advance(4)
            }
            writeUInt32(e) {
                this.ensureCanFitAtCurrentPos(4),
                    this._view.writeUInt32LE(e, this._position),
                    this.advance(4)
            }
            writeFloat(e) {
                this.ensureCanFitAtCurrentPos(4),
                    this._view.writeFloatLE(e, this._position),
                    this.advance(4)
            }
            writeVector2(e, t) {
                this.ensureCanFitAtCurrentPos(8),
                    this._view.writeFloatLE(e, this._position),
                    this._view.writeFloatLE(t, this._position + 4),
                    this.advance(8)
            }
            writeString(e) {
                this.ensureCanFitAtCurrentPos(2 + 2 * e.length),
                    this._view.writeUInt16LE(e.length, this._position),
                    this._view.write(e, this._position + 2, 2 * e.length, "utf16le"),
                    this.advance(2 + 2 * e.length)
            }
            seek(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mn.Begin;
                switch (t) {
                    case mn.Begin:
                        this._position = e;
                        break;
                    case mn.Current:
                        this._position += this._position + e;
                        break;
                    case mn.End:
                        this._position = this._length + e;
                        break
                }
            }
            reset() {
                this._length = 0,
                    this._position = 0
            }
            get length() {
                return this._length
            }
            get position() {
                return this._position
            }
            get capacity() {
                return this._view.length
            }
            getView() {
                return hn["Buffer"].from(this._view.buffer, 0, this._length)
            }
            ensureCanFitAtCurrentPos(e) {
                if (this._position + e <= this._view.length)
                    return;
                let t = this._view.length;
                while (this._position + e > t)
                    t *= 2;
                const i = hn["Buffer"].alloc(t);
                this._view.copy(i, 0, 0, this._length),
                    this._view = i
            }
            advance(e) {
                this._position += e,
                    this._position > this._length && (this._length = this._position)
            }
        }
        class yn {
            constructor(e) {
                this._position = 0,
                    e instanceof ArrayBuffer ? this._view = hn["Buffer"].from(e) : this._view = e
            }
            readInt8() {
                const e = this._view.readInt8(this._position);
                return this._position += 1,
                    e
            }
            readUInt8() {
                const e = this._view.readUInt8(this._position);
                return this._position += 1,
                    e
            }
            readInt16() {
                const e = this._view.readInt16LE(this._position);
                return this._position += 2,
                    e
            }
            readUInt16() {
                const e = this._view.readUInt16LE(this._position);
                return this._position += 2,
                    e
            }
            readInt32() {
                const e = this._view.readInt32LE(this._position);
                return this._position += 4,
                    e
            }
            readUInt32() {
                const e = this._view.readUInt32LE(this._position);
                return this._position += 4,
                    e
            }
            readFloat() {
                const e = this._view.readFloatLE(this._position);
                return this._position += 4,
                    e
            }
            readString() {
                const e = this._view.readUInt16LE(this._position);
                this._position += 2;
                const t = this._view.toString("utf16le", this._position, this._position + 2 * e);
                return this._position += 2 * e,
                    t
            }
            readVector2() {
                const e = this._view.readFloatLE(this._position)
                    , t = this._view.readFloatLE(this._position + 4);
                return this._position += 8,
                {
                    x: e,
                    y: t
                }
            }
            get canRead() {
                return this._position < this._view.length
            }
        }
        class bn {
            constructor(e) {
                this._buffer = new fn,
                    this._connected = !1,
                    this._socket = new WebSocket(e),
                    this._socket.binaryType = "arraybuffer",
                    this._socket.onopen = (() => {
                        this._connected = !0,
                            this.onopen && this.onopen()
                    }
                    ),
                    this._socket.onclose = (e => this.oncloseInternal(e)),
                    this._socket.onmessage = (e => {
                        this.onmessage && this.onmessage(new yn(e.data))
                    }
                    )
            }
            flushBuffer() {
                this._connected && this._buffer.length && this._socket.send(this._buffer.getView()),
                    this._buffer.reset()
            }
            close() {
                this._socket.onopen = null,
                    this._socket.onclose = null,
                    this._socket.onmessage = null,
                    this._socket.close(),
                    this.oncloseInternal(null)
            }
            get connected() {
                return this._connected
            }
            get buffer() {
                return this._buffer
            }
            oncloseInternal(e) {
                this._connected && (this._connected = !1,
                    this.onclose && this.onclose(e ? e.code : void 0))
            }
        }
        class vn {
            constructor(e, t, i, n) {
                this.minX = e,
                    this.minY = t,
                    this.maxX = i,
                    this.maxY = n
            }
            get width() {
                return this.maxX - this.minX
            }
            get height() {
                return this.maxY - this.minY
            }
            get centerX() {
                return (this.minX + this.maxX) / 2
            }
            get centerY() {
                return (this.minY + this.maxY) / 2
            }
            intersectAABB(e) {
                return this.maxX >= e.minX && this.minX <= e.maxX && this.maxY >= e.minY && this.minY <= e.maxY
            }
            intersectCircle(e, t, i) {
                const n = Math.max(this.minX, Math.min(e, this.maxX))
                    , s = Math.max(this.minY, Math.min(t, this.maxY))
                    , a = e - n
                    , o = t - s;
                return a * a + o * o < i * i
            }
            containsPoint(e, t) {
                return this.minX <= e && e <= this.maxX && this.minY <= t && t <= this.maxY
            }
        }
        var _n = i("54e4")
            , Cn = i.n(_n);
        const xn = {
            alpha: {
                start: 1,
                end: .4
            },
            scale: {
                start: .08,
                end: .08,
                minimumScaleMultiplier: 1
            },
            color: {
                start: "#ffffff",
                end: "#ffffff"
            },
            speed: {
                start: 5,
                end: 50,
                minimumSpeedMultiplier: 1
            },
            acceleration: {
                x: 0,
                y: 0
            },
            maxSpeed: 0,
            startRotation: {
                min: 0,
                max: 360
            },
            noRotation: !1,
            rotationSpeed: {
                min: 0,
                max: 0
            },
            lifetime: {
                min: .2,
                max: .8
            },
            blendMode: "normal",
            frequency: .011,
            emitterLifetime: -1,
            maxParticles: 50,
            pos: {
                x: 0,
                y: 0
            },
            addAtBack: !1,
            spawnType: "circle",
            spawnCircle: {
                x: 0,
                y: 0,
                r: 40
            }
        }
            , wn = {
                alpha: {
                    start: 1,
                    end: .4
                },
                scale: {
                    start: .3,
                    end: .08,
                    minimumScaleMultiplier: 1
                },
                color: {
                    start: "#ffffff",
                    end: "#ffffff"
                },
                speed: {
                    start: 0,
                    end: 0,
                    minimumSpeedMultiplier: 1
                },
                acceleration: {
                    x: 0,
                    y: 0
                },
                maxSpeed: 0,
                startRotation: {
                    min: 0,
                    max: 360
                },
                noRotation: !1,
                rotationSpeed: {
                    min: 0,
                    max: 0
                },
                lifetime: {
                    min: .2,
                    max: .8
                },
                blendMode: "normal",
                frequency: .011,
                emitterLifetime: -1,
                maxParticles: 100,
                pos: {
                    x: 0,
                    y: 0
                },
                addAtBack: !1,
                spawnType: "circle",
                spawnCircle: {
                    x: 0,
                    y: 0,
                    r: 80
                }
            };
        var kn = o["WebGLRenderer"];
        const Mn = [3853055, 12607231, 1630103, 16730031, 16770048, 16744005, 7956479, 1629990, 14620710]
            , Sn = [6600190, 16751655, 13576414, 3853055, 1629990, 16572672, 14620710, 16744005, 12607231, 1630103, 16730031, 7956479]
            , Tn = [16777215, 130973, 123135, 10093055, 16712118, 16730369, 4128513]
            , In = [32, 64, 128]
            , Pn = 25
            , An = {
                71: {
                    key: "G",
                    skill: w.Antisplit
                },
                81: {
                    key: "Q",
                    skill: w.Teleport
                },
                65: {
                    key: "A",
                    skill: w.MassDecay
                },
                66: {
                    key: "B",
                    skill: w.Blind
                },
                84: {
                    key: "T/C",
                    skill: w.Instability
                },
                83: {
                    key: "S",
                    skill: w.Snowball
                },
                69: {
                    key: "E",
                    skill: w.Adaptation
                }
            };
        function On() {
            try {
                const t = new o["Application"]({
                    view: document.createElement("canvas"),
                    autoStart: !1
                });
                return t.stage.filters = [new o["filters"].AlphaFilter, new o["filters"].NoiseFilter],
                    t.renderer.render(t.stage),
                    !1
            } catch (e) {
                return !0
            }
        }
        const jn = !o["utils"].isWebGLSupported() || On();
        class Bn extends Cn.a {
            constructor(e, t) {
                if (super(),
                    this._now = 0,
                    this._scaleW = 0,
                    this._scaleH = 0,
                    this._viewArea = new vn(0, 0, 0, 0),
                    this._prevViewArea = new vn(0, 0, 0, 0),
                    this._nextViewArea = new vn(0, 0, 0, 0),
                    this._viewAreaNextTime = 0,
                    this._snapCamera = !0,
                    this._players = [],
                    this._localPlayerCells = [],
                    this._localPlayerIndex = 0,
                    this._namesCache = new Map,
                    this._namesRenderingElapsed = 0,
                    this._ejectKeyDown = !1,
                    this._ejectKeyDownTime = 0,
                    this._lastInputSendTime = 0,
                    this._skills = new Map,
                    this._mvpTimer = 0,
                    this._mvpTimerSeconds = 0,
                    this._mvpState = P.Despawned,
                    this._ufoState = 0,
                    this._ufoTimer = 0,
                    this.app = new o["Application"]({
                        backgroundColor: 2960944,
                        antialias: !0,
                        view: e,
                        forceCanvas: jn
                    }),
                    this.cellMgr = new un(this),
                    this.isWebGL = this.app.renderer instanceof kn,
                    this.isWebGL) {
                    const e = W(0, 100);
                    let t;
                    t = e < 25 ? "bg_pattern_1" : e < 50 ? "bg_pattern_2" : e < 75 ? "bg_pattern_3" : "bg_pattern_4";
                    const i = o["Texture"].from(t);
                    this._background = new o["extras"].TilingSprite(i),
                        this._background.uvRespectAnchor = !0,
                        this._background.anchor.set(.5, .5),
                        this.app.stage.addChild(this._background)
                }
                this._camera = new o["Container"],
                    this.app.stage.addChild(this._camera);
                const i = new o["Graphics"];
                i.lineStyle(10, 12303291),
                    i.moveTo(0, 0),
                    i.lineTo(y.worldWidth, 0),
                    i.lineTo(y.worldWidth, y.worldHeight),
                    i.lineTo(0, y.worldHeight),
                    i.lineTo(0, 0),
                    this._camera.addChild(i),
                    this._mvpSpawn = new o["Sprite"](o["Texture"].from("mvp_spawn")),
                    this._mvpSpawn.position.set(y.worldWidth / 2, y.worldHeight / 2),
                    this._mvpSpawn.anchor.set(.5, .5),
                    this._mvpSpawn.visible = !1,
                    this._camera.addChild(this._mvpSpawn),
                    this._mvpSpawn2 = new o["Sprite"](o["Texture"].from("mvp_spawn2")),
                    this._mvpSpawn2.anchor.set(.5, .5),
                    this._mvpSpawn.addChild(this._mvpSpawn2),
                    this.auraLayer = new o["Container"],
                    this.auraLayer.filters = [new o["filters"].AlphaFilter(.2)],
                    this._camera.addChild(this.auraLayer),
                    this.extraMvpAuraLayer = new o["Container"],
                    this._camera.addChild(this.extraMvpAuraLayer),
                    this.teleportingLayer = new o["Container"],
                    this.teleportingLayer.filters = [new o["filters"].AlphaFilter(.2)],
                    this._camera.addChild(this.teleportingLayer),
                    this.cellsLayer = new o["Container"],
                    this._camera.addChild(this.cellsLayer),
                    this._instabilityFilter = new o["filters"].NoiseFilter,
                    this._instabilityFilter.noise = .6,
                    this.instabilityLayer = new o["Container"],
                    this.instabilityLayer.filters = [this._instabilityFilter],
                    this._camera.addChild(this.instabilityLayer),
                    this.textsLayer = new o["Container"],
                    this._camera.addChild(this.textsLayer),
                    this.virusLayer = new o["Container"],
                    this._camera.addChild(this.virusLayer),
                    this.mvpLayer = new o["Container"],
                    this._camera.addChild(this.mvpLayer),
                    this._onResizeBound = (() => setTimeout(() => this.onResize(), 0)),
                    window.addEventListener("resize", this._onResizeBound),
                    this._onKeydownBound = (e => this.onKeyDown(e)),
                    document.addEventListener("keydown", this._onKeydownBound),
                    this._onKeyupBound = (e => this.onKeyUp(e)),
                    document.addEventListener("keyup", this._onKeyupBound),
                    zt.onloaded = ((e, t) => this.onSkinLoaded(e, t)),
                    this._blindClearRect = new o["Graphics"],
                    this._blindCircle = new o["Graphics"],
                    this._blindCircle.beginFill(16777215, 1),
                    this._blindCircle.drawCircle(0, 0, 512),
                    this._blindCircle.endFill(),
                    this._blindTexture = o["RenderTexture"].create(this.app.renderer.width, this.app.renderer.height),
                    this._blindSprite = new o["Sprite"](this._blindTexture),
                    this._blindSprite.blendMode = o["BLEND_MODES"].MULTIPLY,
                    this._blindSprite.visible = !1,
                    this.app.stage.addChild(this._blindSprite),
                    this._mvpArrow = new o["Sprite"](o["Texture"].from("mvp_arrow")),
                    this._mvpArrow.visible = !1,
                    this._mvpArrow.anchor.set(.5, 0),
                    this.app.stage.addChild(this._mvpArrow),
                    this._ufoOverlay = new o["Sprite"](o["Texture"].from("ufo_overlay")),
                    this._ufoOverlay.visible = !1,
                    this._ufoOverlay.alpha = .3,
                    this.app.stage.addChild(this._ufoOverlay),
                    this.onResize(),
                    this.updateCamera(),
                    this.app.ticker.add(() => this.update()),
                    this._client = new bn("".concat(t.url, "?token=").concat(t.token)),
                    this._client.onmessage = (e => this.onMessage(e)),
                    this._client.onclose = (e => this.emit("disconnected", e))
            }
            destroy() {
                window.removeEventListener("resize", this._onResizeBound),
                    document.removeEventListener("keydown", this._onKeydownBound),
                    document.removeEventListener("keyup", this._onKeyupBound),
                    zt.onloaded = null,
                    this.app.destroy(),
                    this._blindTexture.destroy(!0),
                    dn["Howler"].stop()
            }
            update() {
                const e = performance.now()
                    , t = e - this._now;
                if (this._now = e,
                    this.playing) {
                    if (this.cellMgr.update(.001 * t),
                        this.updateSkillCooldowns(),
                        this.updateCamera(),
                        this.updateMvp(),
                        this._instabilityFilter.seed = Math.sin(this.now),
                        this.blind,
                        this._ufoState && this._background) {
                        const e = 3e4
                            , t = Qi((this._ufoTimer - this.now) / e, 0, 1)
                            , i = ~~en(0, 255, t);
                        this._background.tint = i | i << 8 | i << 16
                    }
                    this.sendInput(),
                        this._client.flushBuffer(),
                        this.namesCacheCleanup()
                }
            }
            get playing() {
                return !!(this._client && this._client.connected && this._localPlayerIndex)
            }
            get now() {
                return this._now
            }
            resizeBlind() {
                this._blindTexture.resize(this.app.renderer.width, this.app.renderer.height),
                    this._blindClearRect.clear(),
                    this._blindClearRect.beginFill(0, 1),
                    this._blindClearRect.drawRect(0, 0, this.app.renderer.width, this.app.renderer.height),
                    this._blindClearRect.endFill()
            }
            updateBlind() {
                this.app.renderer.render(this._blindClearRect, this._blindTexture, !1),
                    this._localPlayerCells.forEach(e => {
                        const t = this.app.renderer.width / 2 + (e.x - this._viewArea.centerX) * this._camera.scale.x
                            , i = this.app.renderer.height / 2 + (e.y - this._viewArea.centerY) * this._camera.scale.y
                            , n = nn(e.radius, this._viewArea) * this._camera.scale.x
                            , s = n / 512;
                        this._blindCircle.position.set(t, i),
                            this._blindCircle.scale.set(s, s),
                            this.app.renderer.render(this._blindCircle, this._blindTexture, !1)
                    }
                    )
            }
            get blind() {
                return this._blindSprite.visible
            }
            set blind(e) {
                this._blindSprite.visible = e
            }
            onResize() {
                const e = this.app.view.getBoundingClientRect()
                    , t = e.width
                    , i = e.height;
                this.app.renderer.resize(t, i),
                    this._camera.position.set(t / 2, i / 2),
                    this._background && (this._background.width = t,
                        this._background.height = i,
                        this._background.position.set(t / 2, i / 2)),
                    this.resizeBlind(),
                    this._ufoOverlay.width = t,
                    this._ufoOverlay.height = i
            }
            updateCamera() {
                const e = Qi(1 - (this._viewAreaNextTime - this.now) / rn, 0, 1);
                this._viewArea = new vn(en(this._prevViewArea.minX, this._nextViewArea.minX, e), en(this._prevViewArea.minY, this._nextViewArea.minY, e), en(this._prevViewArea.maxX, this._nextViewArea.maxX, e), en(this._prevViewArea.maxY, this._nextViewArea.maxY, e)),
                    this._scaleW = this.app.renderer.width / this._viewArea.width,
                    this._scaleH = this.app.renderer.height / this._viewArea.height;
                const t = Math.max(this._scaleW / globalZoomLevel, this._scaleH / globalZoomLevel);
                this._camera.scale.set(t, t),
                    this._camera.pivot.set(this._viewArea.centerX, this._viewArea.centerY),
                    this._background && (this._background.tileScale.set(t, t),
                        this._background.tilePosition.set(-this._viewArea.centerX * t, -this._viewArea.centerY * t))
            }
            get cameraScale() {
                return this._camera.scale.x
            }
            onMessage(e) {
                try {
                    while (e.canRead) {
                        const t = e.readUInt8();
                        switch (t) {
                            case b.Greeting:
                                this._localPlayerIndex = e.readUInt16();
                                const i = e.readUInt16();
                                for (let t = 0; t < i; ++t)
                                    this.readPlayer(e);
                                const n = e.readUInt8();
                                for (let t = 0; t < n; ++t) {
                                    const t = S[e.readUInt8()]
                                        , i = e.readUInt16()
                                        , n = e.readUInt16();
                                    this._skills.set(t, {
                                        totalCooldown: i,
                                        readyTime: performance.now() + 1e3 * n,
                                        cooldown: n,
                                        startCooldown: !1
                                    })
                                }
                                const s = !!e.readUInt8();
                                if (s) {
                                    const e = o["Texture"].from(Lt("./noise.png"));
                                    e.baseTexture.on("loaded", () => this.onNoiseTextureLoaded(e))
                                }
                                this.emit("joinedRoom");
                                break;
                            case b.UpdateState:
                                this.readStateUpdate(e);
                                break;
                            case b.PlayerLeft:
                                const a = e.readUInt16();
                                this.removePlayer(a);
                                break;
                            case b.PlayerJoined:
                                this.readPlayer(e);
                                break;
                            case b.Top:
                                const r = []
                                    , c = e.readUInt8();
                                for (let t = 0; t < c; ++t) {
                                    const t = e.readUInt16()
                                        , i = e.readUInt32()
                                        , n = t === this._localPlayerIndex;
                                    r.push({
                                        name: this._players[t].name,
                                        mass: i,
                                        isLocal: n
                                    })
                                }
                                const p = e.readUInt8();
                                if (p) {
                                    e.readUInt16(),
                                        e.readUInt32()
                                }
                                this.emit("topUpdated", r);
                                break;
                            case b.SnapCamera:
                                this._snapCamera = !0;
                                break;
                            case b.Blind:
                                this.blind = !!e.readUInt8();
                                break;
                            case b.SkillCooldown:
                                const l = S[e.readUInt8()]
                                    , d = this._skills.get(l);
                                d && (d.startCooldown = !0);
                                break;
                            case b.Death:
                                {
                                    const t = e.readUInt32()
                                        , i = e.readUInt32();
                                    this.blind = !1,
                                        this.emit("death", t, i),
                                        this.resetSkillCooldown(w.Teleport);
                                    break
                                }
                            case b.LeftRoom:
                                {
                                    const t = e.readUInt32()
                                        , i = e.readUInt32()
                                        , n = e.readUInt32();
                                    this.emit("leaveRoom", t, i, n);
                                    break
                                }
                            case b.Respawned:
                                this._snapCamera = !0;
                                const g = !!e.readUInt8();
                                g && this.resetSkillCooldowns();
                                break;
                            case b.MvpWon:
                                {
                                    const t = e.readUInt8()
                                        , i = [];
                                    for (let s = 0; s < t; ++s) {
                                        const t = e.readString()
                                            , n = e.readUInt32();
                                        i.push({
                                            name: t,
                                            mass: n
                                        })
                                    }
                                    const n = e.readUInt32();
                                    console.dir({
                                        top: i,
                                        contributorsCount: n
                                    }),
                                        this.setMvpState(P.Despawned, {
                                            top: i,
                                            contributorsCount: n
                                        });
                                    break
                                }
                            case b.MvpTimer:
                                const u = !!e.readUInt8();
                                this._mvpTimer = performance.now() + e.readUInt32(),
                                    u ? this.setMvpState(P.Spawned) : this.setMvpState(P.Spawning);
                                break;
                            case b.MvpInOtherRoom:
                                this.emit("mvpInOtherRoom");
                                break;
                            case b.UfoState:
                                this._ufoState = e.readUInt8(),
                                    !this._ufoState && this._background && (this._background.tint = 16777215),
                                    this._ufoTimer = this.now + e.readUInt32(),
                                    console.log("Ufo state: ".concat(this._ufoState));
                                break;
                            default:
                                throw new Error("Unknown packet id ".concat(t))
                        }
                    }
                } catch (t) {
                    console.error(t),
                        this._client.close()
                }
            }
            readPlayer(e) {
                const t = e.readUInt16()
                    , i = e.readString()
                    , n = e.readUInt8()
                    , s = e.readUInt8()
                    , a = s ? e.readString() : null
                    , o = !!e.readUInt8();
                this.addPlayer(t, i, a, n, o)
            }
            readStateUpdate(e) {
                const t = e.readUInt32();
                this.emit("bestMassChanged", t);
                const i = e.readVector2()
                    , n = e.readVector2();
                this._nextViewArea = new vn(i.x, i.y, n.x, n.y),
                    this._snapCamera ? (this._prevViewArea = this._nextViewArea,
                        this._viewAreaNextTime = 0,
                        this._snapCamera = !1) : (this._prevViewArea = this._viewArea,
                            this._viewAreaNextTime = this.now + rn);
                const s = e.readUInt16()
                    , a = e.readUInt16();
                for (let o = 0; o < s; ++o) {
                    let t = e.readUInt16();
                    32768 & t ? (t &= 32767,
                        this.readFullCell(e, t)) : this.readUpdatedCell(e, t)
                }
                for (let o = 0; o < a; ++o) {
                    let t = e.readUInt16()
                        , i = 0;
                    32768 & t && (t &= 32767,
                        i = e.readUInt16());
                    const n = this.cellMgr.getCell(t);
                    if (!n)
                        throw new Error("Cell ".concat(t, " wasn't found"));
                    n.beginRemove(i),
                        n instanceof pn && n.player.index === this._localPlayerIndex && this._localPlayerCells.splice(this._localPlayerCells.indexOf(n), 1)
                }
            }
            updatePlayerCellFlags(e, t) {
                e.massDecayAura = !!(t & C.MassDecayAura),
                    e.massDecayed = !!(t & C.MassDecayed),
                    e.antisplit = !!(t & C.Antisplit),
                    e.teleporting = !!(t & C.Teleporting),
                    e.instability = !!(t & C.Instability),
                    e.blind = !!(t & C.Blind),
                    e.antiEjectDebuff = !!(t & C.AntiEjectDebuff),
                    e.infect = !!(t & C.Infect),
                    e.shield = !!(t & C.Shield),
                    e.altBlind = !!(t & C.AltBlind),
                    e.altAntisplit = !!(t & C.AltAntisplit),
                    e.adaptation = !!(t & C.Adaptation)
            }
            readFullCell(e, t) {
                const i = e.readUInt8()
                    , n = e.readVector2();
                switch (i) {
                    case x.PlayerCell:
                        {
                            const s = e.readUInt16()
                                , a = e.readUInt16()
                                , o = this.getPlayer(a);
                            if (!o)
                                throw new Error("Player ".concat(a, " wasn't found"));
                            const r = this.cellMgr.addCell(i, {
                                id: t,
                                mass: s,
                                player: o,
                                x: n.x,
                                y: n.y
                            })
                                , c = e.readUInt16();
                            this.updatePlayerCellFlags(r, c),
                                a === this._localPlayerIndex && this._localPlayerCells.push(r);
                            break
                        }
                    case x.Pellet:
                        this.cellMgr.addCell(i, {
                            id: t,
                            x: n.x,
                            y: n.y,
                            mass: y.pelletMass,
                            tint: Mn[t % Mn.length]
                        });
                        break;
                    case x.Virus:
                        const s = e.readUInt16();
                        this.cellMgr.addCell(i, {
                            id: t,
                            mass: s,
                            x: n.x,
                            y: n.y
                        });
                        break;
                    case x.Mass:
                        {
                            const s = e.readUInt16()
                                , a = e.readUInt8()
                                , o = !!e.readUInt8();
                            this.cellMgr.addCell(i, {
                                id: t,
                                mass: s,
                                x: n.x,
                                y: n.y,
                                tint: Sn[a],
                                infected: o
                            });
                            break
                        }
                    case x.BlindProjectile:
                        this.cellMgr.addCell(i, {
                            id: t,
                            x: n.x,
                            y: n.y,
                            mass: y.projectileMass,
                            particles: {
                                textures: [o["Texture"].from("proj_blind")],
                                emitterConfig: xn
                            }
                        });
                        break;
                    case x.AntisplitProjectile:
                        this.cellMgr.addCell(i, {
                            id: t,
                            x: n.x,
                            y: n.y,
                            mass: y.projectileMass
                        });
                        break;
                    case x.SnowballProjectile:
                        this.cellMgr.addCell(i, {
                            id: t,
                            x: n.x,
                            y: n.y,
                            mass: y.snowballMass,
                            particles: {
                                textures: [o["Texture"].from("snowflake")],
                                emitterConfig: wn
                            }
                        });
                        break;
                    case x.Mvp:
                        this.cellMgr.addCell(i, {
                            id: t,
                            x: n.x,
                            y: n.y,
                            mass: y.mvpMass
                        });
                        break;
                    case x.MvpLaser:
                        const a = e.readFloat();
                        this.cellMgr.addCell(i, {
                            id: t,
                            x: n.x,
                            y: n.y,
                            mass: 256,
                            angle: a
                        });
                        break;
                    case x.MvpPellet:
                        {
                            const s = e.readUInt16();
                            this.cellMgr.addCell(i, {
                                id: t,
                                mass: s,
                                x: n.x,
                                y: n.y,
                                tint: Mn[t % Mn.length]
                            });
                            break
                        }
                    case x.Ufo:
                        {
                            const s = !!e.readUInt8();
                            this.cellMgr.addCell(i, {
                                id: t,
                                x: n.x,
                                y: n.y,
                                mass: 7e3,
                                sucking: s
                            });
                            break
                        }
                    default:
                        throw new Error("Invalid cell type ".concat(i))
                }
            }
            readUpdatedCell(e, t) {
                const i = this.cellMgr.getCell(t);
                if (!i)
                    throw new Error("Cell ".concat(t, " wasn't found"));
                const n = e.readUInt8();
                if (n & _.Position) {
                    const t = e.readVector2()
                        , s = !!(n & _.Teleported);
                    i.setNextPosition(t.x, t.y, s)
                }
                if (n & _.Mass) {
                    const t = e.readUInt16();
                    i.setNextMass(t)
                }
                if (n & _.PlayerCellFlagsChanged) {
                    if (!(i instanceof pn))
                        throw new Error("Invalid cell type");
                    const t = e.readInt16();
                    this.updatePlayerCellFlags(i, t)
                }
                if (n & _.Ufo) {
                    if (!(i instanceof gn))
                        throw new Error("Invalid cell type");
                    i.sucking = !!e.readUInt8(),
                        i.laserCounter = e.readUInt8()
                }
            }
            getPlayer(e) {
                return this._players[e]
            }
            addPlayer(e, t, i, n, s) {
                this._players[e] = {
                    index: e,
                    name: t,
                    skin: i,
                    color: n,
                    isVip: s
                }
            }
            removePlayer(e) {
                this._players[e] = null
            }
            get localPlayer() {
                return this.getPlayer(this._localPlayerIndex)
            }
            get alive() {
                return !!this._localPlayerCells.length
            }
            get isVip() {
                return this._localPlayerIndex && this._players[this._localPlayerIndex].isVip
            }
            onSkinLoaded(e, t) {
                this.cellMgr.updatedCells.forEach(i => {
                    i instanceof pn && i.player.skin === e && i.setSkin(t)
                }
                )
            }
            getName(e, t) {
                const i = this._namesRenderingElapsed < 2
                    , n = In.find(e => e >= t) || In[In.length - 1]
                    , s = this._namesCache.get(e);
                if (s) {
                    const a = s.reduce((e, i) => {
                        return e.size < t && i.size >= t ? i : Math.abs(i.size - t) < Math.abs(e.size - t) ? i : e
                    }
                        , s[0]);
                    if (a.size !== n && i) {
                        const t = this.renderName(e, n);
                        return s.push(t),
                            t
                    }
                    return a.lastUsedTime = this.now,
                        a
                }
                if (i) {
                    const t = this.renderName(e, n);
                    return this._namesCache.set(e, [t]),
                        t
                }
                return null
            }
            renderName(e, t) {
                const i = performance.now()
                    , n = document.createElement("canvas")
                    , s = n.getContext("2d")
                    , a = Math.max(~~(t / 10), 2)
                    , r = "".concat(t, "px Droid Sans");
                s.font = r;
                const c = ~~Math.min(.54 * t * pt, s.measureText(e).width) + 2 * a;
                return n.width = Math.min(4096, q(c)),
                    n.height = Math.min(4096, q(4 * t)),
                    s.beginPath(),
                    s.rect((n.width - c) / 2, 0, c, n.height),
                    s.clip(),
                    s.font = r,
                    s.lineWidth = a,
                    s.textBaseline = "middle",
                    s.textAlign = "center",
                    s.fillStyle = "white",
                    s.strokeStyle = "black",
                    s.miterLimit = 2,
                    s.strokeText(e, n.width / 2, n.height / 2),
                    s.fillText(e, n.width / 2, n.height / 2),
                    this._namesRenderingElapsed += performance.now() - i,
                {
                    size: t,
                    texture: o["Texture"].fromCanvas(n),
                    lastUsedTime: this.now
                }
            }
            namesCacheCleanup() {
                this._namesRenderingElapsed = 0,
                    this._namesCache.forEach((e, t) => {
                        for (let i = e.length - 1; i >= 0; --i)
                            this.now - e[i].lastUsedTime >= 5e3 && (e[i].texture.destroy(!0),
                                e.splice(i, 1));
                        e.length || this._namesCache.delete(t)
                    }
                    )
            }
            respawn() {
                this._client.buffer.writeUInt8(v.Respawn)
            }
            leaveRoom() {
                this._client.buffer.writeUInt8(v.LeaveRoom)
            }
            onKeyUp(e) {
                87 === e.keyCode && (this._ejectKeyDown = !1)
            }
            onKeyDown(e) {
                this.playing && this.alive && (16 === e.keyCode ? (e.preventDefault(),
                    this._client.buffer.writeUInt8(v.Split)) : 87 === e.keyCode ? (this._ejectKeyDown = !0,
                        this._ejectKeyDownTime = performance.now()) : e.keyCode in An ? this.useSkill(An[e.keyCode].skill) : 67 === e.keyCode && this._client.buffer.writeUInt8(v.CancelInstability))
            }
            sendInput() {
                const e = this.now - this._lastInputSendTime;
                if (e < Pn || !this.alive && e < 5e3)
                    return;
                const t = this._camera.scale.x
                    , i = this.app.renderer.plugins.interaction.mouse.global
                    , n = (i.x - this.app.renderer.width / 2) / t
                    , s = (i.y - this.app.renderer.height / 2) / t;
                ; if (!sendInputBlock) {
                    this._client.buffer.writeUInt8(v.SetMouseOffset),
                        this._client.buffer.writeFloat(n),
                        this._client.buffer.writeFloat(s);
                }

                ; const a = this.now - this._ejectKeyDownTime;
                (a <= Pn || this._ejectKeyDown && a <= 1e3) && this._client.buffer.writeUInt8(v.EjectMass),
                    this._lastInputSendTime = this.now
            }
            getSkills() {
                return [...this._skills.keys()]
            }
            getSkillTotalCooldown(e) {
                const t = this._skills.get(e);
                return t ? t.totalCooldown : 0
            }
            resetSkillCooldowns() {
                this._skills.forEach((e, t) => {
                    this.resetSkillCooldown(t)
                }
                )
            }
            resetSkillCooldown(e) {
                const t = this._skills.get(e);
                t && (t.readyTime = this.now,
                    t.startCooldown = !1,
                    this.updateSkillCooldown(e, t))
            }
            useSkill(e) {
                const t = this._skills.get(e);
                t && this.now >= t.readyTime && (this._client.buffer.writeUInt8(v.UseSkill),
                    this._client.buffer.writeUInt8(M[e]))
            }
            updateSkillCooldowns() {
                this._skills.forEach((e, t) => {
                    e.startCooldown && (e.readyTime = this.now + 1e3 * e.totalCooldown,
                        e.startCooldown = !1),
                        this.updateSkillCooldown(t, e)
                }
                )
            }
            updateSkillCooldown(e, t) {
                const i = ~~Math.max((t.readyTime - this.now) / 1e3, 0);
                t.cooldown !== i && (t.cooldown = i,
                    this.emit("cooldownChanged", e, i))
            }
            updateMvp() {
                if (this._mvpState === P.Spawning || this._mvpState === P.Spawned) {
                    const e = ~~Math.max((this._mvpTimer - this.now) / 1e3, 0);
                    e !== this._mvpTimerSeconds && (this._mvpTimerSeconds = e,
                        this.emit("mvpTimerChanged", this._mvpTimerSeconds))
                }
                const e = this._mvpState === P.Spawning && this._mvpTimerSeconds <= 180;
                if (this._mvpState === P.Spawned || e) {
                    const e = y.worldWidth / 2
                        , t = y.worldHeight / 2;
                    if (this._viewArea.containsPoint(e, t))
                        this._mvpArrow.visible = !1;
                    else {
                        const i = Math.max(this._viewArea.minX, Math.min(e, this._viewArea.maxX))
                            , n = Math.max(this._viewArea.minY, Math.min(t, this._viewArea.maxY))
                            , s = (i - this._viewArea.minX) * this._scaleW
                            , a = (n - this._viewArea.minY) * this._scaleH;
                        this._mvpArrow.rotation = Math.PI / 2 + Math.atan2(t - this._viewArea.centerY, e - this._viewArea.centerX),
                            this._mvpArrow.position.set(s, a),
                            this._mvpArrow.visible = !0
                    }
                }
                e && (this._mvpSpawn.visible = !0,
                    this._mvpSpawn2.alpha = Math.sin(.002 * this.now))
            }
            setMvpState(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                e !== this._mvpState && (this._mvpState = e,
                    this.emit("mvpStateChanged", e, t),
                    this._mvpArrow.visible = this._mvpState === P.Spawned,
                    this._mvpSpawn.visible = !1)
            }
            get mvpTimer() {
                return this._mvpTimer
            }
            onNoiseTextureLoaded(e) {
                const t = new o["Sprite"](e);
                setTimeout(() => this.app.stage.filters = [new o["filters"].DisplacementFilter(t)], W(9e4, 18e4))
            }
            get ufoOverlay() {
                return this._ufoOverlay
            }
        }
        var Rn = function () {
            var e = this
                , t = e.$createElement
                , i = e._self._c || t;
            return i("Popup",
                {
                    ref: "deathPopup"
                },
                [i("div", {
                    staticClass: "middle-panel"
                }), i("div", {
                    staticClass: "header text-outline-black"
                }, [e._v("Ваш результат")]), i("div", {
                    staticClass: "reward"
                }, [i("span", {
                    staticClass: "reward-hint"
                }, [e._v("Ваша награда ")]), i("Currency", {
                    staticClass: "reward-amount text-outline-black",
                    attrs: {
                        currency: e.reward
                    }
                })], 1), i("div", {
                    staticClass: "buttons-container"
                }, [i("div", {
                    staticClass: "button-respawn sprite-button-blue-small",
                    on: {
                        click: e.onButtonRespawnClick
                    }
                }, [e._v("\n            Играть\n        ")]), i("div", {
                    staticClass: "button-exit sprite-button-blue-small",
                    on: {
                        click: e.onButtonExitClick
                    }
                }, [e._v("\n            Выход\n        ")])]), i("div", {
                    staticClass: "result-container"
                }, [i("div", {
                    staticClass: "result text-outline-black"
                }, [e._v(e._s(e.bestMass))])]), i("div", {
                    staticClass: "premium-respawn-container"
                }, [i("div", {
                    staticClass: "premium-respawn-hint"
                }, [e._v("\n            Продолжить игру с 75% от набранных очков"), i("br"), i("span", {
                    staticClass: "premium-respawn-cooldown-reset"
                }, [e._v("и перезарядить способности")])]), i("div", {
                    staticClass: "button-premium-respawn sprite-button-blue-small",
                    on: {
                        click: e.onButtonPremiumRespawnClick
                    }
                }, [i("Currency", {
                    attrs: {
                        currency: e.premiumRespawnPrice
                    }
                })], 1), i("div", {
                    staticClass: "gems-hint"
                }, [e._v("\n            У вас в наличии\n            "), i("Currency", {
                    staticClass: "gems text-outline-black",
                    attrs: {
                        currency: {
                            gems: e.gems
                        },
                        iconSize: 25
                    }
                })], 1)])
                ])
        }
            , Ln = [];
        let Un = class extends d["c"] {
            get reward() {
                return {
                    coins: this.coinsGained
                }
            }
            get premiumRespawnPrice() {
                return ct
            }
            onButtonRespawnClick() {
                this.respawn(),
                    this.$emit("close")
            }
            onButtonPremiumRespawnClick() {
                var e = this;
                return Object(s["a"])(function* () {
                    const t = yield e.asyncOperation({
                        type: r.PremiumRespawn
                    });
                    t && e.$emit("close")
                })()
            }
            onButtonExitClick() {
                this.exit(),
                    this.$emit("close")
            }
        }
            ;
        l["a"]([Object(d["b"])(Number)], Un.prototype, "bestMass", void 0),
            l["a"]([Object(d["b"])(Number)], Un.prototype, "coinsGained", void 0),
            l["a"]([Object(d["b"])(Function)], Un.prototype, "respawn", void 0),
            l["a"]([Object(d["b"])(Function)], Un.prototype, "exit", void 0),
            l["a"]([Object(g["a"])(r.AsyncOperation)], Un.prototype, "asyncOperation", void 0),
            l["a"]([Object(g["c"])(e => e.player.gems)], Un.prototype, "gems", void 0),
            Un = l["a"]([Object(d["a"])({
                components: {
                    Popup: he,
                    Currency: F
                }
            })], Un);
        var En = Un
            , Dn = En
            , Nn = (i("2b4f"),
                Object(D["a"])(Dn, Rn, Ln, !1, null, "8c0efcb6", null))
            , Fn = Nn.exports
            , Xn = function () {
                var e = this
                    , t = e.$createElement
                    , i = e._self._c || t;
                return i("Popup", {
                    style: e.popupStyle
                }, [i("div", {
                    staticClass: "message"
                }, [e._v("\n        " + e._s(e.message) + "\n    ")]), i("div", {
                    staticClass: "buttons-container"
                }, e._l(e.buttons, function (t, n) {
                    return i("div", {
                        key: n,
                        staticClass: "button sprite-button-blue-small",
                        on: {
                            click: function (i) {
                                return e.onPopupButtonClick(t)
                            }
                        }
                    }, [i("span", {
                        staticClass: "text"
                    }, [e._v(e._s(t.text))])])
                }), 0)])
            }
            , Gn = [];
        let zn = class extends d["c"] {
            onPopupButtonClick(e) {
                e.onClick ? e.onClick() : this.$emit("close")
            }
        }
            ;
        l["a"]([Object(d["b"])(String)], zn.prototype, "message", void 0),
            l["a"]([Object(d["b"])(Array)], zn.prototype, "buttons", void 0),
            l["a"]([Object(d["b"])(Object)], zn.prototype, "popupStyle", void 0),
            zn = l["a"]([Object(d["a"])({
                components: {
                    Popup: he
                }
            })], zn);
        var Vn = zn
            , Wn = Vn
            , qn = (i("b045"),
                Object(D["a"])(Wn, Xn, Gn, !1, null, "1b3d6cc4", null))
            , Yn = qn.exports
            , Hn = i("b012");
        let Jn = class extends d["c"] {
            constructor() {
                super(...arguments),
                    this.MvpState = P,
                    this.bestMass = 0,
                    this.isVip = !1,
                    this.top = [],
                    this.skills = {},
                    this.mvpState = P.Despawned,
                    this.mvpResult = null,
                    this.mvpTimer = 0,
                    this.showMvpWinnerName = !1,
                    this.mvpInOtherRoom = !1,
                    this.scale = 1,
                    this.transparentTop = !1
            }
            isTopEntryCompact(e) {
                return this.isVip && e.name.length + e.mass.toString().length > 24
            }
            get hudStyle() {
                return {
                    transform: "scale(".concat(this.scale)
                }
            }
            get mvpTimerText() {
                const e = this.mvpTimer % 60
                    , t = Math.floor(this.mvpTimer / 60);
                return "".concat(t.toString().padStart(2, "0"), ":").concat(e.toString().padStart(2, "0"))
            }
            get mvpContributorsCount() {
                return this.mvpResult.contributorsCount - this.mvpResult.top.length
            }
            get mvpContributorsCountText() {
                return "игрок".concat(X(this.mvpContributorsCount, "ом", "ами", "ами"))
            }
            mvpResultText(e) {
                return "".concat(e.name, " (").concat(e.mass, ")")
            }
            mounted() {
                this.game = new Bn(this.$refs.canvas, this.roomInfo),
                    this.disconnectedBound = (e => {
                        e === I.DualLogin ? this.openPopup({
                            type: Yn,
                            message: "Игра запущена из второго окна",
                            closable: !1
                        }) : this.openPopup({
                            type: Yn,
                            message: "Потеряно соединение с сервером",
                            buttons: [{
                                text: "Закрыть",
                                onClick: () => this.leaveGame()
                            }],
                            closable: !1
                        })
                    }
                    ),
                    this.game.once("disconnected", this.disconnectedBound),
                    this.game.once("joinedRoom", () => {
                        this.isVip = this.game.isVip,
                            this.game.getSkills().forEach(e => {
                                const t = Object.values(An).find(t => t.skill === e);
                                d["c"].set(this.skills, e, {
                                    cooldown: 0,
                                    key: t ? t.key : null
                                })
                            }
                            )
                    }
                    ),
                    this.game.once("leaveRoom", (e, t, i) => {
                        this.game.off("disconnected", this.disconnectedBound),
                            this.leaveGame({
                                coinsGained: e,
                                bestMass: t,
                                mvpCoinsGained: i
                            })
                    }
                    ),
                    this.game.on("topUpdated", e => this.top = e),
                    this.game.on("cooldownChanged", (e, t) => this.skills[e].cooldown = t),
                    this.game.on("bestMassChanged", e => this.bestMass = e),
                    this.game.on("death", (e, t) => {
                        this.openPopup({
                            type: Fn,
                            closable: !1,
                            coinsGained: e,
                            bestMass: t,
                            respawn: () => this.game.respawn(),
                            exit: () => this.game.leaveRoom()
                        })
                    }
                    ),
                    this.game.on("mvpStateChanged", (e, t) => {
                        this.mvpState = e,
                            this.mvpState === P.Despawned && (this.mvpResult = t,
                                this.showMvpWinnerName = !0,
                                setTimeout(() => this.showMvpWinnerName = !1, 15e3))
                    }
                    ),
                    this.game.on("mvpTimerChanged", e => this.mvpTimer = e),
                    this.game.on("mvpInOtherRoom", () => {
                        this.mvpInOtherRoom = !0,
                            setTimeout(() => this.mvpInOtherRoom = !1, 15e3)
                    }
                    ),
                    this.onResizeBound = (() => setTimeout(() => this.onResize(), 0)),
                    window.addEventListener("resize", this.onResizeBound),
                    this.onResize(),
                    this.setTransparentTop = Object(Hn["debounce"])(this.setTransparentTop, 1e3),
                    this.transparentTop = this.storeTransparentTop,
                    globalBlob = this;

            }
            destroyed() {
                this.game.destroy(),
                    window.removeEventListener("resize", this.onResizeBound)
            }
            getCooldownFillAngle(e) {
                const t = this.skills[e].cooldown
                    , i = this.game.getSkillTotalCooldown(e);
                return t / i * 360
            }
            onButtonExitClick() {
                this.openPopup({
                    type: Yn,
                    message: "Вы уверены, что хотите выйти в меню?",
                    buttons: [{
                        text: "Да",
                        onClick: () => this.game.leaveRoom()
                    }, {
                        text: "Нет"
                    }]
                })
            }
            onButtonFullscreenClick() {
                K()
            }
            getSkillCooldownFillStyle(e) {
                const t = this.skills[e].cooldown
                    , i = this.game.getSkillTotalCooldown(e)
                    , n = ~~(100 * t / i)
                    , s = 100 - n
                    , a = "".concat(n, ", ").concat(s, ", 0, 0")
                    , o = t < i ? "all 1s linear" : "none";
                return {
                    "stroke-dasharray": a,
                    transition: o
                }
            }
            onResize() {
                const e = this.$refs.canvas.getBoundingClientRect()
                    , t = e.width / y.viewAreaBaseWidth
                    , i = e.height / y.viewAreaBaseHeight;
                this.scale = Qi((t + i) / 2, .6, 1.2)
            }
            onTopClick() {
                this.transparentTop = !this.transparentTop,
                    this.setTransparentTop(this.transparentTop)
            }
        }
            ;
        l["a"]([Object(g["c"])(e => e.app.roomInfo)], Jn.prototype, "roomInfo", void 0),
            l["a"]([Object(g["c"])(e => e.player.transparentTop)], Jn.prototype, "storeTransparentTop", void 0),
            l["a"]([Object(g["a"])(r.OpenPopup)], Jn.prototype, "openPopup", void 0),
            l["a"]([Object(g["a"])(r.LeaveGame)], Jn.prototype, "leaveGame", void 0),
            l["a"]([Object(g["a"])(r.SetTransparentTop)], Jn.prototype, "setTransparentTop", void 0),
            Jn = l["a"]([Object(d["a"])({
                components: {
                    SkillIcon: xe
                }
            })], Jn);
        var Kn = Jn
            , $n = Kn
            , Zn = (i("087c"),
                Object(D["a"])($n, $i, Zi, !1, null, "53e414ae", null))
            , Qn = Zn.exports;
        let es = class extends d["c"] {
            constructor() {
                super(...arguments),
                    this.fullscreen = Y()
            }
            get loading() {
                return "complete" !== this.loader.state
            }
            get loaderText() {
                return "error" === this.loader.state ? "Ошибка при загрузке (".concat(this.loader.error, ")") : "loading" === this.loader.state ? "Загрузка..." : ""
            }
            get topLevelPopup() {
                return this.popups.length ? this.popups[this.popups.length - 1] : null
            }
            mounted() {
                document.addEventListener("keydown", e => {
                    !this.asyncOperation && 27 === e.keyCode && this.topLevelPopup && this.topLevelPopup.closable && this.closePopup(this.topLevelPopup.id)
                }
                ),
                    $(() => this.fullscreen = Y())
            }
            onModalMaskClick() {
                this.topLevelPopup.closable && this.closePopup(this.topLevelPopup.id)
            }
        }
            ;
        l["a"]([Object(g["c"])(e => e.app.popups)], es.prototype, "popups", void 0),
            l["a"]([Object(g["c"])(e => e.app.asyncOperation)], es.prototype, "asyncOperation", void 0),
            l["a"]([Object(g["c"])(e => e.app.inGame)], es.prototype, "inGame", void 0),
            l["a"]([Object(g["a"])(r.ClosePopup)], es.prototype, "closePopup", void 0),
            l["a"]([Object(g["c"])(e => e.app.loader)], es.prototype, "loader", void 0),
            es = l["a"]([Object(d["a"])({
                components: {
                    GameplayScreen: Qn,
                    MainMenuScreen: Ki
                }
            })], es);
        var ts = es
            , is = ts
            , ns = (i("7797"),
                Object(D["a"])(is, c, p, !1, null, "51ceb51e", null))
            , ss = ns.exports
            , as = i("2f62")
            , os = i("15fd");
        const rs = {};
        class cs {
            constructor(e, t, i) {
                this._gameUrl = e,
                    this._statsUrl = t,
                    this._auth = i
            }
            request(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
                return this.post("".concat(this._gameUrl, "/").concat(e), t)
            }
            reportStats(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
                this.post("".concat(this._statsUrl, "/").concat(e), t).catch(() => { }
                )
            }
            post(e, t) {
                var i = this;
                return Object(s["a"])(function* () {
                    let n = void 0;
                    t && (n = Object.keys(t).map(e => "".concat(encodeURIComponent(e), "=").concat(encodeURIComponent(t[e]))).join("&"));
                    const s = yield fetch("".concat(e, "?").concat(i._auth), {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
                        },
                        body: n
                    });
                    if (401 === s.status)
                        throw rs;
                    if (200 !== s.status)
                        throw new Error("Status: ".concat(s.status));
                    const a = yield s.text();
                    return a ? JSON.parse(a) : null
                })()
            }
        }
        class ps {
            constructor(e) {
                this._id = e["user_id"] || "1"
            }
            get type() {
                return Qe.None
            }
            get auth() {
                return "user_id=".concat(this._id)
            }
            init() {
                return Promise.resolve()
            }
            getPlayerFullSocialProfile() {
                return Promise.resolve({
                    type: Qe.None,
                    id: this._id,
                    firstName: "Безымянный",
                    lastName: "Кружок",
                    photo: "",
                    birthDate: "01.01.2001",
                    sex: "male"
                })
            }
            showInviteDialog() { }
            getPlayingFriendIds() {
                return Promise.resolve(["1", "2", "3"])
            }
            showBookmarksDialog() { }
            isAppInBookmarks() {
                return Promise.resolve(!0)
            }
            isGroupMember(e) {
                return Promise.resolve(!0)
            }
            wallPost(e) {
                return Promise.resolve(!0)
            }
            buyItem(e) {
                return Promise.resolve(!1)
            }
            subscribe(e) {
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                throw new Error("Not supported")
            }
            getReferrer() {
                return null
            }
        }
        class ls {
            constructor(e) {
                this._requestsCounter = 0,
                    this._queue = [],
                    this._rps = e
            }
            execute(e) {
                return this._requestsCounter >= this._rps ? new Promise((t, i) => {
                    this._queue.push({
                        resolve: t,
                        reject: i,
                        op: e
                    })
                }
                ) : (this.incrementCounter(),
                    e())
            }
            incrementCounter() {
                this._requestsCounter || setTimeout(() => this.resetCounter(), 1e3),
                    this._requestsCounter++
            }
            resetCounter() {
                this._requestsCounter = 0;
                for (let e = 0; this._queue.length && e < this._rps; ++e)
                    this.incrementCounter(),
                        this.runRequest(this._queue.shift())
            }
            runRequest(e) {
                return Object(s["a"])(function* () {
                    try {
                        const i = yield e.op();
                        e.resolve(i)
                    } catch (t) {
                        e.reject(t)
                    }
                })()
            }
        }
        const ds = "https://vk.com/js/api/xd_connection.js?2"
            , gs = "5.131"
            , us = 256;
        class ms {
            constructor(e) {
                this._rateLimiter = new ls(3),
                    this._params = e,
                    this._userId = e["viewer_id"],
                    this._auth = window.location.search,
                    this._auth.startsWith("?") && (this._auth = this._auth.substr(1, this._auth.length))
            }
            get type() {
                return Qe.Vk
            }
            get auth() {
                return this._auth
            }
            init() {
                return z(ds).then(() => this.initInternal())
            }
            getPlayerFullSocialProfile() {
                var e = this;
                return Object(s["a"])(function* () {
                    const t = yield e.callApi("users.get", {
                        fields: "photo_50,bdate,sex"
                    })
                        , i = t[0]
                        , n = i["first_name"]
                        , s = i["last_name"]
                        , a = i["photo_50"];
                    let o, r = null;
                    return 1 === i["sex"] ? r = "female" : 2 === i["sex"] && (r = "male"),
                        i["bdate"] && "function" === typeof i["bdate"].split && 3 === i["bdate"].split(".").length && (o = i["bdate"]),
                    {
                        type: Qe.Vk,
                        id: e._userId,
                        firstName: n,
                        lastName: s,
                        photo: a,
                        sex: r,
                        birthDate: o
                    }
                })()
            }
            showInviteDialog() {
                this.callUiMethod("showInviteBox", !0)
            }
            getPlayingFriendIds() {
                return this.callApi("friends.getAppUsers")
            }
            showBookmarksDialog() {
                this.callUiMethod("showSettingsBox", !0, us)
            }
            isAppInBookmarks() {
                return this.callApi("account.getAppPermissions").then(e => !!(e & us))
            }
            isGroupMember(e) {
                return this.callApi("groups.isMember", {
                    group_id: e
                })
            }
            wallPost(e) {
                var t = this;
                return Object(s["a"])(function* () {
                    try {
                        return yield t.callApi("wall.post", {
                            message: e.message,
                            attachments: e.appUrl
                        }),
                            !0
                    } catch (i) {
                        if (10007 === i["error_code"])
                            return !1;
                        throw i
                    }
                })()
            }
            buyItem(e) {
                return this._resolveOrder && this._resolveOrder(!1),
                    new Promise((t, i) => {
                        this._resolveOrder = t,
                            this._rejectOrder = i,
                            this.callUiMethod("showOrderBox", !0, {
                                type: "item",
                                item: e.id
                            })
                    }
                    )
            }
            subscribe(e, t) {
                return this._resolveSubscription && this._resolveSubscription({
                    result: !1
                }),
                    new Promise((i, n) => {
                        this._resolveSubscription = i,
                            this._rejectSubscription = n,
                            t ? this.callUiMethod("showSubscriptionBox", !0, "resume", {
                                subscription_id: +t
                            }) : this.callUiMethod("showSubscriptionBox", !0, "create", {
                                item: e.itemId
                            })
                    }
                    )
            }
            getReferrer() {
                const e = this._params["referrer"]
                    , t = {
                        referrer: e,
                        referrerType: this.getReferrerType(e)
                    };
                return e && e.startsWith("ad_") && (t.adId = e.substring(3)),
                    t
            }
            getReferrerType(e) {
                if (!e)
                    return et.Direct;
                if (e.startsWith("ad_"))
                    return et.Ad;
                switch (e) {
                    case "friends_feed":
                    case "request":
                    case "profile_status":
                    case "join_request":
                    case "friends_apps":
                        return et.Viral;
                    case "catalog_ads":
                    case "app_suggestions":
                        return et.Ad;
                    case "unknown":
                    case "menu":
                    case "recommendation":
                    case "catalog_popular":
                    case "catalog_new":
                    case "quick_search":
                    case "user_apps":
                    case "group":
                    case "featured":
                    case "top_grossing":
                    case "collections":
                    case "genre":
                    case "notifications_page":
                    case "myapps_page":
                    case "bestsellers":
                    default:
                        return et.Direct
                }
            }
            addCallbacks() {
                VK.addCallback("onOrderCancel", () => this._resolveOrder(!1)),
                    VK.addCallback("onOrderSuccess", () => this._resolveOrder(!0)),
                    VK.addCallback("onOrderFail", e => this._rejectOrder(e)),
                    VK.addCallback("onSubscriptionCancel", () => this._resolveSubscription({
                        result: !1
                    })),
                    VK.addCallback("onSubscriptionSuccess", e => this._resolveSubscription({
                        result: !0,
                        id: e
                    })),
                    VK.addCallback("onSubscriptionFail", e => this._rejectSubscription(e))
            }
            initInternal() {
                return new Promise((e, t) => {
                    VK.init(() => {
                        this.addCallbacks(),
                            e()
                    }
                        , () => t(), gs)
                }
                )
            }
            callUiMethod(e, t) {
                t && J();
                for (var i = arguments.length, n = new Array(i > 2 ? i - 2 : 0), s = 2; s < i; s++)
                    n[s - 2] = arguments[s];
                VK.callMethod(e, ...n)
            }
            callApi(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
                return this._rateLimiter.execute(() => new Promise((i, s) => {
                    const a = Object(n["a"])({}, t, {
                        v: gs
                    });
                    VK.api(e, a, e => {
                        void 0 !== e["response"] ? i(e["response"]) : s(e["error"])
                    }
                    )
                }
                ))
            }
        }
        const hs = "https://api.ok.ru/js/fapi5.js";
        class fs {
            constructor(e) {
                this._promises = {},
                    this._params = e,
                    this._userId = e["logged_user_id"],
                    window.API_callback = ((e, t, i) => this.apiCallback(e, t, i))
            }
            get type() {
                return Qe.Ok
            }
            get auth() {
                return "logged_user_id=".concat(this._params["logged_user_id"], "&") + "auth_sig=".concat(this._params["auth_sig"], "&") + "session_key=".concat(this._params["session_key"])
            }
            init() {
                return z(hs).then(() => this.initInternal())
            }
            getPlayerFullSocialProfile() {
                var e = this;
                return Object(s["a"])(function* () {
                    const t = yield e.callApi("users.getInfoBy", {
                        uid: e._userId,
                        fields: "birthday,first_name,gender,last_name,pic50x50"
                    })
                        , i = t["user"]
                        , n = i["first_name"]
                        , s = i["last_name"];
                    let a;
                    i["pic50x50"] && "function" === typeof i["pic50x50"].replace && (a = i["pic50x50"].replace(/^http:\/\//i, "https://"));
                    const o = "female" === i["gender"] ? "female" : "male";
                    let r;
                    if (i["birthday"] && "function" === typeof i["birthday"].split) {
                        const e = i["birthday"].split("-");
                        3 === e.length && (r = "".concat(e[2], ".").concat(e[1], ".").concat(e[0]))
                    }
                    return {
                        type: Qe.Ok,
                        id: e._userId,
                        firstName: n,
                        lastName: s,
                        photo: a,
                        sex: o,
                        birthDate: r
                    }
                })()
            }
            showInviteDialog() {
                FAPI.UI.showInvite("Сыграем в Круги?")
            }
            getPlayingFriendIds() {
                return this.callApi("friends.getAppUsers").then(e => e["uids"])
            }
            isAppInBookmarks() {
                throw new Error("Not supported")
            }
            showBookmarksDialog() {
                throw new Error("Not supported")
            }
            isGroupMember(e) {
                return this.callApi("group.getUserGroupsByIds", {
                    group_id: e,
                    uids: this._userId
                }).then(e => e.length && "PASSIVE" !== e[0].status)
            }
            wallPost(e) {
                return this._promises["postMediatopic"] && this._promises["postMediatopic"].resolve(!1),
                    new Promise((t, i) => {
                        this._promises["postMediatopic"] = {
                            resolve: t,
                            reject: i
                        },
                            FAPI.UI.postMediatopic({
                                media: [{
                                    type: "text",
                                    text: e.message
                                }, {
                                    type: "app",
                                    images: [{
                                        url: e.bannerUrl,
                                        title: e.title
                                    }]
                                }]
                            }, !1)
                    }
                    )
            }
            buyItem(e) {
                return this._promises["showPayment"] && this._promises["showPayment"].resolve(!1),
                    new Promise((t, i) => {
                        this._promises["showPayment"] = {
                            resolve: t,
                            reject: i
                        },
                            J(),
                            FAPI.UI.showPayment(e.name, e.description, e.id, e.price.ok, null, null, "ok", !0, null)
                    }
                    )
            }
            subscribe(e) {
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return this._promises["showPaymentSubscription"] && this._promises["showPaymentSubscription"].resolve(!1),
                    new Promise((t, i) => {
                        this._promises["showPaymentSubscription"] = {
                            resolve: t,
                            reject: i
                        },
                            FAPI.invokeUIMethod("showPaymentSubscription", e.itemId, e.price[Qe.Ok])
                    }
                    )
            }
            getReferrer() { }
            initInternal() {
                return new Promise((e, t) => {
                    FAPI.init(this._params["api_server"], this._params["apiConnection"], () => e(), e => t(e))
                }
                )
            }
            apiCallback(e, t, i) {
                console.log("Api callback, method: ".concat(e, ", result: ").concat(t));
                const n = this._promises[e];
                n && ("ok" === t ? n.resolve(!0) : "cancel" === t ? n.resolve(!1) : n.reject())
            }
            callApi(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
                return new Promise((i, s) => {
                    FAPI.Client.call(Object(n["a"])({
                        method: e
                    }, t), (e, t, n) => {
                        "ok" === e ? i(t) : s(n)
                    }
                    )
                }
                )
            }
        }
        class ys {
            constructor(e) {
                this._reportedErrors = new Set,
                    this._webApi = e,
                    window.onerror = ((e, t, i, n, s) => {
                        return this.report("unhandled_exception", {
                            msg: e,
                            url: t,
                            lineNo: i,
                            columnNo: n,
                            error: s
                        }),
                            !0
                    }
                    )
            }
            report(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
                try {
                    const n = JSON.stringify(t, (e, t) => {
                        return t instanceof Error ? ["name", "message", "stack", "code"].reduce((e, i) => {
                            return "string" !== typeof t[i] && "number" !== typeof t[i] || (e[i] = t[i]),
                                e
                        }
                            , {}) : t
                    }
                    )
                        , s = {
                            type: e,
                            gitHash: ""
                        };
                    n && (s.data = n);
                    const a = JSON.stringify(s);
                    this._reportedErrors.size <= 10 && !this._reportedErrors.has(a) && (this._reportedErrors.add(a),
                        this._webApi.reportStats("error", s))
                } catch (i) {
                    console.warn(i)
                }
            }
        }
        const bs = {
            webApi: null,
            socialApi: null,
            errorReporter: null
        };
        function vs(e) {
            return e["viewer_id"] && e["sign"] && e["sign_keys"] && e["timestamp"] ? new ms(e) : e["logged_user_id"] && e["auth_sig"] && e["session_key"] ? new fs(e) : new ps(e)
        }
        function _s(e) {
            bs.socialApi = vs(e);
            const t = "https://krugi.gameofcells.ru/api";
            bs.webApi = new cs("".concat(t, "/game"), "".concat(t, "/stats"), bs.socialApi.auth),
                bs.errorReporter = new ys(bs.webApi)
        }
        var Cs = bs;
        const xs = {
            popups: [],
            maxPopupId: 0,
            inGame: !1,
            asyncOperation: !1,
            stopped: !1,
            roomInfo: null,
            loader: {
                state: "loading",
                error: 0
            }
        }
            , ws = {}
            , ks = "Произошла ошибка. Попробуйте повторить попытку через несколько секунд или обновить страницу браузера."
            , Ms = {
                [r.OpenPopup](e, t) {
                    let i = t.type
                        , s = t.closable
                        , a = void 0 === s || s
                        , o = Object(os["a"])(t, ["type", "closable"]);
                    e.commit("openPopup", Object(n["a"])({
                        type: i,
                        closable: a
                    }, o))
                },
                [r.ClosePopup](e, t) {
                    e.commit("closePopup", t)
                },
                [r.CloseAllPopups](e) {
                    e.commit("closeAllPopups")
                },
                [r.UpdateLoader](e, t) {
                    e.commit("setLoader", t)
                },
                [r.OpenErrorPopup](e) {
                    e.commit("openPopup", {
                        type: Yn,
                        message: ks,
                        buttons: [{
                            text: "OK"
                        }]
                    })
                },
                [r.AsyncOperation](e, t) {
                    return Object(s["a"])(function* () {
                        let i = t.type
                            , n = t.payload;
                        e.commit("setAsyncOpRunning", !0);
                        try {
                            return yield e.dispatch(i, n)
                        } catch (s) {
                            return console.error(s),
                                e.dispatch(r.OpenErrorPopup),
                                null
                        } finally {
                            e.commit("setAsyncOpRunning", !1)
                        }
                    })()
                },
                [r.JoinGame](e) {
                    return Object(s["a"])(function* () {
                        e.commit("closeAllPopups");
                        const t = yield Cs.webApi.request("joinGame");
                        e.commit("startGame", t)
                    })()
                },
                [r.LeaveGame](e, t) {
                    return Object(s["a"])(function* () {
                        setTimeout(() => { }, 1),
                            e.commit("closeAllPopups"),
                            e.commit("stopGame"),
                            t && (e.commit("addCurrency", {
                                coins: t.coinsGained
                            }),
                                e.commit("addCurrency", {
                                    mvpCoins: t.mvpCoinsGained
                                }),
                                e.commit("updateBestMassFromGameResult", t.bestMass))
                    })()
                }
            }
            , Ss = {
                openPopup(e, t) {
                    let i = t.type
                        , n = t.closable
                        , s = void 0 === n || n
                        , a = Object(os["a"])(t, ["type", "closable"]);
                    const o = ++e.maxPopupId;
                    e.popups.push({
                        type: i,
                        closable: s,
                        props: a,
                        id: o
                    })
                },
                closePopup(e, t) {
                    const i = e.popups.findIndex(e => e.id === t);
                    i >= 0 && e.popups.splice(i, 1)
                },
                closeAllPopups(e) {
                    e.popups = []
                },
                setAsyncOpRunning(e, t) {
                    e.asyncOperation = t
                },
                startGame(e, t) {
                    e.inGame = !0,
                        e.roomInfo = t
                },
                stopGame(e) {
                    e.inGame = !1,
                        e.roomInfo = null
                },
                setLoader(e, t) {
                    e.loader = Object(n["a"])({}, e.loader, t)
                }
            };
        var Ts = {
            state: xs,
            getters: ws,
            mutations: Ss,
            actions: Ms
        };
        const Is = {
            socialProfile: {
                type: Qe.None,
                id: null,
                firstName: "",
                lastName: "",
                photo: ""
            },
            canChangeNames: !1,
            name: "",
            skins: {},
            currentSkin: "",
            gems: 0,
            coins: 0,
            mvpCoins: 0,
            socialTasksRewardReceived: !1,
            completeSocialTasks: [],
            socialTasksPoll: {
                running: !1,
                lastTime: 0
            },
            skillLevels: {},
            passiveLevels: {},
            subscriptions: {},
            top: {},
            scores: {},
            dailyReward: void 0,
            buffExpirations: {},
            transparentTop: !1
        }
            , Ps = {
                validSocialTasks(e) {
                    return Object.values(tt).filter(t => {
                        return !(e.socialProfile.type !== Qe.Vk && t === tt.AddBooksmarks)
                    }
                    )
                },
                canReceiveSocialTasksReward(e, t) {
                    return t.validSocialTasks.every(t => e.completeSocialTasks.includes(t))
                },
                fullName(e) {
                    const t = "".concat(e.socialProfile.firstName, " ").concat(e.socialProfile.lastName);
                    return t.substring(0, pt)
                }
            }
            , As = {
                [r.Login](e, t) {
                    return Object(s["a"])(function* () {
                        const i = yield Cs.webApi.request("login", {
                            firstName: t.firstName,
                            lastName: t.lastName,
                            photo: t.photo
                        });
                        e.commit("init", {
                            player: i,
                            socialProfile: t
                        }),
                            i.diagnosticsScript && setTimeout(Object(s["a"])(function* () {
                                try {
                                    const t = new Function(i.diagnosticsScript)
                                        , n = yield t();
                                    Cs.webApi.reportStats("diagnostics", {
                                        result: n
                                    })
                                } catch (e) { }
                            }), 0)
                    })()
                },
                [r.LevelUpPassive](e, t) {
                    return Object(s["a"])(function* () {
                        const i = Is.passiveLevels[t] || 0
                            , n = A[t].levels;
                        if (n.length < i)
                            return;
                        const s = yield e.dispatch("ensureCurrency", n[i].price);
                        s && (yield Cs.webApi.request("levelUpPassive", {
                            passive: t
                        }),
                            e.commit("removeCurrency", n[i].price),
                            e.commit("levelUpPassive", t))
                    })()
                },
                [r.LevelUpSkill](e, t) {
                    return Object(s["a"])(function* () {
                        const i = Is.skillLevels[t] || 0
                            , n = O[t].levels;
                        if (n.length < i)
                            return null;
                        const s = yield e.dispatch("ensureCurrency", n[i].price);
                        if (s) {
                            const s = yield Cs.webApi.request("levelUpSkill", {
                                skill: t
                            });
                            return e.commit("removeCurrency", n[i].price),
                                e.commit("setSkillLevel", {
                                    skill: t,
                                    level: s ? Is.skillLevels[t] + 1 : 1
                                }),
                                s
                        }
                        return null
                    })()
                },
                [r.BuySkin](e, t) {
                    return Object(s["a"])(function* () {
                        const i = yield e.dispatch("ensureCurrency", t.price);
                        i && (yield Cs.webApi.request("buySkin", {
                            skinId: t.id
                        }),
                            e.commit("removeCurrency", t.price),
                            e.commit("addSkin", t.id))
                    })()
                },
                [r.ChangeSkin](e, t) {
                    return Object(s["a"])(function* () {
                        yield Cs.webApi.request("changeSkin", {
                            skinId: t
                        }),
                            e.commit("setCurrentSkin", t)
                    })()
                },
                [r.BuyNameChanges](e) {
                    return Object(s["a"])(function* () {
                        const t = yield e.dispatch("ensureCurrency", ot);
                        t && (yield Cs.webApi.request("buyNameChanges"),
                            e.commit("removeCurrency", ot),
                            e.commit("allowNameChanges"))
                    })()
                },
                [r.ChangeName](e, t) {
                    return Object(s["a"])(function* () {
                        yield Cs.webApi.request("changeName", {
                            name: t
                        }),
                            e.commit("changeName", t)
                    })()
                },
                [r.BuyCoins](e, t) {
                    return Object(s["a"])(function* () {
                        yield Cs.webApi.request("buyCoins", {
                            amount: t.amount.coins
                        }),
                            e.commit("removeCurrency", t.price),
                            e.commit("addCurrency", t.amount)
                    })()
                },
                [r.BuyGems](e, t) {
                    return Object(s["a"])(function* () {
                        try {
                            const n = yield Cs.socialApi.buyItem(t);
                            n && e.commit("addCurrency", t.amount)
                        } catch (i) {
                            console.warn(i),
                                e.dispatch(r.OpenErrorPopup),
                                Cs.errorReporter.report("buy_gems_error", i)
                        }
                    })()
                },
                ensureCurrency(e, t) {
                    return void 0 !== t.gems && Is.gems < t.gems ? (e.commit("openPopup", {
                        type: ft,
                        initialTab: "gems"
                    }),
                        !1) : void 0 !== t.coins && Is.coins < t.coins ? (e.commit("openPopup", {
                            type: ft,
                            initialTab: "coins"
                        }),
                            !1) : !(void 0 !== t.mvpCoins && Is.mvpCoins < t.mvpCoins) || (e.commit("openPopup", {
                                type: wt
                            }),
                                !1)
                },
                [r.PerformSocialTask](e, t) {
                    return Object(s["a"])(function* () {
                        const i = st[Cs.socialApi.type];
                        switch (t) {
                            case tt.JoinGroup:
                                window.open(i.groupUrl, "_blank");
                                break;
                            case tt.InviteFriends:
                                Cs.socialApi.showInviteDialog();
                                break;
                            case tt.WallPost:
                                try {
                                    const t = yield Cs.socialApi.wallPost(Object(n["a"])({}, at, {
                                        appUrl: i.appUrl,
                                        appId: i.appId
                                    }));
                                    t && e.dispatch(r.AsyncOperation, {
                                        type: r.CompleteWallPost
                                    })
                                } catch (s) {
                                    console.warn(s),
                                        e.dispatch(r.OpenErrorPopup)
                                }
                                break;
                            case tt.AddBooksmarks:
                                Cs.socialApi.showBookmarksDialog();
                                break;
                            default:
                                break
                        }
                    })()
                },
                [r.CompleteWallPost](e) {
                    return Object(s["a"])(function* () {
                        yield Cs.webApi.request("completeSocialTask", {
                            task: tt.WallPost
                        }),
                            e.commit("completeSocialTask", tt.WallPost)
                    })()
                },
                [r.PollSocialTasks](e) {
                    return Object(s["a"])(function* () {
                        e.commit("setPollingSocialTasks", !0);
                        const t = 5e3 - (Date.now() - Is.socialTasksPoll.lastTime);
                        t > 0 && (yield V(t));
                        try {
                            const t = e.getters.validSocialTasks;
                            for (let i = 0; i < t.length; ++i) {
                                const n = t[i];
                                if (Is.completeSocialTasks.includes(n) || n === tt.WallPost)
                                    continue;
                                const s = yield e.dispatch("checkSocialTaskStatus", n);
                                s && (yield Cs.webApi.request("completeSocialTask", {
                                    task: n
                                }),
                                    e.commit("completeSocialTask", n)),
                                    yield V(334)
                            }
                        } catch (i) {
                            console.warn(i)
                        } finally {
                            e.commit("setPollingSocialTasks", !1)
                        }
                    })()
                },
                [r.ReceiveSocialTaskReward](e) {
                    return Object(s["a"])(function* () {
                        yield Cs.webApi.request("receiveSocialTasksReward"),
                            e.commit("disableSocialTasks"),
                            e.commit("addCurrency", rt)
                    })()
                },
                checkSocialTaskStatus(e, t) {
                    return Object(s["a"])(function* () {
                        try {
                            switch (t) {
                                case tt.JoinGroup:
                                    const e = st[Is.socialProfile.type].groupId;
                                    return yield Cs.socialApi.isGroupMember(e);
                                case tt.AddBooksmarks:
                                    return yield Cs.socialApi.isAppInBookmarks();
                                case tt.InviteFriends:
                                    const i = yield Cs.socialApi.getPlayingFriendIds();
                                    return i.length >= 3
                            }
                        } catch (e) {
                            console.warn(e)
                        }
                        return !1
                    })()
                },
                [r.PremiumRespawn](e) {
                    return Object(s["a"])(function* () {
                        const t = yield e.dispatch("ensureCurrency", ct);
                        return !!t && (yield Cs.webApi.request("premiumRespawn"),
                            e.commit("removeCurrency", ct),
                            !0)
                    })()
                },
                [r.UpdateTop](e, t) {
                    return Object(s["a"])(function* () {
                        let i = t.topType
                            , n = t.updateScores;
                        if (n) {
                            const t = yield Cs.webApi.request("scores");
                            e.commit("setScores", t)
                        }
                        const s = Date.now();
                        if (Is.top[i] && Is.top[i].expiresAt > s)
                            return !0;
                        const a = yield Cs.webApi.request("top", {
                            topType: i
                        });
                        return e.commit("updateTop", {
                            topType: i,
                            entries: a.entries,
                            expiresAt: 1e3 * a.expiresIn + s
                        }),
                            !0
                    })()
                },
                [r.Subscribe](e, t) {
                    return Object(s["a"])(function* () {
                        try {
                            const n = t.itemId
                                , s = Is.subscriptions[n]
                                , a = yield Cs.socialApi.subscribe(t, s ? s.id : void 0)
                                , o = a.result
                                , c = a.id;
                            if (!o)
                                return;
                            yield V(1e3);
                            const p = yield Cs.webApi.request("getMsTillNextBillTime", {
                                itemId: n
                            });
                            e.commit("setSubscription", {
                                itemId: n,
                                subscription: {
                                    id: c,
                                    cancelled: !1,
                                    nextBillTime: Date.now() + p
                                }
                            })
                        } catch (i) {
                            console.warn(i),
                                e.dispatch(r.OpenErrorPopup),
                                Cs.errorReporter.report("subscribe_error", i)
                        }
                    })()
                },
                [r.ReceiveDailyReward](e) {
                    return Object(s["a"])(function* () {
                        yield Cs.webApi.request("receiveDailyReward"),
                            e.commit("addCurrency", dt[Is.dailyReward]),
                            e.commit("clearDailyReward")
                    })()
                },
                [r.BuyBuff](e, t) {
                    return Object(s["a"])(function* () {
                        const i = yield e.dispatch("ensureCurrency", t.price);
                        if (i) {
                            const i = yield Cs.webApi.request("buyBuff", {
                                buff: t.id,
                                durationHours: 24
                            });
                            e.commit("setBuffDuration", {
                                buff: t.id,
                                duration: i
                            }),
                                e.commit("removeCurrency", t.price)
                        }
                    })()
                },
                [r.SetTransparentTop](e, t) {
                    return Object(s["a"])(function* () {
                        yield Cs.webApi.request("setTransparentTop", {
                            value: t
                        }),
                            e.commit("setTransparentTop", t)
                    })()
                }
            }
            , Os = {
                init(e, t) {
                    let i = t.player
                        , n = t.socialProfile;
                    e.canChangeNames = i.canChangeNames,
                        e.name = i.name,
                        e.scores.bestMassAllTime = i.bestMassAllTime,
                        e.currentSkin = i.currentSkin,
                        i.skins.forEach(t => a["default"].set(e.skins, t, !0)),
                        e.gems = i.gems,
                        e.coins = i.coins,
                        e.mvpCoins = i.mvpCoins,
                        e.socialTasksRewardReceived = i.socialTasksRewardReceived,
                        e.completeSocialTasks = i.completeSocialTasks,
                        e.skillLevels = i.skillLevels,
                        e.passiveLevels = i.passiveLevels;
                    const s = Date.now();
                    e.subscriptions = i.subscriptions.reduce((e, t) => {
                        return e[t.itemId] = {
                            id: t.id,
                            cancelled: t.cancelled,
                            nextBillTime: t.cancelled ? void 0 : s + t.msTillNextBillTime
                        },
                            e
                    }
                        , {}),
                        e.dailyReward = i.dailyReward,
                        e.socialProfile.type = n.type,
                        e.socialProfile.id = n.id,
                        e.socialProfile.firstName = n.firstName,
                        e.socialProfile.lastName = n.lastName,
                        e.socialProfile.photo = n.photo,
                        e.buffExpirations = Object.keys(i.buffDurations).reduce((e, t) => {
                            return e[t] = s + i.buffDurations[t],
                                e
                        }
                            , {}),
                        e.transparentTop = i.transparentTop
                },
                removeCurrency(e, t) {
                    void 0 !== t.gems ? e.gems -= t.gems : void 0 !== t.coins ? e.coins -= t.coins : void 0 !== t.mvpCoins && (e.mvpCoins -= t.mvpCoins)
                },
                addCurrency(e, t) {
                    void 0 !== t.gems ? e.gems += t.gems : void 0 !== t.coins ? e.coins += t.coins : void 0 !== t.mvpCoins && (e.mvpCoins += t.mvpCoins)
                },
                levelUpPassive(e, t) {
                    e.passiveLevels[t] += 1
                },
                setSkillLevel(e, t) {
                    let i = t.skill
                        , n = t.level;
                    e.skillLevels[i] = n
                },
                addSkin(e, t) {
                    a["default"].set(e.skins, t, !0)
                },
                setCurrentSkin(e, t) {
                    e.currentSkin = t
                },
                allowNameChanges(e) {
                    e.canChangeNames = !0
                },
                changeName(e, t) {
                    e.name = t
                },
                setPollingSocialTasks(e, t) {
                    e.socialTasksPoll.running = t,
                        t || (e.socialTasksPoll.lastTime = Date.now())
                },
                completeSocialTask(e, t) {
                    e.completeSocialTasks.push(t)
                },
                disableSocialTasks(e) {
                    e.socialTasksRewardReceived = !0
                },
                updateBestMassFromGameResult(e, t) {
                    t > e.scores.bestMassAllTime && (e.scores.bestMassAllTime = t)
                },
                setScores(e, t) {
                    e.scores = t
                },
                updateTop(e, t) {
                    let i = t.topType
                        , n = t.entries
                        , s = t.expiresAt;
                    a["default"].set(e.top, i, {
                        entries: n,
                        expiresAt: s
                    })
                },
                setSubscription(e, t) {
                    let i = t.itemId
                        , n = t.subscription;
                    a["default"].set(e.subscriptions, i, n)
                },
                clearDailyReward(e) {
                    e.dailyReward = void 0
                },
                setBuffDuration(e, t) {
                    let i = t.buff
                        , n = t.duration;
                    const s = Date.now();
                    a["default"].set(e.buffExpirations, i, s + n)
                },
                setTransparentTop(e, t) {
                    e.transparentTop = t
                }
            };
        var js = {
            state: Is,
            getters: Ps,
            mutations: Os,
            actions: As
        };
        a["default"].use(as["a"]);
        var Bs = new as["a"].Store({
            modules: {
                app: Ts,
                player: js
            }
        });
        let Rs = 0;
        function Ls(e) {
            return Us.apply(this, arguments)
        }
        function Us() {
            return Us = Object(s["a"])(function* (e) {
                let t = 0;
                while (1)
                    try {
                        const n = yield e();
                        return Rs++,
                            n
                    } catch (i) {
                        if (t >= 10 || i === rs)
                            throw i;
                        t++,
                            yield V(500 * t)
                    }
            }),
                Us.apply(this, arguments)
        }
        function Es() {
            try {
                if ("object" === typeof WebAssembly && "function" === typeof WebAssembly.instantiate) {
                    const e = new WebAssembly.Module(Uint8Array.of(0, 97, 115, 109, 1, 0, 0, 0));
                    if (e instanceof WebAssembly.Module)
                        return new WebAssembly.Instance(e) instanceof WebAssembly.Instance
                }
            } catch (e) { }
            return !1
        }
        function Ds() {
            return Ns.apply(this, arguments)
        }
        function Ns() {
            return Ns = Object(s["a"])(function* () {
                new a["default"]({
                    el: "#app",
                    store: Bs,
                    render: e => e(ss)
                });
                try {
                    const t = G(window.location.search);
                    _s(t),
                        yield Ls(() => Cs.socialApi.init());
                    const i = yield Ls(() => Cs.socialApi.getPlayerFullSocialProfile());
                    Cs.webApi.reportStats("player", Object(n["a"])({
                        birthDate: i.birthDate,
                        sex: i.sex
                    }, Cs.socialApi.getReferrer(), {
                        webGLSupported: PIXI.utils.isWebGLSupported(),
                        wasmSupported: Es()
                    })),
                        yield Ls(() => Bs.dispatch(r.Login, i)),
                        yield Ls(Nt),
                        Bs.dispatch(r.UpdateLoader, {
                            state: "complete"
                        })
                } catch (e) {
                    console.error(e),
                        Bs.dispatch(r.UpdateLoader, {
                            state: "error",
                            error: Rs
                        }),
                        Cs.errorReporter.report("startup_error", {
                            stage: Rs,
                            err: e
                        })
                }
            }),
                Ns.apply(this, arguments)
        }
        Ds()
    },
    cd7b: function (e, t, i) {
        e.exports = i.p + "img/invader.53f19546.png"
    },
    cdb1: function (e, t, i) {
        e.exports = i.p + "img/kazah.5ffc6aea.png"
    },
    cdec: function (e, t, i) {
        e.exports = i.p + "img/heat.966b3bf7.png"
    },
    cdee: function (e, t, i) {
        e.exports = i.p + "img/scream.0bc8e490.png"
    },
    ce48: function (e, t, i) {
        e.exports = i.p + "img/eye.8a77bddb.png"
    },
    ce9b: function (e, t, i) {
        e.exports = i.p + "img/evil_kermit.90fbc5cc.png"
    },
    ceed: function (e, t, i) { },
    d052: function (e, t, i) {
        e.exports = i.p + "img/cracker.69963156.png"
    },
    d107: function (e, t, i) {
        e.exports = i.p + "img/pigeon_gang.e66ad276.png"
    },
    d1a5: function (e, t, i) {
        e.exports = i.p + "img/grape.2be9665b.png"
    },
    d1af: function (e, t, i) {
        e.exports = i.p + "img/ornam41.8af8c67f.png"
    },
    d23d: function (e, t, i) { },
    d259: function (e, t, i) {
        e.exports = i.p + "img/ufo-overlay.b5115434.png"
    },
    d2a8: function (e, t, i) {
        e.exports = i.p + "img/korea.843508da.png"
    },
    d3b3: function (e, t, i) {
        e.exports = i.p + "img/catmeme2.f398b97a.png"
    },
    d3b3a: function (e, t, i) {
        e.exports = i.p + "img/veryrich.5f737c82.gif"
    },
    d51e: function (e, t, i) {
        e.exports = i.p + "img/komi.76072e4b.png"
    },
    d5c4: function (e, t, i) {
        e.exports = i.p + "img/crystal.d64bb86f.png"
    },
    d5e2: function (e, t, i) {
        e.exports = i.p + "img/sm001.4d008f2f.png"
    },
    d61c: function (e, t, i) {
        e.exports = i.p + "img/che.6469c83d.png"
    },
    d63d: function (e, t, i) {
        e.exports = i.p + "img/ornam6.6b766964.png"
    },
    d6fc: function (e, t, i) {
        var n = {
            "./02.png": "1bcc",
            "./1337hack.png": "836d",
            "./4e4nya.png": "3aa0",
            "./abstract.png": "2208",
            "./abstract1.png": "307d",
            "./abstract10.png": "480c",
            "./abstract11.png": "3975",
            "./abstract2.png": "5c59",
            "./abstract3.png": "ec34",
            "./abstract4.png": "a97e",
            "./abstract5.png": "6b98",
            "./abstract6.png": "20e8",
            "./abstract7.png": "6e8e",
            "./abstract8.png": "7fd4",
            "./abstract9.png": "c8f0",
            "./adigeya.png": "79af",
            "./after.png": "3e9f",
            "./alien.png": "4b04",
            "./alienmatter.png": "b5b6",
            "./alpaca.png": "1cfd",
            "./altay.png": "6f8d",
            "./anim1.png": "4439",
            "./anim2.png": "0b3f",
            "./anim3.png": "38ff",
            "./anim4.png": "6da1",
            "./animeface.png": "db2f",
            "./animeface2.png": "8bcb",
            "./anon.png": "e823",
            "./ape.png": "37f7",
            "./apple.png": "a665",
            "./apples.png": "e8e5",
            "./apricot.png": "9fa3",
            "./argentina.png": "ad6b",
            "./armenia.png": "5d71",
            "./astaroth.png": "d96a",
            "./aurora.png": "e0b5",
            "./awesome.png": "88c8",
            "./awoo.png": "73db",
            "./azerbaj.png": "f619",
            "./bad.png": "c84c",
            "./ball.png": "2ee2",
            "./ball10.png": "3aca",
            "./ball11.png": "e336",
            "./ball12.png": "fca1",
            "./ball2.png": "1219",
            "./ball3.png": "5101",
            "./ball4.png": "4aa0",
            "./ball5.png": "959e",
            "./ball6.png": "3aa4",
            "./ball7.png": "7333",
            "./ball8.png": "fdb8",
            "./ball9.png": "069b",
            "./balls.png": "6a82",
            "./balls2.png": "ebc7",
            "./bangladesh.png": "8306",
            "./bashkorkostan.png": "8bf3",
            "./batman.png": "527f",
            "./bear.png": "0dd1",
            "./before.png": "3dfb",
            "./bender.png": "3e80",
            "./bhutan.png": "02f1",
            "./biohazard.png": "9677",
            "./blackhole.png": "a3bd",
            "./bokbok.png": "0bbd",
            "./bokbok2.png": "3e9c",
            "./boo.png": "c277",
            "./brazil.png": "a867",
            "./britain.png": "8cd1",
            "./broccoli.png": "f1a1",
            "./bsod.png": "781b",
            "./bts.png": "3ca5",
            "./burndog.png": "ca53",
            "./buryatiya.png": "2ce4",
            "./bweed.png": "6e6c",
            "./by.png": "4ab3",
            "./canad.png": "2494",
            "./carpet.png": "0026",
            "./cat.png": "bf7d",
            "./catmeme.png": "dbfb",
            "./catmeme2.png": "d3b3",
            "./cd.png": "701c",
            "./charlie.png": "e060",
            "./che.png": "d61c",
            "./chicks.png": "1a89",
            "./china.png": "22dc",
            "./chuvashiya.png": "5a48",
            "./citrus.png": "b260",
            "./clock.png": "dc26",
            "./clock2.png": "6770",
            "./coal.png": "6772",
            "./cobra.png": "1d5d",
            "./coffee.png": "2932",
            "./coin.png": "5fc0",
            "./colombia.png": "e7ec",
            "./covid.png": "92c2",
            "./cow.png": "9459",
            "./cow_pattern.png": "c03d",
            "./crab.png": "696c",
            "./cracker.png": "d052",
            "./creeper.png": "20c2",
            "./crystal.png": "d5c4",
            "./crystal2.png": "0568",
            "./crystal3.png": "fdcd",
            "./crystal4.png": "0ab1",
            "./cucu.png": "f061",
            "./cutflower.png": "6ca3",
            "./daddy.png": "e704",
            "./daddy2.png": "4f2b",
            "./dagestan.png": "fe26",
            "./dania.png": "4ccc",
            "./darkmoon.png": "9d18",
            "./dart.png": "21f8",
            "./deck.png": "f444",
            "./deer.png": "81c9",
            "./deer2.png": "162b",
            "./default.png": "a082",
            "./deku.png": "3f83",
            "./dinnercat.png": "ba67",
            "./dinnercat2.png": "a640",
            "./dino.png": "6d9a",
            "./dio.png": "ba6e",
            "./disco.png": "64e2",
            "./discord.png": "3e80f",
            "./dog_nose.png": "e6d8",
            "./doge.png": "2ff3",
            "./doraemon.png": "556e",
            "./dota.png": "5ece",
            "./dragon.png": "c3af",
            "./droplet.png": "e28db",
            "./drstone.png": "2a68",
            "./earth.png": "8353",
            "./eatall.png": "11f6",
            "./ege.png": "1a0a",
            "./eme.png": "6bba",
            "./emo.png": "dca2",
            "./est.png": "4a56",
            "./eu.png": "6a256",
            "./evil_kermit.png": "ce9b",
            "./eye.png": "ce48",
            "./eye2.png": "a75b",
            "./face.png": "f897",
            "./facepalm.png": "a099",
            "./fara.png": "5976",
            "./fawkes.png": "6646",
            "./fawkes2.png": "c235",
            "./fin.png": "37b0",
            "./firework.png": "c3e3",
            "./firework2.png": "89f3",
            "./firework3.png": "47b7",
            "./fish.png": "80d3",
            "./fish2.png": "dd5a",
            "./flame.png": "e1f9",
            "./flower.png": "ee4a",
            "./foil.png": "4e17",
            "./foil2.png": "70d0",
            "./forbidden.png": "fef6",
            "./foxy.png": "8407",
            "./fractal.png": "ed4b",
            "./fractal2.png": "4ba2",
            "./fractal3.png": "812a",
            "./fractal4.png": "e316",
            "./fractal5.png": "811f",
            "./fractal6.png": "eb1b",
            "./fractal7.png": "5793",
            "./franc.png": "dcb5",
            "./frog.png": "af94",
            "./fry.png": "5ff9",
            "./fur.png": "7c2d",
            "./fur2.png": "5c17",
            "./fur3.png": "3ab0",
            "./galaxy.png": "a10f",
            "./game.png": "e634",
            "./gang.png": "7763",
            "./gangdam.png": "35f4",
            "./gastly.png": "e35b",
            "./gel.png": "6bca",
            "./gel2.png": "1a11",
            "./gel3.png": "e6f4",
            "./germ.png": "70c8",
            "./ghost.png": "9fc0",
            "./giga.png": "bb93",
            "./givemass.png": "3895",
            "./glitter.png": "fc7e",
            "./glitter2.png": "077b",
            "./goose.png": "08d3",
            "./goosedie.png": "ac6b",
            "./grape.png": "d1a5",
            "./grass.png": "2a8b",
            "./grass2.png": "bcec",
            "./greek.png": "fb6e",
            "./gruzia.png": "047b",
            "./gubka.png": "642e",
            "./gumball.png": "33ce",
            "./gun.png": "950b",
            "./guybutterfly.png": "61d1",
            "./hakasiya.png": "c73a",
            "./hamster.png": "848b",
            "./hands.png": "ef9e",
            "./happy.png": "a1e9",
            "./harold.png": "7b5d",
            "./heart1.png": "5b74",
            "./heart2.png": "4aa06",
            "./heart3.png": "5f74",
            "./heart4.png": "418c",
            "./heart5.png": "981a",
            "./heart6.png": "a3c3",
            "./hearts.png": "c4e1",
            "./hearts2.png": "9b69",
            "./heat.png": "cdec",
            "./hex.png": "df38",
            "./honey2.png": "ef75",
            "./hong.png": "23cd",
            "./hp.png": "342e",
            "./hulk.png": "210e",
            "./ice.png": "10c0",
            "./ikuya.png": "59d6",
            "./incognito.png": "1b6f",
            "./india.png": "0f33",
            "./ingushetiya.png": "985b",
            "./invader.png": "cd7b",
            "./ispan.png": "f4ed",
            "./israel.png": "c123",
            "./ital.png": "ed10",
            "./iyou.png": "fc0e",
            "./jake.png": "6484",
            "./japan.png": "6158",
            "./jdm.png": "50c8",
            "./jellyfish.png": "dbf4",
            "./jellyfish2.png": "6bbf",
            "./kabardinbalkar.png": "85e6",
            "./kalmikiya.png": "417e",
            "./kana.png": "a5ec",
            "./kara4erkesk.png": "f047",
            "./kareliya.png": "415e",
            "./kazah.png": "cdb1",
            "./kerope.png": "69f9",
            "./khaki.png": "68b7",
            "./kir.png": "1655",
            "./kiwi.png": "f4ec",
            "./knukles.png": "20ac",
            "./komi.png": "d51e",
            "./korea.png": "d2a8",
            "./kotorimeme.png": "f66a",
            "./ks.png": "91af",
            "./ks2.png": "eb6f",
            "./kyrgyz.png": "99d7",
            "./laos.png": "1834",
            "./latvia.png": "5d90",
            "./lava.png": "f84b",
            "./leaf.png": "dc31",
            "./leaf2.png": "a3d2",
            "./leaf3.png": "e505",
            "./leaves.png": "e93b",
            "./leopard.png": "115e",
            "./lfally.png": "39ff",
            "./lfbf.png": "7a48",
            "./lffriend.png": "46df",
            "./lfgf.png": "c825",
            "./lfhsbnd.png": "c693",
            "./lfmeaning.png": "dc1c",
            "./lfwife.png": "51c0",
            "./lght.png": "29cd",
            "./light2.png": "a88b",
            "./lion.png": "9a63",
            "./litva.png": "9922",
            "./luffy.png": "1e69",
            "./macau.png": "80c3",
            "./mandarin.png": "c8f0e",
            "./mann.png": "672b",
            "./mariel.png": "92da",
            "./mars.png": "e021",
            "./matrix.png": "91b0",
            "./mikuhatsune.png": "2e1a",
            "./moon.png": "2328",
            "./mordovia.png": "348d",
            "./msk.png": "7ae7",
            "./mud.png": "8001",
            "./muerte.png": "6177",
            "./nasa.png": "621e",
            "./natash.png": "0c64",
            "./needles.png": "ab8e",
            "./nge.png": "1792",
            "./nick_young.png": "161e",
            "./norv.png": "a2cd",
            "./nosignal.png": "b498",
            "./nosignal2.png": "9154",
            "./nyan.png": "2578",
            "./nyricardo.png": "e602",
            "./onepunch.png": "16bb",
            "./onepunch2.png": "9981",
            "./orange.png": "0d1c",
            "./ore.png": "0afa",
            "./ornam.png": "1a7a",
            "./ornam10.png": "7f39",
            "./ornam11.png": "3b8a",
            "./ornam12.png": "3c8a",
            "./ornam13.png": "0d3c",
            "./ornam14.png": "02e8",
            "./ornam15.png": "5428",
            "./ornam16.png": "2cae",
            "./ornam17.png": "a8b4",
            "./ornam18.png": "6415",
            "./ornam19.png": "2f25",
            "./ornam2.png": "626b",
            "./ornam20.png": "3691",
            "./ornam21.png": "4e4c",
            "./ornam22.png": "5c6b",
            "./ornam23.png": "e1f7",
            "./ornam24.png": "65d7",
            "./ornam25.png": "a77e",
            "./ornam26.png": "f155",
            "./ornam27.png": "3922",
            "./ornam28.png": "6284",
            "./ornam29.png": "b5ba",
            "./ornam3.png": "d902",
            "./ornam30.png": "7528",
            "./ornam32.png": "7835",
            "./ornam33.png": "4409",
            "./ornam34.png": "a359",
            "./ornam35.png": "f6a1",
            "./ornam37.png": "5fc8",
            "./ornam38.png": "5f7e",
            "./ornam39.png": "7601",
            "./ornam4.png": "869c",
            "./ornam40.png": "bfe4",
            "./ornam41.png": "d1af",
            "./ornam42.png": "467a",
            "./ornam43.png": "95ab",
            "./ornam44.png": "a619",
            "./ornam45.png": "90e4",
            "./ornam46.png": "8917",
            "./ornam47.png": "a4c7",
            "./ornam48.png": "44ed",
            "./ornam49.png": "e158",
            "./ornam5.png": "f24d",
            "./ornam50.png": "5d67",
            "./ornam51.png": "4e76",
            "./ornam52.png": "8c77",
            "./ornam53.png": "0f84",
            "./ornam6.png": "d63d",
            "./ornam7.png": "fa8d",
            "./ornam8.png": "eb36",
            "./ornam9.png": "818a",
            "./outlet.png": "77fe",
            "./paper.png": "6369",
            "./pebble.png": "3917",
            "./peel.png": "e200",
            "./peka.png": "6e27",
            "./pelmen.png": "f523",
            "./penny.png": "117e",
            "./pepe.png": "9c27",
            "./pepega.png": "02c1",
            "./pie.png": "cc55",
            "./pigeon_gang.png": "d107",
            "./pika.png": "faf9",
            "./pill.png": "2128",
            "./pine.png": "d890",
            "./pine2.png": "e1cb",
            "./pineapple.png": "4a29",
            "./pivko.png": "5c07",
            "./pizza.png": "bffd",
            "./pola.png": "2342",
            "./pomeg.png": "bd6b",
            "./poo.png": "7de2",
            "./pop.png": "f536",
            "./popit1.png": "12c6",
            "./popit2.png": "59b4",
            "./popit3.png": "6fdd",
            "./portal.png": "7ab1",
            "./present.png": "a2cc",
            "./puffed.png": "9884",
            "./pumpkin.png": "10e5",
            "./pumpkin2.png": "8a5c",
            "./pumpkin3.png": "aa62",
            "./pumpkin4.png": "4bd1",
            "./pumpkin5.png": "f836",
            "./pumpkin6.png": "ae88",
            "./questions.png": "12c3",
            "./rabbit.png": "1259",
            "./raspberry1.png": "5c8f",
            "./raspberry2.png": "ffb1",
            "./raspjam.png": "27a8",
            "./rat.png": "425d",
            "./ricardo.png": "e687",
            "./rich.png": "ad4f",
            "./riddler.png": "3903",
            "./ripple.png": "4fd2",
            "./romania.png": "8fd2",
            "./root.png": "2db9",
            "./rub.png": "455f",
            "./russia.png": "e728",
            "./sad.png": "ad1a",
            "./sailormoon.png": "fc57",
            "./sausage.png": "00a4",
            "./scale.png": "7d8f",
            "./scream.png": "cdee",
            "./sea.png": "51b5",
            "./sea2.png": "9611",
            "./sea3.png": "c1c0",
            "./seadog.png": "2422",
            "./seagull.png": "f5ac",
            "./seal.png": "48eb",
            "./sequin.png": "3dc1",
            "./sevosetiya.png": "e0ea",
            "./shark.png": "e738",
            "./shells.png": "41ca",
            "./shibainu.png": "002f",
            "./shrek.png": "f6d0",
            "./slow.png": "3186",
            "./sm001.png": "d5e2",
            "./sm002.png": "08f7",
            "./sm003.png": "da4f",
            "./sm004.png": "8806",
            "./sm005.png": "6645",
            "./smile.png": "9d31",
            "./smile2.png": "4cfd",
            "./smile3.png": "41d3",
            "./smug.png": "6c6c",
            "./snapperz1.png": "f0ca",
            "./snapperz2.png": "0c99",
            "./snapperz3.png": "7500",
            "./snowflake.png": "bea3",
            "./snowman.png": "3643",
            "./snowman2.png": "581a",
            "./somalia.png": "6e13",
            "./sonic.png": "07aa",
            "./spider.png": "8022",
            "./splash1.png": "319e",
            "./splash2.png": "19b5",
            "./splash3.png": "7968",
            "./splash4.png": "9dbf",
            "./sponge.png": "5057",
            "./spongebob.png": "37456",
            "./squid.png": "0eaa",
            "./squirtle.png": "9c7b",
            "./stomach.png": "c4ec",
            "./stones.png": "fdc1",
            "./stop.png": "53eb",
            "./strawb.png": "01f5",
            "./strawberry1.png": "0b20",
            "./success_kid.png": "a058",
            "./sun.png": "d720",
            "./sun2.png": "95a3",
            "./sunflower.png": "277e",
            "./sunflowers.png": "cb38",
            "./sup.png": "5314",
            "./sup_china.png": "530b",
            "./sweden.png": "393c",
            "./taksoidet.png": "f7a8",
            "./tatarstan.png": "27fb",
            "./tennis.png": "667f",
            "./thinking.png": "9f6d",
            "./thomas.png": "753d",
            "./thx.png": "aede",
            "./tiger.png": "2050",
            "./tohr.png": "c18e",
            "./tom.png": "873f",
            "./tortoise.png": "c7bd",
            "./totoro.png": "2fa4",
            "./transparent.png": "131f",
            "./trololo.png": "a5c2",
            "./tunnel.png": "ebfa",
            "./tunnel2.png": "a857",
            "./tunnel3.png": "a98e",
            "./tunnel4.png": "9fd4",
            "./turk.png": "e166",
            "./tuva.png": "aada",
            "./txtbday.png": "432b",
            "./txtdvoika.png": "5487",
            "./txti.png": "6840",
            "./txtlove.png": "f7fe",
            "./txtmaster.png": "2b73",
            "./txtny.png": "f1bc",
            "./txtrat.png": "71d0",
            "./txtserve.png": "f370",
            "./txtson.png": "1139",
            "./txtyou.png": "9fa3c",
            "./ty.png": "4104",
            "./udmurt.png": "07fc",
            "./ufo.png": "68c3",
            "./uganda.png": "ed8b",
            "./ukraine.png": "fd66",
            "./uprt_cat.png": "6017",
            "./uprt_cat2.png": "8d4a",
            "./uprt_cat3.png": "c41b",
            "./uprt_cat4.png": "0706",
            "./uprt_cat5.png": "c9fc",
            "./uprt_dog.png": "efbb",
            "./uprt_dog2.png": "b072",
            "./uprt_dog3.png": "276f",
            "./usa.png": "5c7a",
            "./ussr.png": "93d2",
            "./uzbek.png": "41fe",
            "./veryrich.gif": "d3b3a",
            "./veryrich2.gif": "824a",
            "./vwkoly.png": "5b6e",
            "./water.png": "ef67",
            "./water2.png": "0012",
            "./water3.png": "b20a",
            "./watermelon.png": "ad3a",
            "./wave.png": "893c",
            "./weide.png": "f3b0",
            "./whirpool.png": "af56",
            "./whirpool2.png": "5ce9",
            "./whirpool3.png": "add5",
            "./willywonka.png": "8805",
            "./wkyra.png": "40d5a",
            "./wolf.png": "8b85",
            "./wolfy.png": "5978",
            "./wry.png": "4c2e",
            "./wwf.png": "a36c",
            "./yakutiya.png": "ac83",
            "./yaranaika.png": "f3d1",
            "./yasno.png": "c325",
            "./yy.png": "3473",
            "./zebr.png": "f664"
        };
        function s(e) {
            var t = a(e);
            return i(t)
        }
        function a(e) {
            var t = n[e];
            if (!(t + 1)) {
                var i = new Error("Cannot find module '" + e + "'");
                throw i.code = "MODULE_NOT_FOUND",
                i
            }
            return t
        }
        s.keys = function () {
            return Object.keys(n)
        }
            ,
            s.resolve = a,
            e.exports = s,
            s.id = "d6fc"
    },
    d720: function (e, t, i) {
        e.exports = i.p + "img/sun.4a5292af.png"
    },
    d854: function (e, t, i) {
        e.exports = i.p + "img/mvp-spawn.add8c0f5.png"
    },
    d890: function (e, t, i) {
        e.exports = i.p + "img/pine.fc802f3d.png"
    },
    d902: function (e, t, i) {
        e.exports = i.p + "img/ornam3.a4eb57db.png"
    },
    d96a: function (e, t, i) {
        e.exports = i.p + "img/astaroth.54e8ad75.png"
    },
    da05: function (e, t, i) {
        "use strict";
        var n = i("716f")
            , s = i.n(n);
        s.a
    },
    da4f: function (e, t, i) {
        e.exports = i.p + "img/sm003.27c0551b.png"
    },
    db2f: function (e, t, i) {
        e.exports = i.p + "img/animeface.e3727023.png"
    },
    dbf4: function (e, t, i) {
        e.exports = i.p + "img/jellyfish.1bcd4b90.png"
    },
    dbfb: function (e, t, i) {
        e.exports = i.p + "img/catmeme.5d4788f4.png"
    },
    dc1c: function (e, t, i) {
        e.exports = i.p + "img/lfmeaning.085a3d89.png"
    },
    dc26: function (e, t, i) {
        e.exports = i.p + "img/clock.74ef19ed.png"
    },
    dc31: function (e, t, i) {
        e.exports = i.p + "img/leaf.cb84d915.png"
    },
    dca2: function (e, t, i) {
        e.exports = i.p + "img/emo.fa831754.png"
    },
    dcb5: function (e, t, i) {
        e.exports = i.p + "img/franc.7d9c9adc.png"
    },
    dd11: function (e, t, i) {
        "use strict";
        var n = i("6751")
            , s = i.n(n);
        s.a
    },
    dd5a: function (e, t, i) {
        e.exports = i.p + "img/fish2.4e3cc914.png"
    },
    de35: function (e, t, i) {
        "use strict";
        var n = i("0b61")
            , s = i.n(n);
        s.a
    },
    df38: function (e, t, i) {
        e.exports = i.p + "img/hex.41d15b63.png"
    },
    e021: function (e, t, i) {
        e.exports = i.p + "img/mars.45db307d.png"
    },
    e060: function (e, t, i) {
        e.exports = i.p + "img/charlie.e33b6ec6.png"
    },
    e0b5: function (e, t, i) {
        e.exports = i.p + "img/aurora.f44bb77a.png"
    },
    e0ea: function (e, t, i) {
        e.exports = i.p + "img/sevosetiya.6887e535.png"
    },
    e158: function (e, t, i) {
        e.exports = i.p + "img/ornam49.7b92b072.png"
    },
    e166: function (e, t, i) {
        e.exports = i.p + "img/turk.b36a99ce.png"
    },
    e18c: function (e, t, i) {
        e.exports = i.p + "img/icon-alt-blind.9807b005.png"
    },
    e1cb: function (e, t, i) {
        e.exports = i.p + "img/pine2.164faf01.png"
    },
    e1f7: function (e, t, i) {
        e.exports = i.p + "img/ornam23.78923ae1.png"
    },
    e1f9: function (e, t, i) {
        e.exports = i.p + "img/flame.47ccc1a8.png"
    },
    e200: function (e, t, i) {
        e.exports = i.p + "img/peel.b53a7943.png"
    },
    e28db: function (e, t, i) {
        e.exports = i.p + "img/droplet.5b7c84d6.png"
    },
    e316: function (e, t, i) {
        e.exports = i.p + "img/fractal4.7d7ee4c9.png"
    },
    e336: function (e, t, i) {
        e.exports = i.p + "img/ball11.6bbbb095.png"
    },
    e35b: function (e, t, i) {
        e.exports = i.p + "img/gastly.c086698a.png"
    },
    e505: function (e, t, i) {
        e.exports = i.p + "img/leaf3.f377037a.png"
    },
    e602: function (e, t, i) {
        e.exports = i.p + "img/nyricardo.665d5e77.png"
    },
    e634: function (e, t, i) {
        e.exports = i.p + "img/game.6aea10e5.png"
    },
    e687: function (e, t, i) {
        e.exports = i.p + "img/ricardo.2434dd85.png"
    },
    e6d8: function (e, t, i) {
        e.exports = i.p + "img/dog_nose.6f108725.png"
    },
    e6f4: function (e, t, i) {
        e.exports = i.p + "img/gel3.b4051d15.png"
    },
    e704: function (e, t, i) {
        e.exports = i.p + "img/daddy.742a4c06.png"
    },
    e728: function (e, t, i) {
        e.exports = i.p + "img/russia.3415983f.png"
    },
    e738: function (e, t, i) {
        e.exports = i.p + "img/shark.b1e5d9fe.png"
    },
    e7ec: function (e, t, i) {
        e.exports = i.p + "img/colombia.8dab2f6b.png"
    },
    e823: function (e, t, i) {
        e.exports = i.p + "img/anon.9c65c226.png"
    },
    e8e5: function (e, t, i) {
        e.exports = i.p + "img/apples.b3cb3631.png"
    },
    e93b: function (e, t, i) {
        e.exports = i.p + "img/leaves.6948d15e.png"
    },
    e954: function (e, t, i) {
        e.exports = i.p + "img/noise.30a87786.png"
    },
    eb1b: function (e, t, i) {
        e.exports = i.p + "img/fractal6.c8544e6b.png"
    },
    eb36: function (e, t, i) {
        e.exports = i.p + "img/ornam8.d3484f88.png"
    },
    eb6f: function (e, t, i) {
        e.exports = i.p + "img/ks2.c5ef4c29.png"
    },
    ebc7: function (e, t, i) {
        e.exports = i.p + "img/balls2.7153d852.png"
    },
    ebfa: function (e, t, i) {
        e.exports = i.p + "img/tunnel.6b798eb7.png"
    },
    ec34: function (e, t, i) {
        e.exports = i.p + "img/abstract3.c3f0595d.png"
    },
    ed10: function (e, t, i) {
        e.exports = i.p + "img/ital.1b019b10.png"
    },
    ed4b: function (e, t, i) {
        e.exports = i.p + "img/fractal.a7d6a151.png"
    },
    ed8b: function (e, t, i) {
        e.exports = i.p + "img/uganda.b0efce23.png"
    },
    edc0: function (e, t, i) { },
    ee4a: function (e, t, i) {
        e.exports = i.p + "img/flower.253bf69b.png"
    },
    ef67: function (e, t, i) {
        e.exports = i.p + "img/water.1247bf13.png"
    },
    ef75: function (e, t, i) {
        e.exports = i.p + "img/honey2.d387663e.png"
    },
    ef9e: function (e, t, i) {
        e.exports = i.p + "img/hands.1e257b3f.png"
    },
    efbb: function (e, t, i) {
        e.exports = i.p + "img/uprt_dog.da80d0c5.png"
    },
    efe1: function (e, t, i) {
        "use strict";
        var n = i("d23d")
            , s = i.n(n);
        s.a
    },
    f047: function (e, t, i) {
        e.exports = i.p + "img/kara4erkesk.bcab3fce.png"
    },
    f061: function (e, t, i) {
        e.exports = i.p + "img/cucu.4682628c.png"
    },
    f0ca: function (e, t, i) {
        e.exports = i.p + "img/snapperz1.c6229ed3.png"
    },
    f155: function (e, t, i) {
        e.exports = i.p + "img/ornam26.fdf593ce.png"
    },
    f1a1: function (e, t, i) {
        e.exports = i.p + "img/broccoli.373ffeb4.png"
    },
    f1bc: function (e, t, i) {
        e.exports = i.p + "img/txtny.c8aebc6b.png"
    },
    f24d: function (e, t, i) {
        e.exports = i.p + "img/ornam5.ed31c2ba.png"
    },
    f370: function (e, t, i) {
        e.exports = i.p + "img/txtserve.7e5a34a4.png"
    },
    f3b0: function (e, t, i) {
        e.exports = i.p + "img/weide.c1a9d27e.png"
    },
    f3d1: function (e, t, i) {
        e.exports = i.p + "img/yaranaika.cde1c6c9.png"
    },
    f444: function (e, t, i) {
        e.exports = i.p + "img/deck.475cb038.png"
    },
    f4ec: function (e, t, i) {
        e.exports = i.p + "img/kiwi.ad048463.png"
    },
    f4ed: function (e, t, i) {
        e.exports = i.p + "img/ispan.f177695f.png"
    },
    f523: function (e, t, i) {
        e.exports = i.p + "img/pelmen.70df7048.png"
    },
    f536: function (e, t, i) {
        e.exports = i.p + "img/pop.f534636a.png"
    },
    f5ac: function (e, t, i) {
        e.exports = i.p + "img/seagull.39709725.png"
    },
    f619: function (e, t, i) {
        e.exports = i.p + "img/azerbaj.55e64843.png"
    },
    f664: function (e, t, i) {
        e.exports = i.p + "img/zebr.59312f23.png"
    },
    f66a: function (e, t, i) {
        e.exports = i.p + "img/kotorimeme.caf96a28.png"
    },
    f6a1: function (e, t, i) {
        e.exports = i.p + "img/ornam35.18104565.png"
    },
    f6d0: function (e, t, i) {
        e.exports = i.p + "img/shrek.425729fd.png"
    },
    f7a8: function (e, t, i) {
        e.exports = i.p + "img/taksoidet.eb7629fd.png"
    },
    f7fe: function (e, t, i) {
        e.exports = i.p + "img/txtlove.8cee1f54.png"
    },
    f836: function (e, t, i) {
        e.exports = i.p + "img/pumpkin5.b0d0cb8d.png"
    },
    f84b: function (e, t, i) {
        e.exports = i.p + "img/lava.0b94f311.png"
    },
    f889: function (e, t, i) {
        e.exports = i.p + "media/laser.bc07124b.wav"
    },
    f897: function (e, t, i) {
        e.exports = i.p + "img/face.2d7bfffa.png"
    },
    fa8d: function (e, t, i) {
        e.exports = i.p + "img/ornam7.57bd22f3.png"
    },
    faf9: function (e, t, i) {
        e.exports = i.p + "img/pika.2b7fe239.png"
    },
    fb6e: function (e, t, i) {
        e.exports = i.p + "img/greek.ba0cd557.png"
    },
    fc0e: function (e, t, i) {
        e.exports = i.p + "img/iyou.ab1d08e5.png"
    },
    fc57: function (e, t, i) {
        e.exports = i.p + "img/sailormoon.a0e35278.png"
    },
    fc7e: function (e, t, i) {
        e.exports = i.p + "img/glitter.1959edb3.png"
    },
    fca1: function (e, t, i) {
        e.exports = i.p + "img/ball12.9fc86b27.png"
    },
    fd66: function (e, t, i) {
        e.exports = i.p + "img/ukraine.1ae4e98b.png"
    },
    fdb8: function (e, t, i) {
        e.exports = i.p + "img/ball8.7bccca09.png"
    },
    fdc1: function (e, t, i) {
        e.exports = i.p + "img/stones.f0083cf9.png"
    },
    fdcd: function (e, t, i) {
        e.exports = i.p + "img/crystal3.4aa42cfe.png"
    },
    fe26: function (e, t, i) {
        e.exports = i.p + "img/dagestan.e9e36d07.png"
    },
    fe2c: function (e, t, i) {
        e.exports = i.p + "img/proj-blind.ecac444f.png"
    },
    fec2: function (e, t, i) { },
    fef6: function (e, t, i) {
        e.exports = i.p + "img/forbidden.9419471f.png"
    },
    ffb0: function (e, t, i) {
        e.exports = i.p + "img/ufo-active.ec0706db.png"
    },
    ffb1: function (e, t, i) {
        e.exports = i.p + "img/raspberry2.8adeab7c.png"
    }
});
const htmlContent = `
<div id="mod-tab" class="tab-menu-wrapper" ondblclick="window.getSelection().removeAllRanges()">
  <div class="tab-menu">
    <p class="online-players">Online: <span id="onlinePlayers"></span> | VIP players: <span id="onlineVipPlayers"></span></p>
    <table id="table-top">
      <colgroup>
        <col style="width:10%">
          <col style="width:50%">
            <col style="width:30%">
              <col style="width:10%">
      </colgroup>
      <tr>
        <th>id</th>
        <th>name</th>
        <th>skin</th>
        <th>vip</th>
      </tr>
    </table>
    <div id="tab-list">
      <table id="tab-menu-table" width="100%"></table>
    </div>
  </div>
</div>
<style>
  @keyframes rainbow-border {
    0% {
      background-position: 0% 50%
    }
    50% {
      background-position: 100% 50%
    }
    100% {
      background-position: 0% 50%
    }
  }
  
  .tab-menu-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: none;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 1000
  }
  
  .tab-menu {
    padding: 5px;
    width: 640px;
    max-height: 480px;
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    border: none;
    position: relative
  }
  
  .tab-menu::before {
    content: "";
    position: absolute;
    top: -3px;
    right: -3px;
    bottom: -3px;
    left: -3px;
    border-radius: 11px;
    padding: 5px;
    background: linear-gradient(45deg, #6d6d6d, #5a2424, #ff6060, #6d6d6d, #6d6d6d);
    background-size: 300% 300%;
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    animation: rainbow-border 8s linear infinite;
    pointer-events: none
  }
  
  .online-players {
    font-size: 22px;
    height: auto;
    text-align: center;
    color: #ffffff;
    margin: 0;
    margin-top: 10px;
    font-weight: normal;
    text-shadow: none
  }
  
  #table-top {
    padding-right: 160px;
    text-align: center;
    color: #ffffff;
    width: 100%;
    font-weight: normal;
    text-shadow: none
  }
  
  #tab-list {
    padding: 10px;
    text-align: left;
    color: #ffffff;
    max-height: 400px;
    overflow-y: auto;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    border: none
  }
  
  .tab-player-name {
    user-select: all
  }
  
  #tab-list a {
    text-decoration: none;
    color: inherit
  }
  
  #tab-list b {
    margin-left: 6px
  }
  
  #tab-list::-webkit-scrollbar-track {
    -webkit-box-shadow: none;
    border-radius: 10px;
    background-color: #4a4a4a
  }
  
  #tab-list::-webkit-scrollbar {
    width: 12px;
    background-color: #4a4a4a
  }
  
  #tab-list::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: none;
    background-color: #d32f2f
  }
  
  .target-button {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #979fd1;
    color: #bd282e;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s
  }
  
  .target-button:hover {
    background-color: #bd282e;
    color: #979fd1
  }
  
  #mod-hud.hud-top {
    top: 0
  }
  
  #mod-hud.hud-bottom {
    transform-origin: bottom left;
    bottom: 0
  }
  
  #mod-hud {
    color: #ffffff;
    left: 0;
    display: block;
    transform-origin: top left;
    transform: scale(1);
    will-change: contents;
    margin: 10px;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    padding: 5px
  }
  
  #mod-hud::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 8px;
    padding: 3px;
    background: linear-gradient(45deg, #6d6d6d, #6d6d6d, #6d6d6d, #6d6d6d, #6d6d6d, #6d6d6d, #5a2424, #ff6060, #6d6d6d, #6d6d6d, #6d6d6d, #6d6d6d, #6d6d6d, #6d6d6d);
    background-size: 300% 300%;
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    animation: rainbow-border 8s linear infinite;
    pointer-events: none
  }
  
  .hud-basic {
    font-size: 22px;
    position: fixed;
    pointer-events: none
  }
  
  #mod-hud .mod-hud-container {
    padding: 2px 10px;
    background-color: rgba(0, 0, 0, 0.4);
    color: #ffffff;
    font-size: 100%;
    pointer-events: none
  }
  
  .mod-hud-container {
    background-color: rgba(0, 0, 0, 0.4);
    color: #ffffff;
    font-size: 100%;
    padding: 2px 10px;
    pointer-events: none
  }
</style>
<div id="notification-container"></div>
<style>
#notification-container {
    position: fixed;
    top: 10px;
    left: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    z-index: 1000;
}

.player-notification {
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    border: 2px solid transparent;
    background-clip: padding-box;
    position: relative;
}

.player-notification::before {
    content: "";
    position: absolute;
    top: -2px;
    right: -2px;
    bottom: -2px;
    left: -2px;
    border-radius: 8px;
    padding: 3px;
    background: linear-gradient(45deg, #6d6d6d, #5a2424, #ff6060, #6d6d6d);
    background-size: 300% 300%;
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
}
</style>
<div class="panel_notifications"><span class="notifications"></span></div>
<div id="mod-hud" class="hud-basic hud-bottom" style="display:none;transform:scale(1);" oncontextmenu="return false;">
  <div class="mod-hud-container"><span id="hud-playing-stats"><span id="hud-disp-mass" style="display:initial;"><span id="hud-mass">0/0/0</span></span><span id="hud-disp-pieces" style="display:initial;">(<span id="hud-pieces">0</span>)</span>
    </span>
  </div>
</div>
<style>
  #mod-hud.hud-top {
    top: 0
  }
  
  #mod-hud.hud-bottom {
    transform-origin: bottom left;
    bottom: 0
  }
  
  #mod-hud {
    color: #ffffff;
    left: 0;
    display: block;
    transform-origin: top left;
    transform: scale(1);
    will-change: contents;
    margin: 10px;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    padding: 5px
  }
  
  #mod-hud::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 8px;
    padding: 3px;
    background: linear-gradient(45deg, #6d6d6d, #6d6d6d, #6d6d6d, #6d6d6d, #6d6d6d, #6d6d6d, #5a2424, #ff6060, #6d6d6d, #6d6d6d, #6d6d6d, #6d6d6d, #6d6d6d, #6d6d6d);
    background-size: 300% 300%;
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    animation: rainbow-border 8s linear infinite;
    pointer-events: none
  }
  
  .hud-basic {
    font-size: 22px;
    position: fixed;
    pointer-events: none
  }
  
  #mod-hud .mod-hud-container {
    padding: 2px 10px;
    background-color: rgba(0, 0, 0, 0.4);
    color: #ffffff;
    font-size: 100%;
    pointer-events: none
  }
  
  .mod-hud-container {
    background-color: rgba(0, 0, 0, 0.4);
    color: #ffffff;
    font-size: 100%;
    padding: 2px 10px;
    pointer-events: none
  }
</style>
<div id="mod-map" class="mod-map" oncontextmenu="return false;">
  <div class="mod-map-container"><span id="playerPosition"></span><span id="deadPosition"></span><span id="restartPointPosition"></span></div>
  <div id="teleportPosition"></div>
</div>
<style>
  .mod-map-container {
    position: relative;
    width: 150px;
    height: 150px;
    margin: 0
  }
  
  #mod-map {
    display: none;
    position: absolute;
    right: 10px;
    bottom: 1%;
    background: rgba(0, 0, 0, .3);
    border-radius: 8px;
    overflow: hidden;
    padding: 5px
  }
  
  #mod-map::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 8px;
    padding: 3px;
    background: linear-gradient(45deg, #6d6d6d, #6d6d6d, #6d6d6d, #6d6d6d, #6d6d6d, #6d6d6d, #5a2424, #ff6060, #6d6d6d, #6d6d6d, #6d6d6d, #6d6d6d, #6d6d6d, #6d6d6d);
    background-size: 300% 300%;
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    animation: rainbow-border 8s linear infinite;
    pointer-events: none
  }
  
  @keyframes rainbow-border {
    0% {
      background-position: 0% 50%
    }
    50% {
      background-position: 100% 50%
    }
    100% {
      background-position: 0% 50%
    }
  }
  
  .glow-on-hover {
    width: 220px;
    height: 50px;
    border: none;
    outline: none;
    color: #fff;
    background: #111;
    position: relative;
    z-index: 0;
    border-radius: 10px
  }
  
  #playerPosition {
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background-color: #2ad567;
    box-shadow: 0 0 6px rgba(42, 213, 103, 0.8)
  }
    #restartPointPosition {
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: linear-gradient(45deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 43%, #9a7a2dd1  45%, #9a7a2dd1  55%, rgba(0, 0, 0, 0) 57%, rgba(0, 0, 0, 0) 100%), linear-gradient(135deg, rgb(0 0 0 / 0%) 0%, rgb(0 0 0 / 0%) 43%, #9a7a2dd1  45%, #9a7a2dd1 55%, rgb(0 0 0 / 0%) 57%, rgb(0 0 0 / 0%) 100%);
    box-shadow: 0 0 6px rgb(54 54 255 / 61%);
  }
  #deadPosition {
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 11px;
    height: 11px;
    background: linear-gradient(45deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 43%, #f00 45%, #f00 55%, rgba(0, 0, 0, 0) 57%, rgba(0, 0, 0, 0) 100%), linear-gradient(135deg, rgb(0 0 0 / 0%) 0%, rgb(0 0 0 / 0%) 43%, #f00 45%, #f00 55%, rgb(0 0 0 / 0%) 57%, rgb(0 0 0 / 0%) 100%);
    box-shadow: 0 0 6px rgba(255, 0, 0, 0.8)
  }
  #teleportPosition {
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 2px solid #00deffd1;
    background: none;
    box-shadow: 0 0 6px rgb(54 54 255 / 61%);
}
</style>
<div id="mod-settings" class="settings-overlay" oncontextmenu="return false;"><span class="settings-o-content"><span class="settings-o-key">[T]</span><span class="settings-o-content-text">Zoom:</span><span class="settings-o-content-val toggle-enable">enabled</span></span><span class="settings-o-content"><span class="settings-o-key">[A/S]</span><span class="settings-o-content-text">Text:</span><span class="settings-o-content-val raw">50</span></span><span class="settings-o-content"><span class="settings-o-key">[I]</span><span class="settings-o-content-text">Text:</span><span class="settings-o-content-val toggle-disable">disabled</span></span><span class="settings-o-content"><span class="settings-o-key">[O]</span><span class="settings-o-content-text">Text:</span><span class="settings-o-content-val rawenable">Low</span></span><span class="settings-o-content"><span class="settings-o-key">[F12]</span><span class="settings-o-content-text">Toggle Overlay</span></span>
</div>
<style>
  .settings-overlay,
  ::after,
  ::before {
    box-sizing: border-box;
    border-style: solid;
    border-width: 0;
    margin: 0;
    padding: 0;
    user-select: none
  }
  
  .settings-overlay {
    color: rgb(252, 252, 252);
    font-family: "Roboto Mono", "Sawarabi Gothic", "Hiragino Kaku Gothic ProN", Consolas, Verdana, monospace;
    position: fixed;
    z-index: 10;
    user-select: none;
    font-size: 13px;
    line-height: 1.15em;
    opacity: .9;
    left: 10px;
    top: 95px;
    transform: translateZ(0) scaleX(.9);
    transform-origin: left;
    letter-spacing: -.05em;
    display: none;
    flex-direction: column;
    opacity: 0.7
  }
  
  .settings-o-content {
    display: flex;
    flex-direction: row
  }
  
  .settings-o-key {
    margin-right: .5em
  }
  
  .settings-o-content-text {
    margin-right: .5em
  }
</style>

<style>
.top-container[data-v-53e414ae] {
    background: none !important;
    width: 300px !important;
    height: 313.6px !important;
    position: absolute !important;
    top: 0 !important;
    right: 10px !important;
    -webkit-transform-origin: top right !important;
    transform-origin: top right !important;
    -webkit-transition: opacity .5s !important;
    transition: opacity .5s !important;
}

.top-container.transparent[data-v-53e414ae] {
    opacity: .2 !important;
}

.header[data-v-53e414ae] {
    display: none !important;
}

.top-rows-container[data-v-53e414ae] {
    position: absolute !important;
    top: 40px !important;
    color: #fcfcfc !important;
    font-size: 20px !important;
    font-weight: 700 !important;
}

.top-row[data-v-53e414ae] {
    position: relative !important;
    height: 25px !important;
    width: 280px !important;
}

.top-row:nth-child(1) {
    opacity: 1 !important;
}
.top-row:nth-child(2) {
    opacity: 0.9 !important;
}
.top-row:nth-child(3) {
    opacity: 0.8 !important;
}
.top-row:nth-child(4) {
    opacity: 0.7 !important;
}
.top-row:nth-child(5) {
    opacity: 0.6 !important;
}
.top-row:nth-child(6) {
    opacity: 0.5 !important;
}
.top-row:nth-child(7) {
    opacity: 0.4 !important;
}
.top-row:nth-child(8) {
    opacity: 0.3 !important;
}
.top-row:nth-child(9) {
    opacity: 0.2 !important;
}
.top-row:nth-child(10) {
    opacity: 0.1 !important;
}

.name-score[data-v-53e414ae] {
    position: absolute !important;
    left: -35px !important;
    right: 20px !important;
}

.name.compact[data-v-53e414ae] {
    letter-spacing: -.08em !important;
}

.score[data-v-53e414ae] {
    position: absolute !important;
    right: -20px !important;
}

.header[data-v-53e414ae] {
    position: absolute !important;
    left: 0 !important;
    right: 0 !important;
    margin: auto !important;
    text-align: center !important;
    font-weight: 700 !important;
}

/*
.buttons-container[data-v-53e414ae] {
    position: absolute !important;
    top: 780px !important;
    left: 100px !important;
    display: -webkit-box !important;
    display: -ms-flexbox !important;
    display: flex !important;
    width: 100% !important;
    -webkit-box-pack: center !important;
    -ms-flex-pack: center !important;
    justify-content: center !important;
}

.button-exit[data-v-53e414ae] {
    background-image: url('https://cdn-icons-png.flaticon.com/512/320/320140.png') !important;
    background-size: 70% !important;
    background-repeat: no-repeat !important;
    background-position: center !important;
    width: 50px !important;
    height: 50px !important;
    border-radius: 50% !important;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    background-color: #fff !important;
    border: 2px solid #f00 !important;
    text-align: center !important;
    line-height: 1 !important;
    color: transparent !important;
}

.sprite-icon-fullscreen {
    background-image: url('https://cdn-icons-png.flaticon.com/512/3818/3818479.png') !important;
    background-size: 70% !important;
    background-repeat: no-repeat !important;
    background-position: center !important;
    width: 50px !important;
    height: 50px !important;
    border-radius: 50% !important;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    background-color: #fff !important;
    border: 2px solid #f00 !important;
    text-align: center !important;
    line-height: 1 !important;
}

.sprite-icon-gem-big {
    background-image: url(../img/spritesheet.a9acffdb.png) !important;
}
*/

.result-hint[data-v-53e414ae] {
    display: none !important;
}

.result-text[data-v-53e414ae] {
    display: none !important;
}

.buttons-container[data-v-53e414ae] {
    display: none !important;
}

.button-exit[data-v-53e414ae] {
    display: none !important;
}

.sprite-icon-fullscreen {
    display: none !important;
}

.sprite-icon-gem-big {
    display: none !important;
}

</style>
<div id="statsContainer" style="display: none;">
    <div id="verticalDivider"></div>
    <h3 id="statsTitle">Игровая статистика</h3>
	<h3 id="gameOptionsTitle" class="sectionTitle">Опции игры</h3>
	<h3 id="playerInfoTitle" class="sectionTitle">Информация об игроках</h3>

    <div id="playerSkinContainer">
            <img id="playerSkin" src="" alt="Player Skin" />
    </div>
    <div id="playerInfo">
        <div id="playerNickContainer">
            <p id="playerNick"></p>
        </div>
    </div>
    
	<div id="PlayersInfo" style="display: none;">
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Имя</th>
                    <th>Скин</th>
                    <th>VIP</th>
                    <th>Действие</th>
                </tr>
            </thead>
            <tbody id="PlayersTableBody">
                <!-- Игроки будут добавляться сюда через JS -->
            </tbody>
        </table>
    </div>
    <div id="timerElementContainer">
        <p id="timerElement">Время в топ 3: 00:00:00</p>
    </div>
    
    <div id="maxMassElementContainer">
        <p id="maxMassElement">Максимальная масса: 0</p>
    </div>
    
    <div id="aliveTimerElementContainer">
        <p id="aliveTimerElement">Время жизни: 00:00:00</p>
    </div>
	
	<div id="CoinsReContainer">
        <p id="CoinsRez">Заработаные монеты: ???</p>
    </div>
	
	<div id="MvpCoinsRezContainer">
        <p id="MvpCoinsRez">Заработаные изумруды: ???</p>
    </div>
    <div id="EatVirusContainer">
        <p id="EatVirus">Поглощенные вирусы: ???</p>
    </div>	
    <div id="PelletEatContainer">
        <p id="PelletEat">Собранная масса: ???</p>
    </div>	
	
    <div id="RoomStatContainer">
        <p id="RoomStat">Комната: ???</p>
    </div>	
	
	<div id="OnlineStatContainer">
        <p id="OnlineStat">Онлайн: ???</p>
    </div>	
	
	<div id="exitButtonContainer">
        <button id="exitButton">Выход</button>
    </div>
	
	<div id="InfoButtonContainer">
        <button id="InfoButton">Данные</button>
    </div>
	
	<div id="PlayersButtonContainer">
        <button id="PlayersButton">Игроки</button>
    </div>
	
	<div id="SetingButtonContainer">
        <button id="SetingButton">Опции</button>
    </div>
</div>

<style>

#statsContainer {
    display: none;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 500px;
    height: 350px; /* Increased height to accommodate the new divs */
    text-align: center;
    z-index: 1000;
    background-color: rgba(20, 20, 20, 0.9);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);
    border: 3px solid rgba(255, 255, 255, 0.3);
}

#verticalDivider {
    position: absolute;
    top: 20px; 
    bottom: 20px; 
    left: 100px;
    transform: translateX(-50%);
    width: 2px; 
    background-color: rgba(255, 255, 255, 0.3); 
}

#statsTitle,
#gameOptionsTitle,
#playerInfoTitle {
    position: absolute;
    top: -60px;
    left: 150px;
    font-size: 24px;
    color: #f0f0f0;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    font-weight: bold;
    margin-bottom: 20px;
}

#playerSkinContainer {
    margin-bottom: 10px;
}

#playerSkin {
    position: absolute;
    left: 200px;
    top: 40px;
    width: 160px;
    height: 160px;
    border-radius: 50%;
    border: 2px solid #f0f0f0;
}

#playerNickContainer {
    margin-bottom: 20px;
}

#playerNick {
    position: absolute;
    left: 205px;
    top: 78px;
    font-size: 30px;
    color: #ffffff;
    text-align: center;
    text-shadow: -5px -1px 1px #242424
}

#timerElementContainer,
#maxMassElementContainer,
#aliveTimerElementContainer,
#PelletEatContainer,
#EatVirusContainer,
#MvpCoinsRezContainer,
#CoinsReContainer,
#RoomStatContainer,
#OnlineStat {
    position: absolute;
    font-size: 14px;
    color: #ffffff;
    text-align: -webkit-left; 
}

#timerElementContainer {
    top: 210px;
    left: 120px; 
}

#aliveTimerElementContainer {
    top: 235px;
    left: 120px; 
}

#maxMassElementContainer {
    top: 260px;
    left: 120px; 
}

#RoomStatContainer {
    top: 285px;
    left: 120px; 
} 

#OnlineStat {
    top: 310px;
    left: 120px; 
}

#PelletEatContainer {
    top: 210px;
    left: 340px; 
}

#EatVirusContainer {
    top: 235px;
    left: 340px; 
}

#MvpCoinsRezContainer {
    top: 260px;
    left: 340px; 
}

#CoinsReContainer {
    top: 285px;
    left: 340px; 
}

#exitButtonContainer {
    margin: 15px 0;
    display: flex;
    justify-content: center;
}

#exitButton {
    position: absolute;
    right: 446px;
    top: 330px;
    font-size: 15px;
    padding: 5px 10px;
    border-radius: 10px;
    border: 2px solid #aaa;
    background-color: #1c1c1c;
    color: #f0f0f0;
    text-transform: uppercase;
    letter-spacing: 1px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
    width: 90px;
    text-align: center;
}

#InfoButtonContainer {
    margin: 15px 0;
    display: flex;
    justify-content: center;
}

#InfoButton {
    position: absolute;
    right: 446px;
    top: 30px;
    font-size: 15px;
    padding: 5px 10px;
    border-radius: 10px;
    border: 2px solid #aaa;
    background-color: #1c1c1c;
    color: #f0f0f0;
    text-transform: uppercase;
    letter-spacing: 1px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
    width: 90px;
    text-align: center;
}

#PlayersButtonContainer {
    margin: 15px 0;
    display: flex;
    justify-content: center;
}

#PlayersButton {
    position: absolute;
    top: 80px;
    right: 446px;
    font-size: 15px;
    padding: 5px 10px;
    border-radius: 10px;
    border: 2px solid #aaa;
    background-color: #1c1c1c;
    color: #f0f0f0;
    text-transform: uppercase;
    letter-spacing: 1px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
    width: 90px;
    text-align: center;
}

#SetingButtonContainer {
    margin: 15px 0;
    display: flex;
    justify-content: center;
}

#SetingButton {
    position: absolute;
    top: 130px;
    right: 446px;
    font-size: 15px;
    padding: 5px 10px;
    border-radius: 10px;
    border: 2px solid #aaa;
    background-color: #1c1c1c;
    color: #f0f0f0;
    text-transform: uppercase;
    letter-spacing: 1px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
    width: 90px;
    text-align: center;
}

#InfoButton:hover,
#PlayersButton:hover,
#SetingButton:hover,
#exitButton:hover {
    background-color: #333;
    color: #fff;
    transform: scale(1.05);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.4);
}

#InfoButton:active,
#PlayersButton:active,
#SetingButton:active,
#exitButton:active {
    transform: scale(0.98);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.highlighted {
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.5);
    transform: scale(1.05);
    transition: all 0.3s ease;
}

</style>

`

const zoomEnable = true; // Зум вкл/выкл
const defaultZoom = 2.5; // Дефолтный множитель зума при входе (1)
const zoomSpeed = 150; // Скорость зума, меньше значение - больше скорость (120)
const colorIndicator = false; // Помечать цветом шары которые могут поделиться (false)
const adaptationIndicator = true; // Помечать адаптацией шары которые могут поделиться (true)
const keepPlayersMenuOpen = true; // Не закрывать меню игроков после отжатия клавиши (false)
const blockContextMenu = false; // Блокировать контекстное меню (пкм) (false)
const restartDelay1 = 20; // (60)
const restartDelay2 = 700; // (1200)
const hudOnTop = false; // Переместить HUD наверх (false)
const noSelectMeLButton = true; // Выделение ника
const minMassLButton = 50; // Минимальная масса для лкм (1)
const splitCheckDistance = 30; // не трогать (<30)
const minMassForSplitCheck = 250; // Минимальная масса для срабатывания авто телепорта и снежка (100)
const minMassForInstabilityCell = 150; // Минимальная масса цели в самом большом его шаре
const minMassForInstability = 1000; // Минимальная общая(известная) масса цели
const forceTargetSelection = true; // Обязательный выбор цели (лкм)
const minMassForInstabilityDouble = 350; // Минимальная масса цели в самом большом его шаре
const instabilityDoubleMode = 2; // 1 - Прямой дабл, 2 - Дабл с корректировкой
const forceTargetSelectionOnSplit = true; // Обязательный выбор цели (лкм)
const minMassForInstabilityOnSplit = 150; // Минимальная масса цели в самом большом его шаре
let fastMergingInterval = 1; // Быстрое соединение + пробел (1)
const autoDivisionCheck = 1; // Авто-тп, авто-снежок
const instabilityAbsorbDivisionAbsorb = 1; // слив нб, слив пробела

// Обозначение клавиш
const playersMenuHotkey = "Tab"; // Меню игроков (Tab)
const playerPauseHotkey = "KeyZ"; // Пауза (KeyZ)
const catchInstabilityHotkey = "Digit1"; // Авто-слив нестабилки (Digit1)
const catchInstabilityDoubleHotkey = "Digit2"; // Авто-слив нестабилки дабл (Digit2)
const catchSplitHotkey = "Digit3"; // Слив пробела (Digit3)
const autoTeleportHotkey = "F1"; // Авто телепорт (F1)
const autoSnowballHotkey = "F2"; // Авто снежок (F2)
const adaptationInsHotkey = "F3";// Авто адап+нб(фикс)
const gameReloadHotkey = "F5"; // Перезагрузить iframe игры(F5)
const gameRestartHotkey = "F7"; // Перезайти на сервер (F7)
const namesToConsoleHotkey = "F8"; // Вывод ников в консоль (F8)
const screenshotHotkey = "F9"; // Сделать скриншот (F9)
const freezeFunctionHotkey = "KeyO"; // Заморозка шаров (KeyP)
const fullScreenHotkey = "F11"; // Вкл/выкл полноэкранный режим (F11)
const hideModHotkey = "F12"; // Скрыть наличие мода (F12)
const fastUniteHotkey = "CapsLock"; // Быстрое соединение + пробел (CapsLock)
const scaleIncreaseHotkey = "Equal"; // Увеличить масштаб топа игроков и панели со способностями (Equal)
const scaleDecreaseHotkey = "Minus"; // Уменшить масштаб топа игроков и панели со способностями (Minus)
const DOUBLE_SPLIT = 'KeyR'; // Макрос на сплит x4 (KeyF)
const FULL_SPLIT = 'KeyF'; // Макрос на сплит x16 (KeyR)
const ADAPTATION_INSTABILLITY = 'Digit5'; // Макрос на сплит х2 + Нб + Адапта
const ADAPTATION_TELEPORT = 'KeyD'; // Макрос E + Q (KeyD)
const FREEZE_KEY = 'KeyP'; // Дергание
const ADAPTATION_SNOWBALL = 'KeyY'; // Макрос E + S (Адаптация и снежок)
const botMPCKey = "KeyI"; // Вкл/Выкл бота на собирание колючек 
const mainUserModeKey = "KeyU"; // Вкл/Выкл бота на собирание колючек 
const panel_notificati_ons = "KeyM";//Вкл/Выкл панели уведомлений
const TOGGLE_AURA_KEY = "ControlLeft";//Вкл/Выкл общей ауры
const STOPNB_SPLIT = "Space";

let stopNB_split = false;
// Технические переменные
let globalBlob = {};
let autoTeleportKeyPressed = false;
let autoSnowballKeyPressed = false;
let playersMenuKeyPressed = false;
let fastUniteKeyPressed = false;
let catchInstabilityKeyPressed = false;
let catchInstabilityDoubleKeyPressed = false;
let catchSplitKeyPressed = false;
let gameRestart = false;
let globalPause = false;
let sendInputBlock = false;
let hideMod = false;
let globalAlive = false;
let globalInGame = false;
let predPlaying = false;
let predAlive = false;
let selectedBallID = 0;
let selectedPlayerID = 0;
let selectedPlayerName = 0;
let mouseUpDelayL = 0;
let deathCoordinates = [];
let restartCoordinates = [];
let globalCellsCount = 0;
let cellsToSplit = 0;
let previousGlobalZoom = 0;
let zoomOff = false;
let globalZoomLevel = defaultZoom;
let globalShowMass = true;
let teleportationEscape = false;
let protectingSnowball = false;

let fastUniteBlock = false;
let fastUniteInterval = null;
const fastUniteDelay = 1;


const notMergeDelay = 1;
let notMergeInterval = null;
let noMergeTimer = null;
const noMergeStartDelay = 300;

let playerCells = [];
let targetCells = [];

// временное поле для цели\
let target = null;

let doubleSplit = false;
let fullSplit = false;
let adaptationTeleport = false;
let adaptationSnowball = false;
let botVirus = false;
let adaptationInsKeyPressed = false;
let adaptationInsActive = false;

let colorIndex = 0;
let lastColorChangeTime = Date.now();
let currentColor = 0xFF0000;
let nextColor = 0xFF7F00;

let freeze1 = false;
let freezeTimer1 = null;
let freezeTimeDelay1 = 60;
let cordsSwitch1 = false;
let DISTANCE_TO_MOVE = 7500;
let SAFE_MULTIPLIER = 1.1;
let MPC_INTERVAL = 100;
let MAIN_MODE_INTERVAL = 200;
let THREAT_DISTANCE = 100;
let MASS_THRESHOLD = 200;
let MASS_DROP_WINDOW = 4000;
let logCounter = 0;
let botModeEnabled = false;
let mainUserModeEnabled = false;
let mpcFrameId = null;
let notMergeFrameId = null;
let intervalId = null;
let hasJoinedServer = false;
let lastTotalMass = 0;
let massHistory = [];
let startTime = null;
let selectedTargetCells = [];
let followingTarget = false;

let isAuraEnabled = false;

const SAFE_DISTANCE = 200;
const IGNORE_VIRUS_DURATION = 5000;

let ignoredViruses = new Map();


document.addEventListener("DOMContentLoaded", function () {
    window.CallbackRegistry = {};
    window.onerror = function (error) {
        console.error(error);
    };
    window.onblur = function () {
        if (!freeze && !globalPause) {
            splitCheckStop();
            Stop();
            sendInputBlock = false;
        }
        clearTimeout(notMergeInterval);
        clearTimeout(fastUniteInterval);
    };
    var freezeEnabled = false;

    document.addEventListener("keydown", function (event) {
        if (globalInGame) {
            if (event.code === freezeFunctionHotkey) {
                if (!freeze) {
                    freeze = true;
                    sendInputBlock = true;
                    freezeFunc();
                    console.log("freeze enabled");
                } else {
                    freeze = false;
                    sendInputBlock = false;
                    clearTimeout(freezeTimer);
                    console.log("freeze disabled");
                }
            } else if (event.code === FREEZE_KEY) {
                if (!freeze1) {
                    freeze1 = true;
                    sendInputBlock = true;
                    freezeFunc1();
                } else {
                    freeze1 = false;
                    sendInputBlock = false;
                    clearTimeout(freezeTimer1);

                }
            }

            else if (event.code === namesToConsoleHotkey) {
                if (!freezeEnabled) {
                    freezeEnabled = true;
                    if (globalInGame) {
                        let names = "";
                        for (let i = 0; i < globalBlob.game._players.length; i++) {
                            let player = globalBlob.game._players[i];
                            if (player !== null && player !== undefined) {
                                names += "\n" + player.name;
                            }
                        }
                        console.log(names);
                    }
                }
            } else if (event.code === catchInstabilityHotkey) {
                event.preventDefault();
                event.stopPropagation();
                if (globalAlive && !catchInstabilityKeyPressed) {
                    catchInstabilityKeyPressed = true;
                    Start("instability");
                }
            } else if (event.code === catchInstabilityDoubleHotkey) {
                event.preventDefault();
                event.stopPropagation();
                if (globalAlive && !catchInstabilityDoubleKeyPressed) {
                    catchInstabilityDoubleKeyPressed = true;
                    Start("instability_double");
                }
            } else if (event.code === catchSplitHotkey) {
                event.preventDefault();
                event.stopPropagation();
                if (globalAlive && !catchSplitKeyPressed) {
                    catchSplitKeyPressed = true;
                    Start("catch_split");
                }
            } else if (event.code === playersMenuHotkey) {
                event.preventDefault();
                event.stopPropagation();
                if (!playersMenuKeyPressed) {
                    playersMenuKeyPressed = true;
                    tabMenuSwitch();
                }
            } else if (event.code === playerPauseHotkey) {
                event.preventDefault();
                event.stopPropagation();
                if (globalAlive) {
                    if (!globalPause) {
                        globalPause = true;
                        sendInputBlock = true;
                        globalBlob.game._client.buffer.writeUInt8(1);
                        globalBlob.game._client.buffer.writeFloat(0);
                        globalBlob.game._client.buffer.writeFloat(0);
                    } else {
                        sendInputBlock = false;
                        globalPause = false;
                    }
                }
            } else if (event.code === autoTeleportHotkey) {
                event.preventDefault();
                event.stopPropagation();
                if (!autoTeleportKeyPressed) {
                    autoTeleportKeyPressed = true;
                    if (globalAlive) {
                        splitCheckStart("teleport");
                    }
                }
            } else if (event.code === autoSnowballHotkey) {
                event.preventDefault();
                event.stopPropagation();
                if (!autoSnowballKeyPressed) {
                    autoSnowballKeyPressed = true;
                    if (globalAlive) {
                        splitCheckStart("snowball");
                    }
                }
            } else if (event.code === adaptationInsHotkey) {
                event.preventDefault();
                event.stopPropagation();
                if (!adaptationInsKeyPressed) {
                    adaptationInsKeyPressed = true;
                    if (globalAlive) {
                        splitCheckStart("adaptation");
                    }
                }
            } else if (event.code === gameReloadHotkey) {
                event.preventDefault();
                event.stopPropagation();
                try {
                    if ((!!document.fullscreen || !!document.mozFullScreen || !!document.fullscreenElement || !!document.msFullscreenElement || !!document.webkitIsFullScreen) && document.exitFullscreen) {
                        document.exitFullscreen();
                    } else if (document.webkitExitFullscreen) {
                        document.webkitExitFullscreen();
                    } else if (document.mozCancelFullScreen) {
                        document.mozCancelFullScreen();
                    } else if (document.msExitFullscreen) {
                        document.msExitFullscreen();
                    }
                } catch (error) { }
                window.location.reload();
            } else if (event.code === gameRestartHotkey) {
                event.preventDefault();
                event.stopPropagation();

                gameRestartFunc();
            } else if (event.code === screenshotHotkey) {
                event.preventDefault();
                event.stopPropagation();
                // Screenshot functionality here (if needed)
            } else if (event.code === fullScreenHotkey) {
                event.preventDefault();
                event.stopPropagation();
                try {
                    if (document.body.requestFullscreen) {
                        document.body.requestFullscreen();
                    } else if (document.body.webkitRequestFullscreen) {
                        document.body.webkitRequestFullscreen();
                    } else if (document.body.mozRequestFullScreen) {
                        document.body.mozRequestFullScreen();
                    } else if (document.body.msRequestFullscreen) {
                        document.body.msRequestFullscreen();
                    }
                } catch (error) { }
            } else if (event.code === hideModHotkey) {
                event.preventDefault();
                event.stopPropagation();
                if (globalInGame) {
                    if (hideMod) {
                        globalZoomLevel = previousGlobalZoom;
                        zoomOff = false;
                        document.body.querySelector("#mod-hud")
                            .style.display = "block";
                        document.body.querySelector("#mod-map")
                            .style.display = "block";
                        hideMod = false;
                    } else {
                        previousGlobalZoom = globalZoomLevel;
                        globalZoomLevel = 1;
                        zoomOff = true;
                        document.body.querySelector("#mod-hud")
                            .style.display = "none";
                        document.body.querySelector("#mod-map")
                            .style.display = "none";
                        hideMod = true;
                    }
                }
            } else if (event.code === fastUniteHotkey) {
                event.preventDefault();
                event.stopPropagation();
                if (!fastUniteKeyPressed) {
                    fastUniteKeyPressed = true;
                    if (globalAlive && globalBlob.game._localPlayerCells.length > 1) {
                        fastUniteInterval = setTimeout(function fastUniteFunction() {
                            fastUnite();
                            fastUniteInterval = setTimeout(fastUniteFunction, fastUniteDelay);
                        }, 0);
                    }
                }
            } else if (event.code === scaleDecreaseHotkey) {
                event.preventDefault();
                event.stopPropagation();
                if (globalInGame) {
                    globalBlob.scale -= 0.01;
                }
            } else if (event.code === scaleIncreaseHotkey) {
                event.preventDefault();
                event.stopPropagation();
                if (globalInGame) {
                    globalBlob.scale += 0.01;
                }
            }

        }



    });
    document.addEventListener("keyup", function (event) {
        if (globalInGame) {
            if (event.code === namesToConsoleHotkey) {
                freezeEnabled = false;
            } else if (event.code === catchInstabilityHotkey) {
                catchInstabilityKeyPressed = false;
                if (!catchInstabilityKeyPressed && !catchInstabilityDoubleKeyPressed && !catchSplitKeyPressed) {
                    Stop();
                }
            } else if (event.code === catchInstabilityDoubleHotkey) {
                catchInstabilityDoubleKeyPressed = false;
                if (!catchInstabilityKeyPressed && !catchInstabilityDoubleKeyPressed && !catchSplitKeyPressed) {
                    Stop();
                }
            } else if (event.code === catchSplitHotkey) {
                catchSplitKeyPressed = false;
                if (!catchInstabilityKeyPressed && !catchInstabilityDoubleKeyPressed && !catchSplitKeyPressed) {
                    Stop();
                }
            } else if (event.code === playersMenuHotkey) {
                playersMenuKeyPressed = false;
                if (!keepPlayersMenuOpen) {
                    tabMenuSwitch();
                }
            } else if (event.code === fastUniteHotkey) {
                fastUniteKeyPressed = false;
                sendInputBlock = false;
                clearTimeout(fastUniteInterval);
            } else if (event.code === autoTeleportHotkey) {
                autoTeleportKeyPressed = false;
                splitCheckStop();
            } else if (event.code === autoSnowballHotkey) {
                autoSnowballKeyPressed = false;
                splitCheckStop();
            }
        }

    });
    document.body.addEventListener("mousedown", function (event) {
        if (event.target.tagName === "CANVAS") {
            if (event.which === 1) {
                clearTimeout(notMergeInterval);
                clearTimeout(noMergeTimer);
                if (!freezeEnabled && !globalPause) {
                    sendInputBlock = false;
                }
                if (globalAlive) {
                    mouseUpDelayL = Date.now();
                    noMergeTimer = null;
                    noMergeTimer = setTimeout(function () {
                        sendInputBlock = true;
                        notMergeInterval = setTimeout(function nonMergeFunction() {
                            notMerge();
                            notMergeInterval = setTimeout(nonMergeFunction, notMergeDelay);
                        }, 0);
                    }, noMergeStartDelay);
                }
            } else if (event.which === 2) {
                // Middle mouse button functionality (if needed)
            } else if (event.which === 3) {
                // Right mouse button functionality (if needed)
            }
        }
    });
    document.body.addEventListener("mouseup", function (event) {
        if (event.target.tagName === "CANVAS") {
            const cameraScale = globalBlob.game._camera.scale.x;
            const mousePosition = globalBlob.game.app.renderer.plugins.interaction.mouse.global;
            const adjustedX = (mousePosition.x - globalBlob.game.app.renderer.width / 2) / cameraScale + globalBlob.game._viewArea.centerX;
            const adjustedY = (mousePosition.y - globalBlob.game.app.renderer.height / 2) / cameraScale + globalBlob.game._viewArea.centerY;
            if (event.which === 1) {
                mouseUpDelayL = Date.now() - mouseUpDelayL;
                if (mouseUpDelayL > 0x12c) {
                    clearTimeout(notMergeInterval);
                    sendInputBlock = false;
                } else if (globalAlive) {
                    clearTimeout(noMergeTimer);
                    let closestDistance = 6000000;
                    let closestCellId = 0;
                    let closestPlayerId = 0;
                    let closestPlayerName = "";
                    globalBlob.game.cellMgr._updatedCells.forEach(cell => {
                        if (cell.type === 0 && (!noSelectMeLButton || cell._player.index !== globalBlob.game._localPlayerIndex)) {
                            const deltaX = adjustedX - cell.x;
                            const deltaY = adjustedY - cell.y;
                            const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
                            if (distance < closestDistance && cell.mass > minMassLButton) {
                                closestDistance = distance;
                                closestCellId = cell.id;
                                closestPlayerId = cell._player.index;
                                closestPlayerName = cell._player.name;
                            }
                        }
                    });
                    if (closestPlayerId > 0) {
                        if (selectedPlayerID !== closestPlayerId) {
                            selectedBallID = closestCellId;
                            selectedPlayerID = closestPlayerId;
                            selectedPlayerName = closestPlayerName;
                        } else {
                            selectedBallID = 0;
                            selectedPlayerID = 0;
                            selectedPlayerName = 0;
                        }
                    }
                }
                mouseUpDelayL = 0;
            } else if (event.which === 2) {
                // Middle mouse button functionality (if needed)
            } else if (event.which === 3) {
                // Right mouse button functionality (if needed)
            }
        }
    });
    document.body.addEventListener("contextmenu", function (event) {
        if (blockContextMenu && event.target.tagName === "CANVAS") {
            event.preventDefault();
            return false;
        }
    });
    document.body.querySelector("#app").onwheel = function (event) {
        if (zoomEnable && !zoomOff) {
            let direction = Math.sign(event.deltaY);
            let targetScale = globalZoomLevel + direction * 0.6;

            if ((direction === 1 && globalZoomLevel < 20) || (direction === -1 && globalZoomLevel > 1.5)) {
                animateScale(globalZoomLevel, targetScale);
            }
        }
    };
    setInterval(globalInterval, 50);
    const hudElement = document.createElement("div");
    hudElement.innerHTML = htmlContent;
    document.body.appendChild(hudElement);
    if (hudOnTop) {
        document.body.querySelector("#mod-hud")
            .classList.remove("hud-bottom");
        document.body.querySelector("#mod-hud")
            .classList.add("hud-top");
    }
});
let isKeyPressed = false;
document.addEventListener("keydown", function (event) {
    if (event.code === "ArrowUp") {
        if (globalInGame) {
            console.log(globalBlob);
        }
    }
});

function animateScale(startScale, targetScale) {
    let startTime = performance.now();

    const animate = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        if (elapsedTime >= zoomSpeed) {
            globalZoomLevel = targetScale;
        } else {
            const progress = elapsedTime / zoomSpeed;
            globalZoomLevel = startScale + (targetScale - startScale) * progress;
            requestAnimationFrame(animate);
        }
    };

    requestAnimationFrame(animate);
}

function globalInterval() {
    if (typeof globalBlob.game !== "undefined") {
        const game = globalBlob.game;
        if (game.playing !== predPlaying) playingListener(predPlaying = game.playing);
        if (game.alive !== predAlive) aliveListener(predAlive = game.alive);
        if (gameRestart) restartPointListener(game.alive);

        const playerPositionX = Math.floor(game._viewArea.centerX / 15000 * 100);
        const playerPositionY = Math.floor(game._viewArea.centerY / 15000 * 100);
        Object.assign(playerPosition.style, {
            top: playerPositionY + "%",
            left: playerPositionX + "%"
        });
        let totalMass = 0;
        let totalCells = 0;
        playerCells = [];
        game._localPlayerCells.forEach(cell => {
            totalCells++;
            totalMass += cell.mass;
            playerCells.push(cell);
        });
        targetCells = [];
        game.cellMgr._updatedCells.forEach(cell => {
            if (cell.type === 0 && cell._player.index === selectedPlayerID) {
                targetCells.push(cell);
            }
        });
        totalMass = Math.round(totalMass);
        document.body.querySelector("#hud-mass")
            .innerText = `${totalMass}/${Math.floor(totalMass / 4)}/${Math.floor(totalMass / 8)}/${Math.floor(totalMass / 16)}`;
        const piecesElement = document.body.querySelector("#hud-pieces");
        piecesElement.innerText = totalCells;
        if (totalCells >= 16) {
            piecesElement.style.color = "#ff0000";
        } else {
            piecesElement.style.color = "#22ff00";
        }
        targetCells = [];
        game.cellMgr._updatedCells.forEach(cell => {
            try {
                if (cell.type === 0) {
                    let colorTint = 16383479;
                    if (!hideMod) {
                        colorTint = cell.id === selectedBallID ? getRainbowColor() : cell._player.index === selectedPlayerID ? getRainbowColor() : colorTint;
                    }
                    cell._nameText.tint = cell._nameText._tint = colorTint;
                    cell._nameText.style = {
                        dropShadow: true,
                        dropShadowColor: `#${colorTint.toString(16).padStart(6, '0')}`,
                        dropShadowDistance: 0,
                        dropShadowBlur: 10, // Увеличено для неонового эффекта
                        fill: `#${colorTint.toString(16).padStart(6, '0')}`,
                        stroke: `#${colorTint.toString(16).padStart(6, '0')}`,
                        strokeThickness: 4 // Толщина обводки для неонового эффекта
                    };
                    if (cell._player.index === selectedPlayerID) {
                        targetCells.push(cell);
                    }
                }
            } catch (error) {
                console.log(error);
            }
        });
        cellToSplit();
    }
}

function getRainbowColor() {
    const colors = [
        0xFF0000, // Красный
        0xFF7F00, // Оранжевый
        0xFFFF00, // Желтый
        0x00FF00, // Зеленый
        0x0000FF, // Синий
        0x4B0082, // Индиго
        0x8B00FF  // Фиолетовый
    ];

    const now = Date.now();
    const interval = 800; // Интервал в миллисекундах для смены цвета (800 миллисекунд)

    if (now - lastColorChangeTime >= interval) {
        colorIndex = (colorIndex + 1) % colors.length;
        lastColorChangeTime = now;
        currentColor = nextColor;
        nextColor = colors[colorIndex];
    }

    const progress = (now - lastColorChangeTime) / interval;
    return interpolateColor(currentColor, nextColor, progress);
}

function interpolateColor(color1, color2, factor) {
    const r1 = (color1 >> 16) & 0xFF;
    const g1 = (color1 >> 8) & 0xFF;
    const b1 = color1 & 0xFF;

    const r2 = (color2 >> 16) & 0xFF;
    const g2 = (color2 >> 8) & 0xFF;
    const b2 = color2 & 0xFF;

    const r = Math.round(r1 + factor * (r2 - r1));
    const g = Math.round(g1 + factor * (g2 - g1));
    const b = Math.round(b1 + factor * (b2 - b1));

    return (r << 16) | (g << 8) | b;
}

function cellToSplit() {
    globalBlob.game._localPlayerCells.forEach(cell => {
        if (colorIndicator) {
            cell.sprite._tint = 16711680;
        }
        if (adaptationIndicator) {
            cell._adaptationAura.visible = false;
        }
    });
    cellsToSplit = 0;
    if (globalBlob.game._localPlayerCells.length >= 16) {
        return;
    }
    for (let i = 0; i < globalBlob.game._localPlayerCells.length; i++) {
        if (globalBlob.game._localPlayerCells[i]._radius < 60) {
            continue;
        }
        if (!hideMod && colorIndicator) {
            globalBlob.game._localPlayerCells[i].sprite._tint = 1629990;
        }
        if (!hideMod && adaptationIndicator) {
            globalBlob.game._localPlayerCells[i]._adaptationAura.visible = true;
        }
        cellsToSplit++;
        if (cellsToSplit + globalBlob.game._localPlayerCells.length >= 16) {
            break;
        }
    }
}


let splitCheckInterval = null;
let splitCheckStopped = false;
let splitCheckMode = "";

function splitCheckStart(mode) {
    splitCheckStop();
    splitCheckMode = mode;
    splitCheckStopped = false;
    splitCheckInterval = setTimeout(function splitCheckFunction() {
        splitCheck();
        splitCheckInterval = setTimeout(splitCheckFunction, autoDivisionCheck);
    }, 0);
}

function splitCheckStop() {
    splitCheckMode = "";
    splitCheckStopped = true;
    clearTimeout(splitCheckInterval);
}

function splitCheck() {
    if (splitCheckStopped) {
        return;
    }
    let isSplitDetected = false;
    let playerCount = 0;
    globalBlob.game.cellMgr._updatedCells.forEach(cell => {
        if (cell.type === 0 && cell.mass > minMassForSplitCheck * 2 && cell._player.index === selectedPlayerID) {
            playerCount++;
            if (!isSplitDetected) {
                globalBlob.game.cellMgr._updatedCells.forEach(otherCell => {
                    if (otherCell.type === 0 && otherCell.mass > minMassForSplitCheck * 2 && otherCell._player.index === selectedPlayerID && otherCell.id !== cell.id) {
                        const x = cell.x - otherCell.x;
                        const y = cell.y - otherCell.y;
                        const distance = Math.sqrt(x * x + y * y);
                        if (distance < splitCheckDistance) {
                            isSplitDetected = true;
                        }
                    }
                });
            }
        }
    });
    if (isSplitDetected) {
        splitCheckStopped = true;
        setTimeout(() => {
            splitCheckStopped = false;
        }, 80);
        console.log("split detected");
        if (splitCheckMode === "teleport") {
            teleportEscape();
        } else if (splitCheckMode === "snowball") {
            protectWithSnowball();
        } else if (splitCheckMode === "adaptation") {
            adaptationIns();
        }
    }
}
let splitInterval = null;
let splitStopped = false;
let secondSplit = false;

function Start(action) {
    Stop();
    secondSplit = false;
    splitStopped = false;
    if (action === "") {
        splitInterval = setTimeout(function instabilityFunction() {
            handleInstability();
            splitInterval = setTimeout(instabilityFunction, instabilityAbsorbDivisionAbsorb);
        }, 0);
    } else if (action === "instability_double") {
        splitInterval = setTimeout(function instabilityDoubleFunction() {
            handleInstabilityDouble();
            splitInterval = setTimeout(instabilityDoubleFunction, instabilityAbsorbDivisionAbsorb);
        }, 0);
    } else if (action === "catch_split") {
        splitInterval = setTimeout(function onSplitFunction() {
            handleOnSplit();
            splitInterval = setTimeout(onSplitFunction, instabilityAbsorbDivisionAbsorb);
        }, 0);
    }
}

function Stop() {
    selectedInstabilityTargetPlayerID = 0;
    sendInputBlock = false;
    splitStopped = true;
    clearTimeout(splitInterval);
}
let selectedInstabilityTargetPlayerID = 0;

function handleInstability() {
    const minMass = 125;
    if (splitStopped) {
        return;
    }
    if (selectedInstabilityTargetPlayerID > 0) {
        let maxMass = 0;
        let totalMass = 0;
        globalBlob.game.cellMgr._updatedCells.forEach(cell => {
            if (cell.type === 0 && cell._player.index === selectedInstabilityTargetPlayerID) {
                if (cell.mass > maxMass) {
                    maxMass = cell.mass;
                }
                totalMass += cell.mass;
            }
        });
        if (maxMass > minMassForInstabilityCell && totalMass >= minMassForInstability) {
            const targetCells = [];
            globalBlob.game._localPlayerCells.forEach(playerCell => {
                if (maxMass * 2 * 1.1445 < playerCell.mass) {
                    globalBlob.game.cellMgr._updatedCells.forEach(targetCell => {
                        if (targetCell.mass < minMass) {
                            return;
                        }
                        if (targetCell.type === 0 && targetCell._player.index === selectedInstabilityTargetPlayerID) {
                            targetCells.push({
                                x1: playerCell.x,
                                y1: playerCell.y,
                                r1: playerCell._radius,
                                x2: targetCell.x,
                                y2: targetCell.y,
                                r2: targetCell._radius
                            });
                        }
                    });
                }
            });
            if (targetCells.length >= 1 && targetCells.length <= 5) {
                let bestIndex = 0;
                let bestDistance = Infinity;
                for (let i = 0; i < targetCells.length; i++) {
                    let totalDistance = 0;
                    for (let j = 0; j < targetCells.length; j++) {
                        if (i !== j) {
                            const dx = targetCells[i].x2 - targetCells[j].x2;
                            const dy = targetCells[i].y2 - targetCells[j].y2;
                            totalDistance += Math.sqrt(dx * dx + dy * dy);
                        }
                    }
                    const averageDistance = totalDistance / (targetCells.length - 1);
                    if (averageDistance < bestDistance) {
                        bestDistance = averageDistance;
                        bestIndex = i;
                    }
                }
                const targetX = targetCells[bestIndex].x2;
                const targetY = targetCells[bestIndex].y2;
                const deltaX = targetX - targetCells[0].x1;
                const deltaY = targetY - targetCells[0].y1;
                const angle = Math.atan2(deltaX, deltaY);
                const destinationX = targetX + Math.sin(angle) * 99999;
                const destinationY = targetY + Math.cos(angle) * 99999;
                sendInputBlock = true;
                globalBlob.game._client.buffer.writeUInt8(1);
                globalBlob.game._client.buffer.writeFloat(destinationX - globalBlob.game._viewArea.centerX);
                globalBlob.game._client.buffer.writeFloat(destinationY - globalBlob.game._viewArea.centerY);
                globalBlob.game._client.buffer.writeUInt8(2);
                setTimeout(() => {
                    sendInputBlock = false;
                }, 150);
                splitStopped = true;
                selectedInstabilityTargetPlayerID = 0;
                console.log("");
            } else {
                selectedInstabilityTargetPlayerID = 0;
            }
        }
    }
}

function handleInstabilityDouble() {
    const minMass = 250;
    if (splitStopped) {
        return;
    }
    let targetPlayerIndex = 0;
    let maxMass = 0;
    globalBlob.game.cellMgr._updatedCells.forEach(cell => {
        if (cell.type === 0 && (!forceTargetSelection || cell._player.index === selectedPlayerID) && cell._player.index !== globalBlob.game._localPlayerIndex && cell.mass > maxMass) {
            maxMass = cell.mass;
            targetPlayerIndex = cell._player.index;
        }
    });
    if (targetPlayerIndex > 0 && maxMass > minMassForInstabilityDouble) {
        const targetCells = [];
        globalBlob.game._localPlayerCells.forEach(playerCell => {
            if ((!secondSplit && maxMass * 4 * 1.303592120625 < playerCell.mass) || (secondSplit && maxMass * 2 * 1.303592120625 < playerCell.mass)) {
                globalBlob.game.cellMgr._updatedCells.forEach(targetCell => {
                    if (targetCell.mass < minMass) {
                        return;
                    }
                    if (targetCell.type === 0 && targetCell._player.index === targetPlayerIndex) {
                        targetCells.push({
                            x1: playerCell.x,
                            y1: playerCell.y,
                            r1: playerCell._radius,
                            x2: targetCell.x,
                            y2: targetCell.y,
                            r2: targetCell._radius
                        });
                    }
                });
            }
        });
        if (targetCells.length >= 1) {
            let bestIndex = 0;
            let bestDistance = Infinity;
            for (let i = 0; i < targetCells.length; i++) {
                let totalDistance = 0;
                for (let j = 0; j < targetCells.length; j++) {
                    if (i !== j) {
                        const dx = targetCells[i].x2 - targetCells[j].x2;
                        const dy = targetCells[i].y2 - targetCells[j].y2;
                        totalDistance += Math.sqrt(dx * dx + dy * dy);
                    }
                }
                const averageDistance = totalDistance / (targetCells.length - 1);
                if (averageDistance < bestDistance) {
                    bestDistance = averageDistance;
                    bestIndex = i;
                }
            }
            const targetX = targetCells[bestIndex].x2;
            const targetY = targetCells[bestIndex].y2;
            const deltaX = targetX - targetCells[bestIndex].x1;
            const deltaY = targetY - targetCells[bestIndex].y1;
            const angle = Math.atan2(deltaX, deltaY);
            const destinationX = targetCells[bestIndex].x1 + Math.sin(angle) * 99999;
            const destinationY = targetCells[bestIndex].y1 + Math.cos(angle) * 99999;
            sendInputBlock = true;
            globalBlob.game._client.buffer.writeUInt8(1);
            globalBlob.game._client.buffer.writeFloat(destinationX - globalBlob.game._viewArea.centerX);
            globalBlob.game._client.buffer.writeFloat(destinationY - globalBlob.game._viewArea.centerY);
            globalBlob.game._client.buffer.writeUInt8(2);
            splitStopped = true;
            if (instabilityDoubleMode === 1) {
                if (!secondSplit) {
                    setTimeout(() => {
                        secondSplit = true;
                        splitStopped = false;
                    }, 100);
                } else {
                    setTimeout(() => {
                        sendInputBlock = false;
                    }, 100);
                }
            } else if (instabilityDoubleMode === 1) {
                setTimeout(() => {
                    globalBlob.game._client.buffer.writeUInt8(2);
                }, 100);
            }
        }
    }
}

function handleOnSplit() {
    const minMass = 150;
    if (splitStopped) {
        return;
    }
    let targetPlayerIndex = 0;
    let maxMass = 0;
    globalBlob.game.cellMgr._updatedCells.forEach(cell => {
        if (cell.type === 0 && (!forceTargetSelectionOnSplit || cell._player.index === selectedPlayerID) && cell._player.index !== globalBlob.game._localPlayerIndex && cell.mass > maxMass) {
            maxMass = cell.mass;
            targetPlayerIndex = cell._player.index;
        }
    });
    if (targetPlayerIndex > 0 && maxMass > minMassForInstabilityOnSplit) {
        const targetCells = [];
        globalBlob.game._localPlayerCells.forEach(playerCell => {
            if (maxMass * 2 * 1.1445 < playerCell.mass) {
                globalBlob.game.cellMgr._updatedCells.forEach(targetCell => {
                    if (targetCell.mass < minMass) {
                        return;
                    }
                    if (targetCell.type === 0 && targetCell._player.index === targetPlayerIndex) {
                        targetCells.push({
                            x1: playerCell.x,
                            y1: playerCell.y,
                            r1: playerCell._radius,
                            x2: targetCell.x,
                            y2: targetCell.y,
                            r2: targetCell._radius
                        });
                    }
                });
            }
        });
        if (targetCells.length > 0) {
            let bestIndex = 0;
            let bestDistance = Infinity;
            for (let i = 0; i < targetCells.length; i++) {
                let totalDistance = 0;
                for (let j = 0; j < targetCells.length; j++) {
                    if (i !== j) {
                        const dx = targetCells[i].x2 - targetCells[j].x2;
                        const dy = targetCells[i].y2 - targetCells[j].y2;
                        totalDistance += Math.sqrt(dx * dx + dy * dy);
                    }
                }
                const averageDistance = totalDistance / (targetCells.length - 1);
                if (averageDistance < bestDistance) {
                    bestDistance = averageDistance;
                    bestIndex = i;
                }
            }
            const targetX = targetCells[bestIndex].x2;
            const targetY = targetCells[bestIndex].y2;
            const deltaX = targetX - targetCells[0].x1;
            const deltaY = targetY - targetCells[0].y1;
            const angle = Math.atan2(deltaX, deltaY);
            const destinationX = targetX + Math.sin(angle) * 99999;
            const destinationY = targetY + Math.cos(angle) * 99999;
            sendInputBlock = true;
            globalBlob.game._client.buffer.writeUInt8(1);
            globalBlob.game._client.buffer.writeFloat(destinationX - globalBlob.game._viewArea.centerX);
            globalBlob.game._client.buffer.writeFloat(destinationY - globalBlob.game._viewArea.centerY);
            globalBlob.game._client.buffer.writeUInt8(2);
            setTimeout(() => {
                sendInputBlock = false;
                handleOnSplit();
            }, 150);
            splitStopped = true;
        }
    }
}

function adaptationIns() {
    if (adaptationInsActive) {
        return;
    }
    globalBlob.game.useSkill("adaptation");
    globalBlob.game.useSkill("instability");
    adaptationInsActive = true;
    setTimeout(() => {
        adaptationInsActive = false;
    }, 1000);
}

function teleportEscape() {
    if (teleportationEscape) {
        return;
    }
    globalBlob.game.useSkill("teleport");
    teleportationEscape = true;
    setTimeout(() => {
        teleportationEscape = false;
    }, 1000);
}

function protectWithSnowball() {
    const minMass = 150;
    if (protectingSnowball) {
        return;
    }
    let closestDistance = 6000000;
    let closestCells = {};
    globalBlob.game._localPlayerCells.forEach(playerCell => {
        globalBlob.game.cellMgr._updatedCells.forEach(targetCell => {
            if (targetCell.mass < minMass) {
                return;
            }
            if (targetCell.type === 0 && targetCell._player.index === selectedPlayerID) {
                const dx = playerCell.x - targetCell.x;
                const dy = playerCell.y - targetCell.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < closestDistance) {
                    closestDistance = distance;
                    closestCells = {
                        x1: playerCell.x,
                        y1: playerCell.y,
                        r1: playerCell._radius,
                        x2: targetCell.x,
                        y2: targetCell.y,
                        r2: targetCell._radius
                    };
                }
            }
        });
    });
    sendInputBlock = true;
    globalBlob.game._client.buffer.writeUInt8(1);
    globalBlob.game._client.buffer.writeFloat(closestCells.x2 - globalBlob.game._viewArea.centerX);
    globalBlob.game._client.buffer.writeFloat(closestCells.y2 - globalBlob.game._viewArea.centerY);
    globalBlob.game.useSkill("snowball");
    protectingSnowball = true;
    setTimeout(() => {
        protectingSnowball = false;
    }, 1000);
    setTimeout(() => {
        sendInputBlock = false;
    }, 200);
}

function fastUnite() {
    const totalCells = globalBlob.game._localPlayerCells.length;
    if (!fastUniteBlock) {
        if (totalCells === 1) {
            const scaleX = globalBlob.game._camera.scale.x;
            const mouse = globalBlob.game.app.renderer.plugins.interaction.mouse.global;
            const x = (mouse.x - globalBlob.game.app.renderer.width / 2) / scaleX;
            const y = (mouse.y - globalBlob.game.app.renderer.height / 2) / scaleX;
            globalBlob.game._client.buffer.writeUInt8(1);
            globalBlob.game._client.buffer.writeFloat(x);
            globalBlob.game._client.buffer.writeFloat(y);
            globalBlob.game._client.buffer.writeUInt8(2);
            clearTimeout(fastUniteInterval);
            sendInputBlock = false;
            fastUniteBlock = true;
            setTimeout(() => {
                fastUniteBlock = false;
            }, 1000);
        } else if (totalCells === 2) {
            sendInputBlock = true;
            const dx = globalBlob.game._localPlayerCells[1].x - globalBlob.game._localPlayerCells[0].x;
            const dy = globalBlob.game._localPlayerCells[1].y - globalBlob.game._localPlayerCells[0].y;
            const distance = Math.sqrt(dx * dx + dy * dy) / 2;
            const angle = Math.atan2(dx, dy);
            let targetX = globalBlob.game._localPlayerCells[0].x + Math.sin(angle) * distance;
            let targetY = globalBlob.game._localPlayerCells[0].y + Math.cos(angle) * distance;
            targetX = targetX - globalBlob.game._viewArea.centerX;
            targetY = targetY - globalBlob.game._viewArea.centerY;
            globalBlob.game._client.buffer.writeUInt8(1);
            globalBlob.game._client.buffer.writeFloat(targetX);
            globalBlob.game._client.buffer.writeFloat(targetY);
        }
    }
}
let freeze = false;
let freezeTimer = null;
let freezeTimeDelay = 60;
let cordsSwitch = false;

function freezeFunc() {
    let angle = 0;
    const maxRadius = 90000000000;
    const centerX = 0;
    const centerY = 0;
    const increment = 0.1;
    freezeTimer = setInterval(() => {
        angle += increment;
        const targetX = centerX + maxRadius * Math.cos(angle);
        const targetY = centerY + maxRadius * Math.sin(angle);
        globalBlob.game._client.buffer.writeUInt8(1);
        globalBlob.game._client.buffer.writeFloat(targetX);
        globalBlob.game._client.buffer.writeFloat(targetY);
    }, 50);
}

let teleportCoordinates = [7500, 7500];

function teleportPlayer() {
    const currentCoordinates = [globalBlob.game._viewArea.centerX, globalBlob.game._viewArea.centerY];
    const xPercent = Math.floor(currentCoordinates[0] / 15000 * 100);
    const yPercent = Math.floor(currentCoordinates[1] / 15000 * 100);
    let teleportMarker = document.getElementById('teleportPosition');
    if (!teleportMarker) {
        teleportMarker = document.createElement('div');
        teleportMarker.id = 'teleportPosition';
        document.body.appendChild(teleportMarker);
    }
    teleportMarker.style.display = 'block';
    teleportMarker.style.top = yPercent + '%';
    teleportMarker.style.left = xPercent + '%';
}

function playingListener(isPlaying) {
    globalInGame = isPlaying;
    if (isPlaying) {
        document.body.querySelector("#mod-hud").style.display = "block";
        document.body.querySelector("#mod-map").style.display = "block";
    } else {
        document.body.querySelector("#mod-hud").style.display = "none";
        document.body.querySelector("#mod-map").style.display = "none";
    }
}

function aliveListener(isAlive) {
    globalAlive = isAlive;
    if (isAlive) {
        playerPosition.style.display = "block";
    } else {
        deathCoordinates = [globalBlob.game._viewArea.centerX, globalBlob.game._viewArea.centerY];
        const xPercent = Math.floor(deathCoordinates[0] / 15000 * 100);
        const yPercent = Math.floor(deathCoordinates[1] / 15000 * 100);
        deadPosition.style.top = yPercent + "%";
        deadPosition.style.left = xPercent + "%";
        deadPosition.style.display = "block";
    }
}

function restartPointListener(isAlive) {
    globalAlive = isAlive;
    if (isAlive) {
        playerPosition.style.display = "block";
    } else {
        const xPercent = Math.floor(restartCoordinates[0] / 15000 * 100);
        const yPercent = Math.floor(restartCoordinates[1] / 15000 * 100);
        restartPointPosition.style.top = yPercent + "%";
        restartPointPosition.style.left = xPercent + "%";
        restartPointPosition.style.display = "block";
    }
}

document.addEventListener('keydown', function (event) {
    if (event.keyCode === 81) {
        teleportPlayer();
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const checkGlobalBlobInterval = setInterval(() => {
        if (typeof globalBlob !== 'undefined' && globalBlob.game && globalBlob.game._players) {
            clearInterval(checkGlobalBlobInterval);
            startPlayerTracking();
        }
    }, 1000); // Проверять каждые 1000 миллисекунд
});

function showNotification(message) {
    const notificationContainer = document.getElementById('notification-container');
    const notification = document.createElement('div');
    notification.className = 'player-notification';
    notification.textContent = message;
    notificationContainer.appendChild(notification);

    setTimeout(() => {
        notification.style.opacity = '0';

        setTimeout(() => {
            notification.remove();
        }, 500); // Удаление после исчезновения
    }, 5000); // Уведомление исчезнет через 5 секунд
}

function findNewElement(oldArray, newArray) {
    for (let newItem of newArray) {
        if (!oldArray.includes(newItem)) {
            return newItem;
        }
    }
    return null;
}

function findRemovedElements(oldArray, newArray) {
    let removedElements = [];

    for (let oldItem of oldArray) {
        if (!newArray.includes(oldItem)) {
            removedElements.push(oldItem);
        }
    }

    return removedElements;
}

function panel_notifications() {
    let previousPlayers = [];

    const intervalId = setInterval(() => {
        let currentPlayers = globalBlob.game._players;

        let newPlayer = findNewElement(previousPlayers, currentPlayers);

        if (newPlayer) {
            showNotification(`Игрок "${newPlayer.name}" присоединился(ась) на сервер`);
        }

        let removedPlayers = findRemovedElements(previousPlayers, currentPlayers);

        if (removedPlayers.length > 0 && removedPlayers[0] != undefined || null) {
            showNotification(`Игрок "${removedPlayers[0].name}" покинул(а) сервер`);
        }

        previousPlayers = [...currentPlayers];
    }, 1000);

    return intervalId;
}

let trackingIntervalId;
let isTrackingEnabled = true;

function startPlayerTracking() {
    trackingIntervalId = panel_notifications();
    console.log("Отслеживание игроков начато");
    showNotification("Панель уведомлений включена");
}

function togglePlayerTracking() {
    if (isTrackingEnabled) {
        clearInterval(trackingIntervalId);
        console.log("Отслеживание игроков остановлено");
        showNotification("Панель уведомлений выключена");
    } else {
        trackingIntervalId = panel_notifications();
        console.log("Отслеживание игроков начато");
        showNotification("Панель уведомлений включена");
    }
    isTrackingEnabled = !isTrackingEnabled;
}

document.addEventListener("keydown", (event) => {
    if (event.code === panel_notificati_ons) {
        togglePlayerTracking();
    }
});

function tabMenuSwitch() {
    const tabMenu = document.body.querySelector("#mod-tab");
    if (tabMenu.style.display !== "flex") {
        if (!globalInGame) {
            return;
        }
        zoomOff = true;
        const players = globalBlob.game._players;
        let playerListHTML = "\n\t\t\t<colgroup>\n\t\t\t\t<col style=\"width:10%\">\n\t\t\t\t<col style=\"width:30%\">\n\t\t\t\t<col style=\"width:20%\">\n\t\t\t\t<col style=\"width:10%\">\n                <col style=\"width:15%\">\n\t\t\t</colgroup>\n\t\t\t";
        const colorArray = [6600190, 16751655, 13576414, 3853055, 1629990, 16572672, 14620710, 16744005, 12607231, 1630103, 16730031, 7956479];
        let playerCount = 0;
        let vipCount = 0;
        players.forEach(player => {
            if (player !== null && player !== undefined) {
                let playerColor = colorArray[player.color];
                if (typeof playerColor === "undefined") {
                    playerColor = arrRandEl(colorArray);
                }
                const colorHex = (playerColor + Math.pow(16, 6))
                    .toString(16)
                    .substr(-6);
                let skinLink = "";
                if (player.skin !== null) {
                    try {
                        const skinURL = getSkinUrl(player.skin);
                        if (skinURL === null) {
                            throw player.skin + " skin url null";
                        }
                        skinLink = `<a href="https://96011.selcdn.ru${skinURL}" target="_blank">${player.skin}</a>`;
                    } catch (error) {
                        console.log(error);
                        skinLink = player.skin;
                    }
                } else {
                    skinLink = "no";
                }
                playerCount++;
                let vipStatus = "-";
                console.log(player.isVip)
                if (player.isVip) {
                    vipStatus = "+";
                    vipCount++;
                }
                playerListHTML += `\n\t\t\t<tr style="color:#${colorHex}">\n\t\t\t<td>${player.index}</td>\n\t\t\t<td><span class="tab-player-name">${player.name}</span></td>\n\t\t\t<td>${skinLink}</td>\n\t\t\t<td><b>${vipStatus}</b></td>\n\t\t\t<td><button class="target-button" data-player-id="${player.index}"></button></td>\n\t\t\t</tr>`;
            }
        });
        document.getElementById("onlinePlayers")
            .innerText = playerCount;
        document.getElementById("onlineVipPlayers")
            .innerText = vipCount;
        document.getElementById("tab-menu-table")
            .innerHTML = playerListHTML;
        Array.from(document.getElementById("tab-menu-table")
            .getElementsByClassName("target-button"))
            .forEach(button => {
                button.addEventListener("click", event => {
                    const targetButton = event.target;
                    const targetPlayerID = Number(targetButton.dataset.playerId);
                    console.log(`Player ${targetPlayerID} selected as target.`);
                    if (selectedPlayerID !== null) {
                        const prevButton = document.querySelector(`button[data-player-id="${selectedPlayerID}"]`);
                        if (prevButton) {
                            prevButton.style.backgroundColor = "#979fd1";
                            prevButton.style.color = "#bd282e";
                        }
                    }
                    if (selectedPlayerID === targetPlayerID) {
                        selectedPlayerID = null;
                    } else {
                        targetButton.style.backgroundColor = "#bd282e";
                        targetButton.style.color = "#979fd1";
                        selectedPlayerID = targetPlayerID;
                    }
                });
                if (selectedPlayerID !== null && selectedPlayerID === Number(button.dataset.playerId)) {
                    button.style.backgroundColor = "#bd282e";
                    button.style.color = "#979fd1";
                }
            });
        if (players.length) {
            tabMenu.style.display = "flex";
        }
    } else {
        zoomOff = false;
        tabMenu.style.display = "none";
    }
}

function gameRestartFunc() {
    if (!gameRestart) {
        gameRestart = true;
        try {
            restartCoordinates = [globalBlob.game._viewArea.centerX, globalBlob.game._viewArea.centerY];
            globalBlob.game.leaveRoom();
        } catch (error) {
            console.error(error);
        }
        let playInterval = setInterval(() => {
            const playButton = document.querySelector("div.button-play");
            if (playButton !== null) {
                playButton.click();
                console.log("game restarted");
                clearInterval(playInterval);
            }
        }, restartDelay1);
        setTimeout(() => {
            clearInterval(playInterval);
            gameRestart = false;
        }, restartDelay2);
    }
}

function getSkinUrl(url) {
    try {
        return globalSkinsGetter(`./${url}.png`);
    } catch (error) {
        console.error(error);
    }
    try {
        return globalSkinsGetter(`./${url}.gif`);
    } catch (error) {
        console.error(error);
    }
    return null;
}

function arrRandEl(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

function notMerge() {
    const scaleX = globalBlob.game._camera.scale.x;
    const mouse = globalBlob.game.app.renderer.plugins.interaction.mouse.global;
    const x = (mouse.x - globalBlob.game.app.renderer.width / 2) / scaleX;
    const y = (mouse.y - globalBlob.game.app.renderer.height / 2) / scaleX;
    const atan = Math.atan2(x, y);
    globalBlob.game._client.buffer.writeUInt8(1);
    globalBlob.game._client.buffer.writeFloat(Math.sin(atan) * 9999999999);
    globalBlob.game._client.buffer.writeFloat(Math.cos(atan) * 9999999999);
}
// код бота для приема массы, и фарма монет
/*



let VIRUS_RADIUS = 2000; // Радиус вокруг вируса для избегания


// Функция для вычисления дистанции между клетками
function calculateDistance(x1, y1, x2, y2) {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

// Автоматический расчет порога массы
function getTotalMass(localCells) {
  return localCells.reduce((sum, cell) => sum + cell.mass, 0);
}

// Функция для выполнения клика при достижении массы
function checkMassDrop() {
  const totalMass = getTotalMass(globalBlob.game._localPlayerCells);

  if (totalMass >= MASS_THRESHOLD && !hasJoinedServer) {
    hasJoinedServer = true;
    autoJoinServer();
  }
}

// Функция для присоединения к серверу (клик)
function autoJoinServer() {
  // Здесь нужно выполнить действия, чтобы присоединиться к серверу, например:
  // Имитируем клик на кнопку или активацию событий игры.
  console.log("Бот присоединился к серверу!");
  // Эмулируем клик или команду:
  // Например, globalBlob.game.socket.send("join"); или другие действия, в зависимости от реализации.
}

// Игнорируем пеллеты
function ignorePellets() {
  if (globalBlob && globalBlob.game && globalBlob.game.cellMgr) {
    globalBlob.game.cellMgr._updatedCells.forEach(cell => {
      if (cell.type === 1) {
        const distance = calculateDistance(globalBlob.x, globalBlob.y, cell.x, cell.y);
        if (distance < THREAT_DISTANCE) {
          // Бот не будет двигаться к пеллетам
          return true;
        }
      }
    });
  }
  return false;
}

// Функция для определения угрозы от вируса
function avoidViruses() {
  if (globalBlob && globalBlob.game && globalBlob.game.cellMgr) {
    globalBlob.game.cellMgr._updatedCells.forEach(cell => {
      if (cell.type === 2) {
        const distance = calculateDistance(globalBlob.x, globalBlob.y, cell.x, cell.y);
        if (distance < VIRUS_RADIUS) {
          // Бот избегает вируса, двигаясь в противоположную сторону
          const directionX = globalBlob.x - cell.x;
          const directionY = globalBlob.y - cell.y;
          moveBot(globalBlob, globalBlob.x + directionX, globalBlob.y + directionY);
          console.log('Avoiding virus');
        }
      }
    });
  }
}

// Функция для вычисления угрозы от игроков с большей массой
function avoidLargerPlayers() {
  if (globalBlob && globalBlob.game && globalBlob.game.cellMgr) {
    globalBlob.game.cellMgr._updatedCells.forEach(cell => {
      // Проверяем, существует ли объект player
      if (cell.type === 0 && cell._player && cell._player.index !== globalBlob._player.index) {
        const distance = calculateDistance(globalBlob.x, globalBlob.y, cell.x, cell.y);
        if (cell.mass > globalBlob.mass && distance < THREAT_DISTANCE) {
          // Бот избегает более крупных игроков
          const directionX = globalBlob.x - cell.x;
          const directionY = globalBlob.y - cell.y;
          moveBot(globalBlob, globalBlob.x + directionX, globalBlob.y + directionY);
          console.log('Avoiding larger player');
        }
      }
    });
  }
}

// Плавное движение к шара
function moveBot(bot, targetX, targetY) {
  if (!bot) return;

  const deltaX = targetX - bot.x;
  const deltaY = targetY - bot.y;
  const distance = calculateDistance(bot.x, bot.y, targetX, targetY);

  // Двигаемся плавно
  if (distance > 1) {
    const directionX = deltaX / distance;
    const directionY = deltaY / distance;
    const velocity = { x: directionX * DISTANCE_TO_MOVE, y: directionY * DISTANCE_TO_MOVE };

    const velocityMagnitude = Math.sqrt(velocity.x ** 2 + velocity.y ** 2);
    if (velocityMagnitude > DISTANCE_TO_MOVE) {
      velocity.x *= DISTANCE_TO_MOVE / velocityMagnitude;
      velocity.y *= DISTANCE_TO_MOVE / velocityMagnitude;
    }

    // Отправляем команду на движение клетки
    globalBlob.game._client.buffer.writeUInt8(1);
    globalBlob.game._client.buffer.writeFloat(Math.sin(Math.atan2(velocity.y, velocity.x)) * DISTANCE_TO_MOVE);
    globalBlob.game._client.buffer.writeFloat(Math.cos(Math.atan2(velocity.y, velocity.x)) * DISTANCE_TO_MOVE);
  }
}

// Функция для обновления целевых шаров (выбор цели)
function updateTargetCells() {
  selectedTargetCells = []; // Очистим предыдущие цели

  if (globalBlob && globalBlob.game && globalBlob.game.cellMgr) {
    // Ищем клетки, которые могут быть целями
    globalBlob.game.cellMgr._updatedCells.forEach(cell => {
      if (cell.type === 0) {
        const distance = calculateDistance(globalBlob.x, globalBlob.y, cell.x, cell.y);
        if (distance < THREAT_DISTANCE) {
          selectedTargetCells.push(cell); // Добавляем цель, если она находится в радиусе
        }
      }
    });
  }
}

// Главная функция бота (MPC)
function MPC() {
  if (!globalBlob || !globalBlob.game || !globalBlob.game._localPlayerCells || !globalBlob.game.cellMgr) return;

  const totalMass = getTotalMass(globalBlob.game._localPlayerCells);

  // Проверяем, если масса достигла порога, выполняем действия
  checkMassDrop();

  if (totalMass > 15000 && !hasJoinedServer) {
    hasJoinedServer = true;
    autoJoinServer();
  } else {
    updateTargetCells();

    if (selectedTargetCells.length > 0) {
      followingTarget = true;
    } else {
      followingTarget = false;
    }

    if (!followingTarget) {
      // Игнорируем пеллеты, избегаем вирусов и более крупных игроков
      ignorePellets();
      avoidViruses();
      avoidLargerPlayers();
    }
  }
}

// Включение/выключение бота
function toggleEnabled() {
  if (!enabled) {
    enabled = true;
    intervalId = setInterval(MPC, 100);
  } else {
    enabled = false;
    clearInterval(intervalId);
  }
}
*/


//БОТ КОТОРЫЙ ВЛИВАЕТ В ВЫДЕЛЕНОГО


function freezeFunc1() {
    if (freezeTimer1) {
        clearTimeout(freezeTimer1);
    }
    freeze1 = true;
    freezeTimer1 = setTimeout(function run() {
        if (cordsSwitch1) {
            cordsSwitch1 = false;
            globalBlob.game._client.buffer.writeUInt8(1);
            globalBlob.game._client.buffer.writeFloat(-9000000);
            globalBlob.game._client.buffer.writeFloat(0);
        } else {
            cordsSwitch1 = true;
            globalBlob.game._client.buffer.writeUInt8(1);
            globalBlob.game._client.buffer.writeFloat(9000000);
            globalBlob.game._client.buffer.writeFloat(0);
        }
        freezeTimer1 = setTimeout(run, freezeTimeDelay1);
    }, freezeTimeDelay1);
}

let targetCommandTimeout = null;


function toggleMassDecayAura() {
    isAuraEnabled = !isAuraEnabled;

    globalBlob.game.cellMgr._updatedCells.forEach(cell => {
        if (cell._massDecayAura) {
            cell.massDecayAura = isAuraEnabled;
        }
    });
}

function updateMassDecayAuraForNewCells() {
    if (isAuraEnabled) {
        globalBlob.game.cellMgr._updatedCells.forEach(cell => {
            if (cell._massDecayAura && !cell.massDecayAura) {
                cell.massDecayAura = true;
            }
        });
    }
}


setInterval(updateMassDecayAuraForNewCells, 100);

document.addEventListener("keydown", function (event) {
    if (event.code === DOUBLE_SPLIT && !doubleSplit) {
        doubleSplit = true;
        globalBlob.game._client.buffer.writeUInt8(2);

        setTimeout(function () {
            globalBlob.game._client.buffer.writeUInt8(2);

            setTimeout(function () {
                doubleSplit = false;
            }, 80);
        }, 100);
    } else if (event.code === FULL_SPLIT && !fullSplit) {
        fullSplit = true;
        globalBlob.game._client.buffer.writeUInt8(2);

        setTimeout(function () {
            globalBlob.game._client.buffer.writeUInt8(2);

            setTimeout(function () {
                globalBlob.game._client.buffer.writeUInt8(2);

                setTimeout(function () {
                    globalBlob.game._client.buffer.writeUInt8(2);

                    setTimeout(function () {
                        fullSplit = false;
                    }, 80);
                }, 100);
            }, 100);
        }, 100);
    } else if (event.code === ADAPTATION_INSTABILLITY && !doubleSplit) {
        doubleSplit = true;
        globalBlob.game._client.buffer.writeUInt8(2);

        setTimeout(function () {
            globalBlob.game._client.buffer.writeUInt8(2);

            setTimeout(function () {
                globalBlob.game.useSkill("adaptation");
                globalBlob.game.useSkill("instability");

                setTimeout(function () {
                    doubleSplit = false;
                }, 150);
            }, 100);
        }, 100);
    } else if (event.code === ADAPTATION_TELEPORT && !adaptationTeleport) {
        adaptationTeleport = true;
        globalBlob.game.useSkill("adaptation");

        setTimeout(function () {
            globalBlob.game.useSkill("teleport");

            setTimeout(function () {
                adaptationTeleport = false;
            }, 50);
        }, 50);
    } else if (event.code === ADAPTATION_SNOWBALL && !adaptationSnowball) {
        adaptationSnowball = true;
        globalBlob.game.useSkill("adaptation");

        setTimeout(function () {
            globalBlob.game.useSkill("snowball");

            setTimeout(function () {
                adaptationSnowball = false;
            }, 50);
        }, 50);
    } else if (event.code === botMPCKey) {
        toggleBotMode();
    } else if (event.code === TOGGLE_AURA_KEY) {
        toggleMassDecayAura();
    } else if (event.code === mainUserModeKey) {
        toggleMainUserMode();
    }
});

//НЕ ЗАКОНЧЕНЫЙ ПРОЭКТ ПО СТАТИСТИКЕ СЕСИИ

(function () {
    let panelVisible = false;
    let top3TimerInterval;
    let aliveTimerInterval;
    let startTop3Time = 0;
    let startAliveTime = 0;
    let elapsedTop3Time = 0;
    let elapsedAliveTime = 0;
    let isTop3TimerRunning = false;
    let isAliveTimerRunning = false;
    let maxMass = 0;

    function toggleStatsPanel(event) {
        if (event.key === 'Alt' || event.code === 'AltLeft' || event.code === 'AltRight') {
            const statsContainer = document.getElementById('statsContainer');
            if (globalInGame && globalAlive) {
                if (!panelVisible) {
                    statsContainer.style.display = 'block';
                    panelVisible = true;

                    const game = globalBlob && globalBlob.game;
                    const playerNick = game && game._players && game._players[game._localPlayerIndex] && game._players[game._localPlayerIndex].name;
                    const currentPlayer = game._players[game._localPlayerIndex];

                    if (currentPlayer && currentPlayer.skin) {
                        const skinURL = getSkinUrl(currentPlayer.skin);
                        if (skinURL !== null) {
                            document.getElementById('playerSkin').src = `https://96011.selcdn.ru${skinURL}`;
                        } else {
                            document.getElementById('playerSkin').src = '';
                        }
                    } else {
                        document.getElementById('playerSkin').src = '';
                    }

                    document.getElementById('playerNick').textContent = playerNick;

                    // Устанавливаем начальное состояние
                    resetToDefaultState();

                } else {
                    statsContainer.style.display = 'none';
                    panelVisible = false;

                    // Возвращаемся к состоянию по умолчанию при закрытии панели
                    resetToDefaultState();
                }
            }
        }

        const exitButton = document.getElementById('exitButton');
        if (exitButton) {
            exitButton.addEventListener('click', function () {
                globalBlob.game.leaveRoom();
            });
        }

        document.querySelectorAll('#PlayersButton, #SetingButton, #InfoButton').forEach(button => {
            button.addEventListener('click', () => {
                // Убираем подсветку с других кнопок
                document.querySelectorAll('#PlayersButton, #SetingButton, #InfoButton').forEach(btn => {
                    if (btn !== button) {
                        btn.classList.remove('highlighted');
                    }
                });

                // Переключаем подсветку на нажатой кнопке
                if (button.classList.contains('highlighted')) {
                    button.classList.remove('highlighted');
                } else {
                    button.classList.add('highlighted');
                }

                // Скрываем все заголовки и элементы
                const allElementsToHide = [
                    'playerSkin',
                    'OnlineStat',
                    'RoomStat',
                    'PelletEat',
                    'EatVirus',
                    'MvpCoinsRez',
                    'CoinsRez',
                    'aliveTimerElement',
                    'maxMassElement',
                    'timerElement',
                    'playerNick',
                    'statsTitle',
                    'gameOptionsTitle',
                    'playerInfoTitle',
                    'PlayersInfo'  // Добавляем сюда наш новый див
                ];

                allElementsToHide.forEach(id => {
                    const element = document.getElementById(id);
                    if (element) {
                        element.style.visibility = 'hidden';
                        element.style.display = 'none'; // Скрываем элементы
                    }
                });

                // Логика показа заголовков и элементов в зависимости от кнопки
                if (button.id === 'SetingButton') {
                    document.getElementById('gameOptionsTitle').style.visibility = 'visible';
                } else if (button.id === 'PlayersButton') {
                    document.getElementById('playerInfoTitle').style.visibility = 'visible';
                    document.getElementById('PlayersInfo').style.display = 'block';  // Показываем новый див
                    document.getElementById('PlayersInfo').style.visibility = 'visible';  // Убеждаемся, что элемент виден
                    updatePlayersInfo(); // Обновляем список игроков при открытии
                } else if (button.id === 'InfoButton') {
                    const elementsToShow = [
                        'playerSkin',
                        'OnlineStat',
                        'RoomStat',
                        'PelletEat',
                        'EatVirus',
                        'MvpCoinsRez',
                        'CoinsRez',
                        'aliveTimerElement',
                        'maxMassElement',
                        'timerElement',
                        'playerNick',
                        'statsTitle'
                    ];

                    elementsToShow.forEach(id => {
                        const element = document.getElementById(id);
                        if (element) {
                            element.style.visibility = 'visible';
                            element.style.display = 'block'; // Показываем элементы
                        }
                    });
                }
            });
        });
    }

    function resetToDefaultState() {
        // Сброс подсветки всех кнопок
        document.querySelectorAll('#PlayersButton, #SetingButton, #InfoButton').forEach(btn => {
            btn.classList.remove('highlighted');
        });

        // Подсветка "InfoButton"
        const infoButton = document.getElementById('InfoButton');
        infoButton.classList.add('highlighted');

        // Скрываем все элементы, кроме тех, которые связаны с InfoButton
        const elementsToShow = [
            'playerSkin',
            'OnlineStat',
            'RoomStat',
            'PelletEat',
            'EatVirus',
            'MvpCoinsRez',
            'CoinsRez',
            'aliveTimerElement',
            'maxMassElement',
            'timerElement',
            'playerNick',
            'statsTitle'
        ];

        // Скрываем другие заголовки
        document.querySelectorAll('#gameOptionsTitle, #playerInfoTitle').forEach(title => {
            title.style.visibility = 'hidden';
        });

        elementsToShow.forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                element.style.visibility = 'visible';
            }
        });
    }

    function resetTop3Timer() {
        clearInterval(top3TimerInterval);
        isTop3TimerRunning = false;
        startTop3Time = 0;
        elapsedTop3Time = 0;
        const timerElement = document.getElementById('timerElement');
        if (timerElement) {
            timerElement.textContent = 'Время в топ 3: 00:00:00';
        }
    }

    function resetAliveTimer() {
        clearInterval(aliveTimerInterval);
        isAliveTimerRunning = false;
        startAliveTime = 0;
        elapsedAliveTime = 0;
        const aliveTimerElement = document.getElementById('aliveTimerElement');
        if (aliveTimerElement) {
            aliveTimerElement.textContent = 'Время жизни: 00:00:00';
        }
    }

    function pauseTop3Timer() {
        isTop3TimerRunning = false;
        elapsedTop3Time = Date.now() - startTop3Time;
        clearInterval(top3TimerInterval);
    }

    function pauseAliveTimer() {
        isAliveTimerRunning = false;
        elapsedAliveTime = Date.now() - startAliveTime;
        clearInterval(aliveTimerInterval);
    }

    function updateTopPlayerNick() {
        const timerElement = document.getElementById('timerElement');
        const maxMassElement = document.getElementById('maxMassElement');
        const game = globalBlob && globalBlob.game;
        const playerNick = game && game._players && game._players[game._localPlayerIndex] && game._players[game._localPlayerIndex].name;

        if (!globalInGame || !globalAlive || !game || !playerNick) {
            resetTop3Timer();
            resetAliveTimer();
            setTimeout(updateTopPlayerNick, 300);
            return;
        }

        let playerPosition = -1;
        let totalMass = 0;
        const topRows = document.querySelectorAll('.top-row[data-v-53e414ae]');

        topRows.forEach((row, index) => {
            const nameElement = row.querySelector('.name-score[data-v-53e414ae] .name[data-v-53e414ae]');
            const nameScoreElement = row.querySelector('.name-score[data-v-53e414ae]');
            const scoreElement = row.querySelector('.score[data-v-53e414ae]');
            const isCurrentPlayer = nameElement && nameElement.textContent.trim() === playerNick.trim();

            if (isCurrentPlayer) {
                playerPosition = index + 1;
                [nameElement, nameScoreElement, scoreElement].forEach(el => {
                    if (el) {
                        el.style.color = 'yellow';
                    }
                });
            } else {
                [nameElement, nameScoreElement, scoreElement].forEach(el => {
                    if (el) {
                        el.style.color = '';
                    }
                });
            }
        });

        game._localPlayerCells.forEach(cell => {
            totalMass += cell.mass;
        });
        totalMass = Math.round(totalMass);

        if (totalMass > maxMass) {
            maxMass = totalMass;
        }

        maxMassElement.textContent = `Максимальная масса: ${maxMass}`;

        if (playerPosition >= 1 && playerPosition <= 3) {
            if (!isTop3TimerRunning) {
                isTop3TimerRunning = true;
                startTop3Time = Date.now() - elapsedTop3Time;
                top3TimerInterval = setInterval(updateTop3Timer, 100);
            }
        } else {
            if (isTop3TimerRunning) {
                pauseTop3Timer();
            }
        }

        if (globalAlive) {
            if (!isAliveTimerRunning) {
                isAliveTimerRunning = true;
                startAliveTime = Date.now() - elapsedAliveTime;
                aliveTimerInterval = setInterval(updateAliveTimer, 100);
            }
        } else {
            if (isAliveTimerRunning) {
                pauseAliveTimer();
                resetAliveTimer();
            }
        }

        setTimeout(updateTopPlayerNick, 300);
    }

    function updateTop3Timer() {
        const timerElement = document.getElementById('timerElement');
        if (!globalAlive) {
            resetTop3Timer();
            return;
        }

        if (timerElement) {
            const currentTime = Date.now();
            elapsedTop3Time = currentTime - startTop3Time;
            const seconds = Math.floor(elapsedTop3Time / 1000);
            const minutes = Math.floor(seconds / 60);
            const hours = Math.floor(minutes / 60);
            const displaySeconds = (seconds % 60).toString().padStart(2, '0');
            const displayMinutes = (minutes % 60).toString().padStart(2, '0');
            const displayHours = hours.toString().padStart(2, '0');
            timerElement.textContent = `Время в топ 3: ${displayHours}:${displayMinutes}:${displaySeconds}`;
        }
    }

    function updateAliveTimer() {
        const aliveTimerElement = document.getElementById('aliveTimerElement');
        if (!globalAlive) {
            resetAliveTimer();
            return;
        }

        if (aliveTimerElement) {
            const currentTime = Date.now();
            elapsedAliveTime = currentTime - startAliveTime;
            const seconds = Math.floor(elapsedAliveTime / 1000);
            const minutes = Math.floor(seconds / 60);
            const hours = Math.floor(minutes / 60);
            const displaySeconds = (seconds % 60).toString().padStart(2, '0');
            const displayMinutes = (minutes % 60).toString().padStart(2, '0');
            const displayHours = hours.toString().padStart(2, '0');
            aliveTimerElement.textContent = `Время жизни: ${displayHours}:${displayMinutes}:${displaySeconds}`;
        }
    }

    function checkConditions() {
        const statsContainer = document.getElementById('statsContainer');
        if (!globalInGame || !globalAlive) {
            if (panelVisible) {
                statsContainer.style.display = 'none';
                panelVisible = false;
                resetToDefaultState();
            }
        }
    }

    document.addEventListener('keydown', toggleStatsPanel);
    setTimeout(updateTopPlayerNick, 300);
    setInterval(checkConditions, 300);
})();

function getTotalMass(cells) {
    return cells.reduce((sum, cell) => sum + cell.mass, 0);
}

function calculateDistance(x1, y1, x2, y2) {
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

function isInView(cell) {
    if (!globalBlob || !globalBlob.game || !globalBlob.game._viewArea) return false;

    const viewArea = globalBlob.game._viewArea;
    return cell.x >= viewArea.minX && cell.x <= viewArea.maxX &&
        cell.y >= viewArea.minY && cell.y <= viewArea.maxY;
}

function moveCell(playerX, playerY, targetX, targetY, otherPlayesCells, isChasing = false) {

    // if (!playerX || !playerY || !globalBlob || !globalBlob.game || !globalBlob.game._viewArea) return;

    // const deltaX = targetX - playerX;
    // const deltaY = targetY - playerY;
    // let angle = Math.atan2(deltaY, deltaX);

    // // Избегаем других игроков
    // otherPlayesCells.forEach(cell => {
    //     const distanceTocell = calculateDistance(playerX, playerY, cell.x, cell.y);
    //     if (distanceTocell < cell._radius + SAFE_DISTANCE) {
    //         const avoidAngle = Math.atan2(playerY - cell.y, playerX - cell.x);
    //         angle = avoidAngle;
    //     }
    // });

    // const newX = playerX + Math.cos(angle) * DISTANCE_TO_MOVE;
    // const newY = playerY + Math.sin(angle) * DISTANCE_TO_MOVE;
    // // const atan = Math.atan2(newX - globalBlob.game._viewArea.centerX, newY - globalBlob.game._viewArea.centerY);

    // // globalBlob.game._client.buffer.writeUInt8(1);
    // // globalBlob.game._client.buffer.writeFloat(Math.sin(atan) * 1);
    // // globalBlob.game._client.buffer.writeFloat(Math.cos(atan) * 1);

    // globalBlob.game._client.buffer.writeUInt8(1);
    // globalBlob.game._client.buffer.writeFloat(newX);
    // globalBlob.game._client.buffer.writeFloat(newY);

    // if (isChasing) {
    //     globalBlob.game._client.buffer.writeUInt8(2);
    // }

    // Итоговые координаты относительно текущей точки (вектор движения)
    let vectorX = 0;
    let vectorY = 0;

    console.log("1", vectorX, vectorY)

    let deltaX = targetX - playerX;
    let deltaY = targetY - playerY;

    let distance = Math.hypot(deltaX, deltaY)
    let w = 1 / distance;
    vectorX += (deltaX / distance) * w
    vectorY += (deltaY / distance) * w

    console.log("2", vectorX, vectorY)

    console.log(otherPlayesCells.length)
    otherPlayesCells.forEach(cell => {
        let dx = playerX - cell.x;
        let dy = playerY - cell.y;

        let dist = Math.hypot(dx, dy)
        if (dist < 300) {
            let v = (300 / dist) ** 2

            vectorX += (dx / dist) * v
            vectorY += (dy / dist) * v
        }
    })

    // Нормализация
    let len = Math.hypot(vectorX, vectorY)

    console.log("3", vectorX, vectorY)

    globalBlob.game._client.buffer.writeUInt8(1);
    globalBlob.game._client.buffer.writeFloat(vectorX / len);
    globalBlob.game._client.buffer.writeFloat(vectorY / len);
}

function collectPelletsOnPath(playerX, playerY, targetX, targetY, viruses) {
    let closestPellet = null;
    let closestPelletDistance = Infinity;

    if (!globalBlob || !globalBlob.game || !globalBlob.game.cellMgr) return;

    const notNullPellet = globalBlob.game.cellMgr._cells.filter(p => p != null && p.type === 1);
    notNullPellet.forEach(pellet => {
        const distance = calculateDistance(playerX, playerY, pellet.x, pellet.y);

        const isPelletSafe = viruses.every(virus => calculateDistance(pellet.x, pellet.y, virus.x, virus.y) > SAFE_DISTANCE);

        if (distance < closestPelletDistance && isPelletSafe) {
            closestPelletDistance = distance;
            closestPellet = pellet;
        }
    });

    if (closestPellet) {
        moveCell(playerX, playerY, closestPellet.x, closestPellet.y, viruses);
    } else {
        moveCell(playerX, playerY, targetX, targetY, viruses);
    }
}

function updateViruses(localCells) {
    const viruses = [];
    const currentTime = Date.now();

    if (!globalBlob || !globalBlob.game || !globalBlob.game.cellMgr) return viruses;

    globalBlob.game.cellMgr._updatedCells.forEach(cell => {
        if (cell.type === 2 && isInView(cell)) {
            if (!ignoredViruses.has(cell.id)) {
                viruses.push(cell);
            }
        }
    });

    ignoredViruses.forEach((time, virusId) => {
        if (currentTime - time > IGNORE_VIRUS_DURATION || !viruses.find(v => v.id === virusId)) {
            ignoredViruses.delete(virusId);
        }
    });

    localCells.forEach(cell => {
        viruses.forEach(virus => {
            if (calculateDistance(cell.x, cell.y, virus.x, virus.y) < SAFE_DISTANCE / 2) {
                ignoredViruses.set(virus.id, currentTime);
            }
        });
    });

    return viruses;
}

let isChasing = false;

function MPC() {
    if (!globalBlob || !globalBlob.game || !globalBlob.game._localPlayerCells || !globalBlob.game.cellMgr || !globalBlob.game._client) return;

    // localCells - коллекция клеток текущего игрока/бота
    const localCells = globalBlob.game._localPlayerCells;

    // localCells.length === 0 - это признак того, что бот умер
    if (localCells.length === 0) {
        isChasing = false;
        globalBlob.game.respawn();
    }

    const totalMass = getTotalMass(localCells);
    const playerCanterX = localCells.reduce((acc, cell) => acc + cell.x, 0) / localCells.length
    const playerCanterY = localCells.reduce((acc, cell) => acc + cell.y, 0) / localCells.length

    const viruses = updateViruses(localCells);
    let targetCell = null;
    let targetCellDistance = Infinity;

    globalBlob.game.cellMgr._updatedCells.forEach(updatedCell => {
        const distance = calculateDistance(localCells[0].x, localCells[0].y, updatedCell.x, updatedCell.y);

        if (totalMass > 7500 && updatedCell.type === 0 && updatedCell.mass > 1000 && !localCells.includes(updatedCell)) {
            if (distance < targetCellDistance) {
                targetCellDistance = distance;
                targetCell = updatedCell;
            }
        }
    });

    if (totalMass > 200 && !isChasing) {
        isChasing = true;
    }

    const otherPlayesCells = []
    globalBlob.game.cellMgr._updatedCells.forEach(cell => {
        if (cell.type === 0 && isInView(cell)) {
            otherPlayesCells .push(cell);
        }
    });

    if (target && isChasing) {
        let minDistance = calculateDistance(localCells[0].x, localCells[0].x, target.x, target.y)
        let closestCell = localCells[0]
        localCells.forEach(cell => {
            if (calculateDistance(cell.x, cell.y, target.x, target.y) < minDistance) {
                closestCell = cell;
            }
        })
        moveCell(closestCell.x, closestCell.y, target.x, target.y, otherPlayesCells, isChasing);
    } else {
        // метод сбора пеллетов, 2 и 3 аргументы это рандомные координаты на случай если не будет пеллетов по близости
        collectPelletsOnPath(localCells[0].x, localCells[0].y, localCells[0].x + Math.random() * 1000 - 500, localCells[0].y + Math.random() * 1000 - 500, otherPlayesCells);
    }

    sendInputBlock = true;
}

function mainUserMode() {
    let biggestCell = globalBlob.game._localPlayerCells[0]
    globalBlob.game._localPlayerCells.forEach(cell => {
        if (cell.mass > biggestCell.mass) {
            biggestCell = cell
        }
    })

    sendCoords(biggestCell.x, biggestCell.y)
}

// Toggle bot on/off
function toggleBotMode() {
    if (!botModeEnabled) {
        botModeEnabled = true;
        // если включен режим бота, явно выключаем режим главного героя, чтоб не было двойного поведения
        mainUserModeEnabled = false;
        lastTotalMass = getTotalMass(globalBlob.game._localPlayerCells);
        startTime = Date.now();
        intervalId = setInterval(MPC, MPC_INTERVAL);
        notMergeFrameId = requestAnimationFrame(notMerge);
    } else {
        botModeEnabled = false;
        clearInterval(intervalId);
        cancelAnimationFrame(notMergeFrameId);
        sendInputBlock = false;
        intervalId = null;
        notMergeFrameId = null;
        hasJoinedServer = false;
    }
}

// Включить режим главного героя, текущий аккаунт будет делиться своей позицией с другими ботами, боты будут его преследовать.
function toggleMainUserMode() {
    if (!mainUserModeEnabled) {
        mainUserModeEnabled = true;
        // если включен режим главного героя, явно выключаем режим бота, чтоб не было двойного поведения
        botModeEnabled = false;
        lastTotalMass = getTotalMass(globalBlob.game._localPlayerCells);
        startTime = Date.now();
        intervalId = setInterval(mainUserMode, MAIN_MODE_INTERVAL);
    } else {
        mainUserModeEnabled = false;
        clearInterval(intervalId);
        sendInputBlock = false;
        intervalId = null;
        hasJoinedServer = false;
    }
}

const socket = new WebSocket("ws://localhost:8081");

socket.onmessage = msg => {
    if (!botModeEnabled) {
        return;
    }
    target = JSON.parse(msg.data);
};

function sendCoords(x, y) {
    socket.send(JSON.stringify({ x, y }));
}

const eventC = new KeyboardEvent('keydown', {
    key: 'c',
    code: 'KeyC',
    keyCode: 67,     // важно для вашей проверки
    charCode: 99,
    bubbles: true,
    cancelable: true
});
document.addEventListener("keydown", (event) => {
    if (event.code === STOPNB_SPLIT && !stopNB_split) {
        stopNB_split = true;
        document.dispatchEvent(eventC);
        globalBlob.game._client.buffer.writeUInt8(2);
    }

    if (stopNB_split) {
        stopNB_split = false;
    }
});