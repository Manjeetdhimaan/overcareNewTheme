! function() {
    ! function(e, t) { "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) { if (!e.document) throw new Error("jQuery requires a window with a document"); return t(e) } : t(e) }("undefined" != typeof window ? window : this, function(e, t) {
        function n(e) {
            var t = "length" in e && e.length,
                n = re.type(e);
            return "function" === n || re.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
        }

        function i(e, t, n) {
            if (re.isFunction(t)) return re.grep(e, function(e, i) { return !!t.call(e, i, e) !== n });
            if (t.nodeType) return re.grep(e, function(e) { return e === t !== n });
            if ("string" == typeof t) {
                if (he.test(t)) return re.filter(t, e, n);
                t = re.filter(t, e)
            }
            return re.grep(e, function(e) { return re.inArray(e, t) >= 0 !== n })
        }

        function r(e, t) { do e = e[t]; while (e && 1 !== e.nodeType); return e }

        function o(e) { var t = we[e] = {}; return re.each(e.match(be) || [], function(e, n) { t[n] = !0 }), t }

        function s() { fe.addEventListener ? (fe.removeEventListener("DOMContentLoaded", a, !1), e.removeEventListener("load", a, !1)) : (fe.detachEvent("onreadystatechange", a), e.detachEvent("onload", a)) }

        function a() {
            (fe.addEventListener || "load" === event.type || "complete" === fe.readyState) && (s(), re.ready())
        }

        function l(e, t, n) {
            if (void 0 === n && 1 === e.nodeType) {
                var i = "data-" + t.replace(ke, "-$1").toLowerCase();
                if (n = e.getAttribute(i), "string" == typeof n) {
                    try { n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : Te.test(n) ? re.parseJSON(n) : n } catch (r) {}
                    re.data(e, t, n)
                } else n = void 0
            }
            return n
        }

        function u(e) {
            var t;
            for (t in e)
                if (("data" !== t || !re.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
            return !0
        }

        function c(e, t, n, i) {
            if (re.acceptData(e)) {
                var r, o, s = re.expando,
                    a = e.nodeType,
                    l = a ? re.cache : e,
                    u = a ? e[s] : e[s] && s;
                if (u && l[u] && (i || l[u].data) || void 0 !== n || "string" != typeof t) return u || (u = a ? e[s] = Q.pop() || re.guid++ : s), l[u] || (l[u] = a ? {} : { toJSON: re.noop }), ("object" == typeof t || "function" == typeof t) && (i ? l[u] = re.extend(l[u], t) : l[u].data = re.extend(l[u].data, t)), o = l[u], i || (o.data || (o.data = {}), o = o.data), void 0 !== n && (o[re.camelCase(t)] = n), "string" == typeof t ? (r = o[t], null == r && (r = o[re.camelCase(t)])) : r = o, r
            }
        }

        function d(e, t, n) {
            if (re.acceptData(e)) {
                var i, r, o = e.nodeType,
                    s = o ? re.cache : e,
                    a = o ? e[re.expando] : re.expando;
                if (s[a]) { if (t && (i = n ? s[a] : s[a].data)) { re.isArray(t) ? t = t.concat(re.map(t, re.camelCase)) : t in i ? t = [t] : (t = re.camelCase(t), t = t in i ? [t] : t.split(" ")), r = t.length; for (; r--;) delete i[t[r]]; if (n ? !u(i) : !re.isEmptyObject(i)) return }(n || (delete s[a].data, u(s[a]))) && (o ? re.cleanData([e], !0) : ne.deleteExpando || s != s.window ? delete s[a] : s[a] = null) }
            }
        }

        function h() { return !0 }

        function p() { return !1 }

        function f() { try { return fe.activeElement } catch (e) {} }

        function m(e) {
            var t = Ne.split("|"),
                n = e.createDocumentFragment();
            if (n.createElement)
                for (; t.length;) n.createElement(t.pop());
            return n
        }

        function g(e, t) {
            var n, i, r = 0,
                o = typeof e.getElementsByTagName !== Ce ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== Ce ? e.querySelectorAll(t || "*") : void 0;
            if (!o)
                for (o = [], n = e.childNodes || e; null != (i = n[r]); r++) !t || re.nodeName(i, t) ? o.push(i) : re.merge(o, g(i, t));
            return void 0 === t || t && re.nodeName(e, t) ? re.merge([e], o) : o
        }

        function v(e) { Ae.test(e.type) && (e.defaultChecked = e.checked) }

        function y(e, t) { return re.nodeName(e, "table") && re.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e }

        function b(e) { return e.type = (null !== re.find.attr(e, "type")) + "/" + e.type, e }

        function w(e) { var t = Xe.exec(e.type); return t ? e.type = t[1] : e.removeAttribute("type"), e }

        function _(e, t) { for (var n, i = 0; null != (n = e[i]); i++) re._data(n, "globalEval", !t || re._data(t[i], "globalEval")) }

        function x(e, t) {
            if (1 === t.nodeType && re.hasData(e)) {
                var n, i, r, o = re._data(e),
                    s = re._data(t, o),
                    a = o.events;
                if (a) {
                    delete s.handle, s.events = {};
                    for (n in a)
                        for (i = 0, r = a[n].length; r > i; i++) re.event.add(t, n, a[n][i])
                }
                s.data && (s.data = re.extend({}, s.data))
            }
        }

        function C(e, t) {
            var n, i, r;
            if (1 === t.nodeType) {
                if (n = t.nodeName.toLowerCase(), !ne.noCloneEvent && t[re.expando]) {
                    r = re._data(t);
                    for (i in r.events) re.removeEvent(t, i, r.handle);
                    t.removeAttribute(re.expando)
                }
                "script" === n && t.text !== e.text ? (b(t).text = e.text, w(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), ne.html5Clone && e.innerHTML && !re.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Ae.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
            }
        }

        function T(t, n) {
            var i, r = re(n.createElement(t)).appendTo(n.body),
                o = e.getDefaultComputedStyle && (i = e.getDefaultComputedStyle(r[0])) ? i.display : re.css(r[0], "display");
            return r.detach(), o
        }

        function k(e) {
            var t = fe,
                n = Ze[e];
            return n || (n = T(e, t), "none" !== n && n || (Je = (Je || re("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (Je[0].contentWindow || Je[0].contentDocument).document, t.write(), t.close(), n = T(e, t), Je.detach()), Ze[e] = n), n
        }

        function E(e, t) { return { get: function() { var n = e(); if (null != n) return n ? void delete this.get : (this.get = t).apply(this, arguments) } } }

        function S(e, t) {
            if (t in e) return t;
            for (var n = t.charAt(0).toUpperCase() + t.slice(1), i = t, r = ht.length; r--;)
                if (t = ht[r] + n, t in e) return t;
            return i
        }

        function $(e, t) { for (var n, i, r, o = [], s = 0, a = e.length; a > s; s++) i = e[s], i.style && (o[s] = re._data(i, "olddisplay"), n = i.style.display, t ? (o[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && $e(i) && (o[s] = re._data(i, "olddisplay", k(i.nodeName)))) : (r = $e(i), (n && "none" !== n || !r) && re._data(i, "olddisplay", r ? n : re.css(i, "display")))); for (s = 0; a > s; s++) i = e[s], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[s] || "" : "none")); return e }

        function j(e, t, n) { var i = lt.exec(t); return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t }

        function A(e, t, n, i, r) { for (var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > o; o += 2) "margin" === n && (s += re.css(e, n + Se[o], !0, r)), i ? ("content" === n && (s -= re.css(e, "padding" + Se[o], !0, r)), "margin" !== n && (s -= re.css(e, "border" + Se[o] + "Width", !0, r))) : (s += re.css(e, "padding" + Se[o], !0, r), "padding" !== n && (s += re.css(e, "border" + Se[o] + "Width", !0, r))); return s }

        function M(e, t, n) {
            var i = !0,
                r = "width" === t ? e.offsetWidth : e.offsetHeight,
                o = et(e),
                s = ne.boxSizing && "border-box" === re.css(e, "boxSizing", !1, o);
            if (0 >= r || null == r) {
                if (r = tt(e, t, o), (0 > r || null == r) && (r = e.style[t]), it.test(r)) return r;
                i = s && (ne.boxSizingReliable() || r === e.style[t]), r = parseFloat(r) || 0
            }
            return r + A(e, t, n || (s ? "border" : "content"), i, o) + "px"
        }

        function O(e, t, n, i, r) { return new O.prototype.init(e, t, n, i, r) }

        function I() { return setTimeout(function() { pt = void 0 }), pt = re.now() }

        function P(e, t) {
            var n, i = { height: e },
                r = 0;
            for (t = t ? 1 : 0; 4 > r; r += 2 - t) n = Se[r], i["margin" + n] = i["padding" + n] = e;
            return t && (i.opacity = i.width = e), i
        }

        function F(e, t, n) {
            for (var i, r = (bt[t] || []).concat(bt["*"]), o = 0, s = r.length; s > o; o++)
                if (i = r[o].call(n, t, e)) return i
        }

        function N(e, t, n) {
            var i, r, o, s, a, l, u, c, d = this,
                h = {},
                p = e.style,
                f = e.nodeType && $e(e),
                m = re._data(e, "fxshow");
            n.queue || (a = re._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() { a.unqueued || l() }), a.unqueued++, d.always(function() { d.always(function() { a.unqueued--, re.queue(e, "fx").length || a.empty.fire() }) })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], u = re.css(e, "display"), c = "none" === u ? re._data(e, "olddisplay") || k(e.nodeName) : u, "inline" === c && "none" === re.css(e, "float") && (ne.inlineBlockNeedsLayout && "inline" !== k(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", ne.shrinkWrapBlocks() || d.always(function() { p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2] }));
            for (i in t)
                if (r = t[i], mt.exec(r)) {
                    if (delete t[i], o = o || "toggle" === r, r === (f ? "hide" : "show")) {
                        if ("show" !== r || !m || void 0 === m[i]) continue;
                        f = !0
                    }
                    h[i] = m && m[i] || re.style(e, i)
                } else u = void 0;
            if (re.isEmptyObject(h)) "inline" === ("none" === u ? k(e.nodeName) : u) && (p.display = u);
            else {
                m ? "hidden" in m && (f = m.hidden) : m = re._data(e, "fxshow", {}), o && (m.hidden = !f), f ? re(e).show() : d.done(function() { re(e).hide() }), d.done(function() {
                    var t;
                    re._removeData(e, "fxshow");
                    for (t in h) re.style(e, t, h[t])
                });
                for (i in h) s = F(f ? m[i] : 0, i, d), i in m || (m[i] = s.start, f && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
            }
        }

        function L(e, t) {
            var n, i, r, o, s;
            for (n in e)
                if (i = re.camelCase(n), r = t[i], o = e[n], re.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), s = re.cssHooks[i], s && "expand" in s) { o = s.expand(o), delete e[i]; for (n in o) n in e || (e[n] = o[n], t[n] = r) } else t[i] = r
        }

        function V(e, t, n) {
            var i, r, o = 0,
                s = yt.length,
                a = re.Deferred().always(function() { delete l.elem }),
                l = function() { if (r) return !1; for (var t = pt || I(), n = Math.max(0, u.startTime + u.duration - t), i = n / u.duration || 0, o = 1 - i, s = 0, l = u.tweens.length; l > s; s++) u.tweens[s].run(o); return a.notifyWith(e, [u, o, n]), 1 > o && l ? n : (a.resolveWith(e, [u]), !1) },
                u = a.promise({
                    elem: e,
                    props: re.extend({}, t),
                    opts: re.extend(!0, { specialEasing: {} }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: pt || I(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(t, n) { var i = re.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing); return u.tweens.push(i), i },
                    stop: function(t) {
                        var n = 0,
                            i = t ? u.tweens.length : 0;
                        if (r) return this;
                        for (r = !0; i > n; n++) u.tweens[n].run(1);
                        return t ? a.resolveWith(e, [u, t]) : a.rejectWith(e, [u, t]), this
                    }
                }),
                c = u.props;
            for (L(c, u.opts.specialEasing); s > o; o++)
                if (i = yt[o].call(u, e, c, u.opts)) return i;
            return re.map(c, F, u), re.isFunction(u.opts.start) && u.opts.start.call(e, u), re.fx.timer(re.extend(l, { elem: e, anim: u, queue: u.opts.queue })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
        }

        function z(e) {
            return function(t, n) {
                "string" != typeof t && (n = t, t = "*");
                var i, r = 0,
                    o = t.toLowerCase().match(be) || [];
                if (re.isFunction(n))
                    for (; i = o[r++];) "+" === i.charAt(0) ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
            }
        }

        function D(e, t, n, i) {
            function r(a) { var l; return o[a] = !0, re.each(e[a] || [], function(e, a) { var u = a(t, n, i); return "string" != typeof u || s || o[u] ? s ? !(l = u) : void 0 : (t.dataTypes.unshift(u), r(u), !1) }), l }
            var o = {},
                s = e === Rt;
            return r(t.dataTypes[0]) || !o["*"] && r("*")
        }

        function B(e, t) { var n, i, r = re.ajaxSettings.flatOptions || {}; for (i in t) void 0 !== t[i] && ((r[i] ? e : n || (n = {}))[i] = t[i]); return n && re.extend(!0, e, n), e }

        function H(e, t, n) {
            for (var i, r, o, s, a = e.contents, l = e.dataTypes;
                "*" === l[0];) l.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
            if (r)
                for (s in a)
                    if (a[s] && a[s].test(r)) { l.unshift(s); break }
            if (l[0] in n) o = l[0];
            else {
                for (s in n) {
                    if (!l[0] || e.converters[s + " " + l[0]]) { o = s; break }
                    i || (i = s)
                }
                o = o || i
            }
            return o ? (o !== l[0] && l.unshift(o), n[o]) : void 0
        }

        function R(e, t, n, i) {
            var r, o, s, a, l, u = {},
                c = e.dataTypes.slice();
            if (c[1])
                for (s in e.converters) u[s.toLowerCase()] = e.converters[s];
            for (o = c.shift(); o;)
                if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift())
                    if ("*" === o) o = l;
                    else if ("*" !== l && l !== o) {
                if (s = u[l + " " + o] || u["* " + o], !s)
                    for (r in u)
                        if (a = r.split(" "), a[1] === o && (s = u[l + " " + a[0]] || u["* " + a[0]])) { s === !0 ? s = u[r] : u[r] !== !0 && (o = a[0], c.unshift(a[1])); break }
                if (s !== !0)
                    if (s && e["throws"]) t = s(t);
                    else try { t = s(t) } catch (d) { return { state: "parsererror", error: s ? d : "No conversion from " + l + " to " + o } }
            }
            return { state: "success", data: t }
        }

        function q(e, t, n, i) {
            var r;
            if (re.isArray(t)) re.each(t, function(t, r) { n || Xt.test(e) ? i(e, r) : q(e + "[" + ("object" == typeof r ? t : "") + "]", r, n, i) });
            else if (n || "object" !== re.type(t)) i(e, t);
            else
                for (r in t) q(e + "[" + r + "]", t[r], n, i)
        }

        function W() { try { return new e.XMLHttpRequest } catch (t) {} }

        function U() { try { return new e.ActiveXObject("Microsoft.XMLHTTP") } catch (t) {} }

        function X(e) { return re.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1 }
        var Q = [],
            Y = Q.slice,
            K = Q.concat,
            G = Q.push,
            J = Q.indexOf,
            Z = {},
            ee = Z.toString,
            te = Z.hasOwnProperty,
            ne = {},
            ie = "1.11.3",
            re = function(e, t) { return new re.fn.init(e, t) },
            oe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            se = /^-ms-/,
            ae = /-([\da-z])/gi,
            le = function(e, t) { return t.toUpperCase() };
        re.fn = re.prototype = {
            jquery: ie,
            constructor: re,
            selector: "",
            length: 0,
            toArray: function() { return Y.call(this) },
            get: function(e) { return null != e ? 0 > e ? this[e + this.length] : this[e] : Y.call(this) },
            pushStack: function(e) { var t = re.merge(this.constructor(), e); return t.prevObject = this, t.context = this.context, t },
            each: function(e, t) { return re.each(this, e, t) },
            map: function(e) { return this.pushStack(re.map(this, function(t, n) { return e.call(t, n, t) })) },
            slice: function() { return this.pushStack(Y.apply(this, arguments)) },
            first: function() { return this.eq(0) },
            last: function() { return this.eq(-1) },
            eq: function(e) {
                var t = this.length,
                    n = +e + (0 > e ? t : 0);
                return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
            },
            end: function() { return this.prevObject || this.constructor(null) },
            push: G,
            sort: Q.sort,
            splice: Q.splice
        }, re.extend = re.fn.extend = function() {
            var e, t, n, i, r, o, s = arguments[0] || {},
                a = 1,
                l = arguments.length,
                u = !1;
            for ("boolean" == typeof s && (u = s, s = arguments[a] || {}, a++), "object" == typeof s || re.isFunction(s) || (s = {}), a === l && (s = this, a--); l > a; a++)
                if (null != (r = arguments[a]))
                    for (i in r) e = s[i], n = r[i], s !== n && (u && n && (re.isPlainObject(n) || (t = re.isArray(n))) ? (t ? (t = !1, o = e && re.isArray(e) ? e : []) : o = e && re.isPlainObject(e) ? e : {}, s[i] = re.extend(u, o, n)) : void 0 !== n && (s[i] = n));
            return s
        }, re.extend({
            expando: "jQuery" + (ie + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) { throw new Error(e) },
            noop: function() {},
            isFunction: function(e) { return "function" === re.type(e) },
            isArray: Array.isArray || function(e) { return "array" === re.type(e) },
            isWindow: function(e) { return null != e && e == e.window },
            isNumeric: function(e) { return !re.isArray(e) && e - parseFloat(e) + 1 >= 0 },
            isEmptyObject: function(e) { var t; for (t in e) return !1; return !0 },
            isPlainObject: function(e) {
                var t;
                if (!e || "object" !== re.type(e) || e.nodeType || re.isWindow(e)) return !1;
                try { if (e.constructor && !te.call(e, "constructor") && !te.call(e.constructor.prototype, "isPrototypeOf")) return !1 } catch (n) { return !1 }
                if (ne.ownLast)
                    for (t in e) return te.call(e, t);
                for (t in e);
                return void 0 === t || te.call(e, t)
            },
            type: function(e) { return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? Z[ee.call(e)] || "object" : typeof e },
            globalEval: function(t) { t && re.trim(t) && (e.execScript || function(t) { e.eval.call(e, t) })(t) },
            camelCase: function(e) { return e.replace(se, "ms-").replace(ae, le) },
            nodeName: function(e, t) { return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase() },
            each: function(e, t, i) {
                var r, o = 0,
                    s = e.length,
                    a = n(e);
                if (i) {
                    if (a)
                        for (; s > o && (r = t.apply(e[o], i), r !== !1); o++);
                    else
                        for (o in e)
                            if (r = t.apply(e[o], i), r === !1) break
                } else if (a)
                    for (; s > o && (r = t.call(e[o], o, e[o]), r !== !1); o++);
                else
                    for (o in e)
                        if (r = t.call(e[o], o, e[o]), r === !1) break; return e
            },
            trim: function(e) { return null == e ? "" : (e + "").replace(oe, "") },
            makeArray: function(e, t) { var i = t || []; return null != e && (n(Object(e)) ? re.merge(i, "string" == typeof e ? [e] : e) : G.call(i, e)), i },
            inArray: function(e, t, n) {
                var i;
                if (t) {
                    if (J) return J.call(t, e, n);
                    for (i = t.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
                        if (n in t && t[n] === e) return n
                }
                return -1
            },
            merge: function(e, t) {
                for (var n = +t.length, i = 0, r = e.length; n > i;) e[r++] = t[i++];
                if (n !== n)
                    for (; void 0 !== t[i];) e[r++] = t[i++];
                return e.length = r, e
            },
            grep: function(e, t, n) { for (var i, r = [], o = 0, s = e.length, a = !n; s > o; o++) i = !t(e[o], o), i !== a && r.push(e[o]); return r },
            map: function(e, t, i) {
                var r, o = 0,
                    s = e.length,
                    a = n(e),
                    l = [];
                if (a)
                    for (; s > o; o++) r = t(e[o], o, i), null != r && l.push(r);
                else
                    for (o in e) r = t(e[o], o, i), null != r && l.push(r);
                return K.apply([], l)
            },
            guid: 1,
            proxy: function(e, t) { var n, i, r; return "string" == typeof t && (r = e[t], t = e, e = r), re.isFunction(e) ? (n = Y.call(arguments, 2), i = function() { return e.apply(t || this, n.concat(Y.call(arguments))) }, i.guid = e.guid = e.guid || re.guid++, i) : void 0 },
            now: function() { return +new Date },
            support: ne
        }), re.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) { Z["[object " + t + "]"] = t.toLowerCase() });
        var ue = function(e) {
            function t(e, t, n, i) {
                var r, o, s, a, l, u, d, p, f, m;
                if ((t ? t.ownerDocument || t : D) !== O && M(t), t = t || O, n = n || [], a = t.nodeType, "string" != typeof e || !e || 1 !== a && 9 !== a && 11 !== a) return n;
                if (!i && P) {
                    if (11 !== a && (r = ye.exec(e)))
                        if (s = r[1]) { if (9 === a) { if (o = t.getElementById(s), !o || !o.parentNode) return n; if (o.id === s) return n.push(o), n } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(s)) && V(t, o) && o.id === s) return n.push(o), n } else { if (r[2]) return J.apply(n, t.getElementsByTagName(e)), n; if ((s = r[3]) && _.getElementsByClassName) return J.apply(n, t.getElementsByClassName(s)), n }
                    if (_.qsa && (!F || !F.test(e))) {
                        if (p = d = z, f = t, m = 1 !== a && e, 1 === a && "object" !== t.nodeName.toLowerCase()) {
                            for (u = k(e), (d = t.getAttribute("id")) ? p = d.replace(we, "\\$&") : t.setAttribute("id", p), p = "[id='" + p + "'] ", l = u.length; l--;) u[l] = p + h(u[l]);
                            f = be.test(e) && c(t.parentNode) || t, m = u.join(",")
                        }
                        if (m) try { return J.apply(n, f.querySelectorAll(m)), n } catch (g) {} finally { d || t.removeAttribute("id") }
                    }
                }
                return S(e.replace(le, "$1"), t, n, i)
            }

            function n() {
                function e(n, i) { return t.push(n + " ") > x.cacheLength && delete e[t.shift()], e[n + " "] = i }
                var t = [];
                return e
            }

            function i(e) { return e[z] = !0, e }

            function r(e) { var t = O.createElement("div"); try { return !!e(t) } catch (n) { return !1 } finally { t.parentNode && t.parentNode.removeChild(t), t = null } }

            function o(e, t) { for (var n = e.split("|"), i = e.length; i--;) x.attrHandle[n[i]] = t }

            function s(e, t) {
                var n = t && e,
                    i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || X) - (~e.sourceIndex || X);
                if (i) return i;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === t) return -1;
                return e ? 1 : -1
            }

            function a(e) { return function(t) { var n = t.nodeName.toLowerCase(); return "input" === n && t.type === e } }

            function l(e) { return function(t) { var n = t.nodeName.toLowerCase(); return ("input" === n || "button" === n) && t.type === e } }

            function u(e) { return i(function(t) { return t = +t, i(function(n, i) { for (var r, o = e([], n.length, t), s = o.length; s--;) n[r = o[s]] && (n[r] = !(i[r] = n[r])) }) }) }

            function c(e) { return e && "undefined" != typeof e.getElementsByTagName && e }

            function d() {}

            function h(e) { for (var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value; return i }

            function p(e, t, n) {
                var i = t.dir,
                    r = n && "parentNode" === i,
                    o = H++;
                return t.first ? function(t, n, o) {
                    for (; t = t[i];)
                        if (1 === t.nodeType || r) return e(t, n, o)
                } : function(t, n, s) {
                    var a, l, u = [B, o];
                    if (s) {
                        for (; t = t[i];)
                            if ((1 === t.nodeType || r) && e(t, n, s)) return !0
                    } else
                        for (; t = t[i];)
                            if (1 === t.nodeType || r) { if (l = t[z] || (t[z] = {}), (a = l[i]) && a[0] === B && a[1] === o) return u[2] = a[2]; if (l[i] = u, u[2] = e(t, n, s)) return !0 }
                }
            }

            function f(e) {
                return e.length > 1 ? function(t, n, i) {
                    for (var r = e.length; r--;)
                        if (!e[r](t, n, i)) return !1;
                    return !0
                } : e[0]
            }

            function m(e, n, i) { for (var r = 0, o = n.length; o > r; r++) t(e, n[r], i); return i }

            function g(e, t, n, i, r) { for (var o, s = [], a = 0, l = e.length, u = null != t; l > a; a++)(o = e[a]) && (!n || n(o, i, r)) && (s.push(o), u && t.push(a)); return s }

            function v(e, t, n, r, o, s) {
                return r && !r[z] && (r = v(r)), o && !o[z] && (o = v(o, s)), i(function(i, s, a, l) {
                    var u, c, d, h = [],
                        p = [],
                        f = s.length,
                        v = i || m(t || "*", a.nodeType ? [a] : a, []),
                        y = !e || !i && t ? v : g(v, h, e, a, l),
                        b = n ? o || (i ? e : f || r) ? [] : s : y;
                    if (n && n(y, b, a, l), r)
                        for (u = g(b, p), r(u, [], a, l), c = u.length; c--;)(d = u[c]) && (b[p[c]] = !(y[p[c]] = d));
                    if (i) {
                        if (o || e) {
                            if (o) {
                                for (u = [], c = b.length; c--;)(d = b[c]) && u.push(y[c] = d);
                                o(null, b = [], u, l)
                            }
                            for (c = b.length; c--;)(d = b[c]) && (u = o ? ee(i, d) : h[c]) > -1 && (i[u] = !(s[u] = d))
                        }
                    } else b = g(b === s ? b.splice(f, b.length) : b), o ? o(null, s, b, l) : J.apply(s, b)
                })
            }

            function y(e) {
                for (var t, n, i, r = e.length, o = x.relative[e[0].type], s = o || x.relative[" "], a = o ? 1 : 0, l = p(function(e) { return e === t }, s, !0), u = p(function(e) { return ee(t, e) > -1 }, s, !0), c = [function(e, n, i) { var r = !o && (i || n !== $) || ((t = n).nodeType ? l(e, n, i) : u(e, n, i)); return t = null, r }]; r > a; a++)
                    if (n = x.relative[e[a].type]) c = [p(f(c), n)];
                    else {
                        if (n = x.filter[e[a].type].apply(null, e[a].matches), n[z]) { for (i = ++a; r > i && !x.relative[e[i].type]; i++); return v(a > 1 && f(c), a > 1 && h(e.slice(0, a - 1).concat({ value: " " === e[a - 2].type ? "*" : "" })).replace(le, "$1"), n, i > a && y(e.slice(a, i)), r > i && y(e = e.slice(i)), r > i && h(e)) }
                        c.push(n)
                    }
                return f(c)
            }

            function b(e, n) {
                var r = n.length > 0,
                    o = e.length > 0,
                    s = function(i, s, a, l, u) {
                        var c, d, h, p = 0,
                            f = "0",
                            m = i && [],
                            v = [],
                            y = $,
                            b = i || o && x.find.TAG("*", u),
                            w = B += null == y ? 1 : Math.random() || .1,
                            _ = b.length;
                        for (u && ($ = s !== O && s); f !== _ && null != (c = b[f]); f++) {
                            if (o && c) {
                                for (d = 0; h = e[d++];)
                                    if (h(c, s, a)) { l.push(c); break }
                                u && (B = w)
                            }
                            r && ((c = !h && c) && p--, i && m.push(c))
                        }
                        if (p += f, r && f !== p) {
                            for (d = 0; h = n[d++];) h(m, v, s, a);
                            if (i) {
                                if (p > 0)
                                    for (; f--;) m[f] || v[f] || (v[f] = K.call(l));
                                v = g(v)
                            }
                            J.apply(l, v), u && !i && v.length > 0 && p + n.length > 1 && t.uniqueSort(l)
                        }
                        return u && (B = w, $ = y), m
                    };
                return r ? i(s) : s
            }
            var w, _, x, C, T, k, E, S, $, j, A, M, O, I, P, F, N, L, V, z = "sizzle" + 1 * new Date,
                D = e.document,
                B = 0,
                H = 0,
                R = n(),
                q = n(),
                W = n(),
                U = function(e, t) { return e === t && (A = !0), 0 },
                X = 1 << 31,
                Q = {}.hasOwnProperty,
                Y = [],
                K = Y.pop,
                G = Y.push,
                J = Y.push,
                Z = Y.slice,
                ee = function(e, t) {
                    for (var n = 0, i = e.length; i > n; n++)
                        if (e[n] === t) return n;
                    return -1
                },
                te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                ne = "[\\x20\\t\\r\\n\\f]",
                ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                re = ie.replace("w", "w#"),
                oe = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + re + "))|)" + ne + "*\\]",
                se = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)",
                ae = new RegExp(ne + "+", "g"),
                le = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
                ue = new RegExp("^" + ne + "*," + ne + "*"),
                ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
                de = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
                he = new RegExp(se),
                pe = new RegExp("^" + re + "$"),
                fe = { ID: new RegExp("^#(" + ie + ")"), CLASS: new RegExp("^\\.(" + ie + ")"), TAG: new RegExp("^(" + ie.replace("w", "w*") + ")"), ATTR: new RegExp("^" + oe), PSEUDO: new RegExp("^" + se), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"), bool: new RegExp("^(?:" + te + ")$", "i"), needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i") },
                me = /^(?:input|select|textarea|button)$/i,
                ge = /^h\d$/i,
                ve = /^[^{]+\{\s*\[native \w/,
                ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                be = /[+~]/,
                we = /'|\\/g,
                _e = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
                xe = function(e, t, n) { var i = "0x" + t - 65536; return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320) },
                Ce = function() { M() };
            try { J.apply(Y = Z.call(D.childNodes), D.childNodes), Y[D.childNodes.length].nodeType } catch (Te) {
                J = {
                    apply: Y.length ? function(e, t) { G.apply(e, Z.call(t)) } : function(e, t) {
                        for (var n = e.length, i = 0; e[n++] = t[i++];);
                        e.length = n - 1
                    }
                }
            }
            _ = t.support = {}, T = t.isXML = function(e) { var t = e && (e.ownerDocument || e).documentElement; return t ? "HTML" !== t.nodeName : !1 }, M = t.setDocument = function(e) {
                var t, n, i = e ? e.ownerDocument || e : D;
                return i !== O && 9 === i.nodeType && i.documentElement ? (O = i, I = i.documentElement, n = i.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", Ce, !1) : n.attachEvent && n.attachEvent("onunload", Ce)), P = !T(i), _.attributes = r(function(e) { return e.className = "i", !e.getAttribute("className") }), _.getElementsByTagName = r(function(e) { return e.appendChild(i.createComment("")), !e.getElementsByTagName("*").length }), _.getElementsByClassName = ve.test(i.getElementsByClassName), _.getById = r(function(e) { return I.appendChild(e).id = z, !i.getElementsByName || !i.getElementsByName(z).length }), _.getById ? (x.find.ID = function(e, t) { if ("undefined" != typeof t.getElementById && P) { var n = t.getElementById(e); return n && n.parentNode ? [n] : [] } }, x.filter.ID = function(e) { var t = e.replace(_e, xe); return function(e) { return e.getAttribute("id") === t } }) : (delete x.find.ID, x.filter.ID = function(e) { var t = e.replace(_e, xe); return function(e) { var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id"); return n && n.value === t } }), x.find.TAG = _.getElementsByTagName ? function(e, t) { return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : _.qsa ? t.querySelectorAll(e) : void 0 } : function(e, t) {
                    var n, i = [],
                        r = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) { for (; n = o[r++];) 1 === n.nodeType && i.push(n); return i }
                    return o
                }, x.find.CLASS = _.getElementsByClassName && function(e, t) { return P ? t.getElementsByClassName(e) : void 0 }, N = [], F = [], (_.qsa = ve.test(i.querySelectorAll)) && (r(function(e) { I.appendChild(e).innerHTML = "<a id='" + z + "'></a><select id='" + z + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && F.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || F.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + z + "-]").length || F.push("~="), e.querySelectorAll(":checked").length || F.push(":checked"), e.querySelectorAll("a#" + z + "+*").length || F.push(".#.+[+~]") }), r(function(e) {
                    var t = i.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && F.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || F.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), F.push(",.*:")
                })), (_.matchesSelector = ve.test(L = I.matches || I.webkitMatchesSelector || I.mozMatchesSelector || I.oMatchesSelector || I.msMatchesSelector)) && r(function(e) { _.disconnectedMatch = L.call(e, "div"), L.call(e, "[s!='']:x"), N.push("!=", se) }), F = F.length && new RegExp(F.join("|")), N = N.length && new RegExp(N.join("|")), t = ve.test(I.compareDocumentPosition), V = t || ve.test(I.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        i = t && t.parentNode;
                    return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, U = t ? function(e, t) { if (e === t) return A = !0, 0; var n = !e.compareDocumentPosition - !t.compareDocumentPosition; return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !_.sortDetached && t.compareDocumentPosition(e) === n ? e === i || e.ownerDocument === D && V(D, e) ? -1 : t === i || t.ownerDocument === D && V(D, t) ? 1 : j ? ee(j, e) - ee(j, t) : 0 : 4 & n ? -1 : 1) } : function(e, t) {
                    if (e === t) return A = !0, 0;
                    var n, r = 0,
                        o = e.parentNode,
                        a = t.parentNode,
                        l = [e],
                        u = [t];
                    if (!o || !a) return e === i ? -1 : t === i ? 1 : o ? -1 : a ? 1 : j ? ee(j, e) - ee(j, t) : 0;
                    if (o === a) return s(e, t);
                    for (n = e; n = n.parentNode;) l.unshift(n);
                    for (n = t; n = n.parentNode;) u.unshift(n);
                    for (; l[r] === u[r];) r++;
                    return r ? s(l[r], u[r]) : l[r] === D ? -1 : u[r] === D ? 1 : 0
                }, i) : O
            }, t.matches = function(e, n) { return t(e, null, null, n) }, t.matchesSelector = function(e, n) {
                if ((e.ownerDocument || e) !== O && M(e), n = n.replace(de, "='$1']"), _.matchesSelector && P && (!N || !N.test(n)) && (!F || !F.test(n))) try { var i = L.call(e, n); if (i || _.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i } catch (r) {}
                return t(n, O, null, [e]).length > 0
            }, t.contains = function(e, t) { return (e.ownerDocument || e) !== O && M(e), V(e, t) }, t.attr = function(e, t) {
                (e.ownerDocument || e) !== O && M(e);
                var n = x.attrHandle[t.toLowerCase()],
                    i = n && Q.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !P) : void 0;
                return void 0 !== i ? i : _.attributes || !P ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }, t.error = function(e) { throw new Error("Syntax error, unrecognized expression: " + e) }, t.uniqueSort = function(e) {
                var t, n = [],
                    i = 0,
                    r = 0;
                if (A = !_.detectDuplicates, j = !_.sortStable && e.slice(0), e.sort(U), A) { for (; t = e[r++];) t === e[r] && (i = n.push(r)); for (; i--;) e.splice(n[i], 1) }
                return j = null, e
            }, C = t.getText = function(e) {
                var t, n = "",
                    i = 0,
                    r = e.nodeType;
                if (r) { if (1 === r || 9 === r || 11 === r) { if ("string" == typeof e.textContent) return e.textContent; for (e = e.firstChild; e; e = e.nextSibling) n += C(e) } else if (3 === r || 4 === r) return e.nodeValue } else
                    for (; t = e[i++];) n += C(t);
                return n
            }, x = t.selectors = {
                cacheLength: 50,
                createPseudo: i,
                match: fe,
                attrHandle: {},
                find: {},
                relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                preFilter: { ATTR: function(e) { return e[1] = e[1].replace(_e, xe), e[3] = (e[3] || e[4] || e[5] || "").replace(_e, xe), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4) }, CHILD: function(e) { return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e }, PSEUDO: function(e) { var t, n = !e[6] && e[2]; return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && he.test(n) && (t = k(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3)) } },
                filter: {
                    TAG: function(e) { var t = e.replace(_e, xe).toLowerCase(); return "*" === e ? function() { return !0 } : function(e) { return e.nodeName && e.nodeName.toLowerCase() === t } },
                    CLASS: function(e) { var t = R[e + " "]; return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && R(e, function(e) { return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "") }) },
                    ATTR: function(e, n, i) { return function(r) { var o = t.attr(r, e); return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(ae, " ") + " ").indexOf(i) > -1 : "|=" === n ? o === i || o.slice(0, i.length + 1) === i + "-" : !1) : !0 } },
                    CHILD: function(e, t, n, i, r) {
                        var o = "nth" !== e.slice(0, 3),
                            s = "last" !== e.slice(-4),
                            a = "of-type" === t;
                        return 1 === i && 0 === r ? function(e) { return !!e.parentNode } : function(t, n, l) {
                            var u, c, d, h, p, f, m = o !== s ? "nextSibling" : "previousSibling",
                                g = t.parentNode,
                                v = a && t.nodeName.toLowerCase(),
                                y = !l && !a;
                            if (g) {
                                if (o) {
                                    for (; m;) {
                                        for (d = t; d = d[m];)
                                            if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                        f = m = "only" === e && !f && "nextSibling"
                                    }
                                    return !0
                                }
                                if (f = [s ? g.firstChild : g.lastChild], s && y) {
                                    for (c = g[z] || (g[z] = {}), u = c[e] || [], p = u[0] === B && u[1], h = u[0] === B && u[2], d = p && g.childNodes[p]; d = ++p && d && d[m] || (h = p = 0) || f.pop();)
                                        if (1 === d.nodeType && ++h && d === t) { c[e] = [B, p, h]; break }
                                } else if (y && (u = (t[z] || (t[z] = {}))[e]) && u[0] === B) h = u[1];
                                else
                                    for (;
                                        (d = ++p && d && d[m] || (h = p = 0) || f.pop()) && ((a ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++h || (y && ((d[z] || (d[z] = {}))[e] = [B, h]), d !== t)););
                                return h -= r, h === i || h % i === 0 && h / i >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, n) { var r, o = x.pseudos[e] || x.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e); return o[z] ? o(n) : o.length > 1 ? (r = [e, e, "", n], x.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) { for (var i, r = o(e, n), s = r.length; s--;) i = ee(e, r[s]), e[i] = !(t[i] = r[s]) }) : function(e) { return o(e, 0, r) }) : o }
                },
                pseudos: {
                    not: i(function(e) {
                        var t = [],
                            n = [],
                            r = E(e.replace(le, "$1"));
                        return r[z] ? i(function(e, t, n, i) { for (var o, s = r(e, null, i, []), a = e.length; a--;)(o = s[a]) && (e[a] = !(t[a] = o)) }) : function(e, i, o) { return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop() }
                    }),
                    has: i(function(e) { return function(n) { return t(e, n).length > 0 } }),
                    contains: i(function(e) {
                        return e = e.replace(_e, xe),
                            function(t) { return (t.textContent || t.innerText || C(t)).indexOf(e) > -1 }
                    }),
                    lang: i(function(e) {
                        return pe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(_e, xe).toLowerCase(),
                            function(t) {
                                var n;
                                do
                                    if (n = P ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                                while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) { var n = e.location && e.location.hash; return n && n.slice(1) === t.id },
                    root: function(e) { return e === I },
                    focus: function(e) { return e === O.activeElement && (!O.hasFocus || O.hasFocus()) && !!(e.type || e.href || ~e.tabIndex) },
                    enabled: function(e) { return e.disabled === !1 },
                    disabled: function(e) { return e.disabled === !0 },
                    checked: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && !!e.checked || "option" === t && !!e.selected },
                    selected: function(e) { return e.parentNode && e.parentNode.selectedIndex, e.selected === !0 },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) { return !x.pseudos.empty(e) },
                    header: function(e) { return ge.test(e.nodeName) },
                    input: function(e) { return me.test(e.nodeName) },
                    button: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && "button" === e.type || "button" === t },
                    text: function(e) { var t; return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase()) },
                    first: u(function() { return [0] }),
                    last: u(function(e, t) { return [t - 1] }),
                    eq: u(function(e, t, n) { return [0 > n ? n + t : n] }),
                    even: u(function(e, t) { for (var n = 0; t > n; n += 2) e.push(n); return e }),
                    odd: u(function(e, t) { for (var n = 1; t > n; n += 2) e.push(n); return e }),
                    lt: u(function(e, t, n) { for (var i = 0 > n ? n + t : n; --i >= 0;) e.push(i); return e }),
                    gt: u(function(e, t, n) { for (var i = 0 > n ? n + t : n; ++i < t;) e.push(i); return e })
                }
            }, x.pseudos.nth = x.pseudos.eq;
            for (w in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) x.pseudos[w] = a(w);
            for (w in { submit: !0, reset: !0 }) x.pseudos[w] = l(w);
            return d.prototype = x.filters = x.pseudos, x.setFilters = new d, k = t.tokenize = function(e, n) {
                var i, r, o, s, a, l, u, c = q[e + " "];
                if (c) return n ? 0 : c.slice(0);
                for (a = e, l = [], u = x.preFilter; a;) {
                    (!i || (r = ue.exec(a))) && (r && (a = a.slice(r[0].length) || a), l.push(o = [])), i = !1, (r = ce.exec(a)) && (i = r.shift(), o.push({ value: i, type: r[0].replace(le, " ") }), a = a.slice(i.length));
                    for (s in x.filter) !(r = fe[s].exec(a)) || u[s] && !(r = u[s](r)) || (i = r.shift(),
                        o.push({ value: i, type: s, matches: r }), a = a.slice(i.length));
                    if (!i) break
                }
                return n ? a.length : a ? t.error(e) : q(e, l).slice(0)
            }, E = t.compile = function(e, t) {
                var n, i = [],
                    r = [],
                    o = W[e + " "];
                if (!o) {
                    for (t || (t = k(e)), n = t.length; n--;) o = y(t[n]), o[z] ? i.push(o) : r.push(o);
                    o = W(e, b(r, i)), o.selector = e
                }
                return o
            }, S = t.select = function(e, t, n, i) {
                var r, o, s, a, l, u = "function" == typeof e && e,
                    d = !i && k(e = u.selector || e);
                if (n = n || [], 1 === d.length) {
                    if (o = d[0] = d[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && _.getById && 9 === t.nodeType && P && x.relative[o[1].type]) {
                        if (t = (x.find.ID(s.matches[0].replace(_e, xe), t) || [])[0], !t) return n;
                        u && (t = t.parentNode), e = e.slice(o.shift().value.length)
                    }
                    for (r = fe.needsContext.test(e) ? 0 : o.length; r-- && (s = o[r], !x.relative[a = s.type]);)
                        if ((l = x.find[a]) && (i = l(s.matches[0].replace(_e, xe), be.test(o[0].type) && c(t.parentNode) || t))) { if (o.splice(r, 1), e = i.length && h(o), !e) return J.apply(n, i), n; break }
                }
                return (u || E(e, d))(i, t, !P, n, be.test(e) && c(t.parentNode) || t), n
            }, _.sortStable = z.split("").sort(U).join("") === z, _.detectDuplicates = !!A, M(), _.sortDetached = r(function(e) { return 1 & e.compareDocumentPosition(O.createElement("div")) }), r(function(e) { return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href") }) || o("type|href|height|width", function(e, t, n) { return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2) }), _.attributes && r(function(e) { return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value") }) || o("value", function(e, t, n) { return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue }), r(function(e) { return null == e.getAttribute("disabled") }) || o(te, function(e, t, n) { var i; return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null }), t
        }(e);
        re.find = ue, re.expr = ue.selectors, re.expr[":"] = re.expr.pseudos, re.unique = ue.uniqueSort, re.text = ue.getText, re.isXMLDoc = ue.isXML, re.contains = ue.contains;
        var ce = re.expr.match.needsContext,
            de = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            he = /^.[^:#\[\.,]*$/;
        re.filter = function(e, t, n) { var i = t[0]; return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? re.find.matchesSelector(i, e) ? [i] : [] : re.find.matches(e, re.grep(t, function(e) { return 1 === e.nodeType })) }, re.fn.extend({
            find: function(e) {
                var t, n = [],
                    i = this,
                    r = i.length;
                if ("string" != typeof e) return this.pushStack(re(e).filter(function() {
                    for (t = 0; r > t; t++)
                        if (re.contains(i[t], this)) return !0
                }));
                for (t = 0; r > t; t++) re.find(e, i[t], n);
                return n = this.pushStack(r > 1 ? re.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
            },
            filter: function(e) { return this.pushStack(i(this, e || [], !1)) },
            not: function(e) { return this.pushStack(i(this, e || [], !0)) },
            is: function(e) { return !!i(this, "string" == typeof e && ce.test(e) ? re(e) : e || [], !1).length }
        });
        var pe, fe = e.document,
            me = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            ge = re.fn.init = function(e, t) {
                var n, i;
                if (!e) return this;
                if ("string" == typeof e) {
                    if (n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : me.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || pe).find(e) : this.constructor(t).find(e);
                    if (n[1]) {
                        if (t = t instanceof re ? t[0] : t, re.merge(this, re.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : fe, !0)), de.test(n[1]) && re.isPlainObject(t))
                            for (n in t) re.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                        return this
                    }
                    if (i = fe.getElementById(n[2]), i && i.parentNode) {
                        if (i.id !== n[2]) return pe.find(e);
                        this.length = 1, this[0] = i
                    }
                    return this.context = fe, this.selector = e, this
                }
                return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : re.isFunction(e) ? "undefined" != typeof pe.ready ? pe.ready(e) : e(re) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), re.makeArray(e, this))
            };
        ge.prototype = re.fn, pe = re(fe);
        var ve = /^(?:parents|prev(?:Until|All))/,
            ye = { children: !0, contents: !0, next: !0, prev: !0 };
        re.extend({ dir: function(e, t, n) { for (var i = [], r = e[t]; r && 9 !== r.nodeType && (void 0 === n || 1 !== r.nodeType || !re(r).is(n));) 1 === r.nodeType && i.push(r), r = r[t]; return i }, sibling: function(e, t) { for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e); return n } }), re.fn.extend({
            has: function(e) {
                var t, n = re(e, this),
                    i = n.length;
                return this.filter(function() {
                    for (t = 0; i > t; t++)
                        if (re.contains(this, n[t])) return !0
                })
            },
            closest: function(e, t) {
                for (var n, i = 0, r = this.length, o = [], s = ce.test(e) || "string" != typeof e ? re(e, t || this.context) : 0; r > i; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && re.find.matchesSelector(n, e))) { o.push(n); break }
                return this.pushStack(o.length > 1 ? re.unique(o) : o)
            },
            index: function(e) { return e ? "string" == typeof e ? re.inArray(this[0], re(e)) : re.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 },
            add: function(e, t) { return this.pushStack(re.unique(re.merge(this.get(), re(e, t)))) },
            addBack: function(e) { return this.add(null == e ? this.prevObject : this.prevObject.filter(e)) }
        }), re.each({ parent: function(e) { var t = e.parentNode; return t && 11 !== t.nodeType ? t : null }, parents: function(e) { return re.dir(e, "parentNode") }, parentsUntil: function(e, t, n) { return re.dir(e, "parentNode", n) }, next: function(e) { return r(e, "nextSibling") }, prev: function(e) { return r(e, "previousSibling") }, nextAll: function(e) { return re.dir(e, "nextSibling") }, prevAll: function(e) { return re.dir(e, "previousSibling") }, nextUntil: function(e, t, n) { return re.dir(e, "nextSibling", n) }, prevUntil: function(e, t, n) { return re.dir(e, "previousSibling", n) }, siblings: function(e) { return re.sibling((e.parentNode || {}).firstChild, e) }, children: function(e) { return re.sibling(e.firstChild) }, contents: function(e) { return re.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : re.merge([], e.childNodes) } }, function(e, t) { re.fn[e] = function(n, i) { var r = re.map(this, t, n); return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = re.filter(i, r)), this.length > 1 && (ye[e] || (r = re.unique(r)), ve.test(e) && (r = r.reverse())), this.pushStack(r) } });
        var be = /\S+/g,
            we = {};
        re.Callbacks = function(e) {
            e = "string" == typeof e ? we[e] || o(e) : re.extend({}, e);
            var t, n, i, r, s, a, l = [],
                u = !e.once && [],
                c = function(o) {
                    for (n = e.memory && o, i = !0, s = a || 0, a = 0, r = l.length, t = !0; l && r > s; s++)
                        if (l[s].apply(o[0], o[1]) === !1 && e.stopOnFalse) { n = !1; break }
                    t = !1, l && (u ? u.length && c(u.shift()) : n ? l = [] : d.disable())
                },
                d = {
                    add: function() { if (l) { var i = l.length;! function o(t) { re.each(t, function(t, n) { var i = re.type(n); "function" === i ? e.unique && d.has(n) || l.push(n) : n && n.length && "string" !== i && o(n) }) }(arguments), t ? r = l.length : n && (a = i, c(n)) } return this },
                    remove: function() {
                        return l && re.each(arguments, function(e, n) {
                            for (var i;
                                (i = re.inArray(n, l, i)) > -1;) l.splice(i, 1), t && (r >= i && r--, s >= i && s--)
                        }), this
                    },
                    has: function(e) { return e ? re.inArray(e, l) > -1 : !(!l || !l.length) },
                    empty: function() { return l = [], r = 0, this },
                    disable: function() { return l = u = n = void 0, this },
                    disabled: function() { return !l },
                    lock: function() { return u = void 0, n || d.disable(), this },
                    locked: function() { return !u },
                    fireWith: function(e, n) { return !l || i && !u || (n = n || [], n = [e, n.slice ? n.slice() : n], t ? u.push(n) : c(n)), this },
                    fire: function() { return d.fireWith(this, arguments), this },
                    fired: function() { return !!i }
                };
            return d
        }, re.extend({
            Deferred: function(e) {
                var t = [
                        ["resolve", "done", re.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", re.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", re.Callbacks("memory")]
                    ],
                    n = "pending",
                    i = {
                        state: function() { return n },
                        always: function() { return r.done(arguments).fail(arguments), this },
                        then: function() {
                            var e = arguments;
                            return re.Deferred(function(n) {
                                re.each(t, function(t, o) {
                                    var s = re.isFunction(e[t]) && e[t];
                                    r[o[1]](function() {
                                        var e = s && s.apply(this, arguments);
                                        e && re.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === i ? n.promise() : this, s ? [e] : arguments)
                                    })
                                }), e = null
                            }).promise()
                        },
                        promise: function(e) { return null != e ? re.extend(e, i) : i }
                    },
                    r = {};
                return i.pipe = i.then, re.each(t, function(e, o) {
                    var s = o[2],
                        a = o[3];
                    i[o[1]] = s.add, a && s.add(function() { n = a }, t[1 ^ e][2].disable, t[2][2].lock), r[o[0]] = function() { return r[o[0] + "With"](this === r ? i : this, arguments), this }, r[o[0] + "With"] = s.fireWith
                }), i.promise(r), e && e.call(r, r), r
            },
            when: function(e) {
                var t, n, i, r = 0,
                    o = Y.call(arguments),
                    s = o.length,
                    a = 1 !== s || e && re.isFunction(e.promise) ? s : 0,
                    l = 1 === a ? e : re.Deferred(),
                    u = function(e, n, i) { return function(r) { n[e] = this, i[e] = arguments.length > 1 ? Y.call(arguments) : r, i === t ? l.notifyWith(n, i) : --a || l.resolveWith(n, i) } };
                if (s > 1)
                    for (t = new Array(s), n = new Array(s), i = new Array(s); s > r; r++) o[r] && re.isFunction(o[r].promise) ? o[r].promise().done(u(r, i, o)).fail(l.reject).progress(u(r, n, t)) : --a;
                return a || l.resolveWith(i, o), l.promise()
            }
        });
        var _e;
        re.fn.ready = function(e) { return re.ready.promise().done(e), this }, re.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(e) { e ? re.readyWait++ : re.ready(!0) },
            ready: function(e) {
                if (e === !0 ? !--re.readyWait : !re.isReady) {
                    if (!fe.body) return setTimeout(re.ready);
                    re.isReady = !0, e !== !0 && --re.readyWait > 0 || (_e.resolveWith(fe, [re]), re.fn.triggerHandler && (re(fe).triggerHandler("ready"), re(fe).off("ready")))
                }
            }
        }), re.ready.promise = function(t) {
            if (!_e)
                if (_e = re.Deferred(), "complete" === fe.readyState) setTimeout(re.ready);
                else if (fe.addEventListener) fe.addEventListener("DOMContentLoaded", a, !1), e.addEventListener("load", a, !1);
            else {
                fe.attachEvent("onreadystatechange", a), e.attachEvent("onload", a);
                var n = !1;
                try { n = null == e.frameElement && fe.documentElement } catch (i) {}
                n && n.doScroll && ! function r() {
                    if (!re.isReady) {
                        try { n.doScroll("left") } catch (e) { return setTimeout(r, 50) }
                        s(), re.ready()
                    }
                }()
            }
            return _e.promise(t)
        };
        var xe, Ce = "undefined";
        for (xe in re(ne)) break;
        ne.ownLast = "0" !== xe, ne.inlineBlockNeedsLayout = !1, re(function() {
                var e, t, n, i;
                n = fe.getElementsByTagName("body")[0], n && n.style && (t = fe.createElement("div"), i = fe.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), typeof t.style.zoom !== Ce && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ne.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(i))
            }),
            function() {
                var e = fe.createElement("div");
                if (null == ne.deleteExpando) { ne.deleteExpando = !0; try { delete e.test } catch (t) { ne.deleteExpando = !1 } }
                e = null
            }(), re.acceptData = function(e) {
                var t = re.noData[(e.nodeName + " ").toLowerCase()],
                    n = +e.nodeType || 1;
                return 1 !== n && 9 !== n ? !1 : !t || t !== !0 && e.getAttribute("classid") === t
            };
        var Te = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            ke = /([A-Z])/g;
        re.extend({ cache: {}, noData: { "applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" }, hasData: function(e) { return e = e.nodeType ? re.cache[e[re.expando]] : e[re.expando], !!e && !u(e) }, data: function(e, t, n) { return c(e, t, n) }, removeData: function(e, t) { return d(e, t) }, _data: function(e, t, n) { return c(e, t, n, !0) }, _removeData: function(e, t) { return d(e, t, !0) } }), re.fn.extend({
            data: function(e, t) {
                var n, i, r, o = this[0],
                    s = o && o.attributes;
                if (void 0 === e) {
                    if (this.length && (r = re.data(o), 1 === o.nodeType && !re._data(o, "parsedAttrs"))) {
                        for (n = s.length; n--;) s[n] && (i = s[n].name, 0 === i.indexOf("data-") && (i = re.camelCase(i.slice(5)), l(o, i, r[i])));
                        re._data(o, "parsedAttrs", !0)
                    }
                    return r
                }
                return "object" == typeof e ? this.each(function() { re.data(this, e) }) : arguments.length > 1 ? this.each(function() { re.data(this, e, t) }) : o ? l(o, e, re.data(o, e)) : void 0
            },
            removeData: function(e) { return this.each(function() { re.removeData(this, e) }) }
        }), re.extend({
            queue: function(e, t, n) { var i; return e ? (t = (t || "fx") + "queue", i = re._data(e, t), n && (!i || re.isArray(n) ? i = re._data(e, t, re.makeArray(n)) : i.push(n)), i || []) : void 0 },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = re.queue(e, t),
                    i = n.length,
                    r = n.shift(),
                    o = re._queueHooks(e, t),
                    s = function() { re.dequeue(e, t) };
                "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, s, o)), !i && o && o.empty.fire()
            },
            _queueHooks: function(e, t) { var n = t + "queueHooks"; return re._data(e, n) || re._data(e, n, { empty: re.Callbacks("once memory").add(function() { re._removeData(e, t + "queue"), re._removeData(e, n) }) }) }
        }), re.fn.extend({
            queue: function(e, t) {
                var n = 2;
                return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? re.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                    var n = re.queue(this, e, t);
                    re._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && re.dequeue(this, e)
                })
            },
            dequeue: function(e) { return this.each(function() { re.dequeue(this, e) }) },
            clearQueue: function(e) { return this.queue(e || "fx", []) },
            promise: function(e, t) {
                var n, i = 1,
                    r = re.Deferred(),
                    o = this,
                    s = this.length,
                    a = function() {--i || r.resolveWith(o, [o]) };
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) n = re._data(o[s], e + "queueHooks"), n && n.empty && (i++, n.empty.add(a));
                return a(), r.promise(t)
            }
        });
        var Ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            Se = ["Top", "Right", "Bottom", "Left"],
            $e = function(e, t) { return e = t || e, "none" === re.css(e, "display") || !re.contains(e.ownerDocument, e) },
            je = re.access = function(e, t, n, i, r, o, s) {
                var a = 0,
                    l = e.length,
                    u = null == n;
                if ("object" === re.type(n)) { r = !0; for (a in n) re.access(e, t, a, n[a], !0, o, s) } else if (void 0 !== i && (r = !0, re.isFunction(i) || (s = !0), u && (s ? (t.call(e, i), t = null) : (u = t, t = function(e, t, n) { return u.call(re(e), n) })), t))
                    for (; l > a; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
                return r ? e : u ? t.call(e) : l ? t(e[0], n) : o
            },
            Ae = /^(?:checkbox|radio)$/i;
        ! function() {
            var e = fe.createElement("input"),
                t = fe.createElement("div"),
                n = fe.createDocumentFragment();
            if (t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ne.leadingWhitespace = 3 === t.firstChild.nodeType, ne.tbody = !t.getElementsByTagName("tbody").length, ne.htmlSerialize = !!t.getElementsByTagName("link").length, ne.html5Clone = "<:nav></:nav>" !== fe.createElement("nav").cloneNode(!0).outerHTML, e.type = "checkbox", e.checked = !0, n.appendChild(e), ne.appendChecked = e.checked, t.innerHTML = "<textarea>x</textarea>", ne.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, n.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", ne.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, ne.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick", function() { ne.noCloneEvent = !1 }), t.cloneNode(!0).click()), null == ne.deleteExpando) { ne.deleteExpando = !0; try { delete t.test } catch (i) { ne.deleteExpando = !1 } }
        }(),
        function() {
            var t, n, i = fe.createElement("div");
            for (t in { submit: !0, change: !0, focusin: !0 }) n = "on" + t, (ne[t + "Bubbles"] = n in e) || (i.setAttribute(n, "t"), ne[t + "Bubbles"] = i.attributes[n].expando === !1);
            i = null
        }();
        var Me = /^(?:input|select|textarea)$/i,
            Oe = /^key/,
            Ie = /^(?:mouse|pointer|contextmenu)|click/,
            Pe = /^(?:focusinfocus|focusoutblur)$/,
            Fe = /^([^.]*)(?:\.(.+)|)$/;
        re.event = {
            global: {},
            add: function(e, t, n, i, r) {
                var o, s, a, l, u, c, d, h, p, f, m, g = re._data(e);
                if (g) {
                    for (n.handler && (l = n, n = l.handler, r = l.selector), n.guid || (n.guid = re.guid++), (s = g.events) || (s = g.events = {}), (c = g.handle) || (c = g.handle = function(e) { return typeof re === Ce || e && re.event.triggered === e.type ? void 0 : re.event.dispatch.apply(c.elem, arguments) }, c.elem = e), t = (t || "").match(be) || [""], a = t.length; a--;) o = Fe.exec(t[a]) || [], p = m = o[1], f = (o[2] || "").split(".").sort(), p && (u = re.event.special[p] || {}, p = (r ? u.delegateType : u.bindType) || p, u = re.event.special[p] || {}, d = re.extend({ type: p, origType: m, data: i, handler: n, guid: n.guid, selector: r, needsContext: r && re.expr.match.needsContext.test(r), namespace: f.join(".") }, l), (h = s[p]) || (h = s[p] = [], h.delegateCount = 0, u.setup && u.setup.call(e, i, f, c) !== !1 || (e.addEventListener ? e.addEventListener(p, c, !1) : e.attachEvent && e.attachEvent("on" + p, c))), u.add && (u.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), r ? h.splice(h.delegateCount++, 0, d) : h.push(d), re.event.global[p] = !0);
                    e = null
                }
            },
            remove: function(e, t, n, i, r) {
                var o, s, a, l, u, c, d, h, p, f, m, g = re.hasData(e) && re._data(e);
                if (g && (c = g.events)) {
                    for (t = (t || "").match(be) || [""], u = t.length; u--;)
                        if (a = Fe.exec(t[u]) || [], p = m = a[1], f = (a[2] || "").split(".").sort(), p) {
                            for (d = re.event.special[p] || {}, p = (i ? d.delegateType : d.bindType) || p, h = c[p] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = h.length; o--;) s = h[o], !r && m !== s.origType || n && n.guid !== s.guid || a && !a.test(s.namespace) || i && i !== s.selector && ("**" !== i || !s.selector) || (h.splice(o, 1), s.selector && h.delegateCount--, d.remove && d.remove.call(e, s));
                            l && !h.length && (d.teardown && d.teardown.call(e, f, g.handle) !== !1 || re.removeEvent(e, p, g.handle), delete c[p])
                        } else
                            for (p in c) re.event.remove(e, p + t[u], n, i, !0);
                    re.isEmptyObject(c) && (delete g.handle, re._removeData(e, "events"))
                }
            },
            trigger: function(t, n, i, r) {
                var o, s, a, l, u, c, d, h = [i || fe],
                    p = te.call(t, "type") ? t.type : t,
                    f = te.call(t, "namespace") ? t.namespace.split(".") : [];
                if (a = c = i = i || fe, 3 !== i.nodeType && 8 !== i.nodeType && !Pe.test(p + re.event.triggered) && (p.indexOf(".") >= 0 && (f = p.split("."), p = f.shift(), f.sort()), s = p.indexOf(":") < 0 && "on" + p, t = t[re.expando] ? t : new re.Event(p, "object" == typeof t && t), t.isTrigger = r ? 2 : 3, t.namespace = f.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : re.makeArray(n, [t]), u = re.event.special[p] || {}, r || !u.trigger || u.trigger.apply(i, n) !== !1)) {
                    if (!r && !u.noBubble && !re.isWindow(i)) {
                        for (l = u.delegateType || p, Pe.test(l + p) || (a = a.parentNode); a; a = a.parentNode) h.push(a), c = a;
                        c === (i.ownerDocument || fe) && h.push(c.defaultView || c.parentWindow || e)
                    }
                    for (d = 0;
                        (a = h[d++]) && !t.isPropagationStopped();) t.type = d > 1 ? l : u.bindType || p, o = (re._data(a, "events") || {})[t.type] && re._data(a, "handle"), o && o.apply(a, n), o = s && a[s], o && o.apply && re.acceptData(a) && (t.result = o.apply(a, n), t.result === !1 && t.preventDefault());
                    if (t.type = p, !r && !t.isDefaultPrevented() && (!u._default || u._default.apply(h.pop(), n) === !1) && re.acceptData(i) && s && i[p] && !re.isWindow(i)) {
                        c = i[s], c && (i[s] = null), re.event.triggered = p;
                        try { i[p]() } catch (m) {}
                        re.event.triggered = void 0, c && (i[s] = c)
                    }
                    return t.result
                }
            },
            dispatch: function(e) {
                e = re.event.fix(e);
                var t, n, i, r, o, s = [],
                    a = Y.call(arguments),
                    l = (re._data(this, "events") || {})[e.type] || [],
                    u = re.event.special[e.type] || {};
                if (a[0] = e, e.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, e) !== !1) {
                    for (s = re.event.handlers.call(this, e, l), t = 0;
                        (r = s[t++]) && !e.isPropagationStopped();)
                        for (e.currentTarget = r.elem, o = 0;
                            (i = r.handlers[o++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, n = ((re.event.special[i.origType] || {}).handle || i.handler).apply(r.elem, a), void 0 !== n && (e.result = n) === !1 && (e.preventDefault(), e.stopPropagation()));
                    return u.postDispatch && u.postDispatch.call(this, e), e.result
                }
            },
            handlers: function(e, t) {
                var n, i, r, o, s = [],
                    a = t.delegateCount,
                    l = e.target;
                if (a && l.nodeType && (!e.button || "click" !== e.type))
                    for (; l != this; l = l.parentNode || this)
                        if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                            for (r = [], o = 0; a > o; o++) i = t[o], n = i.selector + " ", void 0 === r[n] && (r[n] = i.needsContext ? re(n, this).index(l) >= 0 : re.find(n, this, null, [l]).length), r[n] && r.push(i);
                            r.length && s.push({ elem: l, handlers: r })
                        }
                return a < t.length && s.push({ elem: this, handlers: t.slice(a) }), s
            },
            fix: function(e) {
                if (e[re.expando]) return e;
                var t, n, i, r = e.type,
                    o = e,
                    s = this.fixHooks[r];
                for (s || (this.fixHooks[r] = s = Ie.test(r) ? this.mouseHooks : Oe.test(r) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, e = new re.Event(o), t = i.length; t--;) n = i[t], e[n] = o[n];
                return e.target || (e.target = o.srcElement || fe), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, o) : e
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: { props: "char charCode key keyCode".split(" "), filter: function(e, t) { return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e } },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(e, t) {
                    var n, i, r, o = t.button,
                        s = t.fromElement;
                    return null == e.pageX && null != t.clientX && (i = e.target.ownerDocument || fe, r = i.documentElement, n = i.body, e.pageX = t.clientX + (r && r.scrollLeft || n && n.scrollLeft || 0) - (r && r.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || n && n.scrollTop || 0) - (r && r.clientTop || n && n.clientTop || 0)), !e.relatedTarget && s && (e.relatedTarget = s === e.target ? t.toElement : s), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
                }
            },
            special: { load: { noBubble: !0 }, focus: { trigger: function() { if (this !== f() && this.focus) try { return this.focus(), !1 } catch (e) {} }, delegateType: "focusin" }, blur: { trigger: function() { return this === f() && this.blur ? (this.blur(), !1) : void 0 }, delegateType: "focusout" }, click: { trigger: function() { return re.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0 }, _default: function(e) { return re.nodeName(e.target, "a") } }, beforeunload: { postDispatch: function(e) { void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result) } } },
            simulate: function(e, t, n, i) {
                var r = re.extend(new re.Event, n, { type: e, isSimulated: !0, originalEvent: {} });
                i ? re.event.trigger(r, null, t) : re.event.dispatch.call(t, r), r.isDefaultPrevented() && n.preventDefault()
            }
        }, re.removeEvent = fe.removeEventListener ? function(e, t, n) { e.removeEventListener && e.removeEventListener(t, n, !1) } : function(e, t, n) {
            var i = "on" + t;
            e.detachEvent && (typeof e[i] === Ce && (e[i] = null), e.detachEvent(i, n))
        }, re.Event = function(e, t) { return this instanceof re.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? h : p) : this.type = e, t && re.extend(this, t), this.timeStamp = e && e.timeStamp || re.now(), void(this[re.expando] = !0)) : new re.Event(e, t) }, re.Event.prototype = {
            isDefaultPrevented: p,
            isPropagationStopped: p,
            isImmediatePropagationStopped: p,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = h, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = h, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = h, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, re.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(e, t) {
            re.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, i = this,
                        r = e.relatedTarget,
                        o = e.handleObj;
                    return (!r || r !== i && !re.contains(i, r)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
                }
            }
        }), ne.submitBubbles || (re.event.special.submit = {
            setup: function() {
                return re.nodeName(this, "form") ? !1 : void re.event.add(this, "click._submit keypress._submit", function(e) {
                    var t = e.target,
                        n = re.nodeName(t, "input") || re.nodeName(t, "button") ? t.form : void 0;
                    n && !re._data(n, "submitBubbles") && (re.event.add(n, "submit._submit", function(e) { e._submit_bubble = !0 }), re._data(n, "submitBubbles", !0))
                })
            },
            postDispatch: function(e) { e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && re.event.simulate("submit", this.parentNode, e, !0)) },
            teardown: function() { return re.nodeName(this, "form") ? !1 : void re.event.remove(this, "._submit") }
        }), ne.changeBubbles || (re.event.special.change = {
            setup: function() {
                return Me.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (re.event.add(this, "propertychange._change", function(e) { "checked" === e.originalEvent.propertyName && (this._just_changed = !0) }), re.event.add(this, "click._change", function(e) { this._just_changed && !e.isTrigger && (this._just_changed = !1), re.event.simulate("change", this, e, !0) })), !1) : void re.event.add(this, "beforeactivate._change", function(e) {
                    var t = e.target;
                    Me.test(t.nodeName) && !re._data(t, "changeBubbles") && (re.event.add(t, "change._change", function(e) {!this.parentNode || e.isSimulated || e.isTrigger || re.event.simulate("change", this.parentNode, e, !0) }), re._data(t, "changeBubbles", !0))
                })
            },
            handle: function(e) { var t = e.target; return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0 },
            teardown: function() { return re.event.remove(this, "._change"), !Me.test(this.nodeName) }
        }), ne.focusinBubbles || re.each({ focus: "focusin", blur: "focusout" }, function(e, t) {
            var n = function(e) { re.event.simulate(t, e.target, re.event.fix(e), !0) };
            re.event.special[t] = {
                setup: function() {
                    var i = this.ownerDocument || this,
                        r = re._data(i, t);
                    r || i.addEventListener(e, n, !0), re._data(i, t, (r || 0) + 1)
                },
                teardown: function() {
                    var i = this.ownerDocument || this,
                        r = re._data(i, t) - 1;
                    r ? re._data(i, t, r) : (i.removeEventListener(e, n, !0), re._removeData(i, t))
                }
            }
        }), re.fn.extend({
            on: function(e, t, n, i, r) {
                var o, s;
                if ("object" == typeof e) { "string" != typeof t && (n = n || t, t = void 0); for (o in e) this.on(o, t, n, e[o], r); return this }
                if (null == n && null == i ? (i = t, n = t = void 0) : null == i && ("string" == typeof t ? (i = n, n = void 0) : (i = n, n = t, t = void 0)), i === !1) i = p;
                else if (!i) return this;
                return 1 === r && (s = i, i = function(e) { return re().off(e), s.apply(this, arguments) }, i.guid = s.guid || (s.guid = re.guid++)), this.each(function() { re.event.add(this, e, i, n, t) })
            },
            one: function(e, t, n, i) { return this.on(e, t, n, i, 1) },
            off: function(e, t, n) { var i, r; if (e && e.preventDefault && e.handleObj) return i = e.handleObj, re(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this; if ("object" == typeof e) { for (r in e) this.off(r, t, e[r]); return this } return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = p), this.each(function() { re.event.remove(this, e, n, t) }) },
            trigger: function(e, t) { return this.each(function() { re.event.trigger(e, t, this) }) },
            triggerHandler: function(e, t) { var n = this[0]; return n ? re.event.trigger(e, t, n, !0) : void 0 }
        });
        var Ne = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            Le = / jQuery\d+="(?:null|\d+)"/g,
            Ve = new RegExp("<(?:" + Ne + ")[\\s/>]", "i"),
            ze = /^\s+/,
            De = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            Be = /<([\w:]+)/,
            He = /<tbody/i,
            Re = /<|&#?\w+;/,
            qe = /<(?:script|style|link)/i,
            We = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Ue = /^$|\/(?:java|ecma)script/i,
            Xe = /^true\/(.*)/,
            Qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            Ye = { option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], area: [1, "<map>", "</map>"], param: [1, "<object>", "</object>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: ne.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"] },
            Ke = m(fe),
            Ge = Ke.appendChild(fe.createElement("div"));
        Ye.optgroup = Ye.option, Ye.tbody = Ye.tfoot = Ye.colgroup = Ye.caption = Ye.thead, Ye.th = Ye.td, re.extend({
            clone: function(e, t, n) {
                var i, r, o, s, a, l = re.contains(e.ownerDocument, e);
                if (ne.html5Clone || re.isXMLDoc(e) || !Ve.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Ge.innerHTML = e.outerHTML, Ge.removeChild(o = Ge.firstChild)), !(ne.noCloneEvent && ne.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || re.isXMLDoc(e)))
                    for (i = g(o), a = g(e), s = 0; null != (r = a[s]); ++s) i[s] && C(r, i[s]);
                if (t)
                    if (n)
                        for (a = a || g(e), i = i || g(o), s = 0; null != (r = a[s]); s++) x(r, i[s]);
                    else x(e, o);
                return i = g(o, "script"), i.length > 0 && _(i, !l && g(e, "script")), i = a = r = null, o
            },
            buildFragment: function(e, t, n, i) {
                for (var r, o, s, a, l, u, c, d = e.length, h = m(t), p = [], f = 0; d > f; f++)
                    if (o = e[f], o || 0 === o)
                        if ("object" === re.type(o)) re.merge(p, o.nodeType ? [o] : o);
                        else if (Re.test(o)) {
                    for (a = a || h.appendChild(t.createElement("div")), l = (Be.exec(o) || ["", ""])[1].toLowerCase(), c = Ye[l] || Ye._default, a.innerHTML = c[1] + o.replace(De, "<$1></$2>") + c[2], r = c[0]; r--;) a = a.lastChild;
                    if (!ne.leadingWhitespace && ze.test(o) && p.push(t.createTextNode(ze.exec(o)[0])), !ne.tbody)
                        for (o = "table" !== l || He.test(o) ? "<table>" !== c[1] || He.test(o) ? 0 : a : a.firstChild, r = o && o.childNodes.length; r--;) re.nodeName(u = o.childNodes[r], "tbody") && !u.childNodes.length && o.removeChild(u);
                    for (re.merge(p, a.childNodes), a.textContent = ""; a.firstChild;) a.removeChild(a.firstChild);
                    a = h.lastChild
                } else p.push(t.createTextNode(o));
                for (a && h.removeChild(a), ne.appendChecked || re.grep(g(p, "input"), v), f = 0; o = p[f++];)
                    if ((!i || -1 === re.inArray(o, i)) && (s = re.contains(o.ownerDocument, o), a = g(h.appendChild(o), "script"), s && _(a), n))
                        for (r = 0; o = a[r++];) Ue.test(o.type || "") && n.push(o);
                return a = null, h
            },
            cleanData: function(e, t) {
                for (var n, i, r, o, s = 0, a = re.expando, l = re.cache, u = ne.deleteExpando, c = re.event.special; null != (n = e[s]); s++)
                    if ((t || re.acceptData(n)) && (r = n[a], o = r && l[r])) {
                        if (o.events)
                            for (i in o.events) c[i] ? re.event.remove(n, i) : re.removeEvent(n, i, o.handle);
                        l[r] && (delete l[r], u ? delete n[a] : typeof n.removeAttribute !== Ce ? n.removeAttribute(a) : n[a] = null, Q.push(r))
                    }
            }
        }), re.fn.extend({
            text: function(e) { return je(this, function(e) { return void 0 === e ? re.text(this) : this.empty().append((this[0] && this[0].ownerDocument || fe).createTextNode(e)) }, null, e, arguments.length) },
            append: function() {
                return this.domManip(arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = y(this, e);
                        t.appendChild(e)
                    }
                })
            },
            prepend: function() {
                return this.domManip(arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = y(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() { return this.domManip(arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this) }) },
            after: function() { return this.domManip(arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this.nextSibling) }) },
            remove: function(e, t) { for (var n, i = e ? re.filter(e, this) : this, r = 0; null != (n = i[r]); r++) t || 1 !== n.nodeType || re.cleanData(g(n)), n.parentNode && (t && re.contains(n.ownerDocument, n) && _(g(n, "script")), n.parentNode.removeChild(n)); return this },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++) {
                    for (1 === e.nodeType && re.cleanData(g(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                    e.options && re.nodeName(e, "select") && (e.options.length = 0)
                }
                return this
            },
            clone: function(e, t) { return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() { return re.clone(this, e, t) }) },
            html: function(e) {
                return je(this, function(e) {
                    var t = this[0] || {},
                        n = 0,
                        i = this.length;
                    if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(Le, "") : void 0;
                    if ("string" == typeof e && !qe.test(e) && (ne.htmlSerialize || !Ve.test(e)) && (ne.leadingWhitespace || !ze.test(e)) && !Ye[(Be.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = e.replace(De, "<$1></$2>");
                        try {
                            for (; i > n; n++) t = this[n] || {}, 1 === t.nodeType && (re.cleanData(g(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (r) {}
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function() { var e = arguments[0]; return this.domManip(arguments, function(t) { e = this.parentNode, re.cleanData(g(this)), e && e.replaceChild(t, this) }), e && (e.length || e.nodeType) ? this : this.remove() },
            detach: function(e) { return this.remove(e, !0) },
            domManip: function(e, t) {
                e = K.apply([], e);
                var n, i, r, o, s, a, l = 0,
                    u = this.length,
                    c = this,
                    d = u - 1,
                    h = e[0],
                    p = re.isFunction(h);
                if (p || u > 1 && "string" == typeof h && !ne.checkClone && We.test(h)) return this.each(function(n) {
                    var i = c.eq(n);
                    p && (e[0] = h.call(this, n, i.html())), i.domManip(e, t)
                });
                if (u && (a = re.buildFragment(e, this[0].ownerDocument, !1, this), n = a.firstChild, 1 === a.childNodes.length && (a = n), n)) {
                    for (o = re.map(g(a, "script"), b), r = o.length; u > l; l++) i = a, l !== d && (i = re.clone(i, !0, !0), r && re.merge(o, g(i, "script"))), t.call(this[l], i, l);
                    if (r)
                        for (s = o[o.length - 1].ownerDocument, re.map(o, w), l = 0; r > l; l++) i = o[l], Ue.test(i.type || "") && !re._data(i, "globalEval") && re.contains(s, i) && (i.src ? re._evalUrl && re._evalUrl(i.src) : re.globalEval((i.text || i.textContent || i.innerHTML || "").replace(Qe, "")));
                    a = n = null
                }
                return this
            }
        }), re.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(e, t) { re.fn[e] = function(e) { for (var n, i = 0, r = [], o = re(e), s = o.length - 1; s >= i; i++) n = i === s ? this : this.clone(!0), re(o[i])[t](n), G.apply(r, n.get()); return this.pushStack(r) } });
        var Je, Ze = {};
        ! function() {
            var e;
            ne.shrinkWrapBlocks = function() {
                if (null != e) return e;
                e = !1;
                var t, n, i;
                return n = fe.getElementsByTagName("body")[0], n && n.style ? (t = fe.createElement("div"), i = fe.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), typeof t.style.zoom !== Ce && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(fe.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(i), e) : void 0
            }
        }();
        var et, tt, nt = /^margin/,
            it = new RegExp("^(" + Ee + ")(?!px)[a-z%]+$", "i"),
            rt = /^(top|right|bottom|left)$/;
        e.getComputedStyle ? (et = function(t) { return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null) }, tt = function(e, t, n) {
                var i, r, o, s, a = e.style;
                return n = n || et(e), s = n ? n.getPropertyValue(t) || n[t] : void 0, n && ("" !== s || re.contains(e.ownerDocument, e) || (s = re.style(e, t)), it.test(s) && nt.test(t) && (i = a.width, r = a.minWidth,
                    o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o)), void 0 === s ? s : s + ""
            }) : fe.documentElement.currentStyle && (et = function(e) { return e.currentStyle }, tt = function(e, t, n) { var i, r, o, s, a = e.style; return n = n || et(e), s = n ? n[t] : void 0, null == s && a && a[t] && (s = a[t]), it.test(s) && !rt.test(t) && (i = a.left, r = e.runtimeStyle, o = r && r.left, o && (r.left = e.currentStyle.left), a.left = "fontSize" === t ? "1em" : s, s = a.pixelLeft + "px", a.left = i, o && (r.left = o)), void 0 === s ? s : s + "" || "auto" }),
            function() {
                function t() {
                    var t, n, i, r;
                    n = fe.getElementsByTagName("body")[0], n && n.style && (t = fe.createElement("div"), i = fe.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", o = s = !1, l = !0, e.getComputedStyle && (o = "1%" !== (e.getComputedStyle(t, null) || {}).top, s = "4px" === (e.getComputedStyle(t, null) || { width: "4px" }).width, r = t.appendChild(fe.createElement("div")), r.style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", r.style.marginRight = r.style.width = "0", t.style.width = "1px", l = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight), t.removeChild(r)), t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", r = t.getElementsByTagName("td"), r[0].style.cssText = "margin:0;border:0;padding:0;display:none", a = 0 === r[0].offsetHeight, a && (r[0].style.display = "", r[1].style.display = "none", a = 0 === r[0].offsetHeight), n.removeChild(i))
                }
                var n, i, r, o, s, a, l;
                n = fe.createElement("div"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", r = n.getElementsByTagName("a")[0], i = r && r.style, i && (i.cssText = "float:left;opacity:.5", ne.opacity = "0.5" === i.opacity, ne.cssFloat = !!i.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", ne.clearCloneStyle = "content-box" === n.style.backgroundClip, ne.boxSizing = "" === i.boxSizing || "" === i.MozBoxSizing || "" === i.WebkitBoxSizing, re.extend(ne, { reliableHiddenOffsets: function() { return null == a && t(), a }, boxSizingReliable: function() { return null == s && t(), s }, pixelPosition: function() { return null == o && t(), o }, reliableMarginRight: function() { return null == l && t(), l } }))
            }(), re.swap = function(e, t, n, i) {
                var r, o, s = {};
                for (o in t) s[o] = e.style[o], e.style[o] = t[o];
                r = n.apply(e, i || []);
                for (o in t) e.style[o] = s[o];
                return r
            };
        var ot = /alpha\([^)]*\)/i,
            st = /opacity\s*=\s*([^)]*)/,
            at = /^(none|table(?!-c[ea]).+)/,
            lt = new RegExp("^(" + Ee + ")(.*)$", "i"),
            ut = new RegExp("^([+-])=(" + Ee + ")", "i"),
            ct = { position: "absolute", visibility: "hidden", display: "block" },
            dt = { letterSpacing: "0", fontWeight: "400" },
            ht = ["Webkit", "O", "Moz", "ms"];
        re.extend({
            cssHooks: { opacity: { get: function(e, t) { if (t) { var n = tt(e, "opacity"); return "" === n ? "1" : n } } } },
            cssNumber: { columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
            cssProps: { "float": ne.cssFloat ? "cssFloat" : "styleFloat" },
            style: function(e, t, n, i) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var r, o, s, a = re.camelCase(t),
                        l = e.style;
                    if (t = re.cssProps[a] || (re.cssProps[a] = S(l, a)), s = re.cssHooks[t] || re.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (r = s.get(e, !1, i)) ? r : l[t];
                    if (o = typeof n, "string" === o && (r = ut.exec(n)) && (n = (r[1] + 1) * r[2] + parseFloat(re.css(e, t)), o = "number"), null != n && n === n && ("number" !== o || re.cssNumber[a] || (n += "px"), ne.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(s && "set" in s && void 0 === (n = s.set(e, n, i))))) try { l[t] = n } catch (u) {}
                }
            },
            css: function(e, t, n, i) { var r, o, s, a = re.camelCase(t); return t = re.cssProps[a] || (re.cssProps[a] = S(e.style, a)), s = re.cssHooks[t] || re.cssHooks[a], s && "get" in s && (o = s.get(e, !0, n)), void 0 === o && (o = tt(e, t, i)), "normal" === o && t in dt && (o = dt[t]), "" === n || n ? (r = parseFloat(o), n === !0 || re.isNumeric(r) ? r || 0 : o) : o }
        }), re.each(["height", "width"], function(e, t) { re.cssHooks[t] = { get: function(e, n, i) { return n ? at.test(re.css(e, "display")) && 0 === e.offsetWidth ? re.swap(e, ct, function() { return M(e, t, i) }) : M(e, t, i) : void 0 }, set: function(e, n, i) { var r = i && et(e); return j(e, n, i ? A(e, t, i, ne.boxSizing && "border-box" === re.css(e, "boxSizing", !1, r), r) : 0) } } }), ne.opacity || (re.cssHooks.opacity = {
            get: function(e, t) { return st.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : "" },
            set: function(e, t) {
                var n = e.style,
                    i = e.currentStyle,
                    r = re.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                    o = i && i.filter || n.filter || "";
                n.zoom = 1, (t >= 1 || "" === t) && "" === re.trim(o.replace(ot, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = ot.test(o) ? o.replace(ot, r) : o + " " + r)
            }
        }), re.cssHooks.marginRight = E(ne.reliableMarginRight, function(e, t) { return t ? re.swap(e, { display: "inline-block" }, tt, [e, "marginRight"]) : void 0 }), re.each({ margin: "", padding: "", border: "Width" }, function(e, t) { re.cssHooks[e + t] = { expand: function(n) { for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) r[e + Se[i] + t] = o[i] || o[i - 2] || o[0]; return r } }, nt.test(e) || (re.cssHooks[e + t].set = j) }), re.fn.extend({
            css: function(e, t) {
                return je(this, function(e, t, n) {
                    var i, r, o = {},
                        s = 0;
                    if (re.isArray(t)) { for (i = et(e), r = t.length; r > s; s++) o[t[s]] = re.css(e, t[s], !1, i); return o }
                    return void 0 !== n ? re.style(e, t, n) : re.css(e, t)
                }, e, t, arguments.length > 1)
            },
            show: function() { return $(this, !0) },
            hide: function() { return $(this) },
            toggle: function(e) { return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() { $e(this) ? re(this).show() : re(this).hide() }) }
        }), re.Tween = O, O.prototype = { constructor: O, init: function(e, t, n, i, r, o) { this.elem = e, this.prop = n, this.easing = r || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (re.cssNumber[n] ? "" : "px") }, cur: function() { var e = O.propHooks[this.prop]; return e && e.get ? e.get(this) : O.propHooks._default.get(this) }, run: function(e) { var t, n = O.propHooks[this.prop]; return this.options.duration ? this.pos = t = re.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : O.propHooks._default.set(this), this } }, O.prototype.init.prototype = O.prototype, O.propHooks = { _default: { get: function(e) { var t; return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = re.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop] }, set: function(e) { re.fx.step[e.prop] ? re.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[re.cssProps[e.prop]] || re.cssHooks[e.prop]) ? re.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now } } }, O.propHooks.scrollTop = O.propHooks.scrollLeft = { set: function(e) { e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now) } }, re.easing = { linear: function(e) { return e }, swing: function(e) { return .5 - Math.cos(e * Math.PI) / 2 } }, re.fx = O.prototype.init, re.fx.step = {};
        var pt, ft, mt = /^(?:toggle|show|hide)$/,
            gt = new RegExp("^(?:([+-])=|)(" + Ee + ")([a-z%]*)$", "i"),
            vt = /queueHooks$/,
            yt = [N],
            bt = {
                "*": [function(e, t) {
                    var n = this.createTween(e, t),
                        i = n.cur(),
                        r = gt.exec(t),
                        o = r && r[3] || (re.cssNumber[e] ? "" : "px"),
                        s = (re.cssNumber[e] || "px" !== o && +i) && gt.exec(re.css(n.elem, e)),
                        a = 1,
                        l = 20;
                    if (s && s[3] !== o) {
                        o = o || s[3], r = r || [], s = +i || 1;
                        do a = a || ".5", s /= a, re.style(n.elem, e, s + o); while (a !== (a = n.cur() / i) && 1 !== a && --l)
                    }
                    return r && (s = n.start = +s || +i || 0, n.unit = o, n.end = r[1] ? s + (r[1] + 1) * r[2] : +r[2]), n
                }]
            };
        re.Animation = re.extend(V, { tweener: function(e, t) { re.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" "); for (var n, i = 0, r = e.length; r > i; i++) n = e[i], bt[n] = bt[n] || [], bt[n].unshift(t) }, prefilter: function(e, t) { t ? yt.unshift(e) : yt.push(e) } }), re.speed = function(e, t, n) { var i = e && "object" == typeof e ? re.extend({}, e) : { complete: n || !n && t || re.isFunction(e) && e, duration: e, easing: n && t || t && !re.isFunction(t) && t }; return i.duration = re.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in re.fx.speeds ? re.fx.speeds[i.duration] : re.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function() { re.isFunction(i.old) && i.old.call(this), i.queue && re.dequeue(this, i.queue) }, i }, re.fn.extend({
                fadeTo: function(e, t, n, i) { return this.filter($e).css("opacity", 0).show().end().animate({ opacity: t }, e, n, i) },
                animate: function(e, t, n, i) {
                    var r = re.isEmptyObject(e),
                        o = re.speed(t, n, i),
                        s = function() {
                            var t = V(this, re.extend({}, e), o);
                            (r || re._data(this, "finish")) && t.stop(!0)
                        };
                    return s.finish = s, r || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
                },
                stop: function(e, t, n) {
                    var i = function(e) {
                        var t = e.stop;
                        delete e.stop, t(n)
                    };
                    return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                        var t = !0,
                            r = null != e && e + "queueHooks",
                            o = re.timers,
                            s = re._data(this);
                        if (r) s[r] && s[r].stop && i(s[r]);
                        else
                            for (r in s) s[r] && s[r].stop && vt.test(r) && i(s[r]);
                        for (r = o.length; r--;) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));
                        (t || !n) && re.dequeue(this, e)
                    })
                },
                finish: function(e) {
                    return e !== !1 && (e = e || "fx"), this.each(function() {
                        var t, n = re._data(this),
                            i = n[e + "queue"],
                            r = n[e + "queueHooks"],
                            o = re.timers,
                            s = i ? i.length : 0;
                        for (n.finish = !0, re.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                        for (t = 0; s > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
                        delete n.finish
                    })
                }
            }), re.each(["toggle", "show", "hide"], function(e, t) {
                var n = re.fn[t];
                re.fn[t] = function(e, i, r) { return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(P(t, !0), e, i, r) }
            }), re.each({ slideDown: P("show"), slideUp: P("hide"), slideToggle: P("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(e, t) { re.fn[e] = function(e, n, i) { return this.animate(t, e, n, i) } }), re.timers = [], re.fx.tick = function() {
                var e, t = re.timers,
                    n = 0;
                for (pt = re.now(); n < t.length; n++) e = t[n], e() || t[n] !== e || t.splice(n--, 1);
                t.length || re.fx.stop(), pt = void 0
            }, re.fx.timer = function(e) { re.timers.push(e), e() ? re.fx.start() : re.timers.pop() }, re.fx.interval = 13, re.fx.start = function() { ft || (ft = setInterval(re.fx.tick, re.fx.interval)) }, re.fx.stop = function() { clearInterval(ft), ft = null }, re.fx.speeds = { slow: 600, fast: 200, _default: 400 }, re.fn.delay = function(e, t) {
                return e = re.fx ? re.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                    var i = setTimeout(t, e);
                    n.stop = function() { clearTimeout(i) }
                })
            },
            function() {
                var e, t, n, i, r;
                t = fe.createElement("div"), t.setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = t.getElementsByTagName("a")[0], n = fe.createElement("select"), r = n.appendChild(fe.createElement("option")), e = t.getElementsByTagName("input")[0], i.style.cssText = "top:1px", ne.getSetAttribute = "t" !== t.className, ne.style = /top/.test(i.getAttribute("style")), ne.hrefNormalized = "/a" === i.getAttribute("href"), ne.checkOn = !!e.value, ne.optSelected = r.selected, ne.enctype = !!fe.createElement("form").enctype, n.disabled = !0, ne.optDisabled = !r.disabled, e = fe.createElement("input"), e.setAttribute("value", ""), ne.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), ne.radioValue = "t" === e.value
            }();
        var wt = /\r/g;
        re.fn.extend({
            val: function(e) {
                var t, n, i, r = this[0]; {
                    if (arguments.length) return i = re.isFunction(e), this.each(function(n) {
                        var r;
                        1 === this.nodeType && (r = i ? e.call(this, n, re(this).val()) : e, null == r ? r = "" : "number" == typeof r ? r += "" : re.isArray(r) && (r = re.map(r, function(e) { return null == e ? "" : e + "" })), t = re.valHooks[this.type] || re.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
                    });
                    if (r) return t = re.valHooks[r.type] || re.valHooks[r.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(wt, "") : null == n ? "" : n)
                }
            }
        }), re.extend({
            valHooks: {
                option: { get: function(e) { var t = re.find.attr(e, "value"); return null != t ? t : re.trim(re.text(e)) } },
                select: {
                    get: function(e) {
                        for (var t, n, i = e.options, r = e.selectedIndex, o = "select-one" === e.type || 0 > r, s = o ? null : [], a = o ? r + 1 : i.length, l = 0 > r ? a : o ? r : 0; a > l; l++)
                            if (n = i[l], (n.selected || l === r) && (ne.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !re.nodeName(n.parentNode, "optgroup"))) {
                                if (t = re(n).val(), o) return t;
                                s.push(t)
                            }
                        return s
                    },
                    set: function(e, t) {
                        for (var n, i, r = e.options, o = re.makeArray(t), s = r.length; s--;)
                            if (i = r[s], re.inArray(re.valHooks.option.get(i), o) >= 0) try { i.selected = n = !0 } catch (a) { i.scrollHeight } else i.selected = !1;
                        return n || (e.selectedIndex = -1), r
                    }
                }
            }
        }), re.each(["radio", "checkbox"], function() { re.valHooks[this] = { set: function(e, t) { return re.isArray(t) ? e.checked = re.inArray(re(e).val(), t) >= 0 : void 0 } }, ne.checkOn || (re.valHooks[this].get = function(e) { return null === e.getAttribute("value") ? "on" : e.value }) });
        var _t, xt, Ct = re.expr.attrHandle,
            Tt = /^(?:checked|selected)$/i,
            kt = ne.getSetAttribute,
            Et = ne.input;
        re.fn.extend({ attr: function(e, t) { return je(this, re.attr, e, t, arguments.length > 1) }, removeAttr: function(e) { return this.each(function() { re.removeAttr(this, e) }) } }), re.extend({
            attr: function(e, t, n) { var i, r, o = e.nodeType; if (e && 3 !== o && 8 !== o && 2 !== o) return typeof e.getAttribute === Ce ? re.prop(e, t, n) : (1 === o && re.isXMLDoc(e) || (t = t.toLowerCase(), i = re.attrHooks[t] || (re.expr.match.bool.test(t) ? xt : _t)), void 0 === n ? i && "get" in i && null !== (r = i.get(e, t)) ? r : (r = re.find.attr(e, t), null == r ? void 0 : r) : null !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : void re.removeAttr(e, t)) },
            removeAttr: function(e, t) {
                var n, i, r = 0,
                    o = t && t.match(be);
                if (o && 1 === e.nodeType)
                    for (; n = o[r++];) i = re.propFix[n] || n, re.expr.match.bool.test(n) ? Et && kt || !Tt.test(n) ? e[i] = !1 : e[re.camelCase("default-" + n)] = e[i] = !1 : re.attr(e, n, ""), e.removeAttribute(kt ? n : i)
            },
            attrHooks: { type: { set: function(e, t) { if (!ne.radioValue && "radio" === t && re.nodeName(e, "input")) { var n = e.value; return e.setAttribute("type", t), n && (e.value = n), t } } } }
        }), xt = { set: function(e, t, n) { return t === !1 ? re.removeAttr(e, n) : Et && kt || !Tt.test(n) ? e.setAttribute(!kt && re.propFix[n] || n, n) : e[re.camelCase("default-" + n)] = e[n] = !0, n } }, re.each(re.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var n = Ct[t] || re.find.attr;
            Ct[t] = Et && kt || !Tt.test(t) ? function(e, t, i) { var r, o; return i || (o = Ct[t], Ct[t] = r, r = null != n(e, t, i) ? t.toLowerCase() : null, Ct[t] = o), r } : function(e, t, n) { return n ? void 0 : e[re.camelCase("default-" + t)] ? t.toLowerCase() : null }
        }), Et && kt || (re.attrHooks.value = { set: function(e, t, n) { return re.nodeName(e, "input") ? void(e.defaultValue = t) : _t && _t.set(e, t, n) } }), kt || (_t = { set: function(e, t, n) { var i = e.getAttributeNode(n); return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)), i.value = t += "", "value" === n || t === e.getAttribute(n) ? t : void 0 } }, Ct.id = Ct.name = Ct.coords = function(e, t, n) { var i; return n ? void 0 : (i = e.getAttributeNode(t)) && "" !== i.value ? i.value : null }, re.valHooks.button = { get: function(e, t) { var n = e.getAttributeNode(t); return n && n.specified ? n.value : void 0 }, set: _t.set }, re.attrHooks.contenteditable = { set: function(e, t, n) { _t.set(e, "" === t ? !1 : t, n) } }, re.each(["width", "height"], function(e, t) { re.attrHooks[t] = { set: function(e, n) { return "" === n ? (e.setAttribute(t, "auto"), n) : void 0 } } })), ne.style || (re.attrHooks.style = { get: function(e) { return e.style.cssText || void 0 }, set: function(e, t) { return e.style.cssText = t + "" } });
        var St = /^(?:input|select|textarea|button|object)$/i,
            $t = /^(?:a|area)$/i;
        re.fn.extend({ prop: function(e, t) { return je(this, re.prop, e, t, arguments.length > 1) }, removeProp: function(e) { return e = re.propFix[e] || e, this.each(function() { try { this[e] = void 0, delete this[e] } catch (t) {} }) } }), re.extend({ propFix: { "for": "htmlFor", "class": "className" }, prop: function(e, t, n) { var i, r, o, s = e.nodeType; if (e && 3 !== s && 8 !== s && 2 !== s) return o = 1 !== s || !re.isXMLDoc(e), o && (t = re.propFix[t] || t, r = re.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t] }, propHooks: { tabIndex: { get: function(e) { var t = re.find.attr(e, "tabindex"); return t ? parseInt(t, 10) : St.test(e.nodeName) || $t.test(e.nodeName) && e.href ? 0 : -1 } } } }), ne.hrefNormalized || re.each(["href", "src"], function(e, t) { re.propHooks[t] = { get: function(e) { return e.getAttribute(t, 4) } } }), ne.optSelected || (re.propHooks.selected = { get: function(e) { var t = e.parentNode; return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null } }), re.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { re.propFix[this.toLowerCase()] = this }), ne.enctype || (re.propFix.enctype = "encoding");
        var jt = /[\t\r\n\f]/g;
        re.fn.extend({
            addClass: function(e) {
                var t, n, i, r, o, s, a = 0,
                    l = this.length,
                    u = "string" == typeof e && e;
                if (re.isFunction(e)) return this.each(function(t) { re(this).addClass(e.call(this, t, this.className)) });
                if (u)
                    for (t = (e || "").match(be) || []; l > a; a++)
                        if (n = this[a], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(jt, " ") : " ")) {
                            for (o = 0; r = t[o++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                            s = re.trim(i), n.className !== s && (n.className = s)
                        }
                return this
            },
            removeClass: function(e) {
                var t, n, i, r, o, s, a = 0,
                    l = this.length,
                    u = 0 === arguments.length || "string" == typeof e && e;
                if (re.isFunction(e)) return this.each(function(t) { re(this).removeClass(e.call(this, t, this.className)) });
                if (u)
                    for (t = (e || "").match(be) || []; l > a; a++)
                        if (n = this[a], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(jt, " ") : "")) {
                            for (o = 0; r = t[o++];)
                                for (; i.indexOf(" " + r + " ") >= 0;) i = i.replace(" " + r + " ", " ");
                            s = e ? re.trim(i) : "", n.className !== s && (n.className = s)
                        }
                return this
            },
            toggleClass: function(e, t) {
                var n = typeof e;
                return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : re.isFunction(e) ? this.each(function(n) { re(this).toggleClass(e.call(this, n, this.className, t), t) }) : this.each(function() {
                    if ("string" === n)
                        for (var t, i = 0, r = re(this), o = e.match(be) || []; t = o[i++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                    else(n === Ce || "boolean" === n) && (this.className && re._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : re._data(this, "__className__") || "")
                })
            },
            hasClass: function(e) {
                for (var t = " " + e + " ", n = 0, i = this.length; i > n; n++)
                    if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(jt, " ").indexOf(t) >= 0) return !0;
                return !1
            }
        }), re.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) { re.fn[t] = function(e, n) { return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t) } }), re.fn.extend({ hover: function(e, t) { return this.mouseenter(e).mouseleave(t || e) }, bind: function(e, t, n) { return this.on(e, null, t, n) }, unbind: function(e, t) { return this.off(e, null, t) }, delegate: function(e, t, n, i) { return this.on(t, e, n, i) }, undelegate: function(e, t, n) { return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n) } });
        var At = re.now(),
            Mt = /\?/,
            Ot = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
        re.parseJSON = function(t) {
            if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
            var n, i = null,
                r = re.trim(t + "");
            return r && !re.trim(r.replace(Ot, function(e, t, r, o) { return n && t && (i = 0), 0 === i ? e : (n = r || t, i += !o - !r, "") })) ? Function("return " + r)() : re.error("Invalid JSON: " + t)
        }, re.parseXML = function(t) { var n, i; if (!t || "string" != typeof t) return null; try { e.DOMParser ? (i = new DOMParser, n = i.parseFromString(t, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t)) } catch (r) { n = void 0 } return n && n.documentElement && !n.getElementsByTagName("parsererror").length || re.error("Invalid XML: " + t), n };
        var It, Pt, Ft = /#.*$/,
            Nt = /([?&])_=[^&]*/,
            Lt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            Vt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            zt = /^(?:GET|HEAD)$/,
            Dt = /^\/\//,
            Bt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            Ht = {},
            Rt = {},
            qt = "*/".concat("*");
        try { Pt = location.href } catch (Wt) { Pt = fe.createElement("a"), Pt.href = "", Pt = Pt.href }
        It = Bt.exec(Pt.toLowerCase()) || [], re.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: { url: Pt, type: "GET", isLocal: Vt.test(It[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": qt, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": re.parseJSON, "text xml": re.parseXML }, flatOptions: { url: !0, context: !0 } },
            ajaxSetup: function(e, t) { return t ? B(B(e, re.ajaxSettings), t) : B(re.ajaxSettings, e) },
            ajaxPrefilter: z(Ht),
            ajaxTransport: z(Rt),
            ajax: function(e, t) {
                function n(e, t, n, i) {
                    var r, c, v, y, w, x = t;
                    2 !== b && (b = 2, a && clearTimeout(a), u = void 0, s = i || "", _.readyState = e > 0 ? 4 : 0, r = e >= 200 && 300 > e || 304 === e, n && (y = H(d, _, n)), y = R(d, y, _, r), r ? (d.ifModified && (w = _.getResponseHeader("Last-Modified"), w && (re.lastModified[o] = w), w = _.getResponseHeader("etag"), w && (re.etag[o] = w)), 204 === e || "HEAD" === d.type ? x = "nocontent" : 304 === e ? x = "notmodified" : (x = y.state, c = y.data, v = y.error, r = !v)) : (v = x, (e || !x) && (x = "error", 0 > e && (e = 0))), _.status = e, _.statusText = (t || x) + "", r ? f.resolveWith(h, [c, x, _]) : f.rejectWith(h, [_, x, v]), _.statusCode(g), g = void 0, l && p.trigger(r ? "ajaxSuccess" : "ajaxError", [_, d, r ? c : v]), m.fireWith(h, [_, x]), l && (p.trigger("ajaxComplete", [_, d]), --re.active || re.event.trigger("ajaxStop")))
                }
                "object" == typeof e && (t = e, e = void 0), t = t || {};
                var i, r, o, s, a, l, u, c, d = re.ajaxSetup({}, t),
                    h = d.context || d,
                    p = d.context && (h.nodeType || h.jquery) ? re(h) : re.event,
                    f = re.Deferred(),
                    m = re.Callbacks("once memory"),
                    g = d.statusCode || {},
                    v = {},
                    y = {},
                    b = 0,
                    w = "canceled",
                    _ = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (2 === b) {
                                if (!c)
                                    for (c = {}; t = Lt.exec(s);) c[t[1].toLowerCase()] = t[2];
                                t = c[e.toLowerCase()]
                            }
                            return null == t ? null : t
                        },
                        getAllResponseHeaders: function() { return 2 === b ? s : null },
                        setRequestHeader: function(e, t) { var n = e.toLowerCase(); return b || (e = y[n] = y[n] || e, v[e] = t), this },
                        overrideMimeType: function(e) { return b || (d.mimeType = e), this },
                        statusCode: function(e) {
                            var t;
                            if (e)
                                if (2 > b)
                                    for (t in e) g[t] = [g[t], e[t]];
                                else _.always(e[_.status]);
                            return this
                        },
                        abort: function(e) { var t = e || w; return u && u.abort(t), n(0, t), this }
                    };
                if (f.promise(_).complete = m.add, _.success = _.done, _.error = _.fail, d.url = ((e || d.url || Pt) + "").replace(Ft, "").replace(Dt, It[1] + "//"), d.type = t.method || t.type || d.method || d.type, d.dataTypes = re.trim(d.dataType || "*").toLowerCase().match(be) || [""], null == d.crossDomain && (i = Bt.exec(d.url.toLowerCase()), d.crossDomain = !(!i || i[1] === It[1] && i[2] === It[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (It[3] || ("http:" === It[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = re.param(d.data, d.traditional)), D(Ht, d, t, _), 2 === b) return _;
                l = re.event && d.global, l && 0 === re.active++ && re.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !zt.test(d.type), o = d.url, d.hasContent || (d.data && (o = d.url += (Mt.test(o) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = Nt.test(o) ? o.replace(Nt, "$1_=" + At++) : o + (Mt.test(o) ? "&" : "?") + "_=" + At++)), d.ifModified && (re.lastModified[o] && _.setRequestHeader("If-Modified-Since", re.lastModified[o]), re.etag[o] && _.setRequestHeader("If-None-Match", re.etag[o])), (d.data && d.hasContent && d.contentType !== !1 || t.contentType) && _.setRequestHeader("Content-Type", d.contentType), _.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + qt + "; q=0.01" : "") : d.accepts["*"]);
                for (r in d.headers) _.setRequestHeader(r, d.headers[r]);
                if (d.beforeSend && (d.beforeSend.call(h, _, d) === !1 || 2 === b)) return _.abort();
                w = "abort";
                for (r in { success: 1, error: 1, complete: 1 }) _[r](d[r]);
                if (u = D(Rt, d, t, _)) {
                    _.readyState = 1, l && p.trigger("ajaxSend", [_, d]), d.async && d.timeout > 0 && (a = setTimeout(function() { _.abort("timeout") }, d.timeout));
                    try { b = 1, u.send(v, n) } catch (x) {
                        if (!(2 > b)) throw x;
                        n(-1, x)
                    }
                } else n(-1, "No Transport");
                return _
            },
            getJSON: function(e, t, n) { return re.get(e, t, n, "json") },
            getScript: function(e, t) { return re.get(e, void 0, t, "script") }
        }), re.each(["get", "post"], function(e, t) { re[t] = function(e, n, i, r) { return re.isFunction(n) && (r = r || i, i = n, n = void 0), re.ajax({ url: e, type: t, dataType: r, data: n, success: i }) } }), re._evalUrl = function(e) { return re.ajax({ url: e, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0 }) }, re.fn.extend({
            wrapAll: function(e) {
                if (re.isFunction(e)) return this.each(function(t) { re(this).wrapAll(e.call(this, t)) });
                if (this[0]) {
                    var t = re(e, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && t.insertBefore(this[0]), t.map(function() { for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild; return e }).append(this)
                }
                return this
            },
            wrapInner: function(e) {
                return re.isFunction(e) ? this.each(function(t) { re(this).wrapInner(e.call(this, t)) }) : this.each(function() {
                    var t = re(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function(e) { var t = re.isFunction(e); return this.each(function(n) { re(this).wrapAll(t ? e.call(this, n) : e) }) },
            unwrap: function() { return this.parent().each(function() { re.nodeName(this, "body") || re(this).replaceWith(this.childNodes) }).end() }
        }), re.expr.filters.hidden = function(e) { return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !ne.reliableHiddenOffsets() && "none" === (e.style && e.style.display || re.css(e, "display")) }, re.expr.filters.visible = function(e) { return !re.expr.filters.hidden(e) };
        var Ut = /%20/g,
            Xt = /\[\]$/,
            Qt = /\r?\n/g,
            Yt = /^(?:submit|button|image|reset|file)$/i,
            Kt = /^(?:input|select|textarea|keygen)/i;
        re.param = function(e, t) {
            var n, i = [],
                r = function(e, t) { t = re.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t) };
            if (void 0 === t && (t = re.ajaxSettings && re.ajaxSettings.traditional), re.isArray(e) || e.jquery && !re.isPlainObject(e)) re.each(e, function() { r(this.name, this.value) });
            else
                for (n in e) q(n, e[n], t, r);
            return i.join("&").replace(Ut, "+")
        }, re.fn.extend({ serialize: function() { return re.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { var e = re.prop(this, "elements"); return e ? re.makeArray(e) : this }).filter(function() { var e = this.type; return this.name && !re(this).is(":disabled") && Kt.test(this.nodeName) && !Yt.test(e) && (this.checked || !Ae.test(e)) }).map(function(e, t) { var n = re(this).val(); return null == n ? null : re.isArray(n) ? re.map(n, function(e) { return { name: t.name, value: e.replace(Qt, "\r\n") } }) : { name: t.name, value: n.replace(Qt, "\r\n") } }).get() } }), re.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function() { return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && W() || U() } : W;
        var Gt = 0,
            Jt = {},
            Zt = re.ajaxSettings.xhr();
        e.attachEvent && e.attachEvent("onunload", function() { for (var e in Jt) Jt[e](void 0, !0) }), ne.cors = !!Zt && "withCredentials" in Zt, Zt = ne.ajax = !!Zt, Zt && re.ajaxTransport(function(e) {
            if (!e.crossDomain || ne.cors) {
                var t;
                return {
                    send: function(n, i) {
                        var r, o = e.xhr(),
                            s = ++Gt;
                        if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                            for (r in e.xhrFields) o[r] = e.xhrFields[r];
                        e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                        for (r in n) void 0 !== n[r] && o.setRequestHeader(r, n[r] + "");
                        o.send(e.hasContent && e.data || null), t = function(n, r) {
                            var a, l, u;
                            if (t && (r || 4 === o.readyState))
                                if (delete Jt[s], t = void 0, o.onreadystatechange = re.noop, r) 4 !== o.readyState && o.abort();
                                else {
                                    u = {}, a = o.status, "string" == typeof o.responseText && (u.text = o.responseText);
                                    try { l = o.statusText } catch (c) { l = "" }
                                    a || !e.isLocal || e.crossDomain ? 1223 === a && (a = 204) : a = u.text ? 200 : 404
                                }
                            u && i(a, l, u, o.getAllResponseHeaders())
                        }, e.async ? 4 === o.readyState ? setTimeout(t) : o.onreadystatechange = Jt[s] = t : t()
                    },
                    abort: function() { t && t(void 0, !0) }
                }
            }
        }), re.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /(?:java|ecma)script/ }, converters: { "text script": function(e) { return re.globalEval(e), e } } }), re.ajaxPrefilter("script", function(e) { void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1) }), re.ajaxTransport("script", function(e) {
            if (e.crossDomain) {
                var t, n = fe.head || re("head")[0] || fe.documentElement;
                return {
                    send: function(i, r) {
                        t = fe.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function(e, n) {
                            (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || r(200, "success"))
                        }, n.insertBefore(t, n.firstChild)
                    },
                    abort: function() { t && t.onload(void 0, !0) }
                }
            }
        });
        var en = [],
            tn = /(=)\?(?=&|$)|\?\?/;
        re.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var e = en.pop() || re.expando + "_" + At++; return this[e] = !0, e } }), re.ajaxPrefilter("json jsonp", function(t, n, i) { var r, o, s, a = t.jsonp !== !1 && (tn.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && tn.test(t.data) && "data"); return a || "jsonp" === t.dataTypes[0] ? (r = t.jsonpCallback = re.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(tn, "$1" + r) : t.jsonp !== !1 && (t.url += (Mt.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function() { return s || re.error(r + " was not called"), s[0] }, t.dataTypes[0] = "json", o = e[r], e[r] = function() { s = arguments }, i.always(function() { e[r] = o, t[r] && (t.jsonpCallback = n.jsonpCallback, en.push(r)), s && re.isFunction(o) && o(s[0]), s = o = void 0 }), "script") : void 0 }), re.parseHTML = function(e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || fe;
            var i = de.exec(e),
                r = !n && [];
            return i ? [t.createElement(i[1])] : (i = re.buildFragment([e], t, r), r && r.length && re(r).remove(), re.merge([], i.childNodes))
        };
        var nn = re.fn.load;
        re.fn.load = function(e, t, n) {
            if ("string" != typeof e && nn) return nn.apply(this, arguments);
            var i, r, o, s = this,
                a = e.indexOf(" ");
            return a >= 0 && (i = re.trim(e.slice(a, e.length)), e = e.slice(0, a)), re.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), s.length > 0 && re.ajax({ url: e, type: o, dataType: "html", data: t }).done(function(e) { r = arguments, s.html(i ? re("<div>").append(re.parseHTML(e)).find(i) : e) }).complete(n && function(e, t) { s.each(n, r || [e.responseText, t, e]) }), this
        }, re.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) { re.fn[t] = function(e) { return this.on(t, e) } }), re.expr.filters.animated = function(e) { return re.grep(re.timers, function(t) { return e === t.elem }).length };
        var rn = e.document.documentElement;
        re.offset = {
            setOffset: function(e, t, n) {
                var i, r, o, s, a, l, u, c = re.css(e, "position"),
                    d = re(e),
                    h = {};
                "static" === c && (e.style.position = "relative"), a = d.offset(), o = re.css(e, "top"), l = re.css(e, "left"), u = ("absolute" === c || "fixed" === c) && re.inArray("auto", [o, l]) > -1, u ? (i = d.position(), s = i.top, r = i.left) : (s = parseFloat(o) || 0, r = parseFloat(l) || 0), re.isFunction(t) && (t = t.call(e, n, a)), null != t.top && (h.top = t.top - a.top + s), null != t.left && (h.left = t.left - a.left + r), "using" in t ? t.using.call(e, h) : d.css(h)
            }
        }, re.fn.extend({
            offset: function(e) {
                if (arguments.length) return void 0 === e ? this : this.each(function(t) { re.offset.setOffset(this, e, t) });
                var t, n, i = { top: 0, left: 0 },
                    r = this[0],
                    o = r && r.ownerDocument;
                if (o) return t = o.documentElement, re.contains(t, r) ? (typeof r.getBoundingClientRect !== Ce && (i = r.getBoundingClientRect()), n = X(o), { top: i.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0), left: i.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0) }) : i
            },
            position: function() {
                if (this[0]) {
                    var e, t, n = { top: 0, left: 0 },
                        i = this[0];
                    return "fixed" === re.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), re.nodeName(e[0], "html") || (n = e.offset()), n.top += re.css(e[0], "borderTopWidth", !0), n.left += re.css(e[0], "borderLeftWidth", !0)), { top: t.top - n.top - re.css(i, "marginTop", !0), left: t.left - n.left - re.css(i, "marginLeft", !0) }
                }
            },
            offsetParent: function() { return this.map(function() { for (var e = this.offsetParent || rn; e && !re.nodeName(e, "html") && "static" === re.css(e, "position");) e = e.offsetParent; return e || rn }) }
        }), re.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(e, t) {
            var n = /Y/.test(t);
            re.fn[e] = function(i) { return je(this, function(e, i, r) { var o = X(e); return void 0 === r ? o ? t in o ? o[t] : o.document.documentElement[i] : e[i] : void(o ? o.scrollTo(n ? re(o).scrollLeft() : r, n ? r : re(o).scrollTop()) : e[i] = r) }, e, i, arguments.length, null) }
        }), re.each(["top", "left"], function(e, t) { re.cssHooks[t] = E(ne.pixelPosition, function(e, n) { return n ? (n = tt(e, t), it.test(n) ? re(e).position()[t] + "px" : n) : void 0 }) }), re.each({ Height: "height", Width: "width" }, function(e, t) {
            re.each({ padding: "inner" + e, content: t, "": "outer" + e }, function(n, i) {
                re.fn[i] = function(i, r) {
                    var o = arguments.length && (n || "boolean" != typeof i),
                        s = n || (i === !0 || r === !0 ? "margin" : "border");
                    return je(this, function(t, n, i) { var r; return re.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === i ? re.css(t, n, s) : re.style(t, n, i, s) }, t, o ? i : void 0, o, null)
                }
            })
        }), re.fn.size = function() { return this.length }, re.fn.andSelf = re.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() { return re });
        var on = e.jQuery,
            sn = e.$;
        return re.noConflict = function(t) { return e.$ === re && (e.$ = sn), t && e.jQuery === re && (e.jQuery = on), re }, typeof t === Ce && (e.jQuery = e.$ = re), re
    }),
    function() {
        var e, t, n, i, r, o, s, a, l, u;
        t = window.device, e = {}, window.device = e, i = window.document.documentElement, u = window.navigator.userAgent.toLowerCase(), e.ios = function() { return e.iphone() || e.ipod() || e.ipad() }, e.iphone = function() { return !e.windows() && r("iphone") }, e.ipod = function() { return r("ipod") }, e.ipad = function() { return r("ipad") }, e.android = function() { return !e.windows() && r("android") }, e.androidPhone = function() { return e.android() && r("mobile") }, e.androidTablet = function() { return e.android() && !r("mobile") }, e.blackberry = function() { return r("blackberry") || r("bb10") || r("rim") }, e.blackberryPhone = function() { return e.blackberry() && !r("tablet") }, e.blackberryTablet = function() { return e.blackberry() && r("tablet") }, e.windows = function() { return r("windows") }, e.windowsPhone = function() { return e.windows() && r("phone") }, e.windowsTablet = function() { return e.windows() && r("touch") && !e.windowsPhone() }, e.fxos = function() { return (r("(mobile;") || r("(tablet;")) && r("; rv:") }, e.fxosPhone = function() { return e.fxos() && r("mobile") }, e.fxosTablet = function() { return e.fxos() && r("tablet") }, e.meego = function() { return r("meego") }, e.cordova = function() { return window.cordova && "file:" === location.protocol }, e.nodeWebkit = function() { return "object" == typeof window.process }, e.mobile = function() { return e.androidPhone() || e.iphone() || e.ipod() || e.windowsPhone() || e.blackberryPhone() || e.fxosPhone() || e.meego() }, e.tablet = function() { return e.ipad() || e.androidTablet() || e.blackberryTablet() || e.windowsTablet() || e.fxosTablet() }, e.desktop = function() { return !e.tablet() && !e.mobile() }, e.television = function() {
            var e;
            for (television = ["googletv", "viera", "smarttv", "internet.tv", "netcast", "nettv", "appletv", "boxee", "kylo", "roku", "dlnadoc", "roku", "pov_tv", "hbbtv", "ce-html"], e = 0; e < television.length;) {
                if (r(television[e])) return !0;
                e++
            }
            return !1
        }, e.portrait = function() { return window.innerHeight / window.innerWidth > 1 }, e.landscape = function() { return window.innerHeight / window.innerWidth < 1 }, e.noConflict = function() { return window.device = t, this }, r = function(e) { return -1 !== u.indexOf(e) }, s = function(e) { var t; return t = new RegExp(e, "i"), i.className.match(t) }, n = function(e) {
            var t = null;
            s(e) || (t = i.className.replace(/^\s+|\s+$/g, ""), i.className = t + " " + e)
        }, l = function(e) { s(e) && (i.className = i.className.replace(" " + e, "")) }, e.ios() ? e.ipad() ? n("ios ipad tablet") : e.iphone() ? n("ios iphone mobile") : e.ipod() && n("ios ipod mobile") : e.android() ? n(e.androidTablet() ? "android tablet" : "android mobile") : e.blackberry() ? n(e.blackberryTablet() ? "blackberry tablet" : "blackberry mobile") : e.windows() ? n(e.windowsTablet() ? "windows tablet" : e.windowsPhone() ? "windows mobile" : "desktop") : e.fxos() ? n(e.fxosTablet() ? "fxos tablet" : "fxos mobile") : e.meego() ? n("meego mobile") : e.nodeWebkit() ? n("node-webkit") : e.television() ? n("television") : e.desktop() && n("desktop"), e.cordova() && n("cordova"), o = function() { e.landscape() ? (l("portrait"), n("landscape")) : (l("landscape"), n("portrait")) }, a = Object.prototype.hasOwnProperty.call(window, "onorientationchange") ? "orientationchange" : "resize", window.addEventListener ? window.addEventListener(a, o, !1) : window.attachEvent ? window.attachEvent(a, o) : window[a] = o, o(), "function" == typeof define && "object" == typeof define.amd && define.amd ? define("device", [], function() { return e }) : "undefined" != typeof module && module.exports ? module.exports = e : window.device = e
    }.call(this),
        function() {
            var e = [].slice,
                t = {}.hasOwnProperty;
            define("base", ["jquery", "device"], function(n, i) {
                var r;
                return r = function() {
                    function r(e) { this.setOptions(e), this.detectMouseOrTouchHandler() }
                    var o;
                    return r.prototype.defaults = { $window: n(window), $document: n(document), $html: n("html"), $body: n("body") }, r.prototype.setOptions = function(e) { return this.options = o({}, this.defaults, e), this }, r.prototype.on = function(e, t) { var n; return null == this._events && (this._events = {}), (null != (n = this._events)[e] ? n[e] : n[e] = []).push(t), this }, r.prototype.off = function(e, t) { var n, i, r, o, s; for (s = this._events[e], n = r = 0, o = s.length; o > r; n = ++r) i = s[n], i === t && this._events[e].splice(n, 1); return this }, r.prototype.trigger = function() { var t, n, i, r, o, s; if (n = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : [], null == this._events[n]) return this; for (s = this._events[n], r = 0, o = s.length; o > r; r++) i = s[r], i.apply(this, t); return this }, r.include = function() { var t; return t = 1 <= arguments.length ? e.call(arguments, 0) : [], o.apply(null, [this.prototype].concat(e.call(t))), this }, o = function() { var n, i, r, o, s, a; for (o = arguments[0], i = 2 <= arguments.length ? e.call(arguments, 1) : [], s = 0, a = i.length; a > s; s++) { n = i[s]; for (r in n) t.call(n, r) && (o[r] = n[r]) } return o }, r.prototype.detectMouseOrTouchHandler = function() { return this.options.event = i.mobile() || i.tablet() ? "touchstart" : "click" }, r
                }()
            })
        }.call(this),
        function() {
            "use strict";

            function e(e) { return e = String(e), e.charAt(0).toUpperCase() + e.slice(1) }

            function t(e, t) {
                var n = -1,
                    r = e ? e.length : 0;
                if ("number" == typeof r && r > -1 && g >= r)
                    for (; ++n < r;) t(e[n], n, e);
                else i(e, t)
            }

            function n(t) { return t = l(t), /^(?:webOS|i(?:OS|P))/.test(t) ? t : e(t) }

            function i(e, t) { for (var n in e) w.call(e, n) && t(e[n], n, e) }

            function r(t) { return null == t ? e(t) : _.call(t).slice(8, -1) }

            function o(e, t) { var n = null != e ? typeof e[t] : "number"; return !/^(?:boolean|number|string|undefined)$/.test(n) && ("object" == n ? !!e[t] : !0) }

            function s(e) { return String(e).replace(/([ -])(?!$)/g, "$1?") }

            function a(e, n) { var i = null; return t(e, function(t, r) { i = n(i, t, r, e) }), i }

            function l(e) { return String(e).replace(/^ +| +$/g, "") }

            function u(e) {
                function t(t) { return a(t, function(t, n) { return t || RegExp("\\b" + (n.pattern || s(n)) + "\\b", "i").exec(e) && (n.label || n) }) }

                function c(t) { return a(t, function(t, n, i) { return t || (n[Q] || n[/^[a-z]+(?: +[a-z]+\b)*/i.exec(Q)] || RegExp("\\b" + s(i) + "(?:\\b|\\w*\\d)", "i").exec(e)) && i }) }

                function p(t) { return a(t, function(t, n) { return t || RegExp("\\b" + (n.pattern || s(n)) + "\\b", "i").exec(e) && (n.label || n) }) }

                function f(t) { return a(t, function(t, i) { var r = i.pattern || s(i); return !t && (t = RegExp("\\b" + r + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(e)) && (k = { 6.3: "8.1", 6.2: "8", 6.1: "Server 2008 R2 / 7", "6.0": "Server 2008 / Vista", 5.2: "Server 2003 / XP 64-bit", 5.1: "XP", 5.01: "2000 SP1", "5.0": "2000", "4.0": "NT", "4.90": "ME" }, /^Win/i.test(t) && (k = k[/[\d.]+$/.exec(t)]) && (t = "Windows " + k, E = "Server 2008 R2 / 7" == k), t = n(String(t).replace(RegExp(r, "i"), i.label || i).replace(/ ce$/i, " CE").replace(/hpw/i, "web").replace(/Macintosh/, "Mac OS").replace(/_PowerPC/i, " OS").replace(/(OS X) [^ \d]+/i, "$1").replace(/Mac (OS X)/, "$1").replace(/\/(\d)/, " $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "").replace(/x86\.64/gi, "x86_64").replace(/(Windows Phone)(?! OS)/, "$1 OS").split(" on ")[0])), t }) }

                function m(t) { return a(t, function(t, i) { var r = i.pattern || s(i); return !t && (t = RegExp("\\b" + r + " *\\d+[.\\w_]*", "i").exec(e) || RegExp("\\b" + r + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)", "i").exec(e)) && ((t = String(i.label && !RegExp(r, "i").test(i.label) ? i.label : t).split("/"))[1] && !/[\d.]+/.test(t[0]) && (t[0] += " " + t[1]), i = i.label || i, t = n(t[0].replace(RegExp(r, "i"), i).replace(RegExp("; *(?:" + i + "[_-])?", "i"), " ").replace(RegExp("(" + i + ")[-_.]?(\\w)", "i"), "$1 $2"))), t }) }

                function g(t) { return a(t, function(t, n) { return t || (RegExp(n + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(e) || 0)[1] || null }) }

                function b() { return this.description || "" }
                var w = d,
                    x = e && "object" == typeof e && "String" != r(e);
                x && (w = e, e = null);
                var C = w.navigator || {},
                    T = C.userAgent || "";
                e || (e = T);
                var k, E, S = x || y == h,
                    $ = x ? !!C.likeChrome : /\bChrome\b/.test(e) && !/internal|\n/i.test(_.toString()),
                    j = "Object",
                    A = x ? j : "ScriptBridgingProxyObject",
                    M = x ? j : "Environment",
                    O = x && w.java ? "JavaPackage" : r(w.java),
                    I = x ? j : "RuntimeObject",
                    P = /Java/.test(O) && w.java,
                    F = P && r(w.environment) == M,
                    N = P ? "a" : "α",
                    L = P ? "b" : "β",
                    V = w.document || {},
                    z = w.operamini || w.opera,
                    D = v.test(D = x && z ? z["[[Class]]"] : r(z)) ? D : z = null,
                    B = e,
                    H = [],
                    R = null,
                    q = e == T,
                    W = q && z && "function" == typeof z.version && z.version(),
                    U = t([{ label: "WebKit", pattern: "AppleWebKit" }, "iCab", "Presto", "NetFront", "Tasman", "Trident", "KHTML", "Gecko"]),
                    X = p(["Adobe AIR", "Arora", "Avant Browser", "Camino", "Epiphany", "Fennec", "Flock", "Galeon", "GreenBrowser", "iCab", "Iceweasel", { label: "SRWare Iron", pattern: "Iron" }, "K-Meleon", "Konqueror", "Lunascape", "Maxthon", "Midori", "Nook Browser", "PhantomJS", "Raven", "Rekonq", "RockMelt", "SeaMonkey", { label: "Silk", pattern: "(?:Cloud9|Silk-Accelerated)" }, "Sleipnir", "SlimBrowser", "Sunrise", "Swiftfox", "WebPositive", "Opera Mini", "Opera", { label: "Opera", pattern: "OPR" }, "Chrome", { label: "Chrome Mobile", pattern: "(?:CriOS|CrMo)" }, { label: "Firefox", pattern: "(?:Firefox|Minefield)" }, { label: "IE", pattern: "MSIE" }, "Safari"]),
                    Q = m([{ label: "BlackBerry", pattern: "BB10" }, "BlackBerry", { label: "Galaxy S", pattern: "GT-I9000" }, { label: "Galaxy S2", pattern: "GT-I9100" }, { label: "Galaxy S3", pattern: "GT-I9300" }, { label: "Galaxy S4", pattern: "GT-I9500" }, "Google TV", "iPad", "iPod", "iPhone", "Kindle", { label: "Kindle Fire", pattern: "(?:Cloud9|Silk-Accelerated)" }, "Nook", "PlayBook", "PlayStation 4", "PlayStation 3", "PlayStation Vita", "TouchPad", "Transformer", { label: "Wii U", pattern: "WiiU" }, "Wii", "Xbox One", { label: "Xbox 360", pattern: "Xbox" }, "Xoom"]),
                    Y = c({ Apple: { iPad: 1, iPhone: 1, iPod: 1 }, Amazon: { Kindle: 1, "Kindle Fire": 1 }, Asus: { Transformer: 1 }, "Barnes & Noble": { Nook: 1 }, BlackBerry: { PlayBook: 1 }, Google: { "Google TV": 1 }, HP: { TouchPad: 1 }, HTC: {}, LG: {}, Microsoft: { Xbox: 1, "Xbox One": 1 }, Motorola: { Xoom: 1 }, Nintendo: { "Wii U": 1, Wii: 1 }, Nokia: {}, Samsung: { "Galaxy S": 1, "Galaxy S2": 1, "Galaxy S3": 1, "Galaxy S4": 1 }, Sony: { "PlayStation 4": 1, "PlayStation 3": 1, "PlayStation Vita": 1 } }),
                    K = f(["Android", "CentOS", "Debian", "Fedora", "FreeBSD", "Gentoo", "Haiku", "Kubuntu", "Linux Mint", "Red Hat", "SuSE", "Ubuntu", "Xubuntu", "Cygwin", "Symbian OS", "hpwOS", "webOS ", "webOS", "Tablet OS", "Linux", "Mac OS X", "Macintosh", "Mac", "Windows 98;", "Windows "]);
                if (U && (U = [U]), Y && !Q && (Q = m([Y])), (k = /Google TV/.exec(Q)) && (Q = k[0]), /\bSimulator\b/i.test(e) && (Q = (Q ? Q + " " : "") + "Simulator"), /^iP/.test(Q) ? (X || (X = "Safari"), K = "iOS" + ((k = / OS ([\d_]+)/i.exec(e)) ? " " + k[1].replace(/_/g, ".") : "")) : "Konqueror" != X || /buntu/i.test(K) ? Y && "Google" != Y && (/Chrome/.test(X) && !/Mobile Safari/.test(e) || /Vita/.test(Q)) ? (X = "Android Browser", K = /Android/.test(K) ? K : "Android") : (!X || (k = !/\bMinefield\b|\(Android;/i.test(e) && /Firefox|Safari/.exec(X))) && (X && !Q && /[\/,]|^[^(]+?\)/.test(e.slice(e.indexOf(k + "/") + 8)) && (X = null), (k = Q || Y || K) && (Q || Y || /Android|Symbian OS|Tablet OS|webOS/.test(K)) && (X = /[a-z]+(?: Hat)?/i.exec(/Android/.test(K) ? K : k) + " Browser")) : K = "Kubuntu", (k = /\((Mobile|Tablet).*?Firefox/i.exec(e)) && k[1] && (K = "Firefox OS", Q || (Q = k[1])), W || (W = g(["(?:Cloud9|CriOS|CrMo|Iron|Opera ?Mini|OPR|Raven|Silk(?!/[\\d.]+$))", "Version", s(X), "(?:Firefox|Minefield|NetFront)"])), "iCab" == U && parseFloat(W) > 3 ? U = ["WebKit"] : (k = /Opera/.test(X) && (/OPR/.test(e) ? "Blink" : "Presto") || /\b(?:Midori|Nook|Safari)\b/i.test(e) && "WebKit" || !U && /\bMSIE\b/i.test(e) && ("Mac OS" == K ? "Tasman" : "Trident")) ? U = [k] : /PlayStation(?! Vita)/i.test(X) && "WebKit" == U && (U = ["NetFront"]), "IE" != X && "Trident" == U && (k = /\brv:([\d.]+)/.exec(e)) && (X && H.push("identifying as " + X + (W ? " " + W : "")), X = "IE", W = k[1]), q) {
                    if (o(w, "global"))
                        if (P && (k = P.lang.System, B = k.getProperty("os.arch"), K = K || k.getProperty("os.name") + " " + k.getProperty("os.version")), S && o(w, "system") && (k = [w.system])[0]) { K || (K = k[0].os || null); try { k[1] = w.require("ringo/engine").version, W = k[1].join("."), X = "RingoJS" } catch (G) { k[0].global.system == w.system && (X = "Narwhal") } } else "object" == typeof w.process && (k = w.process) ? (X = "Node.js", B = k.arch, K = k.platform, W = /[\d.]+/.exec(k.version)[0]) : F && (X = "Rhino");
                    else r(k = w.runtime) == A ? (X = "Adobe AIR", K = k.flash.system.Capabilities.os) : r(k = w.phantom) == I ? (X = "PhantomJS", W = (k = k.version || null) && k.major + "." + k.minor + "." + k.patch) : "number" == typeof V.documentMode && (k = /\bTrident\/(\d+)/i.exec(e)) && (W = [W, V.documentMode], (k = +k[1] + 4) != W[1] && (H.push("IE " + W[1] + " mode"), U && (U[1] = ""), W[1] = k), W = "IE" == X ? String(W[1].toFixed(1)) : W[0]);
                    K = K && n(K)
                }
                W && (k = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(W) || /(?:alpha|beta)(?: ?\d)?/i.exec(e + ";" + (q && C.appMinorVersion)) || /\bMinefield\b/i.test(e) && "a") && (R = /b/i.test(k) ? "beta" : "alpha", W = W.replace(RegExp(k + "\\+?$"), "") + ("beta" == R ? L : N) + (/\d+\+?/.exec(k) || "")), "Fennec" == X || "Firefox" == X && /Android|Firefox OS/.test(K) ? X = "Firefox Mobile" : "Maxthon" == X && W ? W = W.replace(/\.[\d.]+/, ".x") : "Silk" == X ? (/Mobi/i.test(e) || (K = "Android", H.unshift("desktop mode")), /Accelerated *= *true/i.test(e) && H.unshift("accelerated")) : "IE" == X && (k = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(e) || 0)[1]) ? (X += " Mobile", K = "Windows Phone OS " + k + ".x", H.unshift("desktop mode")) : /Xbox/i.test(Q) ? (K = null, "Xbox 360" == Q && /IEMobile/.test(e) && H.unshift("mobile mode")) : "Chrome" != X && "IE" != X && (!X || Q || /Browser|Mobi/.test(X)) || "Windows CE" != K && !/Mobi/i.test(e) ? "IE" == X && q && null === w.external ? H.unshift("platform preview") : (/BlackBerry/.test(Q) || /BB10/.test(e)) && (k = (RegExp(Q.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(e) || 0)[1] || W) ? (k = [k, /BB10/.test(e)], K = (k[1] ? (Q = null, Y = "BlackBerry") : "Device Software") + " " + k[0], W = null) : this != i && "Wii" != Q && (q && z || /Opera/.test(X) && /\b(?:MSIE|Firefox)\b/i.test(e) || "Firefox" == X && /OS X (?:\d+\.){2,}/.test(K) || "IE" == X && (K && !/^Win/.test(K) && W > 5.5 || /Windows XP/.test(K) && W > 8 || 8 == W && !/Trident/.test(e))) && !v.test(k = u.call(i, e.replace(v, "") + ";")) && k.name && (k = "ing as " + k.name + ((k = k.version) ? " " + k : ""), v.test(X) ? (/IE/.test(k) && "Mac OS" == K && (K = null), k = "identify" + k) : (k = "mask" + k, X = D ? n(D.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera", /IE/.test(k) && (K = null), q || (W = null)), U = ["Presto"], H.push(k)) : X += " Mobile", (k = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(e) || 0)[1]) && (k = [parseFloat(k.replace(/\.(\d)$/, ".0$1")), k], "Safari" == X && "+" == k[1].slice(-1) ? (X = "WebKit Nightly", R = "alpha", W = k[1].slice(0, -1)) : (W == k[1] || W == (k[2] = (/\bSafari\/([\d.]+\+?)/i.exec(e) || 0)[1])) && (W = null), k[1] = (/\bChrome\/([\d.]+)/i.exec(e) || 0)[1], 537.36 == k[0] && 537.36 == k[2] && parseFloat(k[1]) >= 28 && (U = ["Blink"]), q && ($ || k[1]) ? (U && (U[1] = "like Chrome"), k = k[1] || (k = k[0], 530 > k ? 1 : 532 > k ? 2 : 532.05 > k ? 3 : 533 > k ? 4 : 534.03 > k ? 5 : 534.07 > k ? 6 : 534.1 > k ? 7 : 534.13 > k ? 8 : 534.16 > k ? 9 : 534.24 > k ? 10 : 534.3 > k ? 11 : 535.01 > k ? 12 : 535.02 > k ? "13+" : 535.07 > k ? 15 : 535.11 > k ? 16 : 535.19 > k ? 17 : 536.05 > k ? 18 : 536.1 > k ? 19 : 537.01 > k ? 20 : 537.11 > k ? "21+" : 537.13 > k ? 23 : 537.18 > k ? 24 : 537.24 > k ? 25 : 537.36 > k ? 26 : "Blink" != U ? "27" : "28")) : (U && (U[1] = "like Safari"), k = k[0], k = 400 > k ? 1 : 500 > k ? 2 : 526 > k ? 3 : 533 > k ? 4 : 534 > k ? "4+" : 535 > k ? 5 : 537 > k ? 6 : 538 > k ? 7 : "7"), U && (U[1] += " " + (k += "number" == typeof k ? ".x" : /[.+]/.test(k) ? "" : "+")), "Safari" == X && (!W || parseInt(W) > 45) && (W = k)), "Opera" == X && (k = /(?:zbov|zvav)$/.exec(K)) ? (X += " ", H.unshift("desktop mode"), "zvav" == k ? (X += "Mini", W = null) : X += "Mobile") : "Safari" == X && /Chrome/.exec(U && U[1]) && (H.unshift("desktop mode"), X = "Chrome Mobile", W = null, /OS X/.test(K) ? (Y = "Apple", K = "iOS 4.3+") : K = null), W && 0 == W.indexOf(k = /[\d.]+$/.exec(K)) && e.indexOf("/" + k + "-") > -1 && (K = l(K.replace(k, ""))), U && !/Avant|Nook/.test(X) && (/Browser|Lunascape|Maxthon/.test(X) || /^(?:Adobe|Arora|Midori|Phantom|Rekonq|Rock|Sleipnir|Web)/.test(X) && U[1]) && (k = U[U.length - 1]) && H.push(k), H.length && (H = ["(" + H.join("; ") + ")"]), Y && Q && Q.indexOf(Y) < 0 && H.push("on " + Y), Q && H.push((/^on /.test(H[H.length - 1]) ? "" : "on ") + Q), K && (k = / ([\d.+]+)$/.exec(K), K = { architecture: 32, family: k && !E ? K.replace(k[0], "") : K, version: k ? k[1] : null, toString: function() { var e = this.version; return this.family + (e && !E ? " " + e : "") + (64 == this.architecture ? " 64-bit" : "") } }), (k = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(B)) && !/\bi686\b/i.test(B) && (K && (K.architecture = 64, K.family = K.family.replace(RegExp(" *" + k), "")), X && (/WOW64/i.test(e) || q && /\w(?:86|32)$/.test(C.cpuClass || C.platform)) && H.unshift("32-bit")), e || (e = null);
                var J = {};
                return J.description = e, J.layout = U && U[0], J.manufacturer = Y, J.name = X, J.prerelease = R, J.product = Q, J.ua = e, J.version = X && W, J.os = K || { architecture: null, family: null, version: null, toString: function() { return "null" } }, J.parse = u, J.toString = b, J.version && H.unshift(W), J.name && H.unshift(X), K && X && (K != String(K).split(" ")[0] || K != X.split(" ")[0] && !Q) && H.push(Q ? "(" + K + ")" : "on " + K), H.length && (J.description = H.join(" ")), J
            }
            var c = { "function": !0, object: !0 },
                d = c[typeof window] && window || this,
                h = d,
                p = c[typeof exports] && exports,
                f = c[typeof module] && module && !module.nodeType && module,
                m = p && f && "object" == typeof global && global;
            !m || m.global !== m && m.window !== m && m.self !== m || (d = m);
            var g = Math.pow(2, 53) - 1,
                v = /Opera/,
                y = this,
                b = Object.prototype,
                w = b.hasOwnProperty,
                _ = b.toString;
            "function" == typeof define && "object" == typeof define.amd && define.amd ? define("platform", [], function() { return u() }) : p && f ? i(u(), function(e, t) { p[t] = e }) : d.platform = u()
        }.call(this), define("domready", [], function() {
            "use strict";

            function e(e) { var t; for (t = 0; t < e.length; t += 1) e[t](u) }

            function t() {
                var t = c;
                l && t.length && (c = [], e(t))
            }

            function n() { l || (l = !0, s && clearInterval(s), t()) }

            function i(e) { return l ? e(u) : c.push(e), i }
            var r, o, s, a = "undefined" != typeof window && window.document,
                l = !a,
                u = a ? document : null,
                c = [];
            if (a) {
                if (document.addEventListener) document.addEventListener("DOMContentLoaded", n, !1), window.addEventListener("load", n, !1);
                else if (window.attachEvent) {
                    window.attachEvent("onload", n), o = document.createElement("div");
                    try { r = null === window.frameElement } catch (d) {}
                    o.doScroll && r && window.external && (s = setInterval(function() { try { o.doScroll(), n() } catch (e) {} }, 30))
                }
                "complete" === document.readyState && n()
            }
            return i.version = "2.0.1", i.load = function(e, t, n, r) { r.isBuild ? n(null) : i(n) }, i
        }),
        function(e) {
            define("shadowbox", [], function() {
                return function() {
                    return function(e, t) {
                        function n() {
                            for (var e, t, n, i, r, o, s, a, l = q.errorInfo, u = q.plugins, c = 0; c < q.gallery.length; ++c) {
                                switch (e = q.gallery[c], t = !1, n = null, e.player) {
                                    case "flv":
                                    case "swf":
                                        u.fla || (n = "fla");
                                        break;
                                    case "qt":
                                        u.qt || (n = "qt");
                                        break;
                                    case "wmp":
                                        q.isMac ? u.qt && u.f4m ? e.player = "qt" : n = "qtf4m" : u.wmp || (n = "wmp");
                                        break;
                                    case "qtwmp":
                                        u.qt ? e.player = "qt" : u.wmp ? e.player = "wmp" : n = "qtwmp"
                                }
                                if (n)
                                    if ("link" == q.options.handleUnsupported) {
                                        switch (n) {
                                            case "qtf4m":
                                                r = "shared", o = [l.qt.url, l.qt.name, l.f4m.url, l.f4m.name];
                                                break;
                                            case "qtwmp":
                                                r = "either", o = [l.qt.url, l.qt.name, l.wmp.url, l.wmp.name];
                                                break;
                                            default:
                                                r = "single", o = [l[n].url, l[n].name]
                                        }
                                        e.player = "html", e.content = '<div class="sb-message">' + h(q.lang.errors[r], o) + "</div>"
                                    } else t = !0;
                                else "inline" == e.player ? (i = Q.exec(e.content), i ? (s = f(i[1]), s ? e.content = s.innerHTML : t = !0) : t = !0) : ("swf" == e.player || "flv" == e.player) && (a = e.options && e.options.flashVersion || q.options.flashVersion, q.flash && !q.flash.hasFlashPlayerVersion(a) && (e.width = 310, e.height = 177));
                                t && (q.gallery.splice(c, 1), c < q.current ? --q.current : c == q.current && (q.current = c > 0 ? c - 1 : c), --c)
                            }
                        }

                        function i(e) { q.options.enableKeys && (e ? w : _)(document, "keydown", r) }

                        function r(e) {
                            if (!(e.metaKey || e.shiftKey || e.altKey || e.ctrlKey)) {
                                var t, n = b(e);
                                switch (n) {
                                    case 81:
                                    case 88:
                                    case 27:
                                        t = q.close;
                                        break;
                                    case 37:
                                        t = q.previous;
                                        break;
                                    case 39:
                                        t = q.next;
                                        break;
                                    case 32:
                                        t = "number" == typeof X ? q.pause : q.play
                                }
                                t && (y(e), t())
                            }
                        }

                        function o(e) {
                            i(!1);
                            var t = q.getCurrent(),
                                n = "inline" == t.player ? "html" : t.player;
                            if ("function" != typeof q[n]) throw "unknown player " + n;
                            if (e && (q.player.remove(), q.revertOptions(), q.applyOptions(t.options || {})), q.player = new q[n](t, q.playerId), q.gallery.length > 1) {
                                var r = q.gallery[q.current + 1] || q.gallery[0];
                                if ("img" == r.player) {
                                    var o = new Image;
                                    o.src = r.content
                                }
                                var a = q.gallery[q.current - 1] || q.gallery[q.gallery.length - 1];
                                if ("img" == a.player) {
                                    var l = new Image;
                                    l.src = a.content
                                }
                            }
                            q.skin.onLoad(e, s)
                        }

                        function s() {
                            if (Z)
                                if ("undefined" != typeof q.player.ready) var e = setInterval(function() { Z ? q.player.ready && (clearInterval(e), e = null, q.skin.onReady(a)) : (clearInterval(e), e = null) }, 10);
                                else q.skin.onReady(a)
                        }

                        function a() { Z && (q.player.append(q.skin.body, q.dimensions), q.skin.onShow(l)) }

                        function l() { Z && (q.player.onLoad && q.player.onLoad(), q.options.onFinish(q.getCurrent()), q.isPaused() || q.play(), i(!0)) }

                        function u() { return (new Date).getTime() }

                        function c(e, t) { for (var n in t) e[n] = t[n]; return e }

                        function d(e, t) { for (var n = 0, i = e.length, r = e[0]; i > n && t.call(r, n, r) !== !1; r = e[++n]); }

                        function h(e, t) { return e.replace(/\{(\w+?)\}/g, function(e, n) { return t[n] }) }

                        function p() {}

                        function f(e) { return document.getElementById(e) }

                        function m(e) { e.parentNode.removeChild(e) }

                        function g() {
                            var e = document.body,
                                t = document.createElement("div");
                            ie = "string" == typeof t.style.opacity, t.style.position = "fixed", t.style.margin = 0, t.style.top = "20px", e.appendChild(t, e.firstChild), re = 20 == t.offsetTop, e.removeChild(t)
                        }

                        function v(e) {
                            var t = e.pageX || e.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft),
                                n = e.pageY || e.clientY + (document.documentElement.scrollTop || document.body.scrollTop);
                            return [t, n]
                        }

                        function y(e) { e.preventDefault() }

                        function b(e) { return e.which ? e.which : e.keyCode }

                        function w(t, n, i) {
                            if (t.addEventListener) t.addEventListener(n, i, !1);
                            else {
                                if (3 === t.nodeType || 8 === t.nodeType) return;
                                t.setInterval && t !== e && !t.frameElement && (t = e), i.__guid || (i.__guid = w.guid++), t.events || (t.events = {});
                                var r = t.events[n];
                                r || (r = t.events[n] = {}, t["on" + n] && (r[0] = t["on" + n])), r[i.__guid] = i, t["on" + n] = w.handleEvent
                            }
                        }

                        function _(e, t, n) { e.removeEventListener ? e.removeEventListener(t, n, !1) : e.events && e.events[t] && delete e.events[t][n.__guid] }

                        function x() {
                            if (!se) {
                                try { document.documentElement.doScroll("left") } catch (e) { return void setTimeout(x, 1) }
                                q.load()
                            }
                        }

                        function C() {
                            if ("complete" === document.readyState) return q.load();
                            if (document.addEventListener) document.addEventListener("DOMContentLoaded", oe, !1), e.addEventListener("load", q.load, !1);
                            else if (document.attachEvent) {
                                document.attachEvent("onreadystatechange", oe), e.attachEvent("onload", q.load);
                                var t = !1;
                                try { t = null === e.frameElement } catch (n) {}
                                document.documentElement.doScroll && t && x()
                            }
                        }

                        function T(e) { q.open(this), q.gallery.length && y(e) }

                        function k() { fe = { x: 0, y: 0, startX: null, startY: null } }

                        function E() {
                            var e = q.dimensions;
                            c(me.style, { height: e.innerHeight + "px", width: e.innerWidth + "px" })
                        }

                        function S() {
                            k();
                            var e = ["position:absolute", "cursor:" + (q.isGecko ? "-moz-grab" : "move"), "background-color:" + (q.isIE ? "#fff;filter:alpha(opacity=0)" : "transparent")].join(";");
                            q.appendHTML(q.skin.body, '<div id="' + ve + '" style="' + e + '"></div>'), me = f(ve), E(), w(me, "mousedown", j)
                        }

                        function $() { me && (_(me, "mousedown", j), m(me), me = null), ge = null }

                        function j(e) {
                            y(e);
                            var t = v(e);
                            fe.startX = t[0], fe.startY = t[1], ge = f(q.player.id), w(document, "mousemove", A), w(document, "mouseup", M), q.isGecko && (me.style.cursor = "-moz-grabbing")
                        }

                        function A(e) {
                            var t = q.player,
                                n = q.dimensions,
                                i = v(e),
                                r = i[0] - fe.startX;
                            fe.startX += r, fe.x = Math.max(Math.min(0, fe.x + r), n.innerWidth - t.width);
                            var o = i[1] - fe.startY;
                            fe.startY += o, fe.y = Math.max(Math.min(0, fe.y + o), n.innerHeight - t.height), c(ge.style, { left: fe.x + "px", top: fe.y + "px" })
                        }

                        function M() { _(document, "mousemove", A), _(document, "mouseup", M), q.isGecko && (me.style.cursor = "-moz-grab") }

                        function O(e, t, n, i, r) {
                            var o = "opacity" == t,
                                s = o ? q.setOpacity : function(e, n) { e.style[t] = "" + n + "px" };
                            if (0 == i || !o && !q.options.animate || o && !q.options.animateFade) return s(e, n), void(r && r());
                            var a = parseFloat(q.getStyle(e, t)) || 0,
                                l = n - a;
                            if (0 == l) return void(r && r());
                            i *= 1e3;
                            var c, d = u(),
                                h = q.ease,
                                p = d + i,
                                f = setInterval(function() { c = u(), c >= p ? (clearInterval(f), f = null, s(e, n), r && r()) : s(e, a + h((c - d) / i) * l) }, 10)
                        }

                        function I() { ye.style.height = q.getWindowSize("Height") + "px", ye.style.width = q.getWindowSize("Width") + "px" }

                        function P() { ye.style.top = document.documentElement.scrollTop + "px", ye.style.left = document.documentElement.scrollLeft + "px" }

                        function F(e) { e ? d(xe, function(e, t) { t[0].style.visibility = t[1] || "" }) : (xe = [], d(q.options.troubleElements, function(e, t) { d(document.getElementsByTagName(t), function(e, t) { xe.push([t, t.style.visibility]), t.style.visibility = "hidden" }) })) }

                        function N(e, t) {
                            var n = f("sb-nav-" + e);
                            n && (n.style.display = t ? "" : "none")
                        }

                        function L(e, t) {
                            var n = f("sb-loading"),
                                i = q.getCurrent().player,
                                r = "img" == i || "html" == i;
                            if (e) {
                                q.setOpacity(n, 0), n.style.display = "block";
                                var o = function() { q.clearOpacity(n), t && t() };
                                r ? O(n, "opacity", 1, q.options.fadeDuration, o) : o()
                            } else {
                                var o = function() { n.style.display = "none", q.clearOpacity(n), t && t() };
                                r ? O(n, "opacity", 0, q.options.fadeDuration, o) : o()
                            }
                        }

                        function V(e) {
                            var t = q.getCurrent();
                            f("sb-title-inner").innerHTML = t.title || "";
                            var n, i, r, o, s;
                            if (q.options.displayNav) {
                                n = !0;
                                var a = q.gallery.length;
                                a > 1 && (q.options.continuous ? i = s = !0 : (i = a - 1 > q.current, s = q.current > 0)), q.options.slideshowDelay > 0 && q.hasNext() && (o = !q.isPaused(), r = !o)
                            } else n = i = r = o = s = !1;
                            N("close", n), N("next", i), N("play", r), N("pause", o), N("previous", s);
                            var l = "";
                            if (q.options.displayCounter && q.gallery.length > 1) {
                                var a = q.gallery.length;
                                if ("skip" == q.options.counterType) {
                                    var u = 0,
                                        c = a,
                                        d = parseInt(q.options.counterLimit) || 0;
                                    if (a > d && d > 2) {
                                        var h = Math.floor(d / 2);
                                        u = q.current - h, 0 > u && (u += a), c = q.current + (d - h), c > a && (c -= a)
                                    }
                                    for (; u != c;) u == a && (u = 0), l += '<a onclick="Shadowbox.change(' + u + ');"', u == q.current && (l += ' class="sb-counter-current"'), l += ">" + ++u + "</a>"
                                } else l = [q.current + 1, q.lang.of, a].join(" ")
                            }
                            f("sb-counter").innerHTML = l, e()
                        }

                        function z(e) {
                            var t = f("sb-title-inner"),
                                n = f("sb-info-inner"),
                                i = .35;
                            t.style.visibility = n.style.visibility = "", "" != t.innerHTML && O(t, "marginTop", 0, i), O(n, "marginTop", 0, i, e)
                        }

                        function D(e, t) {
                            var n = f("sb-title"),
                                i = f("sb-info"),
                                r = n.offsetHeight,
                                o = i.offsetHeight,
                                s = f("sb-title-inner"),
                                a = f("sb-info-inner"),
                                l = e ? .35 : 0;
                            O(s, "marginTop", r, l), O(a, "marginTop", -1 * o, l, function() { s.style.visibility = a.style.visibility = "hidden", t() })
                        }

                        function B(e, t, n, i) {
                            var r = f("sb-wrapper-inner"),
                                o = n ? q.options.resizeDuration : 0;
                            O(we, "top", t, o), O(r, "height", e, o, i)
                        }

                        function H(e, t, n, i) {
                            var r = n ? q.options.resizeDuration : 0;
                            O(we, "left", t, r), O(we, "width", e, r, i)
                        }

                        function R(e, t) {
                            var n = f("sb-body-inner"),
                                e = parseInt(e),
                                t = parseInt(t),
                                i = we.offsetHeight - n.offsetHeight,
                                r = we.offsetWidth - n.offsetWidth,
                                o = be.offsetHeight,
                                s = be.offsetWidth,
                                a = parseInt(q.options.viewportPadding) || 20,
                                l = q.player && "drag" != q.options.handleOversize;
                            return q.setDimensions(e, t, o, s, i, r, a, l)
                        }
                        var q = { version: "3.0.3" },
                            W = navigator.userAgent.toLowerCase();
                        W.indexOf("windows") > -1 || W.indexOf("win32") > -1 ? q.isWindows = !0 : W.indexOf("macintosh") > -1 || W.indexOf("mac os x") > -1 ? q.isMac = !0 : W.indexOf("linux") > -1 && (q.isLinux = !0), q.isIE = W.indexOf("msie") > -1, q.isIE6 = W.indexOf("msie 6") > -1, q.isIE7 = W.indexOf("msie 7") > -1, q.isGecko = W.indexOf("gecko") > -1 && -1 == W.indexOf("safari"), q.isWebKit = W.indexOf("applewebkit/") > -1;
                        var U, X, Q = /#(.+)$/,
                            Y = /^(light|shadow)box\[(.*?)\]/i,
                            K = /\s*([a-z_]*?)\s*=\s*(.+)\s*/,
                            G = /[0-9a-z]+$/i,
                            J = /(.+\/)shadowbox\.js/i,
                            Z = !1,
                            ee = !1,
                            te = {},
                            ne = 0;
                        q.current = -1, q.dimensions = null, q.ease = function(e) { return 1 + Math.pow(e - 1, 3) }, q.errorInfo = { fla: { name: "Flash", url: "http://www.adobe.com/products/flashplayer/" }, qt: { name: "QuickTime", url: "http://www.apple.com/quicktime/download/" }, wmp: { name: "Windows Media Player", url: "http://www.microsoft.com/windows/windowsmedia/" }, f4m: { name: "Flip4Mac", url: "http://www.flip4mac.com/wmv_download.htm" } }, q.gallery = [], q.onReady = p, q.path = null, q.player = null, q.playerId = "sb-player", q.options = { animate: !0, animateFade: !0, autoplayMovies: !0, continuous: !1, enableKeys: !0, flashParams: { bgcolor: "#000000", allowfullscreen: !0 }, flashVars: {}, flashVersion: "9.0.115", handleOversize: "resize", handleUnsupported: "link", onChange: p, onClose: p, onFinish: p, onOpen: p, showMovieControls: !0, skipSetup: !1, slideshowDelay: 0, viewportPadding: 20 }, q.getCurrent = function() { return q.current > -1 ? q.gallery[q.current] : null }, q.hasNext = function() { return q.gallery.length > 1 && (q.current != q.gallery.length - 1 || q.options.continuous) }, q.isOpen = function() { return Z }, q.isPaused = function() { return "pause" == X }, q.applyOptions = function(e) { te = c({}, q.options), c(q.options, e) }, q.revertOptions = function() { c(q.options, te) }, q.init = function(e, t) {
                            if (!ee) {
                                if (ee = !0, q.skin.options && c(q.options, q.skin.options), e && c(q.options, e), !q.path)
                                    for (var n, i = document.getElementsByTagName("script"), r = 0, o = i.length; o > r; ++r)
                                        if (n = J.exec(i[r].src)) { q.path = n[1]; break }
                                t && (q.onReady = t), C()
                            }
                        }, q.open = function(e) {
                            if (!Z) {
                                var t = q.makeGallery(e);
                                if (q.gallery = t[0], q.current = t[1], e = q.getCurrent(), null != e && (q.applyOptions(e.options || {}), n(), q.gallery.length)) {
                                    if (e = q.getCurrent(), q.options.onOpen(e) === !1) return;
                                    Z = !0, q.skin.onOpen(e, o)
                                }
                            }
                        }, q.close = function() { Z && (Z = !1, q.player && (q.player.remove(), q.player = null), "number" == typeof X && (clearTimeout(X), X = null), ne = 0, i(!1), q.options.onClose(q.getCurrent()), q.skin.onClose(), q.revertOptions()) }, q.play = function() { q.hasNext() && (ne || (ne = 1e3 * q.options.slideshowDelay), ne && (U = u(), X = setTimeout(function() { ne = U = 0, q.next() }, ne), q.skin.onPlay && q.skin.onPlay())) }, q.pause = function() { "number" == typeof X && (ne = Math.max(0, ne - (u() - U)), ne && (clearTimeout(X), X = "pause", q.skin.onPause && q.skin.onPause())) }, q.change = function(e) {
                            if (!(e in q.gallery)) { if (!q.options.continuous) return; if (e = 0 > e ? q.gallery.length + e : 0, !(e in q.gallery)) return }
                            q.current = e, "number" == typeof X && (clearTimeout(X), X = null, ne = U = 0), q.options.onChange(q.getCurrent()), o(!0)
                        }, q.next = function() { q.change(q.current + 1) }, q.previous = function() { q.change(q.current - 1) }, q.setDimensions = function(e, t, n, i, r, o, s, a) {
                            var l = e,
                                u = t,
                                c = 2 * s + r;
                            e + c > n && (e = n - c);
                            var d = 2 * s + o;
                            t + d > i && (t = i - d);
                            var h = (l - e) / l,
                                p = (u - t) / u,
                                f = h > 0 || p > 0;
                            return a && f && (h > p ? t = Math.round(u / l * e) : p > h && (e = Math.round(l / u * t))), q.dimensions = { height: e + r, width: t + o, innerHeight: e, innerWidth: t, top: Math.floor((n - (e + c)) / 2 + s), left: Math.floor((i - (t + d)) / 2 + s), oversized: f }, q.dimensions
                        }, q.makeGallery = function(e) {
                            var t = [],
                                n = -1;
                            if ("string" == typeof e && (e = [e]), "number" == typeof e.length) d(e, function(e, n) { n.content ? t[e] = n : t[e] = { content: n } }), n = 0;
                            else {
                                if (e.tagName) {
                                    var i = q.getCache(e);
                                    e = i ? i : q.makeObject(e)
                                }
                                if (e.gallery) { t = []; var r; for (var o in q.cache) r = q.cache[o], r.gallery && r.gallery == e.gallery && (-1 == n && r.content == e.content && (n = t.length), t.push(r)); - 1 == n && (t.unshift(e), n = 0) } else t = [e], n = 0
                            }
                            return d(t, function(e, n) { t[e] = c({}, n) }), [t, n]
                        }, q.makeObject = function(e, t) {
                            var n = { content: e.href, title: e.getAttribute("title") || "", link: e };
                            t ? (t = c({}, t), d(["player", "title", "height", "width", "gallery"], function(e, i) { "undefined" != typeof t[i] && (n[i] = t[i], delete t[i]) }), n.options = t) : n.options = {}, n.player || (n.player = q.getPlayer(n.content));
                            var i = e.getAttribute("rel");
                            if (i) {
                                var r = i.match(Y);
                                r && (n.gallery = escape(r[2])), d(i.split(";"), function(e, t) { r = t.match(K), r && (n[r[1]] = r[2]) })
                            }
                            return n
                        }, q.getPlayer = function(e) {
                            if (e.indexOf("#") > -1 && 0 == e.indexOf(document.location.href)) return "inline";
                            var t = e.indexOf("?");
                            t > -1 && (e = e.substring(0, t));
                            var n, i = e.match(G);
                            if (i && (n = i[0].toLowerCase()), n) { if (q.img && q.img.ext.indexOf(n) > -1) return "img"; if (q.swf && q.swf.ext.indexOf(n) > -1) return "swf"; if (q.flv && q.flv.ext.indexOf(n) > -1) return "flv"; if (q.qt && q.qt.ext.indexOf(n) > -1) return q.wmp && q.wmp.ext.indexOf(n) > -1 ? "qtwmp" : "qt"; if (q.wmp && q.wmp.ext.indexOf(n) > -1) return "wmp" }
                            return "iframe"
                        }, Array.prototype.indexOf || (Array.prototype.indexOf = function(e, t) {
                            var n = this.length >>> 0;
                            for (t = t || 0, 0 > t && (t += n); n > t; ++t)
                                if (t in this && this[t] === e) return t;
                            return -1
                        });
                        var ie = !0,
                            re = !0;
                        q.getStyle = function() {
                            var e = /opacity=([^)]*)/,
                                t = document.defaultView && document.defaultView.getComputedStyle;
                            return function(n, i) {
                                var r;
                                if (!ie && "opacity" == i && n.currentStyle) return r = e.test(n.currentStyle.filter || "") ? parseFloat(RegExp.$1) / 100 + "" : "", "" === r ? "1" : r;
                                if (t) {
                                    var o = t(n, null);
                                    o && (r = o[i]), "opacity" == i && "" == r && (r = "1")
                                } else r = n.currentStyle[i];
                                return r
                            }
                        }(), q.appendHTML = function(e, t) {
                            if (e.insertAdjacentHTML) e.insertAdjacentHTML("BeforeEnd", t);
                            else if (e.lastChild) {
                                var n = e.ownerDocument.createRange();
                                n.setStartAfter(e.lastChild);
                                var i = n.createContextualFragment(t);
                                e.appendChild(i)
                            } else e.innerHTML = t
                        }, q.getWindowSize = function(e) { return "CSS1Compat" === document.compatMode ? document.documentElement["client" + e] : document.body["client" + e] }, q.setOpacity = function(e, t) {
                            var n = e.style;
                            ie ? n.opacity = 1 == t ? "" : t : (n.zoom = 1, 1 == t ? "string" == typeof n.filter && /alpha/i.test(n.filter) && (n.filter = n.filter.replace(/\s*[\w\.]*alpha\([^\)]*\);?/gi, "")) : n.filter = (n.filter || "").replace(/\s*[\w\.]*alpha\([^\)]*\)/gi, "") + " alpha(opacity=" + 100 * t + ")")
                        }, q.clearOpacity = function(e) { q.setOpacity(e, 1) }, w.guid = 1, w.handleEvent = function(t) {
                            var n = !0;
                            t = t || w.fixEvent(((this.ownerDocument || this.document || this).parentWindow || e).event);
                            var i = this.events[t.type];
                            for (var r in i) this.__handleEvent = i[r], this.__handleEvent(t) === !1 && (n = !1);
                            return n
                        }, w.preventDefault = function() { this.returnValue = !1 }, w.stopPropagation = function() { this.cancelBubble = !0 }, w.fixEvent = function(e) {
                            return e.preventDefault = w.preventDefault,
                                e.stopPropagation = w.stopPropagation, e
                        };
                        var oe, se = !1;
                        if (document.addEventListener ? oe = function() { document.removeEventListener("DOMContentLoaded", oe, !1), q.load() } : document.attachEvent && (oe = function() { "complete" === document.readyState && (document.detachEvent("onreadystatechange", oe), q.load()) }), q.load = function() {
                                if (!se) {
                                    if (!document.body) return setTimeout(q.load, 13);
                                    se = !0, g(), q.onReady(), q.options.skipSetup || q.setup(), q.skin.init()
                                }
                            }, q.plugins = {}, navigator.plugins && navigator.plugins.length) {
                            var ae = [];
                            d(navigator.plugins, function(e, t) { ae.push(t.name) }), ae = ae.join(",");
                            var le = ae.indexOf("Flip4Mac") > -1;
                            q.plugins = { fla: ae.indexOf("Shockwave Flash") > -1, qt: ae.indexOf("QuickTime") > -1, wmp: !le && ae.indexOf("Windows Media") > -1, f4m: le }
                        } else {
                            var ue = function(e) { var t; try { t = new ActiveXObject(e) } catch (n) {} return !!t };
                            q.plugins = { fla: ue("ShockwaveFlash.ShockwaveFlash"), qt: ue("QuickTime.QuickTime"), wmp: ue("wmplayer.ocx"), f4m: !1 }
                        }
                        var ce = /^(light|shadow)box/i,
                            de = "shadowboxCacheKey",
                            he = 1;
                        q.cache = {}, q.select = function(e) {
                            var t = [];
                            if (e) {
                                var n = e.length;
                                if (n)
                                    if ("string" == typeof e) q.find && (t = q.find(e));
                                    else if (2 == n && "string" == typeof e[0] && e[1].nodeType) q.find && (t = q.find(e[0], e[1]));
                                else
                                    for (var i = 0; n > i; ++i) t[i] = e[i];
                                else t.push(e)
                            } else {
                                var r;
                                d(document.getElementsByTagName("a"), function(e, n) { r = n.getAttribute("rel"), r && ce.test(r) && t.push(n) })
                            }
                            return t
                        }, q.setup = function(e, t) { d(q.select(e), function(e, n) { q.addCache(n, t) }) }, q.teardown = function(e) { d(q.select(e), function(e, t) { q.removeCache(t) }) }, q.addCache = function(e, n) {
                            var i = e[de];
                            i == t && (i = he++, e[de] = i, w(e, "click", T)), q.cache[i] = q.makeObject(e, n)
                        }, q.removeCache = function(e) { _(e, "click", T), delete q.cache[e[de]], e[de] = null }, q.getCache = function(e) { var t = e[de]; return t in q.cache && q.cache[t] }, q.clearCache = function() {
                            for (var e in q.cache) q.removeCache(q.cache[e].link);
                            q.cache = {}
                        }, q.find = function() {
                            function e(t) { for (var n, i = "", r = 0; t[r]; r++) n = t[r], 3 === n.nodeType || 4 === n.nodeType ? i += n.nodeValue : 8 !== n.nodeType && (i += e(n.childNodes)); return i }

                            function n(e, t, n, i, r, o) {
                                for (var s = 0, a = i.length; a > s; s++) {
                                    var l = i[s];
                                    if (l) {
                                        l = l[e];
                                        for (var u = !1; l;) {
                                            if (l.sizcache === n) { u = i[l.sizset]; break }
                                            if (1 !== l.nodeType || o || (l.sizcache = n, l.sizset = s), l.nodeName.toLowerCase() === t) { u = l; break }
                                            l = l[e]
                                        }
                                        i[s] = u
                                    }
                                }
                            }

                            function i(e, t, n, i, r, o) {
                                for (var s = 0, a = i.length; a > s; s++) {
                                    var l = i[s];
                                    if (l) {
                                        l = l[e];
                                        for (var c = !1; l;) {
                                            if (l.sizcache === n) { c = i[l.sizset]; break }
                                            if (1 === l.nodeType)
                                                if (o || (l.sizcache = n, l.sizset = s), "string" != typeof t) { if (l === t) { c = !0; break } } else if (u.filter(t, [l]).length > 0) { c = l; break }
                                            l = l[e]
                                        }
                                        i[s] = c
                                    }
                                }
                            }
                            var r = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
                                o = 0,
                                s = Object.prototype.toString,
                                a = !1,
                                l = !0;
                            [0, 0].sort(function() { return l = !1, 0 });
                            var u = function(e, t, n, i) {
                                n = n || [];
                                var o = t = t || document;
                                if (1 !== t.nodeType && 9 !== t.nodeType) return [];
                                if (!e || "string" != typeof e) return n;
                                for (var a, l, h, f, m = [], b = !0, w = v(t), _ = e; null !== (r.exec(""), a = r.exec(_));)
                                    if (_ = a[3], m.push(a[1]), a[2]) { f = a[3]; break }
                                if (m.length > 1 && d.exec(e))
                                    if (2 === m.length && c.relative[m[0]]) l = y(m[0] + m[1], t);
                                    else
                                        for (l = c.relative[m[0]] ? [t] : u(m.shift(), t); m.length;) e = m.shift(), c.relative[e] && (e += m.shift()), l = y(e, l);
                                else {
                                    if (!i && m.length > 1 && 9 === t.nodeType && !w && c.match.ID.test(m[0]) && !c.match.ID.test(m[m.length - 1])) {
                                        var x = u.find(m.shift(), t, w);
                                        t = x.expr ? u.filter(x.expr, x.set)[0] : x.set[0]
                                    }
                                    if (t) {
                                        var x = i ? { expr: m.pop(), set: p(i) } : u.find(m.pop(), 1 !== m.length || "~" !== m[0] && "+" !== m[0] || !t.parentNode ? t : t.parentNode, w);
                                        for (l = x.expr ? u.filter(x.expr, x.set) : x.set, m.length > 0 ? h = p(l) : b = !1; m.length;) {
                                            var C = m.pop(),
                                                T = C;
                                            c.relative[C] ? T = m.pop() : C = "", null == T && (T = t), c.relative[C](h, T, w)
                                        }
                                    } else h = m = []
                                }
                                if (h || (h = l), !h) throw "Syntax error, unrecognized expression: " + (C || e);
                                if ("[object Array]" === s.call(h))
                                    if (b)
                                        if (t && 1 === t.nodeType)
                                            for (var k = 0; null != h[k]; k++) h[k] && (h[k] === !0 || 1 === h[k].nodeType && g(t, h[k])) && n.push(l[k]);
                                        else
                                            for (var k = 0; null != h[k]; k++) h[k] && 1 === h[k].nodeType && n.push(l[k]);
                                else n.push.apply(n, h);
                                else p(h, n);
                                return f && (u(f, o, n, i), u.uniqueSort(n)), n
                            };
                            u.uniqueSort = function(e) {
                                if (m && (a = l, e.sort(m), a))
                                    for (var t = 1; t < e.length; t++) e[t] === e[t - 1] && e.splice(t--, 1);
                                return e
                            }, u.matches = function(e, t) { return u(e, null, null, t) }, u.find = function(e, t, n) { var i, r; if (!e) return []; for (var o = 0, s = c.order.length; s > o; o++) { var r, a = c.order[o]; if (r = c.leftMatch[a].exec(e)) { var l = r[1]; if (r.splice(1, 1), "\\" !== l.substr(l.length - 1) && (r[1] = (r[1] || "").replace(/\\/g, ""), i = c.find[a](r, t, n), null != i)) { e = e.replace(c.match[a], ""); break } } } return i || (i = t.getElementsByTagName("*")), { set: i, expr: e } }, u.filter = function(e, n, i, r) {
                                for (var o, s, a = e, l = [], u = n, d = n && n[0] && v(n[0]); e && n.length;) {
                                    for (var h in c.filter)
                                        if (null != (o = c.match[h].exec(e))) {
                                            var p, f, m = c.filter[h];
                                            if (s = !1, u === l && (l = []), c.preFilter[h])
                                                if (o = c.preFilter[h](o, u, i, l, r, d)) { if (o === !0) continue } else s = p = !0;
                                            if (o)
                                                for (var g = 0; null != (f = u[g]); g++)
                                                    if (f) {
                                                        p = m(f, o, g, u);
                                                        var y = r ^ !!p;
                                                        i && null != p ? y ? s = !0 : u[g] = !1 : y && (l.push(f), s = !0)
                                                    }
                                            if (p !== t) { if (i || (u = l), e = e.replace(c.match[h], ""), !s) return []; break }
                                        }
                                    if (e === a) { if (null == s) throw "Syntax error, unrecognized expression: " + e; break }
                                    a = e
                                }
                                return u
                            };
                            var c = u.selectors = {
                                    order: ["ID", "NAME", "TAG"],
                                    match: { ID: /#((?:[\w\u00c0-\uFFFF-]|\\.)+)/, CLASS: /\.((?:[\w\u00c0-\uFFFF-]|\\.)+)/, NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF-]|\\.)+)['"]*\]/, ATTR: /\[\s*((?:[\w\u00c0-\uFFFF-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/, TAG: /^((?:[\w\u00c0-\uFFFF\*-]|\\.)+)/, CHILD: /:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/, POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/, PSEUDO: /:((?:[\w\u00c0-\uFFFF-]|\\.)+)(?:\((['"]*)((?:\([^\)]+\)|[^\2\(\)]*)+)\2\))?/ },
                                    leftMatch: {},
                                    attrMap: { "class": "className", "for": "htmlFor" },
                                    attrHandle: { href: function(e) { return e.getAttribute("href") } },
                                    relative: {
                                        "+": function(e, t) {
                                            var n = "string" == typeof t,
                                                i = n && !/\W/.test(t),
                                                r = n && !i;
                                            i && (t = t.toLowerCase());
                                            for (var o, s = 0, a = e.length; a > s; s++)
                                                if (o = e[s]) {
                                                    for (;
                                                        (o = o.previousSibling) && 1 !== o.nodeType;);
                                                    e[s] = r || o && o.nodeName.toLowerCase() === t ? o || !1 : o === t
                                                }
                                            r && u.filter(t, e, !0)
                                        },
                                        ">": function(e, t) {
                                            var n = "string" == typeof t;
                                            if (n && !/\W/.test(t)) {
                                                t = t.toLowerCase();
                                                for (var i = 0, r = e.length; r > i; i++) {
                                                    var o = e[i];
                                                    if (o) {
                                                        var s = o.parentNode;
                                                        e[i] = s.nodeName.toLowerCase() === t ? s : !1
                                                    }
                                                }
                                            } else {
                                                for (var i = 0, r = e.length; r > i; i++) {
                                                    var o = e[i];
                                                    o && (e[i] = n ? o.parentNode : o.parentNode === t)
                                                }
                                                n && u.filter(t, e, !0)
                                            }
                                        },
                                        "": function(e, t, r) {
                                            var s = o++,
                                                a = i;
                                            if ("string" == typeof t && !/\W/.test(t)) {
                                                var l = t = t.toLowerCase();
                                                a = n
                                            }
                                            a("parentNode", t, s, e, l, r)
                                        },
                                        "~": function(e, t, r) {
                                            var s = o++,
                                                a = i;
                                            if ("string" == typeof t && !/\W/.test(t)) {
                                                var l = t = t.toLowerCase();
                                                a = n
                                            }
                                            a("previousSibling", t, s, e, l, r)
                                        }
                                    },
                                    find: { ID: function(e, t, n) { if ("undefined" != typeof t.getElementById && !n) { var i = t.getElementById(e[1]); return i ? [i] : [] } }, NAME: function(e, t) { if ("undefined" != typeof t.getElementsByName) { for (var n = [], i = t.getElementsByName(e[1]), r = 0, o = i.length; o > r; r++) i[r].getAttribute("name") === e[1] && n.push(i[r]); return 0 === n.length ? null : n } }, TAG: function(e, t) { return t.getElementsByTagName(e[1]) } },
                                    preFilter: {
                                        CLASS: function(e, t, n, i, r, o) { if (e = " " + e[1].replace(/\\/g, "") + " ", o) return e; for (var s, a = 0; null != (s = t[a]); a++) s && (r ^ (s.className && (" " + s.className + " ").replace(/[\t\n]/g, " ").indexOf(e) >= 0) ? n || i.push(s) : n && (t[a] = !1)); return !1 },
                                        ID: function(e) { return e[1].replace(/\\/g, "") },
                                        TAG: function(e, t) { return e[1].toLowerCase() },
                                        CHILD: function(e) {
                                            if ("nth" === e[1]) {
                                                var t = /(-?)(\d*)n((?:\+|-)?\d*)/.exec("even" === e[2] && "2n" || "odd" === e[2] && "2n+1" || !/\D/.test(e[2]) && "0n+" + e[2] || e[2]);
                                                e[2] = t[1] + (t[2] || 1) - 0, e[3] = t[3] - 0
                                            }
                                            return e[0] = o++, e
                                        },
                                        ATTR: function(e, t, n, i, r, o) { var s = e[1].replace(/\\/g, ""); return !o && c.attrMap[s] && (e[1] = c.attrMap[s]), "~=" === e[2] && (e[4] = " " + e[4] + " "), e },
                                        PSEUDO: function(e, t, n, i, o) {
                                            if ("not" === e[1]) {
                                                if (!((r.exec(e[3]) || "").length > 1 || /^\w/.test(e[3]))) { var s = u.filter(e[3], t, n, !0 ^ o); return n || i.push.apply(i, s), !1 }
                                                e[3] = u(e[3], null, null, t)
                                            } else if (c.match.POS.test(e[0]) || c.match.CHILD.test(e[0])) return !0;
                                            return e
                                        },
                                        POS: function(e) { return e.unshift(!0), e }
                                    },
                                    filters: { enabled: function(e) { return e.disabled === !1 && "hidden" !== e.type }, disabled: function(e) { return e.disabled === !0 }, checked: function(e) { return e.checked === !0 }, selected: function(e) { return e.parentNode.selectedIndex, e.selected === !0 }, parent: function(e) { return !!e.firstChild }, empty: function(e) { return !e.firstChild }, has: function(e, t, n) { return !!u(n[3], e).length }, header: function(e) { return /h\d/i.test(e.nodeName) }, text: function(e) { return "text" === e.type }, radio: function(e) { return "radio" === e.type }, checkbox: function(e) { return "checkbox" === e.type }, file: function(e) { return "file" === e.type }, password: function(e) { return "password" === e.type }, submit: function(e) { return "submit" === e.type }, image: function(e) { return "image" === e.type }, reset: function(e) { return "reset" === e.type }, button: function(e) { return "button" === e.type || "button" === e.nodeName.toLowerCase() }, input: function(e) { return /input|select|textarea|button/i.test(e.nodeName) } },
                                    setFilters: { first: function(e, t) { return 0 === t }, last: function(e, t, n, i) { return t === i.length - 1 }, even: function(e, t) { return t % 2 === 0 }, odd: function(e, t) { return t % 2 === 1 }, lt: function(e, t, n) { return t < n[3] - 0 }, gt: function(e, t, n) { return t > n[3] - 0 }, nth: function(e, t, n) { return n[3] - 0 === t }, eq: function(e, t, n) { return n[3] - 0 === t } },
                                    filter: {
                                        PSEUDO: function(t, n, i, r) {
                                            var o = n[1],
                                                s = c.filters[o];
                                            if (s) return s(t, i, n, r);
                                            if ("contains" === o) return (t.textContent || t.innerText || e([t]) || "").indexOf(n[3]) >= 0;
                                            if ("not" === o) {
                                                for (var a = n[3], i = 0, l = a.length; l > i; i++)
                                                    if (a[i] === t) return !1;
                                                return !0
                                            }
                                            throw "Syntax error, unrecognized expression: " + o
                                        },
                                        CHILD: function(e, t) {
                                            var n = t[1],
                                                i = e;
                                            switch (n) {
                                                case "only":
                                                case "first":
                                                    for (; i = i.previousSibling;)
                                                        if (1 === i.nodeType) return !1;
                                                    if ("first" === n) return !0;
                                                    i = e;
                                                case "last":
                                                    for (; i = i.nextSibling;)
                                                        if (1 === i.nodeType) return !1;
                                                    return !0;
                                                case "nth":
                                                    var r = t[2],
                                                        o = t[3];
                                                    if (1 === r && 0 === o) return !0;
                                                    var s = t[0],
                                                        a = e.parentNode;
                                                    if (a && (a.sizcache !== s || !e.nodeIndex)) {
                                                        var l = 0;
                                                        for (i = a.firstChild; i; i = i.nextSibling) 1 === i.nodeType && (i.nodeIndex = ++l);
                                                        a.sizcache = s
                                                    }
                                                    var u = e.nodeIndex - o;
                                                    return 0 === r ? 0 === u : u % r === 0 && u / r >= 0
                                            }
                                        },
                                        ID: function(e, t) { return 1 === e.nodeType && e.getAttribute("id") === t },
                                        TAG: function(e, t) { return "*" === t && 1 === e.nodeType || e.nodeName.toLowerCase() === t },
                                        CLASS: function(e, t) { return (" " + (e.className || e.getAttribute("class")) + " ").indexOf(t) > -1 },
                                        ATTR: function(e, t) {
                                            var n = t[1],
                                                i = c.attrHandle[n] ? c.attrHandle[n](e) : null != e[n] ? e[n] : e.getAttribute(n),
                                                r = i + "",
                                                o = t[2],
                                                s = t[4];
                                            return null == i ? "!=" === o : "=" === o ? r === s : "*=" === o ? r.indexOf(s) >= 0 : "~=" === o ? (" " + r + " ").indexOf(s) >= 0 : s ? "!=" === o ? r !== s : "^=" === o ? 0 === r.indexOf(s) : "$=" === o ? r.substr(r.length - s.length) === s : "|=" === o ? r === s || r.substr(0, s.length + 1) === s + "-" : !1 : r && i !== !1
                                        },
                                        POS: function(e, t, n, i) {
                                            var r = t[2],
                                                o = c.setFilters[r];
                                            return o ? o(e, n, t, i) : void 0
                                        }
                                    }
                                },
                                d = c.match.POS;
                            for (var h in c.match) c.match[h] = new RegExp(c.match[h].source + /(?![^\[]*\])(?![^\(]*\))/.source), c.leftMatch[h] = new RegExp(/(^(?:.|\r|\n)*?)/.source + c.match[h].source);
                            var p = function(e, t) { return e = Array.prototype.slice.call(e, 0), t ? (t.push.apply(t, e), t) : e };
                            try { Array.prototype.slice.call(document.documentElement.childNodes, 0) } catch (f) {
                                p = function(e, t) {
                                    var n = t || [];
                                    if ("[object Array]" === s.call(e)) Array.prototype.push.apply(n, e);
                                    else if ("number" == typeof e.length)
                                        for (var i = 0, r = e.length; r > i; i++) n.push(e[i]);
                                    else
                                        for (var i = 0; e[i]; i++) n.push(e[i]);
                                    return n
                                }
                            }
                            var m;
                            document.documentElement.compareDocumentPosition ? m = function(e, t) { if (!e.compareDocumentPosition || !t.compareDocumentPosition) return e == t && (a = !0), e.compareDocumentPosition ? -1 : 1; var n = 4 & e.compareDocumentPosition(t) ? -1 : e === t ? 0 : 1; return 0 === n && (a = !0), n } : "sourceIndex" in document.documentElement ? m = function(e, t) { if (!e.sourceIndex || !t.sourceIndex) return e == t && (a = !0), e.sourceIndex ? -1 : 1; var n = e.sourceIndex - t.sourceIndex; return 0 === n && (a = !0), n } : document.createRange && (m = function(e, t) {
                                    if (!e.ownerDocument || !t.ownerDocument) return e == t && (a = !0), e.ownerDocument ? -1 : 1;
                                    var n = e.ownerDocument.createRange(),
                                        i = t.ownerDocument.createRange();
                                    n.setStart(e, 0), n.setEnd(e, 0), i.setStart(t, 0), i.setEnd(t, 0);
                                    var r = n.compareBoundaryPoints(Range.START_TO_END, i);
                                    return 0 === r && (a = !0), r
                                }),
                                function() {
                                    var e = document.createElement("div"),
                                        n = "script" + (new Date).getTime();
                                    e.innerHTML = "<a name='" + n + "'/>";
                                    var i = document.documentElement;
                                    i.insertBefore(e, i.firstChild), document.getElementById(n) && (c.find.ID = function(e, n, i) { if ("undefined" != typeof n.getElementById && !i) { var r = n.getElementById(e[1]); return r ? r.id === e[1] || "undefined" != typeof r.getAttributeNode && r.getAttributeNode("id").nodeValue === e[1] ? [r] : t : [] } }, c.filter.ID = function(e, t) { var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id"); return 1 === e.nodeType && n && n.nodeValue === t }), i.removeChild(e), i = e = null
                                }(),
                                function() {
                                    var e = document.createElement("div");
                                    e.appendChild(document.createComment("")), e.getElementsByTagName("*").length > 0 && (c.find.TAG = function(e, t) {
                                        var n = t.getElementsByTagName(e[1]);
                                        if ("*" === e[1]) {
                                            for (var i = [], r = 0; n[r]; r++) 1 === n[r].nodeType && i.push(n[r]);
                                            n = i
                                        }
                                        return n
                                    }), e.innerHTML = "<a href='#'></a>", e.firstChild && "undefined" != typeof e.firstChild.getAttribute && "#" !== e.firstChild.getAttribute("href") && (c.attrHandle.href = function(e) { return e.getAttribute("href", 2) }), e = null
                                }(), document.querySelectorAll && ! function() {
                                    var e = u,
                                        t = document.createElement("div");
                                    if (t.innerHTML = "<p class='TEST'></p>", !t.querySelectorAll || 0 !== t.querySelectorAll(".TEST").length) {
                                        u = function(t, n, i, r) {
                                            if (n = n || document, !r && 9 === n.nodeType && !v(n)) try { return p(n.querySelectorAll(t), i) } catch (o) {}
                                            return e(t, n, i, r)
                                        };
                                        for (var n in e) u[n] = e[n];
                                        t = null
                                    }
                                }(),
                                function() {
                                    var e = document.createElement("div");
                                    e.innerHTML = "<div class='test e'></div><div class='test'></div>", e.getElementsByClassName && 0 !== e.getElementsByClassName("e").length && (e.lastChild.className = "e", 1 !== e.getElementsByClassName("e").length && (c.order.splice(1, 0, "CLASS"), c.find.CLASS = function(e, t, n) { return "undefined" == typeof t.getElementsByClassName || n ? void 0 : t.getElementsByClassName(e[1]) }, e = null))
                                }();
                            var g = document.compareDocumentPosition ? function(e, t) { return 16 & e.compareDocumentPosition(t) } : function(e, t) { return e !== t && (e.contains ? e.contains(t) : !0) },
                                v = function(e) { var t = (e ? e.ownerDocument || e : 0).documentElement; return t ? "HTML" !== t.nodeName : !1 },
                                y = function(e, t) {
                                    for (var n, i = [], r = "", o = t.nodeType ? [t] : t; n = c.match.PSEUDO.exec(e);) r += n[0], e = e.replace(c.match.PSEUDO, "");
                                    e = c.relative[e] ? e + "*" : e;
                                    for (var s = 0, a = o.length; a > s; s++) u(e, o[s], i);
                                    return u.filter(r, i)
                                };
                            return u
                        }(), q.lang = { code: "en", of: "of", loading: "loading", cancel: "Cancel", next: "Next", previous: "Previous", play: "Play", pause: "Pause", close: "Close", errors: { single: 'You must install the <a href="{0}">{1}</a> browser plugin to view this content.', shared: 'You must install both the <a href="{0}">{1}</a> and <a href="{2}">{3}</a> browser plugins to view this content.', either: 'You must install either the <a href="{0}">{1}</a> or the <a href="{2}">{3}</a> browser plugin to view this content.' } };
                        var pe, fe, me, ge, ve = "sb-drag-proxy";
                        q.img = function(e, t) {
                            this.obj = e, this.id = t, this.ready = !1;
                            var n = this;
                            pe = new Image, pe.onload = function() { n.height = e.height ? parseInt(e.height, 10) : pe.height, n.width = e.width ? parseInt(e.width, 10) : pe.width, n.ready = !0, pe.onload = null, pe = null }, pe.src = e.content
                        }, q.img.ext = ["bmp", "gif", "jpg", "jpeg", "png"], q.img.prototype = {
                            append: function(e, t) {
                                var n = document.createElement("img");
                                n.id = this.id, n.src = this.obj.content, n.style.position = "absolute";
                                var i, r;
                                t.oversized && "resize" == q.options.handleOversize ? (i = t.innerHeight, r = t.innerWidth) : (i = this.height, r = this.width), n.setAttribute("height", i), n.setAttribute("width", r), e.appendChild(n)
                            },
                            remove: function() {
                                var e = f(this.id);
                                e && m(e), $(), pe && (pe.onload = null, pe = null)
                            },
                            onLoad: function() {
                                var e = q.dimensions;
                                e.oversized && "drag" == q.options.handleOversize && S()
                            },
                            onWindowResize: function() {
                                var e = q.dimensions;
                                switch (q.options.handleOversize) {
                                    case "resize":
                                        var t = f(this.id);
                                        t.height = e.innerHeight, t.width = e.innerWidth;
                                        break;
                                    case "drag":
                                        if (ge) {
                                            var n = parseInt(q.getStyle(ge, "top")),
                                                i = parseInt(q.getStyle(ge, "left"));
                                            n + this.height < e.innerHeight && (ge.style.top = e.innerHeight - this.height + "px"), i + this.width < e.innerWidth && (ge.style.left = e.innerWidth - this.width + "px"), E()
                                        }
                                }
                            }
                        };
                        var ye, be, we, _e = !1,
                            xe = [],
                            Ce = ["sb-nav-close", "sb-nav-next", "sb-nav-play", "sb-nav-pause", "sb-nav-previous"],
                            Te = !0,
                            ke = {};
                        ke.markup = '<div id="sb-container"><div id="sb-overlay"></div><div id="sb-wrapper"><div id="sb-title"><div id="sb-title-inner"></div></div><div id="sb-wrapper-inner"><div id="sb-body"><div id="sb-body-inner"></div><div id="sb-loading"><div id="sb-loading-inner"><span>{loading}</span></div></div></div></div><div id="sb-info"><div id="sb-info-inner"><div id="sb-counter"></div><div id="sb-nav"><a id="sb-nav-close" title="{close}" onclick="Shadowbox.close()"></a><a id="sb-nav-next" title="{next}" onclick="Shadowbox.next()"></a><a id="sb-nav-play" title="{play}" onclick="Shadowbox.play()"></a><a id="sb-nav-pause" title="{pause}" onclick="Shadowbox.pause()"></a><a id="sb-nav-previous" title="{previous}" onclick="Shadowbox.previous()"></a></div></div></div></div></div>', ke.options = { animSequence: "sync", counterLimit: 10, counterType: "default", displayCounter: !0, displayNav: !0, fadeDuration: .35, initialHeight: 160, initialWidth: 320, modal: !1, overlayColor: "#000", overlayOpacity: .5, resizeDuration: .35, showOverlay: !0, troubleElements: ["select", "object", "embed", "canvas"] }, ke.init = function() {
                            if (q.appendHTML(document.body, h(ke.markup, q.lang)), ke.body = f("sb-body-inner"), ye = f("sb-container"), be = f("sb-overlay"), we = f("sb-wrapper"), re || (ye.style.position = "absolute"), !ie) {
                                var t, n, i = /url\("(.*\.png)"\)/;
                                d(Ce, function(e, r) { t = f(r), t && (n = q.getStyle(t, "backgroundImage").match(i), n && (t.style.backgroundImage = "none", t.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true,src=" + n[1] + ",sizingMethod=scale);")) })
                            }
                            var r;
                            w(e, "resize", function() { r && (clearTimeout(r), r = null), Z && (r = setTimeout(ke.onWindowResize, 10)) })
                        }, ke.onOpen = function(t, n) {
                            Te = !1, ye.style.display = "block", I();
                            var i = R(q.options.initialHeight, q.options.initialWidth);
                            B(i.innerHeight, i.top), H(i.width, i.left), q.options.showOverlay && (be.style.backgroundColor = q.options.overlayColor, q.setOpacity(be, 0), q.options.modal || w(be, "click", q.close), _e = !0), re || (P(), w(e, "scroll", P)), F(), ye.style.visibility = "visible", _e ? O(be, "opacity", q.options.overlayOpacity, q.options.fadeDuration, n) : n()
                        }, ke.onLoad = function(e, t) {
                            for (L(!0); ke.body.firstChild;) m(ke.body.firstChild);
                            D(e, function() { Z && (e || (we.style.visibility = "visible"), V(t)) })
                        }, ke.onReady = function(e) {
                            if (Z) {
                                var t = q.player,
                                    n = R(t.height, t.width),
                                    i = function() { z(e) };
                                switch (q.options.animSequence) {
                                    case "hw":
                                        B(n.innerHeight, n.top, !0, function() { H(n.width, n.left, !0, i) });
                                        break;
                                    case "wh":
                                        H(n.width, n.left, !0, function() { B(n.innerHeight, n.top, !0, i) });
                                        break;
                                    default:
                                        H(n.width, n.left, !0), B(n.innerHeight, n.top, !0, i)
                                }
                            }
                        }, ke.onShow = function(e) { L(!1, e), Te = !0 }, ke.onClose = function() {
                            re || _(e, "scroll", P), _(be, "click", q.close), we.style.visibility = "hidden";
                            var t = function() { ye.style.visibility = "hidden", ye.style.display = "none", F(!0) };
                            _e ? O(be, "opacity", 0, q.options.fadeDuration, t) : t()
                        }, ke.onPlay = function() { N("play", !1), N("pause", !0) }, ke.onPause = function() { N("pause", !1), N("play", !0) }, ke.onWindowResize = function() {
                            if (Te) {
                                I();
                                var e = q.player,
                                    t = R(e.height, e.width);
                                H(t.width, t.left), B(t.innerHeight, t.top), e.onWindowResize && e.onWindowResize()
                            }
                        }, q.skin = ke, e.Shadowbox = q
                    }(window), e.Shadowbox = Shadowbox
                }.apply(e, arguments)
            })
        }(this);
    (function() {
        function e(t) { return new e.fn.init(t) }

        function t(e, t, n) {
            if (!n.contentWindow.postMessage) return !1;
            var i = n.getAttribute("src").split("?")[0],
                r = JSON.stringify({ method: e, value: t });
            "//" === i.substr(0, 2) && (i = window.location.protocol + i), n.contentWindow.postMessage(r, i)
        }

        function n(e) {
            var t, n;
            try { t = JSON.parse(e.data), n = t.event || t.method } catch (i) {}
            if ("ready" != n || u || (u = !0), e.origin != c) return !1;
            var o = t.value,
                s = t.data,
                a = "" === a ? null : t.player_id,
                l = r(n, a),
                d = [];
            return l ? (void 0 !== o && d.push(o), s && d.push(s), a && d.push(a), d.length > 0 ? l.apply(null, d) : l.call()) : !1
        }

        function i(e, t, n) { n ? (l[n] || (l[n] = {}), l[n][e] = t) : l[e] = t }

        function r(e, t) { return t ? l[t][e] : l[e] }

        function o(e, t) {
            if (t && l[t]) {
                if (!l[t][e]) return !1;
                l[t][e] = null
            } else {
                if (!l[e]) return !1;
                l[e] = null
            }
            return !0
        }

        function s(e) { "//" === e.substr(0, 2) && (e = window.location.protocol + e); for (var t = e.split("/"), n = "", i = 0, r = t.length; r > i && 3 > i; i++) n += t[i], 2 > i && (n += "/"); return n }

        function a(e) { return !!(e && e.constructor && e.call && e.apply) }
        var l = {},
            u = !1,
            c = (Array.prototype.slice, "");
        return e.fn = e.prototype = {
            element: null,
            init: function(e) { return "string" == typeof e && (e = document.getElementById(e)), this.element = e, c = s(this.element.getAttribute("src")), this },
            api: function(e, n) {
                if (!this.element || !e) return !1;
                var r = this,
                    o = r.element,
                    s = "" !== o.id ? o.id : null,
                    l = a(n) ? null : n,
                    u = a(n) ? n : null;
                return u && i(e, u, s), t(e, l, o), r
            },
            addEvent: function(e, n) {
                if (!this.element) return !1;
                var r = this,
                    o = r.element,
                    s = "" !== o.id ? o.id : null;
                return i(e, n, s), "ready" != e ? t("addEventListener", e, o) : "ready" == e && u && n.call(null, s), r
            },
            removeEvent: function(e) {
                if (!this.element) return !1;
                var n = this,
                    i = n.element,
                    r = "" !== i.id ? i.id : null,
                    s = o(e, r);
                "ready" != e && s && t("removeEventListener", e, i)
            }
        }, e.fn.init.prototype = e.fn, window.addEventListener ? window.addEventListener("message", n, !1) : window.attachEvent("onmessage", n), window.Froogaloop = window.$f = e
    })();
    define("froogaloop", function() {}),
        function(e) {
            define("mediaelementplayer", ["jquery", "froogaloop"], function() {
                return function() {
                    var e = e || {};
                    e.version = "2.16.3", e.meIndex = 0, e.plugins = { silverlight: [{ version: [3, 0], types: ["video/mp4", "video/m4v", "video/mov", "video/wmv", "audio/wma", "audio/m4a", "audio/mp3", "audio/wav", "audio/mpeg"] }], flash: [{ version: [9, 0, 124], types: ["video/mp4", "video/m4v", "video/mov", "video/flv", "video/rtmp", "video/x-flv", "audio/flv", "audio/x-flv", "audio/mp3", "audio/m4a", "audio/mpeg", "video/youtube", "video/x-youtube", "application/x-mpegURL"] }], youtube: [{ version: null, types: ["video/youtube", "video/x-youtube", "audio/youtube", "audio/x-youtube"] }], vimeo: [{ version: null, types: ["video/vimeo", "video/x-vimeo"] }] }, e.Utility = {
                            encodeUrl: function(e) { return encodeURIComponent(e) },
                            escapeHTML: function(e) { return e.toString().split("&").join("&amp;").split("<").join("&lt;").split('"').join("&quot;") },
                            absolutizeUrl: function(e) { var t = document.createElement("div"); return t.innerHTML = '<a href="' + this.escapeHTML(e) + '">x</a>', t.firstChild.href },
                            getScriptPath: function(e) {
                                for (var t, n, i, r, o, s, a = 0, l = "", u = "", c = document.getElementsByTagName("script"), d = c.length, h = e.length; d > a; a++) {
                                    for (r = c[a].src, n = r.lastIndexOf("/"), n > -1 ? (s = r.substring(n + 1), o = r.substring(0, n + 1)) : (s = r, o = ""), t = 0; h > t; t++)
                                        if (u = e[t], i = s.indexOf(u), i > -1) { l = o; break }
                                    if ("" !== l) break
                                }
                                return l
                            },
                            secondsToTimeCode: function(e, t, n, i) {
                                "undefined" == typeof n ? n = !1 : "undefined" == typeof i && (i = 25);
                                var r = Math.floor(e / 3600) % 24,
                                    o = Math.floor(e / 60) % 60,
                                    s = Math.floor(e % 60),
                                    a = Math.floor((e % 1 * i).toFixed(3)),
                                    l = (t || r > 0 ? (10 > r ? "0" + r : r) + ":" : "") + (10 > o ? "0" + o : o) + ":" + (10 > s ? "0" + s : s) + (n ? ":" + (10 > a ? "0" + a : a) : "");
                                return l
                            },
                            timeCodeToSeconds: function(e, t, n, i) {
                                "undefined" == typeof n ? n = !1 : "undefined" == typeof i && (i = 25);
                                var r = e.split(":"),
                                    o = parseInt(r[0], 10),
                                    s = parseInt(r[1], 10),
                                    a = parseInt(r[2], 10),
                                    l = 0,
                                    u = 0;
                                return n && (l = parseInt(r[3]) / i), u = 3600 * o + 60 * s + a + l
                            },
                            convertSMPTEtoSeconds: function(e) {
                                if ("string" != typeof e) return !1;
                                e = e.replace(",", ".");
                                var t = 0,
                                    n = -1 != e.indexOf(".") ? e.split(".")[1].length : 0,
                                    i = 1;
                                e = e.split(":").reverse();
                                for (var r = 0; r < e.length; r++) i = 1, r > 0 && (i = Math.pow(60, r)), t += Number(e[r]) * i;
                                return Number(t.toFixed(n))
                            },
                            removeSwf: function(t) {
                                var n = document.getElementById(t);
                                n && /object|embed/i.test(n.nodeName) && (e.MediaFeatures.isIE ? (n.style.display = "none", function() { 4 == n.readyState ? e.Utility.removeObjectInIE(t) : setTimeout(arguments.callee, 10) }()) : n.parentNode.removeChild(n))
                            },
                            removeObjectInIE: function(e) {
                                var t = document.getElementById(e);
                                if (t) {
                                    for (var n in t) "function" == typeof t[n] && (t[n] = null);
                                    t.parentNode.removeChild(t)
                                }
                            }
                        }, e.PluginDetector = {
                            hasPluginVersion: function(e, t) { var n = this.plugins[e]; return t[1] = t[1] || 0, t[2] = t[2] || 0, n[0] > t[0] || n[0] == t[0] && n[1] > t[1] || n[0] == t[0] && n[1] == t[1] && n[2] >= t[2] ? !0 : !1 },
                            nav: window.navigator,
                            ua: window.navigator.userAgent.toLowerCase(),
                            plugins: [],
                            addPlugin: function(e, t, n, i, r) { this.plugins[e] = this.detectPlugin(t, n, i, r) },
                            detectPlugin: function(e, t, n, i) {
                                var r, o, s, a = [0, 0, 0];
                                if ("undefined" != typeof this.nav.plugins && "object" == typeof this.nav.plugins[e]) {
                                    if (r = this.nav.plugins[e].description, r && ("undefined" == typeof this.nav.mimeTypes || !this.nav.mimeTypes[t] || this.nav.mimeTypes[t].enabledPlugin))
                                        for (a = r.replace(e, "").replace(/^\s+/, "").replace(/\sr/gi, ".").split("."), o = 0; o < a.length; o++) a[o] = parseInt(a[o].match(/\d+/), 10)
                                } else if ("undefined" != typeof window.ActiveXObject) try { s = new ActiveXObject(n), s && (a = i(s)) } catch (l) {}
                                return a
                            }
                        }, e.PluginDetector.addPlugin("flash", "Shockwave Flash", "application/x-shockwave-flash", "ShockwaveFlash.ShockwaveFlash", function(e) {
                            var t = [],
                                n = e.GetVariable("$version");
                            return n && (n = n.split(" ")[1].split(","), t = [parseInt(n[0], 10), parseInt(n[1], 10), parseInt(n[2], 10)]), t
                        }), e.PluginDetector.addPlugin("silverlight", "Silverlight Plug-In", "application/x-silverlight-2", "AgControl.AgControl", function(e) {
                            var t = [0, 0, 0, 0],
                                n = function(e, t, n, i) {
                                    for (; e.isVersionSupported(t[0] + "." + t[1] + "." + t[2] + "." + t[3]);) t[n] += i;
                                    t[n] -= i
                                };
                            return n(e, t, 0, 1), n(e, t, 1, 1), n(e, t, 2, 1e4), n(e, t, 2, 1e3), n(e, t, 2, 100), n(e, t, 2, 10), n(e, t, 2, 1), n(e, t, 3, 1), t
                        }), e.MediaFeatures = {
                            init: function() {
                                var t, n, i = this,
                                    r = document,
                                    o = e.PluginDetector.nav,
                                    s = e.PluginDetector.ua.toLowerCase(),
                                    a = ["source", "track", "audio", "video"];
                                i.isiPad = null !== s.match(/ipad/i), i.isiPhone = null !== s.match(/iphone/i), i.isiOS = i.isiPhone || i.isiPad, i.isAndroid = null !== s.match(/android/i), i.isBustedAndroid = null !== s.match(/android 2\.[12]/), i.isBustedNativeHTTPS = "https:" === location.protocol && (null !== s.match(/android [12]\./) || null !== s.match(/macintosh.* version.* safari/)), i.isIE = -1 != o.appName.toLowerCase().indexOf("microsoft") || null !== o.appName.toLowerCase().match(/trident/gi), i.isChrome = null !== s.match(/chrome/gi), i.isChromium = null !== s.match(/chromium/gi), i.isFirefox = null !== s.match(/firefox/gi), i.isWebkit = null !== s.match(/webkit/gi), i.isGecko = null !== s.match(/gecko/gi) && !i.isWebkit && !i.isIE, i.isOpera = null !== s.match(/opera/gi), i.hasTouch = "ontouchstart" in window, i.svg = !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect;
                                for (t = 0; t < a.length; t++) n = document.createElement(a[t]);
                                i.supportsMediaTag = "undefined" != typeof n.canPlayType || i.isBustedAndroid;
                                try { n.canPlayType("video/mp4") } catch (l) { i.supportsMediaTag = !1 }
                                i.hasSemiNativeFullScreen = "undefined" != typeof n.webkitEnterFullscreen, i.hasNativeFullscreen = "undefined" != typeof n.requestFullscreen, i.hasWebkitNativeFullScreen = "undefined" != typeof n.webkitRequestFullScreen, i.hasMozNativeFullScreen = "undefined" != typeof n.mozRequestFullScreen, i.hasMsNativeFullScreen = "undefined" != typeof n.msRequestFullscreen, i.hasTrueNativeFullScreen = i.hasWebkitNativeFullScreen || i.hasMozNativeFullScreen || i.hasMsNativeFullScreen, i.nativeFullScreenEnabled = i.hasTrueNativeFullScreen, i.hasMozNativeFullScreen ? i.nativeFullScreenEnabled = document.mozFullScreenEnabled : i.hasMsNativeFullScreen && (i.nativeFullScreenEnabled = document.msFullscreenEnabled), i.isChrome && (i.hasSemiNativeFullScreen = !1), i.hasTrueNativeFullScreen && (i.fullScreenEventName = "", i.hasWebkitNativeFullScreen ? i.fullScreenEventName = "webkitfullscreenchange" : i.hasMozNativeFullScreen ? i.fullScreenEventName = "mozfullscreenchange" : i.hasMsNativeFullScreen && (i.fullScreenEventName = "MSFullscreenChange"), i.isFullScreen = function() { return i.hasMozNativeFullScreen ? r.mozFullScreen : i.hasWebkitNativeFullScreen ? r.webkitIsFullScreen : i.hasMsNativeFullScreen ? null !== r.msFullscreenElement : void 0 }, i.requestFullScreen = function(e) { i.hasWebkitNativeFullScreen ? e.webkitRequestFullScreen() : i.hasMozNativeFullScreen ? e.mozRequestFullScreen() : i.hasMsNativeFullScreen && e.msRequestFullscreen() }, i.cancelFullScreen = function() { i.hasWebkitNativeFullScreen ? document.webkitCancelFullScreen() : i.hasMozNativeFullScreen ? document.mozCancelFullScreen() : i.hasMsNativeFullScreen && document.msExitFullscreen() }), i.hasSemiNativeFullScreen && s.match(/mac os x 10_5/i) && (i.hasNativeFullScreen = !1, i.hasSemiNativeFullScreen = !1)
                            }
                        }, e.MediaFeatures.init(), e.HtmlMediaElement = {
                            pluginType: "native",
                            isFullScreen: !1,
                            setCurrentTime: function(e) { this.currentTime = e },
                            setMuted: function(e) { this.muted = e },
                            setVolume: function(e) { this.volume = e },
                            stop: function() { this.pause() },
                            setSrc: function(e) {
                                for (var t = this.getElementsByTagName("source"); t.length > 0;) this.removeChild(t[0]);
                                if ("string" == typeof e) this.src = e;
                                else {
                                    var n, i;
                                    for (n = 0; n < e.length; n++)
                                        if (i = e[n], this.canPlayType(i.type)) { this.src = i.src; break }
                                }
                            },
                            setVideoSize: function(e, t) { this.width = e, this.height = t }
                        }, e.PluginMediaElement = function(e, t, n) { this.id = e, this.pluginType = t, this.src = n, this.events = {}, this.attributes = {} }, e.PluginMediaElement.prototype = {
                            pluginElement: null,
                            pluginType: "",
                            isFullScreen: !1,
                            playbackRate: -1,
                            defaultPlaybackRate: -1,
                            seekable: [],
                            played: [],
                            paused: !0,
                            ended: !1,
                            seeking: !1,
                            duration: 0,
                            error: null,
                            tagName: "",
                            muted: !1,
                            volume: 1,
                            currentTime: 0,
                            play: function() { null != this.pluginApi && ("youtube" == this.pluginType || "vimeo" == this.pluginType ? this.pluginApi.playVideo() : this.pluginApi.playMedia(), this.paused = !1) },
                            load: function() { null != this.pluginApi && ("youtube" == this.pluginType || "vimeo" == this.pluginType || this.pluginApi.loadMedia(), this.paused = !1) },
                            pause: function() { null != this.pluginApi && ("youtube" == this.pluginType || "vimeo" == this.pluginType ? this.pluginApi.pauseVideo() : this.pluginApi.pauseMedia(), this.paused = !0) },
                            stop: function() { null != this.pluginApi && ("youtube" == this.pluginType || "vimeo" == this.pluginType ? this.pluginApi.stopVideo() : this.pluginApi.stopMedia(), this.paused = !0) },
                            canPlayType: function(t) {
                                var n, i, r, o = e.plugins[this.pluginType];
                                for (n = 0; n < o.length; n++)
                                    if (r = o[n], e.PluginDetector.hasPluginVersion(this.pluginType, r.version))
                                        for (i = 0; i < r.types.length; i++)
                                            if (t == r.types[i]) return "probably";
                                return ""
                            },
                            positionFullscreenButton: function(e, t, n) { null != this.pluginApi && this.pluginApi.positionFullscreenButton && this.pluginApi.positionFullscreenButton(Math.floor(e), Math.floor(t), n) },
                            hideFullscreenButton: function() { null != this.pluginApi && this.pluginApi.hideFullscreenButton && this.pluginApi.hideFullscreenButton() },
                            setSrc: function(t) {
                                if ("string" == typeof t) this.pluginApi.setSrc(e.Utility.absolutizeUrl(t)), this.src = e.Utility.absolutizeUrl(t);
                                else {
                                    var n, i;
                                    for (n = 0; n < t.length; n++)
                                        if (i = t[n], this.canPlayType(i.type)) { this.pluginApi.setSrc(e.Utility.absolutizeUrl(i.src)), this.src = e.Utility.absolutizeUrl(t); break }
                                }
                            },
                            setCurrentTime: function(e) { null != this.pluginApi && ("youtube" == this.pluginType || "vimeo" == this.pluginType ? this.pluginApi.seekTo(e) : this.pluginApi.setCurrentTime(e), this.currentTime = e) },
                            setVolume: function(e) { null != this.pluginApi && (this.pluginApi.setVolume("youtube" == this.pluginType ? 100 * e : e), this.volume = e) },
                            setMuted: function(e) { null != this.pluginApi && ("youtube" == this.pluginType ? (e ? this.pluginApi.mute() : this.pluginApi.unMute(), this.muted = e, this.dispatchEvent("volumechange")) : this.pluginApi.setMuted(e), this.muted = e) },
                            setVideoSize: function(e, t) { this.pluginElement && this.pluginElement.style && (this.pluginElement.style.width = e + "px", this.pluginElement.style.height = t + "px"), null != this.pluginApi && this.pluginApi.setVideoSize && this.pluginApi.setVideoSize(e, t) },
                            setFullscreen: function(e) { null != this.pluginApi && this.pluginApi.setFullscreen && this.pluginApi.setFullscreen(e) },
                            enterFullScreen: function() { null != this.pluginApi && this.pluginApi.setFullscreen && this.setFullscreen(!0) },
                            exitFullScreen: function() { null != this.pluginApi && this.pluginApi.setFullscreen && this.setFullscreen(!1) },
                            addEventListener: function(e, t) { this.events[e] = this.events[e] || [], this.events[e].push(t) },
                            removeEventListener: function(e, t) {
                                if (!e) return this.events = {}, !0;
                                var n = this.events[e];
                                if (!n) return !0;
                                if (!t) return this.events[e] = [], !0;
                                for (var i = 0; i < n.length; i++)
                                    if (n[i] === t) return this.events[e].splice(i, 1), !0;
                                return !1
                            },
                            dispatchEvent: function(e) {
                                var t, n, i = this.events[e];
                                if (i)
                                    for (n = Array.prototype.slice.call(arguments, 1), t = 0; t < i.length; t++) i[t].apply(this, n)
                            },
                            hasAttribute: function(e) { return e in this.attributes },
                            removeAttribute: function(e) { delete this.attributes[e] },
                            getAttribute: function(e) { return this.hasAttribute(e) ? this.attributes[e] : "" },
                            setAttribute: function(e, t) { this.attributes[e] = t },
                            remove: function() { e.Utility.removeSwf(this.pluginElement.id), e.MediaPluginBridge.unregisterPluginElement(this.pluginElement.id) }
                        }, e.MediaPluginBridge = {
                            pluginMediaElements: {},
                            htmlMediaElements: {},
                            registerPluginElement: function(e, t, n) { this.pluginMediaElements[e] = t, this.htmlMediaElements[e] = n },
                            unregisterPluginElement: function(e) { delete this.pluginMediaElements[e], delete this.htmlMediaElements[e] },
                            initPlugin: function(e) {
                                var t = this.pluginMediaElements[e],
                                    n = this.htmlMediaElements[e];
                                if (t) {
                                    switch (t.pluginType) {
                                        case "flash":
                                            t.pluginElement = t.pluginApi = document.getElementById(e);
                                            break;
                                        case "silverlight":
                                            t.pluginElement = document.getElementById(t.id), t.pluginApi = t.pluginElement.Content.MediaElementJS
                                    }
                                    null != t.pluginApi && t.success && t.success(t, n)
                                }
                            },
                            fireEvent: function(e, t, n) {
                                var i, r, o, s = this.pluginMediaElements[e];
                                if (s) {
                                    i = { type: t, target: s };
                                    for (r in n) s[r] = n[r], i[r] = n[r];
                                    o = n.bufferedTime || 0, i.target.buffered = i.buffered = { start: function() { return 0 }, end: function() { return o }, length: 1 }, s.dispatchEvent(i.type, i)
                                }
                            }
                        }, e.MediaElementDefaults = { mode: "auto", plugins: ["flash", "silverlight", "youtube", "vimeo"], enablePluginDebug: !1, httpsBasicAuthSite: !1, type: "", pluginPath: e.Utility.getScriptPath(["mediaelement.js", "mediaelement.min.js", "mediaelement-and-player.js", "mediaelement-and-player.min.js"]), flashName: "flashmediaelement.swf", flashStreamer: "", enablePluginSmoothing: !1, enablePseudoStreaming: !1, pseudoStreamingStartQueryParam: "start", silverlightName: "silverlightmediaelement.xap", defaultVideoWidth: 480, defaultVideoHeight: 270, pluginWidth: -1, pluginHeight: -1, pluginVars: [], timerRate: 250, startVolume: .8, success: function() {}, error: function() {} }, e.MediaElement = function(t, n) { return e.HtmlMediaElementShim.create(t, n) }, e.HtmlMediaElementShim = {
                            create: function(t, n) {
                                var i, r, o = e.MediaElementDefaults,
                                    s = "string" == typeof t ? document.getElementById(t) : t,
                                    a = s.tagName.toLowerCase(),
                                    l = "audio" === a || "video" === a,
                                    u = s.getAttribute(l ? "src" : "href"),
                                    c = s.getAttribute("poster"),
                                    d = s.getAttribute("autoplay"),
                                    h = s.getAttribute("preload"),
                                    p = s.getAttribute("controls");
                                for (r in n) o[r] = n[r];
                                return u = "undefined" == typeof u || null === u || "" == u ? null : u, c = "undefined" == typeof c || null === c ? "" : c, h = "undefined" == typeof h || null === h || "false" === h ? "none" : h, d = !("undefined" == typeof d || null === d || "false" === d), p = !("undefined" == typeof p || null === p || "false" === p), i = this.determinePlayback(s, o, e.MediaFeatures.supportsMediaTag, l, u), i.url = null !== i.url ? e.Utility.absolutizeUrl(i.url) : "", "native" == i.method ? (e.MediaFeatures.isBustedAndroid && (s.src = i.url, s.addEventListener("click", function() { s.play() }, !1)), this.updateNative(i, o, d, h)) : "" !== i.method ? this.createPlugin(i, o, c, d, h, p) : (this.createErrorMessage(i, o, c), this)
                            },
                            determinePlayback: function(t, n, i, r, o) {
                                var s, a, l, u, c, d, h, p, f, m, g, v = [],
                                    y = { method: "", url: "", htmlMediaElement: t, isVideo: "audio" != t.tagName.toLowerCase() };
                                if ("undefined" != typeof n.type && "" !== n.type)
                                    if ("string" == typeof n.type) v.push({ type: n.type, url: o });
                                    else
                                        for (s = 0; s < n.type.length; s++) v.push({ type: n.type[s], url: o });
                                else if (null !== o) d = this.formatType(o, t.getAttribute("type")), v.push({ type: d, url: o });
                                else
                                    for (s = 0; s < t.childNodes.length; s++) c = t.childNodes[s], 1 == c.nodeType && "source" == c.tagName.toLowerCase() && (o = c.getAttribute("src"), d = this.formatType(o, c.getAttribute("type")), g = c.getAttribute("media"), (!g || !window.matchMedia || window.matchMedia && window.matchMedia(g).matches) && v.push({ type: d, url: o }));
                                if (!r && v.length > 0 && null !== v[0].url && this.getTypeFromFile(v[0].url).indexOf("audio") > -1 && (y.isVideo = !1), e.MediaFeatures.isBustedAndroid && (t.canPlayType = function(e) { return null !== e.match(/video\/(mp4|m4v)/gi) ? "maybe" : "" }), e.MediaFeatures.isChromium && (t.canPlayType = function(e) { return null !== e.match(/video\/(webm|ogv|ogg)/gi) ? "maybe" : "" }), !(!i || "auto" !== n.mode && "auto_plugin" !== n.mode && "native" !== n.mode || e.MediaFeatures.isBustedNativeHTTPS && n.httpsBasicAuthSite === !0)) {
                                    for (r || (m = document.createElement(y.isVideo ? "video" : "audio"), t.parentNode.insertBefore(m, t), t.style.display = "none", y.htmlMediaElement = t = m), s = 0; s < v.length; s++)
                                        if ("video/m3u8" == v[s].type || "" !== t.canPlayType(v[s].type).replace(/no/, "") || "" !== t.canPlayType(v[s].type.replace(/mp3/, "mpeg")).replace(/no/, "") || "" !== t.canPlayType(v[s].type.replace(/m4a/, "mp4")).replace(/no/, "")) { y.method = "native", y.url = v[s].url; break }
                                    if ("native" === y.method && (null !== y.url && (t.src = y.url), "auto_plugin" !== n.mode)) return y
                                }
                                if ("auto" === n.mode || "auto_plugin" === n.mode || "shim" === n.mode)
                                    for (s = 0; s < v.length; s++)
                                        for (d = v[s].type, a = 0; a < n.plugins.length; a++)
                                            for (h = n.plugins[a], p = e.plugins[h], l = 0; l < p.length; l++)
                                                if (f = p[l], null == f.version || e.PluginDetector.hasPluginVersion(h, f.version))
                                                    for (u = 0; u < f.types.length; u++)
                                                        if (d == f.types[u]) return y.method = h, y.url = v[s].url, y;
                                return "auto_plugin" === n.mode && "native" === y.method ? y : ("" === y.method && v.length > 0 && (y.url = v[0].url), y)
                            },
                            formatType: function(e, t) { return e && !t ? this.getTypeFromFile(e) : t && ~t.indexOf(";") ? t.substr(0, t.indexOf(";")) : t },
                            getTypeFromFile: function(e) { e = e.split("?")[0]; var t = e.substring(e.lastIndexOf(".") + 1).toLowerCase(); return (/(mp4|m4v|ogg|ogv|m3u8|webm|webmv|flv|wmv|mpeg|mov)/gi.test(t) ? "video" : "audio") + "/" + this.getTypeFromExtension(t) },
                            getTypeFromExtension: function(e) {
                                switch (e) {
                                    case "mp4":
                                    case "m4v":
                                    case "m4a":
                                        return "mp4";
                                    case "webm":
                                    case "webma":
                                    case "webmv":
                                        return "webm";
                                    case "ogg":
                                    case "oga":
                                    case "ogv":
                                        return "ogg";
                                    default:
                                        return e
                                }
                            },
                            createErrorMessage: function(t, n, i) {
                                var r = t.htmlMediaElement,
                                    o = document.createElement("div");
                                o.className = "me-cannotplay";
                                try { o.style.width = r.width + "px", o.style.height = r.height + "px" } catch (s) {}
                                o.innerHTML = n.customError ? n.customError : "" !== i ? '<a href="' + t.url + '"><img src="' + i + '" width="100%" height="100%" /></a>' : '<a href="' + t.url + '"><span>' + e.i18n.t("Download File") + "</span></a>", r.parentNode.insertBefore(o, r), r.style.display = "none", n.error(r)
                            },
                            createPlugin: function(t, n, i, r, o, s) {
                                var a, l, u, c = t.htmlMediaElement,
                                    d = 1,
                                    h = 1,
                                    p = "me_" + t.method + "_" + e.meIndex++,
                                    f = new e.PluginMediaElement(p, t.method, t.url),
                                    m = document.createElement("div");
                                f.tagName = c.tagName;
                                for (var g = 0; g < c.attributes.length; g++) {
                                    var v = c.attributes[g];
                                    1 == v.specified && f.setAttribute(v.name, v.value)
                                }
                                for (l = c.parentNode; null !== l && "body" !== l.tagName.toLowerCase() && null != l.parentNode;) {
                                    if ("p" === l.parentNode.tagName.toLowerCase()) { l.parentNode.parentNode.insertBefore(l, l.parentNode); break }
                                    l = l.parentNode
                                }
                                switch (t.isVideo ? (d = n.pluginWidth > 0 ? n.pluginWidth : n.videoWidth > 0 ? n.videoWidth : null !== c.getAttribute("width") ? c.getAttribute("width") : n.defaultVideoWidth, h = n.pluginHeight > 0 ? n.pluginHeight : n.videoHeight > 0 ? n.videoHeight : null !== c.getAttribute("height") ? c.getAttribute("height") : n.defaultVideoHeight, d = e.Utility.encodeUrl(d), h = e.Utility.encodeUrl(h)) : n.enablePluginDebug && (d = 320, h = 240), f.success = n.success, e.MediaPluginBridge.registerPluginElement(p, f, c), m.className = "me-plugin", m.id = p + "_container", t.isVideo ? c.parentNode.insertBefore(m, c) : document.body.insertBefore(m, document.body.childNodes[0]), u = ["id=" + p, "jsinitfunction=mejs.MediaPluginBridge.initPlugin", "jscallbackfunction=mejs.MediaPluginBridge.fireEvent", "isvideo=" + (t.isVideo ? "true" : "false"), "autoplay=" + (r ? "true" : "false"), "preload=" + o, "width=" + d, "startvolume=" + n.startVolume, "timerrate=" + n.timerRate, "flashstreamer=" + n.flashStreamer, "height=" + h, "pseudostreamstart=" + n.pseudoStreamingStartQueryParam], null !== t.url && u.push("flash" == t.method ? "file=" + e.Utility.encodeUrl(t.url) : "file=" + t.url), n.enablePluginDebug && u.push("debug=true"), n.enablePluginSmoothing && u.push("smoothing=true"), n.enablePseudoStreaming && u.push("pseudostreaming=true"), s && u.push("controls=true"), n.pluginVars && (u = u.concat(n.pluginVars)), t.method) {
                                    case "silverlight":
                                        m.innerHTML = '<object data="data:application/x-silverlight-2," type="application/x-silverlight-2" id="' + p + '" name="' + p + '" width="' + d + '" height="' + h + '" class="mejs-shim"><param name="initParams" value="' + u.join(",") + '" /><param name="windowless" value="true" /><param name="background" value="black" /><param name="minRuntimeVersion" value="3.0.0.0" /><param name="autoUpgrade" value="true" /><param name="source" value="' + n.pluginPath + n.silverlightName + '" /></object>';
                                        break;
                                    case "flash":
                                        e.MediaFeatures.isIE ? (a = document.createElement("div"), m.appendChild(a), a.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="' + p + '" width="' + d + '" height="' + h + '" class="mejs-shim"><param name="movie" value="' + n.pluginPath + n.flashName + "?x=" + new Date + '" /><param name="flashvars" value="' + u.join("&amp;") + '" /><param name="quality" value="high" /><param name="bgcolor" value="#000000" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="true" /><param name="scale" value="default" /></object>') : m.innerHTML = '<embed id="' + p + '" name="' + p + '" play="true" loop="false" quality="high" bgcolor="#000000" wmode="transparent" allowScriptAccess="always" allowFullScreen="true" type="application/x-shockwave-flash" pluginspage="//www.macromedia.com/go/getflashplayer" src="' + n.pluginPath + n.flashName + '" flashvars="' + u.join("&") + '" width="' + d + '" height="' + h + '" scale="default"class="mejs-shim"></embed>';
                                        break;
                                    case "youtube":
                                        var y; - 1 != t.url.lastIndexOf("youtu.be") ? (y = t.url.substr(t.url.lastIndexOf("/") + 1), -1 != y.indexOf("?") && (y = y.substr(0, y.indexOf("?")))) : y = t.url.substr(t.url.lastIndexOf("=") + 1), youtubeSettings = { container: m, containerId: m.id, pluginMediaElement: f, pluginId: p, videoId: y, height: h, width: d }, e.PluginDetector.hasPluginVersion("flash", [10, 0, 0]) ? e.YouTubeApi.createFlash(youtubeSettings) : e.YouTubeApi.enqueueIframe(youtubeSettings);
                                        break;
                                    case "vimeo":
                                        var b = p + "_player";
                                        if (f.vimeoid = t.url.substr(t.url.lastIndexOf("/") + 1), m.innerHTML = '<iframe src="//player.vimeo.com/video/' + f.vimeoid + "?api=1&portrait=0&byline=0&title=0&player_id=" + b + '" width="' + d + '" height="' + h + '" frameborder="0" class="mejs-shim" id="' + b + '" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>', "function" == typeof $f) {
                                            var w = $f(m.childNodes[0]);
                                            w.addEvent("ready", function() {
                                                function t(e, t, n, i) { var r = { type: n, target: t }; "timeupdate" == n && (t.currentTime = r.currentTime = i.seconds, t.duration = r.duration = i.duration), t.dispatchEvent(r.type, r) }
                                                $.extend(w, { playVideo: function() { w.api("play") }, stopVideo: function() { w.api("unload") }, pauseVideo: function() { w.api("pause") }, seekTo: function(e) { w.api("seekTo", e) }, setVolume: function(e) { w.api("setVolume", e) }, setMuted: function(e) { e ? (w.lastVolume = w.api("getVolume"), w.api("setVolume", 0)) : (w.api("setVolume", w.lastVolume), delete w.lastVolume) } }), w.addEvent("play", function() { t(w, f, "play"), t(w, f, "playing") }), w.addEvent("pause", function() { t(w, f, "pause") }), w.addEvent("finish", function() { t(w, f, "ended") }), w.addEvent("playProgress", function(e) { t(w, f, "timeupdate", e) }), f.pluginElement = m, f.pluginApi = w, e.MediaPluginBridge.initPlugin(p)
                                            })
                                        } else console.warn("You need to include froogaloop for vimeo to work")
                                }
                                return c.style.display = "none", c.removeAttribute("autoplay"), f
                            },
                            updateNative: function(t, n) { var i, r = t.htmlMediaElement; for (i in e.HtmlMediaElement) r[i] = e.HtmlMediaElement[i]; return n.success(r, r), r }
                        }, e.YouTubeApi = {
                            isIframeStarted: !1,
                            isIframeLoaded: !1,
                            loadIframeApi: function() {
                                if (!this.isIframeStarted) {
                                    var e = document.createElement("script");
                                    e.src = "//www.youtube.com/player_api";
                                    var t = document.getElementsByTagName("script")[0];
                                    t.parentNode.insertBefore(e, t), this.isIframeStarted = !0
                                }
                            },
                            iframeQueue: [],
                            enqueueIframe: function(e) { this.isLoaded ? this.createIframe(e) : (this.loadIframeApi(), this.iframeQueue.push(e)) },
                            createIframe: function(t) {
                                var n = t.pluginMediaElement,
                                    i = new YT.Player(t.containerId, { height: t.height, width: t.width, videoId: t.videoId, playerVars: { controls: 0 }, events: { onReady: function() { t.pluginMediaElement.pluginApi = i, e.MediaPluginBridge.initPlugin(t.pluginId), setInterval(function() { e.YouTubeApi.createEvent(i, n, "timeupdate") }, 250) }, onStateChange: function(t) { e.YouTubeApi.handleStateChange(t.data, i, n) } } })
                            },
                            createEvent: function(e, t, n) {
                                var i = { type: n, target: t };
                                if (e && e.getDuration) {
                                    t.currentTime = i.currentTime = e.getCurrentTime(), t.duration = i.duration = e.getDuration(), i.paused = t.paused, i.ended = t.ended, i.muted = e.isMuted(), i.volume = e.getVolume() / 100, i.bytesTotal = e.getVideoBytesTotal(), i.bufferedBytes = e.getVideoBytesLoaded();
                                    var r = i.bufferedBytes / i.bytesTotal * i.duration;
                                    i.target.buffered = i.buffered = { start: function() { return 0 }, end: function() { return r }, length: 1 }
                                }
                                t.dispatchEvent(i.type, i)
                            },
                            iFrameReady: function() {
                                for (this.isLoaded = !0, this.isIframeLoaded = !0; this.iframeQueue.length > 0;) {
                                    var e = this.iframeQueue.pop();
                                    this.createIframe(e)
                                }
                            },
                            flashPlayers: {},
                            createFlash: function(t) {
                                this.flashPlayers[t.pluginId] = t;
                                var n, i = "//www.youtube.com/apiplayer?enablejsapi=1&amp;playerapiid=" + t.pluginId + "&amp;version=3&amp;autoplay=0&amp;controls=0&amp;modestbranding=1&loop=0";
                                e.MediaFeatures.isIE ? (n = document.createElement("div"), t.container.appendChild(n), n.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="' + t.pluginId + '" width="' + t.width + '" height="' + t.height + '" class="mejs-shim"><param name="movie" value="' + i + '" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="true" /></object>') : t.container.innerHTML = '<object type="application/x-shockwave-flash" id="' + t.pluginId + '" data="' + i + '" width="' + t.width + '" height="' + t.height + '" style="visibility: visible; " class="mejs-shim"><param name="allowScriptAccess" value="always"><param name="wmode" value="transparent"></object>'
                            },
                            flashReady: function(t) {
                                var n = this.flashPlayers[t],
                                    i = document.getElementById(t),
                                    r = n.pluginMediaElement;
                                r.pluginApi = r.pluginElement = i, e.MediaPluginBridge.initPlugin(t), i.cueVideoById(n.videoId);
                                var o = n.containerId + "_callback";
                                window[o] = function(t) { e.YouTubeApi.handleStateChange(t, i, r) }, i.addEventListener("onStateChange", o), setInterval(function() { e.YouTubeApi.createEvent(i, r, "timeupdate") }, 250), e.YouTubeApi.createEvent(i, r, "canplay")
                            },
                            handleStateChange: function(t, n, i) {
                                switch (t) {
                                    case -1:
                                        i.paused = !0, i.ended = !0, e.YouTubeApi.createEvent(n, i, "loadedmetadata");
                                        break;
                                    case 0:
                                        i.paused = !1, i.ended = !0, e.YouTubeApi.createEvent(n, i, "ended");
                                        break;
                                    case 1:
                                        i.paused = !1, i.ended = !1, e.YouTubeApi.createEvent(n, i, "play"), e.YouTubeApi.createEvent(n, i, "playing");
                                        break;
                                    case 2:
                                        i.paused = !0, i.ended = !1, e.YouTubeApi.createEvent(n, i, "pause");
                                        break;
                                    case 3:
                                        e.YouTubeApi.createEvent(n, i, "progress");
                                        break;
                                    case 5:
                                }
                            }
                        }, window.mejs = e, window.MediaElement = e.MediaElement,
                        function(e, t) {
                            "use strict";
                            var n = { locale: { language: t.i18n && t.i18n.locale.language || "", strings: t.i18n && t.i18n.locale.strings || {} }, ietf_lang_regex: /^(x\-)?[a-z]{2,}(\-\w{2,})?(\-\w{2,})?$/, methods: {} };
                            n.getLanguage = function() { var e = n.locale.language || window.navigator.userLanguage || window.navigator.language; return n.ietf_lang_regex.exec(e) ? e : null }, "undefined" != typeof mejsL10n && (n.locale.language = mejsL10n.language), n.methods.checkPlain = function(e) {
                                var t, n, i = { "&": "&amp;", '"': "&quot;", "<": "&lt;", ">": "&gt;" };
                                e = String(e);
                                for (t in i) i.hasOwnProperty(t) && (n = new RegExp(t, "g"), e = e.replace(n, i[t]));
                                return e
                            }, n.methods.t = function(e, t) { return n.locale.strings && n.locale.strings[t.context] && n.locale.strings[t.context][e] && (e = n.locale.strings[t.context][e]), n.methods.checkPlain(e) }, n.t = function(e, t) { if ("string" == typeof e && e.length > 0) { var i = n.getLanguage(); return t = t || { context: i }, n.methods.t(e, t) } throw { name: "InvalidArgumentException", message: "First argument is either not a string or empty." } }, t.i18n = n
                        }(document, e),
                        function(e) { "use strict"; "undefined" != typeof mejsL10n && (e[mejsL10n.language] = mejsL10n.strings) }(e.i18n.locale.strings), "undefined" != typeof jQuery ? e.$ = jQuery : "undefined" != typeof ender && (e.$ = ender),
                        function(t) {
                            e.MepDefaults = {
                                    poster: "",
                                    showPosterWhenEnded: !1,
                                    defaultVideoWidth: 480,
                                    defaultVideoHeight: 270,
                                    videoWidth: -1,
                                    videoHeight: -1,
                                    defaultAudioWidth: 400,
                                    defaultAudioHeight: 30,
                                    defaultSeekBackwardInterval: function(e) { return .05 * e.duration },
                                    defaultSeekForwardInterval: function(e) { return .05 * e.duration },
                                    setDimensions: !0,
                                    audioWidth: -1,
                                    audioHeight: -1,
                                    startVolume: .8,
                                    loop: !1,
                                    autoRewind: !0,
                                    enableAutosize: !0,
                                    alwaysShowHours: !1,
                                    showTimecodeFrameCount: !1,
                                    framesPerSecond: 25,
                                    autosizeProgress: !0,
                                    alwaysShowControls: !1,
                                    hideVideoControlsOnLoad: !1,
                                    clickToPlayPause: !0,
                                    iPadUseNativeControls: !1,
                                    iPhoneUseNativeControls: !1,
                                    AndroidUseNativeControls: !1,
                                    features: ["playpause", "current", "progress", "duration", "tracks", "volume", "fullscreen"],
                                    isVideo: !0,
                                    enableKeyboard: !0,
                                    pauseOtherPlayers: !0,
                                    keyActions: [{ keys: [32, 179], action: function(e, t) { t.paused || t.ended ? e.play() : e.pause() } }, {
                                        keys: [38],
                                        action: function(e, t) {
                                            e.container.find(".mejs-volume-slider").css("display", "block"), e.isVideo && (e.showControls(), e.startControlsTimer());
                                            var n = Math.min(t.volume + .1, 1);
                                            t.setVolume(n)
                                        }
                                    }, {
                                        keys: [40],
                                        action: function(e, t) {
                                            e.container.find(".mejs-volume-slider").css("display", "block"), e.isVideo && (e.showControls(), e.startControlsTimer());
                                            var n = Math.max(t.volume - .1, 0);
                                            t.setVolume(n)
                                        }
                                    }, {
                                        keys: [37, 227],
                                        action: function(e, t) {
                                            if (!isNaN(t.duration) && t.duration > 0) {
                                                e.isVideo && (e.showControls(), e.startControlsTimer());
                                                var n = Math.max(t.currentTime - e.options.defaultSeekBackwardInterval(t), 0);
                                                t.setCurrentTime(n)
                                            }
                                        }
                                    }, {
                                        keys: [39, 228],
                                        action: function(e, t) {
                                            if (!isNaN(t.duration) && t.duration > 0) {
                                                e.isVideo && (e.showControls(), e.startControlsTimer());
                                                var n = Math.min(t.currentTime + e.options.defaultSeekForwardInterval(t), t.duration);
                                                t.setCurrentTime(n)
                                            }
                                        }
                                    }, { keys: [70], action: function(e) { "undefined" != typeof e.enterFullScreen && (e.isFullScreen ? e.exitFullScreen() : e.enterFullScreen()) } }, { keys: [77], action: function(e) { e.container.find(".mejs-volume-slider").css("display", "block"), e.isVideo && (e.showControls(), e.startControlsTimer()), e.setMuted(e.media.muted ? !1 : !0) } }]
                                }, e.mepIndex = 0, e.players = {}, e.MediaElementPlayer = function(n, i) { if (!(this instanceof e.MediaElementPlayer)) return new e.MediaElementPlayer(n, i); var r = this; return r.$media = r.$node = t(n), r.node = r.media = r.$media[0], "undefined" != typeof r.node.player ? r.node.player : (r.node.player = r, "undefined" == typeof i && (i = r.$node.data("mejsoptions")), r.options = t.extend({}, e.MepDefaults, i), r.id = "mep_" + e.mepIndex++, e.players[r.id] = r, r.init(), r) }, e.MediaElementPlayer.prototype = {
                                    hasFocus: !1,
                                    controlsAreVisible: !0,
                                    init: function() {
                                        var n = this,
                                            i = e.MediaFeatures,
                                            r = t.extend(!0, {}, n.options, { success: function(e, t) { n.meReady(e, t) }, error: function(e) { n.handleError(e) } }),
                                            o = n.media.tagName.toLowerCase();
                                        if (n.isDynamic = "audio" !== o && "video" !== o, n.isVideo = n.isDynamic ? n.options.isVideo : "audio" !== o && n.options.isVideo, i.isiPad && n.options.iPadUseNativeControls || i.isiPhone && n.options.iPhoneUseNativeControls) n.$media.attr("controls", "controls"), i.isiPad && null !== n.media.getAttribute("autoplay") && n.play();
                                        else if (i.isAndroid && n.options.AndroidUseNativeControls);
                                        else {
                                            n.$media.removeAttr("controls");
                                            var s = e.i18n.t(n.isVideo ? "Video Player" : "Audio Player");
                                            if (t('<span class="mejs-offscreen">' + s + "</span>").insertBefore(n.$media), n.container = t('<div id="' + n.id + '" class="mejs-container ' + (e.MediaFeatures.svg ? "svg" : "no-svg") + '" tabindex="0" role="application" aria-label="' + s + '"><div class="mejs-inner"><div class="mejs-mediaelement"></div><div class="mejs-layers"></div><div class="mejs-controls"></div><div class="mejs-clear"></div></div></div>').addClass(n.$media[0].className).insertBefore(n.$media).focus(function() {
                                                    if (!n.controlsAreVisible) {
                                                        n.showControls(!0);
                                                        var e = n.container.find(".mejs-playpause-button > button");
                                                        e.focus()
                                                    }
                                                }), n.container.addClass((i.isAndroid ? "mejs-android " : "") + (i.isiOS ? "mejs-ios " : "") + (i.isiPad ? "mejs-ipad " : "") + (i.isiPhone ? "mejs-iphone " : "") + (n.isVideo ? "mejs-video " : "mejs-audio ")), i.isiOS) {
                                                var a = n.$media.clone();
                                                n.container.find(".mejs-mediaelement").append(a), n.$media.remove(), n.$node = n.$media = a, n.node = n.media = a[0]
                                            } else n.container.find(".mejs-mediaelement").append(n.$media);
                                            n.controls = n.container.find(".mejs-controls"), n.layers = n.container.find(".mejs-layers");
                                            var l = n.isVideo ? "video" : "audio",
                                                u = l.substring(0, 1).toUpperCase() + l.substring(1);
                                            n.width = n.options[l + "Width"] > 0 || n.options[l + "Width"].toString().indexOf("%") > -1 ? n.options[l + "Width"] : "" !== n.media.style.width && null !== n.media.style.width ? n.media.style.width : null !== n.media.getAttribute("width") ? n.$media.attr("width") : n.options["default" + u + "Width"], n.height = n.options[l + "Height"] > 0 || n.options[l + "Height"].toString().indexOf("%") > -1 ? n.options[l + "Height"] : "" !== n.media.style.height && null !== n.media.style.height ? n.media.style.height : null !== n.$media[0].getAttribute("height") ? n.$media.attr("height") : n.options["default" + u + "Height"], n.setPlayerSize(n.width, n.height), r.pluginWidth = n.width, r.pluginHeight = n.height
                                        }
                                        e.MediaElement(n.$media[0], r), "undefined" != typeof n.container && n.controlsAreVisible && n.container.trigger("controlsshown")
                                    },
                                    showControls: function(e) {
                                        var t = this;
                                        e = "undefined" == typeof e || e, t.controlsAreVisible || (e ? (t.controls.css("visibility", "visible").stop(!0, !0).fadeIn(200, function() { t.controlsAreVisible = !0, t.container.trigger("controlsshown") }), t.container.find(".mejs-control").css("visibility", "visible").stop(!0, !0).fadeIn(200, function() { t.controlsAreVisible = !0 })) : (t.controls.css("visibility", "visible").css("display", "block"), t.container.find(".mejs-control").css("visibility", "visible").css("display", "block"), t.controlsAreVisible = !0, t.container.trigger("controlsshown")), t.setControlsSize())
                                    },
                                    hideControls: function(e) {
                                        var n = this;
                                        e = "undefined" == typeof e || e, !n.controlsAreVisible || n.options.alwaysShowControls || n.keyboardAction || (e ? (n.controls.stop(!0, !0).fadeOut(200, function() { t(this).css("visibility", "hidden").css("display", "block"), n.controlsAreVisible = !1, n.container.trigger("controlshidden") }), n.container.find(".mejs-control").stop(!0, !0).fadeOut(200, function() { t(this).css("visibility", "hidden").css("display", "block") })) : (n.controls.css("visibility", "hidden").css("display", "block"), n.container.find(".mejs-control").css("visibility", "hidden").css("display", "block"), n.controlsAreVisible = !1, n.container.trigger("controlshidden")))
                                    },
                                    controlsTimer: null,
                                    startControlsTimer: function(e) {
                                        var t = this;
                                        e = "undefined" != typeof e ? e : 1500, t.killControlsTimer("start"), t.controlsTimer = setTimeout(function() { t.hideControls(), t.killControlsTimer("hide") }, e)
                                    },
                                    killControlsTimer: function() {
                                        var e = this;
                                        null !== e.controlsTimer && (clearTimeout(e.controlsTimer), delete e.controlsTimer, e.controlsTimer = null)
                                    },
                                    controlsEnabled: !0,
                                    disableControls: function() {
                                        var e = this;
                                        e.killControlsTimer(), e.hideControls(!1), this.controlsEnabled = !1
                                    },
                                    enableControls: function() {
                                        var e = this;
                                        e.showControls(!1), e.controlsEnabled = !0
                                    },
                                    meReady: function(n, i) {
                                        var r, o, s = this,
                                            a = e.MediaFeatures,
                                            l = i.getAttribute("autoplay"),
                                            u = !("undefined" == typeof l || null === l || "false" === l);
                                        if (!s.created) {
                                            if (s.created = !0, s.media = n, s.domNode = i, !(a.isAndroid && s.options.AndroidUseNativeControls || a.isiPad && s.options.iPadUseNativeControls || a.isiPhone && s.options.iPhoneUseNativeControls)) {
                                                s.buildposter(s, s.controls, s.layers, s.media), s.buildkeyboard(s, s.controls, s.layers, s.media), s.buildoverlays(s, s.controls, s.layers, s.media), s.findTracks();
                                                for (r in s.options.features)
                                                    if (o = s.options.features[r], s["build" + o]) try { s["build" + o](s, s.controls, s.layers, s.media) } catch (c) {}
                                                s.container.trigger("controlsready"), s.setPlayerSize(s.width, s.height), s.setControlsSize(), s.isVideo && (e.MediaFeatures.hasTouch ? s.$media.bind("touchstart", function() { s.controlsAreVisible ? s.hideControls(!1) : s.controlsEnabled && s.showControls(!1) }) : (s.clickToPlayPauseCallback = function() { s.options.clickToPlayPause && (s.media.paused ? s.play() : s.pause()) }, s.media.addEventListener("click", s.clickToPlayPauseCallback, !1), s.container.bind("mouseenter mouseover", function() { s.controlsEnabled && (s.options.alwaysShowControls || (s.killControlsTimer("enter"), s.showControls(), s.startControlsTimer(2500))) }).bind("mousemove", function() { s.controlsEnabled && (s.controlsAreVisible || s.showControls(), s.options.alwaysShowControls || s.startControlsTimer(2500)) }).bind("mouseleave", function() { s.controlsEnabled && (s.media.paused || s.options.alwaysShowControls || s.startControlsTimer(1e3)) })), s.options.hideVideoControlsOnLoad && s.hideControls(!1), u && !s.options.alwaysShowControls && s.hideControls(), s.options.enableAutosize && s.media.addEventListener("loadedmetadata", function(e) { s.options.videoHeight <= 0 && null === s.domNode.getAttribute("height") && !isNaN(e.target.videoHeight) && (s.setPlayerSize(e.target.videoWidth, e.target.videoHeight), s.setControlsSize(), s.media.setVideoSize(e.target.videoWidth, e.target.videoHeight)) }, !1)), n.addEventListener("play", function() {
                                                    var t;
                                                    for (t in e.players) {
                                                        var n = e.players[t];
                                                        n.id == s.id || !s.options.pauseOtherPlayers || n.paused || n.ended || n.pause(), n.hasFocus = !1
                                                    }
                                                    s.hasFocus = !0
                                                }, !1), s.media.addEventListener("ended", function() {
                                                    if (s.options.autoRewind) try { s.media.setCurrentTime(0), window.setTimeout(function() { t(s.container).find(".mejs-overlay-loading").parent().hide() }, 20) } catch (e) {}
                                                    s.media.pause(), s.setProgressRail && s.setProgressRail(), s.setCurrentRail && s.setCurrentRail(), s.options.loop ? s.play() : !s.options.alwaysShowControls && s.controlsEnabled && s.showControls()
                                                }, !1), s.media.addEventListener("loadedmetadata", function() { s.updateDuration && s.updateDuration(), s.updateCurrent && s.updateCurrent(), s.isFullScreen || (s.setPlayerSize(s.width, s.height), s.setControlsSize()) }, !1), s.container.focusout(function(e) {
                                                    if (e.relatedTarget) {
                                                        var n = t(e.relatedTarget);
                                                        s.keyboardAction && 0 === n.parents(".mejs-container").length && (s.keyboardAction = !1, s.hideControls(!0))
                                                    }
                                                }), setTimeout(function() { s.setPlayerSize(s.width, s.height), s.setControlsSize() }, 50), s.globalBind("resize", function() { s.isFullScreen || e.MediaFeatures.hasTrueNativeFullScreen && document.webkitIsFullScreen || s.setPlayerSize(s.width, s.height), s.setControlsSize() }), "youtube" == s.media.pluginType && (a.isiOS || a.isAndroid) && s.container.find(".mejs-overlay-play").hide()
                                            }
                                            u && "native" == n.pluginType && s.play(), s.options.success && ("string" == typeof s.options.success ? window[s.options.success](s.media, s.domNode, s) : s.options.success(s.media, s.domNode, s))
                                        }
                                    },
                                    handleError: function(e) {
                                        var t = this;
                                        t.controls.hide(), t.options.error && t.options.error(e)
                                    },
                                    setPlayerSize: function(e, n) {
                                        var i = this;
                                        if (!i.options.setDimensions) return !1;
                                        if ("undefined" != typeof e && (i.width = e), "undefined" != typeof n && (i.height = n), i.height.toString().indexOf("%") > 0 || "100%" === i.$node.css("max-width") || i.$node[0].currentStyle && "100%" === i.$node[0].currentStyle.maxWidth) {
                                            var r = function() { return i.isVideo ? i.media.videoWidth && i.media.videoWidth > 0 ? i.media.videoWidth : null !== i.media.getAttribute("width") ? i.media.getAttribute("width") : i.options.defaultVideoWidth : i.options.defaultAudioWidth }(),
                                                o = function() { return i.isVideo ? i.media.videoHeight && i.media.videoHeight > 0 ? i.media.videoHeight : null !== i.media.getAttribute("height") ? i.media.getAttribute("height") : i.options.defaultVideoHeight : i.options.defaultAudioHeight }(),
                                                s = i.container.parent().closest(":visible").width(),
                                                a = i.container.parent().closest(":visible").height(),
                                                l = i.isVideo || !i.options.autosizeProgress ? parseInt(s * o / r, 10) : o;
                                            isNaN(l) && (l = a), "body" === i.container.parent()[0].tagName.toLowerCase() && (s = t(window).width(), l = t(window).height()), l && s && (i.container.width(s).height(l), i.$media.add(i.container.find(".mejs-shim")).width("100%").height("100%"), i.isVideo && i.media.setVideoSize && i.media.setVideoSize(s, l), i.layers.children(".mejs-layer").width("100%").height("100%"))
                                        } else i.container.width(i.width).height(i.height), i.layers.children(".mejs-layer").width(i.width).height(i.height);
                                        var u = i.layers.find(".mejs-overlay-play"),
                                            c = u.find(".mejs-overlay-button");
                                        u.height(i.container.height() - i.controls.height()), c.css("margin-top", "-" + (c.height() / 2 - i.controls.height() / 2).toString() + "px")
                                    },
                                    setControlsSize: function() {
                                        var e = this,
                                            n = 0,
                                            i = 0,
                                            r = e.controls.find(".mejs-time-rail"),
                                            o = e.controls.find(".mejs-time-total"),
                                            s = (e.controls.find(".mejs-time-current"), e.controls.find(".mejs-time-loaded"), r.siblings()),
                                            a = s.last(),
                                            l = null;
                                        if (e.container.is(":visible") && r.length && r.is(":visible")) {
                                            e.options && !e.options.autosizeProgress && (i = parseInt(r.css("width"), 10)), 0 !== i && i || (s.each(function() { var e = t(this); "absolute" != e.css("position") && e.is(":visible") && (n += t(this).outerWidth(!0)) }), i = e.controls.width() - n - (r.outerWidth(!0) - r.width()));
                                            do r.width(i), o.width(i - (o.outerWidth(!0) - o.width())), "absolute" != a.css("position") && (l = a.position(), i--); while (null !== l && l.top > 0 && i > 0);
                                            e.setProgressRail && e.setProgressRail(), e.setCurrentRail && e.setCurrentRail()
                                        }
                                    },
                                    buildposter: function(e, n, i, r) {
                                        var o = this,
                                            s = t('<div class="mejs-poster mejs-layer"></div>').appendTo(i),
                                            a = e.$media.attr("poster");
                                        "" !== e.options.poster && (a = e.options.poster), a ? o.setPoster(a) : s.hide(), r.addEventListener("play", function() { s.hide() }, !1), e.options.showPosterWhenEnded && e.options.autoRewind && r.addEventListener("ended", function() { s.show() }, !1)
                                    },
                                    setPoster: function(e) {
                                        var n = this,
                                            i = n.container.find(".mejs-poster"),
                                            r = i.find("img");
                                        0 === r.length && (r = t('<img width="100%" height="100%" />').appendTo(i)), r.attr("src", e), i.css({ "background-image": "url(" + e + ")" })
                                    },
                                    buildoverlays: function(n, i, r, o) {
                                        var s = this;
                                        if (n.isVideo) {
                                            var a = t('<div class="mejs-overlay mejs-layer"><div class="mejs-overlay-loading"><span></span></div></div>').hide().appendTo(r),
                                                l = t('<div class="mejs-overlay mejs-layer"><div class="mejs-overlay-error"></div></div>').hide().appendTo(r),
                                                u = t('<div class="mejs-overlay mejs-layer mejs-overlay-play"><div class="mejs-overlay-button"></div></div>').appendTo(r).bind("click", function() { s.options.clickToPlayPause && o.paused && o.play() });
                                            o.addEventListener("play", function() { u.hide(), a.hide(), i.find(".mejs-time-buffering").hide(), l.hide() }, !1), o.addEventListener("playing", function() { u.hide(), a.hide(), i.find(".mejs-time-buffering").hide(), l.hide() }, !1), o.addEventListener("seeking", function() { a.show(), i.find(".mejs-time-buffering").show() }, !1), o.addEventListener("seeked", function() { a.hide(), i.find(".mejs-time-buffering").hide() }, !1), o.addEventListener("pause", function() { e.MediaFeatures.isiPhone || u.show() }, !1), o.addEventListener("waiting", function() { a.show(), i.find(".mejs-time-buffering").show() }, !1), o.addEventListener("loadeddata", function() { a.show(), i.find(".mejs-time-buffering").show(), e.MediaFeatures.isAndroid && (o.canplayTimeout = window.setTimeout(function() { if (document.createEvent) { var e = document.createEvent("HTMLEvents"); return e.initEvent("canplay", !0, !0), o.dispatchEvent(e) } }, 300)) }, !1), o.addEventListener("canplay", function() { a.hide(), i.find(".mejs-time-buffering").hide(), clearTimeout(o.canplayTimeout) }, !1), o.addEventListener("error", function() { a.hide(), i.find(".mejs-time-buffering").hide(), l.show(), l.find("mejs-overlay-error").html("Error loading this resource") }, !1), o.addEventListener("keydown", function(e) { s.onkeydown(n, o, e) }, !1)
                                        }
                                    },
                                    buildkeyboard: function(e, n, i, r) {
                                        var o = this;
                                        o.container.keydown(function() { o.keyboardAction = !0 }), o.globalBind("keydown", function(t) { return o.onkeydown(e, r, t) }), o.globalBind("click", function(n) { e.hasFocus = 0 !== t(n.target).closest(".mejs-container").length })
                                    },
                                    onkeydown: function(e, t, n) {
                                        if (e.hasFocus && e.options.enableKeyboard)
                                            for (var i = 0, r = e.options.keyActions.length; r > i; i++)
                                                for (var o = e.options.keyActions[i], s = 0, a = o.keys.length; a > s; s++)
                                                    if (n.keyCode == o.keys[s]) return "function" == typeof n.preventDefault && n.preventDefault(), o.action(e, t, n.keyCode), !1;
                                        return !0
                                    },
                                    findTracks: function() {
                                        var e = this,
                                            n = e.$media.find("track");
                                        e.tracks = [], n.each(function(n, i) { i = t(i), e.tracks.push({ srclang: i.attr("srclang") ? i.attr("srclang").toLowerCase() : "", src: i.attr("src"), kind: i.attr("kind"), label: i.attr("label") || "", entries: [], isLoaded: !1 }) })
                                    },
                                    changeSkin: function(e) { this.container[0].className = "mejs-container " + e, this.setPlayerSize(this.width, this.height), this.setControlsSize() },
                                    play: function() { this.load(), this.media.play() },
                                    pause: function() { try { this.media.pause() } catch (e) {} },
                                    load: function() { this.isLoaded || this.media.load(), this.isLoaded = !0 },
                                    setMuted: function(e) { this.media.setMuted(e) },
                                    setCurrentTime: function(e) { this.media.setCurrentTime(e) },
                                    getCurrentTime: function() { return this.media.currentTime },
                                    setVolume: function(e) { this.media.setVolume(e) },
                                    getVolume: function() { return this.media.volume },
                                    setSrc: function(e) { this.media.setSrc(e) },
                                    remove: function() {
                                        var t, n, i = this;
                                        for (t in i.options.features)
                                            if (n = i.options.features[t], i["clean" + n]) try { i["clean" + n](i) } catch (r) {}
                                        i.isDynamic ? i.$node.insertBefore(i.container) : (i.$media.prop("controls", !0), i.$node.clone().insertBefore(i.container).show(), i.$node.remove()), "native" !== i.media.pluginType && i.media.remove(), delete e.players[i.id],
                                            "object" == typeof i.container && i.container.remove(), i.globalUnbind(), delete i.node.player
                                    }
                                },
                                function() {
                                    function n(e, n) {
                                        var r = { d: [], w: [] };
                                        return t.each((e || "").split(" "), function(e, t) {
                                            var o = t + "." + n;
                                            0 === o.indexOf(".") ? (r.d.push(o), r.w.push(o)) : r[i.test(t) ? "w" : "d"].push(o)
                                        }), r.d = r.d.join(" "), r.w = r.w.join(" "), r
                                    }
                                    var i = /^((after|before)print|(before)?unload|hashchange|message|o(ff|n)line|page(hide|show)|popstate|resize|storage)\b/;
                                    e.MediaElementPlayer.prototype.globalBind = function(e, i, r) {
                                        var o = this;
                                        e = n(e, o.id), e.d && t(document).bind(e.d, i, r), e.w && t(window).bind(e.w, i, r)
                                    }, e.MediaElementPlayer.prototype.globalUnbind = function(e, i) {
                                        var r = this;
                                        e = n(e, r.id), e.d && t(document).unbind(e.d, i), e.w && t(window).unbind(e.w, i)
                                    }
                                }(), "undefined" != typeof t && (t.fn.mediaelementplayer = function(n) {
                                    return this.each(n === !1 ? function() {
                                        var e = t(this).data("mediaelementplayer");
                                        e && e.remove(), t(this).removeData("mediaelementplayer")
                                    } : function() { t(this).data("mediaelementplayer", new e.MediaElementPlayer(this, n)) }), this
                                }, t(document).ready(function() { t(".mejs-player").mediaelementplayer() })), window.MediaElementPlayer = e.MediaElementPlayer
                        }(e.$),
                        function(t) {
                            t.extend(e.MepDefaults, { playText: e.i18n.t("Play"), pauseText: e.i18n.t("Pause") }), t.extend(MediaElementPlayer.prototype, {
                                buildplaypause: function(e, n, i, r) {
                                    function o(e) { "play" === e ? (l.removeClass("mejs-play").addClass("mejs-pause"), u.attr({ title: a.pauseText, "aria-label": a.pauseText })) : (l.removeClass("mejs-pause").addClass("mejs-play"), u.attr({ title: a.playText, "aria-label": a.playText })) }
                                    var s = this,
                                        a = s.options,
                                        l = t('<div class="mejs-button mejs-playpause-button mejs-play" ><button type="button" aria-controls="' + s.id + '" title="' + a.playText + '" aria-label="' + a.playText + '"></button></div>').appendTo(n).click(function(e) { return e.preventDefault(), r.paused ? r.play() : r.pause(), !1 }),
                                        u = l.find("button");
                                    o("pse"), r.addEventListener("play", function() { o("play") }, !1), r.addEventListener("playing", function() { o("play") }, !1), r.addEventListener("pause", function() { o("pse") }, !1), r.addEventListener("paused", function() { o("pse") }, !1)
                                }
                            })
                        }(e.$),
                        function(t) {
                            t.extend(e.MepDefaults, { stopText: "Stop" }), t.extend(MediaElementPlayer.prototype, {
                                buildstop: function(n, i, r, o) {
                                    var s = this;
                                    t('<div class="mejs-button mejs-stop-button mejs-stop"><button type="button" aria-controls="' + s.id + '" title="' + s.options.stopText + '" aria-label="' + s.options.stopText + '"></button></div>').appendTo(i).click(function() { o.paused || o.pause(), o.currentTime > 0 && (o.setCurrentTime(0), o.pause(), i.find(".mejs-time-current").width("0px"), i.find(".mejs-time-handle").css("left", "0px"), i.find(".mejs-time-float-current").html(e.Utility.secondsToTimeCode(0)), i.find(".mejs-currenttime").html(e.Utility.secondsToTimeCode(0)), r.find(".mejs-poster").show()) })
                                }
                            })
                        }(e.$),
                        function(t) {
                            t.extend(e.MepDefaults, { progessHelpText: e.i18n.t("Use Left/Right Arrow keys to advance one second, Up/Down arrows to advance ten seconds.") }), t.extend(MediaElementPlayer.prototype, {
                                buildprogress: function(n, i, r, o) {
                                    t('<div class="mejs-time-rail"><a href="javascript:void(0);" class="mejs-time-total mejs-time-slider"><span class="mejs-offscreen">' + this.options.progessHelpText + '</span><span class="mejs-time-buffering"></span><span class="mejs-time-loaded"></span><span class="mejs-time-current"></span><span class="mejs-time-handle"></span><span class="mejs-time-float"><span class="mejs-time-float-current">00:00</span><span class="mejs-time-float-corner"></span></span></a></div>').appendTo(i), i.find(".mejs-time-buffering").hide();
                                    var s = this,
                                        a = i.find(".mejs-time-total"),
                                        l = i.find(".mejs-time-loaded"),
                                        u = i.find(".mejs-time-current"),
                                        c = i.find(".mejs-time-handle"),
                                        d = i.find(".mejs-time-float"),
                                        h = i.find(".mejs-time-float-current"),
                                        p = i.find(".mejs-time-slider"),
                                        f = function(t) {
                                            var n, i = a.offset(),
                                                r = a.outerWidth(!0),
                                                s = 0,
                                                l = 0,
                                                u = 0;
                                            n = t.originalEvent.changedTouches ? t.originalEvent.changedTouches[0].pageX : t.pageX, o.duration && (n < i.left ? n = i.left : n > r + i.left && (n = r + i.left), u = n - i.left, s = u / r, l = .02 >= s ? 0 : s * o.duration, m && l !== o.currentTime && o.setCurrentTime(l), e.MediaFeatures.hasTouch || (d.css("left", u), h.html(e.Utility.secondsToTimeCode(l)), d.show()))
                                        },
                                        m = !1,
                                        g = !1,
                                        v = 0,
                                        y = !1,
                                        b = n.options.autoRewind,
                                        w = function() {
                                            var t = o.currentTime,
                                                n = e.i18n.t("Time Slider"),
                                                i = e.Utility.secondsToTimeCode(t),
                                                r = o.duration;
                                            p.attr({ "aria-label": n, "aria-valuemin": 0, "aria-valuemax": r, "aria-valuenow": t, "aria-valuetext": i, role: "slider", tabindex: 0 })
                                        },
                                        _ = function() {
                                            var e = new Date;
                                            e - v >= 1e3 && o.play()
                                        };
                                    p.bind("focus", function() { n.options.autoRewind = !1 }), p.bind("blur", function() { n.options.autoRewind = b }), p.bind("keydown", function(e) {
                                        new Date - v >= 1e3 && (y = o.paused);
                                        var t = e.keyCode,
                                            n = o.duration,
                                            i = o.currentTime;
                                        switch (t) {
                                            case 37:
                                                i -= 1;
                                                break;
                                            case 39:
                                                i += 1;
                                                break;
                                            case 38:
                                                i += Math.floor(.1 * n);
                                                break;
                                            case 40:
                                                i -= Math.floor(.1 * n);
                                                break;
                                            case 36:
                                                i = 0;
                                                break;
                                            case 35:
                                                i = n;
                                                break;
                                            case 10:
                                                return void(o.paused ? o.play() : o.pause());
                                            case 13:
                                                return void(o.paused ? o.play() : o.pause());
                                            default:
                                                return
                                        }
                                        return i = 0 > i ? 0 : i >= n ? n : Math.floor(i), v = new Date, y || o.pause(), i < o.duration && !y && setTimeout(_, 1100), o.setCurrentTime(i), e.preventDefault(), e.stopPropagation(), !1
                                    }), a.bind("mousedown touchstart", function(e) {
                                        (1 === e.which || 0 === e.which) && (m = !0, f(e), s.globalBind("mousemove.dur touchmove.dur", function(e) { f(e) }), s.globalBind("mouseup.dur touchend.dur", function() { m = !1, d.hide(), s.globalUnbind(".dur") }))
                                    }).bind("mouseenter", function() { g = !0, s.globalBind("mousemove.dur", function(e) { f(e) }), e.MediaFeatures.hasTouch || d.show() }).bind("mouseleave", function() { g = !1, m || (s.globalUnbind(".dur"), d.hide()) }), o.addEventListener("progress", function(e) { n.setProgressRail(e), n.setCurrentRail(e) }, !1), o.addEventListener("timeupdate", function(e) { n.setProgressRail(e), n.setCurrentRail(e), w(e) }, !1), s.loaded = l, s.total = a, s.current = u, s.handle = c
                                },
                                setProgressRail: function(e) {
                                    var t = this,
                                        n = void 0 !== e ? e.target : t.media,
                                        i = null;
                                    n && n.buffered && n.buffered.length > 0 && n.buffered.end && n.duration ? i = n.buffered.end(0) / n.duration : n && void 0 !== n.bytesTotal && n.bytesTotal > 0 && void 0 !== n.bufferedBytes ? i = n.bufferedBytes / n.bytesTotal : e && e.lengthComputable && 0 !== e.total && (i = e.loaded / e.total), null !== i && (i = Math.min(1, Math.max(0, i)), t.loaded && t.total && t.loaded.width(t.total.width() * i))
                                },
                                setCurrentRail: function() {
                                    var e = this;
                                    if (void 0 !== e.media.currentTime && e.media.duration && e.total && e.handle) {
                                        var t = Math.round(e.total.width() * e.media.currentTime / e.media.duration),
                                            n = t - Math.round(e.handle.outerWidth(!0) / 2);
                                        e.current.width(t), e.handle.css("left", n)
                                    }
                                }
                            })
                        }(e.$),
                        function(t) {
                            t.extend(e.MepDefaults, { duration: -1, timeAndDurationSeparator: "<span> | </span>" }), t.extend(MediaElementPlayer.prototype, {
                                buildcurrent: function(e, n, i, r) {
                                    var o = this;
                                    t('<div class="mejs-time" role="timer" aria-live="off"><span class="mejs-currenttime">' + (e.options.alwaysShowHours ? "00:" : "") + (e.options.showTimecodeFrameCount ? "00:00:00" : "00:00") + "</span></div>").appendTo(n), o.currenttime = o.controls.find(".mejs-currenttime"), r.addEventListener("timeupdate", function() { e.updateCurrent() }, !1)
                                },
                                buildduration: function(n, i, r, o) {
                                    var s = this;
                                    i.children().last().find(".mejs-currenttime").length > 0 ? t(s.options.timeAndDurationSeparator + '<span class="mejs-duration">' + (s.options.duration > 0 ? e.Utility.secondsToTimeCode(s.options.duration, s.options.alwaysShowHours || s.media.duration > 3600, s.options.showTimecodeFrameCount, s.options.framesPerSecond || 25) : (n.options.alwaysShowHours ? "00:" : "") + (n.options.showTimecodeFrameCount ? "00:00:00" : "00:00")) + "</span>").appendTo(i.find(".mejs-time")) : (i.find(".mejs-currenttime").parent().addClass("mejs-currenttime-container"), t('<div class="mejs-time mejs-duration-container"><span class="mejs-duration">' + (s.options.duration > 0 ? e.Utility.secondsToTimeCode(s.options.duration, s.options.alwaysShowHours || s.media.duration > 3600, s.options.showTimecodeFrameCount, s.options.framesPerSecond || 25) : (n.options.alwaysShowHours ? "00:" : "") + (n.options.showTimecodeFrameCount ? "00:00:00" : "00:00")) + "</span></div>").appendTo(i)), s.durationD = s.controls.find(".mejs-duration"), o.addEventListener("timeupdate", function() { n.updateDuration() }, !1)
                                },
                                updateCurrent: function() {
                                    var t = this;
                                    t.currenttime && t.currenttime.html(e.Utility.secondsToTimeCode(t.media.currentTime, t.options.alwaysShowHours || t.media.duration > 3600, t.options.showTimecodeFrameCount, t.options.framesPerSecond || 25))
                                },
                                updateDuration: function() {
                                    var t = this;
                                    t.container.toggleClass("mejs-long-video", t.media.duration > 3600), t.durationD && (t.options.duration > 0 || t.media.duration) && t.durationD.html(e.Utility.secondsToTimeCode(t.options.duration > 0 ? t.options.duration : t.media.duration, t.options.alwaysShowHours, t.options.showTimecodeFrameCount, t.options.framesPerSecond || 25))
                                }
                            })
                        }(e.$),
                        function(t) {
                            t.extend(e.MepDefaults, { muteText: e.i18n.t("Mute Toggle"), allyVolumeControlText: e.i18n.t("Use Up/Down Arrow keys to increase or decrease volume."), hideVolumeOnTouchDevices: !0, audioVolume: "horizontal", videoVolume: "vertical" }), t.extend(MediaElementPlayer.prototype, {
                                buildvolume: function(n, i, r, o) {
                                    if (!e.MediaFeatures.isAndroid && !e.MediaFeatures.isiOS || !this.options.hideVolumeOnTouchDevices) {
                                        var s = this,
                                            a = s.isVideo ? s.options.videoVolume : s.options.audioVolume,
                                            l = "horizontal" == a ? t('<div class="mejs-button mejs-volume-button mejs-mute"><button type="button" aria-controls="' + s.id + '" title="' + s.options.muteText + '" aria-label="' + s.options.muteText + '"></button></div><a href="javascript:void(0);" class="mejs-horizontal-volume-slider"><span class="mejs-offscreen">' + s.options.allyVolumeControlText + '</span><div class="mejs-horizontal-volume-total"></div><div class="mejs-horizontal-volume-current"></div><div class="mejs-horizontal-volume-handle"></div></a>').appendTo(i) : t('<div class="mejs-button mejs-volume-button mejs-mute"><button type="button" aria-controls="' + s.id + '" title="' + s.options.muteText + '" aria-label="' + s.options.muteText + '"></button><a href="javascript:void(0);" class="mejs-volume-slider"><span class="mejs-offscreen">' + s.options.allyVolumeControlText + '</span><div class="mejs-volume-total"></div><div class="mejs-volume-current"></div><div class="mejs-volume-handle"></div></a></div>').appendTo(i),
                                            u = s.container.find(".mejs-volume-slider, .mejs-horizontal-volume-slider"),
                                            c = s.container.find(".mejs-volume-total, .mejs-horizontal-volume-total"),
                                            d = s.container.find(".mejs-volume-current, .mejs-horizontal-volume-current"),
                                            h = s.container.find(".mejs-volume-handle, .mejs-horizontal-volume-handle"),
                                            p = function(e, t) {
                                                if (!u.is(":visible") && "undefined" == typeof t) return u.show(), p(e, !0), void u.hide();
                                                e = Math.max(0, e), e = Math.min(e, 1), 0 === e ? l.removeClass("mejs-mute").addClass("mejs-unmute") : l.removeClass("mejs-unmute").addClass("mejs-mute");
                                                var n = c.position();
                                                if ("vertical" == a) {
                                                    var i = c.height(),
                                                        r = i - i * e;
                                                    h.css("top", Math.round(n.top + r - h.height() / 2)), d.height(i - r), d.css("top", n.top + r)
                                                } else {
                                                    var o = c.width(),
                                                        s = o * e;
                                                    h.css("left", Math.round(n.left + s - h.width() / 2)), d.width(Math.round(s))
                                                }
                                            },
                                            f = function(e) {
                                                var t = null,
                                                    n = c.offset();
                                                if ("vertical" === a) {
                                                    var i = c.height(),
                                                        r = (parseInt(c.css("top").replace(/px/, ""), 10), e.pageY - n.top);
                                                    if (t = (i - r) / i, 0 === n.top || 0 === n.left) return
                                                } else {
                                                    var s = c.width(),
                                                        l = e.pageX - n.left;
                                                    t = l / s
                                                }
                                                t = Math.max(0, t), t = Math.min(t, 1), p(t), o.setMuted(0 === t ? !0 : !1), o.setVolume(t)
                                            },
                                            m = !1,
                                            g = !1;
                                        l.hover(function() { u.show(), g = !0 }, function() { g = !1, m || "vertical" != a || u.hide() });
                                        var v = function() {
                                            var t = Math.floor(100 * o.volume);
                                            u.attr({ "aria-label": e.i18n.t("volumeSlider"), "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": t, "aria-valuetext": t + "%", role: "slider", tabindex: 0 })
                                        };
                                        u.bind("mouseover", function() { g = !0 }).bind("mousedown", function(e) { return f(e), s.globalBind("mousemove.vol", function(e) { f(e) }), s.globalBind("mouseup.vol", function() { m = !1, s.globalUnbind(".vol"), g || "vertical" != a || u.hide() }), m = !0, !1 }).bind("keydown", function(e) {
                                            var t = e.keyCode,
                                                n = o.volume;
                                            switch (t) {
                                                case 38:
                                                    n += .1;
                                                    break;
                                                case 40:
                                                    n -= .1;
                                                    break;
                                                default:
                                                    return !0
                                            }
                                            return m = !1, p(n), o.setVolume(n), !1
                                        }).bind("blur", function() { u.hide() }), l.find("button").click(function() { o.setMuted(!o.muted) }), l.find("button").bind("focus", function() { u.show() }), o.addEventListener("volumechange", function(e) { m || (o.muted ? (p(0), l.removeClass("mejs-mute").addClass("mejs-unmute")) : (p(o.volume), l.removeClass("mejs-unmute").addClass("mejs-mute"))), v(e) }, !1), s.container.is(":visible") && (p(n.options.startVolume), 0 === n.options.startVolume && o.setMuted(!0), "native" === o.pluginType && o.setVolume(n.options.startVolume))
                                    }
                                }
                            })
                        }(e.$),
                        function(t) {
                            t.extend(e.MepDefaults, { usePluginFullScreen: !0, newWindowCallback: function() { return "" }, fullscreenText: e.i18n.t("Fullscreen") }), t.extend(MediaElementPlayer.prototype, {
                                isFullScreen: !1,
                                isNativeFullScreen: !1,
                                isInIframe: !1,
                                buildfullscreen: function(n, i, r, o) {
                                    if (n.isVideo) {
                                        if (n.isInIframe = window.location != window.parent.location, e.MediaFeatures.hasTrueNativeFullScreen) {
                                            var s = function() { n.isFullScreen && (e.MediaFeatures.isFullScreen() ? (n.isNativeFullScreen = !0, n.setControlsSize()) : (n.isNativeFullScreen = !1, n.exitFullScreen())) };
                                            n.globalBind(e.MediaFeatures.fullScreenEventName, s)
                                        }
                                        var a = this,
                                            l = (n.container, t('<div class="mejs-button mejs-fullscreen-button"><button type="button" aria-controls="' + a.id + '" title="' + a.options.fullscreenText + '" aria-label="' + a.options.fullscreenText + '"></button></div>').appendTo(i));
                                        if ("native" === a.media.pluginType || !a.options.usePluginFullScreen && !e.MediaFeatures.isFirefox) l.click(function() {
                                            var t = e.MediaFeatures.hasTrueNativeFullScreen && e.MediaFeatures.isFullScreen() || n.isFullScreen;
                                            t ? n.exitFullScreen() : n.enterFullScreen()
                                        });
                                        else {
                                            var u = null,
                                                c = function() {
                                                    var e, t = document.createElement("x"),
                                                        n = document.documentElement,
                                                        i = window.getComputedStyle;
                                                    return "pointerEvents" in t.style ? (t.style.pointerEvents = "auto", t.style.pointerEvents = "x", n.appendChild(t), e = i && "auto" === i(t, "").pointerEvents, n.removeChild(t), !!e) : !1
                                                }();
                                            if (c && !e.MediaFeatures.isOpera) {
                                                var d, h, p = !1,
                                                    f = function() {
                                                        if (p) {
                                                            for (var e in m) m[e].hide();
                                                            l.css("pointer-events", ""), a.controls.css("pointer-events", ""), a.media.removeEventListener("click", a.clickToPlayPauseCallback), p = !1
                                                        }
                                                    },
                                                    m = {},
                                                    g = ["top", "left", "right", "bottom"],
                                                    v = function() {
                                                        var e = l.offset().left - a.container.offset().left,
                                                            t = l.offset().top - a.container.offset().top,
                                                            n = l.outerWidth(!0),
                                                            i = l.outerHeight(!0),
                                                            r = a.container.width(),
                                                            o = a.container.height();
                                                        for (d in m) m[d].css({ position: "absolute", top: 0, left: 0 });
                                                        m.top.width(r).height(t), m.left.width(e).height(i).css({ top: t }), m.right.width(r - e - n).height(i).css({ top: t, left: e + n }), m.bottom.width(r).height(o - i - t).css({ top: t + i })
                                                    };
                                                for (a.globalBind("resize", function() { v() }), d = 0, h = g.length; h > d; d++) m[g[d]] = t('<div class="mejs-fullscreen-hover" />').appendTo(a.container).mouseover(f).hide();
                                                l.on("mouseover", function() {
                                                    if (!a.isFullScreen) {
                                                        var e = l.offset(),
                                                            t = n.container.offset();
                                                        o.positionFullscreenButton(e.left - t.left, e.top - t.top, !1), l.css("pointer-events", "none"), a.controls.css("pointer-events", "none"), a.media.addEventListener("click", a.clickToPlayPauseCallback);
                                                        for (d in m) m[d].show();
                                                        v(), p = !0
                                                    }
                                                }), o.addEventListener("fullscreenchange", function() { a.isFullScreen = !a.isFullScreen, a.isFullScreen ? a.media.removeEventListener("click", a.clickToPlayPauseCallback) : a.media.addEventListener("click", a.clickToPlayPauseCallback), f() }), a.globalBind("mousemove", function(e) {
                                                    if (p) {
                                                        var t = l.offset();
                                                        (e.pageY < t.top || e.pageY > t.top + l.outerHeight(!0) || e.pageX < t.left || e.pageX > t.left + l.outerWidth(!0)) && (l.css("pointer-events", ""), a.controls.css("pointer-events", ""), p = !1)
                                                    }
                                                })
                                            } else l.on("mouseover", function() {
                                                null !== u && (clearTimeout(u), delete u);
                                                var e = l.offset(),
                                                    t = n.container.offset();
                                                o.positionFullscreenButton(e.left - t.left, e.top - t.top, !0)
                                            }).on("mouseout", function() { null !== u && (clearTimeout(u), delete u), u = setTimeout(function() { o.hideFullscreenButton() }, 1500) })
                                        }
                                        n.fullscreenBtn = l, a.globalBind("keydown", function(t) {
                                            (e.MediaFeatures.hasTrueNativeFullScreen && e.MediaFeatures.isFullScreen() || a.isFullScreen) && 27 == t.keyCode && n.exitFullScreen()
                                        })
                                    }
                                },
                                cleanfullscreen: function(e) { e.exitFullScreen() },
                                containerSizeTimeout: null,
                                enterFullScreen: function() {
                                    var n = this;
                                    if ("native" === n.media.pluginType || !e.MediaFeatures.isFirefox && !n.options.usePluginFullScreen) {
                                        if (t(document.documentElement).addClass("mejs-fullscreen"), normalHeight = n.container.height(), normalWidth = n.container.width(), "native" === n.media.pluginType)
                                            if (e.MediaFeatures.hasTrueNativeFullScreen) e.MediaFeatures.requestFullScreen(n.container[0]), n.isInIframe && setTimeout(function r() {
                                                if (n.isNativeFullScreen) {
                                                    var e = window.devicePixelRatio || 1,
                                                        i = .002,
                                                        o = e * t(window).width(),
                                                        s = screen.width,
                                                        a = Math.abs(s - o),
                                                        l = s * i;
                                                    a > l ? n.exitFullScreen() : setTimeout(r, 500)
                                                }
                                            }, 500);
                                            else if (e.MediaFeatures.hasSemiNativeFullScreen) return void n.media.webkitEnterFullscreen();
                                        if (n.isInIframe) {
                                            var i = n.options.newWindowCallback(this);
                                            if ("" !== i) {
                                                if (!e.MediaFeatures.hasTrueNativeFullScreen) return n.pause(), void window.open(i, n.id, "top=0,left=0,width=" + screen.availWidth + ",height=" + screen.availHeight + ",resizable=yes,scrollbars=no,status=no,toolbar=no");
                                                setTimeout(function() { n.isNativeFullScreen || (n.pause(), window.open(i, n.id, "top=0,left=0,width=" + screen.availWidth + ",height=" + screen.availHeight + ",resizable=yes,scrollbars=no,status=no,toolbar=no")) }, 250)
                                            }
                                        }
                                        n.container.addClass("mejs-container-fullscreen").width("100%").height("100%"), n.containerSizeTimeout = setTimeout(function() { n.container.css({ width: "100%", height: "100%" }), n.setControlsSize() }, 500), "native" === n.media.pluginType ? n.$media.width("100%").height("100%") : (n.container.find(".mejs-shim").width("100%").height("100%"), n.media.setVideoSize(t(window).width(), t(window).height())), n.layers.children("div").width("100%").height("100%"), n.fullscreenBtn && n.fullscreenBtn.removeClass("mejs-fullscreen").addClass("mejs-unfullscreen"), n.setControlsSize(), n.isFullScreen = !0, n.container.find(".mejs-captions-text").css("font-size", screen.width / n.width * 1 * 100 + "%"), n.container.find(".mejs-captions-position").css("bottom", "45px")
                                    }
                                },
                                exitFullScreen: function() { var n = this; return clearTimeout(n.containerSizeTimeout), "native" !== n.media.pluginType && e.MediaFeatures.isFirefox ? void n.media.setFullscreen(!1) : (e.MediaFeatures.hasTrueNativeFullScreen && (e.MediaFeatures.isFullScreen() || n.isFullScreen) && e.MediaFeatures.cancelFullScreen(), t(document.documentElement).removeClass("mejs-fullscreen"), n.container.removeClass("mejs-container-fullscreen").width(normalWidth).height(normalHeight), "native" === n.media.pluginType ? n.$media.width(normalWidth).height(normalHeight) : (n.container.find(".mejs-shim").width(normalWidth).height(normalHeight), n.media.setVideoSize(normalWidth, normalHeight)), n.layers.children("div").width(normalWidth).height(normalHeight), n.fullscreenBtn.removeClass("mejs-unfullscreen").addClass("mejs-fullscreen"), n.setControlsSize(), n.isFullScreen = !1, n.container.find(".mejs-captions-text").css("font-size", ""), void n.container.find(".mejs-captions-position").css("bottom", "")) }
                            })
                        }(e.$),
                        function(t) {
                            t.extend(e.MepDefaults, { speeds: ["2.00", "1.50", "1.25", "1.00", "0.75"], defaultSpeed: "1.00", speedChar: "x" }), t.extend(MediaElementPlayer.prototype, {
                                buildspeed: function(e, n, i, r) {
                                    var o = this;
                                    if ("native" == o.media.pluginType) {
                                        var s = null,
                                            a = null,
                                            l = '<div class="mejs-button mejs-speed-button"><button type="button">' + o.options.defaultSpeed + o.options.speedChar + '</button><div class="mejs-speed-selector"><ul>'; - 1 === t.inArray(o.options.defaultSpeed, o.options.speeds) && o.options.speeds.push(o.options.defaultSpeed), o.options.speeds.sort(function(e, t) { return parseFloat(t) - parseFloat(e) });
                                        for (var u = 0, c = o.options.speeds.length; c > u; u++) l += '<li><input type="radio" name="speed" value="' + o.options.speeds[u] + '" id="' + o.options.speeds[u] + '" ' + (o.options.speeds[u] == o.options.defaultSpeed ? " checked" : "") + ' /><label for="' + o.options.speeds[u] + '" ' + (o.options.speeds[u] == o.options.defaultSpeed ? ' class="mejs-speed-selected"' : "") + ">" + o.options.speeds[u] + o.options.speedChar + "</label></li>";
                                        l += "</ul></div></div>", s = t(l).appendTo(n), a = s.find(".mejs-speed-selector"), playbackspeed = o.options.defaultSpeed, a.on("click", 'input[type="radio"]', function() {
                                            var e = t(this).attr("value");
                                            playbackspeed = e, r.playbackRate = parseFloat(e), s.find("button").html("test" + e + o.options.speedChar), s.find(".mejs-speed-selected").removeClass("mejs-speed-selected"), s.find('input[type="radio"]:checked').next().addClass("mejs-speed-selected")
                                        }), a.height(s.find(".mejs-speed-selector ul").outerHeight(!0) + s.find(".mejs-speed-translations").outerHeight(!0)).css("top", -1 * a.height() + "px")
                                    }
                                }
                            })
                        }(e.$),
                        function(t) {
                            t.extend(e.MepDefaults, { startLanguage: "", tracksText: e.i18n.t("Captions/Subtitles"), hideCaptionsButtonWhenEmpty: !0, toggleCaptionsButtonWhenOnlyOne: !1, slidesSelector: "" }), t.extend(MediaElementPlayer.prototype, {
                                hasChapters: !1,
                                buildtracks: function(n, i, r, o) {
                                    if (0 !== n.tracks.length) {
                                        var s, a = this;
                                        if (a.domNode.textTracks)
                                            for (s = a.domNode.textTracks.length - 1; s >= 0; s--) a.domNode.textTracks[s].mode = "hidden";
                                        n.chapters = t('<div class="mejs-chapters mejs-layer"></div>').prependTo(r).hide(), n.captions = t('<div class="mejs-captions-layer mejs-layer"><div class="mejs-captions-position mejs-captions-position-hover" role="log" aria-live="assertive" aria-atomic="false"><span class="mejs-captions-text"></span></div></div>').prependTo(r).hide(), n.captionsText = n.captions.find(".mejs-captions-text"), n.captionsButton = t('<div class="mejs-button mejs-captions-button"><button type="button" aria-controls="' + a.id + '" title="' + a.options.tracksText + '" aria-label="' + a.options.tracksText + '"></button><div class="mejs-captions-selector"><ul><li><input type="radio" name="' + n.id + '_captions" id="' + n.id + '_captions_none" value="none" checked="checked" /><label for="' + n.id + '_captions_none">' + e.i18n.t("None") + "</label></li></ul></div></div>").appendTo(i);
                                        var l = 0;
                                        for (s = 0; s < n.tracks.length; s++) "subtitles" == n.tracks[s].kind && l++;
                                        for (a.options.toggleCaptionsButtonWhenOnlyOne && 1 == l ? n.captionsButton.on("click", function() { lang = null === n.selectedTrack ? n.tracks[0].srclang : "none", n.setTrack(lang) }) : (n.captionsButton.on("mouseenter focusin", function() { t(this).find(".mejs-captions-selector").css("visibility", "visible") }).on("click", "input[type=radio]", function() { lang = this.value, n.setTrack(lang) }), n.captionsButton.on("mouseleave focusout", function() { t(this).find(".mejs-captions-selector").css("visibility", "hidden") })), n.options.alwaysShowControls ? n.container.find(".mejs-captions-position").addClass("mejs-captions-position-hover") : n.container.bind("controlsshown", function() { n.container.find(".mejs-captions-position").addClass("mejs-captions-position-hover") }).bind("controlshidden", function() { o.paused || n.container.find(".mejs-captions-position").removeClass("mejs-captions-position-hover") }), n.trackToLoad = -1, n.selectedTrack = null, n.isLoadingTrack = !1, s = 0; s < n.tracks.length; s++) "subtitles" == n.tracks[s].kind && n.addTrackButton(n.tracks[s].srclang, n.tracks[s].label);
                                        n.loadNextTrack(), o.addEventListener("timeupdate", function() { n.displayCaptions() }, !1), "" !== n.options.slidesSelector && (n.slidesContainer = t(n.options.slidesSelector), o.addEventListener("timeupdate", function() { n.displaySlides() }, !1)), o.addEventListener("loadedmetadata", function() { n.displayChapters() }, !1), n.container.hover(function() { n.hasChapters && (n.chapters.css("visibility", "visible"), n.chapters.fadeIn(200).height(n.chapters.find(".mejs-chapter").outerHeight())) }, function() { n.hasChapters && !o.paused && n.chapters.fadeOut(200, function() { t(this).css("visibility", "hidden"), t(this).css("display", "block") }) }), null !== n.node.getAttribute("autoplay") && n.chapters.css("visibility", "hidden")
                                    }
                                },
                                setTrack: function(e) {
                                    var t, n = this;
                                    if ("none" == e) n.selectedTrack = null, n.captionsButton.removeClass("mejs-captions-enabled");
                                    else
                                        for (t = 0; t < n.tracks.length; t++)
                                            if (n.tracks[t].srclang == e) { null === n.selectedTrack && n.captionsButton.addClass("mejs-captions-enabled"), n.selectedTrack = n.tracks[t], n.captions.attr("lang", n.selectedTrack.srclang), n.displayCaptions(); break }
                                },
                                loadNextTrack: function() {
                                    var e = this;
                                    e.trackToLoad++, e.trackToLoad < e.tracks.length ? (e.isLoadingTrack = !0, e.loadTrack(e.trackToLoad)) : (e.isLoadingTrack = !1, e.checkForTracks())
                                },
                                loadTrack: function(n) {
                                    var i = this,
                                        r = i.tracks[n],
                                        o = function() { r.isLoaded = !0, i.enableTrackButton(r.srclang, r.label), i.loadNextTrack() };
                                    t.ajax({ url: r.src, dataType: "text", success: function(t) { r.entries = "string" == typeof t && /<tt\s+xml/gi.exec(t) ? e.TrackFormatParser.dfxp.parse(t) : e.TrackFormatParser.webvtt.parse(t), o(), "chapters" == r.kind && i.media.addEventListener("play", function() { i.media.duration > 0 && i.displayChapters(r) }, !1), "slides" == r.kind && i.setupSlides(r) }, error: function() { i.loadNextTrack() } })
                                },
                                enableTrackButton: function(n, i) { var r = this; "" === i && (i = e.language.codes[n] || n), r.captionsButton.find("input[value=" + n + "]").prop("disabled", !1).siblings("label").html(i), r.options.startLanguage == n && t("#" + r.id + "_captions_" + n).prop("checked", !0).trigger("click"), r.adjustLanguageBox() },
                                addTrackButton: function(n, i) { var r = this; "" === i && (i = e.language.codes[n] || n), r.captionsButton.find("ul").append(t('<li><input type="radio" name="' + r.id + '_captions" id="' + r.id + "_captions_" + n + '" value="' + n + '" disabled="disabled" /><label for="' + r.id + "_captions_" + n + '">' + i + " (loading)</label></li>")), r.adjustLanguageBox(), r.container.find(".mejs-captions-translations option[value=" + n + "]").remove() },
                                adjustLanguageBox: function() {
                                    var e = this;
                                    e.captionsButton.find(".mejs-captions-selector").height(e.captionsButton.find(".mejs-captions-selector ul").outerHeight(!0) + e.captionsButton.find(".mejs-captions-translations").outerHeight(!0))
                                },
                                checkForTracks: function() {
                                    var e = this,
                                        t = !1;
                                    if (e.options.hideCaptionsButtonWhenEmpty) {
                                        for (i = 0; i < e.tracks.length; i++)
                                            if ("subtitles" == e.tracks[i].kind) { t = !0; break }
                                        t || (e.captionsButton.hide(), e.setControlsSize())
                                    }
                                },
                                displayCaptions: function() {
                                    if ("undefined" != typeof this.tracks) {
                                        var e, t = this,
                                            n = t.selectedTrack;
                                        if (null !== n && n.isLoaded) {
                                            for (e = 0; e < n.entries.times.length; e++)
                                                if (t.media.currentTime >= n.entries.times[e].start && t.media.currentTime <= n.entries.times[e].stop) return t.captionsText.html(n.entries.text[e]).attr("class", "mejs-captions-text " + (n.entries.times[e].identifier || "")), void t.captions.show().height(0);
                                            t.captions.hide()
                                        } else t.captions.hide()
                                    }
                                },
                                setupSlides: function(e) {
                                    var t = this;
                                    t.slides = e, t.slides.entries.imgs = [t.slides.entries.text.length], t.showSlide(0)
                                },
                                showSlide: function(e) {
                                    if ("undefined" != typeof this.tracks && "undefined" != typeof this.slidesContainer) {
                                        var n = this,
                                            i = n.slides.entries.text[e],
                                            r = n.slides.entries.imgs[e];
                                        "undefined" == typeof r || "undefined" == typeof r.fadeIn ? n.slides.entries.imgs[e] = r = t('<img src="' + i + '">').on("load", function() { r.appendTo(n.slidesContainer).hide().fadeIn().siblings(":visible").fadeOut() }) : r.is(":visible") || r.is(":animated") || r.fadeIn().siblings(":visible").fadeOut()
                                    }
                                },
                                displaySlides: function() {
                                    if ("undefined" != typeof this.slides) {
                                        var e, t = this,
                                            n = t.slides;
                                        for (e = 0; e < n.entries.times.length; e++)
                                            if (t.media.currentTime >= n.entries.times[e].start && t.media.currentTime <= n.entries.times[e].stop) return void t.showSlide(e)
                                    }
                                },
                                displayChapters: function() {
                                    var e, t = this;
                                    for (e = 0; e < t.tracks.length; e++)
                                        if ("chapters" == t.tracks[e].kind && t.tracks[e].isLoaded) { t.drawChapters(t.tracks[e]), t.hasChapters = !0; break }
                                },
                                drawChapters: function(n) {
                                    var i, r, o = this,
                                        s = 0,
                                        a = 0;
                                    for (o.chapters.empty(), i = 0; i < n.entries.times.length; i++) r = n.entries.times[i].stop - n.entries.times[i].start, s = Math.floor(r / o.media.duration * 100), (s + a > 100 || i == n.entries.times.length - 1 && 100 > s + a) && (s = 100 - a), o.chapters.append(t('<div class="mejs-chapter" rel="' + n.entries.times[i].start + '" style="left: ' + a.toString() + "%;width: " + s.toString() + '%;"><div class="mejs-chapter-block' + (i == n.entries.times.length - 1 ? " mejs-chapter-block-last" : "") + '"><span class="ch-title">' + n.entries.text[i] + '</span><span class="ch-time">' + e.Utility.secondsToTimeCode(n.entries.times[i].start) + "&ndash;" + e.Utility.secondsToTimeCode(n.entries.times[i].stop) + "</span></div></div>")), a += s;
                                    o.chapters.find("div.mejs-chapter").click(function() { o.media.setCurrentTime(parseFloat(t(this).attr("rel"))), o.media.paused && o.media.play() }), o.chapters.show()
                                }
                            }), e.language = { codes: { af: "Afrikaans", sq: "Albanian", ar: "Arabic", be: "Belarusian", bg: "Bulgarian", ca: "Catalan", zh: "Chinese", "zh-cn": "Chinese Simplified", "zh-tw": "Chinese Traditional", hr: "Croatian", cs: "Czech", da: "Danish", nl: "Dutch", en: "English", et: "Estonian", fl: "Filipino", fi: "Finnish", fr: "French", gl: "Galician", de: "German", el: "Greek", ht: "Haitian Creole", iw: "Hebrew", hi: "Hindi", hu: "Hungarian", is: "Icelandic", id: "Indonesian", ga: "Irish", it: "Italian", ja: "Japanese", ko: "Korean", lv: "Latvian", lt: "Lithuanian", mk: "Macedonian", ms: "Malay", mt: "Maltese", no: "Norwegian", fa: "Persian", pl: "Polish", pt: "Portuguese", ro: "Romanian", ru: "Russian", sr: "Serbian", sk: "Slovak", sl: "Slovenian", es: "Spanish", sw: "Swahili", sv: "Swedish", tl: "Tagalog", th: "Thai", tr: "Turkish", uk: "Ukrainian", vi: "Vietnamese", cy: "Welsh", yi: "Yiddish" } }, e.TrackFormatParser = {
                                webvtt: {
                                    pattern_timecode: /^((?:[0-9]{1,2}:)?[0-9]{2}:[0-9]{2}([,.][0-9]{1,3})?) --\> ((?:[0-9]{1,2}:)?[0-9]{2}:[0-9]{2}([,.][0-9]{3})?)(.*)$/,
                                    parse: function(n) {
                                        for (var i, r, o, s = 0, a = e.TrackFormatParser.split2(n, /\r?\n/), l = { text: [], times: [] }; s < a.length; s++) {
                                            if (i = this.pattern_timecode.exec(a[s]), i && s < a.length) {
                                                for (s - 1 >= 0 && "" !== a[s - 1] && (o = a[s - 1]), s++, r = a[s], s++;
                                                    "" !== a[s] && s < a.length;) r = r + "\n" + a[s], s++;
                                                r = t.trim(r).replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi, "<a href='$1' target='_blank'>$1</a>"), l.text.push(r), l.times.push({ identifier: o, start: 0 === e.Utility.convertSMPTEtoSeconds(i[1]) ? .2 : e.Utility.convertSMPTEtoSeconds(i[1]), stop: e.Utility.convertSMPTEtoSeconds(i[3]), settings: i[5] })
                                            }
                                            o = ""
                                        }
                                        return l
                                    }
                                },
                                dfxp: {
                                    parse: function(n) {
                                        n = t(n).filter("tt");
                                        var i, r, o = 0,
                                            s = n.children("div").eq(0),
                                            a = s.find("p"),
                                            l = n.find("#" + s.attr("style")),
                                            u = { text: [], times: [] };
                                        if (l.length) {
                                            var c = l.removeAttr("id").get(0).attributes;
                                            if (c.length)
                                                for (i = {}, o = 0; o < c.length; o++) i[c[o].name.split(":")[1]] = c[o].value
                                        }
                                        for (o = 0; o < a.length; o++) {
                                            var d, h = { start: null, stop: null, style: null };
                                            if (a.eq(o).attr("begin") && (h.start = e.Utility.convertSMPTEtoSeconds(a.eq(o).attr("begin"))), !h.start && a.eq(o - 1).attr("end") && (h.start = e.Utility.convertSMPTEtoSeconds(a.eq(o - 1).attr("end"))), a.eq(o).attr("end") && (h.stop = e.Utility.convertSMPTEtoSeconds(a.eq(o).attr("end"))), !h.stop && a.eq(o + 1).attr("begin") && (h.stop = e.Utility.convertSMPTEtoSeconds(a.eq(o + 1).attr("begin"))), i) { d = ""; for (var p in i) d += p + ":" + i[p] + ";" }
                                            d && (h.style = d), 0 === h.start && (h.start = .2), u.times.push(h), r = t.trim(a.eq(o).html()).replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi, "<a href='$1' target='_blank'>$1</a>"), u.text.push(r), 0 === u.times.start && (u.times.start = 2)
                                        }
                                        return u
                                    }
                                },
                                split2: function(e, t) { return e.split(t) }
                            }, 3 != "x\n\ny".split(/\n/gi).length && (e.TrackFormatParser.split2 = function(e, t) {
                                var n, i = [],
                                    r = "";
                                for (n = 0; n < e.length; n++) r += e.substring(n, n + 1), t.test(r) && (i.push(r.replace(t, "")), r = "");
                                return i.push(r), i
                            })
                        }(e.$),
                        function(t) {
                            t.extend(e.MepDefaults, { contextMenuItems: [{ render: function(t) { return "undefined" == typeof t.enterFullScreen ? null : e.i18n.t(t.isFullScreen ? "Turn off Fullscreen" : "Go Fullscreen") }, click: function(e) { e.isFullScreen ? e.exitFullScreen() : e.enterFullScreen() } }, { render: function(t) { return e.i18n.t(t.media.muted ? "Unmute" : "Mute") }, click: function(e) { e.setMuted(e.media.muted ? !1 : !0) } }, { isSeparator: !0 }, { render: function() { return e.i18n.t("Download Video") }, click: function(e) { window.location.href = e.media.currentSrc } }] }), t.extend(MediaElementPlayer.prototype, {
                                buildcontextmenu: function(e) { e.contextMenu = t('<div class="mejs-contextmenu"></div>').appendTo(t("body")).hide(), e.container.bind("contextmenu", function(t) { return e.isContextMenuEnabled ? (t.preventDefault(), e.renderContextMenu(t.clientX - 1, t.clientY - 1), !1) : void 0 }), e.container.bind("click", function() { e.contextMenu.hide() }), e.contextMenu.bind("mouseleave", function() { e.startContextMenuTimer() }) },
                                cleancontextmenu: function(e) { e.contextMenu.remove() },
                                isContextMenuEnabled: !0,
                                enableContextMenu: function() { this.isContextMenuEnabled = !0 },
                                disableContextMenu: function() { this.isContextMenuEnabled = !1 },
                                contextMenuTimeout: null,
                                startContextMenuTimer: function() {
                                    var e = this;
                                    e.killContextMenuTimer(), e.contextMenuTimer = setTimeout(function() { e.hideContextMenu(), e.killContextMenuTimer() }, 750)
                                },
                                killContextMenuTimer: function() {
                                    var e = this.contextMenuTimer;
                                    null != e && (clearTimeout(e), delete e, e = null)
                                },
                                hideContextMenu: function() { this.contextMenu.hide() },
                                renderContextMenu: function(e, n) {
                                    for (var i = this, r = "", o = i.options.contextMenuItems, s = 0, a = o.length; a > s; s++)
                                        if (o[s].isSeparator) r += '<div class="mejs-contextmenu-separator"></div>';
                                        else {
                                            var l = o[s].render(i);
                                            null != l && (r += '<div class="mejs-contextmenu-item" data-itemindex="' + s + '" id="element-' + 1e6 * Math.random() + '">' + l + "</div>")
                                        }
                                    i.contextMenu.empty().append(t(r)).css({ top: n, left: e }).show(), i.contextMenu.find(".mejs-contextmenu-item").each(function() {
                                        var e = t(this),
                                            n = parseInt(e.data("itemindex"), 10),
                                            r = i.options.contextMenuItems[n];
                                        "undefined" != typeof r.show && r.show(e, i), e.click(function() { "undefined" != typeof r.click && r.click(i), i.contextMenu.hide() })
                                    }), setTimeout(function() { i.killControlsTimer("rev3") }, 100)
                                }
                            })
                        }(e.$),
                        function(t) {
                            t.extend(e.MepDefaults, { postrollCloseText: e.i18n.t("Close") }), t.extend(MediaElementPlayer.prototype, {
                                buildpostroll: function(e, n, i) {
                                    var r = this,
                                        o = r.container.find('link[rel="postroll"]').attr("href");
                                    "undefined" != typeof o && (e.postroll = t('<div class="mejs-postroll-layer mejs-layer"><a class="mejs-postroll-close" onclick="$(this).parent().hide();return false;">' + r.options.postrollCloseText + '</a><div class="mejs-postroll-layer-content"></div></div>').prependTo(i).hide(), r.media.addEventListener("ended", function() { t.ajax({ dataType: "html", url: o, success: function(e) { i.find(".mejs-postroll-layer-content").html(e) } }), e.postroll.show() }, !1))
                                }
                            })
                        }(e.$)
                }.apply(e, arguments)
            })
        }(this),
        function(e) { "function" == typeof define && define.amd ? define("jquery.placeholder", ["jquery"], e) : e(jQuery) }(function(e) {
            function t(t) {
                var n = {},
                    i = /^jQuery\d+$/;
                return e.each(t.attributes, function(e, t) { t.specified && !i.test(t.name) && (n[t.name] = t.value) }), n
            }

            function n(t, n) {
                var i = this,
                    o = e(i);
                if (i.value == o.attr("placeholder") && o.hasClass("placeholder"))
                    if (o.data("placeholder-password")) {
                        if (o = o.hide().nextAll('input[type="password"]:first').show().attr("id", o.removeAttr("id").data("placeholder-id")), t === !0) return o[0].value = n;
                        o.focus()
                    } else i.value = "", o.removeClass("placeholder"), i == r() && i.select()
            }

            function i() {
                var i, r = this,
                    o = e(r),
                    s = this.id;
                if ("" === r.value) {
                    if ("password" === r.type) {
                        if (!o.data("placeholder-textinput")) {
                            try { i = o.clone().attr({ type: "text" }) } catch (a) { i = e("<input>").attr(e.extend(t(this), { type: "text" })) }
                            i.removeAttr("name").data({ "placeholder-password": o, "placeholder-id": s }).bind("focus.placeholder", n), o.data({ "placeholder-textinput": i, "placeholder-id": s }).before(i)
                        }
                        o = o.removeAttr("id").hide().prevAll('input[type="text"]:first').attr("id", s).show()
                    }
                    o.addClass("placeholder"), o[0].value = o.attr("placeholder")
                } else o.removeClass("placeholder")
            }

            function r() { try { return document.activeElement } catch (e) {} }
            var o, s, a = "[object OperaMini]" == Object.prototype.toString.call(window.operamini),
                l = "placeholder" in document.createElement("input") && !a,
                u = "placeholder" in document.createElement("textarea") && !a,
                c = e.valHooks,
                d = e.propHooks;
            l && u ? (s = e.fn.placeholder = function() { return this }, s.input = s.textarea = !0) : (s = e.fn.placeholder = function() { var e = this; return e.filter((l ? "textarea" : ":input") + "[placeholder]").not(".placeholder").bind({ "focus.placeholder": n, "blur.placeholder": i }).data("placeholder-enabled", !0).trigger("blur.placeholder"), e }, s.input = l, s.textarea = u, o = {
                get: function(t) {
                    var n = e(t),
                        i = n.data("placeholder-password");
                    return i ? i[0].value : n.data("placeholder-enabled") && n.hasClass("placeholder") ? "" : t.value
                },
                set: function(t, o) {
                    var s = e(t),
                        a = s.data("placeholder-password");
                    return a ? a[0].value = o : s.data("placeholder-enabled") ? ("" === o ? (t.value = o, t != r() && i.call(t)) : s.hasClass("placeholder") ? n.call(t, !0, o) || (t.value = o) : t.value = o, s) : t.value = o
                }
            }, l || (c.input = o, d.value = o), u || (c.textarea = o, d.value = o), e(function() {
                e(document).delegate("form", "submit.placeholder", function() {
                    var t = e(".placeholder", this).each(n);
                    setTimeout(function() { t.each(i) }, 10)
                })
            }), e(window).bind("beforeunload.placeholder", function() { e(".placeholder").each(function() { this.value = "" }) }))
        }),
        function(e) {
            define("jquery.scrolltop", ["jquery"], function() {
                return function() {
                    ! function() {
                        var e = jQuery.event.special,
                            t = "D" + +new Date,
                            n = "D" + (+new Date + 1);
                        e.scrollstart = {
                            setup: function() {
                                var n, i = function(t) {
                                    var i = this,
                                        r = arguments;
                                    n ? clearTimeout(n) : (t.type = "scrollstart", jQuery.event.dispatch.apply(i, r)), n = setTimeout(function() { n = null }, e.scrollstop.latency)
                                };
                                jQuery(this).bind("scroll", i).data(t, i)
                            },
                            teardown: function() { jQuery(this).unbind("scroll", jQuery(this).data(t)) }
                        }, e.scrollstop = {
                            latency: 300,
                            setup: function() {
                                var t, i = function(n) {
                                    var i = this,
                                        r = arguments;
                                    t && clearTimeout(t), t = setTimeout(function() { t = null, n.type = "scrollstop", jQuery.event.dispatch.apply(i, r) }, e.scrollstop.latency)
                                };
                                jQuery(this).bind("scroll", i).data(n, i)
                            },
                            teardown: function() { jQuery(this).unbind("scroll", jQuery(this).data(n)) }
                        }
                    }()
                }.apply(e, arguments)
            })
        }(this),
        function(e) {
            define("jquery.lazyload", ["jquery", "jquery.scrolltop"], function() {
                return function() {
                    ! function(e, t, n, i) {
                        var r = e(t),
                            o = !1;
                        e.fn.lazyload = function(s) {
                            function a() {
                                var t = 0;
                                d.each(function() {
                                    var n = e(this);
                                    if (!h.skip_invisible || n.is(":visible"))
                                        if (e.abovethetop(this, h) || e.leftofbegin(this, h));
                                        else if (e.belowthefold(this, h) || e.rightoffold(this, h)) { if (++t > h.failure_limit) return !1 } else n = e(this), "true" != n.attr("data-lazy-uploaded") && (n.trigger("appear"), t = 0)
                                })
                            }

                            function l() {
                                var t = e(h.attrs + ":visible");
                                t.length && t.each(function(t, n) {
                                    var i = e(n),
                                        r = u(),
                                        o = i.data(r);
                                    if (i.is("img")) i.attr("src", o);
                                    else {
                                        var s = {};
                                        s = i.attr("style") && -1 != i.attr("style").indexOf("background-position") ? { "background-image": "url('" + o + "')", "background-repeat": "no-repeat" } : { "background-image": "url('" + o + "')", "background-repeat": "no-repeat", "background-position": "50% 50%" }, i.css(s)
                                    }
                                })
                            }

                            function u() { var n = e(t).outerWidth(); return 768 > n ? h.data_attribute = "image-xs" : n > 767 && 1025 > n ? h.data_attribute = "image-sm" : n > 1024 && 1200 > n ? h.data_attribute = "image-md" : h.data_attribute = "image-lg", h.data_attribute }
                            var c, d = this,
                                h = { threshold: 0, failure_limit: 0, event: "scroll", effect: "show", container: t, data_attribute: "original", skip_invisible: !0, appear: null, load: null, placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC" };
                            s && (i !== s.failurelimit && (s.failure_limit = s.failurelimit, delete s.failurelimit), i !== s.effectspeed && (s.effect_speed = s.effectspeed, delete s.effectspeed), e.extend(h, s)), c = h.container === i || h.container === t ? r : e(h.container), 0 === h.event.indexOf("scroll") && (c.unbind(h.event, function() { return a() }), c.bind(h.event, function() { return a() })), this.each(function() {
                                var t = this,
                                    n = e(t);
                                if (t.loaded = !1, "true" != n.attr("data-lazy-uploaded")) {
                                    if (lazyUploadedValue = n.data("lazy-uploaded"), lazyUploadedValue === i ? lazyUploaded = !1 : lazyUploaded = lazyUploadedValue, lazyUploaded === !1) {
                                        if (n.attr("src") === i || n.attr("src") === !1) {
                                            var r = {};
                                            r = n.is("img") ? n.attr("style") && -1 != n.attr("style").indexOf("background-position") ? { "background-image": "url(" + h.placeholder + ")", "background-size": "3rem 3rem", "background-repeat": "no-repeat" } : { "background-image": "url(" + h.placeholder + ")", "background-size": "3rem 3rem", "background-repeat": "no-repeat", "background-position": "50% 50%" } : n.attr("style") && -1 != n.attr("style").indexOf("background-position") ? { "background-image": "url(" + h.placeholder + ")", "background-size": "3rem 3rem", "background-repeat": "no-repeat" } : { "background-image": "url(" + h.placeholder + ")", "background-size": "3rem 3rem", "background-repeat": "no-repeat", "background-position": "50% 50%" }, n.css(r)
                                        }
                                        n.one("appear", function() {
                                            if (!this.loaded) {
                                                if (h.appear) {
                                                    var i = d.length;
                                                    h.appear.call(t, i, h)
                                                }
                                                h.data_attribute = u(), e("<img />").bind("load", function() {
                                                    var i = n.attr("data-" + h.data_attribute);
                                                    if (n.hide(), n.is("img")) n.attr("src", i);
                                                    else {
                                                        var r = {};
                                                        r = n.attr("style") && -1 != n.attr("style").indexOf("background-position") ? { "background-image": "url('" + i + "')", "background-size": "cover", "background-repeat": "no-repeat" } : { "background-image": "url('" + i + "')", "background-size": "cover", "background-repeat": "no-repeat", "background-position": "50% 50%" }, n.css(r)
                                                    }
                                                    n[h.effect](h.effect_speed), t.loaded = !0;
                                                    var o = e.grep(d, function(e) { return !e.loaded });
                                                    if (d = e(o), h.load) {
                                                        var s = d.length;
                                                        h.load.call(t, s, h)
                                                    }
                                                    n.addClass("is-loaded")
                                                }).attr("src", n.attr("data-" + h.data_attribute)), n.attr("data-lazy-uploaded", "true")
                                            }
                                        })
                                    }
                                    0 !== h.event.indexOf("scroll") && n.bind(h.event, function() { t.loaded || n.trigger("appear") })
                                }
                            });
                            var p = function() { var e = {}; return function(t, n) { e.uniqueId && clearTimeout(e.uniqueId), e.uniqueId = setTimeout(t, n) } }(),
                                f = !1,
                                m = function() { f = !0, f && p(function() { f = !1, a(), l() }, 750) },
                                g = function() { f = !0, f && p(function() { f = !1, a() }, 750) };
                            return e("html").hasClass("mobile") || e("html").hasClass("tablet") ? o || (r.bind("orientationchange", g), o = !0) : o || (r.bind("resize", m), o = !0), /(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion) && r.bind("pageshow", function(t) { t.originalEvent && t.originalEvent.persisted && d.each(function() { e(this).trigger("appear") }) }), e(n).ready(function() { a() }), this
                        }, e.belowthefold = function(n, o) { var s; return s = o.container === i || o.container === t ? (t.innerHeight ? t.innerHeight : r.height()) + r.scrollTop() : e(o.container).offset().top + e(o.container).height(), s <= e(n).offset().top - o.threshold }, e.rightoffold = function(n, o) { var s; return s = o.container === i || o.container === t ? r.width() + r.scrollLeft() : e(o.container).offset().left + e(o.container).width(), s <= e(n).offset().left - o.threshold }, e.abovethetop = function(n, o) { var s; return s = o.container === i || o.container === t ? r.scrollTop() : e(o.container).offset().top, s >= e(n).offset().top + o.threshold + e(n).height() }, e.leftofbegin = function(n, o) { var s; return s = o.container === i || o.container === t ? r.scrollLeft() : e(o.container).offset().left, s >= e(n).offset().left + o.threshold + e(n).width() }, e.inviewport = function(t, n) { return !(e.rightoffold(t, n) || e.leftofbegin(t, n) || e.belowthefold(t, n) || e.abovethetop(t, n)) }, e.extend(e.expr[":"], { "below-the-fold": function(t) { return e.belowthefold(t, { threshold: 0 }) }, "above-the-top": function(t) { return !e.belowthefold(t, { threshold: 0 }) }, "right-of-screen": function(t) { return e.rightoffold(t, { threshold: 0 }) }, "left-of-screen": function(t) { return !e.rightoffold(t, { threshold: 0 }) }, "in-viewport": function(t) { return e.inviewport(t, { threshold: 0 }) }, "above-the-fold": function(t) { return !e.belowthefold(t, { threshold: 0 }) }, "right-of-fold": function(t) { return e.rightoffold(t, { threshold: 0 }) }, "left-of-fold": function(t) { return !e.rightoffold(t, { threshold: 0 }) } })
                    }(jQuery, window, document)
                }.apply(e, arguments)
            })
        }(this),
        function(e) { "function" == typeof define && define.amd ? define("jquery.cookie", ["jquery"], e) : e("object" == typeof exports ? require("jquery") : jQuery) }(function(e) {
            function t(e) { return a.raw ? e : encodeURIComponent(e) }

            function n(e) { return a.raw ? e : decodeURIComponent(e) }

            function i(e) { return t(a.json ? JSON.stringify(e) : String(e)) }

            function r(e) { 0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\")); try { return e = decodeURIComponent(e.replace(s, " ")), a.json ? JSON.parse(e) : e } catch (t) {} }

            function o(t, n) { var i = a.raw ? t : r(t); return e.isFunction(n) ? n(i) : i }
            var s = /\+/g,
                a = e.cookie = function(r, s, l) {
                    if (void 0 !== s && !e.isFunction(s)) {
                        if (l = e.extend({}, a.defaults, l), "number" == typeof l.expires) {
                            var u = l.expires,
                                c = l.expires = new Date;
                            c.setTime(+c + 864e5 * u)
                        }
                        return document.cookie = [t(r), "=", i(s), l.expires ? "; expires=" + l.expires.toUTCString() : "", l.path ? "; path=" + l.path : "", l.domain ? "; domain=" + l.domain : "", l.secure ? "; secure" : ""].join("")
                    }
                    for (var d = r ? void 0 : {}, h = document.cookie ? document.cookie.split("; ") : [], p = 0, f = h.length; f > p; p++) {
                        var m = h[p].split("="),
                            g = n(m.shift()),
                            v = m.join("=");
                        if (r && r === g) { d = o(v, s); break }
                        r || void 0 === (v = o(v)) || (d[g] = v)
                    }
                    return d
                };
            a.defaults = {}, e.removeCookie = function(t, n) { return void 0 === e.cookie(t) ? !1 : (e.cookie(t, "", e.extend({}, n, { expires: -1 })), !e.cookie(t)) }
        }), ! function(e, t) { "function" == typeof define && define.amd ? define("sifter", t) : "object" == typeof exports ? module.exports = t() : e.Sifter = t() }(this, function() {
            var e = function(e, t) { this.items = e, this.settings = t || { diacritics: !0 } };
            e.prototype.tokenize = function(e) {
                if (e = i(String(e || "").toLowerCase()), !e || !e.length) return [];
                var t, n, o, a, l = [],
                    u = e.split(/ +/);
                for (t = 0, n = u.length; n > t; t++) {
                    if (o = r(u[t]), this.settings.diacritics)
                        for (a in s) s.hasOwnProperty(a) && (o = o.replace(new RegExp(a, "g"), s[a]));
                    l.push({ string: u[t], regex: new RegExp(o, "i") })
                }
                return l
            }, e.prototype.iterator = function(e, t) {
                var n;
                n = o(e) ? Array.prototype.forEach || function(e) { for (var t = 0, n = this.length; n > t; t++) e(this[t], t, this) } : function(e) { for (var t in this) this.hasOwnProperty(t) && e(this[t], t, this) }, n.apply(e, [t])
            }, e.prototype.getScoreFunction = function(e, t) {
                var n, i, r, o;
                n = this, e = n.prepareSearch(e, t), r = e.tokens, i = e.options.fields, o = r.length;
                var s = function(e, t) { var n, i; return e ? (e = String(e || ""), i = e.search(t.regex), -1 === i ? 0 : (n = t.string.length / e.length, 0 === i && (n += .5), n)) : 0 },
                    a = function() { var e = i.length; return e ? 1 === e ? function(e, t) { return s(t[i[0]], e) } : function(t, n) { for (var r = 0, o = 0; e > r; r++) o += s(n[i[r]], t); return o / e } : function() { return 0 } }();
                return o ? 1 === o ? function(e) { return a(r[0], e) } : "and" === e.options.conjunction ? function(e) {
                    for (var t, n = 0, i = 0; o > n; n++) {
                        if (t = a(r[n], e), 0 >= t) return 0;
                        i += t
                    }
                    return i / o
                } : function(e) { for (var t = 0, n = 0; o > t; t++) n += a(r[t], e); return n / o } : function() { return 0 }
            }, e.prototype.getSortFunction = function(e, n) {
                var i, r, o, s, a, l, u, c, d, h, p;
                if (o = this, e = o.prepareSearch(e, n), p = !e.query && n.sort_empty || n.sort, d = function(e, t) { return "$score" === e ? t.score : o.items[t.id][e] }, a = [], p)
                    for (i = 0, r = p.length; r > i; i++)(e.query || "$score" !== p[i].field) && a.push(p[i]);
                if (e.query) {
                    for (h = !0, i = 0, r = a.length; r > i; i++)
                        if ("$score" === a[i].field) { h = !1; break }
                    h && a.unshift({ field: "$score", direction: "desc" })
                } else
                    for (i = 0, r = a.length; r > i; i++)
                        if ("$score" === a[i].field) { a.splice(i, 1); break } for (c = [], i = 0, r = a.length; r > i; i++) c.push("desc" === a[i].direction ? -1 : 1);
                return l = a.length, l ? 1 === l ? (s = a[0].field, u = c[0], function(e, n) { return u * t(d(s, e), d(s, n)) }) : function(e, n) {
                    var i, r, o;
                    for (i = 0; l > i; i++)
                        if (o = a[i].field, r = c[i] * t(d(o, e), d(o, n))) return r;
                    return 0
                } : null
            }, e.prototype.prepareSearch = function(e, t) {
                if ("object" == typeof e) return e;
                t = n({}, t);
                var i = t.fields,
                    r = t.sort,
                    s = t.sort_empty;
                return i && !o(i) && (t.fields = [i]), r && !o(r) && (t.sort = [r]), s && !o(s) && (t.sort_empty = [s]), { options: t, query: String(e || "").toLowerCase(), tokens: this.tokenize(e), total: 0, items: [] }
            }, e.prototype.search = function(e, t) { var n, i, r, o, s = this; return i = this.prepareSearch(e, t), t = i.options, e = i.query, o = t.score || s.getScoreFunction(i), e.length ? s.iterator(s.items, function(e, r) { n = o(e), (t.filter === !1 || n > 0) && i.items.push({ score: n, id: r }) }) : s.iterator(s.items, function(e, t) { i.items.push({ score: 1, id: t }) }), r = s.getSortFunction(i, t), r && i.items.sort(r), i.total = i.items.length, "number" == typeof t.limit && (i.items = i.items.slice(0, t.limit)), i };
            var t = function(e, t) { return "number" == typeof e && "number" == typeof t ? e > t ? 1 : t > e ? -1 : 0 : (e = String(e || "").toLowerCase(), t = String(t || "").toLowerCase(), e > t ? 1 : t > e ? -1 : 0) },
                n = function(e) {
                    var t, n, i, r;
                    for (t = 1, n = arguments.length; n > t; t++)
                        if (r = arguments[t])
                            for (i in r) r.hasOwnProperty(i) && (e[i] = r[i]);
                    return e
                },
                i = function(e) { return (e + "").replace(/^\s+|\s+$|/g, "") },
                r = function(e) { return (e + "").replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1") },
                o = Array.isArray || $ && $.isArray || function(e) { return "[object Array]" === Object.prototype.toString.call(e) },
                s = { a: "[aÀÁÂÃÄÅàáâãäåĀā]", c: "[cÇçćĆčČ]", d: "[dđĐďĎ]", e: "[eÈÉÊËèéêëěĚĒē]", i: "[iÌÍÎÏìíîïĪī]", n: "[nÑñňŇ]", o: "[oÒÓÔÕÕÖØòóôõöøŌō]", r: "[rřŘ]", s: "[sŠš]", t: "[tťŤ]", u: "[uÙÚÛÜùúûüůŮŪū]", y: "[yŸÿýÝ]", z: "[zŽž]" };
            return e
        }),
        function(e, t) { "function" == typeof define && define.amd ? define("microplugin", t) : "object" == typeof exports ? module.exports = t() : e.MicroPlugin = t() }(this, function() {
            var e = {};
            e.mixin = function(e) {
                e.plugins = {}, e.prototype.initializePlugins = function(e) {
                    var n, i, r, o = this,
                        s = [];
                    if (o.plugins = { names: [], settings: {}, requested: {}, loaded: {} }, t.isArray(e))
                        for (n = 0, i = e.length; i > n; n++) "string" == typeof e[n] ? s.push(e[n]) : (o.plugins.settings[e[n].name] = e[n].options, s.push(e[n].name));
                    else if (e)
                        for (r in e) e.hasOwnProperty(r) && (o.plugins.settings[r] = e[r], s.push(r));
                    for (; s.length;) o.require(s.shift())
                }, e.prototype.loadPlugin = function(t) {
                    var n = this,
                        i = n.plugins,
                        r = e.plugins[t];
                    if (!e.plugins.hasOwnProperty(t)) throw new Error('Unable to find "' + t + '" plugin');
                    i.requested[t] = !0, i.loaded[t] = r.fn.apply(n, [n.plugins.settings[t] || {}]), i.names.push(t)
                }, e.prototype.require = function(e) {
                    var t = this,
                        n = t.plugins;
                    if (!t.plugins.loaded.hasOwnProperty(e)) {
                        if (n.requested[e]) throw new Error('Plugin has circular dependency ("' + e + '")');
                        t.loadPlugin(e)
                    }
                    return n.loaded[e]
                }, e.define = function(t, n) { e.plugins[t] = { name: t, fn: n } }
            };
            var t = { isArray: Array.isArray || function(e) { return "[object Array]" === Object.prototype.toString.call(e) } };
            return e
        }),
        function(e, t) { "function" == typeof define && define.amd ? define("selectize", ["jquery", "sifter", "microplugin"], t) : "object" == typeof exports ? module.exports = t(require("jquery"), require("sifter"), require("microplugin")) : e.Selectize = t(e.jQuery, e.Sifter, e.MicroPlugin) }(this, function(e, t, n) {
            "use strict";
            var i = function(e, t) {
                    if ("string" != typeof t || t.length) {
                        var n = "string" == typeof t ? new RegExp(t, "i") : t,
                            i = function(e) {
                                var t = 0;
                                if (3 === e.nodeType) {
                                    var r = e.data.search(n);
                                    if (r >= 0 && e.data.length > 0) {
                                        var o = e.data.match(n),
                                            s = document.createElement("span");
                                        s.className = "highlight";
                                        var a = e.splitText(r),
                                            l = (a.splitText(o[0].length), a.cloneNode(!0));
                                        s.appendChild(l), a.parentNode.replaceChild(s, a), t = 1
                                    }
                                } else if (1 === e.nodeType && e.childNodes && !/(script|style)/i.test(e.tagName))
                                    for (var u = 0; u < e.childNodes.length; ++u) u += i(e.childNodes[u]);
                                return t
                            };
                        return e.each(function() { i(this) })
                    }
                },
                r = function() {};
            r.prototype = {
                on: function(e, t) { this._events = this._events || {}, this._events[e] = this._events[e] || [], this._events[e].push(t) },
                off: function(e, t) { var n = arguments.length; return 0 === n ? delete this._events : 1 === n ? delete this._events[e] : (this._events = this._events || {}, void(e in this._events != 0 && this._events[e].splice(this._events[e].indexOf(t), 1))) },
                trigger: function(e) {
                    if (this._events = this._events || {}, e in this._events != 0)
                        for (var t = 0; t < this._events[e].length; t++) this._events[e][t].apply(this, Array.prototype.slice.call(arguments, 1))
                }
            }, r.mixin = function(e) { for (var t = ["on", "off", "trigger"], n = 0; n < t.length; n++) e.prototype[t[n]] = r.prototype[t[n]] };
            var o = /Mac/.test(navigator.userAgent),
                s = 65,
                a = 13,
                l = 27,
                u = 37,
                c = 38,
                d = 80,
                h = 39,
                p = 40,
                f = 78,
                m = 8,
                g = 46,
                v = 16,
                y = o ? 91 : 17,
                b = o ? 18 : 17,
                w = 9,
                _ = 1,
                x = 2,
                C = function(e) { return "undefined" != typeof e },
                T = function(e) { return "undefined" == typeof e || null === e ? null : "boolean" == typeof e ? e ? "1" : "0" : e + "" },
                k = function(e) { return (e + "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") },
                E = function(e) { return (e + "").replace(/\$/g, "$$$$") },
                S = {};
            S.before = function(e, t, n) {
                var i = e[t];
                e[t] = function() { return n.apply(e, arguments), i.apply(e, arguments) }
            }, S.after = function(e, t, n) {
                var i = e[t];
                e[t] = function() { var t = i.apply(e, arguments); return n.apply(e, arguments), t }
            };
            var $ = function(t, n) { if (!e.isArray(n)) return n; var i, r, o = {}; for (i = 0, r = n.length; r > i; i++) n[i].hasOwnProperty(t) && (o[n[i][t]] = n[i]); return o },
                j = function(e) { var t = !1; return function() { t || (t = !0, e.apply(this, arguments)) } },
                A = function(e, t) {
                    var n;
                    return function() {
                        var i = this,
                            r = arguments;
                        window.clearTimeout(n), n = window.setTimeout(function() { e.apply(i, r) }, t)
                    }
                },
                M = function(e, t, n) {
                    var i, r = e.trigger,
                        o = {};
                    e.trigger = function() { var n = arguments[0]; return -1 === t.indexOf(n) ? r.apply(e, arguments) : void(o[n] = arguments) }, n.apply(e, []), e.trigger = r;
                    for (i in o) o.hasOwnProperty(i) && r.apply(e, o[i])
                },
                O = function(e, t, n, i) { e.on(t, n, function(t) { for (var n = t.target; n && n.parentNode !== e[0];) n = n.parentNode; return t.currentTarget = n, i.apply(this, [t]) }) },
                I = function(e) {
                    var t = {};
                    if ("selectionStart" in e) t.start = e.selectionStart, t.length = e.selectionEnd - t.start;
                    else if (document.selection) {
                        e.focus();
                        var n = document.selection.createRange(),
                            i = document.selection.createRange().text.length;
                        n.moveStart("character", -e.value.length), t.start = n.text.length - i, t.length = i
                    }
                    return t
                },
                P = function(e, t, n) {
                    var i, r, o = {};
                    if (n)
                        for (i = 0, r = n.length; r > i; i++) o[n[i]] = e.css(n[i]);
                    else o = e.css();
                    t.css(o)
                },
                F = function(t, n) {
                    if (!t) return 0;
                    var i = e("<test>").css({ position: "absolute", top: -99999, left: -99999, width: "auto", padding: 0, whiteSpace: "pre" }).text(t).appendTo("body");
                    P(n, i, ["letterSpacing", "fontSize", "fontFamily", "fontWeight", "textTransform"]);
                    var r = i.width();
                    return i.remove(), r
                },
                N = function(e) {
                    var t = null,
                        n = function(n, i) {
                            var r, o, s, a, l, u, c, d;
                            n = n || window.event || {}, i = i || {}, n.metaKey || n.altKey || (i.force || e.data("grow") !== !1) && (r = e.val(), n.type && "keydown" === n.type.toLowerCase() && (o = n.keyCode, s = o >= 97 && 122 >= o || o >= 65 && 90 >= o || o >= 48 && 57 >= o || 32 === o, o === g || o === m ? (d = I(e[0]), d.length ? r = r.substring(0, d.start) + r.substring(d.start + d.length) : o === m && d.start ? r = r.substring(0, d.start - 1) + r.substring(d.start + 1) : o === g && "undefined" != typeof d.start && (r = r.substring(0, d.start) + r.substring(d.start + 1))) : s && (u = n.shiftKey, c = String.fromCharCode(n.keyCode), c = u ? c.toUpperCase() : c.toLowerCase(), r += c)), a = e.attr("placeholder"), !r && a && (r = a), l = F(r, e) + 4, l !== t && (t = l, e.width(l), e.triggerHandler("resize")))
                        };
                    e.on("keydown keyup update blur", n), n()
                },
                L = function(n, i) {
                    var r, o, s = this;
                    o = n[0], o.selectize = s;
                    var a = window.getComputedStyle && window.getComputedStyle(o, null);
                    r = a ? a.getPropertyValue("direction") : o.currentStyle && o.currentStyle.direction, r = r || n.parents("[dir]:first").attr("dir") || "", e.extend(s, { settings: i, $input: n, tagType: "select" === o.tagName.toLowerCase() ? _ : x, rtl: /rtl/i.test(r), eventNS: ".selectize" + ++L.count, highlightedValue: null, isOpen: !1, isDisabled: !1, isRequired: n.is("[required]"), isInvalid: !1, isLocked: !1, isFocused: !1, isInputHidden: !1, isSetup: !1, isShiftDown: !1, isCmdDown: !1, isCtrlDown: !1, ignoreFocus: !1, ignoreBlur: !1, ignoreHover: !1, hasOptions: !1, currentResults: null, lastValue: "", caretPos: 0, loading: 0, loadedSearches: {}, $activeOption: null, $activeItems: [], optgroups: {}, options: {}, userOptions: {}, items: [], renderCache: {}, onSearchChange: null === i.loadThrottle ? s.onSearchChange : A(s.onSearchChange, i.loadThrottle) }), s.sifter = new t(this.options, { diacritics: i.diacritics }), e.extend(s.options, $(i.valueField, i.options)), delete s.settings.options, e.extend(s.optgroups, $(i.optgroupValueField, i.optgroups)), delete s.settings.optgroups, s.settings.mode = s.settings.mode || (1 === s.settings.maxItems ? "single" : "multi"), "boolean" != typeof s.settings.hideSelected && (s.settings.hideSelected = "multi" === s.settings.mode), s.initializePlugins(s.settings.plugins), s.setupCallbacks(), s.setupTemplates(), s.setup()
                };
            return r.mixin(L), n.mixin(L), e.extend(L.prototype, {
                setup: function() {
                    var t, n, i, r, s, a, l, u, c, d, h = this,
                        p = h.settings,
                        f = h.eventNS,
                        m = e(window),
                        g = e(document),
                        w = h.$input;
                    l = h.settings.mode, u = w.attr("tabindex") || "", c = w.attr("class") || "", t = e("<div>").addClass(p.wrapperClass).addClass(c).addClass(l), n = e("<div>").addClass(p.inputClass).addClass("items").appendTo(t), i = e('<input type="text" autocomplete="off" />').appendTo(n).attr("tabindex", u), a = e(p.dropdownParent || t), r = e("<div>").addClass(p.dropdownClass).addClass(l).hide().appendTo(a), s = e("<div>").addClass(p.dropdownContentClass).appendTo(r), h.settings.copyClassesToDropdown && r.addClass(c), t.css({ width: w[0].style.width }), h.plugins.names.length && (d = "plugin-" + h.plugins.names.join(" plugin-"), t.addClass(d), r.addClass(d)), (null === p.maxItems || p.maxItems > 1) && h.tagType === _ && w.attr("multiple", "multiple"), h.settings.placeholder && i.attr("placeholder", p.placeholder), w.attr("autocorrect") && i.attr("autocorrect", w.attr("autocorrect")), w.attr("autocapitalize") && i.attr("autocapitalize", w.attr("autocapitalize")), h.$wrapper = t, h.$control = n, h.$control_input = i, h.$dropdown = r, h.$dropdown_content = s, r.on("mouseenter", "[data-selectable]", function() { return h.onOptionHover.apply(h, arguments) }), r.on("mousedown", "[data-selectable]", function() { return h.onOptionSelect.apply(h, arguments) }), O(n, "mousedown", "*:not(input)", function() { return h.onItemSelect.apply(h, arguments) }), N(i), n.on({ mousedown: function() { return h.onMouseDown.apply(h, arguments) }, click: function() { return h.onClick.apply(h, arguments) } }), i.on({ mousedown: function(e) { e.stopPropagation() }, keydown: function() { return h.onKeyDown.apply(h, arguments) }, keyup: function() { return h.onKeyUp.apply(h, arguments) }, keypress: function() { return h.onKeyPress.apply(h, arguments) }, resize: function() { h.positionDropdown.apply(h, []) }, blur: function() { return h.onBlur.apply(h, arguments) }, focus: function() { return h.ignoreBlur = !1, h.onFocus.apply(h, arguments) }, paste: function() { return h.onPaste.apply(h, arguments) } }), g.on("keydown" + f, function(e) { h.isCmdDown = e[o ? "metaKey" : "ctrlKey"], h.isCtrlDown = e[o ? "altKey" : "ctrlKey"], h.isShiftDown = e.shiftKey }), g.on("keyup" + f, function(e) { e.keyCode === b && (h.isCtrlDown = !1), e.keyCode === v && (h.isShiftDown = !1), e.keyCode === y && (h.isCmdDown = !1) }), g.on("mousedown" + f, function(e) {
                        if (h.isFocused) {
                            if (e.target === h.$dropdown[0] || e.target.parentNode === h.$dropdown[0]) return !1;
                            h.$control.has(e.target).length || e.target === h.$control[0] || h.blur()
                        }
                    }), m.on(["scroll" + f, "resize" + f].join(" "), function() { h.isOpen && h.positionDropdown.apply(h, arguments) }), m.on("mousemove" + f, function() { h.ignoreHover = !1 }), this.revertSettings = { $children: w.children().detach(), tabindex: w.attr("tabindex") }, w.attr("tabindex", -1).hide().after(h.$wrapper), e.isArray(p.items) && (h.setValue(p.items), delete p.items), w[0].validity && w.on("invalid" + f, function(e) { e.preventDefault(), h.isInvalid = !0, h.refreshState() }), h.updateOriginalInput(), h.refreshItems(), h.refreshState(), h.updatePlaceholder(), h.isSetup = !0, w.is(":disabled") && h.disable(), h.on("change", this.onChange), w.data("selectize", h), w.addClass("selectized"), h.trigger("initialize"), p.preload === !0 && h.onSearchChange("")
                },
                setupTemplates: function() {
                    var t = this,
                        n = t.settings.labelField,
                        i = t.settings.optgroupLabelField,
                        r = { optgroup: function(e) { return '<div class="optgroup">' + e.html + "</div>" }, optgroup_header: function(e, t) { return '<div class="optgroup-header">' + t(e[i]) + "</div>" }, option: function(e, t) { return '<div class="option">' + t(e[n]) + "</div>" }, item: function(e, t) { return '<div class="item">' + t(e[n]) + "</div>" }, option_create: function(e, t) { return '<div class="create">Add <strong>' + t(e.input) + "</strong>&hellip;</div>" } };
                    t.settings.render = e.extend({}, r, t.settings.render)
                },
                setupCallbacks: function() { var e, t, n = { initialize: "onInitialize", change: "onChange", item_add: "onItemAdd", item_remove: "onItemRemove", clear: "onClear", option_add: "onOptionAdd", option_remove: "onOptionRemove", option_clear: "onOptionClear", dropdown_open: "onDropdownOpen", dropdown_close: "onDropdownClose", type: "onType", load: "onLoad" }; for (e in n) n.hasOwnProperty(e) && (t = this.settings[n[e]], t && this.on(e, t)) },
                onClick: function(e) {
                    var t = this;
                    t.isFocused || (t.focus(), e.preventDefault())
                },
                onMouseDown: function(t) {
                    var n = this,
                        i = t.isDefaultPrevented();
                    if (e(t.target), n.isFocused) { if (t.target !== n.$control_input[0]) return "single" === n.settings.mode ? n.isOpen ? n.close() : n.open() : i || n.setActiveItem(null), !1 } else i || window.setTimeout(function() { n.focus() }, 0)
                },
                onChange: function() { this.$input.trigger("change") },
                onPaste: function(e) {
                    var t = this;
                    (t.isFull() || t.isInputHidden || t.isLocked) && e.preventDefault()
                },
                onKeyPress: function(e) { if (this.isLocked) return e && e.preventDefault(); var t = String.fromCharCode(e.keyCode || e.which); return this.settings.create && t === this.settings.delimiter ? (this.createItem(), e.preventDefault(), !1) : void 0 },
                onKeyDown: function(e) {
                    var t = (e.target === this.$control_input[0], this);
                    if (t.isLocked) return void(e.keyCode !== w && e.preventDefault());
                    switch (e.keyCode) {
                        case s:
                            if (t.isCmdDown) return void t.selectAll();
                            break;
                        case l:
                            return void t.close();
                        case f:
                            if (!e.ctrlKey || e.altKey) break;
                        case p:
                            if (!t.isOpen && t.hasOptions) t.open();
                            else if (t.$activeOption) {
                                t.ignoreHover = !0;
                                var n = t.getAdjacentOption(t.$activeOption, 1);
                                n.length && t.setActiveOption(n, !0, !0)
                            }
                            return void e.preventDefault();
                        case d:
                            if (!e.ctrlKey || e.altKey) break;
                        case c:
                            if (t.$activeOption) {
                                t.ignoreHover = !0;
                                var i = t.getAdjacentOption(t.$activeOption, -1);
                                i.length && t.setActiveOption(i, !0, !0)
                            }
                            return void e.preventDefault();
                        case a:
                            return t.isOpen && t.$activeOption && t.onOptionSelect({ currentTarget: t.$activeOption }), void e.preventDefault();
                        case u:
                            return void t.advanceSelection(-1, e);
                        case h:
                            return void t.advanceSelection(1, e);
                        case w:
                            return t.settings.selectOnTab && t.isOpen && t.$activeOption && (t.onOptionSelect({ currentTarget: t.$activeOption }), e.preventDefault()), void(t.settings.create && t.createItem() && e.preventDefault());
                        case m:
                        case g:
                            return void t.deleteSelection(e)
                    }
                    return !t.isFull() && !t.isInputHidden || (o ? e.metaKey : e.ctrlKey) ? void 0 : void e.preventDefault()
                },
                onKeyUp: function(e) {
                    var t = this;
                    if (t.isLocked) return e && e.preventDefault();
                    var n = t.$control_input.val() || "";
                    t.lastValue !== n && (t.lastValue = n, t.onSearchChange(n), t.refreshOptions(), t.trigger("type", n))
                },
                onSearchChange: function(e) {
                    var t = this,
                        n = t.settings.load;
                    n && (t.loadedSearches.hasOwnProperty(e) || (t.loadedSearches[e] = !0, t.load(function(i) { n.apply(t, [e, i]) })))
                },
                onFocus: function(e) { var t = this; return t.isFocused = !0, t.isDisabled ? (t.blur(), e && e.preventDefault(), !1) : void(t.ignoreFocus || ("focus" === t.settings.preload && t.onSearchChange(""), t.$activeItems.length || (t.showInput(), t.setActiveItem(null), t.refreshOptions(!!t.settings.openOnFocus)), t.refreshState())) },
                onBlur: function(e) {
                    var t = this;
                    if (t.isFocused = !1, !t.ignoreFocus) {
                        if (!t.ignoreBlur && document.activeElement === t.$dropdown_content[0]) return t.ignoreBlur = !0, void t.onFocus(e);
                        t.settings.create && t.settings.createOnBlur && t.createItem(!1), t.close(), t.setTextboxValue(""), t.setActiveItem(null), t.setActiveOption(null), t.setCaret(t.items.length), t.refreshState()
                    }
                },
                onOptionHover: function(e) { this.ignoreHover || this.setActiveOption(e.currentTarget, !1) },
                onOptionSelect: function(t) {
                    var n, i, r = this;
                    t.preventDefault && (t.preventDefault(), t.stopPropagation()), i = e(t.currentTarget), i.hasClass("create") ? r.createItem() : (n = i.attr("data-value"), "undefined" != typeof n && (r.lastQuery = null, r.setTextboxValue(""), r.addItem(n), !r.settings.hideSelected && t.type && /mouse/.test(t.type) && r.setActiveOption(r.getOption(n))))
                },
                onItemSelect: function(e) {
                    var t = this;
                    t.isLocked || "multi" === t.settings.mode && (e.preventDefault(), t.setActiveItem(e.currentTarget, e))
                },
                load: function(e) {
                    var t = this,
                        n = t.$wrapper.addClass("loading");
                    t.loading++, e.apply(t, [function(e) { t.loading = Math.max(t.loading - 1, 0), e && e.length && (t.addOption(e), t.refreshOptions(t.isFocused && !t.isInputHidden)), t.loading || n.removeClass("loading"), t.trigger("load", e) }])
                },
                setTextboxValue: function(e) {
                    var t = this.$control_input,
                        n = t.val() !== e;
                    n && (t.val(e).triggerHandler("update"), this.lastValue = e)
                },
                getValue: function() { return this.tagType === _ && this.$input.attr("multiple") ? this.items : this.items.join(this.settings.delimiter) },
                setValue: function(e) { M(this, ["change"], function() { this.clear(), this.addItems(e) }) },
                setActiveItem: function(t, n) {
                    var i, r, o, s, a, l, u, c, d = this;
                    if ("single" !== d.settings.mode) {
                        if (t = e(t), !t.length) return e(d.$activeItems).removeClass("active"), d.$activeItems = [], void(d.isFocused && d.showInput());
                        if (i = n && n.type.toLowerCase(), "mousedown" === i && d.isShiftDown && d.$activeItems.length) {
                            for (c = d.$control.children(".active:last"), s = Array.prototype.indexOf.apply(d.$control[0].childNodes, [c[0]]), a = Array.prototype.indexOf.apply(d.$control[0].childNodes, [t[0]]), s > a && (u = s, s = a, a = u), r = s; a >= r; r++) l = d.$control[0].childNodes[r], -1 === d.$activeItems.indexOf(l) && (e(l).addClass("active"), d.$activeItems.push(l));
                            n.preventDefault()
                        } else "mousedown" === i && d.isCtrlDown || "keydown" === i && this.isShiftDown ? t.hasClass("active") ? (o = d.$activeItems.indexOf(t[0]), d.$activeItems.splice(o, 1), t.removeClass("active")) : d.$activeItems.push(t.addClass("active")[0]) : (e(d.$activeItems).removeClass("active"), d.$activeItems = [t.addClass("active")[0]]);
                        d.hideInput(), this.isFocused || d.focus()
                    }
                },
                setActiveOption: function(t, n, i) {
                    var r, o, s, a, l, u = this;
                    u.$activeOption && u.$activeOption.removeClass("active"), u.$activeOption = null, t = e(t), t.length && (u.$activeOption = t.addClass("active"), (n || !C(n)) && (r = u.$dropdown_content.height(), o = u.$activeOption.outerHeight(!0), n = u.$dropdown_content.scrollTop() || 0, s = u.$activeOption.offset().top - u.$dropdown_content.offset().top + n, a = s, l = s - r + o, s + o > r + n ? u.$dropdown_content.stop().animate({ scrollTop: l }, i ? u.settings.scrollDuration : 0) : n > s && u.$dropdown_content.stop().animate({ scrollTop: a }, i ? u.settings.scrollDuration : 0)))
                },
                selectAll: function() { var e = this; "single" !== e.settings.mode && (e.$activeItems = Array.prototype.slice.apply(e.$control.children(":not(input)").addClass("active")), e.$activeItems.length && (e.hideInput(), e.close()), e.focus()) },
                hideInput: function() {
                    var e = this;
                    e.setTextboxValue(""), e.$control_input.css({ opacity: 0, position: "absolute", left: e.rtl ? 1e4 : -1e4 }), e.isInputHidden = !0
                },
                showInput: function() {
                    this.$control_input.css({ opacity: 1, position: "relative", left: 0 }), this.isInputHidden = !1;
                },
                focus: function() {
                    var e = this;
                    e.isDisabled || (e.ignoreFocus = !0, e.$control_input[0].focus(), window.setTimeout(function() { e.ignoreFocus = !1, e.onFocus() }, 0))
                },
                blur: function() { this.$control_input.trigger("blur") },
                getScoreFunction: function(e) { return this.sifter.getScoreFunction(e, this.getSearchOptions()) },
                getSearchOptions: function() {
                    var e = this.settings,
                        t = e.sortField;
                    return "string" == typeof t && (t = { field: t }), { fields: e.searchField, conjunction: e.searchConjunction, sort: t }
                },
                search: function(t) {
                    var n, i, r, o = this,
                        s = o.settings,
                        a = this.getSearchOptions();
                    if (s.score && (r = o.settings.score.apply(this, [t]), "function" != typeof r)) throw new Error('Selectize "score" setting must be a function that returns a function');
                    if (t !== o.lastQuery ? (o.lastQuery = t, i = o.sifter.search(t, e.extend(a, { score: r })), o.currentResults = i) : i = e.extend(!0, {}, o.currentResults), s.hideSelected)
                        for (n = i.items.length - 1; n >= 0; n--) - 1 !== o.items.indexOf(T(i.items[n].id)) && i.items.splice(n, 1);
                    return i
                },
                refreshOptions: function(t) {
                    var n, r, o, s, a, l, u, c, d, h, p, f, m, g, v, y;
                    "undefined" == typeof t && (t = !0);
                    var b = this,
                        w = e.trim(b.$control_input.val()),
                        _ = b.search(w),
                        x = b.$dropdown_content,
                        C = b.$activeOption && T(b.$activeOption.attr("data-value"));
                    if (s = _.items.length, "number" == typeof b.settings.maxOptions && (s = Math.min(s, b.settings.maxOptions)), a = {}, b.settings.optgroupOrder)
                        for (l = b.settings.optgroupOrder, n = 0; n < l.length; n++) a[l[n]] = [];
                    else l = [];
                    for (n = 0; s > n; n++)
                        for (u = b.options[_.items[n].id], c = b.render("option", u), d = u[b.settings.optgroupField] || "", h = e.isArray(d) ? d : [d], r = 0, o = h && h.length; o > r; r++) d = h[r], b.optgroups.hasOwnProperty(d) || (d = ""), a.hasOwnProperty(d) || (a[d] = [], l.push(d)), a[d].push(c);
                    for (p = [], n = 0, s = l.length; s > n; n++) d = l[n], b.optgroups.hasOwnProperty(d) && a[d].length ? (f = b.render("optgroup_header", b.optgroups[d]) || "", f += a[d].join(""), p.push(b.render("optgroup", e.extend({}, b.optgroups[d], { html: f })))) : p.push(a[d].join(""));
                    if (x.html(p.join("")), b.settings.highlight && _.query.length && _.tokens.length)
                        for (n = 0, s = _.tokens.length; s > n; n++) i(x, _.tokens[n].regex);
                    if (!b.settings.hideSelected)
                        for (n = 0, s = b.items.length; s > n; n++) b.getOption(b.items[n]).addClass("selected");
                    m = b.canCreate(w), m && (x.prepend(b.render("option_create", { input: w })), y = e(x[0].childNodes[0])), b.hasOptions = _.items.length > 0 || m, b.hasOptions ? (_.items.length > 0 ? (v = C && b.getOption(C), v && v.length ? g = v : "single" === b.settings.mode && b.items.length && (g = b.getOption(b.items[0])), g && g.length || (g = y && !b.settings.addPrecedence ? b.getAdjacentOption(y, 1) : x.find("[data-selectable]:first"))) : g = y, b.setActiveOption(g), t && !b.isOpen && b.open()) : (b.setActiveOption(null), t && b.isOpen && b.close())
                },
                addOption: function(t) {
                    var n, i, r, o = this;
                    if (e.isArray(t))
                        for (n = 0, i = t.length; i > n; n++) o.addOption(t[n]);
                    else r = T(t[o.settings.valueField]), "string" != typeof r || o.options.hasOwnProperty(r) || (o.userOptions[r] = !0, o.options[r] = t, o.lastQuery = null, o.trigger("option_add", r, t))
                },
                addOptionGroup: function(e, t) { this.optgroups[e] = t, this.trigger("optgroup_add", e, t) },
                updateOption: function(t, n) {
                    var i, r, o, s, a, l, u = this;
                    if (t = T(t), o = T(n[u.settings.valueField]), null !== t && u.options.hasOwnProperty(t)) {
                        if ("string" != typeof o) throw new Error("Value must be set in option data");
                        o !== t && (delete u.options[t], s = u.items.indexOf(t), -1 !== s && u.items.splice(s, 1, o)), u.options[o] = n, a = u.renderCache.item, l = u.renderCache.option, a && (delete a[t], delete a[o]), l && (delete l[t], delete l[o]), -1 !== u.items.indexOf(o) && (i = u.getItem(t), r = e(u.render("item", n)), i.hasClass("active") && r.addClass("active"), i.replaceWith(r)), u.lastQuery = null, u.isOpen && u.refreshOptions(!1)
                    }
                },
                removeOption: function(e) {
                    var t = this;
                    e = T(e);
                    var n = t.renderCache.item,
                        i = t.renderCache.option;
                    n && delete n[e], i && delete i[e], delete t.userOptions[e], delete t.options[e], t.lastQuery = null, t.trigger("option_remove", e), t.removeItem(e)
                },
                clearOptions: function() {
                    var e = this;
                    e.loadedSearches = {}, e.userOptions = {}, e.renderCache = {}, e.options = e.sifter.items = {}, e.lastQuery = null, e.trigger("option_clear"), e.clear()
                },
                getOption: function(e) { return this.getElementWithValue(e, this.$dropdown_content.find("[data-selectable]")) },
                getAdjacentOption: function(t, n) {
                    var i = this.$dropdown.find("[data-selectable]"),
                        r = i.index(t) + n;
                    return r >= 0 && r < i.length ? i.eq(r) : e()
                },
                getElementWithValue: function(t, n) {
                    if (t = T(t), "undefined" != typeof t && null !== t)
                        for (var i = 0, r = n.length; r > i; i++)
                            if (n[i].getAttribute("data-value") === t) return e(n[i]);
                    return e()
                },
                getItem: function(e) { return this.getElementWithValue(e, this.$control.children()) },
                addItems: function(t) { for (var n = e.isArray(t) ? t : [t], i = 0, r = n.length; r > i; i++) this.isPending = r - 1 > i, this.addItem(n[i]) },
                addItem: function(t) {
                    M(this, ["change"], function() {
                        var n, i, r, o, s, a = this,
                            l = a.settings.mode;
                        return t = T(t), -1 !== a.items.indexOf(t) ? void("single" === l && a.close()) : void(a.options.hasOwnProperty(t) && ("single" === l && a.clear(), "multi" === l && a.isFull() || (n = e(a.render("item", a.options[t])), s = a.isFull(), a.items.splice(a.caretPos, 0, t), a.insertAtCaret(n), (!a.isPending || !s && a.isFull()) && a.refreshState(), a.isSetup && (r = a.$dropdown_content.find("[data-selectable]"), a.isPending || (i = a.getOption(t), o = a.getAdjacentOption(i, 1).attr("data-value"), a.refreshOptions(a.isFocused && "single" !== l), o && a.setActiveOption(a.getOption(o))), !r.length || a.isFull() ? a.close() : a.positionDropdown(), a.updatePlaceholder(), a.trigger("item_add", t, n), a.updateOriginalInput()))))
                    })
                },
                removeItem: function(e) {
                    var t, n, i, r = this;
                    t = "object" == typeof e ? e : r.getItem(e), e = T(t.attr("data-value")), n = r.items.indexOf(e), -1 !== n && (t.remove(), t.hasClass("active") && (i = r.$activeItems.indexOf(t[0]), r.$activeItems.splice(i, 1)), r.items.splice(n, 1), r.lastQuery = null, !r.settings.persist && r.userOptions.hasOwnProperty(e) && r.removeOption(e), n < r.caretPos && r.setCaret(r.caretPos - 1), r.refreshState(), r.updatePlaceholder(), r.updateOriginalInput(), r.positionDropdown(), r.trigger("item_remove", e))
                },
                createItem: function(t) {
                    var n = this,
                        i = e.trim(n.$control_input.val() || ""),
                        r = n.caretPos;
                    if (!n.canCreate(i)) return !1;
                    n.lock(), "undefined" == typeof t && (t = !0);
                    var o = "function" == typeof n.settings.create ? this.settings.create : function(e) { var t = {}; return t[n.settings.labelField] = e, t[n.settings.valueField] = e, t },
                        s = j(function(e) { if (n.unlock(), e && "object" == typeof e) { var i = T(e[n.settings.valueField]); "string" == typeof i && (n.setTextboxValue(""), n.addOption(e), n.setCaret(r), n.addItem(i), n.refreshOptions(t && "single" !== n.settings.mode)) } }),
                        a = o.apply(this, [i, s]);
                    return "undefined" != typeof a && s(a), !0
                },
                refreshItems: function() {
                    if (this.lastQuery = null, this.isSetup)
                        for (var e = 0; e < this.items.length; e++) this.addItem(this.items);
                    this.refreshState(), this.updateOriginalInput()
                },
                refreshState: function() {
                    var e, t = this;
                    t.isRequired && (t.items.length && (t.isInvalid = !1), t.$control_input.prop("required", e)), t.refreshClasses()
                },
                refreshClasses: function() {
                    var t = this,
                        n = t.isFull(),
                        i = t.isLocked;
                    t.$wrapper.toggleClass("rtl", t.rtl), t.$control.toggleClass("focus", t.isFocused).toggleClass("disabled", t.isDisabled).toggleClass("required", t.isRequired).toggleClass("invalid", t.isInvalid).toggleClass("locked", i).toggleClass("full", n).toggleClass("not-full", !n).toggleClass("input-active", t.isFocused && !t.isInputHidden).toggleClass("dropdown-active", t.isOpen).toggleClass("has-options", !e.isEmptyObject(t.options)).toggleClass("has-items", t.items.length > 0), t.$control_input.data("grow", !n && !i)
                },
                isFull: function() { return null !== this.settings.maxItems && this.items.length >= this.settings.maxItems },
                updateOriginalInput: function() {
                    var e, t, n, i = this;
                    if (i.tagType === _) {
                        for (n = [], e = 0, t = i.items.length; t > e; e++) n.push('<option value="' + k(i.items[e]) + '" selected="selected"></option>');
                        n.length || this.$input.attr("multiple") || n.push('<option value="" selected="selected"></option>'), i.$input.html(n.join(""))
                    } else i.$input.val(i.getValue()), i.$input.attr("value", i.$input.val());
                    i.isSetup && i.trigger("change", i.$input.val())
                },
                updatePlaceholder: function() {
                    if (this.settings.placeholder) {
                        var e = this.$control_input;
                        this.items.length ? e.removeAttr("placeholder") : e.attr("placeholder", this.settings.placeholder), e.triggerHandler("update", { force: !0 })
                    }
                },
                open: function() {
                    var e = this;
                    e.isLocked || e.isOpen || "multi" === e.settings.mode && e.isFull() || (e.focus(), e.isOpen = !0, e.refreshState(), e.$dropdown.css({ visibility: "hidden", display: "block" }), e.positionDropdown(), e.$dropdown.css({ visibility: "visible" }), e.trigger("dropdown_open", e.$dropdown))
                },
                close: function() {
                    var e = this,
                        t = e.isOpen;
                    "single" === e.settings.mode && e.items.length && e.hideInput(), e.isOpen = !1, e.$dropdown.hide(), e.setActiveOption(null), e.refreshState(), t && e.trigger("dropdown_close", e.$dropdown)
                },
                positionDropdown: function() {
                    var e = this.$control,
                        t = "body" === this.settings.dropdownParent ? e.offset() : e.position();
                    t.top += e.outerHeight(!0), this.$dropdown.css({ width: e.outerWidth(), top: t.top, left: t.left })
                },
                clear: function() {
                    var e = this;
                    e.items.length && (e.$control.children(":not(input)").remove(), e.items = [], e.lastQuery = null, e.setCaret(0), e.setActiveItem(null), e.updatePlaceholder(), e.updateOriginalInput(), e.refreshState(), e.showInput(), e.trigger("clear"))
                },
                insertAtCaret: function(t) {
                    var n = Math.min(this.caretPos, this.items.length);
                    0 === n ? this.$control.prepend(t) : e(this.$control[0].childNodes[n]).before(t), this.setCaret(n + 1)
                },
                deleteSelection: function(t) {
                    var n, i, r, o, s, a, l, u, c, d = this;
                    if (r = t && t.keyCode === m ? -1 : 1, o = I(d.$control_input[0]), d.$activeOption && !d.settings.hideSelected && (l = d.getAdjacentOption(d.$activeOption, -1).attr("data-value")), s = [], d.$activeItems.length) {
                        for (c = d.$control.children(".active:" + (r > 0 ? "last" : "first")), a = d.$control.children(":not(input)").index(c), r > 0 && a++, n = 0, i = d.$activeItems.length; i > n; n++) s.push(e(d.$activeItems[n]).attr("data-value"));
                        t && (t.preventDefault(), t.stopPropagation())
                    } else(d.isFocused || "single" === d.settings.mode) && d.items.length && (0 > r && 0 === o.start && 0 === o.length ? s.push(d.items[d.caretPos - 1]) : r > 0 && o.start === d.$control_input.val().length && s.push(d.items[d.caretPos]));
                    if (!s.length || "function" == typeof d.settings.onDelete && d.settings.onDelete.apply(d, [s]) === !1) return !1;
                    for ("undefined" != typeof a && d.setCaret(a); s.length;) d.removeItem(s.pop());
                    return d.showInput(), d.positionDropdown(), d.refreshOptions(!0), l && (u = d.getOption(l), u.length && d.setActiveOption(u)), !0
                },
                advanceSelection: function(e, t) {
                    var n, i, r, o, s, a, l = this;
                    0 !== e && (l.rtl && (e *= -1), n = e > 0 ? "last" : "first", i = I(l.$control_input[0]), l.isFocused && !l.isInputHidden ? (o = l.$control_input.val().length, s = 0 > e ? 0 === i.start && 0 === i.length : i.start === o, s && !o && l.advanceCaret(e, t)) : (a = l.$control.children(".active:" + n), a.length && (r = l.$control.children(":not(input)").index(a), l.setActiveItem(null), l.setCaret(e > 0 ? r + 1 : r))))
                },
                advanceCaret: function(e, t) {
                    var n, i, r = this;
                    0 !== e && (n = e > 0 ? "next" : "prev", r.isShiftDown ? (i = r.$control_input[n](), i.length && (r.hideInput(), r.setActiveItem(i), t && t.preventDefault())) : r.setCaret(r.caretPos + e))
                },
                setCaret: function(t) {
                    var n = this;
                    if (t = "single" === n.settings.mode ? n.items.length : Math.max(0, Math.min(n.items.length, t)), !n.isPending) { var i, r, o, s; for (o = n.$control.children(":not(input)"), i = 0, r = o.length; r > i; i++) s = e(o[i]).detach(), t > i ? n.$control_input.before(s) : n.$control.append(s) }
                    n.caretPos = t
                },
                lock: function() { this.close(), this.isLocked = !0, this.refreshState() },
                unlock: function() { this.isLocked = !1, this.refreshState() },
                disable: function() {
                    var e = this;
                    e.$input.prop("disabled", !0), e.isDisabled = !0, e.lock()
                },
                enable: function() {
                    var e = this;
                    e.$input.prop("disabled", !1), e.isDisabled = !1, e.unlock()
                },
                destroy: function() {
                    var t = this,
                        n = t.eventNS,
                        i = t.revertSettings;
                    t.trigger("destroy"), t.off(), t.$wrapper.remove(), t.$dropdown.remove(), t.$input.html("").append(i.$children).removeAttr("tabindex").removeClass("selectized").attr({ tabindex: i.tabindex }).show(), t.$control_input.removeData("grow"), t.$input.removeData("selectize"), e(window).off(n), e(document).off(n), e(document.body).off(n), delete t.$input[0].selectize
                },
                render: function(e, t) {
                    var n, i, r = "",
                        o = !1,
                        s = this,
                        a = /^[\t ]*<([a-z][a-z0-9\-_]*(?:\:[a-z][a-z0-9\-_]*)?)/i;
                    return ("option" === e || "item" === e) && (n = T(t[s.settings.valueField]), o = !!n), o && (C(s.renderCache[e]) || (s.renderCache[e] = {}), s.renderCache[e].hasOwnProperty(n)) ? s.renderCache[e][n] : (r = s.settings.render[e].apply(this, [t, k]), ("option" === e || "option_create" === e) && (r = r.replace(a, "<$1 data-selectable")), "optgroup" === e && (i = t[s.settings.optgroupValueField] || "", r = r.replace(a, '<$1 data-group="' + E(k(i)) + '"')), ("option" === e || "item" === e) && (r = r.replace(a, '<$1 data-value="' + E(k(n || "")) + '"')), o && (s.renderCache[e][n] = r), r)
                },
                clearCache: function(e) { var t = this; "undefined" == typeof e ? t.renderCache = {} : delete t.renderCache[e] },
                canCreate: function(e) { var t = this; if (!t.settings.create) return !1; var n = t.settings.createFilter; return !(!e.length || "function" == typeof n && !n.apply(t, [e]) || "string" == typeof n && !new RegExp(n).test(e) || n instanceof RegExp && !n.test(e)) }
            }), L.count = 0, L.defaults = { plugins: [], delimiter: ",", persist: !0, diacritics: !0, create: !1, createOnBlur: !1, createFilter: null, highlight: !0, openOnFocus: !0, maxOptions: 1e3, maxItems: null, hideSelected: null, addPrecedence: !1, selectOnTab: !1, preload: !1, allowEmptyOption: !1, scrollDuration: 60, loadThrottle: 300, dataAttr: "data-data", optgroupField: "optgroup", valueField: "value", labelField: "text", optgroupLabelField: "label", optgroupValueField: "value", optgroupOrder: null, sortField: "$order", searchField: ["text"], searchConjunction: "and", mode: null, wrapperClass: "selectize-control", inputClass: "selectize-input", dropdownClass: "selectize-dropdown", dropdownContentClass: "selectize-dropdown-content", dropdownParent: null, copyClassesToDropdown: !0, render: {} }, e.fn.selectize = function(t) {
                var n = e.fn.selectize.defaults,
                    i = e.extend({}, n, t),
                    r = i.dataAttr,
                    o = i.labelField,
                    s = i.valueField,
                    a = i.optgroupField,
                    l = i.optgroupLabelField,
                    u = i.optgroupValueField,
                    c = function(t, n) {
                        var r, a, l, u, c = e.trim(t.val() || "");
                        if (i.allowEmptyOption || c.length) {
                            for (l = c.split(i.delimiter), r = 0, a = l.length; a > r; r++) u = {}, u[o] = l[r], u[s] = l[r], n.options[l[r]] = u;
                            n.items = l
                        }
                    },
                    d = function(t, n) {
                        var c, d, h, p, f = 0,
                            m = n.options,
                            g = function(e) { var t = r && e.attr(r); return "string" == typeof t && t.length ? JSON.parse(t) : null },
                            v = function(t, r) {
                                var l, u;
                                if (t = e(t), l = t.attr("value") || "", l.length || i.allowEmptyOption) {
                                    if (m.hasOwnProperty(l)) return void(r && (m[l].optgroup ? e.isArray(m[l].optgroup) ? m[l].optgroup.push(r) : m[l].optgroup = [m[l].optgroup, r] : m[l].optgroup = r));
                                    u = g(t) || {}, u[o] = u[o] || t.text(), u[s] = u[s] || l, u[a] = u[a] || r, u.$order = ++f, m[l] = u, t.is(":selected") && n.items.push(l)
                                }
                            },
                            y = function(t) { var i, r, o, s, a; for (t = e(t), o = t.attr("label"), o && (s = g(t) || {}, s[l] = o, s[u] = o, n.optgroups[o] = s), a = e("option", t), i = 0, r = a.length; r > i; i++) v(a[i], o) };
                        for (n.maxItems = t.attr("multiple") ? null : 1, p = t.children(), c = 0, d = p.length; d > c; c++) h = p[c].tagName.toLowerCase(), "optgroup" === h ? y(p[c]) : "option" === h && v(p[c])
                    };
                return this.each(function() {
                    if (!this.selectize) {
                        var r, o = e(this),
                            s = this.tagName.toLowerCase(),
                            a = o.attr("placeholder") || o.attr("data-placeholder");
                        a || i.allowEmptyOption || (a = o.children('option[value=""]').text());
                        var l = { placeholder: a, options: {}, optgroups: {}, items: [] };
                        "select" === s ? d(o, l) : c(o, l), r = new L(o, e.extend(!0, {}, n, l, t))
                    }
                })
            }, e.fn.selectize.defaults = L.defaults, L.define("drag_drop", function() {
                if (!e.fn.sortable) throw new Error('The "drag_drop" plugin requires jQuery UI "sortable".');
                if ("multi" === this.settings.mode) {
                    var t = this;
                    t.lock = function() { var e = t.lock; return function() { var n = t.$control.data("sortable"); return n && n.disable(), e.apply(t, arguments) } }(), t.unlock = function() { var e = t.unlock; return function() { var n = t.$control.data("sortable"); return n && n.enable(), e.apply(t, arguments) } }(), t.setup = function() {
                        var n = t.setup;
                        return function() {
                            n.apply(this, arguments);
                            var i = t.$control.sortable({
                                items: "[data-value]",
                                forcePlaceholderSize: !0,
                                disabled: t.isLocked,
                                start: function(e, t) { t.placeholder.css("width", t.helper.css("width")), i.css({ overflow: "visible" }) },
                                stop: function() {
                                    i.css({ overflow: "hidden" });
                                    var n = t.$activeItems ? t.$activeItems.slice() : null,
                                        r = [];
                                    i.children("[data-value]").each(function() { r.push(e(this).attr("data-value")) }), t.setValue(r), t.setActiveItem(n)
                                }
                            })
                        }
                    }()
                }
            }), L.define("dropdown_header", function(t) {
                var n = this;
                t = e.extend({ title: "Untitled", headerClass: "selectize-dropdown-header", titleRowClass: "selectize-dropdown-header-title", labelClass: "selectize-dropdown-header-label", closeClass: "selectize-dropdown-header-close", html: function(e) { return '<div class="' + e.headerClass + '"><div class="' + e.titleRowClass + '"><span class="' + e.labelClass + '">' + e.title + '</span><a href="javascript:void(0)" class="' + e.closeClass + '">&times;</a></div></div>' } }, t), n.setup = function() { var i = n.setup; return function() { i.apply(n, arguments), n.$dropdown_header = e(t.html(t)), n.$dropdown.prepend(n.$dropdown_header) } }()
            }), L.define("optgroup_columns", function(t) {
                var n = this;
                t = e.extend({ equalizeWidth: !0, equalizeHeight: !0 }, t), this.getAdjacentOption = function(t, n) {
                    var i = t.closest("[data-group]").find("[data-selectable]"),
                        r = i.index(t) + n;
                    return r >= 0 && r < i.length ? i.eq(r) : e()
                }, this.onKeyDown = function() { var e = n.onKeyDown; return function(t) { var i, r, o, s; return !this.isOpen || t.keyCode !== u && t.keyCode !== h ? e.apply(this, arguments) : (n.ignoreHover = !0, s = this.$activeOption.closest("[data-group]"), i = s.find("[data-selectable]").index(this.$activeOption), s = t.keyCode === u ? s.prev("[data-group]") : s.next("[data-group]"), o = s.find("[data-selectable]"), r = o.eq(Math.min(o.length - 1, i)), void(r.length && this.setActiveOption(r))) } }();
                var i = function() {
                        var e, t = i.width,
                            n = document;
                        return "undefined" == typeof t && (e = n.createElement("div"), e.innerHTML = '<div style="width:50px;height:50px;position:absolute;left:-50px;top:-50px;overflow:auto;"><div style="width:1px;height:100px;"></div></div>', e = e.firstChild, n.body.appendChild(e), t = i.width = e.offsetWidth - e.clientWidth, n.body.removeChild(e)), t
                    },
                    r = function() {
                        var r, o, s, a, l, u, c;
                        if (c = e("[data-group]", n.$dropdown_content), o = c.length, o && n.$dropdown_content.width()) {
                            if (t.equalizeHeight) {
                                for (s = 0, r = 0; o > r; r++) s = Math.max(s, c.eq(r).height());
                                c.css({ height: s })
                            }
                            t.equalizeWidth && (u = n.$dropdown_content.innerWidth() - i(), a = Math.round(u / o), c.css({ width: a }), o > 1 && (l = u - a * (o - 1), c.eq(o - 1).css({ width: l })))
                        }
                    };
                (t.equalizeHeight || t.equalizeWidth) && (S.after(this, "positionDropdown", r), S.after(this, "refreshOptions", r))
            }), L.define("remove_button", function(t) {
                if ("single" !== this.settings.mode) {
                    t = e.extend({ label: "&times;", title: "Remove", className: "remove", append: !0 }, t);
                    var n = this,
                        i = '<a href="javascript:void(0)" class="' + t.className + '" tabindex="-1" title="' + k(t.title) + '">' + t.label + "</a>",
                        r = function(e, t) { var n = e.search(/(<\/[^>]+>\s*)$/); return e.substring(0, n) + t + e.substring(n) };
                    this.setup = function() {
                        var o = n.setup;
                        return function() {
                            if (t.append) {
                                var s = n.settings.render.item;
                                n.settings.render.item = function() { return r(s.apply(this, arguments), i) }
                            }
                            o.apply(this, arguments), this.$control.on("click", "." + t.className, function(t) {
                                if (t.preventDefault(), !n.isLocked) {
                                    var i = e(t.currentTarget).parent();
                                    n.setActiveItem(i), n.deleteSelection() && n.setCaret(n.items.length)
                                }
                            })
                        }
                    }()
                }
            }), L.define("restore_on_backspace", function(e) {
                var t = this;
                e.text = e.text || function(e) { return e[this.settings.labelField] }, this.onKeyDown = function() { var n = t.onKeyDown; return function(t) { var i, r; return t.keyCode === m && "" === this.$control_input.val() && !this.$activeItems.length && (i = this.caretPos - 1, i >= 0 && i < this.items.length) ? (r = this.options[this.items[i]], this.deleteSelection(t) && (this.setTextboxValue(e.text.apply(this, [r])), this.refreshOptions(!0)), void t.preventDefault()) : n.apply(this, arguments) } }()
            }), L
        }),
        function(e) {
            define("viewportchecker", ["jquery"], function() {
                return function() {
                    ! function(e) {
                        e.fn.viewportChecker = function(t) {
                            var n = { classToAdd: "visible", classToRemove: "invisible", classToAddForFullView: "full-visible", removeClassAfterAnimation: !1, offset: 100, repeat: !1, invertBottomOffset: !0, callbackFunction: function(e, t) {}, scrollHorizontal: !1, scrollBox: window };
                            e.extend(n, t);
                            var i = this,
                                r = { height: e(n.scrollBox).height(), width: e(n.scrollBox).width() };
                            return this.checkElements = function() {
                                var t, o;
                                n.scrollHorizontal ? (t = Math.max(e("html").scrollLeft(), e("body").scrollLeft(), e(window).scrollLeft()), o = t + r.width) : (t = Math.max(e("html").scrollTop(), e("body").scrollTop(), e(window).scrollTop()), o = t + r.height), i.each(function() {
                                    var i = e(this),
                                        s = {},
                                        a = {};
                                    if (i.data("vp-add-class") && (a.classToAdd = i.data("vp-add-class")), i.data("vp-remove-class") && (a.classToRemove = i.data("vp-remove-class")), i.data("vp-add-class-full-view") && (a.classToAddForFullView = i.data("vp-add-class-full-view")), i.data("vp-keep-add-class") && (a.removeClassAfterAnimation = i.data("vp-remove-after-animation")), i.data("vp-offset") && (a.offset = i.data("vp-offset")), i.data("vp-repeat") && (a.repeat = i.data("vp-repeat")), i.data("vp-scrollHorizontal") && (a.scrollHorizontal = i.data("vp-scrollHorizontal")), i.data("vp-invertBottomOffset") && (a.scrollHorizontal = i.data("vp-invertBottomOffset")), e.extend(s, n), e.extend(s, a), !i.data("vp-animated") || s.repeat) {
                                        String(s.offset).indexOf("%") > 0 && (s.offset = parseInt(s.offset) / 100 * r.height);
                                        var l = s.scrollHorizontal ? i.offset().left : i.offset().top,
                                            u = s.scrollHorizontal ? l + i.width() : l + i.height(),
                                            c = Math.round(l) + s.offset,
                                            d = s.scrollHorizontal ? c + i.width() : c + i.height();
                                        s.invertBottomOffset && (d -= 2 * s.offset), o > c && d > t ? (i.removeClass(s.classToRemove), i.addClass(s.classToAdd), s.callbackFunction(i, "add"), o >= u && l >= t ? i.addClass(s.classToAddForFullView) : i.removeClass(s.classToAddForFullView), i.data("vp-animated", !0), s.removeClassAfterAnimation && i.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() { i.removeClass(s.classToAdd) })) : i.hasClass(s.classToAdd) && s.repeat && (i.removeClass(s.classToAdd + " " + s.classToAddForFullView), s.callbackFunction(i, "remove"), i.data("vp-animated", !1))
                                    }
                                })
                            }, ("ontouchstart" in window || "onmsgesturechange" in window) && e(document).bind("touchmove MSPointerMove pointermove", this.checkElements), e(n.scrollBox).bind("load scroll", this.checkElements), e(window).resize(function(t) { r = { height: e(n.scrollBox).height(), width: e(n.scrollBox).width() }, i.checkElements() }), this.checkElements(), this
                        }
                    }(jQuery)
                }.apply(e, arguments)
            })
        }(this),
        function(e) {
            define("headroom", [], function() {
                return function() {
                    return ! function(e, t) {
                        "use strict";

                        function n(e) { this.callback = e, this.ticking = !1 }

                        function i(t) { return t && "undefined" != typeof e && (t === e || t.nodeType) }

                        function r(e) { if (arguments.length <= 0) throw new Error("Missing arguments in extend function"); var t, n, o = e || {}; for (n = 1; n < arguments.length; n++) { var s = arguments[n] || {}; for (t in s) o[t] = "object" != typeof o[t] || i(o[t]) ? o[t] || s[t] : r(o[t], s[t]) } return o }

                        function o(e) { return e === Object(e) ? e : { down: e, up: e } }

                        function s(e, t) { t = r(t, s.options), this.lastKnownScrollY = 0, this.elem = e, this.debouncer = new n(this.update.bind(this)), this.tolerance = o(t.tolerance), this.classes = t.classes, this.offset = t.offset, this.scroller = t.scroller, this.initialised = !1, this.onPin = t.onPin, this.onUnpin = t.onUnpin, this.onTop = t.onTop, this.onNotTop = t.onNotTop }
                        var a = { bind: !! function() {}.bind, classList: "classList" in t.documentElement, rAF: !!(e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame) };
                        e.requestAnimationFrame = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame, n.prototype = { constructor: n, update: function() { this.callback && this.callback(), this.ticking = !1 }, requestTick: function() { this.ticking || (requestAnimationFrame(this.rafCallback || (this.rafCallback = this.update.bind(this))), this.ticking = !0) }, handleEvent: function() { this.requestTick() } }, s.prototype = {
                            constructor: s,
                            init: function() { return s.cutsTheMustard ? (this.elem.classList.add(this.classes.initial), setTimeout(this.attachEvent.bind(this), 100), this) : void 0 },
                            destroy: function() {
                                var e = this.classes;
                                this.initialised = !1, this.elem.classList.remove(e.unpinned, e.pinned, e.top, e.initial), this.scroller.removeEventListener("scroll", this.debouncer, !1)
                            },
                            attachEvent: function() { this.initialised || (this.lastKnownScrollY = this.getScrollY(), this.initialised = !0, this.scroller.addEventListener("scroll", this.debouncer, !1), this.debouncer.handleEvent()) },
                            unpin: function() {
                                var e = this.elem.classList,
                                    t = this.classes;
                                (e.contains(t.pinned) || !e.contains(t.unpinned)) && (e.add(t.unpinned), e.remove(t.pinned), this.onUnpin && this.onUnpin.call(this))
                            },
                            pin: function() {
                                var e = this.elem.classList,
                                    t = this.classes;
                                e.contains(t.unpinned) && (e.remove(t.unpinned), e.add(t.pinned), this.onPin && this.onPin.call(this))
                            },
                            top: function() {
                                var e = this.elem.classList,
                                    t = this.classes;
                                e.contains(t.top) || (e.add(t.top), e.remove(t.notTop), this.onTop && this.onTop.call(this))
                            },
                            notTop: function() {
                                var e = this.elem.classList,
                                    t = this.classes;
                                e.contains(t.notTop) || (e.add(t.notTop), e.remove(t.top), this.onNotTop && this.onNotTop.call(this))
                            },
                            getScrollY: function() { return void 0 !== this.scroller.pageYOffset ? this.scroller.pageYOffset : void 0 !== this.scroller.scrollTop ? this.scroller.scrollTop : (t.documentElement || t.body.parentNode || t.body).scrollTop },
                            getViewportHeight: function() { return e.innerHeight || t.documentElement.clientHeight || t.body.clientHeight },
                            getDocumentHeight: function() {
                                var e = t.body,
                                    n = t.documentElement;
                                return Math.max(e.scrollHeight, n.scrollHeight, e.offsetHeight, n.offsetHeight, e.clientHeight, n.clientHeight)
                            },
                            getElementHeight: function(e) { return Math.max(e.scrollHeight, e.offsetHeight, e.clientHeight) },
                            getScrollerHeight: function() { return this.scroller === e || this.scroller === t.body ? this.getDocumentHeight() : this.getElementHeight(this.scroller) },
                            isOutOfBounds: function(e) {
                                var t = 0 > e,
                                    n = e + this.getViewportHeight() > this.getScrollerHeight();
                                return t || n
                            },
                            toleranceExceeded: function(e, t) { return Math.abs(e - this.lastKnownScrollY) >= this.tolerance[t] },
                            shouldUnpin: function(e, t) {
                                var n = e > this.lastKnownScrollY,
                                    i = e >= this.offset;
                                return n && i && t
                            },
                            shouldPin: function(e, t) {
                                var n = e < this.lastKnownScrollY,
                                    i = e <= this.offset;
                                return n && t || i
                            },
                            update: function() {
                                var e = this.getScrollY(),
                                    t = e > this.lastKnownScrollY ? "down" : "up",
                                    n = this.toleranceExceeded(e, t);
                                this.isOutOfBounds(e) || (e <= this.offset ? this.top() : this.notTop(), this.shouldUnpin(e, n) ? this.unpin() : this.shouldPin(e, n) && this.pin(), this.lastKnownScrollY = e)
                            }
                        }, s.options = { tolerance: { up: 0, down: 0 }, offset: 0, scroller: e, classes: { pinned: "headroom--pinned", unpinned: "headroom--unpinned", top: "headroom--top", notTop: "headroom--not-top", initial: "headroom" } }, s.cutsTheMustard = "undefined" != typeof a && a.rAF && a.bind && a.classList, e.Headroom = s
                    }(window, document), e.Headroom = Headroom
                }.apply(e, arguments)
            })
        }(this),
        function(e) {
            define("jquery.headroom", ["jquery", "headroom"], function() {
                return function() {
                    ! function(e) {
                        e && (e.fn.headroom = function(t) {
                            return this.each(function() {
                                var n = e(this),
                                    i = n.data("headroom"),
                                    r = "object" == typeof t && t;
                                r = e.extend(!0, {}, Headroom.options, r), i || (i = new Headroom(this, r), i.init(), n.data("headroom", i)), "string" == typeof t && i[t]()
                            })
                        }, e("[data-headroom]").each(function() {
                            var t = e(this);
                            t.headroom(t.data())
                        }))
                    }(window.Zepto || window.jQuery)
                }.apply(e, arguments)
            })
        }(this),
        function() {
            var e = {}.hasOwnProperty,
                t = function(t, n) {
                    function i() { this.constructor = t }
                    for (var r in n) e.call(n, r) && (t[r] = n[r]);
                    return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
                };
            define("browser", ["base", "jquery", "platform", "device", "domready", "shadowbox", "mediaelementplayer", "jquery.placeholder", "jquery.lazyload", "jquery.cookie", "selectize", "viewportchecker", "headroom", "jquery.headroom"], function(e, n, i, r, o, s) {
                var a;
                return a = function(e) {
                    function a() { return a.__super__.constructor.apply(this, arguments) }
                    return t(a, e), a.prototype._$window = function() { return this.options.$window }, a.prototype._$html = function() { return this.options.$html }, a.prototype._$body = function() { return this.options.$body }, a.prototype._cart = function() { return this.options.cart }, a.prototype._$cart = function() { return n(this._cart()) }, a.prototype._overlay = function() { return this.options.overlay }, a.prototype._$overlay = function() { return n(this._overlay()) }, a.prototype._lazy = function() { return this.options.lazy }, a.prototype._$lazy = function() { return n(this._lazy()) }, a.prototype._lazyForce = function() { return this.options.lazyForce }, a.prototype._$lazyForce = function() { return n(this._lazyForce()) }, a.prototype._selectize = function() { return this.options.selectizeElement }, a.prototype._$selectize = function() { return n(this._selectize()) }, a.prototype._scrollToBtn = function() { return this.options.scrollToBtn }, a.prototype._notification = function() { return this.options.notificationElement }, a.prototype._$notification = function() { return n(this._notification()) }, a.prototype._notificationBtn = function() { return this.options.notificationBtnElement }, a.prototype.browser = function() { var e, t, n; return e = i.name.toLowerCase(), n = e + parseFloat(i.version), -1 !== navigator.appVersion.indexOf("Windows") ? t = "windows" : -1 !== navigator.appVersion.indexOf("Macintosh") ? t = "mac" : -1 !== navigator.appVersion.indexOf("X11") ? t = "unix" : -1 !== navigator.appVersion.indexOf("Linux") && (t = "linux"), this._$html().addClass("" + t + " " + e + " " + n) }, a.prototype.typekit = function() { return o(function(e) { return function() { return e._$html().addClass("typekit-active").removeClass("typekit-loading") } }(this)) }, a.prototype.placeholder = function() { return this._$html().hasClass("ie7") || this._$html().hasClass("ie8") || this._$html().hasClass("ie9") ? this.options.$placeholder.placeholder() : void 0 }, a.prototype.lazyLoad = function() { return r.desktop() ? this._$lazy().lazyload({ event: "lazyloadDefault", threshold: 0, skip_invisible: !1, effect: "fadeIn", placeholder: "", attrs: this._lazy() }).trigger("lazyloadDefault") : this._$lazy().lazyload({ event: "scroll", threshold: 500, skip_invisible: !1, effect: "fadeIn", placeholder: "", attrs: this._lazy() }) }, a.prototype.lazyLoadForce = function() { return this._$lazyForce().lazyload({ event: "lazyloadForce", skip_invisible: !0, effect: "fadeIn", placeholder: "", attrs: this._lazyForce() }).trigger("lazyloadForce") }, a.prototype.lazyLoadProduct = function() { return this._$lazy().lazyload({ event: "lazyloadForce", threshold: 0, skip_invisible: !1, effect: "fadeIn", placeholder: "", attrs: this._lazy() }).trigger("lazyloadForce") }, a.prototype.preventScroll = function() { return r.mobile() || r.tablet() ? (this._$window().on("touchmove", function(e) { return function(t) { return e._$body().hasClass("overflow-hidden") ? t.preventDefault() : void 0 } }(this)), this._$body().find(this.options.preventScroll).on("touchmove", function(e) { return function(t) { return r.mobile() && e._$window().width() > e._$window().height() ? t.stopPropagation() : t.preventDefault() } }(this)), this._$cart().on("touchmove", function(e) { return function(e) { return e.stopPropagation() } }(this)), this._$overlay().on("touchmove", function(e) { return function(t) { return e._$body().hasClass("is-active-cart") ? t.stopPropagation() : void 0 } }(this))) : void 0 }, a.prototype.scrollTo = function() { return this._$body().on("click", this._scrollToBtn(), function() { return n("html, body").animate({ scrollTop: n(".body").offset().top }, 620) }) }, a.prototype.selectize = function() { return r.mobile() || r.tablet() ? this._$selectize().closest(".select").addClass("is-loaded") : this._$selectize().selectize({ create: !1, persist: !1, allowEmptyOption: !0, hideSelected: !0, onInitialize: function() { return this.$input.closest(".select").addClass("is-loaded") } }) }, a.prototype.notificationClose = function() { return this._$body().hasClass("template-notification") ? this._$body().addClass("template-notification-closed").removeClass("template-notification") : void 0 }, a.prototype.notification = function() { return this._$body().on("click", this._notificationBtn(), function(e) { return function() { return e.notificationClose() } }(this)) }, a.prototype.shadowbox = function() { return s.init({ overlayColor: "#fff", overlayOpacity: .9, resizeDuration: 0, fadeDuration: 0 }) }, a.prototype.video = function() { return n("video").mediaelementplayer() }, a.prototype.animateScroll = function() { return r.mobile() || r.tablet() ? void 0 : n(".section").addClass("is-hidden-animate").viewportChecker({ classToAdd: "is-visible-animate", offset: 200, repeat: !1 }) }, a.prototype.headerScroll = function() { return n(".js-header-scroll").headroom({ offset: 300 }) }, a.prototype.cookiePage = function() { var e, t; return e = location.pathname, -1 !== document.URL.indexOf("/products/") && (t = n.cookie("path"), t && -1 !== t.indexOf("/lookbook") && (n(".js-notification-lookbook").removeClass("hidden"), n(".js-notification-retail").addClass("hidden"))), n.cookie("path", e, { expires: 1, path: "/" }) }, a.prototype.start = function() { return this.browser(), this.typekit(), this.lazyLoadForce(), this.lazyLoad(), this.preventScroll(), this.scrollTo(), this.selectize(), this.video(), this.animateScroll(), this.placeholder(), this.notification(), this.shadowbox(), this.cookiePage(), this.headerScroll() }, a
                }(e)
            })
        }.call(this),
        function() {
            var e = {}.hasOwnProperty,
                t = function(t, n) {
                    function i() { this.constructor = t }
                    for (var r in n) e.call(n, r) && (t[r] = n[r]);
                    return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
                };
            define("menu", ["base", "jquery", "device"], function(e, n, i) {
                var r;
                return r = function(e) {
                    function r() { return r.__super__.constructor.apply(this, arguments) }
                    return t(r, e), r.prototype._$window = function() { return this.options.$window }, r.prototype._$body = function() { return this.options.$body }, r.prototype._$$body = function() { return this.options.$$body }, r.prototype._header = function() { return this.options.header }, r.prototype._$header = function() { return n(this._header()) }, r.prototype._headerStateWhite = function() { return this.options.headerStateWhite.substring(1) }, r.prototype._headerStateBlack = function() { return this.options.headerStateBlack.substring(1) }, r.prototype._section = function() { return this.options.section }, r.prototype._sectionAttr = function() { return this.options.sectionAttr }, r.prototype._$section = function() { return n(this.options.section) }, r.prototype._getColor = function(e, t) { return "black" === t ? this.options.$header.hasClass(this._headerStateBlack()) || this.options.$header.addClass(this._headerStateBlack()).removeClass(this._headerStateWhite()) : "white" === t && (this.options.$header.hasClass(this._headerStateWhite()) || this.options.$header.addClass(this._headerStateWhite()).removeClass(this._headerStateBlack())), !1 }, r.prototype._setColor = function() { return this._$section().each(function(e) { return function(t, i) { var r, o, s, a, l, u; return r = n(i), s = e.options.$window.scrollTop(), a = e._$header().outerHeight() + parseFloat(e._$header().css("top")), l = r.offset().top - a, u = l + r.outerHeight(), o = r.attr(e._sectionAttr()), 0 === t && s <= r.outerHeight() - a ? e._getColor(r, o) : s >= l && u >= s && 0 !== t ? e._getColor(r, o) : void 0 } }(this)) }, r.prototype._eventScroll = function() { return i.mobile() ? void 0 : this.options.$window.on("scroll", function(e) { return function(t) { return e._setColor() } }(this)) }, r.prototype._toggleMobile = function() { var e; return this._$body().hasClass("is-active-cart") ? void 0 : (e = this._$window().scrollTop(), this._$$body().height() - 260 < e ? (this._$header().show(), setTimeout(function(e) { return function() { return e._$header().addClass("is-mobile-scroll") } }(this), 310)) : (e > this.windowScrollY ? (this._$header().removeClass("is-mobile-scroll"), setTimeout(function(e) { return function() { return e._$header().hide() } }(this), 610)) : (this._$header().show(), setTimeout(function(e) { return function() { return e._$header().addClass("is-mobile-scroll") } }(this), 310)), this.windowScrollY = e)) }, r.prototype._eventMobileScroll = function() { return i.mobile() ? (this.windowScrollY = 0, this._$window().on("touchend", function(e) { return function(t) { return e._toggleMobile } }(this))) : void 0 }, r.prototype.destroy = function() { return this._$window().off("scroll", this._setColor), this._$window().off("touchend", this._toggleMobile) }, r.prototype.start = function() { return this._setColor(), this._eventScroll(), this._eventMobileScroll() }, r
                }(e)
            })
        }.call(this),
        function(e) {
            define("jquery.owl.carousel", ["jquery"], function() {
                return function() {
                    ! function(e, t, n, i) {
                        function r(t, n) {
                            t.owlCarousel = { name: "Owl Carousel", author: "Bartosz Wojciechowski", version: "2.0.0-beta.2.1" }, this.settings = null, this.options = e.extend({}, r.Defaults, n), this.itemData = e.extend({}, d), this.dom = e.extend({}, h), this.width = e.extend({}, p), this.num = e.extend({}, f), this.drag = e.extend({}, g), this.state = e.extend({}, v), this.e = e.extend({}, y), this.plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = null, this.dom.el = t, this.dom.$el = e(t);
                            for (var i in r.Plugins) this.plugins[i[0].toLowerCase() + i.slice(1)] = new r.Plugins[i](this);
                            this.init()
                        }

                        function o(e) {
                            var t, i, r = n.createElement("div"),
                                o = e;
                            for (t in o)
                                if (i = o[t], "undefined" != typeof r.style[i]) return r = null, [i, t];
                            return [!1]
                        }

                        function s() { return o(["transition", "WebkitTransition", "MozTransition", "OTransition"])[1] }

                        function a() { return o(["transform", "WebkitTransform", "MozTransform", "OTransform", "msTransform"])[0] }

                        function l() { return o(["perspective", "webkitPerspective", "MozPerspective", "OPerspective", "MsPerspective"])[0] }

                        function u() { return "ontouchstart" in t || !!navigator.msMaxTouchPoints }

                        function c() { return t.navigator.msPointerEnabled }
                        var d, h, p, f, m, g, v, y;
                        d = { index: !1, indexAbs: !1, posLeft: !1, clone: !1, active: !1, loaded: !1, lazyLoad: !1, current: !1, width: !1, center: !1, page: !1, hasVideo: !1, playVideo: !1 }, h = { el: null, $el: null, stage: null, $stage: null, oStage: null, $oStage: null, $items: null, $oItems: null, $cItems: null, $content: null }, p = { el: 0, stage: 0, item: 0, prevWindow: 0, cloneLast: 0 }, f = { items: 0, oItems: 0, cItems: 0, active: 0, merged: [] }, g = { start: 0, startX: 0, startY: 0, current: 0, currentX: 0, currentY: 0, offsetX: 0, offsetY: 0, distance: null, startTime: 0, endTime: 0, updatedX: 0, targetEl: null }, v = { isTouch: !1, isScrolling: !1, isSwiping: !1, direction: !1, inMotion: !1 }, y = { _onDragStart: null, _onDragMove: null, _onDragEnd: null, _transitionEnd: null, _resizer: null, _responsiveCall: null, _goToLoop: null, _checkVisibile: null }, r.Defaults = { items: 3, loop: !1, center: !1, mouseDrag: !0, touchDrag: !0, pullDrag: !0, freeDrag: !1, margin: 0, stagePadding: 0, merge: !1, mergeFit: !0, autoWidth: !1, startPosition: 0, smartSpeed: 250, fluidSpeed: !1, dragEndSpeed: !1, responsive: {}, responsiveRefreshRate: 200, responsiveBaseElement: t, responsiveClass: !1, fallbackEasing: "swing", info: !1, nestedItemSelector: !1, itemElement: "div", stageElement: "div", themeClass: "slider-theme", baseClass: "slider-carousel", itemClass: "slider-item", centerClass: "center", activeClass: "active" }, r.Plugins = {}, r.prototype.init = function() {
                            if (this.setResponsiveOptions(), this.trigger("initialize"), this.dom.$el.hasClass(this.settings.baseClass) || this.dom.$el.addClass(this.settings.baseClass), this.dom.$el.hasClass(this.settings.themeClass) || this.dom.$el.addClass(this.settings.themeClass), this.settings.rtl && this.dom.$el.addClass("slider-rtl"), this.browserSupport(), this.settings.autoWidth && this.state.imagesLoaded !== !0) { var e, t, n; if (e = this.dom.$el.find("img"), t = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : i, n = this.dom.$el.children(t).width(), e.length && 0 >= n) return this.preloadAutoWidthImages(e), !1 }
                            this.width.prevWindow = this.viewport(), this.createStage(), this.fetchContent(), this.eventsCall(), this.internalEvents(), this.dom.$el.addClass("slider-loading"), this.refresh(!0), this.dom.$el.removeClass("slider-loading").addClass("slider-loaded"), this.trigger("initialized"), this.addTriggerableEvents()
                        }, r.prototype.setResponsiveOptions = function() {
                            if (this.options.responsive) {
                                var t = this.viewport(),
                                    n = this.options.responsive,
                                    i = -1;
                                e.each(n, function(e) { t >= e && e > i && (i = Number(e)) }), this.settings = e.extend({}, this.options, n[i]), delete this.settings.responsive, this.settings.responsiveClass && this.dom.$el.attr("class", function(e, t) { return t.replace(/\b slider-responsive-\S+/g, "") }).addClass("slider-responsive-" + i)
                            } else this.settings = e.extend({}, this.options)
                        }, r.prototype.optionsLogic = function() { this.dom.$el.toggleClass("slider-center", this.settings.center), this.settings.loop && this.num.oItems < this.settings.items && (this.settings.loop = !1), this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1) }, r.prototype.createStage = function() {
                            var t = n.createElement("div"),
                                i = n.createElement(this.settings.stageElement);
                            t.className = "slider-stage-outer", i.className = "slider-stage", t.appendChild(i), this.dom.el.appendChild(t), this.dom.oStage = t, this.dom.$oStage = e(t), this.dom.stage = i, this.dom.$stage = e(i), t = null, i = null
                        }, r.prototype.createItemContainer = function() { var t = n.createElement(this.settings.itemElement); return t.className = this.settings.itemClass, e(t) }, r.prototype.fetchContent = function(t) { t ? this.dom.$content = t instanceof jQuery ? t : e(t) : this.settings.nestedItemSelector ? this.dom.$content = this.dom.$el.find("." + this.settings.nestedItemSelector).not(".slider-stage-outer") : this.dom.$content = this.dom.$el.children().not(".slider-stage-outer"), this.num.oItems = this.dom.$content.length, 0 !== this.num.oItems && this.initStructure() }, r.prototype.initStructure = function() { this.createNormalStructure() }, r.prototype.createNormalStructure = function() {
                            var e, t;
                            for (e = 0; e < this.num.oItems; e++) t = this.createItemContainer(), this.initializeItemContainer(t, this.dom.$content[e]), this.dom.$stage.append(t);
                            this.dom.$content = null
                        }, r.prototype.createCustomStructure = function(e) { var t, n; for (t = 0; e > t; t++) n = this.createItemContainer(), this.createItemContainerData(n), this.dom.$stage.append(n) }, r.prototype.initializeItemContainer = function(e, t) { this.trigger("change", { property: { name: "item", value: e } }), this.createItemContainerData(e), e.append(t), this.trigger("changed", { property: { name: "item", value: e } }) }, r.prototype.createItemContainerData = function(t, n) {
                            var i = e.extend({}, this.itemData);
                            n && e.extend(i, n.data("slider-item")), t.data("slider-item", i)
                        }, r.prototype.cloneItemContainer = function(e) { var t = e.clone(!0, !0).addClass("cloned"); return this.createItemContainerData(t, t), t.data("slider-item").clone = !0, t }, r.prototype.updateLocalContent = function() { var t, n; for (this.dom.$oItems = this.dom.$stage.find("." + this.settings.itemClass).filter(function() { return e(this).data("slider-item").clone === !1 }), this.num.oItems = this.dom.$oItems.length, t = 0; t < this.num.oItems; t++) n = this.dom.$oItems.eq(t), n.data("slider-item").index = t }, r.prototype.loopClone = function() {
                            if (!this.settings.loop || this.num.oItems < this.settings.items) return !1;
                            var t, n, i, r = this.settings.items,
                                o = this.num.oItems - 1;
                            for (this.settings.stagePadding && 1 === this.settings.items && (r += 1), this.num.cItems = 2 * r, i = 0; r > i; i++) t = this.cloneItemContainer(this.dom.$oItems.eq(i)), n = this.cloneItemContainer(this.dom.$oItems.eq(o - i)), this.dom.$stage.append(t), this.dom.$stage.prepend(n);
                            this.dom.$cItems = this.dom.$stage.find("." + this.settings.itemClass).filter(function() { return e(this).data("slider-item").clone === !0 })
                        }, r.prototype.reClone = function() { null !== this.dom.$cItems && (this.dom.$cItems.remove(), this.dom.$cItems = null, this.num.cItems = 0), this.settings.loop && this.loopClone() }, r.prototype.calculate = function() {
                            var e, t, n, i, r, o, s, a = 0,
                                l = 0;
                            for (this.width.el = this.dom.$el.width() - 2 * this.settings.stagePadding, this.width.view = this.dom.$el.width(), n = this.width.el - this.settings.margin * (1 === this.settings.items ? 0 : this.settings.items - 1), this.width.el = this.width.el + this.settings.margin, this.width.item = (n / this.settings.items + this.settings.margin).toFixed(3), this.dom.$items = this.dom.$stage.find(".slider-item"), this.num.items = this.dom.$items.length, this.settings.autoWidth && this.dom.$items.css("width", ""), this._coordinates = [], this.num.merged = [], i = this.settings.rtl ? this.settings.center ? -(this.width.el / 2) : 0 : this.settings.center ? this.width.el / 2 : 0, this.width.mergeStage = 0, e = 0; e < this.num.items; e++) this.settings.merge ? (s = this.dom.$items.eq(e).find("[data-merge]").attr("data-merge") || 1, this.settings.mergeFit && s > this.settings.items && (s = this.settings.items), this.num.merged.push(parseInt(s)), this.width.mergeStage += this.width.item * this.num.merged[e]) : this.num.merged.push(1), o = this.width.item * this.num.merged[e], this.settings.autoWidth && (o = this.dom.$items.eq(e).width() + this.settings.margin, this.settings.rtl ? this.dom.$items[e].style.marginLeft = this.settings.margin + "px" : this.dom.$items[e].style.marginRight = this.settings.margin + "px"), this._coordinates.push(i), this.dom.$items.eq(e).data("slider-item").posLeft = a, this.dom.$items.eq(e).data("slider-item").width = o, this.settings.rtl ? (i += o, a += o) : (i -= o, a -= o), l -= Math.abs(o), this.settings.center && (this._coordinates[e] = this.settings.rtl ? this._coordinates[e] + o / 2 : this._coordinates[e] - o / 2);
                            for (this.settings.autoWidth ? this.width.stage = this.settings.center ? Math.abs(l) : Math.abs(i) : this.width.stage = Math.abs(l), r = this.num.oItems + this.num.cItems, t = 0; r > t; t++) this.dom.$items.eq(t).data("slider-item").indexAbs = t;
                            this.setSizes()
                        }, r.prototype.setSizes = function() {
                            this.settings.stagePadding !== !1 && (this.dom.oStage.style.paddingLeft = this.settings.stagePadding + "px", this.dom.oStage.style.paddingRight = this.settings.stagePadding + "px"), this.settings.rtl ? t.setTimeout(e.proxy(function() { this.dom.stage.style.width = this.width.stage + "px" }, this), 0) : this.dom.stage.style.width = this.width.stage + "px";
                            for (var n = 0; n < this.num.items; n++) this.settings.autoWidth || (this.dom.$items[n].style.width = this.width.item - this.settings.margin + "px"), this.settings.rtl ? this.dom.$items[n].style.marginLeft = this.settings.margin + "px" : this.dom.$items[n].style.marginRight = this.settings.margin + "px", 1 === this.num.merged[n] || this.settings.autoWidth || (this.dom.$items[n].style.width = this.width.item * this.num.merged[n] - this.settings.margin + "px");
                            this.width.stagePrev = this.width.stage
                        }, r.prototype.responsive = function() { if (!this.num.oItems) return !1; var e = this.isElWidthChanged(); return e ? this.trigger("resize").isDefaultPrevented() ? !1 : (this.state.responsive = !0, this.refresh(), this.state.responsive = !1, void this.trigger("resized")) : !1 }, r.prototype.refresh = function() { var e = this.dom.$oItems && this.dom.$oItems.eq(this.normalize(this.current(), !0)); return this.trigger("refresh"), this.setResponsiveOptions(), this.updateLocalContent(), this.optionsLogic(), 0 === this.num.oItems ? !1 : (this.dom.$stage.addClass("slider-refresh"), this.reClone(), this.calculate(), this.dom.$stage.removeClass("slider-refresh"), e ? this.reset(e.data("slider-item").indexAbs) : (this.dom.oStage.scrollLeft = 0, this.reset(this.dom.$oItems.eq(0).data("slider-item").indexAbs)), this.state.orientation = t.orientation, this.watchVisibility(), void this.trigger("refreshed")) }, r.prototype.updateActiveItems = function() {
                            this.trigger("change", { property: { name: "items", value: this.dom.$items } });
                            var e, t, n, i, r, o;
                            for (e = 0; e < this.num.items; e++) this.dom.$items.eq(e).data("slider-item").active = !1, this.dom.$items.eq(e).data("slider-item").current = !1, this.dom.$items.eq(e).removeClass(this.settings.activeClass).removeClass(this.settings.centerClass);
                            for (this.num.active = 0, padding = 2 * this.settings.stagePadding, stageX = this.coordinates(this.current()) + padding, view = this.settings.rtl ? this.width.view : -this.width.view, t = 0; t < this.num.items; t++) n = this.dom.$items.eq(t), i = n.data("slider-item").posLeft, r = n.data("slider-item").width, o = this.settings.rtl ? i - r - padding : i - r + padding, (this.op(i, "<=", stageX) && this.op(i, ">", stageX + view) || this.op(o, "<", stageX) && this.op(o, ">", stageX + view)) && (this.num.active++, n.data("slider-item").active = !0, n.data("slider-item").current = !0, n.addClass(this.settings.activeClass), this.settings.lazyLoad || (n.data("slider-item").loaded = !0), this.settings.loop && this.updateClonedItemsState(n.data("slider-item").index));
                            this.settings.center && (this.dom.$items.eq(this.current()).addClass(this.settings.centerClass).data("slider-item").center = !0), this.trigger("changed", { property: { name: "items", value: this.dom.$items } })
                        }, r.prototype.updateClonedItemsState = function(e) { var t, n, i; for (this.settings.center && (t = this.dom.$items.eq(this.current()).data("slider-item").index), i = 0; i < this.num.items; i++) n = this.dom.$items.eq(i), n.data("slider-item").index === e && (n.data("slider-item").current = !0, n.data("slider-item").index === t && n.addClass(this.settings.centerClass)) }, r.prototype.eventsCall = function() { this.e._onDragStart = e.proxy(function(e) { this.onDragStart(e) }, this), this.e._onDragMove = e.proxy(function(e) { this.onDragMove(e) }, this), this.e._onDragEnd = e.proxy(function(e) { this.onDragEnd(e) }, this), this.e._transitionEnd = e.proxy(function(e) { this.transitionEnd(e) }, this), this.e._resizer = e.proxy(function() { this.responsiveTimer() }, this), this.e._responsiveCall = e.proxy(function() { this.responsive() }, this), this.e._preventClick = e.proxy(function(e) { this.preventClick(e) }, this) }, r.prototype.responsiveTimer = function() { return this.viewport() === this.width.prevWindow ? !1 : (t.clearTimeout(this.resizeTimer), this.resizeTimer = t.setTimeout(this.e._responsiveCall, this.settings.responsiveRefreshRate), void(this.width.prevWindow = this.viewport())) }, r.prototype.internalEvents = function() {
                            var e = u(),
                                i = c();
                            e && !i ? this.dragType = ["touchstart", "touchmove", "touchend", "touchcancel"] : e && i ? this.dragType = ["MSPointerDown", "MSPointerMove", "MSPointerUp", "MSPointerCancel"] : this.dragType = ["mousedown", "mousemove", "mouseup"], (e || i) && this.settings.touchDrag ? this.on(n, this.dragType[3], this.e._onDragEnd) : (this.dom.$stage.on("dragstart", function() { return !1 }), this.settings.mouseDrag ? this.dom.stage.onselectstart = function() { return !1 } : this.dom.$el.addClass("slider-text-select-on")), this.transitionEndVendor && this.on(this.dom.stage, this.transitionEndVendor, this.e._transitionEnd, !1), this.settings.responsive !== !1 && this.on(t, "resize", this.e._resizer, !1), this.dragEvents()
                        }, r.prototype.dragEvents = function() {!this.settings.touchDrag || "touchstart" !== this.dragType[0] && "MSPointerDown" !== this.dragType[0] ? this.settings.mouseDrag && "mousedown" === this.dragType[0] ? this.on(this.dom.stage, this.dragType[0], this.e._onDragStart, !1) : this.off(this.dom.stage, this.dragType[0], this.e._onDragStart) : this.on(this.dom.stage, this.dragType[0], this.e._onDragStart, !1) }, r.prototype.onDragStart = function(e) {
                            var i, r, o, s, a;
                            if (i = e.originalEvent || e || t.event, 3 === i.which) return !1;
                            if ("mousedown" === this.dragType[0] && this.dom.$stage.addClass("slider-grab"), this.trigger("drag"), this.drag.startTime = (new Date).getTime(), this.speed(0), this.state.isTouch = !0, this.state.isScrolling = !1, this.state.isSwiping = !1, this.drag.distance = 0, r = "touchstart" === i.type, o = r ? e.targetTouches[0].pageX : i.pageX || i.clientX, s = r ? e.targetTouches[0].pageY : i.pageY || i.clientY, this.drag.offsetX = this.dom.$stage.position().left - this.settings.stagePadding, this.drag.offsetY = this.dom.$stage.position().top, this.settings.rtl && (this.drag.offsetX = this.dom.$stage.position().left + this.width.stage - this.width.el + this.settings.margin), this.state.inMotion && this.support3d) a = this.getTransformProperty(), this.drag.offsetX = a, this.animate(a), this.state.inMotion = !0;
                            else if (this.state.inMotion && !this.support3d) return this.state.inMotion = !1, !1;
                            this.drag.startX = o - this.drag.offsetX, this.drag.startY = s - this.drag.offsetY, this.drag.start = o - this.drag.startX, this.drag.targetEl = i.target || i.srcElement, this.drag.updatedX = this.drag.start, ("IMG" === this.drag.targetEl.tagName || "A" === this.drag.targetEl.tagName) && (this.drag.targetEl.draggable = !1), this.on(n, this.dragType[1], this.e._onDragMove, !1), this.on(n, this.dragType[2], this.e._onDragEnd, !1)
                        }, r.prototype.onDragMove = function(e) {
                            var n, r, o, s, a, l, u;
                            this.state.isTouch && (this.state.isScrolling || (n = e.originalEvent || e || t.event, r = "touchmove" == n.type, o = r ? n.targetTouches[0].pageX : n.pageX || n.clientX, s = r ? n.targetTouches[0].pageY : n.pageY || n.clientY, this.drag.currentX = o - this.drag.startX, this.drag.currentY = s - this.drag.startY, this.drag.distance = this.drag.currentX - this.drag.offsetX, this.drag.distance < 0 ? this.state.direction = this.settings.rtl ? "right" : "left" : this.drag.distance > 0 && (this.state.direction = this.settings.rtl ? "left" : "right"), this.settings.loop ? this.op(this.drag.currentX, ">", this.coordinates(this.minimum())) && "right" === this.state.direction ? this.drag.currentX -= (this.settings.center && this.coordinates(0)) - this.coordinates(this.num.oItems) : this.op(this.drag.currentX, "<", this.coordinates(this.maximum())) && "left" === this.state.direction && (this.drag.currentX += (this.settings.center && this.coordinates(0)) - this.coordinates(this.num.oItems)) : (a = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), l = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), u = this.settings.pullDrag ? this.drag.distance / 5 : 0, this.drag.currentX = Math.max(Math.min(this.drag.currentX, a + u), l + u)), (this.drag.distance > 8 || this.drag.distance < -8) && (n.preventDefault !== i ? n.preventDefault() : n.returnValue = !1, this.state.isSwiping = !0), this.drag.updatedX = this.drag.currentX, (this.drag.currentY > 16 || this.drag.currentY < -16) && this.state.isSwiping === !1 && (this.state.isScrolling = !0, this.drag.updatedX = this.drag.start), this.animate(this.drag.updatedX)))
                        }, r.prototype.onDragEnd = function() {
                            var e, t, i;
                            if (this.state.isTouch) {
                                if ("mousedown" === this.dragType[0] && this.dom.$stage.removeClass("slider-grab"), this.trigger("dragged"), this.drag.targetEl.removeAttribute("draggable"), this.state.isTouch = !1, this.state.isScrolling = !1, this.state.isSwiping = !1, 0 === this.drag.distance && this.state.inMotion !== !0) return this.state.inMotion = !1, !1;
                                this.drag.endTime = (new Date).getTime(), e = this.drag.endTime - this.drag.startTime, t = Math.abs(this.drag.distance), (t > 3 || e > 300) && this.removeClick(this.drag.targetEl), i = this.closest(this.drag.updatedX), this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(i), this.settings.pullDrag || this.drag.updatedX !== this.coordinates(i) || this.transitionEnd(), this.drag.distance = 0, this.off(n, this.dragType[1], this.e._onDragMove), this.off(n, this.dragType[2], this.e._onDragEnd)
                            }
                        }, r.prototype.removeClick = function(n) { this.drag.targetEl = n, e(n).on("click.preventClick", this.e._preventClick), t.setTimeout(function() { e(n).off("click.preventClick") }, 300) }, r.prototype.preventClick = function(t) { t.preventDefault ? t.preventDefault() : t.returnValue = !1, t.stopPropagation && t.stopPropagation(), e(t.target).off("click.preventClick") }, r.prototype.getTransformProperty = function() { var e, n; return e = t.getComputedStyle(this.dom.stage, null).getPropertyValue(this.vendorName + "transform"), e = e.replace(/matrix(3d)?\(|\)/g, "").split(","), n = 16 === e.length, n !== !0 ? e[4] : e[12] }, r.prototype.closest = function(t) {
                            var n = 0,
                                i = 30;
                            return this.settings.freeDrag || e.each(this.coordinates(), e.proxy(function(e, r) { t > r - i && r + i > t ? n = e : this.op(t, "<", r) && this.op(t, ">", this.coordinates(e + 1) || r - this.width.el) && (n = "left" === this.state.direction ? e + 1 : e) }, this)), this.settings.loop || (this.op(t, ">", this.coordinates(this.minimum())) ? n = t = this.minimum() : this.op(t, "<", this.coordinates(this.maximum())) && (n = t = this.maximum())), n
                        }, r.prototype.animate = function(t) { this.trigger("translate"), this.state.inMotion = this.speed() > 0, this.support3d ? this.dom.$stage.css({ transform: "translate3d(" + t + "px,0px, 0px)", transition: this.speed() / 1e3 + "s" }) : this.state.isTouch ? this.dom.$stage.css({ left: t + "px" }) : this.dom.$stage.animate({ left: t }, this.speed() / 1e3, this.settings.fallbackEasing, e.proxy(function() { this.state.inMotion && this.transitionEnd() }, this)) }, r.prototype.current = function(e) {
                            if (e === i) return this._current;
                            if (0 === this.num.oItems) return i;
                            if (e = this.normalize(e), this._current === e) this.animate(this.coordinates(this._current));
                            else {
                                var t = this.trigger("change", { property: { name: "position", value: e } });
                                t.data !== i && (e = this.normalize(t.data)), this._current = e, this.animate(this.coordinates(this._current)), this.updateActiveItems(), this.trigger("changed", { property: { name: "position", value: this._current } })
                            }
                            return this._current
                        }, r.prototype.reset = function(e) { this.suppress(["change", "changed"]), this.speed(0), this.current(e), this.release(["change", "changed"]) }, r.prototype.normalize = function(e, t) {
                            if (e === i || !this.dom.$items) return i;
                            if (this.settings.loop) {
                                var n = this.dom.$items.length;
                                e = (e % n + n) % n
                            } else e = Math.max(this.minimum(), Math.min(this.maximum(), e));
                            return t ? this.dom.$items.eq(e).data("slider-item").index : e
                        }, r.prototype.maximum = function() {
                            var t, n, i = this.settings;
                            if (!i.loop && i.center) t = this.num.oItems - 1;
                            else if (i.loop || i.center)
                                if (i.loop || i.center) t = this.num.oItems + i.items;
                                else {
                                    if (!i.autoWidth && !i.merge) throw "Can not detect maximum absolute position.";
                                    revert = i.rtl ? 1 : -1, n = this.dom.$stage.width() - this.$el.width(), e.each(this.coordinates(), function(e, i) { return i * revert >= n ? !1 : void(t = e + 1) })
                                }
                            else t = this.num.oItems - i.items;
                            return t
                        }, r.prototype.minimum = function() { return this.dom.$oItems.eq(0).data("slider-item").indexAbs }, r.prototype.speed = function(e) { return e !== i && (this._speed = e), this._speed }, r.prototype.coordinates = function(e) { return e !== i ? this._coordinates[e] : this._coordinates }, r.prototype.duration = function(e, t, n) { return Math.min(Math.max(Math.abs(t - e), 1), 6) * Math.abs(n || this.settings.smartSpeed) }, r.prototype.to = function(n, i) {
                            if (this.settings.loop) {
                                var r = n - this.normalize(this.current(), !0),
                                    o = this.current(),
                                    s = this.current(),
                                    a = this.current() + r,
                                    l = 0 > s - a ? !0 : !1;
                                a < this.settings.items && l === !1 ? (o = this.num.items - (this.settings.items - s) - this.settings.items, this.reset(o)) : a >= this.num.items - this.settings.items && l === !0 && (o = s - this.num.oItems, this.reset(o)), t.clearTimeout(this.e._goToLoop), this.e._goToLoop = t.setTimeout(e.proxy(function() { this.speed(this.duration(this.current(), o + r, i)), this.current(o + r) }, this), 30)
                            } else this.speed(this.duration(this.current(), n, i)), this.current(n)
                        }, r.prototype.next = function(e) { e = e || !1, this.to(this.normalize(this.current(), !0) + 1, e) }, r.prototype.prev = function(e) { e = e || !1, this.to(this.normalize(this.current(), !0) - 1, e) }, r.prototype.transitionEnd = function(e) {
                            if (e !== i) { e.stopPropagation(); var t = e.target || e.srcElement || e.originalTarget; if (t !== this.dom.stage) return !1 }
                            this.state.inMotion = !1, this.trigger("translated")
                        }, r.prototype.isElWidthChanged = function() {
                            var e = this.dom.$el.width() - this.settings.stagePadding,
                                t = this.width.el + this.settings.margin;
                            return e !== t
                        }, r.prototype.viewport = function() {
                            var i;
                            if (this.options.responsiveBaseElement !== t) i = e(this.options.responsiveBaseElement).width();
                            else if (t.innerWidth) i = t.innerWidth;
                            else {
                                if (!n.documentElement || !n.documentElement.clientWidth) throw "Can not detect viewport width.";
                                i = n.documentElement.clientWidth
                            }
                            return i
                        }, r.prototype.insertContent = function(e) { this.dom.$stage.empty(), this.fetchContent(e), this.refresh() }, r.prototype.addItem = function(e, t) {
                            var n = this.createItemContainer();
                            t = t || 0, this.initializeItemContainer(n, e), 0 === this.dom.$oItems.length ? this.dom.$stage.append(n) : -1 !== m ? this.dom.$oItems.eq(t).before(n) : this.dom.$oItems.eq(t).after(n), this.refresh()
                        }, r.prototype.removeItem = function(e) { this.dom.$oItems.eq(e).remove(), this.refresh() }, r.prototype.addTriggerableEvents = function() {
                            var t = e.proxy(function(t, n) { return e.proxy(function(e) { e.relatedTarget !== this && (this.suppress([n]), t.apply(this, [].slice.call(arguments, 1)), this.release([n])) }, this) }, this);
                            e.each({ next: this.next, prev: this.prev, to: this.to, destroy: this.destroy, refresh: this.refresh, replace: this.insertContent, add: this.addItem, remove: this.removeItem }, e.proxy(function(e, n) { this.dom.$el.on(e + ".owl.carousel", t(n, e + ".owl.carousel")) }, this))
                        }, r.prototype.watchVisibility = function() {
                            function n(e) { return e.offsetWidth > 0 && e.offsetHeight > 0 }

                            function i() { n(this.dom.el) && (this.dom.$el.removeClass("slider-hidden"), this.refresh(), t.clearInterval(this.e._checkVisibile)) }
                            n(this.dom.el) || (this.dom.$el.addClass("slider-hidden"), t.clearInterval(this.e._checkVisibile), this.e._checkVisibile = t.setInterval(e.proxy(i, this), 500))
                        }, r.prototype.preloadAutoWidthImages = function(t) {
                            var n, i, r, o;
                            n = 0, i = this, t.each(function(s, a) { r = e(a), o = new Image, o.onload = function() { n++, r.attr("src", o.src), r.css("opacity", 1), n >= t.length && (i.state.imagesLoaded = !0, i.init()) }, o.src = r.attr("src") || r.attr("data-src") || r.attr("data-src-retina") })
                        }, r.prototype.destroy = function() {
                            this.dom.$el.hasClass(this.settings.themeClass) && this.dom.$el.removeClass(this.settings.themeClass), this.settings.responsive !== !1 && this.off(t, "resize", this.e._resizer), this.transitionEndVendor && this.off(this.dom.stage, this.transitionEndVendor, this.e._transitionEnd);
                            for (var e in this.plugins) this.plugins[e].destroy();
                            (this.settings.mouseDrag || this.settings.touchDrag) && (this.off(this.dom.stage, this.dragType[0], this.e._onDragStart), this.settings.mouseDrag && this.off(n, this.dragType[3], this.e._onDragStart), this.settings.mouseDrag && (this.dom.$stage.off("dragstart", function() { return !1 }), this.dom.stage.onselectstart = function() {})), this.dom.$el.off(".owl"), null !== this.dom.$cItems && this.dom.$cItems.remove(), this.e = null, this.dom.$el.data("owlCarousel", null), delete this.dom.el.owlCarousel, this.dom.$stage.unwrap(), this.dom.$items.unwrap(), this.dom.$items.contents().unwrap(), this.dom = null
                        }, r.prototype.op = function(e, t, n) {
                            var i = this.settings.rtl;
                            switch (t) {
                                case "<":
                                    return i ? e > n : n > e;
                                case ">":
                                    return i ? n > e : e > n;
                                case ">=":
                                    return i ? n >= e : e >= n;
                                case "<=":
                                    return i ? e >= n : n >= e
                            }
                        }, r.prototype.on = function(e, t, n, i) { e.addEventListener ? e.addEventListener(t, n, i) : e.attachEvent && e.attachEvent("on" + t, n) }, r.prototype.off = function(e, t, n, i) { e.removeEventListener ? e.removeEventListener(t, n, i) : e.detachEvent && e.detachEvent("on" + t, n) }, r.prototype.trigger = function(t, n, i) {
                            var r = { item: { count: this.num.oItems, index: this.current() } },
                                o = e.camelCase(e.grep(["on", t, i], function(e) { return e }).join("-").toLowerCase()),
                                s = e.Event([t, "owl", i || "carousel"].join(".").toLowerCase(), e.extend({ relatedTarget: this }, r, n));
                            return this._supress[s.type] || (e.each(this.plugins, function(e, t) { t.onTrigger && t.onTrigger(s) }), this.dom.$el.trigger(s), this.settings && !e("html").hasClass("ie8") && "function" == typeof this.settings[o] && this.settings[o].apply(this, s)), s
                        }, r.prototype.suppress = function(t) { e.each(t, e.proxy(function(e, t) { this._supress[t] = !0 }, this)) }, r.prototype.release = function(t) { e.each(t, e.proxy(function(e, t) { delete this._supress[t] }, this)) }, r.prototype.browserSupport = function() {
                            if (this.support3d = l(), this.support3d) {
                                this.transformVendor = a();
                                var e = ["transitionend", "webkitTransitionEnd", "transitionend", "oTransitionEnd"];
                                this.transitionEndVendor = e[s()], this.vendorName = this.transformVendor.replace(/Transform/i, ""), this.vendorName = "" !== this.vendorName ? "-" + this.vendorName.toLowerCase() + "-" : ""
                            }
                            this.state.orientation = t.orientation
                        }, e.fn.owlCarousel = function(t) { return this.each(function() { e(this).data("owlCarousel") || e(this).data("owlCarousel", new r(this, t)) }) }, e.fn.owlCarousel.Constructor = r
                    }(window.Zepto || window.jQuery, window, document),
                    function(e, t, n, i) {
                        LazyLoad = function(t) { this.owl = t, this.owl.options = e.extend({}, LazyLoad.Defaults, this.owl.options), this.handlers = { "changed.owl.carousel": e.proxy(function(e) { "items" == e.property.name && e.property.value && !e.property.value.is(":empty") && this.check() }, this) }, this.owl.dom.$el.on(this.handlers) }, LazyLoad.Defaults = { lazyLoad: !1 }, LazyLoad.prototype.check = function() { var e, n, i, r, o = t.devicePixelRatio > 1 ? "data-src-retina" : "data-src"; for (i = 0; i < this.owl.num.items; i++) r = this.owl.dom.$items.eq(i), r.data("slider-item").current === !0 && r.data("slider-item").loaded === !1 && (n = r.find(".slider-lazy"), e = n.attr(o), e = e || n.attr("data-src"), e && (n.css("opacity", "0"), this.preload(n, r))) }, LazyLoad.prototype.preload = function(n, i) {
                            var r, o, s;
                            n.each(e.proxy(function(n, a) { this.owl.trigger("load", null, "lazy"), r = e(a), o = new Image, s = t.devicePixelRatio > 1 ? r.attr("data-src-retina") : r.attr("data-src"), s = s || r.attr("data-src"), o.onload = e.proxy(function() { i.data("slider-item").loaded = !0, r.is("img") ? r.attr("src", o.src) : r.css("background-image", "url(" + o.src + ")"), r.css("opacity", 1), this.owl.trigger("loaded", null, "lazy") }, this), o.src = s }, this))
                        }, LazyLoad.prototype.destroy = function() { var e, t; for (e in this.handlers) this.owl.dom.$el.off(e, this.handlers[e]); for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null) }, e.fn.owlCarousel.Constructor.Plugins.lazyLoad = LazyLoad
                    }(window.Zepto || window.jQuery, window, document),
                    function(e, t, n, i) {
                        AutoHeight = function(t) { this.owl = t, this.owl.options = e.extend({}, AutoHeight.Defaults, this.owl.options), this.handlers = { "changed.owl.carousel": e.proxy(function(e) { "position" == e.property.name && this.owl.settings.autoHeight && this.setHeight() }, this) }, this.owl.dom.$el.on(this.handlers) }, AutoHeight.Defaults = { autoHeight: !1, autoHeightClass: "slider-height" }, AutoHeight.prototype.setHeight = function() {
                            var e, n = this.owl.dom.$items.eq(this.owl.current()),
                                i = this.owl.dom.$oStage,
                                r = 0;
                            this.owl.dom.$oStage.hasClass(this.owl.settings.autoHeightClass) || this.owl.dom.$oStage.addClass(this.owl.settings.autoHeightClass), e = t.setInterval(function() { r += 1, n.data("slider-item").loaded ? (i.height(n.height() + "px"), clearInterval(e)) : 500 === r && clearInterval(e) }, 100)
                        }, AutoHeight.prototype.destroy = function() { var e, t; for (e in this.handlers) this.owl.dom.$el.off(e, this.handlers[e]); for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null) }, e.fn.owlCarousel.Constructor.Plugins.autoHeight = AutoHeight
                    }(window.Zepto || window.jQuery, window, document),
                    function(e, t, n, i) {
                        Video = function(t) {
                            this.owl = t, this.owl.options = e.extend({}, Video.Defaults, this.owl.options), this.handlers = {
                                "resize.owl.carousel": e.proxy(function(e) { this.owl.settings.video && !this.isInFullScreen() && e.preventDefault() }, this),
                                "refresh.owl.carousel changed.owl.carousel": e.proxy(function(e) { this.owl.state.videoPlay && this.stopVideo() }, this),
                                "refresh.owl.carousel refreshed.owl.carousel": e.proxy(function(e) {
                                    return this.owl.settings.video ? void(this.refreshing = "refresh" == e.type) : !1;
                                }, this),
                                "changed.owl.carousel": e.proxy(function(e) { this.refreshing && "items" == e.property.name && e.property.value && !e.property.value.is(":empty") && this.checkVideoLinks() }, this)
                            }, this.owl.dom.$el.on(this.handlers), this.owl.dom.$el.on("click.owl.video", ".slider-video-play-icon", e.proxy(function(e) { this.playVideo(e) }, this))
                        }, Video.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }, Video.prototype.checkVideoLinks = function() { var e, t, n; for (n = 0; n < this.owl.num.items; n++) t = this.owl.dom.$items.eq(n), t.data("slider-item").hasVideo || (e = t.find(".slider-video"), e.length && (this.owl.state.hasVideos = !0, this.owl.dom.$items.eq(n).data("slider-item").hasVideo = !0, e.css("display", "none"), this.getVideoInfo(e, t))) }, Video.prototype.getVideoInfo = function(e, t) {
                            var n, i, r, o, s = e.data("vimeo-id"),
                                a = e.data("youtube-id"),
                                l = e.data("width") || this.owl.settings.videoWidth,
                                u = e.data("height") || this.owl.settings.videoHeight,
                                c = e.attr("href");
                            if (s) i = "vimeo", r = s;
                            else if (a) i = "youtube", r = a;
                            else {
                                if (!c) throw new Error("Missing video link.");
                                r = c.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), r[3].indexOf("youtu") > -1 ? i = "youtube" : r[3].indexOf("vimeo") > -1 && (i = "vimeo"), r = r[6]
                            }
                            t.data("slider-item").videoType = i, t.data("slider-item").videoId = r, t.data("slider-item").videoWidth = l, t.data("slider-item").videoHeight = u, n = { type: i, id: r }, o = l && u ? 'style="width:' + l + "px;height:" + u + 'px;"' : "", e.wrap('<div class="slider-video-wrapper"' + o + "></div>"), this.createVideoTn(e, n)
                        }, Video.prototype.createVideoTn = function(t, n) {
                            function i(e) { o = '<div class="slider-video-play-icon"></div>', r = c.settings.lazyLoad ? '<div class="slider-video-tn ' + u + '" ' + l + '="' + e + '"></div>' : '<div class="slider-video-tn" style="opacity:1;background-image:url(' + e + ')"></div>', t.after(r), t.after(o) }
                            var r, o, s, a = t.find("img"),
                                l = "src",
                                u = "",
                                c = this.owl;
                            return this.owl.settings.lazyLoad && (l = "data-src", u = "slider-lazy"), a.length ? (i(a.attr(l)), a.remove(), !1) : void("youtube" === n.type ? (s = "http://img.youtube.com/vi/" + n.id + "/hqdefault.jpg", i(s)) : "vimeo" === n.type && e.ajax({ type: "GET", url: "http://vimeo.com/api/v2/video/" + n.id + ".json", jsonp: "callback", dataType: "jsonp", success: function(e) { s = e[0].thumbnail_large, i(s), c.settings.loop && c.updateActiveItems() } }))
                        }, Video.prototype.stopVideo = function() {
                            this.owl.trigger("stop", null, "video");
                            var e = this.owl.dom.$items.eq(this.owl.state.videoPlayIndex);
                            e.find(".slider-video-frame").remove(), e.removeClass("slider-video-playing"), this.owl.state.videoPlay = !1
                        }, Video.prototype.playVideo = function(t) {
                            this.owl.trigger("play", null, "video"), this.owl.state.videoPlay && this.stopVideo();
                            var n, i, r, o = e(t.target || t.srcElement),
                                s = o.closest("." + this.owl.settings.itemClass);
                            r = s.data("slider-item").videoType, id = s.data("slider-item").videoId, width = s.data("slider-item").videoWidth || Math.floor(s.data("slider-item").width - this.owl.settings.margin), height = s.data("slider-item").videoHeight || this.owl.dom.$stage.height(), "youtube" === r ? n = '<iframe width="' + width + '" height="' + height + '" src="http://www.youtube.com/embed/' + id + "?autoplay=1&v=" + id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === r && (n = '<iframe src="http://player.vimeo.com/video/' + id + '?autoplay=1" width="' + width + '" height="' + height + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'), s.addClass("slider-video-playing"), this.owl.state.videoPlay = !0, this.owl.state.videoPlayIndex = s.data("slider-item").indexAbs, i = e('<div style="height:' + height + "px; width:" + width + 'px" class="slider-video-frame">' + n + "</div>"), o.after(i)
                        }, Video.prototype.isInFullScreen = function() { var i = n.fullscreenElement || n.mozFullScreenElement || n.webkitFullscreenElement; return i && e(i.parentNode).hasClass("slider-video-frame") && (this.owl.speed(0), this.owl.state.isFullScreen = !0), i && this.owl.state.isFullScreen && this.owl.state.videoPlay ? !1 : this.owl.state.isFullScreen ? (this.owl.state.isFullScreen = !1, !1) : this.owl.state.videoPlay && this.owl.state.orientation !== t.orientation ? (this.owl.state.orientation = t.orientation, !1) : !0 }, Video.prototype.destroy = function() {
                            var e, t;
                            this.owl.dom.$el.off("click.owl.video");
                            for (e in this.handlers) this.owl.dom.$el.off(e, this.handlers[e]);
                            for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
                        }, e.fn.owlCarousel.Constructor.Plugins.video = Video
                    }(window.Zepto || window.jQuery, window, document),
                    function(e, t, n, i) {
                        Animate = function(t) { this.core = t, this.core.options = e.extend({}, Animate.Defaults, this.core.options), this.swapping = !0, this.previous = i, this.next = i, this.handlers = { "change.owl.carousel": e.proxy(function(e) { "position" == e.property.name && (this.previous = this.core.current(), this.next = e.property.value) }, this), "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": e.proxy(function(e) { this.swapping = "translated" == e.type }, this), "translate.owl.carousel": e.proxy(function(e) { this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap() }, this) }, this.core.dom.$el.on(this.handlers) }, Animate.Defaults = { animateOut: !1, animateIn: !1 }, Animate.prototype.swap = function() {
                            if (1 === this.core.settings.items && this.core.support3d) {
                                this.core.speed(0);
                                var t, n = e.proxy(this.clear, this),
                                    i = this.core.dom.$items.eq(this.previous),
                                    r = this.core.dom.$items.eq(this.next),
                                    o = this.core.settings.animateIn,
                                    s = this.core.settings.animateOut;
                                this.core.current() !== this.previous && (s && (t = this.core.coordinates(this.previous) - this.core.coordinates(this.next), i.css({ left: t + "px" }).addClass("animated slider-animated-out").addClass(s).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", n)), o && r.addClass("animated slider-animated-in").addClass(o).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", n))
                            }
                        }, Animate.prototype.clear = function(t) { e(t.target).css({ left: "" }).removeClass("animated slider-animated-out slider-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.transitionEnd() }, Animate.prototype.destroy = function() { var e, t; for (e in this.handlers) this.core.dom.$el.off(e, this.handlers[e]); for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null) }, e.fn.owlCarousel.Constructor.Plugins.Animate = Animate
                    }(window.Zepto || window.jQuery, window, document),
                    function(e, t, n, i) {
                        Autoplay = function(t) { this.core = t, this.core.options = e.extend({}, Autoplay.Defaults, this.core.options), this.handlers = { "translated.owl.carousel refreshed.owl.carousel": e.proxy(function() { this.autoplay() }, this), "play.owl.autoplay": e.proxy(function(e, t, n) { this.play(t, n) }, this), "stop.owl.autoplay": e.proxy(function() { this.stop() }, this), "mouseover.owl.autoplay": e.proxy(function() { this.core.settings.autoplayHoverPause && this.pause() }, this), "mouseleave.owl.autoplay": e.proxy(function() { this.core.settings.autoplayHoverPause && this.autoplay() }, this) }, this.core.dom.$el.on(this.handlers) }, Autoplay.Defaults = { autoplay: !1, autoplayTimeout: 5e3, autoplayHoverPause: !1, autoplaySpeed: !1 }, Autoplay.prototype.autoplay = function() { this.core.settings.autoplay && !this.core.state.videoPlay ? (t.clearInterval(this.interval), this.interval = t.setInterval(e.proxy(function() { this.play() }, this), this.core.settings.autoplayTimeout)) : t.clearInterval(this.interval) }, Autoplay.prototype.play = function(e, i) { return n.hidden === !0 || this.core.state.isTouch || this.core.state.isScrolling || this.core.state.isSwiping || this.core.state.inMotion ? void 0 : this.core.settings.autoplay === !1 ? void t.clearInterval(this.interval) : void this.core.next(this.core.settings.autoplaySpeed) }, Autoplay.prototype.stop = function() { t.clearInterval(this.interval) }, Autoplay.prototype.pause = function() { t.clearInterval(this.interval) }, Autoplay.prototype.destroy = function() {
                            var e, n;
                            t.clearInterval(this.interval);
                            for (e in this.handlers) this.core.dom.$el.off(e, this.handlers[e]);
                            for (n in Object.getOwnPropertyNames(this)) "function" != typeof this[n] && (this[n] = null)
                        }, e.fn.owlCarousel.Constructor.Plugins.autoplay = Autoplay
                    }(window.Zepto || window.jQuery, window, document),
                    function(e, t, n, i) {
                        "use strict";
                        var r = function(t) {
                            this.core = t, this.initialized = !1, this.pages = [], this.controls = {}, this.template = null, this.$element = this.core.dom.$el, this.overrides = { next: this.core.next, prev: this.core.prev, to: this.core.to }, this.handlers = {
                                "changed.owl.carousel": e.proxy(function(t) { "items" == t.property.name && (this.initialized || (this.initialize(), this.initialized = !0), this.update(), this.draw()), this.filling && (t.property.value.data("slider-item").dot = e(":first-child", t.property.value).find("[data-dot]").andSelf().data("dot")) }, this),
                                "change.owl.carousel": e.proxy(function(e) {
                                    if ("position" == e.property.name && !this.core.state.revert && !this.core.settings.loop && this.core.settings.navRewind) {
                                        var t = this.core.current(),
                                            n = this.core.maximum(),
                                            i = this.core.minimum();
                                        e.data = e.property.value > n ? t >= n ? i : n : e.property.value < i ? n : e.property.value
                                    }
                                    this.filling = this.core.settings.dotsData && "item" == e.property.name && e.property.value && e.property.value.is(":empty")
                                }, this),
                                "refreshed.owl.carousel": e.proxy(function() { this.initialized && (this.update(), this.draw()) }, this)
                            }, this.core.options = e.extend({}, r.Defaults, this.core.options), this.$element.on(this.handlers)
                        };
                        r.Defaults = { nav: !1, navRewind: !0, navText: ["prev", "next"], navSpeed: !1, navElement: "div", navContainer: !1, navContainerClass: "slider-nav", navClass: ["slider-prev", "slider-next"], slideBy: 1, dotClass: "slider-dot", dotsClass: "slider-dots", dots: !0, dotsEach: !1, dotData: !1, dotsSpeed: !1, dotsContainer: !1, controlsClass: "slider-controls" }, r.prototype.initialize = function() {
                            var t, n, i = this.core.settings;
                            i.dotsData || (this.template = e("<div>").addClass(i.dotClass).append(e("<span>")).prop("outerHTML")), i.navContainer && i.dotsContainer || (this.controls.$container = e("<div>").addClass(i.controlsClass).appendTo(this.$element)), this.controls.$indicators = i.dotsContainer ? e(i.dotsContainer) : e("<div>").hide().addClass(i.dotsClass).appendTo(this.controls.$container), this.controls.$indicators.on(this.core.dragType[2], "div", e.proxy(function(t) {
                                var n = e(t.target).parent().is(this.controls.$indicators) ? e(t.target).index() : e(t.target).parent().index();
                                t.preventDefault(), this.to(n, i.dotsSpeed)
                            }, this)), t = i.navContainer ? e(i.navContainer) : e("<div>").addClass(i.navContainerClass).prependTo(this.controls.$container), this.controls.$next = e("<" + i.navElement + ">"), this.controls.$previous = this.controls.$next.clone(), this.controls.$previous.addClass(i.navClass[0]).html(i.navText[0]).hide().prependTo(t).on(this.core.dragType[2], e.proxy(function(e) { this.prev() }, this)), this.controls.$next.addClass(i.navClass[1]).html(i.navText[1]).hide().appendTo(t).on(this.core.dragType[2], e.proxy(function(e) { this.next() }, this));
                            for (n in this.overrides) this.core[n] = e.proxy(this[n], this)
                        }, r.prototype.destroy = function() { var e, t, n, i; for (e in this.handlers) this.$element.off(e, this.handlers[e]); for (t in this.controls) this.controls[t].remove(); for (i in this.overides) this.core[i] = this.overrides[i]; for (n in Object.getOwnPropertyNames(this)) "function" != typeof this[n] && (this[n] = null) }, r.prototype.update = function() {
                            var e, t, n, i = this.core.settings,
                                r = this.core.num.cItems / 2,
                                o = this.core.num.items - r,
                                s = i.center || i.autoWidth || i.dotData ? 1 : i.dotsEach || i.items;
                            if ("page" !== i.slideBy && (i.slideBy = Math.min(i.slideBy, i.items)), i.dots)
                                for (this.pages = [], e = r, t = 0, n = 0; o > e; e++)(t >= s || 0 === t) && (this.pages.push({ start: e - r, end: e - r + s - 1 }), t = 0, ++n), t += this.core.num.merged[e]
                        }, r.prototype.draw = function() {
                            var t, n, i = "",
                                r = this.core.settings,
                                o = this.core.dom.$oItems,
                                s = this.core.normalize(this.core.current(), !0);
                            if (!r.nav || r.loop || r.navRewind || (this.controls.$previous.toggleClass("disabled", 0 >= s), this.controls.$next.toggleClass("disabled", s >= this.core.maximum())), this.controls.$previous.toggle(r.nav), this.controls.$next.toggle(r.nav), r.dots) {
                                if (t = this.pages.length - this.controls.$indicators.children().length, t > 0) {
                                    for (n = 0; n < Math.abs(t); n++) i += r.dotData ? o.eq(n).data("slider-item").dot : this.template;
                                    this.controls.$indicators.append(i)
                                } else 0 > t && this.controls.$indicators.children().slice(t).remove();
                                this.controls.$indicators.find(".active").removeClass("active"), this.controls.$indicators.children().eq(e.inArray(this.current(), this.pages)).addClass("active")
                            }
                            this.controls.$indicators.toggle(r.dots)
                        }, r.prototype.onTrigger = function(t) {
                            var n = this.core.settings;
                            t.page = { index: e.inArray(this.current(), this.pages), count: this.pages.length, size: n.center || n.autoWidth || n.dotData ? 1 : n.dotsEach || n.items }
                        }, r.prototype.current = function() { var t = this.core.normalize(this.core.current(), !0); return e.grep(this.pages, function(e) { return e.start <= t && e.end >= t }).pop() }, r.prototype.getPosition = function(t) { var n, i, r = this.core.settings; return "page" == r.slideBy ? (n = e.inArray(this.current(), this.pages), i = this.pages.length, t ? ++n : --n, n = this.pages[(n % i + i) % i].start) : (n = this.core.normalize(this.core.current(), !0), i = this.core.num.oItems, t ? n += r.slideBy : n -= r.slideBy), n }, r.prototype.next = function(t) { e.proxy(this.overrides.to, this.core)(this.getPosition(!0), t) }, r.prototype.prev = function(t) { e.proxy(this.overrides.to, this.core)(this.getPosition(!1), t) }, r.prototype.to = function(t, n, i) {
                            var r;
                            i ? e.proxy(this.overrides.to, this.core)(t, n) : (r = this.pages.length, e.proxy(this.overrides.to, this.core)(this.pages[(t % r + r) % r].start, n))
                        }, e.fn.owlCarousel.Constructor.Plugins.Navigation = r
                    }(window.Zepto || window.jQuery, window, document),
                    function(e, t, n, i) {
                        "use strict";
                        var r = function(n) {
                            this.core = n, this.hashes = {}, this.$element = this.core.dom.$el, this.handlers = { "initialized.owl.carousel": e.proxy(function() { t.location.hash.substring(1) && e(t).trigger("hashchange.owl.navigation") }, this), "changed.owl.carousel": e.proxy(function(t) { this.filling && (t.property.value.data("slider-item").hash = e(":first-child", t.property.value).find("[data-hash]").andSelf().data("hash"), this.hashes[t.property.value.data("slider-item").hash] = t.property.value) }, this), "change.owl.carousel": e.proxy(function(e) { "position" == e.property.name && this.core.current() === i && "URLHash" == this.core.settings.startPosition && (e.data = this.hashes[t.location.hash.substring(1)]), this.filling = "item" == e.property.name && e.property.value && e.property.value.is(":empty") }, this) }, this.core.options = e.extend({}, r.Defaults, this.core.options), this.$element.on(this.handlers), e(t).on("hashchange.owl.navigation", e.proxy(function() {
                                var e = t.location.hash.substring(1),
                                    n = this.core.dom.$oItems,
                                    i = this.hashes[e] && n.index(this.hashes[e]) || 0;
                                return e ? (this.core.dom.oStage.scrollLeft = 0, void this.core.to(i, !1, !0)) : !1
                            }, this))
                        };
                        r.Defaults = { URLhashListener: !1 }, r.prototype.destroy = function() {
                            var n;
                            e(t).off("hashchange.owl.navigation");
                            for (n in Object.getOwnPropertyNames(this)) "function" != typeof this[n] && (this[n] = null)
                        }, e.fn.owlCarousel.Constructor.Plugins.Hash = r
                    }(window.Zepto || window.jQuery, window, document)
                }.apply(e, arguments)
            })
        }(this),
        function(e) {
            define("jquery.reflect", ["jquery"], function() {
                return function() {
                    ! function(e) {
                        e.fn.reflect = function(t) {
                            return t = e.extend({ height: 1 / 2.2, opacity: .15 }, t), this.unreflect().each(function() {
                                function n() {
                                    var n, r, o, s, a, l = i.width,
                                        u = i.height;
                                    if (r = Math.floor(t.height > 1 ? Math.min(u, t.height) : u * t.height), n = e("<canvas />")[0], n.getContext) { s = n.getContext("2d"); try { e(n).attr({ width: l, height: r }), s.save(), s.translate(0, u - 1), s.scale(1, -1), s.drawImage(i, 0, 0, l, u), s.restore(), s.globalCompositeOperation = "destination-out", a = s.createLinearGradient(0, 0, 0, r), a.addColorStop(0, "rgba(255, 255, 255, " + (1 - t.opacity) + ")"), a.addColorStop(1, "rgba(255, 255, 255, 1.0)"), s.fillStyle = a, s.rect(0, 0, l, r), s.fill() } catch (c) { return } } else {
                                        if (!window.ActiveXObject) return;
                                        n = e("<img />").attr("src", i.src).css({ width: l, height: u, marginBottom: r - u, filter: "FlipV progid:DXImageTransform.Microsoft.Alpha(Opacity=" + 100 * t.opacity + ", FinishOpacity=0, Style=1, StartX=0, StartY=0, FinishX=0, FinishY=" + r / u * 100 + ")" })[0]
                                    }
                                    e(n).css({ display: "block", border: 0 }), o = e("A" === i.parentNode.tagName ? "<span />" : "<div />").insertAfter(i).append([i, n])[0], o.className = i.className, e(i).data("reflected", o.style.cssText = i.style.cssText), e(o).css({ width: l, height: u + r, overflow: "hidden" }), i.style.cssText = "display: block; border: 0px", i.className = "reflected"
                                }
                                var i = this;
                                "IMG" === i.tagName && (i.complete ? n() : e(i).load(n))
                            })
                        }, e.fn.unreflect = function() {
                            return this.unbind("load").each(function() {
                                var t, n = this,
                                    i = e(this).data("reflected");
                                void 0 !== i && (t = n.parentNode, n.className = t.className, n.style.cssText = i, e(n).data("reflected", null), t.parentNode.replaceChild(n, t))
                            })
                        }
                    }(window.jQuery || window.Zepto)
                }.apply(e, arguments)
            })
        }(this),
        function() {
            "use strict";

            function e() {}

            function t(e, t) {
                for (var n = e.length; n--;)
                    if (e[n].listener === t) return n;
                return -1
            }

            function n(e) { return function() { return this[e].apply(this, arguments) } }
            var i = e.prototype,
                r = this,
                o = r.EventEmitter;
            i.getListeners = function(e) { var t, n, i = this._getEvents(); if (e instanceof RegExp) { t = {}; for (n in i) i.hasOwnProperty(n) && e.test(n) && (t[n] = i[n]) } else t = i[e] || (i[e] = []); return t }, i.flattenListeners = function(e) { var t, n = []; for (t = 0; t < e.length; t += 1) n.push(e[t].listener); return n }, i.getListenersAsObject = function(e) { var t, n = this.getListeners(e); return n instanceof Array && (t = {}, t[e] = n), t || n }, i.addListener = function(e, n) {
                var i, r = this.getListenersAsObject(e),
                    o = "object" == typeof n;
                for (i in r) r.hasOwnProperty(i) && -1 === t(r[i], n) && r[i].push(o ? n : { listener: n, once: !1 });
                return this
            }, i.on = n("addListener"), i.addOnceListener = function(e, t) { return this.addListener(e, { listener: t, once: !0 }) }, i.once = n("addOnceListener"), i.defineEvent = function(e) { return this.getListeners(e), this }, i.defineEvents = function(e) { for (var t = 0; t < e.length; t += 1) this.defineEvent(e[t]); return this }, i.removeListener = function(e, n) { var i, r, o = this.getListenersAsObject(e); for (r in o) o.hasOwnProperty(r) && (i = t(o[r], n), -1 !== i && o[r].splice(i, 1)); return this }, i.off = n("removeListener"), i.addListeners = function(e, t) { return this.manipulateListeners(!1, e, t) }, i.removeListeners = function(e, t) { return this.manipulateListeners(!0, e, t) }, i.manipulateListeners = function(e, t, n) {
                var i, r, o = e ? this.removeListener : this.addListener,
                    s = e ? this.removeListeners : this.addListeners;
                if ("object" != typeof t || t instanceof RegExp)
                    for (i = n.length; i--;) o.call(this, t, n[i]);
                else
                    for (i in t) t.hasOwnProperty(i) && (r = t[i]) && ("function" == typeof r ? o.call(this, i, r) : s.call(this, i, r));
                return this
            }, i.removeEvent = function(e) {
                var t, n = typeof e,
                    i = this._getEvents();
                if ("string" === n) delete i[e];
                else if (e instanceof RegExp)
                    for (t in i) i.hasOwnProperty(t) && e.test(t) && delete i[t];
                else delete this._events;
                return this
            }, i.removeAllListeners = n("removeEvent"), i.emitEvent = function(e, t) {
                var n, i, r, o, s, a = this.getListenersAsObject(e);
                for (o in a)
                    if (a.hasOwnProperty(o))
                        for (n = a[o].slice(0), r = n.length; r--;) i = n[r], i.once === !0 && this.removeListener(e, i.listener), s = i.listener.apply(this, t || []), s === this._getOnceReturnValue() && this.removeListener(e, i.listener);
                return this
            }, i.trigger = n("emitEvent"), i.emit = function(e) { var t = Array.prototype.slice.call(arguments, 1); return this.emitEvent(e, t) }, i.setOnceReturnValue = function(e) { return this._onceReturnValue = e, this }, i._getOnceReturnValue = function() { return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0 }, i._getEvents = function() { return this._events || (this._events = {}) }, e.noConflict = function() { return r.EventEmitter = o, e }, "function" == typeof define && define.amd ? define("EventEmitter", [], function() { return e }) : "object" == typeof module && module.exports ? module.exports = e : r.EventEmitter = e
        }.call(this),
        function() {
            function e() {}

            function t(e, t) {
                for (var n = e.length; n--;)
                    if (e[n].listener === t) return n;
                return -1
            }

            function n(e) { return function() { return this[e].apply(this, arguments) } }
            var i = e.prototype,
                r = this,
                o = r.EventEmitter;
            i.getListeners = function(e) { var t, n, i = this._getEvents(); if ("object" == typeof e) { t = {}; for (n in i) i.hasOwnProperty(n) && e.test(n) && (t[n] = i[n]) } else t = i[e] || (i[e] = []); return t }, i.flattenListeners = function(e) { var t, n = []; for (t = 0; t < e.length; t += 1) n.push(e[t].listener); return n }, i.getListenersAsObject = function(e) { var t, n = this.getListeners(e); return n instanceof Array && (t = {}, t[e] = n), t || n }, i.addListener = function(e, n) {
                var i, r = this.getListenersAsObject(e),
                    o = "object" == typeof n;
                for (i in r) r.hasOwnProperty(i) && -1 === t(r[i], n) && r[i].push(o ? n : { listener: n, once: !1 });
                return this
            }, i.on = n("addListener"), i.addOnceListener = function(e, t) { return this.addListener(e, { listener: t, once: !0 }) }, i.once = n("addOnceListener"), i.defineEvent = function(e) { return this.getListeners(e), this }, i.defineEvents = function(e) { for (var t = 0; t < e.length; t += 1) this.defineEvent(e[t]); return this }, i.removeListener = function(e, n) { var i, r, o = this.getListenersAsObject(e); for (r in o) o.hasOwnProperty(r) && (i = t(o[r], n), -1 !== i && o[r].splice(i, 1)); return this }, i.off = n("removeListener"), i.addListeners = function(e, t) { return this.manipulateListeners(!1, e, t) }, i.removeListeners = function(e, t) { return this.manipulateListeners(!0, e, t) }, i.manipulateListeners = function(e, t, n) {
                var i, r, o = e ? this.removeListener : this.addListener,
                    s = e ? this.removeListeners : this.addListeners;
                if ("object" != typeof t || t instanceof RegExp)
                    for (i = n.length; i--;) o.call(this, t, n[i]);
                else
                    for (i in t) t.hasOwnProperty(i) && (r = t[i]) && ("function" == typeof r ? o.call(this, i, r) : s.call(this, i, r));
                return this
            }, i.removeEvent = function(e) {
                var t, n = typeof e,
                    i = this._getEvents();
                if ("string" === n) delete i[e];
                else if ("object" === n)
                    for (t in i) i.hasOwnProperty(t) && e.test(t) && delete i[t];
                else delete this._events;
                return this
            }, i.removeAllListeners = n("removeEvent"), i.emitEvent = function(e, t) {
                var n, i, r, o, s = this.getListenersAsObject(e);
                for (r in s)
                    if (s.hasOwnProperty(r))
                        for (i = s[r].length; i--;) n = s[r][i], n.once === !0 && this.removeListener(e, n.listener), o = n.listener.apply(this, t || []), o === this._getOnceReturnValue() && this.removeListener(e, n.listener);
                return this
            }, i.trigger = n("emitEvent"), i.emit = function(e) { var t = Array.prototype.slice.call(arguments, 1); return this.emitEvent(e, t) }, i.setOnceReturnValue = function(e) { return this._onceReturnValue = e, this }, i._getOnceReturnValue = function() { return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0 }, i._getEvents = function() { return this._events || (this._events = {}) }, e.noConflict = function() { return r.EventEmitter = o, e }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() { return e }) : "object" == typeof module && module.exports ? module.exports = e : this.EventEmitter = e
        }.call(this),
        function(e) {
            function t(t) { var n = e.event; return n.target = n.target || n.srcElement || t, n }
            var n = document.documentElement,
                i = function() {};
            n.addEventListener ? i = function(e, t, n) { e.addEventListener(t, n, !1) } : n.attachEvent && (i = function(e, n, i) {
                e[n + i] = i.handleEvent ? function() {
                    var n = t(e);
                    i.handleEvent.call(i, n)
                } : function() {
                    var n = t(e);
                    i.call(e, n)
                }, e.attachEvent("on" + n, e[n + i])
            });
            var r = function() {};
            n.removeEventListener ? r = function(e, t, n) { e.removeEventListener(t, n, !1) } : n.detachEvent && (r = function(e, t, n) { e.detachEvent("on" + t, e[t + n]); try { delete e[t + n] } catch (i) { e[t + n] = void 0 } });
            var o = { bind: i, unbind: r };
            "function" == typeof define && define.amd ? define("eventie/eventie", o) : e.eventie = o
        }(this),
        function(e, t) { "function" == typeof define && define.amd ? define("imagesloaded", ["eventEmitter/EventEmitter", "eventie/eventie"], function(n, i) { return t(e, n, i) }) : "object" == typeof exports ? module.exports = t(e, require("wolfy87-eventemitter"), require("eventie")) : e.imagesLoaded = t(e, e.EventEmitter, e.eventie) }(window, function(e, t, n) {
            function i(e, t) { for (var n in t) e[n] = t[n]; return e }

            function r(e) { return "[object Array]" === h.call(e) }

            function o(e) {
                var t = [];
                if (r(e)) t = e;
                else if ("number" == typeof e.length)
                    for (var n = 0, i = e.length; i > n; n++) t.push(e[n]);
                else t.push(e);
                return t
            }

            function s(e, t, n) {
                if (!(this instanceof s)) return new s(e, t);
                "string" == typeof e && (e = document.querySelectorAll(e)), this.elements = o(e), this.options = i({}, this.options), "function" == typeof t ? n = t : i(this.options, t), n && this.on("always", n), this.getImages(), u && (this.jqDeferred = new u.Deferred);
                var r = this;
                setTimeout(function() { r.check() })
            }

            function a(e) { this.img = e }

            function l(e) { this.src = e, p[e] = this }
            var u = e.jQuery,
                c = e.console,
                d = "undefined" != typeof c,
                h = Object.prototype.toString;
            s.prototype = new t, s.prototype.options = {}, s.prototype.getImages = function() {
                this.images = [];
                for (var e = 0, t = this.elements.length; t > e; e++) {
                    var n = this.elements[e];
                    "IMG" === n.nodeName && this.addImage(n);
                    var i = n.nodeType;
                    if (i && (1 === i || 9 === i || 11 === i))
                        for (var r = n.querySelectorAll("img"), o = 0, s = r.length; s > o; o++) {
                            var a = r[o];
                            this.addImage(a)
                        }
                }
            }, s.prototype.addImage = function(e) {
                var t = new a(e);
                this.images.push(t)
            }, s.prototype.check = function() {
                function e(e, r) { return t.options.debug && d && c.log("confirm", e, r), t.progress(e), n++, n === i && t.complete(), !0 }
                var t = this,
                    n = 0,
                    i = this.images.length;
                if (this.hasAnyBroken = !1, !i) return void this.complete();
                for (var r = 0; i > r; r++) {
                    var o = this.images[r];
                    o.on("confirm", e), o.check()
                }
            }, s.prototype.progress = function(e) {
                this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded;
                var t = this;
                setTimeout(function() { t.emit("progress", t, e), t.jqDeferred && t.jqDeferred.notify && t.jqDeferred.notify(t, e) })
            }, s.prototype.complete = function() {
                var e = this.hasAnyBroken ? "fail" : "done";
                this.isComplete = !0;
                var t = this;
                setTimeout(function() {
                    if (t.emit(e, t), t.emit("always", t), t.jqDeferred) {
                        var n = t.hasAnyBroken ? "reject" : "resolve";
                        t.jqDeferred[n](t)
                    }
                })
            }, u && (u.fn.imagesLoaded = function(e, t) { var n = new s(this, e, t); return n.jqDeferred.promise(u(this)) }), a.prototype = new t, a.prototype.check = function() {
                var e = p[this.img.src] || new l(this.img.src);
                if (e.isConfirmed) return void this.confirm(e.isLoaded, "cached was confirmed");
                if (this.img.complete && void 0 !== this.img.naturalWidth) return void this.confirm(0 !== this.img.naturalWidth, "naturalWidth");
                var t = this;
                e.on("confirm", function(e, n) { return t.confirm(e.isLoaded, n), !0 }), e.check()
            }, a.prototype.confirm = function(e, t) { this.isLoaded = e, this.emit("confirm", this, t) };
            var p = {};
            return l.prototype = new t, l.prototype.check = function() {
                if (!this.isChecked) {
                    var e = new Image;
                    n.bind(e, "load", this), n.bind(e, "error", this), e.src = this.src, this.isChecked = !0
                }
            }, l.prototype.handleEvent = function(e) {
                var t = "on" + e.type;
                this[t] && this[t](e)
            }, l.prototype.onload = function(e) { this.confirm(!0, "onload"), this.unbindProxyEvents(e) }, l.prototype.onerror = function(e) { this.confirm(!1, "onerror"), this.unbindProxyEvents(e) }, l.prototype.confirm = function(e, t) { this.isConfirmed = !0, this.isLoaded = e, this.emit("confirm", this, t) }, l.prototype.unbindProxyEvents = function(e) { n.unbind(e.target, "load", this), n.unbind(e.target, "error", this) }, s
        }),
        function() {
            var e = {}.hasOwnProperty,
                t = function(t, n) {
                    function i() { this.constructor = t }
                    for (var r in n) e.call(n, r) && (t[r] = n[r]);
                    return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
                };
            define("product", ["base", "jquery", "jquery.owl.carousel", "jquery.reflect", "imagesloaded"], function(e, n) {
                var i;
                return i = function(e) {
                    function i() { return i.__super__.constructor.apply(this, arguments) }
                    return t(i, e), i.prototype._sliders = function() { return this.options.sliders }, i.prototype._$sliders = function() { return n(this._sliders()) }, i.prototype._setSliderFirstPosition = function(e) { return e.$slider.trigger("to.owl.carousel", [e.firstSlide, 0, !0]) }, i.prototype._rotate360 = function() { return this.options.rotate360 }, i.prototype._$rotate360 = function() { return n(this._rotate360()) }, i.prototype._loader = function(e) { return e.$slider.imagesLoaded().done(function(t) { return function() { return setTimeout(function() { return e.$wrapper.removeClass("is-loading"), setTimeout(function() { return e.$wrapper.find(t.options.slidersOverlays).remove() }, 200) }, 200) } }(this)) }, i.prototype._setSliderActiveColor = function(e) { return n("[" + this.options.slidersBtnsColorsSwitchers + "]").removeClass("is-active"), e.$switcher.addClass("is-active") }, i.prototype._setSliderActive = function(e) { return n(this.options.slidersWrappers).removeClass("is-active"), e.$slider.addClass("is-active") }, i.prototype._arrows = function(e) { var t, i, r, o; return r = e.$wrapper.find("[" + this.options.slidersBtns + "='prev']"), i = e.$wrapper.find("[" + this.options.slidersBtns + "='next']"), t = e.$wrapper.find(this.options.slidersItems), o = t.length, o ? 1 === o ? (r.fadeOut(0), i.fadeOut(0)) : t.each(function(e, t) { var s, a; return a = n(t), s = a.parent(), s.hasClass("active") ? 0 === e ? (i.fadeIn(100), r.fadeOut(100)) : o === e + 1 ? (r.fadeIn(100), i.fadeOut(100)) : (r.fadeIn(150), i.fadeIn(150)) : void 0 }) : void 0 }, i.prototype._360Mousemove = function(e) { var t, n; return t = e.e.pageX || e.e.clientX, n = parseInt(t / (this.options.$window.width() / e.photosLength)), e.$photos.removeClass("is-active").eq(n).addClass("is-active") }, i.prototype._360 = function(e) { return e.$slider ? e.$slider.each(function(e) { return function(t, i) { var r, o; return o = n(i), r = o.find(e.options.slidersItems), r.length ? r.each(function(t, i) { var o, s, a; return o = n(i), s = o.find(e.options.slidersItemsPhotos), a = s.length, a > 1 ? r.on("mousemove", function(t) { return e._360Mousemove({ e: t, $photos: s, photosLength: a }) }) : void 0 }) : void 0 } }(this)) : void 0 }, i.prototype._setHandlerSliderNavigationClick = function(e) { return e.$wrapper.find("[" + this.options.slidersBtns + "]").click(function(t) { return function(i) { var r, o; return r = n(i.currentTarget), o = r.attr("" + t.options.slidersBtns), "next" === o ? e.slider.trigger("next.owl.carousel") : "prev" === o && e.slider.trigger("prev.owl.carousel"), t._arrows({ $slider: e.$slider, $wrapper: e.$wrapper }) } }(this)) }, i.prototype._setHandlerSliderColorsClick = function() { return this.options.$body.on(this.options.event, "[" + this.options.slidersBtnsColorsSwitchers + "]", function(e) { return function(t) { var i, r, o; return r = n(t.currentTarget), o = r.data("index"), i = e.options.$product.find("[" + e.options.slidersSlidersColors + "=" + o + "]"), e._setSliderActive({ $slider: i }), e._setSliderActiveColor({ $switcher: r }) } }(this)) }, i.prototype.destroySlider = function() { return this.slider.trigger("destroy.owl.carousel") }, i.prototype.slider = function() { return this._$sliders().each(function(e) { return function(t, i) { var r, o, s, a; return r = n(i), o = r.closest(e.options.slidersWrappers), s = { loop: !1, margin: 0, padding: 0, nav: !1, items: 1, dots: !1, mouseDrag: !0, touchDrag: !0, pullDrag: !0, freeDrag: !1, responsiveRefreshRate: 50, smartSpeed: 620, onInitialized: function() { return setTimeout(function() { return s = { $slider: r, $wrapper: o, firstSlide: 0 }, e._setSliderFirstPosition(s), e._arrows(s), e._loader(s) }, 100) }, onTranslated: function() { return s = { $slider: r, $wrapper: o, firstSlide: 0 }, e._arrows(s) } }, a = r.owlCarousel(s), e._setHandlerSliderNavigationClick({ $wrapper: o, $slider: r, slider: a }), e._setHandlerSliderColorsClick(), e._360({ $wrapper: o, $slider: r }) } }(this)) }, i.prototype.share = function() { return this.options.$body.on(this.options.event, "[" + this.options.$share + "]", function() { var e, t, i; return e = "is-active", i = n(this).closest(".share"), t = i.find("li"), i.hasClass(e) ? (i.removeClass(e), setTimeout(function(e) { return function() { return t.removeAttr("style") } }(this), 620)) : (t.css({ display: "inline-block" }), setTimeout(function(t) { return function() { return i.addClass(e) } }(this), 10)) }) }, i.prototype.reflect = function() { return this.options.$products.find(".reflect").reflect() }, i.prototype.rotate = function() { return this._$rotate360().on("mousemove", function(e) { var t, i, r; return r = n(this), t = e.pageX || e.clientX, i = parseInt(t / (r.width() / 2)) - 1, r.parent().find("img").removeClass("is-active").eq(i).addClass("is-active") }) }, i.prototype.variants = function() { return this.options.$body.on(this.options.event, ".products .products__variant__click", function() { var e, t, i, r, o, s; return s = n(this), o = s.data("index"), e = s.closest(".products__item"), i = s.closest(".products__item__variants"), t = e.find(".products__item__link"), r = i.find(".products__item__variant"), t.removeClass("is-active"), r.removeClass("is-active"), e.find(".products__item__link[data-index=" + o + "]").addClass("is-active"), i.find("[data-index=" + o + "]").addClass("is-active") }) }, i.prototype.start = function() { return this.slider() }, i
                }(e)
            })
        }.call(this),
        function(e) {
            define("bootstrap.modal", ["jquery"], function() {
                return function() {
                    return + function(e) {
                        "use strict";

                        function t(t, i) {
                            return this.each(function() {
                                var r = e(this),
                                    o = r.data("bs.modal"),
                                    s = e.extend({}, n.DEFAULTS, r.data(), "object" == typeof t && t);
                                o || r.data("bs.modal", o = new n(this, s)), "string" == typeof t ? o[t](i) : s.show && o.show(i)
                            })
                        }
                        var n = function(t, n) { this.options = n, this.$body = e(document.body), this.$element = e(t), this.$backdrop = this.isShown = null, this.scrollbarWidth = 0, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, e.proxy(function() { this.$element.trigger("loaded.bs.modal") }, this)) };
                        n.VERSION = "3.2.0", n.DEFAULTS = {
                            backdrop: !0,
                            keyboard: !0,
                            show: !0
                        }, n.prototype.toggle = function(e) { return this.isShown ? this.hide() : this.show(e) }, n.prototype.show = function(t) {
                            var n = this,
                                i = e.Event("show.bs.modal", { relatedTarget: t });
                            this.$element.trigger(i), this.isShown || i.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.$body.addClass("modal-open"), this.setScrollbar(), this.escape(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', e.proxy(this.hide, this)), this.backdrop(function() {
                                var i = e.support.transition && n.$element.hasClass("fade");
                                n.$element.parent().length || n.$element.appendTo(n.$body), n.$element.show().scrollTop(0), i && n.$element[0].offsetWidth, n.$element.addClass("in").attr("aria-hidden", !1), n.enforceFocus();
                                var r = e.Event("shown.bs.modal", { relatedTarget: t });
                                i ? n.$element.find(".modal-dialog").one("bsTransitionEnd", function() { n.$element.trigger("focus").trigger(r) }).emulateTransitionEnd(300) : n.$element.trigger("focus").trigger(r)
                            }))
                        }, n.prototype.hide = function(t) { t && t.preventDefault(), t = e.Event("hide.bs.modal"), this.$element.trigger(t), this.isShown && !t.isDefaultPrevented() && (this.isShown = !1, this.$body.removeClass("modal-open"), this.resetScrollbar(), this.escape(), e(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), e.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", e.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal()) }, n.prototype.enforceFocus = function() { e(document).off("focusin.bs.modal").on("focusin.bs.modal", e.proxy(function(e) { this.$element[0] === e.target || this.$element.has(e.target).length || this.$element.trigger("focus") }, this)) }, n.prototype.escape = function() { this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", e.proxy(function(e) { 27 == e.which && this.hide() }, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal") }, n.prototype.hideModal = function() {
                            var e = this;
                            this.$element.hide(), this.backdrop(function() { e.$element.trigger("hidden.bs.modal") })
                        }, n.prototype.removeBackdrop = function() { this.$backdrop && this.$backdrop.remove(), this.$backdrop = null }, n.prototype.backdrop = function(t) {
                            var n = this,
                                i = this.$element.hasClass("fade") ? "fade" : "";
                            if (this.isShown && this.options.backdrop) {
                                var r = e.support.transition && i;
                                if (this.$backdrop = e('<div class="modal-backdrop ' + i + '" />').appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", e.proxy(function(e) { e.target === e.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this)) }, this)), r && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !t) return;
                                r ? this.$backdrop.one("bsTransitionEnd", t).emulateTransitionEnd(150) : t()
                            } else if (!this.isShown && this.$backdrop) {
                                this.$backdrop.removeClass("in");
                                var o = function() { n.removeBackdrop(), t && t() };
                                e.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", o).emulateTransitionEnd(150) : o()
                            } else t && t()
                        }, n.prototype.checkScrollbar = function() { document.body.clientWidth >= window.innerWidth || (this.scrollbarWidth = this.scrollbarWidth || this.measureScrollbar()) }, n.prototype.setScrollbar = function() {
                            var e = parseInt(this.$body.css("padding-right") || 0, 10);
                            this.scrollbarWidth && this.$body.css("padding-right", e + this.scrollbarWidth)
                        }, n.prototype.resetScrollbar = function() { this.$body.css("padding-right", "") }, n.prototype.measureScrollbar = function() {
                            var e = document.createElement("div");
                            e.className = "modal-scrollbar-measure", this.$body.append(e);
                            var t = e.offsetWidth - e.clientWidth;
                            return this.$body[0].removeChild(e), t
                        };
                        var i = e.fn.modal;
                        e.fn.modal = t, e.fn.modal.Constructor = n, e.fn.modal.noConflict = function() { return e.fn.modal = i, this }, e(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(n) {
                            var i = e(this),
                                r = i.attr("href"),
                                o = e(i.attr("data-target") || r && r.replace(/.*(?=#[^\s]+$)/, "")),
                                s = o.data("bs.modal") ? "toggle" : e.extend({ remote: !/#/.test(r) && r }, o.data(), i.data());
                            i.is("a") && n.preventDefault(), o.one("show.bs.modal", function(e) { e.isDefaultPrevented() || o.one("hidden.bs.modal", function() { i.is(":visible") && i.trigger("focus") }) }), t.call(o, s, this)
                        })
                    }(jQuery), $.fn.modal
                }.apply(e, arguments)
            })
        }(this),
        function() {
            var e = {}.hasOwnProperty,
                t = function(t, n) {
                    function i() { this.constructor = t }
                    for (var r in n) e.call(n, r) && (t[r] = n[r]);
                    return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
                };
            define("modal", ["base", "platform", "device", "jquery", "bootstrap.modal"], function(e, n, i) {
                var r;
                return r = function(e) {
                    function n() { return n.__super__.constructor.apply(this, arguments) }
                    return t(n, e), n.prototype.setMenuBtnHandlerClick = function() { return this.setMenuActiveClick = !1, this.options.$body.on(this.options.event, this.options.menuBtn, function(e) { return function(t) { return e.setMenuActiveClick ? void 0 : (e.setMenuActiveClick = !0, e.options.$menu.show(), e.options.$menu.hasClass("is-active-menu") ? (e.options.$menu.removeClass("is-active-menu"), setTimeout(function() { return e.options.$menu.hide() }, 300), setTimeout(function() { return e.setMenuActiveClick = !1 }, 400)) : (setTimeout(function() { return e.options.$menu.addClass("is-active-menu") }, 100), setTimeout(function() { return e.setMenuActiveClick = !1 }, 320))) } }(this)) }, n.prototype.setMenuContainerHandlerResize = function() { var e; return e = function(e) { return function() { return e.options.$menu.css("height", e.options.$window.height() + "px") } }(this), e(), i.desktop() && this.options.$window.on("resize", function(t) { return function() { return e() } }(this)), i.mobile() || i.tablet() ? this.options.$window.on("orientationchange", function(t) { return function() { return e() } }(this)) : void 0 }, n.prototype.setLoginBtnHandlerClick = function() { return this.setLognActiveClick = !1, this.options.$body.on(this.options.event, this.options.loginBtn, function(e) { return function(t) { return e.setLognActiveClick ? void 0 : (e.setLognActiveClick = !0, e.options.$login.show(), e.options.$login.hasClass("is-active") ? (e.options.$login.removeClass("is-active"), setTimeout(function() { return e.options.$login.hide() }, 300), setTimeout(function() { return e.setLognActiveClick = !1 }, 400)) : (setTimeout(function() { return e.options.$login.addClass("is-active") }, 100), setTimeout(function() { return e.setLognActiveClick = !1 }, 320))) } }(this)) }, n.prototype.setLoginContainerHandlerResize = function() { var e; return e = function(e) { return function() { return e.options.$login.css("height", e.options.$window.height() + "px") } }(this), e(), i.desktop() && this.options.$window.on("resize", function(t) { return function() { return e() } }(this)), i.mobile() || i.tablet() ? this.options.$window.on("orientationchange", function(t) { return function() { return e() } }(this)) : void 0 }, n.prototype.setResetPasswordBtnHandlerClick = function() { return this.setResetPasswordActiveClick = !1, this.options.$body.on(this.options.event, this.options.resetBtn, function(e) { return function(t) { return e.setResetPasswordActiveClick ? void 0 : (e.setResetPasswordActiveClick = !0, e.options.$reset.show(), e.options.$reset.hasClass("is-active") ? (e.options.$reset.removeClass("is-active"), setTimeout(function() { return e.options.$reset.hide() }, 300), setTimeout(function() { return e.setResetPasswordActiveClick = !1 }, 400)) : (setTimeout(function() { return e.options.$reset.addClass("is-active") }, 100), setTimeout(function() { return e.setResetPasswordActiveClick = !1 }, 320))) } }(this)) }, n.prototype.setResetPasswordContainerHandlerResize = function() { var e; return e = function(e) { return function() { return e.options.$reset.css("height", e.options.$window.height() + "px") } }(this), e(), i.desktop() && this.options.$window.on("resize", function(t) { return function() { return e() } }(this)), i.mobile() || i.tablet() ? this.options.$window.on("orientationchange", function(t) { return function() { return e() } }(this)) : void 0 }, n.prototype.start = function() { return this.setMenuBtnHandlerClick(), this.setMenuContainerHandlerResize(), this.setLoginBtnHandlerClick(), this.setLoginContainerHandlerResize(), this.setResetPasswordBtnHandlerClick(), this.setResetPasswordContainerHandlerResize() }, n
                }(e)
            })
        }.call(this),
        function(e) {
            define("modernizr", [], function() {
                return function() {
                    return window.Modernizr = function(e, t, n) {
                        function i(e) { b.cssText = e }

                        function r(e, t) { return i(C.join(e + ";") + (t || "")) }

                        function o(e, t) { return typeof e === t }

                        function s(e, t) { return !!~("" + e).indexOf(t) }

                        function a(e, t) { for (var i in e) { var r = e[i]; if (!s(r, "-") && b[r] !== n) return "pfx" == t ? r : !0 } return !1 }

                        function l(e, t, i) { for (var r in e) { var s = t[e[r]]; if (s !== n) return i === !1 ? e[r] : o(s, "function") ? s.bind(i || t) : s } return !1 }

                        function u(e, t, n) {
                            var i = e.charAt(0).toUpperCase() + e.slice(1),
                                r = (e + " " + k.join(i + " ") + i).split(" ");
                            return o(t, "string") || o(t, "undefined") ? a(r, t) : (r = (e + " " + E.join(i + " ") + i).split(" "), l(r, t, n))
                        }

                        function c() { f.input = function(n) { for (var i = 0, r = n.length; r > i; i++) A[n[i]] = !!(n[i] in w); return A.list && (A.list = !(!t.createElement("datalist") || !e.HTMLDataListElement)), A }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), f.inputtypes = function(e) { for (var i, r, o, s = 0, a = e.length; a > s; s++) w.setAttribute("type", r = e[s]), i = "text" !== w.type, i && (w.value = _, w.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(r) && w.style.WebkitAppearance !== n ? (g.appendChild(w), o = t.defaultView, i = o.getComputedStyle && "textfield" !== o.getComputedStyle(w, null).WebkitAppearance && 0 !== w.offsetHeight, g.removeChild(w)) : /^(search|tel)$/.test(r) || (i = /^(url|email)$/.test(r) ? w.checkValidity && w.checkValidity() === !1 : w.value != _)), j[e[s]] = !!i; return j }("search tel url email datetime date month week time datetime-local number range color".split(" ")) }
                        var d, h, p = "2.8.3",
                            f = {},
                            m = !0,
                            g = t.documentElement,
                            v = "modernizr",
                            y = t.createElement(v),
                            b = y.style,
                            w = t.createElement("input"),
                            _ = ":)",
                            x = {}.toString,
                            C = " -webkit- -moz- -o- -ms- ".split(" "),
                            T = "Webkit Moz O ms",
                            k = T.split(" "),
                            E = T.toLowerCase().split(" "),
                            S = { svg: "http://www.w3.org/2000/svg" },
                            $ = {},
                            j = {},
                            A = {},
                            M = [],
                            O = M.slice,
                            I = function(e, n, i, r) {
                                var o, s, a, l, u = t.createElement("div"),
                                    c = t.body,
                                    d = c || t.createElement("body");
                                if (parseInt(i, 10))
                                    for (; i--;) a = t.createElement("div"), a.id = r ? r[i] : v + (i + 1), u.appendChild(a);
                                return o = ["&#173;", '<style id="s', v, '">', e, "</style>"].join(""), u.id = v, (c ? u : d).innerHTML += o, d.appendChild(u), c || (d.style.background = "", d.style.overflow = "hidden", l = g.style.overflow, g.style.overflow = "hidden", g.appendChild(d)), s = n(u, e), c ? u.parentNode.removeChild(u) : (d.parentNode.removeChild(d), g.style.overflow = l), !!s
                            },
                            P = function(t) { var n = e.matchMedia || e.msMatchMedia; if (n) return n(t) && n(t).matches || !1; var i; return I("@media " + t + " { #" + v + " { position: absolute; } }", function(t) { i = "absolute" == (e.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle).position }), i },
                            F = function() {
                                function e(e, r) { r = r || t.createElement(i[e] || "div"), e = "on" + e; var s = e in r; return s || (r.setAttribute || (r = t.createElement("div")), r.setAttribute && r.removeAttribute && (r.setAttribute(e, ""), s = o(r[e], "function"), o(r[e], "undefined") || (r[e] = n), r.removeAttribute(e))), r = null, s }
                                var i = { select: "input", change: "input", submit: "form", reset: "form", error: "img", load: "img", abort: "img" };
                                return e
                            }(),
                            N = {}.hasOwnProperty;
                        h = o(N, "undefined") || o(N.call, "undefined") ? function(e, t) { return t in e && o(e.constructor.prototype[t], "undefined") } : function(e, t) { return N.call(e, t) }, Function.prototype.bind || (Function.prototype.bind = function(e) {
                            var t = this;
                            if ("function" != typeof t) throw new TypeError;
                            var n = O.call(arguments, 1),
                                i = function() {
                                    if (this instanceof i) {
                                        var r = function() {};
                                        r.prototype = t.prototype;
                                        var o = new r,
                                            s = t.apply(o, n.concat(O.call(arguments)));
                                        return Object(s) === s ? s : o
                                    }
                                    return t.apply(e, n.concat(O.call(arguments)))
                                };
                            return i
                        }), $.flexbox = function() { return u("flexWrap") }, $.flexboxlegacy = function() { return u("boxDirection") }, $.canvas = function() { var e = t.createElement("canvas"); return !(!e.getContext || !e.getContext("2d")) }, $.canvastext = function() { return !(!f.canvas || !o(t.createElement("canvas").getContext("2d").fillText, "function")) }, $.webgl = function() { return !!e.WebGLRenderingContext }, $.touch = function() { var n; return "ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch ? n = !0 : I(["@media (", C.join("touch-enabled),("), v, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(e) { n = 9 === e.offsetTop }), n }, $.geolocation = function() { return "geolocation" in navigator }, $.postmessage = function() { return !!e.postMessage }, $.websqldatabase = function() { return !!e.openDatabase }, $.indexedDB = function() { return !!u("indexedDB", e) }, $.hashchange = function() { return F("hashchange", e) && (t.documentMode === n || t.documentMode > 7) }, $.history = function() { return !(!e.history || !history.pushState) }, $.draganddrop = function() { var e = t.createElement("div"); return "draggable" in e || "ondragstart" in e && "ondrop" in e }, $.websockets = function() { return "WebSocket" in e || "MozWebSocket" in e }, $.rgba = function() { return i("background-color:rgba(150,255,150,.5)"), s(b.backgroundColor, "rgba") }, $.hsla = function() { return i("background-color:hsla(120,40%,100%,.5)"), s(b.backgroundColor, "rgba") || s(b.backgroundColor, "hsla") }, $.multiplebgs = function() { return i("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(b.background) }, $.backgroundsize = function() { return u("backgroundSize") }, $.borderimage = function() { return u("borderImage") }, $.borderradius = function() { return u("borderRadius") }, $.boxshadow = function() { return u("boxShadow") }, $.textshadow = function() { return "" === t.createElement("div").style.textShadow }, $.opacity = function() { return r("opacity:.55"), /^0.55$/.test(b.opacity) }, $.cssanimations = function() { return u("animationName") }, $.csscolumns = function() { return u("columnCount") }, $.cssgradients = function() {
                            var e = "background-image:",
                                t = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
                                n = "linear-gradient(left top,#9f9, white);";
                            return i((e + "-webkit- ".split(" ").join(t + e) + C.join(n + e)).slice(0, -e.length)), s(b.backgroundImage, "gradient")
                        }, $.cssreflections = function() { return u("boxReflect") }, $.csstransforms = function() { return !!u("transform") }, $.csstransforms3d = function() { var e = !!u("perspective"); return e && "webkitPerspective" in g.style && I("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(t, n) { e = 9 === t.offsetLeft && 3 === t.offsetHeight }), e }, $.csstransitions = function() { return u("transition") }, $.fontface = function() {
                            var e;
                            return I('@font-face {font-family:"font";src:url("https://")}', function(n, i) {
                                var r = t.getElementById("smodernizr"),
                                    o = r.sheet || r.styleSheet,
                                    s = o ? o.cssRules && o.cssRules[0] ? o.cssRules[0].cssText : o.cssText || "" : "";
                                e = /src/i.test(s) && 0 === s.indexOf(i.split(" ")[0])
                            }), e
                        }, $.generatedcontent = function() { var e; return I(["#", v, "{font:0/0 a}#", v, ':after{content:"', _, '";visibility:hidden;font:3px/1 a}'].join(""), function(t) { e = t.offsetHeight >= 3 }), e }, $.video = function() {
                            var e = t.createElement("video"),
                                n = !1;
                            try {
                                (n = !!e.canPlayType) && (n = new Boolean(n), n.ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), n.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), n.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
                            } catch (i) {}
                            return n
                        }, $.audio = function() {
                            var e = t.createElement("audio"),
                                n = !1;
                            try {
                                (n = !!e.canPlayType) && (n = new Boolean(n), n.ogg = e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), n.mp3 = e.canPlayType("audio/mpeg;").replace(/^no$/, ""), n.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), n.m4a = (e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, ""))
                            } catch (i) {}
                            return n
                        }, $.localstorage = function() { try { return localStorage.setItem(v, v), localStorage.removeItem(v), !0 } catch (e) { return !1 } }, $.sessionstorage = function() { try { return sessionStorage.setItem(v, v), sessionStorage.removeItem(v), !0 } catch (e) { return !1 } }, $.webworkers = function() { return !!e.Worker }, $.applicationcache = function() { return !!e.applicationCache }, $.svg = function() { return !!t.createElementNS && !!t.createElementNS(S.svg, "svg").createSVGRect }, $.inlinesvg = function() { var e = t.createElement("div"); return e.innerHTML = "<svg/>", (e.firstChild && e.firstChild.namespaceURI) == S.svg }, $.smil = function() { return !!t.createElementNS && /SVGAnimate/.test(x.call(t.createElementNS(S.svg, "animate"))) }, $.svgclippaths = function() { return !!t.createElementNS && /SVGClipPath/.test(x.call(t.createElementNS(S.svg, "clipPath"))) };
                        for (var L in $) h($, L) && (d = L.toLowerCase(), f[d] = $[L](), M.push((f[d] ? "" : "no-") + d));
                        return f.input || c(), f.addTest = function(e, t) {
                                if ("object" == typeof e)
                                    for (var i in e) h(e, i) && f.addTest(i, e[i]);
                                else {
                                    if (e = e.toLowerCase(), f[e] !== n) return f;
                                    t = "function" == typeof t ? t() : t, "undefined" != typeof m && m && (g.className += " " + (t ? "" : "no-") + e), f[e] = t
                                }
                                return f
                            }, i(""), y = w = null,
                            function(e, t) {
                                function n(e, t) {
                                    var n = e.createElement("p"),
                                        i = e.getElementsByTagName("head")[0] || e.documentElement;
                                    return n.innerHTML = "x<style>" + t + "</style>", i.insertBefore(n.lastChild, i.firstChild)
                                }

                                function i() { var e = y.elements; return "string" == typeof e ? e.split(" ") : e }

                                function r(e) { var t = v[e[m]]; return t || (t = {}, g++, e[m] = g, v[g] = t), t }

                                function o(e, n, i) {
                                    if (n || (n = t), c) return n.createElement(e);
                                    i || (i = r(n));
                                    var o;
                                    return o = i.cache[e] ? i.cache[e].cloneNode() : f.test(e) ? (i.cache[e] = i.createElem(e)).cloneNode() : i.createElem(e), !o.canHaveChildren || p.test(e) || o.tagUrn ? o : i.frag.appendChild(o)
                                }

                                function s(e, n) {
                                    if (e || (e = t), c) return e.createDocumentFragment();
                                    n = n || r(e);
                                    for (var o = n.frag.cloneNode(), s = 0, a = i(), l = a.length; l > s; s++) o.createElement(a[s]);
                                    return o
                                }

                                function a(e, t) { t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function(n) { return y.shivMethods ? o(n, e, t) : t.createElem(n) }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + i().join().replace(/[\w\-]+/g, function(e) { return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")' }) + ");return n}")(y, t.frag) }

                                function l(e) { e || (e = t); var i = r(e); return !y.shivCSS || u || i.hasCSS || (i.hasCSS = !!n(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), c || a(e, i), e }
                                var u, c, d = "3.7.0",
                                    h = e.html5 || {},
                                    p = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                                    f = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                                    m = "_html5shiv",
                                    g = 0,
                                    v = {};
                                ! function() {
                                    try {
                                        var e = t.createElement("a");
                                        e.innerHTML = "<xyz></xyz>", u = "hidden" in e, c = 1 == e.childNodes.length || function() { t.createElement("a"); var e = t.createDocumentFragment(); return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement }()
                                    } catch (n) { u = !0, c = !0 }
                                }();
                                var y = { elements: h.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video", version: d, shivCSS: h.shivCSS !== !1, supportsUnknownElements: c, shivMethods: h.shivMethods !== !1, type: "default", shivDocument: l, createElement: o, createDocumentFragment: s };
                                e.html5 = y, l(t)
                            }(this, t), f._version = p, f._prefixes = C, f._domPrefixes = E, f._cssomPrefixes = k, f.mq = P, f.hasEvent = F, f.testProp = function(e) { return a([e]) }, f.testAllProps = u, f.testStyles = I, f.prefixed = function(e, t, n) { return t ? u(e, t, n) : u(e, "pfx") }, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (m ? " js " + M.join(" ") : ""), f
                    }(this, this.document), e.Modernizr = Modernizr
                }.apply(e, arguments)
            })
        }(this),
        function() {
            var e = {}.hasOwnProperty,
                t = function(t, n) {
                    function i() { this.constructor = t }
                    for (var r in n) e.call(n, r) && (t[r] = n[r]);
                    return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
                };
            define("parallax", ["base", "modernizr"], function(e, n) {
                var i;
                return i = function(e) {
                    function i() { return i.__super__.constructor.apply(this, arguments) }
                    return t(i, e), i.prototype.init = function() { return this.cacheVars(), this.setupListeners() }, i.prototype.setupListeners = function() { return this.$w.on("scroll", this.scrollHandler.bind(this)), this.$w.scroll() }, i.prototype.cacheVars = function() { var e, t; return e = this, t = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", transition: "transitionend" }, this.$w = $(window), this.$b = $(document.body), this.$gallery = $(".js-gallery-parallax"), this.$parallax = $(".js-gallery-item-parallax"), this.$superParallax = $(".js-list-item-parallax"), this.wHeight = this.$w.height(), this.$cover = $(".js-cover-parallax"), this.$cover.length && (this.coverTop = this.$cover.offset().top, this.coverHeight = this.$cover.height()), this.wWidth = this.$w.width(), this.liveVars = { parallaxCoverSpeed: 1, animatedScrollEnabled: !1, scrollDistance: 120, scrollTime: 3, gallerySpeed: 10 }, this.$parallax.each(function(t) { return $(this).closest(e.$gallery).length ? e.liveVars.gallerySpeed = +e.$gallery.data("speed") || 10 : e.liveVars["prlx" + t + "Speed"] = +$(this).data("speed") || 10 }), this.$superParallax.each(function(t) { var n; return n = $(this), e.liveVars["item" + t + "_ZIndex"] = n.css("zIndex") || 1, e.liveVars["item" + t + "_StartX"] = n.position().left / e.wWidth * 100, e.liveVars["item" + t + "_StartY"] = n.position().top / e.wWidth * 100, e.liveVars["item" + t + "_OffsetTop"] = n.offset().top, e.liveVars["item" + t + "_TripX"] = n.data("tripx") || 0, e.liveVars["item" + t + "_TripY"] = n.data("tripy") || 0, e.liveVars["item" + t + "_El"] = this, e.liveVars["item" + t + "_$El"] = n }), this.galleryWalker = 0, this.transEndEventName = t[n.prefixed("transition")], this.currTop = this.$w.scrollTop(), this.currMouseTop = this.$w.scrollTop(), this.bodyHeight = this.$b.outerHeight(!0), setTimeout(function() { return e.bodyHeight = e.$b.outerHeight(!0) }, 500), setTimeout(function() { return e.bodyHeight = e.$b.outerHeight(!0) }, 1500) }, i.prototype.scrollHandler = function(e) { var t; return t = this, this.currTop = this.$w.scrollTop(), t.elVisible(this.coverTop, this.coverHeight) && this.$cover.css(n.prefixed("transform"), "translateY(" + this.currTop / (this.coverHeight + this.wHeight) * (this.wHeight * this.liveVars.parallaxCoverSpeed) + "px)"), this.$parallax.length && this.$parallax.each(function(e) { var n, i, r, o; return n = $(this), o = n.offset().top, r = n.outerHeight(!0), i = n.closest(t.$gallery).length ? t.liveVars.gallerySpeed : t.liveVars["prlx" + e + "Speed"], t.elVisible(o, r) ? n.addClass("parallax").css("backgroundPosition", "50% " + (t.currTop - o) / -(1 + i) + "px") : n.hasClass("parallax") ? n.removeClass("parallax") : void 0 }), this.$superParallax.length ? this.$superParallax.each(function(e) { var i, r, o, s, a, l; return i = t.liveVars["item" + e + "_$El"], o = t.liveVars["item" + e + "_OffsetTop"], r = i.outerHeight(!0), l = t.liveVars["item" + e + "_TripY"], a = t.liveVars["item" + e + "_TripX"], t.elVisible(o, r) ? (s = (t.currTop + t.wHeight - o) / (t.wHeight + r), i.css(n.prefixed("transform"), "translate3d(" + a * s + "vw," + l * s + "vw, 0)")) : void 0 }) : void 0 }, i.prototype.elVisible = function(e, t) { var n, i; return n = this.currTop + this.wHeight >= e, i = this.currTop < t + e, n && i }, i.prototype.start = function() { return this.options.$html.hasClass("ie7") || this.options.$html.hasClass("ie8") || device.mobile() || device.tablet() ? void 0 : this.init() }, i
                }(e)
            })
        }.call(this),
        function() {
            var e = {}.hasOwnProperty,
                t = function(t, n) {
                    function i() { this.constructor = t }
                    for (var r in n) e.call(n, r) && (t[r] = n[r]);
                    return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
                };
            define("slider", ["base", "jquery", "jquery.owl.carousel", "imagesloaded"], function(e, n) {
                var i;
                return i = function(e) {
                    function i() { return i.__super__.constructor.apply(this, arguments) }
                    return t(i, e), i.prototype._slider = function() { return this.options.slider }, i.prototype._$slider = function() { return n(this._slider()) }, i.prototype._wrapper = function() { return this.options.wrapper }, i.prototype._$wrapper = function() { return n(this._wrapper()) }, i.prototype._overlay = function() { return this.options.overlay }, i.prototype._$overlay = function() { return n(this._overlay()) }, i.prototype._container = function() { return this.options.container }, i.prototype._$container = function() { return n(this._container()) }, i.prototype._setFirstSlide = function(e) { return e.$slider.trigger("to.owl.carousel", [e.firstSlide, 0, !0]) }, i.prototype._loader = function(e) { return e.$slider.imagesLoaded().done(function(t) { return function() { return setTimeout(function() { return e.$wrapper.removeClass("is-loading"), setTimeout(function() { return e.$wrapper.find(t.options.slidersOverlays).remove() }, 200) }, 200) } }(this)) }, i.prototype._arrows = function(e) { var t, i, r, o; return r = e.$wrapper.find("[" + this.options.slidersBtns + "='prev']"), i = e.$wrapper.find("[" + this.options.slidersBtns + "='next']"), t = e.$wrapper.find(this.options.slidersItems), o = t.length, o ? 1 === o ? (r.fadeOut(0), i.fadeOut(0)) : t.each(function(e, t) { var s, a; return a = n(t), s = a.parent(), s.hasClass("active") ? 0 === e ? (i.fadeIn(100), r.fadeOut(100)) : o === e + 1 ? (r.fadeIn(100), i.fadeOut(100)) : (r.fadeIn(150), i.fadeIn(150)) : void 0 }) : void 0 }, i.prototype._initEvents = function(e) { return e.$wrapper.find("[" + this.options.slidersBtns + "]").click(function(t) { return function(i) { var r, o; return r = n(i.currentTarget), o = r.attr("" + t.options.slidersBtns), "next" === o ? e.slider.trigger("next.owl.carousel") : "prev" === o && e.slider.trigger("prev.owl.carousel"), t._arrows({ $slider: e.$slider, $wrapper: e.$wrapper }) } }(this)) }, i.prototype.destroy = function() { return this.slider.trigger("destroy.owl.carousel") }, i.prototype.start = function() { return this._$slider().each(function(e) { return function(t, i) { var r, o, s, a; return r = n(i), o = r.closest(e.options.slidersWrappers), s = { loop: !1, margin: 0, nav: !1, items: 1, dots: !1, mouseDrag: !1, touchDrag: !1, smartSpeed: 620, pullDrag: !1, freeDrag: !1, responsiveRefreshRate: 50, margin: 0, padding: 0, onInitialized: function() { return setTimeout(function() { return s = { $slider: r, $wrapper: o, firstSlide: 0 }, e._setFirstSlide(s), e._arrows(s), e._loader(s) }, 100) }, onTranslated: function() { return s = { $slider: r, $wrapper: o, firstSlide: 0 }, e._arrows(s) } }, a = r.owlCarousel(s), e._initEvents({ $wrapper: o, $slider: r, slider: a }) } }(this)) }, i
                }(e)
            })
        }.call(this),
        function() {
            var e = {}.hasOwnProperty,
                t = function(t, n) {
                    function i() { this.constructor = t }
                    for (var r in n) e.call(n, r) && (t[r] = n[r]);
                    return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
                };
            define("slideshow", ["base", "jquery", "jquery.owl.carousel", "imagesloaded"], function(e, n) {
                var i;
                return i = function(e) {
                    function i() { return i.__super__.constructor.apply(this, arguments) }
                    return t(i, e), i.prototype._slider = function() { return this.options.slider }, i.prototype._$slider = function() { return n(this._slider()) }, i.prototype._wrapper = function() { return this.options.wrapper }, i.prototype._$wrapper = function() { return n(this._wrapper()) }, i.prototype._overlay = function() { return this.options.overlay }, i.prototype._$overlay = function() { return n(this._overlay()) }, i.prototype._container = function() { return this.options.container }, i.prototype._$container = function() { return n(this._container()) }, i.prototype._setFirstSlide = function(e) { return e.$slider.trigger("to.owl.carousel", [e.firstSlide, 0, !0]) }, i.prototype._loader = function(e) { return e.$slider.imagesLoaded().done(function(t) { return function() { return t.options.options.resize && (e.$slider.find("img").each(function() { return n(this).parent().css({ width: n(this).width() + "px" }) }), e.self.refresh()), setTimeout(function() { return e.$wrapper.removeClass("is-loading"), setTimeout(function() { return e.$wrapper.find(t.options.slidersOverlays).remove() }, 200) }, 200) } }(this)) }, i.prototype._arrows = function(e) { var t, i, r, o; return r = e.$wrapper.find("[" + this.options.slidersBtns + "='prev']"), i = e.$wrapper.find("[" + this.options.slidersBtns + "='next']"), t = e.$wrapper.find(this.options.slidersItems), o = t.length, o ? 1 === o ? (r.fadeOut(0), i.fadeOut(0)) : t.each(function(e, t) { var s, a; return a = n(t), s = a.parent(), s.hasClass("active") ? 0 === e ? (i.fadeIn(100), r.fadeOut(100)) : o === e + 1 ? (r.fadeIn(100), i.fadeOut(100)) : (r.fadeIn(150), i.fadeIn(150)) : void 0 }) : void 0 }, i.prototype._initEvents = function(e) { return e.$wrapper.find("[" + this.options.slidersBtns + "]").click(function(t) { return function(i) { var r, o; return r = n(i.currentTarget), o = r.attr("" + t.options.slidersBtns), "next" === o ? e.slider.trigger("next.owl.carousel") : "prev" === o && e.slider.trigger("prev.owl.carousel"), t._arrows({ $slider: e.$slider, $wrapper: e.$wrapper }) } }(this)) }, i.prototype.destroy = function() { return this.slider.trigger("destroy.owl.carousel") }, i.prototype.start = function() { return this._$slider().each(function(e) { return function(t, i) { var r, o, s, a, l; return r = n(i), o = r.closest(e.options.slidersWrappers), a = e, s = { onInitialized: function() { return setTimeout(function(e) { return function() { return s = { $slider: r, $wrapper: o, firstSlide: 0, self: e }, a._setFirstSlide(s), a._arrows(s), a._loader(s) } }(this), 100) }, onTranslated: function() { return s = { $slider: r, $wrapper: o, firstSlide: 0 }, e._arrows(s) }, onResized: function() { return a.options.options.resize ? (r.find("img").each(function() { return n(this).parent().css({ width: n(this).width() + "px" }) }), this.refresh()) : void 0 } }, s = n.extend(s, e.options.options), l = r.owlCarousel(s), e._initEvents({ $wrapper: o, $slider: r, slider: l }) } }(this)) }, i
                }(e)
            })
        }.call(this),
        function() {
            var e = function(e, t) { return function() { return e.apply(t, arguments) } },
                t = {}.hasOwnProperty,
                n = function(e, n) {
                    function i() { this.constructor = e }
                    for (var r in n) t.call(n, r) && (e[r] = n[r]);
                    return i.prototype = n.prototype, e.prototype = new i, e.__super__ = n.prototype, e
                };
            define("preview", ["base", "jquery", "jquery.owl.carousel", "imagesloaded"], function(t, i) {
                var r;
                return r = function(t) {
                    function r() { return this._leaveToggle = e(this._leaveToggle, this), this._enterToggle = e(this._enterToggle, this), r.__super__.constructor.apply(this, arguments) }
                    return n(r, t), r.prototype._$body = function() { return this.options.$body }, r.prototype._slider = function() { return this.options.slider }, r.prototype._$slider = function() { return i(this._slider()) }, r.prototype._item = function() { return this.options.item }, r.prototype._wrapper = function() { return this.options.wrapper }, r.prototype._overlay = function() { return this.options.overlay }, r.prototype._container = function() { return this.options.container }, r.prototype._btn = function() { return this.options.btn }, r.prototype._enterToggle = function(e) { var t, n, r; return r = i(e.currentTarget), t = r.data("index"), n = r.closest(this._wrapper()), n.find(this._item()).removeClass("is-active"), n.find(this._item() + ("[data-index=" + t + "]")).addClass("is-active") }, r.prototype._leaveToggle = function(e) { var t, n, r; return r = i(e.currentTarget), t = r.data("index"), n = r.closest(this._wrapper()), n.find(this._item()).removeClass("is-active") }, r.prototype._eventMouseenter = function() { return this._$body().on("mouseenter", this._btn(), this._enterToggle) }, r.prototype._eventLeave = function() { return this._$body().on("mouseleave", this._btn(), this._leaveToggle) }, r.prototype._loader = function(e) { return e.$slider.imagesLoaded().done(function(t) { return function() { return setTimeout(function() { return e.$wrapper.removeClass("is-loading"), setTimeout(function() { return e.$wrapper.find(t._overlay()).remove() }, 200) }, 200) } }(this)) }, r.prototype._initEvens = function() { return this._eventMouseenter(), this._eventLeave() }, r.prototype.destroy = function() { return this._$body().off("mouseenter", this._enterToggle), this._$body().off("mouseleave", this._leaveToggle) }, r.prototype.start = function() { return this._$slider().each(function(e) { return function(t, n) { var r, o; return r = i(n), o = r.closest(e._wrapper()), e._loader({ $slider: r, $wrapper: o }), e._initEvens() } }(this)) }, r
                }(t)
            })
        }.call(this),
        function() {
            var e = function(e, t) { return function() { return e.apply(t, arguments) } },
                t = {}.hasOwnProperty,
                n = function(e, n) {
                    function i() { this.constructor = e }
                    for (var r in n) t.call(n, r) && (e[r] = n[r]);
                    return i.prototype = n.prototype, e.prototype = new i, e.__super__ = n.prototype, e
                };
            define("cart", ["base", "jquery"], function(t, i) {
                var r;
                return r = function(t) {
                    function r() { return this._toggle = e(this._toggle, this), r.__super__.constructor.apply(this, arguments) }
                    return n(r, t), r.prototype._$body = function() { return this.options.$body }, r.prototype._btn = function() { return this.options.btn }, r.prototype._openBtn = function() { return this.options.openBtn }, r.prototype._$openBtn = function() { return i(this._openBtn()) }, r.prototype._closeBtn = function() { return this.options.closeBtn }, r.prototype._$closeBtn = function() { return i(this._closeBtn()) }, r.prototype._cart = function() { return this.options.cart }, r.prototype._$cart = function() { return i(this._cart()) }, r.prototype._cover = function() { return this.options.cover }, r.prototype._$cover = function() { return i(this._cover()) }, r.prototype._overlay = function() { return this.options.overlay }, r.prototype._$overlay = function() { return i(this._overlay()) }, r.prototype._transition = function() { return this.options.transition }, r.prototype._toggle = function() {
                        return this.isActive ? void 0 : (this.isActive = !0, this.isOpen ? (this.hide(), this.isOpen = !1) : (this.show(), this.isOpen = !0), setTimeout(function(e) { return function() { return e.isActive = !1 } }(this), this._transition()))
                    }, r.prototype._getOffset = function() { var e, t, n; return t = this._$cover().attr("style") ? this._$cover().attr("style") : "translateY(0%)", n = /\.*translateY\((.*)%\)/i, e = t.length && null !== n.exec(t) ? parseFloat(n.exec(t)[1]) : 0 }, r.prototype.show = function() { var e, t; return this._$cover().addClass("is-active"), this._$overlay().show(), e = this._getOffset(), setTimeout(function(e) { return function() { return e._$openBtn().hide(), e._$closeBtn().css("display", "block") } }(this), this._transition() / 2), setTimeout(function(e) { return function() { return e._$body().addClass("overflow-hidden") } }(this), this._transition()), t = device.mobile() || device.tablet() ? 50 : this._transition() / 2, setTimeout(function(t) { return function() { var n, i; return i = t.options.$window.width() < 768 ? "-100%" : t.options.$window.width() >= 768 && t.options.$window.width() <= 1024 ? "-82%" : "-80%", n = { "-webkit-transform": "translateX(" + i + ") translateY(" + e + "%)", "-moz-transform": "translateX(" + i + ") translateY(" + e + "%)", "-o-transform": "translateX(" + i + ") translateY(" + e + "%)", transform: "translateX(" + i + ") translateY(" + e + "%)" }, t._$cover().css(n), t._$body().addClass("is-active-cart") } }(this), t) }, r.prototype.hide = function() { var e, t; return this._$body().removeClass("is-active-cart"), e = this._getOffset(), t = { "-webkit-transform": "translateX(0%) translateY(" + e + "%)", "-moz-transform": "translateX(0%) translateY(" + e + "%)", "-o-transform": "translateX(0%) translateY(" + e + "%)", transform: "translateX(0%) translateY(" + e + "%)" }, this._$cover().addClass("is-close").css(t), setTimeout(function(e) { return function() { return e._$openBtn().css("display", "block"), e._$closeBtn().hide() } }(this), this._transition() / 2), setTimeout(function(e) { return function() { return e._$cover().removeClass("is-active"), e._$body().removeClass("overflow-hidden"), e._$overlay().hide(), e._$cover().removeClass("is-active is-close") } }(this), this._transition()) }, r.prototype._eventClick = function() { return this._$body().on(this.options.event, this._btn(), this._toggle) }, r.prototype._initEvents = function() { return this._eventClick() }, r.prototype.destroy = function() { return this._$body().off(this.options.event, this._toggle) }, r.prototype.start = function() { return this._initEvents() }, r
                }(t)
            })
        }.call(this),
        function() {
            var e = function(e, t) { return function() { return e.apply(t, arguments) } },
                t = {}.hasOwnProperty,
                n = function(e, n) {
                    function i() { this.constructor = e }
                    for (var r in n) t.call(n, r) && (e[r] = n[r]);
                    return i.prototype = n.prototype, e.prototype = new i, e.__super__ = n.prototype, e
                };
            define("locator", ["base", "jquery"], function(t, i) {
                var r;
                return r = function(t) {
                    function r() { return this._changeToggle = e(this._changeToggle, this), r.__super__.constructor.apply(this, arguments) }
                    return n(r, t), r.prototype._$window = function() { return this.options.$window }, r.prototype._$body = function() { return this.options.$body }, r.prototype._select = function() { return this.options.select }, r.prototype._item = function() { return this.options.item }, r.prototype._collection = function() { return this.options.collection }, r.prototype._$collection = function() { return i(this._collection()) }, r.prototype._changeToggle = function(e) { var t, n; return n = i(e.currentTarget), t = n.val(), "default" === t ? this._$collection().find(this._item()).removeClass("hidden") : (this._$collection().find(this._item()).addClass("hidden"), this._$collection().find(this._item() + ("[data-tag~=" + t + "]")).removeClass("hidden")) }, r.prototype._changeEvent = function() { return this._$body().on("change", this._select(), this._changeToggle) }, r.prototype._initEvents = function() { return this._changeEvent() }, r.prototype.destroy = function() { return this._$body().off("change", this._changeToggle) }, r.prototype.start = function() { return this._initEvents() }, r
                }(t)
            })
        }.call(this),
        function() { define("app", ["browser", "menu", "product", "modal", "parallax", "slider", "slideshow", "preview", "cart", "locator"], function(e, t, n, i, r, o, s, a, l, u) { var c; return c = {}, c.browser = new e({ lazy: "[data-lazy]", lazyForce: "[data-lazy-force]", cart: ".cart", preventScroll: "[data-prevent-scroll]", $placeholder: $("input, textarea"), scrollToBtn: ".js-btn-scrollto-content", selectizeElement: ".js-selectize", notificationElement: ".js-notification", notificationBtnElement: ".js-notification-btn" }), c.parallax = new r, c.product = new n({ sliders: ".js-product-slider", slidersItems: ".product__slider__item", slidersItemsPhotos: ".product__slider__img", slidersWrappers: ".product__slider", slidersOverlays: ".product__slider__overlay", slidersContainers: ".product__slider__list", slidersBtns: "data-slide-toggle", slidersBtnsColorsSwitchers: "data-product-slider-switcher", slidersSlidersColors: "data-product-slider", $products: $(".products"), $product: $(".product"), $share: "data-share-toggle", rotate360: ".js-360" }), c.slider = new o({ slider: ".js-gallery-slider", slidersItems: ".gallery__slider__item", slidersWrappers: ".gallery__slider", slidersOverlays: ".gallery__slider__overlay", slidersContainers: ".gallery__slider__list", slidersBtns: "data-slide-toggle", $gallery: $(".gallery") }), c.slideshow = new s({ slider: ".js-slideshow-slider", slidersItems: ".slideshow__slider__item", slidersWrappers: ".slideshow__slider", slidersOverlays: ".slideshow__slider__overlay", slidersContainers: ".slideshow__slider__list", slidersBtns: "data-slide-toggle", options: { loop: !0, nav: !0, center: !0, dots: !1, lazyLoad: !0, autoWidth: !0, navText: ["", ""], resize: !0, responsive: { 0: { items: 2, margin: 10 }, 768: { items: 2, margin: 10 }, 1e3: { items: 2, margin: 15 }, 1240: { items: 2, margin: 20 }, 1920: { items: 2, margin: 30 } } } }), c.slideshowArticle = new s({ slider: ".js-slideshow-article-slider", slidersItems: ".slideshow__slider__item", slidersWrappers: ".slideshow__slider", slidersOverlays: ".slideshow__slider__overlay", slidersContainers: ".slideshow__slider__list", slidersBtns: "data-slide-toggle", options: { loop: !0, nav: !0, dots: !0, navText: ["", ""], resize: !1, responsive: { 0: { items: 1, margin: 0, stagePadding: 0, dots: !1 }, 768: { items: 1, margin: 0 }, 1e3: { items: 1, margin: 0 }, 1240: { items: 1, margin: 0 }, 1920: { items: 1, margin: 0 } } } }), c.preview = new a({ slider: ".js-preview-slider", item: ".preview__slider__item", wrapper: ".preview__slider", overlay: ".preview__slider__overlay", container: ".preview__slider__list", btn: ".preview__btn" }), c.cart = new l({ btn: ".js-cart-btn", openBtn: ".js-cart-open-btn", closeBtn: ".js-cart-close-btn", cart: ".cart", cover: ".cover", overlay: ".body__overlay", transition: 600 }), c.modal = new i({ menuBtn: "[data-menu-toggle]", loginBtn: "[data-login-toggle]", resetBtn: "[data-reset-toggle]", $menu: $(".modal-menu"), $login: $(".modal__login"), $reset: $(".modal__reset"), $modals: $(".modal") }), c.locator = new u({ select: ".js-locator-select", item: ".js-locator-item", collection: ".js-locator-collection" }), c.browser.start(), c.parallax.start(), c.product.variants(), c.product.share(), c.product.rotate(), c.slider.start(), c.slideshow.start(), c.slideshowArticle.start(), c.preview.start(), c.cart.start(), c.modal.start(), c.locator.start(), c }) }.call(this),
        function() {
            var e = this,
                t = e._,
                n = {},
                i = Array.prototype,
                r = Object.prototype,
                o = Function.prototype,
                s = i.push,
                a = i.slice,
                l = i.concat,
                u = r.toString,
                c = r.hasOwnProperty,
                d = i.forEach,
                h = i.map,
                p = i.reduce,
                f = i.reduceRight,
                m = i.filter,
                g = i.every,
                v = i.some,
                y = i.indexOf,
                b = i.lastIndexOf,
                w = Array.isArray,
                _ = Object.keys,
                x = o.bind,
                C = function(e) { return e instanceof C ? e : this instanceof C ? void(this._wrapped = e) : new C(e) };
            "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = C), exports._ = C) : e._ = C, C.VERSION = "1.6.0";
            var T = C.each = C.forEach = function(e, t, i) {
                if (null == e) return e;
                if (d && e.forEach === d) e.forEach(t, i);
                else if (e.length === +e.length) {
                    for (var r = 0, o = e.length; o > r; r++)
                        if (t.call(i, e[r], r, e) === n) return
                } else
                    for (var s = C.keys(e), r = 0, o = s.length; o > r; r++)
                        if (t.call(i, e[s[r]], s[r], e) === n) return; return e
            };
            C.map = C.collect = function(e, t, n) { var i = []; return null == e ? i : h && e.map === h ? e.map(t, n) : (T(e, function(e, r, o) { i.push(t.call(n, e, r, o)) }), i) };
            var k = "Reduce of empty array with no initial value";
            C.reduce = C.foldl = C.inject = function(e, t, n, i) { var r = arguments.length > 2; if (null == e && (e = []), p && e.reduce === p) return i && (t = C.bind(t, i)), r ? e.reduce(t, n) : e.reduce(t); if (T(e, function(e, o, s) { r ? n = t.call(i, n, e, o, s) : (n = e, r = !0) }), !r) throw new TypeError(k); return n }, C.reduceRight = C.foldr = function(e, t, n, i) {
                var r = arguments.length > 2;
                if (null == e && (e = []), f && e.reduceRight === f) return i && (t = C.bind(t, i)), r ? e.reduceRight(t, n) : e.reduceRight(t);
                var o = e.length;
                if (o !== +o) {
                    var s = C.keys(e);
                    o = s.length
                }
                if (T(e, function(a, l, u) { l = s ? s[--o] : --o, r ? n = t.call(i, n, e[l], l, u) : (n = e[l], r = !0) }), !r) throw new TypeError(k);
                return n
            }, C.find = C.detect = function(e, t, n) { var i; return E(e, function(e, r, o) { return t.call(n, e, r, o) ? (i = e, !0) : void 0 }), i }, C.filter = C.select = function(e, t, n) { var i = []; return null == e ? i : m && e.filter === m ? e.filter(t, n) : (T(e, function(e, r, o) { t.call(n, e, r, o) && i.push(e) }), i) }, C.reject = function(e, t, n) { return C.filter(e, function(e, i, r) { return !t.call(n, e, i, r) }, n) }, C.every = C.all = function(e, t, i) { t || (t = C.identity); var r = !0; return null == e ? r : g && e.every === g ? e.every(t, i) : (T(e, function(e, o, s) { return (r = r && t.call(i, e, o, s)) ? void 0 : n }), !!r) };
            var E = C.some = C.any = function(e, t, i) { t || (t = C.identity); var r = !1; return null == e ? r : v && e.some === v ? e.some(t, i) : (T(e, function(e, o, s) { return r || (r = t.call(i, e, o, s)) ? n : void 0 }), !!r) };
            C.contains = C.include = function(e, t) { return null == e ? !1 : y && e.indexOf === y ? -1 != e.indexOf(t) : E(e, function(e) { return e === t }) }, C.invoke = function(e, t) {
                var n = a.call(arguments, 2),
                    i = C.isFunction(t);
                return C.map(e, function(e) { return (i ? t : e[t]).apply(e, n) })
            }, C.pluck = function(e, t) { return C.map(e, C.property(t)) }, C.where = function(e, t) { return C.filter(e, C.matches(t)) }, C.findWhere = function(e, t) { return C.find(e, C.matches(t)) }, C.max = function(e, t, n) {
                if (!t && C.isArray(e) && e[0] === +e[0] && e.length < 65535) return Math.max.apply(Math, e);
                var i = -(1 / 0),
                    r = -(1 / 0);
                return T(e, function(e, o, s) {
                    var a = t ? t.call(n, e, o, s) : e;
                    a > r && (i = e, r = a)
                }), i
            }, C.min = function(e, t, n) {
                if (!t && C.isArray(e) && e[0] === +e[0] && e.length < 65535) return Math.min.apply(Math, e);
                var i = 1 / 0,
                    r = 1 / 0;
                return T(e, function(e, o, s) {
                    var a = t ? t.call(n, e, o, s) : e;
                    r > a && (i = e, r = a)
                }), i
            }, C.shuffle = function(e) {
                var t, n = 0,
                    i = [];
                return T(e, function(e) { t = C.random(n++), i[n - 1] = i[t], i[t] = e }), i
            }, C.sample = function(e, t, n) { return null == t || n ? (e.length !== +e.length && (e = C.values(e)), e[C.random(e.length - 1)]) : C.shuffle(e).slice(0, Math.max(0, t)) };
            var S = function(e) { return null == e ? C.identity : C.isFunction(e) ? e : C.property(e) };
            C.sortBy = function(e, t, n) {
                return t = S(t), C.pluck(C.map(e, function(e, i, r) { return { value: e, index: i, criteria: t.call(n, e, i, r) } }).sort(function(e, t) {
                    var n = e.criteria,
                        i = t.criteria;
                    if (n !== i) { if (n > i || void 0 === n) return 1; if (i > n || void 0 === i) return -1 }
                    return e.index - t.index
                }), "value")
            };
            var $ = function(e) {
                return function(t, n, i) {
                    var r = {};
                    return n = S(n), T(t, function(o, s) {
                        var a = n.call(i, o, s, t);
                        e(r, a, o)
                    }), r
                }
            };
            C.groupBy = $(function(e, t, n) { C.has(e, t) ? e[t].push(n) : e[t] = [n] }), C.indexBy = $(function(e, t, n) { e[t] = n }), C.countBy = $(function(e, t) { C.has(e, t) ? e[t]++ : e[t] = 1 }), C.sortedIndex = function(e, t, n, i) {
                n = S(n);
                for (var r = n.call(i, t), o = 0, s = e.length; s > o;) {
                    var a = o + s >>> 1;
                    n.call(i, e[a]) < r ? o = a + 1 : s = a
                }
                return o
            }, C.toArray = function(e) { return e ? C.isArray(e) ? a.call(e) : e.length === +e.length ? C.map(e, C.identity) : C.values(e) : [] }, C.size = function(e) { return null == e ? 0 : e.length === +e.length ? e.length : C.keys(e).length }, C.first = C.head = C.take = function(e, t, n) { return null != e ? null == t || n ? e[0] : 0 > t ? [] : a.call(e, 0, t) : void 0 }, C.initial = function(e, t, n) { return a.call(e, 0, e.length - (null == t || n ? 1 : t)) }, C.last = function(e, t, n) { return null != e ? null == t || n ? e[e.length - 1] : a.call(e, Math.max(e.length - t, 0)) : void 0 }, C.rest = C.tail = C.drop = function(e, t, n) { return a.call(e, null == t || n ? 1 : t) }, C.compact = function(e) { return C.filter(e, C.identity) };
            var j = function(e, t, n) { return t && C.every(e, C.isArray) ? l.apply(n, e) : (T(e, function(e) { C.isArray(e) || C.isArguments(e) ? t ? s.apply(n, e) : j(e, t, n) : n.push(e) }), n) };
            C.flatten = function(e, t) { return j(e, t, []) }, C.without = function(e) { return C.difference(e, a.call(arguments, 1)) }, C.partition = function(e, t) {
                var n = [],
                    i = [];
                return T(e, function(e) {
                    (t(e) ? n : i).push(e)
                }), [n, i]
            }, C.uniq = C.unique = function(e, t, n, i) {
                C.isFunction(t) && (i = n, n = t, t = !1);
                var r = n ? C.map(e, n, i) : e,
                    o = [],
                    s = [];
                return T(r, function(n, i) {
                    (t ? i && s[s.length - 1] === n : C.contains(s, n)) || (s.push(n), o.push(e[i]))
                }), o
            }, C.union = function() { return C.uniq(C.flatten(arguments, !0)) }, C.intersection = function(e) { var t = a.call(arguments, 1); return C.filter(C.uniq(e), function(e) { return C.every(t, function(t) { return C.contains(t, e) }) }) }, C.difference = function(e) { var t = l.apply(i, a.call(arguments, 1)); return C.filter(e, function(e) { return !C.contains(t, e) }) }, C.zip = function() { for (var e = C.max(C.pluck(arguments, "length").concat(0)), t = new Array(e), n = 0; e > n; n++) t[n] = C.pluck(arguments, "" + n); return t }, C.object = function(e, t) { if (null == e) return {}; for (var n = {}, i = 0, r = e.length; r > i; i++) t ? n[e[i]] = t[i] : n[e[i][0]] = e[i][1]; return n }, C.indexOf = function(e, t, n) {
                if (null == e) return -1;
                var i = 0,
                    r = e.length;
                if (n) {
                    if ("number" != typeof n) return i = C.sortedIndex(e, t), e[i] === t ? i : -1;
                    i = 0 > n ? Math.max(0, r + n) : n
                }
                if (y && e.indexOf === y) return e.indexOf(t, n);
                for (; r > i; i++)
                    if (e[i] === t) return i;
                return -1
            }, C.lastIndexOf = function(e, t, n) {
                if (null == e) return -1;
                var i = null != n;
                if (b && e.lastIndexOf === b) return i ? e.lastIndexOf(t, n) : e.lastIndexOf(t);
                for (var r = i ? n : e.length; r--;)
                    if (e[r] === t) return r;
                return -1
            }, C.range = function(e, t, n) { arguments.length <= 1 && (t = e || 0, e = 0), n = arguments[2] || 1; for (var i = Math.max(Math.ceil((t - e) / n), 0), r = 0, o = new Array(i); i > r;) o[r++] = e, e += n; return o };
            var A = function() {};
            C.bind = function(e, t) {
                var n, i;
                if (x && e.bind === x) return x.apply(e, a.call(arguments, 1));
                if (!C.isFunction(e)) throw new TypeError;
                return n = a.call(arguments, 2), i = function() {
                    if (!(this instanceof i)) return e.apply(t, n.concat(a.call(arguments)));
                    A.prototype = e.prototype;
                    var r = new A;
                    A.prototype = null;
                    var o = e.apply(r, n.concat(a.call(arguments)));
                    return Object(o) === o ? o : r
                }
            }, C.partial = function(e) { var t = a.call(arguments, 1); return function() { for (var n = 0, i = t.slice(), r = 0, o = i.length; o > r; r++) i[r] === C && (i[r] = arguments[n++]); for (; n < arguments.length;) i.push(arguments[n++]); return e.apply(this, i) } }, C.bindAll = function(e) { var t = a.call(arguments, 1); if (0 === t.length) throw new Error("bindAll must be passed function names"); return T(t, function(t) { e[t] = C.bind(e[t], e) }), e }, C.memoize = function(e, t) {
                var n = {};
                return t || (t = C.identity),
                    function() { var i = t.apply(this, arguments); return C.has(n, i) ? n[i] : n[i] = e.apply(this, arguments) }
            }, C.delay = function(e, t) { var n = a.call(arguments, 2); return setTimeout(function() { return e.apply(null, n) }, t) }, C.defer = function(e) { return C.delay.apply(C, [e, 1].concat(a.call(arguments, 1))) }, C.throttle = function(e, t, n) {
                var i, r, o, s = null,
                    a = 0;
                n || (n = {});
                var l = function() { a = n.leading === !1 ? 0 : C.now(), s = null, o = e.apply(i, r), i = r = null };
                return function() {
                    var u = C.now();
                    a || n.leading !== !1 || (a = u);
                    var c = t - (u - a);
                    return i = this, r = arguments, 0 >= c ? (clearTimeout(s), s = null, a = u, o = e.apply(i, r), i = r = null) : s || n.trailing === !1 || (s = setTimeout(l, c)), o
                }
            }, C.debounce = function(e, t, n) {
                var i, r, o, s, a, l = function() {
                    var u = C.now() - s;
                    t > u ? i = setTimeout(l, t - u) : (i = null, n || (a = e.apply(o, r), o = r = null))
                };
                return function() { o = this, r = arguments, s = C.now(); var u = n && !i; return i || (i = setTimeout(l, t)), u && (a = e.apply(o, r), o = r = null), a }
            }, C.once = function(e) { var t, n = !1; return function() { return n ? t : (n = !0, t = e.apply(this, arguments), e = null, t) } }, C.wrap = function(e, t) { return C.partial(t, e) }, C.compose = function() { var e = arguments; return function() { for (var t = arguments, n = e.length - 1; n >= 0; n--) t = [e[n].apply(this, t)]; return t[0] } }, C.after = function(e, t) { return function() { return --e < 1 ? t.apply(this, arguments) : void 0 } }, C.keys = function(e) { if (!C.isObject(e)) return []; if (_) return _(e); var t = []; for (var n in e) C.has(e, n) && t.push(n); return t }, C.values = function(e) { for (var t = C.keys(e), n = t.length, i = new Array(n), r = 0; n > r; r++) i[r] = e[t[r]]; return i }, C.pairs = function(e) { for (var t = C.keys(e), n = t.length, i = new Array(n), r = 0; n > r; r++) i[r] = [t[r], e[t[r]]]; return i }, C.invert = function(e) { for (var t = {}, n = C.keys(e), i = 0, r = n.length; r > i; i++) t[e[n[i]]] = n[i]; return t }, C.functions = C.methods = function(e) { var t = []; for (var n in e) C.isFunction(e[n]) && t.push(n); return t.sort() }, C.extend = function(e) {
                return T(a.call(arguments, 1), function(t) {
                    if (t)
                        for (var n in t) e[n] = t[n]
                }), e
            }, C.pick = function(e) {
                var t = {},
                    n = l.apply(i, a.call(arguments, 1));
                return T(n, function(n) { n in e && (t[n] = e[n]) }), t
            }, C.omit = function(e) {
                var t = {},
                    n = l.apply(i, a.call(arguments, 1));
                for (var r in e) C.contains(n, r) || (t[r] = e[r]);
                return t
            }, C.defaults = function(e) {
                return T(a.call(arguments, 1), function(t) {
                    if (t)
                        for (var n in t) void 0 === e[n] && (e[n] = t[n])
                }), e
            }, C.clone = function(e) { return C.isObject(e) ? C.isArray(e) ? e.slice() : C.extend({}, e) : e }, C.tap = function(e, t) { return t(e), e };
            var M = function(e, t, n, i) {
                if (e === t) return 0 !== e || 1 / e == 1 / t;
                if (null == e || null == t) return e === t;
                e instanceof C && (e = e._wrapped), t instanceof C && (t = t._wrapped);
                var r = u.call(e);
                if (r != u.call(t)) return !1;
                switch (r) {
                    case "[object String]":
                        return e == String(t);
                    case "[object Number]":
                        return e != +e ? t != +t : 0 == e ? 1 / e == 1 / t : e == +t;
                    case "[object Date]":
                    case "[object Boolean]":
                        return +e == +t;
                    case "[object RegExp]":
                        return e.source == t.source && e.global == t.global && e.multiline == t.multiline && e.ignoreCase == t.ignoreCase
                }
                if ("object" != typeof e || "object" != typeof t) return !1;
                for (var o = n.length; o--;)
                    if (n[o] == e) return i[o] == t;
                var s = e.constructor,
                    a = t.constructor;
                if (s !== a && !(C.isFunction(s) && s instanceof s && C.isFunction(a) && a instanceof a) && "constructor" in e && "constructor" in t) return !1;
                n.push(e), i.push(t);
                var l = 0,
                    c = !0;
                if ("[object Array]" == r) {
                    if (l = e.length, c = l == t.length)
                        for (; l-- && (c = M(e[l], t[l], n, i)););
                } else {
                    for (var d in e)
                        if (C.has(e, d) && (l++, !(c = C.has(t, d) && M(e[d], t[d], n, i)))) break;
                    if (c) {
                        for (d in t)
                            if (C.has(t, d) && !l--) break;
                        c = !l
                    }
                }
                return n.pop(), i.pop(), c
            };
            C.isEqual = function(e, t) { return M(e, t, [], []) }, C.isEmpty = function(e) {
                if (null == e) return !0;
                if (C.isArray(e) || C.isString(e)) return 0 === e.length;
                for (var t in e)
                    if (C.has(e, t)) return !1;
                return !0
            }, C.isElement = function(e) { return !(!e || 1 !== e.nodeType) }, C.isArray = w || function(e) { return "[object Array]" == u.call(e) }, C.isObject = function(e) { return e === Object(e) }, T(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(e) { C["is" + e] = function(t) { return u.call(t) == "[object " + e + "]" } }), C.isArguments(arguments) || (C.isArguments = function(e) { return !(!e || !C.has(e, "callee")) }), "function" != typeof /./ && (C.isFunction = function(e) { return "function" == typeof e }), C.isFinite = function(e) { return isFinite(e) && !isNaN(parseFloat(e)) }, C.isNaN = function(e) { return C.isNumber(e) && e != +e }, C.isBoolean = function(e) { return e === !0 || e === !1 || "[object Boolean]" == u.call(e) }, C.isNull = function(e) { return null === e }, C.isUndefined = function(e) { return void 0 === e }, C.has = function(e, t) { return c.call(e, t) }, C.noConflict = function() { return e._ = t, this }, C.identity = function(e) { return e }, C.constant = function(e) { return function() { return e } }, C.property = function(e) { return function(t) { return t[e] } }, C.matches = function(e) {
                return function(t) {
                    if (t === e) return !0;
                    for (var n in e)
                        if (e[n] !== t[n]) return !1;
                    return !0
                }
            }, C.times = function(e, t, n) { for (var i = Array(Math.max(0, e)), r = 0; e > r; r++) i[r] = t.call(n, r); return i }, C.random = function(e, t) { return null == t && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1)) }, C.now = Date.now || function() { return (new Date).getTime() };
            var O = { escape: { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;" } };
            O.unescape = C.invert(O.escape);
            var I = { escape: new RegExp("[" + C.keys(O.escape).join("") + "]", "g"), unescape: new RegExp("(" + C.keys(O.unescape).join("|") + ")", "g") };
            C.each(["escape", "unescape"], function(e) { C[e] = function(t) { return null == t ? "" : ("" + t).replace(I[e], function(t) { return O[e][t] }) } }), C.result = function(e, t) { if (null != e) { var n = e[t]; return C.isFunction(n) ? n.call(e) : n } }, C.mixin = function(e) {
                T(C.functions(e), function(t) {
                    var n = C[t] = e[t];
                    C.prototype[t] = function() { var e = [this._wrapped]; return s.apply(e, arguments), V.call(this, n.apply(C, e)) }
                })
            };
            var P = 0;
            C.uniqueId = function(e) { var t = ++P + ""; return e ? e + t : t }, C.templateSettings = { evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g };
            var F = /(.)^/,
                N = { "'": "'", "\\": "\\", "\r": "r", "\n": "n", "	": "t", "\u2028": "u2028", "\u2029": "u2029" },
                L = /\\|'|\r|\n|\t|\u2028|\u2029/g;
            C.template = function(e, t, n) {
                var i;
                n = C.defaults({}, n, C.templateSettings);
                var r = new RegExp([(n.escape || F).source, (n.interpolate || F).source, (n.evaluate || F).source].join("|") + "|$", "g"),
                    o = 0,
                    s = "__p+='";
                e.replace(r, function(t, n, i, r, a) { return s += e.slice(o, a).replace(L, function(e) { return "\\" + N[e] }), n && (s += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'"), i && (s += "'+\n((__t=(" + i + "))==null?'':__t)+\n'"), r && (s += "';\n" + r + "\n__p+='"), o = a + t.length, t }), s += "';\n", n.variable || (s = "with(obj||{}){\n" + s + "}\n"), s = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + s + "return __p;\n";
                try { i = new Function(n.variable || "obj", "_", s) } catch (a) { throw a.source = s, a }
                if (t) return i(t, C);
                var l = function(e) { return i.call(this, e, C) };
                return l.source = "function(" + (n.variable || "obj") + "){\n" + s + "}", l
            }, C.chain = function(e) { return C(e).chain() };
            var V = function(e) { return this._chain ? C(e).chain() : e };
            C.mixin(C), T(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(e) {
                var t = i[e];
                C.prototype[e] = function() { var n = this._wrapped; return t.apply(n, arguments), "shift" != e && "splice" != e || 0 !== n.length || delete n[0], V.call(this, n) }
            }), T(["concat", "join", "slice"], function(e) {
                var t = i[e];
                C.prototype[e] = function() { return V.call(this, t.apply(this._wrapped, arguments)) }
            }), C.extend(C.prototype, { chain: function() { return this._chain = !0, this }, value: function() { return this._wrapped } }), "function" == typeof define && define.amd && define("underscore", [], function() { return C })
        }.call(this),
        function(e, t) {
            if ("function" == typeof define && define.amd) define("backbone", ["underscore", "jquery", "exports"], function(n, i, r) { e.Backbone = t(e, r, n, i) });
            else if ("undefined" != typeof exports) {
                var n = require("underscore");
                t(e, exports, n)
            } else e.Backbone = t(e, {}, e._, e.jQuery || e.Zepto || e.ender || e.$)
        }(this, function(e, t, n, i) {
            var r = e.Backbone,
                o = [],
                s = (o.push, o.slice);
            o.splice;
            t.VERSION = "1.1.2", t.$ = i, t.noConflict = function() { return e.Backbone = r, this }, t.emulateHTTP = !1, t.emulateJSON = !1;
            var a = t.Events = {
                    on: function(e, t, n) {
                        if (!u(this, "on", e, [t, n]) || !t) return this;
                        this._events || (this._events = {});
                        var i = this._events[e] || (this._events[e] = []);
                        return i.push({ callback: t, context: n, ctx: n || this }), this
                    },
                    once: function(e, t, i) {
                        if (!u(this, "once", e, [t, i]) || !t) return this;
                        var r = this,
                            o = n.once(function() { r.off(e, o), t.apply(this, arguments) });
                        return o._callback = t, this.on(e, o, i)
                    },
                    off: function(e, t, i) {
                        var r, o, s, a, l, c, d, h;
                        if (!this._events || !u(this, "off", e, [t, i])) return this;
                        if (!e && !t && !i) return this._events = void 0, this;
                        for (a = e ? [e] : n.keys(this._events), l = 0, c = a.length; c > l; l++)
                            if (e = a[l], s = this._events[e]) {
                                if (this._events[e] = r = [], t || i)
                                    for (d = 0, h = s.length; h > d; d++) o = s[d], (t && t !== o.callback && t !== o.callback._callback || i && i !== o.context) && r.push(o);
                                r.length || delete this._events[e]
                            }
                        return this
                    },
                    trigger: function(e) {
                        if (!this._events) return this;
                        var t = s.call(arguments, 1);
                        if (!u(this, "trigger", e, t)) return this;
                        var n = this._events[e],
                            i = this._events.all;
                        return n && c(n, t), i && c(i, arguments), this
                    },
                    stopListening: function(e, t, i) {
                        var r = this._listeningTo;
                        if (!r) return this;
                        var o = !t && !i;
                        i || "object" != typeof t || (i = this), e && ((r = {})[e._listenId] = e);
                        for (var s in r) e = r[s], e.off(t, i, this), (o || n.isEmpty(e._events)) && delete this._listeningTo[s];
                        return this
                    }
                },
                l = /\s+/,
                u = function(e, t, n, i) { if (!n) return !0; if ("object" == typeof n) { for (var r in n) e[t].apply(e, [r, n[r]].concat(i)); return !1 } if (l.test(n)) { for (var o = n.split(l), s = 0, a = o.length; a > s; s++) e[t].apply(e, [o[s]].concat(i)); return !1 } return !0 },
                c = function(e, t) {
                    var n, i = -1,
                        r = e.length,
                        o = t[0],
                        s = t[1],
                        a = t[2];
                    switch (t.length) {
                        case 0:
                            for (; ++i < r;)(n = e[i]).callback.call(n.ctx);
                            return;
                        case 1:
                            for (; ++i < r;)(n = e[i]).callback.call(n.ctx, o);
                            return;
                        case 2:
                            for (; ++i < r;)(n = e[i]).callback.call(n.ctx, o, s);
                            return;
                        case 3:
                            for (; ++i < r;)(n = e[i]).callback.call(n.ctx, o, s, a);
                            return;
                        default:
                            for (; ++i < r;)(n = e[i]).callback.apply(n.ctx, t);
                            return
                    }
                },
                d = { listenTo: "on", listenToOnce: "once" };
            n.each(d, function(e, t) {
                a[t] = function(t, i, r) {
                    var o = this._listeningTo || (this._listeningTo = {}),
                        s = t._listenId || (t._listenId = n.uniqueId("l"));
                    return o[s] = t, r || "object" != typeof i || (r = this), t[e](i, r, this), this
                }
            }), a.bind = a.on, a.unbind = a.off, n.extend(t, a);
            var h = t.Model = function(e, t) {
                var i = e || {};
                t || (t = {}), this.cid = n.uniqueId("c"), this.attributes = {}, t.collection && (this.collection = t.collection), t.parse && (i = this.parse(i, t) || {}), i = n.defaults({}, i, n.result(this, "defaults")), this.set(i, t), this.changed = {}, this.initialize.apply(this, arguments)
            };
            n.extend(h.prototype, a, {
                changed: null,
                validationError: null,
                idAttribute: "id",
                initialize: function() {},
                toJSON: function(e) { return n.clone(this.attributes) },
                sync: function() { return t.sync.apply(this, arguments) },
                get: function(e) { return this.attributes[e] },
                escape: function(e) { return n.escape(this.get(e)) },
                has: function(e) { return null != this.get(e) },
                set: function(e, t, i) {
                    var r, o, s, a, l, u, c, d;
                    if (null == e) return this;
                    if ("object" == typeof e ? (o = e, i = t) : (o = {})[e] = t, i || (i = {}), !this._validate(o, i)) return !1;
                    s = i.unset, l = i.silent, a = [], u = this._changing, this._changing = !0, u || (this._previousAttributes = n.clone(this.attributes), this.changed = {}), d = this.attributes, c = this._previousAttributes, this.idAttribute in o && (this.id = o[this.idAttribute]);
                    for (r in o) t = o[r], n.isEqual(d[r], t) || a.push(r), n.isEqual(c[r], t) ? delete this.changed[r] : this.changed[r] = t, s ? delete d[r] : d[r] = t;
                    if (!l) { a.length && (this._pending = i); for (var h = 0, p = a.length; p > h; h++) this.trigger("change:" + a[h], this, d[a[h]], i) }
                    if (u) return this;
                    if (!l)
                        for (; this._pending;) i = this._pending, this._pending = !1, this.trigger("change", this, i);
                    return this._pending = !1, this._changing = !1, this
                },
                unset: function(e, t) { return this.set(e, void 0, n.extend({}, t, { unset: !0 })) },
                clear: function(e) { var t = {}; for (var i in this.attributes) t[i] = void 0; return this.set(t, n.extend({}, e, { unset: !0 })) },
                hasChanged: function(e) { return null == e ? !n.isEmpty(this.changed) : n.has(this.changed, e) },
                changedAttributes: function(e) {
                    if (!e) return this.hasChanged() ? n.clone(this.changed) : !1;
                    var t, i = !1,
                        r = this._changing ? this._previousAttributes : this.attributes;
                    for (var o in e) n.isEqual(r[o], t = e[o]) || ((i || (i = {}))[o] = t);
                    return i
                },
                previous: function(e) { return null != e && this._previousAttributes ? this._previousAttributes[e] : null },
                previousAttributes: function() { return n.clone(this._previousAttributes) },
                fetch: function(e) {
                    e = e ? n.clone(e) : {}, void 0 === e.parse && (e.parse = !0);
                    var t = this,
                        i = e.success;
                    return e.success = function(n) { return t.set(t.parse(n, e), e) ? (i && i(t, n, e), void t.trigger("sync", t, n, e)) : !1 }, L(this, e), this.sync("read", this, e)
                },
                save: function(e, t, i) {
                    var r, o, s, a = this.attributes;
                    if (null == e || "object" == typeof e ? (r = e, i = t) : (r = {})[e] = t, i = n.extend({ validate: !0 }, i), r && !i.wait) { if (!this.set(r, i)) return !1 } else if (!this._validate(r, i)) return !1;
                    r && i.wait && (this.attributes = n.extend({}, a, r)), void 0 === i.parse && (i.parse = !0);
                    var l = this,
                        u = i.success;
                    return i.success = function(e) { l.attributes = a; var t = l.parse(e, i); return i.wait && (t = n.extend(r || {}, t)), n.isObject(t) && !l.set(t, i) ? !1 : (u && u(l, e, i), void l.trigger("sync", l, e, i)) }, L(this, i), o = this.isNew() ? "create" : i.patch ? "patch" : "update", "patch" === o && (i.attrs = r), s = this.sync(o, this, i), r && i.wait && (this.attributes = a), s
                },
                destroy: function(e) {
                    e = e ? n.clone(e) : {};
                    var t = this,
                        i = e.success,
                        r = function() { t.trigger("destroy", t, t.collection, e) };
                    if (e.success = function(n) {
                            (e.wait || t.isNew()) && r(), i && i(t, n, e), t.isNew() || t.trigger("sync", t, n, e)
                        }, this.isNew()) return e.success(), !1;
                    L(this, e);
                    var o = this.sync("delete", this, e);
                    return e.wait || r(), o
                },
                url: function() { var e = n.result(this, "urlRoot") || n.result(this.collection, "url") || N(); return this.isNew() ? e : e.replace(/([^\/])$/, "$1/") + encodeURIComponent(this.id) },
                parse: function(e, t) { return e },
                clone: function() { return new this.constructor(this.attributes) },
                isNew: function() { return !this.has(this.idAttribute) },
                isValid: function(e) { return this._validate({}, n.extend(e || {}, { validate: !0 })) },
                _validate: function(e, t) {
                    if (!t.validate || !this.validate) return !0;
                    e = n.extend({}, this.attributes, e);
                    var i = this.validationError = this.validate(e, t) || null;
                    return i ? (this.trigger("invalid", this, i, n.extend(t, { validationError: i })), !1) : !0
                }
            });
            var p = ["keys", "values", "pairs", "invert", "pick", "omit"];
            n.each(p, function(e) { h.prototype[e] = function() { var t = s.call(arguments); return t.unshift(this.attributes), n[e].apply(n, t) } });
            var f = t.Collection = function(e, t) { t || (t = {}), t.model && (this.model = t.model), void 0 !== t.comparator && (this.comparator = t.comparator), this._reset(), this.initialize.apply(this, arguments), e && this.reset(e, n.extend({ silent: !0 }, t)) },
                m = { add: !0, remove: !0, merge: !0 },
                g = { add: !0, remove: !1 };
            n.extend(f.prototype, a, {
                model: h,
                initialize: function() {},
                toJSON: function(e) { return this.map(function(t) { return t.toJSON(e) }) },
                sync: function() { return t.sync.apply(this, arguments) },
                add: function(e, t) { return this.set(e, n.extend({ merge: !1 }, t, g)) },
                remove: function(e, t) {
                    var i = !n.isArray(e);
                    e = i ? [e] : n.clone(e), t || (t = {});
                    var r, o, s, a;
                    for (r = 0, o = e.length; o > r; r++) a = e[r] = this.get(e[r]), a && (delete this._byId[a.id], delete this._byId[a.cid], s = this.indexOf(a), this.models.splice(s, 1), this.length--, t.silent || (t.index = s, a.trigger("remove", a, this, t)), this._removeReference(a, t));
                    return i ? e[0] : e
                },
                set: function(e, t) {
                    t = n.defaults({}, t, m), t.parse && (e = this.parse(e, t));
                    var i = !n.isArray(e);
                    e = i ? e ? [e] : [] : n.clone(e);
                    var r, o, s, a, l, u, c, d = t.at,
                        p = this.model,
                        f = this.comparator && null == d && t.sort !== !1,
                        g = n.isString(this.comparator) ? this.comparator : null,
                        v = [],
                        y = [],
                        b = {},
                        w = t.add,
                        _ = t.merge,
                        x = t.remove,
                        C = !f && w && x ? [] : !1;
                    for (r = 0, o = e.length; o > r; r++) {
                        if (l = e[r] || {}, s = l instanceof h ? a = l : l[p.prototype.idAttribute || "id"], u = this.get(s)) x && (b[u.cid] = !0), _ && (l = l === a ? a.attributes : l, t.parse && (l = u.parse(l, t)), u.set(l, t), f && !c && u.hasChanged(g) && (c = !0)), e[r] = u;
                        else if (w) {
                            if (a = e[r] = this._prepareModel(l, t), !a) continue;
                            v.push(a), this._addReference(a, t)
                        }
                        a = u || a, !C || !a.isNew() && b[a.id] || C.push(a), b[a.id] = !0
                    }
                    if (x) {
                        for (r = 0, o = this.length; o > r; ++r) b[(a = this.models[r]).cid] || y.push(a);
                        y.length && this.remove(y, t)
                    }
                    if (v.length || C && C.length)
                        if (f && (c = !0), this.length += v.length, null != d)
                            for (r = 0, o = v.length; o > r; r++) this.models.splice(d + r, 0, v[r]);
                        else { C && (this.models.length = 0); var T = C || v; for (r = 0, o = T.length; o > r; r++) this.models.push(T[r]) }
                    if (c && this.sort({ silent: !0 }), !t.silent) {
                        for (r = 0, o = v.length; o > r; r++)(a = v[r]).trigger("add", a, this, t);
                        (c || C && C.length) && this.trigger("sort", this, t)
                    }
                    return i ? e[0] : e
                },
                reset: function(e, t) { t || (t = {}); for (var i = 0, r = this.models.length; r > i; i++) this._removeReference(this.models[i], t); return t.previousModels = this.models, this._reset(), e = this.add(e, n.extend({ silent: !0 }, t)), t.silent || this.trigger("reset", this, t), e },
                push: function(e, t) { return this.add(e, n.extend({ at: this.length }, t)) },
                pop: function(e) { var t = this.at(this.length - 1); return this.remove(t, e), t },
                unshift: function(e, t) { return this.add(e, n.extend({ at: 0 }, t)) },
                shift: function(e) { var t = this.at(0); return this.remove(t, e), t },
                slice: function() { return s.apply(this.models, arguments) },
                get: function(e) { return null != e ? this._byId[e] || this._byId[e.id] || this._byId[e.cid] : void 0 },
                at: function(e) { return this.models[e] },
                where: function(e, t) {
                    return n.isEmpty(e) ? t ? void 0 : [] : this[t ? "find" : "filter"](function(t) {
                        for (var n in e)
                            if (e[n] !== t.get(n)) return !1;
                        return !0
                    })
                },
                findWhere: function(e) { return this.where(e, !0) },
                sort: function(e) { if (!this.comparator) throw new Error("Cannot sort a set without a comparator"); return e || (e = {}), n.isString(this.comparator) || 1 === this.comparator.length ? this.models = this.sortBy(this.comparator, this) : this.models.sort(n.bind(this.comparator, this)), e.silent || this.trigger("sort", this, e), this },
                pluck: function(e) { return n.invoke(this.models, "get", e) },
                fetch: function(e) {
                    e = e ? n.clone(e) : {}, void 0 === e.parse && (e.parse = !0);
                    var t = e.success,
                        i = this;
                    return e.success = function(n) {
                        var r = e.reset ? "reset" : "set";
                        i[r](n, e), t && t(i, n, e), i.trigger("sync", i, n, e)
                    }, L(this, e), this.sync("read", this, e)
                },
                create: function(e, t) {
                    if (t = t ? n.clone(t) : {}, !(e = this._prepareModel(e, t))) return !1;
                    t.wait || this.add(e, t);
                    var i = this,
                        r = t.success;
                    return t.success = function(e, n) { t.wait && i.add(e, t), r && r(e, n, t) }, e.save(null, t), e
                },
                parse: function(e, t) { return e },
                clone: function() { return new this.constructor(this.models) },
                _reset: function() { this.length = 0, this.models = [], this._byId = {} },
                _prepareModel: function(e, t) {
                    if (e instanceof h) return e;
                    t = t ? n.clone(t) : {}, t.collection = this;
                    var i = new this.model(e, t);
                    return i.validationError ? (this.trigger("invalid", this, i.validationError, t), !1) : i
                },
                _addReference: function(e, t) {
                    this._byId[e.cid] = e, null != e.id && (this._byId[e.id] = e), e.collection || (e.collection = this), e.on("all", this._onModelEvent, this)
                },
                _removeReference: function(e, t) { this === e.collection && delete e.collection, e.off("all", this._onModelEvent, this) },
                _onModelEvent: function(e, t, n, i) {
                    ("add" !== e && "remove" !== e || n === this) && ("destroy" === e && this.remove(t, i), t && e === "change:" + t.idAttribute && (delete this._byId[t.previous(t.idAttribute)], null != t.id && (this._byId[t.id] = t)), this.trigger.apply(this, arguments))
                }
            });
            var v = ["forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "drop", "last", "without", "difference", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "chain", "sample"];
            n.each(v, function(e) { f.prototype[e] = function() { var t = s.call(arguments); return t.unshift(this.models), n[e].apply(n, t) } });
            var y = ["groupBy", "countBy", "sortBy", "indexBy"];
            n.each(y, function(e) { f.prototype[e] = function(t, i) { var r = n.isFunction(t) ? t : function(e) { return e.get(t) }; return n[e](this.models, r, i) } });
            var b = t.View = function(e) { this.cid = n.uniqueId("view"), e || (e = {}), n.extend(this, n.pick(e, _)), this._ensureElement(), this.initialize.apply(this, arguments), this.delegateEvents() },
                w = /^(\S+)\s*(.*)$/,
                _ = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
            n.extend(b.prototype, a, {
                tagName: "div",
                $: function(e) { return this.$el.find(e) },
                initialize: function() {},
                render: function() { return this },
                remove: function() { return this.$el.remove(), this.stopListening(), this },
                setElement: function(e, n) { return this.$el && this.undelegateEvents(), this.$el = e instanceof t.$ ? e : t.$(e), this.el = this.$el[0], n !== !1 && this.delegateEvents(), this },
                delegateEvents: function(e) {
                    if (!e && !(e = n.result(this, "events"))) return this;
                    this.undelegateEvents();
                    for (var t in e) {
                        var i = e[t];
                        if (n.isFunction(i) || (i = this[e[t]]), i) {
                            var r = t.match(w),
                                o = r[1],
                                s = r[2];
                            i = n.bind(i, this), o += ".delegateEvents" + this.cid, "" === s ? this.$el.on(o, i) : this.$el.on(o, s, i)
                        }
                    }
                    return this
                },
                undelegateEvents: function() { return this.$el.off(".delegateEvents" + this.cid), this },
                _ensureElement: function() {
                    if (this.el) this.setElement(n.result(this, "el"), !1);
                    else {
                        var e = n.extend({}, n.result(this, "attributes"));
                        this.id && (e.id = n.result(this, "id")), this.className && (e["class"] = n.result(this, "className"));
                        var i = t.$("<" + n.result(this, "tagName") + ">").attr(e);
                        this.setElement(i, !1)
                    }
                }
            }), t.sync = function(e, i, r) {
                var o = C[e];
                n.defaults(r || (r = {}), { emulateHTTP: t.emulateHTTP, emulateJSON: t.emulateJSON });
                var s = { type: o, dataType: "json" };
                if (r.url || (s.url = n.result(i, "url") || N()), null != r.data || !i || "create" !== e && "update" !== e && "patch" !== e || (s.contentType = "application/json", s.data = JSON.stringify(r.attrs || i.toJSON(r))), r.emulateJSON && (s.contentType = "application/x-www-form-urlencoded", s.data = s.data ? { model: s.data } : {}), r.emulateHTTP && ("PUT" === o || "DELETE" === o || "PATCH" === o)) {
                    s.type = "POST", r.emulateJSON && (s.data._method = o);
                    var a = r.beforeSend;
                    r.beforeSend = function(e) { return e.setRequestHeader("X-HTTP-Method-Override", o), a ? a.apply(this, arguments) : void 0 }
                }
                "GET" === s.type || r.emulateJSON || (s.processData = !1), "PATCH" === s.type && x && (s.xhr = function() { return new ActiveXObject("Microsoft.XMLHTTP") });
                var l = r.xhr = t.ajax(n.extend(s, r));
                return i.trigger("request", i, l, r), l
            };
            var x = !("undefined" == typeof window || !window.ActiveXObject || window.XMLHttpRequest && (new XMLHttpRequest).dispatchEvent),
                C = { create: "POST", update: "PUT", patch: "PATCH", "delete": "DELETE", read: "GET" };
            t.ajax = function() { return t.$.ajax.apply(t.$, arguments) };
            var T = t.Router = function(e) { e || (e = {}), e.routes && (this.routes = e.routes), this._bindRoutes(), this.initialize.apply(this, arguments) },
                k = /\((.*?)\)/g,
                E = /(\(\?)?:\w+/g,
                S = /\*\w+/g,
                $ = /[\-{}\[\]+?.,\\\^$|#\s]/g;
            n.extend(T.prototype, a, {
                initialize: function() {},
                route: function(e, i, r) {
                    n.isRegExp(e) || (e = this._routeToRegExp(e)), n.isFunction(i) && (r = i, i = ""), r || (r = this[i]);
                    var o = this;
                    return t.history.route(e, function(n) {
                        var s = o._extractParameters(e, n);
                        o.execute(r, s), o.trigger.apply(o, ["route:" + i].concat(s)), o.trigger("route", i, s), t.history.trigger("route", o, i, s)
                    }), this
                },
                execute: function(e, t) { e && e.apply(this, t) },
                navigate: function(e, n) { return t.history.navigate(e, n), this },
                _bindRoutes: function() { if (this.routes) { this.routes = n.result(this, "routes"); for (var e, t = n.keys(this.routes); null != (e = t.pop());) this.route(e, this.routes[e]) } },
                _routeToRegExp: function(e) { return e = e.replace($, "\\$&").replace(k, "(?:$1)?").replace(E, function(e, t) { return t ? e : "([^/?]+)" }).replace(S, "([^?]*?)"), new RegExp("^" + e + "(?:\\?([\\s\\S]*))?$") },
                _extractParameters: function(e, t) { var i = e.exec(t).slice(1); return n.map(i, function(e, t) { return t === i.length - 1 ? e || null : e ? decodeURIComponent(e) : null }) }
            });
            var j = t.History = function() { this.handlers = [], n.bindAll(this, "checkUrl"), "undefined" != typeof window && (this.location = window.location, this.history = window.history) },
                A = /^[#\/]|\s+$/g,
                M = /^\/+|\/+$/g,
                O = /msie [\w.]+/,
                I = /\/$/,
                P = /#.*$/;
            j.started = !1, n.extend(j.prototype, a, {
                interval: 50,
                atRoot: function() { return this.location.pathname.replace(/[^\/]$/, "$&/") === this.root },
                getHash: function(e) { var t = (e || this).location.href.match(/#(.*)$/); return t ? t[1] : "" },
                getFragment: function(e, t) {
                    if (null == e)
                        if (this._hasPushState || !this._wantsHashChange || t) {
                            e = decodeURI(this.location.pathname + this.location.search);
                            var n = this.root.replace(I, "");
                            e.indexOf(n) || (e = e.slice(n.length))
                        } else e = this.getHash();
                    return e.replace(A, "")
                },
                start: function(e) {
                    if (j.started) throw new Error("Backbone.history has already been started");
                    j.started = !0, this.options = n.extend({ root: "/" }, this.options, e), this.root = this.options.root, this._wantsHashChange = this.options.hashChange !== !1, this._wantsPushState = !!this.options.pushState, this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
                    var i = this.getFragment(),
                        r = document.documentMode,
                        o = O.exec(navigator.userAgent.toLowerCase()) && (!r || 7 >= r);
                    if (this.root = ("/" + this.root + "/").replace(M, "/"), o && this._wantsHashChange) {
                        var s = t.$('<iframe src="javascript:0" tabindex="-1">');
                        this.iframe = s.hide().appendTo("body")[0].contentWindow, this.navigate(i)
                    }
                    this._hasPushState ? t.$(window).on("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange" in window && !o ? t.$(window).on("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), this.fragment = i;
                    var a = this.location;
                    if (this._wantsHashChange && this._wantsPushState) {
                        if (!this._hasPushState && !this.atRoot()) return this.fragment = this.getFragment(null, !0), this.location.replace(this.root + "#" + this.fragment), !0;
                        this._hasPushState && this.atRoot() && a.hash && (this.fragment = this.getHash().replace(A, ""), this.history.replaceState({}, document.title, this.root + this.fragment))
                    }
                    return this.options.silent ? void 0 : this.loadUrl()
                },
                stop: function() { t.$(window).off("popstate", this.checkUrl).off("hashchange", this.checkUrl), this._checkUrlInterval && clearInterval(this._checkUrlInterval), j.started = !1 },
                route: function(e, t) { this.handlers.unshift({ route: e, callback: t }) },
                checkUrl: function(e) { var t = this.getFragment(); return t === this.fragment && this.iframe && (t = this.getFragment(this.getHash(this.iframe))), t === this.fragment ? !1 : (this.iframe && this.navigate(t), void this.loadUrl()) },
                loadUrl: function(e) { return e = this.fragment = this.getFragment(e), n.any(this.handlers, function(t) { return t.route.test(e) ? (t.callback(e), !0) : void 0 }) },
                navigate: function(e, t) {
                    if (!j.started) return !1;
                    t && t !== !0 || (t = { trigger: !!t });
                    var n = this.root + (e = this.getFragment(e || ""));
                    if (e = e.replace(P, ""), this.fragment !== e) {
                        if (this.fragment = e, "" === e && "/" !== n && (n = n.slice(0, -1)), this._hasPushState) this.history[t.replace ? "replaceState" : "pushState"]({}, document.title, n);
                        else {
                            if (!this._wantsHashChange) return this.location.assign(n);
                            this._updateHash(this.location, e, t.replace), this.iframe && e !== this.getFragment(this.getHash(this.iframe)) && (t.replace || this.iframe.document.open().close(), this._updateHash(this.iframe.location, e, t.replace))
                        }
                        return t.trigger ? this.loadUrl(e) : void 0
                    }
                },
                _updateHash: function(e, t, n) {
                    if (n) {
                        var i = e.href.replace(/(javascript:|#).*$/, "");
                        e.replace(i + "#" + t)
                    } else e.hash = "#" + t
                }
            }), t.history = new j;
            var F = function(e, t) {
                var i, r = this;
                i = e && n.has(e, "constructor") ? e.constructor : function() { return r.apply(this, arguments) }, n.extend(i, r, t);
                var o = function() { this.constructor = i };
                return o.prototype = r.prototype, i.prototype = new o, e && n.extend(i.prototype, e), i.__super__ = r.prototype, i
            };
            h.extend = f.extend = T.extend = b.extend = j.extend = F;
            var N = function() { throw new Error('A "url" property or function must be specified') },
                L = function(e, t) {
                    var n = t.error;
                    t.error = function(i) { n && n(e, i, t), e.trigger("error", e, i, t) }
                };
            return t
        }),
        function(e, t) {
            if ("function" == typeof define && define.amd) define("marionette", ["backbone", "underscore"], function(n, i) { return e.Marionette = t(e, n, i) });
            else if ("undefined" != typeof exports) {
                var n = require("backbone"),
                    i = require("underscore");
                module.exports = t(e, n, i)
            } else e.Marionette = t(e, e.Backbone, e._)
        }(this, function(e, t, n) {
            "use strict";
            ! function(e, t) {
                var n = e.ChildViewContainer;
                return e.ChildViewContainer = function(e, t) {
                    var n = function(e) { this._views = {}, this._indexByModel = {}, this._indexByCustom = {}, this._updateLength(), t.each(e, this.add, this) };
                    t.extend(n.prototype, { add: function(e, t) { var n = e.cid; return this._views[n] = e, e.model && (this._indexByModel[e.model.cid] = n), t && (this._indexByCustom[t] = n), this._updateLength(), this }, findByModel: function(e) { return this.findByModelCid(e.cid) }, findByModelCid: function(e) { var t = this._indexByModel[e]; return this.findByCid(t) }, findByCustom: function(e) { var t = this._indexByCustom[e]; return this.findByCid(t) }, findByIndex: function(e) { return t.values(this._views)[e] }, findByCid: function(e) { return this._views[e] }, remove: function(e) { var n = e.cid; return e.model && delete this._indexByModel[e.model.cid], t.any(this._indexByCustom, function(e, t) { return e === n ? (delete this._indexByCustom[t], !0) : void 0 }, this), delete this._views[n], this._updateLength(), this }, call: function(e) { this.apply(e, t.tail(arguments)) }, apply: function(e, n) { t.each(this._views, function(i) { t.isFunction(i[e]) && i[e].apply(i, n || []) }) }, _updateLength: function() { this.length = t.size(this._views) } });
                    var i = ["forEach", "each", "map", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "toArray", "first", "initial", "rest", "last", "without", "isEmpty", "pluck"];
                    return t.each(i, function(e) {
                        n.prototype[e] = function() {
                            var n = t.values(this._views),
                                i = [n].concat(t.toArray(arguments));
                            return t[e].apply(t, i)
                        }
                    }), n
                }(e, t), e.ChildViewContainer.VERSION = "0.1.4", e.ChildViewContainer.noConflict = function() { return e.ChildViewContainer = n, this }, e.ChildViewContainer
            }(t, n),
            function(e, t) {
                var n = e.Wreqr,
                    i = e.Wreqr = {};
                return e.Wreqr.VERSION = "1.3.1", e.Wreqr.noConflict = function() { return e.Wreqr = n, this }, i.Handlers = function(e, t) {
                    var n = function(e) { this.options = e, this._wreqrHandlers = {}, t.isFunction(this.initialize) && this.initialize(e) };
                    return n.extend = e.Model.extend, t.extend(n.prototype, e.Events, {
                        setHandlers: function(e) {
                            t.each(e, function(e, n) {
                                var i = null;
                                t.isObject(e) && !t.isFunction(e) && (i = e.context, e = e.callback), this.setHandler(n, e, i)
                            }, this)
                        },
                        setHandler: function(e, t, n) {
                            var i = { callback: t, context: n };
                            this._wreqrHandlers[e] = i, this.trigger("handler:add", e, t, n)
                        },
                        hasHandler: function(e) { return !!this._wreqrHandlers[e] },
                        getHandler: function(e) { var t = this._wreqrHandlers[e]; if (t) return function() { var e = Array.prototype.slice.apply(arguments); return t.callback.apply(t.context, e) } },
                        removeHandler: function(e) { delete this._wreqrHandlers[e] },
                        removeAllHandlers: function() { this._wreqrHandlers = {} }
                    }), n
                }(e, t), i.CommandStorage = function() {
                    var n = function(e) { this.options = e, this._commands = {}, t.isFunction(this.initialize) && this.initialize(e) };
                    return t.extend(n.prototype, e.Events, {
                        getCommands: function(e) { var t = this._commands[e]; return t || (t = { command: e, instances: [] }, this._commands[e] = t), t },
                        addCommand: function(e, t) {
                            var n = this.getCommands(e);
                            n.instances.push(t)
                        },
                        clearCommands: function(e) {
                            var t = this.getCommands(e);
                            t.instances = []
                        }
                    }), n
                }(), i.Commands = function(e) {
                    return e.Handlers.extend({
                        storageType: e.CommandStorage,
                        constructor: function(t) {
                            this.options = t || {}, this._initializeStorage(this.options), this.on("handler:add", this._executeCommands, this);
                            var n = Array.prototype.slice.call(arguments);
                            e.Handlers.prototype.constructor.apply(this, n)
                        },
                        execute: function(e, t) { e = arguments[0], t = Array.prototype.slice.call(arguments, 1), this.hasHandler(e) ? this.getHandler(e).apply(this, t) : this.storage.addCommand(e, t) },
                        _executeCommands: function(e, n, i) {
                            var r = this.storage.getCommands(e);
                            t.each(r.instances, function(e) { n.apply(i, e) }), this.storage.clearCommands(e)
                        },
                        _initializeStorage: function(e) {
                            var n, i = e.storageType || this.storageType;
                            n = t.isFunction(i) ? new i : i, this.storage = n
                        }
                    })
                }(i), i.RequestResponse = function(e) {
                    return e.Handlers.extend({
                        request: function() {
                            var e = arguments[0],
                                t = Array.prototype.slice.call(arguments, 1);
                            return this.hasHandler(e) ? this.getHandler(e).apply(this, t) : void 0
                        }
                    })
                }(i), i.EventAggregator = function(e, t) { var n = function() {}; return n.extend = e.Model.extend, t.extend(n.prototype, e.Events), n }(e, t), i.Channel = function(n) {
                    var i = function(t) { this.vent = new e.Wreqr.EventAggregator, this.reqres = new e.Wreqr.RequestResponse, this.commands = new e.Wreqr.Commands, this.channelName = t };
                    return t.extend(i.prototype, {
                        reset: function() { return this.vent.off(), this.vent.stopListening(), this.reqres.removeAllHandlers(), this.commands.removeAllHandlers(), this },
                        connectEvents: function(e, t) { return this._connect("vent", e, t), this },
                        connectCommands: function(e, t) { return this._connect("commands", e, t), this },
                        connectRequests: function(e, t) { return this._connect("reqres", e, t), this },
                        _connect: function(e, n, i) {
                            if (n) {
                                i = i || this;
                                var r = "vent" === e ? "on" : "setHandler";
                                t.each(n, function(n, o) { this[e][r](o, t.bind(n, i)) }, this)
                            }
                        }
                    }), i
                }(i), i.radio = function(e) {
                    var n = function() { this._channels = {}, this.vent = {}, this.commands = {}, this.reqres = {}, this._proxyMethods() };
                    t.extend(n.prototype, { channel: function(e) { if (!e) throw new Error("Channel must receive a name"); return this._getChannel(e) }, _getChannel: function(t) { var n = this._channels[t]; return n || (n = new e.Channel(t), this._channels[t] = n), n }, _proxyMethods: function() { t.each(["vent", "commands", "reqres"], function(e) { t.each(i[e], function(t) { this[e][t] = r(this, e, t) }, this) }, this) } });
                    var i = { vent: ["on", "off", "trigger", "once", "stopListening", "listenTo", "listenToOnce"], commands: ["execute", "setHandler", "setHandlers", "removeHandler", "removeAllHandlers"], reqres: ["request", "setHandler", "setHandlers", "removeHandler", "removeAllHandlers"] },
                        r = function(e, t, n) {
                            return function(i) {
                                var r = e._getChannel(i)[t],
                                    o = Array.prototype.slice.call(arguments, 1);
                                return r[n].apply(r, o)
                            }
                        };
                    return new n
                }(i), e.Wreqr
            }(t, n);
            var i = e.Marionette,
                r = t.Marionette = {};
            r.VERSION = "2.2.2", r.noConflict = function() { return e.Marionette = i, this }, t.Marionette = r, r.Deferred = t.$.Deferred;
            var o = Array.prototype.slice;
            r.extend = t.Model.extend, r.getOption = function(e, t) { if (e && t) { var n; return n = e.options && void 0 !== e.options[t] ? e.options[t] : e[t] } }, r.proxyGetOption = function(e) { return r.getOption(this, e) }, r.normalizeMethods = function(e) { var t = {}; return n.each(e, function(e, i) { n.isFunction(e) || (e = this[e]), e && (t[i] = e) }, this), t }, r.normalizeUIString = function(e, t) { return e.replace(/@ui\.[a-zA-Z_$0-9]*/g, function(e) { return t[e.slice(4)] }) }, r.normalizeUIKeys = function(e, t) {
                    return "undefined" != typeof e ? (e = n.clone(e), n.each(n.keys(e), function(n) {
                        var i = r.normalizeUIString(n, t);
                        i !== n && (e[i] = e[n], delete e[n])
                    }), e) : void 0
                }, r.normalizeUIValues = function(e, t) { return "undefined" != typeof e ? (n.each(e, function(i, o) { n.isString(i) && (e[o] = r.normalizeUIString(i, t)) }), e) : void 0 }, r.actAsCollection = function(e, t) {
                    var i = ["forEach", "each", "map", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "toArray", "first", "initial", "rest", "last", "without", "isEmpty", "pluck"];
                    n.each(i, function(i) {
                        e[i] = function() {
                            var e = n.values(n.result(this, t)),
                                r = [e].concat(n.toArray(arguments));
                            return n[i].apply(n, r)
                        }
                    })
                }, r.triggerMethod = function(e) {
                    function t(e, t, n) { return n.toUpperCase() }
                    var i, r = /(^|:)(\w)/gi,
                        o = "on" + e.replace(r, t),
                        s = this[o];
                    return n.isFunction(s) && (i = s.apply(this, n.tail(arguments))), n.isFunction(this.trigger) && this.trigger.apply(this, arguments), i
                }, r.triggerMethodOn = function(e, t) { var i, o = n.tail(arguments, 2); return i = n.isFunction(e.triggerMethod) ? e.triggerMethod : r.triggerMethod, i.apply(e, [t].concat(o)) }, r.MonitorDOMRefresh = function(e) {
                    function i(e) { e._isShown = !0, o(e) }

                    function r(e) { e._isRendered = !0, o(e) }

                    function o(e) { e._isShown && e._isRendered && s(e) && n.isFunction(e.triggerMethod) && e.triggerMethod("dom:refresh") }

                    function s(n) { return t.$.contains(e, n.el) }
                    return function(e) { e.listenTo(e, "show", function() { i(e) }), e.listenTo(e, "render", function() { r(e) }) }
                }(document.documentElement),
                function(e) {
                    function t(t, i, r, o) {
                        var s = o.split(/\s+/);
                        n.each(s, function(n) {
                            var o = t[n];
                            if (!o) throw new e.Error('Method "' + n + '" was configured as an event handler, but does not exist.');
                            t.listenTo(i, r, o)
                        })
                    }

                    function i(e, t, n, i) { e.listenTo(t, n, i) }

                    function r(e, t, i, r) {
                        var o = r.split(/\s+/);
                        n.each(o, function(n) {
                            var r = e[n];
                            e.stopListening(t, i, r)
                        })
                    }

                    function o(e, t, n, i) { e.stopListening(t, n, i) }

                    function s(t, i, r, o, s) {
                        if (i && r) {
                            if (!n.isFunction(r) && !n.isObject(r)) throw new e.Error({ message: "Bindings must be an object or function.", url: "marionette.functions.html#marionettebindentityevents" });
                            n.isFunction(r) && (r = r.call(t)), n.each(r, function(e, r) { n.isFunction(e) ? o(t, i, r, e) : s(t, i, r, e) })
                        }
                    }
                    e.bindEntityEvents = function(e, n, r) { s(e, n, r, i, t) }, e.unbindEntityEvents = function(e, t, n) { s(e, t, n, o, r) }, e.proxyBindEntityEvents = function(t, n) { return e.bindEntityEvents(this, t, n) }, e.proxyUnbindEntityEvents = function(t, n) { return e.unbindEntityEvents(this, t, n) }
                }(r);
            var s = ["description", "fileName", "lineNumber", "name", "message", "number"];
            return r.Error = r.extend.call(Error, {
                urlRoot: "http://marionettejs.com/docs/v" + r.VERSION + "/",
                constructor: function(e, t) {
                    n.isObject(e) ? (t = e, e = t.message) : t || (t = {});
                    var i = Error.call(this, e);
                    n.extend(this, n.pick(i, s), n.pick(t, s)), this.captureStackTrace(), t.url && (this.url = this.urlRoot + t.url)
                },
                captureStackTrace: function() { Error.captureStackTrace && Error.captureStackTrace(this, r.Error) },
                toString: function() { return this.name + ": " + this.message + (this.url ? " See: " + this.url : "") }
            }), r.Error.extend = r.extend, r.Callbacks = function() { this._deferred = r.Deferred(), this._callbacks = [] }, n.extend(r.Callbacks.prototype, {
                add: function(e, t) {
                    var i = n.result(this._deferred, "promise");
                    this._callbacks.push({ cb: e, ctx: t }), i.then(function(n) { t && (n.context = t), e.call(n.context, n.options) })
                },
                run: function(e, t) { this._deferred.resolve({ options: e, context: t }) },
                reset: function() {
                    var e = this._callbacks;
                    this._deferred = r.Deferred(), this._callbacks = [], n.each(e, function(e) { this.add(e.cb, e.ctx) }, this)
                }
            }), r.Controller = function(e) { this.options = e || {}, n.isFunction(this.initialize) && this.initialize(this.options) }, r.Controller.extend = r.extend, n.extend(r.Controller.prototype, t.Events, { destroy: function() { var e = o.call(arguments); return this.triggerMethod.apply(this, ["before:destroy"].concat(e)), this.triggerMethod.apply(this, ["destroy"].concat(e)), this.stopListening(), this.off(), this }, triggerMethod: r.triggerMethod, getOption: r.proxyGetOption }), r.Object = function(e) { this.options = n.extend({}, n.result(this, "options"), e), this.initialize.apply(this, arguments) }, r.Object.extend = r.extend, n.extend(r.Object.prototype, { initialize: function() {}, destroy: function() { this.triggerMethod("before:destroy"), this.triggerMethod("destroy"), this.stopListening() }, triggerMethod: r.triggerMethod, getOption: r.proxyGetOption, bindEntityEvents: r.proxyBindEntityEvents, unbindEntityEvents: r.proxyUnbindEntityEvents }), n.extend(r.Object.prototype, t.Events), r.Region = function(e) {
                if (this.options = e || {}, this.el = this.getOption("el"), this.el = this.el instanceof t.$ ? this.el[0] : this.el, !this.el) throw new r.Error({ name: "NoElError", message: 'An "el" must be specified for a region.' });
                if (this.$el = this.getEl(this.el), this.initialize) {
                    var n = o.apply(arguments);
                    this.initialize.apply(this, n)
                }
            }, n.extend(r.Region, {
                buildRegion: function(e, t) { if (n.isString(e)) return this._buildRegionFromSelector(e, t); if (e.selector || e.el || e.regionClass) return this._buildRegionFromObject(e, t); if (n.isFunction(e)) return this._buildRegionFromRegionClass(e); throw new r.Error({ message: "Improper region configuration type.", url: "marionette.region.html#region-configuration-types" }) },
                _buildRegionFromSelector: function(e, t) { return new t({ el: e }) },
                _buildRegionFromObject: function(e, i) {
                    var r = e.regionClass || i,
                        o = n.omit(e, "selector", "regionClass");
                    e.selector && !o.el && (o.el = e.selector);
                    var s = new r(o);
                    return e.parentEl && (s.getEl = function(i) { if (n.isObject(i)) return t.$(i); var r = e.parentEl; return n.isFunction(r) && (r = r()), r.find(i) }), s
                },
                _buildRegionFromRegionClass: function(e) { return new e }
            }), n.extend(r.Region.prototype, t.Events, {
                show: function(e, t) {
                    this._ensureElement();
                    var n = t || {},
                        i = e !== this.currentView,
                        o = !!n.preventDestroy,
                        s = !!n.forceShow,
                        a = !!this.currentView,
                        l = i && !o,
                        u = i || s;
                    return a && this.triggerMethod("before:swapOut", this.currentView), l && this.empty(), u ? (e.once("destroy", this.empty, this), e.render(), a && this.triggerMethod("before:swap", e), this.triggerMethod("before:show", e), r.triggerMethodOn(e, "before:show"), this.attachHtml(e), a && this.triggerMethod("swapOut", this.currentView), this.currentView = e, a && this.triggerMethod("swap", e), this.triggerMethod("show", e), r.triggerMethodOn(e, "show"), this) : this
                },
                _ensureElement: function() { if (n.isObject(this.el) || (this.$el = this.getEl(this.el), this.el = this.$el[0]), !this.$el || 0 === this.$el.length) throw new r.Error('An "el" ' + this.$el.selector + " must exist in DOM") },
                getEl: function(e) { return t.$(e) },
                attachHtml: function(e) { this.el.innerHTML = "", this.el.appendChild(e.el) },
                empty: function() { var e = this.currentView; if (e) return e.off("destroy", this.empty, this), this.triggerMethod("before:empty", e), this._destroyView(), this.triggerMethod("empty", e), delete this.currentView, this },
                _destroyView: function() {
                    var e = this.currentView;
                    e.destroy && !e.isDestroyed ? e.destroy() : e.remove && e.remove()
                },
                attachView: function(e) { return this.currentView = e, this },
                hasView: function() { return !!this.currentView },
                reset: function() { return this.empty(), this.$el && (this.el = this.$el.selector), delete this.$el, this },
                getOption: r.proxyGetOption,
                triggerMethod: r.triggerMethod
            }), r.Region.extend = r.extend, r.RegionManager = function(e) {
                var t = e.Controller.extend({
                    constructor: function(t) { this._regions = {}, e.Controller.call(this, t) },
                    addRegions: function(e, t) {
                        n.isFunction(e) && (e = e.apply(this, arguments));
                        var i = {};
                        return n.each(e, function(e, r) {
                            n.isString(e) && (e = { selector: e }), e.selector && (e = n.defaults({}, e, t));
                            var o = this.addRegion(r, e);
                            i[r] = o
                        }, this), i
                    },
                    addRegion: function(t, n) { var i; return i = n instanceof e.Region ? n : e.Region.buildRegion(n, e.Region), this.triggerMethod("before:add:region", t, i), this._store(t, i), this.triggerMethod("add:region", t, i), i },
                    get: function(e) { return this._regions[e] },
                    getRegions: function() { return n.clone(this._regions) },
                    removeRegion: function(e) { var t = this._regions[e]; return this._remove(e, t), t },
                    removeRegions: function() { var e = this.getRegions(); return n.each(this._regions, function(e, t) { this._remove(t, e) }, this), e },
                    emptyRegions: function() { var e = this.getRegions(); return n.each(e, function(e) { e.empty() }, this), e },
                    destroy: function() { return this.removeRegions(), e.Controller.prototype.destroy.apply(this, arguments) },
                    _store: function(e, t) { this._regions[e] = t, this._setLength() },
                    _remove: function(e, t) { this.triggerMethod("before:remove:region", e, t), t.empty(), t.stopListening(), delete this._regions[e], this._setLength(), this.triggerMethod("remove:region", e, t) },
                    _setLength: function() { this.length = n.size(this._regions) }
                });
                return e.actAsCollection(t.prototype, "_regions"), t
            }(r), r.TemplateCache = function(e) { this.templateId = e }, n.extend(r.TemplateCache, {
                templateCaches: {},
                get: function(e) { var t = this.templateCaches[e]; return t || (t = new r.TemplateCache(e), this.templateCaches[e] = t), t.load() },
                clear: function() {
                    var e, t = o.call(arguments),
                        n = t.length;
                    if (n > 0)
                        for (e = 0; n > e; e++) delete this.templateCaches[t[e]];
                    else this.templateCaches = {}
                }
            }), n.extend(r.TemplateCache.prototype, { load: function() { if (this.compiledTemplate) return this.compiledTemplate; var e = this.loadTemplate(this.templateId); return this.compiledTemplate = this.compileTemplate(e), this.compiledTemplate }, loadTemplate: function(e) { var n = t.$(e).html(); if (!n || 0 === n.length) throw new r.Error({ name: "NoTemplateError", message: 'Could not find template: "' + e + '"' }); return n }, compileTemplate: function(e) { return n.template(e) } }), r.Renderer = { render: function(e, t) { if (!e) throw new r.Error({ name: "TemplateNotFoundError", message: "Cannot render the template since its false, null or undefined." }); var n; return (n = "function" == typeof e ? e : r.TemplateCache.get(e))(t) } }, r.View = t.View.extend({
                constructor: function(e) { n.bindAll(this, "render"), this.options = n.extend({}, n.result(this, "options"), n.isFunction(e) ? e.call(this) : e), this._behaviors = r.Behaviors(this), t.View.apply(this, arguments), r.MonitorDOMRefresh(this), this.listenTo(this, "show", this.onShowCalled) },
                getTemplate: function() { return this.getOption("template") },
                serializeModel: function(e) { return e.toJSON.apply(e, o.call(arguments, 1)) },
                mixinTemplateHelpers: function(e) { e = e || {}; var t = this.getOption("templateHelpers"); return n.isFunction(t) && (t = t.call(this)), n.extend(e, t) },
                normalizeUIKeys: function(e) {
                    var t = n.result(this, "ui"),
                        i = n.result(this, "_uiBindings");
                    return r.normalizeUIKeys(e, i || t)
                },
                normalizeUIValues: function(e) {
                    var t = n.result(this, "ui"),
                        i = n.result(this, "_uiBindings");
                    return r.normalizeUIValues(e, i || t)
                },
                configureTriggers: function() {
                    if (this.triggers) {
                        var e = {},
                            t = this.normalizeUIKeys(n.result(this, "triggers"));
                        return n.each(t, function(t, n) { e[n] = this._buildViewTrigger(t) }, this), e
                    }
                },
                delegateEvents: function(e) { return this._delegateDOMEvents(e), this.bindEntityEvents(this.model, this.getOption("modelEvents")), this.bindEntityEvents(this.collection, this.getOption("collectionEvents")), n.each(this._behaviors, function(e) { e.bindEntityEvents(this.model, e.getOption("modelEvents")), e.bindEntityEvents(this.collection, e.getOption("collectionEvents")) }, this), this },
                _delegateDOMEvents: function(e) {
                    var i = e || this.events;
                    n.isFunction(i) && (i = i.call(this)), i = this.normalizeUIKeys(i), n.isUndefined(e) && (this.events = i);
                    var r = {},
                        o = n.result(this, "behaviorEvents") || {},
                        s = this.configureTriggers(),
                        a = n.result(this, "behaviorTriggers") || {};
                    n.extend(r, o, i, s, a), t.View.prototype.delegateEvents.call(this, r)
                },
                undelegateEvents: function() { var e = o.call(arguments); return t.View.prototype.undelegateEvents.apply(this, e), this.unbindEntityEvents(this.model, this.getOption("modelEvents")), this.unbindEntityEvents(this.collection, this.getOption("collectionEvents")), n.each(this._behaviors, function(e) { e.unbindEntityEvents(this.model, e.getOption("modelEvents")), e.unbindEntityEvents(this.collection, e.getOption("collectionEvents")) }, this), this },
                onShowCalled: function() {},
                _ensureViewIsIntact: function() { if (this.isDestroyed) throw new r.Error({ name: "ViewDestroyedError", message: 'View (cid: "' + this.cid + '") has already been destroyed and cannot be used.' }) },
                destroy: function() { if (!this.isDestroyed) { var e = o.call(arguments); return this.triggerMethod.apply(this, ["before:destroy"].concat(e)), this.isDestroyed = !0, this.triggerMethod.apply(this, ["destroy"].concat(e)), this.unbindUIElements(), this.remove(), n.invoke(this._behaviors, "destroy", e), this } },
                bindUIElements: function() { this._bindUIElements(), n.invoke(this._behaviors, this._bindUIElements) },
                _bindUIElements: function() {
                    if (this.ui) {
                        this._uiBindings || (this._uiBindings = this.ui);
                        var e = n.result(this, "_uiBindings");
                        this.ui = {}, n.each(n.keys(e), function(t) {
                            var n = e[t];
                            this.ui[t] = this.$(n)
                        }, this)
                    }
                },
                unbindUIElements: function() { this._unbindUIElements(), n.invoke(this._behaviors, this._unbindUIElements) },
                _unbindUIElements: function() { this.ui && this._uiBindings && (n.each(this.ui, function(e, t) { delete this.ui[t] }, this), this.ui = this._uiBindings, delete this._uiBindings) },
                _buildViewTrigger: function(e) {
                    var t = n.isObject(e),
                        i = n.defaults({}, t ? e : {}, { preventDefault: !0, stopPropagation: !0 }),
                        r = t ? i.event : e;
                    return function(e) {
                        e && (e.preventDefault && i.preventDefault && e.preventDefault(), e.stopPropagation && i.stopPropagation && e.stopPropagation());
                        var t = { view: this, model: this.model, collection: this.collection };
                        this.triggerMethod(r, t)
                    }
                },
                setElement: function() { var e = t.View.prototype.setElement.apply(this, arguments); return n.invoke(this._behaviors, "proxyViewProperties", this), e },
                triggerMethod: function() {
                    var e = arguments,
                        t = r.triggerMethod,
                        i = t.apply(this, e);
                    return n.each(this._behaviors, function(n) { t.apply(n, e) }), i
                },
                normalizeMethods: r.normalizeMethods,
                getOption: r.proxyGetOption,
                bindEntityEvents: r.proxyBindEntityEvents,
                unbindEntityEvents: r.proxyUnbindEntityEvents
            }), r.ItemView = r.View.extend({
                constructor: function() { r.View.apply(this, arguments) },
                serializeData: function() { var e = {}; return this.model ? e = n.partial(this.serializeModel, this.model).apply(this, arguments) : this.collection && (e = { items: n.partial(this.serializeCollection, this.collection).apply(this, arguments) }), e },
                serializeCollection: function(e) { return e.toJSON.apply(e, o.call(arguments, 1)) },
                render: function() { return this._ensureViewIsIntact(), this.triggerMethod("before:render", this), this._renderTemplate(), this.bindUIElements(), this.triggerMethod("render", this), this },
                _renderTemplate: function() {
                    var e = this.getTemplate();
                    if (e !== !1) {
                        if (!e) throw new r.Error({ name: "UndefinedTemplateError", message: "Cannot render the template since it is null or undefined." });
                        var t = this.serializeData();
                        t = this.mixinTemplateHelpers(t);
                        var n = r.Renderer.render(e, t, this);
                        return this.attachElContent(n), this
                    }
                },
                attachElContent: function(e) { return this.$el.html(e), this },
                destroy: function() { return this.isDestroyed ? void 0 : r.View.prototype.destroy.apply(this, arguments) }
            }), r.CollectionView = r.View.extend({
                childViewEventPrefix: "childview",
                constructor: function(e) {
                    var t = e || {};
                    this.sort = n.isUndefined(t.sort) ? !0 : t.sort, this.once("render", this._initialEvents), this._initChildViewStorage(), r.View.apply(this, arguments), this.initRenderBuffer()
                },
                initRenderBuffer: function() { this.elBuffer = document.createDocumentFragment(), this._bufferedChildren = [] },
                startBuffering: function() { this.initRenderBuffer(), this.isBuffering = !0 },
                endBuffering: function() { this.isBuffering = !1, this._triggerBeforeShowBufferedChildren(), this.attachBuffer(this, this.elBuffer), this._triggerShowBufferedChildren(), this.initRenderBuffer() },
                _triggerBeforeShowBufferedChildren: function() { this._isShown && n.each(this._bufferedChildren, n.partial(this._triggerMethodOnChild, "before:show")) },
                _triggerShowBufferedChildren: function() { this._isShown && (n.each(this._bufferedChildren, n.partial(this._triggerMethodOnChild, "show")), this._bufferedChildren = []) },
                _triggerMethodOnChild: function(e, t) { r.triggerMethodOn(t, e) },
                _initialEvents: function() { this.collection && (this.listenTo(this.collection, "add", this._onCollectionAdd), this.listenTo(this.collection, "remove", this._onCollectionRemove), this.listenTo(this.collection, "reset", this.render), this.sort && this.listenTo(this.collection, "sort", this._sortViews)) },
                _onCollectionAdd: function(e) {
                    this.destroyEmptyView();
                    var t = this.getChildView(e),
                        n = this.collection.indexOf(e);
                    this.addChild(e, t, n)
                },
                _onCollectionRemove: function(e) {
                    var t = this.children.findByModel(e);
                    this.removeChildView(t), this.checkEmpty()
                },
                onShowCalled: function() { this.children.each(n.partial(this._triggerMethodOnChild, "show")) },
                render: function() { return this._ensureViewIsIntact(), this.triggerMethod("before:render", this), this._renderChildren(), this.triggerMethod("render", this), this },
                resortView: function() { this.render() },
                _sortViews: function() {
                    var e = this.collection.find(function(e, t) { var n = this.children.findByModel(e); return !n || n._index !== t }, this);
                    e && this.resortView()
                },
                _renderChildren: function() { this.destroyEmptyView(), this.destroyChildren(), this.isEmpty(this.collection) ? this.showEmptyView() : (this.triggerMethod("before:render:collection", this), this.startBuffering(), this.showCollection(), this.endBuffering(), this.triggerMethod("render:collection", this)) },
                showCollection: function() {
                    var e;
                    this.collection.each(function(t, n) { e = this.getChildView(t), this.addChild(t, e, n) }, this)
                },
                showEmptyView: function() {
                    var e = this.getEmptyView();
                    if (e && !this._showingEmptyView) {
                        this.triggerMethod("before:render:empty"), this._showingEmptyView = !0;
                        var n = new t.Model;
                        this.addEmptyView(n, e), this.triggerMethod("render:empty")
                    }
                },
                destroyEmptyView: function() { this._showingEmptyView && (this.triggerMethod("before:remove:empty"), this.destroyChildren(), delete this._showingEmptyView, this.triggerMethod("remove:empty")) },
                getEmptyView: function() { return this.getOption("emptyView") },
                addEmptyView: function(e, t) {
                    var i = this.getOption("emptyViewOptions") || this.getOption("childViewOptions");
                    n.isFunction(i) && (i = i.call(this));
                    var o = this.buildChildView(e, t, i);
                    this.proxyChildEvents(o), this._isShown && r.triggerMethodOn(o, "before:show"), this.children.add(o), this.renderChildView(o, -1), this._isShown && r.triggerMethodOn(o, "show")
                },
                getChildView: function(e) { var t = this.getOption("childView"); if (!t) throw new r.Error({ name: "NoChildViewError", message: 'A "childView" must be specified' }); return t },
                addChild: function(e, t, i) {
                    var r = this.getOption("childViewOptions");
                    n.isFunction(r) && (r = r.call(this, e, i));
                    var o = this.buildChildView(e, t, r);
                    return this._updateIndices(o, !0, i), this._addChildView(o, i), o
                },
                _updateIndices: function(e, t, n) { this.sort && (t ? (e._index = n, this.children.each(function(t) { t._index >= e._index && t._index++ })) : this.children.each(function(t) { t._index >= e._index && t._index-- })) },
                _addChildView: function(e, t) { this.proxyChildEvents(e), this.triggerMethod("before:add:child", e), this.children.add(e), this.renderChildView(e, t), this._isShown && !this.isBuffering && r.triggerMethodOn(e, "show"), this.triggerMethod("add:child", e) },
                renderChildView: function(e, t) { return e.render(), this.attachHtml(this, e, t), e },
                buildChildView: function(e, t, i) { var r = n.extend({ model: e }, i); return new t(r) },
                removeChildView: function(e) { return e && (this.triggerMethod("before:remove:child", e), e.destroy ? e.destroy() : e.remove && e.remove(), this.stopListening(e), this.children.remove(e), this.triggerMethod("remove:child", e), this._updateIndices(e, !1)), e },
                isEmpty: function() { return !this.collection || 0 === this.collection.length },
                checkEmpty: function() { this.isEmpty(this.collection) && this.showEmptyView() },
                attachBuffer: function(e, t) { e.$el.append(t) },
                attachHtml: function(e, t, n) { e.isBuffering ? (e.elBuffer.appendChild(t.el), e._bufferedChildren.push(t)) : e._insertBefore(t, n) || e._insertAfter(t) },
                _insertBefore: function(e, t) { var n, i = this.sort && t < this.children.length - 1; return i && (n = this.children.find(function(e) { return e._index === t + 1 })), n ? (n.$el.before(e.el), !0) : !1 },
                _insertAfter: function(e) { this.$el.append(e.el) },
                _initChildViewStorage: function() { this.children = new t.ChildViewContainer },
                destroy: function() { return this.isDestroyed ? void 0 : (this.triggerMethod("before:destroy:collection"), this.destroyChildren(), this.triggerMethod("destroy:collection"), r.View.prototype.destroy.apply(this, arguments)) },
                destroyChildren: function() { var e = this.children.map(n.identity); return this.children.each(this.removeChildView, this), this.checkEmpty(), e },
                proxyChildEvents: function(e) {
                    var t = this.getOption("childViewEventPrefix");
                    this.listenTo(e, "all", function() {
                        var i = o.call(arguments),
                            r = i[0],
                            s = this.normalizeMethods(n.result(this, "childEvents"));
                        i[0] = t + ":" + r, i.splice(1, 0, e), "undefined" != typeof s && n.isFunction(s[r]) && s[r].apply(this, i.slice(1)), this.triggerMethod.apply(this, i)
                    }, this)
                }
            }), r.CompositeView = r.CollectionView.extend({
                constructor: function() { r.CollectionView.apply(this, arguments) },
                _initialEvents: function() { this.collection && (this.listenTo(this.collection, "add", this._onCollectionAdd), this.listenTo(this.collection, "remove", this._onCollectionRemove), this.listenTo(this.collection, "reset", this._renderChildren), this.sort && this.listenTo(this.collection, "sort", this._sortViews)) },
                getChildView: function(e) { var t = this.getOption("childView") || this.constructor; if (!t) throw new r.Error({ name: "NoChildViewError", message: 'A "childView" must be specified' }); return t },
                serializeData: function() { var e = {}; return this.model && (e = n.partial(this.serializeModel, this.model).apply(this, arguments)), e },
                render: function() { return this._ensureViewIsIntact(), this.isRendered = !0, this.resetChildViewContainer(), this.triggerMethod("before:render", this), this._renderTemplate(), this._renderChildren(), this.triggerMethod("render", this), this },
                _renderChildren: function() { this.isRendered && r.CollectionView.prototype._renderChildren.call(this) },
                _renderTemplate: function() {
                    var e = {};
                    e = this.serializeData(), e = this.mixinTemplateHelpers(e), this.triggerMethod("before:render:template");
                    var t = this.getTemplate(),
                        n = r.Renderer.render(t, e, this);
                    this.attachElContent(n), this.bindUIElements(), this.triggerMethod("render:template")
                },
                attachElContent: function(e) { return this.$el.html(e), this },
                attachBuffer: function(e, t) {
                    var n = this.getChildViewContainer(e);
                    n.append(t)
                },
                _insertAfter: function(e) {
                    var t = this.getChildViewContainer(this);
                    t.append(e.el)
                },
                getChildViewContainer: function(e) { if ("$childViewContainer" in e) return e.$childViewContainer; var t, i = r.getOption(e, "childViewContainer"); if (i) { var o = n.isFunction(i) ? i.call(e) : i; if (t = "@" === o.charAt(0) && e.ui ? e.ui[o.substr(4)] : e.$(o), t.length <= 0) throw new r.Error({ name: "ChildViewContainerMissingError", message: 'The specified "childViewContainer" was not found: ' + e.childViewContainer }) } else t = e.$el; return e.$childViewContainer = t, t },
                resetChildViewContainer: function() { this.$childViewContainer && delete this.$childViewContainer }
            }), r.LayoutView = r.ItemView.extend({
                regionClass: r.Region,
                constructor: function(e) { e = e || {}, this._firstRender = !0, this._initializeRegions(e), r.ItemView.call(this, e) },
                render: function() { return this._ensureViewIsIntact(), this._firstRender ? this._firstRender = !1 : this._reInitializeRegions(), r.ItemView.prototype.render.apply(this, arguments) },
                destroy: function() { return this.isDestroyed ? this : (this.regionManager.destroy(), r.ItemView.prototype.destroy.apply(this, arguments)) },
                addRegion: function(e, t) { var n = {}; return n[e] = t, this._buildRegions(n)[e] },
                addRegions: function(e) { return this.regions = n.extend({}, this.regions, e), this._buildRegions(e) },
                removeRegion: function(e) { return delete this.regions[e], this.regionManager.removeRegion(e) },
                getRegion: function(e) { return this.regionManager.get(e) },
                getRegions: function() { return this.regionManager.getRegions() },
                _buildRegions: function(e) {
                    var t = this,
                        n = { regionClass: this.getOption("regionClass"), parentEl: function() { return t.$el } };
                    return this.regionManager.addRegions(e, n)
                },
                _initializeRegions: function(e) {
                    var t;
                    this._initRegionManager(), t = n.isFunction(this.regions) ? this.regions(e) : this.regions || {};
                    var i = this.getOption.call(e, "regions");
                    n.isFunction(i) && (i = i.call(this, e)), n.extend(t, i), t = this.normalizeUIValues(t), this.addRegions(t)
                },
                _reInitializeRegions: function() { this.regionManager.emptyRegions(), this.regionManager.each(function(e) { e.reset() }) },
                getRegionManager: function() { return new r.RegionManager },
                _initRegionManager: function() { this.regionManager = this.getRegionManager(), this.listenTo(this.regionManager, "before:add:region", function(e) { this.triggerMethod("before:add:region", e) }), this.listenTo(this.regionManager, "add:region", function(e, t) { this[e] = t, this.triggerMethod("add:region", e, t) }), this.listenTo(this.regionManager, "before:remove:region", function(e) { this.triggerMethod("before:remove:region", e) }), this.listenTo(this.regionManager, "remove:region", function(e, t) { delete this[e], this.triggerMethod("remove:region", e, t) }) }
            }), r.Behavior = function(e, t) {
                function n(t, n) { this.view = n, this.defaults = e.result(this, "defaults") || {}, this.options = e.extend({}, this.defaults, t), this.$ = function() { return this.view.$.apply(this.view, arguments) }, this.initialize.apply(this, arguments) }
                return e.extend(n.prototype, t.Events, { initialize: function() {}, destroy: function() { this.stopListening() }, proxyViewProperties: function(e) { this.$el = e.$el, this.el = e.el }, triggerMethod: r.triggerMethod, getOption: r.proxyGetOption, bindEntityEvents: r.proxyBindEntityEvents, unbindEntityEvents: r.proxyUnbindEntityEvents }), n.extend = r.extend, n
            }(n, t), r.Behaviors = function(e, t) {
                function n(e, i) { return t.isObject(e.behaviors) ? (i = n.parseBehaviors(e, i || t.result(e, "behaviors")), n.wrap(e, i, t.keys(r)), i) : {} }

                function i(e, n) { this._view = e, this._viewUI = t.result(e, "ui"), this._behaviors = n, this._triggers = {} }
                var r = {
                    behaviorTriggers: function(e, t) { var n = new i(this, t); return n.buildBehaviorTriggers() },
                    behaviorEvents: function(n, i) {
                        var r = {},
                            o = t.result(this, "ui");
                        return t.each(i, function(n, i) {
                            var s = {},
                                a = t.clone(t.result(n, "events")) || {},
                                l = t.result(n, "ui"),
                                u = t.extend({}, o, l);
                            a = e.normalizeUIKeys(a, u), t.each(t.keys(a), function(e) {
                                var r = new Array(i + 2).join(" "),
                                    o = e + r,
                                    l = t.isFunction(a[e]) ? a[e] : n[a[e]];
                                s[o] = t.bind(l, n)
                            }), r = t.extend(r, s)
                        }), r
                    }
                };
                return t.extend(n, {
                    behaviorsLookup: function() { throw new e.Error({ message: "You must define where your behaviors are stored.", url: "marionette.behaviors.html#behaviorslookup" }) },
                    getBehaviorClass: function(e, i) { return e.behaviorClass ? e.behaviorClass : t.isFunction(n.behaviorsLookup) ? n.behaviorsLookup.apply(this, arguments)[i] : n.behaviorsLookup[i] },
                    parseBehaviors: function(e, i) {
                        return t.chain(i).map(function(i, r) {
                            var o = n.getBehaviorClass(i, r),
                                s = new o(i, e),
                                a = n.parseBehaviors(e, t.result(s, "behaviors"));
                            return [s].concat(a)
                        }).flatten().value()
                    },
                    wrap: function(e, n, i) { t.each(i, function(i) { e[i] = t.partial(r[i], e[i], n) }) }
                }), t.extend(i.prototype, {
                    buildBehaviorTriggers: function() { return t.each(this._behaviors, this._buildTriggerHandlersForBehavior, this), this._triggers },
                    _buildTriggerHandlersForBehavior: function(n, i) {
                        var r = t.extend({}, this._viewUI, t.result(n, "ui")),
                            o = t.clone(t.result(n, "triggers")) || {};
                        o = e.normalizeUIKeys(o, r), t.each(o, t.partial(this._setHandlerForBehavior, n, i), this)
                    },
                    _setHandlerForBehavior: function(e, t, n, i) {
                        var r = i.replace(/^\S+/, function(e) { return e + ".behaviortriggers" + t });
                        this._triggers[r] = this._view._buildViewTrigger(n)
                    }
                }), n
            }(r, n), r.AppRouter = t.Router.extend({
                constructor: function(e) {
                    t.Router.apply(this, arguments), this.options = e || {};
                    var n = this.getOption("appRoutes"),
                        i = this._getController();
                    this.processAppRoutes(i, n), this.on("route", this._processOnRoute, this)
                },
                appRoute: function(e, t) {
                    var n = this._getController();
                    this._addAppRoute(n, e, t)
                },
                _processOnRoute: function(e, t) {
                    var i = n.invert(this.getOption("appRoutes"))[e];
                    n.isFunction(this.onRoute) && this.onRoute(e, i, t)
                },
                processAppRoutes: function(e, t) {
                    if (t) {
                        var i = n.keys(t).reverse();
                        n.each(i, function(n) { this._addAppRoute(e, n, t[n]) }, this)
                    }
                },
                _getController: function() { return this.getOption("controller") },
                _addAppRoute: function(e, t, i) {
                    var o = e[i];
                    if (!o) throw new r.Error('Method "' + i + '" was not found on the controller');
                    this.route(t, i, n.bind(o, e))
                },
                getOption: r.proxyGetOption
            }), r.Application = function(e) { this.options = e, this._initializeRegions(e), this._initCallbacks = new r.Callbacks, this.submodules = {}, n.extend(this, e), this._initChannel(), this.initialize.apply(this, arguments) }, n.extend(r.Application.prototype, t.Events, {
                initialize: function() {},
                execute: function() { this.commands.execute.apply(this.commands, arguments) },
                request: function() { return this.reqres.request.apply(this.reqres, arguments) },
                addInitializer: function(e) { this._initCallbacks.add(e) },
                start: function(e) { this.triggerMethod("before:start", e), this._initCallbacks.run(e, this), this.triggerMethod("start", e) },
                addRegions: function(e) { return this._regionManager.addRegions(e) },
                emptyRegions: function() { return this._regionManager.emptyRegions() },
                removeRegion: function(e) { return this._regionManager.removeRegion(e) },
                getRegion: function(e) { return this._regionManager.get(e) },
                getRegions: function() { return this._regionManager.getRegions() },
                module: function(e, t) {
                    var n = r.Module.getClass(t),
                        i = o.call(arguments);
                    return i.unshift(this), n.create.apply(n, i)
                },
                getRegionManager: function() { return new r.RegionManager },
                _initializeRegions: function(e) {
                    var t = n.isFunction(this.regions) ? this.regions(e) : this.regions || {};
                    this._initRegionManager();
                    var i = r.getOption(e, "regions");
                    return n.isFunction(i) && (i = i.call(this, e)), n.extend(t, i), this.addRegions(t), this
                },
                _initRegionManager: function() { this._regionManager = this.getRegionManager(), this.listenTo(this._regionManager, "before:add:region", function(e) { this.triggerMethod("before:add:region", e) }), this.listenTo(this._regionManager, "add:region", function(e, t) { this[e] = t, this.triggerMethod("add:region", e, t) }), this.listenTo(this._regionManager, "before:remove:region", function(e) { this.triggerMethod("before:remove:region", e) }), this.listenTo(this._regionManager, "remove:region", function(e, t) { delete this[e], this.triggerMethod("remove:region", e, t) }) },
                _initChannel: function() { this.channelName = n.result(this, "channelName") || "global", this.channel = n.result(this, "channel") || t.Wreqr.radio.channel(this.channelName), this.vent = n.result(this, "vent") || this.channel.vent, this.commands = n.result(this, "commands") || this.channel.commands, this.reqres = n.result(this, "reqres") || this.channel.reqres },
                triggerMethod: r.triggerMethod,
                getOption: r.proxyGetOption
            }), r.Application.extend = r.extend, r.Module = function(e, t, i) { this.moduleName = e, this.options = n.extend({}, this.options, i), this.initialize = i.initialize || this.initialize, this.submodules = {}, this._setupInitializersAndFinalizers(), this.app = t, n.isFunction(this.initialize) && this.initialize(e, t, this.options) }, r.Module.extend = r.extend, n.extend(r.Module.prototype, t.Events, {
                startWithParent: !0,
                initialize: function() {},
                addInitializer: function(e) { this._initializerCallbacks.add(e) },
                addFinalizer: function(e) { this._finalizerCallbacks.add(e) },
                start: function(e) { this._isInitialized || (n.each(this.submodules, function(t) { t.startWithParent && t.start(e) }), this.triggerMethod("before:start", e), this._initializerCallbacks.run(e, this), this._isInitialized = !0, this.triggerMethod("start", e)) },
                stop: function() { this._isInitialized && (this._isInitialized = !1, this.triggerMethod("before:stop"), n.each(this.submodules, function(e) { e.stop() }), this._finalizerCallbacks.run(void 0, this), this._initializerCallbacks.reset(), this._finalizerCallbacks.reset(), this.triggerMethod("stop")) },
                addDefinition: function(e, t) { this._runModuleDefinition(e, t) },
                _runModuleDefinition: function(e, i) {
                    if (e) {
                        var o = n.flatten([this, this.app, t, r, t.$, n, i]);
                        e.apply(this, o)
                    }
                },
                _setupInitializersAndFinalizers: function() { this._initializerCallbacks = new r.Callbacks, this._finalizerCallbacks = new r.Callbacks },
                triggerMethod: r.triggerMethod
            }), n.extend(r.Module, {
                create: function(e, t, i) {
                    var r = e,
                        s = o.call(arguments);
                    s.splice(0, 3), t = t.split(".");
                    var a = t.length,
                        l = [];
                    return l[a - 1] = i, n.each(t, function(t, n) {
                        var o = r;
                        r = this._getModule(o, t, e, i), this._addModuleDefinition(o, r, l[n], s)
                    }, this), r
                },
                _getModule: function(e, t, i, r, o) {
                    var s = n.extend({}, r),
                        a = this.getClass(r),
                        l = e[t];
                    return l || (l = new a(t, i, s), e[t] = l, e.submodules[t] = l), l
                },
                getClass: function(e) { var t = r.Module; return e ? e.prototype instanceof t ? e : e.moduleClass || t : t },
                _addModuleDefinition: function(e, t, n, i) {
                    var r = this._getDefine(n),
                        o = this._getStartWithParent(n, t);
                    r && t.addDefinition(r, i), this._addStartWithParent(e, t, o)
                },
                _getStartWithParent: function(e, t) { var i; return n.isFunction(e) && e.prototype instanceof r.Module ? (i = t.constructor.prototype.startWithParent, n.isUndefined(i) ? !0 : i) : n.isObject(e) ? (i = e.startWithParent, n.isUndefined(i) ? !0 : i) : !0 },
                _getDefine: function(e) { return !n.isFunction(e) || e.prototype instanceof r.Module ? n.isObject(e) ? e.define : null : e },
                _addStartWithParent: function(e, t, n) { t.startWithParent = t.startWithParent && n, t.startWithParent && !t.startWithParentIsConfigured && (t.startWithParentIsConfigured = !0, e.addInitializer(function(e) { t.startWithParent && t.start(e) })) }
            }), r
        }),
        function() {
            var e, t, n, i, r = [].indexOf || function(e) {
                    for (var t = 0, n = this.length; n > t; t++)
                        if (t in this && this[t] === e) return t;
                    return -1
                },
                o = function(e, t) { return function() { return e.apply(t, arguments) } },
                s = [].slice,
                a = {}.hasOwnProperty,
                l = function(e, t) {
                    function n() { this.constructor = e }
                    for (var i in t) a.call(t, i) && (e[i] = t[i]);
                    return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
                };
            e = { binders: {}, components: {}, formatters: {}, adapters: {}, config: { prefix: "rv", templateDelimiters: ["{", "}"], rootInterface: ".", preloadData: !0, handler: function(e, t, n) { return this.call(e, t, n.view.models) } } }, "jQuery" in window ? (i = "on" in jQuery.prototype ? ["on", "off"] : ["bind", "unbind"], t = i[0], n = i[1], e.Util = { bindEvent: function(e, n, i) { return jQuery(e)[t](n, i) }, unbindEvent: function(e, t, i) { return jQuery(e)[n](t, i) }, getInputValue: function(e) { var t; return t = jQuery(e), "checkbox" === t.attr("type") ? t.is(":checked") : t.val() } }) : e.Util = { bindEvent: function() { return "addEventListener" in window ? function(e, t, n) { return e.addEventListener(t, n, !1) } : function(e, t, n) { return e.attachEvent("on" + t, n) } }(), unbindEvent: function() { return "removeEventListener" in window ? function(e, t, n) { return e.removeEventListener(t, n, !1) } : function(e, t, n) { return e.detachEvent("on" + t, n) } }(), getInputValue: function(e) { var t, n, i, r; if ("checkbox" === e.type) return e.checked; if ("select-multiple" === e.type) { for (r = [], n = 0, i = e.length; i > n; n++) t = e[n], t.selected && r.push(t.value); return r } return e.value } }, e.KeypathParser = function() {
                function e() {}
                return e.parse = function(e, t, n) { var i, o, s, a, l, u; for (a = [], o = { "interface": n, path: "" }, s = l = 0, u = e.length; u > l; s = l += 1) i = e.charAt(s), r.call(t, i) >= 0 ? (a.push(o), o = { "interface": i, path: "" }) : o.path += i; return a.push(o), a }, e
            }(), e.TextTemplateParser = function() {
                function e() {}
                return e.types = { text: 0, binding: 1 }, e.parse = function(e, t) {
                    var n, i, r, o, s, a, l;
                    for (a = [], o = e.length, n = 0, i = 0; o > i;) {
                        if (n = e.indexOf(t[0], i), 0 > n) { a.push({ type: this.types.text, value: e.slice(i) }); break }
                        if (n > 0 && n > i && a.push({ type: this.types.text, value: e.slice(i, n) }), i = n + t[0].length, n = e.indexOf(t[1], i), 0 > n) { s = e.slice(i - t[1].length), r = a[a.length - 1], (null != r ? r.type : void 0) === this.types.text ? r.value += s : a.push({ type: this.types.text, value: s }); break }
                        l = e.slice(i, n).trim(), a.push({ type: this.types.binding, value: l }), i = n + t[1].length
                    }
                    return a
                }, e
            }(), e.Observer = function() {
                function t(e, t, n, i) { this.view = e, this.model = t, this.keypath = n, this.callback = i, this.unobserve = o(this.unobserve, this), this.realize = o(this.realize, this), this.value = o(this.value, this), this.publish = o(this.publish, this), this.read = o(this.read, this), this.set = o(this.set, this), this.adapter = o(this.adapter, this), this.update = o(this.update, this), this.initialize = o(this.initialize, this), this.parse = o(this.parse, this), this.parse(), this.initialize() }
                return t.prototype.parse = function() {
                    var t, n, i, o, s, a;
                    return t = function() {
                        var e, t;
                        e = this.view.adapters, t = [];
                        for (n in e) s = e[n], s && t.push(n);
                        return t
                    }.call(this), a = this.keypath[0], r.call(t, a) >= 0 ? (o = this.keypath[0], i = this.keypath.substr(1)) : (o = this.view.config.rootInterface, i = this.keypath), this.tokens = e.KeypathParser.parse(i, t, o), this.key = this.tokens.pop()
                }, t.prototype.initialize = function() { return this.objectPath = [], this.target = this.realize(), null != this.target ? this.set(!0, this.key, this.target, this.callback) : void 0 }, t.prototype.update = function() { var e, t; return (e = this.realize()) !== this.target && (null != this.target && this.set(!1, this.key, this.target, this.callback), null != e && this.set(!0, this.key, e, this.callback), t = this.value(), this.target = e, this.value() !== t) ? this.callback() : void 0 }, t.prototype.adapter = function(e) { return this.view.adapters[e["interface"]] }, t.prototype.set = function(e, t, n, i) { var r; return r = e ? "subscribe" : "unsubscribe", this.adapter(t)[r](n, t.path, i) }, t.prototype.read = function(e, t) { return this.adapter(e).read(t, e.path) }, t.prototype.publish = function(e) { return null != this.target ? this.adapter(this.key).publish(this.target, this.key.path, e) : void 0 }, t.prototype.value = function() { return null != this.target ? this.read(this.key, this.target) : void 0 }, t.prototype.realize = function() { var e, t, n, i, r, o, s, a; for (e = this.model, r = null, a = this.tokens, t = o = 0, s = a.length; s > o; t = ++o) i = a[t], null != e ? (null != this.objectPath[t] ? e !== (n = this.objectPath[t]) && (this.set(!1, i, n, this.update), this.set(!0, i, e, this.update), this.objectPath[t] = e) : (this.set(!0, i, e, this.update), this.objectPath[t] = e), e = this.read(i, e)) : (null == r && (r = t), (n = this.objectPath[t]) && this.set(!1, i, n, this.update)); return null != r && this.objectPath.splice(r), e }, t.prototype.unobserve = function() { var e, t, n, i, r, o; for (o = this.tokens, e = i = 0, r = o.length; r > i; e = ++i) n = o[e], (t = this.objectPath[e]) && this.set(!1, n, t, this.update); return null != this.target ? this.set(!1, this.key, this.target, this.callback) : void 0 }, t
            }(), e.View = function() {
                function t(t, n, i) {
                    var r, s, a, l, u, c, d, h, p;
                    for (this.els = t, this.models = n, this.options = null != i ? i : {}, this.update = o(this.update, this), this.publish = o(this.publish, this), this.sync = o(this.sync, this), this.unbind = o(this.unbind, this), this.bind = o(this.bind, this), this.select = o(this.select, this), this.build = o(this.build, this), this.componentRegExp = o(this.componentRegExp, this), this.bindingRegExp = o(this.bindingRegExp, this), this.els.jquery || this.els instanceof Array || (this.els = [this.els]), d = ["config", "binders", "formatters", "adapters"], u = 0, c = d.length; c > u; u++) {
                        if (s = d[u], this[s] = {}, this.options[s]) { h = this.options[s]; for (r in h) a = h[r], this[s][r] = a }
                        p = e[s];
                        for (r in p) a = p[r], null == (l = this[s])[r] && (l[r] = a)
                    }
                    this.build()
                }
                return t.prototype.bindingRegExp = function() { return new RegExp("^" + this.config.prefix + "-") }, t.prototype.componentRegExp = function() { return new RegExp("^" + this.config.prefix.toUpperCase() + "-") }, t.prototype.build = function() {
                    var t, n, i, o, s, a, l, u, c;
                    for (this.bindings = [], a = [], t = this.bindingRegExp(), i = this.componentRegExp(), n = function(t) { return function(n, i, r, o) { var s, a, l, u, c, d, h; return c = {}, h = function() { var e, t, n, i; for (n = o.split("|"), i = [], e = 0, t = n.length; t > e; e++) d = n[e], i.push(d.trim()); return i }(), s = function() { var e, t, n, i; for (n = h.shift().split("<"), i = [], e = 0, t = n.length; t > e; e++) a = n[e], i.push(a.trim()); return i }(), u = s.shift(), c.formatters = h, (l = s.shift()) && (c.dependencies = l.split(/\s+/)), t.bindings.push(new e[n](t, i, r, u, c)) } }(this), s = function(o) {
                            return function(l) {
                                var u, c, d, h, p, f, m, g, v, y, b, w, _, x, C, T, k, E, S, $, j, A, M, O, I, P, F, N, L, V;
                                if (r.call(a, l) < 0) {
                                    if (3 === l.nodeType) {
                                        if (g = e.TextTemplateParser, (p = o.config.templateDelimiters) && (w = g.parse(l.data, p)).length && (1 !== w.length || w[0].type !== g.types.text)) {
                                            for (C = 0, S = w.length; S > C; C++) b = w[C], y = document.createTextNode(b.value), l.parentNode.insertBefore(y, l), 1 === b.type && n("TextBinding", y, null, b.value);
                                            l.parentNode.removeChild(l)
                                        }
                                    } else if (i.test(l.tagName)) _ = l.tagName.replace(i, "").toLowerCase(), o.bindings.push(new e.ComponentBinding(o, l, _));
                                    else if (null != l.attributes) {
                                        for (I = l.attributes, T = 0, $ = I.length; $ > T; T++)
                                            if (u = I[T], t.test(u.name)) {
                                                if (_ = u.name.replace(t, ""), !(d = o.binders[_])) { P = o.binders; for (f in P) x = P[f], "*" !== f && -1 !== f.indexOf("*") && (v = new RegExp("^" + f.replace("*", ".+") + "$"), v.test(_) && (d = x)) }
                                                if (d || (d = o.binders["*"]), d.block) {
                                                    for (F = l.childNodes, k = 0, j = F.length; j > k; k++) m = F[k], a.push(m);
                                                    c = [u]
                                                }
                                            }
                                        for (N = c || l.attributes, E = 0, A = N.length; A > E; E++) u = N[E], t.test(u.name) && (_ = u.name.replace(t, ""), n("Binding", l, _, u.value))
                                    }
                                    for (L = function() { var e, t, n, i; for (n = l.childNodes, i = [], t = 0, e = n.length; e > t; t++) m = n[t], i.push(m); return i }(), V = [], O = 0, M = L.length; M > O; O++) h = L[O], V.push(s(h));
                                    return V
                                }
                            }
                        }(this), c = this.els, l = 0, u = c.length; u > l; l++) o = c[l], s(o)
                }, t.prototype.select = function(e) { var t, n, i, r, o; for (r = this.bindings, o = [], n = 0, i = r.length; i > n; n++) t = r[n], e(t) && o.push(t); return o }, t.prototype.bind = function() { var e, t, n, i, r; for (i = this.bindings, r = [], t = 0, n = i.length; n > t; t++) e = i[t], r.push(e.bind()); return r }, t.prototype.unbind = function() { var e, t, n, i, r; for (i = this.bindings, r = [], t = 0, n = i.length; n > t; t++) e = i[t], r.push(e.unbind()); return r }, t.prototype.sync = function() { var e, t, n, i, r; for (i = this.bindings, r = [], t = 0, n = i.length; n > t; t++) e = i[t], r.push(e.sync()); return r }, t.prototype.publish = function() { var e, t, n, i, r; for (i = this.select(function(e) { return e.binder.publishes }), r = [], t = 0, n = i.length; n > t; t++) e = i[t], r.push(e.publish()); return r }, t.prototype.update = function(e) {
                    var t, n, i, r, o, s, a;
                    null == e && (e = {});
                    for (n in e) i = e[n], this.models[n] = i;
                    for (s = this.bindings, a = [], r = 0, o = s.length; o > r; r++) t = s[r], a.push(t.update(e));
                    return a
                }, t
            }(), e.Binding = function() {
                function t(e, t, n, i, r) { this.view = e, this.el = t, this.type = n, this.keypath = i, this.options = null != r ? r : {}, this.update = o(this.update, this), this.unbind = o(this.unbind, this), this.bind = o(this.bind, this), this.publish = o(this.publish, this), this.sync = o(this.sync, this), this.set = o(this.set, this), this.eventHandler = o(this.eventHandler, this), this.formattedValue = o(this.formattedValue, this), this.setBinder = o(this.setBinder, this), this.formatters = this.options.formatters || [], this.dependencies = [], this.model = void 0, this.setBinder() }
                return t.prototype.setBinder = function() { var e, t, n, i; if (!(this.binder = this.view.binders[this.type])) { i = this.view.binders; for (e in i) n = i[e], "*" !== e && -1 !== e.indexOf("*") && (t = new RegExp("^" + e.replace("*", ".+") + "$"), t.test(this.type) && (this.binder = n, this.args = new RegExp("^" + e.replace("*", "(.+)") + "$").exec(this.type), this.args.shift())) } return this.binder || (this.binder = this.view.binders["*"]), this.binder instanceof Function ? this.binder = { routine: this.binder } : void 0 }, t.prototype.formattedValue = function(e) { var t, n, i, r, o, a; for (a = this.formatters, r = 0, o = a.length; o > r; r++) n = a[r], t = n.split(/\s+/), i = t.shift(), n = this.view.formatters[i], (null != n ? n.read : void 0) instanceof Function ? e = n.read.apply(n, [e].concat(s.call(t))) : n instanceof Function && (e = n.apply(null, [e].concat(s.call(t)))); return e }, t.prototype.eventHandler = function(e) {
                    var t, n;
                    return n = (t = this).view.config.handler,
                        function(i) { return n.call(e, this, i, t) }
                }, t.prototype.set = function(e) { var t; return e = e instanceof Function && !this.binder["function"] ? this.formattedValue(e.call(this.model)) : this.formattedValue(e), null != (t = this.binder.routine) ? t.call(this, this.el, e) : void 0 }, t.prototype.sync = function() {
                    var t, n, i, r, o, s, a, l, u;
                    if (this.model !== this.observer.target) {
                        for (a = this.dependencies, i = 0, o = a.length; o > i; i++) n = a[i], n.unobserve();
                        if (this.dependencies = [], null != (this.model = this.observer.target) && (null != (l = this.options.dependencies) ? l.length : void 0))
                            for (u = this.options.dependencies, r = 0, s = u.length; s > r; r++) t = u[r], n = new e.Observer(this.view, this.model, t, this.sync), this.dependencies.push(n)
                    }
                    return this.set(this.observer.value())
                }, t.prototype.publish = function() { var t, n, i, r, o, a, l, u, c; for (r = e.Util.getInputValue(this.el), l = this.formatters.slice(0).reverse(), o = 0, a = l.length; a > o; o++) n = l[o], t = n.split(/\s+/), i = t.shift(), (null != (u = this.view.formatters[i]) ? u.publish : void 0) && (r = (c = this.view.formatters[i]).publish.apply(c, [r].concat(s.call(t)))); return this.observer.publish(r) }, t.prototype.bind = function() {
                    var t, n, i, r, o, s, a;
                    if (null != (o = this.binder.bind) && o.call(this, this.el), this.observer = new e.Observer(this.view, this.view.models, this.keypath, this.sync), this.model = this.observer.target, null != this.model && (null != (s = this.options.dependencies) ? s.length : void 0))
                        for (a = this.options.dependencies, i = 0, r = a.length; r > i; i++) t = a[i], n = new e.Observer(this.view, this.model, t, this.sync), this.dependencies.push(n);
                    return this.view.config.preloadData ? this.sync() : void 0
                }, t.prototype.unbind = function() { var e, t, n, i, r; for (null != (i = this.binder.unbind) && i.call(this, this.el), this.observer.unobserve(), r = this.dependencies, t = 0, n = r.length; n > t; t++) e = r[t], e.unobserve(); return this.dependencies = [] }, t.prototype.update = function(e) { var t; return null == e && (e = {}), this.model = this.observer.target, this.unbind(), null != (t = this.binder.update) && t.call(this, e), this.bind() }, t
            }(), e.ComponentBinding = function(t) {
                function n(t, n, i) { var s, a, l, u, c; for (this.view = t, this.el = n, this.type = i, this.unbind = o(this.unbind, this), this.bind = o(this.bind, this), this.update = o(this.update, this), this.locals = o(this.locals, this), this.component = e.components[this.type], this.attributes = {}, this.inflections = {}, u = this.el.attributes || [], a = 0, l = u.length; l > a; a++) s = u[a], c = s.name, r.call(this.component.attributes, c) >= 0 ? this.attributes[s.name] = s.value : this.inflections[s.name] = s.value }
                return l(n, t), n.prototype.sync = function() {}, n.prototype.locals = function(e) {
                    var t, n, i, r, o, s, a, l, u;
                    null == e && (e = this.view.models), o = {}, l = this.inflections;
                    for (n in l)
                        for (t = l[n], u = t.split("."), s = 0, a = u.length; a > s; s++) r = u[s], o[n] = (o[n] || e)[r];
                    for (n in e) i = e[n], null == o[n] && (o[n] = i);
                    return o
                }, n.prototype.update = function(e) { var t; return null != (t = this.componentView) ? t.update(this.locals(e)) : void 0 }, n.prototype.bind = function() { var t, n; return null != this.componentView ? null != (n = this.componentView) ? n.bind() : void 0 : (t = this.component.build.call(this.attributes), (this.componentView = new e.View(t, this.locals(), this.view.options)).bind(), this.el.parentNode.replaceChild(t, this.el)) }, n.prototype.unbind = function() { var e; return null != (e = this.componentView) ? e.unbind() : void 0 }, n
            }(e.Binding), e.TextBinding = function(e) {
                function t(e, t, n, i, r) { this.view = e, this.el = t, this.type = n, this.keypath = i, this.options = null != r ? r : {}, this.sync = o(this.sync, this), this.formatters = this.options.formatters || [], this.dependencies = [] }
                return l(t, e), t.prototype.binder = { routine: function(e, t) { return e.data = null != t ? t : "" } }, t.prototype.sync = function() { return t.__super__.sync.apply(this, arguments) }, t
            }(e.Binding), e.adapters["."] = {
                id: "_rv",
                counter: 0,
                weakmap: {},
                weakReference: function(e) { var t; return e.hasOwnProperty(this.id) || (t = this.counter++, this.weakmap[t] = { callbacks: {} }, Object.defineProperty(e, this.id, { value: t })), this.weakmap[e[this.id]] },
                stubFunction: function(e, t) {
                    var n, i, r;
                    return i = e[t], n = this.weakReference(e), r = this.weakmap, e[t] = function() {
                        var t, o, s, a, l, u, c, d, h, p;
                        a = i.apply(e, arguments), c = n.pointers;
                        for (s in c)
                            for (o = c[s], p = null != (d = null != (h = r[s]) ? h.callbacks[o] : void 0) ? d : [], l = 0, u = p.length; u > l; l++)(t = p[l])();
                        return a
                    }
                },
                observeMutations: function(e, t, n) {
                    var i, o, s, a, l, u;
                    if (Array.isArray(e)) {
                        if (s = this.weakReference(e), null == s.pointers)
                            for (s.pointers = {}, o = ["push", "pop", "shift", "unshift", "sort", "reverse", "splice"], l = 0, u = o.length; u > l; l++) i = o[l], this.stubFunction(e, i);
                        if (null == (a = s.pointers)[t] && (a[t] = []), r.call(s.pointers[t], n) < 0) return s.pointers[t].push(n)
                    }
                },
                unobserveMutations: function(e, t, n) { var i, r, o; return Array.isArray(e && null != e[this.id]) && (r = null != (o = this.weakReference(e).pointers) ? o[t] : void 0) && (i = r.indexOf(n), i >= 0) ? r.splice(i, 1) : void 0 },
                subscribe: function(e, t, n) { var i, o; return i = this.weakReference(e).callbacks, null == i[t] && (i[t] = [], o = e[t], Object.defineProperty(e, t, { enumerable: !0, get: function() { return o }, set: function(s) { return function(a) { var l, u, c; if (a !== o) { for (o = a, c = i[t].slice(), l = 0, u = c.length; u > l; l++) n = c[l], r.call(i[t], n) >= 0 && n(); return s.observeMutations(a, e[s.id], t) } } }(this) })), r.call(i[t], n) < 0 && i[t].push(n), this.observeMutations(e[t], e[this.id], t) },
                unsubscribe: function(e, t, n) { var i, r; return i = this.weakmap[e[this.id]].callbacks[t], r = i.indexOf(n), r >= 0 && i.splice(r, 1), this.unobserveMutations(e[t], e[this.id], t) },
                read: function(e, t) { return e[t] },
                publish: function(e, t, n) { return e[t] = n }
            }, e.binders.text = function(e, t) { return null != e.textContent ? e.textContent = null != t ? t : "" : e.innerText = null != t ? t : "" }, e.binders.html = function(e, t) { return e.innerHTML = null != t ? t : "" }, e.binders.show = function(e, t) { return e.style.display = t ? "" : "none" }, e.binders.hide = function(e, t) { return e.style.display = t ? "none" : "" }, e.binders.enabled = function(e, t) { return e.disabled = !t }, e.binders.disabled = function(e, t) { return e.disabled = !!t }, e.binders.checked = { publishes: !0, bind: function(t) { return e.Util.bindEvent(t, "change", this.publish) }, unbind: function(t) { return e.Util.unbindEvent(t, "change", this.publish) }, routine: function(e, t) { var n; return "radio" === e.type ? e.checked = (null != (n = e.value) ? n.toString() : void 0) === (null != t ? t.toString() : void 0) : e.checked = !!t } }, e.binders.unchecked = { publishes: !0, bind: function(t) { return e.Util.bindEvent(t, "change", this.publish) }, unbind: function(t) { return e.Util.unbindEvent(t, "change", this.publish) }, routine: function(e, t) { var n; return "radio" === e.type ? e.checked = (null != (n = e.value) ? n.toString() : void 0) !== (null != t ? t.toString() : void 0) : e.checked = !t } }, e.binders.value = { publishes: !0, bind: function(t) { return e.Util.bindEvent(t, "change", this.publish) }, unbind: function(t) { return e.Util.unbindEvent(t, "change", this.publish) }, routine: function(e, t) { var n, i, o, s, a, l, u; if (null != window.jQuery) { if (e = jQuery(e), (null != t ? t.toString() : void 0) !== (null != (s = e.val()) ? s.toString() : void 0)) return e.val(null != t ? t : "") } else if ("select-multiple" === e.type) { if (null != t) { for (u = [], i = 0, o = e.length; o > i; i++) n = e[i], u.push(n.selected = (a = n.value, r.call(t, a) >= 0)); return u } } else if ((null != t ? t.toString() : void 0) !== (null != (l = e.value) ? l.toString() : void 0)) return e.value = null != t ? t : "" } }, e.binders["if"] = {
                block: !0,
                bind: function(e) { var t, n; return null == this.marker ? (t = [this.view.config.prefix, this.type].join("-").replace("--", "-"), n = e.getAttribute(t), this.marker = document.createComment(" rivets: " + this.type + " " + n + " "), this.bound = !1, e.removeAttribute(t), e.parentNode.insertBefore(this.marker, e), e.parentNode.removeChild(e)) : void 0 },
                unbind: function() {
                    var e;
                    return null != (e = this.nested) ? e.unbind() : void 0;
                },
                routine: function(t, n) { var i, r, o, s, a; if (!!n == !this.bound) { if (n) { o = {}, a = this.view.models; for (i in a) r = a[i], o[i] = r; return s = { binders: this.view.options.binders, formatters: this.view.options.formatters, adapters: this.view.options.adapters, config: this.view.options.config }, (this.nested || (this.nested = new e.View(t, o, s))).bind(), this.marker.parentNode.insertBefore(t, this.marker.nextSibling), this.bound = !0 } return t.parentNode.removeChild(t), this.nested.unbind(), this.bound = !1 } },
                update: function(e) { var t; return null != (t = this.nested) ? t.update(e) : void 0 }
            }, e.binders.unless = { block: !0, bind: function(t) { return e.binders["if"].bind.call(this, t) }, unbind: function() { return e.binders["if"].unbind.call(this) }, routine: function(t, n) { return e.binders["if"].routine.call(this, t, !n) }, update: function(t) { return e.binders["if"].update.call(this, t) } }, e.binders["on-*"] = { "function": !0, unbind: function(t) { return this.handler ? e.Util.unbindEvent(t, this.args[0], this.handler) : void 0 }, routine: function(t, n) { return this.handler && e.Util.unbindEvent(t, this.args[0], this.handler), e.Util.bindEvent(t, this.args[0], this.handler = this.eventHandler(n)) } }, e.binders["each-*"] = {
                block: !0,
                bind: function(e) {
                    var t, n, i, r, o;
                    if (null == this.marker) t = [this.view.config.prefix, this.type].join("-").replace("--", "-"), this.marker = document.createComment(" rivets: " + this.type + " "), this.iterated = [], e.removeAttribute(t), e.parentNode.insertBefore(this.marker, e), e.parentNode.removeChild(e);
                    else
                        for (o = this.iterated, i = 0, r = o.length; r > i; i++) n = o[i], n.bind()
                },
                unbind: function(e) { var t, n, i, r, o; if (null != this.iterated) { for (r = this.iterated, o = [], n = 0, i = r.length; i > n; n++) t = r[n], o.push(t.unbind()); return o } },
                routine: function(t, n) {
                    var i, r, o, s, a, l, u, c, d, h, p, f, m, g, v, y, b, w, _, x, C, T, k, E;
                    if (c = this.args[0], n = n || [], this.iterated.length > n.length)
                        for (x = Array(this.iterated.length - n.length), g = 0, b = x.length; b > g; g++) o = x[g], m = this.iterated.pop(), m.unbind(), this.marker.parentNode.removeChild(m.els[0]);
                    for (s = v = 0, w = n.length; w > v; s = ++v)
                        if (u = n[s], r = { index: s }, r[c] = u, null == this.iterated[s]) {
                            C = this.view.models;
                            for (l in C) u = C[l], null == r[l] && (r[l] = u);
                            h = this.iterated.length ? this.iterated[this.iterated.length - 1].els[0] : this.marker, d = { binders: this.view.options.binders, formatters: this.view.options.formatters, adapters: this.view.options.adapters, config: {} }, T = this.view.options.config;
                            for (a in T) f = T[a], d.config[a] = f;
                            d.config.preloadData = !0, p = t.cloneNode(!0), m = new e.View(p, r, d), m.bind(), this.iterated.push(m), this.marker.parentNode.insertBefore(p, h.nextSibling)
                        } else this.iterated[s].models[c] !== u && this.iterated[s].update(r);
                    if ("OPTION" === t.nodeName) { for (k = this.view.bindings, E = [], y = 0, _ = k.length; _ > y; y++) i = k[y], i.el === this.marker.parentNode && "value" === i.type ? E.push(i.sync()) : E.push(void 0); return E }
                },
                update: function(e) {
                    var t, n, i, r, o, s, a, l;
                    t = {};
                    for (n in e) i = e[n], n !== this.args[0] && (t[n] = i);
                    for (a = this.iterated, l = [], o = 0, s = a.length; s > o; o++) r = a[o], l.push(r.update(t));
                    return l
                }
            }, e.binders["class-*"] = function(e, t) { var n; return n = " " + e.className + " ", !t == (-1 !== n.indexOf(" " + this.args[0] + " ")) ? e.className = t ? "" + e.className + " " + this.args[0] : n.replace(" " + this.args[0] + " ", " ").trim() : void 0 }, e.binders["*"] = function(e, t) { return null != t ? e.setAttribute(this.type, t) : e.removeAttribute(this.type) }, e.factory = function(t) {
                return t._ = e, t.binders = e.binders, t.components = e.components, t.formatters = e.formatters, t.adapters = e.adapters, t.config = e.config, t.configure = function(t) {
                    var n, i;
                    null == t && (t = {});
                    for (n in t) i = t[n], e.config[n] = i
                }, t.bind = function(t, n, i) { var r; return null == n && (n = {}), null == i && (i = {}), r = new e.View(t, n, i), r.bind(), r }
            }, "object" == typeof exports ? e.factory(exports) : "function" == typeof define && define.amd ? define("rivets", ["exports"], function(t) { return e.factory(this.rivets = t), t }) : e.factory(this.rivets = {})
        }.call(this),
        function() {
            var e = {}.hasOwnProperty,
                t = function(t, n) {
                    function i() { this.constructor = t }
                    for (var r in n) e.call(n, r) && (t[r] = n[r]);
                    return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
                };
            define("bone_core", ["marionette", "rivets"], function(e, n) {
                var i;
                return n.adapters[":"] = { subscribe: function(e, t, n) { return e.on("change:" + t, n) }, unsubscribe: function(e, t, n) { return e.off("change:" + t, n) }, read: function(e, t) { return e.get(t) }, publish: function(e, t, n) { return e.set(t, n) } }, i = new e.Application, i.on("start", function(e) { return this.project = e.project, this.template = e.template, i.commands.execute("" + this.template + ":app", e), Backbone.history ? Backbone.history.start() : void 0 }), i.navigate = function(e, t) { return null == t && (t = {}), Backbone.history.navigate(e, t) }, i.module("Base", function(e, n, i, r, o, s) {
                    return e.AppRouter = function(e) {
                        function n() { return n.__super__.constructor.apply(this, arguments) }
                        return t(n, e), n
                    }(r.AppRouter), e.Controller = function(e) {
                        function n() { return n.__super__.constructor.apply(this, arguments) }
                        return t(n, e), n.prototype.initialize = function(e) { return this.start(e) }, n.prototype.start = function() {}, n
                    }(r.Controller), e.LayoutView = function(e) {
                        function n() { return n.__super__.constructor.apply(this, arguments) }
                        return t(n, e), n
                    }(r.LayoutView), e.ItemView = function(e) {
                        function n() { return n.__super__.constructor.apply(this, arguments) }
                        return t(n, e), n
                    }(r.ItemView), e.CollectionView = function(e) {
                        function n() { return n.__super__.constructor.apply(this, arguments) }
                        return t(n, e), n
                    }(r.CollectionView), e.CompositeView = function(e) {
                        function n() { return n.__super__.constructor.apply(this, arguments) }
                        return t(n, e), n
                    }(r.CompositeView), e.Model = function(e) {
                        function n() { return n.__super__.constructor.apply(this, arguments) }
                        return t(n, e), n
                    }(i.Model), e.Collection = function(e) {
                        function n() { return n.__super__.constructor.apply(this, arguments) }
                        return t(n, e), n
                    }(i.Collection)
                }), i
            })
        }.call(this),
        function() {
            var e = {}.hasOwnProperty,
                t = function(t, n) {
                    function i() { this.constructor = t }
                    for (var r in n) e.call(n, r) && (t[r] = n[r]);
                    return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
                };
            define("bone_entities", ["bone_core", "bone_entities"], function(e) {
                return e.module("EntitiesComponent", function(e, n, i, r, o, s) {
                    return e.ProductModel = function(i) {
                        function r() { return r.__super__.constructor.apply(this, arguments) }
                        return t(r, i), r.prototype.initialize = function(e) { return this.parseShopifyData(e) }, r.prototype.parseShopifyData = function(t) { return this.images = new n.Base.Collection(t.images), this.options = new n.Base.Collection(t.options), this.tags = new n.Base.Collection, s(t.tags).each(function(e) { return function(t) { return e.tags.add({ value: t }) } }(this)), this.variants = new e.VariantsCollection(t.variants) }, r.prototype.attachImagesToVariants = function(e) { return null == e && (e = {}), s(this.variants.models).each(function(t) { return function(n) { var i; if (!s(i = t.images.findWhere({ id: n.featuredImage.get("id") })).isUndefined() && i.has("color")) return e[i.get("color")] || (e[i.get("color")] = []), n.featuredImage.set("color", i.get("color")), e[i.get("color")].push(n.get("id")) } }(this)), s(this.images.models).each(function(t) { return function(n) { return s(e).each(function(i, r) { return e[n.get("color")] ? s(e[n.get("color")]).each(function(e) { var i; if (i = t.variants.findWhere({ id: e })) return n.has("360") ? i.volumeImages.add(n) : i.images.add(n) }) : void 0 }) } }(this)) }, r
                    }(n.Base.Model), e.ProductsCollection = function(n) {
                        function i() { return i.__super__.constructor.apply(this, arguments) }
                        return t(i, n), i.prototype.model = e.ProductModel, i
                    }(n.Base.Collection), e.VariantModel = function(e) {
                        function i() { return i.__super__.constructor.apply(this, arguments) }
                        return t(i, e), i.prototype.initialize = function(e) { return this.parseShopifyData(e) }, i.prototype.parseShopifyData = function(e) { return this.featuredImage = new n.Base.Model(e.featured_image), this.options = new n.Base.Collection(e.options), this.images = new(n.Base.Collection.extend({ comparator: function(e) { return function(e) { return e.get("order") } }(this) })), this.volumeImages = new(n.Base.Collection.extend({ comparator: function(e) { return function(e) { return e.get("360") } }(this) })) }, i
                    }(n.Base.Model), e.VariantsCollection = function(n) {
                        function i() { return i.__super__.constructor.apply(this, arguments) }
                        return t(i, n), i.prototype.model = e.VariantModel, i
                    }(n.Base.Collection), e.CartItemModel = function(e) {
                        function n() { return n.__super__.constructor.apply(this, arguments) }
                        return t(n, e), n
                    }(n.Base.Model), e.CartItemsCollection = function(n) {
                        function i() { return i.__super__.constructor.apply(this, arguments) }
                        return t(i, n), i.prototype.model = e.CartItemModel, i
                    }(n.Base.Collection), e.CartModel = function(e) {
                        function n() { return n.__super__.constructor.apply(this, arguments) }
                        return t(n, e), n
                    }(n.Base.Model), n.reqres.setHandler("products:collection", function(t) { return new e.ProductsCollection(t) }), n.reqres.setHandler("product:model", function(t) { return new e.ProductModel(t) }), n.reqres.setHandler("cart:items:collection", function(t) { return new e.CartItemsCollection(t) }), n.reqres.setHandler("cart:model", function(t) { return new e.CartModel(t) })
                })
            })
        }.call(this),
        function() {
            var e = {}.hasOwnProperty,
                t = function(t, n) {
                    function i() { this.constructor = t }
                    for (var r in n) e.call(n, r) && (t[r] = n[r]);
                    return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
                };
            define("bone_cart", ["bone_core", "rivets", "bone_cart"], function(e, n) {
                return e.module("CartApp", function(e, i, r, o, s, a) {
                    return e.Cart = function() {
                        function e() { window.shopify.cart = this.formatObject(window.shopify.cart), this.model = i.request("cart:model", window.shopify.cart), this.collection = i.request("cart:items:collection", window.shopify.cart.items), this.updateQuantity(this.model.get("item_count")) }
                        return e.init = function() { return i.cart = new e }, e.prototype.addVariant = function(e, t) { var n; return a(n = this.collection.findWhere({ id: e })).isUndefined() ? s.ajax({ type: "POST", url: "/cart/add.js", data: { id: e, quantity: t }, dataType: "json", success: function(e) { return function(n) { return n = e.formatObject(n), e.model.set("item_count", parseInt(e.model.get("item_count")) + parseInt(t)), e.model.set("total_price", parseInt(e.model.get("total_price")) + parseInt(n.line_price)), e.collection.add(n), e.updateQuantity(e.model.get("item_count")), e.collection.trigger("cart:quantity:has:changed", e.model.get("item_count")) } }(this) }) : this.updateVariant(e, n.get("quantity") + parseInt(t)) }, e.prototype.updateVariant = function(e, t, n) { var i; return null == n && (n = null), i = { updates: {} }, i.updates[e] = t, s.ajax({ type: "POST", url: "/cart/update.js", data: i, dataType: "json", success: function(t) { return function(i) { var r; return i = t.formatObject(i), t.model.set(i), (r = t.collection.findWhere({ id: e })) && a(i.items).each(function(t) { return t.id === e ? r.set(t) : void 0 }), t.updateQuantity(t.model.get("item_count")), a(n).isFunction() ? n() : void 0 } }(this) }) }, e.prototype.clearCart = function() { return s.ajax({ type: "POST", url: "/cart/clear.js", dataType: "json", success: function(e) { return function(t) { return t = e.formatObject(t), e.model.set(t), e.collection.remove(e.collection.models), e.updateQuantity(0), e.collection.trigger("cart:quantity:has:changed", e.model.get("item_count")) } }(this) }) }, e.prototype.removeVariant = function(e, t) { return null == t && (t = { updates: {} }), t.updates[e] = 0, s.ajax({ type: "POST", url: "/cart/update.js", data: t, dataType: "json", success: function(t) { return function(n) { return n = t.formatObject(n), t.model.set(n), t.collection.remove(t.collection.findWhere({ id: e })), t.updateQuantity(t.model.get("item_count")), t.collection.trigger("cart:quantity:has:changed", t.model.get("item_count")) } }(this) }) }, e.prototype.updateQuantity = function(e) { return s(".js-cart-open-btn").html("Cart" + (0 === e ? "" : " (" + e + ")")) }, e.prototype.formatObject = function(e) { return e.total_price && (e.total_price = this.formatPrice(e.total_price)), e && e.items && e.items.length ? a(e.items).each(function(t) { return function(n, i) { return a(n).has("line_price") && (e.items[i].line_price = t.formatPrice(n.line_price)), a(n).has("price") && (e.items[i].price = t.formatPrice(n.price)), a(n).has("price_min") && (e.items[i].price_min = t.formatPrice(n.price_min)), a(n).has("price_max") ? e.items[i].price_max = t.formatPrice(n.price_max) : void 0 } }(this)) : (e.line_price || e.price || e.price_min || e.price_max) && (a(e).has("line_price") && (e.line_price = this.formatPrice(e.line_price)), a(e).has("price") && (e.price = this.formatPrice(e.price)), a(e).has("price_min") && (e.price_min = this.formatPrice(e.price_min)), a(e).has("price_max") && (e.price_max = this.formatPrice(e.price_max))), e }, e.prototype.formatPrice = function(e) { return e = e.toString(), parseFloat(e.substring(0, e.length - 2)) }, e
                    }(), e.Controller = function(n) {
                        function i() { return i.__super__.constructor.apply(this, arguments) }
                        return t(i, n), i.prototype.start = function() { return this.cart = e.Cart.init(), this.showCart() }, i.prototype.showCart = function() { var e; return e = this.getCartListCompositeView({ collection: this.cart.collection, cartModel: this.cart.model }), e.on("place:order:click", function(t) { return function() { var n, i; return e.placeOrder = !0, e.placeOrderButtonIsLoading(!0), n = window.shopify.customer.id, i = [], a(t.cart.collection.models).each(function(e) { return i.push({ product_id: e.get("product_id"), variant_id: e.get("variant_id"), quantity: e.get("quantity") }) }), s.ajax({ url: "https://kingsley-rowe-app.herokuapp.com/api/v1/optician_order_request.json", type: "get", dataType: "jsonp", data: { products: i, customer_id: n }, timeout: 3e3, success: function(n) { return t.cart.clearCart(), e.placeOrderButtonIsLoading(!1), e.orderIsSentMode() }, error: function() { return e.placeOrderButtonIsLoading(!1), alert("Sorry, server is not available now! Please, try again later.") } }) } }(this)), s("#js-cart-region").html(e.render().el) }, i.prototype.getCartListCompositeView = function(t) { return new e.CartListCompositeView(t) }, i
                    }(i.Base.Controller), e.CartListItemView = function(e) {
                        function r() { return r.__super__.constructor.apply(this, arguments) }
                        return t(r, e), r.prototype.className = "cart__item", r.prototype.render = function() { return this.$el.html('<div class="cart__item__product">\n  <div class="cart__item__table">\n    <div class="cart__item__table__cell">\n      <a href="/products/' + this.model.get("handle") + "#variant=" + this.model.get("variant_id") + '">\n        <img src="' + this.model.get("image") + '" class="reflect" width="800" height="306" alt="Product" />\n      </a>\n    </div>\n  </div>\n</div>\n<div class="cart__item__description">\n  <div class="cart__item__close js-remove-variant">\n    <a href="javascript:void(0)"><i class="icon-close-bold"></i></a>\n  </div>\n  <div class="cart__item__title">\n    <a href="/products/' + this.model.get("handle") + "#variant=" + this.model.get("variant_id") + '">' + this.model.get("product_title") + '</a>\n  </div>\n  <div class="cart__item__frame">\n    <div class="cart__item__col">\n      <span class="cart__item__color">Colour: </span>\n      <span class="cart__item__color__type">' + this.model.get("variant_options")[1] + '</span>\n    </div>\n    <div class="cart__item__col cart__item__col--quantity">\n      <label>Qty:</label>\n      <input name="" type="number" min="1" max="999" rv-value="model:quantity" value="' + this.model.get("quantity") + '" />\n    </div>\n    <div class="cart__item__col last">\n      <a href="javascript:void(0)" class="cart__item__minus js-variant-quantity-change">–</a>\n      <a href="javascript:void(0)" class="cart__item__plus js-variant-quantity-change">+</a>\n    </div>\n    <div class="cart__item__price">\n      <span class="cart__item__price__currency">' + window.shopify.currency + '</span>\n      <span class="cart__item__price__count js-variant-summary" rv-text="model:line_price"></span>\n    </div>\n  </div>\n</div>'), this.onRender() }, r.prototype.onRender = function() { return this.lastQuantityChangeTime = Date.now(), n.bind(this.$el, { model: this.model }) }, r.prototype.events = { "click .js-variant-quantity-change": "onQuantityChangeClick", "keypress input": "onQuantityKeypress", "change input": "onQuantityChange", "click .js-remove-variant": "onRemoveClick" }, r.prototype.onQuantityChangeClick = function(e) { var t; return "+" === s(e.currentTarget).text() ? this.$el.find("input").val(parseInt(this.$el.find("input").val()) + 1) : (t = parseInt(this.$el.find("input").val()) - 1, this.$el.find("input").val(0 >= t ? 0 : t)), this.onQuantityChange() }, r.prototype.onQuantityKeypress = function(e) { var t, n; return n = s(e.currentTarget).val(), t = window.e ? e.keyCode : e.which, "" !== n && 0 !== n || 48 !== t || e.preventDefault(), 48 > t || t > 57 ? e.preventDefault() : void 0 }, r.prototype.onQuantityChange = function(e) { return a(this.$el.find("input").val()).isEmpty() && this.$el.find("input").val(1), setTimeout(function(e) { return function() { return Date.now() < e.lastQuantityChangeTime + 1500 ? void 0 : (e.lastQuantityChangeTime = Date.now(), i.cart.updateVariant(e.model.get("id"), e.$el.find("input").val())) } }(this), 1500) }, r.prototype.onRemoveClick = function() { return i.cart.removeVariant(this.model.get("id")) }, r
                    }(i.Base.ItemView), e.CartListCompositeView = function(n) {
                        function i() { return i.__super__.constructor.apply(this, arguments) }
                        return t(i, n), i.prototype.template = "#cart-list-template", i.prototype.className = "cart__wrapper", i.prototype.childView = e.CartListItemView, i.prototype.childViewContainer = ".cart__list", i.prototype.triggers = { "click .js-place-order": "place:order:click" }, i.prototype.events = { "click .js-submit-checkout": "onSubmitClick" }, i.prototype.initialize = function(e) { return this.placeOrder = !1, this.cartModel = e.cartModel }, i.prototype.templateHelpers = function() { return { currency: window.shopify.currency } }, i.prototype.onRender = function() { return this.setTotal(this.cartModel.get("total_price")), this.cartModel.on("change", function(e) { return function() { return e.setTotal(e.cartModel.get("total_price")) } }(this)), this.collection.length > 0 && this.emptyMode(!1), this.collection.on("cart:quantity:has:changed", function(e) { return function(t) { return e.placeOrder ? e.placeOrder = !1 : e.emptyMode(0 === t) } }(this)), s(".js-mobile-submit-checkout").on("click", function(e) { return function() { return e.onSubmitClick() } }(this)) }, i.prototype.emptyMode = function(e) { return null == e && (e = !0), e ? (this.$el.find(".js-order-is-sent-block").addClass("hidden"), this.$el.find(".js-not-empty-cart-block").addClass("hidden"), this.$el.find(".js-empty-cart-block").removeClass("hidden"), s(".js-mobile-submit-checkout, .js-mobile-place-order").addClass("hidden")) : (this.$el.find(".js-order-is-sent-block").addClass("hidden"), this.$el.find(".js-not-empty-cart-block").removeClass("hidden"), this.$el.find(".js-empty-cart-block").addClass("hidden"), s(".js-mobile-submit-checkout,.js-mobile-place-order").removeClass("hidden")) }, i.prototype.orderIsSentMode = function() { return this.$el.find(".js-order-is-sent-block").removeClass("hidden"), this.$el.find(".js-not-empty-cart-block").addClass("hidden"), this.$el.find(".js-empty-cart-block").addClass("hidden") }, i.prototype.onSubmitClick = function() { return s("#cart-form").submit() }, i.prototype.setTotal = function(e) { return this.$el.find(".js-cart-total").html(e) }, i.prototype.placeOrderButtonIsLoading = function(e) { return e ? this.$el.find(".js-place-order").addClass("is-loading") : this.$el.find(".js-place-order").removeClass("is-loading") }, i
                    }(i.Base.CompositeView), i.on("start", function(t) { return new e.Controller(t) })
                })
            })
        }.call(this),
        function() {
            var e = {}.hasOwnProperty,
                t = function(t, n) {
                    function i() { this.constructor = t }
                    for (var r in n) e.call(n, r) && (t[r] = n[r]);
                    return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
                };
            define("bone_home", ["bone_core", "bone_home"], function(e) {
                return e.module("HomeApp", function(e, n, i, r, o, s) {
                    return e.Controller = function(e) {
                        function i() { return i.__super__.constructor.apply(this, arguments) }
                        return t(i, e), i.prototype.start = function(e) { return this.showProducts(e) }, i.prototype.showProducts = function(e) { var t, i, r, s; return r = new n.Base.Collection(e.two_products), s = new n.CollectionApp.ProductsCollectionView({ el: o(".js-two-products"), collection: r }), t = new n.Base.Collection(e.four_products), i = new n.CollectionApp.ProductsCollectionView({ el: o(".js-four-products"), collection: t }) }, i
                    }(n.Base.Controller), n.commands.setHandler("index:app", function(t) { return new e.Controller(t) })
                })
            })
        }.call(this),
        function() {
            var e = {}.hasOwnProperty,
                t = function(t, n) {
                    function i() { this.constructor = t }
                    for (var r in n) e.call(n, r) && (t[r] = n[r]);
                    return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
                };
            define("bone_collection", ["bone_core", "bone_collection"], function(e) {
                return e.module("CollectionApp", function(e, n, i, r, o, s) {
                    return e.shared = {}, e.shared.putVariantColorsIntoTags = function(e, t) { return s(e.models).each(function(e) { return function(e) { var n, i; return i = e.get("variants"), n = e.get("tags"), s(i).each(function(e, r, o) { var a; return null == o && (o = null), "" !== e.option2 ? (a = e.option2.split(" "), s(a).each(function(e, t) { return 2 === e.length ? o = t : void 0 }), null !== o && a.splice(o, 1), i[r].color_name = a.join(" ").toLowerCase(), t.push("color-" + a.join("-").toLowerCase()), i[r].color_tag_name = "color-" + a.join(" ").toLowerCase(), n.push(i[r].color_tag_name)) : void 0 }), e.set("variants", i), e.set("tags", n) } }(this)), s.uniq(t) }, e.AppRouter = function(e) {
                        function n() { return n.__super__.constructor.apply(this, arguments) }
                        return t(n, e), n.prototype.appRoutes = { "filters/:query": "activateFilters" }, n
                    }(n.Base.AppRouter), e.Controller = function(i) {
                        function r() { return r.__super__.constructor.apply(this, arguments) }
                        return t(r, i), r.prototype.start = function(t) { var i; return i = new n.Base.Collection(t.products_data), t.tags_data = e.shared.putVariantColorsIntoTags(i, t.tags_data), this.page(), this.filters(t.tags_data), this.productsList(i) }, r.prototype.page = function() { return this.layout = new e.LayoutView({ el: o(".body") }) }, r.prototype.sexFilter = function(e) { return "men" === e ? (o(".js-sex-men").removeClass("is-hidden"), o(".js-sex-women").addClass("is-hidden")) : (o(".js-sex-men").addClass("is-hidden"), o(".js-sex-women").removeClass("is-hidden")) }, r.prototype.filters = function(e) { var t, i, r; return r = this.parseTags(e), i = this.getFiltersPanelItemView({ el: o(".filters") }), t = this.createFilters(i, r), s(t.views).each(function(e) { return function(t, n) { return e.layout.on("activate:filter:" + n, function(i) { return "sex" === n && e.sexFilter(i), t.activateBy({ model: t.collection.findWhere({ value: i }) }), e.layout.trigger("filter:products") }) } }(this)), this.layout.on("filter:products", function(e) { return function(i, r) { var a; return null == r && (r = ""), a = t.getActiveList(), s(a).each(function(t, n) { return t[0] ? ("sex" === n && e.sexFilter(t[0].get("value")), r += "" + n + "=" + encodeURIComponent(t[0].get("value")) + "&") : void 0 }), s(r).isEmpty() ? (n.navigate("filters=none", { trigger: !1 }), e.layout.trigger("show:all:products")) : (o(".show-all-products").removeClass("is-active"), n.navigate("filters/" + r.slice(0, -1), { trigger: !1 }), e.layout.trigger("filter:products:by", a)) } }(this)) }, r.prototype.createFilters = function(e, t, i) { return null == i && (i = { views: {} }), i.views.sex = this.getFilterValuesCollection({ collection: new n.Base.Collection(t.sex), layout: this.layout }), i.views.type = this.getFilterValuesCollection({ collection: new n.Base.Collection(t.type), layout: this.layout }), i.views.color = this.getSelectFilterValueItemView({ collection: new n.Base.Collection(t.color), layout: this.layout, "default": t.color[0].value }), i.views.style = this.getSelectFilterValueItemView({ collection: new n.Base.Collection(t.style), layout: this.layout, "default": t.style[0].value }), i.getActiveList = function(e) { return null == e && (e = {}), s(this.views).each(function(t) { return function(t, n) { return e[n] = t.getActiveFiltersBy("model") } }(this)), e }, this.layout.on("reset:all:filters:except:this", function(e) { return function(e) { return s(i.views).each(function(t) { return t.cid !== e.cid ? t.activateBy({ model: null }) : void 0 }) } }(this)), this.layout.on("click:all", function(e) { return function(t) { return o(".show-all-products").addClass("is-active"), s(i.views).each(function(e) { return e.activateBy ? e.activateBy({ model: null }) : void 0 }), e.layout.trigger("show:all:products"), n.navigate("filters=none", { trigger: !1 }) } }(this)), e.showFilter("first", i.views.sex), e.showFilter("second", i.views.type), e.showSelectFilter("third", i.views.color), e.showSelectFilter("fourth", i.views.style), setTimeout(function(e) { return function() { return window.shopify.backboneOptions.project.browser.selectize() } }(this), 500), i }, r.prototype.activateFilters = function(e) { return s(e.split("&")).each(function(e) { return function(t) { var n; return (n = t.split("="))[1] ? e.layout.trigger("activate:filter:" + n[0], n[1]) : void 0 } }(this)) }, r.prototype.productsList = function(e) { var t; return t = this.getProductsListView({ el: o(".products"), collection: e }), this.layout.on("filter:products:by", function(e) { return function(e) { return t.filterProductsBy(e) } }(this)), this.layout.on("show:all:products", function(e) { return function() { return t.showAll() } }(this)), t.on("is:empty", function(e) { return function(t) { return t ? e.layout.$el.find(".js-filter-empty").removeClass("hidden") : e.layout.$el.find(".js-filter-empty").addClass("hidden") } }(this)) }, r.prototype.parseTags = function(e, t) { return null == t && (t = { sex: [], type: [], color: [{ value: "Color" }], style: [{ value: "Style" }] }), s(e).each(function(e) { return function(e) { var n; return n = e.split("-"), t[n[0]] || (t[n[0]] = []), t[n[0]].push({ value: n[1] + (n[2] ? " " + n[2] : "") }) } }(this)), s(t).each(function(e) { return function(e) { return e.filter(function(e, t, n) { return n.indexOf(e) === t }) } }(this)), t.type = t.type.filter(function(e) { return function(e, t, n) { return "interchangeable" !== e.value } }(this)), t.type.push({ value: "interchangeable" }), t }, r.prototype.getFiltersPanelItemView = function(t) { return new e.FiltersPanelItemView(t) }, r.prototype.getFilterValuesCollection = function(t) { return new e.FilterValuesCollection(t) }, r.prototype.getSelectFilterValueItemView = function(t) { return new e.SelectFilterValuesCollection(t) }, r.prototype.getProductsListView = function(t) { return new e.ProductsCollectionView(t) }, r
                    }(n.Base.Controller), e.LayoutView = function(e) {
                        function n() { return n.__super__.constructor.apply(this, arguments) }
                        return t(n, e), n
                    }(n.Base.LayoutView), e.FilterValueItemView = function(e) {
                        function n() { return n.__super__.constructor.apply(this, arguments) }
                        return t(n, e), n.prototype.tagName = "li", n.prototype.events = { "click a": "onClick" }, n.prototype.render = function() { return this.$el.html('<a href="javascript:void(0)" class="typekit">' + this.model.get("value") + "</a>") }, n.prototype.onClick = function(e) { return this.trigger("click", this.isActive()) }, n.prototype.isActive = function() { return this.$el.find("a").hasClass("is-active") }, n.prototype.activate = function() { return this.$el.find("a").addClass("is-active") }, n.prototype.deactivate = function() { return this.$el.find("a").removeClass("is-active") }, n
                    }(n.Base.ItemView), e.FilterValuesCollection = function(n) {
                        function i() { return i.__super__.constructor.apply(this, arguments) }
                        return t(i, n), i.prototype.childView = e.FilterValueItemView, i.prototype.tagName = "ul", i.prototype.initialize = function(e) { return this.on("childview:click", function(t) { return function(n, i) { return e.layout.trigger("reset:all:filters:except:this", t), t.activateBy({ model: i ? null : n.model }), e.layout.trigger("filter:products", i) } }(this)) }, i.prototype.activateBy = function(e) { return s(this.children._views).each(function(t) { return function(t) { return t.model === e.model ? t.activate() : t.deactivate() } }(this)) }, i.prototype.getActiveFiltersBy = function(e, t) { return null == t && (t = []), s(this.children._views).each(function(e) { return function(e) { return e.isActive() ? t.push(e.model) : void 0 } }(this)), t }, i
                    }(n.Base.CollectionView), e.SelectFilterValueItemView = function(e) {
                        function n() { return n.__super__.constructor.apply(this, arguments) }
                        return t(n, e), n.prototype.tagName = "option", n.prototype.render = function() { return this.$el.attr({ value: this.model.get("value") }).text(this.model.get("value").toUpperCase()) }, n
                    }(n.Base.ItemView), e.SelectFilterValuesCollection = function(n) {
                        function i() { return i.__super__.constructor.apply(this, arguments) }
                        return t(i, n), i.prototype.childView = e.SelectFilterValueItemView, i.prototype.tagName = "select", i.prototype.className = "js-selectize", i.prototype.events = { change: "onChange" }, i.prototype.initialize = function(e) { return this["default"] = e["default"], this.layout = e.layout }, i.prototype.onChange = function(e) { return this.layout.trigger("reset:all:filters:except:this", this), this.layout.trigger("filter:products", this.$el.val() === this["default"]) }, i.prototype.activateBy = function(e) { var t, n, i, r, s; return e.model && e.model.get("value") ? this.$el.val(e.model.get("value")) : (s = this.collection.models[0].get("value"), n = o("select.js-selectize")[0].selectize, i = o("select.js-selectize")[1].selectize, n && i ? (t = n.getValue(), r = i.getValue(), "Style" === s && "Color" !== t ? o("select.js-selectize")[1].selectize.setValue(s) : "Color" === s && "Style" !== r && o("select.js-selectize")[0].selectize.setValue(s), !1) : this.$el.val(this.collection.models[0].get("value"))) }, i.prototype.getActiveFiltersBy = function(e, t) { var n; return null == t && (t = []), (n = this.$el.val()) === this["default"] ? t : (s(this.children._views).each(function(e) { return function(e) { return e.model.get("value") === n ? t.push(e.model) : void 0 } }(this)), t) }, i
                    }(n.Base.CollectionView), e.FiltersPanelItemView = function(e) {
                        function n() { return n.__super__.constructor.apply(this, arguments) }
                        return t(n, e), n.prototype.showFilter = function(e, t) { return this.$el.find(".filters__col--" + e).html(t.render().el) }, n.prototype.showSelectFilter = function(e, t) { return this.$el.find(".filters__col--" + e + " .select").html(t.render().el) }, n
                    }(n.Base.ItemView), e.ProductItemView = function(e) {
                        function n() { return n.__super__.constructor.apply(this, arguments) }
                        return t(n, e), n.prototype.tagName = "div", n.prototype.onRender = function() { return this.generateTagClasses(), this.generateColorsButtons(this.imageOptions = this.getImageOptions()) }, n.prototype.generateTagClasses = function(e) { return null == e && (e = this.$el.attr("class")), s(this.model.get("tags")).each(function(t) { return function(t) { return e += " " + t.replace("/", "-slash-").replace(" ", "-space-") } }(this)), this.$el.attr("class", e) }, n.prototype.generateColorsButtons = function(e, t) { return null == t && (t = ""), s(e).each(function(e) { return function(e, n) { return t += '<li>\n  <a href="javascript:void(0)" class="products__item__variant color-logic products__variant__click' + (0 === n ? " is-active" : "") + '"\n  style="color: ' + e.color + '" data-index="' + n + '" data-color-name="' + e.color_name + '">\n    <i class="icon-circle"></i>\n    <i class="icon-circle-border2x"></i>\n  </a>\n</li>' } }(this)), this.$("ul").html(t) }, n.prototype.getImageOptions = function(e) { return null == e && (e = []), s(this.$el.find(".reflect")).each(function(t) { return function(n, i) { var r; return r = { color_name: t.model.get("variants")[i].color_tag_name, variant_id: t.model.get("variants")[i].id }, s(o(n).attr("data-options").split("&")).each(function(e) { var t; return (t = e.split("="))[1] ? r[t[0]] = t[1] : void 0 }), e.push(r) } }(this)), e }, n.prototype.activateColor = function(e, t) { return null == t && (t = !1), s(this.$el.find("ul > li > a")).each(function(n) { return function(i, r) { var s; if ((s = o(i)) && s.attr("data-color-name") === e) return t = !0, n.activateColorByIndex(r) } }(this)), t ? void 0 : this.activateColorByIndex(0) }, n.prototype.activateColorByIndex = function(e) { return null == e && (e = 0), this.$el.find(".products__item__link").removeClass("is-active"), this.$el.find("ul > li > a").removeClass("is-active"), o(this.$el.find(".products__item__link")[e]).addClass("is-active"), o(this.$el.find("ul > li > a")[e]).addClass("is-active") }, n
                    }(n.Base.ItemView), e.ProductsCollectionView = function(n) {
                        function i() { return i.__super__.constructor.apply(this, arguments) }
                        return t(i, n), i.prototype.childView = e.ProductItemView, i.prototype.initialize = function() { return this.createChildren() }, i.prototype.filterProductsBy = function(e, t, n) { return null == t && (t = ""), null == n && (n = !1), this.hideAll(), s(e).each(function(e) { return function(i, r) { return s(i).each(function(i) { return t += "." + r + "-" + i.get("value").replace("/", "-slash-").replace(" ", "-space-"), "color" === r ? (n = !0, s(e.children._views).each(function(e) { return e.activateColor("color-" + i.get("value")) })) : void 0 }) } }(this)), n || this.makeAllColorsDefault(), this.$el.find(t).removeClass("hidden"), this.trigger("is:empty", 0 === this.$el.find(".products__item:not(.hidden)").length) }, i.prototype.showAll = function() { return this.makeAllColorsDefault(), this.$el.find(".products__item").removeClass("hidden") }, i.prototype.hideAll = function() { return this.$el.find(".products__item").addClass("hidden") }, i.prototype.makeAllColorsDefault = function() { return s(this.children._views).each(function(e) { return function(e) { return e.activateColorByIndex(0) } }(this)) }, i.prototype.createChildren = function() {
                            return s(this.collection.models).each(function(e) {
                                return function(t) {
                                    var n;
                                    return n = new e.childView({ el: ".products__item[data-id=" + t.get("id") + "]", model: t }), e.proxyChildEvents(n), e.children.add(n), n.onRender()
                                }
                            }(this)), this._initialEvents()
                        }, i
                    }(n.Base.CollectionView), n.commands.setHandler("collection:app", function(t) { return new e.AppRouter({ controller: new e.Controller(t) }) })
                })
            })
        }.call(this),
        function() {
            var e = {}.hasOwnProperty,
                t = function(t, n) {
                    function i() { this.constructor = t }
                    for (var r in n) e.call(n, r) && (t[r] = n[r]);
                    return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
                };
            define("bone_product", ["bone_core", "bone_product"], function(e) {
                return e.module("ProductApp", function(e, n, i, r, o, s) {
                    return e.Controller = function(i) {
                        function r() { return r.__super__.constructor.apply(this, arguments) }
                        return t(r, i), r.prototype.start = function(e) { return (this.model = n.request("product:model", e.product_data)).images.reset(this.parseImages(e.images_data)), this.model.attachImagesToVariants(), this.showLayout(), this.showSlider(), this.showSchema(), this.showDecorator(), this.showRelatedProducts(e), this.showPopupCart() }, r.prototype.showLayout = function() { return this.layout = new this.getLayoutView({ el: o(".body"), model: this.model }), this.layout.onRender(), this.layout.setVariantDetails(this.model, this.model.variants.models[0]), this.layout.setVariantPrice(this.model.variants.models[0]) }, r.prototype.showSlider = function() { var e, t; return o(".product__variants").html((e = this.getVariantsSwitchersCollectionView({ collection: this.model.variants })).render().el), e.on("childview:click", function(e) { return function(t) { return n.navigate("variant=" + t.model.get("id"), { trigger: !1 }), e.layout.setVariantDetails(e.model, t.model), e.layout.setVariantPrice(t.model) } }(this)), this.layout.on("change:active:variant", function(t) { return function(t) { return e.clickOnByModel(t) } }(this)), this.layout.on("add:to:cart:click", function(t) { return function() { return t.layout.trigger("product:added:to:cart", e.getActiveVariantModel()) } }(this)), o("#variants-region").html((t = this.getVariantsCollectionView({ collection: this.model.variants })).render().el) }, r.prototype.showSchema = function() { var e; if (e = this.model.images.findWhere({ type: "schema" })) return this.layout.$el.find("#schema-area").removeClass("hidden"), this.layout.$el.find("#schema-image").attr({ src: e.get("original_src"), "data-image-xs": e.get("grande_src"), "data-image-sm": e.get("original_src"), "data-image-md": e.get("original_src"), "data-image-lg": e.get("master_src"), "data-lazy": !0 }) }, r.prototype.showDecorator = function() { var e; if (e = this.model.images.findWhere({ type: "decorator" })) return this.layout.$el.find("#decorator-area").removeClass("hidden"), this.layout.$el.find("#decorator-image").attr({ src: e.get("original_src"), "data-image-xs": e.get("grande_src"), "data-image-sm": e.get("original_src"), "data-image-md": e.get("original_src"), "data-image-lg": e.get("master_src"), "data-lazy": !0 }) }, r.prototype.showRelatedProducts = function(e, t) { var i, r; return null == t && (t = ""), i = new n.Base.Collection(e.related_products), 0 !== i.length ? (this.layout.$el.find("#related-products-area").removeClass("hidden"), r = new n.CollectionApp.ProductsCollectionView({ el: o(".products"), collection: i })) : void 0 }, r.prototype.showPopupCart = function() { var e; return e = this.getPopupCartItemView({ el: o("#popup-cart") }), this.layout.on("product:added:to:cart", function(t) { return function(i) { var r; return r = t.layout.getProductQuantity({ reset: !0 }), n.cart.addVariant(i.get("id"), r), e.fill(i, r), e.show() } }(this)) }, r.prototype.parseImages = function(e) { return s(e).each(function(t) { return function(t, n) { return s(t.alt.split("&")).each(function(t) { var i; return (i = t.split("="))[1] ? e[n][i[0]] = i[1] : void 0 }) } }(this)), e }, r.prototype.activateVariant = function(e) { var t; if (t = this.model.variants.findWhere({ id: parseInt(e) })) return this.layout.trigger("change:active:variant", t) }, r.prototype.getLayoutView = function(t) { return new e.LayoutView(t) }, r.prototype.getVariantsSwitchersCollectionView = function(t) { return new e.VariantsSwitchersCollectionView(t) }, r.prototype.getVariantsCollectionView = function(t) { return new e.VariantsCollectionView(t) }, r.prototype.getPopupCartItemView = function(t) { return new e.PopupCartItemView(t) }, r
                    }(n.Base.Controller), e.AppRouter = function(e) {
                        function n() { return n.__super__.constructor.apply(this, arguments) }
                        return t(n, e), n.prototype.appRoutes = { "variant=:variant_id": "activateVariant" }, n
                    }(n.Base.AppRouter), e.LayoutView = function(e) {
                        function n() { return n.__super__.constructor.apply(this, arguments) }
                        return t(n, e), n.prototype.events = { "click .js-buy-button": "onBuyButtonClick", "keypress .product-quantity": "onChangeQuantity" }, n.prototype.onRender = function() { return o(".js-mobile-buy-button").on("click", function(e) { return function(t) { return e.onBuyButtonClick(t) } }(this)) }, n.prototype.onBuyButtonClick = function(e) { return this.trigger("add:to:cart:click"), !1 }, n.prototype.onChangeQuantity = function(e) { var t, n; return n = o(e.currentTarget).val(), t = window.e ? e.keyCode : e.which, "" !== n && 0 !== n || 48 !== t || e.preventDefault(), 48 > t || t > 57 ? e.preventDefault() : void 0 }, n.prototype.getProductQuantity = function(e) { var t; return e = s(e).defaults({ reset: !1 }), t = o("#product-quantity").val(), s(t).isEmpty() && (o("#product-quantity").val(1), t = 1), e.reset && o("#product-quantity").val(1), t }, n.prototype.setVariantDetails = function(e, t) { var n; return n = "" + e.get("title") + "&nbsp;" + e.get("handle") + "&nbsp;&nbsp;" + t.get("option2") + " &nbsp;&nbsp;eye&nbsp;size:&nbsp;" + t.get("option1"), this.$el.find("#js-variant-title").html(n) }, n.prototype.setVariantPrice = function(e) { var t; return t = e.get("price").toString(), this.$el.find("#js-variant-price").html(window.shopify.currency + parseFloat(t.substring(0, t.length - 2))) }, n
                    }(n.Base.LayoutView), e.VariantItemView = function(n) {
                        function i() { return i.__super__.constructor.apply(this, arguments) }
                        return t(i, n), i.prototype.className = "product__slider product__slider__default-wrapper is-loading", i.prototype.render = function() { return this.$el.html('<div class="images-region"></div>\n<div class="slider-prev">\n  <a href="javascript:void(0)" data-slide-toggle="prev"><i class="icon-carret-left"></i></a>\n</div>\n<div class="slider-next">\n  <a href="javascript:void(0)" data-slide-toggle="next"><i class="icon-carret-right"></i></a>\n</div>\n<div class="product__slider__bg-overlay"></div>\n<div class="product__slider__overlay"></div>').attr("data-product-slider", this._index), this.onRender() }, i.prototype.onRender = function() { return 0 === this._index && this.$el.addClass("is-active"), this.showImages(new e.ImagesCollectionView({ collection: this.model.images, volumeImagesCollection: this.model.volumeImages })) }, i.prototype.showImages = function(e) { return e.on("render", function(e) { return function() { return e.trigger("images:render") } }(this)), this.$el.find(".images-region").html(e.render().el) }, i
                    }(n.Base.ItemView), e.VariantsCollectionView = function(n) {
                        function i() { return i.__super__.constructor.apply(this, arguments) }
                        return t(i, n), i.prototype.childView = e.VariantItemView, i.prototype.className = "product__slider__list", i.prototype.initialize = function() { var e; return e = 0, this.on("childview:images:render", function(t) { return function() { return e += 1, e === t.collection.length - 1 ? t.triggerLazyLoad() : void 0 } }(this)) }, i.prototype.triggerLazyLoad = function() { var e; return e = { sliders: ".js-product-slider", slidersItems: ".product__slider__item", slidersItemsPhotos: ".product__slider__img", slidersWrappers: ".product__slider", slidersOverlays: ".product__slider__overlay", slidersContainers: ".product__slider__list", slidersBtns: "data-slide-toggle", slidersBtnsColorsSwitchers: "data-product-slider-switcher", slidersSlidersColors: "data-product-slider", $products: o(".products"), $product: o(".product"), $share: "data-share-toggle" }, require(["product", "browser"], function(t) { return function(t, n) { return new t(e).start(), new n({ lazy: "[data-lazy]" }).lazyLoadProduct() } }(this)) }, i
                    }(n.Base.CollectionView), e.ImageItemView = function(e) {
                        function n() { return n.__super__.constructor.apply(this, arguments) }
                        return t(n, e), n.prototype.attributes = { "class": "product__slider__item" }, n.prototype.initialize = function(e) { return this.volumeImagesCollection = e.volumeImagesCollection }, n.prototype.render = function() { return 0 === this._index ? this.renderVolumeImage() : this.renderImage(), this.trigger("render") }, n.prototype.renderVolumeImage = function(e) { var t; return null == e && (e = ""), t = function(e) { return function(t) { return e.volumeImagesCollection.models.length >= 3 ? 1 === t ? " is-active" : "" : 0 === t ? " is-active" : "" } }(this), s(this.volumeImagesCollection.models).each(function(n) { return function(n, i) { return e += '<div class="product__slider__img product__slider__img--size-fixed' + t(i) + '"\ndata-image-xs="' + n.get("grande_src") + '"\ndata-image-sm="' + n.get("original_src") + '"\ndata-image-md="' + n.get("original_src") + '"\ndata-image-lg="' + n.get("master_src") + '"\ndata-lazy=""></div>' } }(this)), this.$el.html(e) }, n.prototype.renderImage = function() { return this.$el.html('<div class="product__slider__img is-active"\ndata-image-xs="' + this.model.get("grande_src") + '"\ndata-image-sm="' + this.model.get("original_src") + '"\ndata-image-md="' + this.model.get("original_src") + '"\ndata-image-lg="' + this.model.get("master_src") + '"\ndata-lazy=""></div>') }, n
                    }(n.Base.ItemView), e.ImagesCollectionView = function(n) {
                        function r() { return r.__super__.constructor.apply(this, arguments) }
                        return t(r, n), r.prototype.childView = e.ImageItemView, r.prototype.className = "slider slider--default js-product-slider", r.prototype.childViewOptions = function() { return { volumeImagesCollection: this.volumeImagesCollection } }, r.prototype.initialize = function(e) { return this.collection.unshift(new i.Model), this.volumeImagesCollection = e.volumeImagesCollection }, r
                    }(n.Base.CollectionView), e.VariantSwitcherItemView = function(e) {
                        function n() { return n.__super__.constructor.apply(this, arguments) }
                        return t(n, e), n.prototype.tagName = "a", n.prototype.attributes = { href: "javascript:void(0)", "class": "product__variants__item", "data-product-slider-switcher": !0 }, n.prototype.render = function() { return this.$el.html('<i class="icon-circle"></i><i class="icon-circle-border2x"></i>').attr("data-index", this._index).attr("data-id", this.model.get("id")).attr("style", "color: " + this.model.featuredImage.get("color")), 0 === this._index && this.$el.addClass("is-active"), this.onRender() }, n.prototype.onRender = function() { return this.$el.on("click", function(e) { return function() { return e.trigger("click") } }(this)) }, n.prototype.isActive = function() { return this.$el.hasClass("is-active") }, n
                    }(n.Base.ItemView), e.VariantsSwitchersCollectionView = function(n) {
                        function i() { return i.__super__.constructor.apply(this, arguments) }
                        return t(i, n), i.prototype.childView = e.VariantSwitcherItemView, i.prototype.className = "product__variants__inner", i.prototype.getActiveVariantModel = function() { var e; return e = null, s(this.children._views).each(function(t) { return function(t) { return t.isActive() ? e = t.model : void 0 } }(this)), e }, i.prototype.clickOnByModel = function(e) { return setTimeout(function(t) { return function() { return t.$el.find("[data-id=" + e.get("id") + "]").trigger("click") } }(this), 1e3) }, i
                    }(n.Base.CollectionView), e.PopupCartItemView = function(e) {
                        function n() { return n.__super__.constructor.apply(this, arguments) }
                        return t(n, e), n.prototype.events = { "click #js-view-cart": "onViewCartClick" }, n.prototype.onViewCartClick = function(e) { return this.hide() }, n.prototype.fill = function(e, t) { return this.model = e, this.$el.find("#quantity").val(t), this.$el.find(".popup__item__color > span").html(this.model.get("option2")), this.$el.find(".reflect").attr("src", this.model.featuredImage.get("src")) }, n.prototype.show = function() { return this.$el.modal("show") }, n.prototype.hide = function() { return this.$el.modal("hide") }, n
                    }(n.Base.ItemView), n.commands.setHandler("product:app", function(t) { return new e.AppRouter({ controller: new e.Controller(t) }) })
                })
            })
        }.call(this),
        function() { require.config({ urlArgs: "bust=1508743618048", waitSeconds: 0, paths: { jquery: "jquery", underscore: "underscore", backbone: "backbone", "backbone.eventbinder": "backbone.eventbinder", "backbone.wreqr": "backbone.wreqr", "backbone.babysitter": "backbone.babysitter", marionette: "backbone.marionette", rivets: "rivets", domready: "domReady", modernizr: "modernizr", "jquery.lazyload": "jquery.lazyload", "jquery.scrolltop": "jquery.scrollstop", "jquery.placeholder": "jquery.placeholder", "jquery.owl.carousel": "owl.carousel", "jquery.reflect": "jquery.reflect", "jquery.cookie": "jquery.cookie", bootstrap: "bootstrap", device: "device", platform: "platform", imagesloaded: "imagesloaded.pkgd", EventEmitter: "EventEmitter", pace: "pace", selectize: "selectize.min", shadowbox: "shadowbox", mediaelementplayer: "mediaelement-and-player.min", viewportchecker: "jquery.viewportchecker", headroom: "headroom.min", "jquery.headroom": "jQuery.headroom.min" }, shim: { jquery: { exports: "$" }, underscore: { exports: "_" }, backbone: { deps: ["jquery", "underscore"], exports: "Backbone" }, "backbone.wreqr": { deps: ["backbone"] }, "backbone.eventbinder": { deps: ["backbone"] }, "backbone.babysitter": { deps: ["backbone"] }, marionette: { deps: ["backbone"], exports: "Marionette" }, "jquery.placeholder": { deps: ["jquery"] }, "jquery.scrolltop": { deps: ["jquery"] }, "jquery.lazyload": { deps: ["jquery", "jquery.scrolltop"] }, "jquery.owl.carousel": { deps: ["jquery"] }, "jquery.reflect": { deps: ["jquery"] }, "jquery.cookie": { deps: ["jquery"] }, bootstrap: { deps: ["jquery"] }, "bootstrap.modal": { deps: ["jquery"], exports: "$.fn.modal" }, device: { exports: "device" }, platform: { exports: "platform" }, imagesloaded: { deps: ["jquery", "EventEmitter"], exports: "imagesloaded" }, pace: { exports: "pace" }, selectize: { deps: ["jquery"] }, modernizr: { exports: "Modernizr" }, shadowbox: { exports: "Shadowbox" }, mediaelementplayer: { deps: ["jquery", "froogaloop"] }, viewportchecker: { deps: ["jquery"] }, headroom: { exports: "Headroom" }, "jquery.headroom": { deps: ["jquery", "headroom"] } } }), require(["app", "bone_core", "bone_entities", "bone_cart", "bone_home", "bone_collection", "bone_product"], function(e, t) { return window.shopify.backboneOptions.project = e, t.start(window.shopify.backboneOptions, e) }) }.call(this), define("require_main", function() {})
}();