/*! ablejs - v0.2.0 - Thursday, April 12th, 2018, 1:01:01 PM
* http://www.ablesky.com
* Copyright (c) 2018 frontend@ablesky.com; Licensed  */
function hex_md5(e) {
    return binl2hex(core_md5(str2binl(e), e.length * chrsz))
}

function b64_md5(e) {
    return binl2b64(core_md5(str2binl(e), e.length * chrsz))
}

function str_md5(e) {
    return binl2str(core_md5(str2binl(e), e.length * chrsz))
}

function hex_hmac_md5(e, t) {
    return binl2hex(core_hmac_md5(e, t))
}

function b64_hmac_md5(e, t) {
    return binl2b64(core_hmac_md5(e, t))
}

function str_hmac_md5(e, t) {
    return binl2str(core_hmac_md5(e, t))
}

function md5_vm_test() {
    return "900150983cd24fb0d6963f7d28e17f72" == hex_md5("abc")
}

function core_md5(e, t) {
    e[t >> 5] |= 128 << t % 32, e[(t + 64 >>> 9 << 4) + 14] = t;
    for (var i = 1732584193, o = -271733879, n = -1732584194, s = 271733878, a = 0; a < e.length; a += 16) {
        var r = i, l = o, c = n, d = s;
        i = md5_ff(i, o, n, s, e[a + 0], 7, -680876936), s = md5_ff(s, i, o, n, e[a + 1], 12, -389564586), n = md5_ff(n, s, i, o, e[a + 2], 17, 606105819), o = md5_ff(o, n, s, i, e[a + 3], 22, -1044525330), i = md5_ff(i, o, n, s, e[a + 4], 7, -176418897), s = md5_ff(s, i, o, n, e[a + 5], 12, 1200080426), n = md5_ff(n, s, i, o, e[a + 6], 17, -1473231341), o = md5_ff(o, n, s, i, e[a + 7], 22, -45705983), i = md5_ff(i, o, n, s, e[a + 8], 7, 1770035416), s = md5_ff(s, i, o, n, e[a + 9], 12, -1958414417), n = md5_ff(n, s, i, o, e[a + 10], 17, -42063), o = md5_ff(o, n, s, i, e[a + 11], 22, -1990404162), i = md5_ff(i, o, n, s, e[a + 12], 7, 1804603682), s = md5_ff(s, i, o, n, e[a + 13], 12, -40341101), n = md5_ff(n, s, i, o, e[a + 14], 17, -1502002290), o = md5_ff(o, n, s, i, e[a + 15], 22, 1236535329), i = md5_gg(i, o, n, s, e[a + 1], 5, -165796510), s = md5_gg(s, i, o, n, e[a + 6], 9, -1069501632), n = md5_gg(n, s, i, o, e[a + 11], 14, 643717713), o = md5_gg(o, n, s, i, e[a + 0], 20, -373897302), i = md5_gg(i, o, n, s, e[a + 5], 5, -701558691), s = md5_gg(s, i, o, n, e[a + 10], 9, 38016083), n = md5_gg(n, s, i, o, e[a + 15], 14, -660478335), o = md5_gg(o, n, s, i, e[a + 4], 20, -405537848), i = md5_gg(i, o, n, s, e[a + 9], 5, 568446438), s = md5_gg(s, i, o, n, e[a + 14], 9, -1019803690), n = md5_gg(n, s, i, o, e[a + 3], 14, -187363961), o = md5_gg(o, n, s, i, e[a + 8], 20, 1163531501), i = md5_gg(i, o, n, s, e[a + 13], 5, -1444681467), s = md5_gg(s, i, o, n, e[a + 2], 9, -51403784), n = md5_gg(n, s, i, o, e[a + 7], 14, 1735328473), o = md5_gg(o, n, s, i, e[a + 12], 20, -1926607734), i = md5_hh(i, o, n, s, e[a + 5], 4, -378558), s = md5_hh(s, i, o, n, e[a + 8], 11, -2022574463), n = md5_hh(n, s, i, o, e[a + 11], 16, 1839030562), o = md5_hh(o, n, s, i, e[a + 14], 23, -35309556), i = md5_hh(i, o, n, s, e[a + 1], 4, -1530992060), s = md5_hh(s, i, o, n, e[a + 4], 11, 1272893353), n = md5_hh(n, s, i, o, e[a + 7], 16, -155497632), o = md5_hh(o, n, s, i, e[a + 10], 23, -1094730640), i = md5_hh(i, o, n, s, e[a + 13], 4, 681279174), s = md5_hh(s, i, o, n, e[a + 0], 11, -358537222), n = md5_hh(n, s, i, o, e[a + 3], 16, -722521979), o = md5_hh(o, n, s, i, e[a + 6], 23, 76029189), i = md5_hh(i, o, n, s, e[a + 9], 4, -640364487), s = md5_hh(s, i, o, n, e[a + 12], 11, -421815835), n = md5_hh(n, s, i, o, e[a + 15], 16, 530742520), o = md5_hh(o, n, s, i, e[a + 2], 23, -995338651), i = md5_ii(i, o, n, s, e[a + 0], 6, -198630844), s = md5_ii(s, i, o, n, e[a + 7], 10, 1126891415), n = md5_ii(n, s, i, o, e[a + 14], 15, -1416354905), o = md5_ii(o, n, s, i, e[a + 5], 21, -57434055), i = md5_ii(i, o, n, s, e[a + 12], 6, 1700485571), s = md5_ii(s, i, o, n, e[a + 3], 10, -1894986606), n = md5_ii(n, s, i, o, e[a + 10], 15, -1051523), o = md5_ii(o, n, s, i, e[a + 1], 21, -2054922799), i = md5_ii(i, o, n, s, e[a + 8], 6, 1873313359), s = md5_ii(s, i, o, n, e[a + 15], 10, -30611744), n = md5_ii(n, s, i, o, e[a + 6], 15, -1560198380), o = md5_ii(o, n, s, i, e[a + 13], 21, 1309151649), i = md5_ii(i, o, n, s, e[a + 4], 6, -145523070), s = md5_ii(s, i, o, n, e[a + 11], 10, -1120210379), n = md5_ii(n, s, i, o, e[a + 2], 15, 718787259), o = md5_ii(o, n, s, i, e[a + 9], 21, -343485551), i = safe_add(i, r), o = safe_add(o, l), n = safe_add(n, c), s = safe_add(s, d)
    }
    return Array(i, o, n, s)
}

function md5_cmn(e, t, i, o, n, s) {
    return safe_add(bit_rol(safe_add(safe_add(t, e), safe_add(o, s)), n), i)
}

function md5_ff(e, t, i, o, n, s, a) {
    return md5_cmn(t & i | ~t & o, e, t, n, s, a)
}

function md5_gg(e, t, i, o, n, s, a) {
    return md5_cmn(t & o | i & ~o, e, t, n, s, a)
}

function md5_hh(e, t, i, o, n, s, a) {
    return md5_cmn(t ^ i ^ o, e, t, n, s, a)
}

function md5_ii(e, t, i, o, n, s, a) {
    return md5_cmn(i ^ (t | ~o), e, t, n, s, a)
}

function core_hmac_md5(e, t) {
    var i = str2binl(e);
    i.length > 16 && (i = core_md5(i, e.length * chrsz));
    for (var o = Array(16), n = Array(16), s = 0; 16 > s; s++) o[s] = 909522486 ^ i[s], n[s] = 1549556828 ^ i[s];
    var a = core_md5(o.concat(str2binl(t)), 512 + t.length * chrsz);
    return core_md5(n.concat(a), 640)
}

function safe_add(e, t) {
    var i = (65535 & e) + (65535 & t), o = (e >> 16) + (t >> 16) + (i >> 16);
    return o << 16 | 65535 & i
}

function bit_rol(e, t) {
    return e << t | e >>> 32 - t
}

function str2binl(e) {
    for (var t = Array(), i = (1 << chrsz) - 1, o = 0; o < e.length * chrsz; o += chrsz) t[o >> 5] |= (e.charCodeAt(o / chrsz) & i) << o % 32;
    return t
}

function binl2str(e) {
    for (var t = "", i = (1 << chrsz) - 1, o = 0; o < 32 * e.length; o += chrsz) t += String.fromCharCode(e[o >> 5] >>> o % 32 & i);
    return t
}

function binl2hex(e) {
    for (var t = hexcase ? "0123456789ABCDEF" : "0123456789abcdef", i = "", o = 0; o < 4 * e.length; o++) i += t.charAt(15 & e[o >> 2] >> 8 * (o % 4) + 4) + t.charAt(15 & e[o >> 2] >> 8 * (o % 4));
    return i
}

function binl2b64(e) {
    for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", i = "", o = 0; o < 4 * e.length; o += 3) for (var n = (255 & e[o >> 2] >> 8 * (o % 4)) << 16 | (255 & e[o + 1 >> 2] >> 8 * ((o + 1) % 4)) << 8 | 255 & e[o + 2 >> 2] >> 8 * ((o + 2) % 4), s = 0; 4 > s; s++) i += 8 * o + 6 * s > 32 * e.length ? b64pad : t.charAt(63 & n >> 6 * (3 - s));
    return i
}

