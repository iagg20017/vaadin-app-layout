(function(){/*

 Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 Code distributed by Google as part of the polymer project is also
 subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
    'use strict';
    var p,
        q = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this,
        aa = "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, b, c) {
            a != Array.prototype && a != Object.prototype && (a[b] = c.value)
        };

    function ba() {
        ba = function () {
        };
        q.Symbol || (q.Symbol = da)
    }

    var da = function () {
        var a = 0;
        return function (b) {
            return "jscomp_symbol_" + (b || "") + a++
        }
    }();

    function ea() {
        ba();
        var a = q.Symbol.iterator;
        a || (a = q.Symbol.iterator = q.Symbol("iterator"));
        "function" != typeof Array.prototype[a] && aa(Array.prototype, a, {
            configurable: !0,
            writable: !0,
            value: function () {
                return fa(this)
            }
        });
        ea = function () {
        }
    }

    function fa(a) {
        var b = 0;
        return ha(function () {
            return b < a.length ? {done: !1, value: a[b++]} : {done: !0}
        })
    }

    function ha(a) {
        ea();
        a = {next: a};
        a[q.Symbol.iterator] = function () {
            return this
        };
        return a
    }

    function ia(a) {
        ea();
        var b = a[Symbol.iterator];
        return b ? b.call(a) : fa(a)
    }

    function ja(a) {
        for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
        return c
    }

    (function (a) {
        function b(a, b) {
            if ("function" === typeof window.CustomEvent) return new CustomEvent(a, b);
            var c = document.createEvent("CustomEvent");
            c.initCustomEvent(a, !!b.bubbles, !!b.cancelable, b.detail);
            return c
        }

        function c(a) {
            if (F) return a.ownerDocument !== document ? a.ownerDocument : null;
            var b = a.__importDoc;
            if (!b && a.parentNode) {
                b = a.parentNode;
                if ("function" === typeof b.closest) b = b.closest("link[rel=import]"); else for (; !g(b) && (b = b.parentNode);) ;
                a.__importDoc = b
            }
            return b
        }

        function d(a) {
            var b = m(document, "link[rel=import]:not([import-dependency])"),
                c = b.length;
            c ? n(b, function (b) {
                return h(b, function () {
                    0 === --c && a()
                })
            }) : a()
        }

        function e(a) {
            function b() {
                "loading" !== document.readyState && document.body && (document.removeEventListener("readystatechange", b), a())
            }

            document.addEventListener("readystatechange", b);
            b()
        }

        function f(a) {
            e(function () {
                return d(function () {
                    return a && a()
                })
            })
        }

        function h(a, b) {
            if (a.__loaded) b && b(); else if ("script" === a.localName && !a.src || "style" === a.localName && !a.firstChild) a.__loaded = !0, b && b(); else {
                var c = function (d) {
                    a.removeEventListener(d.type,
                        c);
                    a.__loaded = !0;
                    b && b()
                };
                a.addEventListener("load", c);
                Ia && "style" === a.localName || a.addEventListener("error", c)
            }
        }

        function g(a) {
            return a.nodeType === Node.ELEMENT_NODE && "link" === a.localName && "import" === a.rel
        }

        function k() {
            var a = this;
            this.a = {};
            this.b = 0;
            this.c = new MutationObserver(function (b) {
                return a.Ga(b)
            });
            this.c.observe(document.head, {childList: !0, subtree: !0});
            this.loadImports(document)
        }

        function l(a) {
            n(m(a, "template"), function (a) {
                n(m(a.content, 'script:not([type]),script[type="application/javascript"],script[type="text/javascript"]'),
                    function (a) {
                        var b = document.createElement("script");
                        n(a.attributes, function (a) {
                            return b.setAttribute(a.name, a.value)
                        });
                        b.textContent = a.textContent;
                        a.parentNode.replaceChild(b, a)
                    });
                l(a.content)
            })
        }

        function m(a, b) {
            return a.childNodes.length ? a.querySelectorAll(b) : Ld
        }

        function n(a, b, c) {
            var d = a ? a.length : 0, e = c ? -1 : 1;
            for (c = c ? d - 1 : 0; c < d && 0 <= c; c += e) b(a[c], c)
        }

        var v = document.createElement("link"), F = "import" in v, Ld = v.querySelectorAll("*"), Ja = null;
        !1 === "currentScript" in document && Object.defineProperty(document, "currentScript",
            {
                get: function () {
                    return Ja || ("complete" !== document.readyState ? document.scripts[document.scripts.length - 1] : null)
                }, configurable: !0
            });
        var Md = /(url\()([^)]*)(\))/g, Nd = /(@import[\s]+(?!url\())([^;]*)(;)/g,
            Od = /(<link[^>]*)(rel=['|"]?stylesheet['|"]?[^>]*>)/g, A = {
                Aa: function (a, b) {
                    a.href && a.setAttribute("href", A.R(a.getAttribute("href"), b));
                    a.src && a.setAttribute("src", A.R(a.getAttribute("src"), b));
                    if ("style" === a.localName) {
                        var c = A.ja(a.textContent, b, Md);
                        a.textContent = A.ja(c, b, Nd)
                    }
                }, ja: function (a, b, c) {
                    return a.replace(c,
                        function (a, c, d, e) {
                            a = d.replace(/["']/g, "");
                            b && (a = A.R(a, b));
                            return c + "'" + a + "'" + e
                        })
                }, R: function (a, b) {
                    if (void 0 === A.V) {
                        A.V = !1;
                        try {
                            var c = new URL("b", "http://a");
                            c.pathname = "c%20d";
                            A.V = "http://a/c%20d" === c.href
                        } catch (Ef) {
                        }
                    }
                    if (A.V) return (new URL(a, b)).href;
                    c = A.ra;
                    c || (c = document.implementation.createHTMLDocument("temp"), A.ra = c, c.ea = c.createElement("base"), c.head.appendChild(c.ea), c.da = c.createElement("a"));
                    c.ea.href = b;
                    c.da.href = a;
                    return c.da.href || a
                }
            }, Mb = {
                async: !0, load: function (a, b, c) {
                    if (a) if (a.match(/^data:/)) {
                        a =
                            a.split(",");
                        var d = a[1];
                        d = -1 < a[0].indexOf(";base64") ? atob(d) : decodeURIComponent(d);
                        b(d)
                    } else {
                        var e = new XMLHttpRequest;
                        e.open("GET", a, Mb.async);
                        e.onload = function () {
                            var a = e.responseURL || e.getResponseHeader("Location");
                            a && 0 === a.indexOf("/") && (a = (location.origin || location.protocol + "//" + location.host) + a);
                            var d = e.response || e.responseText;
                            304 === e.status || 0 === e.status || 200 <= e.status && 300 > e.status ? b(d, a) : c(d)
                        };
                        e.send()
                    } else c("error: href must be specified")
                }
            }, Ia = /Trident/.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent);
        k.prototype.loadImports = function (a) {
            var b = this;
            a = m(a, "link[rel=import]");
            n(a, function (a) {
                return b.m(a)
            })
        };
        k.prototype.m = function (a) {
            var b = this, c = a.href;
            if (void 0 !== this.a[c]) {
                var d = this.a[c];
                d && d.__loaded && (a.__import = d, this.f(a))
            } else this.b++, this.a[c] = "pending", Mb.load(c, function (a, d) {
                a = b.Ha(a, d || c);
                b.a[c] = a;
                b.b--;
                b.loadImports(a);
                b.F()
            }, function () {
                b.a[c] = null;
                b.b--;
                b.F()
            })
        };
        k.prototype.Ha = function (a, b) {
            if (!a) return document.createDocumentFragment();
            Ia && (a = a.replace(Od, function (a, b, c) {
                return -1 ===
                a.indexOf("type=") ? b + " type=import-disable " + c : a
            }));
            var c = document.createElement("template");
            c.innerHTML = a;
            if (c.content) a = c.content, l(a); else for (a = document.createDocumentFragment(); c.firstChild;) a.appendChild(c.firstChild);
            if (c = a.querySelector("base")) b = A.R(c.getAttribute("href"), b), c.removeAttribute("href");
            c = m(a, 'link[rel=import],link[rel=stylesheet][href][type=import-disable],style:not([type]),link[rel=stylesheet][href]:not([type]),script:not([type]),script[type="application/javascript"],script[type="text/javascript"]');
            var d = 0;
            n(c, function (a) {
                h(a);
                A.Aa(a, b);
                a.setAttribute("import-dependency", "");
                "script" === a.localName && !a.src && a.textContent && (a.setAttribute("src", "data:text/javascript;charset=utf-8," + encodeURIComponent(a.textContent + ("\n//# sourceURL=" + b + (d ? "-" + d : "") + ".js\n"))), a.textContent = "", d++)
            });
            return a
        };
        k.prototype.F = function () {
            var a = this;
            if (!this.b) {
                this.c.disconnect();
                this.flatten(document);
                var b = !1, c = !1, d = function () {
                    c && b && (a.loadImports(document), a.b || (a.c.observe(document.head, {
                        childList: !0,
                        subtree: !0
                    }),
                        a.Ea()))
                };
                this.Ja(function () {
                    c = !0;
                    d()
                });
                this.Ia(function () {
                    b = !0;
                    d()
                })
            }
        };
        k.prototype.flatten = function (a) {
            var b = this;
            a = m(a, "link[rel=import]");
            n(a, function (a) {
                var c = b.a[a.href];
                (a.__import = c) && c.nodeType === Node.DOCUMENT_FRAGMENT_NODE && (b.a[a.href] = a, a.readyState = "loading", a.__import = a, b.flatten(c), a.appendChild(c))
            })
        };
        k.prototype.Ia = function (a) {
            function b(e) {
                if (e < d) {
                    var f = c[e], g = document.createElement("script");
                    f.removeAttribute("import-dependency");
                    n(f.attributes, function (a) {
                        return g.setAttribute(a.name,
                            a.value)
                    });
                    Ja = g;
                    f.parentNode.replaceChild(g, f);
                    h(g, function () {
                        Ja = null;
                        b(e + 1)
                    })
                } else a()
            }

            var c = m(document, "script[import-dependency]"), d = c.length;
            b(0)
        };
        k.prototype.Ja = function (a) {
            var b = m(document, "style[import-dependency],link[rel=stylesheet][import-dependency]"), d = b.length;
            if (d) {
                var e = Ia && !!document.querySelector("link[rel=stylesheet][href][type=import-disable]");
                n(b, function (b) {
                    h(b, function () {
                        b.removeAttribute("import-dependency");
                        0 === --d && a()
                    });
                    if (e && b.parentNode !== document.head) {
                        var f = document.createElement(b.localName);
                        f.__appliedElement = b;
                        f.setAttribute("type", "import-placeholder");
                        b.parentNode.insertBefore(f, b.nextSibling);
                        for (f = c(b); f && c(f);) f = c(f);
                        f.parentNode !== document.head && (f = null);
                        document.head.insertBefore(b, f);
                        b.removeAttribute("type")
                    }
                })
            } else a()
        };
        k.prototype.Ea = function () {
            var a = this, b = m(document, "link[rel=import]");
            n(b, function (b) {
                return a.f(b)
            }, !0)
        };
        k.prototype.f = function (a) {
            a.__loaded || (a.__loaded = !0, a.import && (a.import.readyState = "complete"), a.dispatchEvent(b(a.import ? "load" : "error", {
                bubbles: !1,
                cancelable: !1, detail: void 0
            })))
        };
        k.prototype.Ga = function (a) {
            var b = this;
            n(a, function (a) {
                return n(a.addedNodes, function (a) {
                    a && a.nodeType === Node.ELEMENT_NODE && (g(a) ? b.m(a) : b.loadImports(a))
                })
            })
        };
        var Ka = null;
        if (F) v = m(document, "link[rel=import]"), n(v, function (a) {
            a.import && "loading" === a.import.readyState || (a.__loaded = !0)
        }), v = function (a) {
            a = a.target;
            g(a) && (a.__loaded = !0)
        }, document.addEventListener("load", v, !0), document.addEventListener("error", v, !0); else {
            var ca = Object.getOwnPropertyDescriptor(Node.prototype,
                "baseURI");
            Object.defineProperty((!ca || ca.configurable ? Node : Element).prototype, "baseURI", {
                get: function () {
                    var a = g(this) ? this : c(this);
                    return a ? a.href : ca && ca.get ? ca.get.call(this) : (document.querySelector("base") || window.location).href
                }, configurable: !0, enumerable: !0
            });
            Object.defineProperty(HTMLLinkElement.prototype, "import", {
                get: function () {
                    return this.__import || null
                }, configurable: !0, enumerable: !0
            });
            e(function () {
                Ka = new k
            })
        }
        f(function () {
            return document.dispatchEvent(b("HTMLImportsLoaded", {
                cancelable: !0,
                bubbles: !0, detail: void 0
            }))
        });
        a.useNative = F;
        a.whenReady = f;
        a.importForElement = c;
        a.loadImports = function (a) {
            Ka && Ka.loadImports(a)
        }
    })(window.HTMLImports = window.HTMLImports || {});
    /*

Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
    var r = window.ShadyDOM || {};
    r.Ca = !(!Element.prototype.attachShadow || !Node.prototype.getRootNode);
    var ka = Object.getOwnPropertyDescriptor(Node.prototype, "firstChild");
    r.G = !!(ka && ka.configurable && ka.get);
    r.ia = r.force || !r.Ca;

    function t(a) {
        return a.__shady && void 0 !== a.__shady.firstChild
    }

    function u(a) {
        return "ShadyRoot" === a.oa
    }

    function la(a) {
        a = a.getRootNode();
        if (u(a)) return a
    }

    var w = Element.prototype,
        ma = w.matches || w.matchesSelector || w.mozMatchesSelector || w.msMatchesSelector || w.oMatchesSelector || w.webkitMatchesSelector;

    function na(a, b) {
        if (a && b) for (var c = Object.getOwnPropertyNames(b), d = 0, e; d < c.length && (e = c[d]); d++) {
            var f = Object.getOwnPropertyDescriptor(b, e);
            f && Object.defineProperty(a, e, f)
        }
    }

    function oa(a, b) {
        for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
        for (d = 0; d < c.length; d++) na(a, c[d]);
        return a
    }

    function pa(a, b) {
        for (var c in b) a[c] = b[c]
    }

    var qa = document.createTextNode(""), ra = 0, sa = [];
    (new MutationObserver(function () {
        for (; sa.length;) try {
            sa.shift()()
        } catch (a) {
            throw qa.textContent = ra++, a;
        }
    })).observe(qa, {characterData: !0});

    function ta(a) {
        sa.push(a);
        qa.textContent = ra++
    }

    var ua = !!document.contains;

    function va(a, b) {
        for (; b;) {
            if (b == a) return !0;
            b = b.parentNode
        }
        return !1
    };var wa = [], xa;

    function ya(a) {
        xa || (xa = !0, ta(za));
        wa.push(a)
    }

    function za() {
        xa = !1;
        for (var a = !!wa.length; wa.length;) wa.shift()();
        return a
    }

    za.list = wa;

    function Aa() {
        this.a = !1;
        this.addedNodes = [];
        this.removedNodes = [];
        this.N = new Set
    }

    function Ba(a) {
        a.a || (a.a = !0, ta(function () {
            Ca(a)
        }))
    }

    function Ca(a) {
        if (a.a) {
            a.a = !1;
            var b = a.takeRecords();
            b.length && a.N.forEach(function (a) {
                a(b)
            })
        }
    }

    Aa.prototype.takeRecords = function () {
        if (this.addedNodes.length || this.removedNodes.length) {
            var a = [{addedNodes: this.addedNodes, removedNodes: this.removedNodes}];
            this.addedNodes = [];
            this.removedNodes = [];
            return a
        }
        return []
    };

    function Da(a, b) {
        a.__shady = a.__shady || {};
        a.__shady.H || (a.__shady.H = new Aa);
        a.__shady.H.N.add(b);
        var c = a.__shady.H;
        return {
            sa: b, w: c, va: a, takeRecords: function () {
                return c.takeRecords()
            }
        }
    }

    function Ea(a) {
        var b = a && a.w;
        b && (b.N.delete(a.sa), b.N.size || (a.va.__shady.H = null))
    }

    function Fa(a, b) {
        var c = b.getRootNode();
        return a.map(function (a) {
            var b = c === a.target.getRootNode();
            if (b && a.addedNodes) {
                if (b = Array.from(a.addedNodes).filter(function (a) {
                        return c === a.getRootNode()
                    }), b.length) return a = Object.create(a), Object.defineProperty(a, "addedNodes", {
                    value: b,
                    configurable: !0
                }), a
            } else if (b) return a
        }).filter(function (a) {
            return a
        })
    };var x = {}, Ga = Element.prototype.insertBefore, Ha = Element.prototype.removeChild,
        La = Element.prototype.setAttribute, Ma = Element.prototype.removeAttribute, Na = Element.prototype.cloneNode,
        Oa = Document.prototype.importNode, Pa = Element.prototype.addEventListener,
        Qa = Element.prototype.removeEventListener, Ra = Window.prototype.addEventListener,
        Sa = Window.prototype.removeEventListener, Ta = Element.prototype.dispatchEvent,
        Ua = Element.prototype.querySelector, Va = Element.prototype.querySelectorAll, Wa = Node.prototype.contains ||
            HTMLElement.prototype.contains;
    x.appendChild = Element.prototype.appendChild;
    x.insertBefore = Ga;
    x.removeChild = Ha;
    x.setAttribute = La;
    x.removeAttribute = Ma;
    x.cloneNode = Na;
    x.importNode = Oa;
    x.addEventListener = Pa;
    x.removeEventListener = Qa;
    x.Qa = Ra;
    x.Ra = Sa;
    x.dispatchEvent = Ta;
    x.querySelector = Ua;
    x.querySelectorAll = Va;
    x.contains = Wa;
    var Xa = /[&\u00A0"]/g, Ya = /[&\u00A0<>]/g;

    function Za(a) {
        switch (a) {
            case "&":
                return "&amp;";
            case "<":
                return "&lt;";
            case ">":
                return "&gt;";
            case '"':
                return "&quot;";
            case "\u00a0":
                return "&nbsp;"
        }
    }

    function $a(a) {
        for (var b = {}, c = 0; c < a.length; c++) b[a[c]] = !0;
        return b
    }

    var ab = $a("area base br col command embed hr img input keygen link meta param source track wbr".split(" ")),
        bb = $a("style script xmp iframe noembed noframes plaintext noscript".split(" "));

    function cb(a, b) {
        "template" === a.localName && (a = a.content);
        for (var c = "", d = b ? b(a) : a.childNodes, e = 0, f = d.length, h; e < f && (h = d[e]); e++) {
            a:{
                var g = h;
                var k = a;
                var l = b;
                switch (g.nodeType) {
                    case Node.ELEMENT_NODE:
                        for (var m = g.localName, n = "<" + m, v = g.attributes, F = 0; k = v[F]; F++) n += " " + k.name + '="' + k.value.replace(Xa, Za) + '"';
                        n += ">";
                        g = ab[m] ? n : n + cb(g, l) + "</" + m + ">";
                        break a;
                    case Node.TEXT_NODE:
                        g = g.data;
                        g = k && bb[k.localName] ? g : g.replace(Ya, Za);
                        break a;
                    case Node.COMMENT_NODE:
                        g = "\x3c!--" + g.data + "--\x3e";
                        break a;
                    default:
                        throw window.console.error(g),
                            Error("not implemented");
                }
            }
            c += g
        }
        return c
    };var y = {}, z = document.createTreeWalker(document, NodeFilter.SHOW_ALL, null, !1),
        B = document.createTreeWalker(document, NodeFilter.SHOW_ELEMENT, null, !1);

    function db(a) {
        var b = [];
        z.currentNode = a;
        for (a = z.firstChild(); a;) b.push(a), a = z.nextSibling();
        return b
    }

    y.parentNode = function (a) {
        z.currentNode = a;
        return z.parentNode()
    };
    y.firstChild = function (a) {
        z.currentNode = a;
        return z.firstChild()
    };
    y.lastChild = function (a) {
        z.currentNode = a;
        return z.lastChild()
    };
    y.previousSibling = function (a) {
        z.currentNode = a;
        return z.previousSibling()
    };
    y.nextSibling = function (a) {
        z.currentNode = a;
        return z.nextSibling()
    };
    y.childNodes = db;
    y.parentElement = function (a) {
        B.currentNode = a;
        return B.parentNode()
    };
    y.firstElementChild = function (a) {
        B.currentNode = a;
        return B.firstChild()
    };
    y.lastElementChild = function (a) {
        B.currentNode = a;
        return B.lastChild()
    };
    y.previousElementSibling = function (a) {
        B.currentNode = a;
        return B.previousSibling()
    };
    y.nextElementSibling = function (a) {
        B.currentNode = a;
        return B.nextSibling()
    };
    y.children = function (a) {
        var b = [];
        B.currentNode = a;
        for (a = B.firstChild(); a;) b.push(a), a = B.nextSibling();
        return b
    };
    y.innerHTML = function (a) {
        return cb(a, function (a) {
            return db(a)
        })
    };
    y.textContent = function (a) {
        switch (a.nodeType) {
            case Node.ELEMENT_NODE:
            case Node.DOCUMENT_FRAGMENT_NODE:
                a = document.createTreeWalker(a, NodeFilter.SHOW_TEXT, null, !1);
                for (var b = "", c; c = a.nextNode();) b += c.nodeValue;
                return b;
            default:
                return a.nodeValue
        }
    };
    var eb = Object.getOwnPropertyDescriptor(Element.prototype, "innerHTML") || Object.getOwnPropertyDescriptor(HTMLElement.prototype, "innerHTML"),
        fb = document.implementation.createHTMLDocument("inert"),
        gb = Object.getOwnPropertyDescriptor(Document.prototype, "activeElement"), hb = {
            parentElement: {
                get: function () {
                    var a = this.__shady && this.__shady.parentNode;
                    a && a.nodeType !== Node.ELEMENT_NODE && (a = null);
                    return void 0 !== a ? a : y.parentElement(this)
                }, configurable: !0
            }, parentNode: {
                get: function () {
                    var a = this.__shady && this.__shady.parentNode;
                    return void 0 !== a ? a : y.parentNode(this)
                }, configurable: !0
            }, nextSibling: {
                get: function () {
                    var a = this.__shady && this.__shady.nextSibling;
                    return void 0 !== a ? a : y.nextSibling(this)
                }, configurable: !0
            }, previousSibling: {
                get: function () {
                    var a = this.__shady && this.__shady.previousSibling;
                    return void 0 !== a ? a : y.previousSibling(this)
                }, configurable: !0
            }, className: {
                get: function () {
                    return this.getAttribute("class") || ""
                }, set: function (a) {
                    this.setAttribute("class", a)
                }, configurable: !0
            }, nextElementSibling: {
                get: function () {
                    if (this.__shady &&
                        void 0 !== this.__shady.nextSibling) {
                        for (var a = this.nextSibling; a && a.nodeType !== Node.ELEMENT_NODE;) a = a.nextSibling;
                        return a
                    }
                    return y.nextElementSibling(this)
                }, configurable: !0
            }, previousElementSibling: {
                get: function () {
                    if (this.__shady && void 0 !== this.__shady.previousSibling) {
                        for (var a = this.previousSibling; a && a.nodeType !== Node.ELEMENT_NODE;) a = a.previousSibling;
                        return a
                    }
                    return y.previousElementSibling(this)
                }, configurable: !0
            }
        }, ib = {
            childNodes: {
                get: function () {
                    if (t(this)) {
                        if (!this.__shady.childNodes) {
                            this.__shady.childNodes =
                                [];
                            for (var a = this.firstChild; a; a = a.nextSibling) this.__shady.childNodes.push(a)
                        }
                        var b = this.__shady.childNodes
                    } else b = y.childNodes(this);
                    b.item = function (a) {
                        return b[a]
                    };
                    return b
                }, configurable: !0
            }, childElementCount: {
                get: function () {
                    return this.children.length
                }, configurable: !0
            }, firstChild: {
                get: function () {
                    var a = this.__shady && this.__shady.firstChild;
                    return void 0 !== a ? a : y.firstChild(this)
                }, configurable: !0
            }, lastChild: {
                get: function () {
                    var a = this.__shady && this.__shady.lastChild;
                    return void 0 !== a ? a : y.lastChild(this)
                },
                configurable: !0
            }, textContent: {
                get: function () {
                    if (t(this)) {
                        for (var a = [], b = 0, c = this.childNodes, d; d = c[b]; b++) d.nodeType !== Node.COMMENT_NODE && a.push(d.textContent);
                        return a.join("")
                    }
                    return y.textContent(this)
                }, set: function (a) {
                    if ("undefined" === typeof a || null === a) a = "";
                    switch (this.nodeType) {
                        case Node.ELEMENT_NODE:
                        case Node.DOCUMENT_FRAGMENT_NODE:
                            for (; this.firstChild;) this.removeChild(this.firstChild);
                            (0 < a.length || this.nodeType === Node.ELEMENT_NODE) && this.appendChild(document.createTextNode(a));
                            break;
                        default:
                            this.nodeValue =
                                a
                    }
                }, configurable: !0
            }, firstElementChild: {
                get: function () {
                    if (this.__shady && void 0 !== this.__shady.firstChild) {
                        for (var a = this.firstChild; a && a.nodeType !== Node.ELEMENT_NODE;) a = a.nextSibling;
                        return a
                    }
                    return y.firstElementChild(this)
                }, configurable: !0
            }, lastElementChild: {
                get: function () {
                    if (this.__shady && void 0 !== this.__shady.lastChild) {
                        for (var a = this.lastChild; a && a.nodeType !== Node.ELEMENT_NODE;) a = a.previousSibling;
                        return a
                    }
                    return y.lastElementChild(this)
                }, configurable: !0
            }, children: {
                get: function () {
                    var a = t(this) ?
                        Array.prototype.filter.call(this.childNodes, function (a) {
                            return a.nodeType === Node.ELEMENT_NODE
                        }) : y.children(this);
                    a.item = function (b) {
                        return a[b]
                    };
                    return a
                }, configurable: !0
            }, innerHTML: {
                get: function () {
                    var a = "template" === this.localName ? this.content : this;
                    return t(this) ? cb(a) : y.innerHTML(a)
                }, set: function (a) {
                    for (var b = "template" === this.localName ? this.content : this; b.firstChild;) b.removeChild(b.firstChild);
                    var c = this.localName;
                    c && "template" !== c || (c = "div");
                    c = fb.createElement(c);
                    for (eb && eb.set ? eb.set.call(c,
                        a) : c.innerHTML = a; c.firstChild;) b.appendChild(c.firstChild)
                }, configurable: !0
            }
        }, jb = {
            shadowRoot: {
                get: function () {
                    return this.__shady && this.__shady.Ka || null
                }, configurable: !0
            }
        }, kb = {
            activeElement: {
                get: function () {
                    var a = gb && gb.get ? gb.get.call(document) : r.G ? void 0 : document.activeElement;
                    if (a && a.nodeType) {
                        var b = !!u(this);
                        if (this === document || b && this.host !== a && x.contains.call(this.host, a)) {
                            for (b = la(a); b && b !== this;) a = b.host, b = la(a);
                            a = this === document ? b ? null : a : b === this ? a : null
                        } else a = null
                    } else a = null;
                    return a
                }, set: function () {
                },
                configurable: !0
            }
        };

    function C(a, b, c) {
        for (var d in b) {
            var e = Object.getOwnPropertyDescriptor(a, d);
            e && e.configurable || !e && c ? Object.defineProperty(a, d, b[d]) : c && console.warn("Could not define", d, "on", a)
        }
    }

    function D(a) {
        C(a, hb);
        C(a, ib);
        C(a, kb)
    }

    var lb = r.G ? function () {
    } : function (a) {
        a.__shady && a.__shady.pa || (a.__shady = a.__shady || {}, a.__shady.pa = !0, C(a, hb, !0))
    }, mb = r.G ? function () {
    } : function (a) {
        a.__shady && a.__shady.na || (a.__shady = a.__shady || {}, a.__shady.na = !0, C(a, ib, !0), C(a, jb, !0))
    };

    function nb(a, b, c) {
        lb(a);
        c = c || null;
        a.__shady = a.__shady || {};
        b.__shady = b.__shady || {};
        c && (c.__shady = c.__shady || {});
        a.__shady.previousSibling = c ? c.__shady.previousSibling : b.lastChild;
        var d = a.__shady.previousSibling;
        d && d.__shady && (d.__shady.nextSibling = a);
        (d = a.__shady.nextSibling = c) && d.__shady && (d.__shady.previousSibling = a);
        a.__shady.parentNode = b;
        c ? c === b.__shady.firstChild && (b.__shady.firstChild = a) : (b.__shady.lastChild = a, b.__shady.firstChild || (b.__shady.firstChild = a));
        b.__shady.childNodes = null
    }

    function ob(a) {
        if (!a.__shady || void 0 === a.__shady.firstChild) {
            a.__shady = a.__shady || {};
            a.__shady.firstChild = y.firstChild(a);
            a.__shady.lastChild = y.lastChild(a);
            mb(a);
            for (var b = a.__shady.childNodes = y.childNodes(a), c = 0, d; c < b.length && (d = b[c]); c++) d.__shady = d.__shady || {}, d.__shady.parentNode = a, d.__shady.nextSibling = b[c + 1] || null, d.__shady.previousSibling = b[c - 1] || null, lb(d)
        }
    };

    function pb(a, b, c) {
        if (b === a) throw Error("Failed to execute 'appendChild' on 'Node': The new child element contains the parent.");
        if (c) {
            var d = c.__shady && c.__shady.parentNode;
            if (void 0 !== d && d !== a || void 0 === d && y.parentNode(c) !== a) throw Error("Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node.");
        }
        if (c === b) return b;
        b.parentNode && qb(b.parentNode, b);
        d = la(a);
        var e;
        if (e = d) a:{
            if (!b.__noInsertionPoint) {
                var f;
                "slot" === b.localName ? f = [b] :
                    b.querySelectorAll && (f = b.querySelectorAll("slot"));
                if (f && f.length) {
                    e = f;
                    break a
                }
            }
            e = void 0
        }
        (f = e) && d.C.push.apply(d.C, [].concat(f instanceof Array ? f : ja(ia(f))));
        d && ("slot" === a.localName || f) && E(d);
        if (t(a)) {
            d = c;
            mb(a);
            a.__shady = a.__shady || {};
            void 0 !== a.__shady.firstChild && (a.__shady.childNodes = null);
            if (b.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                f = b.childNodes;
                for (e = 0; e < f.length; e++) nb(f[e], a, d);
                b.__shady = b.__shady || {};
                d = void 0 !== b.__shady.firstChild ? null : void 0;
                b.__shady.firstChild = b.__shady.lastChild = d;
                b.__shady.childNodes = d
            } else nb(b, a, d);
            if (rb(a)) {
                E(a.__shady.root);
                var h = !0
            } else a.__shady.root && (h = !0)
        }
        h || (h = u(a) ? a.host : a, c ? (c = sb(c), x.insertBefore.call(h, b, c)) : x.appendChild.call(h, b));
        tb(a, b);
        return b
    }

    function qb(a, b) {
        if (b.parentNode !== a) throw Error("The node to be removed is not a child of this node: " + b);
        var c = la(b);
        if (t(a)) {
            b.__shady = b.__shady || {};
            a.__shady = a.__shady || {};
            b === a.__shady.firstChild && (a.__shady.firstChild = b.__shady.nextSibling);
            b === a.__shady.lastChild && (a.__shady.lastChild = b.__shady.previousSibling);
            var d = b.__shady.previousSibling, e = b.__shady.nextSibling;
            d && (d.__shady = d.__shady || {}, d.__shady.nextSibling = e);
            e && (e.__shady = e.__shady || {}, e.__shady.previousSibling = d);
            b.__shady.parentNode =
                b.__shady.previousSibling = b.__shady.nextSibling = void 0;
            void 0 !== a.__shady.childNodes && (a.__shady.childNodes = null);
            if (rb(a)) {
                E(a.__shady.root);
                var f = !0
            }
        }
        ub(b);
        if (c) {
            (d = a && "slot" === a.localName) && (f = !0);
            vb(c);
            e = c.i;
            for (var h in e) for (var g = e[h], k = 0; k < g.length; k++) {
                var l = g[k];
                if (va(b, l)) {
                    g.splice(k, 1);
                    var m = c.l.indexOf(l);
                    0 <= m && c.l.splice(m, 1);
                    k--;
                    if (m = l.__shady.D) for (l = 0; l < m.length; l++) {
                        var n = m[l], v = y.parentNode(n);
                        v && x.removeChild.call(v, n)
                    }
                    m = !0
                }
            }
            (m || d) && E(c)
        }
        f || (f = u(a) ? a.host : a, (!a.__shady.root && "slot" !==
            b.localName || f === y.parentNode(b)) && x.removeChild.call(f, b));
        tb(a, null, b);
        return b
    }

    function ub(a) {
        if (a.__shady && void 0 !== a.__shady.ca) for (var b = a.childNodes, c = 0, d = b.length, e; c < d && (e = b[c]); c++) ub(e);
        a.__shady && (a.__shady.ca = void 0)
    }

    function sb(a) {
        var b = a;
        a && "slot" === a.localName && (b = (b = a.__shady && a.__shady.D) && b.length ? b[0] : sb(a.nextSibling));
        return b
    }

    function rb(a) {
        return (a = a && a.__shady && a.__shady.root) && wb(a)
    }

    function xb(a, b) {
        if ("slot" === b) a = a.parentNode, rb(a) && E(a.__shady.root); else if ("slot" === a.localName && "name" === b && (b = la(a))) {
            var c = a.qa, d = yb(a);
            if (d !== c) {
                c = b.i[c];
                var e = c.indexOf(a);
                0 <= e && c.splice(e, 1);
                c = b.i[d] || (b.i[d] = []);
                c.push(a);
                1 < c.length && (b.i[d] = zb(c))
            }
            E(b)
        }
    }

    function tb(a, b, c) {
        if (a = a.__shady && a.__shady.H) b && a.addedNodes.push(b), c && a.removedNodes.push(c), Ba(a)
    }

    function Ab(a) {
        if (a && a.nodeType) {
            a.__shady = a.__shady || {};
            var b = a.__shady.ca;
            void 0 === b && (b = u(a) ? a : (b = a.parentNode) ? Ab(b) : a, x.contains.call(document.documentElement, a) && (a.__shady.ca = b));
            return b
        }
    }

    function Bb(a, b, c) {
        var d = [];
        Cb(a.childNodes, b, c, d);
        return d
    }

    function Cb(a, b, c, d) {
        for (var e = 0, f = a.length, h; e < f && (h = a[e]); e++) {
            var g;
            if (g = h.nodeType === Node.ELEMENT_NODE) {
                g = h;
                var k = b, l = c, m = d, n = k(g);
                n && m.push(g);
                l && l(n) ? g = n : (Cb(g.childNodes, k, l, m), g = void 0)
            }
            if (g) break
        }
    }

    var Db = null;

    function Eb(a, b, c) {
        Db || (Db = window.ShadyCSS && window.ShadyCSS.ScopingShim);
        Db && "class" === b ? Db.setElementClass(a, c) : (x.setAttribute.call(a, b, c), xb(a, b))
    }

    function Fb(a, b) {
        if (a.ownerDocument !== document) return x.importNode.call(document, a, b);
        var c = x.importNode.call(document, a, !1);
        if (b) {
            a = a.childNodes;
            b = 0;
            for (var d; b < a.length; b++) d = Fb(a[b], !0), c.appendChild(d)
        }
        return c
    };var Gb = "__eventWrappers" + Date.now(), Hb = {
        blur: !0,
        focus: !0,
        focusin: !0,
        focusout: !0,
        click: !0,
        dblclick: !0,
        mousedown: !0,
        mouseenter: !0,
        mouseleave: !0,
        mousemove: !0,
        mouseout: !0,
        mouseover: !0,
        mouseup: !0,
        wheel: !0,
        beforeinput: !0,
        input: !0,
        keydown: !0,
        keyup: !0,
        compositionstart: !0,
        compositionupdate: !0,
        compositionend: !0,
        touchstart: !0,
        touchend: !0,
        touchmove: !0,
        touchcancel: !0,
        pointerover: !0,
        pointerenter: !0,
        pointerdown: !0,
        pointermove: !0,
        pointerup: !0,
        pointercancel: !0,
        pointerout: !0,
        pointerleave: !0,
        gotpointercapture: !0,
        lostpointercapture: !0,
        dragstart: !0,
        drag: !0,
        dragenter: !0,
        dragleave: !0,
        dragover: !0,
        drop: !0,
        dragend: !0,
        DOMActivate: !0,
        DOMFocusIn: !0,
        DOMFocusOut: !0,
        keypress: !0
    };

    function Ib(a, b) {
        var c = [], d = a;
        for (a = a === window ? window : a.getRootNode(); d;) c.push(d), d = d.assignedSlot ? d.assignedSlot : d.nodeType === Node.DOCUMENT_FRAGMENT_NODE && d.host && (b || d !== a) ? d.host : d.parentNode;
        c[c.length - 1] === document && c.push(window);
        return c
    }

    function Jb(a, b) {
        if (!u) return a;
        a = Ib(a, !0);
        for (var c = 0, d, e, f, h; c < b.length; c++) if (d = b[c], f = d === window ? window : d.getRootNode(), f !== e && (h = a.indexOf(f), e = f), !u(f) || -1 < h) return d
    }

    var Kb = {
        get composed() {
            !1 !== this.isTrusted && void 0 === this.S && (this.S = Hb[this.type]);
            return this.S || !1
        }, composedPath: function () {
            this.b || (this.b = Ib(this.__target, this.composed));
            return this.b
        }, get target() {
            return Jb(this.currentTarget, this.composedPath())
        }, get relatedTarget() {
            if (!this.T) return null;
            this.c || (this.c = Ib(this.T, !0));
            return Jb(this.currentTarget, this.c)
        }, stopPropagation: function () {
            Event.prototype.stopPropagation.call(this);
            this.a = !0
        }, stopImmediatePropagation: function () {
            Event.prototype.stopImmediatePropagation.call(this);
            this.a = this.f = !0
        }
    };

    function Lb(a) {
        function b(b, d) {
            b = new a(b, d);
            b.S = d && !!d.composed;
            return b
        }

        pa(b, a);
        b.prototype = a.prototype;
        return b
    }

    var Nb = {focus: !0, blur: !0};

    function Ob(a) {
        return a.__target !== a.target || a.T !== a.relatedTarget
    }

    function Pb(a, b, c) {
        if (c = b.__handlers && b.__handlers[a.type] && b.__handlers[a.type][c]) for (var d = 0, e; (e = c[d]) && (!Ob(a) || a.target !== a.relatedTarget) && (e.call(b, a), !a.f); d++) ;
    }

    function Qb(a) {
        var b = a.composedPath();
        Object.defineProperty(a, "currentTarget", {
            get: function () {
                return d
            }, configurable: !0
        });
        for (var c = b.length - 1; 0 <= c; c--) {
            var d = b[c];
            Pb(a, d, "capture");
            if (a.a) return
        }
        Object.defineProperty(a, "eventPhase", {
            get: function () {
                return Event.AT_TARGET
            }
        });
        var e;
        for (c = 0; c < b.length; c++) {
            d = b[c];
            var f = d.__shady && d.__shady.root;
            if (0 === c || f && f === e) if (Pb(a, d, "bubble"), d !== window && (e = d.getRootNode()), a.a) break
        }
    }

    function Rb(a, b, c, d, e, f) {
        for (var h = 0; h < a.length; h++) {
            var g = a[h], k = g.type, l = g.capture, m = g.once, n = g.passive;
            if (b === g.node && c === k && d === l && e === m && f === n) return h
        }
        return -1
    }

    function Sb(a, b, c) {
        if (b) {
            var d = typeof b;
            if ("function" === d || "object" === d) if ("object" !== d || b.handleEvent && "function" === typeof b.handleEvent) {
                if (c && "object" === typeof c) {
                    var e = !!c.capture;
                    var f = !!c.once;
                    var h = !!c.passive
                } else e = !!c, h = f = !1;
                var g = c && c.U || this, k = b[Gb];
                if (k) {
                    if (-1 < Rb(k, g, a, e, f, h)) return
                } else b[Gb] = [];
                k = function (e) {
                    f && this.removeEventListener(a, b, c);
                    e.__target || Tb(e);
                    if (g !== this) {
                        var h = Object.getOwnPropertyDescriptor(e, "currentTarget");
                        Object.defineProperty(e, "currentTarget", {
                            get: function () {
                                return g
                            },
                            configurable: !0
                        })
                    }
                    if (e.composed || -1 < e.composedPath().indexOf(g)) if (Ob(e) && e.target === e.relatedTarget) e.eventPhase === Event.BUBBLING_PHASE && e.stopImmediatePropagation(); else if (e.eventPhase === Event.CAPTURING_PHASE || e.bubbles || e.target === g || g instanceof Window) {
                        var k = "function" === d ? b.call(g, e) : b.handleEvent && b.handleEvent(e);
                        g !== this && (h ? (Object.defineProperty(e, "currentTarget", h), h = null) : delete e.currentTarget);
                        return k
                    }
                };
                b[Gb].push({node: this, type: a, capture: e, once: f, passive: h, Sa: k});
                Nb[a] ? (this.__handlers =
                    this.__handlers || {}, this.__handlers[a] = this.__handlers[a] || {
                    capture: [],
                    bubble: []
                }, this.__handlers[a][e ? "capture" : "bubble"].push(k)) : (this instanceof Window ? x.Qa : x.addEventListener).call(this, a, k, c)
            }
        }
    }

    function Ub(a, b, c) {
        if (b) {
            if (c && "object" === typeof c) {
                var d = !!c.capture;
                var e = !!c.once;
                var f = !!c.passive
            } else d = !!c, f = e = !1;
            var h = c && c.U || this, g = void 0;
            var k = null;
            try {
                k = b[Gb]
            } catch (l) {
            }
            k && (e = Rb(k, h, a, d, e, f), -1 < e && (g = k.splice(e, 1)[0].Sa, k.length || (b[Gb] = void 0)));
            (this instanceof Window ? x.Ra : x.removeEventListener).call(this, a, g || b, c);
            g && Nb[a] && this.__handlers && this.__handlers[a] && (a = this.__handlers[a][d ? "capture" : "bubble"], g = a.indexOf(g), -1 < g && a.splice(g, 1))
        }
    }

    function Vb() {
        for (var a in Nb) window.addEventListener(a, function (a) {
            a.__target || (Tb(a), Qb(a))
        }, !0)
    }

    function Tb(a) {
        a.__target = a.target;
        a.T = a.relatedTarget;
        if (r.G) {
            var b = Object.getPrototypeOf(a);
            if (!b.hasOwnProperty("__patchProto")) {
                var c = Object.create(b);
                c.Ua = b;
                na(c, Kb);
                b.__patchProto = c
            }
            a.__proto__ = b.__patchProto
        } else na(a, Kb)
    }

    var Wb = Lb(window.Event), Xb = Lb(window.CustomEvent), Yb = Lb(window.MouseEvent);

    function Zb(a, b) {
        return {index: a, I: [], M: b}
    }

    function $b(a, b, c, d) {
        var e = 0, f = 0, h = 0, g = 0, k = Math.min(b - e, d - f);
        if (0 == e && 0 == f) a:{
            for (h = 0; h < k; h++) if (a[h] !== c[h]) break a;
            h = k
        }
        if (b == a.length && d == c.length) {
            g = a.length;
            for (var l = c.length, m = 0; m < k - h && ac(a[--g], c[--l]);) m++;
            g = m
        }
        e += h;
        f += h;
        b -= g;
        d -= g;
        if (0 == b - e && 0 == d - f) return [];
        if (e == b) {
            for (b = Zb(e, 0); f < d;) b.I.push(c[f++]);
            return [b]
        }
        if (f == d) return [Zb(e, b - e)];
        k = e;
        h = f;
        d = d - h + 1;
        g = b - k + 1;
        b = Array(d);
        for (l = 0; l < d; l++) b[l] = Array(g), b[l][0] = l;
        for (l = 0; l < g; l++) b[0][l] = l;
        for (l = 1; l < d; l++) for (m = 1; m < g; m++) if (a[k + m - 1] === c[h + l - 1]) b[l][m] =
            b[l - 1][m - 1]; else {
            var n = b[l - 1][m] + 1, v = b[l][m - 1] + 1;
            b[l][m] = n < v ? n : v
        }
        k = b.length - 1;
        h = b[0].length - 1;
        d = b[k][h];
        for (a = []; 0 < k || 0 < h;) 0 == k ? (a.push(2), h--) : 0 == h ? (a.push(3), k--) : (g = b[k - 1][h - 1], l = b[k - 1][h], m = b[k][h - 1], n = l < m ? l < g ? l : g : m < g ? m : g, n == g ? (g == d ? a.push(0) : (a.push(1), d = g), k--, h--) : n == l ? (a.push(3), k--, d = l) : (a.push(2), h--, d = m));
        a.reverse();
        b = void 0;
        k = [];
        for (h = 0; h < a.length; h++) switch (a[h]) {
            case 0:
                b && (k.push(b), b = void 0);
                e++;
                f++;
                break;
            case 1:
                b || (b = Zb(e, 0));
                b.M++;
                e++;
                b.I.push(c[f]);
                f++;
                break;
            case 2:
                b || (b = Zb(e, 0));
                b.M++;
                e++;
                break;
            case 3:
                b || (b = Zb(e, 0)), b.I.push(c[f]), f++
        }
        b && k.push(b);
        return k
    }

    function ac(a, b) {
        return a === b
    };var bc = {};

    function G(a, b, c) {
        if (a !== bc) throw new TypeError("Illegal constructor");
        a = document.createDocumentFragment();
        a.__proto__ = G.prototype;
        a.oa = "ShadyRoot";
        ob(b);
        ob(a);
        a.host = b;
        a.ua = c && c.mode;
        b.__shady = b.__shady || {};
        b.__shady.root = a;
        b.__shady.Ka = "closed" !== a.ua ? a : null;
        a.L = !1;
        a.l = [];
        a.i = {};
        a.C = [];
        c = y.childNodes(b);
        for (var d = 0, e = c.length; d < e; d++) x.removeChild.call(b, c[d]);
        return a
    }

    G.prototype = Object.create(DocumentFragment.prototype);

    function E(a) {
        a.L || (a.L = !0, ya(function () {
            return cc(a)
        }))
    }

    function cc(a) {
        for (var b; a;) {
            a.L && (b = a);
            a:{
                var c = a;
                a = c.host.getRootNode();
                if (u(a)) for (var d = c.host.childNodes, e = 0; e < d.length; e++) if (c = d[e], "slot" == c.localName) break a;
                a = void 0
            }
        }
        b && b._renderRoot()
    }

    G.prototype._renderRoot = function () {
        this.L = !1;
        vb(this);
        for (var a = 0, b; a < this.l.length; a++) {
            b = this.l[a];
            var c = b.__shady.assignedNodes;
            b.__shady.assignedNodes = [];
            b.__shady.D = [];
            if (b.__shady.fa = c) for (var d = 0; d < c.length; d++) {
                var e = c[d];
                e.__shady.Z = e.__shady.assignedSlot;
                e.__shady.assignedSlot === b && (e.__shady.assignedSlot = null)
            }
        }
        for (b = this.host.firstChild; b; b = b.nextSibling) dc(this, b);
        for (a = 0; a < this.l.length; a++) {
            b = this.l[a];
            if (!b.__shady.assignedNodes.length) for (c = b.firstChild; c; c = c.nextSibling) dc(this,
                c, b);
            c = b.parentNode;
            (c = c.__shady && c.__shady.root) && wb(c) && c._renderRoot();
            ec(this, b.__shady.D, b.__shady.assignedNodes);
            if (c = b.__shady.fa) {
                for (d = 0; d < c.length; d++) c[d].__shady.Z = null;
                b.__shady.fa = null;
                c.length > b.__shady.assignedNodes.length && (b.__shady.aa = !0)
            }
            b.__shady.aa && (b.__shady.aa = !1, fc(this, b))
        }
        a = this.l;
        b = [];
        for (c = 0; c < a.length; c++) d = a[c].parentNode, d.__shady && d.__shady.root || !(0 > b.indexOf(d)) || b.push(d);
        for (a = 0; a < b.length; a++) {
            c = b[a];
            d = c === this ? this.host : c;
            e = [];
            c = c.childNodes;
            for (var f = 0; f < c.length; f++) {
                var h =
                    c[f];
                if ("slot" == h.localName) {
                    h = h.__shady.D;
                    for (var g = 0; g < h.length; g++) e.push(h[g])
                } else e.push(h)
            }
            c = void 0;
            f = y.childNodes(d);
            h = $b(e, e.length, f, f.length);
            for (var k = g = 0; g < h.length && (c = h[g]); g++) {
                for (var l = 0, m; l < c.I.length && (m = c.I[l]); l++) y.parentNode(m) === d && x.removeChild.call(d, m), f.splice(c.index + k, 1);
                k -= c.M
            }
            for (k = 0; k < h.length && (c = h[k]); k++) for (g = f[c.index], l = c.index; l < c.index + c.M; l++) m = e[l], x.insertBefore.call(d, m, g), f.splice(l, 0, m)
        }
    };

    function dc(a, b, c) {
        b.__shady = b.__shady || {};
        var d = b.__shady.Z;
        b.__shady.Z = null;
        c || (c = (a = a.i[b.slot || "__catchall"]) && a[0]);
        c ? (c.__shady.assignedNodes.push(b), b.__shady.assignedSlot = c) : b.__shady.assignedSlot = void 0;
        d !== b.__shady.assignedSlot && b.__shady.assignedSlot && (b.__shady.assignedSlot.__shady.aa = !0)
    }

    function ec(a, b, c) {
        for (var d = 0, e; d < c.length && (e = c[d]); d++) if ("slot" == e.localName) {
            var f = e.__shady.assignedNodes;
            f && f.length && ec(a, b, f)
        } else b.push(c[d])
    }

    function fc(a, b) {
        x.dispatchEvent.call(b, new Event("slotchange"));
        b.__shady.assignedSlot && fc(a, b.__shady.assignedSlot)
    }

    function vb(a) {
        if (a.C.length) {
            for (var b = a.C, c, d = 0; d < b.length; d++) {
                var e = b[d];
                e.__shady = e.__shady || {};
                ob(e);
                ob(e.parentNode);
                var f = yb(e);
                a.i[f] ? (c = c || {}, c[f] = !0, a.i[f].push(e)) : a.i[f] = [e];
                a.l.push(e)
            }
            if (c) for (var h in c) a.i[h] = zb(a.i[h]);
            a.C = []
        }
    }

    function yb(a) {
        var b = a.name || a.getAttribute("name") || "__catchall";
        return a.qa = b
    }

    function zb(a) {
        return a.sort(function (a, c) {
            a = gc(a);
            for (var b = gc(c), e = 0; e < a.length; e++) {
                c = a[e];
                var f = b[e];
                if (c !== f) return a = Array.from(c.parentNode.childNodes), a.indexOf(c) - a.indexOf(f)
            }
        })
    }

    function gc(a) {
        var b = [];
        do b.unshift(a); while (a = a.parentNode);
        return b
    }

    function wb(a) {
        vb(a);
        return !!a.l.length
    }

    G.prototype.addEventListener = function (a, b, c) {
        "object" !== typeof c && (c = {capture: !!c});
        c.U = this;
        this.host.addEventListener(a, b, c)
    };
    G.prototype.removeEventListener = function (a, b, c) {
        "object" !== typeof c && (c = {capture: !!c});
        c.U = this;
        this.host.removeEventListener(a, b, c)
    };
    G.prototype.getElementById = function (a) {
        return Bb(this, function (b) {
            return b.id == a
        }, function (a) {
            return !!a
        })[0] || null
    };
    var hc = G.prototype;
    C(hc, ib, !0);
    C(hc, kb, !0);

    function ic(a) {
        var b = a.getRootNode();
        u(b) && cc(b);
        return a.__shady && a.__shady.assignedSlot || null
    }

    var jc = {addEventListener: Sb.bind(window), removeEventListener: Ub.bind(window)}, kc = {
        addEventListener: Sb, removeEventListener: Ub, appendChild: function (a) {
            return pb(this, a)
        }, insertBefore: function (a, b) {
            return pb(this, a, b)
        }, removeChild: function (a) {
            return qb(this, a)
        }, replaceChild: function (a, b) {
            pb(this, a, b);
            qb(this, b);
            return a
        }, cloneNode: function (a) {
            if ("template" == this.localName) var b = x.cloneNode.call(this, a); else if (b = x.cloneNode.call(this, !1), a) {
                a = this.childNodes;
                for (var c = 0, d; c < a.length; c++) d = a[c].cloneNode(!0),
                    b.appendChild(d)
            }
            return b
        }, getRootNode: function () {
            return Ab(this)
        }, contains: function (a) {
            return va(this, a)
        }, get isConnected() {
            var a = this.ownerDocument;
            if (ua && x.contains.call(a, this) || a.documentElement && x.contains.call(a.documentElement, this)) return !0;
            for (a = this; a && !(a instanceof Document);) a = a.parentNode || (a instanceof G ? a.host : void 0);
            return !!(a && a instanceof Document)
        }, dispatchEvent: function (a) {
            za();
            return x.dispatchEvent.call(this, a)
        }
    }, lc = {
        get assignedSlot() {
            return ic(this)
        }
    }, mc = {
        querySelector: function (a) {
            return Bb(this,
                function (b) {
                    return ma.call(b, a)
                }, function (a) {
                    return !!a
                })[0] || null
        }, querySelectorAll: function (a) {
            return Bb(this, function (b) {
                return ma.call(b, a)
            })
        }
    }, nc = {
        assignedNodes: function (a) {
            if ("slot" === this.localName) {
                var b = this.getRootNode();
                u(b) && cc(b);
                return this.__shady ? (a && a.flatten ? this.__shady.D : this.__shady.assignedNodes) || [] : []
            }
        }
    }, oc = oa({
        setAttribute: function (a, b) {
            Eb(this, a, b)
        }, removeAttribute: function (a) {
            x.removeAttribute.call(this, a);
            xb(this, a)
        }, attachShadow: function (a) {
            if (!this) throw"Must provide a host.";
            if (!a) throw"Not enough arguments.";
            return new G(bc, this, a)
        }, get slot() {
            return this.getAttribute("slot")
        }, set slot(a) {
            Eb(this, "slot", a)
        }, get assignedSlot() {
            return ic(this)
        }
    }, mc, nc);
    Object.defineProperties(oc, jb);
    var pc = oa({
        importNode: function (a, b) {
            return Fb(a, b)
        }, getElementById: function (a) {
            return Bb(this, function (b) {
                return b.id == a
            }, function (a) {
                return !!a
            })[0] || null
        }
    }, mc);
    Object.defineProperties(pc, {_activeElement: kb.activeElement});
    var qc = HTMLElement.prototype.blur, rc = oa({
        blur: function () {
            var a = this.__shady && this.__shady.root;
            (a = a && a.activeElement) ? a.blur() : qc.call(this)
        }
    });

    function H(a, b) {
        for (var c = Object.getOwnPropertyNames(b), d = 0; d < c.length; d++) {
            var e = c[d], f = Object.getOwnPropertyDescriptor(b, e);
            f.value ? a[e] = f.value : Object.defineProperty(a, e, f)
        }
    };
    if (r.ia) {
        var ShadyDOM = {
            inUse: r.ia,
            patch: function (a) {
                return a
            },
            isShadyRoot: u,
            enqueue: ya,
            flush: za,
            settings: r,
            filterMutations: Fa,
            observeChildren: Da,
            unobserveChildren: Ea,
            nativeMethods: x,
            nativeTree: y
        };
        window.ShadyDOM = ShadyDOM;
        window.Event = Wb;
        window.CustomEvent = Xb;
        window.MouseEvent = Yb;
        Vb();
        var sc = window.customElements && window.customElements.nativeHTMLElement || HTMLElement;
        H(window.Node.prototype, kc);
        H(window.Window.prototype, jc);
        H(window.Text.prototype, lc);
        H(window.DocumentFragment.prototype, mc);
        H(window.Element.prototype,
            oc);
        H(window.Document.prototype, pc);
        window.HTMLSlotElement && H(window.HTMLSlotElement.prototype, nc);
        H(sc.prototype, rc);
        r.G && (D(window.Node.prototype), D(window.Text.prototype), D(window.DocumentFragment.prototype), D(window.Element.prototype), D(sc.prototype), D(window.Document.prototype), window.HTMLSlotElement && D(window.HTMLSlotElement.prototype));
        window.ShadowRoot = G
    }
    ;var tc = new Set("annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" "));

    function uc(a) {
        var b = tc.has(a);
        a = /^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(a);
        return !b && a
    }

    function I(a) {
        var b = a.isConnected;
        if (void 0 !== b) return b;
        for (; a && !(a.__CE_isImportDocument || a instanceof Document);) a = a.parentNode || (window.ShadowRoot && a instanceof ShadowRoot ? a.host : void 0);
        return !(!a || !(a.__CE_isImportDocument || a instanceof Document))
    }

    function vc(a, b) {
        for (; b && b !== a && !b.nextSibling;) b = b.parentNode;
        return b && b !== a ? b.nextSibling : null
    }

    function J(a, b, c) {
        c = void 0 === c ? new Set : c;
        for (var d = a; d;) {
            if (d.nodeType === Node.ELEMENT_NODE) {
                var e = d;
                b(e);
                var f = e.localName;
                if ("link" === f && "import" === e.getAttribute("rel")) {
                    d = e.import;
                    if (d instanceof Node && !c.has(d)) for (c.add(d), d = d.firstChild; d; d = d.nextSibling) J(d, b, c);
                    d = vc(a, e);
                    continue
                } else if ("template" === f) {
                    d = vc(a, e);
                    continue
                }
                if (e = e.__CE_shadowRoot) for (e = e.firstChild; e; e = e.nextSibling) J(e, b, c)
            }
            d = d.firstChild ? d.firstChild : vc(a, d)
        }
    }

    function K(a, b, c) {
        a[b] = c
    };

    function wc() {
        this.a = new Map;
        this.m = new Map;
        this.f = [];
        this.c = !1
    }

    function xc(a, b, c) {
        a.a.set(b, c);
        a.m.set(c.constructor, c)
    }

    function yc(a, b) {
        a.c = !0;
        a.f.push(b)
    }

    function zc(a, b) {
        a.c && J(b, function (b) {
            return a.b(b)
        })
    }

    wc.prototype.b = function (a) {
        if (this.c && !a.__CE_patched) {
            a.__CE_patched = !0;
            for (var b = 0; b < this.f.length; b++) this.f[b](a)
        }
    };

    function L(a, b) {
        var c = [];
        J(b, function (a) {
            return c.push(a)
        });
        for (b = 0; b < c.length; b++) {
            var d = c[b];
            1 === d.__CE_state ? a.connectedCallback(d) : Ac(a, d)
        }
    }

    function M(a, b) {
        var c = [];
        J(b, function (a) {
            return c.push(a)
        });
        for (b = 0; b < c.length; b++) {
            var d = c[b];
            1 === d.__CE_state && a.disconnectedCallback(d)
        }
    }

    function N(a, b, c) {
        c = void 0 === c ? {} : c;
        var d = c.Pa || new Set, e = c.la || function (b) {
            return Ac(a, b)
        }, f = [];
        J(b, function (b) {
            if ("link" === b.localName && "import" === b.getAttribute("rel")) {
                var c = b.import;
                c instanceof Node && (c.__CE_isImportDocument = !0, c.__CE_hasRegistry = !0);
                c && "complete" === c.readyState ? c.__CE_documentLoadHandled = !0 : b.addEventListener("load", function () {
                    var c = b.import;
                    if (!c.__CE_documentLoadHandled) {
                        c.__CE_documentLoadHandled = !0;
                        var f = new Set(d);
                        f.delete(c);
                        N(a, c, {Pa: f, la: e})
                    }
                })
            } else f.push(b)
        }, d);
        if (a.c) for (b =
                          0; b < f.length; b++) a.b(f[b]);
        for (b = 0; b < f.length; b++) e(f[b])
    }

    function Ac(a, b) {
        if (void 0 === b.__CE_state) {
            var c = b.ownerDocument;
            if (c.defaultView || c.__CE_isImportDocument && c.__CE_hasRegistry) if (c = a.a.get(b.localName)) {
                c.constructionStack.push(b);
                var d = c.constructor;
                try {
                    try {
                        if (new d !== b) throw Error("The custom element constructor did not produce the element being upgraded.");
                    } finally {
                        c.constructionStack.pop()
                    }
                } catch (h) {
                    throw b.__CE_state = 2, h;
                }
                b.__CE_state = 1;
                b.__CE_definition = c;
                if (c.attributeChangedCallback) for (c = c.observedAttributes, d = 0; d < c.length; d++) {
                    var e = c[d],
                        f = b.getAttribute(e);
                    null !== f && a.attributeChangedCallback(b, e, null, f, null)
                }
                I(b) && a.connectedCallback(b)
            }
        }
    }

    wc.prototype.connectedCallback = function (a) {
        var b = a.__CE_definition;
        b.connectedCallback && b.connectedCallback.call(a)
    };
    wc.prototype.disconnectedCallback = function (a) {
        var b = a.__CE_definition;
        b.disconnectedCallback && b.disconnectedCallback.call(a)
    };
    wc.prototype.attributeChangedCallback = function (a, b, c, d, e) {
        var f = a.__CE_definition;
        f.attributeChangedCallback && -1 < f.observedAttributes.indexOf(b) && f.attributeChangedCallback.call(a, b, c, d, e)
    };

    function Bc(a) {
        var b = document;
        this.h = a;
        this.a = b;
        this.w = void 0;
        N(this.h, this.a);
        "loading" === this.a.readyState && (this.w = new MutationObserver(this.b.bind(this)), this.w.observe(this.a, {
            childList: !0,
            subtree: !0
        }))
    }

    Bc.prototype.disconnect = function () {
        this.w && this.w.disconnect()
    };
    Bc.prototype.b = function (a) {
        var b = this.a.readyState;
        "interactive" !== b && "complete" !== b || this.disconnect();
        for (b = 0; b < a.length; b++) for (var c = a[b].addedNodes, d = 0; d < c.length; d++) N(this.h, c[d])
    };

    function Cc() {
        var a = this;
        this.b = this.a = void 0;
        this.c = new Promise(function (b) {
            a.b = b;
            a.a && b(a.a)
        })
    }

    function Dc(a) {
        if (a.a) throw Error("Already resolved.");
        a.a = void 0;
        a.b && a.b(void 0)
    };

    function O(a) {
        this.W = !1;
        this.h = a;
        this.$ = new Map;
        this.X = function (a) {
            return a()
        };
        this.K = !1;
        this.Y = [];
        this.ta = new Bc(a)
    }

    O.prototype.define = function (a, b) {
        var c = this;
        if (!(b instanceof Function)) throw new TypeError("Custom element constructors must be functions.");
        if (!uc(a)) throw new SyntaxError("The element name '" + a + "' is not valid.");
        if (this.h.a.get(a)) throw Error("A custom element with name '" + a + "' has already been defined.");
        if (this.W) throw Error("A custom element is already being defined.");
        this.W = !0;
        try {
            var d = function (a) {
                var b = e[a];
                if (void 0 !== b && !(b instanceof Function)) throw Error("The '" + a + "' callback must be a function.");
                return b
            }, e = b.prototype;
            if (!(e instanceof Object)) throw new TypeError("The custom element constructor's prototype is not an object.");
            var f = d("connectedCallback");
            var h = d("disconnectedCallback");
            var g = d("adoptedCallback");
            var k = d("attributeChangedCallback");
            var l = b.observedAttributes || []
        } catch (m) {
            return
        } finally {
            this.W = !1
        }
        b = {
            localName: a,
            constructor: b,
            connectedCallback: f,
            disconnectedCallback: h,
            adoptedCallback: g,
            attributeChangedCallback: k,
            observedAttributes: l,
            constructionStack: []
        };
        xc(this.h, a, b);
        this.Y.push(b);
        this.K || (this.K = !0, this.X(function () {
            return Ec(c)
        }))
    };

    function Ec(a) {
        if (!1 !== a.K) {
            a.K = !1;
            for (var b = a.Y, c = [], d = new Map, e = 0; e < b.length; e++) d.set(b[e].localName, []);
            N(a.h, document, {
                la: function (b) {
                    if (void 0 === b.__CE_state) {
                        var e = b.localName, f = d.get(e);
                        f ? f.push(b) : a.h.a.get(e) && c.push(b)
                    }
                }
            });
            for (e = 0; e < c.length; e++) Ac(a.h, c[e]);
            for (; 0 < b.length;) {
                var f = b.shift();
                e = f.localName;
                f = d.get(f.localName);
                for (var h = 0; h < f.length; h++) Ac(a.h, f[h]);
                (e = a.$.get(e)) && Dc(e)
            }
        }
    }

    O.prototype.get = function (a) {
        if (a = this.h.a.get(a)) return a.constructor
    };
    O.prototype.a = function (a) {
        if (!uc(a)) return Promise.reject(new SyntaxError("'" + a + "' is not a valid custom element name."));
        var b = this.$.get(a);
        if (b) return b.c;
        b = new Cc;
        this.$.set(a, b);
        this.h.a.get(a) && !this.Y.some(function (b) {
            return b.localName === a
        }) && Dc(b);
        return b.c
    };
    O.prototype.b = function (a) {
        this.ta.disconnect();
        var b = this.X;
        this.X = function (c) {
            return a(function () {
                return b(c)
            })
        }
    };
    window.CustomElementRegistry = O;
    O.prototype.define = O.prototype.define;
    O.prototype.get = O.prototype.get;
    O.prototype.whenDefined = O.prototype.a;
    O.prototype.polyfillWrapFlushCallback = O.prototype.b;
    var Fc = window.Document.prototype.createElement, Gc = window.Document.prototype.createElementNS,
        Hc = window.Document.prototype.importNode, Ic = window.Document.prototype.prepend,
        Jc = window.Document.prototype.append, Kc = window.DocumentFragment.prototype.prepend,
        Lc = window.DocumentFragment.prototype.append, Mc = window.Node.prototype.cloneNode,
        Nc = window.Node.prototype.appendChild, Oc = window.Node.prototype.insertBefore,
        Pc = window.Node.prototype.removeChild, Qc = window.Node.prototype.replaceChild,
        Rc = Object.getOwnPropertyDescriptor(window.Node.prototype,
            "textContent"), Sc = window.Element.prototype.attachShadow,
        Tc = Object.getOwnPropertyDescriptor(window.Element.prototype, "innerHTML"),
        Uc = window.Element.prototype.getAttribute, Vc = window.Element.prototype.setAttribute,
        Wc = window.Element.prototype.removeAttribute, Xc = window.Element.prototype.getAttributeNS,
        Yc = window.Element.prototype.setAttributeNS, Zc = window.Element.prototype.removeAttributeNS,
        $c = window.Element.prototype.insertAdjacentElement, ad = window.Element.prototype.prepend,
        bd = window.Element.prototype.append,
        cd = window.Element.prototype.before, dd = window.Element.prototype.after,
        ed = window.Element.prototype.replaceWith, fd = window.Element.prototype.remove, gd = window.HTMLElement,
        hd = Object.getOwnPropertyDescriptor(window.HTMLElement.prototype, "innerHTML"),
        id = window.HTMLElement.prototype.insertAdjacentElement;
    var jd = new function () {
    };

    function kd() {
        var a = P;
        window.HTMLElement = function () {
            function b() {
                var b = this.constructor, d = a.m.get(b);
                if (!d) throw Error("The custom element being constructed was not registered with `customElements`.");
                var e = d.constructionStack;
                if (0 === e.length) return e = Fc.call(document, d.localName), Object.setPrototypeOf(e, b.prototype), e.__CE_state = 1, e.__CE_definition = d, a.b(e), e;
                d = e.length - 1;
                var f = e[d];
                if (f === jd) throw Error("The HTMLElement constructor was either called reentrantly for this constructor or called multiple times.");
                e[d] = jd;
                Object.setPrototypeOf(f, b.prototype);
                a.b(f);
                return f
            }

            b.prototype = gd.prototype;
            return b
        }()
    };

    function ld(a, b, c) {
        function d(b) {
            return function (c) {
                for (var d = [], e = 0; e < arguments.length; ++e) d[e - 0] = arguments[e];
                e = [];
                for (var f = [], l = 0; l < d.length; l++) {
                    var m = d[l];
                    m instanceof Element && I(m) && f.push(m);
                    if (m instanceof DocumentFragment) for (m = m.firstChild; m; m = m.nextSibling) e.push(m); else e.push(m)
                }
                b.apply(this, d);
                for (d = 0; d < f.length; d++) M(a, f[d]);
                if (I(this)) for (d = 0; d < e.length; d++) f = e[d], f instanceof Element && L(a, f)
            }
        }

        void 0 !== c.P && (b.prepend = d(c.P));
        void 0 !== c.append && (b.append = d(c.append))
    };

    function md() {
        var a = P;
        K(Document.prototype, "createElement", function (b) {
            if (this.__CE_hasRegistry) {
                var c = a.a.get(b);
                if (c) return new c.constructor
            }
            b = Fc.call(this, b);
            a.b(b);
            return b
        });
        K(Document.prototype, "importNode", function (b, c) {
            b = Hc.call(this, b, c);
            this.__CE_hasRegistry ? N(a, b) : zc(a, b);
            return b
        });
        K(Document.prototype, "createElementNS", function (b, c) {
            if (this.__CE_hasRegistry && (null === b || "http://www.w3.org/1999/xhtml" === b)) {
                var d = a.a.get(c);
                if (d) return new d.constructor
            }
            b = Gc.call(this, b, c);
            a.b(b);
            return b
        });
        ld(a, Document.prototype, {P: Ic, append: Jc})
    };

    function nd() {
        var a = P;

        function b(b, d) {
            Object.defineProperty(b, "textContent", {
                enumerable: d.enumerable,
                configurable: !0,
                get: d.get,
                set: function (b) {
                    if (this.nodeType === Node.TEXT_NODE) d.set.call(this, b); else {
                        var c = void 0;
                        if (this.firstChild) {
                            var e = this.childNodes, g = e.length;
                            if (0 < g && I(this)) {
                                c = Array(g);
                                for (var k = 0; k < g; k++) c[k] = e[k]
                            }
                        }
                        d.set.call(this, b);
                        if (c) for (b = 0; b < c.length; b++) M(a, c[b])
                    }
                }
            })
        }

        K(Node.prototype, "insertBefore", function (b, d) {
            if (b instanceof DocumentFragment) {
                var c = Array.prototype.slice.apply(b.childNodes);
                b = Oc.call(this, b, d);
                if (I(this)) for (d = 0; d < c.length; d++) L(a, c[d]);
                return b
            }
            c = I(b);
            d = Oc.call(this, b, d);
            c && M(a, b);
            I(this) && L(a, b);
            return d
        });
        K(Node.prototype, "appendChild", function (b) {
            if (b instanceof DocumentFragment) {
                var c = Array.prototype.slice.apply(b.childNodes);
                b = Nc.call(this, b);
                if (I(this)) for (var e = 0; e < c.length; e++) L(a, c[e]);
                return b
            }
            c = I(b);
            e = Nc.call(this, b);
            c && M(a, b);
            I(this) && L(a, b);
            return e
        });
        K(Node.prototype, "cloneNode", function (b) {
            b = Mc.call(this, b);
            this.ownerDocument.__CE_hasRegistry ? N(a, b) :
                zc(a, b);
            return b
        });
        K(Node.prototype, "removeChild", function (b) {
            var c = I(b), e = Pc.call(this, b);
            c && M(a, b);
            return e
        });
        K(Node.prototype, "replaceChild", function (b, d) {
            if (b instanceof DocumentFragment) {
                var c = Array.prototype.slice.apply(b.childNodes);
                b = Qc.call(this, b, d);
                if (I(this)) for (M(a, d), d = 0; d < c.length; d++) L(a, c[d]);
                return b
            }
            c = I(b);
            var f = Qc.call(this, b, d), h = I(this);
            h && M(a, d);
            c && M(a, b);
            h && L(a, b);
            return f
        });
        Rc && Rc.get ? b(Node.prototype, Rc) : yc(a, function (a) {
            b(a, {
                enumerable: !0, configurable: !0, get: function () {
                    for (var a =
                        [], b = 0; b < this.childNodes.length; b++) a.push(this.childNodes[b].textContent);
                    return a.join("")
                }, set: function (a) {
                    for (; this.firstChild;) Pc.call(this, this.firstChild);
                    Nc.call(this, document.createTextNode(a))
                }
            })
        })
    };

    function od(a) {
        var b = Element.prototype;

        function c(b) {
            return function (c) {
                for (var d = [], e = 0; e < arguments.length; ++e) d[e - 0] = arguments[e];
                e = [];
                for (var g = [], k = 0; k < d.length; k++) {
                    var l = d[k];
                    l instanceof Element && I(l) && g.push(l);
                    if (l instanceof DocumentFragment) for (l = l.firstChild; l; l = l.nextSibling) e.push(l); else e.push(l)
                }
                b.apply(this, d);
                for (d = 0; d < g.length; d++) M(a, g[d]);
                if (I(this)) for (d = 0; d < e.length; d++) g = e[d], g instanceof Element && L(a, g)
            }
        }

        void 0 !== cd && (b.before = c(cd));
        void 0 !== cd && (b.after = c(dd));
        void 0 !==
        ed && K(b, "replaceWith", function (b) {
            for (var c = [], d = 0; d < arguments.length; ++d) c[d - 0] = arguments[d];
            d = [];
            for (var h = [], g = 0; g < c.length; g++) {
                var k = c[g];
                k instanceof Element && I(k) && h.push(k);
                if (k instanceof DocumentFragment) for (k = k.firstChild; k; k = k.nextSibling) d.push(k); else d.push(k)
            }
            g = I(this);
            ed.apply(this, c);
            for (c = 0; c < h.length; c++) M(a, h[c]);
            if (g) for (M(a, this), c = 0; c < d.length; c++) h = d[c], h instanceof Element && L(a, h)
        });
        void 0 !== fd && K(b, "remove", function () {
            var b = I(this);
            fd.call(this);
            b && M(a, this)
        })
    };

    function pd() {
        var a = P;

        function b(b, c) {
            Object.defineProperty(b, "innerHTML", {
                enumerable: c.enumerable,
                configurable: !0,
                get: c.get,
                set: function (b) {
                    var d = this, e = void 0;
                    I(this) && (e = [], J(this, function (a) {
                        a !== d && e.push(a)
                    }));
                    c.set.call(this, b);
                    if (e) for (var f = 0; f < e.length; f++) {
                        var l = e[f];
                        1 === l.__CE_state && a.disconnectedCallback(l)
                    }
                    this.ownerDocument.__CE_hasRegistry ? N(a, this) : zc(a, this);
                    return b
                }
            })
        }

        function c(b, c) {
            K(b, "insertAdjacentElement", function (b, d) {
                var e = I(d);
                b = c.call(this, b, d);
                e && M(a, d);
                I(b) && L(a, d);
                return b
            })
        }

        Sc && K(Element.prototype, "attachShadow", function (a) {
            return this.__CE_shadowRoot = a = Sc.call(this, a)
        });
        Tc && Tc.get ? b(Element.prototype, Tc) : hd && hd.get ? b(HTMLElement.prototype, hd) : yc(a, function (a) {
            b(a, {
                enumerable: !0, configurable: !0, get: function () {
                    return Mc.call(this, !0).innerHTML
                }, set: function (a) {
                    var b = "template" === this.localName, c = b ? this.content : this,
                        d = Fc.call(document, this.localName);
                    for (d.innerHTML = a; 0 < c.childNodes.length;) Pc.call(c, c.childNodes[0]);
                    for (a = b ? d.content : d; 0 < a.childNodes.length;) Nc.call(c,
                        a.childNodes[0])
                }
            })
        });
        K(Element.prototype, "setAttribute", function (b, c) {
            if (1 !== this.__CE_state) return Vc.call(this, b, c);
            var d = Uc.call(this, b);
            Vc.call(this, b, c);
            c = Uc.call(this, b);
            a.attributeChangedCallback(this, b, d, c, null)
        });
        K(Element.prototype, "setAttributeNS", function (b, c, f) {
            if (1 !== this.__CE_state) return Yc.call(this, b, c, f);
            var d = Xc.call(this, b, c);
            Yc.call(this, b, c, f);
            f = Xc.call(this, b, c);
            a.attributeChangedCallback(this, c, d, f, b)
        });
        K(Element.prototype, "removeAttribute", function (b) {
            if (1 !== this.__CE_state) return Wc.call(this,
                b);
            var c = Uc.call(this, b);
            Wc.call(this, b);
            null !== c && a.attributeChangedCallback(this, b, c, null, null)
        });
        K(Element.prototype, "removeAttributeNS", function (b, c) {
            if (1 !== this.__CE_state) return Zc.call(this, b, c);
            var d = Xc.call(this, b, c);
            Zc.call(this, b, c);
            var e = Xc.call(this, b, c);
            d !== e && a.attributeChangedCallback(this, c, d, e, b)
        });
        id ? c(HTMLElement.prototype, id) : $c ? c(Element.prototype, $c) : console.warn("Custom Elements: `Element#insertAdjacentElement` was not patched.");
        ld(a, Element.prototype, {P: ad, append: bd});
        od(a)
    }
    ;var qd = window.customElements;
    if (!qd || qd.forcePolyfill || "function" != typeof qd.define || "function" != typeof qd.get) {
        var P = new wc;
        kd();
        md();
        ld(P, DocumentFragment.prototype, {P: Kc, append: Lc});
        nd();
        pd();
        document.__CE_hasRegistry = !0;
        var customElements = new O(P);
        Object.defineProperty(window, "customElements", {configurable: !0, enumerable: !0, value: customElements})
    }
    ;

    /*

Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
    function rd() {
        this.end = this.start = 0;
        this.rules = this.parent = this.previous = null;
        this.cssText = this.parsedCssText = "";
        this.atRule = !1;
        this.type = 0;
        this.parsedSelector = this.selector = this.keyframesName = ""
    }

    function sd(a) {
        a = a.replace(td, "").replace(ud, "");
        var b = vd, c = a, d = new rd;
        d.start = 0;
        d.end = c.length;
        for (var e = d, f = 0, h = c.length; f < h; f++) if ("{" === c[f]) {
            e.rules || (e.rules = []);
            var g = e, k = g.rules[g.rules.length - 1] || null;
            e = new rd;
            e.start = f + 1;
            e.parent = g;
            e.previous = k;
            g.rules.push(e)
        } else "}" === c[f] && (e.end = f + 1, e = e.parent || d);
        return b(d, a)
    }

    function vd(a, b) {
        var c = b.substring(a.start, a.end - 1);
        a.parsedCssText = a.cssText = c.trim();
        a.parent && (c = b.substring(a.previous ? a.previous.end : a.parent.start, a.start - 1), c = wd(c), c = c.replace(xd, " "), c = c.substring(c.lastIndexOf(";") + 1), c = a.parsedSelector = a.selector = c.trim(), a.atRule = 0 === c.indexOf("@"), a.atRule ? 0 === c.indexOf("@media") ? a.type = yd : c.match(zd) && (a.type = Ad, a.keyframesName = a.selector.split(xd).pop()) : a.type = 0 === c.indexOf("--") ? Bd : Cd);
        if (c = a.rules) for (var d = 0, e = c.length, f; d < e && (f = c[d]); d++) vd(f,
            b);
        return a
    }

    function wd(a) {
        return a.replace(/\\([0-9a-f]{1,6})\s/gi, function (a, c) {
            a = c;
            for (c = 6 - a.length; c--;) a = "0" + a;
            return "\\" + a
        })
    }

    function Dd(a, b, c) {
        c = void 0 === c ? "" : c;
        var d = "";
        if (a.cssText || a.rules) {
            var e = a.rules, f;
            if (f = e) f = e[0], f = !(f && f.selector && 0 === f.selector.indexOf("--"));
            if (f) {
                f = 0;
                for (var h = e.length, g; f < h && (g = e[f]); f++) d = Dd(g, b, d)
            } else b ? b = a.cssText : (b = a.cssText, b = b.replace(Ed, "").replace(Fd, ""), b = b.replace(Gd, "").replace(Hd, "")), (d = b.trim()) && (d = "  " + d + "\n")
        }
        d && (a.selector && (c += a.selector + " {\n"), c += d, a.selector && (c += "}\n\n"));
        return c
    }

    var Cd = 1, Ad = 7, yd = 4, Bd = 1E3, td = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim, ud = /@import[^;]*;/gim,
        Ed = /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,
        Fd = /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,
        Gd = /@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim, Hd = /[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,
        zd = /^@[^\s]*keyframes/, xd = /\s+/g;
    var Q = !(window.ShadyDOM && window.ShadyDOM.inUse), Id;

    function Jd(a) {
        Id = a && a.shimcssproperties ? !1 : Q || !(navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/) || !window.CSS || !CSS.supports || !CSS.supports("box-shadow", "0 0 0 var(--foo)"))
    }

    window.ShadyCSS && void 0 !== window.ShadyCSS.nativeCss ? Id = window.ShadyCSS.nativeCss : window.ShadyCSS ? (Jd(window.ShadyCSS), window.ShadyCSS = void 0) : Jd(window.WebComponents && window.WebComponents.flags);
    var R = Id;
    var Kd = /(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,
        Pd = /(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi, Qd = /(--[\w-]+)\s*([:,;)]|$)/gi,
        Rd = /(animation\s*:)|(animation-name\s*:)/, Sd = /@media\s(.*)/, Td = /\{[^}]*\}/g;
    var Ud = new Set;

    function S(a, b) {
        if (!a) return "";
        "string" === typeof a && (a = sd(a));
        b && T(a, b);
        return Dd(a, R)
    }

    function Vd(a) {
        !a.__cssRules && a.textContent && (a.__cssRules = sd(a.textContent));
        return a.__cssRules || null
    }

    function Wd(a) {
        return !!a.parent && a.parent.type === Ad
    }

    function T(a, b, c, d) {
        if (a) {
            var e = !1, f = a.type;
            if (d && f === yd) {
                var h = a.selector.match(Sd);
                h && (window.matchMedia(h[1]).matches || (e = !0))
            }
            f === Cd ? b(a) : c && f === Ad ? c(a) : f === Bd && (e = !0);
            if ((a = a.rules) && !e) {
                e = 0;
                f = a.length;
                for (var g; e < f && (g = a[e]); e++) T(g, b, c, d)
            }
        }
    }

    function Xd(a, b, c, d) {
        var e = document.createElement("style");
        b && e.setAttribute("scope", b);
        e.textContent = a;
        Yd(e, c, d);
        return e
    }

    var U = null;

    function Yd(a, b, c) {
        b = b || document.head;
        b.insertBefore(a, c && c.nextSibling || b.firstChild);
        U ? a.compareDocumentPosition(U) === Node.DOCUMENT_POSITION_PRECEDING && (U = a) : U = a
    }

    function Zd(a, b) {
        var c = a.indexOf("var(");
        if (-1 === c) return b(a, "", "", "");
        a:{
            var d = 0;
            var e = c + 3;
            for (var f = a.length; e < f; e++) if ("(" === a[e]) d++; else if (")" === a[e] && 0 === --d) break a;
            e = -1
        }
        d = a.substring(c + 4, e);
        c = a.substring(0, c);
        a = Zd(a.substring(e + 1), b);
        e = d.indexOf(",");
        return -1 === e ? b(c, d.trim(), "", a) : b(c, d.substring(0, e).trim(), d.substring(e + 1).trim(), a)
    }

    function $d(a, b) {
        Q ? a.setAttribute("class", b) : window.ShadyDOM.nativeMethods.setAttribute.call(a, "class", b)
    }

    function V(a) {
        var b = a.localName, c = "";
        b ? -1 < b.indexOf("-") || (c = b, b = a.getAttribute && a.getAttribute("is") || "") : (b = a.is, c = a.extends);
        return {is: b, J: c}
    };

    function ae() {
    }

    function be(a, b, c) {
        var d = W;
        a.__styleScoped ? a.__styleScoped = null : ce(d, a, b || "", c)
    }

    function ce(a, b, c, d) {
        b.nodeType === Node.ELEMENT_NODE && de(b, c, d);
        if (b = "template" === b.localName ? (b.content || b.Va).childNodes : b.children || b.childNodes) for (var e = 0; e < b.length; e++) ce(a, b[e], c, d)
    }

    function de(a, b, c) {
        if (b) if (a.classList) c ? (a.classList.remove("style-scope"), a.classList.remove(b)) : (a.classList.add("style-scope"), a.classList.add(b)); else if (a.getAttribute) {
            var d = a.getAttribute(ee);
            c ? d && (b = d.replace("style-scope", "").replace(b, ""), $d(a, b)) : $d(a, (d ? d + " " : "") + "style-scope " + b)
        }
    }

    function fe(a, b, c) {
        var d = W, e = a.__cssBuild;
        Q || "shady" === e ? b = S(b, c) : (a = V(a), b = ge(d, b, a.is, a.J, c) + "\n\n");
        return b.trim()
    }

    function ge(a, b, c, d, e) {
        var f = he(c, d);
        c = c ? ie + c : "";
        return S(b, function (b) {
            b.c || (b.selector = b.j = je(a, b, a.b, c, f), b.c = !0);
            e && e(b, c, f)
        })
    }

    function he(a, b) {
        return b ? "[is=" + a + "]" : a
    }

    function je(a, b, c, d, e) {
        var f = b.selector.split(ke);
        if (!Wd(b)) {
            b = 0;
            for (var h = f.length, g; b < h && (g = f[b]); b++) f[b] = c.call(a, g, d, e)
        }
        return f.join(ke)
    }

    function le(a) {
        return a.replace(me, function (a, c, d) {
            -1 < d.indexOf("+") ? d = d.replace(/\+/g, "___") : -1 < d.indexOf("___") && (d = d.replace(/___/g, "+"));
            return ":" + c + "(" + d + ")"
        })
    }

    ae.prototype.b = function (a, b, c) {
        var d = !1;
        a = a.trim();
        var e = me.test(a);
        e && (a = a.replace(me, function (a, b, c) {
            return ":" + b + "(" + c.replace(/\s/g, "") + ")"
        }), a = le(a));
        a = a.replace(ne, oe + " $1");
        a = a.replace(pe, function (a, e, g) {
            d || (a = qe(g, e, b, c), d = d || a.stop, e = a.za, g = a.value);
            return e + g
        });
        e && (a = le(a));
        return a
    };

    function qe(a, b, c, d) {
        var e = a.indexOf(re);
        0 <= a.indexOf(oe) ? a = se(a, d) : 0 !== e && (a = c ? te(a, c) : a);
        c = !1;
        0 <= e && (b = "", c = !0);
        if (c) {
            var f = !0;
            c && (a = a.replace(ue, function (a, b) {
                return " > " + b
            }))
        }
        a = a.replace(ve, function (a, b, c) {
            return '[dir="' + c + '"] ' + b + ", " + b + '[dir="' + c + '"]'
        });
        return {value: a, za: b, stop: f}
    }

    function te(a, b) {
        a = a.split(we);
        a[0] += b;
        return a.join(we)
    }

    function se(a, b) {
        var c = a.match(xe);
        return (c = c && c[2].trim() || "") ? c[0].match(ye) ? a.replace(xe, function (a, c, f) {
            return b + f
        }) : c.split(ye)[0] === b ? c : ze : a.replace(oe, b)
    }

    function Ae(a) {
        a.selector === Be && (a.selector = "html")
    }

    ae.prototype.c = function (a) {
        return a.match(re) ? this.b(a, Ce) : te(a.trim(), Ce)
    };
    q.Object.defineProperties(ae.prototype, {
        a: {
            configurable: !0, enumerable: !0, get: function () {
                return "style-scope"
            }
        }
    });
    var me = /:(nth[-\w]+)\(([^)]+)\)/, Ce = ":not(.style-scope)", ke = ",",
        pe = /(^|[\s>+~]+)((?:\[.+?\]|[^\s>+~=[])+)/g, ye = /[[.:#*]/, oe = ":host", Be = ":root", re = "::slotted",
        ne = new RegExp("^(" + re + ")"), xe = /(:host)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,
        ue = /(?:::slotted)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/, ve = /(.*):dir\((?:(ltr|rtl))\)/, ie = ".", we = ":",
        ee = "class", ze = "should_not_match", W = new ae;

    function De(a, b, c, d) {
        this.u = a || null;
        this.b = b || null;
        this.ba = c || [];
        this.B = null;
        this.J = d || "";
        this.a = this.o = this.v = null
    }

    function X(a) {
        return a ? a.__styleInfo : null
    }

    function Ee(a, b) {
        return a.__styleInfo = b
    }

    De.prototype.c = function () {
        return this.u
    };
    De.prototype._getStyleRules = De.prototype.c;
    var Fe, Ge = window.Element.prototype;
    Fe = Ge.matches || Ge.matchesSelector || Ge.mozMatchesSelector || Ge.msMatchesSelector || Ge.oMatchesSelector || Ge.webkitMatchesSelector;
    var He = navigator.userAgent.match("Trident");

    function Ie() {
    }

    function Je(a) {
        var b = {}, c = [], d = 0;
        T(a, function (a) {
            Ke(a);
            a.index = d++;
            a = a.g.cssText;
            for (var c; c = Qd.exec(a);) {
                var e = c[1];
                ":" !== c[2] && (b[e] = !0)
            }
        }, function (a) {
            c.push(a)
        });
        a.b = c;
        a = [];
        for (var e in b) a.push(e);
        return a
    }

    function Ke(a) {
        if (!a.g) {
            var b = {}, c = {};
            Le(a, c) && (b.s = c, a.rules = null);
            b.cssText = a.parsedCssText.replace(Td, "").replace(Kd, "");
            a.g = b
        }
    }

    function Le(a, b) {
        var c = a.g;
        if (c) {
            if (c.s) return Object.assign(b, c.s), !0
        } else {
            c = a.parsedCssText;
            for (var d; a = Kd.exec(c);) {
                d = (a[2] || a[3]).trim();
                if ("inherit" !== d || "unset" !== d) b[a[1].trim()] = d;
                d = !0
            }
            return d
        }
    }

    function Me(a, b, c) {
        b && (b = 0 <= b.indexOf(";") ? Ne(a, b, c) : Zd(b, function (b, e, f, h) {
            if (!e) return b + h;
            (e = Me(a, c[e], c)) && "initial" !== e ? "apply-shim-inherit" === e && (e = "inherit") : e = Me(a, c[f] || f, c) || f;
            return b + (e || "") + h
        }));
        return b && b.trim() || ""
    }

    function Ne(a, b, c) {
        b = b.split(";");
        for (var d = 0, e, f; d < b.length; d++) if (e = b[d]) {
            Pd.lastIndex = 0;
            if (f = Pd.exec(e)) e = Me(a, c[f[1]], c); else if (f = e.indexOf(":"), -1 !== f) {
                var h = e.substring(f);
                h = h.trim();
                h = Me(a, h, c) || h;
                e = e.substring(0, f) + h
            }
            b[d] = e && e.lastIndexOf(";") === e.length - 1 ? e.slice(0, -1) : e || ""
        }
        return b.join(";")
    }

    function Oe(a, b) {
        var c = {}, d = [];
        T(a, function (a) {
            a.g || Ke(a);
            var e = a.j || a.parsedSelector;
            b && a.g.s && e && Fe.call(b, e) && (Le(a, c), a = a.index, e = parseInt(a / 32, 10), d[e] = (d[e] || 0) | 1 << a % 32)
        }, null, !0);
        return {s: c, key: d}
    }

    function Pe(a, b, c, d) {
        b.g || Ke(b);
        if (b.g.s) {
            var e = V(a);
            a = e.is;
            e = e.J;
            e = a ? he(a, e) : "html";
            var f = b.parsedSelector, h = ":host > *" === f || "html" === f, g = 0 === f.indexOf(":host") && !h;
            "shady" === c && (h = f === e + " > *." + e || -1 !== f.indexOf("html"), g = !h && 0 === f.indexOf(e));
            "shadow" === c && (h = ":host > *" === f || "html" === f, g = g && !h);
            if (h || g) c = e, g && (Q && !b.j && (b.j = je(W, b, W.b, a ? ie + a : "", e)), c = b.j || e), d({
                Ma: c,
                Fa: g,
                Wa: h
            })
        }
    }

    function Qe(a, b) {
        var c = {}, d = {}, e = b && b.__cssBuild;
        T(b, function (b) {
            Pe(a, b, e, function (e) {
                Fe.call(a.f || a, e.Ma) && (e.Fa ? Le(b, c) : Le(b, d))
            })
        }, null, !0);
        return {La: d, Da: c}
    }

    function Re(a, b, c, d) {
        var e = V(b), f = he(e.is, e.J),
            h = new RegExp("(?:^|[^.#[:])" + (b.extends ? "\\" + f.slice(0, -1) + "\\]" : f) + "($|[.:[\\s>+~])");
        e = X(b).u;
        var g = Se(e, d);
        return fe(b, e, function (b) {
            var e = "";
            b.g || Ke(b);
            b.g.cssText && (e = Ne(a, b.g.cssText, c));
            b.cssText = e;
            if (!Q && !Wd(b) && b.cssText) {
                var k = e = b.cssText;
                null == b.ha && (b.ha = Rd.test(e));
                if (b.ha) if (null == b.O) {
                    b.O = [];
                    for (var n in g) k = g[n], k = k(e), e !== k && (e = k, b.O.push(n))
                } else {
                    for (n = 0; n < b.O.length; ++n) k = g[b.O[n]], e = k(e);
                    k = e
                }
                b.cssText = k;
                b.j = b.j || b.selector;
                e = "." + d;
                n = b.j.split(",");
                k = 0;
                for (var v = n.length, F; k < v && (F = n[k]); k++) n[k] = F.match(h) ? F.replace(f, e) : e + " " + F;
                b.selector = n.join(",")
            }
        })
    }

    function Se(a, b) {
        a = a.b;
        var c = {};
        if (!Q && a) for (var d = 0, e = a[d]; d < a.length; e = a[++d]) {
            var f = e, h = b;
            f.f = new RegExp("\\b" + f.keyframesName + "(?!\\B|-)", "g");
            f.a = f.keyframesName + "-" + h;
            f.j = f.j || f.selector;
            f.selector = f.j.replace(f.keyframesName, f.a);
            c[e.keyframesName] = Te(e)
        }
        return c
    }

    function Te(a) {
        return function (b) {
            return b.replace(a.f, a.a)
        }
    }

    function Ue(a, b) {
        var c = Ve, d = Vd(a);
        a.textContent = S(d, function (a) {
            var d = a.cssText = a.parsedCssText;
            a.g && a.g.cssText && (d = d.replace(Ed, "").replace(Fd, ""), a.cssText = Ne(c, d, b))
        })
    }

    q.Object.defineProperties(Ie.prototype, {
        a: {
            configurable: !0, enumerable: !0, get: function () {
                return "x-scope"
            }
        }
    });
    var Ve = new Ie;
    var We = {}, Xe = window.customElements;
    if (Xe && !Q) {
        var Ye = Xe.define;
        Xe.define = function (a, b, c) {
            var d = document.createComment(" Shady DOM styles for " + a + " "), e = document.head;
            e.insertBefore(d, (U ? U.nextSibling : null) || e.firstChild);
            U = d;
            We[a] = d;
            return Ye.call(Xe, a, b, c)
        }
    }
    ;

    function Ze() {
        this.cache = {}
    }

    Ze.prototype.store = function (a, b, c, d) {
        var e = this.cache[a] || [];
        e.push({s: b, styleElement: c, o: d});
        100 < e.length && e.shift();
        this.cache[a] = e
    };
    Ze.prototype.fetch = function (a, b, c) {
        if (a = this.cache[a]) for (var d = a.length - 1; 0 <= d; d--) {
            var e = a[d], f;
            a:{
                for (f = 0; f < c.length; f++) {
                    var h = c[f];
                    if (e.s[h] !== b[h]) {
                        f = !1;
                        break a
                    }
                }
                f = !0
            }
            if (f) return e
        }
    };

    function $e() {
    }

    function af(a) {
        for (var b = 0; b < a.length; b++) {
            var c = a[b];
            if (c.target !== document.documentElement && c.target !== document.head) for (var d = 0; d < c.addedNodes.length; d++) {
                var e = c.addedNodes[d];
                if (e.nodeType === Node.ELEMENT_NODE) {
                    var f = e.getRootNode();
                    var h = e;
                    var g = [];
                    h.classList ? g = Array.from(h.classList) : h instanceof window.SVGElement && h.hasAttribute("class") && (g = h.getAttribute("class").split(/\s+/));
                    h = g;
                    g = h.indexOf(W.a);
                    if ((h = -1 < g ? h[g + 1] : "") && f === e.ownerDocument) be(e, h, !0); else if (f.nodeType === Node.DOCUMENT_FRAGMENT_NODE &&
                        (f = f.host)) if (f = V(f).is, h === f) for (e = window.ShadyDOM.nativeMethods.querySelectorAll.call(e, ":not(." + W.a + ")"), f = 0; f < e.length; f++) de(e[f], h); else h && be(e, h, !0), be(e, f)
                }
            }
        }
    }

    if (!Q) {
        var bf = new MutationObserver(af), cf = function (a) {
            bf.observe(a, {childList: !0, subtree: !0})
        };
        if (window.customElements && !window.customElements.polyfillWrapFlushCallback) cf(document); else {
            var df = function () {
                cf(document.body)
            };
            window.HTMLImports ? window.HTMLImports.whenReady(df) : requestAnimationFrame(function () {
                if ("loading" === document.readyState) {
                    var a = function () {
                        df();
                        document.removeEventListener("readystatechange", a)
                    };
                    document.addEventListener("readystatechange", a)
                } else df()
            })
        }
        $e = function () {
            af(bf.takeRecords())
        }
    }
    var ef = $e;
    var ff = {};
    var gf = Promise.resolve();

    function hf(a) {
        if (a = ff[a]) a._applyShimCurrentVersion = a._applyShimCurrentVersion || 0, a._applyShimValidatingVersion = a._applyShimValidatingVersion || 0, a._applyShimNextVersion = (a._applyShimNextVersion || 0) + 1
    }

    function jf(a) {
        return a._applyShimCurrentVersion === a._applyShimNextVersion
    }

    function kf(a) {
        a._applyShimValidatingVersion = a._applyShimNextVersion;
        a.a || (a.a = !0, gf.then(function () {
            a._applyShimCurrentVersion = a._applyShimNextVersion;
            a.a = !1
        }))
    };var lf = null, mf = window.HTMLImports && window.HTMLImports.whenReady || null, nf;

    function of(a) {
        requestAnimationFrame(function () {
            mf ? mf(a) : (lf || (lf = new Promise(function (a) {
                nf = a
            }), "complete" === document.readyState ? nf() : document.addEventListener("readystatechange", function () {
                "complete" === document.readyState && nf()
            })), lf.then(function () {
                a && a()
            }))
        })
    };var pf = new Ze;

    function Y() {
        var a = this;
        this.F = {};
        this.c = document.documentElement;
        var b = new rd;
        b.rules = [];
        this.f = Ee(this.c, new De(b));
        this.m = !1;
        this.b = this.a = null;
        of(function () {
            qf(a)
        })
    }

    p = Y.prototype;
    p.ma = function () {
        ef()
    };
    p.Ba = function (a) {
        return Vd(a)
    };
    p.Oa = function (a) {
        return S(a)
    };
    p.prepareTemplate = function (a, b, c) {
        if (!a.b) {
            a.b = !0;
            a.name = b;
            a.extends = c;
            ff[b] = a;
            var d = (d = a.content.querySelector("style")) ? d.getAttribute("css-build") || "" : "";
            var e = [];
            for (var f = a.content.querySelectorAll("style"), h = 0; h < f.length; h++) {
                var g = f[h];
                if (g.hasAttribute("shady-unscoped")) {
                    if (!Q) {
                        var k = g.textContent;
                        Ud.has(k) || (Ud.add(k), k = g.cloneNode(!0), document.head.appendChild(k));
                        g.parentNode.removeChild(g)
                    }
                } else e.push(g.textContent), g.parentNode.removeChild(g)
            }
            e = e.join("").trim();
            c = {is: b, extends: c, Ta: d};
            Q || be(a.content, b);
            qf(this);
            f = Pd.test(e) || Kd.test(e);
            Pd.lastIndex = 0;
            Kd.lastIndex = 0;
            e = sd(e);
            f && R && this.a && this.a.transformRules(e, b);
            a._styleAst = e;
            a.c = d;
            d = [];
            R || (d = Je(a._styleAst));
            if (!d.length || R) e = Q ? a.content : null, b = We[b], f = fe(c, a._styleAst), b = f.length ? Xd(f, c.is, e, b) : void 0, a.ga = b;
            a.wa = d
        }
    };

    function rf(a) {
        !a.b && window.ShadyCSS && window.ShadyCSS.CustomStyleInterface && (a.b = window.ShadyCSS.CustomStyleInterface, a.b.transformCallback = function (b) {
            a.ka(b)
        }, a.b.validateCallback = function () {
            requestAnimationFrame(function () {
                (a.b.enqueued || a.m) && a.A()
            })
        })
    }

    function qf(a) {
        !a.a && window.ShadyCSS && window.ShadyCSS.ApplyShim && (a.a = window.ShadyCSS.ApplyShim, a.a.invalidCallback = hf);
        rf(a)
    }

    p.A = function () {
        qf(this);
        if (this.b) {
            var a = this.b.processStyles();
            if (this.b.enqueued) {
                if (R) for (var b = 0; b < a.length; b++) {
                    var c = this.b.getStyleForCustomStyle(a[b]);
                    if (c && R && this.a) {
                        var d = Vd(c);
                        qf(this);
                        this.a.transformRules(d);
                        c.textContent = S(d)
                    }
                } else for (sf(this, this.c, this.f), b = 0; b < a.length; b++) (c = this.b.getStyleForCustomStyle(a[b])) && Ue(c, this.f.v);
                this.b.enqueued = !1;
                this.m && !R && this.styleDocument()
            }
        }
    };
    p.styleElement = function (a, b) {
        var c = V(a).is, d = X(a);
        if (!d) {
            var e = V(a);
            d = e.is;
            e = e.J;
            var f = We[d];
            d = ff[d];
            if (d) {
                var h = d._styleAst;
                var g = d.wa
            }
            d = Ee(a, new De(h, f, g, e))
        }
        a !== this.c && (this.m = !0);
        b && (d.B = d.B || {}, Object.assign(d.B, b));
        if (R) {
            if (d.B) {
                b = d.B;
                for (var k in b) null === k ? a.style.removeProperty(k) : a.style.setProperty(k, b[k])
            }
            if (((k = ff[c]) || a === this.c) && k && k.ga && !jf(k)) {
                if (jf(k) || k._applyShimValidatingVersion !== k._applyShimNextVersion) qf(this), this.a && this.a.transformRules(k._styleAst, c), k.ga.textContent =
                    fe(a, d.u), kf(k);
                Q && (c = a.shadowRoot) && (c.querySelector("style").textContent = fe(a, d.u));
                d.u = k._styleAst
            }
        } else if (sf(this, a, d), d.ba && d.ba.length) {
            c = d;
            k = V(a).is;
            d = (b = pf.fetch(k, c.v, c.ba)) ? b.styleElement : null;
            h = c.o;
            (g = b && b.o) || (g = this.F[k] = (this.F[k] || 0) + 1, g = k + "-" + g);
            c.o = g;
            g = c.o;
            e = Ve;
            e = d ? d.textContent || "" : Re(e, a, c.v, g);
            f = X(a);
            var l = f.a;
            l && !Q && l !== d && (l._useCount--, 0 >= l._useCount && l.parentNode && l.parentNode.removeChild(l));
            Q ? f.a ? (f.a.textContent = e, d = f.a) : e && (d = Xd(e, g, a.shadowRoot, f.b)) : d ? d.parentNode ||
                (He && -1 < e.indexOf("@media") && (d.textContent = e), Yd(d, null, f.b)) : e && (d = Xd(e, g, null, f.b));
            d && (d._useCount = d._useCount || 0, f.a != d && d._useCount++, f.a = d);
            g = d;
            Q || (d = c.o, f = e = a.getAttribute("class") || "", h && (f = e.replace(new RegExp("\\s*x-scope\\s*" + h + "\\s*", "g"), " ")), f += (f ? " " : "") + "x-scope " + d, e !== f && $d(a, f));
            b || pf.store(k, c.v, g, c.o)
        }
    };

    function tf(a, b) {
        return (b = b.getRootNode().host) ? X(b) ? b : tf(a, b) : a.c
    }

    function sf(a, b, c) {
        a = tf(a, b);
        var d = X(a);
        a = Object.create(d.v || null);
        var e = Qe(b, c.u);
        b = Oe(d.u, b).s;
        Object.assign(a, e.Da, b, e.La);
        b = c.B;
        for (var f in b) if ((e = b[f]) || 0 === e) a[f] = e;
        f = Ve;
        b = Object.getOwnPropertyNames(a);
        for (e = 0; e < b.length; e++) d = b[e], a[d] = Me(f, a[d], a);
        c.v = a
    }

    p.styleDocument = function (a) {
        this.styleSubtree(this.c, a)
    };
    p.styleSubtree = function (a, b) {
        var c = a.shadowRoot;
        (c || a === this.c) && this.styleElement(a, b);
        if (b = c && (c.children || c.childNodes)) for (a = 0; a < b.length; a++) this.styleSubtree(b[a]); else if (a = a.children || a.childNodes) for (b = 0; b < a.length; b++) this.styleSubtree(a[b])
    };
    p.ka = function (a) {
        var b = this, c = Vd(a);
        T(c, function (a) {
            if (Q) Ae(a); else {
                var c = W;
                a.selector = a.parsedSelector;
                Ae(a);
                a.selector = a.j = je(c, a, c.c, void 0, void 0)
            }
            R && (qf(b), b.a && b.a.transformRule(a))
        });
        R ? a.textContent = S(c) : this.f.u.rules.push(c)
    };
    p.getComputedStyleValue = function (a, b) {
        var c;
        R || (c = (X(a) || X(tf(this, a))).v[b]);
        return (c = c || window.getComputedStyle(a).getPropertyValue(b)) ? c.trim() : ""
    };
    p.Na = function (a, b) {
        var c = a.getRootNode();
        b = b ? b.split(/\s/) : [];
        c = c.host && c.host.localName;
        if (!c) {
            var d = a.getAttribute("class");
            if (d) {
                d = d.split(/\s/);
                for (var e = 0; e < d.length; e++) if (d[e] === W.a) {
                    c = d[e + 1];
                    break
                }
            }
        }
        c && b.push(W.a, c);
        R || (c = X(a)) && c.o && b.push(Ve.a, c.o);
        $d(a, b.join(" "))
    };
    p.xa = function (a) {
        return X(a)
    };
    Y.prototype.flush = Y.prototype.ma;
    Y.prototype.prepareTemplate = Y.prototype.prepareTemplate;
    Y.prototype.styleElement = Y.prototype.styleElement;
    Y.prototype.styleDocument = Y.prototype.styleDocument;
    Y.prototype.styleSubtree = Y.prototype.styleSubtree;
    Y.prototype.getComputedStyleValue = Y.prototype.getComputedStyleValue;
    Y.prototype.setElementClass = Y.prototype.Na;
    Y.prototype._styleInfoForNode = Y.prototype.xa;
    Y.prototype.transformCustomStyleForDocument = Y.prototype.ka;
    Y.prototype.getStyleAst = Y.prototype.Ba;
    Y.prototype.styleAstToString = Y.prototype.Oa;
    Y.prototype.flushCustomStyles = Y.prototype.A;
    Object.defineProperties(Y.prototype, {
        nativeShadow: {
            get: function () {
                return Q
            }
        }, nativeCss: {
            get: function () {
                return R
            }
        }
    });
    var Z = new Y, uf, vf;
    window.ShadyCSS && (uf = window.ShadyCSS.ApplyShim, vf = window.ShadyCSS.CustomStyleInterface);
    window.ShadyCSS = {
        ScopingShim: Z, prepareTemplate: function (a, b, c) {
            Z.A();
            Z.prepareTemplate(a, b, c)
        }, styleSubtree: function (a, b) {
            Z.A();
            Z.styleSubtree(a, b)
        }, styleElement: function (a) {
            Z.A();
            Z.styleElement(a)
        }, styleDocument: function (a) {
            Z.A();
            Z.styleDocument(a)
        }, getComputedStyleValue: function (a, b) {
            return Z.getComputedStyleValue(a, b)
        }, nativeCss: R, nativeShadow: Q
    };
    uf && (window.ShadyCSS.ApplyShim = uf);
    vf && (window.ShadyCSS.CustomStyleInterface = vf);
    /*

 Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 Code distributed by Google as part of the polymer project is also
 subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
    var wf = window.customElements, xf = window.HTMLImports, yf = window.HTMLTemplateElement;
    window.WebComponents = window.WebComponents || {};
    if (wf && wf.polyfillWrapFlushCallback) {
        var zf, Af = function () {
            if (zf) {
                yf.ya && yf.ya(window.document);
                var a = zf;
                zf = null;
                a();
                return !0
            }
        }, Bf = xf.whenReady;
        wf.polyfillWrapFlushCallback(function (a) {
            zf = a;
            Bf(Af)
        });
        xf.whenReady = function (a) {
            Bf(function () {
                Af() ? xf.whenReady(a) : a()
            })
        }
    }
    xf.whenReady(function () {
        requestAnimationFrame(function () {
            window.WebComponents.ready = !0;
            document.dispatchEvent(new CustomEvent("WebComponentsReady", {bubbles: !0}))
        })
    });
    var Cf = document.createElement("style");
    Cf.textContent = "body {transition: opacity ease-in 0.2s; } \nbody[unresolved] {opacity: 0; display: block; overflow: hidden; position: relative; } \n";
    var Df = document.querySelector("head");
    Df.insertBefore(Cf, Df.firstChild);
}).call(this);

//# sourceMappingURL=webcomponents-hi-sd-ce.js.map
