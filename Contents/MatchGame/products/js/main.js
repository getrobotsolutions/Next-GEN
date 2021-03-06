! function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(C, e) {
    "use strict";
    var t = [],
        S = C.document,
        r = Object.getPrototypeOf,
        s = t.slice,
        g = t.concat,
        u = t.push,
        o = t.indexOf,
        n = {},
        i = n.toString,
        m = n.hasOwnProperty,
        a = m.toString,
        l = a.call(Object),
        v = {},
        y = function(e) {
            return "function" == typeof e && "number" != typeof e.nodeType
        },
        x = function(e) {
            return null != e && e === e.window
        },
        c = {
            type: !0,
            src: !0,
            noModule: !0
        };

    function b(e, t, n) {
        var r, o = (t = t || S).createElement("script");
        if (o.text = e, n)
            for (r in c) n[r] && (o[r] = n[r]);
        t.head.appendChild(o).parentNode.removeChild(o)
    }

    function w(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[i.call(e)] || "object" : typeof e
    }
    var f = "3.3.1",
        k = function(e, t) {
            return new k.fn.init(e, t)
        },
        p = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

    function d(e) {
        var t = !!e && "length" in e && e.length,
            n = w(e);
        return !y(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    k.fn = k.prototype = {
        jquery: f,
        constructor: k,
        length: 0,
        toArray: function() {
            return s.call(this)
        },
        get: function(e) {
            return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = k.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return k.each(this, e)
        },
        map: function(n) {
            return this.pushStack(k.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(s.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: u,
        sort: t.sort,
        splice: t.splice
    }, k.extend = k.fn.extend = function() {
        var e, t, n, r, o, i, a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || y(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e) n = a[t], a !== (r = e[t]) && (l && r && (k.isPlainObject(r) || (o = Array.isArray(r))) ? (i = o ? (o = !1, n && Array.isArray(n) ? n : []) : n && k.isPlainObject(n) ? n : {}, a[t] = k.extend(l, i, r)) : void 0 !== r && (a[t] = r));
        return a
    }, k.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== i.call(e)) && (!(t = r(e)) || "function" == typeof(n = m.call(t, "constructor") && t.constructor) && a.call(n) === l)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        globalEval: function(e) {
            b(e)
        },
        each: function(e, t) {
            var n, r = 0;
            if (d(e))
                for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
            else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r])) break; return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(p, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (d(Object(e)) ? k.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : o.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, o = e.length; r < n; r++) e[o++] = t[r];
            return e.length = o, e
        },
        grep: function(e, t, n) {
            for (var r = [], o = 0, i = e.length, a = !n; o < i; o++) !t(e[o], o) !== a && r.push(e[o]);
            return r
        },
        map: function(e, t, n) {
            var r, o, i = 0,
                a = [];
            if (d(e))
                for (r = e.length; i < r; i++) null != (o = t(e[i], i, n)) && a.push(o);
            else
                for (i in e) null != (o = t(e[i], i, n)) && a.push(o);
            return g.apply([], a)
        },
        guid: 1,
        support: v
    }), "function" == typeof Symbol && (k.fn[Symbol.iterator] = t[Symbol.iterator]), k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        n["[object " + t + "]"] = t.toLowerCase()
    });
    var h = function(n) {
        var e, d, b, i, o, h, f, g, w, u, l, T, C, a, S, m, s, c, v, k = "sizzle" + 1 * new Date,
            y = n.document,
            E = 0,
            r = 0,
            p = ae(),
            x = ae(),
            A = ae(),
            D = function(e, t) {
                return e === t && (l = !0), 0
            },
            N = {}.hasOwnProperty,
            t = [],
            j = t.pop,
            L = t.push,
            q = t.push,
            M = t.slice,
            H = function(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1
            },
            $ = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            I = "[\\x20\\t\\r\\n\\f]",
            O = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            P = "\\[" + I + "*(" + O + ")(?:" + I + "*([*^$|!~]?=)" + I + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + O + "))|)" + I + "*\\]",
            R = ":(" + O + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + P + ")*)|.*)\\)|)",
            _ = new RegExp(I + "+", "g"),
            W = new RegExp("^" + I + "+|((?:^|[^\\\\])(?:\\\\.)*)" + I + "+$", "g"),
            B = new RegExp("^" + I + "*," + I + "*"),
            F = new RegExp("^" + I + "*([>+~]|" + I + ")" + I + "*"),
            z = new RegExp("=" + I + "*([^\\]'\"]*?)" + I + "*\\]", "g"),
            X = new RegExp(R),
            U = new RegExp("^" + O + "$"),
            V = {
                ID: new RegExp("^#(" + O + ")"),
                CLASS: new RegExp("^\\.(" + O + ")"),
                TAG: new RegExp("^(" + O + "|[*])"),
                ATTR: new RegExp("^" + P),
                PSEUDO: new RegExp("^" + R),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + I + "*(even|odd|(([+-]|)(\\d*)n|)" + I + "*(?:([+-]|)" + I + "*(\\d+)|))" + I + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + $ + ")$", "i"),
                needsContext: new RegExp("^" + I + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + I + "*((?:-\\d)?\\d*)" + I + "*\\)|)(?=[^-]|$)", "i")
            },
            G = /^(?:input|select|textarea|button)$/i,
            Y = /^h\d$/i,
            Q = /^[^{]+\{\s*\[native \w/,
            J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            K = /[+~]/,
            Z = new RegExp("\\\\([\\da-f]{1,6}" + I + "?|(" + I + ")|.)", "ig"),
            ee = function(e, t, n) {
                var r = "0x" + t - 65536;
                return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            },
            te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ne = function(e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            re = function() {
                T()
            },
            oe = ye(function(e) {
                return !0 === e.disabled && ("form" in e || "label" in e)
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            q.apply(t = M.call(y.childNodes), y.childNodes), t[y.childNodes.length].nodeType
        } catch (e) {
            q = {
                apply: t.length ? function(e, t) {
                    L.apply(e, M.call(t))
                } : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }

        function ie(e, t, n, r) {
            var o, i, a, s, u, l, c, f = t && t.ownerDocument,
                p = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== p && 9 !== p && 11 !== p) return n;
            if (!r && ((t ? t.ownerDocument || t : y) !== C && T(t), t = t || C, S)) {
                if (11 !== p && (u = J.exec(e)))
                    if (o = u[1]) {
                        if (9 === p) {
                            if (!(a = t.getElementById(o))) return n;
                            if (a.id === o) return n.push(a), n
                        } else if (f && (a = f.getElementById(o)) && v(t, a) && a.id === o) return n.push(a), n
                    } else {
                        if (u[2]) return q.apply(n, t.getElementsByTagName(e)), n;
                        if ((o = u[3]) && d.getElementsByClassName && t.getElementsByClassName) return q.apply(n, t.getElementsByClassName(o)), n
                    }
                if (d.qsa && !A[e + " "] && (!m || !m.test(e))) {
                    if (1 !== p) f = t, c = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((s = t.getAttribute("id")) ? s = s.replace(te, ne) : t.setAttribute("id", s = k), i = (l = h(e)).length; i--;) l[i] = "#" + s + " " + ve(l[i]);
                        c = l.join(","), f = K.test(e) && ge(t.parentNode) || t
                    }
                    if (c) try {
                        return q.apply(n, f.querySelectorAll(c)), n
                    } catch (e) {} finally {
                        s === k && t.removeAttribute("id")
                    }
                }
            }
            return g(e.replace(W, "$1"), t, n, r)
        }

        function ae() {
            var r = [];
            return function e(t, n) {
                return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n
            }
        }

        function se(e) {
            return e[k] = !0, e
        }

        function ue(e) {
            var t = C.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function le(e, t) {
            for (var n = e.split("|"), r = n.length; r--;) b.attrHandle[n[r]] = t
        }

        function ce(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function fe(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }

        function pe(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }

        function de(t) {
            return function(e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && oe(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }

        function he(a) {
            return se(function(i) {
                return i = +i, se(function(e, t) {
                    for (var n, r = a([], e.length, i), o = r.length; o--;) e[n = r[o]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }

        function ge(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (e in d = ie.support = {}, o = ie.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }, T = ie.setDocument = function(e) {
                var t, n, r = e ? e.ownerDocument || e : y;
                return r !== C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, S = !o(C), y !== C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", re, !1) : n.attachEvent && n.attachEvent("onunload", re)), d.attributes = ue(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), d.getElementsByTagName = ue(function(e) {
                    return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length
                }), d.getElementsByClassName = Q.test(C.getElementsByClassName), d.getById = ue(function(e) {
                    return a.appendChild(e).id = k, !C.getElementsByName || !C.getElementsByName(k).length
                }), d.getById ? (b.filter.ID = function(e) {
                    var t = e.replace(Z, ee);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }, b.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && S) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }) : (b.filter.ID = function(e) {
                    var n = e.replace(Z, ee);
                    return function(e) {
                        var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return t && t.value === n
                    }
                }, b.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && S) {
                        var n, r, o, i = t.getElementById(e);
                        if (i) {
                            if ((n = i.getAttributeNode("id")) && n.value === e) return [i];
                            for (o = t.getElementsByName(e), r = 0; i = o[r++];)
                                if ((n = i.getAttributeNode("id")) && n.value === e) return [i]
                        }
                        return []
                    }
                }), b.find.TAG = d.getElementsByTagName ? function(e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, r = [],
                        o = 0,
                        i = t.getElementsByTagName(e);
                    if ("*" !== e) return i;
                    for (; n = i[o++];) 1 === n.nodeType && r.push(n);
                    return r
                }, b.find.CLASS = d.getElementsByClassName && function(e, t) {
                    if (void 0 !== t.getElementsByClassName && S) return t.getElementsByClassName(e)
                }, s = [], m = [], (d.qsa = Q.test(C.querySelectorAll)) && (ue(function(e) {
                    a.appendChild(e).innerHTML = "<a id='" + k + "'></a><select id='" + k + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + I + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + I + "*(?:value|" + $ + ")"), e.querySelectorAll("[id~=" + k + "-]").length || m.push("~="), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + k + "+*").length || m.push(".#.+[+~]")
                }), ue(function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = C.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + I + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
                })), (d.matchesSelector = Q.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ue(function(e) {
                    d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", R)
                }), m = m.length && new RegExp(m.join("|")), s = s.length && new RegExp(s.join("|")), t = Q.test(a.compareDocumentPosition), v = t || Q.test(a.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, D = t ? function(e, t) {
                    if (e === t) return l = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e === C || e.ownerDocument === y && v(y, e) ? -1 : t === C || t.ownerDocument === y && v(y, t) ? 1 : u ? H(u, e) - H(u, t) : 0 : 4 & n ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return l = !0, 0;
                    var n, r = 0,
                        o = e.parentNode,
                        i = t.parentNode,
                        a = [e],
                        s = [t];
                    if (!o || !i) return e === C ? -1 : t === C ? 1 : o ? -1 : i ? 1 : u ? H(u, e) - H(u, t) : 0;
                    if (o === i) return ce(e, t);
                    for (n = e; n = n.parentNode;) a.unshift(n);
                    for (n = t; n = n.parentNode;) s.unshift(n);
                    for (; a[r] === s[r];) r++;
                    return r ? ce(a[r], s[r]) : a[r] === y ? -1 : s[r] === y ? 1 : 0
                }), C
            }, ie.matches = function(e, t) {
                return ie(e, null, null, t)
            }, ie.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== C && T(e), t = t.replace(z, "='$1']"), d.matchesSelector && S && !A[t + " "] && (!s || !s.test(t)) && (!m || !m.test(t))) try {
                    var n = c.call(e, t);
                    if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                } catch (e) {}
                return 0 < ie(t, C, null, [e]).length
            }, ie.contains = function(e, t) {
                return (e.ownerDocument || e) !== C && T(e), v(e, t)
            }, ie.attr = function(e, t) {
                (e.ownerDocument || e) !== C && T(e);
                var n = b.attrHandle[t.toLowerCase()],
                    r = n && N.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !S) : void 0;
                return void 0 !== r ? r : d.attributes || !S ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }, ie.escape = function(e) {
                return (e + "").replace(te, ne)
            }, ie.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, ie.uniqueSort = function(e) {
                var t, n = [],
                    r = 0,
                    o = 0;
                if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(D), l) {
                    for (; t = e[o++];) t === e[o] && (r = n.push(o));
                    for (; r--;) e.splice(n[r], 1)
                }
                return u = null, e
            }, i = ie.getText = function(e) {
                var t, n = "",
                    r = 0,
                    o = e.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += i(e)
                    } else if (3 === o || 4 === o) return e.nodeValue
                } else
                    for (; t = e[r++];) n += i(t);
                return n
            }, (b = ie.selectors = {
                cacheLength: 50,
                createPseudo: se,
                match: V,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ie.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ie.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(Z, ee).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = p[e + " "];
                        return t || (t = new RegExp("(^|" + I + ")" + e + "(" + I + "|$)")) && p(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(n, r, o) {
                        return function(e) {
                            var t = ie.attr(e, n);
                            return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === o : "!=" === r ? t !== o : "^=" === r ? o && 0 === t.indexOf(o) : "*=" === r ? o && -1 < t.indexOf(o) : "$=" === r ? o && t.slice(-o.length) === o : "~=" === r ? -1 < (" " + t.replace(_, " ") + " ").indexOf(o) : "|=" === r && (t === o || t.slice(0, o.length + 1) === o + "-"))
                        }
                    },
                    CHILD: function(h, e, t, g, m) {
                        var v = "nth" !== h.slice(0, 3),
                            y = "last" !== h.slice(-4),
                            x = "of-type" === e;
                        return 1 === g && 0 === m ? function(e) {
                            return !!e.parentNode
                        } : function(e, t, n) {
                            var r, o, i, a, s, u, l = v !== y ? "nextSibling" : "previousSibling",
                                c = e.parentNode,
                                f = x && e.nodeName.toLowerCase(),
                                p = !n && !x,
                                d = !1;
                            if (c) {
                                if (v) {
                                    for (; l;) {
                                        for (a = e; a = a[l];)
                                            if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                                        u = l = "only" === h && !u && "nextSibling"
                                    }
                                    return !0
                                }
                                if (u = [y ? c.firstChild : c.lastChild], y && p) {
                                    for (d = (s = (r = (o = (i = (a = c)[k] || (a[k] = {}))[a.uniqueID] || (i[a.uniqueID] = {}))[h] || [])[0] === E && r[1]) && r[2], a = s && c.childNodes[s]; a = ++s && a && a[l] || (d = s = 0) || u.pop();)
                                        if (1 === a.nodeType && ++d && a === e) {
                                            o[h] = [E, s, d];
                                            break
                                        }
                                } else if (p && (d = s = (r = (o = (i = (a = e)[k] || (a[k] = {}))[a.uniqueID] || (i[a.uniqueID] = {}))[h] || [])[0] === E && r[1]), !1 === d)
                                    for (;
                                        (a = ++s && a && a[l] || (d = s = 0) || u.pop()) && ((x ? a.nodeName.toLowerCase() !== f : 1 !== a.nodeType) || !++d || (p && ((o = (i = a[k] || (a[k] = {}))[a.uniqueID] || (i[a.uniqueID] = {}))[h] = [E, d]), a !== e)););
                                return (d -= m) === g || d % g == 0 && 0 <= d / g
                            }
                        }
                    },
                    PSEUDO: function(e, i) {
                        var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || ie.error("unsupported pseudo: " + e);
                        return a[k] ? a(i) : 1 < a.length ? (t = [e, e, "", i], b.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function(e, t) {
                            for (var n, r = a(e, i), o = r.length; o--;) e[n = H(e, r[o])] = !(t[n] = r[o])
                        }) : function(e) {
                            return a(e, 0, t)
                        }) : a
                    }
                },
                pseudos: {
                    not: se(function(e) {
                        var r = [],
                            o = [],
                            s = f(e.replace(W, "$1"));
                        return s[k] ? se(function(e, t, n, r) {
                            for (var o, i = s(e, null, r, []), a = e.length; a--;)(o = i[a]) && (e[a] = !(t[a] = o))
                        }) : function(e, t, n) {
                            return r[0] = e, s(r, null, n, o), r[0] = null, !o.pop()
                        }
                    }),
                    has: se(function(t) {
                        return function(e) {
                            return 0 < ie(t, e).length
                        }
                    }),
                    contains: se(function(t) {
                        return t = t.replace(Z, ee),
                            function(e) {
                                return -1 < (e.textContent || e.innerText || i(e)).indexOf(t)
                            }
                    }),
                    lang: se(function(n) {
                        return U.test(n || "") || ie.error("unsupported lang: " + n), n = n.replace(Z, ee).toLowerCase(),
                            function(e) {
                                var t;
                                do {
                                    if (t = S ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var t = n.location && n.location.hash;
                        return t && t.slice(1) === e.id
                    },
                    root: function(e) {
                        return e === a
                    },
                    focus: function(e) {
                        return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: de(!1),
                    disabled: de(!0),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !b.pseudos.empty(e)
                    },
                    header: function(e) {
                        return Y.test(e.nodeName)
                    },
                    input: function(e) {
                        return G.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: he(function() {
                        return [0]
                    }),
                    last: he(function(e, t) {
                        return [t - 1]
                    }),
                    eq: he(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: he(function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: he(function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: he(function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; 0 <= --r;) e.push(r);
                        return e
                    }),
                    gt: he(function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                        return e
                    })
                }
            }).pseudos.nth = b.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) b.pseudos[e] = fe(e);
        for (e in {
                submit: !0,
                reset: !0
            }) b.pseudos[e] = pe(e);

        function me() {}

        function ve(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function ye(s, e, t) {
            var u = e.dir,
                l = e.next,
                c = l || u,
                f = t && "parentNode" === c,
                p = r++;
            return e.first ? function(e, t, n) {
                for (; e = e[u];)
                    if (1 === e.nodeType || f) return s(e, t, n);
                return !1
            } : function(e, t, n) {
                var r, o, i, a = [E, p];
                if (n) {
                    for (; e = e[u];)
                        if ((1 === e.nodeType || f) && s(e, t, n)) return !0
                } else
                    for (; e = e[u];)
                        if (1 === e.nodeType || f)
                            if (o = (i = e[k] || (e[k] = {}))[e.uniqueID] || (i[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e;
                            else {
                                if ((r = o[c]) && r[0] === E && r[1] === p) return a[2] = r[2];
                                if ((o[c] = a)[2] = s(e, t, n)) return !0
                            } return !1
            }
        }

        function xe(o) {
            return 1 < o.length ? function(e, t, n) {
                for (var r = o.length; r--;)
                    if (!o[r](e, t, n)) return !1;
                return !0
            } : o[0]
        }

        function be(e, t, n, r, o) {
            for (var i, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(i = e[s]) && (n && !n(i, r, o) || (a.push(i), l && t.push(s)));
            return a
        }

        function we(d, h, g, m, v, e) {
            return m && !m[k] && (m = we(m)), v && !v[k] && (v = we(v, e)), se(function(e, t, n, r) {
                var o, i, a, s = [],
                    u = [],
                    l = t.length,
                    c = e || function(e, t, n) {
                        for (var r = 0, o = t.length; r < o; r++) ie(e, t[r], n);
                        return n
                    }(h || "*", n.nodeType ? [n] : n, []),
                    f = !d || !e && h ? c : be(c, s, d, n, r),
                    p = g ? v || (e ? d : l || m) ? [] : t : f;
                if (g && g(f, p, n, r), m)
                    for (o = be(p, u), m(o, [], n, r), i = o.length; i--;)(a = o[i]) && (p[u[i]] = !(f[u[i]] = a));
                if (e) {
                    if (v || d) {
                        if (v) {
                            for (o = [], i = p.length; i--;)(a = p[i]) && o.push(f[i] = a);
                            v(null, p = [], o, r)
                        }
                        for (i = p.length; i--;)(a = p[i]) && -1 < (o = v ? H(e, a) : s[i]) && (e[o] = !(t[o] = a))
                    }
                } else p = be(p === t ? p.splice(l, p.length) : p), v ? v(null, t, p, r) : q.apply(t, p)
            })
        }

        function Te(e) {
            for (var o, t, n, r = e.length, i = b.relative[e[0].type], a = i || b.relative[" "], s = i ? 1 : 0, u = ye(function(e) {
                    return e === o
                }, a, !0), l = ye(function(e) {
                    return -1 < H(o, e)
                }, a, !0), c = [function(e, t, n) {
                    var r = !i && (n || t !== w) || ((o = t).nodeType ? u(e, t, n) : l(e, t, n));
                    return o = null, r
                }]; s < r; s++)
                if (t = b.relative[e[s].type]) c = [ye(xe(c), t)];
                else {
                    if ((t = b.filter[e[s].type].apply(null, e[s].matches))[k]) {
                        for (n = ++s; n < r && !b.relative[e[n].type]; n++);
                        return we(1 < s && xe(c), 1 < s && ve(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(W, "$1"), t, s < n && Te(e.slice(s, n)), n < r && Te(e = e.slice(n)), n < r && ve(e))
                    }
                    c.push(t)
                }
            return xe(c)
        }
        return me.prototype = b.filters = b.pseudos, b.setFilters = new me, h = ie.tokenize = function(e, t) {
            var n, r, o, i, a, s, u, l = x[e + " "];
            if (l) return t ? 0 : l.slice(0);
            for (a = e, s = [], u = b.preFilter; a;) {
                for (i in n && !(r = B.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(o = [])), n = !1, (r = F.exec(a)) && (n = r.shift(), o.push({
                        value: n,
                        type: r[0].replace(W, " ")
                    }), a = a.slice(n.length)), b.filter) !(r = V[i].exec(a)) || u[i] && !(r = u[i](r)) || (n = r.shift(), o.push({
                    value: n,
                    type: i,
                    matches: r
                }), a = a.slice(n.length));
                if (!n) break
            }
            return t ? a.length : a ? ie.error(e) : x(e, s).slice(0)
        }, f = ie.compile = function(e, t) {
            var n, m, v, y, x, r, o = [],
                i = [],
                a = A[e + " "];
            if (!a) {
                for (t || (t = h(e)), n = t.length; n--;)(a = Te(t[n]))[k] ? o.push(a) : i.push(a);
                (a = A(e, (m = i, y = 0 < (v = o).length, x = 0 < m.length, r = function(e, t, n, r, o) {
                    var i, a, s, u = 0,
                        l = "0",
                        c = e && [],
                        f = [],
                        p = w,
                        d = e || x && b.find.TAG("*", o),
                        h = E += null == p ? 1 : Math.random() || .1,
                        g = d.length;
                    for (o && (w = t === C || t || o); l !== g && null != (i = d[l]); l++) {
                        if (x && i) {
                            for (a = 0, t || i.ownerDocument === C || (T(i), n = !S); s = m[a++];)
                                if (s(i, t || C, n)) {
                                    r.push(i);
                                    break
                                }
                            o && (E = h)
                        }
                        y && ((i = !s && i) && u--, e && c.push(i))
                    }
                    if (u += l, y && l !== u) {
                        for (a = 0; s = v[a++];) s(c, f, t, n);
                        if (e) {
                            if (0 < u)
                                for (; l--;) c[l] || f[l] || (f[l] = j.call(r));
                            f = be(f)
                        }
                        q.apply(r, f), o && !e && 0 < f.length && 1 < u + v.length && ie.uniqueSort(r)
                    }
                    return o && (E = h, w = p), c
                }, y ? se(r) : r))).selector = e
            }
            return a
        }, g = ie.select = function(e, t, n, r) {
            var o, i, a, s, u, l = "function" == typeof e && e,
                c = !r && h(e = l.selector || e);
            if (n = n || [], 1 === c.length) {
                if (2 < (i = c[0] = c[0].slice(0)).length && "ID" === (a = i[0]).type && 9 === t.nodeType && S && b.relative[i[1].type]) {
                    if (!(t = (b.find.ID(a.matches[0].replace(Z, ee), t) || [])[0])) return n;
                    l && (t = t.parentNode), e = e.slice(i.shift().value.length)
                }
                for (o = V.needsContext.test(e) ? 0 : i.length; o-- && (a = i[o], !b.relative[s = a.type]);)
                    if ((u = b.find[s]) && (r = u(a.matches[0].replace(Z, ee), K.test(i[0].type) && ge(t.parentNode) || t))) {
                        if (i.splice(o, 1), !(e = r.length && ve(i))) return q.apply(n, r), n;
                        break
                    }
            }
            return (l || f(e, c))(r, t, !S, n, !t || K.test(e) && ge(t.parentNode) || t), n
        }, d.sortStable = k.split("").sort(D).join("") === k, d.detectDuplicates = !!l, T(), d.sortDetached = ue(function(e) {
            return 1 & e.compareDocumentPosition(C.createElement("fieldset"))
        }), ue(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || le("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), d.attributes && ue(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || le("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), ue(function(e) {
            return null == e.getAttribute("disabled")
        }) || le($, function(e, t, n) {
            var r;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), ie
    }(C);
    k.find = h, k.expr = h.selectors, k.expr[":"] = k.expr.pseudos, k.uniqueSort = k.unique = h.uniqueSort, k.text = h.getText, k.isXMLDoc = h.isXML, k.contains = h.contains, k.escapeSelector = h.escape;
    var T = function(e, t, n) {
            for (var r = [], o = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (o && k(e).is(n)) break;
                    r.push(e)
                }
            return r
        },
        E = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        A = k.expr.match.needsContext;

    function D(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function j(e, n, r) {
        return y(n) ? k.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== r
        }) : n.nodeType ? k.grep(e, function(e) {
            return e === n !== r
        }) : "string" != typeof n ? k.grep(e, function(e) {
            return -1 < o.call(n, e) !== r
        }) : k.filter(n, e, r)
    }
    k.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? k.find.matchesSelector(r, e) ? [r] : [] : k.find.matches(e, k.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, k.fn.extend({
        find: function(e) {
            var t, n, r = this.length,
                o = this;
            if ("string" != typeof e) return this.pushStack(k(e).filter(function() {
                for (t = 0; t < r; t++)
                    if (k.contains(o[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) k.find(e, o[t], n);
            return 1 < r ? k.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(j(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(j(this, e || [], !0))
        },
        is: function(e) {
            return !!j(this, "string" == typeof e && A.test(e) ? k(e) : e || [], !1).length
        }
    });
    var L, q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (k.fn.init = function(e, t, n) {
        var r, o;
        if (!e) return this;
        if (n = n || L, "string" != typeof e) return e.nodeType ? (this[0] = e, this.length = 1, this) : y(e) ? void 0 !== n.ready ? n.ready(e) : e(k) : k.makeArray(e, this);
        if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : q.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
        if (r[1]) {
            if (t = t instanceof k ? t[0] : t, k.merge(this, k.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : S, !0)), N.test(r[1]) && k.isPlainObject(t))
                for (r in t) y(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
            return this
        }
        return (o = S.getElementById(r[2])) && (this[0] = o, this.length = 1), this
    }).prototype = k.fn, L = k(S);
    var M = /^(?:parents|prev(?:Until|All))/,
        H = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function $(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    k.fn.extend({
        has: function(e) {
            var t = k(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (k.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0,
                o = this.length,
                i = [],
                a = "string" != typeof e && k(e);
            if (!A.test(e))
                for (; r < o; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && k.find.matchesSelector(n, e))) {
                            i.push(n);
                            break
                        }
            return this.pushStack(1 < i.length ? k.uniqueSort(i) : i)
        },
        index: function(e) {
            return e ? "string" == typeof e ? o.call(k(e), this[0]) : o.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(k.uniqueSort(k.merge(this.get(), k(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), k.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return T(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return T(e, "parentNode", n)
        },
        next: function(e) {
            return $(e, "nextSibling")
        },
        prev: function(e) {
            return $(e, "previousSibling")
        },
        nextAll: function(e) {
            return T(e, "nextSibling")
        },
        prevAll: function(e) {
            return T(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return T(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return T(e, "previousSibling", n)
        },
        siblings: function(e) {
            return E((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return E(e.firstChild)
        },
        contents: function(e) {
            return D(e, "iframe") ? e.contentDocument : (D(e, "template") && (e = e.content || e), k.merge([], e.childNodes))
        }
    }, function(r, o) {
        k.fn[r] = function(e, t) {
            var n = k.map(this, o, e);
            return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = k.filter(t, n)), 1 < this.length && (H[r] || k.uniqueSort(n), M.test(r) && n.reverse()), this.pushStack(n)
        }
    });
    var I = /[^\x20\t\r\n\f]+/g;

    function O(e) {
        return e
    }

    function P(e) {
        throw e
    }

    function R(e, t, n, r) {
        var o;
        try {
            e && y(o = e.promise) ? o.call(e).done(t).fail(n) : e && y(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    k.Callbacks = function(r) {
        var e, n;
        r = "string" == typeof r ? (e = r, n = {}, k.each(e.match(I) || [], function(e, t) {
            n[t] = !0
        }), n) : k.extend({}, r);
        var o, t, i, a, s = [],
            u = [],
            l = -1,
            c = function() {
                for (a = a || r.once, i = o = !0; u.length; l = -1)
                    for (t = u.shift(); ++l < s.length;) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1);
                r.memory || (t = !1), o = !1, a && (s = t ? [] : "")
            },
            f = {
                add: function() {
                    return s && (t && !o && (l = s.length - 1, u.push(t)), function n(e) {
                        k.each(e, function(e, t) {
                            y(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t)
                        })
                    }(arguments), t && !o && c()), this
                },
                remove: function() {
                    return k.each(arguments, function(e, t) {
                        for (var n; - 1 < (n = k.inArray(t, s, n));) s.splice(n, 1), n <= l && l--
                    }), this
                },
                has: function(e) {
                    return e ? -1 < k.inArray(e, s) : 0 < s.length
                },
                empty: function() {
                    return s && (s = []), this
                },
                disable: function() {
                    return a = u = [], s = t = "", this
                },
                disabled: function() {
                    return !s
                },
                lock: function() {
                    return a = u = [], t || o || (s = t = ""), this
                },
                locked: function() {
                    return !!a
                },
                fireWith: function(e, t) {
                    return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), o || c()), this
                },
                fire: function() {
                    return f.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!i
                }
            };
        return f
    }, k.extend({
        Deferred: function(e) {
            var i = [
                    ["notify", "progress", k.Callbacks("memory"), k.Callbacks("memory"), 2],
                    ["resolve", "done", k.Callbacks("once memory"), k.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", k.Callbacks("once memory"), k.Callbacks("once memory"), 1, "rejected"]
                ],
                o = "pending",
                a = {
                    state: function() {
                        return o
                    },
                    always: function() {
                        return s.done(arguments).fail(arguments), this
                    },
                    catch: function(e) {
                        return a.then(null, e)
                    },
                    pipe: function() {
                        var o = arguments;
                        return k.Deferred(function(r) {
                            k.each(i, function(e, t) {
                                var n = y(o[t[4]]) && o[t[4]];
                                s[t[1]](function() {
                                    var e = n && n.apply(this, arguments);
                                    e && y(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                                })
                            }), o = null
                        }).promise()
                    },
                    then: function(t, n, r) {
                        var u = 0;

                        function l(o, i, a, s) {
                            return function() {
                                var n = this,
                                    r = arguments,
                                    e = function() {
                                        var e, t;
                                        if (!(o < u)) {
                                            if ((e = a.apply(n, r)) === i.promise()) throw new TypeError("Thenable self-resolution");
                                            t = e && ("object" == typeof e || "function" == typeof e) && e.then, y(t) ? s ? t.call(e, l(u, i, O, s), l(u, i, P, s)) : (u++, t.call(e, l(u, i, O, s), l(u, i, P, s), l(u, i, O, i.notifyWith))) : (a !== O && (n = void 0, r = [e]), (s || i.resolveWith)(n, r))
                                        }
                                    },
                                    t = s ? e : function() {
                                        try {
                                            e()
                                        } catch (e) {
                                            k.Deferred.exceptionHook && k.Deferred.exceptionHook(e, t.stackTrace), u <= o + 1 && (a !== P && (n = void 0, r = [e]), i.rejectWith(n, r))
                                        }
                                    };
                                o ? t() : (k.Deferred.getStackHook && (t.stackTrace = k.Deferred.getStackHook()), C.setTimeout(t))
                            }
                        }
                        return k.Deferred(function(e) {
                            i[0][3].add(l(0, e, y(r) ? r : O, e.notifyWith)), i[1][3].add(l(0, e, y(t) ? t : O)), i[2][3].add(l(0, e, y(n) ? n : P))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? k.extend(e, a) : a
                    }
                },
                s = {};
            return k.each(i, function(e, t) {
                var n = t[2],
                    r = t[5];
                a[t[1]] = n.add, r && n.add(function() {
                    o = r
                }, i[3 - e][2].disable, i[3 - e][3].disable, i[0][2].lock, i[0][3].lock), n.add(t[3].fire), s[t[0]] = function() {
                    return s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                }, s[t[0] + "With"] = n.fireWith
            }), a.promise(s), e && e.call(s, s), s
        },
        when: function(e) {
            var n = arguments.length,
                t = n,
                r = Array(t),
                o = s.call(arguments),
                i = k.Deferred(),
                a = function(t) {
                    return function(e) {
                        r[t] = this, o[t] = 1 < arguments.length ? s.call(arguments) : e, --n || i.resolveWith(r, o)
                    }
                };
            if (n <= 1 && (R(e, i.done(a(t)).resolve, i.reject, !n), "pending" === i.state() || y(o[t] && o[t].then))) return i.then();
            for (; t--;) R(o[t], a(t), i.reject);
            return i.promise()
        }
    });
    var _ = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    k.Deferred.exceptionHook = function(e, t) {
        C.console && C.console.warn && e && _.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }, k.readyException = function(e) {
        C.setTimeout(function() {
            throw e
        })
    };
    var W = k.Deferred();

    function B() {
        S.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), k.ready()
    }
    k.fn.ready = function(e) {
        return W.then(e).catch(function(e) {
            k.readyException(e)
        }), this
    }, k.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --k.readyWait : k.isReady) || (k.isReady = !0) !== e && 0 < --k.readyWait || W.resolveWith(S, [k])
        }
    }), k.ready.then = W.then, "complete" === S.readyState || "loading" !== S.readyState && !S.documentElement.doScroll ? C.setTimeout(k.ready) : (S.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B));
    var F = function(e, t, n, r, o, i, a) {
            var s = 0,
                u = e.length,
                l = null == n;
            if ("object" === w(n))
                for (s in o = !0, n) F(e, t, s, n[s], !0, i, a);
            else if (void 0 !== r && (o = !0, y(r) || (a = !0), l && (t = a ? (t.call(e, r), null) : (l = t, function(e, t, n) {
                    return l.call(k(e), n)
                })), t))
                for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return o ? e : l ? t.call(e) : u ? t(e[0], n) : i
        },
        z = /^-ms-/,
        X = /-([a-z])/g;

    function U(e, t) {
        return t.toUpperCase()
    }

    function V(e) {
        return e.replace(z, "ms-").replace(X, U)
    }
    var G = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function Y() {
        this.expando = k.expando + Y.uid++
    }
    Y.uid = 1, Y.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, G(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var r, o = this.cache(e);
            if ("string" == typeof t) o[V(t)] = n;
            else
                for (r in t) o[V(r)] = t[r];
            return o
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][V(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(V) : (t = V(t)) in r ? [t] : t.match(I) || []).length;
                    for (; n--;) delete r[t[n]]
                }(void 0 === t || k.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !k.isEmptyObject(t)
        }
    };
    var Q = new Y,
        J = new Y,
        K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Z = /[A-Z]/g;

    function ee(e, t, n) {
        var r, o;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(Z, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                try {
                    n = "true" === (o = n) || "false" !== o && ("null" === o ? null : o === +o + "" ? +o : K.test(o) ? JSON.parse(o) : o)
                } catch (e) {}
                J.set(e, t, n)
            } else n = void 0;
        return n
    }
    k.extend({
        hasData: function(e) {
            return J.hasData(e) || Q.hasData(e)
        },
        data: function(e, t, n) {
            return J.access(e, t, n)
        },
        removeData: function(e, t) {
            J.remove(e, t)
        },
        _data: function(e, t, n) {
            return Q.access(e, t, n)
        },
        _removeData: function(e, t) {
            Q.remove(e, t)
        }
    }), k.fn.extend({
        data: function(n, e) {
            var t, r, o, i = this[0],
                a = i && i.attributes;
            if (void 0 !== n) return "object" == typeof n ? this.each(function() {
                J.set(this, n)
            }) : F(this, function(e) {
                var t;
                if (i && void 0 === e) return void 0 !== (t = J.get(i, n)) ? t : void 0 !== (t = ee(i, n)) ? t : void 0;
                this.each(function() {
                    J.set(this, n, e)
                })
            }, null, e, 1 < arguments.length, null, !0);
            if (this.length && (o = J.get(i), 1 === i.nodeType && !Q.get(i, "hasDataAttrs"))) {
                for (t = a.length; t--;) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = V(r.slice(5)), ee(i, r, o[r]));
                Q.set(i, "hasDataAttrs", !0)
            }
            return o
        },
        removeData: function(e) {
            return this.each(function() {
                J.remove(this, e)
            })
        }
    }), k.extend({
        queue: function(e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = Q.get(e, t), n && (!r || Array.isArray(n) ? r = Q.access(e, t, k.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = k.queue(e, t),
                r = n.length,
                o = n.shift(),
                i = k._queueHooks(e, t);
            "inprogress" === o && (o = n.shift(), r--), o && ("fx" === t && n.unshift("inprogress"), delete i.stop, o.call(e, function() {
                k.dequeue(e, t)
            }, i)), !r && i && i.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Q.get(e, n) || Q.access(e, n, {
                empty: k.Callbacks("once memory").add(function() {
                    Q.remove(e, [t + "queue", n])
                })
            })
        }
    }), k.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? k.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = k.queue(this, t, n);
                k._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && k.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                k.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
                o = k.Deferred(),
                i = this,
                a = this.length,
                s = function() {
                    --r || o.resolveWith(i, [i])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = Q.get(i[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), o.promise(t)
        }
    });
    var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ne = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$", "i"),
        re = ["Top", "Right", "Bottom", "Left"],
        oe = function(e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && k.contains(e.ownerDocument, e) && "none" === k.css(e, "display")
        },
        ie = function(e, t, n, r) {
            var o, i, a = {};
            for (i in t) a[i] = e.style[i], e.style[i] = t[i];
            for (i in o = n.apply(e, r || []), t) e.style[i] = a[i];
            return o
        };

    function ae(e, t, n, r) {
        var o, i, a = 20,
            s = r ? function() {
                return r.cur()
            } : function() {
                return k.css(e, t, "")
            },
            u = s(),
            l = n && n[3] || (k.cssNumber[t] ? "" : "px"),
            c = (k.cssNumber[t] || "px" !== l && +u) && ne.exec(k.css(e, t));
        if (c && c[3] !== l) {
            for (u /= 2, l = l || c[3], c = +u || 1; a--;) k.style(e, t, c + l), (1 - i) * (1 - (i = s() / u || .5)) <= 0 && (a = 0), c /= i;
            c *= 2, k.style(e, t, c + l), n = n || []
        }
        return n && (c = +c || +u || 0, o = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = o)), o
    }
    var se = {};

    function ue(e, t) {
        for (var n, r, o, i, a, s, u, l = [], c = 0, f = e.length; c < f; c++)(r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Q.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && oe(r) && (l[c] = (u = a = i = void 0, a = (o = r).ownerDocument, s = o.nodeName, (u = se[s]) || (i = a.body.appendChild(a.createElement(s)), u = k.css(i, "display"), i.parentNode.removeChild(i), "none" === u && (u = "block"), se[s] = u)))) : "none" !== n && (l[c] = "none", Q.set(r, "display", n)));
        for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
        return e
    }
    k.fn.extend({
        show: function() {
            return ue(this, !0)
        },
        hide: function() {
            return ue(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                oe(this) ? k(this).show() : k(this).hide()
            })
        }
    });
    var le = /^(?:checkbox|radio)$/i,
        ce = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        fe = /^$|^module$|\/(?:java|ecma)script/i,
        pe = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

    function de(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && D(e, t) ? k.merge([e], n) : n
    }

    function he(e, t) {
        for (var n = 0, r = e.length; n < r; n++) Q.set(e[n], "globalEval", !t || Q.get(t[n], "globalEval"))
    }
    pe.optgroup = pe.option, pe.tbody = pe.tfoot = pe.colgroup = pe.caption = pe.thead, pe.th = pe.td;
    var ge, me, ve = /<|&#?\w+;/;

    function ye(e, t, n, r, o) {
        for (var i, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((i = e[d]) || 0 === i)
                if ("object" === w(i)) k.merge(p, i.nodeType ? [i] : i);
                else if (ve.test(i)) {
            for (a = a || f.appendChild(t.createElement("div")), s = (ce.exec(i) || ["", ""])[1].toLowerCase(), u = pe[s] || pe._default, a.innerHTML = u[1] + k.htmlPrefilter(i) + u[2], c = u[0]; c--;) a = a.lastChild;
            k.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
        } else p.push(t.createTextNode(i));
        for (f.textContent = "", d = 0; i = p[d++];)
            if (r && -1 < k.inArray(i, r)) o && o.push(i);
            else if (l = k.contains(i.ownerDocument, i), a = de(f.appendChild(i), "script"), l && he(a), n)
            for (c = 0; i = a[c++];) fe.test(i.type || "") && n.push(i);
        return f
    }
    ge = S.createDocumentFragment().appendChild(S.createElement("div")), (me = S.createElement("input")).setAttribute("type", "radio"), me.setAttribute("checked", "checked"), me.setAttribute("name", "t"), ge.appendChild(me), v.checkClone = ge.cloneNode(!0).cloneNode(!0).lastChild.checked, ge.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!ge.cloneNode(!0).lastChild.defaultValue;
    var xe = S.documentElement,
        be = /^key/,
        we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Te = /^([^.]*)(?:\.(.+)|)/;

    function Ce() {
        return !0
    }

    function Se() {
        return !1
    }

    function ke() {
        try {
            return S.activeElement
        } catch (e) {}
    }

    function Ee(e, t, n, r, o, i) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n, n = void 0), t) Ee(e, s, n, r, t[s], i);
            return e
        }
        if (null == r && null == o ? (o = n, r = n = void 0) : null == o && ("string" == typeof n ? (o = r, r = void 0) : (o = r, r = n, n = void 0)), !1 === o) o = Se;
        else if (!o) return e;
        return 1 === i && (a = o, (o = function(e) {
            return k().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = k.guid++)), e.each(function() {
            k.event.add(this, t, o, r, n)
        })
    }
    k.event = {
        global: {},
        add: function(t, e, n, r, o) {
            var i, a, s, u, l, c, f, p, d, h, g, m = Q.get(t);
            if (m)
                for (n.handler && (n = (i = n).handler, o = i.selector), o && k.find.matchesSelector(xe, o), n.guid || (n.guid = k.guid++), (u = m.events) || (u = m.events = {}), (a = m.handle) || (a = m.handle = function(e) {
                        return void 0 !== k && k.event.triggered !== e.type ? k.event.dispatch.apply(t, arguments) : void 0
                    }), l = (e = (e || "").match(I) || [""]).length; l--;) d = g = (s = Te.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = k.event.special[d] || {}, d = (o ? f.delegateType : f.bindType) || d, f = k.event.special[d] || {}, c = k.extend({
                    type: d,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    needsContext: o && k.expr.match.needsContext.test(o),
                    namespace: h.join(".")
                }, i), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), o ? p.splice(p.delegateCount++, 0, c) : p.push(c), k.event.global[d] = !0)
        },
        remove: function(e, t, n, r, o) {
            var i, a, s, u, l, c, f, p, d, h, g, m = Q.hasData(e) && Q.get(e);
            if (m && (u = m.events)) {
                for (l = (t = (t || "").match(I) || [""]).length; l--;)
                    if (d = g = (s = Te.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
                        for (f = k.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = i = p.length; i--;) c = p[i], !o && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(i, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, m.handle) || k.removeEvent(e, d, m.handle), delete u[d])
                    } else
                        for (d in u) k.event.remove(e, d + t[l], n, r, !0);
                k.isEmptyObject(u) && Q.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, o, i, a, s = k.event.fix(e),
                u = new Array(arguments.length),
                l = (Q.get(this, "events") || {})[s.type] || [],
                c = k.event.special[s.type] || {};
            for (u[0] = s, t = 1; t < arguments.length; t++) u[t] = arguments[t];
            if (s.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
                for (a = k.event.handlers.call(this, s, l), t = 0;
                    (o = a[t++]) && !s.isPropagationStopped();)
                    for (s.currentTarget = o.elem, n = 0;
                        (i = o.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !s.rnamespace.test(i.namespace) || (s.handleObj = i, s.data = i.data, void 0 !== (r = ((k.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, u)) && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, s), s.result
            }
        },
        handlers: function(e, t) {
            var n, r, o, i, a, s = [],
                u = t.delegateCount,
                l = e.target;
            if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (i = [], a = {}, n = 0; n < u; n++) void 0 === a[o = (r = t[n]).selector + " "] && (a[o] = r.needsContext ? -1 < k(o, this).index(l) : k.find(o, this, null, [l]).length), a[o] && i.push(r);
                        i.length && s.push({
                            elem: l,
                            handlers: i
                        })
                    }
            return l = this, u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }), s
        },
        addProp: function(t, e) {
            Object.defineProperty(k.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: y(e) ? function() {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[t]
                },
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(e) {
            return e[k.expando] ? e : new k.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== ke() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === ke() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && D(this, "input")) return this.click(), !1
                },
                _default: function(e) {
                    return D(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, k.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, k.Event = function(e, t) {
        if (!(this instanceof k.Event)) return new k.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ce : Se, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && k.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[k.expando] = !0
    }, k.Event.prototype = {
        constructor: k.Event,
        isDefaultPrevented: Se,
        isPropagationStopped: Se,
        isImmediatePropagationStopped: Se,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = Ce, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = Ce, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Ce, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, k.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && be.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && we.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, k.event.addProp), k.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, o) {
        k.event.special[e] = {
            delegateType: o,
            bindType: o,
            handle: function(e) {
                var t, n = e.relatedTarget,
                    r = e.handleObj;
                return n && (n === this || k.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = o), t
            }
        }
    }), k.fn.extend({
        on: function(e, t, n, r) {
            return Ee(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return Ee(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, o;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, k(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" != typeof e) return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Se), this.each(function() {
                k.event.remove(this, e, n, t)
            });
            for (o in e) this.off(o, t, e[o]);
            return this
        }
    });
    var Ae = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        De = /<script|<style|<link/i,
        Ne = /checked\s*(?:[^=]|=\s*.checked.)/i,
        je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Le(e, t) {
        return D(e, "table") && D(11 !== t.nodeType ? t : t.firstChild, "tr") && k(e).children("tbody")[0] || e
    }

    function qe(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function Me(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function He(e, t) {
        var n, r, o, i, a, s, u, l;
        if (1 === t.nodeType) {
            if (Q.hasData(e) && (i = Q.access(e), a = Q.set(t, i), l = i.events))
                for (o in delete a.handle, a.events = {}, l)
                    for (n = 0, r = l[o].length; n < r; n++) k.event.add(t, o, l[o][n]);
            J.hasData(e) && (s = J.access(e), u = k.extend({}, s), J.set(t, u))
        }
    }

    function $e(n, r, o, i) {
        r = g.apply([], r);
        var e, t, a, s, u, l, c = 0,
            f = n.length,
            p = f - 1,
            d = r[0],
            h = y(d);
        if (h || 1 < f && "string" == typeof d && !v.checkClone && Ne.test(d)) return n.each(function(e) {
            var t = n.eq(e);
            h && (r[0] = d.call(this, e, t.html())), $e(t, r, o, i)
        });
        if (f && (t = (e = ye(r, n[0].ownerDocument, !1, n, i)).firstChild, 1 === e.childNodes.length && (e = t), t || i)) {
            for (s = (a = k.map(de(e, "script"), qe)).length; c < f; c++) u = e, c !== p && (u = k.clone(u, !0, !0), s && k.merge(a, de(u, "script"))), o.call(n[c], u, c);
            if (s)
                for (l = a[a.length - 1].ownerDocument, k.map(a, Me), c = 0; c < s; c++) u = a[c], fe.test(u.type || "") && !Q.access(u, "globalEval") && k.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? k._evalUrl && k._evalUrl(u.src) : b(u.textContent.replace(je, ""), l, u))
        }
        return n
    }

    function Ie(e, t, n) {
        for (var r, o = t ? k.filter(t, e) : e, i = 0; null != (r = o[i]); i++) n || 1 !== r.nodeType || k.cleanData(de(r)), r.parentNode && (n && k.contains(r.ownerDocument, r) && he(de(r, "script")), r.parentNode.removeChild(r));
        return e
    }
    k.extend({
        htmlPrefilter: function(e) {
            return e.replace(Ae, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var r, o, i, a, s, u, l, c = e.cloneNode(!0),
                f = k.contains(e.ownerDocument, e);
            if (!(v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || k.isXMLDoc(e)))
                for (a = de(c), r = 0, o = (i = de(e)).length; r < o; r++) s = i[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && le.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (i = i || de(e), a = a || de(c), r = 0, o = i.length; r < o; r++) He(i[r], a[r]);
                else He(e, c);
            return 0 < (a = de(c, "script")).length && he(a, !f && de(e, "script")), c
        },
        cleanData: function(e) {
            for (var t, n, r, o = k.event.special, i = 0; void 0 !== (n = e[i]); i++)
                if (G(n)) {
                    if (t = n[Q.expando]) {
                        if (t.events)
                            for (r in t.events) o[r] ? k.event.remove(n, r) : k.removeEvent(n, r, t.handle);
                        n[Q.expando] = void 0
                    }
                    n[J.expando] && (n[J.expando] = void 0)
                }
        }
    }), k.fn.extend({
        detach: function(e) {
            return Ie(this, e, !0)
        },
        remove: function(e) {
            return Ie(this, e)
        },
        text: function(e) {
            return F(this, function(e) {
                return void 0 === e ? k.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return $e(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Le(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return $e(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Le(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return $e(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return $e(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (k.cleanData(de(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return k.clone(this, e, t)
            })
        },
        html: function(e) {
            return F(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !De.test(e) && !pe[(ce.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = k.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (k.cleanData(de(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return $e(this, arguments, function(e) {
                var t = this.parentNode;
                k.inArray(this, n) < 0 && (k.cleanData(de(this)), t && t.replaceChild(e, this))
            }, n)
        }
    }), k.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, a) {
        k.fn[e] = function(e) {
            for (var t, n = [], r = k(e), o = r.length - 1, i = 0; i <= o; i++) t = i === o ? this : this.clone(!0), k(r[i])[a](t), u.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var Oe = new RegExp("^(" + te + ")(?!px)[a-z%]+$", "i"),
        Pe = function(e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = C), t.getComputedStyle(e)
        },
        Re = new RegExp(re.join("|"), "i");

    function _e(e, t, n) {
        var r, o, i, a, s = e.style;
        return (n = n || Pe(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || k.contains(e.ownerDocument, e) || (a = k.style(e, t)), !v.pixelBoxStyles() && Oe.test(a) && Re.test(t) && (r = s.width, o = s.minWidth, i = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = o, s.maxWidth = i)), void 0 !== a ? a + "" : a
    }

    function We(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }! function() {
        function e() {
            if (u) {
                s.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", xe.appendChild(s).appendChild(u);
                var e = C.getComputedStyle(u);
                n = "1%" !== e.top, a = 12 === t(e.marginLeft), u.style.right = "60%", i = 36 === t(e.right), r = 36 === t(e.width), u.style.position = "absolute", o = 36 === u.offsetWidth || "absolute", xe.removeChild(s), u = null
            }
        }

        function t(e) {
            return Math.round(parseFloat(e))
        }
        var n, r, o, i, a, s = S.createElement("div"),
            u = S.createElement("div");
        u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === u.style.backgroundClip, k.extend(v, {
            boxSizingReliable: function() {
                return e(), r
            },
            pixelBoxStyles: function() {
                return e(), i
            },
            pixelPosition: function() {
                return e(), n
            },
            reliableMarginLeft: function() {
                return e(), a
            },
            scrollboxSize: function() {
                return e(), o
            }
        }))
    }();
    var Be = /^(none|table(?!-c[ea]).+)/,
        Fe = /^--/,
        ze = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Xe = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Ue = ["Webkit", "Moz", "ms"],
        Ve = S.createElement("div").style;

    function Ge(e) {
        var t = k.cssProps[e];
        return t || (t = k.cssProps[e] = function(e) {
            if (e in Ve) return e;
            for (var t = e[0].toUpperCase() + e.slice(1), n = Ue.length; n--;)
                if ((e = Ue[n] + t) in Ve) return e
        }(e) || e), t
    }

    function Ye(e, t, n) {
        var r = ne.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function Qe(e, t, n, r, o, i) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === n && (u += k.css(e, n + re[a], !0, o)), r ? ("content" === n && (u -= k.css(e, "padding" + re[a], !0, o)), "margin" !== n && (u -= k.css(e, "border" + re[a] + "Width", !0, o))) : (u += k.css(e, "padding" + re[a], !0, o), "padding" !== n ? u += k.css(e, "border" + re[a] + "Width", !0, o) : s += k.css(e, "border" + re[a] + "Width", !0, o));
        return !r && 0 <= i && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - i - u - s - .5))), u
    }

    function Je(e, t, n) {
        var r = Pe(e),
            o = _e(e, t, r),
            i = "border-box" === k.css(e, "boxSizing", !1, r),
            a = i;
        if (Oe.test(o)) {
            if (!n) return o;
            o = "auto"
        }
        return a = a && (v.boxSizingReliable() || o === e.style[t]), ("auto" === o || !parseFloat(o) && "inline" === k.css(e, "display", !1, r)) && (o = e["offset" + t[0].toUpperCase() + t.slice(1)], a = !0), (o = parseFloat(o) || 0) + Qe(e, t, n || (i ? "border" : "content"), a, r, o) + "px"
    }

    function Ke(e, t, n, r, o) {
        return new Ke.prototype.init(e, t, n, r, o)
    }
    k.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = _e(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, i, a, s = V(t),
                    u = Fe.test(t),
                    l = e.style;
                if (u || (t = Ge(s)), a = k.cssHooks[t] || k.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (o = a.get(e, !1, r)) ? o : l[t];
                "string" === (i = typeof n) && (o = ne.exec(n)) && o[1] && (n = ae(e, t, o), i = "number"), null != n && n == n && ("number" === i && (n += o && o[3] || (k.cssNumber[s] ? "" : "px")), v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var o, i, a, s = V(t);
            return Fe.test(t) || (t = Ge(s)), (a = k.cssHooks[t] || k.cssHooks[s]) && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = _e(e, t, r)), "normal" === o && t in Xe && (o = Xe[t]), "" === n || n ? (i = parseFloat(o), !0 === n || isFinite(i) ? i || 0 : o) : o
        }
    }), k.each(["height", "width"], function(e, s) {
        k.cssHooks[s] = {
            get: function(e, t, n) {
                if (t) return !Be.test(k.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Je(e, s, n) : ie(e, ze, function() {
                    return Je(e, s, n)
                })
            },
            set: function(e, t, n) {
                var r, o = Pe(e),
                    i = "border-box" === k.css(e, "boxSizing", !1, o),
                    a = n && Qe(e, s, n, i, o);
                return i && v.scrollboxSize() === o.position && (a -= Math.ceil(e["offset" + s[0].toUpperCase() + s.slice(1)] - parseFloat(o[s]) - Qe(e, s, "border", !1, o) - .5)), a && (r = ne.exec(t)) && "px" !== (r[3] || "px") && (e.style[s] = t, t = k.css(e, s)), Ye(0, t, a)
            }
        }
    }), k.cssHooks.marginLeft = We(v.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(_e(e, "marginLeft")) || e.getBoundingClientRect().left - ie(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px"
    }), k.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(o, i) {
        k.cssHooks[o + i] = {
            expand: function(e) {
                for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[o + re[t] + i] = r[t] || r[t - 2] || r[0];
                return n
            }
        }, "margin" !== o && (k.cssHooks[o + i].set = Ye)
    }), k.fn.extend({
        css: function(e, t) {
            return F(this, function(e, t, n) {
                var r, o, i = {},
                    a = 0;
                if (Array.isArray(t)) {
                    for (r = Pe(e), o = t.length; a < o; a++) i[t[a]] = k.css(e, t[a], !1, r);
                    return i
                }
                return void 0 !== n ? k.style(e, t, n) : k.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }), ((k.Tween = Ke).prototype = {
        constructor: Ke,
        init: function(e, t, n, r, o, i) {
            this.elem = e, this.prop = n, this.easing = o || k.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = i || (k.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = Ke.propHooks[this.prop];
            return e && e.get ? e.get(this) : Ke.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = Ke.propHooks[this.prop];
            return this.options.duration ? this.pos = t = k.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Ke.propHooks._default.set(this), this
        }
    }).init.prototype = Ke.prototype, (Ke.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = k.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                k.fx.step[e.prop] ? k.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[k.cssProps[e.prop]] && !k.cssHooks[e.prop] ? e.elem[e.prop] = e.now : k.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = Ke.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, k.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, k.fx = Ke.prototype.init, k.fx.step = {};
    var Ze, et, tt, nt, rt = /^(?:toggle|show|hide)$/,
        ot = /queueHooks$/;

    function it() {
        et && (!1 === S.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(it) : C.setTimeout(it, k.fx.interval), k.fx.tick())
    }

    function at() {
        return C.setTimeout(function() {
            Ze = void 0
        }), Ze = Date.now()
    }

    function st(e, t) {
        var n, r = 0,
            o = {
                height: e
            };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) o["margin" + (n = re[r])] = o["padding" + n] = e;
        return t && (o.opacity = o.width = e), o
    }

    function ut(e, t, n) {
        for (var r, o = (lt.tweeners[t] || []).concat(lt.tweeners["*"]), i = 0, a = o.length; i < a; i++)
            if (r = o[i].call(n, t, e)) return r
    }

    function lt(i, e, t) {
        var n, a, r = 0,
            o = lt.prefilters.length,
            s = k.Deferred().always(function() {
                delete u.elem
            }),
            u = function() {
                if (a) return !1;
                for (var e = Ze || at(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, o = l.tweens.length; r < o; r++) l.tweens[r].run(n);
                return s.notifyWith(i, [l, n, t]), n < 1 && o ? t : (o || s.notifyWith(i, [l, 1, 0]), s.resolveWith(i, [l]), !1)
            },
            l = s.promise({
                elem: i,
                props: k.extend({}, e),
                opts: k.extend(!0, {
                    specialEasing: {},
                    easing: k.easing._default
                }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: Ze || at(),
                duration: t.duration,
                tweens: [],
                createTween: function(e, t) {
                    var n = k.Tween(i, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                    return l.tweens.push(n), n
                },
                stop: function(e) {
                    var t = 0,
                        n = e ? l.tweens.length : 0;
                    if (a) return this;
                    for (a = !0; t < n; t++) l.tweens[t].run(1);
                    return e ? (s.notifyWith(i, [l, 1, 0]), s.resolveWith(i, [l, e])) : s.rejectWith(i, [l, e]), this
                }
            }),
            c = l.props;
        for (! function(e, t) {
                var n, r, o, i, a;
                for (n in e)
                    if (o = t[r = V(n)], i = e[n], Array.isArray(i) && (o = i[1], i = e[n] = i[0]), n !== r && (e[r] = i, delete e[n]), (a = k.cssHooks[r]) && "expand" in a)
                        for (n in i = a.expand(i), delete e[r], i) n in e || (e[n] = i[n], t[n] = o);
                    else t[r] = o
            }(c, l.opts.specialEasing); r < o; r++)
            if (n = lt.prefilters[r].call(l, i, c, l.opts)) return y(n.stop) && (k._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
        return k.map(c, ut, l), y(l.opts.start) && l.opts.start.call(i, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), k.fx.timer(k.extend(u, {
            elem: i,
            anim: l,
            queue: l.opts.queue
        })), l
    }
    k.Animation = k.extend(lt, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return ae(n.elem, e, ne.exec(t), n), n
            }]
        },
        tweener: function(e, t) {
            for (var n, r = 0, o = (e = y(e) ? (t = e, ["*"]) : e.match(I)).length; r < o; r++) n = e[r], lt.tweeners[n] = lt.tweeners[n] || [], lt.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var r, o, i, a, s, u, l, c, f = "width" in t || "height" in t,
                p = this,
                d = {},
                h = e.style,
                g = e.nodeType && oe(e),
                m = Q.get(e, "fxshow");
            for (r in n.queue || (null == (a = k._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
                    a.unqueued || s()
                }), a.unqueued++, p.always(function() {
                    p.always(function() {
                        a.unqueued--, k.queue(e, "fx").length || a.empty.fire()
                    })
                })), t)
                if (o = t[r], rt.test(o)) {
                    if (delete t[r], i = i || "toggle" === o, o === (g ? "hide" : "show")) {
                        if ("show" !== o || !m || void 0 === m[r]) continue;
                        g = !0
                    }
                    d[r] = m && m[r] || k.style(e, r)
                }
            if ((u = !k.isEmptyObject(t)) || !k.isEmptyObject(d))
                for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = m && m.display) && (l = Q.get(e, "display")), "none" === (c = k.css(e, "display")) && (l ? c = l : (ue([e], !0), l = e.style.display || l, c = k.css(e, "display"), ue([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === k.css(e, "float") && (u || (p.done(function() {
                        h.display = l
                    }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function() {
                        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                    })), u = !1, d) u || (m ? "hidden" in m && (g = m.hidden) : m = Q.access(e, "fxshow", {
                    display: l
                }), i && (m.hidden = !g), g && ue([e], !0), p.done(function() {
                    for (r in g || ue([e]), Q.remove(e, "fxshow"), d) k.style(e, r, d[r])
                })), u = ut(g ? m[r] : 0, r, p), r in m || (m[r] = u.start, g && (u.end = u.start, u.start = 0))
        }],
        prefilter: function(e, t) {
            t ? lt.prefilters.unshift(e) : lt.prefilters.push(e)
        }
    }), k.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? k.extend({}, e) : {
            complete: n || !n && t || y(e) && e,
            duration: e,
            easing: n && t || t && !y(t) && t
        };
        return k.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in k.fx.speeds ? r.duration = k.fx.speeds[r.duration] : r.duration = k.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            y(r.old) && r.old.call(this), r.queue && k.dequeue(this, r.queue)
        }, r
    }, k.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(oe).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(t, e, n, r) {
            var o = k.isEmptyObject(t),
                i = k.speed(e, n, r),
                a = function() {
                    var e = lt(this, k.extend({}, t), i);
                    (o || Q.get(this, "finish")) && e.stop(!0)
                };
            return a.finish = a, o || !1 === i.queue ? this.each(a) : this.queue(i.queue, a)
        },
        stop: function(o, e, i) {
            var a = function(e) {
                var t = e.stop;
                delete e.stop, t(i)
            };
            return "string" != typeof o && (i = e, e = o, o = void 0), e && !1 !== o && this.queue(o || "fx", []), this.each(function() {
                var e = !0,
                    t = null != o && o + "queueHooks",
                    n = k.timers,
                    r = Q.get(this);
                if (t) r[t] && r[t].stop && a(r[t]);
                else
                    for (t in r) r[t] && r[t].stop && ot.test(t) && a(r[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != o && n[t].queue !== o || (n[t].anim.stop(i), e = !1, n.splice(t, 1));
                !e && i || k.dequeue(this, o)
            })
        },
        finish: function(a) {
            return !1 !== a && (a = a || "fx"), this.each(function() {
                var e, t = Q.get(this),
                    n = t[a + "queue"],
                    r = t[a + "queueHooks"],
                    o = k.timers,
                    i = n ? n.length : 0;
                for (t.finish = !0, k.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === a && (o[e].anim.stop(!0), o.splice(e, 1));
                for (e = 0; e < i; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }), k.each(["toggle", "show", "hide"], function(e, r) {
        var o = k.fn[r];
        k.fn[r] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? o.apply(this, arguments) : this.animate(st(r, !0), e, t, n)
        }
    }), k.each({
        slideDown: st("show"),
        slideUp: st("hide"),
        slideToggle: st("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, r) {
        k.fn[e] = function(e, t, n) {
            return this.animate(r, e, t, n)
        }
    }), k.timers = [], k.fx.tick = function() {
        var e, t = 0,
            n = k.timers;
        for (Ze = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || k.fx.stop(), Ze = void 0
    }, k.fx.timer = function(e) {
        k.timers.push(e), k.fx.start()
    }, k.fx.interval = 13, k.fx.start = function() {
        et || (et = !0, it())
    }, k.fx.stop = function() {
        et = null
    }, k.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, k.fn.delay = function(r, e) {
        return r = k.fx && k.fx.speeds[r] || r, e = e || "fx", this.queue(e, function(e, t) {
            var n = C.setTimeout(e, r);
            t.stop = function() {
                C.clearTimeout(n)
            }
        })
    }, tt = S.createElement("input"), nt = S.createElement("select").appendChild(S.createElement("option")), tt.type = "checkbox", v.checkOn = "" !== tt.value, v.optSelected = nt.selected, (tt = S.createElement("input")).value = "t", tt.type = "radio", v.radioValue = "t" === tt.value;
    var ct, ft = k.expr.attrHandle;
    k.fn.extend({
        attr: function(e, t) {
            return F(this, k.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                k.removeAttr(this, e)
            })
        }
    }), k.extend({
        attr: function(e, t, n) {
            var r, o, i = e.nodeType;
            if (3 !== i && 8 !== i && 2 !== i) return void 0 === e.getAttribute ? k.prop(e, t, n) : (1 === i && k.isXMLDoc(e) || (o = k.attrHooks[t.toLowerCase()] || (k.expr.match.bool.test(t) ? ct : void 0)), void 0 !== n ? null === n ? void k.removeAttr(e, t) : o && "set" in o && void 0 !== (r = o.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (r = o.get(e, t)) ? r : null == (r = k.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!v.radioValue && "radio" === t && D(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0,
                o = t && t.match(I);
            if (o && 1 === e.nodeType)
                for (; n = o[r++];) e.removeAttribute(n)
        }
    }), ct = {
        set: function(e, t, n) {
            return !1 === t ? k.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, k.each(k.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var a = ft[t] || k.find.attr;
        ft[t] = function(e, t, n) {
            var r, o, i = t.toLowerCase();
            return n || (o = ft[i], ft[i] = r, r = null != a(e, t, n) ? i : null, ft[i] = o), r
        }
    });
    var pt = /^(?:input|select|textarea|button)$/i,
        dt = /^(?:a|area)$/i;

    function ht(e) {
        return (e.match(I) || []).join(" ")
    }

    function gt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function mt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(I) || []
    }
    k.fn.extend({
        prop: function(e, t) {
            return F(this, k.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[k.propFix[e] || e]
            })
        }
    }), k.extend({
        prop: function(e, t, n) {
            var r, o, i = e.nodeType;
            if (3 !== i && 8 !== i && 2 !== i) return 1 === i && k.isXMLDoc(e) || (t = k.propFix[t] || t, o = k.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (r = o.set(e, n, t)) ? r : e[t] = n : o && "get" in o && null !== (r = o.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = k.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : pt.test(e.nodeName) || dt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), v.optSelected || (k.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), k.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        k.propFix[this.toLowerCase()] = this
    }), k.fn.extend({
        addClass: function(t) {
            var e, n, r, o, i, a, s, u = 0;
            if (y(t)) return this.each(function(e) {
                k(this).addClass(t.call(this, e, gt(this)))
            });
            if ((e = mt(t)).length)
                for (; n = this[u++];)
                    if (o = gt(n), r = 1 === n.nodeType && " " + ht(o) + " ") {
                        for (a = 0; i = e[a++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                        o !== (s = ht(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, r, o, i, a, s, u = 0;
            if (y(t)) return this.each(function(e) {
                k(this).removeClass(t.call(this, e, gt(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((e = mt(t)).length)
                for (; n = this[u++];)
                    if (o = gt(n), r = 1 === n.nodeType && " " + ht(o) + " ") {
                        for (a = 0; i = e[a++];)
                            for (; - 1 < r.indexOf(" " + i + " ");) r = r.replace(" " + i + " ", " ");
                        o !== (s = ht(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(o, t) {
            var i = typeof o,
                a = "string" === i || Array.isArray(o);
            return "boolean" == typeof t && a ? t ? this.addClass(o) : this.removeClass(o) : y(o) ? this.each(function(e) {
                k(this).toggleClass(o.call(this, e, gt(this), t), t)
            }) : this.each(function() {
                var e, t, n, r;
                if (a)
                    for (t = 0, n = k(this), r = mt(o); e = r[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                else void 0 !== o && "boolean" !== i || ((e = gt(this)) && Q.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === o ? "" : Q.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++];)
                if (1 === n.nodeType && -1 < (" " + ht(gt(n)) + " ").indexOf(t)) return !0;
            return !1
        }
    });
    var vt = /\r/g;
    k.fn.extend({
        val: function(n) {
            var r, e, o, t = this[0];
            return arguments.length ? (o = y(n), this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = o ? n.call(this, e, k(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = k.map(t, function(e) {
                    return null == e ? "" : e + ""
                })), (r = k.valHooks[this.type] || k.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t))
            })) : t ? (r = k.valHooks[t.type] || k.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof(e = t.value) ? e.replace(vt, "") : null == e ? "" : e : void 0
        }
    }), k.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = k.find.attr(e, "value");
                    return null != t ? t : ht(k.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, o = e.options,
                        i = e.selectedIndex,
                        a = "select-one" === e.type,
                        s = a ? null : [],
                        u = a ? i + 1 : o.length;
                    for (r = i < 0 ? u : a ? i : 0; r < u; r++)
                        if (((n = o[r]).selected || r === i) && !n.disabled && (!n.parentNode.disabled || !D(n.parentNode, "optgroup"))) {
                            if (t = k(n).val(), a) return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    for (var n, r, o = e.options, i = k.makeArray(t), a = o.length; a--;)((r = o[a]).selected = -1 < k.inArray(k.valHooks.option.get(r), i)) && (n = !0);
                    return n || (e.selectedIndex = -1), i
                }
            }
        }
    }), k.each(["radio", "checkbox"], function() {
        k.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = -1 < k.inArray(k(e).val(), t)
            }
        }, v.checkOn || (k.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), v.focusin = "onfocusin" in C;
    var yt = /^(?:focusinfocus|focusoutblur)$/,
        xt = function(e) {
            e.stopPropagation()
        };
    k.extend(k.event, {
        trigger: function(e, t, n, r) {
            var o, i, a, s, u, l, c, f, p = [n || S],
                d = m.call(e, "type") ? e.type : e,
                h = m.call(e, "namespace") ? e.namespace.split(".") : [];
            if (i = f = a = n = n || S, 3 !== n.nodeType && 8 !== n.nodeType && !yt.test(d + k.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[k.expando] ? e : new k.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : k.makeArray(t, [e]), c = k.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!r && !c.noBubble && !x(n)) {
                    for (s = c.delegateType || d, yt.test(s + d) || (i = i.parentNode); i; i = i.parentNode) p.push(i), a = i;
                    a === (n.ownerDocument || S) && p.push(a.defaultView || a.parentWindow || C)
                }
                for (o = 0;
                    (i = p[o++]) && !e.isPropagationStopped();) f = i, e.type = 1 < o ? s : c.bindType || d, (l = (Q.get(i, "events") || {})[e.type] && Q.get(i, "handle")) && l.apply(i, t), (l = u && i[u]) && l.apply && G(i) && (e.result = l.apply(i, t), !1 === e.result && e.preventDefault());
                return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !G(n) || u && y(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null), k.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, xt), n[d](), e.isPropagationStopped() && f.removeEventListener(d, xt), k.event.triggered = void 0, a && (n[u] = a)), e.result
            }
        },
        simulate: function(e, t, n) {
            var r = k.extend(new k.Event, n, {
                type: e,
                isSimulated: !0
            });
            k.event.trigger(r, null, t)
        }
    }), k.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                k.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return k.event.trigger(e, t, n, !0)
        }
    }), v.focusin || k.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, r) {
        var o = function(e) {
            k.event.simulate(r, e.target, k.event.fix(e))
        };
        k.event.special[r] = {
            setup: function() {
                var e = this.ownerDocument || this,
                    t = Q.access(e, r);
                t || e.addEventListener(n, o, !0), Q.access(e, r, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this,
                    t = Q.access(e, r) - 1;
                t ? Q.access(e, r, t) : (e.removeEventListener(n, o, !0), Q.remove(e, r))
            }
        }
    });
    var bt = C.location,
        wt = Date.now(),
        Tt = /\?/;
    k.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
            t = (new C.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || k.error("Invalid XML: " + e), t
    };
    var Ct = /\[\]$/,
        St = /\r?\n/g,
        kt = /^(?:submit|button|image|reset|file)$/i,
        Et = /^(?:input|select|textarea|keygen)/i;

    function At(n, e, r, o) {
        var t;
        if (Array.isArray(e)) k.each(e, function(e, t) {
            r || Ct.test(n) ? o(n, t) : At(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, o)
        });
        else if (r || "object" !== w(e)) o(n, e);
        else
            for (t in e) At(n + "[" + t + "]", e[t], r, o)
    }
    k.param = function(e, t) {
        var n, r = [],
            o = function(e, t) {
                var n = y(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (Array.isArray(e) || e.jquery && !k.isPlainObject(e)) k.each(e, function() {
            o(this.name, this.value)
        });
        else
            for (n in e) At(n, e[n], t, o);
        return r.join("&")
    }, k.fn.extend({
        serialize: function() {
            return k.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = k.prop(this, "elements");
                return e ? k.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !k(this).is(":disabled") && Et.test(this.nodeName) && !kt.test(e) && (this.checked || !le.test(e))
            }).map(function(e, t) {
                var n = k(this).val();
                return null == n ? null : Array.isArray(n) ? k.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(St, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(St, "\r\n")
                }
            }).get()
        }
    });
    var Dt = /%20/g,
        Nt = /#.*$/,
        jt = /([?&])_=[^&]*/,
        Lt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        qt = /^(?:GET|HEAD)$/,
        Mt = /^\/\//,
        Ht = {},
        $t = {},
        It = "*/".concat("*"),
        Ot = S.createElement("a");

    function Pt(i) {
        return function(e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, r = 0,
                o = e.toLowerCase().match(I) || [];
            if (y(t))
                for (; n = o[r++];) "+" === n[0] ? (n = n.slice(1) || "*", (i[n] = i[n] || []).unshift(t)) : (i[n] = i[n] || []).push(t)
        }
    }

    function Rt(t, o, i, a) {
        var s = {},
            u = t === $t;

        function l(e) {
            var r;
            return s[e] = !0, k.each(t[e] || [], function(e, t) {
                var n = t(o, i, a);
                return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (o.dataTypes.unshift(n), l(n), !1)
            }), r
        }
        return l(o.dataTypes[0]) || !s["*"] && l("*")
    }

    function _t(e, t) {
        var n, r, o = k.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((o[n] ? e : r || (r = {}))[n] = t[n]);
        return r && k.extend(!0, e, r), e
    }
    Ot.href = bt.href, k.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: bt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": It,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": k.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? _t(_t(e, k.ajaxSettings), t) : _t(k.ajaxSettings, e)
        },
        ajaxPrefilter: Pt(Ht),
        ajaxTransport: Pt($t),
        ajax: function(e, t) {
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var c, f, p, n, d, r, h, g, o, i, m = k.ajaxSetup({}, t),
                v = m.context || m,
                y = m.context && (v.nodeType || v.jquery) ? k(v) : k.event,
                x = k.Deferred(),
                b = k.Callbacks("once memory"),
                w = m.statusCode || {},
                a = {},
                s = {},
                u = "canceled",
                T = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (h) {
                            if (!n)
                                for (n = {}; t = Lt.exec(p);) n[t[1].toLowerCase()] = t[2];
                            t = n[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return h ? p : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == h && (m.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (h) T.always(e[T.status]);
                            else
                                for (t in e) w[t] = [w[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || u;
                        return c && c.abort(t), l(0, t), this
                    }
                };
            if (x.promise(T), m.url = ((e || m.url || bt.href) + "").replace(Mt, bt.protocol + "//"), m.type = t.method || t.type || m.method || m.type, m.dataTypes = (m.dataType || "*").toLowerCase().match(I) || [""], null == m.crossDomain) {
                r = S.createElement("a");
                try {
                    r.href = m.url, r.href = r.href, m.crossDomain = Ot.protocol + "//" + Ot.host != r.protocol + "//" + r.host
                } catch (e) {
                    m.crossDomain = !0
                }
            }
            if (m.data && m.processData && "string" != typeof m.data && (m.data = k.param(m.data, m.traditional)), Rt(Ht, m, t, T), h) return T;
            for (o in (g = k.event && m.global) && 0 == k.active++ && k.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !qt.test(m.type), f = m.url.replace(Nt, ""), m.hasContent ? m.data && m.processData && 0 === (m.contentType || "").indexOf("application/x-www-form-urlencoded") && (m.data = m.data.replace(Dt, "+")) : (i = m.url.slice(f.length), m.data && (m.processData || "string" == typeof m.data) && (f += (Tt.test(f) ? "&" : "?") + m.data, delete m.data), !1 === m.cache && (f = f.replace(jt, "$1"), i = (Tt.test(f) ? "&" : "?") + "_=" + wt++ + i), m.url = f + i), m.ifModified && (k.lastModified[f] && T.setRequestHeader("If-Modified-Since", k.lastModified[f]), k.etag[f] && T.setRequestHeader("If-None-Match", k.etag[f])), (m.data && m.hasContent && !1 !== m.contentType || t.contentType) && T.setRequestHeader("Content-Type", m.contentType), T.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + It + "; q=0.01" : "") : m.accepts["*"]), m.headers) T.setRequestHeader(o, m.headers[o]);
            if (m.beforeSend && (!1 === m.beforeSend.call(v, T, m) || h)) return T.abort();
            if (u = "abort", b.add(m.complete), T.done(m.success), T.fail(m.error), c = Rt($t, m, t, T)) {
                if (T.readyState = 1, g && y.trigger("ajaxSend", [T, m]), h) return T;
                m.async && 0 < m.timeout && (d = C.setTimeout(function() {
                    T.abort("timeout")
                }, m.timeout));
                try {
                    h = !1, c.send(a, l)
                } catch (e) {
                    if (h) throw e;
                    l(-1, e)
                }
            } else l(-1, "No Transport");

            function l(e, t, n, r) {
                var o, i, a, s, u, l = t;
                h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, o = 200 <= e && e < 300 || 304 === e, n && (s = function(e, t, n) {
                    for (var r, o, i, a, s = e.contents, u = e.dataTypes;
                        "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (o in s)
                            if (s[o] && s[o].test(r)) {
                                u.unshift(o);
                                break
                            }
                    if (u[0] in n) i = u[0];
                    else {
                        for (o in n) {
                            if (!u[0] || e.converters[o + " " + u[0]]) {
                                i = o;
                                break
                            }
                            a || (a = o)
                        }
                        i = i || a
                    }
                    if (i) return i !== u[0] && u.unshift(i), n[i]
                }(m, T, n)), s = function(e, t, n, r) {
                    var o, i, a, s, u, l = {},
                        c = e.dataTypes.slice();
                    if (c[1])
                        for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                    for (i = c.shift(); i;)
                        if (e.responseFields[i] && (n[e.responseFields[i]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = i, i = c.shift())
                            if ("*" === i) i = u;
                            else if ("*" !== u && u !== i) {
                        if (!(a = l[u + " " + i] || l["* " + i]))
                            for (o in l)
                                if ((s = o.split(" "))[1] === i && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                    !0 === a ? a = l[o] : !0 !== l[o] && (i = s[0], c.unshift(s[1]));
                                    break
                                }
                        if (!0 !== a)
                            if (a && e.throws) t = a(t);
                            else try {
                                t = a(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: a ? e : "No conversion from " + u + " to " + i
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(m, s, T, o), o ? (m.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (k.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (k.etag[f] = u)), 204 === e || "HEAD" === m.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, i = s.data, o = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", o ? x.resolveWith(v, [i, l, T]) : x.rejectWith(v, [T, l, a]), T.statusCode(w), w = void 0, g && y.trigger(o ? "ajaxSuccess" : "ajaxError", [T, m, o ? i : a]), b.fireWith(v, [T, l]), g && (y.trigger("ajaxComplete", [T, m]), --k.active || k.event.trigger("ajaxStop")))
            }
            return T
        },
        getJSON: function(e, t, n) {
            return k.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return k.get(e, void 0, t, "script")
        }
    }), k.each(["get", "post"], function(e, o) {
        k[o] = function(e, t, n, r) {
            return y(t) && (r = r || n, n = t, t = void 0), k.ajax(k.extend({
                url: e,
                type: o,
                dataType: r,
                data: t,
                success: n
            }, k.isPlainObject(e) && e))
        }
    }), k._evalUrl = function(e) {
        return k.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }, k.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (y(e) && (e = e.call(this[0])), t = k(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(n) {
            return y(n) ? this.each(function(e) {
                k(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = k(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = y(t);
            return this.each(function(e) {
                k(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                k(this).replaceWith(this.childNodes)
            }), this
        }
    }), k.expr.pseudos.hidden = function(e) {
        return !k.expr.pseudos.visible(e)
    }, k.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, k.ajaxSettings.xhr = function() {
        try {
            return new C.XMLHttpRequest
        } catch (e) {}
    };
    var Wt = {
            0: 200,
            1223: 204
        },
        Bt = k.ajaxSettings.xhr();
    v.cors = !!Bt && "withCredentials" in Bt, v.ajax = Bt = !!Bt, k.ajaxTransport(function(o) {
        var i, a;
        if (v.cors || Bt && !o.crossDomain) return {
            send: function(e, t) {
                var n, r = o.xhr();
                if (r.open(o.type, o.url, o.async, o.username, o.password), o.xhrFields)
                    for (n in o.xhrFields) r[n] = o.xhrFields[n];
                for (n in o.mimeType && r.overrideMimeType && r.overrideMimeType(o.mimeType), o.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
                i = function(e) {
                    return function() {
                        i && (i = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Wt[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                            binary: r.response
                        } : {
                            text: r.responseText
                        }, r.getAllResponseHeaders()))
                    }
                }, r.onload = i(), a = r.onerror = r.ontimeout = i("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function() {
                    4 === r.readyState && C.setTimeout(function() {
                        i && a()
                    })
                }, i = i("abort");
                try {
                    r.send(o.hasContent && o.data || null)
                } catch (e) {
                    if (i) throw e
                }
            },
            abort: function() {
                i && i()
            }
        }
    }), k.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }), k.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return k.globalEval(e), e
            }
        }
    }), k.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), k.ajaxTransport("script", function(n) {
        var r, o;
        if (n.crossDomain) return {
            send: function(e, t) {
                r = k("<script>").prop({
                    charset: n.scriptCharset,
                    src: n.url
                }).on("load error", o = function(e) {
                    r.remove(), o = null, e && t("error" === e.type ? 404 : 200, e.type)
                }), S.head.appendChild(r[0])
            },
            abort: function() {
                o && o()
            }
        }
    });
    var Ft, zt = [],
        Xt = /(=)\?(?=&|$)|\?\?/;
    k.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = zt.pop() || k.expando + "_" + wt++;
            return this[e] = !0, e
        }
    }), k.ajaxPrefilter("json jsonp", function(e, t, n) {
        var r, o, i, a = !1 !== e.jsonp && (Xt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Xt.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = y(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Xt, "$1" + r) : !1 !== e.jsonp && (e.url += (Tt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
            return i || k.error(r + " was not called"), i[0]
        }, e.dataTypes[0] = "json", o = C[r], C[r] = function() {
            i = arguments
        }, n.always(function() {
            void 0 === o ? k(C).removeProp(r) : C[r] = o, e[r] && (e.jsonpCallback = t.jsonpCallback, zt.push(r)), i && y(o) && o(i[0]), i = o = void 0
        }), "script"
    }), v.createHTMLDocument = ((Ft = S.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ft.childNodes.length), k.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (v.createHTMLDocument ? ((r = (t = S.implementation.createHTMLDocument("")).createElement("base")).href = S.location.href, t.head.appendChild(r)) : t = S), i = !n && [], (o = N.exec(e)) ? [t.createElement(o[1])] : (o = ye([e], t, i), i && i.length && k(i).remove(), k.merge([], o.childNodes)));
        var r, o, i
    }, k.fn.load = function(e, t, n) {
        var r, o, i, a = this,
            s = e.indexOf(" ");
        return -1 < s && (r = ht(e.slice(s)), e = e.slice(0, s)), y(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), 0 < a.length && k.ajax({
            url: e,
            type: o || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            i = arguments, a.html(r ? k("<div>").append(k.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, i || [e.responseText, t, e])
            })
        }), this
    }, k.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        k.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), k.expr.pseudos.animated = function(t) {
        return k.grep(k.timers, function(e) {
            return t === e.elem
        }).length
    }, k.offset = {
        setOffset: function(e, t, n) {
            var r, o, i, a, s, u, l = k.css(e, "position"),
                c = k(e),
                f = {};
            "static" === l && (e.style.position = "relative"), s = c.offset(), i = k.css(e, "top"), u = k.css(e, "left"), o = ("absolute" === l || "fixed" === l) && -1 < (i + u).indexOf("auto") ? (a = (r = c.position()).top, r.left) : (a = parseFloat(i) || 0, parseFloat(u) || 0), y(t) && (t = t.call(e, n, k.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + o), "using" in t ? t.using.call(e, f) : c.css(f)
        }
    }, k.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                k.offset.setOffset(this, t, e)
            });
            var e, n, r = this[0];
            return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0],
                    o = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === k.css(r, "position")) t = r.getBoundingClientRect();
                else {
                    for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === k.css(e, "position");) e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((o = k(e).offset()).top += k.css(e, "borderTopWidth", !0), o.left += k.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - o.top - k.css(r, "marginTop", !0),
                    left: t.left - o.left - k.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === k.css(e, "position");) e = e.offsetParent;
                return e || xe
            })
        }
    }), k.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, o) {
        var i = "pageYOffset" === o;
        k.fn[t] = function(e) {
            return F(this, function(e, t, n) {
                var r;
                if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[o] : e[t];
                r ? r.scrollTo(i ? r.pageXOffset : n, i ? n : r.pageYOffset) : e[t] = n
            }, t, e, arguments.length)
        }
    }), k.each(["top", "left"], function(e, n) {
        k.cssHooks[n] = We(v.pixelPosition, function(e, t) {
            if (t) return t = _e(e, n), Oe.test(t) ? k(e).position()[n] + "px" : t
        })
    }), k.each({
        Height: "height",
        Width: "width"
    }, function(a, s) {
        k.each({
            padding: "inner" + a,
            content: s,
            "": "outer" + a
        }, function(r, i) {
            k.fn[i] = function(e, t) {
                var n = arguments.length && (r || "boolean" != typeof e),
                    o = r || (!0 === e || !0 === t ? "margin" : "border");
                return F(this, function(e, t, n) {
                    var r;
                    return x(e) ? 0 === i.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? k.css(e, t, o) : k.style(e, t, n, o)
                }, s, n ? e : void 0, n)
            }
        })
    }), k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
        k.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    }), k.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), k.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), k.proxy = function(e, t) {
        var n, r, o;
        if ("string" == typeof t && (n = e[t], t = e, e = n), y(e)) return r = s.call(arguments, 2), (o = function() {
            return e.apply(t || this, r.concat(s.call(arguments)))
        }).guid = e.guid = e.guid || k.guid++, o
    }, k.holdReady = function(e) {
        e ? k.readyWait++ : k.ready(!0)
    }, k.isArray = Array.isArray, k.parseJSON = JSON.parse, k.nodeName = D, k.isFunction = y, k.isWindow = x, k.camelCase = V, k.type = w, k.now = Date.now, k.isNumeric = function(e) {
        var t = k.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, "function" == typeof define && define.amd && define("jquery", [], function() {
        return k
    });
    var Ut = C.jQuery,
        Vt = C.$;
    return k.noConflict = function(e) {
        return C.$ === k && (C.$ = Vt), e && C.jQuery === k && (C.jQuery = Ut), k
    }, e || (C.jQuery = C.$ = k), k
}),
function(e) {
    var n = {
            cur_page: 0,
            last_page: 3
        },
        t = ["scene-zero", "scene-one", "scene-two", "scene-three"],
        r = $(".btn-menu-tgl"),
        o = $("button.btn-isi-tgl"),
        i = $(".btn-prev"),
        a = $(".btn-next"),
        s = ($(".btn-scene-00"), $(".btn-scene-01"), $(".btn-scene-02"), $(".btn-scene-03"), $("#loadscreen")),
        u = ($(".menu-bar"), $(".menu-drawer")),
        l = $(".isi-drawer"),
        c = ($(".titlebar"), $("#scene-01"), $("#scene-02"), $("#scene-03"), $("#content-wrapper"));
    fadeLoadScreen = function(e) {
        console.log("f:  fadeLoadScreen; view:" + e), "IN" !== e ? (c.css({
            left: "0"
        }), Main.resetMenuDrawer(), Main.resetISIdrawer(), s.animate({
            opacity: 0
        }, 500, function() {
            s.css({
                zIndex: "1",
                left: "150%"
            }), c.animate({
                opacity: 1
            }, 390), $(".menus").animate({
                opacity: 1
            }, 390), $(".titlebar").animate({
                opacity: 1
            }, 390)
        }), n.cur_page = 1, updateScnClass(), AttrMode.setAttnModTimer()) : (AttrMode.clearTime(), s.css({
            zIndex: "999",
            left: 0
        }), s.animate({
            opacity: 1
        }, 500, function() {
            console.log("load moving")
        }), n.cur_page = 0, $("body").addClass("scene-zero"))
    }, fadeNavArrow = function() {
        1 === n.cur_page ? i.css("opacity", .4) : i.css("opacity", 1), n.cur_page === n.last_page ? (a.css("opacity", .4), console.log("   last stop :" + n.cur_page)) : a.css("opacity", 1)
    }, updateScnClass = function() {
        $("#content-wrapper").removeClass().addClass(t[n.cur_page]), $(".menu-drawer nav").removeClass().addClass(t[n.cur_page])
    }, n.rewindSlides = function() {
        1 < n.cur_page && (c.animate({
            left: "+=1080"
        }, 500, function() {}), n.cur_page--, updateScnClass(), fadeNavArrow())
    }, n.advanceSlides = function() {
        n.cur_page < n.last_page && (c.animate({
            left: "-=1080"
        }, 500, function() {}), n.cur_page++, updateScnClass(), fadeNavArrow()), console.log("f: advanceSlides CrPg:" + n.cur_page)
    }, n.goToScene = function(e) {
        var t;
        switch (console.log("f: goToScene CrPg:" + e), n.cur_page = e) {
            case 1:
                updateScnClass(), Main.resetMenuDrawer(), t = 0;
                break;
            case 2:
                updateScnClass(), Main.resetMenuDrawer(), t = -1080;
                break;
            case 3:
                updateScnClass(), Main.resetMenuDrawer(), t = -2160;
                break;
            default:
                console.warn("  inelidgable sceen")
        }
        c.animate({
            left: t
        }, 500, function() {}), fadeNavArrow()
    }, n.resetISIdrawer = function() {
        l.removeClass("active"), o.removeClass("active")
    }, n.toggleISIdrawer = function() {
        l.toggleClass("active"), o.toggleClass("active"), u.removeClass("active"), r.removeClass("active")
    }, n.resetMenuDrawer = function() {
        u.removeClass("active"), r.removeClass("active")
    }, n.toggleMenuDrawer = function() {
        u.toggleClass("active"), r.toggleClass("active")
    }, n.init = function() {
        s.on("click", function(e) {
            e.preventDefault(), e.stopPropagation(), fadeLoadScreen()
        }), $(".btn-scene-00").on("click", function() {
            fadeLoadScreen("IN")
        }), $(".isi-link").on("click", function() {
            Main.toggleISIdrawer()
        }), $(".isi-link-landing-enter").on("click", function() {
            console.log("*click* isi landing link "), fadeLoadScreen(), Main.toggleISIdrawer(), AttCycleTime = e.setTimeout(function() {
                Main.toggleISIdrawer()
            }, 600)
        }), $("body").css("cursor", "default")
    }, e.Main = n
}(window), window.onload = function() {
        Main.init()
    }, $("body").css("cursor", "progress"), console.log("main.js ready 2018-10-08 4:31"),
    function(t) {
        var n, r, o = {},
            i = 9900,
            a = 1e3,
            s = 1500,
            u = $("#loadscreen"),
            l = ($("#content-wrapper"), $("#container")),
            c = $("#exit-pane");

        function f() {
            console.log("f: setAttractModeExit"), c.css({
                display: "block"
            }), l.off("mouseup"), $(c).on("click", function(e) {
                ! function t() {
                    console.warn("f: attractModeExit EXIT cycle"), AttrMode.clearTime(r), c.css({
                        display: "none"
                    }), c.off("click", function() {
                        t()
                    }), $(c).off("click", function(e) {
                        t(), e.preventDefault(), e.stopPropagation()
                    }), fadeLoadScreen("IN")
                }(), e.preventDefault(), e.stopPropagation()
            })
        }

        function p(e) {
            console.log("f: attractMode Cycle; " + Main.cur_page + " v " + Main.last_page), r = Main.cur_page === Main.last_page ? (console.log("  last page restart"), console.log("f: attractModeLoopBack Reset; "), $("#loadscreen").css({
                zIndex: "999",
                left: 0
            }), $("#loadscreen").animate({
                opacity: 1
            }, s, function() {
                console.log("   re load"), Main.goToScene(1)
            }), AttrMode.clearTime(r), t.setTimeout(function() {
                console.log("slide01"), $("#loadscreen").animate({
                    opacity: 0
                }, a, function() {
                    u.css({
                        zIndex: "1",
                        left: "150%"
                    }), p()
                })
            }, 2600)) : (console.log("  cycle again"), t.setTimeout(function() {
                console.warn("adv slide"), Main.advanceSlides(), p()
            }, i))
        }
        o.clearTime = function(e) {
            console.log("f: clearTime"), console.warn("** clearTimeout!!! **"), clearTimeout(e), console.log("    timer is now:"), console.info(e)
        }, o.resetTimer = function(e) {
            console.warn("fn resetTimer fired"), console.warn("** resetTimeout!!! **"), clearTimeout(e), console.log("    stop timer:" + e), l.off("mouseup"), AttrMode.setAttnModTimer()
        }, o.setAttnModTimer = function(e) {
            console.log("f: setAttnModTimer Initialized"), console.log("    Timer Set "), n = t.setTimeout(function() {
                console.warn(" TIMEOUT!!"), console.log("f: attractMode Initialized"), o.clearTime(n), $("#loadscreen").css({
                    zIndex: "999",
                    left: 0
                }), l.off("mouseup"), l.off("click"), f(), $("#loadscreen").animate({
                    opacity: 1
                }, s, function() {
                    console.log("   re load"), Main.goToScene(1)
                }), Main.resetISIdrawer(), Main.resetMenuDrawer(), r = t.setTimeout(function() {
                    console.log("slide01"), $("#loadscreen").animate({
                        opacity: 0
                    }, a, function() {
                        u.css({
                            zIndex: "1",
                            left: "150%"
                        }), p()
                    })
                }, 2600)
            }, 18e4), console.log("   set timer:" + n), l.on("mouseup", function(e) {
                console.log("** click toclearTimeout!!! **"), e.preventDefault(), e.stopPropagation(), AttrMode.resetTimer(n)
            })
        }, o.init = function() {}, t.AttrMode = o, console.log("attractionMode.js timeOutelay=" + 18e4)
    }(window), console.log("attractionMode.js ready 2018-10-08 20:08");