"object" != typeof JSON && (JSON = {}), function () {
    function f(e) {
        return 10 > e ? "0" + e : e
    }

    function quote(e) {
        return escapable.lastIndex = 0, escapable.test(e) ? '"' + e.replace(escapable, function (e) {
            var t = meta[e];
            return "string" == typeof t ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
        }) + '"' : '"' + e + '"'
    }

    function str(e, t) {
        var i, o, n, s, a, r = gap, l = t[e];
        switch (l && "object" == typeof l && "function" == typeof l.toJSON && (l = l.toJSON(e)), "function" == typeof rep && (l = rep.call(t, e, l)), typeof l) {
            case"string":
                return quote(l);
            case"number":
                return isFinite(l) ? String(l) : "null";
            case"boolean":
            case"null":
                return String(l);
            case"object":
                if (!l) return "null";
                if (gap += indent, a = [], "[object Array]" === Object.prototype.toString.apply(l)) {
                    for (s = l.length, i = 0; s > i; i += 1) a[i] = str(i, l) || "null";
                    return n = 0 === a.length ? "[]" : gap ? "[\n" + gap + a.join(",\n" + gap) + "\n" + r + "]" : "[" + a.join(",") + "]", gap = r, n
                }
                if (rep && "object" == typeof rep) for (s = rep.length, i = 0; s > i; i += 1) "string" == typeof rep[i] && (o = rep[i], n = str(o, l), n && a.push(quote(o) + (gap ? ": " : ":") + n)); else for (o in l) Object.prototype.hasOwnProperty.call(l, o) && (n = str(o, l), n && a.push(quote(o) + (gap ? ": " : ":") + n));
                return n = 0 === a.length ? "{}" : gap ? "{\n" + gap + a.join(",\n" + gap) + "\n" + r + "}" : "{" + a.join(",") + "}", gap = r, n
        }
    }

    "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function () {
        return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
    }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function () {
        return this.valueOf ? this.valueOf() : {}
    });
    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap, indent,
        meta = {"\b": "\\b", "	": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\"}, rep;
    "function" != typeof JSON.stringify && (JSON.stringify = function (e, t, i) {
        var o;
        if (gap = "", indent = "", "number" == typeof i) for (o = 0; i > o; o += 1) indent += " "; else "string" == typeof i && (indent = i);
        if (rep = t, t && "function" != typeof t && ("object" != typeof t || "number" != typeof t.length)) throw new Error("JSON.stringify");
        return str("", {"": e})
    }), "function" != typeof JSON.parse && (JSON.parse = function (text, reviver) {
        function walk(e, t) {
            var i, o, n = e[t];
            if (n && "object" == typeof n) for (i in n) Object.prototype.hasOwnProperty.call(n, i) && (o = walk(n, i), void 0 !== o ? n[i] = o : delete n[i]);
            return reviver.call(e, t, n)
        }

        var j;
        if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function (e) {
            return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
        })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({"": j}, "") : j;
        throw new SyntaxError("JSON.parse")
    })
}(), define("lib/shiv/json2", function () {
}), jQuery.cookie = function (e, t, i) {
    if (arguments.length > 1 && "[object Object]" !== String(t)) {
        if (i = jQuery.extend({}, i), (null === t || void 0 === t) && (i.expires = -1), "number" == typeof i.expires) {
            var o = i.expires, n = i.expires = new Date;
            n.setDate(n.getDate() + o)
        }
        return t = String(t), document.cookie = [encodeURIComponent(e), "=", i.raw ? t : encodeURIComponent(t), i.expires ? "; expires=" + i.expires.toUTCString() : "", i.path ? "; path=" + i.path : "", i.domain ? "; domain=" + i.domain : "", i.secure ? "; secure" : ""].join("")
    }
    i = t || {};
    var s, a = i.raw ? function (e) {
        return e
    } : decodeURIComponent;
    return (s = new RegExp("(?:^|; )" + encodeURIComponent(e) + "=([^;]*)").exec(document.cookie)) ? a(s[1]) : null
}, define("lib/jquery/jquery.cookie", function () {
}), function (e) {
    e.fn.toFixedWidth = function (t, i, o) {
        if (!t) return "";
        var n, s = t.toString().replace(/\s+/g, " "), a = /^[A-Za-z0-9]+$/i, r = /[\u4E00-\u9FA5]+/i, l = s.length,
            c = 0, d = 1;
        if (o || (o = ""), r.test(s)) {
            for (var u = 0; l > u; u++) {
                n = s.charAt(u), c += a.test(n) ? .5 : 1;
                var h = Math.ceil(c);
                h == i && (d = u + 1)
            }
            var p = i - c;
            0 > p && (s = c > i ? s.substr(0, d) + o : s.substr(0, i) + o), e.fn.toFixedWidth.fixedLength = c > i ? i : 0 == c ? Math.ceil(l / 2) : c
        } else i *= 2, c = l, d = l > i ? i : l, e.fn.toFixedWidth.fixedLength = c > i ? i / 2 : Math.ceil(l / 2), s = c > i ? s.substr(0, d) + o : s.substr(0, d);
        return s
    }, e.fn.toFixedWidth.fixedLength = 0
}(jQuery), define("lib/jquery/jquery.fixedwidth", function () {
}), function () {
    function e(e) {
        function t(t, o) {
            var s, d, m = t == window, v = o && void 0 !== o.message ? o.message : void 0;
            if (o = e.extend({}, e.blockUI.defaults, o || {}), !o.ignoreIfBlocked || !e(t).data("blockUI.isBlocked")) {
                if (o.overlayCSS = e.extend({}, e.blockUI.defaults.overlayCSS, o.overlayCSS || {}), s = e.extend({}, e.blockUI.defaults.css, o.css || {}), d = e.extend({}, e.blockUI.defaults.themedCSS, o.themedCSS || {}), v = void 0 === v ? o.message : v, m && p && i(window, {fadeOut: 0}), v && "string" != typeof v && (v.parentNode || v.jquery)) {
                    var g = v.jquery ? v[0] : v, b = {};
                    e(t).data("blockUI.history", b), b.el = g, b.parent = g.parentNode, b.display = g.style.display, b.position = g.style.position, b.parent && b.parent.removeChild(g)
                }
                e(t).data("blockUI.onUnblock", o.onUnblock);
                var w, y, x = o.baseZ,
                    _ = e.browser.msie || o.forceIframe ? e('<iframe class="blockUI" style="z-index:' + x++ + ';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="' + o.iframeSrc + '"></iframe>') : e('<div class="blockUI" style="display:none"></div>'),
                    k = o.theme ? e('<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:' + x++ + ';display:none"></div>') : e('<div class="blockUI blockOverlay" style="z-index:' + x++ + ';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>');
                y = o.theme && m ? '<div class="blockUI ' + o.blockMsgClass + ' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:' + (x + 10) + ';display:none;position:fixed">' + '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (o.title || "&nbsp;") + "</div>" + '<div class="ui-widget-content ui-dialog-content"></div>' + "</div>" : o.theme ? '<div class="blockUI ' + o.blockMsgClass + ' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:' + (x + 10) + ';display:none;position:absolute">' + '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (o.title || "&nbsp;") + "</div>" + '<div class="ui-widget-content ui-dialog-content"></div>' + "</div>" : m ? '<div class="blockUI ' + o.blockMsgClass + ' blockPage" style="z-index:' + (x + 10) + ';display:none;position:fixed"></div>' : '<div class="blockUI ' + o.blockMsgClass + ' blockElement" style="z-index:' + (x + 10) + ';display:none;position:absolute"></div>', w = e(y), v && (o.theme ? (w.css(d), w.addClass("ui-widget-content")) : w.css(s)), o.theme || o.applyPlatformOpacityRules && e.browser.mozilla && /Linux/.test(navigator.platform) || k.css(o.overlayCSS), k.css("position", m ? "fixed" : "absolute"), (e.browser.msie || o.forceIframe) && _.css("opacity", 0);
                var T = [_, k, w], C = m ? e("body") : e(t);
                e.each(T, function () {
                    this.appendTo(C)
                }), o.theme && o.draggable && e.fn.draggable && w.draggable({
                    handle: ".ui-dialog-titlebar",
                    cancel: "li"
                });
                var I = u && (!e.boxModel || e("object,embed", m ? null : t).length > 0);
                if (h || I) {
                    if (m && o.allowBodyStretch && e.boxModel && e("html,body").css("height", "100%"), (h || !e.boxModel) && !m) var S = l(t, "borderTopWidth"),
                        E = l(t, "borderLeftWidth"), A = S ? "(0 - " + S + ")" : 0, j = E ? "(0 - " + E + ")" : 0;
                    e.each([_, k, w], function (e, t) {
                        var i = t[0].style;
                        if (i.position = "absolute", 2 > e) m ? i.setExpression("height", "Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.boxModel?0:" + o.quirksmodeOffsetHack + ') + "px"') : i.setExpression("height", 'this.parentNode.offsetHeight + "px"'), m ? i.setExpression("width", 'jQuery.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"') : i.setExpression("width", 'this.parentNode.offsetWidth + "px"'), j && i.setExpression("left", j), A && i.setExpression("top", A); else if (o.centerY) m && i.setExpression("top", '(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"'), i.marginTop = 0; else if (!o.centerY && m) {
                            var n = o.css && o.css.top ? parseInt(o.css.top) : 0,
                                s = "((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + " + n + ') + "px"';
                            i.setExpression("top", s)
                        }
                    })
                }
                if (v && (o.theme ? w.find(".ui-widget-content").append(v) : w.append(v), (v.jquery || v.nodeType) && e(v).show()), (e.browser.msie || o.forceIframe) && o.showOverlay && _.show(), o.fadeIn) {
                    var U = o.onBlock ? o.onBlock : c, R = o.showOverlay && !v ? U : c, q = v ? U : c;
                    o.showOverlay && k._fadeIn(o.fadeIn, R), v && w._fadeIn(o.fadeIn, q)
                } else o.showOverlay && k.show(), v && w.show(), o.onBlock && o.onBlock();
                if (n(1, t, o), m ? (p = w[0], f = e(":input:enabled:visible", p), o.focusInput && setTimeout(a, 20)) : r(w[0], o.centerX, o.centerY), o.timeout) {
                    var $ = setTimeout(function () {
                        m ? e.unblockUI(o) : e(t).unblock(o)
                    }, o.timeout);
                    e(t).data("blockUI.timeout", $)
                }
            }
        }

        function i(t, i) {
            var s = t == window, a = e(t), r = a.data("blockUI.history"), l = a.data("blockUI.timeout");
            l && (clearTimeout(l), a.removeData("blockUI.timeout")), i = e.extend({}, e.blockUI.defaults, i || {}), n(0, t, i), null === i.onUnblock && (i.onUnblock = a.data("blockUI.onUnblock"), a.removeData("blockUI.onUnblock"));
            var c;
            c = s ? e("body").children().filter(".blockUI").add("body > .blockUI") : e(".blockUI", t), s && (p = f = null), i.fadeOut ? (c.fadeOut(i.fadeOut), setTimeout(function () {
                o(c, r, i, t)
            }, i.fadeOut)) : o(c, r, i, t)
        }

        function o(t, i, o, n) {
            t.each(function () {
                this.parentNode && this.parentNode.removeChild(this)
            }), i && i.el && (i.el.style.display = i.display, i.el.style.position = i.position, i.parent && i.parent.appendChild(i.el), e(n).removeData("blockUI.history")), "function" == typeof o.onUnblock && o.onUnblock(n, o)
        }

        function n(t, i, o) {
            var n = i == window, a = e(i);
            if ((t || (!n || p) && (n || a.data("blockUI.isBlocked"))) && (a.data("blockUI.isBlocked", t), o.bindEvents && (!t || o.showOverlay))) {
                var r = "mousedown mouseup keydown keypress";
                t ? e(document).bind(r, o, s) : e(document).unbind(r, s)
            }
        }

        function s(t) {
            if (t.keyCode && 9 == t.keyCode && p && t.data.constrainTabKey) {
                var i = f, o = !t.shiftKey && t.target === i[i.length - 1], n = t.shiftKey && t.target === i[0];
                if (o || n) return setTimeout(function () {
                    a(n)
                }, 10), !1
            }
            var s = t.data;
            return e(t.target).parents("div." + s.blockMsgClass).length > 0 ? !0 : 0 == e(t.target).parents().children().filter("div.blockUI").length
        }

        function a(e) {
            if (f) {
                var t = f[e === !0 ? f.length - 1 : 0];
                t && t.focus()
            }
        }

        function r(e, t, i) {
            var o = e.parentNode, n = e.style, s = (o.offsetWidth - e.offsetWidth) / 2 - l(o, "borderLeftWidth"),
                a = (o.offsetHeight - e.offsetHeight) / 2 - l(o, "borderTopWidth");
            t && (n.left = s > 0 ? s + "px" : "0"), i && (n.top = a > 0 ? a + "px" : "0")
        }

        function l(t, i) {
            return parseInt(e.css(t, i)) || 0
        }

        if (/1\.(0|1|2)\.(0|1|2)/.test(e.fn.jquery) || /^1.1/.test(e.fn.jquery)) return alert("blockUI requires jQuery v1.2.3 or later!  You are using v" + e.fn.jquery), void 0;
        e.fn._fadeIn = e.fn.fadeIn;
        var c = function () {
            }, d = document.documentMode || 0, u = e.browser.msie && (e.browser.version < 8 && !d || 8 > d),
            h = e.browser.msie && /MSIE 6.0/.test(navigator.userAgent) && !d;
        e.blockUI = function (e) {
            t(window, e)
        }, e.unblockUI = function (e) {
            i(window, e)
        }, e.growlUI = function (t, i, o, n) {
            var s = e('<div class="growlUI"></div>');
            t && s.append("<h1>" + t + "</h1>"), i && s.append("<h2>" + i + "</h2>"), void 0 == o && (o = 3e3), e.blockUI({
                message: s,
                fadeIn: 700,
                fadeOut: 1e3,
                centerY: !1,
                timeout: o,
                showOverlay: !1,
                onUnblock: n,
                css: e.blockUI.defaults.growlCSS
            })
        }, e.fn.block = function (i) {
            var o = e.extend({}, e.blockUI.defaults, i || {});
            return this.each(function () {
                var t = e(this);
                o.ignoreIfBlocked && t.data("blockUI.isBlocked") || t.unblock({fadeOut: 0})
            }), this.each(function () {
                "static" == e.css(this, "position") && (this.style.position = "relative"), e.browser.msie && (this.style.zoom = 1), t(this, i)
            })
        }, e.fn.unblock = function (e) {
            return this.each(function () {
                i(this, e)
            })
        }, e.blockUI.version = 2.42, e.blockUI.defaults = {
            message: "<h1>Please wait...</h1>",
            title: null,
            draggable: !0,
            theme: !1,
            css: {
                padding: 0,
                margin: 0,
                width: "30%",
                top: "40%",
                left: "35%",
                textAlign: "center",
                color: "#000",
                border: "3px solid #aaa",
                backgroundColor: "#fff",
                cursor: "wait"
            },
            themedCSS: {width: "30%", top: "40%", left: "35%"},
            overlayCSS: {backgroundColor: "#000", opacity: .6, cursor: "wait"},
            growlCSS: {
                width: "350px",
                top: "10px",
                left: "",
                right: "10px",
                border: "none",
                padding: "5px",
                opacity: .6,
                cursor: "default",
                color: "#fff",
                backgroundColor: "#000",
                "-webkit-border-radius": "10px",
                "-moz-border-radius": "10px",
                "border-radius": "10px"
            },
            iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank",
            forceIframe: !1,
            baseZ: 1e3,
            centerX: !0,
            centerY: !0,
            allowBodyStretch: !0,
            bindEvents: !0,
            constrainTabKey: !0,
            fadeIn: 200,
            fadeOut: 400,
            timeout: 0,
            showOverlay: !0,
            focusInput: !0,
            applyPlatformOpacityRules: !0,
            onBlock: null,
            onUnblock: null,
            quirksmodeOffsetHack: 4,
            blockMsgClass: "blockMsg",
            ignoreIfBlocked: !1
        };
        var p = null, f = []
    }

    "function" == typeof define && define.amd && define.amd.jQuery ? define("lib/jquery/jquery.blockui", ["jquery"], e) : e(jQuery)
}(), function () {
    var e = function (e) {
        var t = e, i = "", o = "", n = HTTP_SERVER + "message.do?action=saveMessage", s = {}, a = "jsonp";
        "[object Object]" === Object.prototype.toString.call(e) && (s = e, t = s.username, i = s.msg || i, o = s.title || o, n = s.saveUrl || n, a = s.dataType || a);
        var r = ['<i class="lt">&nbsp;</i><i class="rt">&nbsp;</i><i class="lb">&nbsp;</i><i class="rb">&nbsp;</i>', '<div class="hd"><h3>发送私信</h3><i class="close overlay-close">&nbsp;</i></div>', '<div class="bd">', '<form id="J_sendLetterForm" method="post" action="message.do?action=saveMessage"><fieldset>', "<dl><dt>收信人：</dt>", "<dd>", '<input type="text" autocomplete="off" tabindex="0" data-desc="收信人" class="field" name="username" id="J_olEnterUsername" value="' + t + '" disabled="disabled" />', '<div class="sx_error_tip"></div></dd></dl>', '<dl><dt>标题：<span class="num" style="', "" !== o ? "display: none;" : "", '">剩余<em class="textnum-title">', 20 - o.length, "</em>个汉字</span></dt>", "<dd>", '<input type="text" autocomplete="off" tabindex="0" maxlength="40" data-desc="标题" class="field" name="title"  id="J_olEnterTitle"  value="', o, '" ', "" !== o ? 'disabled="disabled"' : "", "/>", '<div class="sx_error_tip"></div></dd></dl>', '<dl><dt>内容：<span class="num">剩余<em class="textnum-content">', 3e3 - i.length, "</em>个汉字</span></dt>", "<dd>", '<textarea type="text" onresize="return false;" autocomplete="off" tabindex="0" data-desc="内容" class="field" name="password" id="J_olTextarea">', i, "</textarea>", '<div class="sx_error_tip" style="float: left;"></div><div style="float:right; color: #aaa;">(最多65535 个字符)</div></dd></dl>', '<div class="clearfix" style="padding-bottom: 20px;text-align: center;">', '<a id="J_submitLetter" class="btn-send-letter" href="javascript:;">发送私信</a>', '<a class="btn-unblock overlay-close" href="javascript:;">取消</a>', '<span class="submitting">正在提交...</span>', "</div>", "</fieldset><form></div>"];
        $("#J_popPriLetter").html(r.join("")), $(".overlay-letter .field").bind({
            focus: function () {
                $(this).removeClass("field-invalid").next("label.empty-text").hide()
            }, blur: function () {
                var e = this.value, t = $(this).data("desc"), i = 20;
                "内容" == t && (i = 65535), e ? e.length > i ? ($(this).addClass("field-invalid").next("label.empty-text").hide(), $(this).siblings(".sx_error_tip").html("" + t + "长度最大为" + i).css("visibility", "visible")) : ($(this).removeClass("field-invalid").next("label.empty-text").hide(), $(this).siblings(".sx_error_tip").css("visibility", "hidden")) : ($(this).addClass("field-invalid").next("label.empty-text").show(), $(this).siblings(".sx_error_tip").html("" + t + "不能为空").css("visibility", "visible"))
            }
        }), $(".overlay-letter .overlay-close").click(function () {
            $.unblockUI()
        });
        var l = ($("#J_sendLetterForm"), $("#J_submitLetter")), c = function () {
            var e = $("#J_olEnterTitle:input").val(), t = $("#J_olTextarea").val();
            return e && t ? !0 : (e || ($("#J_olEnterTitle").addClass("field-invalid"), $("#J_olEnterTitle").siblings(".sx_error_tip").html("" + $("#J_olEnterTitle").data("desc") + "不能为空").css("visibility", "visible")), t || ($("#J_olTextarea").addClass("field-invalid"), $("#J_olTextarea").siblings(".sx_error_tip").html("" + $("#J_olTextarea").data("desc") + "不能为空").css("visibility", "visible")), !1)
        };
        $("#J_olEnterUsername:input").bind({
            keyup: function () {
                $(this).val(this.value.replace(/[^\w\u4E00-\u9FA5]/g, ""))
            }
        }), $("#J_olEnterTitle:input").bind({
            keyup: function () {
                var e = $(this);
                e.val(e.toFixedWidth(e.val(), 20)), $("#J_sendLetterForm .textnum-title").html(20 - Math.ceil($.fn.toFixedWidth.fixedLength))
            }
        }), $("#J_olTextarea:input").bind({
            keyup: function () {
                var e = $(this);
                e.val(e.toFixedWidth(e.val(), 3e3)), $("#J_sendLetterForm .textnum-content").html(3e3 - Math.ceil($.fn.toFixedWidth.fixedLength))
            }
        }), l.click(function (e) {
            e.preventDefault();
            var i = l.attr("isSubmiting");
            if (c()) {
                if ("true" == i) return;
                l.html("正在提交").attr("isSubmiting", "true"), $(".overlay-letter .submitting").show(), $.ajax({
                    url: n,
                    dataType: a,
                    type: "POST",
                    data: {username: t, subject: $("#J_olEnterTitle:input").val(), msg: $("#J_olTextarea").val()},
                    success: function (e) {
                        $(".overlay-letter .submitting").hide();
                        var t;
                        e.success ? ($("#J_popPriLetter .bd").html('<p style="padding: 20px 0;">你的信件发送成功，该窗口将在<span id="J_letterTimer">2</span>秒后自动关闭。<p>'), t = window.setTimeout($.unblockUI, 2e3)) : ($("#J_popPriLetter .bd").html('<p style="color: red; padding: 20px 0;">' + e.message + '，该窗口将在<span id="J_letterTimer">5</span>秒后自动关闭。<p>'), t = window.setTimeout($.unblockUI, 5e3))
                    },
                    error: function () {
                        l.html("发送私信").attr("isSubmiting", "false"), $(".overlay-letter .submitting").hide()
                    }
                })
            }
        })
    };
    "function" == typeof define && define.amd && define.amd.jQuery ? define("common/module-letter", ["common/global", "lib/jquery/jquery.fixedwidth", "lib/jquery/jquery.blockui"], function () {
        return {init: e}
    }) : (window.AUI = window.AUI || {}, window.AUI.letter = {}, window.AUI.letter.init = e)
}(), function () {
    var e = "function" == typeof define && define.amd && define.amd.jQuery, t = "coursePackageCookieID";
    $siteNav = $("#J_siteNav");
    var i = function (e, i) {
        if (!e && 0 !== e) throw new Error('arguments "courseIds" is required!');
        $.ajax({
            url: HTTP_SERVER + "shoppingCart.do?action=addCartItem",
            dataType: "jsonp",
            data: {cookieId: t, courseIds: e},
            success: function (e) {
                e.success ? o(i) : alert(e.message)
            }
        })
    }, o = function (e) {
        $.ajax({
            url: HTTP_SERVER + "shoppingCart.do?action=showCartInfo",
            dataType: "jsonp",
            data: {cookieId: t},
            success: function (t) {
                t.success && n(t), $.isFunction(e) && e(t)
            }
        })
    }, n = function (t) {
        e ? require(["common/site-nav"], function (e) {
            e.refreshCartInfo(t)
        }) : AUI.siteNav.refreshCartInfo(t)
    }, s = {add: i, getItems: o};
    "function" == typeof define && define.amd && define.amd.jQuery ? define("course/module-cart", ["common/global"], function () {
        return s
    }) : (window.AUI = window.AUI || {}, AUI.cart = s)
}(), function (e) {
    var t = "function" == typeof define && define.amd && define.amd.jQuery, i = e("#J_siteNav"), o = e(".account", i),
        n = Boolean(e("#J_college").val()) || !1, s = e(".trigger-wrapper", i);
    if (i.get(0)) {
        var a = function () {
            return i.height()
        }, r = function () {
            window.Ext ? popUpSignInWin() : require(["common/global"], function (e) {
                e.switchToLoginPage()
            })
        };
        if (t) {
            var l = encodeURIComponent(window.location.href),
                c = (isAbleskyDomain ? HTTP_SERVER : "/") + "registerRedirect.do?action=toRegister&fromurl=" + l;
            n === !0 ? e(".account-register", o).attr("href", "collegeRedirect.do?action=toRegister&fromurl=" + l) : e(".account-register", o).click(function (e) {
                e.preventDefault(), window.location.href = c
            })
        } else e(".account-register", o).click(function (e) {
            e.preventDefault(), popUpCreateAccWin()
        });
        !function () {
            s.on({
                mouseover: function () {
                    clearTimeout(this._timeout);
                    var t = e(this), i = t.attr("data-control-width"), o = e("menu", t).siblings("a").innerWidth(),
                        n = e("menu", t).innerWidth(), s = Math.max(o, n), a = i ? i : s;
                    t.addClass("trigger-wrapper-hover"), e("menu", t).width(a)
                }, mouseout: function () {
                    var t = e(this);
                    this._timeout = setTimeout(function () {
                        t.removeClass("trigger-wrapper-hover")
                    }, 50)
                }
            })
        }(), function () {
            var t = e(".contact-cs", i), o = e("#BizQQWPA4SiteNav");
            window.BizQQWPA && (BizQQWPA.addCustom({
                aty: "2",
                a: "0",
                nameAccount: 800042429,
                selector: "BizQQWPA4SiteNav"
            }), o.removeClass("qqSaleOff")), t.on("mouseover", function () {
                return window.BizQQWPA ? (o.hasClass("qqSaleOff") && (BizQQWPA.addCustom({
                    aty: "2",
                    a: "0",
                    nameAccount: 800042429,
                    selector: "BizQQWPA4SiteNav"
                }), o.removeClass("qqSaleOff")), void 0) : (this.pms && "padding" === this.pms.state() || (this.pms = e.ajax({
                    url: "http://wpa.b.qq.com/cgi/wpa.php",
                    dataType: "script",
                    scriptCharset: "utf-8"
                }).done(function () {
                    BizQQWPA.addCustom({
                        aty: "2",
                        a: "0",
                        nameAccount: 800042429,
                        selector: "BizQQWPA4SiteNav"
                    }), o.removeClass("qqSaleOff")
                })), void 0)
            })
        }();
        var d = function (t) {
            e(".cart-num").show().text("(" + t.totalCourseCnt + ")")
        };
        t ? require(["course/module-cart"], function (e) {
            e.getItems()
        }) : AUI.cart.getItems();
        var u = {popLogin: r, getNavHeight: a, refreshCartInfo: d};
        t ? define("common/site-nav", ["jquery", "common/global"], function () {
            return u
        }) : (window.AUI = window.AUI || {}, window.AUI.siteNav = u)
    }
}(jQuery), define("component/consultNewMsg", ["jquery", "common/global"], function (e) {
    function t() {
        var t = AUI.checkIfLogin();
        AUI.curUserInfo.username;
        var n, s = sessionStorage.consultMsgNum, a = sessionStorage.consultIgnore;
        t && (e("body").append(i()), console.log("---您有来自网校的新消息---"), console.log("oldConsultMsgNum: " + s), console.log("isConsultIgnore: " + a), setTimeout(function () {
            e.ajax({
                url: IM_SERVER + "ajax/message/hasMessages", dataType: "jsonp", success: function (e) {
                    var t = e.hasMessages;
                    0 != t && (n = e.hasMessages, "true" == a ? t > s && (o(), sessionStorage.removeItem("consultIgnore"), sessionStorage.consultMsgNum = 0) : o())
                }
            })
        }, 500), e("#J_consultGo").on("click", function () {
            e("#J_consultMsg").hide()
        }), e("#J_consultMsg .cp-close").on("click", function () {
            e("#J_consultMsg").hide()
        }), e("#J_consultMsg .wait").on("click", function () {
            e("#J_consultMsg").hide(), sessionStorage.consultIgnore = !0, sessionStorage.consultMsgNum = n
        }))
    }

    function i() {
        var e = "";
        return e = ['<div class="consult-popup" id="J_consultMsg">', '<span class="cp-close"></span>', '<div class="cp-text">', "<p>您有新的未读消息</p>", "</div>", '<div class="cp-operate">', '<a href="/cs/index?sourceType=web&entranceType=msgcenter" target="_blank" id="J_consultGo" class="cp-btn b1">快去看看</a>', '<a href="javascript:void(0);" class="cp-btn wait">暂不理会</a>', "</div>", "</div>"].join("")
    }

    function o() {
        var t = e("#J_consultMsg");
        t && t.show().css("bottom", "20px")
    }

    return {init: t}
}), function () {
    function e(e) {
        function i() {
            for (var e = location.href.toLowerCase(), t = 0, i = n.length; i > t; t += 1) if (e.indexOf(n[t]) > -1) return !0;
            return !1
        }

        function o(e) {
            var t = "log_img_" + (new Date).getTime(), i = new Image;
            window[t] = i, i.onload = i.onerror = function () {
                try {
                    delete window[t]
                } catch (e) {
                    window[t] = null
                }
            }, i.src = e, i = null
        }

        var n = ["alpha.ablesky.com", "beta.ablesky.com", "omega.ablesky.com", "gamma.ablesky.com", "ablesky-a.com", "localhost", "127.0.0.1"],
            s = location.search.indexOf("analyticsTest=true") > -1;
        if (!i() || s) {
            var a = "http://stat.analytics.ablesky.com/statc/images/init/p.gif", r = {}, l = AUI.curUserInfo || {},
                c = window.ableanalyticsParams, d = {}, u = {};
            if (c) d = c.orgInfo || d, u = c.courseInfo || u; else if (e && e.config) {
                var h = e.config();
                d = h.orgInfo || d, u = h.courseInfo || u
            }
            d.orgId && (r.orgId = d.orgId), u.courseId && (r.courseId = u.courseId), u.viewCourseId && (r.viewCourseId = u.viewCourseId), l.username && (r.u = l.username), l.isInternal === !0 && (r.itnl = !0), l.isAverageUser === !1 && "GUEST" != l.username && (r.noru = !1);
            var p = [];
            for (var f in r) (r[f] || 0 === r[f]) && p.push(f + "=" + encodeURIComponent(r[f]));
            p.push("_=" + (new Date).getTime());
            var m = a + "?" + p.join("&");
            return o(m), t ? {} : void 0
        }
    }

    var t = "function" == typeof define && define.amd && define.amd.jQuery;
    t && !window.Ext ? define("analytics/ableanalytics", ["module", "jquery", "common/global"], e) : e()
}(window.jQuery), function (e) {
    function t() {
        var t = this;
        this._onbox = !1, this._opening = !1, this.zIndex = 1e4, this.length = function () {
            return o.length
        }, this.open = function (e) {
            if (t._opening = !0, "undefined" == typeof e && (e = {}), e.boxid) for (var i = 0; i < o.length; i++) if (o[i].dh.attr("id") == e.boxid) {
                o[i].close();
                break
            }
            e.zIndex = t.zIndex, t.zIndex += 10;
            var n = new s(e);
            return n.dh.click(function () {
                t._onbox = !0
            }), o.push(n), "center" != n.options.position && n.setElementPosition(), n.mh && n.mh.css({
                width: n.bwidth(),
                height: n.bheight()
            }), n
        }, this.close = function () {
            var e = this.getTopBox();
            0 != e && e.close()
        }, this.getTopBox = function () {
            return o.length > 0 ? o[o.length - 1] : !1
        }, e(window).scroll(function () {
            if (o.length > 0) for (i = 0; i < o.length; i++) {
                var e = o[i];
                "center" != e.options.position && e.setElementPosition(), e.mh && e.mh.css({
                    width: e.bwidth(),
                    height: e.bheight()
                })
            }
        }).resize(function () {
            if (o.length > 0) {
                var e = t.getTopBox();
                e.mh && e.mh.css({width: e.bwidth(), height: e.bheight()})
            }
        }), e(document).click(function (e) {
            if (2 == e.button) return !0;
            if (o.length > 0) {
                var i = t.getTopBox();
                t._opening || t._onbox || !i.options.clickClose || i.close()
            }
            t._opening = !1, t._onbox = !1
        })
    }

    var o = [], n = function () {
        for (var e, t = 0; e = arguments[t]; t++) if ("string" == typeof e && e.length > 0) try {
            (new Image).src = e
        } catch (i) {
        }
    };
    n(IMG_PATH + "/market/dialog/dialog-tl.png", IMG_PATH + "/market/dialog/dialog-tr.png", IMG_PATH + "/market/dialog/dialog-bl.png", IMG_PATH + "/market/dialog/dialog-br.png", IMG_PATH + "/market/dialog/dialog-square.png");
    var s = function (t) {
        var n = this;
        this.options = {}, this.dh = null, this.mh = null, this.dc = null, this.df = null, this.db = null, this.selector = null, this.ajaxurl = null, this._dragging = !1, this._options = t || {}, this._content = t.content || "", this.event = {}, this._defaults = {
            boxid: null,
            boxclass: null,
            title: "",
            headStyle: "",
            bodyStyle: "",
            footStyle: "",
            width: 0,
            height: 0,
            timeout: 0,
            draggable: !0,
            modal: !1,
            position: "center",
            buttons: [],
            clickClose: !1,
            zIndex: 1e4,
            close: null,
            closeOnEscape: !0,
            open: null
        }, this.initOptions = function () {
            n._options = n._options || {}, n._options.title = n._options.title || "", n._options.boxclass = n._options.boxclass, n.options = e.extend({}, n._defaults, n._options), n._options = null, n._defaults = null
        }, this.initBox = function () {
            var t = ['<div class="dialog-box">', '<table class="dialog-table">', "<tr>", '<td class="td-tl"></td>', '<td class="td-mm"></td>', '<td class="td-tr"></td>', "</tr>", "<tr>", '<td class="td-mm"></td>', '<td class="td-content">', '<div class="dialog-header">', '<h3 class="dialog-title"></h3>', '<a title="关闭" class="dialog-close">×</a>', "</div>", '<div class="dialog-content"></div>', '<div class="dialog-button-container"></div>', "</td>", '<td class="td-mm"></td>', "</tr>", "<tr>", '<td class="td-bl"></td>', '<td class="td-mm"></td>', '<td class="td-br"></td>', "</tr>", "</table>", "</div>"].join("");
            n.dh = e(t).appendTo("body").css({
                position: "absolute",
                overflow: "hidden",
                zIndex: n.options.zIndex
            }), n.dc = n.find(".dialog-content"), n.dt = n.find(".dialog-title"), n.dr = n.find(".dialog-header"), n.db = n.find(".dialog-button-container"), n.options.boxid && n.dh.attr("id", n.options.boxid), n.options.boxclass && n.dh.addClass(n.options.boxclass), n.options.height > 0 && n.dc.css("height", n.options.height), n.options.width > 0 && n.dh.css("width", n.options.width), "object" == typeof n.options.headStyle && n.dr.css(e.extend({}, n.options.headStyle)), "object" == typeof n.options.bodyStyle && n.dc.css(e.extend({}, n.options.bodyStyle)), "object" == typeof n.options.footStyle && n.db.css(e.extend({}, n.options.footStyle)), n.dh.bgiframe()
        }, this.initMask = function () {
            n.options.modal && (e.browser.msie ? (h = "CSS1Compat" == document.compatMode ? document.documentElement.clientHeight : document.body.clientHeight, w = "CSS1Compat" == document.compatMode ? document.documentElement.clientWidth : document.body.clientWidth) : (h = n.bheight(), w = n.bwidth()), n.mh = e('<div class="dialog-mask"></div>').appendTo("body").css({
                width: w,
                height: h,
                zIndex: n.options.zIndex - 1
            }).bgiframe())
        }, this.initContent = function () {
            for (var t, i, o = n.options.buttons, s = 0; i = o[s]; s++) t = document.createElement("button"), t._click = i.click ? i.click : n.close, i.css && i.css.backgroundColor && (i.css.color = "#fff"), e(t).attr("type", "button").text(i.text).css(e.extend({}, {marginLeft: s > 0 ? 30 : 0}, i.css)).click(function (e) {
                e.preventDefault(), this._click()
            }), i.sClass && (e(t)[0].className = i.sClass), n.db.append(t);
            n.options.title ? n.dt.html(n.options.title) : n.dt.hide(), 0 === n.options.buttons.length && n.dh.find(".dialog-button-container").hide(), n.setContent(n._content), n.show(), n.event.open()
        }, this.initEvent = function () {
            n.dh.find(".dialog-close, .dialog-cancel").unbind("click").click(function (e) {
                e.preventDefault(), n.close()
            }), n.dh.attr("tabIndex", -1).css("outline", 0).keydown(function (e) {
                n.options.closeOnEscape && e.keyCode && 27 === e.keyCode && (n.close(e), e.preventDefault())
            }), n.options.timeout > 0 && window.setTimeout(n.close, 1e3 * n.options.timeout), this.drag()
        }, this.setOnclose = function (e) {
            n.options.close = e
        }, this.drag = function () {
            n.options.draggable && n.options.title && n.dr.css({cursor: "move"}).mousedown(function (t) {
                var i = this, o = n.dh.position().left, s = n.dh.position().top, a = t.clientX, r = t.clientY,
                    l = n.dh.width(), c = n.dh.height(), d = n.bwidth(), u = n.bheight();
                i.setCapture && i.setCapture(), e(document).mousemove(function (e) {
                    window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
                    var t = Math.max(o + e.clientX - a, 0), i = Math.max(s + e.clientY - r, 0), t = Math.min(t, d - l),
                        i = Math.min(i, u - c);
                    n.dh.css({left: t, top: i})
                }).mouseup(function () {
                    i.releaseCapture && i.releaseCapture(), e(document).unbind("mousemove"), e(document).unbind("mouseup")
                })
            })
        }, this.event.open = function () {
            "function" == typeof n.options.open && n.options.open(n)
        }, this.show = function () {
            n.options.buttons.length > 0 && n.dh.find(".dialog-button-container").show(), "center" == n.options.position ? n.setCenterPosition() : n.setElementPosition(), n.dh.show(), n.mh && n.mh.show()
        }, this.hide = function (e) {
            n.dh.hide(e)
        }, this.find = function (e) {
            return n.dh.find(e)
        }, this.setWidth = function (e) {
            n.dh.width(e)
        }, this.setTitle = function (e) {
            n.dt.html(e)
        }, this.getTitle = function () {
            return n.dt.html()
        }, this.setContent = function (e) {
            n.dc.html(e), n.setCenterPosition()
        }, this.getContent = function () {
            return n.dc.html()
        }, this.close = function () {
            for ("function" == typeof n.options.close && n.options.close(n), i = 0; i < o.length; i++) if (o[i].dh.get(0) == n.dh.get(0)) {
                o.splice(i, 1);
                break
            }
            n.hide(), n.dh.remove(), n.mh && n.mh.remove()
        }, this.bheight = function () {
            if (e.browser.msie && e.browser.version < 7) {
                var t = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight),
                    i = Math.max(document.documentElement.offsetHeight, document.body.offsetHeight);
                return i > t ? e(window).height() : t
            }
            return e(document).height()
        }, this.bwidth = function () {
            if (e.browser.msie && e.browser.version < 7) {
                var t = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth),
                    i = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth);
                return i > t ? e(window).width() : t
            }
            return e(document).width()
        }, this.setCenterPosition = function () {
            var t = e(window), i = e(document), o = i.scrollTop(), s = i.scrollLeft();
            o += (t.height() - n.dh.height()) / 2, s += (t.width() - n.dh.width()) / 2, n.dh.css({top: o, left: s})
        }, this.setElementPosition = function () {
            var t = e(n.options.position.refele), i = n.options.position.reftop || 0,
                o = n.options.position.refleft || 0,
                s = "undefined" == typeof n.options.position.adjust ? !0 : n.options.position.adjust,
                a = t.offset().top + t.height(), r = t.offset().left,
                l = document.documentElement.clientWidth || document.body.clientWidth,
                c = document.documentElement.clientHeight || document.body.clientHeight,
                d = document.documentElement.scrollTop || document.body.scrollTop,
                u = document.documentElement.scrollLeft || document.body.scrollLeft, h = d + c, p = u + l;
            s && r + n.dh.width() > p && (r = p - n.dh.width() - 1), s && a + n.dh.height() > h && (a = h - n.dh.height() - 1), r = Math.max(r + o, 0), a = Math.max(a + i, 0), n.dh.css({
                top: a,
                left: r
            })
        }, this.initOptions(), this.initMask(), this.initBox(), this.initContent(), this.initEvent()
    };
    e.extend({dialog: (new t).open})
}(jQuery), function (e) {
    function t(e) {
        return e && e.constructor === Number ? e + "px" : e
    }

    e.fn.bgiframe = e.browser.msie && /msie 6\.0/i.test(navigator.userAgent) ? function (i) {
        i = e.extend({
            top: "auto",
            left: "auto",
            width: "auto",
            height: "auto",
            opacity: !0,
            src: "javascript:false;"
        }, i);
        var o = '<iframe class="bgiframe"frameborder="0"tabindex="-1"src="' + i.src + '"' + 'style="display:block;position:absolute;z-index:-1;' + (i.opacity !== !1 ? "filter:Alpha(Opacity='0');" : "") + "top:" + ("auto" == i.top ? "expression(((parseInt(this.parentNode.currentStyle.borderTopWidth)||0)*-1)+'px')" : t(i.top)) + ";" + "left:" + ("auto" == i.left ? "expression(((parseInt(this.parentNode.currentStyle.borderLeftWidth)||0)*-1)+'px')" : t(i.left)) + ";" + "width:" + ("auto" == i.width ? "expression(this.parentNode.offsetWidth+'px')" : t(i.width)) + ";" + "height:" + ("auto" == i.height ? "expression(this.parentNode.offsetHeight+'px')" : t(i.height)) + ";" + '"/>';
        return this.each(function () {
            0 === e(this).children("iframe.bgiframe").length && this.insertBefore(document.createElement(o), this.firstChild)
        })
    } : function () {
        return this
    }, e.fn.bgIframe = e.fn.bgiframe
}(jQuery), define("lib/jquery/jquery.dialog", function () {
});
var hexcase = 0, b64pad = "", chrsz = 8;
define("common/md5", function () {
}), define("component/qrLogin", ["common/global", "lib/jquery/jquery.cookie"], function () {
    function e(e) {
        g = e, f = e.target, l = $(".J_login_switch"), c = $("#J_loginMod"), d = $(".qrcode-main", f), u = $(".qrcode-mod", f), h = $(".qrcode-msg", f), p = $(".qrcode-refresh", f), t(), i()
    }

    function t() {
        var e = $(".J_qr_login");
        l.click(function () {
            var t = $(this);
            t.hasClass("qr") ? (t.removeClass("qr"), r(), e.hide(), c.show(), $("input[name=username]", c).focus()) : (t.addClass("qr"), c.hide(), e.show(), p.hide(), i())
        })
    }

    function i() {
        d.empty().append('<span class="loading">加载中</span>'), $.ajax({
            url: PASSPORT_SERVER + "qrcodeLogin.do?action=generateToken",
            dataType: "jsonp",
            timeout: 9e4
        }).done(function (e) {
            e.success ? a(e) : (d.empty(), $("p", p).text("二维码加载失败"), p.show())
        }).fail(function (e) {
            e.statusText && (d.empty(), $("p", p).text("二维码加载失败"), p.show())
        })
    }

    function o(e) {
        $.ajax({
            url: PASSPORT_SERVER + "qrcodeLogin.do?action=checkScan",
            data: {token: e},
            dataType: "jsonp"
        }).done(function (t) {
            t.success && (0 === t.code ? n(e) : -1 === t.code ? m = setTimeout(function () {
                o(e)
            }, 1500) : -2 === t.code && ($("p", p).text("二维码失效"), p.show()))
        }).fail(function () {
        })
    }

    function n(e) {
        u.hide(), h.show(), s(e)
    }

    function s(e) {
        $.ajax({
            url: PASSPORT_SERVER + "qrcodeLogin.do?action=login",
            data: {token: e},
            dataType: "jsonp"
        }).done(function (t) {
            t.success && (0 !== t.code ? v = setTimeout(function () {
                s(e)
            }, 1500) : g.callback())
        }).fail(function () {
        })
    }

    function a(e) {
        var t = d.width();
        d.empty().append('<img src="' + HTTP_SERVER + "/eventsRedirect.do?action=getQRCode&size=" + t + "&qrcode=" + e.qrcode + '">'), o(e.token)
    }

    function r() {
        clearTimeout(m), clearTimeout(v)
    }

    var l, c, d, u, h, p, f = null, m = null, v = null, g = null;
    return $("a.refresh", p).click(function () {
        p.hide(), r(), i()
    }), $("a.return", h).click(function () {
        u.show(), h.hide(), r(), i()
    }), {init: e, clear: r}
}), define("common/module-login", ["common/global", "lib/jquery/jquery.cookie", "common/md5"], function (e) {
    function t() {
        var t = e.queryString("funName"), i = e.queryString("params");
        t && (AUI.cookie(!1, "funName", t), AUI.cookie(!1, "params", i))
    }

    function i(e) {
        $.ajax({
            url: PASSPORT_SERVER + "check.do?action=check", dataType: "jsonp", success: function (t) {
                var i = t.ASUSS;
                t.success && "string" == typeof i.toLowerCase() && "" != i && "false" != i && (AUI.getCurUserInfo(!0, i), o(e))
            }
        })
    }

    function o(i) {
        i || (i = {});
        var o = h.iP, n = "boolean" == typeof h.iI ? h.iI : !1, s = window.location.href, c = s.split("fromurl=")[1],
            d = "http://" + window.location.host, u = parseInt(e.queryString("courseId")) || 0,
            p = parseInt(e.queryString("pcid")) || 0;
        i.isBinded === !1 ? (c = window.location.href.split("fromurl=")[1], window.location.href = "/accountLoginRedirect.do?action=toBindingAccount" + (c ? "&fromurl=" + c : "")) : $.isFunction(a.callback) ? a.callback() : o ? h.successURL ? location.href = h.successURL : window.location.reload() : "trial" == r && u ? window.location.href = BASE_PATH + "viewCourseDetail.do?courseId=" + (p || u) : "internal" == l || n ? window.location.href = BASE_PATH + "myOffice.do" : c && "" !== c ? (t(), window.location.href = window.unescape(c)) : window.location.href = HTTP_SERVER.indexOf(d) > -1 || SEARCH_SERVER.indexOf(d) > -1 || AD_SERVER.indexOf(d) > -1 || PASSPORT_SERVER.indexOf(d) > -1 ? SEARCH_SERVER + "course.do?aft=recommend" : BASE_PATH + "myOffice.do"
    }

    function n(e) {
        h.iP = e.isPop, h.successURL = e.successURL, require(["component/qrLogin"], function (t) {
            t.init({
                target: e.target, callback: function (e) {
                    o(e)
                }
            })
        })
    }

    function s() {
        require(["component/qrLogin"], function (e) {
            e.clear()
        })
    }

    var a = {}, r = e.queryString("pt"), l = $("#J_loginType").val(), c = "SA",
        d = AUI.cookie(!0, c) ? AUI.cookie(!0, c) : "",
        u = "internal" == l ? d.indexOf("*") > -1 ? d.split("*")[0] : d : d, h = {}, p = function (e) {
            function t(e) {
                var t = m.parents("form").find("#J_errerTip"), i = e - 0;
                switch (i) {
                    case 1:
                        i = "用户名或密码为空";
                        break;
                    case 101:
                        i = "用户名或密码错误";
                        break;
                    case 102:
                        i = "无法登陆到客户端";
                        break;
                    case 107:
                        i = "账号冻结";
                        break;
                    default:
                        i = "登录出错码：" + i
                }
                m.isSubmiting = !1, t.children("p").html(i), t.show(), $("span", m).html("登录"), a.loginError && a.loginError()
            }

            function n() {
                var e = f[0];
                e.checked ? AUI.cookie(!0, c, v.val()) : AUI.cookie(!0, c, null)
            }

            document.getElementById("J_loginMod") && document.getElementById("J_loginMod").reset(), a = e = $.extend({}, e);
            var s = a.loginPanel, d = !!a.isPop, p = !!a.isOneStepLogin, f = $('input[name="_acegi_save_account"]', s),
                m = $("a.login-btn", s), v = m.parents("form").find('input[name="username"]'),
                g = m.parents("form").find('input[name="password"]');
            g.val() && g.next("label.empty-text").hide(), v.val() && v.next("label.empty-text").hide(), $(".field", s).live({
                keydown: function (e) {
                    var t = e.keyCode;
                    $(".invalid-text", s).hide(), 13 == t && m.click()
                }, focus: function () {
                    var e = $(this).next("label.empty-text");
                    e.addClass("emptytext-focus"), $(this).parents(".field-wrapper").removeClass("field-invalid"), $("#J_errerTip", s).hide()
                }, blur: function () {
                    var e = $(this).next("label.empty-text");
                    e.removeClass("emptytext-focus")
                }
            }), u ? (v.next("label.empty-text").hide(), v.val(u), f.attr("checked", "checked"), a && a.focusUsername !== !1 && g.focus()) : a && a.focusUsername !== !1 && v.focus(), m.isSubmiting = !1, m.bind("click", function (e) {
                if (e.preventDefault(), v = $(this).parents("form").find('input[name="username"]'), g = $(this).parents("form").find('input[name="password"]'), !m.isSubmiting) {
                    var s = $.trim(v.val()), c = hex_md5(g.val()), u = $.trim(g.val());
                    if (m.isSubmiting || "" == s || "" == c) t(1), w(); else {
                        m.isSubmiting = !0;
                        var y = /^stk[\w\d]{3,4}\d{7,10}$/;
                        if (1 == y.test(s)) $.ajax({
                            url: "useCard.do?action=checkAuditionCardForBinding",
                            data: {cardNo: s, cardPwd: u},
                            dataType: "json",
                            success: function (e) {
                                m.isSubmiting = !1, 1 == e.success ? window.location.href = "/useCardRedirect.do?action=toBindAuditionCard&cardNo=" + s + "&cardPwd=" + u : $(".frozentip").html(e.message).show()
                            }
                        }); else {
                            $("span", m).html("正在登录");
                            var x = f[0].checked ? "on" : "off", _ = "", k = "";
                            "internal" == l && (_ = $("#companyName").val(), k = $("#adminUsername").val(), k.toLowerCase() == s.toLowerCase() ? k = "" : s = s + "*" + k), n();
                            var T = PASSPORT_SERVER + "login.do?ajax=true";
                            "internal" == l && (T += "&adminUsername=" + k + "&companyName=" + _), p && (T += a.param1 + a.param2), "trial" === r && (T += "&PSPT_trialPlay=true"), $.ajax({
                                url: T,
                                data: {
                                    isPopUp: !!d,
                                    j_username: s,
                                    j_password: c,
                                    _acegi_save_account: "on",
                                    _acegi_security_remember_me: x
                                },
                                type: "POST",
                                dataType: "jsonp"
                            }).done(function (e) {
                                h = e;
                                var n = h.sS, s = h.alertMessage, r = {isBinded: h.isBinded};
                                if (a.successURL && (h.successURL = a.successURL), 0 == n) {
                                    if (!isAbleskyDomain) return i(r), void 0;
                                    o(r)
                                } else t(n);
                                s ? b(s) : w()
                            })
                        }
                    }
                }
            });
            var b = function (e) {
                e && $(".frozentip").html(e).show()
            }, w = function () {
                $(".frozentip").hide()
            };
            f.click(function () {
                n()
            }), setInterval(function () {
                $.each($("#J_loginMod .field"), function () {
                    var e = this.value, t = $(this).next("label.empty-text");
                    e ? t.hide() : t.show()
                })
            }, 50)
        };
    return {init: p, qrLogin: n, clearQrTimer: s}
}), function () {
    var e = function (e) {
        var t = {type: "small", labelText: "您还可以使用其它帐号直接登录", labelIconSpacing: 0, iconSpacing: 0, betaTop: 0};
        $(".third-party-login").each(function () {
            e && (t = $.extend(t, e), t.labelColor = "big" == t.type ? "color:#FFF;" : "");
            var i = {};
            i.sina = "https://api.weibo.com/oauth2/authorize?client_id=4117454953&redirect_uri=" + HTTP_SERVER + "weibo.do&response_type=code", i.qq = "https://graph.qq.com/oauth2.0/authorize?response_type=code&client_id=100333946&redirect_uri=" + HTTP_SERVER + "qq.do", i.taobao = "https://oauth.taobao.com/authorize?response_type=code&client_id=21258762&redirect_uri=" + HTTP_SERVER + "taobao.do&state=1212&scope=item&view=web", i.renren = "https://graph.renren.com/oauth/authorize?client_id=c6d80d7dec3043ab8973f5185de776de&response_type=code&redirect_uri=" + HTTP_SERVER + "renren.do", i.qweibo = "https://open.t.qq.com/cgi-bin/oauth2/authorize?response_type=code&client_id=801273951&redirect_uri=" + HTTP_SERVER + "qqweibo.do", i.weixin = HTTP_SERVER + "weixinLogin.do";
            var o = ['<div class="thirdParty-wrap">', '<div class="thirdParty-icon-wrap" style="width:200px;padding:0 10px;background:#fff;margin:0 auto;height:40px;">', '<a href="' + i.sina + '" class="sprite-' + t.type + "-icon sprite-" + t.type + '-icon-sina" ></a>', '<a href="' + i.weixin + '" class="sprite-' + t.type + "-icon sprite-" + t.type + '-icon-weixin" ></a>', '<a href="' + i.qq + '" class="sprite-' + t.type + "-icon sprite-" + t.type + '-icon-qq" ></a>', '<a href="' + i.taobao + '" class="sprite-' + t.type + "-icon sprite-" + t.type + '-icon-taobao"></a>', "</div>", "</div>"].join("");
            if (console.log(isAbleskyDomain), !isAbleskyDomain) {
                var n = $(this), s = "http://" + window.location.host + "/";
                $.ajax({
                    url: s + "thirdparty/ids", dataType: "json", type: "post", success: function (i) {
                        if (console.log(i), i.success) {
                            var o = {};
                            o.sina = "https://api.weibo.com/oauth2/authorize?client_id=" + i.apps.weibo + "&redirect_uri=" + s + "weibo.do&response_type=code", o.qq = "https://graph.qq.com/oauth2.0/authorize?response_type=code&client_id=" + i.apps.qq + "&redirect_uri=" + s + "qq.do", o.tencentWeibo = "https://open.t.qq.com/cgi-bin/oauth2/authorize?response_type=code&client_id=" + i.apps.tencent_weibo + "&redirect_uri=" + s + "qqweibo.do", o.weixin = s + "weixinLogin.do?appId=" + i.apps.weixin;
                            var a, r = "", l = "", c = "", d = 0;
                            i.apps.qq && (r = '<a href="' + o.qq + '" class="sprite-' + t.type + "-icon sprite-" + t.type + '-icon-qq"></a>', d++), i.apps.weibo && (l = '<a href="' + o.sina + '" class="sprite-' + t.type + "-icon sprite-" + t.type + '-icon-sina" ></a>', d++), i.apps.weixin && (c = '<a href="' + o.weixin + '" class="sprite-' + t.type + "-icon sprite-" + t.type + '-icon-weixin" ></a>', d++), a = 50 * d;
                            var u = ['<div class="thirdParty-wrap">', '<div class="thirdParty-icon-wrap" style="width:' + a + 'px;padding:0 10px;background:#fff;margin:0 auto;height:40px;">', l, c, r, "<div>", "</div>"].join("");
                            0 == d && (u = ""), e.callback ? e.callback(i) : "", n.html(u)
                        }
                    }
                })
            }
            isAbleskyDomain && (e.callback ? e.callback() : "", $(this).html(o));
            var a, r = window.location.href, l = "";
            if ((a = r.indexOf("ref=http://ad")) > -1) l = r.substring(a + "ref=".length); else if (r.indexOf("login.do") > -1) {
                var c = r.indexOf("fromurl");
                l = c > -1 ? decodeURIComponent(r.substring(c + "fromurl=".length)) : HTTP_SERVER
            } else l = r;
            AUI.cookie(!1, "oauth2_ref", l)
        })
    };
    "function" == typeof define && define.amd && define.amd.jQuery ? define("account/widget-3partylogin", [], function () {
        return {init: e}
    }) : (window.AUI = window.AUI || {}, window.AUI.thirdPartyLogin = {}, window.AUI.thirdPartyLogin.init = e)
}(), define("common/widget-poplogin", ["module", "jquery", "common/global", "lib/jquery/jquery.cookie", "lib/jquery/jquery.dialog"], function (e, t) {
    function i() {
        var e = ['<section class="qr-login-wrap J_qr_login">', '<div class="switch-tip">', "<p>帐号密码登录在这里</p>", "<i></i>", "</div>", '<div class="qrcode-mod">', '<div class="qrcode-main"><span class="loading">加载中</span></div>', '<div class="qrcode-desc">', '<p>打开<a href="/p/m" target="_blank">APP</a>扫码登录</p>', '<a href="registerRedirect.do?action=toRegister&fromurl=<%=fromurl %>" class="register">新用户注册</a>', "</div>", '<div class="qrcode-refresh">', "<p>二维码失效</p>", '<a class="refresh" href="javascript:;" >刷新</a>', "</div>", "</div>", '<div class="qrcode-msg">', '<div class="sran-success"></div>', "<p>请在手机上确认登录</p>", '<a class="return" href="javascript:;">返回二维码页面</a>', "</div>", "</section>", '<div class="login-switch-wrap">', '<div class="login-switch J_login_switch qr"></div>', "</div>"].join("");
        return e
    }

    function o(e) {
        var i = AUI.UA.isClient, o = window.location.href;
        if ("true" == i) window.location.href = BASE_PATH + "ableplayer/toLogin?fromurl=" + o; else {
            t.extend(s, e);
            var n = "", a = ['<p class="loading" style="padding: 10px;">加载中 ...</p>'],
                c = l.replace("{content}", a.join("")).replace("{wrapId}", r);
            isAbleskyDomain ? (require(["account/widget-3partylogin"], function (e) {
                e.init({type: "small", labelText: "使用其它帐号登录", labelIconSpacing: "10", iconSpacing: "5"})
            }), n = '<img src="' + IMG_PATH + '/market/login/pup-as-logo.png" style="width:98px;height:25px;vertical-align: middle;*+margin-top:3px;margin-left:10px;"/>') : n = '<span style="margin-left:10px">用户登录</span>';
            var u = t.dialog({
                boxid: "index-pop",
                title: n,
                headStyle: {backgroundColor: "#09F"},
                bodyStyle: {backgroundColor: "#fff"},
                content: c,
                width: 384,
                modal: s.modal,
                draggable: s.canDraggable,
                open: function () {
                    d(r)
                },
                close: function () {
                    require(["common/module-login"], function (e) {
                        e.clearQrTimer()
                    })
                }
            });
            u.setCenterPosition()
        }
    }

    var n = "true" === t("input[name=isAsDomain]").val() ? !0 : !1, s = {modal: !0, draggable: !0}, a = t.now(),
        r = "J_popLogin" + a,
        l = ['<div id="{wrapId}">', '<table class="loginPopwin"><tbody>', '<tr><td class="poplogin-content">{content}</td>', "</tbody></table></div>"].join(""),
        c = "", d = function (e) {
            var o = "" == c ? "" : "&redirecturl=" + encodeURIComponent(c), r = "", l = "", d = "";
            isAbleskyDomain && (r = '<div style="" class="third-party-login"></div>'), n && (l = i(), d = '<div class="switch-tip"><p>扫码登录在这里</p><i></i></div>');
            var u = ['<div class="popup-login" style="position: relative; *zoom: 1;">', '<form  id="J_loginMod" style="' + (n ? "display:none;" : "display:block;") + 'margin: 0px 41px;"><fieldset>', '<label class="forusername" for="J_username' + a + '">邮箱/手机号/用户名:</label>', '<div class="item clearfix">', '<div class="l">&nbsp;</div>', '<div class="c"><div class="field-wrapper">', '<input type="text" name="username" id="J_username' + a + '" class="field" tabindex="1" autocomplete="on" />', "</div></div>", '<div class="r">&nbsp;</div>', "</div>", '<label class="forpwd" for="J_password' + a + '">密码:</label>', '<div class="item clearfix">', '<div class="l">&nbsp;</div>', '<div class="c"><div class="field-wrapper">', '<input type="password" name="password" id="J_password' + a + '" class="field" tabindex="1" autocomplete="on" />', "</div></div>", '<div class="r">&nbsp;</div>', "</div>", '<div class="clearfix" style="margin:6px 0;">', '<label class="remem" for="J_rememberMe' + a + '">' + '<input  id="J_rememberMe' + a + '" class="remem" name="_acegi_save_account"  type="checkbox"/>自动登录</label>', "</div>", '<div class="clearfix colorTipContainer" style="position: relative;">', '<a class="login-btn" tabindex="1" href="javascript:;">', '<span class="btn-primary btn-large">登录</span>', '<div id="J_errerTip" class="invalid-text" style="display: none;">', '<p class="error" generated="true" for="J_verifycode">用户名或密码错误</p>', '<s class="trigger">◆</s>', "</div>", "</a>", '<div class="clearfix" style="margin:15px 0 8px 0;">', '<a class="pup-register"  href="registerRedirect.do?action=toRegister&fromurl=' + encodeURIComponent(window.location.href) + o + '">立即注册</a>', '<a class="forget-pwd" href="accountRedirect.do?action=getPwdBack">忘记密码</a>', '<span class="no-account">没有帐号？</span>', "</div>", '<em class="error-tip colorTip" style="display: none; position: absolute; left: -20px; top: -34px;">', '<em class="right"><em class="left"><em class="center msg" style="padding:0 2px;">用户名或密码错误</em></em></em>', '<em class="pointyTipShadow"></em>', '<em class="pointyTip"></em>', "</em>", "</div>", '<p class="frozentip"></p>', "</fieldset>", d, "</form>", l, "</div>"].join("");
            t(".poplogin-content", t("#" + e)).html(u), require(["common/module-login"], function (e) {
                e.init({loginPanel: "form#J_loginMod", isPop: !0, successURL: s.successURL})
            }), n && require(["common/module-login"], function (e) {
                e.qrLogin({target: t(".J_qr_login"), isPop: !0, successURL: s.successURL})
            })
        };
    return {init: o}
}), function (e) {
    "function" == typeof define && define.amd ? define("lib/jquery/jquery.scrollTo-2.1.2", ["jquery"], e) : "undefined" != typeof module && module.exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function (e) {
    function t(t) {
        return !t.nodeName || -1 !== e.inArray(t.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"])
    }

    function i(t) {
        return e.isFunction(t) || e.isPlainObject(t) ? t : {top: t, left: t}
    }

    var o = e.scrollTo = function (t, i, o) {
        return e(window).scrollTo(t, i, o)
    };
    return o.defaults = {axis: "xy", duration: 0, limit: !0}, e.fn.scrollTo = function (n, s, a) {
        "object" == typeof s && (a = s, s = 0), "function" == typeof a && (a = {onAfter: a}), "max" === n && (n = 9e9), a = e.extend({}, o.defaults, a), s = s || a.duration;
        var r = a.queue && a.axis.length > 1;
        return r && (s /= 2), a.offset = i(a.offset), a.over = i(a.over), this.each(function () {
            function l(t) {
                var i = e.extend({}, a, {
                    queue: !0, duration: s, complete: t && function () {
                        t.call(u, p, a)
                    }
                });
                h.animate(f, i)
            }

            if (null !== n) {
                var c, d = t(this), u = d ? this.contentWindow || window : this, h = e(u), p = n, f = {};
                switch (typeof p) {
                    case"number":
                    case"string":
                        if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(p)) {
                            p = i(p);
                            break
                        }
                        p = d ? e(p) : e(p, u);
                    case"object":
                        if (0 === p.length) return;
                        (p.is || p.style) && (c = (p = e(p)).offset())
                }
                var m = e.isFunction(a.offset) && a.offset(u, p) || a.offset;
                e.each(a.axis.split(""), function (e, t) {
                    var i = "x" === t ? "Left" : "Top", n = i.toLowerCase(), s = "scroll" + i, v = h[s](),
                        g = o.max(u, t);
                    if (c) f[s] = c[n] + (d ? 0 : v - h.offset()[n]), a.margin && (f[s] -= parseInt(p.css("margin" + i), 10) || 0, f[s] -= parseInt(p.css("border" + i + "Width"), 10) || 0), f[s] += m[n] || 0, a.over[n] && (f[s] += p["x" === t ? "width" : "height"]() * a.over[n]); else {
                        var b = p[n];
                        f[s] = b.slice && "%" === b.slice(-1) ? parseFloat(b) / 100 * g : b
                    }
                    a.limit && /^\d+$/.test(f[s]) && (f[s] = f[s] <= 0 ? 0 : Math.min(f[s], g)), !e && a.axis.length > 1 && (v === f[s] ? f = {} : r && (l(a.onAfterFirst), f = {}))
                }), l(a.onAfter)
            }
        })
    }, o.max = function (i, o) {
        var n = "x" === o ? "Width" : "Height", s = "scroll" + n;
        if (!t(i)) return i[s] - e(i)[n.toLowerCase()]();
        var a = "client" + n, r = i.ownerDocument || i.document, l = r.documentElement, c = r.body;
        return Math.max(l[s], c[s]) - Math.min(l[a], c[a])
    }, e.Tween.propHooks.scrollLeft = e.Tween.propHooks.scrollTop = {
        get: function (t) {
            return e(t.elem)[t.prop]()
        }, set: function (t) {
            var i = this.get(t);
            if (t.options.interrupt && t._last && t._last !== i) return e(t.elem).stop();
            var o = Math.round(t.now);
            i !== o && (e(t.elem)[t.prop](o), t._last = this.get(t))
        }
    }, o
}), function () {
    function e(e) {
        var i = e && e.config(),
            o = i && i.hasOwnProperty && i.hasOwnProperty("hideThisModule") && 1 == i.hideThisModule,
            n = window.jq || window.jQuery || window.$;
        return n(function () {
            function e(e, t) {
                for (var i = 0; i < e.length; i++) if (e[i] == t) return i;
                return -1
            }

            function t(t, i) {
                var o = e(t, i);
                o > -1 && t.splice(o, 1)
            }

            function i(e) {
                t(Ct, e), n(vt).each(function () {
                    this.id == e && (this.newNum = 0)
                })
            }

            function s(t, i) {
                e(t, i) < 0 && t.push(i)
            }

            function a(e, t) {
                if (ft != t.id) {
                    for (var i = 0; i < e.length; i++) if (e[i].id == t.id) return;
                    e.push(t)
                }
            }

            function r(e, t) {
                var i = e;
                return n(t).each(function () {
                    l(i, this)
                }), i
            }

            function l(e, t) {
                for (var i = 0; i < e.length; i++) if (e[i].packetId == t.packetId) return;
                e.push(t)
            }

            function c(e) {
                e.sort(function (e, t) {
                    var i = e.sendTime - t.sendTime;
                    return i
                })
            }

            function d(e) {
                return e.replace(/((ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?)/gi, '<a href="$1" title="$1" target="_blank" class="url2link">$1</a>')
            }

            function u(e, t) {
                e = String(e);
                var i = Array.prototype.slice.call(arguments, 1), o = Object.prototype.toString;
                return i.length ? (i = 1 == i.length ? null !== t && /\[object Array\]|\[object Object\]/.test(o.call(t)) ? t : i : i, e.replace(/#\{(.+?)\}/g, function (e, t) {
                    var n = i[t];
                    return "[object Function]" == o.call(n) && (n = n(t)), "undefined" == typeof n ? "" : n
                })) : e
            }

            function h(e) {
                return String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")
            }

            function p(e) {
                var t = new Date;
                e && t.setTime(e);
                var i = t.getHours(), o = t.getMinutes(), n = t.getSeconds();
                return i = i > 9 ? i : "0" + i, o = o > 9 ? o : "0" + o, n = n > 9 ? n : "0" + n, i + ":" + o + ":" + n
            }

            function f(e) {
                for (var t = 0, i = e.length, o = -1, n = 0; i > n; n++) o = e.charCodeAt(n), t += o >= 0 && 128 >= o ? 1 : 2;
                return t /= 2, Math.ceil(t)
            }

            function m(e) {
                var t, i, o, s, a = Array.prototype.slice.call(arguments, 1), r = a.slice(1);
                if (!(vt.length < 1 || a.length < 1)) return 1 == a.length ? n.isFunction(a[0]) ? (n(vt).each(function () {
                    this.id == e && a[0].apply(this)
                }), void 0) : (i = String(a[0]), n(vt).each(function () {
                    this.id == e && (t = this[i])
                }), "undefined" == typeof t ? "" : t) : n.isFunction(a[0]) ? (n(vt).each(function () {
                    this.id == e && a[0].apply(this, r)
                }), void 0) : (o = String(a[0]), s = a[1], n(vt).each(function () {
                    this.id == e && (this[o] = s)
                }), void 0)
            }

            function v(e) {
                var t = m(e, "iconUrl");
                return t.length > 0 ? t : m(e, "iconUrltag") ? mt : (w(e), mt)
            }

            function g(e) {
                var t = m(e, "iconUrl");
                return t.length > 0 ? !0 : !1
            }

            function b(e, t) {
                var i;
                if (e && t) for (var o = 0; o < e.length; o++) i = n('img.imPhoto[userid="' + e[o] + '"]', zt), i.attr("src", t[o]); else n(vt).each(function () {
                    i = n('img.imPhoto[userid="' + this.id + '"]', zt), this.iconUrl && this.iconUrl.length > 0 && i.attr("src", this.iconUrl)
                })
            }

            function w(e) {
                var t, i = Object.prototype.toString, o = /\[object Array\]/.test(i.call(e)), s = [];
                o ? n(e).each(function () {
                    var e = this.id || this.username.toLowerCase();
                    !g(e) && s.push(e)
                }) : s = g(e) ? s : [e], t = s.join(","), s.length < 1 || n(s).each(function () {
                    m(this, "iconUrltag", !0)
                })
            }

            function y(e) {
                var t = encodeURI(HTTP_SERVER + e);
                return t
            }

            function x(e, t) {
                var e = arguments[0], t = arguments[1];
                if (!this.messages && (this.messages = []), this.len1 = this.messages.length, this.messages = r(this.messages, e.newList), this.len2 = this.messages.length, c(this.messages), this.len1 != this.len2 && (1 != At && (this.offline = 0), t == _t && (j(), "max" == It && O())), e.newNum > 0 && (t != _t || "max" != It)) {
                    if (t != _t && "max" != It) {
                        _t = t;
                        var i = t + "," + m(t, "name");
                        M("add", i)
                    }
                    "close" == It && (It = "mini") && M("l", "mini"), s(Ct, t), !this.newNum && (this.newNum = 0), this.newNum += e.newNum
                }
            }

            function _(e) {
                var t = Tt.length;
                if (null != e && e.list.length > 0) Tt = [], n(e.list).each(function () {
                    var e = this.caller.toLowerCase(), t = this.callerScreenName, i = this, o = {id: e, name: t};
                    if (a(vt, o), s(Tt, e), i.newNum = 0, i.newList = [], n(this.messages.list).each(function () {
                        var e = this.messageBody, t = this.postTime, o = p(this.postTime), s = this.packetId,
                            a = this.messageFrom.toLowerCase(), r = a == ft ? 1 : 0;
                        e = n.trim(e), e = h(e), e = d(e);
                        var l = {isMe: r, message: e, time: o, source: "web", sendTime: t, packetId: s};
                        i.newList.push(l), "new" == this.type && a != ft && i.newNum++
                    }), m(e, x, i, e), this.messages.list.length < 1) {
                        var r = n.now() - Jt.nowtime;
                        return r > Ot && ($t = Pt), void 0
                    }
                    Jt.nowtime = n.now(), $t = qt
                }); else {
                    var i = n.now() - Jt.nowtime;
                    i > Ot && ($t = Pt)
                }
                t != Tt.length && A()
            }

            function k(e) {
                if (null != e) {
                    var t = e.current_username;
                    if (St = null == e.r_state ? St : e.r_state, It = null == e.l_state ? It : e.l_state, null != t && t != _t) {
                        var t = t.toLowerCase(), i = {id: t, name: e.current_screenname};
                        a(vt, i), _t = t, Q(_t, "other")
                    }
                }
            }

            function T(e) {
                var i = kt.length;
                null == e || e.list.length < 1 || n(e.list).each(function () {
                    var e = this.from.toLowerCase(), o = "unavailable" == this.status ? 1 : 0,
                        n = {id: e, name: this.fromScreenName};
                    this.from != ft && (a(vt, n), m(e, "offline", o), o ? t(kt, e) : s(kt, e), i != kt.length && (R(), S()))
                })
            }

            function C(e, t) {
                var e = e || {};
                if (list = e.result.list || [], list.length < 1) J(); else {
                    var i = h(t), o = "您的好友中没有找到“" + i + "”<br/>学习者中有" + list.length + "位相关用户：", s = u(ht, {val: o});
                    n(".fd-list li", zt).hide(), Kt.empty().append(n(s)).show(), ei.empty(), n(list).each(function () {
                        var e = this.username.toLowerCase(), t = {id: e, name: this.screenName, messages: []};
                        a(vt, t)
                    }), w(list), n(list).each(function () {
                        var e = this.username.toLowerCase(), t = u(ut, {
                            id: e,
                            name: this.screenName,
                            backUrl: v(e),
                            spaceUrl: y(e),
                            TplclassName: "seachAbleSky"
                        });
                        ei.append(n(t)).show()
                    })
                }
                tt.updateData().totop()
            }

            function I() {
                var t = m(_t, "name"), o = t && 4 == t.length ? "clip" : "ellipsis";
                n(".chat-nav .fd-foot-name", zt).css("text-overflow", o), n(".fd-name-on", zt).text(t), "close" == It ? (n(".overline", zt).hide(), ci.removeClass("nav2"), di.hide(), li.empty(), n(Tt).each(function () {
                    i(this)
                }), Tt = [], ni.hide(), si.hide()) : "mini" == It ? (n(".overline", zt).hide(), 1 == Tt.length && ci.removeClass("nav2") && di.hide(), ni.hide(), si.show()) : "max" == It && (e(Ct, _t) >= 0 && i(_t), A(), si.hide(), ni.show()), U()
            }

            function S() {
                Jt.onNum = kt.length, Vt.text("(" + Jt.onNum + ")"), "mini" == St ? (Xt.show(), Gt.hide(), Qt.css("z-index", "1")) : "max" == St && (Qt.css("z-index", "3"), Xt.hide(), Gt.show(), E()), U()
            }

            function E() {
                var e = Jt.nn || 0;
                if (Jt.nn = e + 1, Vt.text("(" + kt.length + ")"), !Ut) {
                    ei.hide(), Zt.empty(), Kt.hide();
                    var t = u(ht, {val: "当前没有好友在线 "});
                    kt.length > 0 ? n(kt).each(function () {
                        var e = u(ut, {
                            id: this,
                            name: m(this, "name"),
                            backUrl: v(this),
                            spaceUrl: y(this),
                            TplclassName: "friend-li"
                        });
                        n(e).appendTo(Zt)
                    }) : Kt.empty().append(n(t)).show(), tt.updateData(), ei.empty().hide(), U()
                }
            }

            function A() {
                var e = Tt.length;
                if (li.empty(), e > 1 ? fi.show() : fi.hide(), e > 0) {
                    var t = e >= 99 ? 99 : e;
                    mi.text(t), n(Tt).each(function () {
                        var e = m(this, "name");
                        "" != e && n('<li userid="' + this + '"><span class="fd-name">' + e + '</span><span class="li-close"></span></li>').appendTo(li)
                    })
                }
                var i = n('.chat-list-main li[userid="' + _t + '"]', zt), o = i.prev() || !1;
                n(".chat-list-main li", zt).removeClass("onfocus").removeClass("perFocus").removeClass("focusFont"), o && o.addClass("perFocus"), i.addClass("onfocus").addClass("focusFont"), Tt.length > 1 ? (ci.addClass("nav2"), di.show()) : (Tt.length < 1 || jt) && (jt = !1, ci.removeClass("nav2"), di.hide()), R()
            }

            function j() {
                var e = _t, t = m(e, "messages");
                ai.empty(), !t && (t = []), t.length <= 0 || (n(t).each(function () {
                    var t = this.isMe ? pt : m(e, "name"), i = this.isMe ? ft : e, o = u(dt, {
                        spaceUrl: y(i),
                        iconurl: v(i),
                        name: t,
                        message: this.message,
                        time: this.time,
                        id: i
                    });
                    Jt.stop ? Jt.stop = !1 : n(o).appendTo(ai)
                }), it.updateData().tobottom())
            }

            function U() {
                var t = Ct.length;
                n("li", zt).removeClass("new-tip"), t > 0 ? (Jt.newNum = 0, n(Ct).each(function () {
                    Jt.newNum += m(this, "newNum")
                }), Et != Jt.newNum && (Et = Jt.newNum, setTimeout(function () {
                    document.title = "【" + Et + "条新消息】"
                }, 0)), ti.addClass("new-tip"), si.find(".inner").addClass("new-tip"), n("li", zt).each(function () {
                    var t = n(this).attr("userid");
                    e(Ct, t) >= 0 && n(this).addClass("new-tip")
                })) : (setTimeout(function () {
                    document.title = Mt
                }, 0), Et = 0, ti.removeClass("new-tip"), si.find(".inner").removeClass("new-tip"))
            }

            function R() {
                pi.hide(), n(vt).each(function () {
                    n(".offline-home", zt)[0].href = y(_t);
                    var e = n('.chat-list-main li[userid="' + this.id + '"]', zt);
                    1 == this.offline ? e.addClass("offlineFont") : e.removeClass("offlineFont"), _t == this.id && Rt && (1 == this.offline ? pi.show() : pi.hide())
                })
            }

            function q(e, t) {
                var i = t || 1e3, o = e || "";
                window.Ext ? (n(".abPopWin button").live("click", function () {
                    setTimeout(function () {
                        window.location.reload()
                    }, i)
                }), Msg.showInfo(o)) : n.dialog({
                    title: "提示",
                    content: o,
                    width: 400,
                    modal: !0,
                    draggable: !1,
                    buttons: [{text: "确定", css: {backgroundColor: "#09F"}}],
                    close: function () {
                        window.location.reload()
                    }
                })
            }

            function $(e) {
                var t = {isCommonNotice: !0, noticeText: e};
                AUI.showFootTip(t)
            }

            function P() {
                var e = Dt || 0;
                At++, n.ajax({
                    url: PASSPORT_SERVER + "check.do?action=checkIfOut",
                    data: {lastReceiveTime: e, username: _t, organizationId: AUI.curUserInfo.organizationId},
                    dataType: "jsonp",
                    cache: !1,
                    success: function (e) {
                        if (!e.isOut) return Jt.chatpoll = setTimeout(function () {
                            P()
                        }, $t), void 0;
                        if (e.isOut) return q("请注意! 您的帐号已退出或已在其它地点登录！", 1e3), AUI._runAuiEvent("loginOut"), void 0;
                        e.popGM === !0 && $(e.groupmessage);
                        try {
                            Dt = e.lastReceiveTime, k(e.result.chatBoxState), _(e.result.chaters), I(), S(), T(e.result.recordList), Jt.chatpoll = setTimeout(function () {
                                P()
                            }, $t)
                        } catch (t) {
                        }
                        1 == At && (w(vt), j(), E(), A(), R(), U(), b(), ri.val(""), z(), ri.hide().show(), Qt.show(), tt.updateData().totop(), it.updateData().tobottom())
                    }
                })
            }

            function O(e) {
                var t = e || _t;
                n.ajax({
                    url: IM_SERVER + "chat.do?action=updateChatHistoryRecord&_=" + n.now(),
                    data: {username: t, time: Dt},
                    dataType: "jsonp"
                })
            }

            function N() {
                Tt.join(","), n.ajax({
                    url: IM_SERVER + "chat.do?action=batchUdateChatHistoryRecord",
                    data: {time: Dt},
                    cache: !1,
                    dataType: "jsonp"
                })
            }

            function M(e, t) {
                n.ajax({
                    url: IM_SERVER + "chat.do?action=processCommand",
                    data: {target: e, state: t},
                    cache: !1,
                    dataType: "jsonp"
                })
            }

            function L(e, t, i) {
                return "l" == e ? It = t : "r" == e && (St = t), M(e, t), ri.focus(), i && i.call(this), !1
            }

            function H() {
                var e = ii.val(), t = 0;
                return ei.empty().hide(), n(".fd-list li", zt).hide(), Kt.hide().empty(), 0 == e.length ? (Ut = !1, E(), void 0) : (Ut = !0, n(".fd-list .fd-name", zt).each(function () {
                    n(this).text().indexOf(e) >= 0 && (n(this).parent().show(), t++)
                }), 0 == t && D(), tt.updateData().totop(), void 0)
            }

            function D() {
                var e = ii.val();
                n.ajax({
                    url: SEARCH_SERVER + "su.do?key=" + e, dataType: "jsonp", success: function (t) {
                        C(t, e)
                    }, error: function () {
                        J()
                    }
                })
            }

            function J() {
                var e = h(ii.val()), t = "没有找到“" + e + "”" + Lt, i = u(ht, {val: t, inviteUrl: wt, TplclassName: Ht});
                ei.empty().hide(), Kt.hide().html(n(i)).show()
            }

            function z() {
                var e = ri.val(), e = n.trim(e), t = f(e), i = n(".textarea-tip");
                Jt.num2 = 200 - t, Jt.num2 = Jt.num2 < -99 ? -99 : Jt.num2;
                var o = Jt.num2 >= 0 ? "#999999" : "red";
                i.css("color", o), i.text(Jt.num2), Jt.num2 < 0 ? (ri.parent().addClass("warn"), n(".overline", zt).show(), n(".chat-box .fd-foot", zt).css("border-top-color", "#ff9999")) : (ri.parent().removeClass("warn"), n(".overline", zt).hide(), n(".chat-box .fd-foot", zt).css("border-top-color", "#cccccc"), at.hide())
            }

            function F() {
                var e = ri.val(), t = (new Date).getTime(), i = at;
                if (e = n.trim(e), e = h(e), e = d(e), !(e.length <= 0)) {
                    var o = p(), a = u(dt, {spaceUrl: gt, iconurl: v(ft), name: pt, message: e, time: o, id: ft});
                    if (Jt.num2 < 0) return i.css("opacity", "1").show(), setTimeout(function () {
                        Nt ? i.hide() : i.fadeOut(1e3)
                    }, 1e3), void 0;
                    n.ajax({
                        url: IM_SERVER + "chat.do?action=sendChatMessage&_=" + t,
                        data: {callee: _t, chatMessage: ri.val()},
                        dataType: "jsonp",
                        success: function (i) {
                            i.success ? n(vt).each(function () {
                                !this.messages && (this.messages = []);
                                var n = {isMe: 1, message: e, time: o, source: "local", sendTime: t, packetId: i.id};
                                this.id == _t && s(this.messages, n), c(this.messages)
                            }) : r.show()
                        },
                        error: function () {
                            r.show()
                        }
                    }), n(a).appendTo(ai);
                    var r = n(".failsend:last", zt);
                    it.updateData().tobottom(), Jt.nowtime = n.now(), $t = qt, ri.val("").focus(), ri.focus()
                }
            }

            function W(e) {
                var t = 30 * Tt.length, i = li.css("top"), o = parseFloat(i, 10), n = t + o;
                "down" == e && n > 300 ? li.animate({top: "-=30px"}, 100) : "up" == e && -29 > o && li.animate({top: "+=30px"}, 100), "upover" == e && -29 > o ? ui.addClass("bgc").find(".inner").addClass("innerhover") : "downover" == e && n > 300 && hi.addClass("bgc").find(".inner").addClass("innerhover"), B()
            }

            function B() {
                var e = 30 * Tt.length, t = li.css("top"), i = parseFloat(t, 10), o = e + i;
                i > 0 || 300 > e ? li.css("top", 0) : 301 > o && li.css("top", 300 - e)
            }

            function Q(e, t) {
                var t = t || "self", i = e + "," + m(e, "name");
                e != ft && (Rt = !0, _t = e, ("self" == t || "max" == t) && (M("add", i), "max" != It && M("l", "max"), It = "max", O()), "max" != t && ri.val(""), s(Tt, e), I(), U(), j(), R(), ri.focus(), z(), Jt.nowtime = n.now())
            }

            function V(e) {
                var e = e || window.event, t = n(e.target).closest(zt).length;
                t > 0 || ("max" == St && (St = "mini", M("r", "mini"), S()), "max" == It && (It = "mini", M("l", "mini"), I()))
            }

            function Y(e, t) {
                var i, o = t || m(e, "name"), e = e.toLowerCase();
                if (i = {id: e, name: o}, yt) {
                    if (e == ft || e == _t && "max" == It) return;
                    a(vt, i), n(vt).each(function () {
                        return e == this.id ? (this.name = o, void 0) : void 0
                    }), n(document).unbind("click", V), Q(e), setTimeout(function () {
                        n(document).bind("click", V)
                    }, 0)
                } else window.Ext ? popUpSignInWin() : require(["common/widget-poplogin"], function (e) {
                    e.init()
                })
            }

            function X() {
            }

            function G(e) {
                this.fo = e.fo[0] || e.fo || document.body, this.bottom = e.bottom || !1, this.right = e.right || !1, this.left = e.left || 0, this.top = e.top || 0, this.tipClassName = e.className || "myTip", this.text = e.text, this.tipwidth = e.tipwidth || "70px", this.ns6 = "Netscape" == navigator.appName ? !0 : !1, this.isIE = n.browser.msie || !1, this.tipDiv = "<div class=" + this.tipClassName + " >" + this.text + "</div>", n(this.tipDiv).appendTo(n(this.fo)), this.tip = n("." + this.tipClassName), this.tip.addClass("mytip"), this.upDataStyle()
            }

            function Z(e) {
                this.dh = e.dh, this.obj = e.obj, this.topH = e.topH || 340, this.eventName = /Firefox/i.test(navigator.userAgent) ? "DOMMouseScroll" : "mousewheel", this.ns6 = "Netscape" == navigator.appName ? !0 : !1, this.tag = !0
            }

            function K() {
                this.rocketdiv = n('<div class="rocketout"><a class="right-icon-btn"><div class="rocket hd  b1"></div><div class="bd wid"><span class="tip-icon rocket"></span><span class="tip">返回顶部</span></div></a></div>'), this.bW = n("body").width()
            }

            AUI.checkIfLogin();
            var et = n('<div id="J_fixedTools" class="fiexed-tools right-icon-wrap"></div>').appendTo(n("body"));
            n('<div id="J_webim"></div>').appendTo(et);
            var tt, it, ot, nt, st, at, rt = /\/(login|bindOrgUserToAsAccount)\.do/g,
                lt = rt.test(window.location.href),
                ct = ['<div class="chat">', '<div class="live-nav" style="display:none;"><div class="live-nav-inner"><span class="nav-text nav-text1"><span class="AbleLiveSpan">好友在线<span class="num-live"></span></span></span></div></div>', '<div class="live-face">', '<div class="face-nav right-mini"><span class="nav-text"><span class="AbleLiveSpan">好友在线<span class="num-live"></span></span></span></div>', '<div class="searchOut"><input type="text" name="keySearch" class="keySearch" value="查找好友" /><div class=searchbar></div></div>', '<div class="fd-user"><div class="scroll-w"><div class="findbox"></div><ul class="fd-list"></ul><ul class="fd-list ableskyfd"></ul></div><div class="scroll-y"><div class="scroll"></div></div></div>', '<div class="fd-foot live-face-foot right-mini"><div class="img-foot"></div></div>', "</div>", '<div  class="chat-box">', '<div class="face-nav left-mini"><div class="inner"><span class="fd-name-on"></span><div class="close1" ></div><div class="mini"></div></div></div>', '<div class="chat-inner"><div class="offline">好友已离线，您可以进入<a class="offline-home" target="_blank">好友空间</a>给他(她)留言<span class="offline-close"></span></div>', '<div class="chatwindow"><div class="scroll-w"><div class="chat-box-main"></div></div><div class="scroll-y"><div class="scroll"></div></div></div>', '<div class="tout"><textarea class="chat-box-textarea" rows=""cols=""></textarea></div><div class="fd-foot"><span class="textarea-tip">200</span><div class="send">发&nbsp;&nbsp;送</div></div></div>', '<div class="chat-list"><div class="list-up"><div class="inner"></div></div><div class="chat-list-center"><ul class="chat-list-main"></ul></div><div class="list-down"><div class="inner"></div></div></div>', "</div>", '<div class="chat-nav left-max"><div class="inner"><span class="fd-foot-name fd-name-on"></span><div class="onChatfd">等<span class="onChatNum">1</span>个会话</div><div class="close2"></div><div class="max"></div><div style="height:0;clear: both;"></div></div></div>', '<div class="overline"></div></div>'].join(""),
                dt = '<div class="talk"><a href="#{spaceUrl}" target="_blank"><div class="icon" style="float:left;width: 27px;height: 27px"><img class="imPhoto" userid="#{id}" src="#{iconurl}"/></div></a><div class="message"><a href="#{spaceUrl}" target="_blank"><strong  class="user-self talk-name">#{name}:&nbsp;&nbsp;</strong></a>#{message}<span class="time">&nbsp;&nbsp;-[#{time}]</span><span class="failsend">发送失败</span></div></div>',
                ut = '<li userid="#{id}" class=#{TplclassName}><div class="icon" style="float:left;width: 27px;height: 27px;margin-left:9px;_margin-left:5px;margin-top:1px;"><img class="imPhoto" userid="#{id}" src="#{backUrl}"  style="width: 27px;height: 27px;"/></div><span class="fd-name">#{name}</span><a class="home" href="#{spaceUrl}" target="_blank"><div class="home1"></div><div class="home-tip"></div></a></li>',
                ht = '<div class="findnone">#{val}<br/><a href="#{inviteUrl}" target="_blank" class="#{TplclassName}">邀&nbsp;&nbsp;请</a></div>',
                pt = (AUI.curUserInfo.isClientOnline, AUI.curUserInfo.screenName),
                ft = AUI.curUserInfo.username.toLowerCase(), mt = IMG_PATH + "/market/user-default.png",
                vt = [{id: ft, name: pt}], gt = (v(ft), y(ft)), bt = isAbleskyDomain ? HTTP_SERVER : "",
                wt = encodeURI(bt + "newAccountRedirect.do?action=invite&username=" + ft), yt = AUI.checkIfLogin(),
                xt = AUI.curUserInfo.isDescendantUserWithAuth || AUI.curUserInfo.isSuperOrganizationManager, _t = "",
                kt = [], Tt = [], Ct = [], It = "close", St = "mini", Et = (n.now(), 0), At = 0, jt = !0, Ut = !1,
                Rt = !0, qt = 5e3, $t = 15e3, Pt = $t, Ot = 3e4, Nt = n.browser.msie || !1, Mt = document.title,
                Lt = xt ? "" : "<br/>立即邀请同学一起来学习、讨论", Ht = xt ? "hidden" : "invitefd", Dt = 0, Jt = {};
            n(ct).appendTo(n("#J_webim"));
            var zt = n("#J_webim"), Ft = n(".right-mini", zt), Wt = n(".left-mini, .mini", zt),
                Bt = n(".left-max, .max", zt), Qt = n(".chat", zt), Vt = n(".num-live", zt), Yt = n(".nav-text1", zt),
                Xt = n(".live-nav", zt), Gt = n(".live-face", zt), Zt = n(".fd-list", zt), Kt = n(".findbox", zt),
                ei = n(".ableskyfd", zt);
            n(".live-face-foot", zt);
            var ti = n(".live-nav-inner", zt), ii = n(".keySearch", zt), oi = ii.val(), ni = n(".chat-box", zt),
                si = n(".chat-nav", zt), ai = n(".chat-box-main", zt), ri = n(".chat-box-textarea", zt),
                li = n(".chat-list-main", zt), ci = n(".face-nav", zt), di = n(".chat-list", zt),
                ui = n(".list-up", zt), hi = n(".list-down", zt);
            n(".off-tip", zt);
            var pi = n(".offline", zt), fi = n(".onChatfd", zt), mi = n(".onChatNum", zt);
            Qt.hide(), Nt && (n(".face-nav", zt).append(n('<div class="tl"></div><div class="tr"></div>')), n(".live-nav, .chat-nav", zt).append(n('<div class="tl1"></div><div class="tr1"></div>'))), o && zt.hide(), X.prototype = {
                init: function () {
                    return Jt = this, lt ? (Qt.hide(), void 0) : (yt ? Jt.logInInit() : Jt.logOutInit(), void 0)
                }, logInInit: function () {
                    Jt.bindEvent(), P()
                }, logOutInit: function () {
                    Yt.css("background-position", "0 -339px"), n(".live-nav", zt).bind({
                        mouseenter: function () {
                            n(this).addClass("bgc"), Yt.css("background-position", "0 -372px")
                        }, mouseleave: function () {
                            n(this).removeClass("bgc"), Yt.css("background-position", "0 -339px")
                        }, click: function () {
                            window.Ext ? popUpSignInWin() : require(["common/widget-poplogin"], function (e) {
                                e.init()
                            })
                        }
                    }), Qt.show()
                }, bindEvent: function () {
                    var i = ii;
                    n(document).bind("click", V), Xt.live("click", function () {
                        tt.updateData().totop(), L("r", "max", S)
                    }), Ft.live("click", function () {
                        L("r", "mini", S)
                    }), n(".chat-box .close1, .close2", zt).click(function () {
                        return L("l", "close", function () {
                            jt = !0, N(), I()
                        }), !1
                    }), Wt.click(function () {
                        return L("l", "mini", I), !1
                    }), Bt.click(function () {
                        return Q(_t, "max"), ri.focus(), !1
                    }), n(".fd-list li", zt).live({
                        mouseenter: function (t) {
                            var i = this.attributes.userid.nodeValue, t = t || window.event;
                            return t.target, n(this).addClass("bg"), Jt.a = n(this).find("a"), e(Ct, i) >= 0 ? !1 : (ot.upData(this), Jt.a.show(), void 0)
                        }, mouseleave: function () {
                            n(".fd-list li", zt).removeClass("bg"), n(".fd-list li", zt).find("a").hide()
                        }, click: function (e) {
                            var t = this.attributes.userid.nodeValue;
                            ("max" != It || t != _t) && Q(t), ri.focus(), e.stopPropagation()
                        }
                    }), n(".fd-list .home", zt).live({
                        mouseenter: function () {
                            st.show()
                        }, mouseleave: function () {
                            Jt.gt = setTimeout(function () {
                                st.hide()
                            }, 100)
                        }, click: function (e) {
                            e.stopPropagation()
                        }
                    }), n(".homeTip", zt).live({
                        mouseenter: function () {
                            clearTimeout(Jt.gt), Jt.a.show()
                        }, mouseleave: function () {
                            Jt.a.hide(), st.hide()
                        }
                    }), i.live({
                        focus: function () {
                            i.addClass("focus"), n(".searchbar", zt).addClass("searchbarfocus"), Ut = !0, i.val() == oi && i.val("")
                        }, blur: function () {
                            i.removeClass("focus"), n(".searchbar", zt).removeClass("searchbarfocus"), "" == i.val() && i.val(oi) && (Ut = !1)
                        }, keyup: function () {
                            H()
                        }
                    }), n(".chat-list-main li", zt).live({
                        mouseenter: function () {
                            var t = this.attributes.userid.nodeValue;
                            t != _t && n(this).css("background-color", "#EEEEEE"), e(Ct, t) >= 0 || (Tt.length < 2 ? n(this).find(".li-close").hide() : n(this).find(".li-close").show())
                        }, mouseleave: function () {
                            var e = this.attributes.userid.nodeValue;
                            e != _t && n(this).css("background-color", "#F7F7F7"), n(this).find(".li-close").hide()
                        }, click: function () {
                            var e = this.attributes.userid.nodeValue;
                            return ri.focus(), e != _t && Q(e), !1
                        }
                    }), n(".chat-list-main .li-close", zt).live({
                        mouseenter: function () {
                            n(this).addClass("li-closehover")
                        }, mouseleave: function () {
                            n(this).removeClass("li-closehover")
                        }, click: function () {
                            if (!(Tt.length < 2)) {
                                var e = n(this).parent(), i = e.attr("userid"),
                                    o = n('.chat-list-main li[userid="' + _t + '"]', zt),
                                    s = o.next().attr("userid") || o.prev().attr("userid"), a = i + "," + m(i, "name");
                                return _t = i == _t ? s : _t, Tt.length > 0 && (jt = !1), t(Tt, i), M("del", a), Q(_t), s == _t && ri.val("").focus(), B(), !1
                            }
                        }
                    }), ui.click(function () {
                        W("up")
                    }).hover(function () {
                        W("upover")
                    }, function () {
                        ui.addClass("bgc").find(".inner").removeClass("innerhover")
                    }), hi.click(function () {
                        W("down")
                    }).hover(function () {
                        W("downover")
                    }, function () {
                        hi.addClass("bgc").find(".inner").removeClass("innerhover")
                    }), n(".offline-close", zt).click(function () {
                        return pi.hide(), Rt = !1, !1
                    }), ri.live({
                        keydown: function (e) {
                            var t = e || window.event, i = t.charCode || t.keyCode,
                                o = n(this).val().replace("\n", "").replace(/^\s+$/, "");
                            return z(), 13 == i ? (n(this).val(o), F(), z(), !1) : void 0
                        }, keyup: function () {
                            z()
                        }, change: function () {
                            z()
                        }
                    }), n(".send", zt).live("click", function () {
                        F(), ri.focus(), z()
                    }), n(".send, .mini, .close1, .close2, .max", zt).each(function () {
                        var e = this.className + "hover";
                        n(this).attr("hoverclass", e)
                    }).live({
                        mouseenter: function () {
                            n(this).addClass(n(this).attr("hoverclass"))
                        }, mouseleave: function () {
                            n(this).removeClass(n(this).attr("hoverclass"))
                        }
                    }), n(".live-nav, .live-face-foot, .chat-nav", zt).hover(function () {
                        n(this).addClass("bgc")
                    }, function () {
                        n(this).removeClass("bgc")
                    })
                }
            }, G.prototype = {
                upDataStyle: function () {
                    this.tip && (this.isIE && this.left && (this.left = parseFloat(this.left) - 1 + "px"), this.bottom ? this.tip.css("bottom", this.bottom) : this.tip.css("top", this.top), this.right ? this.tip.css("right", this.right) : this.tip.css("left", this.left))
                }, upData: function (e, t, i) {
                    for (var o, n, s = 0, a = 0, r = e, l = t || this.left, c = i || this.top; null != r && r != this.fo;) s += r.offsetLeft, a += r.offsetTop, this.ns6 || (r.currentStyle.borderLeftWidth > 0 ? s += r.currentStyle.borderLeftWidth : "", r.currentStyle.borderTopWidth > 0 ? a += r.currentStyle.borderTopWidth : ""), r = r.offsetParent;
                    o = parseFloat(l) + parseFloat(s), n = parseFloat(c) + parseFloat(a), this.tip.css({
                        left: o,
                        top: n
                    })
                }, getTip: function () {
                    return this.tip
                }
            }, Z.prototype = {
                init: function () {
                    this.wh = this.obj.find(".scroll-w").height();
                    var e, t = this.dh, i = this.wh, o = this.obj;
                    return this.hh = t * t / i, this.rate = t / this.hh, e = this.hh, this.strip = o.find(".scroll"), this.block = o.find(".scroll-w"), this.scY = o.find(".scroll-y"), t > i ? (o.find(".scroll-y").hide(), o.find(".scroll-w").css("top", "-1px")) : o.find(".scroll-y").show(), o.find(".scroll-y").height(t), this.strip.height(e), this.strip.css("top", 0), this.block.css("top", 0), this.strip.append(n('<div class="sct"></div><div class="scc"></div><div class="scb"></div>')), this.bindEvent(), this.t1 = 0, this.t2 = 0, this.isWheel = 1, this
                }, bindEvent: function () {
                    function e() {
                        !u || u > f || (u++, t = h.getHeight() - s, d -= 20, d = 21 > d ? 20 : d, a = h.topH - parseInt(h.strip.css("top")), oh = parseInt(h.strip.height()), r = a - oh, l = t - a, c = r - t, l = 100 > l ? l : l / f, c = 100 > c ? c : c / f, i = t >= a ? -l : c, i = r >= t ? c : -l, h.t1 = h.t1 + i, h.t2 = h.t2 - i * h.rate, h.scrollTop(), t >= r - 1 && a + 1 >= t || (o = setTimeout(function () {
                            e()
                        }, d)))
                    }

                    var t, i, o, s, a, r, l, c, d, u, h = this, p = 0, f = 3;
                    h.addEvent(h.obj[0], h.eventName, function (e) {
                        var t = e || window.event, i = 0;
                        0 != h.isWheel && (h.stopPropagation(t), t.wheelDelta ? i = t.wheelDelta / 120 : t.detail && (i = -t.detail / 3), h.t1 = h.t1 - 5 * i, h.t2 = h.t2 + 5 * i * h.rate, h.scrollTop(), h.preventDefault(t))
                    }), h.obj.live({
                        mouseenter: function () {
                            h.tag = !1
                        }, mouseleave: function () {
                            h.tag = !0
                        }
                    }), h.scY.live({
                        mousedown: function (t) {
                            var t = t || window.event;
                            return s = t.clientY, d = 160, u = 1, e(), !1
                        }, mouseup: function () {
                            return p = 0, u = 0, clearTimeout(o), !1
                        }
                    }), h.strip.live({
                        mousedown: function (e) {
                            return e = e || window.event, t = e.clientY, p = 1, n(document).mousemove(function (e) {
                                return p && (e = e || window.event, i = e.clientY - t, t = e.clientY, h.t1 = h.t1 + i, h.t2 = h.t2 - i * h.rate, h.scrollTop()), !1
                            }).mouseup(function () {
                                return p = 0, !1
                            }), !1
                        }, mouseenter: function () {
                            this.style.backgroundColor = "#DDDDDD", n(this).addClass("schover")
                        }, mouseleave: function () {
                            n(this).removeClass("schover"), this.style.backgroundColor = "#E7E7E7"
                        }
                    })
                }, scrollTop: function () {
                    var e = this.t1, t = this.t2, i = this.dh, o = this.hh, n = this.wh;
                    return e = e > i - o ? i - o : e, e = 0 >= e ? 0 : e, t = t >= 0 ? 0 : t, t = i - n > t ? i - n : t, this.t1 = e, this.t2 = t, this.strip.css("top", e + "px"), this.block.css("top", t + "px"), this
                }, updateData: function () {
                    this.wh = this.obj.find(".scroll-w").height();
                    var e = this.dh, t = this.wh, i = this.obj;
                    return this.hh = e * e / t, this.rate = e / this.hh, e > t ? (i.find(".scroll-y").hide(), i.find(".scroll-w").css("top", "-1px"), this.isWheel = 0) : (i.find(".scroll-y").show(), this.isWheel = 1), this.hh = this.hh < 30 ? 30 : this.hh, this.strip.height(this.hh), this
                }, tobottom: function () {
                    var e = this.dh, t = this.wh, i = this.hh;
                    return t > e && this.tag && (this.strip.css("top", e - i), this.block.css("top", e - t)), this
                }, totop: function () {
                    return this.strip.css("top", 0), this.block.css("top", 0), this
                }, getHeight: function () {
                    var e;
                    return e = "CSS1Compat" == document.compatMode ? document.documentElement.clientHeight : document.body.clientHeight
                }, addEvent: function (e, t, i) {
                    e.addEventListener ? e.addEventListener(t, i, !1) : e.attachEvent ? e.attachEvent("on" + t, function () {
                        i.call(e, window.event)
                    }) : e["on" + t] = i
                }, stopPropagation: function (e) {
                    e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0
                }, preventDefault: function (e) {
                    e.preventDefault ? e.preventDefault() : e.returnValue = !1
                }
            }, K.prototype = {
                init: function (e) {
                    var t = this;
                    this.option = e || {}, t.rocketdiv.appendTo(zt), t.rocket = n(".rocketout", zt), t.rocketTip = new G({
                        fo: t.rocket,
                        className: "myrocketTip",
                        left: "-8px",
                        top: "-34px",
                        text: "回到顶端"
                    }), t.tip = t.rocketTip.getTip(), t.tip.hide(), t.rocket.addClass("overHidden"), t.rocket.hide(), t.hasScroll = t.isScroll(), t.upData(t.option.dom), t.option.dom.bind("resize", function () {
                        t.upData(t.option.dom)
                    }).bind("scroll", function () {
                        t.upData(t.option.dom)
                    });
                    var i = function () {
                        t.rocket.live({
                            click: function () {
                                t.option.dom.scrollTo(0, {
                                    duration: 200, onAfter: function () {
                                        t.rocket.removeClass("rockethover").addClass("overHidden")
                                    }
                                })
                            }, mouseenter: function () {
                                n(this).addClass("rockethover").removeClass("overHidden"), t.tip.show()
                            }, mouseleave: function () {
                                n(this).removeClass("rockethover").addClass("overHidden"), t.tip.hide()
                            }
                        })
                    };
                    window.Ext ? i() : require(["lib/jquery/jquery.scrollTo-2.1.2"], function () {
                        i()
                    })
                }, upData: function (e) {
                    0 == e.scrollTop() ? this.rocket.hide() : this.hasScroll.scrollX ? this.rocket.hide() : this.rocket.show()
                }, isScroll: function (e) {
                    for (var t = e ? [e] : [document.documentElement, document.body], i = !1, o = 0; o < t.length; o++) {
                        var n = t[o], s = n.scrollLeft;
                        n.scrollLeft += s > 0 ? -1 : 1, n.scrollLeft != s && (i = !0), n.scrollLeft = s
                    }
                    return {scrollX: i}
                }
            }, tt = new Z({obj: n(".fd-user"), dh: 280, topH: 310}), it = new Z({
                obj: n(".chatwindow"),
                dh: 250,
                topH: 340
            }), tt.init().updateData().totop(), it.init().updateData().tobottom(), ot = new G({
                fo: zt,
                className: "homeTip",
                left: "147",
                top: "-25",
                text: "去往空间"
            }), st = ot.getTip(), st.hide(), nt = new G({
                fo: zt,
                className: "myoverTip",
                bottom: "26px",
                right: "232px",
                text: "字太多啦"
            }), at = nt.getTip(), at.hide();
            var vi = new K, gi = window.screen.width;
            window.screen.height, gi > 1024 && vi.init({dom: n(".org-right-wrap").length > 0 ? n(".org-right-wrap") : n(window)});
            var bi = new X;
            bi.init(), AUI.webim = AUI.webim || {}, AUI.webim.init = function (e) {
                bi.init(e)
            }, AUI.webim.chatWithMe = function (e, t) {
                Y(e, t)
            }
        }), t ? {} : void 0
    }

    var t = "function" == typeof define && define.amd && define.amd.jQuery;
    t && !window.Ext ? define("accessory/webim", ["module", "jquery", "common/global"], e) : e()
}(window.jQuery), function (e) {
    function t(e) {
        return "object" == typeof e ? e : {top: e, left: e}
    }

    var i = e.scrollTo = function (t, i, o) {
        e(window).scrollTo(t, i, o)
    };
    i.defaults = {axis: "xy", duration: parseFloat(e.fn.jquery) >= 1.3 ? 0 : 1, limit: !0}, i.window = function () {
        return e(window)._scrollable()
    }, e.fn._scrollable = function () {
        return this.map(function () {
            var t = this,
                i = !t.nodeName || -1 != e.inArray(t.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"]);
            if (!i) return t;
            var o = (t.contentWindow || t).document || t.ownerDocument || t;
            return /webkit/i.test(navigator.userAgent) || "BackCompat" == o.compatMode ? o.body : o.documentElement
        })
    }, e.fn.scrollTo = function (o, n, s) {
        return "object" == typeof n && (s = n, n = 0), "function" == typeof s && (s = {onAfter: s}), "max" == o && (o = 9e9), s = e.extend({}, i.defaults, s), n = n || s.duration, s.queue = s.queue && s.axis.length > 1, s.queue && (n /= 2), s.offset = t(s.offset), s.over = t(s.over), this._scrollable().each(function () {
            function a(e) {
                c.animate(u, n, s.easing, e && function () {
                    e.call(this, o, s)
                })
            }

            if (null != o) {
                var r, l = this, c = e(l), d = o, u = {}, h = c.is("html,body");
                switch (typeof d) {
                    case"number":
                    case"string":
                        if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(d)) {
                            d = t(d);
                            break
                        }
                        if (d = e(d, this), !d.length) return;
                    case"object":
                        (d.is || d.style) && (r = (d = e(d)).offset())
                }
                e.each(s.axis.split(""), function (e, t) {
                    var o = "x" == t ? "Left" : "Top", n = o.toLowerCase(), p = "scroll" + o, f = l[p], m = i.max(l, t);
                    if (r) u[p] = r[n] + (h ? 0 : f - c.offset()[n]), s.margin && (u[p] -= parseInt(d.css("margin" + o)) || 0, u[p] -= parseInt(d.css("border" + o + "Width")) || 0), u[p] += s.offset[n] || 0, s.over[n] && (u[p] += d["x" == t ? "width" : "height"]() * s.over[n]); else {
                        var v = d[n];
                        u[p] = v.slice && "%" == v.slice(-1) ? parseFloat(v) / 100 * m : v
                    }
                    s.limit && /^\d+$/.test(u[p]) && (u[p] = u[p] <= 0 ? 0 : Math.min(u[p], m)), !e && s.queue && (f != u[p] && a(s.onAfterFirst), delete u[p])
                }), a(s.onAfter)
            }
        }).end()
    }, i.max = function (t, i) {
        var o = "x" == i ? "Width" : "Height", n = "scroll" + o;
        if (!e(t).is("html,body")) return t[n] - e(t)[o.toLowerCase()]();
        var s = "client" + o, a = t.ownerDocument.documentElement, r = t.ownerDocument.body;
        return Math.max(a[n], r[n]) - Math.min(a[s], r[s])
    }
}(jQuery), define("lib/jquery/jquery.scrollto", function () {
}), function (e) {
    function t(t) {
        function i(t) {
            var i = "b4", o = "APP下载", n = "";
            n = "showNengLi" == c ? isAbleskyDomain ? IMG_PATH + "/icon_v6/productPage/main/app_2code_1.png" : HTTP_SERVER + "eventsRedirect.do?action=getQRCode&qrcode=" + BASE_PATH + "app/download/ableCourseOne" : "showWangXiao" == c ? HTTP_SERVER + "eventsRedirect.do?action=getQRCode&qrcode=" + BASE_PATH + "app/download/ableCourseOne?appType=netSchool&size=75" : "showDingZhi" == c ? HTTP_SERVER + "eventsRedirect.do?action=getQRCode&qrcode=" + BASE_PATH + "app/download/ableCourseOne?appType=netSchool&size=75" : "true" === d ? HTTP_SERVER + "eventsRedirect.do?action=getQRCode&qrcode=" + BASE_PATH + "app/download/ableCourseOne?appType=netSchool&size=75" : isAbleskyDomain ? IMG_PATH + "/icon_v6/productPage/main/app_2code_1.png" : HTTP_SERVER + "eventsRedirect.do?action=getQRCode&qrcode=" + BASE_PATH + "app/download/ableCourseOne";
            var s = "";
            if (s = "showNengLi" == c ? '<div class="qrCode-warp"><img src="' + n + '" width="110" height="110"><span>扫码下载</span> <div class="triangle-outer"><div class="triangle-inner"></div></div></div>' : "showWangXiao" == c || "showDingZhi" == c ? "null" != l ? '<div class="qrCode-warp"><p style="font-size:18px;font-weight:bold;margin-top:5px;">邀请码：' + l + '</p><img style="margin:3px 21px 3px" src="' + n + '" width="126" height="126"><span>扫码下载</span></div>' : '<div class="qrCode-warp"><img src="' + n + '" width="110" height="110"><span>扫码下载</span> <div class="triangle-outer"><div class="triangle-inner"></div></div></div>' : "true" === d && "null" != l ? '<div class="qrCode-warp"><p style="font-size:18px;font-weight:bold;margin-top:5px;">邀请码：' + l + '</p><img style="margin:3px 21px 3px" src="' + n + '" width="126" height="126"><span>扫码下载</span></div>' : '<div class="qrCode-warp"><img src="' + n + '" width="110" height="110"><span>扫码下载</span> <div class="triangle-outer"><div class="triangle-inner"></div></div></div>', "wx" == t) {
                i = "b5", o = "进入<br>网校";
                var a = encodeURIComponent(MOBILE_SERVER + "orgWebSchool.do?action=getOrganizationByTwodimensional&organizationId=" + r);
                s = '<div class="qrCode-warp"><img src="' + HTTP_SERVER + "eventsRedirect.do?action=getQRCode&qrcode=" + a + '&size=150" width="110" height="110"><span>网校首页</span><div class="triangle-outer"><div class="triangle-inner"></div></div></div>'
            }
            var u = e('<div class=""></div>');
            u.appendTo(e("#J_fixedTools"));
            var h = "hidden";
            u.append('<a class="feedback-container right-icon-btn"><div class="hd ' + i + '"></div><div class="bd ' + h + '"><span>' + o + "</span></div>" + s + "</a>")
        }

        function o() {
            var t = e('<div class="fixed-accessories"></div>');
            return t.appendTo(e("#J_fixedTools"))
        }

        function n(t, i) {
            var n = e('<a class="feedback-container right-icon-btn"><div class="hd feedback b3"></div><div class="bd wid"><span class="tip-icon feedback"></span><span class="tip">问题反馈</span></div></a>');
            return n.click(i), (new o).append(n), n
        }

        function s() {
            function t() {
                function t(t) {
                    var o = e(t), n = e.trim(o.text());
                    "提交" == n ? (o.attr("disabled", !0), i(t)) : v.close()
                }

                function i(t) {
                    var i = e.trim(l.val()), n = e(".email-content", r).val(),
                        a = /^([\w]+)(.[\w]+)*@([\w-]+\.){1,5}([A-Za-z]){2,4}$/, c = i.length, d = e(t);
                    i == h ? (o("请输入您的意见或建议"), d.attr("disabled", !1)) : c > u ? (o("字数超出限制,请删减后重试"), d.attr("disabled", !1)) : a.test(n) || n == p ? (s.html("").hide(), e.ajax({
                        url: HTTP_SERVER + "seekFeedback.do?action=postFeedback",
                        dataType: "jsonp",
                        data: {content: i, email: n, pageUrl: (location.href || "").substring(0, 200)},
                        success: function (e) {
                            1 == e.success ? (d.text("确定"), d.parent().children().eq(1).css({display: "none"}), d.attr("disabled", !1), v.setContent("提交成功，感谢您的反馈！如有急需解决的问题，您可以直接联系网校页面右上角的技术客服，谢谢！")) : v.close()
                        },
                        error: function () {
                            v.close()
                        }
                    })) : (s.html("请检查输入的邮箱格式！").show(), d.attr("disabled", !1))
                }

                function o(e) {
                    c.html(e).show(), l.addClass("error")
                }

                function n() {
                    c.html("").hide(), l.removeClass("error")
                }

                var s = null, a = null, r = null, l = null, c = null, d = null, u = 200, h = "您的意见和建议将帮助我们更好的成长！",
                    p = "我们将把答复发送到您的邮箱", f = AUI.checkIfLogin(), m = AUI.curUserInfo.email;
                f && m && (p = m);
                var v = e.dialog({
                    boxid: "index-pop",
                    title: "请您留言",
                    headStyle: {backgroundColor: "#09F"},
                    modal: !0,
                    content: ['<div class="accessory-feedback-dialog" id="J_feedbackDialog">', '<div class="title">内容:</div>', "<textarea>", h, "</textarea>", '<div class="errorContent"></div>', '<div class="tip">', '<div class="char_counter"><span class="used">0</span>/<span class="total">', u, "</span></div>", '<div class="email-wrap">', '<div class="email">邮箱:</div>', '<input type="text" class="email-content" value="', p, '" />', '<div class="eamilError"></div>', "</div>"].join(""),
                    width: 453,
                    buttons: [{
                        text: "提交", css: {backgroundColor: "#09F"}, click: function () {
                            t(e(this))
                        }
                    }, {
                        text: "取消", css: {marginLeft: "10px"}, click: function () {
                            t(e(this))
                        }
                    }]
                });
                r = e("#J_feedbackDialog"), l = e("textarea", r), c = e(".errorContent", r), d = e(".used", r), s = e(".eamilError", r), a = e(".email-content", r), l.die().live({
                    focus: function () {
                        n(), e.trim(l.val()) == h && l.val("").css("color", "#555")
                    }, blur: function () {
                        0 == e.trim(l.val()).length && l.val(h).css("color", "#AAA")
                    }, keyup: function () {
                        var e = l.val().length;
                        d.html(e), e > u ? d.css("color", "#f33") : d.css("color", "#555")
                    }
                }), a.on({
                    focus: function () {
                        s.html("").hide(), a.val() == p && a.val("").css("color", "#555")
                    }, blur: function () {
                        0 == a.val().length && a.val(p).css("color", "#AAA")
                    }
                })
            }

            return e("#J_feedbackDialog").length ? (e("#J_feedbackDialog textarea").focus(), void 0) : (window.Ext ? t() : require(["lib/jquery/jquery.scrollto", "common/global"], function () {
                t()
            }), void 0)
        }

        var a = t && t.config();
        if (a && a.hasOwnProperty && a.hasOwnProperty("hideThisModule") && a.hideThisModule) return a.hasOwnProperty("hideThisModuleReverse") && a.hideThisModuleReverse && i("app"), void 0;
        var r = e("input[name=organizationId]").val();
        e("input[name=isCustom]").val();
        var l = e("input[name=inviteCode]").val(), c = e("input[name=qrCodeType]").val(),
            d = e("input[name=isShowNetSchoolApp]").val(), u = e("input[name=isSignThreeAndFour]").val();
        console.log(c), e(function () {
            isAbleskyDomain && (new n("求反馈", s), a && a.hasOwnProperty && a.hasOwnProperty("hideThisModuleReverse") && a.hideThisModuleReverse && i("app")), r && (i("app"), "true" === u ? i("wx") : "")
        })
    }

    var i = "function" == typeof define && define.amd && define.amd.jQuery;
    i && !window.Ext ? define("accessory/feedback", ["module", "jquery", "common/global", "accessory/webim"], t) : t()
}(window.jQuery), function (e) {
    function t() {
        e.each(i, function () {
            this.refresh(!0)
        })
    }

    var i = [], o = /^url\(["']?([^"'\)]*)["']?\);?$/i, n = /\.png$/i, s = e.browser.msie && 6 == e.browser.version;
    e(window).resize(t), e.Poshytip = function (t, i) {
        this.$elm = e(t), this.opts = e.extend({}, e.fn.poshytip.defaults, i), this.$tip = e(['<div class="', this.opts.className, '">', '<div class="tip-inner tip-bg-image"></div>', '<div class="tip-arrow tip-arrow-top tip-arrow-right tip-arrow-bottom tip-arrow-left"></div>', "</div>"].join("")).appendTo(document.body), this.$arrow = this.$tip.find("div.tip-arrow"), this.$inner = this.$tip.find("div.tip-inner"), this.disabled = !1, this.content = null, this.init()
    }, e.Poshytip.prototype = {
        init: function () {
            i.push(this);
            var t = this.$elm.attr("title");
            if ("[title]" == this.opts.content && (void 0 === t || "" == t)) return !0;
            if (this.$elm.data("title.poshytip", void 0 !== t ? t : null).data("poshytip", this), "none" != this.opts.showOn) switch (this.$elm.bind({
                "mouseenter.poshytip": e.proxy(this.mouseenter, this),
                "mouseleave.poshytip": e.proxy(this.mouseleave, this)
            }), this.opts.showOn) {
                case"hover":
                    "cursor" == this.opts.alignTo && this.$elm.bind("mousemove.poshytip", e.proxy(this.mousemove, this)), this.opts.allowTipHover && this.$tip.hover(e.proxy(this.clearTimeouts, this), e.proxy(this.mouseleave, this));
                    break;
                case"focus":
                    this.$elm.bind({
                        "focus.poshytip": e.proxy(this.show, this),
                        "blur.poshytip": e.proxy(this.hide, this)
                    })
            }
        }, mouseenter: function () {
            return this.disabled ? !0 : (this.$elm.attr("title", ""), "focus" == this.opts.showOn ? !0 : (this.clearTimeouts(), this.showTimeout = setTimeout(e.proxy(this.show, this), this.opts.showTimeout), void 0))
        }, mouseleave: function (t) {
            if (this.disabled || this.asyncAnimating && (this.$tip[0] === t.relatedTarget || jQuery.contains(this.$tip[0], t.relatedTarget))) return !0;
            var i = this.$elm.data("title.poshytip");
            return null !== i && this.$elm.attr("title", i), "focus" == this.opts.showOn ? !0 : (this.clearTimeouts(), this.hideTimeout = setTimeout(e.proxy(this.hide, this), this.opts.hideTimeout), void 0)
        }, mousemove: function (e) {
            return this.disabled ? !0 : (this.eventX = e.pageX, this.eventY = e.pageY, this.opts.followCursor && this.$tip.data("active") && (this.calcPos(), this.$tip.css({
                left: this.pos.l,
                top: this.pos.t
            }), this.pos.arrow && (this.$arrow[0].className = "tip-arrow tip-arrow-" + this.pos.arrow)), void 0)
        }, show: function () {
            this.disabled || this.$tip.data("active") || (this.reset(), this.update(), this.display(), this.opts.timeOnScreen && setTimeout(e.proxy(this.hide, this), this.opts.timeOnScreen))
        }, hide: function () {
            !this.disabled && this.$tip.data("active") && this.display(!0)
        }, reset: function () {
            this.$tip.queue([]).detach().css("visibility", "hidden").data("active", !1), this.$inner.find("*").poshytip("hide"), this.opts.fade && this.$tip.css("opacity", this.opacity), this.$arrow[0].className = "tip-arrow tip-arrow-top tip-arrow-right tip-arrow-bottom tip-arrow-left", this.asyncAnimating = !1
        }, update: function (e, t) {
            if (!this.disabled) {
                var i = void 0 !== e;
                if (i) {
                    if (t || (this.opts.content = e), !this.$tip.data("active")) return
                } else e = this.opts.content;
                var o = this, n = "function" == typeof e ? e.call(this.$elm[0], function (e) {
                    o.update(e)
                }) : "[title]" == e ? this.$elm.data("title.poshytip") : e;
                this.content !== n && (this.$inner.empty().append(n), this.content = n), this.refresh(i)
            }
        }, refresh: function (t) {
            if (!this.disabled) {
                if (t) {
                    if (!this.$tip.data("active")) return;
                    var i = {left: this.$tip.css("left"), top: this.$tip.css("top")}
                }
                this.$tip.css({
                    left: 0,
                    top: 0
                }).appendTo(document.body), void 0 === this.opacity && (this.opacity = this.$tip.css("opacity"));
                var a = this.$tip.css("background-image").match(o), r = this.$arrow.css("background-image").match(o);
                if (a) {
                    var l = n.test(a[1]);
                    s && l ? (this.$tip.css("background-image", "none"), this.$inner.css({
                        margin: 0,
                        border: 0,
                        padding: 0
                    }), a = l = !1) : this.$tip.prepend('<table border="0" cellpadding="0" cellspacing="0"><tr><td class="tip-top tip-bg-image" colspan="2"><span></span></td><td class="tip-right tip-bg-image" rowspan="2"><span></span></td></tr><tr><td class="tip-left tip-bg-image" rowspan="2"><span></span></td><td></td></tr><tr><td class="tip-bottom tip-bg-image" colspan="2"><span></span></td></tr></table>').css({
                        border: 0,
                        padding: 0,
                        "background-image": "none",
                        "background-color": "transparent"
                    }).find(".tip-bg-image").css("background-image", 'url("' + a[1] + '")').end().find("td").eq(3).append(this.$inner), l && !e.support.opacity && (this.opts.fade = !1)
                }
                r && !e.support.opacity && (s && n.test(r[1]) && (r = !1, this.$arrow.css("background-image", "none")), this.opts.fade = !1);
                var c = this.$tip.find("table");
                if (s) {
                    this.$tip[0].style.width = "", c.width("auto").find("td").eq(3).width("auto");
                    var d = this.$tip.width(), u = parseInt(this.$tip.css("min-width")),
                        h = parseInt(this.$tip.css("max-width"));
                    !isNaN(u) && u > d ? d = u : !isNaN(h) && d > h && (d = h), this.$tip.add(c).width(d).eq(0).find("td").eq(3).width("100%")
                } else c[0] && c.width("auto").find("td").eq(3).width("auto").end().end().width(document.defaultView && document.defaultView.getComputedStyle && parseFloat(document.defaultView.getComputedStyle(this.$tip[0], null).width) || this.$tip.width()).find("td").eq(3).width("100%");
                if (this.tipOuterW = this.$tip.outerWidth(), this.tipOuterH = this.$tip.outerHeight(), this.calcPos(), r && this.pos.arrow && (this.$arrow[0].className = "tip-arrow tip-arrow-" + this.pos.arrow, this.$arrow.css("visibility", "inherit")), t) {
                    this.asyncAnimating = !0;
                    var p = this;
                    this.$tip.css(i).animate({left: this.pos.l, top: this.pos.t}, 200, function () {
                        p.asyncAnimating = !1
                    })
                } else this.$tip.css({left: this.pos.l, top: this.pos.t})
            }
        }, display: function (t) {
            var i = this.$tip.data("active");
            if (!(i && !t || !i && t)) {
                if (this.$tip.stop(), (this.opts.slide && this.pos.arrow || this.opts.fade) && (t && this.opts.hideAniDuration || !t && this.opts.showAniDuration)) {
                    var o = {}, n = {};
                    if (this.opts.slide && this.pos.arrow) {
                        var s, a;
                        "bottom" == this.pos.arrow || "top" == this.pos.arrow ? (s = "top", a = "bottom") : (s = "left", a = "right");
                        var r = parseInt(this.$tip.css(s));
                        o[s] = r + (t ? 0 : this.pos.arrow == a ? -this.opts.slideOffset : this.opts.slideOffset), n[s] = r + (t ? this.pos.arrow == a ? this.opts.slideOffset : -this.opts.slideOffset : 0) + "px"
                    }
                    this.opts.fade && (o.opacity = t ? this.$tip.css("opacity") : 0, n.opacity = t ? 0 : this.opacity), this.$tip.css(o).animate(n, this.opts[t ? "hideAniDuration" : "showAniDuration"])
                }
                t ? this.$tip.queue(e.proxy(this.reset, this)) : this.$tip.css("visibility", "inherit"), this.$tip.data("active", !i)
            }
        }, disable: function () {
            this.reset(), this.disabled = !0
        }, enable: function () {
            this.disabled = !1
        }, destroy: function () {
            this.reset(), this.$tip.remove(), delete this.$tip, this.content = null, this.$elm.unbind(".poshytip").removeData("title.poshytip").removeData("poshytip"), i.splice(e.inArray(this, i), 1)
        }, clearTimeouts: function () {
            this.showTimeout && (clearTimeout(this.showTimeout), this.showTimeout = 0), this.hideTimeout && (clearTimeout(this.hideTimeout), this.hideTimeout = 0)
        }, calcPos: function () {
            var t, i, o, n, s, a, r = {l: 0, t: 0, arrow: ""}, l = e(window),
                c = {l: l.scrollLeft(), t: l.scrollTop(), w: l.width(), h: l.height()};
            if ("cursor" == this.opts.alignTo) t = i = o = this.eventX, n = s = a = this.eventY; else {
                var d = this.$elm.offset(),
                    u = {l: d.left, t: d.top, w: this.$elm.outerWidth(), h: this.$elm.outerHeight()};
                t = u.l + ("inner-right" != this.opts.alignX ? 0 : u.w), i = t + Math.floor(u.w / 2), o = t + ("inner-left" != this.opts.alignX ? u.w : 0), n = u.t + ("inner-bottom" != this.opts.alignY ? 0 : u.h), s = n + Math.floor(u.h / 2), a = n + ("inner-top" != this.opts.alignY ? u.h : 0)
            }
            switch (this.opts.alignX) {
                case"right":
                case"inner-left":
                    r.l = o + this.opts.offsetX, r.l + this.tipOuterW > c.l + c.w && (r.l = c.l + c.w - this.tipOuterW), ("right" == this.opts.alignX || "center" == this.opts.alignY) && (r.arrow = "left");
                    break;
                case"center":
                    r.l = i - Math.floor(this.tipOuterW / 2), r.l + this.tipOuterW > c.l + c.w ? r.l = c.l + c.w - this.tipOuterW : r.l < c.l && (r.l = c.l);
                    break;
                default:
                    r.l = t - this.tipOuterW - this.opts.offsetX, r.l < c.l && (r.l = c.l), ("left" == this.opts.alignX || "center" == this.opts.alignY) && (r.arrow = "right")
            }
            switch (this.opts.alignY) {
                case"bottom":
                case"inner-top":
                    r.t = a + this.opts.offsetY, r.arrow && "cursor" != this.opts.alignTo || (r.arrow = "top"), r.t + this.tipOuterH > c.t + c.h && (r.t = n - this.tipOuterH - this.opts.offsetY, "top" == r.arrow && (r.arrow = "bottom"));
                    break;
                case"center":
                    r.t = s - Math.floor(this.tipOuterH / 2), r.t + this.tipOuterH > c.t + c.h ? r.t = c.t + c.h - this.tipOuterH : r.t < c.t && (r.t = c.t);
                    break;
                default:
                    r.t = n - this.tipOuterH - this.opts.offsetY, r.arrow && "cursor" != this.opts.alignTo || (r.arrow = "bottom"), r.t < c.t && (r.t = a + this.opts.offsetY, "bottom" == r.arrow && (r.arrow = "top"))
            }
            this.pos = r
        }
    }, e.fn.poshytip = function (t) {
        if ("string" == typeof t) {
            var i = arguments, o = t;
            return Array.prototype.shift.call(i), "destroy" == o && this.die("mouseenter.poshytip").die("focus.poshytip"), this.each(function () {
                var t = e(this).data("poshytip");
                t && t[o] && t[o].apply(t, i)
            })
        }
        var n = e.extend({}, e.fn.poshytip.defaults, t);
        if (e("#poshytip-css-" + n.className)[0] || e(['<style id="poshytip-css-', n.className, '" type="text/css">', "div.", n.className, "{visibility:hidden;position:absolute;top:0;left:0;}", "div.", n.className, " table, div.", n.className, " td{margin:0;font-family:inherit;font-size:inherit;font-weight:inherit;font-style:inherit;font-variant:inherit;}", "div.", n.className, " td.tip-bg-image span{display:block;font:1px/1px sans-serif;height:", n.bgImageFrameSize, "px;width:", n.bgImageFrameSize, "px;overflow:hidden;}", "div.", n.className, " td.tip-right{background-position:100% 0;}", "div.", n.className, " td.tip-bottom{background-position:100% 100%;}", "div.", n.className, " td.tip-left{background-position:0 100%;}", "div.", n.className, " div.tip-inner{background-position:-", n.bgImageFrameSize, "px -", n.bgImageFrameSize, "px;}", "div.", n.className, " div.tip-arrow{visibility:hidden;position:absolute;overflow:hidden;font:1px/1px sans-serif;}", "</style>"].join("")).appendTo("head"), n.liveEvents && "none" != n.showOn) {
            var s = e.extend({}, n, {liveEvents: !1});
            switch (n.showOn) {
                case"hover":
                    this.live("mouseenter.poshytip", function () {
                        var t = e(this);
                        t.data("poshytip") || t.poshytip(s).poshytip("mouseenter")
                    });
                    break;
                case"focus":
                    this.live("focus.poshytip", function () {
                        var t = e(this);
                        t.data("poshytip") || t.poshytip(s).poshytip("show")
                    })
            }
            return this
        }
        return this.each(function () {
            new e.Poshytip(this, n)
        })
    }, e.fn.poshytip.defaults = {
        content: "[title]",
        className: "tip-yellow",
        bgImageFrameSize: 10,
        showTimeout: 500,
        hideTimeout: 100,
        timeOnScreen: 0,
        showOn: "hover",
        liveEvents: !1,
        alignTo: "cursor",
        alignX: "right",
        alignY: "top",
        offsetX: -22,
        offsetY: 18,
        allowTipHover: !0,
        followCursor: !1,
        fade: !0,
        slide: !0,
        slideOffset: 8,
        showAniDuration: 300,
        hideAniDuration: 300
    }
}(jQuery), define("lib/jquery/jquery.poshytip", function () {
}), define("common/global", ["module", "jquery", "lib/shiv/json2", "lib/jquery/jquery.cookie", "common/site-nav", "component/consultNewMsg"], function (e, t, i, o, n, s) {
    var a = e.config(), r = window.AUI || {};
    console.log(34), r._auiEvent = {}, r._addAuiEvent = function (e, t) {
        var i = r._auiEvent[e];
        void 0 == i && (r._auiEvent[e] = []), r._auiEvent[e].push(t)
    }, r._runAuiEvent = function (e) {
        var t = r._auiEvent[e];
        if (t.length > 0) for (var i = 0; i < t.length; i++) {
            var o = t[i];
            o()
        }
    }, window.console || (window.console = {
        log: function () {
        }
    }), isAbleskyDomain && (console.log(":::'###::::'########::'##:::::::'########::'######::'##:::'##:'##:::'##:\n::'## ##::: ##.... ##: ##::::::: ##.....::'##... ##: ##::'##::. ##:'##::\n:'##:. ##:: ##:::: ##: ##::::::: ##::::::: ##:::..:: ##:'##::::. ####:::\n:##:::. ##: ########:: ##::::::: ######:::. ######:: #####::::::. ##::::\n:#########: ##.... ##: ##::::::: ##...:::::..... ##: ##. ##:::::: ##::::\n:##.... ##: ##:::: ##: ##::::::: ##:::::::'##::: ##: ##:. ##::::: ##::::\n:##:::: ##: ########:: ########: ########:. ######:: ##::. ##:::: ##::::\n"), console.log("如果对我们感兴趣，请加入我们，为能力天空添砖加瓦! %chttp://www.ablesky.com/commonRedirect.do?action=toCareers", "color: #09F")), function () {
        var e = navigator.userAgent.toLowerCase(), t = "", i = e.indexOf("firefox") > -1, o = e.indexOf("360se") > -1,
            n = e.indexOf("tencenttraveler") > -1, s = e.indexOf("maxthon") > -1, l = "", c = /msie/.test(e),
            d = /msie 6/.test(e), u = /msie 7/.test(e), h = /msie 8/.test(e), p = /msie 9.0/.test(e);
        o || n || s ? (c && (d ? l = " IE6" : u ? l = " IE7" : h && (l = " IE8")), t = o ? "360" : n ? "TT" : "Maxthon", t += l) : t = i ? "FireFox" : d ? "IE6" : u ? "IE7" : h ? "IE8" : "other", r.UA = {
            isFF: i,
            isIE6: d,
            isIE7: u,
            isIE8: h,
            isIE9: p,
            isMaxthon: s,
            isTT: n,
            is360: o,
            browser: t,
            isClient: a.isClient
        }
    }(), Array.remove = function (e, t, i) {
        var o = e.slice((i || t) + 1 || e.length);
        return e.length = 0 > t ? e.length + t : t, e.push.apply(e, o)
    }, t.ajaxSetup({
        jsonp: "jsonp", cache: !1, jsonpCallback: function () {
            return "ablesky_" + jQuery.now()
        }
    });
    var l = function (e) {
        var t, i = window.location.search, o = new RegExp("(?:[?|&]|^)" + e + "=([^&?]*)", "ig");
        return (t = o.exec(i)) ? t[1] : null
    }, c = function (e) {
        var t, i = a.staticURISearch, o = new RegExp("(?:[?|&]|^)" + e + "=([^&?]*)", "ig");
        return (t = o.exec(i)) ? t[1] : null
    }, d = function (e, t) {
        var i = navigator.userAgent, o = i.indexOf("opera") > -1;
        try {
            "string" == typeof e ? e = parseFloat(e).toFixed(t) : "number" == typeof e && (e = 1 > e && !o && i.indexOf("msie") > -1 ? ((e + 1).toFixed(t) - 1).toFixed(t) : e.toFixed(t))
        } catch (n) {
            e = 0
        }
        return e
    }, u = function (e) {
        var t = e ? e : window.location.hostname, i = t.split(".");
        return i.shift(), i.join(".")
    }, h = function (e) {
        return null === e || void 0 === e || "" === e
    };
    r.curUserInfo = a.USER || r.curUserInfo, r.getCurUserInfo = function (e, i) {
        if (i = h(i) ? "" : i, r.curUserInfo.counter > 5) return "GUEST";
        if (r.curUserInfo.loaded && 1 != e) return r.curUserInfo;
        var o = {};
        i && (o.ASUSS = i);
        try {
            t.ajax({
                url: "http://" + window.location.host + "/getCurrentUser.do" + (i ? "?ASUSS=" + i : ""),
                type: "GET",
                dataType: "json",
                async: !1,
                cache: !1
            }).done(function (e) {
                return e && 1 == e.success && (e.loaded = !0, e.counter = 0, r.curUserInfo = e, setTimeout(function () {
                    var i = "", o = "",
                        n = HTTP_SERVER + "accountLoginRedirect.do?action=toMyAccount&tab=accountInfo&firstLogin=true",
                        s = e.tip || 0, a = isAbleskyDomain ? "Ablesky" : "", l = e.username || "",
                        c = r.cookie(!1, l + "closeTip");
                    if (!c) {
                        switch (s - 0) {
                            case 0:
                                return;
                            case 2:
                                i = "欢迎您加入" + a + "！请登录您的注册邮箱，查收我们的邮件，激活您的帐号！";
                                break;
                            case 3:
                                i = "欢迎您加入" + a + '！由于您的帐户由机构创建，为保证信息安全，请您<a href="' + n + '" style="color:#fff;text-decoration: underline;">立即修改密码</a>！';
                                break;
                            case 1:
                                i = "欢迎您加入" + a + '！由于您的帐户由机构创建，密码和邮箱尚未修改，为保证信息安全，请您<a href="' + n + '" style="color:#fff;text-decoration: underline;">立即修改帐户信息</a>！';
                                break;
                            default:
                                return
                        }
                        o = ['<div style="width:100%; height:35px;background-color: #3399FE;" id="J_top-tips">', '<p class="clearfix" style="margin: 0 auto; width: 1000px; color:#FFF; height:35px; line-height:35px;">', '<span style="display:block; float:left;">', i, "</span>", '<a href="javascript:void(0)" style="display:block; float:right; margin-top:6px; width:20px; height:20px;background: url(', IMG_PATH, '/market/head/close-blue_8be2ee63.png) no-repeat right 0 transparent;"></a>', "</p></div>"].join(""), t("#J_top-tips a").live("click", function () {
                            t("#J_top-tips").hide(), r.cookie(!1, l + "closeTip", 1)
                        }), t(document.body.firstChild).before(t(o))
                    }
                }, 0)), r.curUserInfo
            }).fail(function () {
                r.curUserInfo.counter++
            })
        } catch (n) {
            r.curUserInfo.counter++
        }
        return r.curUserInfo
    }, r.checkIfLogin = function (e) {
        var t = !0;
        return t = 1 == e ? "GUEST" != r.getCurUserInfo().username : r.curUserInfo.isGuest, !t
    };
    var p = function () {
        t.ajax({url: PASSPORT_SERVER + "check.do?action=check", dataType: "jsonp"}).done(function (e) {
            var t = e.ASUSS;
            e.success && "" != t && "false" != t && (r.getCurUserInfo(!0, t), window.location.reload())
        })
    };
    t.ajax({url: PASSPORT_SERVER + "keep.do?action=keepChat", dataType: "jsonp"}).done(function () {
        isAbleskyDomain || r.checkIfLogin() || p()
    }), window.setInterval(function () {
        if ("GUEST" != r.curUserInfo.username) {
            t.ajax({url: PASSPORT_SERVER + "keep.do?action=chat", dataType: "jsonp"});
            var e = document.createDocumentFragment(), i = document.createElement("img");
            i.src = "s.gif?_=" + t.now(), e.appendChild(i), t(i).load(function () {
                e.removeChild(i), e = i = null
            })
        }
    }, 54e4), setTimeout(function () {
        require(["analytics/ableanalytics"])
    }, 0);
    var f = function (e) {
        e = e || {};
        var i = null, o = "J_footOpenTip" + f.uid,
            n = ['<div id="' + o + '" class="foot-system-tip" style="z-index:' + f.uid++ + ';">' + '<div class="foot-tip-container">', '<a class="close foot-tip-close" href="javascript:;"></a>', e.isCommonNotice ? '<p class="foot-tip-txt">' + e.noticeText + "</p>" : '<div class="foot-tip-txt">' + e.tipText + "</div>" + '<div class="foot-tip-action">' + '<a class="tip-button foot-tip-close" target="_blank" href="' + e.buttonLink + '">马上查看</a></div>', "</div></div>", '<input type="hidden" id="isClose" value="' + (e.closeData ? e.closeData : "") + '" />'].join("");
        t("body").append(n);
        var s = t("#" + o), a = t(".foot-tip-close", s), r = function () {
            i = setTimeout(function () {
                s.animate({right: -400}, 1500, function () {
                    s.remove()
                })
            }, 6e3)
        };
        a.click(function () {
            e.closeCallback && e.closeCallback(t("#isClose").val()), s.remove()
        }), s.animate({right: 0}, 1500, function () {
        }), s.bind({
            mouseover: function () {
                clearTimeout(i), s.stop(), s.animate({right: 0}, 0)
            }, mouseout: function () {
                e.isCommonNotice && r()
            }
        }), e.isCommonNotice && r()
    };
    r.showFootTip = f, f.uid = 1400, setTimeout(function () {
        r.checkIfLogin() && t.ajax({url: HTTP_SERVER + "taskTrigger.do", dataType: "jsonp"}).done(function (e) {
            if (null != e.isCompleted && e.notifyMessageList) for (var i, o = 0; i = e.notifyMessageList[o]; o++) i[0] === !1 && f({
                tipText: i[2],
                showButton: e.isCompleted,
                buttonLink: (isAbleskyDomain ? HTTP_SERVER : "") + "studyCenterRedirect.do?action=loadStudyCenterPage",
                buttonText: "立即前往我的课程",
                closeData: i[1],
                closeCallback: function (e) {
                    t.ajax({
                        url: HTTP_SERVER + "studyCenterRedirect.do?action=deleteLoadStudyCenterNotify&orgStudentId=" + e,
                        dataType: "jsonp",
                        success: function () {
                        }
                    })
                }
            });
            if (e.success === !0 && e.notifyMessageList) for (var i, o = 0; i = e.notifyMessageList[o]; o++) i[0] === !0 && f({
                isCommonNotice: !0,
                noticeText: i[2]
            })
        }), require(["lib/jquery/jquery.dialog"], function () {
            require(["accessory/webim"]), require(["accessory/feedback"])
        })
    }, 100);
    var m = function (e, t) {
        var i, o, n, s, a, r, l, c = parseFloat(e);
        return t = arguments.length < 2 ? 2 : t, c = c.toFixed(t), o = String(c), n = o.split("."), o = n[0], l = n[1], s = o.length, 4 > s ? c : (i = s % 3, a = 0 == i ? "" : o.slice(0, i) + ",", r = o.slice(i), r = r.replace(/(.{3})/g, "$1,"), r = r.slice(0, -1), 0 === t ? a + r : a + r + "." + l)
    }, v = function () {
        require(["lib/jquery/jquery.poshytip"], function () {
            t(".ablesky-colortip").poshytip({
                className: "poshytip",
                alignTo: "target",
                alignX: "center",
                offsetY: 5,
                slide: !1,
                liveEvents: !0,
                showTimeout: 50,
                hideTimeout: 50,
                showAniDuration: 200,
                hideAniDuration: 150
            }), t(".ablesky-colortip-left").poshytip({
                className: "poshytip-left",
                alignTo: "target",
                alignX: "inner-left",
                offsetX: 0,
                offsetY: 5,
                slide: !1,
                liveEvents: !0,
                showTimeout: 50,
                hideTimeout: 50,
                showAniDuration: 200,
                hideAniDuration: 150
            }), t(".ablesky-colortip-right").poshytip({
                className: "poshytip-right",
                alignTo: "target",
                alignX: "inner-right",
                offsetX: 0,
                offsetY: 5,
                slide: !1,
                liveEvents: !0,
                showTimeout: 50,
                hideTimeout: 50,
                showAniDuration: 200,
                hideAniDuration: 150
            })
        })
    }, g = function (e, t) {
        if (e = e || window.location.href, r.checkIfLogin()) return !0;
        if (t) {
            for (var i = Array.prototype.slice.call(arguments, 2), o = 0; o < i.length; o++) i[o] = encodeURIComponent(i[o]);
            var n = "funName=" + t + "&params=" + i.join(",") + "&fromurl=" + encodeURIComponent(e);
            window.location.href = isAbleskyDomain ? HTTP_SERVER + "login.do?" + n : BASE_PATH + "login.do?" + n
        } else window.location.href = isAbleskyDomain ? HTTP_SERVER + "login.do?fromurl=" + encodeURIComponent(e) : BASE_PATH + "login.do?fromurl=" + encodeURIComponent(e)
    }, b = function () {
        if (r.checkIfLogin()) {
            var e = {}, t = r.cookie(!1, "funName"), i = r.cookie(!1, "params") || "";
            if (t) {
                r.webim && (e.chatWithMe = r.webim.chatWithMe), e.popPrivateLetter = r.popPrivateLetter, i = i.split(",");
                for (var o = 0; o < i.length; o++) i[o] = decodeURIComponent(i[o]);
                e[t] && (e[t].apply(this, i), r.cookie(!1, "funName", null), r.cookie(!1, "params", null))
            }
        }
    };
    return setTimeout(function () {
        b()
    }, 800), r.cookie = function (e, i, o) {
        var n, s, a = {path: "/", domain: u()}, r = "AUI_SC";
        if (arguments.length < 2) throw new Error("Missing arguments");
        switch (e) {
            case!0:
                r = "AUI_EC", a.expires = 365;
                break;
            case!1:
                r = "AUI_SC";
                break;
            default:
                throw new TypeError("The first argument must be Boolean")
        }
        if ("string" != typeof i) throw new TypeError("illegal name");
        return n = t.cookie(r) || "{}", s = JSON.parse(n), 2 == arguments.length ? s[i] : (arguments.length > 2 && (null === o || void 0 === o ? (s[i] = null, delete s[i]) : s[i] = o, t.cookie(r, JSON.stringify(s), a)), void 0)
    }, window.AbleSky = window.AUI = r, function () {
        return
    }(), s.init(), {
        isEmpty: h,
        fixedNumber: d,
        queryString: l,
        queryStaticURIString: c,
        getFLDomain: u,
        initTip: v,
        formatNumber: m,
        switchToLoginPage: g,
        navigation: n
    }
}), function (e, t, i) {
    function o(e) {
        var t = {}, o = /^jQuery\d+$/;
        return i.each(e.attributes, function (e, i) {
            i.specified && !o.test(i.name) && (t[i.name] = i.value)
        }), t
    }

    function n(e, o) {
        var n = this, s = i(n);
        if (n.value == s.attr("placeholder") && s.hasClass("placeholder")) if (s.data("placeholder-password")) {
            if (s = s.hide().next().show().attr("id", s.removeAttr("id").data("placeholder-id")), e === !0) return s[0].value = o;
            s.focus()
        } else n.value = "", s.removeClass("placeholder"), n == t.activeElement && n.select()
    }

    function s() {
        var e, t = this, s = i(t), a = this.id;
        if ("" == t.value) {
            if ("password" == t.type) {
                if (!s.data("placeholder-textinput")) {
                    try {
                        e = s.clone().attr({type: "text"})
                    } catch (r) {
                        e = i("<input>").attr(i.extend(o(this), {type: "text"}))
                    }
                    e.removeAttr("name").data({
                        "placeholder-password": !0,
                        "placeholder-id": a
                    }).bind("focus.placeholder", n), s.data({"placeholder-textinput": e, "placeholder-id": a}).before(e)
                }
                s = s.removeAttr("id").hide().prev().attr("id", a).show()
            }
            s.addClass("placeholder"), s[0].value = s.attr("placeholder")
        } else s.removeClass("placeholder")
    }

    var a, r, l = "placeholder" in t.createElement("input"), c = "placeholder" in t.createElement("textarea"), d = i.fn,
        u = i.valHooks;
    l && c ? (r = d.placeholder = function () {
        return this
    }, r.input = r.textarea = !0) : (r = d.placeholder = function () {
        var e = this;
        return e.filter((l ? "textarea" : ":input") + "[placeholder]").not(".placeholder").bind({
            "focus.placeholder": n,
            "blur.placeholder": s
        }).data("placeholder-enabled", !0).trigger("blur.placeholder"), e
    }, r.input = l, r.textarea = c, a = {
        get: function (e) {
            var t = i(e);
            return t.data("placeholder-enabled") && t.hasClass("placeholder") ? "" : e.value
        }, set: function (e, o) {
            var a = i(e);
            return a.data("placeholder-enabled") ? ("" == o ? (e.value = o, e != t.activeElement && s.call(e)) : a.hasClass("placeholder") ? n.call(e, !0, o) || (e.value = o) : e.value = o, a) : e.value = o
        }
    }, l || (u.input = a), c || (u.textarea = a), i(function () {
        i(t).delegate("form", "submit.placeholder", function () {
            var e = i(".placeholder", this).each(n);
            setTimeout(function () {
                e.each(s)
            }, 10)
        })
    }), i(e).bind("beforeunload.placeholder", function () {
        i(".placeholder").each(function () {
            this.value = ""
        })
    }))
}(this, document, jQuery), define("lib/jquery/jquery.placeholder", function () {
});