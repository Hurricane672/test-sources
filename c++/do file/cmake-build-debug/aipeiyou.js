/*! ablejs - v0.2.0 - Thursday, October 23rd, 2014, 7:37:40 PM
* http://www.ablesky.com
* Copyright (c) 2014 frontend@ablesky.com; Licensed  */
var requirejs, require, define;
!function (global) {
    function isFunction(e) {
        return "[object Function]" === ostring.call(e)
    }

    function isArray(e) {
        return "[object Array]" === ostring.call(e)
    }

    function each(e, t) {
        if (e) {
            var i;
            for (i = 0; i < e.length && (!e[i] || !t(e[i], i, e)); i += 1) ;
        }
    }

    function eachReverse(e, t) {
        if (e) {
            var i;
            for (i = e.length - 1; i > -1 && (!e[i] || !t(e[i], i, e)); i -= 1) ;
        }
    }

    function hasProp(e, t) {
        return hasOwn.call(e, t)
    }

    function getOwn(e, t) {
        return hasProp(e, t) && e[t]
    }

    function eachProp(e, t) {
        var i;
        for (i in e) if (hasProp(e, i) && t(e[i], i)) break
    }

    function mixin(e, t, i, n) {
        return t && eachProp(t, function (t, a) {
            (i || !hasProp(e, a)) && (n && "string" != typeof t ? (e[a] || (e[a] = {}), mixin(e[a], t, i, n)) : e[a] = t)
        }), e
    }

    function bind(e, t) {
        return function () {
            return t.apply(e, arguments)
        }
    }

    function scripts() {
        return document.getElementsByTagName("script")
    }

    function getGlobal(e) {
        if (!e) return e;
        var t = global;
        return each(e.split("."), function (e) {
            t = t[e]
        }), t
    }

    function makeError(e, t, i, n) {
        var a = new Error(t + "\nhttp://requirejs.org/docs/errors.html#" + e);
        return a.requireType = e, a.requireModules = n, i && (a.originalError = i), a
    }

    function newContext(e) {
        function t(e) {
            var t, i;
            for (t = 0; e[t]; t += 1) if (i = e[t], "." === i) e.splice(t, 1), t -= 1; else if (".." === i) {
                if (1 === t && (".." === e[2] || ".." === e[0])) break;
                t > 0 && (e.splice(t - 1, 2), t -= 2)
            }
        }

        function i(e, i, n) {
            var a, o, s, r, l, c, d, u, p, h, f, m = i && i.split("/"), g = m, v = _.map, y = v && v["*"];
            if (e && "." === e.charAt(0) && (i ? (g = getOwn(_.pkgs, i) ? m = [i] : m.slice(0, m.length - 1), e = g.concat(e.split("/")), t(e), o = getOwn(_.pkgs, a = e[0]), e = e.join("/"), o && e === a + "/" + o.main && (e = a)) : 0 === e.indexOf("./") && (e = e.substring(2))), n && (m || y) && v) {
                for (r = e.split("/"), l = r.length; l > 0; l -= 1) {
                    if (d = r.slice(0, l).join("/"), m) for (c = m.length; c > 0; c -= 1) if (s = getOwn(v, m.slice(0, c).join("/")), s && (s = getOwn(s, d))) {
                        u = s, p = l;
                        break
                    }
                    if (u) break;
                    !h && y && getOwn(y, d) && (h = getOwn(y, d), f = l)
                }
                !u && h && (u = h, p = f), u && (r.splice(0, p, u), e = r.join("/"))
            }
            return e
        }

        function n(e) {
            isBrowser && each(scripts(), function (t) {
                return t.getAttribute("data-requiremodule") === e && t.getAttribute("data-requirecontext") === x.contextName ? (t.parentNode.removeChild(t), !0) : void 0
            })
        }

        function a(e) {
            var t = getOwn(_.paths, e);
            return t && isArray(t) && t.length > 1 ? (n(e), t.shift(), x.require.undef(e), x.require([e]), !0) : void 0
        }

        function o(e) {
            var t, i = e ? e.indexOf("!") : -1;
            return i > -1 && (t = e.substring(0, i), e = e.substring(i + 1, e.length)), [t, e]
        }

        function s(e, t, n, a) {
            var s, r, l, c, d = null, u = t ? t.name : null, p = e, h = !0, f = "";
            return e || (h = !1, e = "_@r" + (A += 1)), c = o(e), d = c[0], e = c[1], d && (d = i(d, u, a), r = getOwn(S, d)), e && (d ? f = r && r.normalize ? r.normalize(e, function (e) {
                return i(e, u, a)
            }) : i(e, u, a) : (f = i(e, u, a), c = o(f), d = c[0], f = c[1], n = !0, s = x.nameToUrl(f))), l = !d || r || n ? "" : "_unnormalized" + (P += 1), {
                prefix: d,
                name: f,
                parentMap: t,
                unnormalized: !!l,
                url: s,
                originalName: p,
                isDefine: h,
                id: (d ? d + "!" + f : f) + l
            }
        }

        function r(e) {
            var t = e.id, i = getOwn(E, t);
            return i || (i = E[t] = new x.Module(e)), i
        }

        function l(e, t, i) {
            var n = e.id, a = getOwn(E, n);
            !hasProp(S, n) || a && !a.defineEmitComplete ? r(e).on(t, i) : "defined" === t && i(S[n])
        }

        function c(e, t) {
            var i = e.requireModules, n = !1;
            t ? t(e) : (each(i, function (t) {
                var i = getOwn(E, t);
                i && (i.error = e, i.events.error && (n = !0, i.emit("error", e)))
            }), n || req.onError(e))
        }

        function d() {
            globalDefQueue.length && (apsp.apply(C, [C.length - 1, 0].concat(globalDefQueue)), globalDefQueue = [])
        }

        function u(e) {
            delete E[e]
        }

        function p(e, t, i) {
            var n = e.map.id;
            e.error ? e.emit("error", e.error) : (t[n] = !0, each(e.depMaps, function (n, a) {
                var o = n.id, s = getOwn(E, o);
                !s || e.depMatched[a] || i[o] || (getOwn(t, o) ? (e.defineDep(a, S[o]), e.check()) : p(s, t, i))
            }), i[n] = !0)
        }

        function h() {
            var e, t, i, o, s = 1e3 * _.waitSeconds, r = s && x.startTime + s < (new Date).getTime(), l = [], d = [],
                u = !1, f = !0;
            if (!y) {
                if (y = !0, eachProp(E, function (i) {
                    if (e = i.map, t = e.id, i.enabled && (e.isDefine || d.push(i), !i.error)) if (!i.inited && r) a(t) ? (o = !0, u = !0) : (l.push(t), n(t)); else if (!i.inited && i.fetched && e.isDefine && (u = !0, !e.prefix)) return f = !1
                }), r && l.length) return i = makeError("timeout", "Load timeout for modules: " + l, null, l), i.contextName = x.contextName, c(i);
                f && each(d, function (e) {
                    p(e, {}, {})
                }), r && !o || !u || !isBrowser && !isWebWorker || k || (k = setTimeout(function () {
                    k = 0, h()
                }, 50)), y = !1
            }
        }

        function f(e) {
            hasProp(S, e[0]) || r(s(e[0], null, !0)).init(e[1], e[2])
        }

        function m(e, t, i, n) {
            e.detachEvent && !isOpera ? n && e.detachEvent(n, t) : e.removeEventListener(i, t, !1)
        }

        function g(e) {
            var t = e.currentTarget || e.srcElement;
            return m(t, x.onScriptLoad, "load", "onreadystatechange"), m(t, x.onScriptError, "error"), {
                node: t,
                id: t && t.getAttribute("data-requiremodule")
            }
        }

        function v() {
            var e;
            for (d(); C.length;) {
                if (e = C.shift(), null === e[0]) return c(makeError("mismatch", "Mismatched anonymous define() module: " + e[e.length - 1]));
                f(e)
            }
        }

        var y, b, x, w, k, _ = {waitSeconds: 7, baseUrl: "./", paths: {}, pkgs: {}, shim: {}, map: {}, config: {}},
            E = {}, T = {}, C = [], S = {}, I = {}, A = 1, P = 1;
        return w = {
            require: function (e) {
                return e.require ? e.require : e.require = x.makeRequire(e.map)
            }, exports: function (e) {
                return e.usingExports = !0, e.map.isDefine ? e.exports ? e.exports : e.exports = S[e.map.id] = {} : void 0
            }, module: function (e) {
                return e.module ? e.module : e.module = {
                    id: e.map.id, uri: e.map.url, config: function () {
                        return _.config && getOwn(_.config, e.map.id) || {}
                    }, exports: S[e.map.id]
                }
            }
        }, b = function (e) {
            this.events = getOwn(T, e.id) || {}, this.map = e, this.shim = getOwn(_.shim, e.id), this.depExports = [], this.depMaps = [], this.depMatched = [], this.pluginMaps = {}, this.depCount = 0
        }, b.prototype = {
            init: function (e, t, i, n) {
                n = n || {}, this.inited || (this.factory = t, i ? this.on("error", i) : this.events.error && (i = bind(this, function (e) {
                    this.emit("error", e)
                })), this.depMaps = e && e.slice(0), this.errback = i, this.inited = !0, this.ignore = n.ignore, n.enabled || this.enabled ? this.enable() : this.check())
            }, defineDep: function (e, t) {
                this.depMatched[e] || (this.depMatched[e] = !0, this.depCount -= 1, this.depExports[e] = t)
            }, fetch: function () {
                if (!this.fetched) {
                    this.fetched = !0, x.startTime = (new Date).getTime();
                    var e = this.map;
                    return this.shim ? (x.makeRequire(this.map, {enableBuildCallback: !0})(this.shim.deps || [], bind(this, function () {
                        return e.prefix ? this.callPlugin() : this.load()
                    })), void 0) : e.prefix ? this.callPlugin() : this.load()
                }
            }, load: function () {
                var e = this.map.url;
                I[e] || (I[e] = !0, x.load(this.map.id, e))
            }, check: function () {
                if (this.enabled && !this.enabling) {
                    var e, t, i = this.map.id, n = this.depExports, a = this.exports, o = this.factory;
                    if (this.inited) {
                        if (this.error) this.emit("error", this.error); else if (!this.defining) {
                            if (this.defining = !0, this.depCount < 1 && !this.defined) {
                                if (isFunction(o)) {
                                    if (this.events.error) try {
                                        a = x.execCb(i, o, n, a)
                                    } catch (s) {
                                        e = s
                                    } else a = x.execCb(i, o, n, a);
                                    if (this.map.isDefine && (t = this.module, t && void 0 !== t.exports && t.exports !== this.exports ? a = t.exports : void 0 === a && this.usingExports && (a = this.exports)), e) return e.requireMap = this.map, e.requireModules = [this.map.id], e.requireType = "define", c(this.error = e)
                                } else a = o;
                                this.exports = a, this.map.isDefine && !this.ignore && (S[i] = a, req.onResourceLoad && req.onResourceLoad(x, this.map, this.depMaps)), delete E[i], this.defined = !0
                            }
                            this.defining = !1, this.defined && !this.defineEmitted && (this.defineEmitted = !0, this.emit("defined", this.exports), this.defineEmitComplete = !0)
                        }
                    } else this.fetch()
                }
            }, callPlugin: function () {
                var e = this.map, t = e.id, n = s(e.prefix);
                this.depMaps.push(n), l(n, "defined", bind(this, function (n) {
                    var a, o, d, p = this.map.name, h = this.map.parentMap ? this.map.parentMap.name : null,
                        f = x.makeRequire(e.parentMap, {enableBuildCallback: !0});
                    return this.map.unnormalized ? (n.normalize && (p = n.normalize(p, function (e) {
                        return i(e, h, !0)
                    }) || ""), o = s(e.prefix + "!" + p, this.map.parentMap), l(o, "defined", bind(this, function (e) {
                        this.init([], function () {
                            return e
                        }, null, {enabled: !0, ignore: !0})
                    })), d = getOwn(E, o.id), d && (this.depMaps.push(o), this.events.error && d.on("error", bind(this, function (e) {
                        this.emit("error", e)
                    })), d.enable()), void 0) : (a = bind(this, function (e) {
                        this.init([], function () {
                            return e
                        }, null, {enabled: !0})
                    }), a.error = bind(this, function (e) {
                        this.inited = !0, this.error = e, e.requireModules = [t], eachProp(E, function (e) {
                            0 === e.map.id.indexOf(t + "_unnormalized") && u(e.map.id)
                        }), c(e)
                    }), a.fromText = bind(this, function (i, n) {
                        var o = e.name, l = s(o), d = useInteractive;
                        n && (i = n), d && (useInteractive = !1), r(l), hasProp(_.config, t) && (_.config[o] = _.config[t]);
                        try {
                            req.exec(i)
                        } catch (u) {
                            return c(makeError("fromtexteval", "fromText eval for " + t + " failed: " + u, u, [t]))
                        }
                        d && (useInteractive = !0), this.depMaps.push(l), x.completeLoad(o), f([o], a)
                    }), n.load(e.name, f, a, _), void 0)
                })), x.enable(n, this), this.pluginMaps[n.id] = n
            }, enable: function () {
                this.enabled = !0, this.enabling = !0, each(this.depMaps, bind(this, function (e, t) {
                    var i, n, a;
                    if ("string" == typeof e) {
                        if (e = s(e, this.map.isDefine ? this.map : this.map.parentMap, !1, !this.skipMap), this.depMaps[t] = e, a = getOwn(w, e.id)) return this.depExports[t] = a(this), void 0;
                        this.depCount += 1, l(e, "defined", bind(this, function (e) {
                            this.defineDep(t, e), this.check()
                        })), this.errback && l(e, "error", this.errback)
                    }
                    i = e.id, n = E[i], hasProp(w, i) || !n || n.enabled || x.enable(e, this)
                })), eachProp(this.pluginMaps, bind(this, function (e) {
                    var t = getOwn(E, e.id);
                    t && !t.enabled && x.enable(e, this)
                })), this.enabling = !1, this.check()
            }, on: function (e, t) {
                var i = this.events[e];
                i || (i = this.events[e] = []), i.push(t)
            }, emit: function (e, t) {
                each(this.events[e], function (e) {
                    e(t)
                }), "error" === e && delete this.events[e]
            }
        }, x = {
            config: _,
            contextName: e,
            registry: E,
            defined: S,
            urlFetched: I,
            defQueue: C,
            Module: b,
            makeModuleMap: s,
            nextTick: req.nextTick,
            configure: function (e) {
                e.baseUrl && "/" !== e.baseUrl.charAt(e.baseUrl.length - 1) && (e.baseUrl += "/");
                var t = _.pkgs, i = _.shim, n = {paths: !0, config: !0, map: !0};
                eachProp(e, function (e, t) {
                    n[t] ? "map" === t ? mixin(_[t], e, !0, !0) : mixin(_[t], e, !0) : _[t] = e
                }), e.shim && (eachProp(e.shim, function (e, t) {
                    isArray(e) && (e = {deps: e}), !e.exports && !e.init || e.exportsFn || (e.exportsFn = x.makeShimExports(e)), i[t] = e
                }), _.shim = i), e.packages && (each(e.packages, function (e) {
                    var i;
                    e = "string" == typeof e ? {name: e} : e, i = e.location, t[e.name] = {
                        name: e.name,
                        location: i || e.name,
                        main: (e.main || "main").replace(currDirRegExp, "").replace(jsSuffixRegExp, "")
                    }
                }), _.pkgs = t), eachProp(E, function (e, t) {
                    e.inited || e.map.unnormalized || (e.map = s(t))
                }), (e.deps || e.callback) && x.require(e.deps || [], e.callback)
            },
            makeShimExports: function (e) {
                function t() {
                    var t;
                    return e.init && (t = e.init.apply(global, arguments)), t || e.exports && getGlobal(e.exports)
                }

                return t
            },
            makeRequire: function (t, n) {
                function a(i, o, l) {
                    var d, u, p;
                    return n.enableBuildCallback && o && isFunction(o) && (o.__requireJsBuild = !0), "string" == typeof i ? isFunction(o) ? c(makeError("requireargs", "Invalid require call"), l) : t && hasProp(w, i) ? w[i](E[t.id]) : req.get ? req.get(x, i, t) : (u = s(i, t, !1, !0), d = u.id, hasProp(S, d) ? S[d] : c(makeError("notloaded", 'Module name "' + d + '" has not been loaded yet for context: ' + e + (t ? "" : ". Use require([])")))) : (v(), x.nextTick(function () {
                        v(), p = r(s(null, t)), p.skipMap = n.skipMap, p.init(i, o, l, {enabled: !0}), h()
                    }), a)
                }

                return n = n || {}, mixin(a, {
                    isBrowser: isBrowser, toUrl: function (e) {
                        var n, a, o = e.lastIndexOf("."), s = e.split("/")[0], r = "." === s || ".." === s;
                        return -1 !== o && (!r || o > 1) && (n = e.substring(o, e.length), e = e.substring(0, o)), a = x.nameToUrl(i(e, t && t.id, !0), n || ".fake"), n ? a : a.substring(0, a.length - 5)
                    }, defined: function (e) {
                        return hasProp(S, s(e, t, !1, !0).id)
                    }, specified: function (e) {
                        return e = s(e, t, !1, !0).id, hasProp(S, e) || hasProp(E, e)
                    }
                }), t || (a.undef = function (e) {
                    d();
                    var i = s(e, t, !0), n = getOwn(E, e);
                    delete S[e], delete I[i.url], delete T[e], n && (n.events.defined && (T[e] = n.events), u(e))
                }), a
            },
            enable: function (e) {
                var t = getOwn(E, e.id);
                t && r(e).enable()
            },
            completeLoad: function (e) {
                var t, i, n, o = getOwn(_.shim, e) || {}, s = o.exports;
                for (d(); C.length;) {
                    if (i = C.shift(), null === i[0]) {
                        if (i[0] = e, t) break;
                        t = !0
                    } else i[0] === e && (t = !0);
                    f(i)
                }
                if (n = getOwn(E, e), !t && !hasProp(S, e) && n && !n.inited) {
                    if (!(!_.enforceDefine || s && getGlobal(s))) return a(e) ? void 0 : c(makeError("nodefine", "No define call for " + e, null, [e]));
                    f([e, o.deps || [], o.exportsFn])
                }
                h()
            },
            nameToUrl: function (e, t) {
                var i, n, a, o, s, r, l, c, d;
                if (req.jsExtRegExp.test(e)) c = e + (t || ""); else {
                    for (i = _.paths, n = _.pkgs, s = e.split("/"), r = s.length; r > 0; r -= 1) {
                        if (l = s.slice(0, r).join("/"), a = getOwn(n, l), d = getOwn(i, l)) {
                            isArray(d) && (d = d[0]), s.splice(0, r, d);
                            break
                        }
                        if (a) {
                            o = e === a.name ? a.location + "/" + a.main : a.location, s.splice(0, r, o);
                            break
                        }
                    }
                    c = s.join("/"), c += t || (/\?/.test(c) ? "" : ".js"), c = ("/" === c.charAt(0) || c.match(/^[\w\+\.\-]+:/) ? "" : _.baseUrl) + c
                }
                return _.urlArgs ? c + ((-1 === c.indexOf("?") ? "?" : "&") + _.urlArgs) : c
            },
            load: function (e, t) {
                req.load(x, e, t)
            },
            execCb: function (e, t, i, n) {
                return t.apply(n, i)
            },
            onScriptLoad: function (e) {
                if ("load" === e.type || readyRegExp.test((e.currentTarget || e.srcElement).readyState)) {
                    interactiveScript = null;
                    var t = g(e);
                    x.completeLoad(t.id)
                }
            },
            onScriptError: function (e) {
                var t = g(e);
                return a(t.id) ? void 0 : c(makeError("scripterror", "Script error", e, [t.id]))
            }
        }, x.require = x.makeRequire(), x
    }

    function getInteractiveScript() {
        return interactiveScript && "interactive" === interactiveScript.readyState ? interactiveScript : (eachReverse(scripts(), function (e) {
            return "interactive" === e.readyState ? interactiveScript = e : void 0
        }), interactiveScript)
    }

    var req, s, head, baseElement, dataMain, src, interactiveScript, currentlyAddingScript, mainScript, subPath,
        version = "2.1.4", commentRegExp = /(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,
        cjsRequireRegExp = /[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g, jsSuffixRegExp = /\.js$/,
        currDirRegExp = /^\.\//, op = Object.prototype, ostring = op.toString, hasOwn = op.hasOwnProperty,
        ap = Array.prototype, apsp = ap.splice, isBrowser = !("undefined" == typeof window || !navigator || !document),
        isWebWorker = !isBrowser && "undefined" != typeof importScripts,
        readyRegExp = isBrowser && "PLAYSTATION 3" === navigator.platform ? /^complete$/ : /^(complete|loaded)$/,
        defContextName = "_", isOpera = "undefined" != typeof opera && "[object Opera]" === opera.toString(),
        contexts = {}, cfg = {}, globalDefQueue = [], useInteractive = !1;
    if ("undefined" == typeof define) {
        if ("undefined" != typeof requirejs) {
            if (isFunction(requirejs)) return;
            cfg = requirejs, requirejs = void 0
        }
        "undefined" == typeof require || isFunction(require) || (cfg = require, require = void 0), req = requirejs = function (e, t, i, n) {
            var a, o, s = defContextName;
            return isArray(e) || "string" == typeof e || (o = e, isArray(t) ? (e = t, t = i, i = n) : e = []), o && o.context && (s = o.context), a = getOwn(contexts, s), a || (a = contexts[s] = req.s.newContext(s)), o && a.configure(o), a.require(e, t, i)
        }, req.config = function (e) {
            return req(e)
        }, req.nextTick = "undefined" != typeof setTimeout ? function (e) {
            setTimeout(e, 4)
        } : function (e) {
            e()
        }, require || (require = req), req.version = version, req.jsExtRegExp = /^\/|:|\?|\.js$/, req.isBrowser = isBrowser, s = req.s = {
            contexts: contexts,
            newContext: newContext
        }, req({}), each(["toUrl", "undef", "defined", "specified"], function (e) {
            req[e] = function () {
                var t = contexts[defContextName];
                return t.require[e].apply(t, arguments)
            }
        }), isBrowser && (head = s.head = document.getElementsByTagName("head")[0], baseElement = document.getElementsByTagName("base")[0], baseElement && (head = s.head = baseElement.parentNode)), req.onError = function (e) {
            throw e
        }, req.load = function (e, t, i) {
            var n, a = e && e.config || {};
            return isBrowser ? (n = a.xhtml ? document.createElementNS("http://www.w3.org/1999/xhtml", "html:script") : document.createElement("script"), n.type = a.scriptType || "text/javascript", n.charset = "utf-8", n.async = !0, n.setAttribute("data-requirecontext", e.contextName), n.setAttribute("data-requiremodule", t), !n.attachEvent || n.attachEvent.toString && n.attachEvent.toString().indexOf("[native code") < 0 || isOpera ? (n.addEventListener("load", e.onScriptLoad, !1), n.addEventListener("error", e.onScriptError, !1)) : (useInteractive = !0, n.attachEvent("onreadystatechange", e.onScriptLoad)), n.src = i, currentlyAddingScript = n, baseElement ? head.insertBefore(n, baseElement) : head.appendChild(n), currentlyAddingScript = null, n) : (isWebWorker && (importScripts(i), e.completeLoad(t)), void 0)
        }, isBrowser && eachReverse(scripts(), function (e) {
            return head || (head = e.parentNode), dataMain = e.getAttribute("data-main"), dataMain ? (cfg.baseUrl || (src = dataMain.split("/"), mainScript = src.pop(), subPath = src.length ? src.join("/") + "/" : "./", cfg.baseUrl = subPath, dataMain = mainScript), dataMain = dataMain.replace(jsSuffixRegExp, ""), cfg.deps = cfg.deps ? cfg.deps.concat(dataMain) : [dataMain], !0) : void 0
        }), define = function (e, t, i) {
            var n, a;
            "string" != typeof e && (i = t, t = e, e = null), isArray(t) || (i = t, t = []), !t.length && isFunction(i) && i.length && (i.toString().replace(commentRegExp, "").replace(cjsRequireRegExp, function (e, i) {
                t.push(i)
            }), t = (1 === i.length ? ["require"] : ["require", "exports", "module"]).concat(t)), useInteractive && (n = currentlyAddingScript || getInteractiveScript(), n && (e || (e = n.getAttribute("data-requiremodule")), a = contexts[n.getAttribute("data-requirecontext")])), (a ? a.defQueue : globalDefQueue).push([e, t, i])
        }, define.amd = {jQuery: !0}, req.exec = function (text) {
            return eval(text)
        }, req(cfg)
    }
}(this), function (e, t) {
    function i(e) {
        var t = ft[e] = {};
        return K.each(e.split(tt), function (e, i) {
            t[i] = !0
        }), t
    }

    function n(e, i, n) {
        if (n === t && 1 === e.nodeType) {
            var a = "data-" + i.replace(gt, "-$1").toLowerCase();
            if (n = e.getAttribute(a), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : mt.test(n) ? K.parseJSON(n) : n
                } catch (o) {
                }
                K.data(e, i, n)
            } else n = t
        }
        return n
    }

    function a(e) {
        var t;
        for (t in e) if (("data" !== t || !K.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }

    function o() {
        return !1
    }

    function s() {
        return !0
    }

    function r(e) {
        return !e || !e.parentNode || 11 === e.parentNode.nodeType
    }

    function l(e, t) {
        do e = e[t]; while (e && 1 !== e.nodeType);
        return e
    }

    function c(e, t, i) {
        if (t = t || 0, K.isFunction(t)) return K.grep(e, function (e, n) {
            var a = !!t.call(e, n, e);
            return a === i
        });
        if (t.nodeType) return K.grep(e, function (e) {
            return e === t === i
        });
        if ("string" == typeof t) {
            var n = K.grep(e, function (e) {
                return 1 === e.nodeType
            });
            if (jt.test(t)) return K.filter(t, n, !i);
            t = K.filter(t, n)
        }
        return K.grep(e, function (e) {
            return K.inArray(e, t) >= 0 === i
        })
    }

    function d(e) {
        var t = Rt.split("|"), i = e.createDocumentFragment();
        if (i.createElement) for (; t.length;) i.createElement(t.pop());
        return i
    }

    function u(e, t) {
        return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t))
    }

    function p(e, t) {
        if (1 === t.nodeType && K.hasData(e)) {
            var i, n, a, o = K._data(e), s = K._data(t, o), r = o.events;
            if (r) {
                delete s.handle, s.events = {};
                for (i in r) for (n = 0, a = r[i].length; a > n; n++) K.event.add(t, i, r[i][n])
            }
            s.data && (s.data = K.extend({}, s.data))
        }
    }

    function h(e, t) {
        var i;
        1 === t.nodeType && (t.clearAttributes && t.clearAttributes(), t.mergeAttributes && t.mergeAttributes(e), i = t.nodeName.toLowerCase(), "object" === i ? (t.parentNode && (t.outerHTML = e.outerHTML), K.support.html5Clone && e.innerHTML && !K.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === i && Qt.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === i ? t.selected = e.defaultSelected : "input" === i || "textarea" === i ? t.defaultValue = e.defaultValue : "script" === i && t.text !== e.text && (t.text = e.text), t.removeAttribute(K.expando))
    }

    function f(e) {
        return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName("*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll("*") : []
    }

    function m(e) {
        Qt.test(e.type) && (e.defaultChecked = e.checked)
    }

    function g(e, t) {
        if (t in e) return t;
        for (var i = t.charAt(0).toUpperCase() + t.slice(1), n = t, a = vi.length; a--;) if (t = vi[a] + i, t in e) return t;
        return n
    }

    function v(e, t) {
        return e = t || e, "none" === K.css(e, "display") || !K.contains(e.ownerDocument, e)
    }

    function y(e, t) {
        for (var i, n, a = [], o = 0, s = e.length; s > o; o++) i = e[o], i.style && (a[o] = K._data(i, "olddisplay"), t ? (a[o] || "none" !== i.style.display || (i.style.display = ""), "" === i.style.display && v(i) && (a[o] = K._data(i, "olddisplay", k(i.nodeName)))) : (n = ii(i, "display"), a[o] || "none" === n || K._data(i, "olddisplay", n)));
        for (o = 0; s > o; o++) i = e[o], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? a[o] || "" : "none"));
        return e
    }

    function b(e, t, i) {
        var n = di.exec(t);
        return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : t
    }

    function x(e, t, i, n) {
        for (var a = i === (n ? "border" : "content") ? 4 : "width" === t ? 1 : 0, o = 0; 4 > a; a += 2) "margin" === i && (o += K.css(e, i + gi[a], !0)), n ? ("content" === i && (o -= parseFloat(ii(e, "padding" + gi[a])) || 0), "margin" !== i && (o -= parseFloat(ii(e, "border" + gi[a] + "Width")) || 0)) : (o += parseFloat(ii(e, "padding" + gi[a])) || 0, "padding" !== i && (o += parseFloat(ii(e, "border" + gi[a] + "Width")) || 0));
        return o
    }

    function w(e, t, i) {
        var n = "width" === t ? e.offsetWidth : e.offsetHeight, a = !0,
            o = K.support.boxSizing && "border-box" === K.css(e, "boxSizing");
        if (0 >= n || null == n) {
            if (n = ii(e, t), (0 > n || null == n) && (n = e.style[t]), ui.test(n)) return n;
            a = o && (K.support.boxSizingReliable || n === e.style[t]), n = parseFloat(n) || 0
        }
        return n + x(e, t, i || (o ? "border" : "content"), a) + "px"
    }

    function k(e) {
        if (hi[e]) return hi[e];
        var t = K("<" + e + ">").appendTo(V.body), i = t.css("display");
        return t.remove(), ("none" === i || "" === i) && (ni = V.body.appendChild(ni || K.extend(V.createElement("iframe"), {
            frameBorder: 0,
            width: 0,
            height: 0
        })), ai && ni.createElement || (ai = (ni.contentWindow || ni.contentDocument).document, ai.write("<!doctype html><html><body>"), ai.close()), t = ai.body.appendChild(ai.createElement(e)), i = ii(t, "display"), V.body.removeChild(ni)), hi[e] = i, i
    }

    function _(e, t, i, n) {
        var a;
        if (K.isArray(t)) K.each(t, function (t, a) {
            i || xi.test(e) ? n(e, a) : _(e + "[" + ("object" == typeof a ? t : "") + "]", a, i, n)
        }); else if (i || "object" !== K.type(t)) n(e, t); else for (a in t) _(e + "[" + a + "]", t[a], i, n)
    }

    function E(e) {
        return function (t, i) {
            "string" != typeof t && (i = t, t = "*");
            var n, a, o, s = t.toLowerCase().split(tt), r = 0, l = s.length;
            if (K.isFunction(i)) for (; l > r; r++) n = s[r], o = /^\+/.test(n), o && (n = n.substr(1) || "*"), a = e[n] = e[n] || [], a[o ? "unshift" : "push"](i)
        }
    }

    function T(e, i, n, a, o, s) {
        o = o || i.dataTypes[0], s = s || {}, s[o] = !0;
        for (var r, l = e[o], c = 0, d = l ? l.length : 0, u = e === ji; d > c && (u || !r); c++) r = l[c](i, n, a), "string" == typeof r && (!u || s[r] ? r = t : (i.dataTypes.unshift(r), r = T(e, i, n, a, r, s)));
        return !u && r || s["*"] || (r = T(e, i, n, a, "*", s)), r
    }

    function C(e, i) {
        var n, a, o = K.ajaxSettings.flatOptions || {};
        for (n in i) i[n] !== t && ((o[n] ? e : a || (a = {}))[n] = i[n]);
        a && K.extend(!0, e, a)
    }

    function S(e, i, n) {
        var a, o, s, r, l = e.contents, c = e.dataTypes, d = e.responseFields;
        for (o in d) o in n && (i[d[o]] = n[o]);
        for (; "*" === c[0];) c.shift(), a === t && (a = e.mimeType || i.getResponseHeader("content-type"));
        if (a) for (o in l) if (l[o] && l[o].test(a)) {
            c.unshift(o);
            break
        }
        if (c[0] in n) s = c[0]; else {
            for (o in n) {
                if (!c[0] || e.converters[o + " " + c[0]]) {
                    s = o;
                    break
                }
                r || (r = o)
            }
            s = s || r
        }
        return s ? (s !== c[0] && c.unshift(s), n[s]) : void 0
    }

    function I(e, t) {
        var i, n, a, o, s = e.dataTypes.slice(), r = s[0], l = {}, c = 0;
        if (e.dataFilter && (t = e.dataFilter(t, e.dataType)), s[1]) for (i in e.converters) l[i.toLowerCase()] = e.converters[i];
        for (; a = s[++c];) if ("*" !== a) {
            if ("*" !== r && r !== a) {
                if (i = l[r + " " + a] || l["* " + a], !i) for (n in l) if (o = n.split(" "), o[1] === a && (i = l[r + " " + o[0]] || l["* " + o[0]])) {
                    i === !0 ? i = l[n] : l[n] !== !0 && (a = o[0], s.splice(c--, 0, a));
                    break
                }
                if (i !== !0) if (i && e["throws"]) t = i(t); else try {
                    t = i(t)
                } catch (d) {
                    return {state: "parsererror", error: i ? d : "No conversion from " + r + " to " + a}
                }
            }
            r = a
        }
        return {state: "success", data: t}
    }

    function A() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {
        }
    }

    function P() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {
        }
    }

    function D() {
        return setTimeout(function () {
            Gi = t
        }, 0), Gi = K.now()
    }

    function N(e, t) {
        K.each(t, function (t, i) {
            for (var n = (Zi[t] || []).concat(Zi["*"]), a = 0, o = n.length; o > a; a++) if (n[a].call(e, t, i)) return
        })
    }

    function M(e, t, i) {
        var n, a = 0, o = Ki.length, s = K.Deferred().always(function () {
            delete r.elem
        }), r = function () {
            for (var t = Gi || D(), i = Math.max(0, l.startTime + l.duration - t), n = 1 - (i / l.duration || 0), a = 0, o = l.tweens.length; o > a; a++) l.tweens[a].run(n);
            return s.notifyWith(e, [l, n, i]), 1 > n && o ? i : (s.resolveWith(e, [l]), !1)
        }, l = s.promise({
            elem: e,
            props: K.extend({}, t),
            opts: K.extend(!0, {specialEasing: {}}, i),
            originalProperties: t,
            originalOptions: i,
            startTime: Gi || D(),
            duration: i.duration,
            tweens: [],
            createTween: function (t, i) {
                var n = K.Tween(e, l.opts, t, i, l.opts.specialEasing[t] || l.opts.easing);
                return l.tweens.push(n), n
            },
            stop: function (t) {
                for (var i = 0, n = t ? l.tweens.length : 0; n > i; i++) l.tweens[i].run(1);
                return t ? s.resolveWith(e, [l, t]) : s.rejectWith(e, [l, t]), this
            }
        }), c = l.props;
        for (F(c, l.opts.specialEasing); o > a; a++) if (n = Ki[a].call(l, e, c, l.opts)) return n;
        return N(l, c), K.isFunction(l.opts.start) && l.opts.start.call(e, l), K.fx.timer(K.extend(r, {
            anim: l,
            queue: l.opts.queue,
            elem: e
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }

    function F(e, t) {
        var i, n, a, o, s;
        for (i in e) if (n = K.camelCase(i), a = t[n], o = e[i], K.isArray(o) && (a = o[1], o = e[i] = o[0]), i !== n && (e[n] = o, delete e[i]), s = K.cssHooks[n], s && "expand" in s) {
            o = s.expand(o), delete e[n];
            for (i in o) i in e || (e[i] = o[i], t[i] = a)
        } else t[n] = a
    }

    function L(e, t, i) {
        var n, a, o, s, r, l, c, d, u = this, p = e.style, h = {}, f = [], m = e.nodeType && v(e);
        i.queue || (c = K._queueHooks(e, "fx"), null == c.unqueued && (c.unqueued = 0, d = c.empty.fire, c.empty.fire = function () {
            c.unqueued || d()
        }), c.unqueued++, u.always(function () {
            u.always(function () {
                c.unqueued--, K.queue(e, "fx").length || c.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (i.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === K.css(e, "display") && "none" === K.css(e, "float") && (K.support.inlineBlockNeedsLayout && "inline" !== k(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), i.overflow && (p.overflow = "hidden", K.support.shrinkWrapBlocks || u.done(function () {
            p.overflow = i.overflow[0], p.overflowX = i.overflow[1], p.overflowY = i.overflow[2]
        }));
        for (n in t) if (o = t[n], Qi.exec(o)) {
            if (delete t[n], o === (m ? "hide" : "show")) continue;
            f.push(n)
        }
        if (s = f.length) for (r = K._data(e, "fxshow") || K._data(e, "fxshow", {}), m ? K(e).show() : u.done(function () {
            K(e).hide()
        }), u.done(function () {
            var t;
            K.removeData(e, "fxshow", !0);
            for (t in h) K.style(e, t, h[t])
        }), n = 0; s > n; n++) a = f[n], l = u.createTween(a, m ? r[a] : 0), h[a] = r[a] || K.style(e, a), a in r || (r[a] = l.start, m && (l.end = l.start, l.start = "width" === a || "height" === a ? 1 : 0))
    }

    function j(e, t, i, n, a) {
        return new j.prototype.init(e, t, i, n, a)
    }

    function B(e, t) {
        var i, n = {height: e}, a = 0;
        for (t = t ? 1 : 0; 4 > a; a += 2 - t) i = gi[a], n["margin" + i] = n["padding" + i] = e;
        return t && (n.opacity = n.width = e), n
    }

    function O(e) {
        return K.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }

    var R, H, V = e.document, z = e.location, q = e.navigator, U = e.jQuery, W = e.$, $ = Array.prototype.push,
        G = Array.prototype.slice, J = Array.prototype.indexOf, Q = Object.prototype.toString,
        X = Object.prototype.hasOwnProperty, Y = String.prototype.trim, K = function (e, t) {
            return new K.fn.init(e, t, R)
        }, Z = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source, et = /\S/, tt = /\s+/,
        it = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, nt = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
        at = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, ot = /^[\],:{}\s]*$/, st = /(?:^|:|,)(?:\s*\[)+/g,
        rt = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        lt = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g, ct = /^-ms-/, dt = /-([\da-z])/gi,
        ut = function (e, t) {
            return (t + "").toUpperCase()
        }, pt = function () {
            V.addEventListener ? (V.removeEventListener("DOMContentLoaded", pt, !1), K.ready()) : "complete" === V.readyState && (V.detachEvent("onreadystatechange", pt), K.ready())
        }, ht = {};
    K.fn = K.prototype = {
        constructor: K, init: function (e, i, n) {
            var a, o, s;
            if (!e) return this;
            if (e.nodeType) return this.context = this[0] = e, this.length = 1, this;
            if ("string" == typeof e) {
                if (a = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : nt.exec(e), !a || !a[1] && i) return !i || i.jquery ? (i || n).find(e) : this.constructor(i).find(e);
                if (a[1]) return i = i instanceof K ? i[0] : i, s = i && i.nodeType ? i.ownerDocument || i : V, e = K.parseHTML(a[1], s, !0), at.test(a[1]) && K.isPlainObject(i) && this.attr.call(e, i, !0), K.merge(this, e);
                if (o = V.getElementById(a[2]), o && o.parentNode) {
                    if (o.id !== a[2]) return n.find(e);
                    this.length = 1, this[0] = o
                }
                return this.context = V, this.selector = e, this
            }
            return K.isFunction(e) ? n.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), K.makeArray(e, this))
        }, selector: "", jquery: "1.8.2", length: 0, size: function () {
            return this.length
        }, toArray: function () {
            return G.call(this)
        }, get: function (e) {
            return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
        }, pushStack: function (e, t, i) {
            var n = K.merge(this.constructor(), e);
            return n.prevObject = this, n.context = this.context, "find" === t ? n.selector = this.selector + (this.selector ? " " : "") + i : t && (n.selector = this.selector + "." + t + "(" + i + ")"), n
        }, each: function (e, t) {
            return K.each(this, e, t)
        }, ready: function (e) {
            return K.ready.promise().done(e), this
        }, eq: function (e) {
            return e = +e, -1 === e ? this.slice(e) : this.slice(e, e + 1)
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, slice: function () {
            return this.pushStack(G.apply(this, arguments), "slice", G.call(arguments).join(","))
        }, map: function (e) {
            return this.pushStack(K.map(this, function (t, i) {
                return e.call(t, i, t)
            }))
        }, end: function () {
            return this.prevObject || this.constructor(null)
        }, push: $, sort: [].sort, splice: [].splice
    }, K.fn.init.prototype = K.fn, K.extend = K.fn.extend = function () {
        var e, i, n, a, o, s, r = arguments[0] || {}, l = 1, c = arguments.length, d = !1;
        for ("boolean" == typeof r && (d = r, r = arguments[1] || {}, l = 2), "object" == typeof r || K.isFunction(r) || (r = {}), c === l && (r = this, --l); c > l; l++) if (null != (e = arguments[l])) for (i in e) n = r[i], a = e[i], r !== a && (d && a && (K.isPlainObject(a) || (o = K.isArray(a))) ? (o ? (o = !1, s = n && K.isArray(n) ? n : []) : s = n && K.isPlainObject(n) ? n : {}, r[i] = K.extend(d, s, a)) : a !== t && (r[i] = a));
        return r
    }, K.extend({
        noConflict: function (t) {
            return e.$ === K && (e.$ = W), t && e.jQuery === K && (e.jQuery = U), K
        }, isReady: !1, readyWait: 1, holdReady: function (e) {
            e ? K.readyWait++ : K.ready(!0)
        }, ready: function (e) {
            if (e === !0 ? !--K.readyWait : !K.isReady) {
                if (!V.body) return setTimeout(K.ready, 1);
                K.isReady = !0, e !== !0 && --K.readyWait > 0 || (H.resolveWith(V, [K]), K.fn.trigger && K(V).trigger("ready").off("ready"))
            }
        }, isFunction: function (e) {
            return "function" === K.type(e)
        }, isArray: Array.isArray || function (e) {
            return "array" === K.type(e)
        }, isWindow: function (e) {
            return null != e && e == e.window
        }, isNumeric: function (e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        }, type: function (e) {
            return null == e ? String(e) : ht[Q.call(e)] || "object"
        }, isPlainObject: function (e) {
            if (!e || "object" !== K.type(e) || e.nodeType || K.isWindow(e)) return !1;
            try {
                if (e.constructor && !X.call(e, "constructor") && !X.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (i) {
                return !1
            }
            var n;
            for (n in e) ;
            return n === t || X.call(e, n)
        }, isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        }, error: function (e) {
            throw new Error(e)
        }, parseHTML: function (e, t, i) {
            var n;
            return e && "string" == typeof e ? ("boolean" == typeof t && (i = t, t = 0), t = t || V, (n = at.exec(e)) ? [t.createElement(n[1])] : (n = K.buildFragment([e], t, i ? null : []), K.merge([], (n.cacheable ? K.clone(n.fragment) : n.fragment).childNodes))) : null
        }, parseJSON: function (t) {
            return t && "string" == typeof t ? (t = K.trim(t), e.JSON && e.JSON.parse ? e.JSON.parse(t) : ot.test(t.replace(rt, "@").replace(lt, "]").replace(st, "")) ? new Function("return " + t)() : (K.error("Invalid JSON: " + t), void 0)) : null
        }, parseXML: function (i) {
            var n, a;
            if (!i || "string" != typeof i) return null;
            try {
                e.DOMParser ? (a = new DOMParser, n = a.parseFromString(i, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(i))
            } catch (o) {
                n = t
            }
            return n && n.documentElement && !n.getElementsByTagName("parsererror").length || K.error("Invalid XML: " + i), n
        }, noop: function () {
        }, globalEval: function (t) {
            t && et.test(t) && (e.execScript || function (t) {
                e.eval.call(e, t)
            })(t)
        }, camelCase: function (e) {
            return e.replace(ct, "ms-").replace(dt, ut)
        }, nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }, each: function (e, i, n) {
            var a, o = 0, s = e.length, r = s === t || K.isFunction(e);
            if (n) if (r) {
                for (a in e) if (i.apply(e[a], n) === !1) break
            } else for (; s > o && i.apply(e[o++], n) !== !1;) ; else if (r) {
                for (a in e) if (i.call(e[a], a, e[a]) === !1) break
            } else for (; s > o && i.call(e[o], o, e[o++]) !== !1;) ;
            return e
        }, trim: Y && !Y.call("锘柯�") ? function (e) {
            return null == e ? "" : Y.call(e)
        } : function (e) {
            return null == e ? "" : (e + "").replace(it, "")
        }, makeArray: function (e, t) {
            var i, n = t || [];
            return null != e && (i = K.type(e), null == e.length || "string" === i || "function" === i || "regexp" === i || K.isWindow(e) ? $.call(n, e) : K.merge(n, e)), n
        }, inArray: function (e, t, i) {
            var n;
            if (t) {
                if (J) return J.call(t, e, i);
                for (n = t.length, i = i ? 0 > i ? Math.max(0, n + i) : i : 0; n > i; i++) if (i in t && t[i] === e) return i
            }
            return -1
        }, merge: function (e, i) {
            var n = i.length, a = e.length, o = 0;
            if ("number" == typeof n) for (; n > o; o++) e[a++] = i[o]; else for (; i[o] !== t;) e[a++] = i[o++];
            return e.length = a, e
        }, grep: function (e, t, i) {
            var n, a = [], o = 0, s = e.length;
            for (i = !!i; s > o; o++) n = !!t(e[o], o), i !== n && a.push(e[o]);
            return a
        }, map: function (e, i, n) {
            var a, o, s = [], r = 0, l = e.length,
                c = e instanceof K || l !== t && "number" == typeof l && (l > 0 && e[0] && e[l - 1] || 0 === l || K.isArray(e));
            if (c) for (; l > r; r++) a = i(e[r], r, n), null != a && (s[s.length] = a); else for (o in e) a = i(e[o], o, n), null != a && (s[s.length] = a);
            return s.concat.apply([], s)
        }, guid: 1, proxy: function (e, i) {
            var n, a, o;
            return "string" == typeof i && (n = e[i], i = e, e = n), K.isFunction(e) ? (a = G.call(arguments, 2), o = function () {
                return e.apply(i, a.concat(G.call(arguments)))
            }, o.guid = e.guid = e.guid || K.guid++, o) : t
        }, access: function (e, i, n, a, o, s, r) {
            var l, c = null == n, d = 0, u = e.length;
            if (n && "object" == typeof n) {
                for (d in n) K.access(e, i, d, n[d], 1, s, a);
                o = 1
            } else if (a !== t) {
                if (l = r === t && K.isFunction(a), c && (l ? (l = i, i = function (e, t, i) {
                    return l.call(K(e), i)
                }) : (i.call(e, a), i = null)), i) for (; u > d; d++) i(e[d], n, l ? a.call(e[d], d, i(e[d], n)) : a, r);
                o = 1
            }
            return o ? e : c ? i.call(e) : u ? i(e[0], n) : s
        }, now: function () {
            return (new Date).getTime()
        }
    }), K.ready.promise = function (t) {
        if (!H) if (H = K.Deferred(), "complete" === V.readyState) setTimeout(K.ready, 1); else if (V.addEventListener) V.addEventListener("DOMContentLoaded", pt, !1), e.addEventListener("load", K.ready, !1); else {
            V.attachEvent("onreadystatechange", pt), e.attachEvent("onload", K.ready);
            var i = !1;
            try {
                i = null == e.frameElement && V.documentElement
            } catch (n) {
            }
            i && i.doScroll && function a() {
                if (!K.isReady) {
                    try {
                        i.doScroll("left")
                    } catch (e) {
                        return setTimeout(a, 50)
                    }
                    K.ready()
                }
            }()
        }
        return H.promise(t)
    }, K.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (e, t) {
        ht["[object " + t + "]"] = t.toLowerCase()
    }), R = K(V);
    var ft = {};
    K.Callbacks = function (e) {
        e = "string" == typeof e ? ft[e] || i(e) : K.extend({}, e);
        var n, a, o, s, r, l, c = [], d = !e.once && [], u = function (t) {
            for (n = e.memory && t, a = !0, l = s || 0, s = 0, r = c.length, o = !0; c && r > l; l++) if (c[l].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                n = !1;
                break
            }
            o = !1, c && (d ? d.length && u(d.shift()) : n ? c = [] : p.disable())
        }, p = {
            add: function () {
                if (c) {
                    var t = c.length;
                    !function i(t) {
                        K.each(t, function (t, n) {
                            var a = K.type(n);
                            "function" !== a || e.unique && p.has(n) ? n && n.length && "string" !== a && i(n) : c.push(n)
                        })
                    }(arguments), o ? r = c.length : n && (s = t, u(n))
                }
                return this
            }, remove: function () {
                return c && K.each(arguments, function (e, t) {
                    for (var i; (i = K.inArray(t, c, i)) > -1;) c.splice(i, 1), o && (r >= i && r--, l >= i && l--)
                }), this
            }, has: function (e) {
                return K.inArray(e, c) > -1
            }, empty: function () {
                return c = [], this
            }, disable: function () {
                return c = d = n = t, this
            }, disabled: function () {
                return !c
            }, lock: function () {
                return d = t, n || p.disable(), this
            }, locked: function () {
                return !d
            }, fireWith: function (e, t) {
                return t = t || [], t = [e, t.slice ? t.slice() : t], !c || a && !d || (o ? d.push(t) : u(t)), this
            }, fire: function () {
                return p.fireWith(this, arguments), this
            }, fired: function () {
                return !!a
            }
        };
        return p
    }, K.extend({
        Deferred: function (e) {
            var t = [["resolve", "done", K.Callbacks("once memory"), "resolved"], ["reject", "fail", K.Callbacks("once memory"), "rejected"], ["notify", "progress", K.Callbacks("memory")]],
                i = "pending", n = {
                    state: function () {
                        return i
                    }, always: function () {
                        return a.done(arguments).fail(arguments), this
                    }, then: function () {
                        var e = arguments;
                        return K.Deferred(function (i) {
                            K.each(t, function (t, n) {
                                var o = n[0], s = e[t];
                                a[n[1]](K.isFunction(s) ? function () {
                                    var e = s.apply(this, arguments);
                                    e && K.isFunction(e.promise) ? e.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[o + "With"](this === a ? i : this, [e])
                                } : i[o])
                            }), e = null
                        }).promise()
                    }, promise: function (e) {
                        return null != e ? K.extend(e, n) : n
                    }
                }, a = {};
            return n.pipe = n.then, K.each(t, function (e, o) {
                var s = o[2], r = o[3];
                n[o[1]] = s.add, r && s.add(function () {
                    i = r
                }, t[1 ^ e][2].disable, t[2][2].lock), a[o[0]] = s.fire, a[o[0] + "With"] = s.fireWith
            }), n.promise(a), e && e.call(a, a), a
        }, when: function (e) {
            var t, i, n, a = 0, o = G.call(arguments), s = o.length,
                r = 1 !== s || e && K.isFunction(e.promise) ? s : 0, l = 1 === r ? e : K.Deferred(),
                c = function (e, i, n) {
                    return function (a) {
                        i[e] = this, n[e] = arguments.length > 1 ? G.call(arguments) : a, n === t ? l.notifyWith(i, n) : --r || l.resolveWith(i, n)
                    }
                };
            if (s > 1) for (t = new Array(s), i = new Array(s), n = new Array(s); s > a; a++) o[a] && K.isFunction(o[a].promise) ? o[a].promise().done(c(a, n, o)).fail(l.reject).progress(c(a, i, t)) : --r;
            return r || l.resolveWith(n, o), l.promise()
        }
    }), K.support = function () {
        var t, i, n, a, o, s, r, l, c, d, u, p = V.createElement("div");
        if (p.setAttribute("className", "t"), p.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = p.getElementsByTagName("*"), n = p.getElementsByTagName("a")[0], n.style.cssText = "top:1px;float:left;opacity:.5", !i || !i.length) return {};
        a = V.createElement("select"), o = a.appendChild(V.createElement("option")), s = p.getElementsByTagName("input")[0], t = {
            leadingWhitespace: 3 === p.firstChild.nodeType,
            tbody: !p.getElementsByTagName("tbody").length,
            htmlSerialize: !!p.getElementsByTagName("link").length,
            style: /top/.test(n.getAttribute("style")),
            hrefNormalized: "/a" === n.getAttribute("href"),
            opacity: /^0.5/.test(n.style.opacity),
            cssFloat: !!n.style.cssFloat,
            checkOn: "on" === s.value,
            optSelected: o.selected,
            getSetAttribute: "t" !== p.className,
            enctype: !!V.createElement("form").enctype,
            html5Clone: "<:nav></:nav>" !== V.createElement("nav").cloneNode(!0).outerHTML,
            boxModel: "CSS1Compat" === V.compatMode,
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        }, s.checked = !0, t.noCloneChecked = s.cloneNode(!0).checked, a.disabled = !0, t.optDisabled = !o.disabled;
        try {
            delete p.test
        } catch (h) {
            t.deleteExpando = !1
        }
        if (!p.addEventListener && p.attachEvent && p.fireEvent && (p.attachEvent("onclick", u = function () {
            t.noCloneEvent = !1
        }), p.cloneNode(!0).fireEvent("onclick"), p.detachEvent("onclick", u)), s = V.createElement("input"), s.value = "t", s.setAttribute("type", "radio"), t.radioValue = "t" === s.value, s.setAttribute("checked", "checked"), s.setAttribute("name", "t"), p.appendChild(s), r = V.createDocumentFragment(), r.appendChild(p.lastChild), t.checkClone = r.cloneNode(!0).cloneNode(!0).lastChild.checked, t.appendChecked = s.checked, r.removeChild(s), r.appendChild(p), p.attachEvent) for (c in{
            submit: !0,
            change: !0,
            focusin: !0
        }) l = "on" + c, d = l in p, d || (p.setAttribute(l, "return;"), d = "function" == typeof p[l]), t[c + "Bubbles"] = d;
        return K(function () {
            var i, n, a, o, s = "padding:0;margin:0;border:0;display:block;overflow:hidden;",
                r = V.getElementsByTagName("body")[0];
            r && (i = V.createElement("div"), i.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", r.insertBefore(i, r.firstChild), n = V.createElement("div"), i.appendChild(n), n.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", a = n.getElementsByTagName("td"), a[0].style.cssText = "padding:0;margin:0;border:0;display:none", d = 0 === a[0].offsetHeight, a[0].style.display = "", a[1].style.display = "none", t.reliableHiddenOffsets = d && 0 === a[0].offsetHeight, n.innerHTML = "", n.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", t.boxSizing = 4 === n.offsetWidth, t.doesNotIncludeMarginInBodyOffset = 1 !== r.offsetTop, e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(n, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(n, null) || {width: "4px"}).width, o = V.createElement("div"), o.style.cssText = n.style.cssText = s, o.style.marginRight = o.style.width = "0", n.style.width = "1px", n.appendChild(o), t.reliableMarginRight = !parseFloat((e.getComputedStyle(o, null) || {}).marginRight)), "undefined" != typeof n.style.zoom && (n.innerHTML = "", n.style.cssText = s + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === n.offsetWidth, n.style.display = "block", n.style.overflow = "visible", n.innerHTML = "<div></div>", n.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== n.offsetWidth, i.style.zoom = 1), r.removeChild(i), i = n = a = o = null)
        }), r.removeChild(p), i = n = a = o = s = r = p = null, t
    }();
    var mt = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, gt = /([A-Z])/g;
    K.extend({
        cache: {},
        deletedIds: [],
        uuid: 0,
        expando: "jQuery" + (K.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", applet: !0},
        hasData: function (e) {
            return e = e.nodeType ? K.cache[e[K.expando]] : e[K.expando], !!e && !a(e)
        },
        data: function (e, i, n, a) {
            if (K.acceptData(e)) {
                var o, s, r = K.expando, l = "string" == typeof i, c = e.nodeType, d = c ? K.cache : e,
                    u = c ? e[r] : e[r] && r;
                if (u && d[u] && (a || d[u].data) || !l || n !== t) return u || (c ? e[r] = u = K.deletedIds.pop() || K.guid++ : u = r), d[u] || (d[u] = {}, c || (d[u].toJSON = K.noop)), ("object" == typeof i || "function" == typeof i) && (a ? d[u] = K.extend(d[u], i) : d[u].data = K.extend(d[u].data, i)), o = d[u], a || (o.data || (o.data = {}), o = o.data), n !== t && (o[K.camelCase(i)] = n), l ? (s = o[i], null == s && (s = o[K.camelCase(i)])) : s = o, s
            }
        },
        removeData: function (e, t, i) {
            if (K.acceptData(e)) {
                var n, o, s, r = e.nodeType, l = r ? K.cache : e, c = r ? e[K.expando] : K.expando;
                if (l[c]) {
                    if (t && (n = i ? l[c] : l[c].data)) {
                        K.isArray(t) || (t in n ? t = [t] : (t = K.camelCase(t), t = t in n ? [t] : t.split(" ")));
                        for (o = 0, s = t.length; s > o; o++) delete n[t[o]];
                        if (!(i ? a : K.isEmptyObject)(n)) return
                    }
                    (i || (delete l[c].data, a(l[c]))) && (r ? K.cleanData([e], !0) : K.support.deleteExpando || l != l.window ? delete l[c] : l[c] = null)
                }
            }
        },
        _data: function (e, t, i) {
            return K.data(e, t, i, !0)
        },
        acceptData: function (e) {
            var t = e.nodeName && K.noData[e.nodeName.toLowerCase()];
            return !t || t !== !0 && e.getAttribute("classid") === t
        }
    }), K.fn.extend({
        data: function (e, i) {
            var a, o, s, r, l, c = this[0], d = 0, u = null;
            if (e === t) {
                if (this.length && (u = K.data(c), 1 === c.nodeType && !K._data(c, "parsedAttrs"))) {
                    for (s = c.attributes, l = s.length; l > d; d++) r = s[d].name, r.indexOf("data-") || (r = K.camelCase(r.substring(5)), n(c, r, u[r]));
                    K._data(c, "parsedAttrs", !0)
                }
                return u
            }
            return "object" == typeof e ? this.each(function () {
                K.data(this, e)
            }) : (a = e.split(".", 2), a[1] = a[1] ? "." + a[1] : "", o = a[1] + "!", K.access(this, function (i) {
                return i === t ? (u = this.triggerHandler("getData" + o, [a[0]]), u === t && c && (u = K.data(c, e), u = n(c, e, u)), u === t && a[1] ? this.data(a[0]) : u) : (a[1] = i, this.each(function () {
                    var t = K(this);
                    t.triggerHandler("setData" + o, a), K.data(this, e, i), t.triggerHandler("changeData" + o, a)
                }), void 0)
            }, null, i, arguments.length > 1, null, !1))
        }, removeData: function (e) {
            return this.each(function () {
                K.removeData(this, e)
            })
        }
    }), K.extend({
        queue: function (e, t, i) {
            var n;
            return e ? (t = (t || "fx") + "queue", n = K._data(e, t), i && (!n || K.isArray(i) ? n = K._data(e, t, K.makeArray(i)) : n.push(i)), n || []) : void 0
        }, dequeue: function (e, t) {
            t = t || "fx";
            var i = K.queue(e, t), n = i.length, a = i.shift(), o = K._queueHooks(e, t), s = function () {
                K.dequeue(e, t)
            };
            "inprogress" === a && (a = i.shift(), n--), a && ("fx" === t && i.unshift("inprogress"), delete o.stop, a.call(e, s, o)), !n && o && o.empty.fire()
        }, _queueHooks: function (e, t) {
            var i = t + "queueHooks";
            return K._data(e, i) || K._data(e, i, {
                empty: K.Callbacks("once memory").add(function () {
                    K.removeData(e, t + "queue", !0), K.removeData(e, i, !0)
                })
            })
        }
    }), K.fn.extend({
        queue: function (e, i) {
            var n = 2;
            return "string" != typeof e && (i = e, e = "fx", n--), arguments.length < n ? K.queue(this[0], e) : i === t ? this : this.each(function () {
                var t = K.queue(this, e, i);
                K._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && K.dequeue(this, e)
            })
        }, dequeue: function (e) {
            return this.each(function () {
                K.dequeue(this, e)
            })
        }, delay: function (e, t) {
            return e = K.fx ? K.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, i) {
                var n = setTimeout(t, e);
                i.stop = function () {
                    clearTimeout(n)
                }
            })
        }, clearQueue: function (e) {
            return this.queue(e || "fx", [])
        }, promise: function (e, i) {
            var n, a = 1, o = K.Deferred(), s = this, r = this.length, l = function () {
                --a || o.resolveWith(s, [s])
            };
            for ("string" != typeof e && (i = e, e = t), e = e || "fx"; r--;) n = K._data(s[r], e + "queueHooks"), n && n.empty && (a++, n.empty.add(l));
            return l(), o.promise(i)
        }
    });
    var vt, yt, bt, xt = /[\t\r\n]/g, wt = /\r/g, kt = /^(?:button|input)$/i,
        _t = /^(?:button|input|object|select|textarea)$/i, Et = /^a(?:rea|)$/i,
        Tt = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        Ct = K.support.getSetAttribute;
    K.fn.extend({
        attr: function (e, t) {
            return K.access(this, K.attr, e, t, arguments.length > 1)
        }, removeAttr: function (e) {
            return this.each(function () {
                K.removeAttr(this, e)
            })
        }, prop: function (e, t) {
            return K.access(this, K.prop, e, t, arguments.length > 1)
        }, removeProp: function (e) {
            return e = K.propFix[e] || e, this.each(function () {
                try {
                    this[e] = t, delete this[e]
                } catch (i) {
                }
            })
        }, addClass: function (e) {
            var t, i, n, a, o, s, r;
            if (K.isFunction(e)) return this.each(function (t) {
                K(this).addClass(e.call(this, t, this.className))
            });
            if (e && "string" == typeof e) for (t = e.split(tt), i = 0, n = this.length; n > i; i++) if (a = this[i], 1 === a.nodeType) if (a.className || 1 !== t.length) {
                for (o = " " + a.className + " ", s = 0, r = t.length; r > s; s++) o.indexOf(" " + t[s] + " ") < 0 && (o += t[s] + " ");
                a.className = K.trim(o)
            } else a.className = e;
            return this
        }, removeClass: function (e) {
            var i, n, a, o, s, r, l;
            if (K.isFunction(e)) return this.each(function (t) {
                K(this).removeClass(e.call(this, t, this.className))
            });
            if (e && "string" == typeof e || e === t) for (i = (e || "").split(tt), r = 0, l = this.length; l > r; r++) if (a = this[r], 1 === a.nodeType && a.className) {
                for (n = (" " + a.className + " ").replace(xt, " "), o = 0, s = i.length; s > o; o++) for (; n.indexOf(" " + i[o] + " ") >= 0;) n = n.replace(" " + i[o] + " ", " ");
                a.className = e ? K.trim(n) : ""
            }
            return this
        }, toggleClass: function (e, t) {
            var i = typeof e, n = "boolean" == typeof t;
            return K.isFunction(e) ? this.each(function (i) {
                K(this).toggleClass(e.call(this, i, this.className, t), t)
            }) : this.each(function () {
                if ("string" === i) for (var a, o = 0, s = K(this), r = t, l = e.split(tt); a = l[o++];) r = n ? r : !s.hasClass(a), s[r ? "addClass" : "removeClass"](a); else ("undefined" === i || "boolean" === i) && (this.className && K._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : K._data(this, "__className__") || "")
            })
        }, hasClass: function (e) {
            for (var t = " " + e + " ", i = 0, n = this.length; n > i; i++) if (1 === this[i].nodeType && (" " + this[i].className + " ").replace(xt, " ").indexOf(t) >= 0) return !0;
            return !1
        }, val: function (e) {
            var i, n, a, o = this[0];
            {
                if (arguments.length) return a = K.isFunction(e), this.each(function (n) {
                    var o, s = K(this);
                    1 === this.nodeType && (o = a ? e.call(this, n, s.val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : K.isArray(o) && (o = K.map(o, function (e) {
                        return null == e ? "" : e + ""
                    })), i = K.valHooks[this.type] || K.valHooks[this.nodeName.toLowerCase()], i && "set" in i && i.set(this, o, "value") !== t || (this.value = o))
                });
                if (o) return i = K.valHooks[o.type] || K.valHooks[o.nodeName.toLowerCase()], i && "get" in i && (n = i.get(o, "value")) !== t ? n : (n = o.value, "string" == typeof n ? n.replace(wt, "") : null == n ? "" : n)
            }
        }
    }), K.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = e.attributes.value;
                    return !t || t.specified ? e.value : e.text
                }
            }, select: {
                get: function (e) {
                    var t, i, n, a, o = e.selectedIndex, s = [], r = e.options, l = "select-one" === e.type;
                    if (0 > o) return null;
                    for (i = l ? o : 0, n = l ? o + 1 : r.length; n > i; i++) if (a = r[i], !(!a.selected || (K.support.optDisabled ? a.disabled : null !== a.getAttribute("disabled")) || a.parentNode.disabled && K.nodeName(a.parentNode, "optgroup"))) {
                        if (t = K(a).val(), l) return t;
                        s.push(t)
                    }
                    return l && !s.length && r.length ? K(r[o]).val() : s
                }, set: function (e, t) {
                    var i = K.makeArray(t);
                    return K(e).find("option").each(function () {
                        this.selected = K.inArray(K(this).val(), i) >= 0
                    }), i.length || (e.selectedIndex = -1), i
                }
            }
        },
        attrFn: {},
        attr: function (e, i, n, a) {
            var o, s, r, l = e.nodeType;
            if (e && 3 !== l && 8 !== l && 2 !== l) return a && K.isFunction(K.fn[i]) ? K(e)[i](n) : "undefined" == typeof e.getAttribute ? K.prop(e, i, n) : (r = 1 !== l || !K.isXMLDoc(e), r && (i = i.toLowerCase(), s = K.attrHooks[i] || (Tt.test(i) ? yt : vt)), n !== t ? null === n ? (K.removeAttr(e, i), void 0) : s && "set" in s && r && (o = s.set(e, n, i)) !== t ? o : (e.setAttribute(i, n + ""), n) : s && "get" in s && r && null !== (o = s.get(e, i)) ? o : (o = e.getAttribute(i), null === o ? t : o))
        },
        removeAttr: function (e, t) {
            var i, n, a, o, s = 0;
            if (t && 1 === e.nodeType) for (n = t.split(tt); s < n.length; s++) a = n[s], a && (i = K.propFix[a] || a, o = Tt.test(a), o || K.attr(e, a, ""), e.removeAttribute(Ct ? a : i), o && i in e && (e[i] = !1))
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (kt.test(e.nodeName) && e.parentNode) K.error("type property can't be changed"); else if (!K.support.radioValue && "radio" === t && K.nodeName(e, "input")) {
                        var i = e.value;
                        return e.setAttribute("type", t), i && (e.value = i), t
                    }
                }
            }, value: {
                get: function (e, t) {
                    return vt && K.nodeName(e, "button") ? vt.get(e, t) : t in e ? e.value : null
                }, set: function (e, t, i) {
                    return vt && K.nodeName(e, "button") ? vt.set(e, t, i) : (e.value = t, void 0)
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function (e, i, n) {
            var a, o, s, r = e.nodeType;
            if (e && 3 !== r && 8 !== r && 2 !== r) return s = 1 !== r || !K.isXMLDoc(e), s && (i = K.propFix[i] || i, o = K.propHooks[i]), n !== t ? o && "set" in o && (a = o.set(e, n, i)) !== t ? a : e[i] = n : o && "get" in o && null !== (a = o.get(e, i)) ? a : e[i]
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    var i = e.getAttributeNode("tabindex");
                    return i && i.specified ? parseInt(i.value, 10) : _t.test(e.nodeName) || Et.test(e.nodeName) && e.href ? 0 : t
                }
            }
        }
    }), yt = {
        get: function (e, i) {
            var n, a = K.prop(e, i);
            return a === !0 || "boolean" != typeof a && (n = e.getAttributeNode(i)) && n.nodeValue !== !1 ? i.toLowerCase() : t
        }, set: function (e, t, i) {
            var n;
            return t === !1 ? K.removeAttr(e, i) : (n = K.propFix[i] || i, n in e && (e[n] = !0), e.setAttribute(i, i.toLowerCase())), i
        }
    }, Ct || (bt = {name: !0, id: !0, coords: !0}, vt = K.valHooks.button = {
        get: function (e, i) {
            var n;
            return n = e.getAttributeNode(i), n && (bt[i] ? "" !== n.value : n.specified) ? n.value : t
        }, set: function (e, t, i) {
            var n = e.getAttributeNode(i);
            return n || (n = V.createAttribute(i), e.setAttributeNode(n)), n.value = t + ""
        }
    }, K.each(["width", "height"], function (e, t) {
        K.attrHooks[t] = K.extend(K.attrHooks[t], {
            set: function (e, i) {
                return "" === i ? (e.setAttribute(t, "auto"), i) : void 0
            }
        })
    }), K.attrHooks.contenteditable = {
        get: vt.get, set: function (e, t, i) {
            "" === t && (t = "false"), vt.set(e, t, i)
        }
    }), K.support.hrefNormalized || K.each(["href", "src", "width", "height"], function (e, i) {
        K.attrHooks[i] = K.extend(K.attrHooks[i], {
            get: function (e) {
                var n = e.getAttribute(i, 2);
                return null === n ? t : n
            }
        })
    }), K.support.style || (K.attrHooks.style = {
        get: function (e) {
            return e.style.cssText.toLowerCase() || t
        }, set: function (e, t) {
            return e.style.cssText = t + ""
        }
    }), K.support.optSelected || (K.propHooks.selected = K.extend(K.propHooks.selected, {
        get: function (e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    })), K.support.enctype || (K.propFix.enctype = "encoding"), K.support.checkOn || K.each(["radio", "checkbox"], function () {
        K.valHooks[this] = {
            get: function (e) {
                return null === e.getAttribute("value") ? "on" : e.value
            }
        }
    }), K.each(["radio", "checkbox"], function () {
        K.valHooks[this] = K.extend(K.valHooks[this], {
            set: function (e, t) {
                return K.isArray(t) ? e.checked = K.inArray(K(e).val(), t) >= 0 : void 0
            }
        })
    });
    var St = /^(?:textarea|input|select)$/i, It = /^([^\.]*|)(?:\.(.+)|)$/, At = /(?:^|\s)hover(\.\S+|)\b/, Pt = /^key/,
        Dt = /^(?:mouse|contextmenu)|click/, Nt = /^(?:focusinfocus|focusoutblur)$/, Mt = function (e) {
            return K.event.special.hover ? e : e.replace(At, "mouseenter$1 mouseleave$1")
        };
    K.event = {
        add: function (e, i, n, a, o) {
            var s, r, l, c, d, u, p, h, f, m, g;
            if (3 !== e.nodeType && 8 !== e.nodeType && i && n && (s = K._data(e))) {
                for (n.handler && (f = n, n = f.handler, o = f.selector), n.guid || (n.guid = K.guid++), l = s.events, l || (s.events = l = {}), r = s.handle, r || (s.handle = r = function (e) {
                    return "undefined" == typeof K || e && K.event.triggered === e.type ? t : K.event.dispatch.apply(r.elem, arguments)
                }, r.elem = e), i = K.trim(Mt(i)).split(" "), c = 0; c < i.length; c++) d = It.exec(i[c]) || [], u = d[1], p = (d[2] || "").split(".").sort(), g = K.event.special[u] || {}, u = (o ? g.delegateType : g.bindType) || u, g = K.event.special[u] || {}, h = K.extend({
                    type: u,
                    origType: d[1],
                    data: a,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    needsContext: o && K.expr.match.needsContext.test(o),
                    namespace: p.join(".")
                }, f), m = l[u], m || (m = l[u] = [], m.delegateCount = 0, g.setup && g.setup.call(e, a, p, r) !== !1 || (e.addEventListener ? e.addEventListener(u, r, !1) : e.attachEvent && e.attachEvent("on" + u, r))), g.add && (g.add.call(e, h), h.handler.guid || (h.handler.guid = n.guid)), o ? m.splice(m.delegateCount++, 0, h) : m.push(h), K.event.global[u] = !0;
                e = null
            }
        },
        global: {},
        remove: function (e, t, i, n, a) {
            var o, s, r, l, c, d, u, p, h, f, m, g = K.hasData(e) && K._data(e);
            if (g && (p = g.events)) {
                for (t = K.trim(Mt(t || "")).split(" "), o = 0; o < t.length; o++) if (s = It.exec(t[o]) || [], r = l = s[1], c = s[2], r) {
                    for (h = K.event.special[r] || {}, r = (n ? h.delegateType : h.bindType) || r, f = p[r] || [], d = f.length, c = c ? new RegExp("(^|\\.)" + c.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null, u = 0; u < f.length; u++) m = f[u], !a && l !== m.origType || i && i.guid !== m.guid || c && !c.test(m.namespace) || n && n !== m.selector && ("**" !== n || !m.selector) || (f.splice(u--, 1), m.selector && f.delegateCount--, h.remove && h.remove.call(e, m));
                    0 === f.length && d !== f.length && (h.teardown && h.teardown.call(e, c, g.handle) !== !1 || K.removeEvent(e, r, g.handle), delete p[r])
                } else for (r in p) K.event.remove(e, r + t[o], i, n, !0);
                K.isEmptyObject(p) && (delete g.handle, K.removeData(e, "events", !0))
            }
        },
        customEvent: {getData: !0, setData: !0, changeData: !0},
        trigger: function (i, n, a, o) {
            if (!a || 3 !== a.nodeType && 8 !== a.nodeType) {
                var s, r, l, c, d, u, p, h, f, m, g = i.type || i, v = [];
                if (!Nt.test(g + K.event.triggered) && (g.indexOf("!") >= 0 && (g = g.slice(0, -1), r = !0), g.indexOf(".") >= 0 && (v = g.split("."), g = v.shift(), v.sort()), a && !K.event.customEvent[g] || K.event.global[g])) if (i = "object" == typeof i ? i[K.expando] ? i : new K.Event(g, i) : new K.Event(g), i.type = g, i.isTrigger = !0, i.exclusive = r, i.namespace = v.join("."), i.namespace_re = i.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, u = g.indexOf(":") < 0 ? "on" + g : "", a) {
                    if (i.result = t, i.target || (i.target = a), n = null != n ? K.makeArray(n) : [], n.unshift(i), p = K.event.special[g] || {}, !p.trigger || p.trigger.apply(a, n) !== !1) {
                        if (f = [[a, p.bindType || g]], !o && !p.noBubble && !K.isWindow(a)) {
                            for (m = p.delegateType || g, c = Nt.test(m + g) ? a : a.parentNode, d = a; c; c = c.parentNode) f.push([c, m]), d = c;
                            d === (a.ownerDocument || V) && f.push([d.defaultView || d.parentWindow || e, m])
                        }
                        for (l = 0; l < f.length && !i.isPropagationStopped(); l++) c = f[l][0], i.type = f[l][1], h = (K._data(c, "events") || {})[i.type] && K._data(c, "handle"), h && h.apply(c, n), h = u && c[u], h && K.acceptData(c) && h.apply && h.apply(c, n) === !1 && i.preventDefault();
                        return i.type = g, o || i.isDefaultPrevented() || p._default && p._default.apply(a.ownerDocument, n) !== !1 || "click" === g && K.nodeName(a, "a") || !K.acceptData(a) || u && a[g] && ("focus" !== g && "blur" !== g || 0 !== i.target.offsetWidth) && !K.isWindow(a) && (d = a[u], d && (a[u] = null), K.event.triggered = g, a[g](), K.event.triggered = t, d && (a[u] = d)), i.result
                    }
                } else {
                    s = K.cache;
                    for (l in s) s[l].events && s[l].events[g] && K.event.trigger(i, n, s[l].handle.elem, !0)
                }
            }
        },
        dispatch: function (i) {
            i = K.event.fix(i || e.event);
            var n, a, o, s, r, l, c, d, u, p = (K._data(this, "events") || {})[i.type] || [], h = p.delegateCount,
                f = G.call(arguments), m = !i.exclusive && !i.namespace, g = K.event.special[i.type] || {}, v = [];
            if (f[0] = i, i.delegateTarget = this, !g.preDispatch || g.preDispatch.call(this, i) !== !1) {
                if (h && (!i.button || "click" !== i.type)) for (o = i.target; o != this; o = o.parentNode || this) if (o.disabled !== !0 || "click" !== i.type) {
                    for (r = {}, c = [], n = 0; h > n; n++) d = p[n], u = d.selector, r[u] === t && (r[u] = d.needsContext ? K(u, this).index(o) >= 0 : K.find(u, this, null, [o]).length), r[u] && c.push(d);
                    c.length && v.push({elem: o, matches: c})
                }
                for (p.length > h && v.push({
                    elem: this,
                    matches: p.slice(h)
                }), n = 0; n < v.length && !i.isPropagationStopped(); n++) for (l = v[n], i.currentTarget = l.elem, a = 0; a < l.matches.length && !i.isImmediatePropagationStopped(); a++) d = l.matches[a], (m || !i.namespace && !d.namespace || i.namespace_re && i.namespace_re.test(d.namespace)) && (i.data = d.data, i.handleObj = d, s = ((K.event.special[d.origType] || {}).handle || d.handler).apply(l.elem, f), s !== t && (i.result = s, s === !1 && (i.preventDefault(), i.stopPropagation())));
                return g.postDispatch && g.postDispatch.call(this, i), i.result
            }
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "), filter: function (e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, i) {
                var n, a, o, s = i.button, r = i.fromElement;
                return null == e.pageX && null != i.clientX && (n = e.target.ownerDocument || V, a = n.documentElement, o = n.body, e.pageX = i.clientX + (a && a.scrollLeft || o && o.scrollLeft || 0) - (a && a.clientLeft || o && o.clientLeft || 0), e.pageY = i.clientY + (a && a.scrollTop || o && o.scrollTop || 0) - (a && a.clientTop || o && o.clientTop || 0)), !e.relatedTarget && r && (e.relatedTarget = r === e.target ? i.toElement : r), e.which || s === t || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
            }
        },
        fix: function (e) {
            if (e[K.expando]) return e;
            var t, i, n = e, a = K.event.fixHooks[e.type] || {}, o = a.props ? this.props.concat(a.props) : this.props;
            for (e = K.Event(n), t = o.length; t;) i = o[--t], e[i] = n[i];
            return e.target || (e.target = n.srcElement || V), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, n) : e
        },
        special: {
            load: {noBubble: !0},
            focus: {delegateType: "focusin"},
            blur: {delegateType: "focusout"},
            beforeunload: {
                setup: function (e, t, i) {
                    K.isWindow(this) && (this.onbeforeunload = i)
                }, teardown: function (e, t) {
                    this.onbeforeunload === t && (this.onbeforeunload = null)
                }
            }
        },
        simulate: function (e, t, i, n) {
            var a = K.extend(new K.Event, i, {type: e, isSimulated: !0, originalEvent: {}});
            n ? K.event.trigger(a, null, t) : K.event.dispatch.call(t, a), a.isDefaultPrevented() && i.preventDefault()
        }
    }, K.event.handle = K.event.dispatch, K.removeEvent = V.removeEventListener ? function (e, t, i) {
        e.removeEventListener && e.removeEventListener(t, i, !1)
    } : function (e, t, i) {
        var n = "on" + t;
        e.detachEvent && ("undefined" == typeof e[n] && (e[n] = null), e.detachEvent(n, i))
    }, K.Event = function (e, t) {
        return this instanceof K.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? s : o) : this.type = e, t && K.extend(this, t), this.timeStamp = e && e.timeStamp || K.now(), this[K.expando] = !0, void 0) : new K.Event(e, t)
    }, K.Event.prototype = {
        preventDefault: function () {
            this.isDefaultPrevented = s;
            var e = this.originalEvent;
            e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        }, stopPropagation: function () {
            this.isPropagationStopped = s;
            var e = this.originalEvent;
            e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        }, stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = s, this.stopPropagation()
        }, isDefaultPrevented: o, isPropagationStopped: o, isImmediatePropagationStopped: o
    }, K.each({mouseenter: "mouseover", mouseleave: "mouseout"}, function (e, t) {
        K.event.special[e] = {
            delegateType: t, bindType: t, handle: function (e) {
                var i, n = this, a = e.relatedTarget, o = e.handleObj;
                return o.selector, (!a || a !== n && !K.contains(n, a)) && (e.type = o.origType, i = o.handler.apply(this, arguments), e.type = t), i
            }
        }
    }), K.support.submitBubbles || (K.event.special.submit = {
        setup: function () {
            return K.nodeName(this, "form") ? !1 : (K.event.add(this, "click._submit keypress._submit", function (e) {
                var i = e.target, n = K.nodeName(i, "input") || K.nodeName(i, "button") ? i.form : t;
                n && !K._data(n, "_submit_attached") && (K.event.add(n, "submit._submit", function (e) {
                    e._submit_bubble = !0
                }), K._data(n, "_submit_attached", !0))
            }), void 0)
        }, postDispatch: function (e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && K.event.simulate("submit", this.parentNode, e, !0))
        }, teardown: function () {
            return K.nodeName(this, "form") ? !1 : (K.event.remove(this, "._submit"), void 0)
        }
    }), K.support.changeBubbles || (K.event.special.change = {
        setup: function () {
            return St.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (K.event.add(this, "propertychange._change", function (e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), K.event.add(this, "click._change", function (e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), K.event.simulate("change", this, e, !0)
            })), !1) : (K.event.add(this, "beforeactivate._change", function (e) {
                var t = e.target;
                St.test(t.nodeName) && !K._data(t, "_change_attached") && (K.event.add(t, "change._change", function (e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || K.event.simulate("change", this.parentNode, e, !0)
                }), K._data(t, "_change_attached", !0))
            }), void 0)
        }, handle: function (e) {
            var t = e.target;
            return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
        }, teardown: function () {
            return K.event.remove(this, "._change"), !St.test(this.nodeName)
        }
    }), K.support.focusinBubbles || K.each({focus: "focusin", blur: "focusout"}, function (e, t) {
        var i = 0, n = function (e) {
            K.event.simulate(t, e.target, K.event.fix(e), !0)
        };
        K.event.special[t] = {
            setup: function () {
                0 === i++ && V.addEventListener(e, n, !0)
            }, teardown: function () {
                0 === --i && V.removeEventListener(e, n, !0)
            }
        }
    }), K.fn.extend({
        on: function (e, i, n, a, s) {
            var r, l;
            if ("object" == typeof e) {
                "string" != typeof i && (n = n || i, i = t);
                for (l in e) this.on(l, i, n, e[l], s);
                return this
            }
            if (null == n && null == a ? (a = i, n = i = t) : null == a && ("string" == typeof i ? (a = n, n = t) : (a = n, n = i, i = t)), a === !1) a = o; else if (!a) return this;
            return 1 === s && (r = a, a = function (e) {
                return K().off(e), r.apply(this, arguments)
            }, a.guid = r.guid || (r.guid = K.guid++)), this.each(function () {
                K.event.add(this, e, a, n, i)
            })
        }, one: function (e, t, i, n) {
            return this.on(e, t, i, n, 1)
        }, off: function (e, i, n) {
            var a, s;
            if (e && e.preventDefault && e.handleObj) return a = e.handleObj, K(e.delegateTarget).off(a.namespace ? a.origType + "." + a.namespace : a.origType, a.selector, a.handler), this;
            if ("object" == typeof e) {
                for (s in e) this.off(s, i, e[s]);
                return this
            }
            return (i === !1 || "function" == typeof i) && (n = i, i = t), n === !1 && (n = o), this.each(function () {
                K.event.remove(this, e, n, i)
            })
        }, bind: function (e, t, i) {
            return this.on(e, null, t, i)
        }, unbind: function (e, t) {
            return this.off(e, null, t)
        }, live: function (e, t, i) {
            return K(this.context).on(e, this.selector, t, i), this
        }, die: function (e, t) {
            return K(this.context).off(e, this.selector || "**", t), this
        }, delegate: function (e, t, i, n) {
            return this.on(t, e, i, n)
        }, undelegate: function (e, t, i) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", i)
        }, trigger: function (e, t) {
            return this.each(function () {
                K.event.trigger(e, t, this)
            })
        }, triggerHandler: function (e, t) {
            return this[0] ? K.event.trigger(e, t, this[0], !0) : void 0
        }, toggle: function (e) {
            var t = arguments, i = e.guid || K.guid++, n = 0, a = function (i) {
                var a = (K._data(this, "lastToggle" + e.guid) || 0) % n;
                return K._data(this, "lastToggle" + e.guid, a + 1), i.preventDefault(), t[a].apply(this, arguments) || !1
            };
            for (a.guid = i; n < t.length;) t[n++].guid = i;
            return this.click(a)
        }, hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), K.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        K.fn[t] = function (e, i) {
            return null == i && (i = e, e = null), arguments.length > 0 ? this.on(t, null, e, i) : this.trigger(t)
        }, Pt.test(t) && (K.event.fixHooks[t] = K.event.keyHooks), Dt.test(t) && (K.event.fixHooks[t] = K.event.mouseHooks)
    }), function (e, t) {
        function i(e, t, i, n) {
            i = i || [], t = t || D;
            var a, o, s, r, l = t.nodeType;
            if (!e || "string" != typeof e) return i;
            if (1 !== l && 9 !== l) return [];
            if (s = w(t), !s && !n && (a = it.exec(e))) if (r = a[1]) {
                if (9 === l) {
                    if (o = t.getElementById(r), !o || !o.parentNode) return i;
                    if (o.id === r) return i.push(o), i
                } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(r)) && k(t, o) && o.id === r) return i.push(o), i
            } else {
                if (a[2]) return j.apply(i, B.call(t.getElementsByTagName(e), 0)), i;
                if ((r = a[3]) && pt && t.getElementsByClassName) return j.apply(i, B.call(t.getElementsByClassName(r), 0)), i
            }
            return m(e.replace(Y, "$1"), t, i, n, s)
        }

        function n(e) {
            return function (t) {
                var i = t.nodeName.toLowerCase();
                return "input" === i && t.type === e
            }
        }

        function a(e) {
            return function (t) {
                var i = t.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && t.type === e
            }
        }

        function o(e) {
            return R(function (t) {
                return t = +t, R(function (i, n) {
                    for (var a, o = e([], i.length, t), s = o.length; s--;) i[a = o[s]] && (i[a] = !(n[a] = i[a]))
                })
            })
        }

        function s(e, t, i) {
            if (e === t) return i;
            for (var n = e.nextSibling; n;) {
                if (n === t) return -1;
                n = n.nextSibling
            }
            return 1
        }

        function r(e, t) {
            var n, a, o, s, r, l, c, d = z[A][e];
            if (d) return t ? 0 : d.slice(0);
            for (r = e, l = [], c = b.preFilter; r;) {
                (!n || (a = Z.exec(r))) && (a && (r = r.slice(a[0].length)), l.push(o = [])), n = !1, (a = et.exec(r)) && (o.push(n = new P(a.shift())), r = r.slice(n.length), n.type = a[0].replace(Y, " "));
                for (s in b.filter) !(a = rt[s].exec(r)) || c[s] && !(a = c[s](a, D, !0)) || (o.push(n = new P(a.shift())), r = r.slice(n.length), n.type = s, n.matches = a);
                if (!n) break
            }
            return t ? r.length : r ? i.error(e) : z(e, l).slice(0)
        }

        function l(e, t, i) {
            var n = t.dir, a = i && "parentNode" === t.dir, o = F++;
            return t.first ? function (t, i, o) {
                for (; t = t[n];) if (a || 1 === t.nodeType) return e(t, i, o)
            } : function (t, i, s) {
                if (s) {
                    for (; t = t[n];) if ((a || 1 === t.nodeType) && e(t, i, s)) return t
                } else for (var r, l = M + " " + o + " ", c = l + v; t = t[n];) if (a || 1 === t.nodeType) {
                    if ((r = t[A]) === c) return t.sizset;
                    if ("string" == typeof r && 0 === r.indexOf(l)) {
                        if (t.sizset) return t
                    } else {
                        if (t[A] = c, e(t, i, s)) return t.sizset = !0, t;
                        t.sizset = !1
                    }
                }
            }
        }

        function c(e) {
            return e.length > 1 ? function (t, i, n) {
                for (var a = e.length; a--;) if (!e[a](t, i, n)) return !1;
                return !0
            } : e[0]
        }

        function d(e, t, i, n, a) {
            for (var o, s = [], r = 0, l = e.length, c = null != t; l > r; r++) (o = e[r]) && (!i || i(o, n, a)) && (s.push(o), c && t.push(r));
            return s
        }

        function u(e, t, i, n, a, o) {
            return n && !n[A] && (n = u(n)), a && !a[A] && (a = u(a, o)), R(function (o, s, r, l) {
                if (!o || !a) {
                    var c, u, p, h = [], m = [], g = s.length, v = o || f(t || "*", r.nodeType ? [r] : r, [], o),
                        y = !e || !o && t ? v : d(v, h, e, r, l), b = i ? a || (o ? e : g || n) ? [] : s : y;
                    if (i && i(y, b, r, l), n) for (p = d(b, m), n(p, [], r, l), c = p.length; c--;) (u = p[c]) && (b[m[c]] = !(y[m[c]] = u));
                    if (o) for (c = e && b.length; c--;) (u = b[c]) && (o[h[c]] = !(s[h[c]] = u)); else b = d(b === s ? b.splice(g, b.length) : b), a ? a(null, s, b, l) : j.apply(s, b)
                }
            })
        }

        function p(e) {
            for (var t, i, n, a = e.length, o = b.relative[e[0].type], s = o || b.relative[" "], r = o ? 1 : 0, d = l(function (e) {
                return e === t
            }, s, !0), h = l(function (e) {
                return O.call(t, e) > -1
            }, s, !0), f = [function (e, i, n) {
                return !o && (n || i !== C) || ((t = i).nodeType ? d(e, i, n) : h(e, i, n))
            }]; a > r; r++) if (i = b.relative[e[r].type]) f = [l(c(f), i)]; else {
                if (i = b.filter[e[r].type].apply(null, e[r].matches), i[A]) {
                    for (n = ++r; a > n && !b.relative[e[n].type]; n++) ;
                    return u(r > 1 && c(f), r > 1 && e.slice(0, r - 1).join("").replace(Y, "$1"), i, n > r && p(e.slice(r, n)), a > n && p(e = e.slice(n)), a > n && e.join(""))
                }
                f.push(i)
            }
            return c(f)
        }

        function h(e, t) {
            var n = t.length > 0, a = e.length > 0, o = function (s, r, l, c, u) {
                var p, h, f, m = [], g = 0, y = "0", x = s && [], w = null != u, k = C,
                    _ = s || a && b.find.TAG("*", u && r.parentNode || r), E = M += null == k ? 1 : Math.E;
                for (w && (C = r !== D && r, v = o.el); null != (p = _[y]); y++) {
                    if (a && p) {
                        for (h = 0; f = e[h]; h++) if (f(p, r, l)) {
                            c.push(p);
                            break
                        }
                        w && (M = E, v = ++o.el)
                    }
                    n && ((p = !f && p) && g--, s && x.push(p))
                }
                if (g += y, n && y !== g) {
                    for (h = 0; f = t[h]; h++) f(x, m, r, l);
                    if (s) {
                        if (g > 0) for (; y--;) x[y] || m[y] || (m[y] = L.call(c));
                        m = d(m)
                    }
                    j.apply(c, m), w && !s && m.length > 0 && g + t.length > 1 && i.uniqueSort(c)
                }
                return w && (M = E, C = k), x
            };
            return o.el = 0, n ? R(o) : o
        }

        function f(e, t, n, a) {
            for (var o = 0, s = t.length; s > o; o++) i(e, t[o], n, a);
            return n
        }

        function m(e, t, i, n, a) {
            var o, s, l, c, d, u = r(e);
            if (u.length, !n && 1 === u.length) {
                if (s = u[0] = u[0].slice(0), s.length > 2 && "ID" === (l = s[0]).type && 9 === t.nodeType && !a && b.relative[s[1].type]) {
                    if (t = b.find.ID(l.matches[0].replace(st, ""), t, a)[0], !t) return i;
                    e = e.slice(s.shift().length)
                }
                for (o = rt.POS.test(e) ? -1 : s.length - 1; o >= 0 && (l = s[o], !b.relative[c = l.type]); o--) if ((d = b.find[c]) && (n = d(l.matches[0].replace(st, ""), nt.test(s[0].type) && t.parentNode || t, a))) {
                    if (s.splice(o, 1), e = n.length && s.join(""), !e) return j.apply(i, B.call(n, 0)), i;
                    break
                }
            }
            return _(e, u)(n, t, a, i, nt.test(e)), i
        }

        function g() {
        }

        var v, y, b, x, w, k, _, E, T, C, S = !0, I = "undefined", A = ("sizcache" + Math.random()).replace(".", ""),
            P = String, D = e.document, N = D.documentElement, M = 0, F = 0, L = [].pop, j = [].push, B = [].slice,
            O = [].indexOf || function (e) {
                for (var t = 0, i = this.length; i > t; t++) if (this[t] === e) return t;
                return -1
            }, R = function (e, t) {
                return e[A] = null == t || t, e
            }, H = function () {
                var e = {}, t = [];
                return R(function (i, n) {
                    return t.push(i) > b.cacheLength && delete e[t.shift()], e[i] = n
                }, e)
            }, V = H(), z = H(), q = H(), U = "[\\x20\\t\\r\\n\\f]", W = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",
            $ = W.replace("w", "w#"), G = "([*^$|!~]?=)",
            J = "\\[" + U + "*(" + W + ")" + U + "*(?:" + G + U + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + $ + ")|)|)" + U + "*\\]",
            Q = ":(" + W + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + J + ")|[^:]|\\\\.)*|.*))\\)|)",
            X = ":(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + U + "*((?:-\\d)?\\d*)" + U + "*\\)|)(?=[^-]|$)",
            Y = new RegExp("^" + U + "+|((?:^|[^\\\\])(?:\\\\.)*)" + U + "+$", "g"),
            Z = new RegExp("^" + U + "*," + U + "*"), et = new RegExp("^" + U + "*([\\x20\\t\\r\\n\\f>+~])" + U + "*"),
            tt = new RegExp(Q), it = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/, nt = /[\x20\t\r\n\f]*[+~]/, at = /h\d/i,
            ot = /input|select|textarea|button/i, st = /\\(?!\\)/g, rt = {
                ID: new RegExp("^#(" + W + ")"),
                CLASS: new RegExp("^\\.(" + W + ")"),
                NAME: new RegExp("^\\[name=['\"]?(" + W + ")['\"]?\\]"),
                TAG: new RegExp("^(" + W.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + J),
                PSEUDO: new RegExp("^" + Q),
                POS: new RegExp(X, "i"),
                CHILD: new RegExp("^:(only|nth|first|last)-child(?:\\(" + U + "*(even|odd|(([+-]|)(\\d*)n|)" + U + "*(?:([+-]|)" + U + "*(\\d+)|))" + U + "*\\)|)", "i"),
                needsContext: new RegExp("^" + U + "*[>+~]|" + X, "i")
            }, lt = function (e) {
                var t = D.createElement("div");
                try {
                    return e(t)
                } catch (i) {
                    return !1
                } finally {
                    t = null
                }
            }, ct = lt(function (e) {
                return e.appendChild(D.createComment("")), !e.getElementsByTagName("*").length
            }), dt = lt(function (e) {
                return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== I && "#" === e.firstChild.getAttribute("href")
            }), ut = lt(function (e) {
                e.innerHTML = "<select></select>";
                var t = typeof e.lastChild.getAttribute("multiple");
                return "boolean" !== t && "string" !== t
            }), pt = lt(function (e) {
                return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", e.getElementsByClassName && e.getElementsByClassName("e").length ? (e.lastChild.className = "e", 2 === e.getElementsByClassName("e").length) : !1
            }), ht = lt(function (e) {
                e.id = A + 0, e.innerHTML = "<a name='" + A + "'></a><div name='" + A + "'></div>", N.insertBefore(e, N.firstChild);
                var t = D.getElementsByName && D.getElementsByName(A).length === 2 + D.getElementsByName(A + 0).length;
                return y = !D.getElementById(A), N.removeChild(e), t
            });
        try {
            B.call(N.childNodes, 0)[0].nodeType
        } catch (ft) {
            B = function (e) {
                for (var t, i = []; t = this[e]; e++) i.push(t);
                return i
            }
        }
        i.matches = function (e, t) {
            return i(e, null, null, t)
        }, i.matchesSelector = function (e, t) {
            return i(t, null, null, [e]).length > 0
        }, x = i.getText = function (e) {
            var t, i = "", n = 0, a = e.nodeType;
            if (a) {
                if (1 === a || 9 === a || 11 === a) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) i += x(e)
                } else if (3 === a || 4 === a) return e.nodeValue
            } else for (; t = e[n]; n++) i += x(t);
            return i
        }, w = i.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, k = i.contains = N.contains ? function (e, t) {
            var i = 9 === e.nodeType ? e.documentElement : e, n = t && t.parentNode;
            return e === n || !!(n && 1 === n.nodeType && i.contains && i.contains(n))
        } : N.compareDocumentPosition ? function (e, t) {
            return t && !!(16 & e.compareDocumentPosition(t))
        } : function (e, t) {
            for (; t = t.parentNode;) if (t === e) return !0;
            return !1
        }, i.attr = function (e, t) {
            var i, n = w(e);
            return n || (t = t.toLowerCase()), (i = b.attrHandle[t]) ? i(e) : n || ut ? e.getAttribute(t) : (i = e.getAttributeNode(t), i ? "boolean" == typeof e[t] ? e[t] ? t : null : i.specified ? i.value : null : null)
        }, b = i.selectors = {
            cacheLength: 50,
            createPseudo: R,
            match: rt,
            attrHandle: dt ? {} : {
                href: function (e) {
                    return e.getAttribute("href", 2)
                }, type: function (e) {
                    return e.getAttribute("type")
                }
            },
            find: {
                ID: y ? function (e, t, i) {
                    if (typeof t.getElementById !== I && !i) {
                        var n = t.getElementById(e);
                        return n && n.parentNode ? [n] : []
                    }
                } : function (e, i, n) {
                    if (typeof i.getElementById !== I && !n) {
                        var a = i.getElementById(e);
                        return a ? a.id === e || typeof a.getAttributeNode !== I && a.getAttributeNode("id").value === e ? [a] : t : []
                    }
                }, TAG: ct ? function (e, t) {
                    return typeof t.getElementsByTagName !== I ? t.getElementsByTagName(e) : void 0
                } : function (e, t) {
                    var i = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (var n, a = [], o = 0; n = i[o]; o++) 1 === n.nodeType && a.push(n);
                        return a
                    }
                    return i
                }, NAME: ht && function (e, t) {
                    return typeof t.getElementsByName !== I ? t.getElementsByName(name) : void 0
                }, CLASS: pt && function (e, t, i) {
                    return typeof t.getElementsByClassName === I || i ? void 0 : t.getElementsByClassName(e)
                }
            },
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(st, ""), e[3] = (e[4] || e[5] || "").replace(st, ""), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                }, CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1] ? (e[2] || i.error(e[0]), e[3] = +(e[3] ? e[4] + (e[5] || 1) : 2 * ("even" === e[2] || "odd" === e[2])), e[4] = +(e[6] + e[7] || "odd" === e[2])) : e[2] && i.error(e[0]), e
                }, PSEUDO: function (e) {
                    var t, i;
                    return rt.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[3] : (t = e[4]) && (tt.test(t) && (i = r(t, !0)) && (i = t.indexOf(")", t.length - i) - t.length) && (t = t.slice(0, i), e[0] = e[0].slice(0, i)), e[2] = t), e.slice(0, 3))
                }
            },
            filter: {
                ID: y ? function (e) {
                    return e = e.replace(st, ""), function (t) {
                        return t.getAttribute("id") === e
                    }
                } : function (e) {
                    return e = e.replace(st, ""), function (t) {
                        var i = typeof t.getAttributeNode !== I && t.getAttributeNode("id");
                        return i && i.value === e
                    }
                }, TAG: function (e) {
                    return "*" === e ? function () {
                        return !0
                    } : (e = e.replace(st, "").toLowerCase(), function (t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    })
                }, CLASS: function (e) {
                    var t = V[A][e];
                    return t || (t = V(e, new RegExp("(^|" + U + ")" + e + "(" + U + "|$)"))), function (e) {
                        return t.test(e.className || typeof e.getAttribute !== I && e.getAttribute("class") || "")
                    }
                }, ATTR: function (e, t, n) {
                    return function (a) {
                        var o = i.attr(a, e);
                        return null == o ? "!=" === t : t ? (o += "", "=" === t ? o === n : "!=" === t ? o !== n : "^=" === t ? n && 0 === o.indexOf(n) : "*=" === t ? n && o.indexOf(n) > -1 : "$=" === t ? n && o.substr(o.length - n.length) === n : "~=" === t ? (" " + o + " ").indexOf(n) > -1 : "|=" === t ? o === n || o.substr(0, n.length + 1) === n + "-" : !1) : !0
                    }
                }, CHILD: function (e, t, i, n) {
                    return "nth" === e ? function (e) {
                        var t, a, o = e.parentNode;
                        if (1 === i && 0 === n) return !0;
                        if (o) for (a = 0, t = o.firstChild; t && (1 !== t.nodeType || (a++, e !== t)); t = t.nextSibling) ;
                        return a -= n, a === i || 0 === a % i && a / i >= 0
                    } : function (t) {
                        var i = t;
                        switch (e) {
                            case"only":
                            case"first":
                                for (; i = i.previousSibling;) if (1 === i.nodeType) return !1;
                                if ("first" === e) return !0;
                                i = t;
                            case"last":
                                for (; i = i.nextSibling;) if (1 === i.nodeType) return !1;
                                return !0
                        }
                    }
                }, PSEUDO: function (e, t) {
                    var n, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || i.error("unsupported pseudo: " + e);
                    return a[A] ? a(t) : a.length > 1 ? (n = [e, e, "", t], b.setFilters.hasOwnProperty(e.toLowerCase()) ? R(function (e, i) {
                        for (var n, o = a(e, t), s = o.length; s--;) n = O.call(e, o[s]), e[n] = !(i[n] = o[s])
                    }) : function (e) {
                        return a(e, 0, n)
                    }) : a
                }
            },
            pseudos: {
                not: R(function (e) {
                    var t = [], i = [], n = _(e.replace(Y, "$1"));
                    return n[A] ? R(function (e, t, i, a) {
                        for (var o, s = n(e, null, a, []), r = e.length; r--;) (o = s[r]) && (e[r] = !(t[r] = o))
                    }) : function (e, a, o) {
                        return t[0] = e, n(t, null, o, i), !i.pop()
                    }
                }),
                has: R(function (e) {
                    return function (t) {
                        return i(e, t).length > 0
                    }
                }),
                contains: R(function (e) {
                    return function (t) {
                        return (t.textContent || t.innerText || x(t)).indexOf(e) > -1
                    }
                }),
                enabled: function (e) {
                    return e.disabled === !1
                },
                disabled: function (e) {
                    return e.disabled === !0
                },
                checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                parent: function (e) {
                    return !b.pseudos.empty(e)
                },
                empty: function (e) {
                    var t;
                    for (e = e.firstChild; e;) {
                        if (e.nodeName > "@" || 3 === (t = e.nodeType) || 4 === t) return !1;
                        e = e.nextSibling
                    }
                    return !0
                },
                header: function (e) {
                    return at.test(e.nodeName)
                },
                text: function (e) {
                    var t, i;
                    return "input" === e.nodeName.toLowerCase() && "text" === (t = e.type) && (null == (i = e.getAttribute("type")) || i.toLowerCase() === t)
                },
                radio: n("radio"),
                checkbox: n("checkbox"),
                file: n("file"),
                password: n("password"),
                image: n("image"),
                submit: a("submit"),
                reset: a("reset"),
                button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                input: function (e) {
                    return ot.test(e.nodeName)
                },
                focus: function (e) {
                    var t = e.ownerDocument;
                    return !(e !== t.activeElement || t.hasFocus && !t.hasFocus() || !e.type && !e.href)
                },
                active: function (e) {
                    return e === e.ownerDocument.activeElement
                },
                first: o(function () {
                    return [0]
                }),
                last: o(function (e, t) {
                    return [t - 1]
                }),
                eq: o(function (e, t, i) {
                    return [0 > i ? i + t : i]
                }),
                even: o(function (e, t) {
                    for (var i = 0; t > i; i += 2) e.push(i);
                    return e
                }),
                odd: o(function (e, t) {
                    for (var i = 1; t > i; i += 2) e.push(i);
                    return e
                }),
                lt: o(function (e, t, i) {
                    for (var n = 0 > i ? i + t : i; --n >= 0;) e.push(n);
                    return e
                }),
                gt: o(function (e, t, i) {
                    for (var n = 0 > i ? i + t : i; ++n < t;) e.push(n);
                    return e
                })
            }
        }, E = N.compareDocumentPosition ? function (e, t) {
            return e === t ? (T = !0, 0) : (e.compareDocumentPosition && t.compareDocumentPosition ? 4 & e.compareDocumentPosition(t) : e.compareDocumentPosition) ? -1 : 1
        } : function (e, t) {
            if (e === t) return T = !0, 0;
            if (e.sourceIndex && t.sourceIndex) return e.sourceIndex - t.sourceIndex;
            var i, n, a = [], o = [], r = e.parentNode, l = t.parentNode, c = r;
            if (r === l) return s(e, t);
            if (!r) return -1;
            if (!l) return 1;
            for (; c;) a.unshift(c), c = c.parentNode;
            for (c = l; c;) o.unshift(c), c = c.parentNode;
            i = a.length, n = o.length;
            for (var d = 0; i > d && n > d; d++) if (a[d] !== o[d]) return s(a[d], o[d]);
            return d === i ? s(e, o[d], -1) : s(a[d], t, 1)
        }, [0, 0].sort(E), S = !T, i.uniqueSort = function (e) {
            var t, i = 1;
            if (T = S, e.sort(E), T) for (; t = e[i]; i++) t === e[i - 1] && e.splice(i--, 1);
            return e
        }, i.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, _ = i.compile = function (e, t) {
            var i, n = [], a = [], o = q[A][e];
            if (!o) {
                for (t || (t = r(e)), i = t.length; i--;) o = p(t[i]), o[A] ? n.push(o) : a.push(o);
                o = q(e, h(a, n))
            }
            return o
        }, D.querySelectorAll && function () {
            var e, t = m, n = /'|\\/g, a = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g, o = [":focus"],
                s = [":active", ":focus"],
                l = N.matchesSelector || N.mozMatchesSelector || N.webkitMatchesSelector || N.oMatchesSelector || N.msMatchesSelector;
            lt(function (e) {
                e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || o.push("\\[" + U + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked").length || o.push(":checked")
            }), lt(function (e) {
                e.innerHTML = "<p test=''></p>", e.querySelectorAll("[test^='']").length && o.push("[*^$]=" + U + "*(?:\"\"|'')"), e.innerHTML = "<input type='hidden'/>", e.querySelectorAll(":enabled").length || o.push(":enabled", ":disabled")
            }), o = new RegExp(o.join("|")), m = function (e, i, a, s, l) {
                if (!(s || l || o && o.test(e))) {
                    var c, d, u = !0, p = A, h = i, f = 9 === i.nodeType && e;
                    if (1 === i.nodeType && "object" !== i.nodeName.toLowerCase()) {
                        for (c = r(e), (u = i.getAttribute("id")) ? p = u.replace(n, "\\$&") : i.setAttribute("id", p), p = "[id='" + p + "'] ", d = c.length; d--;) c[d] = p + c[d].join("");
                        h = nt.test(e) && i.parentNode || i, f = c.join(",")
                    }
                    if (f) try {
                        return j.apply(a, B.call(h.querySelectorAll(f), 0)), a
                    } catch (m) {
                    } finally {
                        u || i.removeAttribute("id")
                    }
                }
                return t(e, i, a, s, l)
            }, l && (lt(function (t) {
                e = l.call(t, "div");
                try {
                    l.call(t, "[test!='']:sizzle"), s.push("!=", Q)
                } catch (i) {
                }
            }), s = new RegExp(s.join("|")), i.matchesSelector = function (t, n) {
                if (n = n.replace(a, "='$1']"), !(w(t) || s.test(n) || o && o.test(n))) try {
                    var r = l.call(t, n);
                    if (r || e || t.document && 11 !== t.document.nodeType) return r
                } catch (c) {
                }
                return i(n, null, null, [t]).length > 0
            })
        }(), b.pseudos.nth = b.pseudos.eq, b.filters = g.prototype = b.pseudos, b.setFilters = new g, i.attr = K.attr, K.find = i, K.expr = i.selectors, K.expr[":"] = K.expr.pseudos, K.unique = i.uniqueSort, K.text = i.getText, K.isXMLDoc = i.isXML, K.contains = i.contains
    }(e);
    var Ft = /Until$/, Lt = /^(?:parents|prev(?:Until|All))/, jt = /^.[^:#\[\.,]*$/, Bt = K.expr.match.needsContext,
        Ot = {children: !0, contents: !0, next: !0, prev: !0};
    K.fn.extend({
        find: function (e) {
            var t, i, n, a, o, s, r = this;
            if ("string" != typeof e) return K(e).filter(function () {
                for (t = 0, i = r.length; i > t; t++) if (K.contains(r[t], this)) return !0
            });
            for (s = this.pushStack("", "find", e), t = 0, i = this.length; i > t; t++) if (n = s.length, K.find(e, this[t], s), t > 0) for (a = n; a < s.length; a++) for (o = 0; n > o; o++) if (s[o] === s[a]) {
                s.splice(a--, 1);
                break
            }
            return s
        }, has: function (e) {
            var t, i = K(e, this), n = i.length;
            return this.filter(function () {
                for (t = 0; n > t; t++) if (K.contains(this, i[t])) return !0
            })
        }, not: function (e) {
            return this.pushStack(c(this, e, !1), "not", e)
        }, filter: function (e) {
            return this.pushStack(c(this, e, !0), "filter", e)
        }, is: function (e) {
            return !!e && ("string" == typeof e ? Bt.test(e) ? K(e, this.context).index(this[0]) >= 0 : K.filter(e, this).length > 0 : this.filter(e).length > 0)
        }, closest: function (e, t) {
            for (var i, n = 0, a = this.length, o = [], s = Bt.test(e) || "string" != typeof e ? K(e, t || this.context) : 0; a > n; n++) for (i = this[n]; i && i.ownerDocument && i !== t && 11 !== i.nodeType;) {
                if (s ? s.index(i) > -1 : K.find.matchesSelector(i, e)) {
                    o.push(i);
                    break
                }
                i = i.parentNode
            }
            return o = o.length > 1 ? K.unique(o) : o, this.pushStack(o, "closest", e)
        }, index: function (e) {
            return e ? "string" == typeof e ? K.inArray(this[0], K(e)) : K.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
        }, add: function (e, t) {
            var i = "string" == typeof e ? K(e, t) : K.makeArray(e && e.nodeType ? [e] : e), n = K.merge(this.get(), i);
            return this.pushStack(r(i[0]) || r(n[0]) ? n : K.unique(n))
        }, addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), K.fn.andSelf = K.fn.addBack, K.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        }, parents: function (e) {
            return K.dir(e, "parentNode")
        }, parentsUntil: function (e, t, i) {
            return K.dir(e, "parentNode", i)
        }, next: function (e) {
            return l(e, "nextSibling")
        }, prev: function (e) {
            return l(e, "previousSibling")
        }, nextAll: function (e) {
            return K.dir(e, "nextSibling")
        }, prevAll: function (e) {
            return K.dir(e, "previousSibling")
        }, nextUntil: function (e, t, i) {
            return K.dir(e, "nextSibling", i)
        }, prevUntil: function (e, t, i) {
            return K.dir(e, "previousSibling", i)
        }, siblings: function (e) {
            return K.sibling((e.parentNode || {}).firstChild, e)
        }, children: function (e) {
            return K.sibling(e.firstChild)
        }, contents: function (e) {
            return K.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : K.merge([], e.childNodes)
        }
    }, function (e, t) {
        K.fn[e] = function (i, n) {
            var a = K.map(this, t, i);
            return Ft.test(e) || (n = i), n && "string" == typeof n && (a = K.filter(n, a)), a = this.length > 1 && !Ot[e] ? K.unique(a) : a, this.length > 1 && Lt.test(e) && (a = a.reverse()), this.pushStack(a, e, G.call(arguments).join(","))
        }
    }), K.extend({
        filter: function (e, t, i) {
            return i && (e = ":not(" + e + ")"), 1 === t.length ? K.find.matchesSelector(t[0], e) ? [t[0]] : [] : K.find.matches(e, t)
        }, dir: function (e, i, n) {
            for (var a = [], o = e[i]; o && 9 !== o.nodeType && (n === t || 1 !== o.nodeType || !K(o).is(n));) 1 === o.nodeType && a.push(o), o = o[i];
            return a
        }, sibling: function (e, t) {
            for (var i = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && i.push(e);
            return i
        }
    });
    var Rt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Ht = / jQuery\d+="(?:null|\d+)"/g, Vt = /^\s+/,
        zt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, qt = /<([\w:]+)/,
        Ut = /<tbody/i, Wt = /<|&#?\w+;/, $t = /<(?:script|style|link)/i, Gt = /<(?:script|object|embed|option|style)/i,
        Jt = new RegExp("<(?:" + Rt + ")[\\s/>]", "i"), Qt = /^(?:checkbox|radio)$/,
        Xt = /checked\s*(?:[^=]|=\s*.checked.)/i, Yt = /\/(java|ecma)script/i,
        Kt = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g, Zt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        }, ei = d(V), ti = ei.appendChild(V.createElement("div"));
    Zt.optgroup = Zt.option, Zt.tbody = Zt.tfoot = Zt.colgroup = Zt.caption = Zt.thead, Zt.th = Zt.td, K.support.htmlSerialize || (Zt._default = [1, "X<div>", "</div>"]), K.fn.extend({
        text: function (e) {
            return K.access(this, function (e) {
                return e === t ? K.text(this) : this.empty().append((this[0] && this[0].ownerDocument || V).createTextNode(e))
            }, null, e, arguments.length)
        }, wrapAll: function (e) {
            if (K.isFunction(e)) return this.each(function (t) {
                K(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = K(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        }, wrapInner: function (e) {
            return K.isFunction(e) ? this.each(function (t) {
                K(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = K(this), i = t.contents();
                i.length ? i.wrapAll(e) : t.append(e)
            })
        }, wrap: function (e) {
            var t = K.isFunction(e);
            return this.each(function (i) {
                K(this).wrapAll(t ? e.call(this, i) : e)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                K.nodeName(this, "body") || K(this).replaceWith(this.childNodes)
            }).end()
        }, append: function () {
            return this.domManip(arguments, !0, function (e) {
                (1 === this.nodeType || 11 === this.nodeType) && this.appendChild(e)
            })
        }, prepend: function () {
            return this.domManip(arguments, !0, function (e) {
                (1 === this.nodeType || 11 === this.nodeType) && this.insertBefore(e, this.firstChild)
            })
        }, before: function () {
            if (!r(this[0])) return this.domManip(arguments, !1, function (e) {
                this.parentNode.insertBefore(e, this)
            });
            if (arguments.length) {
                var e = K.clean(arguments);
                return this.pushStack(K.merge(e, this), "before", this.selector)
            }
        }, after: function () {
            if (!r(this[0])) return this.domManip(arguments, !1, function (e) {
                this.parentNode.insertBefore(e, this.nextSibling)
            });
            if (arguments.length) {
                var e = K.clean(arguments);
                return this.pushStack(K.merge(this, e), "after", this.selector)
            }
        }, remove: function (e, t) {
            for (var i, n = 0; null != (i = this[n]); n++) (!e || K.filter(e, [i]).length) && (t || 1 !== i.nodeType || (K.cleanData(i.getElementsByTagName("*")), K.cleanData([i])), i.parentNode && i.parentNode.removeChild(i));
            return this
        }, empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) for (1 === e.nodeType && K.cleanData(e.getElementsByTagName("*")); e.firstChild;) e.removeChild(e.firstChild);
            return this
        }, clone: function (e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () {
                return K.clone(this, e, t)
            })
        }, html: function (e) {
            return K.access(this, function (e) {
                var i = this[0] || {}, n = 0, a = this.length;
                if (e === t) return 1 === i.nodeType ? i.innerHTML.replace(Ht, "") : t;
                if (!("string" != typeof e || $t.test(e) || !K.support.htmlSerialize && Jt.test(e) || !K.support.leadingWhitespace && Vt.test(e) || Zt[(qt.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(zt, "<$1></$2>");
                    try {
                        for (; a > n; n++) i = this[n] || {}, 1 === i.nodeType && (K.cleanData(i.getElementsByTagName("*")), i.innerHTML = e);
                        i = 0
                    } catch (o) {
                    }
                }
                i && this.empty().append(e)
            }, null, e, arguments.length)
        }, replaceWith: function (e) {
            return r(this[0]) ? this.length ? this.pushStack(K(K.isFunction(e) ? e() : e), "replaceWith", e) : this : K.isFunction(e) ? this.each(function (t) {
                var i = K(this), n = i.html();
                i.replaceWith(e.call(this, t, n))
            }) : ("string" != typeof e && (e = K(e).detach()), this.each(function () {
                var t = this.nextSibling, i = this.parentNode;
                K(this).remove(), t ? K(t).before(e) : K(i).append(e)
            }))
        }, detach: function (e) {
            return this.remove(e, !0)
        }, domManip: function (e, i, n) {
            e = [].concat.apply([], e);
            var a, o, s, r, l = 0, c = e[0], d = [], p = this.length;
            if (!K.support.checkClone && p > 1 && "string" == typeof c && Xt.test(c)) return this.each(function () {
                K(this).domManip(e, i, n)
            });
            if (K.isFunction(c)) return this.each(function (a) {
                var o = K(this);
                e[0] = c.call(this, a, i ? o.html() : t), o.domManip(e, i, n)
            });
            if (this[0]) {
                if (a = K.buildFragment(e, this, d), s = a.fragment, o = s.firstChild, 1 === s.childNodes.length && (s = o), o) for (i = i && K.nodeName(o, "tr"), r = a.cacheable || p - 1; p > l; l++) n.call(i && K.nodeName(this[l], "table") ? u(this[l], "tbody") : this[l], l === r ? s : K.clone(s, !0, !0));
                s = o = null, d.length && K.each(d, function (e, t) {
                    t.src ? K.ajax ? K.ajax({
                        url: t.src,
                        type: "GET",
                        dataType: "script",
                        async: !1,
                        global: !1,
                        "throws": !0
                    }) : K.error("no ajax") : K.globalEval((t.text || t.textContent || t.innerHTML || "").replace(Kt, "")), t.parentNode && t.parentNode.removeChild(t)
                })
            }
            return this
        }
    }), K.buildFragment = function (e, i, n) {
        var a, o, s, r = e[0];
        return i = i || V, i = !i.nodeType && i[0] || i, i = i.ownerDocument || i, !(1 === e.length && "string" == typeof r && r.length < 512 && i === V && "<" === r.charAt(0)) || Gt.test(r) || !K.support.checkClone && Xt.test(r) || !K.support.html5Clone && Jt.test(r) || (o = !0, a = K.fragments[r], s = a !== t), a || (a = i.createDocumentFragment(), K.clean(e, i, a, n), o && (K.fragments[r] = s && a)), {
            fragment: a,
            cacheable: o
        }
    }, K.fragments = {}, K.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        K.fn[e] = function (i) {
            var n, a = 0, o = [], s = K(i), r = s.length, l = 1 === this.length && this[0].parentNode;
            if ((null == l || l && 11 === l.nodeType && 1 === l.childNodes.length) && 1 === r) return s[t](this[0]), this;
            for (; r > a; a++) n = (a > 0 ? this.clone(!0) : this).get(), K(s[a])[t](n), o = o.concat(n);
            return this.pushStack(o, e, s.selector)
        }
    }), K.extend({
        clone: function (e, t, i) {
            var n, a, o, s;
            if (K.support.html5Clone || K.isXMLDoc(e) || !Jt.test("<" + e.nodeName + ">") ? s = e.cloneNode(!0) : (ti.innerHTML = e.outerHTML, ti.removeChild(s = ti.firstChild)), !(K.support.noCloneEvent && K.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || K.isXMLDoc(e))) for (h(e, s), n = f(e), a = f(s), o = 0; n[o]; ++o) a[o] && h(n[o], a[o]);
            if (t && (p(e, s), i)) for (n = f(e), a = f(s), o = 0; n[o]; ++o) p(n[o], a[o]);
            return n = a = null, s
        }, clean: function (e, t, i, n) {
            var a, o, s, r, l, c, u, p, h, f, g, v = t === V && ei, y = [];
            for (t && "undefined" != typeof t.createDocumentFragment || (t = V), a = 0; null != (s = e[a]); a++) if ("number" == typeof s && (s += ""), s) {
                if ("string" == typeof s) if (Wt.test(s)) {
                    for (v = v || d(t), u = t.createElement("div"), v.appendChild(u), s = s.replace(zt, "<$1></$2>"), r = (qt.exec(s) || ["", ""])[1].toLowerCase(), l = Zt[r] || Zt._default, c = l[0], u.innerHTML = l[1] + s + l[2]; c--;) u = u.lastChild;
                    if (!K.support.tbody) for (p = Ut.test(s), h = "table" !== r || p ? "<table>" !== l[1] || p ? [] : u.childNodes : u.firstChild && u.firstChild.childNodes, o = h.length - 1; o >= 0; --o) K.nodeName(h[o], "tbody") && !h[o].childNodes.length && h[o].parentNode.removeChild(h[o]);
                    !K.support.leadingWhitespace && Vt.test(s) && u.insertBefore(t.createTextNode(Vt.exec(s)[0]), u.firstChild), s = u.childNodes, u.parentNode.removeChild(u)
                } else s = t.createTextNode(s);
                s.nodeType ? y.push(s) : K.merge(y, s)
            }
            if (u && (s = u = v = null), !K.support.appendChecked) for (a = 0; null != (s = y[a]); a++) K.nodeName(s, "input") ? m(s) : "undefined" != typeof s.getElementsByTagName && K.grep(s.getElementsByTagName("input"), m);
            if (i) for (f = function (e) {
                return !e.type || Yt.test(e.type) ? n ? n.push(e.parentNode ? e.parentNode.removeChild(e) : e) : i.appendChild(e) : void 0
            }, a = 0; null != (s = y[a]); a++) K.nodeName(s, "script") && f(s) || (i.appendChild(s), "undefined" != typeof s.getElementsByTagName && (g = K.grep(K.merge([], s.getElementsByTagName("script")), f), y.splice.apply(y, [a + 1, 0].concat(g)), a += g.length));
            return y
        }, cleanData: function (e, t) {
            for (var i, n, a, o, s = 0, r = K.expando, l = K.cache, c = K.support.deleteExpando, d = K.event.special; null != (a = e[s]); s++) if ((t || K.acceptData(a)) && (n = a[r], i = n && l[n])) {
                if (i.events) for (o in i.events) d[o] ? K.event.remove(a, o) : K.removeEvent(a, o, i.handle);
                l[n] && (delete l[n], c ? delete a[r] : a.removeAttribute ? a.removeAttribute(r) : a[r] = null, K.deletedIds.push(n))
            }
        }
    }), function () {
        var e, t;
        K.uaMatch = function (e) {
            e = e.toLowerCase();
            var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
            return {browser: t[1] || "", version: t[2] || "0"}
        }, e = K.uaMatch(q.userAgent), t = {}, e.browser && (t[e.browser] = !0, t.version = e.version), t.chrome ? t.webkit = !0 : t.webkit && (t.safari = !0), K.browser = t, K.sub = function () {
            function e(t, i) {
                return new e.fn.init(t, i)
            }

            K.extend(!0, e, this), e.superclass = this, e.fn = e.prototype = this(), e.fn.constructor = e, e.sub = this.sub, e.fn.init = function (i, n) {
                return n && n instanceof K && !(n instanceof e) && (n = e(n)), K.fn.init.call(this, i, n, t)
            }, e.fn.init.prototype = e.fn;
            var t = e(V);
            return e
        }
    }();
    var ii, ni, ai, oi = /alpha\([^)]*\)/i, si = /opacity=([^)]*)/, ri = /^(top|right|bottom|left)$/,
        li = /^(none|table(?!-c[ea]).+)/, ci = /^margin/, di = new RegExp("^(" + Z + ")(.*)$", "i"),
        ui = new RegExp("^(" + Z + ")(?!px)[a-z%]+$", "i"), pi = new RegExp("^([-+])=(" + Z + ")", "i"), hi = {},
        fi = {position: "absolute", visibility: "hidden", display: "block"}, mi = {letterSpacing: 0, fontWeight: 400},
        gi = ["Top", "Right", "Bottom", "Left"], vi = ["Webkit", "O", "Moz", "ms"], yi = K.fn.toggle;
    K.fn.extend({
        css: function (e, i) {
            return K.access(this, function (e, i, n) {
                return n !== t ? K.style(e, i, n) : K.css(e, i)
            }, e, i, arguments.length > 1)
        }, show: function () {
            return y(this, !0)
        }, hide: function () {
            return y(this)
        }, toggle: function (e, t) {
            var i = "boolean" == typeof e;
            return K.isFunction(e) && K.isFunction(t) ? yi.apply(this, arguments) : this.each(function () {
                (i ? e : v(this)) ? K(this).show() : K(this).hide()
            })
        }
    }), K.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var i = ii(e, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {"float": K.support.cssFloat ? "cssFloat" : "styleFloat"},
        style: function (e, i, n, a) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, s, r, l = K.camelCase(i), c = e.style;
                if (i = K.cssProps[l] || (K.cssProps[l] = g(c, l)), r = K.cssHooks[i] || K.cssHooks[l], n === t) return r && "get" in r && (o = r.get(e, !1, a)) !== t ? o : c[i];
                if (s = typeof n, "string" === s && (o = pi.exec(n)) && (n = (o[1] + 1) * o[2] + parseFloat(K.css(e, i)), s = "number"), !(null == n || "number" === s && isNaN(n) || ("number" !== s || K.cssNumber[l] || (n += "px"), r && "set" in r && (n = r.set(e, n, a)) === t))) try {
                    c[i] = n
                } catch (d) {
                }
            }
        },
        css: function (e, i, n, a) {
            var o, s, r, l = K.camelCase(i);
            return i = K.cssProps[l] || (K.cssProps[l] = g(e.style, l)), r = K.cssHooks[i] || K.cssHooks[l], r && "get" in r && (o = r.get(e, !0, a)), o === t && (o = ii(e, i)), "normal" === o && i in mi && (o = mi[i]), n || a !== t ? (s = parseFloat(o), n || K.isNumeric(s) ? s || 0 : o) : o
        },
        swap: function (e, t, i) {
            var n, a, o = {};
            for (a in t) o[a] = e.style[a], e.style[a] = t[a];
            n = i.call(e);
            for (a in t) e.style[a] = o[a];
            return n
        }
    }), e.getComputedStyle ? ii = function (t, i) {
        var n, a, o, s, r = e.getComputedStyle(t, null), l = t.style;
        return r && (n = r[i], "" !== n || K.contains(t.ownerDocument, t) || (n = K.style(t, i)), ui.test(n) && ci.test(i) && (a = l.width, o = l.minWidth, s = l.maxWidth, l.minWidth = l.maxWidth = l.width = n, n = r.width, l.width = a, l.minWidth = o, l.maxWidth = s)), n
    } : V.documentElement.currentStyle && (ii = function (e, t) {
        var i, n, a = e.currentStyle && e.currentStyle[t], o = e.style;
        return null == a && o && o[t] && (a = o[t]), ui.test(a) && !ri.test(t) && (i = o.left, n = e.runtimeStyle && e.runtimeStyle.left, n && (e.runtimeStyle.left = e.currentStyle.left), o.left = "fontSize" === t ? "1em" : a, a = o.pixelLeft + "px", o.left = i, n && (e.runtimeStyle.left = n)), "" === a ? "auto" : a
    }), K.each(["height", "width"], function (e, t) {
        K.cssHooks[t] = {
            get: function (e, i, n) {
                return i ? 0 === e.offsetWidth && li.test(ii(e, "display")) ? K.swap(e, fi, function () {
                    return w(e, t, n)
                }) : w(e, t, n) : void 0
            }, set: function (e, i, n) {
                return b(e, i, n ? x(e, t, n, K.support.boxSizing && "border-box" === K.css(e, "boxSizing")) : 0)
            }
        }
    }), K.support.opacity || (K.cssHooks.opacity = {
        get: function (e, t) {
            return si.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        }, set: function (e, t) {
            var i = e.style, n = e.currentStyle, a = K.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                o = n && n.filter || i.filter || "";
            i.zoom = 1, t >= 1 && "" === K.trim(o.replace(oi, "")) && i.removeAttribute && (i.removeAttribute("filter"), n && !n.filter) || (i.filter = oi.test(o) ? o.replace(oi, a) : o + " " + a)
        }
    }), K(function () {
        K.support.reliableMarginRight || (K.cssHooks.marginRight = {
            get: function (e, t) {
                return K.swap(e, {display: "inline-block"}, function () {
                    return t ? ii(e, "marginRight") : void 0
                })
            }
        }), !K.support.pixelPosition && K.fn.position && K.each(["top", "left"], function (e, t) {
            K.cssHooks[t] = {
                get: function (e, i) {
                    if (i) {
                        var n = ii(e, t);
                        return ui.test(n) ? K(e).position()[t] + "px" : n
                    }
                }
            }
        })
    }), K.expr && K.expr.filters && (K.expr.filters.hidden = function (e) {
        return 0 === e.offsetWidth && 0 === e.offsetHeight || !K.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || ii(e, "display"))
    }, K.expr.filters.visible = function (e) {
        return !K.expr.filters.hidden(e)
    }), K.each({margin: "", padding: "", border: "Width"}, function (e, t) {
        K.cssHooks[e + t] = {
            expand: function (i) {
                var n, a = "string" == typeof i ? i.split(" ") : [i], o = {};
                for (n = 0; 4 > n; n++) o[e + gi[n] + t] = a[n] || a[n - 2] || a[0];
                return o
            }
        }, ci.test(e) || (K.cssHooks[e + t].set = b)
    });
    var bi = /%20/g, xi = /\[\]$/, wi = /\r?\n/g,
        ki = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        _i = /^(?:select|textarea)/i;
    K.fn.extend({
        serialize: function () {
            return K.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                return this.elements ? K.makeArray(this.elements) : this
            }).filter(function () {
                return this.name && !this.disabled && (this.checked || _i.test(this.nodeName) || ki.test(this.type))
            }).map(function (e, t) {
                var i = K(this).val();
                return null == i ? null : K.isArray(i) ? K.map(i, function (e) {
                    return {name: t.name, value: e.replace(wi, "\r\n")}
                }) : {name: t.name, value: i.replace(wi, "\r\n")}
            }).get()
        }
    }), K.param = function (e, i) {
        var n, a = [], o = function (e, t) {
            t = K.isFunction(t) ? t() : null == t ? "" : t, a[a.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (i === t && (i = K.ajaxSettings && K.ajaxSettings.traditional), K.isArray(e) || e.jquery && !K.isPlainObject(e)) K.each(e, function () {
            o(this.name, this.value)
        }); else for (n in e) _(n, e[n], i, o);
        return a.join("&").replace(bi, "+")
    };
    var Ei, Ti, Ci = /#.*$/, Si = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Ii = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/, Ai = /^(?:GET|HEAD)$/, Pi = /^\/\//,
        Di = /\?/, Ni = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, Mi = /([?&])_=[^&]*/,
        Fi = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, Li = K.fn.load, ji = {}, Bi = {}, Oi = ["*/"] + ["*"];
    try {
        Ti = z.href
    } catch (Ri) {
        Ti = V.createElement("a"), Ti.href = "", Ti = Ti.href
    }
    Ei = Fi.exec(Ti.toLowerCase()) || [], K.fn.load = function (e, i, n) {
        if ("string" != typeof e && Li) return Li.apply(this, arguments);
        if (!this.length) return this;
        var a, o, s, r = this, l = e.indexOf(" ");
        return l >= 0 && (a = e.slice(l, e.length), e = e.slice(0, l)), K.isFunction(i) ? (n = i, i = t) : i && "object" == typeof i && (o = "POST"), K.ajax({
            url: e,
            type: o,
            dataType: "html",
            data: i,
            complete: function (e, t) {
                n && r.each(n, s || [e.responseText, t, e])
            }
        }).done(function (e) {
            s = arguments, r.html(a ? K("<div>").append(e.replace(Ni, "")).find(a) : e)
        }), this
    }, K.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (e, t) {
        K.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), K.each(["get", "post"], function (e, i) {
        K[i] = function (e, n, a, o) {
            return K.isFunction(n) && (o = o || a, a = n, n = t), K.ajax({
                type: i,
                url: e,
                data: n,
                success: a,
                dataType: o
            })
        }
    }), K.extend({
        getScript: function (e, i) {
            return K.get(e, t, i, "script")
        },
        getJSON: function (e, t, i) {
            return K.get(e, t, i, "json")
        },
        ajaxSetup: function (e, t) {
            return t ? C(e, K.ajaxSettings) : (t = e, e = K.ajaxSettings), C(e, t), e
        },
        ajaxSettings: {
            url: Ti,
            isLocal: Ii.test(Ei[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": Oi
            },
            contents: {xml: /xml/, html: /html/, json: /json/},
            responseFields: {xml: "responseXML", text: "responseText"},
            converters: {"* text": e.String, "text html": !0, "text json": K.parseJSON, "text xml": K.parseXML},
            flatOptions: {context: !0, url: !0}
        },
        ajaxPrefilter: E(ji),
        ajaxTransport: E(Bi),
        ajax: function (e, i) {
            function n(e, i, n, s) {
                var c, u, y, b, w, _ = i;
                2 !== x && (x = 2, l && clearTimeout(l), r = t, o = s || "", k.readyState = e > 0 ? 4 : 0, n && (b = S(p, k, n)), e >= 200 && 300 > e || 304 === e ? (p.ifModified && (w = k.getResponseHeader("Last-Modified"), w && (K.lastModified[a] = w), w = k.getResponseHeader("Etag"), w && (K.etag[a] = w)), 304 === e ? (_ = "notmodified", c = !0) : (c = I(p, b), _ = c.state, u = c.data, y = c.error, c = !y)) : (y = _, (!_ || e) && (_ = "error", 0 > e && (e = 0))), k.status = e, k.statusText = (i || _) + "", c ? m.resolveWith(h, [u, _, k]) : m.rejectWith(h, [k, _, y]), k.statusCode(v), v = t, d && f.trigger("ajax" + (c ? "Success" : "Error"), [k, p, c ? u : y]), g.fireWith(h, [k, _]), d && (f.trigger("ajaxComplete", [k, p]), --K.active || K.event.trigger("ajaxStop")))
            }

            "object" == typeof e && (i = e, e = t), i = i || {};
            var a, o, s, r, l, c, d, u, p = K.ajaxSetup({}, i), h = p.context || p,
                f = h !== p && (h.nodeType || h instanceof K) ? K(h) : K.event, m = K.Deferred(),
                g = K.Callbacks("once memory"), v = p.statusCode || {}, y = {}, b = {}, x = 0, w = "canceled", k = {
                    readyState: 0, setRequestHeader: function (e, t) {
                        if (!x) {
                            var i = e.toLowerCase();
                            e = b[i] = b[i] || e, y[e] = t
                        }
                        return this
                    }, getAllResponseHeaders: function () {
                        return 2 === x ? o : null
                    }, getResponseHeader: function (e) {
                        var i;
                        if (2 === x) {
                            if (!s) for (s = {}; i = Si.exec(o);) s[i[1].toLowerCase()] = i[2];
                            i = s[e.toLowerCase()]
                        }
                        return i === t ? null : i
                    }, overrideMimeType: function (e) {
                        return x || (p.mimeType = e), this
                    }, abort: function (e) {
                        return e = e || w, r && r.abort(e), n(0, e), this
                    }
                };
            if (m.promise(k), k.success = k.done, k.error = k.fail, k.complete = g.add, k.statusCode = function (e) {
                if (e) {
                    var t;
                    if (2 > x) for (t in e) v[t] = [v[t], e[t]]; else t = e[k.status], k.always(t)
                }
                return this
            }, p.url = ((e || p.url) + "").replace(Ci, "").replace(Pi, Ei[1] + "//"), p.dataTypes = K.trim(p.dataType || "*").toLowerCase().split(tt), null == p.crossDomain && (c = Fi.exec(p.url.toLowerCase()) || !1, p.crossDomain = c && c.join(":") + (c[3] ? "" : "http:" === c[1] ? 80 : 443) !== Ei.join(":") + (Ei[3] ? "" : "http:" === Ei[1] ? 80 : 443)), p.data && p.processData && "string" != typeof p.data && (p.data = K.param(p.data, p.traditional)), T(ji, p, i, k), 2 === x) return k;
            if (d = p.global, p.type = p.type.toUpperCase(), p.hasContent = !Ai.test(p.type), d && 0 === K.active++ && K.event.trigger("ajaxStart"), !p.hasContent && (p.data && (p.url += (Di.test(p.url) ? "&" : "?") + p.data, delete p.data), a = p.url, p.cache === !1)) {
                var _ = K.now(), E = p.url.replace(Mi, "$1_=" + _);
                p.url = E + (E === p.url ? (Di.test(p.url) ? "&" : "?") + "_=" + _ : "")
            }
            (p.data && p.hasContent && p.contentType !== !1 || i.contentType) && k.setRequestHeader("Content-Type", p.contentType), p.ifModified && (a = a || p.url, K.lastModified[a] && k.setRequestHeader("If-Modified-Since", K.lastModified[a]), K.etag[a] && k.setRequestHeader("If-None-Match", K.etag[a])), k.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Oi + "; q=0.01" : "") : p.accepts["*"]);
            for (u in p.headers) k.setRequestHeader(u, p.headers[u]);
            if (p.beforeSend && (p.beforeSend.call(h, k, p) === !1 || 2 === x)) return k.abort();
            w = "abort";
            for (u in{success: 1, error: 1, complete: 1}) k[u](p[u]);
            if (r = T(Bi, p, i, k)) {
                k.readyState = 1, d && f.trigger("ajaxSend", [k, p]), p.async && p.timeout > 0 && (l = setTimeout(function () {
                    k.abort("timeout")
                }, p.timeout));
                try {
                    x = 1, r.send(y, n)
                } catch (C) {
                    if (!(2 > x)) throw C;
                    n(-1, C)
                }
            } else n(-1, "No Transport");
            return k
        },
        active: 0,
        lastModified: {},
        etag: {}
    });
    var Hi = [], Vi = /\?/, zi = /(=)\?(?=&|$)|\?\?/, qi = K.now();
    K.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var e = Hi.pop() || K.expando + "_" + qi++;
            return this[e] = !0, e
        }
    }), K.ajaxPrefilter("json jsonp", function (i, n, a) {
        var o, s, r, l = i.data, c = i.url, d = i.jsonp !== !1, u = d && zi.test(c),
            p = d && !u && "string" == typeof l && !(i.contentType || "").indexOf("application/x-www-form-urlencoded") && zi.test(l);
        return "jsonp" === i.dataTypes[0] || u || p ? (o = i.jsonpCallback = K.isFunction(i.jsonpCallback) ? i.jsonpCallback() : i.jsonpCallback, s = e[o], u ? i.url = c.replace(zi, "$1" + o) : p ? i.data = l.replace(zi, "$1" + o) : d && (i.url += (Vi.test(c) ? "&" : "?") + i.jsonp + "=" + o), i.converters["script json"] = function () {
            return r || K.error(o + " was not called"), r[0]
        }, i.dataTypes[0] = "json", e[o] = function () {
            r = arguments
        }, a.always(function () {
            e[o] = s, i[o] && (i.jsonpCallback = n.jsonpCallback, Hi.push(o)), r && K.isFunction(s) && s(r[0]), r = s = t
        }), "script") : void 0
    }), K.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /javascript|ecmascript/},
        converters: {
            "text script": function (e) {
                return K.globalEval(e), e
            }
        }
    }), K.ajaxPrefilter("script", function (e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), K.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var i, n = V.head || V.getElementsByTagName("head")[0] || V.documentElement;
            return {
                send: function (a, o) {
                    i = V.createElement("script"), i.async = "async", e.scriptCharset && (i.charset = e.scriptCharset), i.src = e.url, i.onload = i.onreadystatechange = function (e, a) {
                        (a || !i.readyState || /loaded|complete/.test(i.readyState)) && (i.onload = i.onreadystatechange = null, n && i.parentNode && n.removeChild(i), i = t, a || o(200, "success"))
                    }, n.insertBefore(i, n.firstChild)
                }, abort: function () {
                    i && i.onload(0, 1)
                }
            }
        }
    });
    var Ui, Wi = e.ActiveXObject ? function () {
        for (var e in Ui) Ui[e](0, 1)
    } : !1, $i = 0;
    K.ajaxSettings.xhr = e.ActiveXObject ? function () {
        return !this.isLocal && A() || P()
    } : A, function (e) {
        K.extend(K.support, {ajax: !!e, cors: !!e && "withCredentials" in e})
    }(K.ajaxSettings.xhr()), K.support.ajax && K.ajaxTransport(function (i) {
        if (!i.crossDomain || K.support.cors) {
            var n;
            return {
                send: function (a, o) {
                    var s, r, l = i.xhr();
                    if (i.username ? l.open(i.type, i.url, i.async, i.username, i.password) : l.open(i.type, i.url, i.async), i.xhrFields) for (r in i.xhrFields) l[r] = i.xhrFields[r];
                    i.mimeType && l.overrideMimeType && l.overrideMimeType(i.mimeType), i.crossDomain || a["X-Requested-With"] || (a["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (r in a) l.setRequestHeader(r, a[r])
                    } catch (c) {
                    }
                    l.send(i.hasContent && i.data || null), n = function (e, a) {
                        var r, c, d, u, p;
                        try {
                            if (n && (a || 4 === l.readyState)) if (n = t, s && (l.onreadystatechange = K.noop, Wi && delete Ui[s]), a) 4 !== l.readyState && l.abort(); else {
                                r = l.status, d = l.getAllResponseHeaders(), u = {}, p = l.responseXML, p && p.documentElement && (u.xml = p);
                                try {
                                    u.text = l.responseText
                                } catch (e) {
                                }
                                try {
                                    c = l.statusText
                                } catch (h) {
                                    c = ""
                                }
                                r || !i.isLocal || i.crossDomain ? 1223 === r && (r = 204) : r = u.text ? 200 : 404
                            }
                        } catch (f) {
                            a || o(-1, f)
                        }
                        u && o(r, c, u, d)
                    }, i.async ? 4 === l.readyState ? setTimeout(n, 0) : (s = ++$i, Wi && (Ui || (Ui = {}, K(e).unload(Wi)), Ui[s] = n), l.onreadystatechange = n) : n()
                }, abort: function () {
                    n && n(0, 1)
                }
            }
        }
    });
    var Gi, Ji, Qi = /^(?:toggle|show|hide)$/, Xi = new RegExp("^(?:([-+])=|)(" + Z + ")([a-z%]*)$", "i"),
        Yi = /queueHooks$/, Ki = [L], Zi = {
            "*": [function (e, t) {
                var i, n, a = this.createTween(e, t), o = Xi.exec(t), s = a.cur(), r = +s || 0, l = 1, c = 20;
                if (o) {
                    if (i = +o[2], n = o[3] || (K.cssNumber[e] ? "" : "px"), "px" !== n && r) {
                        r = K.css(a.elem, e, !0) || i || 1;
                        do l = l || ".5", r /= l, K.style(a.elem, e, r + n); while (l !== (l = a.cur() / s) && 1 !== l && --c)
                    }
                    a.unit = n, a.start = r, a.end = o[1] ? r + (o[1] + 1) * i : i
                }
                return a
            }]
        };
    K.Animation = K.extend(M, {
        tweener: function (e, t) {
            K.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            for (var i, n = 0, a = e.length; a > n; n++) i = e[n], Zi[i] = Zi[i] || [], Zi[i].unshift(t)
        }, prefilter: function (e, t) {
            t ? Ki.unshift(e) : Ki.push(e)
        }
    }), K.Tween = j, j.prototype = {
        constructor: j, init: function (e, t, i, n, a, o) {
            this.elem = e, this.prop = i, this.easing = a || "swing", this.options = t, this.start = this.now = this.cur(), this.end = n, this.unit = o || (K.cssNumber[i] ? "" : "px")
        }, cur: function () {
            var e = j.propHooks[this.prop];
            return e && e.get ? e.get(this) : j.propHooks._default.get(this)
        }, run: function (e) {
            var t, i = j.propHooks[this.prop];
            return this.pos = t = this.options.duration ? K.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : j.propHooks._default.set(this), this
        }
    }, j.prototype.init.prototype = j.prototype, j.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = K.css(e.elem, e.prop, !1, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            }, set: function (e) {
                K.fx.step[e.prop] ? K.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[K.cssProps[e.prop]] || K.cssHooks[e.prop]) ? K.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, j.propHooks.scrollTop = j.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, K.each(["toggle", "show", "hide"], function (e, t) {
        var i = K.fn[t];
        K.fn[t] = function (n, a, o) {
            return null == n || "boolean" == typeof n || !e && K.isFunction(n) && K.isFunction(a) ? i.apply(this, arguments) : this.animate(B(t, !0), n, a, o)
        }
    }), K.fn.extend({
        fadeTo: function (e, t, i, n) {
            return this.filter(v).css("opacity", 0).show().end().animate({opacity: t}, e, i, n)
        }, animate: function (e, t, i, n) {
            var a = K.isEmptyObject(e), o = K.speed(t, i, n), s = function () {
                var t = M(this, K.extend({}, e), o);
                a && t.stop(!0)
            };
            return a || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
        }, stop: function (e, i, n) {
            var a = function (e) {
                var t = e.stop;
                delete e.stop, t(n)
            };
            return "string" != typeof e && (n = i, i = e, e = t), i && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                var t = !0, i = null != e && e + "queueHooks", o = K.timers, s = K._data(this);
                if (i) s[i] && s[i].stop && a(s[i]); else for (i in s) s[i] && s[i].stop && Yi.test(i) && a(s[i]);
                for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                (t || !n) && K.dequeue(this, e)
            })
        }
    }), K.each({
        slideDown: B("show"),
        slideUp: B("hide"),
        slideToggle: B("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (e, t) {
        K.fn[e] = function (e, i, n) {
            return this.animate(t, e, i, n)
        }
    }), K.speed = function (e, t, i) {
        var n = e && "object" == typeof e ? K.extend({}, e) : {
            complete: i || !i && t || K.isFunction(e) && e,
            duration: e,
            easing: i && t || t && !K.isFunction(t) && t
        };
        return n.duration = K.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in K.fx.speeds ? K.fx.speeds[n.duration] : K.fx.speeds._default, (null == n.queue || n.queue === !0) && (n.queue = "fx"), n.old = n.complete, n.complete = function () {
            K.isFunction(n.old) && n.old.call(this), n.queue && K.dequeue(this, n.queue)
        }, n
    }, K.easing = {
        linear: function (e) {
            return e
        }, swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, K.timers = [], K.fx = j.prototype.init, K.fx.tick = function () {
        for (var e, t = K.timers, i = 0; i < t.length; i++) e = t[i], e() || t[i] !== e || t.splice(i--, 1);
        t.length || K.fx.stop()
    }, K.fx.timer = function (e) {
        e() && K.timers.push(e) && !Ji && (Ji = setInterval(K.fx.tick, K.fx.interval))
    }, K.fx.interval = 13, K.fx.stop = function () {
        clearInterval(Ji), Ji = null
    }, K.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, K.fx.step = {}, K.expr && K.expr.filters && (K.expr.filters.animated = function (e) {
        return K.grep(K.timers, function (t) {
            return e === t.elem
        }).length
    });
    var en = /^(?:body|html)$/i;
    K.fn.offset = function (e) {
        if (arguments.length) return e === t ? this : this.each(function (t) {
            K.offset.setOffset(this, e, t)
        });
        var i, n, a, o, s, r, l, c = {top: 0, left: 0}, d = this[0], u = d && d.ownerDocument;
        if (u) return (n = u.body) === d ? K.offset.bodyOffset(d) : (i = u.documentElement, K.contains(i, d) ? ("undefined" != typeof d.getBoundingClientRect && (c = d.getBoundingClientRect()), a = O(u), o = i.clientTop || n.clientTop || 0, s = i.clientLeft || n.clientLeft || 0, r = a.pageYOffset || i.scrollTop, l = a.pageXOffset || i.scrollLeft, {
            top: c.top + r - o,
            left: c.left + l - s
        }) : c)
    }, K.offset = {
        bodyOffset: function (e) {
            var t = e.offsetTop, i = e.offsetLeft;
            return K.support.doesNotIncludeMarginInBodyOffset && (t += parseFloat(K.css(e, "marginTop")) || 0, i += parseFloat(K.css(e, "marginLeft")) || 0), {
                top: t,
                left: i
            }
        }, setOffset: function (e, t, i) {
            var n = K.css(e, "position");
            "static" === n && (e.style.position = "relative");
            var a, o, s = K(e), r = s.offset(), l = K.css(e, "top"), c = K.css(e, "left"),
                d = ("absolute" === n || "fixed" === n) && K.inArray("auto", [l, c]) > -1, u = {}, p = {};
            d ? (p = s.position(), a = p.top, o = p.left) : (a = parseFloat(l) || 0, o = parseFloat(c) || 0), K.isFunction(t) && (t = t.call(e, i, r)), null != t.top && (u.top = t.top - r.top + a), null != t.left && (u.left = t.left - r.left + o), "using" in t ? t.using.call(e, u) : s.css(u)
        }
    }, K.fn.extend({
        position: function () {
            if (this[0]) {
                var e = this[0], t = this.offsetParent(), i = this.offset(),
                    n = en.test(t[0].nodeName) ? {top: 0, left: 0} : t.offset();
                return i.top -= parseFloat(K.css(e, "marginTop")) || 0, i.left -= parseFloat(K.css(e, "marginLeft")) || 0, n.top += parseFloat(K.css(t[0], "borderTopWidth")) || 0, n.left += parseFloat(K.css(t[0], "borderLeftWidth")) || 0, {
                    top: i.top - n.top,
                    left: i.left - n.left
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent || V.body; e && !en.test(e.nodeName) && "static" === K.css(e, "position");) e = e.offsetParent;
                return e || V.body
            })
        }
    }), K.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, i) {
        var n = /Y/.test(i);
        K.fn[e] = function (a) {
            return K.access(this, function (e, a, o) {
                var s = O(e);
                return o === t ? s ? i in s ? s[i] : s.document.documentElement[a] : e[a] : (s ? s.scrollTo(n ? K(s).scrollLeft() : o, n ? o : K(s).scrollTop()) : e[a] = o, void 0)
            }, e, a, arguments.length, null)
        }
    }), K.each({Height: "height", Width: "width"}, function (e, i) {
        K.each({padding: "inner" + e, content: i, "": "outer" + e}, function (n, a) {
            K.fn[a] = function (a, o) {
                var s = arguments.length && (n || "boolean" != typeof a),
                    r = n || (a === !0 || o === !0 ? "margin" : "border");
                return K.access(this, function (i, n, a) {
                    var o;
                    return K.isWindow(i) ? i.document.documentElement["client" + e] : 9 === i.nodeType ? (o = i.documentElement, Math.max(i.body["scroll" + e], o["scroll" + e], i.body["offset" + e], o["offset" + e], o["client" + e])) : a === t ? K.css(i, n, a, r) : K.style(i, n, a, r)
                }, i, s ? a : t, s, null)
            }
        })
    }), e.jQuery = e.$ = K, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function () {
        return K
    })
}(window);